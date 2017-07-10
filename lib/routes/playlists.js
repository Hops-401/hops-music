const Router = require('express').Router;
const router = Router();
const Playlist = require('../models/playlist');
const User = require('../models/user');
const rp = require('request-promise');

function addPlaylist(user) {
    // requesting access token from refresh token
    var authOptions = {
        url: `https://api.spotify.com/v1/users/${user.spotify.spotify_id}/playlists`,
        headers: { 'Authorization': 'Bearer ' + user.spotify.access_token},
        json: true,
        body: {
            name: new Date()
        }
    };

    return rp.post(authOptions)
        .then(result => result.id)
        .then(playlistId => playlistId);
}

function addSongs(selectedUser, selectedPlaylistId, playlistObj) {
    // requesting access token from refresh token
    let songUris = playlistObj.songs.map(song => song.spotifyUri);
    let authOptions = {
        url: `https://api.spotify.com/v1/users/${selectedUser.spotify.spotify_id}/playlists/${selectedPlaylistId}/tracks?uris=${songUris.toString()}`,
        headers: { 'Authorization': 'Bearer ' + selectedUser.spotify.access_token},
        json: true
    };

    return rp.post(authOptions)
        .then(result => result);
}

router.get('/', (req, res, next) => {
    Playlist.find()
        .lean()
        .select('-__v')
        .then(playlists => res.send(playlists))
        .catch(next);
})

    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        Playlist.findById(id).lean()
            .then(playlist => {
                if (!playlist) res.status(404).send(`${id} not found`);
                else res.send(playlist);
            })
            .catch(next);
    })

    .post('/', (req, res, next) => {
        new Playlist(req.body)
            .save()
            .then(playlist => res.send(playlist))
            .catch(next);
    })


    .post('/export/:idPlaylist/:idUser', (req, res, next) => { 
        let playplay, user;
        Promise.all([
            Playlist.findById(req.params.idPlaylist),
            User.findById(req.params.idUser)
        ])
        .then(results => {
            playplay = results[0];
            user = results[1];
            return addPlaylist(user);
        })
        .then(createdPlaylistId => {
            return addSongs(user, createdPlaylistId, playplay);
        })
        .then(results => res.send(results))
        .catch(next);

    })

    .put('/:id', (req, res, next) => {
        Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(playlist => res.send(playlist))
            .catch(next);
    })

    .patch('/:id/:songId', (req, res, next) => {
        Playlist.findByIdAndUpdate(req.params.id,
            { $pull: { 'songs': { '_id': req.params.songId } } }, { new: true })
            .then(playlist => res.send(playlist))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Playlist.findByIdAndRemove(req.params.id)
            .then(response => {
                res.send({ removed: response ? true : false });
            })
            .catch(next);
    });

module.exports = router;
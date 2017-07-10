# Hops: Music Community Database

HOPS MISSION:
 - Spotify values access and volume. Hops Music values community and curation.
 - Hops Music provides users with custom playlists based on:
        A. their friends listening activity
        B. their own user preferences (favorite artists, favorite songs, ect)
 - Playlists are vetted by your own trusted community, not calculating marketers.
 - Grow your music knowledge while fostering community.

 HOPS 2.0: the future of HOPS Music:
 - Integrate Songkick or BandsInTown to add local show information for favorited artists.

 GETTING STARTED:
 - Create a Hops Music account at https://hops-music.herokuapp.com/
 - Link to your Spotify account by following Spotify Login prompt.
 - Login to your Hops account and add friends to follow.
 - Add prefered artists to your "favorites" for more user-targeted playlists.

 ```
 If you don't have a Spotify account, you can download & create one here:
https://support.spotify.com/us/account_payment_help/account_basics/create-your-spotify-account
 ```

 END TO END TESTS:
 - We provided end to end tests for /playlists, /songs, /users, /spotify
 - Users can save and update playlists.  
 - Users can add and delete songs.
 - Users can add friends.

 DEPLOYMENT:
 - Hops music is deployed live on Heroku.

 BUILT WITH:
  - JS
  - Node.js
  - Express Framwork
  - MongoDB/Mongoose
  - Spotify API
  - Bootstrap
  - Chai/Chai-HTTP: Testing frameworks
  - BCRYPT: hash passwords

  DEVELOPERS:
- Chris Wallace: Backend Dev
- Keeley Hammond: Backend Dev
- Ivy Patton: Backend Dev

FOR DEVELOPMENT:
SPOTIFY API:
Below are sample GET urls, as well as the objects returned:

/GET User:
```
https://api.spotify.com/v1/users/126171140/  //This is Ivy

{
  "display_name" : "Lila Ivy",
  "external_urls" : {
    "spotify" : "https://open.spotify.com/user/126171140"
  },
  "followers" : {
    "href" : null,
    "total" : 8
  },
  "href" : "https://api.spotify.com/v1/users/126171140",
  "id" : "126171140",
  "images" : [ {
    "height" : null,
    "url" : "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/16142623_10154302009612336_6657857095827464719_n.jpg?oh=1fc421a158b40eba3fa7e86311ac3fee&oe=5977016F",
    "width" : null
  } ],
  "type" : "user",
  "uri" : "spotify:user:126171140"
}
```

/GET Playlist:
```
https://api.spotify.com/v1/users/126171140/playlists?limit=1

{
  "href" : "https://api.spotify.com/v1/users/126171140/playlists?offset=0&limit=1",
  "items" : [ {
    "collaborative" : false,
    "external_urls" : {
      "spotify" : "http://open.spotify.com/user/126171140/playlist/6UhgDBPnm44HDfIBbgbEo3"
    },
    "href" : "https://api.spotify.com/v1/users/126171140/playlists/6UhgDBPnm44HDfIBbgbEo3",
    "id" : "6UhgDBPnm44HDfIBbgbEo3",
    "images" : [ ],
    "name" : "HARDLY ART",
    "owner" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/126171140"
      },
      "href" : "https://api.spotify.com/v1/users/126171140",
      "id" : "126171140",
      "type" : "user",
      "uri" : "spotify:user:126171140"
    },
    "public" : true,
    "snapshot_id" : "mB1T5EVaHqz2SaG+UptfX2u55hmyltommKj7ltre0ixwNixCCPjT0R9r7HNNiRjC",
    "tracks" : {
      "href" : "https://api.spotify.com/v1/users/126171140/playlists/6UhgDBPnm44HDfIBbgbEo3/tracks",
      "total" : 0
    },
    "type" : "playlist",
    "uri" : "spotify:user:126171140:playlist:6UhgDBPnm44HDfIBbgbEo3"
  } ],
  "limit" : 1,
  "next" : "https://api.spotify.com/v1/users/126171140/playlists?offset=1&limit=1",
  "offset" : 0,
  "previous" : null,
  "total" : 23
}
```

/GET Track:
```
https://api.spotify.com/v1/users/126171140/playlists/3AEDUXjNVitkRque3w1ObS/tracks?limit=1

{
  "href" : "https://api.spotify.com/v1/users/126171140/playlists/3AEDUXjNVitkRque3w1ObS/tracks?offset=0&limit=1",
  "items" : [ {
    "added_at" : "2017-04-16T00:56:20Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/126171140"
      },
      "href" : "https://api.spotify.com/v1/users/126171140",
      "id" : "126171140",
      "type" : "user",
      "uri" : "spotify:user:126171140"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5DGJC3n9DS0Y9eY5ul9y0O"
          },
          "href" : "https://api.spotify.com/v1/artists/5DGJC3n9DS0Y9eY5ul9y0O",
          "id" : "5DGJC3n9DS0Y9eY5ul9y0O",
          "name" : "Marika Hackman",
          "type" : "artist",
          "uri" : "spotify:artist:5DGJC3n9DS0Y9eY5ul9y0O"
        } ],
        "available_markets" : [ "AR", "BO", "BR", "CA", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1Iz7hSeb31b8OhKTsatM4p"
        },
        "href" : "https://api.spotify.com/v1/albums/1Iz7hSeb31b8OhKTsatM4p",
        "id" : "1Iz7hSeb31b8OhKTsatM4p",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/121878286663bca557f750e10ebedf028447c678",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bb52aeb5070db4afbe70d016152e8701b5ef822f",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/f6f250b5a3e4b0c440d1eb34f8686dca514b37ef",
          "width" : 64
        } ],
        "name" : "My Lover Cindy (Live from Marika's Bedroom)",
        "type" : "album",
        "uri" : "spotify:album:1Iz7hSeb31b8OhKTsatM4p"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5DGJC3n9DS0Y9eY5ul9y0O"
        },
        "href" : "https://api.spotify.com/v1/artists/5DGJC3n9DS0Y9eY5ul9y0O",
        "id" : "5DGJC3n9DS0Y9eY5ul9y0O",
        "name" : "Marika Hackman",
        "type" : "artist",
        "uri" : "spotify:artist:5DGJC3n9DS0Y9eY5ul9y0O"
      } ],
      "available_markets" : [ "AR", "BO", "BR", "CA", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 183533,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USSUB1720217"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6WIvUw9VENt4dqF3epPtnV"
      },
      "href" : "https://api.spotify.com/v1/tracks/6WIvUw9VENt4dqF3epPtnV",
      "id" : "6WIvUw9VENt4dqF3epPtnV",
      "name" : "My Lover Cindy - Live from Marika's Bedroom",
      "popularity" : 19,
      "preview_url" : "https://p.scdn.co/mp3-preview/335769495e754a3740a6b09dabe235fba14acd04?cid=5a849416a63c44c1a4450c4bcdf2b527",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:6WIvUw9VENt4dqF3epPtnV"
    }
  } ],
  "limit" : 1,
  "next" : "https://api.spotify.com/v1/users/126171140/playlists/3AEDUXjNVitkRque3w1ObS/tracks?offset=1&limit=1",
  "offset" : 0,
  "previous" : null,
  "total" : 17
}
```
/GET user top track:
When retrieving the token, set `user-top-read` within the scope in app.js. Both artists and tracks can be retrieved this way.
```
https://api.spotify.com/v1/me/top/tracks?limit=1

{
  "items" : [ {
    "album" : {
      "album_type" : "ALBUM",
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/0WtCqmpVN7rRGfDMSWSXBA"
      },
      "href" : "https://api.spotify.com/v1/albums/0WtCqmpVN7rRGfDMSWSXBA",
      "id" : "0WtCqmpVN7rRGfDMSWSXBA",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/72d0fb955bd92e5fd2866a556d72a8e2f16fcec2",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/151a95335af82cf47211165b4f4908cfda27ee3c",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ddcd0c357723f6441cbeae07181fa7dee0a7e63e",
        "width" : 64
      } ],
      "name" : "Kill The Lights (Deluxe)",
      "type" : "album",
      "uri" : "spotify:album:0WtCqmpVN7rRGfDMSWSXBA"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0BvkDsjIUla7X0k6CSWh1I"
      },
      "href" : "https://api.spotify.com/v1/artists/0BvkDsjIUla7X0k6CSWh1I",
      "id" : "0BvkDsjIUla7X0k6CSWh1I",
      "name" : "Luke Bryan",
      "type" : "artist",
      "uri" : "spotify:artist:0BvkDsjIUla7X0k6CSWh1I"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3RXtieA0L2l22SWlOUMNca"
      },
      "href" : "https://api.spotify.com/v1/artists/3RXtieA0L2l22SWlOUMNca",
      "id" : "3RXtieA0L2l22SWlOUMNca",
      "name" : "Karen Fairchild",
      "type" : "artist",
      "uri" : "spotify:artist:3RXtieA0L2l22SWlOUMNca"
    } ],
    "disc_number" : 1,
    "duration_ms" : 190773,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USUM71508384"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/0RE8WWlaCQM6M4XHUK3u7b"
    },
    "href" : "https://api.spotify.com/v1/tracks/0RE8WWlaCQM6M4XHUK3u7b",
    "id" : "0RE8WWlaCQM6M4XHUK3u7b",
    "is_playable" : true,
    "name" : "Home Alone Tonight",
    "popularity" : 67,
    "preview_url" : "https://p.scdn.co/mp3-preview/f5d0a4e4377d9014e27a2c8692151e37414d5b57",
    "track_number" : 4,
    "type" : "track",
    "uri" : "spotify:track:0RE8WWlaCQM6M4XHUK3u7b"
  } ],
  "total" : 50,
  "limit" : 1,
  "offset" : 0,
  "href" : "https://api.spotify.com/v1/me/top/tracks?limit=1&offset=0",
  "previous" : null,
  "next" : "https://api.spotify.com/v1/me/top/tracks?limit=1&offset=1"
}
```
GET/ recently played
When retrieving the token, set `user-read-recently-played` within the scope in app.js.

```
```

GET/ seed recommendations
DANCEABILITY
```
https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&min_energy=0.4&min_popularity=50&min_danceability=0.8&market=US


{
  "tracks" : [ {
    "album" : {
      "album_type" : "ALBUM",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4NHQUGzhtTLFvgF5SZesLK"
        },
        "href" : "https://api.spotify.com/v1/artists/4NHQUGzhtTLFvgF5SZesLK",
        "id" : "4NHQUGzhtTLFvgF5SZesLK",
        "name" : "Tove Lo",
        "type" : "artist",
        "uri" : "spotify:artist:4NHQUGzhtTLFvgF5SZesLK"
      } ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/1tuekzsMZQOuiMejKP6t2Y"
      },
      "href" : "https://api.spotify.com/v1/albums/1tuekzsMZQOuiMejKP6t2Y",
      "id" : "1tuekzsMZQOuiMejKP6t2Y",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/46cadf3fab5d422211c19207beca72b823120c00",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/34306a13b7dcaeea8d064bc2710d0c27f355982e",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/423613b1ab4ebd855bfe61bc2c7a7c398647bb9a",
        "width" : 64
      } ],
      "name" : "Lady Wood",
      "type" : "album",
      "uri" : "spotify:album:1tuekzsMZQOuiMejKP6t2Y"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/4NHQUGzhtTLFvgF5SZesLK"
      },
      "href" : "https://api.spotify.com/v1/artists/4NHQUGzhtTLFvgF5SZesLK",
      "id" : "4NHQUGzhtTLFvgF5SZesLK",
      "name" : "Tove Lo",
      "type" : "artist",
      "uri" : "spotify:artist:4NHQUGzhtTLFvgF5SZesLK"
    } ],
    "disc_number" : 1,
    "duration_ms" : 231025,
    "explicit" : true,
    "external_ids" : {
      "isrc" : "SEUM71601203"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/4vIClNt19EynTBe133jer3"
    },
    "href" : "https://api.spotify.com/v1/tracks/4vIClNt19EynTBe133jer3",
    "id" : "4vIClNt19EynTBe133jer3",
    "is_playable" : true,
    "linked_from" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1gFwPpN5n2oG0Sha0kYiaq"
      },
      "href" : "https://api.spotify.com/v1/tracks/1gFwPpN5n2oG0Sha0kYiaq",
      "id" : "1gFwPpN5n2oG0Sha0kYiaq",
      "type" : "track",
      "uri" : "spotify:track:1gFwPpN5n2oG0Sha0kYiaq"
    },
    "name" : "Keep It Simple",
    "popularity" : 51,
    "preview_url" : "https://p.scdn.co/mp3-preview/62859ec5f21addb460d92dc942651d49e085a42d?cid=5a849416a63c44c1a4450c4bcdf2b527",
    "track_number" : 10,
    "type" : "track",
    "uri" : "spotify:track:4vIClNt19EynTBe133jer3"
  } ],
  "seeds" : [ {
    "initialPoolSize" : 250,
    "afterFilteringSize" : 227,
    "afterRelinkingSize" : 227,
    "id" : "4NHQUGzhtTLFvgF5SZesLK",
    "type" : "ARTIST",
    "href" : "https://api.spotify.com/v1/artists/4NHQUGzhtTLFvgF5SZesLK"
  }, {
    "initialPoolSize" : 250,
    "afterFilteringSize" : 89,
    "afterRelinkingSize" : 83,
    "id" : "0c6xIDDpzE81m2q797ordA",
    "type" : "TRACK",
    "href" : "https://api.spotify.com/v1/tracks/0c6xIDDpzE81m2q797ordA"
  } ]
}
```



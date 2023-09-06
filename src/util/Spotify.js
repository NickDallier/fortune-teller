

const Spotify = {
    async getAccessToken() {
        const clientId = "a4d6722dadd14db4b15524f607ffa34b"; 
        //const redirectURI = 'http://localhost:3000';
        const redirectURI = 'https://spectacular-lebkuchen-214dca.netlify.app/';
        let accessToken = '';

        if (accessToken) {
            return accessToken;
        }  

        const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

        if (urlAccessToken && urlExpiresIn) {
            accessToken = urlAccessToken[1];
            //const expiresIn = Number(urlExpiresIn[1]);

            return accessToken;
        } else {
            const redirect = await `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = redirect;
        }
    },

    async search(searchText) {
        const token = await Spotify.getAccessToken();

        const spotifyBaseUrl = 'https://api.spotify.com/v1/search';
        const requestParams = `?type=track&q=${searchText}`;
        const urlToFetch = spotifyBaseUrl + requestParams;
        
        try {
          const response = await fetch(urlToFetch, {
            headers: { Authorization: `Bearer ${token}` }
          })
          if (response.ok) {
            const jsonResponse = await response.json();
            const searchResults = jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
            return searchResults;
          }
        } catch (error) {
          console.log(error);
        }
    },

    async savePlaylist(playlistName, playlistTracks) {
        const token = await Spotify.getAccessToken();
        const spotifyBaseUrl = 'https://api.spotify.com/v1/me';
        const urlToFetch = spotifyBaseUrl;
        let userId = '';
        let playlistId = '';

        try {
            const profileResponse = await fetch(urlToFetch, {
              headers: { Authorization: `Bearer ${token}` }
            })
            if (profileResponse.ok) {
              const jsonResponse = await profileResponse.json();
                userId = jsonResponse.id;
                if(userId) {
                    const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    method: 'POST',
                    body: JSON.stringify({
                        name: playlistName,
                        description: 'Playlist made on Jammming app'
                    }),
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json'
                    }});

                    if (playlistResponse.ok) {
                        const playlistJsonResponse = await playlistResponse.json();
                        playlistId = playlistJsonResponse.id;                     
                        if(playlistId) {
                            const playlistTrackResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                            method: 'POST',
                            body: JSON.stringify({
                                uris: playlistTracks.map((playlistTrack) => playlistTrack.uri),
                                position: 0
                            }),
                            headers: {
                                Authorization: `Bearer ${token}`,
                                'Content-type': 'application/json'
                            }});

                            if (playlistTrackResponse.ok) {
                                alert('Playlist Saved Successfully!')
                            }
                        }

                        
                    }
                }
            }
          } catch (error) {
            console.log(error);
          }
    }
}

export default Spotify;
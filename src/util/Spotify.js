

const Spotify = {
    getAccessToken() {
        const clientId = "a4d6722dadd14db4b15524f607ffa34b"; 
        const redirectURI = 'http://localhost:3000';
        let accessToken = '';

        if (accessToken) {
            return accessToken;
        }  
        const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (urlAccessToken && urlExpiresIn) {
            accessToken = urlAccessToken[1];
            const expiresIn = Number(urlExpiresIn[1]);
            alert(accessToken + '<br />>' + expiresIn);
        } else {
            const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = redirect;
        }
    }
}

export default Spotify;
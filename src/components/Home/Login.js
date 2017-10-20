import React from 'react';
import config from '../../config';
import spotifylogo from './spotifylogo.png';
import './Login.css';

const callbackUrl = encodeURIComponent(config.callback);
const authLink = `https://accounts.spotify.com/authorize/?client_id=${config.clientId}&response_type=token&redirect_uri=${callbackUrl}&scope=user-read-private%20user-top-read`;

const Login = () => (
  <div>
    <a href={authLink} className="login">
      <img src={spotifylogo} alt="Spotify Logo" /> Log in with Spotify
    </a>
  </div>
);

export default Login;

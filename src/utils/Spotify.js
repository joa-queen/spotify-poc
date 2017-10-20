import request from 'superagent';

class Spotify {
  constructor(token) {
    this.token = token;
  }

  me() {
    return new Promise((resolve, reject) => {
      request
        .get('https://api.spotify.com/v1/me')
        .set('Authorization', `Bearer ${this.token}`)
        .end((err, res) => {
          if (err) {
            reject(typeof err === 'object' ? err.message : err);
          }

          resolve(res.body);
        });
    });
  }

  topTracks() {
    return new Promise((resolve, reject) => {
      request
        .get('https://api.spotify.com/v1/me/top/tracks')
        .set('Authorization', `Bearer ${this.token}`)
        .end((err, res) => {
          if (err) {
            reject(typeof err === 'object' ? err.message : err);
          }

          resolve(res.body);
        });
    });
  }

  analize(ids) {
    return new Promise((resolve, reject) => {
      request
        .get('https://api.spotify.com/v1/audio-features')
        .query({ ids })
        .set('Authorization', `Bearer ${this.token}`)
        .end((err, res) => {
          if (err) {
            reject(typeof err === 'object' ? err.message : err);
          }

          resolve(res.body);
        });
    });
  }

  search(query) {
    return new Promise((resolve, reject) => {
      request
        .get('https://api.spotify.com/v1/search')
        .query({
          q: query,
          type: 'album',
        })
        .set('Authorization', `Bearer ${this.token}`)
        .end((err, res) => {
          if (err) {
            reject(typeof err === 'object' ? err.message : err);
          }

          resolve(res.body);
        });
    });
  }

  getAlbum(id) {
    return new Promise((resolve, reject) => {
      request
        .get(`https://api.spotify.com/v1/albums/${id}`)
        .set('Authorization', `Bearer ${this.token}`)
        .end((err, res) => {
          if (err) {
            reject(typeof err === 'object' ? err.message : err);
          }

          resolve(res.body);
        });
    });
  }
}

export default Spotify;

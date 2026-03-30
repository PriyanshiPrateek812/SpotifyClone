import axios from "axios";
import { getValidToken } from "./authService";

const BASE_URL = "https://api.spotify.com/v1";

// Axios instance
const spotifyAPI = axios.create({ baseURL: BASE_URL });

// Attach token to every request
spotifyAPI.interceptors.request.use(async (config) => {
  const token = await getValidToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// User
export const getCurrentUser = () => spotifyAPI.get("/me");

// Home
export const getFeaturedPlaylists = () =>
  spotifyAPI.get("/browse/featured-playlists", { params: { limit: 10 } });
export const getNewReleases = () =>
  spotifyAPI.get("/browse/new-releases", { params: { limit: 10 } });
export const getUserTopTracks = () =>
  spotifyAPI.get("/me/top/tracks", { params: { limit: 10 } });
export const getUserTopArtists = () =>
  spotifyAPI.get("/me/top/artists", { params: { limit: 10 } });
export const getRecentlyPlayed = () =>
  spotifyAPI.get("/me/player/recently-played", { params: { limit: 10 } });

// Playlists
export const getUserPlaylists = () =>
  spotifyAPI.get("/me/playlists", { params: { limit: 20 } });
export const getPlaylist = (id) => spotifyAPI.get(`/playlists/${id}`);
export const getPlaylistTracks = (id) =>
  spotifyAPI.get(`/playlists/${id}/tracks`);

// Albums
export const getAlbum = (id) => spotifyAPI.get(`/albums/${id}`);
export const getSavedAlbums = () =>
  spotifyAPI.get("/me/albums", { params: { limit: 20 } });

// Artists
export const getArtist = (id) => spotifyAPI.get(`/artists/${id}`);
export const getArtistTopTracks = (id) =>
  spotifyAPI.get(`/artists/${id}/top-tracks`, { params: { market: "US" } });
export const getArtistAlbums = (id) =>
  spotifyAPI.get(`/artists/${id}/albums`);

// Search
export const search = (query, types = "track,artist,album,playlist") =>
  spotifyAPI.get("/search", { params: { q: query, type: types, limit: 20 } });

// Player
export const getCurrentPlayback = () => spotifyAPI.get("/me/player");
export const playTrack = (uris, contextUri) =>
  spotifyAPI.put("/me/player/play", { uris, context_uri: contextUri });
export const pausePlayback = () => spotifyAPI.put("/me/player/pause");
export const skipToNext = () => spotifyAPI.post("/me/player/next");
export const skipToPrevious = () => spotifyAPI.post("/me/player/previous");
export const setVolume = (volumePercent) =>
  spotifyAPI.put("/me/player/volume", null, {
    params: { volume_percent: volumePercent },
  });
export const seekToPosition = (positionMs) =>
  spotifyAPI.put("/me/player/seek", null, {
    params: { position_ms: positionMs },
  });
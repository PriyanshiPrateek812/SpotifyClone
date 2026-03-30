const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const SCOPES = [
  "user-read-private",
  "user-read-email",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-library-read",
  "user-top-read",
  "user-read-recently-played",
].join(" ");

// Generate a random string for code verifier
function generateRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  let result = "";
  const randomValues = crypto.getRandomValues(new Uint8Array(length));
  randomValues.forEach((val) => {
    result += chars[val % chars.length];
  });
  return result;
}

// SHA-256 hash
async function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return crypto.subtle.digest("SHA-256", data);
}

// Base64 URL encode
function base64URLEncode(buffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

// Start login — redirect to Spotify
export async function loginWithSpotify() {
  const codeVerifier = generateRandomString(64);
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64URLEncode(hashed);

  localStorage.setItem("code_verifier", codeVerifier);

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
  });

  window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

// Exchange code for access token
export async function exchangeToken(code) {
  const codeVerifier = localStorage.getItem("code_verifier");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: codeVerifier,
    }),
  });

  const data = await response.json();

  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
    localStorage.setItem("expires_at", Date.now() + data.expires_in * 1000);
  }

  return data;
}

// Refresh access token
export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("refresh_token");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const data = await response.json();

  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("expires_at", Date.now() + data.expires_in * 1000);
  }

  return data.access_token;
}

// Get valid token (refresh if expired)
export async function getValidToken() {
  const expiresAt = localStorage.getItem("expires_at");
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) return null;

  if (Date.now() > expiresAt - 60000) {
    return await refreshAccessToken();
  }

  return accessToken;
}

// Logout
export function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("expires_at");
  localStorage.removeItem("code_verifier");
  window.location.href = "/";
}
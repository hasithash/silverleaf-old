import 'server-only';
import { fetchAccessToken } from "@humeai/voice";

export const getHumeAccessToken = async () => {
    const accessToken = await fetchAccessToken({
    apiKey: String(process.env.HUME_API_KEY),
    secretKey: String(process.env.HUME_CLIENT_SECRET),
  });

  if (accessToken === 'undefined' || accessToken === null) {
    throw new Error('Could not fetch access token.')
  }
  return accessToken;
}
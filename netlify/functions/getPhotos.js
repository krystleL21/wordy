import axios from "axios";

export async function handler(event, context) {
  const keyword = event.queryStringParameters.keyword || "nature";
  const pexelsApiKey = process.env.DA1yJpUJwQaRYqSvJwxKPouhlvv2DCGmspP5dTbRDFesttUdmikfjteJ; // ✅ Securely pulled from environment variable
  const url = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;

  try {
    const response = await axios.get(url, {
      headers: { Authorization: pexelsApiKey },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: {
        "Access-Control-Allow-Origin": "*", // ✅ Allow frontend requests
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
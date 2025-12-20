import axios from "axios";

export async function handler(event, context) {
  const keyword = event.queryStringParameters.keyword || "nature";
  const pexelsApiKey = process.env.PDA1yJpUJwQaRYqSvJwxKPouhlvv2DCGmspP5dTbRDFesttUdmikfjteJ; // ✅ pulled securely from environment variable
  const pexelsurl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;

  try {
    const response = await axios.get(pexelsurl, {
      headers: { Authorization: pexelsApiKey },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}import axios from "axios";

export async function handler(event, context) {
  const keyword = event.queryStringParameters.keyword || "nature";
  const pexelsApiKey = process.env.DA1yJpUJwQaRYqSvJwxKPouhlvv2DCGmspP5dTbRDFesttUdmikfjteJ // ✅ pulled securely from environment variable
  const pexelsurl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;

  try {
    const response = await axios.get(pexelsurl, {
      headers: { Authorization: pexelsApiKey },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: {
        "Access-Control-Allow-Origin": "*",
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
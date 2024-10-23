import ky from "ky";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const apiKey = process.env.NEWS_API_KEY;
const newsUrl = `${publicRuntimeConfig.newsBaseUrl}?apiKey=${apiKey}&language=en`;

export const getNews = async () => {
  try {
    const response = await ky.get(newsUrl).json();
    return response;
  } catch (error) {
    console.error("Error fetching news:", error);
    return { results: [] };
  }
};

export default getNews;

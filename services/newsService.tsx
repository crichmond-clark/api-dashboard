import ky from "ky";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const apiKey = process.env.NEWS_API_KEY;
const newsUrl = `${publicRuntimeConfig.newsBaseUrl}?api-key=${apiKey}`;

export const getNews = async () => {
  const response = await ky.get(newsUrl).json();
  return response;
};

export default getNews;

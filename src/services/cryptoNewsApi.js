import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '25298e2a03msh02c0180d43a8d6bp19e04fjsndbd412ab8e18',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  },
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news";
console.log("masalanda:::", baseUrl);

const createRequest = (url) => ({url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `news?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;


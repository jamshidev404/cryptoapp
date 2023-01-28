import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoAPI";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
      cryptoNewsApi.middleware,
      cryptoApi.middleware
    ),
});

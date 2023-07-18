import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { 
  GetKpisResponse, 
  GetProductsResponse, 
  GetTransactionsResponse, } from "./types";
  
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"],
  // These are the API calls below using the fetchBaseQuery baseUrl
  // Look at redux tool kit docs for details and examples
  endpoints: (build) => ({
    // This uses the endpoint GetKpis and saves the data in the Kpis tab
    // With typeScript add void to clear errors without having specific arguments
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    // This uses the endpoint GetProducts and saves the data in the Products tab
    // With typeScript add void to clear errors without having specific arguments
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    // This uses the endpoint GetTransactions and saves the data in the Transactions tab
    // With typeScript add void to clear errors without having specific arguments
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});
// This is the easy way to export multiple objects data using the useGet custom hook
export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery} = api;
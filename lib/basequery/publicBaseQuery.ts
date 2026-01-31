import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const publicBaseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
})
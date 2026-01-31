import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const privateBaseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
    credentials: "include"
})
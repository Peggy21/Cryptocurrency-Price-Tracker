import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders ={
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
         'x-rapidapi-key': 'ed66b0e003mshb9d9d72f915d9c0p197ca0jsn183aaa455a85'
     }

const baseUrl= 'https://coinranking1.p.rapidapi.com'



const createRequest = (url) => ({ url, headers: cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
       getCryptos: builder.query({
           query: (count) => createRequest(`/coins?limit=${count}`)
       }),
       getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`)
    }),
    })
})

export const { useGetCryptosQuery , useGetCryptoDetailsQuery } = cryptoApi;
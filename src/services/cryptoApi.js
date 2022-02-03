import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    //    'x-access-token': '53a0b0a7e4f2fa59519e4',

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
    getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      }),

    }),
});

export const { useGetCryptosQuery , useGetCryptoDetailsQuery,  useGetCryptoHistoryQuery, } = cryptoApi;
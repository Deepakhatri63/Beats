import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '4bd67a66a2mshba84e6c5c9fd5b6p17cab5jsn56526364d2bc');
            return headers;
        },


    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' }),
        
        getSongRelated: builder.query({ query: ({ songid }) => `/shazam-songs/list-similarities?id=${songid}` }),
        
        getArtistDetails: builder.query({ query: ({artistId}) => `/artists/get-top-songs?id=${artistId}`}),
        getChartsList: builder.query({ query: () => '/charts/list' }),
        getDetailsList : builder.query({query:({songid}) => `/shazam-songs/get-details?id=${songid}`}),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}`}),
    }),
}); 



export const {
    useGetTopChartsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetChartsListQuery,
    useGetDetailsListQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi(
    {
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/"}),
        tagTypes: ['Cabins'],
        endpoints: builder => ({
            getCabins: builder.query({
                query: () => 'api/cabins/',
                providesTags: ['Cabins']
            }),
            addCabin: builder.mutation({
                query: (cabin) => ({
                    url: 'api/cabins/',
                    method: 'POST',
                    body: cabin
                }),
                invalidatesTags: ['Cabins']
            })
        })
    }
)

export const { useGetCabinsQuery, useAddCabinMutation } = apiSlice

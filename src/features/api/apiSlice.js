import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi(
    {
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/"}),
        endpoints: builder => ({
            getCabins: builder.query({
                query: () => 'api/cabins/'
            }),
            addCabin: builder.mutation({
                query: (cabin) => ({
                    url: 'api/cabins/',
                    method: 'POST',
                    body: cabin
                })
            })
        })
    }
)

export const { useGetCabinsQuery, useAddCabinMutation } = apiSlice

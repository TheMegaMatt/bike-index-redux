import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL, BERLIN_LOCATION} from "../../utils/const";
import {BikeCountRequest, BikeCountResponse, BikeSearchRequest, BikeSearchResponse} from "../../models";

export const bikeSlice = createApi({
    reducerPath: 'bikes',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (builder) => {
        return {
            getBikes: builder.query<BikeSearchResponse, BikeSearchRequest | void>({
                query({page = 1, per_page = 10, stolenness = "proximity", location = BERLIN_LOCATION, distance = "10", query}: BikeSearchRequest) {

                    const s = new URLSearchParams('');
                    s.append("page", page.toString());
                    s.append("per_page", per_page.toString());
                    s.append("location", location);
                    s.append("distance", distance);
                    s.append("stolenness", stolenness);

                    if (query) {
                        s.append("query", query)
                        console.log('adding query');
                    }

                    return `/search?${s.toString()}`;
                },
            }),

            getBikesCount: builder.query<BikeCountResponse, BikeCountRequest | void>({
                query({stolenness = "proximity", location = BERLIN_LOCATION, distance = "10", query}: BikeCountRequest) {
                    const s = new URLSearchParams('');
                    s.append("location", location);
                    s.append("distance", distance);
                    s.append("stolenness", stolenness);

                    if (query) {
                        s.append("query", query)
                        console.log('adding query');
                    }

                    return `/search/count?${s.toString()}`;
                }
            })
        };
    },
});
export const { useGetBikesQuery, useGetBikesCountQuery } = bikeSlice;


import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
    credentials: "include"
})


export const baseQueryWithReAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOption) => {
    let result = await baseQuery(args, api, extraOption);

    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery(
            {
                url: '/auth/refresh-token',
                method: 'POST'
            },
            api,
            extraOption
        )

        if (refreshResult.data) {
            result = await baseQuery(args, api, extraOption)
        } else {
            await baseQuery("/auth/logout", api, extraOption)
        }
    }

    return result
}


export const privateAuthApiSlice = createApi({
    baseQuery: baseQueryWithReAuth,

    endpoints: (build) => ({

        handleUserLogOut: build.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            })
        }),

        handleResetPassword: build.mutation({
            query: () => ({
                url: '/auth/change-password',
                method: 'POST'
            })
        })

    })
})
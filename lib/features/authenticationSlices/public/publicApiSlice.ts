
import { publicBaseQuery } from "@/lib/basequery/publicBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";



export const privateAuthApiSlice = createApi({
    baseQuery: publicBaseQuery,

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
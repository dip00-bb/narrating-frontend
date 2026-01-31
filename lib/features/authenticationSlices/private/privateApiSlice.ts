import { baseQueryWithReAuth } from "@/lib/reauthenticator/reauthenticator";
import { createApi } from "@reduxjs/toolkit/query/react";



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
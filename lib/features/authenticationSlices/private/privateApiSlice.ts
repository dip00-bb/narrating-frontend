import { baseQueryWithReAuth } from "@/lib/reauthenticator/reauthenticator";
import { createApi } from "@reduxjs/toolkit/query/react";



export const privateAuthApiSlice = createApi({

    reducerPath:'private-auth',
    baseQuery: baseQueryWithReAuth,

    endpoints: (build) => ({

        handleUserLogOut: build.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            })
        }),

        handleUserChangePassword: build.mutation({
            query: () => ({
                url: '/auth/change-password'
            })
        })

    })
})


export const {
    useHandleUserLogOutMutation
} = privateAuthApiSlice

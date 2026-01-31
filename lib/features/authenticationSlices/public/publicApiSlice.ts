
import { publicBaseQuery } from "@/lib/basequery/publicBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const publicAuthApiSlice = createApi({
    reducerPath: 'public-auth',
    baseQuery: publicBaseQuery,

    endpoints: (build) => ({

        handleResetPassword: build.mutation({
            query: () => ({
                url: '/auth/change-password',
                method: 'POST'
            })
        })

    })
})

export const {
    useHandleResetPasswordMutation
} = publicAuthApiSlice
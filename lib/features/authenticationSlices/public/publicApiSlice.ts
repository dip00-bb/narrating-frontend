
import { publicBaseQuery } from "@/lib/basequery/publicBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";


export interface registerInfo{
    username:string,
    email:string,
    password:string
}

export const publicAuthApiSlice = createApi({
    reducerPath: 'public-auth',
    baseQuery: publicBaseQuery,

    endpoints: (build) => ({

        handleResetPassword: build.mutation({
            query: () => ({
                url: '/auth/change-password',
                method: 'POST'
            })
        }),
        handleUserRegister: build.mutation({
            query: (data:registerInfo) => ({
                url: '/auth/register',
                method: 'POST',
                body:data
            })
        })

    })
})

export const {
    useHandleResetPasswordMutation,
    useHandleUserRegisterMutation
} = publicAuthApiSlice
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { privateBaseQuery } from "../basequery/privateBaseQuery";


export const baseQueryWithReAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOption) => {
    let result = await privateBaseQuery(args, api, extraOption);

    if (result.error && result.error.status === 401) {
        const refreshResult = await privateBaseQuery(
            {
                url: '/auth/refresh-token',
                method: 'POST'
            },
            api,
            extraOption
        )

        if (refreshResult.data) {
            result = await privateBaseQuery(args, api, extraOption)
        } else {
            await privateBaseQuery("/auth/logout", api, extraOption)
        }
    }

    return result
}

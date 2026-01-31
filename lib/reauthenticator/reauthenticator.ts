import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { baseQuery } from "../basequery/privateBaseQuery";

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

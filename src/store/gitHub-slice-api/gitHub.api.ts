import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IRepo, ServerResponse } from '../../models/models'
import { IUser } from '../../models/models'

export const gitHubApi = createApi({
    reducerPath:'gitHub/api',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://api.github.com/'
    }),
    refetchOnFocus:true,
    endpoints: build => ({
        searchUsers: build.query<IUser[],string>({
            query:(search:string) => ({
                url:`search/users`,
                params:{
                    q:search,
                    per_page:100
                }
            }),
            transformResponse: (response:ServerResponse<IUser>) => response.items
        }),
        getUserRepos: build.query<IRepo[],string>({
            query: (username:string) => ({
                url:`users/${username}/repos`
            })
        })
    })
})


export const {useSearchUsersQuery,useLazyGetUserReposQuery} = gitHubApi 


import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient , ApolloClientContext} from '../hooks/withApollo';
export async function getServerPageGetLaunches
    (options: Omit<Apollo.QueryOptions<Types.GetLaunchesQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetLaunchesQuery>({ ...options, query: Operations.GetLaunchesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetLaunches = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetLaunchesQuery, Types.GetLaunchesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetLaunchesDocument, options);
};
export type PageGetLaunchesComp = React.FC<{data?: Types.GetLaunchesQuery, error?: Apollo.ApolloError}>;
export const withPageGetLaunches = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetLaunchesQuery, Types.GetLaunchesQueryVariables>) => (WrappedComponent:PageGetLaunchesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetLaunchesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetLaunches = {
      getServerPage: getServerPageGetLaunches,
      withPage: withPageGetLaunches,
      usePage: useGetLaunches,
    }
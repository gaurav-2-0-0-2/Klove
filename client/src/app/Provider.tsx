'use client';
import React from 'react'
import {useMemo} from "react";
import { UrqlProvider, ssrExchange, cacheExchange, fetchExchange, createClient } from '@urql/next';

interface Props{
    children?: React.ReactNode;
}

export const ProviderUrqlProvider = ({children}: Props)=>{
    const [client, ssr] = useMemo(()=>{
        const ssr = ssrExchange();
        const client = createClient({
          url: 'http://localhost:4000/graphql',
          exchanges: [cacheExchange, ssr, fetchExchange],
          suspense: true
        });
        return [client, ssr];
      },[]);
    return  <UrqlProvider client={client} ssr={ssr}> {children} </UrqlProvider>
}


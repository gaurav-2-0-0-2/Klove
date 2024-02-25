import React from "react";
import {
  cacheExchange,
  ssrExchange,
  fetchExchange,
  createClient,
} from "@urql/next";

export const ssr = ssrExchange();

export const client = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [cacheExchange, fetchExchange],
  suspense: true,
});

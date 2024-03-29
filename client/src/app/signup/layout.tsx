"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useMemo } from 'react';
import {UrqlProvider} from "@urql/next";
import {client, ssr} from "@/lib/urql";

const metadata: Metadata = {
  title: "Signup",
  description: "Generated by create next app",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <UrqlProvider client={client} ssr={ssr}>
    <section>{children}</section>
   </UrqlProvider>
  );
}

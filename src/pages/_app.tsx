import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Router from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  // const [loading, setLoading] = React.useState(false);
  // React.useEffect(() => {
  //   const start = () => {
  //     console.log("start");
  //     setLoading(true);
  //   };
  //   const end = () => {
  //     console.log("finished");
  //     setLoading(false);
  //   };
  //   Router.events.on("routeChangeStart", start);
  //   Router.events.on("routeChangeComplete", end);
  //   Router.events.on("routeChangeError", end);
  //   return () => {
  //     Router.events.off("routeChangeStart", start);
  //     Router.events.off("routeChangeComplete", end);
  //     Router.events.off("routeChangeError", end);
  //   };
  // }, []);

  // if (loading) return <h1>Loading</h1>;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

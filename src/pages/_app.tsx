import { type AppType } from "next/app";
import Head from "next/head";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import Layout from "~/components/layout/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <Head>
        <title>Bonn noi</title>
        <meta name="description" content="some place to bonn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
};

// TODO: test todo to issue
// test description for issue.
// assignees: toezbit
// labels: enhancement, help wanted

export default api.withTRPC(MyApp);

import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

// TODO: test todo to issue
// test description for issue.
// assignees: toezbit
// labels: enhancement, help wanted

export default api.withTRPC(MyApp);

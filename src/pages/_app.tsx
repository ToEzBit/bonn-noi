import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// TODO: test todo to issue
// test description for issue.
// assignees: toezbit
// labels: enhancement, help wanted

export default api.withTRPC(MyApp);

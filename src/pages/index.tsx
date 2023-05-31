import { type NextPage } from "next";
import Head from "next/head";
import { UserButton } from "@clerk/nextjs";

// import { api } from "~/utils/api";

// TODO : create home page
// assignees : ToEzBit
// labels: help wanted

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <div className="">
          Hello HomePage
          <UserButton afterSignOutUrl="/" />
        </div>
      </main>
    </>
  );
};

export default Home;

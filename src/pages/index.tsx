import { type NextPage } from "next";
import { UserButton } from "@clerk/nextjs";

// import { api } from "~/utils/api";

// TODO : create home page
// assignees : ToEzBit
// labels: help wanted

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
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

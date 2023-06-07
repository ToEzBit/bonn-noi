import { type NextPage } from "next";

import PostList from "~/features/post/component/PostList";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen  justify-center ">
        <PostList />
      </main>
    </>
  );
};
export default Home;

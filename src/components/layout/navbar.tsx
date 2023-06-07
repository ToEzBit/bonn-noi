import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import CreatePost from "~/features/post/component/CreatePost";

function NavBar() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <header className="flex justify-between border border-slate-500 p-4 text-slate-300">
      <div className="from-cyan-500 to-blue-500 bg-clip-text text-2xl  font-bold tracking-wide transition delay-150 duration-300 ease-out  hover:bg-gradient-to-r hover:text-transparent">
        <Link href="/">Bonn Noi</Link>
      </div>
      <div>
        <ul className="flex gap-4">
          {!isSignedIn && isLoaded && (
            <li className="hover:text-cyan-500">
              <Link href="/sign-in">Sign in</Link>
            </li>
          )}

          <li>{isSignedIn && <CreatePost />}</li>
          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;

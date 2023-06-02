import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import { useAuth } from "@clerk/nextjs";
import isEmpty from "lodash/isEmpty";

function NavBar() {
  const { userId } = useAuth();

  return (
    <header className="flex justify-between border border-slate-500 p-4 text-slate-300">
      <div className="from-cyan-500 to-blue-500 bg-clip-text text-2xl  font-bold tracking-wide transition delay-150 duration-300 ease-out  hover:bg-gradient-to-r hover:text-transparent">
        <Link href="/">Bonn Noi</Link>
      </div>
      <div>
        <ul className="flex gap-4">
          {isEmpty(userId) && (
            <li className="hover:text-cyan-500">
              <Link href="/sign-in">Sign in</Link>
            </li>
          )}

          <li>
            <ChatBubbleBottomCenterIcon className="h-6 w-6  cursor-pointer text-cyan-500 " />
          </li>
          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;

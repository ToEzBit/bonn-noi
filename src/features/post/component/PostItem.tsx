import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { RouterOutputs } from "~/utils/api";
import Avatar from "~/components/ui/Avatar";
import isEmpty from "lodash/isEmpty";

type Post = RouterOutputs["post"]["getAll"][0]["post"];
type Author = RouterOutputs["post"]["getAll"][0]["author"];

dayjs.extend(relativeTime);

function PostItem({ post, author }: { post: Post; author: Author }) {
  if (isEmpty(post) && isEmpty(author)) {
    return null;
  }

  return (
    <li className="rounded-xl  bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] p-[4px] text-white">
      <div className="rounded-lg bg-slate-800 p-4">
        <div className="flex h-full w-full justify-between">
          <div className="flex gap-4">
            <Avatar image={author.profileImage} alt={author.name} />
            <p className="font-bold">{`@${author.name.toUpperCase()}`}</p>
          </div>
          <div>{dayjs(post.createdAt).fromNow()}</div>
        </div>
        <div className="mt-4">
          <p className="ms-2">{post.content}</p>
        </div>
      </div>
    </li>
  );
}

export default PostItem;

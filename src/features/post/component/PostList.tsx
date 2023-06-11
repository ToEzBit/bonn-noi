import isEmpty from "lodash/isEmpty";
import map from "lodash/map";

import Loader from "~/components/ui/loader";

import { api } from "~/utils/api";
import PostItem from "./PostItem";

function PostList() {
  const { data: posts, isLoading: postLoading } = api.post.getAll.useQuery();

  if (postLoading) return <Loader />;

  if (isEmpty(posts)) {
    return null;
  }

  return (
    <div className=" mt-4  w-2/6 p-4">
      <ul className="flex flex-col gap-4">
        {map(posts, ({ post, author }) => (
          <PostItem post={post} author={author} key={post.id} />
        ))}
      </ul>
    </div>
  );
}

export default PostList;

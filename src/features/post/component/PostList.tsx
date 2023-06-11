import isEmpty from "lodash/isEmpty";
import map from "lodash/map";

import { ColorRing } from "react-loader-spinner";

import { api } from "~/utils/api";
import PostItem from "./PostItem";

function PostList() {
  const { data: posts, isLoading: postLoading } = api.post.getAll.useQuery();

  if (postLoading) {
    return (
      <ColorRing
        visible
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperClass="blocks-wrapper"
        colors={["#4158D0", "#4158D0", "#C850C0", "#FFCC70", "#FFCC70"]}
      />
    );
  }

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

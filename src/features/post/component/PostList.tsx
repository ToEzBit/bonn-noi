import Post from "./Post";

interface Post {
  id: number;
  authorId: number;
  message: string;
  createdAt: Date;
}

function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Post />
        </li>
      ))}
    </ul>
  );
}

export default PostList;

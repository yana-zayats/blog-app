import Post from "./Post";

function PostsList({
  posts,
}) {
  return (
    <div class="container w-75 my-5">
      {posts.length && posts.map((post, idx) => (
        <Post post={post} key={idx} />
      ))}
    </div>
  );
}

export default PostsList;

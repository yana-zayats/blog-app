function Post({
  post,
}) {
  return (
    <div class="card shadow-sm mb-3">
      <div class="card-body">
        <h4 class="card-title">{post.title}</h4>
        <p class="card-subtitle mb-2 text-body-secondary">Posted on: {post.createdAt}</p>
        <p class="card-text">
          {post.body}
        </p>
        <a href="#" class="link-secondary link-underline link-underline-opacity-0">Read more...</a>
      </div>
    </div>
  );
}

export default Post;

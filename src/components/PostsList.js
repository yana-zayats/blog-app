import Post from './Post';

function PostsList({
  posts,
  handleClick,
}) {
  return (
    <div className='container w-75 my-5'>
      {posts.length ? posts.map(post => (
        <Post post={post} key={post._id} handleClick={handleClick} />
      )):
      <p className='fs-4'>No posts</p>}
    </div>
  );
}

export default PostsList;

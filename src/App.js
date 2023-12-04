import NavBar from './components/NavBar';
import PostsList from './components/PostsList';
import { usePostsData } from './hooks/usePostsData';
import PostFull from './components/PostFull';

function App() {
  const {
    posts,
    post,
    handleSelectPost,
    handleGoBack,
    handleDeletePost,
    handleToggleOffcanvas,
    handleCloseModalAndUpdate,
  } = usePostsData();

  return (
    <div>
      <NavBar selectedPost={post} handleCloseModalAndUpdate={handleCloseModalAndUpdate} />
      {post ?
        <PostFull
          post={post}
          handleGoBack={handleGoBack}
          handleDeletePost={handleDeletePost}
          handleEditPost={handleToggleOffcanvas}
        /> :
        <PostsList posts={posts} handleClick={handleSelectPost} />}
    </div>
  );
}

export default App;

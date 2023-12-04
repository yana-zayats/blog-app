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
  } = usePostsData();

  return (
    <div>
      <NavBar />
      {post ?
        <PostFull post={post} handleGoBack={handleGoBack} /> :
        <PostsList posts={posts} handleClick={handleSelectPost} />}
    </div>
  );
}

export default App;

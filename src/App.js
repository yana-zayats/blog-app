import NavBar from './components/NavBar';
import PostsList from './components/PostsList';

function App() {
  const posts = [
    {
      title: 'Post title',
      createdAt: 'Dec 1, 2023',
      body: `Some quick example text to build on the card title and make up the bulk of the card's content.\n
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.`
    },
    {
      title: 'Post title',
      createdAt: 'Dec 1, 2023',
      body: `Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.`
    },
    {
      title: 'Post title',
      createdAt: 'Dec 1, 2023',
      body: `Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.`
    },
    {
      title: 'Post title',
      createdAt: 'Dec 1, 2023',
      body: `Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.
      Some quick example text to build on the card title and make up the bulk of the card's content.`
    },
  ]
  return (
    <div>
      <NavBar />
      <PostsList posts={posts} />
    </div>
  );
}

export default App;

import classNames from 'classnames';
import cropPostContent from '../lib/cropPostContent';
import formatDate from '../lib/formatDate';
import styles from '../Post.module.css';

function Post({
  post,
  handleClick,
}) {
  return (
    <div className='card shadow-sm mb-3'>
      <div className='card-body'>
        <h4 className='card-title'>{post.title}</h4>
        <p className='card-subtitle mb-2 text-body-secondary'>Posted on: {formatDate(post.date)}</p>
        <p className='card-subtitle mb-2 text-body-secondary'>{post.author}</p>
        <p className={classNames('card-text', styles['post-preview'])}>
          {cropPostContent(post.content)}
        </p>
        <button 
          className='btn btn-link link-secondary link-underline link-underline-opacity-0' 
          type='button'
          onClick={() => handleClick(post.id)}
        >
          Read more...
        </button>
      </div>
    </div>
  );
}

export default Post;

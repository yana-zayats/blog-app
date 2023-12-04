import classNames from 'classnames';
import formatDate from '../lib/formatDate';
import styles from '../Post.module.css';

function PostFull({
  post,
  handleGoBack,
}) {
  return (
    <div className='container w-75 my-5'>
      <button 
          className='btn btn-link link-secondary link-underline link-underline-opacity-0 mb-5 px-0' 
          type='button'
          onClick={handleGoBack}
        >
          &#8592; Go Back
        </button>
      <h4>{post.title}</h4>
      <p className='mb-2 text-body-secondary'>Posted on: {formatDate(post.date)}</p>
      <p className='mb-2 text-body-secondary'>{post.author}</p>
      <p className={classNames(styles['post-preview'])}>
        {post.content}
      </p>
    </div>
  );
}

export default PostFull;

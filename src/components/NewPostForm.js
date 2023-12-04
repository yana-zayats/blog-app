import React from 'react';
import { POST_FORM_FIELDS } from '../constants';
import classNames from 'classnames';

function NewPostForm({
  postForm,
  handleSubmit,
  handleFieldChange,
  postFormError,
  createPostError,
}) {

  return (
    <form className={classNames(postFormError && 'was-validated')}
      noValidate
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className='mb-3'>
        <label for='title' className='form-label'>
          Title
        </label>
        <input
          type='text'
          className='form-control'
          id='title'
          required
          value={postForm[POST_FORM_FIELDS.TITLE]}
          onChange={(e) => handleFieldChange(POST_FORM_FIELDS.TITLE, e.target.value)}
        />
        <div className='invalid-feedback'>
          Please provide Title.
        </div>
      </div>
      <div className='mb-3'>
        <label for='body' className='form-label'>
          Body
        </label>
        <textarea
          rows='10'
          className='form-control'
          id='body'
          required
          value={postForm[POST_FORM_FIELDS.CONTENT]}
          onChange={(e) => handleFieldChange(POST_FORM_FIELDS.CONTENT, e.target.value)}
        />
        <div className='invalid-feedback'>
          Please provide Body.
        </div>
      </div>
      <div className='mb-3'>
        <label for='author' className='form-label'>
          Author
        </label>
        <input
          type='text'
          className='form-control'
          id='author'
          required
          value={postForm[POST_FORM_FIELDS.AUTHOR]}
          onChange={(e) => handleFieldChange(POST_FORM_FIELDS.AUTHOR, e.target.value)}
        />
        <div className='invalid-feedback'>
          Please provide Author name.
        </div>
      </div>
      <p className='text-danger mb-3'>{createPostError}</p>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
}

export default NewPostForm;

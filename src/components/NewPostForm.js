import React from 'react';
import { POST_FORM_FIELDS } from '../constants';
import classNames from 'classnames';

function NewPostForm({
  postForm,
  handleSubmit,
  handleFieldChange,
  postFormError,
}) {

  return (
    <form className={classNames(postFormError && 'was-validated')}
      noValidate
      onSubmit={(e) => handleSubmit(e)}
    >
      <div class='mb-3'>
        <label for='title' class='form-label'>
          Title
        </label>
        <input
          type='text'
          class='form-control'
          id='title'
          required
          value={postForm[POST_FORM_FIELDS.TITLE]}
          onChange={(e) => handleFieldChange(POST_FORM_FIELDS.TITLE, e.target.value)}
        />
        <div class='invalid-feedback'>
          Please provide Title.
        </div>
      </div>
      <div class='mb-3'>
        <label for='body' class='form-label'>
          Body
        </label>
        <textarea
          rows='10'
          class='form-control'
          id='body'
          required
          value={postForm[POST_FORM_FIELDS.BODY]}
          onChange={(e) => handleFieldChange(POST_FORM_FIELDS.BODY, e.target.value)}
        />
        <div class='invalid-feedback'>
          Please provide Body.
        </div>
      </div>
      <button type='submit' class='btn btn-primary'>
        Submit
      </button>
    </form>
  );
}

export default NewPostForm;

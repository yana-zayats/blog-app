import { useRef } from 'react';
import { usePostFormData } from '../hooks/usePostFormData';
import NewPostForm from './NewPostForm';

function NavBar() {
  const closeRef = useRef(null);
  const { 
    postForm, 
    handleSubmit, 
    handleFieldChange, 
    postFormError,
    resetForm, 
    createPostError,
  } = usePostFormData(closeRef);

  return (
    <nav className='navbar sticky-top bg-primary shadow'>
      <div className='container-fluid d-flex justify-content-between mx-5'>
        <span className='navbar-brand mb-0 h1 text-white'>Blog App</span>
        <button className='btn btn-outline-light' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar' aria-label='Toggle navigation'>
          Create a post
        </button>
        <div className='offcanvas offcanvas-end w-50' tabindex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>New Post</h5>
            <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close' 
              onClick={resetForm}
              ref={closeRef}
            />
          </div>
          <div className='offcanvas-body'>
            <NewPostForm
              postForm={postForm} 
              handleSubmit={handleSubmit}
              handleFieldChange={handleFieldChange} 
              postFormError={postFormError} 
              createPostError={createPostError}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

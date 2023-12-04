import { useRef } from 'react';
import { usePostFormData } from '../hooks/usePostFormData';
import NewPostForm from './NewPostForm';

function NavBar({ selectedPost, handleCloseModalAndUpdate }) {
  const offcanvasRef = useRef(null);
  const { 
    postForm, 
    handleSubmit, 
    handleFieldChange, 
    postFormError,
    resetForm, 
    createPostError,
    editMode,
  } = usePostFormData(selectedPost, offcanvasRef, handleCloseModalAndUpdate);

  return (
    <nav className='navbar sticky-top bg-primary shadow'>
      <div className='container-fluid d-flex justify-content-between mx-5'>
        <span className='navbar-brand mb-0 h1 text-white'>Blog App</span>
        {!editMode &&
          <button className='btn btn-outline-light' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar' aria-label='Toggle navigation'>
            Create a post
          </button>}
        <div ref={offcanvasRef} className='offcanvas offcanvas-end w-50' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>{`${editMode ? 'Edit' : 'Create a'} post`}</h5>
            <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close' 
              onClick={resetForm}
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

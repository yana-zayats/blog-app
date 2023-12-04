import { usePostFromData } from '../hooks/usePostFromData';
import NewPostForm from './NewPostForm';

function NavBar() {
  const { 
    postForm, 
    handleSubmit, 
    handleFieldChange, 
    postFormError,
    resetForm, 
  } = usePostFromData();

  return (
    <nav class="navbar sticky-top bg-primary shadow">
      <div class="container-fluid d-flex justify-content-between mx-5">
        <span class="navbar-brand mb-0 h1 text-white">Blog App</span>
        <button class="btn btn-outline-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          Create a post
        </button>
        <div class="offcanvas offcanvas-end w-50" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">New Post</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" 
              onClick={resetForm}
            />
          </div>
          <div class="offcanvas-body">
            <NewPostForm
              postForm={postForm} 
              handleSubmit={handleSubmit}
              handleFieldChange={handleFieldChange} 
              postFormError={postFormError} 
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

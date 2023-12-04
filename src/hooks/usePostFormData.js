import { useEffect, useMemo, useState } from 'react';
import { DEFAULT_POST_FORM, POSTS_API } from '../constants';
import { checkPostFormValid, fillPostForm } from './usePostFormData.helper';
import http from '../lib/http'

const usePostFormData = (selectedPost, offcanvasRef, handleCloseModalAndUpdate) => {
    const [postForm, setPostForm] = useState(DEFAULT_POST_FORM);
    const [postFormError, setPostFormError] = useState(false);
    const [createPostError, setCreatePostError] = useState('');
    const editMode = useMemo(() => !!selectedPost, [selectedPost]);

    const handleFieldChange = (field, value) => {
        setPostForm((prevState) => ({ 
            ...prevState, 
            [field]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPostFormError(false);
        if (!checkPostFormValid(postForm)) {
            setPostFormError(true);
            return;
        }
        try {
            if (editMode) {
                await http.put(`${POSTS_API}/${selectedPost.id}`, { data: postForm });
            } else {
                await http.post(POSTS_API, { data: postForm });
            }
            resetForm();
            handleCloseModalAndUpdate();
        } catch (err) {
            setCreatePostError(err.message);
            console.log(err.message);
        }
    };

    const prefillValuesOnEdit = () => {
        editMode && setPostForm(fillPostForm(selectedPost));
    };

    useEffect(() => {
        const offcanvas = offcanvasRef.current;
        offcanvas && offcanvas.addEventListener('show.bs.offcanvas', prefillValuesOnEdit);

        return () => {
            offcanvas.removeEventListener('show.bs.offcanvas', prefillValuesOnEdit);
        };
    }, [offcanvasRef, editMode]);

    const resetForm = () => {
        setPostForm(DEFAULT_POST_FORM);
        setPostFormError(false);
        setCreatePostError('');
    };

    return {
        postForm, 
        handleSubmit,
        handleFieldChange,
        postFormError,
        resetForm,
        createPostError,
        editMode,
    };
};

export { usePostFormData };
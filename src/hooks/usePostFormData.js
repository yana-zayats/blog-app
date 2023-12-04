import { useState } from 'react';
import { DEFAULT_POST_FORM, POSTS_API } from '../constants';
import { checkPostFormValid } from './usePostFormData.helper';
import http from '../lib/http'

const usePostFormData = (closeRef) => {
    const [postForm, setPostForm] = useState(DEFAULT_POST_FORM);
    const [postFormError, setPostFormError] = useState(false);
    const [createPostError, setCreatePostError] = useState('');

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
            await http.post(POSTS_API, { data: postForm });
            closeRef.current && closeRef.current.click();
        } catch (err) {
            setCreatePostError(err.message);
            console.log(err.message);
        }
    };

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
    };
};

export { usePostFormData };
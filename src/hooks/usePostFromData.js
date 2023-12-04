import { useState } from "react";
import { DEFAULT_POST_FORM } from "../constants";
import { checkPostFormValid } from "./usePostFormData.helper";

const usePostFromData = () => {
    const [postForm, setPostForm] = useState(DEFAULT_POST_FORM);
    const [postFormError, setPostFormError] = useState(false);

    const handleFieldChange = (field, value) => {
        setPostForm((prevState) => ({ 
            ...prevState, 
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPostFormError(false);
        if(!checkPostFormValid(postForm)) {
            setPostFormError(true);
            return;
        }
        // send form
        console.log(postForm);
    };

    const resetForm = () => {
        setPostForm(DEFAULT_POST_FORM);
        setPostFormError(false);
    };

    return {
        postForm, 
        setPostForm,
        handleSubmit,
        handleFieldChange,
        postFormError,
        resetForm,
    };
};

export { usePostFromData };
import { POST_FORM_FIELDS } from '../constants';

export const checkPostFormValid = (form) => {
    return Object.values(form).every(val => !!val.trim())
};

export const fillPostForm = (post) => {
    return {
        [POST_FORM_FIELDS.TITLE]: post[POST_FORM_FIELDS.TITLE],
        [POST_FORM_FIELDS.CONTENT]: post[POST_FORM_FIELDS.CONTENT],
        [POST_FORM_FIELDS.AUTHOR]: post[POST_FORM_FIELDS.AUTHOR],
    };
};

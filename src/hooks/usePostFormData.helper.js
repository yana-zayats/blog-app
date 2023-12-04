import { POST_FORM_FIELDS } from '../constants';

export const checkPostFormValid = (form) => {
    if (!form[POST_FORM_FIELDS.TITLE]) {
        return false;
    }
    if (!form[POST_FORM_FIELDS.CONTENT]) {
        return false;
    }
    if (!form[POST_FORM_FIELDS.AUTHOR]) {
        return false;
    }
    return true;
};
import { POST_FORM_FIELDS } from "../constants";

export const checkPostFormValid = (form) => {
    if (!form[POST_FORM_FIELDS.TITLE]) {
        return false;
    }
    if (!form[POST_FORM_FIELDS.BODY]) {
        return false;
    }
    return true;
};
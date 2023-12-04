import axios from 'axios';

const domain = process.env.REACT_APP_API_URL;

const http = (url, { method = 'GET', data = undefined }) => {
  return axios({
    url: `${domain}${url}`,
    method,
    data,
  });
};

const get = (url, opts = {}) => http(url, { ...opts });
const post = (url, opts = {}) => http(url, { method: 'POST', ...opts });

const methods = {
  get,
  post,
};

export default methods;
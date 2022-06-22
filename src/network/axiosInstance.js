import axios from "axios";

const axionInstance = axios.create({
  baseURL: process.env.REACT_APP__DEV_URL,
});

axionInstance.interceptors.request.use(
  (config) => {
    // console.log(config);
    // config.headers['Accept-language'] = 'ar';
    // config.headers['Authorization'] = 'xyz123';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axionInstance.interceptors.response.use(
  (response) => {
    //detect status code range 200...etc
    //do something with response data
    return response;
  },
  (error) => {
    //detect status code our of range 200...etc
    //do something with error
    return Promise.reject(error);
  }
);

export default axionInstance;

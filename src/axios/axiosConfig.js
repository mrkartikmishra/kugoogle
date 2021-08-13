import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_GOOGLE_CUSTOM_SEARCH_BASE_URL,
    params: {
        key: process.env.REACT_APP_GOOGLE_CUSTOM_SEARCH_API_KEY,
        cx: process.env.REACT_APP_GOOGLE_SEARCH_ENGINE_ID
    }
});

export default axiosConfig;
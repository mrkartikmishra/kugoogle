import { useState, useEffect } from 'react';
import axios from '../axios/axiosConfig';

const useGoogleSearch = (searchTerm) => {
    const [data, setData] = useState([]);

    console.log("hooks", searchTerm);

    useEffect(() => {
        const getData = async () => {
            // console.log("searchTermsearchTerm==>>", searchTerm);
            // const response = await axios.get('/customsearch/v1', {
            //         params: {
            //         q: searchTerm
            //         }
            //     }
            // );
            // console.log(response);
        }

        getData();
    }, [searchTerm]);

    return { data };
}

export default useGoogleSearch;
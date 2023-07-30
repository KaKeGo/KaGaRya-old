import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookie from 'js-cookie'

import { KAGARYA_API, DEV_API_URL} from './apiConfig'


const CSRFToken = () => {
    const [csrftoken, setcsrftoken] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${KAGARYA_API}accounts/csrftoken/`);
                const csrfTokenFromResponse = response.data.CSRFToken
                setcsrftoken(csrfTokenFromResponse)
                Cookie.set('csrftoken', csrfTokenFromResponse)
            } catch (error) {
                console.log('Failed to fetch CSRF token: ', error.message)
            }
        };

        fetchData();
    }, []);

    
    return (
        <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} />
    )
};

export default CSRFToken;

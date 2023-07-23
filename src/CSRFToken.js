import React, { useEffect } from 'react'
import axios from 'axios'


const CSRFToken = () => {
    useEffect(() => {
        const fetchCSRFToken = async () => {
            try {
                const response = await axios.get(
                    'http://127.0.0.1:8000/accounts/csrftoken/',
                )
                const csrfTokenFromResponse = response.data.CSRFToken
                console.log('CSRF Token pobrany:', csrfTokenFromResponse)
                document.cookie = `csrftoken=${csrfTokenFromResponse}; path=/;`
            } catch (error) {
                console.log('Csrf not set ', error.message)
            }
        }
        fetchCSRFToken()
    }, [])

    return null
}

export default CSRFToken
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/',{state:'Page Not Found'})
        }, 2000)
    }, [])


    return (
        <h1>
            Not Found
        </h1>
    )
}

export default NotFound

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function BookLayout() {
    return (
        <>
            <Outlet context={{ name: 'Santhosh' }} />
            <ol>
                <li><Link to='/books/1'>Book 1</Link></li>
                <br />
                <li> <Link to='/books/2'>Book 2</Link></li>
                <br />
                <li> <Link to='/books/newBook'>Add New Book</Link></li>
                <br />
            </ol>
        </>
    )
}

export default BookLayout

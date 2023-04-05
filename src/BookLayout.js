import { Link, Outlet, useSearchParams } from 'react-router-dom'

function BookLayout() {
    // const [number, setNumber] = useState(5)
    const [searchParams, setSearchparams] = useSearchParams({ n: 5 })
    const number = searchParams.get('n')
    return (
        <>
            <Outlet context={{ name: 'Santhosh' }} />
            <input
                type='number'
                value={number}
                onChange={e => setSearchparams({ n: e.target.value })}
            />
            <ol>
                <li><Link to='/books/1'>Book 1</Link></li>
                <br />
                <li> <Link to={`/books/${number}`}>Book {number}</Link></li>
                <br />
                <li> <Link to='/books/newBook'>Add New Book</Link></li>
                <br />
            </ol>
        </>
    )
}

export default BookLayout

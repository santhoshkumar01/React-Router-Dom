import { Routes, Route } from 'react-router-dom'
import BookList from './Pages/BookList'
import Book from './Pages/Book'
import NewBook from './Pages/NewBook'
import BookLayout from './BookLayout'

function BookRoutes() {
    return (
        <Routes>
            <Route element={<BookLayout />} >
                <Route index element={<BookList />} />
                <Route path=':id' element={<Book />} />
                <Route path='newBook' element={<NewBook />} />
            </Route>
        </Routes>
    )
}

export default BookRoutes

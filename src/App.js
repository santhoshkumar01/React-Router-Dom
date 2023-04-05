import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import BookList from './Pages/BookList'
import Book from './Pages/Book'
import NewBook from './Pages/NewBook'
import Contact from './Pages/Contact'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'
import BookLayout from './BookLayout'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookLayout/>}>
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path='newBook' element={<NewBook />} />
        </Route>
        {/* <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/newBook' element={<NewBook />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;

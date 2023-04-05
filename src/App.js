import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import BookList from './Pages/BookList'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookList />} />
      </Routes>
    </>
  )
}

export default App;

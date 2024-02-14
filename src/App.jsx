import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Error from './pages/error.jsx'
import HomePage from './pages/home-page.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

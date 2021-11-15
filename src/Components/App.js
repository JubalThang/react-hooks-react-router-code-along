import About from './About'
import Home from './Home'
import Login from './Login'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'

export default function App() {
    return (
        <>
        <NavBar />
        <Routes>
            <Route path='about' element={<About />} />
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
        </Routes>
        </>
    )
}
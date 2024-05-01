/* import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Search from "./components/Search" */
import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Result from "./components/Result"
import NotFound from "./components/NotFound"

export default function App() {
  return (
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/search/:q" element={<Result />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}
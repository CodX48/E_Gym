import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home"
import "./index.css";
import { NavBar } from "./components/NavBar"

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

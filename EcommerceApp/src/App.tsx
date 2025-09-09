import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HeroSection } from "./pages/home"
import "./index.css";
import { NavBar } from "./components/NavBar"

function App() {

  return (
    <BrowserRouter>
    {/* <NavBar/> */}
      <Routes>
        <Route path="/home" element={<HeroSection/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HeroSection } from "./pages/home"
import "./index.css";

function App() {

  return (
    <BrowserRouter>
    {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<HeroSection/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

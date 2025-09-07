import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home"
//  import { LogInPage } from "./pages/login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        {/* <Route path="/login" element={<LogInPage/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

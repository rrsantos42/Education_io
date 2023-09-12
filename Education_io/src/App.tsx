import './App.scss'
import {Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.tsx";
import SignUpPage from "./Pages/SignUpPage/SignUpPage.tsx";
function App() {

  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signUp" element={<SignUpPage/>}/>
    </Routes>
  )
}

export default App

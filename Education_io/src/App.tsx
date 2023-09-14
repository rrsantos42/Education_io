import './App.scss'
import {Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.tsx";
import SignUpPage from "./Pages/SignUpPage/SignUpPage.tsx";
import SignInPage from "./Pages/SignInPage/SignInPage.tsx";
import { AuthProvider} from './Context/ContextAuth';
import DisciplinePage from "./Pages/DisciplinePage/DisciplinePage.tsx";
function App() {

  return (
      <AuthProvider>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/signUp" element={<SignUpPage/>}/>
            <Route path="/signIn" element={<SignInPage/>}/>
            <Route path="/:disciplineId" element={<DisciplinePage/>}/>
        </Routes>
      </AuthProvider>
  )
}

export default App

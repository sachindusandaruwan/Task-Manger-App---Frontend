
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Dashboard} from "./page/Dashboard.tsx";
import {SignupForm} from "./page/register/SignupForm.tsx";
import {LoginForm} from "./page/register/LoginForm.tsx";

function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm/>}/>
                <Route path="/signup" element={<SignupForm/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App

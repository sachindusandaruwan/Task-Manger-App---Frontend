
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./page/register/LoginForm.tsx";
import {Dashboard} from "./page/Dashboard.tsx";
import {SignupForm} from "./page/register/SignupForm.tsx";

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

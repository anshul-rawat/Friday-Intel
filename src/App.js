import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Login from './pages/Login';
// import Canvastools from './components/Canvastools';
// import CaseBlog from './pages/CaseBlog';
// import Home from './pages/Home'
//import ForgetPassword from "./pages/forgetpasswordPage";
 import NewCase from "./pages/NewCase";

function App() {
  return (
    // <Login/>
    // <CaseBlog />
    // <Canvastools />
    // <Home/>
    // <ForgetPassword/>
    <>
     <Router>
      <Routes>
        <Route exact path = "NewCase" element = {< NewCase/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;

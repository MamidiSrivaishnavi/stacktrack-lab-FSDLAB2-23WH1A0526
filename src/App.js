//import React from 'react';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/tasks/:status" element = {<QuestionPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

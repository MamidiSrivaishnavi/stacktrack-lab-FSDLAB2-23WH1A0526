import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Routes, Route} from 'react-route-dom'
import A from "./tasksLists';
import B from "./tasksDetails";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path = "/" element={<A />} />
      <Route path = "/tasks/:id" element={<B />} />
    </Routes>
  </BrowserRouter>
  return (
    <div>
      <Home />

      {<A />}
    </div>
  );
}

export default App;

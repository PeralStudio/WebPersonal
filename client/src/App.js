import React from 'react';
import Admin from "./pages/Admin";
import Signin from "./pages/Admin/SignIn";
import Home from "./pages/Home";
import Contact from "./pages/Contact";


import './App.scss';


function App() {

  return (
    <div>
      <h1>Estamos en App</h1>
      <Admin />
      <Signin />
      <Home />
      <Contact />
    </div>
  );
}

 
export default App;

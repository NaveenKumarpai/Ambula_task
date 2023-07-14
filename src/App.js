import React from "react";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import TodoList from "./Pages/TodoList/TodoList";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";

function App() {


  return (
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Todo" element={<TodoList/>}/>
        <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;

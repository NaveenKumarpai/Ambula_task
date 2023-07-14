import React from "react";
import './Header.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.jpg"


const Header =() =>{
    return (
       
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><img src= { logo } alt="Ambula"  width={"120px"} height={"80px"}/></Navbar.Brand>
          <Nav className="me-auto navList" >
           
            <Link to="/">Home</Link>
            
            <Link to ="/About">About</Link>
           
            <Link to="/Contact">Contact</Link>

            <Link to="/Todo">Todo</Link>

            <Link to="ShoppingCart">Shopping Cart</Link>
           
          </Nav>
        </Container>
      </Navbar>
        
    );
};

export default Header;
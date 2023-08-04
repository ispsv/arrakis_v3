import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './App.css';
import AllBonds from "./components/pets/AllBonds";
import UserBonds from "./components/pets/UserBonds";
import { Welcome } from "./components/pets/Welcome";
import ViewBond from "./components/pets/ViewBond";
import AuthenticationComponent from "./components/pets/AuthenticationComponent";

// const App = () => {
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const isLoggedIn = (bool) => {
    setUserLoggedIn(bool);
  }

  const navigate = useNavigate();

  return (
  <>
  <Navbar expand="lg" className="navbar navbar-expand-lg " data-bs-theme="dark" style={{backgroundColor: "#0018a8"}}>
        <Container>
        {/* style={{marginLeft: "2%"}} */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
            <Navbar.Brand href="/" className="navbar-brand text-center">Home</Navbar.Brand>
            
              {userLoggedIn && <Nav.Link href="/allbonds" className="nav-link nav-item text-center">All Bonds</Nav.Link>}
             
              {userLoggedIn && <Nav.Link href="/userbonds" className="nav-link nav-item text-center">Your Bonds</Nav.Link>}
              {/* <Nav.Link href="/bonds" className="nav-link nav-item text-center">View Bond</Nav.Link> */}
              <Button variant="primary"
                      className="btn btn-primary-disabled"
                      id="logout "
                      style={{float: "right"}}
                      onClick={() => {setUserLoggedIn(false); navigate('/')}}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
      <Routes>
        {/* <Route path="allbonds" element={<Pets />} /> */}
        <Route path="allbonds" element={<AllBonds/>} />
        <Route exact path="userbonds" element={<UserBonds/>} />
        <Route path="/bonds/:bondId" element={<ViewBond />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="/" element={<AuthenticationComponent logIn={isLoggedIn}/>} />
      </Routes>

      
  </>)
  // <Pets />;
};

export default App;

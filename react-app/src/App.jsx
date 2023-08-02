import React from "react";
// import { AllBonds } from "./components/pets/AllBonds";
import { Pets } from "./components/pets/Pets";
import { Practice } from "./components/pets/Practice";
import { BondDetail } from "./components/pets/BondDetail";
import { ExpandedBondDetail } from "./components/pets/ExpandedBondDetail";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './App.css';

// const App = () => {
function App() {
  return (
  <>
  <Navbar expand="lg" className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">Welcome</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/alldogs">All Dogs</Nav.Link> */}
              <Nav.Link href="/allbonds">All Bonds</Nav.Link>
              <Nav.Link href="/userbonds" className="nav-link">Your Bonds</Nav.Link>
              <Button variant="primary" className="btn btn-secondary" id="logout">Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Pets /> */}
      
      <Routes>
        {/* <Route path="allbonds" element={<Pets />} /> */}
        <Route path="allbonds" element={<BondDetail/>} />
        <Route path="userbonds" element={<ExpandedBondDetail/>} />
        <Route path="/" element={<Pets />} />
      </Routes>
  </>)
  // <Pets />;
};

export default App;

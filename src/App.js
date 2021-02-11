import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header.js';
import Home from './Component/Home.js';
import Button from 'react-bootstrap/Button';
import Contact from './Component/Contact';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
 
function App() {
  return (
    <div className="App">
    <Router>
      <div>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">VIVEK PANDEY</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

      
        <Switch>
          <Router path="/contact">
            <Contact />
          </Router>
          <Route path="/about">
          <Header />
          </Route>
          
          <Route path="/">
          <Home />
           
          </Route>
        </Switch>
      </div>
    </Router>
     
    
    </div>
  );
}

export default App;

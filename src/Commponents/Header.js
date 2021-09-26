import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Button } from 'react-bootstrap';
import logo from './logo192.png';

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-flex align-top"
                            alt="Logo"
                        />
                        
                    </Navbar.Brand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                    </NavbarCollapse> 
                    <Form className="d-flex">
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            
                        />
                        
                        <Button variant="outline-info">Search</Button>                         
                    </Form>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
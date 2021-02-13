import React from 'react'

// Using bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom'

export default class NavComponent extends React.Component {
    render() {
        let buttons
        console.log("Nav Component")
        console.log(this.props.user)
        if(this.props.user) {
            buttons = (
                <>
                    <Nav.Link href="/" onClick={() => localStorage.clear()}>Logout</Nav.Link>
                </>
            )
        }
        else {
            buttons = (
                <>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link href="/Signup">SignUp</Nav.Link>
                </>
            )
        }
        return (
            <Container>
            <Navbar bg="light" variant="blue">

                <Nav>
                    
                    <Link to="/">Products</Link>
                    <Link to="/about">About</Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {buttons}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        );
    }
}
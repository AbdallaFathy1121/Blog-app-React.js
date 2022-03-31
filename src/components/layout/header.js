import React from 'react'
import {Navbar, Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/"> Home </Link>
                        <Link className="nav-link" to="/blog"> Blog </Link>
                        <Link className="nav-link" to="/blog/add"> Add Post </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header

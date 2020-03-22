import React from 'react';
import './Navigation.css'
import { Navbar, Nav, Form, FormControl,Button } from 'react-bootstrap';

const Navigation = _ => (

<Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">
    <img
        src="/logo_wirvsvirus.png"
        width="88"
        height="30"
        className="d-inline-block align-top"
    />{' '}
    Coid-19 Dashboard
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link href="/map/matching">MatchingMap</Nav.Link>
        <Nav.Link href="/map/heat">HeatMap</Nav.Link>
        <Nav.Link href="/diary">Diary</Nav.Link>
    </Nav>
    </Navbar.Collapse>
</Navbar>
)

export default Navigation;
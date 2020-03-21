import React from 'react';
import './Navigation.css'
import { Navbar, Nav, Form, FormControl,Button } from 'react-bootstrap';

const Navigation = _ => (

<Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Keks vs. Virus</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/map/matching">MatchingMap</Nav.Link>
        <Nav.Link href="/map/heat">HeatMap</Nav.Link>
        <Nav.Link href="/diary">Diary</Nav.Link>
        <Nav.Link href="/app">App</Nav.Link>
    </Nav>
    <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
    </Form>
    </Navbar.Collapse>
</Navbar>
)

export default Navigation;
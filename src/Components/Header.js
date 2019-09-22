import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#">Book Finder</Navbar.Brand>
            </Navbar>
        </Container>
    )
};

export default Header;

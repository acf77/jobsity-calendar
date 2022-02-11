import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootswatch/dist/materia/bootstrap.min.css";

export const Header = () => {
  return (
    <header>
      <Navbar
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand>Jobsity</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

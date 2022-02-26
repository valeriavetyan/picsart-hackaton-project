import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ModalForSignIn from "../sign_in/ModalForSignIn";
import "./NavigationComponent.css";
import { useNavigate } from "react-router-dom";

const NavigationComponent = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <Container style={{ paddingTop: "1rem" }}>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Col lg={3} onClick={handleClick} style={{ cursor: "pointer" }}>
          <img
            src="/img/academy-logo.png"
            className="academy_logo"
            alt="logo"
          />
        </Col>
        <Col
          lg={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <a href="/" className="navigation_link">
            Home
          </a>

          <a href="/all-courses" className="navigation_link">
            Courses
          </a>

          <ModalForSignIn />

          {/* <img src="/img/img_avatar.png" alt="Avatar" className="avatar"></img>
          <span style={{ padding: "10px", color: "white", fontSize: "20px" }}>
            John Doe
          </span> */}
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationComponent;

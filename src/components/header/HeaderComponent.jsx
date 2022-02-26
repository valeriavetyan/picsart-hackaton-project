import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HeaderComponent = () => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Col lg={5}>
          <h1 style={{ fontSize: "55px", color: "white", fontWeight: 900 }}>
            Investing in Knowledge and Your Future{" "}
          </h1>
        </Col>

        <Col lg={6}>
          <img
            src="/img/header-image.png"
            alt="picsartacademy"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderComponent;

import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import "./SyllabusChoise.css";
import { useNavigate } from "react-router-dom";

const SylabusChoises = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/overveiw");
  }
  return (
    <Container
      style={{
        marginTop: "3rem",
        marginBottom: "3rem",
      }}
    >
      <Col
        lg={12}
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Col lg={12}>
          <h1
            style={{
              textAlign: "center",
              color: "black",
              fontWeight: 700,
              marginBottom: "3rem",
            }}
          >
            Lesson plan by weeks:
          </h1>
        </Col>
        <Col lg={12} onClick={handleClick}>
          <h3 className="syllabus_item">Week 1: Getting Started with C++ </h3>
        </Col>
        <Col lg={12} onClick={handleClick}>
          <h3 className="syllabus_item">Week 2: Setting Out to C++</h3>
        </Col>
        <Col lg={12} onClick={handleClick}>
          <h3 className="syllabus_item">Week 3: Dealing with Data</h3>
        </Col>
        <Col lg={12} onClick={handleClick}>
          <h3 className="syllabus_item">Week 4: Compound Types</h3>
        </Col>
      </Col>
    </Container>
  );
};

export default SylabusChoises;

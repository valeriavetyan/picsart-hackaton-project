import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  ToggleButton,
  FloatingLabel,
} from "react-bootstrap";
import Footer from "../footer/Footer";
import NavigationComponent from "../navigation/NavigationComponent";
import SyllabusHeaderComponent from "../syllabus/SyllabusHeaderComponent";
import "./QuizComponent.css";

export default function QuizComponent() {
  let [counter, changeCounter] = useState(1);

  return (
    <>
      <Col
        lg={12}
        style={{
          height: "fit-content",
          backgroundImage: `url("/img/gradient-background.png")`,
          backgroundRepeat: "no-repeat",
          paddingBottom: "1rem",
        }}
      >
        <NavigationComponent />
        <SyllabusHeaderComponent />
      </Col>

      <Container style={{ marginTop: "4rem", marginBottom: "4rem" }}>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Col lg={1}>
            <p style={{ color: "#313B46", fontSize: "27px", fontWeight: 700 }}>
              {counter}/20
            </p>
          </Col>
          <Col lg={2} style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/img/clock.png"
              style={{ width: "40px", height: "auto" }}
            ></img>
            <span
              style={{
                color: "#313B46",
                fontSize: "27px",
                fontWeight: 700,
                paddingLeft: "20px",
              }}
            >
              10:30
            </span>
          </Col>
        </Row>

        {/* {counter} */}
        <Col lg={12}>
          {counter == 1 ? (
            <>
              <Col lg={12} style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                <p
                  style={{ fontSize: "30px", fontWeight: 700, color: "black" }}
                >
                  Problem-Solving and Analytical Thinking
                </p>
                <p
                  style={{
                    fontSize: "27px",
                    fontWeight: 700,
                    color: "#4C4C4C",
                  }}
                >
                  {"Solving problems with dynamic programming."}
                </p>
              </Col>
              <Col lg={12} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                <Form.Check
                  label="Capturing and processing data.”;"
                  name="checkbox"
                  type="checkbox"
                  style={{ fontSize: "25px" }}
                />
                <Form.Check
                  label=" Trivial pattern recognition practical examples.”;"
                  name="checkbox"
                  type="checkbox"
                  style={{ fontSize: "25px" }}
                />
                <Form.Check
                  label="Leveraging basic data structures in regular problems.”;"
                  name="checkbox"
                  type="checkbox"
                  style={{ fontSize: "25px" }}
                />
                <Form.Check
                  label="Advanced data structures (balanced trees, tries, segment trees)."
                  name="checkbox"
                  type="checkbox"
                  style={{ fontSize: "25px" }}
                />
              </Col>
            </>
          ) : (
            ""
          )}

          {counter == 2 ? (
            <>
              <Col lg={12} style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                <p
                  style={{ fontSize: "30px", fontWeight: 700, color: "black" }}
                >
                  Working with the web
                </p>
                <p
                  style={{
                    fontSize: "27px",
                    fontWeight: 700,
                    color: "#4C4C4C",
                  }}
                >
                  {"Effective applications of microservices architecture."}
                </p>
              </Col>
              <Col lg={12} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                <Form.Check
                  label="The HTTP structure, performance, and low-level details”;"
                  name="radio"
                  type="radio"
                  style={{ fontSize: "25px" }}
                />
                <Form.Check
                  label=" API and REST API design and best practices.”;"
                  name="radio"
                  type="radio"
                  style={{ fontSize: "25px" }}
                />
                <Form.Check
                  label=" Designing messaging applications using WebSockets”;"
                  name="radio"
                  type="radio"
                  style={{ fontSize: "25px" }}
                />
                <Form.Check
                  label="Design and implementation of custom transfer subsystems for multiservices architecture.”;"
                  name="radio"
                  type="radio"
                  style={{ fontSize: "25px" }}
                />
              </Col>
            </>
          ) : (
            ""
          )}

          {counter == 3 ? (
            <>
              <Col lg={12} style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                <p
                  style={{ fontSize: "30px", fontWeight: 700, color: "black" }}
                >
                  Working with Data
                </p>
              </Col>
              <Col lg={12}>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Please write your answer"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Please write your answer"
                    style={{ height: "200px" }}
                  />
                </FloatingLabel>
              </Col>
            </>
          ) : (
            ""
          )}
        </Col>

        <Col
          lg={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Col lg={2}>
            <Button
              onClick={() => changeCounter(counter--)}
              type="valid"
              className="previous_button"
            >
              Previous
            </Button>
          </Col>
          <Col lg={2} style={{ marginLeft: "1rem" }}>
            <Button
              className="next_button"
              onClick={() => changeCounter(counter++)}
            >
              Next
            </Button>
          </Col>
        </Col>
      </Container>
      <Footer />
    </>
  );
}

// export default QuizComponent;

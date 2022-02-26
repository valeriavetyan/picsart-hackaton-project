import React from "react";
import { Col, FormControl } from "react-bootstrap";
// import "./SignInComponent.css";

const SignInComponent = () => {
  return (
    <Col lg={12} style={{ padding: "20px" }}>
      <Col lg={12} style={{ textAlign: "center" }}>
        <img
          src="/img/academy-logo.png"
          style={{ width: "200px", height: "auto" }}
        />
      </Col>
      <Col
        lg={12}
        style={{ textAlign: "center", padding: "15px", color: "gray" }}
      >
        <h3>Please login</h3>
      </Col>
      <Col
        lg={12}
        style={{
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <Col
          lg={12}
          style={{
            marginTop: "1.5rem",
          }}
        >
          <FormControl
            placeholder="Email"
            aria-label="Email"
            aria-describedby="Email"
            style={{
              height: "55px",
              background: "rgb(244, 244, 244)",
              borderRadius: "none",
              border: "1px solid rgb(235, 235, 235)",
              fontSize: "20px",
            }}
          />
        </Col>
        <Col lg={12} style={{ marginTop: "1.5rem" }}>
          <FormControl
            placeholder="Password"
            aria-label="Password"
            aria-describedby="Password"
            style={{
              height: "55px",
              background: "rgb(244, 244, 244)",
              borderRadius: "none",
              border: "1px solid rgb(235, 235, 235)",
              fontSize: "20px",
            }}
          />
        </Col>
      </Col>
    </Col>
  );
};

export default SignInComponent;

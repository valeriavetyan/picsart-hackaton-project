import React from "react";
import { useState } from "react";
import { Button, Col, Modal } from "react-bootstrap";
import "../navigation/NavigationComponent.css";
import SignInComponent from "./SignInComponent";
import "../quiz/QuizComponent.css";

const ModalForSignIn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="navigation_signin_button" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>

        <SignInComponent />
        <Col lg={12} style={{ textAlign: "center" }}>
          <Button
            onClick={handleClose}
            style={{
              width: "40%",
              textAlign: "center",
              margin: "30px 20px 30px 20px",
              color: "white",
              backgroundColor: "#AD2FC1",
              border: "1px solid #AD2FC1",
              fontWeight: 700,
            }}
          >
            Sign In
          </Button>
        </Col>
      </Modal>
    </>
  );
};

export default ModalForSignIn;

import { Container, Col, Row, FormControl } from "react-bootstrap";
import React from "react";
import "./UserAccountComponent.css";
import NavigationComponent from "../navigation/NavigationComponent";
import Footer from "../footer/Footer";

const UserAccountComponent = () => {
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
      </Col>

      <Container style={{ marginTop: "4rem", marginBottom: "3rem" }}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Col
            lg={3}
            style={{
              paddingRight: "30px",
            }}
          >
            <p
              style={{
                width: "100%",
                background: "#F4F4F4",
                border: "1px solid #EBEBEB",
                color: "black",
                padding: "5px 17px",
                fontWeight: 600,
                fontSize: "27px",
                textAlign: "center",
              }}
            >
              My Account
            </p>
          </Col>

          <Col
            lg={8}
            style={{
              paddingLeft: "45px",
              borderLeft: "3px solid #D6D6D6",
            }}
          >
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Col lg={12}>
                <p
                  style={{
                    textAlign: "left",
                    color: "black",
                    fontWeight: 700,
                    fontSize: "27px",
                    display: "flex",
                    // alignItems: "flex-end",
                  }}
                >
                  Account Info
                </p>
              </Col>
              <Col lg={12}>
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <Col lg={5} style={{ marginTop: "3rem" }}>
                    <FormControl
                      placeholder="Name"
                      aria-label="Name"
                      aria-describedby="Name"
                      style={{
                        height: "55px",
                        background: "rgb(244, 244, 244)",
                        borderRadius: "none",
                        border: "1px solid rgb(235, 235, 235)",
                        fontSize: "20px",
                      }}
                    />
                  </Col>
                  <Col lg={5} style={{ marginTop: "3rem" }}>
                    <FormControl
                      placeholder="Surname"
                      aria-label="Surname"
                      aria-describedby="Surname"
                      style={{
                        height: "55px",
                        background: "rgb(244, 244, 244)",
                        borderRadius: "none",
                        border: "1px solid rgb(235, 235, 235)",
                        fontSize: "20px",
                      }}
                    />
                  </Col>
                  <Col lg={5} style={{ marginTop: "3rem" }}>
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
                  <Col lg={5} style={{ marginTop: "3rem" }}>
                    <FormControl
                      placeholder="Phone"
                      aria-label="Phone"
                      aria-describedby="Phone"
                      style={{
                        height: "55px",
                        background: "rgb(244, 244, 244)",
                        borderRadius: "none",
                        border: "1px solid rgb(235, 235, 235)",
                        fontSize: "20px",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col lg={12} style={{ marginTop: "3rem" }}>
                <Col lg={12}>
                  <p
                    style={{
                      textAlign: "left",
                      color: "black",
                      fontWeight: 700,
                      fontSize: "27px",
                      display: "flex",
                      // alignItems: "flex-end",
                    }}
                  >
                    Password
                  </p>
                </Col>
                <Col lg={5} style={{ marginTop: "3rem" }}>
                  <FormControl
                    placeholder="Current Password"
                    aria-label="Current Password"
                    aria-describedby="Current Password"
                    style={{
                      height: "55px",
                      background: "rgb(244, 244, 244)",
                      borderRadius: "none",
                      border: "1px solid rgb(235, 235, 235)",
                      fontSize: "20px",
                    }}
                  />
                </Col>
                <Col lg={5} style={{ marginTop: "3rem" }}>
                  <FormControl
                    placeholder="New Password"
                    aria-label="New Password"
                    aria-describedby="New Password"
                    style={{
                      height: "55px",
                      background: "rgb(244, 244, 244)",
                      borderRadius: "none",
                      border: "1px solid rgb(235, 235, 235)",
                      fontSize: "20px",
                    }}
                  />
                </Col>
                <Col lg={5} style={{ marginTop: "3rem" }}>
                  <FormControl
                    placeholder="Repeat New Password"
                    aria-label="Repeat New Password"
                    aria-describedby="Repeat New Password"
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
            </Row>
          </Col>
        </Row>
      </Container>
      <Col lg={12} style={{ position: "absolute", bottom: 0 }}>
        {" "}
        <Footer />
      </Col>
    </>
  );
};

export default UserAccountComponent;

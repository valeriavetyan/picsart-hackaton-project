import { Button } from "react-bootstrap";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import NavigationComponent from "../navigation/NavigationComponent";
import SylabusChoises from "../syllabus/SyllabusChoises";
import SyllabusHeaderComponent from "../syllabus/SyllabusHeaderComponent";
import "./Overveiw.css";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

const Overveiw = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/quiz");
  }
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
      <Container style={{ marginTop: "4rem", marginBottom: "5rem" }}>
        <p className="overveiw_title">
          The history and philosophy of C and of C++:
        </p>
        <p className="overveiw_decription">
          Computer technology has evolved at an amazing rate over the past few
          decades.Today a notebook computer can compute faster and store more
          information than the mainframe computers of the 1960s. (Quite a few
          programmers can recall bearing offerings of decks of punched cards to
          be submitted to a mighty, room-filling computer system with a majestic
          100KB of memory—far less memory than even a smartphone uses today.)
          Com- puter languages have evolved, too.The changes may not be as
          dramatic, but they are important. Bigger, more powerful computers
          spawn bigger, more complex programs, which, in turn, raise new
          problems in program management and maintenance.
        </p>
        <p className="overveiw_title">Description:</p>
        <p className="overveiw_decription">
          Generic programming is yet another programming paradigm supported by
          C++. It shares with OOP the aim of making it simpler to reuse code and
          the technique of abstracting general concepts. But whereas OOP
          emphasizes the data aspect of programming, generic programming
          emphasizes independence from a particular data type.And its focus is
          dif- ferent. OOP is a tool for managing large projects, whereas
          generic programming provides tools for performing common tasks, such
          as sorting data or merging lists.The term generic refers to code that
          is type independent. C++ data representations come in many types—
          integers, numbers with fractional parts, characters, strings of
          characters, and user-defined compound structures of several types. If,
          for example, you wanted to sort data of these various types, you would
          normally have to create a separate sorting function for each type.
          Generic programming involves extending the language so that you can
          write a function for a generic (that is, an unspecified) type once and
          use it for a variety of actual types. C++ templates provide a
          mechanism for doing that.
        </p>
        {/* <p className="overveiw_title">Examples</p>
        <p className="overveiw_decription">
          var age = 26;
          <br />
          var beverage = (age = 21) ? “Beer” : “Juice”;
          <br />
          console.log(beverage); // “Beer”
        </p> */}
        <p className="overveiw_title">Video</p>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Col lg={6}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EfXdOdhy3s8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allow="fullscreen"
            ></iframe>
          </Col>
          <Col lg={6}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0HbO-ZZRJGM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allow="fullscreen"
            ></iframe>
          </Col>
        </Row>
        <p className="overveiw_title" style={{ paddingTop: "60px" }}>
          Try it yourself
        </p>
        {/* <p className="overveiw_decription">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown
        </p> */}
        <Col lg={12}>
          <Button
            onClick={handleClick}
            style={{
              color: "white",
              width: "100%",
              backgroundColor: "#8A3FCF",
              fontSize: "35px",
              fontWeigh: 900,
              marginTop: "2rem",
              border: "1px solid #8A3FCF",
            }}
          >
            Quiz
          </Button>
        </Col>
      </Container>
      <Footer />
    </>
  );
};

export default Overveiw;

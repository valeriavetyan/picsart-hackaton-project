import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CourseItemComponent from "../courses/CourseItemComponent";
import CoursesComponent from "../courses/CoursesComponent";
import Footer from "../footer/Footer";
import HeaderComponent from "../header/HeaderComponent";
import NavigationComponent from "../navigation/NavigationComponent";

const AllCourses = () => {
  return (
    <Col lg={12}>
      <Col
        lg={12}
        style={{
          height: "fit-content",
          backgroundImage: `url("/img/gradient-background.png")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavigationComponent />
        <HeaderComponent />
      </Col>
      <Container>
        <Row
          style={{
            marginTop: "3rem",
            marginBottom: "4rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col lg={4}>
            <CourseItemComponent />
          </Col>
          <Col lg={4}>
            <CourseItemComponent />
          </Col>
          <Col lg={4}>
            <CourseItemComponent />
          </Col>
          <Col lg={4}>
            <CourseItemComponent />
          </Col>
          <Col lg={4}>
            <CourseItemComponent />
          </Col>
          <Col lg={4}>
            <CourseItemComponent />
          </Col>
          <Col lg={4}>
            <CourseItemComponent />
          </Col>
          <Col lg={4}>
            <CourseItemComponent />
          </Col>
          <Col lg={4}>
            <CourseItemComponent />
          </Col>
          <Col lg={4}>
            <CourseItemComponent />
          </Col>
          <Col lg={4}>
            <CourseItemComponent />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Col>
  );
};

export default AllCourses;

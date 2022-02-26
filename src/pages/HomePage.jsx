import React from "react";
import { Col } from "react-bootstrap";
import CoursesComponent from "../components/courses/CoursesComponent";
import Footer from "../components/footer/Footer";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";

const HomePage = () => {
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

      <CoursesComponent />
      <Footer />
    </Col>
  );
};

export default HomePage;

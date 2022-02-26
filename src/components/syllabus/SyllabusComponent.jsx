import React from "react";
import { Col } from "react-bootstrap";
import Footer from "../footer/Footer";
import HeaderComponent from "../header/HeaderComponent";
import NavigationComponent from "../navigation/NavigationComponent";
import SylabusChoises from "./SyllabusChoises";
import SyllabusHeaderComponent from "./SyllabusHeaderComponent";

const SyllabusComponent = () => {
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
      <SylabusChoises />
      <Footer />
    </>
  );
};

export default SyllabusComponent;

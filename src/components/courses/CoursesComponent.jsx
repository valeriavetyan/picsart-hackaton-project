import { Col, Container, Row } from "react-bootstrap";
import CourseItemComponent from "./CourseItemComponent";
import { useNavigate } from "react-router-dom";

const CoursesComponent = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/all-courses");
  }
  return (
    <Col
      lg={12}
      style={{
        height: "fit-content",
        display: "flex",
        alignItems: "center",
        // backgroundColor: "#f876de",
        // backgroundImage: `linear-gradient(315deg, #f876de 0%, #b9d1eb 74%)`,
      }}
    >
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
        </Row>
        <Col lg={12} style={{ textAlign: "right" }} onClick={handleClick}>
          <h4
            style={{
              fontWeight: 700,
              color: "black",
              cursor: "pointer",
            }}
          >
            See all
          </h4>
        </Col>
      </Container>
    </Col>
  );
};

export default CoursesComponent;

import { Col, Container } from "react-bootstrap";

const SyllabusHeaderComponent = () => {
  return (
    <Container>
      <Col
        lg={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/img/ci-cpp-image.png"
          style={{ width: "300px", height: "auto" }}
        />
      </Col>
      <Col
        lg={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            color: "white",
            fontWeight: 700,
            padding: "20px",
          }}
        >
          C++
        </h1>
      </Col>
      <Col
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}
      >
        <h5 style={{ color: "white" }}>
          Courses
          <span style={{ fontWeight: 700 }}>{"  > C++"}</span>
        </h5>
      </Col>
    </Container>
  );
};

export default SyllabusHeaderComponent;

import { Card, Button, Col } from "react-bootstrap";
import "./CourseItemComponent.css";
import { useNavigate } from "react-router-dom";

const CourseItemComponent = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/syllabus");
  }
  return (
    <>
      <Card className="course_item_card" onClick={handleClick}>
        <Card.Img
          variant="top"
          src="/img/ci-cpp-image.png"
          style={{ maxHeight: "250px", objectFit: "cover", width: "100%" }}
        />
        <Card.Body>
          <Card.Title className="course_item_card_titile">C++</Card.Title>
          <Card.Text className="course_item_card_decription">
            C++ is a powerful general-purpose programming language. It can be
            used to develop operating systems, browsers, games, and so on.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CourseItemComponent;

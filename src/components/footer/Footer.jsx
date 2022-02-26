import { Col, Container, Row } from "react-bootstrap";
// import { BsInstagram, BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Col className="footer_div" lg={12}>
        <Container>
          <Row
            style={{
              paddingTop: "1rem",
            }}
          >
            <Col lg={12}>
              <p style={{ fontSize: "20px", fontWeight: 300 }}>
                &copy; 2022 | {"  "}
                <span style={{ color: "rgb(213 0 200)", fontWeight: 400 }}>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    key="5"
                    aria-label="academy-footer"
                    style={{
                      color: "rgb(213 0 200)",
                      fontWeight: 400,
                      textDecoration: "none",
                    }}
                  >
                    Picsart Academy Platform.
                  </a>
                </span>
                {"  "}All Right Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
};

export default Footer;

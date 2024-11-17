import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = dataportfolio.length;

  // Automatic scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3000); // Change the number (3000) to adjust the scroll interval in milliseconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalItems]);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="roulette-container">
          {dataportfolio.map((data, i) => (
            <div
              key={i}
              className="roulette-item"
              style={{
                transform: `translateX(${(i - currentIndex) * 100}%)`,
              }}
            >
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
                <a href={data.link}>view project</a>
              </div>
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          <Button onClick={() => setCurrentIndex((currentIndex - 1 + totalItems) % totalItems)}>
            Previous
          </Button>
          <Button onClick={() => setCurrentIndex((currentIndex + 1) % totalItems)}>
            Next
          </Button>
        </div>
      </Container>
    </HelmetProvider>
  );
};
import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 5000; // Duration for how long each slide is displayed (3 seconds)
  const transitionDuration = 0;

  const totalItems = dataportfolio.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataportfolio.length);
    }, slideDuration); // Change slide every 3 seconds

    const transitionTimeout = setTimeout(() => {
      // Trigger the transition after the display time
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataportfolio.length);
    }, slideDuration);

    return () => {
      clearInterval(interval); // Cleanup on component unmount
      clearTimeout(transitionTimeout);
    };
  }, [dataportfolio.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

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
              className={`roulette-item ${i === currentIndex ? "active" : ""}`}
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
          <Button onClick={handlePrev} disabled={totalItems <= 1}>
            Previous
          </Button>
          <Button onClick={handleNext} disabled={totalItems <= 1}>
            Next
          </Button>
        </div>
      </Container>
    </HelmetProvider>
  );
};
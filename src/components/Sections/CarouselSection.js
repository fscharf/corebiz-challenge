import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import BannerLeft from "../../assets/image/banner-left.svg";
import BannerRight from "../../assets/image/banner-right.png";
import CarouselText from "../../assets/image/carousel-text.svg";

export const CarouselSection = () => {
  return (
    <Carousel id="mainCarousel" controls={false}>
      <ol className="carousel-indicators">
        <li
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
        />
        <li
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
        />
        <li
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
        />
      </ol>
      <Carousel.Item>
        <Row className="justify-content-center">
          <Col md>
            <img className="carousel-img-left" src={BannerLeft} alt="Banner" />
            <img
              className="carousel-img-text"
              src={CarouselText}
              alt="Banner"
            />
          </Col>
          <Col md="8">
            <img
              className="d-block carousel-img-right w-100"
              src={BannerRight}
              alt="Banner"
            />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};

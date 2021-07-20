import React from "react";
import { Col, Row } from "react-bootstrap";
import BannerLeft from "../../assets/image/banner-left.svg";
import BannerRight from "../../assets/image/banner-right.png";
import CarouselText from "../../assets/image/carousel-text.svg";

export const CarouselContent = () => {
  return (
    <Row className="justify-content-center">
      <Col md>
        <img className="carousel-img-left" src={BannerLeft} alt="Banner" />
        <img className="carousel-img-text" src={CarouselText} alt="Banner" />
      </Col>
      <Col md="8">
        <img
          className="d-block carousel-img-right w-100"
          src={BannerRight}
          alt="Banner"
        />
      </Col>
    </Row>
  );
};

export const CarouselSection = () => {
  return (
    <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="2"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <CarouselContent />
        </div>
        <div className="carousel-item">
          <CarouselContent />
        </div>
        <div className="carousel-item">
          <CarouselContent />
        </div>
        <div className="carousel-item">
          <CarouselContent />
        </div>
      </div>
    </div>
  );
};

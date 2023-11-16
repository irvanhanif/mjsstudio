import React, { useState } from "react";
import Footer from "./components/Footer";
import foto1 from "../files/images/foto1.PNG";
import foto2 from "../files/images/gambar2.jpg";
import foto3 from "../files/images/mozillalogo.png";
import logo from "../files/images/logo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import testimoni1 from "../files/images/testimoni1.jpg";
import testimoni2 from "../files/images/testimoni2.jpg";
import testimoni3 from "../files/images/testimoni3.jpg";
import testimoni4 from "../files/images/testimoni4.jpg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import {
  FreeMode,
  Pagination,
  Autoplay,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Welcome() {
  const [isClickLeft, setIsClickLeft] = useState(false);
  const [isClickRight, setIsClickRight] = useState(false);
  const [isHoverLeft, setIsHoverLeft] = useState(false);
  const [isHoverRight, setIsHoverRight] = useState(false);

  function mouseClickBtnTestimoni(i) {
    i ? setIsClickLeft(true) : setIsClickRight(true);
    setTimeout(() => {
      i ? setIsClickLeft(false) : setIsClickRight(false);
    }, 500);
  }

  function hoverBtnIn(i) {
    i
      ? !isHoverLeft
        ? setIsHoverLeft(!isHoverLeft)
        : setIsHoverLeft(isHoverLeft)
      : !isHoverRight
      ? setIsHoverRight(!isHoverRight)
      : setIsHoverRight(isHoverRight);
  }
  function hoverBtnOut(i) {
    i ? setIsHoverLeft(false) : setIsHoverRight(false);
  }

  return (
    <div className="welcomPage">
      <div className="banner">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2500">
              <img src={foto1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={foto2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={foto3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bodyPage row mt-4 mb-4">
          <div className="service row mt-5 mb-3">
            <label className="form-label">
              <h4>Layanan Kami</h4>
            </label>
            <div className="service-body row gap-5">
              <Link to={"/rent"}>
                <div className="card col-sm-4">
                  <div className="card-body">
                    <h5 className="card-title">Rental Kamera</h5>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="card col-sm-4">
                  <div className="card-body">
                    <h5 className="card-title">Booking Studio</h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="profile row mt-5 mb-3">
            <label className="form-label">
              <h4>Tentang Kami</h4>
            </label>
            <div className="profile-body row">
              <div className="card mb-3" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                  <div className="col-md-4 image-logo">
                    <img
                      src={logo}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-content-center flex-wrap">
                    <div className="card-body">
                      <h5 className="card-title">MJS Studio</h5>
                      <p className="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Possimus, architecto asperiores autem minus,
                        consequatur eius perspiciatis, perferendis quia quae
                        nihil provident corporis voluptas placeat deserunt
                        cupiditate in consectetur magni ullam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portofolio row mt-5 mb-3">
            <label className="form-label">
              <h4>Hasil Kerja Kami</h4>
            </label>
            <div className="portofolio-body">
              <Swiper
                slidesPerView={"auto"}
                autoplay={{
                  delay: 5000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  480: {
                    spaceBetween: 10,
                  },
                  1000: {
                    spaceBetween: 30,
                  },
                }}
                centeredSlides={1}
                initialSlide={1}
                grabCursor={true}
                spaceBetween={0}
                freeMode={true}
                pagination={{ clickable: true, dynamicBullets: false }}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="card col-12">
                    <div className="card-body">
                      <div className="content">
                        <h2 className="title">Mountain View</h2>
                        <p className="copy">
                          Check out all of these gorgeous mountain trips with
                          beautiful views of, you guessed it, the mountains
                        </p>
                        <button className="btn">View Trips</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card col-12">
                    <div className="card-body">
                      <div className="content">
                        <h2 className="title">Mountain View</h2>
                        <p className="copy">
                          Check out all of these gorgeous mountain trips with
                          beautiful views of, you guessed it, the mountains
                        </p>
                        <button className="btn">View Trips</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card col-12">
                    <div className="card-body">
                      <div className="content">
                        <h2 className="title">Mountain View</h2>
                        <p className="copy">
                          Check out all of these gorgeous mountain trips with
                          beautiful views of, you guessed it, the mountains
                        </p>
                        <button className="btn">View Trips</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card col-12">
                    <div className="card-body">
                      <div className="content">
                        <h2 className="title">Mountain View</h2>
                        <p className="copy">
                          Check out all of these gorgeous mountain trips with
                          beautiful views of, you guessed it, the mountains
                        </p>
                        <button className="btn">View Trips</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card col-12">
                    <div className="card-body">
                      <div className="content">
                        <h2 className="title">Mountain View</h2>
                        <p className="copy">
                          Check out all of these gorgeous mountain trips with
                          beautiful views of, you guessed it, the mountains
                        </p>
                        <button className="btn">View Trips</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card col-12">
                    <div className="card-body">
                      <div className="content">
                        <h2 className="title">Mountain View</h2>
                        <p className="copy">
                          Check out all of these gorgeous mountain trips with
                          beautiful views of, you guessed it, the mountains
                        </p>
                        <button className="btn">View Trips</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card col-12">
                    <div className="card-body">
                      <div className="content">
                        <h2 className="title">Mountain View</h2>
                        <p className="copy">
                          Check out all of these gorgeous mountain trips with
                          beautiful views of, you guessed it, the mountains
                        </p>
                        <button className="btn">View Trips</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card col-12">
                    <div className="card-body">
                      <div className="content">
                        <h2 className="title">Mountain View</h2>
                        <p className="copy">
                          Check out all of these gorgeous mountain trips with
                          beautiful views of, you guessed it, the mountains
                        </p>
                        <button className="btn">View Trips</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card col-12">
                    <div className="card-body">
                      <div className="content">
                        <h2 className="title">Mountain View</h2>
                        <p className="copy">
                          Check out all of these gorgeous mountain trips with
                          beautiful views of, you guessed it, the mountains
                        </p>
                        <button className="btn">View Trips</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* <div className="content">(Optional)</div> */}
          <div className="testimoni row mt-5 mb-5">
            <label className="form-label">
              <h4>Apa Kata Mereka?</h4>
            </label>
            <div className="testimoni-body">
              <Swiper
                slidesPerView={"auto"}
                autoplay={{
                  delay: 5000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }}
                loop={true}
                centeredSlides={true}
                initialSlide={0}
                spaceBetween={0}
                effect={"coverflow"}
                grabCursor={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 80,
                  depth: 200,
                  modifier: 1,
                  slideShadows: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Autoplay, EffectCoverflow, Navigation]}
                className={`mySwiper ${
                  isHoverLeft
                    ? "hoverBtnLeft"
                    : isHoverRight
                    ? "hoverBtnRight"
                    : ""
                }`}
              >
                <SwiperSlide>
                  <div className="row d-flex justify-content-center">
                    <div className="card col-lg-12 col-sm-8">
                      <div className="row g-0 h-100">
                        <div className="col-md-4 d-flex align-content-center flex-wrap">
                          <img
                            src={testimoni1}
                            className="img-fluid w-100"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8 d-flex align-content-center flex-wrap">
                          <div className="card-body">
                            <h5 className="card-title">Nama siapa</h5>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row d-flex justify-content-center">
                    <div className="card col-lg-12 col-sm-8">
                      <div className="row g-0 h-100">
                        <div className="col-md-4 d-flex align-content-center flex-wrap">
                          <img
                            src={testimoni2}
                            className="img-fluid w-100"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8 d-flex align-content-center flex-wrap">
                          <div className="card-body">
                            <h5 className="card-title">Paijo</h5>
                            <p className="card-text">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Nam deleniti minus sequi unde.
                              Id quasi molestias.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row d-flex justify-content-center">
                    <div className="card col-lg-12 col-sm-8">
                      <div className="row g-0 h-100">
                        <div className="col-md-4 d-flex align-content-center flex-wrap">
                          <img
                            src={testimoni3}
                            className="img-fluid w-100"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8 d-flex align-content-center flex-wrap">
                          <div className="card-body">
                            <h5 className="card-title">Sarimin</h5>
                            <p className="card-text">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Deserunt totam nobis asperiores
                              officia quod reprehenderit ea.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row d-flex justify-content-center">
                    <div className="card col-lg-12 col-sm-8">
                      <div className="row g-0 h-100">
                        <div className="col-md-4 d-flex align-content-center flex-wrap">
                          <img
                            src={testimoni4}
                            className="img-fluid w-100"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8 d-flex align-content-center flex-wrap">
                          <div className="card-body">
                            <h5 className="card-title">Yanto</h5>
                            <p className="card-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Explicabo accusamus praesentium debitis
                              consequatur voluptates minima eius maiores.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row d-flex justify-content-center">
                    <div className="card col-lg-12 col-sm-8">
                      <div className="row g-0 h-100">
                        <div className="col-md-4 d-flex align-content-center flex-wrap">
                          <img
                            src={testimoni1}
                            className="img-fluid w-100"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8 d-flex align-content-center flex-wrap">
                          <div className="card-body">
                            <h5 className="card-title">sisil</h5>
                            <p className="card-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Cupiditate iste itaque voluptatum doloribus
                              est error aspernatur neque nihil.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <div className="swiper-button-prev">
                  <FontAwesomeIcon
                    icon="fa-solid fa-angle-left"
                    shake={isClickLeft}
                    onMouseEnter={() => hoverBtnIn(true)}
                    onMouseLeave={() => hoverBtnOut(true)}
                    onClick={() => mouseClickBtnTestimoni(true)}
                  />
                </div>
                <div className="swiper-button-next">
                  <FontAwesomeIcon
                    icon="fa-solid fa-angle-right"
                    shake={isClickRight}
                    onClick={() => mouseClickBtnTestimoni(false)}
                    onMouseEnter={() => hoverBtnIn(false)}
                    onMouseLeave={() => hoverBtnOut(false)}
                  />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <Footer foot={true} />
    </div>
  );
}

export default Welcome;

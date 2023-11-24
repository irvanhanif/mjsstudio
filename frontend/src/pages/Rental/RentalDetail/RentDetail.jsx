import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import $ from "jquery";

import foto1 from "../../../files/images/product/utama.jpg";
import fotoPendukung1 from "../../../files/images/product/pendukung1.jpg";
import fotoPendukung2 from "../../../files/images/product/pendukung2.jpg";
import fotoPendukung3 from "../../../files/images/product/pendukung3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Lightbox from "yet-another-react-lightbox";

function RentDetail() {
  const [onHover, setOnHover] = useState(false);
  const [indexPhoto, setIndexPhoto] = useState(-1);
  const [galleryHeight, setGalleryHeight] = useState(0);

  function scrollHandler(side) {
    document.getElementById("galleryUtama").scrollBy(side ? -150 : 150, 0);
  }

  // useEffect(() => {
  //   setGalleryHeight(document.getElementById("galleryUtama").offsetHeight);
  // }, []);

  $(function () {
    $(document).ready(function () {
      $(".galleryItem").ready(function () {
        if (document.getElementById("galleryUtama"))
          setGalleryHeight(
            document.getElementById("galleryUtama").offsetHeight
          );
      });
    });
    $(window).resize(function () {
      let galleryUtama = document.getElementById("galleryUtama");
      if (galleryUtama && galleryHeight != galleryUtama.offsetHeight)
        setGalleryHeight(galleryUtama.offsetHeight);
    });
  });

  const data = [
    { src: foto1 },
    { src: fotoPendukung1 },
    { src: fotoPendukung2 },
    { src: fotoPendukung3 },
  ];

  useEffect(() => {
    document.querySelector(".leftBtn").style.top =
      (galleryHeight - 50) / 2 + "px";
    document.querySelector(".rightBtn").style.top =
      (galleryHeight - 50) / 2 + "px";
  }, [galleryHeight]);

  return (
    <div className="RentDetailPage">
      <Navbar staticNav={true} />
      <div className="rentdata">
        <div className="container">
          <div className="topsection row">
            <div className="galleryUtama col-md-6 col-12">
              <div className="card">
                <img
                  src={foto1}
                  className="rounded-1"
                  alt="..."
                />
              </div>
            </div>
            <div className="productdescription col-md-6 col-12">
              <div className="card row">
                <div className="card-body">
                  <h5 className="card-title">Sony Alpha a6400</h5>
                  <div className="card-text">
                    <p>Included</p>
                    <ol>
                      <li>SD Card Extreme Pro 64gb (2x)</li>
                      <li>Battery NP-FW50 (3x)</li>
                      <li>Charger BC-TRW (1x)</li>
                      <li>Tali Strap (1x)</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="buttonSection row">
                <div className="col-10">
                  <div className="btn btn-success w-100">
                    Masukkan ke keranjang
                  </div>
                </div>
                <div className="col-2 buttonLove">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart-circle-plus"
                    beat={onHover}
                    style={{ color: "#ad0000" }}
                    onMouseEnter={() => setOnHover(true)}
                    onMouseLeave={() => setOnHover(false)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bottomsection">
            <div id="galleryUtama">
              <div className="leftBtn">
                {galleryHeight > 0 && data.length > 4 ? (
                  <div
                    className="btnscrolll"
                    onClick={() => scrollHandler(1)}>
                    <FontAwesomeIcon icon="fa-solid fa-caret-left" />
                  </div>
                ) : null}
              </div>

              {data.map((foto, index) => (
                <div
                  className="d-flex galleryItem"
                  key={index}>
                  <img
                    src={foto.src}
                    onClick={() => setIndexPhoto(index)}
                  />
                </div>
              ))}

              <div className="rightBtn">
                {galleryHeight > 0 && data.length > 4 ? (
                  <div
                    className="btnscrollr"
                    onClick={() => scrollHandler(0)}>
                    <FontAwesomeIcon icon="fa-solid fa-caret-right" />
                  </div>
                ) : null}
              </div>
            </div>
            <Lightbox
              index={indexPhoto}
              open={indexPhoto >= 0}
              slides={data}
              close={() => setIndexPhoto(-1)}
            />
          </div>
        </div>
      </div>
      <Footer foot={true} />
    </div>
  );
}

export default RentDetail;

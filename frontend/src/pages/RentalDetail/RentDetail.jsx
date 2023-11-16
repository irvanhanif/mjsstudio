import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import foto1 from "../../files/images/product/utama.jpg";
import fotoPendukung1 from "../../files/images/product/pendukung1.jpg";
import fotoPendukung2 from "../../files/images/product/pendukung2.jpg";
import fotoPendukung3 from "../../files/images/product/pendukung3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function RentDetail() {
  const [onHover, setOnHover] = useState(false);

  return (
    <div className="RentDetailPage">
      <Navbar statix={true} />
      <div className="rentdata">
        <div className="container">
          <div className="topsection row">
            <div className="galleryUtama col-md-6 col-12">
              <div className="card">
                <img src={foto1} className="rounded-1" alt="..." />
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
          <div className="bottomsection row">
            <LightGallery
              elementClassNames="galleryPendukung"
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            >
              <a href={fotoPendukung1} className="col-3">
                <div className="d-flex galleryItem">
                  <img src={fotoPendukung1} className="" alt="" />
                </div>
              </a>
              <a href={fotoPendukung2} className="col-3">
                <div className="d-flex galleryItem">
                  <img src={fotoPendukung2} className="" alt="" />
                </div>
              </a>
              <a href={fotoPendukung3} className="col-3">
                <div className="d-flex galleryItem">
                  <img src={fotoPendukung3} className="" alt="" />
                </div>
              </a>
              <a href={fotoPendukung2} className="col-3">
                <div className="d-flex galleryItem">
                  <img src={fotoPendukung2} className="" alt="" />
                </div>
              </a>
            </LightGallery>
          </div>
        </div>
      </div>
      <Footer foot={true} />
    </div>
  );
}

export default RentDetail;

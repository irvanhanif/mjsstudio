import React, { useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import Navbar from "../../components/Navbar";

import Photo from "./Photo";

import vb from "../../../files/videos/big_buck_bunny_720p_2mb.mp4";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function BookStudio() {
  const navigation = useNavigate();

  useEffect(() => {
    document.getElementById("vidbg").play();
  }, []);

  return (
    <div className="bookpage">
      <Navbar />
      <div className="banner">
        <video
          muted
          id="vidbg"
          src={vb}
          autoPlay
          loop
          height={400}></video>
      </div>
      <div className="container mt-5 mb-5">
        <PhotoAlbum
          photos={Photo}
          layout="masonry"
          padding={10}
          onClick={({ photo }) => navigation(`/book/${photo.alt}`)}
        />
      </div>
      <Footer foot={true} />
    </div>
  );
}

export default BookStudio;

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import banner from "../../files/images/bannerrental.jpg";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import foto from "../../files/images/gambar2.jpg";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const dataCard = [
  {
    title: "example text",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Adipisicing",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus obcaecati rem tempora placeat, est eum tempore vero.",
  },
  {
    title: "Tenetur",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque consequatur cum inventore?",
  },
  {
    title: "Consectetur",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, quam odit! Fuga distinctio laudantium in officiis aliquam.",
  },
  {
    title: "Dolorum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aut dolorum voluptatum esse minima neque architecto sed aperiam officiis!",
  },
  {
    title: "Autem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem eum qui, voluptas corporis error beatae animi?",
  },
  {
    title: "Recusandae",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at facere optio assumenda saepe totam perspiciatis repellendus corporis recusandae?",
  },
  {
    title: "Voluptates",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptates dolorem nobis recusandae.",
  },
  {
    title: "Ducimus",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolorem modi vitae ducimus quasi.",
  },
  {
    title: "Autem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem eum qui, voluptas corporis error beatae animi?",
  },
  {
    title: "Recusandae",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at facere optio assumenda saepe totam perspiciatis repellendus corporis recusandae?",
  },
  {
    title: "Voluptates",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptates dolorem nobis recusandae.",
  },
  {
    title: "Ducimus",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolorem modi vitae ducimus quasi.",
  },
  {
    title: "Autem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem eum qui, voluptas corporis error beatae animi?",
  },
  {
    title: "Recusandae",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at facere optio assumenda saepe totam perspiciatis repellendus corporis recusandae?",
  },
  {
    title: "Voluptates",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptates dolorem nobis recusandae.",
  },
  {
    title: "Ducimus",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolorem modi vitae ducimus quasi.",
  },
  {
    title: "example text",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Adipisicing",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus obcaecati rem tempora placeat, est eum tempore vero.",
  },
  {
    title: "Tenetur",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque consequatur cum inventore?",
  },
  {
    title: "Dolorum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aut dolorum voluptatum esse minima neque architecto sed aperiam officiis!",
  },
  {
    title: "Autem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem eum qui, voluptas corporis error beatae animi?",
  },
  {
    title: "Recusandae",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at facere optio assumenda saepe totam perspiciatis repellendus corporis recusandae?",
  },
  {
    title: "Voluptates",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptates dolorem nobis recusandae.",
  },
  {
    title: "Ducimus",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolorem modi vitae ducimus quasi.",
  },
  {
    title: "example text",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Adipisicing",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus obcaecati rem tempora placeat, est eum tempore vero.",
  },
];

function RentCamera() {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerpage = 4;

  useEffect(() => {
    const endOffset = itemOffset + itemPerpage;
    setCurrentItems(dataCard.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dataCard.length / itemPerpage));
  }, [itemOffset, itemPerpage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemPerpage) % dataCard.length;
    setItemOffset(newOffset);
  };

  const nullData = () => (
    <p className="text-muted text-center">Maaf, Data Belum Tersedia</p>
  );

  return (
    <div className="RentCameraPage">
      <Navbar />
      <div className="section-top">
        <div className="banner">
          <img src={banner} alt="" className="w-100" />
        </div>
      </div>
      <div className="dataKamera">
        <div className="search-section">
          <div className="searchBar">
            <div className="container">
              <form method="post">
                <div className="row">
                  <div className="input-text col-md-5 col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Alat"
                      aria-label="Nama Alat"
                    />
                  </div>
                  <div className="input-category col-md-5 col-6">
                    <Select
                      className="selectOption"
                      classNamePrefix="react-select"
                      options={options}
                      components={makeAnimated()}
                      isMulti
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: "0.375rem",
                        colors: {
                          ...theme.colors,
                          primary25: "#5c636a",
                          neutral0: "#6c757d",
                          primary50: "#2d3142",
                        },
                      })}
                    />
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-secondary w-100">Cari</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {currentItems &&
              currentItems.map((item, i) => (
                <div
                  key={i}
                  className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch"
                >
                  <div className="card">
                    <img src={foto} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.text}</p>
                      <Link
                        to={"/rent/1"}
                        onClick={() => {
                          return "";
                        }}
                        className="btn btn-primary"
                      >
                        Lihat Produk
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            <ReactPaginate
              breakLabel="..."
              nextLabel="Selanjutnya"
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              previousLabel="Sebelumnya"
              pageCount={pageCount}
              renderOnZeroPageCount={nullData}
              onPageChange={handlePageClick}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link prev-btn"
              nextClassName="page-item"
              nextLinkClassName="page-link next-btn"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </div>
      </div>
      <Footer foot={true} />
    </div>
  );
}

export default RentCamera;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import foto1 from "../../files/images/product/utama.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import $ from "jquery";

const dataCart = [
  {
    Gambar: foto1,
    produk: "Kamera Lenon X23",
    hargaSewa: 25000,
  },
  {
    Gambar: foto1,
    produk: "Kamera Lenon X43",
    hargaSewa: 200000,
  },
  {
    Gambar: foto1,
    produk: "Kamera Yumi S11",
    hargaSewa: 95000,
  },
  {
    Gambar: foto1,
    produk: "Kamera Potion XH3L",
    hargaSewa: 125000,
  },
  {
    Gambar: foto1,
    produk: "Lensa Kuji 23mm",
    hargaSewa: 95000,
  },
  {
    Gambar: foto1,
    produk: "Lensa Kuji 44mm",
    hargaSewa: 195000,
  },
];

function Cart() {
  const [deleteBtn, setDeleteBtn] = useState(false);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerpage = 4;

  useEffect(() => {
    if (window.innerWidth < 590) setDeleteBtn(true);
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemPerpage;
    setCurrentItems(dataCart.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dataCart.length / itemPerpage));
  }, [itemOffset, itemPerpage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemPerpage) % dataCart.length;
    setItemOffset(newOffset);
  };

  $(function () {
    $(window).resize(function () {
      if ($(document).width() < 590) setDeleteBtn(true);
      else setDeleteBtn(false);
    });
  });

  const nullData = () => (
    <p className="text-muted text-center">
      Anda belum menambahkan barang ke keranjang sewa
    </p>
  );

  return (
    <div className="CartPage">
      <Navbar staticNav={true} />
      <div className="container mb-5">
        <form action="">
          <div className="row justify-content-center">
            <div className=" col-lg-10 col-12">
              <label className="form-label w-100">
                <h4>Keranjang Sewa</h4>
              </label>
            </div>
          </div>
          <div className="row justify-content-center mb-4">
            <div className="col-lg-10 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="cartTabel">
                    <div className="row">
                      <div className="col-1">
                        <h6>#</h6>
                      </div>
                      <div className="col-2">
                        <h6>Gambar</h6>
                      </div>
                      <div className="col-3">
                        <h6>Produk</h6>
                      </div>
                      <div className={deleteBtn ? "col-4" : "col-3"}>
                        <h6>Harga Sewa</h6>
                      </div>
                      <div className={deleteBtn ? "col-2" : "col-3"}>
                        <h6>Aksi</h6>
                      </div>
                    </div>
                    <hr />
                    {currentItems &&
                      currentItems.map((cartItem, index) => (
                        <div
                          className="row"
                          key={index}>
                          <div className="col-1">
                            <p>{index + 1}</p>
                          </div>
                          <div className="col-2 image-cart">
                            <img src={cartItem.Gambar} />
                          </div>
                          <div className="col-3">
                            <p>{cartItem.produk}</p>
                          </div>
                          <div className={deleteBtn ? "col-4" : "col-3"}>
                            <p>Rp {cartItem.hargaSewa} / hari</p>
                          </div>
                          <div
                            className={`${
                              deleteBtn ? "col-2" : "col-3"
                            } justify-content-center d-flex`}>
                            <button className=" btn btn-danger">
                              {deleteBtn ? (
                                <FontAwesomeIcon icon="fa-solid fa-trash" />
                              ) : (
                                "hapus"
                              )}
                            </button>
                          </div>
                          {index != currentItems.length - 1 ? (
                            <hr className="mt-3" />
                          ) : null}
                        </div>
                      ))}
                  </div>
                </div>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel={deleteBtn ? ">>" : "Selanjutnya"}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  previousLabel={deleteBtn ? "<<" : "Sebelumnya"}
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
                  containerClassName="pagination mt-3"
                  activeClassName="active"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-4">
            <div className="col-lg-10 col-12">
              <div className="card rincian">
                <div className="card-body">
                  <label className="form-label text-start w-100">
                    <h5>Detail Peminjaman</h5>
                  </label>
                  <div className="row">
                    <div className="input-group col-md-6">
                      <span
                        className="input-group-text"
                        id="basic-addon1">
                        Jumlah Barang Disewa
                      </span>
                      <div
                        className="form-control"
                        aria-describedby="basic-addon1">
                        5
                      </div>
                    </div>
                    <div className="input-group col-md-6">
                      <span
                        className="input-group-text"
                        id="basic-addon2">
                        Harga sewa total
                      </span>
                      <div
                        className="form-control"
                        aria-describedby="basic-addon2">
                        Rp 50.000
                      </div>
                    </div>
                    <div className="input-group col-md-6">
                      <span
                        className="input-group-text"
                        id="basic-addon2">
                        Tanggal Sewa
                      </span>
                      <input
                        type="date"
                        className="form-control"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                    <div className="input-group col-md-6">
                      <span
                        className="input-group-text"
                        id="basic-addon2">
                        Tanggal Pengembalian
                      </span>
                      <input
                        type="date"
                        className="form-control"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-4">
            <div className="col-lg-10 col-12">
              <div className="card personalInfo">
                <div className="card-body">
                  <label className="form-label text-start w-100">
                    <h5>Data Peminjam</h5>
                  </label>
                  <div className="row">
                    <div className="input-group col-md-6">
                      <span
                        className="input-group-text"
                        id="basic-addon2">
                        Nama Lengkap
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Isi Nama Lengkap Kamu"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                    <div className="input-group col-md-6">
                      <span
                        className="input-group-text"
                        id="basic-addon2">
                        Nomor WA
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="(+62) XXXXXX123"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                    <div className="input-group alamatIn col-12">
                      <span
                        className="input-group-text w-100"
                        id="basic-addon2">
                        Alamat
                      </span>
                      <textarea
                        className="form-control"
                        aria-describedby="basic-addon2"
                        rows="3"
                        placeholder="Isi Alamat Kamu"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-12 justify-content-end d-flex btnRentSubmit">
              <button className="btn btn-success px-5">Kirim Data Sewa</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;

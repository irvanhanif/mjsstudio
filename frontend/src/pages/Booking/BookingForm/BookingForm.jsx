import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function BookingForm() {
  const autoGrow = (e) => {
    e.style.height = "5px";
    e.style.height = e.scrollHeight + "px";
  };

  return (
    <div className="BookingFormPage">
      <Navbar staticNav={true} />
      <div className="container ">
        <label className="form-label text-center w-100">
          <h4>Lengkapi Data Diri</h4>
        </label>
        <div className="mb-4 d-flex justify-content-center">
          <div className="card col-12 col-sm-10 col-md-8">
            <div className="card-body">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="input-group col-12 mb-3">
                    <span
                      className="input-group-text"
                      id="basic-addon1">
                      Tipe Pemotretan
                    </span>
                    <div
                      className="form-control"
                      aria-describedby="basic-addon1">
                      Graduation
                    </div>
                  </div>
                  <div className="input-group col-12 mb-3">
                    <span
                      className="input-group-text"
                      id="basic-addon1">
                      Tipe Ukuran
                    </span>
                    <div
                      className="form-control"
                      aria-describedby="basic-addon1">
                      4x6
                    </div>
                  </div>
                  <div className="input-group col-12 mb-3">
                    <span
                      className="input-group-text"
                      id="basic-addon1">
                      Jumlah Pengunjung
                    </span>
                    <div
                      className="form-control"
                      aria-describedby="basic-addon1">
                      12 Orang
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="input-group day">
                      <span
                        className="input-group-text"
                        id="basic-addon1">
                        Hari
                      </span>
                      <div
                        className="form-control"
                        aria-describedby="basic-addon1">
                        Jumat, 20 Desember 2023
                      </div>
                    </div>
                    <div className="input-group time">
                      <span
                        className="input-group-text"
                        id="basic-addon1">
                        Waktu
                      </span>
                      <div
                        className="form-control"
                        aria-describedby="basic-addon1">
                        10:20
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form action="">
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="your name"
                  />
                  <label htmlFor="floatingInput">Nama Lengkap</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="your phone"
                  />
                  <label htmlFor="floatingInput">No. Whatsapp</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="floatingInput"
                    cols="30"
                    rows="5"
                    onInput={(e) => autoGrow(e.target)}
                    placeholder="Your Address"></textarea>
                  <label htmlFor="floatingInput">Alamat</label>
                </div>
                <div className="col-12 justify-content-end d-flex">
                  <div className="btn btn-success">Kirim Data Booking</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookingForm;

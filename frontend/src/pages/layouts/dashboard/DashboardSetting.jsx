import React from "react";
import Dashboard from "./Dashboard";

function DashboardSetting() {
  const columns = [
    {
      field: "fullname",
      header: "Nama Lengkap",
      type: "text",
    },
    {
      field: "email",
      header: "Email",
      type: "email",
    },
    {
      field: "password",
      header: "Password",
      type: "password",
    },
    {
      field: "confirm_password",
      header: "Confirm Password",
      type: "password",
    },
    {
      field: "whatsapp_number",
      header: "Nomor WhatsApp",
      type: "text",
    },
    {
      field: "address",
      header: "Alamat",
      type: "textarea",
    },
  ];

  const autoGrow = (e) => {
    e.style.height = "5px";
    e.style.height = e.scrollHeight + "px";
  };

  const formInput = (col) => {
    switch (col.type) {
      case "text":
      case "email":
      case "password":
        return (
          <input
            type={col.type}
            className="form-control"
            placeholder={col.header}
            id="floatingInput"
          />
        );

      case "textarea":
        return (
          <textarea
            className="form-control"
            id="floatingInput"
            cols="30"
            rows="5"
            onInput={(e) => autoGrow(e.target)}
            placeholder="Your Address"></textarea>
        );
    }
  };

  return (
    <div className="SettingAkunSection">
      <Dashboard>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 mb-3">
              <div className="card">
                <div className="card-header">
                  <label className="form-label mb-0">Data Diri</label>
                </div>
                <div className="card-body">
                  <form action="">
                    {columns.map((col, idx) => (
                      <div
                        className="col-12 mb-3"
                        key={idx}>
                        <div className="input-group">
                          <span className="input-group-text col-12 col-sm-auto">
                            {col.header}
                          </span>
                          <div className="form-floating">
                            {formInput(col)}
                            <label htmlFor="floatingInput">
                              Masukkan {col.header}
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="buttonSubmit col-12 justify-content-end d-flex">
                      <div className="btn btn-success">Simpan</div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
}

export default DashboardSetting;

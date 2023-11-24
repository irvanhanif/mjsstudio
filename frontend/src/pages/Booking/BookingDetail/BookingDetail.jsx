import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist";

import foto from "../../../files/images/gambar2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function BookingDetail() {
  const [onHoverPlus, setOnHoverPlus] = useState(false);
  const [onHoverMinus, setOnHoverMinus] = useState(false);
  const [pengunjung, setPengunjung] = useState(1);
  const [day, setDay] = useState(0);
  const [times, setTimes] = useState([]);
  const [timesEnd, setTimesEnd] = useState([]);
  const [selected, setSelected] = useState({
    day: null,
    time: "",
    pengunjung: 1,
    ukuran: "",
  });

  const [days, setDays] = useState([]);
  const [daysTemps, setDaysTemps] = useState([]);

  const time = {
    min: 6,
    max: 21,
    interval: 20,
    skip: 0,
  };
  const setDayData = {
    interval: 1000 * 3600 * 24,
    skip: 0,
  };

  const ukuran = ["4x6", "4x8", "6x8", "8x8", "6x12", "8x12"];
  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  useEffect(() => {
    const daystemp = [...daysTemps];
    daystemp.forEach((hari, idx) => {
      const addIntervalDate = (i) => {
        const setDate = new Date().getTime() + setDayData.interval * i;
        return new Date(setDate);
      };
      const date = addIntervalDate(idx);
      hari.date = `${date.getDate()} ${
        bulan[date.getMonth()]
      } ${date.getFullYear()}`;
    });

    setDays(daystemp);
  }, [daysTemps]);

  useEffect(() => {
    const tgl = new Date().getDay();
    setDay(tgl);

    let daysData = [
      { idx: 0, tag: "Minggu" },
      { idx: 1, tag: "Senin" },
      { idx: 2, tag: "Selasa" },
      { idx: 3, tag: "Rabu" },
      { idx: 4, tag: "Kamis" },
      { idx: 5, tag: "Jumat" },
      { idx: 6, tag: "Sabtu" },
    ];
    const splitDays = daysData.splice(tgl, daysData.length);
    setDaysTemps([...splitDays, ...daysData]);

    let temploop = [],
      tempEndloop = [];
    for (let i = 0; i < (time.max - time.min) * 60; i += time.interval) {
      const minute = "00" + (i % 60);
      const minuteEnd = (i + time.interval - 1) % 60;
      temploop.push(
        `${time.min + Math.floor(i / 60)}:${minute.slice(
          minute.length - 2,
          minute.length
        )}`
      );
      tempEndloop.push(`${time.min + Math.floor(i / 60)}:${minuteEnd}`);
    }
    setTimes(temploop);
    setTimesEnd(tempEndloop);

    setTimeout(() => {
      heightTimeHandler();
    }, 100);
    window.addEventListener("resize", heightTimeHandler);
    return () => {
      window.removeEventListener("resize", heightTimeHandler);
    };
  }, []);

  const heightTimeHandler = () => {
    const heightDay = document.querySelector(".day .card-body").offsetHeight;
    document.querySelector(".time .card-body").style.height = heightDay + "px";
  };

  const AddLabelDay = () => (
    <button
      className="btn btn-light todayToast"
      disabled>
      Today
    </button>
  );

  useEffect(() => {
    // console.log(selected);
  }, [selected]);

  return (
    <div className="BookingDetail">
      <Navbar staticNav={true} />
      <div className="container mb-5">
        <div className="topdetail row mb-4">
          <div className="col-12 col-sm-5">
            <img
              src={foto}
              alt=""
            />
          </div>
          <div className="col-12 col-sm-7">
            <div className="card-title">Graduation</div>
            <div className="card-text">Pilih Ukuran</div>
            <div className="pilihUkuran mt-2 row gap-3 w-100">
              {ukuran.map((ukur, index) => (
                <button
                  className={`col-5 col-md-3 btn btn-light ${
                    selected.ukuran == ukur ? "selected" : ""
                  }`}
                  onClick={() =>
                    setSelected({
                      day: selected.day,
                      time: selected.time,
                      pengunjung: selected.pengunjung,
                      ukuran: ukur,
                    })
                  }
                  key={index}>
                  {ukur}
                </button>
              ))}
            </div>
            <div className="card-text mt-3 mb-2">Berapa pengunjung</div>
            <div className="people row">
              <div className="col-2">
                <FontAwesomeIcon
                  className="p-2 rounded-circle"
                  icon={faMinus}
                  beatFade={onHoverMinus}
                  onClick={() => {
                    setPengunjung(pengunjung > 1 ? pengunjung - 1 : 1);
                    setSelected({
                      day: selected.day,
                      time: selected.time,
                      pengunjung: parseInt(pengunjung - 1) || 1,
                      ukuran: selected.ukuran,
                    });
                  }}
                  onMouseEnter={() => setOnHoverMinus(true)}
                  onMouseLeave={() => setOnHoverMinus(false)}
                />
              </div>
              <div className="col-5">
                <input
                  type="number"
                  className="form-control ml-3 text-center"
                  value={pengunjung}
                  onChange={(e) => {
                    if (e.target.value == "") setPengunjung(1);
                    else {
                      const valueInput = parseInt(e.target.value);
                      setPengunjung(String(valueInput));
                    }
                    setSelected({
                      day: selected.day,
                      time: selected.time,
                      pengunjung: parseInt(e.target.value) || 1,
                      ukuran: selected.ukuran,
                    });
                  }}
                />
              </div>
              <div className="col-2">
                <FontAwesomeIcon
                  className="p-2 rounded-circle"
                  icon={faPlus}
                  onMouseEnter={() => setOnHoverPlus(true)}
                  onMouseLeave={() => setOnHoverPlus(false)}
                  beatFade={onHoverPlus}
                  onClick={() => {
                    setPengunjung(pengunjung + 1);
                    setSelected({
                      day: selected.day,
                      time: selected.time,
                      pengunjung: parseInt(pengunjung + 1),
                      ukuran: selected.ukuran,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bookSection py-3">
          <div className="text-center mb-3">Pilih Waktu</div>
          <div className="col-10 mx-auto ">
            <div className="row justify-content-center">
              <div className="day col-6">
                <div className="card">
                  <div className="card-body ">
                    {days.map((hari, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() =>
                            setSelected({
                              day: hari.idx,
                              time: selected.time,
                              pengunjung: selected.pengunjung,
                              ukuran: selected.ukuran,
                            })
                          }
                          className={`form-control my-2 ${
                            selected.day == hari.idx ? "selected" : ""
                          }`}>
                          {hari.tag} {day == hari.idx ? <AddLabelDay /> : null}
                          <div className="col-12 infoDay text-muted">
                            {hari.date}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="time col-6">
                <div className="card">
                  <div className="card-body ">
                    <ScrollContainer className="container">
                      {times.map((waktu, idx) => (
                        <div
                          key={idx}
                          onClick={() =>
                            setSelected({
                              day: selected.day,
                              time: waktu,
                              pengunjung: selected.pengunjung,
                              ukuran: selected.ukuran,
                            })
                          }
                          className={`buttontime form-control my-2 ${
                            selected.time == waktu ? "selected" : ""
                          }`}>
                          {waktu}
                        </div>
                      ))}
                    </ScrollContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row buttonSubmit d-flex justify-content-center mt-5">
            <div className="col-md-5 col-10">
              <Link
                to={"/book-form/abc"}
                className="text-center form-control btn btn-success">
                Booking Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookingDetail;

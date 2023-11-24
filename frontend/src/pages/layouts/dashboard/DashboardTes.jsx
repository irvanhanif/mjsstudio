import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Tabel from "../../components/Tabel";

function DashboardTes() {
  const columns = [
    {
      field: "name",
      header: "Nama",
      type: "text",
    },
    {
      field: "company",
      header: "Perusahaan",
      type: "text",
    },
    {
      field: "city",
      header: "Kota",
      type: "text",
    },
    {
      field: "state",
      header: "Negara",
      type: "text",
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      name: "Joe James",
      company: "Test corps",
      city: "Yonkers",
      state: "NY",
    },
    {
      id: 2,
      name: "John Walsh",
      company: "Test corps",
      city: "Hartford",
      state: "CT",
    },
    {
      id: 3,
      name: "Bob Herm",
      company: "Test corps",
      city: "Tampa",
      state: "FL",
    },
    {
      id: 4,
      name: "James Houston",
      company: "Test corps",
      city: "Dallas",
      state: "TX",
    },
    {
      id: 5,
      name: "Margarret Clinton",
      company: "Santon corps",
      city: "Green Hilton",
      state: "Canada",
    },
    {
      id: 6,
      name: "Jim Morton",
      company: "Tesla corps",
      city: "New York",
      state: "USA",
    },
    {
      id: 7,
      name: "Joe James",
      company: "Test corps",
      city: "Yonkers",
      state: "NY",
    },
    {
      id: 8,
      name: "John Walsh",
      company: "Test corps",
      city: "Hartford",
      state: "CT",
    },
    {
      id: 9,
      name: "Bob Herm",
      company: "Test corps",
      city: "Tampa",
      state: "FL",
    },
    {
      id: 10,
      name: "James Houston",
      company: "Test corps",
      city: "Dallas",
      state: "TX",
    },
    {
      id: 11,
      name: "Margarret Clinton",
      company: "Santon corps",
      city: "Green Hilton",
      state: "Canada",
    },
    {
      id: 12,
      name: "Jim Morton",
      company: "Tesla corps",
      city: "New York",
      state: "USA",
    },
    {
      id: 13,
      name: "James Houston",
      company: "Test corps",
      city: "Dallas",
      state: "TX",
    },
    {
      id: 14,
      name: "Joe James",
      company: "Test corps",
      city: "Yonkers",
      state: "NY",
    },
    {
      id: 15,
      name: "John Walsh",
      company: "Test corps",
      city: "Hartford",
      state: "CT",
    },
    {
      id: 16,
      name: "Bob Herm",
      company: "Test corps",
      city: "Tampa",
      state: "FL",
    },
    {
      id: 17,
      name: "James Houston",
      company: "Test corps",
      city: "Dallas",
      state: "TX",
    },
    {
      id: 18,
      name: "Margarret Clinton",
      company: "Santon corps",
      city: "Green Hilton",
      state: "Canada",
    },
    {
      id: 19,
      name: "Jim Morton",
      company: "Tesla corps",
      city: "New York",
      state: "USA",
    },
    {
      id: 20,
      name: "Joe James",
      company: "Test corps",
      city: "Yonkers",
      state: "NY",
    },
    {
      id: 21,
      name: "John Walsh",
      company: "Test corps",
      city: "Hartford",
      state: "CT",
    },
    {
      id: 22,
      name: "Bob Herm",
      company: "Test corps",
      city: "Tampa",
      state: "FL",
    },
    {
      id: 23,
      name: "James Houston",
      company: "Test corps",
      city: "Dallas",
      state: "TX",
    },
    {
      id: 24,
      name: "Margarret Clinton",
      company: "Santon corps",
      city: "Green Hilton",
      state: "Canada",
    },
    {
      id: 25,
      name: "Jim Morton",
      company: "Tesla corps",
      city: "New York",
      state: "USA",
    },
    {
      id: 26,
      name: "James Houston",
      company: "Test corps",
      city: "Dallas",
      state: "TX",
    },
  ]);

  return (
    <div className="DashboardTes">
      <Dashboard>
        <div className="container">
          <div className="row">
            <div className="col-12 tableStyle mb-3">
              <Tabel
                columns={columns}
                dataTabel={data}
                namaTabel="Tes"
              />
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
}

export default DashboardTes;

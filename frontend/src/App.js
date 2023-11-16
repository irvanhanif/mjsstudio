import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Welcome from "./pages/Welcome";
import RentCamera from "./pages/RentalKamera/RentCamera";
import RentDetail from "./pages/RentalDetail/RentDetail";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
library.add(fas);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/rent" element={<RentCamera />} />
        <Route path="/rent/:id" element={<RentDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

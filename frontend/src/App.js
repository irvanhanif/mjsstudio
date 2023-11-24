import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routeApp from "./Route";

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
        {routeApp.map((routerApp, index) => (
          <Route
            key={index}
            path={routerApp.path}
            element={routerApp.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

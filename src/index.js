import { React } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About/About";
//import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index to="/" element={<App></App>} />
          <Route to="/login" element={<Login></Login>} />
          <Route to="/about" element={<About></About>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>,

  rootElement
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Root from "./Root/Root";
import Home from "./Components/Home/Home";



createRoot(document.getElementById("root")).render(
  <StrictMode>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root></Root>}>
            <Route index element={<Home></Home>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
 
  </StrictMode>
);

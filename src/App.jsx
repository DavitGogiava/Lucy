import "./App.css";
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";

const SmoothScroll = lazy(() => import("./Utils/SmoothScroll"));
function App() {
  return (
    <div className="App">
      <SmoothScroll>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
              </>
            }
          />
        </Routes>
      </SmoothScroll>
    </div>
  );
}

export default App;

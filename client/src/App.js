import { React, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Profile from "./components/Profile"; // Import your profile component

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

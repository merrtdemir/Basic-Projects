import React from "react";
import logo from "../Data/logo.png";

function Headercomponent() {
  return (
    <div>
      <nav style={{ backgroundColor: "#3E2723" }} className="p-3">
        <div className="container  d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <img
              className="img-fluid"
              src={logo}
              alt="Logo"
              style={{ height: "60px", width: "auto" }}
            />
          </a>

          <h2 className="text-warning mt-2 fs-3 ms-auto ms-md-5">Meal App</h2>
        </div>
      </nav>
    </div>
  );
}

export default Headercomponent;

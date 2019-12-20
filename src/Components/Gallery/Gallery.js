import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import CarouselPage from "./CarouselPage";

export default function Gallery({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <h1 className="gallery-title">{title}</h1>
      <div className="section-content" id={id}>
        <div className="section-text">
        </div>
        <div className="section-text bg-alt">
          <CarouselPage />
        </div>
      </div>
    </div>
  );
}

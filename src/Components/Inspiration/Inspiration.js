import React from "react";
import ImageDescription from "../Inspiration/ImageDescription";
import * as img from "../../images/stanger-things_raw.png";

export default function Inspiration({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <h1 className="inspiration-title">{title}</h1>
      <div className="section-content" id={id}>
        <div >
          <ImageDescription src={img} className="inspiration-img" />
        </div>

        <p className="section-text bg-alt">{subtitle}</p>
      </div>
    </div>
  );
}

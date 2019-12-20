import * as React from "react";
import { Image } from "office-ui-fabric-react/lib/Image";

export default function ImageDescription({ src, className }) {
  return (
    <div>
      <Image src={src} className={className}></Image>
    </div>
  );
}
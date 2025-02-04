import React from "react";
import Image from "next/image";

// Props
import { ImageWithShadowProps } from "./props";

// Enums
import { ImageWithShadowStyle } from "./enum";

const ImageWithShadow = ({
  url,
  alt,
  style = ImageWithShadowStyle.RIGHT,
}: ImageWithShadowProps) => {
  const { shadow, imageBorder } = {
    [ImageWithShadowStyle.LEFT]: {
      shadow: "shadow-[-10px_10px_0_rgba(0,0,0,0.25)]",
      imageBorder: "border-l-4 ",
    },
    [ImageWithShadowStyle.RIGHT]: {
      shadow: "shadow-[10px_10px_0_rgba(0,0,0,0.25)]",
      imageBorder: "border-r-4",
    },
  }[style];

  return (
    <div className={`relative w-full h-full ${shadow}`}>
      <Image
        src={url}
        alt={alt}
        fill
        className={`border-b-4 border-white ${imageBorder}`}
      />
    </div>
  );
};

export default ImageWithShadow;

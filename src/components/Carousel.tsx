import { useState } from 'react';

import {
  BASE_IMG_URL,
  WEBP_IMG,
} from 'consts';
import { v4 as uuid } from 'uuid';

export const Carousel = ({
  height,
  width,
  className = "",
}: {
  height: string;
  width: string;
  className?: string;
}) => {
  const carouselImgs: Array<{ src: string; alt: string }> = [
    { src: `${BASE_IMG_URL}/${WEBP_IMG}/books1.webp`, alt: "books" },
    { src: `${BASE_IMG_URL}/${WEBP_IMG}/serverroom.webp`, alt: "server" },
    { src: `${BASE_IMG_URL}/${WEBP_IMG}/book2.avif`, alt: "books" },
    { src: `${BASE_IMG_URL}/${WEBP_IMG}/book3.avif`, alt: "books" },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div
      className={`lg2__carousel--wrapper ${className}`}
      style={{ height, width }}
    >
      <section className="tui__carousel">
        <div className="tui__carousel--slides">
          {carouselImgs.map((img, index) => (
            <div
              className={`tui__carousel--slide`}
              key={uuid()}
              style={{
                marginLeft: `${
                  index === 0
                    ? `${activeSlide * -(100 / (carouselImgs.length + 1))}%`
                    : "0"
                }`,
              }}
            >
              <img src={img.src} alt={img.alt} className="tui__img-hw100" />
            </div>
          ))}

          <div className="tui__carousel--manual-navigation">
            {carouselImgs.map((_, index) => (
              <label
                key={uuid()}
                className={`tui__carousel--manual-btn ${
                  index === activeSlide ? "tui__active" : ""
                }`}
                onClick={() => setActiveSlide(index)}
              ></label>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

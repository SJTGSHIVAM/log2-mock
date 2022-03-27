import './home.css';

import { Carousel } from 'components';
import {
  AVIF_IMG,
  BASE_IMG_URL,
  JPG_IMG,
  WEBP_IMG,
} from 'consts';

export const Home = () => {
  const categories = [
    {
      label: "DSA",
      src: `${BASE_IMG_URL}/${JPG_IMG}/coremen.jpg`,
      alt: "display image",
    },

    {
      label: "Web Dev",
      src: `${BASE_IMG_URL}/${AVIF_IMG}/webdev.avif`,
      alt: "display image",
    },
    {
      label: "AI",
      src: `${BASE_IMG_URL}/${AVIF_IMG}/ai.avif`,
      alt: "display image",
    },
    {
      label: "System Design",
      src: `${BASE_IMG_URL}/${AVIF_IMG}/sd.avif`,
      alt: "display image",
    },
    {
      label: "Discrete Maths",
      src: `${BASE_IMG_URL}/${AVIF_IMG}/dm.avif`,
      alt: "display image",
    },
    {
      label: "DBMS",
      src: `${BASE_IMG_URL}/${WEBP_IMG}/dbms.webp`,
      alt: "display image",
    },
  ];
  return (
    <div>
      <Carousel height={"45vh"} width={"100%"} />
      <h1 className="tui__h-1">
        Log<sub>2</sub>
      </h1>
      <p className="tui__text-lg">
        is a store dedicated to selling books that fall around computers and
        related stuff.
      </p>
      <div className="lg2__categories">
        {categories.map(({ label, src, alt }) => (
          <div className="lg2__category tui__m-xl">
            <div
              className="tui__badge--ribbon tui__hw--100 tui__pos--rel tui__ribbon--bg-col"
              data-label={label}
            >
              <div className="tui__hw--100 tui__pos--rel">
                <img className="tui__image--center-cover" src={src} alt={alt} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <svg
          className="top-btn-position top-btn-style"
          onClick={scrollTop}
          fill="#FFFFFF"
          width="52"
          height="52"
          version="1.1"
          id="lni_lni-angle-double-up"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          style={{ enableBackground: "new 0 0 64 64" }}
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M33.6,25.6c-0.9-0.9-2.3-0.9-3.2,0l-23,22.6c-0.9,0.9-0.9,2.3,0,3.2c0.9,0.9,2.3,0.9,3.2,0L32,30.4l21.4,21.1
          c0.4,0.4,1,0.6,1.6,0.6c0.6,0,1.2-0.2,1.6-0.7c0.9-0.9,0.9-2.3,0-3.2L33.6,25.6z"
            />
            <path
              d="M10.6,38.4L32,17.4l21.4,21.1c0.4,0.4,1,0.6,1.6,0.6c0.6,0,1.2-0.2,1.6-0.7c0.9-0.9,0.9-2.3,0-3.2l-23-22.6
          c-0.9-0.9-2.3-0.9-3.2,0l-23,22.6c-0.9,0.9-0.9,2.3,0,3.2C8.3,39.3,9.7,39.3,10.6,38.4z"
            />
          </g>
        </svg>
      )}
    </div>
  );
};

export default ScrollToTop;

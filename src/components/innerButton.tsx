import { useSwiper } from "swiper/react";
import Compass from "../assets/Compass.png";

const InnerButton = ({
  direction,
  index,
}: {
  direction: string;
  index: number;
}) => {
  const swiper = useSwiper();
  console.log("this is swiper instance", swiper);

  if (direction === "next") {
    return (
      <>
        <button
          onClick={() => swiper.slideNext()}
          className="z-[9999] fixed right-1 md:right-4 top-1/2 -translate-y-1/2 rotate-[45deg] hover:scale-105 active:scale-95 transition-transform"
        >
          <img
            src={Compass}
            alt="Arrow"
            height={64}
            width={64}
            className={`${
              index == 5 ? "opacity-20" : "opacity-100"
            } scale-75 md:scale-100`}
          />
        </button>
        ;
      </>
    );
  }
  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="z-[9999] fixed left-1 md:left-4 top-1/2 -translate-y-1/2 rotate-[225deg] hover:scale-105 active:scale-95 transition-transform"
      >
        <img
          src={Compass}
          alt="Arrow"
          height={64}
          width={64}
          className={`${
            index == 0 ? "opacity-20" : "opacity-100"
          } scale-75 md:scale-100`}
        />
      </button>
      ;
    </>
  );
};

export default InnerButton;

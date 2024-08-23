import { useSwiperSlide } from "swiper/react";

const CarouselCard = ({ image, title }: { image: string; title: string }) => {
  const swiperSlide = useSwiperSlide();
  return (
    <div
      className={` rounded-xl flex justify-center items-center ${
        swiperSlide.isActive
          ? "opacity-100 hover:scale-110 transition ease-in-out"
          : "opacity-50"
      } `}
    >
      <img
        src={image}
        alt={title}
        height={600}
        width={250}
        className={`border-2 border-black ${
          swiperSlide.isActive
            ? "hover:border-white hover:border-4 transition"
            : ""
        } rounded-2xl`}
      />
    </div>
  );
};

export default CarouselCard;

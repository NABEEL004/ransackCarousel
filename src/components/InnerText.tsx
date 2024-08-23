
import { useSwiperSlide } from "swiper/react";

const InnerText = () => {
  const swiperSlide = useSwiperSlide();
  return (
    <p>Current slide is {swiperSlide.isActive ? "active" : "not active"}</p>
  );
};

export default InnerText;

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import InnerButton from "./innerButton";
import InnerBackground from "./InnerBackground";

import KingFeastImage from "../assets/kingfeast.png";
import LostRelic from "../assets/lostrelic.png";
import Meltdown from "../assets/meltdown.png";
import Overdue from "../assets/overdue.png";
import Pieceful from "../assets/pieceful.png";
import Somerville from "../assets/somervile.png";
import CarouselCard from "./CarouselCard";

const adventures = [
  {
    title: "King Feast",
    image: KingFeastImage,
  },
  {
    title: "Lost Relic",
    image: LostRelic,
  },
  {
    title: "Meltdown",
    image: Meltdown,
  },
  {
    title: "Overdue",
    image: Overdue,
  },
  {
    title: "Pieceful",
    image: Pieceful,
  },
  {
    title: "Somerville",
    image: Somerville,
  },
];

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const screenWidth = useScreenWidth();

  return (
    <div className="w-full flex items-center justify-center relative">
      <Swiper
        effect="coverflow"
        spaceBetween={50}
        slidesPerView={screenWidth < 1024 ? 1 : screenWidth < 1400 ? 3 : 5}
        centeredSlides={true}
        className="h-[35rem] py-24"
        coverflowEffect={{
          rotate: 30,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[EffectCoverflow, Pagination, Mousewheel]}
        onSlideChange={(swiper) => setIndex(swiper.realIndex)}
      >
        <InnerButton direction="next" index={index} />
        <InnerButton direction="prev" index={index} />
        <InnerBackground index={index} />
        {adventures.map((adventure, index) => (
          <SwiperSlide key={index}>
            <CarouselCard
              key={index}
              title={adventure.title}
              image={adventure.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

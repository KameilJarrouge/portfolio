import { Swiper, SwiperSlide } from "swiper/react";
import ImageLightbox from "./ImageLightbox";
import { useState } from "react";
import { Pagination } from "swiper/modules";

// const images = [
//   { src: "/img1.jpg" },
//   { src: "/img2.jpg" },
//   { src: "/img3.jpg" },
// ];

export default function ImageCarousel({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ImageLightbox
        open={open}
        setOpen={setOpen}
        slides={images.map((image) => ({ src: image }))}
        index={index}
      />
    </>
  );
}

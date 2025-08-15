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
      <div className="  bg-black/80 text-white text-sm px-2 py-1 rounded-t">
        {images[index].title}
      </div>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={(e) => setIndex(e.activeIndex)}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img.src}
              onClick={() => {
                // setIndex(i);
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
        slides={images}
        index={index}
        render={{
          slide: ({ slide }) => (
            <div className="relative w-[95vw] md:w-[85vw] lg:w-[75vw] xl:w-[65vw] h-fit ">
              <img
                src={slide.src}
                alt={slide.title}
                className="rounded shadow"
              />

              <div className="absolute bottom-2 left-2 bg-black/40 hover:bg-black/80 text-white/40 hover:text-white text-sm px-2 py-1 rounded">
                {slide.title}
              </div>
            </div>
          ),
        }}
      />
    </>
  );
}

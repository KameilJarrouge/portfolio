import { Swiper, SwiperSlide } from "swiper/react";
import ImageLightbox from "./ImageLightbox";
import { useState } from "react";
import { Pagination } from "swiper/modules";

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
            <div className="w-[90ch] h-[30rem] flex justify-center bg-black/20">
              <img
                src={img.src}
                onClick={() => {
                  setOpen(true);
                }}
                className="cursor-pointer object-fill "
              />
            </div>
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
            <div className="relative w-[95vw] md:w-[85vw] lg:w-[75vw] xl:w-[65vw] h-fit flex justify-center">
              <img
                src={slide.src}
                alt={slide.title}
                className="rounded shadow object-cover "
              />

              <div className="absolute bottom-0 left-0 text-center w-full bg-black/70  text-white text-sm px-2 py-1 ">
                {slide.title}
              </div>
            </div>
          ),
        }}
      />
    </>
  );
}

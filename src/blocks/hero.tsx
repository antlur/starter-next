"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BackstageImage from "@/components/backstage-image";
import { cn } from "@/lib/utils";

export default function Hero({ logo_media_id: logo, content, bg_media_id: bg_image, full_width = true }) {
  return (
    <div
      className={cn("relative z-0 w-full h-[40vh]", {
        "container-breakout md:h-[80vh]": full_width,
        "md:h-[60vh]": !full_width,
      })}
    >
      <div className="!absolute top-0 left-0 z-0 bg-header h-1/2 container-breakout" />
      {bg_image && (
        <Carousel
          className={cn("overflow-hidden sm:container-breakout", {
            "md:rounded-md": !full_width,
          })}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          // animationHandler="fade"
          showStatus={false}
          showIndicators={bg_image?.length > 1}
          swipeable={true}
          showThumbs={false}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={25}
          emulateTouch={true}
        >
          {bg_image.map((image, index) => (
            <div
              className={cn("w-full h-[40vh] md:h-[80vh]", {
                "md:h-[80vh]": full_width,
                "md:h-[60vh]": !full_width,
              })}
              key={image.url}
            >
              <BackstageImage width={1800} image={image} />
            </div>
          ))}
        </Carousel>
      )}
      {logo && (
        <>
          <div className={cn("absolute inset-0 w-full h-full")} />
          <div className="absolute top-1/2 bottom-0 left-0 right-0 m-auto max-w-[75vw] md:max-w-[480px] -translate-y-1/2 z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.url} className="object-contain w-full h-full" loading="eager" alt="" />
          </div>
        </>
      )}
      {content && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative px-6 py-3 text-xl font-bold tracking-widest uppercase bg-opacity-75 text-primary-foreground md:text-3xl lg:text-5xl">
            <div className="absolute inset-0 opacity-75 bg-primary" />
            <div className="relative">{content}</div>
          </div>
        </div>
      )}
    </div>
  );
}

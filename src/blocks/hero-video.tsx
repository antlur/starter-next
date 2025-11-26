interface HeroVideoProps {
  media: null | {
    id: number;
    file_name: string;
    url: string;
    transform_url: string;
    path: string;
    width: number;
    height: number;
    alt: string;
  };
  poster: null | {
    id: number;
    file_name: string;
    url: string;
    transform_url: string;
    path: string;
    width: number;
    height: number;
    alt: string;
  };
}
export default function HeroVideo({ media, poster }: HeroVideoProps) {
  if (!media) {
    return null;
  }

  return (
    <div className="relative w-full aspect-video lg:h-[85vh] container-breakout">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        poster={poster?.transform_url}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={media.url} type="video/mp4" />
      </video>
    </div>
  );
}

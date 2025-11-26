"use client";
import imgproxyLoader from "@antlur/backstage/util/imgproxy-loader";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BackstageImageProps {
  image?: {
    url?: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  strategy?: "imgproxy" | "next";
  maxWidth?: number;
  src?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  fill?: boolean;
}

export default function BackstageImage(props: BackstageImageProps) {
  const strategies = {
    imgproxy: ImgproxyStrategy,
    next: NextStrategy,
  };

  const Strategy = strategies[props?.strategy ?? "imgproxy"];

  return <Strategy {...props} />;
}

function ImgproxyStrategy({
  image,
  src,
  maxWidth = 1000,
  loading = "lazy",
  alt = "",
  fill,
  ...props
}: BackstageImageProps) {
  const imageUrl = (src || image?.url) ?? "";
  const imageAlt = (alt || image?.alt) ?? "";

  if (fill) {
    return (
      <Image
        loader={imgproxyLoader}
        src={imageUrl}
        alt={imageAlt}
        fill
        className={cn("object-cover w-full h-full", props.className)}
      />
    );
  }

  return (
    <Image
      loader={imgproxyLoader}
      src={imageUrl}
      alt={imageAlt}
      width={props.width ?? image?.width ?? 800}
      height={props.height ?? image?.height ?? 600}
      className={cn("object-cover w-full h-full", props.className)}
    />
  );
}

function NextStrategy({ image, maxWidth, ...props }: BackstageImageProps) {
  return null;
}

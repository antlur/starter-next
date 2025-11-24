"use client";
import imgproxyLoader from "@antlur/backstage/util/imgproxy-loader";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BackstageImageProps {
  image: any;
  strategy?: "imgix" | "next";
  maxWidth?: number;
  src?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
  className?: string;
}

export default function BackstageImage(props: BackstageImageProps) {
  const strategies = {
    imgproxy: ImgproxyStrategy,
    next: NextStrategy,
  };

  const Strategy = strategies[props?.strategy] ?? ImgproxyStrategy;

  return <Strategy {...props} />;
}

function ImgproxyStrategy({ image, src, maxWidth = 1000, loading = "lazy", alt = "", ...props }) {
  return (
    <Image
      loader={imgproxyLoader}
      src={(src || image?.url) ?? ""}
      alt={(alt || image?.alt) ?? ""}
      width={props.width ?? image?.width}
      height={props.height ?? image?.height}
      className={cn("object-cover w-full h-full", props.className)}
    />
  );
}

function NextStrategy({ image, maxWidth, ...props }) {
  return null;
}

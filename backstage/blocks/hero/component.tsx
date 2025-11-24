import type { BlockComponentProps } from "@antlur/backstage/studio";
import schema from "./schema";
import { cn } from "@/lib/utils";

export default function Hero({ block }: BlockComponentProps<typeof schema>) {
  const { title, subtitle, backgroundImage, ctaText, ctaLink } = block.fields;
  const full_width = false;

  return (
    <div
      className={cn("relative z-0 w-full h-[40vh]", {
        "container-breakout md:h-[80vh]": full_width,
        "md:h-[60vh]": !full_width,
      })}
    >
      <img src={backgroundImage.url} className="absolute object-cover w-full h-full pointer-events-none" alt="" />
      {/* <div className="absolute top-0 left-0 z-0 bg-header h-1/2 container-breakout" /> */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative px-6 py-3 text-xl font-bold tracking-widest uppercase bg-opacity-75 text-primary-foreground md:text-3xl lg:text-5xl">
          <div className="absolute inset-0 opacity-75 bg-primary" />
          <div className="relative">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg">{subtitle}</p>
            <a href={ctaLink} className="text-lg underline">
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

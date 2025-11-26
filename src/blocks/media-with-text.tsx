import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MediaItem } from "@antlur/backstage";

interface MediaWithTextProps {
  media?: MediaItem[] | null;
  title?: string | null;
  subtitle?: string | null;
  content?: string | null;
  cta_label?: string | null;
  cta_url?: string | null;
  full_width?: boolean | null;
  media_on_right?: boolean | null;
}

export default function MediaWithText({
  media,
  title,
  subtitle,
  content,
  cta_label,
  cta_url,
  full_width,
  media_on_right,
}: MediaWithTextProps) {
  return (
    <div
      className={cn({
        "container-breakout": full_width,
      })}
    >
      <div className="grid items-center grid-cols-1 gap-8 py-6 mx-auto md:grid-cols-2">
        <div
          className={cn("w-full", {
            "md:order-first": !media_on_right,
            "md:order-last": media_on_right,
          })}
        >
          {media && media.length > 0 && (
            <img alt="Feature Image" className="object-cover w-full overflow-hidden" src={media[0].url} />
          )}
        </div>
        <div
          className={cn("w-full flex h-full md:items-center md:justify-center", {
            "md:order-first": media_on_right,
            "md:order-last": !media_on_right,
          })}
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold md:text-4xl text-balance">{title}</h2>
            {subtitle && <h3 className="text-lg text-gray-600 md:text-xl">{subtitle}</h3>}
            {content && (
              <div
                className="text-lg text-gray-500 md:text-xl text-pretty"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
            {cta_url && cta_label && (
              <Button asChild>
                <a href={cta_url}>{cta_label}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Calendar } from "lucide-react";
import type { Event } from "@/types/backstage";

interface PlaceholderImageProps {
  event?: Event;
}

export function PlaceholderImage({ event }: PlaceholderImageProps) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-100">
      <Calendar size={24} />
    </div>
  );
}

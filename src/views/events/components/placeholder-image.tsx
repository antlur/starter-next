import { Calendar } from "lucide-react";
export function PlaceholderImage({ event }) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-100">
      <Calendar size={24} />
    </div>
  );
}

"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { dateString, timeString } from "@antlur/backstage/util/event";
import BackstageImage from "@/components/backstage-image";
import { PlaceholderImage } from "./placeholder-image";
import { Prose } from "@/components/prose";
import type { Event } from "@/types/backstage";

interface SingleEventProps {
  event: Event;
}

export function SingleEvent({ event }: SingleEventProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[1920/1005]  w-full">
        {event.cover_media ? <BackstageImage image={event.cover_media} /> : <PlaceholderImage event={event} />}
      </div>
      <CardHeader className="border-b">
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>
          <p className="text-sm text-muted-foreground">{dateString(event)}</p>
          <p>{timeString(event)}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Prose html={event.description ?? ""} />
      </CardContent>
    </Card>
  );
}

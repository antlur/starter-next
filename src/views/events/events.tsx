"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import BackstageImage from "@/components/backstage-image";
import { Button } from "@/components/ui/button";
import { dateString } from "@antlur/backstage/util/event";
import { PlaceholderImage } from "./components/placeholder-image";
import Link from "next/link";
import type { Event } from "@/types/backstage";

interface EventProps {
  events: Event[];
}

export default function Events({ events }: EventProps) {
  const hasEvents = events !== null && events.length > 0;

  events = events
    // sort events by start time
    .sort((a, b) => {
      const aTime = new Date(a.start_time);
      const bTime = new Date(b.start_time);

      return aTime.getTime() - bTime.getTime();
    })
    // filter out events that have already ended
    .filter((event) => {
      const endTime = new Date(event.end_time);
      const now = new Date();

      return endTime.getTime() > now.getTime();
    });

  return (
    <div className={cn("relative  px-6 mx-auto lg:px-0 max-w-3xl", {})}>
      <div className="pt-12 pb-24">
        <div className="space-y-20">
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl font-bold underline decoration-tertiary underline-offset-4">Events / News</h1>

            {/* if no events */}
            {!hasEvents && (
              <div className="flex flex-col items-center justify-center p-12 space-y-4 bg-gray-100 border border-gray-200 rounded-md">
                <Calendar size={24} />
                <p className="text-lg font-medium text-center text-gray-500">No upcoming events</p>
              </div>
            )}

            {hasEvents && (
              <div className="grid w-full gap-6 pt-8">
                {events.map((event, index) => {
                  return (
                    <div key={event.id + index}>
                      <div className="hidden md:block">
                        <ListItem event={event} />
                      </div>
                      <div className="md:hidden">
                        <GridItem event={event} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface EventItemProps {
  event: Event;
}

function GridItem({ event }: EventItemProps) {
  const startTime = new Date(event.start_time);
  const endTime = new Date(event.end_time);

  const startDateFormatted = startTime.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const startTimeFormatted = startTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  const endTimeFormatted = endTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <Card className="overflow-hidden">
      <div className="aspect-[1920/1005]">
        {event.cover_media ? <BackstageImage image={event.cover_media} /> : <PlaceholderImage event={event} />}
      </div>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.short_description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div>
            <p>{dateString(event)}</p>
            <p>
              {startTimeFormatted} - {endTimeFormatted}
            </p>
          </div>
          <div>
            <Button variant="outline">
              <Link href={`/events/${event.slug}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ListItem({ event }: EventItemProps) {
  const startTime = new Date(event.start_time);
  const endTime = new Date(event.end_time);

  const startDateFormatted = startTime.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const startTimeFormatted = startTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  const endTimeFormatted = endTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-shrink-0">
        <div className="aspect-[1920/1005] w-[250px] flex-shrink-0">
          {event.cover_media ? <BackstageImage image={event.cover_media} /> : <PlaceholderImage event={event} />}
        </div>
        <div className="flex flex-grow gap-6 p-4">
          <div className="flex flex-col flex-grow">
            <CardTitle>{event.title}</CardTitle>
            <CardDescription className="pt-3">{event.short_description}</CardDescription>
          </div>
          <div className="flex flex-col text-sm text-right text-muted-foreground min-w-fit">
            <p className="text-sm text-muted-foreground">{dateString(event)}</p>
            <p>
              {startTimeFormatted} - {endTimeFormatted}
            </p>
            <div className="flex items-end justify-end flex-grow">
              <Button variant="outline">
                <Link href={`/events/${event.slug}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

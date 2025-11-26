"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Grid, List } from "lucide-react";
import { useState } from "react";
import BackstageImage from "@/components/backstage-image";
import type { Event } from "@/types/backstage";

interface EventsProps {
  events: Event[];
}

export default function Events({ events }: EventsProps) {
  const [tabView, setTabView] = useState("grid");
  return (
    <div
      className={cn("relative  px-6 mx-auto lg:px-0", {
        "max-w-3xl": tabView === "list",
        "max-w-5xl": tabView === "grid",
      })}
    >
      <div className="pt-12 pb-24">
        <div className="space-y-20">
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl font-bold underline decoration-tertiary underline-offset-4">Upcoming Events</h1>

            <Tabs defaultValue={tabView} onValueChange={setTabView}>
              <TabsList className="w-full grid-cols-2 max-w-[250px] hidden md:grid">
                <TabsTrigger value="grid">
                  <Grid className="w-4 mr-1" /> Grid
                </TabsTrigger>
                <TabsTrigger value="list">
                  <List className="w-4 mr-1" />
                  List
                </TabsTrigger>
              </TabsList>
              <TabsContent value="grid">
                <div className="grid gap-6 pt-12 md:grid-cols-3">
                  {events.map((event) => {
                    return <GridItem event={event} key={event.id} />;
                  })}
                </div>
              </TabsContent>
              <TabsContent value="list">
                <div className="max-w-5xl mx-auto">
                  <div className="grid w-full gap-6 pt-12">
                    {events.map((event) => {
                      return <ListItem event={event} key={event.id} />;
                    })}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

interface GridItemProps {
  event: Event;
}

function GridItem({ event }: GridItemProps) {
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
    <Card>
      <div className="aspect-[1920/1005]">
        <BackstageImage image={event.cover_media} />
      </div>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription dangerouslySetInnerHTML={{ __html: event.description }}></CardDescription>
      </CardHeader>
      <CardContent>
        <p>{startDateFormatted}</p>
        <p>
          {startTimeFormatted} - {endTimeFormatted}
        </p>
      </CardContent>
    </Card>
  );
}

interface ListItemProps {
  event: Event;
}

function ListItem({ event }: ListItemProps) {
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

  // Show the image on the left side of the card
  return (
    <Card>
      <div className="flex flex-shrink-0">
        <div className="aspect-[1920/1005] w-[250px] ">
          <BackstageImage image={event.cover_media} />
        </div>
        <div className="flex flex-grow p-4">
          <div className="flex-grow">
            <p className="text-sm text-muted-foreground">{startDateFormatted}</p>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription className="pt-3" dangerouslySetInnerHTML={{ __html: event.description }}></CardDescription>
          </div>
          <div className="text-sm text-right text-muted-foreground">
            <p>
              {startTimeFormatted} - {endTimeFormatted}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

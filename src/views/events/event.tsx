import { notFound } from "next/navigation";
import { JsonLd } from "@antlur/backstage/components/json-ld";
import { Metadata } from "next";
import LayoutFactory from "@/views/layout-factory";
import { SingleEvent } from "./components/single-event";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { makeEventSchema } from "@antlur/backstage/util/event";
import { client } from "@backstage/client";

type MetadataProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: MetadataProps): Promise<Metadata> {
  const params = await props.params;
  const slug = params?.slug;

  if (!slug || slug === "no-events") {
    return {
      title: "No events found",
      description: "No events found",
    };
  }

  const event = await client.events.getEventBySlug(slug);
  if (!event) {
    return {};
  }

  return {
    title: event.title,
    openGraph: {
      title: event.title,
      description: event.short_description,

      images: [
        {
          url: event.cover_media?.transform_url,
          width: "1920",
          height: "1005",
        },
      ],
    },
  };
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function EventSingle({ event }) {
  const website = await client.website.getWebsite();
  const locations = await client.locations.getLocations();

  if (!event) {
    return notFound();
  }

  const schema = makeEventSchema(website, event, locations);

  return (
    <LayoutFactory>
      <JsonLd id="event-schema" schema={schema} />
      <div className="max-w-3xl px-6 py-6 mx-auto md:py-12">
        <div className="mb-2">
          <Button variant="link" className="-ml-4" asChild>
            <Link href="/events">
              <ChevronLeft className="mr-2" size={16} />
              Back to all events
            </Link>
          </Button>
        </div>
        <SingleEvent event={event} />
      </div>
    </LayoutFactory>
  );
}

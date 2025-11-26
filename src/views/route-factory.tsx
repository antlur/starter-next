import { Page } from "@antlur/backstage";
import { client } from "@backstage/client";
import PageFactory from "./page-factory";
import LayoutFactory from "./layout-factory";
import Container from "../components/container";
import EventsView from "./events/events";
import EventView from "./events/event";
import PressesView from "./presses";
import { RouteSeo } from "./components/route-seo";
import type { RouteType, RouteMeta, Event } from "@/types/backstage";
import type { Press } from "@antlur/backstage";

export interface Route<T = unknown> {
  type: RouteType | string;
  data: T;
  meta: RouteMeta;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RouteHandler = React.FC<{ route: Route<any> }>;

interface RouteHandlers {
  [key: string]: RouteHandler;
}

export async function RouteFactory({ route }: { route: Route }) {
  const RouteHandlers: RouteHandlers = {
    page: PageRoute,
    events: EventsRoute,
    event: EventRoute,
    presses: PressesRoute,
  };

  const RouteHandler = RouteHandlers[route.type];

  if (!RouteHandler) {
    if (process.env.NODE_ENV === "development") {
      return (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-yellow-800 font-medium">Unknown route type: {route.type}</p>
          <pre className="mt-2 text-xs overflow-auto">{JSON.stringify(route, null, 2)}</pre>
        </div>
      );
    }
    return null;
  }

  return (
    <>
      <RouteSeo route={route} />
      <RouteHandler route={route} />
    </>
  );
}

function PageRoute({ route }: { route: Route<Page> }) {
  return <PageFactory page={route.data} />;
}

async function EventsRoute({ route }: { route: Route }) {
  const events = await client.events.getEvents();
  return (
    <LayoutFactory>
      <Container>
        <EventsView events={events as Event[]} />
      </Container>
    </LayoutFactory>
  );
}

async function EventRoute({ route }: { route: Route<Event> }) {
  return <EventView event={route.data} />;
}

async function PressesRoute({ route }: { route: Route<Press[]> }) {
  return <PressesView articles={route.data} />;
}

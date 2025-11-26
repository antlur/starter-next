import { Page } from "@antlur/backstage";
import { client } from "@backstage/client";
import PageFactory from "./page-factory";
import LayoutFactory from "./layout-factory";
import Container from "../components/container";
import EventsView from "./events/events";
import EventView from "./events/event";
import PressesView from "./presses";
import { RouteSeo } from "./components/route-seo";

export interface Route {
  type: string;
  data: any;
  meta: any;
}

interface RouteHandlers {
  [key: string]: React.FC<{ route: Route }>;
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
    return <div>{JSON.stringify(route, null, 2)}</div>;
  }

  return (
    <>
      <RouteSeo route={route} />
      <RouteHandler route={route} />
    </>
  );
}

function PageRoute({ route }: { route: Route }) {
  return <PageFactory page={route.data as Page} />;
}

async function EventsRoute({ route }: { route: Route }) {
  const events = await client.events.getEvents();
  return (
    <LayoutFactory>
      <Container>
        <EventsView events={events} />
      </Container>
    </LayoutFactory>
  );
}

async function EventRoute({ route }: { route: Route }) {
  return <EventView event={route.data} />;
}

async function PressesRoute({ route }: { route: Route }) {
  return <PressesView articles={route.data} />;
}

import { defineLayout } from "@antlur/backstage/studio";
import schema from "./schema";
import component from "./component";

export default defineLayout({
  name: "Default",
  slug: "default",
  schema,
  component,
});

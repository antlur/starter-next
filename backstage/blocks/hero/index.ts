"use client";
import { defineBlock } from "@antlur/backstage/studio";
import schema from "./schema";
import component from "./component";

const block = defineBlock({
  name: "Hero",
  slug: "hero",
  schema,
  component,
});

export default block;

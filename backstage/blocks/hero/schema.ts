import { defineBlockSchema as defineSchema } from "@antlur/backstage/studio";

export default defineSchema({
  fields: {
    title: {
      name: "Title",
      slug: "title",
      type: "text",
    },
    subtitle: {
      name: "Subtitle",
      slug: "subtitle",
      type: "text",
    },
    backgroundImage: {
      name: "Background Image",
      slug: "backgroundImage",
      type: "image",
    },
    ctaText: {
      name: "CTA Text",
      slug: "ctaText",
      type: "text",
    },
    ctaLink: {
      name: "CTA Link",
      slug: "ctaLink",
      type: "text",
    },
  },
});

import { defineLayoutSchema } from "@antlur/backstage/studio";

export default defineLayoutSchema({
  fields: {
    headerNavigation: {
      name: "Header Navigation",
      slug: "headerNavigation",
      type: "navigation_select",
    },
    featuredImage: {
      name: "Featured Image",
      slug: "featuredImage",
      type: "media",
    },
  },
});

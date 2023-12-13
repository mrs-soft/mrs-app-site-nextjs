import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { Widget } from "./src/components/widget/widget";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID
        ? process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID
        : "", // ID of a project you are using
      token: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN
        ? process.env.NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN
        : "", // API token for that project
      version: "production",
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: false,
});

PLASMIC.registerComponent(Widget, {
  name: "Widget",
  props: {
    productId: "string",
  },
});

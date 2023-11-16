import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { Widget } from "./src/components/widget/widget";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.plasmicProjectId ? process.env.plasmicProjectId : "",  // ID of a project you are using
      token: process.env.plasmicProjectToken ? process.env.plasmicProjectToken : "" // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: false,
})

PLASMIC.registerComponent(Widget, {
  name: 'Widget',
  props: {
    productId: 'string'
  }
});
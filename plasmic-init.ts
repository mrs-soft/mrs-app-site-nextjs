import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { Widget } from "./src/components/widget/widget";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID ? process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID : "8zAkqF4tottYbZEM716Xj6",  // ID of a project you are using
      token: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN ?process.env.NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN : "Mkv2zzbvOWw5xuEggmLyf5vDQK3jBy9XmNX2QUxf6gnHdlG0fRlPmsgz9s8lmYDAZIL4wskGoSTBTqorSIxQ" // API token for that project
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
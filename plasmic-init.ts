import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "8zAkqF4tottYbZEM716Xj6",  // ID of a project you are using
      token: "Mkv2zzbvOWw5xuEggmLyf5vDQK3jBy9XmNX2QUxf6gnHdlG0fRlPmsgz9s8lmYDAZIL4wskGoSTBTqorSIxQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: false,
})
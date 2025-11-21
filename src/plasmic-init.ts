import { initPlasmicLoader } from "@plasmicapp/loader-react";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "ddT7wfnzx79n44ty2Sa9LN", // Profound
      token: "your-public-token-1",
    },
    // ...add other project IDs/tokens here
  ],
  preview: process.env.NODE_ENV === "development",
});

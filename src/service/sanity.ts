import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2023-10-11",
  useCdn: false,
  token: process.env.SANITY_SECRET_TOKEN,
});

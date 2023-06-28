import { schemaTypes } from "@sanity/schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  name: "default",
  title: "luminosa_backend",

  projectId: "jh3jibfq",
  dataset: "production",
  basePath: "/admin",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});

export default config;

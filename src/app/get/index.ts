import { Client } from "@notionhq/client";

import { getAwards } from "./getAwards";
import { getOgImage } from "./getOgImage";
import { getProfile } from "./getProfile";
import { getProjects } from "./getProjects";
import { getTeams } from "./getTeams";

export const notion = {
  client: new Client({ auth: process.env.NOTION_API_KEY }),
  database: {
    awards: "65d09de8cdfc4ab7895f7e214bbece88",
    projects: "c33fcbd0f9a74b6e8a460913ecc241ca",
    teams: "123fe0e695964564a08a66f429259bc1",
  },
  page: {
    profile: "18784b75d64b4595a4a301c2100cc11b",
    ogImage: "17c2b50be5f243e4a1a245a07b8b8505",
  }
};

export {
  getAwards,
  getProfile,
  getProjects,
  getTeams,
  getOgImage,
};
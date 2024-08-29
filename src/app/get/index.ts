import { Client } from "@notionhq/client";

import { getAwards } from "./getAwards";
import { getOgImage } from "./getOgImage";
import { getProfile } from "./getProfile";
import { getProjects } from "./getProjects";
import { getTeams } from "./getTeams";

export const notion = new Client({ auth: process.env.NOTION_API_KEY });

export {
  getAwards,
  getProfile,
  getProjects,
  getTeams,
  getOgImage,
};
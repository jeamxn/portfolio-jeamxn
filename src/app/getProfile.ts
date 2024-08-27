import { Client } from "@notionhq/client";

export const getProfile = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.pages.retrieve({
    page_id: process.env.NOTION_MAIN!,
  });
  const teams = (response as any)?.cover?.file.url;
  return teams;
};
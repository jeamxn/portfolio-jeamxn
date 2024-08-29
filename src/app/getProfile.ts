import { Client } from "@notionhq/client";

export const getProfile = async () => {
  try{
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.pages.retrieve({
      page_id: process.env.NOTION_MAIN!,
    });
    const teams: string = (response as any)?.cover?.file.url;
    return teams;
  }
  catch{
    return "";
  }
};
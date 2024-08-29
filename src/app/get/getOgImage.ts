import { Client } from "@notionhq/client";

export const getOgImage = async () => {
  try{
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.pages.retrieve({
      page_id: "17c2b50be5f243e4a1a245a07b8b8505",
    });
    const teams: string = (response as any)?.cover?.file.url;
    return teams;
  }
  catch{
    return "";
  }
};
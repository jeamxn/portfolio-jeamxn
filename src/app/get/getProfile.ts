import { Client } from "@notionhq/client";

export const getProfile = async () => {
  try{
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.pages.retrieve({
      page_id: "18784b75d64b4595a4a301c2100cc11b",
    });
    const teams: string = (response as any)?.cover?.file.url;
    return teams;
  }
  catch{
    return "";
  }
};
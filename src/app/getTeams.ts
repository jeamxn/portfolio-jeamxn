import { Client } from "@notionhq/client";

export const getTeams = async () => {
  try{
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_TEAMS!,
    });
    const teams = response.results.map((page) => {
      return {
        priority: (page as any).properties.priority.number,
        url: (page as any).public_url,
        icon: (page as any).icon?.file.url,
        name: (page as any).properties.name.title[0].plain_text,
      };
    });
    return teams.sort((a, b) => b.priority - a.priority);
  }
  catch{
    return [];
  }
};
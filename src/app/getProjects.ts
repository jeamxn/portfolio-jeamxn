import { Client } from "@notionhq/client";

export const getProjects = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_PROJECTS!,
  });
  const projects = response.results.map((page) => {
    return {
      icon: (page as any).icon?.file.url,
      cover: (page as any).cover?.file.url,
      priority: (page as any).properties.priority.number,
      url: (page as any).public_url,
      data: {
        title: (page as any).properties.name.title[0].plain_text,
        description: (page as any).properties.description.rich_text[0].plain_text,
        startDate: (page as any).properties.start.date?.start || "",
        endDate: (page as any).properties.end.date?.start || "",
      }
    };
  });
  return projects.sort((a, b) => b.priority - a.priority);
};
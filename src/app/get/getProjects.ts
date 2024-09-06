import { notion, Unpromise } from ".";

export const getProjects = async () => {
  try{
    const response = await notion.client.databases.query({
      database_id: notion.database.projects,
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
  }
  catch {
    return [];
  }
};

export type Projects = Unpromise<ReturnType<typeof getProjects>>;

import { notion } from ".";

export const getTeams = async () => {
  try{
    const response = await notion.client.databases.query({
      database_id: notion.database.teams,
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
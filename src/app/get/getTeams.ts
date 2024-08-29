import { notion } from ".";

export const getTeams = async () => {
  try{
    const response = await notion.databases.query({
      database_id: "123fe0e695964564a08a66f429259bc1",
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
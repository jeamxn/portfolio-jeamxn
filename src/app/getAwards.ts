import { Client } from "@notionhq/client";

export const getAwards = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_AWARDS!,
  });
  const awards = response.results.map((page) => {
    return {
      icon: (page as any).icon?.file.url,
      url: (page as any).public_url,
      name: (page as any).properties.name.title[0].plain_text,
      host: (page as any).properties.host.multi_select.map((host: any) => host.name).join(", "),
      organizer: (page as any).properties.organizer.multi_select.map((host: any) => host.name).join(", "),
      by: (page as any).properties.by.rich_text[0].plain_text,
      period: (page as any).properties.period.rich_text[0].plain_text,
      when: (page as any).properties.when.date?.start || "",
    };
  });
  return awards.sort((a, b) => b.when > a.when ? 1 : -1);
};
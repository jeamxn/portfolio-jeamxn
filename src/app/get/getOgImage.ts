import { notion } from ".";

export const getOgImage = async () => {
  try{
    const response = await notion.client.pages.retrieve({
      page_id: notion.page.ogImage,
    });
    const teams: string = (response as any)?.cover?.file.url;
    return teams;
  }
  catch{
    return "";
  }
};
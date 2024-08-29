import { notion } from ".";

export const getProfile = async () => {
  try{
    const response = await notion.client.pages.retrieve({
      page_id: notion.page.profile,
    });
    const teams: string = (response as any)?.cover?.file.url;
    return teams;
  }
  catch{
    return "";
  }
};
import { notion } from ".";

export const getProfile = async () => {
  try{
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
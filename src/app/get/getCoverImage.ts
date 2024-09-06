import { notion, Unpromise } from ".";

export const getCoverImage = async (page_id: string) => {
  try{
    const response = await notion.client.pages.retrieve({
      page_id: page_id,
    });
    const cover: string = (response as any)?.cover?.file.url;
    return cover;
  }
  catch{
    return "";
  }
};

export type CoverImage = Unpromise<ReturnType<typeof getCoverImage>>
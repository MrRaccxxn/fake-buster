export type INews = {
  customId: string;
  title: string;
  image: string;
  relatedUrl: string;
  date: string;
  description: string;
  publisherAddress?: string;
};

export type INewsForm = Omit<INews, "publisherAddress" | "date">;

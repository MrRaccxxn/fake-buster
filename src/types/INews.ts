export type INews = {
    id: string;
    title: string;
    image: string;
    relatedUrl: string;
    date: string;
    description: string;
    publisherAddress?: string;
}

export type INewsForm = Omit<INews, "id" | "publisherAddress" | "date">;
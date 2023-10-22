import { connectToDataBase } from "@/db";
import News from "@/db/models/News";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = await connectToDataBase();

    const news = await News.create({
      title: "title",
      relatedUrl: "relatedUrl",
      date: "12-12-2008",
      description: "description",
      publisherAddress: "0x"
    });
    console.log("CREATED NEWS");

    res.json({ news });
  } catch (error) {
    console.error(error);
  }
}

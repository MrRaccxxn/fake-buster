import { connectToDataBase } from "@/db";
import News from "@/db/models/News";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("l;legando", req.body);
    await connectToDataBase();

    const news = await News.create(req.body);

    console.log("newwws", news);
    res.json({ news });
  } catch (error) {
    console.error(error);
  }
}

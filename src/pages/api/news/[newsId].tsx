import { connectToDataBase } from "@/db";
import News from "@/db/models/News";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = await connectToDataBase();

    const news = await News.create(req.body);
    res.json({ news });
  } catch (error) {
    console.error(error);
  }
}

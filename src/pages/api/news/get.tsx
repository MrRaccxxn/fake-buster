import { connectToDataBase } from "@/db";
import News from "@/db/models/News";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = await connectToDataBase();
    const { customId } = JSON.parse(req.body);

    const news = await News.findOne({
      customId: customId as string,
    });

    res.send({ news });
  } catch (error) {
    console.error(error);
  }
}

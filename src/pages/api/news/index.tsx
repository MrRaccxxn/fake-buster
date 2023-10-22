import News from "@/db/models/News";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const news = await News.find({});

    res.send({ news });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDataBase } from "@/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDataBase();
  res.status(200).json({ name: "John Doe" });
}

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function ChartHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("yup");

  res.status(200).json({ name: "Workout" });
}

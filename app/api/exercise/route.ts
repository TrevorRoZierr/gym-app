import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const muscles = "biceps";
  const apiKey = "Qpdh/BQ8Lb9xp1t65JH+6g==T4HR2mTvf78hbGD6";

  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=${muscles}`,
      {
        headers: {
          "X-Api-Key": apiKey,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error: ", error);
  }
}

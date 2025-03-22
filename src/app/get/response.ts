import { NextRequest, NextResponse } from "next/server";

import { connectToDatabase } from "./db";
import { getProjects } from "./getProjects";

import { getAwards, getProfile, getTeams } from ".";

const response = async (req: NextRequest) => {
  const db = await connectToDatabase();
  const collection = db.collection("views");
  const views = await collection.findOne({ 
    date: {
      $gte: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7),
    },
  });

  if (!views)  {
    const [projects, awards, teams, profile] = await Promise.all([
      getProjects(), 
      getAwards(),
      getTeams(),
      getProfile(),
    ]);
    await collection.insertOne({ 
      date: new Date(),
      projects, awards, teams, profile
    });
    const res = NextResponse.json({ projects, awards, teams, profile });
    return res;
  }

  const { projects, awards, teams, profile } = views;
  const res = NextResponse.json({ projects, awards, teams, profile });
  return res;
};

export default response;
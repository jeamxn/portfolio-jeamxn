import { NextRequest, NextResponse } from "next/server";

import { connectToDatabase } from "./db";
import { getProjects } from "./getProjects";

import { getAwards, getProfile, getTeams } from ".";

const response = async (req: NextRequest) => {
  const t = [];
  try{
    t.push("response");
    const db = await connectToDatabase();
    t.push("db");
    const collection = db.collection("views");
    const views = await collection.findOne({ 
      date: {
        $gte: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7),
      },
    });
    t.push("views");
  
    if (!views)  {
      const [projects, awards, teams, profile] = await Promise.all([
        getProjects(), 
        getAwards(),
        getTeams(),
        getProfile(),
      ]);
      t.push("getProjects");
      await collection.insertOne({ 
        date: new Date(),
        projects, awards, teams, profile
      });
      t.push("insertOne");
      const res = NextResponse.json({ projects, awards, teams, profile });
      return res;
    }
  
    const { projects, awards, teams, profile } = views;
    const res = NextResponse.json({ projects, awards, teams, profile });
    return res;
  }
  catch(e: any){
    return NextResponse.json([e.message, t], {
      status: 500,
    });
  }
};

export default response;
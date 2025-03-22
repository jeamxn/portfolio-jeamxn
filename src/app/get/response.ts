import { NextRequest, NextResponse } from "next/server";

import { getProjects } from "./getProjects";

import { getAwards, getProfile, getTeams } from ".";

const response = async (req: NextRequest) => {
  try{
    const [projects, awards, teams, profile] = await Promise.all([
      getProjects(), 
      getAwards(),
      getTeams(),
      getProfile(),
    ]);
    const res = NextResponse.json({ projects, awards, teams, profile });
    return res;
  }
  catch(e: any){
    return NextResponse.json([e.message], {
      status: 500,
    });
  }
};

export default response;
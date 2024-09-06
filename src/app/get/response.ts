import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { getProjects } from "./getProjects";

import { getAwards, getProfile, getTeams } from ".";

const response = async (req: NextRequest) => {
  const [projects, awards, teams, profile] = await Promise.all([
    getProjects(), 
    getAwards(),
    getTeams(),
    getProfile(),
  ]);
  const res = NextResponse.json({ projects, awards, teams, profile });
  return res;
};

export default response;
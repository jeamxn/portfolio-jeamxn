"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React from "react";

import { getAwards, getProfile, getProjects, getTeams } from "./get";
import { Awards } from "./get/getAwards";
import { Projects } from "./get/getProjects";
import { Teams } from "./get/getTeams";
import Svg from "./svg";

const Home = () => {
  const { 
    isFetching,
    data: { projects, awards, teams, profile },
  } = useQuery<{
    projects: Projects,
    awards: Awards,
    teams: Teams,
    profile: string,
  }>({
    queryKey: ["get_data"],
    queryFn: async () => {
      const res = await axios.post("/get");
      return res.data || { projects: [], awards: [], teams: [], profile: "" };
    },
    initialData: { projects: [], awards: [], teams: [], profile: "" },
  });

  return (
    <main className="w-full h-full max-lg:block flex flex-row items-start justify-start gap-12 max-lg:p-10 max-lg:px-4">
      <div className="h-full flex flex-col max-lg:h-auto max-lg:p-0 items-start justify-between gap-12 py-10 pl-10">
        <Image src={profile} alt="me" className="w-60 h-80 object-cover rounded-full max-lg:w-36 max-lg:h-36 loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30" width={270} height={360} />
        <div className="flex flex-col gap-20 max-lg:gap-5">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex flex-row items-end justify-start gap-2">
              <p className="dark:text-white text-black text-4xl font-semibold">최재민</p>
              <p className="dark:text-white text-black text-2xl font-normal">Developer</p>
            </div>
            <p className="dark:text-white text-black text-2xl font-light">JEAMIN CHOI</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="dark:text-white text-black font-extralight">2006. 09. 27.</p>
            <a className="w-fit" href="tel:01095062709" target="_blank" rel="noreferrer">
              <p className="dark:text-white text-black font-extralight hover:underline">+82 10 9506 2709.</p>
            </a>
            <a className="w-fit" href="mailto:admin@chicken-moo.com" target="_blank" rel="noreferrer">
              <p className="dark:text-white text-black font-extralight hover:underline">admin@chicken-moo.com</p>
            </a>
            <a className="w-fit" href="https://www.instagram.com/jeamxn" target="_blank" rel="noreferrer">
              <p className="dark:text-white text-black font-extralight hover:underline">instagram @jeamxn</p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full overflow-y-auto max-lg:flex max-lg:h-auto max-lg:mt-10 max-lg:pb-10">
        <div className="flex flex-col gap-12 m-10 max-lg:m-0 max-lg:h-auto">
          <div className="flex flex-col gap-1">
            <p className="dark:text-white text-black font-extralight text-2xl">안녕하세요! <b className="font-bold">할 수 없는 것</b>을 <b className="font-bold">시도</b>하는 개발자, 최재민입니다!</p>
            <p className="dark:text-white text-black font-extralight text-2xl">모두가 할 수 없다고 말하는 것을 <b className="font-bold">시도할 때 즐거움</b>을 느낍니다.</p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="dark:text-white text-black font-medium text-2xl">Projects</p>
            <div className="flex flex-row gap-4 flex-wrap">
              {
                isFetching ? Array(6).fill(0).map((_, i) => (
                  <div key={i} className="w-[calc(33.33%-2rem)] group max-2xl:w-[calc(50%-1rem)] max-lg:w-[calc(33.33%-2rem)] max-md:w-[calc(50%-1rem)] max-sm:w-full rounded-xl overflow-hidden shadow dark:shadow-white/35 flex flex-col">
                    <div className="object-cover aspect-video loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30 w-full" />
                    <div className="flex flex-row items-center justify-start p-4 gap-3">
                      <div className="object-cover w-12 h-12 rounded-xl loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30 shadow dark:shadow-white/35" />
                      <div className="flex flex-col gap-1">
                        <div className="w-44 h-7 loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30 rounded-lg" />
                        <div className="h-5 w-36 rounded-lg loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30" />
                      </div>
                    </div>
                  </div>
                )) : projects.map((project, i) => (
                  <div key={i} className="w-[calc(33.33%-2rem)] group max-2xl:w-[calc(50%-1rem)] max-lg:w-[calc(33.33%-2rem)] max-md:w-[calc(50%-1rem)] max-sm:w-full rounded-xl overflow-hidden shadow dark:shadow-white/35 flex flex-col">
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <Image src={project.cover} alt={project.data.title} className="object-cover aspect-video loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30" width={160 * 5} height={90 * 5} />
                      <div className="flex flex-row items-center justify-start p-4 gap-3">
                        <Image src={project.icon} alt={project.data.title} className="object-cover w-12 h-12 rounded-xl loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30 shadow dark:shadow-white/35" width={200} height={200} />
                        <div className="flex flex-col gap-0">
                          <p className="dark:text-white text-black font-medium text-xl group-hover:underline">{project.data.title}</p>
                          <div className="">
                            <p className="group-hover:hidden block dark:text-white/70 text-black/70 font-light">{project.data.description}</p>
                            <p className="hidden group-hover:block dark:text-white/70 text-black/70 font-light">{project.data.startDate.replaceAll("-", ".")} ~ {project.data.endDate.replaceAll("-", ".")}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="flex flex-row gap-20 max-xl:flex-col max-xl:gap-12">
            <div className="flex flex-col gap-6 w-3/5 max-xl:w-full">
              <p className="dark:text-white text-black font-medium text-2xl">Awards</p>
              {
                isFetching ? Array(4).fill(0).map((_, i) => (
                  <div key={i} className="flex flex-row gap-8 max-md:flex-col max-md:gap-4">
                    <div className="w-12">
                      <div className="h-6 w-14 loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30 rounded-lg" />             
                    </div>
                    <div className="flex flex-row gap-4 w-full">
                      <div className="object-cover w-12 h-12 rounded-xl loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30 shadow dark:shadow-white/35" />
                      <div className="flex flex-col gap-1 max-md:gap-1">
                        <div className="flex flex-row gap-1 w-full">
                          <p className="h-7 w-full loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30 rounded-lg" />
                        </div>
                        <div className="flex flex-row max-md:flex-col max-md:gap-0 gap-1 opacity-70">
                          <div className="flex flex-row gap-1">
                            <p className="dark:text-white text-black font-thin">주최</p>
                            <div className="h-5 max-md:h-6 w-36 loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30 rounded-lg" />
                          </div>
                          <p className="dark:text-white text-black max-md:hidden">·</p>
                          <div className="flex flex-row gap-1">
                            <p className="dark:text-white text-black font-thin">주관</p>
                            <div className="h-5 max-md:h-6 w-36 loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30 rounded-lg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )) : awards.map((award, i) => (
                  <div key={i} className="flex flex-row gap-8 max-md:flex-col max-md:gap-4">
                    <div className="w-12">
                      <p className="dark:text-white text-black font-thin">{award.when.split("-").slice(0, 2).join(".")}</p>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Image src={award.icon} alt={award.name} className="object-cover w-12 h-12 rounded-xl loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30 shadow dark:shadow-white/35" width={200} height={200} />
                      <div className="flex flex-col gap-0 max-md:gap-1">
                        <div className="flex flex-row gap-1">
                          <a href={award.url} target="_blank" rel="noreferrer">
                            <p className="dark:text-white text-black text-lg hover:underline">{award.name} {award.period}</p>
                          </a>
                        </div>
                        <div className="flex flex-row max-md:flex-col max-md:gap-0 gap-1 opacity-70">
                          <div className="flex flex-row gap-1">
                            <p className="dark:text-white text-black font-thin">주최</p>
                            <p className="dark:text-white text-black">{award.host}</p>
                          </div>
                          <p className="dark:text-white text-black max-md:hidden">·</p>
                          <div className="flex flex-row gap-1">
                            <p className="dark:text-white text-black font-thin">주관</p>
                            <p className="dark:text-white text-black">{award.organizer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="flex flex-col gap-6 w-2/5 max-xl:w-full">
              <p className="dark:text-white text-black font-medium text-2xl">Teams</p>
              <div className="flex flex-col gap-4 flex-warp">
                {
                  isFetching ? Array(3).fill(0).map((_, i) => (
                    <div className="flex flex-row gap-4 items-center" key={i}>
                      <div className="shadow dark:shadow-white/35 bg-white w-10 h-10 rounded-xl overflow-hidden">
                        <div className="object-cover w-10 h-10 loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30" />
                      </div>
                      <div className="w-32 h-7 loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30 rounded-lg" />
                    </div>
                  )) : teams.map((team, i) => (
                    <div className="flex flex-row gap-4 items-center" key={i}>
                      <div className="shadow dark:shadow-white/35 bg-white w-10 h-10 rounded-xl overflow-hidden">
                        <Image src={team.icon} alt={team.name} className="object-cover w-10 h-10 loader bg-gradient-to-br from-black/10 via-white to-black/10 dark:from-white/30 dark:via-black dark:to-white/30" width={200} height={200} />
                      </div>
                      <a href={team.url} target="_blank" rel="noreferrer">
                        <p className="dark:text-white text-black text-lg hover:underline">{team.name}</p>
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="dark:text-white text-black font-medium text-2xl">Skills</p>
            <div className="flex flex-col gap-4">
              <Svg type="ReactRN" />
              <div className="flex flex-row items-center justify-start gap-4">
                <Svg type="Fastify" />
                <div className="h-8 dark:border-white/30 border-black/15 border" />
                <Svg type="Express" />
              </div>
              <Svg type="NextJS" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
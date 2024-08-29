import React from "react";

import Express from "./express";
import Fastify from "./fastify";
import NextJS from "./nextjs";
import ReactRN from "./reactrn";

export type SvgProps = {
  width?: number;
  height?: number;
};

const Svgs = {
  Fastify,
  NextJS,
  Express,
  ReactRN,
};
type SvgType = keyof typeof Svgs;

const Svg = ({
  width,
  height,
  type,
}: SvgProps & {
  type: SvgType;
}) => {
  const Component = Svgs[type];
  return <Component width={width} height={height} />;
};

export default Svg;
import Layout from "@/pages/layout";
import { Menu } from "@/components/Menu/Menu";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const WorkoutMain = ({
  set,
  ...rest
}: {
  set: {
    ex: string;
    rep: number[];
  }[];
}) => {
  console.log("rrr", rest);

  return (
    <>
      <h1>Work</h1>
      {set?.map((item, i) => {
        return <div key={i}>{item?.ex}</div>;
      })}
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
};

export default WorkoutMain;

export async function getStaticProps() {
  const set = [{ ex: "pull ups", rep: [1, 4, 5] }];

  const res = await fetch("http://localhost:3000/api/workout/chart");
  const data = await res?.json();

  return {
    props: {
      set,
      data,
    },
  };
}

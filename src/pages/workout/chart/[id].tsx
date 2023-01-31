import Layout from "@/pages/layout";
import { Menu } from "@/components/Menu/Menu";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Today = ({ todo }: any) => {
  return (
    <>
      <h1>Todo chart</h1>
      <h2>{todo?.title}</h2>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
};

export default Today;

// export async function getServerSideProps({ params }: any) {
//   const todo: Array<any> = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${params?.id}`
//   ).then((response) => response.json());

//   console.log("params", params);
//   console.log("curr", todo);

//   return {
//     props: {
//       todo,
//     },
//   };
// }

export async function getStaticProps({ params }: any) {
  const todo: Array<any> = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params?.id}`
  ).then((response) => response.json());

  console.log("params", params);
  console.log("curr", todo);

  return {
    props: {
      todo,
    },
  };
}

export async function getStaticPaths() {
  const all: Array<any> = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  ).then((response) => response.json());

  const paths = all?.map((item: any) => ({ params: { id: String(item?.id) } }));

  console.log("paths", paths);
  // const paths = [
  //   {
  //     params: {
  //       id: "3",
  //     },
  //   },
  // ];
  return {
    paths,
    fallback: "blocking",
  };
}

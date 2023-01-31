import Link from "next/link";
import React, { useEffect } from "react";

const Chart = (props: any) => {
  console.log("props chart", props);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const res = await fetch("http://localhost:3000/api/workout/chart");
  //   const data = await res?.json();

  //   console.log("from eseEff", data);
  // };

  return (
    <div>
      <h1>Todos from chart</h1>

      <ul>
        {props?.data?.map((item: any) => {
          return (
            <li key={item?.id}>
              <Link href={`/workout/chart/${item?.id}`}>{item?.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Chart;

export async function getServerSideProps() {
  const set = [{ ex: "pull ups", rep: [1, 4, 5] }];

  // const res = await fetch("http://localhost:3000/api/workout/chart");
  // const data = await res?.json();

  const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json()
  );

  return {
    props: {
      set,
      data,
    },
  };
}

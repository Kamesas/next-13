import Link from "next/link";

const FourOFour = ({
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
      <h1>404</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
};

export default FourOFour;

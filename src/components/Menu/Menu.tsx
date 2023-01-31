import Link from "next/link";
import { FC } from "react";

type tMenuProps = {
  [key: string]: any;
};

export const Menu: FC<tMenuProps> = () => {
  return (
    <div className="Menu">
      <nav>
        <li>
          <Link href="/workout">Workout</Link>
        </li>
        <li>
          <Link href="/workout/chart">Workout chart</Link>
        </li>
      </nav>
    </div>
  );
};

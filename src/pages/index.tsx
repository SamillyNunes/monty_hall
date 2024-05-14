import { Inter } from "next/font/google";

import Door from "../components/Door";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Door />
    </div>
  );
}

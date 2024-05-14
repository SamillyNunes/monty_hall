import { Inter } from "next/font/google";

import Gift from "../components/Gift";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Gift />
    </div>
  );
}

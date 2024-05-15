import { Inter } from "next/font/google";

import Door from "../components/Door";
import DoorModel from "../../model/door_model";
import { useState } from "react";

export default function Home() {
  const [d1, setD1] = useState(new DoorModel(1, false, true));

  return (
    <div style={{display: "flex"}} >
      <Door value={d1} onChange={newDoor => setD1(newDoor)} />
    </div>
  );
}

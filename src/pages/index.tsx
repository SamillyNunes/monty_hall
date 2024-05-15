import { Inter } from "next/font/google";

import Door from "../components/Door";
import DoorModel from "../../model/door_model";
import { useEffect, useState } from "react";
import { createDoors, updateDoors } from "../../functions/doors";

export default function Home() {
  const [doors, setDoors] = useState(createDoors(4,1));

  function renderDoors(){
    return doors.map( door => (
      <Door key={door.number} value={door} onChange={newDoor => {
        const updatedDoorsArray = updateDoors(doors, newDoor);
        setDoors(updatedDoorsArray);
      }} />

    ) );
  }

  return (
    <div style={{display: "flex"}} >
      {renderDoors()}
    </div>
  );
}

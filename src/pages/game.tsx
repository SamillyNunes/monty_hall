import { useState } from "react";
import { createDoors, updateDoors } from "../../functions/doors";
import Door from "@/components/Door";

import styles from "../styles/Game.module.css";

export default function Game(){
    const [doors, setDoors] = useState(createDoors(10,1));

    function renderDoors(){
        return doors.map( door => (
        <Door key={door.number} value={door} onChange={newDoor => {
            const updatedDoorsArray = updateDoors(doors, newDoor);
            setDoors(updatedDoorsArray);
        }} />

        ) );
    }

    return (
        <div className={styles.game} >
            <div className={styles.doors} >
                {renderDoors()}
            </div>
            <div className={styles.buttons} >
                
            </div>
        </div>
    );
}
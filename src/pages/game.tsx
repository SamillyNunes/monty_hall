import { useState } from "react";
import { createDoors, updateDoors } from "../../functions/doors";
import Door from "@/components/Door";
import Link from "next/link";

import styles from "../styles/Game.module.css";

export default function Game(){
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
        <div className={styles.game} >
            <div className={styles.doors} >
                {renderDoors()}
            </div>
            <div className={styles.buttons} >
                <Link href={"/"} >
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    );
}
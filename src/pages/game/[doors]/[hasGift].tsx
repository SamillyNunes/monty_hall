import { useEffect, useState } from "react";
import { createDoors, updateDoors } from "../../../../functions/doors";
import Door from "@/components/Door";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../../styles/Game.module.css";
import DoorModel from "../../../../model/door_model";

export default function Game(){
    const router = useRouter();

    const [doors, setDoors] = useState(Array());

    useEffect(()=>{
        const doorsParam = +(router?.query.doors ?? 0);
        const hasGiftParam = +(router?.query.hasGift ?? 0);
        const d = createDoors(doorsParam, hasGiftParam);
        setDoors(d);
    }, [router?.query]);


    function renderDoors(){
        return doors.map( (door: DoorModel) => (
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
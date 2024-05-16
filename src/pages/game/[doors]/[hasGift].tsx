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
    const [isValid, setIsValid] = useState(false);

    useEffect(()=>{
        const doorsParam = +(router?.query.doors ?? 0);
        const hasGiftParam = +(router?.query.hasGift ?? 0);
        const d = createDoors(doorsParam, hasGiftParam);
        setDoors(d);
    }, [router?.query]);

    useEffect(()=>{
        const doorsParam = +(router?.query.doors ?? 0);
        const hasGiftParam = +(router?.query.hasGift ?? 0);

        const qtdDoorsIsValid = doorsParam >=3 && doorsParam<=20;
        const hasGiftIsValid = hasGiftParam >=1 && hasGiftParam <= doorsParam;

        setIsValid(qtdDoorsIsValid && hasGiftIsValid);
    }, [doors, router?.query.doors, router?.query.hasGift]);


    function renderDoors(){
        return isValid ? doors.map( (door: DoorModel) => (
        <Door key={door.number} value={door} onChange={newDoor => {
            const updatedDoorsArray = updateDoors(doors, newDoor);
            setDoors(updatedDoorsArray);
        }} />

        ) ) : <div>
            <h2>Valor é inválido!</h2>
        </div>;
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
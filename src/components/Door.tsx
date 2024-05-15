import DoorModel from "../../model/door_model";
import styles from "../styles/Door.module.css";

interface DoorProps{
    value: DoorModel,
    onChange: (newDoor: DoorModel) => void,
}

export default function Door(props: DoorProps){

    const door  = props.value;

    const selected = door.isSelected ? styles.selected : '';

    function changeSelection(){
        props.onChange(door.changeSelection());
    }

    return (
        <div className={styles.area} onClick={changeSelection} >
            <div className={`${styles.structure} ${selected}`} >
                <div className={styles.door} >
                    <div className={styles.number} > {door.number} </div>
                    <div className={styles.knob} ></div>
                </div>
            </div>
            <div className={styles.floor} ></div>
        </div>
    );
}
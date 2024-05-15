
import DoorModel from "../../model/door_model";
import Gift from "./Gift"
import styles from "../styles/Door.module.css";

interface DoorProps{
    value: DoorModel,
    onChange: (newDoor: DoorModel) => void,
}

export default function Door(props: DoorProps){

    const door  = props.value;

    const selected = (door.isSelected && !door.isOpen) ? styles.selected : '';

    function changeSelection(){
        props.onChange(door.changeSelection());
    }

    function openDoor(e:any){        
        // Abaixo eh parada a propagacao do evento (onchange) para o component pai e evitar que este componente seja
        // renderizado novamente, o que ocasionaria a impossibilidade de "abrir"
        e.stopPropagation();
        props.onChange(door.open());
    }

    function renderDoor(){
        return (
            <div className={styles.door} >
                <div className={styles.number} > {door.number} </div>
                <div className={styles.knob} onClick={openDoor} ></div>
            </div>
        );
    }

    return (
        <div className={styles.area} onClick={changeSelection} >
            <div className={`${styles.structure} ${selected}`} >
                {door.isClosed ? renderDoor() : (
                    door.hasGift ? <Gift/> : false
                )}
                
            </div>
            
            <div className={styles.floor} ></div>
        </div>
    );
}
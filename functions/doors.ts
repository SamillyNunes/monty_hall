import DoorModel from "../model/door_model";

export function createDoors(qtd: number, selectedIndex: number): DoorModel[]{
    return Array.from({length: qtd}, (_, i) => {
        const number = i+1; //porta 1, 2, 3...
        const hasGift = number == selectedIndex;
        return new DoorModel(i+1, hasGift);
    });
}

export function updateDoors(doors: DoorModel[], changedDoor: DoorModel): DoorModel[]{
    return doors.map((currentDoor) => {
        const isChangedDoor = currentDoor.number===changedDoor.number;

        if(isChangedDoor){
            return changedDoor;
        } 
        // Se nao for a nova porta, que sera  selecionad, vai desselecionar o resto
        // e se for o caso da nova porta estar aberta, nao deve mexer no comportamento de outra porta selecionada
        return changedDoor.isOpen ? currentDoor : currentDoor.unselect();
    });
}
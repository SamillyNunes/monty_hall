export default class Door{
    #number;
    #hasGift;
    #isSelected;
    #isOpen;

    constructor(number, hasGift=false, isSelected=false, isOpen=false){
        this.#number = number;
        this.#hasGift = hasGift;
        this.#isSelected = isSelected;
        this.#isOpen = isOpen;

    }

    get number(){
        return this.#number;
    }
    
    get hasGift(){
        return this.#hasGift;
    }

    get isSelected(){
        return this.#isSelected;
    }

    get isOpen(){
        return this.#isOpen;
    }

    unselect(){
        const selected = false;
        return new Door(this.number, this.hasGift, selected, this.isOpen);
    }

    changeSelection(){
        const selected = !this.isSelected;
        return new Door(this.number, this.hasGift, selected, this.isOpen);
    }

    open(){
        const opened = true;
        return new Door(this.number, this.hasGift, this.isSelected, opened);
    }
}
import Modell from "../Modell/Modell.js";
import ElemView from "../View/ElemView.js";

class Controller {
    constructor() {
        this.MODELL = new Modell();
        for (let index = 0; index < 9; index++) {
            //const ELEMVIEW = new ElemView($(".jatekter"));
            this.ELEMVIEW = new ElemView($(".jatekter"), index)
        }

        $(window).on("kivalaszt", (event) => {
            console.log(event.detail)
            this.MODELL.setAllapot(event.detail.getIndex());
            event.detail.setErtek(this.MODELL.getErtek());
            /**Játék vége ellenőrzése */
            if (this.MODELL.getVegeVanE() !== "tovább") {
                console.log(this.MODELL.getVegeVanE())
            }
        })
    }
}

export default Controller;
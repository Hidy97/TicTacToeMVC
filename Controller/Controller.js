import Modell from "../Modell/Modell.js";
import ElemView from "../View/ElemView.js";

class Controller {
    constructor() {
        const MODELL = new Modell();

        const ELEMVIEW = new ElemView($("article"));

        $(window).on("kivalaszt", () => {
            MODELL.setAllapot();
            ELEMVIEW.setErtek(MODELL.getErtek())
        })
    }
}

export default Controller;
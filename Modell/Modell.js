class Modell {
    #lista = [];
    #id;
    #allapot;
    constructor() {
        //ez jellemzi a programunk aktuális állapotát
        this.#allapot = "X";
    }

    setAllapot(){
        if (this.#allapot === "X") {
            this.#allapot = "O"
        } else {
            this.#allapot = "X"
        }
    }

    getErtek(){
        return this.#allapot
    }
}

export default Modell;
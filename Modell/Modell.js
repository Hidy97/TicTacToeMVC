class Modell {
    #lista;
    #index;
    #lepesszam;
    #allapot;
    constructor() {
        //ez jellemzi a programunk aktuális állapotát
        this.#allapot = "X";
        this.#lepesszam = 0;
        this.#lista = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        //kattintások száma 9, vége a játéknak
        //győzelem figyelése
    }

    setAllapot(index){
        if (this.#allapot === "X") {
            this.#allapot = "O"
        } else {
            this.#allapot = "X"
        }
        this.#lista[index] = this.#allapot;
        console.log(this.#lista)
        this.#lepesszam++;
    }

    getErtek(){
        return this.#allapot
    }

}

export default Modell;
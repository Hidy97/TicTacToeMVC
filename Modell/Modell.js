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

    setAllapot(index) {
        if (this.#allapot === "X") {
            this.#allapot = "O"
        } else {
            this.#allapot = "X"
        }
        this.#lista[index] = this.#allapot;
        console.log(this.#lista)
        this.#lepesszam++;
    }

    getVegeVanE() {
        let vEll = this.#vizszintesGyozelem()

        if (vEll.indexOf("OOO") > -1) {
            return "O nyert"
        }else if (vEll.indexOf("XXX") > -1) {
            return "X nyert"
        }else if (this.#lepesszam === 9) {
            return "Döntetlen"
        }
        return "Tovább";
    }

    getErtek() {
        return this.#allapot
    }

    #vizszintesGyozelem() {
        /**végigmegyünk a listán, és sztringet képezünk az elemekből, úgy, hogy minden 3-ik után spec karaktert teszünk */
        let vEll = ""
        for (let oszlop = 0; oszlop < 9; oszlop++) {
            vEll += this.#lista[oszlop]
            if (oszlop % 3 === 2) {
                vEll += "@";
            }
        }
        //vEll += "@";
        console.log(vEll.indexOf("OOO"), vEll.indexOf("XXX"))
        return vEll
    }

}

export default Modell;
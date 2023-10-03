class ElemView{
    #index //egész szám
    constructor(szuloElem, index){
        this.szuloElem = szuloElem
        this.#index = index
        //HTML tag létrehozása
        this.#htmlOsszerak()
        //meg kell fogni a gombokat
        this.elem=$(".elem:last-child")
        this.pElem=this.elem.children("p")
        this.elem.on("click", () =>{
            this.#sajatEsemenykezelo("kivalaszt")
        })
    }

    #htmlOsszerak(){
        let txt = ""
        txt+= `
                <div class="elem">
                <p></p>
                </div>
        `
        txt += ""
        this.szuloElem.append(txt);
        
    }

    setErtek(jel){
        this.pElem.html(jel)
    }

    #sajatEsemenykezelo(esemenynev){
        //console.log(esemenynev)
        const esemenyem = new CustomEvent(esemenynev, {detail:this})
        //const esemenyem = new CustomEvent(esemenynev, {detail:this.#index})
        window.dispatchEvent(esemenyem)
    }
    
    getIndex(){
        return this.#index
    }
}

export default ElemView;
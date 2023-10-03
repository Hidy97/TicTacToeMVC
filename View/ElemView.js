class ElemView{
    constructor(szuloElem){
        this.szuloElem = szuloElem
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
        this.szuloElem.html(txt);
        
    }

    setErtek(jel){
        this.pElem.html(jel)
    }

    #sajatEsemenykezelo(esemenynev){
        console.log(esemenynev)
        const esemenyem = new CustomEvent(esemenynev)
        window.dispatchEvent(esemenyem)
    }
}

export default ElemView;
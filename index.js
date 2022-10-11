class Szazlabu{
    #labakszama
    constructor(labakszama){
        this.#labakszama=labakszama;
    }
    toString(){
        return this.#labakszama+ " lábú százlábú";
    }
}
document.addEventListener("DOMContentLoaded",()=>{
    let szamok=[];
    for (let i = 0; i < 20; i++) {
        let veletlen=Math.floor(Math.random()*19)+1;
        szamok.push(veletlen);
    }
    console.log(szamok);
    
    document.getElementById("valogat").addEventListener("click",()=>{
        let otteloszthato=szamok.filter(e=>e%5===0);
        console.log(otteloszthato);
    })
    document.getElementById("hozzaad").addEventListener("click",()=>{
        let szam=ParseInt(document.getElementById("szam").value);
        szamok.push(szam);
    })
})

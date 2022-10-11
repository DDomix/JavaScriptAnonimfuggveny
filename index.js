class Szazlabu{
    #labakszama
    constructor(labakszama){
        this.#labakszama=labakszama;
    }
    toString(){
        return this.#labakszama+ " lábú százlábú";
    }

}
console.log(new Szazlabu(99).toString());
function labakbolszazlabu(labakTomb) {
    return labakTomb.map(szamok=> new Szazlabu(szam));
}
function szazlabumegjelenites(id,szazlabuk) {
    let elem=document.getElementById(id);
    szazlabuk.forEach(e => {
        let li=document.createElement('li');
        li.textContent=e.toString();
        elem.appendChild(li);
    });
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
    document.getElementById("hozzaad").addEventListener("click",()=>{
        szazlabumegjelenites("lista".labakbolszazlabu(szamok));
    });
})

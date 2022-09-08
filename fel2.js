function random() {
    return Math.floor(Math.random() * 9 +2);
}
let t = [];
for (let index = 0; index < 20; index++) {
    t.push({nev:"Cirmos "+index,eletkor: random()});    
}
for (let index = 0; index < t.length; index++) {
    if (t[index].eletkor==2) {
        console.log(t[index].nev+" "+t[index].eletkor);
    }       
}
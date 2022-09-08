
let t=[];
function random() {
    return Math.floor(Math.random() * 101);
}
for (let index = 0; index < 10; index++) {
    t[index]=random();
}
t.sort(function(b,a){return b-a});
console.log(t);
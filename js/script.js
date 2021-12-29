let a = +prompt('luboy sonni kiriting')
while (isNaN(a) || a == 0) {
    a = +prompt('son kiriting son!')
}
if (a % 2==1) {
    alert('Siz toq son kiritdingiz '+a)
}else if (a % 2 == 0){
    alert('Siz juft son kiritdingiz '+a)
}


let box = 1
for (let i = 1 ; i < 6 ; i++) {
    box = box * i
    
    console.log(box);
}



let son = +prompt('sonning qiymatini kiriting.')
while (isNaN(son) || son == 0) {
    son = +prompt('Sonning qiymatini bowqattan kiriting')
}
let daraja = +prompt('sonning darajasini kiriting.')
while (isNaN(daraja) || daraja == 0) {
    daraja = +prompt('Sonning darajasini bowqattan kiriting')
}
// let box = son
// for (let i = son; i < daraja; ) {
//     box =box * son
// }alert('javob '+box)











// function quadratic(x1, x2) {
//    let a=1
//    let islem1 = -x1-x2
//    let islem2 = x1*x2

//    return [1,islem1,islem2]
// }
// console.log(quadratic(2, 3));



function grow (x) {
let sayac=1
for(let i=0; i<x.length; i++){
    sayac=x[i]*sayac

}
return sayac;

}
console.log(grow([1,3,5,6]));
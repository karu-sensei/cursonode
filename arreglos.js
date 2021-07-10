const numeros = [1,2,3,4,5];
const nombres =["pedro","juan","diego"];

for (let index = 0; index < numeros.length; index++) {
    console.log("["+numeros[index]+"]");
    
}
numeros.push(200);
console.log(numeros);
numeros.unshift(300);
numeros.pop();
console.log(numeros);

for (const iterator in numeros) {
    console.log("xxxx"+ iterator);
}

numeros.forEach(function(el){
    console.log("yyyyy "+ el);
})

const resultados = numeros.map(function(el){
    return el*2;
})

const numerosmayores=numeros.filter(el=>el>10);
const sumarreglo=numeros.reduce((total,el)=>total+el,0);

console.log(sumarreglo);
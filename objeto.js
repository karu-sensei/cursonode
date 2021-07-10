const producto= {
    nombre: "monitor gamer 20",
    precio: 300000,
    informacion:{
        peso:"1kg",
        medida:"50cm"
    },
    disponibilidad:["los angeles", "chillan","concepcion"]
}

/*let nombre= producto.nombre;
let precio= producto.precio;
let medida= producto.informacion.medida;

const {nombre, precio, informacion, informacion:{peso}} = producto;*/
Object.freeze(producto) //no permite cambios
Object.seal(producto)// no permite agregar o quitar campos
function imprimir({nombre, precio}){
    console.log(nombre+" "+precio);
}
imprimir(producto);
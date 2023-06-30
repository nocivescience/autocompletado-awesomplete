const cheff = {
    tipo: 'cocina basica',
    cocinar: function(plato) {
        console.log(`Estoy cocinando ${plato}`);
    }
};
const sacha = {
    nombre: 'Sacha',
    edad: 26,
    profesion: 'ingeniero',
}
Object.setPrototypeOf(sacha, cheff);
console.log(cheff.tipo);

// var myObjectNumber = {
//     getNumber: function() {
//         return this.number;
//     }
// }
// var a = {
//     number: 50,
//     __proto__: myObjectNumber
// }
// var b = {
//     number: 33,
//     __proto__: myObjectNumber
// }
// console.log(a);
// var a = Object.create(myObjectNumber);
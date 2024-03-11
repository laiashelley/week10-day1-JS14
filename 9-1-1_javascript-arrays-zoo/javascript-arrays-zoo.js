// 1- INVENTARIO DEL ZOO

// crear array en consola i imprimir

const animalesZoo = ["Jirafa", "Leon", "Hipopotamo", "Tigre", "Zebra"];

console.log(animalesZoo);

// añadir dos al final:

animalesZoo.push("Pinguino");

animalesZoo.push("Lemur");

// imprimir el total de animales con propiedad length:

console.log("Total de animales en el zoo: " + animalesZoo.length);

// modificar el indice 3:

animalesZoo[3] = "Elefante";

// Recorre con un bucle FOR todo el array e imprímelo en consola.

for (let i = 0; i < animalesZoo.length; i++) {
  console.log(animalesZoo[i]);
}

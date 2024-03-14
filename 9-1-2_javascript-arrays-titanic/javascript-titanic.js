// 2- LISTA PASAJEROS TITANIC

// ¡Pasajeros a bordo!

// +EXTRA: Probar a hacerlo de forma visual en la página (innerHTML, botones, etc).

// +EXTRA: Puedes empezar a partir de una lista ya creada, o intentar crearla añadiendo pasajeros mediante un bucle for o while, o do...while. Puedes en este segundo caso añadir pasajeros mediante un input en pantalla (sin bucle).

// Tienes un listado con doce nombres de pasajeros para viajar en el Titanic. ok

const titanic = [
  "Elizabeth Walton",
  "Hudson Joshua",
  "Amelia Mary",
  "Sarah Daniels",
  "Kornelia Theodosia",
  "Thomas Andrews",
  "Charlote Appleton",
  "Harry Aderson",
  "Caroline Louise",
  "Madeline Astor",
  "Helen Bishop",
  "Henry Blanck",
];

// - Los dos últimos se dan de baja porque les da mala espina ok

titanic.pop();
titanic.pop();

console.log(titanic);

// - Lo que aprovechan dos nuevos pasajeros para apuntarse. ok

titanic.push("Ruth Dodge");
titanic.push("Mahala Douglas");

console.log(titanic);

// - El segundo pasajero se pone enfermo y lo sustituyes por uno nuevo. ok

titanic[2] = "Cosmo Duff Gordon";

console.log(titanic);

// - Imprimes la lista definitiva, te santiguas y les deseas buena suerte.

let listaTitanic = document.querySelector(".lista-array");

function listaFinal(){
  for (let i = 0; i < titanic.length; i++){
    listaTitanic.innerHTML += titanic[i] + "<br>";
    console.log(titanic[i]);
  }
}
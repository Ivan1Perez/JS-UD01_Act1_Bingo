let selectedNumber = "";
let randomNum;
let detector = "";

let cartonJugador = "";
let cartonMaquina = "";

//CARTON JUGADOR
console.log("Carton Jugador:");

for (let j = 0; j < 3; j++) {
  for (let i = 0; i < 5; i++) {
    randomNum = Math.floor(Math.random() * 91) + " ";
    /*Mientras que el cartón no incluya uno de los números generados añadimos el nuevo numero*/
    while (!cartonJugador.includes(randomNum)) {
      cartonJugador += randomNum;
    }
  }

  console.log("-------  " + cartonJugador + "  -------");
  cartonJugador = "";
}

console.log(" ");
console.log(" ");
//CARTON MAQUINA
console.log("Carton Máquina:");

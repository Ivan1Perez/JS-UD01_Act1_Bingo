let selectedNumbers = "";
let randomNum;

let cartonJugador = "";
let lineaCarton = "";
let cartonMaquina = "";
let counter = 0;
//let lineasJugador = new Array(2);

//CARTON JUGADOR
console.log("Carton Jugador:");

for (let j = 0; j < 3; j++) {
  do {
    randomNum = "✕" + Math.floor(Math.random() * 16) + "✕ ";
    /*Mientras que el cartón no incluya uno de los números generados añadimos el nuevo numero*/
    /*Si ya existe ese numero entonces se deberá de volver al Math.random*/
    if (!cartonJugador.includes(randomNum)) {
      cartonJugador += randomNum;
      lineaCarton += randomNum;
      counter++;
    }
  } while (counter < 5);

  counter = 0;
  console.log("----- " + lineaCarton + " -----");
  //lineasJugador[j] = lineaCarton;
  lineaCarton = "";
}

console.log(" ");

//CARTON MAQUINA

console.log("Carton Máquina:");

for (let j = 0; j < 3; j++) {
  do {
    randomNum = "✕" + Math.floor(Math.random() * 16) + "✕ ";
    /*Mientras que el cartón no incluya uno de los números generados añadimos el nuevo numero*/
    /*Si ya existe ese numero entonces se deberá de volver al Math.random*/
    if (!cartonMaquina.includes(randomNum)) {
      cartonMaquina += randomNum;
      lineaCarton += randomNum;
      counter++;
    }
  } while (counter < 5);

  counter = 0;
  console.log("----- " + lineaCarton + " -----");
  lineaCarton = "";
}

/*------------------------BOLA-------------------------------*/
let bola;
let bolasSacadas = "";
let bolaNoRepetida;
let bolasCounter = 0;
let cartonCompletado = false;
let aciertosJugador = 0;
let aciertosMaquina = 0;
let hanCantadoLineaJugador = false;
let hanCantadoLineaMaquina = false;
let lineaConfirmada = false;

console.log(" ");
console.log("Bolas extraídas:");

//Si presionamos la barra espaciadora sacará una bola.
document.addEventListener("keydown", function (event) {
  if (cartonCompletado) {
    console.log("La partida ya ha finalizado.");
  } else {
    if (event.code === "Space") {
      bolaNoRepetida = false;
      do {
        bola = Math.floor(Math.random() * 16);
        randomNum = "✕" + bola + "✕";
        if (!bolasSacadas.includes(randomNum)) {
          bolasSacadas += randomNum;
          bolaNoRepetida = true;
          bolasCounter++;
        }
      } while (!bolaNoRepetida && bolasCounter < 16);

      console.log(bola);

      event.preventDefault();
    }

    /*----------ACIERTOS--------------------------*/

    let stringBola = "✕" + bola.toString() + "✕";
    let contadorEspacios = 0;
    let lineaCompleta;
    let posNumJugador = 0;
    let posNumMaquina = 0;

    /*------------INICIO ACIERTOS JUGADOR----------------------*/

    if (cartonJugador.includes(stringBola)) {
      cartonJugador = cartonJugador.replace(
        stringBola,
        "✓" + bola.toString() + "✓"
      );
      aciertosJugador++;
      console.log("Carton Jugador contiene bola " + bola + "!");
      for (let i = 0; i < 3; i++) {
        lineaCompleta = false;
        while (!lineaCompleta) {
          lineaCarton += cartonJugador.charAt(posNumJugador);
          if (cartonJugador.charAt(posNumJugador) === " ") {
            contadorEspacios++;
            if (contadorEspacios === 5) {
              lineaCompleta = true;
            }
          }
          posNumJugador++;
        }
        if(!lineaCarton.includes("✕") && !hanCantadoLineaJugador && !hanCantadoLineaMaquina && !lineaConfirmada){
          hanCantadoLineaJugador = true;
          console.log("!!!Línea!!!")
        }
        console.log(lineaCarton);
        lineaCarton = "";
        contadorEspacios = 0;
      }

      //console.log(cartonJugador);
    }else{
      console.log("Cartón Jugador sin aciertos.")
    }

    /*------------FIN ACIERTOS JUGADOR----------------------*/

    /*------------INICIO ACIERTOS MÁQUINA----------------------*/

    if (cartonMaquina.includes(stringBola)) {
      console.log("Carton Máquina contiene la bola " + bola + "!");
      cartonMaquina = cartonMaquina.replace(
        stringBola,
        "✓" + bola.toString() + "✓"
      );
      aciertosMaquina++;
      for (let i = 0; i < 3; i++) {
        lineaCompleta = false;
        while (!lineaCompleta) {
          lineaCarton += cartonMaquina.charAt(posNumMaquina);
          if (cartonMaquina.charAt(posNumMaquina) === " ") {
            contadorEspacios++;
            if (contadorEspacios === 5) {
              lineaCompleta = true;
            }
          }
          posNumMaquina++;
        }
        if(!lineaCarton.includes("✕") && !hanCantadoLineaJugador && !hanCantadoLineaMaquina && !lineaConfirmada){
          hanCantadoLineaMaquina = true;
          console.log("!La máquina ha hecho línea!")
        }
        console.log(lineaCarton);
        lineaCarton = "";
        contadorEspacios = 0;
      }
    }else{
      console.log("Cartón Máquina sin aciertos.")
    }

    if(hanCantadoLineaJugador || hanCantadoLineaMaquina){
      lineaConfirmada = true;
    }

    /*------------FIN ACIERTOS MÁQUINA----------------------*/

    if (aciertosJugador === 15 && aciertosMaquina < 15) {
      cartonCompletado = true;
      console.log("El jugador ha ganado!");
    } else if (aciertosMaquina === 15 && aciertosJugador < 15) {
      cartonCompletado = true;
      console.log("La máquina ha ganado!");
    } else if (aciertosJugador === 15 && aciertosMaquina === 15) {
      cartonCompletado = true;
      console.log("Tenemos un empate!");
    }
  }
});

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
  do{
    randomNum = "✕" + Math.floor(Math.random() * 16) + "✕ ";
    /*Mientras que el cartón no incluya uno de los números generados añadimos el nuevo numero*/
    /*Si ya existe ese numero entonces se deberá de volver al Math.random*/
    if(!cartonJugador.includes(randomNum)) {
      cartonJugador += randomNum;
      lineaCarton += randomNum;
      counter++;
    }
  }while(counter<5);
    
  counter = 0;
  console.log("----- " + lineaCarton + " -----");
  //lineasJugador[j] = lineaCarton;
  lineaCarton = "";
}

console.log(" ");

//CARTON MAQUINA

console.log("Carton Máquina:");


for (let j = 0; j < 3; j++) {
  do{
    randomNum = "✕" + Math.floor(Math.random() * 91) + "✕ ";
    /*Mientras que el cartón no incluya uno de los números generados añadimos el nuevo numero*/
    /*Si ya existe ese numero entonces se deberá de volver al Math.random*/
    if(!cartonMaquina.includes(randomNum)) {
      cartonMaquina += randomNum;
      lineaCarton += randomNum;
      counter++;
    }
  }while(counter<5);
    
  counter = 0;
  console.log("----- " + lineaCarton + " -----");
  lineaCarton = "";
}


/*------------------------BOLA-------------------------------*/
let bola;
let bolasSacadas = "";
let bolaNoRepetida;
let bolasCounter = 0;

console.log(" ");
console.log("Bolas extraídas:")

//Si presionamos la barra espaciadora sacará una bola.
document.addEventListener('keydown', function(event){

  if (event.code === "Space") {
    bolaNoRepetida = false;
    do{
      bola = Math.floor(Math.random() * 16);
      randomNum = bola + " ";
      if(!(bolasSacadas.includes(randomNum))){
        bolasSacadas += randomNum;
        bolaNoRepetida = true;
      }else{
        bola = null;
      }
    }while(!bolaNoRepetida);

      console.log(bola);
    
    event.preventDefault();
  }

  /*----------ACIERTOS--------------------------*/

  let posicionNum;
  let stringBola = "✕" + bola.toString() + "✕";
  let contadorEspacios = 0;
  let lineaCompleta;
  let pos = 0;

  //'Esto es una cadena'.indexOf('E'); // 0
  if(cartonJugador.includes(stringBola)){
    posicionNum = cartonJugador.indexOf(stringBola);
    cartonJugador = cartonJugador.replace(stringBola, "✓" + bola.toString() + "✓");
    for(let i = 0; i < 3; i++){
      lineaCompleta = false;
      while(!lineaCompleta){
        lineaCarton += cartonJugador.charAt(pos);
        if(cartonJugador.charAt(pos) === " "){
          contadorEspacios++;
          if(contadorEspacios === 5){
            lineaCompleta = true;
          }
        }
        pos++;
      }
      console.log(lineaCarton);
      lineaCarton = "";
      contadorEspacios = 0;
    } 
    
    
    //console.log(cartonJugador);
  }
});
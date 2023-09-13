let selectedNumbers = "";
let randomNum;

let cartonJugador = "";
let lineaCarton = "";
let cartonMaquina = "";
let counter = 0;

//CARTON JUGADOR
console.log("Carton Jugador:");

for (let j = 0; j < 3; j++) {
  do{
    randomNum = Math.floor(Math.random() * 91) + " ";
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
  lineaCarton = "";
}

console.log(" ");

//CARTON MAQUINA

console.log("Carton Máquina:");


for (let j = 0; j < 3; j++) {
  do{
    randomNum = Math.floor(Math.random() * 91) + " ";
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

//Si presionamos la barra espaciadora sacará una bola.
document.addEventListener('keydown', function(event){
  if (event.code === "Space") {
    bolaNoRepetida = false;
    do{
      bola = Math.floor(Math.random() * 91);
      randomNum = bola + " ";
      if(!(bolasSacadas.includes(randomNum))){
        bolasSacadas += randomNum;
        bolaNoRepetida = true;
      }else{
        bola = null;
      }
    }while(!bolaNoRepetida);

    if(bola!=null){
      console.log(bola);
    }
    
    event.preventDefault();
  }
});
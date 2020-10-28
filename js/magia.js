let casillas = [0,0,0,0,0,0,0,0,0];
let jugador = 1;
let unlocked = false;

function empezar(){
    unlocked = true;
    for(i = 0; i < casillas.length; i++){
        document.getElementById(i).style.backgroundColor = "white";
    }
}

function reiniciar(){
    unlocked = false;
    for(i = 0; i < casillas.length; i++){
        document.getElementById(i).style.backgroundColor = "white";
    }
    jugador = 1;
}

function marcar(casilla){
    if(jugador == 1 && unlocked == true){
        document.getElementById(casilla).style.backgroundColor = "blue";
        if(hasGanado() == true){
            alert("¡El jugador " + document.getElementById("jugador1").value + " ha ganado!");
            unlocked=false;
        }
        jugador = 2;
        console.log("le toca al segundo jugador");
    }else if(jugador == 2 && unlocked == true){
        document.getElementById(casilla).style.backgroundColor = "green";
        if(hasGanado() == true){
            alert("¡El jugador " + document.getElementById("jugador2").value + " ha ganado!");
            unlocked=false;
        }
        jugador = 1;
        console.log("le toca al primer jugador");
    }
}

function cambioTurno(){
    if(turno == 1){
        turno = 2;
    }else{
        turno = 1;
    }
}

function hasGanado(){
    if(document.getElementById("0").style.backgroundColor == document.getElementById("1").style.backgroundColor && document.getElementById("0").style.backgroundColor == document.getElementById("2").style.backgroundColor && document.getElementById("0").style.backgroundColor != "white"){
        return true;
    }else if(document.getElementById("0").style.backgroundColor == document.getElementById("3").style.backgroundColor && document.getElementById("0").style.backgroundColor == document.getElementById("6").style.backgroundColor && document.getElementById("0").style.backgroundColor != "white"){
        return true;       
    }else if(document.getElementById("0").style.backgroundColor == document.getElementById("4").style.backgroundColor && document.getElementById("0").style.backgroundColor == document.getElementById("8").style.backgroundColor && document.getElementById("0").style.backgroundColor != "white"){
        return true;        
    }else if(document.getElementById("1").style.backgroundColor == document.getElementById("4").style.backgroundColor && document.getElementById("1").style.backgroundColor == document.getElementById("7").style.backgroundColor && document.getElementById("1").style.backgroundColor != "white"){
        return true;
    }else if(document.getElementById("2").style.backgroundColor == document.getElementById("5").style.backgroundColor && document.getElementById("2").style.backgroundColor == document.getElementById("8").style.backgroundColor && document.getElementById("2").style.backgroundColor != "white"){
        return true;
    }else if(document.getElementById("2").style.backgroundColor == document.getElementById("4").style.backgroundColor && document.getElementById("2").style.backgroundColor == document.getElementById("6").style.backgroundColor && document.getElementById("2").style.backgroundColor != "white"){
        return true;
    }else if(document.getElementById("3").style.backgroundColor == document.getElementById("4").style.backgroundColor && document.getElementById("3").style.backgroundColor == document.getElementById("5").style.backgroundColor && document.getElementById("3").style.backgroundColor != "white"){
        return true;
    }else if(document.getElementById("6").style.backgroundColor == document.getElementById("7").style.backgroundColor && document.getElementById("6").style.backgroundColor == document.getElementById("8").style.backgroundColor && document.getElementById("6").style.backgroundColor != "white"){
        return true;
    }else{
        return false;
    }
}
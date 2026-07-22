    let jugador = JSON.parse(localStorage.getItem("jugador"));

    if(!jugador){

        jugador = {

            puntos:0,

            monedas:0,

            nivel:1,

            librosVisitados:0,

            medalla:"Ninguna"

        };

    }

    let visitados = {

        libro1: false,

        libro2: false,

        libro3: false

    };

    document.getElementById("coins").innerHTML = jugador.monedas;

    function libro1(){

        window.open("https://libbyapp.com/search/bibliotecatec/spotlight-books/page-1/570224","_blank");

        sumarMonedas("libro1");

    }

    function libro2(){

        window.open("https://libbyapp.com/search/bibliotecatec/spotlight-books/page-1/1330376","_blank");

        sumarMonedas("libro2");

    }

    function libro3(){

        window.open("https://libbyapp.com/search/bibliotecatec/spotlight-books/page-1/37561","_blank");

        sumarMonedas("libro3");

    }

    function sumarMonedas(nombre){

        if(visitados[nombre]){

            return;

        }

        visitados[nombre] = true;

        jugador.monedas += 5;

        document.getElementById("coins").innerHTML = jugador.monedas;

        document.getElementById("progreso").innerHTML =
            jugador.monedas + " / 30 🪙";

            const anim = document.getElementById("coinAnimation");

anim.classList.remove("show");

void anim.offsetWidth;

anim.classList.add("show");

     //   localStorage.setItem(
       //     "jugador",
         //   JSON.stringify(jugador)
       // );

        let boton = document.getElementById("btn" + nombre.charAt(0).toUpperCase() + nombre.slice(1));

        boton.disabled = true;

        boton.innerHTML = "✅ Visitado";

    }


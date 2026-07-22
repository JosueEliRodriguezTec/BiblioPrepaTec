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

         const ventana = window.open("", "_blank");

    sumarMonedas("libro1");

    setTimeout(() => {

        ventana.location.href = "https://libbyapp.com/search/bibliotecatec/spotlight-books/page-1/570224";

    },1000);

    }

    function libro2(){

        const ventana = window.open("", "_blank");

    sumarMonedas("libro2");

    setTimeout(() => {

        ventana.location.href = "https://libbyapp.com/search/bibliotecatec/spotlight-books/page-1/1330376";

    },1000);

    }

    function libro3(){

      const ventana = window.open("", "_blank");

    sumarMonedas("libro3");

    setTimeout(() => {

        ventana.location.href = "https://libbyapp.com/search/bibliotecatec/spotlight-books/page-1/37561";

    },1000);

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

// Si ya llegó a 30 monedas
if(jugador.monedas >= 15){

    confetti({

        particleCount:250,

        spread:180,

        origin:{ y:0.6 }

    });

    document.getElementById("medallaBronce").style.display = "flex";

    document.getElementById("continuar").disabled = false;

}

//   localStorage.setItem(
//     "jugador",
//     JSON.stringify(jugador)
// );

let boton = document.getElementById("btn" + nombre.charAt(0).toUpperCase() + nombre.slice(1));

boton.disabled = true;

boton.innerHTML = "✅ Visitado";

}

function cerrarMedalla(){

    document.getElementById("medallaBronce").style.display = "none";

}


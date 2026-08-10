import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.7.1/firebase-firestore.js";

const formulario = document.getElementById("formRegistro");

formulario.addEventListener("submit", async function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();

    const matricula = "A" + document.getElementById("matricula").value.trim();

    const semestre = document.getElementById("semestre").value;

    const boton = formulario.querySelector("button");

boton.disabled = true;

boton.textContent = "Guardando...";
if(!/^\d{8}$/.test(document.getElementById("matricula").value.trim())){

    alert("La matrícula debe contener exactamente 8 números.");

    boton.disabled = false;

    boton.textContent = "Finalizar registro";

    return;

}
    try{

        await addDoc(collection(db, "participantes"),{

            nombre: nombre,

            matricula: matricula,

            semestre: semestre,

            fecha: serverTimestamp()

        });
console.log("Registro guardado correctamente");
        boton.textContent = "Registro guardado";

        formulario.reset();

    }

   catch(error){

    console.error("Error Firebase:", error);

    alert(error.message);

    boton.disabled = false;

    boton.textContent = "Finalizar registro";

}

});
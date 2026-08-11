import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const tabla = document.getElementById("tablaParticipantes");

const total = document.getElementById("totalParticipantes");

async function cargarParticipantes(){

    tabla.innerHTML = "";

    const consulta = await getDocs(collection(db,"participantes"));

    total.textContent = consulta.size;

    consulta.forEach((doc)=>{

        const datos = doc.data();

        const fila = document.createElement("tr");

        fila.innerHTML = `

            <td>${datos.nombre}</td>

            <td>${datos.matricula}</td>

            <td>${datos.semestre}°</td>

            <td>${formatearFecha(datos.fecha)}</td>

        `;

        tabla.appendChild(fila);

    });

}

function formatearFecha(fecha){

    if(!fecha){

        return "-";

    }

    return fecha.toDate().toLocaleString("es-MX");

}

cargarParticipantes();

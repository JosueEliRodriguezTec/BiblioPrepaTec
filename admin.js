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

async function exportarExcel(){

    try{

        const consulta = await getDocs(
            collection(db, "participantes")
        );

        const datos = [];

        consulta.forEach((doc) => {

            const participante = doc.data();

            let fecha = "";

            if(participante.fecha){

                fecha = participante.fecha
                    .toDate()
                    .toLocaleString("es-MX");

            }

            datos.push({

                "Nombre": participante.nombre,

                "Matrícula": participante.matricula,

                "Semestre": participante.semestre,

                "Fecha de registro": fecha

            });

        });


        if(datos.length === 0){

            alert("No hay participantes registrados para exportar.");

            return;

        }


        /* Crear hoja de Excel */

        const hoja =
            XLSX.utils.json_to_sheet(datos);


        /* Crear libro */

        const libro =
            XLSX.utils.book_new();


        XLSX.utils.book_append_sheet(
            libro,
            hoja,
            "Participantes"
        );


        /* Descargar archivo */

        XLSX.writeFile(
            libro,
            "Biblioteca_Challenge.xlsx"
        );

    }

    catch(error){

        console.error(
            "Error al exportar:",
            error
        );

        alert(
            "Ocurrió un error al exportar los registros."
        );

    }

}

document.getElementById("btnExportar")
    .addEventListener("click", exportarExcel);

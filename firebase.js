// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.1/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.7.1/firebase-firestore.js";

// Configuración de tu proyecto
const firebaseConfig = {

    apiKey: "AIzaSyD1k7JIayPXNQ6yVb3gSjy4vAvmeIXmrBs",

    authDomain: "biblioteca-challenge.firebaseapp.com",

    projectId: "biblioteca-challenge",

    storageBucket: "biblioteca-challenge.firebasestorage.app",

    messagingSenderId: "453337835857",

    appId: "1:453337835857:web:341a2f5885b35e698c4b70"

};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Exportar la base de datos
export { db };

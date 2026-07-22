<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Biblioteca Challenge - Libros</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">

    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">

    <link rel="stylesheet" href="style.css">

    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>

</head>

<body>

    <div class="pantallaLibros">

    <h1>📚 Biblioteca Challenge</h1>

    <h2>Explora los libros y gana monedas</h2>

    <h3>🪙 Monedas: <span id="coins">0</span></h3>

    <div id="coinAnimation" class="coinAnimation">
    🪙 +5
</div>

    <hr>

    <div class="librosGrid">

        <div class="libro">

            <h2 id="nombreLibro1">📕 Libro 1</h2>

            <p>Descripción del libro.</p>

            <button id="btnLibro1" onclick="libro1()">
                📖 Explorar libro (+5 🪙)
            </button>

        </div>

        <div class="libro">

           <h2 id="nombreLibro2">📘 Libro 2</h2>
            <p>Descripción del libro.</p>

            <button id="btnLibro2" onclick="libro2()">
                📖 Explorar libro (+5 🪙)
            </button>

        </div>

        <div class="libro">

            <h2 id="nombreLibro3">📗 Libro 3</h2>

            <p>Descripción del libro.</p>

            <button id="btnLibro3" onclick="libro3()">
                📖 Explorar libro (+5 🪙)
            </button>

        </div>

    </div>

    <hr>

    <h2>Progreso</h2>

    <h3 id="progreso">0 / 30 🪙</h3>

    <button id="continuar" disabled>
        Continuar al Nivel 2
    </button>

</div>

        <div id="medallaBronce" class="medallaModal">

    <div class="medallaBox">

        <h1>🎉 ¡Felicidades!</h1>

        <div class="medallaIcono">🥉</div>

        <h2>Has obtenido la</h2>

        <h1>MEDALLA DE BRONCE</h1>

        <p>
            Has completado el reto de exploración de libros.
        </p>

        <button onclick="cerrarMedalla()">
            Continuar
        </button>

    </div>

</div>

<script src="libros.js"></script>



</body>



</html>

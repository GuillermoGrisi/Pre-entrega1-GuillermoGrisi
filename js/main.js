let alumno1 = "";
let alumno2 = "";
let alumno3 = "";

function calcularPromedio(nombreCompleto, nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    let estado = "";

    if (promedio < 4) {
        estado = "Reprobado";
    } else if (promedio >= 4 && promedio < 6) {
        estado = "Rendir examen";
    } else {
        estado = "Aprobado";
    }
     return `ALUMNO: ${nombreCompleto}     PROMEDIO: ${promedio.toFixed(2)}\nESTADO: ${estado}`;
}

function validarNota(nota) {
    while (nota < 0 || nota > 10 || isNaN(nota)) {
        alert("Nota inválida. Por favor, ingrese una nota entre 0 y 10.");
        nota = parseFloat(prompt("Ingrese la nota nuevamente (0 a 10):"));
    }
    return nota;
}
function validarNombre() {
    let nombreCompleto = prompt("Ingrese el nombre del Alumno:");
    while (nombreCompleto === "") {
        alert("Por favor, ingrese un nombre válido.");
        nombreCompleto = prompt("Ingrese nuevamente el nombre del Alumno:");
    }
    return nombreCompleto;
}

for (let i = 1; i <= 3; i++) {
    let nombreCompleto = validarNombre();
    let nota1 = validarNota(parseFloat(prompt("Ingrese la nota del primer trimestre (0 a 10):")));
    let nota2 = validarNota(parseFloat(prompt("Ingrese la nota del segundo trimestre (0 a 10):")));
    let nota3 = validarNota(parseFloat(prompt("Ingrese la nota del tercer trimestre (0 a 10):")));

    if (i === 1) {
        alumno1 = calcularPromedio(nombreCompleto, nota1, nota2, nota3);
    } else if (i === 2) {
        alumno2 = calcularPromedio(nombreCompleto, nota1, nota2, nota3);
    } else if (i === 3) {
        alumno3 = calcularPromedio(nombreCompleto, nota1, nota2, nota3);
    }
}

alert(alumno1 + '\n\n' + alumno2 + '\n\n' + alumno3);

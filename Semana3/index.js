const opciones = [
    { nombre: "Modelo comercial de frontera por API", calidad: 5, costo: 2, privacidad: 3, latencia: 4 },
    { nombre: "Modelo abierto en servidor propio", calidad: 3, costo: 4, privacidad: 5, latencia: 3 },
    { nombre: "Modelo abierto a través de un intermediario", calidad: 4, costo: 4, privacidad: 3, latencia: 3 },
];

const pesos = { calidad: 0.4, costo: 0.2, privacidad: 0.3, latencia: 0.1 };

// 1. Suma nota × peso y redondea a 2 decimales
function puntaje(opcion, pesos) {
    const total =
        opcion.calidad * pesos.calidad +
        opcion.costo * pesos.costo +
        opcion.privacidad * pesos.privacidad +
        opcion.latencia * pesos.latencia;
    return Math.round(total * 100) / 100;
}

// 2. Nombres de mayor a menor puntaje (ordena una copia, no toca "opciones")
function ranking(opciones, pesos) {
    return [...opciones].sort((a, b) => puntaje(b, pesos) - puntaje(a, pesos)).map((o) => o.nombre);
}

// 3. Mejor opción con privacidad >= minimo, o null si ninguna cumple
function elegir(opciones, pesos, minimo) {
    const validas = opciones.filter((o) => o.privacidad >= minimo);
    if (validas.length === 0) return null;
    return ranking(validas, pesos)[0];
}

console.log(ranking(opciones, pesos));
let listaInmuebles = new Array();
let listaUsuarios = new Array();
let tipoUsuarioActual = "visitante"
let correoUsuarioActual = ""
let tipoDeMoneda = "$" // Tiene el valor de pesos por que cuando se ingresa por primera vez a la pagina los precios se muestran en $ por defecto
let NroInmuebles = 0 // Cada inmueble va a tener un numero para distinguirlos y manejarlos mejor


todoCargado()
precargaUsuario()
precargaInmuebles()
mostrarPorCalificaciones() // Muestra listado de inmueble ordenado por calificacion – Usuario: visitante y huésped.

function todoCargado() {

    //F01 - Cambio de moneda
    document.querySelector("#slcCombo").addEventListener("click", cambioDeMoneda);

    //F02 – Ordenador de listado por precio
    document.querySelector("#btnOrdenarPorAscendente").addEventListener("click", mostrarPrecioAscendente); // Asencente 
    document.querySelector("#btnOrdenarPorDescendente").addEventListener("click", mostrarPrecioDescendente); // Desencente
    document.querySelector("#btnOrdenarPorCalificaciones").addEventListener("click", mostrarPorCalificaciones); // "Remover Filtro", o sea vuelve a mostrar por calificaciones

    //F03 - Buscador de inmuebles
    document.querySelector("#btnBuscador").addEventListener("click", buscador)

    //F04 - Registrarse en la aplicación
    document.querySelector("#aRegistrarse").addEventListener("click", menuRegistrarse); // Muestra registro de usuario
    document.querySelector("#BtnRegistrarse").addEventListener("click", formularioDeRegistroUsuario); // Para registrarse 

    //F05 - Ingreso al sistema
    document.querySelector("#aIniciarSesion").addEventListener("click", formularioIniciarSesion); // Formulario
    document.querySelector("#btnInicioSesion").addEventListener("click", iniciarSesion); // Iniciar sesion

    //F09 - Boton para acceder a sus propias reservas
    document.querySelector("#susReservas").addEventListener("click", tablaReservas);

    //F11 - Cierre de sesion
    document.querySelector("#cerrarSesion").addEventListener("click", cerrarSesion);

    //F13 - Registrar un Inmueble
    document.querySelector("#aRegistrarInmueble").addEventListener("click", mostrarFormularioInmueble) // Muestra registro de inmueble 
    document.querySelector("#BtnRegistrarInmueble").addEventListener("click", formularioDeRegistroInmueble) // Registra inmueble

    //F14 - Dar de alta a un anfitrion
    document.querySelector("#BtnRegistrarAnfi").addEventListener("click", formularioDeRegistroUsuarioAnfitrion);
    document.querySelector("#aRegistrarAnfi").addEventListener("click", mostrarRegistrarAnfi);

    //F15 - Cargar cotizacion
    document.querySelector("#btnGuardarcotizacion").addEventListener("click", cargarCotizacion);

    //F16 - Ver un reporte de inmuebles
    document.querySelector("#btnBuscarReporte").addEventListener("click", buscarReporte);
    document.querySelector("#btnRemoverFiltro").addEventListener("click", removerFiltro);

}

function precargaUsuario() {
    //Precarga de usuarios huésped
    logicaNegocioAgregarPersona(esPrecarga = true, "huesped", "Juan", "Perez", "juanperez@gmail.com", "12345678", "perezJuan123", "perezJuan123", new Array(0, 3, 4, 19)) // los num de celulares tiene que estar en string por que sino la funcion .lenght no funciona
    logicaNegocioAgregarPersona(esPrecarga = true, "huesped", "María", "Rodriguez", "mariarodriguez@yahoo.com", "87654321", "rodriguezMaria123", "rodriguezMaria123", new Array(1, 7, 12))
    logicaNegocioAgregarPersona(esPrecarga = true, "huesped", "Emanuel", "Acosta", "emanuelacosta@gmail.com", "76348732", "acosta34Emanuel", "acosta34Emanuel", new Array(1, 6, 13))
    logicaNegocioAgregarPersona(esPrecarga = true, "huesped", "Valentina", "Perez", "valeperez@gmail.com", "98234567", "34Perezzzz", "34Perezzzz", new Array(5, 8, 18, 16))
    logicaNegocioAgregarPersona(esPrecarga = true, "huesped", "Valentino", "Rossi", "valerossi@gmail.com", "76349823", "98rossiValentino", "98rossiValentino", new Array(1, 14, 17))
    logicaNegocioAgregarPersona(esPrecarga = true, "huesped", "Monica", "Rodriguez", "monicarodirguez@gmail.com", "98342343", "98monicaRo", "98monicaRo", new Array(4, 7, 15))
    logicaNegocioAgregarPersona(esPrecarga = true, "huesped", "Pablo", "Rossi", "pablorossi@gmail.com", "98340923", "87RossiPablo", "87RossiPablo", new Array(4, 11, 18))
    logicaNegocioAgregarPersona(esPrecarga = true, "huesped", "Carolina", "González", "gonzalez123@gmail.com", "76349933", "34Gonzales34", "34Gonzales34", new Array(3, 12, 16, 18))
    logicaNegocioAgregarPersona(esPrecarga = true, "huesped", "Luis", "Martínez", "luismartinez@gmail.com", "45764576", "Martinez34", "Martinez34", new Array(0, 4, 15, 14))
    logicaNegocioAgregarPersona(esPrecarga = true, "huesped", "Lucía", "Sosa", "sosalucia@gmail.com", "45452333", "SosaSosa65", "SosaSosa65", new Array(1, 9, 10, 11))

    //Precarga de usuarios anfitriones
    logicaNegocioAgregarPersona(esPrecarga = true, "anfitrion", "Luciano", "Miotti", "lucianomiotti@gmail.com", "98129812", "lucianoM123", "lucianoM123")
    logicaNegocioAgregarPersona(esPrecarga = true, "anfitrion", "Eduardo", "Bautista", "eduardobautista@gmail.com", "11129812", "EduardoB123", "EduardoB123")
    logicaNegocioAgregarPersona(esPrecarga = true, "anfitrion", "María", "Perez", "mariaperez@gmail.com", "19129812", "mariaP123", "mariaP123")
    logicaNegocioAgregarPersona(esPrecarga = true, "anfitrion", "Rosario", "Acosta", "rosarioacosta@gmail.com", "99129812", "Rosarioo123", "Rosarioo123")
    logicaNegocioAgregarPersona(esPrecarga = true, "anfitrion", "Bruno", "Sosa", "brunososa@gmail.com", "99881111", "Bruno123", "Bruno123")
    logicaNegocioAgregarPersona(esPrecarga = true, "anfitrion", "Cristian", "Martin", "cristian1212@gmail.com", "99881128", "12Cristian12", "12Cristian12")

    //Precarga del administrador
    let usuario = new Usuario();
    usuario.TipodeUsuario = "Administrador"
    usuario.Correo = "admin"
    usuario.Contrasena = 1234
    listaUsuarios.push(usuario);

    //PROVISIONAL huesped y anfitrion facil
    usuario = new Usuario();
    usuario.TipodeUsuario = "huesped"
    usuario.Correo = "h"
    usuario.Contrasena = "h"
    listaUsuarios.push(usuario);

    usuario = new Usuario();
    usuario.TipodeUsuario = "anfitrion"
    usuario.Correo = "a"
    usuario.Contrasena = "a"
    listaUsuarios.push(usuario);
}


function precargaInmuebles() {
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "lucianomiotti@gmail.com", "Casa en el centro de Canelones", "Casa con 3 habitaciones, 1.5 baño y una cocina", "Canelones", 1500, 3, 4.2, "habilitado", "A1.jpg", "A2.jpg", "A3.jpg", "A4.jpg", "A5.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "lucianomiotti@gmail.com", "Apartamento barato en el Centro", "Apartamento con 1 habitaciones, un baño y una cocina", "Montevideo", 750, 7, 3.8, "habilitado", "B1.jpg", "B2.jpg", "B3.jpg", "B4.jpg", "B5.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "lucianomiotti@gmail.com", "Apartamento en las Piedras", "Apartamento con 2 habitaciones, un baño y una cocina", "Las Piedras", 950, 5, 4.5, "habilitado", "C1.jpg", "C2.jpg", "C3.jpg", "C4.jpg", "C5.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "eduardobautista@gmail.com", "Casa en Parque del plata", "Casa con 5 habitaciones, 2 baño, un jardín y una cocina", "Parque de plata", 4000, 5, 4.9, "habilitado", "D1.jpg", "D2.jpg", "D3.jpg", "D4.jpg", "D5.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "eduardobautista@gmail.com", "Casa de 2 habitaciones a metros de la playa", "Casa con 2 habitaciones, un baño y una cocina", "Las Toscas", 2500, 5, 4.3, "habilitado", "E1.jpg", "E2.jpg", "E3.jpg", "E4.jpg", "E5.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "eduardobautista@gmail.com", "Hermosa casa en Las Tocas", "Casa con 1 habitaciones, un baño, un jardín y una cocina", "Las Toscas", 1700, 5, 3.3, "habilitado", "F1.jpg", "F2.jpg", "F3.jpg", "F4.jpg", "F5.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "rosarioacosta@gmail.com", "Casa de 2 dormitorios en Paso Carrasco - Ciudad de la Costa", "Casa a una cuadra de Camino Carrasco al Sur. Living-comedor, cocina, patio al fondo. 2 dormitorios con placard, baño.", "Ciudad de la Costa", 1900, 7, 4.3, "habilitado", "G1.jpg", "G2.jpg", "G3.jpg", "G4.jpg", "G5.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "rosarioacosta@gmail.com", "Apartamento al frente de la plaza independencia", "Apartamento 2 dormitorios, gran jardín, living comedor con hogar, cocina, 2 baños", "Montevideo", 1700, 5, 2.7, "habilitado", "H1.jpg", "H2.jpg", "H3.jpg", "H4.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "rosarioacosta@gmail.com", "Muy lindo y amplio apartamento con gran vista amueblado", "Casa con 1 habitaciones, un baño, un jardín y una cocina", "Colonia", 1300, 2, 4.1, "habilitado", "I1.jpg", "I2.jpg", "I3.jpg", "I4.jpg", "I5.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "mariaperez@gmail.com", "Lindo depto a metros de la Rambla", "Lindo departamento a pasos de la Rambla y zona de playas con amenities", "Colonia", 1700, 5, 3.3, "habilitado", "J1.jpg", "J2.jpg", "J3.jpg", "J4.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "mariaperez@gmail.com", "Aparto de 2 dorm cerca del centro", "2 dorm cerca del centro", "Colonia", 1250, 8, 3.2, "habilitado", "P1.jpg", "P2.jpg", "P3.jpg", "P4.jpg", "P5.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "mariaperez@gmail.com", "2 Dormitorios en Punta Del Este", "El apto. cuenta con 2 dormitorios, 2 baños, living comedor, cocina integrada, terraza al frente.", "Punta del este", 2100, 4, 4.7, "habilitado", "K1.jpg", "K2.jpg", "K3.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "mariaperez@gmail.com", "3 Dormitorios en Playa Brava", "Muy soleado y luminoso, en muy buen estado. 3 dormitorios, 2 baños. estar con cocina integrada. Garage interno.", "Punta del este", 2500, 3, 4.2, "habilitado", "L1.jpg", "L2.jpg", "L3.jpg", "L4.jpg", "L5.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "brunososa@gmail.com", "Apartamento Amoblado de 1 Dormitorio", "Apartamento al frente con muebles y la mejor vista de Montevideo. 1 Dormitorio al frente", "Montevideo", 1270, 7, 3.3, "habilitado", "M1.jpg", "M2.jpg", "M3.jpg", "M4.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "brunososa@gmail.com", "Apartamento Amoblado de 4 Dormitorios", "Apartamento en primera Linea frente al Mar, sobre rambla de Trouville.", "Montevideo", 2300, 4, 4.7, "habilitado", "N1.jpg", "N2.jpg", "N3.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "brunososa@gmail.com", "Apartamento reciclado en La Comercial", "Apartamento reciclado: ambiente amplio con piso de cerámica; cocina y baño reciclados; patio", "Montevideo", 1000, 2, 3.9, "habilitado", "O1.jpg", "O2.jpg", "O3.jpg", "O4.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "brunososa@gmail.com", "Apartamento En Alquiler En Carrasco", "Amplio apartamento con una gran terraza con vista. Hall de entrada. Gran living comedor con terraza al frente. ", "Montevideo", 2400, 5, 3.3, "habilitado", "Q1.jpg", "Q2.jpg", "Q3.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "brunososa@gmail.com", "Muy Lindo Apartamento A Metros De Arocena", "Living comedor, Cocina semi integrada equipada, Baño completo, 1 Dormitorio.", "Montevideo", 1100, 2, 4.4, "habilitado", "R1.jpg", "R2.jpg", "R3.jpg", "R4.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "brunososa@gmail.com", "Excelente Apartamento En Alquiler", "Muy lindo apartamento en alquiler en Parque Miramar.", "Miramar", 2800, 9, 3.8, "deshabilitado", "S1.jpg", "S2.jpg", "S3.jpg", "S4.jpg", "S5.jpg")
    logicaDeNegocioAgregarInmueble(esPrecarga = true, "brunososa@gmail.com", "Alquiler Parque Miramar Con Vista Al Lago", "Alquiler casa sobre el lago Planta Baja living con estufa estar con estufa comedor todos los ambientes con vista al lago cocina definida", "Miramar", 3700, 7, 4.1, "deshabilitado", "T1.jpg", "T2.jpg", "T3.jpg", "T4.jpg")

}

// QUITAR FAKE PATH
function quitarFakePath(pNombreArchivo) {
    let nombreArchivo = pNombreArchivo;
    let iterador = pNombreArchivo.length;
    let posicionBarra = -1;
    let estaBarra = false;
    while (iterador > 0 && !estaBarra) {
        if (pNombreArchivo.charAt(iterador) === "\\" || pNombreArchivo.charAt(iterador) === "/") {
            estaBarra = true;
            posicionBarra = iterador;
        }
        iterador--;
    }
    if (estaBarra) {
        nombreArchivo = pNombreArchivo.substr(posicionBarra + 1);
    }
    return nombreArchivo;
}

///////////////////////////////////////////////////////////
// F01 - CAMBIO DE MONEDA - USUARIO: VISITSNTE Y HUESPED//
/////////////////////////////////////////////////////////

function cambioDeMoneda() {
    if (tipoUsuarioActual == "anfitrion" || tipoUsuarioActual == "Administrador") {
        tipoDeMoneda = "$"  // Para el admin y el anfitrion la moneda siempre es $
    } else {
        tipoDeMoneda = document.querySelector("#slcCombo").value; // Para el visitante y huesped la moneda es la seleccionada en el combo (por defecto al principio se le muestra en pesos)
    }
    mostrarPorCalificaciones()  // Cuando se cambia la cotizacion, todos los inmuebles se ordenan por calificacion
}

/////////////////////////////////////////////////////////////////
// F02 - ORDENADOR DE LISTADO POR PRECIO - VISITANTE Y HUESPED//
///////////////////////////////////////////////////////////////

function mostrarPorCalificaciones() { //  ordenar el listado de inmuebles por calificaciones

    let arrayFiltroInmueble = new Array(); // se clonó el array llamado “arrayFiltroInmuelbe” para no afectar el array original “listaInmuebles”.
    for (let i = 0; i <= listaInmuebles.length - 1; i++) {
        arrayFiltroInmueble.push(listaInmuebles[i]);
    }

    arrayFiltroInmueble.sort(criterioCalificacion)  // lo que da el criterio      
    document.querySelector("#mensajeOrdenadorPor").innerHTML = `Ordenado por calificacion.`;
    mostrarInmueble(arrayFiltroInmueble) // mostrar todos los inmuebles filtrados en la pagina
    document.querySelector("#txtBuscador").value = "" // Tambien remueve la busqueda 

    resetearGaleria() // Vuelven todas las galerias de fotos a la foto principal
}

//Filtros
function mostrarPrecioAscendente() { // Ordenar por precio de menor a mayor
    let arrayFiltroInmueble = new Array();
    for (let i = 0; i <= listaInmuebles.length - 1; i++) {
        arrayFiltroInmueble.push(listaInmuebles[i]);
    }
    arrayFiltroInmueble.sort(criterioAscendentePrecio);  // lo que da el criterio
    document.querySelector("#mensajeOrdenadorPor").innerHTML = `Ordenado por precio Ascendente.`;
    mostrarInmueble(arrayFiltroInmueble); // mostrar todos los inmuebles filtrados en la pagina

    resetearGaleria() 
}

function mostrarPrecioDescendente() { // Ordenar por precio de mayor a menor
    let arrayFiltroInmueble = new Array();
    for (let i = 0; i <= listaInmuebles.length - 1; i++) {
        arrayFiltroInmueble.push(listaInmuebles[i]);
    }
    arrayFiltroInmueble.sort(criterioDescendentePrecio);  // lo que da el criterio    
    document.querySelector("#mensajeOrdenadorPor").innerHTML = `Ordenado por precio Descendente.`;
    mostrarInmueble(arrayFiltroInmueble) // mostrar todos los inmuebles filtrados en la pagina

    resetearGaleria() 
}

// Criterios

function criterioCalificacion(pElementoA, pElementoB) {
    let orden = 0; // son iguales
    if (pElementoA.Calificacion < pElementoB.Calificacion) {
        orden = 1;
    }
    if (pElementoA.Calificacion > pElementoB.Calificacion) {
        orden = -1;
    }
    return orden;
}

function criterioAscendentePrecio(pElementoA, pElementoB) {
    let orden = 0;
    if (pElementoA.Precio > pElementoB.Precio) {
        orden = 1;
    }
    if (pElementoA.Precio < pElementoB.Precio) {
        orden = -1;
    }
    return orden;
}

function criterioDescendentePrecio(pElementoA, pElementoB) {
    let orden = 0;
    if (pElementoA.Precio < pElementoB.Precio) {
        orden = 1;
    }
    if (pElementoA.Precio > pElementoB.Precio) {
        orden = -1;
    }
    return orden;
}


////////////////////////////////////////////////////////////////
// F03 - Buscador de Inmuebles - USUARIO: VISITSNTE Y HUESPED//
//////////////////////////////////////////////////////////////

function buscador() {
    let busqueda = document.querySelector("#txtBuscador").value
    let busquedaSinEsp = busqueda.trim()
    let busquedaArreglada = todoMayusculasSinTildes(busquedaSinEsp)

    let priLetraBusqueda = busquedaArreglada.charAt(0);  // Primer letra de la busqueda
    let salida = ""

    if (busquedaArreglada.trim().length > 0) { // Valida que el usuario ingrese algo, de no ser asi no hace nada
        for (let x = 0; x < listaInmuebles.length; x++) { //Recorro los inmuebles 
            inmuebleX = listaInmuebles[x]
            if (inmuebleX.Estado == "habilitado") {
                tituloX = todoMayusculasSinTildes(inmuebleX.Titulo) // Me triago el titulo del inmueble
                ciudadX = todoMayusculasSinTildes(inmuebleX.Ciudad) // Me triago la ciudad del inmueble
                let encontroTitulo = false;  // Bandera para que cuando se encuentre coincidencia entre el titulo y la busqueda deje de seguir buscando

                let iTxt = 0;
                while (!encontroTitulo && iTxt < tituloX.length) { // Recorro el titulo, caracter por caracter
                    let letraTiTuto = tituloX.charAt(iTxt);
                    if (letraTiTuto === priLetraBusqueda) {  // Cuando la primer letra de la busqueda coincida con alguna letra del titulo entra
                        let encuentraTituo = true; // Bandera por si alguna letra del titulo no coincide con la busqueda
                        let iBusqueda = 0;
                        let iTxtBusqueda = iTxt; // iterador del titulo
                        while (iBusqueda < busquedaArreglada.length && iTxtBusqueda < tituloX.length && encuentraTituo) { // Al encontrar una coincidencia en la primer letra de la busqueda, recorre el titulo y la busqueda 
                            let letraTxtBusqueda = tituloX.charAt(iTxtBusqueda);
                            let letraBusqueda = busquedaArreglada.charAt(iBusqueda);
                            if (letraTxtBusqueda !== letraBusqueda) encuentraTituo = false; // Si alguna letra es diferente la bandera se le asigna false 
                            iBusqueda++;
                            iTxtBusqueda++;
                        }
                        if (encuentraTituo && iBusqueda === busquedaArreglada.length) { // Si la busqueda coincide con el titulo, arma el inmueble y las letras que coincidieron son iguales al largo de la palabra buscada
                            encontroTitulo = true;
                            salida += armarInmueble(inmuebleX)
                        }
                    }
                    iTxt++
                }
                if (!encontroTitulo) {  // Si la busqueda no coincide con el titulo, empieza a buscar coincidencias en la ciudad y si, si hay coincidencia con el titulo como el inmueble ya se mostro no es necesario buscar coincidencia con la ciudad
                    let encontroCiudad = false;  
                    let iTxtC = 0;
                    while (!encontroCiudad && iTxtC < ciudadX.length) {  
                        let letraCiudad = ciudadX.charAt(iTxtC);
                        if (letraCiudad === priLetraBusqueda) { 
                            let encuentraCiudad = true; 
                            let iBusqueda = 0;
                            let iTxtCBusqueda = iTxtC;
                            while (iBusqueda < busquedaArreglada.length && iTxtCBusqueda < ciudadX.length && encuentraCiudad) { 
                                let letraTxtBusqueda = ciudadX.charAt(iTxtCBusqueda);
                                let letraBusqueda = busquedaArreglada.charAt(iBusqueda);
                                if (letraTxtBusqueda !== letraBusqueda) encuentraCiudad = false; 
                                iBusqueda++;
                                iTxtCBusqueda++;
                            }
                            if (encuentraCiudad && iBusqueda === busquedaArreglada.length) { 
                                encontroCiudad = true;
                                salida += armarInmueble(inmuebleX)
                            }
                        }
                        iTxtC++
                    }
                }

            }
        }

        if (salida == "") { // Si no se encontro coincidencia en ningun titulo ni ciudad empieza a buscar por descripcion
            for (let x = 0; x < listaInmuebles.length; x++) {
                inmuebleX = listaInmuebles[x]
                if (inmuebleX.Estado == "habilitado") {
                    descripcionX = todoMayusculasSinTildes(inmuebleX.Descripcion)
                    let encontroDescripcion = false;

                    let iTxt = 0;
                    while (!encontroDescripcion && iTxt < descripcionX.length) {
                        let letraTxt = descripcionX.charAt(iTxt);
                        if (letraTxt === priLetraBusqueda) {
                            let encuentra = true;
                            let iBusqueda = 0;
                            let iTxtBusqueda = iTxt;
                            while (iBusqueda < busquedaArreglada.length && iTxtBusqueda < descripcionX.length && encuentra) {
                                let letraTxtBusqueda = descripcionX.charAt(iTxtBusqueda);
                                let letraBusqueda = busquedaArreglada.charAt(iBusqueda);
                                if (letraTxtBusqueda !== letraBusqueda) encuentra = false;
                                iBusqueda++;
                                iTxtBusqueda++;
                            }
                            if (encuentra && iBusqueda === busquedaArreglada.length) {
                                encontroDescripcion = true;
                                salida += armarInmueble(inmuebleX)
                            }
                        }
                        iTxt++
                    }
                }
            }

        }
        if (salida == "") {
            salida = "No existen resultados para su búsqueda"
        }

        document.querySelector("#divMostrarInmuebles").innerHTML = salida;
        eventoClickVerMas() //Agrega el evento click a todos los ver mas

        resetearGaleria() 
    }
}

function todoMayusculasSinTildes(pTexto) { //Convierte el texto en mayusculas y le saco los tildes
    pTextoMay = pTexto.toUpperCase()
    let palabraX = ""
    for (let i = 0; i < pTextoMay.length; i++) {
        caracterX = pTextoMay.charAt(i)
        switch (caracterX) {
            case "Á":
                caracterX = "A"
                break;
            case "É":
                caracterX = "E"
                break;
            case "Í":
                caracterX = "I"
                break;
            case "Ó":
                caracterX = "O"
                break;
            case "Ú":
                caracterX = "U"
                break;
        }
        palabraX = palabraX + caracterX
    }
    return palabraX
}

////////////////////////////////////////////////////////////
// F04 - REGISTRARSE EN LA APLICACION - USUARIO VISITANTE//
//////////////////////////////////////////////////////////

function formularioDeRegistroUsuario() {
    let tipoUsuario = "huesped"  // El unico que se puede registrar solo es el huesped
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    let correo = document.querySelector("#txtCorreo").value;
    let celular = document.querySelector("#txtCelular").value;
    let contrasena = document.querySelector("#txtContrasena").value;
    let contrasena2 = document.querySelector("#txtContrasena2").value;

    logicaNegocioAgregarPersona(esPrecarga = false, tipoUsuario, nombre, apellido, correo, celular, contrasena, contrasena2)
}

function logicaNegocioAgregarPersona(pEsPrecarga, pTipoUsuario, pNombre, pApellido, pCorreo, pNumCelular, pContrasena1, pContrasena2, pReservas) {
    let mensaje = "";
    // VALIDACIONES
    let nombreValido = validarNombreOApellido(pNombre);
    let apellidoValido = validarNombreOApellido(pApellido);
    let correoValido = validarCorreo(pCorreo);
    let celValido = validarNumCelular(pNumCelular);
    let contrasenaValido = validarContraseña(pContrasena1, pContrasena2)

    if (nombreValido && apellidoValido && correoValido && celValido && contrasenaValido) {
        let usuario = new Usuario();
        usuario.TipodeUsuario = pTipoUsuario;
        usuario.Nombre = pNombre.trim();
        usuario.Apellido = pApellido.trim();
        usuario.Correo = pCorreo.trim();
        usuario.Celular = parseInt(pNumCelular);
        usuario.Contrasena = pContrasena1.trim();
        if (pReservas) { usuario.Reservas = pReservas }  // Array con las reservas, solo para los usuarios pre cargados, el arrays para los nuevos usuarios se crea en el constructor
        listaUsuarios.push(usuario);
        mensaje = `Datos ingresados correctamente (OK).`;

    } else {
        mensaje = `Todos los datos son obligatorios. Verificar también si todos los datos se ingresaron correctamente.`;
    }
    if (!pEsPrecarga) { // Si no es precarga se le muestra el mensaje al usuario
        if (pTipoUsuario === "anfitrion") {
            document.querySelector("#divRegistrarAnfi").innerHTML = mensaje; // Mensaje al anfitrion
        } 
        if (pTipoUsuario === "huesped") {
            document.querySelector("#divRegistrarse").innerHTML = mensaje; // Mensaje al anfitrion
        }
    }
}

//Validaciones nombre si letras mas de 2 chars., no es numero, empieza con el primer char. Uppercase
function validarNombreOApellido(pNombre) {
    let nombreValido = false;
    let nombreSinEsp = pNombre.trim()
    let noTieneNumero = validarNingunCaracterEsNum(nombreSinEsp)
    if (nombreSinEsp.length >= 2 && nombreSinEsp.charAt(0) === nombreSinEsp.toUpperCase().charAt(0) && noTieneNumero) {
        nombreValido = true;
    }
    return nombreValido;
}

function validarNingunCaracterEsNum(busqueda) { // Valida que ningun caracter es numero
    noNumero = true
    for (let i = 0; i < busqueda.length; i++) {
        let caracterX = busqueda.charAt(i)
        if (!isNaN(caracterX)) {
            noNumero = false
        }
    }
    return noNumero
}

// Validacion ""@""."" y que no haya un usuario registrado ya con ese correo
function validarCorreo(pCorreo) {
    let correoValido = false;
    let hayArroba = false;
    let posicionArroba = ""
    let correoSinEsp = pCorreo.trim()
    if (correoSinEsp.length >= 2) {
        for (let i = 1; i < correoSinEsp.length && !hayArroba; i++) { // Empieza en 1 por que el correo no puede empezar con @
            let caracterX = correoSinEsp.charAt(i);
            if (caracterX == "@") {
                hayArroba = true
                posicionArroba = i  // Para conservar la ubicacion del @ y validar que hay un . despues del arroba, y tambien que haya algo en medio de ellos dos
            }
        }

        let puntoCOM = false
        for (let i = posicionArroba + 2; i < correoSinEsp.length - 1 && !puntoCOM; i++) { // Comienza un caracter más despues del @ desde 
            let caracterX = correoSinEsp.charAt(i);
            if (caracterX == ".") {
                puntoCOM = true
            }
        }

        let correoRepetido = false
        for (let i = 0; i < listaUsuarios.length && !correoRepetido; i++) { // Recorremos el arrays de usuarios buscando que no hayan otro usuario con ese correo
            let usuarioX = listaUsuarios[i]
            let correoX = usuarioX.Correo
            if (correoX == correoSinEsp) {
                correoRepetido = true
            }
        }

        if (puntoCOM && hayArroba && !correoRepetido) {
            correoValido = true
        }

    }
    return correoValido;
}

//Validaciones numero de celcular si se agrego un numero, que sea un numero, y cantidad de digitos 8
function validarNumCelular(pNumCelular) {
    let numCelularValido = false
    let celularSinEsp = pNumCelular.trim()
    if (!isNaN(celularSinEsp) && celularSinEsp.length == 8) {
        numCelularValido = true
    }
    return numCelularValido
}

//Validaciones contraseña es de mayor o igual a 6 caracteres, que contraseña 1 y contraseña 2 sea iguales. que contenga Mausculas y numeros.
function validarContraseña(pConstraseña1, pConstraseña2) {
    let contraseña1SinEsp = pConstraseña1.trim()
    let contraseña2SinEsp = pConstraseña2.trim()
    let contraseñaValida = false
    let caracteresMayor6 = contraseña1SinEsp.length >= 6
    let contraseñasIguales = contraseña1SinEsp === contraseña2SinEsp

    let contieneMayuscula = false
    for (let i = 0; i < contraseña1SinEsp.length; i++) { //Recorre la contraseña buscando una mayuscula
        let caracterX = contraseña1SinEsp.charAt(i)
        if (caracterX == caracterX.toUpperCase() && isNaN(caracterX)) {
            contieneMayuscula = true
        }
    }

    let contieneNumero = false

    for (let i = 0; i < contraseña1SinEsp.length; i++) { //Recorre la contraseña buscando un numero
        let caracterX = contraseña1SinEsp.charAt(i)
        if (!isNaN(caracterX)) {
            contieneNumero = true
        }
    }

    if (caracteresMayor6 && contraseñasIguales && contieneMayuscula && contieneNumero) {
        contraseñaValida = true
    }
    return contraseñaValida
}


function menuRegistrarse() {
    ocultarCosasIniciarSesion() // Si antes se mostro el formulario para inicar sesion se oculta

    mostrarCosasRegistrarse()
    let mostrarFormularioRegistrarse = `
    <div class="registrarse visitante"> 
        <h3>Registrarse en la aplicación</h3>
        <label for="txtNombre">Nombre:</label>
        <input type="text" id="txtNombre" placeholder="2 letras min. (1° letra mayúscula)"> <br>
        <label for="txtApellido">Apellido:</label>
        <input type="text" id="txtApellido" placeholder="2 letras min. (1° letra mayúscula)"> <br>
        <label for="txtCorreo">Correo:</label>
        <input type="text" id="txtCorreo" placeholder="*@*.*"> <br>
        <label for="txtCelular">Celular:</label>
        <input type="text" id="txtCelular" placeholder="8 digitos"> <br>
        <label for="txtContrasena">Contrasena:</label>
        <input type="text" id="txtContrasena" placeholder="6 caracteres (1 número y 1 may.)"> <br>
        <label for="txtContrasena2">Vuelva a ingresar la contraseña:</label>
        <input type="text" id="txtContrasena2"> <br>
        <div id="divRegistrarse"></div>
    </div>`

    document.querySelector("#divContenido").innerHTML = mostrarFormularioRegistrarse
}


//////////////////////////////////////////////////
// F05 - INGRESAR AL SITEMA - USUARIO VISITANTE//
////////////////////////////////////////////////

function iniciarSesion() {
    let correo = document.querySelector("#txtCorreoIS").value
    let contrasena = document.querySelector("#txtContrasenaIS").value

    logicaNegocioIniciarSesion(correo, contrasena)
}

let usuarioAhora = "" // Variable global del usuario logeado actualmente

function logicaNegocioIniciarSesion(pCorreo, pContrasena) {
    let mensajeInicioSesion = `El correo o la contraseña ingresada no es valido`
    let usuarioRegistrado = false
    for (let i = 0; i < listaUsuarios.length && !usuarioRegistrado; i++) {
        let usuarioX = listaUsuarios[i]
        let correoX = usuarioX.Correo
        let contrasenaX = usuarioX.Contrasena
        let tipoUsuario = usuarioX.TipodeUsuario

        if (pCorreo.trim() == correoX && pContrasena.trim() == contrasenaX) {
            usuarioRegistrado = true
            mensajeInicioSesion = `Iniciastes sesión correctamente como usuario ${tipoUsuario}`
            correoUsuarioActual = correoX // Para saber que usuario esta logeado
            interfacesUsuario(tipoUsuario)

            usuarioAhora = usuarioX // Asigno ese usuario a la varibale global de arriba para manejarlo mejor y agregarles sus reservas
        }
    }
    document.querySelector("#divInicioDeSesion").innerHTML = mensajeInicioSesion
}

function interfacesUsuario(pTpioUsuario) {
    ocultarCosasVisitante()
    document.querySelector("#txtBuscador").value = ""  // Limpia el campo de texto del buscador 
    if (pTpioUsuario == "Administrador") {
        tipoUsuarioActual = "Administrador" // Para mostrar siempre los precios en $ para el administrador y el anfitrion
        cargaInmueblesAdmin() // Muestra la tabla de reporte
        mostrarCosasAdministrador()

    } else {
        if (pTpioUsuario == "anfitrion") {
            tipoUsuarioActual = "anfitrion" // Para mostrar siempre los precios en $ para el administrador y el anfitrion
            mostrarInmueblesAnfitrion()
            mostrarCosasAnfitrion()  // Va de ultimo para que aparezca el boton de desabilitar y habilitar ya que cuando se agregan se crean con display none

        } else {
            tipoUsuarioActual = "huesped"
            mostrarCosasHuesped()
            mostrarPorCalificaciones()
        }
    }

    // Parrafo informativo en la esquina superiror izquierda con el tipo de usuario y el correo 
    document.querySelector("#tipoUsuarioActual").innerHTML = `<p style="color: chartreuse;"> ${pTpioUsuario}, Correo: ${correoUsuarioActual} </p>`
    let listaElementosDOM = document.querySelectorAll(".tipoUsuarioActual")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'block';
    }
}

function formularioIniciarSesion() {
    ocultarCosasRegistrarse() // Oculta el formulario registrarse por si se estaba mostrando
    mostrarCosasIniciarSesion()

    let mostrarFormularioIniciarSesion = ` 
    <div class="iniciarSesion visitante">
        <h3>Ingresar al sistema</h3>
        <label for="txtCorreo">Correo electrónico</label>
        <input type="text" id="txtCorreoIS"> <br>
        <label for="txtContrasena">Contraseña</label>
        <input type="text" id="txtContrasenaIS"> <br>
        <div id="divInicioDeSesion">  </div>
    </div> `

    document.querySelector("#divContenido").innerHTML = mostrarFormularioIniciarSesion
}

/////////////////////////////////////////////////////////
/////// F06 - BOTON PARA VER MAS - USUARIO HUESPED//////
////////////////////////////////////////////////////////

// Le agrego el evento click a cada clase ver-mas
function eventoClickVerMas() {
    let listaVerMasDOM = document.querySelectorAll(".ver-mas");
    for (let i = 0; i < listaVerMasDOM.length; i++) {
        // se asigna evento click a cada boton
        listaVerMasDOM[i].addEventListener("click", verMasInmueble);
    }
}


function verMasInmueble() {
    let idVerMas = this.getAttribute("id")  // Me traigo el id del boton vermas

    // Sacarle el texto y quedarme solo con el numero, para luego encontrar el divVerMas de ese inmueble
    let num = ""
    for (let i = 0; i < idVerMas.length; i++) {
        let caracter = idVerMas.charAt(i)
        if (!isNaN(caracter)) { // Entra solo cunado es numero
            num = num + caracter // Voy concatenando los numeros
        }
    }

    let reservo = false
    let reservas = usuarioAhora.Reservas // Reservas del usuario logeado
    for (let i = 0; i < reservas.length && !reservo; i++) { // Busca si el huesped ya tiene reservado ese inmueble
        if (reservas[i] == num) {
            reservo = true
        }
    }

    if (reservo) { // Si ya lo tiene reservado
        salidaVM = `
        <input class="fotoAnteriror" id="btnBackward${num}" type="button" value=" << " />
        <input class="fotoSiguiente" id="btnForward${num}" type="button" value=" >> " />
        <br> <p> Usted ya reservo este inmueble </p>`
    } else { // Si no lo reservo
        salidaVM = `
        <input class="fotoAnteriror" id="btnBackward${num}" type="button" value=" << " />
        <input class="fotoSiguiente" id="btnForward${num}" type="button" value=" >> " />

        <div id="reserva${num}">
            <br><label for="cantNochesReservar"> Cantidad de noches a resevar:</label>
            <input id="cantNochesReservar${num}" type="text">
            <input id="btnReservar${num}" class="claseReserva" type="button" value="Reservar">
            <div id="reservar${num}"> </div>
        </div>`
    }

    document.querySelector(`#divVerMas${num}`).innerHTML = salidaVM

    let listaReservasDOM = document.querySelectorAll(".claseReserva");
    for (let i = 0; i < listaReservasDOM.length; i++) {
        // se asigna evento click a cada boton
        listaReservasDOM[i].addEventListener("click", reservarInmueble);
    }

    let listaFotoSiguienteDOM = document.querySelectorAll(".fotoSiguiente");
    for (let i = 0; i < listaFotoSiguienteDOM.length; i++) {
        // se asigna evento click a cada boton
        listaFotoSiguienteDOM[i].addEventListener("click", mostrarFotoSiguiente);
    }

    let listaFotoAnteriorDOM = document.querySelectorAll(".fotoAnteriror");
    for (let i = 0; i < listaFotoAnteriorDOM.length; i++) {
        // se asigna evento click a cada boton
        listaFotoAnteriorDOM[i].addEventListener("click", mostrarFotoAnterior);
    }

}

///////////////////////////////////////////////////////////////////////
/////// F07 - BOTONES PARA CAMBIAR DE IMAGENES - USUARIO HUESPED//////
/////////////////////////////////////////////////////////////////////

function mostrarFotoSiguiente() {
    let btnSiguiente = this.getAttribute("id") // Me traigo el id del boton 
    let num = ""
    for (let i = 0; i < btnSiguiente.length; i++) {
        let caracter = btnSiguiente.charAt(i)
        if (!isNaN(caracter)) {
            num = num + caracter // Busco el numero del boton lo que me va a indicar en cual inmueble se desea cambiar la foto
        }
    }

    let inmuebleFotos = ""
    for (let i = 0; i < listaInmuebles.length; i++) { // Recorro los inmuebles
        let inmuebleX = listaInmuebles[i]
        if (inmuebleX.Nro == num) { // Busco el inmueble que coincide con el numero de ID
            inmuebleFotos = inmuebleX // Igualo el inmueble encontrado con la variable inmueble fotos 
        }
    }

    fotoActual = inmuebleFotos.FotoMostradaActualmente
    if (fotoActual < inmuebleFotos.Fotos.length - 1) { // que la foto actual no sea mayor a la ultima foto del inmueble

        inmuebleFotos.FotoMostradaActualmente++
        document.querySelector(`#divFotos${num}`).innerHTML = `<img src="fotos/${inmuebleFotos.Fotos[fotoActual + 1]}">` // Restamos uno para mostrar la foto siguiente
    }
}


function mostrarFotoAnterior() {
    let btnAnterior = this.getAttribute("id")
    let num = ""
    for (let i = 0; i < btnAnterior.length; i++) {
        let caracter = btnAnterior.charAt(i)
        if (!isNaN(caracter)) {
            num = num + caracter
        }
    }

    let inmuebleFotos = ""
    for (let i = 0; i < listaInmuebles.length; i++) {
        let inmuebleX = listaInmuebles[i]
        if (inmuebleX.Nro == num) {
            inmuebleFotos = inmuebleX
        }
    }

    fotoActual = inmuebleFotos.FotoMostradaActualmente
    if (fotoActual > 0) { // que la foto actual no sea menor a la primer foto del inmueble

        inmuebleFotos.FotoMostradaActualmente--
        document.querySelector(`#divFotos${num}`).innerHTML = `<img src="fotos/${inmuebleFotos.Fotos[fotoActual - 1]}">` // Restamos uno para mostrar la foto anterior
    }
}


function resetearGaleria() {
    // Resetea el lugar de las fotos en la galeria
    for (let i = 0; i < listaInmuebles.length; i++) {
        let inmuebleX = listaInmuebles[i]
        inmuebleX.FotoMostradaActualmente = 0
    }
}

////////////////////////////////////////////////////////////////////////////
/////// F08 - INGRESAR CANTIDAD DE NOCHES A VER MAS  - USUARIO HUESPED//////
////////////////////////////////////////////////////////////////////////////


function reservarInmueble() {
    let botonR = this.getAttribute("id") // Me traigo el id del boton Reservar

    let num = ""
    for (let i = 0; i < botonR.length; i++) {
        let caracter = botonR.charAt(i)
        if (!isNaN(caracter)) { // Entra solo cunado es numero
            num = num + caracter // Voy concatenando los numeros
        }
    }
    // El numero es el numero del inmueble que va a reservar


    let noches = document.querySelector(`#cantNochesReservar${num}`).value

    if (noches > 0 && !isNaN(noches)) { //Validación

        let precioTotal = listaInmuebles[num].Precio * noches  // Con el numero de antes que es el numero del inmueble, hallo el precio de ese inmueble y lo multiplico por las noches
        if (tipoDeMoneda === "u$s") {
            precioTotal = parseInt(precioTotal / cotizacion) // Si es dolar se divide por la cotizacion
        }

        salidaR = `Precio total: ${tipoDeMoneda} ${precioTotal} <br> <input id="btnConfirmar${num}" class="claseConfirmar" type="button" value="Confirmar"> <br>` //Boton para confirmar compra

        document.querySelector(`#reservar${num}`).innerHTML = salidaR

        let listaElementosDOM = document.querySelectorAll(".claseConfirmar"); //Le agrega el evento click al confimrar
        for (let i = 0; i < listaElementosDOM.length; i++) {
            // se asigna evento click a cada boton
            listaElementosDOM[i].addEventListener("click", confirmarCompra);
        }

    } else {
        document.querySelector(`#reservar${num}`).innerHTML = "Ingrese un número"
    }
}


function confirmarCompra() {
    let botonC = this.getAttribute("id") // Me traigo el id del boton Confirmar
    let num = ""
    for (let i = 0; i < botonC.length; i++) {
        let caracter = botonC.charAt(i)
        if (!isNaN(caracter)) { // Entra solo cunado es numero
            num = num + caracter // Voy concatenando los numeros
        }
    }

    let salidaC = `Compra realizada con éxito`
    document.querySelector(`#reserva${num}`).innerHTML = salidaC
    document.querySelector("#divMensajeReservas").innerHTML = "" // Quita el mensaje de que no tiene reservas, si el usuario dio click a sus reservas cuando no tenia reservas

    usuarioAhora.Reservas.push(num) // Agrego el inmueble a las reservas del usaurio actual
}

////////////////////////////////////////////////////////////////////////////////
/////// F09 - BOTON PARA ACCEDER A SUS PROPIAS RESERVAS - USUARIO HUESPED //////
///////////////////////////////////////////////////////////////////////////////

function tablaReservas() {
    let tieneReservas = false
    for (let i = 0; i < usuarioAhora.Reservas.length && !tieneReservas; i++) { // Recorre las reservas del usuario en caso que las haya
        let inmuebleReservado = usuarioAhora.Reservas[i]

        for (let i = 0; i < listaInmuebles.length; i++) { // Recorre todos los inmuebles y busca si el inmueble reservado esta habilitado  
            let inmuebleX = listaInmuebles[i]
            if (inmuebleX.Nro == inmuebleReservado && inmuebleX.Estado == "habilitado") {
                tieneReservas = true
            } 
        }
    }

    if (tieneReservas) { // Valida que tenga reservas
        document.querySelector("#divMensajeReservas").innerHTML = "" // Quita el mensaje de que no tiene reservas
        let salidasReservas = `<table border="1px"> <tr> <td>Foto</td> <td>Titulo</td> <td> Calificar </td> </tr> `
        for (let i = 0; i < usuarioAhora.Reservas.length; i++) { //Recorro todas las reservas del usuario actual
            let reservaX = usuarioAhora.Reservas[i]

            for (let i = 0; i < listaInmuebles.length; i++) { // Recorro todos los inmuebles para encontrar los inmuebles que el usuario reservo
                let inmuebleX = listaInmuebles[i]
                if (inmuebleX.Estado == "habilitado") {
                    if (inmuebleX.Nro == reservaX) {

                        let inmuebleYaCalificado = false
                        if (usuarioAhora.InmueblesCalificados !== undefined) {  // Si hay alguna calificacion entra y sino no
                            for (let i = 0; i < usuarioAhora.InmueblesCalificados.length && !inmuebleYaCalificado; i++) { // Reccore todas las califcaciones del inmueble
                                if (usuarioAhora.InmueblesCalificados[i] == inmuebleX.Nro) {
                                    inmuebleYaCalificado = true // Si ya lo califico devuelve true
                                }
                            }
                        }
                        let botonCalificar = ""
                        if (!inmuebleYaCalificado) { // No lo califico
                            botonCalificar = `<label for="calificarInmueble"> Calificar Inmueble:</label>
                        <input id="txtCalificaion${inmuebleX.Nro}" type="text" placeholder="Califica del 1 al 5"> <input class="btnCalificar" id="btnCalificarInmueble${inmuebleX.Nro}" type="button" value="Calificar"></input>`
                        } else {  // Lo califico
                            botonCalificar = `<p> Usted ya califico este inmueble. </p>`
                        }

                        // Se pone foto[0] para mostrar solo la primer foto del inmueble
                        salidasReservas += `
                        <tr>
                            <td><img src="fotos/${inmuebleX.Fotos[0]}" style="width: 150px; height: 100px;"></td> 
                            <td>${inmuebleX.Titulo}</td>
                            <td> 
                                ${botonCalificar}
                                <div id="divCalificacion${inmuebleX.Nro}"> </div>
                            </td>
                        </tr> `

                    }
                }
            }

        }
        salidasReservas += ` </table> <br> <input type="button" id="btnHome" value="Volver al home">`

        document.querySelector("#divMostrarInmuebles").innerHTML = salidasReservas


        document.querySelector("#btnHome").addEventListener("click", volverHome) // Le agrego el evento click al boton de volver al home

        ocultarCosasBuscadorYOrdenamiento() // Lo oculto para que solo muestre la tabla y el boton de volver al home y tambien para que no haya errores
        ocultarCosasMenuDeNavegacio()

        let listaElementosDOM = document.querySelectorAll(".btnCalificar"); //Le agrega el evento click al calificar
        for (let i = 0; i < listaElementosDOM.length; i++) {
            // se asigna evento click a cada boton
            listaElementosDOM[i].addEventListener("click", calificar);
        }

        resetearGaleria() 
    } else {
        document.querySelector("#divMensajeReservas").innerHTML = `<p> Todavía no ha hecho ninguna reserva </p>`
    }

}


function volverHome() { // Muestra todo lo que debe estar en la pagina principal
    mostrarCosasBuscadorYOrdenamiento()
    mostrarCosasMenuDeNavegacio()
    mostrarPorCalificaciones()
    salidasReservas = "" // Vacia la tabla
}

/////////////////////////////////////////////////////////////////////////
/////// F10 - BOTON PARA INGRESAR SU CALIFICACION - USUARIO HUESPED //////
/////////////////////////////////////////////////////////////////////////


function calificar() {
    let btnCalificar = this.getAttribute("id") // Trae el id del boton calificar
    let num = ""
    for (let i = 0; i < btnCalificar.length; i++) {
        let caracter = btnCalificar.charAt(i)
        if (!isNaN(caracter)) {
            num = num + caracter // El num es igual al numero del Inmueble
        }
    }

    let calificacion = document.querySelector(`#txtCalificaion${num}`).value // Trae la calificacion del campo de texto
    if (!isNaN(calificacion) && calificacion >= 1 && calificacion <= 5) { // Validacion

        let inmuebleCalificado = ""
        let encontroInmueble = false
        for (let i = 0; i < listaInmuebles.length && !encontroInmueble; i++) { // Recorre todos los inmuebles hasta encontrar el inmueble que se va a calificar
            let inmuebleX = listaInmuebles[i]
            if (inmuebleX.Nro == num) { // Cuando el inmueble coincide con el numero del inmueble
                inmuebleCalificado = inmuebleX
            }
        }

        calificacion = parseInt(calificacion) // antes trajo la calificacion como string asi que la paso a numero
        //Calculo la nueva calificacion
        let nuevaCalificacion = (((inmuebleCalificado.Calificaciones * inmuebleCalificado.Calificacion) + calificacion) / (inmuebleCalificado.Calificaciones + 1))
        // EJEMPLO =                    tiene 5 calificaciones       * promedio de calificaciones 4.5 + calificacion nueva 4  /   tiene 5 calificaciones     + 1  por la nueva calificacion

        inmuebleCalificado.Calificacion = nuevaCalificacion.toFixed(1)  // Cargo la nueva calificacion al objeto del inmueble

        inmuebleCalificado.Calificaciones++ // sumo uno al numero de calificaciones del inmueble

        usuarioAhora.InmueblesCalificados.push(num) // Le agrego el inmueble a los inmuebles calificados del usuario actual, para que no vuelva a calificar el mismo inmueble

        tablaReservas() //Actualiza la tabla
    } else {
        document.querySelector(`#divCalificacion${num}`).innerHTML = "Ingrese un número entre 1 y 5"
    }
}


//////////////////////////////////////////////////////////////////////////////////
/////// F11 - CIERRE DE SESION - USUARIO HUESPED, ADMINISTRADOR Y ANFITRION //////
//////////////////////////////////////////////////////////////////////////////////

function cerrarSesion() {
    tipoUsuarioActual = "visitante" // Al cerrar sesion el usuario pasa a ser un visitante
    correoUsuarioActual = "" // Borra la variable que indica que usuario esta logeado
    usuarioAhora = "" // Vacia la variable del objeto de la lista de usuarios

    // Oculta el parrafo del usuario actual y el correo logeado
    let listaElementosDOM = document.querySelectorAll(".tipoUsuarioActual")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'none';
    }

    
    resetearGaleria() // Resetea el lugar de las fotos en la galeria 

    ocultarCosasRegistrarInmueble()
    ocultarCosasAnfitrion()
    ocultarCosasHuesped()
    mostrarCosasVisitante()
    ocultarCosasAdministrador()
    ocultarCosasIniciarSesion()
    ocultarCosasRegistrarse() // Oculta el boton de registrar anfitrion por su el administrador mostro el formulario de registrar anfitrion
    ocultarCosasRegistrarAnfi()
    cambioDeMoneda() // Al cerrar sesion muestra los precios en la moneda que esta el combo
    
    document.querySelector("#txtBuscador").value = ""  // Limpia el campo de texto del buscador 
    document.querySelector("#divMensajeReservas").innerHTML = "" // Limpia el mensaje de las reservas del huesped
    document.querySelector("#txtCoti").value = "" // Limpia campo texto de cambiar cotizacion (administrador) 
    document.querySelector("#pCarga").innerHTML = "" // Limpia el mensaje de cotizacion (administrador) 
    document.querySelector("#txtDesde").value = "" // Limpia el campo de texto desde
    document.querySelector("#txtHasta").value = "" // Limpia el campo de texto hasta
    document.querySelector("#pReporte").innerHTML = "" // Limpia el mensaje del reporte
}

/////////////////////////////////////////////////////////////////////////////////////////
/////// F12 - BOTON PARA HABILITAR Y DESHABILITAR UN INMUEBLE  - USUARIO ANFITRION //////
////////////////////////////////////////////////////////////////////////////////////////


function eventoClickBotonD() {  // Agrega el evento click a todos los botones de habilitar y deshabilitar
    let listaElementosDOM = document.querySelectorAll(".botonD");
    for (let i = 0; i < listaElementosDOM.length; i++) {
        // se asigna evento click a cada boton
        listaElementosDOM[i].addEventListener("click", deshabilitarHabilitarInmueble);
    }
}

function deshabilitarHabilitarInmueble() {
    let idBoton = this.getAttribute("id")
    
    let num = ""
    for (let i = 0; i < idBoton.length; i++) {
        let caracter = idBoton.charAt(i)
        if (!isNaN(caracter)) { // Entra solo cunado es numero
            num = num + caracter // Voy concatenando los numeros
        }
    }

    let encontroInm = false
    for (let i = 0; i < listaInmuebles.length && !encontroInm; i++) {
        let inmuebleX = listaInmuebles[i]
        if (inmuebleX.Nro == num) {
            if (inmuebleX.Estado == "habilitado") { //Si el inmueble esta habilitado lo deshabilita y viceversa
                inmuebleX.Estado = "deshabilitado"
            } else {
                inmuebleX.Estado = "habilitado"
            }
            encontroInm = true
        }
    }
    mostrarInmueblesAnfitrion() // Para mostrar de vuelta los inmuebles pero con el boton cambiado
    mostrarCosasAnfitrion() // Para sacarle el display: none a los inmuebles recientemente mostrados
}

//////////////////////////////////////////////////////////////////////////////////
/////// F13 - REGISTRAR UN INMUEBLE - USUARIO  ANFITRION //////
//////////////////////////////////////////////////////////////////////////////////


// MANDAR FORMULARIO AL HTML
function mostrarFormularioInmueble() {

    mostrarCosasRegistrarInmueble()
    let formularioInmueble = ""
    formularioInmueble = ` 
    <h3> Registrar un inmueble </h3> <label for="txtTitulo">Título:</label>
    <input type="text" id="txtTitulo" placeholder="2 caracteres mínimo (1° may.)"> <br>
    <label for="txtDescripcion">Descripción:</label>
    <input type="text" id="txtDescripcion" placeholder="10 caracteres mínimo (1° may.)"> <br>
    <label for="txtCiudad">Ciudad:</label>
    <input type="text" id="txtCiudad" placeholder="2 caracteres mínimo (1° may.)"> <br>
    <label for="txtPrecio">Precio por noche:</label>
    <input type="text" id="txtPrecio"> <br>
    <label for="txtFotos">Ingrese al menos 3 fotos:</label> <br>
    <input type="file" id="txtFoto1"> <br>
    <input type="file" id="txtFoto2"> <br>
    <input type="file" id="txtFoto3"> <br>
    <input type="file" id="txtFoto4"> <br>
    <input type="file" id="txtFoto5"> <br>
    <div id="divFormularioInmueble"> </div>`

    document.querySelector("#divContenido").innerHTML = formularioInmueble
}


function formularioDeRegistroInmueble() {
    let titulo = document.querySelector("#txtTitulo").value;
    let descripcion = document.querySelector("#txtDescripcion").value;
    let ciudad = document.querySelector("#txtCiudad").value;
    let precio = document.querySelector("#txtPrecio").value;
    let correoAnfi = correoUsuarioActual
    let esPrecarga = false // No es precarga 
    let calificaciones = 0 // Cuando se crea un inmueble no tine ninguna calificacion
    let calificacion = 0

    let foto1 = quitarFakePath(document.querySelector("#txtFoto1").value)
    let foto2 = quitarFakePath(document.querySelector("#txtFoto2").value)
    let foto3 = quitarFakePath(document.querySelector("#txtFoto3").value)
    let foto4 = quitarFakePath(document.querySelector("#txtFoto4").value)
    let foto5 = quitarFakePath(document.querySelector("#txtFoto5").value)

    logicaDeNegocioAgregarInmueble(esPrecarga, correoAnfi, titulo, descripcion, ciudad, precio, calificaciones, calificacion, estado = "habilitado", foto1, foto2, foto3, foto4, foto5)
}


function logicaDeNegocioAgregarInmueble(pEsPrecarga, pCorreoAnfi, pTitulo, pDescripcion, pCiudad, pPrecio, pCalificaciones, pCalificacion, pEstado, pFoto1, pFoto2, pFoto3, pFoto4, pFoto5) {
    let mensaje = ""
    let tituloValido = validarTituloOCiudad(pTitulo);
    let DescripcionValida = validarDescripcion(pDescripcion);
    let ciudadValida = validarTituloOCiudad(pCiudad);
    let precioValido = validarPrecio(pPrecio);
    let fotoValidada = validarFotos(pFoto1, pFoto2, pFoto3, pFoto4, pFoto5)

    if (tituloValido && DescripcionValida && ciudadValida && precioValido && fotoValidada) {

        let inmuebleX = new Inmueble();
        inmuebleX.Titulo = pTitulo.trim();
        inmuebleX.Descripcion = pDescripcion.trim();
        inmuebleX.Ciudad = pCiudad.trim();
        inmuebleX.Precio = parseInt(pPrecio);
        inmuebleX.Anfitrion = pCorreoAnfi;

        inmuebleX.Nro = NroInmuebles;
        inmuebleX.Calificaciones = pCalificaciones;
        inmuebleX.Calificacion = pCalificacion;

        if (pEstado == "habilitado") {
            inmuebleX.Estado = "habilitado"
        } else {
            inmuebleX.Estado = "deshabilitado"
        }

        let listaFotos = new Array()
        // Si no es foto no lo agrega
        if (pFoto1 !== "" && pFoto1 !== undefined) { listaFotos.push(pFoto1) } // Undefined cuando se hace la precarga y no tiene 5 fotos y "" cuando se registra un inmueble y no tiene 5 fotos
        if (pFoto2 !== "" && pFoto2 !== undefined) { listaFotos.push(pFoto2) }
        if (pFoto3 !== "" && pFoto3 !== undefined) { listaFotos.push(pFoto3) }
        if (pFoto4 !== "" && pFoto4 !== undefined) { listaFotos.push(pFoto4) }
        if (pFoto5 !== "" && pFoto5 !== undefined) { listaFotos.push(pFoto5) }

        inmuebleX.Fotos = listaFotos

        listaInmuebles.push(inmuebleX);
        mensaje = `Datos ingresados correctamente (OK).`;
        NroInmuebles++ // Va sumando 1 cada vez que se registra un inmueble
        mostrarInmueblesAnfitrion()  // Para mostrar solo los inmuebles de ese anfitrion
        if (tipoUsuarioActual == "anfitrion") {
            mostrarCosasAnfitrion() 
        }
        
    } else {
        mensaje = `Todo los datos son obligatorios. Verificar tambien si datos se ingrese correctamente.`;
    }

    if (!pEsPrecarga) { // Si, no es precarga le muestra un mensaje al usuario 
        document.querySelector("#divFormularioInmueble").innerHTML = mensaje;
    }
}

//Validacion del titulo o ciudad que se haya ingresado mayor a 2 caracteres y que no sea un numero.
function validarTituloOCiudad(pTexto) {
    let tituloValido = false;
    let textoSinEsp = pTexto.trim()
    if (textoSinEsp.trim().length > 2 && isNaN(textoSinEsp) && textoSinEsp.charAt(0) === textoSinEsp.toUpperCase().charAt(0)) {
        tituloValido = true;
    }
    return tituloValido;
}

// Validacion de la descripcion, mas de 10 caracteres, que no sea numero y que el primer caracter sea mayuscula
function validarDescripcion(pDescripcion) {
    let descripcionValida = false;
    let descripcionSinEsp = pDescripcion.trim()
    if (descripcionSinEsp.trim().length > 10 && isNaN(descripcionSinEsp) && descripcionSinEsp.charAt(0) === descripcionSinEsp.toUpperCase().charAt(0)) {
        descripcionValida = true;
    }
    return descripcionValida;
}

//Validacion precio que se haya ingresado y que sea un numero.
function validarPrecio(pPrecio) {
    let precioValido = false;
    if (pPrecio > 0 && !isNaN(pPrecio)) {
        precioValido = true;
    }
    return precioValido;
}

//Validar que el inmueble a registrar contenga al menos 3 fotos
function validarFotos(pFoto1, pFoto2, pFoto3, pFoto4, pFoto5) {
    let fotos = new Array(pFoto1, pFoto2, pFoto3, pFoto4, pFoto5)
    let contadorFotos = 0
    let fotosValidadas = false
    for (let i = 0; i < fotos.length && !fotosValidadas; i++) {
        if (fotos[i].length > 0) {
            contadorFotos++
        }
        if (contadorFotos == 3) { // Con que haya 3 fotos ya basta, no importa el lugar
            fotosValidadas = true
        }
    }
    return fotosValidadas
}


////////////////////////////////////////////////////////////////////////
/////// F14 - DAR DE ALTA A UN ANFITRION - USUARIO ADMINISTRADOR  //////
////////////////////////////////////////////////////////////////////////

function formularioDeRegistroUsuarioAnfitrion() {

    let tipoUsuario = "anfitrion"  // El anfitrion lo registra el Administrador
    let nombre = document.querySelector("#txtNombreAnfi").value;
    let apellido = document.querySelector("#txtApellidoAnfi").value;
    let correo = document.querySelector("#txtCorreoAnfi").value;
    let celular = document.querySelector("#txtCelularAnfi").value;
    let contrasena = document.querySelector("#txtContrasenaAnfi").value;
    let contrasena2 = document.querySelector("#txtContrasena2Anfi").value;

    logicaNegocioAgregarPersona(esPrecarga = false, tipoUsuario, nombre, apellido, correo, celular, contrasena, contrasena2);
}

function mostrarRegistrarAnfi() {
    ocultarCosasRegistrarInmueble()

    mostrarCosasRegistrarAnfi()
    let mostrarFormulario = ""
    mostrarFormulario = `
    <div class="registrarAnfi">
        <h3 >Registro de afitrión</h3>
        <label for="txtNombre">Nombre:</label>
        <input type="text" id="txtNombreAnfi" placeholder="2 letras min. (1° letra mayúscula)"> <br>
        <label for="txtApellido">Apellido:</label>
        <input type="text" id="txtApellidoAnfi" placeholder="2 letras min. (1° letra mayúscula)"> <br>
        <label for="txtCorreo">Correo:</label>
        <input type="text" id="txtCorreoAnfi" placeholder="*@*.*"> <br>
        <label for="txtCelular">Celular:</label>
        <input type="text" id="txtCelularAnfi" placeholder="8 digitos"> <br>
        <label for="txtContrasena">Contrasena:</label>
        <input type="text" id="txtContrasenaAnfi" placeholder="6 caracteres (1 número y 1 may.)"> <br>
        <label for="txtContrasena2">Contrasena2:</label>
        <input type="text" id="txtContrasena2Anfi"> <br>
        <div id="divRegistrarAnfi"> </div>
    </div>`

    document.querySelector("#divContenido").innerHTML = mostrarFormulario
}


////////////////////////////////////////////////////////////////
/////// F15 - CARGAR COTIZACIÓN - USUARIO ADMINISTRADOR  //////
///////////////////////////////////////////////////////////////

let cotizacion = 42; // Variable global y precaraga de cotización 

function cargarCotizacion() {
    cotizacionIngresada = document.querySelector("#txtCoti").value;
    if (!isNaN(cotizacionIngresada) && cotizacionIngresada > 0) {  // La cotización tiene que ser un numero y ser mayor a 0
        cotizacion = parseInt(cotizacionIngresada) 
        document.querySelector("#pCarga").innerHTML = `Se cargó correctamente la cotizacion de u$s ${cotizacion}`;
    }
    else {
        document.querySelector("#pCarga").innerHTML = `Ingrese una cotización.`;
    }
    mostrarInmueble(listaInmuebles)// lo puse aca para cuando el precio ya se esta mostrando en dolares, cambia los precios de todos los inmuebles mostrados, antes habia que darle al boton de "cambiar moneda" aunque no lo cambie
}

////////////////////////////////////////////////////////////////////////
/////// F16 - VER UN REPORTE DE INMUEBLE - USUARIO ADMINISTRADOR  //////
////////////////////////////////////////////////////////////////////////


function cargaInmueblesAdmin() { // Precarga los inmuebles en la pagina del administrador
    let mostrarReporte = obtenerListadoObjetosInmuebles(listaInmuebles); // obtiene las propiedades de cada objecto.
    document.querySelector("#divMostrarReporte").innerHTML = mostrarReporte; // mostrar todos los inmubles en una tabla 
}
 
function obtenerListadoObjetosInmuebles(pArray) { // obtiene las propiedades de cada objecto.
    let lista = ` <table border="1px"> `
    for (let i = 0; i <= pArray.length - 1; i++) {
        let objetoInmueble = pArray[i];
        lista += `
        <tr>
            <td><img src="fotos/${objetoInmueble.Fotos[0]}" style="width: 350px; height: 100px;" ></img> </td>
            <td> ${objetoInmueble.Titulo} </td>
            <td> ${objetoInmueble.Descripcion} </td>
            <td> ${objetoInmueble.Ciudad}</td>
            <td>${objetoInmueble.Precio} </td> 
        </tr> `
 
    }
    lista += ` </table>`;
    return lista;
}
 
function buscarReporte() {
    let arrayFiltroReporte = new Array(); // se uso un array auxiliar para no alterar el array original “listaInmuebles”.
    let mensaje = ""
    let desdeIngresado = document.querySelector("#txtDesde").value;
    document.querySelector("#txtDesde").focus();
    let hastaIngresado = document.querySelector("#txtHasta").value;
 
    if (desdeIngresado === "" && hastaIngresado === "") { // si ambas son vacios      
        mensaje = `Debe rellenar por lo menos uno de los dos campos con valores numéricos para poder filtrar.`;
    } else {
        if (validardesdeOhasta(desdeIngresado, hastaIngresado)) { //"true" si no hay letras en ningunos de los campos

            // si tiene solo el campos "Desde" ingresado
            if (ingresoDesde(desdeIngresado) && !ingresoHasta(hastaIngresado)) {
                for (let i = 0; i <= listaInmuebles.length - 1; i++) {
                    let objetoInmueble = listaInmuebles[i];
                    precio = objetoInmueble.Precio;
                    if (desdeIngresado <= precio) { // si el desdeIngresado es menor o igual que el precio del listaInmuebles lo agrega al array aux. arrayFiltroReporte
                        arrayFiltroReporte.push(listaInmuebles[i]);
                        mensaje = `Campos ingresados correctamente (OK).`;
                    }
                }
            }
 
            // si tiene solo el campos "Hasta" ingresado
            if (ingresoHasta(hastaIngresado) && !ingresoDesde(desdeIngresado)) {
                for (let i = 0; i <= listaInmuebles.length - 1; i++) {
                    let objetoInmueble = listaInmuebles[i];
                    precio = objetoInmueble.Precio;
                    if (hastaIngresado >= precio) { // si el hastaIngresado es mayor o igual que el precio del listaInmuebles lo agrega al array aux. arrayFiltroReporte
                        arrayFiltroReporte.push(listaInmuebles[i]);
                        mensaje = `Campos ingresados correctamente (OK).`;
                    }
                }
            }

            
            // si tiene ambos campos "Desde" y "Hasta" ingresados.
            if (ingresoDesde(desdeIngresado) && ingresoHasta(hastaIngresado)) {
                if (primeroCampoMenorSegundo(desdeIngresado, hastaIngresado)) { //"true" si el primer campo de texto sea menor al segundo campo de texto.
                    for (let i = 0; i <= listaInmuebles.length - 1; i++) {
                        let objetoInmueble = listaInmuebles[i];
                        precio = objetoInmueble.Precio;
                        if (desdeIngresado <= precio && hastaIngresado >= precio) { //si el desdeIngresado es menor o igual que el precio y si el hastaIngresado es mayor o igual que el precio del listaInmuebles lo agrega al array aux. arrayFiltroReporte
                            arrayFiltroReporte.push(listaInmuebles[i]);
                            mensaje = `Campos ingresados correctamente (OK).`;
                        }
                    }
                } else {
                    mensaje = `El primer campo de texto debe ser menor al segundo.`;
                }
            }

            if (mensaje == "") { 
                // Si en el campo “desde” el usuario ingresa un número mayor al precio máximo de la tabla
                let maximo = Number.NEGATIVE_INFINITY
                for (let i = 0; i < listaInmuebles.length; i++) {
                    let inmuebleX = listaInmuebles[i]
                    if (inmuebleX.Precio > maximo) {
                        maximo = inmuebleX.Precio
                    }
                }
                if (maximo < desdeIngresado) {
                    mensaje = "No hay ningun inmueble en ese rango de precio"
                }

                // Si en el campo “hasta” el usuario ingresa un número menor al precio minimo de la tabla
                let minimo = Number.POSITIVE_INFINITY
                for (let i = 0; i < listaInmuebles.length; i++) {
                    let inmuebleX = listaInmuebles[i]
                    if (inmuebleX.Precio < minimo) {
                        minimo = inmuebleX.Precio
                    }
                }
                if (minimo > hastaIngresado) {
                    mensaje = "No hay ningun inmueble en ese rango de precio"
                }
            }
            
            let mostrarReporte = obtenerListadoObjetosInmuebles(arrayFiltroReporte); // obtiene las propiedades de cada objecto.
            document.querySelector("#divMostrarReporte").innerHTML = mostrarReporte; // mostrar todos los inmuebles del array arrayFiltroReporte en una tabla 
        } else {
            mensaje = `Solo se permite filtrar con valores numéricos`
        }
        
    }
    document.querySelector("#pReporte").innerHTML = mensaje;
}
 
 
function removerFiltro() {
    document.querySelector("#txtDesde").value = "";
    document.querySelector("#txtDesde").focus();
    document.querySelector("#txtHasta").value = "";
    document.querySelector("#pReporte").innerHTML = ""; // se borrar el mensaje
    cargaInmueblesAdmin()
}
 
// Validaciones
function validardesdeOhasta(pDesdeIngresado, pHastaIngresado) { //"true" si no es letras
    let desdeOhastaValido = false;
    if ((!isNaN(pDesdeIngresado) || pDesdeIngresado === "") && (!isNaN(pHastaIngresado) || pHastaIngresado === "")) {
        desdeOhastaValido = true;
    }
    return desdeOhastaValido;
}
 
function primeroCampoMenorSegundo(pDesdeIngresado, pHastaIngresado) { //"true" si el primer campo de texto sea menor al segundo campo de texto.
    let camposOK = false;
    desdeIngresadoNum = parseInt(pDesdeIngresado) // Se convierte a numero para poder comparar
    hastaIngresadoNum = parseInt(pHastaIngresado)
    if (desdeIngresadoNum < hastaIngresadoNum /*|| desdeIngresadoNum === hastaIngresadoNum*/) {
        camposOK = true;
    }
    return camposOK;
}
 
function ingresoDesde(pDesdeIngresado) {     //"true" si el usuario ingreso un valor en el "Desde".
    let ingresadoDesde = false
    if (pDesdeIngresado >= 0) {
        ingresadoDesde = true;
    }
    return ingresadoDesde;
}
 
function ingresoHasta(pHastaIngresado) {    //"true" si el usuario ingreso un valor en el "Hasta".
    let ingresoHasta = false
    if (pHastaIngresado > 0) {
        ingresoHasta = true;
    }
    return ingresoHasta;
}



// USADO PARA MOSTRAR Y OCULTAR CLASES 

//Visitante
function mostrarCosasVisitante() {
    let listaElementosDOM = document.querySelectorAll(".visitante")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'block';
    }
}

function ocultarCosasVisitante() {
    let listaElementosDOM = document.querySelectorAll(".visitante")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'none';
    }
}

// Administrador
function mostrarCosasAdministrador() {
    let listaElementosDOM = document.querySelectorAll(".administrador")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'block';
    }
}

function ocultarCosasAdministrador() {
    let listaElementosDOM = document.querySelectorAll(".administrador")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'none';
    }
}

// Huesped
function mostrarCosasHuesped() {
    let listaElementosDOM = document.querySelectorAll(".huesped")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'block';
    }
}

function ocultarCosasHuesped() {
    let listaElementosDOM = document.querySelectorAll(".huesped")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'none';
    }
}

// Anfitrion
function mostrarCosasAnfitrion() {
    let listaElementosDOM = document.querySelectorAll(".anfitrion")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'block';
    }
}

function ocultarCosasAnfitrion() {
    let listaElementosDOM = document.querySelectorAll(".anfitrion")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'none';
    }
}

// Registrarse
function mostrarCosasRegistrarse() {
    let listaElementosDOM = document.querySelectorAll(".registrarse")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'block';
    }
}

function ocultarCosasRegistrarse() {
    let listaElementosDOM = document.querySelectorAll(".registrarse")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'none';
    }
}

// Iniciar sesion
function mostrarCosasIniciarSesion() {
    let listaElementosDOM = document.querySelectorAll(".iniciarSesion")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'block';
    }
}

function ocultarCosasIniciarSesion() {
    let listaElementosDOM = document.querySelectorAll(".iniciarSesion")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'none';
    }
}

// Buscador y ordenamiento
function ocultarCosasBuscadorYOrdenamiento() {
    let listaElementosDOM = document.querySelectorAll(".buscadorYOrdenamiento")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'none';
    }
}

function mostrarCosasBuscadorYOrdenamiento() {
    let listaElementosDOM = document.querySelectorAll(".buscadorYOrdenamiento")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'block';
    }
}

// Menu de Navegación
function ocultarCosasMenuDeNavegacio() {
    let listaElementosDOM = document.querySelectorAll(".menuDeNavegacion")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'none';
    }
}

function mostrarCosasMenuDeNavegacio() {
    let listaElementosDOM = document.querySelectorAll(".menuDeNavegacion")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'block';
    }
}

// Registrar Inmueble
function mostrarCosasRegistrarInmueble() {
    let listaElementosDOM = document.querySelectorAll(".registrarInmueble")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'block';
    }
}

function ocultarCosasRegistrarInmueble() {
    let listaElementosDOM = document.querySelectorAll(".registrarInmueble")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'none';
    }
}

// Registrar anfitrion
function mostrarCosasRegistrarAnfi() {
    let listaElementosDOM = document.querySelectorAll(".registrarAnfi")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'block';
    }
}

function ocultarCosasRegistrarAnfi() {
    let listaElementosDOM = document.querySelectorAll(".registrarAnfi")
    for (let i = 0; i < listaElementosDOM.length; i++) {
        listaElementosDOM[i].style.display = 'none';
    }
}



// ARMAR Y MOSTRAR INMUEBLES 

function armarInmueble(inmuebleX) {
    let precio = inmuebleX.Precio
    if (tipoDeMoneda === "u$s") {
        precio = parseInt(inmuebleX.Precio / cotizacion); // si es dolar se divide, si es pesos queda igual
    }
    let habilitarDeshabilitar = ""
    if (inmuebleX.Estado === "habilitado" && tipoUsuarioActual == "anfitrion") { // se agrega el boton habilitar o desabilitar, cambia el value, es solo para anfitriones
        habilitarDeshabilitar = `<input class="anfitrion botonD" style="display: none;" id="botonHabilitarDeshabilitar${inmuebleX.Nro}" type="button" value="Deshabilitar Inmueble"></input>`
    }
    if (inmuebleX.Estado === "deshabilitado" && tipoUsuarioActual == "anfitrion") {
        habilitarDeshabilitar = `<input class="anfitrion botonD" style="display: none;" id="botonHabilitarDeshabilitar${inmuebleX.Nro}" type="button" value="Habilitar Inmueble"></input>`
    }

    let salidaFotos = `<div id="divFotos${inmuebleX.Nro}"> <img src="fotos/${inmuebleX.Fotos[0]}" style="height: 400px; display: 300px;" ></img> </div>` // Solo la primer foto

    let verMas = ""
    if (tipoUsuarioActual == "huesped") { // Cada boton ver mas tiene un id unico en base al numero de inmueble
        verMas = `<p class="ver-mas huesped" id="pVermas${inmuebleX.Nro}">
        Ver más...  
        </p>
        <div id="divVerMas${inmuebleX.Nro}"> </div> `
    }

    let salida = ` <div id="inmuebleNumero"> <h2>${inmuebleX.Titulo} </h2> <br>
         <h4><strong>${tipoDeMoneda} ${precio}</strong> por noche</h4><br>
        ${salidaFotos}
        <div>
        <label><strong> ${inmuebleX.Ciudad}</strong></label><label class="duracion">Promedio: <strong>${inmuebleX.Calificacion}</strong></label>
        </div><br>
        <p>
            ${inmuebleX.Descripcion}
             
        </p>
        ${habilitarDeshabilitar}
        ${verMas}`
    return salida
}

function mostrarInmueble(pArray) {
    let salida = ""
    tipoDeMoneda = document.querySelector("#slcCombo").value; // Me traigo la moneda del combo 
    if (tipoUsuarioActual == "anfitrion" || tipoUsuarioActual == "Administrador") {
        tipoDeMoneda = "$" // La moneda del anfitrion siempre es $
    }
    for (let i = 0; i <= pArray.length - 1; i++) { // Recorro el array de inmuebles
        let objetoInmueble = pArray[i];
        if (tipoDeMoneda === "u$s") {
            precio = parseInt(objetoInmueble.Precio / cotizacion); //Si la moneda es dolar el precio del inmueble se divide por la cotizacion
        } else {
            precio = objetoInmueble.Precio // Si es pesos el precio del inmueble queda igual
        }

        if (((tipoUsuarioActual == "huesped" || tipoUsuarioActual == "visitante") && objetoInmueble.Estado == "habilitado") || tipoUsuarioActual == "anfitrion") {
            salida += armarInmueble(objetoInmueble)
        }
    }
    document.querySelector("#divMostrarInmuebles").innerHTML = salida;
    eventoClickVerMas() // Le agrega el evento click a los botones de ver mas, en caso que los haya (huésped)
    eventoClickBotonD() // Le agrega el evento click a los botones de habilitar y deshabilitar, en caso que los haya (anfitrión)
}

// MOSTRARLE AL ANFITRION SUS INMUEBLES
function mostrarInmueblesAnfitrion() {
    let inmueblesAnfitrion = new Array // Creo un array donde agregar todos los inmuebles del anfitrion logeado
    for (let i = 0; i < listaInmuebles.length; i++) {
        inmuebleX = listaInmuebles[i]

        if (inmuebleX.Anfitrion == correoUsuarioActual) { // Si el correo del inmueble coincide con el correo del anfitrion logeado se agrega el inmueble al array creado 
            inmueblesAnfitrion.push(inmuebleX)
        }
    }
    mostrarInmueble(inmueblesAnfitrion)
}


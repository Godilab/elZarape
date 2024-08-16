// Variables globales
const arraySucursales = [];
let idSucursal = 1;
let indexSucursal = null;

const btnAgregarSucursal = document.getElementById("btnAgregarSucursal");
const btnEliminarSucursal = document.getElementById("btnEliminarSucursal");
const btnActualizarSucursal = document.getElementById("btnActualizarSucursal");

// Cargar datos de sucursales
fetch("/modules/moduloSucursal/dataSucursal.json")
    .then(function (response) { return response.json(); })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            arraySucursales.push(data[i]);
        }
        idSucursal = arraySucursales.length + 1;
        cargarSucursales();
    });

// Funciones
export function cargarSucursales() {
    let strSucursal = ``;

    for (let i = 0; i < arraySucursales.length; i++) {
        let estatus = '';

        if (arraySucursales[i].status == 1) {
            estatus = 'Activo';
        } else {
            estatus = 'Inactivo';
        }

        strSucursal +=
            '<tr onclick="moduloSucursal.cargarFormulario(' + i + ')">' +
            '<td>' + arraySucursales[i].id + '</td>' +
            '<td>' + arraySucursales[i].nombre + '</td>' +
            '<td>' + arraySucursales[i].direccion + '</td>' +
            '<td>' + arraySucursales[i].latitud + ', ' + arraySucursales[i].longitud + '</td>' +
            '<td>' + arraySucursales[i].url + '</td>' +
            '<td>' + arraySucursales[i].horario + '</td>' +
            '<td>' + estatus + '</td>' +
            '</tr>';
    }

    document.getElementById("tdSucursal").innerHTML = strSucursal;
}

export function cargarFormulario(index) {
    document.getElementById("txtNombre").value = arraySucursales[index].nombre;
    document.getElementById("txtDireccion").value = arraySucursales[index].direccion;
    document.getElementById("txtLatitud").value = arraySucursales[index].latitud;
    document.getElementById("txtLongitud").value = arraySucursales[index].longitud;
    document.getElementById("txtURL").value = arraySucursales[index].url;
    document.getElementById("txtHorario").value = arraySucursales[index].horario;
    indexSucursal = index;

    btnAgregarSucursal.setAttribute("disabled", "true");
    btnEliminarSucursal.removeAttribute("disabled");
    btnActualizarSucursal.removeAttribute("disabled");
}

export function agregarSucursal() {
    const txtNombre = document.getElementById("txtNombre").value;
    const txtDireccion = document.getElementById("txtDireccion").value;
    const txtLatitud = document.getElementById("txtLatitud").value;
    const txtLongitud = document.getElementById("txtLongitud").value;
    const txtURL = document.getElementById("txtURL").value;
    const txtHorario = document.getElementById("txtHorario").value;


    arraySucursales.push({
        id: idSucursal,
        nombre: txtNombre,
        direccion: txtDireccion,
        latitud: txtLatitud,
        longitud: txtLongitud,
        url: txtURL,
        horario: txtHorario,
        status: 1
    });
    alert("Sucursal agregada correctamente");
    limpiarFormulario();
    cargarSucursales();
    idSucursal++;
}

export function limpiarFormulario() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtDireccion").value = "";
    document.getElementById("txtLatitud").value = "";
    document.getElementById("txtLongitud").value = "";
    document.getElementById("txtURL").value = "";
    document.getElementById("txtHorario").value = "";

    btnAgregarSucursal.removeAttribute("disabled");
    btnEliminarSucursal.setAttribute("disabled", "true");
    btnActualizarSucursal.setAttribute("disabled", "true");
}

export function eliminarSucursal() {
    arraySucursales[indexSucursal].status = 0;
    alert("Se ha inactivado la sucursal");
    cargarSucursales();
    limpiarFormulario();
}

export function actualizarSucursal() {
    const txtNombre = document.getElementById("txtNombre").value;
    const txtDireccion = document.getElementById("txtDireccion").value;
    const txtLatitud = document.getElementById("txtLatitud").value;
    const txtLongitud = document.getElementById("txtLongitud").value;
    const txtURL = document.getElementById("txtURL").value;
    const txtHorario = document.getElementById("txtHorario").value;

    arraySucursales[indexSucursal].nombre = txtNombre;
    arraySucursales[indexSucursal].direccion = txtDireccion;
    arraySucursales[indexSucursal].latitud = txtLatitud;
    arraySucursales[indexSucursal].longitud = txtLongitud;
    arraySucursales[indexSucursal].url = txtURL;
    arraySucursales[indexSucursal].horario = txtHorario;

    alert("Sucursal actualizada correctamente");
    cargarSucursales();
    limpiarFormulario();
}



export function buscarSucursal() {
    const txtBuscar = document.getElementById("txtBuscar").value;

    const arrayFiltrado = arraySucursales.filter(elemnt => elemnt.nombre.includes(txtBuscar));
    //const arrayFiltrado = arraySucursales.filter(elemnt => elemnt.nombre == txtBuscar);

    let strSucursal = ``;
    for (let i = 0; i < arrayFiltrado.length; i++) {
        let estatus = '';

        if (arrayFiltrado[i].status == 1) {
            estatus = 'Activo';
        } else {
            estatus = 'Inactivo';
        }

        strSucursal +=
            '<tr onclick="moduloSucursal.cargarFormulario(' + i + ')">' +
            '<td>' + arrayFiltrado[i].id + '</td>' +
            '<td>' + arrayFiltrado[i].nombre + '</td>' +
            '<td>' + arrayFiltrado[i].direccion + '</td>' +
            '<td>' + arrayFiltrado[i].latitud + ', ' + arrayFiltrado[i].longitud + '</td>' +
            '<td>' + arrayFiltrado[i].url + '</td>' +
            '<td>' + arrayFiltrado[i].horario + '</td>' +
            '<td>' + estatus + '</td>' +
            '</tr>';
    }

    document.getElementById("tdSucursal").innerHTML = strSucursal;
}
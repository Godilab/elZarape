let indexBebidaSeleccionado;
let bebidas = [];
let currentId = 1;

export function addBebida(){
    let id,
        nombre, 
        descripcion,
        precio,
        categoria;

    id = document.getElementById("txtId").value;
    nombre = document.getElementById("txtNombre").value;
    descripcion = document.getElementById("txtDescripcion").value;
    precio = document.getElementById("txtPrecio").value;
    categoria = document.getElementById("txtCategoria").value;


    let bebida = {};
    bebida.id = currentId.toString(); //currentId,toString();
    bebida.nombre = nombre;
    bebida.descripcion = descripcion;
    bebida.precio = precio;
    bebida.categoria = categoria;
    bebida.estatus = "Activo";
    bebidas.push(bebida);

    currentId++;
    clean();
    loadTabla();
}
 
export function loadTabla(){
    let cuerpo = "";
    bebidas.forEach(function (bebida){
        let registro =  
                '<tr onclick="moduloBebida.selectBebida('+ bebidas.indexOf(bebida) +');">' +
                '<td>' + bebida.id + '</td>' +
                '<td>' + bebida.nombre + '</td>' +
                '<td>' + bebida.descripcion +
                '<td>' + bebida.precio + '</td>' +
                '<td>' + bebida.categoria + '</td>' + 
                '<td>' + bebida.estatus + '</td></tr>';
         cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("bebida-table-body").innerHTML = cuerpo;
}

export function selectBebida(index){
    document.getElementById("txtId").value = bebidas[index].id;
    document.getElementById("txtNombre").value = bebidas[index].nombre;
    document.getElementById("txtDescripcion").value = bebidas[index].descripcion;
    document.getElementById("txtPrecio").value = bebidas[index].precio;
    document.getElementById("txtCategoria").value = bebidas[index].categoria;
    document.getElementById("updateBebida").classList.remove("disabled");
    document.getElementById("deleteBebida").classList.remove("disabled");
    document.getElementById("addBebida").classList.add("disabled");
    indexBebidaSeleccionado = index;
}

fetch ("../moduloCatalogoBebida/dataBebida.json")
    .then(function(response){return response.json();  })
    .then(function(jsondata){
        bebidas = jsondata;
        console.log(bebidas);
        loadTabla();
    });

export function clean (){
    document.getElementById('txtId').value = "";
    document.getElementById('txtNombre').value = "";
    document.getElementById('txtDescripcion').value = "";
    document.getElementById('txtPrecio').value = "";
    document.getElementById('txtCategoria').value = "";
    document.getElementById('txtNombre').focus();
    document.getElementById('updateBebida').classList.add("disabled");
    document.getElementById('deleteBebida').classList.add("disabled");
    document.getElementById('addBebida').classList.remove("disabled");
    indexBebidaSeleccionado = 0;
}

export function updateBebida () {
    let id,
        nombre, 
        descripcion,
        precio,
        categoria;

        id = document.getElementById("txtId").value;
        nombre = document.getElementById("txtNombre").value;
        descripcion = document.getElementById("txtDescripcion").value;
        precio = document.getElementById("txtPrecio").value;
        categoria = document.getElementById("txtCategoria").value;

        let bebida = {};
        bebida.id = currentId.toString();
        bebida.nombre = nombre;
        bebida.descripcion = descripcion;
        bebida.precio = precio;
        bebida.categoria = categoria;
        bebida.estatus = "Activo";
        bebidas[indexBebidaSeleccionado] = bebida;
        clean();
        loadTabla ();
}


export function deleteBebida() {
    bebidas[indexBebidaSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

export function searchBebida (){
    let filtro = document.getElementById("txtBusquedaBebida").value;
    let resultados = bebidas.filter(element => element.nombre === filtro);
    let cuerpo = "";

    resultados.forEach(function (bebida){
        let registro =  
                '<tr onclick="moduloBebida.selectBebida('+ bebidas.indexOf(bebida) +');">' +
                '<td>' + bebida.id + '</td>' +
                '<td>' + bebida.nombre + '</td>' +
                '<td>' + bebida.descripcion +
                '<td>' + bebida.precio + '</td>' +
                '<td>' + bebida.categoria + '</td>' + 
                '<td>' + bebida.estatus + '</td></tr>';
         cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("bebida-table-body").innerHTML = cuerpo;
}
let indexAlimentoSeleccionado;
let alimentos = [];
let currentId = 1;

export function addAlimento(){
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


    let alimento = {};
    alimento.id = currentId.toString(); //currentId,toString();
    alimento.nombre = nombre;
    alimento.descripcion = descripcion;
    alimento.precio = precio;
    alimento.categoria = categoria;
    alimento.estatus = "Activo";
    alimentos.push(alimento);

    currentId++;
    clean();
    loadTabla();
}
 
export function loadTabla(){
    let cuerpo = "";
    alimentos.forEach(function (alimento){
        let registro =  
                '<tr onclick="moduloAlimento.selectAlimento('+ alimentos.indexOf(alimento) +');">' +
                '<td>' + alimento.id + '</td>' +
                '<td>' + alimento.nombre + '</td>' +
                '<td>' + alimento.descripcion +
                '<td>' + alimento.precio + '</td>' +
                '<td>' + alimento.categoria + '</td>' + 
                '<td>' + alimento.estatus + '</td></tr>';
         cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("alimento-table-body").innerHTML = cuerpo;
}

export function selectAlimento(index){
    document.getElementById("txtId").value = alimentos[index].id;
    document.getElementById("txtNombre").value = alimentos[index].nombre;
    document.getElementById("txtDescripcion").value = alimentos[index].descripcion;
    document.getElementById("txtPrecio").value = alimentos[index].precio;
    document.getElementById("txtCategoria").value = alimentos[index].categoria;
    document.getElementById("updateAlimento").classList.remove("disabled");
    document.getElementById("deleteAlimento").classList.remove("disabled");
    document.getElementById("addAlimento").classList.add("disabled");
    indexAlimentoSeleccionado = index;
}

fetch ("../moduloCatalogoAlimentos/dataAlimentos.json")
    .then(function(response){return response.json();  })
    .then(function(jsondata){
        alimentos = jsondata;
        console.log(alimentos);
        loadTabla();
    });

export function clean (){
    document.getElementById('txtId').value = "";
    document.getElementById('txtNombre').value = "";
    document.getElementById('txtDescripcion').value = "";
    document.getElementById('txtPrecio').value = "";
    document.getElementById('txtCategoria').value = "";
    document.getElementById('txtNombre').focus();
    document.getElementById('updateAlimento').classList.add("disabled");
    document.getElementById('deleteAlimento').classList.add("disabled");
    document.getElementById('addAlimento').classList.remove("disabled");
    indexAlimentoSeleccionado = 0;
}

export function updateAlimento () {
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

        let alimento = {};
        alimento.id = currentId.toString();
        alimento.nombre = nombre;
        alimento.descripcion = descripcion;
        alimento.precio = precio;
        alimento.categoria = categoria;
        alimento.estatus = "Activo";
        alimentos[indexAlimentoSeleccionado] = alimento;
        clean();
        loadTabla ();
}


export function deleteAlimento() {
    alimentos[indexAlimentoSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

export function searchAlimento (){
    let filtro = document.getElementById("txtBusquedaAlimento").value;
    let resultados = alimentos.filter(element => element.nombre === filtro);
    let cuerpo = "";

    resultados.forEach(function (alimento){
        let registro =  
                '<tr onclick="moduloAlimento.selectAlimento('+ alimentos.indexOf(alimento) +');">' +
                '<td>' + alimento.id + '</td>' +
                '<td>' + alimento.nombre + '</td>' +
                '<td>' + alimento.descripcion +
                '<td>' + alimento.precio + '</td>' +
                '<td>' + alimento.categoria + '</td>' + 
                '<td>' + alimento.estatus + '</td></tr>';
         cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("alimento-table-body").innerHTML = cuerpo;
}
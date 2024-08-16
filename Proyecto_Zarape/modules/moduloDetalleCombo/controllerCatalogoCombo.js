let indexComboSeleccionado;
let combos = [];
let currentId = 1;

export function addCombo(){
    let id,
        nombre, 
        descripcion,
        precio,
        alimento,
        bebida;

    id = document.getElementById("txtId").value;
    nombre = document.getElementById("txtNombre").value;
    descripcion = document.getElementById("txtDescripcion").value;
    precio = document.getElementById("txtPrecio").value;
    alimento = document.getElementById("txtAlimento").value;
    bebida = document.getElementById("txtBebida").value;

    let combo = {};
    combo.id = currentId.toString(); //currentId,toString();
    combo.nombre = nombre;
    combo.descripcion = descripcion;
    combo.precio = precio;
    combo.alimento = alimento;
    combo.bebida = bebida;
    combo.estatus = "Activo";
    combos.push(combo);

    currentId++;
    clean();
    loadTabla();
}
 
export function loadTabla(){
    let cuerpo = "";
    combos.forEach(function (combo){
        let registro =  
                '<tr onclick="moduloCombo.selectCombo('+ combos.indexOf(combo) +');">' +
                '<td>' + combo.id + '</td>' +
                '<td>' + combo.nombre + '</td>' +
                '<td>' + combo.descripcion +
                '<td>' + combo.precio + '</td>' +
                '<td>' + combo.alimento + '</td>' + 
                '<td>' + combo.bebida + '</td>' + 
                '<td>' + combo.estatus + '</td></tr>';
         cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("combo-table-body").innerHTML = cuerpo;
}

export function selectCombo(index){
    document.getElementById("txtId").value = combos[index].id;
    document.getElementById("txtNombre").value = combos[index].nombre;
    document.getElementById("txtDescripcion").value = combos[index].descripcion;
    document.getElementById("txtPrecio").value = combos[index].precio;
    document.getElementById("txtAlimento").value = combos[index].alimento;
    document.getElementById("txtBebida").value = combos[index].bebida;
    document.getElementById("updateCombo").classList.remove("disabled");
    document.getElementById("deleteCombo").classList.remove("disabled");
    document.getElementById("addCombo").classList.add("disabled");
    indexComboSeleccionado = index;
}

fetch ("../moduloDetalleCombo/dataDetalleCombo.json")
    .then(function(response){return response.json();  })
    .then(function(jsondata){
        combos = jsondata;
        console.log(combos);
        loadTabla();
    });

export function clean (){
    document.getElementById('txtId').value = "";
    document.getElementById('txtNombre').value = "";
    document.getElementById('txtDescripcion').value = "";
    document.getElementById('txtPrecio').value = "";
    document.getElementById('txtAlimento').value = "";
    document.getElementById('txtBebida').value = "";
    document.getElementById('txtNombre').focus();
    document.getElementById('updateCombo').classList.add("disabled");
    document.getElementById('deleteCombo').classList.add("disabled");
    document.getElementById('addCombo').classList.remove("disabled");
    indexComboSeleccionado = 0;
}

export function updateCombo () {
    let id,
        nombre, 
        descripcion,
        precio,
        alimento,
        bebida;

        id = document.getElementById("txtId").value;
        nombre = document.getElementById("txtNombre").value;
        descripcion = document.getElementById("txtDescripcion").value;
        precio = document.getElementById("txtPrecio").value;
        alimento = document.getElementById("txtAlimento").value;
        bebida = document.getElementById("txtBebida").value;

        let combo = {};
        combo.id = currentId.toString();
        combo.nombre = nombre;
        combo.descripcion = descripcion;
        combo.precio = precio;
        combo.alimento = alimento;
        combo.bebida = bebida;
        combo.estatus = "Activo";
        combos[indexComboSeleccionado] = combo;
        clean();
        loadTabla ();
}


export function deleteCombo() {
    combos[indexComboSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

export function searchCombo (){
    let filtro = document.getElementById("txtBusquedaCombo").value;
    let resultados = combos.filter(element => element.nombre === filtro);
    let cuerpo = "";

    resultados.forEach(function (combo){
        let registro =  
                '<tr onclick="moduloCombo.selectCombo('+ combos.indexOf(combo) +');">' +
                '<td>' + combo.id + '</td>' +
                '<td>' + combo.nombre + '</td>' +
                '<td>' + combo.descripcion +
                '<td>' + combo.precio + '</td>' +
                '<td>' + combo.alimento + '</td>' + 
                '<td>' + combo.bebida + '</td>' + 
                '<td>' + combo.estatus + '</td></tr>';
         cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("combo-table-body").innerHTML = cuerpo;
}
let indexUsuarioSeleccionado;
let usuarios = [];
let currentId = 1;

export function addUsuario(){
    let id,
        nombre, 
        contrasena;

    id = document.getElementById("txtId").value;
    nombre = document.getElementById("txtNombre").value;
    contrasena = document.getElementById("txtDescripcion").value;


    let usuario = {};
    usuario.id = currentId.toString(); //currentId,toString();
    usuario.nombre = nombre;
    usuario.contrasena = contrasena;
    usuario.estatus = "Activo";
    usuarios.push(usuario);

    currentId++;
    clean();
    loadTabla();
}
 
export function loadTabla(){
    let cuerpo = "";
    usuarios.forEach(function (usuario){
        let registro =  
                '<tr onclick="moduloUsuario.selectUsuario('+ usuarios.indexOf(usuario) +');">' +
                '<td>' + usuario.id + '</td>' +
                '<td>' + usuario.nombre + '</td>' +
                '<td>' + usuario.contrasena +
                '<td>' + usuario.estatus + '</td></tr>';
         cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("usuario-table-body").innerHTML = cuerpo;
}

export function selectUsuario(index){
    document.getElementById("txtId").value = usuarios[index].id;
    document.getElementById("txtNombre").value = usuarios[index].nombre;
    document.getElementById("txtDescripcion").value = usuarios[index].descripcion;
    document.getElementById("updateUsuario").classList.remove("disabled");
    document.getElementById("deleteUsuario").classList.remove("disabled");
    document.getElementById("addUsuario").classList.add("disabled");
    indexUsuarioSeleccionado = index;
}

fetch ("../moduloCatologoUsuario/dataUsuario.json")
    .then(function(response){return response.json();  })
    .then(function(jsondata){
        usuarios = jsondata;
        console.log(usua);
        loadTabla();
    });

export function clean (){
    document.getElementById('txtId').value = "";
    document.getElementById('txtNombre').value = "";
    document.getElementById('txtDescripcion').value = "";
    document.getElementById('txtNombre').focus();
    document.getElementById('updateUsuario').classList.add("disabled");
    document.getElementById('deleteUsuario').classList.add("disabled");
    document.getElementById('addUsuario').classList.remove("disabled");
    indexUsuarioSeleccionado = 0;
}

export function updateUsuario () {
    let id,
        nombre, 
        contrasena;

        id = document.getElementById("txtId").value;
        nombre = document.getElementById("txtNombre").value;
        contrasena = document.getElementById("txtDescripcion").value;

        let usuario = {};
        usuario.id = currentId.toString();
        usuario.nombre = nombre;
        usuario.contrasena = contrasena;
        usuario.estatus = "Activo";
        usuarios[indexUsuarioSeleccionado] = usuario;
        clean();
        loadTabla ();
}


export function deleteUsuario() {
    usuarios[indexUsuarioSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

export function searchUsuario (){
    let filtro = document.getElementById("txtBusquedaUsuario").value;
    let resultados = usuarios.filter(element => element.nombre === filtro);
    let cuerpo = "";

    resultados.forEach(function (usuario){
        let registro =  
                '<tr onclick="moduloUsuario.selectUsuario('+ usuarios.indexOf(usuario) +');">' +
                '<td>' + usuario.id + '</td>' +
                '<td>' + usuario.nombre + '</td>' +
                '<td>' + usuario.contrasena + '</td>' +
                '<td>' + usuario.estatus + '</td></tr>';
         cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("usuario-table-body").innerHTML = cuerpo;
}
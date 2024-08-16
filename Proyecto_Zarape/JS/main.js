let moduloSucursal = null;
let moduloCombo;
let moduloAlimento;
let moduloBebida;
let moduloUsuario;


function cargarModuloSucursal() {

    // Siempre en peticiones fetch, colocar la ruta desde el principal. O donde lo llames.
    fetch("../../modules/moduloSucursal/viewSucursal.html")
        .then(function (response) { return response.text(); })
        .then(function (html) {
            // Contenedor principal es el div donde se va a cargar el módulo.
            document.getElementById("contenedorPrincipal").innerHTML = html;
            // Importar el controlador del módulo. Siempre desde la ruta de main.js
            import("../../modules/moduloSucursal/controllerSucursal.js").then(function (controller) {
                moduloSucursal = controller;
                moduloSucursal.cargarSucursales();
            });
        });
}

function cargarModuloAlimentos() {
    fetch("../../modules/moduloCatalogoAlimentos/viewAlimentos.htlm")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../../modules/moduloCatalogoAlimentos/viewALimentos.html").then(
                    function (controller) {
                        moduloCatalogoAlimentos = controller;
                    }
                );
            }
        );
}

function addBebidas() {
    fetch("../../modules/moduloCatalogoBebida/addBebida.html") // carga la pagina precargada de inicio.html a addBebida.html
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../../modules/moduloCatalogoBebida/controllerBebida.js").then( // carga el controlador de bebida en caso de uso (NO CRUD)
                    function (controller) {
                        moduloBebida = controller;
                    }
                )
            }
        )
}

function addAlimentos() {
    fetch("../../modules/moduloCatalogoAlimentos/addAlimento.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../../modules/moduloCatalogoAlimentos/controllerAlimentos.js").then(
                    function (controller) {
                        moduloAlimento = controller;
                    }
                )
            }
        )
}

function addCombo() {
    fetch("../../modules/moduloDetalleCombo/viewCombo.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../../modules/moduloDetalleCombo/controllerCatalogoCombo.js").then(
                    function (controller) {
                        moduloCombo = controller;
                    }
                );
            }
        );
}

function agregarUsuario() {
    fetch("../../modules/moduloCatologoUsuario/viewUsuario.html")
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (html) {
                document.getElementById("contenedorPrincipal").innerHTML = html;
                import("../../modules/moduloCatologoUsuario/controllerUsuario.js").then(
                    function (controller) {
                        moduloUsuario = controller;
                    }
                );
            }
        );
}


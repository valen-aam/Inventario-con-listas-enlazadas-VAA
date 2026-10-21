const miInventario = new Inventario();
const divDetalles = document.getElementById("detalles");

function crearProductoDesdeFormulario() {
    let codigo = document.getElementById("txtCodigo").value;
    let nombre = document.getElementById("txtNombre").value;
    let cantidad = document.getElementById("txtCantidad").value;
    let costo = document.getElementById("txtCosto").value;

    if (!codigo || !nombre) {
        divDetalles.innerHTML = "<p style='color:red;'>El código y nombre son obligatorios.</p>";
        return null;
    }
    return new Producto(codigo, nombre, cantidad, costo);
}

document.getElementById("btnAgregar").addEventListener("click", () => {
    let nuevo = crearProductoDesdeFormulario();
    if (nuevo) divDetalles.innerHTML = miInventario.agregar(nuevo);
});

document.getElementById("btnAgregarInicio").addEventListener("click", () => {
    let nuevo = crearProductoDesdeFormulario();
    if (nuevo) divDetalles.innerHTML = miInventario.agregarInicio(nuevo);
});

document.getElementById("btnInsertar").addEventListener("click", () => {
    let nuevo = crearProductoDesdeFormulario();
    let posicion = parseInt(document.getElementById("txtPosicion").value);
    if (nuevo && posicion) {
        divDetalles.innerHTML = miInventario.insertar(nuevo, posicion);
    } else {
        divDetalles.innerHTML = "<p style='color:red;'>Ingresa datos y una posición válida.</p>";
    }
});

document.getElementById("btnBuscar").addEventListener("click", () => {
    let codigo = document.getElementById("txtCodigo").value;
    let encontrado = miInventario.buscar(codigo);
    if (encontrado) {
        divDetalles.innerHTML = "<strong>Producto Encontrado:</strong>" + encontrado.infoHTML();
    } else {
        divDetalles.innerHTML = "<p>Producto no encontrado.</p>";
    }
});

document.getElementById("btnEliminar").addEventListener("click", () => {
    let codigo = document.getElementById("txtCodigo").value;
    divDetalles.innerHTML = miInventario.eliminar(codigo);
});

document.getElementById("btnExtraer").addEventListener("click", () => {
    let extraido = miInventario.extraerPrimero();
    if (extraido) {
        divDetalles.innerHTML = "<strong>Se extrajo el producto:</strong>" + extraido.infoHTML();
    } else {
        divDetalles.innerHTML = "<p>No hay productos para extraer.</p>";
    }
});

document.getElementById("btnListar").addEventListener("click", () => {
    divDetalles.innerHTML = "<strong>Listado del Inventario:</strong>" + miInventario.listar();
});
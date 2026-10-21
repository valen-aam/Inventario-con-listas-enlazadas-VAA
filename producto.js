class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.siguiente = null;
    }
    infoHTML() {
        return `<p><strong>Cód:</strong> ${this.codigo} | <strong>Nombre:</strong> ${this.nombre} | <strong>Cant:</strong> ${this.cantidad} | <strong>Costo:</strong> $${this.costo}</p>`;
    }
    }

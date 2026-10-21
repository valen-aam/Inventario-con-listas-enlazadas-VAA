class Inventario {
    constructor() {
        this.inicio = null;
    }

    agregar(nuevoProducto) {
        if (!this.inicio) {
            this.inicio = nuevoProducto;
        } else {
            let actual = this.inicio;
            while (actual.siguiente != null) {
                actual = actual.siguiente; 
            }
            actual.siguiente = nuevoProducto;
        }
        return `Producto ${nuevoProducto.codigo} agregado al final.`;
    }

    agregarInicio(nuevoProducto) {
        nuevoProducto.siguiente = this.inicio;
        this.inicio = nuevoProducto;
        return `Producto ${nuevoProducto.codigo} agregado al inicio.`;
    }

    buscar(codigo) {
        let actual = this.inicio;
        while (actual != null) {
            if (actual.codigo === codigo) {
                return actual;
            }
            actual = actual.siguiente;
        }
        return null;
    }

    eliminar(codigo) {
        if (!this.inicio) return "El inventario está vacío.";

        if (this.inicio.codigo === codigo) {
            this.inicio = this.inicio.siguiente;
            return "Producto eliminado.";
        }

        let actual = this.inicio;
        while (actual.siguiente != null) {
            if (actual.siguiente.codigo === codigo) {
                actual.siguiente = actual.siguiente.siguiente; 
                return "Producto eliminado.";
            }
            actual = actual.siguiente;
        }
        return "Producto no encontrado.";
    }

    insertar(nuevoProducto, posicion) {
        if (posicion <= 1 || !this.inicio) {
            return this.agregarInicio(nuevoProducto);
        }

        let actual = this.inicio;
        let posicionActual = 1;

        while (actual.siguiente != null && posicionActual < posicion - 1) {
            actual = actual.siguiente;
            posicionActual++;
        }

        nuevoProducto.siguiente = actual.siguiente;
        actual.siguiente = nuevoProducto;
        return `Producto insertado en la posición ${posicion}.`;
    }

    extraerPrimero() {
        if (!this.inicio) return null;
        let extraido = this.inicio;
        this.inicio = this.inicio.siguiente; 
        extraido.siguiente = null; 
        return extraido;
    }

    listar() {
        if (!this.inicio) return "<p>El inventario está vacío.</p>";
        
        let resultado = "";
        let actual = this.inicio;
        while (actual != null) {
            resultado += actual.infoHTML();
            actual = actual.siguiente;
        }
        return resultado;
    }
}
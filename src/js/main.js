const FILL_HIDE_SPACES = "0"

class Generator {
    constructor() {

        this.elements = [
            {
                element: document.getElementById("codigo-formato").value,
                parameters: {
                    lon: 2,
                    obligatorio: true,
                    tipo: "N"
                }    
            },
            {
                element: document.getElementById("codigo-de-mensaje").value,
                parameters: {
                    lon: 4,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("pan").value,
                parameters: {
                    lon: 19,
                    obligatorio: true,
                    tipo: "LI-An"
                }
            },
            {
                element: document.getElementById("codigo-de-proceso").value,
                parameters: {
                    lon: 6,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("importe-de-la-transaccion").value,
                parameters: {
                    lon: 12,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("importe-en-la-moneda-de-conciliacion-con-la-red").value,
                parameters: {
                    lon: 12,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("fecha-y-hora-de-la-transaccion").value,
                parameters: {
                    lon: 14,
                    obligatorio: true,
                    tipo: "AAAAMMDDhhmmss"
                }
            },
            {
                element: document.getElementById("identificador-del-mensaje").value,
                parameters: {
                    lon: 19,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("fecha-de-caducidad").value,
                parameters: {
                    lon: 4,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-actividad").value,
                parameters: {
                    lon: 4,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-pais").value,
                parameters: {
                    lon: 3,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("modo-de-entrada-de-los-datos").value,
                parameters: {
                    lon: 12,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-actividad-original").value,
                parameters: {
                    lon: 4,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("sesion-switch").value,
                parameters: {
                    lon: 7,
                    obligatorio: true,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("sesion-origen").value,
                parameters: {
                    lon: 12,
                    obligatorio: true,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("importe-de-tasas").value,
                parameters: {
                    lon: 12,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-moneda-de-las-tasas").value,
                parameters: {
                    lon: 3,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-identificador-adquirente").value,
                parameters: {
                    lon: 11,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-la-red-o-elemento-switch-que-envio-el-mensaje").value,
                parameters: {
                    lon: 11,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-la-entidad-autorizadora").value,
                parameters: {
                    lon: 11,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("referencia-de-la-operacion").value,
                parameters: {
                    lon: 12,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("codigo-de-autorizacion").value,
                parameters: {
                    lon: 6,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("codigo-de-respuesta").value,
                parameters: {
                    lon: 3,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("identificador-del-terminal").value,
                parameters: {
                    lon: 8,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("codigo-identificador-del-comercio").value,
                parameters: {
                    lon: 15,
                    obligatorio: true,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("nombre-y-dirección-del-comercio").value,
                parameters: {
                    lon: 50,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("datos-adicionales").value,
                parameters: {
                    lon: 538,
                    obligatorio: false,
                    tipo: "LII-An"
                }
            },
            {
                element: document.getElementById("codigo-de-moneda").value,
                parameters: {
                    lon: 3,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-moneda-original-a-la-transaccion").value,
                parameters: {
                    lon: 3,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-moneda-de-conciliacion").value,
                parameters: {
                    lon: 3,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("datos-emv").value,
                parameters: {
                    lon: 300,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("datos-de-la-operacion-original").value,
                parameters: {
                    lon: 30,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("datos-privados-del-origen").value,
                parameters: {
                    lon: 40,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("fecha-contable").value,
                parameters: {
                    lon: 8,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("forma-de-pago").value,
                parameters: {
                    lon: 2,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("numero-de-referencia-de-la-linea").value,
                parameters: {
                    lon: 8,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("impuesto").value,
                parameters: {
                    lon: 12,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("propina").value,
                parameters: {
                    lon: 12,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("comision").value,
                parameters: {
                    lon: 12,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("tipo-de-linea").value,
                parameters: {
                    lon: 4,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("mac").value,
                parameters: {
                    lon: 8,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("datos-token").value,
                parameters: {
                    lon: 38,
                    obligatorio: false,
                    tipo: "An"
                }
            }
        ]
        this.containerTrama = document.getElementById("trama")
        this.btnCopy = document.getElementById("copy-trama")
    }

    fill_hide(input_message, lim) {
        const rest = lim - input_message.length;
        return new Array(rest).fill(FILL_HIDE_SPACES).join("") + input_message;
    }

    trama() {
        return this.elements.map( element => {
            return (element.element.length > element.parameters.lon)
                   ? element.element
                   : this.fill_hide(element.element, element.parameters.lon)
        }).join("")
    }

    aleatoreo() {

    }
    
    copy() {
        this.containerTrama.select()
        document.execCommand("copy");
        this.btnCopy.innerText = `Copiado`
    }

    print() {
        const message = this.trama()
        this.containerTrama.innerText = `${message}`
        console.log(message)
    }
}
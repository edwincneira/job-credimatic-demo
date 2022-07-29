const FILL_HIDE_SPACES = "0"

class Generator {
    constructor() {

        this.elements = [
            {
                element: document.getElementById("codigo-formato"),
                parameters: {
                    lon: 2,
                    obligatorio: true,
                    tipo: "N"
                }    
            },
            {
                element: document.getElementById("codigo-de-mensaje"),
                parameters: {
                    lon: 4,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("pan"),
                parameters: {
                    lon: 19,
                    obligatorio: true,
                    tipo: "LI-An"
                }
            },
            {
                element: document.getElementById("codigo-de-proceso"),
                parameters: {
                    lon: 6,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("importe-de-la-transaccion"),
                parameters: {
                    lon: 12,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("importe-en-la-moneda-de-conciliacion-con-la-red"),
                parameters: {
                    lon: 12,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("fecha-y-hora-de-la-transaccion"),
                parameters: {
                    lon: 14,
                    obligatorio: true,
                    tipo: "AAAAMMDDhhmmss"
                }
            },
            {
                element: document.getElementById("identificador-del-mensaje"),
                parameters: {
                    lon: 19,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("fecha-de-caducidad"),
                parameters: {
                    lon: 4,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-actividad"),
                parameters: {
                    lon: 4,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-pais"),
                parameters: {
                    lon: 3,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("modo-de-entrada-de-los-datos"),
                parameters: {
                    lon: 12,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-actividad-original"),
                parameters: {
                    lon: 4,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("sesion-switch"),
                parameters: {
                    lon: 7,
                    obligatorio: true,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("sesion-origen"),
                parameters: {
                    lon: 12,
                    obligatorio: true,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("importe-de-tasas"),
                parameters: {
                    lon: 12,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-moneda-de-las-tasas"),
                parameters: {
                    lon: 3,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-identificador-adquirente"),
                parameters: {
                    lon: 11,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-la-red-o-elemento-switch-que-envio-el-mensaje"),
                parameters: {
                    lon: 11,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-la-entidad-autorizadora"),
                parameters: {
                    lon: 11,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("referencia-de-la-operacion"),
                parameters: {
                    lon: 12,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("codigo-de-autorizacion"),
                parameters: {
                    lon: 6,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("codigo-de-respuesta"),
                parameters: {
                    lon: 3,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("identificador-del-terminal"),
                parameters: {
                    lon: 8,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("codigo-identificador-del-comercio"),
                parameters: {
                    lon: 15,
                    obligatorio: true,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("nombre-y-dirección-del-comercio"),
                parameters: {
                    lon: 50,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("datos-adicionales"),
                parameters: {
                    lon: 538,
                    obligatorio: false,
                    tipo: "LII-An"
                }
            },
            {
                element: document.getElementById("codigo-de-moneda"),
                parameters: {
                    lon: 3,
                    obligatorio: true,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-moneda-original-a-la-transaccion"),
                parameters: {
                    lon: 3,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("codigo-de-moneda-de-conciliacion"),
                parameters: {
                    lon: 3,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("datos-emv"),
                parameters: {
                    lon: 300,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("datos-de-la-operacion-original"),
                parameters: {
                    lon: 30,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("datos-privados-del-origen"),
                parameters: {
                    lon: 40,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("fecha-contable"),
                parameters: {
                    lon: 8,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("forma-de-pago"),
                parameters: {
                    lon: 2,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("numero-de-referencia-de-la-linea"),
                parameters: {
                    lon: 8,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("impuesto"),
                parameters: {
                    lon: 12,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("propina"),
                parameters: {
                    lon: 12,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("comision"),
                parameters: {
                    lon: 12,
                    obligatorio: false,
                    tipo: "N"
                }
            },
            {
                element: document.getElementById("tipo-de-linea"),
                parameters: {
                    lon: 4,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("mac"),
                parameters: {
                    lon: 8,
                    obligatorio: false,
                    tipo: "An"
                }
            },
            {
                element: document.getElementById("datos-token"),
                parameters: {
                    lon: 38,
                    obligatorio: false,
                    tipo: "An"
                }
            }
        ]
        this.containerTrama = document.getElementById("trama")
        this.btnCopy = document.getElementById("copy-trama")
        this.btnInicioId = document.getElementById("inicio-id")
        this.btnLimiteTransacciones = document.getElementById("limite-transacciones")
    }

    fill_hide(input_message, lim) {
        const rest = lim - input_message.length;
        return new Array(rest).fill(FILL_HIDE_SPACES).join("") + input_message;
    }

    trama() {
        return this.elements.map( element => {
            return (element.element.value.length > element.parameters.lon)
                   ? element.element
                   : this.fill_hide(element.element.value, element.parameters.lon)
        }).join("")
    }

    list() {
        let trx = []
        for(let i=0; i < +this.btnLimiteTransacciones.value; i++){
            trx.push(this.elements.map( element => this.aleatoreo(element.parameters.lon)).join("") + " ")
        }
        trx[trx.length -1] = trx[trx.length - 1].replace(" ", "")
        return trx.join("");
    }

    aleatoreo(lim) {
        const characters = "0123456789";
        let out = "";
        for (let i = 0; i < 1000; i++) {
            out += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return out.substring(0, lim);
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

    printList() {
        this.containerTrama.innerText = `${this.list()}`
    }
}
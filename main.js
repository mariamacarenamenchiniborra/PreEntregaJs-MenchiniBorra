/* //PREENTREGA2

//carrito de compras de productos en oferta 

const productos = [
    {nombre: "Cadenas de Plata", precio: 3500},
    {nombre:"Pulseras de Plata", precio: 2250},
    {nombre:"Aros de Plata", precio: 1050},
    {nombre:"Gargantillas de Plata", precio: 4000},
    {nombre:"Dijes de Plata", precio: 950},
    {nombre:"bijou", precio: 550},
]

let carrito = []
let nombre = "";
let apellido = "";
let alias = "";
let calle = "";
let altura = "";
let contacto = 0;

/*------------ DATOS DEL COMPRADOR ------------*/
/*
function ingresoDeDatos() {
    nombre += prompt("Ingrese su nombre");
    apellido += prompt("ingrese su apellido");
    contacto += parseInt(
      prompt("ingrese su numero telefonico para poder contactarnos")
    );
    calle += prompt("ingrese la calle sobre la que se encuentra su domicilio");
    altura += prompt("ingrese la altura en la que se encuentra su domicilio");
    alert("Sera necesario crear un alias para la correcta entrega");
    alias += prompt("Ingrese su alias");
    let datosComprador = `-Nombre: ${nombre}\n-Apellido: ${apellido}\n-Alias: ${alias}\n-Telefono: ${contacto}\n-Domicilio: ${calle} ${altura}`;
    return datosComprador;
}
  
let seleccionDatos = prompt(
    `los datos:\n${ingresoDeDatos()}\nson correctos? \nresponde con "si" o "no"`);
    
while (seleccionDatos != "si" && seleccionDatos != "no") {
    confirmacion = prompt(`Responde con "si" o "no"`);
    seleccionDatos = confirmacion;
}

/*------------ COMPRA ------------*/
/*
if (seleccionDatos === "si") {
    alert("A continuacion nuestros productos disponibles.\nSelecciona cual o cuales productos queres de la siguiente lista:");
    
    let listaDeProductos = productos.map((producto) => producto.nombre + " - " + "$" + producto.precio);
    alert(listaDeProductos.join("\n"));
} else {
    alert("gracias, hasta la proxima!");
}
  
 /*------------ AGREGAR PRODUCTO ------------*//*
function comprar() {
  
    let id = "";
    while (id != "comprar") {
      id = prompt(
        `ingresa el nombre del producto o pasa a finalizar tu compra escribiendo "comprar"`
      );
      if (
        id == "Cadenas de Plata" ||
        id == "Pulseras de Plata" ||
        id == "Aros de Plata" ||
        id == "Gargantillas de Plata" ||
        id == "Dijes de Plata" ||
        id == "Bijou"
      ) {
        switch (id) {
          case "Cadenas de Plata":
            precio = 3500;
            break;
          case "Pulseras de Plata":
            precio = 2250;
            break;
          case "Aros de Plata":
            precio = 1050;
            break;
          case "Gargantillas de Plata":
            precio = 4000;
            break;
          case "Dijes de Plata":
            precio = 950;
            break;
          case "Bijou":
            precio = 550;
            break;
          default:
            break;
        }
        let cantidad = parseInt(prompt("cuantas unidades queres?"));
        carrito.push({ id, precio, cantidad });
    }
    }


 /*------------ RESUMEN DE COMPRA ------------*//*

 let compra = carrito.map((e) => e.id + " - " + "$" + e.precio * e.cantidad);

 alert(`Los productos seleccionados son:\n${compra.join("\n")}`);

 const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad,0);
 
 alert(`El total a pagar es de: $${total}`);

}

/*------------ COMPRA ------------*//*

comprar();

let terminarCompra = prompt(`confirmar compra?\n("si" - "no")`);

while (terminarCompra !== "no" || terminarCompra !== "si") {
 
    if (terminarCompra == "si") {
    alert(`Gracias ${alias} por tu compra!!\nTe avisamos cuando sale tu pedido con destino: ${calle} ${altura}!!`);
    break;
  } else if (terminarCompra == "no") {
    alert(`Gracias, te esperamos la proxima!!`);
    break;
  } else {
    alert(`responde con "si" o "no"`);
    terminarCompra = prompt(`confirmar compra?\n("si" - "no")`);
  }
}

/**----------------------COMPRA REALIZADA------------*/ 


/*--------------------------------------------------------------------------------------------*/

/*PREENTREGA3*/ 

//SISTEMA DE SEGUIMIENTO DE COMPRA REALIZADA:

class COMPRA {
  constructor(nombreCliente, apellidoCliente, numeroPedido, habitacion) {
    this.nombreCliente = nombreCliente;
    this.apellidoCliente = apellidoCliente;
    this.numeroPedido = numeroPedido;
    this.habitacion = habitacion;
  }
}

const pedido = [];

/*****************************/

//Si el LocalStorage tiene datos, los agrego al Array de Pedidos.

if (localStorage.getItem('pedido')) {
  let pedido = JSON.parse(localStorage.getItem('pedido'));
  
  /* pedido.push(...pedido); */
  for (let i = 0; i < pedido.length; i++) {

    pedido.push(pedido[i]);
  }
}

/*****************************/

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  agregarPedido();
});

function agregarPedido() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const pedido = document.getElementById('pedido').value;
  const habitacion = document.getElementById('habitacion').value;
  const nuevoPedido = new pedido(nombre, apellido, pedido, habitacion);
  reservas.push(nuevoPedido);

  //Agrego al LocalStorage:
  localStorage.setItem('pedido', JSON.stringify(pedido));
  formulario.reset();
}

const contenedorPedido = document.getElementById('contenedorPedido');

const verPedido = document.getElementById('verPedido');

verPedido.addEventListener('click', () => {
  mostrarPedido();
});

function mostrarPedido() {
  contenedorPedido.innerHTML = '';
  pedido.forEach((pedido) => {
    const div = document.createElement('div');
    div.innerHTML = `
                      <div>
                          <p>Nombre del Cliente: ${pedido.nombreCliente}</p>
                          <p>Apellido del Cliente: ${pedido.apellidoCliente}</p>
                          <p>Número Pedido: ${pedido.numeroReserva}</p>
                          <p>Habitación: ${pedido.habitacion}</p>
                      </div>
      
                      `;
    contenedorPedido.appendChild(div);
  });
}

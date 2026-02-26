function generarCajas() {
  var cantidad = parseInt(prompt("¿Cuántas cajas deseas colocar?"));

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor ingresa un número válido mayor a 0.");
    return;
  }

  var contenedor = document.getElementById("contenedor");
  var mensaje = document.getElementById("mensaje");

 
  if (!contenedor || !mensaje) {
    alert("Error: No se encontraron los elementos necesarios en el HTML.");
    return;
  }

 
  contenedor.innerHTML = "";
  contenedor.className = "";

  if (cantidad <= 8) {
    contenedor.classList.add("caja-vertical");
    mensaje.textContent = "✔ " + cantidad + " caja(s) en modo VERTICAL (≤ 8)";
  } else {
    contenedor.classList.add("caja-horizontal");
    mensaje.textContent = "✔ " + cantidad + " caja(s) en modo HORIZONTAL (> 8)";
  }

  for (var i = 1; i <= cantidad; i++) {
    var art = document.createElement("article");
    art.textContent = "Caja " + i;
    contenedor.appendChild(art);
  }
}
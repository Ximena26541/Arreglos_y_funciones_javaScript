// Objeto para almacenar los votos
var votos = {
  norte: 0,
  sur: 0,
  centro: 0
};

function emitirVoto() {

  var nombreInput = document.getElementById("nombre");
  var candidatoSelect = document.getElementById("candidato");
  var seccionSeleccionada = document.querySelector("input[name='seccion']:checked");
  var mensajeVoto = document.getElementById("msgVoto");
  var panelResultados = document.getElementById("resultados");

  // Verificar que existan los elementos necesarios
  if (!nombreInput || !candidatoSelect || !mensajeVoto || !panelResultados) {
    alert("Error: Faltan elementos en el HTML.");
    return;
  }

  var nombre = nombreInput.value.trim();
  var candidato = candidatoSelect.value;

  // Validaciones
  if (nombre === "") {
    alert("Por favor ingresa tu nombre.");
    return;
  }

  if (!seccionSeleccionada) {
    alert("Selecciona tu sección.");
    return;
  }

  if (candidato === "") {
    alert("Selecciona un candidato.");
    return;
  }

  var seccion = seccionSeleccionada.value;
  var mensaje = "";

  // Switch según sección
  switch (seccion) {
    case "norte":
      mensaje = "Sección Norte — tu voto para " + candidato + " fue registrado.";
      break;
    case "sur":
      mensaje = "Sección Sur — tu voto para " + candidato + " fue registrado.";
      break;
    case "centro":
      mensaje = "Sección Centro — tu voto para " + candidato + " fue registrado.";
      break;
    default:
      mensaje = "Sección desconocida.";
  }

  // Sumar voto
  votos[seccion]++;

  // Mostrar mensaje
  mensajeVoto.textContent = "Gracias, " + nombre + ". " + mensaje;

  // Mostrar resultados
  panelResultados.style.display = "block";

  // Actualizar gráfica
  mostrarBarras();
}

function mostrarBarras() {

  var contenedorBarras = document.getElementById("barras");

  if (!contenedorBarras) {
    alert("Error: No existe el contenedor de barras.");
    return;
  }

  var total = votos.norte + votos.sur + votos.centro;
  var secciones = ["norte", "sur", "centro"];

  contenedorBarras.innerHTML = "";

  for (var i = 0; i < secciones.length; i++) {

    var sec = secciones[i];
    var ancho = total > 0 ? (votos[sec] / total) * 200 : 0;

    var fila = document.createElement("div");
    fila.className = "barra-row";

    var label = document.createElement("span");
    label.className = "barra-label";
    label.textContent = sec;

    var barra = document.createElement("div");
    barra.className = "barra";
    barra.style.width = ancho + "px";

    var contador = document.createElement("span");
    contador.className = "barra-count";
    contador.textContent = votos[sec] + " voto(s)";

    fila.appendChild(label);
    fila.appendChild(barra);
    fila.appendChild(contador);

    contenedorBarras.appendChild(fila);
  }
}
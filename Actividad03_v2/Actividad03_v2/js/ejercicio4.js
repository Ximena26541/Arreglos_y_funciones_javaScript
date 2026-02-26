// ============================================
// EJERCICIO 4 — While y For
// ============================================

// --- 4.1 Suma de impares (1 al 100) usando WHILE ---
function sumaImpares() {
  var suma    = 0;
  var i       = 1;
  var detalle = "";

  while (i <= 100) {
    if (i % 2 !== 0) {
      suma += i;
      if (detalle !== "") {
        detalle += " + ";
      }
      detalle += i;
    }
    i++;
  }

  var out = document.getElementById("out1");
  out.style.display = "block";
  out.textContent   = detalle + "\n\n= " + suma;
}

// --- 4.2 Asteriscos usando FOR ---
function mostrarAsteriscos() {
  var n = parseInt(document.getElementById("numAsteriscos").value);

  if (isNaN(n) || n <= 0) {
    alert("Ingresa un número válido mayor a 0.");
    return;
  }

  var estrellas = "";

  for (var i = 0; i < n; i++) {
    estrellas += "*";
  }

  var out = document.getElementById("out2");
  out.style.display = "block";
  out.textContent   = n + " asterisco(s):\n" + estrellas;
}

// --- 4.3 Tablas de multiplicar (1 al 10) con FOR anidado ---
function tablasMultiplicar() {
  var texto = "";

  for (var i = 1; i <= 10; i++) {
    texto += "--- Tabla del " + i + " ---\n";

    for (var j = 1; j <= 10; j++) {
      texto += "  " + i + " x " + j + " = " + (i * j) + "\n";
    }

    texto += "\n";
  }

  var out = document.getElementById("out3");
  out.style.display = "block";
  out.textContent   = texto;
}

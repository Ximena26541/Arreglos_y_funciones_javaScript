var arrOriginal = [
  "Mexico", "Argentina", "Espana", "Brasil", "Colombia",
  "Chile", "Peru", "Francia", "Japon", "Alemania"
];

var paises = arrOriginal.slice();  

 
function mostrarArr() {
  var txt = "";
  for (var i = 0; i < paises.length; i++) {
    txt += i + ':"' + paises[i] + '"';
    if (i < paises.length - 1) {
      txt += ", ";
    }
  }
  document.getElementById("arrDisplay").textContent =
    "[" + txt + "]   (" + paises.length + " elemento(s))";
}

 
function showOut(id, msg) {
  var el = document.getElementById(id);
  el.style.display = "block";
  el.textContent   = msg;
}

 
function accionPop() {
  if (paises.length === 0) { alert("El arreglo ya esta vacio."); return; }
  var eliminado = paises.pop();
  mostrarArr();
  showOut("outPop", "Elemento eliminado: " + eliminado + "\nNuevo length: " + paises.length);
}
 
function accionShift() {
  if (paises.length === 0) { alert("El arreglo ya esta vacio."); return; }
  var eliminado = paises.shift();
  mostrarArr();
  showOut("outShift", "Primer elemento eliminado: " + eliminado + "\nNuevo length: " + paises.length);
}

 
function accionPush() {
  var val = document.getElementById("inPush").value.trim();
  if (!val) { alert("Escribe un pais para agregar."); return; }
  paises.push(val);
  mostrarArr();
  showOut("outPush", '"' + val + '" agregado al final.\nNuevo length: ' + paises.length);
}

 
function accionUnshift() {
  var val = document.getElementById("inUnshift").value.trim();
  if (!val) { alert("Escribe un pais para agregar al inicio."); return; }
  paises.unshift(val);
  mostrarArr();
  showOut("outUnshift", '"' + val + '" agregado al inicio.\nNuevo length: ' + paises.length);
}

 
function accionSplice() {
  var idx  = parseInt(document.getElementById("inSpliceIdx").value);
  var cant = parseInt(document.getElementById("inSpliceCant").value);
  if (isNaN(idx) || isNaN(cant) || idx < 0 || cant < 1) {
    alert("Ingresa indice (>=0) y cantidad (>=1) validos.");
    return;
  }
  if (idx >= paises.length) {
    alert("Indice fuera del rango del arreglo (0 al " + (paises.length - 1) + ").");
    return;
  }
  var eliminados = paises.splice(idx, cant);
  mostrarArr();
  showOut("outSplice", "Eliminados desde indice " + idx + ":\n[" + eliminados.join(", ") + "]\nNuevo length: " + paises.length);
}

 
function accionDelete() {
  var idx = parseInt(document.getElementById("inDelete").value);
  if (isNaN(idx) || idx < 0 || idx >= paises.length) {
    alert("Indice fuera de rango (0 al " + (paises.length - 1) + ").");
    return;
  }
  var borrado = paises[idx];
  delete paises[idx];
  mostrarArr();
  showOut("outDelete", "Indice " + idx + ' ("' + borrado + '") eliminado.\nQueda como: undefined');
}

 
function accionReverse() {
  paises.reverse();
  mostrarArr();
  showOut("outReverse", "Arreglo invertido:\n[" + paises.join(", ") + "]");
}

 
function accionSort() {
  paises.sort();
  mostrarArr();
  showOut("outSort", "Arreglo ordenado:\n[" + paises.join(", ") + "]");
}

 
function accionConcat() {
  var val = document.getElementById("inConcat").value.trim();
  if (!val) { alert("Escribe al menos un pais separado por comas."); return; }

  var nuevos = val.split(",");
  for (var i = 0; i < nuevos.length; i++) {
    nuevos[i] = nuevos[i].trim();
  }

  var resultado = paises.concat(nuevos);
  showOut("outConcat",
    "Resultado de concat (arreglo original NO cambia):\n" +
    "[" + resultado.join(", ") + "]\n" +
    "Length del nuevo arreglo: " + resultado.length
  );
}

 
function accionJoin() {
  var sep       = document.getElementById("inJoin").value;
  var separador = (sep === "") ? ", " : sep;
  var resultado = paises.join(separador);
  showOut("outJoin", "Resultado de join:\n" + resultado);
}

 
function accionLength() {
  showOut("outLength", "array.length = " + paises.length);
}

 
function resetArr() {
  paises = arrOriginal.slice();
  mostrarArr();
  var outputs = document.querySelectorAll(".output");
  for (var i = 0; i < outputs.length; i++) {
    outputs[i].style.display = "none";
  }
}


mostrarArr();

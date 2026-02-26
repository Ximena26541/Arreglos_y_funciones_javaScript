
function calcularSueldo() {

  const anios = parseFloat(document.getElementById("anios").value);

  if (isNaN(anios) || anios < 0) {
    alert("Por favor ingresa un número válido de años (mayor o igual a 0).");
    return;
  }

  const sueldoBase = 40000;
  let porcentaje = 0;
  let criterio = "";

   
  if (anios > 10) {
    porcentaje = 10;
    criterio = "Más de 10 años → +10%";
  } 
  else if (anios > 5) {
    porcentaje = 7;
    criterio = "Entre 6 y 10 años → +7%";
  } 
  else if (anios > 3) {
    porcentaje = 5;
    criterio = "Entre 4 y 5 años → +5%";
  } 
  else {
    porcentaje = 3;
    criterio = "De 0 a 3 años → +3%";
  }

  const aumento = sueldoBase * (porcentaje / 100);
  const sueldoFinal = sueldoBase + aumento;
 
  document.getElementById("tdAnios").textContent = anios + " año(s)";
  document.getElementById("tdCriterio").textContent = criterio;
  document.getElementById("tdBase").textContent = "€ " + sueldoBase.toLocaleString("es-ES");
  document.getElementById("tdAumento").textContent =
    "€ " + aumento.toLocaleString("es-ES") + " (" + porcentaje + "%)";
  document.getElementById("tdFinal").textContent =
    "€ " + sueldoFinal.toLocaleString("es-ES");

 
  document.getElementById("resultados").classList.remove("oculto");
}
/* Inicializa los tooltips usados en íconos rrss */
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

});

/*Llama a la función scrollFunction que chequea altura de carrousel al hacer scroll*/
window.onscroll = function () {
  scrollFunction();
};

/* Chequea altura del carrousel y aplica estilos a la navbar */
function scrollFunction() {
  let altura = $(".carousel").height();
  console.log(altura);
  if (
    document.body.scrollTop > altura ||
    document.documentElement.scrollTop > altura
  ) {
    document.getElementById("navbar").style.background = "#007bff";
  } else {
    document.getElementById("navbar").style.background = "none";
  }
}

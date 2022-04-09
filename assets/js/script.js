window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  let altura=$('.carousel').height();
  console.log(altura);
  if (document.body.scrollTop > altura || document.documentElement.scrollTop > altura) {
    
    document.getElementById("navbar").style.background = "#007bff";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}

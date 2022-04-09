window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 685 || document.documentElement.scrollTop > 685) {
    
    document.getElementById("navbar").style.background = "#007bff";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}
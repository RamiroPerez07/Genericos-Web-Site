document.getElementById("btn-main-search").addEventListener("click",function(){
    alert("El boton esta funcionando. Estos son mis primeros pasos en javascript. Hola mundooo");
});

document.querySelector("#nav-menu").addEventListener("click", () => {
    console.log("esto funciona");
    document.querySelector("#nav-menu").classList.toggle("show");
  });


  document.querySelector("#check-toggle").addEventListener("click", () => {
    console.log("esto funciona");
    document.querySelector("#nav-menu").classList.toggle("show");
  });


let scrollPrevio = window.scrollY;
window.onscroll = function () {
    let scrollActual = window.scrollY;
    if (scrollPrevio > scrollActual) {
        document.getElementById("main-header").style.top = "0";
    } else {
        document.getElementById("main-header").style.top = "-100%";
    }
    scrollPrevio = scrollActual;
}







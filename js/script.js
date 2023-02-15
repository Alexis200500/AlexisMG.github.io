let menuVisible = false;
//Funcion que hace que el menu se oculte y aparezca

function mostrarOcultarMenu(){
  if(menuVisible){
    document.getElementById("nav").classList = "";
    menuVisible = false;
  }else{
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar(){
  //Se oculta el menu una vez seleccionada la opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Función para cargar las animaciones de las habilidades
function cargarAnimaciones(){
  $(function(){
    $('.chart1').easyPieChart({
      size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
    });
    $('.chart2').easyPieChart({
      size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
    });
    $('.chart3').easyPieChart({
      size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
    });
    $('.chart4').easyPieChart({
      size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
    });
    $('.chart5').easyPieChart({
      size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
    });
    $('.chart6').easyPieChart({
      size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
    });
  })
}

cargarAnimaciones();
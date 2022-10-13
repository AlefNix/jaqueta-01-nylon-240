document.getElementById('base').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Base";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Base"; }
});

document.getElementById('botoes').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Manga";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Manga"; }
});

document.getElementById('gola1').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores do Punho";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores do Punho"; }
});

document.getElementById('gola2').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Barra";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Barra"; }
});

document.getElementById('vista').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Gola";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Gola"; }
});

document.getElementById('cor1').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#404701");
    document.getElementById('CB').style.backgroundColor = "#404701";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#404701");
    document.getElementById('BT').style.backgroundColor = "#404701";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#404701");
    document.getElementById('ge').style.backgroundColor = "#404701";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#404701");
    document.getElementById('gi').style.backgroundColor = "#404701";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#404701");
    document.getElementById('VE').style.backgroundColor = "#404701";
  }
});

document.getElementById('cor2').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#006009");
    document.getElementById('CB').style.backgroundColor = "#006009";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#006009");
    document.getElementById('BT').style.backgroundColor = "#006009";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#006009");
    document.getElementById('ge').style.backgroundColor = "#006009";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#006009");
    document.getElementById('gi').style.backgroundColor = "#006009";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#006009");
    document.getElementById('VE').style.backgroundColor = "#006009";
  }
});

document.getElementById('cor3').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#d5ffd2");
    document.getElementById('CB').style.backgroundColor = "#d5ffd2";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#d5ffd2");
    document.getElementById('BT').style.backgroundColor = "#d5ffd2";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#d5ffd2");
    document.getElementById('ge').style.backgroundColor = "#d5ffd2";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#d5ffd2");
    document.getElementById('gi').style.backgroundColor = "#d5ffd2";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#d5ffd2");
    document.getElementById('VE').style.backgroundColor = "#d5ffd2";
  }
});

document.getElementById('cor4').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#04b0c8");
    document.getElementById('CB').style.backgroundColor = "#04b0c8";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#04b0c8");
    document.getElementById('BT').style.backgroundColor = "#04b0c8";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#04b0c8");
    document.getElementById('ge').style.backgroundColor = "#04b0c8";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#04b0c8");
    document.getElementById('gi').style.backgroundColor = "#04b0c8";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#04b0c8");
    document.getElementById('VE').style.backgroundColor = "#04b0c8";
  }
});

document.getElementById('cor5').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#003d8d");
    document.getElementById('CB').style.backgroundColor = "#003d8d";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#003d8d");
    document.getElementById('BT').style.backgroundColor = "#003d8d";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#003d8d");
    document.getElementById('ge').style.backgroundColor = "#003d8d";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#003d8d");
    document.getElementById('gi').style.backgroundColor = "#003d8d";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#003d8d");
    document.getElementById('VE').style.backgroundColor = "#003d8d";
  }
});

document.getElementById('cor6').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#5d008f");
    document.getElementById('CB').style.backgroundColor = "#5d008f";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#5d008f");
    document.getElementById('BT').style.backgroundColor = "#5d008f";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#5d008f");
    document.getElementById('ge').style.backgroundColor = "#5d008f";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#5d008f");
    document.getElementById('gi').style.backgroundColor = "#5d008f";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#5d008f");
    document.getElementById('VE').style.backgroundColor = "#5d008f";
  }
});

document.getElementById('cor7').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ffdedc");
    document.getElementById('CB').style.backgroundColor = "#ffdedc";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#ffdedc");
    document.getElementById('BT').style.backgroundColor = "#ffdedc";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#ffdedc");
    document.getElementById('ge').style.backgroundColor = "#ffdedc";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#ffdedc");
    document.getElementById('gi').style.backgroundColor = "#ffdedc";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#ffdedc");
    document.getElementById('VE').style.backgroundColor = "#ffdedc";
  }
});

document.getElementById('cor8').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#252122");
    document.getElementById('CB').style.backgroundColor = "#252122";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#252122");
    document.getElementById('BT').style.backgroundColor = "#252122";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#252122");
    document.getElementById('ge').style.backgroundColor = "#252122";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#252122");
    document.getElementById('gi').style.backgroundColor = "#252122";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#252122");
    document.getElementById('VE').style.backgroundColor = "#252122";
  }
});

document.getElementById('cor9').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#03908a");
    document.getElementById('CB').style.backgroundColor = "#03908a";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#03908a");
    document.getElementById('BT').style.backgroundColor = "#03908a";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#03908a");
    document.getElementById('ge').style.backgroundColor = "#03908a";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#03908a");
    document.getElementById('gi').style.backgroundColor = "#03908a";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#03908a");
    document.getElementById('VE').style.backgroundColor = "#03908a";
  }
});

document.getElementById('cor10').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ff28f5");
    document.getElementById('CB').style.backgroundColor = "#ff28f5";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#ff28f5");
    document.getElementById('BT').style.backgroundColor = "#ff28f5";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#ff28f5");
    document.getElementById('ge').style.backgroundColor = "#ff28f5";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#ff28f5");
    document.getElementById('gi').style.backgroundColor = "#ff28f5";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#ff28f5");
    document.getElementById('VE').style.backgroundColor = "#ff28f5";
  }
});

document.getElementById('cor11').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ddb400");
    document.getElementById('CB').style.backgroundColor = "#ddb400";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#ddb400");
    document.getElementById('BT').style.backgroundColor = "#ddb400";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#ddb400");
    document.getElementById('ge').style.backgroundColor = "#ddb400";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#ddb400");
    document.getElementById('gi').style.backgroundColor = "#ddb400";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#ddb400");
    document.getElementById('VE').style.backgroundColor = "#ddb400";
  }
});

document.getElementById('cor12').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#001a3f");
    document.getElementById('CB').style.backgroundColor = "#001a3f";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#001a3f");
    document.getElementById('BT').style.backgroundColor = "#001a3f";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#001a3f");
    document.getElementById('ge').style.backgroundColor = "#001a3f";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#001a3f");
    document.getElementById('gi').style.backgroundColor = "#001a3f";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#001a3f");
    document.getElementById('VE').style.backgroundColor = "#001a3f";
  }
});

document.getElementById('cor13').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#f78c2a");
    document.getElementById('CB').style.backgroundColor = "#f78c2a";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#f78c2a");
    document.getElementById('BT').style.backgroundColor = "#f78c2a";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#f78c2a");
    document.getElementById('ge').style.backgroundColor = "#f78c2a";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#f78c2a");
    document.getElementById('gi').style.backgroundColor = "#f78c2a";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#f78c2a");
    document.getElementById('VE').style.backgroundColor = "#f78c2a";
  }
});

document.getElementById('cor14').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#bda87d");
    document.getElementById('CB').style.backgroundColor = "#bda87d";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#bda87d");
    document.getElementById('BT').style.backgroundColor = "#bda87d";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#bda87d");
    document.getElementById('ge').style.backgroundColor = "#bda87d";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#bda87d");
    document.getElementById('gi').style.backgroundColor = "#bda87d";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#bda87d");
    document.getElementById('VE').style.backgroundColor = "#bda87d";
  }
});

document.getElementById('cor15').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#eeeeee");
    document.getElementById('CB').style.backgroundColor = "#eeeeee";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#eeeeee");
    document.getElementById('BT').style.backgroundColor = "#eeeeee";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#eeeeee");
    document.getElementById('ge').style.backgroundColor = "#eeeeee";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#eeeeee");
    document.getElementById('gi').style.backgroundColor = "#eeeeee";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#eeeeee");
    document.getElementById('VE').style.backgroundColor = "#eeeeee";
  }
});

document.getElementById('cor16').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#c4c0bf");
    document.getElementById('CB').style.backgroundColor = "#c4c0bf";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#c4c0bf");
    document.getElementById('BT').style.backgroundColor = "#c4c0bf";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#c4c0bf");
    document.getElementById('ge').style.backgroundColor = "#c4c0bf";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#c4c0bf");
    document.getElementById('gi').style.backgroundColor = "#c4c0bf";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#c4c0bf");
    document.getElementById('VE').style.backgroundColor = "#c4c0bf";
  }
});

document.getElementById('cor17').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#48555d");
    document.getElementById('CB').style.backgroundColor = "#48555d";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#48555d");
    document.getElementById('BT').style.backgroundColor = "#48555d";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#48555d");
    document.getElementById('ge').style.backgroundColor = "#48555d";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#48555d");
    document.getElementById('gi').style.backgroundColor = "#48555d";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#48555d");
    document.getElementById('VE').style.backgroundColor = "#48555d";
  }
});

document.getElementById('cor18').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#504c40");
    document.getElementById('CB').style.backgroundColor = "#504c40";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#504c40");
    document.getElementById('BT').style.backgroundColor = "#504c40";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#504c40");
    document.getElementById('ge').style.backgroundColor = "#504c40";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#504c40");
    document.getElementById('gi').style.backgroundColor = "#504c40";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#504c40");
    document.getElementById('VE').style.backgroundColor = "#504c40";
  }
});

document.getElementById('cor19').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ffffff");
    document.getElementById('CB').style.backgroundColor = "#ffffff";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#ffffff");
    document.getElementById('BT').style.backgroundColor = "#ffffff";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#ffffff");
    document.getElementById('ge').style.backgroundColor = "#ffffff";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#ffffff");
    document.getElementById('gi').style.backgroundColor = "#ffffff";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#ffffff");
    document.getElementById('VE').style.backgroundColor = "#ffffff";
  }
});

document.getElementById('cor20').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#606165");
    document.getElementById('CB').style.backgroundColor = "#606165";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#606165");
    document.getElementById('BT').style.backgroundColor = "#606165";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#606165");
    document.getElementById('ge').style.backgroundColor = "#606165";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#606165");
    document.getElementById('gi').style.backgroundColor = "#606165";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#606165");
    document.getElementById('VE').style.backgroundColor = "#606165";
  }
});

document.getElementById('cor21').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#f12e74");
    document.getElementById('CB').style.backgroundColor = "#f12e74";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#f12e74");
    document.getElementById('BT').style.backgroundColor = "#f12e74";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#f12e74");
    document.getElementById('ge').style.backgroundColor = "#f12e74";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#f12e74");
    document.getElementById('gi').style.backgroundColor = "#f12e74";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#f12e74");
    document.getElementById('VE').style.backgroundColor = "#f12e74";
  }
});

document.getElementById('cor22').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#bc005e");
    document.getElementById('CB').style.backgroundColor = "#bc005e";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#bc005e");
    document.getElementById('BT').style.backgroundColor = "#bc005e";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#bc005e");
    document.getElementById('ge').style.backgroundColor = "#bc005e";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#bc005e");
    document.getElementById('gi').style.backgroundColor = "#bc005e";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#bc005e");
    document.getElementById('VE').style.backgroundColor = "#bc005e";
  }
});

document.getElementById('cor23').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#4e2c20");
    document.getElementById('CB').style.backgroundColor = "#4e2c20";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#4e2c20");
    document.getElementById('BT').style.backgroundColor = "#4e2c20";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#4e2c20");
    document.getElementById('ge').style.backgroundColor = "#4e2c20";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#4e2c20");
    document.getElementById('gi').style.backgroundColor = "#4e2c20";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#4e2c20");
    document.getElementById('VE').style.backgroundColor = "#4e2c20";
  }
});

document.getElementById('cor24').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#480028");
    document.getElementById('CB').style.backgroundColor = "#480028";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#480028");
    document.getElementById('BT').style.backgroundColor = "#480028";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#480028");
    document.getElementById('ge').style.backgroundColor = "#480028";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#480028");
    document.getElementById('gi').style.backgroundColor = "#480028";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#480028");
    document.getElementById('VE').style.backgroundColor = "#480028";
  }
});

document.getElementById('cor25').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#cabd86");
    document.getElementById('CB').style.backgroundColor = "#cabd86";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#cabd86");
    document.getElementById('BT').style.backgroundColor = "#cabd86";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#cabd86");
    document.getElementById('ge').style.backgroundColor = "#cabd86";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#cabd86");
    document.getElementById('gi').style.backgroundColor = "#cabd86";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#cabd86");
    document.getElementById('VE').style.backgroundColor = "#cabd86";
  }
});

document.getElementById('cor26').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#012d9a");
    document.getElementById('CB').style.backgroundColor = "#012d9a";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#012d9a");
    document.getElementById('BT').style.backgroundColor = "#012d9a";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#012d9a");
    document.getElementById('ge').style.backgroundColor = "#012d9a";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#012d9a");
    document.getElementById('gi').style.backgroundColor = "#012d9a";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#012d9a");
    document.getElementById('VE').style.backgroundColor = "#012d9a";
  }
});

document.getElementById('cor27').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#014083");
    document.getElementById('CB').style.backgroundColor = "#014083";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#014083");
    document.getElementById('BT').style.backgroundColor = "#014083";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#014083");
    document.getElementById('ge').style.backgroundColor = "#014083";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#014083");
    document.getElementById('gi').style.backgroundColor = "#014083";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#014083");
    document.getElementById('VE').style.backgroundColor = "#014083";
  }
});

document.getElementById('cor28').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#c8ebff");
    document.getElementById('CB').style.backgroundColor = "#c8ebff";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#c8ebff");
    document.getElementById('BT').style.backgroundColor = "#c8ebff";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#c8ebff");
    document.getElementById('ge').style.backgroundColor = "#c8ebff";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#c8ebff");
    document.getElementById('gi').style.backgroundColor = "#c8ebff";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#c8ebff");
    document.getElementById('VE').style.backgroundColor = "#c8ebff";
  }
});

document.getElementById('cor29').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#f0e3d0");
    document.getElementById('CB').style.backgroundColor = "#f0e3d0";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#f0e3d0");
    document.getElementById('BT').style.backgroundColor = "#f0e3d0";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#f0e3d0");
    document.getElementById('ge').style.backgroundColor = "#f0e3d0";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#f0e3d0");
    document.getElementById('gi').style.backgroundColor = "#f0e3d0";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#f0e3d0");
    document.getElementById('VE').style.backgroundColor = "#f0e3d0";
  }
});

document.getElementById('cor30').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#fec400");
    document.getElementById('CB').style.backgroundColor = "#fec400";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#fec400");
    document.getElementById('BT').style.backgroundColor = "#fec400";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#fec400");
    document.getElementById('ge').style.backgroundColor = "#fec400";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#fec400");
    document.getElementById('gi').style.backgroundColor = "#fec400";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#fec400");
    document.getElementById('VE').style.backgroundColor = "#fec400";
  }
});

document.getElementById('cor31').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#d9ec43");
    document.getElementById('CB').style.backgroundColor = "#d9ec43";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#d9ec43");
    document.getElementById('BT').style.backgroundColor = "#d9ec43";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#d9ec43");
    document.getElementById('ge').style.backgroundColor = "#d9ec43";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#d9ec43");
    document.getElementById('gi').style.backgroundColor = "#d9ec43";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#d9ec43");
    document.getElementById('VE').style.backgroundColor = "#d9ec43";
  }
});

document.getElementById('cor32').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ffc700");
    document.getElementById('CB').style.backgroundColor = "#ffc700";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#ffc700");
    document.getElementById('BT').style.backgroundColor = "#ffc700";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#ffc700");
    document.getElementById('ge').style.backgroundColor = "#ffc700";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#ffc700");
    document.getElementById('gi').style.backgroundColor = "#ffc700";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#ffc700");
    document.getElementById('VE').style.backgroundColor = "#ffc700";
  }
});

document.getElementById('cor33').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#fdfedf");
    document.getElementById('CB').style.backgroundColor = "#fdfedf";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#fdfedf");
    document.getElementById('BT').style.backgroundColor = "#fdfedf";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#fdfedf");
    document.getElementById('ge').style.backgroundColor = "#fdfedf";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#fdfedf");
    document.getElementById('gi').style.backgroundColor = "#fdfedf";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#fdfedf");
    document.getElementById('VE').style.backgroundColor = "#fdfedf";
  }
});

document.getElementById('cor34').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#fdfd9b");
    document.getElementById('CB').style.backgroundColor = "#fdfd9b";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#fdfd9b");
    document.getElementById('BT').style.backgroundColor = "#fdfd9b";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#fdfd9b");
    document.getElementById('ge').style.backgroundColor = "#fdfd9b";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#fdfd9b");
    document.getElementById('gi').style.backgroundColor = "#fdfd9b";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#fdfd9b");
    document.getElementById('VE').style.backgroundColor = "#fdfd9b";
  }
});

document.getElementById('cor35').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#c1ff31");
    document.getElementById('CB').style.backgroundColor = "#c1ff31";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#c1ff31");
    document.getElementById('BT').style.backgroundColor = "#c1ff31";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#c1ff31");
    document.getElementById('ge').style.backgroundColor = "#c1ff31";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#c1ff31");
    document.getElementById('gi').style.backgroundColor = "#c1ff31";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#c1ff31");
    document.getElementById('VE').style.backgroundColor = "#c1ff31";
  }
});

document.getElementById('cor36').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#3a4f00");
    document.getElementById('CB').style.backgroundColor = "#3a4f00";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#3a4f00");
    document.getElementById('BT').style.backgroundColor = "#3a4f00";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#3a4f00");
    document.getElementById('ge').style.backgroundColor = "#3a4f00";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#3a4f00");
    document.getElementById('gi').style.backgroundColor = "#3a4f00";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#3a4f00");
    document.getElementById('VE').style.backgroundColor = "#3a4f00";
  }
});

document.getElementById('cor37').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#03503c");
    document.getElementById('CB').style.backgroundColor = "#03503c";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#03503c");
    document.getElementById('BT').style.backgroundColor = "#03503c";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#03503c");
    document.getElementById('ge').style.backgroundColor = "#03503c";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#03503c");
    document.getElementById('gi').style.backgroundColor = "#03503c";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#03503c");
    document.getElementById('VE').style.backgroundColor = "#03503c";
  }
});

document.getElementById('cor38').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#b2001c");
    document.getElementById('CB').style.backgroundColor = "#b2001c";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#b2001c");
    document.getElementById('BT').style.backgroundColor = "#b2001c";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#b2001c");
    document.getElementById('ge').style.backgroundColor = "#b2001c";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#b2001c");
    document.getElementById('gi').style.backgroundColor = "#b2001c";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#b2001c");
    document.getElementById('VE').style.backgroundColor = "#b2001c";
  }
});

document.getElementById('cor39').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#bd3539");
    document.getElementById('CB').style.backgroundColor = "#bd3539";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#bd3539");
    document.getElementById('BT').style.backgroundColor = "#bd3539";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#bd3539");
    document.getElementById('ge').style.backgroundColor = "#bd3539";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#bd3539");
    document.getElementById('gi').style.backgroundColor = "#bd3539";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#bd3539");
    document.getElementById('VE').style.backgroundColor = "#bd3539";
  }
});

document.getElementById('cor40').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#680116");
    document.getElementById('CB').style.backgroundColor = "#680116";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#680116");
    document.getElementById('BT').style.backgroundColor = "#680116";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#680116");
    document.getElementById('ge').style.backgroundColor = "#680116";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#680116");
    document.getElementById('gi').style.backgroundColor = "#680116";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#680116");
    document.getElementById('VE').style.backgroundColor = "#680116";
  }
});

  //bolso on/off
  const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.getElementById('frente4').style.visibility = "visible";
      document.getElementById('frente3').style.visibility = "hidden";
      document.querySelectorAll(".ziper").forEach(v => v.style.fill = "#00000000");
    }else {
      document.getElementById('frente4').style.visibility = "hidden";
      document.getElementById('frente3').style.visibility = "visible";
      document.querySelectorAll(".ziper").forEach(v => v.style.fill = "#969696");
    }
  });


  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "Polo.png");
      
    })
  })
 });

 //upload
 var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

  var canvas = new fabric.Canvas('list');
  let uploader = document.getElementById("uploader");
  uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
  var image = new Image();
  image.src = e.target.result;
  image.onload = function() {
    var img = new fabric.Image(image);
    img.set({
      left: 100,
      top: 60
    });
    img.scaleToWidth(200);
    canvas.add(img).setActiveObject(img).renderAll();
    }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
  document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
});


function deleteObject(eventData, transform) {
      var target = transform.target;
      var canvas = target.canvas;
          canvas.remove(target);
      canvas.requestRenderAll();
  };

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(imga, -size/2, -size/2, size, size);
  ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.getElementById('frente').style.display = "none";
      document.getElementById('costas').style.visibility = "visible";
    }else {
      document.getElementById('frente').style.display = "block";
      document.getElementById('costas').style.visibility = "hidden" ;
    }
  });


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.visibility = "visible";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.visibility = "hidden";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";

    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});
 

document.getElementById('botaocor').addEventListener('click', function(e){
  console.log('teste')
});

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorbotoes').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorgola').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorvista').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorcarcela').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpunho').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorpeitilho1').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpeitilho2').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorfriso').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});


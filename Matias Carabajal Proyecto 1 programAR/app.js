//MENUw
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Que se oculte el menu cada vez que se elija una opcion 
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Crea las barritas de una barra 
function crearBarra(id_barra){
    for(i=0;i<=9;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}


let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let react = document.getElementById("react");
crearBarra(react);
let sql = document.getElementById("sql");
crearBarra(sql);
let office = document.getElementById("office");
crearBarra(office);
let python = document.getElementById("python");
crearBarra(python);

let contadores = [-1,-1,-1,-1,-1,-1];

let entro = false;

//Funcion de la animacion de habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 8, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 7, 1, intervalJavascript);
        },100);
        const intervalreact = setInterval(function(){
            pintarBarra(react, 6, 2, intervalreact);
        },100);
        const intervalsql = setInterval(function(){
            pintarBarra(sql, 7, 3, intervalsql);
        },100);
        const intervaloffice = setInterval(function(){
            pintarBarra(office, 9 , 4, intervaloffice);
        },100);
        const intervalpython = setInterval(function(){
            pintarBarra(python, 6 , 5, intervalpython);
        },100);
    }
}

//Llena la barra con la cantida indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//Detecta el mouse para que funcione la animación de la barrita
window.onscroll = function(){
    efectoHabilidades();
}
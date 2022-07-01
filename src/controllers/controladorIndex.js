

//controlando etiquetas

//1.necesito almacenar una etiquetar en una variable
let titulo=document.getElementById("titulo")
let imagen=document.getElementById("foto")
let titulo2=document.getElementById("titulo2")
let boton=document.getElementById("boton")

//2. identifico que quiero controlar





//3 modificando estilos        

//3.1 agregando una clase       
titulo.classList.add('text-danger','fuente2')       

//3.2 quitando una clase       
titulo2.classList.remove('text-info')       
titulo2.classList.add('text-danger')       

//4 escuchar evento       
boton.addEventListener("click",function(){       
    //2.1 cambiando el texto       
    titulo.textContent="chao"       
    //2.2 cambiando la fuente src       
    imagen.src="https://placeimg.com/640/480/any"       
})
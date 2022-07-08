//datos de la base de datos
let productosBD=[
    {
        //
        nombre:"libro 1",
        precio:55000,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/juantiendatcc.appspot.com/o/libro1.jpg?alt=media&token=6acf4693-4bdc-4bce-9e5b-211702172eff','https://firebasestorage.googleapis.com/v0/b/juantiendatcc.appspot.com/o/libro1.jpg?alt=media&token=6acf4693-4bdc-4bce-9e5b-211702172eff'],
        descripcion:'libro para que aprendas'
    },
    {
        nombre:"libro 2",
        precio:55000,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/juantiendatcc.appspot.com/o/libro2.jpg?alt=media&token=b1553d0b-68f0-4cbe-a6b2-32de5e9e7710','https://firebasestorage.googleapis.com/v0/b/juantiendatcc.appspot.com/o/libro2.jpg?alt=media&token=b1553d0b-68f0-4cbe-a6b2-32de5e9e7710'],
        descripcion:''
    },
    {
        nombre:"libro 3",
        precio:55000,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/juantiendatcc.appspot.com/o/libro3.webp?alt=media&token=9f5d22a6-54b6-4820-ac72-54fd63c09c2e','https://firebasestorage.googleapis.com/v0/b/juantiendatcc.appspot.com/o/libro3.webp?alt=media&token=9f5d22a6-54b6-4820-ac72-54fd63c09c2e'],
        descripcion:''
    },
    {
        nombre:"libro 4",
        precio:55000,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/juantiendatcc.appspot.com/o/libro4.jpg?alt=media&token=af9de832-ad40-4ee8-ae28-e3a41ab50101','https://firebasestorage.googleapis.com/v0/b/juantiendatcc.appspot.com/o/libro4.jpg?alt=media&token=af9de832-ad40-4ee8-ae28-e3a41ab50101'],
        descripcion:''
    },
    {
        nombre:"libro 5",
        precio:55000,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/juantiendatcc.appspot.com/o/libro5.jpg?alt=media&token=27c011a3-48e0-48f2-9121-7380bb919dcf','https://firebasestorage.googleapis.com/v0/b/juantiendatcc.appspot.com/o/libro5.jpg?alt=media&token=27c011a3-48e0-48f2-9121-7380bb919dcf'],
        descripcion:''
    }
    // {
    //     nombre:"libro 6",
    //     precio:55000,
    //     cantidad:0,
    //     fotos:['97ebd6e4-d87c-4fb6-aca3-fd706bf53b88','97ebd6e4-d87c-4fb6-aca3-fd706bf53b88'],
    //     descripcion:''
    // },    {
    //     nombre:"libro 7",
    //     precio:55000,
    //     cantidad:0,
    //     fotos:['97ebd6e4-d87c-4fb6-aca3-fd706bf53b88','97ebd6e4-d87c-4fb6-aca3-fd706bf53b88'],
    //     descripcion:''
    // },
    // {
    //     nombre:"libro 8",
    //     precio:55000,
    //     cantidad:0,
    //     fotos:['97ebd6e4-d87c-4fb6-aca3-fd706bf53b88','97ebd6e4-d87c-4fb6-aca3-fd706bf53b88'],
    //     descripcion:''
    // },
    // {
    //     nombre:"libro 9",
    //     precio:55000,
    //     cantidad:0,
    //     fotos:['97ebd6e4-d87c-4fb6-aca3-fd706bf53b88','97ebd6e4-d87c-4fb6-aca3-fd706bf53b88'],
    //     descripcion:''
    // },
    // {
    //     nombre:"libro 10",
    //     precio:55000,
    //     cantidad:0,
    //     fotos:['97ebd6e4-d87c-4fb6-aca3-fd706bf53b88','97ebd6e4-d87c-4fb6-aca3-fd706bf53b88'],
    //     descripcion:''
    // },
  
]
// console.log(productosBD)
// productosBD.forEach(function(producto){
//     console.log(producto.nombre)
//     console.log(producto.fotos[0])
// })

//pasos para pintar (hacer render) de etiquetas html desde js
//traversing

//1. crear una referencia en memoria(variable) que almacena
//la etiqueta sobre la cual voy a pintar(etiqueta padre o etiqueta raiz)

let fila = document.getElementById("fila")

//2. recorro el arreglo de datos y aplico atreversing
productosBD.forEach(function(producto){
    //2.1 creando una columna desde js
    let columna=document.createElement("div")
    columna.classList.add("col")
    //2.2  creando la targeta
    let trajeta=document.createElement("div")
    trajeta.classList.add("card","h-100","text-center")

    //2.3 creando la foto
    let fotoProducto=document.createElement("img")
    fotoProducto.classList.add("img-fluid","w-100","h-100")
    fotoProducto.src=producto.fotos[0]
    //2.4 creando nombre
    let nombreProducto=document.createElement("h3")
    nombreProducto.textContent=producto.nombre
    //2.5 crenado precio
    let precioProducto=document.createElement("h2")
    precioProducto.classList.add("fw-bold")
    precioProducto.textContent='$'+producto.precio+'COP'
    //2.6 detectando evento
    columna.addEventListener("mouseover",function(){
        fotoProducto.src=producto.fotos[1]
    })
    columna.addEventListener("mouseleave",function(){
        fotoProducto.src=producto.fotos[0]
    })
    //3 defino padres e hijos
    trajeta.appendChild(fotoProducto)
    trajeta.appendChild(nombreProducto)
    trajeta.appendChild(precioProducto)
    columna.appendChild(trajeta)

    fila.appendChild(columna)

})
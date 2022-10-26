$(document).ready(listo); /*sintaxis documento listo para trabajar*/

function listo ()
{
    $(".hamb").click(function(e){  /*seleccionamos a traves de la class .hamb, y el .click es el "evento". que abrira el menu*/
        e.preventDefault();
    $("header .container nav").toggleClass("open") /*seleccionamos el "nav" que esta dentro del container que esta dentro 
        del header*/ /*toggleClass agrega o quita, si el nav tiene la clase "open" la va a quitar y sino la va a agregar*/
        
    $(".hamb i").toggleClass("fa-times") /*seleccionamos la "i", el icono hamburguesa dentro del elemento con class .hamb,
        y el toggleClass le va a agregar el icono X (fa-times), para poder cerrar el menu.*/
    });

    $("header .container nav a").click(function(){ /*seleccionamos los "a" que estan dentro del "nav"*/
    
    $("header .container nav").toggleClass("open") /*removeClass para que se cierre el menu cuando clickeamos algun "a"*/
    
    $(".hamb i").removeClass("fa-times") /*removeClass para cuando haga click en cualquier enlace "a" se cierre y quite la X*/
        
        var dev = $(this).attr("href");
            /*variable es un espacio de memoria donde puedo almacenar cualquier valor de cualquier tipo, numeros, palabras, valor de otra var. ,objetos, listas, etc. en este caso almacenamos el valor del atributo "href" para despues utilizarlo.*/
            /*(this) hace referencia a un elemento al que le estoy haciendo click.(a ese href al que le estoy haciendo click, voy a obtener el valor de ese atributo.)*/
            /*metodo "attr" para obtener el valor de un atributo.*/
    
    $("html,body").animate({ /*se necesita que se mueva la web hasta el enlace que seleccionamos, entonces se necesita seleccionar el html y el body*/
        "scrollTop": $(dev).offset().top -76/*colocamos la variable "dev" donde almacenamos la funcion "this".*/
                                        /*le quitamos -76px que es la medida del header, para que al scrollear no tape parte de la seccion*/
    }) 
                

    })
}





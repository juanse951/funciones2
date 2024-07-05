/*Crea una función que calcule el índice de masa corporal (IMC) 
de una persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros.*/
function imc(peso,altura){
    return (`Tu IMC es: ${(peso/(altura*altura))}`);
}
console.log(imc("70","1.70"));
/*Crea una función que calcule el valor del factorial de un número 
pasado como parámetro.*/
function factorial(numero){
    /* multiplicar todos los números enteros y positivos(una validacion que 
    tengo que hacer mediante ciclo for) que hay entre el número que aparece
    en la fórmula(numero) y el número 1(control).*/
    let control = 1;
    //control sera el numero por el cual se * todos los que de el ciclo for
    // El cero no es positivo ni negativo
    for(i=1 ; i<=numero ; i++){
    //i=1 indica el rango de numeros enteros y positivos
    //i<=numero indica que el parametro debe ser igual o mayor al rango para cumplir
    //i++ si cumple entonces a i se le suma 1
    control *= i;
    //como control era la constante del rango, se multiplica por la variable que obtuvimos en el ciclo for
    }
    //cerramos el ciclo y pedimos el retorno del resultado
    return `El Factorial de ${numero} es ${control}` ;

}
    console.log (factorial("5"));

    //CICLO FOR LA INICIALIZACION SOLO SE USA 1 VES
/*Crea una función que convierta un valor en dólares, pasado como
 parámetro, y devuelva el valor equivalente en reales
 (moneda brasileña,si deseas puedes hacerlo con el valor del dólar 
 en tu país). Para esto, considera la cotización del dólar igual a 
 R$4,80.*/    
function tasaDeCambio(valor){
  return `Tus R$${valor} equivalen a ${parseInt(valor / 4.80)}USD`;
 }
 console.log(tasaDeCambio(130));
 
 /*Crea una función que muestre en pantalla el área y el perímetro 
 de una sala rectangular, utilizando la altura y la anchura que se
  proporcionarán como parámetros.*/
function salaRectangular(altura,anchura){
    //area y perimetro
    return `Para una sala rectangular con altura ${altura}cm y anchura ${anchura}cm, el area es ${altura*anchura}cm y el perimetro es ${(altura*2)+(anchura*2)}cm`;
}
console.log(salaRectangular(10,20));

/*Crea una función que muestre en pantalla el área y el perímetro
 de una sala circular, utilizando su radio que se proporcionará
  como parámetro. Considera Pi = 3,14.*/
function salaCircular(radio){
    return `Para una sala circular con radio ${radio}cm, el area es ${3.14*(radio*radio)}cm y el perimetro es ${parseInt(2*3.14*radio)}cm`;
}
console.log(salaCircular(10));

/*Crea una función que muestre en pantalla la tabla de multiplicar 
de un número dado como parámetro.*/
function tabla(valor){
    let control1= valor ;
    for(i=1 ; i <= 10 ; i++){
        console.log(`${valor} * ${i} = ${control1*i}`);
    }
    //return control1;
}
tabla(50);




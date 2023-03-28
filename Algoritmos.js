//CALCULAR LA SUMA, RESTA, DIVISION Y MULTIPLICACION DE DOS NUMEROS 
function calculadora(a,b) {

    document.writeln(a+b);

    //console.log(a+b);

}

//calculadora(a+b);

//MEDIA DE VALORES

function media (){

   let campo_x = document.getElementById('x'); //enlasar un elemento desde js con el contenido de un elemento del doc
   let campo_y = document.getElementById('y');
   let campo_z = document.getElementById('z');

   //Casting: transformar de manera explicita el tipo de datos de una variable en js
   let x = parseInt(campo_x.value);
   let y = parseInt(campo_y.value);
   let z = parseInt(campo_z.value);

   let promedio = (x+y+z)/3

   console.log(promedio)
}
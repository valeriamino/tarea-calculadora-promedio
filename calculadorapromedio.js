let nombre=prompt('Ingresar el nombre del alumno');
let materia=prompt('Ingresar nombre de la materia');

let x=parseInt(prompt('Ingresar la primera nota en el rango del 0 al 10'));
while (x1<0 || x1 >10) {
   x=parseInt(prompt('Ingresar la primera nota en el rango del 0 al 10')); 
}

let y=parseInt(prompt('Ingresar la segunda nota en el rango del 0 al 10'));
while (x2<0 || x2>10) {
    y=parseInt(prompt('Ingresar la segunda nota en el rango del 0 al 10'));
}

let z=parseInt(prompt('Ingresar la tercera nota en el rango del 0 al 10'));
while (x3<0 || x3>10) {
    z=parseInt(prompt('Ingresar la tercera nota en el rango del 0 al 10'));
}

let a1=x+y+z;
let denominador=3;
let a2=a1/denominador;
if(a2>=7) {
    alert('nombre','¡Felicidades! Has aprobado con un promedio de !+a2');
} else {
    alert('nombre','Gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es de: '+a2);
}
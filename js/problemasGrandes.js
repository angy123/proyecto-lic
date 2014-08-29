/*
* Facultad de Estudios Tecnológicos
* Lenguajes Interpretados en el Cliente
* Fichero: ventas.js
* Uso: Obtener el bono por ventas anuales de n empleados
* Ciclo 2-2014
*<>
*/
var i;
var problema=new Array();

problema.push("<h2>1) LA PC DISMINUYO SU RENDIMIENTO<br></h2><h1>-POSIBLES CAUSAS: Este es el problema mas habitual entre los usuarios. Pueden haber muchas razones que expliquen una baja en el rendimiento de la PC. La mas comun es la presencia de datos fragmentados, presencia de spyware, registro corrupto, y programas innecesarios.<br>-LA SOLUCION: Chequear los programas que tenemos instalados y desinstalar los que no usas, borrar los archivos innecesarios, y ganar velocidad y rendimiento, ya sea desfragmentando el disco, o bien añadiendo memoria a la maquina.</h1>");
problema.push("<h2>2) APARECEN PANTALLAS DE ERROR, LOS PROGRAMAS SE TILDAN Y SE CIERRAN<br></h2><h1>-POSIBLES CAUSAS: El posible que nuestra PC tenga spyware o programas espia, y que esa sea la causa de que los programas no respondan y se deban finalizar.Tambien esta la de que el programa no funciona bien. Otra es que haya archivos de Windows necesarios para ejecutarlos y estan corruptos. Otra causa puede ser la falta de memoria RAM.<br>-LA SOLUCION: Si bien alcanzaria con actualizar un programa anti-spyware, las causas pueden venir de otro lado, como drivers mal instalados. Podrias fijarte re-instalando el programa que funciona mal. Si el problema es con windows seria recomendable no formatear sino reparar windows , si notamos que el problema puede venir de la memoria RAM, se le puede agregar mayor memoria virtual a la PC y asi optimizar su rendimiento.</h1>");
problema.push("<h2>3) LA COMPUTADORA SE REINICIA AUTOMATICAMENTE O SE APAGA<br></h2><h1>-POSIBLES CAUSAS: Pueden ser dos. La presencia de un - gusano - (un tipo de virus), o alguna obstruccion ( basura, mala coneccion ) dentro del gabinete o el cooler. Esto ultimo sucede cuando la PC no puede refrescarse: antes de recalentarse, sencillamente se apaga.<br>-LA SOLUCION: Si se trata de un virus, correr los antivirus correspondientes. Si el problema es una obstruccion, una buena forma de evitarlo es mantener el interior del gabinete y el cooler limpios, tener la cpu en un lugar ventilado, y evitar su exposicion al humo. Si el problema persiste, el problema puede ser la fuente de la PC, por lo que habria que chequear si esta funciona correctamente o si esta bien conectada. </h1>");
problema.push("<h2>4) RUIDOS EXTRAÑOS Y VIBRACIONES PROVENIENTES DEL GABINETE <br></h2><h1>-POSIBLES CAUSAS: Algun componente del gabinete o hardware esta fallando, ya sea el cooler, la fuente, cables mal conectados, o placas mal colocadas. Aqui las causas pueden ser multiples.<br>-LA SOLUCION: Abrir el gabinete y chequear que estaetodo bien conectado. Si no encontramos ninguna anormalidad en el gabinete fijar si hay algun hardware que no funcione bien, buscar los drivers, si es muy complicado lo mas conveniente es llamar al servicio tecnico.</h1>");
problema.push("<h2>5) LA PAGINA DE INICIO O EL BUSCADOR SE CAMBIO SOLO<br></h2><h1>-POSIBLES CAUSAS: Es probable que hayamos sido victimas del - high-jacking -. Esto quiere decir que tenemos un spyware instalado en nuestra PC, que pudo haber provenido tanto de un archivo descargado y ejecutado tanto como de una red socia o lun mail.<br>-LA SOLUCION: Es probable que el spyware haya instalado un - java script - en el navegador para cambiar las opciones personales. Corriendo algun programa de diagnostico, se puede evitar la llamada al servicio tecnico. </h1>");



for(i=0 ;i<=4;i++)
{

document.write(problema[i])


}

 
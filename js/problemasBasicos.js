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

problema.push("<h2>1) CONFIGURACION DEL SISTEMA<br></h2><h1>Tambien puedes aumentar la velocidad de tu disco duro cambiando la funcion de tu computadora de computadora de escritorio a servidor de red. Para cambiar esta configuracion, vaya a inicio / configuracion / panel de control, seleccione propiedades del sistema y luego seleccione el boton de rendimiento. En la seccion de configuracion avanzada en la parte inferior de la ventana, haz clic en el boton sistema de archivos. En la ventana de configuracion, funcion tipica de esta computadora cambia la funcion seleccionada de computadora de escritorio a servidor de red.  Si tu sistema todavia esta lento, puedes modificar los archivos del sistema para mejorar el rendimiento. Seleccione inicio / ejecutar y digita sysedit. se abrira los archivos principales del sistema de arranque que puedes modificar. Generalmente las variaciones en los archivos autoexec.bat y config.sys probablemente mejoren el rendimiento del sistema. Podrias solicitar ayuda a un tecnico para hacer las modificaciones. Recuerda hacer copias de seguridad antes de realizar los cambios. </h1>");
problema.push("<h2>2) WINDOWS UP DATES<br></h2><h1>Es buena idea utilizar con frecuencia Windows Up date para mantener el sistema operativo actualizado con las ultimas modificaciones y mejoras. </h1>");
problema.push("<h2>3) EL SISTEMA SE -CUELGA-  <br></h2><h1>Diferentes problemas pueden detener el sistema, como los problemas de memoria y de fluido electrico, sin embargo siempre se culpa a los controladores. Los controladores para el hardware rara vez se actualizan y con frecuencia tienen errores de programacion. Para solucionar este problema, haz una copia de seguridad de tu disco duro y crea un disco de arranque de emergencia en un disquete, luego ve a inicio / configuracion / panel de control y selecciona agregar / quitar programas. Desde el panel disco de arranque, haz clik en crear disco. Luego, consulta el sitio web de un distribuidor para descargar un nuevo controlador. </h1>");
problema.push("<h2>4) WINDOWS NO PUEDE ENCONTRAR EL NUEVO HADWARE<br></h2><h1>Primero consulta el manual para verificar que el dispositivo este correctamente instalado. Si esta bien instalado, haz clic en mi pc / propiedades / adminsitrador de dispositivos. Encuentra el dispositivo que tiene el problema. Si se levanta la bandera, utilice propiedades para ver cual es el problema. Si no se soluciona, haz clic en quitar y reinicie el equipo. Ahora windows debe volver a reconocer el hardware que acabas de quitar y debe instalar los controladores adecuados, para lo cual necesita tener primero una copia del nuevo controlador del sistema. Si no funciona, utiliza el asistente agregar nuevo hardware para seleccionar el dispositivo y controladores manualmente. </h1>");
problema.push("<h2>5) LA UNIDAD DE CD-ROM NO LEE SUS CDS  <br></h2><h1>Asegurate que el cable no se halla soltado de la tarjeta madre. Si no es este el problema, podria ser que tu lo deshabilitaste el administrador de desinstalacion de los dispositivos para el cd-rom. Ve al panel de control / administrador del sistema / cd-rom y desactiva el administrador de los dispositivos. Si no es este el problema, limpia los lentes y revisa el controlador. </h1>");

for(i=0 ;i<=4;i++)
{
document.write(problema[i])
}

 
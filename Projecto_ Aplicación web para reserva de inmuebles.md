# Projecto: Aplicación web para reserva de inmuebles
>>> Link to website: https://jovial-leakey-c1790b.netlify.app/

## Gestión de perfiles 
La aplicación cuenta con lo siguiente tipos de perfiles:
#### Visitante
El perfil visitante podrá:
- Ver todos los inmuebles al inicio de la aplicación (home). Los inmuebles estarán listados inicialmente de mayor a menor popularidad (promedio de calificaciones), pero se contará también con un botón para ordenar el listado por precio de mayor a menor. Estos criterios se podrán alternar en todo momento mientras se vea el listado. De cada inmueble se podrá ver: un título, una descripción, ciudad, precio por noche, promedio de calificaciones (de 1 a 5 con un dígito decimal luego de la coma), y la primera foto de este.
- Elegir moneda en la que se mostrarán los precios. Se contará con un botón a la altura del ordenamiento para cambiar de dólares a pesos (y viceversa) los precios que se mostraran en toda la aplicación.
- Buscar inmuebles. Deberá poder mediante un campo de texto, hacer búsquedas de inmuebles por el título o ciudad del inmueble. De no encontrar resultados por los primeros atributos, se buscará el criterio escrito por el usuario en las descripciones de los inmuebles. Se mostrarán los coincidentes. Si en ninguno de los casos se encuentran resultados se mostrará la leyenda “No existen resultados para su búsqueda”. La búsqueda debe ser case insensitive (y sin tener en cuenta tildes).
- Registrarse en la aplicación. Deberá completar un formulario con los siguientes datos: nombre, apellido, correo, celular. Todos los campos son obligatorios. Se deberá validar que el correo ingresado no haya sido usado antes, además que el mismo cumple con el formato “*@*.*” y que el celular sólo contenga números y que sea de largo 8. También se deberá elegir una contraseña que será ingresada 2 veces. Debe estar formada por letras y números, ser de al menos 6 caracteres y contar con al menos una letra mayúscula.

#### Usuario huésped
El perfil huésped podrá:
- Ingresar al sistema mediante ingreso de usuario y contraseña.
- Ver todos los inmuebles de la misma forma que se explicó para el perfil visitante incluyendo el ordenamiento, moneda y buscador. Pero además contará con un botón para “Ver más”.
- El botón o enlace ver más mostrará una nueva vista (pantalla) con toda la información del inmueble. A diferencia de la información del listado se mostrará inicialmente la misma foto del “home” pero se contará con un botón de anterior y siguiente para ir cambiando de foto.
- Realizar una solicitud de reserva. En la pantalla comentada antes se contará con un campo para ingresar la cantidad de noches a reservar el inmueble y un botón de solicitar reserva. Si el usuario ingresa un número válido mayor a 0 y presiona el botón se mostrará un párrafo con el precio total y un botón para confirmar. Al confirmar se mostrará un mensaje de éxito al usuario.
- Consultar y calificar reservas. El huésped podrá acceder a sus propias reservas mediante un listado en el que se mostrará una tabla con la primera foto del inmueble, el título y un campo de texto para ingresar una calificación de 1 a 5. Para confirmar la calificación se contará con un botón al lado del campo de texto. Esté botón se mostrará únicamente para las reservas no calificadas. Una vez ingresada la calificación se actualizará la lista.
- Cerrar sesión llevando al usuario a la vista de home del visitante.

#### Anfitrión
El perfil anfitrión podrá:
- Ingresar al sistema mediante ingreso de usuario y contraseña.
- Ver sus inmuebles. Se mostrarán los inmuebles al estilo “home” del visitante, pero solamente los inmuebles correspondientes a ese usuario. No se deberá mostrar ningún tipo de ordenamiento ni filtros en este caso. La moneda siempre será pesos uruguayos para este perfil. En cada inmueble se contará con un botón para habilitar o deshabilitar el mismo, quitándolo de las listas de los usuarios visitantes y huéspedes al deshabilitarlo.
- Registrar un inmueble. Se registrarán todos los datos de un inmueble indicados en los perfiles anteriores. Todos los datos son obligatorios. Para el caso de las fotos, se deberán elegir al menos 3 fotos de una lista de archivos precargados en el sistema. Esos archivos, elegidos del total de fotos disponibles, serán las fotos del inmueble.
- Cerrar sesión llevando al usuario a la vista de home del visitante.

#### Administrador
El perfil administrador podrá:
- Ingresar al sistema. Las credenciales serán siempre “admin” y contraseña “1234”
- Dar de alta a un anfitrión. El administrador podrá dar de alta un anfitrión ingresando todos los datos especificados en el registro de huéspedes. Se validará la información de la misma forma que fue explicada antes.
- Cargar cotización. Mediante un campo de texto podrá cargar la cotización del dólar en todo momento. Se validará que se ingrese un número mayor a 0. Esa cotización se utilizará para mostrar los precios en dólares cuando el usuario lo desee.
- Ver un reporte de inmuebles. Podrá ver en una tabla inmuebles de acuerdo con un rango de precios ingresado por el administrador. Se tendrán campos para desde y hasta, y en caso de no ingresar valores para alguno de los 2 se omitirá el límite en particular. Es decir, que si no se ingresa desde no habrá cota inferior; análogamente lo mismo para el campo hasta. Se validará que los importes sean numéricos y que el desde sea menor al hasta. La moneda utilizada en este caso es pesos uruguayos.
- Cerrar sesión llevando al usuario a la vista de home del visitante.



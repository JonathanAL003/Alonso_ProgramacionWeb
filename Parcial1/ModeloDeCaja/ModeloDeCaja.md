# MODELO DE CAJA

Modelo de cajas en CSS: *es un sistema que tiene el navegador de interpretar las diferentes partes  «cajas»: un elemento HTML con unas ciertas dimensiones.*

**El borde (border)**, en negro, es el límite que separa el interior del exterior del elemento.  
**El márgen (margin)**, en naranja, es la parte exterior del elemento, por fuera del borde.  
**El relleno (padding)**, en verde, es la parte interior del elemento, entre el contenido y el borde.  
**El contenido, en azul**, es la parte interior del elemento, excluyendo el relleno.

![IMAGEN](https://lenguajecss.com/css/modelo-de-cajas/que-es/modelo-de-cajas.png)

## Dimensiones (ancho y alto) 

Propiedad                | Valor                    |Significado
-------------------------|------------------------- |-------------------------
width      | auto o size           | Tamaño de ancho de un elemento.
height       | auto o size         | 	Tamaño de alto de un elemento.

En el caso de indicar el valor auto a dichas propiedades, el navegador se encargará de darle el tamaño apropiado, dependiendo de su contenido. Ten en cuenta que este valor es el que tienen por **defecto** estas propiedades. *De no indicar un valor concreto, width y height tienen establecido el valor auto.*

## Rango de dimensiones

Propiedad                | Valor                    |Significado
-------------------------|------------------------- |-------------------------
max-width   |	none | 	Ancho máximo que puede ocupar un elemento.
min-width   |0 | 	Ancho mínimo que puede ocupar un elemento.
max-height  |none | 	Alto máximo que puede ocupar un elemento.
min-height  |	0 | 	Alto mínimo que puede ocupar un elemento.

Con estas propiedades, en lugar de establecer un tamaño fijo, establecemos unos rangos máximos y mínimos.

## Zonas de un elemento 

![IMAGEN2](https://lenguajecss.com/css/modelo-de-cajas/que-es/positions.png)

**Top:** Se refiere a la parte superior del elemento.  
**Left:** Se refiere a la parte izquierda del elemento.  
**Right:** Se refiere a la parte derecha del elemento.  
**Bottom:** Se refiere a la parte inferior del elemento.  
**Center:** En algunos casos se puede especificar el valor center para referirse a la posición central entre los extremos horizontales o verticales.

## OVERFLOW

*La propiedad CSS overflow-y define qué se debe mostrar cuando el contenido se desborda de los extremos superior e inferior de un elemento en bloque.*

Podemos modificar ese comportamiento con la propiedad de **CSS overflow**, o con alguna de sus propiedades específicas **overflow-x o overflow-y:**

Propiedad                | Valor                    |Significado
-------------------------|------------------------- |-------------------------
overflow	visible | hidden | scroll | auto	Establece el comportamiento de desbordamiento.
overflow-x	visible | hidden | scroll | auto	Establece el desbordamiento sólo para el eje X (horizontal).
overflow-y	visible | hidden | scroll | auto	Establece el desbordamiento sólo para el eje Y (vertical).

Dichas propiedades pueden tomar varios valores, donde visible es el valor que tiene por defecto, que permite que haya desbordamiento. Otras opciones son las siguientes, donde no se permite desbordamiento:


Valor   |	¿Qué ocurre si se desborda el contenedor?   |	¿Desbordamiento?
-------------------------|------------------------- |-------------------------
visible |	Se muestra el contenido que sobresale (comportamiento por defecto)  |	Sí
hidden  |	Se oculta el contenido que sobresale.   |	No
scroll  |	Se colocan barras de desplazamiento (horizontales y verticales).    |	No
auto    |	Se colocan barras de desplazamiento (sólo las necesarias).  |	No
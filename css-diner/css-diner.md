# Captura

![CSS-DINNER](https://i.imgur.com/6ykyzp7.png)

# Respuestas

```
1. plate
2.  bento
3.  #fancy
4.  plate apple
5.  #fancy pickle
6.  .small
7.  orange.small
8.  bento orange.small
9.  plate, bento
10. *
11. plate *
12. plate + apple
13. bento ~ pickle
14. plate > apple
15. orange:first-child
16. plate apple:only-child, plate pickle:only-child
17. apple:last-child, pickle:last-child
18. :nth-child(3)
19. bento:nth-last-child(3)
20. apple:first-of-type
21. :nth-of-type(even)
22. :nth-of-type(2n+3)
23. apple:only-of-type
24. orange:last-of-type, apple:last-of-type
25. bento:empty
26. apple:not(.small)
27. [for]
28. plate[for]
29. [for="Vitaly"]
30. [for^="Sa"]
31. [for$="ato"]
32. [for*="obb"]
```

# Lista de selectores CSS:

🔣 Selectores CSS:

```
Selectores básicos
Selector de tipo o etiqueta
Selector de clase (.)
Selector de id (#)
Selector universal (*)
Selector de atributo [~=, | , *, ^, $ ]

Combinadores
Hermano adyacente (+)
Hermano general (~)
Hijo directo (>)
Descendiente (espacio)
```

Nota: Una lista de selectores la conforman dos o más selectores de cualquier tipo separados por una coma ,

```
#unico,
main:hover > h1,
ol > li:only-child {}
```

# Especificidad en CSS:

- La especificidad en CSS es un grupo de reglas aplicadas a los selectores CSS para determinar qué estilo se aplica a un elemento. Cuanto más específico sea un selector, mayor será su valor en puntos y más probable será que esté presente en el estilo del elemento.

La documentación oficial de la MDN describe la especificidad de la siguiente manera:

- _*La especificidad es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados*_

# ¿Cómo se calcula la especificidad en CSS?:

Imagen Guía 1
![Jerarquía](https://res.cloudinary.com/practicaldev/image/fetch/s--tbhPGpXB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9wc5w6w10yriwydymc55.png)

Tener una forma de calcular la especificidad nos permite identificar qué estilos mostrará el navegador y nos ayuda a comprender las decisiones que éste toma para ejecutar una regla sobre otra.

Dicho esto, vamos con los pasos:

- Identifica las reglas CSS que afectan al elemento sobre el cual deseas aplicar el estilo.
  Pondera cada selector según la función que cumpla dentro de la hoja de estilo. En general, podemos agruparlos así:
  - Estilos aplicados directamente en HTML: asigna 1000 puntos a estos estilos.
  - IDs: Estos selectores son únicos; por eso, son muy específicos. Por cada ID habría que añadir 100 puntos.
  - Clases, pseudo-clases, atributos: estos tres selectores permiten agrupar varios elementos HTML a los que se desee darles estilo con una sola regla CSS. En vista de que es menos específico que los IDs, hay que asignarles 10 puntos.
  - Elementos y pseudo-elementos: Se refiere a los elementos HTML y a comandos relacionados con la posición del elemento o interacciones del usuario con el elemento al que queremos darle estilo, como en el caso de :hover.

Imagen Guía 2
![Jerarquía](https://res.cloudinary.com/practicaldev/image/fetch/s--Q7AjHHJ9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hhf8sfgmd2w72c7yp8o3.png)

Compara los resultados. De esta manera, puedes determinar cuál regla CSS tiene mayor especificidad.

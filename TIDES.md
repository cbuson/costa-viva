# COSTA VIVA · Módulo de marea astronómica

Versión de integración 0.5.13.

## Fuente mareográfica por defecto

TICON 3

Hart-Davis, Michael G., Dettmering, Denise & Seitz, Florian. 2022. TICON-3. Tidal Constants based on GESLA-3 sea-level records from globally distributed tide gauges including gauge type information. PANGAEA. https://doi.org/10.1594/PANGAEA.951610

Licencia del dataset TICON 3 · CC BY 4.0.

## Comprobación previa de ubicación costera

Antes de buscar una estación TICON 3, COSTA VIVA realiza una comprobación geográfica aproximada para evitar ofrecer una referencia mareal en ubicaciones claramente interiores.

La comprobación utiliza una máscara terrestre simplificada derivada de Natural Earth 1:110m. Natural Earth distribuye sus datos en dominio público.

La máscara no se utiliza para medir erosión, delimitar jurídicamente la costa ni calcular una distancia costera de precisión. Su única función es impedir resultados evidentemente incoherentes.

Si el punto está dentro de una masa terrestre reconocida por la máscara y se encuentra a 100 km o más de su borde exterior, COSTA VIVA muestra

**No aplicable en esta ubicación**

junto con una distancia aproximada a la costa.

El umbral es deliberadamente conservador por la baja resolución de la máscara. Si el punto no puede clasificarse con seguridad, la aplicación no bloquea el módulo mareal.

## Qué funciona en 0.5.13

- tarjeta de marea en la pantalla Registrar
- comprobación aproximada de ubicación claramente interior
- funcionamiento offline de la máscara costera después de instalar la PWA
- importación local de `TICON_3.txt`
- filtrado de estaciones `Coastal`
- almacenamiento offline en IndexedDB
- búsqueda de la estación costera TICON más próxima
- visualización de la estación utilizada y su distancia
- conservación de la referencia mareográfica dentro del registro
- conservación del estado de aplicabilidad costera y de la distancia aproximada calculada por el filtro

## Qué no está activado todavía

La altura de marea, tendencia, pleamar y bajamar no se calculan todavía.

Esto es deliberado. Para reconstruir TICON correctamente se debe validar el tratamiento de argumentos astronómicos, factores nodales y fases Greenwich. COSTA VIVA no muestra números ficticios durante esta etapa.

## Regla de interpretación

La futura salida se denominará **Marea astronómica estimada**.

Nunca se presentará como nivel real observado del mar.

La observación comunitaria del estado del mar permanece como dato independiente.


## Comprobación previa de zona costera

Antes de utilizar TICON 3, COSTA VIVA estima de forma aproximada la distancia de la posición registrada a la línea de costa Natural Earth 1:50m. Si la posición se encuentra a más de 50 km de esa referencia, la aplicación muestra que la marea no es aplicable en esa ubicación y no busca una estación TICON. Esta comprobación es un filtro de coherencia, no una delimitación legal ni geomorfológica de la zona costera. Natural Earth es un conjunto cartográfico de dominio público.

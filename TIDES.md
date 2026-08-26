# COSTA VIVA · Módulo de marea astronómica

Versión de integración 0.5.11.

## Fuente por defecto

TICON 3

Hart-Davis, Michael G., Dettmering, Denise & Seitz, Florian (2022). TICON-3: Tidal Constants based on GESLA-3 sea-level records from globally distributed tide gauges including gauge type information. PANGAEA. https://doi.org/10.1594/PANGAEA.951610

Licencia del dataset TICON 3 · CC BY 4.0.

## Qué funciona en 0.5.11

- tarjeta de marea en la pantalla Registrar
- importación local de `TICON_3.txt`
- filtrado de estaciones `Coastal`
- almacenamiento offline en IndexedDB
- búsqueda de la estación costera más próxima
- cálculo y visualización de la distancia geodésica aproximada sobre esfera
- conservación de la referencia mareográfica dentro del registro

## Qué no está activado todavía

La altura de marea, tendencia, pleamar y bajamar no se calculan todavía. Esto es deliberado. Para reconstruir TICON correctamente se debe validar el tratamiento de argumentos astronómicos, factores nodales y fases Greenwich. COSTA VIVA no muestra números ficticios durante esta etapa.

## Regla de interpretación

La futura salida se denominará Marea astronómica estimada. Nunca se presentará como nivel real observado del mar. La observación comunitaria del estado del mar permanece como dato independiente.

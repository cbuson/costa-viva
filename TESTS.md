# Pruebas de campo y de interfaz

## Mobile first

Comprobar manualmente en

- 320 px
- 360 px
- 375 px
- 390 px
- 412 px
- 430 px
- 768 px

## PWA

- Primera carga en HTTPS
- Aparición de opción de instalación cuando el navegador la soporte
- Apertura desde el icono instalado
- Recarga posterior sin conexión del shell local

## Idiomas

- Cambio ES a PT sin recargar
- Cambio PT a ES sin recargar
- Formularios y ayudas traducidos
- Notas del usuario sin modificación

## Ubicación

- Permiso concedido
- Permiso rechazado
- Precisión alta
- Precisión baja
- Altitud disponible
- Altitud no disponible
- Dirección disponible
- Dirección no disponible

## Multimedia

- Una fotografía
- Varias fotografías
- Verificación de fotografía original
- Verificación de fotografía documentada
- Vídeo
- Audio
- Reproducir audio antes de guardar
- Eliminar audio y repetir

## Registro

- Guardar observación sin nota
- Guardar con nota
- Guardar con medición por cinta
- Guardar con medición por pasos
- Guardar con estimación
- Crear punto permanente
- Volver a punto permanente
- Cerrar y reabrir navegador

## Cuaderno

- Buscar por código
- Buscar por nota
- Filtrar por categoría
- Filtrar con multimedia
- Filtrar puntos permanentes
- Abrir ficha
- Eliminar con confirmación

## Mapa

- Punto con coordenadas
- Registro sin coordenadas
- Varios puntos
- Mi posición
- Sin conectividad
- Persistencia de registros sin mapa base

## Exportación

- JSON
- CSV
- GeoJSON
- ZIP
- Originales de fotografía dentro del ZIP
- Fotografías documentadas dentro del ZIP
- Vídeo dentro del ZIP
- Audio dentro del ZIP
- Metadatos dentro del ZIP
- Compartir en Android compatible
- Alternativa por descarga cuando compartir archivos no esté disponible

## Errores

- Cámara cancelada
- Micrófono rechazado
- Geolocalización rechazada
- Poco almacenamiento
- Cierre accidental antes de guardar
- Navegador reiniciado

Las pruebas reales de permisos y sensores deben realizarse en dispositivos físicos. No pueden validarse completamente desde una comprobación estática del código.

## Versión 0.2.0

Pruebas añadidas

- La ayuda muestra el protocolo de línea fija con cinta en español y portugués
- La ayuda muestra el protocolo de fotografía desde punto fijo
- La ayuda advierte sobre la influencia de marea y oleaje al medir hasta el borde del agua
- El formulario incorpora el campo Línea medida
- La exportación CSV incluye `measurement_target`
- La exportación GeoJSON incluye los datos estructurados de medición
- El detalle del registro muestra la línea medida cuando existe
- Los estados de cámara y micrófono disponen de elementos visibles en la interfaz

Pendiente de validación en teléfono físico

- Repetición real de un punto permanente en campo
- Calidad de lectura de cinta y facilidad de introducción con una mano
- Comprensión comunitaria de los conceptos Referencia fija y Línea medida
- Funcionamiento de sensores en diferentes modelos Android

## Información del proyecto y licencias · v0.3.0

- [ ] El icono `i` aparece junto al selector ES y PT en 320, 360, 375, 390, 412, 430 y 768 px
- [ ] El icono tiene un área táctil mínima aproximada de 40 a 44 px y etiqueta accesible
- [ ] El panel de información abre y cierra con toque
- [ ] El panel se cierra con la tecla Escape en escritorio
- [ ] El panel puede cerrarse tocando fuera de la tarjeta
- [ ] Todo el contenido del panel cambia entre español y portugués sin recargar
- [ ] La autoría muestra Carlos Busón Buesa
- [ ] El vínculo académico se presenta sin afirmar financiación ni aval institucional
- [ ] El código enlaza al archivo LICENSE con licencia MIT
- [ ] Los contenidos metodológicos enlazan a CONTENT-LICENSE.md con CC BY 4.0
- [ ] El panel explica el propósito de ciencia popular, la propiedad comunitaria de los datos y los límites instrumentales


## Selección múltiple de observaciones · v0.4.0

- Marcar dos o más categorías y guardar un único registro
- Comprobar que todas las categorías aparecen en Cuaderno
- Comprobar que todas las categorías aparecen en el detalle del registro
- Filtrar un registro por cualquiera de sus categorías
- Exportar JSON y verificar `categories`
- Exportar CSV y verificar la columna `categories`
- Exportar GeoJSON y verificar `categories`
- Abrir un registro antiguo con un único campo `category`
- Seleccionar `Sin cambio aparente` y comprobar que se desmarcan las demás
- Seleccionar cualquier cambio y comprobar que `Sin cambio aparente` se desmarca

## Información ampliada del proyecto · v0.5.0

Comprobar en ES y PT que el botón i muestra el origen en Arroyo Guerrero.

Comprobar que aparece la colaboración de Clarena Fonseca.

Comprobar que la sección de desplazamiento incluye la advertencia sobre causalidad y condición jurídica.

Comprobar que se muestran ODS 10, 11, 13, 14, 16 y 17.

Comprobar que la relación con los ODS no se presenta como reconocimiento oficial de Naciones Unidas.

Comprobar que el panel mantiene lectura correcta a 320, 360, 375, 390, 412, 430 y 768 px.

## Citación en información · v0.5.1

- Abrir el botón i y desplazarse hasta el final.
- Confirmar la presencia de Cómo citar COSTA VIVA en ES.
- Cambiar a PT y confirmar Como citar COSTA VIVA.
- Confirmar la referencia Busón Buesa, C. (2026) y Version v0.5.0.
- Confirmar el DOI 10.5281/zenodo.22113035.
- Confirmar que el enlace DOI abre en una nueva pestaña.
- Confirmar que el pie muestra COSTA VIVA v0.5.1.


## Instalación PWA · v0.5.2

- Verificar que Instalar sea visible en 320, 360, 375, 390, 412 y 430 px antes de instalar.
- En Android Chrome comprobar el flujo nativo cuando beforeinstallprompt esté disponible.
- Comprobar que, si el prompt nativo no está disponible, el botón abre una guía manual y no finge una instalación.
- En iOS Safari comprobar que la guía indique Compartir y Añadir a pantalla de inicio.
- Comprobar el botón de instalación dentro de Ayuda.
- Tras instalar, abrir la PWA y confirmar que los botones de instalación no vuelven a mostrarse en modo standalone.

## Prueba específica v0.5.3

- Abrir una versión anterior en Android y dejarla controlada por el Service Worker.
- Publicar v0.5.3.
- Reabrir COSTA VIVA con conexión.
- Verificar que el nuevo Service Worker toma control y la página se actualiza una sola vez.
- Verificar que aparecen los controles nuevos, incluido Instalar.
- Desconectar Internet y comprobar que la aplicación sigue abriendo desde caché.


## Pruebas v0.5.4

- Cambiar ES y PT y verificar todos los textos de gobernanza.
- Abrir y cerrar cada pregunta del bloque Tus datos y tu decisión.
- Abrir el panel i y verificar la sección Gobernanza comunitaria de los datos.
- Verificar que los enlaces CARE y OCAP® abren en una pestaña externa.
- Verificar legibilidad a 320, 360, 375, 390, 412, 430 y 768 px.
- Verificar que ningún texto afirma transferencia automática, propiedad del investigador o certificación OCAP®.


## Pruebas v0.5.5

- [ ] Cabecera a 320 px sin botón Instalar y sin desbordamiento.
- [ ] Cabecera a 360, 390, 412 y 430 px con ES, PT e información accesibles.
- [ ] Ayuda muestra Gobernanza en una sola columna.
- [ ] Aviso GPS se lee en una sola columna.
- [ ] Botón INSTALAR EN ESTE CELULAR permanece disponible en Ayuda.
- [ ] El modal de instalación funciona desde Ayuda.


## Pruebas de mapa v0.5.7

- Verificar que Capas abre y cierra el selector sin bloquear el mapa
- Verificar que Mapa solicita únicamente las teselas visibles de OpenStreetMap
- Verificar que Satélite solicita únicamente las teselas visibles de Esri World Imagery
- Verificar que Sin mapa no realiza solicitudes de teselas y mantiene visibles los marcadores
- Verificar que la opción elegida permanece después de recargar la aplicación
- Verificar atribución visible para OpenStreetMap y Esri
- Verificar que Mi posición centra el mapa en las tres bases
- Verificar zoom y desplazamiento en 320, 360, 375, 390, 412, 430 y 768 px
- Verificar que la falta de Internet no elimina puntos ni registros
- Verificar ES y PT en Capas, Mapa, Satélite y Sin mapa


## Intercambio comunitario v0.5.7

- [ ] Seleccionar uno, varios y todos los registros para compartir
- [ ] Excluir coordenadas y comprobar que no aparecen en JSON, CSV ni GeoJSON
- [ ] Excluir notas, mediciones y tipos de multimedia de forma independiente
- [ ] Compartir mediante Web Share cuando el dispositivo lo permita
- [ ] Comprobar fallback por descarga `.cvpack` cuando Web Share no admita archivos
- [ ] Importar `.cvpack` en otro dispositivo COSTA VIVA
- [ ] Confirmar que los registros importados aparecen como Recibidos
- [ ] Confirmar que una segunda importación del mismo paquete no duplica UUID existentes
- [ ] Comprobar preservación de fotografías, vídeos y audios seleccionados
- [ ] Comprobar que códigos iguales de diferentes cuadernos no se confunden en el dispositivo receptor
- [ ] Revisar advertencia de metadatos de multimedia cuando se ocultan coordenadas

## Wayuunaiki 0.5.8

- [ ] El selector W activa el idioma interno `guc`.
- [ ] Al activar W aparece el aviso de versión en construcción comunitaria.
- [ ] Los términos Wayuunaiki documentados se muestran correctamente con caracteres Unicode.
- [ ] Los textos no verificados permanecen en castellano y no muestran traducciones inventadas.
- [ ] ES y PT continúan funcionando sin regresiones.
- [ ] La cabecera con ES PT W e i funciona a 320 px sin desbordamiento horizontal.
- [ ] La versión Wayuunaiki será revisada por hablantes Wayuu antes de considerarse validada.


## Wayuunaiki 0.5.13

- [x] Las 388 claves de español tienen una cadena provisional WY.
- [x] WY ya no utiliza el objeto español como fallback por diseño.
- [x] El selector muestra WY.
- [x] Existe aviso visible de traducción provisional.
- [x] Se genera `WAYUUNAIKI_REVIEW.csv` para revisión local.
- [ ] Revisión lingüística por hablantes Wayuu.
- [ ] Revisión de variantes locales y adecuación cultural.


## Pruebas TICON 3

- [ ] Sin ubicación, la tarjeta solicita activar GPS.
- [ ] Con ubicación y sin dataset, informa que TICON 3 no está instalado.
- [ ] Un archivo TICON 3 válido importa solo estaciones `Coastal`.
- [ ] Tras importar, muestra estación de referencia y distancia.
- [ ] El registro guarda la referencia TICON sin altura mareal falsa.
- [ ] ES, PT y WY muestran el nuevo bloque.
- [ ] La ayuda y la i citan DOI y licencia de TICON 3.

## Pruebas de aplicabilidad costera · v0.5.13

- [x] La posición de prueba en Campo Grande MS se clasifica como claramente interior con la máscara incluida.
- [x] Una posición de prueba próxima a Riohacha no se bloquea como interior.
- [ ] Probar en un celular físico en Campo Grande y comprobar el mensaje No aplicable en esta ubicación.
- [ ] Probar en Arroyo Guerrero y comprobar que el filtro no bloquea el módulo mareal.
- [ ] Probar sin Internet después de instalar la PWA.
- [ ] Probar una isla pequeña que no figure en la máscara simplificada y comprobar que no se excluye automáticamente.
- [ ] Comprobar ES, PT y WY.

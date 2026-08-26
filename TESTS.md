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

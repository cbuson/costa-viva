# Auditoría inicial COSTA VIVA 0.1

## Comprobaciones realizadas en esta entrega

- Sintaxis JavaScript comprobada con Node
- Sintaxis del Service Worker comprobada con Node
- Manifest válido como JSON
- Identificadores HTML revisados sin duplicados
- Referencias principales de elementos revisadas
- Claves de traducción HTML revisadas para español
- Diseño estático comprobado en 320, 360, 375, 390, 412, 430 y 768 px
- No se detectó desplazamiento horizontal en esos anchos durante la prueba estática
- Generador ZIP sin compresión probado con archivos de prueba y validado con `unzip -t`
- Primera pantalla y formulario principal inspeccionados visualmente a 390 px

## Elementos que requieren teléfono físico

No se consideran validados hasta probarlos en dispositivos reales.

- Geolocalización y precisión GPS
- Altitud
- Orientación absoluta
- Cámara trasera
- Fotografía documentada obtenida desde una cámara real
- Vídeo
- Permisos de micrófono
- MediaRecorder
- Instalación PWA en Android
- Funcionamiento en modo avión después de la primera carga
- Web Share API con archivos ZIP
- Rendimiento con vídeos grandes
- Persistencia de IndexedDB después de cierres y reinicios

## Criterio metodológico aplicado

La aplicación conserva valores ausentes como no disponibles.

La dirección solo se utiliza cuando existe una fuente de orientación considerada absoluta por el navegador o una brújula compatible.

La precisión GPS se conserva como parte del registro.

La aplicación no calcula automáticamente una tasa de erosión a partir de posiciones cuya incertidumbre pueda ser comparable con el cambio observado.

## Estado

Esta entrega es una primera versión funcional preparada para GitHub Pages y para iniciar pruebas en celulares reales.

No debe considerarse una versión de campo validada hasta completar la matriz de pruebas en dispositivos físicos.

## Auditoría 0.2.0

Se añadió un protocolo de medición comunitaria con medios sencillos basado en repetición de una línea fija de control.

La interfaz separa ahora la referencia fija de la línea costera que se mide.

Esto evita confundir el objeto desde el que se mide con el rasgo costero cuyo cambio se sigue.

Se añadieron advertencias para no interpretar diferencias del borde del agua como erosión cuando las observaciones corresponden a estados de marea diferentes.

Se añadió un protocolo de fotografía repetida desde punto fijo.

La ayuda insiste en seguridad y en no sustituir silenciosamente referencias que se hayan movido o perdido.

Se corrigió además la interfaz de estado de sensores para que cámara y micrófono dispongan de sus elementos visibles correspondientes.

## V0.3.0 · Información, autoría y apertura

Se incorpora un acceso de información `i` junto al selector de idioma.

El panel informa sobre el propósito de COSTA VIVA como herramienta de ciencia popular, la autoría, el vínculo académico del autor, los compromisos metodológicos, la propiedad comunitaria de los registros, los límites de uso y las licencias abiertas.

La redacción distingue expresamente la afiliación académica del autor de cualquier certificación, financiación o aval institucional de la herramienta.

El código fuente se licencia bajo MIT.

Los textos propios de ayuda, documentación y materiales metodológicos se ofrecen bajo CC BY 4.0, licencia más adecuada para contenidos reutilizables.

Pendiente de validación en teléfono físico

- comportamiento del panel en Android y navegadores móviles reales
- lectura exterior
- uso con ampliación de fuente del sistema
- lectores de pantalla


## V0.4.0 · Observaciones múltiples

La ficha deja de tratar la realidad observada como una elección única. Un mismo evento puede reunir pérdida de playa, inundación, afección de vivienda, camino o vegetación.

Se adopta selección múltiple con compatibilidad hacia atrás para registros antiguos.

La opción `Sin cambio aparente` se mantiene mutuamente excluyente respecto de las categorías que describen cambios para evitar registros internamente contradictorios.

## V0.5.0 · Origen comunitario, desplazamiento y ODS

Se añade al panel de información una sección bilingüe sobre el origen de COSTA VIVA en el trabajo con comunidades Wayuu de Arroyo Guerrero y la colaboración de Clarena Fonseca.

Se incorpora una explicación prudente sobre desplazamiento asociado a factores climáticos y ambientales. La aplicación no clasifica jurídicamente a personas ni determina causalidad por sí sola.

Se incorpora la relación con ODS 10, 11, 13, 14, 16 y 17 dejando claro que no existe certificación o reconocimiento oficial de Naciones Unidas.

## V0.5.1 · Citación visible

- Añadida al final del panel de información la referencia archivada de COSTA VIVA v0.5.0 en Zenodo.
- DOI visible y enlazado.
- Texto bilingüe ES y PT para el encabezado y la nota de versión.
- La referencia bibliográfica se mantiene sin traducir para preservar su forma de citación.
- La release v0.5.0 archivada en Zenodo no se modifica.


## V0.5.2 · Instalación PWA visible

- Botón Instalar visible también en pantallas de 320 a 420 px cuando la aplicación no está instalada.
- Botón adicional de instalación dentro de Ayuda.
- Uso del evento beforeinstallprompt cuando el navegador lo ofrece.
- Instrucciones manuales adaptadas a Android, iOS y escritorio cuando no existe prompt nativo.
- Detección de modo standalone para no ofrecer instalación después de instalar la PWA.
- Ocultación automática de las acciones de instalación tras appinstalled.

## v0.5.3 · actualización PWA en móviles

Se cambia la estrategia del Service Worker de cache first a network first para recursos propios. El objetivo es evitar que un teléfono siga mostrando una interfaz anterior después de publicar una actualización en GitHub Pages. El nuevo Service Worker fuerza la actualización de su registro y recarga una sola vez cuando una nueva versión toma el control. El funcionamiento offline se conserva mediante fallback a caché.


## Auditoría v0.5.4

- Se añadió gobernanza comunitaria de datos en la información del proyecto.
- Se añadió una explicación práctica en Ayuda sobre quién puede ver, compartir y solicitar los registros.
- Se verificó que no se afirme cumplimiento ni certificación OCAP®.
- Se explicita que CARE y OCAP® son referencias y que los acuerdos propios de cada comunidad prevalecen.
- Se mantiene la arquitectura local first y no se añade transmisión automática de registros.


## Auditoría v0.5.5

- Retirado el botón Instalar de la cabecera.
- Conservado el flujo de instalación desde Ayuda.
- Corregida la regla flex que comprimía contenidos complejos de Ayuda.
- Gobernanza, GPS, protocolo de campo e instalación se fuerzan a una columna en móvil.
- Cabecera móvil compactada para mantener COSTA VIVA, ES, PT e información sin una segunda fila innecesaria.


## Auditoría v0.5.7

Se incorporó un selector cartográfico limitado a tres estados para no aumentar la carga cognitiva de la interfaz comunitaria.

La base Mapa utiliza OpenStreetMap.

La base Satélite utiliza Esri World Imagery como referencia visual.

La base Sin mapa conserva una superficie neutra y los puntos locales sin requerir una base externa.

Se añade advertencia metodológica sobre la fecha potencialmente diferente de las imágenes satelitales y la prohibición de interpretar automáticamente una diferencia visual como metros de erosión.


## Cambio v0.5.7

Se incorpora intercambio comunitario descentralizado con selección de registros y contenido, uso del menú nativo de compartir, paquete `.cvpack`, importación entre instalaciones COSTA VIVA, identificación de registros recibidos y prevención de duplicados por UUID. No se introduce servidor central ni cuenta obligatoria. La selección del destinatario se guarda solamente como contexto declarado dentro del paquete.

## Auditoría lingüística 0.5.8

Se añadió soporte experimental para Wayuunaiki mediante el código `guc`. No se declara traducción completa. La implementación usa el catálogo español como respaldo y sustituye únicamente términos documentados en fuentes lingüísticas consultadas. Esta decisión evita presentar traducciones automáticas no verificadas como vocabulario validado por la comunidad.


## 0.5.13 Wayuunaiki

Se sustituyó la capa parcial anterior por un borrador completo para las 388 cadenas de interfaz. La cobertura técnica es completa, pero la validación lingüística sigue pendiente. La aplicación lo declara expresamente y entrega una matriz CSV para revisión con hablantes Wayuu y expertos locales.


## Auditoría mareal 0.5.13

- La interfaz nunca muestra una altura de marea inventada.
- La tarjeta diferencia estimación astronómica y nivel real observado.
- La importación TICON filtra únicamente filas `Coastal`.
- La distancia a la estación queda visible y trazable.
- El motor de altura permanece desactivado hasta validación científica.

## Auditoría mareal 0.5.13

Se incorpora una comprobación costera previa para evitar que una ubicación claramente interior reciba una referencia mareográfica solo por existir una estación TICON relativamente próxima.

La comprobación utiliza una máscara terrestre Natural Earth 1:110m incluida en la aplicación y disponible offline.

El umbral de 100 km se utiliza únicamente para identificar situaciones claramente interiores. La aplicación no presenta la distancia calculada como una medición precisa de la costa.

Las posiciones que la máscara de baja resolución no puede clasificar como tierra continental no se bloquean automáticamente. Esto protege frente a errores en pequeñas islas y geografías costeras omitidas por la escala.

## Auditoría de compartir · 0.5.14

Se detectó que la creación asíncrona del paquete podía consumir la activación temporal requerida por Web Share y que los archivos ZIP o `.cvpack` no figuran entre los tipos de archivo normalmente compartibles documentados por MDN. Se separó preparación y apertura del menú nativo. La aplicación prueba archivos compatibles y conserva la descarga del paquete completo como alternativa.


## Auditoría de intercambio ZIP · 0.5.15

Se sustituye `.cvpack` como formato principal de intercambio por ZIP estándar. El contenido mantiene manifiesto, registros estructurados y evidencias seleccionadas. La aplicación intenta compartir el ZIP directamente solo cuando el navegador declara que el archivo es compartible. Si Web Share no admite ZIP, se guarda el archivo localmente para adjuntarlo mediante la aplicación elegida por la persona usuaria. No se realiza ninguna subida automática ni se crea una copia en servidores de COSTA VIVA.

La importación acepta tanto el nuevo formato `costa-viva-zip` versión 2 como el antiguo `costa-viva-cvpack` versión 1 para preservar compatibilidad.


## Auditoría de compartir · 0.5.16

Se separa la capacidad de compartir el archivo ZIP de la capacidad de abrir la hoja nativa del sistema. Cuando Chromium rechaza `application/zip`, la aplicación conserva el archivo localmente y usa Web Share de texto para abrir el selector de aplicaciones. Esta estrategia no afirma que el ZIP haya sido enviado cuando el navegador no permite adjuntarlo.


## Auditoría de compartir · 0.5.18

Se elimina la descarga automática previa al Web Share. Esa descarga abría un diálogo del navegador y podía consumir la activación transitoria requerida por navigator.share. El flujo separa ahora compartir y guardar.

## Auditoría de compartir · 0.5.18

Se eliminó el patrón de dos llamadas consecutivas a `navigator.share()` dentro del mismo toque. El diseño anterior podía intentar primero un ZIP y, tras un rechazo, ejecutar un segundo intento de texto. Web Share exige activación transitoria y el primer intento podía consumirla. Ahora se evalúan las cargas con `navigator.canShare()` antes de compartir y se ejecuta una sola llamada. El ZIP completo y el menú nativo quedan desacoplados. Esta revisión prioriza que el usuario pueda abrir el selector del sistema y compartir formatos compatibles sin perder el paquete ZIP completo.

## Auditoría de exportación local · 0.5.19

Se abandona la idea de depender del envío directo de ZIP mediante Web Share como flujo principal. El comportamiento depende del navegador y no es suficientemente uniforme para una herramienta comunitaria.

Se mantiene un ZIP estándar y se añade una carpeta visible bajo permiso explícito mediante File System Access. La interfaz indica que ZIP es la opción más universal para enviar registros y que una carpeta completa solo puede compartirse directamente cuando el gestor de archivos o servicio receptor admite directorios.

La función debe validarse todavía en los teléfonos Android objetivo. Si el navegador no admite File System Access la aplicación no presenta una carpeta ficticia y mantiene la descarga ZIP como alternativa.


## Auditoría funcional v0.5.20

Se añade una capa de devolución visible del seguimiento a la comunidad mediante dos funciones locales. **Evolución del punto** transforma registros del mismo punto permanente en una secuencia visual sin realizar inferencias causales automáticas. **Informe comunitario de evidencias** produce un PDF local identificable y exportable.

Control metodológico principal. La gráfica cuantitativa no mezcla estimaciones, pasos ni referencias distintas. En esta versión solo grafica mediciones con cinta, misma línea objetivo y misma referencia fija. El PDF incluye un descargo explícito sobre precisión del dispositivo, alcance no pericial y ausencia de determinación causal o jurídica.

Control de soberanía. La generación del informe no requiere servidor. El historial de informes permanece en IndexedDB. El usuario decide si incorpora coordenadas exactas y si guarda el PDF fuera del almacenamiento interno. `Registrar no significa ceder` permanece como regla de gobernanza.

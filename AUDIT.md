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

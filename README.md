# COSTA VIVA

COSTA VIVA es una PWA bilingüe en español y portugués de Brasil para observación comunitaria de cambios costeros.

La aplicación está pensada para uso mobile first con celulares comunes. El teléfono ayuda a localizar y documentar observaciones, pero no se presenta como sustituto de GNSS profesional, estación total u otros equipos especializados.

## Funciones incluidas

- Interfaz bilingüe ES y PT
- Navegación por Mapa, Registrar, Cuaderno, Exportar y Ayuda
- Geolocalización con precisión declarada por el dispositivo
- Altitud cuando la API la proporciona
- Orientación aproximada cuando el dispositivo y el navegador la ofrecen
- Fotografías originales y copia documentada con banda de metadatos
- Vídeo adjunto
- Grabación de audio mediante MediaRecorder cuando está disponible
- Notas libres de la comunidad
- Selección múltiple de fenómenos observados en un mismo registro
- Control lógico para evitar combinar Sin cambio aparente con categorías de cambio
- Medición opcional con valor, unidad, método, línea medida y referencia fija
- Estado observado del mar y oleaje
- Puntos permanentes para observaciones repetidas
- Ayuda de campo para crear líneas fijas de control con referencias A y B y cinta métrica
- Protocolo de fotografía repetida y cautelas para mediciones hasta el borde del agua
- Almacenamiento local mediante IndexedDB
- Mapa ligero propio con selector de base Mapa, Satélite o Sin mapa
- Base cartográfica OpenStreetMap y referencia visual Esri World Imagery cuando hay conectividad
- Los puntos permanecen visibles sobre una base local neutra cuando se selecciona Sin mapa o las teselas no están disponibles
- Exportación JSON, CSV y GeoJSON
- Paquete ZIP con datos y evidencias
- Compartir mediante Web Share API cuando el dispositivo lo permite
- PWA instalable
- Service Worker y caché del shell de la aplicación

## Publicar en GitHub Pages

1. Crea un repositorio nuevo
2. Sube todo el contenido de esta carpeta a la raíz del repositorio
3. Abre Settings
4. Abre Pages
5. Selecciona Deploy from a branch
6. Selecciona la rama main y la carpeta root
7. Guarda
8. Espera a que GitHub Pages publique la dirección HTTPS
9. Abre esa dirección desde el celular

El proyecto usa rutas relativas y está preparado para funcionar dentro de una subruta típica de GitHub Pages.

## Probar en local

Las funciones de PWA, cámara, micrófono y geolocalización requieren un contexto seguro. `localhost` es aceptado por los navegadores modernos para desarrollo.

Desde la carpeta del proyecto puedes ejecutar

```bash
python -m http.server 8000
```

Después abre `http://localhost:8000`.

Para probar sensores reales utiliza un teléfono y la versión HTTPS publicada en GitHub Pages.

## Datos

Los registros se guardan en IndexedDB dentro del navegador del dispositivo.

No se envían automáticamente a ningún servidor.

Las evidencias multimedia permanecen locales hasta que la persona decide exportarlas o compartirlas.

Borrar los datos del sitio desde el navegador puede eliminar los registros locales. Por eso es recomendable exportar copias periódicas.

## Mapa

COSTA VIVA permite escoger tres bases desde el botón Capas.

- Mapa con OpenStreetMap
- Satélite con Esri World Imagery
- Sin mapa con una base local neutra

Las bases externas se consultan solamente cuando existe conectividad. COSTA VIVA no realiza descarga masiva ni precarga de teselas para uso offline.

El Service Worker conserva la aplicación y los registros locales, pero no convierte OpenStreetMap ni Esri World Imagery en mapas base offline.

Los puntos registrados siguen conservándose, pueden verse sobre la base neutra, consultarse y exportarse aunque las imágenes cartográficas no estén disponibles.

La imagen satelital es una referencia visual. Puede corresponder a una fecha diferente de la observación de campo y no debe utilizarse por sí sola para cuantificar retroceso de costa.

## Sensores

La disponibilidad de sensores cambia según navegador, sistema operativo y dispositivo.

COSTA VIVA nunca debe fabricar valores ausentes.

Si no hay altitud, dirección u otro dato, se conserva como no disponible.

La precisión GPS almacenada procede de la API de geolocalización del dispositivo.

## Fotografías documentadas

Al añadir una fotografía se conserva el original y se crea una copia documentada.

La banda puede incluir

- Código del registro
- Fecha y hora
- Latitud
- Longitud
- Precisión
- Altitud
- Dirección

Solo se escribe un valor cuando está disponible.

## Correo y compartir

Los navegadores no permiten adjuntar de forma universal y automática un archivo a cualquier cliente de correo.

COSTA VIVA intenta utilizar Web Share API con el paquete ZIP cuando el dispositivo es compatible.

Cuando no es posible, descarga el paquete para que la persona pueda adjuntarlo manualmente.

## Gobernanza comunitaria de los datos

COSTA VIVA aplica una arquitectura local first. No existe un repositorio central de registros comunitarios ni una cuenta obligatoria que envíe automáticamente los datos de campo al autor, a una universidad o a otra institución.

Registrar no significa ceder. La comunidad decide si conserva, exporta o comparte la información.

La aplicación incorpora como referencias éticas los principios CARE para la gobernanza de datos indígenas. También reconoce OCAP® como un marco relacionado y específico de las First Nations de Canadá. COSTA VIVA no afirma certificación, adopción formal ni cumplimiento OCAP®.

Referencias

- Global Indigenous Data Alliance. CARE Principles for Indigenous Data Governance. https://www.gida-global.org/careprinciples
- First Nations Information Governance Centre. The First Nations Principles of OCAP®. https://fnigc.ca/ocap-training/

## Privacidad

No incluye publicidad.

No incluye analítica.

No incluye rastreadores.

No exige nombres personales.

## Dependencias

La versión 0.3 evita frameworks y bibliotecas JavaScript externas para las funciones principales.

El mapa utiliza OpenStreetMap y Esri World Imagery cuando existe conexión. La opción Sin mapa no requiere una base externa.

## Ciencia popular y autoría

COSTA VIVA es una iniciativa de ciencia popular y tecnología social orientada a que comunidades con medios limitados puedan registrar cambios costeros mediante procedimientos abiertos, repetibles y documentados.

Autor y responsable de la concepción, arquitectura científica y digital, diseño metodológico y desarrollo

Carlos Busón Buesa

Vínculo académico del autor

Investigador de posdoctorado voluntario en la Universidade Federal de Mato Grosso do Sul, PPGTA · FAENG · UFMS.

La afiliación identifica el marco académico de trabajo del autor y no implica por sí sola certificación institucional, financiación ni aval oficial de la herramienta.

## Licencias

El código fuente de COSTA VIVA se distribuye bajo licencia MIT. Consulta `LICENSE`.

Los textos originales de ayuda, documentación y materiales metodológicos propios se ofrecen bajo CC BY 4.0. Consulta `CONTENT-LICENSE.md`.

Esta separación permite utilizar una licencia ampliamente adoptada para software y otra más adecuada para contenidos educativos y metodológicos.

© 2026 Carlos Busón Buesa.



## Origen social y territorial

COSTA VIVA surge del trabajo realizado junto a comunidades Wayuu de Arroyo Guerrero en La Guajira colombiana y de la necesidad de documentar cambios costeros con medios disponibles en la propia comunidad.

La aplicación incorpora esta historia en el panel de información del proyecto junto con una explicación prudente sobre desplazamiento asociado a factores climáticos y ambientales y su relación con los ODS 10, 11, 13, 14, 16 y 17.

## Versión 0.5.0

La versión 0.5.0 incorpora al panel de información el origen comunitario de COSTA VIVA en Arroyo Guerrero, el vínculo entre cambio ambiental y desplazamiento y la relación de la iniciativa con los Objetivos de Desarrollo Sostenible.

## Versión 0.4.0

La ficha de observación permite marcar varias categorías en un mismo registro. Los datos se guardan en `categories` y se mantiene `category` como campo de compatibilidad con registros anteriores.

## Versión 0.5.1

La versión 0.5.1 incorpora al final del panel de información una sección de citación de la primera versión pública archivada de COSTA VIVA en Zenodo.

Referencia archivada

Busón Buesa, C. (2026). *COSTA VIVA* (Version v0.5.0) [Computer software]. Zenodo. https://doi.org/10.5281/zenodo.22113035

La versión v0.5.0 permanece como registro archivado e inmutable. Esta actualización no modifica ese depósito.


## Versión 0.5.2

La versión 0.5.2 hace visible la instalación de COSTA VIVA como PWA. El botón Instalar permanece accesible en la cabecera cuando la aplicación no está instalada y se añade una segunda acción de instalación dentro de Ayuda.

Cuando el navegador ofrece el flujo nativo de instalación, COSTA VIVA lo utiliza. Cuando ese flujo no está disponible, la aplicación muestra instrucciones adaptadas a Android, iOS o escritorio sin simular una instalación que el navegador no haya realizado.

### Actualización móvil v0.5.3

La caché de la PWA usa ahora una estrategia online first para los recursos propios. Cuando existe conexión, COSTA VIVA busca la versión publicada más reciente. Si no existe conexión, utiliza la copia local. Esto reduce el riesgo de que un celular continúe mostrando una interfaz antigua después de una actualización.

## Versión 0.5.4

La versión 0.5.4 incorpora una política visible de gobernanza comunitaria de los datos en el panel de información y una ayuda práctica para las personas usuarias. Se explicita que registrar no significa ceder, que no existe transferencia automática de los registros comunitarios y que compartir requiere una decisión consciente.

Se añaden como referencias los principios CARE para la gobernanza de datos indígenas y OCAP® en su contexto específico de las First Nations de Canadá, sin reclamar certificación ni adopción formal de esos marcos.


## Versión 0.5.5

La versión 0.5.5 retira el botón de instalación de la cabecera para simplificar la interfaz móvil. La instalación permanece disponible en Ayuda mediante el botón específico. También corrige la maquetación de los bloques de ayuda, gobernanza de datos y aviso GPS para que el contenido textual se presente en una sola columna y sea legible en pantallas estrechas.


## Versión 0.5.7

La versión 0.5.7 incorpora un selector de bases cartográficas con tres opciones visibles y bilingües

- Mapa
- Satélite
- Sin mapa

También corrige la estructura interna del visor para que las teselas, marcadores, controles de zoom y atribución sean visibles en el mapa. La preferencia de base elegida se conserva localmente en el navegador.

La ayuda aclara que las imágenes satelitales sirven como referencia territorial y no deben convertirse por sí solas en una medición del retroceso costero.


## Intercambio comunitario descentralizado

COSTA VIVA permite seleccionar registros concretos y decidir qué contenidos se comparten. La persona puede incluir o excluir coordenadas y sensores, notas, mediciones, fotografías, vídeos y audios antes de preparar el archivo. El intercambio se genera localmente como un archivo `.zip` estándar. El ZIP contiene los registros estructurados y únicamente las evidencias seleccionadas. COSTA VIVA intenta compartir el ZIP directamente cuando el navegador lo permite. Si el navegador no admite ZIP mediante Web Share, el archivo se guarda en el dispositivo para que la persona pueda adjuntarlo manualmente en WhatsApp, correo electrónico, Quick Share, Bluetooth u otra aplicación. COSTA VIVA no envía una copia a un servidor propio.

Los ZIP de intercambio de COSTA VIVA pueden importarse en otra instalación de COSTA VIVA. Por compatibilidad, la aplicación también puede leer los antiguos archivos `.cvpack` generados por versiones anteriores. Los registros importados quedan identificados como recibidos, conservan la procedencia del cuaderno de origen y no se presentan como observaciones creadas por el teléfono receptor. Los identificadores internos originales se conservan para detectar duplicados, mientras que el código visible recibido incorpora una referencia al cuaderno de origen para evitar confusiones entre códigos iguales creados en dispositivos diferentes.

El diseño aplica dos principios explícitos. **Registrar no significa ceder** y **compartir no significa entregar todo**.

## Wayuunaiki experimental

Desde la versión 0.5.8 COSTA VIVA incluye una tercera opción lingüística `W` para Wayuunaiki, código ISO 639-3 `guc`.

La capa Wayuunaiki es deliberadamente provisional. Solo se traducen términos cuya equivalencia ha podido documentarse en recursos lingüísticos existentes. El resto permanece temporalmente en castellano para evitar inventar vocabulario. La interfaz completa deberá revisarse con hablantes Wayuu antes de declararse validada.

Entre las referencias utilizadas para esta primera arquitectura se encuentran el *Diccionario de computación en wayuunaiki* y materiales de Wayuu Digital. Los términos documentados incorporados incluyen `Karalouta` para cuaderno, `Anaajawaa` para guardar, `Ee’irataa eemüin` para exportar, `Akaalijia` para ayuda, `Ayaawajaa` para medir y `Ajütaa` para enviar.


## Wayuunaiki 0.5.13

La opción WY contiene ahora un borrador completo de las 388 cadenas de interfaz. Es una traducción provisional no validada y puede contener errores. Debe revisarse con hablantes Wayuu y expertos locales. El archivo `WAYUUNAIKI_REVIEW.csv` facilita la revisión cadena por cadena.


## Marea astronómica estimada · integración TICON 3

La versión 0.5.13 incorpora la interfaz y la arquitectura local para TICON 3. La tarjeta aparece en Registrar, debajo de Dirección. El usuario puede importar el archivo oficial `TICON_3.txt`, que se filtra a estaciones `Coastal` y se almacena en IndexedDB. COSTA VIVA muestra la estación de referencia más próxima y su distancia.

La altura mareal permanece deliberadamente desactivada en esta versión hasta validar un motor armónico que reconstruya correctamente los constituyentes, argumentos astronómicos y correcciones nodales. No se muestran números simulados.

Fuente prevista

Hart-Davis, M. G., Dettmering, D. & Seitz, F. (2022). TICON-3. PANGAEA. https://doi.org/10.1594/PANGAEA.951610 · CC BY 4.0.


## Desarrollo local

En `localhost` y `127.0.0.1` COSTA VIVA desactiva el service worker y elimina las cachés antiguas de la propia aplicación. Esto evita que una versión anterior oculte cambios de interfaz durante las pruebas locales. La PWA y el funcionamiento offline permanecen activos en GitHub Pages y otros orígenes HTTPS de producción.

## Comprobación costera 0.5.13

Antes de buscar una referencia TICON 3, COSTA VIVA comprueba si la posición está claramente en el interior mediante una máscara terrestre Natural Earth 1:110m incluida en la PWA.

Si una posición continental está aproximadamente a 100 km o más de la costa representada por esa máscara, la tarjeta muestra **No aplicable en esta ubicación** y no selecciona una estación mareográfica.

La distancia es solo un filtro aproximado de coherencia. No se utiliza como medición científica de la línea de costa.


### Filtro de coherencia costera

El módulo de marea comprueba primero la proximidad aproximada a la línea de costa. Una ubicación claramente interior no recibe una referencia mareal. La comprobación usa Natural Earth 1:50m y funciona como control de coherencia, no como delimitación oficial de zona costera.

## Versión 0.5.14

Esta sección documenta el comportamiento histórico, sustituido por ZIP estándar en 0.5.15.

La función de intercambio comunitario utiliza ahora un flujo en dos pasos. Primero prepara localmente el paquete. Después una segunda acción explícita abre el menú nativo del dispositivo para compartir con aplicaciones compatibles como WhatsApp o correo. Esto evita perder la activación temporal exigida por la Web Share API durante la creación del paquete. Cuando el formato `.cvpack` no puede compartirse directamente, COSTA VIVA intenta compartir un CSV, un archivo de texto y las evidencias multimedia compatibles. El paquete completo sigue disponible para guardarlo localmente.


## Versión 0.5.15

El intercambio comunitario adopta ZIP como formato principal. El archivo es un ZIP estándar y transparente que puede abrirse fuera de COSTA VIVA. Contiene `manifest.json`, `registros.json`, `registros.csv`, `LEEME-README.txt`, `puntos.geojson` cuando se comparten coordenadas y las fotografías, vídeos o audios seleccionados. Las fotografías pueden incluir original y versión documentada cuando ambas están disponibles.

El botón Compartir ZIP intenta entregar el ZIP al menú nativo mediante Web Share. Como los navegadores no garantizan el intercambio directo de archivos ZIP, COSTA VIVA comprueba la compatibilidad en el dispositivo. Cuando no es posible, guarda el ZIP localmente para que pueda adjuntarse manualmente. El botón Guardar ZIP siempre conserva una copia local.

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
- Mapa ligero propio con teselas de OpenStreetMap cuando hay conectividad
- Los puntos permanecen visibles sobre una base local neutra cuando las teselas no están disponibles
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

Cuando existe conexión, la aplicación solicita las teselas visibles de OpenStreetMap.

COSTA VIVA no realiza descarga masiva ni precarga de mapas para uso offline.

El Service Worker conserva la aplicación, pero no convierte OpenStreetMap en un mapa base offline.

Los puntos registrados siguen conservándose y pueden verse sobre una base neutra, consultarse y exportarse aunque las teselas cartográficas no estén disponibles.

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

El mapa utiliza teselas públicas de OpenStreetMap cuando existe conexión.

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

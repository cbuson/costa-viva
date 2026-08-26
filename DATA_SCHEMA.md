# Esquema de datos COSTA VIVA

Cada observación se guarda como un registro estructurado.

## Identidad

- `schemaVersion`
- `uuid`
- `code`
- `createdAt`
- `modifiedAt`
- `interfaceLanguage`

## Observación

- `categories` lista con una o varias observaciones seleccionadas
- `category` primera categoría conservada por compatibilidad con versiones anteriores
- `observationText`

## Posición y sensores

- `location.latitude`
- `location.longitude`
- `location.accuracy`
- `location.altitude`
- `location.altitudeAccuracy`
- `location.heading`
- `location.headingSource`
- `location.speed`
- `location.source`

Los valores no disponibles permanecen como `null`.

## Medición

- `measurement.value`
- `measurement.unit`
- `measurement.method`
- `measurement.target`
- `measurement.reference`

## Estado observado del mar

- `sea.level`
- `sea.waves`

## Seguimiento

- `permanentPointId`
- `isPermanentRoot`

## Evidencias

Cada elemento de `media` incluye

- `id`
- `kind`
- `name`
- `mime`
- `metadata`

Las fotografías pueden incluir `originalBlob` y `documentedBlob`.

Vídeos y audios utilizan `blob`.

## Procedencia

`provenance` indica la procedencia de posición, precisión, altitud y dirección.

La ausencia de un sensor se registra como `unavailable`.


## Selección múltiple

Una observación puede contener varias categorías simultáneas cuando ocurren en el mismo lugar y momento.

`no_change` es incompatible con cualquier categoría que describa un cambio. La interfaz impide guardar esa combinación contradictoria.

## Intercambio `.cvpack` · v0.5.7

El paquete de intercambio contiene `manifest.json`, `registros.json`, `registros.csv`, un archivo bilingüe de lectura y las evidencias seleccionadas. `puntos.geojson` solo se incorpora cuando la persona decide compartir coordenadas.

Los registros recibidos añaden el objeto `exchange` con `received`, `receivedAt`, `packageId`, `sourceNotebookId`, `sourceNotebookShort`, `sourceCode`, `intendedRecipient`, `purpose` y `contentSelection`. El UUID original se conserva para detectar reimportaciones. El código visible se prefija con una referencia breve al cuaderno de origen para evitar colisiones entre dispositivos.

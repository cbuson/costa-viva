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


## tideReference · v0.5.11

Cuando existe una referencia TICON seleccionada, el registro puede incluir `tideReference` con `source`, `doi`, `stationId`, `stationSource`, `stationLatitude`, `stationLongitude`, `distanceKm`, `estimateAvailable` y `note`. En 0.5.11 `estimateAvailable` permanece en `false` porque la reconstrucción armónica aún no se ha validado.

## tideApplicability · v0.5.13

Cada registro puede conservar `tideApplicability` aunque no exista una estación TICON instalada.

Incluye

- `status`
- `approximateCoastDistanceKm`
- `method`
- `thresholdKm`

El estado `clearly-inland` significa que la posición fue clasificada como claramente interior mediante una máscara terrestre Natural Earth 1:110m y una distancia aproximada igual o superior al umbral configurado.

Este dato solo controla si resulta razonable ofrecer información mareal. No representa una medición precisa de la distancia a la línea de costa.

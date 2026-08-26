(() => {
  'use strict'

  const DB_NAME = 'costa-viva-db'
  const DB_VERSION = 2
  const RECORD_STORE = 'records'
  const META_STORE = 'meta'

  const i18n = {
    es: {
      subtitle: 'Cuaderno comunitario de observación costera',
      languageAria: 'Idioma', baseMapSelectorAria: 'Selector de mapa base', mapObservationsAria: 'Mapa de observaciones', zoomControlsAria: 'Controles de zoom', zoomIn: 'Acercar', zoomOut: 'Alejar', legendAria: 'Leyenda', mainNavigationAria: 'Navegación principal',
      install: 'Instalar', mapTitle: 'Mapa', mapIntro: 'Tus observaciones aparecen aquí cuando tienen posición registrada.', myPosition: 'Mi posición',
      layers: 'Capas', streetMap: 'Mapa', satellite: 'Satélite', noBaseMap: 'Sin mapa', mapBasesTitle: 'Mapas de referencia', mapBasesHelp: 'Puedes elegir Mapa, Satélite o Sin mapa. El mapa satelital ayuda a reconocer la costa, pero la imagen puede corresponder a otra fecha y no debe usarse por sí sola para medir cuánto retrocedió la línea de costa.',
      offlineMapNote: 'Sin mapa base. Los puntos se muestran usando sus coordenadas guardadas.', noMapPoints: 'Aún no hay puntos para mostrar', mapStartsWithPosition: 'El mapa se centrará cuando registres una posición o actives Mi posición', singleObservation: 'Observación', permanentPoint: 'Punto permanente',
      newObservation: 'Nueva observación', registerIntro: 'Registra lo que ves. No necesitas explicar la causa.', code: 'Código', location: 'Ubicación', accuracy: 'Precisión', altitude: 'Altitud', direction: 'Dirección',
      notActivated: 'No activada', notAvailable: 'No disponible', activateObservation: 'ACTIVAR MODO DE OBSERVACIÓN', sensorHelper: 'Se solicitarán solamente los permisos necesarios. Si un sensor no está disponible, el registro puede continuar.',
      whatObserve: '¿Qué estás observando?', multipleObserveHelp: 'Puedes marcar una o varias opciones. Sin cambio aparente no puede combinarse con un cambio observado.', beachLoss: 'Pérdida aparente de playa', sandGain: 'Acumulación aparente de arena', waterReach: 'El mar llegó más lejos', flood: 'Inundación', homeAffected: 'Vivienda afectada', roadAffected: 'Camino afectado', vegetationAffected: 'Vegetación afectada', noChange: 'Sin cambio aparente', other: 'Otro',
      communityNote: 'Nota de la comunidad', notePlaceholder: 'Escribe con tus propias palabras', measurement: 'Medición opcional', distance: 'Distancia', unit: 'Unidad', method: 'Método', select: 'Seleccionar', tape: 'Cinta métrica', steps: 'Pasos', estimate: 'Estimación', measureTarget: 'Línea medida', erosionEdge: 'Borde de erosión', vegetationLine: 'Línea de vegetación estable', waterline: 'Borde del agua', highWaterMark: 'Marca visible de agua alta', reference: 'Referencia fija', referencePlaceholder: 'Estaca A, poste, vivienda, marca',
      seaState: 'Estado observado del mar', waterLevel: 'Nivel observado', waveState: 'Oleaje', dontKnow: 'No sé', low: 'Bajo', normal: 'Normal', high: 'Alto', veryHigh: 'Muy alto', medium: 'Medio', strong: 'Fuerte',
      followup: 'Seguimiento del punto', pointType: 'Tipo de registro', independent: 'Observación independiente', newPermanent: 'Crear nuevo punto permanente', permanentHelp: 'Los puntos permanentes permiten regresar al mismo lugar y construir una historia de observaciones.',
      evidence: 'Evidencias', photos: 'Fotos', videos: 'Vídeos', recordAudio: 'Grabar audio', audioReady: 'Listo para grabar', stop: 'Detener', removeAudio: 'Eliminar audio', photoOverlayHelp: 'Las fotografías guardadas generan una copia documentada con fecha, código, posición, precisión, altitud y dirección cuando esos datos están disponibles.', saveObservation: 'GUARDAR OBSERVACIÓN',
      notebook: 'Cuaderno', notebookIntro: 'Consulta las observaciones guardadas en este dispositivo.', records: 'registros', search: 'Buscar', searchPlaceholder: 'Código o nota', filterCategory: 'Tipo', all: 'Todos', withMedia: 'Con multimedia', onlyPermanent: 'Puntos permanentes',
      export: 'Exportar', exportIntro: 'Prepara una copia de los registros para conservarlos o compartirlos.', fullData: 'Datos completos', tableData: 'Tabla de registros', mapData: 'Puntos para SIG', evidencePackage: 'Datos y evidencias', sharePackage: 'Compartir paquete', shareHelp: 'En dispositivos compatibles se abrirá el menú para compartir. Si no está disponible, se descargará el paquete para que puedas adjuntarlo al correo.', privacyPrinciple: 'Los registros permanecen bajo control de la comunidad y solo salen del dispositivo cuando decides exportarlos o compartirlos.',
      communityExchangeTitle: 'Compartir entre personas y comunidades', communityExchangeIntro: 'Elige qué registros y qué contenidos quieres compartir. COSTA VIVA prepara el paquete y el celular te permite escoger WhatsApp, correo, Quick Share, Bluetooth u otra aplicación disponible.', shareRecords: 'Compartir registros', importPackage: 'Importar paquete COSTA VIVA', shareHelpCommunity: 'COSTA VIVA no envía los registros a un servidor propio. El medio de envío depende de las aplicaciones instaladas en el dispositivo.', onlyReceived: 'Registros recibidos', received: 'Recibido', receivedFromNotebook: 'Recibido · cuaderno {value}',
      shareModalTitle: 'Compartir registros', shareModalIntro: 'Tú decides qué sale de este dispositivo, con quién y con qué contenido.', chooseRecordsTitle: 'Elige los registros', selectAll: 'Seleccionar todos', selectNone: 'Ninguno', chooseContentTitle: 'Elige qué compartir', basicRecordData: 'Datos básicos del registro', shareMeasurements: 'Mediciones', shareNotes: 'Notas', shareCoordinates: 'Coordenadas y sensores', sharePhotos: 'Fotografías', shareVideos: 'Vídeos', shareAudios: 'Audios', selectAllContent: 'Incluir todo', clearOptionalContent: 'Quitar opcionales', shareSensitiveWarning: 'Las coordenadas pueden revelar lugares sensibles. Compártelas solo cuando sea necesario y exista una decisión consciente.', recipientTitle: '¿Con quién vas a compartir?', recipientMyCommunity: 'Mi comunidad', recipientOtherCommunity: 'Otra comunidad', recipientResearch: 'Investigador o universidad', recipientPublic: 'Institución pública', recipientOrganization: 'Organización social', recipientOther: 'Otra persona', purposeOptional: 'Finalidad opcional', purposePlaceholder: 'Ejemplo seguimiento comunitario o investigación acordada', shareControlReminder: 'COSTA VIVA prepara el archivo. No lo sube a un servidor propio y no recibe una copia.', prepareAndShare: 'PREPARAR Y COMPARTIR', noShareRecordsSelected: 'Selecciona al menos un registro.', preparingShare: 'Preparando paquete', sharedPackageReady: 'Paquete preparado para compartir.',
      importTitle: 'Importar registros recibidos', importSeparationHelp: 'Los registros recibidos se identifican como tales y conservan información de procedencia. No se presentan como observaciones creadas por este teléfono.', confirmImport: 'IMPORTAR', cancel: 'Cancelar', importInvalid: 'Este archivo no es un paquete COSTA VIVA compatible.', importReading: 'Leyendo paquete', importSummaryText: '{count} registros · creado {date}', importRecipientText: 'Finalidad declarada al compartir: {value}', importNoPurpose: 'Sin finalidad declarada', importComplete: 'Importación terminada. {added} añadidos y {skipped} ya existentes.', importFailed: 'No se pudo importar el paquete.', sourceNotebook: 'Cuaderno de origen',
      sharingHelpTitle: 'Compartir sin perder el control', sharingHelpIntro: 'COSTA VIVA permite preparar un intercambio entre comunidades y personas sin enviar los registros a un servidor propio.', shareWithWhomTitle: 'Con quién puedes compartir', shareWithWhomText: 'Puedes compartir con tu comunidad, otra comunidad, un investigador, una institución u otra persona.', shareWhatTitle: 'Qué puedes incluir', shareWhatText: 'Antes de enviar eliges los registros y también si incluyes coordenadas, notas, mediciones, fotografías, vídeos o audios.', sharingHelpText: 'Puedes compartir con tu comunidad, otra comunidad, un investigador, una institución u otra persona. Antes de enviar, eliges los registros y también si incluyes coordenadas, notas, mediciones, fotografías, vídeos o audios.', shareNotAllTitle: 'Compartir no significa entregar todo', shareNotAllText: 'El paquete se prepara en el celular. Después Android, iOS o el navegador muestran las aplicaciones disponibles para enviarlo. COSTA VIVA no decide el destinatario ni recibe una copia.', mediaMetadataTitle: 'Atención sobre fotos, vídeos y metadatos', mediaMetadataCaution: 'Atención. Algunos archivos originales de cámara o vídeo pueden contener metadatos creados por el propio dispositivo. Si una localización es sensible, revisa también los archivos multimedia antes de compartirlos.',
      help: 'Ayuda', helpIntro: 'Guía breve para usar COSTA VIVA en campo.', helpActivateTitle: 'Activa el modo de observación', helpActivateText: 'Permite que el teléfono compruebe ubicación, orientación, cámara y micrófono. Puedes continuar aunque alguna función no esté disponible.', helpObserveTitle: 'Registra lo que observas', helpObserveText: 'Describe lo que está ocurriendo sin necesidad de explicar la causa.', helpPhotoTitle: 'Toma evidencias', helpPhotoText: 'Añade fotografías, vídeo, audio o una medición sencilla. Las fotografías documentadas conservan los datos disponibles del dispositivo.', helpReturnTitle: 'Vuelve al mismo punto', helpReturnText: 'Los puntos permanentes permiten comparar observaciones realizadas en distintos momentos.',
      dataControlHelpTitle: 'Tus datos y tu decisión', dataControlHelpIntro: 'Registrar información no significa entregarla. COSTA VIVA guarda los registros primero en este dispositivo y no los envía automáticamente a investigadores, universidades o instituciones.', whoSeesTitle: '¿Quién puede ver mis registros?', whoSeesText: 'Mientras no los exportes o compartas, permanecen en el almacenamiento local de este dispositivo. Recuerda que una persona con acceso al teléfono o al perfil del navegador podría acceder a ellos.', researcherAccessTitle: '¿COSTA VIVA los envía al investigador?', researcherAccessText: 'No. El autor de la herramienta, una universidad o cualquier otra organización no recibe automáticamente tus coordenadas, fotografías, vídeos, audios, notas o mediciones.', mustShareTitle: '¿Tengo que compartirlos?', mustShareText: 'No. La comunidad decide si conserva, exporta o comparte los registros. Si alguien solicita utilizarlos, es razonable preguntar para qué se usarán, quién tendrá acceso y qué beneficio o devolución recibirá la comunidad.', registerNotCedeTitle: 'Registrar no significa ceder', registerNotCedeText: 'COSTA VIVA ayuda a producir y organizar registros. No convierte al desarrollador, al investigador ni a una institución en propietario automático de los datos de la comunidad.',
      fieldMethodsTitle: 'Cómo medir con medios sencillos', fieldMethodsIntro: 'COSTA VIVA es una herramienta de ciencia popular. Una cinta, dos puntos de referencia y una forma constante de medir pueden producir una serie útil si siempre se repite el mismo procedimiento.', goldenRuleTitle: 'Regla principal', goldenRuleText: 'No importa medir muchas cosas. Importa medir siempre la misma cosa, desde la misma referencia, por la misma línea y dejando registrado cómo se hizo.',
      stakeMethodTitle: 'Método 1. Línea fija con cinta', stakeStep1: 'Elige un lugar seguro y estable detrás de la zona que puede erosionarse.', stakeStep2: 'Marca dos referencias A y B alineadas hacia la costa. Pueden ser estacas resistentes o elementos permanentes que no se muevan.', stakeStep3: 'Crea ese lugar en COSTA VIVA como punto permanente y fotografía las referencias A y B.', stakeStep4: 'Elige una sola línea que vas a seguir en el tiempo, por ejemplo el borde del escarpe de erosión o la línea de vegetación estable.', stakeStep5: 'Extiende la cinta desde A siguiendo exactamente la alineación A B hasta la línea elegida. Registra la distancia y el método Cinta métrica.', stakeStep6: 'Haz una segunda lectura para comprobar que no hubo un error de lectura. Si no coinciden, repite y explica la diferencia en la nota.', stakeStep7: 'Toma una fotografía desde el mismo punto y, cuando sea posible, en la misma dirección.', stakeStep8: 'En la siguiente visita vuelve al mismo punto permanente y repite exactamente la operación.', stakeWarning: 'Nunca coloques una referencia en un borde inestable ni entres en la zona de rompiente para obtener una medida. Si una estaca desaparece o se mueve, regístralo. No la sustituyas como si fuera la misma referencia.',
      photoMethodTitle: 'Método 2. Fotografía desde un punto fijo', photoStep1: 'Escoge una referencia estable desde la que puedas volver a fotografiar.', photoStep2: 'Guarda el lugar como punto permanente.', photoStep3: 'Anota la dirección de la fotografía y una referencia visible que ayude a repetir el encuadre.', photoStep4: 'En cada visita intenta usar el mismo lugar, altura aproximada y dirección.', photoStep5: 'Haz la fotografía antes de acercarte a la zona erosionada y añade una nota sobre los cambios observados.', photoWarning: 'Las fotografías repetidas permiten documentar cambios. Por sí solas no deben convertirse automáticamente en metros de erosión.',
      waterlineMethodTitle: 'Si mides hasta el borde del agua', waterlineMethodText: 'El borde del agua se mueve con la marea y el oleaje. Registra siempre la hora y el estado observado del mar. Para comparar dos medidas procura realizar las visitas en condiciones de marea semejantes. Una diferencia medida en horas o estados de marea distintos no debe interpretarse directamente como erosión.',
      minimumRecordTitle: 'Qué debe quedar registrado', minimum1: 'Código del punto permanente', minimum2: 'Fecha y hora', minimum3: 'Referencia fija utilizada', minimum4: 'Línea medida', minimum5: 'Distancia y método', minimum6: 'Fotografía y nota cuando sea posible', minimum7: 'Estado observado del mar', minimum8: 'Posición y precisión del celular cuando estén disponibles',
      gpsTitle: 'Sobre el GPS del celular', gpsHelp: 'El GPS ayuda a localizar la observación. No tiene la precisión de un equipo profesional. COSTA VIVA conserva la precisión informada por el dispositivo para evitar aparentar una exactitud que no existe.', installTitle: 'Instalar COSTA VIVA', installHelp: 'En un navegador compatible utiliza Instalar o Añadir a pantalla de inicio. Después podrás abrir COSTA VIVA como una aplicación.', installOnDevice: 'INSTALAR EN ESTE CELULAR', installModalKicker: 'Instalar en el dispositivo', installModalTitle: 'Instalar COSTA VIVA', installModalIntro: 'La instalación permite abrir COSTA VIVA desde la pantalla principal y facilita el uso en campo.', installNativeReady: 'Tu navegador permite instalar COSTA VIVA directamente.', installNow: 'INSTALAR AHORA', installManualTitle: 'Cómo instalar', installWordingNote: 'El nombre exacto de la opción puede variar según el navegador y el teléfono.', installAndroid1: 'Abre el menú del navegador con los tres puntos.', installAndroid2: 'Busca Instalar aplicación o Añadir a pantalla de inicio.', installAndroid3: 'Confirma la instalación y abre COSTA VIVA desde su icono.', installIOS1: 'Abre COSTA VIVA en Safari.', installIOS2: 'Pulsa Compartir.', installIOS3: 'Elige Añadir a pantalla de inicio y confirma.', installDesktop1: 'Busca el icono de instalación en la barra de direcciones o abre el menú del navegador.', installDesktop2: 'Elige Instalar COSTA VIVA o Instalar aplicación.', installDesktop3: 'Confirma la instalación.', installedAlready: 'COSTA VIVA ya está instalada en este dispositivo.',
      projectInfoKicker: 'INFORMACIÓN DEL PROYECTO', projectInfoSubtitle: 'Herramienta abierta de ciencia popular para observación comunitaria de la costa', projectInfoAria: 'Información del proyecto',
      projectPurposeTitle: 'Para qué existe', projectPurposeText: 'COSTA VIVA nace para que comunidades con medios limitados puedan documentar cambios de su costa de forma ordenada, repetible y verificable usando celulares comunes y métodos sencillos de campo. La herramienta ayuda a conservar qué se observó, dónde, cuándo, cómo se midió y qué evidencia quedó registrada.',
      popularScienceTitle: 'Ciencia popular', popularScienceText: 'La sofisticación está en el método y no en exigir equipos costosos. Un registro comunitario gana valor cuando conserva el procedimiento, la incertidumbre, la fecha, la posición disponible, las fotografías, las notas y las mediciones repetidas. COSTA VIVA busca hacer posible ese trabajo sin convertir un celular en un instrumento profesional que no es.',
      originTitle: 'Por qué nació COSTA VIVA', originText1: 'COSTA VIVA surge a partir del trabajo realizado junto a comunidades Wayuu de Arroyo Guerrero, en La Guajira colombiana, donde la erosión costera y otros cambios ambientales hacían necesario documentar de forma continuada lo que estaba ocurriendo en el territorio.', originText2: 'Con la colaboración de Clarena Fonseca y el trabajo desarrollado con las comunidades se impulsó el uso de fotografías, vídeos, recorridos, localización mediante GPS y observaciones repetidas usando principalmente los teléfonos celulares disponibles.', originText3: 'De esa experiencia nace la idea de una herramienta de ciencia popular capaz de ayudar a crear puntos de observación, repetir mediciones, conservar evidencias y construir una memoria territorial verificable sin exigir instrumentación costosa.', originPrincipleTitle: 'Una idea sencilla', originPrincipleText: 'La falta de equipos profesionales no debe impedir que una comunidad pueda observar, medir, documentar y conservar de forma ordenada los cambios de su propio territorio.',
      displacementTitle: 'Cambio climático y desplazamiento', displacementText1: 'La erosión costera, las inundaciones y la pérdida progresiva de terreno pueden afectar viviendas, caminos, espacios culturales, actividades económicas y otras condiciones necesarias para permanecer en un territorio.', displacementText2: 'Cuando estos procesos contribuyen a que las personas tengan que abandonar temporal o permanentemente un lugar pueden formar parte de dinámicas de desplazamiento asociadas a factores climáticos y ambientales.', displacementCaution: 'COSTA VIVA no determina por sí misma que exista desplazamiento climático ni asigna una condición jurídica a las personas. Su función es documentar cambios, impactos y series temporales que puedan ayudar a comprender lo ocurrido.',
      odsTitle: 'COSTA VIVA y los Objetivos de Desarrollo Sostenible', odsIntro: 'La iniciativa se alinea principalmente con los siguientes ODS sin implicar reconocimiento o certificación oficial por parte de Naciones Unidas.', ods13Title: 'Acción por el clima', ods13Text: 'Apoya la observación local de impactos ambientales y la construcción de memoria útil para procesos de adaptación.', ods11Title: 'Ciudades y comunidades sostenibles', ods11Text: 'Ayuda a documentar amenazas sobre viviendas, caminos, espacios comunitarios y patrimonio territorial.', ods10Title: 'Reducción de las desigualdades', ods10Text: 'Busca reducir la brecha entre quienes disponen de instrumentación especializada y comunidades que necesitan registrar su territorio con medios limitados.', ods14Title: 'Vida submarina', ods14Text: 'Favorece la observación de transformaciones en la franja costera y en los espacios de interacción entre el mar y las comunidades.', ods16Title: 'Paz, justicia e instituciones sólidas', ods16Text: 'Facilita conservar evidencias comunitarias ordenadas que pueden apoyar una participación informada ante instituciones.', ods17Title: 'Alianzas para lograr los objetivos', ods17Text: 'Puede facilitar colaboración entre comunidades, universidades, organizaciones sociales, investigadores y administraciones públicas.',
      governanceTitle: 'Gobernanza comunitaria de los datos', governanceIntro: 'COSTA VIVA está diseñada para reducir la extracción automática de información producida por las comunidades. No existe un repositorio central de registros comunitarios ni una cuenta obligatoria que envíe los datos de campo a los responsables del proyecto.', governancePrincipleText: 'Los registros no pertenecen a COSTA VIVA por haber sido creados con la aplicación. La comunidad y las personas que generan la información deciden si la conservan, exportan o comparten.', governanceControlTitle: 'Control comunitario.', governanceControlText: 'Los datos no salen automáticamente del dispositivo.', governanceDecisionTitle: 'Decisión informada.', governanceDecisionText: 'Compartir requiere una acción consciente de la persona o comunidad.', governancePurposeTitle: 'Finalidad conocida.', governancePurposeText: 'Quien solicite los datos debería explicar para qué quiere utilizarlos y quién tendrá acceso.', governanceBenefitTitle: 'Beneficio colectivo.', governanceBenefitText: 'El uso posterior debería procurar una utilidad reconocible para quienes produjeron la información.', governanceRecognitionTitle: 'Reconocimiento.', governanceRecognitionText: 'La contribución comunitaria no debería desaparecer cuando los registros se convierten en informes, investigaciones o publicaciones.', governanceSensitiveTitle: 'Protección territorial.', governanceSensitiveText: 'Una localización o evidencia sensible no debe compartirse solamente porque técnicamente sea posible hacerlo.', governanceNoShareTitle: 'Derecho a no compartir.', governanceNoShareText: 'Crear un registro no obliga a entregarlo posteriormente a investigadores o instituciones.', frameworksTitle: 'Marcos de referencia', careText: 'El diseño toma como referencia la orientación de los principios CARE para la gobernanza de datos indígenas, centrados en beneficio colectivo, autoridad para controlar, responsabilidad y ética.', ocapText: 'OCAP es un marco específico de las First Nations de Canadá sobre propiedad, control, acceso y posesión. COSTA VIVA lo reconoce como referencia relacionada, pero no afirma certificación, adopción formal ni cumplimiento OCAP.', careLink: 'Principios CARE · Global Indigenous Data Alliance', ocapLink: 'Principios OCAP® · First Nations Information Governance Centre', frameworkCaution: 'Estos marcos pertenecen a contextos y pueblos concretos. Su mención sirve para transparentar referencias éticas y no sustituye los acuerdos propios que cada comunidad establezca sobre sus datos.',
      authorTitle: 'Autor y desarrollo', authorRole: 'Concepción del proyecto, arquitectura científica y digital, diseño metodológico y desarrollo de la herramienta.', academicLinkLabel: 'Vínculo académico del autor', academicLinkValue: 'Investigador de posdoctorado voluntario en la Universidade Federal de Mato Grosso do Sul', programLabel: 'Programa', contactLabel: 'Contacto académico', institutionNote: 'La afiliación identifica el marco académico de trabajo del autor. No implica por sí sola certificación institucional, financiación, aval oficial ni sustitución de los protocolos técnicos de las autoridades competentes.',
      methodCommitmentTitle: 'Compromiso metodológico', methodCommitment1: 'No inventar valores que el teléfono o la persona no hayan registrado.', methodCommitment2: 'Conservar la precisión informada por el dispositivo y distinguir medición, estimación y observación.', methodCommitment3: 'Favorecer puntos de control y procedimientos que puedan repetirse de la misma forma.', methodCommitment4: 'Mantener los registros bajo control de la comunidad hasta que decida exportarlos o compartirlos.', methodCommitment5: 'No incluir publicidad, rastreadores ni transmisión automática de los datos de campo.',
      licenseTitle: 'Licencias abiertas', softwareLicenseLabel: 'Código fuente', softwareLicenseText: 'El software de COSTA VIVA se publica bajo la licencia MIT, que permite usar, estudiar, modificar y redistribuir el código conservando el aviso de copyright y la licencia.', readMIT: 'Leer licencia MIT', contentLicenseLabel: 'Documentación y contenidos metodológicos', contentLicenseText: 'Los textos de ayuda y materiales metodológicos propios se ofrecen bajo CC BY 4.0, una licencia más apropiada para contenidos, siempre que se reconozca la autoría.', readContentLicense: 'Ver condiciones de los contenidos', limitsTitle: 'Alcance y límites', limitsText: 'COSTA VIVA ayuda a documentar observaciones y series comunitarias. No sustituye levantamientos topográficos, GNSS profesional, estudios oceanográficos, peritajes, sistemas oficiales de alerta ni decisiones de protección civil. Los registros deben interpretarse teniendo en cuenta el método utilizado y su incertidumbre.', citationTitle: 'Cómo citar COSTA VIVA', citationIntro: 'Referencia recomendada para la primera versión pública archivada del software.', citationVersionNote: 'Esta referencia identifica la versión v0.5.0 archivada en Zenodo. Las versiones futuras pueden disponer de su propio registro de versión.',
      wayuuBetaBanner: 'Wayuunaiki completo en borrador de trabajo. Puede contener errores y está preparado para revisión con hablantes Wayuu y expertos locales.', wayuuLanguageTitle: 'Wayuunaiki y revisión comunitaria', wayuuLanguageText1: 'COSTA VIVA incorpora una traducción provisional completa de la interfaz al Wayuunaiki. No se presenta como traducción definitiva y puede contener errores de vocabulario, gramática, ortografía, variantes locales y adecuación cultural.', wayuuLanguageText2: 'La versión debe revisarse con hablantes Wayuu y expertos locales. Las correcciones comunitarias tienen prioridad sobre este borrador.', wayuuLanguagePrincipleTitle: 'La lengua también pertenece a la comunidad', wayuuLanguagePrincipleText: 'La versión Wayuunaiki es una base de trabajo para revisar y corregir con la comunidad. No debe considerarse validada hasta completar ese proceso.',
      register: 'Registrar', beforeStart: 'Antes de comenzar', firstRunText: 'Para documentar una observación necesitamos comprobar algunas funciones del celular. Los registros se guardan primero en este dispositivo.', camera: 'Cámara', microphone: 'Micrófono', localStorage: 'Almacenamiento local', activateAndStart: 'ACTIVAR Y COMENZAR', continueWithout: 'Continuar sin activar ahora',
      gpsReady: 'Ubicación disponible', gpsWaiting: 'Buscando ubicación', gpsDenied: 'Permiso rechazado', gpsUnavailable: 'Ubicación no disponible', accuracyValue: '±{value} m', altitudeValue: '{value} m', headingValue: '{value}° {cardinal}',
      cameraReady: 'Cámara disponible', cameraDenied: 'Cámara no disponible', microphoneReady: 'Micrófono disponible', microphoneDenied: 'Micrófono no disponible', directionReady: 'Dirección disponible', directionUnavailable: 'Dirección no disponible',
      requiredCategory: 'Selecciona al menos una opción antes de guardar.', saving: 'Guardando observación', saved: 'Observación guardada en este dispositivo.', saveFailed: 'No se pudo guardar la observación.', noRecords: 'Todavía no hay registros guardados.', view: 'Ver', delete: 'Eliminar', deleteConfirm: '¿Eliminar este registro del dispositivo?', deleted: 'Registro eliminado.',
      noPosition: 'Sin posición', permanent: 'Permanente', mediaCount: '{value} evidencias', noNote: 'Sin nota', precision: 'Precisión', date: 'Fecha', coordinates: 'Coordenadas', measurementLabel: 'Medición', seaLabel: 'Mar', wavesLabel: 'Oleaje', pointLabel: 'Punto', history: 'Historial',
      currentPermanent: 'Volver a {code}', photoProcessing: 'Preparando fotografía', mediaAdded: 'Evidencia preparada', audioRecording: 'Grabando audio', audioStopped: 'Audio preparado', audioUnsupported: 'La grabación de audio no está disponible en este navegador.', audioPermission: 'No se pudo acceder al micrófono.',
      exportEmpty: 'No hay registros para exportar.', exportReady: 'Archivo preparado.', zipUnavailable: 'No se pudo crear el paquete ZIP.', shareUnavailable: 'El menú para compartir no admite archivos aquí. Se descargará el paquete.', mapUnavailable: 'El mapa base no está disponible. Se muestra una vista local de los puntos.', installUnavailable: 'Utiliza el menú del navegador y elige Añadir a pantalla de inicio cuando esté disponible.',
      originalPhoto: 'Original', documentedPhoto: 'Documentada', video: 'Vídeo', audio: 'Audio', close: 'Cerrar', unavailableShort: 'No disponible', independentLabel: 'Independiente', newPermanentLabel: 'Nuevo punto permanente'
    },
    pt: {
      subtitle: 'Caderno comunitário de observação costeira',
      wayuuBetaBanner: 'Wayuunaiki completo em versão preliminar de trabalho. Pode conter erros e está preparado para revisão com falantes Wayuu e especialistas locais.', wayuuLanguageTitle: 'Wayuunaiki e revisão comunitária', wayuuLanguageText1: 'COSTA VIVA incorpora uma tradução provisória completa da interface para o Wayuunaiki. Ela não é apresentada como tradução definitiva e pode conter erros de vocabulário, gramática, ortografia, variantes locais e adequação cultural.', wayuuLanguageText2: 'A versão deve ser revisada com falantes Wayuu e especialistas locais. As correções comunitárias têm prioridade sobre este rascunho.', wayuuLanguagePrincipleTitle: 'A língua também pertence à comunidade', wayuuLanguagePrincipleText: 'A versão em Wayuunaiki é uma base de trabalho para revisar e corrigir com a comunidade. Não deve ser considerada validada antes da conclusão desse processo.',
      languageAria: 'Idioma', baseMapSelectorAria: 'Seletor de mapa base', mapObservationsAria: 'Mapa de observações', zoomControlsAria: 'Controles de zoom', zoomIn: 'Aproximar', zoomOut: 'Afastar', legendAria: 'Legenda', mainNavigationAria: 'Navegação principal',
      install: 'Instalar', mapTitle: 'Mapa', mapIntro: 'Suas observações aparecem aqui quando possuem posição registrada.', myPosition: 'Minha posição',
      layers: 'Camadas', streetMap: 'Mapa', satellite: 'Satélite', noBaseMap: 'Sem mapa', mapBasesTitle: 'Mapas de referência', mapBasesHelp: 'Você pode escolher Mapa, Satélite ou Sem mapa. A imagem de satélite ajuda a reconhecer a costa, mas pode corresponder a outra data e não deve ser usada sozinha para medir quanto a linha de costa recuou.',
      offlineMapNote: 'Sem mapa base. Os pontos são mostrados usando as coordenadas salvas.', noMapPoints: 'Ainda não há pontos para mostrar', mapStartsWithPosition: 'O mapa será centralizado quando você registrar uma posição ou ativar Minha posição', singleObservation: 'Observação', permanentPoint: 'Ponto permanente',
      newObservation: 'Nova observação', registerIntro: 'Registre o que você vê. Não é necessário explicar a causa.', code: 'Código', location: 'Localização', accuracy: 'Precisão', altitude: 'Altitude', direction: 'Direção',
      notActivated: 'Não ativada', notAvailable: 'Não disponível', activateObservation: 'ATIVAR MODO DE OBSERVAÇÃO', sensorHelper: 'Serão solicitadas somente as permissões necessárias. Se um sensor não estiver disponível, o registro pode continuar.',
      whatObserve: 'O que você está observando?', multipleObserveHelp: 'Você pode marcar uma ou várias opções. Sem mudança aparente não pode ser combinado com uma mudança observada.', beachLoss: 'Perda aparente de praia', sandGain: 'Acúmulo aparente de areia', waterReach: 'O mar chegou mais longe', flood: 'Inundação', homeAffected: 'Moradia afetada', roadAffected: 'Caminho afetado', vegetationAffected: 'Vegetação afetada', noChange: 'Sem mudança aparente', other: 'Outro',
      communityNote: 'Nota da comunidade', notePlaceholder: 'Escreva com suas próprias palavras', measurement: 'Medição opcional', distance: 'Distância', unit: 'Unidade', method: 'Método', select: 'Selecionar', tape: 'Fita métrica', steps: 'Passos', estimate: 'Estimativa', measureTarget: 'Linha medida', erosionEdge: 'Borda de erosão', vegetationLine: 'Linha de vegetação estável', waterline: 'Borda da água', highWaterMark: 'Marca visível de água alta', reference: 'Referência fixa', referencePlaceholder: 'Estaca A, poste, moradia, marca',
      seaState: 'Estado observado do mar', waterLevel: 'Nível observado', waveState: 'Ondulação', dontKnow: 'Não sei', low: 'Baixo', normal: 'Normal', high: 'Alto', veryHigh: 'Muito alto', medium: 'Médio', strong: 'Forte',
      followup: 'Acompanhamento do ponto', pointType: 'Tipo de registro', independent: 'Observação independente', newPermanent: 'Criar novo ponto permanente', permanentHelp: 'Os pontos permanentes permitem voltar ao mesmo lugar e construir uma história de observações.',
      evidence: 'Evidências', photos: 'Fotos', videos: 'Vídeos', recordAudio: 'Gravar áudio', audioReady: 'Pronto para gravar', stop: 'Parar', removeAudio: 'Excluir áudio', photoOverlayHelp: 'As fotografias salvas geram uma cópia documentada com data, código, posição, precisão, altitude e direção quando esses dados estão disponíveis.', saveObservation: 'SALVAR OBSERVAÇÃO',
      notebook: 'Caderno', notebookIntro: 'Consulte as observações salvas neste dispositivo.', records: 'registros', search: 'Buscar', searchPlaceholder: 'Código ou nota', filterCategory: 'Tipo', all: 'Todos', withMedia: 'Com multimídia', onlyPermanent: 'Pontos permanentes',
      export: 'Exportar', exportIntro: 'Prepare uma cópia dos registros para conservar ou compartilhar.', fullData: 'Dados completos', tableData: 'Tabela de registros', mapData: 'Pontos para SIG', evidencePackage: 'Dados e evidências', sharePackage: 'Compartilhar pacote', shareHelp: 'Em dispositivos compatíveis será aberto o menu de compartilhamento. Se não estiver disponível, o pacote será baixado para que possa ser anexado ao e-mail.', privacyPrinciple: 'Os registros permanecem sob controle da comunidade e só saem do dispositivo quando você decide exportar ou compartilhar.',
      communityExchangeTitle: 'Compartilhar entre pessoas e comunidades', communityExchangeIntro: 'Escolha quais registros e quais conteúdos deseja compartilhar. COSTA VIVA prepara o pacote e o celular permite escolher WhatsApp, e-mail, Quick Share, Bluetooth ou outro aplicativo disponível.', shareRecords: 'Compartilhar registros', importPackage: 'Importar pacote COSTA VIVA', shareHelpCommunity: 'COSTA VIVA não envia os registros para um servidor próprio. O meio de envio depende dos aplicativos instalados no dispositivo.', onlyReceived: 'Registros recebidos', received: 'Recebido', receivedFromNotebook: 'Recebido · caderno {value}',
      shareModalTitle: 'Compartilhar registros', shareModalIntro: 'Você decide o que sai deste dispositivo, com quem e com qual conteúdo.', chooseRecordsTitle: 'Escolha os registros', selectAll: 'Selecionar todos', selectNone: 'Nenhum', chooseContentTitle: 'Escolha o que compartilhar', basicRecordData: 'Dados básicos do registro', shareMeasurements: 'Medições', shareNotes: 'Notas', shareCoordinates: 'Coordenadas e sensores', sharePhotos: 'Fotografias', shareVideos: 'Vídeos', shareAudios: 'Áudios', selectAllContent: 'Incluir tudo', clearOptionalContent: 'Remover opcionais', shareSensitiveWarning: 'As coordenadas podem revelar lugares sensíveis. Compartilhe somente quando for necessário e houver uma decisão consciente.', recipientTitle: 'Com quem você vai compartilhar?', recipientMyCommunity: 'Minha comunidade', recipientOtherCommunity: 'Outra comunidade', recipientResearch: 'Pesquisador ou universidade', recipientPublic: 'Instituição pública', recipientOrganization: 'Organização social', recipientOther: 'Outra pessoa', purposeOptional: 'Finalidade opcional', purposePlaceholder: 'Exemplo acompanhamento comunitário ou pesquisa acordada', shareControlReminder: 'COSTA VIVA prepara o arquivo. Não o envia para um servidor próprio e não recebe uma cópia.', prepareAndShare: 'PREPARAR E COMPARTILHAR', noShareRecordsSelected: 'Selecione pelo menos um registro.', preparingShare: 'Preparando pacote', sharedPackageReady: 'Pacote preparado para compartilhar.',
      importTitle: 'Importar registros recebidos', importSeparationHelp: 'Os registros recebidos são identificados como tal e conservam informações de procedência. Não são apresentados como observações criadas por este celular.', confirmImport: 'IMPORTAR', cancel: 'Cancelar', importInvalid: 'Este arquivo não é um pacote COSTA VIVA compatível.', importReading: 'Lendo pacote', importSummaryText: '{count} registros · criado em {date}', importRecipientText: 'Finalidade declarada ao compartilhar: {value}', importNoPurpose: 'Sem finalidade declarada', importComplete: 'Importação concluída. {added} adicionados e {skipped} já existentes.', importFailed: 'Não foi possível importar o pacote.', sourceNotebook: 'Caderno de origem',
      sharingHelpTitle: 'Compartilhar sem perder o controle', sharingHelpIntro: 'COSTA VIVA permite preparar um intercâmbio entre comunidades e pessoas sem enviar os registros para um servidor próprio.', shareWithWhomTitle: 'Com quem você pode compartilhar', shareWithWhomText: 'Você pode compartilhar com sua comunidade, outra comunidade, um pesquisador, uma instituição ou outra pessoa.', shareWhatTitle: 'O que você pode incluir', shareWhatText: 'Antes de enviar você escolhe os registros e também se inclui coordenadas, notas, medições, fotografias, vídeos ou áudios.', sharingHelpText: 'Você pode compartilhar com sua comunidade, outra comunidade, um pesquisador, uma instituição ou outra pessoa. Antes de enviar, escolhe os registros e também se inclui coordenadas, notas, medições, fotografias, vídeos ou áudios.', shareNotAllTitle: 'Compartilhar não significa entregar tudo', shareNotAllText: 'O pacote é preparado no celular. Depois Android, iOS ou o navegador mostram os aplicativos disponíveis para enviá-lo. COSTA VIVA não decide o destinatário e não recebe uma cópia.', mediaMetadataTitle: 'Atenção sobre fotos, vídeos e metadados', mediaMetadataCaution: 'Atenção. Alguns arquivos originais de câmera ou vídeo podem conter metadados criados pelo próprio dispositivo. Se uma localização for sensível, revise também os arquivos multimídia antes de compartilhá-los.',
      help: 'Ajuda', helpIntro: 'Guia breve para usar COSTA VIVA em campo.', helpActivateTitle: 'Ative o modo de observação', helpActivateText: 'Permite que o celular verifique localização, orientação, câmera e microfone. Você pode continuar mesmo que alguma função não esteja disponível.', helpObserveTitle: 'Registre o que você observa', helpObserveText: 'Descreva o que está acontecendo sem precisar explicar a causa.', helpPhotoTitle: 'Registre evidências', helpPhotoText: 'Adicione fotografias, vídeo, áudio ou uma medição simples. As fotografias documentadas conservam os dados disponíveis do dispositivo.', helpReturnTitle: 'Volte ao mesmo ponto', helpReturnText: 'Os pontos permanentes permitem comparar observações realizadas em diferentes momentos.',
      dataControlHelpTitle: 'Seus dados e sua decisão', dataControlHelpIntro: 'Registrar informação não significa entregá-la. COSTA VIVA salva os registros primeiro neste dispositivo e não os envia automaticamente a pesquisadores, universidades ou instituições.', whoSeesTitle: 'Quem pode ver meus registros?', whoSeesText: 'Enquanto você não os exportar ou compartilhar, eles permanecem no armazenamento local deste dispositivo. Lembre que uma pessoa com acesso ao celular ou ao perfil do navegador poderá acessá-los.', researcherAccessTitle: 'COSTA VIVA envia os dados ao pesquisador?', researcherAccessText: 'Não. O autor da ferramenta, uma universidade ou qualquer outra organização não recebe automaticamente suas coordenadas, fotografias, vídeos, áudios, notas ou medições.', mustShareTitle: 'Tenho que compartilhá-los?', mustShareText: 'Não. A comunidade decide se conserva, exporta ou compartilha os registros. Se alguém solicitar seu uso, é razoável perguntar para que serão usados, quem terá acesso e qual benefício ou devolutiva a comunidade receberá.', registerNotCedeTitle: 'Registrar não significa ceder', registerNotCedeText: 'COSTA VIVA ajuda a produzir e organizar registros. Não transforma o desenvolvedor, o pesquisador nem uma instituição em proprietário automático dos dados da comunidade.',
      fieldMethodsTitle: 'Como medir com meios simples', fieldMethodsIntro: 'COSTA VIVA é uma ferramenta de ciência popular. Uma fita, dois pontos de referência e uma forma constante de medir podem produzir uma série útil quando o mesmo procedimento é repetido.', goldenRuleTitle: 'Regra principal', goldenRuleText: 'Não importa medir muitas coisas. Importa medir sempre a mesma coisa, a partir da mesma referência, pela mesma linha e deixando registrado como a medição foi feita.',
      stakeMethodTitle: 'Método 1. Linha fixa com fita', stakeStep1: 'Escolha um lugar seguro e estável atrás da zona que pode sofrer erosão.', stakeStep2: 'Marque duas referências A e B alinhadas em direção à costa. Podem ser estacas resistentes ou elementos permanentes que não se movam.', stakeStep3: 'Crie esse lugar no COSTA VIVA como ponto permanente e fotografe as referências A e B.', stakeStep4: 'Escolha uma única linha que será acompanhada ao longo do tempo, por exemplo a borda da escarpa de erosão ou a linha de vegetação estável.', stakeStep5: 'Estenda a fita a partir de A seguindo exatamente o alinhamento A B até a linha escolhida. Registre a distância e o método Fita métrica.', stakeStep6: 'Faça uma segunda leitura para verificar se não houve erro de leitura. Se não coincidirem, repita e explique a diferença na nota.', stakeStep7: 'Faça uma fotografia a partir do mesmo ponto e, quando possível, na mesma direção.', stakeStep8: 'Na visita seguinte volte ao mesmo ponto permanente e repita exatamente a operação.', stakeWarning: 'Nunca coloque uma referência em uma borda instável nem entre na zona de arrebentação para obter uma medida. Se uma estaca desaparecer ou se mover, registre o fato. Não a substitua como se fosse a mesma referência.',
      photoMethodTitle: 'Método 2. Fotografia a partir de um ponto fixo', photoStep1: 'Escolha uma referência estável de onde seja possível voltar a fotografar.', photoStep2: 'Salve o lugar como ponto permanente.', photoStep3: 'Registre a direção da fotografia e uma referência visível que ajude a repetir o enquadramento.', photoStep4: 'Em cada visita procure usar o mesmo lugar, altura aproximada e direção.', photoStep5: 'Faça a fotografia antes de se aproximar da zona erodida e acrescente uma nota sobre as mudanças observadas.', photoWarning: 'Fotografias repetidas permitem documentar mudanças. Sozinhas não devem ser transformadas automaticamente em metros de erosão.',
      waterlineMethodTitle: 'Se medir até a borda da água', waterlineMethodText: 'A borda da água se move com a maré e a ondulação. Registre sempre a hora e o estado observado do mar. Para comparar duas medições procure realizar as visitas em condições de maré semelhantes. Uma diferença medida em horários ou estados de maré distintos não deve ser interpretada diretamente como erosão.',
      minimumRecordTitle: 'O que deve ficar registrado', minimum1: 'Código do ponto permanente', minimum2: 'Data e hora', minimum3: 'Referência fixa utilizada', minimum4: 'Linha medida', minimum5: 'Distância e método', minimum6: 'Fotografia e nota quando possível', minimum7: 'Estado observado do mar', minimum8: 'Posição e precisão do celular quando estiverem disponíveis',
      gpsTitle: 'Sobre o GPS do celular', gpsHelp: 'O GPS ajuda a localizar a observação. Não tem a precisão de um equipamento profissional. COSTA VIVA conserva a precisão informada pelo dispositivo para evitar aparentar uma exatidão que não existe.', installTitle: 'Instalar COSTA VIVA', installHelp: 'Em um navegador compatível use Instalar ou Adicionar à tela inicial. Depois você poderá abrir COSTA VIVA como um aplicativo.', installOnDevice: 'INSTALAR NESTE CELULAR', installModalKicker: 'Instalar no dispositivo', installModalTitle: 'Instalar COSTA VIVA', installModalIntro: 'A instalação permite abrir COSTA VIVA pela tela inicial e facilita o uso em campo.', installNativeReady: 'Seu navegador permite instalar COSTA VIVA diretamente.', installNow: 'INSTALAR AGORA', installManualTitle: 'Como instalar', installWordingNote: 'O nome exato da opção pode variar conforme o navegador e o celular.', installAndroid1: 'Abra o menu do navegador pelos três pontos.', installAndroid2: 'Procure Instalar aplicativo ou Adicionar à tela inicial.', installAndroid3: 'Confirme a instalação e abra COSTA VIVA pelo ícone.', installIOS1: 'Abra COSTA VIVA no Safari.', installIOS2: 'Toque em Compartilhar.', installIOS3: 'Escolha Adicionar à Tela de Início e confirme.', installDesktop1: 'Procure o ícone de instalação na barra de endereços ou abra o menu do navegador.', installDesktop2: 'Escolha Instalar COSTA VIVA ou Instalar aplicativo.', installDesktop3: 'Confirme a instalação.', installedAlready: 'COSTA VIVA já está instalada neste dispositivo.',
      projectInfoKicker: 'INFORMAÇÕES DO PROJETO', projectInfoSubtitle: 'Ferramenta aberta de ciência popular para observação comunitária da costa', projectInfoAria: 'Informações do projeto',
      projectPurposeTitle: 'Para que existe', projectPurposeText: 'COSTA VIVA nasce para que comunidades com meios limitados possam documentar mudanças em sua costa de forma organizada, repetível e verificável usando celulares comuns e métodos simples de campo. A ferramenta ajuda a conservar o que foi observado, onde, quando, como foi medido e qual evidência ficou registrada.',
      popularScienceTitle: 'Ciência popular', popularScienceText: 'A sofisticação está no método e não na exigência de equipamentos caros. Um registro comunitário ganha valor quando conserva o procedimento, a incerteza, a data, a posição disponível, as fotografias, as notas e as medições repetidas. COSTA VIVA busca tornar esse trabalho possível sem transformar o celular em um instrumento profissional que ele não é.',
      originTitle: 'Por que nasceu COSTA VIVA', originText1: 'COSTA VIVA surge a partir do trabalho realizado junto a comunidades Wayuu de Arroyo Guerrero, na Guajira colombiana, onde a erosão costeira e outras mudanças ambientais tornavam necessário documentar de forma contínua o que estava acontecendo no território.', originText2: 'Com a colaboração de Clarena Fonseca e o trabalho desenvolvido com as comunidades foi impulsionado o uso de fotografias, vídeos, percursos, localização por GPS e observações repetidas usando principalmente os celulares disponíveis.', originText3: 'Dessa experiência nasce a ideia de uma ferramenta de ciência popular capaz de ajudar a criar pontos de observação, repetir medições, conservar evidências e construir uma memória territorial verificável sem exigir instrumentação cara.', originPrincipleTitle: 'Uma ideia simples', originPrincipleText: 'A falta de equipamentos profissionais não deve impedir que uma comunidade possa observar, medir, documentar e conservar de forma organizada as mudanças do seu próprio território.',
      displacementTitle: 'Mudança climática e deslocamento', displacementText1: 'A erosão costeira, as inundações e a perda progressiva de terreno podem afetar moradias, caminhos, espaços culturais, atividades econômicas e outras condições necessárias para permanecer em um território.', displacementText2: 'Quando esses processos contribuem para que as pessoas tenham de abandonar temporária ou permanentemente um lugar podem fazer parte de dinâmicas de deslocamento associadas a fatores climáticos e ambientais.', displacementCaution: 'COSTA VIVA não determina por si só que exista deslocamento climático nem atribui uma condição jurídica às pessoas. Sua função é documentar mudanças, impactos e séries temporais que possam ajudar a compreender o que ocorreu.',
      odsTitle: 'COSTA VIVA e os Objetivos de Desenvolvimento Sustentável', odsIntro: 'A iniciativa se alinha principalmente com os seguintes ODS sem implicar reconhecimento ou certificação oficial por parte das Nações Unidas.', ods13Title: 'Ação contra a mudança global do clima', ods13Text: 'Apoia a observação local de impactos ambientais e a construção de memória útil para processos de adaptação.', ods11Title: 'Cidades e comunidades sustentáveis', ods11Text: 'Ajuda a documentar ameaças sobre moradias, caminhos, espaços comunitários e patrimônio territorial.', ods10Title: 'Redução das desigualdades', ods10Text: 'Busca reduzir a distância entre quem dispõe de instrumentação especializada e comunidades que precisam registrar seu território com meios limitados.', ods14Title: 'Vida na água', ods14Text: 'Favorece a observação de transformações na faixa costeira e nos espaços de interação entre o mar e as comunidades.', ods16Title: 'Paz, justiça e instituições eficazes', ods16Text: 'Facilita conservar evidências comunitárias organizadas que podem apoiar uma participação informada diante das instituições.', ods17Title: 'Parcerias e meios de implementação', ods17Text: 'Pode facilitar a colaboração entre comunidades, universidades, organizações sociais, pesquisadores e administrações públicas.',
      governanceTitle: 'Governança comunitária dos dados', governanceIntro: 'COSTA VIVA foi desenhada para reduzir a extração automática de informações produzidas pelas comunidades. Não existe um repositório central de registros comunitários nem uma conta obrigatória que envie os dados de campo aos responsáveis pelo projeto.', governancePrincipleText: 'Os registros não pertencem à COSTA VIVA por terem sido criados com o aplicativo. A comunidade e as pessoas que geram a informação decidem se a conservam, exportam ou compartilham.', governanceControlTitle: 'Controle comunitário.', governanceControlText: 'Os dados não saem automaticamente do dispositivo.', governanceDecisionTitle: 'Decisão informada.', governanceDecisionText: 'Compartilhar requer uma ação consciente da pessoa ou comunidade.', governancePurposeTitle: 'Finalidade conhecida.', governancePurposeText: 'Quem solicitar os dados deveria explicar para que pretende utilizá-los e quem terá acesso.', governanceBenefitTitle: 'Benefício coletivo.', governanceBenefitText: 'O uso posterior deveria buscar uma utilidade reconhecível para quem produziu a informação.', governanceRecognitionTitle: 'Reconhecimento.', governanceRecognitionText: 'A contribuição comunitária não deveria desaparecer quando os registros se transformam em relatórios, pesquisas ou publicações.', governanceSensitiveTitle: 'Proteção territorial.', governanceSensitiveText: 'Uma localização ou evidência sensível não deve ser compartilhada apenas porque tecnicamente é possível fazê-lo.', governanceNoShareTitle: 'Direito de não compartilhar.', governanceNoShareText: 'Criar um registro não obriga sua entrega posterior a pesquisadores ou instituições.', frameworksTitle: 'Marcos de referência', careText: 'O desenho toma como referência a orientação dos princípios CARE para a governança de dados indígenas, centrados em benefício coletivo, autoridade para controlar, responsabilidade e ética.', ocapText: 'OCAP é um marco específico das First Nations do Canadá sobre propriedade, controle, acesso e posse. COSTA VIVA o reconhece como referência relacionada, mas não afirma certificação, adoção formal nem conformidade OCAP.', careLink: 'Princípios CARE · Global Indigenous Data Alliance', ocapLink: 'Princípios OCAP® · First Nations Information Governance Centre', frameworkCaution: 'Esses marcos pertencem a contextos e povos específicos. Sua menção serve para tornar transparentes referências éticas e não substitui os acordos próprios que cada comunidade estabeleça sobre seus dados.',
      authorTitle: 'Autor e desenvolvimento', authorRole: 'Concepção do projeto, arquitetura científica e digital, desenho metodológico e desenvolvimento da ferramenta.', academicLinkLabel: 'Vínculo acadêmico do autor', academicLinkValue: 'Pesquisador de pós-doutorado voluntário na Universidade Federal de Mato Grosso do Sul', programLabel: 'Programa', contactLabel: 'Contato acadêmico', institutionNote: 'A afiliação identifica o marco acadêmico de trabalho do autor. Não implica, por si só, certificação institucional, financiamento, aval oficial nem substituição dos protocolos técnicos das autoridades competentes.',
      methodCommitmentTitle: 'Compromisso metodológico', methodCommitment1: 'Não inventar valores que o celular ou a pessoa não tenham registrado.', methodCommitment2: 'Conservar a precisão informada pelo dispositivo e distinguir medição, estimativa e observação.', methodCommitment3: 'Favorecer pontos de controle e procedimentos que possam ser repetidos da mesma forma.', methodCommitment4: 'Manter os registros sob controle da comunidade até que ela decida exportá-los ou compartilhá-los.', methodCommitment5: 'Não incluir publicidade, rastreadores nem transmissão automática dos dados de campo.',
      licenseTitle: 'Licenças abertas', softwareLicenseLabel: 'Código-fonte', softwareLicenseText: 'O software de COSTA VIVA é publicado sob a licença MIT, que permite usar, estudar, modificar e redistribuir o código mantendo o aviso de copyright e a licença.', readMIT: 'Ler licença MIT', contentLicenseLabel: 'Documentação e conteúdos metodológicos', contentLicenseText: 'Os textos de ajuda e materiais metodológicos próprios são oferecidos sob CC BY 4.0, uma licença mais apropriada para conteúdos, desde que a autoria seja reconhecida.', readContentLicense: 'Ver condições dos conteúdos', limitsTitle: 'Alcance e limites', limitsText: 'COSTA VIVA ajuda a documentar observações e séries comunitárias. Não substitui levantamentos topográficos, GNSS profissional, estudos oceanográficos, perícias, sistemas oficiais de alerta nem decisões de proteção civil. Os registros devem ser interpretados considerando o método utilizado e sua incerteza.', citationTitle: 'Como citar COSTA VIVA', citationIntro: 'Referência recomendada para a primeira versão pública arquivada do software.', citationVersionNote: 'Esta referência identifica a versão v0.5.0 arquivada no Zenodo. Versões futuras podem dispor de seu próprio registro de versão.',
      register: 'Registrar', beforeStart: 'Antes de começar', firstRunText: 'Para documentar uma observação precisamos verificar algumas funções do celular. Os registros são salvos primeiro neste dispositivo.', camera: 'Câmera', microphone: 'Microfone', localStorage: 'Armazenamento local', activateAndStart: 'ATIVAR E COMEÇAR', continueWithout: 'Continuar sem ativar agora',
      gpsReady: 'Localização disponível', gpsWaiting: 'Buscando localização', gpsDenied: 'Permissão recusada', gpsUnavailable: 'Localização não disponível', accuracyValue: '±{value} m', altitudeValue: '{value} m', headingValue: '{value}° {cardinal}',
      cameraReady: 'Câmera disponível', cameraDenied: 'Câmera não disponível', microphoneReady: 'Microfone disponível', microphoneDenied: 'Microfone não disponível', directionReady: 'Direção disponível', directionUnavailable: 'Direção não disponível',
      requiredCategory: 'Selecione pelo menos uma opção antes de salvar.', saving: 'Salvando observação', saved: 'Observação salva neste dispositivo.', saveFailed: 'Não foi possível salvar a observação.', noRecords: 'Ainda não há registros salvos.', view: 'Ver', delete: 'Excluir', deleteConfirm: 'Excluir este registro do dispositivo?', deleted: 'Registro excluído.',
      noPosition: 'Sem posição', permanent: 'Permanente', mediaCount: '{value} evidências', noNote: 'Sem nota', precision: 'Precisão', date: 'Data', coordinates: 'Coordenadas', measurementLabel: 'Medição', seaLabel: 'Mar', wavesLabel: 'Ondulação', pointLabel: 'Ponto', history: 'Histórico',
      currentPermanent: 'Voltar a {code}', photoProcessing: 'Preparando fotografia', mediaAdded: 'Evidência preparada', audioRecording: 'Gravando áudio', audioStopped: 'Áudio preparado', audioUnsupported: 'A gravação de áudio não está disponível neste navegador.', audioPermission: 'Não foi possível acessar o microfone.',
      exportEmpty: 'Não há registros para exportar.', exportReady: 'Arquivo preparado.', zipUnavailable: 'Não foi possível criar o pacote ZIP.', shareUnavailable: 'O menu de compartilhamento não aceita arquivos aqui. O pacote será baixado.', mapUnavailable: 'O mapa base não está disponível. Uma vista local dos pontos é exibida.', installUnavailable: 'Use o menu do navegador e escolha Adicionar à tela inicial quando estiver disponível.',
      originalPhoto: 'Original', documentedPhoto: 'Documentada', video: 'Vídeo', audio: 'Áudio', close: 'Fechar', unavailableShort: 'Não disponível', independentLabel: 'Independente', newPermanentLabel: 'Novo ponto permanente'
    }
  }


  // Wayuunaiki completo en borrador de trabajo.
  // Esta capa NO está validada lingüísticamente. Puede contener errores y
  // debe revisarse con hablantes Wayuu y expertos locales antes de declararse definitiva.
  i18n.guc = {
      "subtitle": "Karalouta wayuu süpüla e'rajawaa palaa",
      "languageAria": "Anüiki",
      "baseMapSelectorAria": "Aneekaa mapa süpüla apülee",
      "mapObservationsAria": "Mapa sümaa e'rajawaa",
      "zoomControlsAria": "Akaajaa mapaka",
      "zoomIn": "Miyo'uttaa mapaka",
      "zoomOut": "Motsottaa mapaka",
      "legendAria": "Ayaawase mapaka",
      "mainNavigationAria": "Wopu palajatü",
      "install": "Aikkale'eraa",
      "mapTitle": "Mapa",
      "mapIntro": "E'rajüin yaa na anaajünakana sümaa apülee GPS.",
      "myPosition": "Tapülee",
      "layers": "Mapairua",
      "streetMap": "Mapa",
      "satellite": "Satélite",
      "noBaseMap": "Nnojotsü mapa",
      "mapBasesTitle": "Mapa süpüla ayaawataa apülee",
      "mapBasesHelp": "Pünee mapa, satélite je nnojotsü mapa. Satélite akaalijüsü e'rajawaa palaa, aka nnojotsü süpüla ayaawataa müsü palaa süchiki wane ayaakua ne'e.",
      "offlineMapNote": "Nnojotsü mapa süpüla mma. E'iyatünüsü na apülee süka coordenada anaajünaka.",
      "noMapPoints": "Nnojotsü apülee süpüla e'iyataa joolu'u",
      "mapStartsWithPosition": "Mapaka ee'iyatünü süpülee aa'inru'u süchiki anaajaa wane apülee je Tapülee.",
      "singleObservation": "E'rajawaa",
      "permanentPoint": "Apülee ichee",
      "newObservation": "E'rajawaa jeketü",
      "registerIntro": "Pünaaja tü pi'rakat. Nnojotsü süpüla pümaa süchiki.",
      "code": "Ayaawase",
      "location": "Apülee",
      "accuracy": "Pansawaa GPS",
      "altitude": "Yaletaa mma",
      "direction": "Wopu / dirección",
      "notActivated": "Nnojotsü aainjünain",
      "notAvailable": "Nnojotsü eewain",
      "activateObservation": "A'AINJAA E'RAJAWAA",
      "sensorHelper": "Asaküinjatü ne'e permiso kapülain. Müleka nnojotsü wane sensor, anaasü anaajawaa tü e'rajawaa.",
      "whatObserve": "¿Kasa e'rajüin pia?",
      "multipleObserveHelp": "Pünee wane je waneirua. Nnojotsü ee'irataa nnojotsü sümaa ee'irataa e'rajünaka.",
      "beachLoss": "Mojusu palaa julu'u mma / playa",
      "sandGain": "Miyo'usu wanee / arena",
      "waterReach": "Palaa antüsü watta'amüin",
      "flood": "Wüin ekerolüsü mma",
      "homeAffected": "Miichi uwomuyusü",
      "roadAffected": "Wopu uwomuyusü",
      "vegetationAffected": "Wuna'apü uwomuyusü",
      "noChange": "Nnojotsü ee'irataa ja'yaa",
      "other": "Wane kasa",
      "communityNote": "Ashajaa wayuu",
      "notePlaceholder": "Püshaja süka pünüiki",
      "measurement": "Ayaawataa süpüla aneekaa",
      "distance": "Wattaa / distancia",
      "unit": "Unidad",
      "method": "Akuaippa ayaawataa",
      "select": "Aneekaa",
      "tape": "Sinta ayaawataa",
      "steps": "Ashajaa süka asipala / pasos",
      "estimate": "Ayaawataa süka aa'in",
      "measureTarget": "Wopu ayaawatünaka",
      "erosionEdge": "Palaapülee mojusü / borde erosión",
      "vegetationLine": "Wuna'apü ichee",
      "waterline": "Palaapülee wüin",
      "highWaterMark": "Ayaawase wüin yaletü",
      "reference": "Ayaawase ichee",
      "referencePlaceholder": "Estaca A, poste, miichi, ayaawase",
      "seaState": "Akuaippa palaa e'rajünaka",
      "waterLevel": "Yaletaa wüin e'rajünaka",
      "waveState": "A'wanajawaa palaa / oleaje",
      "dontKnow": "Nnojotsü tatüjain",
      "low": "Mmotso",
      "normal": "Anaa",
      "high": "Yaletaa",
      "veryHigh": "Miyo'u yaletaa",
      "medium": "Süchikijee",
      "strong": "Katsüin",
      "followup": "Ayataa apülee",
      "pointType": "Akuaippa anaajaa",
      "independent": "E'rajawaa wane'ewaika",
      "newPermanent": "Aainjaa apülee ichee jeketü",
      "permanentHelp": "Apülee ichee akaalijüsü eitawaa yaa waneepia otta akotchajaa achiki e'rajawaa.",
      "evidence": "Ayaawaseirua",
      "photos": "Ayaakua",
      "videos": "Videoirua",
      "recordAudio": "Anaajaa audio",
      "audioReady": "Anaasü süpüla audio",
      "stop": "Ekeraajaa",
      "removeAudio": "Aakataa audio",
      "photoOverlayHelp": "Ayaakua anaajünaka ee'iyatüsü wane copia sümaa akalia, ayaawase, apülee, pansawaa GPS, yaletaa mma otta dirección müleka eesü.",
      "saveObservation": "ANAAJAA E'RAJAWAA",
      "notebook": "Karalouta",
      "notebookIntro": "Pü'raaja na e'rajawaa anaajünakana sulu'u celular tüü.",
      "records": "anaajünaka",
      "search": "Achajawaa",
      "searchPlaceholder": "Ayaawase je ashajaa",
      "filterCategory": "Akuaippa",
      "all": "Apüshua'a",
      "withMedia": "Sümaa multimedia",
      "onlyPermanent": "Apülee icheeirua",
      "export": "Ee'iyataa / exportar",
      "exportIntro": "Paainja wane copia na anaajünakana süpüla anaajaa je ajütaa.",
      "fullData": "Kasachiki apüshua'a",
      "tableData": "Tabla anaajünaka",
      "mapData": "Apülee süpüla SIG",
      "evidencePackage": "Kasachiki otta ayaawaseirua",
      "sharePackage": "Ajütaa paquete",
      "shareHelp": "Müleka ainkaa celular, ee'iyatünü menu süpüla ajütaa. Müleka nnojotsü, paquete ee'iyalajünü süpüla correo.",
      "privacyPrinciple": "Na anaajünakana eejatü nain wayuukana. Ajütünü ne'e müleka wayuu aneeküin exportar je ajütaa.",
      "communityExchangeTitle": "Ajütaa kasachiki akotchirawaa wayuu",
      "communityExchangeIntro": "Pünee kasa anaajünaka otta kasa ajütünü. COSTA VIVA aainjüsü paquete, celular aneeküshi WhatsApp, correo, Quick Share, Bluetooth je wane aplicación.",
      "shareRecords": "Ajütaa anaajünaka",
      "importPackage": "Ekerolaa paquete COSTA VIVA",
      "shareHelpCommunity": "COSTA VIVA nnojotsü ajütüin kasachiki amüin servidor. Celularka otta aplicación aneeküshi wopu ajütaa.",
      "onlyReceived": "Anaajünaka antünaka",
      "received": "Antüsü",
      "receivedFromNotebook": "Antüsü · karalouta {value}",
      "shareModalTitle": "Ajütaa anaajünaka",
      "shareModalIntro": "Pia aneeküin kasa ojuitaka celular tüü, kachon otta kasa sümaa.",
      "chooseRecordsTitle": "Pünee na anaajünakana",
      "selectAll": "Aneekaa apüshua'a",
      "selectNone": "Nnojotsü wane",
      "chooseContentTitle": "Pünee kasa ajütünü",
      "basicRecordData": "Kasachiki palajatü anaajünaka",
      "shareMeasurements": "Ayaawataairua",
      "shareNotes": "Ashajaa",
      "shareCoordinates": "Coordenada otta sensorirua",
      "sharePhotos": "Ayaakuairua",
      "shareVideos": "Videoirua",
      "shareAudios": "Audioirua",
      "selectAllContent": "Ekerolaa apüshua'a",
      "clearOptionalContent": "Aakataa kasa süpüla aneekaa",
      "shareSensitiveWarning": "Coordenada ee'iyatasü apülee kapülain. Püjüta ne'e müleka kapülain otta eesü aa'in aneekünaka.",
      "recipientTitle": "¿Kasa wayuu amüin püjütüin?",
      "recipientMyCommunity": "Tapüshii / takotchirawaa",
      "recipientOtherCommunity": "Wane akotchirawaa",
      "recipientResearch": "Atüjülii / koleejia miyo'u",
      "recipientPublic": "Akotchirawaa aluwatawaa",
      "recipientOrganization": "Organización wayuu",
      "recipientOther": "Wane wayuu",
      "purposeOptional": "Kasa süpüla, müleka pünee",
      "purposePlaceholder": "Ayaawajaa akotchirawaa je atüjalaa anain",
      "shareControlReminder": "COSTA VIVA aainjüsü archivo. Nnojotsü ojuittüin amüin servidor otta nnojotsü anaajüin copia.",
      "prepareAndShare": "A'AINJAA OTTA AJÜTAA",
      "noShareRecordsSelected": "Pünee wane anaajünaka.",
      "preparingShare": "Aainjünü paquete",
      "sharedPackageReady": "Anaasü paquete süpüla ajütaa.",
      "importTitle": "Ekerolaa anaajünaka antünaka",
      "importSeparationHelp": "Anaajünaka antünaka ayaawatünü müsia. Anaajüsü achiki jalajeerü. Nnojotsü e'iyatünü müsia e'rajawaa aainjünaka süka celular tüü.",
      "confirmImport": "EKEROLAA",
      "cancel": "Aakataa",
      "importInvalid": "Archivo tüü nnojotsü paquete COSTA VIVA anain.",
      "importReading": "Aashaje'eraa paquete",
      "importSummaryText": "{count} anaajünaka · aainjüsü {date}",
      "importRecipientText": "Kasa süpüla ajütaa: {value}",
      "importNoPurpose": "Nnojotsü kasa süpüla ashajünain",
      "importComplete": "Ekeraasü ekerolaa. {added} jeketü otta {skipped} eejatüirua.",
      "importFailed": "Nnojotsü ainkain ekerolaa paquete.",
      "sourceNotebook": "Karalouta jalajeerü",
      "sharingHelpTitle": "Ajütaa nnojotsü amülouliin control",
      "sharingHelpIntro": "COSTA VIVA akaalijüsü ajütaa akotchirawaa wayuu nnojotsü ojuittüin anaajünaka amüin servidor.",
      "shareWithWhomTitle": "Kachon püjütüin",
      "shareWithWhomText": "Püjüta amüin püshii, wane akotchirawaa, atüjülii, akotchirawaa aluwatawaa je wane wayuu.",
      "shareWhatTitle": "Kasa pükerolüin",
      "shareWhatText": "Palajana ajütaa, pünee anaajünaka otta coordenada, ashajaa, ayaawataa, ayaakua, video je audio.",
      "sharingHelpText": "Püjüta amüin püshii je wane wayuu. Palajana ajütaa, pünee anaajünaka otta kasa sümaa.",
      "shareNotAllTitle": "Ajütaa nnojotsü ayalajaa apüshua'a",
      "shareNotAllText": "Paquete aainjünü sulu'u celular. Android, iOS je navegador ee'iyatüsü aplicación süpüla ajütaa. COSTA VIVA nnojotsü aneeküin kachon otta nnojotsü anaajüin copia.",
      "mediaMetadataTitle": "Jalia sümaa ayaakua, video otta metadata",
      "mediaMetadataCaution": "Jalia. Wane archivo cámara je video eesü metadata aainjünaka süka celular. Müleka apülee kapülain, pü'raaja multimedia palajana ajütaa.",
      "help": "Akaalijia",
      "helpIntro": "Akuaippa jo'uuchon süpüla COSTA VIVA sulu'u mma.",
      "helpActivateTitle": "Paainja e'rajawaa",
      "helpActivateText": "Celularka e'rajüshi apülee, dirección, cámara otta micrófono. Anaasü ayataa müleka wane nnojotsü eewain.",
      "helpObserveTitle": "Pünaaja tü pi'rakat",
      "helpObserveText": "Püshaja kasa e'iyalajaka nnojotsü süpüla pümaa süchiki asala.",
      "helpPhotoTitle": "Pünaaja ayaawaseirua",
      "helpPhotoText": "Pükerola ayaakua, video, audio je ayaawataa jo'uuchon. Ayaakua documentada anaajüsü kasachiki celular.",
      "helpReturnTitle": "Püeitawa wane apülee",
      "helpReturnText": "Apülee ichee akaalijüsü asottaa e'rajawaa süchiki akaliairua.",
      "dataControlHelpTitle": "Pünain kasachiki otta püneeküin",
      "dataControlHelpIntro": "Anaajaa kasachiki nnojotsü ajütaa. COSTA VIVA anaajüsü palajana sulu'u celular tüü otta nnojotsü ajütüin amüin atüjülii, koleejia miyo'u je akotchirawaa aluwatawaa.",
      "whoSeesTitle": "¿Kasa wayuu e'rajüin na tanaajünakana?",
      "whoSeesText": "Müleka nnojotsü püjütüin je exportar, eejatü sulu'u celular tüü. Wayuu ke'rajüin celular je navegador ainkasü e'rajawaa müsia.",
      "researcherAccessTitle": "¿COSTA VIVA ajütüsü amüin atüjülii?",
      "researcherAccessText": "Nnojotsü. Aainjülii tü herramientakat, koleejia miyo'u je akotchirawaa nnojotsü antirüin coordenada, ayaakua, video, audio, ashajaa je ayaawataa süka ne'e.",
      "mustShareTitle": "¿Eesü süpüla tajütaa müsia?",
      "mustShareText": "Nnojotsü. Akotchirawaa wayuu aneeküsü anaajaa, exportar je ajütaa. Müleka wane achuntüin kasachiki, anaasü asakaa kasa süpüla, kachon e'rajüin otta kasa anaain süpüla wayuukana.",
      "registerNotCedeTitle": "Anaajaa nnojotsü ayalajaa",
      "registerNotCedeText": "COSTA VIVA akaalijüsü aainjaa otta akumajaa anaajünaka. Nnojotsü aainjüin aainjülii software, atüjülii je akotchirawaa laülaa na kasachiki wayuukana.",
      "fieldMethodsTitle": "Ayaawataa süka kasa eejatü",
      "fieldMethodsIntro": "COSTA VIVA wane herramienta atüjalaa wayuu. Wane sinta, piama ayaawase ichee otta wane akuaippa ayaawataa ainkasü aainjaa wane serie anain müleka waneepia ayatünüsü maa aka.",
      "goldenRuleTitle": "Akuaippa miyo'u",
      "goldenRuleText": "Nnojotsü kapülain ayaawataa kasa miyo'u. Kapülainsü ayaawataa wane kasa waneepia, süka wane ayaawase, süpüna wane wopu otta ashajaa jamüsü aainjünain.",
      "stakeMethodTitle": "Akuaippa 1. Wopu ichee süka sinta",
      "stakeStep1": "Pünee wane apülee pansawaa otta ichee süchikijee mma e'iratanaka süka palaa.",
      "stakeStep2": "Paainja piama ayaawase A otta B lotaa amüin palaa. Ainkasü estaca ichee je kasa nnojotsü ee'iratawain.",
      "stakeStep3": "Paainja apülee tüü sulu'u COSTA VIVA müsia apülee ichee otta pünaaja ayaakua A otta B.",
      "stakeStep4": "Pünee wane wopu ne'e süpüla ayataa süchiki akalia, aa'u palaapülee mojusü je wuna'apü ichee.",
      "stakeStep5": "Püjütaja sinta sünain A, lotaa sümaa A B, amüin wopu aneekünaka. Pünaaja wattaa otta akuaippa Sinta ayaawataa.",
      "stakeStep6": "Paainja piantua ayaawataa süpüla e'rajawaa müleka pansawaa. Müleka nnojotsü wane, püchekja otta püshaja ee'irataa sulu'u ashajaa.",
      "stakeStep7": "Pünaaja ayaakua süka wane apülee otta, müleka ainkaa, wane dirección.",
      "stakeStep8": "Süchiki akalia, püeitawa apülee ichee otta paainja kasa maa aka waneepia.",
      "stakeWarning": "Jalia. Nnojotsü paainjain ayaawase sünain palaapülee mojusü otta nnojotsü pekeraain sulu'u palaa katsüin süpüla ayaawataa. Müleka estaca amüloulüin je ee'iratawain, pünaaja müsü. Nnojotsü pü'wanajain maa müsü wane ayaawase ne'e.",
      "photoMethodTitle": "Akuaippa 2. Ayaakua süka apülee ichee",
      "photoStep1": "Pünee wane ayaawase ichee jalain pia ainküin eitawaa süpüla ayaakua.",
      "photoStep2": "Pünaaja apülee müsü apülee ichee.",
      "photoStep3": "Püshaja dirección ayaakua otta wane ayaawase ja'yaa süpüla eitawaa wane encuadre.",
      "photoStep4": "Sulu'u wane'e akalia pünaaja ayaakua süka wane apülee, yaletaa jo'uuchon wane otta wane dirección.",
      "photoStep5": "Pünaaja ayaakua palajana pejeewain palaapülee mojusü otta püshaja ee'irataa e'rajünaka.",
      "photoWarning": "Ayaakua ayatünaka waneepia akaalijüsü e'iyataa ee'irataa. Nnojotsü süka ne'e ayaawatünü metro erosión.",
      "waterlineMethodTitle": "Müleka püyaawatüin amüin palaapülee wüin",
      "waterlineMethodText": "Palaapülee wüin ee'iratasü süka marea otta palaa. Pünaaja oora otta akuaippa palaa waneepia. Süpüla asottaa piama ayaawataa, anaasü aainjaa sulu'u marea süchiki wane. Ee'irataa sulu'u oora je marea nnojotsü ayaawatünü maa erosión.",
      "minimumRecordTitle": "Kasa kapülain anaajaa",
      "minimum1": "Ayaawase apülee ichee",
      "minimum2": "Akalia otta oora",
      "minimum3": "Ayaawase ichee atüjünaka",
      "minimum4": "Wopu ayaawatünaka",
      "minimum5": "Wattaa otta akuaippa",
      "minimum6": "Ayaakua otta ashajaa müleka ainkaa",
      "minimum7": "Akuaippa palaa e'rajünaka",
      "minimum8": "Apülee otta pansawaa GPS müleka eewain",
      "gpsTitle": "Achiki GPS celular",
      "gpsHelp": "GPS akaalijüsü e'rajawaa apülee. Nnojotsü pansawain maa equipo profesional. COSTA VIVA anaajüsü pansawaa ee'iyatünaka süka celular süpüla nnojotsü e'iyataain pansawaa nnojotsü eewain.",
      "installTitle": "Aikkale'eraa COSTA VIVA",
      "installHelp": "Sulu'u navegador anain, pünee Instalar je Añadir a pantalla. Süchiki tüü ainkasü pükerolaa COSTA VIVA maa aplicación.",
      "installOnDevice": "AIKKALE'ERAA SULU'U CELULAR TÜÜ",
      "installModalKicker": "Aikkale'eraa sulu'u celular",
      "installModalTitle": "Aikkale'eraa COSTA VIVA",
      "installModalIntro": "Aikkale'eraa akaalijüsü ekeraajaa COSTA VIVA süka icono otta ayataa sulu'u mma.",
      "installNativeReady": "Navegador tüü ainkasü aikkale'eraa COSTA VIVA joolu'u.",
      "installNow": "AIKKALE'ERAA JOOLU'U",
      "installManualTitle": "Jamüsü aikkale'erain",
      "installWordingNote": "Pütchi süpüla opción ainkasü ee'irataa sünain navegador otta celular.",
      "installAndroid1": "Püjütaa menu navegador sünain apünuin punto.",
      "installAndroid2": "Püchaja Instalar aplicación je Añadir a pantalla de inicio.",
      "installAndroid3": "Pükaa aikkale'eraa otta pükerola COSTA VIVA süka icono.",
      "installIOS1": "Püjütaa COSTA VIVA sulu'u Safari.",
      "installIOS2": "Püjütaa Compartir.",
      "installIOS3": "Pünee Añadir a pantalla de inicio otta pükaa.",
      "installDesktop1": "Püchaja icono aikkale'eraa sulu'u barra navegador je püjütaa menu.",
      "installDesktop2": "Pünee Instalar COSTA VIVA je Instalar aplicación.",
      "installDesktop3": "Pükaa aikkale'eraa.",
      "installedAlready": "COSTA VIVA eejatü aikkale'eraka sulu'u dispositivo tüü.",
      "projectInfoKicker": "KASACHIKI PROYECTOKAT",
      "projectInfoSubtitle": "Herramienta jutataa süpüla atüjalaa wayuu otta e'rajawaa palaa",
      "projectInfoAria": "Kasachiki proyectokat",
      "projectPurposeTitle": "Kasa süpüla eewain",
      "projectPurposeText": "COSTA VIVA aainjüsü süpüla wayuukana kalu'uin kasa jo'uuchon ainküin anaajaa ee'irataa palaa süka celular otta akuaippa mmaka. Anaajüsü kasa e'rajünaka, jalaa, joolu, jamüsü ayaawatünain otta kasa ayaawase anaajünaka.",
      "popularScienceTitle": "Atüjalaa wayuu",
      "popularScienceText": "Katsüinsü akuaippa, nnojotsü equipo kojutüin. Anaajaa wayuu anaasü müleka anaajünü jamüsü aainjünain, nnojotsü pansawaa, akalia, apülee, ayaakua, ashajaa otta ayaawataa ayatünaka. COSTA VIVA nnojotsü e'iyataain celular maa equipo profesional.",
      "originTitle": "Jalajeerü COSTA VIVA",
      "originText1": "COSTA VIVA antüsü süchiki a'yatawaa sümaa wayuukana Arroyo Guerrero sulu'u La Guajira, jalaa palaa ee'iratasü mma otta kasa mma, otta kapülainsü anaajaa waneepia kasa e'iyalajaka sulu'u woumain.",
      "originText2": "Sümaa akaalijia Clarena Fonseca otta a'yatawaa sümaa wayuukana, aainjünüsü ayaakua, video, waraittaa, GPS otta e'rajawaa ayatünaka süka celular eejatü.",
      "originText3": "Süchiki tüü antüsü aa'in COSTA VIVA, wane herramienta atüjalaa wayuu süpüla aainjaa apülee e'rajawaa, ayaawataa waneepia, anaajaa ayaawase otta sotoo aa'in woumain nnojotsü equipo kojutüin.",
      "originPrincipleTitle": "Wane aa'in anaasü",
      "originPrincipleText": "Nnojotsü equipo profesional nnojotsü süpüla atüjain wayuukana e'rajawaa, ayaawataa, anaajaa otta sotoo aa'in ee'irataa sünain woumain.",
      "displacementTitle": "Ee'irataa juya otta ouyantaa wayuu",
      "displacementText1": "Palaa mojusü mma, wüin ekerolüsü otta mma amüloulüsü ainkasü uwomuyawaa miichi, wopu, apülee akuaippa wayuu otta a'yatawaa süpüla kepiaa sünain woumain.",
      "displacementText2": "Müleka kasa tüü aainjüin wayuu ouyantaa süka wane apülee o'utpünaa je waneepia, ainkasü anain ee'irataa sümaa juya otta mma.",
      "displacementCaution": "COSTA VIVA nnojotsü maa süka ne'e eewain ouyantaa süka juya, otta nnojotsü e'itain condición jurídica. Akaalijüsü anaajaa ee'irataa, uwomuyawaa otta akaliairua süpüla atüjaa kasa e'iyalajaka.",
      "odsTitle": "COSTA VIVA otta ODS",
      "odsIntro": "Proyectokat eejatü pejeein sümaa ODS tüü. Nnojotsü maa certificación je reconocimiento süka Naciones Unidas.",
      "ods13Title": "Aainjaa süchiki juya",
      "ods13Text": "Akaalijüsü e'rajawaa uwomuyawaa mma otta anaajaa sotoo aa'in süpüla ee'irataa otta anaajawaa.",
      "ods11Title": "Pueulo otta akotchirawaa anaasü",
      "ods11Text": "Akaalijüsü anaajaa uwomuyawaa sünain miichi, wopu, apülee wayuu otta kasa woumain.",
      "ods10Title": "Motsottaa ee'irataa sümaa katsüin",
      "ods10Text": "Achajaajüsü motsottaa wattaa akuaippa sümaa na keejatüin equipo profesional otta wayuukana ayaawatüin woumain süka kasa eejatü.",
      "ods14Title": "Kataa o'u sulu'u palaa",
      "ods14Text": "Akaalijüsü e'rajawaa ee'irataa sünain palaapülee otta jalain palaa otta wayuukana akotchajaain.",
      "ods16Title": "Anaa aa'in, pansawaa otta aluwatawaa",
      "ods16Text": "Akaalijüsü anaajaa ayaawase wayuu akumajünaka süpüla ashajawaa sümaa akotchirawaa aluwatawaa süka kasachiki.",
      "ods17Title": "Akotchajirawaa süpüla kasa anain",
      "ods17Text": "Ainkasü akaalijaa akotchajirawaa wayuukana, koleejia miyo'u, akotchirawaa, atüjülii otta aluwatawaa.",
      "governanceTitle": "Aluwatawaa wayuu sünain kasachiki",
      "governanceIntro": "COSTA VIVA aainjüsü süpüla nnojotsü oitain automatique kasachiki aainjünaka süka wayuukana. Nnojotsü repositorio palajatü je cuenta kapülain ajütüin kasachiki mmaka amüin na aainjüliikana proyectokat.",
      "governancePrincipleText": "Anaajünaka nnojotsü nain COSTA VIVA süka aainjünain sümaa aplicación. Wayuukana otta na aainjüliikana kasachiki aneeküin anaajaa, exportar je ajütaa.",
      "governanceControlTitle": "Aluwatawaa wayuu.",
      "governanceControlText": "Kasachiki nnojotsü ojuittüin automatique süka celular.",
      "governanceDecisionTitle": "Aneekaa süka atüjaa.",
      "governanceDecisionText": "Ajütaa kapülainsü wane aainjaa atüjünaka süka wayuu je akotchirawaa.",
      "governancePurposeTitle": "Kasa süpüla atüjünaka.",
      "governancePurposeText": "Wayuu achuntaka kasachiki anaasü maa kasa süpüla atüjain otta kachon e'rajüin.",
      "governanceBenefitTitle": "Anaa süpüla apüshua'a.",
      "governanceBenefitText": "Atüjaa süchiki kasachiki anaasü aainjaa kasa anaain süpüla na aainjüliikana.",
      "governanceRecognitionTitle": "Ayaawataa na aainjüliikana.",
      "governanceRecognitionText": "A'yatawaa wayuu nnojotsü amülouliin müleka anaajünaka ee'iratawain informe, atüjalaa je publicación.",
      "governanceSensitiveTitle": "Aa'inmajaa woumain.",
      "governanceSensitiveText": "Apülee je ayaawase kapülain nnojotsü ajütünü süka ainkain teknicamente ne'e.",
      "governanceNoShareTitle": "Ainkaa nnojotsü ajütaa.",
      "governanceNoShareText": "Aainjaa wane anaajünaka nnojotsü aainjain wayuu ajütaa müsü süchiki amüin atüjülii je akotchirawaa aluwatawaa.",
      "frameworksTitle": "Akuaippairua süpüla ayaawataa",
      "careText": "Aainjünaka tüü e'rajüsü CARE süpüla kasachiki wayuu, sümaa anaa süpüla apüshua'a, aluwatawaa, responsabilidad otta ética.",
      "ocapText": "OCAP wane akuaippa First Nations Canadá süpüla propiedad, control, acceso otta posesión. COSTA VIVA e'rajüsü maa referencia, nnojotsü maa certificación je cumplimiento OCAP.",
      "careLink": "CARE · Global Indigenous Data Alliance",
      "ocapLink": "OCAP® · First Nations Information Governance Centre",
      "frameworkCaution": "Akuaippairua tüü eejatü sünain waneirua wayuu otta mma. Ashajünü yaa süpüla e'iyataa referencia ética. Nnojotsü a'wanajüin akuaippa aneekünaka süka wane'e akotchirawaa sünain kasachiki.",
      "authorTitle": "Aainjülii otta aainjaa",
      "authorRole": "Aa'in proyectokat, arquitectura atüjalaa otta digital, akuaippa ayaawataa otta aainjaa herramientakat.",
      "academicLinkLabel": "Akotchajirawaa akademikaka aainjülii",
      "academicLinkValue": "Atüjülii posdoctorado voluntario sulu'u Universidade Federal de Mato Grosso do Sul",
      "programLabel": "Programa",
      "contactLabel": "Akotchajawaa akademikaka",
      "institutionNote": "Afiliación e'iyatüsü jalain a'yataain aainjülii. Nnojotsü maa certificación, financiación, aval oficial je a'wanajaa protocolo técnico sünain autoridad.",
      "methodCommitmentTitle": "Pütchi süpüla akuaippa",
      "methodCommitment1": "Nnojotsü aainjain valor nnojotsü anaajünaka süka celular je wayuu.",
      "methodCommitment2": "Anaajaa pansawaa ee'iyatünaka süka celular otta ayaawataa ee'irataa sünain medición, estimación otta e'rajawaa.",
      "methodCommitment3": "Akaalijaa apülee control otta akuaippa ainküin aainjünü waneepia maa aka.",
      "methodCommitment4": "Anaajaa kasachiki nain wayuukana joolu'u süpüla aneekaa exportar je ajütaa.",
      "methodCommitment5": "Nnojotsü publicidad, rastreador je ajütaa automatique kasachiki mmaka.",
      "licenseTitle": "Licencia jutataa",
      "softwareLicenseLabel": "Código palajatü",
      "softwareLicenseText": "Software COSTA VIVA jutataa süka licencia MIT. Ainkasü atüjaa, ee'irataa otta ajütaa código, anaajüin copyright otta licencia.",
      "readMIT": "Aashaje'eraa licencia MIT",
      "contentLicenseLabel": "Karalouta otta akuaippa metodológikaka",
      "contentLicenseText": "Ashajaa akaalijia otta material metodológikaka jutataa süka CC BY 4.0, sümaa ayaawataa aainjülii.",
      "readContentLicense": "E'rajawaa akuaippa contenido",
      "limitsTitle": "Jalain ainkain otta jalain nnojotsü",
      "limitsText": "COSTA VIVA akaalijüsü anaajaa e'rajawaa otta serie wayuu. Nnojotsü a'wanajüin levantamiento topográfico, GNSS profesional, atüjalaa palaa, peritaje, alerta oficial je protección civil. Anaajünaka e'rajünü sümaa akuaippa atüjünaka otta nnojotsü pansawaa.",
      "citationTitle": "Jamüsü ashajünain COSTA VIVA",
      "citationIntro": "Ashajaa anain süpüla versión palajatü anaajünaka süka software.",
      "citationVersionNote": "Referencia tüü ayaawatüsü versión v0.5.0 anaajünaka sulu'u Zenodo. Versión jeketü ainkasü eejatü sümaa registro jeketü.",
      "wayuuBetaBanner": "WAYUUNAIKI JEKETÜ SÜPÜLA E'RAJAWAA. Pütchi tüü ainkasü mojulaa otta ee'iratawaa. E'rajünü sümaa wayuu ashajülii otta atüjülii anüiki sulu'u mma.",
      "wayuuLanguageTitle": "Wayuunaiki otta aainjaa sümaa wayuukana",
      "wayuuLanguageText1": "COSTA VIVA eejatü joolu'u sümaa wane versión Wayuunaiki apüshua'a süpüla a'laajawaa. Nnojotsü maa traducción ekeraaka. Pütchi apüshua'a aainjüsü maa borrador süpüla e'rajawaa otta ee'irataa.",
      "wayuuLanguageText2": "Versión tüü kapülainsü e'rajawaa sümaa wayuu ashajülii otta atüjülii anüiki yaa sulu'u mma. Kasa kapülain nnojotsü traducción pütchi ne'e, aka interfaz anain otta atüjünaka süka wayuukana.",
      "wayuuLanguagePrincipleTitle": "Anüiki nain wayuukana",
      "wayuuLanguagePrincipleText": "Wayuunaiki versión tüü wane a'laajawaa. Nnojotsü maa versión shiimüin joolu'u. Ee'iratünü süchiki e'rajawaa sümaa wayuukana otta atüjülii anüiki.",
      "register": "Anaajaa",
      "beforeStart": "Palajana aainjaa",
      "firstRunText": "Süpüla anaajaa e'rajawaa kapülainsü e'rajawaa waneirua akuaippa celular. Anaajünaka eejatü palajana sulu'u dispositivo tüü.",
      "camera": "Cámara",
      "microphone": "Micrófono",
      "localStorage": "Anaajawaa sulu'u celular",
      "activateAndStart": "A'AINJAA OTTA JOO'UYA",
      "continueWithout": "Ayataa nnojotsü aainjaa joolu'u",
      "gpsReady": "Apülee GPS anaasü",
      "gpsWaiting": "Achajünü apülee GPS",
      "gpsDenied": "Permiso nnojotsü akatüin",
      "gpsUnavailable": "Apülee GPS nnojotsü eewain",
      "accuracyValue": "±{value} m",
      "altitudeValue": "{value} m",
      "headingValue": "{value}° {cardinal}",
      "cameraReady": "Cámara anaasü",
      "cameraDenied": "Cámara nnojotsü eewain",
      "microphoneReady": "Micrófono anaasü",
      "microphoneDenied": "Micrófono nnojotsü eewain",
      "directionReady": "Dirección anaasü",
      "directionUnavailable": "Dirección nnojotsü eewain",
      "requiredCategory": "Pünee wane kasa palajana anaajaa.",
      "saving": "Anaajünü e'rajawaa",
      "saved": "E'rajawaa anaajüsü sulu'u celular tüü.",
      "saveFailed": "Nnojotsü ainkain anaajaa e'rajawaa.",
      "noRecords": "Nnojotsü eewain anaajünaka joolu'u.",
      "view": "E'raa",
      "delete": "Aakataa",
      "deleteConfirm": "¿Pü'kataa anaajünaka tüü süka celular?",
      "deleted": "Anaajünaka aakatüsü.",
      "noPosition": "Nnojotsü apülee",
      "permanent": "Ichee",
      "mediaCount": "{value} ayaawase",
      "noNote": "Nnojotsü ashajaa",
      "precision": "Pansawaa",
      "date": "Akalia",
      "coordinates": "Coordenadairua",
      "measurementLabel": "Ayaawataa",
      "seaLabel": "Palaa",
      "wavesLabel": "A'wanajawaa palaa",
      "pointLabel": "Apülee",
      "history": "Achiki anaajünaka",
      "currentPermanent": "Eitawaa amüin {code}",
      "photoProcessing": "Aainjünü ayaakua",
      "mediaAdded": "Ayaawase anaasü",
      "audioRecording": "Anaajünü audio",
      "audioStopped": "Audio anaasü",
      "audioUnsupported": "Navegador tüü nnojotsü ainkain anaajaa audio.",
      "audioPermission": "Nnojotsü ainkain ekerolaa amüin micrófono.",
      "exportEmpty": "Nnojotsü anaajünaka süpüla exportar.",
      "exportReady": "Archivo anaasü.",
      "zipUnavailable": "Nnojotsü ainkain aainjaa paquete ZIP.",
      "shareUnavailable": "Menu ajütaa nnojotsü akatüin archivo yaa. Paquete ee'iyalajünü.",
      "mapUnavailable": "Mapa süpüla mma nnojotsü eewain. E'iyatüsü apülee sulu'u vista local.",
      "installUnavailable": "Püjütaa menu navegador otta pünee Añadir a pantalla de inicio müleka eewain.",
      "originalPhoto": "Ayaakua palajatü",
      "documentedPhoto": "Ayaakua sümaa kasachiki",
      "video": "Video",
      "audio": "Audio",
      "close": "Asürülaa",
      "unavailableShort": "Nnojotsü eewain",
      "independentLabel": "Wane'ewaika",
      "newPermanentLabel": "Apülee ichee jeketü"
  }


  const categoryKeys = {
    beach_loss: 'beachLoss', sand_gain: 'sandGain', water_reach: 'waterReach', flood: 'flood', home: 'homeAffected', road: 'roadAffected', vegetation: 'vegetationAffected', no_change: 'noChange', other: 'other'
  }

  const measurementTargetKeys = {
    erosion_edge: 'erosionEdge', vegetation_line: 'vegetationLine', waterline: 'waterline', high_water_mark: 'highWaterMark', other: 'other'
  }

  const state = {
    lang: ['es','pt','guc'].includes(localStorage.getItem('costa-viva-lang')) ? localStorage.getItem('costa-viva-lang') : 'es',
    latestPosition: null,
    heading: null,
    headingSource: null,
    sensorActive: false,
    watchId: null,
    records: [],
    nextCounter: 1,
    draftMedia: [],
    audioRecorder: null,
    audioStream: null,
    audioChunks: [],
    map: null,
    mapLayer: null,
    baseLayer: ['osm', 'satellite', 'none'].includes(localStorage.getItem('costa-viva-map-layer')) ? localStorage.getItem('costa-viva-map-layer') : 'osm',
    userMarker: null,
    installPrompt: null,
    pendingImport: null
  }

  const $ = selector => document.querySelector(selector)
  const $$ = selector => Array.from(document.querySelectorAll(selector))
  const tr = (key, vars = {}) => {
    let text = i18n[state.lang][key] ?? key
    Object.entries(vars).forEach(([name, value]) => { text = text.replace(`{${name}}`, value) })
    return text
  }

  function setLanguage(lang) {
    state.lang = lang
    localStorage.setItem('costa-viva-lang', lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'guc' ? 'guc' : 'es'
    $('#subtitle').textContent = tr('subtitle')
    $('#first-run-subtitle').textContent = tr('subtitle')
    updateInstallGuide()
    $('#project-info-btn').setAttribute('aria-label', tr('projectInfoAria'))
    $('#project-info-btn').title = tr('projectInfoAria')
    $('.lang-switch')?.setAttribute('aria-label', tr('languageAria'))
    $('.map-toolbar')?.setAttribute('aria-label', tr('baseMapSelectorAria'))
    $('#map')?.setAttribute('aria-label', tr('mapObservationsAria'))
    $('.map-controls')?.setAttribute('aria-label', tr('zoomControlsAria'))
    $('#map-zoom-in')?.setAttribute('aria-label', tr('zoomIn'))
    $('#map-zoom-out')?.setAttribute('aria-label', tr('zoomOut'))
    $('.map-legend')?.setAttribute('aria-label', tr('legendAria'))
    $('.bottom-nav')?.setAttribute('aria-label', tr('mainNavigationAria'))
    ;['#project-info-close','#detail-close','#share-modal-close','#import-modal-close','#install-modal-close'].forEach(selector => $(selector)?.setAttribute('aria-label', tr('close')))
    $$('#lang-es, #lang-pt, #lang-guc').forEach(btn => btn.classList.toggle('active', btn.id === `lang-${lang}`))
    if ($('#wayuu-beta-banner')) $('#wayuu-beta-banner').hidden = lang !== 'guc'
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n
      if (i18n[state.lang][key]) el.textContent = tr(key)
    })
    $$('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = tr(el.dataset.i18nPlaceholder)
    })
    populateCategoryFilter()
    populatePermanentSelect()
    updateSensorUI()
    updateMapLayerUI()
    renderAll()
  }

  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION)
      req.onupgradeneeded = () => {
        const db = req.result
        if (!db.objectStoreNames.contains(RECORD_STORE)) {
          const store = db.createObjectStore(RECORD_STORE, { keyPath: 'uuid' })
          store.createIndex('code', 'code', { unique: false })
          store.createIndex('createdAt', 'createdAt')
        } else {
          const store = req.transaction.objectStore(RECORD_STORE)
          if (store.indexNames.contains('code')) store.deleteIndex('code')
          store.createIndex('code', 'code', { unique: false })
          if (!store.indexNames.contains('createdAt')) store.createIndex('createdAt', 'createdAt')
        }
        if (!db.objectStoreNames.contains(META_STORE)) db.createObjectStore(META_STORE, { keyPath: 'key' })
      }
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => reject(req.error)
    })
  }

  async function idbGetAllRecords() {
    const db = await openDB()
    return new Promise((resolve, reject) => {
      const tx = db.transaction(RECORD_STORE, 'readonly')
      const req = tx.objectStore(RECORD_STORE).getAll()
      req.onsuccess = () => resolve(req.result.sort((a, b) => b.createdAt.localeCompare(a.createdAt)))
      req.onerror = () => reject(req.error)
    })
  }

  async function idbPutRecord(record) {
    const db = await openDB()
    return new Promise((resolve, reject) => {
      const tx = db.transaction(RECORD_STORE, 'readwrite')
      tx.objectStore(RECORD_STORE).put(record)
      tx.oncomplete = () => resolve()
      tx.onerror = () => reject(tx.error)
    })
  }

  async function idbDeleteRecord(uuid) {
    const db = await openDB()
    return new Promise((resolve, reject) => {
      const tx = db.transaction(RECORD_STORE, 'readwrite')
      tx.objectStore(RECORD_STORE).delete(uuid)
      tx.oncomplete = () => resolve()
      tx.onerror = () => reject(tx.error)
    })
  }

  async function idbGetMeta(key) {
    const db = await openDB()
    return new Promise((resolve, reject) => {
      const req = db.transaction(META_STORE, 'readonly').objectStore(META_STORE).get(key)
      req.onsuccess = () => resolve(req.result?.value)
      req.onerror = () => reject(req.error)
    })
  }

  async function idbSetMeta(key, value) {
    const db = await openDB()
    return new Promise((resolve, reject) => {
      const tx = db.transaction(META_STORE, 'readwrite')
      tx.objectStore(META_STORE).put({ key, value })
      tx.oncomplete = () => resolve()
      tx.onerror = () => reject(tx.error)
    })
  }

  async function loadState() {
    state.records = await idbGetAllRecords()
    const stored = await idbGetMeta('counter')
    state.nextCounter = Number.isInteger(stored) ? stored : 1
    updateDraftCode()
    renderAll()
  }

  function updateDraftCode() {
    $('#draft-code').textContent = `CV-${String(state.nextCounter).padStart(6, '0')}`
  }

  function showToast(message) {
    const toast = $('#toast')
    toast.textContent = message
    toast.hidden = false
    clearTimeout(showToast.timer)
    showToast.timer = setTimeout(() => { toast.hidden = true }, 3200)
  }

  function showScreen(name) {
    $$('.screen').forEach(screen => screen.classList.toggle('active', screen.dataset.screen === name))
    $$('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.target === name))
    if (name === 'map') setTimeout(refreshMap, 50)
    if (name === 'notebook') renderNotebook()
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  function updateSensorUI() {
    const pos = state.latestPosition
    if (pos) {
      $('#status-location').textContent = `${pos.coords.latitude.toFixed(6)}, ${pos.coords.longitude.toFixed(6)}`
      $('#status-accuracy').textContent = tr('accuracyValue', { value: Math.round(pos.coords.accuracy) })
      $('#status-altitude').textContent = Number.isFinite(pos.coords.altitude) ? tr('altitudeValue', { value: pos.coords.altitude.toFixed(1) }) : tr('notAvailable')
    } else {
      $('#status-location').textContent = state.sensorActive ? tr('gpsWaiting') : tr('notActivated')
      $('#status-accuracy').textContent = tr('notAvailable')
      $('#status-altitude').textContent = tr('notAvailable')
    }
    if (Number.isFinite(state.heading)) {
      $('#status-heading').textContent = tr('headingValue', { value: Math.round(state.heading), cardinal: cardinal(state.heading) })
    } else {
      $('#status-heading').textContent = tr('notAvailable')
    }
    if (!state.sensorActive) {
      $('#status-camera').textContent = tr('notActivated')
      $('#status-microphone').textContent = tr('notActivated')
    }
  }

  function cardinal(deg) {
    const labels = state.lang === 'pt' ? ['N','NE','L','SE','S','SO','O','NO'] : ['N','NE','E','SE','S','SO','O','NO']
    return labels[Math.round((((deg % 360) + 360) % 360) / 45) % 8]
  }

  async function activateObservationMode() {
    state.sensorActive = true
    updateSensorUI()
    startGeolocation()
    await requestOrientation()
    await testMediaPermissions()
    localStorage.setItem('costa-viva-first-run', 'done')
    $('#first-run').style.display = 'none'
    showScreen('register')
  }

  function startGeolocation() {
    if (!navigator.geolocation) {
      $('#status-location').textContent = tr('gpsUnavailable')
      return
    }
    $('#status-location').textContent = tr('gpsWaiting')
    if (state.watchId !== null) navigator.geolocation.clearWatch(state.watchId)
    state.watchId = navigator.geolocation.watchPosition(position => {
      state.latestPosition = position
      if (Number.isFinite(position.coords.heading)) {
        state.heading = position.coords.heading
        state.headingSource = 'geolocation'
      }
      updateSensorUI()
      updateUserMarker()
    }, error => {
      $('#status-location').textContent = error.code === 1 ? tr('gpsDenied') : tr('gpsUnavailable')
    }, { enableHighAccuracy: true, maximumAge: 3000, timeout: 15000 })
  }

  async function requestOrientation() {
    const handler = event => {
      let heading = null
      let source = null
      if (Number.isFinite(event.webkitCompassHeading)) {
        heading = event.webkitCompassHeading
        source = 'webkitCompassHeading'
      } else if (event.absolute && Number.isFinite(event.alpha)) {
        const screenAngle = Number.isFinite(screen.orientation?.angle) ? screen.orientation.angle : 0
        heading = (360 - event.alpha + screenAngle + 360) % 360
        source = 'deviceorientationabsolute'
      }
      if (Number.isFinite(heading)) {
        state.heading = heading
        state.headingSource = source
        updateSensorUI()
      }
    }

    try {
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        const permission = await DeviceOrientationEvent.requestPermission()
        if (permission !== 'granted') return
      }
      window.addEventListener('deviceorientationabsolute', handler, true)
      window.addEventListener('deviceorientation', handler, true)
    } catch (error) {
      console.warn('Orientation unavailable', error)
    }
  }

  async function testMediaPermissions() {
    if (!navigator.mediaDevices?.getUserMedia) {
      $('#status-camera').textContent = tr('cameraDenied')
      $('#status-microphone').textContent = tr('microphoneDenied')
      return
    }
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({ video: true })
      videoStream.getTracks().forEach(track => track.stop())
      $('#status-camera').textContent = tr('cameraReady')
    } catch (error) {
      $('#status-camera').textContent = tr('cameraDenied')
    }
    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true })
      audioStream.getTracks().forEach(track => track.stop())
      $('#status-microphone').textContent = tr('microphoneReady')
    } catch (error) {
      $('#status-microphone').textContent = tr('microphoneDenied')
    }
  }

  function sensorSnapshot() {
    const p = state.latestPosition?.coords
    return {
      capturedAt: new Date().toISOString(),
      latitude: Number.isFinite(p?.latitude) ? p.latitude : null,
      longitude: Number.isFinite(p?.longitude) ? p.longitude : null,
      accuracy: Number.isFinite(p?.accuracy) ? p.accuracy : null,
      altitude: Number.isFinite(p?.altitude) ? p.altitude : null,
      altitudeAccuracy: Number.isFinite(p?.altitudeAccuracy) ? p.altitudeAccuracy : null,
      heading: Number.isFinite(state.heading) ? state.heading : null,
      headingSource: state.headingSource,
      speed: Number.isFinite(p?.speed) ? p.speed : null,
      source: 'device-web-apis'
    }
  }

  function formatOverlayLine(label, value) {
    return `${label}  ${value ?? tr('unavailableShort')}`
  }

  async function documentPhoto(file, code) {
    const meta = sensorSnapshot()
    const bitmap = await createImageBitmap(file)
    const maxWidth = 2200
    const scale = bitmap.width > maxWidth ? maxWidth / bitmap.width : 1
    const width = Math.round(bitmap.width * scale)
    const height = Math.round(bitmap.height * scale)
    const bandHeight = Math.max(150, Math.round(height * 0.18))
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    ctx.drawImage(bitmap, 0, 0, width, height)
    ctx.fillStyle = 'rgba(22,46,81,0.90)'
    ctx.fillRect(0, height - bandHeight, width, bandHeight)
    const fontSize = Math.max(18, Math.round(width / 55))
    ctx.fillStyle = '#ffffff'
    ctx.font = `700 ${fontSize}px system-ui, sans-serif`
    ctx.textBaseline = 'top'
    const pad = Math.max(16, Math.round(width / 80))
    const x1 = pad
    const x2 = Math.round(width * 0.53)
    const y0 = height - bandHeight + pad
    const line = Math.round(fontSize * 1.35)
    const date = new Date(meta.capturedAt).toLocaleString(state.lang === 'pt' ? 'pt-BR' : 'es-ES')
    const lat = meta.latitude === null ? null : meta.latitude.toFixed(6)
    const lon = meta.longitude === null ? null : meta.longitude.toFixed(6)
    const acc = meta.accuracy === null ? null : `±${Math.round(meta.accuracy)} m`
    const alt = meta.altitude === null ? null : `${meta.altitude.toFixed(1)} m`
    const head = meta.heading === null ? null : `${Math.round(meta.heading)}° ${cardinal(meta.heading)}`
    const left = [code, date, formatOverlayLine('Lat', lat), formatOverlayLine('Lon', lon)]
    const right = [formatOverlayLine(tr('precision'), acc), formatOverlayLine(tr('altitude'), alt), formatOverlayLine(tr('direction'), head)]
    left.forEach((text, i) => ctx.fillText(text, x1, y0 + i * line))
    right.forEach((text, i) => ctx.fillText(text, x2, y0 + i * line))
    const stampedBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.9))
    return {
      kind: 'photo',
      id: crypto.randomUUID(),
      name: file.name || `foto-${Date.now()}.jpg`,
      mime: file.type || 'image/jpeg',
      originalBlob: file,
      documentedBlob: stampedBlob,
      metadata: meta
    }
  }

  async function handlePhotoFiles(files) {
    for (const file of files) {
      showToast(tr('photoProcessing'))
      try {
        const item = await documentPhoto(file, $('#draft-code').textContent)
        state.draftMedia.push(item)
      } catch (error) {
        console.error(error)
      }
    }
    $('#photo-input').value = ''
    renderDraftMedia()
    showToast(tr('mediaAdded'))
  }

  function handleGenericMedia(files, kind) {
    Array.from(files).forEach(file => {
      state.draftMedia.push({
        kind,
        id: crypto.randomUUID(),
        name: file.name || `${kind}-${Date.now()}`,
        mime: file.type || 'application/octet-stream',
        blob: file,
        metadata: sensorSnapshot()
      })
    })
    renderDraftMedia()
    showToast(tr('mediaAdded'))
  }

  function renderDraftMedia() {
    const host = $('#media-preview')
    host.innerHTML = ''
    state.draftMedia.forEach(item => {
      const div = document.createElement('div')
      div.className = 'media-chip'
      const label = item.kind === 'photo' ? tr('documentedPhoto') : item.kind === 'video' ? tr('video') : tr('audio')
      if (item.kind === 'photo' && item.documentedBlob) {
        const img = document.createElement('img')
        img.src = URL.createObjectURL(item.documentedBlob)
        img.alt = item.name
        div.appendChild(img)
      }
      const text = document.createElement('div')
      text.textContent = `${label}  ${item.name}`
      div.appendChild(text)
      const remove = document.createElement('button')
      remove.type = 'button'
      remove.className = 'danger-link'
      remove.textContent = tr('delete')
      remove.addEventListener('click', () => {
        state.draftMedia = state.draftMedia.filter(m => m.id !== item.id)
        renderDraftMedia()
      })
      div.appendChild(remove)
      host.appendChild(div)
    })
  }

  async function startAudioRecording() {
    if (!window.MediaRecorder || !navigator.mediaDevices?.getUserMedia) {
      showToast(tr('audioUnsupported'))
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      state.audioStream = stream
      state.audioChunks = []
      const recorder = new MediaRecorder(stream)
      state.audioRecorder = recorder
      recorder.ondataavailable = e => { if (e.data.size) state.audioChunks.push(e.data) }
      recorder.onstop = () => {
        const blob = new Blob(state.audioChunks, { type: recorder.mimeType || 'audio/webm' })
        const item = { kind: 'audio', id: crypto.randomUUID(), name: `audio-${Date.now()}.webm`, mime: blob.type, blob, metadata: sensorSnapshot() }
        state.draftMedia.push(item)
        state.audioStream?.getTracks().forEach(track => track.stop())
        state.audioStream = null
        $('#audio-preview').src = URL.createObjectURL(blob)
        $('#audio-preview').hidden = false
        $('#audio-remove').hidden = false
        $('#audio-stop').hidden = true
        $('#audio-state').textContent = tr('audioStopped')
        renderDraftMedia()
      }
      recorder.start()
      $('#audio-panel').hidden = false
      $('#audio-stop').hidden = false
      $('#audio-state').textContent = tr('audioRecording')
    } catch (error) {
      console.error(error)
      showToast(tr('audioPermission'))
    }
  }

  function stopAudioRecording() {
    if (state.audioRecorder?.state === 'recording') state.audioRecorder.stop()
  }

  function removeLastAudio() {
    const idx = [...state.draftMedia].reverse().findIndex(item => item.kind === 'audio')
    if (idx >= 0) {
      const actual = state.draftMedia.length - 1 - idx
      state.draftMedia.splice(actual, 1)
    }
    $('#audio-preview').hidden = true
    $('#audio-preview').removeAttribute('src')
    $('#audio-remove').hidden = true
    $('#audio-state').textContent = tr('audioReady')
    renderDraftMedia()
  }

  function selectedCategories() {
    return $$('input[name="category"]:checked').map(input => input.value)
  }

  function recordCategories(record) {
    if (Array.isArray(record?.categories) && record.categories.length) return record.categories
    if (record?.category) return [record.category]
    return []
  }

  function categoryText(record) {
    const values = recordCategories(record)
    if (!values.length) return tr('other')
    return values.map(value => tr(categoryKeys[value] || 'other')).join(' · ')
  }

  async function saveRecord(event) {
    event.preventDefault()
    const categories = selectedCategories()
    if (!categories.length) {
      $('#save-message').textContent = tr('requiredCategory')
      return
    }
    $('#save-message').textContent = tr('saving')
    const now = new Date().toISOString()
    const code = $('#draft-code').textContent
    const location = sensorSnapshot()
    const follow = $('#permanent-select').value
    const permanentPointId = follow === 'new' ? code : follow.startsWith('point:') ? follow.slice(6) : null
    const isPermanentRoot = follow === 'new'
    const measurementValue = $('#distance').value.trim()
    const record = {
      schemaVersion: 3,
      uuid: crypto.randomUUID(),
      code,
      createdAt: now,
      modifiedAt: now,
      interfaceLanguage: state.lang,
      categories,
      category: categories[0],
      observationText: $('#community-note').value.trim(),
      location,
      measurement: measurementValue ? {
        value: Number(measurementValue),
        unit: $('#distance-unit').value,
        method: $('#measure-method').value || null,
        target: $('#measure-target').value || null,
        reference: $('#measure-reference').value.trim() || null
      } : null,
      sea: { level: $('#sea-level').value, waves: $('#wave-state').value },
      permanentPointId,
      isPermanentRoot,
      media: state.draftMedia,
      provenance: {
        position: location.latitude === null ? 'unavailable' : 'device-geolocation-api',
        accuracy: location.accuracy === null ? 'unavailable' : 'device-geolocation-api',
        altitude: location.altitude === null ? 'unavailable' : 'device-geolocation-api',
        heading: location.heading === null ? 'unavailable' : location.headingSource || 'device-orientation-api'
      }
    }
    try {
      await idbPutRecord(record)
      state.records.unshift(record)
      state.nextCounter += 1
      await idbSetMeta('counter', state.nextCounter)
      resetForm()
      updateDraftCode()
      populatePermanentSelect()
      renderAll()
      $('#save-message').textContent = tr('saved')
      showToast(tr('saved'))
    } catch (error) {
      console.error(error)
      $('#save-message').textContent = tr('saveFailed')
    }
  }

  function resetForm() {
    $('#record-form').reset()
    state.draftMedia = []
    renderDraftMedia()
    $('#audio-panel').hidden = true
    $('#audio-preview').hidden = true
    $('#audio-remove').hidden = true
  }

  function populatePermanentSelect() {
    const select = $('#permanent-select')
    const current = select.value
    select.innerHTML = ''
    const independent = document.createElement('option')
    independent.value = 'independent'
    independent.textContent = tr('independent')
    select.appendChild(independent)
    const fresh = document.createElement('option')
    fresh.value = 'new'
    fresh.textContent = tr('newPermanent')
    select.appendChild(fresh)
    const roots = state.records.filter(r => r.isPermanentRoot)
    roots.forEach(root => {
      const option = document.createElement('option')
      option.value = `point:${root.code}`
      option.textContent = tr('currentPermanent', { code: root.code })
      select.appendChild(option)
    })
    if ([...select.options].some(o => o.value === current)) select.value = current
  }

  function populateCategoryFilter() {
    const select = $('#filter-category')
    const current = select.value
    select.innerHTML = ''
    const all = document.createElement('option')
    all.value = 'all'
    all.textContent = tr('all')
    select.appendChild(all)
    Object.entries(categoryKeys).forEach(([value, key]) => {
      const opt = document.createElement('option')
      opt.value = value
      opt.textContent = tr(key)
      select.appendChild(opt)
    })
    if ([...select.options].some(o => o.value === current)) select.value = current
  }

  function recordLocationText(record) {
    const loc = record.location
    if (!Number.isFinite(loc?.latitude) || !Number.isFinite(loc?.longitude)) return tr('noPosition')
    const accuracy = Number.isFinite(loc.accuracy) ? `  ${tr('precision')} ±${Math.round(loc.accuracy)} m` : ''
    return `${loc.latitude.toFixed(6)}, ${loc.longitude.toFixed(6)}${accuracy}`
  }

  function recordCard(record, includeDelete = false) {
    const article = document.createElement('article')
    article.className = 'record-card'
    const header = document.createElement('header')
    const badges = []
    if (record.permanentPointId) badges.push(`<span class="count-pill">◆ ${escapeHtml(tr('permanent'))}</span>`)
    if (record.exchange?.received) badges.push(`<span class="count-pill received-pill">📥 ${escapeHtml(tr('received'))}</span>`)
    header.innerHTML = `<div><h3>${escapeHtml(record.code)}</h3><div class="record-meta">${escapeHtml(new Date(record.createdAt).toLocaleString(state.lang === 'pt' ? 'pt-BR' : 'es-ES'))}</div></div><div class="record-badges">${badges.join('')}</div>`
    article.appendChild(header)
    const category = document.createElement('p')
    category.innerHTML = `<strong>${escapeHtml(categoryText(record))}</strong>`
    article.appendChild(category)
    if (record.observationText) {
      const note = document.createElement('p')
      note.textContent = record.observationText
      article.appendChild(note)
    }
    const meta = document.createElement('p')
    meta.className = 'record-meta'
    meta.textContent = `📍 ${recordLocationText(record)}  📎 ${record.media?.length || 0}`
    article.appendChild(meta)
    const actions = document.createElement('div')
    actions.className = 'record-actions'
    const view = document.createElement('button')
    view.type = 'button'
    view.className = 'small-btn'
    view.textContent = tr('view')
    view.addEventListener('click', () => openRecordDetail(record))
    actions.appendChild(view)
    if (includeDelete) {
      const del = document.createElement('button')
      del.type = 'button'
      del.className = 'small-btn'
      del.style.color = 'var(--danger)'
      del.textContent = tr('delete')
      del.addEventListener('click', async () => {
        if (!confirm(tr('deleteConfirm'))) return
        await idbDeleteRecord(record.uuid)
        state.records = state.records.filter(r => r.uuid !== record.uuid)
        populatePermanentSelect()
        renderAll()
        showToast(tr('deleted'))
      })
      actions.appendChild(del)
    }
    article.appendChild(actions)
    return article
  }

  function renderNotebook() {
    const host = $('#notebook-list')
    host.innerHTML = ''
    const query = $('#search').value.trim().toLowerCase()
    const category = $('#filter-category').value
    const mediaOnly = $('#filter-media').checked
    const permanentOnly = $('#filter-permanent').checked
    const receivedOnly = $('#filter-received').checked
    const filtered = state.records.filter(record => {
      const searchable = `${record.code} ${record.observationText || ''}`.toLowerCase()
      if (query && !searchable.includes(query)) return false
      if (category !== 'all' && !recordCategories(record).includes(category)) return false
      if (mediaOnly && !(record.media?.length > 0)) return false
      if (permanentOnly && !record.permanentPointId) return false
      if (receivedOnly && !record.exchange?.received) return false
      return true
    })
    $('#record-count').textContent = state.records.length
    if (!filtered.length) {
      const empty = document.createElement('div')
      empty.className = 'card'
      empty.textContent = tr('noRecords')
      host.appendChild(empty)
      return
    }
    filtered.forEach(record => host.appendChild(recordCard(record, true)))
  }

  function renderMapList() {
    const host = $('#map-list')
    host.innerHTML = ''
    if (!state.records.length) {
      const empty = document.createElement('div')
      empty.className = 'card'
      empty.textContent = tr('noRecords')
      host.appendChild(empty)
      return
    }
    state.records.slice(0, 8).forEach(record => host.appendChild(recordCard(record, false)))
  }

  function projectWebMercator(lat, lon, zoom) {
    const scale = 256 * Math.pow(2, zoom)
    const safeLat = Math.max(-85.05112878, Math.min(85.05112878, lat))
    const sin = Math.sin(safeLat * Math.PI / 180)
    return {
      x: (lon + 180) / 360 * scale,
      y: (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * scale
    }
  }

  function unprojectWebMercator(x, y, zoom) {
    const scale = 256 * Math.pow(2, zoom)
    const lon = x / scale * 360 - 180
    const n = Math.PI - 2 * Math.PI * y / scale
    const lat = 180 / Math.PI * Math.atan(Math.sinh(n))
    return { lat, lon }
  }

  function dataPoints() {
    const points = state.records
      .filter(r => Number.isFinite(r.location?.latitude) && Number.isFinite(r.location?.longitude))
      .map(r => ({ lat: r.location.latitude, lon: r.location.longitude, record: r }))
    if (state.latestPosition) {
      points.push({ lat: state.latestPosition.coords.latitude, lon: state.latestPosition.coords.longitude, user: true })
    }
    return points
  }

  function mapLayerLabel(layer = state.baseLayer) {
    if (layer === 'satellite') return tr('satellite')
    if (layer === 'none') return tr('noBaseMap')
    return tr('streetMap')
  }

  function updateMapAttribution() {
    const host = $('#map-attribution')
    if (!host) return
    if (state.baseLayer === 'osm') {
      host.innerHTML = '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a>'
    } else if (state.baseLayer === 'satellite') {
      host.innerHTML = '<a href="https://www.esri.com/" target="_blank" rel="noopener">Imagery © Esri</a>'
    } else {
      host.textContent = mapLayerLabel('none')
    }
  }

  function updateMapLayerUI() {
    const current = $('#map-layer-current')
    if (current) current.textContent = mapLayerLabel()
    $$('[data-map-layer]').forEach(btn => {
      const active = btn.dataset.mapLayer === state.baseLayer
      btn.classList.toggle('active', active)
      btn.setAttribute('aria-pressed', active ? 'true' : 'false')
    })
    updateMapAttribution()
  }

  function setMapLayer(layer) {
    if (!['osm', 'satellite', 'none'].includes(layer)) return
    state.baseLayer = layer
    localStorage.setItem('costa-viva-map-layer', layer)
    updateMapLayerUI()
    renderSimpleMap()
    const panel = $('#map-layer-panel')
    const toggle = $('#map-layer-toggle')
    if (panel && toggle) {
      panel.hidden = true
      toggle.setAttribute('aria-expanded', 'false')
    }
  }

  function tileUrl(layer, z, x, y) {
    if (layer === 'satellite') {
      return `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}`
    }
    return `https://tile.openstreetmap.org/${z}/${x}/${y}.png`
  }

  function initMap() {
    const el = $('#map')
    state.map = {
      el,
      center: null,
      zoom: 16,
      dragging: false,
      startX: 0,
      startY: 0,
      startCenterPx: null
    }

    const layerToggle = $('#map-layer-toggle')
    const layerPanel = $('#map-layer-panel')
    if (layerToggle && layerPanel) {
      layerToggle.addEventListener('click', () => {
        const willOpen = layerPanel.hidden
        layerPanel.hidden = !willOpen
        layerToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false')
      })
      $$('[data-map-layer]').forEach(btn => btn.addEventListener('click', () => setMapLayer(btn.dataset.mapLayer)))
      document.addEventListener('click', event => {
        if (layerPanel.hidden) return
        if (event.target.closest('#map-layer-panel') || event.target.closest('#map-layer-toggle')) return
        layerPanel.hidden = true
        layerToggle.setAttribute('aria-expanded', 'false')
      })
    }
    updateMapLayerUI()

    el.addEventListener('pointerdown', event => {
      if (event.target.closest('button')) return
      if (!state.map.center) return
      state.map.dragging = true
      state.map.startX = event.clientX
      state.map.startY = event.clientY
      state.map.startCenterPx = projectWebMercator(state.map.center.lat, state.map.center.lon, state.map.zoom)
      el.classList.add('map-dragging')
      el.setPointerCapture?.(event.pointerId)
    })
    el.addEventListener('pointermove', event => {
      if (!state.map.dragging) return
      const dx = event.clientX - state.map.startX
      const dy = event.clientY - state.map.startY
      const centerPx = { x: state.map.startCenterPx.x - dx, y: state.map.startCenterPx.y - dy }
      state.map.center = unprojectWebMercator(centerPx.x, centerPx.y, state.map.zoom)
      renderSimpleMap()
    })
    const finish = event => {
      if (!state.map.dragging) return
      state.map.dragging = false
      el.classList.remove('map-dragging')
      try { el.releasePointerCapture?.(event.pointerId) } catch (_) {}
    }
    el.addEventListener('pointerup', finish)
    el.addEventListener('pointercancel', finish)

    $('#map-zoom-in').addEventListener('click', () => {
      if (!state.map.center) return
      state.map.zoom = Math.min(19, state.map.zoom + 1)
      renderSimpleMap()
    })
    $('#map-zoom-out').addEventListener('click', () => {
      if (!state.map.center) return
      state.map.zoom = Math.max(2, state.map.zoom - 1)
      renderSimpleMap()
    })

    fitMapToData()
    renderSimpleMap()
  }

  function fitMapToData() {
    if (!state.map) return
    const points = dataPoints()
    if (!points.length) {
      state.map.center = null
      return
    }
    if (points.length === 1) {
      state.map.center = { lat: points[0].lat, lon: points[0].lon }
      state.map.zoom = 17
      return
    }
    const minLat = Math.min(...points.map(p => p.lat))
    const maxLat = Math.max(...points.map(p => p.lat))
    const minLon = Math.min(...points.map(p => p.lon))
    const maxLon = Math.max(...points.map(p => p.lon))
    state.map.center = { lat: (minLat + maxLat) / 2, lon: (minLon + maxLon) / 2 }
    const rect = state.map.el.getBoundingClientRect()
    const targetW = Math.max(260, rect.width) * 0.75
    const targetH = Math.max(260, rect.height) * 0.7
    let chosen = 17
    for (let z = 18; z >= 2; z -= 1) {
      const a = projectWebMercator(maxLat, minLon, z)
      const b = projectWebMercator(minLat, maxLon, z)
      if (Math.abs(b.x - a.x) <= targetW && Math.abs(b.y - a.y) <= targetH) {
        chosen = z
        break
      }
    }
    state.map.zoom = chosen
  }

  function refreshMap() {
    if (!state.map) initMap()
    else renderSimpleMap()
  }

  function renderSimpleMap() {
    if (!state.map) return
    const el = state.map.el
    const tilePane = $('#map-tiles')
    const markerPane = $('#map-markers')
    const empty = $('#map-empty')
    tilePane.innerHTML = ''
    markerPane.innerHTML = ''
    if (!state.map.center) {
      empty.hidden = false
      return
    }
    empty.hidden = true
    const width = Math.max(1, el.clientWidth)
    const height = Math.max(1, el.clientHeight)
    const z = state.map.zoom
    const centerPx = projectWebMercator(state.map.center.lat, state.map.center.lon, z)
    const topLeft = { x: centerPx.x - width / 2, y: centerPx.y - height / 2 }
    const tileSize = 256
    const n = Math.pow(2, z)
    const startX = Math.floor(topLeft.x / tileSize)
    const endX = Math.floor((topLeft.x + width) / tileSize)
    const startY = Math.floor(topLeft.y / tileSize)
    const endY = Math.floor((topLeft.y + height) / tileSize)

    el.classList.toggle('map-no-base', state.baseLayer === 'none')
    if (state.baseLayer !== 'none') {
      for (let tx = startX; tx <= endX; tx += 1) {
        for (let ty = startY; ty <= endY; ty += 1) {
          if (ty < 0 || ty >= n) continue
          const wrappedX = ((tx % n) + n) % n
          const img = document.createElement('img')
          img.alt = ''
          img.draggable = false
          img.loading = 'lazy'
          img.referrerPolicy = 'no-referrer'
          img.src = tileUrl(state.baseLayer, z, wrappedX, ty)
          img.style.left = `${tx * tileSize - topLeft.x}px`
          img.style.top = `${ty * tileSize - topLeft.y}px`
          img.addEventListener('error', () => {
            img.removeAttribute('src')
            img.classList.add('map-tile-failed')
          }, { once: true })
          tilePane.appendChild(img)
        }
      }
    }
    updateMapAttribution()

    state.records.forEach(record => {
      const lat = record.location?.latitude
      const lon = record.location?.longitude
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) return
      const p = projectWebMercator(lat, lon, z)
      const x = p.x - topLeft.x
      const y = p.y - topLeft.y
      if (x < -40 || y < -40 || x > width + 40 || y > height + 40) return
      const pin = document.createElement('button')
      pin.type = 'button'
      pin.className = `map-pin${record.permanentPointId ? ' permanent' : ''}`
      pin.style.left = `${x}px`
      pin.style.top = `${y}px`
      pin.title = `${record.code}  ${categoryText(record)}`
      pin.setAttribute('aria-label', pin.title)
      pin.innerHTML = `<span>${escapeHtml(record.code.replace('CV-', ''))}</span>`
      pin.addEventListener('click', event => {
        event.stopPropagation()
        openRecordDetail(record)
      })
      markerPane.appendChild(pin)
    })

    if (state.latestPosition) {
      const lat = state.latestPosition.coords.latitude
      const lon = state.latestPosition.coords.longitude
      const p = projectWebMercator(lat, lon, z)
      const x = p.x - topLeft.x
      const y = p.y - topLeft.y
      const metersPerPixel = 156543.03392 * Math.cos(lat * Math.PI / 180) / Math.pow(2, z)
      const accuracyPx = Math.max(8, Math.min(300, state.latestPosition.coords.accuracy / metersPerPixel))
      const circle = document.createElement('div')
      circle.className = 'map-accuracy'
      circle.style.left = `${x}px`
      circle.style.top = `${y}px`
      circle.style.width = `${accuracyPx * 2}px`
      circle.style.height = `${accuracyPx * 2}px`
      markerPane.appendChild(circle)
      const user = document.createElement('div')
      user.className = 'map-pin user'
      user.style.left = `${x}px`
      user.style.top = `${y}px`
      user.innerHTML = '<span>●</span>'
      markerPane.appendChild(user)
    }
  }

  function renderMapMarkers() {
    if (!state.map) return
    if (!state.map.center && dataPoints().length) fitMapToData()
    renderSimpleMap()
  }

  function updateUserMarker() {
    if (!state.map || !state.latestPosition) return
    if (!state.map.center) {
      state.map.center = { lat: state.latestPosition.coords.latitude, lon: state.latestPosition.coords.longitude }
      state.map.zoom = 17
    }
    renderSimpleMap()
  }

  function locateMe() {
    if (!state.latestPosition) {
      startGeolocation()
      showToast(tr('gpsWaiting'))
      return
    }
    if (!state.map) initMap()
    state.map.center = { lat: state.latestPosition.coords.latitude, lon: state.latestPosition.coords.longitude }
    state.map.zoom = 18
    renderSimpleMap()
  }

  function openRecordDetail(record) {
    const host = $('#detail-content')
    host.innerHTML = ''
    const title = document.createElement('h2')
    title.textContent = record.code
    host.appendChild(title)
    const rows = [
      [tr('date'), new Date(record.createdAt).toLocaleString(state.lang === 'pt' ? 'pt-BR' : 'es-ES')],
      [tr('whatObserve'), categoryText(record)],
      [tr('coordinates'), recordLocationText(record)],
      [tr('altitude'), record.location?.altitude == null ? tr('notAvailable') : `${record.location.altitude.toFixed(1)} m`],
      [tr('direction'), record.location?.heading == null ? tr('notAvailable') : `${Math.round(record.location.heading)}° ${cardinal(record.location.heading)}`],
      [tr('pointLabel'), record.permanentPointId || tr('independentLabel')]
    ]
    if (record.exchange?.received) {
      rows.push([tr('received'), tr('receivedFromNotebook', { value: record.exchange.sourceNotebookShort || shortNotebookId(record.exchange.sourceNotebookId) })])
      if (record.sourceCode) rows.push([tr('code'), record.sourceCode])
    }
    rows.forEach(([label, value]) => {
      const row = document.createElement('div')
      row.className = 'detail-row'
      row.innerHTML = `<strong>${escapeHtml(label)}</strong><br>${escapeHtml(String(value))}`
      host.appendChild(row)
    })
    if (record.observationText) {
      const note = document.createElement('div')
      note.className = 'detail-row'
      note.innerHTML = `<strong>${escapeHtml(tr('communityNote'))}</strong><br>${escapeHtml(record.observationText)}`
      host.appendChild(note)
    }
    if (record.measurement) {
      const m = record.measurement
      const measurement = document.createElement('div')
      measurement.className = 'detail-row'
      const targetLabel = m.target ? tr(measurementTargetKeys[m.target] || 'other') : tr('notAvailable')
      measurement.textContent = `${tr('measurementLabel')}  ${m.value} ${m.unit}  ${m.method || tr('notAvailable')}  ${targetLabel}  ${m.reference || ''}`
      host.appendChild(measurement)
    }
    if (record.media?.length) {
      const mediaHost = document.createElement('div')
      mediaHost.className = 'detail-media'
      record.media.forEach(item => {
        if (item.kind === 'photo') {
          const img = document.createElement('img')
          img.src = URL.createObjectURL(item.documentedBlob || item.originalBlob)
          img.alt = item.name
          mediaHost.appendChild(img)
        } else if (item.kind === 'video') {
          const video = document.createElement('video')
          video.src = URL.createObjectURL(item.blob)
          video.controls = true
          mediaHost.appendChild(video)
        } else if (item.kind === 'audio') {
          const audio = document.createElement('audio')
          audio.src = URL.createObjectURL(item.blob)
          audio.controls = true
          mediaHost.appendChild(audio)
        }
      })
      host.appendChild(mediaHost)
    }
    if (record.permanentPointId) {
      const related = state.records.filter(r => r.permanentPointId === record.permanentPointId).sort((a,b) => a.createdAt.localeCompare(b.createdAt))
      if (related.length > 1) {
        const h = document.createElement('h3')
        h.textContent = tr('history')
        host.appendChild(h)
        related.forEach(r => {
          const row = document.createElement('div')
          row.className = 'detail-row'
          row.textContent = `${new Date(r.createdAt).toLocaleDateString(state.lang === 'pt' ? 'pt-BR' : 'es-ES')}  ${r.code}  ${categoryText(r)}`
          host.appendChild(row)
        })
      }
    }
    $('#detail-modal').hidden = false
  }

  function closeDetail() {
    $('#detail-modal').hidden = true
    $('#detail-content').innerHTML = ''
  }

  function renderAll() {
    renderMapList()
    renderNotebook()
    if (state.map) renderMapMarkers()
  }

  function recordForExport(record) {
    return {
      schemaVersion: record.schemaVersion,
      uuid: record.uuid,
      code: record.code,
      createdAt: record.createdAt,
      modifiedAt: record.modifiedAt,
      interfaceLanguage: record.interfaceLanguage,
      categories: recordCategories(record),
      category: recordCategories(record)[0] || null,
      observationText: record.observationText,
      location: record.location,
      measurement: record.measurement,
      sea: record.sea,
      permanentPointId: record.permanentPointId,
      isPermanentRoot: record.isPermanentRoot,
      provenance: record.provenance,
      sourceCode: record.sourceCode || null,
      exchange: record.exchange || null,
      media: (record.media || []).map(item => ({ id: item.id, kind: item.kind, name: item.name, mime: item.mime, metadata: item.metadata }))
    }
  }

  function exportJSONText() {
    return JSON.stringify({ app: 'COSTA VIVA', schemaVersion: 3, exportedAt: new Date().toISOString(), records: state.records.map(recordForExport) }, null, 2)
  }

  function csvEscape(value) {
    const text = String(value ?? '')
    return `"${text.replaceAll('"', '""')}"`
  }

  function exportCSVText() {
    const headers = ['uuid','code','created_at','categories','category_primary','note','latitude','longitude','accuracy_m','altitude_m','heading_deg','measurement_value','measurement_unit','measurement_method','measurement_target','measurement_reference','sea_level','waves','permanent_point_id','media_count']
    const rows = state.records.map(r => [r.uuid,r.code,r.createdAt,recordCategories(r).join('|'),recordCategories(r)[0] || '',r.observationText,r.location?.latitude,r.location?.longitude,r.location?.accuracy,r.location?.altitude,r.location?.heading,r.measurement?.value,r.measurement?.unit,r.measurement?.method,r.measurement?.target,r.measurement?.reference,r.sea?.level,r.sea?.waves,r.permanentPointId,r.media?.length || 0])
    return [headers, ...rows].map(row => row.map(csvEscape).join(',')).join('\n')
  }

  function exportGeoJSONText() {
    const features = state.records.filter(r => Number.isFinite(r.location?.latitude) && Number.isFinite(r.location?.longitude)).map(r => ({
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [r.location.longitude, r.location.latitude] },
      properties: { code: r.code, uuid: r.uuid, createdAt: r.createdAt, categories: recordCategories(r), category_primary: recordCategories(r)[0] || null, observationText: r.observationText, accuracy_m: r.location.accuracy, altitude_m: r.location.altitude, heading_deg: r.location.heading, measurement_value: r.measurement?.value ?? null, measurement_unit: r.measurement?.unit ?? null, measurement_method: r.measurement?.method ?? null, measurement_target: r.measurement?.target ?? null, measurement_reference: r.measurement?.reference ?? null, permanentPointId: r.permanentPointId }
    }))
    return JSON.stringify({ type: 'FeatureCollection', name: 'COSTA VIVA', features }, null, 2)
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    a.remove()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  function requireRecords() {
    if (!state.records.length) {
      showToast(tr('exportEmpty'))
      return false
    }
    return true
  }

  const crcTable = (() => {
    const table = new Uint32Array(256)
    for (let n = 0; n < 256; n += 1) {
      let c = n
      for (let k = 0; k < 8; k += 1) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1)
      table[n] = c >>> 0
    }
    return table
  })()

  function crc32(bytes) {
    let crc = 0xffffffff
    for (let i = 0; i < bytes.length; i += 1) crc = crcTable[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8)
    return (crc ^ 0xffffffff) >>> 0
  }

  function le16(value) {
    return new Uint8Array([value & 255, (value >>> 8) & 255])
  }

  function le32(value) {
    return new Uint8Array([value & 255, (value >>> 8) & 255, (value >>> 16) & 255, (value >>> 24) & 255])
  }

  function joinBytes(parts) {
    const total = parts.reduce((sum, part) => sum + part.length, 0)
    const out = new Uint8Array(total)
    let offset = 0
    parts.forEach(part => { out.set(part, offset); offset += part.length })
    return out
  }

  function dosDateTime(date = new Date()) {
    const year = Math.max(1980, date.getFullYear())
    const time = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2)
    const day = ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate()
    return { time, day }
  }

  async function blobToBytes(value) {
    if (value instanceof Blob) return new Uint8Array(await value.arrayBuffer())
    return new TextEncoder().encode(String(value))
  }

  async function makeZip(entries) {
    const localParts = []
    const centralParts = []
    let offset = 0
    const dt = dosDateTime(new Date())
    for (const entry of entries) {
      const name = new TextEncoder().encode(entry.name)
      const data = await blobToBytes(entry.data)
      const crc = crc32(data)
      const flags = 0x0800
      const localHeader = joinBytes([
        le32(0x04034b50), le16(20), le16(flags), le16(0), le16(dt.time), le16(dt.day), le32(crc), le32(data.length), le32(data.length), le16(name.length), le16(0), name
      ])
      localParts.push(localHeader, data)
      const centralHeader = joinBytes([
        le32(0x02014b50), le16(20), le16(20), le16(flags), le16(0), le16(dt.time), le16(dt.day), le32(crc), le32(data.length), le32(data.length), le16(name.length), le16(0), le16(0), le16(0), le16(0), le32(0), le32(offset), name
      ])
      centralParts.push(centralHeader)
      offset += localHeader.length + data.length
    }
    const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0)
    const end = joinBytes([
      le32(0x06054b50), le16(0), le16(0), le16(entries.length), le16(entries.length), le32(centralSize), le32(offset), le16(0)
    ])
    return new Blob([...localParts, ...centralParts, end], { type: 'application/zip' })
  }

  async function buildZipBlob() {
    if (!requireRecords()) return null
    const entries = [
      { name: 'costa-viva-registros.json', data: exportJSONText() },
      { name: 'costa-viva-registros.csv', data: exportCSVText() },
      { name: 'costa-viva-puntos.geojson', data: exportGeoJSONText() }
    ]
    state.records.forEach(record => {
      ;(record.media || []).forEach((item, idx) => {
        const base = `evidencias/${record.code}/`
        const safe = safeFilename(item.name || `${item.kind}-${idx + 1}`)
        if (item.kind === 'photo') {
          if (item.originalBlob) entries.push({ name: `${base}original-${idx + 1}-${safe}`, data: item.originalBlob })
          if (item.documentedBlob) entries.push({ name: `${base}documentada-${idx + 1}.jpg`, data: item.documentedBlob })
          entries.push({ name: `${base}foto-${idx + 1}-metadatos.json`, data: JSON.stringify(item.metadata || {}, null, 2) })
        } else if (item.blob) {
          entries.push({ name: `${base}${item.kind}-${idx + 1}-${safe}`, data: item.blob })
          entries.push({ name: `${base}${item.kind}-${idx + 1}-metadatos.json`, data: JSON.stringify(item.metadata || {}, null, 2) })
        }
      })
    })
    return makeZip(entries)
  }

  async function exportSimple(kind) {
    if (!requireRecords()) return
    const date = new Date().toISOString().slice(0, 10)
    if (kind === 'json') downloadBlob(new Blob([exportJSONText()], { type: 'application/json' }), `costa-viva-${date}.json`)
    if (kind === 'csv') downloadBlob(new Blob([exportCSVText()], { type: 'text/csv;charset=utf-8' }), `costa-viva-${date}.csv`)
    if (kind === 'geojson') downloadBlob(new Blob([exportGeoJSONText()], { type: 'application/geo+json' }), `costa-viva-${date}.geojson`)
    showToast(tr('exportReady'))
  }

  async function exportZip(download = true) {
    try {
      const blob = await buildZipBlob()
      if (!blob) return null
      const filename = `costa-viva-${new Date().toISOString().slice(0, 10)}.zip`
      if (download) downloadBlob(blob, filename)
      showToast(tr('exportReady'))
      return { blob, filename }
    } catch (error) {
      console.error(error)
      showToast(tr('zipUnavailable'))
      return null
    }
  }

  function getNotebookId() {
    let value = localStorage.getItem('costa-viva-notebook-id')
    if (!value) {
      value = `cvn-${crypto.randomUUID()}`
      localStorage.setItem('costa-viva-notebook-id', value)
    }
    return value
  }

  function shortNotebookId(value = getNotebookId()) {
    return String(value).replace(/[^a-zA-Z0-9]/g, '').slice(-6).toUpperCase() || 'LOCAL'
  }

  function recipientLabel(value) {
    const keys = {
      my_community: 'recipientMyCommunity',
      other_community: 'recipientOtherCommunity',
      research: 'recipientResearch',
      public: 'recipientPublic',
      organization: 'recipientOrganization',
      other: 'recipientOther'
    }
    return tr(keys[value] || 'recipientOther')
  }

  function openShareModal() {
    if (!requireRecords()) return
    renderShareRecordList()
    $('#share-purpose').value = ''
    $('#share-modal-status').textContent = ''
    $('#share-modal').hidden = false
    document.body.style.overflow = 'hidden'
  }

  function closeShareModal() {
    $('#share-modal').hidden = true
    document.body.style.overflow = ''
    $('#share-export').focus()
  }

  function renderShareRecordList() {
    const host = $('#share-record-list')
    host.innerHTML = ''
    state.records.forEach(record => {
      const label = document.createElement('label')
      label.className = 'share-record-option'
      const received = record.exchange?.received ? ` · ${tr('received')}` : ''
      label.innerHTML = `<input type="checkbox" class="share-record-check" value="${escapeHtml(record.uuid)}" checked><span><strong>${escapeHtml(record.code)}</strong><small>${escapeHtml(new Date(record.createdAt).toLocaleString(state.lang === 'pt' ? 'pt-BR' : 'es-ES'))}${escapeHtml(received)}</small></span>`
      host.appendChild(label)
    })
  }

  function shareOptions() {
    return {
      measurements: $('#share-measurements').checked,
      notes: $('#share-notes').checked,
      coordinates: $('#share-coordinates').checked,
      photos: $('#share-photos').checked,
      videos: $('#share-videos').checked,
      audios: $('#share-audios').checked
    }
  }

  function sanitizeSensorMetadata(metadata, includeCoordinates) {
    const source = metadata && typeof metadata === 'object' ? { ...metadata } : {}
    if (includeCoordinates) return source
    ;['latitude','longitude','accuracy','altitude','altitudeAccuracy','heading','headingSource','speed'].forEach(key => delete source[key])
    source.locationWithheldByUser = true
    return source
  }

  async function privacySafePhotoBlob(blob) {
    if (!(blob instanceof Blob)) return null
    try {
      const bitmap = await createImageBitmap(blob)
      const maxWidth = 2200
      const scale = bitmap.width > maxWidth ? maxWidth / bitmap.width : 1
      const canvas = document.createElement('canvas')
      canvas.width = Math.max(1, Math.round(bitmap.width * scale))
      canvas.height = Math.max(1, Math.round(bitmap.height * scale))
      const ctx = canvas.getContext('2d')
      ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
      bitmap.close?.()
      return await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.9))
    } catch (error) {
      console.warn('Could not sanitize photo', error)
      return null
    }
  }

  function sharedLocation(record, includeCoordinates) {
    if (includeCoordinates) return record.location || null
    const capturedAt = record.location?.capturedAt || record.createdAt
    return {
      capturedAt,
      latitude: null,
      longitude: null,
      accuracy: null,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      headingSource: null,
      speed: null,
      source: 'withheld-by-user'
    }
  }

  function sharedRecordBase(record, options) {
    return {
      schemaVersion: record.schemaVersion || 3,
      uuid: record.uuid,
      code: record.code,
      sourceCode: record.sourceCode || null,
      createdAt: record.createdAt,
      modifiedAt: record.modifiedAt,
      interfaceLanguage: record.interfaceLanguage,
      categories: recordCategories(record),
      category: recordCategories(record)[0] || null,
      observationText: options.notes ? (record.observationText || '') : null,
      location: sharedLocation(record, options.coordinates),
      measurement: options.measurements ? (record.measurement || null) : null,
      sea: record.sea || null,
      permanentPointId: record.permanentPointId || null,
      isPermanentRoot: Boolean(record.isPermanentRoot),
      provenance: {
        ...(record.provenance || {}),
        sharingCoordinates: options.coordinates ? 'included' : 'withheld-by-user'
      },
      exchange: record.exchange || null,
      media: []
    }
  }

  async function addSharedMedia(record, shared, options, entries) {
    for (let idx = 0; idx < (record.media || []).length; idx += 1) {
      const item = record.media[idx]
      const allowed = (item.kind === 'photo' && options.photos) || (item.kind === 'video' && options.videos) || (item.kind === 'audio' && options.audios)
      if (!allowed) continue
      const descriptor = {
        id: item.id || crypto.randomUUID(),
        kind: item.kind,
        name: item.name || `${item.kind}-${idx + 1}`,
        mime: item.mime || 'application/octet-stream',
        metadata: sanitizeSensorMetadata(item.metadata, options.coordinates),
        files: {}
      }
      const base = `evidencias/${record.uuid}/${descriptor.id}/`
      const safe = safeFilename(descriptor.name)
      if (item.kind === 'photo') {
        if (options.coordinates) {
          if (item.originalBlob) {
            const path = `${base}original-${safe}`
            descriptor.files.original = path
            entries.push({ name: path, data: item.originalBlob })
          }
          if (item.documentedBlob) {
            const path = `${base}documentada.jpg`
            descriptor.files.documented = path
            entries.push({ name: path, data: item.documentedBlob })
          }
          if (!item.originalBlob && !item.documentedBlob && item.blob) {
            const path = `${base}foto-${safe}`
            descriptor.files.original = path
            entries.push({ name: path, data: item.blob })
          }
        } else {
          const source = item.originalBlob || item.blob || null
          const sanitized = await privacySafePhotoBlob(source)
          if (!sanitized) continue
          const path = `${base}foto-sin-metadatos.jpg`
          descriptor.files.sanitized = path
          descriptor.mime = 'image/jpeg'
          descriptor.privacySanitized = true
          entries.push({ name: path, data: sanitized })
        }
      } else if (item.blob) {
        const path = `${base}${item.kind}-${safe}`
        descriptor.files.blob = path
        entries.push({ name: path, data: item.blob })
      } else {
        continue
      }
      shared.media.push(descriptor)
    }
  }

  function sharedCSVText(records) {
    const headers = ['uuid','code','created_at','categories','note','latitude','longitude','accuracy_m','measurement_value','measurement_unit','measurement_method','measurement_target','measurement_reference','permanent_point_id','media_count']
    const rows = records.map(r => [r.uuid,r.code,r.createdAt,(r.categories || []).join('|'),r.observationText,r.location?.latitude,r.location?.longitude,r.location?.accuracy,r.measurement?.value,r.measurement?.unit,r.measurement?.method,r.measurement?.target,r.measurement?.reference,r.permanentPointId,r.media?.length || 0])
    return [headers, ...rows].map(row => row.map(csvEscape).join(',')).join('\n')
  }

  function sharedGeoJSONText(records) {
    const features = records.filter(r => Number.isFinite(r.location?.latitude) && Number.isFinite(r.location?.longitude)).map(r => ({
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [r.location.longitude, r.location.latitude] },
      properties: { code: r.code, uuid: r.uuid, createdAt: r.createdAt, categories: r.categories || [], observationText: r.observationText, accuracy_m: r.location.accuracy, permanentPointId: r.permanentPointId }
    }))
    return JSON.stringify({ type: 'FeatureCollection', name: 'COSTA VIVA · intercambio comunitario', features }, null, 2)
  }

  async function buildCommunityPackage(records, options, recipientType, purpose) {
    const packageId = crypto.randomUUID()
    const createdAt = new Date().toISOString()
    const sourceNotebookId = getNotebookId()
    const entries = []
    const sharedRecords = []
    for (const record of records) {
      const shared = sharedRecordBase(record, options)
      await addSharedMedia(record, shared, options, entries)
      sharedRecords.push(shared)
    }
    const manifest = {
      format: 'costa-viva-cvpack',
      formatVersion: 1,
      app: 'COSTA VIVA',
      appVersion: '0.5.7',
      packageId,
      createdAt,
      sourceNotebookId,
      sourceNotebookShort: shortNotebookId(sourceNotebookId),
      interfaceLanguage: state.lang,
      intendedRecipient: recipientType,
      purpose: purpose || null,
      contentSelection: options,
      recordCount: sharedRecords.length,
      governance: {
        statement: 'Registrar no significa ceder. El paquete fue creado por decisión de la persona usuaria.',
        automaticUpload: false
      }
    }
    const payload = { app: 'COSTA VIVA', schemaVersion: 3, exchangeFormat: 1, exportedAt: createdAt, records: sharedRecords }
    const readme = `COSTA VIVA\n\nES\nEste paquete fue preparado localmente para compartir registros seleccionados. Registrar no significa ceder. La recepción del archivo no transfiere automáticamente propiedad ni derechos sobre la información.\n\nPT\nEste pacote foi preparado localmente para compartilhar registros selecionados. Registrar não significa ceder. O recebimento do arquivo não transfere automaticamente propriedade nem direitos sobre a informação.\n\nPackage ID ${packageId}\nSource notebook ${sourceNotebookId}\n`
    entries.unshift(
      { name: 'manifest.json', data: JSON.stringify(manifest, null, 2) },
      { name: 'registros.json', data: JSON.stringify(payload, null, 2) },
      { name: 'registros.csv', data: sharedCSVText(sharedRecords) },
      { name: 'LEEME-README.txt', data: readme }
    )
    if (options.coordinates) entries.splice(3, 0, { name: 'puntos.geojson', data: sharedGeoJSONText(sharedRecords) })
    const blob = await makeZip(entries)
    const filename = `costa-viva-${createdAt.slice(0,10)}-${packageId.slice(0,8)}.cvpack`
    return { blob, filename, manifest }
  }

  async function prepareCommunityShare() {
    const selectedIds = $$('.share-record-check:checked').map(input => input.value)
    if (!selectedIds.length) {
      $('#share-modal-status').textContent = tr('noShareRecordsSelected')
      return
    }
    const records = state.records.filter(record => selectedIds.includes(record.uuid))
    const options = shareOptions()
    const recipientType = $('input[name="share-recipient"]:checked')?.value || 'other'
    const purpose = $('#share-purpose').value.trim()
    $('#share-modal-status').textContent = tr('preparingShare')
    try {
      const pkg = await buildCommunityPackage(records, options, recipientType, purpose)
      const file = new File([pkg.blob], pkg.filename, { type: 'application/zip' })
      $('#share-modal-status').textContent = tr('sharedPackageReady')
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({
            title: 'COSTA VIVA',
            text: `${recipientLabel(recipientType)}${purpose ? ` · ${purpose}` : ''}`,
            files: [file]
          })
          return
        } catch (error) {
          if (error?.name === 'AbortError') return
        }
      }
      showToast(tr('shareUnavailable'))
      downloadBlob(pkg.blob, pkg.filename)
    } catch (error) {
      console.error(error)
      $('#share-modal-status').textContent = tr('zipUnavailable')
    }
  }

  function zipUint32(bytes, offset) {
    return (bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16) | (bytes[offset + 3] << 24)) >>> 0
  }

  function zipUint16(bytes, offset) {
    return bytes[offset] | (bytes[offset + 1] << 8)
  }

  async function parseStoredZip(blob) {
    const bytes = new Uint8Array(await blob.arrayBuffer())
    const entries = new Map()
    let offset = 0
    while (offset + 4 <= bytes.length) {
      const sig = zipUint32(bytes, offset)
      if (sig === 0x02014b50 || sig === 0x06054b50) break
      if (sig !== 0x04034b50) throw new Error('Invalid ZIP local header')
      if (offset + 30 > bytes.length) throw new Error('Truncated ZIP')
      const flags = zipUint16(bytes, offset + 6)
      const method = zipUint16(bytes, offset + 8)
      const compressedSize = zipUint32(bytes, offset + 18)
      const nameLength = zipUint16(bytes, offset + 26)
      const extraLength = zipUint16(bytes, offset + 28)
      if (flags & 0x0008) throw new Error('ZIP data descriptors are not supported')
      if (method !== 0) throw new Error('Compressed ZIP entries are not supported')
      const nameStart = offset + 30
      const dataStart = nameStart + nameLength + extraLength
      const dataEnd = dataStart + compressedSize
      if (dataEnd > bytes.length) throw new Error('Truncated ZIP entry')
      const name = new TextDecoder('utf-8').decode(bytes.slice(nameStart, nameStart + nameLength))
      entries.set(name, bytes.slice(dataStart, dataEnd))
      offset = dataEnd
    }
    return entries
  }

  function entryText(entries, name) {
    const bytes = entries.get(name)
    if (!bytes) return null
    return new TextDecoder('utf-8').decode(bytes)
  }

  function closeImportModal() {
    $('#import-modal').hidden = true
    document.body.style.overflow = ''
    state.pendingImport = null
    $('#import-package-input').value = ''
  }

  async function readImportPackage(file) {
    if (!file) return
    showToast(tr('importReading'))
    try {
      const entries = await parseStoredZip(file)
      const manifestText = entryText(entries, 'manifest.json')
      const recordsText = entryText(entries, 'registros.json')
      if (!manifestText || !recordsText) throw new Error('Missing package files')
      const manifest = JSON.parse(manifestText)
      const payload = JSON.parse(recordsText)
      if (manifest.format !== 'costa-viva-cvpack' || manifest.formatVersion !== 1 || !Array.isArray(payload.records)) throw new Error('Unsupported package')
      state.pendingImport = { manifest, payload, entries, filename: file.name }
      const summary = $('#import-summary')
      const date = new Date(manifest.createdAt).toLocaleString(state.lang === 'pt' ? 'pt-BR' : 'es-ES')
      const purpose = manifest.purpose || tr('importNoPurpose')
      summary.innerHTML = `<div class="detail-row"><strong>${escapeHtml(tr('sourceNotebook'))}</strong><br>${escapeHtml(manifest.sourceNotebookShort || shortNotebookId(manifest.sourceNotebookId))}</div><div class="detail-row">${escapeHtml(tr('importSummaryText', { count: payload.records.length, date }))}</div><div class="detail-row">${escapeHtml(tr('importRecipientText', { value: purpose }))}</div>`
      $('#import-status').textContent = ''
      $('#import-modal').hidden = false
      document.body.style.overflow = 'hidden'
    } catch (error) {
      console.error(error)
      showToast(tr('importInvalid'))
      $('#import-package-input').value = ''
    }
  }

  function blobFromEntry(entries, path, mime) {
    if (!path) return null
    const bytes = entries.get(path)
    if (!bytes) return null
    return new Blob([bytes], { type: mime || 'application/octet-stream' })
  }

  function rebuildImportedMedia(rawRecord, entries) {
    return (rawRecord.media || []).map(item => {
      const media = {
        id: item.id || crypto.randomUUID(),
        kind: item.kind,
        name: item.name || item.kind,
        mime: item.mime || 'application/octet-stream',
        metadata: item.metadata || {}
      }
      const files = item.files || {}
      if (item.kind === 'photo') {
        media.originalBlob = blobFromEntry(entries, files.original || files.sanitized, item.mime || 'image/jpeg')
        media.documentedBlob = blobFromEntry(entries, files.documented, 'image/jpeg')
      } else {
        media.blob = blobFromEntry(entries, files.blob, item.mime)
      }
      return media
    }).filter(item => item.kind === 'photo' ? (item.originalBlob || item.documentedBlob) : item.blob)
  }

  function importedCode(originalCode, sourceShort) {
    const clean = String(originalCode || 'REGISTRO').replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 30)
    return `R-${sourceShort}-${clean}`
  }

  async function confirmImportPackage() {
    const pending = state.pendingImport
    if (!pending) return
    const { manifest, payload, entries } = pending
    const sourceShort = String(manifest.sourceNotebookShort || shortNotebookId(manifest.sourceNotebookId)).replace(/[^A-Z0-9]/gi, '').slice(0, 8) || 'ORIGEN'
    const existing = new Set(state.records.map(record => record.uuid))
    const codeMap = new Map(payload.records.map(raw => [raw.code, importedCode(raw.code, sourceShort)]))
    let added = 0
    let skipped = 0
    $('#import-status').textContent = tr('importReading')
    try {
      for (const raw of payload.records) {
        if (!raw?.uuid || existing.has(raw.uuid)) {
          skipped += 1
          continue
        }
        const receivedAt = new Date().toISOString()
        const record = {
          schemaVersion: raw.schemaVersion || 3,
          uuid: raw.uuid,
          code: codeMap.get(raw.code) || importedCode(raw.code, sourceShort),
          sourceCode: raw.code || null,
          createdAt: raw.createdAt || receivedAt,
          modifiedAt: raw.modifiedAt || raw.createdAt || receivedAt,
          interfaceLanguage: raw.interfaceLanguage || manifest.interfaceLanguage || 'es',
          categories: Array.isArray(raw.categories) ? raw.categories : raw.category ? [raw.category] : ['other'],
          category: Array.isArray(raw.categories) && raw.categories.length ? raw.categories[0] : raw.category || 'other',
          observationText: raw.observationText || '',
          location: raw.location || null,
          measurement: raw.measurement || null,
          sea: raw.sea || null,
          permanentPointId: raw.permanentPointId ? (codeMap.get(raw.permanentPointId) || importedCode(raw.permanentPointId, sourceShort)) : null,
          isPermanentRoot: Boolean(raw.isPermanentRoot),
          media: rebuildImportedMedia(raw, entries),
          provenance: {
            ...(raw.provenance || {}),
            receivedVia: 'costa-viva-cvpack'
          },
          exchange: {
            received: true,
            receivedAt,
            packageId: manifest.packageId,
            sourceNotebookId: manifest.sourceNotebookId || null,
            sourceNotebookShort: sourceShort,
            sourceCode: raw.code || null,
            intendedRecipient: manifest.intendedRecipient || null,
            purpose: manifest.purpose || null,
            contentSelection: manifest.contentSelection || null
          }
        }
        await idbPutRecord(record)
        existing.add(record.uuid)
        added += 1
      }
      state.records = await idbGetAllRecords()
      populatePermanentSelect()
      renderAll()
      const message = tr('importComplete', { added, skipped })
      $('#import-status').textContent = message
      showToast(message)
      setTimeout(closeImportModal, 900)
    } catch (error) {
      console.error(error)
      $('#import-status').textContent = tr('importFailed')
    }
  }

  async function sharePackage() {
    openShareModal()
  }

  function safeFilename(name) {
    return String(name).normalize('NFKD').replace(/[^a-zA-Z0-9._-]+/g, '_').slice(0, 100)
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[c]))
  }

  function isStandalone() {
    return window.matchMedia?.('(display-mode: standalone)').matches || window.navigator.standalone === true
  }

  function installPlatform() {
    const ua = navigator.userAgent || ''
    const isiOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    const isAndroid = /Android/i.test(ua)
    return isiOS ? 'ios' : isAndroid ? 'android' : 'desktop'
  }

  function updateInstallGuide() {
    const list = $('#install-steps')
    if (!list) return
    const platform = installPlatform()
    const keys = platform === 'ios'
      ? ['installIOS1', 'installIOS2', 'installIOS3']
      : platform === 'android'
        ? ['installAndroid1', 'installAndroid2', 'installAndroid3']
        : ['installDesktop1', 'installDesktop2', 'installDesktop3']
    list.innerHTML = keys.map(key => `<li>${escapeHtml(tr(key))}</li>`).join('')
    const nativeReady = $('#install-native-ready')
    if (nativeReady) nativeReady.hidden = !state.installPrompt
  }

  function openInstallModal() {
    if (isStandalone()) {
      showToast(tr('installedAlready'))
      return
    }
    updateInstallGuide()
    $('#install-modal').hidden = false
    document.body.style.overflow = 'hidden'
    $('#install-modal-close').focus()
  }

  function closeInstallModal() {
    $('#install-modal').hidden = true
    document.body.style.overflow = ''
    $('#help-install-btn')?.focus()
  }

  async function requestNativeInstall() {
    if (!state.installPrompt) {
      openInstallModal()
      return
    }
    const promptEvent = state.installPrompt
    state.installPrompt = null
    promptEvent.prompt()
    const choice = await promptEvent.userChoice
    if (choice?.outcome === 'accepted') {
      $('#help-install-btn').hidden = true
      closeInstallModal()
    } else {
      updateInstallGuide()
    }
  }

  function setupInstall() {
    const installed = isStandalone()
    $('#help-install-btn').hidden = installed

    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault()
      state.installPrompt = event
      $('#help-install-btn').hidden = false
      updateInstallGuide()
    })

    window.addEventListener('appinstalled', () => {
      state.installPrompt = null
      $('#help-install-btn').hidden = true
      if (!$('#install-modal').hidden) closeInstallModal()
    })

    $('#help-install-btn').addEventListener('click', () => {
      if (state.installPrompt) requestNativeInstall()
      else openInstallModal()
    })
    $('#install-native-btn').addEventListener('click', requestNativeInstall)
    $('#install-modal-close').addEventListener('click', closeInstallModal)
    $('#install-modal').addEventListener('click', event => { if (event.target === $('#install-modal')) closeInstallModal() })
  }

  function setupServiceWorker() {
    if (!('serviceWorker' in navigator)) return

    let reloadingForUpdate = false
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (reloadingForUpdate) return
      reloadingForUpdate = true
      window.location.reload()
    })

    navigator.serviceWorker.register('./sw.js').then(registration => {
      registration.update().catch(() => {})
    }).catch(error => console.warn('SW registration failed', error))
  }

  function openProjectInfo() {
    $('#project-info-modal').hidden = false
    document.body.style.overflow = 'hidden'
    $('#project-info-close').focus()
  }

  function closeProjectInfo() {
    $('#project-info-modal').hidden = true
    document.body.style.overflow = ''
    $('#project-info-btn').focus()
  }

  function bindEvents() {
    $('#lang-es').addEventListener('click', () => setLanguage('es'))
    $('#lang-pt').addEventListener('click', () => setLanguage('pt'))
  $('#lang-guc').addEventListener('click', () => setLanguage('guc'))
    $('#project-info-btn').addEventListener('click', openProjectInfo)
    $('#project-info-close').addEventListener('click', closeProjectInfo)
    $('#project-info-modal').addEventListener('click', event => { if (event.target === $('#project-info-modal')) closeProjectInfo() })
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !$('#project-info-modal').hidden) closeProjectInfo()
      if (event.key === 'Escape' && !$('#install-modal').hidden) closeInstallModal()
      if (event.key === 'Escape' && !$('#share-modal').hidden) closeShareModal()
      if (event.key === 'Escape' && !$('#import-modal').hidden) closeImportModal()
    })
    $$('.nav-item').forEach(btn => btn.addEventListener('click', () => showScreen(btn.dataset.target)))
    $('#activate-mode').addEventListener('click', activateObservationMode)
    $('#first-run-activate').addEventListener('click', activateObservationMode)
    $('#first-run-later').addEventListener('click', () => {
      localStorage.setItem('costa-viva-first-run', 'done')
      $('#first-run').style.display = 'none'
    })
    $('#locate-me').addEventListener('click', locateMe)
    $('#record-form').addEventListener('submit', saveRecord)
    $$('input[name="category"]').forEach(input => input.addEventListener('change', () => {
      if (!input.checked) return
      if (input.value === 'no_change') {
        $$('input[name="category"]').forEach(other => {
          if (other !== input) other.checked = false
        })
      } else {
        const noChange = $('input[name="category"][value="no_change"]')
        if (noChange) noChange.checked = false
      }
    }))
    $('#photo-input').addEventListener('change', event => handlePhotoFiles(Array.from(event.target.files)))
    $('#video-input').addEventListener('change', event => { handleGenericMedia(event.target.files, 'video'); event.target.value = '' })
    $('#audio-record').addEventListener('click', startAudioRecording)
    $('#audio-stop').addEventListener('click', stopAudioRecording)
    $('#audio-remove').addEventListener('click', removeLastAudio)
    $('#search').addEventListener('input', renderNotebook)
    $('#filter-category').addEventListener('change', renderNotebook)
    $('#filter-media').addEventListener('change', renderNotebook)
    $('#filter-permanent').addEventListener('change', renderNotebook)
    $('#filter-received').addEventListener('change', renderNotebook)
    $('#detail-close').addEventListener('click', closeDetail)
    $('#detail-modal').addEventListener('click', event => { if (event.target === $('#detail-modal')) closeDetail() })
    $('#export-json').addEventListener('click', () => exportSimple('json'))
    $('#export-csv').addEventListener('click', () => exportSimple('csv'))
    $('#export-geojson').addEventListener('click', () => exportSimple('geojson'))
    $('#export-zip').addEventListener('click', () => exportZip(true))
    $('#share-export').addEventListener('click', sharePackage)
    $('#share-modal-close').addEventListener('click', closeShareModal)
    $('#share-modal').addEventListener('click', event => { if (event.target === $('#share-modal')) closeShareModal() })
    $('#share-select-all-records').addEventListener('click', () => $$('.share-record-check').forEach(input => { input.checked = true }))
    $('#share-select-none-records').addEventListener('click', () => $$('.share-record-check').forEach(input => { input.checked = false }))
    $('#share-select-all-content').addEventListener('click', () => ['share-measurements','share-notes','share-coordinates','share-photos','share-videos','share-audios'].forEach(id => { $(`#${id}`).checked = true }))
    $('#share-clear-optional').addEventListener('click', () => ['share-measurements','share-notes','share-coordinates','share-photos','share-videos','share-audios'].forEach(id => { $(`#${id}`).checked = false }))
    $('#prepare-share').addEventListener('click', prepareCommunityShare)
    $('#import-package-btn').addEventListener('click', () => $('#import-package-input').click())
    $('#import-package-input').addEventListener('change', event => readImportPackage(event.target.files?.[0]))
    $('#import-modal-close').addEventListener('click', closeImportModal)
    $('#cancel-import').addEventListener('click', closeImportModal)
    $('#confirm-import').addEventListener('click', confirmImportPackage)
    $('#import-modal').addEventListener('click', event => { if (event.target === $('#import-modal')) closeImportModal() })
    window.addEventListener('online', () => { if (state.map) renderSimpleMap() })
  }

  async function init() {
    bindEvents()
    setupInstall()
    setupServiceWorker()
    setLanguage(state.lang)
    try { await loadState() } catch (error) { console.error('Database init failed', error) }
    if (localStorage.getItem('costa-viva-first-run') === 'done') $('#first-run').style.display = 'none'
    setTimeout(() => initMap(), 0)
  }

  init()
})()

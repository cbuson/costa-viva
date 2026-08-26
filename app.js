(() => {
  'use strict'

  const DB_NAME = 'costa-viva-db'
  const DB_VERSION = 1
  const RECORD_STORE = 'records'
  const META_STORE = 'meta'

  const i18n = {
    es: {
      subtitle: 'Cuaderno comunitario de observación costera',
      install: 'Instalar', mapTitle: 'Mapa', mapIntro: 'Tus observaciones aparecen aquí cuando tienen posición registrada.', myPosition: 'Mi posición',
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
      help: 'Ayuda', helpIntro: 'Guía breve para usar COSTA VIVA en campo.', helpActivateTitle: 'Activa el modo de observación', helpActivateText: 'Permite que el teléfono compruebe ubicación, orientación, cámara y micrófono. Puedes continuar aunque alguna función no esté disponible.', helpObserveTitle: 'Registra lo que observas', helpObserveText: 'Describe lo que está ocurriendo sin necesidad de explicar la causa.', helpPhotoTitle: 'Toma evidencias', helpPhotoText: 'Añade fotografías, vídeo, audio o una medición sencilla. Las fotografías documentadas conservan los datos disponibles del dispositivo.', helpReturnTitle: 'Vuelve al mismo punto', helpReturnText: 'Los puntos permanentes permiten comparar observaciones realizadas en distintos momentos.',
      fieldMethodsTitle: 'Cómo medir con medios sencillos', fieldMethodsIntro: 'COSTA VIVA es una herramienta de ciencia popular. Una cinta, dos puntos de referencia y una forma constante de medir pueden producir una serie útil si siempre se repite el mismo procedimiento.', goldenRuleTitle: 'Regla principal', goldenRuleText: 'No importa medir muchas cosas. Importa medir siempre la misma cosa, desde la misma referencia, por la misma línea y dejando registrado cómo se hizo.',
      stakeMethodTitle: 'Método 1. Línea fija con cinta', stakeStep1: 'Elige un lugar seguro y estable detrás de la zona que puede erosionarse.', stakeStep2: 'Marca dos referencias A y B alineadas hacia la costa. Pueden ser estacas resistentes o elementos permanentes que no se muevan.', stakeStep3: 'Crea ese lugar en COSTA VIVA como punto permanente y fotografía las referencias A y B.', stakeStep4: 'Elige una sola línea que vas a seguir en el tiempo, por ejemplo el borde del escarpe de erosión o la línea de vegetación estable.', stakeStep5: 'Extiende la cinta desde A siguiendo exactamente la alineación A B hasta la línea elegida. Registra la distancia y el método Cinta métrica.', stakeStep6: 'Haz una segunda lectura para comprobar que no hubo un error de lectura. Si no coinciden, repite y explica la diferencia en la nota.', stakeStep7: 'Toma una fotografía desde el mismo punto y, cuando sea posible, en la misma dirección.', stakeStep8: 'En la siguiente visita vuelve al mismo punto permanente y repite exactamente la operación.', stakeWarning: 'Nunca coloques una referencia en un borde inestable ni entres en la zona de rompiente para obtener una medida. Si una estaca desaparece o se mueve, regístralo. No la sustituyas como si fuera la misma referencia.',
      photoMethodTitle: 'Método 2. Fotografía desde un punto fijo', photoStep1: 'Escoge una referencia estable desde la que puedas volver a fotografiar.', photoStep2: 'Guarda el lugar como punto permanente.', photoStep3: 'Anota la dirección de la fotografía y una referencia visible que ayude a repetir el encuadre.', photoStep4: 'En cada visita intenta usar el mismo lugar, altura aproximada y dirección.', photoStep5: 'Haz la fotografía antes de acercarte a la zona erosionada y añade una nota sobre los cambios observados.', photoWarning: 'Las fotografías repetidas permiten documentar cambios. Por sí solas no deben convertirse automáticamente en metros de erosión.',
      waterlineMethodTitle: 'Si mides hasta el borde del agua', waterlineMethodText: 'El borde del agua se mueve con la marea y el oleaje. Registra siempre la hora y el estado observado del mar. Para comparar dos medidas procura realizar las visitas en condiciones de marea semejantes. Una diferencia medida en horas o estados de marea distintos no debe interpretarse directamente como erosión.',
      minimumRecordTitle: 'Qué debe quedar registrado', minimum1: 'Código del punto permanente', minimum2: 'Fecha y hora', minimum3: 'Referencia fija utilizada', minimum4: 'Línea medida', minimum5: 'Distancia y método', minimum6: 'Fotografía y nota cuando sea posible', minimum7: 'Estado observado del mar', minimum8: 'Posición y precisión del celular cuando estén disponibles',
      gpsTitle: 'Sobre el GPS del celular', gpsHelp: 'El GPS ayuda a localizar la observación. No tiene la precisión de un equipo profesional. COSTA VIVA conserva la precisión informada por el dispositivo para evitar aparentar una exactitud que no existe.', installTitle: 'Instalar COSTA VIVA', installHelp: 'En un navegador compatible utiliza Instalar o Añadir a pantalla de inicio. Después podrás abrir COSTA VIVA como una aplicación.',
      projectInfoKicker: 'INFORMACIÓN DEL PROYECTO', projectInfoSubtitle: 'Herramienta abierta de ciencia popular para observación comunitaria de la costa', projectInfoAria: 'Información del proyecto',
      projectPurposeTitle: 'Para qué existe', projectPurposeText: 'COSTA VIVA nace para que comunidades con medios limitados puedan documentar cambios de su costa de forma ordenada, repetible y verificable usando celulares comunes y métodos sencillos de campo. La herramienta ayuda a conservar qué se observó, dónde, cuándo, cómo se midió y qué evidencia quedó registrada.',
      popularScienceTitle: 'Ciencia popular', popularScienceText: 'La sofisticación está en el método y no en exigir equipos costosos. Un registro comunitario gana valor cuando conserva el procedimiento, la incertidumbre, la fecha, la posición disponible, las fotografías, las notas y las mediciones repetidas. COSTA VIVA busca hacer posible ese trabajo sin convertir un celular en un instrumento profesional que no es.',
      originTitle: 'Por qué nació COSTA VIVA', originText1: 'COSTA VIVA surge a partir del trabajo realizado junto a comunidades Wayuu de Arroyo Guerrero, en La Guajira colombiana, donde la erosión costera y otros cambios ambientales hacían necesario documentar de forma continuada lo que estaba ocurriendo en el territorio.', originText2: 'Con la colaboración de Clarena Fonseca y el trabajo desarrollado con las comunidades se impulsó el uso de fotografías, vídeos, recorridos, localización mediante GPS y observaciones repetidas usando principalmente los teléfonos celulares disponibles.', originText3: 'De esa experiencia nace la idea de una herramienta de ciencia popular capaz de ayudar a crear puntos de observación, repetir mediciones, conservar evidencias y construir una memoria territorial verificable sin exigir instrumentación costosa.', originPrincipleTitle: 'Una idea sencilla', originPrincipleText: 'La falta de equipos profesionales no debe impedir que una comunidad pueda observar, medir, documentar y conservar de forma ordenada los cambios de su propio territorio.',
      displacementTitle: 'Cambio climático y desplazamiento', displacementText1: 'La erosión costera, las inundaciones y la pérdida progresiva de terreno pueden afectar viviendas, caminos, espacios culturales, actividades económicas y otras condiciones necesarias para permanecer en un territorio.', displacementText2: 'Cuando estos procesos contribuyen a que las personas tengan que abandonar temporal o permanentemente un lugar pueden formar parte de dinámicas de desplazamiento asociadas a factores climáticos y ambientales.', displacementCaution: 'COSTA VIVA no determina por sí misma que exista desplazamiento climático ni asigna una condición jurídica a las personas. Su función es documentar cambios, impactos y series temporales que puedan ayudar a comprender lo ocurrido.',
      odsTitle: 'COSTA VIVA y los Objetivos de Desarrollo Sostenible', odsIntro: 'La iniciativa se alinea principalmente con los siguientes ODS sin implicar reconocimiento o certificación oficial por parte de Naciones Unidas.', ods13Title: 'Acción por el clima', ods13Text: 'Apoya la observación local de impactos ambientales y la construcción de memoria útil para procesos de adaptación.', ods11Title: 'Ciudades y comunidades sostenibles', ods11Text: 'Ayuda a documentar amenazas sobre viviendas, caminos, espacios comunitarios y patrimonio territorial.', ods10Title: 'Reducción de las desigualdades', ods10Text: 'Busca reducir la brecha entre quienes disponen de instrumentación especializada y comunidades que necesitan registrar su territorio con medios limitados.', ods14Title: 'Vida submarina', ods14Text: 'Favorece la observación de transformaciones en la franja costera y en los espacios de interacción entre el mar y las comunidades.', ods16Title: 'Paz, justicia e instituciones sólidas', ods16Text: 'Facilita conservar evidencias comunitarias ordenadas que pueden apoyar una participación informada ante instituciones.', ods17Title: 'Alianzas para lograr los objetivos', ods17Text: 'Puede facilitar colaboración entre comunidades, universidades, organizaciones sociales, investigadores y administraciones públicas.',
      authorTitle: 'Autor y desarrollo', authorRole: 'Concepción del proyecto, arquitectura científica y digital, diseño metodológico y desarrollo de la herramienta.', academicLinkLabel: 'Vínculo académico del autor', academicLinkValue: 'Investigador de posdoctorado voluntario en la Universidade Federal de Mato Grosso do Sul', programLabel: 'Programa', contactLabel: 'Contacto académico', institutionNote: 'La afiliación identifica el marco académico de trabajo del autor. No implica por sí sola certificación institucional, financiación, aval oficial ni sustitución de los protocolos técnicos de las autoridades competentes.',
      methodCommitmentTitle: 'Compromiso metodológico', methodCommitment1: 'No inventar valores que el teléfono o la persona no hayan registrado.', methodCommitment2: 'Conservar la precisión informada por el dispositivo y distinguir medición, estimación y observación.', methodCommitment3: 'Favorecer puntos de control y procedimientos que puedan repetirse de la misma forma.', methodCommitment4: 'Mantener los registros bajo control de la comunidad hasta que decida exportarlos o compartirlos.', methodCommitment5: 'No incluir publicidad, rastreadores ni transmisión automática de los datos de campo.',
      licenseTitle: 'Licencias abiertas', softwareLicenseLabel: 'Código fuente', softwareLicenseText: 'El software de COSTA VIVA se publica bajo la licencia MIT, que permite usar, estudiar, modificar y redistribuir el código conservando el aviso de copyright y la licencia.', readMIT: 'Leer licencia MIT', contentLicenseLabel: 'Documentación y contenidos metodológicos', contentLicenseText: 'Los textos de ayuda y materiales metodológicos propios se ofrecen bajo CC BY 4.0, una licencia más apropiada para contenidos, siempre que se reconozca la autoría.', readContentLicense: 'Ver condiciones de los contenidos', limitsTitle: 'Alcance y límites', limitsText: 'COSTA VIVA ayuda a documentar observaciones y series comunitarias. No sustituye levantamientos topográficos, GNSS profesional, estudios oceanográficos, peritajes, sistemas oficiales de alerta ni decisiones de protección civil. Los registros deben interpretarse teniendo en cuenta el método utilizado y su incertidumbre.', citationTitle: 'Cómo citar COSTA VIVA', citationIntro: 'Referencia recomendada para la primera versión pública archivada del software.', citationVersionNote: 'Esta referencia identifica la versión v0.5.0 archivada en Zenodo. Las versiones futuras pueden disponer de su propio registro de versión.',
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
      install: 'Instalar', mapTitle: 'Mapa', mapIntro: 'Suas observações aparecem aqui quando possuem posição registrada.', myPosition: 'Minha posição',
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
      help: 'Ajuda', helpIntro: 'Guia breve para usar COSTA VIVA em campo.', helpActivateTitle: 'Ative o modo de observação', helpActivateText: 'Permite que o celular verifique localização, orientação, câmera e microfone. Você pode continuar mesmo que alguma função não esteja disponível.', helpObserveTitle: 'Registre o que você observa', helpObserveText: 'Descreva o que está acontecendo sem precisar explicar a causa.', helpPhotoTitle: 'Registre evidências', helpPhotoText: 'Adicione fotografias, vídeo, áudio ou uma medição simples. As fotografias documentadas conservam os dados disponíveis do dispositivo.', helpReturnTitle: 'Volte ao mesmo ponto', helpReturnText: 'Os pontos permanentes permitem comparar observações realizadas em diferentes momentos.',
      fieldMethodsTitle: 'Como medir com meios simples', fieldMethodsIntro: 'COSTA VIVA é uma ferramenta de ciência popular. Uma fita, dois pontos de referência e uma forma constante de medir podem produzir uma série útil quando o mesmo procedimento é repetido.', goldenRuleTitle: 'Regra principal', goldenRuleText: 'Não importa medir muitas coisas. Importa medir sempre a mesma coisa, a partir da mesma referência, pela mesma linha e deixando registrado como a medição foi feita.',
      stakeMethodTitle: 'Método 1. Linha fixa com fita', stakeStep1: 'Escolha um lugar seguro e estável atrás da zona que pode sofrer erosão.', stakeStep2: 'Marque duas referências A e B alinhadas em direção à costa. Podem ser estacas resistentes ou elementos permanentes que não se movam.', stakeStep3: 'Crie esse lugar no COSTA VIVA como ponto permanente e fotografe as referências A e B.', stakeStep4: 'Escolha uma única linha que será acompanhada ao longo do tempo, por exemplo a borda da escarpa de erosão ou a linha de vegetação estável.', stakeStep5: 'Estenda a fita a partir de A seguindo exatamente o alinhamento A B até a linha escolhida. Registre a distância e o método Fita métrica.', stakeStep6: 'Faça uma segunda leitura para verificar se não houve erro de leitura. Se não coincidirem, repita e explique a diferença na nota.', stakeStep7: 'Faça uma fotografia a partir do mesmo ponto e, quando possível, na mesma direção.', stakeStep8: 'Na visita seguinte volte ao mesmo ponto permanente e repita exatamente a operação.', stakeWarning: 'Nunca coloque uma referência em uma borda instável nem entre na zona de arrebentação para obter uma medida. Se uma estaca desaparecer ou se mover, registre o fato. Não a substitua como se fosse a mesma referência.',
      photoMethodTitle: 'Método 2. Fotografia a partir de um ponto fixo', photoStep1: 'Escolha uma referência estável de onde seja possível voltar a fotografar.', photoStep2: 'Salve o lugar como ponto permanente.', photoStep3: 'Registre a direção da fotografia e uma referência visível que ajude a repetir o enquadramento.', photoStep4: 'Em cada visita procure usar o mesmo lugar, altura aproximada e direção.', photoStep5: 'Faça a fotografia antes de se aproximar da zona erodida e acrescente uma nota sobre as mudanças observadas.', photoWarning: 'Fotografias repetidas permitem documentar mudanças. Sozinhas não devem ser transformadas automaticamente em metros de erosão.',
      waterlineMethodTitle: 'Se medir até a borda da água', waterlineMethodText: 'A borda da água se move com a maré e a ondulação. Registre sempre a hora e o estado observado do mar. Para comparar duas medições procure realizar as visitas em condições de maré semelhantes. Uma diferença medida em horários ou estados de maré distintos não deve ser interpretada diretamente como erosão.',
      minimumRecordTitle: 'O que deve ficar registrado', minimum1: 'Código do ponto permanente', minimum2: 'Data e hora', minimum3: 'Referência fixa utilizada', minimum4: 'Linha medida', minimum5: 'Distância e método', minimum6: 'Fotografia e nota quando possível', minimum7: 'Estado observado do mar', minimum8: 'Posição e precisão do celular quando estiverem disponíveis',
      gpsTitle: 'Sobre o GPS do celular', gpsHelp: 'O GPS ajuda a localizar a observação. Não tem a precisão de um equipamento profissional. COSTA VIVA conserva a precisão informada pelo dispositivo para evitar aparentar uma exatidão que não existe.', installTitle: 'Instalar COSTA VIVA', installHelp: 'Em um navegador compatível use Instalar ou Adicionar à tela inicial. Depois você poderá abrir COSTA VIVA como um aplicativo.',
      projectInfoKicker: 'INFORMAÇÕES DO PROJETO', projectInfoSubtitle: 'Ferramenta aberta de ciência popular para observação comunitária da costa', projectInfoAria: 'Informações do projeto',
      projectPurposeTitle: 'Para que existe', projectPurposeText: 'COSTA VIVA nasce para que comunidades com meios limitados possam documentar mudanças em sua costa de forma organizada, repetível e verificável usando celulares comuns e métodos simples de campo. A ferramenta ajuda a conservar o que foi observado, onde, quando, como foi medido e qual evidência ficou registrada.',
      popularScienceTitle: 'Ciência popular', popularScienceText: 'A sofisticação está no método e não na exigência de equipamentos caros. Um registro comunitário ganha valor quando conserva o procedimento, a incerteza, a data, a posição disponível, as fotografias, as notas e as medições repetidas. COSTA VIVA busca tornar esse trabalho possível sem transformar o celular em um instrumento profissional que ele não é.',
      originTitle: 'Por que nasceu COSTA VIVA', originText1: 'COSTA VIVA surge a partir do trabalho realizado junto a comunidades Wayuu de Arroyo Guerrero, na Guajira colombiana, onde a erosão costeira e outras mudanças ambientais tornavam necessário documentar de forma contínua o que estava acontecendo no território.', originText2: 'Com a colaboração de Clarena Fonseca e o trabalho desenvolvido com as comunidades foi impulsionado o uso de fotografias, vídeos, percursos, localização por GPS e observações repetidas usando principalmente os celulares disponíveis.', originText3: 'Dessa experiência nasce a ideia de uma ferramenta de ciência popular capaz de ajudar a criar pontos de observação, repetir medições, conservar evidências e construir uma memória territorial verificável sem exigir instrumentação cara.', originPrincipleTitle: 'Uma ideia simples', originPrincipleText: 'A falta de equipamentos profissionais não deve impedir que uma comunidade possa observar, medir, documentar e conservar de forma organizada as mudanças do seu próprio território.',
      displacementTitle: 'Mudança climática e deslocamento', displacementText1: 'A erosão costeira, as inundações e a perda progressiva de terreno podem afetar moradias, caminhos, espaços culturais, atividades econômicas e outras condições necessárias para permanecer em um território.', displacementText2: 'Quando esses processos contribuem para que as pessoas tenham de abandonar temporária ou permanentemente um lugar podem fazer parte de dinâmicas de deslocamento associadas a fatores climáticos e ambientais.', displacementCaution: 'COSTA VIVA não determina por si só que exista deslocamento climático nem atribui uma condição jurídica às pessoas. Sua função é documentar mudanças, impactos e séries temporais que possam ajudar a compreender o que ocorreu.',
      odsTitle: 'COSTA VIVA e os Objetivos de Desenvolvimento Sustentável', odsIntro: 'A iniciativa se alinha principalmente com os seguintes ODS sem implicar reconhecimento ou certificação oficial por parte das Nações Unidas.', ods13Title: 'Ação contra a mudança global do clima', ods13Text: 'Apoia a observação local de impactos ambientais e a construção de memória útil para processos de adaptação.', ods11Title: 'Cidades e comunidades sustentáveis', ods11Text: 'Ajuda a documentar ameaças sobre moradias, caminhos, espaços comunitários e patrimônio territorial.', ods10Title: 'Redução das desigualdades', ods10Text: 'Busca reduzir a distância entre quem dispõe de instrumentação especializada e comunidades que precisam registrar seu território com meios limitados.', ods14Title: 'Vida na água', ods14Text: 'Favorece a observação de transformações na faixa costeira e nos espaços de interação entre o mar e as comunidades.', ods16Title: 'Paz, justiça e instituições eficazes', ods16Text: 'Facilita conservar evidências comunitárias organizadas que podem apoiar uma participação informada diante das instituições.', ods17Title: 'Parcerias e meios de implementação', ods17Text: 'Pode facilitar a colaboração entre comunidades, universidades, organizações sociais, pesquisadores e administrações públicas.',
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

  const categoryKeys = {
    beach_loss: 'beachLoss', sand_gain: 'sandGain', water_reach: 'waterReach', flood: 'flood', home: 'homeAffected', road: 'roadAffected', vegetation: 'vegetationAffected', no_change: 'noChange', other: 'other'
  }

  const measurementTargetKeys = {
    erosion_edge: 'erosionEdge', vegetation_line: 'vegetationLine', waterline: 'waterline', high_water_mark: 'highWaterMark', other: 'other'
  }

  const state = {
    lang: localStorage.getItem('costa-viva-lang') || 'es',
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
    userMarker: null,
    installPrompt: null
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
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'es'
    $('#subtitle').textContent = tr('subtitle')
    $('#first-run-subtitle').textContent = tr('subtitle')
    $('#install-btn').textContent = tr('install')
    $('#project-info-btn').setAttribute('aria-label', tr('projectInfoAria'))
    $('#project-info-btn').title = tr('projectInfoAria')
    $$('#lang-es, #lang-pt').forEach(btn => btn.classList.toggle('active', btn.id === `lang-${lang}`))
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
    renderAll()
  }

  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION)
      req.onupgradeneeded = () => {
        const db = req.result
        if (!db.objectStoreNames.contains(RECORD_STORE)) {
          const store = db.createObjectStore(RECORD_STORE, { keyPath: 'uuid' })
          store.createIndex('code', 'code', { unique: true })
          store.createIndex('createdAt', 'createdAt')
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
    header.innerHTML = `<div><h3>${record.code}</h3><div class="record-meta">${new Date(record.createdAt).toLocaleString(state.lang === 'pt' ? 'pt-BR' : 'es-ES')}</div></div>${record.permanentPointId ? `<span class="count-pill">◆ ${tr('permanent')}</span>` : ''}`
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
    const filtered = state.records.filter(record => {
      const searchable = `${record.code} ${record.observationText || ''}`.toLowerCase()
      if (query && !searchable.includes(query)) return false
      if (category !== 'all' && !recordCategories(record).includes(category)) return false
      if (mediaOnly && !(record.media?.length > 0)) return false
      if (permanentOnly && !record.permanentPointId) return false
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

    for (let tx = startX; tx <= endX; tx += 1) {
      for (let ty = startY; ty <= endY; ty += 1) {
        if (ty < 0 || ty >= n) continue
        const wrappedX = ((tx % n) + n) % n
        const img = document.createElement('img')
        img.alt = ''
        img.draggable = false
        img.loading = 'lazy'
        img.src = `https://tile.openstreetmap.org/${z}/${wrappedX}/${ty}.png`
        img.style.left = `${tx * tileSize - topLeft.x}px`
        img.style.top = `${ty * tileSize - topLeft.y}px`
        img.addEventListener('error', () => {
          img.removeAttribute('src')
          img.classList.add('map-tile-failed')
        }, { once: true })
        tilePane.appendChild(img)
      }
    }

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

  async function sharePackage() {
    const pkg = await exportZip(false)
    if (!pkg) return
    const file = new File([pkg.blob], pkg.filename, { type: 'application/zip' })
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ title: 'COSTA VIVA', text: tr('exportIntro'), files: [file] })
        return
      } catch (error) {
        if (error?.name === 'AbortError') return
      }
    }
    showToast(tr('shareUnavailable'))
    downloadBlob(pkg.blob, pkg.filename)
  }

  function safeFilename(name) {
    return String(name).normalize('NFKD').replace(/[^a-zA-Z0-9._-]+/g, '_').slice(0, 100)
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[c]))
  }

  function setupInstall() {
    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault()
      state.installPrompt = event
      $('#install-btn').hidden = false
    })
    $('#install-btn').addEventListener('click', async () => {
      if (!state.installPrompt) {
        showToast(tr('installUnavailable'))
        return
      }
      state.installPrompt.prompt()
      await state.installPrompt.userChoice
      state.installPrompt = null
      $('#install-btn').hidden = true
    })
  }

  function setupServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(error => console.warn('SW registration failed', error))
    }
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
    $('#project-info-btn').addEventListener('click', openProjectInfo)
    $('#project-info-close').addEventListener('click', closeProjectInfo)
    $('#project-info-modal').addEventListener('click', event => { if (event.target === $('#project-info-modal')) closeProjectInfo() })
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !$('#project-info-modal').hidden) closeProjectInfo()
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
    $('#detail-close').addEventListener('click', closeDetail)
    $('#detail-modal').addEventListener('click', event => { if (event.target === $('#detail-modal')) closeDetail() })
    $('#export-json').addEventListener('click', () => exportSimple('json'))
    $('#export-csv').addEventListener('click', () => exportSimple('csv'))
    $('#export-geojson').addEventListener('click', () => exportSimple('geojson'))
    $('#export-zip').addEventListener('click', () => exportZip(true))
    $('#share-export').addEventListener('click', sharePackage)
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

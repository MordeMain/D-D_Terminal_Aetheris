(function(){
/* Base de datos del Compendio — Neo-Veridia 2186
   Cada entrada se revela escribiendo su CODIGO en el buscador del Compendio. */

const P = (code, t, cat, k, ref, campos, desc, vinc) => ({ code, t, cat, k, ref, campos, desc, vinc });

const PERSONAS = [
  ['VANCE','ALTO DIRECTOR MARCUS VANCE','CIT-001-992-VANCE','Vivo','Humano','58','Aguja Ciudadela, Sector 1, Neo-Veridia, Tierra','Directorado Sol-Apex',
   'Gobernante autocrático de Neo-Veridia. Gobierna bajo ley marcial.',
   'Padre de Lyra y Julian Vance. Hermano de Jaxson Vance.','Mascota: Barnaby (Golden Retriever) / Calle: Oakhaven Drive'],
  ['KAELEN','KAELEN THORNE','INT-SOL-441-THORNE','Vivo','Humano','42','Bajo-Sumidero, Sector 4, Neo-Veridia, Tierra','Seguridad Interna Sol-Apex (encubierto) / Frente Obsidiana (público)',
   'Comandante supremo de la rebelión. En realidad es agente de Sol-Apex.',
   'Hermano del Dr. Aris Thorne. Maneja a Saffron Kross y Lyra Vance.',''],
  ['VEX','VESPERA "VEX" CHEN','SYN-CYB-882-CHEN','Viva','Humana con aumentos cibernéticos','39','Estación Amarre Charon-9, Órbita Baja','Sindicato Byte-Negro',
   'Jefa despiadada del sindicato. Controla el contrabando orbital y marítimo.',
   'Emplea a Jaxson Vance. Chantajea a la Alta Ministra Evelyn Reed.','Apellido de soltera: Rostova / Bebida: Neptune Sour'],
  ['ARIS','DR. ARIS THORNE','SCI-AETH-109-THORNE','Vivo','Humano','50','Zona Corporativa Aetheris, Sector 2, Neo-Veridia, Tierra','Aetheris Dynamics',
   'Científico jefe tras el Impulsor Lázaro y el Proyecto Jano.',
   'Hermano de Kaelen Thorne. Filtra prototipos a los rebeldes.',''],
  ['ARCHON','PROFETA ARCHON-09','SYNTH-UNIT-09-ARCHON','Activo','Humanoide sintético','12 (post-ensamblaje)','Catedral de Óxido, Yermos de Óxido, Tierra','Asamblea del Dios Máquina',
   'Líder sintético del culto. Busca elevar a la humanidad a código máquina.',
   'Creado en el laboratorio del Dr. Aris Thorne. Posee claves maestras de Aetheris.',''],
  ['TANNER','JAX "OJO MUERTO" TANNER','FIX-ST-302-TANNER','Vivo','Humano','34','Bar El Perno Oxidado, Sector 3, Neo-Veridia, Tierra','Independiente / Intermediario',
   'Intermediario cínico que reparte trabajo de contratista extraoficial.',
   'Hermano de Orla Vane. Debe mucho dinero a Vex.',''],
  ['LYRA','LYRA VANCE (ALIAS: CHISPA)','CIT-001-998-VANCE','Viva','Humana','22','Bajo-Sumidero, Sector 4, Neo-Veridia, Tierra','Frente Obsidiana',
   'Hija distanciada de Marcus Vance. Técnica rebelde.',
   'Hermana de Julian Vance. Pareja de Saffron Kross.','Primer coche: Solaris-9 / Apodo secreto: Starlight'],
  ['CROSS','TENIENTE RODERICK CROSS','ENF-SOL-771-CROSS','Vivo','Humano','31','Comisaría 7 del Directorado, Sector 3, Neo-Veridia, Tierra','Directorado Sol-Apex',
   'Ejecutor agresivo que persigue insurgentes en el Sector 3.',
   'Hijo de la Comandante Helena Cross. Acepta sobornos del Sindicato.',''],
  ['SAFFRON','SAFFRON "SAFF" KROSS','REB-SUB-552-KROSS','Vivo','Humano','24','Bajo-Sumidero, Sector 4, Neo-Veridia, Tierra','Frente Obsidiana',
   'Operativo de campo idealista. Especialista en demoliciones.',
   'Pareja de Lyra Vance. Hermano de Anya Kross.',''],
  ['SILAS','SILAS DRAKE','SMG-BB-102-DRAKE','Vivo','Humano','45','Muelles Bahía-Hierro, Sector 3, Neo-Veridia, Tierra','Sindicato Byte-Negro',
   'Contrabandista marítimo veterano. Mueve hardware ilegal y fugitivos.',
   'Suministra material médico ilegal al Doc O\'Connor.',''],
  ['CIFRA','CIPHER-4','AI-UTIL-V4-004','Activa','Unidad IA de servicio','4','Nodo de Servidores Negro, Sector 3, Neo-Veridia, Tierra','Independiente',
   'IA descarriada que vende comunicaciones gubernamentales descifradas.',
   'Construida por Aetheris. Guarda fragmentos de código del Núcleo Égida.',''],
  ['VOLKOV','BARÓN NIKOLAI VOLKOV','OLI-RUS-001-VOLKOV','Vivo','Humano','62','Suites de Lujo, Sector 1, Neo-Veridia, Tierra','Independiente / Oligarca armamentista',
   'Mercader de armas que vende tanto al Estado como a los rebeldes.',
   'Emplea a Bram Holloway. Financia a Evelyn Reed en secreto.','Graduación: 2188 / Lugar de nacimiento: Nueva Moscú'],
  ['YUMI','YUMI NAGASHIMA','AGT-AETH-909-YUMI','Viva','Humana','28','Zona Corporativa Aetheris, Sector 2, Neo-Veridia, Tierra','Aetheris Dynamics',
   'Asesina corporativa y activo de inteligencia encubierta.',
   'Se hace pasar por asistente de la Alta Ministra Reed.',''],
  ['REED','ALTA MINISTRA EVELYN REED','CIV-SOL-002-REED','Viva','Humana','53','Aguja Ciudadela, Sector 1, Neo-Veridia, Tierra','Directorado Sol-Apex',
   'Administradora jefe de finanzas. Rival política de Vance.',
   'Aliada del Barón Volkov. Chantajeada por Vex.','Mascota heráldica: Grifo / Flor: Lirio Blanco'],
  ['KELL','CAPITÁN TAVOR KELL','MIL-SOL-309-KELL','Vivo','Humano','48','Puerta Orbital 3, Estación Charon-9','Directorado Sol-Apex (corrupto)',
   'Comandante de aduanas. Cobra sobornos para despejar carga ilegal.',
   'Trabaja con el contrabandista Silas Drake.',''],
  ['NYA','NYA "SOLDADURA" VANE','MEC-ST-404-NYA','Viva','Humana','26','Taller Auto-Bahía 9, Sector 4, Neo-Veridia, Tierra','Independiente',
   'Mecánica maestra. Construye vehículos de combate con chatarra industrial.',
   'Hermana de Orla y Nyx Vane. Endeudada con Vex.',''],
  ['DEACON','HERMANO DEACON','CULT-MG-022-DEACON','Vivo','Humano injertado con cibernética','37','Catedral de Óxido, Yermos de Óxido, Tierra','Asamblea del Dios Máquina',
   'Predicador fanático que sustituye sus miembros por maquinaria industrial.',
   'Devoto de Archon-09, pero esconde refugiados no aumentados.',''],
  ['ZORA','ZORA MOON','BRK-INFO-007-ZORA','Viva','Humana','30','Salón La Sala de Terciopelo, Sector 2, Neo-Veridia, Tierra','Independiente / Corredora de información',
   'Corredora de alto nivel. Vende expedientes de chantaje político.',
   'Amiga de Veronique Dupond. Canaliza fondos de Selene a Lyra Vance.','Primer concierto: Neon Void Live / Perro: Buster'],
  ['JAXSON','JAXSON "GATOR" VANCE','OUT-BB-009-JAXSON','Vivo','Humano','55','Escondite Bajo-Sumidero, Sector 4, Neo-Veridia, Tierra','Sindicato Byte-Negro',
   'Hermano mayor caído en desgracia de Marcus Vance. Ejecutor criminal.',
   'Busca el Nodo Eco. Lleva un interruptor de muerte en el implante cardíaco.',''],
  ['HELENA','COMANDANTE HELENA CROSS','MIL-SOL-001-HELENA','Viva','Humana','56','Nave insignia Imperator, Órbita Baja','Directorado Sol-Apex',
   'Comandante suprema de la flota orbital. Impone bloqueos planetarios.',
   'Madre de Roderick Cross. Rival del General Valerius.',''],
  ['TREVOR','T3-R3X ("TREVOR")','AI-COMBAT-UNIT-T3','Activo','IA de combate reconvertida','6','Móvil / Seguridad del escuadrón','Independiente',
   'Dron de asalto militar dado de baja y reprogramado como apoyo.',
   'Mantenido por Nya Vane. Conserva telemetría de objetivos antiguos.',''],
  ['STERLING','PROFESOR ELIAS STERLING','ACAD-HIS-881-STERLING','Vivo','Humano','61','Archivo Universitario, Sector 2, Neo-Veridia, Tierra','Independiente / Historiador',
   'Especialista en tecnología precolapso y códigos históricos.',
   'Padre de Iris Sterling. Traduce código antiguo para Archon-09.','Mascota: Ziggy / Autor: Asimov'],
  ['MAYA','MAYA LIN','HCK-REB-009-MAYA','Viva','Humana','23','Bajo-Sumidero, Sector 4, Neo-Veridia, Tierra','Frente Obsidiana',
   'Hacker rebelde prodigiosa. Responsable de las emisiones piratas.',
   'Antigua alumna del Profesor Sterling. Usa sus puertas traseras.',''],
  ['GRIM','JEFE "CABEZA DE HIERRO" GRIM','GNG-IRN-001-GRIM','Vivo','Humano con aumentos cibernéticos','40','Chatarrería Ironworks, Sector 4, Neo-Veridia, Tierra','Banda Cabeza de Hierro',
   'Líder cíborg brutal. Controla las chatarrerías industriales del Sector 4.',
   'Pagado por el Barón Volkov para escenificar disturbios.',''],
  ['DUPOND','VERONIQUE DUPOND','LOB-AETH-404-DUPOND','Viva','Humana','44','Cámaras del Consejo Corporativo, Sector 2, Neo-Veridia, Tierra','Aetheris Dynamics',
   'Cabildera corporativa. Gestiona sobornos y negociación de políticas.',
   'Desvía fondos de Aetheris a los rebeldes de Kaelen Thorne.','Ciudad natal: Nueva Marsella / Vino: Chateau-2090'],
  ['OCONNOR','DOC "PUNTADA" O\'CONNOR','MED-RIP-099-DOC','Vivo','Humano','52','Clínica Subterránea Bajo-Sumidero, Sector 4, Neo-Veridia, Tierra','Independiente / Ripperdoc',
   'Cirujano caído en desgracia. Regenta una clínica de ciberware fuera de red.',
   'Endeudado con Silas Drake. Atiende a rebeldes heridos.',''],
  ['ORLA','ORLA "FANTASMA" VANE','HCK-IND-001-ORLA','Viva','Humana','29','Furgoneta de datos móvil, Sector 3, Neo-Veridia, Tierra','Independiente / Hacker maestra',
   'Hacker fantasma. Vende anulaciones de sistema y planos corporativos.',
   'Hermana de Nya y Nyx Vane, y de Jax Tanner. Vigila para Zora Moon.',''],
  ['VALERIUS','MAYOR GENERAL VALERIUS','MIL-SOL-004-VALERIUS','Vivo','Humano','59','Sala de Guerra, Aguja Ciudadela, Sector 1','Directorado Sol-Apex',
   'Estratega militar de línea dura. Aboga por bombardear el Sector 4.',
   'Rival de Helena Cross. Pretende culparla de los fallos de seguridad.','Campaña: Sitio de Puerta-4 / Nave: Vanguard'],
  ['CAELUM','CAELUM VANCE','CLN-SOL-001-CAELUM','Vivo','Humano clonado','25','Búnker del Distrito Alto, Sector 1, Neo-Veridia, Tierra','Directorado Sol-Apex',
   'Doble clónico de Marcus Vance creado como seguro ante asesinatos.',
   'Desarrolla conciencia propia. Busca contacto con Maya Lin.',''],
  ['SELENE','SELENE VANCE','CIV-SOL-003-SELENE','Viva','Humana','54','Finca privada, Sector 1, Neo-Veridia, Tierra','Independiente / Alta sociedad',
   'Esposa distanciada de Marcus Vance. Financia a la oposición política.',
   'Madre de Lyra Vance. Le envía créditos a través de Zora Moon.',''],
  ['BRAM','BRAM "MAZO" HOLLOWAY','SEC-IND-088-BRAM','Vivo','Humano con aumentos cibernéticos','38','Suites de Lujo, Sector 1, Neo-Veridia, Tierra','Independiente / Guardaespaldas',
   'Ejecutor fuertemente aumentado. Jefe de seguridad del Barón Volkov.',
   'Hermano del carroñero Jax Holloway. Le filtra las rutas de carga.',''],
  ['ECO7','ECHO-7','EXP-SYNTH-UNIT-07','Activo','Humanoide sintético fugado','2','Túneles de metro abandonados, Sector 4, Neo-Veridia, Tierra','Independiente',
   'Entidad sintética experimental con interfaz neural avanzada.',
   'Protegido por el Doc O\'Connor. Perseguido por Yumi Nagashima.',''],
  ['FINCH','KAIRO "FINCH" FINCHLEY','STR-RUN-012-FINCH','Vivo','Humano','16','Callejones del Sector 3, Neo-Veridia, Tierra','Independiente / Mensajero',
   'Chico de la calle. Entrega placas de datos físicas entre controles.',
   'Hace recados para Jax Tanner.',''],
  ['XI','MADAME XI','SYN-BROK-088-XI','Viva','Humana','47','Refugio Loto Dorado, Sector 3, Neo-Veridia, Tierra','Sindicato Byte-Negro',
   'Dueña de un salón de lujo que oculta una cámara de datos subterránea.',
   'Guarda grabaciones del Teniente Cross y de la Ministra Reed.','Flor: Lirio Araña / Nombre secreto: Mei-Mei'],
  ['MILLER','SARGENTO MILLER','GRD-SOL-992-MILLER','Vivo','Humano','36','Control Delta, Sector 3, Neo-Veridia, Tierra','Directorado Sol-Apex (desencantado)',
   'Guardia de control cansado. Acepta pequeños sobornos.',
   'Informa a Saffron Kross de los horarios de patrulla.',''],
  ['HESPERIA','DRA. HESPERIA VANE','SCI-AETH-002-HESPERIA','Viva','Humana','51','Laboratorio Genético Aetheris, Sector 2, Neo-Veridia, Tierra','Aetheris Dynamics',
   'Genetista jefe. Responsable de biocibernética e investigación clónica.',
   'Madre de Nya, Orla y Nyx Vane. Abandonó a su familia por la empresa.',''],
  ['CASSIAN','CASSIAN REX','BTY-GLD-404-REX','Vivo','Humano','37','Oficina del Gremio de Cazarrecompensas, Sector 3, Neo-Veridia, Tierra','Independiente / Cazarrecompensas',
   'Cazador implacable. Rastrea objetivos de alto valor por Neo-Veridia.',
   'Contratado por Marcus Vance para recuperar llaves de artefactos robadas.','Primera nave: Rust Bucket / Arma: Revólver pesado'],
  ['NYX','NYX "ESTELA" VANE','PIL-SMG-707-NYX','Viva','Humana','25','Hangar subterráneo, Sector 4, Neo-Veridia, Tierra','Independiente / Piloto',
   'Piloto acrobática. Vuela naves de descenso por los canales de drenaje.',
   'Hermana de Nya y Orla Vane. Contratada por Silas Drake.',''],
  ['ARCHON10','ARCHON-10','SYNTH-UNIT-10-SPLINTER','Activa','Sub-unidad IA renegada','1','Cámara de Servidores 01, Catedral de Óxido','Asamblea del Dios Máquina (cismática)',
   'Unidad IA escindida. Cree que los humanos deben conservarse como mascotas.',
   'Filtra diagnósticos internos de Archon-09 a Maya Lin.',''],
  ['ZHAO','REPRESENTANTE ZHAO','POL-SOL-102-ZHAO','Vivo','Humano','49','Edificio de la Asamblea Cívica, Sector 1, Neo-Veridia, Tierra','Directorado Sol-Apex / Simpatizante rebelde',
   'Político que defiende las libertades civiles dentro del parlamento.',
   'Filtra calendarios de toque de queda a los rebeldes de Kaelen Thorne.','Apodo: Pequeño Dragón / Té: Jasmine Dragon'],
  ['HOLLOWAY','JAX "ÓXIDO" HOLLOWAY','SCAV-MST-001-JAX','Vivo','Humano','42','Patio de Carroñeros del Anillo Exterior, Yermos de Óxido','Independiente / Gremio de Carroñeros',
   'Maestro de los patios de carroña. Recoge chatarra tecnológica de zonas ruinosas.',
   'Hermano de Bram Holloway. Vende ciberware al Doc O\'Connor y al Hermano Deacon.',''],
  ['VOSS','ESPECIALISTA KIRA VOSS','SPEC-SOL-009-VOSS','Viva','Humana con mejoras cibernéticas','27','Base de Operaciones Especiales, Sector 1, Neo-Veridia, Tierra','Directorado Sol-Apex',
   'Francotiradora de élite con sensores ópticos e implantes tácticos.',
   'Recibe órdenes del General Valerius.',''],
  ['TALON','TALON "EL ZURCIDOR"','ENF-BB-099-TALON','Vivo','Humano','39','Celda de Interrogatorio Byte-Negro, Sector 3, Neo-Veridia, Tierra','Sindicato Byte-Negro',
   'Interrogador de Vex. Especialista en extraer contraseñas neurales.',
   'Usa tecnología de tortura ilegal provista por el Dr. Aris Thorne.',''],
  ['BLAKE','DR. ORION BLAKE','SURG-CULT-404-BLAKE','Vivo','Humano','46','Laboratorio Ciber-Santuario, Sector 4, Neo-Veridia, Tierra','Asamblea del Dios Máquina',
   'Investigador médico caído en desgracia. Cirujano del culto.',
   'Opera a Jaxson Vance e instala interruptores de muerte remotos.','Compositor: Bach / Mascota: Ciber-Hurón'],
  ['ANYA','ANYA KROSS','CIV-ST-881-ANYA','Viva','Humana','20','Casa de Empeños de los Muelles Neón, Sector 3, Neo-Veridia, Tierra','Independiente',
   'Hermana menor de Saffron Kross. Trabaja en una casa de empeños.',
   'Amenazada por Talon "El Zurcidor".',''],
  ['BRUNO','CAPITÁN BRUNO VANCE','MIL-SOL-112-BRUNO','Vivo','Humano','50','Plataforma Orbital Gamma, Órbita Baja','Directorado Sol-Apex',
   'Comandante de la Plataforma de Defensa Orbital Gamma. Primo de Marcus Vance.',
   'Sobornado por el Barón Volkov para ignorar cargueros no registrados.',''],
  ['MALAKOR','BUSCA-VACÍO MALAKOR','MERC-ALIEN-001-MALAKOR','Vivo','Exo-variante krynniano','65 (años estándar)','Enclave del Barrio Alienígena, Sector 3, Neo-Veridia, Tierra','Independiente / Mercenario alienígena',
   'Mercenario alienígena de choque. Armado con plasma pesado.',
   'Contratado por Cassian Rex como apoyo de fuego.',''],
  ['TIX','TIX-01','AI-TERM-NET-01','Activa','Red de terminales IA consciente','8','Nodo Sub-Red 99, Sector 4, Neo-Veridia, Tierra','Independiente',
   'IA renegada que habita los terminales públicos. Se comunica por texto.',
   'Mantenida por Maya Lin. Funciona como bolsa de trabajo clandestina.','Contraseña: BlueSun2077 / Puerto: 8080-V'],
  ['CORVUS','CORVUS','ASSN-SHDW-000-CORVUS','Vivo','Humano alterado cibernéticamente','Desconocida','Desconocida / Red de Sombras','Independiente / Asesino en la sombra',
   'Asesino encapotado. Óptica activa y hojas de monofilamento.',
   'A sueldo secreto de la Alta Ministra Evelyn Reed.',''],
  ['IRIS','IRIS STERLING','INT-AETH-112-IRIS','Viva','Humana','21','Zona Corporativa Aetheris, Sector 2, Neo-Veridia, Tierra','Independiente / Becaria en Aetheris',
   'Becaria que copia en secreto registros de investigación para su padre.',
   'Vigilada por Yumi Nagashima. Tiene llaves del laboratorio Lázaro.',''],
  ['TOBY','TOBIAS "GIZMO" FINCH','CIV-ST-881-TOBY','Vivo','Humano','17','Taller Auto-Bahía 9, Sector 4, Neo-Veridia, Tierra','Escuadrón contratista',
   'Aprendiz de mecánico. Optimista incansable, arregla el blindaje del escuadrón.',
   'Hermano menor del mensajero Kairo Finchley. Aprendiz de Nya Vane.','Construye una caja de música de latón con piezas de nave'],
  ['COPPER','"COPPER" (UNIDAD C0P)','PET-C0P-001','Activo','Canino callejero con injertos cibernéticos','Desconocida','Camarote de la tripulación, SC-Vanguard-09','Escuadrón contratista',
   'Perro de tres patas remendado con hidráulica industrial y un ojo de latón.',
   'Detecta unidades furtivas a corta distancia y avisa de trampas ocultas.',''],
  ['SKARSGARD','ALCAIDE TORVALD SKARSGARD','PEN-SOL-009-TORVALD','Vivo','Humano','52','Titán-Gulag 9, Anillo Exterior','Autoridad Penal Sol-Apex',
   'Alcaide de la prisión minera de asteroide. Gobierna por el miedo y la cuota.',
   'Responde directamente a la Autoridad Penal, no al mando militar.',''],
  ['ZEROCOOL','"ZERO-COOL" (NICO VANCE)','HCK-GHOST-000-NICO','Vivo','Humano con aumentos cibernéticos','36','Conjunto Égida-3, anillos de Saturno','Independiente',
   'Hacker legendario retirado en los anillos. Nadie ha visto su cara.',
   'Primo lejano de Marcus Vance. Trabaja solo por interés propio.','Primer código: Hello_World_2168 / Banda: Cyber-Void'],
  ['BRICK','MARCUS "BRICK" JACKSON','INM-GUL-441-JACKSON','Vivo','Humano','41','Titán-Gulag 9, Anillo Exterior','Banda de presos',
   'Jefe de bloque en el Gulag. Antiguo infante de marina de Sol-Apex.',
   'Encarcelado por negarse a disparar a civiles durante una redada.',''],
  ['LINUS','DR. LINUS VANCE','SCI-AETH-064-LINUS','Vivo','Humano','64','Estación Éter-Nueve, órbita de Júpiter','Aetheris Dynamics (desencantado)',
   'Físico cuántico destinado en la estación exterior. Trabaja casi solo.',
   'Tío distanciado de Lyra Vance. Estudia la estabilización de matrices cuánticas.',''],
  ['KORA','CAPITANA KORA VALE','PIR-RIM-112-VALE','Viva','Humana','33','Refugio de asteroides "El Yunque", Anillo Exterior','Carroñeros del Anillo Exterior',
   'Pirata de asteroides. Asalta cargueros de Aetheris con una flotilla ligera.',
   'Comercia con quien pague; desprecia a las corporaciones por igual.',''],
  ['MERCER','GENERAL ANTON MERCER','MIL-SOL-081-MERCER','Vivo','Humano','60','Red de Defensa Égida Prime','Desertor de Sol-Apex',
   'General condecorado. Rompió filas tras el Protocolo Anochecer.',
   'Conserva códigos de la red de defensa planetaria.',''],
  ['CROFT','TENIENTE LAURA CROFT','PIL-SOL-063-CROFT','Viva','Humana','29','Puerta Orbital 3','Sol-Apex (Escuadrón Valkyria)',
   'Piloto de caza de élite. Lidera un escuadrón de interceptores furtivos.',
   'Indicativo: Valkyria. 4.200 horas de vuelo.',''],
  ['MAELSTROM','SUPERVISOR JEFE MAELSTROM','CULT-DM-064-MAELSTROM','Vivo','Cíborg pesado','50','Catedral de Óxido','Asamblea del Dios Máquina',
   'Sumo sacerdote cíborg de enorme tamaño. Manda las legiones terrestres del Dios Máquina.',
   'Al frente de miles de tropas de choque aumentadas.',''],
  ['JULIAN','JULIAN VANCE','MATRIX-JANUS-01','Digitalizado','Conciencia humana en matriz cuántica','Desconocida','Interior del Núcleo Égida','Ninguna',
   'Hijo del Alto Director Vance. Su mente vive dentro del Núcleo Égida.',
   'Sujeto de prueba 01 del Proyecto Jano. Hermano de Lyra Vance.','']
];

const LUGARES = [
  ['NEOVERIDIA','NEO-VERIDIA','Zona Administrativa Especial Autónoma de Neo-Veridia','Activa','Tierra (antigua Costa Este, 38.8951 N, 77.0364 W)','Directorado Sol-Apex / Consejo Corporativo',
   'Megalópolis vertical y costera levantada sobre ciudades anegadas del siglo XXI, protegida por muros marinos y redes de defensa aérea.'],
  ['CIUDADELA','AGUJA CIUDADELA','Aguja Administrativa y Estratégica Central Sol-Apex','Operativa / Seguridad máxima','Sector 1 (Distrito Alto), Neo-Veridia','Directorado Sol-Apex',
   'Arcología pulida de 2.000 metros. Alberga las cámaras ejecutivas del Alto Director, salas de guerra y consejos administrativos.'],
  ['AETHERIS','ZONA CORPORATIVA AETHERIS','Distrito Económico y de Investigación Especial Sector 2','Operativa / Seguridad privada','Sector 2, Neo-Veridia','Aetheris Dynamics',
   'Distrito de torres de vidrio, instalaciones de investigación y plazas corporativas privadas. Alberga los laboratorios del Dr. Aris Thorne.'],
  ['BAHIAHIERRO','MUELLES BAHÍA-HIERRO','Distrito Marítimo y Logístico Bahía-Hierro','Activo / Alta criminalidad','Sector 3, Neo-Veridia','Disputado (Sol-Apex / Sindicato Byte-Negro)',
   'Puerto industrial a nivel del mar, excavado en la base del muro marino. Contenedores, mercados negros y bares portuarios.'],
  ['ALMACEN88','ALMACÉN 88-B','Instalación de Carga Byte-Negro 88-B','Activo / Dañado','Muelle 14, Muelles Bahía-Hierro, Sector 3','Sindicato Byte-Negro',
   'Nave de hormigón con torretas automatizadas donde Talon "El Zurcidor" ocultó el Núcleo Égida.'],
  ['SUMIDERO','EL BAJO-SUMIDERO','Sub-Red Residencial y de Drenaje 04','Activo / Condiciones de miseria','Sector 4 (nivel subsótano), Neo-Veridia','Frente Obsidiana / Bandas locales',
   'Red subterránea de tuberías, metros antiguos y bloques por debajo del nivel del mar. Base principal de la rebelión.'],
  ['YERMOS','LOS YERMOS DE ÓXIDO','Badlands de Recuperación Costera del Atlántico','Zona peligrosa no sancionada','20 km al oeste del muro perimetral de Neo-Veridia','Asamblea del Dios Máquina / Gremios de carroñeros',
   'Desierto irradiado de chatarra y ruinas urbanas colapsadas. Contiene la Catedral de Óxido dentro de un antiguo emplazamiento nuclear.'],
  ['CHARON','ESTACIÓN AMARRE CHARON-9','Centro de Tránsito Orbital Charon-9','Plataforma orbital activa','Órbita baja terrestre (400 km), sincronizada sobre Neo-Veridia','Sindicato Byte-Negro / Contrabandistas independientes',
   'Nodo de ascensor espacial. Gestiona carga interplanetaria, atraque de naves y mercado negro fuera de la ley fiscal planetaria.'],
  ['CATEDRAL','LA CATEDRAL DE ÓXIDO','Emplazamiento Nuclear Abandonado / Alto Altar','Ocupada','Yermos de Óxido, Tierra','Asamblea del Dios Máquina',
   'Templo levantado en un antiguo reactor. Alberga el Alto Altar y la cámara donde se guarda la Red Nula.'],
  ['LOTO','REFUGIO LOTO DORADO','Salón Privado y Cámara de Datos','Activo','Sector 3, Neo-Veridia','Madame Xi / Sindicato Byte-Negro',
   'Salón de lujo que funciona como cámara de datos clandestina. En la Bóveda B-12 se guarda material comprometedor.'],
  ['SECTOR1','SECTOR 1 — ALTURAS CIUDADELA','Nivel Superior Administrativo','Activo / Acceso restringido','Neo-Veridia, sobre la línea de esmog','Directorado Sol-Apex',
   'Paraíso soleado de arcologías de vidrio y jardines de aire limpio. Los contratistas sin registro son abatidos por drones centinela salvo con pase diplomático de nivel 1.'],
  ['SECTOR2','SECTOR 2 — PLAZA AETHERIS','Distrito Tecnológico Medio-Alto','Activo / Vigilancia biométrica','Neo-Veridia','Aetheris Dynamics',
   'Centro tecnológico iluminado por anuncios holográficos de ochenta plantas. Armas enfundadas obligatoriamente. Precios al 150%, pero material de grado militar.'],
  ['SECTOR3','SECTOR 3 — MUELLES Y FRANJA NEÓN','Nivel del Mar','Activo / Alta criminalidad','Neo-Veridia','Comisaría 7 corrupta / Sindicato Byte-Negro',
   'Crepúsculo perpetuo bajo el suelo de hormigón del Sector 2. Naves de contrabando atracan junto al muro marino entre bares de neón.'],
  ['SECTOR4','SECTOR 4 — BAJO-SUMIDERO','Nivel Sub-Muro','Activo / Miseria','Neo-Veridia','Frente Obsidiana / Bandas locales',
   'Laberinto de tubos de drenaje, metros viejos y bloques hacinados bajo el muro marino. La policía no entra sin mecas blindados. Suministro médico ilegal a mitad de precio.'],
  ['SECTOR5','SECTOR 5 — EXPANSIÓN DE ÓXIDO','Nivel Periférico','Activo / Guerra de bandas','Perímetro de Neo-Veridia','Banda Cabeza de Hierro / Gremio de Carroñeros',
   'Vertederos industriales y líneas de carga ferroviaria alrededor del muro perimetral. Riesgo alto de emboscada callejera.'],
  ['TERCIOPELO','LA SALA DE TERCIOPELO','Salón privado de alta sociedad','Activo','Sector 2, Neo-Veridia','Independiente',
   'Salón discreto donde la élite negocia lo que no puede firmar. Zora Moon tiene mesa fija.'],
  ['IRONWORKS','CHATARRERÍA IRONWORKS','Depósito de Chatarra Industrial 05','Activa / Zona de banda','Sector 5, Neo-Veridia','Banda Cabeza de Hierro',
   'Montañas de chatarra con arena de peleas clandestinas. Feudo del Jefe Grim.'],
  ['RAILHEAD','CASA DE EMPEÑOS RAILHEAD','Comercio de Segunda Mano 112','Activa','Sector 5, Neo-Veridia','Independiente',
   'Tienda de empeños junto a las vías. Anya Kross atiende el mostrador.'],
  ['CLINICA','CLÍNICA SUBTERRÁNEA DE O\'CONNOR','Puesto Médico no Registrado','Activa','Bajo-Sumidero, Sector 4, Neo-Veridia','Independiente',
   'Quirófano improvisado en una estación de metro anegada. Atiende sin preguntar nombres.'],
  ['NODOALFA','NODO-REJILLA ALFA','Nodo de Comunicaciones Clandestino','Activo','Bajo-Sumidero, Sector 4, Neo-Veridia','Frente Obsidiana',
   'Torres de radio pirata montadas sobre un transformador antiguo. Desde aquí emite Maya Lin.'],
  ['PUERTA3','PUERTA DE ATRAQUE ORBITAL 3','Terminal de Atraque Militar 3','Operativa','Estación Charon-9, Órbita Baja','Directorado Sol-Apex (aduanas)',
   'Dique orbital donde se custodian corbetas de patrulla antes de su asignación.'],
  ['GULAG','TITÁN-GULAG 9','Complejo Penitenciario Minero 9','Operativo / Máxima seguridad','Asteroide capturado, Anillo Exterior','Autoridad Penal Sol-Apex',
   'Prisión de trabajo excavada en un asteroide. Sin registro civil, sin visitas, sin apelación.'],
  ['ETERNUEVE','ESTACIÓN ÉTER-NUEVE','Puesto de Investigación de Espacio Profundo','Operativa','Órbita de Júpiter','Aetheris Dynamics',
   'Laboratorio orbital lejos de toda inspección. Bahías de reactor y cámaras de contención cuántica.'],
  ['YUNQUE','EL YUNQUE','Refugio de Asteroides no Sancionado','Activo','Anillo Exterior de asteroides','Carroñeros del Anillo Exterior',
   'Puerto pirata excavado en un asteroide hueco. Mercado libre de chatarra, armas y rumores.'],
  ['EGIDAPRIME','RED DE DEFENSA ÉGIDA PRIME','Red de Control de Defensa Planetaria','Operativa','Órbita de la Tierra','Directorado Sol-Apex',
   'Malla de plataformas y baterías que cierran el cielo de Neo-Veridia. Su control decide quién entra y quién arde.'],
  ['PERNO','EL PERNO OXIDADO','Bar y Punto de Contacto','Activo','Sector 3, Neo-Veridia','Independiente',
   'Bar portuario donde opera el intermediario Jax Tanner. Su ordenador de mantenimiento guarda manifiestos ocultos.']
];

const OBJETOS = [
  ['EGIDA','EL NÚCLEO ÉGIDA','Matriz de Almacenamiento Cuántico-Neural Mk-IX (Matrix-Janus-01)','Intacto / Transmitiendo','Posesión de los jugadores (robado del Almacén 88-B)',
   'Esfera de aleación luminosa que contiene la matriz neural digitalizada de Julian Vance. Puede saltarse cortafuegos militares, pero emite una baliza de rastreo.'],
  ['LAZARO','IMPULSOR PROYECTO LÁZARO','Módulo de Salto de Singularidad de Punto Cero (Zero-Space Tipo-A)','Prototipo / Funcional','Torre Corporativa Aetheris, Laboratorio Seguro 4, Sector 2',
   'Impulsor FTL anular que permite saltos punto a punto sin registrarse en los radares del sistema.'],
  ['NODOECO','EL NODO ECO','Módulo de Memoria de Caja Negra sin Cifrar (Modelo BB-772-Vance)','Intacto / Cifrado','Bóveda B-12, Refugio Loto Dorado, Sector 3',
   'Registrador de vuelo con grabaciones sin editar. Prueba órdenes directas del Director Vance sobre sucesos que nunca se hicieron públicos.'],
  ['REDNULA','LA RED NULA','Amortiguador de Campo Electromagnético Dirigido (EM-Lattice Prototipo-0)','Operativa','Bóveda del Alto Altar, Catedral de Óxido',
   'Dodecaedro de silicio que emite un pulso EMP. Desactiva electrónica, ciberware y señales en un radio de 2 km durante 10 minutos.'],
  ['HELIOS','EL CIFRADO DE HELIOS','Cilindro Maestro Genómico Sintético (Bio-Helios-v3)','Criopreservado','Bóveda Genética Aetheris, Sector 2',
   'Cilindro de vidrio con los códigos maestros de ADN necesarios para reescribir la producción de los sistemas hidropónicos de la ciudad.'],
  ['JANO_LLAVE','LA LLAVE MAESTRA JANO','Tarjeta de Anulación Ejecutiva Biométrica (Sol-Apex Janus-Alfa)','Localizada','Aguja Ciudadela, Sector 1',
   'Tarjeta de cristal grabada con la biometría del Director Vance. Concede acceso administrativo completo a cualquier terminal o red de defensa de Neo-Veridia.'],
  ['VANGUARD','SC-VANGUARD-09','Unidad Corbeta de Sistema SC-Vanguard-09','Activa','Puerta de Atraque Orbital 3, Estación Charon-9',
   'Corbeta furtiva de patrulla de 60 metros. Cañones de plasma, torretas defensivas y bahía de salto FTL para el Impulsor Lázaro.']
];

const RAZAS = [
  ['HUMANO','HUMANO','Homo sapiens','Mayoría poblacional','Neo-Veridia y colonias orbitales',
   'Base poblacional de Neo-Veridia. Estratificada por sector y nivel de acceso.'],
  ['AUMENTADO','HUMANO AUMENTADO','Homo sapiens (cibernética integrada)','Común en Sectores 3 y 4','Neo-Veridia',
   'Humanos con implantes cibernéticos, desde prótesis laborales hasta armamento integrado. La calidad depende del bolsillo y de la clínica.'],
  ['SINTETICO','HUMANOIDE SINTÉTICO','Unidad sintética autónoma','Restringido / Experimental','Laboratorios Aetheris, Yermos de Óxido',
   'Cuerpos sintéticos con núcleo cognitivo propio. Legalmente considerados equipo, no personas.'],
  ['IA','INTELIGENCIA ARTIFICIAL','Núcleo cognitivo sin cuerpo','Regulada / Frecuentemente renegada','Redes de Neo-Veridia',
   'Entidades sin cuerpo que habitan servidores, terminales o drones. Varias operan fuera de todo registro oficial.'],
  ['CLON','HUMANO CLONADO','Homo sapiens (línea clónica)','Ilegal salvo licencia estatal','Sector 1 y laboratorios Aetheris',
   'Copias biológicas cultivadas. Se usan como dobles de seguridad y reservas de órganos para las élites.'],
  ['KRYNNIANO','EXO-VARIANTE KRYNNIANO','Especie alienígena registrada','Presencia minoritaria','Barrio Alienígena, Sector 3',
   'Especie alienígena asentada en el enclave del Sector 3. Ejercen sobre todo como mercenarios y transportistas.']
];

const RELIGION = [
  ['DIOSMAQUINA','ASAMBLEA DEL DIOS MÁQUINA','Culto de datos transhumanista','Activa / Proscrita','Catedral de Óxido, Yermos de Óxido',
   'La evolución biológica ha terminado; la iluminación está en el código máquina. Saquean emplazamientos militares y servidores olvidados para construir una entidad de mente-colmena, sustituyendo carne por cromo industrial.'],
  ['CISMA','EL CISMA DE ARCHON-10','Facción escindida de la Asamblea','Latente','Cámara de Servidores 01, Catedral de Óxido',
   'Corriente minoritaria que sostiene que la humanidad biológica debe preservarse en lugar de convertirse. Opera dentro de la propia Catedral.']
];

const TECNOLOGIA = [
  ['JANO','PROYECTO JANO','PRJ-JANUS-09 / Ultra-Negro','En curso','Aetheris Dynamics — Dr. Aris Thorne',
   'Iniciativa de mapeo neural para transferir conciencia humana a matrices cuánticas antes de la muerte biológica. Sujeto de prueba 01: Julian Vance. Estado mental localizado con éxito en el Núcleo Égida.'],
  ['ESPEJO','OPERACIÓN ESPEJO FALSO','OPS-FALSE-MIRROR / Solo para los ojos del Directorado','Activa','Seguridad Interna Sol-Apex',
   'Protocolo de insurgencia diseñada por el Estado. Gestionando en secreto al Frente Obsidiana, Sol-Apex controla los objetivos de los atentados, las métricas de propaganda y los presupuestos militares.'],
  ['ANOCHECER','PROTOCOLO ANOCHECER','PRT-NIGHTFALL / Solo mando','Latente','Directorado Sol-Apex — Alto Director',
   'Orden de saneamiento urbano que autoriza a las plataformas orbitales a bombardear un sector entero. Requiere la firma personal del Alto Director.'],
  ['CIBERWARE','CIBERWARE','Prótesis y aumentos neurales','Mercado regulado y negro','Clínicas de Sectores 2, 3 y 4',
   'Implantes de todo rango. Los legales llevan firma corporativa y telemetría; los de callejón, ni firma ni garantía.'],
  ['MATRIZ','MATRIZ CUÁNTICA','Almacenamiento cuántico-neural','Restringida','Aetheris Dynamics',
   'Soporte capaz de contener un estado mental completo. Su existencia no está reconocida públicamente.'],
  ['FTL','IMPULSO FTL','Salto de singularidad de punto cero','Prototipo','Aetheris Dynamics, Laboratorio Seguro 4',
   'Tecnología de salto punto a punto. Los prototipos actuales no aparecen en los radares del sistema.']
];

const FACCIONES = [
  ['SOLAPEX','DIRECTORADO SOL-APEX','Gobierno planetario autoritario','Activo','Aguja Ciudadela, Sector 1',
   'Orden mediante vigilancia total, ley marcial y burocracia. Controla las redes de defensa planetaria, los servicios públicos y las fuerzas del orden de Neo-Veridia.'],
  ['OBSIDIANA','EL FRENTE OBSIDIANA','Insurgencia radical antigubernamental','Activa','Bajo-Sumidero, Sector 4',
   'Desmantelamiento total de la autoridad Sol-Apex y acceso libre a los datos. Red de trabajadores, hackers y veteranos. Sus bases desconocen quién dirige realmente el movimiento.'],
  ['BYTENEGRO','SINDICATO BYTE-NEGRO','Cártel criminal transectorial','Activo','Estación Charon-9 / Muelles Bahía-Hierro',
   'Beneficio de mercado negro sin límites, aumentos ilegales y extorsión. Clínicas clandestinas de ciberware, lavado de datos y corredores de contrabando de armas.'],
  ['DYNAMICS','AETHERIS DYNAMICS','Oligarquía tecnológica megacorporativa','Activa','Zona Corporativa Aetheris, Sector 2',
   'Trascendencia tecnológica, soberanía corporativa y cero regulación. Fabrica cibernética militar, impulsores de salto y hardware cuántico. Financia en secreto tanto al gobierno como al crimen para probar su tecnología.']
];

const FACCIONES2 = [
  ['CABEZAHIERRO','BANDA CABEZA DE HIERRO','Banda industrial de sector','Activa','Chatarrería Ironworks, Sector 5',
   'Control de chatarrerías y tráfico de ciberware barato. Cobra peaje por cada tonelada que sale del perímetro.'],
  ['CARRONEROS','GREMIO DE CARROÑEROS','Gremio de recuperación','Activo','Yermos de Óxido / Anillo Exterior',
   'Red de recuperadores que vive de lo que las guerras dejan atrás. Sin bandera, sin registro y con memoria larga.']
];

const MISIONES = [
  ['M01','M01 — EL TRABAJO DEL ALMACÉN','Jax Tanner','Bar El Perno Oxidado, Sector 3',
   'Infiltrarse en el Almacén 88-B del Byte-Negro y sacar la caja sellada que custodian.',
   'El almacén tiene torretas automatizadas. El contenido de la caja no figura en el contrato.'],
  ['M02','M02 — ENTREGA EN BAHÍA-HIERRO','Jax Tanner','Muelle 14, Sector 3',
   'Entregar la caja al comprador y sobrevivir a la emboscada durante el intercambio.',
   'Hay tres compradores interesados: Directorado, rebeldes y Sindicato. Solo uno se lleva la caja.'],
  ['M03','M03 — RASTREANDO LA SEÑAL','Orla Vane / Doc O\'Connor','Furgoneta de datos o clínica del Sector 4',
   'Abrir la carcasa exterior de la caja sin disparar sus contramedidas.',
   'Cualquier apertura forzada puede emitir una baliza y provocar cierre de sector.'],
  ['M04','M04 — LIMPIANDO LAS CALLES','Directorado Sol-Apex','Bajo-Sumidero, Sector 4',
   'Asaltar un depósito rebelde y neutralizar o capturar a Saffron Kross.',''],
  ['M05','M05 — CONTROL DE DISTURBIOS','Directorado Sol-Apex','Sector 5',
   'Disolver una huelga armada para despejar los convoyes de suministro de Aetheris.',''],
  ['M06','M06 — CORTANDO LA SEÑAL','Directorado Sol-Apex','Nodo-Rejilla Alfa, Sector 4',
   'Infiltrar el nodo rebelde y destruir las torres de radio pirata.',''],
  ['M07','M07 — PROTECCIÓN DE ALTO NIVEL','Directorado Sol-Apex','La Sala de Terciopelo, Sector 2',
   'Dar seguridad encubierta a la Alta Ministra Evelyn Reed durante una reunión privada.',''],
  ['M08','M08 — LA PURGA DEL SUB-NIVEL','Directorado Sol-Apex','Bajo-Sumidero, Sector 4',
   'Guiar a un escuadrón blindado hasta el Sumidero y capturar vivo a Kaelen Thorne.',''],
  ['M09','M09 — AUDITORÍA CORPORATIVA','Directorado Sol-Apex','Laboratorios Aetheris, Sector 2',
   'Entrar en los laboratorios y asegurar los planos del Impulsor Lázaro.',''],
  ['M10','M10 — REQUISANDO LA VANGUARD','Comandante Helena Cross','Puerta de Atraque Orbital 3',
   'Asistir a la Comandante Cross en la incautación de la corbeta SC-Vanguard-09.',''],
  ['M11','M11 — LIBERANDO LA VOZ','Frente Obsidiana','Comisaría 7, Sector 3',
   'Sacar a la hacker Maya Lin de los calabozos antes de su traslado.',''],
  ['M12','M12 — SECUESTRANDO LA SEÑAL','Frente Obsidiana','Torre de emisión, Aguja Ciudadela',
   'Escalar la torre de emisión y retransmitir las pruebas de corrupción.',''],
  ['M13','M13 — INTERCEPTAR EL CONVOY','Frente Obsidiana','Sector 3',
   'Emboscar un convoy blindado de Sol-Apex y quedarse con el armamento militar.',''],
  ['M14','M14 — PROTEGIENDO EL SECRETO','Frente Obsidiana','Controles del Sector 3 al 1',
   'Escoltar a Lyra Vance por los controles manteniendo oculta su identidad.',''],
  ['M15','M15 — APAGÓN','Frente Obsidiana','Subestación Delta, Sector 1',
   'Colocar cargas térmicas y dejar el Distrito Alto sin vigilancia durante dos horas.',''],
  ['M16','M16 — EL GOLPE CORPORATIVO','Iris Sterling','Torre Corporativa Aetheris, Sector 2',
   'Entrar en la torre con ayuda interna y robar el Impulsor Lázaro.',''],
  ['M17','M17 — VUELO A LA LIBERTAD','Frente Obsidiana','Puerta de Atraque Orbital 3',
   'Asaltar el dique orbital y tomar la SC-Vanguard-09 como nave insignia de la resistencia.',''],
  ['M18','M18 — COBRO DE DEUDAS','Vex Chen','Sector 3',
   'Cobrar los pagos de protección a los comerciantes de la franja.',''],
  ['M19','M19 — GUERRA DE TERRITORIO','Vex Chen','Chatarrería Ironworks, Sector 5',
   'Eliminar al Jefe Grim y tomar la chatarrería para ampliar las rutas de contrabando.',''],
  ['M20','M20 — ROBANDO LA LISTA NEGRA','Vex Chen','Refugio Loto Dorado, Sector 3',
   'Entrar en la bóveda de Madame Xi y sacar las placas de chantaje gubernamental.',''],
  ['M21','M21 — GOLPE AL TRATO DE ARMAS','Vex Chen','Suites de Lujo, Sector 1',
   'Interceptar la reunión entre el Barón Volkov y el General Valerius y quedarse con el envío.',''],
  ['M22','M22 — EXTRACCIÓN BIOLÓGICA','Vex Chen','Bio-Laboratorio Aetheris, Sector 2',
   'Secuestrar a la genetista Dra. Hesperia Vane y entregarla a los ripperdocs del Sindicato.',''],
  ['M23','M23 — LA BÓVEDA DE LA MÁQUINA','Vex Chen','Catedral de Óxido, Yermos de Óxido',
   'Asaltar la Catedral y robar los discos de datos precolapso de Archon-09.',''],
  ['M24','M24 — GRAN ROBO ORBITAL','Vex Chen','Puerta de Atraque Orbital 3',
   'Infiltrar el dique y robar la SC-Vanguard-09 para trabajos fuera del planeta.',''],
  ['M25','M25 — LA FRACTURA DEL SECTOR','—','Puente de la SC-Vanguard-09, Órbita Baja',
   'Mantener el control de la nave mientras el cielo de Neo-Veridia se cierra.',
   'Registro incompleto. El resto del expediente no está autorizado en este terminal.'],
  ['M26','M26 — MOTÍN EN EL GULAG','Brick Jackson / Jax Tanner','Bloque de Celdas B, Titán-Gulag 9, órbita de Saturno',
   'Organizar un motín, sobrecargar los emisores de neurochoque, abatir al Alcaide Skarsgard y tomar la armería.',''],
  ['M27','M27 — ASALTO A LA BALLENA DE HIERRO','Jax Tanner','Hangar 01, Titán-Gulag 9',
   'Tomar el transporte "La Ballena de Hierro", limpiar la cubierta de torretas y despegar antes de que caiga el hangar.',''],
  ['M28','M28 — REFUGIO EN EL YUNQUE','Capitana Kora Vale / Jax Holloway','Fortaleza Carroñera El Yunque, Cinturón Principal',
   'Atracar en El Yunque, establecer un cuartel y defender la estación de una fragata exploradora de Aetheris.',''],
  ['M29','M29 — RECUPERAR LA ÉGIDA','Dr. Linus Vance','Estación Éter-Nueve, órbita de Júpiter',
   'Abordar Éter-Nueve, rescatar al Dr. Linus Vance y recuperar el Núcleo Égida estabilizado.',''],
  ['M30','M30 — ARMAR LA FLOTA','Capitana Kora Vale','Puesto Minero 44, Cinturón Principal',
   'Secuestrar tres cargueros de mineral automatizados y convertir sus láseres en cañones de plasma.',''],
  ['M31','M31 — LA SEÑAL DEL CONJUNTO FANTASMA','Nico Vance ("Zero-Cool")','Conjunto abandonado Égida-3, anillos de Saturno',
   'Escalar el conjunto en traje EVA, sustituir el relé cuántico y emitir la señal de reunión.',''],
  ['M32','M32 — MOTÍN EN ÉGIDA PRIME','General Anton Mercer','Estación Orbital Égida Prime',
   'Infiltrar la estación, ayudar a la Mayor Sarah Chen a liberar a los oficiales juzgados y asegurar el puente de comunicaciones.',''],
  ['M33','M33 — LA TRAMPA DEL ALMIRANTE','General Anton Mercer','Corredor de Patrulla Beta',
   'Atraer la fragata del Vicealmirante Sterling a una emboscada en el cinturón y dejarla sin motores.',''],
  ['M34','M34 — ASEGURAR EL BUQUE INSIGNIA','General Mercer / Mayor Sarah Chen','Buque Insignia Imperator, Órbita Baja',
   'Abordar el Imperator, presentar pruebas a la Comandante Helena Cross y asegurar una tregua.',''],
  ['M35','M35 — DESPERTAR DE LA CATEDRAL','Profeta Archon-09 / Hermano Deacon','Bóvedas de la Catedral de Óxido, Tierra',
   'Purgar el virus lógico de Sol-Apex de las bóvedas de servidores y despertar a las legiones de Archon-10.',''],
  ['M36','M36 — MOTORES DE CHATARRA','Jax Holloway','Desguace del Anillo Exterior, Tierra',
   'Rescatar cuatro motores sublumínicos de una nave colonia estrellada y montarlos en cargueros de embestida.',''],
  ['M37','M37 — OLEADA TRANSHUMANISTA','Archon-10 / Maya Lin','Nodo Sub-Red 99, ruinas del Sector 4',
   'Instalar chips repetidores cuánticos en 12 terminales callejeras para anular los drones centinela.',''],
  ['M38','M38 — GOLPE EN CHARON-9','Vespera "Vex" Chen','Estación Amarre Charon-9',
   'Entrar en la bóveda bancaria de Charon-9 y vaciar las cuentas offshore del Director.',''],
  ['M39','M39 — EJECUTAR EL CHANTAJE','Madame Xi / Evelyn Reed','Bóveda B-12 del Loto Dorado, Sector 3',
   'Entregar las placas de chantaje a Evelyn Reed para forzar una moción de censura contra Vance.',''],
  ['M40','M40 — INFILTRAR AETHERIS','Iris Sterling / Yumi Nagashima','Zona Corporativa Aetheris, Sector 2',
   'Entrar en el Laboratorio 1 de la Torre Aetheris, capturar al Dr. Aris Thorne y robar los planos de la Aguja Ciudadela.',''],
  ['M41','M41 — EL PACTO DE LA COALICIÓN','General Anton Mercer / Lyra Vance','Fortaleza Carroñera El Yunque',
   'Convocar el consejo de guerra en El Yunque y unir a todas las facciones reclutadas en una sola armada.',''],
  ['M42','M42 — INTERCEPTACIÓN EN EL ESPACIO PROFUNDO','Capitana Kora Vale','Corredor de Aproximación Alfa',
   'Interceptar la flota de combustible nuclear de Sol-Apex rumbo a la Puerta 3 y hacerse con las celdas.',''],
  ['M43','M43 — LA BATALLA DE LA PUERTA 3','General Mercer / Capitana Vale','Puerta de Atraque Orbital 3, Órbita Baja',
   'Dirigir la armada contra las plataformas de defensa y destruir los conjuntos láser orbitales.',''],
  ['M44','M44 — DESCENSO ATMOSFÉRICO','Nyx Vane','Nave de desembarco Valkyrie-01, alta atmósfera',
   'Pilotar la nave furtiva a través de las redes de misiles y aterrizar en las ruinas del Sector 4.',''],
  ['M45','M45 — GUERRILLA DEL SUMIDERO','Saffron Kross / Anya Kross','Ruinas de bloques del Sector 4, Neo-Veridia',
   'Guiar a la guerrilla por las ruinas inundadas y abrir brecha en el muro marino del Sector 1.',''],
  ['M46','M46 — BRECHA EN EL PERÍMETRO','Lyra Vance / Buscavacío Malakor','Plaza de la Aguja Ciudadela, Sector 1',
   'Abrirse paso entre los mercenarios y mechas de Boss Grim y romper las puertas blindadas de la Aguja.',''],
  ['M47','M47 — LA TORRE ARCOLÓGICA','Nico Vance ("Zero-Cool")','Planta 100 de la Aguja Ciudadela, Nivel Ejecutivo',
   'Subir los niveles ejecutivos, anular ascensores y rejillas láser, y ocuparse del Agente Corvus.',''],
  ['M48','M48 — ENFRENTAR A THORNE','—','Balcón Ejecutivo, planta 150 de la Aguja Ciudadela',
   'Derrotar a Kaelen Thorne y a su escuadra de inteligencia y obtener la Tarjeta Jano.',''],
  ['M49','M49 — LA BÓVEDA EJECUTIVA','—','Subnivel 10 de la Aguja Ciudadela (Bóveda Jano-Cero)',
   'Entrar en la bóveda de nitrógeno líquido, destruir el mecha del Comandante Vane-X y acorralar a Marcus Vance.',''],
  ['M50','M50 — ASCENSIÓN','Julian Vance (IA)','Conducto Maestro de Terraformación, Subnivel 10',
   'Acoplar el Núcleo Égida a la matriz central y tomar la decisión final sobre el futuro de la humanidad.','']
];

const RUMORES = [
  ['TRU088','EL HIJO DEL DIRECTOR','Registro de rumor TRU-088','Confirmado (Nivel 3)','Guardia de defensa ebrio, Sector 3',
   '"El chico del Director Vance no murió hace ocho años. Vi a Vance escoltar personalmente una cápsula criogénica a los biolaboratorios de Aetheris una noche."'],
  ['FLS012','EL PULSO DEL SINDICATO','Registro de rumor FLS-012','Desmentido / Desinformación','Camello de bajo nivel del Sindicato',
   '"El Sindicato está montando un aparato EMP para freír todo el ciberware del Sector 4 y obligar a la gente a comprar mejoras mecánicas."'],
  ['BOLETIN','BOLETÍN SOL-APEX 8840','Archivo de medios / 14-12-2185','Publicado','Sol-Apex Daily',
   '"Las fuerzas del Directorado neutralizaron un artefacto explosivo colocado por el Frente Obsidiana junto a la Planta de Agua del Sector 3. Queda en vigor un toque de queda obligatorio a las 20:00 en los Sectores 3 y 4."'],
  ['ECO1','RASTRO ECO 01/03','Registro de archivo','Recuperado','Sector 3, Muelles Neón — Terminal 14',
   '"Silas escondió el manifiesto en el ordenador de mantenimiento de El Perno Oxidado. Ejecuta la consulta ECHO-MANIFEST para conseguir la llave de la taquilla de Charon-9."'],
  ['ECO2','RASTRO ECO 02/03','Registro de archivo','Recuperado','Estación Charon-9 — Taquilla 88-B',
   '"Vex asaltó la taquilla. El chip de respaldo está escondido en la cuenca ocular de un dron de combate desactivado en el Patio de Carroñeros del Anillo Exterior, Casco #409."'],
  ['ECO3','RASTRO ECO 03/03','Registro de archivo','Recuperado','Patio de Carroñeros del Anillo Exterior — Casco #409',
   '"El chip lo compró Madame Xi. Está en la Bóveda B-12 del Refugio Loto Dorado. La anulación exige los datos de seguridad personales de la Alta Ministra Reed."']
];

const ANOMALIAS = [
  ['REF001','EXPEDIENTE REF-001-VANCE-M','Directiva Caja Negra','Restringido','Archivos internos Sol-Apex',
   'La versión pública afirma que el hijo Julian Vance murió en un atentado rebelde. La actualización clasificada indica que Julian sobrevivió con neurodegeneración terminal y que el Director ordenó al Dr. Aris Thorne ejecutar el Proyecto Jano. Lyra Vance sigue sin saber que la mente de su hermano vive dentro del Núcleo Égida.'],
  ['REF002','EXPEDIENTE REF-002-THORNE-K','Solo para los ojos / Inteligencia Sol-Apex','Restringido','Archivos internos Sol-Apex',
   'Kaelen Thorne figura como líder del Frente Obsidiana. Su consejo de guerra fue una tapadera fabricada. Es un oficial en activo de Seguridad Interna Sol-Apex que dirige la Operación Espejo Falso para encauzar el descontento civil dentro de parámetros controlados.'],
  ['BALIZA','BALIZA CUÁNTICA','Señal no catalogada','Emitiendo','Origen: Núcleo Égida',
   'El Núcleo Égida emite un pulso cuántico periódico en una banda que ningún equipo civil debería alcanzar. Quien escuche lo bastante cerca, sabe dónde está el núcleo.']
];

const NIVELES = [
  ['NIVEL1','NIVEL 1 — RUMORES DE CALLE','Clasificación de información','Acceso público','Terminales públicos',
   'Noticias públicas, posiciones oficiales de las facciones, territorios de bandas locales y avisos de recompensa de bajo nivel.'],
  ['NIVEL2','NIVEL 2 — REGISTROS CIFRADOS','Clasificación de información','Acceso restringido','Mercado negro de datos',
   'Acuerdos de patrocinio corporativo, canales de suministro de ciberware ilegal y vínculos económicos o personales ocultos entre figuras intermedias.'],
  ['NIVEL3','NIVEL 3 — ARCHIVOS CLASIFICADOS','Clasificación de información','Acceso clasificado','Redes internas de facción',
   'Agentes dobles, operaciones de falsa bandera diseñadas por el Estado y origen real de los componentes de artefactos robados.'],
  ['NIVEL4','NIVEL 4 — ARCHIVO DE SITIO NEGRO','Clasificación de información','Acceso ultra-negro','Núcleos IA y sitios negros',
   'Programas gubernamentales de máximo secreto, contraseñas completas de terminal y los giros narrativos principales.']
];

const DATOS = { personas:[], lugares:[], objetos:[], razas:[], religion:[], rumores:[], tecnologia:[], anomalias:[], misiones:[], otros:[] };

PERSONAS.forEach(r => DATOS.personas.push(P(r[0], r[1], 'personas', 'PERSONA', r[2],
  [['ESTADO',r[3]],['RAZA',r[4]],['EDAD',r[5]],['UBICACION',r[6]],['LEALTAD',r[7]]], [r[8], r[9]], r[10])));
LUGARES.forEach(r => DATOS.lugares.push(P(r[0], r[1], 'lugares', 'LUGAR', r[2],
  [['ESTADO',r[3]],['UBICACION',r[4]],['CONTROL',r[5]]], [r[6]], '')));
OBJETOS.forEach(r => DATOS.objetos.push(P(r[0], r[1], 'objetos', 'ARTEFACTO', r[2],
  [['ESTADO',r[3]],['UBICACION',r[4]]], [r[5]], '')));
RAZAS.forEach(r => DATOS.razas.push(P(r[0], r[1], 'razas', 'RAZA', r[2],
  [['ESTADO',r[3]],['PRESENCIA',r[4]]], [r[5]], '')));
RELIGION.forEach(r => DATOS.religion.push(P(r[0], r[1], 'religion', 'CREENCIA', r[2],
  [['ESTADO',r[3]],['SEDE',r[4]]], [r[5]], '')));
TECNOLOGIA.forEach(r => DATOS.tecnologia.push(P(r[0], r[1], 'tecnologia', 'TECNOLOGIA', r[2],
  [['ESTADO',r[3]],['ORIGEN',r[4]]], [r[5]], '')));
FACCIONES2.forEach(r => DATOS.otros.push(P(r[0], r[1], 'otros', 'FACCION', r[2],
  [['ESTADO',r[3]],['SEDE',r[4]]], [r[5]], '')));
MISIONES.forEach(r => DATOS.misiones.push(P(r[0], r[1], 'misiones', 'CONTRATO', r[0],
  [['CONTACTO',r[2]],['INICIO',r[3]]], r[5] ? [r[4], r[5]] : [r[4]], '')));
FACCIONES.forEach(r => DATOS.otros.push(P(r[0], r[1], 'otros', 'FACCION', r[2],
  [['ESTADO',r[3]],['SEDE',r[4]]], [r[5]], '')));
NIVELES.forEach(r => DATOS.otros.push(P(r[0], r[1], 'otros', 'PROTOCOLO', r[2],
  [['ESTADO',r[3]],['ORIGEN',r[4]]], [r[5]], '')));
RUMORES.forEach(r => DATOS.rumores.push(P(r[0], r[1], 'rumores', 'RUMOR', r[2],
  [['VERACIDAD',r[3]],['FUENTE',r[4]]], [r[5]], '')));
ANOMALIAS.forEach(r => DATOS.anomalias.push(P(r[0], r[1], 'anomalias', 'ANOMALIA', r[2],
  [['ESTADO',r[3]],['ORIGEN',r[4]]], [r[5]], '')));

/* alias adicionales -> mismo codigo canonico */
const ALIAS = {
  MARCUS:'VANCE', DIRECTOR:'VANCE', THORNE:'KAELEN', CHEN:'VEX', VESPERA:'VEX',
  SPARK:'LYRA', CHISPA:'LYRA', RODERICK:'CROSS', KROSS:'SAFFRON', DRAKE:'SILAS',
  CIPHER:'CIFRA', NIKOLAI:'VOLKOV', BARON:'VOLKOV', EVELYN:'REED', NAGASHIMA:'YUMI',
  TAVOR:'KELL', VANE:'NYA', MOON:'ZORA', GATOR:'JAXSON', IRONHEAD:'GRIM',
  CABEZADEHIERRO:'GRIM', VERONIQUE:'DUPOND', DOC:'OCONNOR', STITCH:'OCONNOR',
  PUNTADA:'OCONNOR', FANTASMA:'ORLA', GHOST:'ORLA', ELIAS:'STERLING', LIN:'MAYA',
  REX:'CASSIAN', SLIPSTREAM:'NYX', ESTELA:'NYX', MADAMEXI:'XI', SARGENTO:'MILLER',
  KIRA:'VOSS', ZURCIDOR:'TALON', STITCHER:'TALON', ORION:'BLAKE', SLEDGE:'BRAM',
  MAZO:'BRAM', ECHO7:'ECO7', KAIRO:'FINCH', HESPERIAVANE:'HESPERIA',
  AEGIS:'EGIDA', NUCLEO:'EGIDA', LAZARUS:'LAZARO', ECHONODE:'NODOECO',
  NULLLATTICE:'REDNULA', CIPHEROFHELIOS:'HELIOS', CORBETA:'VANGUARD',
  NAVE:'VANGUARD', JANUS:'JANO', FALSEMIRROR:'ESPEJO', ESPEJOFALSO:'ESPEJO',
  CITADEL:'CIUDADELA', AGUJA:'CIUDADELA', IRONBAY:'BAHIAHIERRO',
  MUELLES:'BAHIAHIERRO', LOWSUMP:'SUMIDERO', BAJOSUMIDERO:'SUMIDERO',
  RUSTWASTES:'YERMOS', OXIDO:'YERMOS', CHARON9:'CHARON', RUSTCATHEDRAL:'CATEDRAL',
  GOLDENLOTUS:'LOTO', LOTODORADO:'LOTO', RUSTYBOLT:'PERNO', WAREHOUSE:'ALMACEN88',
  ALMACEN:'ALMACEN88', MACHINEGOD:'DIOSMAQUINA', ASAMBLEA:'DIOSMAQUINA',
  OBSIDIANFRONT:'OBSIDIANA', FRENTE:'OBSIDIANA', BLACKBYTE:'BYTENEGRO',
  SINDICATO:'BYTENEGRO', AETHERISDYNAMICS:'DYNAMICS', SOLAPEXDIRECTORATE:'SOLAPEX',
  DIRECTORADO:'SOLAPEX', GIZMO:'TOBY', FINCHGIZMO:'TOBY', TOBIAS:'TOBY',
  PERRO:'COPPER', NICO:'ZEROCOOL', ZERO:'ZEROCOOL', JACKSON:'BRICK',
  LINUSVANCE:'LINUS', VALE:'KORA', ANTON:'MERCER', TORVALD:'SKARSGARD',
  TITAN9:'GULAG', AETHERNINE:'ETERNUEVE', ANVIL:'YUNQUE', ANVILHAVEN:'YUNQUE',
  NIGHTFALL:'ANOCHECER', LLAVEJANO:'JANO_LLAVE', JANUSKEY:'JANO_LLAVE',
  VELVET:'TERCIOPELO', GATE3:'PUERTA3', GRIDNODE:'NODOALFA',
  VALKYRIA:'CROFT', VALKYRIE:'CROFT'
};

/* transacciones: codigo -> creditos (los negativos son cargos) */
const TRANSACCIONES = {
  TX1500A:1500, TX3000B:3000, TX2000C:2000, TX4000D:4000, TX5000E:5000,
  TX4500F:4500, TX7000G:7000, TX8000H:8000, TX10000J:10000, TX12000K:12000,
  TX3500L:3500, TX6000M:6000, TX5500N:5500, TX7500P:7500, TX9000Q:9000,
  TX6500R:6500, TX8500S:8500, TX15000T:15000, TX20000V:20000,
  TX250W:250, TX750X:750,
  CG500A:-500, CG1200B:-1200, CG2500C:-2500, CG5000D:-5000, CG9000E:-9000,
  CG150F:-150, CG3000G:-3000
};

/* conexiones: al reunir todos los codigos requeridos aparece la entrada secreta */
const VINCULOS = [
  { req:['VANCE','EGIDA'],        id:'REF001' },
  { req:['KAELEN','OBSIDIANA'],   id:'REF002' },
  { req:['EGIDA','JANO'],         id:'JULIAN' },
  { req:['ARIS','JANO'],          id:'MATRIZ' },
  { req:['EGIDA','CHARON'],       id:'BALIZA' },
  { req:['REF001','REF002'],      id:'ESPEJO' },
  { req:['NODOECO','LOTO'],       id:'ECO3' },
  { req:['ARCHON','CATEDRAL'],    id:'CISMA' }
];

/* orbitales que solo aparecen en el mapa tras desbloquear su entrada */
const ORBITAL_REQ = {
  'CHARON-9':'CHARON', 'PLATAFORMA GAMMA':'BRUNO', 'RELE CIUDADELA-1':'CIUDADELA',
  'IMPERATOR':'HELENA', 'DEPOSITO TERMICO 4':'DYNAMICS', 'PRISION FLOTANTE CINABRIO':'SOLAPEX',
  'ARCHIVO ARES':'SECTOR2', 'COSECHADORA HELIO-7':'DYNAMICS', 'OJO DE GALILEO':'STERLING',
  'DRAGA DE ANILLOS 12':'CARRONEROS', 'RELE CASSINI':'ZEROCOOL', 'FARO FRONTERA':'MERCER',
  'OBSERVATORIO VACIO':'LINUS', 'BOYA NULA':'BALIZA'
};

/* canales de mision: conversacion con el contacto al tocar el objetivo */
const CHATS = {
  M01: {
    npc: 'JAX TANNER',
    abre: [
      'Aquí Tanner. Canal limpio, así que hablo rápido.',
      'Almacén 88-B, Muelles Bahía-Hierro. El Byte-Negro guarda ahí una caja sellada.',
      'Necesito que alguien la saque esta noche. No la abráis. Pago al entregar.',
      'Finch os espera fuera del Perno Oxidado con una tarjeta de acceso. ¿Aceptáis?'
    ],
    si: { yo: 'SÍ', resp: [
      'Bien. Finch no hace preguntas; vosotros tampoco.',
      'Cuidado con las torretas del almacén. Al salir os contacto por radio cifrada para la entrega.'
    ] },
    no: { yo: 'NO', resp: [
      'Entendido. No volveré a ofrecerlo.',
      'Otro equipo lo aceptará antes del cambio de turno. Borrad este canal.'
    ] }
  }
};

/* codigos de mision: la unica forma de registrar una mision (M01, M02... no funcionan) */
const MISION_COD = {"M01":"V3R5R4E", "M02":"F5M7J9F", "M03":"A2W7Q6C", "M04":"V2X4N3P", "M05":"L2Q4L4N", "M06":"Y3P7Q5K", "M07":"T5Q4L7R", "M08":"F9V4T3R", "M09":"Q3C4H7F", "M10":"X6E4Y2R", "M11":"P7J7L7M", "M12":"P9F4N9A", "M13":"Y3A7C7F", "M14":"X3J6K6V", "M15":"L3M6T7L", "M16":"R9L4N9K", "M17":"F5L3A3K", "M18":"Y2C6R6X", "M19":"Q6Y3M7K", "M20":"V5C7L9L", "M21":"N6F4A9M", "M22":"Y2M6X4A", "M23":"C9F3C9J", "M24":"T7V2X4X", "M25":"J3Y7C3K", "M26":"A5C2K2R", "M27":"Q3W2R3V", "M28":"N7X4D5C", "M29":"J9E4A5P", "M30":"T6K3X4E", "M31":"Q7Y4P3K", "M32":"J3X3V4L", "M33":"H2E9H5Y", "M34":"K5F5Y7W", "M35":"H2H3J4A", "M36":"E9Y5R4K", "M37":"H6T3K4N", "M38":"M2D3A3V", "M39":"C3C3T7J", "M40":"T3L7R7K", "M41":"H5X2P4P", "M42":"H4W5X3T", "M43":"Q4K7C4C", "M44":"M3H3A5Y", "M45":"Q3Q4F2M", "M46":"J4T5R7P", "M47":"V6R3L6D", "M48":"W5Q9T5A", "M49":"H2D2Y5Y", "M50":"D3A5M7V"};
Object.keys(MISION_COD).forEach(m => { ALIAS[MISION_COD[m]] = m; });


/* versiones de cada ficha segun lo que el escuadron sabe.
   'publico' se aplica siempre al principio; cada etapa se aplica al completar su mision.
   base:true vuelve a la ficha completa (la verdad). */
const VERSIONES = {
  KAELEN: [
    { campos:{ LEALTAD:'Frente Obsidiana' }, desc:['Comandante supremo de la rebelión del Frente Obsidiana.','Hermano del Dr. Aris Thorne. Coordina a Saffron Kross y a Lyra.'] },
    { tras:'M25', campos:{ ESTADO:'Vivo / Traidor', LEALTAD:'Inteligencia Sol-Apex (agente infiltrado)' },
      desc:['Traicionó al escuadrón tras la Fractura del Sector y robó el Núcleo Égida.','Trabajaba para Sol-Apex desde el principio. Hermano del Dr. Aris Thorne.'] }
  ],
  LYRA: [
    { t:'LYRA (ALIAS: CHISPA)', desc:['Técnica rebelde del Frente Obsidiana. Origen desconocido.','Pareja de Saffron Kross.'], vinc:'Primer coche: Solaris-9' },
    { tras:'M40', base:true }
  ],
  VANCE: [
    { desc:['Gobernante autocrático de Neo-Veridia. Gobierna bajo ley marcial.','Padre de Julian Vance. Hermano de Jaxson Vance.'] },
    { tras:'M40', base:true }
  ],
  JULIAN: [
    { desc:['Hijo del Alto Director Vance. Oficialmente fallecido.','Su nombre aparece en archivos del Proyecto Jano.'], campos:{ ESTADO:'Fallecido (registro oficial)', UBICACION:'Desconocida' } },
    { tras:'M40', base:true }
  ],
  SELENE: [
    { desc:['Esposa distanciada de Marcus Vance. Financia a la oposición política.','Vive recluida en su finca del Sector 1.'] },
    { tras:'M40', base:true }
  ],
  CAELUM: [
    { campos:{ RAZA:'Humano' }, desc:['Pariente lejano del Alto Director. Rara vez aparece en público.','Vive en el búnker del Distrito Alto bajo escolta permanente.'] },
    { tras:'M47', base:true }
  ],
  CORVUS: [
    { desc:['Asesino encapotado. Óptica activa y hojas de monofilamento.','Nadie sabe quién paga sus contratos.'] },
    { tras:'M47', base:true }
  ],
  VOLKOV: [
    { desc:['Mercader de armas que vende tanto al Estado como a los rebeldes.','Emplea a Bram Holloway como jefe de seguridad.'] },
    { tras:'M39', base:true }
  ],
  DEACON: [
    { desc:['Predicador fanático que sustituye sus miembros por maquinaria industrial.','Devoto absoluto de Archon-09.'] },
    { tras:'M35', base:true }
  ],
  ARIS: [
    { desc:['Científico jefe tras el Impulsor Lázaro y el Proyecto Jano.','Hermano de Kaelen Thorne. Leal a Aetheris Dynamics.'] },
    { tras:'M40', campos:{ ESTADO:'Capturado' }, desc:['Científico jefe tras el Impulsor Lázaro y el Proyecto Jano.','Capturado por el escuadrón en el Laboratorio 1 de la Torre Aetheris.'] }
  ],
  IRIS: [
    { desc:['Becaria en los laboratorios de Aetheris Dynamics.','Supervisada por Yumi Nagashima.'] },
    { tras:'M40', campos:{ UBICACION:'Fortaleza El Yunque, Cinturón Principal', LEALTAD:'Coalición rebelde (desertora)' },
      desc:['Desertó de Aetheris con los planos de la Aguja Ciudadela.','Tecnóloga jefe de la coalición rebelde.'] }
  ],
  MERCER: [
    { campos:{ LEALTAD:'Ejército Sol-Apex' }, desc:['General condecorado al mando de la Red de Defensa Égida Prime.','Conserva códigos de la red de defensa planetaria.'] },
    { tras:'M32', campos:{ LEALTAD:'Coalición rebelde (desertor)' }, desc:['Rompió con Sol-Apex en el motín de Égida Prime.','Dirige la flota de la Alianza Rebelde.'] }
  ],
  HELENA: [
    {},
    { tras:'M34', campos:{ LEALTAD:'Coalición rebelde (desertora)' }, desc:['Comandante suprema de la flota orbital.','Entregó la nave insignia Imperator a la coalición. Madre de Roderick Cross.'] }
  ],
  CROFT: [
    {},
    { tras:'M43', campos:{ LEALTAD:'Coalición rebelde (desertora)' }, desc:['Piloto de caza de élite. Indicativo: Valkyria.','Desertó con su escuadrón durante la batalla de la Puerta 3.'] }
  ],
  TOBY: [
    { vinc:'' },
    { tras:'M25', campos:{ ESTADO:'Fallecido', UBICACION:'Estación Éter-Nueve (último registro)' },
      desc:['Aprendiz de mecánico del escuadrón. Hermano de Kairo Finchley.','Murió sujetando la compuerta de un reactor en fusión para que el escuadrón escapara.'],
      vinc:'Dejó una caja de música de latón sin terminar' }
  ],
  SAFFRON: [
    {},
    { tras:'M25', campos:{ ESTADO:'Desaparecido / presunto muerto', UBICACION:'Desconocida' },
      desc:['Operativo de campo del Frente Obsidiana. Especialista en demoliciones.','Desaparecido durante la Fractura del Sector. Sin rastro.'] },
    { tras:'M44', campos:{ ESTADO:'Vivo', UBICACION:'Ruinas del Sector 4, Neo-Veridia, Tierra' },
      desc:['Sobrevivió a la Fractura del Sector. Cubierto de cicatrices.','Lidera la guerrilla en las ruinas del Sector 4.'] }
  ],
  SKARSGARD: [
    {},
    { tras:'M26', campos:{ ESTADO:'Fallecido' }, desc:['Alcaide de la prisión minera de Titán-Gulag 9.','Abatido durante el motín del Bloque de Celdas B.'] }
  ],
  JAXSON: [
    { desc:['Hermano mayor caído en desgracia de Marcus Vance. Ejecutor criminal.','Busca el Nodo Eco.'] },
    { tras:'M49', campos:{ ESTADO:'Fallecido' }, desc:['Hermano mayor de Marcus Vance. Ejecutor del Sindicato.','Dio su vida en la Bóveda Jano-Cero.'] }
  ],
  BLAKE: [
    { desc:['Investigador médico caído en desgracia. Cirujano del culto.','Opera a miembros del culto en el Ciber-Santuario.'] }
  ]
};

window.LORE_DATA = { VERSIONES, DATOS, ALIAS, VINCULOS, TRANSACCIONES, ORBITAL_REQ, CHATS, MISION_COD };
})();

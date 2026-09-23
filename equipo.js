(function(){
/* Catalogo de equipo de Neo-Veridia. Precios en creditos (c).
   IMPORTANTE: el orden define el codigo de cada objeto. Añadir siempre al final. */
const W = (n, hab, d, m, mt, r, h, o, c, esp) => ({ n, cls:'ARMA', hab, d, m, mt, r, h, o, c, esp });
const B = (n, desc, sp, pen, c) => ({ n, cls:'BLINDAJE', desc, sp, pen, c });
const G = (n, desc, c) => ({ n, cls:'EQUIPO', desc, c });
const I = (n, grupo, inst, desc, c, hl) => ({ n, cls:'IMPLANTE', grupo, inst, desc, c, hl });
const M = (n, desc, c) => ({ n, cls:'MUNICION', desc, c, cant:10 });
const P = (n, clase, atk, def, rez, desc, icono, c, per, spd) => ({ n, cls:'PROGRAMA', clase, atk, def, rez, desc, icono, c, per, spd });

const ITEMS = [
  W('PISTOLA MEDIA SA-9','Pistolas',2,12,'P. media',2,1,1,500,'Ninguno'),
  W('PISTOLA PESADA HIERRO-44','Pistolas',3,8,'P. pesada',2,1,1,1000,'Ninguno'),
  W('PISTOLA MUY PESADA "MAZO"','Pistolas',4,8,'P. muy pesada',1,1,0,1000,'Ninguno'),
  W('SUBFUSIL VESPA-30','Pistolas',2,30,'P. media',1,1,1,1000,'Automatico (3) / Fuego de supresion'),
  W('SUBFUSIL PESADO TORNADO','Pistolas',3,40,'P. pesada',1,1,0,1000,'Automatico (3) / Fuego de supresion'),
  W('ESCOPETA DE MUELLE','Armas largas',5,4,'Posta',1,2,0,5000,'Cartucho de dispersion'),
  W('FUSIL DE ASALTO SOL-APEX R4','Armas largas',5,25,'Fusil',1,2,0,5000,'Automatico (4) / Fuego de supresion'),
  W('FUSIL DE PRECISION LONGINUS','Armas largas',5,4,'Fusil',1,2,0,5000,'Ninguno'),
  W('BALLESTA DE CARBONO','Tiro con arco',4,0,'Virote',1,2,0,1000,'Flechas / virotes'),
  W('LANZAGRANADAS M-2','Armas pesadas',6,2,'Granada',1,2,0,5000,'Explosivo'),
  W('LANZACOHETES "ULTIMA PALABRA"','Armas pesadas',8,1,'Cohete',1,2,0,5000,'Explosivo'),

  B('CUERO DE NOMADA','Chaqueta reforzada de los clanes de los Yermos.',4,0,200),
  B('KEVLAR','Tejido integrado en ropa, chalecos o trajes de oficina.',7,0,500),
  B('ARMADURA LIGERA','Kevlar con mallas plasticas en el tejido.',11,0,1000),
  B('TRAJE CORPORAL','Piel de armagel sinterizado. Aloja un ciberterminal.',11,0,10000),
  B('ARMADURA MEDIA','Placas solidas y kevlar grueso. -2 REF, DES y MOV.',12,2,1000),
  B('ARMADURA PESADA','Kevlar denso con capas de malla. -2 REF, DES y MOV.',13,2,5000),
  B('ANTIFRAGMENTOS','Chaleco y pantalon de flak militar. -4 REF, DES y MOV.',15,4,5000),
  B('METALGEAR','Detiene casi todo. -4 REF, DES y MOV.',18,4,50000),
  B('ESCUDO ANTIBALAS','Policarbonato transparente. 10 PV, ocupa un brazo.',10,0,1000),

  G('AGENTE','Terminal personal con IA adaptativa. +2 a busqueda.',1000),
  G('AEROINYECTOR','Dispensador de farmacos de un solo uso.',500),
  G('MASCARA ANTISMOG','Filtra toxinas del aire del Sumidero.',200),
  G('GRABADORA DE AUDIO','24 horas de sonido en un chip de memoria.',1000),
  G('PROTECTORES AUDITIVOS','Inmunidad a efectos de ruido extremo.',10000),
  G('PRISMATICOS','Aumento x2 o x3.',500),
  G('VISOR DE BRAINDANCE','Reproduce grabaciones de experiencias.',10000),
  G('DETECTOR DE MICROFONOS','Pita a 2 m de un dispositivo de escucha.',5000),
  G('BOLSA DE CARGA','Bolsa para llevar cosas.',200),
  G('ANALIZADOR QUIMICO','Compara sustancias con una base de muestras.',10000),
  G('ORDENADOR','Portatil o de sobremesa.',500),
  G('CIBERTERMINAL','Terminal basico de intrusion. 7 ranuras.',5000),
  G('TELEFONO DESECHABLE','Llamadas. Facil de tirar.',500),
  G('CINTA AISLANTE','Varios colores, incluso fosforescente.',200),
  G('LINTERNA','Haz de 100 m. 10 horas de carga.',200),
  G('BARRA DE RACION','Una comida horrible en barra.',100),
  G('BARRA LUMINOSA','Ilumina 4 m durante 10 horas.',100),
  G('PISTOLA DE GARFIO','Cable de 30 m. No es un arma.',1000),
  G('ESPOSAS','Requiere CUERPO >10 para romperlas.',500),
  G('RASTREADOR','Sigue un emisor vinculado hasta 1,5 km.',5000),
  G('SACO DE DORMIR INFLABLE','Colchon autoinflable con saco.',200),
  G('GANZUAS','Abren cerraduras mecanicas.',200),
  G('MEDESCANER','+2 a Primeros Auxilios y Paramedicina.',10000),
  G('MALETIN MEDICO','Botiquin completo.',1000),
  G('CHIP DE MEMORIA','Almacenamiento de datos estandar.',100),
  G('RACION DE CAMPAÑA','Bolsa de comida autocalentable.',100),
  G('COMUNICADOR DE RADIO','Auricular. Alcance 1,5 km.',1000),
  G('DETECTOR DE RADAR','Pita a 100 m de un haz de radar activo.',5000),
  G('TRAJE ANTIRRADIACION','Protege de la radiacion.',10000),
  G('BENGALA','Ilumina 100 m durante 1 hora.',100),
  G('CUERDA (60 M)','Cuerda de nailon.',200),
  G('CODIFICADOR','Cifra y descifra comunicaciones.',5000),
  G('GAFAS INTELIGENTES','2 ranuras para opciones ciberopticas.',5000),
  G('BOLSA DE HERRAMIENTAS','Herramientas para reparar.',5000),
  G('TECNOESCANER','+2 a varias habilidades TEC.',10000),
  G('MULTIHERRAMIENTA','Herramienta todo en uno.',1000),
  G('VIAL DE BIOTOXINA','3d6 de daño. Ignora blindaje.',5000),
  G('VIAL DE VENENO','2d6 de daño. Ignora blindaje.',1000),
  G('VIDEOCAMARA','12 horas de audio y video.',1000),
  G('GAFAS DE VIRTUALIDAD','Proyecta el ciberespacio sobre la vista.',1000),

  I('BIOMONITOR','Moda','Tienda','Lectura subdermica de constantes vitales.',1000,0),
  I('PIEL QUIMICA','Moda','Tienda','Pigmentos que cambian el tono de la piel.',1000,0),
  I('HILOS EMP','Moda','Tienda','Lineas plateadas en patron de circuito.',100,0),
  I('TATUAJE DE LUZ','Moda','Tienda','Parches que proyectan tatuajes de color.',1000,0),
  I('LENTES CROMATICAS','Moda','Tienda','Lentes que cambian de color.',1000,0),
  I('RELOJ SUBDERMICO','Moda','Tienda','Reloj LED bajo la piel.',1000,0),
  I('TECNOCABELLO','Moda','Tienda','Pelo artificial luminoso.',1000,0),
  I('ENLACE NEURAL','Neural','Clinica','Sistema nervioso cableado. 5 ranuras.',5000,7),
  I('GRABADORA DE BRAINDANCE','Neural','Clinica','Graba experiencias. Requiere enlace neural.',5000,7),
  I('ZOCALO DE CHIPS','Neural','Clinica','Zocalo en la nuca. Requiere enlace neural.',5000,7),
  I('CONECTORES DE INTERFAZ','Neural','Clinica','Conexion directa a maquinas.',5000,7),
  I('KERENZIKOV','Neural','Clinica','Velocidad. +2 a iniciativa.',5000,14),
  I('SANDEVISTAN','Neural','Clinica','Accion: +3 a iniciativa durante un minuto.',5000,7),
  I('EDITOR DE DOLOR','Neural','Chip','Ignora penalizaciones por herida grave.',10000,14),
  I('CHIP DE HABILIDAD','Neural','Chip','Una habilidad a nivel 3.',5000,7),
  I('POTENCIADOR OLFATIVO','Neural','Chip','Rastreo por olor.',1000,7),
  I('POTENCIADOR TACTIL','Neural','Chip','Detecta movimiento a 20 m al tocar superficies.',1000,7),
  I('CIBEROJO','Optica','Clinica','Ojo artificial. 3 ranuras.',1000,7),
  I('ANTIDESLUMBRE','Optica','Tienda','Inmunidad a destellos. Emparejado.',1000,2),
  I('CHYRON','Optica','Tienda','Subpantalla en el campo de vision.',1000,2),
  I('DARDERA OCULAR','Optica','Clinica','Dardo de un disparo oculto en el ojo.',5000,2),
  I('POTENCIADOR DE IMAGEN','Optica','Tienda','+2 a Percepcion y lectura de labios.',5000,3),
  I('VISION NOCTURNA / IR / UV','Optica','Tienda','Ignora oscuridad, humo y niebla.',5000,3),
  I('MICROOPTICA','Optica','Clinica','Aumento x400.',1000,2),
  I('MICROVIDEO','Optica','Clinica','Camara en el ojo.',5000,2),
  I('MIRA DE PUNTERIA','Optica','Clinica','+1 a disparo apuntado.',5000,3),
  I('TELEOPTICA','Optica','Clinica','Detalle hasta 800 m.',5000,3),
  I('SUITE CIBERAUDITIVA','Audio','Clinica','3 ranuras de audio.',5000,7),
  I('OIDO AMPLIFICADO','Audio','Tienda','+2 a Percepcion auditiva.',1000,3),
  I('AGENTE INTERNO','Audio','Tienda','Agente completo implantado.',1000,3),
  I('ANALIZADOR DE ESTRES VOCAL','Audio','Tienda','+2 a Percepcion humana e Interrogatorio.',1000,3),
  I('RADIO INTERNA','Audio','Tienda','Comunicacion por radio a 1,5 km.',1000,2),
  I('VOCODER','Interno','Clinica','Sintetizador de voz. +2 a Actuar y Cantar.',5000,3),
  I('ANTICUERPOS MEJORADOS','Interno','Tienda','Cura CUERPO x2 por dia de descanso.',5000,2),
  I('CIBERSERPIENTE','Interno','Hospital','Arma cuerpo a cuerpo muy pesada en el esofago.',10000,14),
  I('BRANQUIAS','Interno','Hospital','Respira bajo el agua.',10000,7),
  I('MUSCULO INJERTADO','Interno','Hospital','CUERPO +2. Maximo 10.',10000,14),
  I('RESERVA DE AIRE','Interno','Hospital','30 minutos de oxigeno.',10000,2),
  I('FILTROS NASALES','Interno','Clinica','Inmunidad a gases toxicos.',1000,2),
  I('RADAR / SONAR','Interno','Clinica','Escanea el terreno a 50 m.',10000,7),
  I('FIJADORES DE TOXINAS','Interno','Clinica','+2 a resistir torturas y drogas.',1000,2),
  I('VAMPIROS','Interno','Clinica','Colmillos. Arma ligera, admite veneno.',5000,14),
  I('FUNDA OCULTA','Externo','Clinica','Guarda un arma ocultable en el cuerpo.',5000,7),
  I('TEJIDO DERMICO','Externo','Hospital','Cuerpo y cabeza con PF 7.',5000,7),
  I('BLINDAJE SUBDERMICO','Externo','Hospital','Cuerpo y cabeza con PF 11.',10000,14),
  I('BOLSILLO SUBDERMICO','Externo','Clinica','Hueco de 5 x 10 cm bajo la piel.',1000,3),
  I('CIBERBRAZO','Miembros','Hospital','Brazo de reemplazo. 4 ranuras.',5000,7),
  I('NUDILLOS DE ACERO','Miembros','Clinica','Arma cuerpo a cuerpo media. Ocultable.',1000,3),
  I('MANO GARFIO','Miembros','Clinica','Dispara la mano con cable de 30 m.',1000,3),
  I('LANZAGRANADAS EMERGENTE','Miembros','Clinica','Lanzagranadas de un disparo en el brazo.',5000,7),
  I('ARMA BLANCA EMERGENTE','Miembros','Clinica','Hoja oculta en el ciberbrazo.',5000,7),
  I('ESCUDO EMERGENTE','Miembros','Clinica','Escudo antibalas en el brazo.',5000,7),
  I('ARMA DE FUEGO EMERGENTE','Miembros','Clinica','Arma a una mano oculta en el brazo.',5000,7),
  I('DESGARRADORAS','Miembros','Clinica','Garras de carbovidrio. Arma media.',5000,3),
  I('RASPADORAS','Miembros','Tienda','Uñas de carbovidrio. Arma ligera.',1000,2),
  I('CAMARA DE HOMBRO','Miembros','Clinica','Videocamara oculta en el hombro.',5000,7),
  I('LATIGO MONOFILAMENTO','Miembros','Clinica','Latigo en el pulgar. Arma media.',5000,3),
  I('MANO HERRAMIENTA','Miembros','Clinica','Dedos con destornillador, llave y taladro.',1000,3),
  I('LOBEZNOS','Miembros','Clinica','Garras largas. Arma pesada. Ocultable.',5000,7),
  I('CIBERPIERNA','Miembros','Hospital','Pierna de reemplazo. 3 ranuras.',1000,3),
  I('PIE DE AGARRE','Miembros','Clinica','Sin penalizacion al trepar. Emparejado.',5000,3),
  I('PROPULSOR DE SALTO','Miembros','Clinica','Sin penalizacion al saltar. Emparejado.',5000,3),
  I('PIE PATIN','Miembros','Clinica','+6 m de movimiento al correr.',5000,3),
  I('PIE GARRA','Miembros','Clinica','Hoja en el pie. Arma ligera.',5000,3),
  I('BLINDAJE ANTI-EMP','Miembros','Clinica','Ciberextremidad inmune a EMP.',10000,3),
  I('RECUBRIMIENTO CROMADO','Miembros','Tienda','+2 a Vestuario y Estilo.',10000,0),
  I('MONTURA DE HOMBRO','Borgware','Hospital','Un segundo par de ciberbrazos.',10000,14),
  I('ARMAZON LINEAL BETA','Borgware','Hospital','CUERPO 14.',50000,14),
  I('ARMAZON LINEAL SIGMA','Borgware','Hospital','CUERPO 12.',10000,14),
  I('MONTURA MULTIOPTICA','Borgware','Hospital','Hasta 5 ciberojos adicionales.',10000,14),
  I('MATRIZ DE SENSORES','Borgware','Clinica','5 opciones ciberauditivas extra.',10000,14),
  W('CUCHILLO DE COMBATE','Arma cuerpo a cuerpo',1,0,'Cuerpo a cuerpo',2,1,1,500,'Arma ligera'),
  W('TOMAHAWK','Arma cuerpo a cuerpo',1,0,'Cuerpo a cuerpo',2,1,1,500,'Arma ligera / arrojadiza'),
  W('BATE','Arma cuerpo a cuerpo',2,0,'Cuerpo a cuerpo',2,2,0,500,'Arma media'),
  W('PALANCA','Arma cuerpo a cuerpo',2,0,'Cuerpo a cuerpo',2,1,0,500,'Arma media'),
  W('MACHETE','Arma cuerpo a cuerpo',2,0,'Cuerpo a cuerpo',2,1,0,500,'Arma media'),
  W('TUBO DE PLOMO','Arma cuerpo a cuerpo',3,0,'Cuerpo a cuerpo',2,1,0,1000,'Arma pesada'),
  W('ESPADA','Arma cuerpo a cuerpo',3,0,'Cuerpo a cuerpo',2,1,0,1000,'Arma pesada'),
  W('BATE CON PINCHOS','Arma cuerpo a cuerpo',3,0,'Cuerpo a cuerpo',2,2,0,1000,'Arma pesada'),
  W('MOTOSIERRA','Arma cuerpo a cuerpo',4,0,'Cuerpo a cuerpo',1,2,0,5000,'Arma muy pesada'),
  W('MAZO','Arma cuerpo a cuerpo',4,0,'Cuerpo a cuerpo',1,2,0,5000,'Arma muy pesada'),
  W('ASPAS DE HELICOPTERO','Arma cuerpo a cuerpo',4,0,'Cuerpo a cuerpo',1,2,0,5000,'Arma muy pesada'),
  W('NAGINATA','Arma cuerpo a cuerpo',4,0,'Cuerpo a cuerpo',1,2,0,5000,'Arma muy pesada'),
  M('MUNICION BASICA','Cartuchos estandar para cualquier calibre.',100),
  M('MUNICION PERFORANTE','Atraviesa blindaje. Ablaciona el doble.',1000),
  M('MUNICION DE BIOTOXINA','Carga toxica. Se resiste con Resistir tortura.',5000),
  M('MUNICION EMP','Pulso que inutiliza ciberware y electronica.',5000),
  M('MUNICION EXPANSIVA','Se abre al impactar. Mas daño contra carne.',1000),
  M('MUNICION CEGADORA','Destello y estruendo en el impacto.',1000),
  M('MUNICION INCENDIARIA','Prende fuego al objetivo.',1000),
  M('MUNICION DE VENENO','Carga venenosa. Se resiste con Resistir tortura.',1000),
  M('MUNICION DE GOMA','No letal. Solo daño contundente.',100),
  M('MUNICION SOMNIFERA','Sedante. El objetivo puede quedar inconsciente.',5000),
  M('MUNICION INTELIGENTE','Guiada. Requiere arma inteligente.',5000),
  M('MUNICION DE HUMO','Nube de humo en el punto de impacto.',500),
  M('MUNICION LACRIMOGENA','Gas irritante en el punto de impacto.',500),

  G('CRIOBOMBA','Mantiene un cuerpo en suspension durante el traslado.',50000),
  G('CRIOTANQUE','Camara criogenica de soporte vital.',50000),
  G('CIBERTERMINAL (CALIDAD POBRE)','Terminal de intrusion de segunda mano.',1000),
  G('CIBERTERMINAL (CALIDAD EXCELENTE)','Terminal de intrusion de gama alta.',10000),
  G('SINTETIZADOR DE BATERIA','Simula casi cualquier bateria. Necesita amplificador.',5000),
  G('GUITARRA ELECTRICA / INSTRUMENTO','Para hacer musica. Los electricos necesitan amplificador.',5000),
  G('PINTURA LUMINOSA','Spray que brilla en la oscuridad.',200),
  G('PAQUETE DE KIBBLE','Una comida de kibble.',100),
  G('KIT DE ASEO PERSONAL','Todo lo necesario para asearse.',200),
  G('AMPLIFICADOR DE BOLSILLO','Hasta dos instrumentos. 6 horas por carga.',500),
  G('ESCANER DE RADIO / REPRODUCTOR','Musica y bandas de radio a 1,5 km.',500),
  G('TIENDA Y EQUIPO DE ACAMPADA','Equipo para que una persona acampe.',500),

  I('CAMBIO DE COLOR OCULAR','Optica','Tienda','Cambios ilimitados de color y patron del ojo.',1000,2),
  I('DETECTOR DE RADIACION OCULAR','Optica','Clinica','Radiacion a 100 m como un brillo azul.',10000,3),
  I('VIRTUALIDAD OCULAR','Optica','Tienda','Ciberespacio sobre la vista. Emparejado.',1000,2),
  I('GRABADORA AUDITIVA','Audio','Clinica','Graba audio a un chip o a un agente.',1000,2),
  I('DETECTOR DE MICROS INTERNO','Audio','Tienda','Pita a 2 m de un micro o dispositivo de escucha.',1000,2),
  I('RASTREADOR AUDITIVO','Audio','Clinica','Sigue un emisor vinculado hasta 1,5 km.',1000,2),
  I('AMORTIGUADOR DE NIVEL','Audio','Tienda','Inmunidad a ruidos peligrosos y cegadoras.',1000,2),
  I('ESCANER DE RADIO INTERNO','Audio','Clinica','Escanea bandas de radio y reproduce musica.',500,2),
  I('DETECTOR DE RADAR INTERNO','Audio','Clinica','Pita si hay un haz de radar a 100 m.',5000,2),
  I('CODIFICADOR INTERNO','Audio','Tienda','Cifra y descifra comunicaciones.',1000,2),
  I('CHIP ANALIZADOR QUIMICO','Neural','Chip','Analiza sustancias como accion.',5000,3),
  I('IMPLANTE ANTICONCEPTIVO','Interno','Tienda','Previene embarazos no deseados.',100,0),
  I('IMPLANTE "DAMA DE MEDIANOCHE"','Interno','Clinica','Implante de placer.',1000,7),
  I('IMPLANTE "MR. STUDD"','Interno','Clinica','Implante de placer.',1000,7),
  I('MANO ESTANDAR','Miembros','Clinica','Mano cibernetica estandar. No ocupa ranura.',1000,2),
  I('CIBERTERMINAL DE BRAZO','Miembros','Clinica','Terminal integrado en el ciberbrazo. +1 ranura.',5000,3),
  I('MEDESCANER DE BRAZO','Miembros','Clinica','+2 a Primeros Auxilios y Paramedicina.',5000,7),
  I('MONTURA DE CAMBIO RAPIDO','Miembros','Clinica','Quita o pone un ciberbrazo como accion.',1000,7),
  I('AGARRE SUBDERMICO','Miembros','Clinica','Permite usar armas inteligentes sin conectores.',1000,3),
  I('TECNOESCANER DE BRAZO','Miembros','Clinica','+2 a varias habilidades TEC.',5000,7),
  I('PIE ESTANDAR','Miembros','Clinica','Pie cibernetico estandar. No ocupa ranura.',1000,2),
  I('PIE PALMEADO','Miembros','Clinica','Sin penalizacion al nadar. Emparejado.',5000,3),
  I('RECUBRIMIENTO PLASTICO','Miembros','Tienda','Cubierta de plastico en varios colores.',1000,0),
  I('RECUBRIMIENTO PIEL REAL','Miembros','Tienda','Piel artificial para la ciberextremidad.',5000,0),

  G('UNIDAD DE RESPALDO','Hardware de terminal. Guarda programas destruidos. 2 ranuras.',1000),
  G('CERRADURA ADN','Hardware de terminal. Bloqueo biometrico. 2 ranuras.',1000),
  G('CIRCUITOS BLINDADOS','Hardware de terminal. Inmune a EMP e ICE no negro.',1000),
  G('CABLEADO AISLADO','Hardware de terminal. No se incendia por programas.',1000),
  G('BARRERA KRASH','Hardware de terminal. Impide expulsiones forzadas. 2 ranuras.',1000),
  G('AMPLIADOR DE ALCANCE','Hardware de terminal. Conecta a 8 m del punto de acceso.',1000),

  P('BORRADOR','Potenciador',0,0,7,'+2 a Ocultacion mientras este activo.','Un globo rosa que suelta burbujas.',200),
  P('TE VEO','Potenciador',0,0,7,'+2 a Rastreo de ruta mientras este activo.','Lupa plateada girando en el aire.',200),
  P('SPEEDY GONZALVEZ','Potenciador',0,0,7,'+2 a Velocidad mientras este activo.','Estela de polvo tras el intruso.',1000),
  P('GUSANO','Potenciador',0,0,7,'+2 a Puerta trasera mientras este activo.','Gusano mecanico dorado de ojos verdes.',500),
  P('ARMADURA','Defensor',0,0,7,'-4 al daño cerebral recibido. Una vez por incursion.','Armadura dorada transparente.',500),
  P('ANTIFLAK','Defensor',0,0,7,'ATQ 0 a los atacantes de ICE no negro.','Nube de luces multicolor.',500),
  P('ESCUDO','Defensor',0,0,7,'Detiene el primer efecto de ICE no negro.','Barrera plateada parpadeante.',200),
  P('MARTILLO','Antiprograma',1,0,0,'3d6 REZ a ICE no negro o 2d6 a ICE negro.','Mazo blanco luminoso.',500),
  P('ESPADA DIGITAL','Antiprograma',1,0,0,'3d6 REZ a ICE negro o 2d6 a ICE no negro.','Katana de energia.',500),
  P('DECKKRASH','Antipersonal',0,0,0,'Expulsa por la fuerza al intruso enemigo.','Cartucho de dinamita de dibujos.',1000),
  P('RAYO INFERNAL','Antipersonal',2,0,0,'2d6 al cerebro enemigo. Puede incendiar su terminal.','Rayo de fuego carmesi.',1000),
  P('RASCANERVIOS','Antipersonal',0,0,0,'-1d6 a INT, REF y DES del enemigo durante una hora.','Bola cromada chispeante.',1000),
  P('LINEA PLANA TOXICA','Antipersonal',0,0,0,'Destruye un programa no ICE negro del enemigo.','Haz de luz verde neon.',1000),
  P('SUPERPEGAMENTO','Antipersonal',2,0,0,'El enemigo no avanza ni sale seguro durante 1d6 asaltos.','Masa de pringue roja.',1000),
  P('VRIZZBOLT','Antipersonal',1,0,0,'1d6 al cerebro y -1 accion de RED el siguiente turno.','Doble helice de luz neon.',500),
  P('ASPID','ICE negro antipersonal',2,2,15,'Destruye un programa del terminal enemigo al azar.','Cobra dorada que escupe luz verde.',1000,4,6),
  P('GIGANTE','ICE negro antipersonal',8,4,25,'3d6 al cerebro y expulsion forzada.','Pies enormes sobre el intruso.',10000,2,2),
  P('SABUESO INFERNAL','ICE negro antipersonal',6,2,20,'2d6 al cerebro. Puede incendiar su terminal.','Lobo de metal negro en llamas.',5000,6,6),
  P('KRAKEN','ICE negro antipersonal',8,4,30,'3d6 al cerebro. Impide avanzar o salir seguro.','Tentaculos naranjas desde las paredes.',10000,6,2),
  P('LICHE','ICE negro antipersonal',6,2,25,'-1d6 a INT, REF y DES durante una hora.','Esqueleto metalico con tunica negra.',5000,8,2),
  P('CUERVO','ICE negro antipersonal',4,2,15,'Desactiva un defensor al azar y 1d6 al cerebro.','Cuervo con armadura y lanza blanca.',500,6,4),
  P('ESCORPION','ICE negro antipersonal',2,2,15,'-1d6 a MOV durante una hora.','Escorpion negro que sisea.',1000,2,6),
  P('MOFETA','ICE negro antipersonal',4,2,10,'-2 a Deslizar mientras siga activo.','Mofeta de dibujos que persigue al intruso.',5000,2,4),
  P('FUEGO FATUO','ICE negro antipersonal',4,2,15,'1d6 al cerebro y -1 accion de RED.','Orbe de luz con un ojo diminuto.',500,4,4),
  P('DRAGON','ICE negro antiprograma',6,6,30,'6d6 a un programa. Si lo desactiva, lo destruye.','Dragon robotico de escamas doradas.',10000,6,4),
  P('ASESINO','ICE negro antiprograma',6,2,20,'4d6 a un programa. Si lo desactiva, lo destruye.','Samurai robotico de ojos rojos.',5000,4,8),
  P('DIENTES DE SABLE','ICE negro antiprograma',6,2,25,'6d6 a un programa. Si lo desactiva, lo destruye.','Felino enorme de colmillos blancos.',10000,8,6),

  G('ENJAMBRE DE DRONES','Defensa activa. Nube de microdrones cortantes. MOV 8, 15 PV. DV17 Electronica.',0),
  G('DRON TERRESTRE','Defensa activa. Dos de: pistola muy pesada, subfusil o camara. MOV 4, 30 PV. DV21.',0),
  G('DRON AEREO GRANDE','Defensa activa. Dos de: dardera, pistola muy pesada o camara. MOV 6, 20 PV. DV21.',0),
  G('MINIDRON AEREO','Defensa activa. Uno de: dardera, pistola muy pesada o camara. MOV 6, 15 PV. DV17.',0),
  G('DRON ARAÑA','Defensa activa. Dos de: lanzagranadas, arma muy pesada, subfusil pesado o camara. MOV 4, 40 PV. DV21.',0)
];

const CAMPOS = {
  ARMA:     [['d','DAÑO DISPARO (d6)'],['m','CARGADOR ESTANDAR'],['r','CADENCIA (CDF)'],['h','MANOS REQUERIDAS'],['o','OCULTABLE (1 SI / 0 NO)']],
  BLINDAJE: [['sp','PODER DE FRENADO'],['pen','PENALIZACION REF/DES/MOV']],
  EQUIPO:   [],
  IMPLANTE: [['hl','PERDIDA DE HUMANIDAD']],
  MUNICION: [['cant','CANTIDAD']],
  PROGRAMA: [['atk','ATAQUE'],['def','DEFENSA'],['rez','REZ']]
};
const CLAVES = ['d','m','r','h','o','sp','pen','hl','cant','atk','def','rez'];
const A36 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const clave = (s, t, i) => (s*7 + t*11 + i*13 + 5) % 36;
const suma = (d, s, t) => (d.reduce((a, v, i) => a + v*(i + 3), 0) + s*5 + t) % 1296;

/* codigo = sal + sal2 + carga ofuscada + control. Cada codigo es distinto aunque el objeto sea el mismo. */
function empaquetar(d){
  const s = Math.floor(Math.random()*36), t = Math.floor(Math.random()*36);
  const ob = d.map((v, i) => A36[(v + clave(s, t, i)) % 36]).join('');
  const cs = suma(d, s, t);
  return A36[s] + A36[t] + ob + A36[Math.floor(cs/36)] + A36[cs % 36];
}
function desempaquetar(code){
  code = String(code || '').toUpperCase().replace(/[^0-9A-Z]/g, '');
  if (code.length < 5) return null;
  const s = A36.indexOf(code[0]), t = A36.indexOf(code[1]);
  const body = code.slice(2, -2), cc = code.slice(-2);
  const d = body.split('').map((ch, i) => (A36.indexOf(ch) - clave(s, t, i) + 72) % 36);
  if (A36.indexOf(cc[0])*36 + A36.indexOf(cc[1]) !== suma(d, s, t)) return null;
  return d;
}

/* atributos y habilidades */
const STATS = [['INT','INTELIGENCIA'],['REF','REFLEJOS'],['DES','DESTREZA'],['TEC','TECNICA'],['TMP','TEMPLE'],
               ['VOL','VOLUNTAD'],['SUE','SUERTE'],['MOV','MOVIMIENTO'],['CUE','CUERPO'],['EMP','EMPATIA']];
const H = (n, st, x2) => ({ n, st, x2: !!x2 });
const HABS = [
  ['ALERTA', [H('Concentracion','VOL'),H('Ocultar/Revelar','INT'),H('Leer labios','INT'),H('Percepcion','INT'),H('Rastreo','INT')]],
  ['CUERPO', [H('Atletismo','DES'),H('Contorsionismo','DES'),H('Baile','DES'),H('Resistencia','VOL'),H('Resistir tortura','VOL'),H('Sigilo','DES')]],
  ['CONTROL', [H('Conducir vehiculo','REF'),H('Pilotar aereo x2','REF',1),H('Pilotar naval','REF'),H('Montar','REF')]],
  ['EDUCACION', [H('Contabilidad','INT'),H('Trato animales','INT'),H('Burocracia','INT'),H('Negocios','INT'),H('Composicion','INT'),
    H('Criminologia','INT'),H('Criptografia','INT'),H('Deduccion','INT'),H('Educacion','INT'),H('Juego','INT'),H('Idioma: jerga','INT'),
    H('Busqueda datos','INT'),H('Experto local','INT'),H('Ciencia','INT'),H('Tactica','INT'),H('Supervivencia','INT')]],
  ['COMBATE', [H('Pelea','DES'),H('Evasion','DES'),H('Artes marciales x2','DES',1),H('Arma cuerpo a cuerpo','DES')]],
  ['INTERPRETACION', [H('Actuar','TMP'),H('Tocar instrumento','TEC')]],
  ['ARMAS A DISTANCIA', [H('Tiro con arco','REF'),H('Automatico x2','REF',1),H('Pistolas','REF'),H('Armas pesadas x2','REF',1),H('Armas largas','REF')]],
  ['SOCIAL', [H('Soborno','TMP'),H('Conversacion','EMP'),H('Percepcion humana','EMP'),H('Interrogatorio','TMP'),H('Persuasion','TMP'),
    H('Aseo personal','TMP'),H('Callejeo','TMP'),H('Comercio','TMP'),H('Vestuario y estilo','TMP')]],
  ['TECNICA', [H('Tec. aerea','TEC'),H('Tec. basica','TEC'),H('Cibertecnica','TEC'),H('Demoliciones x2','TEC',1),H('Electronica x2','TEC',1),
    H('Primeros auxilios','TEC'),H('Falsificacion','TEC'),H('Tec. terrestre','TEC'),H('Pintura/dibujo','TEC'),H('Paramedicina x2','TEC',1),
    H('Fotografia/cine','TEC'),H('Abrir cerraduras','TEC'),H('Carterista','TEC'),H('Tec. naval','TEC'),H('Armeria','TEC')]]
];
const HAB_LISTA = []; HABS.forEach(([g, L]) => L.forEach(h => HAB_LISTA.push(Object.assign({ g }, h))));

const codStats = v => empaquetar([2].concat(v.map(x => Math.max(1, Math.min(10, x|0)))));
const codHab = (i, lv) => empaquetar([3, Math.floor(i/36), i % 36, Math.max(0, Math.min(10, lv|0))]);
function leerClave(code){
  const d = desempaquetar(code); if (!d) return null;
  if (d[0] === 2 && d.length === 11) return { tipo:'stats', v:d.slice(1) };
  if (d[0] === 3 && d.length === 4 && HAB_LISTA[d[1]*36 + d[2]]) return { tipo:'hab', i:d[1]*36 + d[2], lv:d[3] };
  return null;
}

function codificar(idx, mods){
  const ks = Object.keys(mods || {}).filter(k => CLAVES.indexOf(k) >= 0).slice(0, 6);
  const d = [1, Math.floor(idx/36), idx % 36, ks.length];
  ks.forEach(k => { const v = Math.max(0, Math.min(1295, Math.round(mods[k]))); d.push(CLAVES.indexOf(k), Math.floor(v/36), v % 36); });
  return empaquetar(d);
}
function codificarViejo(d){
  const s = Math.floor(Math.random()*36), t = Math.floor(Math.random()*36);
  const ob = d.map((v, i) => A36[(v + clave(s, t, i)) % 36]).join('');
  const cs = suma(d, s, t);
  return A36[s] + A36[t] + ob + A36[Math.floor(cs/36)] + A36[cs % 36];
}

function decodificar(code){
  code = String(code || '').toUpperCase().replace(/[^0-9A-Z]/g, '');
  if (code.length < 8) return null;
  const s = A36.indexOf(code[0]), t = A36.indexOf(code[1]);
  const body = code.slice(2, -2), cc = code.slice(-2);
  const d = body.split('').map((ch, i) => (A36.indexOf(ch) - clave(s, t, i) + 36*2) % 36);
  if (d[0] !== 1) return null;
  const idx = d[1]*36 + d[2], n = d[3];
  if (!ITEMS[idx] || d.length !== 4 + n*3) return null;
  if (A36.indexOf(cc[0])*36 + A36.indexOf(cc[1]) !== suma(d, s, t)) return null;
  const mods = {};
  for (let k = 0; k < n; k++){
    const key = CLAVES[d[4 + k*3]]; if (!key) return null;
    mods[key] = d[5 + k*3]*36 + d[6 + k*3];
  }
  const base = ITEMS[idx];
  return { idx, base, mods, it: Object.assign({}, base, mods) };
}

window.EQUIPO = { ITEMS, CAMPOS, codificar, decodificar, STATS, HABS, HAB_LISTA, codStats, codHab, leerClave };
})();

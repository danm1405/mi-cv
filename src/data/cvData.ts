export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  sector: 'monitoreo' | 'mineria' | 'agroindustria' | 'telecomunicaciones';
  sectorLabel: string;
  tasks: string[];
  keyTools?: string[];
  isRecent?: boolean;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  hoursOrNote?: string;
  type: 'degree' | 'certification';
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    detail?: string;
  }[];
}

export interface ProtocolItem {
  code: string;
  title: string;
  standard: string;
  description: string;
  responsibilities: string[];
}

export const cvData = {
  personal: {
    name: "Daniel Marcelo Jaime Uribe",
    shortName: "Daniel Jaime",
    title: "Bachiller en Ingeniería Ambiental y Sanitaria",
    specialization: "SST / SSOMA & Monitoreo Ambiental",
    location: "Ica, Perú",
    phone: "+51 998 653 740",
    phoneRaw: "51998653740",
    email: "daniel.juribe14@gmail.com",
    linkedin: "https://www.linkedin.com/in/daniel-jaime-uribe/",
    dni: "70138077",
    university: "Universidad Nacional San Luis Gonzaga de Ica (UNICA)",
    gradYear: "2017 – 2022",
    availability: "Disponible para incorporación inmediata y desafíos laborales",
    summary:
      "Bachiller en Ingeniería Ambiental y Sanitaria por la Universidad Nacional San Luis Gonzaga de Ica, especializado en Gestión de Seguridad, Salud Ocupacional y Medio Ambiente (SSOMA) y Monitoreo de Calidad Ambiental. Trayectoria técnica comprobada en supervisión y fiscalización de estándares de seguridad en minería (D.S. 024-2016-EM), agroexportación, telecomunicaciones y proyectos de ingeniería. Especialista en la implementación de matrices IPERC continuo, liberación técnica de permisos de trabajo de alto riesgo (ATS, PETAR), control integral de EPP, programas de capacitación en campo e informes técnicos de monitoreo ambiental bajo estándares normativos nacionales (Ley N° 29783 y ECA-MINAM). Profesional orientando a resultados, con alto sentido de liderazgo en campo y firme compromiso con la prevención proactiva de incidentes.",
  },

  experiences: [
    {
      id: "sopermin",
      role: "Monitorista Ambiental",
      company: "SOPERMIN S.A.C.",
      location: "Ica / Lima, Perú",
      period: "Reciente (2025 - 2026)",
      sector: "monitoreo",
      sectorLabel: "Monitoreo Ambiental & Consultoría",
      isRecent: true,
      tasks: [
        "Ejecución de monitoreos ambientales y ocupacionales en campo bajo protocolos nacionales e internacionales.",
        "Elaboración técnica integral de informes de monitoreo de calidad de aire, ruido ambiental y agua.",
        "Coordinación logística con laboratorios acreditados para la toma y envío de muestras bajo rigurosos estándares de cadena de custodia.",
        "Preparación, verificación y calibración in-situ de equipos e instrumentos de medición científica.",
      ],
      keyTools: ["Sonómetro Clase 1", "Muestreadores de Aire", "Cadena de Custodia", "Protocolos MINAM / DIGESA"],
    },
    {
      id: "covemine",
      role: "Asistente de SSOMA",
      company: "COVEMINE S.C.R.L. — Planta Antakoril",
      location: "Nasca, Ica, Perú",
      period: "Junio 2025 – Septiembre 2025",
      sector: "mineria",
      sectorLabel: "Minería & Procesamiento",
      tasks: [
        "Liderazgo y dictado diario de charlas de seguridad de 5 minutos al personal de planta al inicio de cada jornada laboral.",
        "Supervisión activa del cumplimiento de estándares de seguridad bajo el Reglamento de SST en Minería (D.S. 024-2016-EM).",
        "Ejecución de inspecciones periódicas programadas según el Programa Anual de Seguridad y Salud en el Trabajo (SSOMA).",
        "Control, registro, renovación y entrega técnica de Equipos de Protección Personal (EPP).",
      ],
      keyTools: ["D.S. 024-2016-EM", "Programa Anual SSOMA", "Charlas 5 Min", "Inspecciones de Campo"],
    },
    {
      id: "el-pedregal",
      role: "Auxiliar de Seguridad y Salud Ocupacional",
      company: "EL PEDREGAL S.A.",
      location: "Ica, Perú",
      period: "Febrero 2025 – Mayo 2025",
      sector: "agroindustria",
      sectorLabel: "Agroindustria & Exportación",
      tasks: [
        "Soporte técnico en la ejecución, medición y seguimiento de los indicadores del Plan Anual de SSO.",
        "Inspecciones operativas en campo en fundos agrícolas, asegurando los estándares del sistema de gestión integrado.",
        "Dictado de capacitaciones y charlas preventivas enfocadas en ergonomía, uso de agroquímicos y prevención de accidentes laborales.",
      ],
      keyTools: ["Plan Anual SSO", "Inspecciones de Fundo", "Capacitaciones Ergonomía", "Gestión de Riesgos"],
    },
    {
      id: "percal",
      role: "Supervisor de Seguridad y Salud en el Trabajo (SST)",
      company: "PERCAL PERÚ E.I.R.L.",
      location: "Ica, Perú",
      period: "Septiembre 2024 – Diciembre 2024",
      sector: "telecomunicaciones",
      sectorLabel: "Telecomunicaciones & Montaje",
      tasks: [
        "Identificación de peligros, evaluación de riesgos y determinación de controles en campo (IPERC continuo).",
        "Liberación y validación técnica de permisos de trabajo de alto riesgo (ATS y PETAR para trabajos en altura y eléctricos).",
        "Control riguroso del estado y uso de EPP y cumplimiento de la Ley N° 29783 en obras de telecomunicaciones e infraestructura.",
        "Elaboración del soporte documental del Sistema de Gestión de SST y reporte de inspecciones preventivas.",
      ],
      keyTools: ["IPERC Continuo", "Permisos PETAR", "ATS", "Trabajos en Altura", "Ley 29783"],
    },
    {
      id: "energytel",
      role: "Auxiliar de Seguridad y Salud en el Trabajo",
      company: "MH ENERGYTEL E.I.R.L.",
      location: "Lima, Perú",
      period: "Octubre 2022 – Marzo 2023",
      sector: "telecomunicaciones",
      sectorLabel: "Obras Eléctricas & Drywall",
      tasks: [
        "Revisión, conformación y homologación de carpetas de seguridad para la autorización de ingreso a obra por parte de clientes corporativos.",
        "Supervisión en campo de medidas de control durante instalaciones eléctricas industriales y montaje de estructuras drywall.",
        "Inspecciones de orden y limpieza (5S) y gestión de dotación y reposición de EPP reglamentario.",
      ],
      keyTools: ["Carpetas de Homologación", "Riesgo Eléctrico", "Supervisión de Obra", "Normativa G.050"],
    },
  ] as WorkExperience[],

  education: [
    {
      id: "grado-unica",
      title: "Bachiller en Ingeniería Ambiental y Sanitaria",
      institution: "Universidad Nacional San Luis Gonzaga de Ica (UNICA)",
      period: "2017 – 2022",
      hoursOrNote: "Grado Académico de Bachiller",
      type: "degree",
      icon: "graduation-cap",
    },
    {
      id: "cert-monitoreo",
      title: "Monitoreo de la Calidad Ambiental",
      institution: "Instituto de la Calidad Ambiental (ICA)",
      period: "2026",
      hoursOrNote: "90 Horas Lectivas",
      type: "certification",
      icon: "seedling",
    },
    {
      id: "cert-supervisor-sst",
      title: "Supervisor de Seguridad y Salud en el Trabajo",
      institution: "EcoAmbiental Group",
      period: "2024",
      hoursOrNote: "120 Horas Académicas · Calificación Sobresaliente (18/20)",
      type: "certification",
      icon: "shield",
    },
    {
      id: "cert-sigersol",
      title: "Gestión de Residuos Sólidos (SIGERSOL)",
      institution: "Ingenieros 3SQ Perú S.A.C.",
      period: "2023",
      hoursOrNote: "24 Horas Académicas",
      type: "certification",
      icon: "recycle",
    },
  ] as EducationItem[],

  skillCategories: [
    {
      title: "Software & Herramientas Técnicas",
      icon: "laptop",
      skills: [
        { name: "MS Excel", level: "Avanzado", detail: "Fórmulas avanzadas, tablas dinámicas, reportes analíticos" },
        { name: "AutoCAD 2D", level: "Intermedio / Avanzado", detail: "Planos sanitarios, rutas de evacuación, señalética" },
        { name: "ArcGIS", level: "Intermedio", detail: "Mapeo territorial, zonas de monitoreo y análisis geoespacial" },
        { name: "Power BI", level: "Básico / Intermedio", detail: "Dashboards de indicadores de accidentabilidad y SSOMA" },
        { name: "Ofimática Integral", level: "Avanzado", detail: "Word, PowerPoint, Google Workspace, reportería ejecutiva" },
      ],
    },
    {
      title: "Gestión SSOMA & Seguridad Operativa",
      icon: "shield-check",
      skills: [
        { name: "Matrices IPERC & ATS", level: "Especialista", detail: "Identificación de peligros y valoración de riesgos en campo" },
        { name: "Permisos PETAR", level: "Especialista", detail: "Validación de trabajos en altura, caliente y espacios confinados" },
        { name: "Monitoreo Ocupacional", level: "Aplicado", detail: "Medición de ruido, iluminación y agentes físicos" },
        { name: "Control y Matriz de EPP", level: "Avanzado", detail: "Especificaciones técnicas, reposición y verificación" },
        { name: "Charlas de Seguridad (5 min)", level: "Liderazgo", detail: "Sensibilización diaria, cultura preventiva en cuadrillas" },
        { name: "Inspecciones Planeadas", level: "Avanzado", detail: "Auditorías de campo, verificación de condiciones subestándar" },
      ],
    },
    {
      title: "Monitoreo Ambiental & Calidad",
      icon: "test-tube",
      skills: [
        { name: "Calidad de Aire & Ruido", level: "Avanzado", detail: "Parámetros ECA, sonometría diurna/nocturna, muestreo PM10/PM2.5" },
        { name: "Cadena de Custodia", level: "Riguroso", detail: "Rotulado, preservación y despacho a laboratorios acreditados" },
        { name: "Gestión Integral de Residuos", level: "Certificado", detail: "Normativa SIGERSOL, segregación y disposición final" },
        { name: "Calibración de Equipos", level: "Práctico", detail: "Verificación de campo con patrones certificados antes de medición" },
      ],
    },
    {
      title: "Competencias Profesionales",
      icon: "users",
      skills: [
        { name: "Liderazgo en Campo", level: "Destacado", detail: "Gestión asertiva con trabajadores, supervisores y clientes" },
        { name: "Trabajo Multidisciplinario", level: "Comprobado", detail: "Coordinación fluida entre operaciones, calidad y contratistas" },
        { name: "Capacidad de Adaptación", level: "Alta", detail: "Disponibilidad en régimen minero, campamento u obra urbana" },
        { name: "Cultura de Cero Accidentes", level: "Vocación", detail: "Foco en prevención proactiva e investigación de incidentes" },
      ],
    },
  ] as SkillCategory[],

  normativeFramework: [
    {
      code: "Ley N° 29783",
      name: "Ley de Seguridad y Salud en el Trabajo",
      scope: "Nacional / General",
      description: "Marco legal para la prevención de riesgos laborales y fomento de cultura preventiva en organizaciones públicas y privadas.",
    },
    {
      code: "D.S. 024-2016-EM",
      name: "Reglamento de SST en Minería",
      scope: "Sector Minero",
      description: "Estándares operacionales en minas, plantas de beneficio y campamentos: IPERC continuo, PETAR, inspecciones y capacitación.",
    },
    {
      code: "Norma G.050",
      name: "Seguridad durante la Construcción",
      scope: "Infraestructura & Telecom.",
      description: "Medidas de seguridad en obras civiles, excavaciones, trabajos en altura y protección de cuadrillas.",
    },
    {
      code: "Estándares ECA",
      name: "Estándares de Calidad Ambiental (MINAM)",
      scope: "Medio Ambiente",
      description: "Límites máximos permisibles y concentraciones de referencia para agua, aire y niveles de ruido ambiental.",
    },
  ],

  stats: [
    { value: "+5", label: "Años de Formación UNICA", detail: "Ingeniería Ambiental y Sanitaria" },
    { value: "5", label: "Empresas en Trayectoria", detail: "Minería, Telecom, Agroindustria, Monitoreo" },
    { value: "100%", label: "Compromiso Cero Accidentes", detail: "Cumplimiento normativo estricto" },
    { value: "120h+", label: "Horas de Especialización", detail: "SST & Monitoreo Ambiental Acreditado" },
  ],
};

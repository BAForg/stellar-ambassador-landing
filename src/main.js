function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('iconSun').classList.toggle('show', theme !== 'dark');
  document.getElementById('iconMoon').classList.toggle('show', theme === 'dark');
}
document.getElementById('themeBtn').addEventListener('click', ()=>{
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

const content = {
  es: {
    nav:{ join:"Únete", tiers:"Tiers", funding:"Financiamiento", faq:"Preguntas frecuentes" },
    hero:{
      label:"Stellar Ambassador Program",
      title:"Stellar Ambassador Program",
      tagline:"Aprende. Construye. Lidera.",
      intro:"Guía del Programa de Embajadores de Stellar en los países que coordina Blockchain Acceleration Foundation (BAF).",
      body:"Un espacio para builders, educadores, organizadores y cualquier persona apasionada por el ecosistema de Stellar, comprometida con hacer crecer la red a través de activaciones locales, programas educativos y proyectos construidos sobre Stellar.",
      cta:"Postularse al programa"
    },
    countries:[
      {code:"CO", flag:"🇨🇴", name:"Colombia"},
      {code:"MX", flag:"🇲🇽", name:"México"},
      {code:"AR", flag:"🇦🇷", name:"Argentina"},
      {code:"CR", flag:"🇨🇷", name:"Costa Rica"},
      {code:"PE", flag:"🇵🇪", name:"Perú"},
      {code:"BO", flag:"🇧🇴", name:"Bolivia"}
    ],
    join:{
      eyebrow:"Comunidad",
      title:"Súmate a la conversación",
      lede:"Antes de postularte, conecta con la comunidad. Ahí se avisan las convocatorias, se resuelven dudas y se organiza cada capítulo.",
      channels:[
        {name:"Discord", icon:"discord", tag:"Recomendado", desc:"Discord es el canal recomendado del programa: agrupa los canales regionales, la comunidad local de cada capítulo y sus eventos y actividades.", link:"Unirse al servidor"},
        {name:"Telegram", icon:"telegram", tag:"Avisos rápidos", desc:"Canal recomendado para quienes prefieren recibir novedades del programa de forma más ágil y con menos ruido.", link:"Unirse al canal"}
      ],
      x:{
        eyebrow:"Cuenta de X",
        note:"Por ahora el programa mantiene una sola cuenta de X para todos los países.",
        cta:"Seguir en X",
        soonLabel:"Próximamente",
        soonTitle:"Cuentas por país"
      },
      more:{
        btn:"+ más capítulos",
        shortLabel:"MÁS",
        title:"Otros capítulos oficiales",
        intro:"Estos capítulos también forman parte oficial del Programa de Embajadores de Stellar, aunque los coordinan organizaciones distintas a BAF. El proceso de postulación es el mismo y sus integrantes participan en la misma comunidad de Discord. Puede consultarse más detalle en el",
        countries:[
          {flag:"🇧🇷", name:"Brasil"},
          {flag:"🇨🇱", name:"Chile"},
          {flag:"🇬🇭", name:"Ghana"},
          {flag:"🇳🇬", name:"Nigeria"}
        ],
        ctaApply:"Postularse al programa",
        ctaDiscord:"Unirse al Discord",
        gitbookLink:"GitBook oficial de Stellar",
        note:"Nota: esta lista todavía no cubre todos los países donde el ecosistema de Stellar tiene presencia. Si la región de interés no aparece aquí, se notificará apenas se active un capítulo oficial cercano."
      }
    },
    who:{
      eyebrow:"Los pilares del programa",
      eyebrowTiers:"Los cuatro tiers",
      title:"Cuatro pilares sostienen todo lo demás",
      lede:"El programa existe para que la comunidad Stellar en cada país cuente con educación, acompañamiento, conexión entre quienes construyen, y soluciones a problemas locales."
    },
    axes:[
      {name:"Educar", icon:"book", desc:"Cada comunidad necesita conocimiento real para construir sobre Stellar, en su propio idioma y a su propio ritmo. Quien hoy toma el curso introductorio es, más adelante, quien enseña el próximo bootcamp."},
      {name:"Nutrir", icon:"heart", desc:"Una comunidad se sostiene cuando cualquier persona interesada encuentra un lugar real dentro de ella, y cuando oportunidades como el Stellar Community Fund (SCF) se sienten accesibles, no lejanas."},
      {name:"Conectar", icon:"link", desc:"Quienes construyen necesitan encontrarse entre sí, primero dentro del propio país y después con el resto del ecosistema. De ahí nacen las alianzas que hacen crecer un proyecto."},
      {name:"Construir", icon:"hammer", desc:"Todo empieza con un problema real del propio contexto. Puede ser una idea todavía en borrador, o un proyecto que ya tiene usuarios probando si funciona."}
    ],
    tiers:{
      title:"Los cuatro tiers",
      sub:"Elegí un tier para ver su objetivo, requisitos y oportunidades.",
      list:[
        {name:"Explorer",
          objective:"Antes de participar activamente en el programa, hace falta entender qué es Stellar y cómo funciona el recorrido de los cuatro tiers. Ese es el propósito de Explorer, la puerta de entrada al programa.",
          requirements:["Inscribirse como embajador del programa","Completar el onboarding, es decir, los primeros materiales y pasos guiados de bienvenida, además del curso introductorio","Participar de manera verificable en la comunidad, incluyendo la llamada de bienvenida y el registro en los canales oficiales"],
          opportunities:["Curso introductorio sobre Stellar (Próximamente)","Welcome Kit y checklist de primeros pasos","Acceso a eventos presenciales y virtuales","Espacios de acompañamiento para reportar inquietudes dentro de la comunidad"]
        },
        {name:"Contributor",
          objective:"Contributor marca el momento en que se deja de aprender de forma pasiva y se empieza a producir algo propio. El corazón de este tier es el Stellar Builder Bootcamp, una formación estandarizada y recurrente, abierta a cualquier perfil, con clases técnicas y no técnicas orientadas a producto. Ahí se arman equipos y se construye un primer proyecto, el requisito para avanzar a Builder. Es también donde empieza a notarse qué rol conviene más a cada persona, construir el producto en sí o aportar valor desde otro lugar del equipo, la misma distinción que se vuelve explícita un tier después, en las dos rutas de Builder.",
          requirements:["Haber completado todos los requisitos de Explorer","Completar y aprobar el Stellar Builder Bootcamp, la formación técnica obligatoria del programa","Consolidar un proyecto propio y mantener participación verificable, incluyendo la llamada de comunidad"],
          opportunities:["Stellar Builder Bootcamp y masterclasses de formación aplicada (Próximamente)","Bounties abiertos, con recompensa propia de cada reto","Ideathones con tracks especializados","Creación de proyectos y equipos dentro del programa"]
        },
        {name:"Builder",
          objective:"Builder marca el inicio de la etapa de construcción real. A partir de este tier, el camino se abre en dos rutas posibles, según el tipo de aporte que cada persona quiera hacer.",
          baseline:"En ambas rutas se mantiene la participación verificable en las actividades del programa, presencial o virtual.",
          routes:[
            {name:"Ruta Producto", items:["Contar con un prototipo o MVP funcional, en testnet o mainnet","Haber participado en una hackathon con el proyecto demostrado en el demo day","Validar el proyecto con usuarios reales y postular al primer InstaAward disponible"]},
            {name:"Ruta Ecosistema", items:["Liderar una iniciativa de comunidad verificable, por ejemplo organizar o coordinar un evento","Mantener además un proyecto propio en etapa inicial, como respaldo del liderazgo"]}
          ],
          opportunities:["InstaAward inicial, entre 1,000 y 5,000 dólares en XLM","Mayor probabilidad de ser seleccionado para conferencias y retiros internacionales, según disponibilidad","Asesorías disponibles para el proyecto"]
        },
        {name:"Ecosystem Leader",
          objective:"Ecosystem Leader reconoce a quienes generan impacto que va más allá de su propio proyecto, ya sea escalando un producto o liderando el crecimiento del ecosistema en su país. Como en Builder, existen dos rutas posibles para llegar a este nivel.",
          baseline:"En ambas rutas se mantiene la participación verificable y la actividad sostenida dentro del programa.",
          routes:[
            {name:"Ruta Producto", items:["Contar con un producto sólido o MVP validado con usuarios, con ciclos de iteración activos","Haber participado en una hackathon o postulado a un InstaAward","Ser candidato para un referral al Stellar Community Fund (SCF)"]},
            {name:"Ruta Ecosistema", items:["Liderar eventos, programas o iniciativas de forma sostenida","Conectar proyectos, instituciones y comunidades, generando alianzas reales","Mantener también participación en un proyecto propio, como respaldo del liderazgo"]}
          ],
          opportunities:["Financiamiento de seguimiento en InstaAwards, sujeto a desempeño, hasta un acumulado de 15,000 dólares","Mesa redonda mensual con quienes votan en el Stellar Community Fund (SCF) (Próximamente)","Posibilidad de asumir un rol de mentor de embajadores de tiers iniciales, sujeto a aprobación del chapter lead","Posibilidad de crear bounties propios para el resto del programa"]
        }
      ]
    },
    funding:{
      title:"Financiamiento",
      initialLbl:"monto inicial, gestionado con el chapter lead",
      scfName:"Stellar Community Fund (SCF)",
      buildLbl:"Build Award, para llevar un proyecto validado a su lanzamiento",
      instaward:["Se gestiona directamente con el chapter lead del capítulo correspondiente","Llegar al nivel Builder da acceso al InstaAward inicial","Ecosystem Leader habilita financiamiento de seguimiento, hasta 15,000 dólares acumulados","Revisión típica de 3 a 5 días hábiles"],
      scf:["Camino disponible para proyectos con tracción, más allá de los InstaAwards","Financiamiento adicional para pasar de proyecto validado a lanzamiento en mainnet"],
      disclaimer:"Ser parte del programa no garantiza financiamiento por sí solo. Cada postulación se evalúa según sus propios méritos.",
      stat1:"Otorgados en XLM", stat2:"Proyectos financiados", stat3:"Miembros de comunidad"
    },
    apply:{
      title:"Cómo es el proceso de postulación",
      steps:[
        {title:"Postulación", icon:"doc", desc:"Completar el formulario de inscripción, abierto en cualquier momento para los seis países del programa."},
        {title:"Respuesta", icon:"mail", desc:"Recibir noticias dentro de los siguientes cinco días hábiles."},
        {title:"Primeros pasos", icon:"flag", desc:"Comenzar el onboarding de Explorer, el punto de partida para todo embajador nuevo."},
        {title:"Participación activa", icon:"people", desc:"Avanzar hacia Contributor y los niveles siguientes, a un ritmo que depende del compromiso de cada persona."}
      ]
    },
    faq:{
      title:"Preguntas frecuentes",
      items:[
        {q:"¿Hay algún costo por participar?", a:"No, participar en el programa es gratuito."},
        {q:"¿Hay una edad mínima para ser embajador?", a:"Sí, se requiere tener al menos 18 años."},
        {q:"¿Cuánto dura el compromiso como embajador?", a:"No tiene una duración fija. Se mantiene mientras la persona siga activa dentro del programa."},
        {q:"¿Se puede ser embajador de Stellar y de otro programa al mismo tiempo?", a:"Sí, no hay restricción para participar en otros programas o ecosistemas a la vez."},
        {q:"¿Hay que ser desarrollador para ser embajador?", a:"No. La Ruta Ecosistema en Builder existe justamente para quienes lideran comunidad sin construir el producto técnico directamente."},
        {q:"¿Cómo se postula a un InstaAward?", a:"Al llegar al nivel Builder se habilita la posibilidad de postularse en las rondas que se abren de manera mensual. Quienes ya llevan tiempo construyendo en el ecosistema, o están migrando desde otro programa sin conocer el Programa de Embajadores, pueden contactar directamente al chapter lead para evaluar su caso."},
        {q:"¿Qué pasa si mi capítulo no es uno de estos seis?", a:"Brasil, Chile, Ghana y Nigeria ya tienen capítulos oficiales de Stellar, coordinados por otras organizaciones (disponibles en la sección Únete, más arriba). Para cualquier otro país sin capítulo todavía, el formulario permite completar la inscripción igual, indicando país de residencia y ciudad más cercana, y seleccionando el capítulo disponible más próximo."}
      ]
    },
    closing:{ cta:"Unirse ahora al programa" },
    footer:{
      credit:"Coordinado por Blockchain Acceleration Foundation (BAF)",
      channels:[
        {icon:"discord", href:"https://discord.com/invite/stellardev", label:"Discord"},
        {icon:"telegram", href:"https://t.me/StarMakerAmbassadorsss", label:"Telegram"},
        {icon:"x", href:"https://x.com/StarMaker_LATAM", label:"X"}
      ],
      groups:[
        {
          label:"Documentación",
          links:[
            {label:"Guía oficial del programa", tag:null, href:"https://stellar.gitbook.io/ambassador-program"},
            {label:"Recursos de los capítulos BAF", tag:"Próximamente", href:"javascript:void(0)"}
          ]
        },
        {
          label:"Ecosistema",
          links:[
            {label:"Stellar", tag:null, href:"https://stellar.org/es"},
            {label:"Blockchain Acceleration Foundation", tag:null, href:"https://www.blockchainacceleration.org/"},
            {label:"Instaward Handbook", tag:null, href:"https://stellar.gitbook.io/scf-handbook/scf-awards/instawards"},
            {label:"Stellar Community Fund Handbook", tag:null, href:"https://stellar.gitbook.io/scf-handbook"}
          ]
        },
        {
          label:"Legal",
          links:[
            {label:"SAP Program Terms & Conditions", tag:null, href:"https://stellar.gitbook.io/ambassador-program/resources/terms-and-conditions"},
            {label:"Términos y condiciones de la comunidad", tag:"Próximamente", href:"javascript:void(0)"}
          ]
        }
      ],
      note:"Aviso: algunos elementos de esta página reflejan la metodología propia de este capítulo; la Stellar Development Foundation no exige este mismo estándar en el resto de sus capítulos. Ante cualquier diferencia, la guía oficial del programa es la fuente de referencia.",
      copyright:"© 2026 Blockchain Acceleration Foundation. Todos los derechos reservados.",
      tag:"Programa de Embajadores de Stellar"
    }
  },
  en:{
    nav:{ join:"Join", tiers:"Tiers", funding:"Funding", faq:"FAQ" },
    hero:{
      label:"Stellar Ambassador Program",
      title:"Stellar Ambassador Program",
      tagline:"Learn. Build. Lead.",
      intro:"Your guide to the Stellar Ambassador Program in the countries coordinated by Blockchain Acceleration Foundation (BAF).",
      body:"A space for builders, educators, organizers, and anyone passionate about the Stellar ecosystem, committed to growing the network through local activations, educational programs, and projects built on Stellar.",
      cta:"Apply to the program"
    },
    countries:[
      {code:"CO", flag:"🇨🇴", name:"Colombia"},
      {code:"MX", flag:"🇲🇽", name:"Mexico"},
      {code:"AR", flag:"🇦🇷", name:"Argentina"},
      {code:"CR", flag:"🇨🇷", name:"Costa Rica"},
      {code:"PE", flag:"🇵🇪", name:"Peru"},
      {code:"BO", flag:"🇧🇴", name:"Bolivia"}
    ],
    join:{
      eyebrow:"Community",
      title:"Join the conversation",
      lede:"Before you apply, connect with the community. That's where open calls get announced, questions get answered, and each chapter gets organized.",
      channels:[
        {name:"Discord", icon:"discord", tag:"Recommended", desc:"We recommend joining the Stellar Dev Discord: find your regional channel, meet the local community, and get involved in your chapter's events and activities.", link:"Join the server"},
        {name:"Telegram", icon:"telegram", tag:"Quick updates", desc:"We suggest this channel if you prefer quicker updates and less noise.", link:"Join the channel"}
      ],
      x:{
        eyebrow:"X account",
        note:"For now the program runs a single X account for every country.",
        cta:"Follow on X",
        soonLabel:"Coming soon",
        soonTitle:"Per-country accounts"
      },
      more:{
        btn:"+ more chapters",
        shortLabel:"MORE",
        title:"Other official chapters",
        intro:"These chapters are also an official part of the Stellar Ambassador Program, though they are coordinated by organizations other than BAF. The application process is the same, and members join the same Discord community. More detail is available in the",
        countries:[
          {flag:"🇧🇷", name:"Brazil"},
          {flag:"🇨🇱", name:"Chile"},
          {flag:"🇬🇭", name:"Ghana"},
          {flag:"🇳🇬", name:"Nigeria"}
        ],
        ctaApply:"Apply to the program",
        ctaDiscord:"Join the Discord",
        gitbookLink:"official Stellar GitBook",
        note:"Note: this list doesn't yet cover every country where the Stellar ecosystem has a presence. If your region isn't listed here, we'll let you know as soon as an official chapter becomes active near you."
      }
    },
    who:{
      eyebrow:"The program's pillars",
      eyebrowTiers:"The four tiers",
      title:"Four pillars hold everything else up",
      lede:"The program exists so the Stellar community in each country has education, support, connection among builders, and solutions to local problems."
    },
    axes:[
      {name:"Educate", icon:"book", desc:"Every community needs real knowledge to build on Stellar, in its own language and at its own pace. Whoever takes the introductory course today is, later on, the one teaching the next bootcamp."},
      {name:"Nurture", icon:"heart", desc:"A community holds together when anyone interested finds a real place within it, and when opportunities like the Stellar Community Fund (SCF) feel within reach, not distant."},
      {name:"Connect", icon:"link", desc:"Builders need to find one another, first within their own country and then across the rest of the ecosystem. That is where the alliances that grow a project come from."},
      {name:"Build", icon:"hammer", desc:"It all starts with a real problem from the local context. It can be an idea still in draft form, or a project already being tested by real users."}
    ],
    tiers:{
      title:"The four tiers",
      sub:"Pick a tier to see its objective, requirements, and opportunities.",
      list:[
        {name:"Explorer",
          objective:"Taking an active role in the program starts with understanding what Stellar is and how the four-tier path works. That's the purpose of Explorer, the program's entry point.",
          requirements:["Sign up as a program ambassador","Complete onboarding, meaning the first guided materials and welcome steps, along with the introductory course","Take part verifiably in the community, including the welcome call and registering on the official channels"],
          opportunities:["Introductory course on Stellar (Coming soon)","Welcome Kit and first steps checklist","Access to in person and virtual events","Support spaces to report concerns within the community"]
        },
        {name:"Contributor",
          objective:"Contributor marks the point where someone stops learning passively and starts producing something of their own. The core of this tier is the Stellar Builder Bootcamp, a standardized, recurring program open to any profile, with technical and non-technical product classes. Teams form there and build a first project, the requirement to move on to Builder. It's also where it starts to become clear which role suits each person best, building the product itself or contributing value from another part of the team, the same distinction that becomes explicit one tier later, in Builder's two routes.",
          requirements:["Have completed all Explorer requirements","Complete and pass the Stellar Builder Bootcamp, the program's required technical training","Consolidate an original project and keep verifiable participation, including the community call"],
          opportunities:["Stellar Builder Bootcamp and applied masterclasses (Coming soon)","Open bounties, each with its own reward","Ideathons with specialized tracks","Creating projects and teams within the program"]
        },
        {name:"Builder",
          objective:"Builder marks the start of the real building stage. From this tier on, the path splits into two possible routes, depending on the kind of contribution each person wants to make.",
          baseline:"Both routes keep verifiable participation in program activities, in person or virtual.",
          routes:[
            {name:"Product Path", items:["Having a working prototype or MVP, on testnet or mainnet","Having taken part in a hackathon with the project shown at demo day","Validating the project with real users and applying for the first available Instaward"]},
            {name:"Ecosystem Path", items:["Leading a verifiable community initiative, such as organizing or coordinating an event","Also maintaining an original project at an early stage, backing the leadership"]}
          ],
          opportunities:["Initial Instaward, between $1,000 and $5,000 in XLM","Higher odds of being selected for international conferences and retreats, based on availability","Project advisory sessions available"]
        },
        {name:"Ecosystem Leader",
          objective:"Ecosystem Leader recognizes members generating impact beyond their own project, whether by scaling a product or leading ecosystem growth in their country. As with Builder, there are two possible routes to reach this level.",
          baseline:"Both routes keep verifiable participation and sustained activity within the program.",
          routes:[
            {name:"Product Path", items:["Having a solid product or user validated MVP, with active iteration cycles","Having taken part in a hackathon or applied for an Instaward","Being a candidate for a referral to the Stellar Community Fund (SCF)"]},
            {name:"Ecosystem Path", items:["Leading events, programs, or initiatives on a sustained basis","Connecting projects, institutions, and communities, generating real alliances","Also maintaining participation in an original project, backing the leadership"]}
          ],
          opportunities:["Follow-on Instaward funding, performance based, up to a $15,000 cumulative total","Monthly roundtable with Stellar Community Fund (SCF) voters (Coming soon)","Ability to take on a mentor role for ambassadors in earlier tiers, subject to chapter lead approval","Ability to create original bounties for the rest of the program"]
        }
      ]
    },
    funding:{
      title:"Funding",
      initialLbl:"initial amount, managed with the chapter lead",
      scfName:"Stellar Community Fund (SCF)",
      buildLbl:"Build Award, to take a validated project through launch",
      instaward:["Managed directly with the chapter lead of the corresponding chapter","Reaching Builder level grants access to the initial Instaward","Ecosystem Leader unlocks follow-on funding, up to $15,000 cumulative","Typical review of 3 to 5 business days"],
      scf:["Path available for projects with traction, beyond Instawards","Additional funding to move from a validated project to a mainnet launch"],
      disclaimer:"Being part of the program does not guarantee funding on its own. Every application is evaluated on its own merits.",
      stat1:"Awarded in XLM", stat2:"Funded projects", stat3:"Community members"
    },
    apply:{
      title:"How the application process works",
      steps:[
        {title:"Application", icon:"doc", desc:"Complete the sign up form, open at any time for the program's six countries."},
        {title:"Response", icon:"mail", desc:"Hear back within the next five business days."},
        {title:"First steps", icon:"flag", desc:"Start the Explorer onboarding, the starting point for every new ambassador."},
        {title:"Active participation", icon:"people", desc:"Move toward Contributor and the following levels, at a pace that depends on each person's commitment."}
      ]
    },
    faq:{
      title:"Frequently asked questions",
      items:[
        {q:"Is there any cost to participate?", a:"No, participating in the program is free."},
        {q:"Is there a minimum age to be an ambassador?", a:"Yes, you need to be at least 18 years old."},
        {q:"How long does the commitment last?", a:"There is no fixed duration. It continues for as long as the person stays active in the program."},
        {q:"Can someone be a Stellar ambassador and part of another program at the same time?", a:"Yes, there's no restriction on joining other programs or ecosystems at the same time."},
        {q:"Do you have to be a developer to be an ambassador?", a:"No. The Ecosystem Path at Builder exists specifically for those who lead community without building the technical product directly."},
        {q:"How do I apply for an Instaward?", a:"Reaching the Builder level unlocks the opportunity to apply in the rounds that open monthly. If you've already been building in the ecosystem, or you're migrating from another program and didn't know about the Ambassador Program, you can contact the chapter lead directly to have your case reviewed."},
        {q:"What happens if my chapter isn't one of these six?", a:"Brazil, Chile, Ghana, and Nigeria already have official Stellar chapters, coordinated by other organizations (you can see them in the Join section). For any other country without a chapter yet, the form still allows signing up, indicating country of residence and nearest city, and selecting the closest available chapter."}
      ]
    },
    closing:{ cta:"Join the program now" },
    footer:{
      credit:"Coordinated by Blockchain Acceleration Foundation (BAF)",
      channels:[
        {icon:"discord", href:"https://discord.com/invite/stellardev", label:"Discord"},
        {icon:"telegram", href:"https://t.me/StarMakerAmbassadorsss", label:"Telegram"},
        {icon:"x", href:"https://x.com/StarMaker_LATAM", label:"X"}
      ],
      groups:[
        {
          label:"Documentation",
          links:[
            {label:"Official program guide", tag:null, href:"https://stellar.gitbook.io/ambassador-program"},
            {label:"Resources for the BAF chapters", tag:"Coming soon", href:"javascript:void(0)"}
          ]
        },
        {
          label:"Ecosystem",
          links:[
            {label:"Stellar", tag:null, href:"https://stellar.org/es"},
            {label:"Blockchain Acceleration Foundation", tag:null, href:"https://www.blockchainacceleration.org/"},
            {label:"Instaward Handbook", tag:null, href:"https://stellar.gitbook.io/scf-handbook/scf-awards/instawards"},
            {label:"Stellar Community Fund Handbook", tag:null, href:"https://stellar.gitbook.io/scf-handbook"}
          ]
        },
        {
          label:"Legal",
          links:[
            {label:"SAP Program Terms & Conditions", tag:null, href:"https://stellar.gitbook.io/ambassador-program/resources/terms-and-conditions"},
            {label:"Community Terms & Conditions", tag:"Coming soon", href:"javascript:void(0)"}
          ]
        }
      ],
      note:"Notice: certain elements on this page reflect this chapter's own methodology; the Stellar Development Foundation does not require this same standard across its other chapters. Where anything differs, the official program guide is the source of reference.",
      copyright:"© 2026 Blockchain Acceleration Foundation. All rights reserved.",
      tag:"Stellar Ambassador Program"
    }
  }
};

const tierColors = ['#D6D2C4','#00A7B5','#B7ACE8','#002E5D'];

/* Íconos reales de Lucide (lucide.dev), licencia ISC, incrustados directamente (sin red) */
const ICONS = {"book": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 5v16\" /><path d=\"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z\" /></svg>", "heart": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762\" /></svg>", "link": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M9 17H7A5 5 0 0 1 7 7h2\" /><path d=\"M15 7h2a5 5 0 1 1 0 10h-2\" /><line x1=\"8\" x2=\"16\" y1=\"12\" y2=\"12\" /></svg>", "hammer": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9\" /><path d=\"m18 15 4-4\" /><path d=\"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5\" /></svg>", "sun": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M12 2v2\" /><path d=\"M12 20v2\" /><path d=\"m4.93 4.93 1.41 1.41\" /><path d=\"m17.66 17.66 1.41 1.41\" /><path d=\"M2 12h2\" /><path d=\"M20 12h2\" /><path d=\"m6.34 17.66-1.41 1.41\" /><path d=\"m19.07 4.93-1.41 1.41\" /></svg>", "moon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\" /></svg>", "discord": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M20.317 4.492a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.492a.07.07 0 0 0-.032.028C.533 9.09-.32 13.58.099 18.058a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.1.245.198.372.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.891.076.076 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.029ZM8.02 15.278c-1.182 0-2.157-1.086-2.157-2.42 0-1.333.956-2.42 2.157-2.42 1.211 0 2.176 1.096 2.157 2.42 0 1.334-.956 2.42-2.157 2.42Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.334-.946 2.42-2.157 2.42Z\"/></svg>", "telegram": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.03 8.16c-.163 1.7-.867 5.83-1.225 7.73-.152.805-.45 1.075-.738 1.101-.628.058-1.104-.412-1.712-.808-.951-.622-1.489-1.01-2.412-1.617-1.066-.7-.375-1.086.233-1.716.159-.166 2.923-2.679 2.977-2.907a.216.216 0 0 0-.05-.19c-.06-.05-.146-.033-.21-.02-.09.021-1.514.964-4.27 2.83-.404.278-.771.413-1.1.406-.362-.006-1.058-.204-1.576-.372-.635-.207-1.14-.317-1.096-.669.023-.183.276-.371.759-.564 2.972-1.295 4.955-2.149 5.945-2.562 2.832-1.178 3.42-1.382 3.804-1.389.084-.001.273.02.396.119a.43.43 0 0 1 .145.276c.014.079.031.259.017.4Z\"/></svg>", "x": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231ZM17.083 19.77h1.833L7.084 4.126H5.117Z\"/></svg>"};
async function preloadIcons(){
  return ICONS;
}

let currentLang = 'es';
let activeTier = 0;

function renderStatic(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const path = el.getAttribute('data-i18n').split('.');
    let val = content[lang];
    path.forEach(p=>{ val = val ? val[p] : null; });
    if(val) el.textContent = val;
  });
}

function renderFlags(lang){
  const row = document.getElementById('flagRow');
  row.innerHTML = '';
  content[lang].countries.forEach(c=>{
    const item = document.createElement('div');
    item.className = 'flag-item';
    item.title = c.name;
    item.innerHTML = `<span class="flag-circle">${c.flag}</span><span class="flag-code">${c.code}</span>`;
    row.appendChild(item);
  });
  const more = document.createElement('div');
  more.className = 'flag-item flag-more';
  more.id = 'joinMoreBtn';
  more.title = content[lang].join.more.btn;
  more.innerHTML = `<span class="flag-circle">+</span>`;
  row.appendChild(more);
}

function renderJoin(lang){
  const j = content[lang].join;
  const discord = j.channels[0];
  const telegram = j.channels[1];

  const countries = content[lang].countries.map(co=>`
    <div class="join-country-card">
      <div class="join-country-flag">${co.flag}</div>
      <div>
        <span class="join-country-name">${co.name}</span>
        <span class="join-country-soon">${j.x.soonLabel}</span>
      </div>
    </div>`).join('');

  document.getElementById('joinBento').innerHTML = `
    <div class="bento-card bento-discord">
      <div class="bg-icon">${ICONS.discord || ''}</div>
      <div class="tag"><span class="join-icon discord">${ICONS.discord || ''}</span>${discord.tag}</div>
      <h3>${discord.name}</h3>
      <p>${discord.desc}</p>
      <a class="join-link" href="https://discord.com/invite/stellardev" target="_blank" rel="noopener">${discord.link} →</a>
    </div>
    <div class="bento-card bento-telegram">
      <div class="bg-icon">${ICONS.telegram || ''}</div>
      <div class="tag"><span class="join-icon telegram">${ICONS.telegram || ''}</span>${telegram.tag}</div>
      <h3>${telegram.name}</h3>
      <p>${telegram.desc}</p>
      <a class="join-link" href="https://t.me/StarMakerAmbassadorsss" target="_blank" rel="noopener">${telegram.link} →</a>
    </div>
    <div class="bento-card bento-x">
      <div class="bg-icon">${ICONS.x || ''}</div>
      <div class="tag"><span class="join-icon x">${ICONS.x || ''}</span>${j.x.eyebrow}</div>
      <h3>X</h3>
      <p>${j.x.note}</p>
      <a class="join-cta" href="https://x.com/StarMaker_LATAM" target="_blank" rel="noopener">${j.x.cta}</a>
    </div>
    <div class="bento-card bento-countries">
      <div class="join-country-label">${j.x.soonTitle}</div>
      <div class="join-country-grid">${countries}</div>
    </div>`;

  renderMoreModal(lang);
}

function renderMoreModal(lang){
  const m = content[lang].join.more;
  document.getElementById('joinMoreTitle').textContent = m.title;
  document.getElementById('joinMoreIntro').innerHTML = `${m.intro} <a href="https://stellar.gitbook.io/ambassador-program" target="_blank" rel="noopener">${m.gitbookLink} ↗</a>.`;
  document.getElementById('joinMoreNote').textContent = m.note;
  document.getElementById('joinMoreList').innerHTML = m.countries.map(co=>`
    <div class="join-country-card">
      <div class="join-country-flag">${co.flag}</div>
      <div><span class="join-country-name">${co.name}</span></div>
    </div>`).join('');
  document.getElementById('joinMoreCtas').innerHTML = `
    <a class="join-cta" href="https://airtable.com/appWdW69QmA0v16SM/pagLIW9lbEHzkWU4V/form" target="_blank" rel="noopener">${m.ctaApply}</a>
    <a class="join-cta ghost" href="https://discord.com/invite/stellardev" target="_blank" rel="noopener">${m.ctaDiscord}</a>`;
}

function renderAxes(lang){
  const grid = document.getElementById('axesGrid');
  grid.innerHTML = '';
  content[lang].axes.forEach((a,i)=>{
    const div = document.createElement('div');
    div.className = 'axis-card';
    div.innerHTML = `<div class="axis-icon">${ICONS[a.icon] || ''}</div><span class="axis-mark">0${i+1}</span><h3>${a.name}</h3><p>${a.desc}</p>`;
    grid.appendChild(div);
  });
}

function renderTiers(lang){
  const pillsWrap = document.getElementById('tierPills');
  pillsWrap.innerHTML = '';
  content[lang].tiers.list.forEach((t,i)=>{
    const pill = document.createElement('button');
    pill.className = 'tier-pill' + (i===activeTier ? ' active' : '');
    pill.innerHTML = `<span class="dot" style="background:${tierColors[i]}"></span><span class="num">0${i+1}</span> ${t.name}`;
    pill.addEventListener('click', ()=>{ activeTier = i; renderTiers(currentLang); });
    pillsWrap.appendChild(pill);
  });
  const t = content[lang].tiers.list[activeTier];
  const panel = document.getElementById('tierPanel');
  panel.style.setProperty('--tier-active', tierColors[activeTier]);
  const oppLis = t.opportunities.map(o=>`<li>${o}</li>`).join('');
  let middleHtml = '';
  if(t.routes){
    const routesHtml = t.routes.map(r=>{
      const items = r.items.map((i,idx)=>`<li data-n="${idx+1}.">${i}</li>`).join('');
      return `<div class="tier-block req"><h4>${r.name}</h4><ul>${items}</ul></div>`;
    }).join('');
    middleHtml = `
      <p class="baseline">${t.baseline || ''}</p>
      <div class="tier-cols routes">${routesHtml}</div>
      <div class="tier-block opp full"><h4>${lang==='es'?'Oportunidades':'Opportunities'}</h4><ul>${oppLis}</ul></div>`;
  } else {
    const reqLis = t.requirements.map((r,i)=>`<li data-n="${i+1}.">${r}</li>`).join('');
    middleHtml = `
      <div class="tier-cols">
        <div class="tier-block req"><h4>${lang==='es'?'Requisitos':'Requirements'}</h4><ul>${reqLis}</ul></div>
        <div class="tier-block opp"><h4>${lang==='es'?'Oportunidades':'Opportunities'}</h4><ul>${oppLis}</ul></div>
      </div>`;
  }
  panel.innerHTML = `
    <h3 class="tname">0${activeTier+1} ${t.name}</h3>
    <p class="objective">${t.objective}</p>
    ${middleHtml}`;
}

function renderFunding(lang){
  document.getElementById('instawardList').innerHTML = content[lang].funding.instaward.map(i=>`<li>${i}</li>`).join('');
  document.getElementById('scfList').innerHTML = content[lang].funding.scf.map(i=>`<li>${i}</li>`).join('');
}

let activeApplyStep = 0;

function renderApply(lang){
  updateApplyContent(lang);
}

function updateApplyContent(lang){
  const step = content[lang].apply.steps[activeApplyStep];
  const total = content[lang].apply.steps.length;
  document.getElementById('applyMegaNum').textContent = `0${activeApplyStep+1}`;
  document.getElementById('applyMegaTotal').textContent = `/ 0${total}`;
  const titleEl = document.getElementById('applyStepTitle');
  const textEl = document.getElementById('applyBigText');
  titleEl.classList.remove('in');
  textEl.classList.remove('in');
  titleEl.textContent = step.title;
  textEl.textContent = step.desc;
  requestAnimationFrame(()=>{ titleEl.classList.add('in'); textEl.classList.add('in'); });
  document.querySelectorAll('.apply-photo').forEach(p=>{
    p.classList.toggle('active', Number(p.dataset.step) === activeApplyStep);
  });
}

function handleApplyScroll(){
  const wrapper = document.getElementById('applyScroll');
  const slide = document.getElementById('applySlide');
  if(!wrapper || !slide) return;
  const total = content[currentLang].apply.steps.length;
  const rect = wrapper.getBoundingClientRect();
  const slideHeight = slide.offsetHeight;
  const scrollableDistance = wrapper.offsetHeight - slideHeight;
  let progress = -rect.top / scrollableDistance;
  progress = Math.max(0, Math.min(0.999, progress));
  const idx = Math.floor(progress * total);
  document.getElementById('applyProgressFill').style.width = (progress*100) + '%';
  if(idx !== activeApplyStep){
    activeApplyStep = idx;
    updateApplyContent(currentLang);
  }
}
window.addEventListener('scroll', handleApplyScroll, {passive:true});
window.addEventListener('resize', handleApplyScroll);

function renderFaq(lang){
  const wrap = document.getElementById('faqList');
  const openStates = Array.from(wrap.querySelectorAll('.faq-item')).map(f=>f.classList.contains('open'));
  wrap.innerHTML = '';
  content[lang].faq.items.forEach((item,i)=>{
    const div = document.createElement('div');
    div.className = 'faq-item' + (openStates[i] ? ' open' : '');
    div.innerHTML = `
      <button class="faq-q"><span>${item.q}</span><span class="mark">+</span></button>
      <div class="faq-a"><p>${item.a}</p></div>`;
    div.querySelector('.faq-q').addEventListener('click', ()=> div.classList.toggle('open'));
    wrap.appendChild(div);
  });
}

function renderFooter(lang){
  const f = content[lang].footer;
  const legal = document.getElementById('footerLegal');
  legal.innerHTML = f.groups.map(g=>`
    <div class="footer-link-group">
      <div class="footer-group-label">${g.label}</div>
      ${g.links.map(l=>`
        <a href="${l.href}" target="_blank" rel="noopener">${l.label}${l.tag ? `<span class="footer-link-tag">${l.tag}</span>` : ''}</a>`).join('')}
    </div>`).join('');

  document.getElementById('footerChannels').innerHTML = f.channels.map(c=>`
    <a class="footer-channel" href="${c.href}" target="_blank" rel="noopener" aria-label="${c.label}">${ICONS[c.icon] || ''}</a>`).join('');

  document.getElementById('footerBottom').innerHTML = `
    <span>${f.copyright}</span>
    <span>${f.tag}</span>`;
}

function render(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  renderStatic(lang);
  renderFlags(lang);
  renderJoin(lang);
  renderAxes(lang);
  renderTiers(lang);
  renderFunding(lang);
  renderApply(lang);
  renderFaq(lang);
  renderFooter(lang);
  const words = content[lang].hero.tagline.split(' ');
  const paintDynamic = (el)=>{
    if(!el) return;
    el.innerHTML = words.map((w,i)=>`<span class="dynamic-word" style="animation-delay:${i*-1.6}s;">${w}</span>`).join(' ');
  };
  paintDynamic(document.getElementById('heroTagline'));
  paintDynamic(document.getElementById('closingTagline'));
  document.querySelectorAll('.lang-btn').forEach(b=> b.classList.toggle('active', b.dataset.lang===lang));
}

document.querySelectorAll('.lang-btn').forEach(btn=>{
  btn.addEventListener('click', ()=> render(btn.dataset.lang));
});

const preloaderMinTime = new Promise(resolve => setTimeout(resolve, 150));
Promise.all([preloadIcons(), preloaderMinTime]).then(([icons])=>{
  document.getElementById('iconSun').innerHTML = ICONS.sun;
  document.getElementById('iconMoon').innerHTML = ICONS.moon;
  applyTheme('light');
  render('es');
  handleApplyScroll();
  const preloader = document.getElementById('preloader');
  if(preloader) preloader.classList.add('hide');
});

const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=> revealObserver.observe(el));

window.addEventListener('scroll', ()=>{
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 8);
});

/* ---------- barra de progreso de scroll ---------- */
const scrollProgressEl = document.getElementById('scrollProgress');
function updateScrollProgress(){
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollProgressEl.style.width = progress + '%';
}
window.addEventListener('scroll', updateScrollProgress, {passive:true});
window.addEventListener('resize', updateScrollProgress);
updateScrollProgress();

/* ---------- nav activo segun seccion visible ---------- */
const navSpyLinks = document.querySelectorAll('.navlinks a');
const navSpySections = ['join','tiers','funding','faq'].map(id=> document.getElementById(id)).filter(Boolean);
const navSpyObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navSpyLinks.forEach(a=>{
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, {rootMargin:'-45% 0px -50% 0px'});
navSpySections.forEach(sec=> navSpyObserver.observe(sec));

/* ---------- boton volver arriba ---------- */
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', ()=>{
  backToTopBtn.classList.toggle('show', window.scrollY > 600);
}, {passive:true});
backToTopBtn.addEventListener('click', ()=>{
  window.scrollTo({top:0, behavior:'smooth'});
});

const joinMoreOverlay = document.getElementById('joinMoreOverlay');
function openJoinMore(){ joinMoreOverlay.classList.add('open'); }
function closeJoinMore(){ joinMoreOverlay.classList.remove('open'); }
document.addEventListener('click', (e)=>{
  if(e.target.closest('#joinMoreBtn')) openJoinMore();
  if(e.target === joinMoreOverlay) closeJoinMore();
});
document.getElementById('joinMoreClose').addEventListener('click', closeJoinMore);
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeJoinMore();
});

function animateCount(el){
  if(el.dataset.animated === '1') return;
  el.dataset.animated = '1';
  const target = parseFloat(el.dataset.count);
  const duration = 1600;
  const start = performance.now();
  function tick(now){
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = target * eased;
    if(el.dataset.count === '42') el.textContent = '$' + Math.round(val) + 'M';
    else if(el.dataset.count === '7.6') el.textContent = val.toFixed(1) + 'K';
    else el.textContent = Math.round(val);
    if(p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const statObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('[data-count]').forEach(animateCount);
      statObserver.unobserve(e.target);
    }
  });
}, {threshold:0.05, rootMargin:'0px 0px -20px 0px'});
const statsBlock = document.querySelector('.funding-stats');
if(statsBlock) statObserver.observe(statsBlock);

/* ---------- custom cursor ---------- */
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
window.addEventListener('mousemove', (e)=>{
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});
function animateRing(){
  ringX += (mouseX - ringX) * 0.18;
  ringY += (mouseY - ringY) * 0.18;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

/* ---------- rastro de pixeles dorados detras del cursor ---------- */
const TRAIL_COUNT = 6;
const trailDots = [];
for(let i=0;i<TRAIL_COUNT;i++){
  const d = document.createElement('div');
  d.className = 'cursor-trail';
  const size = 6 - i * 0.7;
  d.style.width = size + 'px';
  d.style.height = size + 'px';
  d.style.opacity = (0.5 - i * 0.07).toFixed(2);
  document.body.appendChild(d);
  trailDots.push({el:d, x:0, y:0});
}
function animateTrail(){
  let targetX = mouseX, targetY = mouseY;
  trailDots.forEach((t)=>{
    t.x += (targetX - t.x) * 0.35;
    t.y += (targetY - t.y) * 0.35;
    t.el.style.left = t.x + 'px';
    t.el.style.top = t.y + 'px';
    targetX = t.x; targetY = t.y;
  });
  requestAnimationFrame(animateTrail);
}
animateTrail();

/* ---------- explosion de pixeles dorados al hacer click ---------- */
document.addEventListener('click', (e)=>{
  const count = 8;
  for(let i=0;i<count;i++){
    const p = document.createElement('div');
    p.className = 'click-pixel';
    const angle = (Math.PI * 2 * i) / count + Math.random()*0.4;
    const dist = 26 + Math.random()*22;
    p.style.left = e.clientX + 'px';
    p.style.top = e.clientY + 'px';
    p.style.setProperty('--px', (Math.cos(angle)*dist) + 'px');
    p.style.setProperty('--py', (Math.sin(angle)*dist) + 'px');
    document.body.appendChild(p);
    setTimeout(()=> p.remove(), 600);
  }
});
document.querySelectorAll('a, button, .tier-pill, .faq-q, #backToTop').forEach(el=>{
  el.addEventListener('mouseenter', ()=>{ cursorDot.classList.add('hover'); cursorRing.classList.add('hover'); });
  el.addEventListener('mouseleave', ()=>{ cursorDot.classList.remove('hover'); cursorRing.classList.remove('hover'); });
});

/* ---------- parallax sutil del fondo del hero ---------- */
const heroBg = document.querySelector('.hero-bg');
if(heroBg){
  window.addEventListener('scroll', ()=>{
    heroBg.style.transform = `translateY(${window.scrollY*0.15}px) scale(1.05)`;
  });
}

/* ---------- magnetic primary CTA buttons ---------- */
document.querySelectorAll('.btn.gold').forEach(btn=>{
  btn.addEventListener('mousemove', (e)=>{
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    btn.style.transform = `translate(${x*0.25}px, ${y*0.4}px)`;
  });
  btn.addEventListener('mouseleave', ()=>{ btn.style.transform = 'translate(0,0)'; });
});
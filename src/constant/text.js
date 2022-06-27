import { useLang } from "../context/lang-context"
import { useStaticQuery, graphql } from "gatsby"

const useFooterText = () => {
  const [lang] = useLang()

  const footerText = {
    ar: {
      callus: "اتصل بنا:",
      contact: "التواصل الاجتماعي: ",
      address: "العنوان:",
      phone: "الهاتف: ",
      email: "الإيميل: ",
    },

    en: {
      callus: "Call Us: ",
      contact: "Social media:",
      address: "Address: ",
      phone: "Phone: ",
      email: "Email: ",
    },
  }

  const allRightText = {
    ar: {
      text: " ﺟﻤﻴﻊ اﻟﺤﻘﻮق ﻣﺤﻔﻮﻇﺔ",
      name: " هيئة تطوير التعليم ",
    },
    en: {
      text: "All right reserved",
      name: "Education Development Commission",
    },
  }

  return {
    footerText: footerText[lang],
    allRightText: allRightText[lang],
  }
}

const useHomePageText = () => {
  const [lang] = useLang()
  const aboutText = {
    ar: {
      text: `
      نعمل على دعم التعليم في المناطق المنكوبة وإنشاء مدارس نوعيّة لتقديم
      تعليم عالي الجودة، وافتتاح مراكز تعليميّة خاصّة بالأطفال الأيتام
      وأبناء الشهداء، تهدف إلى تأمين الرعاية التعليميّة والاجتماعيّة
      والصحيّة للأطفال الأيتام في المدرسة، لتحقيق التكافل والرعاية
      الاجتماعية، ووضعهم في بيئة صحّية سليمة، وتخفيف وطأة الحرمان وهول
      المصيبة لديهم بعد فقدانهم لمن كان يعولهم ويرعاهم.
      `,
    },
    en: {
      text: `
            We are working to support education in the affected areas and establish quality schools to provide high-quality education, and to open education centers for orphaned children and the children of martyrs, aimed at providing educational, social and health care for orphaned children in school in order to achieve solidarity and social care, and put them in a healthy and sound environment, and alleviate the burden of deprivation and the terrible calamity they have after losing those who used to support and care for them.
            `,
    },
  }

  const stories = {
    ar: {
      busher: `
    بشر محمود إبراهيم طفل مبدع في الصّف الخامس من روّاد منتدى
    دابق الثقافي... نشأ في أسرة محبّة للعلم، وتربّى على
    الأخلاق الحسنة والمعاملة الجميلة من والديه. رغم ألمه
    الكبير بفقدان والده الذي نالته يد الأسر في سجون النظام
    لعدّة سنوات لم يستسلم بشر وكانت رغبته وطموحه أقوى من آلامه
    حيث تمّيز بين أقرانه في الخطابة وإلقاء الشعر وها هو يتحف
    المركز بأعذب الأصوات شعراً ونثراً. نأمل أن نراه في
    المستقبل شاعراً عظيماً وخطيباً فقيهاً، ويكون بذلك منارةً
    لجيله ونبراساً يرتقي وينهض بمن حوله بالعلم والأدب.
    `,
      muhammad: `
    محمد رجب البدوي هو طالب في الصف الخامس من مدينة الأتارب
    يمتلك حسًّا رفيعًا وشخصيّةً قويّةً وإحساسًا مرهفًا، استشهد
    والده في هذه الحرب الظالمة على يد آلة غدر النظام السوريّ
    وحلفائه، لكنّ ذلك لم يثنه عن مواصلة تعلّمه. قرّر محمّد أن
    يحقّق حلم والده في التفوّق والتميّز فأحبّ اللغة العربيّة
    بشغف وتذوّق جمالها، فأخلص لها وأتقن قراءة حروفها وكتابتها
    وتفوّق في كلّ فنونها؛ فكان خطيبًا بارعًا يشدّ الأنظار إليه
    بأسلوبه الشائق وذكائه الفطريّ، وخلقه الرفيع. يحلم محمّد أن
    يكون في المستقبل أديبًا ذا شأنٍ يسهم في تنمية العقول
    ويشارك في بناء سوريّة الجديدة التي تنتظر خبرات أبنائها
    وجهودهم المخلصة.
    `,
      haj: `
    الطالب قسورة حاج حسن من مواليد حلب عام 2008م. عاش في جو من
    الخوف واليأس بعد أن غيّب الموت أباه الذي كان مصدر الأمان
    والأمل له؛ بسبب الحرب الدائرة في سوريا والتي أتت على كلّ
    شيء، فترك المدرسة في وقتٍ مبكّرٍ والتحق بسوق العمل وهو طفل
    صغير ليعيل عائلته ويقدّم لهم ما يسدّ الرمق ويمسك الحياة،
    كان ينظر بحسرة إلى أقرانه الذين يرتادون المدارس ويحلمون
    بمستقبل زاهر، ثمّ شاءت الأقدار له أن يلتحق بمدارس هيئة
    تطوير التعليم لتعوضه وترسم له الأمل بحياة أفضل. قسورة
    اليوم من أفضل طلاب مدارس هيئة تطوير التعليم علمًا وخلقًا،
    يرسم طريقه للمستقبل بخطى واثقة يحدوها الهدف والطموح.
    `,
      title: "رواد التميز",
    },
    en: {
      busher: `
      Bishr Mahmoud Ibrahim, a creative child in grade 5, one of the pioneers of the Dabiq Cultural Forum. He grew up in a family that loved science, and was raised on good morals and the beautiful treatment of his parents. Despite his great pain for the loss of his father, who was captured in the prisons of the Syrian regime for several years, Bishr did not give up, and his desire and his ambition were stronger than his pain, as he distinguished himself among his peers in oratory and poetry recitation, and here he is mastering the center with the sweetest voices in poetry and prose. We hope to see him in the future as a great poet, an orator and a jurist, and thus be a beacon for his generation and a lantern that advances those around him with science and literature.
      `,
      muhammad: `
      Muhammad Rajab Al-Badawi is a grade 5 student from the city of Atarib, who possesses a fine sense, a strong personality and a delicate sense. His father was martyred in this unjust war at the hands of the treachery machine of the Syrian regime and its allies, but that did not discourage him from continuing his education. Muhammad decided to fulfill his father's dream of excellence and distinction. He passionately loved the Arabic language and tasted its beauty. He was devoted to it and mastered reading and writing its letters and excelled in all its arts. He was a brilliant orator who drew attention to him with his interesting style, innate intelligence, and high morals. Muhammad dreams of being an important writer in the future, contributing to the development of minds and participating in building the new Syria, which awaits the experiences and sincere efforts of its people.
      `,
      haj: `The student, Qaswra Hajj Hassan, was born in Aleppo in 2008. He lived in an atmosphere of fear and despair after his father, who used to be a source of safety and hope for him, had passed away because of the war in Syria, which had ruined everything. He left school at an early age and joined the labor market as a young child to support his family and provide them with what makes their living and preserves their life. He was looking sadly on his peers who attended school and dreamed of a bright future, then he was destined to join the schools of Education Development Commision to compensate him and give him hope for a better life. Today, Qaswra is one of the best students of Education Development Commission schools in knowledge and ethics, he charting his way to the future with confident steps, driven by purpose and ambition.`,
      title: "Excellence Pioneers",
    },
  }

  const eventTitle = {
    ar: `آخر الفعاليات`,
    en: "Latest Events",
  }
  const reportTitle = {
    ar: `التقارير`,
    en: "Reports",
  }

  const partnerText = {
    ar: {
      partnerTitle: `
      شركاؤنا:
      `,
      partnerBody: `
      تتعاون هيئةُ تطوير التعليم لأداء رسالتها مع جهات خيريّة وتعليميّة عدّة، مختصّة في العمليّة التعليميّة أو
مهتمّة بها. وتتوزّع هذه الجهات في بلاد مختلفة حول العالم، كالأردنّ وتركيا والبحرين وألمانيا وبريطانيا ، حيث
تشمل جامعات رائدة في مجال الأبحاث التعليميّة والتربويّة مثل جامعة "فرايبورغ" في ألمانيا وجامعة "لودفيغ
ماكسيميليان" في مدينة "ميونخ" في جنوب ألمانيا. كما تتعاون الهيئة مع مجموعات من المتطوّعين المختصيّن
والمهتّمين في مجال التّعليم وخاصّةً تعليم الأطفال في الأزمات حول العالم
      `,
    },
    en: {
      partnerTitle: `
      Our Partners:
      `,
      partnerBody: `
      Education Development Commission cooperates to carry out its mission with several charitable and educational bodies, specialized in or interested in the educational process. These bodies are distributed in different countries around the world, such as Jordan, Turkey, Bahrain, Germany, and Britain. They include leading universities in the field of educational research, such as the University of Freiberg in Germany and the University of Ludwig Maximilian in the city of Munich in southern Germany. The commission also cooperates with groups of volunteers specialized and interested in the field of education, especially the education of children in crises around the world.
      `,
    },
  }
  return {
    aboutText: aboutText[lang],
    stories: stories[lang],
    eventTitle: eventTitle[lang],
    reportTitle: reportTitle[lang],
    partnerText: partnerText[lang],
  }
}

const useAboutText = () => {
  const [lang] = useLang()
  const slogan = {
    ar: {
      text1: "تمكيــن..",
      text2: "اكتشاف..",
      text3: "ابتــكار..",
    },
    en: {
      text1: "Empower..",
      text2: "Discover..",
      text3: "Innovate..",
    },
  }

  const buttonsLinks = [
    {
      ar: "من نحن",
      en: "About Us",
      link: "/who_we_are",
    },
    {
      ar: "رؤيتنا",
      en: "Our Vision",
      link: "/our_vision",
    },
    {
      ar: "رسالتنا",
      en: "Our Message",
      link: "/our_message",
    },
  ]

  const achivmentTitle = {
    ar: `منجزاتنا:`,
    en: `Our Achievements:`,
  }

  const { slides, slidesOurVision, howWeAreSlides } = useStaticQuery(graphql`
    {
      slides: sanityImagesSlide(title: { eq: "ourMessagePage" }) {
        aboutPageSlide {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }

      slidesOurVision: sanityImagesSlide(title: { eq: "WhoWeArePage" }) {
        aboutPageSlide {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      howWeAreSlides: sanityImagesSlide(title: { eq: "WhoWeArePage" }) {
        aboutPageSlide {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)

  const ourMessageText = [
    {
      text: {
        ar: `
        عقد مؤتمرات تعليميّة ووُرش عمل لنشر الوعي بأهميّة هذه المشاريع وتطويرها.
  
          `,
        en: `
        Holding educational conferences and workshops to spread awareness of the importance and development of these projects.
        `,
      },

      img: slides.aboutPageSlide[0].asset.fluid,
      id: 1,
    },
    {
      text: {
        ar: `
        إنتاج أوراقِ عملٍ، والمساهمةُ في أبحاثٍ متعلّقة بتطوير التعليم في أماكن
        النزاعات والحروب.
        `,
        en: `
        Compiling working papers and contributing to research related to the development of education in places of conflict and war.
        `,
      },

      img: slides.aboutPageSlide[1].asset.fluid,
      id: 2,
    },
    {
      text: {
        ar: `
        تدريب وتطوير المدرّسين العاملين في أماكن النّزاع، ليتمكّنوا من تدريس
        المناهج الخاصّة بطرقٍ إبداعيّة.
        `,
        en: `
        Training and developing teachers working in conflict areas, to be able to teach the special curricula in creative ways.
        `,
      },

      img: slides.aboutPageSlide[2].asset.fluid,
      id: 3,
    },
    {
      text: {
        ar: `
        وفي مسيرتنا نحو رؤيتنا الاستراتيجيّة ولتحقيق رسالتنا على المستويات
        كافّة، فإنّنا نحتكم إلى منظومة قيمنا المشتركة التي ستبقى دومًا مرجعيّتنا
        الأولى والأساسيّة.
        `,
        en: `
        In our march towards our strategic vision and to achieve our mission at all levels, we appeal to our common values system, which will always remain our first and primary reference.
        `,
      },

      img: slides.aboutPageSlide[3].asset.fluid,
      id: 4,
    },
    {
      text: {
        ar: `
        كما تسعى هيئة تطوير التعليم إلى توفير مناخ تعليميّ متّزن من حيث الوسائل
        التعليميّة والأدوات اللازمة للطلاب؛ لتنمية مهارات الطلاب العلميّة
        والذهنيّة والاجتماعيّة والبدنيّة وعلى يد كفاءات بكافّة التخصّصات حسب
        المناهج السوريّة المعتمدة بالإضافة إلى المناهج الداعمة الأخرى، ويتمّ منح
        الطلاب شهادات معتمدة ومصدقة من وزارة التربية والتعليم.
        `,
        en: `
        Education Development Commission also seeks to provide a balanced educational climate in terms of educational aids and necessary tools for students to develop students’ scientific, mental, social, and physical skills, by competencies in all majors, according to the approved Syrian curricula in addition to other supporting curricula. Students are granted certificates approved and certified by the Ministry of Education.
        `,
      },

      img: slides.aboutPageSlide[4].asset.fluid,
      id: 5,
    },
    {
      text: {
        ar: `
        وتهدف هيئة تطوير التعليم إلى بناء شخصيّة المتعلم المتوازنة بجوانبها
        الوجدانيّة والعلميّة والفكريّة والاجتماعيّة والنفسيّة والجسديّة عن طريق
        اكتساب المعارف والمهارات والاتّجاهات والقيم الخلقيّة التي تمكّنه من
        تطوير نفسه واستخدام التقنيات بشكل إيجابيّ وفق مستواه العمريّ وتوظيفها في
        المواقف الحياتية وتهيئته للمرحلة الدراسيّة التالية، ويتحقق ذلك من خلال
        تحقيق الأهداف العامّة.
        `,
        en: `
        Education Development Commission aims to build the learner’s balanced personality with its emotional, scientific, intellectual, social, psychological, and physical aspects by acquiring knowledge, skills, attitudes, and moral values that enable him to develop himself and use techniques positively according to his age level and employ them in life situations and prepare him for the next academic stage, and this is achieved by achieving the general goals.
        `,
      },

      img: slides.aboutPageSlide[5].asset.fluid,
      id: 6,
    },
    {
      text: {
        ar: `
        التعاون مع خبراء في مجال التّعليم وتطوير المناهج، داخلَ العالم العربيّ
        وخارجَه.
        `,
        en: `
        Cooperate with experts in the field of education and curriculum development, inside and outside the Arab world.
        `,
      },

      img: slides.aboutPageSlide[6].asset.fluid,
      id: 7,
    },
    {
      text: {
        ar: `
        التعاون مع المنظّمات المحليّة والدوليّة بالإضافة إلى الجمعيّات الخيريّة
        في العمل على مشاريع تعليميّة محدّدة.
        `,
        en: `
        Cooperate with local and international organizations as well as charitable societies in working on specific educational projects.
        `,
      },

      img: slides.aboutPageSlide[7].asset.fluid,
      id: 8,
    },
  ]

  const ourVisionText = [
    {
      text: {
        ar: ` تلتزم هيئة تطوير التعليم بتقديم تعليم شامل عالي الجودة للطلاب في أماكن
        الأزمات.`,
        en: ` Education Development Commission is committed to provide high-quality inclusive education to students in crisis places`,
      },

      img: slidesOurVision.aboutPageSlide[0].asset.fluid,
      id: 1,
    },
  ]

  const howWeAreText = [
    {
      text: {
        ar: `
        هيئة تطوير التعليم هي منظّمة غير حكوميّة وغير ربحيّة، تعمل على تطوير
        مناهج دراسيّة خاصّة للطلاب في مناطق الحروب والنزاعات، لتساعدهم على إدراك
        ما فاتهم من سنوات دراسيّة بسب الحروب. وجاءت فكرة تأسيس الهيئة من إيمان
        القائمين عليها بوجوب توفّر فرص التعليم النوعيّ لكافّةِ الأطفال الذين
        يقطنون في أماكن النزاعات، بغضّ النظر عن وضعهم الاجتماعيّ، وطبيعة النزاع
        السائد في مناطقهم.
        `,
        en: `
        Education Development Commission is a non-governmental, non-profit organization that works to develop special curricula for students in war and conflict areas, to help them catch-up the years of school that they have missed due to wars. The idea of establishing the commission came from the belief of those in charge of it that quality education opportunities should be available to all children who live in conflict areas, regardless of their social status and the nature of the conflict prevailing in their areas.
        `,
      },

      img: howWeAreSlides.aboutPageSlide[0].asset.fluid,
      id: 1,
    },
    {
      text: {
        ar: `
        كما وجدت الهيئة – بالإضافة للحاجة إلى فرص تعليم متساوية – حاجةً ماسّة
        إلى الدّعم النفسيّ للأطفال والمدرّسين المقيمين في أماكن الحرب. ومن هنا
        عمدت الهيئةُ إلى دمج العمليّة التعليميّة والطرق النفسيّة الحديثة لمساعدة
        الأطفال على تجاوز الصدمات النفسيّة التي تعرّضوا لها، وبناء شخصيّاتهم
        ومساعدتهم على تحقيق طموحهم؛
        `,
        en: `
        In addition to the need for equal education opportunities, the commission also found an urgent need for psychological support for children and teachers residing in war zones. Hence, the commission has integrated the educational process and modern psychological methods to help children overcome the psychological trauma they have had, build their personalities, and help them achieve their ambitions.
        `,
      },
      id: 2,
      img: howWeAreSlides.aboutPageSlide[1].asset.fluid,
    },
    {
      text: {
        ar: `
        ولتحقيق هذا الهدف، تعمل هيئة تطوير التعليم عن قرب مع خبراءَ في مجال
        التعليم والتطوير النفسيّ للأطفال، بالإضافة إلى منظّمات رائدة مختصّة في
        البلاد التي يتمّ العملُ فيها، من أجل تقديم أفضل الخدمات إلى تلك الشريحة
        ومراعاة الحساسيّة النفسيّة والاجتماعيّة التي يعاني منها هؤلاء الأطفال.

        `,
        en: `
        To achieve this goal, Education Development Commission works closely with experts in the field of education and psychological development for children, in addition to leading specialized organizations in the countries in which they are working, in order to provide the best services to this segment and take into account the psychological and social sensitivity of these children.
        `,
      },

      id: 3,
      img: howWeAreSlides.aboutPageSlide[2].asset.fluid,
    },
    {
      text: {
        ar: `
        وتعمل هيئة تطوير التعليم أيضًا على دعم التعليم الرسميّ في المناطق
        المنكوبة وإنشاء مدارس نوعيّة لتقديم تعليم عالي الجودة، وافتتاح مراكز
        تعليميّة خاصّة بالأطفال الأيتام وأبناء الشهداء، تهدف إلى تأمين الرعاية
        التعليميّة والاجتماعيّة والصحّيّة للأطفال للأيتام في المدرسة، لتحقيق
        التكافل والرعاية الاجتماعيّة، ووضعهم في بيئة صحّية سليمة، وتخفيف وطأة
        الحرمان وهول المصيبة لديهم بعد فقدانهم لمن كان يعولهم ويرعاهم.
        `,
        en: `
        Education Development Commission also works to support formal education in stricken areas and establish quality schools to provide high quality education and start education centers for orphaned children and children of martyrs, aiming to provide educational, social and health care for orphans in school, to achieve solidarity and social care, and to place them in a healthy and sound environment, and to alleviate the burden of deprivation and the terrible calamity they have after their loss the one who used to sustain and care for them.
        `,
      },
      id: 4,
      img: howWeAreSlides.aboutPageSlide[3].asset.fluid,
    },
    {
      text: {
        ar: `
        وتُدافعُ الهيئة بقوّة عن قيمها المتمثّلة في العدالة والمساواة والتطوير،
        ولا تنحاز إلى أيّة مجموعة سياسيّة في مناطق النزاع قيد العمل.
        `,
        en: `The commission vigorously defends its values of justice, equality, and development, and does not align itself with any political group working in conflict areas.`,
      },
      id: 5,
      img: howWeAreSlides.aboutPageSlide[4].asset.fluid,
    },
  ]
  return {
    slogan: slogan[lang],
    buttonsLinks,
    achivmentTitle: achivmentTitle[lang],
    ourMessageText,
    ourVisionText,
    howWeAreText,
  }
}

const useProjectText = () => {
  const [lang] = useLang()
  const heroText = {
    ar: {
      heroTitle: "تتعاون هيئة تطوير التعليم",
      heroBody: `
          مع المنظّمات والجمعيّات المحليّة
والدوليّة في العمل على مشاريع
تعليمّية. 
          `,
    },
    en: {
      heroTitle: "Education Development Commission cooperates",
      heroBody: `
      with local and international organizations and societies in working on educational projects.
      `,
    },
  }

  const workshopsText = {
    ar: {
      title: `
            المؤتمرات وورشات العمل:
            `,
      body: `
            تعمل هيئة تطوير التعليم على عقد مؤتمرات سنويّة، لمناقشة تداعيات العمليّة التعليميّة وبحث أفضل الطرق
لدفع تلك العمليّة إلى الأمام.  
            `,
    },
    en: {
      title: `Conferences and Workshops:`,
      body: `Education Development Commission holds annual conferences to discuss the implications of the educational process and the best ways to advance this process.`,
    },
  }
  return {
    heroText: heroText[lang],
    workshopsText: workshopsText[lang],
  }
}

const useEventsText = () => {
  const [lang] = useLang()
  const heroTitle = {
    ar: {
      heroTitle: "الفعاليّات والأنشطة",

      heroBody: `
      تلعب الفعاليّات والأنشطة دوراً بارزاً في بناء شخصيّة الطالب من خلال تنمية قدراته ومواهبه وتعديل سلوكه واحتياجاته النفسيّة.
          `,
    },
    en: {
      heroTitle: `Events and Activities`,
      heroBody: `Events and activities play a prominent role in building student's personality by developing his abilities and talents, modifying his behavior and psychological needs.`,
    },
  }
  return {
    heroTitle: heroTitle[lang],
  }
}

const useContactText = () => {
  const [lang] = useLang()
  const contactText = {
    ar: {
      heroTitle: "يسرّ هيئة تطوير التعليم",
      heroBody: `
      الإجابة على استفساراتكم والاستماع
      لآرائكم والرد على تعليقاتكم. 
          `,
    },
    en: {
      heroTitle: "Education Development Commission is pleased",
      heroBody: `
      to answer your inquiries, listen to your opinions and respond to your comments.
      `,
    },
  }

  const contactTitle = {
    ar: "اتصل بنا:",
    en: "Call Us:",
  }
  const meassageText = {
    ar: "اترك لنا رسالة:",
    en: "Leave a message:",
  }

  const messageForm = {
    ar: {
      emailText: "الإيميل",
      name: "الاسم",
      phone: "الهاتف",
      buttonText: "أرسل",
      text: "نص الرسالة",
    },
    en: {
      emailText: "Email",
      name: "Name",
      phone: "Phone",
      buttonText: "Send",
      text: "Message",
    },
  }
  const messageResponse = {
    ar: ` شكراً على رسالتكم. سوف نرد عليكم في أقرب وقت ممكن.`,
    en: `Thank you for your message. We will get back to you as soon as possible.`,
  }
  const ourLocationTitle = {
    ar: "موقعنا:",
    en: "Our Location:",
  }

  const bankTitle = {
    ar: {
      title: `كونوا معهم وساهموا في تعليمهم وبناء مستقبلهم`,
      header: "حساب البنك:",
    },
    en: {
      title: `
    Be with them and contribute to their education and building their future.
    `,

      header: "Bank accounts:",
    },
  }
  return {
    contactText: contactText[lang],
    contactTitle: contactTitle[lang],
    meassageText: meassageText[lang],
    messageForm: messageForm[lang],
    ourLocationTitle: ourLocationTitle[lang],
    bankTitle: bankTitle[lang],
    messageResponse: messageResponse[lang],
  }
}

export {
  useFooterText,
  useHomePageText,
  useAboutText,
  useProjectText,
  useEventsText,
  useContactText,
}

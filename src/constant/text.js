import React from "react"
import { useLang } from "../context/lang-context"

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
  return {
    slogan: slogan[lang],
    buttonsLinks,
    achivmentTitle: achivmentTitle[lang],
  }
}
export { useFooterText, useHomePageText, useAboutText }

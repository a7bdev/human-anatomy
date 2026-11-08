/* ============================================================
   موسوعة الأمراض — فهرس الشائع من الصفّ الثاني
   dx/index-common2.js
   ------------------------------------------------------------
   ما يقع بين الأبواب: شكاوى يومية أكثرها مزعج لا خطير،
   لكنها تُهمَل سنوات أو يُبالَغ في القلق منها.
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام في dx/dx-common2.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الصدر والتنفّس ---------------- */

DISEASES.push({
  id: 'acute-bronchitis', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'التهاب الشعب الهوائية الحاد', en: 'Acute bronchitis' },
  short: {
    ar: 'التهاب فيروسي عابر يهيّج بطانة القصبات فيترك سعالاً مزعجاً قد يستمر أسابيع بعد أن تزول بقية الأعراض — وهذا الطول وحده لا يعني أنه التهاب رئوي ولا أنه يحتاج مضاداً حيوياً.',
    en: 'A passing viral inflammation that irritates the lining of the airways and leaves a nagging cough that can last for weeks after the other symptoms have gone — that length alone does not mean pneumonia, nor that an antibiotic is needed.'
  },
  organs: ['bronchi', 'lungs', 'alveoli', 'larynx', 'immunity'],
  aliases: ['التهاب القصبات'],
  keywords: { ar: ['التهاب شعبي', 'سعال بعد الزكام', 'كحة مستمرة'], en: ['acute bronchitis', 'chest cold', 'post-viral cough'] }
});

DISEASES.push({
  id: 'chronic-bronchitis', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'التهاب الشعب الهوائية المزمن', en: 'Chronic bronchitis' },
  short: {
    ar: 'سعال بلغمي يعود كل شتاء ويستمر ثلاثة أشهر أو أكثر سنتين متتاليتين، لأن غددَ المخاط في القصبات تضخّمت من تهيّج طويل — وأشهر أسبابه التدخين، وهو أول وجه من وجوه الانسداد الرئوي المزمن.',
    en: 'A productive cough that returns each winter and lasts three months or more for two years running, because the mucus glands of the airways have enlarged from long irritation — smoking is its commonest cause, and it is the first face of chronic obstructive lung disease.'
  },
  organs: ['bronchi', 'lungs', 'alveoli', 'diaphragm', 'heart'],
  aliases: [],
  keywords: { ar: ['كحة المدخّن', 'بلغم مزمن', 'سعال الشتاء'], en: ['chronic bronchitis', 'smokers cough', 'chronic productive cough'] }
});

DISEASES.push({
  id: 'bronchiectasis', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'توسّع القصبات', en: 'Bronchiectasis' },
  short: {
    ar: 'قصبات اتّسعت وتشوّهت جدرانها بعد التهاب أو انسداد قديم، فصارت تحتجز المخاط بدل أن تدفعه، فتتكرّر العدوى ويصير السعال البلغمي الغزير حالة يومية لا نوبة عابرة.',
    en: 'Airways that have widened and lost the shape of their walls after an old infection or blockage, so they trap mucus instead of clearing it; infection then keeps returning and a heavy productive cough becomes a daily state rather than a passing attack.'
  },
  organs: ['bronchi', 'lungs', 'alveoli', 'immunity'],
  aliases: ['توسّع القصبات'],
  keywords: { ar: ['بلغم غزير يومي', 'التهابات صدرية متكرّرة', 'توسع الشعب'], en: ['bronchiectasis', 'daily sputum', 'recurrent chest infection'] }
});

DISEASES.push({
  id: 'snoring-nasal-obstruction', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'الشخير والانسداد الأنفي المزمن', en: 'Snoring and chronic nasal obstruction' },
  short: {
    ar: 'أنف مسدود ليلاً يجبر صاحبه على التنفّس من الفم فيهتزّ سقف الحلق الرخو ويصدر الشخير. أكثره إزعاج اجتماعي، لكن خلفه أحياناً انقطاع نفس نومي حقيقي يجعل النوم لا يريح مهما طال.',
    en: 'A nose that blocks at night forces mouth breathing, the soft palate vibrates and snoring follows. Most of it is a social nuisance, but behind some of it lies genuine sleep apnoea, which leaves sleep unrefreshing however long it lasts.'
  },
  organs: ['pharynx', 'nose', 'sinuses', 'larynx', 'lungs'],
  aliases: [],
  keywords: { ar: ['شخير', 'انسداد الأنف', 'تنفّس من الفم', 'نوم غير مريح'], en: ['snoring', 'blocked nose', 'mouth breathing', 'unrefreshing sleep'] }
});

/* ---------------- الهضم ---------------- */

DISEASES.push({
  id: 'dyspepsia', group: 'digestion', tier: 'common', emergency: false,
  name: { ar: 'عسر الهضم', en: 'Dyspepsia (indigestion)' },
  short: {
    ar: 'امتلاء وحرقة وثقل في أعلى البطن بعد الأكل بلا قرحة ولا مرض عضوي في الغالب — شكوى شائعة جداً يحكمها الطعام والتوتّر وسرعة الأكل أكثر مما يحكمها الدواء.',
    en: 'Fullness, burning and heaviness in the upper abdomen after eating, usually with no ulcer and no organic disease — a very common complaint governed more by food, stress and eating speed than by any medicine.'
  },
  organs: ['stomach', 'esophagus', 'small-intestine', 'pancreas', 'gallbladder'],
  aliases: ['عسر الهضم'],
  keywords: { ar: ['حموضة', 'انتفاخ بعد الأكل', 'ثقل المعدة', 'تخمة'], en: ['indigestion', 'dyspepsia', 'bloating after meals', 'functional dyspepsia'] }
});

DISEASES.push({
  id: 'chronic-constipation', group: 'digestion', tier: 'common', emergency: false,
  name: { ar: 'الإمساك المزمن', en: 'Chronic constipation' },
  short: {
    ar: 'تبرّز متباعد أو قاسٍ أو يحتاج جهداً وإحساساً بعدم التفريغ لأسابيع. أكثره سلوكي وغذائي، لكن إمساكاً جديداً بعد الخمسين أو معه دم أو نقص وزن يستحقّ تنظير قولون لا مليّناً.',
    en: 'Infrequent or hard stools, straining, and a sense of incomplete emptying lasting weeks. Most of it is behavioural and dietary, but constipation that is new after fifty, or comes with blood or weight loss, deserves a colonoscopy rather than a laxative.'
  },
  organs: ['large-intestine', 'anorectal', 'small-intestine', 'autonomic'],
  aliases: [],
  keywords: { ar: ['إمساك', 'صعوبة التبرّز', 'براز قاسٍ'], en: ['constipation', 'straining', 'hard stools'] }
});

DISEASES.push({
  id: 'chronic-diarrhea', group: 'digestion', tier: 'common', emergency: false,
  name: { ar: 'الإسهال المزمن', en: 'Chronic diarrhoea' },
  short: {
    ar: 'براز رخو متكرّر يستمر أكثر من أربعة أسابيع. ليس تشخيصاً بذاته بل علامة تسأل عن سببها: طعام لا يُحتمَل، أو التهاب، أو سوء امتصاص، أو دواء — وإسهال يوقظ من النوم يستحقّ بحثاً جادّاً.',
    en: 'Loose frequent stools lasting more than four weeks. It is not a diagnosis in itself but a sign asking for its cause: an intolerated food, inflammation, malabsorption or a medicine — and diarrhoea that wakes a person from sleep deserves serious investigation.'
  },
  organs: ['large-intestine', 'small-intestine', 'villi', 'pancreas'],
  aliases: [],
  keywords: { ar: ['إسهال مستمر', 'براز رخو', 'إسهال ليلي'], en: ['chronic diarrhoea', 'loose stools', 'nocturnal diarrhoea'] }
});

DISEASES.push({
  id: 'lactose-celiac', group: 'digestion', tier: 'common', emergency: false,
  name: { ar: 'عدم تحمّل اللاكتوز والداء البطني', en: 'Lactose intolerance and coeliac disease' },
  short: {
    ar: 'شكويان تتشابهان على المائدة وتختلفان جذرياً: الأولى نقص إنزيم يهضم سكّر الحليب فينتفخ البطن بلا أذى دائم، والثانية تفاعل مناعي ضدّ الغلوتين يُتلف بطانة الأمعاء ويجب حسمه بتحليل قبل ترك القمح.',
    en: 'Two complaints that look alike at the table yet differ fundamentally: the first is a missing enzyme for milk sugar, causing bloating without lasting harm; the second is an immune reaction to gluten that damages the intestinal lining and must be confirmed by testing before wheat is dropped.'
  },
  organs: ['villi', 'small-intestine', 'immunity', 'blood'],
  aliases: ['عدم تحمل اللاكتوز', 'الداء البطني (حساسية القمح)', 'الداء الزلاقي (حساسية القمح)', 'سوء الامتصاص'],
  keywords: { ar: ['حساسية القمح', 'الغلوتين', 'الحليب ينفخ', 'السيلياك'], en: ['lactose intolerance', 'coeliac disease', 'gluten', 'malabsorption'] }
});

/* ---------------- الحواسّ ---------------- */

DISEASES.push({
  id: 'dry-eye', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'جفاف العين', en: 'Dry eye' },
  short: {
    ar: 'حرقة ورمل وثقل في العين لأن الدمع صار قليلاً أو رديء التركيب فيتبخّر بسرعة. مفارقته أنه قد يسبّب دمعاً غزيراً لا جفافاً ظاهراً، ويزداد مع الشاشات والمكيّف.',
    en: 'Burning, grittiness and heaviness in the eye because the tear film is too scant or too poor in quality and evaporates quickly. Its paradox is that it can cause watering rather than visible dryness, and it worsens with screens and air conditioning.'
  },
  organs: ['eye', 'salivary-glands', 'immunity', 'facial-muscles'],
  aliases: ['جفاف العين'],
  keywords: { ar: ['حرقة العين', 'إحساس رمل', 'جفاف الدمع', 'إجهاد الشاشة'], en: ['dry eye', 'gritty eyes', 'tear film', 'screen strain'] }
});

DISEASES.push({
  id: 'blepharitis', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'التهاب حافة الجفن', en: 'Blepharitis' },
  short: {
    ar: 'احمرار وقشور والتصاق في حافة الجفن عند جذور الرموش، مع حكّة وحرقة تزداد صباحاً. مزمن يهدأ ويعود، وعلاجه نظافة يومية لا دواء مؤقّت.',
    en: 'Redness, crusting and stickiness along the lid margin at the roots of the lashes, with itching and burning that are worst in the morning. It is chronic, settling and returning, and its treatment is daily hygiene rather than a temporary medicine.'
  },
  organs: ['eye', 'skin', 'hair-follicle', 'facial-muscles'],
  aliases: [],
  keywords: { ar: ['التهاب الجفن', 'قشور الرموش', 'جفن ملتصق', 'شعيرة'], en: ['blepharitis', 'lid margin', 'crusty lashes', 'stye'] }
});

DISEASES.push({
  id: 'refractive-error', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'عيوب الإبصار الانكسارية', en: 'Refractive errors' },
  short: {
    ar: 'الصورة لا تقع على الشبكية تماماً فتبدو ضبابية: قصر النظر يُبعد الوضوح، وطول النظر يُتعب القريب، والاستجماتيزم يشوّه الخطوط في كل المسافات. عيب بصري لا مرض، وعلاجه تصحيح لا دواء.',
    en: 'The image does not land exactly on the retina, so it blurs: short sight blurs distance, long sight tires near work, and astigmatism distorts lines at every distance. It is an optical fault rather than a disease, corrected rather than medicated.'
  },
  organs: ['eye', 'retina', 'brain'],
  aliases: ['قصر النظر'],
  keywords: { ar: ['قصر النظر', 'طول النظر', 'الاستجماتيزم', 'اللابؤرية', 'نظارة'], en: ['myopia', 'hyperopia', 'astigmatism', 'glasses', 'presbyopia'] }
});

/* ---------------- الرأس والوجه ---------------- */

DISEASES.push({
  id: 'tension-headache', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'صداع التوتّر', en: 'Tension-type headache' },
  short: {
    ar: 'أشيع صداع على الإطلاق: ضغط كعصابة حول الرأس، خفيف إلى متوسط، من الجانبين، لا يزيد بالحركة ولا يصحبه قيء. مزعج لا خطير، لكن تكراره اليومي غالباً من إفراط المسكّنات نفسها.',
    en: 'The commonest headache of all: a band-like pressure around the head, mild to moderate, on both sides, not worsened by movement and without vomiting. Annoying rather than dangerous, though daily recurrence often comes from overusing painkillers themselves.'
  },
  organs: ['brain', 'meninges', 'facial-muscles', 'muscles', 'tmj'],
  aliases: [],
  keywords: { ar: ['صداع عصابي', 'شدّ الرقبة', 'صداع يومي', 'صداع التوتر'], en: ['tension headache', 'band-like headache', 'neck tension'] }
});

DISEASES.push({
  id: 'cluster-headache', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'الصداع العنقودي', en: 'Cluster headache' },
  short: {
    ar: 'نوبات ألم عنيف حول عين واحدة تأتي في مواعيد شبه ثابتة وتوقظ من النوم، مع دمع واحمرار وانسداد أنف في الجهة نفسها. قصيرة لكنها من أشدّ الآلام المعروفة، وتتجمّع في مواسم ثم تختفي.',
    en: 'Attacks of severe pain around one eye that come at almost fixed times and wake the sufferer from sleep, with tearing, redness and a blocked nostril on the same side. Short but among the most severe pains known, they gather in seasons then vanish.'
  },
  organs: ['brain', 'cranial-nerves', 'autonomic', 'nose', 'eye'],
  aliases: [],
  keywords: { ar: ['ألم حول العين', 'صداع الساعة المنبّهة', 'نوبات ليلية'], en: ['cluster headache', 'one-sided eye pain', 'alarm clock headache'] }
});

DISEASES.push({
  id: 'deviated-septum', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'انحراف الحاجز الأنفي', en: 'Deviated nasal septum' },
  short: {
    ar: 'الحاجز الفاصل بين فتحتي الأنف مائل خلقةً أو بعد كسر، فتضيق ناحية ويصعب التنفّس منها. موجود عند كثيرين بلا شكوى، ولا يستحقّ العلاج إلا حين يعطّل النفس أو يفاقم التهابات الجيوب.',
    en: 'The wall between the two nostrils is tilted, by nature or after a fracture, so one side narrows and breathing through it is hard. Many people have it with no complaint, and it deserves treatment only when it obstructs breathing or aggravates sinus infections.'
  },
  organs: ['nose', 'sinuses', 'skull', 'pharynx'],
  aliases: ['انحراف الحاجز الأنفي'],
  keywords: { ar: ['اعوجاج الحاجز', 'انسداد جهة واحدة', 'كسر الأنف'], en: ['deviated septum', 'one-sided blockage', 'nasal fracture'] }
});

/* ---------------- الكلى والمسالك ---------------- */

DISEASES.push({
  id: 'overactive-bladder', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'المثانة المفرطة النشاط', en: 'Overactive bladder' },
  short: {
    ar: 'إلحاح مفاجئ للتبوّل يصعب تأجيله، مع تكرار نهاري وليلي، لأن عضلة المثانة تنقبض قبل أن تمتلئ. لا عدوى ولا حصاة، لكنه يقيّد حياة صاحبه ويجعله يحفظ مواقع دورات المياه.',
    en: 'A sudden urge to pass urine that is hard to defer, with frequency by day and night, because the bladder muscle contracts before it is full. There is no infection and no stone, yet it narrows a person’s life until they memorise where every toilet is.'
  },
  organs: ['bladder', 'urethra', 'autonomic', 'kidneys'],
  aliases: ['المثانة المفرطة النشاط'],
  keywords: { ar: ['إلحاح البول', 'تكرار التبوّل', 'التبوّل الليلي'], en: ['overactive bladder', 'urgency', 'frequency', 'nocturia'] }
});

DISEASES.push({
  id: 'urinary-retention', group: 'urinary', tier: 'common', emergency: true,
  name: { ar: 'احتباس البول', en: 'Urinary retention' },
  short: {
    ar: 'عجز عن إفراغ المثانة رغم امتلائها. الحادّ منه ألم شديد أسفل البطن وانقطاع تام للبول ويحتاج تفريغاً عاجلاً، والمزمن صامت يفرغ نصف المثانة سنوات حتى يؤذي الكلى بلا ألم يُنذر.',
    en: 'Inability to empty the bladder although it is full. The acute form brings severe lower abdominal pain and a complete stop of urine and needs urgent drainage; the chronic form is silent, half-emptying the bladder for years until the kidneys are harmed with no warning pain.'
  },
  organs: ['bladder', 'urethra', 'prostate', 'kidneys', 'autonomic'],
  aliases: ['احتباس البول'],
  keywords: { ar: ['انقطاع البول', 'عدم التبوّل', 'قسطرة', 'امتلاء المثانة'], en: ['urinary retention', 'cannot pass urine', 'catheter', 'bladder outlet'] }
});

/* ---------------- الهيكل والمفاصل ---------------- */

DISEASES.push({
  id: 'ankle-sprain', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'التواء الكاحل وإصاباته', en: 'Ankle sprain and ankle injuries' },
  short: {
    ar: 'أشيع إصابة رياضية ويومية: القدم تنقلب للداخل فتتمدّد أربطة الجهة الخارجية أو تتمزّق. أكثرها يشفى بالتأهيل، لكن إهمال التمرين بعده هو ما يترك كاحلاً غير مستقرّ يتكرّر التواؤه سنوات.',
    en: 'The commonest sporting and everyday injury: the foot rolls inward and the ligaments on the outer side stretch or tear. Most heal with rehabilitation, but skipping that training is what leaves an unstable ankle that keeps turning over for years.'
  },
  organs: ['ankle', 'tendon-ligament', 'foot', 'muscles'],
  aliases: ['التواء الكاحل', 'عدم استقرار الكاحل المزمن'],
  keywords: { ar: ['لوي الكاحل', 'تمزّق رباط', 'ورم الكاحل', 'عرج'], en: ['ankle sprain', 'ligament tear', 'rolled ankle', 'ankle instability'] }
});

DISEASES.push({
  id: 'thoracic-outlet-syndrome', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'متلازمة مخرج الصدر', en: 'Thoracic outlet syndrome' },
  short: {
    ar: 'انضغاط الأعصاب أو الأوعية في المسافة الضيّقة بين الترقوة والضلع الأول، فيخدر الذراع ويثقل مع رفعه فوق الرأس. كثيراً ما يُشخَّص خطأً كديسك رقبة أو نفق رسغي سنوات.',
    en: 'Compression of nerves or vessels in the narrow space between the collarbone and the first rib, so the arm numbs and grows heavy when raised overhead. It is often mistaken for a neck disc or carpal tunnel syndrome for years.'
  },
  organs: ['rib-cage', 'peripheral-nerve', 'vessel-types', 'shoulder', 'spine'],
  aliases: [],
  keywords: { ar: ['خدر الذراع', 'ثقل عند رفع اليد', 'ضلع رقبي'], en: ['thoracic outlet syndrome', 'arm numbness', 'cervical rib'] }
});

/* ---------------- المستوى المجهري والأوعية الدقيقة ---------------- */

DISEASES.push({
  id: 'varicose-veins', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'الدوالي الوريدية', en: 'Varicose veins' },
  short: {
    ar: 'أوردة سطحية بالساق اتّسعت والتوت لأن صماماتها الصغيرة لم تعد تمنع رجوع الدم، فيتجمّع بفعل الجاذبية. أكثرها شكوى مظهر وثقل، وأقلّها يتطوّر إلى تصبّغ جلدي وقرحة ساق.',
    en: 'Surface veins in the leg that have widened and twisted because their small valves no longer stop blood flowing backwards, so it pools under gravity. Most are a complaint of appearance and heaviness; a minority progress to skin staining and a leg ulcer.'
  },
  organs: ['vessel-types', 'vessels', 'circulation', 'skin', 'clotting'],
  aliases: ['الدوالي', 'دوالي الساقين'],
  keywords: { ar: ['عروق الساق', 'ثقل الساق', 'تورّم آخر النهار', 'صمامات الأوردة'], en: ['varicose veins', 'leg heaviness', 'venous valves', 'venous insufficiency'] }
});

DISEASES.push({
  id: 'lymphedema', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'الوذمة اللمفية', en: 'Lymphoedema' },
  short: {
    ar: 'تورّم مزمن في طرف لأن السائل اللمفي لا يجد طريقاً للعودة بعد إصابة عقده أو قنواته، غالباً بعد جراحة سرطان أو إشعاع. يبدأ ليّناً يزول بالرفع، ثم يقسو ويثبت إن أُهمِل.',
    en: 'Chronic swelling of a limb because lymph fluid finds no way back after its nodes or channels were damaged, most often after cancer surgery or radiotherapy. It begins soft and eases with elevation, then hardens and becomes fixed if neglected.'
  },
  organs: ['lymphatic', 'lymph-node', 'circulation', 'skin', 'immunity'],
  aliases: ['الوذمة اللمفية'],
  keywords: { ar: ['تورّم الذراع', 'تورّم الساق', 'بعد استئصال العقد', 'ضغط طبي'], en: ['lymphoedema', 'arm swelling', 'leg swelling', 'compression'] }
});

/* ============================================================
   موسوعة الأمراض — فهرس الطوارئ والإصابات
   dx/index-emerg.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-emerg.js
   كل بطاقة هنا حالة إسعافية: يُقاس نفعها بما يفعله القارئ
   في الدقائق الأولى، لا بما يفهمه بعد أسبوع.
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- انسداد المجرى والتنفّس ---------------- */

DISEASES.push({
  id: 'choking', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'الاختناق بجسم غريب', en: 'Choking on a foreign body' },
  short: {
    ar: 'لقمة أو قطعة صغيرة تسدّ مجرى الهواء فينقطع النفس والصوت فجأة، وتبدأ دقائق معدودة يحسمها من يقف بجانب المصاب لا الإسعاف.',
    en: 'A mouthful or small object blocks the airway, so breath and voice stop at once; the few minutes that follow are decided by the person standing next to the casualty, not by the ambulance.'
  },
  organs: ['larynx', 'pharynx', 'bronchi', 'lungs', 'vocal-folds'],
  aliases: ['استنشاق جسم غريب', 'الشرقة (استنشاق الطعام)'],
  keywords: { ar: ['شرقة', 'انسداد مجرى الهواء', 'مناورة هايمليك', 'ضربات الظهر', 'غصّة'], en: ['choking', 'Heimlich', 'airway obstruction', 'back blows'] }
});

DISEASES.push({
  id: 'drowning', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'الغرق', en: 'Drowning' },
  short: {
    ar: 'غمر الوجه بالماء يمنع دخول الهواء فيتوقّف الأكسجين عن الدماغ، والغرق الحقيقي هادئ صامت لا يشبه ما تعرضه الأفلام.',
    en: 'Water covering the face stops air entering, so oxygen no longer reaches the brain; real drowning is quiet and still, nothing like the films.'
  },
  organs: ['lungs', 'alveoli', 'larynx', 'brain', 'heart'],
  aliases: [],
  keywords: { ar: ['غرق', 'إنقاذ من الماء', 'إنعاش', 'نفس إنقاذي'], en: ['drowning', 'water rescue', 'rescue breaths', 'CPR'] }
});

DISEASES.push({
  id: 'smoke-inhalation', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'الاختناق بالدخان', en: 'Smoke inhalation' },
  short: {
    ar: 'دخان الحريق يحرق بطانة المجرى الهوائي ويحمل معه غازات سامّة، وهو سبب الوفاة في الحرائق أكثر من اللهب نفسه.',
    en: 'Fire smoke scalds the lining of the airway and carries poisonous gases with it; it kills more people in fires than the flames themselves.'
  },
  organs: ['alveoli', 'bronchi', 'larynx', 'lungs', 'blood'],
  aliases: [],
  keywords: { ar: ['استنشاق الدخان', 'حرق المجرى الهوائي', 'حريق', 'سخام'], en: ['smoke inhalation', 'airway burn', 'fire', 'soot'] }
});

/* ---------------- التسمّم ---------------- */

DISEASES.push({
  id: 'co-poisoning', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'التسمّم بأول أكسيد الكربون', en: 'Carbon monoxide poisoning' },
  short: {
    ar: 'غاز بلا لون ولا رائحة يلتصق بكريات الدم الحمراء مكان الأكسجين، فيخنق الجسم من الداخل وصاحبه يظنّ نفسه مصاباً بنزلة برد.',
    en: 'A colourless, odourless gas that sticks to red blood cells in place of oxygen, suffocating the body from within while the person believes they have a cold.'
  },
  organs: ['blood', 'alveoli', 'brain', 'heart', 'circulation'],
  aliases: [],
  keywords: { ar: ['أول أكسيد الكربون', 'سخّان الغاز', 'مولّد كهرباء', 'صداع الشتاء', 'غاز صامت'], en: ['carbon monoxide', 'CO poisoning', 'gas heater', 'generator'] }
});

DISEASES.push({
  id: 'poisoning', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'التسمّم الدوائي والكيميائي', en: 'Drug and chemical poisoning' },
  short: {
    ar: 'ابتلاع دواء بكمّية زائدة أو مادّة منزلية كيميائية، وأخطره ما لا تظهر أعراضه إلا بعد ساعات حين يكون العضو قد تضرّر.',
    en: 'Swallowing too much of a medicine or a household chemical; the most dangerous are those whose effects appear only hours later, once an organ is already damaged.'
  },
  organs: ['liver', 'stomach', 'kidneys', 'nervous', 'blood'],
  aliases: [],
  keywords: { ar: ['تسمم', 'جرعة زائدة', 'مواد منظّفة', 'مركز السموم', 'ابتلاع مادّة'], en: ['poisoning', 'overdose', 'household chemicals', 'poison centre'] }
});

/* ---------------- اللدغ والسموم الحيوانية ---------------- */

DISEASES.push({
  id: 'scorpion-sting', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'لدغة العقرب', en: 'Scorpion sting' },
  short: {
    ar: 'ألم حارق شديد في موضع اللدغة قد لا يصحبه ورم يُذكر، وخطره على الأطفال الصغار أكبر بكثير منه على البالغين.',
    en: 'Intense burning pain at the site, often with little swelling to show for it; the danger to small children is far greater than to adults.'
  },
  organs: ['skin', 'peripheral-nerve', 'autonomic', 'heart', 'nervous'],
  aliases: [],
  keywords: { ar: ['عقرب', 'لدغة', 'سمّ عصبي', 'ألم حارق'], en: ['scorpion', 'sting', 'neurotoxin', 'envenomation'] }
});

DISEASES.push({
  id: 'snake-bite', group: 'emergency', tier: 'rare', emergency: true,
  name: { ar: 'لدغة الأفعى', en: 'Snake bite' },
  short: {
    ar: 'عضّة قد تحقن سمّاً يهدم الأنسجة أو يعطّل تجلّط الدم أو يشلّ الأعصاب، والخرافات المتوارثة في إسعافها تضرّ أكثر من السمّ.',
    en: 'A bite that may inject venom which destroys tissue, disables clotting or paralyses nerves; the inherited folk remedies do more harm than the venom.'
  },
  organs: ['skin', 'clotting', 'blood', 'muscles', 'lymphatic'],
  aliases: [],
  keywords: { ar: ['أفعى', 'حيّة', 'ثعبان', 'مضاد السمّ', 'عضّة'], en: ['snake bite', 'venom', 'antivenom', 'viper'] }
});

/* ---------------- الدورة الدموية والنزيف ---------------- */

DISEASES.push({
  id: 'shock', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'الصدمة (هبوط الدورة الدموية)', en: 'Shock (circulatory collapse)' },
  short: {
    ar: 'فشل الدورة الدموية في إيصال دم كافٍ للأعضاء، فيبرد الجلد ويشحب ويتسارع النبض ويضطرب الوعي — وهي نهاية مشتركة لإصابات كثيرة.',
    en: 'The circulation fails to deliver enough blood to the organs: the skin turns cold and pale, the pulse races and awareness clouds. It is the common end point of many injuries.'
  },
  organs: ['heart', 'circulation', 'vessel-types', 'blood', 'kidneys'],
  aliases: [],
  keywords: { ar: ['صدمة', 'هبوط الضغط', 'شحوب', 'نبض سريع ضعيف', 'برودة الأطراف'], en: ['shock', 'hypotension', 'pallor', 'weak fast pulse'] }
});

DISEASES.push({
  id: 'severe-bleeding', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'النزيف الخارجي الشديد', en: 'Severe external bleeding' },
  short: {
    ar: 'جرح يفقد دماً بسرعة تفوق قدرة الجسم على التعويض، وضغط اليد المباشر عليه في الثواني الأولى ينقذ حياة قبل وصول أي أحد.',
    en: 'A wound losing blood faster than the body can replace it; direct hand pressure in the first seconds saves a life before anyone else arrives.'
  },
  organs: ['blood', 'clotting', 'vessels', 'vessel-types', 'circulation', 'wound-healing'],
  aliases: [],
  keywords: { ar: ['نزيف', 'ضغط مباشر', 'عاصبة', 'جرح عميق', 'فقد دم'], en: ['bleeding', 'haemorrhage', 'direct pressure', 'tourniquet'] }
});

DISEASES.push({
  id: 'syncope', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'الإغماء', en: 'Fainting (syncope)' },
  short: {
    ar: 'فقدان وعي قصير سببه نقص مؤقّت في دم الدماغ، أغلبه بسيط ويعود صاحبه سريعاً، لكن بعضه إنذار من القلب لا يُهمَل.',
    en: 'A brief loss of consciousness from a short fall in blood flow to the brain; most are harmless and recovery is quick, but some are a warning from the heart that must not be ignored.'
  },
  organs: ['brain', 'autonomic', 'heart', 'circulation', 'vessel-types'],
  aliases: ['الإغماء الوعائي المبهمي'],
  keywords: { ar: ['إغماء', 'دوخة', 'سواد أمام العين', 'فقد وعي قصير'], en: ['fainting', 'syncope', 'blackout', 'dizziness'] }
});

/* ---------------- الحرارة والسوائل ---------------- */

DISEASES.push({
  id: 'heat-stroke', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'ضربة الشمس والإجهاد الحراري', en: 'Heat stroke and heat exhaustion' },
  short: {
    ar: 'ارتفاع حرارة الجسم فوق ما تستطيع أجهزته تبريده؛ يبدأ إجهاداً حرارياً يُعالَج بالظلّ والماء، وينتهي ضربة شمس تشوّش الوعي وتقتل.',
    en: 'The body heats beyond what it can cool away: it begins as heat exhaustion, treatable with shade and water, and ends as heat stroke, which clouds consciousness and kills.'
  },
  organs: ['skin', 'brain', 'circulation', 'muscles', 'kidneys'],
  aliases: [],
  keywords: { ar: ['ضربة شمس', 'إجهاد حراري', 'حرّ', 'تشنّج حراري', 'انقطاع التعرّق'], en: ['heat stroke', 'heat exhaustion', 'hyperthermia', 'sunstroke'] }
});

DISEASES.push({
  id: 'dehydration', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'الجفاف', en: 'Dehydration' },
  short: {
    ar: 'نقص ماء الجسم وأملاحه عن حدّ يقلّ معه حجم الدم، فيقلّ البول ويغمق ويجفّ الفم وتظهر الدوخة — وأخطره عند الرضّع وكبار السنّ.',
    en: 'Body water and salts fall far enough to shrink the blood volume: urine becomes scant and dark, the mouth dries and dizziness appears. It is most dangerous in infants and the elderly.'
  },
  organs: ['kidneys', 'nephron', 'circulation', 'blood', 'skin'],
  aliases: ['الجفاف'],
  keywords: { ar: ['جفاف', 'نقص سوائل', 'محلول معالجة الجفاف', 'قلة البول', 'عطش'], en: ['dehydration', 'fluid loss', 'oral rehydration', 'thirst'] }
});

DISEASES.push({
  id: 'hypothermia', group: 'emergency', tier: 'rare', emergency: true,
  name: { ar: 'انخفاض حرارة الجسم', en: 'Hypothermia' },
  short: {
    ar: 'هبوط حرارة الجسم تحت الحدّ الذي تعمل عنده أعضاؤه، فترتجف العضلات ثم يتباطأ التفكير والنبض — ولا يحتاج ثلجاً بل بللاً وريحاً وساعات.',
    en: 'Body temperature falls below the level at which its organs work: the muscles shiver, then thought and pulse slow. It needs no ice, only wet clothes, wind and hours.'
  },
  organs: ['skin', 'circulation', 'heart', 'brain', 'muscles'],
  aliases: [],
  keywords: { ar: ['انخفاض الحرارة', 'برودة', 'ارتجاف', 'تدفئة تدريجية'], en: ['hypothermia', 'cold exposure', 'shivering', 'rewarming'] }
});

/* ---------------- السكّر ---------------- */

DISEASES.push({
  id: 'hypoglycemia', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'هبوط سكّر الدم', en: 'Low blood sugar (hypoglycaemia)' },
  short: {
    ar: 'نزول سكّر الدم تحت حاجة الدماغ، فيظهر ارتجاف وعرق وجوع مفاجئ وتشوّش، وإن تُرك انتهى بفقد الوعي أو تشنّج خلال دقائق.',
    en: 'Blood sugar drops below what the brain needs: shaking, sweating, sudden hunger and confusion appear, and if left alone it ends in loss of consciousness or a fit within minutes.'
  },
  organs: ['pancreas', 'brain', 'liver', 'blood', 'adrenal'],
  aliases: [],
  keywords: { ar: ['هبوط السكر', 'نقص سكر الدم', 'ارتجاف وعرق', 'تشوّش'], en: ['hypoglycaemia', 'low blood sugar', 'shakiness', 'confusion'] }
});

DISEASES.push({
  id: 'hyperglycemic-crisis', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'ارتفاع سكّر الدم الحادّ', en: 'Acute high blood sugar crisis' },
  short: {
    ar: 'ارتفاع السكّر مع نقص شديد في الإنسولين يدفع الجسم لحرق الدهون فتتراكم الكيتونات ويتحمّض الدم، مع عطش وبول غزير وتنفّس عميق.',
    en: 'Sugar rises while insulin is severely lacking, so the body burns fat, ketones build up and the blood turns acid, with thirst, heavy urination and deep breathing.'
  },
  organs: ['pancreas', 'kidneys', 'blood', 'brain', 'liver'],
  aliases: [],
  keywords: { ar: ['الحماض الكيتوني', 'ارتفاع السكر', 'كيتونات', 'عطش وبول غزير'], en: ['diabetic ketoacidosis', 'hyperglycaemia', 'ketones', 'polyuria'] }
});

/* ---------------- الرأس والعمود الفقري ---------------- */

DISEASES.push({
  id: 'concussion', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'ارتجاج الدماغ', en: 'Concussion' },
  short: {
    ar: 'اهتزاز الدماغ داخل الجمجمة بعد ضربة أو سقطة، فيتعطّل عمله مؤقّتاً بلا كسر ولا نزف — والأشعة قد تكون طبيعية والمصاب غير سليم.',
    en: 'The brain shakes inside the skull after a blow or fall, so its working is briefly disturbed with no fracture and no bleed; the scan may be normal while the person is not well.'
  },
  organs: ['brain', 'meninges', 'skull', 'cortex-map', 'neuron'],
  aliases: ['ارتجاج الدماغ'],
  keywords: { ar: ['ارتجاج', 'ضربة رأس', 'دوخة بعد السقوط', 'فقد ذاكرة قصير'], en: ['concussion', 'head injury', 'mild traumatic brain injury'] }
});

DISEASES.push({
  id: 'spinal-injury', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'إصابة العمود الفقري والرقبة', en: 'Spine and neck injury' },
  short: {
    ar: 'كسر أو انزلاق في فقرات الظهر أو الرقبة قد يضغط النخاع الشوكي، وحركة واحدة خاطئة عند الإسعاف قد تحوّل إصابة قابلة للشفاء إلى شلل دائم.',
    en: 'A fracture or displacement in the back or neck bones may press the spinal cord; one wrong movement during rescue can turn a recoverable injury into permanent paralysis.'
  },
  organs: ['spine', 'spinal-cord', 'vertebra-disc', 'peripheral-nerve', 'skeleton'],
  aliases: ['إصابة النخاع الشوكي', 'إصابات النخاع الشوكي'],
  keywords: { ar: ['إصابة الرقبة', 'كسر فقرة', 'تثبيت الرقبة', 'خدر الأطراف', 'حادث'], en: ['spinal injury', 'neck injury', 'cord compression', 'immobilisation'] }
});

/* ---------------- إصابات موضعية ---------------- */

DISEASES.push({
  id: 'epistaxis', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'نزيف الأنف (الرعاف)', en: 'Nosebleed (epistaxis)' },
  short: {
    ar: 'نزف من الشبكة الوعائية الرقيقة في مقدّمة الحاجز الأنفي، أغلبه أمامي بسيط يقف بضغط صحيح خلال دقائق إن أُحسن الوضع.',
    en: 'Bleeding from the fine network of vessels at the front of the nasal septum; most are simple anterior bleeds that stop with correct pressure within minutes if the position is right.'
  },
  organs: ['nose', 'sinuses', 'vessel-types', 'clotting', 'skull'],
  aliases: [],
  keywords: { ar: ['رعاف', 'نزيف الأنف', 'ضغط الأنف', 'جفاف الجو'], en: ['nosebleed', 'epistaxis', 'nasal pressure', 'dry air'] }
});

DISEASES.push({
  id: 'eye-foreign-body', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'جسم غريب في العين', en: 'Foreign body in the eye' },
  short: {
    ar: 'ذرّة رمل أو شظيّة أو رمش تعلق على سطح العين فتخدش القرنية، وأغلبها يُزال بالغسل — لكن بعضها يخترق الكرة فيصير حالة عمى.',
    en: 'A grain of sand, a splinter or a lash lodges on the eye surface and scratches the cornea; most are washed away, but some pierce the globe and threaten sight.'
  },
  organs: ['eye', 'retina', 'cranial-nerves'],
  aliases: [],
  keywords: { ar: ['جسم غريب في العين', 'خدش القرنية', 'غسل العين', 'شظية'], en: ['eye foreign body', 'corneal abrasion', 'eye irrigation', 'splinter'] }
});

DISEASES.push({
  id: 'electrical-injury', group: 'emergency', tier: 'common', emergency: true,
  name: { ar: 'الكهرباء والصعق', en: 'Electric shock and electrical injury' },
  short: {
    ar: 'مرور تيّار كهربائي في الجسم يحرق ما بين نقطتَي الدخول والخروج ويربك نظم القلب، وأكثر الضرر داخلي لا يُرى على الجلد.',
    en: 'Current passing through the body burns everything between the entry and exit points and disturbs the heart rhythm; most of the damage is internal and invisible on the skin.'
  },
  organs: ['skin', 'heart', 'muscles', 'nervous', 'muscle-fiber'],
  aliases: [],
  keywords: { ar: ['صعق كهربائي', 'كهرباء', 'حرق كهربائي', 'اضطراب النظم'], en: ['electric shock', 'electrocution', 'electrical burn', 'arrhythmia'] }
});

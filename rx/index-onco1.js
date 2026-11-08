/* ============================================================
   موسوعة الأدوية — فهرس دفعة الأورام الأولى
   (مؤلكلات · أدوية البلاتين · مضادات الأيض)
   rx/index-onco1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   ملاحظة على الفصائل: فصيلتا البلاتين ومضادات الأيض غير معرّفتين في
   DRUG_CLASSES داخل drugs.js، فتُضافان هنا بحارس لا يكتب فوق تعريف
   موجود — كما في index-immuno1.js. وفصيلة المؤلكلات ومجموعة «الأورام»
   تُضافان أيضاً إن لم يسبق تعريفهما، فلا يتوقّف هذا الملف على ترتيب التحميل.
   ============================================================ */

var DRUGS = window.DRUGS || [];

(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'antineoplastic-alkylating':     { ar: 'أدوية كيميائية مؤلكلة', en: 'Alkylating chemotherapy agents' },
    'antineoplastic-platinum':       { ar: 'أدوية كيميائية من عائلة البلاتين', en: 'Platinum chemotherapy agents' },
    'antineoplastic-antimetabolite': { ar: 'أدوية كيميائية من مضادات الأيض', en: 'Antimetabolite chemotherapy agents' }
  };
  var grp = {
    'antineoplastic-alkylating': 'cancer',
    'antineoplastic-platinum': 'cancer',
    'antineoplastic-antimetabolite': 'cancer'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_GROUPS !== 'undefined' && DRUG_GROUPS) {
    if (!DRUG_GROUPS.cancer) { DRUG_GROUPS.cancer = { ar: 'الأورام والعلاج الكيميائي', en: 'Cancer and chemotherapy' }; }
  }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
})();

DRUGS.push({
  id: 'melphalan',
  cls: 'antineoplastic-alkylating',
  otc: false,
  alert: true,
  name:  { ar: 'الميلفالان', en: 'Melphalan' },
  short: {
    ar: 'علاج كيميائي أقراصاً في البيت أو بالوريد في المستشفى للورم النقوي المتعدّد وبعض سرطانات المبيض، ويُستعمل قبل زراعة الخلايا الجذعية. يثبّط نخاع العظم ويحتاج تحاليل دم منتظمة.',
    en: 'A chemotherapy taken as tablets at home or given into a vein in hospital for multiple myeloma and some ovarian cancers, also used before stem cell transplant. It suppresses the bone marrow and needs regular blood tests.'
  },
  brands: ['ألكيران'],
  uses: ['multiple-myeloma', 'ovarian-cancer', 'breast-cancer'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'ألكيران', 'مؤلكل', 'زراعة النخاع', 'الداء النشواني'], en: ['Alkeran', 'Evomela', 'L-PAM', 'chemotherapy', 'alkylating agent', 'stem cell transplant'] }
});

DRUGS.push({
  id: 'bendamustine',
  cls: 'antineoplastic-alkylating',
  otc: false,
  alert: true,
  name:  { ar: 'البيندامستين', en: 'Bendamustine' },
  short: {
    ar: 'علاج كيميائي وريدي لابيضاض الدم اللمفاوي المزمن وبعض أنواع اللمفوما، يُعطى كثيراً مع الريتوكسيماب. يثبّط المناعة بقوّة وقد يوقظ التهاب الكبد البائي والهربس.',
    en: 'An intravenous chemotherapy for chronic lymphocytic leukaemia and some lymphomas, often given with rituximab. It suppresses immunity strongly and can reawaken hepatitis B and shingles.'
  },
  brands: ['ليفاكت', 'تريندا'],
  uses: ['leukemia', 'lymphoma', 'multiple-myeloma'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'ليفاكت', 'مؤلكل', 'لمفوما', 'بيندامستين'], en: ['Levact', 'Treanda', 'Bendeka', 'Belrapzo', 'CLL', 'alkylating agent'] }
});

DRUGS.push({
  id: 'dacarbazine',
  cls: 'antineoplastic-alkylating',
  otc: false,
  alert: true,
  name:  { ar: 'الداكاربازين', en: 'Dacarbazine (DTIC)' },
  short: {
    ar: 'علاج كيميائي وريدي في المستشفى للميلانوما المنتشرة ولمفوما هودجكن. يسبّب غثياناً شديداً في أول يومين، وأخطر ما فيه أذى نادر سريع للكبد.',
    en: 'An intravenous hospital chemotherapy for spread melanoma and Hodgkin lymphoma. It causes severe nausea in the first days, and its greatest danger is a rare, rapid liver injury.'
  },
  brands: ['ديتيسين'],
  uses: ['skin-cancer', 'lymphoma'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'ميلانوما', 'هودجكن', 'داكاربازين'], en: ['DTIC', 'DTIC-Dome', 'Deticene', 'melanoma', 'ABVD', 'Hodgkin'] }
});

DRUGS.push({
  id: 'procarbazine',
  cls: 'antineoplastic-alkylating',
  otc: false,
  alert: true,
  name:  { ar: 'البروكاربازين', en: 'Procarbazine' },
  short: {
    ar: 'علاج كيميائي في كبسولات تؤخذ في البيت للمفوما هودجكن وبعض أورام الدماغ. الكحول ممنوع معه تماماً، وله قائمة أطعمة وأدوية زكام يجب تجنّبها.',
    en: 'A chemotherapy in capsules taken at home for Hodgkin lymphoma and some brain tumours. Alcohol is strictly forbidden with it, and it comes with a list of foods and cold remedies to avoid.'
  },
  brands: ['ناتولان', 'ماتولين'],
  uses: ['lymphoma', 'brain-tumor'],
  keywords: { ar: ['كيماوي أقراص', 'علاج كيميائي', 'ناتولان', 'هودجكن', 'أورام الدماغ', 'التيرامين'], en: ['Natulan', 'Matulane', 'MOPP', 'PCV', 'Hodgkin', 'MAO inhibitor'] }
});

DRUGS.push({
  id: 'cisplatin',
  cls: 'antineoplastic-platinum',
  otc: false,
  alert: true,
  name:  { ar: 'السيسبلاتين', en: 'Cisplatin' },
  short: {
    ar: 'أقوى أدوية البلاتين وأقدمها، يُعطى تسريباً وريدياً في المستشفى لسرطانات الخصية والمبيض والمثانة والرئة والرأس والعنق وغيرها. يُراقَب معه الكلى والسمع والأعصاب.',
    en: 'The oldest and strongest of the platinum drugs, given by intravenous infusion in hospital for testicular, ovarian, bladder, lung, head and neck and other cancers. Kidneys, hearing and nerves are monitored with it.'
  },
  brands: [],
  uses: ['testicular-cancer', 'ovarian-cancer', 'bladder-cancer', 'lung-cancer', 'cervical-cancer', 'esophageal-cancer', 'stomach-cancer', 'endometrial-cancer', 'oral-cancer', 'laryngeal-cancer', 'nasopharyngeal-carcinoma', 'brain-tumor', 'bone-cancer'],
  keywords: { ar: ['كيماوي', 'بلاتين', 'علاج كيميائي', 'سيسبلاتين', 'طنين', 'الكلى'], en: ['Platinol', 'cis-platinum', 'CDDP', 'platinum', 'chemotherapy', 'ototoxicity'] }
});

DRUGS.push({
  id: 'carboplatin',
  cls: 'antineoplastic-platinum',
  otc: false,
  alert: true,
  name:  { ar: 'الكاربوبلاتين', en: 'Carboplatin' },
  short: {
    ar: 'دواء بلاتين وريدي أخفّ على الكلى والسمع من السيسبلاتين وأشدّ على نخاع العظم، ركن في علاج سرطان المبيض والرئة. قد تظهر معه حساسية بعد عدّة دورات هادئة.',
    en: 'An intravenous platinum drug gentler on the kidneys and hearing than cisplatin but harder on the bone marrow, a mainstay in ovarian and lung cancer. An allergy can appear after several uneventful cycles.'
  },
  brands: ['بارابلاتين'],
  uses: ['ovarian-cancer', 'lung-cancer', 'bladder-cancer', 'breast-cancer', 'endometrial-cancer', 'cervical-cancer', 'testicular-cancer', 'oral-cancer', 'laryngeal-cancer', 'brain-tumor'],
  keywords: { ar: ['كيماوي', 'بلاتين', 'علاج كيميائي', 'كاربوبلاتين', 'سرطان المبيض'], en: ['Paraplatin', 'CBDCA', 'platinum', 'chemotherapy', 'carboplatin paclitaxel'] }
});

DRUGS.push({
  id: 'oxaliplatin',
  cls: 'antineoplastic-platinum',
  otc: false,
  alert: true,
  name:  { ar: 'الأوكزاليبلاتين', en: 'Oxaliplatin' },
  short: {
    ar: 'دواء بلاتين وريدي لسرطان القولون والمستقيم، يُعطى غالباً مع الفلورويوراسيل في نظام فولفوكس. يجعل الأطراف والحلق حسّاسة للبرد في الأيام التالية للجلسة.',
    en: 'An intravenous platinum drug for colon and rectal cancer, usually given with fluorouracil in the FOLFOX regimen. It makes the fingers and throat sensitive to cold in the days after each session.'
  },
  brands: ['إلوكساتين'],
  uses: ['colorectal-cancer', 'stomach-cancer', 'esophageal-cancer', 'pancreatic-cancer', 'ovarian-cancer'],
  keywords: { ar: ['كيماوي', 'بلاتين', 'فولفوكس', 'حساسية البرد', 'سرطان القولون', 'أوكزاليبلاتين'], en: ['Eloxatin', 'FOLFOX', 'XELOX', 'platinum', 'cold sensitivity', 'neuropathy'] }
});

DRUGS.push({
  id: 'fluorouracil',
  cls: 'antineoplastic-antimetabolite',
  otc: false,
  alert: true,
  name:  { ar: 'الفلورويوراسيل', en: 'Fluorouracil (5-FU)' },
  short: {
    ar: 'من أوسع أدوية الكيماوي استعمالاً، يُعطى بالوريد في سرطانات القولون والمعدة والبنكرياس والثدي وغيرها، وله صورة كريم لآفات الجلد. يُفحص قبله نقص إنزيم DPD.',
    en: 'One of the most widely used chemotherapies, given into a vein for colon, stomach, pancreatic, breast and other cancers, with a cream form for skin lesions. DPD enzyme deficiency is checked before it.'
  },
  brands: ['إيفوديكس'],
  uses: ['colorectal-cancer', 'stomach-cancer', 'pancreatic-cancer', 'breast-cancer', 'esophageal-cancer', 'cervical-cancer', 'oral-cancer', 'nasopharyngeal-carcinoma', 'bladder-cancer', 'ovarian-cancer', 'kidney-cancer', 'skin-cancer'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'فايف إف يو', 'فولفوكس', 'إنزيم DPD', 'كريم التقرّن الشمسي'], en: ['5-FU', 'Adrucil', 'Efudix', 'FOLFOX', 'DPD deficiency', 'antimetabolite'] }
});

DRUGS.push({
  id: 'capecitabine',
  cls: 'antineoplastic-antimetabolite',
  otc: false,
  alert: true,
  name:  { ar: 'الكابيسيتابين', en: 'Capecitabine' },
  short: {
    ar: 'علاج كيميائي في أقراص يتحوّل في الجسم إلى الفلورويوراسيل، لسرطانات الثدي والقولون والمستقيم والمعدة. يرفع أثر الوارفارين بشدّة، ويحتاج فحص إنزيم DPD قبل البدء.',
    en: 'A chemotherapy tablet that turns into fluorouracil in the body, for breast, colon, rectal and stomach cancer. It strongly boosts the effect of warfarin and needs a DPD enzyme check before starting.'
  },
  brands: ['زيلودا'],
  uses: ['breast-cancer', 'colorectal-cancer', 'stomach-cancer', 'esophageal-cancer', 'pancreatic-cancer'],
  keywords: { ar: ['كيماوي أقراص', 'زيلودا', 'متلازمة اليد والقدم', 'إنزيم DPD', 'كابيسيتابين'], en: ['Xeloda', 'XELOX', 'CAPOX', 'hand-foot syndrome', 'DPD deficiency', 'oral chemotherapy'] }
});

DRUGS.push({
  id: 'cytarabine',
  cls: 'antineoplastic-antimetabolite',
  otc: false,
  alert: true,
  name:  { ar: 'السيتارابين', en: 'Cytarabine (Ara-C)' },
  short: {
    ar: 'علاج كيميائي أساسي لابيضاض الدم الحادّ، يُعطى في المستشفى بالوريد أو تحت الجلد أو في السائل الشوكي. يهبط معه تعداد الدم بشدّة، وللمقادير العالية آثار على المخيخ والعينين.',
    en: 'A core chemotherapy for acute leukaemia, given in hospital into a vein, under the skin or into the spinal fluid. Blood counts fall sharply with it, and high amounts can affect the cerebellum and eyes.'
  },
  brands: ['سايتوسار'],
  uses: ['leukemia', 'lymphoma'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'آرا سي', 'ابيضاض الدم الحاد', 'سيتارابين'], en: ['Ara-C', 'Cytosar', 'cytosine arabinoside', 'AML', 'HiDAC', 'antimetabolite'] }
});

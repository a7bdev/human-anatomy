/* ============================================================
   موسوعة الأدوية — فهرس دفعة الأورام الثانية
   rx/index-onco2.js   (يُحمَّل دائماً — خفيف)
   مضادّات الأيض · الأنثراسيكلينات · البليومايسين · فولينات الكالسيوم
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* فصائل هذه الدفعة غير موجودة في drugs.js — تُضاف هنا إن غابت ولا تُكتب فوق شيء */
(function () {
  if (typeof DRUG_CLASSES === 'undefined') return;
  var add = {
    'antineoplastic-antimetabolite': { ar: 'أدوية كيميائية من مضادّات الأيض', en: 'Antimetabolite chemotherapy agents' },
    'antineoplastic-anthracycline':  { ar: 'أدوية كيميائية من الأنثراسيكلينات', en: 'Anthracycline chemotherapy agents' },
    'antineoplastic-antibiotic':     { ar: 'مضادّات حيوية مضادّة للأورام', en: 'Cytotoxic antibiotics' },
    'chemo-rescue':                  { ar: 'أدوية الإنقاذ من أثر الكيماوي', en: 'Chemotherapy rescue agents' }
  };
  var grp = {
    'antineoplastic-antimetabolite': 'cancer', 'antineoplastic-anthracycline': 'cancer',
    'antineoplastic-antibiotic': 'cancer', 'chemo-rescue': 'cancer'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined') {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
  if (typeof DRUG_GROUPS !== 'undefined' && !DRUG_GROUPS.cancer) {
    DRUG_GROUPS.cancer = { ar: 'أدوية الأورام', en: 'Cancer medicines' };
  }
})();

DRUGS.push({
  id: 'gemcitabine',
  cls: 'antineoplastic-antimetabolite',
  otc: false,
  alert: true,
  name:  { ar: 'الجيمسيتابين', en: 'Gemcitabine' },
  short: {
    ar: 'دواء كيميائي من مضادّات الأيض يُعطى بالتنقيط في الوريد، لسرطانات البنكرياس والرئة والثدي والمبيض والمثانة. أهمّ ما يراقبه المريض علامات العدوى بين الجلسات.',
    en: 'An antimetabolite chemotherapy given by intravenous drip for cancers of the pancreas, lung, breast, ovary and bladder. The key thing to watch between sessions is any sign of infection.'
  },
  brands: ['جيمزار', 'جيمسيتابين'],
  uses: ['pancreatic-cancer', 'lung-cancer', 'breast-cancer', 'ovarian-cancer', 'bladder-cancer'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'مضادات الأيض', 'جيمزار'], en: ['gemcitabine', 'Gemzar', 'antimetabolite', 'chemotherapy'] }
});

DRUGS.push({
  id: 'fludarabine',
  cls: 'antineoplastic-antimetabolite',
  otc: false,
  alert: true,
  name:  { ar: 'الفلودارابين', en: 'Fludarabine' },
  short: {
    ar: 'دواء كيميائي من مضادّات الأيض لابيضاض الدم اللمفاوي المزمن وبعض اللمفومات. يُضعف المناعة، ويستلزم أن يكون أي دم يُنقل للمريض معالَجاً بالإشعاع.',
    en: 'An antimetabolite chemotherapy for chronic lymphocytic leukaemia and some lymphomas. It weakens immunity, and any blood transfused to the patient must be irradiated.'
  },
  brands: ['فلودارا'],
  uses: ['leukemia', 'lymphoma'],
  keywords: { ar: ['كيماوي', 'ابيضاض الدم اللمفاوي المزمن', 'مضادات الأيض', 'فلودارا'], en: ['fludarabine', 'Fludara', 'CLL', 'antimetabolite'] }
});

DRUGS.push({
  id: 'mercaptopurine',
  cls: 'antineoplastic-antimetabolite',
  otc: false,
  alert: true,
  name:  { ar: 'الميركابتوبيورين', en: 'Mercaptopurine' },
  short: {
    ar: 'دواء كيميائي يؤخذ بالفم في البيت لابيضاض الدم اللمفاوي الحادّ، ويُستعمل أحياناً في داء كرون والتهاب القولون التقرّحي. يتعارض تعارضاً خطيراً مع الألوبيورينول.',
    en: 'An oral chemotherapy taken at home for acute lymphoblastic leukaemia, sometimes also used in Crohn disease and ulcerative colitis. It has a dangerous interaction with allopurinol.'
  },
  brands: ['بيوري نيثول', 'زالوبرين'],
  uses: ['leukemia', 'crohns', 'ulcerative-colitis'],
  keywords: { ar: ['كيماوي', 'مضاد البيورين', 'ابيضاض الدم', 'بيوري نيثول'], en: ['mercaptopurine', '6-MP', 'Purinethol', 'thiopurine'] }
});

DRUGS.push({
  id: 'tioguanine',
  cls: 'antineoplastic-antimetabolite',
  otc: false,
  alert: true,
  name:  { ar: 'التيوجوانين', en: 'Tioguanine (Thioguanine)' },
  short: {
    ar: 'دواء كيميائي بالفم من نظائر البيورين لابيضاض الدم النقوي الحادّ. خطره الخاصّ على الكبد، ولا يُنصح به علاجاً مستمرّاً طويل الأمد.',
    en: 'An oral purine-analogue chemotherapy for acute myeloid leukaemia. Its particular danger is to the liver, and it is not recommended for long-term continuous treatment.'
  },
  brands: ['لانفيس', 'تابلويد'],
  uses: ['leukemia'],
  keywords: { ar: ['كيماوي', 'ثيوغوانين', 'ابيضاض الدم النقوي', 'لانفيس'], en: ['tioguanine', 'thioguanine', '6-TG', 'Lanvis', 'Tabloid'] }
});

DRUGS.push({
  id: 'hydroxyurea',
  cls: 'antineoplastic-antimetabolite',
  otc: false,
  alert: true,
  name:  { ar: 'الهيدروكسي يوريا', en: 'Hydroxyurea (hydroxycarbamide)' },
  short: {
    ar: 'دواء بالفم من مضادّات الأيض لفقر الدم المنجلي وابيضاض الدم النقوي المزمن وأمراض النقي المزمنة. يحتاج تحاليل دم منتظمة ووقاية من الشمس ومنعاً صارماً للحمل.',
    en: 'An oral antimetabolite for sickle cell anaemia, chronic myeloid leukaemia and chronic bone marrow disorders. It needs regular blood tests, sun protection and strict contraception.'
  },
  brands: ['هيدريا', 'سيكلوس'],
  uses: ['sickle-cell', 'leukemia', 'oral-cancer'],
  keywords: { ar: ['هيدروكسي كارباميد', 'فقر الدم المنجلي', 'كثرة الحمر', 'هيدريا'], en: ['hydroxyurea', 'hydroxycarbamide', 'Hydrea', 'Siklos', 'Droxia'] }
});

DRUGS.push({
  id: 'calcium-folinate',
  cls: 'chemo-rescue',
  otc: false,
  alert: false,
  name:  { ar: 'فولينات الكالسيوم', en: 'Calcium folinate (leucovorin calcium)' },
  short: {
    ar: 'صورة فعّالة جاهزة من حمض الفوليك تحمي الخلايا السليمة من الميثوتريكسيت وتقوّي أثر الفلورويوراسيل في سرطان القولون. لا يُعالَج به نقص فيتامين ب١٢.',
    en: 'A ready-active form of folic acid that protects healthy cells from methotrexate and strengthens fluorouracil in bowel cancer. It must not be used to treat vitamin B12 deficiency.'
  },
  brands: ['ليكوفورين', 'حمض الفولينيك'],
  uses: ['colorectal-cancer', 'bone-cancer'],
  keywords: { ar: ['ليكوفورين', 'حمض الفولينيك', 'إنقاذ الميثوتريكسيت', 'فولينات'], en: ['leucovorin', 'folinic acid', 'calcium folinate', 'methotrexate rescue'] }
});

DRUGS.push({
  id: 'doxorubicin',
  cls: 'antineoplastic-anthracycline',
  otc: false,
  alert: true,
  name:  { ar: 'الدوكسوروبيسين', en: 'Doxorubicin' },
  short: {
    ar: 'دواء كيميائي أحمر اللون من الأنثراسيكلينات لطيف واسع من السرطانات. قد يُتلف عضلة القلب أثناء العلاج أو بعده بسنوات، ويلوّن البول بالأحمر ليوم أو يومين.',
    en: 'A red anthracycline chemotherapy for a wide range of cancers. It can damage the heart muscle during treatment or years afterwards, and it turns the urine red for a day or two.'
  },
  brands: ['أدرياميسين', 'دوكسوروبيسين'],
  uses: ['breast-cancer', 'lymphoma', 'leukemia', 'bladder-cancer', 'lung-cancer', 'stomach-cancer', 'ovarian-cancer', 'thyroid-cancer', 'bone-cancer', 'multiple-myeloma'],
  keywords: { ar: ['كيماوي', 'الكيماوي الأحمر', 'أنثراسيكلين', 'أدرياميسين'], en: ['doxorubicin', 'Adriamycin', 'anthracycline', 'hydroxydaunorubicin'] }
});

DRUGS.push({
  id: 'doxorubicin-liposomal',
  cls: 'antineoplastic-anthracycline',
  otc: false,
  alert: true,
  name:  { ar: 'الدوكسوروبيسين الشحمي المبغدد', en: 'Doxorubicin (as pegylated liposomal)' },
  short: {
    ar: 'الدوكسوروبيسين مغلّفاً بكريّات دهنية دقيقة تطيل بقاءه في الدم، لسرطان المبيض والورم النقوي المتعدّد وساركوما كابوسي. أشهر آثاره متلازمة اليد والقدم.',
    en: 'Doxorubicin wrapped in tiny fatty spheres that keep it longer in the blood, used for ovarian cancer, multiple myeloma and Kaposi sarcoma. Its best-known effect is hand-foot syndrome.'
  },
  brands: ['كيليكس', 'دوكسيل'],
  uses: ['ovarian-cancer', 'multiple-myeloma', 'hiv'],
  keywords: { ar: ['دوكسوروبيسين شحمي', 'ليبوزومي', 'كيليكس', 'ساركوما كابوسي'], en: ['pegylated liposomal doxorubicin', 'PLD', 'Caelyx', 'Doxil', 'liposomal'] }
});

DRUGS.push({
  id: 'daunorubicin',
  cls: 'antineoplastic-anthracycline',
  otc: false,
  alert: true,
  name:  { ar: 'الدونوروبيسين', en: 'Daunorubicin' },
  short: {
    ar: 'دواء كيميائي من الأنثراسيكلينات يُعطى في الوريد داخل المستشفى لابيضاض الدم الحادّ. يحمل تحذيراً رسمياً على القلب، ويلوّن البول بالأحمر.',
    en: 'An anthracycline chemotherapy given into a vein in hospital for acute leukaemia. It carries an official heart warning and turns the urine red.'
  },
  brands: ['دونوروبيسين'],
  uses: ['leukemia'],
  keywords: { ar: ['كيماوي', 'أنثراسيكلين', 'ابيضاض الدم الحاد', 'دونوروبيسين'], en: ['daunorubicin', 'daunomycin', 'anthracycline', 'AML'] }
});

DRUGS.push({
  id: 'bleomycin',
  cls: 'antineoplastic-antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'البليومايسين', en: 'Bleomycin' },
  short: {
    ar: 'مضادّ حيوي لا يُستعمل إلا في علاج السرطان: الخصية واللمفوما والرأس والعنق والانصباب الجنبي الخبيث. خطره الأكبر على الرئتين، فأخبر أي طبيب تخدير أنك أخذته.',
    en: 'An antibiotic used only in cancer treatment: testicular cancer, lymphoma, head and neck cancers and malignant pleural effusion. Its main danger is to the lungs, so tell any anaesthetist you have had it.'
  },
  brands: ['بليومايسين'],
  uses: ['testicular-cancer', 'lymphoma', 'oral-cancer', 'cervical-cancer', 'penile-cancer', 'pleural-effusion', 'hiv'],
  keywords: { ar: ['كيماوي', 'مضاد حيوي للأورام', 'تليف الرئة', 'بليومايسين'], en: ['bleomycin', 'Blenoxane', 'cytotoxic antibiotic', 'ABVD', 'BEP'] }
});

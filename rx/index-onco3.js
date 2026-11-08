/* ============================================================
   موسوعة الأدوية — فهرس دفعة الأورام الثالثة
   (الداكتينومايسين · مثبّطات التوبوإيزوميراز · التاكسانات ·
    قلويدات الونكة · إنزيمات الأسباراجيناز)
   rx/index-onco3.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   ملاحظة على الفصائل: فصائل هذه الدفعة غير معرّفة في DRUG_CLASSES
   داخل drugs.js، فتُضاف هنا بحارس لا يكتب فوق تعريف موجود — كما في
   index-onco1.js و index-onco2.js — فلا يتوقّف الملف على ترتيب التحميل.
   ============================================================ */

var DRUGS = window.DRUGS || [];

(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'antineoplastic-antibiotic':    { ar: 'مضادّات حيوية مضادّة للأورام', en: 'Cytotoxic antibiotics' },
    'antineoplastic-topoisomerase': { ar: 'أدوية كيميائية مثبّطة لإنزيم التوبوإيزوميراز', en: 'Topoisomerase inhibitor chemotherapy agents' },
    'antineoplastic-taxane':        { ar: 'أدوية كيميائية من التاكسانات', en: 'Taxane chemotherapy agents' },
    'antineoplastic-vinca':         { ar: 'أدوية كيميائية من قلويدات الونكة', en: 'Vinca alkaloid chemotherapy agents' },
    'antineoplastic-enzyme':        { ar: 'إنزيمات مضادّة للأورام', en: 'Antineoplastic enzymes' }
  };
  var grp = {
    'antineoplastic-antibiotic': 'cancer',
    'antineoplastic-topoisomerase': 'cancer',
    'antineoplastic-taxane': 'cancer',
    'antineoplastic-vinca': 'cancer',
    'antineoplastic-enzyme': 'cancer'
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
  id: 'dactinomycin',
  cls: 'antineoplastic-antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'الداكتينومايسين', en: 'Dactinomycin (Actinomycin D)' },
  short: {
    ar: 'مضاد حيوي لا يُستعمل إلا في علاج السرطان، يُحقن في الوريد بالمستشفى لأورام أطفال كورم ويلمز وساركوما العضلات وساركوما يوينغ، ولبعض سرطانات الخصية وأورام الحمل. تسرّبه خارج الوريد يؤذي الجلد بشدّة.',
    en: 'An antibiotic used only to treat cancer, injected into a vein in hospital for childhood tumours such as Wilms tumour, rhabdomyosarcoma and Ewing sarcoma, and for some testicular cancers and pregnancy-related tumours. Leakage outside the vein badly damages the skin.'
  },
  brands: ['كوزميجن'],
  uses: ['bone-cancer', 'testicular-cancer', 'molar-pregnancy', 'ovarian-cancer'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'أكتينومايسين', 'ورم ويلمز', 'ساركوما'], en: ['dactinomycin', 'actinomycin D', 'Cosmegen', 'Wilms tumour', 'chemotherapy'] }
});

DRUGS.push({
  id: 'etoposide',
  cls: 'antineoplastic-topoisomerase',
  otc: false,
  alert: true,
  name:  { ar: 'الإيتوبوسيد', en: 'Etoposide' },
  short: {
    ar: 'علاج كيميائي يُعطى بالتنقيط في الوريد أو كبسولات في البيت، لسرطان الرئة ذي الخلايا الصغيرة ولسرطان الخصية الذي لم يستجب لغيره. يثبّط نخاع العظم، فالحرارة بين الجلسات تستدعي الاتصال فوراً.',
    en: 'A chemotherapy given by drip into a vein or as capsules at home, for small cell lung cancer and for testicular cancer that has not responded to other treatment. It suppresses the bone marrow, so a fever between sessions means calling at once.'
  },
  brands: ['فيبيسيد', 'إيتوبوفوس'],
  uses: ['lung-cancer', 'testicular-cancer', 'lymphoma', 'leukemia', 'ovarian-cancer'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'مثبط التوبوإيزوميراز', 'فيبيسيد'], en: ['etoposide', 'VP-16', 'Vepesid', 'Etopophos', 'topoisomerase II'] }
});

DRUGS.push({
  id: 'irinotecan',
  cls: 'antineoplastic-topoisomerase',
  otc: false,
  alert: true,
  name:  { ar: 'الإيرينوتيكان', en: 'Irinotecan' },
  short: {
    ar: 'علاج كيميائي بالتنقيط الوريدي لسرطان القولون والمستقيم المنتشر، وصورته الشحمية لسرطان البنكرياس المنتشر. أخطر آثاره إسهال متأخّر قد يهدّد الحياة، فيبقى دواء الإسهال الذي يصفه الفريق جاهزاً في البيت.',
    en: 'A chemotherapy given by intravenous drip for spread colorectal cancer, with a liposomal form for spread pancreatic cancer. Its most dangerous effect is a late diarrhoea that can threaten life, so the diarrhoea medicine the team prescribes is kept ready at home.'
  },
  brands: ['كامبتو', 'كامبتوسار', 'أونيفايد'],
  uses: ['colorectal-cancer', 'pancreatic-cancer', 'lung-cancer'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'مثبط التوبوإيزوميراز', 'كامبتو', 'إسهال متأخر'], en: ['irinotecan', 'CPT-11', 'Campto', 'Camptosar', 'Onivyde', 'FOLFIRI'] }
});

DRUGS.push({
  id: 'paclitaxel',
  cls: 'antineoplastic-taxane',
  otc: false,
  alert: true,
  name:  { ar: 'الباكليتاكسيل', en: 'Paclitaxel' },
  short: {
    ar: 'علاج كيميائي من التاكسانات يُعطى بالتنقيط الوريدي لسرطانات الثدي والمبيض والرئة، وصورته المرتبطة بالألبومين لسرطان البنكرياس أيضاً. تُعطى قبله أدوية تقي من الحساسية، وأشهر آثاره تنميل اليدين والقدمين.',
    en: 'A taxane chemotherapy given by intravenous drip for breast, ovarian and lung cancers, with an albumin-bound form also used for pancreatic cancer. Medicines to prevent allergy are given before it, and its best-known effect is numbness of the hands and feet.'
  },
  brands: ['تاكسول', 'أبراكسان'],
  uses: ['breast-cancer', 'ovarian-cancer', 'lung-cancer', 'pancreatic-cancer', 'esophageal-cancer', 'bladder-cancer', 'cervical-cancer', 'endometrial-cancer', 'oral-cancer'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'تاكسان', 'تاكسول', 'أبراكسان'], en: ['paclitaxel', 'Taxol', 'Abraxane', 'nab-paclitaxel', 'taxane'] }
});

DRUGS.push({
  id: 'docetaxel',
  cls: 'antineoplastic-taxane',
  otc: false,
  alert: true,
  name:  { ar: 'الدوسيتاكسيل', en: 'Docetaxel' },
  short: {
    ar: 'علاج كيميائي من التاكسانات بالتنقيط الوريدي لسرطانات الثدي والرئة والبروستاتا والمعدة والرأس والعنق. يرافقه دواء كورتيزون يؤخذ في مواعيده، وأخطر آثاره هبوط المناعة واحتباس السوائل.',
    en: 'A taxane chemotherapy given by intravenous drip for cancers of the breast, lung, prostate, stomach, and head and neck. A corticosteroid taken on schedule goes with it, and its most dangerous effects are lowered immunity and fluid retention.'
  },
  brands: ['تاكسوتير'],
  uses: ['breast-cancer', 'lung-cancer', 'prostate-cancer', 'stomach-cancer', 'oral-cancer', 'laryngeal-cancer', 'ovarian-cancer'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'تاكسان', 'تاكسوتير'], en: ['docetaxel', 'Taxotere', 'taxane', 'chemotherapy'] }
});

DRUGS.push({
  id: 'vinblastine',
  cls: 'antineoplastic-vinca',
  otc: false,
  alert: true,
  name:  { ar: 'الفينبلاستين', en: 'Vinblastine' },
  short: {
    ar: 'علاج كيميائي من قلويدات الونكة يُحقن في الوريد وحده، للمفوما هودجكين وغيرها وسرطان الخصية وبعض الأورام الأخرى. حقنه بأي طريق غير الوريد قاتل، وتسرّبه خارج الوريد يهيّج الأنسجة.',
    en: 'A vinca alkaloid chemotherapy injected into a vein only, for Hodgkin and other lymphomas, testicular cancer and some other tumours. Giving it by any route other than a vein is fatal, and leakage outside the vein irritates the tissues.'
  },
  brands: ['فيلبي'],
  uses: ['lymphoma', 'testicular-cancer', 'breast-cancer', 'molar-pregnancy', 'bladder-cancer', 'lung-cancer', 'brain-tumor'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'قلويدات الونكة', 'لمفوما هودجكين'], en: ['vinblastine', 'Velbe', 'vinca alkaloid', 'ABVD', 'Hodgkin'] }
});

DRUGS.push({
  id: 'vincristine',
  cls: 'antineoplastic-vinca',
  otc: false,
  alert: true,
  name:  { ar: 'الفينكريستين', en: 'Vincristine' },
  short: {
    ar: 'علاج كيميائي من قلويدات الونكة يُحقن في الوريد فقط، لابيضاض الدم الحادّ واللمفومات وأورام الأطفال كورم ويلمز. أهمّ آثاره على الأعصاب والإمساك، وحقنه بأي طريق غير الوريد قاتل.',
    en: 'A vinca alkaloid chemotherapy injected into a vein only, for acute leukaemia, lymphomas and childhood tumours such as Wilms tumour. Its main effects are on the nerves and constipation, and giving it by any route other than a vein is fatal.'
  },
  brands: ['أونكوفين'],
  uses: ['leukemia', 'lymphoma', 'bone-cancer', 'brain-tumor', 'multiple-myeloma', 'lung-cancer'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'قلويدات الونكة', 'أونكوفين'], en: ['vincristine', 'Oncovin', 'vinca alkaloid', 'CHOP', 'neuropathy'] }
});

DRUGS.push({
  id: 'vinorelbine',
  cls: 'antineoplastic-vinca',
  otc: false,
  alert: true,
  name:  { ar: 'الفينوريلبين', en: 'Vinorelbine' },
  short: {
    ar: 'علاج كيميائي من قلويدات الونكة يُحقن في الوريد لسرطان الرئة غير صغير الخلايا المتقدّم. يثبّط نخاع العظم ويسبّب الإمساك، فالحرارة والإمساك الشديد يستدعيان الاتصال فوراً.',
    en: 'A vinca alkaloid chemotherapy injected into a vein for advanced non-small cell lung cancer. It suppresses the bone marrow and causes constipation, so fever or severe constipation means calling at once.'
  },
  brands: ['نافلبين'],
  uses: ['lung-cancer', 'breast-cancer', 'esophageal-cancer'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'قلويدات الونكة', 'نافلبين'], en: ['vinorelbine', 'Navelbine', 'vinca alkaloid', 'NSCLC'] }
});

DRUGS.push({
  id: 'asparaginase',
  cls: 'antineoplastic-enzyme',
  otc: false,
  alert: true,
  name:  { ar: 'الأسباراجيناز', en: 'Asparaginase' },
  short: {
    ar: 'إنزيم مضاد للأورام يُحقن ضمن خطة كيميائية لابيضاض الدم اللمفاوي الحادّ وللمفوما اللمفاوية الأرومية، وصورته المستخلصة من بكتيريا الإروينيا لمن تحسّس من صورة الإشريكية القولونية. يستلزم مراقبة البنكرياس والكبد والتخثّر.',
    en: 'An anticancer enzyme injected as part of a chemotherapy plan for acute lymphoblastic leukaemia and lymphoblastic lymphoma; its form from Erwinia bacteria is for those allergic to the E. coli form. It requires monitoring of the pancreas, liver and clotting.'
  },
  brands: ['إروينيز', 'سبكتريلا'],
  uses: ['leukemia', 'lymphoma'],
  keywords: { ar: ['كيماوي', 'إنزيم', 'إروينيا', 'ابيضاض الدم اللمفاوي الحاد'], en: ['asparaginase', 'L-asparaginase', 'Erwinase', 'Erwinaze', 'Rylaze', 'Spectrila', 'crisantaspase', 'ALL'] }
});

DRUGS.push({
  id: 'pegaspargase',
  cls: 'antineoplastic-enzyme',
  otc: false,
  alert: true,
  name:  { ar: 'البيج أسبارجيناز', en: 'Pegaspargase' },
  short: {
    ar: 'صورة طويلة المفعول من إنزيم الأسباراجيناز، مرتبطة بمادة تُطيل بقاءه في الجسم، تُحقن في العضل أو الوريد ضمن خطة لابيضاض الدم اللمفاوي الحادّ. تستلزم مراقبة الحساسية والبنكرياس والسكّر والكبد والتخثّر.',
    en: 'A long-acting form of the enzyme asparaginase, linked to a substance that prolongs its stay in the body, given into a muscle or vein as part of a plan for acute lymphoblastic leukaemia. It requires monitoring for allergy, pancreas, sugar, liver and clotting.'
  },
  brands: ['أونكاسبار'],
  uses: ['leukemia'],
  keywords: { ar: ['كيماوي', 'إنزيم', 'أسباراجيناز طويل المفعول', 'أونكاسبار'], en: ['pegaspargase', 'Oncaspar', 'PEG-asparaginase', 'ALL'] }
});

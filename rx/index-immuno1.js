/* ============================================================
   موسوعة الأدوية — فهرس دفعة المناعة الأولى
   (مثبّطات المناعة · مضادات الروماتيزم المعدّلة لسير المرض ·
    خافض حمض اليوريك · كورتيزون المفصل · المؤلكلات الكيميائية)
   rx/index-immuno1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   ملاحظة على الفصائل: بعض فصائل هذه الدفعة غير معرّفة في DRUG_CLASSES
   داخل drugs.js، فتُضاف هنا بحارس لا يكتب فوق تعريف موجود — كما في
   index-blood2.js. ومجموعتا «المناعة» و«الأورام» تُضافان إن لم توجدا.
   ============================================================ */

var DRUGS = window.DRUGS || [];

(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    immunosuppressant:            { ar: 'مثبّطات المناعة', en: 'Immunosuppressants' },
    dmard:                        { ar: 'مضادات الروماتيزم المعدّلة لسير المرض', en: 'Disease-modifying antirheumatic drugs (DMARDs)' },
    'urate-lowering':             { ar: 'خافضات حمض اليوريك', en: 'Urate-lowering drugs' },
    'corticosteroid-intraarticular': { ar: 'كورتيزونات تُحقن في المفصل', en: 'Intra-articular corticosteroids' },
    'antineoplastic-alkylating':  { ar: 'أدوية كيميائية مؤلكلة', en: 'Alkylating chemotherapy agents' }
  };
  var grp = {
    immunosuppressant: 'immune', dmard: 'immune', 'urate-lowering': 'immune',
    'corticosteroid-intraarticular': 'immune', 'antineoplastic-alkylating': 'cancer'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_GROUPS !== 'undefined' && DRUG_GROUPS) {
    if (!DRUG_GROUPS.immune) { DRUG_GROUPS.immune = { ar: 'المناعة والروماتيزم', en: 'Immunity and rheumatology' }; }
    if (!DRUG_GROUPS.cancer) { DRUG_GROUPS.cancer = { ar: 'الأورام والعلاج الكيميائي', en: 'Cancer and chemotherapy' }; }
  }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
})();

DRUGS.push({
  id: 'ciclosporin',
  cls: 'immunosuppressant',
  otc: false,
  alert: true,
  name:  { ar: 'السيكلوسبورين', en: 'Ciclosporin (Cyclosporine)' },
  short: {
    ar: 'مثبّط مناعة يحمي العضو المزروع من الرفض، ويهدّئ الروماتيزم والصدفية الشديدة. يحتاج تحاليل دم وقياس ضغط منتظمين، والجريب فروت ممنوع معه.',
    en: 'An immunosuppressant that protects a transplanted organ from rejection and calms severe rheumatoid arthritis and psoriasis. It needs regular blood tests and blood pressure checks, and grapefruit is forbidden with it.'
  },
  brands: ['ساندميون نيورال', 'ساندميون', 'ريستاسيس'],
  uses: ['rheumatoid-arthritis', 'psoriasis', 'ulcerative-colitis', 'crohns'],
  keywords: { ar: ['مثبط مناعة', 'زراعة الكلى', 'رفض العضو', 'نيورال', 'سيكلوسبورين'], en: ['cyclosporine', 'Neoral', 'Sandimmun', 'transplant', 'calcineurin inhibitor'] }
});

DRUGS.push({
  id: 'tacrolimus',
  cls: 'immunosuppressant',
  otc: false,
  alert: true,
  name:  { ar: 'التاكروليموس', en: 'Tacrolimus' },
  short: {
    ar: 'مثبّط مناعة بوجهين: كبسولات تحمي الكلية أو الكبد المزروع من الرفض، ومرهم للإكزيما حين تفشل الكورتيزونات. لا تُبدَّل تركيبته بأخرى إلا بأمر الطبيب.',
    en: 'An immunosuppressant with two faces: capsules that protect a transplanted kidney or liver from rejection, and an ointment for eczema when steroids fail. Its formulation is never swapped for another without the doctor.'
  },
  brands: ['بروغراف', 'أدفاغراف', 'إنفارسوس', 'بروتوبيك'],
  uses: ['eczema', 'vitiligo', 'crohns'],
  keywords: { ar: ['مثبط مناعة', 'زراعة', 'بروغراف', 'بروتوبيك', 'مرهم الإكزيما'], en: ['Prograf', 'Advagraf', 'Protopic', 'FK506', 'calcineurin inhibitor'] }
});

DRUGS.push({
  id: 'methotrexate',
  cls: 'dmard',
  otc: false,
  alert: true,
  name:  { ar: 'الميثوتريكسيت', en: 'Methotrexate' },
  short: {
    ar: 'حجر الأساس في علاج الروماتويد والصدفية، وعلاج كيميائي في بعض السرطانات. في أمراض المناعة دواء أسبوعي لا يومي، والخلط بينهما قاتل. ممنوع في الحمل.',
    en: 'The cornerstone of treatment for rheumatoid arthritis and psoriasis, and a chemotherapy in some cancers. In immune diseases it is a weekly medicine, not a daily one, and confusing the two can kill. Forbidden in pregnancy.'
  },
  brands: ['ميثوتريكسات', 'ميتوجيكت', 'ميثوتريكسات إيبيفي'],
  uses: ['rheumatoid-arthritis', 'psoriasis', 'crohns', 'leukemia', 'lymphoma', 'ms', 'molar-pregnancy'],
  keywords: { ar: ['روماتيزم', 'روماتويد', 'صدفية', 'ميثوتريكسات', 'دواء أسبوعي'], en: ['MTX', 'DMARD', 'Metoject', 'antimetabolite', 'weekly'] }
});

DRUGS.push({
  id: 'hydroxychloroquine',
  cls: 'dmard',
  otc: false,
  alert: true,
  name:  { ar: 'الهيدروكسي كلوروكين', en: 'Hydroxychloroquine' },
  short: {
    ar: 'دواء ملاريا قديم صار ركيزة في علاج الذئبة والروماتويد، يهدّئ المناعة ببطء خلال أسابيع. يحتاج فحص عين دوري، وقد يمسّ نظم القلب ويخفض سكّر الدم.',
    en: 'An old malaria medicine that became a mainstay in lupus and rheumatoid arthritis, calming the immune system slowly over weeks. It needs regular eye checks, and it can affect heart rhythm and lower blood sugar.'
  },
  brands: ['بلاكونيل', 'هيدروكسي كلوروكين'],
  uses: ['lupus', 'rheumatoid-arthritis', 'malaria', 'sarcoidosis', 'lichen-planus'],
  keywords: { ar: ['بلاكونيل', 'ذئبة', 'روماتويد', 'ملاريا', 'مضاد روماتيزم'], en: ['Plaquenil', 'HCQ', 'DMARD', 'antimalarial', 'lupus'] }
});

DRUGS.push({
  id: 'penicillamine',
  cls: 'dmard',
  otc: false,
  alert: true,
  name:  { ar: 'البنيسيلامين', en: 'Penicillamine' },
  short: {
    ar: 'دواء يلتقط النحاس الزائد ويطرده في البول لمرضى داء ويلسون، ويمنع حصى السيستين، ويُستعمل في الروماتويد الشديد. قوي الأذى فيحتاج تحاليل دم وبول متقاربة.',
    en: 'A medicine that grabs excess copper and flushes it out in the urine in Wilson disease, prevents cystine stones, and is used in severe rheumatoid arthritis. Its potential for harm is high, so it needs frequent blood and urine tests.'
  },
  brands: ['كوبريمين', 'ديبين'],
  uses: ['rheumatoid-arthritis', 'kidney-stones', 'lead-poisoning'],
  keywords: { ar: ['داء ويلسون', 'النحاس', 'حصى السيستين', 'بنسيلامين', 'خالب'], en: ['Cuprimine', 'Depen', 'Wilson disease', 'cystinuria', 'chelator'] }
});

DRUGS.push({
  id: 'allopurinol',
  cls: 'urate-lowering',
  otc: false,
  alert: false,
  name:  { ar: 'الألوبيورينول', en: 'Allopurinol' },
  short: {
    ar: 'يخفض حمض اليوريك فيمنع نوبات النقرس القادمة وحصى اليوريك، لكنه لا يعالج نوبة قائمة وقد يزيدها في الأشهر الأولى. أي طفح جلدي معه يستوجب إيقافه فوراً.',
    en: 'It lowers uric acid, preventing future gout attacks and uric acid stones, but it does not treat an attack under way and may increase attacks in the first months. Any skin rash on it means stopping at once.'
  },
  brands: ['زايلوريك', 'ألوبورينول'],
  uses: ['gout', 'kidney-stones'],
  keywords: { ar: ['نقرس', 'حمض اليوريك', 'زايلوريك', 'حصى', 'ألوبيورينول'], en: ['Zyloric', 'Zyloprim', 'uric acid', 'gout', 'xanthine oxidase inhibitor'] }
});

DRUGS.push({
  id: 'triamcinolone-hexacetonide',
  cls: 'corticosteroid-intraarticular',
  otc: false,
  alert: false,
  name:  { ar: 'التريامسينولون هيكساسيتونيد', en: 'Triamcinolone hexacetonide' },
  short: {
    ar: 'كورتيزون بطيء الذوبان يحقنه طبيب مختص داخل المفصل الملتهب نفسه، فيطفئ الالتهاب هناك طويلاً بأقل ما يصل إلى باقي الجسم. ركيزة في روماتيزم الأطفال.',
    en: 'A slowly dissolving corticosteroid injected by a trained specialist into the inflamed joint itself, damping inflammation there for a long time with the least reaching the rest of the body. A mainstay in childhood arthritis.'
  },
  brands: ['هكساتريون', 'أريستوسبان'],
  uses: ['rheumatoid-arthritis', 'osteoarthritis', 'gout', 'bursitis', 'tendinitis', 'epicondylitis', 'keloid', 'lichen-planus'],
  keywords: { ar: ['حقنة المفصل', 'إبرة الركبة', 'كورتيزون', 'روماتيزم الأطفال', 'تريامسينولون'], en: ['Hexatrione', 'Aristospan', 'intra-articular', 'joint injection', 'JIA'] }
});

DRUGS.push({
  id: 'cyclophosphamide',
  cls: 'antineoplastic-alkylating',
  otc: false,
  alert: true,
  name:  { ar: 'السيكلوفوسفاميد', en: 'Cyclophosphamide' },
  short: {
    ar: 'علاج كيميائي واسع الاستعمال في اللمفوما وابيضاض الدم وسرطان الثدي والمبيض، ويُستعمل في المتلازمة الكلوية عند بعض الأطفال. يهيّج المثانة فيلزمه شرب وافر.',
    en: 'A widely used chemotherapy in lymphoma, leukaemia, breast and ovarian cancer, also used in nephrotic syndrome in some children. It irritates the bladder, so it demands plenty of fluids.'
  },
  brands: ['إندوكسان', 'سايتوكسان'],
  uses: ['lymphoma', 'leukemia', 'multiple-myeloma', 'breast-cancer', 'ovarian-cancer', 'glomerular-disease'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'إندوكسان', 'مؤلكل', 'سيكلوفوسفاميد'], en: ['Endoxan', 'Cytoxan', 'CTX', 'chemotherapy', 'alkylating agent'] }
});

DRUGS.push({
  id: 'ifosfamide',
  cls: 'antineoplastic-alkylating',
  otc: false,
  alert: true,
  name:  { ar: 'الإيفوسفاميد', en: 'Ifosfamide' },
  short: {
    ar: 'علاج كيميائي وريدي في المستشفى لسرطان الخصية والعظام وغيرهما، يُعطى معه دواء واقٍ للمثانة. أخطر ما يُراقَب فيه أثره على الدماغ والكلى.',
    en: 'An intravenous hospital chemotherapy for testicular and bone cancer among others, given with a bladder-protecting drug. The dangers watched most closely are its effects on the brain and kidneys.'
  },
  brands: ['هولوكسان', 'إيفكس'],
  uses: ['testicular-cancer', 'bone-cancer', 'bladder-cancer', 'lung-cancer', 'ovarian-cancer', 'cervical-cancer'],
  keywords: { ar: ['كيماوي', 'علاج كيميائي', 'هولوكسان', 'ميسنا', 'إيفوسفاميد'], en: ['Holoxan', 'Ifex', 'mesna', 'chemotherapy', 'alkylating agent'] }
});

DRUGS.push({
  id: 'chlorambucil',
  cls: 'antineoplastic-alkylating',
  otc: false,
  alert: true,
  name:  { ar: 'الكلورامبيوسيل', en: 'Chlorambucil' },
  short: {
    ar: 'علاج كيميائي على هيئة أقراص تؤخذ في البيت لابيضاض الدم اللمفاوي المزمن واللمفوما. سهولة أخذه لا تعني خفّته: يثبّط نخاع العظم ويحتاج تحاليل دم منتظمة.',
    en: 'A chemotherapy in tablet form taken at home for chronic lymphocytic leukaemia and lymphoma. Its ease of use does not mean it is mild: it suppresses the bone marrow and needs regular blood tests.'
  },
  brands: ['لوكيران'],
  uses: ['leukemia', 'lymphoma'],
  keywords: { ar: ['كيماوي أقراص', 'لوكيران', 'ابيضاض الدم', 'لمفوما', 'كلورامبيوسيل'], en: ['Leukeran', 'CLL', 'chemotherapy tablet', 'alkylating agent', 'lymphoma'] }
});

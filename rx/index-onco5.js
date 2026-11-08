/* ============================================================
   موسوعة الأدوية — فهرس دفعة الأورام الخامسة
   (أجسام مضادة موجّهة · معدّلات مناعية · عوامل تحفيز المستعمرات · علاج هرموني)
   rx/index-onco5.js   (يحمّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   ملاحظة على الفصائل: الفصائل الأربع الأولى غير معرّفة في DRUG_CLASSES
   داخل drugs.js، فتضاف هنا بحارس لا يكتب فوق تعريف موجود — كما في
   index-onco1.js. وفصيلة مثبّطات الأروماتاز عرّفتها index-repro1.js
   بمجموعة endo، فتعاد هنا بالتعريف نفسه والمجموعة نفسها حتى لا يتغيّر
   مكان اللتروزول مهما كان ترتيب التحميل.
   ============================================================ */

var DRUGS = window.DRUGS || [];

(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'antineoplastic-monoclonal':      { ar: 'أجسام مضادة موجّهة للأورام', en: 'Monoclonal antibodies for cancer' },
    'antineoplastic-immunomodulator': { ar: 'معدّلات مناعية للأورام', en: 'Immunomodulatory cancer agents' },
    'colony-stimulating-factor':      { ar: 'عوامل تحفيز المستعمرات', en: 'Colony-stimulating factors' },
    'antineoplastic-hormonal':        { ar: 'علاج هرموني للأورام', en: 'Hormonal cancer therapy' },
    'aromatase-inhibitor':            { ar: 'مثبّطات الأروماتاز', en: 'Aromatase inhibitors' }
  };
  var grp = {
    'antineoplastic-monoclonal': 'cancer',
    'antineoplastic-immunomodulator': 'cancer',
    'colony-stimulating-factor': 'cancer',
    'antineoplastic-hormonal': 'cancer',
    'aromatase-inhibitor': 'endo'
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
  id: 'trastuzumab',
  cls: 'antineoplastic-monoclonal',
  otc: false,
  alert: true,
  name:  { ar: 'التراستوزوماب', en: 'Trastuzumab' },
  short: {
    ar: 'جسم مضاد موجّه يعطى بالوريد أو تحت الجلد في المستشفى لسرطان الثدي والمعدة الموجبين لبروتين HER2، وأهمّ ما يراقب معه القلب.',
    en: 'A targeted antibody given into a vein or under the skin in hospital for HER2-positive breast and stomach cancer; the heart is what is watched most closely with it.'
  },
  brands: ['هيرسبتين', 'هيرزوما', 'كانجينتي', 'أونترزانت'],
  uses:  ['breast-cancer', 'stomach-cancer'],
  keywords: {
    ar: ['هيرسبتين', 'HER2', 'هير تو', 'علاج موجّه', 'جسم مضاد', 'سرطان الثدي', 'سرطان المعدة'],
    en: ['Herceptin', 'HER2', 'anti-HER2', 'monoclonal antibody', 'targeted therapy', 'biosimilar']
  }
});

DRUGS.push({
  id: 'rituximab',
  cls: 'antineoplastic-monoclonal',
  otc: false,
  alert: true,
  name:  { ar: 'الريتوكسيماب', en: 'Rituximab' },
  short: {
    ar: 'جسم مضاد يعطى بالتسريب في المستشفى يزيل الخلايا اللمفاوية البائية، فيستعمل في لمفومات وابيضاض الدم اللمفاوي المزمن، وفي الروماتويد وبعض أمراض المناعة.',
    en: 'An antibody given by infusion in hospital that removes B lymphocytes; used for some lymphomas and chronic lymphocytic leukaemia, and for rheumatoid arthritis and some autoimmune diseases.'
  },
  brands: ['ماب ثيرا', 'ريتوكسان', 'تروكسيما'],
  uses:  ['lymphoma', 'leukemia', 'rheumatoid-arthritis'],
  keywords: {
    ar: ['ماب ثيرا', 'CD20', 'لمفوما', 'ابيضاض لمفاوي مزمن', 'روماتويد', 'التهاب الأوعية', 'الفقاع'],
    en: ['MabThera', 'Rituxan', 'anti-CD20', 'CLL', 'non-Hodgkin lymphoma', 'vasculitis', 'pemphigus']
  }
});

DRUGS.push({
  id: 'pembrolizumab',
  cls: 'antineoplastic-monoclonal',
  otc: false,
  alert: true,
  name:  { ar: 'البيمبروليزوماب', en: 'Pembrolizumab' },
  short: {
    ar: 'علاج مناعي بالتسريب في المستشفى يرفع الفرامل عن جهاز المناعة ليهاجم السرطان، يستعمل في طيف واسع من الأورام، وآثاره الخطيرة التهابات مناعية قد تصيب أي عضو.',
    en: 'An immunotherapy given by infusion in hospital that releases the brakes on the immune system so it attacks cancer; used across a wide range of tumours, and its serious effects are immune inflammation that can hit any organ.'
  },
  brands: ['كيترودا'],
  uses:  ['skin-cancer', 'lung-cancer', 'lymphoma', 'bladder-cancer', 'kidney-cancer', 'colorectal-cancer', 'endometrial-cancer', 'cervical-cancer', 'ovarian-cancer', 'esophageal-cancer', 'stomach-cancer', 'breast-cancer', 'oral-cancer', 'laryngeal-cancer'],
  keywords: {
    ar: ['كيترودا', 'علاج مناعي', 'PD-1', 'مثبّط نقاط التفتيش', 'ميلانوما', 'سرطان الرئة'],
    en: ['Keytruda', 'immunotherapy', 'PD-1', 'checkpoint inhibitor', 'PD-L1', 'MSI-H']
  }
});

DRUGS.push({
  id: 'blinatumomab',
  cls: 'antineoplastic-monoclonal',
  otc: false,
  alert: true,
  name:  { ar: 'البليناتوموماب', en: 'Blinatumomab' },
  short: {
    ar: 'جسم مضاد ثنائي الهدف يسرّب في الوريد بلا انقطاع عبر مضخّة، يربط الخلايا المناعية بخلايا ابيضاض الدم اللمفاوي الحادّ من النوع البائي لتقتلها، ويبدأ في المستشفى.',
    en: 'A two-target antibody infused into a vein continuously through a pump, linking immune cells to the cells of B-cell acute lymphoblastic leukaemia so they kill them; treatment starts in hospital.'
  },
  brands: ['بلينسيتو'],
  uses:  ['leukemia'],
  keywords: {
    ar: ['بلينسيتو', 'ابيضاض لمفاوي حاد', 'CD19', 'جسم مضاد ثنائي', 'مضخّة تسريب', 'علاج مناعي'],
    en: ['Blincyto', 'BiTE', 'bispecific', 'CD19', 'CD3', 'acute lymphoblastic leukaemia', 'ALL']
  }
});

DRUGS.push({
  id: 'lenalidomide',
  cls: 'antineoplastic-immunomodulator',
  otc: false,
  alert: true,
  name:  { ar: 'الليناليدوميد', en: 'Lenalidomide' },
  short: {
    ar: 'كبسولات تؤخذ في البيت للورم النقوي المتعدّد وبعض متلازمات خلل التنسّج النقوي واللمفومات، وتشوّه الجنين تشويهاً شديداً فلا تصرف إلا ضمن برنامج صارم لمنع الحمل.',
    en: 'Capsules taken at home for multiple myeloma, some myelodysplastic syndromes and lymphomas; it can cause severe birth defects, so it is dispensed only within a strict pregnancy prevention programme.'
  },
  brands: ['ريفليميد'],
  uses:  ['multiple-myeloma', 'lymphoma'],
  keywords: {
    ar: ['ريفليميد', 'ورم نقوي', 'خلل التنسّج النقوي', 'معدّل مناعي', 'تشوّه الأجنّة', 'جلطات'],
    en: ['Revlimid', 'IMiD', 'immunomodulatory', 'myeloma', 'MDS', 'del 5q', 'REMS']
  }
});

DRUGS.push({
  id: 'thalidomide',
  cls: 'antineoplastic-immunomodulator',
  otc: false,
  alert: true,
  name:  { ar: 'الثاليدوميد', en: 'Thalidomide' },
  short: {
    ar: 'كبسولات للورم النقوي المتعدّد ولمضاعفة جلدية التهابية من الجذام، وجرعة واحدة منها في الحمل قد تشوّه الجنين، فلا تصرف إلا ضمن برنامج صارم لمنع الحمل.',
    en: 'Capsules for multiple myeloma and for an inflammatory skin complication of leprosy; even a single dose in pregnancy can cause severe birth defects, so it is dispensed only within a strict pregnancy prevention programme.'
  },
  brands: ['ثالوميد', 'ثاليدوميد'],
  uses:  ['multiple-myeloma'],
  keywords: {
    ar: ['ثالوميد', 'ورم نقوي', 'الجذام', 'الحمامى العقدية الجذامية', 'تشوّه الأجنّة', 'اعتلال الأعصاب'],
    en: ['Thalomid', 'thalidomide', 'myeloma', 'erythema nodosum leprosum', 'ENL', 'Hansen disease', 'REMS']
  }
});

DRUGS.push({
  id: 'filgrastim',
  cls: 'colony-stimulating-factor',
  otc: false,
  alert: false,
  name:  { ar: 'الفيلجراستيم', en: 'Filgrastim' },
  short: {
    ar: 'حقنة تحت الجلد أو بالوريد تحفّز النخاع على صنع الكريات البيضاء المقاتلة للعدوى، تعطى بعد الكيماوي وحول زراعة النخاع وفي نقص العدلات المزمن، ويمكن تعلّم حقنها في البيت.',
    en: 'An injection under the skin or into a vein that prompts the bone marrow to make infection-fighting white cells; used after chemotherapy, around bone marrow transplants and in chronic neutropenia, and can be self-injected at home after training.'
  },
  brands: ['نيوبوجين', 'زارزيو', 'نيفستيم', 'جراستوفيل'],
  uses:  ['leukemia', 'hiv'],
  keywords: {
    ar: ['نيوبوجين', 'زارزيو', 'نقص العدلات', 'الكريات البيضاء', 'حقنة المناعة', 'بعد الكيماوي', 'الخلايا الجذعية'],
    en: ['Neupogen', 'Zarzio', 'Zarxio', 'G-CSF', 'neutropenia', 'white blood cells', 'stem cell mobilisation']
  }
});

DRUGS.push({
  id: 'pegfilgrastim',
  cls: 'colony-stimulating-factor',
  otc: false,
  alert: false,
  name:  { ar: 'البيج فيلجراستيم', en: 'Pegfilgrastim' },
  short: {
    ar: 'نسخة طويلة المفعول من الفيلجراستيم تبقى في الجسم مدّة أطول فتعطى أقلّ تكراراً، لتقليل العدوى والحمّى أثناء هبوط الكريات البيضاء بعد الكيماوي.',
    en: 'A long-acting form of filgrastim that stays in the body longer and so is given less often, to reduce infection and fever while white cells are low after chemotherapy.'
  },
  brands: ['نيولاستا', 'بيلجراز'],
  uses:  [],
  keywords: {
    ar: ['نيولاستا', 'نقص العدلات', 'حمّى نقص العدلات', 'الكريات البيضاء', 'بعد الكيماوي', 'جهاز الحقن الملصق'],
    en: ['Neulasta', 'Pelgraz', 'G-CSF', 'febrile neutropenia', 'on-body injector', 'Onpro']
  }
});

DRUGS.push({
  id: 'tamoxifen',
  cls: 'antineoplastic-hormonal',
  otc: false,
  alert: true,
  name:  { ar: 'التاموكسيفين', en: 'Tamoxifen' },
  short: {
    ar: 'أقراص هرمونية تمنع الإستروجين من تغذية سرطان الثدي الحسّاس للهرمونات، للعلاج والوقاية عند النساء والرجال، ومن أهمّ ما يراقب معها الجلطات ونزف الرحم.',
    en: 'Hormonal tablets that stop oestrogen feeding hormone-sensitive breast cancer, for treatment and prevention in women and men; clots and uterine bleeding are among the key things to watch.'
  },
  brands: ['نولفاديكس', 'تاموفين'],
  uses:  ['breast-cancer', 'gynecomastia'],
  keywords: {
    ar: ['نولفاديكس', 'علاج هرموني', 'مضاد الإستروجين', 'سرطان الثدي', 'الوقاية من سرطان الثدي', 'تثدّي'],
    en: ['Nolvadex', 'SERM', 'antiestrogen', 'hormone therapy', 'DCIS', 'breast cancer prevention']
  }
});

DRUGS.push({
  id: 'anastrozole',
  cls: 'aromatase-inhibitor',
  otc: false,
  alert: false,
  name:  { ar: 'الأناستروزول', en: 'Anastrozole' },
  short: {
    ar: 'أقراص تخفض إنتاج الإستروجين عند النساء بعد انقطاع الطمث، لعلاج سرطان الثدي الحسّاس للهرمونات والوقاية منه عند الأكثر عرضة، وأهمّ ما يتابع معها صحّة العظام.',
    en: 'Tablets that lower oestrogen production in women after menopause, to treat hormone-sensitive breast cancer and reduce risk in those at high risk; bone health is the main thing followed with it.'
  },
  brands: ['أريميدكس'],
  uses:  ['breast-cancer'],
  keywords: {
    ar: ['أريميدكس', 'مثبّط الأروماتاز', 'علاج هرموني', 'سرطان الثدي', 'بعد انقطاع الطمث', 'هشاشة العظام'],
    en: ['Arimidex', 'aromatase inhibitor', 'hormone therapy', 'postmenopausal', 'breast cancer']
  }
});

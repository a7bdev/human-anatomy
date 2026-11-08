/* ============================================================
   موسوعة الأدوية — فهرس دفعة الأورام الرابعة
   rx/index-onco4.js   (يُحمَّل دائماً — خفيف)
   عوامل التمايز لابيضاض الدم البروميلوسيتي · مثبّطات الكيناز الموجّهة
   · مثبّط mTOR · مثبّط البروتيازوم
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* فصائل هذه الدفعة غير موجودة في drugs.js — تُضاف هنا إن غابت ولا تُكتب فوق شيء */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) return;
  var add = {
    'antineoplastic-differentiating': { ar: 'علاجات التمايز لابيضاض الدم البروميلوسيتي', en: 'Differentiating agents for promyelocytic leukaemia' },
    'antineoplastic-tki':             { ar: 'مثبّطات الكيناز — علاج موجّه للأورام', en: 'Kinase inhibitors (targeted cancer therapy)' },
    'antineoplastic-mtor':            { ar: 'مثبّطات mTOR', en: 'mTOR inhibitors' },
    'antineoplastic-proteasome':      { ar: 'مثبّطات البروتيازوم', en: 'Proteasome inhibitors' }
  };
  var grp = {
    'antineoplastic-differentiating': 'cancer', 'antineoplastic-tki': 'cancer',
    'antineoplastic-mtor': 'cancer', 'antineoplastic-proteasome': 'cancer'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
  if (typeof DRUG_GROUPS !== 'undefined' && DRUG_GROUPS && !DRUG_GROUPS.cancer) {
    DRUG_GROUPS.cancer = { ar: 'أدوية الأورام', en: 'Cancer medicines' };
  }
})();

DRUGS.push({
  id: 'arsenic-trioxide',
  cls: 'antineoplastic-differentiating',
  otc: false,
  alert: true,
  name:  { ar: 'ثالث أكسيد الزرنيخ', en: 'Arsenic trioxide' },
  short: {
    ar: 'مركّب زرنيخ طبي يُعطى بالتنقيط في الوريد بالمستشفى لابيضاض الدم البروميلوسيتي الحادّ، غالباً مع التريتينوين. يحتاج تخطيط قلب وتحاليل أملاح منتظمة.',
    en: 'A medical arsenic compound given by intravenous drip in hospital for acute promyelocytic leukaemia, usually with tretinoin. It needs regular heart tracings and salt (electrolyte) tests.'
  },
  brands: ['ترايسنوكس'],
  uses: ['leukemia'],
  keywords: { ar: ['زرنيخ', 'ابيضاض الدم البروميلوسيتي', 'لوكيميا', 'متلازمة التمايز', 'ترايسنوكس'], en: ['Trisenox', 'ATO', 'APL', 'acute promyelocytic leukemia', 'differentiation syndrome'] }
});

DRUGS.push({
  id: 'realgar-indigo-naturalis',
  cls: 'antineoplastic-differentiating',
  otc: false,
  alert: true,
  name:  { ar: 'تركيبة الريلجار والنيلة الطبيعية', en: 'Realgar-Indigo naturalis formulation (RIF)' },
  short: {
    ar: 'أقراص زرنيخ فموية طُوّرت في الصين لابيضاض الدم البروميلوسيتي الحادّ، تُؤخذ مع حمض الريتينويك بديلاً عن الزرنيخ الوريدي. في قائمة الأدوية الأساسية لمنظمة الصحة، وليست علاجاً عشبياً يُشترى.',
    en: 'Oral arsenic tablets developed in China for acute promyelocytic leukaemia, taken with retinoic acid as an alternative to intravenous arsenic. On the WHO essential medicines list, and not a herbal remedy to buy.'
  },
  brands: [],
  uses: ['leukemia'],
  keywords: { ar: ['زرنيخ فموي', 'الريلجار', 'النيلة', 'طب صيني', 'ابيضاض الدم البروميلوسيتي', 'لوكيميا'], en: ['RIF', 'realgar', 'indigo naturalis', 'tetra-arsenic tetra-sulfide', 'Compound Huangdai', 'oral arsenic', 'APL'] }
});

DRUGS.push({
  id: 'all-trans-retinoic-acid',
  cls: 'antineoplastic-differentiating',
  otc: false,
  alert: true,
  name:  { ar: 'حمض الريتينويك كامل الترانس (التريتينوين الفموي)', en: 'All-trans retinoic acid (ATRA, oral tretinoin)' },
  short: {
    ar: 'كبسولات من مشتقّات فيتامين أ تدفع خلايا ابيضاض الدم البروميلوسيتي إلى النضج. يسبّب تشوّهات شديدة للجنين، وهو غير كريم التريتينوين الذي يوصف لحبّ الشباب.',
    en: 'Capsules derived from vitamin A that push promyelocytic leukaemia cells to mature. It causes severe birth defects, and it is not the tretinoin cream prescribed for acne.'
  },
  brands: ['فيسانويد'],
  uses: ['leukemia'],
  keywords: { ar: ['تريتينوين', 'ريتينويد', 'فيتامين أ', 'ابيضاض الدم البروميلوسيتي', 'متلازمة التمايز', 'فيسانويد'], en: ['ATRA', 'tretinoin capsules', 'Vesanoid', 'retinoid', 'APL', 'differentiation syndrome'] }
});

DRUGS.push({
  id: 'imatinib',
  cls: 'antineoplastic-tki',
  otc: false,
  alert: true,
  name:  { ar: 'الإيماتينيب', en: 'Imatinib' },
  short: {
    ar: 'أقراص علاج موجّه تُؤخذ في البيت مع الطعام لابيضاض الدم النقوي المزمن وأورام السدى المعدية المعوية وغيرها. أشهر آثاره احتباس السوائل وتورّم حول العينين.',
    en: 'Targeted therapy tablets taken at home with food for chronic myeloid leukaemia, gastrointestinal stromal tumours and others. Its best-known effect is fluid retention and puffiness around the eyes.'
  },
  brands: ['غليفيك'],
  uses: ['leukemia'],
  keywords: { ar: ['علاج موجّه', 'مثبّط كيناز', 'ابيضاض الدم النقوي المزمن', 'ورم السدى', 'جيست', 'غليفيك'], en: ['Gleevec', 'Glivec', 'CML', 'GIST', 'tyrosine kinase inhibitor', 'BCR-ABL', 'Philadelphia chromosome'] }
});

DRUGS.push({
  id: 'dasatinib',
  cls: 'antineoplastic-tki',
  otc: false,
  alert: true,
  name:  { ar: 'الداساتينيب', en: 'Dasatinib' },
  short: {
    ar: 'أقراص علاج موجّه لابيضاض الدم النقوي المزمن وبعض ابيضاض الدم اللمفاوي الحادّ، خاصة بعد فشل الإيماتينيب. أهمّ ما يُراقَب تجمّع السوائل حول الرئتين.',
    en: 'Targeted therapy tablets for chronic myeloid leukaemia and some acute lymphoblastic leukaemia, especially after imatinib has failed. The key thing to watch is fluid collecting around the lungs.'
  },
  brands: ['سبرايسل'],
  uses: ['leukemia'],
  keywords: { ar: ['علاج موجّه', 'مثبّط كيناز', 'ابيضاض الدم النقوي المزمن', 'انصباب جنبي', 'سبرايسل'], en: ['Sprycel', 'CML', 'Ph+ ALL', 'tyrosine kinase inhibitor', 'pleural effusion'] }
});

DRUGS.push({
  id: 'nilotinib',
  cls: 'antineoplastic-tki',
  otc: false,
  alert: true,
  name:  { ar: 'النيلوتينيب', en: 'Nilotinib' },
  short: {
    ar: 'كبسولات علاج موجّه لابيضاض الدم النقوي المزمن، تُؤخذ على معدة فارغة. عليه تحذير بإطار أسود من اضطراب نظم القلب والموت المفاجئ، ويحتاج تخطيط قلب منتظماً.',
    en: 'Targeted therapy capsules for chronic myeloid leukaemia, taken on an empty stomach. It carries a boxed warning for heart rhythm disturbance and sudden death, and needs regular heart tracings.'
  },
  brands: ['تاسيجنا'],
  uses: ['leukemia'],
  keywords: { ar: ['علاج موجّه', 'مثبّط كيناز', 'ابيضاض الدم النقوي المزمن', 'إطالة QT', 'تاسيجنا'], en: ['Tasigna', 'Danziten', 'CML', 'QT prolongation', 'tyrosine kinase inhibitor', 'BCR-ABL'] }
});

DRUGS.push({
  id: 'erlotinib',
  cls: 'antineoplastic-tki',
  otc: false,
  alert: true,
  name:  { ar: 'الإرلوتينيب', en: 'Erlotinib' },
  short: {
    ar: 'أقراص علاج موجّه لسرطان الرئة الذي يحمل طفرة EGFR ولسرطان البنكرياس مع الجيمسيتابين، تُؤخذ على معدة فارغة. أشهر آثاره طفح يشبه حبّ الشباب وإسهال، والتدخين يُضعف مفعوله.',
    en: 'Targeted therapy tablets for lung cancer carrying an EGFR mutation and for pancreatic cancer with gemcitabine, taken on an empty stomach. Its best-known effects are an acne-like rash and diarrhoea, and smoking weakens it.'
  },
  brands: ['تارسيفا'],
  uses: ['lung-cancer', 'pancreatic-cancer'],
  keywords: { ar: ['علاج موجّه', 'مثبّط كيناز', 'طفرة EGFR', 'سرطان الرئة', 'تارسيفا'], en: ['Tarceva', 'EGFR inhibitor', 'NSCLC', 'tyrosine kinase inhibitor', 'pancreatic cancer'] }
});

DRUGS.push({
  id: 'ibrutinib',
  cls: 'antineoplastic-tki',
  otc: false,
  alert: true,
  name:  { ar: 'الإيبروتينيب', en: 'Ibrutinib' },
  short: {
    ar: 'أقراص علاج موجّه لابيضاض الدم اللمفاوي المزمن وماكروغلوبولينية فالدنستروم وداء الطعم حيال الثوي المزمن. يزيد النزف واضطراب نظم القلب، ويتعارض مع المميّعات والجريب فروت.',
    en: 'Targeted therapy tablets for chronic lymphocytic leukaemia, Waldenström macroglobulinaemia and chronic graft-versus-host disease. It raises the risk of bleeding and heart rhythm problems, and clashes with blood thinners and grapefruit.'
  },
  brands: ['إمبروفيكا'],
  uses: ['leukemia', 'lymphoma'],
  keywords: { ar: ['علاج موجّه', 'مثبّط BTK', 'ابيضاض الدم اللمفاوي المزمن', 'فالدنستروم', 'إمبروفيكا'], en: ['Imbruvica', 'BTK inhibitor', 'CLL', 'SLL', 'Waldenstrom', 'mantle cell lymphoma', 'cGVHD'] }
});

DRUGS.push({
  id: 'everolimus',
  cls: 'antineoplastic-mtor',
  otc: false,
  alert: true,
  name:  { ar: 'الإيفيروليموس', en: 'Everolimus' },
  short: {
    ar: 'أقراص تثبّط بروتين mTOR، لسرطانات الثدي والكلى والأورام العصبية الصمّاوية وأورام التصلّب الحدبي ونوباته، وبتركيبة أخرى لمنع رفض الكلية المزروعة. أشهر آثاره تقرّحات الفم.',
    en: 'Tablets that block the mTOR protein, for breast and kidney cancers, neuroendocrine tumours, and the tumours and seizures of tuberous sclerosis, and in another product to prevent kidney transplant rejection. Its best-known effect is mouth sores.'
  },
  brands: ['أفينيتور', 'سيرتيكان'],
  uses: ['breast-cancer', 'kidney-cancer', 'brain-tumor', 'epilepsy'],
  keywords: { ar: ['مثبّط mTOR', 'التصلّب الحدبي', 'سرطان الكلية', 'أورام عصبية صمّاوية', 'زراعة الكلى', 'أفينيتور'], en: ['Afinitor', 'Afinitor Disperz', 'Zortress', 'Certican', 'mTOR inhibitor', 'tuberous sclerosis', 'SEGA', 'neuroendocrine tumour'] }
});

DRUGS.push({
  id: 'bortezomib',
  cls: 'antineoplastic-proteasome',
  otc: false,
  alert: true,
  name:  { ar: 'البورتيزوميب', en: 'Bortezomib' },
  short: {
    ar: 'حقنة تحت الجلد أو في الوريد بالمستشفى للورم النقوي المتعدّد ولمفوما خلايا الوشاح. أهمّ آثاره تلف الأعصاب الطرفية وهبوط الضغط والحزام الناري.',
    en: 'An injection under the skin or into a vein in hospital for multiple myeloma and mantle cell lymphoma. Its key effects are damage to the peripheral nerves, low blood pressure and shingles.'
  },
  brands: ['فيلكيد'],
  uses: ['multiple-myeloma', 'lymphoma'],
  keywords: { ar: ['مثبّط البروتيازوم', 'الورم النقوي', 'لمفوما خلايا الوشاح', 'اعتلال الأعصاب', 'فيلكيد'], en: ['Velcade', 'proteasome inhibitor', 'multiple myeloma', 'mantle cell lymphoma', 'peripheral neuropathy'] }
});

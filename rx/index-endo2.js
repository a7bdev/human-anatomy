/* ============================================================
   موسوعة الأدوية — فهرس دفعة الغدد الثانية (endo2)
   rx/index-endo2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   عشرة أدوية: الدرقية (ليفوثيروكسين · ميثيمازول · بروبيل ثيويوراسيل ·
   يوديد البوتاسيوم · محلول لوجول) · هرمونات (تستوستيرون · كابرجولين ·
   أوكتريوتيد) · فيتامينان (ج · د٣).

   ملاحظة على الفصائل: بدائل هرمون الدرقية ومضادات الدرقية ومستحضرات
   اليود والأندروجينات وناهضات الدوبامين ونظائر السوماتوستاتين غير
   معرّفة في DRUG_CLASSES داخل drugs.js، وdrugs.js ممنوع تعديله في
   هذه الدفعة. فتُضاف أسماؤها من هنا إضافةً لا استبدالاً (drugs.js
   يُحمَّل قبل هذا الملف) حتى تُعرض بالعربية وتقع في مجموعة
   «السكّري والهرمونات» لا «أخرى».
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* أسماء فصائل هذه الدفعة — تُضاف ولا تستبدل شيئاً موجوداً */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'thyroid-hormone':    { ar: 'بدائل هرمون الغدة الدرقية', en: 'Thyroid hormone replacement' },
    antithyroid:          { ar: 'مضادات الغدة الدرقية', en: 'Antithyroid drugs' },
    iodine:               { ar: 'مستحضرات اليود', en: 'Iodine preparations' },
    androgen:             { ar: 'الأندروجينات (هرمون الذكورة)', en: 'Androgens' },
    'dopamine-agonist':   { ar: 'ناهضات الدوبامين', en: 'Dopamine agonists' },
    'somatostatin-analog':{ ar: 'نظائر السوماتوستاتين', en: 'Somatostatin analogues' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'endo'; } }
  }
})();

DRUGS.push({
  id: 'levothyroxine',
  cls: 'thyroid-hormone',
  otc: false,
  alert: true,
  name:  { ar: 'الليفوثيروكسين', en: 'Levothyroxine' },
  short: {
    ar: 'هرمون درقي صناعي يحلّ محلّ ما عجزت الغدة عن صنعه، وهو علاج قصور الدرقية الأول. يُؤخذ على معدة خالية، وهامش أمانه ضيّق فالزيادة تُتعب القلب والعظم. وعليه تحذير رسمي: ليس دواءً للتنحيف.',
    en: 'A synthetic thyroid hormone that replaces what the gland can no longer make, and the first-line treatment for an underactive thyroid. Taken on an empty stomach; its safety margin is narrow, so excess strains the heart and bone. It carries an official warning: it is not a weight-loss drug.'
  },
  brands: ['إلتروكسين', 'يوثيروكس', 'سينثرويد', 'ليفوثيروكسين'],
  uses: ['hypothyroidism', 'hashimoto', 'congenital-hypothyroidism', 'goiter', 'thyroid-cancer', 'hypopituitarism'],
  keywords: { ar: ['الدرقية', 'خمول الغدة', 'ثيروكسين', 'هرمون درقي'], en: ['thyroxine', 'T4', 'hypothyroidism', 'eltroxin', 'euthyrox'] }
});

DRUGS.push({
  id: 'methimazole',
  cls: 'antithyroid',
  otc: false,
  alert: true,
  name:  { ar: 'الميثيمازول', en: 'Methimazole' },
  short: {
    ar: 'يكبح صناعة هرمون الدرقية فيهدّئ فرط نشاطها، وهو مضاد الدرقية المفضّل خارج الأشهر الأولى من الحمل. علامته الحمراء: التهاب حلق مع حرارة قد يعني انهيار كريات الدم البيضاء.',
    en: 'It suppresses the making of thyroid hormone and so calms an overactive gland; it is the preferred antithyroid drug outside the first months of pregnancy. Its red flag: a sore throat with fever may mean a collapse of the white blood cells.'
  },
  brands: ['تابازول', 'ميثيمازول', 'ثياميزول'],
  uses: ['hyperthyroidism', 'thyroid-storm', 'goiter'],
  keywords: { ar: ['مضاد درقية', 'فرط نشاط الغدة', 'ميثيمازول', 'ثيامازول'], en: ['thiamazole', 'tapazole', 'antithyroid', 'graves'] }
});

DRUGS.push({
  id: 'propylthiouracil',
  cls: 'antithyroid',
  otc: false,
  alert: true,
  name:  { ar: 'البروبيل ثيويوراسيل', en: 'Propylthiouracil' },
  short: {
    ar: 'مضاد درقية يُحفَظ لحالات بعينها: الأشهر الأولى من الحمل، والعاصفة الدرقية، ومن لم يحتمل الميثيمازول. عليه تحذير رسمي مؤطَّر بأذى كبدي شديد قد يبلغ الفشل وزراعة الكبد.',
    en: 'An antithyroid drug kept for particular situations: the first months of pregnancy, thyroid storm, and people who could not tolerate methimazole. It carries a boxed warning of severe liver injury that may reach failure and transplantation.'
  },
  brands: ['بروبيل ثيويوراسيل', 'بي تي يو'],
  uses: ['hyperthyroidism', 'thyroid-storm'],
  keywords: { ar: ['مضاد درقية', 'بروبيل', 'فرط نشاط الغدة', 'حمل'], en: ['PTU', 'antithyroid', 'hyperthyroidism', 'liver'] }
});

DRUGS.push({
  id: 'potassium-iodide',
  cls: 'iodine',
  otc: true,
  alert: true,
  name:  { ar: 'يوديد البوتاسيوم', en: 'Potassium iodide' },
  short: {
    ar: 'يُغرِق الغدة الدرقية بيود غير مشعّ فيسدّ بابها أمام اليود المشعّ في الطوارئ النووية. لا يُؤخذ إلا حين تأمر به السلطات الصحية، ولا يحمي من غير اليود المشعّ. ويُستعمل أيضاً في العاصفة الدرقية.',
    en: 'It floods the thyroid with non-radioactive iodine and so closes its door to radioactive iodine in a nuclear emergency. It is taken only when health authorities say so, and it protects against nothing but radioactive iodine. It is also used in thyroid storm.'
  },
  brands: ['يوديد البوتاسيوم', 'ثايروسيف', 'آيوسات'],
  uses: ['thyroid-storm', 'hyperthyroidism'],
  keywords: { ar: ['يود', 'إشعاع', 'طوارئ نووية', 'درقية'], en: ['KI', 'iodide', 'radiation', 'thyroid blocking'] }
});

DRUGS.push({
  id: 'iodine-potassium-iodide',
  cls: 'iodine',
  otc: false,
  alert: true,
  name:  { ar: 'محلول لوجول (اليود مع يوديد البوتاسيوم)', en: "Iodine + potassium iodide (Lugol's solution)" },
  short: {
    ar: 'محلول يود قوي يُشرب مخفّفاً في الماء لتهدئة الغدة الدرقية المتوهّجة قبل جراحتها ولتقليل نزفها، ويدخل في علاج العاصفة الدرقية. أثره مؤقّت وينفلت الجسم منه مع طول الاستعمال.',
    en: 'A strong iodine solution drunk diluted in water to quiet an overactive thyroid before its surgery and to reduce its bleeding, and part of the treatment of thyroid storm. Its effect is temporary and the body escapes it with prolonged use.'
  },
  brands: ['محلول لوجول', 'محلول اليود القوي'],
  uses: ['hyperthyroidism', 'thyroid-storm', 'goiter'],
  keywords: { ar: ['لوجول', 'يود', 'قبل الجراحة', 'درقية'], en: ["Lugol's", 'strong iodine', 'thyroidectomy', 'thyroid'] }
});

DRUGS.push({
  id: 'testosterone',
  cls: 'androgen',
  otc: false,
  alert: true,
  name:  { ar: 'التستوستيرون', en: 'Testosterone' },
  short: {
    ar: 'هرمون الذكورة يُعطى بديلاً حين يثبت نقصه بالتحليل مع أعراضه. للرجال البالغين وحدهم: ممنوع على النساء والأطفال، ويوقف صناعة الحيوانات المنوية، ويلزمه فحص دم وبروستاتا دوري.',
    en: 'The male hormone given as replacement when a shortage is proven by blood test alongside its symptoms. For adult men only: forbidden to women and children, it shuts down sperm production, and it needs periodic blood and prostate checks.'
  },
  brands: ['سستينون', 'نيبيدو', 'أندروجيل', 'تستوستيرون'],
  uses: ['male-hypogonadism', 'hypopituitarism'],
  keywords: { ar: ['هرمون الذكورة', 'تستوستيرون', 'نقص هرمون', 'أندروجين'], en: ['testosterone', 'androgen', 'hypogonadism', 'TRT'] }
});

DRUGS.push({
  id: 'cabergoline',
  cls: 'dopamine-agonist',
  otc: false,
  alert: true,
  name:  { ar: 'الكابرجولين', en: 'Cabergoline' },
  short: {
    ar: 'يخفض هرمون الحليب المرتفع فيعيد الدورة والخصوبة ويصغّر ورم النخامى المفرز له. يُتابَع بتخطيط صدى للقلب لأن فصيلته قد تُثخّن صمّاماته، ويُعرف عنه إطلاق نزوات قهرية كالمقامرة.',
    en: 'It lowers a raised milk hormone, restoring the cycle and fertility and shrinking the pituitary tumour that secretes it. It is followed with a heart ultrasound because its class can thicken the valves, and it is known to unleash compulsive urges such as gambling.'
  },
  brands: ['دوستينكس', 'كابرجولين', 'كابرلين'],
  uses: ['hyperprolactinemia', 'pituitary-adenoma', 'infertility'],
  keywords: { ar: ['برولاكتين', 'هرمون الحليب', 'نخامية', 'كابرجولين'], en: ['cabergoline', 'dostinex', 'prolactin', 'dopamine agonist'] }
});

DRUGS.push({
  id: 'octreotide',
  cls: 'somatostatin-analog',
  otc: false,
  alert: false,
  name:  { ar: 'الأوكتريوتيد', en: 'Octreotide' },
  short: {
    ar: 'نسخة صناعية طويلة العمر من هرمون يكبح إفرازات الجسم: يخفض هرمون النمو في ضخامة النهايات، ويوقف الإسهال والتورّد في أورام الغدد الصمّاء. حقن، وأشهر أذاه حصى المرارة.',
    en: 'A long-lived synthetic copy of a hormone that suppresses the body’s secretions: it lowers growth hormone in acromegaly and stops the diarrhoea and flushing of neuroendocrine tumours. Given by injection, and its best-known harm is gallstones.'
  },
  brands: ['ساندوستاتين', 'ساندوستاتين لار', 'أوكتريوتيد'],
  uses: ['acromegaly', 'pituitary-adenoma', 'chronic-diarrhea'],
  keywords: { ar: ['هرمون النمو', 'ضخامة النهايات', 'سوماتوستاتين', 'أوكتريوتيد'], en: ['octreotide', 'sandostatin', 'acromegaly', 'somatostatin'] }
});

DRUGS.push({
  id: 'ascorbic-acid',
  cls: 'vitamin',
  otc: true,
  alert: false,
  name:  { ar: 'فيتامين ج (حمض الأسكوربيك)', en: 'Vitamin C (Ascorbic acid)' },
  short: {
    ar: 'فيتامين لا يصنعه الجسم ولا يخزنه، يلزم لبناء الكولاجين ولالتئام الجروح ولامتصاص حديد النبات. نقصه الشديد هو الإسقربوط، والإفراط فيه يسبّب إسهالاً ويقلق من حصى الكلى.',
    en: 'A vitamin the body neither makes nor stores, needed to build collagen, heal wounds and absorb plant iron. Its severe lack is scurvy, and an excess causes diarrhoea and raises concern about kidney stones.'
  },
  brands: ['ريدوكسون', 'فيتامين سي', 'سي ريتارد'],
  uses: ['scurvy', 'iron-anemia'],
  keywords: { ar: ['فيتامين ج', 'فيتامين سي', 'أسكوربيك', 'إسقربوط'], en: ['vitamin C', 'ascorbic acid', 'scurvy', 'collagen'] }
});

DRUGS.push({
  id: 'colecalciferol',
  cls: 'vitamin',
  otc: true,
  alert: false,
  name:  { ar: 'فيتامين د٣ (كوليكالسيفيرول)', en: 'Vitamin D3 (Colecalciferol)' },
  short: {
    ar: 'الصورة التي يصنعها الجلد بالشمس، وتُعطى دواءً حين لا تكفي الشمس والطعام. يفتح باب امتصاص الكالسيوم فيبني العظم والسنّ والعضلة. زيادته لا تقوّي العظم بل ترفع الكالسيوم وتؤذي الكلى.',
    en: 'The form the skin makes in sunlight, given as a medicine when sun and food are not enough. It opens the door to calcium absorption and so builds bone, tooth and muscle. An excess does not strengthen bone but raises calcium and harms the kidney.'
  },
  brands: ['ديفيت ٣', 'دي كيور', 'فيتامين د٣', 'كوليكالسيفيرول'],
  uses: ['vitamin-d-deficiency', 'osteomalacia-rickets', 'osteoporosis', 'hypocalcemia'],
  keywords: { ar: ['فيتامين د', 'كوليكالسيفيرول', 'كالسيوم', 'شمس'], en: ['vitamin D', 'cholecalciferol', 'D3', 'calcium'] }
});

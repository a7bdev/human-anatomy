/* ============================================================
   موسوعة الأدوية — فهرس دفعة الدم ومنتجاته (blood1)
   rx/index-blood1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   كل بطاقة كُتبت من نشرة رسمية مفتوحة وقت الكتابة — المصادر في rx-blood1.js

   عشرة: الديزموبريسين · الإيميسيزوماب · خالبا الحديد (الديفيراسيروكس ·
   الديفيروكسامين) · منتجات الدم (الدم الكامل · كريات الدم الحمراء ·
   الصفائح · البلازما الطازجة المجمّدة · الراسب القري منخفض الممرضات) ·
   الغلوبولين المناعي الطبيعي.

   ملاحظة على الفصائل: فصائل هذه الدفعة غير معرّفة في DRUG_CLASSES داخل
   drugs.js، وdrugs.js ممنوع تعديله في هذه الدفعة. فتُضاف أسماؤها من هنا
   إضافةً لا استبدالاً (كما في index-vit2.js) حتى تُعرض بالعربية.
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* أسماء فصائل هذه الدفعة — تُضاف ولا تستبدل شيئاً موجوداً */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'vasopressin-analogue': { ar: 'نظائر الفازوبريسين', en: 'Vasopressin analogues' },
    'haemostatic-antibody': { ar: 'أجسام مضادّة لمنع النزف', en: 'Haemostatic antibodies' },
    'iron-chelator':        { ar: 'خالبات الحديد', en: 'Iron chelators' },
    'blood-product':        { ar: 'الدم ومكوّناته', en: 'Blood and blood components' },
    'immunoglobulin':       { ar: 'الغلوبولينات المناعية', en: 'Immunoglobulins' }
  };
  var group = {
    'vasopressin-analogue': 'endo',
    'haemostatic-antibody': 'other',
    'iron-chelator': 'other',
    'blood-product': 'other',
    'immunoglobulin': 'other'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in group) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = group[k]; } }
  }
})();

DRUGS.push({
  id: 'desmopressin',
  cls: 'vasopressin-analogue',
  otc: false,
  alert: true,
  name:  { ar: 'الديزموبريسين', en: 'Desmopressin' },
  short: {
    ar: 'نسخة مصنّعة من هرمون يضبط الماء والملح: تُنقص البول في البوالة التفهة والتبوّل الليلي، وحقنها ترفع عوامل التجلّط في بعض أمراض النزف. خطرها الأكبر انخفاض الصوديوم إن كثر الشرب.',
    en: 'A man-made copy of the hormone that balances water and salt: it reduces urine in diabetes insipidus and bedwetting, and its injection raises clotting factors in some bleeding disorders. Its main danger is low sodium if too much fluid is drunk.'
  },
  brands: ['مينيرين', 'دي دي إيه في بي'],
  uses: ['diabetes-insipidus', 'bedwetting', 'hemophilia'],
  keywords: { ar: ['ديزموبريسين', 'مينيرين', 'هرمون مضاد لادرار البول', 'تبول لاارادي', 'سكري كاذب', 'فون ويلبراند'], en: ['desmopressin', 'DDAVP', 'minirin', 'vasopressin analogue', 'enuresis', 'von Willebrand'] }
});

DRUGS.push({
  id: 'emicizumab',
  cls: 'haemostatic-antibody',
  otc: false,
  alert: true,
  name:  { ar: 'الإيميسيزوماب', en: 'Emicizumab' },
  short: {
    ar: 'جسم مضادّ يُحقن تحت الجلد للوقاية من النزف في الهيموفيليا أ، مع مثبّطات العامل الثامن أو بدونها. لا يعالج نزفاً قائماً، ويحمل تحذيراً مؤطّراً عند جمعه بمركّز البروثرومبين المنشّط.',
    en: 'An antibody injected under the skin to prevent bleeding in haemophilia A, with or without factor VIII inhibitors. It does not treat an active bleed, and carries a boxed warning when combined with activated prothrombin complex concentrate.'
  },
  brands: ['هيمليبرا'],
  uses: ['hemophilia'],
  keywords: { ar: ['ايميسيزوماب', 'هيمليبرا', 'هيموفيليا', 'ناعور', 'العامل الثامن'], en: ['emicizumab', 'hemlibra', 'haemophilia A', 'factor VIII', 'bispecific antibody'] }
});

DRUGS.push({
  id: 'deferasirox',
  cls: 'iron-chelator',
  otc: false,
  alert: true,
  name:  { ar: 'الديفيراسيروكس', en: 'Deferasirox' },
  short: {
    ar: 'خالب حديد يؤخذ بالفم لإخراج الحديد المتراكم من نقل الدم المتكرّر، كما في الثلاسيميا. يحمل تحذيراً مؤطّراً بشأن الكلى والكبد والنزف الهضمي، فتلازمه تحاليل منتظمة.',
    en: 'An iron chelator taken by mouth to remove iron built up from repeated blood transfusions, as in thalassaemia. It carries a boxed warning about the kidneys, liver and gut bleeding, so regular blood tests go with it.'
  },
  brands: ['إكسجيد', 'جادينو'],
  uses: ['thalassemia', 'sickle-cell'],
  keywords: { ar: ['ديفيراسيروكس', 'اكسجيد', 'جادينو', 'خالب الحديد', 'زيادة الحديد', 'ثلاسيميا'], en: ['deferasirox', 'exjade', 'jadenu', 'iron chelator', 'iron overload'] }
});

DRUGS.push({
  id: 'deferoxamine',
  cls: 'iron-chelator',
  otc: false,
  alert: true,
  name:  { ar: 'الديفيروكسامين', en: 'Deferoxamine (Desferrioxamine)' },
  short: {
    ar: 'خالب حديد يُعطى حقناً لإخراج الحديد المتراكم من نقل الدم المتكرّر، ولعلاج التسمّم الحادّ بالحديد. يحمرّ معه البول وهذا متوقّع، ويلزمه فحص للنظر والسمع مع الاستعمال الطويل.',
    en: 'An iron chelator given by injection to remove iron built up from repeated transfusions, and to treat acute iron poisoning. It turns urine reddish, which is expected, and long use calls for eye and hearing checks.'
  },
  brands: ['ديسفيرال'],
  uses: ['thalassemia', 'sickle-cell', 'poisoning'],
  keywords: { ar: ['ديفيروكسامين', 'ديسفيرال', 'خالب الحديد', 'تسمم الحديد', 'زيادة الحديد'], en: ['deferoxamine', 'desferrioxamine', 'desferal', 'iron chelator', 'iron poisoning'] }
});

DRUGS.push({
  id: 'whole-blood',
  cls: 'blood-product',
  otc: false,
  alert: true,
  name:  { ar: 'الدم الكامل', en: 'Whole blood' },
  short: {
    ar: 'الدم كما يُسحب من المتبرّع بكل مكوّناته في كيس واحد. لم يعد يُعطى إلا في مواقف محدودة أبرزها النزف الهائل في الإصابات، حيث يعوّض الكريات وعوامل التجلّط معاً.',
    en: 'Blood as drawn from the donor, with all its parts in one bag. It is now given only in limited situations, above all massive bleeding after injury, where it replaces cells and clotting factors together.'
  },
  brands: [],
  uses: ['severe-bleeding', 'shock', 'postpartum-hemorrhage'],
  keywords: { ar: ['دم كامل', 'نقل دم', 'نزف', 'بنك الدم', 'فصيلة O'], en: ['whole blood', 'LTOWB', 'low titer group O', 'transfusion', 'massive haemorrhage'] }
});

DRUGS.push({
  id: 'red-blood-cells',
  cls: 'blood-product',
  otc: false,
  alert: true,
  name:  { ar: 'كريات الدم الحمراء', en: 'Red blood cells' },
  short: {
    ar: 'أكثر منتجات الدم نقلاً: كريات مركّزة تحمل الأكسجين، تُعطى بعد نزف كبير وفي أمراض الدم ونخاع العظم. تُطابق مع دم المريض قبل كل كيس، وأخطر حوادثها خطأ في التعريف.',
    en: 'The most transfused blood product: concentrated cells that carry oxygen, given after major bleeding and in blood and bone marrow diseases. Each bag is matched to the patient first, and its worst accidents come from identification errors.'
  },
  brands: [],
  uses: ['severe-bleeding', 'upper-gi-bleed', 'postpartum-hemorrhage', 'thalassemia', 'sickle-cell', 'leukemia'],
  keywords: { ar: ['كريات حمراء', 'نقل دم', 'كيس دم', 'فقر دم', 'هيموغلوبين'], en: ['packed red cells', 'PRBC', 'red cell transfusion', 'blood transfusion', 'anaemia'] }
});

DRUGS.push({
  id: 'platelets',
  cls: 'blood-product',
  otc: false,
  alert: true,
  name:  { ar: 'الصفائح الدموية', en: 'Platelets' },
  short: {
    ar: 'مكوّن الدم الذي يسدّ الأوعية المجروحة، يُنقل للوقاية من النزف أو لوقفه حين تنخفض الصفائح كما في سرطانات الدم والعلاج الكيميائي. يُحفظ في حرارة الغرفة فهو الأعلى خطراً للتلوّث البكتيري.',
    en: 'The blood component that plugs injured vessels, transfused to prevent or stop bleeding when platelets are low, as in blood cancers and chemotherapy. It is stored at room temperature, so it carries the highest bacterial contamination risk.'
  },
  brands: [],
  uses: ['leukemia', 'severe-bleeding', 'itp'],
  keywords: { ar: ['صفائح', 'صفيحات', 'نقل صفائح', 'نزف', 'قلة الصفائح'], en: ['platelets', 'platelet transfusion', 'thrombocytopenia', 'apheresis platelets'] }
});

DRUGS.push({
  id: 'fresh-frozen-plasma',
  cls: 'blood-product',
  otc: false,
  alert: true,
  name:  { ar: 'البلازما الطازجة المجمّدة', en: 'Fresh-frozen plasma' },
  short: {
    ar: 'الجزء السائل من الدم مجمّداً بعوامل التجلّط كلها تقريباً، يُعطى لمن ينزف وعنده نقص فيها كالنزف الهائل والتجلّط المنتشر وأمراض الكبد. لا يُعطى لتعويض السوائل وحدها.',
    en: 'The liquid part of blood, frozen with nearly all its clotting factors, given to people who are bleeding and short of them, as in massive bleeding, widespread clotting and liver disease. It is not given just to replace fluid.'
  },
  brands: [],
  uses: ['severe-bleeding', 'cirrhosis', 'snake-bite'],
  keywords: { ar: ['بلازما', 'بلازما مجمدة', 'عوامل التجلط', 'نقل دم'], en: ['FFP', 'fresh frozen plasma', 'plasma transfusion', 'coagulation factors'] }
});

DRUGS.push({
  id: 'cryoprecipitate',
  cls: 'blood-product',
  otc: false,
  alert: true,
  name:  { ar: 'الراسب القري منخفض الممرضات', en: 'Cryoprecipitate, pathogen-reduced' },
  short: {
    ar: 'مركّز صغير الحجم غنيّ بالفيبرينوجين يُستخلص من البلازما، ويُعالج بالأموتوسالين والضوء فوق البنفسجي لتعطيل الممرضات. يُعطى للنزف الناتج عن نقص الفيبرينوجين، ولا يعوّض العامل الثامن.',
    en: 'A small-volume, fibrinogen-rich concentrate made from plasma and treated with amotosalen and ultraviolet light to inactivate germs. It is given for bleeding caused by fibrinogen deficiency and is not a factor VIII replacement.'
  },
  brands: [],
  uses: ['severe-bleeding', 'ckd'],
  keywords: { ar: ['راسب قري', 'كرايو', 'فيبرينوجين', 'نزف', 'انترسبت'], en: ['cryoprecipitate', 'cryo', 'fibrinogen', 'INTERCEPT fibrinogen complex', 'pathogen reduced'] }
});

DRUGS.push({
  id: 'normal-immunoglobulin',
  cls: 'immunoglobulin',
  otc: false,
  alert: true,
  name:  { ar: 'الغلوبولين المناعي الطبيعي', en: 'Normal immunoglobulin' },
  short: {
    ar: 'أجسام مضادّة مجمّعة من بلازما آلاف المتبرّعين، تعوّض من لا يصنعها وتهدّئ المناعة في أمراض كقلّة الصفيحات المناعية وغيلان باريه وكاواساكي. يحمل تحذيراً مؤطّراً من الجلطات وأذى الكلى.',
    en: 'Antibodies pooled from the plasma of thousands of donors, replacing them in people who cannot make their own and calming immunity in diseases such as immune thrombocytopenia, Guillain-Barre and Kawasaki. It carries a boxed warning about clots and kidney harm.'
  },
  brands: ['أوكتاغام', 'بريفيجين', 'كيوفيغ', 'إنتراتكت'],
  uses: ['immunodeficiency', 'itp', 'kawasaki', 'guillain-barre', 'myasthenia-gravis', 'leukemia', 'multiple-myeloma'],
  keywords: { ar: ['غلوبولين مناعي', 'اجسام مضادة', 'تسريب مناعي', 'نقص المناعة'], en: ['IVIG', 'SCIG', 'immune globulin', 'immunoglobulin G', 'gamma globulin'] }
});

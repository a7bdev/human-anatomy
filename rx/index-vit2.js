/* ============================================================
   موسوعة الأدوية — فهرس دفعة التغذية وفقر الدم والصرع (vit2)
   rx/index-vit2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   كل بطاقة كُتبت من نشرة رسمية مفتوحة وقت الكتابة — المصادر في rx-vit2.js

   عشرة أدوية: مكمّلات وأغذية علاجية (المغذّيات الدقيقة المتعدّدة ·
   الغذاء العلاجي الجاهز) · أدوية فقر الدم (أملاح الحديد · الحديد مع
   حمض الفوليك · الهيدروكسوكوبالامين · محفّزات تكوين الكريات الحمر) ·
   مضادات الصرع (الكاربامازيبين · حمض الفالبرويك · الليفيتيراسيتام ·
   اللاموتريجين).

   ملاحظة على الفصائل: أدوية فقر الدم والأغذية العلاجية ومحفّزات تكوين
   الكريات ومضادات الصرع غير معرّفة في DRUG_CLASSES داخل drugs.js،
   وdrugs.js ممنوع تعديله في هذه الدفعة. فتُضاف أسماؤها من هنا إضافةً
   لا استبدالاً (drugs.js يُحمَّل قبل هذا الملف) حتى تُعرض بالعربية.
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* أسماء فصائل هذه الدفعة — تُضاف ولا تستبدل شيئاً موجوداً */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    antianemic:             { ar: 'أدوية فقر الدم', en: 'Antianaemia medicines' },
    'nutrition-therapeutic':{ ar: 'أغذية علاجية', en: 'Therapeutic foods' },
    esa:                    { ar: 'محفّزات تكوين الكريات الحمر', en: 'Erythropoiesis-stimulating agents' },
    antiepileptic:          { ar: 'مضادات الصرع', en: 'Antiepileptics' }
  };
  var group = {
    antianemic: 'supp',
    'nutrition-therapeutic': 'supp',
    esa: 'supp',
    antiepileptic: 'other'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in group) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = group[k]; } }
  }
})();

DRUGS.push({
  id: 'multiple-micronutrient-supplement',
  cls: 'vitamin',
  otc: true,
  alert: false,
  name:  { ar: 'مكمّل المغذّيات الدقيقة المتعدّدة', en: 'Multiple micronutrient supplement' },
  short: {
    ar: 'قرص يجمع خمسة عشر مغذّياً دقيقاً معاً — منها الحديد وحمض الفوليك واليود والزنك — وضعته الأمم المتحدة للحوامل. يقلّل انخفاض وزن المولود وصغر حجمه عن عمره مقارنةً بالحديد وحمض الفوليك وحدهما.',
    en: 'A tablet combining fifteen micronutrients — including iron, folic acid, iodine and zinc — designed by the United Nations for pregnant women. It reduces low birth weight and small-for-gestational-age births compared with iron and folic acid alone.'
  },
  brands: ['يونيمّاب', 'ماتيرنا', 'إيليفيت', 'بريجناكير'],
  uses: ['iron-anemia', 'malnutrition', 'growth-delay', 'prematurity', 'spina-bifida'],
  keywords: {
    ar: ['مكمّل الحمل', 'مغذّيات دقيقة', 'يونيماب', 'فيتامينات الحامل', 'حديد وفوليك'],
    en: ['MMS', 'UNIMMAP', 'multiple micronutrient', 'antenatal supplement', 'prenatal vitamin']
  }
});

DRUGS.push({
  id: 'ready-to-use-therapeutic-food',
  cls: 'nutrition-therapeutic',
  otc: false,
  alert: false,
  name:  { ar: 'الغذاء العلاجي الجاهز', en: 'Ready-to-use therapeutic food (RUTF)' },
  short: {
    ar: 'معجون دهني كثيف الطاقة من الفول السوداني والحليب المجفّف والسكر والزيت مع فيتامينات ومعادن. لا يُخلط بماء ولا يحتاج ثلاجة، فيُعالَج به الطفل الهزيل في بيته. علاجٌ لا وجبة، وفي قائمة الأدوية الأساسية.',
    en: 'An energy-dense lipid paste of peanut, dried milk, sugar and oil with added vitamins and minerals. It needs no water and no refrigeration, so a severely wasted child can be treated at home. It is a treatment, not a meal, and sits on the Essential Medicines List.'
  },
  brands: ['بلامبي نت', 'إي-زد آر يو تي إف', 'بلامبي ساب'],
  uses: ['malnutrition', 'growth-delay', 'unintentional-weight-loss'],
  keywords: {
    ar: ['سوء التغذية', 'الهزال', 'غذاء علاجي', 'معجون الفول السوداني', 'وذمة التغذية'],
    en: ['RUTF', 'severe acute malnutrition', 'wasting', 'plumpy nut', 'therapeutic food']
  }
});

DRUGS.push({
  id: 'ferrous-salt',
  cls: 'antianemic',
  otc: true,
  alert: true,
  name:  { ar: 'أملاح الحديد', en: 'Ferrous salt (sulfate, fumarate, gluconate)' },
  short: {
    ar: 'الحديد بصورة تُمتصّ من الأمعاء، وهو أول علاج فقر الدم بنقص الحديد وأرخصه. يسوّد البراز وهذا غير مؤذٍ. وخطره الأكبر ليس على من يأخذه بل على طفل يبتلع العلبة.',
    en: 'Iron in a form the gut can absorb, the first and cheapest treatment for iron deficiency anaemia. It blackens the stool, which is harmless. Its greatest danger is not to the person taking it but to a child who swallows the packet.'
  },
  brands: ['فيروجراد', 'فيروجلوبين', 'هيموجيت', 'فيروس سلفات'],
  uses: ['iron-anemia', 'child-iron-anemia', 'heavy-periods', 'malnutrition', 'ckd', 'crohns', 'lactose-celiac'],
  keywords: {
    ar: ['حديد', 'فقر دم', 'أنيميا', 'كبريتات الحديد', 'نقص الحديد'],
    en: ['iron', 'ferrous sulfate', 'ferrous fumarate', 'iron deficiency anaemia', 'haemoglobin']
  }
});

DRUGS.push({
  id: 'ferrous-salt-folic-acid',
  cls: 'antianemic',
  otc: true,
  alert: true,
  name:  { ar: 'الحديد مع حمض الفوليك', en: 'Ferrous salt + folic acid' },
  short: {
    ar: 'قرص يجمع ملح حديد مع حمض الفوليك، وهو المكمّل المعياري في الحمل: الحديد يقي من فقر الدم والفوليك يقي الجنين من عيوب الأنبوب العصبي. وفيه فخّ: الفوليك وحده يُجمّل صورة الدم في نقص فيتامين ب١٢ ويترك العصب يتلف.',
    en: 'A tablet combining an iron salt with folic acid, the standard supplement in pregnancy: iron guards against anaemia and folate guards the fetus against neural tube defects. It carries one trap: folate alone flatters the blood count in vitamin B12 deficiency while the nerves keep sustaining damage.'
  },
  brands: ['فيفول', 'فيروجراد فوليك', 'فيروفول', 'هيموفوليك'],
  uses: ['iron-anemia', 'spina-bifida', 'heavy-periods', 'malnutrition', 'child-iron-anemia'],
  keywords: {
    ar: ['حديد وفوليك', 'مكمّل الحمل', 'حمض الفوليك', 'فقر دم الحمل', 'الأنبوب العصبي'],
    en: ['iron folic acid', 'IFA', 'folate', 'pregnancy anaemia', 'neural tube defect']
  }
});

DRUGS.push({
  id: 'hydroxocobalamin',
  cls: 'antianemic',
  otc: false,
  alert: false,
  name:  { ar: 'الهيدروكسوكوبالامين', en: 'Hydroxocobalamin (Vitamin B12)' },
  short: {
    ar: 'فيتامين ب١٢ حقناً في العضل، يبقى في الجسم أطول من صورته الأخرى فتتباعد حقنه. يُعطى حين يكون العيب في الامتصاص لا في الطعام، وأشهر ذلك فقر الدم الوبيل — وعلاجه غالباً مدى الحياة.',
    en: 'Vitamin B12 given by injection into muscle; it stays in the body longer than its other form, so injections are spaced further apart. It is used when the fault lies in absorption rather than diet, most famously pernicious anaemia — and treatment is usually lifelong.'
  },
  brands: ['كوبالين-اتش', 'نيو-سيتامين', 'هيدروكسوكوبالامين', 'فيتامين ب١٢ حقن'],
  uses: ['b12-deficiency', 'peripheral-neuropathy', 'crohns', 'lactose-celiac', 'malnutrition'],
  keywords: {
    ar: ['ب١٢', 'فقر الدم الوبيل', 'كوبالامين', 'تنميل', 'حقن فيتامين'],
    en: ['B12', 'hydroxocobalamin', 'pernicious anaemia', 'cobalamin', 'megaloblastic']
  }
});

DRUGS.push({
  id: 'erythropoiesis-stimulating-agents',
  cls: 'esa',
  otc: false,
  alert: true,
  name:  { ar: 'محفّزات تكوين كريات الدم الحمراء', en: 'Erythropoiesis-stimulating agents (epoetin, darbepoetin)' },
  short: {
    ar: 'نسخة مصنّعة من هرمون تفرزه الكلية ليأمر النخاع بصنع الكريات الحمر، تُحقن حين تعجز الكلية المريضة عن إفرازه. هدفها تقليل نقل الدم لا تطبيع التحليل — ورفع الهيموغلوبين للمعدل الطبيعي يزيد الجلطة والسكتة والوفاة.',
    en: 'A manufactured copy of the hormone the kidney releases to order the marrow to make red cells, injected when a diseased kidney can no longer produce it. Its aim is to reduce transfusions, not to normalise the blood count — pushing haemoglobin to normal increases clots, stroke and death.'
  },
  brands: ['إبركس', 'أرانسب', 'ريكورمون', 'ميرسيرا'],
  uses: ['ckd', 'glomerular-disease', 'breast-cancer', 'lung-cancer', 'hiv'],
  keywords: {
    ar: ['إريثروبويتين', 'فقر دم الكلى', 'إبيوتين', 'داربيبويتين', 'غسيل الكلى'],
    en: ['ESA', 'epoetin alfa', 'darbepoetin', 'erythropoietin', 'renal anaemia']
  }
});

DRUGS.push({
  id: 'carbamazepine',
  cls: 'antiepileptic',
  otc: false,
  alert: true,
  name:  { ar: 'الكاربامازيبين', en: 'Carbamazepine' },
  short: {
    ar: 'مضاد صرع راسخ، وهو أيضاً الخيار الأول لألم العصب ثلاثي التوائم، ويُستعمل في نوبات الهوس. يحمل تحذيرين رسميين: تفاعل جلدي مهلك وانهيار في نخاع العظم — وأي طفح عليه يُؤخذ مأخذ الجدّ.',
    en: 'A long-established antiepileptic, also the first choice for trigeminal neuralgia and used in manic episodes. It carries two official warnings: a life-threatening skin reaction and bone marrow failure — any rash on it is taken seriously.'
  },
  brands: ['تيجريتول', 'تيجريتول سي آر', 'كاربامازيبين', 'تيريل'],
  uses: ['epilepsy', 'trigeminal-neuralgia', 'bipolar-disorder', 'postherpetic-neuralgia', 'diabetic-neuropathy', 'peripheral-neuropathy'],
  keywords: {
    ar: ['صرع', 'تشنّج', 'ألم الوجه', 'تيجريتول', 'هوس'],
    en: ['carbamazepine', 'tegretol', 'epilepsy', 'trigeminal neuralgia', 'anticonvulsant']
  }
});

DRUGS.push({
  id: 'valproic-acid',
  cls: 'antiepileptic',
  otc: false,
  alert: true,
  name:  { ar: 'حمض الفالبرويك (فالبروات الصوديوم)', en: 'Valproic acid (sodium valproate)' },
  short: {
    ar: 'مضاد صرع واسع الطيف يغطّي أنواعاً من النوبات لا يغطّيها غيره، ويُستعمل في الهوس والوقاية من الشقيقة. وعليه أثقل تحذير في فصيلته: تلف كبدي والتهاب بنكرياس، وضرر مؤكّد على الجنين خَلقاً وتعلّماً.',
    en: 'A broad-spectrum antiepileptic covering seizure types others do not, also used in mania and migraine prevention. It carries the heaviest warning in its class: liver damage and pancreatitis, and proven harm to the fetus in both malformation and learning.'
  },
  brands: ['ديباكين', 'ديباكين كرونو', 'إبيليم', 'ديباكوت'],
  uses: ['epilepsy', 'bipolar-disorder', 'migraine'],
  keywords: {
    ar: ['صرع', 'فالبروات', 'ديباكين', 'هوس', 'صداع نصفي'],
    en: ['valproate', 'depakine', 'epilim', 'divalproex', 'anticonvulsant']
  }
});

DRUGS.push({
  id: 'levetiracetam',
  cls: 'antiepileptic',
  otc: false,
  alert: true,
  name:  { ar: 'الليفيتيراسيتام', en: 'Levetiracetam' },
  short: {
    ar: 'مضاد صرع حديث صار واسع الاستعمال لأنه يكاد لا يتعارض مع أدوية أخرى ولا يحتاج قياس مستوى في الدم. أشهر ما يُشكى منه ليس الجسد بل المزاج: تهيّج وعدوانية وتبدّل سلوك، خاصة في الأطفال.',
    en: 'A newer antiepileptic that became widely used because it barely interacts with other medicines and needs no blood level monitoring. Its best-known complaint is not physical but behavioural: irritability, aggression and mood change, especially in children.'
  },
  brands: ['كيبرا', 'ليفيتيرا', 'ليفيتيراسيتام', 'ماتيفر'],
  uses: ['epilepsy'],
  keywords: {
    ar: ['صرع', 'كيبرا', 'تشنّج', 'نوبات', 'مضاد اختلاج'],
    en: ['levetiracetam', 'keppra', 'epilepsy', 'seizure', 'anticonvulsant']
  }
});

DRUGS.push({
  id: 'lamotrigine',
  cls: 'antiepileptic',
  otc: false,
  alert: true,
  name:  { ar: 'اللاموتريجين', en: 'Lamotrigine' },
  short: {
    ar: 'مضاد صرع يُستعمل أيضاً لتثبيت المزاج في الاضطراب ثنائي القطب. عليه تحذير رسمي من طفح جلدي قد يصير مهلكاً، ولذلك تُرفع كميّته ببطء شديد — والاستعجال بها هو ما يرفع الخطر.',
    en: 'An antiepileptic also used to stabilise mood in bipolar disorder. It carries an official warning about a rash that can turn life-threatening, which is why the amount is raised very slowly — hurrying it is what raises the risk.'
  },
  brands: ['لاميكتال', 'لاموتريجين', 'لاميترين'],
  uses: ['epilepsy', 'bipolar-disorder'],
  keywords: {
    ar: ['صرع', 'لاميكتال', 'ثنائي القطب', 'طفح', 'مثبّت مزاج'],
    en: ['lamotrigine', 'lamictal', 'bipolar', 'Stevens-Johnson', 'anticonvulsant']
  }
});

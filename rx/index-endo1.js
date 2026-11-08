/* ============================================================
   موسوعة الأدوية — فهرس دفعة الغدد والسكّري الأولى
   rx/index-endo1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   كُتبت من نشرات رسمية مفتوحة وقت الكتابة — الروابط في rx-endo1.js
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'gliclazide',
  cls: 'antidiabetic',
  otc: false,
  alert: true,
  name:  { ar: 'الجليكلازيد', en: 'Gliclazide' },
  short: {
    ar: 'قرص للسكّري من النوع الثاني يدفع البنكرياس إلى إفراز مزيد من الأنسولين. رخيص وفعّال، وأهمّ ما يُحسب عليه أنه يخفض السكّر سواء أكلت أم لم تأكل.',
    en: 'A tablet for type 2 diabetes that pushes the pancreas to release more insulin. Cheap and effective; its main drawback is that it lowers blood sugar whether you have eaten or not.'
  },
  brands: ['دياميكرون', 'دياميكرون إم آر', 'جليكلازيد'],
  uses: ['type2-diabetes'],
  keywords: { ar: ['سلفونيل يوريا', 'دواء سكّري', 'جليكلازيد', 'دياميكرون', 'هبوط سكّر'], en: ['sulfonylurea', 'diamicron', 'type 2 diabetes', 'hypoglycaemia'] }
});

DRUGS.push({
  id: 'empagliflozin',
  cls: 'antidiabetic',
  otc: false,
  alert: true,
  name:  { ar: 'الإمباجليفلوزين', en: 'Empagliflozin' },
  short: {
    ar: 'قرص يجعل الكلية تطرح السكّر الزائد في البول. بدأ دواءً للسكّري ثم ثبت أنه يحمي القلب والكلية، فصار يُوصف لمن لا سكّري عنده أصلاً.',
    en: 'A tablet that makes the kidney flush excess sugar into the urine. It began as a diabetes drug, then proved to protect the heart and kidney, so it is now prescribed to people without diabetes at all.'
  },
  brands: ['جارديانس', 'سينجاردي', 'تريجاردي'],
  uses: ['type2-diabetes', 'heart-failure', 'ckd'],
  keywords: { ar: ['مثبّط ناقل السكّر الكلوي', 'جارديانس', 'إمباجليفلوزين', 'قصور القلب'], en: ['SGLT2 inhibitor', 'jardiance', 'heart failure', 'chronic kidney disease'] }
});

DRUGS.push({
  id: 'semaglutide',
  cls: 'antidiabetic',
  otc: false,
  alert: true,
  name:  { ar: 'السيماجلوتايد', en: 'Semaglutide' },
  short: {
    ar: 'إبرة تحت الجلد (وقرص يُبلع) من محاكيات الإنكريتين: تضبط السكّر وتُبطئ إفراغ المعدة وتُنقص الشهية والوزن. تحمل تحذيراً رسمياً بشأن ورم الغدة الدرقية.',
    en: 'An under-the-skin injection (and a swallowed tablet) from the incretin mimetics: it controls blood sugar, slows stomach emptying and reduces appetite and weight. It carries an official warning about thyroid tumours.'
  },
  brands: ['أوزمبيك', 'ويجوفي', 'ريبيلسس'],
  uses: ['type2-diabetes', 'metabolic-syndrome', 'ckd', 'nafld', 'atherosclerosis'],
  keywords: { ar: ['محاكيات الإنكريتين', 'أوزمبيك', 'ويجوفي', 'إبرة التنحيف', 'سيماجلوتايد'], en: ['GLP-1 agonist', 'ozempic', 'wegovy', 'rybelsus', 'weight loss'] }
});

DRUGS.push({
  id: 'insulin-human-short-acting',
  cls: 'insulin',
  otc: false,
  alert: true,
  name:  { ar: 'الأنسولين البشري قصير المفعول', en: 'Insulin (human, short-acting)' },
  short: {
    ar: 'أنسولين صافٍ يُؤخذ قبل الوجبة بوقت كافٍ ليغطّي سكّرها. أقدم أنواع الأنسولين وأرخصها، وأبطأ بداية وأطول ذيلاً من المماثلات السريعة.',
    en: 'A clear insulin taken well before a meal to cover its sugar. The oldest and cheapest insulin type, slower to start and with a longer tail than the rapid analogues.'
  },
  brands: ['أكترابيد', 'هيومولين آر', 'إنسومان رابيد'],
  uses: ['type1-diabetes', 'type2-diabetes', 'gestational-diabetes', 'hyperglycemic-crisis'],
  keywords: { ar: ['أنسولين', 'أنسولين صافي', 'أكترابيد', 'أنسولين الوجبة', 'سكّري'], en: ['regular insulin', 'soluble insulin', 'actrapid', 'humulin R', 'bolus'] }
});

DRUGS.push({
  id: 'insulin-human-intermediate-acting',
  cls: 'insulin',
  otc: false,
  alert: true,
  name:  { ar: 'الأنسولين البشري متوسط المفعول', en: 'Insulin (human, intermediate-acting)' },
  short: {
    ar: 'أنسولين عكِر يُغطّي جزءاً كبيراً من اليوم، وله ذروة واضحة تجعل الهبوط الليلي أشهر ما يُخشى منه. لا يُحقن قبل رجّه حتى يتجانس.',
    en: 'A cloudy insulin covering a large part of the day, with a clear peak that makes night-time lows its best-known hazard. It must never be injected before it is rolled until evenly mixed.'
  },
  brands: ['إنسولاتارد', 'هيومولين إن', 'بروتافان', 'إنسومان بازال'],
  uses: ['type1-diabetes', 'type2-diabetes', 'gestational-diabetes'],
  keywords: { ar: ['أنسولين قاعدي', 'أنسولين عكر', 'إنسولاتارد', 'أنسولين متوسط'], en: ['NPH insulin', 'isophane', 'insulatard', 'humulin N', 'basal'] }
});

DRUGS.push({
  id: 'insulin-analogue-rapid-acting',
  cls: 'insulin',
  otc: false,
  alert: true,
  name:  { ar: 'الأنسولين المماثل سريع المفعول', en: 'Insulin (analogue, rapid-acting)' },
  short: {
    ar: 'أنسولين مهندَس ليبدأ خلال دقائق وينتهي بعد ساعات قليلة، فيُحقن مع الوجبة لا قبلها بوقت طويل. هو أنسولين مضخّات الأنسولين.',
    en: 'An insulin engineered to start within minutes and finish within a few hours, so it is injected around the meal rather than long before it. It is the insulin used in insulin pumps.'
  },
  brands: ['نوفورابيد', 'هيومالوج', 'أبيدرا', 'فياسب'],
  uses: ['type1-diabetes', 'type2-diabetes', 'gestational-diabetes', 'hyperglycemic-crisis'],
  keywords: { ar: ['أنسولين سريع', 'نوفورابيد', 'هيومالوج', 'أنسولين أسبارت', 'مضخّة أنسولين'], en: ['insulin aspart', 'lispro', 'glulisine', 'novorapid', 'humalog', 'pump'] }
});

DRUGS.push({
  id: 'insulin-analogue-long-acting',
  cls: 'insulin',
  otc: false,
  alert: true,
  name:  { ar: 'الأنسولين المماثل طويل المفعول', en: 'Insulin (analogue, long-acting)' },
  short: {
    ar: 'أنسولين قاعدي يُحقن تحت الجلد ويُطلق نفسه ببطء بلا ذروة بارزة، فيغطّي حاجة الجسم بين الوجبات وأثناء النوم.',
    en: 'A basal insulin injected under the skin, releasing itself slowly with no pronounced peak, covering the body between meals and through the night.'
  },
  brands: ['لانتوس', 'توجيو', 'تريسيبا', 'أباساجلار', 'ليفيمير'],
  uses: ['type1-diabetes', 'type2-diabetes', 'gestational-diabetes'],
  keywords: { ar: ['أنسولين قاعدي', 'لانتوس', 'تريسيبا', 'جلارجين', 'أنسولين طويل'], en: ['glargine', 'degludec', 'detemir', 'lantus', 'tresiba', 'basal insulin'] }
});

DRUGS.push({
  id: 'glucagon',
  cls: 'antidiabetic',
  otc: false,
  alert: true,
  name:  { ar: 'الجلوكاجون', en: 'Glucagon' },
  short: {
    ar: 'هرمون إسعافي يُعطى حقناً أو بخّاً في الأنف لمن غاب وعيه من هبوط السكّر ولا يستطيع البلع. يأمر الكبد أن يُطلق مخزونه من السكّر.',
    en: 'An emergency hormone given by injection or nasal spray to someone unconscious from low blood sugar who cannot swallow. It orders the liver to release its stored sugar.'
  },
  brands: ['جلوكاجين هايبوكيت', 'باكسيمي', 'جلوكاجون'],
  uses: ['hypoglycemia', 'type1-diabetes'],
  keywords: { ar: ['هبوط السكّر', 'إسعاف', 'جلوكاجون', 'جلوكاجين', 'غيبوبة سكّر'], en: ['severe hypoglycemia', 'glucagen', 'baqsimi', 'rescue', 'emergency kit'] }
});

DRUGS.push({
  id: 'diazoxide',
  cls: 'antihypoglycaemic',
  otc: false,
  alert: true,
  name:  { ar: 'الديازوكسيد', en: 'Diazoxide' },
  short: {
    ar: 'شراب أو كبسولة توقف إفراز الأنسولين فترفع السكّر — عكس أدوية السكّري تماماً. دواء نادر لحالات فرط الأنسولين التي تُهبط السكّر باستمرار، وأشهرها عند الرضّع.',
    en: 'A suspension or capsule that halts insulin release and so raises blood sugar — the exact opposite of diabetes drugs. A rare medicine for hyperinsulinism that keeps sugar low, most famously in infants.'
  },
  brands: ['بروجليسيم'],
  uses: ['hypoglycemia'],
  keywords: { ar: ['فرط الأنسولين', 'هبوط سكّر مستمر', 'ديازوكسيد', 'بروجليسيم', 'رضّع'], en: ['hyperinsulinism', 'proglycem', 'persistent hypoglycemia', 'infants'] }
});

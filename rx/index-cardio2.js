/* ============================================================
   موسوعة الأدوية — فهرس دفعة القلب الثانية (cardio2)
   rx/index-cardio2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   عشرة أدوية: أربع خلطات لضغط الدم · نترات الذبحة (اثنتان) ·
   الأميودارون · الديجوكسين · الدوبامين · الفوروسيميد.

   ملاحظة على الفصائل: النترات ومضادات اضطراب النظم والجليكوزيدات
   القلبية ورافعات الضغط والمدرّات العروية وخلطات الضغط المركّبة
   غير معرّفة في DRUG_CLASSES داخل drugs.js، وdrugs.js ممنوع تعديله
   في هذه الدفعة. فتُضاف أسماؤها من هنا إضافةً لا استبدالاً
   (drugs.js يُحمَّل قبل هذا الملف)، حتى تُعرض بالعربية وتقع في
   مجموعة «القلب والضغط والدهون» لا «أخرى».
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* أسماء فصائل هذه الدفعة — تُضاف ولا تستبدل شيئاً موجوداً */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'antihypertensive-combo': { ar: 'خلطات أدوية الضغط المركّبة', en: 'Fixed-dose antihypertensive combinations' },
    nitrate:                  { ar: 'النترات (موسّعات الأوعية)', en: 'Nitrates (vasodilators)' },
    antiarrhythmic:           { ar: 'مضادات اضطراب نظم القلب', en: 'Antiarrhythmics' },
    'cardiac-glycoside':      { ar: 'الجليكوزيدات القلبية', en: 'Cardiac glycosides' },
    vasopressor:              { ar: 'رافعات الضغط ومقوّيات القلب', en: 'Vasopressors and inotropes' },
    'diuretic-loop':          { ar: 'مدرّات البول العروية', en: 'Loop diuretics' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'heart'; } }
  }
})();

DRUGS.push({
  id: 'telmisartan-amlodipine',
  cls: 'antihypertensive-combo',
  otc: false,
  alert: false,
  name:  { ar: 'التلميسارتان مع الأملوديبين', en: 'Telmisartan + amlodipine' },
  short: {
    ar: 'قرص واحد يجمع دواءي ضغط يعملان بطريقتين مختلفتين: سارتان يمنع المادة التي تشدّ الشرايين، وحاصر كالسيوم يرخي جدارها. ممنوع في الحمل منعاً مطلقاً.',
    en: 'One tablet combining two blood-pressure medicines that work in different ways: a sartan that blocks the substance tightening the arteries, and a calcium blocker that relaxes their wall. Absolutely forbidden in pregnancy.'
  },
  brands: ['تويْنستا', 'تلميسارتان أملوديبين'],
  uses: ['hypertension'],
  keywords: { ar: ['ضغط', 'سارتان', 'حاصر كالسيوم', 'تلميسارتان', 'أملوديبين'], en: ['telmisartan', 'amlodipine', 'ARB', 'twynsta', 'hypertension'] }
});

DRUGS.push({
  id: 'telmisartan-hydrochlorothiazide',
  cls: 'antihypertensive-combo',
  otc: false,
  alert: false,
  name:  { ar: 'التلميسارتان مع الهيدروكلوروثيازيد', en: 'Telmisartan + hydrochlorothiazide' },
  short: {
    ar: 'سارتان يوسّع الشرايين مضافاً إليه مدرّ ثيازيدي يُخرج الملح والماء الزائدين. يخفض الضغط من طريقين، ويغيّر أملاح الدم فيلزم فحصها.',
    en: 'A sartan that widens the arteries plus a thiazide diuretic that removes excess salt and water. It lowers pressure by two routes and shifts the blood salts, so they must be checked.'
  },
  brands: ['ميكارديس بلس', 'تلميسارتان بلس'],
  uses: ['hypertension'],
  keywords: { ar: ['ضغط', 'سارتان', 'مدرّ', 'ثيازيد', 'تلميسارتان'], en: ['telmisartan', 'hydrochlorothiazide', 'micardis HCT', 'thiazide'] }
});

DRUGS.push({
  id: 'perindopril-amlodipine-indapamide',
  cls: 'antihypertensive-combo',
  otc: false,
  alert: false,
  name:  { ar: 'البيريندوبريل مع الأملوديبين والإنداباميد', en: 'Perindopril + amlodipine + indapamide' },
  short: {
    ar: 'ثلاثة أدوية ضغط في قرص واحد: مثبّط للإنزيم المحوّل، وحاصر كالسيوم، ومدرّ. يُعطى لمن لم ينضبط ضغطه بدوائين، وممنوع في الحمل.',
    en: 'Three blood-pressure medicines in one tablet: an ACE inhibitor, a calcium blocker and a diuretic. Given when two medicines have not controlled the pressure. Forbidden in pregnancy.'
  },
  brands: ['تريبليكسام'],
  uses: ['hypertension'],
  keywords: { ar: ['ضغط', 'بيريندوبريل', 'إنداباميد', 'أملوديبين', 'ثلاثي'], en: ['perindopril', 'indapamide', 'amlodipine', 'triplixam', 'ACE inhibitor'] }
});

DRUGS.push({
  id: 'valsartan-amlodipine-hydrochlorothiazide',
  cls: 'antihypertensive-combo',
  otc: false,
  alert: false,
  name:  { ar: 'الفالسارتان مع الأملوديبين والهيدروكلوروثيازيد', en: 'Valsartan + amlodipine + hydrochlorothiazide' },
  short: {
    ar: 'ثلاثي ضغط في حبّة: سارتان وحاصر كالسيوم ومدرّ ثيازيدي. لا يُبدأ به العلاج من أوّله، بل يأتي بعد أن يعجز ما قبله عن ضبط الضغط.',
    en: 'A three-in-one blood-pressure tablet: a sartan, a calcium blocker and a thiazide diuretic. It is not used as the first treatment, but after earlier medicines have failed to control the pressure.'
  },
  brands: ['إكسفورج إتش سي تي', 'فالسارتان أملوديبين'],
  uses: ['hypertension'],
  keywords: { ar: ['ضغط', 'فالسارتان', 'أملوديبين', 'ثيازيد', 'ثلاثي'], en: ['valsartan', 'amlodipine', 'hydrochlorothiazide', 'exforge HCT'] }
});

DRUGS.push({
  id: 'glyceryl-trinitrate',
  cls: 'nitrate',
  otc: false,
  alert: true,
  name:  { ar: 'النيتروجليسرين (ثلاثي نترات الغليسريل)', en: 'Glyceryl trinitrate (Nitroglycerin, GTN)' },
  short: {
    ar: 'بخّاخ أو قرص يوضع تحت اللسان فيوقف ألم الذبحة في دقائق، وله لصقة تقي منها. ⛔ لا يُجمع أبداً مع أدوية ضعف الانتصاب.',
    en: 'A spray or tablet placed under the tongue that stops angina pain within minutes, and a patch that prevents it. Never to be combined with erectile dysfunction medicines.'
  },
  brands: ['أنجيسيد', 'نيتروليجوال', 'نيتروديرم', 'نيتروجليسرين'],
  uses: ['angina', 'mi', 'atherosclerosis', 'anal-fissure'],
  keywords: { ar: ['ذبحة', 'ألم الصدر', 'تحت اللسان', 'نترات', 'بخاخ القلب'], en: ['nitroglycerin', 'GTN', 'sublingual', 'angina', 'nitrate'] }
});

DRUGS.push({
  id: 'isosorbide-dinitrate',
  cls: 'nitrate',
  otc: false,
  alert: true,
  name:  { ar: 'الإيزوسوربيد ثنائي النترات', en: 'Isosorbide dinitrate' },
  short: {
    ar: 'نترات طويلة الأثر تُؤخذ بانتظام لتقليل نوبات الذبحة قبل وقوعها، لا لإيقاف نوبة بدأت. ⛔ ممنوعة مع أدوية ضعف الانتصاب.',
    en: 'A longer-acting nitrate taken regularly to reduce angina attacks before they happen, not to stop an attack that has begun. Forbidden with erectile dysfunction medicines.'
  },
  brands: ['إيزوردل', 'إيزوكيت', 'أنجيبيد'],
  uses: ['angina', 'atherosclerosis'],
  keywords: { ar: ['ذبحة', 'نترات', 'وقاية', 'إيزوسوربيد'], en: ['isosorbide dinitrate', 'ISDN', 'isordil', 'angina prophylaxis'] }
});

DRUGS.push({
  id: 'amiodarone',
  cls: 'antiarrhythmic',
  otc: false,
  alert: true,
  name:  { ar: 'الأميودارون', en: 'Amiodarone' },
  short: {
    ar: 'أقوى ضابط لنظم القلب وأثقلها سُمّية: يؤذي الرئة والكبد والدرقية والعين، ويبقى في الجسم أسابيع بعد إيقافه. يلزمه فحص دوري بلا انقطاع.',
    en: 'The most powerful rhythm-controlling medicine and the most toxic: it can harm the lungs, liver, thyroid and eyes, and stays in the body for weeks after stopping. It needs uninterrupted regular monitoring.'
  },
  brands: ['كوردارون', 'أميودارون'],
  uses: ['afib', 'svt'],
  keywords: { ar: ['نظم القلب', 'رجفان', 'خفقان', 'أميودارون'], en: ['amiodarone', 'cordarone', 'antiarrhythmic', 'atrial fibrillation'] }
});

DRUGS.push({
  id: 'digoxin',
  cls: 'cardiac-glycoside',
  otc: false,
  alert: true,
  name:  { ar: 'الديجوكسين', en: 'Digoxin' },
  short: {
    ar: 'أقدم أدوية القلب: يبطّئ النبض ويقوّي انقباض العضلة. هامش أمانه ضيّق جداً، فالزيادة اليسيرة تسمّم — وأول علاماتها الغثيان واصفرار الرؤية.',
    en: 'The oldest of the heart medicines: it slows the pulse and strengthens the muscle contraction. Its safety margin is very narrow, so a small excess poisons — the first signs being nausea and yellow-tinged vision.'
  },
  brands: ['لانوكسين', 'ديجوكسين'],
  uses: ['afib', 'heart-failure'],
  keywords: { ar: ['هبوط القلب', 'رجفان أذيني', 'نبض', 'ديجوكسين'], en: ['digoxin', 'lanoxin', 'cardiac glycoside', 'heart failure'] }
});

DRUGS.push({
  id: 'dopamine',
  cls: 'vasopressor',
  otc: false,
  alert: true,
  name:  { ar: 'الدوبامين', en: 'Dopamine' },
  short: {
    ar: 'دواء مستشفى يُحقن بالوريد بالتنقيط لرفع الضغط الهابط في الصدمة وتقوية ضخّ القلب. لا يُؤخذ بالفم ولا يُستعمل خارج المراقبة الحثيثة.',
    en: 'A hospital medicine given by intravenous drip to raise a collapsed blood pressure in shock and strengthen the heart’s pumping. It is not taken by mouth and is never used outside intensive monitoring.'
  },
  brands: ['دوبامين'],
  uses: ['shock', 'heart-failure', 'sepsis', 'bradycardia-block'],
  keywords: { ar: ['صدمة', 'هبوط ضغط', 'عناية مركزة', 'دوبامين'], en: ['dopamine', 'vasopressor', 'inotrope', 'shock', 'ICU'] }
});

DRUGS.push({
  id: 'furosemide',
  cls: 'diuretic-loop',
  otc: false,
  alert: true,
  name:  { ar: 'الفوروسيميد', en: 'Furosemide' },
  short: {
    ar: 'أقوى المدرّات وأسرعها: يسحب الماء المحتبس في الساقين والرئتين فيخفّ ضيق النفس. وقوّته نفسها خطره — جفاف ونقص أملاح.',
    en: 'The strongest and fastest of the diuretics: it draws off the water trapped in the legs and lungs so breathlessness eases. Its very strength is its danger — dehydration and salt depletion.'
  },
  brands: ['لازكس', 'فوروسيميد', 'لاسيليكس'],
  uses: ['heart-failure', 'ckd', 'cirrhosis', 'ascites-sbp', 'hypertension'],
  keywords: { ar: ['مدرّ', 'حبوب الماء', 'تورّم', 'احتباس سوائل', 'فوروسيميد'], en: ['furosemide', 'lasix', 'loop diuretic', 'oedema', 'water tablet'] }
});

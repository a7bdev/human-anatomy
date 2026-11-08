/* ============================================================
   موسوعة الأدوية — فهرس دفعة القلب والضغط الأولى (cardio1)
   rx/index-cardio1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   الأدوية العشرة كلها من قائمة منظمة الصحة للأدوية الأساسية،
   الطبعة الرابعة والعشرين (rx/EML-2025.json، وسم cardio1).

   ملاحظة على الفصائل: فصائل الضغط (حاصرات مستقبلات الأنجيوتنسين ·
   حاصرات بيتا · المدرّات الثيازيدية · الخافضات المركزية · موسّعات
   الأوعية · الأقراص المركّبة) غير معرّفة في DRUG_CLASSES داخل
   drugs.js، وdrugs.js ممنوع تعديله في هذه الدفعة. فتُضاف أسماؤها
   من هنا إضافةً لا استبدالاً (drugs.js يُحمَّل قبل هذا الملف)،
   حتى تُعرض بالعربية وتقع في مجموعة «القلب والضغط» لا «أخرى».
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* أسماء فصائل هذه الدفعة — تُضاف ولا تستبدل شيئاً موجوداً */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    arb:                      { ar: 'حاصرات مستقبلات الأنجيوتنسين', en: 'Angiotensin receptor blockers' },
    'beta-blocker':           { ar: 'حاصرات بيتا', en: 'Beta blockers' },
    'diuretic-thiazide':      { ar: 'مدرّات البول الثيازيدية', en: 'Thiazide diuretics' },
    'antihypertensive-central':{ ar: 'خافضات الضغط المركزية', en: 'Centrally acting antihypertensives' },
    vasodilator:              { ar: 'موسّعات الأوعية', en: 'Vasodilators' },
    'antihypertensive-combo': { ar: 'أقراص الضغط المركّبة', en: 'Fixed-dose antihypertensive combinations' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'heart'; } }
  }
})();

DRUGS.push({
  id: 'losartan',
  cls: 'arb',
  otc: false,
  alert: true,
  name:  { ar: 'اللوسارتان', en: 'Losartan' },
  short: {
    ar: 'قرص يخفض الضغط بتوسيع الشرايين ويحمي كلية مريض السكّري، وهو بديل مثبّطات الإنزيم المحوّل لمن أتعبته الكحّة الجافة. ممنوع في الحمل منعاً قاطعاً.',
    en: 'A tablet that lowers blood pressure by widening the arteries and protects the kidney in diabetes, and the alternative to ACE inhibitors for anyone worn down by their dry cough. Absolutely forbidden in pregnancy.'
  },
  brands: ['كوزار', 'أنجيزار', 'لوزار', 'لوساكور'],
  uses: ['hypertension', 'heart-failure', 'ckd', 'type2-diabetes'],
  keywords: { ar: ['ضغط', 'سارتان', 'كوزار', 'لوسارتان', 'حاصر مستقبلات الأنجيوتنسين'], en: ['ARB', 'cozaar', 'angiotensin receptor blocker', 'blood pressure'] }
});

DRUGS.push({
  id: 'bisoprolol',
  cls: 'beta-blocker',
  otc: false,
  alert: true,
  name:  { ar: 'البيسوبرولول', en: 'Bisoprolol' },
  short: {
    ar: 'حاصر بيتا يبطّئ النبض ويخفّف حِمل القلب، فيُستعمل في الضغط والذبحة وقصور القلب. لا يُوقف فجأة أبداً، ولا يصلح لمن عنده ربو.',
    en: 'A beta blocker that slows the pulse and lightens the heart’s workload, used in blood pressure, angina and heart failure. It is never stopped suddenly, and is not suitable for anyone with asthma.'
  },
  brands: ['كونكور', 'بيسوبلوك', 'بيسوكارد', 'كونكور كور'],
  uses: ['hypertension', 'angina', 'heart-failure'],
  keywords: { ar: ['ضغط', 'حاصر بيتا', 'كونكور', 'بيسوبرولول', 'نبض'], en: ['beta blocker', 'concor', 'bisoprolol fumarate', 'heart rate'] }
});

DRUGS.push({
  id: 'verapamil',
  cls: 'calcium-blocker',
  otc: false,
  alert: true,
  name:  { ar: 'الفيراباميل', en: 'Verapamil' },
  short: {
    ar: 'حاصر كالسيوم من النوع الذي يعمل على القلب نفسه لا على الأوعية وحدها، فيبطّئ التوصيل ويضبط الخفقان السريع. أشهر أثره الجانبي الإمساك، وأخطر ما فيه جمعه مع حاصر بيتا.',
    en: 'A calcium channel blocker of the kind that acts on the heart itself, not on the vessels alone, slowing conduction and controlling a racing pulse. Its best known side effect is constipation, and its greatest danger is being combined with a beta blocker.'
  },
  brands: ['إيزوبتين', 'إيزوبتين ريتارد', 'فيراباميل'],
  uses: ['hypertension', 'angina', 'svt', 'afib', 'cluster-headache'],
  keywords: { ar: ['ضغط', 'خفقان', 'إيزوبتين', 'فيراباميل', 'حاصر كالسيوم'], en: ['verapamil', 'isoptin', 'calcium channel blocker', 'SVT'] }
});

DRUGS.push({
  id: 'hydrochlorothiazide',
  cls: 'diuretic-thiazide',
  otc: false,
  alert: true,
  name:  { ar: 'الهيدروكلوروثيازيد', en: 'Hydrochlorothiazide' },
  short: {
    ar: 'مدرّ بول ثيازيدي: يدفع الكلية إلى طرح الملح والماء فينزل الضغط ويزول الاحتباس. خطره ليس في البول بل في أملاح الدم التي يأخذها معه.',
    en: 'A thiazide diuretic: it pushes the kidney to shed salt and water, so pressure falls and fluid retention clears. Its danger is not in the urine but in the blood salts it carries out with it.'
  },
  brands: ['إيزيدركس', 'هيدروكلوروثيازيد', 'كو-ديوفان', 'هيدروسالوريتيك'],
  uses: ['hypertension', 'heart-failure', 'cirrhosis', 'kidney-stones', 'diabetes-insipidus'],
  keywords: { ar: ['مدرّ بول', 'ضغط', 'ثيازيد', 'احتباس سوائل', 'هيدروكلوروثيازيد'], en: ['thiazide', 'diuretic', 'water pill', 'HCTZ', 'oedema'] }
});

DRUGS.push({
  id: 'methyldopa',
  cls: 'antihypertensive-central',
  otc: false,
  alert: false,
  name:  { ar: 'الميثيل دوبا', en: 'Methyldopa' },
  short: {
    ar: 'خافض ضغط قديم يعمل من داخل الدماغ، بقي في الاستعمال لأن سجلّه في الحمل هو الأطول والأوثق. ثمنه نعاس في أول أيامه، ومتابعة للكبد والدم.',
    en: 'An old blood pressure medicine that works from inside the brain, still in use because its record in pregnancy is the longest and most trusted. Its price is drowsiness in the first days, and monitoring of the liver and blood.'
  },
  brands: ['ألدوميت', 'دوبيجيت', 'ميثيل دوبا'],
  uses: ['hypertension', 'preeclampsia'],
  keywords: { ar: ['ضغط', 'حمل', 'ألدوميت', 'ميثيل دوبا', 'ضغط الحمل'], en: ['methyldopa', 'aldomet', 'pregnancy hypertension', 'blood pressure'] }
});

DRUGS.push({
  id: 'hydralazine',
  cls: 'vasodilator',
  otc: false,
  alert: true,
  name:  { ar: 'الهيدرالازين', en: 'Hydralazine' },
  short: {
    ar: 'موسّع شرياني مباشر: يرخي عضلة جدار الشريان فينزل الضغط سريعاً، ويُستعمل حقناً في ارتفاع الضغط الحادّ وفي تسمّم الحمل. يسرّع النبض ويحبس السوائل، فيُرافَق عادةً بدواء آخر.',
    en: 'A direct arterial dilator: it relaxes the muscle of the artery wall so pressure falls quickly, and it is given by injection in acute severe hypertension and in pregnancy. It speeds the pulse and holds fluid, so it is usually paired with another medicine.'
  },
  brands: ['أبريسولين', 'هيدرالازين'],
  uses: ['hypertension', 'preeclampsia', 'heart-failure'],
  keywords: { ar: ['ضغط', 'موسّع أوعية', 'أبريسولين', 'هيدرالازين', 'تسمّم الحمل'], en: ['hydralazine', 'apresoline', 'vasodilator', 'hypertensive emergency'] }
});

DRUGS.push({
  id: 'nifedipine',
  cls: 'calcium-blocker',
  otc: false,
  alert: true,
  name:  { ar: 'النيفيديبين', en: 'Nifedipine' },
  short: {
    ar: 'حاصر كالسيوم يعمل على الأوعية لا على نبض القلب: يوسّع الشرايين فينزل الضغط وتهدأ الذبحة، ويُستعمل كذلك في ظاهرة رينو وفي ضغط الحمل. أقراصه الممتدّة تُبلع كاملة والجريب فروت ممنوع معه.',
    en: 'A calcium channel blocker that acts on the vessels rather than the heart’s rhythm: it widens the arteries so pressure falls and angina settles, and it is also used in Raynaud’s and in hypertension of pregnancy. Its extended-release tablets are swallowed whole and grapefruit is forbidden with it.'
  },
  brands: ['أدالات', 'أدالات ريتارد', 'إبيلات', 'نيفيديبين'],
  uses: ['hypertension', 'angina', 'raynaud', 'preeclampsia', 'preterm-labor'],
  keywords: { ar: ['ضغط', 'أدالات', 'نيفيديبين', 'رينو', 'حاصر كالسيوم'], en: ['nifedipine', 'adalat', 'calcium channel blocker', 'raynaud'] }
});

DRUGS.push({
  id: 'sodium-nitroprusside',
  cls: 'vasodilator',
  otc: false,
  alert: true,
  name:  { ar: 'نتروبروسيد الصوديوم', en: 'Sodium nitroprusside' },
  short: {
    ar: 'دواء وريدي لا يُعطى إلا في العناية المركّزة أو غرفة العمليات بمراقبة ضغط متّصلة: ينزل الضغط في دقيقتين ويزول أثره في دقائق بعد إيقافه. يحرّر أيونات السيانيد، فجرعته ومدّته قرار طبيب لا خيار مريض.',
    en: 'An intravenous medicine given only in intensive care or the operating theatre with continuous pressure monitoring: it drops the pressure within two minutes and its effect fades within minutes of stopping. It releases cyanide ions, so its amount and duration are a doctor’s decision, never a patient’s choice.'
  },
  brands: ['نيبرايد', 'نيتروبريس'],
  uses: ['hypertension', 'heart-failure', 'shock', 'valve-disease'],
  keywords: { ar: ['ضغط حادّ', 'وريدي', 'عناية مركّزة', 'سيانيد', 'نتروبروسيد'], en: ['nitroprusside', 'nipride', 'hypertensive crisis', 'cyanide', 'ICU'] }
});

DRUGS.push({
  id: 'lisinopril-amlodipine',
  cls: 'antihypertensive-combo',
  otc: false,
  alert: true,
  name:  { ar: 'الليزينوبريل مع الأملوديبين', en: 'Lisinopril + amlodipine' },
  short: {
    ar: 'قرص واحد يحمل طريقين مختلفين لخفض الضغط: مثبّط الإنزيم المحوّل وحاصر الكالسيوم. غرضه تقليل عدد الحبوب لمن ضبط ضغطه عليهما معاً. ممنوع في الحمل.',
    en: 'One tablet carrying two different routes to lower pressure: an ACE inhibitor and a calcium channel blocker. Its purpose is to cut the number of pills for someone already controlled on both. Forbidden in pregnancy.'
  },
  brands: ['ليزونورم', 'أملوديبين مع ليزينوبريل'],
  uses: ['hypertension'],
  keywords: { ar: ['ضغط', 'قرص مركّب', 'ليزونورم', 'ليزينوبريل', 'أملوديبين'], en: ['lisonorm', 'fixed dose combination', 'lisinopril', 'amlodipine'] }
});

DRUGS.push({
  id: 'lisinopril-hydrochlorothiazide',
  cls: 'antihypertensive-combo',
  otc: false,
  alert: true,
  name:  { ar: 'الليزينوبريل مع الهيدروكلوروثيازيد', en: 'Lisinopril + hydrochlorothiazide' },
  short: {
    ar: 'قرص يجمع مثبّط الإنزيم المحوّل مع مدرّ ثيازيدي، وكلٌّ منهما يسدّ ثغرة الآخر: المدرّ يطرح الملح، والمثبّط يمنع ردّ الجسم على هذا الطرح ويحفظ البوتاسيوم. ممنوع في الحمل.',
    en: 'A tablet joining an ACE inhibitor with a thiazide diuretic, each closing the other’s gap: the diuretic sheds salt, and the inhibitor blocks the body’s answer to that loss while holding on to potassium. Forbidden in pregnancy.'
  },
  brands: ['زيستوريتيك', 'برينزيد', 'ليزينوبريل مع هيدروكلوروثيازيد'],
  uses: ['hypertension'],
  keywords: { ar: ['ضغط', 'قرص مركّب', 'زيستوريتيك', 'مدرّ بول', 'ليزينوبريل'], en: ['zestoretic', 'prinzide', 'fixed dose combination', 'thiazide'] }
});

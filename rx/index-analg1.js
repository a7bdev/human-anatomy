/* ============================================================
   موسوعة الأدوية — فهرس دفعة المسكّنات والأفيونات وأدوية الشقيقة
   rx/index-analg1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'acetylsalicylic-acid',
  cls: 'nsaid',
  otc: true,
  alert: true,
  name:  { ar: 'الأسبرين (حمض أستيل ساليسيليك)', en: 'Aspirin (Acetylsalicylic acid)' },
  short: {
    ar: 'المادة كاملةً لا الجرعة الوقائية وحدها: يخفض الحرارة ويسكّن الألم ويُنقص الالتهاب ويمنع تكدّس الصفيحات. وممنوع على الأطفال والمراهقين لخطر متلازمة راي.',
    en: 'The whole substance, not just the preventive dose: it lowers fever, relieves pain, reduces inflammation and stops platelets clumping. Barred in children and teenagers because of Reye syndrome.'
  },
  brands: ['أسبرين', 'ديسبرين', 'أسبيجيك', 'أسبروكسال'],
  uses: ['tension-headache', 'rheumatic-fever', 'kawasaki', 'mi', 'stroke', 'angina'],
  keywords: { ar: ['أسبرين', 'ساليسيلات', 'مسكّن', 'مضاد التهاب', 'مانع تجلّط'], en: ['aspirin', 'ASA', 'salicylate', 'NSAID', 'antiplatelet'] }
});

DRUGS.push({
  id: 'codeine',
  cls: 'analgesic',
  otc: false,
  alert: true,
  name:  { ar: 'الكودايين', en: 'Codeine' },
  short: {
    ar: 'مسكّن أفيوني متوسّط القوّة، ومضاد للسعال. يحوّله الكبد إلى مورفين بسرعة تختلف من إنسان لآخر، وعلى هذا الاختلاف يقوم أخطر ما فيه.',
    en: 'A moderate-strength opioid painkiller and cough suppressant. The liver turns it into morphine at a speed that differs from person to person, and its greatest danger rests on that difference.'
  },
  brands: ['سولبادين', 'بانادين', 'كودافين'],
  uses: ['fractures', 'chronic-cough', 'chronic-diarrhea'],
  keywords: { ar: ['كودايين', 'أفيوني', 'مسكّن قوي', 'مضاد سعال'], en: ['codeine', 'opioid', 'antitussive', 'analgesic'] }
});

DRUGS.push({
  id: 'morphine',
  cls: 'analgesic',
  otc: false,
  alert: true,
  name:  { ar: 'المورفين', en: 'Morphine' },
  short: {
    ar: 'المسكّن الأفيوني المرجعي لألم شديد: بعد العمليات والإصابات، وفي ألم السرطان والرعاية التلطيفية. يُبطّئ التنفّس عند الزيادة، وله ترياق يعمل بسرعة.',
    en: 'The reference opioid for severe pain: after operations and injuries, and in cancer pain and palliative care. In excess it slows breathing, and it has a fast-acting antidote.'
  },
  brands: ['إم إس تي كونتينوس', 'أورامورف', 'سيفريدول'],
  uses: ['bone-cancer', 'pancreatic-cancer', 'lung-cancer', 'open-fracture'],
  keywords: { ar: ['مورفين', 'أفيوني', 'ألم شديد', 'ألم السرطان', 'رعاية تلطيفية'], en: ['morphine', 'opioid', 'severe pain', 'palliative'] }
});

DRUGS.push({
  id: 'fentanyl',
  cls: 'analgesic',
  otc: false,
  alert: true,
  name:  { ar: 'الفنتانيل', en: 'Fentanyl' },
  short: {
    ar: 'أفيوني شديد القوّة، أشهر أشكاله لصقة الجلد. الحرارة تُخرج منه أكثر ممّا ينبغي، ولصقة واحدة مستعملة قد تقتل طفلاً التقطها.',
    en: 'A very strong opioid, best known as a skin patch. Heat drives out more of it than intended, and a single used patch picked up by a child can kill.'
  },
  brands: ['دورجيسيك', 'ماتريفن', 'أكتيك'],
  uses: ['bone-cancer', 'pancreatic-cancer', 'chronic-pain-syndrome'],
  keywords: { ar: ['فنتانيل', 'لصقة الألم', 'أفيوني', 'ألم السرطان'], en: ['fentanyl', 'patch', 'transdermal', 'opioid'] }
});

DRUGS.push({
  id: 'methadone',
  cls: 'analgesic',
  otc: false,
  alert: true,
  name:  { ar: 'الميثادون', en: 'Methadone' },
  short: {
    ar: 'أفيوني طويل الأثر يُستعمل أساساً لعلاج الاعتماد على الهيروين والأفيونات، ولألم شديد أحياناً. يؤثّر في كهرباء القلب، ويُصرف غالباً تحت إشراف.',
    en: 'A long-acting opioid used mainly to treat heroin and opioid dependence, and sometimes for severe pain. It affects the heart’s electrical rhythm and is usually dispensed under supervision.'
  },
  brands: ['فيسيبتون', 'ميثادوز'],
  uses: ['substance-addiction'],
  keywords: { ar: ['ميثادون', 'علاج الإدمان', 'أفيوني', 'بديل الهيروين'], en: ['methadone', 'opioid substitution', 'dependence', 'detox'] }
});

DRUGS.push({
  id: 'sumatriptan',
  cls: 'triptan',
  otc: false,
  alert: true,
  name:  { ar: 'السوماتريبتان', en: 'Sumatriptan' },
  short: {
    ar: 'ليس مسكّناً بل دواء يوقف نوبة الشقيقة أو الصداع العنقودي بعد أن تبدأ. يضيّق الأوعية، ولهذا يُمنع على من في قلبه أو شرايينه مرض.',
    en: 'Not a painkiller but a medicine that stops a migraine or cluster headache attack once it has begun. It narrows blood vessels, which is why it is barred in heart and artery disease.'
  },
  brands: ['إميجران', 'ميغراتان', 'سوماتريبتان'],
  uses: ['migraine', 'cluster-headache'],
  keywords: { ar: ['سوماتريبتان', 'تريبتان', 'شقيقة', 'صداع نصفي', 'صداع عنقودي'], en: ['sumatriptan', 'triptan', 'migraine', 'cluster headache'] }
});

DRUGS.push({
  id: 'propranolol',
  cls: 'beta-blocker',
  otc: false,
  alert: true,
  name:  { ar: 'البروبرانولول', en: 'Propranolol' },
  short: {
    ar: 'حاصر بيتا: يُبطّئ القلب ويخفّف حِمله، فيُستعمل للضغط والذبحة والخفقان والرعاش والوقاية من الشقيقة وأعراض فرط الدرقية. لا يُوقف فجأة أبداً.',
    en: 'A beta blocker: it slows the heart and eases its workload, so it is used for blood pressure, angina, palpitations, tremor, migraine prevention and the symptoms of an overactive thyroid. It is never stopped suddenly.'
  },
  brands: ['إندرال', 'بروبرانولول'],
  uses: ['hypertension', 'angina', 'mi', 'afib', 'svt', 'migraine', 'essential-tremor', 'hyperthyroidism', 'gad'],
  keywords: { ar: ['بروبرانولول', 'حاصر بيتا', 'إندرال', 'خفقان', 'رعاش'], en: ['propranolol', 'beta blocker', 'inderal', 'tremor', 'palpitations'] }
});

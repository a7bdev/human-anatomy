/* ============================================================
   موسوعة الأدوية — فهرس دفعة اللقاحات الثالثة (vacc3)
   rx/index-vacc3.js   (يحمّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود،
   ولا جداول تطعيم: موعد كل جرعة يحدّده برنامج التطعيم والطبيب.

   ملاحظة على الفصائل: فصيلة «اللقاحات» غير معرّفة في DRUG_CLASSES
   داخل drugs.js، وdrugs.js ممنوع تعديله في هذه الدفعة. فتضاف من هنا
   إضافةً لا استبدالاً (إن سبقتنا دفعة لقاحات أخرى بتعريفها بقي
   تعريفها كما هو). واختبار التوبركولين يأخذ الفصيلة الموجودة
   'diagnostic-agent' لأنه مادة تشخيصية لا لقاح.
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* اسم فصيلة هذه الدفعة — يضاف ولا يستبدل شيئاً موجوداً */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    vaccine: { ar: 'اللقاحات', en: 'Vaccines' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'infection'; } }
  }
})();

DRUGS.push({
  id: 'rabies-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح السعار (داء الكلب)', en: 'Rabies vaccine' },
  short: {
    ar: 'لقاح معطّل يقي من السعار قبل التعرّض لمن يعمل مع الحيوانات أو يسافر، ويعطى بعد العضّة أو الخدش قبل ظهور أي عرض. السعار متى ظهرت أعراضه قاتل تقريباً.',
    en: 'An inactivated vaccine that protects against rabies before exposure for animal workers and travellers, and is given after a bite or scratch before any symptom appears. Once symptoms begin, rabies is almost always fatal.'
  },
  brands: ['فيروراب', 'رابيبور', 'إيموفاكس رابيز'],
  uses: ['rabies'],
  keywords: { ar: ['داء الكلب', 'سعار', 'عضة كلب', 'عضة حيوان', 'لقاح'], en: ['rabies', 'dog bite', 'animal bite', 'PEP', 'PrEP', 'vaccine'] }
});

DRUGS.push({
  id: 'respiratory-syncytial-virus-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح الفيروس المخلوي التنفسي', en: 'Respiratory syncytial virus (RSV) vaccine' },
  short: {
    ar: 'يقي كبار السن من الالتهاب الرئوي الذي يسبّبه الفيروس المخلوي، وتأخذه الحامل في أواخر حملها لتحمي مولودها من التهاب القصيبات في أشهره الأولى.',
    en: 'It protects older adults from RSV pneumonia, and a pregnant woman takes it late in pregnancy to protect her newborn from bronchiolitis in the first months of life.'
  },
  brands: ['أبريسفو', 'أريكسفي'],
  uses: ['bronchiolitis', 'pneumonia'],
  keywords: { ar: ['الفيروس المخلوي', 'آر إس في', 'التهاب القصيبات', 'لقاح الحامل', 'لقاح كبار السن'], en: ['RSV', 'respiratory syncytial virus', 'bronchiolitis', 'maternal vaccine', 'vaccine'] }
});

DRUGS.push({
  id: 'rotavirus-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح الفيروس العجلي (الروتا)', en: 'Rotavirus vaccine' },
  short: {
    ar: 'قطرات حيّة مضعّفة في فم الرضيع تقيه الإسهال والقيء الشديدين والجفاف الذي يسبّبه الفيروس العجلي. أثره النادر المهمّ انغلاف الأمعاء في الأسبوع الأول.',
    en: 'Live weakened drops given into a baby\'s mouth to prevent the severe diarrhoea, vomiting and dehydration caused by rotavirus. Its rare important risk is intussusception in the first week.'
  },
  brands: ['روتاريكس', 'روتاتيك'],
  uses: ['dehydration'],
  keywords: { ar: ['روتا', 'فيروس عجلي', 'إسهال الرضع', 'نزلة معوية', 'لقاح فموي'], en: ['rotavirus', 'Rotarix', 'RotaTeq', 'infant diarrhoea', 'oral vaccine'] }
});

DRUGS.push({
  id: 'rubella-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح الحصبة الألمانية', en: 'Rubella vaccine' },
  short: {
    ar: 'لقاح حيّ مضعّف يعطى غالباً ضمن اللقاح الثلاثي مع الحصبة والنكاف. غايته الكبرى حماية الأجنّة من تشوّهات الحصبة الألمانية الخلقية، ولهذا يمنع في الحمل.',
    en: 'A live weakened vaccine usually given within the combined measles, mumps and rubella vaccine. Its main purpose is to protect unborn babies from congenital rubella defects, which is why it is not given in pregnancy.'
  },
  brands: ['بريوريكس', 'إم إم آر تو', 'بريوريكس تترا'],
  uses: ['rubella', 'measles', 'mumps'],
  keywords: { ar: ['حصبة ألمانية', 'اللقاح الثلاثي', 'إم إم آر', 'الحصبة والنكاف', 'لقاح'], en: ['rubella', 'MMR', 'German measles', 'congenital rubella', 'vaccine'] }
});

DRUGS.push({
  id: 'tetanus-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح الكزاز (التيتانوس)', en: 'Tetanus vaccine (tetanus toxoid)' },
  short: {
    ar: 'ذيفان كزاز معطّل يعطى في الطفولة ثم جرعات معزّزة، وبعد الجروح العميقة أو الملوّثة حين يطول الزمن على آخر جرعة. يأتي غالباً مع الخناق أو السعال الديكي.',
    en: 'An inactivated tetanus toxin given in childhood and then as boosters, and after deep or dirty wounds when the last dose was long ago. It usually comes combined with diphtheria or whooping cough.'
  },
  brands: ['بوستريكس', 'أداسيل', 'تيتافاكس'],
  uses: ['tetanus', 'burns', 'pertussis'],
  keywords: { ar: ['كزاز', 'تيتانوس', 'إبرة الجروح', 'لقاح ثنائي', 'لقاح ثلاثي للكبار'], en: ['tetanus', 'Td', 'Tdap', 'toxoid', 'wound', 'booster'] }
});

DRUGS.push({
  id: 'tick-borne-encephalitis-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح التهاب الدماغ المنقول بالقراد', en: 'Tick-borne encephalitis vaccine' },
  short: {
    ar: 'لقاح معطّل للمسافر إلى مناطق من أوروبا وآسيا ينتشر فيها المرض، إن كان سيقضي وقتاً طويلاً في الغابات والأعشاب. لا يغني عن الوقاية من لدغ القراد.',
    en: 'An inactivated vaccine for travellers to parts of Europe and Asia where the disease occurs, if they will spend long periods in forests and grassland. It does not replace protection against tick bites.'
  },
  brands: ['إف إس إم إي-إميون', 'تيكوفاك', 'إنسيبور'],
  uses: ['meningitis'],
  keywords: { ar: ['قراد', 'التهاب الدماغ', 'لقاح السفر', 'أوروبا'], en: ['TBE', 'tick-borne encephalitis', 'Ticovac', 'FSME', 'travel vaccine'] }
});

DRUGS.push({
  id: 'typhoid-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح التيفوئيد', en: 'Typhoid vaccine' },
  short: {
    ar: 'لقاح للمسافر إلى مناطق ينتشر فيها التيفوئيد، بنوعين: حقنة معطّلة وكبسولات فموية حيّة تتعارض مع المضادات الحيوية. لا يحمي حماية كاملة فيبقى الحذر في الطعام والماء.',
    en: 'A vaccine for travellers to areas where typhoid is common, in two forms: an inactivated injection and live oral capsules that clash with antibiotics. Protection is not complete, so care with food and water remains essential.'
  },
  brands: ['تايفيم في آي', 'تايفيريكس', 'فيفوتيف'],
  uses: ['typhoid'],
  keywords: { ar: ['تيفوئيد', 'حمى تيفية', 'لقاح السفر', 'سالمونيلا'], en: ['typhoid', 'Typhim Vi', 'Vivotif', 'Ty21a', 'travel vaccine'] }
});

DRUGS.push({
  id: 'varicella-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح الجدري المائي (جدري الماء)', en: 'Varicella (chickenpox) vaccine' },
  short: {
    ar: 'لقاح حيّ مضعّف يقي من جدري الماء ومضاعفاته. يمنع في الحمل وضعف المناعة، ويتجنّب الأسبرين بعده مدّة، وقد ينتقل فيروسه نادراً من طفح ما بعد اللقاح.',
    en: 'A live weakened vaccine that prevents chickenpox and its complications. It is not given in pregnancy or weakened immunity, aspirin is avoided for a period afterwards, and its virus can rarely spread from a post-vaccine rash.'
  },
  brands: ['فاريلريكس', 'فاريفاكس'],
  uses: ['chickenpox-shingles'],
  keywords: { ar: ['جدري الماء', 'جديري', 'حماق', 'لقاح'], en: ['varicella', 'chickenpox', 'Varivax', 'Varilrix', 'vaccine'] }
});

DRUGS.push({
  id: 'yellow-fever-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح الحمّى الصفراء', en: 'Yellow fever vaccine' },
  short: {
    ar: 'لقاح حيّ مضعّف للمسافر إلى مناطق من أفريقيا وأمريكا الجنوبية، ويمنح الشهادة الدولية للتطعيم. مضاعفاته النادرة أخطر عند من تجاوز الستين ومع ضعف المناعة والرضاعة.',
    en: 'A live weakened vaccine for travellers to parts of Africa and South America, giving the international certificate of vaccination. Its rare complications are more dangerous over sixty, with weakened immunity, and in breastfeeding.'
  },
  brands: ['ستاماريل'],
  uses: [],
  keywords: { ar: ['حمى صفراء', 'شهادة التطعيم', 'لقاح السفر', 'أفريقيا'], en: ['yellow fever', 'Stamaril', 'YF-VAX', 'ICVP', 'travel vaccine'] }
});

DRUGS.push({
  id: 'tuberculin-ppd',
  cls: 'diagnostic-agent',
  otc: false,
  alert: false,
  name:  { ar: 'اختبار التوبركولين (بي بي دي)', en: 'Tuberculin, purified protein derivative (PPD)' },
  short: {
    ar: 'مادة تشخيصية تحقن في جلد الساعد وتقرأ بعد يومين أو ثلاثة لكشف عدوى السلّ. ليس لقاحاً، والنتيجة الإيجابية لا تحدّد وحدها هل السلّ كامن أم نشط.',
    en: 'A diagnostic substance injected into the skin of the forearm and read two to three days later to detect tuberculosis infection. It is not a vaccine, and a positive result alone cannot tell latent from active TB.'
  },
  brands: ['توبرسول', 'أبليسول', 'توبركولين بي بي دي'],
  uses: ['tb'],
  keywords: { ar: ['اختبار السل', 'مانتو', 'فحص السل الجلدي', 'درن'], en: ['PPD', 'Mantoux', 'tuberculin skin test', 'TST', 'Tubersol'] }
});

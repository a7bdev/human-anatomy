/* ============================================================
   موسوعة الأدوية — فهرس دفعة الولادة والمواليد (repro2)
   rx/index-repro2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ملاحظة: الفصائل uterotonic و prostaglandin و abortifacient و
   pulmonary-surfactant و respiratory-stimulant و anthelmintic غير
   معرّفة بعد في DRUG_CLASSES، وتُعرض بمعرّفها ولا تكسر شيئاً
   (كما نصّ تعليق drugs.js).
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'oxytocin',
  cls: 'uterotonic',
  otc: false,
  alert: true,
  name:  { ar: 'الأوكسيتوسين', en: 'Oxytocin' },
  short: {
    ar: 'هرمون يُحقن في المستشفى ليجعل الرحم ينقبض: يقوّي الطلق حين تدعو حاجة طبية، ويوقف نزف ما بعد الولادة. يحتاج مراقبة لحظية للأم والجنين.',
    en: 'A hormone given by injection in hospital to make the womb contract: it strengthens labour when there is a medical reason, and stops bleeding after birth. It needs minute-by-minute monitoring of mother and baby.'
  },
  brands: ['سينتوسينون', 'بيتوسين', 'سينتومترين'],
  uses: ['postpartum-hemorrhage', 'preeclampsia', 'miscarriage'],
  keywords: { ar: ['طلق صناعي', 'تحريض الولادة', 'مقبّض رحم', 'نزف بعد الولادة'], en: ['pitocin', 'syntocinon', 'uterotonic', 'labour induction'] }
});

DRUGS.push({
  id: 'carbetocin',
  cls: 'uterotonic',
  otc: false,
  alert: false,
  name:  { ar: 'الكاربيتوسين', en: 'Carbetocin' },
  short: {
    ar: 'شبيه الأوكسيتوسين لكنه أطول أثراً: حقنة واحدة بعد خروج المولود تمنع نزف ما بعد الولادة. له صيغة تتحمّل الحرارة فلا تحتاج ثلاجة.',
    en: 'An oxytocin analogue with a longer action: a single injection after the baby is born prevents postpartum bleeding. A heat-stable form exists that needs no refrigeration.'
  },
  brands: ['بابال'],
  uses: ['postpartum-hemorrhage'],
  keywords: { ar: ['كاربيتوسين', 'نزف بعد الولادة', 'مقبّض رحم', 'ونى الرحم'], en: ['pabal', 'heat-stable carbetocin', 'uterine atony', 'PPH'] }
});

DRUGS.push({
  id: 'ergometrine',
  cls: 'uterotonic',
  otc: false,
  alert: true,
  name:  { ar: 'الإرجومترين', en: 'Ergometrine' },
  short: {
    ar: 'قلويد إرغوتي يُحقن ليضغط الرحم انقباضاً مستمراً فيُغلق أوعيته النازفة. قوي وفعّال، لكنه يرفع الضغط ويضيّق الشرايين فيُمنع في حالات كثيرة.',
    en: 'An ergot alkaloid given by injection to clamp the womb into a sustained contraction that closes its bleeding vessels. Powerful, but it raises blood pressure and narrows arteries, so it is barred in many situations.'
  },
  brands: ['ميثرجين', 'سينتومترين', 'إرغومترين'],
  uses: ['postpartum-hemorrhage', 'miscarriage'],
  keywords: { ar: ['إرغومترين', 'ميثيل إرغومترين', 'نزف بعد الولادة', 'المرحلة الثالثة'], en: ['ergonovine', 'methylergometrine', 'methergine', 'ergot'] }
});

DRUGS.push({
  id: 'misoprostol',
  cls: 'prostaglandin',
  otc: false,
  alert: true,
  name:  { ar: 'الميزوبروستول', en: 'Misoprostol' },
  short: {
    ar: 'قرص شبيه بالبروستاغلاندين: رُخّص أصلاً لحماية المعدة من قرحة مسكّنات الالتهاب، وصار أوسع استعمالاً في الرحم. يحمل تحذيراً صريحاً بشأن الحمل.',
    en: 'A prostaglandin-like tablet: originally licensed to protect the stomach from anti-inflammatory ulcers, now used far more widely on the womb. It carries an explicit pregnancy warning.'
  },
  brands: ['سايتوتك', 'ميزوتاك', 'أرثروتك'],
  uses: ['peptic-ulcer', 'postpartum-hemorrhage', 'miscarriage'],
  keywords: { ar: ['ميزوبروستول', 'سايتوتك', 'قرحة المسكّنات', 'تليين عنق الرحم'], en: ['cytotec', 'prostaglandin E1', 'NSAID ulcer', 'cervical ripening'] }
});

DRUGS.push({
  id: 'mifepristone-misoprostol',
  cls: 'abortifacient',
  otc: false,
  alert: true,
  name:  { ar: 'الميفيبريستون مع الميزوبروستول', en: 'Mifepristone – misoprostol' },
  short: {
    ar: 'دواءان يُؤخذان بالتتابع تحت إشراف طبّي مقيّد: الأول يوقف عمل هرمون الحمل، والثاني يجعل الرحم ينقبض ويفرغ. يُستعمل في الإجهاض الدوائي وفي إفراغ الحمل المتوقّف.',
    en: 'Two medicines taken in sequence under restricted medical supervision: the first blocks the pregnancy hormone, the second makes the womb contract and empty. Used for medical abortion and for evacuating a pregnancy that has stopped.'
  },
  brands: ['ميفيجاين', 'ميفيبريكس', 'سايتوتك'],
  uses: ['miscarriage'],
  keywords: { ar: ['ميفيبريستون', 'إجهاض دوائي', 'حمل متوقّف', 'مضاد البروجستيرون'], en: ['mifegyne', 'mifeprex', 'RU-486', 'medical abortion'] }
});

DRUGS.push({
  id: 'alprostadil',
  cls: 'prostaglandin',
  otc: false,
  alert: true,
  name:  { ar: 'الألبروستاديل', en: 'Alprostadil (prostaglandin E1)' },
  short: {
    ar: 'بروستاغلاندين يوسّع الأوعية، وله استعمالان متباعدان: حقنة موضعية في القضيب لضعف الانتصاب، وتسريب وريدي في المواليد لإبقاء القناة الشريانية مفتوحة حتى الجراحة.',
    en: 'A blood-vessel-widening prostaglandin with two very different uses: a local penile injection for erectile dysfunction, and an intravenous drip in newborns to keep the arterial duct open until surgery.'
  },
  brands: ['كافيرجيت', 'موس', 'بروستين في آر'],
  uses: ['erectile-dysfunction', 'congenital-heart', 'tetralogy-fallot'],
  keywords: { ar: ['ألبروستاديل', 'حقن القضيب', 'القناة الشريانية', 'بروستاغلاندين'], en: ['caverject', 'MUSE', 'prostin VR', 'ductus arteriosus'] }
});

DRUGS.push({
  id: 'beractant',
  cls: 'pulmonary-surfactant',
  otc: false,
  alert: false,
  name:  { ar: 'البيراكتانت', en: 'Beractant' },
  short: {
    ar: 'خافض توتّر سطحي مستخلص من رئة البقر، يُقطَّر في أنبوب التنفّس داخل حضّانة العناية المركّزة ليمنع انطباق حويصلات رئة الخديج ويعالج ضائقتها التنفّسية.',
    en: 'A surfactant extracted from bovine lung, instilled down the breathing tube in neonatal intensive care to stop the air sacs of a premature baby from collapsing and to treat respiratory distress.'
  },
  brands: ['سيرفانتا'],
  uses: ['prematurity'],
  keywords: { ar: ['سيرفانتا', 'سيرفكتانت', 'الضائقة التنفّسية', 'الخديج'], en: ['survanta', 'surfactant', 'RDS', 'preterm'] }
});

DRUGS.push({
  id: 'poractant-alfa',
  cls: 'pulmonary-surfactant',
  otc: false,
  alert: false,
  name:  { ar: 'البوراكتانت ألفا', en: 'Poractant alfa' },
  short: {
    ar: 'خافض توتّر سطحي مستخلص من رئة الخنزير، يُعطى في أنبوب التنفّس علاجاً إنقاذياً لمتلازمة الضائقة التنفّسية عند الخديج، ويقلّل الوفاة وتمزّق الرئة.',
    en: 'A surfactant extracted from porcine lung, given down the breathing tube as rescue treatment for respiratory distress syndrome in premature infants, reducing death and lung rupture.'
  },
  brands: ['كيوروسيرف'],
  uses: ['prematurity'],
  keywords: { ar: ['كيوروسيرف', 'سيرفكتانت', 'الضائقة التنفّسية', 'استرواح الصدر'], en: ['curosurf', 'surfactant', 'RDS', 'pneumothorax'] }
});

DRUGS.push({
  id: 'caffeine-citrate',
  cls: 'respiratory-stimulant',
  otc: false,
  alert: true,
  name:  { ar: 'سيترات الكافيين', en: 'Caffeine citrate' },
  short: {
    ar: 'منبّه للجهاز العصبي يُعطى للخديج الذي يتوقّف نفَسه نوبات متكرّرة، فيوقظ مركز التنفّس ويقلّل النوبات ويعين على الفطام من جهاز التنفّس.',
    en: 'A nervous-system stimulant given to premature babies whose breathing pauses in repeated spells: it wakes the respiratory centre, reduces the spells and helps weaning off the ventilator.'
  },
  brands: ['بيوران', 'كافسيت'],
  uses: ['prematurity'],
  keywords: { ar: ['كافيين', 'انقطاع نفس الخديج', 'منبّه تنفّسي', 'ميثيل زانثين'], en: ['cafcit', 'peyona', 'apnea of prematurity', 'methylxanthine'] }
});

DRUGS.push({
  id: 'albendazole',
  cls: 'anthelmintic',
  otc: false,
  alert: false,
  name:  { ar: 'الألبيندازول', en: 'Albendazole' },
  short: {
    ar: 'قرص يُمضغ يقتل الديدان المعوية بتجويعها من السكّر. جرعته القصيرة من أكثر أدوية العالم أماناً وانتشاراً، أما دوراته الطويلة لأكياس الكبد والدماغ فتحتاج مراقبة دم وكبد.',
    en: 'A chewable tablet that kills intestinal worms by starving them of sugar. Its short course is among the safest and most widely used medicines in the world, while its long courses for liver and brain cysts need blood and liver monitoring.'
  },
  brands: ['زينتيل', 'ألبينزا', 'ألبيندازول'],
  uses: ['intestinal-worms'],
  keywords: { ar: ['ألبيندازول', 'زينتيل', 'ديدان', 'طارد ديدان'], en: ['zentel', 'albenza', 'anthelmintic', 'deworming'] }
});

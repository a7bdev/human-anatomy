/* ============================================================
   موسوعة الأمراض — فهرس الوقاية والحياة الصحّية
   dx/index-prevention.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-prevention.js
   باب يخدم السليم قبل المريض: كيف يحافظ الإنسان على صحّته
   قبل أن يمرض. الحقول الستة تُقرأ هنا كوقاية لا كمرض.
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج، والتفاصيل
   الدقيقة للفحوص والتطعيمات تتبع دليل وزارة الصحّة المحلية وطبيبك.
   ============================================================ */

/* ---------------- التغذية ---------------- */

DISEASES.push({
  id: 'pv-nutrition', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'التغذية المتوازنة', en: 'Balanced nutrition' },
  short: {
    ar: 'ما تأكله كلّ يوم يبني جسمك ويحرسه أو يتعبه ببطء. التوازن لا الحرمان هو المقصود: صحن يغلب عليه الخضار والحبوب الكاملة والبروتين الجيّد، ويقلّ فيه السكّر والملح والدهون المصنّعة.',
    en: 'What you eat every day builds and guards your body, or slowly wears it down. The aim is balance, not deprivation: a plate led by vegetables, whole grains and good protein, with less sugar, salt and processed fat.'
  },
  organs: ['stomach', 'small-intestine', 'large-intestine', 'liver', 'pancreas', 'heart', 'villi', 'blood'],
  aliases: [],
  keywords: { ar: ['الأكل الصحي', 'الحمية', 'التغذية', 'السكر', 'الملح', 'الألياف'], en: ['nutrition', 'healthy diet', 'balanced diet', 'fibre', 'whole grains'] }
});

/* ---------------- الحركة ---------------- */

DISEASES.push({
  id: 'pv-activity', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'النشاط البدني', en: 'Physical activity' },
  short: {
    ar: 'الجسم صُنع ليتحرّك، والجلوس الطويل عبء صامت على القلب والأيض والعظام. لا يلزمك ناد رياضي: مئة وخمسون دقيقة من المشي المعتدل في الأسبوع تغيّر صحّتك فعلاً.',
    en: 'The body is made to move, and long sitting is a silent burden on the heart, the metabolism and the bones. You need no gym: a hundred and fifty minutes of brisk walking a week genuinely changes your health.'
  },
  organs: ['heart', 'muscles', 'skeleton', 'lungs', 'bone-inside', 'coronary', 'circulation', 'brain'],
  aliases: [],
  keywords: { ar: ['الرياضة', 'المشي', 'الحركة', 'التمارين', 'الجلوس الطويل'], en: ['physical activity', 'exercise', 'walking', 'sedentary', 'fitness'] }
});

/* ---------------- النوم ---------------- */

DISEASES.push({
  id: 'pv-sleep', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'النوم الصحّي', en: 'Healthy sleep' },
  short: {
    ar: 'النوم ليس وقتاً ضائعاً بل ورشة إصلاح ليلية للدماغ والمناعة والذاكرة. سبع إلى تسع ساعات منتظمة لأغلب البالغين، والانتظام في المواعيد أهمّ من العدد وحده.',
    en: 'Sleep is not wasted time but a nightly repair workshop for the brain, the immune system and memory. Seven to nine regular hours for most adults, and steady timing matters even more than the number alone.'
  },
  organs: ['brain', 'pineal', 'limbic', 'heart', 'immunity', 'autonomic', 'neuron'],
  aliases: [],
  keywords: { ar: ['النوم', 'الأرق', 'السهر', 'قلة النوم', 'الراحة'], en: ['sleep', 'sleep hygiene', 'insomnia', 'rest', 'circadian'] }
});

/* ---------------- الماء ---------------- */

DISEASES.push({
  id: 'pv-hydration', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'الترطيب وشرب الماء', en: 'Hydration' },
  short: {
    ar: 'الماء وسط كلّ تفاعل في جسمك، وفي حرّ منطقتنا يخسره الجسم أسرع مما نظنّ. لون البول الفاتح دليلك اليومي البسيط على أنك مرتوٍ، والعطش علامة متأخّرة لا مبكّرة.',
    en: 'Water is the medium of every reaction in your body, and in our hot region it is lost faster than we think. Pale urine is your simple daily proof of being well hydrated, and thirst is a late sign, not an early one.'
  },
  organs: ['kidneys', 'nephron', 'bladder', 'blood', 'skin', 'circulation', 'ureter'],
  aliases: [],
  keywords: { ar: ['شرب الماء', 'الترطيب', 'الجفاف', 'العطش', 'الحرارة'], en: ['hydration', 'drinking water', 'dehydration', 'fluids', 'heat'] }
});

/* ---------------- الإقلاع عن التدخين ---------------- */

DISEASES.push({
  id: 'pv-smoking-cessation', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'الإقلاع عن التدخين', en: 'Quitting smoking' },
  short: {
    ar: 'لا عادة أخرى تؤذي هذا العدد من الأعضاء دفعة واحدة كالتدخين، والشيشة والسجائر الإلكترونية ليست استثناء. والخبر المطمئن أن الجسم يبدأ إصلاح نفسه خلال ساعات من آخر سيجارة.',
    en: 'No other habit harms this many organs at once like smoking, and shisha and vapes are no exception. The reassuring news is that the body begins repairing itself within hours of the last cigarette.'
  },
  organs: ['lungs', 'alveoli', 'bronchi', 'heart', 'coronary', 'larynx', 'bladder', 'vessel-types'],
  aliases: [],
  keywords: { ar: ['التدخين', 'الإقلاع', 'السجائر', 'الشيشة', 'الفيب', 'النيكوتين'], en: ['quitting smoking', 'smoking cessation', 'tobacco', 'shisha', 'vaping'] }
});

/* ---------------- الوزن الصحّي ---------------- */

DISEASES.push({
  id: 'pv-healthy-weight', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'الوزن الصحّي', en: 'Healthy weight' },
  short: {
    ar: 'ليست المسألة شكلاً بل عبء يحمله القلب والمفاصل والبنكرياس كلّ يوم. محيط الخصر أصدق من الميزان وحده، ونقص وزن بسيط ومستمرّ يفعل أكثر مما يظنّ صاحبه.',
    en: 'This is not about looks but a load the heart, joints and pancreas carry every day. Waist size tells more truth than the scale alone, and a small steady weight loss does more than people expect.'
  },
  organs: ['liver', 'pancreas', 'heart', 'knee', 'hip', 'vessel-types', 'blood'],
  aliases: [],
  keywords: { ar: ['الوزن', 'السمنة', 'الكرش', 'محيط الخصر', 'إنقاص الوزن'], en: ['healthy weight', 'obesity', 'waist', 'weight loss', 'BMI'] }
});

/* ---------------- الفحص الدوري ---------------- */

DISEASES.push({
  id: 'pv-screening', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'الفحص الدوري بالعمر', en: 'Age-based health screening' },
  short: {
    ar: 'أخطر الأمراض تبدأ صامتة: الضغط والسكّر ودهون الدم وبعض السرطانات تعمل سنوات بلا عرض. الفحص الدوري يكشفها وهي صغيرة تُعالج، لا كبيرة يصعب علاجها.',
    en: 'The most dangerous diseases start silent: blood pressure, sugar, blood fats and some cancers work for years without a symptom. Periodic screening catches them small and treatable, not large and hard to treat.'
  },
  organs: ['heart', 'vessel-types', 'pancreas', 'breast', 'large-intestine', 'female-reproductive', 'prostate', 'blood'],
  aliases: [],
  keywords: { ar: ['الفحص الدوري', 'الكشف المبكر', 'فحص الضغط', 'فحص السكر', 'الماموغرام', 'فحص القولون'], en: ['screening', 'check-up', 'early detection', 'mammogram', 'colon screening'] }
});

/* ---------------- التطعيمات ---------------- */

DISEASES.push({
  id: 'pv-vaccination', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'جدول التطعيمات', en: 'Vaccination schedule' },
  short: {
    ar: 'التطعيم يدرّب المناعة على العدوّ قبل أن تلقاه، فتصدّه بلا مرض. جدول الطفولة يحمي الصغار، ولا ينتهي دور التطعيم بالبلوغ: هناك منشّطات وطعوم للكبار وأخرى موسمية.',
    en: 'A vaccine trains immunity against an enemy before it is met, so the enemy is repelled without illness. The childhood schedule protects the young, and vaccination does not end at adulthood: there are boosters, adult vaccines and seasonal ones.'
  },
  organs: ['immunity', 'thymus', 'lymph-node', 'lungs', 'liver', 'lymphatic'],
  aliases: [],
  keywords: { ar: ['التطعيم', 'اللقاح', 'المطاعيم', 'تطعيم الأطفال', 'اللقاح الموسمي', 'الإنفلونزا'], en: ['vaccination', 'immunisation', 'vaccine', 'childhood vaccines', 'flu shot', 'booster'] }
});

/* ---------------- صحّة الفم ---------------- */

DISEASES.push({
  id: 'pv-oral-health', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'صحّة الفم والأسنان', en: 'Oral and dental health' },
  short: {
    ar: 'الفم باب الجسم، وصحّة اللثة ترتبط بالقلب والسكّر أكثر مما يُظنّ. دقيقتان من التفريش مرّتين يومياً وخيط بين الأسنان يقيان من التسوّس والتهاب اللثة أكثر من أي علاج لاحق.',
    en: 'The mouth is the body gate, and gum health is linked to the heart and to diabetes more than people think. Two minutes of brushing twice a day and flossing between the teeth prevent decay and gum disease better than any later treatment.'
  },
  organs: ['teeth', 'lips', 'tongue', 'salivary-glands', 'pharynx', 'tmj', 'child-teeth'],
  aliases: [],
  keywords: { ar: ['الأسنان', 'اللثة', 'التسوس', 'تفريش الأسنان', 'الخيط', 'الفلورايد'], en: ['oral health', 'dental', 'gum disease', 'brushing', 'flossing', 'fluoride'] }
});

/* ---------------- البشرة والشمس ---------------- */

DISEASES.push({
  id: 'pv-skin-sun', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'العناية بالبشرة والوقاية من الشمس', en: 'Skin care and sun protection' },
  short: {
    ar: 'الجلد أكبر أعضائك وأكثرها تعرّضاً، وشمس منطقتنا قويّة طوال العام. الوقاية من الشمس تحفظ البشرة من الشيخوخة المبكّرة ومن أخطر أنواع السرطان معاً.',
    en: 'The skin is your largest and most exposed organ, and the sun in our region is strong all year. Sun protection guards the skin from early ageing and from the most dangerous cancer at the same time.'
  },
  organs: ['skin', 'hair-follicle', 'nail', 'skin-receptors', 'eye'],
  aliases: [],
  keywords: { ar: ['البشرة', 'الجلد', 'الشمس', 'واقي الشمس', 'حروق الشمس', 'سرطان الجلد'], en: ['skin care', 'sun protection', 'sunscreen', 'sunburn', 'skin cancer', 'UV'] }
});

/* ---------------- الصحّة النفسية ---------------- */

DISEASES.push({
  id: 'pv-mental-health', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'الصحّة النفسية والتوتّر', en: 'Mental health and stress' },
  short: {
    ar: 'العقل جزء من الجسد، والتوتّر المزمن يرفع الضغط ويضعف المناعة ويفسد النوم. العناية بالنفس ليست رفاهية: التنفّس والعلاقات والحديث عمّا يثقلك وقاية حقيقية.',
    en: 'The mind is part of the body, and chronic stress raises blood pressure, weakens immunity and spoils sleep. Caring for the self is no luxury: breathing, relationships and talking about what weighs on you are real prevention.'
  },
  organs: ['brain', 'limbic', 'adrenal', 'heart', 'autonomic', 'cortex-map'],
  aliases: [],
  keywords: { ar: ['الصحة النفسية', 'التوتر', 'القلق', 'الضغط النفسي', 'الاسترخاء', 'الاكتئاب'], en: ['mental health', 'stress', 'anxiety', 'relaxation', 'wellbeing', 'burnout'] }
});

/* ---------------- العين والشاشات ---------------- */

DISEASES.push({
  id: 'pv-eye-screens', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'صحّة العينين مع الشاشات', en: 'Eye health with screens' },
  short: {
    ar: 'ساعات الشاشة الطويلة تُجهد العين وتجفّفها وتقلّل رمشك بلا أن تشعر. قاعدة بسيطة تريح عينيك، والضوء الطبيعي والنظر البعيد يقيان أطفالك من قصر النظر المتزايد.',
    en: 'Long screen hours strain and dry the eyes and cut your blink rate without your noticing. A simple rule rests your eyes, and daylight and distance vision protect your children from rising short-sightedness.'
  },
  organs: ['eye', 'retina', 'cranial-nerves', 'brain'],
  aliases: [],
  keywords: { ar: ['إجهاد العين', 'الشاشات', 'جفاف العين', 'قصر النظر', 'راحة العين', 'قاعدة 20'], en: ['eye strain', 'screens', 'dry eye', 'myopia', 'digital eye', '20-20-20'] }
});

/* ---------------- الظهر والوضعية ---------------- */

DISEASES.push({
  id: 'pv-back-posture', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'وقاية الظهر والوضعية', en: 'Back care and posture' },
  short: {
    ar: 'ألم أسفل الظهر من أكثر ما يُقعد الناس عن العمل، وأغلبه يبدأ من جلوس طويل ووضعية سيّئة ورفع خاطئ. ظهر قويّ متحرّك يقيك أكثر من أي حزام أو كرسي فاخر.',
    en: 'Low back pain is among the commonest reasons people miss work, and most of it starts with long sitting, poor posture and wrong lifting. A strong, moving back protects you more than any belt or expensive chair.'
  },
  organs: ['vertebra-disc', 'spine', 'spinal-cord', 'muscles', 'skeleton', 'tendon-ligament', 'peripheral-nerve'],
  aliases: [],
  keywords: { ar: ['ألم الظهر', 'الوضعية', 'الجلسة الصحيحة', 'رفع الأثقال', 'أسفل الظهر', 'العمود الفقري'], en: ['back care', 'posture', 'back pain', 'lifting', 'ergonomics', 'core'] }
});

/* ---------------- نظافة اليدين ---------------- */

DISEASES.push({
  id: 'pv-hand-hygiene', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'نظافة اليدين والوقاية من العدوى', en: 'Hand hygiene and infection prevention' },
  short: {
    ar: 'اليد أكثر ما ينقل الجراثيم إلى فمك وعينك ومن حولك. غسل اليدين بالماء والصابون في اللحظات الصحيحة أرخص وأقوى وقاية من العدوى عرفها الطبّ كلّه.',
    en: 'The hand is the greatest carrier of germs to your mouth, eyes and those around you. Washing hands with soap and water at the right moments is the cheapest and most powerful infection prevention that all of medicine has known.'
  },
  organs: ['skin', 'immunity', 'hand', 'small-intestine', 'lungs', 'nail'],
  aliases: [],
  keywords: { ar: ['غسل اليدين', 'النظافة', 'الوقاية من العدوى', 'الجراثيم', 'المعقم', 'انتقال العدوى'], en: ['hand hygiene', 'handwashing', 'infection prevention', 'germs', 'sanitiser'] }
});

/* ---------------- الفحص الذاتي ---------------- */

DISEASES.push({
  id: 'pv-self-exam', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'الفحص الذاتي (الثدي والجلد)', en: 'Self-examination (breast and skin)' },
  short: {
    ar: 'أن تعرف جسدك الطبيعي هو أن تلحظ تغيّره باكراً. الفحص الذاتي لا يغني عن فحص الطبيب لكنه يجعلك أوّل من ينتبه إلى كتلة في الثدي أو شامة تتغيّر على الجلد.',
    en: 'Knowing your own normal body is what lets you notice its change early. Self-examination does not replace the doctor check but makes you the first to notice a breast lump or a changing mole on the skin.'
  },
  organs: ['breast', 'skin', 'testis', 'lymph-node'],
  aliases: [],
  keywords: { ar: ['الفحص الذاتي', 'فحص الثدي', 'فحص الجلد', 'الشامات', 'الكشف المبكر', 'كتلة'], en: ['self-examination', 'breast self-exam', 'skin check', 'moles', 'ABCDE', 'lump'] }
});

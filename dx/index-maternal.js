/* ============================================================
   موسوعة الأمراض — فهرس صحّة المرأة والحمل والطفل (الطبيعي)
   dx/index-maternal.js
   ------------------------------------------------------------
   هذا الباب يصف الطبيعي لا المرض: كيف يحدث الحمل وينمو،
   وكيف تسير الولادة والنفاس والرضاعة، وكيف ينمو الطفل.
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-maternal.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- مراحل الحمل ---------------- */

DISEASES.push({
  id: 'pregnancy-first-trimester', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'الفصل الأول من الحمل (الأسابيع ١–١٣)', en: 'First trimester of pregnancy (weeks 1–13)' },
  short: {
    ar: 'ثلث الحمل الأول تتشكّل فيه أعضاء الجنين كلّها من نقطة صغيرة، ويصحبه غثيان وتعب وتقلّبات لأن الهرمونات ترتفع بسرعة. أهمّ فصولٍ للجنين وأصعبها على الأمّ غالباً.',
    en: 'In the first third of pregnancy all the baby organs take shape from a tiny start, accompanied by nausea, tiredness and mood changes as hormones rise fast. The most important trimester for the baby and often the hardest on the mother.'
  },
  organs: ['embryo', 'female-reproductive', 'ovary', 'pituitary'],
  aliases: [],
  keywords: { ar: ['الثلث الأول', 'بداية الحمل', 'الوحام', 'غثيان الحمل', 'تكوّن الأعضاء'], en: ['first trimester', 'early pregnancy', 'morning sickness', 'organogenesis'] }
});

DISEASES.push({
  id: 'pregnancy-second-trimester', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'الفصل الثاني من الحمل (الأسابيع ١٤–٢٧)', en: 'Second trimester of pregnancy (weeks 14–27)' },
  short: {
    ar: 'ثلث الحمل الأوسط أهدأ فصوله عادة: يخفّ الغثيان وتعود الطاقة، ويبدأ البطن يظهر وتُحسّ حركة الجنين لأول مرة، وفيه يُعرف جنسه غالباً.',
    en: 'The middle third is usually the calmest: nausea eases and energy returns, the bump begins to show and the baby movements are felt for the first time, and the sex is often known.'
  },
  organs: ['embryo', 'female-reproductive', 'fetal-circulation', 'growth-plate'],
  aliases: [],
  keywords: { ar: ['الثلث الثاني', 'حركة الجنين الأولى', 'ظهور البطن', 'فحص التشريح'], en: ['second trimester', 'quickening', 'anatomy scan', 'baby bump'] }
});

DISEASES.push({
  id: 'pregnancy-third-trimester', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'الفصل الثالث من الحمل (الأسابيع ٢٨–٤٠)', en: 'Third trimester of pregnancy (weeks 28–40)' },
  short: {
    ar: 'ثلث الحمل الأخير ينمو فيه الجنين ويكتمل استعداده للحياة خارج الرحم، ويثقل جسم الأمّ فيظهر ضيق نفس وحرقة وألم ظهر وتورّم قدمين، وتُكثَّف المتابعة استعداداً للولادة.',
    en: 'In the final third the baby grows and completes its readiness for life outside the womb; the mother body grows heavy with breathlessness, heartburn, back pain and swollen feet, and follow-up is stepped up ready for birth.'
  },
  organs: ['embryo', 'female-reproductive', 'lungs', 'pelvis'],
  aliases: [],
  keywords: { ar: ['الثلث الثالث', 'أواخر الحمل', 'استعداد للولادة', 'تورّم القدمين', 'انقباضات براكستون'], en: ['third trimester', 'late pregnancy', 'Braxton Hicks', 'birth preparation'] }
});

/* ---------------- حساب وموعد ---------------- */

DISEASES.push({
  id: 'due-date', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'حساب موعد الولادة وعمر الحمل', en: 'Estimating the due date and gestational age' },
  short: {
    ar: 'الحمل يُحسب أربعين أسبوعاً من أول يوم في آخر دورة، لا من يوم الحمل نفسه. الموعد تقدير لا موعد ثابت، والولادة بين ٣٧ و٤٢ أسبوعاً كلّها في المدى الطبيعي.',
    en: 'Pregnancy is counted as forty weeks from the first day of the last period, not from conception itself. The due date is an estimate, not a fixed appointment, and birth between 37 and 42 weeks is all within the normal range.'
  },
  organs: ['embryo', 'female-reproductive'],
  aliases: [],
  keywords: { ar: ['موعد الولادة', 'عمر الحمل', 'أربعين أسبوعاً', 'حساب الحمل', 'أسبوع الحمل'], en: ['due date', 'gestational age', 'EDD', '40 weeks', 'dating scan'] }
});

DISEASES.push({
  id: 'fetal-movement', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'حركة الجنين ومتى تُتابَع', en: 'Fetal movement and when to monitor it' },
  short: {
    ar: 'حركة الجنين علامة اطمئنان تُحسّ من منتصف الحمل، ولكلّ جنين نمطه المعتاد. المهمّ ليس عدّاً ثابتاً بل أن تعرف الأمّ نمط طفلها وتنتبه إذا قلّ أو تغيّر.',
    en: 'Baby movement is a reassuring sign felt from mid-pregnancy, and every baby has its own usual pattern. What matters is not a fixed count but that the mother knows her baby pattern and notices if it lessens or changes.'
  },
  organs: ['embryo', 'fetal-circulation', 'female-reproductive'],
  aliases: [],
  keywords: { ar: ['حركة الجنين', 'ركلات الجنين', 'قلّة الحركة', 'عدّ الركلات'], en: ['fetal movement', 'kick counts', 'reduced movements', 'quickening'] }
});

/* ---------------- تغذية وسلامة ---------------- */

DISEASES.push({
  id: 'pregnancy-nutrition', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'تغذية الحامل', en: 'Nutrition in pregnancy' },
  short: {
    ar: 'الحامل لا تأكل لاثنين بل تأكل بنوعية أفضل. الأساس غذاء متنوّع وحمض الفوليك قبل الحمل وفي أشهره الأولى، وتجنّب أطعمة قليلة قد تنقل عدوى للجنين.',
    en: 'A pregnant woman does not eat for two but eats better quality. The basics are varied food, folic acid before and in the early months, and avoiding a few foods that can pass infection to the baby.'
  },
  organs: ['embryo', 'female-reproductive', 'blood', 'liver'],
  aliases: [],
  keywords: { ar: ['تغذية الحامل', 'حمض الفوليك', 'أكل الحامل', 'الحديد في الحمل', 'ممنوعات الحمل'], en: ['pregnancy nutrition', 'folic acid', 'prenatal diet', 'foods to avoid in pregnancy'] }
});

DISEASES.push({
  id: 'pregnancy-danger-signs', group: 'maternal', tier: 'common', emergency: true,
  name: { ar: 'علامات خطر الحمل — متى تطلبين الطوارئ فوراً', en: 'Pregnancy danger signs — when to seek emergency care' },
  short: {
    ar: 'أكثر الحمل يمرّ بسلام، لكن قليلاً من العلامات تعني خطراً على الأمّ أو الجنين لا يحتمل الانتظار: نزيف، صداع شديد مع اضطراب رؤية، ألم بطن حادّ، توقّف حركة الجنين. معرفتها تنقذ حياة.',
    en: 'Most pregnancies pass safely, but a few signs mean danger to mother or baby that cannot wait: bleeding, a severe headache with visual disturbance, sharp abdominal pain, or the baby stopping moving. Knowing them saves lives.'
  },
  organs: ['female-reproductive', 'embryo', 'brain', 'fetal-circulation'],
  aliases: [],
  keywords: { ar: ['علامات خطر الحمل', 'نزيف الحمل', 'تسمّم الحمل', 'صداع الحمل', 'طوارئ الحمل'], en: ['pregnancy danger signs', 'obstetric emergency', 'antepartum bleeding', 'preeclampsia warning'] }
});

/* ---------------- الولادة والنفاس ---------------- */

DISEASES.push({
  id: 'labor-stages', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'مراحل الولادة', en: 'The stages of labour' },
  short: {
    ar: 'الولادة تمرّ بمراحل معروفة: انقباضات تفتح عنق الرحم شيئاً فشيئاً، ثم دفع يخرج الطفل، ثم خروج المشيمة. معرفة المراحل تهدّئ الخوف وتوضّح متى يُتوجّه للمستشفى.',
    en: 'Labour passes through known stages: contractions that open the cervix bit by bit, then pushing that delivers the baby, then delivery of the placenta. Knowing the stages calms fear and clarifies when to head to hospital.'
  },
  organs: ['female-reproductive', 'pelvis', 'embryo'],
  aliases: [],
  keywords: { ar: ['مراحل الولادة', 'المخاض', 'الطلق', 'توسّع عنق الرحم', 'الولادة الطبيعية'], en: ['stages of labour', 'contractions', 'cervical dilation', 'childbirth', 'delivery'] }
});

DISEASES.push({
  id: 'postpartum-recovery', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'النفاس والتعافي بعد الولادة', en: 'The postpartum period and recovery after birth' },
  short: {
    ar: 'الأسابيع الستة بعد الولادة يتعافى فيها الجسم ويعود الرحم لحجمه وينزل دم النفاس، وتتقلّب المشاعر مع قلّة النوم. مرحلة تحتاج راحة ودعماً بقدر ما يحتاجها المولود.',
    en: 'In the six weeks after birth the body recovers, the womb returns to size and the postpartum bleeding settles, and emotions swing with little sleep. A stage that needs rest and support as much as the newborn does.'
  },
  organs: ['female-reproductive', 'breast', 'pelvis', 'blood'],
  aliases: [],
  keywords: { ar: ['النفاس', 'ما بعد الولادة', 'دم النفاس', 'كآبة النفاس', 'تعافي الولادة'], en: ['postpartum', 'puerperium', 'lochia', 'baby blues', 'recovery after birth'] }
});

DISEASES.push({
  id: 'breastfeeding', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'الرضاعة الطبيعية', en: 'Breastfeeding' },
  short: {
    ar: 'حليب الأمّ غذاء المولود الأمثل ومناعته الأولى، ويعمل بالعرض والطلب: كلّما رضع الطفل زاد الحليب. البداية قد تكون صعبة، وأغلب الصعوبات تُحلّ بوضعية صحيحة ودعم مبكّر.',
    en: 'Mother milk is the ideal food for the newborn and its first immunity, and it works by supply and demand: the more the baby feeds the more milk is made. The start can be hard, and most difficulties are solved by correct positioning and early support.'
  },
  organs: ['breast', 'female-reproductive', 'pituitary', 'immunity'],
  aliases: [],
  keywords: { ar: ['الرضاعة الطبيعية', 'حليب الأم', 'اللبأ', 'الرضعة', 'التقام الثدي'], en: ['breastfeeding', 'breast milk', 'colostrum', 'latch', 'lactation'] }
});

/* ---------------- نمو الطفل ---------------- */

DISEASES.push({
  id: 'infant-milestones', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'معالم نمو الرضيع (ماذا يفعل في كلّ عمر)', en: 'Infant development milestones (what a baby does at each age)' },
  short: {
    ar: 'الرضيع يتعلّم مهاراته بترتيب متوقّع: يبتسم ثم يمسك ثم يجلس ثم يحبو ثم يمشي ثم يتكلّم. لكلّ معلم عمرٌ تقريبيّ لا يوم محدّد، والفوارق بين الأطفال الأصحّاء واسعة.',
    en: 'A baby learns its skills in an expected order: smiling, then grasping, sitting, crawling, walking and talking. Each milestone has an approximate age, not a fixed day, and the differences between healthy children are wide.'
  },
  organs: ['brain', 'muscles', 'growth-plate', 'spinal-cord'],
  aliases: [],
  keywords: { ar: ['معالم النمو', 'تطوّر الرضيع', 'الجلوس', 'الحبو', 'المشي', 'الكلام الأول'], en: ['developmental milestones', 'infant development', 'sitting', 'crawling', 'walking', 'first words'] }
});

DISEASES.push({
  id: 'child-vaccines', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'تطعيمات الطفل (الإطار العام)', en: 'Childhood vaccinations (the general framework)' },
  short: {
    ar: 'التطعيمات تدرّب مناعة الطفل على أمراض خطيرة قبل أن يلقاها، وتُعطى بجدول يبدأ من الولادة. الإطار عالميّ لكن المواعيد الدقيقة تتبع دليل وزارة الصحّة المحلية.',
    en: 'Vaccines train a child immunity against serious diseases before they are met, given on a schedule that begins at birth. The framework is global but the exact timing follows the local ministry of health guide.'
  },
  organs: ['immunity', 'blood'],
  aliases: [],
  keywords: { ar: ['تطعيمات الطفل', 'جدول التطعيمات', 'اللقاحات', 'تحصين الأطفال', 'المناعة'], en: ['child vaccines', 'immunization schedule', 'vaccination', 'childhood immunisation'] }
});

DISEASES.push({
  id: 'infant-warning-signs', group: 'maternal', tier: 'common', emergency: true,
  name: { ar: 'علامات إنذار عند الرضيع — متى يُراجَع فوراً', en: 'Infant warning signs — when to seek care at once' },
  short: {
    ar: 'الرضيع لا يشكو بالكلام، فيتعلّم الأهل لغة جسده. قليل من العلامات تعني خطراً لا يحتمل الانتظار: صعوبة تنفّس، خمول شديد، رفض الرضاعة، حمّى في الشهر الأول، تشنّج. معرفتها حماية.',
    en: 'A baby cannot complain in words, so parents learn the language of its body. A few signs mean danger that cannot wait: difficulty breathing, extreme lethargy, refusing to feed, fever in the first month, or a fit. Knowing them is protection.'
  },
  organs: ['infant-skull', 'lungs', 'brain', 'immunity'],
  aliases: [],
  keywords: { ar: ['علامات إنذار الرضيع', 'خطر الرضيع', 'حمّى المولود', 'صعوبة تنفّس الرضيع', 'خمول الرضيع'], en: ['infant red flags', 'baby warning signs', 'neonatal fever', 'infant breathing difficulty'] }
});

DISEASES.push({
  id: 'infant-safe-sleep', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'نوم الرضيع الآمن (الوقاية من الموت المفاجئ)', en: 'Safe infant sleep (preventing sudden infant death)' },
  short: {
    ar: 'أكثر ما يحمي الرضيع في نومه ثلاث قواعد بسيطة: على ظهره، على سطح مستوٍ صلب، بلا أغطية أو وسائد رخوة حوله. هذه القواعد وحدها خفّضت الموت المفاجئ للرضّع خفضاً كبيراً.',
    en: 'What most protects a sleeping baby is three simple rules: on its back, on a firm flat surface, with no loose covers or pillows around it. These rules alone have greatly reduced sudden infant death.'
  },
  organs: ['infant-skull', 'lungs', 'brain'],
  aliases: [],
  keywords: { ar: ['نوم الرضيع الآمن', 'الموت المفاجئ للرضّع', 'النوم على الظهر', 'سرير الرضيع'], en: ['safe sleep', 'SIDS prevention', 'back to sleep', 'infant sleep safety'] }
});

/* ---------------- صحّة المرأة عبر العمر ---------------- */

DISEASES.push({
  id: 'menstrual-cycle', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'الدورة الشهرية الطبيعية', en: 'The normal menstrual cycle' },
  short: {
    ar: 'الدورة الشهرية إيقاع هرمونيّ شهريّ يهيّئ الجسم لحمل محتمل، وتتراوح الدورة الطبيعية بين ٢١ و٣٥ يوماً. معرفة ما هو طبيعي فيها يميّز الاختلاف العابر عمّا يستحقّ فحصاً.',
    en: 'The menstrual cycle is a monthly hormonal rhythm that prepares the body for a possible pregnancy, and a normal cycle runs between 21 and 35 days. Knowing what is normal within it separates a passing change from what deserves a check.'
  },
  organs: ['female-reproductive', 'ovary', 'pituitary'],
  aliases: [],
  keywords: { ar: ['الدورة الشهرية', 'الطمث', 'التبويض', 'أيام الخصوبة', 'الدورة المنتظمة'], en: ['menstrual cycle', 'period', 'ovulation', 'fertile window', 'regular cycle'] }
});

DISEASES.push({
  id: 'womens-health-lifespan', group: 'maternal', tier: 'common', emergency: false,
  name: { ar: 'العناية بصحّة المرأة عبر العمر', en: 'Caring for women health across the lifespan' },
  short: {
    ar: 'صحّة المرأة تتغيّر حاجاتها مع كلّ مرحلة: البلوغ، سنوات الإنجاب، الحمل وما بعده، ثم ما حول انقطاع الطمث وما بعده. لكلّ مرحلة فحوص وقائية تكشف المشكلة قبل أن تظهر.',
    en: 'A woman health needs change with each stage: puberty, the reproductive years, pregnancy and after, then around menopause and beyond. Each stage has preventive checks that catch a problem before it shows.'
  },
  organs: ['female-reproductive', 'breast', 'ovary', 'skeleton', 'heart'],
  aliases: [],
  keywords: { ar: ['صحّة المرأة', 'الفحص الوقائي', 'مسحة عنق الرحم', 'فحص الثدي', 'صحّة العظام'], en: ['women health', 'preventive screening', 'cervical smear', 'breast screening', 'bone health'] }
});

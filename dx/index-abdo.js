/* ============================================================
   موسوعة الأمراض — فهرس مجموعة البطن والمسالك والتناسل
   dx/index-abdo.js
   ------------------------------------------------------------
   ٢٠ بطاقة: الهضم (٨) · المسالك البولية (٤) · التناسل والحمل (٨)
   الأجسام الطويلة في dx/dx-abdo.js وتُحمَّل عند فتح البطاقة.
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الهضم ---------------- */

DISEASES.push({
  id: 'gerd', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'ارتجاع المريء', en: 'Gastro-oesophageal reflux disease (GERD)' },
  organs: ['esophagus', 'stomach', 'diaphragm', 'pharynx'],
  aliases: ['الارتجاع المريئي', 'التهاب المريء'],
  short: {
    ar: 'صمّام أسفل المريء يرتخي أكثر مما ينبغي فيصعد حمض المعدة إلى أعلى، ويحرق بطانة المريء التي لا تحتمل الحموضة.',
    en: 'The valve at the lower end of the oesophagus relaxes too much, so stomach acid rises and burns a lining that is not built to withstand it.'
  },
  keywords: { ar: ['حرقة المعدة', 'حموضة', 'ارتجاع', 'حرقان الصدر'], en: ['GERD', 'heartburn', 'acid reflux'] }
});

DISEASES.push({
  id: 'peptic-ulcer', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'قرحة المعدة والاثني عشر', en: 'Peptic ulcer (stomach and duodenal ulcer)' },
  organs: ['stomach', 'small-intestine', 'esophagus', 'villi'],
  aliases: ['قرحة المعدة'],
  short: {
    ar: 'تآكل يصنع حفرة مكشوفة في جدار المعدة أو أول الأمعاء الدقيقة، حين تنهار الطبقة المخاطية التي تحمي الجدار من حمضه.',
    en: 'An erosion that opens a raw crater in the wall of the stomach or the first part of the small intestine, when the mucus layer that shields the wall from its own acid breaks down.'
  },
  keywords: { ar: ['قرحة', 'جرثومة المعدة', 'ألم فم المعدة'], en: ['peptic ulcer', 'H pylori', 'duodenal ulcer'] }
});

DISEASES.push({
  id: 'appendicitis', tier: 'common', group: 'digestion', emergency: true,
  name: { ar: 'التهاب الزائدة الدودية', en: 'Appendicitis' },
  organs: ['appendix', 'large-intestine', 'small-intestine', 'serous-membranes'],
  aliases: ['التهاب الزائدة الحادّ', 'انفجار الزائدة والتهاب البريتون', 'خرّاج حول الزائدة'],
  short: {
    ar: 'انسداد فتحة الزائدة الدودية يحبس داخلها المخاط والجراثيم، فتنتفخ ويرتفع ضغطها وقد تنفجر خلال يوم أو يومين.',
    en: 'The mouth of the appendix becomes blocked, trapping mucus and bacteria inside; it swells, its pressure rises, and it may burst within a day or two.'
  },
  keywords: { ar: ['الزائدة', 'ألم الجانب الأيمن', 'الأعور'], en: ['appendicitis', 'appendix', 'right iliac fossa pain'] }
});

DISEASES.push({
  id: 'gallstones', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'حصى المرارة', en: 'Gallstones and gallbladder disease' },
  organs: ['gallbladder', 'liver', 'pancreas', 'liver-lobule'],
  aliases: ['حصوات المرارة', 'التهاب المرارة', 'المغص المراري'],
  short: {
    ar: 'حصى تتكوّن من الكوليسترول أو أصباغ الصفراء داخل المرارة، وتظل صامتة سنوات حتى تسدّ مخرجها فيبدأ المغص.',
    en: 'Stones of cholesterol or bile pigment form inside the gallbladder and stay silent for years, until one blocks its outlet and the colic begins.'
  },
  keywords: { ar: ['حصى المرارة', 'مغص مراري', 'التهاب المرارة'], en: ['gallstones', 'biliary colic', 'cholecystitis'] }
});

DISEASES.push({
  id: 'cirrhosis', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'تشمّع الكبد', en: 'Cirrhosis of the liver' },
  organs: ['liver', 'liver-lobule', 'spleen', 'vessel-types'],
  aliases: ['تشمع الكبد', 'تليّف الكبد', 'ارتفاع ضغط الوريد البابي'],
  short: {
    ar: 'أذى متكرّر على مدى سنوات يستبدل نسيج الكبد الحيّ بندبات قاسية، فيتقلّص ويقسو ويعجز عن أداء وظائفه.',
    en: 'Years of repeated injury replace living liver tissue with hard scar, so the organ shrinks, stiffens and can no longer do its work.'
  },
  keywords: { ar: ['تشمع', 'تليف الكبد', 'استسقاء', 'دوالي المريء'], en: ['cirrhosis', 'liver scarring', 'portal hypertension'] }
});

DISEASES.push({
  id: 'viral-hepatitis', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'التهاب الكبد الفيروسي', en: 'Viral hepatitis' },
  organs: ['liver', 'liver-lobule', 'immunity', 'blood'],
  aliases: ['التهاب الكبد الفيروسي'],
  short: {
    ar: 'فيروسات تصيب خلايا الكبد فتلتهب، بعضها يمرّ ويشفى وبعضها يبقى سنوات صامتاً ويقود إلى تشمّع أو سرطان.',
    en: 'Viruses infect liver cells and inflame them; some pass and heal, while others stay silent for years and lead on to cirrhosis or cancer.'
  },
  keywords: { ar: ['التهاب كبد', 'أ ب ج', 'صفار', 'يرقان'], en: ['hepatitis', 'hepatitis B', 'hepatitis C', 'jaundice'] }
});

DISEASES.push({
  id: 'ibs', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'القولون العصبي', en: 'Irritable bowel syndrome (IBS)' },
  organs: ['large-intestine', 'small-intestine', 'autonomic', 'muscle-types'],
  aliases: ['القولون العصبي', 'متلازمة القولون العصبي'],
  short: {
    ar: 'اضطراب في طريقة عمل الأمعاء وإحساسها لا في بنيتها، فالفحوص تخرج سليمة بينما الألم والانتفاخ حقيقيان تماماً.',
    en: 'A disorder of how the bowel works and feels rather than of its structure: the tests come back normal while the pain and bloating are entirely real.'
  },
  keywords: { ar: ['قولون عصبي', 'انتفاخ', 'غازات', 'إسهال وإمساك'], en: ['IBS', 'irritable bowel', 'bloating'] }
});

DISEASES.push({
  id: 'hemorrhoids', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'البواسير', en: 'Haemorrhoids (piles)' },
  organs: ['anorectal', 'large-intestine', 'vessel-types'],
  aliases: ['البواسير'],
  short: {
    ar: 'وسائد وريدية طبيعية في نهاية القناة الشرجية تحتقن وتتضخّم مع الشدّ المتكرّر، فتنزف أو تنزل أو توجع.',
    en: 'Normal vein cushions at the end of the anal canal become congested and enlarged with repeated straining, then bleed, prolapse or hurt.'
  },
  keywords: { ar: ['بواسير', 'دم مع البراز', 'إمساك'], en: ['haemorrhoids', 'piles', 'rectal bleeding'] }
});

/* ---------------- المسالك البولية ---------------- */

DISEASES.push({
  id: 'uti', tier: 'common', group: 'urinary', emergency: false,
  name: { ar: 'التهاب المسالك البولية', en: 'Urinary tract infection (UTI)' },
  organs: ['bladder', 'urethra', 'kidneys', 'ureter'],
  aliases: ['التهاب المثانة', 'التهاب الإحليل'],
  short: {
    ar: 'جراثيم تصعد من الخارج عبر مجرى البول إلى المثانة فتلتهب بطانتها، وقد تواصل صعودها إلى الكلية.',
    en: 'Bacteria travel up the urethra into the bladder and inflame its lining, and may keep climbing until they reach the kidney.'
  },
  keywords: { ar: ['حرقان البول', 'التهاب بولي', 'التهاب المثانة'], en: ['UTI', 'cystitis', 'pyelonephritis'] }
});

DISEASES.push({
  id: 'ckd', tier: 'common', group: 'urinary', emergency: false,
  name: { ar: 'الفشل الكلوي المزمن', en: 'Chronic kidney disease' },
  organs: ['kidneys', 'nephron', 'blood', 'vessel-types'],
  aliases: ['الفشل الكلوي المزمن', 'اعتلال الكلية السكري'],
  short: {
    ar: 'تراجع بطيء لا رجعة فيه في قدرة الكلى على التصفية، يمضي سنوات بلا أعراض تُذكر حتى يبلغ مرحلة متقدّمة.',
    en: 'A slow, irreversible decline in the kidneys ability to filter, which runs for years with almost no symptoms until it is already advanced.'
  },
  keywords: { ar: ['فشل كلوي', 'غسيل الكلى', 'كرياتينين'], en: ['chronic kidney disease', 'CKD', 'dialysis'] }
});

DISEASES.push({
  id: 'bph', tier: 'common', group: 'urinary', emergency: false,
  name: { ar: 'تضخّم البروستاتا الحميد', en: 'Benign prostatic hyperplasia (BPH)' },
  organs: ['prostate', 'bladder', 'urethra', 'male-reproductive'],
  aliases: ['تضخم البروستاتا الحميد'],
  short: {
    ar: 'نمو حميد في غدّة البروستاتا مع تقدّم العمر يضغط على مجرى البول المارّ في وسطها، فيضيق ويتعثّر التبوّل.',
    en: 'A benign enlargement of the prostate with age presses on the urinary passage running through its middle, narrowing it and making passing urine difficult.'
  },
  keywords: { ar: ['البروستاتا', 'تقطّع البول', 'التبوّل الليلي'], en: ['BPH', 'enlarged prostate', 'nocturia'] }
});

DISEASES.push({
  id: 'urinary-incontinence', tier: 'common', group: 'urinary', emergency: false,
  name: { ar: 'سلس البول', en: 'Urinary incontinence' },
  organs: ['bladder', 'urethra', 'pelvis', 'autonomic'],
  aliases: ['سلس البول'],
  short: {
    ar: 'تسرّب بول لا إرادي: إما مع ضحكة أو سعال أو حمل ثقيل، وإما مع إلحاح مفاجئ لا يمهل صاحبه حتى يصل.',
    en: 'Involuntary leakage of urine: either with a laugh, a cough or lifting something heavy, or with a sudden urge that gives no time to reach the toilet.'
  },
  keywords: { ar: ['سلس', 'تسرّب البول', 'إلحاح'], en: ['incontinence', 'overactive bladder', 'stress incontinence'] }
});

/* ---------------- التناسل والحمل ---------------- */

DISEASES.push({
  id: 'pcos', tier: 'common', group: 'repro', emergency: false,
  name: { ar: 'تكيّس المبايض', en: 'Polycystic ovary syndrome (PCOS)' },
  organs: ['ovary', 'female-reproductive', 'ovum', 'pituitary'],
  aliases: ['تكيس المبايض'],
  short: {
    ar: 'خلل هرموني يعطّل نضج البويضة شهرياً، فتتوقّف الإباضة أو تتباعد، وترتفع الهرمونات الذكرية ويضطرب سكّر الدم.',
    en: 'A hormonal disorder that stops the egg maturing each month, so ovulation becomes irregular or absent, male hormones rise and blood sugar handling is disturbed.'
  },
  keywords: { ar: ['تكيس المبايض', 'اضطراب الدورة', 'شعر زائد'], en: ['PCOS', 'polycystic ovaries', 'anovulation'] }
});

DISEASES.push({
  id: 'endometriosis', tier: 'common', group: 'repro', emergency: false,
  name: { ar: 'بطانة الرحم المهاجرة', en: 'Endometriosis' },
  organs: ['female-reproductive', 'ovary', 'serous-membranes', 'fertilization'],
  aliases: ['بطانة الرحم المهاجرة'],
  short: {
    ar: 'نسيج يشبه بطانة الرحم ينمو خارجه، وينزف مع كل دورة في مكان لا مخرج له، فيسبّب التهاباً والتصاقات وألماً.',
    en: 'Tissue resembling the womb lining grows outside it and bleeds with every cycle in a place with no way out, causing inflammation, adhesions and pain.'
  },
  keywords: { ar: ['بطانة مهاجرة', 'ألم الدورة', 'انتباذ بطاني'], en: ['endometriosis', 'pelvic pain', 'dysmenorrhoea'] }
});

DISEASES.push({
  id: 'breast-cancer', tier: 'common', group: 'cancer', emergency: false,
  name: { ar: 'سرطان الثدي', en: 'Breast cancer' },
  organs: ['breast', 'lymph-node', 'lymphatic', 'mitosis'],
  aliases: ['سرطان الثدي'],
  short: {
    ar: 'انقسام خارج عن السيطرة لخلايا في قنوات الحليب أو فصوصه، وأشيع سرطانات النساء وأكثرها استجابة للاكتشاف المبكر.',
    en: 'Uncontrolled division of cells in the milk ducts or lobules; the commonest cancer in women, and the one that responds best to early detection.'
  },
  keywords: { ar: ['سرطان الثدي', 'كتلة في الثدي', 'ماموغرام'], en: ['breast cancer', 'breast lump', 'mammogram'] }
});

DISEASES.push({
  id: 'uterine-fibroids', tier: 'common', group: 'repro', emergency: false,
  name: { ar: 'الأورام الليفية الرحمية', en: 'Uterine fibroids' },
  organs: ['female-reproductive', 'muscle-types', 'blood'],
  aliases: ['الأورام الليفية الرحمية'],
  short: {
    ar: 'أورام حميدة من عضل الرحم نفسه، شائعة جداً وأكثرها صامت، ولا تسبّب مشكلة إلا بحسب حجمها وموضعها من الجدار.',
    en: 'Benign tumours of the womb muscle itself, very common and mostly silent; they only cause trouble according to their size and their position in the wall.'
  },
  keywords: { ar: ['ليفية الرحم', 'نزف غزير', 'أورام حميدة'], en: ['fibroids', 'myoma', 'heavy periods'] }
});

DISEASES.push({
  id: 'preeclampsia', tier: 'common', group: 'repro', emergency: true,
  name: { ar: 'تسمّم الحمل', en: 'Pre-eclampsia' },
  organs: ['pregnancy', 'kidneys', 'liver', 'vessel-types'],
  aliases: ['تسمم الحمل'],
  short: {
    ar: 'ارتفاع ضغط يظهر بعد منتصف الحمل مع تسرّب بروتين في البول، مصدره خلل في مشيمة الحمل نفسها.',
    en: 'High blood pressure appearing after mid-pregnancy together with protein leaking into the urine, arising from a fault in the placenta itself.'
  },
  keywords: { ar: ['تسمم حمل', 'ضغط الحمل', 'تشنج الحمل'], en: ['pre-eclampsia', 'eclampsia', 'pregnancy hypertension'] }
});

DISEASES.push({
  id: 'gestational-diabetes', tier: 'common', group: 'repro', emergency: false,
  name: { ar: 'سكّري الحمل', en: 'Gestational diabetes' },
  organs: ['pregnancy', 'pancreas', 'embryo', 'blood'],
  aliases: ['سكري الحمل'],
  short: {
    ar: 'ارتفاع سكّر الدم يظهر أول مرة أثناء الحمل، حين تعجز البنكرياس عن مجاراة مقاومة الأنسولين التي تصنعها هرمونات المشيمة.',
    en: 'Blood sugar that rises for the first time during pregnancy, when the pancreas cannot keep up with the insulin resistance created by placental hormones.'
  },
  keywords: { ar: ['سكري الحمل', 'سكر الحامل', 'تحليل السكر'], en: ['gestational diabetes', 'GDM', 'glucose tolerance test'] }
});

DISEASES.push({
  id: 'infertility', tier: 'common', group: 'repro', emergency: false,
  name: { ar: 'العقم', en: 'Infertility' },
  organs: ['fertilization', 'ovary', 'testis', 'female-reproductive', 'male-reproductive'],
  aliases: ['العقم بعامل ذكري', 'العقم من خلل الانقسام', 'انسداد قناة البيض'],
  short: {
    ar: 'عدم حدوث حمل بعد سنة من محاولة منتظمة بلا وسيلة منع. السبب يكون في الرجل في نحو نصف الحالات، فالتقييم يشمل الطرفين معاً.',
    en: 'No pregnancy after a year of regular attempts without contraception. In about half of couples the cause lies with the man, so assessment covers both partners together.'
  },
  keywords: { ar: ['العقم', 'تأخر الإنجاب', 'تحليل السائل المنوي'], en: ['infertility', 'subfertility', 'semen analysis'] }
});

DISEASES.push({
  id: 'erectile-dysfunction', tier: 'common', group: 'repro', emergency: false,
  name: { ar: 'ضعف الانتصاب', en: 'Erectile dysfunction' },
  organs: ['erection', 'male-reproductive', 'vessel-types', 'autonomic'],
  aliases: ['ضعف الانتصاب'],
  short: {
    ar: 'عجز متكرّر عن بلوغ انتصاب كافٍ أو الحفاظ عليه. أشيع أسبابه وعائي، وقد يكون أول إنذار بمرض في شرايين القلب قبل ظهوره هناك.',
    en: 'A repeated inability to reach or keep an erection. Its commonest causes are vascular, and it can be the first warning of heart artery disease before it shows in the heart.'
  },
  keywords: { ar: ['ضعف الانتصاب', 'العجز الجنسي', 'شرايين'], en: ['erectile dysfunction', 'ED', 'impotence'] }
});

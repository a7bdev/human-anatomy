/* ============================================================
   موسوعة الأمراض — فهرس الأورام والسرطانات
   dx/index-onco.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-onco.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الصدر والجهاز الهضمي ---------------- */

DISEASES.push({
  id: 'lung-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان الرئة', en: 'Lung cancer' },
  short: {
    ar: 'ورم خبيث ينشأ في بطانة الشعب الهوائية أو في نسيج الرئة. أكبر سبب له التدخين، وصار يُكتشف أبكر بكثير منذ دخل التصوير المقطعي منخفض الجرعة في فحص المدخنين.',
    en: 'A malignant growth arising in the lining of the airways or in lung tissue. Smoking is its largest cause, and it is now found far earlier since low-dose CT screening of smokers began.'
  },
  organs: ['lungs', 'bronchi', 'alveoli', 'lymph-node', 'mitosis', 'dna'],
  aliases: ['سرطان الرئة'],
  keywords: { ar: ['ورم الرئة', 'سعال مزمن', 'التدخين'], en: ['lung cancer', 'NSCLC', 'chronic cough'] }
});

DISEASES.push({
  id: 'colorectal-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان القولون والمستقيم', en: 'Colorectal cancer' },
  short: {
    ar: 'يبدأ في الغالب كسليلة صغيرة حميدة تتحوّل عبر سنوات طويلة، ولهذا فإن إزالتها أثناء تنظير القولون تمنع السرطان قبل أن ينشأ، والمكتشف مبكراً يُشفى في أغلب الحالات.',
    en: 'It usually starts as a small benign polyp that changes over many years, which is why removing it during a colonoscopy prevents the cancer before it begins; caught early, most cases are cured.'
  },
  organs: ['large-intestine', 'anorectal', 'lymph-node', 'liver', 'mitosis', 'dna'],
  aliases: ['سرطان القولون'],
  keywords: { ar: ['سرطان الأمعاء الغليظة', 'سليلة القولون', 'تنظير القولون'], en: ['colon cancer', 'rectal cancer', 'colonoscopy', 'polyp'] }
});

DISEASES.push({
  id: 'stomach-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان المعدة', en: 'Stomach (gastric) cancer' },
  short: {
    ar: 'ورم ينشأ في بطانة المعدة، وأشهر ما يهيّئ له عدوى جرثومة المعدة المزمنة. أعراضه المبكرة تشبه عسر الهضم العادي، ولهذا يفيد التنظير عند من طال عسر هضمه.',
    en: 'A tumour arising in the stomach lining, most often prepared for by chronic Helicobacter infection. Its early symptoms resemble ordinary indigestion, which is why endoscopy helps when indigestion persists.'
  },
  organs: ['stomach', 'esophagus', 'lymph-node', 'mitosis', 'dna'],
  aliases: ['سرطان المعدة'],
  keywords: { ar: ['ورم المعدة', 'جرثومة المعدة', 'عسر هضم مستمر'], en: ['gastric cancer', 'H pylori', 'persistent indigestion'] }
});

DISEASES.push({
  id: 'liver-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان الكبد', en: 'Liver cancer' },
  short: {
    ar: 'ورم ينشأ غالباً في كبد سبق أن تليّف من التهاب فيروسي مزمن أو من الكبد الدهني، ولهذا فإن متابعة أصحاب التليّف بالموجات الصوتية تكشفه وهو صغير قابل للعلاج.',
    en: 'A tumour that usually arises in a liver already scarred by chronic viral hepatitis or fatty liver disease, which is why ultrasound follow-up of people with cirrhosis catches it while it is small and treatable.'
  },
  organs: ['liver', 'liver-lobule', 'gallbladder', 'lymph-node', 'mitosis', 'dna'],
  aliases: ['سرطان الكبد'],
  keywords: { ar: ['ورم الكبد', 'تليّف الكبد', 'الالتهاب الكبدي المزمن'], en: ['liver cancer', 'hepatocellular carcinoma', 'cirrhosis'] }
});

DISEASES.push({
  id: 'pancreatic-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان البنكرياس', en: 'Pancreatic cancer' },
  short: {
    ar: 'ورم يقع عميقاً خلف المعدة فلا يعطي أعراضاً مبكرة واضحة، وأشهر علامة تلفت إليه اصفرار العينين بلا ألم عند شخص نقص وزنه من غير سبب.',
    en: 'A tumour lying deep behind the stomach, so it gives no clear early symptoms; the best-known sign that draws attention to it is painless yellowing of the eyes in someone losing weight for no reason.'
  },
  organs: ['pancreas', 'liver', 'gallbladder', 'lymph-node', 'mitosis', 'dna'],
  aliases: ['سرطان البنكرياس'],
  keywords: { ar: ['ورم البنكرياس', 'يرقان بلا ألم', 'نقص وزن'], en: ['pancreatic cancer', 'painless jaundice', 'weight loss'] }
});

DISEASES.push({
  id: 'esophageal-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان المريء', en: 'Oesophageal cancer' },
  short: {
    ar: 'ورم في أنبوب البلع تكون أوّل علامته أن الطعام الصلب صار يعلق في الصدر. الارتجاع المزمن والتدخين أهمّ عوامل خطره، ويُكشف بالتنظير بسهولة.',
    en: 'A tumour of the swallowing tube whose first sign is that solid food begins to stick in the chest. Chronic reflux and smoking are its main risk factors, and endoscopy finds it easily.'
  },
  organs: ['esophagus', 'stomach', 'pharynx', 'lymph-node', 'mitosis'],
  aliases: ['سرطان المريء'],
  keywords: { ar: ['صعوبة البلع', 'ورم المريء', 'مريء باريت'], en: ['esophageal cancer', 'dysphagia', 'Barrett oesophagus'] }
});

/* ---------------- الجهاز البولي والتناسلي ---------------- */

DISEASES.push({
  id: 'prostate-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان البروستاتا', en: 'Prostate cancer' },
  short: {
    ar: 'أشيع سرطان عند الرجال بعد سنّ الخمسين، وكثير منه بطيء جداً لا يهدّد صاحبه، ولهذا صار القرار الأهمّ تمييز ما يحتاج علاجاً ممّا يكفيه المتابعة.',
    en: 'The commonest cancer in men after fifty, and much of it is so slow that it never threatens its owner; the key decision is therefore telling apart what needs treatment from what only needs watching.'
  },
  organs: ['prostate', 'bladder', 'urethra', 'skeleton', 'lymph-node', 'mitosis'],
  aliases: ['سرطان البروستاتا'],
  keywords: { ar: ['ورم البروستاتا', 'تحليل PSA', 'المراقبة النشطة'], en: ['prostate cancer', 'PSA', 'active surveillance'] }
});

DISEASES.push({
  id: 'bladder-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان المثانة', en: 'Bladder cancer' },
  short: {
    ar: 'ورم في بطانة المثانة، وعلامته الأولى في الغالب دم في البول بلا ألم إطلاقاً. التدخين سببه الأوّل، وأغلب حالاته سطحية تُعالج بالمنظار.',
    en: 'A tumour of the bladder lining whose first sign is usually blood in the urine with no pain at all. Smoking is its leading cause, and most cases are superficial and treated through a scope.'
  },
  organs: ['bladder', 'ureter', 'kidneys', 'urethra', 'lymph-node', 'mitosis'],
  aliases: ['سرطان المثانة'],
  keywords: { ar: ['دم في البول', 'ورم المثانة', 'تنظير المثانة'], en: ['bladder cancer', 'haematuria', 'cystoscopy'] }
});

DISEASES.push({
  id: 'kidney-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان الكلية', en: 'Kidney cancer' },
  short: {
    ar: 'ورم في نسيج الكلية، وأغلب حالاته اليوم تُكتشف مصادفةً في تصوير طُلب لسبب آخر وهي ما تزال صغيرة، وهذا أفضل ما يمكن أن يحدث لها.',
    en: 'A tumour in the kidney tissue; most cases today are found by chance on a scan requested for another reason while they are still small, which is the best thing that can happen to them.'
  },
  organs: ['kidneys', 'nephron', 'ureter', 'lymph-node', 'mitosis', 'dna'],
  aliases: ['سرطان الكلية'],
  keywords: { ar: ['ورم الكلى', 'كتلة كلوية', 'دم في البول'], en: ['kidney cancer', 'renal cell carcinoma', 'renal mass'] }
});

DISEASES.push({
  id: 'thyroid-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان الغدة الدرقية', en: 'Thyroid cancer' },
  short: {
    ar: 'من ألطف السرطانات سلوكاً وأعلاها قابليةً للشفاء، وأغلبه يظهر كعقيدة صامتة في مقدّمة الرقبة تُكتشف بالصدفة أو باللمس.',
    en: 'One of the gentlest cancers in behaviour and among the most curable; most of it appears as a silent nodule at the front of the neck, found by chance or by touch.'
  },
  organs: ['thyroid', 'parathyroid', 'larynx', 'lymph-node', 'mitosis'],
  aliases: ['سرطان الغدة الدرقية'],
  keywords: { ar: ['عقيدة درقية', 'كتلة في الرقبة', 'ورم الدرقية'], en: ['thyroid cancer', 'thyroid nodule', 'neck lump'] }
});

DISEASES.push({
  id: 'cervical-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان عنق الرحم', en: 'Cervical cancer' },
  short: {
    ar: 'من أكثر السرطانات قابليةً للمنع: سببه فيروس ينتقل بالاتصال، ولقاحه يقي منه، ومسحة عنق الرحم تكشف التغيّرات قبل أن تصير سرطاناً بسنوات.',
    en: 'One of the most preventable cancers: it is caused by a sexually transmitted virus, a vaccine protects against it, and a cervical smear detects the changes years before they become cancer.'
  },
  organs: ['female-reproductive', 'immunity', 'lymph-node', 'mitosis', 'dna'],
  aliases: ['سرطان عنق الرحم'],
  keywords: { ar: ['فيروس الورم الحليمي', 'مسحة عنق الرحم', 'لقاح HPV'], en: ['cervical cancer', 'HPV', 'Pap smear'] }
});

DISEASES.push({
  id: 'endometrial-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان بطانة الرحم', en: 'Endometrial (uterine) cancer' },
  short: {
    ar: 'ورم في بطانة الرحم، وعلامته الأشهر نزف بعد انقطاع الطمث. وهذه العلامة تظهر مبكّراً، ولذلك يُكتشف كثير منه في مرحلة مبكرة قابلة للشفاء.',
    en: 'A tumour of the womb lining whose best-known sign is bleeding after the menopause. Because that sign appears early, much of it is found at an early, curable stage.'
  },
  organs: ['female-reproductive', 'ovary', 'lymph-node', 'mitosis', 'dna'],
  aliases: ['سرطان بطانة الرحم'],
  keywords: { ar: ['نزف بعد سنّ اليأس', 'ورم الرحم', 'سرطان الرحم'], en: ['endometrial cancer', 'uterine cancer', 'postmenopausal bleeding'] }
});

DISEASES.push({
  id: 'ovarian-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان المبيض', en: 'Ovarian cancer' },
  short: {
    ar: 'ورم يقع في عمق الحوض فيتأخّر ظهوره، وأعراضه المبكرة انتفاخ وامتلاء سريع وتغيّر في الشهية تُنسب عادةً للقولون، وتستحق الفحص إذا استمرّت أسابيع.',
    en: 'A tumour lying deep in the pelvis, so it declares itself late; its early symptoms are bloating, early fullness and appetite change, usually blamed on the bowel, and worth checking if they persist for weeks.'
  },
  organs: ['ovary', 'female-reproductive', 'serous-membranes', 'lymph-node', 'mitosis'],
  aliases: ['سرطان المبيض'],
  keywords: { ar: ['ورم المبيض', 'انتفاخ مستمر', 'كتلة في الحوض'], en: ['ovarian cancer', 'persistent bloating', 'pelvic mass'] }
});

DISEASES.push({
  id: 'testicular-cancer', group: 'cancer', tier: 'rare', emergency: false,
  name: { ar: 'سرطان الخصية', en: 'Testicular cancer' },
  short: {
    ar: 'أشيع سرطان عند الشباب بين الخامسة عشرة والأربعين، وهو من أكثر السرطانات استجابةً للعلاج حتى حين ينتشر، وأوّل علامته كتلة غير مؤلمة يلمسها الرجل بنفسه.',
    en: 'The commonest cancer in men between fifteen and forty, and among the most treatable even when it has spread; its first sign is a painless lump the man finds himself.'
  },
  organs: ['testis', 'male-reproductive', 'lymph-node', 'meiosis', 'mitosis'],
  aliases: ['سرطان الخصية'],
  keywords: { ar: ['كتلة في الخصية', 'الفحص الذاتي للخصية', 'ورم الخصية'], en: ['testicular cancer', 'testicular lump', 'self-examination'] }
});

/* ---------------- الدماغ والعظام والفم ---------------- */

DISEASES.push({
  id: 'brain-tumor', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'أورام الدماغ', en: 'Brain tumours' },
  short: {
    ar: 'أورام تنشأ داخل الجمجمة، منها الحميد ومنها الخبيث، وأثرها يأتي من موضعها ومن ضيق المكان حولها لا من حجمها وحده.',
    en: 'Tumours arising inside the skull, some benign and some malignant; their effect comes from where they sit and from the tight space around them, not from size alone.'
  },
  organs: ['brain', 'meninges', 'bbb', 'cortex-map', 'skull', 'mitosis'],
  aliases: ['ورم الدماغ'],
  keywords: { ar: ['ورم في المخ', 'صداع مع تقيؤ', 'نوبة صرع أولى'], en: ['brain tumour', 'glioma', 'meningioma', 'first seizure'] }
});

DISEASES.push({
  id: 'bone-cancer', group: 'cancer', tier: 'rare', emergency: false,
  name: { ar: 'سرطان العظام', en: 'Bone cancer' },
  short: {
    ar: 'أورام تنشأ في العظم نفسه وهي قليلة الحدوث، وأغلب ما يُكتشف من أورام في العظام هو انتقال ورم من عضو آخر لا ورم عظمي أصلي.',
    en: 'Tumours arising in the bone itself are uncommon; most tumours found in bone are the spread of a cancer from another organ rather than a primary bone tumour.'
  },
  organs: ['skeleton', 'bone-inside', 'growth-plate', 'lungs', 'mitosis'],
  aliases: ['سرطان العظام'],
  keywords: { ar: ['ورم عظمي', 'ألم عظم ليلي', 'ساركوما'], en: ['bone cancer', 'osteosarcoma', 'sarcoma', 'night bone pain'] }
});

DISEASES.push({
  id: 'oral-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان الفم والبلعوم', en: 'Mouth and throat cancer' },
  short: {
    ar: 'ورم في اللسان أو الشفة أو أرضية الفم أو البلعوم، يسبقه غالباً تقرّح أو بقعة بيضاء أو حمراء لا تشفى. والفم مكان يُرى ويُلمس، فالكشف المبكر فيه ممكن.',
    en: 'A tumour of the tongue, lip, floor of the mouth or throat, usually preceded by an ulcer or a white or red patch that does not heal. The mouth can be seen and felt, so early detection is possible.'
  },
  organs: ['tongue', 'lips', 'pharynx', 'salivary-glands', 'teeth', 'lymph-node', 'mitosis'],
  aliases: ['سرطان الشفة'],
  keywords: { ar: ['قرحة لا تشفى', 'بقعة بيضاء في الفم', 'سرطان اللسان'], en: ['oral cancer', 'mouth ulcer that does not heal', 'leukoplakia'] }
});

/* ---------------- سرطانات الدم والجهاز اللمفاوي ---------------- */

DISEASES.push({
  id: 'lymphoma', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'اللمفوما (سرطان الجهاز اللمفاوي)', en: 'Lymphoma' },
  short: {
    ar: 'سرطان يبدأ في خلايا الجهاز اللمفاوي نفسه، وعلامته الأشهر عقدة متضخّمة غير مؤلمة لا تصغر مع الوقت، وكثير من أنواعه قابل للشفاء التامّ.',
    en: 'A cancer starting in the cells of the lymphatic system itself; its best-known sign is a painless enlarged node that does not shrink with time, and many of its types are fully curable.'
  },
  organs: ['lymph-node', 'lymphatic', 'spleen', 'immunity', 'blood', 'bone-inside'],
  aliases: ['اللمفوما'],
  keywords: { ar: ['ورم الغدد اللمفاوية', 'تضخّم عقدة', 'تعرّق ليلي'], en: ['lymphoma', 'Hodgkin', 'night sweats', 'swollen node'] }
});

DISEASES.push({
  id: 'multiple-myeloma', group: 'cancer', tier: 'rare', emergency: false,
  name: { ar: 'الورم النقوي المتعدّد', en: 'Multiple myeloma' },
  short: {
    ar: 'سرطان في خلايا البلازما داخل نخاع العظم، يُضعف العظم ويُتعب الكلى ويقلّل المناعة، ويُكتشف كثير منه من تحليل دم روتيني خرج غير طبيعي.',
    en: 'A cancer of the plasma cells inside the bone marrow that weakens bone, strains the kidneys and lowers immunity; much of it is found from a routine blood test that came back abnormal.'
  },
  organs: ['bone-inside', 'blood', 'skeleton', 'immunity', 'kidneys', 'mitosis'],
  aliases: ['الورم النقوي المتعدّد'],
  keywords: { ar: ['ميلوما', 'ألم ظهر مع فقر دم', 'ارتفاع الكالسيوم'], en: ['myeloma', 'plasma cell cancer', 'bone pain with anaemia'] }
});

DISEASES.push({
  id: 'leukemia', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'ابيضاض الدم (اللوكيميا)', en: 'Leukaemia' },
  short: {
    ar: 'سرطان يبدأ في نخاع العظم فيغرق الدم بخلايا بيضاء غير ناضجة، ومنه حادّ سريع يحتاج علاجاً عاجلاً، ومنه مزمن قد يُراقَب سنوات بلا علاج.',
    en: 'A cancer starting in the bone marrow that floods the blood with immature white cells; some forms are acute and need urgent treatment, others chronic and may be watched for years untreated.'
  },
  organs: ['blood', 'bone-inside', 'immunity', 'lymph-node', 'spleen', 'dna'],
  aliases: ['اللوكيميا', 'سرطان الدم'],
  keywords: { ar: ['سرطان الدم', 'شحوب وكدمات', 'نخاع العظم'], en: ['leukaemia', 'leukemia', 'bruising and pallor', 'bone marrow'] }
});

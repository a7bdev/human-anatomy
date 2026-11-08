/* ============================================================
   موسوعة الأمراض — فهرس الغدد الصمّاء والمناعة
   dx/index-endo.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-endo.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- السكّري ---------------- */

DISEASES.push({
  id: 'type1-diabetes', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'السكّري من النوع الأول', en: 'Type 1 diabetes' },
  short: {
    ar: 'جهاز المناعة يهاجم خلايا البنكرياس التي تصنع الإنسولين حتى يتلفها، فيتوقّف الجسم عن إنتاجه ويصير تعويضه ضرورة يومية لا غنى عنها للحياة.',
    en: 'The immune system attacks and destroys the pancreatic cells that make insulin, so the body stops producing it and replacing it becomes a daily necessity for life.'
  },
  organs: ['pancreas', 'immunity', 'retina', 'nephron', 'peripheral-nerve', 'blood'],
  aliases: [],
  keywords: { ar: ['سكري الأطفال', 'سكري النوع الأول', 'الحماض الكيتوني'], en: ['type 1 diabetes', 'T1D', 'juvenile diabetes', 'insulin dependent'] }
});

DISEASES.push({
  id: 'type2-diabetes', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'السكّري من النوع الثاني', en: 'Type 2 diabetes' },
  short: {
    ar: 'الخلايا تقاوم الإنسولين فيرتفع السكر في الدم ببطء، وقد يمضي سنوات بلا عرض واحد بينما يتلف في صمت أصغر الأوعية في العين والكلية والأعصاب.',
    en: 'The cells resist insulin so blood sugar rises slowly, and years can pass without a single symptom while the smallest vessels of the eye, kidney and nerves are quietly damaged.'
  },
  organs: ['pancreas', 'retina', 'nephron', 'peripheral-nerve', 'vessel-types', 'coronary', 'autonomic', 'liver'],
  aliases: ['داء السكري', 'الاعتلال العصبي السكّري', 'اعتلال الشعيرات السكّري'],
  keywords: { ar: ['السكري', 'ارتفاع السكر', 'مقاومة الإنسولين', 'التراكمي'], en: ['type 2 diabetes', 'T2D', 'insulin resistance', 'HbA1c'] }
});

/* ---------------- الغدة الدرقية ---------------- */

DISEASES.push({
  id: 'hypothyroidism', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'قصور الغدة الدرقية', en: 'Hypothyroidism (underactive thyroid)' },
  short: {
    ar: 'الغدة الدرقية تنتج أقلّ ممّا يحتاجه الجسم، فيبطؤ كلّ شيء: الطاقة والنبض والهضم والفكر والمزاج، ويُنسب هذا كثيراً إلى الكسل أو تقدّم العمر.',
    en: 'The thyroid makes less than the body needs, so everything slows down: energy, pulse, digestion, thinking and mood, and it is often blamed on laziness or ageing.'
  },
  organs: ['thyroid', 'pituitary', 'heart', 'skin', 'brain'],
  aliases: ['قصور الغدة الدرقية'],
  keywords: { ar: ['خمول الدرقية', 'كسل الغدة', 'الثيروكسين'], en: ['hypothyroidism', 'underactive thyroid', 'TSH', 'thyroxine'] }
});

DISEASES.push({
  id: 'hyperthyroidism', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'فرط نشاط الغدة الدرقية', en: 'Hyperthyroidism (overactive thyroid)' },
  short: {
    ar: 'الغدة تفرز أكثر ممّا يلزم فيتسارع الجسم كلّه: خفقان ورجفة وحرارة ونقص وزن مع شهية مفتوحة، وقلق لا يجد صاحبه له سبباً.',
    en: 'The gland secretes more than is needed and the whole body speeds up: palpitations, tremor, feeling hot, weight loss despite a good appetite, and anxiety with no apparent cause.'
  },
  organs: ['thyroid', 'heart', 'eye', 'pituitary', 'muscles'],
  aliases: ['فرط نشاط الغدة الدرقية'],
  keywords: { ar: ['نشاط الدرقية', 'جريفز', 'جحوظ العين', 'خفقان'], en: ['hyperthyroidism', 'Graves disease', 'thyrotoxicosis'] }
});

DISEASES.push({
  id: 'hashimoto', group: 'autoimmune', tier: 'common', emergency: false,
  name: { ar: 'التهاب الدرقية هاشيموتو', en: 'Hashimoto thyroiditis' },
  short: {
    ar: 'مناعة الجسم تهاجم غدّته الدرقية سنوات طويلة بهدوء حتى تستهلكها، وهو السبب الأشيع لقصور الدرقية عندنا وليس نقص اليود.',
    en: 'The body immune system attacks its own thyroid quietly over many years until it wears it out; it is the commonest cause of an underactive thyroid here, not iodine lack.'
  },
  organs: ['thyroid', 'immunity', 'lymph-node', 'pituitary'],
  aliases: [],
  keywords: { ar: ['هاشيموتو', 'التهاب الدرقية المناعي', 'الأجسام المضادة للدرقية'], en: ['Hashimoto', 'autoimmune thyroiditis', 'anti-TPO'] }
});

DISEASES.push({
  id: 'goiter', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'تضخّم الغدة الدرقية (الدراق)', en: 'Goitre (enlarged thyroid)' },
  short: {
    ar: 'الغدة تكبر حتى تُرى أو تُحسّ في مقدّمة الرقبة. الحجم وحده لا يقول شيئاً عن وظيفتها: قد تكون كبيرة ونشاطها طبيعي أو ناقص أو زائد.',
    en: 'The gland grows until it can be seen or felt at the front of the neck. Size alone says nothing about function: it may be large while working normally, too little, or too much.'
  },
  organs: ['thyroid', 'larynx', 'esophagus', 'pituitary'],
  aliases: ['تضخم الغدة (الدراق)'],
  keywords: { ar: ['الدراق', 'تضخم الرقبة', 'الجويتر', 'نقص اليود'], en: ['goitre', 'goiter', 'thyroid enlargement', 'iodine deficiency'] }
});

DISEASES.push({
  id: 'thyroid-nodules', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'عقيدات الغدة الدرقية', en: 'Thyroid nodules' },
  short: {
    ar: 'كتل صغيرة تنشأ داخل نسيج الغدة، وأغلبها الساحق حميد ويُكتشف صدفة في فحص للرقبة. المهمّ ليس وجودها بل تمييز القليل منها الذي يستحقّ المتابعة.',
    en: 'Small lumps that form within the gland tissue; the great majority are benign and are found by chance on a neck scan. What matters is not their presence but spotting the few that need follow-up.'
  },
  organs: ['thyroid', 'larynx', 'lymph-node', 'vocal-folds'],
  aliases: ['العقيدات الدرقية'],
  keywords: { ar: ['عقدة في الرقبة', 'كتلة في الغدة', 'خزعة الدرقية'], en: ['thyroid nodule', 'thyroid lump', 'FNA biopsy'] }
});

/* ---------------- جارات الدرقية ---------------- */

DISEASES.push({
  id: 'hyperparathyroidism', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'فرط نشاط جارات الدرقية', en: 'Hyperparathyroidism' },
  short: {
    ar: 'غدد صغيرة خلف الدرقية تفرز هرموناً يسحب الكالسيوم من العظم إلى الدم، فيرتفع الكالسيوم وتضعف العظام وتتكوّن حصى الكلى.',
    en: 'Tiny glands behind the thyroid secrete a hormone that pulls calcium out of bone into the blood, so calcium rises, bones weaken and kidney stones form.'
  },
  organs: ['parathyroid', 'thyroid', 'bone-inside', 'kidneys', 'nephron', 'skeleton'],
  aliases: ['فرط نشاط جارات الدرقية', 'الورم الغدي في جارة الدرقية'],
  keywords: { ar: ['ارتفاع الكالسيوم', 'هرمون الجار درقي', 'هشاشة وحصى'], en: ['hyperparathyroidism', 'high calcium', 'PTH', 'parathyroid adenoma'] }
});

/* ---------------- الغدة الكظرية ---------------- */

DISEASES.push({
  id: 'cushing', group: 'glands', tier: 'rare', emergency: false,
  name: { ar: 'متلازمة كوشينغ', en: 'Cushing syndrome' },
  short: {
    ar: 'تعرّض الجسم لكميّة زائدة من هرمون الكورتيزول شهوراً أو سنين، فيتبدّل الشكل: وجه ممتلئ وبطن متراكم وأطراف نحيلة وجلد رقيق يتخطّط.',
    en: 'The body is exposed to too much cortisol for months or years, and the shape changes: a full face, fat gathering on the trunk, thin limbs, and thin skin that develops stretch marks.'
  },
  organs: ['adrenal', 'pituitary', 'skin', 'bone-inside', 'muscles', 'vessel-types'],
  aliases: ['متلازمة كوشينغ'],
  keywords: { ar: ['كوشينغ', 'زيادة الكورتيزول', 'وجه القمر', 'الكورتيزون'], en: ['Cushing', 'hypercortisolism', 'moon face', 'steroid excess'] }
});

DISEASES.push({
  id: 'addison', group: 'autoimmune', tier: 'rare', emergency: true,
  name: { ar: 'قصور الكظر (داء أديسون)', en: 'Adrenal insufficiency (Addison disease)' },
  short: {
    ar: 'الغدة الكظرية لا تنتج ما يكفي من الكورتيزول، فيظهر تعب وهبوط ضغط واسمرار في الجلد — وقد ينقلب فجأة إلى نوبة كظر حادّة تهدّد الحياة.',
    en: 'The adrenal gland does not produce enough cortisol, causing fatigue, low blood pressure and darkening of the skin, and it can turn suddenly into a life-threatening adrenal crisis.'
  },
  organs: ['adrenal', 'pituitary', 'skin', 'kidneys', 'blood'],
  aliases: ['قصور الغدة الكظرية'],
  keywords: { ar: ['أديسون', 'نقص الكورتيزول', 'نوبة الكظر', 'اسمرار الجلد'], en: ['Addison', 'adrenal insufficiency', 'adrenal crisis', 'cortisol deficiency'] }
});

/* ---------------- الغدة النخامية ---------------- */

DISEASES.push({
  id: 'pituitary-adenoma', group: 'glands', tier: 'rare', emergency: false,
  name: { ar: 'الورم الغدّي النخامي', en: 'Pituitary adenoma' },
  short: {
    ar: 'ورم حميد ينمو في الغدة النخامية أسفل الدماغ، فإمّا يفرز هرموناً زائداً وإمّا يضغط ما حوله — وأشهر ما يضغط عليه هو تقاطع أعصاب البصر.',
    en: 'A benign tumour growing in the pituitary gland beneath the brain; it either secretes an excess hormone or presses on what surrounds it, most famously the crossing of the optic nerves.'
  },
  organs: ['pituitary', 'eye', 'brain', 'skull', 'thyroid', 'adrenal'],
  aliases: ['الورم الغدي النخامي'],
  keywords: { ar: ['ورم النخامية', 'البرولاكتين', 'ضيق مجال الرؤية'], en: ['pituitary adenoma', 'prolactinoma', 'bitemporal hemianopia'] }
});

DISEASES.push({
  id: 'acromegaly', group: 'glands', tier: 'rare', emergency: false,
  name: { ar: 'ضخامة النهايات', en: 'Acromegaly' },
  short: {
    ar: 'زيادة هرمون النمو بعد اكتمال الطول، فلا يزداد الطول بل تغلظ نهايات الجسم ببطء شديد: اليدان والقدمان وملامح الوجه، حتى يشعر صاحبها بضيق خاتمه وحذائه.',
    en: 'Excess growth hormone after height is complete, so the person does not grow taller; instead the ends of the body thicken very slowly, the hands, feet and facial features, until rings and shoes no longer fit.'
  },
  organs: ['pituitary', 'skull', 'hand', 'foot', 'tmj', 'heart', 'growth-plate'],
  aliases: ['ضخامة النهايات'],
  keywords: { ar: ['ضخامة الأطراف', 'هرمون النمو', 'كبر اليدين'], en: ['acromegaly', 'growth hormone excess', 'IGF-1'] }
});

DISEASES.push({
  id: 'hypopituitarism', group: 'glands', tier: 'rare', emergency: false,
  name: { ar: 'قصور الغدة النخامية', en: 'Hypopituitarism' },
  short: {
    ar: 'الغدة التي تقود بقية الغدد تضعف، فتخفت أوامرها واحدة بعد أخرى: الدرقية والكظر والغدد التناسلية وهرمون النمو، وتظهر الشكوى بعيداً عن مكان العطل.',
    en: 'The gland that commands the other glands weakens, and its orders fade one after another to the thyroid, adrenals, sex glands and growth hormone, so the complaint appears far from where the fault is.'
  },
  organs: ['pituitary', 'adrenal', 'thyroid', 'testis', 'ovary', 'growth-plate'],
  aliases: ['قصور النخامية'],
  keywords: { ar: ['قصور النخامية', 'ضعف الغدة النخامية', 'نقص هرمونات'], en: ['hypopituitarism', 'pituitary failure', 'panhypopituitarism'] }
});

/* ---------------- الأيض والساعة البيولوجية ---------------- */

DISEASES.push({
  id: 'vitamin-d-deficiency', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'نقص فيتامين د', en: 'Vitamin D deficiency' },
  short: {
    ar: 'نقص شائع جداً في منطقتنا رغم وفرة الشمس، لأن أكثرنا يعيش داخل المباني. أثره الحقيقي على العظام والعضلات، وليس كلّ تعب سببه هذا النقص.',
    en: 'A very common shortage in our region despite abundant sun, because most of us live indoors. Its real effect is on bone and muscle, and not every case of tiredness is caused by it.'
  },
  organs: ['bone-inside', 'skin', 'skeleton', 'muscles', 'parathyroid', 'growth-plate', 'small-intestine'],
  aliases: [],
  keywords: { ar: ['فيتامين د', 'لين العظام', 'الكساح', 'ألم العظام'], en: ['vitamin D deficiency', 'osteomalacia', 'rickets'] }
});

DISEASES.push({
  id: 'circadian-disorder', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'اضطراب الساعة البيولوجية والنوم', en: 'Circadian rhythm and sleep disorder' },
  short: {
    ar: 'ساعة الجسم الداخلية تنزاح عن ساعة النهار والليل، فينام صاحبها متأخراً ويصحو منهكاً — والسبب الأشيع اليوم ضوء الشاشات لا مرض في الدماغ.',
    en: 'The body internal clock drifts away from the clock of day and night, so the person falls asleep late and wakes exhausted; the commonest cause today is screen light, not disease of the brain.'
  },
  organs: ['pineal', 'brain', 'eye', 'retina', 'limbic', 'autonomic'],
  aliases: ['اضطراب الساعة البيولوجية'],
  keywords: { ar: ['السهر', 'الأرق', 'الميلاتونين', 'اختلاف التوقيت'], en: ['circadian rhythm disorder', 'insomnia', 'melatonin', 'jet lag'] }
});

/* ---------------- المناعة والحساسية ---------------- */

DISEASES.push({
  id: 'allergic-rhinitis', group: 'allergy', tier: 'common', emergency: false,
  name: { ar: 'الحساسية الموسمية', en: 'Seasonal allergy (allergic rhinitis)' },
  short: {
    ar: 'جهاز المناعة يعامل غباراً أو لقاحاً غير ضارّ كأنه عدوّ، فيردّ بعطاس ورشح وحكّة في الأنف والعين تعود في نفس الموسم كلّ سنة.',
    en: 'The immune system treats harmless dust or pollen as an enemy and answers with sneezing, a running nose and itching of the nose and eyes that returns in the same season every year.'
  },
  organs: ['nose', 'sinuses', 'immunity', 'eye', 'bronchi', 'pharynx'],
  aliases: ['التهاب الأنف التحسسي', 'الحساسية'],
  keywords: { ar: ['حساسية الأنف', 'العطاس', 'حمى القش', 'الغبار'], en: ['allergic rhinitis', 'hay fever', 'pollen allergy', 'dust allergy'] }
});

DISEASES.push({
  id: 'anaphylaxis', group: 'allergy', tier: 'rare', emergency: true,
  name: { ar: 'التأق (صدمة الحساسية)', en: 'Anaphylaxis (allergic shock)' },
  short: {
    ar: 'ردّ مناعي عنيف يجتاح الجسم كلّه خلال دقائق من التعرّض لمُحسِّس: تورّم الوجه والحلق وضيق نفس وهبوط ضغط. هذه أخطر حالة في هذا القسم وتقتل بسرعة.',
    en: 'A violent immune reaction that sweeps the whole body within minutes of exposure to an allergen: swelling of the face and throat, breathlessness and a fall in blood pressure. It is the most dangerous condition in this section and can kill quickly.'
  },
  organs: ['immunity', 'bronchi', 'skin', 'vessel-types', 'larynx', 'heart', 'circulation'],
  aliases: [],
  keywords: { ar: ['صدمة الحساسية', 'حساسية مفرطة', 'تورم الحلق', 'حساسية الفول السوداني'], en: ['anaphylaxis', 'anaphylactic shock', 'severe allergy', 'epinephrine'] }
});

DISEASES.push({
  id: 'lupus', group: 'autoimmune', tier: 'rare', emergency: false,
  name: { ar: 'الذئبة الحمامية الجهازية', en: 'Systemic lupus erythematosus' },
  short: {
    ar: 'مرض مناعي يهاجم فيه الجسم أنسجته في أكثر من مكان: الجلد والمفاصل والكلى والأغشية المحيطة بالقلب والرئة، ويأتي نوبات تشتدّ ثم تهدأ.',
    en: 'An autoimmune disease in which the body attacks its own tissues in more than one place: skin, joints, kidneys and the membranes around the heart and lung, coming in flares that rise then settle.'
  },
  organs: ['immunity', 'skin', 'kidneys', 'nephron', 'blood', 'serous-membranes', 'lymph-node'],
  aliases: [],
  keywords: { ar: ['الذئبة', 'طفح الفراشة', 'مرض مناعي', 'التهاب كلية الذئبة'], en: ['lupus', 'SLE', 'butterfly rash', 'ANA'] }
});

DISEASES.push({
  id: 'metabolic-syndrome', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'السمنة ومتلازمة التمثيل الغذائي', en: 'Obesity and metabolic syndrome' },
  short: {
    ar: 'دهون تتراكم حول البطن وتتصرّف كغدّة تفرز التهاباً، فتجتمع مقاومة الإنسولين وارتفاع الضغط واضطراب الدهون في شخص واحد ويتضاعف خطر القلب.',
    en: 'Fat gathers around the abdomen and behaves like a gland that secretes inflammation, so insulin resistance, high blood pressure and disordered blood fats gather in one person and the heart risk multiplies.'
  },
  organs: ['liver', 'pancreas', 'vessels', 'vessel-types', 'heart', 'coronary', 'blood', 'circulation'],
  aliases: [],
  keywords: { ar: ['السمنة', 'الكرش', 'متلازمة الأيض', 'مقاومة الإنسولين', 'الكبد الدهني'], en: ['obesity', 'metabolic syndrome', 'central obesity', 'insulin resistance'] }
});

DISEASES.push({
  id: 'autoimmunity', group: 'autoimmune', tier: 'common', emergency: false,
  name: { ar: 'فرط نشاط المناعة الذاتية', en: 'Autoimmunity (overactive self-directed immunity)' },
  short: {
    ar: 'مقدّمة عامة لعائلة كاملة من الأمراض: المناعة التي تحمي الجسم تخطئ في تمييز ما هو منه فتهاجمه. عائلة واحدة بمبدأ واحد وأسماء كثيرة.',
    en: 'A general introduction to a whole family of diseases: the immunity that protects the body mistakes what belongs to it and attacks it. One family, one principle, many names.'
  },
  organs: ['immunity', 'thymus', 'lymph-node', 'blood', 'lymphatic', 'thyroid'],
  aliases: ['أمراض المناعة الذاتية'],
  keywords: { ar: ['المناعة الذاتية', 'مرض مناعي', 'الأجسام المضادة الذاتية', 'الالتهاب المزمن'], en: ['autoimmunity', 'autoimmune disease', 'autoantibodies'] }
});

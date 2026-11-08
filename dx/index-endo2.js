/* ============================================================
   موسوعة الأمراض — فهرس الغدد والاستقلاب واختلال الأملاح (الموجة الثانية)
   dx/index-endo2.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-endo2.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- طوارئ الغدة الدرقية ---------------- */

DISEASES.push({
  id: 'thyroid-storm', group: 'glands', tier: 'rare', emergency: true,
  name: { ar: 'العاصفة الدرقية', en: 'Thyroid storm' },
  short: {
    ar: 'فرط نشاط الدرقية حين ينفلت فجأة: حرارة عالية ونبض متسارع وهياج ثم ارتباك، وتبدأ غالباً بعد عدوى أو جراحة أو إيقاف الدواء. حالة تُعالج في المستشفى ولا تحتمل الانتظار.',
    en: 'An overactive thyroid suddenly running out of control: high fever, a racing pulse, agitation then confusion, usually triggered by infection, surgery or stopping the medicine. A hospital emergency that cannot wait.'
  },
  organs: ['thyroid', 'heart', 'brain', 'liver'],
  aliases: [],
  keywords: { ar: ['العاصفة الدرقية', 'انفلات الدرقية', 'أزمة التسمم الدرقي'], en: ['thyroid storm', 'thyrotoxic crisis'] }
});

DISEASES.push({
  id: 'myxedema-coma', group: 'glands', tier: 'rare', emergency: true,
  name: { ar: 'غيبوبة الوذمة المخاطية (سبات قصور الدرقية)', en: 'Myxoedema coma' },
  short: {
    ar: 'النهاية الخطرة لقصور درقية أُهمل طويلاً: برودة جسم وبطء نبض ونعاس يتعمّق حتى الغياب، وتظهر غالباً عند مسنّ في ليلة باردة أو بعد عدوى.',
    en: 'The dangerous end of a long-neglected underactive thyroid: a cold body, a slow pulse and deepening drowsiness until awareness is lost, most often in an older person on a cold night or after an infection.'
  },
  organs: ['thyroid', 'brain', 'heart', 'lungs'],
  aliases: [],
  keywords: { ar: ['غيبوبة الوذمة المخاطية', 'سبات القصور الدرقي', 'الوذمة المخاطية'], en: ['myxedema coma', 'myxoedema', 'severe hypothyroidism'] }
});

/* ---------------- اختلال الأملاح ---------------- */

DISEASES.push({
  id: 'hyponatremia', group: 'glands', tier: 'common', emergency: true,
  name: { ar: 'نقص صوديوم الدم', en: 'Low blood sodium (hyponatraemia)' },
  short: {
    ar: 'انخفاض ملح الصوديوم في الدم فيدخل الماء إلى خلايا الدماغ ويورّمها: غثيان وصداع وتشوّش ثم تشنّج. يقع بعد إسهال طويل أو مدرّات بول أو إفراط في شرب الماء.',
    en: 'Blood sodium falls so water moves into the brain cells and swells them: nausea, headache, muddled thinking then a seizure. It follows prolonged diarrhoea, diuretics, or drinking too much plain water.'
  },
  organs: ['blood', 'brain', 'kidneys', 'nephron'],
  aliases: [],
  keywords: { ar: ['نقص الصوديوم', 'قلة الملح في الدم', 'تسمم الماء'], en: ['hyponatremia', 'low sodium', 'water intoxication', 'SIADH'] }
});

DISEASES.push({
  id: 'hyperkalemia', group: 'glands', tier: 'common', emergency: true,
  name: { ar: 'فرط بوتاسيوم الدم', en: 'High blood potassium (hyperkalaemia)' },
  short: {
    ar: 'ارتفاع البوتاسيوم يخدع لأنه صامت تقريباً، وأول ما يظهر قد يكون اضطراب نظم القلب. يهدّد مرضى الكلى ومن يأخذ أدوية تحفظ البوتاسيوم.',
    en: 'A rising potassium deceives because it is nearly silent, and the first sign may be a disturbance of heart rhythm. It threatens people with kidney disease and those on potassium-sparing medicines.'
  },
  organs: ['blood', 'heart', 'kidneys', 'nephron'],
  aliases: [],
  keywords: { ar: ['ارتفاع البوتاسيوم', 'زيادة البوتاسيوم', 'فرط البوتاسيوم'], en: ['hyperkalemia', 'high potassium'] }
});

DISEASES.push({
  id: 'hypokalemia', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'نقص بوتاسيوم الدم', en: 'Low blood potassium (hypokalaemia)' },
  short: {
    ar: 'ضعف عضلي وتقلّصات وإمساك وخفقان بعد قيء أو إسهال طويل أو مدرّات بول. نقص لا يُحسّ في بدايته ويظهر في تخطيط القلب قبل أن يشتكي صاحبه.',
    en: 'Muscle weakness, cramps, constipation and palpitations after vomiting, prolonged diarrhoea or diuretics. A deficiency that is not felt early and shows on the heart tracing before the person complains.'
  },
  organs: ['blood', 'muscles', 'heart', 'kidneys'],
  aliases: [],
  keywords: { ar: ['نقص البوتاسيوم', 'قلة البوتاسيوم', 'ضعف عضلي وأملاح'], en: ['hypokalemia', 'low potassium'] }
});

DISEASES.push({
  id: 'hypocalcemia', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'نقص كالسيوم الدم', en: 'Low blood calcium (hypocalcaemia)' },
  short: {
    ar: 'تنميل حول الفم وأطراف الأصابع وتقلّص مؤلم في اليدين والقدمين، وقد يشتدّ حتى تشنّج الحنجرة. يتبع جراحة الرقبة ونقص فيتامين د ونقص المغنيسيوم.',
    en: 'Tingling around the mouth and fingertips with painful cramping of the hands and feet, which can worsen to spasm of the voice box. It follows neck surgery, vitamin D lack and magnesium deficiency.'
  },
  organs: ['blood', 'parathyroid', 'muscles', 'nervous'],
  aliases: [],
  keywords: { ar: ['نقص الكالسيوم', 'تنميل وتشنج اليدين', 'تكزز'], en: ['hypocalcemia', 'low calcium', 'tetany'] }
});

DISEASES.push({
  id: 'hypercalcemia', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'فرط كالسيوم الدم', en: 'High blood calcium (hypercalcaemia)' },
  short: {
    ar: 'عطش وبول كثير وإمساك وألم بطن وإرهاق وتشوّش مزاج، مع حصى كلى متكرّرة وألم عظام. سببه غالباً خلل جارات الدرقية أو ورم خبيث.',
    en: 'Thirst, heavy urination, constipation, abdominal pain, exhaustion and a clouded mood, with recurrent kidney stones and bone pain. The usual causes are a parathyroid disorder or a malignancy.'
  },
  organs: ['blood', 'parathyroid', 'kidneys', 'bone-inside'],
  aliases: [],
  keywords: { ar: ['ارتفاع الكالسيوم', 'زيادة الكالسيوم', 'حصى وعطش'], en: ['hypercalcemia', 'high calcium'] }
});

DISEASES.push({
  id: 'hypomagnesemia', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'نقص المغنيسيوم', en: 'Magnesium deficiency' },
  short: {
    ar: 'الملح المنسيّ: تقلّصات ورجفان وخفقان وأرق، وهو السبب الخفي وراء نقص بوتاسيوم أو كالسيوم يرفض أن يتصحّح مهما عُوّض.',
    en: 'The forgotten salt: cramps, twitching, palpitations and poor sleep, and the hidden reason behind a low potassium or calcium that refuses to correct however much is replaced.'
  },
  organs: ['blood', 'muscles', 'heart', 'kidneys'],
  aliases: [],
  keywords: { ar: ['نقص المغنيسيوم', 'الماغنيسيوم', 'تقلصات وأملاح'], en: ['hypomagnesemia', 'magnesium deficiency'] }
});

/* ---------------- جارات الدرقية ---------------- */

DISEASES.push({
  id: 'hypoparathyroidism', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'قصور جارات الدرقية', en: 'Underactive parathyroid glands' },
  short: {
    ar: 'غدد صغيرة خلف الدرقية تحفظ كالسيوم الدم، فإذا ضعفت أو أُصيبت في جراحة الرقبة هبط الكالسيوم ودام التنميل والتشنّج وصار التعويض عادة يومية.',
    en: 'Small glands behind the thyroid keep blood calcium steady; when they weaken or are injured during neck surgery, calcium falls, tingling and cramping persist, and replacement becomes a daily habit.'
  },
  organs: ['parathyroid', 'blood', 'muscles', 'nervous'],
  aliases: ['قصور جارات الدرقية', 'قصور ما بعد جراحة الرقبة'],
  keywords: { ar: ['قصور جارات الدرقية', 'بعد استئصال الدرقية', 'نقص كالسيوم مزمن'], en: ['hypoparathyroidism', 'post-thyroidectomy'] }
});

/* ---------------- السكّر والاستقلاب ---------------- */

DISEASES.push({
  id: 'prediabetes', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'ما قبل السكّري ومقاومة الإنسولين', en: 'Prediabetes and insulin resistance' },
  short: {
    ar: 'سكّر أعلى من الطبيعي وأقلّ من حدّ السكّري: بلا ألم ولا عرض، لكنه النافذة الوحيدة التي يمكن أن يُردّ فيها الأمر إلى الوراء قبل أن يصير مرضاً دائماً.',
    en: 'Sugar above normal yet below the threshold of diabetes: painless and symptomless, but the one window in which the process can still be turned back before it becomes a permanent disease.'
  },
  organs: ['pancreas', 'liver', 'vessel-types', 'cell'],
  aliases: [],
  keywords: { ar: ['ما قبل السكري', 'مقاومة الإنسولين', 'اختلال سكر الصيام', 'التحليل التراكمي'], en: ['prediabetes', 'insulin resistance', 'impaired fasting glucose', 'HbA1c'] }
});

DISEASES.push({
  id: 'reactive-hypoglycemia', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'هبوط السكّر التفاعلي بعد الأكل', en: 'Reactive hypoglycaemia after meals' },
  short: {
    ar: 'رجفة وتعرّق وجوع وخفقان بعد ساعتين أو ثلاث من وجبة نشوية، عند إنسان ليس مريض سكّري. مزعج لكنه ليس الهبوط الخطر الذي يصيب من يأخذ الإنسولين.',
    en: 'Trembling, sweating, hunger and palpitations two or three hours after a starchy meal, in a person who does not have diabetes. Troublesome, but not the dangerous low that strikes those on insulin.'
  },
  organs: ['pancreas', 'stomach', 'autonomic', 'brain'],
  aliases: [],
  keywords: { ar: ['هبوط السكر بعد الأكل', 'نقص السكر التفاعلي', 'دوخة بعد الوجبة'], en: ['reactive hypoglycemia', 'postprandial hypoglycemia'] }
});

/* ---------------- النخامية والهرمونات التناسلية ---------------- */

DISEASES.push({
  id: 'hyperprolactinemia', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'ارتفاع هرمون الحليب (البرولاكتين)', en: 'High prolactin' },
  short: {
    ar: 'إفراز حليبي من الثدي خارج الرضاعة، وانقطاع دورة أو تباعدها، وضعف رغبة عند الرجل والمرأة. سببه قد يكون دواء أو خمول درقية لا ورماً.',
    en: 'A milky discharge from the breast outside breastfeeding, absent or widely spaced periods, and reduced desire in both men and women. The cause may be a medicine or an underactive thyroid, not a tumour.'
  },
  organs: ['pituitary', 'breast', 'ovary', 'testis'],
  aliases: [],
  keywords: { ar: ['هرمون الحليب', 'البرولاكتين', 'إفراز حليبي', 'انقطاع الدورة'], en: ['hyperprolactinemia', 'prolactin', 'galactorrhoea'] }
});

DISEASES.push({
  id: 'male-hypogonadism', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'نقص هرمون الذكورة', en: 'Low testosterone (male hypogonadism)' },
  short: {
    ar: 'فتور ورغبة ضعيفة وتعب لا يزول ونقص كتلة عضلية وتقلّب مزاج. يُخلط كثيراً بالاكتئاب أو بالتقدّم في السنّ، وتشخيصه يحتاج تحليلاً في وقت محدّد من الصباح.',
    en: 'Flatness, weak desire, tiredness that will not lift, loss of muscle bulk and shifting mood. It is often mistaken for depression or simple ageing, and diagnosing it needs a blood test at a set early hour.'
  },
  organs: ['testis', 'pituitary', 'male-reproductive', 'bone-inside'],
  aliases: [],
  keywords: { ar: ['نقص التستوستيرون', 'هرمون الذكورة', 'قصور الغدد التناسلية'], en: ['low testosterone', 'hypogonadism', 'testosterone deficiency'] }
});

DISEASES.push({
  id: 'gynecomastia', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'التثدّي عند الذكور', en: 'Gynaecomastia (breast enlargement in males)' },
  short: {
    ar: 'نموّ نسيج غدّي حقيقي تحت حلمة الرجل أو المراهق، يُحسّ قرصاً مؤلماً وليس مجرّد شحم. أكثره مؤقّت في البلوغ، وبعضه من دواء أو خلل هرموني أو كبد.',
    en: 'Growth of true glandular tissue under the nipple of a man or adolescent, felt as a tender disc rather than mere fat. Most is temporary at puberty; some comes from a medicine, a hormonal disorder or the liver.'
  },
  organs: ['breast', 'testis', 'liver', 'pituitary'],
  aliases: ['التثدّي عند الرجال'],
  keywords: { ar: ['التثدي', 'تضخم الثدي عند الرجل', 'كتلة تحت الحلمة'], en: ['gynecomastia', 'male breast enlargement'] }
});

DISEASES.push({
  id: 'diabetes-insipidus', group: 'glands', tier: 'rare', emergency: false,
  name: { ar: 'البوالة التفهة (السكّري الكاذب)', en: 'Diabetes insipidus' },
  short: {
    ar: 'عطش لا يهدأ وبول غزير شفّاف كالماء يوقظ صاحبه مراراً في الليل، والسكّر طبيعي. الخلل في هرمون يحفظ الماء أو في استجابة الكلية له.',
    en: 'Unrelenting thirst and copious urine as clear as water, waking the person repeatedly at night, while blood sugar is normal. The fault lies in the hormone that conserves water, or the kidney response to it.'
  },
  organs: ['pituitary', 'kidneys', 'nephron', 'brain'],
  aliases: ['البوال التفه', 'البوال التفه الكلوي'],
  keywords: { ar: ['السكري الكاذب', 'البوال التفه', 'عطش وبول شفاف'], en: ['diabetes insipidus', 'arginine vasopressin deficiency', 'polyuria'] }
});

/* ---------------- الغدة الكظرية ---------------- */

DISEASES.push({
  id: 'primary-aldosteronism', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'فرط الألدوستيرون الأولي', en: 'Primary aldosteronism' },
  short: {
    ar: 'ضغط دم عنيد لا تخفضه ثلاثة أدوية، ومعه بوتاسيوم منخفض وضعف عضلي. سبب قابل للعلاج يُغفَل كثيراً ويُترك صاحبه سنوات على أدوية لا تكفي.',
    en: 'Stubborn blood pressure that three medicines fail to lower, with a low potassium and muscle weakness. A treatable cause that is often missed, leaving the person on years of medicines that never suffice.'
  },
  organs: ['adrenal', 'kidneys', 'heart', 'vessels'],
  aliases: [],
  keywords: { ar: ['فرط الألدوستيرون', 'متلازمة كون', 'ضغط عنيد', 'بوتاسيوم منخفض'], en: ['primary aldosteronism', 'Conn syndrome', 'resistant hypertension'] }
});

DISEASES.push({
  id: 'pheochromocytoma', group: 'glands', tier: 'rare', emergency: false,
  name: { ar: 'ورم القواتم', en: 'Phaeochromocytoma' },
  short: {
    ar: 'ورم في الكظر يفرز هرمونات الشدّة دفعات، فتأتي نوبات من صداع نابض وتعرّق غزير وخفقان وارتفاع ضغط مفاجئ، ثم يعود كل شيء طبيعياً بينها.',
    en: 'An adrenal tumour releasing stress hormones in bursts, so attacks come of pounding headache, drenching sweat, palpitations and a sudden surge of blood pressure, with everything normal in between.'
  },
  organs: ['adrenal', 'heart', 'vessels', 'autonomic'],
  aliases: ['ورم القواتم'],
  keywords: { ar: ['ورم القواتم', 'نوبات ضغط وصداع وتعرق', 'ورم الكظر'], en: ['pheochromocytoma', 'paraganglioma', 'catecholamine tumour'] }
});

/* ---------------- التهاب الدرقية والتغذية ---------------- */

DISEASES.push({
  id: 'subacute-thyroiditis', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'التهاب الدرقية تحت الحادّ وبعد الولادة', en: 'Subacute and postpartum thyroiditis' },
  short: {
    ar: 'غدّة ملتهبة تُفرغ مخزونها دفعة فيظهر فرط نشاط أسابيع، ثم خمول، ثم تعود غالباً. نوع مؤلم يتبع نزلة فيروسية، ونوع بلا ألم يظهر بعد الولادة.',
    en: 'An inflamed gland empties its store at once, producing weeks of overactivity, then underactivity, then usually recovery. One painful form follows a viral illness; a painless form appears after childbirth.'
  },
  organs: ['thyroid', 'pituitary', 'heart'],
  aliases: [],
  keywords: { ar: ['التهاب الدرقية', 'ألم الغدة الدرقية', 'خمول بعد الولادة'], en: ['subacute thyroiditis', 'de Quervain thyroiditis', 'postpartum thyroiditis'] }
});

DISEASES.push({
  id: 'hemochromatosis', group: 'glands', tier: 'rare', emergency: false,
  name: { ar: 'داء ترسّب الأصبغة الدموية (زيادة الحديد)', en: 'Haemochromatosis (iron overload)' },
  short: {
    ar: 'الجسم يمتصّ حديداً أكثر ممّا يحتاج فيترسّب سنوات في الكبد والبنكرياس والقلب والمفاصل: تعب وألم مفاصل وسمرة جلد وسكّري متأخّر.',
    en: 'The body absorbs more iron than it needs and deposits it over years in the liver, pancreas, heart and joints: fatigue, joint pain, a bronzed skin and diabetes appearing late.'
  },
  organs: ['liver', 'pancreas', 'heart', 'skin', 'pituitary'],
  aliases: [],
  keywords: { ar: ['زيادة الحديد', 'ترسب الأصبغة الدموية', 'ارتفاع الفيريتين'], en: ['hemochromatosis', 'iron overload', 'high ferritin'] }
});

DISEASES.push({
  id: 'iodine-deficiency', group: 'glands', tier: 'common', emergency: false,
  name: { ar: 'نقص اليود', en: 'Iodine deficiency' },
  short: {
    ar: 'اليود مادّة لا يصنعها الجسم وتصنع منه الدرقية هرمونها، فإذا نقص تضخّمت الغدة وخمل نشاطها. وأخطر ما فيه أثره على دماغ الجنين في الحمل.',
    en: 'Iodine is a substance the body cannot make and from which the thyroid builds its hormone; when it is short the gland swells and slows. Its gravest harm is to the brain of the unborn child in pregnancy.'
  },
  organs: ['thyroid', 'brain', 'pregnancy'],
  aliases: [],
  keywords: { ar: ['نقص اليود', 'الملح المدعّم باليود', 'تضخم من نقص اليود'], en: ['iodine deficiency', 'iodised salt', 'endemic goitre'] }
});

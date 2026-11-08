/* ============================================================
   موسوعة الأمراض — فهرس الحالات العامّة العابرة للأجهزة
   dx/index-misc2.js
   ------------------------------------------------------------
   ما لا يسكن عضواً واحداً: التعب المزمن والألم المزمن،
   البيئة والسفر والغوص والارتفاع، الأدوية وحساسيتها وتعدّدها،
   نقص التغذية والعناصر، وما يخصّ كبار السنّ.
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام في dx/dx-misc2.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- التعب والألم المزمنان ---------------- */

DISEASES.push({
  id: 'chronic-fatigue-syndrome', group: 'systems', tier: 'common', emergency: false,
  name: { ar: 'متلازمة التعب المزمن', en: 'Chronic fatigue syndrome (ME/CFS)' },
  short: {
    ar: 'إنهاك يستمر شهوراً ولا يصلحه النوم، وأخصّ ما فيه أن مجهود اليوم البسيط يُدفع ثمنه غداً بانهيار يستمر أياماً.',
    en: 'Exhaustion that lasts for months and is not repaired by sleep; its hallmark is that a small effort today is paid for tomorrow with a crash lasting days.'
  },
  organs: ['brain', 'muscles', 'immunity', 'autonomic', 'nervous'],
  aliases: [],
  keywords: { ar: ['تعب مزمن', 'إعياء', 'ضباب ذهني', 'انهيار بعد الجهد'], en: ['chronic fatigue', 'ME/CFS', 'brain fog', 'post-exertional malaise'] }
});

DISEASES.push({
  id: 'long-covid', group: 'systems', tier: 'common', emergency: false,
  name: { ar: 'متلازمة ما بعد كوفيد', en: 'Long COVID (post-COVID condition)' },
  short: {
    ar: 'أعراض تبقى أسابيع أو شهوراً بعد أن تنتهي العدوى نفسها — أشهرها التعب وضيق النفس وضباب الذهن — وقد تصيب من كانت إصابته خفيفة.',
    en: 'Symptoms that persist for weeks or months after the infection itself has cleared — most often fatigue, breathlessness and brain fog — and they can follow even a mild illness.'
  },
  organs: ['lungs', 'brain', 'heart', 'autonomic', 'immunity'],
  aliases: [],
  keywords: { ar: ['ما بعد كورونا', 'كوفيد طويل الأمد', 'ضيق نفس بعد كوفيد', 'فقد الشم'], en: ['long covid', 'post-covid syndrome', 'post-viral fatigue'] }
});

DISEASES.push({
  id: 'chronic-pain-syndrome', group: 'systems', tier: 'common', emergency: false,
  name: { ar: 'الألم المزمن', en: 'Chronic pain' },
  short: {
    ar: 'ألم تجاوز ثلاثة أشهر حتى صار هو نفسه المرض لا مجرّد إنذار: الجهاز العصبي تعلّم الألم وصار يضخّمه، ولهذا لا تشرحه صورة الأشعة.',
    en: 'Pain lasting beyond three months until it becomes the disease itself rather than a warning: the nervous system has learned the pain and amplifies it, which is why a scan does not explain it.'
  },
  organs: ['nervous', 'brain', 'peripheral-nerve', 'spinal-cord', 'muscles'],
  aliases: [],
  keywords: { ar: ['ألم مستمر', 'تحسّس مركزي', 'ألم بلا سبب واضح', 'عيادة الألم'], en: ['chronic pain', 'central sensitisation', 'persistent pain', 'pain clinic'] }
});

/* ---------------- السفر والبيئة والضغط ---------------- */

DISEASES.push({
  id: 'motion-sickness', group: 'systems', tier: 'common', emergency: false,
  name: { ar: 'دوار الحركة (دوار السفر)', en: 'Motion sickness' },
  short: {
    ar: 'غثيان ودوخة وعرق بارد تصيب في السيارة أو السفينة أو الطائرة، لأن ما تراه العين لا يطابق ما تحسّه الأذن الداخلية من حركة.',
    en: 'Nausea, dizziness and cold sweat in a car, a boat or a plane, because what the eye sees does not match the movement the inner ear feels.'
  },
  organs: ['balance', 'ear', 'brain', 'stomach', 'autonomic'],
  aliases: ['دوار الحركة'],
  keywords: { ar: ['دوخة السيارة', 'دوار البحر', 'غثيان السفر', 'دوار الطائرة'], en: ['motion sickness', 'car sickness', 'seasickness', 'travel sickness'] }
});

DISEASES.push({
  id: 'altitude-sickness', group: 'systems', tier: 'common', emergency: true,
  name: { ar: 'داء المرتفعات', en: 'Altitude sickness' },
  short: {
    ar: 'صداع وغثيان وأرق تظهر خلال ساعات من الصعود إلى ارتفاع كبير، وقد تتطوّر إلى ماء على الرئة أو تورّم في الدماغ يقتلان خلال ساعات.',
    en: 'Headache, nausea and sleeplessness within hours of going high, which can progress to fluid in the lungs or swelling of the brain and kill within hours.'
  },
  organs: ['lungs', 'brain', 'alveoli', 'blood', 'heart'],
  aliases: [],
  keywords: { ar: ['مرض الجبال', 'دوار المرتفعات', 'وذمة الرئة بالارتفاع', 'نقص الأكسجين'], en: ['altitude sickness', 'acute mountain sickness', 'HAPE', 'HACE'] }
});

DISEASES.push({
  id: 'decompression-sickness', group: 'systems', tier: 'rare', emergency: true,
  name: { ar: 'داء تخفيف الضغط (مرض الغوص)', en: 'Decompression sickness (the bends)' },
  short: {
    ar: 'فقاعات نيتروجين تتكوّن في الدم والأنسجة حين يصعد الغوّاص أسرع مما يحتمل جسده، فتؤلم المفاصل وقد تشلّ الساقين أو تقتل.',
    en: 'Nitrogen bubbles form in blood and tissue when a diver ascends faster than the body can tolerate, causing joint pain and sometimes paralysis or death.'
  },
  organs: ['blood', 'lungs', 'spinal-cord', 'vessels', 'nervous'],
  aliases: [],
  keywords: { ar: ['مرض الغوص', 'انحناءات الغوّاص', 'الصعود السريع', 'غرفة الضغط'], en: ['decompression sickness', 'the bends', 'diving injury', 'hyperbaric chamber'] }
});

/* ---------------- الأدوية ---------------- */

DISEASES.push({
  id: 'drug-allergy', group: 'allergy', tier: 'common', emergency: false,
  name: { ar: 'حساسية الأدوية والطفح الدوائي', en: 'Drug allergy and drug rash' },
  short: {
    ar: 'ردّ فعل مناعي حقيقي تجاه دواء — غير الأثر الجانبي المزعج تماماً، والخلط بينهما يحرم كثيرين من دواء نافع طوال العمر.',
    en: 'A true immune reaction to a medicine — quite different from an unpleasant side effect; confusing the two deprives many people of a useful drug for life.'
  },
  organs: ['immunity', 'skin', 'lymphatic', 'blood', 'liver'],
  aliases: [],
  keywords: { ar: ['حساسية دواء', 'طفح من الدواء', 'أثر جانبي', 'حساسية البنسلين'], en: ['drug allergy', 'drug rash', 'side effect', 'penicillin allergy'] }
});

DISEASES.push({
  id: 'polypharmacy', group: 'systems', tier: 'common', emergency: false,
  name: { ar: 'تعدّد الأدوية عند كبار السنّ', en: 'Polypharmacy in older people' },
  short: {
    ar: 'خمسة أدوية فأكثر تجتمع على إنسان واحد، فيصير كل عرَض جديد يُعالَج بدواء جديد وقد يكون سببه دواءً سابقاً.',
    en: 'Five or more medicines gathered on one person, so every new symptom gets a new drug when a previous drug may have caused it.'
  },
  organs: ['liver', 'kidneys', 'brain', 'heart', 'stomach'],
  aliases: [],
  keywords: { ar: ['كثرة الأدوية', 'تداخل الأدوية', 'مراجعة دوائية', 'إنقاص الوصف'], en: ['polypharmacy', 'drug interactions', 'medication review', 'deprescribing'] }
});

/* ---------------- كبار السنّ ---------------- */

DISEASES.push({
  id: 'falls-elderly', group: 'systems', tier: 'common', emergency: false,
  name: { ar: 'السقوط عند كبار السنّ', en: 'Falls in older people' },
  short: {
    ar: 'السقوط عند المسنّ ليس حادثاً عابراً بل علامة على شيء تحته، والكسر الذي يتبعه قد يغيّر حياته كلها.',
    en: 'A fall in an older person is not a passing accident but a sign of something underneath, and the fracture that follows can change a whole life.'
  },
  organs: ['balance', 'skeleton', 'muscles', 'eye', 'brain'],
  aliases: ['خلل التوازن مع التقدم في العمر'],
  keywords: { ar: ['سقوط المسنّ', 'كسر الورك', 'خوف السقوط', 'اتزان'], en: ['falls', 'hip fracture', 'balance', 'fear of falling'] }
});

DISEASES.push({
  id: 'frailty', group: 'systems', tier: 'common', emergency: false,
  name: { ar: 'الوهن عند كبار السنّ', en: 'Frailty in older people' },
  short: {
    ar: 'تراجع في مخزون الجسم كلّه — عضلة وطاقة ومناعة — حتى تصير النزلة البسيطة أو يوم في الفراش كافيَين ليخسر المسنّ استقلاله.',
    en: 'A decline in the whole reserve of the body — muscle, energy and immunity — until a minor illness or a day in bed is enough for an older person to lose independence.'
  },
  organs: ['muscles', 'skeleton', 'immunity', 'nervous', 'heart'],
  aliases: ['ضمور العضلات من قلة الحركة'],
  keywords: { ar: ['ضعف كبار السن', 'ضمور العضلات', 'بطء المشي', 'فقد الاستقلالية'], en: ['frailty', 'sarcopenia', 'slow gait', 'loss of independence'] }
});

/* ---------------- التغذية ونقص العناصر ---------------- */

DISEASES.push({
  id: 'unintentional-weight-loss', group: 'systems', tier: 'common', emergency: false,
  name: { ar: 'نقص الوزن غير المقصود', en: 'Unintentional weight loss' },
  short: {
    ar: 'أن ينزل وزنك بلا حمية ولا رياضة علامة تستحقّ البحث لا الفرح، لأن قائمة أسبابها تبدأ بما يُعالَج بسهولة وتنتهي بما لا ينتظر.',
    en: 'Losing weight without dieting or exercise is a sign to investigate, not to celebrate: the list of causes starts with the easily treated and ends with what cannot wait.'
  },
  organs: ['stomach', 'thyroid', 'large-intestine', 'lymph-node', 'pancreas'],
  aliases: [],
  keywords: { ar: ['نزول الوزن', 'هزال', 'فقد الشهية', 'نحول غير مفسّر'], en: ['weight loss', 'unexplained weight loss', 'poor appetite', 'wasting'] }
});

DISEASES.push({
  id: 'malnutrition', group: 'systems', tier: 'common', emergency: false,
  name: { ar: 'سوء التغذية', en: 'Malnutrition' },
  short: {
    ar: 'نقص في الطاقة أو البروتين أو كليهما يُضعف العضلة والمناعة والتئام الجروح، ويصيب المسنّ والمريض والمُدخَل المستشفى أكثر مما يُظنّ.',
    en: 'A shortage of energy or protein or both that weakens muscle, immunity and wound healing, and affects older, sick and hospitalised people far more than is realised.'
  },
  organs: ['small-intestine', 'villi', 'muscles', 'immunity', 'liver'],
  aliases: [],
  keywords: { ar: ['نقص التغذية', 'ضعف عام', 'نقص البروتين', 'تغذية المسنّ'], en: ['malnutrition', 'undernutrition', 'protein energy', 'nutritional support'] }
});

DISEASES.push({
  id: 'scurvy', group: 'systems', tier: 'rare', emergency: false,
  name: { ar: 'الإسقربوط (نقص فيتامين ج)', en: 'Scurvy (vitamin C deficiency)' },
  short: {
    ar: 'مرض قديم لم ينقرض: بلا فيتامين ج لا يبني الجسم الكولاجين، فتنزف اللثة وتتفتّح جروح قديمة ويظهر طفح دموي حول بصيلات الشعر.',
    en: 'An old disease that has not vanished: without vitamin C the body cannot build collagen, so gums bleed, old wounds reopen and blood spots appear around hair follicles.'
  },
  organs: ['skin', 'teeth', 'vessels', 'wound-healing', 'bone-inside'],
  aliases: [],
  keywords: { ar: ['نقص فيتامين ج', 'نزف اللثة', 'الكولاجين', 'كدمات'], en: ['scurvy', 'vitamin C deficiency', 'bleeding gums', 'collagen'] }
});

DISEASES.push({
  id: 'zinc-deficiency', group: 'systems', tier: 'common', emergency: false,
  name: { ar: 'نقص الزنك', en: 'Zinc deficiency' },
  short: {
    ar: 'عنصر صغير تتوقّف عليه المناعة والتئام الجرح وحاسّة التذوّق، ونقصه يظهر التهاباً حول الفم وإسهالاً متكرّراً وجرحاً لا يلتئم.',
    en: 'A small element on which immunity, wound healing and taste depend; its lack shows as inflammation around the mouth, repeated diarrhoea and a wound that will not heal.'
  },
  organs: ['skin', 'immunity', 'tongue', 'wound-healing', 'hair-follicle'],
  aliases: [],
  keywords: { ar: ['نقص الزنك', 'جرح لا يلتئم', 'فقد التذوّق', 'تساقط شعر'], en: ['zinc deficiency', 'poor wound healing', 'taste loss', 'hair loss'] }
});

DISEASES.push({
  id: 'electrolyte-disorders', group: 'systems', tier: 'common', emergency: false,
  name: { ar: 'اضطراب أملاح الدم (الصوديوم والبوتاسيوم)', en: 'Electrolyte disorders (sodium and potassium)' },
  short: {
    ar: 'أرقام صغيرة في تحليل الدم يتوقّف عليها عمل القلب والعضل والدماغ، فاختلالها يعطي تشوّشاً وتشنّجاً وضعفاً واضطراب نبض.',
    en: 'Small numbers on a blood test on which heart, muscle and brain depend; when they drift they cause confusion, cramps, weakness and rhythm disturbance.'
  },
  organs: ['kidneys', 'heart', 'brain', 'muscles', 'nephron'],
  aliases: [],
  keywords: { ar: ['نقص الصوديوم', 'نقص البوتاسيوم', 'أملاح الدم', 'تشنّج عضلي'], en: ['hyponatraemia', 'hypokalaemia', 'electrolytes', 'muscle cramps'] }
});

/* ---------------- التسمّم بالمعادن ---------------- */

DISEASES.push({
  id: 'lead-poisoning', group: 'systems', tier: 'rare', emergency: false,
  name: { ar: 'التسمّم بالرصاص', en: 'Lead poisoning' },
  short: {
    ar: 'معدن يتراكم بصمت من دهان قديم أو ورشة أو أوانٍ مزخرفة، ويؤذي دماغ الطفل النامي أذى قد لا يُسترجَع.',
    en: 'A metal that accumulates silently from old paint, a workshop or decorated vessels, and harms a growing child brain in ways that may not be reversed.'
  },
  organs: ['brain', 'blood', 'kidneys', 'peripheral-nerve', 'bone-inside'],
  aliases: [],
  keywords: { ar: ['الرصاص', 'دهان قديم', 'تسمم مهني', 'فقر دم وتأخر نمو'], en: ['lead poisoning', 'old paint', 'occupational exposure', 'developmental delay'] }
});

DISEASES.push({
  id: 'mercury-poisoning', group: 'systems', tier: 'rare', emergency: false,
  name: { ar: 'التسمّم بالزئبق', en: 'Mercury poisoning' },
  short: {
    ar: 'يدخل من سمك كبير معمّر أو كريم تفتيح بشرة أو بخار في ورشة، فيصيب الأعصاب والكلى، وأخطر ما يكون على الجنين.',
    en: 'It enters from large long-lived fish, skin-lightening cream or vapour in a workshop, striking nerves and kidneys, and is most dangerous to an unborn baby.'
  },
  organs: ['brain', 'kidneys', 'peripheral-nerve', 'nervous', 'embryo'],
  aliases: [],
  keywords: { ar: ['الزئبق', 'كريم تفتيح', 'سمك التونة', 'رعشة وخدر'], en: ['mercury poisoning', 'skin lightening cream', 'fish mercury', 'tremor'] }
});

/* ---------------- المناعة والحمّى ---------------- */

DISEASES.push({
  id: 'food-allergy-adult', group: 'allergy', tier: 'common', emergency: false,
  name: { ar: 'الحساسية الغذائية عند البالغين', en: 'Food allergy in adults' },
  short: {
    ar: 'ردّ مناعي سريع تجاه طعام بعينه يظهر خلال دقائق — غير عدم التحمّل الذي يسبّب نفخة وغازاً بلا خطر — وقد ينتهي بصدمة حساسية.',
    en: 'A rapid immune reaction to a particular food appearing within minutes — unlike intolerance, which causes bloating and wind without danger — and it can end in anaphylactic shock.'
  },
  organs: ['immunity', 'skin', 'small-intestine', 'bronchi', 'tongue'],
  aliases: [],
  keywords: { ar: ['حساسية طعام', 'حساسية المكسرات', 'حساسية البحريات', 'عدم تحمّل'], en: ['food allergy', 'nut allergy', 'shellfish allergy', 'intolerance'] }
});

DISEASES.push({
  id: 'fever-unknown-origin', group: 'systems', tier: 'rare', emergency: false,
  name: { ar: 'الحمّى المجهولة السبب', en: 'Fever of unknown origin' },
  short: {
    ar: 'حرارة تتكرّر أسابيع ولا يجد لها الفحص الأول سبباً، فتصير هي نفسها مسألة تحتاج بحثاً منظّماً لا مضاداً حيوياً بعد آخر.',
    en: 'A temperature that returns for weeks with no cause found on first testing, becoming a question of its own that needs an organised search rather than one antibiotic after another.'
  },
  organs: ['immunity', 'lymph-node', 'blood', 'liver', 'spleen'],
  aliases: [],
  keywords: { ar: ['حمّى مستمرة', 'حرارة متكرّرة', 'تعرّق ليلي', 'سبب غير معروف'], en: ['fever of unknown origin', 'persistent fever', 'night sweats', 'PUO'] }
});

/* ---------------- التعرّض المهني ---------------- */

DISEASES.push({
  id: 'noise-induced-hearing-loss', group: 'systems', tier: 'common', emergency: false,
  name: { ar: 'فقدان السمع من الضوضاء', en: 'Noise-induced hearing loss' },
  short: {
    ar: 'ضجيج الورشة أو السمّاعة العالية يقتل خلايا شعرية في الأذن الداخلية لا تُعوَّض، فيضيع السمع تدريجياً ولا يعود — لكنه يُمنع كلّه.',
    en: 'Workshop noise or loud headphones kill hair cells in the inner ear that are never replaced, so hearing is lost gradually and does not return — yet it is wholly preventable.'
  },
  organs: ['ear', 'balance', 'brain', 'nervous'],
  aliases: [],
  keywords: { ar: ['ضجيج العمل', 'سماعات عالية', 'طنين بعد الحفلة', 'حماية السمع'], en: ['noise induced hearing loss', 'occupational noise', 'earplugs', 'tinnitus'] }
});

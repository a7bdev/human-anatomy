/* ============================================================
   موسوعة الأمراض — فهرس أمراض الأطفال والنمو
   dx/index-peds.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-peds.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- حديثو الولادة ---------------- */

DISEASES.push({
  id: 'neonatal-jaundice', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'اليرقان الوليدي (صفار المولود)', en: "Newborn jaundice" },
  short: {
    ar: 'اصفرار جلد المولود وبياض عينيه في أيامه الأولى لأن كبده الحديث لم يتقن بعد التخلّص من مادة البيليروبين. أكثره طبيعي ويزول، وقليله يحتاج علاجاً سريعاً.',
    en: "Yellowing of a newborn skin and the whites of the eyes in the first days, because the young liver has not yet mastered clearing bilirubin. Most of it is normal and passes; a small share needs prompt treatment."
  },
  organs: ['liver', 'liver-lobule', 'blood'],
  aliases: ['اليرقان'],
  keywords: { ar: ['صفار المولود', 'اصفرار الرضيع', 'بيليروبين'], en: ['neonatal jaundice', 'bilirubin', 'phototherapy'] }
});

DISEASES.push({
  id: 'prematurity', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'الخداج (الولادة المبكّرة)', en: "Prematurity (preterm birth)" },
  short: {
    ar: 'ولادة الطفل قبل إتمام سبعة وثلاثين أسبوعاً من الحمل، فيخرج قبل أن تكتمل أعضاؤه — والرئتان أولها — فيحتاج دعماً حتى ينضج ما نقص.',
    en: "Birth before thirty-seven completed weeks of pregnancy, so the baby arrives before the organs are finished, the lungs first of all, and needs support until what is missing matures."
  },
  organs: ['fetal-circulation', 'alveoli', 'lungs', 'embryo', 'brain'],
  aliases: ['الولادة المبكرة', 'ضيق تنفّس الوليد'],
  keywords: { ar: ['الطفل الخديج', 'الحضّانة', 'ولادة مبتسرة'], en: ['premature baby', 'preterm', 'NICU', 'incubator'] }
});

/* ---------------- الرضيع ---------------- */

DISEASES.push({
  id: 'infant-colic', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'المغص الرضيعي', en: "Infant colic" },
  short: {
    ar: 'بكاء شديد متكرّر عند رضيع سليم تماماً، يبدأ في الأسابيع الأولى ويشتدّ آخر النهار، ثم يزول من تلقاء نفسه قبل الشهر الرابع أو الخامس.',
    en: "Intense repeated crying in an otherwise entirely healthy baby, starting in the first weeks, worst in the late afternoon, and settling on its own before the fourth or fifth month."
  },
  organs: ['small-intestine', 'large-intestine', 'stomach'],
  aliases: ['المغص الرضيعي'],
  keywords: { ar: ['بكاء الرضيع', 'غازات الرضيع', 'مغص الشهور الأولى'], en: ['colic', 'excessive crying', 'infant gas'] }
});

DISEASES.push({
  id: 'teething', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'التسنين', en: "Teething" },
  short: {
    ar: 'بزوغ الأسنان اللبنية عبر اللثة في السنة الأولى، يصحبه تهيّج وسيلان لعاب ورغبة في العضّ لأيام حول كل سنّ — ولا يسبّب حمّى عالية ولا إسهالاً.',
    en: "Milk teeth pushing through the gum during the first year, with irritability, drooling and a wish to bite for a few days around each tooth; it does not cause high fever or diarrhoea."
  },
  organs: ['child-teeth', 'teeth'],
  aliases: ['تأخّر البزوغ'],
  keywords: { ar: ['طلوع الأسنان', 'الأسنان اللبنية', 'سيلان اللعاب'], en: ['teething', 'milk teeth', 'primary teeth'] }
});

/* ---------------- الحمّى والتنفّس ---------------- */

DISEASES.push({
  id: 'febrile-seizure', group: 'child', tier: 'common', emergency: true,
  name: { ar: 'التشنّج الحراري', en: "Febrile seizure" },
  short: {
    ar: 'نوبة تشنّج تصيب طفلاً بين ستة أشهر وخمس سنوات مع ارتفاع حرارته. مرعبة للأهل، لكن أكثرها حميد ولا يترك أثراً — والنوبة الأولى تُفحَص دائماً.',
    en: "A convulsion in a child between six months and five years while the temperature is rising. Terrifying for parents, but most are benign and leave nothing behind; a first seizure is always assessed."
  },
  organs: ['brain', 'neuron', 'cortex-map'],
  aliases: ['التشنج الحراري'],
  keywords: { ar: ['تشنج الحرارة', 'اختلاج الحمى', 'نوبة مع السخونة'], en: ['febrile convulsion', 'fever fit', 'seizure with fever'] }
});

DISEASES.push({
  id: 'croup', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'الخانوق (التهاب الحنجرة والرغامى)', en: "Croup" },
  short: {
    ar: 'التهاب فيروسي يورّم مدخل الحنجرة عند الطفل الصغير، فيصير سعاله نابحاً كنباح الكلب ويشتدّ ليلاً، وقد يُسمع صرير عند الشهيق.',
    en: "A viral infection that swells the entrance of the voice box in a young child, so the cough turns barking like a dog, worsens at night, and a harsh sound may be heard on breathing in."
  },
  organs: ['larynx', 'vocal-folds', 'bronchi', 'pharynx'],
  aliases: ['التهاب الحنجرة'],
  keywords: { ar: ['السعال النباحي', 'صرير التنفس', 'التهاب الحنجرة عند الأطفال'], en: ['croup', 'barking cough', 'stridor'] }
});

DISEASES.push({
  id: 'bronchiolitis', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'التهاب القصيبات', en: "Bronchiolitis" },
  short: {
    ar: 'عدوى فيروسية تسدّ أدقّ ممرات الهواء في صدر الرضيع بالمخاط والتورّم، فيسرع نفسه ويصفر صدره ويتعب عن الرضاعة — وأشهر أسبابها الفيروس المخلوي التنفّسي.',
    en: "A viral infection that plugs the smallest airways in a baby chest with mucus and swelling, so breathing speeds up, the chest wheezes and feeding tires the child; the commonest cause is RSV."
  },
  organs: ['bronchi', 'alveoli', 'lungs'],
  aliases: [],
  keywords: { ar: ['الفيروس المخلوي', 'أزيز الرضيع', 'ضيق نفس الرضيع'], en: ['bronchiolitis', 'RSV', 'infant wheeze'] }
});

/* ---------------- الأذن والحلق ---------------- */

DISEASES.push({
  id: 'recurrent-otitis', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'التهاب الأذن الوسطى المتكرّر', en: "Recurrent middle ear infection" },
  short: {
    ar: 'التهابات تتكرّر خلف طبلة أذن الطفل لأن قناته السمعية قصيرة وأفقية فلا تصرّف جيداً. الخطر الحقيقي ليس الألم بل سائل يبقى فيضعف السمع في سنّ تعلّم الكلام.',
    en: "Infections that keep returning behind a child eardrum because the tube draining it is short and horizontal. The real risk is not the pain but fluid that lingers and dulls hearing while speech is being learned."
  },
  organs: ['ear', 'pharynx', 'lymphatic'],
  aliases: [],
  keywords: { ar: ['ألم الأذن عند الأطفال', 'سائل خلف الطبلة', 'أنبوب التهوية'], en: ['otitis media', 'glue ear', 'grommets', 'ear tubes'] }
});

DISEASES.push({
  id: 'tonsil-adenoid', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'تضخّم اللوزتين واللحمية', en: "Enlarged tonsils and adenoids" },
  short: {
    ar: 'نسيج لمفي في الحلق وخلف الأنف يكبر عند الأطفال فيضيّق مجرى الهواء، فيتنفّس الطفل من فمه ويشخر وقد ينقطع نفسه لحظات أثناء النوم.',
    en: "Lymphatic tissue in the throat and behind the nose enlarges in children and narrows the airway, so the child breathes through the mouth, snores, and may stop breathing for moments during sleep."
  },
  organs: ['pharynx', 'lymphatic', 'lymph-node', 'ear'],
  aliases: ['تضخّم الناميات'],
  keywords: { ar: ['اللحمية', 'الناميات', 'شخير الأطفال', 'استئصال اللوزتين'], en: ['adenoids', 'tonsillectomy', 'snoring child', 'sleep apnoea'] }
});

/* ---------------- النمو والتغذية ---------------- */

DISEASES.push({
  id: 'child-iron-anemia', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'فقر الدم بنقص الحديد عند الأطفال', en: "Iron deficiency anaemia in children" },
  short: {
    ar: 'نقص الحديد يمنع نخاع العظم من صنع خضاب كافٍ، فيشحب الطفل ويتعب بسرعة. وأثره الأخطر ليس الشحوب بل بطء الانتباه والتعلّم إن طال بلا علاج.',
    en: "A lack of iron stops the marrow making enough haemoglobin, so the child looks pale and tires quickly. The graver harm is not the pallor but slowed attention and learning if it is left untreated."
  },
  organs: ['blood', 'bone-inside', 'small-intestine', 'villi'],
  aliases: [],
  keywords: { ar: ['نقص الحديد', 'شحوب الطفل', 'الأنيميا عند الأطفال'], en: ['iron deficiency', 'child anaemia', 'pallor'] }
});

DISEASES.push({
  id: 'growth-delay', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'تأخّر النمو وقصر القامة', en: "Growth delay and short stature" },
  short: {
    ar: 'طفل أقصر من أقرانه أو توقّف منحنى طوله عن الصعود. أكثر الأسباب طبيعي وعائلي أو تأخّر بنيوي يلحق أقرانه لاحقاً، وقليلها مرض يستحقّ البحث.',
    en: "A child shorter than peers, or whose height curve has stopped climbing. Most causes are normal, familial or a constitutional delay that catches up later, and a minority are conditions worth looking for."
  },
  organs: ['growth-plate', 'pituitary', 'thyroid', 'skeleton'],
  aliases: ['قصور هرمون النمو'],
  keywords: { ar: ['قصر القامة', 'منحنى النمو', 'هرمون النمو', 'عمر العظام'], en: ['short stature', 'growth chart', 'growth hormone', 'bone age'] }
});

DISEASES.push({
  id: 'child-obesity', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'السمنة عند الأطفال', en: "Childhood obesity" },
  short: {
    ar: 'تراكم دهن زائد يرفع منحنى وزن الطفل فوق طوله، ويبدأ مبكراً في إتعاب الكبد والبنكرياس والمفاصل والنفس — وأثره على نفسية الطفل لا يقلّ عن أثره على جسده.',
    en: "Excess fat that lifts a child weight curve above the height curve and begins early to burden the liver, pancreas, joints and breathing; its effect on the child feelings is no less than on the body."
  },
  organs: ['liver', 'pancreas', 'heart', 'growth-plate'],
  aliases: [],
  keywords: { ar: ['زيادة وزن الأطفال', 'مؤشر كتلة الجسم', 'الوزن الزائد'], en: ['childhood obesity', 'BMI centile', 'overweight child'] }
});

/* ---------------- العصبية والسلوكية ---------------- */

DISEASES.push({
  id: 'bedwetting', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'التبوّل اللاإرادي', en: "Bedwetting (nocturnal enuresis)" },
  short: {
    ar: 'تبوّل الطفل في فراشه ليلاً بعد سنّ الخامسة. ليس كسلاً ولا عناداً ولا سوء تربية، بل تأخّر في نضج إشارة بين المثانة والدماغ، وأكثره يزول مع السنّ.',
    en: "A child wetting the bed at night after the age of five. It is not laziness, defiance or poor upbringing, but a delay in the maturing of a signal between bladder and brain, and most of it resolves with age."
  },
  organs: ['bladder', 'kidneys', 'urethra', 'brain'],
  aliases: [],
  keywords: { ar: ['التبول الليلي', 'بلل الفراش', 'سلس ليلي'], en: ['bedwetting', 'enuresis', 'night wetting'] }
});

DISEASES.push({
  id: 'strabismus', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'الحول', en: "Squint (strabismus)" },
  short: {
    ar: 'انحراف إحدى العينين عن اتجاه الأخرى فلا تنظران إلى نقطة واحدة. عند الطفل يُهمل الدماغ صورة العين المنحرفة فيضعف بصرها إن لم يُعالَج مبكراً.',
    en: "One eye turning away from the direction of the other so the two do not look at the same point. In a child the brain ignores the image from the deviating eye, and its sight weakens unless treated early."
  },
  organs: ['eye', 'cranial-nerves', 'retina', 'brain'],
  aliases: ['شلل العصب المحرّك للعين'],
  keywords: { ar: ['حول العين', 'كسل العين', 'انحراف العين'], en: ['strabismus', 'squint', 'lazy eye', 'amblyopia'] }
});

DISEASES.push({
  id: 'speech-delay', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'تأخّر الكلام', en: "Speech and language delay" },
  short: {
    ar: 'طفل يتكلّم أقلّ ممّا يُنتظر في عمره أو لا يركّب كلمتين في وقتهما. أول ما يُستبعَد ضعف السمع، ثم يُنظر في الفهم والتواصل لا في عدد الكلمات وحده.',
    en: "A child speaking less than expected for the age, or not putting two words together on time. Hearing loss is ruled out first, then understanding and communication are examined, not the word count alone."
  },
  organs: ['ear', 'larynx', 'brain', 'cortex-map'],
  aliases: [],
  keywords: { ar: ['تأخر النطق', 'طفل لا يتكلم', 'حصيلة الكلمات'], en: ['speech delay', 'language delay', 'late talker'] }
});

DISEASES.push({
  id: 'autism', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'التوحّد (اضطراب طيف التوحّد)', en: "Autism spectrum" },
  short: {
    ar: 'اختلاف في تكوين الدماغ يجعل التواصل الاجتماعي وقراءة الآخرين أصعب، مع اهتمامات مركّزة وحساسية للحواس. طيف واسع يُدار ويُدعم، لا مرض يُشفى ولا ذنب لأحد فيه.',
    en: "A difference in how the brain is built that makes social communication and reading other people harder, with focused interests and sensory sensitivity. A wide spectrum that is supported and managed, not an illness to cure, and nobody is at fault."
  },
  organs: ['brain', 'neuron', 'limbic', 'cortex-map'],
  aliases: ['التوحّد'],
  keywords: { ar: ['طيف التوحد', 'اضطراب التواصل', 'التدخل المبكر'], en: ['autism', 'ASD', 'early intervention'] }
});

DISEASES.push({
  id: 'adhd', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'فرط الحركة وتشتّت الانتباه', en: "Attention deficit hyperactivity disorder" },
  short: {
    ar: 'اختلاف عصبي يجعل ضبط الانتباه وكبح الاندفاع أصعب ممّا هو عند أقران الطفل، ويظهر في البيت والمدرسة معاً. ليس قلّة أدب ولا فشلاً في التربية.',
    en: "A neurological difference that makes holding attention and curbing impulse harder than for peers, showing up at home and at school alike. It is not bad manners nor a failure of parenting."
  },
  organs: ['brain', 'neuron', 'limbic', 'cortex-map'],
  aliases: ['فرط الحركة وتشتّت الانتباه'],
  keywords: { ar: ['قلة التركيز', 'الحركة الزائدة', 'الاندفاعية'], en: ['ADHD', 'hyperactivity', 'inattention'] }
});

DISEASES.push({
  id: 'down-syndrome', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'متلازمة داون', en: "Down syndrome" },
  short: {
    ar: 'وجود نسخة ثالثة من الكروموسوم الحادي والعشرين بسبب خطأ في الانقسام المنصّف عند تكوّن البويضة أو الحيوان المنوي. القدرات تتفاوت كثيراً، والمتابعة الطبية المنتظمة تصنع فرقاً كبيراً.',
    en: "A third copy of chromosome twenty-one, caused by an error in meiosis as the egg or sperm forms. Abilities vary widely, and regular medical follow-up makes a large difference."
  },
  organs: ['meiosis', 'dna', 'heart', 'thyroid', 'embryo'],
  aliases: ['متلازمة داون'],
  keywords: { ar: ['التثلث الصبغي 21', 'خلل الكروموسومات', 'داون'], en: ['Down syndrome', 'trisomy 21', 'chromosome'] }
});

DISEASES.push({
  id: 'cerebral-palsy', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'الشلل الدماغي', en: "Cerebral palsy" },
  short: {
    ar: 'اضطراب دائم في الحركة والوضعية سببه إصابة أصابت دماغاً ينمو قبل الولادة أو حولها. الإصابة نفسها لا تتقدّم، لكن أثرها في العضلات والمفاصل يتغيّر مع نمو الطفل.',
    en: "A lasting disorder of movement and posture caused by an injury to a developing brain before or around birth. The injury itself does not progress, but its effect on muscles and joints changes as the child grows."
  },
  organs: ['brain', 'cortex-map', 'muscles', 'spinal-cord'],
  aliases: ['الشلل الدماغي'],
  keywords: { ar: ['التشنج العضلي عند الأطفال', 'اضطراب الحركة', 'العلاج الطبيعي'], en: ['cerebral palsy', 'spasticity', 'physiotherapy'] }
});

/* ---------------- الجراحة الصغرى ---------------- */

DISEASES.push({
  id: 'child-hernia', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'الفتق السرّي والإربي عند الأطفال', en: "Umbilical and inguinal hernia in children" },
  short: {
    ar: 'فتحة لم تُغلق في جدار البطن يبرز منها نسيج تحت الجلد: عند السرّة غالباً تُغلق وحدها، وفي الأربية لا تُغلق وتحتاج إصلاحاً جراحياً.',
    en: "An opening left unclosed in the abdominal wall through which tissue bulges under the skin: at the navel it usually closes by itself, while in the groin it does not and needs surgical repair."
  },
  organs: ['small-intestine', 'muscles', 'testis', 'male-reproductive', 'fetal-circulation'],
  aliases: ['الفتق السري', 'الفتق الإربي'],
  keywords: { ar: ['بروز السرة', 'انتفاخ الأربية', 'فتق الطفل'], en: ['umbilical hernia', 'inguinal hernia', 'groin lump'] }
});

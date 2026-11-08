/* ============================================================
   موسوعة الأمراض — فهرس الأمراض الوراثية
   dx/index-genetic.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-genetic.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- خلل الصبغيات ---------------- */

DISEASES.push({
  id: 'turner-syndrome', group: 'genetic', tier: 'common', emergency: false,
  name: { ar: 'متلازمة تيرنر', en: 'Turner syndrome' },
  short: {
    ar: 'أنثى وُلدت بصبغي جنسي واحد بدل اثنين، فيتوقّف الطول عند حدّ قصير ولا يأتي البلوغ وحده، ويحتاج القلب والكلية فحصاً لأن فيهما عيوباً صامتة كثيراً.',
    en: 'A girl born with one sex chromosome instead of two, so height stops short and puberty does not arrive on its own, while the heart and kidney need checking because silent defects are common in them.'
  },
  organs: ['meiosis', 'ovary', 'female-reproductive', 'heart', 'kidneys', 'dna'],
  aliases: ['متلازمة تيرنر'],
  keywords: { ar: ['قصر القامة عند البنات', 'غياب البلوغ', 'صبغي إكس واحد', 'عقم'], en: ['Turner syndrome', '45,X', 'short stature', 'ovarian failure'] }
});

DISEASES.push({
  id: 'klinefelter', group: 'genetic', tier: 'common', emergency: false,
  name: { ar: 'متلازمة كلاينفلتر', en: 'Klinefelter syndrome' },
  short: {
    ar: 'ذكر وُلد بصبغي إكس زائد، فتبقى الخصية صغيرة ويقلّ هرمون الذكورة ويضعف إنتاج الحيوان المنوي، وكثير منهم لا يُكتشف إلا حين يتأخّر الإنجاب.',
    en: 'A male born with an extra X chromosome, so the testes stay small, male hormone runs low and sperm production is poor; many are only found when a pregnancy fails to come.'
  },
  organs: ['meiosis', 'testis', 'male-reproductive', 'breast', 'dna'],
  aliases: ['متلازمة كلاينفلتر'],
  keywords: { ar: ['صبغي إكس زائد', 'ضعف الخصوبة عند الرجل', 'نقص التستوستيرون', 'تضخّم الثدي عند الذكر'], en: ['Klinefelter', '47,XXY', 'male infertility', 'hypogonadism'] }
});

DISEASES.push({
  id: 'fragile-x', group: 'genetic', tier: 'common', emergency: false,
  name: { ar: 'متلازمة إكس الهشّ', en: 'Fragile X syndrome' },
  short: {
    ar: 'أشيع سبب وراثي معروف للإعاقة الذهنية، سببه خلل في جين على صبغي إكس، فيصيب الذكور أشدّ من الإناث ويصحبه كلام متأخّر وقلق اجتماعي وحساسية شديدة للضجيج.',
    en: 'The commonest known inherited cause of intellectual disability, from a fault in a gene on the X chromosome; it hits boys harder than girls and comes with late speech, social anxiety and marked sensitivity to noise.'
  },
  organs: ['dna', 'brain', 'neuron', 'meiosis', 'testis'],
  aliases: [],
  keywords: { ar: ['إعاقة ذهنية وراثية', 'تأخّر الكلام', 'صبغي إكس', 'فرط الحركة'], en: ['Fragile X', 'FMR1', 'intellectual disability', 'autism spectrum'] }
});

/* ---------------- أمراض النسيج الضامّ والهيكل ---------------- */

DISEASES.push({
  id: 'marfan', group: 'genetic', tier: 'common', emergency: false,
  name: { ar: 'متلازمة مارفان', en: 'Marfan syndrome' },
  short: {
    ar: 'خلل في بروتين يشدّ النسيج الضامّ في الجسم كلّه، فيطول الهيكل وتتخلّع عدسة العين ويتّسع الشريان الأبهر باطّراد — وهذا الاتّساع هو الخطر الحقيقي لا الطول.',
    en: 'A fault in a protein that braces connective tissue throughout the body: the skeleton lengthens, the eye lens slips and the aorta widens year on year, and that widening, not the height, is the real danger.'
  },
  organs: ['vessels', 'vessel-types', 'heart', 'eye', 'skeleton', 'tendon-ligament'],
  aliases: [],
  keywords: { ar: ['طول غير معتاد', 'اتّساع الأبهر', 'خلع عدسة العين', 'أصابع عنكبوتية'], en: ['Marfan', 'aortic root dilatation', 'ectopia lentis', 'fibrillin'] }
});

DISEASES.push({
  id: 'ehlers-danlos', group: 'genetic', tier: 'rare', emergency: false,
  name: { ar: 'متلازمة إهلرز-دانلوس', en: 'Ehlers-Danlos syndromes' },
  short: {
    ar: 'مجموعة أمراض وراثية في الكولاجين تجعل الجلد مطّاطاً والمفاصل تخرج من مكانها بسهولة، ويُنسب الألم المزمن فيها سنوات إلى «الدلع» قبل أن يُعرف سببه.',
    en: 'A family of inherited collagen disorders that leave the skin stretchy and the joints slipping out of place easily, and whose chronic pain is dismissed for years before the cause is recognised.'
  },
  organs: ['skin', 'tendon-ligament', 'vessels', 'shoulder', 'hip', 'vessel-types'],
  aliases: [],
  keywords: { ar: ['مفاصل مرنة', 'خلع متكرّر', 'جلد مطّاطي', 'كدمات سهلة'], en: ['Ehlers-Danlos', 'hypermobility', 'collagen disorder', 'joint dislocation'] }
});

DISEASES.push({
  id: 'osteogenesis-imperfecta', group: 'genetic', tier: 'rare', emergency: false,
  name: { ar: 'تكوّن العظم الناقص (العظم الزجاجي)', en: 'Osteogenesis imperfecta (brittle bone disease)' },
  short: {
    ar: 'عظم يُبنى بكولاجين معيب فينكسر من رضّ تافه أو بلا سبب ظاهر، ومعه غالباً زُرقة في بياض العين وأسنان هشّة وضعف سمع يبدأ مبكّراً.',
    en: 'Bone built with faulty collagen that breaks from a trivial knock or with no obvious cause, usually with a blue tinge to the whites of the eyes, fragile teeth and hearing loss that starts early.'
  },
  organs: ['skeleton', 'bone-inside', 'teeth', 'ear', 'growth-plate', 'eye'],
  aliases: [],
  keywords: { ar: ['كسور متكرّرة عند الطفل', 'العظم الزجاجي', 'بياض العين الأزرق', 'كولاجين معيب'], en: ['osteogenesis imperfecta', 'brittle bones', 'blue sclerae', 'collagen type I'] }
});

/* ---------------- الأعصاب والدماغ ---------------- */

DISEASES.push({
  id: 'huntington', group: 'genetic', tier: 'rare', emergency: false,
  name: { ar: 'داء هنتنغتون', en: 'Huntington disease' },
  short: {
    ar: 'مرض وراثي سائد يبدأ في منتصف العمر بحركات راقصة لا إرادية وتغيّر في الطبع، ثم يتقدّم ببطء نحو تدهور الحركة والذاكرة — ويصيب نصف أبناء المريض في المتوسّط.',
    en: 'A dominantly inherited disease that begins in midlife with involuntary dance-like movements and a change of character, then advances slowly into loss of movement and memory, striking on average half the patient children.'
  },
  organs: ['brain', 'neuron', 'cortex-map', 'dna'],
  aliases: [],
  keywords: { ar: ['الرقص الوراثي', 'حركات لا إرادية', 'تغيّر الشخصية', 'وراثة سائدة'], en: ['Huntington', 'chorea', 'CAG repeat', 'autosomal dominant'] }
});

DISEASES.push({
  id: 'cmt', group: 'genetic', tier: 'common', emergency: false,
  name: { ar: 'داء شاركو-ماري-توث (الاعتلال العصبي الوراثي)', en: 'Charcot-Marie-Tooth disease (hereditary neuropathy)' },
  short: {
    ar: 'أشيع اعتلال عصبي وراثي: تضعف أعصاب الطرفين الطويلة أولاً فيسقط مقدّم القدم عند المشي، ويرتفع تقوّس القدم، ويضمر الساق حتى تُشبه قارورة مقلوبة.',
    en: 'The commonest inherited neuropathy: the long nerves of the limbs weaken first, so the front of the foot drops when walking, the arch rises high and the calf wastes until the leg looks like an upturned bottle.'
  },
  organs: ['peripheral-nerve', 'nervous', 'foot', 'hand', 'muscles'],
  aliases: [],
  keywords: { ar: ['سقوط القدم', 'قدم مقوّسة', 'ضمور الساق', 'اعتلال عصبي وراثي'], en: ['Charcot-Marie-Tooth', 'CMT', 'foot drop', 'pes cavus'] }
});

DISEASES.push({
  id: 'neurofibromatosis', group: 'genetic', tier: 'common', emergency: false,
  name: { ar: 'الورم الليفي العصبي', en: 'Neurofibromatosis' },
  short: {
    ar: 'مرض وراثي سائد تظهر علامته الأولى على الجلد: بقع بنّية بلون القهوة بالحليب منذ الطفولة، ثم أورام ليّنة حميدة على مسار الأعصاب، ومتابعة العين والسمع جزء من العلاج لا زيادة عليه.',
    en: 'A dominantly inherited disease whose first sign is on the skin: brown coffee-with-milk patches from childhood, then soft benign lumps along the nerves; watching the eyes and hearing is part of care, not an extra.'
  },
  organs: ['peripheral-nerve', 'skin', 'nervous', 'eye', 'brain', 'skeleton'],
  aliases: [],
  keywords: { ar: ['بقع القهوة بالحليب', 'أورام الأعصاب', 'داء ريكلنغهاوزن', 'نمش الإبط'], en: ['neurofibromatosis', 'NF1', 'cafe-au-lait spots', 'von Recklinghausen'] }
});

/* ---------------- الاستقلاب والتخزين ---------------- */

DISEASES.push({
  id: 'wilson-disease', group: 'genetic', tier: 'rare', emergency: false,
  name: { ar: 'داء ويلسون (ترسّب النحاس)', en: 'Wilson disease (copper overload)' },
  short: {
    ar: 'الكبد يعجز وراثياً عن التخلّص من النحاس فيتراكم فيه ثم في الدماغ، فيأتي الشابّ إمّا بمرض كبد غامض أو برجفة وتلعثم وتغيّر مزاج — وهو من قلائل أمراض الكبد الوراثية التي لها علاج فعّال.',
    en: 'The liver cannot clear copper, which builds up in it and then in the brain, so a young person presents either with unexplained liver disease or with tremor, slurred speech and mood change; it is one of the few inherited liver diseases with truly effective treatment.'
  },
  organs: ['liver', 'liver-lobule', 'brain', 'eye', 'kidneys', 'dna'],
  aliases: [],
  keywords: { ar: ['ترسّب النحاس', 'حلقة كايزر فلايشر', 'رجفة عند الشابّ', 'كبد غامض'], en: ['Wilson disease', 'copper', 'Kayser-Fleischer ring', 'ceruloplasmin'] }
});

DISEASES.push({
  id: 'gaucher', group: 'genetic', tier: 'rare', emergency: false,
  name: { ar: 'داء غوشيه', en: 'Gaucher disease' },
  short: {
    ar: 'خميرة ناقصة داخل الخلية تعجز عن تفكيك دهن معيّن، فيتكدّس في الطحال والكبد والنخاع: بطن منتفخ وكدمات ونزف وألم عظمي عند طفل بدا سليماً.',
    en: 'A missing enzyme inside the cell cannot break down a particular fat, which piles up in the spleen, liver and marrow: a swollen belly, bruising and bleeding, and bone pain in a child who looked well.'
  },
  organs: ['spleen', 'liver', 'bone-inside', 'blood', 'cell'],
  aliases: ['أمراض التخزين الليزوزومية'],
  keywords: { ar: ['تضخّم الطحال', 'أمراض التخزين', 'نقص خميرة', 'ألم عظمي عند الطفل'], en: ['Gaucher disease', 'lysosomal storage', 'glucocerebrosidase', 'splenomegaly'] }
});

DISEASES.push({
  id: 'cah', group: 'genetic', tier: 'common', emergency: false,
  name: { ar: 'تضخّم الكظر الخلقي', en: 'Congenital adrenal hyperplasia' },
  short: {
    ar: 'خلل وراثي في خميرة داخل الغدة الكظرية يوقف صنع الكورتيزول ويحوّل المسار إلى هرمونات ذكورة، فتُولد البنت بأعضاء غامضة الشكل وقد ينهار الرضيع في أسبوعه الثاني بفقد الملح.',
    en: 'An inherited enzyme fault in the adrenal gland halts cortisol production and diverts the pathway to male hormones, so a girl may be born with ambiguous genitalia and a baby may collapse in the second week from salt loss.'
  },
  organs: ['adrenal', 'pituitary', 'female-reproductive', 'male-reproductive', 'kidneys'],
  aliases: [],
  keywords: { ar: ['نقص الكورتيزول الخلقي', 'أزمة فقد الملح', 'أعضاء غامضة', 'مسح المواليد'], en: ['congenital adrenal hyperplasia', 'CAH', '21-hydroxylase', 'salt-wasting crisis'] }
});

/* ---------------- الدم والأوعية ---------------- */

DISEASES.push({
  id: 'familial-hypercholesterolemia', group: 'genetic', tier: 'common', emergency: false,
  name: { ar: 'فرط كوليسترول الدم العائلي', en: 'Familial hypercholesterolaemia' },
  short: {
    ar: 'كوليسترول ضارّ مرتفع منذ الولادة لأن الكبد يعجز وراثياً عن سحبه من الدم، فتبدأ الشرايين تتصلّب في العشرينات وتأتي الجلطة مبكّرة في أسرة تتوارثها.',
    en: 'Harmful cholesterol runs high from birth because the liver cannot pull it out of the blood, so arteries begin to harden in the twenties and heart attacks come early in a family that passes it down.'
  },
  organs: ['liver', 'coronary', 'vessels', 'vessel-types', 'heart', 'blood', 'dna'],
  aliases: [],
  keywords: { ar: ['كوليسترول عائلي', 'جلطة مبكّرة في العائلة', 'ترسّبات حول العين', 'تصلّب الشرايين المبكّر'], en: ['familial hypercholesterolaemia', 'LDL receptor', 'xanthelasma', 'premature CAD'] }
});

DISEASES.push({
  id: 'fmf', group: 'genetic', tier: 'common', emergency: false,
  name: { ar: 'حمّى البحر المتوسط العائلية', en: 'Familial Mediterranean fever' },
  short: {
    ar: 'نوبات حمّى وألم بطن حادّ تمرّ خلال يوم إلى ثلاثة ثم تختفي تماماً، فتتكرّر سنوات ويُشخَّص صاحبها بالزائدة أو بالقولون العصبي قبل أن يُعرف أنه مرض وراثي في منطقتنا.',
    en: 'Attacks of fever and severe abdominal pain that pass within one to three days and then vanish completely, recurring for years while the person is labelled appendicitis or irritable bowel before the inherited disease common in our region is recognised.'
  },
  organs: ['serous-membranes', 'immunity', 'nephron', 'kidneys', 'dna'],
  aliases: [],
  keywords: { ar: ['نوبات حمّى متكرّرة', 'ألم بطن دوري', 'التهاب الغشاء البريتوني', 'الداء النشواني'], en: ['familial Mediterranean fever', 'FMF', 'MEFV', 'serositis', 'amyloidosis'] }
});

/* ---------------- العين والجلد ---------------- */

DISEASES.push({
  id: 'retinitis-pigmentosa', group: 'genetic', tier: 'common', emergency: false,
  name: { ar: 'التهاب الشبكية الصباغي', en: 'Retinitis pigmentosa' },
  short: {
    ar: 'خلايا الشبكية تموت وراثياً خلية بعد خلية: يبدأ عمى ليلي في الصبا، ثم يضيق مجال النظر حتى يصير كالنظر من أنبوب، والمركز يبقى آخر ما يُفقد.',
    en: 'Retinal cells die off one by one for inherited reasons: night blindness begins in youth, then the field of vision narrows until it is like looking through a tube, with the centre the last to go.'
  },
  organs: ['retina', 'eye', 'dna'],
  aliases: ['التهاب الشبكية الصباغي'],
  keywords: { ar: ['عمى ليلي', 'ضيق مجال النظر', 'الرؤية النفقية', 'ضمور الشبكية'], en: ['retinitis pigmentosa', 'night blindness', 'tunnel vision', 'rod-cone dystrophy'] }
});

DISEASES.push({
  id: 'color-blindness', group: 'genetic', tier: 'common', emergency: false,
  name: { ar: 'عمى الألوان', en: 'Colour vision deficiency (colour blindness)' },
  short: {
    ar: 'خلل وراثي في مستقبلات اللون بالشبكية يخلط الأحمر بالأخضر غالباً، ينتقل على صبغي إكس فيصيب الذكور أكثر بكثير، ولا يؤثّر في حدّة البصر ولا يتدهور مع العمر.',
    en: 'An inherited fault in the colour receptors of the retina, usually confusing red with green; it travels on the X chromosome so it affects males far more, does not blur sight and does not worsen with age.'
  },
  organs: ['retina', 'eye', 'dna'],
  aliases: ['عمى الألوان'],
  keywords: { ar: ['خلط الأحمر بالأخضر', 'اختبار إيشيهارا', 'ضعف تمييز الألوان', 'وراثة مرتبطة بإكس'], en: ['colour blindness', 'red-green', 'Ishihara test', 'X-linked'] }
});

DISEASES.push({
  id: 'albinism', group: 'genetic', tier: 'common', emergency: false,
  name: { ar: 'المهق (البرص الوراثي)', en: 'Albinism' },
  short: {
    ar: 'نقص وراثي في صبغة الميلانين يترك الجلد والشعر والعين بلا لون يحميها، فتصير الشمس خطراً حقيقياً على الجلد، ويأتي ضعف البصر معه دائماً لا بالصدفة.',
    en: 'An inherited lack of melanin leaves skin, hair and eyes without their protective colour, so the sun becomes a real hazard to the skin, and poor eyesight always comes with it rather than by chance.'
  },
  organs: ['skin', 'hair-follicle', 'eye', 'retina', 'dna'],
  aliases: [],
  keywords: { ar: ['نقص الميلانين', 'حساسية الشمس', 'رأرأة العين', 'ضعف البصر الخلقي'], en: ['albinism', 'melanin', 'nystagmus', 'photophobia'] }
});

/* ============================================================
   موسوعة الأمراض — فهرس الإعاقات الجسدية والحسّية
   dx/index-physical.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-physical.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- إصابة النخاع الشوكي ---------------- */

DISEASES.push({
  id: 'paraplegia', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'الشلل السفلي (شلل الطرفين السفليين)', en: 'Paraplegia (lower-limb paralysis)' },
  short: {
    ar: 'انقطاع الإشارة في النخاع الشوكي تحت مستوى الرقبة، فتتوقّف الحركة والإحساس من خطٍّ معيّن على الجذع نزولاً، بينما تبقى اليدان والتنفّس والكلام كما هي. الحياة بعدها تُبنى على ما بقي لا على ما فُقد.',
    en: 'The signal is cut in the spinal cord below the neck, so movement and sensation stop from a certain line on the trunk downwards, while the hands, breathing and speech remain as they were. Life afterwards is built on what remains, not on what was lost.'
  },
  organs: ['spinal-cord', 'spine', 'vertebra-disc', 'muscles', 'bladder', 'skin', 'autonomic'],
  aliases: [],
  keywords: { ar: ['شلل الرجلين', 'الشلل النصفي السفلي', 'إصابة النخاع الصدري', 'كرسي متحرك'], en: ['paraplegia', 'spinal cord injury', 'thoracic SCI', 'wheelchair'] }
});

DISEASES.push({
  id: 'tetraplegia', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'الشلل الرباعي (إصابة النخاع الرقبي)', en: 'Tetraplegia (cervical spinal cord injury)' },
  short: {
    ar: 'إصابة النخاع داخل الرقبة تطال الأطراف الأربعة والجذع معاً، وكلّما علا مستواها زاد ما يتأثّر حتى يبلغ عضلات التنفّس. الفارق بين فقرة وفقرة يعني فارقاً كبيراً في القدرة اليومية.',
    en: 'A cord injury inside the neck affects all four limbs and the trunk together, and the higher its level the more is involved, up to the breathing muscles. The difference between one vertebra and the next means a large difference in daily ability.'
  },
  organs: ['spinal-cord', 'spine', 'hand', 'diaphragm', 'autonomic', 'muscles', 'bladder', 'skin'],
  aliases: [],
  keywords: { ar: ['شلل رباعي', 'إصابة الرقبة', 'شلل الأطراف الأربعة', 'النخاع الرقبي'], en: ['tetraplegia', 'quadriplegia', 'cervical cord injury', 'C-level injury'] }
});

DISEASES.push({
  id: 'autonomic-dysreflexia', group: 'physical', tier: 'rare', emergency: true,
  name: { ar: 'فرط المنعكس الذاتي بعد إصابة النخاع', en: 'Autonomic dysreflexia after spinal cord injury' },
  short: {
    ar: 'ارتفاع مفاجئ وخطير في ضغط الدم عند من أصيب نخاعه فوق المستوى الصدري السادس، يشعله منبّه تافه تحت مستوى الإصابة مثل مثانة ممتلئة. صداع نابض وتعرّق فوق الإصابة، ونافذته ساعة لا يوم.',
    en: 'A sudden and dangerous rise in blood pressure in a person whose cord was injured above the sixth thoracic level, set off by a trivial stimulus below the injury such as a full bladder. A pounding headache and sweating above the injury, and its window is an hour, not a day.'
  },
  organs: ['autonomic', 'spinal-cord', 'bladder', 'vessel-types', 'heart', 'anorectal'],
  aliases: [],
  keywords: { ar: ['ارتفاع الضغط بعد إصابة النخاع', 'صداع مفاجئ شلل', 'خلل الانعكاس الذاتي'], en: ['autonomic dysreflexia', 'hyperreflexia', 'AD spinal cord'] }
});

/* ---------------- الشلل بعد إصابة الدماغ ---------------- */

DISEASES.push({
  id: 'hemiplegia', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'الشلل الشقّي بعد السكتة (الفالج)', en: 'Hemiplegia after stroke' },
  short: {
    ar: 'ضعف أو شلل في ذراع وساق جانب واحد من الجسم بعد إصابة الجانب المقابل من الدماغ. ما يُستردّ منه يعتمد على التأهيل المبكّر أكثر ممّا يعتمد على حجم الإصابة وحده.',
    en: 'Weakness or paralysis of the arm and leg on one side of the body after injury to the opposite side of the brain. How much returns depends on early rehabilitation more than on the size of the injury alone.'
  },
  organs: ['brain', 'cortex-map', 'muscles', 'shoulder', 'hand', 'foot', 'spinal-cord'],
  aliases: ['الشلل النصفي'],
  keywords: { ar: ['الفالج', 'شلل نصفي', 'شلل جانب واحد', 'تأهيل السكتة'], en: ['hemiplegia', 'hemiparesis', 'stroke rehabilitation', 'one-sided weakness'] }
});

DISEASES.push({
  id: 'spasticity', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'التشنّج العضلي والتقفّع', en: 'Spasticity and contractures' },
  short: {
    ar: 'عضلة مشلولة لا تسترخي بل تشدّ وتقاوم المدّ، ثم تقصر مع الشهور حتى يعلق المفصل في وضع لا يعود منه. أخطر ما فيه أنه يصنع إعاقةً جديدة فوق الإعاقة الأصلية، وأغلبه يُمنع.',
    en: 'A paralysed muscle does not relax but tightens and resists stretch, then shortens over months until the joint locks in a position it does not come back from. Its danger is that it creates a new disability on top of the original one, and most of it is preventable.'
  },
  organs: ['muscles', 'muscle-fiber', 'spinal-cord', 'tendon-ligament', 'knee', 'elbow', 'nervous'],
  aliases: [],
  keywords: { ar: ['تشنج العضلات', 'تيبس المفاصل', 'تقفع', 'شدّ العضلة بعد الشلل'], en: ['spasticity', 'contracture', 'muscle tightness', 'joint stiffness'] }
});

/* ---------------- فقد الطرف ---------------- */

DISEASES.push({
  id: 'limb-amputation', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'بتر الطرف والطرف الصناعي', en: 'Limb amputation and prosthetics' },
  short: {
    ar: 'فقدُ جزء من ذراع أو ساق بجراحة بعد إصابة أو مرض في الأوعية أو عدوى لا تُسيطر. ما بعد البتر مسارٌ طويل من تشكيل الجذعة وتدريبها ثم تركيب طرف صناعي يُعاد ضبطه كلّما تغيّر الجسم.',
    en: 'Loss of part of an arm or leg by surgery after injury, vascular disease or an infection that cannot be controlled. What follows is a long path of shaping and conditioning the residual limb, then fitting a prosthesis that is readjusted whenever the body changes.'
  },
  organs: ['skeleton', 'muscles', 'skin', 'wound-healing', 'peripheral-nerve', 'foot', 'hand'],
  aliases: [],
  keywords: { ar: ['بتر الساق', 'بتر اليد', 'طرف اصطناعي', 'الجذعة'], en: ['amputation', 'prosthesis', 'residual limb', 'stump'] }
});

DISEASES.push({
  id: 'phantom-limb-pain', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'ألم الطرف الشبحي', en: 'Phantom limb pain' },
  short: {
    ar: 'إحساسٌ بطرفٍ لم يعد موجوداً، وأحياناً ألمٌ فيه: حرقٌ أو تشنّجٌ في أصابع مبتورة. ليس وهماً ولا مرضاً نفسياً، بل خريطةُ الجسم في الدماغ ما زالت تحتفظ بمكانه.',
    en: 'A sensation of a limb that is no longer there, and sometimes pain in it: burning or cramping in fingers that were removed. It is not imagination nor a psychiatric illness, but the body map in the brain still holding its place.'
  },
  organs: ['cortex-map', 'brain', 'peripheral-nerve', 'spinal-cord', 'skin-receptors'],
  aliases: ['الطرف الشبحي'],
  keywords: { ar: ['ألم الطرف المبتور', 'إحساس شبحي', 'ألم بعد البتر'], en: ['phantom limb pain', 'phantom sensation', 'post-amputation pain'] }
});

DISEASES.push({
  id: 'congenital-limb-difference', group: 'physical', tier: 'rare', emergency: false,
  name: { ar: 'اختلاف الأطراف الخلقي', en: 'Congenital limb difference' },
  short: {
    ar: 'طفلٌ يولد بيدٍ أو قدمٍ أو طرفٍ مختلف التكوين: ناقص الطول أو الأصابع أو غائب كلّياً. أغلب الحالات تحدث في الأسابيع الأولى من الحمل بلا سبب يُعرف، والطفل يتعلّم طريقته الخاصة قبل أن يتعلّمها من حوله.',
    en: 'A child born with a hand, foot or limb formed differently: short, missing digits, or absent altogether. Most happen in the first weeks of pregnancy with no known cause, and the child learns their own way of doing things before the people around them do.'
  },
  organs: ['embryo', 'skeleton', 'hand', 'foot', 'growth-plate', 'muscles'],
  aliases: [],
  keywords: { ar: ['نقص تكوّن الطرف', 'غياب اليد الخلقي', 'تشوه الأطراف الولادي'], en: ['limb reduction defect', 'congenital limb difference', 'limb deficiency'] }
});

/* ---------------- الأعصاب الطرفية والتناسق ---------------- */

DISEASES.push({
  id: 'brachial-plexus-injury', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'إصابة الضفيرة العضدية', en: 'Brachial plexus injury' },
  short: {
    ar: 'شدّةٌ تمزّق حزمة الأعصاب التي تخرج من الرقبة لتغذّي الذراع كلّها، فتُشلّ اليد أو الكتف ويختفي الإحساس فيهما. تقع عند الولادة المتعسّرة وعند حوادث الدرّاجات النارية، وتوقيتُ الجراحة فيها يحدّد المصير.',
    en: 'A force tears the bundle of nerves leaving the neck to supply the whole arm, paralysing the hand or the shoulder and taking sensation with it. It happens in difficult births and in motorcycle crashes, and the timing of surgery decides the outcome.'
  },
  organs: ['peripheral-nerve', 'shoulder', 'hand', 'nervous', 'muscles', 'elbow'],
  aliases: [],
  keywords: { ar: ['شلل إرب', 'شلل الذراع الولادي', 'قلع الجذور العصبية', 'الضفيرة العضدية'], en: ['brachial plexus injury', 'Erb palsy', 'nerve root avulsion', 'obstetric brachial palsy'] }
});

DISEASES.push({
  id: 'ataxia', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'الرنح (اختلال التناسق الحركي)', en: 'Ataxia (loss of motor coordination)' },
  short: {
    ar: 'القوّة موجودة والعضلات سليمة، لكن الحركة تفقد دقّتها: اليد تتجاوز هدفها والمشية تتّسع وتتمايل والكلام يتقطّع. المشكلة في ضبط الحركة لا في تنفيذها.',
    en: 'The strength is there and the muscles are intact, but movement loses its precision: the hand overshoots its target, the walk widens and sways, and speech breaks up. The problem is in steering movement, not in carrying it out.'
  },
  organs: ['brain', 'balance', 'spinal-cord', 'peripheral-nerve', 'muscles', 'eye'],
  aliases: [],
  keywords: { ar: ['ترنّح', 'فقد التوازن الحركي', 'المشية المترنّحة', 'رنح المخيخ'], en: ['ataxia', 'cerebellar ataxia', 'incoordination', 'wide-based gait'] }
});

DISEASES.push({
  id: 'post-polio', group: 'physical', tier: 'rare', emergency: false,
  name: { ar: 'شلل الأطفال ومتلازمة ما بعده', en: 'Polio paralysis and post-polio syndrome' },
  short: {
    ar: 'فيروس أتلف الخلايا العصبية المحرّكة في النخاع فترك ضعفاً دائماً في طرف أو أكثر. وبعد عقود من الثبات يعود الضعف والتعب عند بعضهم من جديد، وهذا ما يُسمّى متلازمة ما بعد شلل الأطفال.',
    en: 'A virus damaged the motor nerve cells in the cord and left permanent weakness in one limb or more. Decades later, after a long stable period, weakness and fatigue return in some, and this is called post-polio syndrome.'
  },
  organs: ['spinal-cord', 'neuron', 'muscles', 'muscle-fiber', 'skeleton', 'lungs'],
  aliases: [],
  keywords: { ar: ['شلل الأطفال', 'البوليو', 'ضعف ما بعد الشلل', 'ضمور الطرف'], en: ['poliomyelitis', 'polio', 'post-polio syndrome', 'PPS'] }
});

DISEASES.push({
  id: 'wheelchair-use', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'صحّة مستخدم الكرسي المتحرّك', en: 'Health of a wheelchair user' },
  short: {
    ar: 'الجلوس الطويل والدفع اليومي بالذراعين يفرضان مشكلاتهما الخاصّة: كتفٌ يتآكل، وجلدٌ تحت الضغط، ومثانةٌ ومعدةٌ تتأثّران بقلّة الحركة. هذه مشكلات الاستخدام لا مشكلات الإصابة الأصلية، وأغلبها يُتوقّع فيُمنع.',
    en: 'Long sitting and daily pushing with the arms bring their own problems: a shoulder that wears out, skin under pressure, and a bladder and gut affected by immobility. These are problems of use, not of the original injury, and most can be foreseen and prevented.'
  },
  organs: ['shoulder', 'skin', 'bladder', 'spine', 'muscles', 'hip', 'circulation'],
  aliases: [],
  keywords: { ar: ['الكرسي المتحرك', 'ألم الكتف من الدفع', 'الجلوس الطويل', 'قرحة الجلوس'], en: ['wheelchair user', 'shoulder overuse', 'prolonged sitting', 'seating pressure'] }
});

/* ---------------- الإعاقة الحسّية ---------------- */

DISEASES.push({
  id: 'vision-impairment', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'الإعاقة البصرية وفقد البصر', en: 'Visual impairment and blindness' },
  short: {
    ar: 'نقصٌ في الإبصار لا تصلحه النظّارة، يتدرّج من ضعفٍ شديد إلى انعدام الإدراك الضوئي. يختلف أثره اختلافاً كبيراً بحسب ما ضاع: المجال الجانبي أم المركز أم التباين أم الرؤية الليلية.',
    en: 'A loss of sight that glasses do not correct, ranging from severe low vision to no light perception. Its effect differs greatly by what was lost: the side field, the centre, contrast, or night vision.'
  },
  organs: ['eye', 'retina', 'cranial-nerves', 'brain', 'cortex-map'],
  aliases: [],
  keywords: { ar: ['كف البصر', 'ضعف الإبصار', 'العمى', 'ضعاف البصر', 'العصا البيضاء'], en: ['blindness', 'low vision', 'visual impairment', 'sight loss'] }
});

DISEASES.push({
  id: 'deafness', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'الصمم والإعاقة السمعية', en: 'Deafness and hearing disability' },
  short: {
    ar: 'فقدٌ للسمع يبلغ حدّاً يغيّر طريقة التواصل نفسها لا مجرّد شدّة الصوت. بعضُ من يعيشه يعتمد المعينات أو زراعة القوقعة، وبعضهم يعتمد لغة الإشارة ويعدّ نفسه من جماعةٍ لغوية لا من أصحاب مرض.',
    en: 'Hearing loss deep enough to change the way of communicating itself, not merely the volume of sound. Some who live with it rely on aids or a cochlear implant, and some rely on sign language and see themselves as part of a language community rather than as people with an illness.'
  },
  organs: ['ear', 'balance', 'brain', 'cortex-map', 'larynx'],
  aliases: [],
  keywords: { ar: ['الصمم', 'لغة الإشارة', 'زراعة القوقعة', 'سماعة الأذن', 'ضعف سمع شديد'], en: ['deafness', 'sign language', 'cochlear implant', 'hearing aid', 'profound hearing loss'] }
});

DISEASES.push({
  id: 'deafblindness', group: 'physical', tier: 'rare', emergency: false,
  name: { ar: 'ازدواج فقد السمع والبصر', en: 'Deafblindness (dual sensory loss)' },
  short: {
    ar: 'اجتماعُ ضعف السمع وضعف البصر في شخصٍ واحد، فلا تعوّض إحدى الحاسّتين الأخرى كما يحدث عادة. أثره ليس جمعَ إعاقتين بل إعاقةٌ ثالثة قائمة بذاتها، لأنها تمسّ التواصل والتنقّل والمعلومة معاً.',
    en: 'Hearing loss and sight loss together in one person, so neither sense compensates for the other as it normally would. Its effect is not two disabilities added, but a third condition of its own, because it touches communication, mobility and access to information at once.'
  },
  organs: ['ear', 'eye', 'retina', 'balance', 'skin-receptors', 'brain'],
  aliases: [],
  keywords: { ar: ['الصمم والعمى', 'فقد الحاستين', 'متلازمة آشر', 'اللمس للتواصل'], en: ['deafblindness', 'dual sensory impairment', 'Usher syndrome', 'tactile communication'] }
});

/* ---------------- النطق والتواصل ---------------- */

DISEASES.push({
  id: 'aphasia', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'الحبسة (فقد اللغة بعد إصابة الدماغ)', en: 'Aphasia (language loss after brain injury)' },
  short: {
    ar: 'إصابةٌ في مناطق اللغة بالدماغ تسلب القدرة على إخراج الكلمة أو على فهمها أو على الاثنين، بينما الذكاء والذاكرة والشخصية كما هي. أقسى ما فيها أن صاحبها يعرف ما يريد قوله ولا يجد طريقه إليه.',
    en: 'Injury to the language areas of the brain takes away the ability to produce words, to understand them, or both, while intelligence, memory and personality stay as they were. Its cruelty is that the person knows what they want to say and cannot find the way to it.'
  },
  organs: ['brain', 'cortex-map', 'nervous', 'tongue'],
  aliases: [],
  keywords: { ar: ['فقد النطق', 'حبسة بروكا', 'حبسة فرنيكه', 'صعوبة إيجاد الكلمة'], en: ['aphasia', 'Broca aphasia', 'Wernicke aphasia', 'word finding difficulty'] }
});

DISEASES.push({
  id: 'dysarthria', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'عسر التلفّظ (ضعف عضلات الكلام)', en: 'Dysarthria (weak speech muscles)' },
  short: {
    ar: 'اللغة سليمة والكلمة حاضرة في الذهن، لكن العضلات التي تنطقها ضعيفة أو غير متناسقة، فيخرج الكلام مطموساً أو بطيئاً أو أنفياً. يُخطئ السامع كثيراً فيحسبه سكراً أو تخلّفاً وهو ليس أيّاً منهما.',
    en: 'Language is intact and the word is there in the mind, but the muscles that pronounce it are weak or poorly coordinated, so speech comes out slurred, slow or nasal. Listeners often mistake it for drunkenness or low intelligence, and it is neither.'
  },
  organs: ['tongue', 'larynx', 'vocal-folds', 'facial-muscles', 'cranial-nerves', 'brain', 'lips'],
  aliases: [],
  keywords: { ar: ['تلعثم الكلام الحركي', 'كلام غير واضح', 'ضعف عضلات النطق', 'صوت أنفي'], en: ['dysarthria', 'slurred speech', 'motor speech disorder', 'nasal speech'] }
});

DISEASES.push({
  id: 'stuttering', group: 'physical', tier: 'common', emergency: false,
  name: { ar: 'التلعثم (التأتأة)', en: 'Stuttering' },
  short: {
    ar: 'انقطاعٌ في انسياب الكلام: تكرار مقطع أو إطالة حرف أو وقفةٌ صامتة تحبس الكلمة في الحلق. يبدأ غالباً في الطفولة المبكّرة، وليس سببه خجلاً ولا قلّة ذكاء ولا تقليداً لأحد.',
    en: 'A break in the flow of speech: a repeated syllable, a stretched sound, or a silent block that holds the word in the throat. It usually begins in early childhood, and it is not caused by shyness, low intelligence, or copying someone.'
  },
  organs: ['larynx', 'vocal-folds', 'brain', 'cortex-map', 'tongue', 'lips'],
  aliases: [],
  keywords: { ar: ['التأتأة', 'تلعثم الأطفال', 'تعثر الكلام', 'صعوبة انسياب الكلام'], en: ['stuttering', 'stammering', 'speech dysfluency', 'childhood onset fluency disorder'] }
});

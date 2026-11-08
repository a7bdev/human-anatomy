/* ============================================================
   موسوعة الأمراض — فهرس الأعصاب والدماغ (الدفعة الثانية)
   dx/index-neuro2.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-neuro2.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- إنذارات الدماغ الحادّة ---------------- */

DISEASES.push({
  id: 'tia', group: 'nerves', tier: 'common', emergency: true,
  name: { ar: 'النوبة الإقفارية العابرة', en: 'Transient ischaemic attack (TIA)' },
  short: {
    ar: 'أعراض سكتة دماغية كاملة تظهر ثم تزول من نفسها خلال دقائق أو ساعة. زوالها لا يعني زوال الخطر — هي إنذار بسكتة وشيكة، وأخطر أيامها اليومان الأوّلان.',
    en: 'Full stroke symptoms that appear then clear on their own within minutes or an hour. Their clearing does not mean the danger has cleared — this is a warning of an imminent stroke, and its most dangerous days are the first two.'
  },
  organs: ['brain', 'vessel-types', 'clotting', 'circulation', 'cortex-map'],
  aliases: [],
  keywords: { ar: ['جلطة عابرة', 'إنذار السكتة', 'سكتة صغيرة', 'خدر مؤقت', 'عمى عابر'], en: ['TIA', 'mini stroke', 'warning stroke', 'amaurosis fugax'] }
});

DISEASES.push({
  id: 'sah', group: 'nerves', tier: 'rare', emergency: true,
  name: { ar: 'النزف تحت العنكبوتية', en: 'Subarachnoid haemorrhage' },
  short: {
    ar: 'تمزّق وعاء دموي عند قاعدة الدماغ فينسكب الدم في الحيّز المحيط به. علامته الفارقة صداع يبلغ أشدّه في ثوانٍ، يصفه صاحبه بأنه أسوأ صداع في حياته.',
    en: 'A blood vessel at the base of the brain tears and blood spills into the space around it. Its hallmark is a headache that reaches its peak within seconds, described as the worst headache of a lifetime.'
  },
  organs: ['meninges', 'brain', 'vessel-types', 'skull', 'bbb'],
  aliases: ['النزف تحت العنكبوتي'],
  keywords: { ar: ['أسوأ صداع في حياتي', 'صداع الصاعقة', 'تمدد الأوعية', 'أم الدم', 'تيبس الرقبة'], en: ['subarachnoid haemorrhage', 'thunderclap headache', 'aneurysm', 'worst headache'] }
});

DISEASES.push({
  id: 'guillain-barre', group: 'autoimmune', tier: 'rare', emergency: true,
  name: { ar: 'متلازمة غيلان باريه', en: 'Guillain-Barré syndrome' },
  short: {
    ar: 'هجوم مناعي مفاجئ على أعصاب الأطراف بعد عدوى، فيبدأ خدر وضعف من القدمين ويصعد بالأيام إلى الجذع — وقد يبلغ عضلات التنفّس، ولهذا يُنوَّم صاحبه.',
    en: 'A sudden immune attack on the limb nerves after an infection: numbness and weakness begin in the feet and climb over days toward the trunk, and may reach the breathing muscles, which is why admission is needed.'
  },
  organs: ['peripheral-nerve', 'nervous', 'neuron', 'muscles', 'diaphragm'],
  aliases: ['متلازمة غيلان باريه'],
  keywords: { ar: ['ضعف صاعد', 'شلل صاعد', 'التهاب الأعصاب المناعي', 'غياب المنعكسات'], en: ['Guillain-Barre', 'GBS', 'ascending weakness', 'areflexia'] }
});

DISEASES.push({
  id: 'subdural-hematoma', group: 'nerves', tier: 'common', emergency: true,
  name: { ar: 'النزف تحت الجافية (تجمّع دموي حول الدماغ)', en: 'Subdural haematoma' },
  short: {
    ar: 'تمزّق وريد صغير بين الدماغ وغلافه فيتجمّع الدم ببطء ويضغط عليه. يكثر عند كبار السن ومن يستعملون مميّعات الدم، وقد يبدأ بعد ضربة رأس بسيطة نُسيت.',
    en: 'A small vein between the brain and its covering tears, and blood gathers slowly and presses on the brain. It is commonest in older people and those on blood thinners, and may follow a minor, forgotten knock to the head.'
  },
  organs: ['meninges', 'brain', 'skull', 'clotting', 'vessel-types'],
  aliases: ['النزف تحت الجافية'],
  keywords: { ar: ['نزيف حول الدماغ', 'ضربة الرأس عند كبار السن', 'مميعات الدم', 'تخليط متزايد'], en: ['subdural haematoma', 'head injury elderly', 'anticoagulant bleed'] }
});

/* ---------------- أمراض العصبون والحركة ---------------- */

DISEASES.push({
  id: 'als', group: 'nerves', tier: 'rare', emergency: false,
  name: { ar: 'التصلّب الجانبي الضموري (مرض العصبون الحركي)', en: 'Amyotrophic lateral sclerosis (motor neurone disease)' },
  short: {
    ar: 'موت تدريجي للخلايا العصبية التي تأمر العضلات بالحركة، فتضمر العضلات ويضعف الطرف أو الكلام أو البلع، بينما يبقى العقل والإحساس على حالهما.',
    en: 'A progressive death of the nerve cells that order muscles to move, so muscles waste and a limb, speech or swallowing weakens, while the mind and sensation remain as they were.'
  },
  organs: ['neuron', 'spinal-cord', 'muscles', 'muscle-fiber', 'nmj', 'diaphragm'],
  aliases: ['مرض العصبون الحركي'],
  keywords: { ar: ['العصبون الحركي', 'ضمور العضلات', 'رجفان العضلات', 'صعوبة البلع', 'تلعثم'], en: ['ALS', 'motor neurone disease', 'Lou Gehrig', 'fasciculations'] }
});

DISEASES.push({
  id: 'essential-tremor', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'الرعاش الأساسي', en: 'Essential tremor' },
  short: {
    ar: 'رجفة في اليدين تظهر أثناء الفعل — عند حمل الكوب أو الكتابة — وتهدأ عند الراحة. تسري في العائلات، وهي أشيع أسباب الرجفة وليست باركنسون.',
    en: 'A tremor of the hands that appears during action — lifting a cup or writing — and settles at rest. It runs in families, is the commonest cause of tremor, and is not Parkinson\'s.'
  },
  organs: ['brain', 'nervous', 'muscles', 'hand'],
  aliases: [],
  keywords: { ar: ['رجفة اليد', 'رعشة', 'رجفان أثناء الحركة', 'رعاش عائلي'], en: ['essential tremor', 'action tremor', 'familial tremor', 'shaky hands'] }
});

DISEASES.push({
  id: 'tourette', group: 'nerves', tier: 'rare', emergency: false,
  name: { ar: 'متلازمة توريت والعرّات', en: 'Tourette syndrome and tics' },
  short: {
    ar: 'حركات أو أصوات سريعة متكرّرة لا إرادية تبدأ في الطفولة، يسبقها إحساس ملحّ يزول بأدائها، ويمكن كبحها قليلاً ثم تنفجر — وليست عناداً ولا سوء تربية.',
    en: 'Rapid, repeated involuntary movements or sounds beginning in childhood, preceded by an urge that the act relieves; they can be held back briefly then burst out — and they are neither defiance nor poor upbringing.'
  },
  organs: ['brain', 'limbic', 'cortex-map', 'nervous', 'facial-muscles'],
  aliases: [],
  keywords: { ar: ['العرّات', 'تشنجات لا إرادية', 'رمش متكرر', 'أصوات لا إرادية', 'توريت'], en: ['Tourette', 'tics', 'vocal tics', 'premonitory urge'] }
});

/* ---------------- آلام الأعصاب ---------------- */

DISEASES.push({
  id: 'trigeminal-neuralgia', group: 'nerves', tier: 'rare', emergency: false,
  name: { ar: 'ألم العصب ثلاثي التوائم', en: 'Trigeminal neuralgia' },
  short: {
    ar: 'صعقات كهربائية قصيرة وحادّة في نصف الوجه تُطلقها لمسة أو حلاقة أو نسمة هواء، تدوم ثوانيَ لكنها من أشدّ الآلام التي يعرفها الإنسان.',
    en: 'Brief, sharp electric shocks in one half of the face, set off by a touch, shaving or a breath of air; they last seconds but are among the most severe pains a person can know.'
  },
  organs: ['cranial-nerves', 'facial-muscles', 'brain', 'teeth'],
  aliases: ['ألم العصب ثلاثي التوائم'],
  keywords: { ar: ['ألم الوجه', 'العصب الخامس', 'صعقة في الخد', 'ألم يشبه ألم الأسنان'], en: ['trigeminal neuralgia', 'tic douloureux', 'facial pain', 'fifth nerve'] }
});

DISEASES.push({
  id: 'postherpetic-neuralgia', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'الألم العصبي التالي للحزام الناري', en: 'Postherpetic neuralgia' },
  short: {
    ar: 'ألم حارق أو صاعق يبقى في شريط الجلد بعد شفاء طفح الحزام الناري بأسابيع أو شهور، وتصير فيه ملامسة الثوب نفسها مؤلمة.',
    en: 'Burning or shooting pain that lingers in the strip of skin for weeks or months after the shingles rash has healed, where even the touch of clothing becomes painful.'
  },
  organs: ['skin-receptors', 'peripheral-nerve', 'nervous', 'immunity', 'skin'],
  aliases: ['ألم الأعصاب التالي للحزام الناري'],
  keywords: { ar: ['ألم بعد الحزام الناري', 'ألم عصبي مزمن', 'حرقان الجلد', 'فرط تحسس اللمس'], en: ['postherpetic neuralgia', 'shingles pain', 'allodynia'] }
});

DISEASES.push({
  id: 'peripheral-neuropathy', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'الاعتلال العصبي المحيطي (نقص ب١٢ والكحول)', en: 'Peripheral neuropathy (B12 deficiency and alcohol)' },
  short: {
    ar: 'تلف بطيء في أطول أعصاب الجسم فيبدأ خدر وحرقان في أصابع القدمين ويصعد كالجورب. أسبابه غير السكري كثيرة، وأهمّها ما يُصلَح: نقص ب١٢ والكحول.',
    en: 'Slow damage to the body\'s longest nerves, so numbness and burning begin in the toes and climb like a stocking. Its non-diabetic causes are many, and the most important are the fixable ones: B12 deficiency and alcohol.'
  },
  organs: ['peripheral-nerve', 'nervous', 'skin-receptors', 'foot', 'neuron'],
  aliases: ['الاعتلال العصبي المحيطي', 'اعتلال الأعصاب الطرفية'],
  keywords: { ar: ['خدر القدمين', 'حرقان الأطراف', 'نقص فيتامين ب12', 'تنميل الجورب', 'اعتلال كحولي'], en: ['peripheral neuropathy', 'B12 deficiency', 'stocking numbness', 'alcoholic neuropathy'] }
});

/* ---------------- النخاع والعمود الفقري ---------------- */

DISEASES.push({
  id: 'cervical-myelopathy', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'اعتلال النخاع الرقبي', en: 'Cervical myelopathy' },
  short: {
    ar: 'ضغط بطيء على النخاع الشوكي داخل الرقبة من خشونة الفقرات، فتخرق اليدان الأزرار وتثقل المشية ويختلّ التوازن — وقد لا يكون هناك ألم رقبة أصلاً.',
    en: 'Slow pressure on the spinal cord inside the neck from wear of the vertebrae: the hands fumble buttons, the walk grows heavy and balance falters — and there may be no neck pain at all.'
  },
  organs: ['spinal-cord', 'vertebra-disc', 'spine', 'hand', 'nervous'],
  aliases: [],
  keywords: { ar: ['ضغط النخاع الرقبي', 'خرق اليدين', 'اختلال المشية', 'خشونة الرقبة'], en: ['cervical myelopathy', 'spinal cord compression', 'clumsy hands', 'gait imbalance'] }
});

/* ---------------- ضغط داخل الجمجمة ---------------- */

DISEASES.push({
  id: 'adult-hydrocephalus', group: 'nerves', tier: 'rare', emergency: false,
  name: { ar: 'استسقاء الرأس عند البالغ', en: 'Adult hydrocephalus' },
  short: {
    ar: 'تراكم السائل داخل تجاويف الدماغ فيضغط أنسجته. وله صورة عند كبار السن تُخطئ كثيراً: مشية متردّدة كأن القدمين لاصقتان بالأرض، مع نسيان وسلس بول.',
    en: 'Fluid accumulates inside the brain\'s cavities and presses on its tissue. In older people it takes an often-missed form: a hesitant walk as if the feet were glued to the floor, with forgetfulness and urinary leakage.'
  },
  organs: ['brain', 'meninges', 'skull', 'cortex-map', 'bladder'],
  aliases: ['استسقاء الرأس'],
  keywords: { ar: ['ماء على الدماغ', 'مشية لاصقة', 'خرف قابل للعلاج', 'سلس مع نسيان'], en: ['hydrocephalus', 'normal pressure hydrocephalus', 'NPH', 'magnetic gait'] }
});

DISEASES.push({
  id: 'iih', group: 'nerves', tier: 'rare', emergency: false,
  name: { ar: 'ارتفاع الضغط داخل الجمجمة مجهول السبب', en: 'Idiopathic intracranial hypertension' },
  short: {
    ar: 'ارتفاع ضغط السائل حول الدماغ بلا ورم ولا انسداد، يصيب غالباً شابات بزيادة وزن، ويسبّب صداعاً وطنيناً نابضاً وتعتيمات بصرية قد تنتهي بفقد البصر إن أُهمل.',
    en: 'Raised pressure of the fluid around the brain with no tumour or blockage, mostly in younger women who have gained weight, causing headache, pulsing tinnitus and visual blackouts that can end in loss of sight if neglected.'
  },
  organs: ['brain', 'meninges', 'skull', 'eye', 'cranial-nerves', 'retina'],
  aliases: [],
  keywords: { ar: ['ورم دماغي كاذب', 'وذمة حليمة العصب البصري', 'تعتيم بصري', 'طنين نابض'], en: ['IIH', 'pseudotumor cerebri', 'papilloedema', 'visual obscurations'] }
});

/* ---------------- النوم والأعصاب القحفية ---------------- */

DISEASES.push({
  id: 'narcolepsy', group: 'nerves', tier: 'rare', emergency: false,
  name: { ar: 'النوم القهري (النوم الانتيابي)', en: 'Narcolepsy' },
  short: {
    ar: 'نعاس نهاري قاهر يغلب صاحبه في أي وقت مهما نام ليلاً، وقد يصحبه ارتخاء مفاجئ في العضلات عند الضحك أو الانفعال — وليس كسلاً ولا قلّة نوم.',
    en: 'Overwhelming daytime sleepiness that overcomes the person at any time however well they slept at night, sometimes with a sudden loss of muscle tone when laughing or emotional — and it is neither laziness nor lack of sleep.'
  },
  organs: ['brain', 'nervous', 'limbic', 'neuron'],
  aliases: [],
  keywords: { ar: ['نعاس نهاري شديد', 'الجمدة', 'شلل النوم', 'هلوسة النوم', 'نوبات نوم'], en: ['narcolepsy', 'cataplexy', 'sleep paralysis', 'excessive daytime sleepiness'] }
});

DISEASES.push({
  id: 'cubital-tunnel', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'متلازمة النفق المرفقي', en: 'Cubital tunnel syndrome' },
  short: {
    ar: 'انضغاط العصب الزندي عند المرفق فيخدر البنصر والخنصر ويضعف قبض اليد، ويزيد الخدر مع ثني المرفق طويلاً في النوم أو مع الهاتف.',
    en: 'The ulnar nerve is squeezed at the elbow, so the ring and little fingers go numb and grip weakens; the numbness increases with the elbow held bent for long in sleep or on the phone.'
  },
  organs: ['elbow', 'peripheral-nerve', 'hand', 'nervous', 'muscles'],
  aliases: [],
  keywords: { ar: ['العصب الزندي', 'خدر الخنصر', 'ضعف القبضة', 'نمنمة المرفق'], en: ['cubital tunnel', 'ulnar nerve', 'little finger numbness', 'funny bone'] }
});

DISEASES.push({
  id: 'radial-nerve-palsy', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'شلل العصب الكعبري (سقوط الرسغ)', en: 'Radial nerve palsy (wrist drop)' },
  short: {
    ar: 'ضعف مفاجئ في رفع الرسغ والأصابع بعد نوم عميق على الذراع أو ضغط طويل عليها، فتتدلّى اليد. يخيف كأنه سكتة لكنه في الغالب عصب واحد ينضغط ويتعافى.',
    en: 'Sudden weakness in lifting the wrist and fingers after deep sleep on the arm or long pressure on it, so the hand droops. It frightens like a stroke, but is usually one compressed nerve that recovers.'
  },
  organs: ['peripheral-nerve', 'hand', 'elbow', 'muscles', 'nervous'],
  aliases: [],
  keywords: { ar: ['سقوط الرسغ', 'شلل ليلة السبت', 'ضعف رفع اليد', 'العصب الكعبري'], en: ['radial nerve palsy', 'wrist drop', 'Saturday night palsy'] }
});

DISEASES.push({
  id: 'acoustic-neuroma', group: 'nerves', tier: 'rare', emergency: false,
  name: { ar: 'ورم العصب السمعي', en: 'Acoustic neuroma (vestibular schwannoma)' },
  short: {
    ar: 'ورم حميد بطيء النموّ على العصب الثامن، علامته الأولى ضعف سمع أو طنين في أذن واحدة دون الأخرى، مع اختلال توازن خفيف — وليس سرطاناً.',
    en: 'A benign, slow-growing tumour on the eighth nerve; its first sign is hearing loss or tinnitus in one ear and not the other, with slight imbalance — and it is not a cancer.'
  },
  organs: ['cranial-nerves', 'ear', 'balance', 'brain', 'facial-muscles'],
  aliases: ['ورم العصب السمعي'],
  keywords: { ar: ['ضعف سمع بأذن واحدة', 'طنين أحادي', 'الورم الشفاني', 'اختلال توازن'], en: ['acoustic neuroma', 'vestibular schwannoma', 'unilateral hearing loss'] }
});

DISEASES.push({
  id: 'post-concussion', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'متلازمة ما بعد الارتجاج', en: 'Post-concussion syndrome' },
  short: {
    ar: 'صداع ودوخة وضباب في التفكير وحساسية للضوء والضجيج تبقى أسابيع بعد ضربة رأس، رغم أن الأشعة سليمة — وهو اضطراب وظيفي يتحسّن بالتدرّج لا بالراحة التامّة.',
    en: 'Headache, dizziness, mental fog and sensitivity to light and noise persisting for weeks after a blow to the head although the scan is normal — a functional disturbance that improves with graded activity, not complete rest.'
  },
  organs: ['brain', 'skull', 'meninges', 'cortex-map', 'balance'],
  aliases: [],
  keywords: { ar: ['بعد ارتجاج الدماغ', 'ضباب دماغي', 'دوخة بعد ضربة رأس', 'ضعف تركيز'], en: ['post-concussion syndrome', 'brain fog', 'return to play', 'head injury recovery'] }
});

DISEASES.push({
  id: 'cvst', group: 'nerves', tier: 'rare', emergency: true,
  name: { ar: 'خثار الأوردة الدماغية', en: 'Cerebral venous sinus thrombosis' },
  short: {
    ar: 'جلطة تسدّ وريداً يصرف الدم من الدماغ بدل شريان يغذّيه، فيرتفع الضغط داخل الرأس. تصيب أعماراً صغيرة، وتبدأ بصداع يشتدّ على أيام لا بضربة مفاجئة.',
    en: 'A clot blocking a vein that drains blood from the brain rather than an artery feeding it, so pressure inside the head rises. It strikes younger ages and begins with a headache building over days rather than a sudden blow.'
  },
  organs: ['brain', 'meninges', 'vessel-types', 'clotting', 'skull'],
  aliases: [],
  keywords: { ar: ['جلطة أوردة المخ', 'صداع متزايد', 'حبوب منع الحمل', 'تشنج مع صداع', 'ضغط داخل الجمجمة'], en: ['CVST', 'cerebral venous thrombosis', 'sinus thrombosis'] }
});

DISEASES.push({
  id: 'hemifacial-spasm', group: 'nerves', tier: 'rare', emergency: false,
  name: { ar: 'التشنّج النصفي للوجه', en: 'Hemifacial spasm' },
  short: {
    ar: 'انقباضات لا إرادية متكرّرة في عضلات نصف الوجه تبدأ حول العين ثم تنزل إلى الخدّ والفم، تستمرّ حتى في النوم، وهي ضغط على عصب الوجه لا توتّر عصبي.',
    en: 'Repeated involuntary contractions in the muscles of one half of the face, beginning around the eye then descending to cheek and mouth, continuing even in sleep — pressure on the facial nerve, not nerves in the emotional sense.'
  },
  organs: ['facial-muscles', 'cranial-nerves', 'brain', 'eye'],
  aliases: ['التشنج النصفي للوجه'],
  keywords: { ar: ['رفة العين المستمرة', 'تشنج نصف الوجه', 'العصب السابع', 'انقباض الخد'], en: ['hemifacial spasm', 'eyelid twitching', 'facial nerve compression'] }
});

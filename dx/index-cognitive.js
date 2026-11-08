/* ============================================================
   موسوعة الأمراض — فهرس الإعاقات الذهنية والنمائية
   dx/index-cognitive.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-cognitive.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ⚠️ هذا باب عن حالات لا عن أشخاص: نقول «شخص لديه إعاقة ذهنية»
      ولا نصف إنساناً بحالته ولا نختصره فيها.
   ============================================================ */

/* ---------------- القدرة الذهنية والنمو العام ---------------- */

DISEASES.push({
  id: 'intellectual-disability', group: 'cognitive', tier: 'common', emergency: false,
  name: { ar: 'الإعاقة الذهنية', en: 'Intellectual disability' },
  short: {
    ar: 'صعوبة تبدأ في سنوات النمو تشمل التفكير والتعلّم ومهارات الحياة اليومية معاً. درجاتها متفاوتة تفاوتاً واسعاً، وأكثر من يحملها يعيش ويعمل ويتعلّم حين يُصمَّم الدعم على مقاسه.',
    en: 'A difficulty beginning in the developmental years that affects reasoning, learning and everyday living skills together. Its degrees vary widely, and most people who have it live, work and learn when support is designed to fit them.'
  },
  organs: ['brain', 'cortex-map', 'neuron', 'dna', 'nervous'],
  aliases: [],
  keywords: { ar: ['الإعاقة الذهنية', 'القدرات العقلية', 'مهارات التكيف', 'الدعم التعليمي'], en: ['intellectual disability', 'adaptive functioning', 'cognitive impairment', 'support needs'] }
});

DISEASES.push({
  id: 'global-developmental-delay', group: 'cognitive', tier: 'common', emergency: false,
  name: { ar: 'التأخّر النمائي الشامل', en: 'Global developmental delay' },
  short: {
    ar: 'طفل دون الخامسة يتأخّر في مجالين نمائيين أو أكثر معاً: الحركة والكلام والإدراك والتعامل مع الناس. وصفٌ مؤقّت يفتح باب التقييم والتدخّل المبكّر، لا حكم نهائي على مستقبل الطفل.',
    en: 'A child under five who lags in two or more developmental domains together: movement, speech, thinking and dealing with people. It is a temporary description that opens the door to assessment and early intervention, not a final verdict on the child.'
  },
  organs: ['brain', 'cortex-map', 'neuron', 'muscles', 'ear'],
  aliases: [],
  keywords: { ar: ['تأخر نمائي', 'المعالم النمائية', 'التدخل المبكر', 'الطفل لا يجلس'], en: ['global developmental delay', 'GDD', 'milestones', 'early intervention'] }
});

DISEASES.push({
  id: 'developmental-regression', group: 'cognitive', tier: 'rare', emergency: false,
  name: { ar: 'النكوص النمائي وفقدان المهارات', en: 'Developmental regression and skill loss' },
  short: {
    ar: 'أن يفقد الطفل مهارة كان يتقنها فعلاً: كلمات كان يقولها، أو مشياً كان يمشيه، أو تواصلاً بالعين كان يبادر به. هذه هي العلامة النمائية الوحيدة التي لا تُراقَب ولا تُؤجَّل.',
    en: 'A child losing a skill already mastered: words once spoken, walking once achieved, or eye contact once offered. This is the one developmental sign that is never watched and waited on.'
  },
  organs: ['brain', 'neuron', 'cortex-map', 'dna', 'nervous'],
  aliases: [],
  keywords: { ar: ['فقدان المهارات', 'نكوص', 'توقف النمو', 'فقد الكلام'], en: ['developmental regression', 'skill loss', 'loss of speech', 'red flag'] }
});

/* ---------------- صعوبات التعلّم النوعية ---------------- */

DISEASES.push({
  id: 'dyscalculia', group: 'cognitive', tier: 'common', emergency: false,
  name: { ar: 'عسر الحساب', en: 'Dyscalculia' },
  short: {
    ar: 'صعوبة نوعية في حسّ العدد نفسه: كم هو الرقم، وأيّ العددين أكبر، وكيف تنتقل الوحدة إلى العشرة. طفل قد يقرأ قراءة ممتازة ويعجز عن جدول الضرب مهما حفظ.',
    en: 'A specific difficulty with number sense itself: how much a number is, which of two is larger, and how a unit carries into a ten. A child may read excellently yet fail the times table no matter how much is memorised.'
  },
  organs: ['brain', 'cortex-map', 'neuron'],
  aliases: [],
  keywords: { ar: ['عسر الحساب', 'صعوبة الرياضيات', 'جدول الضرب', 'حس العدد'], en: ['dyscalculia', 'maths difficulty', 'number sense', 'specific learning disorder'] }
});

DISEASES.push({
  id: 'dysgraphia', group: 'cognitive', tier: 'common', emergency: false,
  name: { ar: 'عسر الكتابة', en: 'Dysgraphia' },
  short: {
    ar: 'صعوبة نوعية في الكتابة: خطّ متعب غير مقروء، وبطء شديد، وألم في اليد بعد أسطر، وفجوة واضحة بين ما يقوله الطفل شفهياً وما يستطيع إنزاله على الورق.',
    en: 'A specific difficulty with writing: laboured illegible handwriting, marked slowness, hand pain after a few lines, and a clear gap between what the child can say aloud and what reaches the page.'
  },
  organs: ['brain', 'cortex-map', 'hand', 'muscles'],
  aliases: [],
  keywords: { ar: ['عسر الكتابة', 'خط رديء', 'صعوبة الإملاء', 'ألم اليد عند الكتابة'], en: ['dysgraphia', 'handwriting difficulty', 'written expression', 'spelling difficulty'] }
});

DISEASES.push({
  id: 'developmental-coordination-disorder', group: 'cognitive', tier: 'common', emergency: false,
  name: { ar: 'اضطراب التناسق النمائي', en: 'Developmental coordination disorder' },
  short: {
    ar: 'طفل أخرق الحركة أكثر ممّا يبرّره عمره: يتعثّر ويسقط ويصطدم، ويتأخّر في ربط الحذاء وركوب الدرّاجة واستعمال المقصّ. عضلاته سليمة، والصعوبة في تخطيط الحركة لا في قوّتها.',
    en: 'A child clumsier than the age explains: tripping, falling and bumping into things, and late at tying laces, riding a bicycle and using scissors. The muscles are sound; the difficulty is in planning movement, not in its strength.'
  },
  organs: ['brain', 'cortex-map', 'muscles', 'balance', 'hand'],
  aliases: [],
  keywords: { ar: ['اضطراب التناسق', 'الطفل الأخرق', 'عسر الأداء الحركي', 'المهارات الدقيقة'], en: ['developmental coordination disorder', 'DCD', 'dyspraxia', 'motor planning'] }
});

/* ---------------- المعالجة الحسّية والتواصل ---------------- */

DISEASES.push({
  id: 'sensory-processing-differences', group: 'cognitive', tier: 'common', emergency: false,
  name: { ar: 'اضطرابات المعالجة الحسّية', en: 'Sensory processing differences' },
  short: {
    ar: 'اختلاف في طريقة تلقّي الدماغ لما يصل من الحواس: صوت عادي يؤلم، ولمسة قميص لا تُحتمل، أو على العكس بحث دائم عن الضغط والحركة والاصطدام. الحواس نفسها سليمة والمعالجة هي المختلفة.',
    en: 'A difference in how the brain receives what the senses deliver: an ordinary sound hurts, the touch of a shirt is unbearable, or conversely a constant search for pressure, movement and impact. The senses themselves are sound; the processing is what differs.'
  },
  organs: ['skin-receptors', 'ear', 'eye', 'brain', 'cortex-map', 'balance'],
  aliases: [],
  keywords: { ar: ['الحساسية الحسية', 'رفض الملمس', 'حساسية الصوت', 'العلاج الوظيفي'], en: ['sensory processing', 'sensory sensitivity', 'sensory seeking', 'occupational therapy'] }
});

DISEASES.push({
  id: 'social-communication-disorder', group: 'cognitive', tier: 'rare', emergency: false,
  name: { ar: 'اضطراب التواصل الاجتماعي', en: 'Social communication disorder' },
  short: {
    ar: 'لغة سليمة المفردات والقواعد لكنها تُستعمل في غير موضعها: لا يعرف متى يبدأ ومتى يسكت، ويأخذ المجاز حرفياً، ويحكي القصة بلا خيط يمسكها. بلا الاهتمامات المحصورة ولا التكرار الذي يميّز طيف التوحّد.',
    en: 'Language sound in vocabulary and grammar but used out of place: not knowing when to begin and when to stop, taking figures of speech literally, and telling a story with no thread. Without the restricted interests and repetition that mark the autism spectrum.'
  },
  organs: ['brain', 'cortex-map', 'limbic', 'larynx'],
  aliases: [],
  keywords: { ar: ['التواصل الاجتماعي', 'اللغة البراغماتية', 'آداب الحوار', 'فهم المجاز'], en: ['social communication disorder', 'pragmatic language', 'conversation skills', 'SCD'] }
});


DISEASES.push({
  id: 'selective-mutism', group: 'cognitive', tier: 'rare', emergency: false,
  name: { ar: 'الصمت الاختياري', en: 'Selective mutism' },
  short: {
    ar: 'طفل يتكلّم في بيته بطلاقة ثم يصمت صمتاً تامّاً في المدرسة أو أمام الغرباء. ليس عناداً ولا اختياراً حرّاً رغم اسمه، بل قلق شديد يشلّ الكلام في مواقف بعينها.',
    en: 'A child who speaks fluently at home then falls completely silent at school or before strangers. Despite its name it is neither defiance nor free choice, but severe anxiety that freezes speech in particular settings.'
  },
  organs: ['larynx', 'brain', 'limbic', 'autonomic'],
  aliases: [],
  keywords: { ar: ['الصمت الاختياري', 'الطفل لا يتكلم في المدرسة', 'قلق اجتماعي', 'الخرس الانتقائي'], en: ['selective mutism', 'school silence', 'social anxiety', 'child anxiety'] }
});

DISEASES.push({
  id: 'auditory-processing-disorder', group: 'cognitive', tier: 'rare', emergency: false,
  name: { ar: 'اضطراب المعالجة السمعية المركزية', en: 'Central auditory processing disorder' },
  short: {
    ar: 'أذن تسمع وفحص سمع طبيعي، ودماغ يعجز عن فرز الكلام من الضجيج. يطلب الطفل إعادة الجملة مرّات، ويفوته نصف ما يقال في فصل صاخب، فيُحسب شارداً أو قليل الانتباه.',
    en: 'An ear that hears and a normal hearing test, with a brain that cannot sort speech from noise. The child asks for sentences to be repeated, misses half of what is said in a noisy classroom, and is judged inattentive or absent-minded.'
  },
  organs: ['ear', 'brain', 'cortex-map', 'cranial-nerves'],
  aliases: [],
  keywords: { ar: ['المعالجة السمعية', 'لا يسمع في الضجيج', 'يطلب الإعادة', 'الفصل الصاخب'], en: ['auditory processing disorder', 'APD', 'listening in noise', 'speech in noise'] }
});

/* ---------------- أسباب معروفة ذات أثر نمائي ---------------- */


DISEASES.push({
  id: 'fetal-alcohol-spectrum', group: 'cognitive', tier: 'rare', emergency: false,
  name: { ar: 'اضطرابات الطيف الكحولي الجنيني', en: 'Fetal alcohol spectrum disorders' },
  short: {
    ar: 'أثر دائم يتركه تعرّض الجنين للكحول على دماغ ينمو: صعوبات في الانتباه والذاكرة وضبط السلوك وفهم العواقب، قد تُوجد بلا أي ملمح مميّز في الوجه. وهي من أكثر أسباب الإعاقة النمائية قابلية للمنع تماماً.',
    en: 'A permanent mark left on a developing brain by alcohol exposure before birth: difficulties with attention, memory, behavioural control and grasping consequences, which may exist with no distinctive facial features at all. It is among the most completely preventable causes of developmental disability.'
  },
  organs: ['embryo', 'brain', 'cortex-map', 'neuron', 'fetal-circulation'],
  aliases: [],
  keywords: { ar: ['الكحول والحمل', 'الطيف الكحولي الجنيني', 'الضبط التنفيذي', 'تشوه نمائي'], en: ['fetal alcohol', 'FASD', 'prenatal alcohol exposure', 'executive function'] }
});

/* ---------------- حالات الدعم المركّب ---------------- */

DISEASES.push({
  id: 'multiple-disabilities', group: 'cognitive', tier: 'rare', emergency: false,
  name: { ar: 'الإعاقات المتعدّدة', en: 'Multiple disabilities' },
  short: {
    ar: 'اجتماع إعاقتين أو أكثر في شخص واحد — ذهنية مع حركية أو حسّية — بحيث لا يصلح لها برنامج أيّ منها وحده. الأثر أكبر من جمع الاثنين لأن كل إعاقة تسدّ الطريق الذي تُعوَّض به الأخرى.',
    en: 'Two or more disabilities together in one person, intellectual with motor or sensory, such that no single programme for either one fits. The effect is greater than their sum, because each disability blocks the route by which the other would be compensated.'
  },
  organs: ['brain', 'eye', 'ear', 'muscles', 'spinal-cord', 'nervous'],
  aliases: [],
  keywords: { ar: ['إعاقات متعددة', 'الصمم والعمى', 'فريق متعدد التخصصات', 'التواصل البديل'], en: ['multiple disabilities', 'combined impairments', 'multidisciplinary team', 'AAC'] }
});

DISEASES.push({
  id: 'challenging-behavior', group: 'cognitive', tier: 'common', emergency: false,
  name: { ar: 'السلوكيات الصعبة وإيذاء الذات', en: 'Challenging behaviour and self-injury' },
  short: {
    ar: 'صراخ أو عدوان أو ضرب الرأس أو عضّ اليد عند شخص لديه إعاقة نمائية. السلوك رسالة قبل أن يكون مشكلة: ألم لا يُشكى، أو حاجة لا تُقال، أو بيئة لا تُحتمل.',
    en: 'Screaming, aggression, head banging or hand biting in a person with a developmental disability. The behaviour is a message before it is a problem: pain that cannot be reported, a need that cannot be said, or an environment that cannot be borne.'
  },
  organs: ['brain', 'limbic', 'cortex-map', 'skin-receptors'],
  aliases: [],
  keywords: { ar: ['إيذاء الذات', 'نوبات الغضب', 'ضرب الرأس', 'تحليل السلوك'], en: ['challenging behaviour', 'self-injury', 'meltdown', 'functional behaviour assessment'] }
});

/* ---------------- اللغة في سنّ المدرسة ---------------- */

DISEASES.push({
  id: 'developmental-language-disorder', group: 'cognitive', tier: 'common', emergency: false,
  name: { ar: 'اضطراب اللغة النمائي', en: 'Developmental language disorder' },
  short: {
    ar: 'صعوبة مستمرّة في فهم اللغة أو تركيبها تبقى بعد سنّ المدرسة ولا يفسّرها ضعف سمع ولا إعاقة ذهنية. تُخطئ الأنظار فيها فتُقرأ ضعف تحصيل أو قلّة انتباه لأن الطفل يتكلّم فيبدو سليماً.',
    en: 'A persisting difficulty understanding or constructing language that remains past school age and is not explained by hearing loss or intellectual disability. It is easily misread as poor attainment or inattention, because the child speaks and therefore seems fine.'
  },
  organs: ['brain', 'cortex-map', 'neuron', 'ear'],
  aliases: [],
  keywords: { ar: ['اضطراب اللغة', 'ضعف الفهم اللغوي', 'جمل قصيرة', 'حصيلة لغوية ضعيفة'], en: ['developmental language disorder', 'DLD', 'language impairment', 'comprehension difficulty'] }
});

/* ============================================================
   موسوعة الأمراض — فهرس الحالات النفسية والعصبية السلوكية
   dx/index-mind.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-mind.js
   هذه حالات لها أساس بيولوجي في الدماغ — تُقرأ على التشريح
   لا على الأخلاق: نواقل عصبية، ومحور الوطاء-النخامى-الكظر،
   واللوزة والحُصين وقشرة الجبهة.
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- اضطرابات المزاج ---------------- */

DISEASES.push({
  id: 'depression', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'الاكتئاب', en: 'Depression' },
  short: {
    ar: 'مرض في الدماغ يطفئ المزاج والقدرة على الشعور بالمتعة أسابيع متصلة، ويغيّر النوم والشهية والتركيز والطاقة — وليس ضعف إرادة ولا قلة صبر.',
    en: 'A brain illness that flattens mood and the ability to feel pleasure for weeks on end, changing sleep, appetite, concentration and energy. It is not weakness of will.'
  },
  organs: ['brain', 'limbic', 'cortex-map', 'neuron', 'adrenal'],
  aliases: ['الاكتئاب'],
  keywords: { ar: ['الاكتئاب', 'فقدان المتعة', 'مزاج منخفض', 'اكتئاب جسيم'], en: ['depression', 'major depressive disorder', 'anhedonia', 'low mood'] }
});

DISEASES.push({
  id: 'bipolar-disorder', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'الاضطراب ثنائي القطب', en: 'Bipolar disorder' },
  short: {
    ar: 'تقلّب المزاج بين نوبات هوس ترتفع فيها الطاقة والاندفاع ويقلّ النوم، ونوبات اكتئاب عميقة — مع فترات استقرار بينهما قد تطول سنوات.',
    en: 'Mood swings between manic episodes of high energy, impulsivity and little need for sleep, and episodes of deep depression, with stable periods between that may last years.'
  },
  organs: ['brain', 'limbic', 'cortex-map', 'neuron'],
  aliases: ['الاضطراب ثنائي القطب'],
  keywords: { ar: ['ثنائي القطب', 'الهوس', 'الهوس الخفيف', 'الذهان الاكتئابي الهوسي'], en: ['bipolar', 'mania', 'hypomania', 'manic depression'] }
});

DISEASES.push({
  id: 'postpartum-depression', group: 'mental', tier: 'common', emergency: true,
  name: { ar: 'اكتئاب ما بعد الولادة', en: 'Postpartum depression' },
  short: {
    ar: 'اكتئاب حقيقي يبدأ في الأسابيع أو الأشهر التي تلي الولادة، أعمق وأطول من «كآبة النفاس» العابرة، ويحتاج علاجاً لا صبراً.',
    en: 'A genuine depression starting in the weeks or months after birth, deeper and longer than the passing "baby blues", and needing treatment rather than patience.'
  },
  organs: ['brain', 'limbic', 'pregnancy', 'breast', 'thyroid'],
  aliases: ['اكتئاب ما بعد الولادة'],
  keywords: { ar: ['اكتئاب النفاس', 'كآبة ما بعد الولادة', 'ذهان النفاس'], en: ['postnatal depression', 'baby blues', 'postpartum psychosis'] }
});

DISEASES.push({
  id: 'seasonal-affective', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'اضطراب المزاج الموسمي', en: 'Seasonal affective disorder' },
  short: {
    ar: 'اكتئاب يعود في موسم بعينه — غالباً حين يقصر النهار — مع نوم أطول وشهية للنشويات وثقل في الجسم، ثم ينقشع مع عودة الضوء.',
    en: 'A depression that returns in one season, usually as daylight shortens, with longer sleep, craving for starches and heaviness in the body, lifting when light returns.'
  },
  organs: ['pineal', 'retina', 'brain', 'limbic'],
  aliases: ['الاكتئاب الموسمي'],
  keywords: { ar: ['الاكتئاب الموسمي', 'كآبة الشتاء', 'الساعة البيولوجية'], en: ['SAD', 'winter depression', 'circadian'] }
});

/* ---------------- اضطرابات القلق ---------------- */

DISEASES.push({
  id: 'gad', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'اضطراب القلق العام', en: 'Generalised anxiety disorder' },
  short: {
    ar: 'قلق متصل يقفز من موضوع إلى موضوع أغلب أيام ستة أشهر أو أكثر، مع شدّ عضلي وأرق وإرهاق — قلق بلا خطر يناسبه.',
    en: 'Continuous worry that jumps from topic to topic on most days for six months or more, with muscle tension, poor sleep and fatigue: worry without a danger to match it.'
  },
  organs: ['limbic', 'autonomic', 'adrenal', 'brain', 'cortex-map'],
  aliases: ['اضطرابات القلق'],
  keywords: { ar: ['القلق العام', 'التوتر المزمن', 'الوسواس القلقي', 'شدّ عضلي'], en: ['GAD', 'generalised anxiety', 'chronic worry'] }
});

DISEASES.push({
  id: 'panic-disorder', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'نوبات الهلع', en: 'Panic attacks and panic disorder' },
  short: {
    ar: 'موجة رعب تبلغ ذروتها في دقائق مع خفقان وضيق نفس وتنميل وإحساس بالموت الوشيك، تنتهي وحدها ولا تقتل — لكنها من أشد ما يمرّ به الإنسان.',
    en: 'A wave of terror peaking within minutes with palpitations, breathlessness, tingling and a sense of impending death. It passes on its own and does not kill, yet it is among the most frightening experiences there is.'
  },
  organs: ['autonomic', 'limbic', 'adrenal', 'heart', 'lungs'],
  aliases: ['نوبات الهلع'],
  keywords: { ar: ['الهلع', 'نوبة هلع', 'خفقان ورعب', 'فرط التنفس'], en: ['panic attack', 'panic disorder', 'hyperventilation'] }
});

DISEASES.push({
  id: 'social-anxiety', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'الرهاب الاجتماعي', en: 'Social anxiety disorder' },
  short: {
    ar: 'خوف شديد من نظرة الناس وحكمهم يجعل الكلام أمام غريب أو الأكل بين الناس محنة، فيتجنّبها صاحبها حتى تضيق حياته.',
    en: 'An intense fear of being watched and judged that turns speaking to a stranger or eating in public into an ordeal, avoided until life itself narrows.'
  },
  organs: ['limbic', 'autonomic', 'adrenal', 'brain'],
  aliases: ['الرهاب الاجتماعي'],
  keywords: { ar: ['الخوف الاجتماعي', 'رهاب الأداء', 'احمرار الوجه', 'الخجل المرضي'], en: ['social phobia', 'performance anxiety', 'blushing'] }
});

DISEASES.push({
  id: 'health-anxiety', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'القلق الصحّي (توهّم المرض)', en: 'Health anxiety (illness anxiety disorder)' },
  short: {
    ar: 'انشغال دائم بأن في الجسد مرضاً خطيراً، يقود إلى فحص الجسم وقراءة الأعراض وتكرار التحاليل — والطمأنينة بعدها لا تدوم إلا أياماً.',
    en: 'A constant preoccupation that a serious illness is present, driving body-checking, symptom reading and repeated tests, with reassurance that lasts only days.'
  },
  organs: ['brain', 'limbic', 'autonomic', 'cortex-map'],
  aliases: ['القلق الصحّي'],
  keywords: { ar: ['توهم المرض', 'القلق الصحي', 'المراق', 'وسواس المرض'], en: ['health anxiety', 'hypochondriasis', 'illness anxiety'] }
});

/* ---------------- الوسواس والصدمة والذهان ---------------- */

DISEASES.push({
  id: 'ocd', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'الوسواس القهري', en: 'Obsessive-compulsive disorder' },
  short: {
    ar: 'أفكار مقتحمة مزعجة لا يريدها صاحبها، وأفعال قهرية يكرّرها ليطفئ قلقها — والراحة لحظة ثم يعود الوسواس أقوى.',
    en: 'Unwanted intrusive thoughts and compulsive acts repeated to quiet the anxiety they cause; the relief lasts a moment and the obsession returns stronger.'
  },
  organs: ['brain', 'cortex-map', 'limbic', 'neuron'],
  aliases: ['الوسواس القهري'],
  keywords: { ar: ['الوسواس', 'أفعال قهرية', 'وسواس النظافة', 'التأكد المتكرر'], en: ['OCD', 'obsessions', 'compulsions', 'checking'] }
});

DISEASES.push({
  id: 'ptsd', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'اضطراب ما بعد الصدمة', en: 'Post-traumatic stress disorder' },
  short: {
    ar: 'بعد حدث مهدّد للحياة يبقى الدماغ في حالة إنذار: ذكريات تقتحم الحاضر وكوابيس وتجنّب لكل ما يذكّر، وتوتّر لا يهدأ.',
    en: 'After a life-threatening event the brain stays on alarm: memories intrude on the present, nightmares, avoidance of every reminder, and tension that never settles.'
  },
  organs: ['limbic', 'brain', 'autonomic', 'adrenal', 'cortex-map'],
  aliases: ['اضطراب ما بعد الصدمة'],
  keywords: { ar: ['ما بعد الصدمة', 'استرجاع الذكريات', 'كوابيس', 'فرط اليقظة'], en: ['PTSD', 'flashbacks', 'trauma', 'hypervigilance'] }
});

DISEASES.push({
  id: 'schizophrenia', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'الفصام', en: 'Schizophrenia' },
  short: {
    ar: 'مرض دماغي مزمن تختلط فيه حدود الواقع: أصوات يسمعها المريض ولا يسمعها غيره، وقناعات راسخة لا يزحزحها دليل، مع انسحاب وفتور.',
    en: 'A chronic brain illness in which the boundary of reality blurs: voices only the person hears, fixed beliefs no evidence shifts, with withdrawal and blunting.'
  },
  organs: ['brain', 'cortex-map', 'neuron', 'limbic'],
  aliases: ['الفصام'],
  keywords: { ar: ['الفصام', 'الهلاوس', 'الضلالات', 'الذهان', 'انفصام الشخصية'], en: ['schizophrenia', 'hallucinations', 'delusions', 'psychosis'] }
});

DISEASES.push({
  id: 'delirium', group: 'mental', tier: 'common', emergency: true,
  name: { ar: 'الهذيان', en: 'Delirium' },
  short: {
    ar: 'تشوّش ذهني يبدأ خلال ساعات أو يوم ويتذبذب خلال اليوم، وهو دائماً علامة على مرض جسدي حادّ تحته — لا مرض نفسي قائم بذاته.',
    en: 'Confusion that begins within hours or a day and fluctuates through it. It is always a sign of an acute physical illness underneath, not a psychiatric illness in itself.'
  },
  organs: ['brain', 'bbb', 'cortex-map', 'immunity', 'kidneys'],
  aliases: ['الهذيان'],
  keywords: { ar: ['الهذيان', 'تشوش حاد', 'اختلاط ذهني', 'هياج المسنين'], en: ['delirium', 'acute confusion', 'sundowning'] }
});

DISEASES.push({
  id: 'vascular-dementia', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'الخرف الوعائي', en: 'Vascular dementia' },
  short: {
    ar: 'تراجع في الذاكرة والتخطيط سببه تلف الأوعية الصغيرة داخل الدماغ أو جلطات متكرّرة، وغالباً ينزل درجات مفاجئة لا انحداراً ناعماً.',
    en: 'Decline in memory and planning caused by damage to the small vessels inside the brain or repeated strokes, often falling in sudden steps rather than a smooth slope.'
  },
  organs: ['brain', 'vessel-types', 'cortex-map', 'circulation', 'bbb'],
  aliases: ['الخرف الوعائي'],
  keywords: { ar: ['الخرف الوعائي', 'خرف الأوعية الصغيرة', 'الجلطات الصامتة'], en: ['vascular dementia', 'small vessel disease', 'multi-infarct'] }
});

/* ---------------- النوم ---------------- */

DISEASES.push({
  id: 'insomnia', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'الأرق', en: 'Insomnia' },
  short: {
    ar: 'صعوبة في بدء النوم أو الاستمرار فيه رغم إتاحة الوقت والمكان، فينعكس على النهار إرهاقاً وضعف تركيز وتقلّب مزاج.',
    en: 'Difficulty falling or staying asleep despite time and opportunity, spilling into the day as fatigue, poor concentration and unstable mood.'
  },
  organs: ['pineal', 'brain', 'autonomic', 'limbic'],
  aliases: ['الأرق'],
  keywords: { ar: ['الأرق', 'قلة النوم', 'صعوبة النوم', 'الميلاتونين', 'الساعة البيولوجية'], en: ['insomnia', 'sleeplessness', 'melatonin', 'sleep hygiene'] }
});

DISEASES.push({
  id: 'sleep-apnea', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'انقطاع النفس النومي الانسدادي', en: 'Obstructive sleep apnoea' },
  short: {
    ar: 'انسداد متكرّر لمجرى الهواء أثناء النوم يوقف التنفّس عشرات المرات كل ساعة — مرض جسدي يرفع الضغط ويزيد خطر السكتة، لا مجرّد شخير.',
    en: 'Repeated closure of the airway in sleep stopping the breath dozens of times an hour: a physical disease that raises blood pressure and stroke risk, not merely snoring.'
  },
  organs: ['pharynx', 'bronchi', 'lungs', 'heart', 'brain'],
  aliases: ['انقطاع النفس النومي'],
  keywords: { ar: ['انقطاع النفس', 'الشخير', 'اختناق النوم', 'نعاس نهاري'], en: ['sleep apnoea', 'OSA', 'snoring', 'CPAP'] }
});

DISEASES.push({
  id: 'restless-legs', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'متلازمة تململ الساقين', en: 'Restless legs syndrome' },
  short: {
    ar: 'إحساس مزعج داخل الساقين مع رغبة قاهرة في تحريكهما، يشتدّ في السكون والمساء ويخفّ بالحركة، فيسرق النوم ليلة بعد ليلة.',
    en: 'An unpleasant sensation deep in the legs with an irresistible urge to move them, worse at rest and in the evening, easing with movement, stealing sleep night after night.'
  },
  organs: ['neuron', 'brain', 'peripheral-nerve', 'blood'],
  aliases: ['متلازمة تململ الساقين'],
  keywords: { ar: ['تململ الساقين', 'الأرجل المتململة', 'نقص الحديد', 'الدوبامين'], en: ['restless legs', 'RLS', 'Willis-Ekbom', 'ferritin'] }
});

/* ---------------- الإدمان والسلوك ---------------- */

DISEASES.push({
  id: 'substance-addiction', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'إدمان المواد', en: 'Substance addiction' },
  short: {
    ar: 'مرض مزمن يختطف دارة المكافأة في الدماغ، فيصير تعاطي المادة أقوى من قرار صاحبها رغم الضرر الذي يراه بعينه.',
    en: 'A chronic illness that hijacks the brain reward circuit, so using the substance overpowers the person\'s own decision despite harm they can plainly see.'
  },
  organs: ['brain', 'limbic', 'neuron', 'cortex-map', 'liver'],
  aliases: ['إدمان المواد'],
  keywords: { ar: ['الإدمان', 'التعاطي', 'الانسحاب', 'الاعتماد', 'دارة المكافأة'], en: ['addiction', 'substance use disorder', 'withdrawal', 'dependence'] }
});

DISEASES.push({
  id: 'screen-addiction', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'الاستخدام القهري للشاشات', en: 'Compulsive screen use' },
  short: {
    ar: 'نمط استخدام يفقد صاحبه السيطرة على وقته أمام الشاشة، فيزاحم النوم والدراسة والعلاقات — والمشكلة في الإزاحة والفقد لا في عدد الساعات وحده.',
    en: 'A pattern of use in which control over screen time is lost, crowding out sleep, study and relationships. The problem is what it displaces, not hours alone.'
  },
  organs: ['brain', 'limbic', 'pineal', 'cortex-map', 'eye'],
  aliases: ['الاستخدام القهري للشاشات'],
  keywords: { ar: ['إدمان الشاشات', 'إدمان الألعاب', 'إدمان الهاتف', 'التمرير اللانهائي'], en: ['screen addiction', 'gaming disorder', 'phone overuse', 'doomscrolling'] }
});

DISEASES.push({
  id: 'eating-disorders', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'اضطرابات الأكل', en: 'Eating disorders' },
  short: {
    ar: 'أمراض نفسية لها مضاعفات جسدية قاتلة: القهم بتقييد الأكل، والنُّهام بنوبات شره ثم تخلّص منها، ونوبات الشره بلا تخلّص.',
    en: 'Psychiatric illnesses with lethal physical complications: anorexia with restriction, bulimia with binges then purging, and binge eating without purging.'
  },
  organs: ['brain', 'limbic', 'stomach', 'heart', 'bone-inside'],
  aliases: ['اضطرابات الأكل'],
  keywords: { ar: ['فقدان الشهية العصبي', 'القهم العصبي', 'الشره العصبي', 'النهام', 'نوبات الشره'], en: ['anorexia nervosa', 'bulimia', 'binge eating disorder'] }
});

DISEASES.push({
  id: 'burnout', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'الاحتراق النفسي', en: 'Burnout' },
  short: {
    ar: 'إنهاك يتراكم من ضغط العمل المزمن: طاقة نافدة، وتباعد ساخر عن العمل والناس، وإحساس بأن ما يُنجز بلا قيمة — وهو ظاهرة مهنية لا تشخيص مرضي.',
    en: 'Exhaustion accumulating from chronic work stress: depleted energy, cynical distance from the work and people, and a sense that nothing achieved counts. It is an occupational phenomenon, not a medical diagnosis.'
  },
  organs: ['adrenal', 'limbic', 'brain', 'autonomic'],
  aliases: ['الاحتراق النفسي'],
  keywords: { ar: ['الاحتراق الوظيفي', 'الاحتراق النفسي', 'إنهاك العمل', 'الكورتيزول'], en: ['burnout', 'occupational exhaustion', 'cynicism', 'cortisol'] }
});

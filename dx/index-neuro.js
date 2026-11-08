/* ============================================================
   موسوعة الأمراض — فهرس الرأس والحواسّ والأعصاب
   dx/index-neuro.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-neuro.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الرأس والوجه ---------------- */

DISEASES.push({
  id: 'migraine', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'الشقيقة (الصداع النصفي)', en: 'Migraine' },
  short: {
    ar: 'نوبات صداع نابض في نصف الرأس تستمر ساعات أو يوماً وأكثر، يصحبها غثيان ونفور من الضوء والصوت، وتُقعد صاحبها عن يومه.',
    en: 'Attacks of throbbing pain in one half of the head lasting hours or more than a day, with nausea and a dislike of light and sound, disabling enough to stop the day.'
  },
  organs: ['brain', 'cortex-map', 'meninges', 'cranial-nerves', 'vessel-types'],
  aliases: ['الصداع النصفي'],
  keywords: { ar: ['الشقيقة', 'صداع نصفي', 'أورة بصرية', 'صداع نابض'], en: ['migraine', 'aura', 'headache'] }
});

DISEASES.push({
  id: 'meningitis', group: 'head', tier: 'common', emergency: true,
  name: { ar: 'التهاب السحايا', en: 'Meningitis' },
  short: {
    ar: 'التهاب الأغشية التي تلفّ الدماغ والنخاع الشوكي، وحين يكون بكتيرياً فهو من أسرع الأمراض تدهوراً — ساعات تفصل بين العافية والخطر.',
    en: 'Inflammation of the membranes wrapping the brain and spinal cord; when it is bacterial it is among the fastest illnesses to deteriorate, with only hours between wellness and danger.'
  },
  organs: ['meninges', 'brain', 'spinal-cord', 'bbb', 'immunity', 'skull'],
  aliases: ['التهاب السحايا'],
  keywords: { ar: ['تيبس الرقبة', 'الحمى الشوكية', 'طفح لا يزول بالضغط', 'رهاب الضوء'], en: ['meningitis', 'stiff neck', 'non-blanching rash'] }
});

DISEASES.push({
  id: 'bells-palsy', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'شلل بِل (شلل العصب الوجهي)', en: "Bell's palsy (facial nerve palsy)" },
  short: {
    ar: 'ضعف مفاجئ في نصف الوجه خلال ساعات، فلا يرتفع طرف الفم ولا تغمض العين على تلك الجهة، وأغلب المصابين يتعافون.',
    en: 'Sudden weakness of one half of the face over hours, so the corner of the mouth does not lift and the eye on that side does not close; most people recover.'
  },
  organs: ['facial-muscles', 'cranial-nerves', 'peripheral-nerve', 'eye'],
  aliases: ['شلل بِل'],
  keywords: { ar: ['شلل الوجه', 'العصب السابع', 'انحراف الفم'], en: ['Bell palsy', 'facial paralysis', 'seventh nerve'] }
});

DISEASES.push({
  id: 'tmj-disorder', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'اضطراب المفصل الصدغي الفكي', en: 'Temporomandibular joint disorder' },
  short: {
    ar: 'ألم أمام الأذن مع صعوبة في المضغ وطقطقة عند فتح الفم، وأشيع أسبابه شدّ عضلات المضغ من التوتر وصرير الأسنان في النوم.',
    en: 'Pain in front of the ear with difficulty chewing and clicking when the mouth opens; the commonest causes are tension in the chewing muscles and grinding the teeth in sleep.'
  },
  organs: ['tmj', 'facial-muscles', 'teeth', 'skull'],
  aliases: ['اضطراب المفصل الصدغي الفكي'],
  keywords: { ar: ['ألم الفك', 'طقطقة الفك', 'صرير الأسنان', 'المفصل الفكي'], en: ['TMJ', 'TMD', 'jaw pain', 'bruxism'] }
});

/* ---------------- الأعصاب ---------------- */

DISEASES.push({
  id: 'stroke', group: 'nerves', tier: 'common', emergency: true,
  name: { ar: 'السكتة الدماغية', en: 'Stroke' },
  short: {
    ar: 'انقطاع مفاجئ للدم عن جزء من الدماغ بجلطة تسدّ شرياناً أو بنزف يمزّقه، فتموت خلاياه بسرعة — والوقت هنا دماغ.',
    en: 'Blood to part of the brain is cut off suddenly, either by a clot sealing an artery or by a bleed tearing one, and its cells die fast — here, time is brain.'
  },
  organs: ['brain', 'cortex-map', 'bbb', 'clotting', 'vessel-types', 'circulation'],
  aliases: ['السكتة الدماغية', 'الجلطة الدماغية'],
  keywords: { ar: ['الجلطة الدماغية', 'شلل نصفي', 'فالج', 'تدلي الوجه', 'FAST'], en: ['stroke', 'CVA', 'FAST', 'hemiplegia'] }
});

DISEASES.push({
  id: 'epilepsy', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'الصرع', en: 'Epilepsy' },
  short: {
    ar: 'ميل الدماغ إلى نوبات من التفريغ الكهربائي المفاجئ المتزامن، فتظهر تشنّجات أو غياب قصير عن الوعي أو إحساس غريب يتكرّر بالصورة نفسها.',
    en: 'A tendency of the brain to sudden synchronised electrical discharges, producing convulsions, brief absences, or a strange sensation that returns in exactly the same form.'
  },
  organs: ['brain', 'neuron', 'cortex-map', 'limbic'],
  aliases: ['الصرع', 'صرع الفصّ الصدغي', 'الصرع الجاكسوني'],
  keywords: { ar: ['نوبة صرع', 'تشنج', 'غياب الوعي', 'تخطيط الدماغ'], en: ['epilepsy', 'seizure', 'EEG', 'convulsion'] }
});

DISEASES.push({
  id: 'alzheimers', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'داء ألزهايمر', en: "Alzheimer's disease" },
  short: {
    ar: 'تلف تدريجي في خلايا الدماغ يبدأ بنسيان الأحداث القريبة وتكرار السؤال، ثم يمتدّ سنوات إلى اللغة والاتجاه والقدرة على العناية بالنفس.',
    en: 'A gradual loss of brain cells that begins with forgetting recent events and repeating questions, then spreads over years to language, orientation and self-care.'
  },
  organs: ['brain', 'neuron', 'limbic', 'cortex-map'],
  aliases: ['الزهايمر', 'داء ألزهايمر'],
  keywords: { ar: ['الخرف', 'النسيان', 'ضعف الذاكرة', 'ألزهايمر'], en: ['Alzheimer', 'dementia', 'memory loss'] }
});

DISEASES.push({
  id: 'parkinsons', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'مرض باركنسون (الشلل الرعاش)', en: "Parkinson's disease" },
  short: {
    ar: 'نقص تدريجي في خلايا الدماغ التي تصنع الدوبامين، فتبطؤ الحركة وتتيبّس الأطراف وترتعش اليد وهي ساكنة، وتصغر الخطوة والخطّ.',
    en: 'A gradual loss of the brain cells that make dopamine, so movement slows, limbs stiffen, the hand trembles at rest, and both stride and handwriting shrink.'
  },
  organs: ['brain', 'neuron', 'nervous', 'autonomic'],
  aliases: ['مرض باركنسون'],
  keywords: { ar: ['الشلل الرعاش', 'رعشة اليد', 'بطء الحركة', 'باركنسون'], en: ['Parkinson', 'tremor', 'bradykinesia'] }
});

DISEASES.push({
  id: 'ms', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'التصلّب المتعدّد', en: 'Multiple sclerosis' },
  short: {
    ar: 'يهاجم جهاز المناعة الغلاف العازل حول ألياف الدماغ والنخاع الشوكي، فتتباطأ الإشارة أو تنقطع، وتأتي الأعراض نوبات تتحسّن ثم تعود.',
    en: 'The immune system attacks the insulating sheath around nerve fibres in the brain and spinal cord, so signals slow or fail, and symptoms come in attacks that improve then return.'
  },
  organs: ['brain', 'neuron', 'spinal-cord', 'bbb', 'immunity'],
  aliases: ['التصلّب المتعدّد'],
  keywords: { ar: ['التصلب اللويحي', 'MS', 'التهاب العصب البصري', 'تنميل الأطراف'], en: ['multiple sclerosis', 'MS', 'demyelination'] }
});

DISEASES.push({
  id: 'sciatica', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'عرق النسا', en: 'Sciatica' },
  short: {
    ar: 'ألم كهربائي ينزل من أسفل الظهر إلى الأرداف وخلف الفخذ حتى الساق أو القدم، سببه ضغط على جذر العصب الوركي عند مخرجه من العمود الفقري.',
    en: 'An electric pain running from the lower back through the buttock and back of the thigh to the leg or foot, caused by pressure on a sciatic nerve root as it leaves the spine.'
  },
  organs: ['peripheral-nerve', 'vertebra-disc', 'spine', 'spinal-cord', 'pelvis'],
  aliases: ['عرق النسا'],
  keywords: { ar: ['ألم العصب الوركي', 'انزلاق غضروفي', 'ديسك', 'ألم نازل في الرجل'], en: ['sciatica', 'disc herniation', 'radiculopathy'] }
});

DISEASES.push({
  id: 'carpal-tunnel-syndrome', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'متلازمة النفق الرسغي', en: 'Carpal tunnel syndrome' },
  short: {
    ar: 'انضغاط العصب المتوسّط داخل نفق ضيّق في الرسغ، فيأتي تنميل وحرقة في الإبهام والسبّابة والوسطى يوقظ صاحبه من النوم ويسقط الأشياء من يده.',
    en: 'The median nerve is squeezed inside a narrow tunnel at the wrist, giving numbness and burning in the thumb, index and middle fingers that wakes the sufferer at night and makes objects slip from the hand.'
  },
  organs: ['carpal-tunnel', 'peripheral-nerve', 'hand', 'tendon-ligament'],
  aliases: ['متلازمة النفق الرسغي', 'متلازمة نفق الرسغ', 'ضيق النفق في الحمل'],
  keywords: { ar: ['تنميل اليد', 'العصب المتوسط', 'خدر الأصابع ليلاً'], en: ['carpal tunnel', 'median nerve', 'hand numbness'] }
});

DISEASES.push({
  id: 'diabetic-neuropathy', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'الاعتلال العصبي السكري', en: 'Diabetic neuropathy' },
  short: {
    ar: 'تلف بطيء في الأعصاب الطرفية من ارتفاع السكر سنوات، يبدأ بتنميل وحرقة في القدمين ليلاً وينتهي إلى فقدان الإحساس بالجرح والحرارة.',
    en: 'Slow damage to the peripheral nerves from years of high blood sugar, starting as night-time numbness and burning in the feet and ending in loss of feeling for wounds and heat.'
  },
  organs: ['peripheral-nerve', 'autonomic', 'foot', 'nervous', 'pancreas'],
  aliases: ['اعتلال الأعصاب السكري', 'الاعتلال العصبي الذاتي السكري'],
  keywords: { ar: ['تنميل القدمين', 'حرقة القدم', 'القدم السكرية', 'اعتلال الأعصاب'], en: ['diabetic neuropathy', 'burning feet', 'diabetic foot'] }
});

DISEASES.push({
  id: 'myasthenia-gravis', group: 'autoimmune', tier: 'rare', emergency: false,
  name: { ar: 'الوهن العضلي الوبيل', en: 'Myasthenia gravis' },
  short: {
    ar: 'تهاجم المناعة نقطة التقاء العصب بالعضلة، فتضعف العضلة كلما استُعملت وترتاح بالراحة — أول ما يظهر غالباً تدلّي الجفن وازدواج الرؤية آخر النهار.',
    en: 'The immune system attacks the junction between nerve and muscle, so muscles weaken the more they are used and recover with rest; the first signs are usually a drooping eyelid and double vision late in the day.'
  },
  organs: ['nmj', 'thymus', 'muscle-fiber', 'immunity', 'cranial-nerves'],
  aliases: ['الوهن العضلي الوبيل'],
  keywords: { ar: ['تدلي الجفن', 'ازدواج الرؤية', 'ضعف عضلي متقلب', 'الغدة الزعترية'], en: ['myasthenia gravis', 'ptosis', 'diplopia'] }
});

/* ---------------- الحواسّ ---------------- */

DISEASES.push({
  id: 'cataract', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'إعتام عدسة العين (الساد)', en: 'Cataract' },
  short: {
    ar: 'تعكّر تدريجي في عدسة العين الشفّافة، فتبهت الألوان ويصير النظر كأنه من وراء زجاج مغبّر، وتتوهّج أضواء السيارات ليلاً.',
    en: 'The clear lens of the eye gradually clouds, colours fade, sight becomes like looking through a dusty window, and headlights glare at night.'
  },
  organs: ['eye', 'retina'],
  aliases: ['إعتام عدسة العين'],
  keywords: { ar: ['الماء الأبيض', 'الساد', 'عتامة العدسة', 'ضبابية النظر'], en: ['cataract', 'clouded lens', 'glare'] }
});

DISEASES.push({
  id: 'glaucoma', group: 'senses', tier: 'common', emergency: true,
  name: { ar: 'الزرق (الجلوكوما)', en: 'Glaucoma' },
  short: {
    ar: 'تلف تدريجي في العصب البصري يرتبط غالباً بارتفاع ضغط العين، يقضم مجال الرؤية من الأطراف بلا ألم — وله صورة حادّة مفاجئة هي طوارئ عيون.',
    en: 'Gradual damage to the optic nerve, usually linked to raised pressure inside the eye, eating the field of vision from its edges painlessly; it also has a sudden acute form that is an eye emergency.'
  },
  organs: ['eye', 'retina', 'cranial-nerves'],
  aliases: ['الزرق (الجلوكوما)'],
  keywords: { ar: ['الماء الأزرق', 'ضغط العين', 'الجلوكوما', 'هالات حول الأضواء'], en: ['glaucoma', 'eye pressure', 'optic nerve', 'halos'] }
});

DISEASES.push({
  id: 'amd', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'التنكّس البقعي المرتبط بالعمر', en: 'Age-related macular degeneration' },
  short: {
    ar: 'تلف في بقعة الشبكية المسؤولة عن الرؤية الدقيقة، فتتشوّش الوجوه والحروف في وسط النظر ويبقى المحيط سليماً، وتبدو الخطوط المستقيمة متموّجة.',
    en: 'Damage to the small central patch of the retina responsible for fine vision, so faces and letters blur in the middle of sight while the periphery stays intact, and straight lines look wavy.'
  },
  organs: ['retina', 'eye'],
  aliases: ['التنكّس البقعي'],
  keywords: { ar: ['البقعة الصفراء', 'تشوه الخطوط', 'ضعف الرؤية المركزية'], en: ['macular degeneration', 'AMD', 'macula'] }
});

DISEASES.push({
  id: 'diabetic-retinopathy', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'اعتلال الشبكية السكري', en: 'Diabetic retinopathy' },
  short: {
    ar: 'تتلف الأوعية الدقيقة في الشبكية من ارتفاع السكر سنوات، فترشح وتنزف وتنبت أوعية هشّة — ويتقدّم كل ذلك بلا أي عرض حتى مرحلة متأخّرة.',
    en: 'Years of high blood sugar damage the tiny vessels of the retina, which leak, bleed and sprout fragile new ones — and all of this advances with no symptom until a late stage.'
  },
  organs: ['retina', 'eye', 'vessel-types', 'pancreas'],
  aliases: ['اعتلال الشبكية السكّري'],
  keywords: { ar: ['نزف الشبكية', 'فحص قاع العين', 'السكري والعين'], en: ['diabetic retinopathy', 'fundus', 'retinal bleeding'] }
});

DISEASES.push({
  id: 'otitis-media', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'التهاب الأذن الوسطى', en: 'Otitis media' },
  short: {
    ar: 'التهاب وتجمّع سائل خلف طبلة الأذن بعد نزلة برد، فيأتي ألم نابض وضعف سمع وحرارة، وهو من أكثر ما يوقظ الأطفال الصغار ليلاً.',
    en: 'Inflammation and fluid behind the eardrum after a cold, bringing throbbing pain, muffled hearing and fever; it is among the commonest reasons small children wake at night.'
  },
  organs: ['ear', 'pharynx', 'immunity'],
  aliases: ['التهاب الأذن الوسطى'],
  keywords: { ar: ['ألم الأذن', 'سائل خلف الطبلة', 'أذن الأطفال', 'قناة أوستاش'], en: ['otitis media', 'ear infection', 'eardrum'] }
});

DISEASES.push({
  id: 'bppv', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'دوار الوضعة الانتيابي الحميد', en: 'Benign paroxysmal positional vertigo' },
  short: {
    ar: 'بلّورة صغيرة تتسرّب إلى إحدى قنوات الأذن الداخلية، فتأتي نوبة دوران عنيفة لثوانٍ عند قلب الرأس على السرير أو رفعه للأعلى، ثم تهدأ.',
    en: 'A tiny crystal slips into one of the canals of the inner ear, so turning the head in bed or tipping it back brings a violent spinning that lasts seconds and then settles.'
  },
  organs: ['balance', 'ear'],
  aliases: ['الدوار الوضعي الحميد', 'الدوار'],
  keywords: { ar: ['دوخة عند التقلب', 'دوار وضعي', 'حصيات الأذن', 'مناورة إيبلي'], en: ['BPPV', 'positional vertigo', 'Epley'] }
});

DISEASES.push({
  id: 'tinnitus', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'طنين الأذن', en: 'Tinnitus' },
  short: {
    ar: 'سماع رنين أو أزيز أو صفير بلا مصدر خارجي، يشتدّ في الهدوء وقبل النوم، وهو في الغالب عرَض لضعف سمع خفيّ لا مرض قائم بنفسه.',
    en: 'Hearing ringing, buzzing or whistling with no outside source, louder in quiet and before sleep; it is usually a symptom of hidden hearing loss rather than a disease in itself.'
  },
  organs: ['ear', 'balance', 'cranial-nerves'],
  aliases: ['طنين الأذن'],
  keywords: { ar: ['رنين الأذن', 'أزيز', 'صفير في الأذن', 'ضعف السمع'], en: ['tinnitus', 'ringing ears', 'hearing loss'] }
});

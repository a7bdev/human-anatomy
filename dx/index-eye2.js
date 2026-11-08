/* ============================================================
   موسوعة الأمراض — فهرس الحواس (الموجة الثانية): العين والأذن والشمّ والتذوّق
   dx/index-eye2.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-eye2.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الشبكية وداخل العين ---------------- */

DISEASES.push({
  id: 'retinal-detachment', group: 'senses', tier: 'common', emergency: true,
  name: { ar: 'انفصال الشبكية', en: 'Retinal detachment' },
  short: {
    ar: 'طبقة الشبكية ترتفع عن جدار العين الداخلي فينقطع عنها غذاؤها، فتُظلم ناحية كاملة من الرؤية كستارة تنزل — وكل ساعة تأخير تكلّف بصراً لا يعود.',
    en: 'The retina lifts away from the inner wall of the eye and loses its nourishment, so a whole part of the vision darkens like a curtain coming down; every hour of delay costs sight that does not return.'
  },
  organs: ['retina', 'eye', 'nervous'],
  aliases: ['انفصال الشبكية'],
  keywords: { ar: ['ستارة على العين', 'ومضات ضوء', 'انفصال شبكي', 'عوامات مفاجئة'], en: ['retinal detachment', 'curtain over vision', 'flashes and floaters'] }
});

DISEASES.push({
  id: 'retinal-vascular-occlusion', group: 'senses', tier: 'rare', emergency: true,
  name: { ar: 'انسداد أوعية الشبكية (الشريان والوريد)', en: 'Retinal artery and vein occlusion' },
  short: {
    ar: 'جلطة تسدّ الشريان أو الوريد الذي يغذّي الشبكية، فيضيع جزء من البصر أو كلّه فجأةً وبلا أي ألم — وانسداد الشريان سكتة دماغية وقعت في العين.',
    en: 'A clot blocks the artery or the vein that feeds the retina, so part or all of the sight is lost suddenly and painlessly; an artery blockage is a stroke that has happened in the eye.'
  },
  organs: ['retina', 'eye', 'vessels', 'vessel-types', 'clotting'],
  aliases: [],
  keywords: { ar: ['جلطة العين', 'انسداد شريان الشبكية', 'انسداد وريد الشبكية', 'فقدان بصر مفاجئ'], en: ['central retinal artery occlusion', 'retinal vein occlusion', 'eye stroke'] }
});

DISEASES.push({
  id: 'uveitis', group: 'senses', tier: 'common', emergency: true,
  name: { ar: 'التهاب العنبية', en: 'Uveitis' },
  short: {
    ar: 'التهاب داخل الطبقة الوسطى الغنية بالأوعية في العين، يجعلها حمراء حول القرنية وتؤلم من الضوء، وقد يأكل البصر بهدوء إن تُرك بلا علاج.',
    en: 'Inflammation inside the middle, vessel-rich layer of the eye turns it red around the cornea and makes light painful, and it can quietly eat away sight if left untreated.'
  },
  organs: ['eye', 'retina', 'immunity'],
  aliases: [],
  keywords: { ar: ['التهاب القزحية', 'حساسية شديدة للضوء', 'عين حمراء مؤلمة'], en: ['uveitis', 'iritis', 'photophobia', 'red painful eye'] }
});

DISEASES.push({
  id: 'keratitis', group: 'senses', tier: 'common', emergency: true,
  name: { ar: 'التهاب القرنية وقرحتها', en: 'Keratitis and corneal ulcer' },
  short: {
    ar: 'النافذة الشفافة أمام العين تلتهب أو تتقرّح، غالباً من عدسة لاصقة نُسي خلعها أو من خدش، فتصير العين حمراء مؤلمة جداً ولا تحتمل الضوء.',
    en: 'The clear window at the front of the eye becomes inflamed or ulcerated, usually from a contact lens left in or from a scratch, leaving the eye red, very painful and unable to bear light.'
  },
  organs: ['eye'],
  aliases: [],
  keywords: { ar: ['قرحة القرنية', 'العدسات اللاصقة', 'خدش القرنية', 'ألم شديد في العين'], en: ['keratitis', 'corneal ulcer', 'contact lens infection', 'corneal abrasion'] }
});

DISEASES.push({
  id: 'keratoconus', group: 'senses', tier: 'rare', emergency: false,
  name: { ar: 'القرنية المخروطية', en: 'Keratoconus' },
  short: {
    ar: 'القرنية ترقّ وتبرز إلى الأمام كمخروط بدل قبّتها المنتظمة، فتتشوّه الصورة وتتغيّر النظارة كل بضعة أشهر بلا أن تُرضي صاحبها.',
    en: 'The cornea thins and bulges forward into a cone instead of its even dome, so the image distorts and the spectacle prescription keeps changing every few months without ever satisfying its owner.'
  },
  organs: ['eye'],
  aliases: [],
  keywords: { ar: ['تحدّب القرنية', 'استجماتيزم متغيّر', 'فرك العين'], en: ['keratoconus', 'corneal cone', 'irregular astigmatism', 'eye rubbing'] }
});

DISEASES.push({
  id: 'optic-neuritis', group: 'senses', tier: 'rare', emergency: false,
  name: { ar: 'التهاب العصب البصري', en: 'Optic neuritis' },
  short: {
    ar: 'التهاب يصيب العصب الناقل من العين إلى الدماغ، فيبهت البصر في عين واحدة خلال أيام وتذبل الألوان ويؤلم تحريك المقلة.',
    en: 'Inflammation of the nerve that carries vision from the eye to the brain dims the sight of one eye over days, washes out the colours, and makes moving the eyeball hurt.'
  },
  organs: ['cranial-nerves', 'eye', 'retina', 'nervous'],
  aliases: ['التهاب العصب البصري'],
  keywords: { ar: ['ألم عند تحريك العين', 'شحوب الألوان', 'التصلب المتعدد والعين'], en: ['optic neuritis', 'pain on eye movement', 'colour desaturation'] }
});

DISEASES.push({
  id: 'vitreous-floaters', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'العوّامات وانفصال الجسم الزجاجي', en: 'Floaters and posterior vitreous detachment' },
  short: {
    ar: 'خيوط ونقاط تسبح في مجال النظر لأن الهلام داخل العين انكمش وانسحب عن الشبكية؛ أكثرها سليم لا يحتاج شيئاً، وقليلها أول إنذار بتمزّق شبكي.',
    en: 'Threads and dots drift across the field of view because the gel inside the eye has shrunk and pulled away from the retina; most are harmless, a few are the first warning of a retinal tear.'
  },
  organs: ['eye', 'retina'],
  aliases: [],
  keywords: { ar: ['ذباب طائر', 'خيوط أمام العين', 'انفصال الجسم الزجاجي'], en: ['floaters', 'posterior vitreous detachment', 'flashes'] }
});

/* ---------------- الجفن والدمع وسطح العين ---------------- */

DISEASES.push({
  id: 'stye-chalazion', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'شحاذ العين والبردة', en: 'Stye and chalazion' },
  short: {
    ar: 'انسداد غدّة دهنية في حافة الجفن: إن التهبت صارت شحاذاً أحمر مؤلماً، وإن هدأت وبقيت تركت كتلة صلبة غير مؤلمة هي البردة.',
    en: 'A blocked oil gland in the lid margin: if it becomes infected it is a red, painful stye; if it settles but stays it leaves a firm, painless lump, the chalazion.'
  },
  organs: ['eye', 'skin'],
  aliases: [],
  keywords: { ar: ['دمّل الجفن', 'حبّة في الجفن', 'كتلة في الجفن'], en: ['stye', 'hordeolum', 'chalazion', 'eyelid lump'] }
});

DISEASES.push({
  id: 'eyelid-malposition', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'تدلّي الجفن وانقلابه', en: 'Ptosis and eyelid malposition' },
  short: {
    ar: 'جفن يهبط حتى يغطّي البؤبؤ، أو ينقلب للخارج فتسيل الدمعة، أو للداخل فتحكّ الرموش القرنية — يبدو مشكلة شكل وهو في حقيقته مشكلة بصر وقرنية.',
    en: 'A lid that droops until it covers the pupil, or turns outward so tears run down, or inward so the lashes scrape the cornea; it looks cosmetic but is really a matter of sight and of the cornea.'
  },
  organs: ['eye', 'facial-muscles', 'cranial-nerves'],
  aliases: [],
  keywords: { ar: ['ارتخاء الجفن', 'انقلاب الجفن للخارج', 'انقلاب الجفن للداخل', 'الرموش تحكّ العين'], en: ['ptosis', 'droopy eyelid', 'ectropion', 'entropion'] }
});

DISEASES.push({
  id: 'blocked-tear-duct', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'انسداد القناة الدمعية', en: 'Blocked tear duct' },
  short: {
    ar: 'مجرى الدمع من العين إلى الأنف ينسدّ، فتفيض الدمعة على الخدّ بلا بكاء، وتتكرّر الالتهابات، وقد تظهر كتلة مؤلمة عند زاوية العين الداخلية.',
    en: 'The channel that drains tears from the eye into the nose is blocked, so tears spill down the cheek without crying, infections keep returning, and a painful lump may appear at the inner corner of the eye.'
  },
  organs: ['eye', 'nose'],
  aliases: [],
  keywords: { ar: ['دمع مستمر', 'انسداد المجرى الدمعي', 'التهاب كيس الدمع'], en: ['blocked tear duct', 'watery eye', 'epiphora', 'dacryocystitis'] }
});

DISEASES.push({
  id: 'digital-eye-strain', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'إجهاد العين الرقمي', en: 'Digital eye strain' },
  short: {
    ar: 'ساعات أمام الشاشة تقلّ فيها الرمشة وتثبت المسافة، فتجفّ العين ويثقل الرأس ويغيم النظر آخر النهار — إرهاق لا مرض، لكنه يكشف عيوباً كامنة.',
    en: 'Hours in front of a screen with fewer blinks and a fixed distance leave the eyes dry, the head heavy and the vision blurred by the end of the day; it is fatigue rather than disease, but it exposes hidden faults.'
  },
  organs: ['eye'],
  aliases: [],
  keywords: { ar: ['إجهاد الشاشات', 'تعب العين من الكمبيوتر', 'زغللة آخر اليوم'], en: ['digital eye strain', 'computer vision syndrome', 'screen fatigue'] }
});

/* ---------------- الأذن والسمع ---------------- */

DISEASES.push({
  id: 'sudden-hearing-loss', group: 'senses', tier: 'rare', emergency: true,
  name: { ar: 'فقدان السمع المفاجئ', en: 'Sudden sensorineural hearing loss' },
  short: {
    ar: 'سمع أذن واحدة يهبط خلال ساعات أو ثلاثة أيام بلا ألم، فيُظنّ صملاخاً أو ماءً بقي بعد الاستحمام — وهو طوارئ حقيقية نافذة علاجها أيام معدودة.',
    en: 'Hearing in one ear drops over hours or up to three days without pain, and is mistaken for wax or water left after a shower; it is a genuine emergency whose treatment window is only a few days.'
  },
  organs: ['ear', 'balance', 'cranial-nerves'],
  aliases: [],
  keywords: { ar: ['صمم مفاجئ', 'أذن مسدودة فجأة', 'هبوط سمع بأذن واحدة'], en: ['sudden hearing loss', 'sudden deafness', 'SSNHL'] }
});

DISEASES.push({
  id: 'otitis-externa', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'التهاب الأذن الخارجية (أذن السبّاح)', en: 'Otitis externa (swimmer ear)' },
  short: {
    ar: 'التهاب جلد قناة الأذن الخارجية بعد سباحة أو تنظيف بعود قطن، يجعل شدّ صيوان الأذن مؤلماً جداً ويسدّ القناة بالتورّم والإفراز.',
    en: 'Inflammation of the skin lining the ear canal after swimming or cleaning with a cotton bud makes tugging the outer ear very painful and blocks the canal with swelling and discharge.'
  },
  organs: ['ear', 'skin'],
  aliases: [],
  keywords: { ar: ['أذن السباح', 'ألم عند شدّ الأذن', 'التهاب قناة الأذن'], en: ['otitis externa', 'swimmer ear', 'ear canal infection'] }
});

DISEASES.push({
  id: 'earwax-impaction', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'الصملاخ المنحشر (سدادة شمع الأذن)', en: 'Impacted earwax' },
  short: {
    ar: 'شمع الأذن يتراكم وينضغط حتى يسدّ القناة، فيهبط السمع فجأةً وتمتلئ الأذن ويظهر طنين — وأكثر ما يسبّبه هو محاولة تنظيفها بالعود.',
    en: 'Earwax builds up and packs down until it blocks the canal, so hearing drops suddenly, the ear feels full and ringing appears; the commonest cause of all is trying to clean it with a cotton bud.'
  },
  organs: ['ear'],
  aliases: [],
  keywords: { ar: ['شمع الأذن', 'سدادة صملاخية', 'أذن مسدودة', 'عود القطن'], en: ['impacted earwax', 'cerumen impaction', 'blocked ear'] }
});

DISEASES.push({
  id: 'tympanic-perforation', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'ثقب طبلة الأذن', en: 'Perforated eardrum' },
  short: {
    ar: 'خرق في الغشاء الرقيق الفاصل بين الأذن الخارجية والوسطى، بعد التهاب أو صفعة أو عود تنظيف، فيهبط السمع وقد يسيل إفراز وتصير الأذن حسّاسة للماء.',
    en: 'A hole in the thin membrane that separates the outer from the middle ear, after infection, a slap or a cleaning bud; hearing drops, discharge may run, and the ear becomes intolerant of water.'
  },
  organs: ['ear'],
  aliases: [],
  keywords: { ar: ['انثقاب الطبلة', 'تمزق طبلة الأذن', 'صديد من الأذن'], en: ['perforated eardrum', 'tympanic membrane perforation', 'ear discharge'] }
});

DISEASES.push({
  id: 'menieres', group: 'senses', tier: 'rare', emergency: false,
  name: { ar: 'داء منيير', en: 'Meniere disease' },
  short: {
    ar: 'نوبات دوار شديدة تدوم من عشرين دقيقة إلى ساعات، يسبقها امتلاء في أذن واحدة وطنين وهبوط سمع يذهب ويعود، ثم يستقرّ ناقصاً مع السنين.',
    en: 'Attacks of severe vertigo lasting from twenty minutes to hours, preceded by fullness in one ear, ringing and a hearing loss that comes and goes, then settles as a permanent loss over the years.'
  },
  organs: ['balance', 'ear'],
  aliases: ['داء منيير'],
  keywords: { ar: ['نوبات دوار', 'امتلاء الأذن', 'طنين مع دوار', 'استسقاء اللمف الباطن'], en: ['Meniere disease', 'vertigo attacks', 'aural fullness', 'endolymphatic hydrops'] }
});

DISEASES.push({
  id: 'vestibular-neuritis', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'التهاب العصب الدهليزي', en: 'Vestibular neuritis' },
  short: {
    ar: 'عصب التوازن يلتهب فجأةً بعد نزلة فيروسية، فيدور العالم بلا توقّف أياماً مع غثيان شديد — والسمع سليم تماماً، وهذا ما يميّزه.',
    en: 'The balance nerve becomes inflamed suddenly after a viral illness, so the world spins without pause for days with heavy nausea, while the hearing stays completely normal, which is what marks it out.'
  },
  organs: ['balance', 'ear', 'cranial-nerves'],
  aliases: ['التهاب العصب الدهليزي'],
  keywords: { ar: ['دوار مستمر أيام', 'التهاب التيه', 'غثيان مع دوار'], en: ['vestibular neuritis', 'labyrinthitis', 'continuous vertigo'] }
});

DISEASES.push({
  id: 'presbycusis', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'ضعف السمع المرتبط بالعمر', en: 'Age-related hearing loss (presbycusis)' },
  short: {
    ar: 'خلايا السمع الدقيقة تقلّ مع العمر فتضيع الأصوات الحادّة أولاً: تسمع الكلام ولا تفهمه، وتتعب في المجالس والمطاعم قبل أي مكان آخر.',
    en: 'The delicate hearing cells dwindle with age and the high sounds go first: you hear speech without understanding it, and struggle in gatherings and restaurants before anywhere else.'
  },
  organs: ['ear', 'brain'],
  aliases: ['ضعف السمع'],
  keywords: { ar: ['ثقل السمع مع العمر', 'أسمع ولا أفهم', 'سماعة الأذن'], en: ['presbycusis', 'age-related hearing loss', 'hearing aid'] }
});

/* ---------------- الشمّ والتذوّق ---------------- */

DISEASES.push({
  id: 'anosmia', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'فقدان حاسة الشمّ', en: 'Loss of smell (anosmia)' },
  short: {
    ar: 'الشمّ يضعف أو ينطفئ من انسداد أنفي أو عدوى فيروسية أو ضربة رأس، فيذهب معه أكثر الطعم، وتضيع نُذُر الخطر كرائحة الغاز والدخان.',
    en: 'Smell fades or switches off from nasal blockage, a viral infection or a head blow; most of the flavour of food goes with it, and the warnings of danger such as gas and smoke are lost.'
  },
  organs: ['nose', 'brain', 'cranial-nerves'],
  aliases: ['فقدان حاسة الشم'],
  keywords: { ar: ['ما أشمّ شي', 'فقدان الشم بعد الفيروس', 'الشم المشوّه'], en: ['anosmia', 'loss of smell', 'hyposmia', 'parosmia'] }
});

DISEASES.push({
  id: 'taste-disorder', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'اضطراب حاسة التذوّق', en: 'Taste disturbance' },
  short: {
    ar: 'الطعم يبهت أو ينقلب معدنياً أو مرّاً فيصير الأكل واجباً ثقيلاً، ومصدره في الغالب الشمّ أو الفم أو دواء يتناوله صاحبه، لا اللسان نفسه.',
    en: 'Taste fades or turns metallic or bitter until eating becomes a heavy duty, and the source is usually the sense of smell, the mouth, or a medicine the person is taking, rather than the tongue itself.'
  },
  organs: ['tongue', 'nose', 'cranial-nerves'],
  aliases: ['اضطراب حاسة التذوق'],
  keywords: { ar: ['طعم معدني في الفم', 'ما أحسّ بالطعم', 'مرارة في الفم'], en: ['taste disturbance', 'dysgeusia', 'metallic taste', 'loss of taste'] }
});

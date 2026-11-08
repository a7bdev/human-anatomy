/* ============================================================
   موسوعة الأمراض — فهرس الأنف والأذن والحنجرة والفم والأسنان (الموجة الثالثة)
   dx/index-ent3.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-ent3.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الغدد اللعابية والفم واللسان ---------------- */

DISEASES.push({
  id: 'sialolithiasis', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'حصاة الغدة اللعابية', en: 'Salivary gland stone (sialolithiasis)' },
  short: {
    ar: 'حصاة صغيرة تسدّ قناة الغدة اللعابية، فينتفخ جانب الوجه أو تحت الفكّ ويؤلم فجأةً مع أول لقمة، ثم يهدأ بعد الأكل ويعود مع الوجبة التالية.',
    en: 'A small stone blocks the duct of a salivary gland, so the side of the face or under the jaw swells and hurts suddenly with the first bite, settles after the meal and returns with the next one.'
  },
  organs: ['salivary-glands', 'tongue'],
  aliases: ['حصاة الغدة اللعابية'],
  keywords: { ar: ['حصوة اللعاب', 'ورم تحت الفك عند الأكل', 'انسداد قناة اللعاب', 'التهاب الغدة اللعابية'], en: ['salivary stone', 'sialolithiasis', 'submandibular duct stone', 'mealtime swelling'] }
});

DISEASES.push({
  id: 'salivary-gland-tumor', group: 'head', tier: 'rare', emergency: false,
  name: { ar: 'أورام الغدد اللعابية', en: 'Salivary gland tumours' },
  short: {
    ar: 'كتلة تنمو ببطء أمام الأذن أو تحت الفكّ، أكثرها حميد لكن بعضها خبيث، وعلامة الخطر أن تصير ثابتة لا تتحرّك أو يضعف معها نصف الوجه.',
    en: 'A slowly growing lump in front of the ear or under the jaw; most are benign but some are malignant, and the warning sign is a lump that becomes fixed or is joined by weakness of one side of the face.'
  },
  organs: ['salivary-glands', 'facial-muscles', 'cranial-nerves', 'lymph-node'],
  aliases: ['أورام الغدة النكفية'],
  keywords: { ar: ['ورم النكفية', 'كتلة أمام الأذن', 'الورم الغدّي متعدّد الأشكال', 'ورم الغدة اللعابية'], en: ['parotid tumour', 'pleomorphic adenoma', 'salivary gland cancer', 'lump in front of ear'] }
});

DISEASES.push({
  id: 'oral-leukoplakia', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'الطلاوة الفموية (البقعة البيضاء في الفم)', en: 'Oral leukoplakia' },
  short: {
    ar: 'بقعة بيضاء ثابتة داخل الفم لا تُمسح ولا تؤلم، تنشأ غالباً من التدخين أو السواك المخلوط بالتبغ، وتُعدّ آفةً سابقة للسرطان تحتاج متابعةً وأحياناً خزعة.',
    en: 'A persistent white patch inside the mouth that cannot be wiped off and does not hurt, usually caused by smoking or chewed tobacco; it counts as a pre-cancerous lesion needing follow-up and sometimes a biopsy.'
  },
  organs: ['tongue', 'lips', 'pharynx'],
  aliases: [],
  keywords: { ar: ['بقعة بيضاء في الفم', 'الطلاوة', 'آفة سابقة للسرطان', 'التبغ والشمّة'], en: ['leukoplakia', 'white patch in mouth', 'premalignant oral lesion', 'smokeless tobacco'] }
});

DISEASES.push({
  id: 'geographic-tongue', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'اللسان الجغرافي', en: 'Geographic tongue' },
  short: {
    ar: 'بقع حمراء ملساء على سطح اللسان تحيط بها حواف بيضاء فتشبه خريطة، تتنقّل من موضع إلى آخر خلال أيام، وهي حالة حميدة تماماً وإن أزعج شكلها صاحبها.',
    en: 'Smooth red patches on the surface of the tongue ringed by white edges so it looks like a map; they move from place to place over days, and the condition is entirely harmless even if its appearance worries the person.'
  },
  organs: ['tongue'],
  aliases: ['اللسان الجغرافي'],
  keywords: { ar: ['خريطة على اللسان', 'التهاب اللسان الهاجر', 'بقع اللسان', 'حرقة اللسان مع الحوامض'], en: ['geographic tongue', 'benign migratory glossitis', 'map-like tongue'] }
});

DISEASES.push({
  id: 'burning-mouth', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'متلازمة الفم الحارق', en: 'Burning mouth syndrome' },
  short: {
    ar: 'إحساس بالحرق في اللسان والشفتين كأنّ الفم اكتوى بمشروب ساخن، مع فم يبدو سليماً تماماً عند الفحص، ويصيب النساء بعد سنّ اليأس أكثر من غيرهنّ.',
    en: 'A burning sensation in the tongue and lips as if the mouth had been scalded by a hot drink, while the mouth looks entirely normal on examination; it affects women after the menopause more than others.'
  },
  organs: ['tongue', 'lips', 'salivary-glands'],
  aliases: [],
  keywords: { ar: ['حرقان اللسان', 'حرقة الفم', 'طعم معدني', 'ألم فموي بلا سبب ظاهر'], en: ['burning mouth syndrome', 'glossodynia', 'scalded mouth', 'metallic taste'] }
});

/* ---------------- الأسنان والفكّ ---------------- */

DISEASES.push({
  id: 'dry-socket', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'السنخ الجاف بعد قلع السنّ', en: 'Dry socket after tooth extraction' },
  short: {
    ar: 'ألم عنيف ينفجر بعد يومين إلى أربعة من قلع سنّ، أشدّ من ألم القلع نفسه، سببه ضياع الجلطة التي تحمي العظم فينكشف السنخ للهواء والطعام.',
    en: 'A violent pain that erupts two to four days after a tooth is pulled, worse than the extraction itself, caused by loss of the clot that protects the bone so the socket lies open to air and food.'
  },
  organs: ['teeth', 'skull'],
  aliases: [],
  keywords: { ar: ['ألم بعد خلع الضرس', 'التهاب السنخ الجاف', 'ضياع الجلطة', 'قلع ضرس العقل'], en: ['dry socket', 'alveolar osteitis', 'pain after extraction'] }
});

DISEASES.push({
  id: 'malocclusion', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'سوء الإطباق وتزاحم الأسنان', en: 'Malocclusion and crowded teeth' },
  short: {
    ar: 'أن تُطبق الأسنان العليا على السفلى إطباقاً خاطئاً أو تتزاحم فوق بعضها، فيصعب التنظيف ويكثر التسوّس ويتعب المفصل الفكّي وقد يتأثّر النطق والمضغ.',
    en: 'The upper teeth meet the lower ones wrongly or crowd over each other, so cleaning becomes hard, decay multiplies, the jaw joint tires, and speech and chewing may suffer.'
  },
  organs: ['teeth', 'child-teeth', 'tmj'],
  aliases: [],
  keywords: { ar: ['تقويم الأسنان', 'تزاحم الأسنان', 'الأسنان البارزة', 'العضّة المفتوحة', 'العضّة المعكوسة'], en: ['malocclusion', 'crowded teeth', 'overbite', 'crossbite', 'orthodontics'] }
});

DISEASES.push({
  id: 'nasal-fracture', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'كسر عظم الأنف', en: 'Nasal bone fracture' },
  short: {
    ar: 'أشيع كسور الوجه على الإطلاق: ضربة أو سقطة تكسر عظم الأنف فينزف وينتفخ ويعوجّ، والمهمّ فيه ليس الكسر نفسه بل تجمّع دموي داخل الحاجز قد يذيب غضروفه.',
    en: 'By far the commonest facial fracture: a blow or fall breaks the nasal bone so it bleeds, swells and bends, and what matters is not the fracture itself but a blood collection inside the septum that can dissolve its cartilage.'
  },
  organs: ['nose', 'skull', 'sinuses'],
  aliases: ['كسر عظم الأنف'],
  keywords: { ar: ['كسر الأنف', 'اعوجاج الأنف بعد ضربة', 'ورم دموي في الحاجز', 'أنف مكسور'], en: ['broken nose', 'nasal fracture', 'septal haematoma', 'crooked nose after injury'] }
});

DISEASES.push({
  id: 'ent-foreign-body', group: 'head', tier: 'common', emergency: true,
  name: { ar: 'جسم غريب في الأنف والأذن', en: 'Foreign body in the nose and ear' },
  short: {
    ar: 'طفل يدسّ خرزة أو قطعة إسفنج في أنفه أو أذنه فلا يخبر أحداً، ويُكشف بعد أيام برائحة كريهة وإفراز من جهة واحدة — والبطارية القرصية هنا حالة دقائق لا أيام.',
    en: 'A child pushes a bead or piece of foam into his nose or ear and tells no one, and it is found days later by a foul smell and one-sided discharge; a button battery here is a matter of minutes, not days.'
  },
  organs: ['nose', 'ear', 'sinuses'],
  aliases: [],
  keywords: { ar: ['بطارية قرصية في الأنف', 'رائحة من منخر واحد', 'خرزة في الأذن', 'حشرة داخل الأذن'], en: ['nasal foreign body', 'ear foreign body', 'button battery', 'unilateral nasal discharge', 'insect in ear'] }
});

/* ---------------- البلعوم والحنجرة والبلع ---------------- */

DISEASES.push({
  id: 'tonsil-stones', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'حصوات اللوزتين', en: 'Tonsil stones (tonsilloliths)' },
  short: {
    ar: 'كتل بيضاء صغيرة صلبة تتجمّع داخل جيوب اللوزتين من بقايا الطعام والخلايا الميتة، تعطي رائحة فم كريهة وإحساساً بشيء عالق في الحلق.',
    en: 'Small hard white lumps that gather inside the pockets of the tonsils from food debris and dead cells, giving bad breath and a feeling of something stuck in the throat.'
  },
  organs: ['pharynx'],
  aliases: [],
  keywords: { ar: ['حصوة اللوزة', 'كرات بيضاء في الحلق', 'رائحة الفم من اللوز', 'جيوب اللوزتين'], en: ['tonsil stones', 'tonsilloliths', 'white balls in throat', 'tonsil crypts'] }
});

DISEASES.push({
  id: 'lpr', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'الارتجاع الحنجري البلعومي', en: 'Laryngopharyngeal reflux' },
  short: {
    ar: 'صعود حمض المعدة إلى الحنجرة والبلعوم فيصيبهما بالتهيّج: بحّة صباحية وتنحنح دائم وإحساس بغصّة في الحلق، وغالباً بلا أي حرقة في الصدر.',
    en: 'Stomach acid rises to the voice box and throat and irritates them: a morning hoarseness, constant throat-clearing and a lump-like feeling in the throat, usually with no heartburn in the chest at all.'
  },
  organs: ['larynx', 'vocal-folds', 'pharynx', 'esophagus'],
  aliases: [],
  keywords: { ar: ['الارتجاع الصامت', 'تنحنح مستمر', 'غصّة في الحلق', 'بحّة الصباح', 'ارتجاع إلى الحنجرة'], en: ['silent reflux', 'laryngopharyngeal reflux', 'globus sensation', 'chronic throat clearing'] }
});

DISEASES.push({
  id: 'dysphagia', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'عسر البلع (صعوبة البلع)', en: 'Dysphagia (difficulty swallowing)' },
  short: {
    ar: 'أن يتعثّر الطعام أو الشراب في طريقه، إمّا في الحلق فور البلع مع سعال وشرقة، وإمّا في الصدر فيقف كأنّه علق خلف عظمة القصّ.',
    en: 'Food or drink stumbles on its way, either in the throat right at the moment of swallowing with coughing and choking, or in the chest where it seems to stop behind the breastbone.'
  },
  organs: ['esophagus', 'pharynx', 'tongue'],
  aliases: ['صعوبة البلع'],
  keywords: { ar: ['صعوبة البلع', 'الطعام يعلق في الحلق', 'الشرقة عند الأكل', 'البلع المؤلم'], en: ['dysphagia', 'trouble swallowing', 'food sticking', 'aspiration on swallowing'] }
});

DISEASES.push({
  id: 'laryngeal-cancer', group: 'cancer', tier: 'rare', emergency: false,
  name: { ar: 'سرطان الحنجرة', en: 'Laryngeal cancer' },
  short: {
    ar: 'ورم خبيث ينشأ على الحبال الصوتية أو حولها، وعلامته الأولى بحّة صوت لا تزول بعد ثلاثة أسابيع عند مدخّن، وهو من أكثر السرطانات قابليةً للشفاء إن كُشف باكراً.',
    en: 'A malignant tumour arising on or around the vocal cords; its first sign is hoarseness that does not clear after three weeks in a smoker, and it is among the most curable cancers when found early.'
  },
  organs: ['larynx', 'vocal-folds', 'pharynx', 'lymph-node'],
  aliases: [],
  keywords: { ar: ['ورم الحنجرة', 'بحّة لا تزول', 'سرطان الحبال الصوتية', 'التدخين والحنجرة'], en: ['laryngeal cancer', 'vocal cord cancer', 'persistent hoarseness', 'throat cancer'] }
});

DISEASES.push({
  id: 'nasopharyngeal-carcinoma', group: 'cancer', tier: 'rare', emergency: false,
  name: { ar: 'سرطان البلعوم الأنفي', en: 'Nasopharyngeal carcinoma' },
  short: {
    ar: 'ورم يختبئ في السقف الخلفي للأنف خلف الحلق، فلا يُرى بالنظر ولا يؤلم، ويظهر أول ما يظهر بكتلة في الرقبة أو انسداد أذن واحدة لا يزول.',
    en: 'A tumour hidden in the back roof of the nose behind the throat, unseen on looking and painless, which shows itself first as a neck lump or a blocked ear on one side that will not clear.'
  },
  organs: ['pharynx', 'nose', 'ear', 'lymph-node'],
  aliases: [],
  keywords: { ar: ['ورم البلعوم الأنفي', 'كتلة في الرقبة', 'انسداد أذن واحدة', 'دم مع مخاط الأنف'], en: ['nasopharyngeal carcinoma', 'neck lump', 'unilateral ear blockage', 'blood-stained nasal mucus'] }
});

/* ---------------- الأذن ---------------- */

DISEASES.push({
  id: 'mastoiditis', group: 'senses', tier: 'rare', emergency: true,
  name: { ar: 'التهاب الخشاء', en: 'Mastoiditis' },
  short: {
    ar: 'امتداد عدوى الأذن الوسطى إلى عظم الخشاء خلف الأذن، فتحمرّ المنطقة وتؤلم وتنتفخ حتى تدفع صيوان الأذن للأمام — حالة مستشفى لا عيادة.',
    en: 'An ear infection spreads into the mastoid bone behind the ear, which becomes red, painful and swollen enough to push the outer ear forwards; this is a hospital case, not a clinic one.'
  },
  organs: ['ear', 'skull', 'meninges'],
  aliases: [],
  keywords: { ar: ['التهاب عظم الخشاء', 'انتفاخ خلف الأذن', 'مضاعفات التهاب الأذن الوسطى', 'الأذن البارزة للأمام'], en: ['mastoiditis', 'swelling behind the ear', 'protruding auricle', 'complication of otitis media'] }
});

DISEASES.push({
  id: 'cholesteatoma', group: 'senses', tier: 'rare', emergency: false,
  name: { ar: 'الورم الكوليسترولي في الأذن (الكوليستيوما)', en: 'Cholesteatoma' },
  short: {
    ar: 'كيس من الجلد ينمو خطأً داخل الأذن الوسطى فيتضخّم ويأكل العظام حوله، وعلامته إفراز كريه الرائحة من أذن واحدة مع ضعف سمع يزداد ببطء.',
    en: 'A pouch of skin grows wrongly inside the middle ear, enlarges and erodes the bone around it; its sign is a foul-smelling discharge from one ear with slowly worsening hearing.'
  },
  organs: ['ear', 'skull', 'cranial-nerves'],
  aliases: [],
  keywords: { ar: ['كوليستيوما', 'إفراز كريه من الأذن', 'أكل عظام الأذن', 'التهاب الأذن المزمن القيحي'], en: ['cholesteatoma', 'foul ear discharge', 'chronic suppurative otitis media', 'bone erosion in ear'] }
});

DISEASES.push({
  id: 'eustachian-dysfunction', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'خلل نفير أوستاش والرضح الضغطي للأذن', en: 'Eustachian tube dysfunction and ear barotrauma' },
  short: {
    ar: 'القناة التي تعادل الضغط بين الأذن والأنف تعجز عن الانفتاح، فتنسدّ الأذن وتصير الأصوات بعيدة وكأنّ رأسك في برميل، ويشتدّ الأمر في الطيران والغوص.',
    en: 'The tube that balances pressure between the ear and the nose fails to open, so the ear blocks and sounds come as if your head were in a barrel; it worsens with flying and diving.'
  },
  organs: ['ear', 'pharynx', 'nose'],
  aliases: [],
  keywords: { ar: ['انسداد الأذن في الطيران', 'ضغط الأذن', 'قناة استاكيوس', 'الأذن الغروية', 'سائل خلف الطبلة'], en: ['eustachian tube dysfunction', 'ear barotrauma', 'blocked ear on flying', 'glue ear', 'middle ear effusion'] }
});

DISEASES.push({
  id: 'otosclerosis', group: 'senses', tier: 'rare', emergency: false,
  name: { ar: 'تصلّب الأذن (تيبّس عظيمة الركاب)', en: 'Otosclerosis' },
  short: {
    ar: 'نموّ عظمي يقيّد أصغر عظمة في الجسم داخل الأذن الوسطى فتعجز عن الاهتزاز، فيضعف السمع تدريجياً عند شابّ أو شابّة بلا أي التهاب ولا ألم.',
    en: 'A bony overgrowth locks the smallest bone in the body inside the middle ear so it can no longer vibrate, and hearing fades gradually in a young man or woman with no infection and no pain.'
  },
  organs: ['ear', 'skull'],
  aliases: [],
  keywords: { ar: ['تيبّس عظيمات الأذن', 'ضعف سمع عند الشباب', 'عملية الركاب', 'سمع أفضل في الضجيج'], en: ['otosclerosis', 'stapes fixation', 'conductive hearing loss in young adults', 'stapedotomy'] }
});

DISEASES.push({
  id: 'ramsay-hunt', group: 'senses', tier: 'rare', emergency: true,
  name: { ar: 'متلازمة رامزي هانت (الحزام الناري في الأذن)', en: 'Ramsay Hunt syndrome' },
  short: {
    ar: 'فيروس جدري الماء يستيقظ في عصب الوجه عند الأذن، فتظهر حويصلات مؤلمة داخل الصيوان ويشلّ نصف الوجه مع دوار وضعف سمع — والعلاج المبكّر يغيّر المصير.',
    en: 'The chickenpox virus wakes in the facial nerve at the ear, so painful blisters appear inside the outer ear and half the face is paralysed with vertigo and hearing loss; early treatment changes the outcome.'
  },
  organs: ['ear', 'cranial-nerves', 'facial-muscles', 'balance'],
  aliases: [],
  keywords: { ar: ['حزام ناري في الأذن', 'شلل وجه مع طفح', 'الحلأ النطاقي الأذني', 'حويصلات في الأذن'], en: ['Ramsay Hunt syndrome', 'herpes zoster oticus', 'facial palsy with rash', 'ear blisters'] }
});

DISEASES.push({
  id: 'vestibular-migraine', group: 'senses', tier: 'common', emergency: false,
  name: { ar: 'الدوار الشقيقي (دوار الصداع النصفي)', en: 'Vestibular migraine' },
  short: {
    ar: 'نوبات دوار تدوم دقائق أو ساعات عند شخص يعاني الشقيقة، مع نفور من الضوء والصوت والحركة، وقد تأتي بلا صداع إطلاقاً فتُشخَّص خطأً سنين.',
    en: 'Attacks of vertigo lasting minutes or hours in a person who suffers migraine, with aversion to light, sound and movement; they may come with no headache at all and be misdiagnosed for years.'
  },
  organs: ['balance', 'ear', 'brain'],
  aliases: [],
  keywords: { ar: ['دوار مع الشقيقة', 'دوخة متكرّرة', 'حساسية للحركة', 'صداع نصفي دهليزي'], en: ['vestibular migraine', 'migraine-associated vertigo', 'recurrent dizziness', 'motion sensitivity'] }
});

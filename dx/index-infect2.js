/* ============================================================
   موسوعة الأمراض — فهرس الأمراض المعدية (الصفّ الثاني)
   dx/index-infect2.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-infect2.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- عدوى الكبد المنقولة بالدم ---------------- */

DISEASES.push({
  id: 'hepatitis-b', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'التهاب الكبد الوبائي B', en: 'Hepatitis B' },
  short: {
    ar: 'فيروس ينتقل بالدم وسوائل الجسم ومن الأم إلى وليدها، قد يمرّ بلا أعراض ثم يستقرّ في الكبد سنوات صامتة. له لقاح يمنعه تماماً، وهذا أهمّ ما يُعرف عنه.',
    en: 'A virus spread by blood, body fluids and from mother to newborn. It may pass unnoticed and then settle silently in the liver for years. A vaccine prevents it completely, which is the most important thing to know about it.'
  },
  organs: ['liver', 'liver-lobule', 'blood', 'immunity'],
  aliases: [],
  keywords: { ar: ['التهاب كبد ب', 'حامل الفيروس', 'لقاح الكبد الوبائي', 'صفار'], en: ['hepatitis B', 'HBV', 'chronic carrier'] }
});

DISEASES.push({
  id: 'hepatitis-c', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'التهاب الكبد الوبائي C', en: 'Hepatitis C' },
  short: {
    ar: 'فيروس ينتقل بالدم خاصة عبر الإبر والأدوات الملوّثة، ويبقى صامتاً في الكبد عشرين سنة أو أكثر. صار اليوم من الأمراض المزمنة القليلة التي تُشفى شفاءً تامّاً بعلاج قصير.',
    en: 'A blood-borne virus, mainly from contaminated needles and instruments, that stays silent in the liver for twenty years or more. It is now one of the few chronic infections that can be cured completely with a short course of treatment.'
  },
  organs: ['liver', 'liver-lobule', 'blood', 'immunity'],
  aliases: [],
  keywords: { ar: ['التهاب كبد سي', 'تليّف الكبد', 'إبر ملوّثة', 'علاج يشفي'], en: ['hepatitis C', 'HCV', 'cure'] }
});

/* ---------------- عدوى تنتقل من الحيوان ---------------- */

DISEASES.push({
  id: 'brucellosis', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'الحمّى المالطية (البروسيلا)', en: 'Brucellosis (Malta fever)' },
  short: {
    ar: 'عدوى بكتيرية تنتقل من الأغنام والأبقار والإبل عبر الحليب غير المغلي والأجبان الطازجة. تعطي حمّى تروح وتجيء وتعرّقاً ليلياً وألم مفاصل يطول أسابيع فيُظنّ مرضاً آخر.',
    en: 'A bacterial infection caught from sheep, cattle and camels through unboiled milk and fresh cheese. It causes a fever that comes and goes, night sweats and joint pain lasting weeks, so it is often mistaken for something else.'
  },
  organs: ['blood', 'spleen', 'lymph-node', 'liver', 'spine'],
  aliases: [],
  keywords: { ar: ['بروسيلا', 'حمى متموجة', 'حليب غير مبستر', 'تعرق ليلي'], en: ['brucellosis', 'Malta fever', 'undulant fever'] }
});

DISEASES.push({
  id: 'tetanus', group: 'infection', tier: 'rare', emergency: true,
  name: { ar: 'الكزاز (التيتانوس)', en: 'Tetanus' },
  short: {
    ar: 'سمّ بكتيري يدخل من جرح ملوّث بالتراب فيقفل العضلات في تقلّص لا يرتخي، يبدأ بالفكّ ثم يعمّ الجسم. اللقاح يمنعه، وتقييم الجرح في يومه هو ما يحسم الأمر.',
    en: 'A bacterial toxin entering through a soil-contaminated wound locks the muscles in a spasm that will not release, beginning at the jaw and spreading. Vaccination prevents it, and assessing the wound on the same day is what decides the outcome.'
  },
  organs: ['nmj', 'muscles', 'peripheral-nerve', 'spinal-cord', 'wound-healing', 'skin'],
  aliases: [],
  keywords: { ar: ['تيتانوس', 'قفل الفك', 'جرح صدئ', 'إبرة الكزاز'], en: ['tetanus', 'lockjaw', 'tetanus booster'] }
});

DISEASES.push({
  id: 'rabies', group: 'infection', tier: 'rare', emergency: true,
  name: { ar: 'داء الكلب (السعار)', en: 'Rabies' },
  short: {
    ar: 'فيروس ينتقل بعضّة حيوان مصاب ويزحف على الأعصاب إلى الدماغ. لا علاج له بعد ظهور الأعراض، لكنه يُمنع منعاً شبه تامّ إذا عُولج مكان العضّة وأُعطي المصل واللقاح في وقتهما.',
    en: 'A virus passed by the bite of an infected animal that creeps along the nerves to the brain. Once symptoms appear there is no treatment, yet it is almost entirely preventable if the bite is washed and the immunoglobulin and vaccine are given in time.'
  },
  organs: ['peripheral-nerve', 'brain', 'nervous', 'spinal-cord', 'cranial-nerves', 'skin'],
  aliases: [],
  keywords: { ar: ['السعار', 'عضة كلب', 'عضة قط', 'لقاح بعد التعرض'], en: ['rabies', 'animal bite', 'post-exposure prophylaxis'] }
});

/* ---------------- طفوح فيروسية ---------------- */

DISEASES.push({
  id: 'mpox', group: 'infection', tier: 'rare', emergency: false,
  name: { ar: 'جدري القرود', en: 'Mpox (monkeypox)' },
  short: {
    ar: 'عدوى فيروسية قريبة من الجدري تعطي حمّى وتضخّم عقد لمفاوية ثم طفحاً يمرّ بمراحل حتى يصير بثوراً عميقة ثم قشوراً. تنتقل بالملامسة القريبة الطويلة، وتُشفى غالباً وحدها.',
    en: 'A viral infection related to smallpox causing fever, swollen lymph nodes and then a rash that passes through stages into deep blisters and crusts. It spreads by close prolonged contact and usually resolves on its own.'
  },
  organs: ['skin', 'lymph-node', 'immunity'],
  aliases: [],
  keywords: { ar: ['جدري القرد', 'بثور جلدية', 'عزل'], en: ['mpox', 'monkeypox'] }
});

DISEASES.push({
  id: 'rubella', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'الحصبة الألمانية', en: 'Rubella (German measles)' },
  short: {
    ar: 'مرض فيروسي خفيف عند الطفل والبالغ: طفح وردي وحمّى بسيطة وتضخّم عقد خلف الأذن. خطره كلّه على الجنين إذا أصاب أمّاً في أشهر الحمل الأولى.',
    en: 'A mild viral illness in children and adults: a pink rash, low fever and swollen nodes behind the ears. Its whole danger lies in what it does to the fetus if it infects a mother in the first months of pregnancy.'
  },
  organs: ['skin', 'lymph-node', 'pregnancy', 'embryo', 'immunity'],
  aliases: [],
  keywords: { ar: ['روبيلا', 'حصبة ألمانية', 'طفح وردي', 'لقاح ثلاثي'], en: ['rubella', 'German measles', 'congenital rubella'] }
});

DISEASES.push({
  id: 'roseola', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'الطفح الوردي (الوردية الطفلية)', en: 'Roseola infantum' },
  short: {
    ar: 'من أشيع أسباب الحمّى العالية عند الرضّع: ثلاثة أيام حرارة مرتفعة والطفل معافى نسبياً، ثم تهبط الحرارة فجأة ويظهر طفح وردي — وظهور الطفح علامة انتهاء المرض لا بدايته.',
    en: 'One of the commonest causes of high fever in babies: three days of high temperature in a child who otherwise looks well, then the fever drops abruptly and a pink rash appears — the rash marks the end of the illness, not its start.'
  },
  organs: ['skin', 'immunity', 'lymph-node', 'brain'],
  aliases: [],
  keywords: { ar: ['حمى الثلاثة أيام', 'طفح بعد الحرارة', 'تشنج حراري'], en: ['roseola', 'sixth disease', 'HHV-6'] }
});

DISEASES.push({
  id: 'scarlet-fever', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'الحمّى القرمزية', en: 'Scarlet fever' },
  short: {
    ar: 'التهاب حلق بكتيري عند الأطفال يتبعه طفح أحمر خشن الملمس كورق الصنفرة ولسان يشبه حبّة الفراولة. علاجه بالمضاد الحيوي مهمّ لا لتسريع الشفاء بل لمنع أذى القلب والكلى لاحقاً.',
    en: 'A bacterial throat infection in children followed by a red rash rough as sandpaper and a tongue like a strawberry. Antibiotic treatment matters not to hasten recovery but to prevent later harm to the heart and kidneys.'
  },
  organs: ['pharynx', 'tongue', 'skin', 'lymph-node', 'heart'],
  aliases: [],
  keywords: { ar: ['حمى قرمزية', 'لسان الفراولة', 'طفح خشن', 'التهاب حلق بكتيري'], en: ['scarlet fever', 'strawberry tongue', 'strep throat'] }
});

DISEASES.push({
  id: 'ringworm', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'القوباء الحلقية (سعفة الجسم وفروة الرأس)', en: 'Ringworm (tinea corporis and capitis)' },
  short: {
    ar: 'عدوى فطرية سطحية تصنع بقعة حمراء دائرية حوافّها بارزة ووسطها أهدأ، وتنتقل بالملامسة ومن الحيوانات الأليفة. وفي فروة الرأس تترك بقعة صلعاء بشعر مكسور.',
    en: 'A superficial fungal infection making a round red patch with a raised edge and a calmer centre, caught by contact and from pets. On the scalp it leaves a bald patch with broken hairs.'
  },
  organs: ['skin', 'hair-follicle', 'nail'],
  aliases: [],
  keywords: { ar: ['سعفة الجسم', 'سعفة الرأس', 'فطريات الجلد', 'بقعة دائرية'], en: ['ringworm', 'tinea corporis', 'tinea capitis'] }
});

/* ---------------- العدوى المنقولة جنسياً ---------------- */

DISEASES.push({
  id: 'chlamydia', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'الكلاميديا', en: 'Chlamydia' },
  short: {
    ar: 'أشيع عدوى بكتيرية منقولة جنسياً، وأخطر ما فيها أنها صامتة تماماً عند أغلب النساء وكثير من الرجال، فتمرّ سنوات حتى تُكتشف بعد أن تكون قد أتلفت قناتي البيض.',
    en: 'The commonest sexually transmitted bacterial infection. Its danger is that it is entirely silent in most women and in many men, so years may pass before it is found, by which time it may have damaged the fallopian tubes.'
  },
  organs: ['female-reproductive', 'urethra', 'testis', 'eye'],
  aliases: [],
  keywords: { ar: ['كلاميديا', 'عدوى صامتة', 'عقم الأنابيب', 'التهاب الحوض'], en: ['chlamydia', 'silent infection', 'tubal infertility'] }
});

DISEASES.push({
  id: 'gonorrhea', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'السيلان', en: 'Gonorrhoea' },
  short: {
    ar: 'عدوى بكتيرية منقولة جنسياً تعطي عند الرجل إفرازاً صديدياً وحرقة واضحة، وتبقى عند المرأة صامتة غالباً حتى تصعد إلى الحوض. ومقاومتها للمضادات الحيوية تتزايد.',
    en: 'A sexually transmitted bacterial infection giving men an obvious purulent discharge and burning, while in women it is usually silent until it ascends into the pelvis. Its resistance to antibiotics is rising.'
  },
  organs: ['urethra', 'female-reproductive', 'prostate', 'testis', 'anorectal', 'eye'],
  aliases: [],
  keywords: { ar: ['سيلان', 'إفراز صديدي', 'حرقة البول', 'مقاومة المضادات'], en: ['gonorrhoea', 'gonorrhea', 'discharge'] }
});

DISEASES.push({
  id: 'syphilis', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'الزهري (السفلس)', en: 'Syphilis' },
  short: {
    ar: 'عدوى بكتيرية تمرّ بمراحل متباعدة: قرحة غير مؤلمة تختفي وحدها، ثم طفح يشمل الكفّين والقدمين، ثم سنوات صمت قد تنتهي بأذى القلب والدماغ. يُسمّى المقلّد العظيم لأنه يحاكي أمراضاً كثيرة.',
    en: 'A bacterial infection passing through widely separated stages: a painless ulcer that heals by itself, then a rash involving the palms and soles, then years of silence that may end in damage to the heart and brain. It is called the great imitator because it mimics so many diseases.'
  },
  organs: ['skin', 'blood', 'brain', 'nervous', 'lymph-node', 'pregnancy'],
  aliases: [],
  keywords: { ar: ['زهري', 'المقلد العظيم', 'قرحة غير مؤلمة', 'طفح الكفين'], en: ['syphilis', 'great imitator', 'chancre'] }
});

DISEASES.push({
  id: 'genital-herpes', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'الهربس التناسلي', en: 'Genital herpes' },
  short: {
    ar: 'فيروس يسبّب تقرّحات مؤلمة تشفى ثم تعود، لأنه يسكن العقدة العصبية ولا يغادر الجسم. أغلب المصابين لا يعرفون أنهم مصابون، والنوبات تخفّ مع السنين.',
    en: 'A virus causing painful ulcers that heal and then return, because it lodges in a nerve ganglion and never leaves the body. Most infected people do not know they carry it, and attacks become milder over the years.'
  },
  organs: ['skin', 'male-reproductive', 'female-reproductive', 'peripheral-nerve', 'urethra'],
  aliases: [],
  keywords: { ar: ['هربس تناسلي', 'قرح متكررة', 'الحمل والهربس'], en: ['genital herpes', 'HSV-2', 'recurrence'] }
});

/* ---------------- عدوى منقولة بالحشرات والماء ---------------- */

DISEASES.push({
  id: 'leishmaniasis', group: 'infection', tier: 'rare', emergency: false,
  name: { ar: 'الليشمانيا (حبّة بغداد)', en: 'Leishmaniasis (oriental sore)' },
  short: {
    ar: 'طفيلي تنقله لدغة ذبابة الرمل فيصنع قرحة جلدية بطيئة لا تلتئم شهوراً وتترك ندبة. وله صورة أخطر تصيب الطحال والكبد ونخاع العظم مع حمّى وهزال.',
    en: 'A parasite carried by the bite of a sandfly, making a slow skin ulcer that will not heal for months and leaves a scar. A more dangerous form attacks the spleen, liver and bone marrow with fever and wasting.'
  },
  organs: ['skin', 'wound-healing', 'spleen', 'liver', 'immunity'],
  aliases: [],
  keywords: { ar: ['حبة بغداد', 'ذبابة الرمل', 'قرحة لا تلتئم'], en: ['leishmaniasis', 'sandfly', 'oriental sore'] }
});

DISEASES.push({
  id: 'cholera', group: 'infection', tier: 'rare', emergency: true,
  name: { ar: 'الكوليرا', en: 'Cholera' },
  short: {
    ar: 'عدوى بكتيرية من ماء أو طعام ملوّث بالبراز تسبّب إسهالاً مائياً غزيراً جداً بلا ألم، يفقد الجسم فيه لترات في ساعات. العلاج تعويض السوائل، وبه ينجو أغلب المصابين.',
    en: 'A bacterial infection from water or food contaminated with faeces, causing an enormous painless watery diarrhoea in which the body loses litres within hours. Treatment is fluid replacement, and with it most people survive.'
  },
  organs: ['small-intestine', 'villi', 'large-intestine', 'circulation', 'kidneys'],
  aliases: [],
  keywords: { ar: ['كوليرا', 'إسهال ماء الأرز', 'جفاف شديد', 'محلول الإماهة'], en: ['cholera', 'rice-water stool', 'rehydration'] }
});

DISEASES.push({
  id: 'amebiasis', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'الزحار الأميبي (الدوسنتاريا الأميبية)', en: 'Amoebic dysentery' },
  short: {
    ar: 'طفيلي وحيد الخلية يبتلعه الإنسان مع ماء أو طعام ملوّث فيقرّح جدار القولون: إسهال مخاطي مدمّى ومغص وزحير. وقد يعبر إلى الكبد فيصنع خرّاجاً بحمّى وألم تحت الضلوع اليمنى.',
    en: 'A single-celled parasite swallowed in contaminated water or food that ulcerates the wall of the colon: bloody mucous diarrhoea, cramps and straining. It may cross to the liver and form an abscess with fever and pain under the right ribs.'
  },
  organs: ['large-intestine', 'liver', 'anorectal'],
  aliases: [],
  keywords: { ar: ['أميبا', 'دوسنتاريا', 'إسهال مدمم', 'خراج الكبد'], en: ['amoebiasis', 'Entamoeba', 'liver abscess'] }
});

/* ---------------- عدوى جهازية أخرى ---------------- */

DISEASES.push({
  id: 'mononucleosis', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'كثرة الوحيدات العدوائية (الحمّى الغدّية)', en: 'Infectious mononucleosis (glandular fever)' },
  short: {
    ar: 'عدوى فيروسية تصيب المراهقين والشباب: التهاب حلق شديد وعقد لمفاوية متضخّمة وإرهاق يطول أسابيع. وقد يتضخّم الطحال فيُمنع صاحبه من الرياضات الاحتكاكية حتى يصغر.',
    en: 'A viral infection of teenagers and young adults: a severe sore throat, enlarged lymph nodes and an exhaustion lasting weeks. The spleen may enlarge, so contact sports are forbidden until it shrinks again.'
  },
  organs: ['pharynx', 'lymph-node', 'spleen', 'liver', 'lymphatic', 'immunity'],
  aliases: [],
  keywords: { ar: ['الحمى الغدية', 'إبشتاين بار', 'تضخم الطحال', 'إرهاق طويل'], en: ['mononucleosis', 'glandular fever', 'EBV'] }
});

DISEASES.push({
  id: 'toxoplasmosis', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'داء المقوّسات (التوكسوبلازما)', en: 'Toxoplasmosis' },
  short: {
    ar: 'طفيلي شائع جداً يُلتقط من اللحم غير المطهوّ جيداً ومن تراب ملوّث ببراز القطط. لا يشعر به السليم غالباً، وخطره على الحامل وعلى ضعيف المناعة وحدهما.',
    en: 'A very common parasite picked up from undercooked meat and from soil contaminated with cat faeces. A healthy person usually feels nothing; its danger is to pregnant women and to those with weakened immunity alone.'
  },
  organs: ['lymph-node', 'brain', 'retina', 'pregnancy', 'embryo', 'immunity'],
  aliases: [],
  keywords: { ar: ['توكسوبلازما', 'القطط والحمل', 'لحم غير مطهو'], en: ['toxoplasmosis', 'cats and pregnancy'] }
});

DISEASES.push({
  id: 'mers', group: 'infection', tier: 'rare', emergency: false,
  name: { ar: 'متلازمة الشرق الأوسط التنفّسية (كورونا الإبل)', en: 'MERS (Middle East respiratory syndrome)' },
  short: {
    ar: 'عدوى فيروسية تنفّسية ترتبط بمخالطة الإبل وحليبها النيّئ، تتراوح بين أعراض خفيفة والتهاب رئوي شديد مع فشل كلوي. انتقالها بين البشر محدود لكنه يقع في المستشفيات.',
    en: 'A respiratory viral infection linked to contact with camels and their raw milk, ranging from mild symptoms to severe pneumonia with kidney failure. Spread between people is limited but does occur in hospitals.'
  },
  organs: ['alveoli', 'lungs', 'bronchi', 'kidneys', 'immunity'],
  aliases: [],
  keywords: { ar: ['كورونا الإبل', 'ميرس', 'حليب الإبل النيء', 'التهاب رئوي'], en: ['MERS', 'MERS-CoV', 'camel contact'] }
});

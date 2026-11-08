/* ============================================================
   موسوعة الأمراض — فهرس القلب والأوعية والدم (الموجة الثانية)
   dx/index-cardio2.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-cardio2.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الشرايين والدهون والضغط ---------------- */

DISEASES.push({
  id: 'dyslipidemia', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'اضطراب دهون الدم (ارتفاع الكوليسترول)', en: 'Dyslipidaemia (high cholesterol)' },
  short: {
    ar: 'دهون الدم خارج حدودها سنوات بلا أي إحساس، فتترسّب في جدران الشرايين وتمهّد بصمت للجلطة القلبية والسكتة الدماغية.',
    en: 'Blood fats stay outside their limits for years without any sensation, settling into artery walls and quietly preparing the ground for heart attack and stroke.'
  },
  organs: ['blood', 'vessel-types', 'coronary', 'liver', 'circulation'],
  aliases: [],
  keywords: { ar: ['الكوليسترول', 'الدهون الثلاثية', 'دهون الدم', 'الكوليسترول الضار'], en: ['cholesterol', 'LDL', 'triglycerides', 'dyslipidemia', 'hyperlipidemia'] }
});

DISEASES.push({
  id: 'hypotension', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'هبوط ضغط الدم والهبوط الوضعي', en: 'Low blood pressure and orthostatic hypotension' },
  short: {
    ar: 'ضغط أقلّ ممّا يلزم لإيصال الدم إلى الدماغ، فتأتي الدوخة والسواد أمام العين خاصةً في أول ثوانٍ بعد الوقوف.',
    en: 'Pressure too low to push blood up to the brain, bringing dizziness and greying of vision, especially in the first seconds after standing up.'
  },
  organs: ['circulation', 'autonomic', 'heart', 'vessels', 'brain'],
  aliases: ['هبوط الضغط الوضعي'],
  keywords: { ar: ['الضغط المنخفض', 'دوخة عند الوقوف', 'سواد أمام العين'], en: ['hypotension', 'low blood pressure', 'postural dizziness'] }
});

/* ---------------- النظم الكهربائي ---------------- */

DISEASES.push({
  id: 'svt', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'تسرّع القلب فوق البطيني (نوبات الخفقان)', en: 'Supraventricular tachycardia (SVT)' },
  short: {
    ar: 'نوبة خفقان تبدأ فجأة كأن مفتاحاً أُدير، فيتسارع القلب بانتظام إلى ما فوق مئة وخمسين نبضة، ثم تنتهي فجأة كما بدأت.',
    en: 'A bout of palpitations that starts abruptly as if a switch were flipped, driving a regular heartbeat above a hundred and fifty, then stopping just as suddenly.'
  },
  organs: ['heart', 'circulation', 'autonomic'],
  aliases: [],
  keywords: { ar: ['خفقان مفاجئ', 'تسارع النبض', 'دقّات سريعة منتظمة'], en: ['SVT', 'palpitations', 'racing heart', 'AVNRT'] }
});

DISEASES.push({
  id: 'bradycardia-block', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'بطء القلب وحصار التوصيل', en: 'Bradycardia and heart block' },
  short: {
    ar: 'النبض يبطؤ أكثر ممّا يحتمله الجسم، إمّا لأن مولّد الإشارة تعب أو لأن الإشارة تتعثّر في طريقها، فيأتي الإرهاق والدوخة والإغماء.',
    en: 'The pulse slows more than the body can bear, either because the signal generator has tired or because the signal is blocked on its way, bringing fatigue, dizziness and blackouts.'
  },
  organs: ['heart', 'circulation', 'autonomic', 'brain'],
  aliases: [],
  keywords: { ar: ['بطء النبض', 'حصار قلبي', 'منظّم ضربات القلب'], en: ['bradycardia', 'heart block', 'AV block', 'pacemaker'] }
});

/* ---------------- أغلفة القلب وبطانته ---------------- */

DISEASES.push({
  id: 'pericarditis', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'التهاب التامور والانصباب التاموري', en: 'Pericarditis and pericardial effusion' },
  short: {
    ar: 'التهاب الكيس الرقيق المحيط بالقلب، فيأتي ألم صدر حادّ يشتدّ بالاستلقاء والشهيق ويخفّ بالميل إلى الأمام.',
    en: 'Inflammation of the thin sac around the heart, giving a sharp chest pain that worsens on lying flat and on breathing in, and eases on leaning forward.'
  },
  organs: ['serous-membranes', 'heart', 'rib-cage', 'circulation'],
  aliases: ['التهاب التامور والانصباب التاموري'],
  keywords: { ar: ['ألم الصدر بالاستلقاء', 'ماء حول القلب', 'انسداد التامور'], en: ['pericarditis', 'pericardial effusion', 'tamponade'] }
});

DISEASES.push({
  id: 'endocarditis', group: 'heart', tier: 'rare', emergency: true,
  name: { ar: 'التهاب الشغاف (التهاب بطانة القلب وصماماته)', en: 'Infective endocarditis' },
  short: {
    ar: 'جراثيم تستقرّ على صمام قلبي وتبني عليه كتلة معدية، فتأتي حمّى طويلة غامضة وتتلف الصمام وتقذف شظايا إلى الدماغ والأطراف.',
    en: 'Bacteria settle on a heart valve and build an infected mass on it, causing a long unexplained fever, destroying the valve and throwing fragments to the brain and limbs.'
  },
  organs: ['heart', 'blood', 'teeth', 'immunity', 'brain'],
  aliases: [],
  keywords: { ar: ['حمى مجهولة السبب', 'التهاب الصمام', 'لغط قلبي جديد'], en: ['endocarditis', 'valve infection', 'fever of unknown origin'] }
});

/* ---------------- الأبهر والانسدادات الحادّة ---------------- */

DISEASES.push({
  id: 'aortic-aneurysm', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'تمدّد الأبهر (أمّ الدم)', en: 'Aortic aneurysm' },
  short: {
    ar: 'اتّساع دائم في أكبر شريان في الجسم يكبر ببطء وبلا أعراض، وخطره كلّه في أنه قد ينفجر فجأة إن تُرك بلا متابعة.',
    en: 'A permanent widening of the body’s largest artery that grows slowly and silently; its whole danger is that it may burst suddenly if left unwatched.'
  },
  organs: ['vessels', 'vessel-types', 'circulation', 'heart'],
  aliases: ['تمدّد الأوعية'],
  keywords: { ar: ['أم الدم', 'تمدد الشريان الأورطي', 'نبض في البطن'], en: ['aneurysm', 'AAA', 'aortic aneurysm'] }
});

DISEASES.push({
  id: 'aortic-dissection', group: 'heart', tier: 'rare', emergency: true,
  name: { ar: 'تسلّخ الأبهر', en: 'Aortic dissection' },
  short: {
    ar: 'تمزّق في البطانة الداخلية للأبهر يشقّ جداره طولاً، فيأتي ألم ممزّق مفاجئ ينتقل إلى الظهر — ويُخلط بالجلطة القلبية وعلاجه مختلف تماماً.',
    en: 'A tear in the inner lining of the aorta splits its wall lengthwise, giving a sudden tearing pain that moves through to the back — mistaken for a heart attack, though the treatment is entirely different.'
  },
  organs: ['vessels', 'vessel-types', 'heart', 'coronary', 'circulation'],
  aliases: [],
  keywords: { ar: ['ألم ممزق في الصدر', 'ألم ينتقل للظهر', 'تسلخ الأورطي'], en: ['aortic dissection', 'tearing chest pain', 'ripping pain'] }
});

DISEASES.push({
  id: 'arterial-embolism', group: 'heart', tier: 'rare', emergency: true,
  name: { ar: 'الانصمام الشرياني الحادّ (انسداد شريان الطرف)', en: 'Acute arterial embolism and limb ischaemia' },
  short: {
    ar: 'جلطة تسافر من القلب وتسدّ شرياناً في ذراع أو ساق فجأة، فيصير الطرف بارداً شاحباً بلا نبض — وساعاته معدودة.',
    en: 'A clot travels from the heart and suddenly blocks an artery in an arm or a leg; the limb turns cold, pale and pulseless — and its hours are numbered.'
  },
  organs: ['vessels', 'circulation', 'clotting', 'heart', 'foot'],
  aliases: [],
  keywords: { ar: ['انسداد شريان مفاجئ', 'ساق باردة بلا نبض', 'صمّة شريانية'], en: ['arterial embolism', 'acute limb ischaemia', 'cold pulseless limb'] }
});

/* ---------------- شرايين وأوردة الأطراف ---------------- */

DISEASES.push({
  id: 'pad', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'مرض الشرايين الطرفية (العرج المتقطّع)', en: 'Peripheral artery disease' },
  short: {
    ar: 'تضيّق شرايين الساقين بالتصلّب، فيأتي ألم في بطّة الساق بعد مسافة ثابتة من المشي ويزول بالوقوف دقائق.',
    en: 'The leg arteries narrow with atherosclerosis, so pain builds in the calf after a fixed walking distance and disappears after standing still for a few minutes.'
  },
  organs: ['vessels', 'vessel-types', 'circulation', 'foot', 'skin'],
  aliases: [],
  keywords: { ar: ['العرج المتقطع', 'ألم الساق مع المشي', 'ضعف نبض القدم'], en: ['peripheral artery disease', 'claudication', 'PAD'] }
});

DISEASES.push({
  id: 'cvi', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'القصور الوريدي المزمن وقرحة الساق', en: 'Chronic venous insufficiency and venous leg ulcer' },
  short: {
    ar: 'صمّامات أوردة الساق لم تعد تمنع رجوع الدم، فيركد ويرفع الضغط في الجلد حتى يسمرّ ويتصلّب ثم تتقرّح الساق فوق الكاحل.',
    en: 'The valves in the leg veins no longer stop blood falling back, so it pools and raises the pressure in the skin until it darkens, hardens and finally ulcerates above the ankle.'
  },
  organs: ['vessels', 'vessel-types', 'circulation', 'skin', 'foot'],
  aliases: [],
  keywords: { ar: ['قرحة الساق', 'تورم الساقين', 'تصبغ الكاحل', 'ركود وريدي'], en: ['venous insufficiency', 'venous ulcer', 'stasis dermatitis'] }
});

DISEASES.push({
  id: 'raynaud', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'ظاهرة رينو', en: 'Raynaud’s phenomenon' },
  short: {
    ar: 'نوبات تنقبض فيها شرايين الأصابع الدقيقة مع البرد أو التوتر، فتبيضّ الأصابع ثم تزرقّ ثم تحمرّ وتؤلم حين يعود الدم.',
    en: 'Attacks in which the small finger arteries clamp shut with cold or stress, so the fingers turn white, then blue, then red and painful as the blood returns.'
  },
  organs: ['vessel-types', 'vessels', 'hand', 'skin', 'autonomic'],
  aliases: [],
  keywords: { ar: ['ابيضاض الأصابع', 'برودة الأصابع', 'تغير لون اليد'], en: ['Raynaud', 'white fingers', 'vasospasm'] }
});

/* ---------------- الصمامات والقلب الخلقي ---------------- */

DISEASES.push({
  id: 'rheumatic-fever', group: 'autoimmune', tier: 'common', emergency: false,
  name: { ar: 'الحمّى الرثوية وأمراض الصمام الروماتيزمية', en: 'Rheumatic fever and rheumatic heart disease' },
  short: {
    ar: 'التهاب حلق بجرثومة عقدية لم يُعالَج، فتهاجم المناعة مفاصل الطفل وقلبه بعد أسابيع، وتترك ندبة دائمة على صمّام تظهر بعد سنوات.',
    en: 'An untreated streptococcal sore throat leads the immune system to attack a child’s joints and heart weeks later, leaving a permanent scar on a valve that shows itself years afterwards.'
  },
  organs: ['heart', 'pharynx', 'immunity', 'circulation'],
  aliases: [],
  keywords: { ar: ['الروماتيزم القلبي', 'التهاب الحلق البكتيري', 'تضيق الصمام الميترالي'], en: ['rheumatic fever', 'rheumatic heart disease', 'strep throat'] }
});

DISEASES.push({
  id: 'congenital-heart', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'عيوب القلب الخلقية', en: 'Congenital heart defects' },
  short: {
    ar: 'خلل في بناء القلب أو أوعيته يولد به الطفل: ثقب بين حجرتين، أو قناة جنينية لم تُغلق، أو صمّام ضيّق — منه ما يغلق وحده ومنه ما يحتاج إصلاحاً.',
    en: 'A fault in the building of the heart or its vessels present from birth: a hole between chambers, a fetal channel that never closed, or a narrowed valve — some close on their own, some need repair.'
  },
  organs: ['heart', 'fetal-circulation', 'circulation', 'lungs', 'embryo'],
  aliases: ['الثقبة البيضية السالكة', 'القناة الشريانية المفتوحة'],
  keywords: { ar: ['ثقب في القلب', 'أزرقاق المولود', 'لغط قلبي عند الطفل'], en: ['congenital heart disease', 'hole in the heart', 'ASD', 'VSD', 'PDA'] }
});

/* ---------------- الدم ---------------- */

DISEASES.push({
  id: 'thalassemia', group: 'blood', tier: 'common', emergency: false,
  name: { ar: 'الثلاسيميا (أنيميا البحر المتوسط)', en: 'Thalassaemia' },
  short: {
    ar: 'خلل وراثي في صناعة الهيموغلوبين يجعل الكريات صغيرة قصيرة العمر، فمن الناس حاملٌ لا يشكو شيئاً، ومنهم طفل يحتاج نقل دم منتظماً.',
    en: 'An inherited fault in making haemoglobin leaves the red cells small and short-lived; some people are carriers who feel nothing, while some children need regular transfusions.'
  },
  organs: ['blood', 'bone-inside', 'spleen', 'dna', 'liver'],
  aliases: [],
  keywords: { ar: ['أنيميا البحر الأبيض', 'حامل الثلاسيميا', 'فحص ما قبل الزواج'], en: ['thalassaemia', 'beta thalassemia', 'carrier screening'] }
});

DISEASES.push({
  id: 'b12-deficiency', group: 'blood', tier: 'common', emergency: false,
  name: { ar: 'نقص فيتامين ب١٢ وفقر الدم الضخم الأرومات', en: 'Vitamin B12 deficiency and megaloblastic anaemia' },
  short: {
    ar: 'نقص فيتامين لا يصنعه الجسم، فيكبر حجم كريات الدم ويقلّ عددها، ويبدأ تنميل ووخز في الأطراف قد يصير ضرراً عصبياً دائماً إن تأخّر.',
    en: 'A shortage of a vitamin the body cannot make, so the red cells grow large and few, and tingling starts in the hands and feet that can become permanent nerve damage if left too long.'
  },
  organs: ['blood', 'stomach', 'small-intestine', 'spinal-cord', 'peripheral-nerve'],
  aliases: [],
  keywords: { ar: ['نقص ب12', 'تنميل الأطراف', 'فقر الدم الخبيث', 'أنيميا كبيرة الخلايا'], en: ['B12 deficiency', 'pernicious anaemia', 'macrocytic anaemia'] }
});

DISEASES.push({
  id: 'hemolytic-anemia', group: 'blood', tier: 'common', emergency: false,
  name: { ar: 'فقر الدم الانحلالي ونقص خميرة ج٦ب د (الفوال)', en: 'Haemolytic anaemia and G6PD deficiency (favism)' },
  short: {
    ar: 'كريات الدم الحمراء تتكسّر قبل أوانها فيعجز النخاع عن تعويضها، فيأتي شحوب واصفرار وبول داكن — وقد تبدأ النوبة بعد فول أو دواء.',
    en: 'Red cells break down before their time faster than the marrow can replace them, giving pallor, yellowing and dark urine — and an attack may begin after eating broad beans or taking a medicine.'
  },
  organs: ['blood', 'spleen', 'liver', 'cell', 'dna'],
  aliases: [],
  keywords: { ar: ['الفوال', 'تكسر كريات الدم', 'بول داكن', 'اصفرار مفاجئ'], en: ['haemolysis', 'G6PD deficiency', 'favism', 'haemolytic anaemia'] }
});

DISEASES.push({
  id: 'itp', group: 'autoimmune', tier: 'rare', emergency: false,
  name: { ar: 'قلّة الصفيحات المناعية', en: 'Immune thrombocytopenia (ITP)' },
  short: {
    ar: 'المناعة تهاجم صفائح الدم وتتلفها، فيقلّ عددها ويظهر كدم بلا سبب ونقاط نزفية حمراء دقيقة تحت الجلد ونزف من اللثة والأنف.',
    en: 'The immune system attacks and destroys the platelets, so their number falls and unexplained bruises, tiny red bleeding spots under the skin and bleeding from the gums and nose appear.'
  },
  organs: ['clotting', 'blood', 'immunity', 'spleen', 'skin'],
  aliases: ['نقص الصفائح الدموية'],
  keywords: { ar: ['نقص الصفائح', 'كدمات بلا سبب', 'نقاط حمراء تحت الجلد'], en: ['ITP', 'thrombocytopenia', 'low platelets', 'petechiae'] }
});

DISEASES.push({
  id: 'lymphadenopathy', group: 'blood', tier: 'common', emergency: false,
  name: { ar: 'تضخّم العقد اللمفاوية', en: 'Swollen lymph nodes (lymphadenopathy)' },
  short: {
    ar: 'حبّة أو أكثر تُحسّ تحت الجلد في الرقبة أو الإبط أو الأربية، وأغلبها ردّ فعل عابر على عدوى — والقليل منها يستحقّ فحصاً لا يؤجَّل.',
    en: 'One or more lumps felt under the skin in the neck, armpit or groin; most are a passing reaction to infection, and a few deserve an examination that should not be postponed.'
  },
  organs: ['lymph-node', 'lymphatic', 'immunity', 'blood', 'spleen'],
  aliases: ['تضخم العقد اللمفية', 'التهاب العقد اللمفاوية'],
  keywords: { ar: ['حبة في الرقبة', 'تورم الغدد', 'غدة تحت الإبط'], en: ['lymphadenopathy', 'swollen glands', 'neck lump'] }
});

DISEASES.push({
  id: 'splenomegaly', group: 'blood', tier: 'common', emergency: false,
  name: { ar: 'تضخّم الطحال', en: 'Enlarged spleen (splenomegaly)' },
  short: {
    ar: 'الطحال يكبر فيُحسّ امتلاءً تحت الضلوع اليسرى وشبعاً سريعاً، وهو غالباً عَرَض لمرض آخر لا مرض بذاته — وخطره الأكبر أنه يتمزّق بضربة.',
    en: 'The spleen grows until it is felt as fullness under the left ribs with early satiety; it is usually a sign of another disease rather than a disease in itself — and its main danger is rupture from a blow.'
  },
  organs: ['spleen', 'blood', 'liver', 'lymphatic', 'immunity'],
  aliases: ['تضخّم الطحال', 'فرط نشاط الطحال'],
  keywords: { ar: ['كبر الطحال', 'ألم تحت الضلوع اليسرى', 'شبع سريع'], en: ['splenomegaly', 'enlarged spleen', 'hypersplenism'] }
});

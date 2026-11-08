/* ============================================================
   موسوعة الأمراض — فهرس العظام والمفاصل والعضلات
   dx/index-ortho.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-ortho.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- العظم نفسه ---------------- */

DISEASES.push({
  id: 'osteoporosis', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'هشاشة العظام', en: 'Osteoporosis' },
  short: {
    ar: 'العظم يفقد كثافته بصمت مع السنين حتى يصير هشّاً، فينكسر من سقطة خفيفة أو من التواء بسيط، وأحياناً تنضغط فقرة في الظهر بلا أي سقوط.',
    en: 'Bone quietly loses its density over the years until it becomes fragile, so it breaks from a light fall or a simple twist, and sometimes a vertebra collapses in the back with no fall at all.'
  },
  organs: ['bone-inside', 'skeleton', 'spine', 'hip', 'vertebra-disc', 'pelvis'],
  aliases: ['هشاشة العظام', 'هشاشة العظام وكسر الفقرة'],
  keywords: { ar: ['ترقّق العظام', 'نقص كثافة العظام', 'كسر الفقرة الانضغاطي', 'قياس كثافة العظام'], en: ['osteoporosis', 'bone density', 'fragility fracture', 'DEXA scan'] }
});

DISEASES.push({
  id: 'osteomalacia-rickets', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'لين العظام والكساح', en: 'Osteomalacia and rickets' },
  short: {
    ar: 'نقص فيتامين د أو الكالسيوم يمنع العظم الجديد من التكلّس، فيبقى ليّناً: عند الكبار ألم عظمي منتشر وضعف عضلي، وعند الأطفال تقوّس في الساقين وتأخّر في النموّ.',
    en: 'A lack of vitamin D or calcium stops new bone from mineralising, so it stays soft: in adults widespread bone pain and muscle weakness, in children bowed legs and delayed growth.'
  },
  organs: ['bone-inside', 'growth-plate', 'skeleton', 'infant-skull', 'parathyroid', 'kidneys'],
  aliases: ['لين العظام ونقص فيتامين د', 'الكساح (لين العظام عند الأطفال)', 'الكساح ولين العظام'],
  keywords: { ar: ['نقص فيتامين د', 'تقوّس الساقين', 'ألم عظمي منتشر', 'الكساح'], en: ['osteomalacia', 'rickets', 'vitamin D deficiency', 'bowed legs'] }
});

DISEASES.push({
  id: 'fractures', group: 'bones', tier: 'common', emergency: true,
  name: { ar: 'الكسور', en: 'Bone fractures' },
  short: {
    ar: 'انقطاع في العظم من قوّة تفوق ما يحتمله: من سقوط أو حادث أو ضربة، أو من سقطة تافهة إن كان العظم هشّاً أصلاً. أكثرها يلتئم إن ثُبّت في وضعه الصحيح.',
    en: 'A break in the bone from a force greater than it can take: a fall, an accident or a blow, or a trivial fall if the bone was already fragile. Most heal if held in the right position.'
  },
  organs: ['bone-inside', 'skeleton', 'wound-healing', 'hip', 'ankle', 'rib-cage'],
  aliases: ['الكسور', 'كسر عنق الفخذ', 'كسر الكاحل', 'كسر الزج', 'كسر عظم الزورق', 'كسور الرسغ وتشوّه القوس', 'كسر الأضلاع', 'كسر الحوض'],
  keywords: { ar: ['كسر', 'جبس', 'تثبيت الكسر', 'كسر مفتوح'], en: ['fracture', 'broken bone', 'cast', 'open fracture'] }
});

DISEASES.push({
  id: 'growth-plate-fracture', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'كسر صفيحة النمو عند الأطفال', en: 'Growth plate fracture in children' },
  short: {
    ar: 'كسر يمرّ في الشريحة الغضروفية التي يطول منها عظم الطفل. قد لا يظهر في الأشعة أصلاً، وإن أُهمل قد يتوقّف نموّ ذلك العظم أو يميل.',
    en: 'A break running through the cartilage plate from which a child bone lengthens. It may not show on X-ray at all, and if neglected the bone may stop growing or grow crooked.'
  },
  organs: ['growth-plate', 'bone-inside', 'skeleton'],
  aliases: ['كسر صفيحة النمو (سالتر-هاريس)'],
  keywords: { ar: ['سالتر-هاريس', 'صفيحة النمو', 'كسر عند الأطفال', 'قصر الطرف'], en: ['Salter-Harris', 'growth plate', 'physeal fracture', 'limb shortening'] }
});

DISEASES.push({
  id: 'scfe', group: 'bones', tier: 'rare', emergency: false,
  name: { ar: 'انزلاق مشاش رأس الفخذ', en: 'Slipped capital femoral epiphysis' },
  short: {
    ar: 'عند المراهقين تنزلق كرة رأس الفخذ عن رقبتها عند صفيحة النمو، فيعرج المراهق ويشكو ألماً في الورك أو في الركبة، وقد يُنسب الألم للركبة فيتأخّر التشخيص.',
    en: 'In teenagers the ball of the femoral head slips off its neck at the growth plate, so the teenager limps and complains of hip or knee pain; the pain is often blamed on the knee, delaying diagnosis.'
  },
  organs: ['growth-plate', 'hip', 'pelvis'],
  aliases: ['انزلاق مشاش رأس الفخذ'],
  keywords: { ar: ['عرج المراهق', 'ألم الورك عند المراهقين', 'ألم ركبة بلا سبب'], en: ['SCFE', 'slipped upper femoral epiphysis', 'limping teenager'] }
});

/* ---------------- المفاصل ---------------- */

DISEASES.push({
  id: 'osteoarthritis', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'الفصال العظمي (خشونة المفاصل)', en: 'Osteoarthritis' },
  short: {
    ar: 'الغضروف الذي يكسو طرفي العظم داخل المفصل يترقّق مع السنين والحمل، فيقلّ ما يمتصّ الصدمات: ألم يزيد بالحركة، وتيبّس قصير بعد الجلوس، وطقطقة.',
    en: 'The cartilage that caps the bone ends inside the joint thins with years and load, so less shock is absorbed: pain that grows with use, brief stiffness after sitting, and grinding.'
  },
  organs: ['knee', 'hip', 'hand', 'spine', 'vertebra-disc', 'shoulder', 'ankle', 'tmj'],
  aliases: ['الفصال العظمي', 'خشونة الركبة', 'خشونة الورك', 'خشونة المفصل', 'خشونة مفاصل اليد', 'خشونة الكاحل بعد الإصابة', 'خشونة مفصل الكتف', 'خشونة المفاصل الوجيهية'],
  keywords: { ar: ['خشونة الركبة', 'تآكل الغضروف', 'تيبّس الصباح القصير', 'تبديل مفصل'], en: ['osteoarthritis', 'degenerative joint disease', 'knee OA', 'joint replacement'] }
});

DISEASES.push({
  id: 'rheumatoid-arthritis', group: 'autoimmune', tier: 'common', emergency: false,
  name: { ar: 'التهاب المفاصل الروماتويدي', en: 'Rheumatoid arthritis' },
  short: {
    ar: 'المناعة تهاجم البطانة الزليلية للمفاصل الصغيرة في اليدين والقدمين على الجانبين معاً، فتتورّم وتؤلم وتتيبّس صباحاً ساعة أو أكثر، وقد تتشوّه إن تُرك المرض.',
    en: 'The immune system attacks the lining of the small joints of the hands and feet on both sides at once, so they swell, hurt and stiffen for an hour or more each morning, and may deform if left untreated.'
  },
  organs: ['hand', 'immunity', 'tendon-ligament', 'knee', 'elbow', 'blood'],
  aliases: [],
  keywords: { ar: ['الروماتويد', 'التهاب المفاصل المناعي', 'تيبّس الصباح', 'تشوّه الأصابع'], en: ['rheumatoid arthritis', 'RA', 'inflammatory arthritis', 'morning stiffness'] }
});

DISEASES.push({
  id: 'gout', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'النقرس', en: 'Gout' },
  short: {
    ar: 'بلّورات حمض البول تترسّب في مفصل فتشعله فجأة: غالباً إبهام القدم يصحو صاحبه ليلاً على ألم لا يحتمل ملامسة الغطاء، مع احمرار وحرارة وتورّم.',
    en: 'Uric acid crystals settle in a joint and set it alight suddenly: most often the big toe, waking its owner at night with pain that cannot bear the touch of a sheet, with redness, heat and swelling.'
  },
  organs: ['foot', 'ankle', 'knee', 'kidneys', 'blood', 'hand'],
  aliases: [],
  keywords: { ar: ['حمض البول', 'داء الملوك', 'التهاب إبهام القدم', 'التوفة'], en: ['gout', 'uric acid', 'podagra', 'tophus'] }
});

DISEASES.push({
  id: 'bursitis', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'التهاب الجراب', en: 'Bursitis' },
  short: {
    ar: 'الجراب كيس صغير مملوء بسائل يفصل الوتر عن العظم ليمنع الاحتكاك. حين يلتهب من ضغط أو تكرار حركة أو ضربة، ينتفخ ويؤلم عند الضغط عليه وعند رفع الطرف.',
    en: 'A bursa is a small fluid-filled sac that separates tendon from bone to prevent rubbing. When it inflames from pressure, repeated movement or a blow, it swells and hurts on pressure and on lifting the limb.'
  },
  organs: ['shoulder', 'elbow', 'hip', 'knee', 'tendon-ligament'],
  aliases: ['التهاب الجراب الزجي', 'انحشار الكتف والتهاب الجراب'],
  keywords: { ar: ['كيس الجراب', 'انتفاخ المرفق', 'ركبة الخادمة', 'ألم جانب الورك'], en: ['bursitis', 'olecranon bursitis', 'housemaid knee', 'trochanteric pain'] }
});

DISEASES.push({
  id: 'frozen-shoulder', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'الكتف المتجمّدة', en: 'Frozen shoulder (adhesive capsulitis)' },
  short: {
    ar: 'محفظة مفصل الكتف تلتهب ثم تنكمش وتلتصق، فيفقد الكتف مداه شيئاً فشيئاً: لا تستطيع رفع الذراع ولا مدّ يدك خلف ظهرك، حتى لو حرّكها غيرك.',
    en: 'The capsule of the shoulder joint inflames, then shrinks and sticks, so the shoulder loses its range step by step: you cannot lift the arm or reach behind your back, even if someone else moves it for you.'
  },
  organs: ['shoulder', 'tendon-ligament'],
  aliases: ['الكتف المتجمّد'],
  keywords: { ar: ['تجمّد الكتف', 'التهاب المحفظة اللاصق', 'تحدّد حركة الكتف'], en: ['frozen shoulder', 'adhesive capsulitis', 'restricted shoulder'] }
});

/* ---------------- العمود الفقري ---------------- */

DISEASES.push({
  id: 'herniated-disc', group: 'bones', tier: 'common', emergency: true,
  name: { ar: 'الانزلاق الغضروفي (الديسك)', en: 'Herniated disc (slipped disc)' },
  short: {
    ar: 'الوسادة الغضروفية بين فقرتين يتشقّق غلافها فيبرز لبّها اللزج ويضغط جذر العصب، فينزل ألم كهربائي في الساق أو الذراع مع خدر وضعف.',
    en: 'The cartilage cushion between two vertebrae splits at its rim and its soft core bulges out onto a nerve root, sending an electric pain down the leg or arm with numbness and weakness.'
  },
  organs: ['vertebra-disc', 'spine', 'spinal-cord', 'peripheral-nerve'],
  aliases: ['الانزلاق الغضروفي', 'انزلاق الغضروف', 'انزلاق غضروفي يضغط الجذر'],
  keywords: { ar: ['الديسك', 'عرق النسا', 'ضغط على العصب', 'ذيل الفرس'], en: ['herniated disc', 'sciatica', 'nerve root compression', 'cauda equina'] }
});

DISEASES.push({
  id: 'low-back-pain', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'آلام أسفل الظهر', en: 'Low back pain' },
  short: {
    ar: 'أشيع ألم يعرفه الناس، وأغلبه لا يعود لمرض في العظم بل لعضلة أُجهدت أو مفصل صغير تهيّج، ويزول خلال أسابيع بالحركة لا بالفراش.',
    en: 'The commonest pain people know, and most of it comes not from disease in the bone but from a strained muscle or an irritated small joint; it settles within weeks with movement, not with bed rest.'
  },
  organs: ['spine', 'vertebra-disc', 'muscles', 'pelvis', 'peripheral-nerve'],
  aliases: [],
  keywords: { ar: ['ألم الظهر', 'شدّ في الظهر', 'ألم الفقرات القطنية', 'تمارين الظهر'], en: ['low back pain', 'lumbago', 'back strain', 'core exercises'] }
});

DISEASES.push({
  id: 'scoliosis', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'الجنف', en: 'Scoliosis' },
  short: {
    ar: 'انحناء جانبي في العمود الفقري مع التفاف في الفقرات، فيبدو كتف أعلى من الآخر أو خصر غير متساوٍ. أكثره يظهر في طفرة نمو المراهقة بلا ألم وبلا سبب معروف.',
    en: 'A sideways curve of the spine with a twist in the vertebrae, so one shoulder looks higher or the waist uneven. Most appears in the adolescent growth spurt, painless and with no known cause.'
  },
  organs: ['spine', 'skeleton', 'rib-cage', 'pelvis'],
  aliases: ['الجنف'],
  keywords: { ar: ['اعوجاج العمود الفقري', 'ميلان الكتف', 'مشدّ الجنف', 'انحناء جانبي'], en: ['scoliosis', 'spinal curve', 'brace', 'Adams forward bend'] }
});

/* ---------------- الأوتار والأربطة ---------------- */

DISEASES.push({
  id: 'tendinitis', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'التهاب الأوتار', en: 'Tendinitis (tendinopathy)' },
  short: {
    ar: 'الوتر الذي يشدّ العظم يتهيّج ويتخشّن من تكرار الحركة أو زيادة مفاجئة في الحمل، فيؤلم عند بدء الحركة وعند لمس موضعه بالذات.',
    en: 'The tendon that pulls on bone becomes irritated and roughened by repeated movement or a sudden increase in load, hurting as movement begins and on pressing its exact spot.'
  },
  organs: ['tendon-ligament', 'shoulder', 'elbow', 'ankle', 'knee', 'carpal-tunnel'],
  aliases: ['التهاب الأوتار', 'التهاب الوتر', 'التهاب وتر أخيل', 'التهاب أغماد الأوتار'],
  keywords: { ar: ['مرفق لاعب التنس', 'وتر أخيل', 'التهاب الوتر الرضفي', 'اعتلال الوتر'], en: ['tendinitis', 'tennis elbow', 'Achilles tendinopathy', 'tenosynovitis'] }
});

DISEASES.push({
  id: 'plantar-fasciitis', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'التهاب اللفافة الأخمصية', en: 'Plantar fasciitis' },
  short: {
    ar: 'الشريط الليفي الذي يشدّ قوس القدم من الكعب إلى الأصابع يتهيّج عند منشئه، فتكون أول خطوات الصباح ألماً حادّاً تحت الكعب يخفّ بعد المشي قليلاً.',
    en: 'The fibrous band that holds the arch of the foot from heel to toes becomes irritated at its origin, so the first steps of the morning are a sharp pain under the heel that eases after walking a little.'
  },
  organs: ['foot', 'tendon-ligament', 'ankle'],
  aliases: ['التهاب اللفافة الأخمصية'],
  keywords: { ar: ['ألم الكعب', 'مسمار العقب', 'شوكة الكعب', 'أول خطوة في الصباح'], en: ['plantar fasciitis', 'heel pain', 'heel spur', 'first-step pain'] }
});

DISEASES.push({
  id: 'acl-tear', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'تمزّق الرباط الصليبي الأمامي', en: 'Anterior cruciate ligament (ACL) tear' },
  short: {
    ar: 'الرباط الذي يمنع الساق من الانزلاق أماماً داخل الركبة ينقطع في لفتة مفاجئة أو هبوط خاطئ، فيُسمع طقّ وتنتفخ الركبة خلال ساعات ويصير المفصل يخون صاحبه.',
    en: 'The ligament that stops the shin sliding forward inside the knee snaps on a sudden turn or a bad landing; a pop is heard, the knee swells within hours, and the joint starts giving way.'
  },
  organs: ['knee', 'tendon-ligament'],
  aliases: ['تمزق الرباط الصليبي الأمامي'],
  keywords: { ar: ['الرباط الصليبي', 'انتفاخ الركبة بعد الإصابة', 'خيانة الركبة', 'إصابة ملاعب'], en: ['ACL tear', 'cruciate ligament', 'knee giving way', 'sports injury'] }
});

DISEASES.push({
  id: 'meniscus-tear', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'تمزّق الغضروف الهلالي', en: 'Meniscus tear' },
  short: {
    ar: 'الهلال الغضروفي الذي يوزّع الحمل داخل الركبة يتمزّق من لفتة والقدم ثابتة، أو يتشقّق وحده مع تقدّم العمر، فيؤلم خطّ المفصل وقد تعلق الركبة فلا تنفرد.',
    en: 'The crescent of cartilage that spreads load inside the knee tears on a twist with the foot planted, or splits on its own with age, causing pain along the joint line and sometimes a knee that locks and will not straighten.'
  },
  organs: ['knee', 'tendon-ligament'],
  aliases: ['تمزق الغضروف الهلالي'],
  keywords: { ar: ['الغضروف الهلالي', 'قفل الركبة', 'ألم خطّ المفصل', 'منظار الركبة'], en: ['meniscus tear', 'locked knee', 'joint line pain', 'knee arthroscopy'] }
});

/* ---------------- العضلات ---------------- */

DISEASES.push({
  id: 'muscle-strain', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'الشدّ والتمزّق العضلي', en: 'Muscle strain and tear' },
  short: {
    ar: 'ألياف العضلة تنقطع جزئياً من شدّ مفاجئ أو حمل يفوق طاقتها، فيأتي ألم حادّ لحظة الحركة ثم تورّم وأحياناً كدمة زرقاء تنزل بالجاذبية.',
    en: 'Muscle fibres tear partly from a sudden pull or a load beyond their capacity, giving a sharp pain at the moment of movement, then swelling and sometimes a bruise that tracks downward with gravity.'
  },
  organs: ['muscles', 'muscle-fiber', 'tendon-ligament', 'muscle-types'],
  aliases: ['الشدّ العضلي', 'تمزق العضلة'],
  keywords: { ar: ['شدّ عضلي', 'تمزّق ألياف', 'إصابة الفخذ الخلفية', 'كمّادة باردة'], en: ['muscle strain', 'pulled muscle', 'hamstring injury', 'RICE'] }
});

DISEASES.push({
  id: 'muscular-dystrophy', group: 'bones', tier: 'rare', emergency: false,
  name: { ar: 'الحثل العضلي', en: 'Muscular dystrophy' },
  short: {
    ar: 'خلل وراثي في بروتين يثبّت غشاء ليف العضلة، فتتلف الألياف تدريجياً وتُستبدل بدهن ونسيج ليفي، ويضعف الطفل شيئاً فشيئاً بلا ألم.',
    en: 'An inherited fault in a protein that anchors the muscle fibre membrane, so fibres are damaged step by step and replaced by fat and fibrous tissue, and the child weakens gradually and painlessly.'
  },
  organs: ['muscle-fiber', 'muscles', 'dna', 'muscle-types'],
  aliases: ['الحثل العضلي'],
  keywords: { ar: ['ضمور عضلي وراثي', 'دوشين', 'صعوبة النهوض من الأرض', 'تضخّم كاذب في السمانة'], en: ['muscular dystrophy', 'Duchenne', 'Gowers sign', 'calf pseudohypertrophy'] }
});

DISEASES.push({
  id: 'rsi', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'متلازمة الإجهاد الرضّي المتكرّر', en: 'Repetitive strain injury (overuse syndrome)' },
  short: {
    ar: 'نسيج سليم يُحمَّل نفس الحركة آلاف المرّات بلا وقت كافٍ ليصلح نفسه، فيتراكم أذى صغير: ألم وثقل وتنميل في اليد أو الساعد أو القدم يبدأ مع العمل ثم يبقى بعده.',
    en: 'Healthy tissue is loaded with the same movement thousands of times without enough time to repair itself, so small damage accumulates: pain, heaviness and tingling in the hand, forearm or foot that starts with the work and then outlasts it.'
  },
  organs: ['tendon-ligament', 'hand', 'carpal-tunnel', 'elbow', 'foot', 'muscles'],
  aliases: [],
  keywords: { ar: ['إجهاد متكرّر', 'ألم لوحة المفاتيح', 'كسر إجهادي', 'هيئة الجلوس'], en: ['repetitive strain injury', 'RSI', 'overuse injury', 'stress fracture'] }
});

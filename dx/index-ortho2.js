/* ============================================================
   موسوعة الأمراض — فهرس العظام والمفاصل والعضلات (الموجة الثانية)
   dx/index-ortho2.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-ortho2.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- ما لا ينتظر ---------------- */

DISEASES.push({
  id: 'compartment-syndrome', group: 'bones', tier: 'rare', emergency: true,
  name: { ar: 'متلازمة الحيّز (ضغط الحجرة العضلية)', en: 'Compartment syndrome' },
  short: {
    ar: 'تورّم داخل حجرة عضلية مغلفة بغشاء لا يتمدّد، فيرتفع الضغط حتى يخنق الدم عن العضلة والعصب. ألم يفوق ما يبرّره الكسر، ومهلة تُقاس بالساعات.',
    en: 'Swelling inside a muscle compartment wrapped in a sheath that cannot stretch, so pressure rises until it strangles the blood supply to muscle and nerve. Pain far beyond what the injury explains, and a window measured in hours.'
  },
  organs: ['muscles', 'muscle-fiber', 'vessel-types', 'peripheral-nerve', 'tendon-ligament'],
  aliases: [],
  keywords: { ar: ['ضغط الحجرة العضلية', 'ألم لا يبرّره الكسر', 'شقّ اللفافة', 'ألم عند مدّ الأصابع'], en: ['compartment syndrome', 'fasciotomy', 'pain out of proportion', 'passive stretch pain'] }
});

DISEASES.push({
  id: 'septic-arthritis', group: 'bones', tier: 'rare', emergency: true,
  name: { ar: 'التهاب المفصل الإنتاني (الصديدي)', en: 'Septic arthritis' },
  short: {
    ar: 'جرثومة تدخل تجويف مفصل واحد فتملأه بالصديد خلال ساعات. المفصل يسخن ويتورّم ولا يُحتمل تحريكه، والغضروف يبدأ بالذوبان خلال أيام.',
    en: 'A germ enters the cavity of a single joint and fills it with pus within hours. The joint becomes hot and swollen, any movement is unbearable, and cartilage begins to dissolve within days.'
  },
  organs: ['knee', 'hip', 'shoulder', 'immunity', 'blood', 'skeleton'],
  aliases: [],
  keywords: { ar: ['التهاب المفصل الجرثومي', 'صديد في المفصل', 'مفصل حارّ متورّم', 'بزل المفصل'], en: ['septic arthritis', 'joint infection', 'pyogenic arthritis', 'joint aspiration'] }
});

DISEASES.push({
  id: 'osteomyelitis', group: 'bones', tier: 'rare', emergency: true,
  name: { ar: 'التهاب العظم والنقي', en: 'Osteomyelitis (bone infection)' },
  short: {
    ar: 'عدوى تستقرّ داخل العظم نفسه، تصل بالدم أو من جرح أو من قرحة قدم سكّرية. تُهمَل فتتحوّل إلى التهاب مزمن يصعب استئصاله.',
    en: 'An infection that settles inside the bone itself, arriving through the blood, through a wound, or from a diabetic foot ulcer. Neglected, it turns into a chronic infection that is hard to eradicate.'
  },
  organs: ['bone-inside', 'skeleton', 'blood', 'immunity', 'foot'],
  aliases: ['التهاب العظم والنقي'],
  keywords: { ar: ['عدوى العظم', 'التهاب النقي العظمي', 'قرحة القدم السكرية', 'ناسور عظمي'], en: ['osteomyelitis', 'bone infection', 'diabetic foot', 'sequestrum'] }
});

/* ---------------- التهاب المفاصل الالتهابي ---------------- */

DISEASES.push({
  id: 'ankylosing-spondylitis', group: 'autoimmune', tier: 'common', emergency: false,
  name: { ar: 'التهاب الفقار اللاصق', en: 'Ankylosing spondylitis (axial spondyloarthritis)' },
  short: {
    ar: 'التهاب مزمن يبدأ في مفصلَي أسفل الظهر مع الحوض عند الشباب: ألم ظهر يوقظ آخر الليل، وتيبّس صباحي طويل يخفّ بالحركة لا بالراحة.',
    en: 'A chronic inflammation starting in the joints between the lower spine and the pelvis in young adults: back pain that wakes you in the second half of the night, and long morning stiffness that eases with movement, not with rest.'
  },
  organs: ['spine', 'pelvis', 'vertebra-disc', 'skeleton', 'eye'],
  aliases: ['التهاب المفصل العجزي الحرقفي'],
  keywords: { ar: ['ألم الظهر الالتهابي', 'التيبّس الصباحي', 'التهاب الفقار المحوري', 'التهاب العنبية'], en: ['ankylosing spondylitis', 'axial spondyloarthritis', 'inflammatory back pain', 'sacroiliitis'] }
});

DISEASES.push({
  id: 'psoriatic-arthritis', group: 'autoimmune', tier: 'common', emergency: false,
  name: { ar: 'التهاب المفاصل الصدفي', en: 'Psoriatic arthritis' },
  short: {
    ar: 'التهاب مفاصل يرافق الصدفية الجلدية أو يسبقها: أصابع تتورّم بكاملها كالسجق، وتغيّر في الأظافر، وألم في مواضع اتصال الأوتار بالعظم.',
    en: 'Joint inflammation that accompanies skin psoriasis or precedes it: whole fingers swelling like sausages, nail changes, and pain where tendons attach to bone.'
  },
  organs: ['hand', 'nail', 'skin', 'skeleton', 'tendon-ligament', 'spine'],
  aliases: [],
  keywords: { ar: ['الصدفية المفصلية', 'الإصبع السجقي', 'تنقّر الأظافر', 'التهاب المرتكز'], en: ['psoriatic arthritis', 'dactylitis', 'nail pitting', 'enthesitis'] }
});

DISEASES.push({
  id: 'pseudogout', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'النقرس الكاذب (ترسّب بلّورات الكالسيوم)', en: 'Pseudogout (calcium pyrophosphate deposition)' },
  short: {
    ar: 'نوبة مفصل حادّة تشبه النقرس تماماً لكنّ بلّوراتها مختلفة، وتصيب الركبة والرسغ أكثر من إبهام القدم، وتكثر بعد الستّين وبعد العمليات والأمراض الحادّة.',
    en: 'An acute joint attack that looks exactly like gout but whose crystals are different, striking the knee and wrist more than the big toe, and common after sixty and after surgery or acute illness.'
  },
  organs: ['knee', 'hand', 'elbow', 'skeleton'],
  aliases: [],
  keywords: { ar: ['بلّورات البيروفوسفات', 'تكلّس الغضروف', 'نوبة ركبة حادّة', 'النقرس الكاذب'], en: ['pseudogout', 'CPPD', 'chondrocalcinosis', 'calcium pyrophosphate'] }
});

DISEASES.push({
  id: 'polymyalgia-rheumatica', group: 'autoimmune', tier: 'common', emergency: false,
  name: { ar: 'الألم العضلي الروماتيزمي', en: 'Polymyalgia rheumatica' },
  short: {
    ar: 'ألم وتيبّس شديدان في الكتفين والوركين يظهران فجأة بعد الخمسين، فيعجز صاحبهما صباحاً عن رفع ذراعيه أو النهوض من الكرسي. وقد يرافقه التهاب شريان يهدّد البصر.',
    en: 'Severe pain and stiffness in the shoulders and hips appearing suddenly after fifty, so that in the morning the sufferer cannot raise the arms or rise from a chair. It may be accompanied by an arteritis that threatens sight.'
  },
  organs: ['shoulder', 'hip', 'muscles', 'vessels', 'eye'],
  aliases: [],
  keywords: { ar: ['ألم الكتفين والوركين', 'التهاب الشريان الصدغي', 'تيبّس صباحي شديد', 'الخلايا العملاقة'], en: ['polymyalgia rheumatica', 'giant cell arteritis', 'temporal arteritis', 'shoulder girdle pain'] }
});

DISEASES.push({
  id: 'sjogren', group: 'autoimmune', tier: 'common', emergency: false,
  name: { ar: 'متلازمة شوغرن', en: 'Sjogren syndrome' },
  short: {
    ar: 'المناعة تهاجم الغدد التي تصنع الدمع واللعاب فتجفّ العين والفم، ويصحب ذلك ألم مفاصل وإرهاق عميق. وأول من يلاحظها كثيراً هو طبيب الأسنان.',
    en: 'The immune system attacks the glands that make tears and saliva, so eyes and mouth dry out, with joint pain and deep fatigue. Often the first to notice it is the dentist.'
  },
  organs: ['salivary-glands', 'eye', 'immunity', 'teeth', 'skeleton'],
  aliases: ['متلازمة شوغرن'],
  keywords: { ar: ['جفاف الفم والعين', 'التهاب الغدد اللعابية', 'مرض مناعي ذاتي', 'تسوّس متسارع'], en: ['Sjogren syndrome', 'dry eyes and mouth', 'sicca', 'autoimmune'] }
});

DISEASES.push({
  id: 'myositis', group: 'autoimmune', tier: 'rare', emergency: false,
  name: { ar: 'التهاب العضلات المناعي', en: 'Inflammatory myositis' },
  short: {
    ar: 'المناعة تهاجم ألياف العضلة نفسها فتضعف من جذور الأطراف: صعود الدرج ورفع الذراع فوق الرأس يصيران ثقيلين، والضعف أوضح من الألم.',
    en: 'The immune system attacks the muscle fibres themselves, weakening the limbs from their roots: climbing stairs and lifting the arm overhead become heavy, and weakness is more prominent than pain.'
  },
  organs: ['muscles', 'muscle-fiber', 'muscle-types', 'immunity', 'skin'],
  aliases: [],
  keywords: { ar: ['التهاب العضلات', 'التهاب الجلد والعضلات', 'ضعف عضلي قريب', 'ارتفاع إنزيم العضلة'], en: ['polymyositis', 'dermatomyositis', 'proximal weakness', 'raised CK'] }
});

DISEASES.push({
  id: 'fibromyalgia', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'الألم العضلي الليفي', en: 'Fibromyalgia' },
  short: {
    ar: 'ألم منتشر في الجسم كلّه مع إرهاق ونوم غير مريح وضباب ذهني، والفحوص كلها سليمة. ليس ضرراً في العضلات بل خللاً في طريقة معالجة الجهاز العصبي للألم.',
    en: 'Widespread pain all over the body with fatigue, unrefreshing sleep and mental fog, while every test comes back normal. Not damage in the muscles but a fault in how the nervous system processes pain.'
  },
  organs: ['muscles', 'peripheral-nerve', 'brain', 'spinal-cord'],
  aliases: ['الألم العضلي الليفي'],
  keywords: { ar: ['ألم منتشر مزمن', 'ضباب ذهني', 'نوم غير مريح', 'فرط الحساسية للألم'], en: ['fibromyalgia', 'widespread pain', 'central sensitisation', 'fibro fog'] }
});

/* ---------------- الكتف والمرفق واليد ---------------- */

DISEASES.push({
  id: 'rotator-cuff-tear', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'تمزّق الكفّة المديرة', en: 'Rotator cuff tear' },
  short: {
    ar: 'تمزّق في أحد الأوتار الأربعة التي تمسك رأس العضد في تجويفه وتديره. ضعف في رفع الذراع جانباً وألم ليلي يمنع النوم على الكتف.',
    en: 'A tear in one of the four tendons that hold the head of the arm bone in its socket and turn it. Weakness lifting the arm sideways and night pain that prevents sleeping on that shoulder.'
  },
  organs: ['shoulder', 'tendon-ligament', 'muscles'],
  aliases: ['تمزّق الكفّة المديرة'],
  keywords: { ar: ['تمزق أوتار الكتف', 'ضعف رفع الذراع', 'ألم الكتف الليلي', 'الكفّة المدوّرة'], en: ['rotator cuff tear', 'supraspinatus', 'shoulder weakness', 'night shoulder pain'] }
});

DISEASES.push({
  id: 'calcific-tendinitis', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'تكلّس أوتار الكتف', en: 'Calcific tendinitis of the shoulder' },
  short: {
    ar: 'ترسّب كتلة كلسية داخل وتر الكتف. تبقى صامتة سنوات ثم تبدأ بالذوبان فتشتعل فجأة بألم من أشدّ ما يُصيب الكتف، ثم تزول من تلقاء نفسها.',
    en: 'A chalky deposit forms inside a shoulder tendon. It stays silent for years, then begins to dissolve and flares suddenly with some of the worst pain the shoulder can produce, before settling on its own.'
  },
  organs: ['shoulder', 'tendon-ligament', 'bone-inside'],
  aliases: [],
  keywords: { ar: ['تكلّس الكتف', 'ترسّب الكالسيوم في الوتر', 'ألم كتف مفاجئ شديد', 'تفتيت التكلّس'], en: ['calcific tendinitis', 'shoulder calcification', 'hydroxyapatite deposit', 'barbotage'] }
});

DISEASES.push({
  id: 'epicondylitis', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'مرفق التنس ومرفق الغولف', en: 'Tennis elbow and golfer elbow' },
  short: {
    ar: 'ألم في نتوء عظم المرفق حيث ترتكز أوتار الساعد. من الخارج مع مدّ الرسغ والقبض، ومن الداخل مع ثنيه. وأكثر المصابين لم يلعبوا تنساً في حياتهم.',
    en: 'Pain at the bony prominence of the elbow where the forearm tendons anchor: on the outside with wrist extension and gripping, on the inside with wrist flexion. Most sufferers have never played tennis.'
  },
  organs: ['elbow', 'tendon-ligament', 'muscles', 'hand'],
  aliases: ['مرفق لاعب التنس', 'مرفق لاعب الغولف'],
  keywords: { ar: ['التهاب لقيمة المرفق', 'ألم المرفق عند القبض', 'مرفق التنس', 'اعتلال وتر المرفق'], en: ['tennis elbow', 'lateral epicondylitis', 'golfer elbow', 'medial epicondylitis'] }
});

DISEASES.push({
  id: 'trigger-finger', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'الإصبع الزنادية', en: 'Trigger finger' },
  short: {
    ar: 'الوتر الذي يثني الإصبع يتضخّم فيعلق في البكرة التي يمرّ تحتها، فينقفل الإصبع مثنياً ثم يقفز فجأة عند فرده بصوت وطقّة مؤلمة.',
    en: 'The tendon that bends the finger thickens and catches in the pulley it passes under, so the finger locks bent and then snaps open suddenly with a painful click.'
  },
  organs: ['hand', 'tendon-ligament', 'carpal-tunnel'],
  aliases: ['الإصبع الزنادية'],
  keywords: { ar: ['إصبع الزناد', 'انقفال الإصبع', 'طقّة الإصبع', 'التهاب غمد الوتر المضيّق'], en: ['trigger finger', 'stenosing tenosynovitis', 'locking finger', 'A1 pulley'] }
});

DISEASES.push({
  id: 'ganglion-cyst', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'تكيّس المعصم (الغانغليون)', en: 'Ganglion cyst' },
  short: {
    ar: 'كتلة مدوّرة ليّنة تظهر فوق المعصم أو ظهر اليد، مليئة بسائل هلامي يتسرّب من المفصل أو غمد الوتر. حميدة تماماً، وأكثر ما يزعج فيها أنها تُخاف.',
    en: 'A smooth round lump appearing over the wrist or the back of the hand, filled with jelly-like fluid leaking from the joint or a tendon sheath. Entirely benign, and what troubles people most about it is fear.'
  },
  organs: ['hand', 'carpal-tunnel', 'tendon-ligament'],
  aliases: [],
  keywords: { ar: ['كيس المعصم', 'الغانغليون', 'كتلة في ظهر اليد', 'كيس زليلي'], en: ['ganglion cyst', 'wrist lump', 'synovial cyst', 'dorsal wrist ganglion'] }
});

/* ---------------- الركبة والقدم ---------------- */

DISEASES.push({
  id: 'patellofemoral-pain', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'متلازمة الألم الرضفي الفخذي', en: 'Patellofemoral pain syndrome' },
  short: {
    ar: 'ألم حول صابونة الركبة أو خلفها يزيد بنزول الدرج والقرفصاء والجلوس الطويل مثنيّ الركبة. أشيع سبب لألم ركبة الشباب، والصورة الشعاعية فيه سليمة.',
    en: 'Pain around or behind the kneecap, worse going down stairs, squatting, and sitting long with the knee bent. The commonest cause of knee pain in young people, and the X-ray is normal.'
  },
  organs: ['knee', 'muscles', 'tendon-ligament', 'hip'],
  aliases: [],
  keywords: { ar: ['ألم صابونة الركبة', 'ركبة العدّاء', 'ألم نزول الدرج', 'تليّن غضروف الرضفة'], en: ['patellofemoral pain', 'runner knee', 'anterior knee pain', 'chondromalacia patellae'] }
});

DISEASES.push({
  id: 'achilles-rupture', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'تمزّق وتر أخيل', en: 'Achilles tendon rupture' },
  short: {
    ar: 'أقوى وتر في الجسم ينقطع فجأة أثناء دفعة مباغتة، فيحسّ صاحبه بضربة في مؤخّرة الكاحل وصوت فرقعة، ويعجز عن الوقوف على أطراف أصابعه.',
    en: 'The strongest tendon in the body snaps suddenly during an abrupt push-off; the person feels as if struck at the back of the ankle, hears a pop, and cannot stand on tiptoe.'
  },
  organs: ['ankle', 'foot', 'tendon-ligament', 'muscles'],
  aliases: ['تمزق وتر أخيل', 'تمزّق وتر أخيل'],
  keywords: { ar: ['قطع وتر أخيل', 'فرقعة في الكاحل', 'عدم القدرة على الوقوف على الأصابع', 'وتر العرقوب'], en: ['Achilles rupture', 'tendon snap', 'Thompson test', 'calf tendon tear'] }
});

DISEASES.push({
  id: 'stress-fracture', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'الكسر الإجهادي', en: 'Stress fracture' },
  short: {
    ar: 'شرخ دقيق يتكوّن في العظم من تكرار الحمل لا من ضربة واحدة. ألم يبدأ آخر التمرين ثم يتقدّم حتى يؤلم في المشي العادي، والأشعة الأولى غالباً سليمة.',
    en: 'A fine crack forming in bone from repeated loading rather than a single blow. Pain that starts at the end of exercise and advances until it hurts on ordinary walking, while the first X-ray is usually normal.'
  },
  organs: ['bone-inside', 'foot', 'ankle', 'skeleton'],
  aliases: ['كسر الإجهاد في المشط'],
  keywords: { ar: ['كسر الإجهاد', 'شرخ عظمي دقيق', 'ألم عظم الساق بعد الجري', 'الحمل المتكرّر'], en: ['stress fracture', 'march fracture', 'bone stress injury', 'overuse fracture'] }
});

/* ---------------- الورك والعمود الفقري ---------------- */

DISEASES.push({
  id: 'avascular-necrosis', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'نخر رأس الفخذ اللاوعائي', en: 'Avascular necrosis of the femoral head' },
  short: {
    ar: 'الدم ينقطع عن رأس عظم الفخذ فيموت العظم تحت الغضروف بصمت، ثم ينهار السطح فيصير المفصل خشناً. أشهر أسبابه الكورتيزون طويل الأمد والإفراط في الكحول.',
    en: 'The blood supply to the head of the thigh bone is cut off, the bone under the cartilage dies silently, then the surface collapses and the joint wears out. The best known causes are long-term steroids and heavy alcohol.'
  },
  organs: ['hip', 'bone-inside', 'skeleton', 'vessel-types'],
  aliases: ['تنخر رأس الفخذ'],
  keywords: { ar: ['تنخّر عظمي', 'موت عظم الورك', 'انهيار رأس الفخذ', 'الكورتيزون طويل الأمد'], en: ['avascular necrosis', 'osteonecrosis', 'femoral head collapse', 'steroid osteonecrosis'] }
});

DISEASES.push({
  id: 'spinal-stenosis', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'تضيّق القناة الشوكية القطنية', en: 'Lumbar spinal stenosis' },
  short: {
    ar: 'القناة التي تمرّ فيها الأعصاب داخل الفقرات تضيق مع السنّ، فتعجز الساقان عن حمل صاحبهما بعد مسافة قصيرة ويرتاح بالانحناء إلى الأمام أو بالجلوس.',
    en: 'The canal that carries the nerves inside the vertebrae narrows with age, so the legs give out after a short walking distance and relief comes from bending forward or sitting down.'
  },
  organs: ['spine', 'vertebra-disc', 'spinal-cord', 'peripheral-nerve', 'skeleton'],
  aliases: ['تضيق القناة الشوكية'],
  keywords: { ar: ['ضيق القناة العصبية', 'العرج العصبي', 'ثقل الساقين بالمشي', 'الانحناء يريح'], en: ['spinal stenosis', 'neurogenic claudication', 'lumbar canal narrowing', 'shopping cart sign'] }
});

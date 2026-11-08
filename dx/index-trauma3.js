/* ============================================================
   موسوعة الأمراض — فهرس الإصابات والأوتار والعضلات والعظام (الموجة الثالثة)
   dx/index-trauma3.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-trauma3.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- إصابات لا تنتظر ---------------- */

DISEASES.push({
  id: 'epidural-hematoma', group: 'emergency', tier: 'rare', emergency: true,
  name: { ar: 'النزف فوق الجافية', en: 'Epidural (extradural) hematoma' },
  short: {
    ar: 'ضربة على جانب الرأس تمزّق شرياناً بين الجمجمة والغشاء الخارجي للدماغ، فيتجمّع الدم بسرعة. الخدعة القاتلة أن المصاب قد يصحو ويتكلّم طبيعياً ساعة أو ساعتين قبل أن يغيب.',
    en: 'A blow to the side of the head tears an artery between the skull and the outer membrane of the brain, and blood collects fast. The deadly trick is that the casualty may wake and talk normally for an hour or two before sinking.'
  },
  organs: ['skull', 'meninges', 'brain', 'vessel-types'],
  aliases: ['النزف فوق الجافية'],
  keywords: { ar: ['ورم دموي فوق الجافية', 'الفترة الصافية', 'ضربة الصدغ', 'اتساع حدقة واحدة'], en: ['epidural hematoma', 'extradural haematoma', 'lucid interval', 'middle meningeal artery'] }
});

DISEASES.push({
  id: 'skull-fracture', group: 'emergency', tier: 'rare', emergency: true,
  name: { ar: 'كسر الجمجمة', en: 'Skull fracture' },
  short: {
    ar: 'شرخ أو انخساف في عظام الرأس بعد ضربة قوية أو سقوط. خطره ليس في العظم بل فيما تحته: نزف داخل الرأس، أو فتحة تصل بين الدماغ والخارج.',
    en: 'A crack or depression in the bones of the head after a hard blow or fall. The danger is not in the bone but in what lies beneath it: bleeding inside the head, or an opening between the brain and the outside.'
  },
  organs: ['skull', 'brain', 'meninges', 'ear', 'nose'],
  aliases: ['كسر الجمجمة'],
  keywords: { ar: ['كسر قاعدة الجمجمة', 'كسر منخسف', 'عين الراكون', 'تسرّب سائل من الأنف'], en: ['skull fracture', 'basilar skull fracture', 'depressed fracture', 'CSF leak', 'raccoon eyes'] }
});

DISEASES.push({
  id: 'flail-chest', group: 'emergency', tier: 'rare', emergency: true,
  name: { ar: 'الصدر المخلخل (كسور الأضلاع المتعدّدة)', en: 'Flail chest' },
  short: {
    ar: 'كسر عدّة أضلاع متجاورة في موضعين، فينفصل جزء من جدار الصدر ويتحرّك عكس بقيته مع كل نفس. الرئة تحته مرضوضة، والتنفّس يتدهور خلال ساعات.',
    en: 'Several neighbouring ribs break in two places, so a segment of the chest wall separates and moves opposite to the rest with every breath. The lung beneath is bruised, and breathing deteriorates within hours.'
  },
  organs: ['rib-cage', 'lungs', 'diaphragm', 'skeleton'],
  aliases: ['الصدر المخلخل'],
  keywords: { ar: ['حركة متناقضة لجدار الصدر', 'رضّ الرئة', 'كسر أضلاع متعدّد', 'إصابة الصدر الكليلة'], en: ['flail chest', 'paradoxical chest movement', 'pulmonary contusion', 'multiple rib fractures'] }
});

DISEASES.push({
  id: 'open-fracture', group: 'emergency', tier: 'rare', emergency: true,
  name: { ar: 'الكسر المفتوح', en: 'Open (compound) fracture' },
  short: {
    ar: 'كسر يصاحبه جرح يصل العظم بالهواء، ولو كان الجرح صغيراً كثقب. العظم المكشوف يتلوّث خلال ساعات، والعدوى فيه أصعب من الكسر نفسه.',
    en: 'A fracture with a wound that connects bone to open air, even if the wound is as small as a puncture. Exposed bone is contaminated within hours, and infection in it is harder to treat than the break itself.'
  },
  organs: ['skeleton', 'bone-inside', 'skin', 'wound-healing', 'muscles'],
  aliases: [],
  keywords: { ar: ['الكسر المضاعف', 'عظم بارز من الجرح', 'تلوّث الكسر', 'التنضير الجراحي'], en: ['open fracture', 'compound fracture', 'debridement', 'Gustilo classification'] }
});

DISEASES.push({
  id: 'rhabdomyolysis', group: 'emergency', tier: 'rare', emergency: true,
  name: { ar: 'انحلال الربيدات (تحلّل العضلات)', en: 'Rhabdomyolysis' },
  short: {
    ar: 'تحلّل ألياف عضلية بأعداد كبيرة فتصبّ محتواها في الدم: بول بلون الشاي، وألم عضلي شديد، وخطر على الكلى وعلى نظم القلب.',
    en: 'Large numbers of muscle fibres break down and spill their contents into the blood: tea-coloured urine, severe muscle pain, and danger to the kidneys and to the heart rhythm.'
  },
  organs: ['muscles', 'muscle-fiber', 'kidneys', 'nephron', 'blood', 'heart'],
  aliases: ['انحلال الربيدات'],
  keywords: { ar: ['تحلّل العضلات', 'بول بلون الشاي', 'الميوغلوبين', 'متلازمة السحق', 'فرط البوتاسيوم'], en: ['rhabdomyolysis', 'myoglobinuria', 'crush syndrome', 'creatine kinase', 'hyperkalemia'] }
});

/* ---------------- الخلوع وإصابات المفاصل ---------------- */

DISEASES.push({
  id: 'shoulder-dislocation', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'خلع الكتف', en: 'Shoulder dislocation' },
  short: {
    ar: 'خروج رأس عظم العضد من تجويفه الضحل بعد سقطة أو التواء للذراع. الكتف يفقد استدارته والذراع تُمسك ملتصقة بالجسم ولا تتحرّك، وأشهر ما يليه أن يتكرّر.',
    en: 'The head of the arm bone leaves its shallow socket after a fall or a twist of the arm. The shoulder loses its round contour, the arm is held against the body and will not move, and the commonest sequel is that it happens again.'
  },
  organs: ['shoulder', 'skeleton', 'tendon-ligament', 'peripheral-nerve', 'muscles'],
  aliases: ['خلع الكتف'],
  keywords: { ar: ['انخلاع الكتف', 'خلع متكرّر', 'ردّ الخلع', 'إصابة بانكارت', 'عدم استقرار الكتف'], en: ['shoulder dislocation', 'anterior dislocation', 'reduction', 'Bankart lesion', 'recurrent instability'] }
});

DISEASES.push({
  id: 'pulled-elbow', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'خلع رأس الكعبرة عند الأطفال (مرفق الخادمة)', en: "Pulled elbow (nursemaid's elbow)" },
  short: {
    ar: 'شدّة مفاجئة على يد طفل دون الخامسة تُخرج رأس عظم الساعد من تحت رباطه الحلقي. الطفل يبكي لحظة ثم يترك ذراعه معلّقة ويرفض استعمالها بلا تورّم ولا زرقة.',
    en: 'A sudden pull on the hand of a child under five slips the head of the forearm bone from under its ring-shaped ligament. The child cries briefly, then lets the arm hang and refuses to use it, with no swelling or bruising.'
  },
  organs: ['elbow', 'tendon-ligament', 'skeleton', 'hand'],
  aliases: ['خلع رأس الكعبرة عند الأطفال'],
  keywords: { ar: ['مرفق الخادمة', 'شدّ ذراع الطفل', 'ذراع معلّقة', 'ردّ الكعبرة'], en: ['pulled elbow', 'nursemaid elbow', 'radial head subluxation', 'annular ligament'] }
});

DISEASES.push({
  id: 'hip-labral-tear', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'تمزّق الشفة الحقّية وانحشار الورك', en: 'Hip labral tear and femoroacetabular impingement' },
  short: {
    ar: 'الحلقة الغضروفية التي تحيط بتجويف الورك تتمزّق، غالباً بسبب نتوء عظمي يصطدم بها مع كل ثني عميق. ألم في المغبن يشتدّ بالجلوس الطويل ودخول السيارة، وطقّة أو نشوب داخل المفصل.',
    en: 'The cartilage rim around the hip socket tears, usually because a bony bump strikes it with every deep bend. Groin pain that worsens with long sitting and getting into a car, with clicking or catching inside the joint.'
  },
  organs: ['hip', 'pelvis', 'tendon-ligament', 'skeleton'],
  aliases: ['تمزق الشفة الحقية'],
  keywords: { ar: ['انحشار الورك', 'ألم المغبن', 'الشفة الحقّية', 'تنظير الورك'], en: ['hip labral tear', 'femoroacetabular impingement', 'FAI', 'groin pain', 'hip arthroscopy'] }
});

DISEASES.push({
  id: 'whiplash', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'إصابة الرقبة السوطية', en: 'Whiplash (neck sprain)' },
  short: {
    ar: 'اندفاع الرأس إلى الخلف ثم إلى الأمام بسرعة في حادث سيارة، فتُشدّ عضلات الرقبة وأربطتها. الألم والتيبّس يبدآن غالباً بعد ساعات أو في اليوم التالي لا في لحظة الحادث.',
    en: 'The head is thrown backwards then forwards in a car crash, straining the muscles and ligaments of the neck. Pain and stiffness usually begin hours later or the next day, not at the moment of impact.'
  },
  organs: ['spine', 'vertebra-disc', 'muscles', 'tendon-ligament', 'spinal-cord'],
  aliases: [],
  keywords: { ar: ['التواء الرقبة', 'حادث سيارة', 'تيبّس الرقبة بعد الحادث', 'ألم الرقبة المتأخّر'], en: ['whiplash', 'neck sprain', 'cervical strain', 'road traffic collision', 'WAD'] }
});

/* ---------------- الأوتار واليد والقدم ---------------- */

DISEASES.push({
  id: 'de-quervain', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'التهاب غمد وتر دي كيرفان', en: "De Quervain's tenosynovitis" },
  short: {
    ar: 'التهاب في غمد وترَي الإبهام عند حافة الرسغ، فيوجع كل مسك وعصر ورفع. شائع جداً عند الأم التي ترفع رضيعها من تحت إبطيه، وعند من يستعمل الهاتف بإبهامه طويلاً.',
    en: 'Inflammation in the sheath of the two thumb tendons at the edge of the wrist, so every grip, wring and lift hurts. Very common in mothers lifting a baby under the arms, and in heavy thumb users of phones.'
  },
  organs: ['hand', 'tendon-ligament', 'muscles', 'skeleton'],
  aliases: [],
  keywords: { ar: ['التهاب غمد الوتر', 'ألم حافة الرسغ', 'إبهام الأم', 'اختبار فنكلشتاين'], en: ['De Quervain tenosynovitis', 'radial styloid', 'Finkelstein test', 'mother thumb'] }
});

DISEASES.push({
  id: 'mallet-finger', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'إصبع المطرقة (تمزّق الوتر الباسط لطرف الإصبع)', en: 'Mallet finger' },
  short: {
    ar: 'كرة أو ضربة تصطدم بطرف الإصبع فتقطع الوتر الذي يفرده، فتتدلّى السلامية الأخيرة ولا يستطيع صاحبها رفعها وحده وإن رفعها الغير بسهولة.',
    en: 'A ball or knock strikes the fingertip and ruptures the tendon that straightens it, so the last joint droops and its owner cannot lift it, although someone else can lift it easily.'
  },
  organs: ['hand', 'tendon-ligament', 'skeleton'],
  aliases: [],
  keywords: { ar: ['إصبع الكرة', 'تدلّي طرف الإصبع', 'الوتر الباسط', 'جبيرة الإصبع'], en: ['mallet finger', 'baseball finger', 'extensor tendon rupture', 'stack splint'] }
});

DISEASES.push({
  id: 'dupuytren', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'تقفّع دوبويتران', en: "Dupuytren's contracture" },
  short: {
    ar: 'اللفافة تحت جلد راحة اليد تتليّف وتنكمش ببطء على مدى سنين، فتظهر عقدة صلبة ثم حبل يشدّ الإصبع نحو الراحة حتى لا تُفرد. البنصر والخنصر أكثر ما يُصاب.',
    en: 'The fascia under the skin of the palm slowly thickens and shrinks over years: a firm nodule appears, then a cord pulls the finger towards the palm until it cannot be straightened. The ring and little fingers suffer most.'
  },
  organs: ['hand', 'tendon-ligament', 'skin'],
  aliases: ['تقفّع دوبويتران'],
  keywords: { ar: ['انكماش راحة اليد', 'حبل راحي', 'عقدة في الكفّ', 'اختبار الطاولة'], en: ['Dupuytren contracture', 'palmar fibromatosis', 'palmar cord', 'tabletop test'] }
});

DISEASES.push({
  id: 'adult-flatfoot', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'القدم المسطّحة عند البالغ وقصور وتر الظنبوب الخلفي', en: 'Adult acquired flatfoot (posterior tibial tendon dysfunction)' },
  short: {
    ar: 'انهيار قوس القدم عند البالغ بعد أن كان سليماً، سببه غالباً إجهاد الوتر الذي يرفع القوس من الداخل. ألم وتورّم خلف الكعب الإنسي، وميل الكعب للخارج، وتعب سريع عند المشي.',
    en: 'The arch of a previously normal adult foot collapses, usually because the tendon that lifts the arch from the inner side has failed. Pain and swelling behind the inner ankle, a heel that tilts outwards, and quick fatigue on walking.'
  },
  organs: ['foot', 'ankle', 'tendon-ligament', 'muscles', 'skeleton'],
  aliases: [],
  keywords: { ar: ['انهيار قوس القدم', 'وتر الظنبوب الخلفي', 'القدم المفلطحة عند الكبار', 'علامة كثرة الأصابع'], en: ['adult acquired flatfoot', 'posterior tibial tendon dysfunction', 'pes planus', 'too many toes sign'] }
});

DISEASES.push({
  id: 'hallux-valgus', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'الوكعة (انحراف إبهام القدم)', en: 'Bunion (hallux valgus)' },
  short: {
    ar: 'إبهام القدم ينحرف نحو بقيّة الأصابع فيبرز مفصله من الداخل كنتوء عظمي يحتكّ بالحذاء فيؤلم ويحمرّ. يزداد ببطء ولا يرجع وحده، وقد يزحم الأصابع المجاورة.',
    en: 'The big toe drifts towards the other toes, so its joint juts out on the inner side as a bony bump that rubs the shoe, hurts and reddens. It worsens slowly, never reverses on its own, and may crowd the neighbouring toes.'
  },
  organs: ['foot', 'skeleton', 'tendon-ligament'],
  aliases: [],
  keywords: { ar: ['نتوء إبهام القدم', 'انحراف الإبهام', 'أصابع المطرقة', 'حذاء ضيّق'], en: ['bunion', 'hallux valgus', 'first MTP joint', 'hammer toe'] }
});

/* ---------------- العمود الفقري والعظم ---------------- */

DISEASES.push({
  id: 'degenerative-disc', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'تنكّس القرص (تآكل الغضروف بين الفقرات)', en: 'Degenerative disc disease' },
  short: {
    ar: 'الوسادة الغضروفية بين الفقرات تفقد ماءها وارتفاعها مع السنين، فيقترب العظم من العظم. ألم ظهر يزيد بالجلوس والانحناء ويخفّ بالمشي، وتيبّس صباحي قصير.',
    en: 'The cartilage cushion between the vertebrae loses its water and its height with the years, so bone comes closer to bone. Back pain that increases with sitting and bending and eases with walking, plus brief morning stiffness.'
  },
  organs: ['vertebra-disc', 'spine', 'skeleton', 'muscles'],
  aliases: ['تنكّس القرص'],
  keywords: { ar: ['تآكل الديسك', 'جفاف القرص', 'ضيق المسافة بين الفقرات', 'ألم ظهر ميكانيكي'], en: ['degenerative disc disease', 'disc desiccation', 'disc space narrowing', 'mechanical back pain'] }
});

DISEASES.push({
  id: 'spondylolisthesis', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'الانزلاق الفقاري وانحلال البرزخ', en: 'Spondylolisthesis and spondylolysis' },
  short: {
    ar: 'فقرة تنزلق إلى الأمام فوق التي تحتها، إمّا لكسر إجهادي في الجسر العظمي الخلفي عند رياضي مراهق، أو لتآكل المفاصل عند كبير السنّ. ألم أسفل الظهر يزيد بمدّ الظهر للخلف.',
    en: 'One vertebra slips forward over the one below, either from a stress fracture in the small bony bridge behind in a teenage athlete, or from worn joints in an older adult. Low back pain that worsens on arching backwards.'
  },
  organs: ['spine', 'vertebra-disc', 'skeleton', 'spinal-cord', 'peripheral-nerve'],
  aliases: [],
  keywords: { ar: ['انزلاق الفقرة', 'انحلال البرزخ', 'كسر إجهادي في الفقرة', 'ألم الظهر عند الرياضي المراهق'], en: ['spondylolisthesis', 'spondylolysis', 'pars defect', 'slipped vertebra'] }
});

DISEASES.push({
  id: 'kyphosis', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'الحداب (تحدّب الظهر)', en: 'Kyphosis (round back)' },
  short: {
    ar: 'زيادة انحناء الظهر إلى الأمام حتى يبدو الكتفان مدوّرين والرأس متقدّماً. عند المراهق سببه غالباً تشوّه في نموّ الفقرات، وعند كبير السنّ كسور هشاشة متتالية.',
    en: 'The forward curve of the upper back increases until the shoulders look rounded and the head sits forward. In a teenager it is usually a growth deformity of the vertebrae; in an older adult, successive fragility fractures.'
  },
  organs: ['spine', 'vertebra-disc', 'skeleton', 'muscles', 'lungs'],
  aliases: ['الحداب (تحدب الظهر)'],
  keywords: { ar: ['تحدّب الظهر', 'الظهر المستدير', 'داء شويرمان', 'حدبة الأرملة'], en: ['kyphosis', 'round back', 'Scheuermann disease', 'dowager hump', 'postural kyphosis'] }
});

DISEASES.push({
  id: 'osgood-schlatter', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'داء أوزغود-شلاتر (ألم نتوء الظنبوب عند المراهق)', en: 'Osgood-Schlatter disease' },
  short: {
    ar: 'شدّ وتر الرضفة على صفيحة نموّ لم تنضج بعد أسفل الركبة عند مراهق كثير القفز والركض، فينتفخ النتوء العظمي ويؤلم عند الركوع والصعود، ويهدأ بالراحة.',
    en: 'The kneecap tendon pulls on an immature growth plate just below the knee in a jumping, running adolescent, so the bony bump swells and hurts on kneeling and climbing, and settles with rest.'
  },
  organs: ['knee', 'growth-plate', 'tendon-ligament', 'skeleton'],
  aliases: [],
  keywords: { ar: ['نتوء تحت الركبة', 'ألم ركبة المراهق', 'وتر الرضفة', 'صفيحة النمو'], en: ['Osgood-Schlatter', 'tibial tubercle apophysitis', 'anterior knee pain', 'jumper knee'] }
});

DISEASES.push({
  id: 'pagets-bone', group: 'bones', tier: 'rare', emergency: false,
  name: { ar: 'داء باجيت العظمي', en: "Paget's disease of bone" },
  short: {
    ar: 'خلل في دورة تجديد العظم يجعله يُهدم ويُبنى بسرعة وفوضى، فيصير أكبر حجماً وأضعف بنية. يصيب الحوض والجمجمة والفخذ والفقرات، وكثير من المصابين لا يشعرون بشيء.',
    en: "A disorder of bone turnover in which bone is broken down and rebuilt fast and chaotically, so it becomes larger but structurally weaker. It affects pelvis, skull, femur and vertebrae, and many people feel nothing at all."
  },
  organs: ['skeleton', 'bone-inside', 'skull', 'pelvis', 'spine', 'ear'],
  aliases: ['داء باجيت العظمي'],
  keywords: { ar: ['التهاب العظم المشوّه', 'تضخّم الجمجمة', 'ارتفاع الفوسفاتاز القلوية', 'تقوّس الساق'], en: ["Paget's disease of bone", 'osteitis deformans', 'alkaline phosphatase', 'bone scan'] }
});

DISEASES.push({
  id: 'muscle-cramp', group: 'bones', tier: 'common', emergency: false,
  name: { ar: 'التشنّج العضلي (الشدّ المفاجئ)', en: 'Muscle cramp' },
  short: {
    ar: 'انقباض مفاجئ لا إرادي مؤلم في عضلة، أشهره في السمّانة ليلاً أو أثناء الجهد. يستمرّ ثوانيَ إلى دقائق، ثم تبقى العضلة موجوعة ساعات.',
    en: 'A sudden, involuntary, painful contraction of a muscle, classically in the calf at night or during exertion. It lasts seconds to minutes, and the muscle stays sore for hours afterwards.'
  },
  organs: ['muscles', 'muscle-fiber', 'muscle-types', 'nmj', 'blood'],
  aliases: ['التشنّج العضلي'],
  keywords: { ar: ['شدّ العضلة', 'تشنّج السمّانة', 'تقلّص ليلي', 'نقص الأملاح'], en: ['muscle cramp', 'nocturnal leg cramp', 'charley horse', 'electrolyte imbalance'] }
});

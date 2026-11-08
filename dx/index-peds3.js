/* ============================================================
   موسوعة الأمراض — فهرس أمراض الأطفال والرضّع وحديثي الولادة (الصفّ الثالث)
   dx/index-peds3.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-peds3.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الوليد وطوارئه ---------------- */

DISEASES.push({
  id: 'neonatal-sepsis', group: 'child', tier: 'common', emergency: true,
  name: { ar: 'إنتان الوليد (عدوى الدم في الشهر الأول)', en: "Neonatal sepsis" },
  short: {
    ar: 'عدوى تنتشر في دم المولود في أسابيعه الأولى ومناعته لم تنضج بعد، فتتدهور حاله في ساعات. علامتها ليست الحمّى وحدها بل الخمول ورفض الرضاعة وبرودة الجسم، وأي حرارة في الشهر الأول تعني الطوارئ فوراً.',
    en: "An infection spreading through a newborn's blood in the first weeks while immunity is still immature, so the baby can deteriorate within hours. Its sign is not fever alone but lethargy, refusing feeds and a cold body, and any fever in the first month means the emergency department at once."
  },
  organs: ['blood', 'immunity', 'meninges', 'lungs'],
  aliases: [],
  keywords: { ar: ['تسمم دم المولود', 'حمى المولود', 'عدوى حديثي الولادة'], en: ['neonatal sepsis', 'newborn infection', 'early-onset sepsis'] }
});

DISEASES.push({
  id: 'nec', group: 'child', tier: 'rare', emergency: true,
  name: { ar: 'التهاب الأمعاء والقولون الناخر عند الخداج', en: "Necrotising enterocolitis" },
  short: {
    ar: 'التهاب يهاجم جدار أمعاء الطفل المبتسر فيموت جزء منه وقد ينثقب. أخطر ما يصيب أمعاء الخداج، وأول ما ينبّه إليه انتفاخ البطن ورجوع الحليب وتغيّر لون البطن مع خمول مفاجئ.',
    en: "An inflammation that attacks the bowel wall of a premature baby so that part of it dies and may perforate. It is the most dangerous condition to strike the preterm gut, and the first warnings are a distended abdomen, feeds coming back up, a change in the colour of the belly and sudden lethargy."
  },
  organs: ['small-intestine', 'large-intestine', 'villi', 'blood'],
  aliases: [],
  keywords: { ar: ['نخر الأمعاء عند الخداج', 'انتفاخ بطن المبتسر'], en: ['NEC', 'necrotizing enterocolitis', 'preterm gut'] }
});

DISEASES.push({
  id: 'hie', group: 'child', tier: 'rare', emergency: true,
  name: { ar: 'اعتلال دماغ الوليد من نقص الأكسجة (الاختناق الولادي)', en: "Hypoxic-ischaemic encephalopathy of the newborn" },
  short: {
    ar: 'انقطاع الأكسجين والدم عن دماغ الجنين حول الولادة، فيولد الطفل خامد المنعكسات أو متشنّجاً. له نافذة علاجية ضيّقة بالتبريد تُقاس بالساعات الأولى، ولذلك يُنقل المولود عاجلاً إلى وحدة مجهّزة.',
    en: "Oxygen and blood cut off from the baby's brain around the time of birth, so the child is born with dulled reflexes or fitting. It has a narrow treatment window with cooling measured in the first hours, which is why such a newborn is transferred urgently to an equipped unit."
  },
  organs: ['brain', 'fetal-circulation', 'neuron', 'cortex-map'],
  aliases: [],
  keywords: { ar: ['الاختناق عند الولادة', 'التبريد العلاجي', 'نقص أكسجين الدماغ'], en: ['HIE', 'birth asphyxia', 'therapeutic hypothermia'] }
});

DISEASES.push({
  id: 'biliary-atresia', group: 'child', tier: 'rare', emergency: false,
  name: { ar: 'رتق القنوات الصفراوية عند الرضيع', en: "Biliary atresia" },
  short: {
    ar: 'انسداد تدريجي في قنوات الصفراء خارج كبد الرضيع، فتُحبس الصفراء داخل الكبد وتُتلفه. علامته صفار يستمرّ بعد أسبوعين مع براز شاحب وبول غامق، وعلاجه الجراحي محكوم بأسابيع العمر الأولى.',
    en: "A progressive blockage of the bile ducts outside an infant's liver, so bile is trapped inside and damages it. Its sign is jaundice persisting beyond two weeks with pale stools and dark urine, and its surgical treatment is governed by the earliest weeks of life."
  },
  organs: ['liver', 'gallbladder', 'liver-lobule', 'small-intestine'],
  aliases: [],
  keywords: { ar: ['انسداد القناة الصفراوية الولادي', 'براز أبيض عند الرضيع', 'صفار طويل'], en: ['biliary atresia', 'Kasai portoenterostomy', 'pale stool'] }
});

DISEASES.push({
  id: 'rop', group: 'child', tier: 'rare', emergency: false,
  name: { ar: 'اعتلال الشبكية عند الخداج', en: "Retinopathy of prematurity" },
  short: {
    ar: 'أوعية شبكية الطفل المبتسر لم تكمل نموّها عند الولادة، فتنمو بعدها نمواً فوضوياً قد يسحب الشبكية ويعميه. لا يُرى ولا يُشتكى منه، ولا يكشفه إلا فحص قاع العين في مواعيد محدّدة لكل خديج.',
    en: "The retinal vessels of a premature baby have not finished growing at birth, and afterwards grow in a disordered way that can pull the retina off and blind the child. It is neither visible nor complained of, and only a fundus examination at set dates for every preterm baby finds it."
  },
  organs: ['retina', 'eye', 'vessels'],
  aliases: [],
  keywords: { ar: ['شبكية الخداج', 'عمى الخداج', 'فحص قاع العين للمبتسر'], en: ['ROP', 'retinopathy of prematurity', 'preterm eye screening'] }
});

/* ---------------- الوراثي والخلقي ---------------- */

DISEASES.push({
  id: 'congenital-hypothyroidism', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'قصور الغدة الدرقية الخلقي عند المولود', en: "Congenital hypothyroidism" },
  short: {
    ar: 'مولود بغدّة درقية غائبة أو قاصرة، وهرمونها هو ما يبني دماغه في أشهره الأولى. يبدو طبيعياً تماماً عند الولادة، ولا يكشفه إلا مسح كعب المولود — وعلاجه المبكّر يمنع إعاقة ذهنية دائمة.',
    en: "A baby born with an absent or underactive thyroid, whose hormone is what builds the brain in the first months. The baby looks entirely normal at birth, and only the newborn heel-prick screen finds it; early treatment prevents permanent intellectual disability."
  },
  organs: ['thyroid', 'brain', 'growth-plate', 'skeleton'],
  aliases: [],
  keywords: { ar: ['قصور درقي ولادي', 'مسح المواليد', 'القماءة'], en: ['congenital hypothyroidism', 'newborn screening', 'heel prick'] }
});

DISEASES.push({
  id: 'pku', group: 'child', tier: 'rare', emergency: false,
  name: { ar: 'بيلة الفينيل كيتون وأمراض الاستقلاب الوراثية', en: "Phenylketonuria and inherited metabolic disease" },
  short: {
    ar: 'خلل وراثي في تفكيك حمض أميني موجود في كل بروتين، فيتراكم ويسمّم الدماغ النامي. الطفل يولد سليماً ثم يفقد ما اكتسبه، والوقاية كلّها في مسح المواليد وحمية غذائية تبدأ في الأسابيع الأولى.',
    en: "An inherited fault in breaking down an amino acid present in every protein, so it builds up and poisons the developing brain. The child is born well then loses what he gained; prevention lies entirely in newborn screening and a diet begun in the first weeks."
  },
  organs: ['dna', 'brain', 'liver', 'cell'],
  aliases: [],
  keywords: { ar: ['الفينيل كيتون', 'أمراض التمثيل الغذائي الوراثية', 'زواج الأقارب'], en: ['PKU', 'phenylketonuria', 'inborn errors of metabolism'] }
});

DISEASES.push({
  id: 'achondroplasia', group: 'child', tier: 'rare', emergency: false,
  name: { ar: 'القزامة الغضروفية (الودانة)', en: "Achondroplasia" },
  short: {
    ar: 'طفرة توقف نموّ العظام الطويلة في صفيحة النموّ، فيقصر الذراعان والساقان ويبقى الجذع والرأس بحجم أقرب للطبيعي. الذكاء سليم تماماً، والمتابعة تدور حول التنفّس والأذن وضيق القناة الشوكية.',
    en: "A mutation that halts the growth of long bones at the growth plate, so arms and legs are short while trunk and head stay closer to usual size. Intelligence is entirely normal, and follow-up centres on breathing, the ears and narrowing of the spinal canal."
  },
  organs: ['growth-plate', 'skeleton', 'bone-inside', 'spine', 'skull'],
  aliases: ['القزامة الغضروفية'],
  keywords: { ar: ['الودانة', 'قصر الأطراف الوراثي', 'التقزم'], en: ['achondroplasia', 'skeletal dysplasia', 'short-limbed dwarfism'] }
});

DISEASES.push({
  id: 'sma', group: 'child', tier: 'rare', emergency: false,
  name: { ar: 'الضمور العضلي الشوكي عند الرضّع', en: "Spinal muscular atrophy" },
  short: {
    ar: 'مرض وراثي تموت فيه الخلايا العصبية المحرّكة في النخاع الشوكي، فتضعف العضلات وترتخي من الأطراف نحو التنفّس. الحسّ والذكاء سليمان تماماً، والتشخيص المبكّر صار يغيّر المسار بعد أن توفّرت علاجات موجّهة.',
    en: "An inherited disease in which the motor nerve cells of the spinal cord die, so muscles weaken and go floppy from the limbs towards breathing. Sensation and intelligence are entirely normal, and early diagnosis now changes the course since targeted treatments became available."
  },
  organs: ['spinal-cord', 'neuron', 'muscles', 'muscle-fiber'],
  aliases: ['ضمور العضلات الشوكي'],
  keywords: { ar: ['الرضيع الرخو', 'ضمور شوكي', 'ضعف عضلي وراثي'], en: ['SMA', 'floppy infant', 'motor neuron'] }
});

DISEASES.push({
  id: 'cleft-lip-palate', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'الشفة الأرنبية والحنك المشقوق', en: "Cleft lip and palate" },
  short: {
    ar: 'فلقتا الوجه لم تلتحما في الرحم، فبقيت فتحة في الشفة أو في سقف الفم أو فيهما معاً. تؤثّر في الرضاعة والكلام والأذن الوسطى، ونتائج إصلاحها الجراحي المتدرّج ممتازة حين يتولاها فريق متكامل.',
    en: "The two halves of the face did not fuse in the womb, leaving a gap in the lip, in the roof of the mouth, or in both. It affects feeding, speech and the middle ear, and the results of staged surgical repair are excellent when a full team takes it on."
  },
  organs: ['lips', 'pharynx', 'child-teeth', 'ear'],
  aliases: ['الشفة الأرنبية'],
  keywords: { ar: ['شق الشفة', 'شق الحنك', 'فلح الشفة'], en: ['cleft lip', 'cleft palate', 'orofacial cleft'] }
});

DISEASES.push({
  id: 'spina-bifida', group: 'child', tier: 'rare', emergency: false,
  name: { ar: 'السنسنة المشقوقة وعيوب الأنبوب العصبي', en: "Spina bifida and neural tube defects" },
  short: {
    ar: 'الأنبوب الذي يصير نخاعاً شوكياً لم ينغلق في الشهر الأول للحمل، فبقيت فقرات مفتوحة وقد برز منها كيس على الظهر. أثره في الحركة والمثانة يتفاوت كثيراً، وحمض الفوليك قبل الحمل يمنع أكثر حالاته.',
    en: "The tube that becomes the spinal cord did not close in the first month of pregnancy, leaving vertebrae open and sometimes a sac protruding on the back. Its effect on movement and bladder varies widely, and folic acid before pregnancy prevents most cases."
  },
  organs: ['spinal-cord', 'vertebra-disc', 'embryo', 'spine', 'bladder'],
  aliases: ['عيوب الأنبوب العصبي'],
  keywords: { ar: ['الصلب المشقوق', 'القيلة السحائية النخاعية', 'حمض الفوليك'], en: ['spina bifida', 'myelomeningocele', 'neural tube defect'] }
});

DISEASES.push({
  id: 'tetralogy-fallot', group: 'child', tier: 'rare', emergency: false,
  name: { ar: 'رباعية فالو (عيب القلب المزرق)', en: "Tetralogy of Fallot" },
  short: {
    ar: 'أربعة عيوب مجتمعة في قلب واحد تجعل دماً قليل الأكسجين يخرج إلى الجسم، فتزرقّ شفتا الطفل وأظافره وتشتدّ الزرقة في نوبات مع البكاء. إصلاحها الجراحي في السنة الأولى يعيد للطفل عمراً وحياة طبيعية.',
    en: "Four defects together in one heart that send poorly oxygenated blood out to the body, so the child's lips and nails turn blue and the blueness deepens in spells with crying. Surgical repair in the first year gives the child a normal life and lifespan."
  },
  organs: ['heart', 'fetal-circulation', 'lungs', 'circulation'],
  aliases: [],
  keywords: { ar: ['الطفل الأزرق', 'زرقة القلب الخلقية', 'نوبة زرقة'], en: ['tetralogy of Fallot', 'blue baby', 'tet spell'] }
});

DISEASES.push({
  id: 'congenital-hearing-loss', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'ضعف السمع الخلقي عند الرضّع', en: "Congenital hearing loss in infants" },
  short: {
    ar: 'مولود لا يسمع أو يسمع ناقصاً منذ يومه الأول، ولا يظهر ذلك إلا حين يتأخّر كلامه بعد سنة أو سنتين — وقد فات نصف عمر تعلّم اللغة. مسح السمع للمواليد يكشفه في أيامه الأولى بفحص لا يوقظ الطفل.',
    en: "A baby who does not hear, or hears only partly, from the first day, and it shows only when speech is late at one or two years, by which time half the language-learning window has gone. Newborn hearing screening finds it in the first days with a test that does not even wake the baby."
  },
  organs: ['ear', 'balance', 'dna', 'brain'],
  aliases: [],
  keywords: { ar: ['صمم الأطفال', 'مسح السمع للمواليد', 'زراعة القوقعة'], en: ['congenital deafness', 'newborn hearing screening', 'cochlear implant'] }
});

/* ---------------- الرأس والدماغ عند الرضيع ---------------- */

DISEASES.push({
  id: 'infant-hydrocephalus', group: 'child', tier: 'rare', emergency: false,
  name: { ar: 'استسقاء الرأس عند الرضيع (تجمّع السائل في الدماغ)', en: "Infant hydrocephalus" },
  short: {
    ar: 'سائل الدماغ يُنتَج ولا يجد مخرجاً، فيتمدّد داخل الرأس. ولأن دروز جمجمة الرضيع لم تلتحم بعد، تكبر رأسه بسرعة قبل أن تظهر أعراض الضغط — ولهذا كان قياس محيط الرأس في كل زيارة أهم فحص في سنته الأولى.',
    en: "Brain fluid is produced but finds no way out, so it expands inside the head. Because an infant's skull sutures have not yet fused, the head enlarges quickly before pressure symptoms appear, which is why measuring head circumference at every visit is the most important check of the first year."
  },
  organs: ['brain', 'meninges', 'infant-skull', 'spinal-cord'],
  aliases: [],
  keywords: { ar: ['كبر الرأس عند الرضيع', 'الماء على الدماغ', 'صمام التحويل'], en: ['hydrocephalus', 'VP shunt', 'macrocephaly'] }
});

DISEASES.push({
  id: 'plagiocephaly', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'الرأس المسطّح الوضعي عند الرضيع', en: "Positional plagiocephaly" },
  short: {
    ar: 'تسطّح في جانب أو مؤخّرة رأس الرضيع من طول النوم على وضع واحد، لا من مرض في العظم. حميد ويتحسّن بتغيير الوضعيات ووقت البطن، والمهمّ تمييزه عن التحام دروز الجمجمة المبكّر الذي يحتاج جراحة.',
    en: "A flattening at the side or back of a baby's head from long sleeping in one position rather than from disease of the bone. It is benign and improves with changes of position and tummy time; what matters is telling it apart from early fusion of the skull sutures, which needs surgery."
  },
  organs: ['infant-skull', 'skull', 'muscles'],
  aliases: ['الرأس المسطّح الوضعي'],
  keywords: { ar: ['تسطح الرأس', 'رأس الرضيع المائل', 'وقت البطن'], en: ['plagiocephaly', 'flat head', 'tummy time'] }
});

DISEASES.push({
  id: 'infantile-spasms', group: 'child', tier: 'rare', emergency: false,
  name: { ar: 'التشنّجات الطفلية (متلازمة ويست)', en: "Infantile spasms (West syndrome)" },
  short: {
    ar: 'نوبات صرع خاصّة بالرضيع تبدو انثناءة مفاجئة للجسم تتكرّر في سلاسل عند الاستيقاظ، فتُحسب مغصاً أو فزعاً. تأخير تشخيصها أسابيع يكلّف الطفل نموّه العقلي، ولذلك تُعامل معاملة الحالة العاجلة.',
    en: "Seizures peculiar to infancy that look like a sudden folding of the body repeated in clusters on waking, so they are mistaken for colic or startling. Weeks of delayed diagnosis cost the child developmental progress, which is why they are treated as urgent."
  },
  organs: ['brain', 'neuron', 'cortex-map', 'nervous'],
  aliases: [],
  keywords: { ar: ['متلازمة ويست', 'نوبات الانثناء', 'صرع الرضّع'], en: ['infantile spasms', 'West syndrome', 'hypsarrhythmia'] }
});

/* ---------------- الالتهاب والمناعة ---------------- */

DISEASES.push({
  id: 'kawasaki', group: 'child', tier: 'rare', emergency: false,
  name: { ar: 'داء كاواساكي (التهاب الأوعية عند الأطفال)', en: "Kawasaki disease" },
  short: {
    ar: 'التهاب يصيب جدران الشرايين المتوسّطة عند الأطفال الصغار، أخطر ما فيه أنه قد يوسّع شرايين القلب. صورته حمّى عنيدة خمسة أيام مع طفح وعينين حمراوين وشفتين متشقّقتين ولسان كالفراولة.',
    en: "An inflammation of the walls of medium arteries in young children, whose greatest danger is that it can widen the arteries of the heart. It appears as a stubborn fever for five days with a rash, red eyes, cracked lips and a strawberry tongue."
  },
  organs: ['coronary', 'heart', 'vessels', 'lymph-node', 'skin'],
  aliases: [],
  keywords: { ar: ['كاواساكي', 'حمى خمسة أيام عند الطفل', 'تمدد الشريان التاجي'], en: ['Kawasaki disease', 'coronary aneurysm', 'mucocutaneous lymph node syndrome'] }
});

DISEASES.push({
  id: 'hsp', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'فرفرية هينوخ شونلاين (التهاب الأوعية بالغلوبولين أ)', en: "Henoch-Schonlein purpura (IgA vasculitis)" },
  short: {
    ar: 'أشيع التهاب أوعية عند الأطفال: طفح نزفي بارز لا يزول بالضغط ينتشر على الساقين والأليتين، مع ألم مفاصل ومغص بطني. يشفى وحده غالباً، لكن الكلية قد تُصاب بصمت فتحتاج متابعة بول شهوراً.',
    en: "The commonest vasculitis of childhood: a raised bleeding rash that does not blanch on pressure, spreading over the legs and buttocks, with joint pain and abdominal cramps. It usually settles on its own, but the kidney may be affected silently and needs urine follow-up for months."
  },
  organs: ['skin', 'vessels', 'kidneys', 'nephron', 'small-intestine'],
  aliases: [],
  keywords: { ar: ['هينوخ شونلاين', 'طفح نزفي عند الطفل', 'التهاب الأوعية الطفلي'], en: ['HSP', 'IgA vasculitis', 'palpable purpura'] }
});

/* ---------------- الورك والعرج ---------------- */

DISEASES.push({
  id: 'perthes', group: 'child', tier: 'rare', emergency: false,
  name: { ar: 'داء بيرثيس (نخر رأس الفخذ عند الطفل)', en: "Legg-Calve-Perthes disease" },
  short: {
    ar: 'انقطاع مؤقّت للدم عن رأس عظم الفخذ في طفل بين الرابعة والعاشرة، فيلين الرأس ويتشوّه ثم يُعاد بناؤه على مدى سنوات. يبدأ بعرج غير مؤلم أو ألم يشكو منه الطفل في الركبة لا في الورك.',
    en: "A temporary loss of blood supply to the head of the femur in a child between four and ten, so the head softens and deforms then is rebuilt over years. It starts as a painless limp, or as pain the child reports in the knee rather than the hip."
  },
  organs: ['hip', 'growth-plate', 'bone-inside', 'pelvis', 'skeleton'],
  aliases: [],
  keywords: { ar: ['بيرثيس', 'عرج الطفل المزمن', 'نخر رأس الفخذ الطفلي'], en: ['Perthes disease', 'avascular necrosis of hip', 'childhood limp'] }
});

DISEASES.push({
  id: 'transient-synovitis', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'التهاب الغشاء الزليلي العابر (عرج الطفل بعد النزلة)', en: "Transient synovitis of the hip" },
  short: {
    ar: 'أشيع سبب لعرج مفاجئ في طفل صغير: التهاب مؤقّت في بطانة مفصل الورك يتبع نزلة فيروسية، ويزول في أيام. مهمّته الحقيقية أنه يشبه التهاب المفصل الصديدي الخطير، والتفريق بينهما لا يُترك للتخمين.',
    en: "The commonest cause of a sudden limp in a young child: temporary inflammation of the lining of the hip joint following a viral illness, settling within days. Its real significance is that it mimics dangerous septic arthritis, and telling them apart is not left to guesswork."
  },
  organs: ['hip', 'pelvis', 'skeleton'],
  aliases: [],
  keywords: { ar: ['عرج مفاجئ', 'التهاب الورك العابر', 'ورك الطفل المتهيّج'], en: ['transient synovitis', 'irritable hip', 'limping child'] }
});

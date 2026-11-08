/* ============================================================
   موسوعة الأمراض — فهرس أمراض الأطفال (الصفّ الثاني)
   dx/index-peds2.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-peds2.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الوليد والبنية ---------------- */

DISEASES.push({
  id: 'ddh', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'خلع الورك التطوّري (عدم استقرار ورك الرضيع)', en: "Developmental dysplasia of the hip" },
  short: {
    ar: 'مفصل ورك المولود لم يستقرّ في تجويفه، فرأس الفخذ مائل فيه أو خارج عنه. يُكتشف بفحص بسيط في الأسابيع الأولى، وكلّما بكّر اكتشافه صار علاجه أسهل وأقصر.',
    en: "The hip joint of a newborn has not settled into its socket, so the head of the thigh bone sits loosely in it or outside it. A simple examination in the first weeks finds it, and the earlier it is found the simpler and shorter the treatment."
  },
  organs: ['hip', 'pelvis', 'skeleton', 'growth-plate'],
  aliases: ['خلل التنسج الوركي عند الرضع'],
  keywords: { ar: ['خلع الورك الولادي', 'عرج الطفل', 'ثنايا الفخذ غير متساوية'], en: ['DDH', 'hip dysplasia', 'Pavlik harness'] }
});

DISEASES.push({
  id: 'clubfoot', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'القدم الحنفاء (حنف القدم الولادي)', en: "Clubfoot (congenital talipes)" },
  short: {
    ar: 'قدم مولود ملتوية إلى الداخل والأسفل منذ الولادة ولا ترجع إلى وضعها بالتحريك اللطيف. تُصحّح بجبائر متتابعة تبدأ في الأسابيع الأولى، والنتيجة قدم تمشي وتلعب.',
    en: "A newborn foot turned inwards and downwards from birth that does not come back to position with gentle handling. It is corrected by a series of casts begun in the first weeks, and the result is a foot that walks and plays."
  },
  organs: ['foot', 'ankle', 'tendon-ligament', 'skeleton'],
  aliases: [],
  keywords: { ar: ['حنف القدم', 'القدم الملتوية', 'جبس بونسيتي'], en: ['clubfoot', 'talipes equinovarus', 'Ponseti'] }
});

DISEASES.push({
  id: 'undescended-testis', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'الخصية المعلّقة (الخصية غير النازلة)', en: "Undescended testis" },
  short: {
    ar: 'خصية لم تنزل إلى كيس الصفن قبل الولادة فبقيت في البطن أو في قناة الأربية. كثير منها ينزل وحده في الأشهر الأولى، وما بقي بعدها له نافذة جراحية لا تُفوَّت.',
    en: "A testis that did not descend into the scrotum before birth and stayed in the abdomen or the inguinal canal. Many descend on their own in the first months; those that do not have a surgical window that should not be missed."
  },
  organs: ['testis', 'male-reproductive', 'embryo'],
  aliases: [],
  keywords: { ar: ['الخصية المختفية', 'كيس الصفن فارغ', 'نزول الخصية'], en: ['cryptorchidism', 'undescended testicle', 'orchidopexy'] }
});

/* ---------------- جراحة الرضيع الطارئة ---------------- */

DISEASES.push({
  id: 'pyloric-stenosis', group: 'child', tier: 'common', emergency: true,
  name: { ar: 'تضيّق البوّاب عند الرضيع', en: "Infantile pyloric stenosis" },
  short: {
    ar: 'عضلة مخرج المعدة تتثخّن عند رضيع في أسابيعه الأولى حتى تسدّ الطريق، فيتقيّأ الحليب بقوّة بعد الرضعة ثم يعود جائعاً فوراً يطلب المزيد — وهذا الجوع هو ما يميّزه.',
    en: "The muscle at the outlet of the stomach thickens in a baby of a few weeks until it blocks the way, so milk is vomited forcefully after a feed and the baby is hungry again at once and asks for more, which is what distinguishes it."
  },
  organs: ['stomach', 'small-intestine', 'muscles', 'esophagus'],
  aliases: [],
  keywords: { ar: ['القيء القذفي', 'تضيق البواب', 'رضيع يتقيأ بقوة'], en: ['pyloric stenosis', 'projectile vomiting', 'pyloromyotomy'] }
});

DISEASES.push({
  id: 'intussusception', group: 'child', tier: 'common', emergency: true,
  name: { ar: 'انغلاف الأمعاء', en: "Intussusception" },
  short: {
    ar: 'جزء من الأمعاء ينزلق داخل الجزء الذي يليه كأنبوب تلسكوب فينحشر ويُقطع عنه الدم. رضيع يبكي بنوبات ويسحب ركبتيه ثم يهدأ هدوءاً تامّاً بينها — وهذا الهدوء هو ما يخدع.',
    en: "A length of bowel slides inside the length that follows it like a telescope, becomes trapped and loses its blood supply. A baby cries in bouts and draws up the knees, then falls completely quiet between them, and that quiet is what deceives."
  },
  organs: ['small-intestine', 'large-intestine', 'villi', 'lymph-node'],
  aliases: [],
  keywords: { ar: ['تداخل الأمعاء', 'براز هلام الكشمش', 'بكاء نوبي'], en: ['intussusception', 'currant jelly stool', 'air enema'] }
});

DISEASES.push({
  id: 'hirschsprung', group: 'child', tier: 'rare', emergency: false,
  name: { ar: 'داء هيرشسبرونغ (القولون بلا خلايا عصبية)', en: "Hirschsprung disease" },
  short: {
    ar: 'جزء من نهاية القولون وُلد بلا الخلايا العصبية التي ترخيه، فبقي مشدوداً لا يمرّر البراز. يظهر بتأخّر خروج العقي وإمساك شديد منذ الأيام الأولى لا الأشهر.',
    en: "A segment at the end of the colon is born without the nerve cells that relax it, so it stays clamped shut and stool cannot pass. It shows as delayed passage of the first stool and severe constipation from the first days, not months."
  },
  organs: ['large-intestine', 'anorectal', 'autonomic', 'nervous'],
  aliases: [],
  keywords: { ar: ['تعذّر خروج العقي', 'ضخامة القولون الخلقية', 'إمساك المولود'], en: ['Hirschsprung', 'aganglionosis', 'delayed meconium'] }
});

/* ---------------- التغذية والهضم ---------------- */

DISEASES.push({
  id: 'infant-reflux', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'ارتجاع الرضّع (القلس بعد الرضعة)', en: "Infant reflux (posseting)" },
  short: {
    ar: 'رجوع قليل من الحليب من المعدة إلى الفم بعد الرضعة لأن الصمام أعلى المعدة لم ينضج بعد. أكثره حالة طبيعية في طفل يزيد وزنه ويرضع براحة، ويزول وحده مع الجلوس والمشي.',
    en: "A small return of milk from the stomach to the mouth after a feed, because the valve at the top of the stomach has not yet matured. In a baby who is gaining weight and feeding comfortably it is normal, and it settles as the child sits and walks."
  },
  organs: ['esophagus', 'stomach', 'diaphragm'],
  aliases: [],
  keywords: { ar: ['ترجيع الرضيع', 'القشط بعد الرضاعة', 'الاستفراغ البسيط'], en: ['infant reflux', 'posseting', 'GOR in babies'] }
});

DISEASES.push({
  id: 'cows-milk-allergy', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'حساسية بروتين حليب البقر', en: "Cow's milk protein allergy" },
  short: {
    ar: 'جهاز مناعة الرضيع يتعامل مع بروتين حليب البقر كأنه عدوّ، فيردّ بطفح أو مغص أو إسهال بمخاط أو دم. تُشخَّص بحذف البروتين ثم إرجاعه، وأكثر الأطفال يتجاوزونها.',
    en: "A baby's immune system treats the protein of cow's milk as an enemy and answers with rash, colic, or diarrhoea with mucus or blood. It is diagnosed by removing the protein and then reintroducing it, and most children outgrow it."
  },
  organs: ['small-intestine', 'villi', 'immunity', 'skin'],
  aliases: [],
  keywords: { ar: ['حساسية الحليب', 'دم في براز الرضيع', 'حليب متحلّل'], en: ['CMPA', 'milk allergy', 'hydrolysed formula'] }
});

DISEASES.push({
  id: 'child-constipation', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'الإمساك عند الأطفال', en: "Constipation in children" },
  short: {
    ar: 'براز قاسٍ متباعد مؤلم يجعل الطفل يحبسه خوفاً من الألم، فيقسو أكثر فيؤلم أكثر. حلقة تبدأ صغيرة وتكبر، وأكثر علاجها كسر الخوف لا تغيير الأكل وحده.',
    en: "Hard, infrequent, painful stools make a child hold on for fear of the pain, so the stool hardens further and hurts more. It is a loop that starts small and grows, and most of the treatment is breaking the fear, not diet alone."
  },
  organs: ['large-intestine', 'anorectal', 'villi'],
  aliases: [],
  keywords: { ar: ['حبس البراز', 'تبرّز مؤلم', 'تلطّخ الملابس'], en: ['childhood constipation', 'stool withholding', 'soiling'] }
});

/* ---------------- جلد الرضيع ---------------- */

DISEASES.push({
  id: 'diaper-rash', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'طفح الحفاض', en: "Nappy rash" },
  short: {
    ar: 'احمرار وتهيّج في الجلد الذي يغطّيه الحفاظ بسبب طول ملامسة البلل والبول والبراز مع الاحتكاك. يشفى بسرعة بتغيير أكثر وتهوية أطول، وقد تركبه فطريات فيتغيّر شكله.',
    en: "Redness and irritation of the skin under the nappy from long contact with wetness, urine and stool together with friction. It heals quickly with more frequent changing and longer airing, and a fungus may settle on it and change its look."
  },
  organs: ['skin', 'skin-receptors'],
  aliases: [],
  keywords: { ar: ['التهاب منطقة الحفاظ', 'احمرار المؤخرة', 'فطريات الحفاض'], en: ['nappy rash', 'diaper dermatitis', 'candida'] }
});

DISEASES.push({
  id: 'cradle-cap', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'قشرة المهد (قشور فروة الرضيع)', en: "Cradle cap" },
  short: {
    ar: 'قشور دهنية صفراء لاصقة على فروة رأس الرضيع وحاجبيه في أشهره الأولى. لا تؤلمه ولا تحكّه ولا تعني قلّة نظافة، وتزول وحدها، وأكثر ما يؤذيها نزع القشور بالقوّة.',
    en: "Greasy yellow scales stuck to the scalp and eyebrows of a baby in the first months. They do not hurt or itch, do not mean poor hygiene, and clear on their own; what harms them most is picking the scales off by force."
  },
  organs: ['skin', 'hair-follicle'],
  aliases: [],
  keywords: { ar: ['قشرة رأس الرضيع', 'قشور صفراء', 'التهاب دهني'], en: ['cradle cap', 'infantile seborrhoeic dermatitis'] }
});

DISEASES.push({
  id: 'neonatal-conjunctivitis', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'التهاب الملتحمة الوليدي (رمد المواليد)', en: "Neonatal conjunctivitis" },
  short: {
    ar: 'احمرار العين وإفراز صديدي عند مولود في شهره الأول. أكثره من قناة دمعية لم تنفتح بعد، وقليله عدوى تلتقط عند الولادة وتحتاج علاجاً سريعاً حفاظاً على البصر.',
    en: "A red eye with a discharge in a baby in the first month. Most of it comes from a tear duct that has not yet opened, and a small share is an infection caught at birth that needs prompt treatment to protect sight."
  },
  organs: ['eye', 'immunity'],
  aliases: [],
  keywords: { ar: ['إفراز عين المولود', 'رمد الولدان', 'عين ملتصقة'], en: ['ophthalmia neonatorum', 'sticky eye', 'newborn eye discharge'] }
});

/* ---------------- الحمّى والصدر ---------------- */

DISEASES.push({
  id: 'child-fever', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'الحمّى عند الطفل ومتى تقلق', en: "Fever in children and when to worry" },
  short: {
    ar: 'ارتفاع الحرارة ليس مرضاً بل ردّ الجسم على عدوى، ودرجتها وحدها لا تقيس خطورة الحالة. ما يُقاس هو حال الطفل بين موجات الحرارة وعمره ومدّة الحمّى.',
    en: "A raised temperature is not a disease but the body's answer to infection, and the number alone does not measure how serious the illness is. What is judged is how the child is between the peaks, the child's age, and how long the fever lasts."
  },
  organs: ['immunity', 'blood', 'brain', 'lymph-node'],
  aliases: [],
  keywords: { ar: ['سخونة الطفل', 'حرارة مرتفعة', 'حمى بلا سبب'], en: ['childhood fever', 'fever without source', 'red flags'] }
});

DISEASES.push({
  id: 'child-wheeze', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'الصفير المتكرّر والربو عند الأطفال', en: "Recurrent wheeze and childhood asthma" },
  short: {
    ar: 'صفير في الصدر يتكرّر مع نزلات البرد أو المجهود أو الغبار. كثير من الصغار يصفرون مع الفيروسات ثم يتوقّفون مع الكبر، وبعضهم يستمرّ فيصير ربواً يحتاج خطّة.',
    en: "Whistling in the chest that returns with colds, effort or dust. Many small children wheeze with viruses and stop as they grow, while in some it continues and becomes asthma that needs a plan."
  },
  organs: ['bronchi', 'lungs', 'alveoli', 'immunity'],
  aliases: [],
  keywords: { ar: ['صفير الصدر', 'كحة ليلية', 'ضيق نفس الطفل'], en: ['viral wheeze', 'childhood asthma', 'inhaler spacer'] }
});

/* ---------------- النموّ والسلوك ---------------- */

DISEASES.push({
  id: 'learning-disability', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'صعوبات التعلّم وعسر القراءة', en: "Learning difficulties and dyslexia" },
  short: {
    ar: 'طفل ذكي في كلامه ولعبه لكنه يتعثّر في القراءة أو الكتابة أو الحساب تعثّراً لا يفسّره جهد ولا اهتمام. ليست قلّة ذكاء ولا كسلاً، بل طريقة مختلفة يحتاج معها تدريساً مختلفاً.',
    en: "A child who is bright in speech and play yet stumbles at reading, writing or arithmetic in a way that effort and interest do not explain. It is neither low intelligence nor laziness, but a different wiring that needs different teaching."
  },
  organs: ['brain', 'cortex-map', 'neuron', 'nervous'],
  aliases: [],
  keywords: { ar: ['عسر القراءة', 'صعوبة الكتابة', 'ضعف التحصيل'], en: ['dyslexia', 'dyscalculia', 'specific learning disorder'] }
});

DISEASES.push({
  id: 'child-sleep', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'اضطرابات النوم عند الأطفال', en: "Sleep problems in children" },
  short: {
    ar: 'صعوبة في الخلود إلى النوم أو استيقاظ متكرّر أو فزع ليلي أو مشي في النوم. أكثرها عادات ومواعيد يمكن إصلاحها، وقليلها علامة على مشكلة تنفّس أو قلق يستحقّ فحصاً.',
    en: "Difficulty falling asleep, repeated waking, night terrors or sleepwalking. Most of it is habit and timing that can be corrected, and a small share signals a breathing problem or anxiety that deserves assessment."
  },
  organs: ['brain', 'pineal', 'pharynx', 'limbic'],
  aliases: [],
  keywords: { ar: ['الفزع الليلي', 'الطفل لا ينام', 'الكوابيس'], en: ['night terrors', 'sleep onset', 'child insomnia'] }
});

DISEASES.push({
  id: 'bow-legs', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'اعوجاج الساقين والقدم المسطّحة عند الطفل', en: "Bow legs, knock knees and flat feet in children" },
  short: {
    ar: 'ساقان تبدوان مقوّستين أو متقاربتَي الركبتين وقدم بلا قوس ظاهر. أكثرها مراحل طبيعية في نموّ العظم تتبدّل مع السنّ وتزول وحدها، ولها استثناءات قليلة تستحقّ فحصاً.',
    en: "Legs that look bowed or knees that lean together, and a foot with no visible arch. Most of this belongs to the normal stages of bone growth, changes with age and resolves on its own, with a few exceptions that deserve assessment."
  },
  organs: ['knee', 'foot', 'skeleton', 'growth-plate', 'hip'],
  aliases: ['القدم المسطّحة'],
  keywords: { ar: ['تقوّس الساقين', 'اصطكاك الركبتين', 'الفلات فوت'], en: ['bow legs', 'knock knees', 'flat feet'] }
});

DISEASES.push({
  id: 'growing-pains', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'آلام النموّ', en: "Growing pains" },
  short: {
    ar: 'ألم في عضلات الساقين آخر النهار أو أثناء الليل يوقظ الطفل، ثم يصبح في الصباح يجري ويلعب كأن شيئاً لم يكن. ألم حقيقي يشعر به، لكنه لا يترك خلفه أذى.',
    en: "Aching in the muscles of the legs at the end of the day or during the night that wakes the child, who then wakes in the morning running and playing as if nothing happened. The pain is real, but it leaves no harm behind."
  },
  organs: ['muscles', 'skeleton', 'knee', 'growth-plate'],
  aliases: [],
  keywords: { ar: ['ألم ساقي الطفل ليلاً', 'وجع الرجول', 'آلام النمو'], en: ['growing pains', 'benign nocturnal limb pain'] }
});

/* ---------------- عدوى وفم ---------------- */

DISEASES.push({
  id: 'hand-foot-mouth', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'داء اليد والقدم والفم', en: "Hand, foot and mouth disease" },
  short: {
    ar: 'عدوى فيروسية شائعة في الحضانات: حرارة يومين ثم تقرّحات مؤلمة في الفم وبثور صغيرة على الكفّين والقدمين. تزول وحدها، وأهمّ ما فيها ألّا يمتنع الطفل عن الشرب.',
    en: "A common viral infection in nurseries: two days of fever, then painful ulcers in the mouth and small blisters on the palms and soles. It clears on its own, and what matters most is that the child keeps drinking."
  },
  organs: ['skin', 'lips', 'tongue', 'pharynx', 'immunity'],
  aliases: [],
  keywords: { ar: ['فيروس اليد والقدم والفم', 'تقرحات فم الطفل', 'بثور الكفين'], en: ['HFMD', 'coxsackie', 'mouth ulcers in children'] }
});

DISEASES.push({
  id: 'tongue-tie', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'اللسان المربوط وصعوبة الرضاعة', en: "Tongue-tie and feeding difficulty" },
  short: {
    ar: 'شريط رقيق تحت اللسان قصير أو أمامي يقيّد حركة اللسان، فقد يعجز الرضيع عن الالتقام الجيد فيؤلم الثدي ولا يشبع. لا يحتاج كلّ لسان مربوط تدخّلاً — الرضاعة هي المقياس.',
    en: "A thin band under the tongue that is short or set far forward and limits its movement, so a baby may fail to latch well, hurting the breast and not feeding enough. Not every tongue-tie needs a procedure; feeding is the measure."
  },
  organs: ['tongue', 'lips', 'breast', 'teeth'],
  aliases: [],
  keywords: { ar: ['لجام اللسان', 'صعوبة الالتقام', 'ألم الحلمة'], en: ['tongue-tie', 'ankyloglossia', 'frenotomy', 'latch'] }
});

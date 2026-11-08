/* ============================================================
   موسوعة الأمراض — فهرس الإسعافات الأولية (الفعل باليد)
   dx/index-firstaid.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-firstaid.js
   بطاقات هذا الباب لا تصف مرضاً بل تصف ما تفعله يداك في اللحظة:
   خطوة خطوة، وما لا يُفعل، ومتى تتصل بالإسعاف.
   بطاقات الحالة نفسها (اختناق · غرق · نزيف · تسمّم …) في باب
   الطوارئ dx/index-emerg.js — وهنا الفعل لا الوصف، ونربط إليها.
   ⚠️ محتوى تثقيفي عام لا يغني عن الاتصال بالإسعاف ولا عن الطبيب.
   الأرقام في الإمارات: الإسعاف 998 · الشرطة 999 · الإطفاء 997.
   ============================================================ */

/* ---------------- الإنعاش القلبي الرئوي ---------------- */

DISEASES.push({
  id: 'fa-cpr-adult', group: 'first-aid', tier: 'common', emergency: true,
  name: { ar: 'الإنعاش القلبي الرئوي — البالغ', en: 'CPR — adult' },
  short: {
    ar: 'حين يسقط شخص بلا وعي ولا نفس طبيعي: ضغطٌ قويّ سريع وسط الصدر بلا توقّف يبقي دمه دائراً حتى يصل الإسعاف — دقائق تفصل بين الحياة والموت.',
    en: 'When someone collapses with no response and no normal breathing: hard, fast, non-stop chest compressions keep blood moving until help arrives — minutes decide between life and death.'
  },
  organs: ['heart', 'circulation', 'lungs', 'brain', 'coronary'],
  aliases: [],
  keywords: { ar: ['إنعاش', 'ضغط الصدر', 'توقف القلب', 'CPR', 'إفاقة'], en: ['CPR', 'chest compressions', 'cardiac arrest', 'resuscitation'] }
});

DISEASES.push({
  id: 'fa-cpr-child', group: 'first-aid', tier: 'common', emergency: true,
  name: { ar: 'الإنعاش القلبي الرئوي — الطفل', en: 'CPR — child' },
  short: {
    ar: 'الطفل من سنة إلى البلوغ يبدأ توقّف قلبه غالباً من نقص الأكسجين، فالإنعاش عنده يبدأ بخمسة أنفاس قبل الضغط — ترتيبٌ يختلف عن البالغ.',
    en: 'In a child from one year to puberty, arrest usually starts from lack of oxygen, so resuscitation begins with five breaths before compressions — an order that differs from the adult.'
  },
  organs: ['heart', 'circulation', 'lungs', 'brain'],
  aliases: [],
  keywords: { ar: ['إنعاش الطفل', 'ضغط الصدر', 'أنفاس إنقاذية', 'CPR للأطفال'], en: ['child CPR', 'paediatric resuscitation', 'rescue breaths'] }
});

DISEASES.push({
  id: 'fa-cpr-infant', group: 'first-aid', tier: 'common', emergency: true,
  name: { ar: 'الإنعاش القلبي الرئوي — الرضيع', en: 'CPR — infant' },
  short: {
    ar: 'الرضيع دون سنة: أنفاس لطيفة ورأس محايد وضغط بإصبعين وسط الصدر بعمق أقلّ — القوّة التي تناسب البالغ تؤذيه.',
    en: 'An infant under one: gentle breaths, a neutral head, and two-finger compressions in the middle of the chest to a shallower depth — the force that suits an adult would harm the baby.'
  },
  organs: ['heart', 'lungs', 'circulation', 'brain', 'infant-skull'],
  aliases: [],
  keywords: { ar: ['إنعاش الرضيع', 'ضغط بإصبعين', 'أنفاس الرضيع', 'CPR للرضّع'], en: ['infant CPR', 'two-finger compressions', 'baby resuscitation'] }
});

/* ---------------- تحرير مجرى الهواء من الاختناق ---------------- */

DISEASES.push({
  id: 'fa-heimlich-adult', group: 'first-aid', tier: 'common', emergency: true,
  name: { ar: 'إخراج جسم الاختناق — البالغ والطفل', en: 'Relieving choking — adult and child' },
  short: {
    ar: 'حين تسدّ لقمة مجرى الهواء وينقطع الصوت: خمس ضربات بين الكتفين ثم خمس ضغطات فوق السرّة، بالتبادل حتى يخرج الجسم أو يسقط المصاب.',
    en: 'When food blocks the airway and the voice cuts out: five blows between the shoulder blades then five thrusts above the navel, alternating until the object clears or the person collapses.'
  },
  organs: ['larynx', 'pharynx', 'bronchi', 'lungs', 'vocal-folds', 'diaphragm'],
  aliases: [],
  keywords: { ar: ['مناورة هايمليك', 'الغصّة', 'ضربات الظهر', 'ضغط البطن', 'شرقة'], en: ['Heimlich', 'abdominal thrusts', 'back blows', 'choking relief'] }
});

DISEASES.push({
  id: 'fa-heimlich-infant', group: 'first-aid', tier: 'common', emergency: true,
  name: { ar: 'إخراج جسم الاختناق — الرضيع', en: 'Relieving choking — infant' },
  short: {
    ar: 'الرضيع دون سنة يُختنق بلا صوت: خمس ضربات ظهر ورأسه أخفض من جسمه، ثم خمس ضغطات صدر بإصبعين — ولا ضغط بطن إطلاقاً.',
    en: 'An infant under one chokes silently: five back blows with the head lower than the body, then five two-finger chest thrusts — and never an abdominal thrust.'
  },
  organs: ['larynx', 'bronchi', 'lungs', 'pharynx'],
  aliases: [],
  keywords: { ar: ['اختناق الرضيع', 'ضربات ظهر الرضيع', 'ضغطات صدر', 'شرقة الرضيع'], en: ['infant choking', 'back blows', 'chest thrusts'] }
});

/* ---------------- النزيف والدورة ---------------- */

DISEASES.push({
  id: 'fa-bleeding-control', group: 'first-aid', tier: 'common', emergency: true,
  name: { ar: 'إيقاف النزيف الشديد بالضغط', en: 'Stopping severe bleeding with pressure' },
  short: {
    ar: 'الدم يندفع من جرح كبير: ضغط اليد المباشر القويّ عليه في الثواني الأولى يوقفه، ولا تنزع الشاش المشبع بل تزيد فوقه.',
    en: 'Blood pours from a large wound: firm direct hand pressure in the first seconds stops it, and you never remove a soaked dressing but add over it.'
  },
  organs: ['blood', 'clotting', 'vessels', 'vessel-types', 'circulation', 'wound-healing'],
  aliases: [],
  keywords: { ar: ['إيقاف النزيف', 'ضغط مباشر', 'عاصبة', 'جرح غائر', 'رباط ضاغط'], en: ['bleeding control', 'direct pressure', 'tourniquet', 'wound packing'] }
});

DISEASES.push({
  id: 'fa-recovery-position', group: 'first-aid', tier: 'common', emergency: true,
  name: { ar: 'وضعية الإفاقة', en: 'The recovery position' },
  short: {
    ar: 'من فقد وعيه وهو يتنفّس: إضجاعه على جنبه يبقي مجراه مفتوحاً ويصرّف القيء بعيداً عن رئته — أبسط وضع ينقذ حياة.',
    en: 'For an unconscious person who is breathing: laying them on their side keeps the airway open and drains vomit away from the lungs — the simplest position that saves a life.'
  },
  organs: ['brain', 'pharynx', 'tongue', 'stomach', 'larynx'],
  aliases: [],
  keywords: { ar: ['وضعية الإفاقة', 'وضع الجانب', 'فاقد الوعي', 'تأمين المجرى'], en: ['recovery position', 'lateral position', 'unconscious', 'airway'] }
});

/* ---------------- الحروق والإصابات ---------------- */

DISEASES.push({
  id: 'fa-burn', group: 'first-aid', tier: 'common', emergency: false,
  name: { ar: 'إسعاف الحرق', en: 'First aid for burns' },
  short: {
    ar: 'ماء جارٍ فاتر عشرين دقيقة كاملة فور الحرق يوقف تعمّقه ويخفّف الألم — والوصفات الشعبية من زيت ومعجون تزيده سوءاً.',
    en: 'Cool running water for a full twenty minutes right after a burn stops it deepening and eases the pain — while folk remedies of oil and paste only make it worse.'
  },
  organs: ['skin', 'skin-receptors', 'wound-healing', 'hair-follicle'],
  aliases: [],
  keywords: { ar: ['حرق', 'تبريد الحرق', 'ماء الحرق', 'فقاعات الحرق', 'حرق كيميائي'], en: ['burn', 'cooling', 'scald', 'blister', 'chemical burn'] }
});

DISEASES.push({
  id: 'fa-seizure', group: 'first-aid', tier: 'common', emergency: false,
  name: { ar: 'إسعاف نوبة التشنّج (الاختلاج)', en: 'Helping during a seizure' },
  short: {
    ar: 'حين يتشنّج جسم أمامك: احمِ رأسه وأبعِد ما حوله وراقب الوقت — ولا تمسكه ولا تضع شيئاً في فمه.',
    en: 'When a body convulses before you: protect the head, clear what is around, and time it — do not hold the person down and put nothing in the mouth.'
  },
  organs: ['brain', 'neuron', 'cortex-map', 'tongue', 'muscles'],
  aliases: [],
  keywords: { ar: ['تشنّج', 'اختلاج', 'نوبة صرع', 'حماية الرأس', 'توقيت النوبة'], en: ['seizure', 'convulsion', 'fit', 'epilepsy first aid'] }
});

DISEASES.push({
  id: 'fa-fracture-limb', group: 'first-aid', tier: 'common', emergency: false,
  name: { ar: 'إسعاف الكسر واشتباه الكسر في طرف', en: 'First aid for a limb fracture' },
  short: {
    ar: 'طرفٌ مشوّه أو شديد الألم بعد سقطة: ثبّته كما هو ولا تحاول ردّه، والحركة تزيد الأذى والنزف الداخلي.',
    en: 'A limb deformed or intensely painful after a fall: support it as it lies and do not try to straighten it, since movement worsens the injury and internal bleeding.'
  },
  organs: ['skeleton', 'bone-inside', 'tendon-ligament', 'muscles', 'vessels'],
  aliases: [],
  keywords: { ar: ['كسر', 'تثبيت الطرف', 'جبيرة', 'كسر مفتوح', 'خلع'], en: ['fracture', 'splinting', 'immobilise', 'broken bone'] }
});

DISEASES.push({
  id: 'fa-spinal', group: 'first-aid', tier: 'common', emergency: true,
  name: { ar: 'اشتباه إصابة الرقبة أو الظهر — لا تحرّكه', en: 'Suspected neck or back injury — do not move' },
  short: {
    ar: 'بعد حادث أو سقطة عالية أو غوص: أبقِ رأس المصاب ورقبته ثابتين على استقامة واحدة، فحركة واحدة خاطئة قد تحوّل إصابة إلى شلل دائم.',
    en: 'After a crash, a high fall or a dive: keep the head and neck still and in a straight line, for one wrong movement can turn an injury into permanent paralysis.'
  },
  organs: ['spine', 'spinal-cord', 'vertebra-disc', 'peripheral-nerve', 'skeleton'],
  aliases: [],
  keywords: { ar: ['إصابة الرقبة', 'إصابة الظهر', 'تثبيت الرأس', 'النخاع الشوكي', 'لا تحرّكه'], en: ['spinal injury', 'neck injury', 'in-line stabilisation', 'do not move'] }
});

DISEASES.push({
  id: 'fa-sting', group: 'first-aid', tier: 'common', emergency: false,
  name: { ar: 'إسعاف اللسعة واللدغة', en: 'First aid for stings and bites' },
  short: {
    ar: 'لسعة نحلة أو دبّور أو قنديل بحر: نظّف الموضع وبرّده، وراقب علامات الحساسية المفرطة التي تسدّ التنفّس فتصير طوارئ.',
    en: 'A bee, wasp or jellyfish sting: clean and cool the site, and watch for signs of a severe allergy that closes the airway and turns it into an emergency.'
  },
  organs: ['skin', 'immunity', 'peripheral-nerve', 'circulation', 'larynx'],
  aliases: [],
  keywords: { ar: ['لسعة', 'لدغة', 'نحلة', 'دبّور', 'قنديل بحر', 'حساسية مفرطة'], en: ['sting', 'bite', 'bee', 'wasp', 'jellyfish', 'anaphylaxis'] }
});

/* ---------------- حالات الوعي والموضعية ---------------- */

DISEASES.push({
  id: 'fa-fainting', group: 'first-aid', tier: 'common', emergency: false,
  name: { ar: 'إسعاف الإغماء', en: 'First aid for fainting' },
  short: {
    ar: 'من دار رأسه واسودّت عينه وسقط: أضجعه وارفع رجليه قليلاً ليعود الدم إلى دماغه، ولا تعجل بإجلاسه.',
    en: 'When someone goes dizzy, sees black and drops: lay them down and raise the legs a little so blood returns to the brain, and do not rush to sit them up.'
  },
  organs: ['brain', 'circulation', 'heart', 'autonomic', 'vessel-types'],
  aliases: [],
  keywords: { ar: ['إغماء', 'دوخة', 'رفع الرجلين', 'سواد أمام العين', 'فقد وعي قصير'], en: ['fainting', 'syncope', 'raise legs', 'lightheaded'] }
});

DISEASES.push({
  id: 'fa-nosebleed', group: 'first-aid', tier: 'common', emergency: false,
  name: { ar: 'إسعاف نزيف الأنف (الرعاف)', en: 'First aid for a nosebleed' },
  short: {
    ar: 'دمٌ من الأنف: اجلس وأمِل رأسك للأمام واضغط الجزء الليّن من الأنف عشر دقائق متواصلة — الإمالة للخلف خطأ يبتلع الدم.',
    en: 'Blood from the nose: sit, tilt the head forward and pinch the soft part of the nose for ten unbroken minutes — tilting back is a mistake that swallows the blood.'
  },
  organs: ['nose', 'sinuses', 'vessel-types', 'clotting'],
  aliases: [],
  keywords: { ar: ['رعاف', 'نزيف الأنف', 'ضغط الأنف', 'إمالة للأمام'], en: ['nosebleed', 'epistaxis', 'pinch nose', 'lean forward'] }
});

DISEASES.push({
  id: 'fa-eye-foreign', group: 'first-aid', tier: 'common', emergency: false,
  name: { ar: 'جسم غريب في العين — كيف تُخرجه', en: 'A foreign body in the eye — how to remove it' },
  short: {
    ar: 'ذرّة أو رمش في العين: لا تفركها، بل اغسلها بماء نظيف جارٍ — وإن كان الجسم غائراً أو المادّة كيميائية فالأمر مختلف تماماً.',
    en: 'A speck or a lash in the eye: do not rub it, flush with clean running water instead — and if the object is embedded or the substance is chemical, the situation is entirely different.'
  },
  organs: ['eye', 'retina', 'cranial-nerves'],
  aliases: [],
  keywords: { ar: ['جسم غريب في العين', 'غسل العين', 'لا تفرك العين', 'مادّة كيميائية في العين'], en: ['eye foreign body', 'irrigate eye', 'do not rub', 'chemical in eye'] }
});

/* ---------------- الماء ---------------- */

DISEASES.push({
  id: 'fa-drowning-rescue', group: 'first-aid', tier: 'common', emergency: true,
  name: { ar: 'إنقاذ الغريق وإنعاشه', en: 'Rescuing and reviving a drowning person' },
  short: {
    ar: 'أخرِج الغريق من الماء بلا أن تغرق أنت، وابدأ إنعاشه بخمسة أنفاس أولاً لأن أصل المشكلة نقص أكسجين لا خلل في القلب.',
    en: 'Get the drowning person out of the water without drowning yourself, and start reviving them with five breaths first, because the root problem is lack of oxygen, not a heart fault.'
  },
  organs: ['lungs', 'alveoli', 'larynx', 'brain', 'heart'],
  aliases: [],
  keywords: { ar: ['إنقاذ الغريق', 'أنفاس إنقاذية', 'مدّ لا تقفز', 'إنعاش الغرق'], en: ['water rescue', 'rescue breaths', 'reach dont go', 'drowning CPR'] }
});

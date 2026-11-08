/* ============================================================
   موسوعة الأمراض — فهرس دفعة سدّ الفجوات (أعصاب/رأس/قلب)
   dx/index-gap-neuro.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-gap-neuro.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ملاحظة: بطاقة «التصلّب المتعدّد» غير مضمّنة هنا لأنها موجودة
   سلفاً بالمعرّف 'ms' (dx/index-neuro.js) — انظر تقرير الدفعة.
   ============================================================ */

/* ---------------- القلب ---------------- */

DISEASES.push({
  id: 'myocarditis', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'التهاب عضلة القلب', en: 'Myocarditis' },
  short: {
    ar: 'التهاب يصيب عضلة القلب نفسها، غالباً بعد عدوى فيروسية، فيضعف ضخّها ويأتي ألم صدر وضيق نفس وخفقان — ويلفت النظر حين يضرب شابّاً أو رياضياً سليماً.',
    en: 'Inflammation of the heart muscle itself, usually after a viral infection, weakening its pumping and bringing chest pain, breathlessness and palpitations — striking most notably in an otherwise healthy young person or athlete.'
  },
  organs: ['heart', 'immunity', 'circulation', 'blood'],
  aliases: ['التهاب عضلة القلب', 'التهاب العضلة القلبية'],
  keywords: { ar: ['التهاب القلب', 'ضعف عضلة القلب بعد فيروس', 'الموت المفاجئ للرياضيين', 'خفقان بعد عدوى'], en: ['myocarditis', 'viral heart', 'inflamed heart muscle'] }
});

DISEASES.push({
  id: 'hypertensive-crisis', group: 'heart', tier: 'common', emergency: true,
  name: { ar: 'نوبة ارتفاع ضغط الدم الحادّة (الطارئ والملحّ)', en: 'Hypertensive crisis (emergency and urgency)' },
  short: {
    ar: 'قفزة شديدة في ضغط الدم إلى مستوى خطر؛ إن رافقها تلف عضو — دماغ أو قلب أو كلية أو عين — فهي طوارئ فورية، وإن غاب التلف فهي ملحّة تُخفَّض بتمهّل.',
    en: 'A severe surge of blood pressure to a dangerous level; if it comes with organ damage — brain, heart, kidney or eye — it is an immediate emergency, and without damage it is an urgency lowered gradually.'
  },
  organs: ['heart', 'vessels', 'brain', 'kidneys', 'retina'],
  aliases: ['نوبة ارتفاع ضغط الدم', 'ارتفاع ضغط الدم الطارئ', 'الأزمة الضغطية الحادّة'],
  keywords: { ar: ['ضغط مرتفع جداً', 'طوارئ الضغط', 'صداع مع ضغط عالٍ', 'رعاف مع ضغط'], en: ['hypertensive crisis', 'hypertensive emergency', 'malignant hypertension'] }
});

/* ---------------- الأعصاب ---------------- */

DISEASES.push({
  id: 'encephalitis', group: 'nerves', tier: 'common', emergency: true,
  name: { ar: 'التهاب الدماغ (الفيروسي/الهربسي)', en: 'Encephalitis (viral / herpes)' },
  short: {
    ar: 'التهاب في نسيج الدماغ نفسه، غالباً فيروسي، يسبّب حمّى وصداعاً وتغيّراً في السلوك والوعي وتشنّجات — والنوع الهربسي طوارئ لأن كل ساعة تأخير قد تترك أثراً دائماً.',
    en: 'Inflammation of the brain tissue itself, usually viral, causing fever, headache and a change in behaviour, consciousness and seizures — the herpes form is an emergency because every hour of delay may leave a lasting mark.'
  },
  organs: ['brain', 'neuron', 'meninges', 'immunity', 'bbb'],
  aliases: ['التهاب الدماغ', 'التهاب المخ', 'التهاب الدماغ الهربسي'],
  keywords: { ar: ['التهاب الدماغ', 'تغير السلوك مع حمى', 'تشنج مع حرارة', 'الهربس والدماغ'], en: ['encephalitis', 'herpes encephalitis', 'brain inflammation'] }
});

/* ---------------- الرأس ---------------- */

DISEASES.push({
  id: 'medication-overuse-headache', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'صداع فرط استخدام المسكّنات', en: 'Medication-overuse headache' },
  short: {
    ar: 'صداع يومي أو شبه يومي ينشأ حين يُكثر صاحب صداع مزمن من المسكّنات حتى يصير الدواء نفسه سبب الصداع، وعلاجه المفارق التخلّص من المسكّن المفرَط.',
    en: 'A daily or near-daily headache that arises when a person with chronic headache overuses painkillers until the medicine itself becomes the cause, its paradoxical cure being withdrawal of the overused drug.'
  },
  organs: ['brain', 'neuron', 'cortex-map', 'nervous'],
  aliases: ['صداع فرط استخدام المسكّنات', 'صداع الارتداد الدوائي', 'صداع الإفراط في المسكّنات'],
  keywords: { ar: ['صداع يومي', 'إدمان المسكنات', 'صداع الارتداد', 'حلقة المسكن والصداع'], en: ['medication overuse headache', 'rebound headache', 'MOH'] }
});

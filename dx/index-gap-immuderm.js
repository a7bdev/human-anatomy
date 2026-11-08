/* ============================================================
   موسوعة الأمراض — فهرس دفعة سدّ الفجوة: مناعة وجلد وعين
   dx/index-gap-immuderm.js
   ------------------------------------------------------------
   ٥ بطاقات: مناعة ذاتية (٢) · حساسية (١) · جلد (٢)
   الأجسام الطويلة في dx/dx-gap-immuderm.js وتُحمَّل عند فتح البطاقة.
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

DISEASES.push({
  id: 'giant-cell-arteritis', group: 'autoimmune', tier: 'common', emergency: true,
  name: { ar: 'التهاب الشرايين الصدغي (ذو الخلايا العملاقة)', en: 'Giant cell (temporal) arteritis' },
  organs: ['vessels', 'eye', 'immunity'],
  aliases: [],
  short: {
    ar: 'التهاب في جدران الشرايين المتوسطة والكبيرة، خاصة شرايين الصدغ، يصيب من تجاوز الخمسين. يسبّب صداعاً صدغياً جديداً وألم فكّ عند المضغ، وخطره أنه قد يقطع الدم عن العصب البصري فيُفقد النظر فجأة وبلا رجعة.',
    en: 'Inflammation of the walls of medium and large arteries, especially those of the temple, in people over fifty. It causes a new temple headache and jaw pain on chewing, and its danger is that it can cut blood to the optic nerve and take the sight suddenly and irreversibly.'
  },
  keywords: { ar: ['التهاب الشريان الصدغي', 'الخلايا العملاقة', 'صداع الصدغ', 'فقدان البصر المفاجئ'], en: ['temporal arteritis', 'giant cell arteritis', 'GCA', 'jaw claudication'] }
});

DISEASES.push({
  id: 'behcet', group: 'autoimmune', tier: 'common', emergency: false,
  name: { ar: 'داء بهجت (مرض طريق الحرير)', en: 'Behcet disease (Silk Road disease)' },
  organs: ['eye', 'skin', 'vessels', 'lips'],
  aliases: [],
  short: {
    ar: 'مرض التهابي مناعي يتكرّر على نوبات، علامته الأبرز تقرّحات فم مؤلمة تعود مراراً، مع تقرّحات تناسلية والتهاب داخل العين وآفات جلدية. يكثر في شعوب طريق الحرير القديم من الشرق الأوسط إلى شرق آسيا.',
    en: 'A relapsing immune-inflammatory disease whose most prominent sign is painful mouth ulcers that keep returning, with genital ulcers, inflammation inside the eye and skin lesions. It is common in the peoples of the old Silk Road, from the Middle East to East Asia.'
  },
  keywords: { ar: ['بهجت', 'مرض طريق الحرير', 'تقرحات الفم المتكررة', 'التهاب العنبية'], en: ['Behcet', 'Silk Road disease', 'recurrent oral ulcers', 'uveitis'] }
});

DISEASES.push({
  id: 'allergic-conjunctivitis', group: 'allergy', tier: 'common', emergency: false,
  name: { ar: 'التهاب الملتحمة التحسّسي (الرمد الربيعي)', en: 'Allergic conjunctivitis (spring catarrh)' },
  organs: ['eye', 'immunity'],
  aliases: [],
  short: {
    ar: 'تحسّس في الغشاء الشفّاف الذي يكسو بياض العين وباطن الجفن تجاه حبوب اللقاح أو الغبار أو وبر الحيوان، فتحكّ العينان وتدمعان وتحمرّان معاً. حكّة العينين هي علامته المميّزة، ولا يسبّب ألماً ولا نقص إبصار.',
    en: 'An allergy of the clear membrane covering the white of the eye and the inner lid to pollen, dust or animal dander, so both eyes itch, water and redden together. Itching of the eyes is its distinctive sign, and it causes neither pain nor loss of vision.'
  },
  keywords: { ar: ['حساسية العين', 'الرمد الربيعي', 'حكة العين', 'التهاب الملتحمة التحسسي'], en: ['allergic conjunctivitis', 'eye allergy', 'itchy eyes', 'hay fever eyes'] }
});

DISEASES.push({
  id: 'contact-dermatitis', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'التهاب الجلد التماسي', en: 'Contact dermatitis' },
  organs: ['skin', 'immunity', 'skin-receptors'],
  aliases: [],
  short: {
    ar: 'طفح أحمر يحكّ يظهر في موضع ملامسة مادّة مهيّجة أو مثيرة للحساسية، فتنطبع حدوده على شكل ما لامسه: أساور النيكل، المنظّفات، صبغة الشعر، والحنّاء السوداء التي تحوي مادّة قوية التحسيس.',
    en: 'A red itchy rash that appears where an irritant or allergenic substance has touched the skin, its borders taking the shape of what touched it: nickel bracelets, detergents, hair dye, and black henna, which contains a strongly sensitising chemical.'
  },
  keywords: { ar: ['حساسية التلامس', 'حساسية النيكل', 'حساسية الحناء السوداء', 'إكزيما اليدين'], en: ['contact dermatitis', 'nickel allergy', 'PPD black henna', 'hand dermatitis'] }
});

DISEASES.push({
  id: 'moles-abcde', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'الشامات والوحمات ومتى تقلق (ABCDE)', en: 'Moles, naevi and when to worry (ABCDE)' },
  organs: ['skin', 'cell'],
  aliases: [],
  short: {
    ar: 'الشامة تجمّع حميد للخلايا الصبغية، وأغلبها يبقى ثابتاً طوال العمر. المهمّ معرفة شكل الشامة المطمئنة ومتابعتها بقاعدة الأحرف الخمسة، لكشف الشامة التي بدأت تتغيّر مبكّراً. أما الميلانوما فلها بطاقة مستقلّة.',
    en: 'A mole is a benign cluster of pigment cells, and most stay stable for life. What matters is knowing the look of a reassuring mole and following it by the five-letter rule, to catch early any mole that has begun to change. Melanoma itself has its own card.'
  },
  keywords: { ar: ['الشامات', 'الوحمات', 'ABCDE', 'الخال', 'متابعة الشامة'], en: ['moles', 'naevi', 'ABCDE', 'birthmark', 'mole check'] }
});

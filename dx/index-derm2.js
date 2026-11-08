/* ============================================================
   موسوعة الأمراض — فهرس الجلد والشعر والأظافر والفم (الموجة الثانية)
   dx/index-derm2.js
   ------------------------------------------------------------
   ٢٠ بطاقة: الجلد (١١) · الشعر والأظافر (٣) · الفم (٦ منها بطاقة تجمع الجلد والفم)
   الأجسام الطويلة في dx/dx-derm2.js وتُحمَّل عند فتح البطاقة.
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الجلد ---------------- */

DISEASES.push({
  id: 'rosacea', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'الوردية (العُدّ الوردي)', en: 'Rosacea' },
  organs: ['skin', 'vessels', 'skin-receptors'],
  aliases: [],
  short: {
    ar: 'احمرار يثبت في وسط الوجه بعد أن كان يأتي ويروح، تتوسّع فيه الشعيرات الدقيقة وتظهر حبوب تشبه حبّ الشباب بلا رؤوس سوداء.',
    en: 'Redness that settles in the centre of the face after years of coming and going, with visible fine vessels and acne-like spots but no blackheads.'
  },
  keywords: { ar: ['احمرار الوجه', 'العد الوردي', 'توسع الشعيرات', 'الروزاسيا', 'احمرار الخدين'], en: ['rosacea', 'facial redness', 'flushing', 'telangiectasia'] }
});

DISEASES.push({
  id: 'seborrheic-dermatitis', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'التهاب الجلد الدهني والقشرة', en: 'Seborrhoeic dermatitis and dandruff' },
  organs: ['skin', 'hair-follicle'],
  aliases: [],
  short: {
    ar: 'تفاعل الجلد مع فطر يعيش طبيعياً في المناطق الدهنية، فتتقشّر فروة الرأس وجانبا الأنف والحاجبان بقشور صفراء دهنية على أرضية حمراء.',
    en: 'The skin reacts to a yeast that normally lives in oily areas, so the scalp, sides of the nose and eyebrows flake with greasy yellowish scale on a red base.'
  },
  keywords: { ar: ['القشرة', 'قشرة الرأس', 'التهاب الجلد الدهني', 'قشرة الحاجب', 'قشرة الرضيع'], en: ['dandruff', 'seborrhoeic dermatitis', 'cradle cap', 'scalp flaking'] }
});

DISEASES.push({
  id: 'cellulitis', group: 'micro', tier: 'common', emergency: true,
  name: { ar: 'التهاب النسيج الخلوي', en: 'Cellulitis' },
  organs: ['skin', 'lymphatic', 'immunity', 'wound-healing'],
  aliases: ['عدوى الجرح'],
  short: {
    ar: 'عدوى بكتيرية تنزل تحت الجلد وتنتشر أفقياً، فتصير رقعة حمراء ساخنة موجعة تكبر بالساعات ويرافقها ارتفاع حرارة — ولا تحتمل الانتظار.',
    en: 'A bacterial infection that reaches beneath the skin and spreads sideways, producing a hot, tender red patch that enlarges by the hour with fever — and it cannot wait.'
  },
  keywords: { ar: ['التهاب الجلد الجرثومي', 'الحمرة', 'انتشار الاحمرار', 'التهاب اللفافة الناخر', 'خط أحمر صاعد'], en: ['cellulitis', 'erysipelas', 'skin infection', 'necrotising fasciitis'] }
});

DISEASES.push({
  id: 'skin-abscess', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'الدمامل والخرّاجات الجلدية', en: 'Boils and skin abscesses' },
  organs: ['skin', 'hair-follicle', 'immunity'],
  aliases: ['الدُّمَّل (التهاب البصيلة)'],
  short: {
    ar: 'تجمّع صديد داخل جيب تحت الجلد يبدأ من بصيلة شعرة ملتهبة، فيكبر ويصير كتلة حمراء مؤلمة نابضة تليّن في وسطها.',
    en: 'Pus collects in a pocket under the skin, usually starting from an infected hair follicle, growing into a painful throbbing red lump that softens in the middle.'
  },
  keywords: { ar: ['الدمل', 'الخراج', 'الجمرة', 'خراج تحت الجلد', 'حبة صديد'], en: ['boil', 'furuncle', 'carbuncle', 'skin abscess'] }
});

DISEASES.push({
  id: 'folliculitis', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'التهاب الجريبات والشعر الناشب', en: 'Folliculitis and ingrown hair' },
  organs: ['hair-follicle', 'skin'],
  aliases: ['الشعر الناشب'],
  short: {
    ar: 'حبوب صغيرة سطحية عند فتحات الشعر، سببها التهاب البصيلة نفسها أو شعرة انثنت ودخلت الجلد بدل أن تخرج منه.',
    en: 'Small superficial spots at the hair openings, caused either by inflammation of the follicle itself or by a hair that curled back and grew into the skin.'
  },
  keywords: { ar: ['حبوب الحلاقة', 'التهاب بصيلات الشعر', 'حبوب بعد الحلاقة', 'الشعر تحت الجلد'], en: ['folliculitis', 'ingrown hair', 'razor bumps', 'pseudofolliculitis'] }
});

DISEASES.push({
  id: 'scabies', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'الجرب', en: 'Scabies' },
  organs: ['skin', 'skin-receptors', 'immunity'],
  aliases: [],
  short: {
    ar: 'عثّة مجهرية تحفر أنفاقاً في الطبقة السطحية من الجلد، فتشتدّ الحكّة ليلاً حتى تمنع النوم، وتنتقل بالملامسة الطويلة فتصيب البيت كلّه.',
    en: 'A microscopic mite burrows tunnels in the top layer of skin, causing itching that becomes unbearable at night and spreads by prolonged contact through the whole household.'
  },
  keywords: { ar: ['حكة الليل', 'عث الجرب', 'حكة معدية', 'أنفاق الجلد', 'السكابيس'], en: ['scabies', 'mite', 'night itch', 'burrows'] }
});

DISEASES.push({
  id: 'head-lice', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'قمل الرأس', en: 'Head lice' },
  organs: ['hair-follicle', 'skin'],
  aliases: [],
  short: {
    ar: 'حشرة صغيرة تعيش على فروة الرأس وتلصق بيضها بالشعرة قرب الجذر، فتحكّ الفروة خلف الأذنين وفي مؤخرة الرأس، وتنتقل بين الأطفال بتلامس الرؤوس.',
    en: 'A small insect that lives on the scalp and glues its eggs to the hair near the root, causing itching behind the ears and at the nape, and passing between children head to head.'
  },
  keywords: { ar: ['القمل', 'الصئبان', 'قمل المدرسة', 'حكة فروة الرأس', 'بيض القمل'], en: ['head lice', 'nits', 'pediculosis', 'scalp itch'] }
});

DISEASES.push({
  id: 'sunburn', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'حروق الشمس وأذى الشمس المتراكم', en: 'Sunburn and cumulative sun damage' },
  organs: ['skin', 'dna', 'wound-healing'],
  aliases: [],
  short: {
    ar: 'الأشعة فوق البنفسجية تكسر الحمض النووي في خلايا الجلد، فيظهر الاحمرار والألم بعد ساعات — وما لا يُرى منها يتراكم سنوات فيشيخ الجلد ويمهّد للسرطان.',
    en: 'Ultraviolet light breaks DNA in skin cells, so redness and pain appear hours later — and the damage that is not seen accumulates over years, ageing the skin and paving the way to cancer.'
  },
  keywords: { ar: ['حرق الشمس', 'التقرن السفعي', 'بقع الشمس', 'واقي الشمس', 'تجاعيد الشمس'], en: ['sunburn', 'UV damage', 'actinic keratosis', 'photoageing', 'sunscreen'] }
});

DISEASES.push({
  id: 'tinea-versicolor', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'النخالية المبرقشة', en: 'Pityriasis versicolor' },
  organs: ['skin', 'hair-follicle'],
  aliases: [],
  short: {
    ar: 'فطر سطحي يتكاثر في الحرّ والعرق فيترك بقعاً فاتحة أو داكنة على الظهر والصدر والكتفين، سطحها ناعم القشور، وتظهر أوضح ما تكون بعد اسمرار الصيف.',
    en: 'A surface yeast multiplies in heat and sweat, leaving pale or darker patches with fine scale on the back, chest and shoulders, most obvious after the skin tans in summer.'
  },
  keywords: { ar: ['التينيا الملونة', 'بقع بيضاء على الظهر', 'فطر الجلد السطحي', 'النخالية', 'بقع العرق'], en: ['pityriasis versicolor', 'tinea versicolor', 'white patches', 'malassezia'] }
});

DISEASES.push({
  id: 'melasma', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'الكلف وتصبّغات الوجه', en: 'Melasma and facial pigmentation' },
  organs: ['skin', 'wound-healing'],
  aliases: [],
  short: {
    ar: 'بقع بنّية متماثلة على الخدّين والجبهة وفوق الشفة، تنشّطها الشمس والهرمونات، ومعها نوع آخر يعقب كل حبّة أو التهاب فيترك مكانه أثراً داكناً.',
    en: 'Symmetrical brown patches on the cheeks, forehead and upper lip, driven by sun and hormones, alongside a second kind that follows every spot or inflammation and leaves a dark mark behind.'
  },
  keywords: { ar: ['الكلف', 'تصبغ ما بعد الالتهاب', 'بقع داكنة', 'قناع الحمل', 'آثار الحبوب'], en: ['melasma', 'chloasma', 'post-inflammatory hyperpigmentation', 'dark patches'] }
});

DISEASES.push({
  id: 'hyperhidrosis', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'فرط التعرّق', en: 'Hyperhidrosis' },
  organs: ['skin', 'autonomic'],
  aliases: ['فرط التعرق الأولي'],
  short: {
    ar: 'تعرّق يفوق حاجة الجسم للتبريد، يصيب الكفّين والقدمين والإبطين بلا حرّ ولا مجهود، فيبلّل الورق ويُفلت الأشياء ويحرج صاحبه في المصافحة.',
    en: 'Sweating far beyond what the body needs for cooling, affecting palms, soles and armpits without heat or effort, soaking paper, loosening the grip and making a handshake an embarrassment.'
  },
  keywords: { ar: ['تعرق اليدين', 'تعرق الإبط', 'التعرق الزائد', 'رطوبة الكفين', 'تعرق القدمين'], en: ['hyperhidrosis', 'sweaty palms', 'excessive sweating', 'axillary sweating'] }
});

DISEASES.push({
  id: 'diabetic-foot-ulcer', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'قرحة القدم السكّرية', en: 'Diabetic foot ulcer' },
  organs: ['skin-receptors', 'peripheral-nerve', 'foot', 'skin', 'wound-healing', 'vessels'],
  aliases: ['القرحة المزمنة'],
  short: {
    ar: 'جرح في قدم فقدت إحساسها بالسكّري فلا تشتكي، ودمها قليل فلا يلتئم — فيكبر بصمت تحت الجلد الميت حتى يُكتشف متأخراً.',
    en: 'A wound in a foot that diabetes has robbed of sensation so it never complains, with too little blood to heal — so it grows silently under dead skin and is found late.'
  },
  keywords: { ar: ['القدم السكرية', 'قرحة القدم', 'جرح لا يلتئم', 'بتر القدم', 'فقدان الإحساس بالقدم'], en: ['diabetic foot', 'foot ulcer', 'non-healing wound', 'amputation'] }
});

DISEASES.push({
  id: 'pressure-ulcer', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'قرحة الضغط (تقرّح الفراش)', en: 'Pressure ulcer (bedsore)' },
  organs: ['skin', 'skin-receptors', 'wound-healing', 'muscles'],
  aliases: ['قرحة الفراش'],
  short: {
    ar: 'وزن الجسم نفسه يضغط الجلد بين العظم والفراش فيقطع دمه، فيموت النسيج ويتقرّح — وأول علامته احمرار لا يشحب بالضغط عند العصعص أو الكعب.',
    en: 'The body\'s own weight presses skin between bone and mattress until its blood supply is cut, the tissue dies and breaks down — the first sign being redness over the tailbone or heel that does not blanch.'
  },
  keywords: { ar: ['تقرح الفراش', 'قرحة السرير', 'تقرحات الاستلقاء', 'قرحة العجز', 'قرحة الكعب'], en: ['pressure ulcer', 'bedsore', 'pressure sore', 'decubitus ulcer'] }
});

/* ---------------- الشعر والأظافر ---------------- */

DISEASES.push({
  id: 'hirsutism', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'الشعرانية (زيادة الشعر عند النساء)', en: 'Hirsutism' },
  organs: ['hair-follicle', 'skin', 'ovary', 'adrenal'],
  aliases: [],
  short: {
    ar: 'شعر خشن داكن ينبت عند المرأة في مواضع تخصّ الرجال عادةً — الذقن وأعلى الشفة والصدر والبطن — استجابةً لهرمونات ذكرية زائدة أو لبصيلات شديدة الحساسية لها.',
    en: 'Coarse dark hair grows in a woman in the areas usually male — chin, upper lip, chest and abdomen — in response to excess male hormones or to follicles unusually sensitive to them.'
  },
  keywords: { ar: ['زيادة شعر الوجه', 'شعر الذقن عند المرأة', 'الشعرانية', 'شعر زائد', 'تكيس المبايض والشعر'], en: ['hirsutism', 'facial hair in women', 'excess hair', 'androgen excess'] }
});

DISEASES.push({
  id: 'ingrown-nail', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'الظفر الناشب والداحس', en: 'Ingrown toenail and paronychia' },
  organs: ['nail', 'skin', 'foot'],
  aliases: ['الظفر الناشب', 'الداحس (التهاب الطية)'],
  short: {
    ar: 'حافّة الظفر تنغرس في اللحم المجاور فتجرحه، فيلتهب جانب الإصبع ويحمرّ ويؤلم عند أقلّ ضغط، وقد يتجمّع فيه صديد.',
    en: 'The edge of the nail digs into the flesh beside it and cuts it, so the side of the toe becomes red, inflamed and painful at the lightest pressure, sometimes filling with pus.'
  },
  keywords: { ar: ['ظفر ناشب', 'التهاب حول الظفر', 'الداحس', 'ألم إصبع القدم الكبير', 'صديد حول الظفر'], en: ['ingrown toenail', 'onychocryptosis', 'paronychia', 'nail fold infection'] }
});

DISEASES.push({
  id: 'nail-changes', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'تغيّرات الأظافر الدالّة على مرض', en: 'Nail changes that signal disease' },
  organs: ['nail', 'skin', 'blood'],
  aliases: ['خطوط بو', 'الورم الدموي تحت الظفر'],
  short: {
    ar: 'الظفر سجلّ بطيء لما مرّ بالجسم: خطوط عرضية تؤرّخ مرضاً، وتقعّر يشي بنقص الحديد، وتعجّر يشي بالرئة والقلب، وخطّ داكن واحد قد يكون شيئاً خطيراً.',
    en: 'The nail is a slow record of what the body has been through: transverse lines date an illness, spooning hints at iron deficiency, clubbing at the lungs or heart, and a single dark streak may be something serious.'
  },
  keywords: { ar: ['خطوط الأظافر', 'تعجر الأصابع', 'خط أسود تحت الظفر', 'تقعر الظفر', 'شحوب الأظافر'], en: ['nail changes', 'clubbing', 'Beau lines', 'koilonychia', 'melanonychia'] }
});

/* ---------------- الفم ---------------- */

DISEASES.push({
  id: 'oral-thrush', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'فطريات الفم (القلاع)', en: 'Oral thrush (oral candidiasis)' },
  organs: ['tongue', 'lips', 'salivary-glands', 'immunity'],
  aliases: ['القلاع الفموي', 'التهاب زاويتَي الفم'],
  short: {
    ar: 'خميرة تعيش في الفم بلا أذى تتكاثر حين يختلّ توازنه، فتظهر طبقة بيضاء كاللبن على اللسان والخدّ تُكشط فتترك تحتها أرضية حمراء.',
    en: 'A yeast that lives harmlessly in the mouth multiplies when its balance is disturbed, forming a milky white coating on the tongue and cheek that wipes off to leave a raw red base.'
  },
  keywords: { ar: ['السلاق', 'الكانديدا في الفم', 'بقع بيضاء في الفم', 'فطريات اللسان', 'تشقق زاوية الفم'], en: ['oral thrush', 'candidiasis', 'white tongue', 'angular cheilitis'] }
});

DISEASES.push({
  id: 'bruxism', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'صرير الأسنان (طحن الأسنان)', en: 'Bruxism (teeth grinding)' },
  organs: ['teeth', 'tmj', 'facial-muscles'],
  aliases: ['صرير الأسنان'],
  short: {
    ar: 'طحن الأسنان أو إطباقها بقوّة في النوم أو في التركيز، فتتآكل أسطحها ويصبح الفكّ متعباً في الصباح ويصدع الرأس — وصاحبه آخر من يعلم.',
    en: 'Grinding or hard clenching of the teeth in sleep or in concentration, wearing their surfaces down, leaving the jaw tired in the morning and the head aching — and the person is the last to know.'
  },
  keywords: { ar: ['طحن الأسنان', 'جز الأسنان', 'شد الفك', 'تآكل الأسنان', 'ألم الفك صباحاً'], en: ['bruxism', 'teeth grinding', 'clenching', 'tooth wear'] }
});

DISEASES.push({
  id: 'impacted-wisdom-tooth', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'ضرس العقل المنطمر', en: 'Impacted wisdom tooth' },
  organs: ['teeth', 'tmj', 'pharynx'],
  aliases: ['انطمار السن'],
  short: {
    ar: 'آخر ضرس يبزغ لا يجد مكاناً كافياً في الفكّ، فيعلق مائلاً تحت اللثة أو نصفه خارج، فيلتهب ما حوله ويؤذي الضرس المجاور.',
    en: 'The last tooth to erupt finds no room left in the jaw, so it lodges tilted under the gum or half out, the tissue around it becomes infected and the neighbouring tooth is damaged.'
  },
  keywords: { ar: ['ضرس العقل', 'التهاب حول التاج', 'خلع ضرس العقل', 'ألم آخر الفك', 'ضرس مائل'], en: ['wisdom tooth', 'third molar', 'impaction', 'pericoronitis'] }
});

DISEASES.push({
  id: 'lichen-planus', group: 'micro', tier: 'rare', emergency: false,
  name: { ar: 'الحزاز المسطّح', en: 'Lichen planus' },
  organs: ['skin', 'tongue', 'nail', 'immunity'],
  aliases: [],
  short: {
    ar: 'هجوم مناعي على الطبقة القاعدية من الجلد والأغشية، فتظهر حطاطات بنفسجية مسطّحة شديدة الحكّة على الرسغين والساقين، وشبكة بيضاء دقيقة داخل الخدّ.',
    en: 'An immune attack on the basal layer of skin and mucous membranes produces flat violet, intensely itchy bumps on the wrists and shins, and a fine white lace inside the cheek.'
  },
  keywords: { ar: ['الحزاز', 'حزاز الفم', 'بقع بيضاء شبكية في الخد', 'حكة الرسغ', 'حطاطات بنفسجية'], en: ['lichen planus', 'oral lichen planus', 'Wickham striae'] }
});

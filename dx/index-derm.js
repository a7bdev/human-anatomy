/* ============================================================
   موسوعة الأمراض — فهرس الجلد والفم والأسنان
   dx/index-derm.js
   ------------------------------------------------------------
   ٢٠ بطاقة: الجلد وملحقاته (١١) · الفم والأسنان (٩)
   الأجسام الطويلة في dx/dx-derm.js وتُحمَّل عند فتح البطاقة.
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الجلد وملحقاته ---------------- */

DISEASES.push({
  id: 'acne', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'حبّ الشباب', en: 'Acne' },
  organs: ['skin', 'hair-follicle'],
  aliases: ['حبّ الشباب'],
  short: {
    ar: 'الدهن وخلايا الجلد الميتة تسدّ فتحة بصيلة الشعرة، فتتكاثر البكتيريا داخلها ويلتهب الموضع، فتظهر الرؤوس والبثور في الوجه والصدر والظهر.',
    en: 'Oil and dead skin cells block the opening of a hair follicle, bacteria multiply inside it and the spot becomes inflamed, producing comedones and pimples on the face, chest and back.'
  },
  keywords: { ar: ['البثور', 'الرؤوس السوداء', 'العدّ الشائع', 'حبوب الوجه'], en: ['acne', 'pimples', 'blackheads', 'spots'] }
});

DISEASES.push({
  id: 'eczema', group: 'allergy', tier: 'common', emergency: false,
  name: { ar: 'الإكزيما (التهاب الجلد التأتّبي)', en: 'Eczema (atopic dermatitis)' },
  organs: ['skin', 'immunity', 'skin-receptors'],
  aliases: ['الإكزيما'],
  short: {
    ar: 'حاجز الجلد ضعيف يفقد الماء ويسمح للمهيّجات بالدخول، فيجفّ الجلد ويحمرّ ويحكّ حكّة شديدة في نوبات تهدأ وتعود.',
    en: 'A weak skin barrier loses water and lets irritants in, so the skin becomes dry, red and intensely itchy in flares that settle and return.'
  },
  keywords: { ar: ['حساسية الجلد', 'التهاب الجلد', 'الأكزيما', 'حكة الجلد'], en: ['eczema', 'atopic dermatitis', 'itchy skin'] }
});

DISEASES.push({
  id: 'psoriasis', group: 'autoimmune', tier: 'common', emergency: false,
  name: { ar: 'الصدفية', en: 'Psoriasis' },
  organs: ['skin', 'immunity', 'nail'],
  aliases: ['الصدفية'],
  short: {
    ar: 'الجهاز المناعي يدفع الجلد إلى تجديد خلاياه أسرع بكثير مما يتخلّص منها، فتتراكم لويحات حمراء مغطّاة بقشور فضّية سميكة.',
    en: 'The immune system drives the skin to renew its cells far faster than it can shed them, so red plaques covered by thick silvery scale build up.'
  },
  keywords: { ar: ['الصداف', 'قشور الجلد', 'لويحات الجلد'], en: ['psoriasis', 'plaque psoriasis', 'scaly skin'] }
});

DISEASES.push({
  id: 'urticaria', group: 'allergy', tier: 'common', emergency: false,
  name: { ar: 'الشرى (الأرتيكاريا)', en: 'Urticaria (hives)' },
  organs: ['skin', 'immunity', 'vessels'],
  aliases: [],
  short: {
    ar: 'انتفاخات حمراء بارزة تظهر فجأة وتحكّ بشدّة، تتنقّل من موضع إلى آخر، وتزول كل واحدة منها خلال ساعات بلا أن تترك أثراً.',
    en: 'Raised red weals that appear suddenly and itch fiercely, move from place to place, and each one fades within hours leaving no mark.'
  },
  keywords: { ar: ['الأرتكاريا', 'طفح الحساسية', 'حساسية جلدية', 'شرية'], en: ['hives', 'urticaria', 'weals', 'allergic rash'] }
});

DISEASES.push({
  id: 'skin-cancer', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'سرطان الجلد', en: 'Skin cancer' },
  organs: ['skin', 'dna', 'cell', 'lymph-node'],
  aliases: ['سرطان الجلد'],
  short: {
    ar: 'نمو غير منضبط لخلايا الجلد بعد سنوات من أذى الشمس. أغلبه بطيء موضعي يُشفى بالاستئصال، وأخطره الميلانوما التي تبدأ كشامة تتغيّر.',
    en: 'Uncontrolled growth of skin cells after years of sun damage. Most types are slow and local and are cured by removal; the dangerous one is melanoma, which begins as a mole that changes.'
  },
  keywords: { ar: ['الميلانوما', 'الشامة الخبيثة', 'ورم الجلد', 'ABCDE'], en: ['skin cancer', 'melanoma', 'basal cell carcinoma', 'ABCDE'] }
});

DISEASES.push({
  id: 'vitiligo', group: 'autoimmune', tier: 'common', emergency: false,
  name: { ar: 'البهاق', en: 'Vitiligo' },
  organs: ['skin', 'immunity', 'cell'],
  aliases: [],
  short: {
    ar: 'الخلايا الصانعة للصبغة تُفقد من بقع محدّدة من الجلد فتصير بيضاء ناصعة بحدود واضحة، بلا ألم ولا حكّة ولا عدوى تنتقل.',
    en: 'The pigment-making cells are lost from defined patches of skin, which turn milk-white with clear borders, without pain, itching or any risk of contagion.'
  },
  keywords: { ar: ['بقع بيضاء', 'البرص', 'فقدان الصبغة'], en: ['vitiligo', 'white patches', 'depigmentation'] }
});

DISEASES.push({
  id: 'hair-loss', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'الثعلبة وتساقط الشعر', en: 'Alopecia and hair loss' },
  organs: ['hair-follicle', 'skin', 'immunity'],
  aliases: ['الثعلبة البقعية', 'الصلع الوراثي'],
  short: {
    ar: 'التساقط أنواع لا نوع واحد: صلع وراثي يتراجع فيه الشعر ببطء، وثعلبة بقعية تفرّغ دائرة ملساء فجأة، وتساقط منتشر يتبع شدّة أو مرضاً أو نقص حديد.',
    en: 'Hair loss is not one condition: pattern baldness recedes slowly, alopecia areata empties a smooth circle suddenly, and diffuse shedding follows stress, illness or iron deficiency.'
  },
  keywords: { ar: ['تساقط الشعر', 'الصلع', 'الثعلبة', 'فراغات الشعر'], en: ['hair loss', 'alopecia areata', 'baldness', 'shedding'] }
});

DISEASES.push({
  id: 'nail-fungus', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'فطريات الأظافر', en: 'Nail fungus (onychomycosis)' },
  organs: ['nail', 'skin'],
  aliases: ['الفطر الظفري'],
  short: {
    ar: 'فطر يستوطن صفيحة الظفر فيصفرّ لونه ويثخن ويتفتّت من طرفه وينفصل عن قاعدته، ببطء شديد وبلا ألم غالباً، وأكثره في أظافر القدم.',
    en: 'A fungus settles in the nail plate, which yellows, thickens, crumbles at its free edge and lifts from its bed, very slowly and usually painlessly, most often in the toenails.'
  },
  keywords: { ar: ['فطر الظفر', 'تكسر الأظافر', 'اصفرار الأظافر'], en: ['onychomycosis', 'nail fungus', 'thick nails'] }
});

DISEASES.push({
  id: 'athletes-foot', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'سعفة القدم (القدم الرياضي)', en: 'Athlete\'s foot (tinea pedis)' },
  organs: ['skin', 'foot', 'nail'],
  aliases: [],
  short: {
    ar: 'فطر يعيش في جلد القدم الرطب وبين الأصابع، فيقشّره ويشقّقه ويسبّب حكّة، وينتقل بسهولة في أرضيات الحمّامات والمسابح والأحذية المشتركة.',
    en: 'A fungus that lives in the moist skin of the foot and between the toes, making it peel, crack and itch; it spreads easily on bathroom and pool floors and in shared shoes.'
  },
  keywords: { ar: ['فطريات القدم', 'حكة بين الأصابع', 'تشقق القدم'], en: ['athletes foot', 'tinea pedis', 'foot fungus'] }
});

DISEASES.push({
  id: 'burns', group: 'micro', tier: 'common', emergency: true,
  name: { ar: 'الحروق', en: 'Burns' },
  organs: ['skin', 'skin-receptors', 'wound-healing'],
  aliases: [],
  short: {
    ar: 'أذى للجلد من حرارة أو سائل مغلي أو مادّة كيماوية أو كهرباء. خطورته تُقاس بعمقه ومساحته وموضعه، لا بشدّة الألم — وأعمق الحروق أقلّها ألماً.',
    en: 'Damage to the skin from heat, scalding liquid, a chemical or electricity. Its seriousness is judged by depth, area and site, not by how much it hurts, and the deepest burns hurt least.'
  },
  keywords: { ar: ['حرق', 'السمط', 'الإسعاف الأولي للحروق', 'درجات الحرق'], en: ['burns', 'scald', 'burn first aid', 'burn degrees'] }
});

DISEASES.push({
  id: 'keloid', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'الندبة الجدرية (الجدرة)', en: 'Keloid scar' },
  organs: ['wound-healing', 'skin'],
  aliases: ['الجدرة', 'الندبة الضخامية'],
  short: {
    ar: 'نسيج ندبي يواصل النموّ بعد أن يلتئم الجرح فيتجاوز حدوده الأصلية، ويصير كتلة صلبة لامعة داكنة قد تحكّ وتشدّ وتؤلم.',
    en: 'Scar tissue that keeps growing after the wound has healed and spreads beyond its original edges, becoming a firm shiny raised lump that may itch, pull and hurt.'
  },
  keywords: { ar: ['الجدرة', 'ندبة متضخمة', 'اللحم الزائد في الجرح'], en: ['keloid', 'hypertrophic scar', 'raised scar'] }
});

/* ---------------- الفم والأسنان ---------------- */

DISEASES.push({
  id: 'tooth-decay', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'تسوّس الأسنان', en: 'Tooth decay (dental caries)' },
  organs: ['teeth', 'child-teeth', 'salivary-glands'],
  aliases: ['التسوّس (النخر)', 'تسوّس الطفولة المبكّر'],
  short: {
    ar: 'بكتيريا اللويحة تحوّل السكّر إلى حمض يذيب معادن المينا، فتتكوّن نقطة بيضاء ثم تجويف يتّسع نحو داخل السنّ حتى يبلغ العصب.',
    en: 'Plaque bacteria turn sugar into acid that dissolves the minerals of the enamel; a white spot forms, then a cavity that widens inward until it reaches the nerve.'
  },
  keywords: { ar: ['النخر', 'تجويف السن', 'خرم في السن', 'ألم الأسنان'], en: ['tooth decay', 'caries', 'cavity'] }
});

DISEASES.push({
  id: 'gingivitis', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'التهاب اللثة', en: 'Gingivitis' },
  organs: ['teeth', 'skull'],
  aliases: ['التهاب اللثة'],
  short: {
    ar: 'التهاب سطحي في اللثة سببه تراكم اللويحة الجرثومية عند حافة السنّ، فتحمرّ وتنتفخ وتنزف عند التفريش — ويزول أثره كاملاً إذا عولج مبكّراً.',
    en: 'Surface inflammation of the gums caused by plaque gathering at the tooth margin: they redden, swell and bleed on brushing, and it reverses completely if treated early.'
  },
  keywords: { ar: ['نزف اللثة', 'انتفاخ اللثة', 'دم عند التفريش'], en: ['gingivitis', 'bleeding gums', 'gum inflammation'] }
});

DISEASES.push({
  id: 'periodontitis', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'التهاب دواعم السن', en: 'Periodontitis' },
  organs: ['teeth', 'skull'],
  aliases: ['التهاب دواعم السن'],
  short: {
    ar: 'التهاب امتدّ من اللثة إلى العظم والألياف التي تحمل السنّ فأخذ يذيبها بلا ألم غالباً، وهو السبب الأول لفقدان الأسنان عند الكبار.',
    en: 'Inflammation that has spread from the gum to the bone and fibres holding the tooth and is dissolving them, usually without pain; it is the leading cause of tooth loss in adults.'
  },
  keywords: { ar: ['أمراض اللثة', 'تخلخل الأسنان', 'انحسار اللثة', 'جيوب اللثة'], en: ['periodontitis', 'gum disease', 'loose teeth', 'gum pockets'] }
});

DISEASES.push({
  id: 'dental-abscess', group: 'head', tier: 'common', emergency: true,
  name: { ar: 'خرّاج السن', en: 'Dental abscess' },
  organs: ['teeth', 'skull', 'lymph-node'],
  aliases: ['التهاب اللبّ والخرّاج'],
  short: {
    ar: 'تجمّع صديدي من عدوى بلغت لبّ السنّ أو ما حوله، يسبّب ألماً نابضاً وتورّماً في الوجه، وقد ينتشر إلى أرضية الفم والرقبة فيصير خطراً.',
    en: 'A collection of pus from infection that has reached the pulp of the tooth or the tissue around it, causing throbbing pain and facial swelling; it can spread to the floor of the mouth and neck and become dangerous.'
  },
  keywords: { ar: ['صديد الأسنان', 'تورم الوجه', 'ألم نابض في السن', 'التهاب اللب'], en: ['dental abscess', 'tooth infection', 'facial swelling', 'pulpitis'] }
});

DISEASES.push({
  id: 'tooth-sensitivity', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'حساسية الأسنان', en: 'Tooth sensitivity' },
  organs: ['teeth', 'salivary-glands'],
  aliases: ['الحساسية وتآكل المينا'],
  short: {
    ar: 'ألم قصير حادّ يضرب السنّ عند البارد أو الحلو ثم يزول سريعاً، لأن العاج انكشف تحت المينا المتآكلة أو اللثة المنحسرة فصار يوصل الإحساس إلى العصب.',
    en: 'A short sharp pain that stabs the tooth with cold or sweet and fades at once, because dentine has been exposed under worn enamel or a receded gum and now carries the sensation to the nerve.'
  },
  keywords: { ar: ['ألم البارد', 'تآكل المينا', 'انحسار اللثة', 'ضرس حساس'], en: ['tooth sensitivity', 'dentine hypersensitivity', 'enamel erosion'] }
});

DISEASES.push({
  id: 'mouth-ulcers', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'تقرّحات الفم القلاعية', en: 'Mouth ulcers (aphthous ulcers)' },
  organs: ['lips', 'tongue', 'immunity'],
  aliases: [],
  short: {
    ar: 'قرحة صغيرة مؤلمة تظهر على البطانة الرخوة داخل الفم، بيضاء الوسط محمرّة الحافة، تلتئم وحدها خلال أيام ثم تعود من حين لآخر.',
    en: 'A small painful ulcer on the soft lining inside the mouth, white in the centre with a red rim, which heals on its own within days and then returns from time to time.'
  },
  keywords: { ar: ['قرح الفم', 'القلاع', 'حبة في الفم', 'قرحة اللسان'], en: ['mouth ulcer', 'aphthous ulcer', 'canker sore'] }
});

DISEASES.push({
  id: 'dry-mouth', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'جفاف الفم', en: 'Dry mouth (xerostomia)' },
  organs: ['salivary-glands', 'tongue', 'teeth'],
  aliases: ['جفاف الفم'],
  short: {
    ar: 'نقص اللعاب فيجفّ الفم ويصعب البلع والكلام وتذوّق الطعام، ويفقد الفم حمايته الطبيعية فيكثر فيه التسوّس والالتهاب والفطر.',
    en: 'Too little saliva leaves the mouth dry and makes swallowing, speaking and tasting harder; the mouth loses its natural protection, so decay, inflammation and thrush become common.'
  },
  keywords: { ar: ['قلة اللعاب', 'الفم الجاف', 'صعوبة البلع'], en: ['dry mouth', 'xerostomia', 'low saliva'] }
});

DISEASES.push({
  id: 'tonsillitis', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'التهاب اللوزتين', en: 'Tonsillitis' },
  organs: ['pharynx', 'lymphatic', 'lymph-node', 'immunity'],
  aliases: ['التهاب اللوزتين'],
  short: {
    ar: 'التهاب اللوزتين في مؤخّرة الحلق، من فيروس في أغلب الحالات ومن بكتيريا في أقلّها، فيؤلم البلع وتتضخّمان وقد تظهر عليهما بقع بيضاء.',
    en: 'Inflammation of the tonsils at the back of the throat, viral in most cases and bacterial in a minority; swallowing hurts, the tonsils enlarge and white patches may appear on them.'
  },
  keywords: { ar: ['التهاب الحلق', 'ألم البلع', 'اللوز', 'صديد اللوزتين'], en: ['tonsillitis', 'sore throat', 'strep throat'] }
});

DISEASES.push({
  id: 'halitosis', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'رائحة الفم الكريهة', en: 'Bad breath (halitosis)' },
  organs: ['teeth', 'tongue', 'salivary-glands', 'pharynx'],
  aliases: [],
  short: {
    ar: 'رائحة مزعجة مصدرها في الغالب الأعمّ داخل الفم نفسه: بكتيريا تحلّل بقايا الطعام على ظهر اللسان وبين الأسنان، لا من المعدة كما يُظنّ.',
    en: 'An unpleasant smell that in the great majority of cases arises inside the mouth itself: bacteria breaking down food debris on the back of the tongue and between the teeth, not from the stomach as people assume.'
  },
  keywords: { ar: ['بخر الفم', 'نفس كريه', 'رائحة النفس'], en: ['bad breath', 'halitosis', 'oral malodour'] }
});

/* ============================================================
   موسوعة الأدوية — فهرس دفعة الجلد الأولى (derm1)
   rx/index-derm1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   الأدوية العشرة كلها من قائمة منظمة الصحة للأدوية الأساسية،
   الطبعة الرابعة والعشرين، قسم «أدوية الجلد» (rx/EML-2025.json، وسم derm1).

   ملاحظة على الفصائل: فصائل الجلد الموضعية (مقشّرات · مطرّيات ·
   قاتلات الجرب · واقيات الشمس · نظائر فيتامين د) غير معرّفة في
   DRUG_CLASSES داخل drugs.js، وdrugs.js ممنوع تعديله في هذه الدفعة.
   فتُضاف أسماؤها من هنا إضافةً لا استبدالاً (drugs.js يُحمَّل قبل هذا
   الملف)، حتى تُعرض بالعربية وتقع في مجموعة «الجلد» لا «أخرى».
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* أسماء فصائل هذه الدفعة — تُضاف ولا تستبدل شيئاً موجوداً */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    antiacne:            { ar: 'أدوية حبّ الشباب الموضعية', en: 'Topical acne treatments' },
    keratolytic:         { ar: 'مقشّرات ومذيبات الطبقة القرنية', en: 'Keratolytics' },
    antipsoriatic:       { ar: 'أدوية الصدفية الموضعية', en: 'Topical antipsoriatics' },
    'vitamin-d-analogue':{ ar: 'نظائر فيتامين د الموضعية', en: 'Topical vitamin D analogues' },
    antiwart:            { ar: 'مذيبات الثآليل', en: 'Wart treatments' },
    emollient:           { ar: 'مطرّيات ومرطّبات', en: 'Emollients and moisturisers' },
    sunscreen:           { ar: 'واقيات الشمس', en: 'Sunscreens' },
    scabicide:           { ar: 'قاتلات الجرب والقمل', en: 'Scabicides and pediculicides' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'skin'; } }
  }
})();

DRUGS.push({
  id: 'benzoyl-peroxide',
  cls: 'antiacne',
  otc: true,
  alert: false,
  name:  { ar: 'بيروكسيد البنزويل', en: 'Benzoyl peroxide' },
  short: {
    ar: 'أشهر علاج موضعي لحبّ الشباب يُصرف بلا وصفة. يقتل بكتيريا الحبّ بالأكسدة لا بالمضاد الحيوي، فلا تكتسب البكتيريا مقاومة ضدّه. يجفّف الجلد ويقصّر لون الملابس والمناشف.',
    en: 'The best-known over-the-counter topical treatment for acne. It kills the acne bacterium by oxidation rather than as an antibiotic, so bacteria do not become resistant to it. It dries the skin and bleaches clothes and towels.'
  },
  brands: ['بنزاك', 'أكنيسايد', 'إبيديو', 'ديواك', 'بانوكسيل'],
  uses: ['acne'],
  keywords: { ar: ['حبّ الشباب', 'بيروكسيد', 'مقشّر', 'بثور'], en: ['BPO', 'acne', 'benzac', 'acnecide'] }
});

DRUGS.push({
  id: 'salicylic-acid',
  cls: 'keratolytic',
  otc: true,
  alert: true,
  name:  { ar: 'حمض الساليسيليك', en: 'Salicylic acid (topical)' },
  short: {
    ar: 'مقشّر موضعي يذيب الغراء الذي يمسك الخلايا الميتة، فيُنزل القشرة ويفتح المسامّ. يدخل في علاج حبّ الشباب والصدفية والقشرة والثآليل والمسامير. وامتصاصه من مساحة واسعة قد يسمّم.',
    en: 'A topical keratolytic that dissolves the glue holding dead cells together, so scale sheds and pores unblock. It is used in acne, psoriasis, dandruff, warts and calluses. Absorption from a wide area can cause poisoning.'
  },
  brands: ['كليراسيل', 'دوفيلم', 'ستريدكس', 'ساليسيليك'],
  uses: ['acne', 'psoriasis', 'seborrheic-dermatitis', 'hpv-warts', 'athletes-foot'],
  keywords: { ar: ['مقشّر', 'ساليسيليك', 'قشرة', 'ثآليل', 'مسامير'], en: ['BHA', 'keratolytic', 'wart', 'dandruff'] }
});

DRUGS.push({
  id: 'coal-tar',
  cls: 'antipsoriatic',
  otc: true,
  alert: false,
  name:  { ar: 'قطران الفحم', en: 'Coal tar' },
  short: {
    ar: 'من أقدم علاجات الصدفية وقشرة الرأس وما زال يعمل: يبطّئ تكاثر خلايا الجلد ويهدّئ الالتهاب. رائحته وتلطيخه للملابس هما سبب تركه غالباً، ويزيد ميل الجلد للاحتراق بالشمس.',
    en: 'One of the oldest treatments for psoriasis and dandruff, and it still works: it slows skin cell proliferation and calms inflammation. Its smell and staining of clothes are the usual reason people abandon it, and it makes skin burn more easily in the sun.'
  },
  brands: ['تي جل', 'بولي تار', 'إكزوريكس', 'نيوتار'],
  uses: ['psoriasis', 'seborrheic-dermatitis'],
  keywords: { ar: ['قطران', 'صدفية', 'قشرة الرأس', 'شامبو طبي'], en: ['tar', 'psoriasis', 'dandruff', 'T-gel'] }
});

DRUGS.push({
  id: 'calcipotriol',
  cls: 'vitamin-d-analogue',
  otc: false,
  alert: true,
  name:  { ar: 'الكالسيبوتريول', en: 'Calcipotriol (Calcipotriene)' },
  short: {
    ar: 'نظير صناعي لفيتامين د يُدهن على لويحات الصدفية فيبطّئ إسراع خلايا الجلد. للنشرة سقف أسبوعي أقصى لا يُتجاوز، لأن تجاوزه يرفع كالسيوم الدم. ولا يُوضع على الوجه.',
    en: 'A synthetic vitamin D analogue rubbed onto psoriasis plaques to slow the runaway growth of skin cells. The leaflet sets a maximum weekly amount that must not be exceeded, because going beyond it raises blood calcium. It is not applied to the face.'
  },
  brands: ['دايفونكس', 'دوفوبيت', 'إنستيلار', 'زايكلارا'],
  uses: ['psoriasis'],
  keywords: { ar: ['صدفية', 'فيتامين د', 'كالسيبوتريول', 'لويحات'], en: ['calcipotriene', 'daivonex', 'psoriasis', 'vitamin D'] }
});

DRUGS.push({
  id: 'podophyllum-resin',
  cls: 'antiwart',
  otc: false,
  alert: true,
  name:  { ar: 'صمغ البودوفيلوم', en: 'Podophyllum resin (Podophyllin)' },
  short: {
    ar: 'صمغ نباتي يوقف انقسام خلايا الثؤلول فيتنخّر ويسقط، ويضعه الطبيب في العيادة ويغسله بعد ساعات. سُجّل تسمّم عامّ شديد حين تُرك على مساحة واسعة بلا غسل، وهو ممنوع في الحمل.',
    en: 'A plant resin that halts division in wart cells so the wart dies and sloughs off. A clinician applies it and washes it off after a few hours. Severe systemic poisoning has been reported when it was left on a wide area unwashed, and it is forbidden in pregnancy.'
  },
  brands: ['بودوفيلين', 'وارتك', 'كونديلوكس'],
  uses: ['hpv-warts'],
  keywords: { ar: ['ثآليل', 'بودوفيلين', 'بودوفيلوتوكسين', 'الورم الحليمي'], en: ['podophyllin', 'podofilox', 'podophyllotoxin', 'genital warts'] }
});

DRUGS.push({
  id: 'urea',
  cls: 'keratolytic',
  otc: true,
  alert: false,
  name:  { ar: 'اليوريا', en: 'Urea (topical)' },
  short: {
    ar: 'مادة يصنعها الجلد نفسه، وتُصنع دواءً: بتراكيز خفيفة ترطّب وتجذب الماء، وبتراكيز عالية تذيب الجلد المتقرّن السميك وتليّن الظفر التالف. مفيدة في الكعب المتشقّق والصدفية والإكزيما.',
    en: 'A substance the skin itself makes, also made into a medicine: at low strengths it moisturises and draws in water, at high strengths it dissolves thick hardened skin and softens a damaged nail. Useful in cracked heels, psoriasis and eczema.'
  },
  brands: ['إكسيبيال', 'يوسيرين', 'كيراسال', 'يوريدين'],
  uses: ['eczema', 'psoriasis', 'athletes-foot', 'nail-fungus'],
  keywords: { ar: ['يوريا', 'ترطيب', 'تشقّق الكعب', 'جلد سميك'], en: ['urea', 'keratolytic', 'emollient', 'hyperkeratosis'] }
});

DRUGS.push({
  id: 'glycerol',
  cls: 'emollient',
  otc: true,
  alert: false,
  name:  { ar: 'الجليسرين', en: 'Glycerol (Glycerin)' },
  short: {
    ar: 'المرطّب الأصل: سائل لزج يسحب الماء إلى الطبقة القرنية ويمسكه فيها، وهو المادة الفعّالة المعتمدة في واقيات الجلد وأساس أغلب المطرّيات. تحذير مهم: بقاياه على الملابس قابلة للاشتعال.',
    en: 'The original moisturiser: a syrupy liquid that pulls water into the horny layer and holds it there. It is an approved active ingredient in skin protectants and the base of most emollients. Important warning: its residue on clothing is flammable.'
  },
  brands: ['جليسرين طبي', 'سيتافيل', 'سيباميد', 'سيكابلاست'],
  uses: ['eczema', 'psoriasis'],
  keywords: { ar: ['مرطّب', 'مطرّي', 'جليسرين', 'جفاف الجلد'], en: ['glycerin', 'emollient', 'humectant', 'moisturiser'] }
});

DRUGS.push({
  id: 'sunscreen-broad-spectrum',
  cls: 'sunscreen',
  otc: true,
  alert: false,
  name:  { ar: 'واقي الشمس واسع الطيف', en: 'Sunscreen, broad-spectrum' },
  short: {
    ar: 'دواء يُباع بلا وصفة لا مستحضر تجميل. «واسع الطيف» يعني أنه اجتاز فحصاً يثبت حمايته من الأشعة الطويلة كما من القصيرة، وهو وحده مع عامل حماية كافٍ ما يُسمح له بادّعاء تقليل خطر سرطان الجلد.',
    en: 'A medicine sold without prescription, not a cosmetic. "Broad spectrum" means it passed a test proving it protects against long-wave rays as well as short. Only such a product, at a sufficient protection factor, is allowed to claim it reduces skin cancer risk.'
  },
  brands: ['أنتيليوس', 'فوتوديرم', 'آفين صن', 'نيوتروجينا', 'يوسيرين صن'],
  uses: ['sunburn', 'skin-cancer', 'melasma'],
  keywords: { ar: ['واقي شمس', 'حروق الشمس', 'كلف', 'عامل حماية'], en: ['sunscreen', 'SPF', 'broad spectrum', 'UVA', 'UVB'] }
});

DRUGS.push({
  id: 'permethrin',
  cls: 'scabicide',
  otc: false,
  alert: false,
  name:  { ar: 'البيرميثرين', en: 'Permethrin' },
  short: {
    ar: 'الخيار الأول لعلاج الجرب وقمل الرأس: يشلّ العصب في العثّة والقملة فتموت، ولا يُمتصّ من جلد الإنسان إلا قليلاً جداً. الحكّة بعده أسابيع لا تعني فشله، وأهل البيت كلهم يُعالجون معاً.',
    en: 'The first-line treatment for scabies and head lice: it paralyses the nerve of the mite and the louse so they die, and very little of it is absorbed through human skin. Itching for weeks afterwards does not mean it failed, and the whole household is treated together.'
  },
  brands: ['إليمايت', 'نيكس', 'لايكلير', 'كويلادا'],
  uses: ['scabies', 'head-lice'],
  keywords: { ar: ['جرب', 'قمل', 'بيرميثرين', 'حكّة ليلية'], en: ['permethrin', 'scabies', 'head lice', 'pyrethroid'] }
});

DRUGS.push({
  id: 'benzyl-benzoate',
  cls: 'scabicide',
  otc: true,
  alert: false,
  name:  { ar: 'بنزوات البنزيل', en: 'Benzyl benzoate' },
  short: {
    ar: 'قاتل جرب قديم ورخيص ومتوفّر حيث لا يتوفّر البيرميثرين، وعليه تعتمد بلاد كثيرة. فعّال، لكن الحرقة واللسع عند وضعه شكوى شائعة جداً وهي السبب الأول لتركه قبل إتمام العلاج.',
    en: 'An old, cheap scabicide available where permethrin is not, and many countries rely on it. It works, but burning and stinging on application is a very common complaint and the leading reason people abandon it before finishing.'
  },
  brands: ['أسكابيول', 'بنزوسكابين', 'سكابيول'],
  uses: ['scabies'],
  keywords: { ar: ['جرب', 'بنزوات البنزيل', 'عثّة الجرب', 'حكّة'], en: ['benzyl benzoate', 'ascabiol', 'scabies', 'mite'] }
});

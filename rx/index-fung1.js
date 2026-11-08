/* ============================================================
   موسوعة الأدوية — فهرس دفعة fung1
   (مضادات الفطريات + مستحضرات الجلد الموضعية)
   rx/index-fung1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'miconazole',
  cls: 'antifungal',
  otc: true,
  alert: true,
  name:  { ar: 'الميكونازول', en: 'Miconazole' },
  short: {
    ar: 'مضاد فطريات إيميدازولي بأشكال كثيرة: كريم للجلد، وتحاميل للمهبل، وجل للفم. الجل الفموي وحده يُمتصّ فيتعارض مع المميّعات تعارضاً قد يقتل.',
    en: 'An imidazole antifungal in many forms: skin cream, vaginal pessaries and an oral gel. Only the oral gel is absorbed, and it interacts with blood thinners in a way that can kill.'
  },
  brands: ['داكتارين', 'جينو-داكتارين', 'داكتاكورت', 'ميكاتين'],
  uses: ['athletes-foot', 'tinea-versicolor', 'oral-thrush', 'vaginitis', 'diaper-rash'],
  keywords: { ar: ['مضاد فطريات', 'ميكونازول', 'داكتارين', 'قلاع', 'سعفة'], en: ['antifungal', 'imidazole', 'daktarin', 'thrush', 'tinea'] }
});

DRUGS.push({
  id: 'selenium-sulfide',
  cls: 'antifungal',
  otc: true,
  alert: false,
  name:  { ar: 'كبريتيد السيلينيوم', en: 'Selenium sulfide' },
  short: {
    ar: 'لوشن أو شامبو طبّي للقشرة والتهاب الجلد الدهني في الفروة وللنخالية المبرقشة. يُترك مدّة قصيرة ثم يُشطف، وإطالته تهيّج ولا تنفع.',
    en: 'A medicated lotion or shampoo for dandruff, scalp seborrhoeic dermatitis and tinea versicolor. It is left on briefly then rinsed; leaving it longer irritates without helping.'
  },
  brands: ['سيلسون بلو', 'سيلسون', 'سيلينيوم شامبو'],
  uses: ['tinea-versicolor', 'seborrheic-dermatitis'],
  keywords: { ar: ['قشرة', 'شامبو طبي', 'نخالية مبرقشة', 'سيلينيوم'], en: ['dandruff', 'selsun', 'tinea versicolor', 'seborrhoea'] }
});

DRUGS.push({
  id: 'amphotericin-b',
  cls: 'antifungal',
  otc: false,
  alert: true,
  name:  { ar: 'الأمفوتيريسين ب', en: 'Amphotericin B' },
  short: {
    ar: 'مضاد فطريات وريدي قويّ للعدوى الفطرية الغازية المهدّدة للحياة. أذاه الكلوي وتفاعلات التسريب معروفان، والصور الدهنية أخفّ منه.',
    en: 'A powerful intravenous antifungal for life-threatening invasive fungal infection. Its kidney toxicity and infusion reactions are well known; the lipid forms are gentler.'
  },
  brands: ['أمبيزوم', 'فانجيزون', 'أبيلسيت'],
  uses: ['meningitis', 'fungal-sinusitis', 'leishmaniasis', 'immunodeficiency'],
  keywords: { ar: ['مضاد فطريات وريدي', 'أمفوتيريسين', 'أمبيزوم', 'فطار غازي'], en: ['antifungal', 'ambisome', 'polyene', 'invasive fungal'] }
});

DRUGS.push({
  id: 'flucytosine',
  cls: 'antifungal',
  otc: false,
  alert: true,
  name:  { ar: 'الفلوسيتوزين', en: 'Flucytosine' },
  short: {
    ar: 'مضاد فطريات فمويّ لا يُعطى وحده أبداً بل مع الأمفوتيريسين. يحمل تحذيراً مؤطّراً: نخاع العظم والكلى والكبد تحت مراقبة دائمة.',
    en: 'An oral antifungal never given alone but with amphotericin B. It carries a boxed warning: bone marrow, kidneys and liver stay under constant monitoring.'
  },
  brands: ['أنكوبون', 'أنكوتيل'],
  uses: ['meningitis', 'endocarditis', 'uti', 'sepsis'],
  keywords: { ar: ['فلوسيتوزين', 'سحايا فطرية', 'مكورة خفية', 'أنكوتيل'], en: ['flucytosine', '5-FC', 'ancobon', 'cryptococcal'] }
});

DRUGS.push({
  id: 'micafungin',
  cls: 'antifungal',
  otc: false,
  alert: false,
  name:  { ar: 'الميكافنجين', en: 'Micafungin' },
  short: {
    ar: 'مضاد فطريات وريدي من الإيكينوكاندينات يهاجم جدار الفطر — وهو شيء لا وجود له في جسمنا. ألطف من الأمفوتيريسين لكن الكبد يُراقَب.',
    en: 'An intravenous echinocandin antifungal that attacks the fungal cell wall, a structure our bodies do not have. Gentler than amphotericin, but the liver is monitored.'
  },
  brands: ['مايكامين'],
  uses: ['sepsis', 'immunodeficiency', 'leukemia'],
  keywords: { ar: ['ميكافنجين', 'إيكينوكاندين', 'مبيضات', 'مايكامين'], en: ['micafungin', 'echinocandin', 'mycamine', 'candidaemia'] }
});

DRUGS.push({
  id: 'betamethasone',
  cls: 'corticosteroid-topical',
  otc: false,
  alert: true,
  name:  { ar: 'البيتاميثازون', en: 'Betamethasone (topical)' },
  short: {
    ar: 'كورتيزون موضعي قويّ للإكزيما والصدفية والحزاز. يُهدئ ما لا يهدأ بغيره، ويُرقّق الجلد ويُخفي العدوى إن أُطيل بلا رقيب.',
    en: 'A potent topical steroid for eczema, psoriasis and lichen planus. It calms what nothing else calms, and thins the skin and masks infection if used long without supervision.'
  },
  brands: ['بيتنوفيت', 'ديبروسون', 'ديبروساليك', 'سيليستوديرم', 'فيوسيكورت'],
  uses: ['eczema', 'psoriasis', 'lichen-planus'],
  keywords: { ar: ['كورتيزون موضعي', 'بيتاميثازون', 'بيتنوفيت', 'إكزيما'], en: ['topical steroid', 'betnovate', 'corticosteroid', 'eczema'] }
});

DRUGS.push({
  id: 'calamine',
  cls: 'emollient',
  otc: true,
  alert: false,
  name:  { ar: 'الكلامين', en: 'Calamine' },
  short: {
    ar: 'لوشن وردي قديم يهدّئ الحكّة ويجفّف النزّ. ليس دواءً يقتل شيئاً — هو واقٍ للجلد يريح المصاب فيقلّ الخدش وتقلّ العدوى بعده.',
    en: 'An old pink lotion that soothes itching and dries weeping. It kills nothing; it is a skin protectant that brings comfort, so there is less scratching and less infection after it.'
  },
  brands: ['كالامين لوشن', 'كالادريل'],
  uses: ['sunburn', 'chickenpox-shingles', 'urticaria'],
  keywords: { ar: ['كلامين', 'حكة', 'أكسيد الزنك', 'جدري الماء'], en: ['calamine', 'itch', 'zinc oxide', 'skin protectant'] }
});

DRUGS.push({
  id: 'mupirocin',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'الميوبيروسين', en: 'Mupirocin' },
  short: {
    ar: 'مضاد حيوي موضعي للقوباء والعدوى الجلدية البكتيرية السطحية، وله مرهم أنفي لإزالة حمل العنقودية. لا ينفع في الفطر ولا الفيروس.',
    en: 'A topical antibiotic for impetigo and superficial bacterial skin infection, with a nasal ointment for staphylococcal carriage. It does nothing against fungi or viruses.'
  },
  brands: ['باكتروبان', 'ميوبيروسين'],
  uses: ['impetigo', 'folliculitis'],
  keywords: { ar: ['مضاد حيوي موضعي', 'ميوبيروسين', 'باكتروبان', 'قوباء'], en: ['topical antibiotic', 'mupirocin', 'bactroban', 'impetigo'] }
});

DRUGS.push({
  id: 'silver-sulfadiazine',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'سلفاديازين الفضة', en: 'Silver sulfadiazine' },
  short: {
    ar: 'كريم فضّة للحروق من الدرجة الثانية والثالثة يمنع إنتان سطح الحرق. سلفوناميد — فيحمل تحذيرات السلفا كلها، ويُمنع قرب الولادة.',
    en: 'A silver cream for second- and third-degree burns that prevents wound sepsis. It is a sulfonamide, so it carries every sulfa warning, and is banned near term.'
  },
  brands: ['فلامازين', 'سلفادين', 'ديرمازين'],
  uses: ['burns'],
  keywords: { ar: ['حروق', 'سلفاديازين الفضة', 'فلامازين', 'إنتان الجرح'], en: ['burns', 'silvadene', 'flamazine', 'wound sepsis'] }
});

DRUGS.push({
  id: 'potassium-permanganate',
  cls: 'antiseptic',
  otc: false,
  alert: true,
  name:  { ar: 'برمنجنات البوتاسيوم', en: 'Potassium permanganate' },
  short: {
    ar: 'مطهّر قابض يُذاب في الماء منقوعاً للجلد النازّ. المحلول الصحيح وردي فاتح، وما زاد عنه يحرق — وابتلاعه قد يقتل.',
    en: 'An astringent antiseptic dissolved in water as a soak for weeping skin. The correct solution is pale pink; anything darker burns, and swallowing it can kill.'
  },
  brands: ['بيرميتابس', 'برمنجنات البوتاسيوم'],
  uses: ['eczema', 'cellulitis', 'cvi', 'diabetic-foot-ulcer'],
  keywords: { ar: ['مطهر', 'برمنجنات', 'منقوع', 'جلد نازّ'], en: ['antiseptic', 'permanganate', 'soak', 'weeping skin'] }
});

/* ============================================================
   موسوعة الأدوية — فهرس دفعة viral1
   (مضادات الفيروسات الكبدية + مضادات الفيروسات القهقرية لفيروس نقص المناعة)
   rx/index-viral1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   كل بطاقة كُتبت من نشرة رسمية مفتوحة وقت الكتابة — المصادر في rx-viral1.js
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* فصائل هذه الدفعة — تُضاف فقط إن لم تكن معرّفة (دفعات أخرى قد تسبقنا) */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    antiviral:               { ar: 'مضادات الفيروسات',                    en: 'Antivirals' },
    'antiviral-hepatitis':   { ar: 'مضادات فيروسات الكبد',                en: 'Hepatitis antivirals' },
    'antiretroviral-nrti':   { ar: 'مثبّطات النسخ العكسي النيوكليوسيدية', en: 'Antiretrovirals — NRTIs' },
    'antiretroviral-nnrti':  { ar: 'مثبّطات النسخ العكسي غير النيوكليوسيدية', en: 'Antiretrovirals — NNRTIs' },
    'antiretroviral-pi':     { ar: 'مثبّطات البروتياز',                   en: 'Antiretrovirals — protease inhibitors' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'infection'; } }
  }
})();

DRUGS.push({
  id: 'ribavirin',
  cls: 'antiviral',
  otc: false,
  alert: true,
  name:  { ar: 'الريبافيرين', en: 'Ribavirin' },
  short: {
    ar: 'مضاد فيروسات قديم واسع الأثر يُؤخذ بالفم في التهاب الكبد سي، ولا يعمل وحده أبداً بل مع دواء شريك. وله صيغة تُستنشق في المستشفى لرضّع أصابهم الفيروس المخلوي التنفّسي إصابة شديدة. خطراه الكبيران: فقر دم قد يشعل نوبة قلبية، وأذى مؤكّد للجنين.',
    en: 'An older broad-acting antiviral taken by mouth for hepatitis C, and never used alone — always with a partner drug. An inhaled hospital form exists for infants severely ill with respiratory syncytial virus. Its two big dangers: anaemia that can trigger a heart attack, and proven harm to the fetus.'
  },
  brands: ['ريبيتول', 'كوبيغاس', 'ريباسفير', 'موديريبا', 'فيرازول'],
  uses: ['hepatitis-c', 'viral-hepatitis', 'bronchiolitis'],
  keywords: { ar: ['ريبافيرين', 'التهاب الكبد سي', 'مضاد فيروسات', 'فيروس مخلوي تنفسي', 'فقر دم'], en: ['ribavirin', 'rebetol', 'copegus', 'virazole', 'RSV', 'hepatitis C', 'tribavirin'] }
});

DRUGS.push({
  id: 'entecavir',
  cls: 'antiviral-hepatitis',
  otc: false,
  alert: true,
  name:  { ar: 'الإنتيكافير', en: 'Entecavir' },
  short: {
    ar: 'حبّة تكبح فيروس التهاب الكبد بي المزمن وتُنقصه في الجسم، ولا تشفيه. تُبلع على معدة خالية، والتوقّف عنها بلا إذن الطبيب قد يشعل انتكاسة كبدية خطيرة.',
    en: 'A tablet that suppresses chronic hepatitis B and lowers the amount of virus in the body without curing it. It is swallowed on an empty stomach, and stopping it without a doctor can set off a dangerous liver flare.'
  },
  brands: ['باراكلود', 'إنتيكافير'],
  uses: ['hepatitis-b', 'viral-hepatitis'],
  keywords: { ar: ['إنتيكافير', 'باراكلود', 'التهاب الكبد بي', 'نظير نيوكليوسيد'], en: ['entecavir', 'baraclude', 'hepatitis B', 'HBV', 'nucleoside analogue'] }
});

DRUGS.push({
  id: 'tenofovir-disoproxil-fumarate',
  cls: 'antiretroviral-nrti',
  otc: false,
  alert: true,
  name:  { ar: 'التينوفوفير ديسوبروكسيل فومارات', en: 'Tenofovir disoproxil fumarate (TDF)' },
  short: {
    ar: 'حبّة تعمل على جبهتين: فيروس نقص المناعة البشري والتهاب الكبد بي المزمن. عمودٌ في أغلب خلطات علاج الإيدز، وثمنه الذي يُراقَب هو الكلى والعظام.',
    en: 'A tablet working on two fronts: HIV and chronic hepatitis B. It is a backbone of most HIV regimens, and the price that gets monitored is the kidneys and the bones.'
  },
  brands: ['فيريد', 'تروفادا', 'أتريبلا', 'تينوفوفير'],
  uses: ['hiv', 'hepatitis-b', 'viral-hepatitis'],
  keywords: { ar: ['تينوفوفير', 'فيريد', 'إيدز', 'التهاب الكبد بي', 'كلى'], en: ['tenofovir', 'TDF', 'viread', 'truvada', 'HIV', 'HBV', 'NRTI'] }
});

DRUGS.push({
  id: 'lamivudine',
  cls: 'antiretroviral-nrti',
  otc: false,
  alert: true,
  name:  { ar: 'اللاميفودين', en: 'Lamivudine (3TC)' },
  short: {
    ar: 'من ألطف مضادات الفيروسات القهقرية احتمالاً، ويدخل في أغلب خلطات علاج فيروس نقص المناعة. وله علبة أخرى بالاسم نفسه مخصّصة لالتهاب الكبد بي وحده، وخلط العلبتين خطأ له عواقب.',
    en: 'One of the best-tolerated antiretrovirals and part of most HIV combinations. A second, differently strengthened product of the same drug exists for hepatitis B alone, and confusing the two has consequences.'
  },
  brands: ['إيبيفير', 'زيفيكس', 'كومبيفير', 'كيفيكسا', 'لاميفودين'],
  uses: ['hiv', 'hepatitis-b', 'viral-hepatitis'],
  keywords: { ar: ['لاميفودين', 'إيبيفير', 'زيفيكس', 'إيدز', 'التهاب الكبد بي'], en: ['lamivudine', '3TC', 'epivir', 'zeffix', 'HIV', 'HBV', 'NRTI'] }
});

DRUGS.push({
  id: 'zidovudine',
  cls: 'antiretroviral-nrti',
  otc: false,
  alert: true,
  name:  { ar: 'الزيدوفودين', en: 'Zidovudine (AZT)' },
  short: {
    ar: 'أوّل دواء عُرف ضد فيروس نقص المناعة البشري، وما زال له موضع خاص: حماية الجنين والوليد من العدوى. أثره الأثقل على نخاع العظم فينقص كريات الدم، ولذلك يُتابَع بتحاليل دورية.',
    en: 'The first medicine ever known to work against HIV, and it still has a special place: protecting the fetus and newborn from infection. Its heaviest effect is on the bone marrow, lowering blood cells, so regular blood tests follow it.'
  },
  brands: ['ريتروفير', 'كومبيفير', 'زيدوفودين'],
  uses: ['hiv'],
  keywords: { ar: ['زيدوفودين', 'ريتروفير', 'إيدز', 'فقر دم', 'نخاع العظم'], en: ['zidovudine', 'AZT', 'ZDV', 'retrovir', 'HIV', 'NRTI'] }
});

DRUGS.push({
  id: 'abacavir',
  cls: 'antiretroviral-nrti',
  otc: false,
  alert: true,
  name:  { ar: 'الأباكافير', en: 'Abacavir' },
  short: {
    ar: 'مضاد قهقري فعّال في خلطات علاج فيروس نقص المناعة، ويتميّز بشيء لا يشبهه فيه غيره: تفاعل تحسّسي قاتل يرتبط بجين يُفحَص قبل البدء. ومن أصابه هذا التفاعل لا يعود إليه أبداً.',
    en: 'An effective antiretroviral in HIV combinations, with one feature no other shares: a potentially fatal hypersensitivity reaction tied to a gene that is tested before starting. Anyone who has had that reaction must never take it again.'
  },
  brands: ['زياجين', 'كيفيكسا', 'تريومك', 'أباكافير'],
  uses: ['hiv'],
  keywords: { ar: ['أباكافير', 'زياجين', 'إيدز', 'حساسية', 'فحص جيني'], en: ['abacavir', 'ziagen', 'kivexa', 'HLA-B*5701', 'HIV', 'NRTI'] }
});

DRUGS.push({
  id: 'efavirenz',
  cls: 'antiretroviral-nnrti',
  otc: false,
  alert: true,
  name:  { ar: 'الإيفافيرينز', en: 'Efavirenz' },
  short: {
    ar: 'حبّة ضد فيروس نقص المناعة، تُؤخذ على معدة خالية وغالباً عند النوم. أشهر ما يميّزها أثرها على الرأس: أحلام غريبة ودوخة وتشوّش في الأسابيع الأولى، وقد تصل إلى تغيّر مزاج وسلوك يستدعي المراجعة.',
    en: 'A tablet against HIV, taken on an empty stomach and usually at bedtime. Its best-known trait is its effect on the head: vivid dreams, dizziness and confusion in the early weeks, sometimes reaching mood and behaviour changes that need review.'
  },
  brands: ['سوستيفا', 'ستوكرين', 'أتريبلا', 'إيفافيرينز'],
  uses: ['hiv'],
  keywords: { ar: ['إيفافيرينز', 'سوستيفا', 'ستوكرين', 'إيدز', 'أحلام'], en: ['efavirenz', 'sustiva', 'stocrin', 'atripla', 'HIV', 'NNRTI'] }
});

DRUGS.push({
  id: 'nevirapine',
  cls: 'antiretroviral-nnrti',
  otc: false,
  alert: true,
  name:  { ar: 'النيفيرابين', en: 'Nevirapine' },
  short: {
    ar: 'مضاد قهقري رخيص واسع الانتشار، يُبدأ بجرعة استهلالية أصغر ثم تُرفع — وهذا التدرّج نفسه وقاية. خطراه المعلنان: أذى كبدي شديد وطفح جلدي قد يصير قاتلاً، وأغلبهما في الشهور الأولى.',
    en: 'A cheap, widely used antiretroviral, started at a smaller lead-in dose then stepped up — and that stepping up is itself a safeguard. Its two declared dangers: severe liver injury and a skin rash that can turn fatal, most of it in the first months.'
  },
  brands: ['فيرامون', 'نيفيرابين'],
  uses: ['hiv'],
  keywords: { ar: ['نيفيرابين', 'فيرامون', 'إيدز', 'طفح جلدي', 'كبد'], en: ['nevirapine', 'viramune', 'HIV', 'NNRTI', 'rash', 'hepatotoxicity'] }
});

DRUGS.push({
  id: 'ritonavir',
  cls: 'antiretroviral-pi',
  otc: false,
  alert: true,
  name:  { ar: 'الريتونافير', en: 'Ritonavir' },
  short: {
    ar: 'نادراً ما يُعطى اليوم لأثره على الفيروس، بل ليرفع مستوى دواء آخر معه ويطيل بقاءه في الدم — يسمّونه المعزّز. وهذا نفسه سبب خطره: يرفع مستوى أدوية أخرى كثيرة حتى السمّية.',
    en: 'It is rarely given today for its own action on the virus, but to raise and prolong the level of another drug beside it — a booster. That is exactly where its danger comes from: it raises the levels of many other medicines to the point of toxicity.'
  },
  brands: ['نورفير', 'كاليترا', 'باكسلوفيد', 'ريتونافير'],
  uses: ['hiv', 'covid19', 'hepatitis-c'],
  keywords: { ar: ['ريتونافير', 'نورفير', 'معزّز', 'تعارض دوائي', 'إيدز'], en: ['ritonavir', 'norvir', 'booster', 'CYP3A4', 'kaletra', 'paxlovid'] }
});

DRUGS.push({
  id: 'darunavir',
  cls: 'antiretroviral-pi',
  otc: false,
  alert: true,
  name:  { ar: 'الدارونافير', en: 'Darunavir' },
  short: {
    ar: 'مثبّط بروتياز حديث ومتين أمام الفيروسات التي قاومت غيره، ولا يُعطى وحده أبداً بل مع معزّز (ريتونافير أو كوبيسيستات). في جزيئه شقّ سلفوناميدي، فمن عنده حساسية سلفا يُخبر طبيبه.',
    en: 'A modern protease inhibitor, sturdy against virus that has resisted others, and never given alone — always with a booster (ritonavir or cobicistat). Its molecule carries a sulfonamide group, so anyone with a sulfa allergy should say so.'
  },
  brands: ['بريزيستا', 'بريزكوبكس', 'سيمتوزا', 'دارونافير'],
  uses: ['hiv'],
  keywords: { ar: ['دارونافير', 'بريزيستا', 'مثبط بروتياز', 'إيدز', 'سلفا'], en: ['darunavir', 'prezista', 'prezcobix', 'protease inhibitor', 'HIV'] }
});

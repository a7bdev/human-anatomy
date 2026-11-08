/* ============================================================
   موسوعة الأدوية — فهرس دفعة الأمصال والمطهّرات (vacc4)
   rx/index-vacc4.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   الأدوية العشرة كلها من قائمة منظمة الصحة للأدوية الأساسية،
   الطبعة الرابعة والعشرين (rx/EML-2025.json، وسم vacc4).

   ملاحظة على الفصائل: فصائل مضادات السموم والمطهّرات الموضعية
   ومطهّرات الأسطح والماء غير معرّفة في DRUG_CLASSES داخل drugs.js،
   فتُضاف من هنا إضافةً لا استبدالاً (drugs.js يُحمَّل قبل هذا الملف).
   والغلوبولينات المناعية والأجسام المضادّة للفيروسات تُضاف أيضاً
   احتياطاً إن لم تكن دفعتا blood2 وviral قد أضافتاها.
   ملاحظة على الربط: لا توجد بطاقة مرض للدفتيريا بعد، فبقي uses
   لمضاد سمومها فارغاً.
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* أسماء فصائل هذه الدفعة — تُضاف ولا تستبدل شيئاً موجوداً */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    antitoxin:            { ar: 'مضادات السموم والأمصال', en: 'Antitoxins and antivenoms' },
    antiseptic:           { ar: 'المطهّرات الموضعية', en: 'Antiseptics' },
    disinfectant:         { ar: 'مطهّرات الأسطح والماء', en: 'Disinfectants' },
    immunoglobulin:       { ar: 'الغلوبولينات المناعية', en: 'Immunoglobulins' },
    'antiviral-antibody': { ar: 'أجسام مضادة وحيدة النسيلة للفيروسات', en: 'Antiviral monoclonal antibodies' }
  };
  var grp = {
    antitoxin: 'other', antiseptic: 'skin', disinfectant: 'other'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
})();

DRUGS.push({
  id: 'diphtheria-antitoxin',
  cls: 'antitoxin',
  otc: false,
  alert: true,
  name:  { ar: 'مضاد سموم الدفتيريا', en: 'Diphtheria antitoxin' },
  short: {
    ar: 'أجسام مضادّة مأخوذة من مصل الخيل تُعطى في المستشفى لمريض الخناق (الدفتيريا) لتعطيل السمّ قبل أن يصل إلى القلب والأعصاب. لا يُصرف ولا يُحفظ في البيت.',
    en: 'Antibodies taken from horse serum, given in hospital to a patient with diphtheria to disable the toxin before it reaches the heart and nerves. Never dispensed or kept at home.'
  },
  brands: [],
  uses: [],
  keywords: { ar: ['مصل الدفتيريا', 'الخناق', 'دفتيريا', 'مضاد سم', 'مصل خيلي'], en: ['DAT', 'equine antitoxin', 'diphtheria', 'Corynebacterium diphtheriae', 'antitoxin'] }
});

DRUGS.push({
  id: 'antivenom-immunoglobulin',
  cls: 'antitoxin',
  otc: false,
  alert: true,
  name:  { ar: 'المصل المضاد للسموم (لدغات الأفاعي والعقارب)', en: 'Antivenom immunoglobulin' },
  short: {
    ar: 'أجسام مضادّة من مصل الخيل أو الأغنام تعطّل سمّ الأفعى أو العقرب في الدم، وهي العلاج النوعي الوحيد للتسمّم باللدغة. تُعطى في المستشفى بالوريد وتحت مراقبة لصيقة.',
    en: 'Antibodies from horse or sheep serum that disable snake or scorpion venom in the blood; the only specific treatment for envenoming. Given in hospital into a vein under close monitoring.'
  },
  brands: [],
  uses: ['snake-bite', 'scorpion-sting'],
  keywords: { ar: ['مصل الأفاعي', 'مصل العقارب', 'لدغة ثعبان', 'لدغة عقرب', 'ترياق', 'مصل متعدد التكافؤ'], en: ['antivenom', 'antivenin', 'snakebite', 'scorpion sting', 'CroFab', 'Anascorp', 'polyvalent antivenom', 'NAVPC'] }
});

DRUGS.push({
  id: 'equine-rabies-immunoglobulin',
  cls: 'immunoglobulin',
  otc: false,
  alert: false,
  name:  { ar: 'الغلوبولين الخيلي المضاد للسعار', en: 'Equine rabies immunoglobulin' },
  short: {
    ar: 'أجسام مضادّة للسعار من مصل الخيل المنقّى، تُحقن داخل جرح العضّة وحوله مع أول لقاح بعد العضّات الخطيرة. أرخص وأوفر من الغلوبولين البشري، ولا تغني عن غسل الجرح واللقاح.',
    en: 'Purified anti-rabies antibodies from horse serum, injected into and around the bite wound with the first vaccine after serious bites. Cheaper and more available than the human product; no substitute for washing the wound and vaccination.'
  },
  brands: [],
  uses: ['rabies'],
  keywords: { ar: ['مصل الكلب', 'مصل السعار', 'داء الكلب', 'عضة كلب', 'عضة حيوان', 'مصل خيلي'], en: ['ERIG', 'eRIG', 'equine RIG', 'rabies immune globulin', 'dog bite', 'post-exposure prophylaxis'] }
});

DRUGS.push({
  id: 'anti-rabies-virus-monoclonal-antibodies',
  cls: 'antiviral-antibody',
  otc: false,
  alert: false,
  name:  { ar: 'الأجسام وحيدة النسيلة المضادة للسعار', en: 'Anti-rabies virus monoclonal antibodies' },
  short: {
    ar: 'أجسام مضادّة للسعار تُصنع في المختبر لا من دم إنسان أو حيوان، تُحقن في جرح العضّة مع أول لقاح بديلاً عن الغلوبولين. أحدث أشكال الحماية الفورية بعد العضّات الخطيرة.',
    en: 'Anti-rabies antibodies made in the laboratory, not from human or animal blood, injected into the bite wound with the first vaccine instead of immunoglobulin. The newest form of immediate protection after serious bites.'
  },
  brands: [],
  uses: ['rabies'],
  keywords: { ar: ['رابيشيلد', 'توين راب', 'جسم مضاد وحيد النسيلة', 'داء الكلب', 'عضة كلب', 'مصل السعار'], en: ['Rabishield', 'SII RMAb', 'TwinRab', 'docaravimab', 'miromavimab', 'rabies monoclonal antibody', 'RmAb'] }
});

DRUGS.push({
  id: 'chlorhexidine',
  cls: 'antiseptic',
  otc: true,
  alert: false,
  name:  { ar: 'الكلورهيكسيدين', en: 'Chlorhexidine' },
  short: {
    ar: 'مطهّر واسع الاستعمال: غسول فم لالتهاب اللثة، ومنظّف للجلد واليدين قبل العمليات. قد يصبغ الأسنان، ونادراً ما يسبّب حساسية شديدة تبدأ خلال دقائق وتستدعي الطوارئ.',
    en: 'A widely used antiseptic: a mouth rinse for gum inflammation and a skin and hand cleanser before surgery. It may stain the teeth, and rarely causes a severe allergy that starts within minutes and needs emergency care.'
  },
  brands: ['كورسوديل', 'هيبيسكرب', 'هيبيكلينز'],
  uses: ['gingivitis', 'mouth-ulcers', 'oral-thrush'],
  keywords: { ar: ['غسول فم', 'مضمضة', 'مطهر', 'كلورهكسيدين', 'التهاب اللثة', 'تعقيم الجلد'], en: ['CHG', 'chlorhexidine gluconate', 'mouthwash', 'Corsodyl', 'Hibiscrub', 'Hibiclens', 'Peridex', 'antiseptic'] }
});

DRUGS.push({
  id: 'ethanol',
  cls: 'antiseptic',
  otc: true,
  alert: false,
  name:  { ar: 'الكحول الإيثيلي (الكحول الطبّي)', en: 'Ethanol (ethyl alcohol)' },
  short: {
    ar: 'الكحول الطبّي مطهّر سريع للجلد واليدين يقتل أغلب الجراثيم خلال لحظات ثم يتبخّر. للاستعمال الخارجي فقط: قابل للاشتعال، وابتلاعه تسمّم خصوصاً عند الأطفال.',
    en: 'Medical alcohol is a fast antiseptic for skin and hands that kills most germs within moments and then evaporates. For external use only: it is flammable, and swallowing it is poisoning, especially in children.'
  },
  brands: [],
  uses: [],
  keywords: { ar: ['كحول', 'سبيرتو', 'كحول طبي', 'اسبرتو', 'مطهر', 'ايثانول'], en: ['ethyl alcohol', 'rubbing alcohol', 'alcohol swab', 'antiseptic', 'surgical spirit'] }
});

DRUGS.push({
  id: 'povidone-iodine',
  cls: 'antiseptic',
  otc: true,
  alert: false,
  name:  { ar: 'البوفيدون يودين', en: 'Povidone iodine' },
  short: {
    ar: 'مطهّر يودي بنّي اللون للجروح الصغيرة والخدوش والحروق البسيطة. يمرّ اليود منه إلى الجسم عبر الجروح الواسعة والأغشية، فيحتاط منه مرضى الغدّة الدرقية ومن يأخذ الليثيوم والحوامل والمرضعات.',
    en: 'A brown iodine antiseptic for small wounds, scrapes and minor burns. Its iodine passes into the body through large wounds and membranes, so people with thyroid disease, those on lithium, and pregnant or breastfeeding women need caution.'
  },
  brands: ['بيتادين'],
  uses: ['burns'],
  keywords: { ar: ['بيتادين', 'يود', 'مطهر جروح', 'بوفيدين', 'مطهر بني'], en: ['Betadine', 'PVP-I', 'iodophor', 'povidone-iodine', 'antiseptic', 'iodine'] }
});

DRUGS.push({
  id: 'alcohol-based-hand-rub',
  cls: 'antiseptic',
  otc: true,
  alert: false,
  name:  { ar: 'مطهّر اليدين الكحولي', en: 'Alcohol based hand rub' },
  short: {
    ar: 'جِل أو سائل يُفرك على اليدين حتى يجفّ فيقتل أغلب الجراثيم حين لا يتوفّر الماء والصابون. لا يغني عن الغسل مع اليد المتّسخة أو بعض جراثيم الإسهال، وخطير إن ابتلعه طفل.',
    en: 'A gel or liquid rubbed on the hands until dry, killing most germs when soap and water are not available. It does not replace washing for dirty hands or some diarrhoea germs, and is dangerous if a child swallows it.'
  },
  brands: ['ستيريليوم', 'بيوريل'],
  uses: ['cholera'],
  keywords: { ar: ['معقم يدين', 'معقم', 'جل كحولي', 'سانيتايزر', 'تعقيم اليدين'], en: ['hand sanitizer', 'ABHR', 'handrub', 'alcohol gel', 'Sterillium', 'Purell', 'hand hygiene'] }
});

DRUGS.push({
  id: 'chlorine-base-compound',
  cls: 'disinfectant',
  otc: true,
  alert: true,
  name:  { ar: 'مركّبات الكلور (الكلوركس وأقراص تعقيم الماء)', en: 'Chlorine base compound' },
  short: {
    ar: 'مطهّرات تُطلق الكلور، أشهرها هيبوكلوريت الصوديوم في المبيّض المنزلي، تطهّر الأسطح وتعقّم ماء الشرب وتقي من الكوليرا. لا تُخلط أبداً بمنظّف آخر: خلطها يطلق غازاً ساماً.',
    en: 'Chlorine-releasing disinfectants, best known as the sodium hypochlorite in household bleach, that disinfect surfaces, treat drinking water and help prevent cholera. Never mix with another cleaner: the mixture releases a toxic gas.'
  },
  brands: ['كلوركس'],
  uses: ['cholera'],
  keywords: { ar: ['كلوركس', 'كلور', 'مبيض', 'هيبوكلوريت', 'تعقيم الماء', 'أقراص الكلور'], en: ['bleach', 'sodium hypochlorite', 'Clorox', 'NaDCC', 'chlorine tablets', 'Dakin solution', 'disinfectant'] }
});

DRUGS.push({
  id: 'chloroxylenol',
  cls: 'antiseptic',
  otc: true,
  alert: false,
  name:  { ar: 'الكلوروزيلينول', en: 'Chloroxylenol' },
  short: {
    ar: 'المادة الفعّالة في سائل «ديتول» البنّي: مطهّر فينولي للجروح الصغيرة والخدوش بعد تخفيفه بالماء. لا يوضع مركّزاً على الجلد، ولا يُستعمل للرضّع دون السنة، وابتلاعه تسمّم خطير.',
    en: 'The active ingredient of brown Dettol liquid: a phenolic antiseptic for small wounds and scrapes once diluted with water. Never put on skin undiluted, not for babies under one year, and swallowing it is serious poisoning.'
  },
  brands: ['ديتول'],
  uses: [],
  keywords: { ar: ['ديتول', 'مطهر', 'مطهر جروح', 'كلوروكسيلينول', 'فينول'], en: ['Dettol', 'PCMX', 'para-chloro-meta-xylenol', 'antiseptic', 'phenolic'] }
});

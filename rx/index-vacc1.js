/* ============================================================
   موسوعة الأدوية — فهرس دفعة اللقاحات الأولى
   (السلّ · الكوليرا · الضنك · الدفتيريا · الإيبولا · المستدمية النزلية ب ·
    التهاب الكبد أ وب وهـ · فيروس الورم الحليمي البشري)
   rx/index-vacc1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات ولا جداول تطعيم هنا بقرار مقصود.

   ملاحظة على الفصائل: فصيلة «اللقاحات» غير معرّفة في DRUG_CLASSES داخل
   drugs.js، فتُضاف هنا بحارس لا يكتب فوق تعريف موجود — كما في
   index-immuno1.js. ومجموعة «اللقاحات» تُضاف إن لم توجد.
   ============================================================ */

var DRUGS = window.DRUGS || [];

(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    vaccine: { ar: 'اللقاحات', en: 'Vaccines' }
  };
  var grp = { vaccine: 'vaccine' };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_GROUPS !== 'undefined' && DRUG_GROUPS) {
    if (!DRUG_GROUPS.vaccine) { DRUG_GROUPS.vaccine = { ar: 'اللقاحات والتطعيم', en: 'Vaccines and immunisation' }; }
  }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
})();

DRUGS.push({
  id: 'bcg-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح السلّ (بي سي جي)', en: 'BCG vaccine' },
  short: {
    ar: 'لقاح حيّ ضد السلّ يُحقن في جلد الذراع ويترك ندبة صغيرة. يحمي الأطفال خاصة من أخطر صور السلّ، ولا يُعطى في الحمل ولا لضعيفي المناعة.',
    en: 'A live vaccine against tuberculosis, injected into the skin of the arm, that leaves a small scar. It protects children especially from the most serious forms of TB, and is not given in pregnancy or to people with weakened immunity.'
  },
  brands: [],
  uses: ['tb'],
  keywords: { ar: ['بي سي جي', 'لقاح السل', 'الدرن', 'تطعيم المواليد', 'لقاح حي'], en: ['BCG', 'Bacillus Calmette-Guerin', 'tuberculosis vaccine', 'TB vaccine', 'live vaccine'] }
});

DRUGS.push({
  id: 'cholera-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح الكوليرا', en: 'Cholera vaccine' },
  short: {
    ar: 'لقاح يُشرب بالفم للمسافرين إلى مناطق الكوليرا ولحملات التفشّي. حمايته جزئية ولا تغني عن الحذر في الماء والطعام، والمضادات الحيوية تُفسد نوعه الحيّ.',
    en: 'A vaccine taken by mouth, for travellers to cholera areas and for outbreak campaigns. Its protection is partial and does not replace care with water and food, and antibiotics spoil its live form.'
  },
  brands: ['دوكورال'],
  uses: ['cholera'],
  keywords: { ar: ['كوليرا', 'لقاح فموي', 'تطعيم السفر', 'اسهال مائي'], en: ['cholera', 'oral cholera vaccine', 'OCV', 'Dukoral', 'Vaxchora', 'travel vaccine'] }
});

DRUGS.push({
  id: 'dengue-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح حمّى الضنك', en: 'Dengue vaccine' },
  short: {
    ar: 'لقاح حيّ مضعّف ضد أنواع فيروس الضنك الأربعة، توصي به منظمة الصحة لأعمار محدّدة في مناطق الانتشار العالي. لا يُعطى في الحمل والرضاعة ولا يغني عن الوقاية من البعوض.',
    en: 'A live weakened vaccine against the four types of dengue virus, recommended by the WHO for set age groups in high-transmission areas. It is not given in pregnancy or breastfeeding and does not replace protection from mosquitoes.'
  },
  brands: [],
  uses: ['dengue'],
  keywords: { ar: ['ضنك', 'حمى الضنك', 'بعوض', 'كيودنغا', 'لقاح حي'], en: ['dengue', 'Qdenga', 'TAK-003', 'Dengvaxia', 'live vaccine'] }
});

DRUGS.push({
  id: 'diphtheria-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح الدفتيريا (الخناق)', en: 'Diphtheria vaccine' },
  short: {
    ar: 'لقاح غير حيّ يأتي دائماً تقريباً ضمن لقاح مركّب مع الكزاز والسعال الديكي، أو في اللقاح السداسي للرضّع. يحتاج جرعات تنشيط طوال العمر.',
    en: 'A non-live vaccine that almost always comes inside a combined vaccine with tetanus and whooping cough, or in the six-in-one infant vaccine. It needs boosters throughout life.'
  },
  brands: ['إنفانريكس هكسا', 'هيكساكسيم', 'بوستريكس', 'أداسيل'],
  uses: ['tetanus', 'pertussis'],
  keywords: { ar: ['دفتيريا', 'خناق', 'اللقاح الثلاثي', 'اللقاح السداسي', 'جرعة تنشيط'], en: ['diphtheria', 'DTaP', 'Tdap', 'Td', 'toxoid', 'six-in-one', 'hexavalent'] }
});

DRUGS.push({
  id: 'ebola-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح الإيبولا', en: 'Ebola vaccine (Zaire)' },
  short: {
    ar: 'لقاح حيّ يحمي من إيبولا نوع زائير وحده، تستعمله الجهات الصحية عند التفشّي ولمن يواجه خطر العدوى. بعده قيود على مخالطة الضعفاء والتبرّع بالدم والحمل.',
    en: 'A live vaccine that protects against the Zaire type of Ebola only, used by health authorities in outbreaks and for people at risk of infection. It is followed by restrictions on contact with vulnerable people, blood donation and pregnancy.'
  },
  brands: [],
  uses: [],
  keywords: { ar: ['ايبولا', 'إيبولا', 'زائير', 'حمى نزفية', 'لقاح حي'], en: ['Ebola', 'Ervebo', 'rVSV-ZEBOV', 'Zaire ebolavirus', 'live vaccine'] }
});

DRUGS.push({
  id: 'haemophilus-influenzae-type-b-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح المستدمية النزلية ب (الهيب)', en: 'Haemophilus influenzae type b (Hib) vaccine' },
  short: {
    ar: 'لقاح غير حيّ للرضّع ضد بكتيريا كانت السبب الأول لالتهاب السحايا البكتيري عند الأطفال الصغار. يُعطى غالباً ضمن اللقاح السداسي، ولبعض الكبار ممن فقدوا الطحال.',
    en: 'A non-live infant vaccine against bacteria that were once the leading cause of bacterial meningitis in young children. It is usually given inside the six-in-one vaccine, and to some older people who have lost their spleen.'
  },
  brands: ['أكت هيب', 'هايبريكس', 'إنفانريكس هكسا', 'هيكساكسيم'],
  uses: ['meningitis', 'epiglottitis', 'pneumonia'],
  keywords: { ar: ['هيب', 'المستدمية النزلية', 'التهاب السحايا', 'لسان المزمار', 'اللقاح السداسي'], en: ['Hib', 'Haemophilus influenzae', 'conjugate vaccine', 'meningitis', 'epiglottitis'] }
});

DRUGS.push({
  id: 'hepatitis-a-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح التهاب الكبد أ', en: 'Hepatitis A vaccine' },
  short: {
    ar: 'لقاح غير حيّ من فيروس مقتول، يحمي من التهاب الكبد الذي ينتقل بالطعام والماء الملوّث. للأطفال والمسافرين ومرضى الكبد، ويأتي منفرداً أو مع لقاح الكبد ب.',
    en: 'A non-live vaccine made from killed virus, protecting against the liver infection spread by contaminated food and water. For children, travellers and people with liver disease, alone or combined with hepatitis B vaccine.'
  },
  brands: ['هافريكس', 'أفاكسيم', 'توينريكس'],
  uses: ['hepatitis-a', 'viral-hepatitis'],
  keywords: { ar: ['التهاب الكبد أ', 'الكبد الوبائي', 'يرقان', 'تطعيم السفر'], en: ['hepatitis A', 'HAV', 'Havrix', 'Twinrix', 'travel vaccine'] }
});

DRUGS.push({
  id: 'hepatitis-b-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح التهاب الكبد ب', en: 'Hepatitis B vaccine' },
  short: {
    ar: 'لقاح غير حيّ يُعطى لكل مولود بعد الولادة مباشرة، يحمي حماية شبه كاملة وطويلة من فيروس قد يسبّب تشمّع الكبد وسرطانه. آمن في الحمل والرضاعة.',
    en: 'A non-live vaccine given to every newborn right after birth, giving near-complete, long-lasting protection from a virus that can cause cirrhosis and liver cancer. Safe in pregnancy and breastfeeding.'
  },
  brands: ['إنجيريكس بي', 'يوفاكس بي', 'توينريكس', 'إنفانريكس هكسا', 'هيكساكسيم'],
  uses: ['hepatitis-b', 'viral-hepatitis', 'cirrhosis', 'liver-cancer'],
  keywords: { ar: ['التهاب الكبد ب', 'الكبد الوبائي', 'تطعيم المواليد', 'سرطان الكبد'], en: ['hepatitis B', 'HBV', 'Engerix-B', 'recombinant vaccine', 'birth dose'] }
});

DRUGS.push({
  id: 'hepatitis-e-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح التهاب الكبد هـ', en: 'Hepatitis E vaccine' },
  short: {
    ar: 'لقاح غير حيّ معتمد في بلدان قليلة، يُستعمل في مواجهة تفشّيات التهاب الكبد هـ، وأهمّ من يحميهم الحوامل اللواتي قد يقتلهن المرض. غير متوفّر في أغلب البلدان.',
    en: 'A non-live vaccine licensed in few countries, used against hepatitis E outbreaks; its most important beneficiaries are pregnant women, whom the disease can kill. Not available in most countries.'
  },
  brands: [],
  uses: ['viral-hepatitis'],
  keywords: { ar: ['التهاب الكبد هـ', 'الكبد الوبائي', 'هيكولين', 'الحوامل', 'تفشي'], en: ['hepatitis E', 'HEV', 'HEV 239', 'Hecolin', 'outbreak vaccine'] }
});

DRUGS.push({
  id: 'human-papillomavirus-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح فيروس الورم الحليمي البشري', en: 'Human papillomavirus (HPV) vaccine' },
  short: {
    ar: 'لقاح غير حيّ يقي من سرطان عنق الرحم وسرطانات أخرى ومن الثآليل التناسلية، ويعمل أفضل ما يعمل قبل أي تعرّض للفيروس. لا يغني عن فحص عنق الرحم.',
    en: 'A non-live vaccine that prevents cervical cancer, other cancers and genital warts, and works best before any exposure to the virus. It does not replace cervical screening.'
  },
  brands: ['جارداسيل', 'سيرفاريكس'],
  uses: ['cervical-cancer', 'hpv-warts', 'oral-cancer', 'penile-cancer'],
  keywords: { ar: ['الورم الحليمي', 'سرطان عنق الرحم', 'الثآليل التناسلية', 'جارداسيل'], en: ['HPV', 'papillomavirus', 'Gardasil', 'Cervarix', 'cervical cancer vaccine'] }
});

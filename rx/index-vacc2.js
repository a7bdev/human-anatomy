/* ============================================================
   موسوعة الأدوية — فهرس دفعة vacc2
   (اللقاحات: الإنفلونزا الموسمية · التهاب الدماغ الياباني · الملاريا ·
    الحصبة · المكوّرات السحائية · جدري القردة · النكاف · السعال الديكي ·
    المكوّرات الرئوية · شلل الأطفال)
   rx/index-vacc2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات ولا جداول تطعيم هنا بقرار مقصود.
   كل بطاقة كُتبت من نشرة رسمية مفتوحة وقت الكتابة — المصادر في rx-vacc2.js
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* فصيلة هذه الدفعة — تُضاف فقط إن لم تكن معرّفة (دفعات اللقاحات الأخرى قد تسبقنا) */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'vaccine': { ar: 'اللقاحات', en: 'Vaccines' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'infection'; } }
  }
})();

DRUGS.push({
  id: 'influenza-vaccine-seasonal',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح الإنفلونزا الموسمية', en: 'Influenza vaccine (seasonal)' },
  short: {
    ar: 'لقاح يُحدَّث كل موسم ليطابق سلالات الإنفلونزا المنتشرة. الحقنة لا تحتوي فيروساً حياً وتناسب الحامل، أما البخّاخ الأنفي فحيّ ولا يناسب الجميع.',
    en: 'A vaccine updated every season to match the circulating flu strains. The injection contains no live virus and suits pregnant women; the nasal spray is live and does not suit everyone.'
  },
  brands: ['فاكسيجريب تترا', 'إنفلوفاك تترا', 'فلواريكس تترا'],
  uses: ['influenza'],
  keywords: { ar: ['لقاح الانفلونزا', 'تطعيم الانفلونزا', 'لقاح الموسم', 'انفلونزا'], en: ['flu shot', 'flu vaccine', 'influenza vaccine', 'LAIV'] }
});

DRUGS.push({
  id: 'japanese-encephalitis-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح التهاب الدماغ الياباني', en: 'Japanese encephalitis vaccine' },
  short: {
    ar: 'لقاح سفر يقي من التهاب دماغ فيروسي ينقله البعوض في آسيا وغرب المحيط الهادئ، ولا علاج مضاداً للفيروس بعد الإصابة. يُتجنّب في الحمل.',
    en: 'A travel vaccine against a mosquito-borne viral brain infection in Asia and the Western Pacific, for which there is no antiviral treatment. It is avoided in pregnancy.'
  },
  brands: ['إكسيارو', 'إيموجيف'],
  uses: [],
  keywords: { ar: ['لقاح السفر', 'التهاب الدماغ', 'البعوض', 'اسيا'], en: ['JE vaccine', 'Ixiaro', 'travel vaccine', 'encephalitis'] }
});

DRUGS.push({
  id: 'malaria-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح الملاريا', en: 'Malaria vaccine (RTS,S and R21)' },
  short: {
    ar: 'لقاحان تعتمدهما منظمة الصحة لأطفال المناطق الموبوءة ضد أخطر طفيليات الملاريا. يُنقص الإصابات ولا يمنعها كلها، وليس متاحاً للمسافرين.',
    en: 'Two WHO-approved vaccines for children in endemic areas against the deadliest malaria parasite. They reduce cases without preventing them all, and are not available for travellers.'
  },
  brands: ['موسكيريكس'],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا', 'لقاح الملاريا', 'البعوض', 'اطفال افريقيا'], en: ['RTS,S', 'R21', 'Mosquirix', 'Plasmodium falciparum'] }
});

DRUGS.push({
  id: 'measles-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح الحصبة', en: 'Measles vaccine' },
  short: {
    ar: 'لقاح حيّ مُضعَف يأتي غالباً ضمن اللقاح الثلاثي مع النكاف والحصبة الألمانية، ويحمي أغلب من يأخذه مدى الحياة. لا يُعطى للحامل ولا لضعيف المناعة.',
    en: 'A live weakened vaccine usually given within the triple MMR vaccine with mumps and rubella, protecting most recipients for life. Not given in pregnancy or to people with weak immunity.'
  },
  brands: ['بريوريكس', 'إم إم آر فاكس برو', 'بريوريكس تترا'],
  uses: ['measles'],
  keywords: { ar: ['الحصبة', 'اللقاح الثلاثي', 'ام ام ار', 'تطعيم الاطفال'], en: ['MMR', 'MMRV', 'measles vaccine', 'Priorix'] }
});

DRUGS.push({
  id: 'meningococcal-meningitis-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح الالتهاب السحائي (المكوّرات السحائية)', en: 'Meningococcal meningitis vaccine' },
  short: {
    ar: 'يقي من بكتيريا المكوّرات السحائية التي تسبّب التهاب السحايا وتسمّم الدم. اللقاح الرباعي شرطٌ لتأشيرة الحج والعمرة، ولفصيلة ب لقاح منفصل.',
    en: 'Protects against meningococcal bacteria, a cause of meningitis and blood poisoning. The four-group vaccine is required for Hajj and Umrah visas; group B needs a separate vaccine.'
  },
  brands: ['نيمنريكس', 'مينكوادفي', 'مينفيو', 'مينكتيرا', 'بيكسيرو', 'تروميمبا'],
  uses: ['meningitis', 'sepsis', 'sickle-cell', 'hiv'],
  keywords: { ar: ['السحايا', 'لقاح الحج', 'لقاح العمرة', 'الحمى الشوكية', 'المكورات السحائية'], en: ['MenACWY', 'MenB', 'meningococcal', 'Hajj vaccine'] }
});

DRUGS.push({
  id: 'mpox-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح جدري القردة', en: 'Mpox vaccine' },
  short: {
    ar: 'لقاح من فيروس قريب مُضعَف لا يسبّب جدري القردة، يُعطى للأكثر عرضة وللمخالطين بعد التعرّض بأيام قليلة. يُنقص الإصابة ويخفّفها ولا يمنعها تماماً.',
    en: 'A vaccine made from a weakened related virus that cannot cause mpox, given to those most at risk and to contacts within a few days of exposure. It reduces and softens infection without fully preventing it.'
  },
  brands: ['جينيوس', 'إمفانيكس'],
  uses: ['mpox'],
  keywords: { ar: ['جدري القرود', 'جدري القردة', 'ام بوكس', 'لقاح الجدري'], en: ['JYNNEOS', 'Imvanex', 'MVA-BN', 'monkeypox vaccine'] }
});

DRUGS.push({
  id: 'mumps-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح النكاف', en: 'Mumps vaccine' },
  short: {
    ar: 'لقاح حيّ مُضعَف ضمن اللقاح الثلاثي. حمايته من النكاف جيدة لكنها أضعف من حمايته من الحصبة وقد تتراجع مع الزمن، والمرض عند الملقّح أخفّ.',
    en: 'A live weakened vaccine within the triple MMR vaccine. Its protection against mumps is good but weaker than against measles and may fade over time; disease in the vaccinated is milder.'
  },
  brands: ['بريوريكس', 'إم إم آر فاكس برو', 'بريوريكس تترا'],
  uses: ['mumps', 'epididymo-orchitis'],
  keywords: { ar: ['النكاف', 'ابو دغيم', 'اللقاح الثلاثي', 'ام ام ار'], en: ['MMR', 'mumps vaccine', 'parotitis', 'MMRV'] }
});

DRUGS.push({
  id: 'pertussis-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح السعال الديكي', en: 'Pertussis (whooping cough) vaccine' },
  short: {
    ar: 'لا يُعطى وحده بل مع الدفتيريا والكزاز في لقاح مركّب. يُعطى للحامل في كل حمل لتعبر أجسامها المضادّة إلى جنينها وتحميه في أسابيعه الأولى.',
    en: 'Never given alone but combined with diphtheria and tetanus. It is given in every pregnancy so the mother\'s antibodies cross to the baby and protect it in its first weeks.'
  },
  brands: ['بوستريكس', 'أداسيل', 'إنفانريكس', 'هيكساكسيم', 'بنتاكسيم'],
  uses: ['pertussis'],
  keywords: { ar: ['السعال الديكي', 'الشاهوق', 'اللقاح الثلاثي البكتيري', 'لقاح الحامل'], en: ['Tdap', 'DTaP', 'whooping cough vaccine', 'Boostrix'] }
});

DRUGS.push({
  id: 'pneumococcal-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح المكوّرات الرئوية', en: 'Pneumococcal vaccine' },
  short: {
    ar: 'يقي من الأنواع الأشيع لبكتيريا تسبّب الالتهاب الرئوي والتهاب السحايا وتسمّم الدم والتهاب الأذن. للرضّع وكبار السن وأصحاب الأمراض المزمنة.',
    en: 'Protects against the commonest types of a bacterium causing pneumonia, meningitis, blood poisoning and ear infection. For infants, older adults and people with long-term conditions.'
  },
  brands: ['بريفنار', 'فاكسنيوفانس'],
  uses: ['pneumonia', 'meningitis', 'otitis-media', 'sepsis', 'copd', 'sickle-cell'],
  keywords: { ar: ['المكورات الرئوية', 'لقاح الالتهاب الرئوي', 'بريفنار', 'لقاح كبار السن'], en: ['PCV', 'pneumococcal conjugate', 'Prevenar', 'pneumonia vaccine'] }
});

DRUGS.push({
  id: 'poliomyelitis-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح شلل الأطفال', en: 'Poliomyelitis vaccine (IPV and OPV)' },
  short: {
    ar: 'نوعان: حقنة من فيروس مقتول، وقطرات بالفم من فيروس حيّ مُضعَف تبني مناعة الأمعاء. يحمي من الشلل الذي لا رجعة فيه، وقد يُشترط لبعض المسافرين.',
    en: 'Two kinds: an injection of killed virus, and oral drops of live weakened virus that build gut immunity. It protects against irreversible paralysis and may be required for some travellers.'
  },
  brands: ['إيموفاكس بوليو', 'هيكساكسيم', 'تترااكسيم', 'بنتاكسيم'],
  uses: [],
  keywords: { ar: ['شلل الاطفال', 'قطرات الشلل', 'لقاح البوليو', 'الشلل'], en: ['IPV', 'OPV', 'polio vaccine', 'poliovirus'] }
});

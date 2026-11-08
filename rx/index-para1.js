/* ============================================================
   موسوعة الأدوية — فهرس دفعة مضادات الطفيليات والديدان (para1)
   rx/index-para1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'mebendazole',
  cls: 'anthelmintic',
  otc: true,
  alert: false,
  name:  { ar: 'الميبيندازول', en: 'Mebendazole' },
  short: {
    ar: 'طارد للديدان المعوية يكاد لا يُمتصّ إلى الدم، فيبقى حيث الدودة ويقتلها في الأمعاء. أشهر ما يُصرف للدودة الدبّوسية عند الأطفال، وغالباً بلا وصفة.',
    en: 'A worm treatment that is barely absorbed into the blood, so it stays where the worm is and kills it inside the gut. It is best known for treating threadworm in children, usually without a prescription.'
  },
  brands: ['فيرموكس'],
  uses: ['intestinal-worms'],
  keywords: { ar: ['ديدان', 'دودة دبوسية', 'حرقان شرجي', 'طارد ديدان', 'ميبيندازول'], en: ['anthelmintic', 'pinworm', 'threadworm', 'vermox', 'benzimidazole'] }
});

DRUGS.push({
  id: 'ivermectin',
  cls: 'antiparasitic',
  otc: false,
  alert: true,
  name:  { ar: 'الآيفرمكتين', en: 'Ivermectin' },
  short: {
    ar: 'دواء يشلّ الطفيلي فيقتله، يُبتلع لديدان تسكن الأمعاء أو الجلد، ويُدهن كريماً للوردية وغسولاً للقمل. يحمل تحذيراً عصبياً مهمّاً عند من حمل طفيلياً أفريقياً بعينه.',
    en: 'A medicine that paralyses the parasite and kills it: swallowed for worms living in the gut or skin, applied as a cream for rosacea and as a lotion for head lice. It carries an important neurological warning in anyone carrying one particular African parasite.'
  },
  brands: ['ستروميكتول', 'سولانترا', 'إيفوميك'],
  uses: ['scabies', 'head-lice', 'rosacea', 'intestinal-worms'],
  keywords: { ar: ['جرب', 'قمل', 'وردية', 'ديدان', 'آيفرمكتين'], en: ['stromectol', 'soolantra', 'scabies', 'strongyloides', 'onchocerciasis'] }
});

DRUGS.push({
  id: 'praziquantel',
  cls: 'anthelmintic',
  otc: false,
  alert: true,
  name:  { ar: 'البرازيكوانتيل', en: 'Praziquantel' },
  short: {
    ar: 'الدواء الأول للبلهارسيا والديدان الشريطية والمثقوبة الكبدية. يفتح غشاء الدودة للكالسيوم فتتقلّص وتموت. ممنوع منعاً باتاً حين يكون الكيس داخل العين.',
    en: 'The first-line medicine for schistosomiasis, tapeworms and liver flukes. It opens the worm membrane to calcium so it contracts and dies. It is absolutely forbidden when the cyst sits inside the eye.'
  },
  brands: ['بيلتريسيد', 'ديستوسيد', 'إبيكوانتل'],
  uses: ['intestinal-worms'],
  keywords: { ar: ['بلهارسيا', 'دودة شريطية', 'مثقوبة كبدية', 'برازيكوانتيل'], en: ['biltricide', 'schistosomiasis', 'tapeworm', 'liver fluke', 'anthelmintic'] }
});

DRUGS.push({
  id: 'pyrantel',
  cls: 'anthelmintic',
  otc: true,
  alert: false,
  name:  { ar: 'البيرانتيل', en: 'Pyrantel (Pyrantel pamoate)' },
  short: {
    ar: 'شراب أو كبسولة تُصرف بلا وصفة غالباً للديدان الدبّوسية والأسطوانية والشصّية. يشلّ عضلة الدودة فتفقد تعلّقها بجدار الأمعاء وتخرج مع البراز حيّة.',
    en: 'A syrup or capsule usually sold without prescription for pinworm, roundworm and hookworm. It paralyses the worm muscle so it loses its grip on the gut wall and is passed alive in the stool.'
  },
  brands: ['كومبانترين'],
  uses: ['intestinal-worms'],
  keywords: { ar: ['ديدان', 'دودة دبوسية', 'شراب ديدان', 'بيرانتيل'], en: ['combantrin', 'pinworm', 'roundworm', 'hookworm', 'anthelmintic'] }
});

DRUGS.push({
  id: 'levamisole',
  cls: 'anthelmintic',
  otc: false,
  alert: true,
  name:  { ar: 'الليفاميزول', en: 'Levamisole' },
  short: {
    ar: 'طارد للديدان الأسطوانية صار يُستعمل أكثر كمعدّل للمناعة يوفّر الكورتيزون في المتلازمة الكلوية عند الأطفال. خطره الأهمّ سقوط كريات الدم البيضاء المفاجئ.',
    en: 'A roundworm treatment now used more as an immune modulator that spares steroids in childhood nephrotic syndrome. Its most important danger is a sudden collapse in white blood cells.'
  },
  brands: ['كيتراكس', 'ديكاريس'],
  uses: ['intestinal-worms'],
  keywords: { ar: ['ديدان', 'متلازمة كلوية', 'مناعة', 'ليفاميزول'], en: ['ketrax', 'decaris', 'nephrotic syndrome', 'agranulocytosis', 'immunomodulator'] }
});

DRUGS.push({
  id: 'niclosamide',
  cls: 'anthelmintic',
  otc: false,
  alert: false,
  name:  { ar: 'النيكلوزاميد', en: 'Niclosamide' },
  short: {
    ar: 'قرص يُمضغ للديدان الشريطية، لا يُمتصّ إلى الدم إطلاقاً فيبقى أثره في تجويف الأمعاء وحده. لهذا هو الأهدأ حين يُخشى وجود أكياس في الدماغ لم تُشخّص بعد.',
    en: 'A chewable tablet for tapeworms that is not absorbed into the blood at all, so its action stays inside the gut cavity alone. That makes it the calmest choice when undiagnosed cysts in the brain are feared.'
  },
  brands: ['يوميسان'],
  uses: ['intestinal-worms'],
  keywords: { ar: ['دودة شريطية', 'ديدان', 'نيكلوزاميد'], en: ['yomesan', 'tapeworm', 'taeniasis', 'anthelmintic'] }
});

DRUGS.push({
  id: 'diethylcarbamazine',
  cls: 'anthelmintic',
  otc: false,
  alert: true,
  name:  { ar: 'ثنائي إيثيل كاربامازين', en: 'Diethylcarbamazine (DEC)' },
  short: {
    ar: 'دواء داء الفيل: يقتل يرقات الفلاريا والدودة البالغة معاً، فيوقف تخريب القنوات اللمفية. ولا يُبدأ أبداً قبل استبعاد طفيليين أفريقيين يجعلانه خطراً على الدماغ والعين.',
    en: 'The medicine for elephantiasis: it kills both filarial larvae and the adult worm, halting the destruction of lymph channels. It is never started before excluding two African parasites that make it dangerous to the brain and eye.'
  },
  brands: ['هيترازان', 'بانوسيد'],
  uses: ['lymphedema'],
  keywords: { ar: ['داء الفيل', 'فلاريا', 'وذمة لمفية', 'كاربامازين'], en: ['hetrazan', 'banocide', 'filariasis', 'elephantiasis', 'DEC'] }
});

DRUGS.push({
  id: 'oxamniquine',
  cls: 'anthelmintic',
  otc: false,
  alert: false,
  name:  { ar: 'الأوكسامنيكين', en: 'Oxamniquine' },
  short: {
    ar: 'بديل قديم للبرازيكوانتيل في نوع واحد فقط من البلهارسيا هو المنسونية. لا يعمل إلا بعد أن ينشّطه إنزيم داخل الدودة نفسها، ولهذا لا يمسّ الأنواع الأخرى.',
    en: 'An older alternative to praziquantel for one species of schistosomiasis only, Schistosoma mansoni. It works only after an enzyme inside the worm itself activates it, which is why it does not touch the other species.'
  },
  brands: ['مانسيل', 'فانسيل'],
  uses: ['intestinal-worms'],
  keywords: { ar: ['بلهارسيا', 'منسوني', 'أوكسامنيكين'], en: ['vansil', 'mansil', 'schistosoma mansoni', 'schistosomiasis'] }
});

DRUGS.push({
  id: 'triclabendazole',
  cls: 'anthelmintic',
  otc: false,
  alert: true,
  name:  { ar: 'التريكلابيندازول', en: 'Triclabendazole' },
  short: {
    ar: 'الدواء الوحيد المعتمد للمثقوبة الكبدية التي تسكن القنوات الصفراوية بعد أكل نبات مائي ملوّث. يُؤخذ مع الطعام، وله تعارضات كثيرة مع أدوية تطيل كهرباء القلب.',
    en: 'The only approved medicine for the liver fluke that settles in the bile ducts after eating contaminated water plants. It is taken with food, and it has many interactions with drugs that lengthen the heart’s electrical interval.'
  },
  brands: ['إيغاتين'],
  uses: ['intestinal-worms'],
  keywords: { ar: ['مثقوبة كبدية', 'فاشيولا', 'ديدان الكبد', 'تريكلابيندازول'], en: ['egaten', 'fascioliasis', 'liver fluke', 'fasciola'] }
});

DRUGS.push({
  id: 'diloxanide',
  cls: 'antiprotozoal',
  otc: false,
  alert: false,
  name:  { ar: 'الديلوكسانيد', en: 'Diloxanide (Diloxanide furoate)' },
  short: {
    ar: 'يكنس أكياس الأميبا الباقية في تجويف الأمعاء بعد أن يفرغ الميترونيدازول من قتل الطفيلي الغازي. بدونه يعود المرض، ولذلك يُعطى شوطاً ثانياً لا شوطاً بديلاً.',
    en: 'It sweeps out the amoebic cysts left in the gut cavity after metronidazole has finished killing the invading parasite. Without it the illness returns, so it is given as a second course, not as a replacement.'
  },
  brands: ['فورامايد', 'إنتاميزول'],
  uses: ['amebiasis', 'liver-abscess'],
  keywords: { ar: ['أميبا', 'زحار', 'دوسنتاريا', 'ديلوكسانيد'], en: ['furamide', 'amebiasis', 'luminal amebicide', 'entamoeba'] }
});

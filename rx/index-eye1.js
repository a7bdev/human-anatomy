/* ============================================================
   موسوعة الأدوية — فهرس دفعة العيون والصحة الإنجابية (eye1)
   rx/index-eye1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   الأدوية العشرة كلها من قائمة منظمة الصحة للأدوية الأساسية،
   الطبعة الرابعة والعشرين (rx/EML-2025.json، وسم eye1):
   قسم «مستحضرات العيون» وقسم «الصحة الإنجابية ومنع الحمل».

   ملاحظة على الفصائل: فصائل هذه الدفعة (الكينولونات · مثبّطات
   نموّ الأوعية · مانعات الحمل بأنواعها) غير معرّفة في DRUG_CLASSES
   داخل drugs.js، وdrugs.js ممنوع تعديله في هذه الدفعة. فتُضاف
   أسماؤها من هنا إضافةً لا استبدالاً (drugs.js يُحمَّل قبل هذا
   الملف)، حتى تُعرض بالعربية ولا تقع كلها في «أخرى».
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* فصائل هذه الدفعة — تُضاف إن لم تكن موجودة، ولا تُكتب فوق فصيلة سابقة
   (عمّال آخرون يشتغلون بالتوازي على ملفات أخرى) */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'antibiotic-quinolone':      { ar: 'مضادات حيوية — فلوروكينولونات', en: 'Antibiotics — fluoroquinolones' },
    'anti-vegf':                 { ar: 'مثبّطات نموّ الأوعية (مضادات VEGF)', en: 'Anti-VEGF agents' },
    'contraceptive-emergency':   { ar: 'الحبوب الإسعافية لمنع الحمل', en: 'Emergency contraceptives' },
    'contraceptive-combined':    { ar: 'مانعات الحمل الهرمونية المركّبة', en: 'Combined hormonal contraceptives' },
    'contraceptive-progestogen': { ar: 'مانعات الحمل بالبروجستين وحده', en: 'Progestogen-only contraceptives' },
    'contraceptive-injectable':  { ar: 'مانعات الحمل بالإبرة الشهرية', en: 'Combined injectable contraceptives' }
  };
  var grp = {
    'antibiotic-quinolone': 'infection',
    'anti-vegf': 'eye',
    'contraceptive-emergency': 'repro',
    'contraceptive-combined': 'repro',
    'contraceptive-progestogen': 'repro',
    'contraceptive-injectable': 'repro'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_GROUPS !== 'undefined' && DRUG_GROUPS) {
    if (!DRUG_GROUPS.eye)   { DRUG_GROUPS.eye   = { ar: 'العين', en: 'Eye' }; }
    if (!DRUG_GROUPS.repro) { DRUG_GROUPS.repro = { ar: 'الصحة الإنجابية ومنع الحمل', en: 'Reproductive health and contraception' }; }
  }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
})();

DRUGS.push({
  id: 'ofloxacin',
  cls: 'antibiotic-quinolone',
  otc: false,
  alert: true,
  name:  { ar: 'الأوفلوكساسين', en: 'Ofloxacin' },
  short: {
    ar: 'مضاد حيوي من الفلوروكينولونات، يأتي قطرةً للعين والأذن وأقراصاً للفم. القطرة تعمل في موضعها، أما الأقراص فتحمل تحذيرات رسمية ثقيلة على الأوتار والأعصاب.',
    en: 'A fluoroquinolone antibiotic that comes as eye drops, ear drops and oral tablets. The drops act where they are placed; the tablets carry heavy official warnings about tendons and nerves.'
  },
  brands: ['تاريفيد', 'إكزوسين', 'فلوكسال', 'أوفلوكس'],
  uses: ['conjunctivitis', 'keratitis', 'otitis-externa', 'uti', 'pid', 'prostatitis', 'chlamydia', 'gonorrhea'],
  keywords: { ar: ['أوفلوكساسين', 'قطرة عين', 'كينولون', 'مضاد حيوي'], en: ['ofloxacin', 'fluoroquinolone', 'eye drops', 'quinolone'] }
});

DRUGS.push({
  id: 'erythromycin',
  cls: 'antibiotic-macrolide',
  otc: false,
  alert: true,
  name:  { ar: 'الإريثرومايسين', en: 'Erythromycin' },
  short: {
    ar: 'أقدم الماكروليدات، وبديل البنسلين عند من يتحسّس منه. مرهمه للعين هو ما يُوضع لعين المولود عند الولادة. يُتعب المعدة ويتشابك مع أدوية كثيرة.',
    en: 'The oldest of the macrolides and the alternative for people allergic to penicillin. Its eye ointment is what is placed in a newborn baby eye at delivery. It upsets the stomach and tangles with many other medicines.'
  },
  brands: ['إريثروسين', 'إيلوسون', 'إريثرومايسين'],
  uses: ['pneumonia', 'pertussis', 'chlamydia', 'neonatal-conjunctivitis', 'conjunctivitis', 'acne', 'rosacea', 'impetigo', 'gastroparesis'],
  keywords: { ar: ['إريثرومايسين', 'ماكروليد', 'بديل البنسلين', 'مرهم عين'], en: ['erythromycin', 'macrolide', 'eye ointment', 'penicillin allergy'] }
});

DRUGS.push({
  id: 'bevacizumab',
  cls: 'anti-vegf',
  otc: false,
  alert: true,
  name:  { ar: 'البيفاسيزوماب', en: 'Bevacizumab' },
  short: {
    ar: 'جسم مضاد يخنق الأوعية الدموية الجديدة. يُحقن في الوريد لأنواع من السرطان، ويُحقن داخل العين بكمية ضئيلة لأمراض الشبكية التي تسرق البصر.',
    en: 'An antibody that starves new blood vessels. It is infused into a vein for several cancers, and injected into the eye in a tiny amount for the retinal diseases that steal sight.'
  },
  brands: ['أفاستين', 'مفاسي', 'زيرابيف'],
  uses: ['amd', 'diabetic-retinopathy', 'retinal-vascular-occlusion', 'colorectal-cancer', 'lung-cancer', 'kidney-cancer', 'cervical-cancer', 'ovarian-cancer', 'brain-tumor'],
  keywords: { ar: ['بيفاسيزوماب', 'أفاستين', 'حقن داخل العين', 'مضاد للأوعية'], en: ['bevacizumab', 'avastin', 'anti-VEGF', 'intravitreal'] }
});

DRUGS.push({
  id: 'levonorgestrel',
  cls: 'contraceptive-emergency',
  otc: true,
  alert: false,
  name:  { ar: 'الليفونورجستريل (الحبة الإسعافية)', en: 'Levonorgestrel (emergency contraceptive)' },
  short: {
    ar: 'حبة تُؤخذ بعد جماع غير محمي لتأخير خروج البويضة ومنع الحمل. للطوارئ وحدها لا لمنع الحمل المنتظم، ولا تحمي من أي عدوى منقولة جنسياً.',
    en: 'A tablet taken after unprotected intercourse to delay the release of the egg and prevent pregnancy. For emergencies only, not for regular contraception, and it protects against no sexually transmitted infection.'
  },
  brands: ['بوستينور', 'إسكابيل', 'نورليفو'],
  uses: [],
  keywords: { ar: ['ليفونورجستريل', 'حبة الطوارئ', 'بوستينور', 'منع الحمل الإسعافي'], en: ['levonorgestrel', 'morning after pill', 'emergency contraception', 'postinor'] }
});

DRUGS.push({
  id: 'ethinylestradiol-levonorgestrel',
  cls: 'contraceptive-combined',
  otc: false,
  alert: true,
  name:  { ar: 'الإيثينيل إستراديول مع الليفونورجستريل', en: 'Ethinylestradiol + levonorgestrel' },
  short: {
    ar: 'حبوب منع الحمل المركّبة الأكثر استعمالاً في العالم: هرمونان يمنعان خروج البويضة. تنظّم الدورة وتخفّف آلامها، وتحمل تحذيراً رسمياً عن التخثّر والجلطة.',
    en: 'The most widely used combined contraceptive pill in the world: two hormones that stop the egg from being released. It regulates periods and eases their pain, and carries an official warning about clots and stroke.'
  },
  brands: ['ميكروجينون', 'نورديت'],
  uses: ['dysmenorrhea', 'heavy-periods', 'acne', 'endometriosis', 'pcos', 'pms'],
  keywords: { ar: ['حبوب منع الحمل', 'إيثينيل إستراديول', 'ليفونورجستريل', 'ميكروجينون'], en: ['combined pill', 'ethinylestradiol', 'levonorgestrel', 'microgynon'] }
});

DRUGS.push({
  id: 'ethinylestradiol-norethisterone',
  cls: 'contraceptive-combined',
  otc: false,
  alert: true,
  name:  { ar: 'الإيثينيل إستراديول مع النوريثيستيرون', en: 'Ethinylestradiol + norethisterone' },
  short: {
    ar: 'حبة منع حمل مركّبة قديمة موثوقة، بروجستينها من الجيل الأول. تُستعمل كذلك لحبّ الشباب وغزارة الطمث، وتشارك بقية المركّبات تحذير التخثّر.',
    en: 'An older, trusted combined contraceptive pill whose progestogen is first generation. It is also used for acne and heavy periods, and shares the clotting warning of the rest of the combined pills.'
  },
  brands: ['لوسترين', 'أورثو-نوفم'],
  uses: ['dysmenorrhea', 'heavy-periods', 'acne', 'endometriosis', 'pcos'],
  keywords: { ar: ['نوريثيستيرون', 'نوريثيندرون', 'حبوب منع الحمل', 'إيثينيل إستراديول'], en: ['norethisterone', 'norethindrone', 'combined pill', 'ethinylestradiol'] }
});

DRUGS.push({
  id: 'ethinylestradiol-etonogestrel',
  cls: 'contraceptive-combined',
  otc: false,
  alert: true,
  name:  { ar: 'الإيثينيل إستراديول مع الإيتونوجستريل (الحلقة المهبلية)', en: 'Ethinylestradiol + etonogestrel (vaginal ring)' },
  short: {
    ar: 'نفس هرموني الحبة المركّبة لكن في حلقة لدنة تُوضع في المهبل وتُترك أسابيع، فتُغني عن حبة كل يوم. مخاطرها مخاطر الحبة نفسها.',
    en: 'The same two hormones as the combined pill, but in a soft ring placed in the vagina and left for weeks, so no daily tablet is needed. Its risks are the same as the pill.'
  },
  brands: ['نوفارينج'],
  uses: ['dysmenorrhea', 'heavy-periods'],
  keywords: { ar: ['حلقة مهبلية', 'إيتونوجستريل', 'نوفارينج', 'منع الحمل'], en: ['vaginal ring', 'etonogestrel', 'nuvaring', 'contraception'] }
});

DRUGS.push({
  id: 'ulipristal',
  cls: 'contraceptive-emergency',
  otc: false,
  alert: false,
  name:  { ar: 'اليوليبريستال', en: 'Ulipristal' },
  short: {
    ar: 'حبة إسعافية أحدث من الليفونورجستريل ونافذتها أطول: حتى خمسة أيام بعد الجماع غير المحمي. تعمل على مستقبل البروجستيرون فتؤخّر خروج البويضة.',
    en: 'An emergency pill newer than levonorgestrel with a longer window: up to five days after unprotected intercourse. It acts on the progesterone receptor to delay the release of the egg.'
  },
  brands: ['إيلا ون'],
  uses: ['uterine-fibroids'],
  keywords: { ar: ['يوليبريستال', 'إيلا ون', 'حبة الطوارئ', 'منع الحمل الإسعافي'], en: ['ulipristal', 'ellaone', 'emergency contraception', 'SPRM'] }
});

DRUGS.push({
  id: 'medroxyprogesterone-acetate',
  cls: 'contraceptive-progestogen',
  otc: false,
  alert: true,
  name:  { ar: 'الميدروكسي بروجستيرون', en: 'Medroxyprogesterone acetate' },
  short: {
    ar: 'بروجستين يُعطى إبرةً كل بضعة أشهر لمنع الحمل، وحبّاً لنزف الرحم وبطانته. إبرته تحمل تحذيراً رسمياً عن نقص كثافة العظم مع الاستعمال الطويل.',
    en: 'A progestogen given as an injection every few months for contraception, and as tablets for uterine bleeding and the womb lining. The injection carries an official warning about loss of bone density with long use.'
  },
  brands: ['ديبو بروفيرا', 'بروفيرا'],
  uses: ['endometriosis', 'heavy-periods', 'endometrial-hyperplasia', 'endometrial-cancer', 'amenorrhea'],
  keywords: { ar: ['ميدروكسي بروجستيرون', 'ديبو بروفيرا', 'إبرة منع الحمل', 'بروجستين'], en: ['medroxyprogesterone', 'depo-provera', 'DMPA', 'progestogen'] }
});

DRUGS.push({
  id: 'estradiol-cypionate-medroxyprogesterone-acetate',
  cls: 'contraceptive-injectable',
  otc: false,
  alert: true,
  name:  { ar: 'الإستراديول سيبيونات مع الميدروكسي بروجستيرون', en: 'Estradiol cypionate + medroxyprogesterone acetate' },
  short: {
    ar: 'إبرة شهرية تجمع إستروجيناً وبروجستيناً، أُضيفت لقائمة المنظمة لأن نزفها أقرب إلى الطبيعي من إبرة البروجستين وحدها. غير منتشرة في صيدليات الخليج.',
    en: 'A monthly injection combining an oestrogen and a progestogen, added to the WHO list because its bleeding pattern is closer to normal than the progestogen-only injection. It is not widely stocked in Gulf pharmacies.'
  },
  brands: ['سيكلوفيم', 'سيكلوبروفيرا'],
  uses: [],
  keywords: { ar: ['إبرة شهرية', 'إستراديول سيبيونات', 'سيكلوفيم', 'منع الحمل'], en: ['monthly injectable', 'estradiol cypionate', 'cyclofem', 'CIC'] }
});

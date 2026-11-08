/* ============================================================
   موسوعة الأدوية — فهرس دفعة tb1
   (أدوية السلّ من الخطّ الثاني والسلّ المقاوم: الريفاميسينات الأخرى ·
    البيداكويلين · الديلامانيد · البريتومانيد · السيكلوسيرين · الإيثيوناميد ·
    حمض بارا أمينوساليسيليك · الستربتومايسين · الليفوفلوكساسين)
   rx/index-tb1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   كل بطاقة كُتبت من نشرة رسمية مفتوحة وقت الكتابة — المصادر في rx-tb1.js
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* فصائل هذه الدفعة — تُضاف فقط إن لم تكن معرّفة (دفعات أخرى قد تسبقنا) */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'antitubercular':            { ar: 'مضادات السلّ والمتفطّرات',       en: 'Antituberculosis and antimycobacterial agents' },
    'antibiotic-aminoglycoside': { ar: 'مضادات حيوية — أمينوغليكوزيدات', en: 'Antibiotics — aminoglycosides' },
    'antibiotic-quinolone':      { ar: 'مضادات حيوية — فلوروكينولونات',  en: 'Antibiotics — fluoroquinolones' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'infection'; } }
  }
})();

DRUGS.push({
  id: 'rifapentine',
  cls: 'antitubercular',
  otc: false,
  alert: false,
  name:  { ar: 'الريفابنتين', en: 'Rifapentine' },
  short: {
    ar: 'من عائلة الريفاميسينات، يعالج السلّ النشط مع أدوية أخرى، ويُعطى مع الأيزونيازيد لعلاج السلّ الكامن عند المخالطين. يلوّن سوائل الجسم ويُضعف حبوب منع الحمل.',
    en: 'A rifamycin that treats active tuberculosis with other drugs, and is given with isoniazid for latent tuberculosis in contacts. It colours body fluids and weakens hormonal contraceptives.'
  },
  brands: ['بريفتين'],
  uses: ['tb'],
  keywords: { ar: ['سل', 'درن', 'سل كامن', 'ريفاميسين', 'ريفابنتين'], en: ['rifapentine', 'Priftin', 'rifamycin', 'latent TB', 'tuberculosis'] }
});

DRUGS.push({
  id: 'rifabutin',
  cls: 'antitubercular',
  otc: false,
  alert: false,
  name:  { ar: 'الريفابوتين', en: 'Rifabutin' },
  short: {
    ar: 'ريفاميسين يقي من عدوى المتفطّرة الطيرية عند مرضى فيروس نقص المناعة، ويدخل في خلطة للقضاء على جرثومة المعدة. أشهر تحذيراته التهاب العين الداخلي.',
    en: 'A rifamycin that protects people with HIV against Mycobacterium avium complex, and is part of a combination that clears H. pylori. Its best-known warning is inflammation inside the eye.'
  },
  brands: ['مايكوبوتين', 'تاليشيا'],
  uses: ['hiv', 'h-pylori', 'tb'],
  keywords: { ar: ['متفطرة طيرية', 'ريفابوتين', 'جرثومة المعدة', 'سل', 'ريفاميسين'], en: ['rifabutin', 'Mycobutin', 'MAC', 'Mycobacterium avium', 'Talicia'] }
});

DRUGS.push({
  id: 'bedaquiline',
  cls: 'antitubercular',
  otc: false,
  alert: true,
  name:  { ar: 'البيداكويلين', en: 'Bedaquiline' },
  short: {
    ar: 'دواء حديث للسلّ الرئوي المقاوم للأيزونيازيد والريفامبيسين، يقطع مصدر الطاقة عن الجرثومة. يحمل تحذيراً رسمياً من اضطراب نظم القلب ويستلزم تخطيط قلب.',
    en: 'A newer drug for lung tuberculosis resistant to isoniazid and rifampicin that cuts off the germ’s energy supply. It carries an official warning about heart rhythm and requires ECG checks.'
  },
  brands: ['سيرتورو'],
  uses: ['tb'],
  keywords: { ar: ['سل مقاوم', 'سل متعدد المقاومة', 'بيداكويلين', 'سيرتورو'], en: ['bedaquiline', 'Sirturo', 'MDR-TB', 'diarylquinoline', 'QT'] }
});

DRUGS.push({
  id: 'delamanid',
  cls: 'antitubercular',
  otc: false,
  alert: true,
  name:  { ar: 'الديلامانيد', en: 'Delamanid' },
  short: {
    ar: 'مضاد حيوي للسلّ الرئوي متعدّد المقاومة، يمنع الجرثومة من بناء جدارها الشمعي، ويؤخذ دائماً مع أدوية سلّ أخرى. يحتاج مراقبة تخطيط القلب.',
    en: 'An antibiotic for multidrug-resistant lung tuberculosis that stops the germ building its waxy wall, always taken with other tuberculosis drugs. It needs ECG monitoring.'
  },
  brands: ['ديلتيبا'],
  uses: ['tb'],
  keywords: { ar: ['سل مقاوم', 'ديلامانيد', 'ديلتيبا', 'سل متعدد المقاومة'], en: ['delamanid', 'Deltyba', 'MDR-TB', 'mycolic acid'] }
});

DRUGS.push({
  id: 'pretomanid',
  cls: 'antitubercular',
  otc: false,
  alert: true,
  name:  { ar: 'البريتومانيد', en: 'Pretomanid' },
  short: {
    ar: 'دواء للسلّ الرئوي شديد المقاومة يُعطى فقط ضمن ثلاثية مع البيداكويلين واللينيزوليد. على الثلاثية مراقبة الكبد والدم والأعصاب والنظر ونظم القلب.',
    en: 'A drug for highly resistant lung tuberculosis given only as a trio with bedaquiline and linezolid. The trio requires monitoring of the liver, blood, nerves, eyesight and heart rhythm.'
  },
  brands: [],
  uses: ['tb'],
  keywords: { ar: ['سل شديد المقاومة', 'بريتومانيد', 'سل مقاوم'], en: ['pretomanid', 'BPaL', 'XDR-TB', 'MDR-TB', 'nitroimidazooxazine'] }
});

DRUGS.push({
  id: 'cycloserine',
  cls: 'antitubercular',
  otc: false,
  alert: true,
  name:  { ar: 'السيكلوسيرين', en: 'Cycloserine' },
  short: {
    ar: 'مضاد حيوي من الخطّ الثاني للسلّ حين تفشل الأدوية الأولى. الفرق بين مقداره النافع والسامّ ضيّق، وأذاه يقع على الدماغ والمزاج، ويتعارض مع الكحول.',
    en: 'A second-line tuberculosis antibiotic for when first-line drugs fail. The gap between a helpful and a toxic amount is narrow, its harm falls on the brain and mood, and it clashes with alcohol.'
  },
  brands: ['سيروميسين'],
  uses: ['tb', 'uti'],
  keywords: { ar: ['سل مقاوم', 'سيكلوسيرين', 'سيروميسين', 'خط ثاني'], en: ['cycloserine', 'Seromycin', 'second-line TB', 'MDR-TB'] }
});

DRUGS.push({
  id: 'ethionamide',
  cls: 'antitubercular',
  otc: false,
  alert: false,
  name:  { ar: 'الإيثيوناميد', en: 'Ethionamide' },
  short: {
    ar: 'دواء سلّ من الخطّ الثاني قريب البنية من الأيزونيازيد، للسلّ المقاوم أو عند عدم تحمّل غيره. أشيع آثاره اضطراب المعدة، وأخطرها على الكبد والنظر والغدة الدرقية.',
    en: 'A second-line tuberculosis drug related in structure to isoniazid, for resistant disease or intolerance to others. Stomach upset is its commonest effect; its most serious ones affect the liver, eyesight and thyroid.'
  },
  brands: ['تريكاتور'],
  uses: ['tb'],
  keywords: { ar: ['سل مقاوم', 'إيثيوناميد', 'ايثيوناميد', 'خط ثاني'], en: ['ethionamide', 'Trecator', 'second-line TB', 'MDR-TB'] }
});

DRUGS.push({
  id: 'p-aminosalicylate-sodium',
  cls: 'antitubercular',
  otc: false,
  alert: false,
  name:  { ar: 'حمض بارا أمينوساليسيليك', en: 'P-aminosalicylate sodium (PAS)' },
  short: {
    ar: 'من أقدم أدوية السلّ، يوقف تكاثر الجرثومة ويُستعمل اليوم أساساً في السلّ المقاوم. أشيع آثاره اضطراب المعدة، وأوّل علامات حساسيته طفح ثم حمّى توجب إيقافه.',
    en: 'One of the oldest tuberculosis drugs; it halts the germ’s growth and is used today mainly in resistant disease. Stomach upset is common, and a rash followed by fever — the first sign of allergy — means stopping it.'
  },
  brands: ['باسر'],
  uses: ['tb'],
  keywords: { ar: ['باس', 'سل مقاوم', 'أمينوساليسيليك', 'بارا امينوساليسيليك'], en: ['PAS', 'aminosalicylic acid', 'para-aminosalicylic acid', 'Paser', 'MDR-TB'] }
});

DRUGS.push({
  id: 'streptomycin',
  cls: 'antibiotic-aminoglycoside',
  otc: false,
  alert: true,
  name:  { ar: 'الستربتومايسين', en: 'Streptomycin' },
  short: {
    ar: 'مضاد حيوي أمينوغليكوزيدي بالحقن العضلي، للسلّ ولعدوى نادرة كالطاعون والحمّى المالطية. خطره الأكبر تلف دائم في السمع والتوازن، ويتضاعف مع ضعف الكلى.',
    en: 'An aminoglycoside antibiotic given by muscle injection, for tuberculosis and rarer infections such as plague and brucellosis. Its greatest danger is permanent damage to hearing and balance, multiplied by weak kidneys.'
  },
  brands: [],
  uses: ['tb', 'brucellosis', 'endocarditis'],
  keywords: { ar: ['ستربتومايسين', 'ستربتومايسين حقن', 'أمينوغليكوزيد', 'سل', 'بروسيلا'], en: ['streptomycin', 'aminoglycoside', 'plague', 'tularemia', 'brucellosis'] }
});

DRUGS.push({
  id: 'levofloxacin',
  cls: 'antibiotic-quinolone',
  otc: false,
  alert: true,
  name:  { ar: 'الليفوفلوكساسين', en: 'Levofloxacin' },
  short: {
    ar: 'مضاد حيوي من الفلوروكينولونات للالتهاب الرئوي والمسالك البولية والبروستاتا والجيوب، وله دور في السلّ المقاوم. يحمل تحذيرات رسمية عن الأوتار والأعصاب والدماغ.',
    en: 'A fluoroquinolone antibiotic for pneumonia and urinary, prostate and sinus infections, with a role in resistant tuberculosis. It carries official warnings about tendons, nerves and the brain.'
  },
  brands: ['تافانيك', 'ليفاكوين'],
  uses: ['pneumonia', 'uti', 'pyelonephritis', 'prostatitis', 'sinusitis', 'chronic-bronchitis', 'cellulitis', 'tb'],
  keywords: { ar: ['كينولون', 'ليفوفلوكساسين', 'تافانيك', 'مضاد حيوي', 'التهاب رئوي'], en: ['levofloxacin', 'fluoroquinolone', 'Tavanic', 'Levaquin', 'quinolone'] }
});

/* ============================================================
   موسوعة الأدوية — فهرس دفعة viral4
   (أجسام الإيبولا المضادّة + أدوية السلّ الأولى وأقراصها المركّبة)
   rx/index-viral4.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   كل بطاقة كُتبت من نشرة رسمية مفتوحة وقت الكتابة — المصادر في rx-viral4.js
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* فصائل هذه الدفعة — تُضاف فقط إن لم تكن معرّفة (دفعات أخرى قد تسبقنا) */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'antiviral-antibody':      { ar: 'أجسام مضادّة للفيروسات',   en: 'Antiviral monoclonal antibodies' },
    antituberculosis:          { ar: 'مضادات السلّ',              en: 'Antituberculosis agents' },
    'antituberculosis-combo':  { ar: 'أقراص السلّ المركّبة',      en: 'Antituberculosis fixed-dose combinations' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'infection'; } }
  }
})();

DRUGS.push({
  id: 'atoltivimab-maftivimab-odesivimab',
  cls: 'antiviral-antibody',
  otc: false,
  alert: false,
  name:  { ar: 'الأتولتيفيماب مع المافتيفيماب والأوديسيفيماب', en: 'Atoltivimab + maftivimab + odesivimab' },
  short: {
    ar: 'خليط من ثلاثة أجسام مضادّة بشرية مصنّعة ضد فيروس إيبولا زائير، يُعطى بالتسريب في الوريد داخل المستشفى لمريض ثبتت إصابته، ولمولود أمّ مصابة. لا يُصرف في الصيدليات، وأهمّ ما يُراقَب معه تفاعلات التسريب.',
    en: 'A mixture of three manufactured human antibodies against Zaire ebolavirus, given as an intravenous infusion in hospital to a patient with confirmed infection and to the newborn of an infected mother. It is not sold in pharmacies; the main thing watched for is infusion reactions.'
  },
  brands: [],
  uses: [],
  keywords: { ar: ['إيبولا', 'ايبولا', 'إنمازيب', 'أجسام مضادة', 'حمى نزفية'], en: ['Inmazeb', 'REGN-EB3', 'Ebola', 'Zaire ebolavirus', 'monoclonal antibody'] }
});

DRUGS.push({
  id: 'isoniazid',
  cls: 'antituberculosis',
  otc: false,
  alert: true,
  name:  { ar: 'الأيزونيازيد', en: 'Isoniazid' },
  short: {
    ar: 'دواء أساسي في علاج السلّ بكل أشكاله، يقتل جرثومة السلّ النشطة النموّ، ويُستعمل كذلك للوقاية عند من يحمل عدوى كامنة. خطراه الكبيران التهاب كبد قد يكون قاتلاً، وتنميل الأعصاب في اليدين والقدمين.',
    en: 'A core medicine for all forms of tuberculosis that kills actively growing TB bacteria, also used for prevention in people carrying a latent infection. Its two big dangers are hepatitis that can be fatal and nerve tingling in the hands and feet.'
  },
  brands: [],
  uses: ['tb'],
  keywords: { ar: ['سل', 'درن', 'أيزونيازيد', 'ايزونيازيد', 'سل كامن', 'وقاية السل'], en: ['INH', 'isonicotinic acid hydrazide', 'tuberculosis', 'latent TB', 'TB preventive therapy'] }
});

DRUGS.push({
  id: 'rifampicin',
  cls: 'antituberculosis',
  otc: false,
  alert: true,
  name:  { ar: 'الريفامبيسين', en: 'Rifampicin (Rifampin)' },
  short: {
    ar: 'مضاد حيوي من عائلة الريفاميسينات، ركن في علاج السلّ ولا يُعطى فيه وحده، ويُستعمل لتطهير حاملي جرثومة السحايا. يلوّن البول والدموع والعرق بالبرتقالي، ويُضعف مفعول عدد كبير من الأدوية ومنها موانع الحمل الهرمونية.',
    en: 'A rifamycin antibiotic, a pillar of tuberculosis treatment that is never used alone for it, and also used to clear carriers of the meningitis germ. It turns urine, tears and sweat orange and weakens a great many medicines, hormonal contraceptives among them.'
  },
  brands: ['ريفادين', 'ريماكتان'],
  uses: ['tb', 'meningitis'],
  keywords: { ar: ['سل', 'درن', 'ريفامبيسين', 'ريفامبين', 'بول برتقالي', 'حاملو السحايا'], en: ['rifampin', 'Rifadin', 'Rimactane', 'rifamycin', 'tuberculosis', 'meningococcal carrier'] }
});

DRUGS.push({
  id: 'pyrazinamide',
  cls: 'antituberculosis',
  otc: false,
  alert: true,
  name:  { ar: 'البيرازيناميد', en: 'Pyrazinamide' },
  short: {
    ar: 'دواء سلّ يُعطى في المرحلة المكثّفة الأولى من العلاج مع أدوية أخرى، ولا يعمل إلا في وسط حمضي قليلاً. يؤذي الكبد، ويرفع حمض البول فقد يثير نوبة نقرس.',
    en: 'A tuberculosis drug given in the first, intensive phase of treatment alongside other drugs, and active only in a slightly acidic environment. It can harm the liver and raises uric acid, which may trigger a gout attack.'
  },
  brands: [],
  uses: ['tb'],
  keywords: { ar: ['سل', 'درن', 'بيرازيناميد', 'حمض البول', 'نقرس'], en: ['PZA', 'tuberculosis', 'pyrazinoic acid', 'hyperuricaemia'] }
});

DRUGS.push({
  id: 'ethambutol',
  cls: 'antituberculosis',
  otc: false,
  alert: true,
  name:  { ar: 'الإيثامبوتول', en: 'Ethambutol' },
  short: {
    ar: 'دواء سلّ يوقف نموّ الجرثومة ويُعطى دائماً مع أدوية سلّ أخرى. أهمّ ما فيه العين: قد يلتهب العصب البصري فتضعف الرؤية ويختلط الأحمر بالأخضر، وقد يصل إلى عمى دائم إن لم يُوقف مبكراً.',
    en: 'A tuberculosis drug that halts the growth of the bacteria and is always given with other TB drugs. Its key concern is the eye: the optic nerve can become inflamed so vision weakens and red and green blur together, and it can reach permanent blindness if not stopped early.'
  },
  brands: [],
  uses: ['tb'],
  keywords: { ar: ['سل', 'درن', 'إيثامبوتول', 'ايثامبوتول', 'العصب البصري', 'عمى الألوان'], en: ['EMB', 'Myambutol', 'tuberculosis', 'optic neuritis', 'colour vision'] }
});

DRUGS.push({
  id: 'isoniazid-rifampicin',
  cls: 'antituberculosis-combo',
  otc: false,
  alert: true,
  name:  { ar: 'الأيزونيازيد مع الريفامبيسين', en: 'Isoniazid + rifampicin' },
  short: {
    ar: 'قرص يجمع دواءين أساسيين للسلّ، يُستعمل عادةً في مرحلة الاستمرار بعد انتهاء المرحلة المكثّفة. يحمل خطر الكبد من الاثنين معاً، ويلوّن سوائل الجسم، ويُضعف موانع الحمل الهرمونية.',
    en: 'A tablet combining two core tuberculosis drugs, usually used in the continuation phase after the intensive phase ends. It carries the liver risk of both together, discolours body fluids and weakens hormonal contraceptives.'
  },
  brands: ['ريفيناه', 'ريماكتازيد'],
  uses: ['tb'],
  keywords: { ar: ['سل', 'درن', 'قرص مركب', 'مرحلة الاستمرار', 'ريفيناه'], en: ['Rifinah', 'Rifamate', 'Rimactazid', 'HR', 'fixed-dose combination', 'tuberculosis'] }
});

DRUGS.push({
  id: 'isoniazid-pyrazinamide-rifampicin',
  cls: 'antituberculosis-combo',
  otc: false,
  alert: true,
  name:  { ar: 'الأيزونيازيد مع البيرازيناميد والريفامبيسين', en: 'Isoniazid + pyrazinamide + rifampicin' },
  short: {
    ar: 'قرص ثلاثي يجمع الأيزونيازيد والريفامبيسين والبيرازيناميد للمرحلة المكثّفة الأولى من علاج السلّ الرئوي. خطره الأكبر التهاب الكبد، ويرفع حمض البول، ويلوّن سوائل الجسم، ويُضعف موانع الحمل.',
    en: 'A three-drug tablet combining isoniazid, rifampicin and pyrazinamide for the first, intensive phase of treating pulmonary tuberculosis. Its greatest risk is hepatitis; it also raises uric acid, discolours body fluids and weakens contraceptives.'
  },
  brands: ['ريفاتير'],
  uses: ['tb'],
  keywords: { ar: ['سل', 'درن', 'قرص ثلاثي', 'المرحلة المكثفة', 'ريفاتير'], en: ['Rifater', 'HRZ', 'fixed-dose combination', 'tuberculosis', 'intensive phase'] }
});

DRUGS.push({
  id: 'ethambutol-isoniazid-rifampicin',
  cls: 'antituberculosis-combo',
  otc: false,
  alert: true,
  name:  { ar: 'الإيثامبوتول مع الأيزونيازيد والريفامبيسين', en: 'Ethambutol + isoniazid + rifampicin' },
  short: {
    ar: 'قرص ثلاثي يجمع الإيثامبوتول والأيزونيازيد والريفامبيسين، وتخصّه نشرته بمرحلة الاستمرار عند من عاد إليه السلّ أو فشل علاجه السابق. يجمع خطر الكبد وخطر العين معاً.',
    en: 'A three-drug tablet combining ethambutol, isoniazid and rifampicin, which its label reserves for the continuation phase in people whose tuberculosis has returned or whose earlier treatment failed. It carries the liver risk and the eye risk together.'
  },
  brands: [],
  uses: ['tb'],
  keywords: { ar: ['سل', 'درن', 'قرص ثلاثي', 'انتكاس السل', 'إعادة العلاج'], en: ['HRE', 'fixed-dose combination', 'tuberculosis', 'retreatment', 'continuation phase'] }
});

DRUGS.push({
  id: 'ethambutol-isoniazid-pyrazinamide-rifampicin',
  cls: 'antituberculosis-combo',
  otc: false,
  alert: true,
  name:  { ar: 'الإيثامبوتول مع الأيزونيازيد والبيرازيناميد والريفامبيسين', en: 'Ethambutol + isoniazid + pyrazinamide + rifampicin' },
  short: {
    ar: 'القرص الرباعي الذي يبدأ به علاج السلّ في النظام المعياري لمنظمة الصحة العالمية، يجمع أدوية السلّ الأربعة الأولى في حبّة واحدة. يجمع أخطارها: الكبد والعين والنقرس وكثرة التعارضات.',
    en: 'The four-drug tablet with which tuberculosis treatment begins in the World Health Organization standard regimen, combining the four first-line TB drugs in one pill. It carries their risks together: liver, eyes, gout and many interactions.'
  },
  brands: ['ريمستار'],
  uses: ['tb'],
  keywords: { ar: ['سل', 'درن', 'القرص الرباعي', 'المرحلة المكثفة', 'ريمستار'], en: ['Rimstar', 'Voractiv', 'HRZE', 'RIPE', '4FDC', 'fixed-dose combination', 'tuberculosis'] }
});

DRUGS.push({
  id: 'isoniazid-rifapentine',
  cls: 'antituberculosis-combo',
  otc: false,
  alert: true,
  name:  { ar: 'الأيزونيازيد مع الريفابنتين', en: 'Isoniazid + rifapentine' },
  short: {
    ar: 'علاج وقائي قصير يجمع الأيزونيازيد والريفابنتين لمن يحمل عدوى سلّ كامنة ويُخشى أن تنشط، بعد التأكّد من خلوّه من السلّ النشط. إكماله أسهل من الأنظمة الطويلة، لكنه يثير تفاعلات تشبه الإنفلونزا أكثر من الأيزونيازيد وحده.',
    en: 'A short preventive treatment combining isoniazid and rifapentine for people carrying a latent TB infection at risk of becoming active, once active TB has been ruled out. It is easier to complete than longer regimens but triggers flu-like reactions more often than isoniazid alone.'
  },
  brands: [],
  uses: ['tb'],
  keywords: { ar: ['سل كامن', 'وقاية السل', 'ريفابنتين', 'أيزونيازيد', 'مخالطو السل'], en: ['3HP', '1HP', 'Priftin', 'rifapentine', 'latent TB', 'TB preventive treatment'] }
});

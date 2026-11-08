/* ============================================================
   موسوعة الأدوية — فهرس دفعة سدّ الفجوة (٢) (gap-rx2)
   rx/index-gap-rx2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   تسع بطاقات لأدوية ولقاح يمسك الإنسان علبتها بيده ويسأل عنها:
   مونتيلوكاست · تامسولوسين · سيلدينافيل · كولشيسين · إيزوتريتينوين ·
   سيتاغليبتين · أليندرونات · فاموتيدين · لقاح كوفيد-١٩.

   ملاحظة على الفصائل: ستّ فصائل غير معرّفة في DRUG_CLASSES داخل
   drugs.js (مضادات اللوكوترايين · حاصرات ألفا · مثبّطات PDE5 ·
   مضادات نوبة النقرس · الريتينويدات · مثبّطات DPP-4)، وdrugs.js
   ممنوع تعديله في هذه الدفعة. فتُضاف أسماؤها من هنا إضافةً لا
   استبدالاً، ولكل فصيلة مجموعتها. أما البيسفوسفونات وحاصرات H2
   واللقاح فمعرّفة ومجموعتها مضبوطة سلفاً فلا تُعاد.
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* أسماء فصائل هذه الدفعة — تُضاف ولا تستبدل شيئاً موجوداً */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'leukotriene-antagonist': { ar: 'مضادات مستقبل اللوكوترايين', en: 'Leukotriene receptor antagonists' },
    'alpha-blocker':          { ar: 'حاصرات ألفا', en: 'Alpha blockers' },
    'pde5-inhibitor':         { ar: 'مثبّطات إنزيم PDE5', en: 'PDE5 inhibitors' },
    'antigout':               { ar: 'مضادات نوبة النقرس', en: 'Anti-gout (acute) agents' },
    'retinoid':               { ar: 'الريتينويدات (مشتقّات فيتامين أ)', en: 'Retinoids' },
    'dpp4-inhibitor':         { ar: 'مثبّطات DPP-4', en: 'DPP-4 inhibitors' }
  };
  var grp = {
    'leukotriene-antagonist': 'allergy',
    'alpha-blocker':          'repro',
    'pde5-inhibitor':         'repro',
    'antigout':               'pain',
    'retinoid':               'skin',
    'dpp4-inhibitor':         'endo'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
})();

DRUGS.push({
  id: 'montelukast',
  cls: 'leukotriene-antagonist',
  otc: false,
  alert: true,
  name:  { ar: 'المونتيلوكاست', en: 'Montelukast' },
  short: {
    ar: 'دواء وقائي للربو وحساسية الأنف يُبتلع حبّة، يكبح مادة اللوكوترايين المسبّبة للضيق والالتهاب. ليس موسّعاً سريعاً ولا يُنقذ نوبة الربو. تحمل نشرته تحذيراً مؤطّراً من تبدّل المزاج والسلوك.',
    en: 'A preventive tablet for asthma and nasal allergy that blocks leukotriene, the substance behind narrowing and inflammation. It is not a quick reliever and does not rescue an asthma attack. Its leaflet carries a boxed warning about changes in mood and behaviour.'
  },
  brands: ['سينجولير', 'مونتير', 'لوكاست', 'مونتيلوكاست'],
  uses: ['asthma', 'allergic-rhinitis'],
  keywords: { ar: ['ربو', 'حساسية الأنف', 'سينجولير', 'لوكوترايين'], en: ['asthma', 'allergic rhinitis', 'singulair', 'leukotriene'] }
});

DRUGS.push({
  id: 'tamsulosin',
  cls: 'alpha-blocker',
  otc: false,
  alert: false,
  name:  { ar: 'التامسولوسين', en: 'Tamsulosin' },
  short: {
    ar: 'دواء يرخي عضلة عنق المثانة والبروستاتا فيسهّل التبوّل عند تضخّم البروستاتا الحميد. لا يصغّر الغدّة بل يفتح المجرى. قد يهبط الضغط عند الوقوف، ويُخبَر طبيب العيون به قبل أي عملية ماء أبيض.',
    en: 'A medicine that relaxes the muscle of the bladder neck and prostate, easing urination in benign prostate enlargement. It does not shrink the gland but opens the passage. Blood pressure may drop on standing, and the eye surgeon must be told of it before any cataract operation.'
  },
  brands: ['أومنيك', 'هارنال', 'فلوماكس', 'تامسولوسين'],
  uses: ['bph'],
  keywords: { ar: ['البروستاتا', 'تضخّم البروستاتا', 'أومنيك', 'التبوّل'], en: ['prostate', 'bph', 'omnic', 'flomax'] }
});

DRUGS.push({
  id: 'sildenafil',
  cls: 'pde5-inhibitor',
  otc: false,
  alert: true,
  name:  { ar: 'السيلدينافيل', en: 'Sildenafil' },
  short: {
    ar: 'دواء يحسّن ضعف الانتصاب بزيادة تدفّق الدم إلى القضيب، وله شكل آخر لارتفاع ضغط الشريان الرئوي. ⛔ قاتل مع أدوية النترات وموسّعات الشرايين التاجية لأن اجتماعهما يهوي بالضغط.',
    en: 'A medicine that improves erectile dysfunction by increasing blood flow to the penis, with another form for high pressure in the lung artery. It is deadly with nitrate medicines and coronary vasodilators, because together they crash blood pressure.'
  },
  brands: ['فياجرا', 'ريفاتيو', 'سيلدينافيل'],
  uses: ['erectile-dysfunction', 'pulmonary-hypertension'],
  keywords: { ar: ['ضعف الانتصاب', 'فياجرا', 'النترات', 'ضغط الرئة'], en: ['erectile dysfunction', 'viagra', 'nitrates', 'pde5'] }
});

DRUGS.push({
  id: 'colchicine',
  cls: 'antigout',
  otc: false,
  alert: true,
  name:  { ar: 'الكولشيسين', en: 'Colchicine' },
  short: {
    ar: 'دواء قديم يهدّئ نوبة النقرس الحادّة ويقي حمّى البحر المتوسط العائلية، ويُستعمل في التهاب التامور. هامش أمانه ضيّق: الفرق بين النافع والسامّ قريب، والزيادة عليه خطر جسيم، ويتعارض مع أدوية كثيرة.',
    en: 'An old medicine that calms an acute gout attack, guards against familial Mediterranean fever, and is used in pericarditis. Its safety margin is narrow: the line between helpful and toxic is close, exceeding it is gravely dangerous, and it interacts with many drugs.'
  },
  brands: ['كولشيسين', 'كولكري', 'كولشيمين'],
  uses: ['gout', 'fmf', 'pericarditis'],
  keywords: { ar: ['النقرس', 'كولشيسين', 'حمّى البحر المتوسط', 'التامور'], en: ['gout', 'colchicine', 'fmf', 'pericarditis'] }
});

DRUGS.push({
  id: 'isotretinoin',
  cls: 'retinoid',
  otc: false,
  alert: true,
  name:  { ar: 'الإيزوتريتينوين', en: 'Isotretinoin' },
  short: {
    ar: 'مشتقّ قويّ من فيتامين أ لحبّ الشباب الشديد المقاوم، يجفّف الغدد الدهنية فيحسم المرض في دورة واحدة غالباً. ⛔ مشوّه للأجنّة تشويهاً بالغاً، ويُصرف تحت برنامج صارم لمنع الحمل ومراقبة دقيقة.',
    en: 'A powerful vitamin A derivative for severe, resistant acne that dries the oil glands and often settles the disease in a single course. It causes severe birth defects and is dispensed under a strict pregnancy-prevention programme with close monitoring.'
  },
  brands: ['روأكيوتان', 'أكيوتان', 'أوراتان', 'إيزوتريتينوين'],
  uses: ['acne'],
  keywords: { ar: ['حب الشباب', 'روأكيوتان', 'فيتامين أ', 'ريتينويد'], en: ['acne', 'roaccutane', 'accutane', 'retinoid'] }
});

DRUGS.push({
  id: 'sitagliptin',
  cls: 'dpp4-inhibitor',
  otc: false,
  alert: false,
  name:  { ar: 'السيتاغليبتين', en: 'Sitagliptin' },
  short: {
    ar: 'دواء لسكّري النوع الثاني يُبتلع حبّة، يرفع هرمونات الأمعاء التي تنبّه الأنسولين بعد الأكل. لطيف نسبياً ونادراً ما يخفض السكّر وحده، ويُجمع كثيراً مع الميتفورمين في قرص واحد.',
    en: 'A tablet for type 2 diabetes that raises the gut hormones which prompt insulin after eating. It is relatively gentle and rarely lowers blood sugar on its own, and it is often combined with metformin in a single tablet.'
  },
  brands: ['جانوفيا', 'جانوميت', 'سيتاغليبتين'],
  uses: ['type2-diabetes'],
  keywords: { ar: ['السكري', 'جانوفيا', 'سكري النوع الثاني', 'الإنكريتين'], en: ['diabetes', 'januvia', 'type 2 diabetes', 'dpp-4'] }
});

DRUGS.push({
  id: 'alendronate',
  cls: 'bisphosphonate',
  otc: false,
  alert: false,
  name:  { ar: 'الأليندرونات', en: 'Alendronate (Alendronic acid)' },
  short: {
    ar: 'دواء لهشاشة العظام يبطّئ الخلايا التي تهدم العظم فتزيد كثافته ويقلّ خطر الكسر. طريقة أخذه صارمة: على معدة فارغة بماء عادي ثم البقاء منتصباً وعدم الاستلقاء، وإلا هيّج المريء وقرّحه.',
    en: 'A medicine for osteoporosis that slows the cells which break bone down, so its density rises and fracture risk falls. How it is taken is strict: on an empty stomach with plain water, then staying upright and not lying down, or it irritates and ulcerates the gullet.'
  },
  brands: ['فوساماكس', 'فوسافانس', 'أليندرونات'],
  uses: ['osteoporosis'],
  keywords: { ar: ['هشاشة العظام', 'فوساماكس', 'كثافة العظم', 'بيسفوسفونات'], en: ['osteoporosis', 'fosamax', 'bone density', 'bisphosphonate'] }
});

DRUGS.push({
  id: 'famotidine',
  cls: 'h2-blocker',
  otc: true,
  alert: false,
  name:  { ar: 'الفاموتيدين', en: 'Famotidine' },
  short: {
    ar: 'حاصر مستقبل H2 يقلّل حمض المعدة، صار البديل الآمن بعد سحب الرانيتيدين. يخفّف الحرقة وعسر الهضم والقرحة والارتجاع. يُصرف بلا وصفة لكثير من الحالات، وأثره أبطأ ظهوراً وأخفّ من مثبّطات المضخّة.',
    en: 'An H2 receptor blocker that reduces stomach acid, now the safe replacement after ranitidine was withdrawn. It eases heartburn, indigestion, ulcer and reflux. It is available without prescription for many situations, and its effect is slower to appear and gentler than proton-pump inhibitors.'
  },
  brands: ['بيبسيد', 'أنتودين', 'فامودين', 'فاموتيدين'],
  uses: ['peptic-ulcer', 'gerd', 'dyspepsia', 'chronic-gastritis'],
  keywords: { ar: ['حموضة', 'حرقة المعدة', 'بيبسيد', 'ارتجاع'], en: ['acid', 'heartburn', 'pepcid', 'reflux'] }
});

DRUGS.push({
  id: 'covid-vaccine',
  cls: 'vaccine',
  otc: false,
  alert: false,
  name:  { ar: 'لقاح كوفيد-١٩', en: 'COVID-19 vaccine' },
  short: {
    ar: 'لقاح يدرّب المناعة على فيروس كورونا المستجدّ فيخفّف شدّة المرض والدخول للمستشفى والوفاة. عدّة أنواع: الرنا المرسال والفيروس الناقل والفيروس المعطّل. لا يعالج عدوى قائمة، ووقايته تُجدَّد بجرعات معزّزة.',
    en: 'A vaccine that trains immunity against the novel coronavirus, reducing severity, hospitalisation and death. Several kinds exist: messenger RNA, viral vector and inactivated virus. It does not treat an existing infection, and its protection is renewed with booster doses.'
  },
  brands: ['فايزر (كوميرناتي)', 'موديرنا', 'أسترازينيكا', 'سينوفارم'],
  uses: ['covid19'],
  keywords: { ar: ['لقاح كورونا', 'كوفيد', 'التطعيم', 'فايزر'], en: ['covid vaccine', 'coronavirus', 'immunisation', 'pfizer'] }
});

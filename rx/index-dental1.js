/* ============================================================
   موسوعة الأدوية — فهرس دفعة الأسنان والتليّف الكيسي (dental1)
   rx/index-dental1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   ثلاثة من قائمة منظمة الصحة للأدوية الأساسية، الطبعة الرابعة
   والعشرين (rx/EML-2025.json، وسم dental1): مادة السدّادة السنّية،
   ومعدِّلا بروتين التليّف الكيسي.

   ملاحظة على الفصائل: فصيلتا هذه الدفعة (مواد الأسنان · معدِّلات
   بروتين التليّف الكيسي) غير معرّفتين في DRUG_CLASSES داخل drugs.js،
   وdrugs.js ممنوع تعديله في هذه الدفعة. فتُضافان من هنا إضافةً لا
   استبدالاً، ولا تُكتبان فوق فصيلة سبق أن عرّفها عامل آخر.
   ============================================================ */

var DRUGS = window.DRUGS || [];

(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'dental-material': { ar: 'مواد الأسنان الوقائية والترميمية', en: 'Dental preventive and restorative materials' },
    'cftr-modulator':  { ar: 'معدِّلات بروتين التليّف الكيسي', en: 'CFTR modulators' }
  };
  var grp = {
    'dental-material': 'dental',
    'cftr-modulator': 'allergy'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_GROUPS !== 'undefined' && DRUG_GROUPS) {
    if (!DRUG_GROUPS.dental) { DRUG_GROUPS.dental = { ar: 'الأسنان والفم', en: 'Teeth and mouth' }; }
  }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
})();

DRUGS.push({
  id: 'resin-composite-low-viscosity',
  cls: 'dental-material',
  otc: false,
  alert: false,
  name:  { ar: 'الكمبوزيت الراتنجي منخفض اللزوجة', en: 'Resin-based composite (low-viscosity)' },
  short: {
    ar: 'مادة سنّية شبه سائلة يضعها طبيب الأسنان على أخاديد أسطح المضغ في الأضراس فيسدّها أمام الطعام والجراثيم، وهي أشهر السدّادات الوقائية من التسوّس. لا تُبلع ولا تُصرف للمريض.',
    en: 'A near-liquid dental material that the dentist places in the grooves of the chewing surfaces of the back teeth to seal them against food and bacteria; the best-known preventive sealant against decay. It is not swallowed and is not dispensed to patients.'
  },
  brands: ['هيليوسيل', 'كلينبرو', 'فيسوريت'],
  uses: ['tooth-decay'],
  keywords: {
    ar: ['سدادة الأسنان', 'حشوة وقائية', 'سيلانت', 'كمبوزيت', 'راتنج', 'تسوس الأضراس'],
    en: ['dental sealant', 'fissure sealant', 'pit and fissure sealant', 'flowable composite', 'resin-based sealant', 'Bis-GMA']
  }
});

DRUGS.push({
  id: 'ivacaftor',
  cls: 'cftr-modulator',
  otc: false,
  alert: false,
  name:  { ar: 'الآيفاكافتور', en: 'Ivacaftor' },
  short: {
    ar: 'دواء للتليّف الكيسي يُصلح عمل البروتين المعطوب المسبّب للمرض بدل علاج أعراضه، لمن يحمل طفرة جينية تستجيب له. يحتاج تحاليل كبد وفحص عيون للأطفال، ويُمنع معه الجريب فروت.',
    en: 'A cystic fibrosis medicine that repairs the working of the faulty protein behind the disease instead of treating its symptoms, for people carrying a gene variant that responds to it. It needs liver tests and eye checks in children, and grapefruit is forbidden with it.'
  },
  brands: ['كاليديكو'],
  uses: ['cystic-fibrosis'],
  keywords: {
    ar: ['التليف الكيسي', 'كاليديكو', 'ايفاكافتور', 'معدل بروتين', 'مقوي القناة'],
    en: ['Kalydeco', 'CFTR potentiator', 'CFTR modulator', 'cystic fibrosis']
  }
});

DRUGS.push({
  id: 'elexacaftor-tezacaftor-ivacaftor',
  cls: 'cftr-modulator',
  otc: false,
  alert: true,
  name:  { ar: 'الإليكساكافتور مع التيزاكافتور والآيفاكافتور', en: 'Elexacaftor + tezacaftor + ivacaftor' },
  short: {
    ar: 'ثلاث مواد في علاج واحد للتليّف الكيسي: مصحِّحان يوصلان البروتين المعطوب إلى سطح الخلية، ومقوٍّ يفتحه. يحمل تحذيراً رسمياً مؤطَّراً من أذى كبدي قد يكون مميتاً، ويُمنع معه الجريب فروت.',
    en: 'Three substances in one treatment for cystic fibrosis: two correctors that bring the faulty protein to the cell surface, and a potentiator that opens it. It carries an official boxed warning of liver injury that can be fatal, and grapefruit is forbidden with it.'
  },
  brands: ['ترايكافتا', 'كافتريو'],
  uses: ['cystic-fibrosis'],
  keywords: {
    ar: ['التليف الكيسي', 'ترايكافتا', 'كافتريو', 'العلاج الثلاثي', 'معدل بروتين'],
    en: ['Trikafta', 'Kaftrio', 'ETI', 'elexacaftor', 'tezacaftor', 'CFTR corrector', 'F508del']
  }
});

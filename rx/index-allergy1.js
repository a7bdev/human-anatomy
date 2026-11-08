/* ============================================================
   موسوعة الأدوية — فهرس دفعة الكورتيزونات والطوارئ التحسّسية
   rx/index-allergy1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'hydrocortisone',
  cls: 'corticosteroid',
  otc: false,
  alert: true,
  name:  { ar: 'الهيدروكورتيزون', en: 'Hydrocortisone' },
  short: {
    ar: 'الصورة الدوائية من هرمون الكورتيزول: يُعطى بديلاً عن هرمون ناقص في قصور الكظر، ويُعطى مضاداً للالتهاب في أمراض أخرى. من يأخذه تعويضاً لا يوقفه أبداً من نفسه.',
    en: 'The medicinal form of the hormone cortisol: given as replacement for a missing hormone in adrenal insufficiency, and as an anti-inflammatory in other conditions. Anyone taking it as replacement must never stop it on their own.'
  },
  brands: ['سولو كورتيف', 'هيدروكورتون', 'كورتيف', 'بلينادرين'],
  uses: ['addison', 'hypopituitarism', 'lupus', 'ulcerative-colitis', 'rheumatoid-arthritis', 'covid19'],
  keywords: { ar: ['كورتيزون', 'كورتيزول', 'قصور الكظر', 'هيدروكورتيزون'], en: ['cortisol', 'corticosteroid', 'glucocorticoid', 'adrenal insufficiency'] }
});

DRUGS.push({
  id: 'dexamethasone',
  cls: 'corticosteroid',
  otc: false,
  alert: true,
  name:  { ar: 'الديكساميثازون', en: 'Dexamethasone' },
  short: {
    ar: 'أقوى الكورتيزونات المتداولة أثراً على الالتهاب وأطولها بقاءً، وأقلّها تأثيراً في ملح الجسم وماءه. يُستعمل في الخانوق ونوبات المناعة وأورام الدم وكوفيد الشديد.',
    en: 'The strongest of the common corticosteroids against inflammation and the longest acting, with the least effect on the body salt and water. Used in croup, immune flares, blood cancers and severe COVID.'
  },
  brands: ['ديكادرون', 'فورتيكورتين', 'ديكساميثازون', 'ديكسازون'],
  uses: ['croup', 'lupus', 'rheumatoid-arthritis', 'asthma', 'ulcerative-colitis', 'multiple-myeloma', 'covid19'],
  keywords: { ar: ['كورتيزون', 'ديكساميثازون', 'ديكادرون', 'مضاد التهاب'], en: ['corticosteroid', 'glucocorticoid', 'decadron', 'steroid'] }
});

DRUGS.push({
  id: 'epinephrine',
  cls: 'vasopressor',
  otc: false,
  alert: true,
  name:  { ar: 'الأدرينالين', en: 'Epinephrine (adrenaline)' },
  short: {
    ar: 'الدواء الوحيد الذي يوقف صدمة الحساسية، ويُحقن في عضلة الفخذ من جهاز جاهز. لا بديل له ولا ينتظر: مضادّ الهيستامين والكورتيزون لا يحلّان محلّه أبداً.',
    en: 'The only medicine that halts anaphylaxis, injected into the thigh muscle from a ready-made device. Nothing replaces it and it does not wait: antihistamines and steroids are never a substitute.'
  },
  brands: ['إيبي بين', 'جيكست', 'إميريد', 'أدرينالين'],
  uses: ['anaphylaxis', 'food-allergy-adult', 'drug-allergy', 'shock'],
  keywords: { ar: ['أدرينالين', 'صدمة حساسية', 'التأق', 'حقنة الطوارئ'], en: ['adrenaline', 'epipen', 'anaphylaxis', 'autoinjector'] }
});

DRUGS.push({
  id: 'methylprednisolone',
  cls: 'corticosteroid',
  otc: false,
  alert: true,
  name:  { ar: 'الميثيل بريدنيزولون', en: 'Methylprednisolone' },
  short: {
    ar: 'كورتيزون أقوى من الهيدروكورتيزون في كبح الالتهاب وأخفّ منه على ملح الجسم. يُعطى أقراصاً وحقناً وريدية في نوبات المناعة الحادّة كانتكاسة التصلّب المتعدّد.',
    en: 'A corticosteroid stronger than hydrocortisone at suppressing inflammation and lighter on the body salt. Given as tablets and intravenous injections in acute immune flares such as a multiple sclerosis relapse.'
  },
  brands: ['ميدرول', 'سولو ميدرول', 'ديبو ميدرول'],
  uses: ['ms', 'rheumatoid-arthritis', 'lupus', 'asthma', 'crohns', 'ulcerative-colitis', 'itp', 'uveitis'],
  keywords: { ar: ['كورتيزون', 'ميدرول', 'ميثيل بريدنيزولون', 'نبضة وريدية'], en: ['corticosteroid', 'medrol', 'solu-medrol', 'glucocorticoid'] }
});

DRUGS.push({
  id: 'fludrocortisone',
  cls: 'corticosteroid',
  otc: false,
  alert: true,
  name:  { ar: 'الفلودروكورتيزون', en: 'Fludrocortisone' },
  short: {
    ar: 'كورتيزون من نوع آخر: عمله الأول على الملح والماء لا على الالتهاب. يُمسك الصوديوم ويطرح البوتاسيوم فيرفع الضغط، فيعوّض الهرمون الناقص في قصور الكظر.',
    en: 'A corticosteroid of another kind: its first job is on salt and water, not on inflammation. It holds sodium and sheds potassium, raising blood pressure, replacing the missing hormone in adrenal insufficiency.'
  },
  brands: ['فلورينيف', 'أستونين'],
  uses: ['addison', 'hypotension', 'syncope', 'hyponatremia'],
  keywords: { ar: ['فلودروكورتيزون', 'فلورينيف', 'قصور الكظر', 'هبوط الضغط الوضعي'], en: ['mineralocorticoid', 'florinef', 'addison', 'orthostatic hypotension'] }
});

DRUGS.push({
  id: 'metoclopramide',
  cls: 'antiemetic',
  otc: false,
  alert: true,
  name:  { ar: 'الميتوكلوبراميد', en: 'Metoclopramide' },
  short: {
    ar: 'مضاد للغثيان يعمل كذلك على دفع المعدة إلى الإفراغ. يحمل تحذيراً رسمياً بحركات لا إرادية في الوجه قد لا تزول، ولهذا يُوصف لأيام قليلة لا لمدّة طويلة.',
    en: 'An anti-sickness medicine that also pushes the stomach to empty. It carries an official warning of involuntary facial movements that may not go away, which is why it is prescribed for a few days and not long term.'
  },
  brands: ['بريمبران', 'ريجلان', 'بلازيل', 'ميتوكلوبراميد'],
  uses: ['gastroparesis', 'gerd', 'migraine'],
  keywords: { ar: ['غثيان', 'قيء', 'بريمبران', 'ميتوكلوبراميد'], en: ['antiemetic', 'prokinetic', 'primperan', 'reglan'] }
});

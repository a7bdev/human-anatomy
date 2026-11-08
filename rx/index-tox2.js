/* ============================================================
   موسوعة الأدوية — فهرس دفعة tox2 (ترياقات وتسمّم · سوائل وأملاح ومحاليل)
   rx/index-tox2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'sodium-thiosulfate',
  cls: 'antidote',
  otc: false,
  alert: false,
  name:  { ar: 'ثيوسلفات الصوديوم', en: 'Sodium thiosulfate' },
  short: {
    ar: 'ترياق وريدي في المستشفى لتسمم السيانيد، ويحمي سمع الأطفال من أذى دواء السيسبلاتين الكيميائي.',
    en: 'A hospital intravenous antidote for cyanide poisoning, also used to protect the hearing of children from harm caused by the chemotherapy drug cisplatin.'
  },
  brands: [],
  uses: ['poisoning', 'smoke-inhalation'],
  keywords: { ar: ['ترياق', 'سيانيد', 'سم', 'حماية السمع', 'سيسبلاتين'], en: ['cyanide antidote', 'Pedmark', 'Nithiodote', 'ototoxicity', 'cisplatin'] }
});

DRUGS.push({
  id: 'succimer',
  cls: 'heavy-metal-chelator',
  otc: false,
  alert: false,
  name:  { ar: 'السكسيمر', en: 'Succimer' },
  short: {
    ar: 'دواء خالب للمعادن بالفم يزيد طرح الرصاص في البول، معتمد لتسمم الرصاص عند الأطفال ويستعمل في تسمم الزئبق.',
    en: 'An oral metal-chelating drug that increases the removal of lead in the urine, approved for lead poisoning in children and used in mercury poisoning.'
  },
  brands: [],
  uses: ['lead-poisoning', 'mercury-poisoning'],
  keywords: { ar: ['خالب', 'رصاص', 'زئبق', 'معادن ثقيلة'], en: ['DMSA', 'Chemet', 'chelator', 'lead', 'dimercaptosuccinic acid'] }
});

DRUGS.push({
  id: 'sodium-chloride',
  cls: 'rehydration',
  otc: false,
  alert: false,
  name:  { ar: 'كلوريد الصوديوم', en: 'Sodium chloride' },
  short: {
    ar: 'المحلول الملحي الوريدي، أكثر السوائل استعمالاً لتعويض الماء والملح في الجفاف والنزف والإنتان والصدمة.',
    en: 'Intravenous saline, the most widely used fluid for replacing water and salt in dehydration, bleeding, sepsis and shock.'
  },
  brands: [],
  uses: ['dehydration', 'shock', 'sepsis', 'severe-bleeding', 'hyponatremia', 'hyperglycemic-crisis'],
  keywords: { ar: ['محلول ملحي', 'نورمال سلاين', 'سيروم', 'ملح', 'تسريب'], en: ['normal saline', 'NaCl', 'saline', 'IV fluid', 'crystalloid'] }
});

DRUGS.push({
  id: 'glucose',
  cls: 'rehydration',
  otc: false,
  alert: false,
  name:  { ar: 'الجلوكوز', en: 'Glucose (Dextrose)' },
  short: {
    ar: 'سكر الدم في محلول وريدي: المركّز منه يرفع السكر بسرعة في الهبوط الشديد، والمخفّف يمد الجسم بالماء والسعرات.',
    en: 'Blood sugar in an intravenous solution: the concentrated form raises sugar quickly in severe hypoglycaemia, and the dilute form supplies water and calories.'
  },
  brands: [],
  uses: ['hypoglycemia', 'hyperkalemia', 'hyperglycemic-crisis'],
  keywords: { ar: ['دكستروز', 'سكر', 'هبوط السكر', 'محلول سكري'], en: ['dextrose', 'dextrose injection', 'glucose infusion'] }
});

DRUGS.push({
  id: 'glucose-with-sodium-chloride',
  cls: 'rehydration',
  otc: false,
  alert: false,
  name:  { ar: 'الجلوكوز مع كلوريد الصوديوم', en: 'Glucose with sodium chloride' },
  short: {
    ar: 'محلول وريدي يجمع السكر والملح ليعطي الماء والأملاح والسعرات معاً، وأهم ما يحذّر منه نقص الصوديوم.',
    en: 'An intravenous solution combining sugar and salt to give water, electrolytes and calories together; its main warning is low sodium.'
  },
  brands: [],
  uses: ['dehydration', 'hyperglycemic-crisis'],
  keywords: { ar: ['دكستروز سلاين', 'محلول سكري ملحي', 'سيروم'], en: ['dextrose saline', 'dextrose and sodium chloride'] }
});

DRUGS.push({
  id: 'potassium-chloride',
  cls: 'mineral-supplement',
  otc: false,
  alert: true,
  name:  { ar: 'كلوريد البوتاسيوم', en: 'Potassium chloride' },
  short: {
    ar: 'يعوّض نقص البوتاسيوم بالفم أو بالوريد. دواء عالي الإنذار: زيادته أو سرعته قد توقف القلب، والحقن المركّز لا يُعطى دون تخفيف أبداً.',
    en: 'Replaces low potassium by mouth or into a vein. A high-alert drug: too much or too fast can stop the heart, and the concentrate is never given undiluted.'
  },
  brands: [],
  uses: ['hypokalemia', 'hyperglycemic-crisis'],
  keywords: { ar: ['بوتاسيوم', 'نقص البوتاسيوم', 'أملاح'], en: ['KCl', 'potassium supplement', 'Klor-Con', 'Slow-K'] }
});

DRUGS.push({
  id: 'sodium-hydrogen-carbonate',
  cls: 'antacid',
  otc: true,
  alert: false,
  name:  { ar: 'بيكربونات الصوديوم', en: 'Sodium hydrogen carbonate (Sodium bicarbonate)' },
  short: {
    ar: 'صودا الخبز: بالفم مضاد حموضة بلا وصفة، وبالوريد في المستشفى لعلاج زيادة الحمض في الدم وبعض حالات التسمم.',
    en: 'Baking soda: by mouth an over-the-counter antacid, and into a vein in hospital to treat excess acid in the blood and some poisonings.'
  },
  brands: [],
  uses: ['dyspepsia', 'gerd', 'hyperkalemia', 'poisoning', 'ckd', 'hyperglycemic-crisis'],
  keywords: { ar: ['بيكربونات', 'صودا الخبز', 'مضاد حموضة', 'حماض'], en: ['sodium bicarbonate', 'baking soda', 'bicarb', 'antacid', 'alkalinizing agent'] }
});

DRUGS.push({
  id: 'sodium-lactate-compound-solution',
  cls: 'rehydration',
  otc: false,
  alert: false,
  name:  { ar: 'محلول رينجر لاكتات', en: 'Sodium lactate, compound solution (Ringer lactate)' },
  short: {
    ar: 'محلول وريدي متوازن يشبه سوائل الجسم، من أهم محاليل الإنعاش في النزف والإنتان والجفاف والحروق.',
    en: 'A balanced intravenous solution resembling body fluids, one of the main resuscitation fluids in bleeding, sepsis, dehydration and burns.'
  },
  brands: [],
  uses: ['dehydration', 'shock', 'sepsis', 'severe-bleeding', 'burns'],
  keywords: { ar: ['رينجر', 'هارتمان', 'رينجر لاكتات', 'محلول متوازن'], en: ['Ringer lactate', 'lactated Ringer', 'Hartmann solution', 'compound sodium lactate'] }
});

DRUGS.push({
  id: 'water-for-injection',
  cls: 'other',
  otc: false,
  alert: false,
  name:  { ar: 'ماء الحقن', en: 'Water for injection' },
  short: {
    ar: 'ماء معقم نقي تُذاب به الأدوية المسحوقة أو تُخفف قبل الحقن. لا يُحقن وحده في الوريد أبداً لأنه يفجّر كريات الدم.',
    en: 'Pure sterile water used to dissolve powdered drugs or dilute them before injection. It is never injected alone into a vein because it bursts red blood cells.'
  },
  brands: [],
  uses: [],
  keywords: { ar: ['ماء معقم', 'مذيب', 'ماء مقطر للحقن'], en: ['sterile water for injection', 'SWFI', 'diluent'] }
});

DRUGS.push({
  id: 'intraperitoneal-dialysis-solution',
  cls: 'other',
  otc: false,
  alert: false,
  name:  { ar: 'محلول الغسيل البريتوني', en: 'Intraperitoneal dialysis solution' },
  short: {
    ar: 'سائل سكري ملحي معقم يُصب في البطن عبر أنبوب لتنقية الدم عند فشل الكلى، ويستعمله كثير من المرضى في بيوتهم.',
    en: 'A sterile sugar-and-salt fluid run into the abdomen through a tube to clean the blood in kidney failure, used by many patients at home.'
  },
  brands: ['ديانيل'],
  uses: ['ckd', 'aki'],
  keywords: { ar: ['غسيل بريتوني', 'غسيل كلى', 'ديلزة', 'فشل كلوي'], en: ['peritoneal dialysis', 'PD', 'CAPD', 'APD', 'Dianeal'] }
});

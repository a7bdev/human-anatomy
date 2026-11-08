/* ============================================================
   موسوعة الأدوية — فهرس دفعة الترياقات الأولى (tox1)
   rx/index-tox1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   الأدوية العشرة من قائمة منظمة الصحة للأدوية الأساسية، الطبعة
   الرابعة والعشرين: قسم الترياقات والمواد المستعملة في التسمّم.
   كلها تقريباً أدوية مستشفيات وإسعاف، فالبطاقة تشرح ما يجري
   للمريض وما يقوله للفريق، لا ما يفعله بنفسه.

   ملاحظة على الفصائل: فصائل هذه الدفعة (الترياقات · خالبات
   المعادن الثقيلة · الأملاح الوريدية) غير معرّفة في DRUG_CLASSES
   داخل drugs.js، وdrugs.js ممنوع تعديله. فتُضاف أسماؤها من هنا
   إضافةً لا استبدالاً، وتقع في مجموعة «أخرى» لأنه لا مجموعة
   للتسمّم في DRUG_GROUPS.
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* أسماء فصائل هذه الدفعة — تُضاف ولا تستبدل شيئاً موجوداً */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    antidote:               { ar: 'الترياقات ومضادّات التسمّم', en: 'Antidotes' },
    'heavy-metal-chelator': { ar: 'خالبات المعادن الثقيلة', en: 'Heavy-metal chelators' },
    electrolyte:            { ar: 'الأملاح والشوارد الوريدية', en: 'Intravenous electrolytes' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'other'; } }
  }
})();

DRUGS.push({
  id: 'charcoal-activated',
  cls: 'antidote',
  otc: true,
  alert: false,
  name:  { ar: 'الفحم المنشّط', en: 'Charcoal, activated' },
  short: {
    ar: 'مسحوق فحم معالَج يُشرب معلّقاً فيلتصق به كثير من الأدوية والسموم داخل المعدة قبل أن تُمتصّ. أنفع ما يكون مبكّراً بعد البلع، ولا يلتقط الكحول ولا الحديد ولا الليثيوم ولا الأحماض والقلويات.',
    en: 'Treated charcoal powder drunk as a suspension, to which many drugs and poisons stick inside the stomach before they are absorbed. It helps most early after swallowing, and it does not pick up alcohols, iron, lithium, acids or alkalis.'
  },
  brands: [],
  uses: ['poisoning'],
  keywords: { ar: ['فحم', 'فحم طبي', 'فحم نشط', 'تسمم', 'بلع دواء', 'جرعة زائدة'], en: ['activated charcoal', 'charcoal', 'Actidose', 'adsorbent', 'overdose', 'poisoning'] }
});

DRUGS.push({
  id: 'acetylcysteine',
  cls: 'antidote',
  otc: false,
  alert: false,
  name:  { ar: 'الأسيتيل سيستئين', en: 'Acetylcysteine' },
  short: {
    ar: 'ترياق تسمّم الباراسيتامول: يحمي الكبد إذا أُعطي مبكّراً بعد الجرعة الزائدة. وله وجه ثانٍ معروف مذيباً للبلغم اللزج في أمراض الصدر.',
    en: 'The antidote for paracetamol poisoning: it protects the liver when given early after an overdose. It has a second, familiar role as a thinner of sticky phlegm in chest diseases.'
  },
  brands: ['فلويموسيل'],
  uses: ['poisoning', 'acute-liver-failure', 'chronic-bronchitis', 'copd', 'cystic-fibrosis', 'bronchiectasis', 'acute-bronchitis', 'pneumonia'],
  keywords: { ar: ['اسيتيل سيستين', 'ان اسيتيل سيستئين', 'ترياق الباراسيتامول', 'مذيب بلغم', 'بلغم', 'فلوموسيل'], en: ['NAC', 'N-acetylcysteine', 'Acetadote', 'Fluimucil', 'mucolytic', 'paracetamol overdose', 'acetaminophen antidote'] }
});

DRUGS.push({
  id: 'naloxone',
  cls: 'antidote',
  otc: false,
  alert: false,
  name:  { ar: 'النالوكسون', en: 'Naloxone' },
  short: {
    ar: 'ترياق الجرعة الزائدة من الأفيونات: يعيد التنفّس والوعي لمن أبطأت الأفيونات تنفّسه أو أوقفته. أثره أقصر من أثر أغلب الأفيونات، فالإسعاف لازم حتى لو صحا المريض.',
    en: 'The antidote for opioid overdose: it restores breathing and consciousness in someone whose breathing opioids have slowed or stopped. Its effect is shorter than that of most opioids, so emergency care is needed even if the person wakes.'
  },
  brands: [],
  uses: ['poisoning', 'substance-addiction'],
  keywords: { ar: ['نالوكسون', 'ناركان', 'جرعة زائدة', 'أفيون', 'هيروين', 'مورفين', 'فنتانيل', 'بخاخ الانف'], en: ['Narcan', 'naloxone nasal spray', 'opioid overdose', 'opioid antagonist', 'heroin', 'fentanyl'] }
});

DRUGS.push({
  id: 'calcium-gluconate',
  cls: 'electrolyte',
  otc: false,
  alert: true,
  name:  { ar: 'جلوكونات الكالسيوم', en: 'Calcium gluconate' },
  short: {
    ar: 'ملح كالسيوم يُحقن في الوريد لعلاج هبوط الكالسيوم الحادّ، ولحماية القلب في ارتفاع البوتاسيوم وتسمّم المغنيسيوم، ويُدهن جلاً على حروق حمض الهيدروفلوريك. يُعطى ببطء وتحت مراقبة القلب.',
    en: 'A calcium salt injected into a vein to treat acute low calcium, to protect the heart in high potassium and magnesium toxicity, and applied as a gel to hydrofluoric acid burns. It is given slowly with heart monitoring.'
  },
  brands: [],
  uses: ['hypocalcemia', 'hyperkalemia', 'hypoparathyroidism', 'preeclampsia', 'burns', 'poisoning'],
  keywords: { ar: ['كالسيوم وريدي', 'جلوكونات', 'نقص الكالسيوم', 'فرط البوتاسيوم', 'حمض الهيدروفلوريك', 'تسمم المغنيسيوم'], en: ['calcium gluconate', 'IV calcium', 'hypocalcaemia', 'hyperkalaemia', 'hydrofluoric acid burn', 'magnesium toxicity'] }
});

DRUGS.push({
  id: 'dimercaprol',
  cls: 'heavy-metal-chelator',
  otc: false,
  alert: true,
  name:  { ar: 'الديميركابرول', en: 'Dimercaprol' },
  short: {
    ar: 'خالب قديم للمعادن الثقيلة يُعرف باسم «بال»، يُحقن عميقاً في العضل لعلاج التسمّم بالزرنيخ والذهب والزئبق، ومع إيديتات الكالسيوم في التسمّم بالرصاص. مذاب في زيت الفول السوداني، وحقنه مؤلم.',
    en: 'An old heavy-metal chelator known as "BAL", injected deep into muscle to treat arsenic, gold and mercury poisoning, and with calcium edetate in lead poisoning. It is dissolved in peanut oil, and the injection is painful.'
  },
  brands: [],
  uses: ['mercury-poisoning', 'lead-poisoning', 'poisoning'],
  keywords: { ar: ['بال', 'ديميركابرول', 'خالب', 'زرنيخ', 'زئبق', 'رصاص', 'معادن ثقيلة'], en: ['BAL', 'British anti-Lewisite', 'BAL in Oil', 'chelation', 'arsenic', 'mercury', 'lead'] }
});

DRUGS.push({
  id: 'fomepizole',
  cls: 'antidote',
  otc: false,
  alert: false,
  name:  { ar: 'الفوميبيزول', en: 'Fomepizole' },
  short: {
    ar: 'ترياق التسمّم بسائل مانع التجمّد (الإيثيلين غليكول) وبالميثانول الموجود في الكحول المغشوش: يوقف تحوّلهما في الجسم إلى أحماض تُتلف الكلى والبصر. يُعطى تسريباً في الوريد في المستشفى.',
    en: 'The antidote for poisoning with antifreeze (ethylene glycol) and with the methanol found in bootleg alcohol: it stops the body turning them into acids that destroy the kidneys and eyesight. It is given as a drip in hospital.'
  },
  brands: [],
  uses: ['poisoning'],
  keywords: { ar: ['فوميبيزول', 'مانع التجمد', 'ماء الرديتر', 'ايثيلين جلايكول', 'ميثانول', 'كحول مغشوش', 'كحول سام'], en: ['fomepizole', 'Antizol', '4-methylpyrazole', 'antifreeze', 'ethylene glycol', 'methanol', 'toxic alcohol'] }
});

DRUGS.push({
  id: 'methylthioninium-chloride',
  cls: 'antidote',
  otc: false,
  alert: true,
  name:  { ar: 'الميثيلين الأزرق', en: 'Methylthioninium chloride (methylene blue)' },
  short: {
    ar: 'صبغة زرقاء تُحقن في الوريد لعلاج ميثيموغلوبينية الدم، وهي حالة يعجز فيها الدم عن حمل الأكسجين فيزرقّ الجسم. تلوّن البول بالأزرق، وقد تسبّب متلازمة سيروتونين قاتلة مع بعض مضادات الاكتئاب.',
    en: 'A blue dye injected into a vein to treat methaemoglobinaemia, a condition in which the blood cannot carry oxygen and the body turns blue. It turns the urine blue, and it can cause fatal serotonin syndrome with some antidepressants.'
  },
  brands: [],
  uses: ['poisoning', 'shock'],
  keywords: { ar: ['ميثيلين ازرق', 'ازرق الميثيلين', 'ميثيموغلوبين', 'ازرقاق', 'صبغة زرقاء'], en: ['methylene blue', 'ProvayBlue', 'methaemoglobinaemia', 'methemoglobinemia', 'vasoplegia'] }
});

DRUGS.push({
  id: 'prussian-blue',
  cls: 'antidote',
  otc: false,
  alert: false,
  name:  { ar: 'الأزرق البروسي', en: 'Potassium ferric hexacyano-ferrate(II) -2H2O (Prussian blue)' },
  short: {
    ar: 'كبسولات زرقاء تُؤخذ بالفم بعد التلوّث الداخلي بالسيزيوم المشعّ أو الثاليوم، فتحبسهما في الأمعاء وتُسرّع خروجهما. تُصرف بوصفة فقط، وصبغة الرسّامين التي تحمل الاسم نفسه ليست دواءً.',
    en: 'Blue capsules taken by mouth after internal contamination with radioactive caesium or thallium, which trap them in the gut and speed their removal. Prescription only, and the artists\' dye of the same name is not a medicine.'
  },
  brands: [],
  uses: ['poisoning'],
  keywords: { ar: ['ازرق بروسي', 'ازرق بروسيا', 'سيزيوم', 'ثاليوم', 'تلوث اشعاعي', 'طوارئ اشعاعية'], en: ['Radiogardase', 'Prussian blue', 'ferric hexacyanoferrate', 'caesium', 'cesium', 'thallium', 'radiation emergency'] }
});

DRUGS.push({
  id: 'sodium-calcium-edetate',
  cls: 'heavy-metal-chelator',
  otc: false,
  alert: true,
  name:  { ar: 'إيديتات الكالسيوم والصوديوم', en: 'Sodium calcium edetate' },
  short: {
    ar: 'خالب يُحقن لإخراج الرصاص من الدم ومن مخازنه في الجسم عند التسمّم الحادّ والمزمن والاعتلال الدماغي الرصاصي. قد يؤذي الكلى ويلزم معه قياس البول، ولا يغني عن الابتعاد عن مصدر الرصاص.',
    en: 'A chelator injected to remove lead from the blood and from the body\'s stores in acute and chronic poisoning and in lead encephalopathy. It can harm the kidneys and urine output must be tracked, and it does not replace getting away from the lead source.'
  },
  brands: [],
  uses: ['lead-poisoning'],
  keywords: { ar: ['ايديتات', 'اي دي تي ايه', 'خالب الرصاص', 'تسمم الرصاص', 'رصاص'], en: ['calcium EDTA', 'edetate calcium disodium', 'Calcium Disodium Versenate', 'CaNa2EDTA', 'lead chelation'] }
});

DRUGS.push({
  id: 'sodium-nitrite',
  cls: 'antidote',
  otc: false,
  alert: true,
  name:  { ar: 'نتريت الصوديوم', en: 'Sodium nitrite' },
  short: {
    ar: 'ترياق وريدي للتسمّم الحادّ الخطر بالسيانيد، يُعطى أولاً ثم تتبعه ثيوكبريتات الصوديوم. يحمل أشدّ التحذيرات لأنه قد يُسقط الضغط ويُفقد الدم قدرته على حمل الأكسجين.',
    en: 'An intravenous antidote for serious acute cyanide poisoning, given first and followed by sodium thiosulfate. It carries the strongest warnings because it can drop the blood pressure and rob the blood of its ability to carry oxygen.'
  },
  brands: [],
  uses: ['poisoning'],
  keywords: { ar: ['نتريت', 'سيانيد', 'سيانيد الهيدروجين', 'ترياق السيانيد', 'ثيوكبريتات'], en: ['sodium nitrite', 'Nithiodote', 'cyanide antidote', 'cyanide poisoning', 'sodium thiosulfate'] }
});

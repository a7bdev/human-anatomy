/* ============================================================
   موسوعة الأدوية — فهرس دفعة الأورام السادسة
   (علاج هرموني لسرطان البروستاتا · أدوية داعمة للكيماوي ·
    حماية العظم · غازات التخدير · الأكسجين)
   rx/index-onco6.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   ملاحظة على الفصائل: الهرموني وأدوية الإنقاذ وخافضات حمض اليوريك
   معرّفة في دفعات سابقة، فتُعاد هنا بالتعريف نفسه والمجموعة نفسها
   حتى لا يتوقّف هذا الملف على ترتيب التحميل. وثلاث فصائل جديدة:
   البيسفوسفونات · المخدّرات المستنشقة · الغازات الطبية — تُضاف بحارس
   لا يكتب فوق تعريف موجود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'antineoplastic-hormonal': { ar: 'علاج هرموني للأورام', en: 'Hormonal cancer therapy' },
    'chemo-rescue':            { ar: 'أدوية الإنقاذ من أثر الكيماوي', en: 'Chemotherapy rescue agents' },
    'urate-lowering':          { ar: 'خافضات حمض اليوريك', en: 'Urate-lowering drugs' },
    'bisphosphonate':          { ar: 'البيسفوسفونات (حماية العظم)', en: 'Bisphosphonates' },
    'inhaled-anesthetic':      { ar: 'مخدّرات عامة مستنشقة', en: 'Inhaled general anaesthetics' },
    'medical-gas':             { ar: 'الغازات الطبية', en: 'Medical gases' }
  };
  var grp = {
    'antineoplastic-hormonal': 'cancer',
    'chemo-rescue': 'cancer',
    'urate-lowering': 'immune',
    'bisphosphonate': 'endo',
    'inhaled-anesthetic': 'pain',
    'medical-gas': 'allergy'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_GROUPS !== 'undefined' && DRUG_GROUPS) {
    if (!DRUG_GROUPS.cancer) { DRUG_GROUPS.cancer = { ar: 'الأورام والعلاج الكيميائي', en: 'Cancer and chemotherapy' }; }
  }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
})();

DRUGS.push({
  id: 'bicalutamide',
  cls: 'antineoplastic-hormonal',
  otc: false,
  alert: true,
  name:  { ar: 'البيكالوتاميد', en: 'Bicalutamide' },
  short: {
    ar: 'أقراص تحجب هرمون الذكورة عن خلايا سرطان البروستاتا المنتشر، وتؤخذ مع حقن خفض الهرمون. للرجال فقط، ويُراقَب معها الكبد.',
    en: 'Tablets that block the male hormone from spread prostate cancer cells, taken together with hormone-lowering injections. For men only, and the liver is monitored.'
  },
  brands: ['كاسوديكس'],
  uses:  ['prostate-cancer'],
  keywords: {
    ar: ['كاسوديكس', 'مضاد الأندروجين', 'هرمون الذكورة', 'سرطان البروستاتا', 'علاج هرموني'],
    en: ['Casodex', 'antiandrogen', 'nonsteroidal antiandrogen', 'prostate cancer', 'hormone therapy']
  }
});

DRUGS.push({
  id: 'abiraterone',
  cls: 'antineoplastic-hormonal',
  otc: false,
  alert: true,
  name:  { ar: 'الأبيراتيرون', en: 'Abiraterone' },
  short: {
    ar: 'أقراص تمنع الجسم من صنع هرمون الذكورة في سرطان البروستاتا المنتشر، وتؤخذ دائماً مع البريدنيزون وعلى معدة فارغة. يُراقَب معها الكبد والضغط والبوتاسيوم.',
    en: 'Tablets that stop the body making the male hormone in spread prostate cancer, always taken with prednisone and on an empty stomach. The liver, blood pressure and potassium are monitored.'
  },
  brands: ['زايتيجا'],
  uses:  ['prostate-cancer'],
  keywords: {
    ar: ['زايتيجا', 'أبيراتيرون', 'سرطان البروستاتا', 'علاج هرموني', 'بريدنيزون'],
    en: ['Zytiga', 'abiraterone acetate', 'CYP17 inhibitor', 'androgen biosynthesis inhibitor', 'prostate cancer']
  }
});

DRUGS.push({
  id: 'leuprorelin',
  cls: 'antineoplastic-hormonal',
  otc: false,
  alert: true,
  name:  { ar: 'الليوبروريلين', en: 'Leuprorelin (Leuprolide)' },
  short: {
    ar: 'حقنة هرمونية تُخفض هرمونات الجنس، لسرطان البروستاتا والبطانة المهاجرة والأورام الليفية والبلوغ المبكّر. قد تزيد الأعراض مؤقتاً في أسابيعها الأولى.',
    en: 'A hormone injection that lowers sex hormones, for prostate cancer, endometriosis, fibroids and early puberty. It may briefly worsen symptoms in the first weeks.'
  },
  brands: ['لوبرون ديبو', 'إليغارد', 'لوكرين ديبو'],
  uses:  ['prostate-cancer', 'endometriosis', 'uterine-fibroids', 'breast-cancer'],
  keywords: {
    ar: ['لوبرون', 'إليغارد', 'لوكرين', 'ليوبروليد', 'حقنة هرمونية', 'البلوغ المبكر', 'البطانة المهاجرة'],
    en: ['Lupron Depot', 'Eligard', 'Lucrin', 'leuprolide', 'GnRH agonist', 'LHRH agonist', 'precocious puberty']
  }
});

DRUGS.push({
  id: 'mesna',
  cls: 'chemo-rescue',
  otc: false,
  alert: false,
  name:  { ar: 'الميسنا', en: 'Mesna' },
  short: {
    ar: 'دواء واقٍ بالوريد يرافق الإيفوسفاميد والسيكلوفوسفاميد ليحمي المثانة من التهاب نازف. لا يعالج الدم في البول من أسباب أخرى.',
    en: 'A protective drug given into a vein alongside ifosfamide and cyclophosphamide to shield the bladder from bleeding inflammation. It does not treat blood in the urine from other causes.'
  },
  brands: ['يوروميتكسان', 'ميسنكس'],
  uses:  [],
  keywords: {
    ar: ['يوروميتكسان', 'ميسنكس', 'التهاب المثانة النزفي', 'إيفوسفاميد', 'واقٍ خلوي'],
    en: ['Uromitexan', 'Mesnex', 'haemorrhagic cystitis', 'ifosfamide', 'cytoprotectant', 'uroprotectant']
  }
});

DRUGS.push({
  id: 'rasburicase',
  cls: 'urate-lowering',
  otc: false,
  alert: true,
  name:  { ar: 'الراسبوريكاز', en: 'Rasburicase' },
  short: {
    ar: 'إنزيم بالوريد يكسّر حمض اليوريك بسرعة لحماية الكلى حين تتكسّر الأورام بالكيماوي. ممنوع على من ينقصه إنزيم G6PD (الفوال).',
    en: 'An enzyme given into a vein that rapidly breaks down uric acid to protect the kidneys when tumours break down under chemotherapy. Forbidden in G6PD deficiency (favism).'
  },
  brands: ['فاسترتك', 'إليتك'],
  uses:  ['leukemia', 'lymphoma'],
  keywords: {
    ar: ['فاسترتك', 'إليتك', 'حمض اليوريك', 'متلازمة تحلل الورم', 'الفوال', 'G6PD'],
    en: ['Fasturtec', 'Elitek', 'uric acid', 'tumour lysis syndrome', 'urate oxidase', 'G6PD deficiency']
  }
});

DRUGS.push({
  id: 'zoledronic-acid',
  cls: 'bisphosphonate',
  otc: false,
  alert: false,
  name:  { ar: 'حمض الزوليدرونيك', en: 'Zoledronic acid' },
  short: {
    ar: 'تسريب وريدي يحمي العظم من التآكل، لهشاشة العظام وداء باجيت، ولارتفاع الكالسيوم وأذى العظام في السرطان. يلزمه فحص الأسنان والكلى قبله.',
    en: 'An intravenous infusion that protects bone from breakdown, for osteoporosis and Paget’s disease, and for high calcium and bone damage in cancer. Teeth and kidneys are checked first.'
  },
  brands: ['أكلاستا', 'زوميتا', 'ريكلاست'],
  uses:  ['osteoporosis', 'pagets-bone', 'hypercalcemia', 'multiple-myeloma'],
  keywords: {
    ar: ['أكلاستا', 'زوميتا', 'زوليدرونات', 'بيسفوسفونات', 'هشاشة العظام', 'إبرة العظام السنوية'],
    en: ['Aclasta', 'Reclast', 'Zometa', 'zoledronate', 'bisphosphonate', 'bone metastases']
  }
});

DRUGS.push({
  id: 'isoflurane',
  cls: 'inhaled-anesthetic',
  otc: false,
  alert: true,
  name:  { ar: 'الآيزوفلوران', en: 'Isoflurane' },
  short: {
    ar: 'غاز تخدير عام يُستنشق لإبقاء المريض نائماً أثناء العملية، ويديره طبيب التخدير وحده. أخبره إن أصاب أحداً في عائلتك تفاعل خطير مع التخدير.',
    en: 'An inhaled general anaesthetic that keeps the patient asleep during surgery, run only by the anaesthetist. Tell them if anyone in your family had a serious reaction to anaesthesia.'
  },
  brands: ['فورين'],
  uses:  [],
  keywords: {
    ar: ['غاز التخدير', 'تخدير عام', 'بنج', 'آيزوفلوران', 'فرط الحرارة الخبيث'],
    en: ['Forane', 'volatile anaesthetic', 'inhalational anaesthetic', 'general anaesthesia', 'malignant hyperthermia']
  }
});

DRUGS.push({
  id: 'sevoflurane',
  cls: 'inhaled-anesthetic',
  otc: false,
  alert: true,
  name:  { ar: 'السيفوفلوران', en: 'Sevoflurane' },
  short: {
    ar: 'غاز تخدير عام حلو الرائحة يُنوَّم به الأطفال بالقناع قبل الإبرة، ويُبقي التخدير أثناء العملية. قد يسبّب هياجاً مؤقتاً عند استيقاظ الطفل.',
    en: 'A sweet-smelling inhaled general anaesthetic used to put children to sleep by mask before any needle, and to keep anaesthesia going during surgery. It may cause brief agitation as a child wakes.'
  },
  brands: ['سيفوران', 'ألتين'],
  uses:  [],
  keywords: {
    ar: ['غاز التخدير', 'بنج الأطفال', 'تخدير بالقناع', 'سيفوفلوران', 'تخدير عام'],
    en: ['Sevorane', 'Ultane', 'volatile anaesthetic', 'mask induction', 'emergence delirium']
  }
});

DRUGS.push({
  id: 'nitrous-oxide',
  cls: 'inhaled-anesthetic',
  otc: false,
  alert: true,
  name:  { ar: 'أكسيد النيتروز', en: 'Nitrous oxide' },
  short: {
    ar: 'غاز الضحك: يُستنشق ممزوجاً بالأكسجين لتسكين المخاض والإسعاف والتهدئة عند الأسنان. تكراره أو إساءة استعماله يعطّل فيتامين B12 ويؤذي الأعصاب.',
    en: 'Laughing gas: inhaled mixed with oxygen for labour pain, emergencies and dental sedation. Repeated use or misuse inactivates vitamin B12 and damages nerves.'
  },
  brands: ['إنتونوكس'],
  uses:  [],
  keywords: {
    ar: ['غاز الضحك', 'إنتونوكس', 'تسكين الولادة', 'تخدير الأسنان', 'فيتامين B12'],
    en: ['laughing gas', 'Entonox', 'N2O', 'gas and air', 'labour analgesia', 'dental sedation']
  }
});

DRUGS.push({
  id: 'oxygen',
  cls: 'medical-gas',
  otc: false,
  alert: true,
  name:  { ar: 'الأكسجين', en: 'Oxygen' },
  short: {
    ar: 'دواء حقيقي بوصفة لمن ينقص الأكسجين في دمه بسبب مرض رئوي أو قلبي. الإفراط فيه يضرّ مريض الانسداد الرئوي، والتدخين قربه يسبّب الحرائق.',
    en: 'A real prescription medicine for people whose blood oxygen is low from lung or heart disease. Too much harms people with COPD, and smoking near it causes fires.'
  },
  brands: [],
  uses:  ['copd', 'pulmonary-fibrosis', 'pulmonary-hypertension', 'cystic-fibrosis', 'heart-failure', 'asthma'],
  keywords: {
    ar: ['أكسجين', 'الأكسجين المنزلي', 'مكثف الأكسجين', 'أسطوانة أكسجين', 'ضيق النفس'],
    en: ['oxygen therapy', 'home oxygen', 'oxygen concentrator', 'long-term oxygen therapy', 'LTOT']
  }
});

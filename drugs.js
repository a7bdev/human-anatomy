/* ============================================================
   موسوعة الأدوية — ملف الإقلاع
   ------------------------------------------------------------
   يُحمَّل قبل أي ملف في rx/. مهمّته شيئان لا ثالث لهما:

   ١) يُعرّف الحاويتين العامّتين مرّة واحدة:
      DRUGS   = فهرس خفيف يُحمَّل دائماً
      RX_BODY = أجسام البطاقات، تُحمَّل عند فتح البطاقة

   ٢) يلفّ DRUGS.push فيَسِم كل دواء بملفه (src) من window.__rxsrc.
      بهذا يعرف المحمِّل الكسول أيّ rx/rx-<src>.js يجلب — بلا أن
      يكتب كاتب الدفعة الوسم يدوياً في كل مدخل فينساه أو يخطئه.
      (نفس آلية diseases.js — انظر DX-SPEC.md و DRUG-SPEC.md)

   ⚠️ محتوى تثقيفي عام لا وصفة علاج، وبلا جرعات بقرار مقصود.
   ============================================================ */

var DRUGS   = window.DRUGS   || [];
var RX_BODY = window.RX_BODY || {};

(function () {
  if (DRUGS.__stamped) return;          /* لا يُلفّ مرّتين لو حُمّل الملف مرّتين */
  var _push = DRUGS.push;
  DRUGS.push = function (d) {
    if (d && typeof d === 'object' && !d.src &&
        typeof window !== 'undefined' && window.__rxsrc) d.src = window.__rxsrc;
    return _push.apply(this, arguments);
  };
  try { Object.defineProperty(DRUGS, '__stamped', { value: true, enumerable: false }); }
  catch (e) { DRUGS.__stamped = true; }
})();

/* فصائل الأدوية — القائمة الحاكمة.
   كتبها أحمد وكلوديا ٨ سبتمبر ٢٠٢٦ بعد أن كشفت الدفعة التجريبية أن
   DRUG_CLASSES كان مذكوراً في العقد وغير موجود في المستودع، فاخترع
   كل وكيل مفرداته وصارت ٢٦ فصيلة بلا مرجع. الفصيلة الغائبة من هنا
   تُعرض بمعرّفها ولا تكسر شيئاً — لكن الدفعات الجديدة تختار من هنا. */
var DRUG_CLASSES = {
  'antiviral': { ar: 'مضادات الفيروسات', en: 'Antivirals' },
  'beta-blocker': { ar: 'حاصرات بيتا', en: 'Beta-blockers' },
  'antitussive': { ar: 'مثبّطات السعال', en: 'Antitussives' },
  'antimuscarinic': { ar: 'مضادات مسكارينية (المثانة)', en: 'Antimuscarinics (bladder)' },
  'beta3-agonist': { ar: 'ناهضات بيتا-3', en: 'Beta-3 agonists' },
  '5-alpha-reductase-inhibitor': { ar: 'مثبّطات 5-ألفا ريدكتيز', en: '5-alpha-reductase inhibitors' },
  'hair-growth': { ar: 'منشّطات نموّ الشعر', en: 'Hair-growth agents' },
  'progestin': { ar: 'بروجستينات', en: 'Progestins' },
  'ocular-lubricant': { ar: 'مرطّبات العين', en: 'Ocular lubricants' },
  'vestibular': { ar: 'أدوية الدُّوار (الدهليز)', en: 'Vestibular agents' },
  'sleep-aid': { ar: 'مساعدات النوم', en: 'Sleep aids' },
  'anticoagulant-doac':   { ar: 'مضادات التخثّر الفموية المباشرة', en: 'Direct oral anticoagulants (DOACs)' },
  'anticonvulsant-gabapentinoid': { ar: 'مضادات التشنّج — غابابنتينات', en: 'Anticonvulsants — gabapentinoids' },
  'antidepressant-snri':  { ar: 'مضادات الاكتئاب — SNRI',      en: 'Antidepressants — SNRIs' },
  analgesic:              { ar: 'مسكّنات وخافضات حرارة',      en: 'Analgesics and antipyretics' },
  nsaid:                  { ar: 'مضادات الالتهاب غير الستيرويدية', en: 'NSAIDs' },
  antiplatelet:           { ar: 'مضادات تكدّس الصفيحات',       en: 'Antiplatelets' },
  antibiotic:             { ar: 'مضادات حيوية',                en: 'Antibiotics' },
  'antibiotic-penicillin':{ ar: 'مضادات حيوية — بنسلينات',     en: 'Antibiotics — penicillins' },
  'antibiotic-macrolide': { ar: 'مضادات حيوية — ماكروليدات',   en: 'Antibiotics — macrolides' },
  ppi:                    { ar: 'مثبّطات مضخّة البروتون',      en: 'Proton pump inhibitors' },
  antacid:                { ar: 'مضادات الحموضة وحاصرات H2',   en: 'Antacids and H2 blockers' },
  antihistamine:          { ar: 'مضادات الهيستامين',           en: 'Antihistamines' },
  corticosteroid:         { ar: 'كورتيزونات',                  en: 'Corticosteroids' },
  'corticosteroid-topical':{ ar: 'كورتيزونات موضعية',          en: 'Topical corticosteroids' },
  antidiabetic:           { ar: 'أدوية السكّري',               en: 'Antidiabetics' },
  insulin:                { ar: 'الأنسولينات',                 en: 'Insulins' },
  statin:                 { ar: 'خافضات الدهون (ستاتينات)',    en: 'Statins' },
  'calcium-blocker':      { ar: 'حاصرات قنوات الكالسيوم',      en: 'Calcium channel blockers' },
  'ace-inhibitor':        { ar: 'مثبّطات الإنزيم المحوّل',     en: 'ACE inhibitors' },
  bronchodilator:         { ar: 'موسّعات الشعب',               en: 'Bronchodilators' },
  antiemetic:             { ar: 'مضادات القيء والغثيان',       en: 'Antiemetics' },
  laxative:               { ar: 'مليّنات',                     en: 'Laxatives' },
  antidiarrheal:          { ar: 'مضادات الإسهال',              en: 'Antidiarrhoeals' },
  antispasmodic:          { ar: 'مضادات التشنّج',              en: 'Antispasmodics' },
  rehydration:            { ar: 'معالجة الجفاف',               en: 'Rehydration' },
  vitamin:                { ar: 'فيتامينات',                   en: 'Vitamins' },
  'mineral-supplement':   { ar: 'مكمّلات معدنية',              en: 'Mineral supplements' },
  'h2-blocker':           { ar: 'حاصرات مستقبل H2',            en: 'H2 blockers' },
  prokinetic:             { ar: 'محرّكات المعدة',               en: 'Prokinetics' },
  'laxative-osmotic':     { ar: 'مليّنات تناضحية',              en: 'Osmotic laxatives' },
  'laxative-stimulant':   { ar: 'مليّنات منبّهة',                en: 'Stimulant laxatives' },
  antiflatulent:          { ar: 'مضادات الغازات',               en: 'Antiflatulents' },
  'antifungal':                      { ar: 'مضادات الفطريات', en: 'Antifungals' },
  'anthelmintic':                    { ar: 'طاردات الديدان', en: 'Anthelmintics' },
  'antiparasitic':                   { ar: 'مضادات الطفيليات', en: 'Antiparasitics' },
  'cardio-polypill':                 { ar: 'الحبّة القلبية المركّبة', en: 'Cardiovascular polypill' },
  'thrombolytic':                    { ar: 'مذيبات الجلطة', en: 'Thrombolytics' },
  'diuretic-potassium-sparing':      { ar: 'مدرّات حافظة للبوتاسيوم', en: 'Potassium-sparing diuretics' },
  'diuretic-osmotic':                { ar: 'مدرّات تناضحية', en: 'Osmotic diuretics' },
  'benzodiazepine':                  { ar: 'البنزوديازيبينات', en: 'Benzodiazepines' },
  'antiepileptic-barbiturate':       { ar: 'مضادات الصرع - باربيتورات', en: 'Antiepileptics - barbiturates' },
  'anticonvulsant-mineral':          { ar: 'مضادات التشنّج المعدنية', en: 'Mineral anticonvulsants' },
  'antiparkinson':                   { ar: 'أدوية الرعاش', en: 'Antiparkinson agents' },
  'antiparkinson-anticholinergic':   { ar: 'أدوية الرعاش - مضادات كولينية', en: 'Antiparkinson - anticholinergics' },
  'muscle-relaxant':                 { ar: 'مرخيات العضلات', en: 'Muscle relaxants' },
  'antiglaucoma':                    { ar: 'أدوية المياه الزرقاء', en: 'Antiglaucoma agents' },
  'carbonic-anhydrase-inhibitor':    { ar: 'مثبّطات الأنهيدراز الكربوني', en: 'Carbonic anhydrase inhibitors' },
  'mydriatic':                       { ar: 'موسّعات الحدقة', en: 'Mydriatics' },
  'uterotonic':                      { ar: 'مقبّضات الرحم', en: 'Uterotonics' },
  'prostaglandin':                   { ar: 'البروستاغلاندينات', en: 'Prostaglandins' },
  'abortifacient':                   { ar: 'منهيات الحمل الدوائية', en: 'Abortifacients' },
  'pulmonary-surfactant':            { ar: 'الفاعل بالسطح الرئوي', en: 'Pulmonary surfactants' },
  'respiratory-stimulant':           { ar: 'منبّهات التنفّس', en: 'Respiratory stimulants' },
  'local-anesthetic':                { ar: 'مخدّرات موضعية', en: 'Local anaesthetics' },
  'diagnostic-agent':                { ar: 'عوامل تشخيصية', en: 'Diagnostic agents' },
  'iv-anesthetic': { ar: 'مخدّرات عامة وريدية', en: 'Intravenous anaesthetics' },
  'anticholinergic': { ar: 'مضادات كولينية', en: 'Anticholinergics' },
  'triptan': { ar: 'التريبتانات (أدوية الشقيقة)', en: 'Triptans' },
  'biologic-immunosuppressant': { ar: 'مثبّطات مناعة حيوية', en: 'Biologic immunosuppressants' },
  'decongestant': { ar: 'مزيلات الاحتقان', en: 'Decongestants' },
  'pancreatic-enzyme': { ar: 'إنزيمات بنكرياسية معوّضة', en: 'Pancreatic enzyme replacements' },
  'aminosalicylate': { ar: 'الأمينوساليسيلات', en: 'Aminosalicylates' },
  'antihypoglycaemic': { ar: 'رافعات سكّر الدم', en: 'Antihypoglycaemics' },
  other:                  { ar: 'أخرى',                        en: 'Other' }
};

/* ── طبقة أعلى من الفصيلة: المجموعة العريضة ──────────────────
   الفصيلة دقيقة ومفيدة داخل البطاقة، لكنها لا تصلح للتجميع:
   ٢٨ دواءً أنتجت ٢٦ فصيلة، فصار كل دواء وحده وضاع معنى الفهرس.
   فالفهرس يجمّع بالمجموعة، والفصيلة تبقى سطراً تحت اسم الدواء.
   فصيلة بلا مجموعة تسقط في «أخرى» ولا تكسر شيئاً. */
var DRUG_GROUPS = {
  pain:      { ar: 'الألم والحرارة والالتهاب', en: 'Pain, fever and inflammation' },
  gut:       { ar: 'المعدة والأمعاء',          en: 'Stomach and gut' },
  infection: { ar: 'المضادات الحيوية',         en: 'Antibiotics' },
  allergy:   { ar: 'الحساسية والتنفّس',        en: 'Allergy and breathing' },
  heart:     { ar: 'القلب والضغط والدهون',     en: 'Heart, blood pressure and lipids' },
  endo:      { ar: 'السكّري والهرمونات',       en: 'Diabetes and hormones' },
  skin:      { ar: 'الجلد',                    en: 'Skin' },
  supp:      { ar: 'الفيتامينات والمكمّلات',   en: 'Vitamins and supplements' },
  tox:       { ar: 'السموم والترياق',          en: 'Poisoning and antidotes' },
  other:     { ar: 'أخرى',                     en: 'Other' }
};
var DRUG_CLASS_GROUP = {
  'antiviral': 'infection', 'beta-blocker': 'heart', 'antitussive': 'allergy', 'antimuscarinic': 'repro', 'beta3-agonist': 'repro', '5-alpha-reductase-inhibitor': 'repro', 'hair-growth': 'skin', 'progestin': 'repro', 'ocular-lubricant': 'eye', 'vestibular': 'neuro', 'sleep-aid': 'neuro',
  'anticoagulant-doac': 'heart', 'anticonvulsant-gabapentinoid': 'neuro', 'antidepressant-snri': 'psych',
  analgesic: 'pain', nsaid: 'pain', antiplatelet: 'heart',
  antibiotic: 'infection', 'antibiotic-penicillin': 'infection', 'antibiotic-macrolide': 'infection',
  ppi: 'gut', antacid: 'gut', 'h2-blocker': 'gut', prokinetic: 'gut',
  laxative: 'gut', 'laxative-osmotic': 'gut', 'laxative-stimulant': 'gut',
  antidiarrheal: 'gut', antispasmodic: 'gut', antiemetic: 'gut',
  antiflatulent: 'gut', rehydration: 'gut',
  antihistamine: 'allergy', bronchodilator: 'allergy',
  statin: 'heart', 'calcium-blocker': 'heart', 'ace-inhibitor': 'heart',
  antidiabetic: 'endo', insulin: 'endo', corticosteroid: 'endo',
  'corticosteroid-topical': 'skin',
  vitamin: 'supp', 'mineral-supplement': 'supp',
  'antifungal': 'infection',
  'anthelmintic': 'infection',
  'antiparasitic': 'infection',
  'cardio-polypill': 'heart',
  'thrombolytic': 'heart',
  'diuretic-potassium-sparing': 'heart',
  'diuretic-osmotic': 'heart',
  'benzodiazepine': 'psych',
  'antiepileptic-barbiturate': 'neuro',
  'anticonvulsant-mineral': 'neuro',
  'antiparkinson': 'neuro',
  'antiparkinson-anticholinergic': 'neuro',
  'muscle-relaxant': 'neuro',
  'antiglaucoma': 'eye',
  'carbonic-anhydrase-inhibitor': 'eye',
  'mydriatic': 'eye',
  'uterotonic': 'repro',
  'prostaglandin': 'repro',
  'abortifacient': 'repro',
  'pulmonary-surfactant': 'allergy',
  'respiratory-stimulant': 'allergy',
  'local-anesthetic': 'pain',
  'diagnostic-agent': 'imaging',
  /* ── تصحيح إسنادات كسولة (١٢ سبتمبر ٢٠٢٦) ──
     الدفعات تسجّل بشرط if(!DRUG_CLASS_GROUP[k]) أي الأسبق يفوز،
     وindex-tox1 يملأ فصائله جماعياً بـ'other' بلا سطر لكل فصيلة.
     وdrugs.js يُحمَّل قبلها جميعاً (٢٨٦ مقابل ٢٨٧) فما هنا هو الحاكم. */
  'antidote': 'tox', 'antitoxin': 'tox',
  'heavy-metal-chelator': 'tox', 'iron-chelator': 'tox',
  'antiepileptic': 'neuro',
  'blood-product': 'blood', 'haemostatic-antibody': 'blood',
  'immunoglobulin': 'immune',
  'disinfectant': 'infection',
  'electrolyte': 'supp',
  'iv-anesthetic': 'pain', 'anticholinergic': 'neuro', 'triptan': 'neuro', 'biologic-immunosuppressant': 'immune', 'decongestant': 'allergy', 'pancreatic-enzyme': 'gut', 'aminosalicylate': 'gut', 'antihypoglycaemic': 'endo',
  'other': 'other'
};

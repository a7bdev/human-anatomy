/* ============================================================
   موسوعة الأدوية — فهرس دفعة الأعصاب والنفس الثانية
   rx/index-neuro2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* فصائل هذه الدفعة — تُضاف إن لم تكن موجودة، ولا تُكتب فوق فصيلة سابقة
   (عمّال آخرون يشتغلون بالتوازي على ملفات أخرى) */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'ms-dmt':                 { ar: 'أدوية تعديل سير التصلّب المتعدّد', en: 'MS disease-modifying therapies' },
    'cholinesterase-inhibitor':{ ar: 'مثبّطات الكولين إستراز', en: 'Cholinesterase inhibitors' },
    'antidepressant-tca':     { ar: 'مضادات الاكتئاب ثلاثية الحلقات', en: 'Tricyclic antidepressants' },
    'antidepressant-ssri':    { ar: 'مضادات الاكتئاب — مثبّطات استرداد السيروتونين', en: 'SSRI antidepressants' },
    'antipsychotic-typical':  { ar: 'مضادات الذهان التقليدية', en: 'First-generation antipsychotics' },
    'antipsychotic-atypical': { ar: 'مضادات الذهان الحديثة', en: 'Second-generation antipsychotics' }
  };
  var grp = {
    'ms-dmt': 'neuro', 'cholinesterase-inhibitor': 'neuro',
    'antidepressant-tca': 'psych', 'antidepressant-ssri': 'psych',
    'antipsychotic-typical': 'psych', 'antipsychotic-atypical': 'psych'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_GROUPS !== 'undefined' && DRUG_GROUPS) {
    if (!DRUG_GROUPS.neuro) { DRUG_GROUPS.neuro = { ar: 'الأعصاب والدماغ', en: 'Nerves and brain' }; }
    if (!DRUG_GROUPS.psych) { DRUG_GROUPS.psych = { ar: 'الصحة النفسية', en: 'Mental health' }; }
  }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
})();

DRUGS.push({
  id: 'cladribine',
  cls: 'ms-dmt',
  otc: false,
  alert: true,
  name:  { ar: 'الكلادريبين', en: 'Cladribine' },
  short: {
    ar: 'قرص للتصلّب المتعدّد الانتكاسي يُعطى في دورات قصيرة متباعدة لا كل يوم، فيخفض الخلايا اللمفاوية المهاجِمة لغلاف العصب. يحمل تحذيراً رسمياً بشأن الأورام، وممنوع منعاً قاطعاً في الحمل.',
    en: 'A tablet for relapsing multiple sclerosis given in short, widely spaced courses rather than daily, lowering the lymphocytes that attack the nerve sheath. It carries an official warning about cancer and is absolutely forbidden in pregnancy.'
  },
  brands: ['مافينكلاد', 'ليوستاتين'],
  uses: ['ms'],
  keywords: { ar: ['تصلب متعدد', 'كلادريبين', 'مافينكلاد', 'مناعة', 'انتكاسة'], en: ['mavenclad', 'cladribine', 'multiple sclerosis', 'purine analogue', 'DMT'] }
});

DRUGS.push({
  id: 'glatiramer-acetate',
  cls: 'ms-dmt',
  otc: false,
  alert: false,
  name:  { ar: 'الجلاتيرامر', en: 'Glatiramer acetate' },
  short: {
    ar: 'حقنة تحت الجلد من أقدم أدوية التصلّب المتعدّد وأكثرها أماناً على المدى الطويل. أشهر ما فيه تفاعل موضع الحقن، ونوبة عابرة بعد الحقن تشبه نوبة قلبية وتزول من نفسها.',
    en: 'A subcutaneous injection, one of the oldest and long-term safest multiple sclerosis treatments. Its best known effects are injection-site reactions and a brief post-injection episode that mimics a heart attack and settles on its own.'
  },
  brands: ['كوباكسون', 'جلاتوبا'],
  uses: ['ms'],
  keywords: { ar: ['تصلب متعدد', 'جلاتيرامر', 'كوباكسون', 'حقنة تحت الجلد', 'معدّل مناعي'], en: ['copaxone', 'glatopa', 'glatiramer', 'immunomodulator', 'multiple sclerosis'] }
});

DRUGS.push({
  id: 'neostigmine',
  cls: 'cholinesterase-inhibitor',
  otc: false,
  alert: true,
  name:  { ar: 'النيوستيجمين', en: 'Neostigmine' },
  short: {
    ar: 'حقنة يستعملها التخدير في نهاية العملية لإرجاع قوة العضلات بعد مرخيات العضل، وله شكل فموي للوهن العضلي الوبيل. يُعطى مع الأتروبين لأنه وحده يبطّئ القلب.',
    en: 'An injection anaesthetists use at the end of an operation to bring muscle power back after muscle relaxants, with an oral form for myasthenia gravis. It is given with atropine because on its own it slows the heart.'
  },
  brands: ['بروستيجمين', 'بلوكسيفرز', 'نيوستيجمين'],
  uses: ['myasthenia-gravis'],
  keywords: { ar: ['نيوستيجمين', 'وهن عضلي', 'تخدير', 'مرخيات العضل', 'كولين إستراز'], en: ['neostigmine', 'prostigmin', 'bloxiverz', 'reversal agent', 'myasthenia'] }
});

DRUGS.push({
  id: 'pyridostigmine',
  cls: 'cholinesterase-inhibitor',
  otc: false,
  alert: true,
  name:  { ar: 'البيريدوستيجمين', en: 'Pyridostigmine' },
  short: {
    ar: 'قرص الوهن العضلي الوبيل الأول: يقوّي وصول الإشارة من العصب إلى العضلة فيخفّ الضعف وتدلّي الجفن. يعالج العَرَض لا سبب المرض، وزيادته على الحاجة تقلب القوة إلى ضعف أشدّ.',
    en: 'The first-line tablet for myasthenia gravis: it strengthens the signal reaching the muscle from the nerve, easing weakness and drooping eyelids. It treats the symptom, not the cause, and taking more than needed turns strength into deeper weakness.'
  },
  brands: ['ميستينون', 'ميستينون تايمسبان', 'بيريدوستيجمين'],
  uses: ['myasthenia-gravis'],
  keywords: { ar: ['ميستينون', 'وهن عضلي', 'بيريدوستيجمين', 'تدلي الجفن', 'ضعف عضلي'], en: ['mestinon', 'pyridostigmine bromide', 'myasthenia gravis', 'cholinesterase inhibitor'] }
});

DRUGS.push({
  id: 'amitriptyline',
  cls: 'antidepressant-tca',
  otc: false,
  alert: true,
  name:  { ar: 'الأميتريبتيلين', en: 'Amitriptyline' },
  short: {
    ar: 'مضاد اكتئاب ثلاثي الحلقات قديم صار أشهر استعمالاته اليوم ألم الأعصاب والوقاية من الشقيقة. مهدّئ وجافّ الفم، ثقيل على قلب كبير السنّ، وخطر جداً عند تجاوز ما وُصف.',
    en: 'An old tricyclic antidepressant whose commonest use today is nerve pain and migraine prevention. It is sedating and drying, hard on an older heart, and very dangerous when more than prescribed is taken.'
  },
  brands: ['تربتيزول', 'ساروتين', 'إلافيل', 'أميتريبتيلين'],
  uses: ['depression', 'migraine', 'tension-headache', 'diabetic-neuropathy', 'postherpetic-neuralgia', 'fibromyalgia', 'ibs', 'chronic-pain-syndrome'],
  keywords: { ar: ['أميتريبتيلين', 'تربتيزول', 'ألم عصبي', 'شقيقة', 'اكتئاب', 'ثلاثي الحلقات'], en: ['amitriptyline', 'tryptizol', 'elavil', 'TCA', 'neuropathic pain', 'migraine prophylaxis'] }
});

DRUGS.push({
  id: 'fluoxetine',
  cls: 'antidepressant-ssri',
  otc: false,
  alert: true,
  name:  { ar: 'الفلوكسيتين', en: 'Fluoxetine' },
  short: {
    ar: 'أشهر مضادات الاكتئاب من فصيلة مثبّطات استرداد السيروتونين، ويُستعمل كذلك في الوسواس القهري ونوبات الهلع والشره العصبي. أثره يتأخّر أسابيع، ولا يُوقف فجأة.',
    en: 'The best known of the SSRI antidepressants, also used in obsessive-compulsive disorder, panic attacks and bulimia. Its effect takes weeks to appear, and it is never stopped suddenly.'
  },
  brands: ['بروزاك', 'فلوتين', 'فلوكستين', 'بروديب'],
  uses: ['depression', 'ocd', 'panic-disorder', 'eating-disorders', 'pms'],
  keywords: { ar: ['بروزاك', 'فلوكسيتين', 'اكتئاب', 'وسواس', 'سيروتونين', 'هلع'], en: ['prozac', 'fluoxetine', 'SSRI', 'serotonin', 'OCD', 'panic'] }
});

DRUGS.push({
  id: 'clomipramine',
  cls: 'antidepressant-tca',
  otc: false,
  alert: true,
  name:  { ar: 'الكلوميبرامين', en: 'Clomipramine' },
  short: {
    ar: 'ثلاثي الحلقات الوحيد المعتمد للوسواس القهري، وأقواها على السيروتونين. فعّال حين تفشل غيره، لكنه ثقيل الآثار: جفاف وإمساك ونعاس واضطراب في القذف، ويخفض عتبة التشنّج.',
    en: 'The only tricyclic approved for obsessive-compulsive disorder, and the most serotonergic of them. It works when others fail, but its burden is heavy: dryness, constipation, drowsiness and ejaculation problems, and it lowers the seizure threshold.'
  },
  brands: ['أنافرانيل', 'كلوميبرامين'],
  uses: ['ocd'],
  keywords: { ar: ['أنافرانيل', 'كلوميبرامين', 'وسواس قهري', 'ثلاثي الحلقات'], en: ['anafranil', 'clomipramine', 'OCD', 'tricyclic', 'serotonin reuptake'] }
});

DRUGS.push({
  id: 'haloperidol',
  cls: 'antipsychotic-typical',
  otc: false,
  alert: true,
  name:  { ar: 'الهالوبيريدول', en: 'Haloperidol' },
  short: {
    ar: 'مضاد ذهان تقليدي قوي على الهلوسة والهذيان وعرّات توريت. أبرز ما يخشى منه اضطرابات الحركة وتيبّس العضلات وإطالة كهرباء القلب، وممنوع في باركنسون وخرف أجسام ليوي.',
    en: 'A powerful first-generation antipsychotic for hallucinations, delirium and Tourette tics. Its chief dangers are movement disorders, muscle rigidity and prolongation of the heart’s electrical interval; it is forbidden in Parkinson’s disease and Lewy body dementia.'
  },
  brands: ['هالدول', 'هالوبيريدول', 'سيرينيس'],
  uses: ['schizophrenia', 'tourette', 'delirium', 'bipolar-disorder'],
  keywords: { ar: ['هالدول', 'هالوبيريدول', 'ذهان', 'هذيان', 'توريت', 'هلوسة'], en: ['haldol', 'haloperidol', 'typical antipsychotic', 'delirium', 'tics', 'dopamine'] }
});

DRUGS.push({
  id: 'risperidone',
  cls: 'antipsychotic-atypical',
  otc: false,
  alert: true,
  name:  { ar: 'الريسبيريدون', en: 'Risperidone' },
  short: {
    ar: 'مضاد ذهان حديث للفصام والهوس، ويُستعمل كذلك لنوبات الغضب الشديد في التوحّد. أشهر ما يميّزه رفع هرمون الحليب: تضخّم الثدي وإفرازه واضطراب الدورة، مع زيادة الوزن.',
    en: 'A second-generation antipsychotic for schizophrenia and mania, also used for severe irritability in autism. Its most distinctive effect is a rise in the milk hormone: breast swelling, discharge and disturbed periods, along with weight gain.'
  },
  brands: ['ريسبيردال', 'ريسبيريدون', 'ريسبيليبت', 'ريسبولبت'],
  uses: ['schizophrenia', 'bipolar-disorder', 'autism'],
  keywords: { ar: ['ريسبيردال', 'ريسبيريدون', 'فصام', 'هوس', 'توحد', 'برولاكتين'], en: ['risperdal', 'risperidone', 'atypical antipsychotic', 'schizophrenia', 'autism irritability'] }
});

DRUGS.push({
  id: 'olanzapine',
  cls: 'antipsychotic-atypical',
  otc: false,
  alert: true,
  name:  { ar: 'الأولانزابين', en: 'Olanzapine' },
  short: {
    ar: 'مضاد ذهان حديث للفصام والاضطراب ثنائي القطب، مهدّئ ومثبّت للمزاج وأقلّ إثارةً لاضطرابات الحركة من التقليدي. ثمنه الأثقل استقلابي: شهية وزيادة وزن وسكّر ودهون.',
    en: 'A second-generation antipsychotic for schizophrenia and bipolar disorder: calming, mood-stabilising and less likely than the older drugs to cause movement problems. Its heavier price is metabolic: appetite, weight gain, blood sugar and lipids.'
  },
  brands: ['زيبريكسا', 'أولانزابين', 'أولاب', 'زيلاب'],
  uses: ['schizophrenia', 'bipolar-disorder'],
  keywords: { ar: ['زيبريكسا', 'أولانزابين', 'فصام', 'ثنائي القطب', 'زيادة وزن', 'ذهان'], en: ['zyprexa', 'olanzapine', 'atypical antipsychotic', 'bipolar', 'metabolic'] }
});

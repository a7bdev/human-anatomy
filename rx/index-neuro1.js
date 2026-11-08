/* ============================================================
   موسوعة الأدوية — فهرس دفعة الجهاز العصبي الأولى
   rx/index-neuro1.js   (يُحمَّل دائماً — خفيف)
   مضادات الاختلاج · البنزوديازيبينات · أدوية باركنسون · مرخيات التشنّج
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'phenytoin',
  cls: 'antiepileptic',
  otc: false,
  alert: true,
  name:  { ar: 'الفينيتوين', en: 'Phenytoin' },
  short: {
    ar: 'مضاد اختلاج قديم وفعّال، هامش أمانه ضيّق فيُتابَع مستواه في الدم. تضخّم اللثة وأول طفح جلدي علامتان لا تُهملان.',
    en: 'An old and effective anticonvulsant with a narrow safety margin, so its blood level is monitored. Gum overgrowth and any first rash are signs never to ignore.'
  },
  brands: ['إبانوتين', 'ديلانتين', 'فينيتوين'],
  uses: ['epilepsy'],
  keywords: { ar: ['مضاد اختلاج', 'صرع', 'فينيتوين', 'هيدانتوين'], en: ['anticonvulsant', 'antiepileptic', 'hydantoin', 'epanutin', 'dilantin'] }
});

DRUGS.push({
  id: 'phenobarbital',
  cls: 'antiepileptic-barbiturate',
  otc: false,
  alert: true,
  name:  { ar: 'الفينوباربيتال', en: 'Phenobarbital' },
  short: {
    ar: 'أقدم مضادات الاختلاج المستعملة إلى اليوم، من فصيلة الباربيتورات. يُبطئ نشاط الدماغ، ويسبّب اعتماداً فلا يُوقف فجأة.',
    en: 'The oldest anticonvulsant still in use, a barbiturate. It slows brain activity, causes dependence, and must never be stopped abruptly.'
  },
  brands: ['لومينال', 'غاردينال', 'فينوباربيتون'],
  uses: ['epilepsy', 'substance-addiction'],
  keywords: { ar: ['مضاد اختلاج', 'صرع', 'باربيتورات', 'مهدّئ', 'فينوباربيتال'], en: ['barbiturate', 'anticonvulsant', 'luminal', 'phenobarbitone', 'sedative'] }
});

DRUGS.push({
  id: 'ethosuximide',
  cls: 'antiepileptic',
  otc: false,
  alert: true,
  name:  { ar: 'الإيثوسكسيميد', en: 'Ethosuximide' },
  short: {
    ar: 'مضاد اختلاج مخصّص لنوبة الغياب عند الأطفال، تلك اللحظات القصيرة التي يشرد فيها الطفل ولا يستجيب. يلزم فحص دم دوري معه.',
    en: 'An anticonvulsant specific to absence seizures in children, those brief moments when a child stares and does not respond. It requires periodic blood tests.'
  },
  brands: ['زارونتين', 'إيثوسكسيميد'],
  uses: ['epilepsy'],
  keywords: { ar: ['نوبة الغياب', 'صرع الأطفال', 'مضاد اختلاج', 'إيثوسكسيميد'], en: ['absence seizure', 'petit mal', 'zarontin', 'succinimide'] }
});

DRUGS.push({
  id: 'diazepam',
  cls: 'benzodiazepine',
  otc: false,
  alert: true,
  name:  { ar: 'الديازيبام', en: 'Diazepam' },
  short: {
    ar: 'بنزوديازيبين يهدّئ فرط النشاط الكهربائي في الدماغ: يوقف النوبة، ويُرخي التشنّج، ويخفّف القلق الشديد. للاستعمال القصير فقط لأنه يُدمن.',
    en: 'A benzodiazepine that calms abnormal electrical overactivity in the brain: it stops a seizure, relaxes spasm and eases severe anxiety. Short-term use only, because it is addictive.'
  },
  brands: ['فاليوم', 'ستيسوليد', 'ديازيبام'],
  uses: ['epilepsy', 'gad', 'substance-addiction'],
  keywords: { ar: ['بنزوديازيبين', 'مهدّئ', 'مضاد اختلاج', 'فاليوم', 'ديازيبام'], en: ['benzodiazepine', 'valium', 'anxiolytic', 'muscle spasm', 'seizure'] }
});

DRUGS.push({
  id: 'lorazepam',
  cls: 'benzodiazepine',
  otc: false,
  alert: true,
  name:  { ar: 'اللورازيبام', en: 'Lorazepam' },
  short: {
    ar: 'بنزوديازيبين قصير الأمد نسبياً: حقنه من الخيارات الأولى لإيقاف النوبة المتّصلة في الطوارئ، وأقراصه للقلق والأرق مدّة قصيرة.',
    en: 'A relatively short-acting benzodiazepine: the injection is a first-line option for stopping status epilepticus in the emergency room, and the tablets are for short-term anxiety and insomnia.'
  },
  brands: ['أتيفان', 'لورازيبام'],
  uses: ['epilepsy', 'gad', 'insomnia', 'substance-addiction'],
  keywords: { ar: ['بنزوديازيبين', 'قلق', 'أرق', 'نوبة متّصلة', 'لورازيبام'], en: ['benzodiazepine', 'ativan', 'status epilepticus', 'anxiety', 'insomnia'] }
});

DRUGS.push({
  id: 'midazolam',
  cls: 'benzodiazepine',
  otc: false,
  alert: true,
  name:  { ar: 'الميدازولام', en: 'Midazolam' },
  short: {
    ar: 'بنزوديازيبين سريع قصير المفعول: يُستعمل للتهدئة قبل الإجراءات الطبية، وبخّاخه الأنفي لإيقاف تجمّع النوبات خارج المستشفى.',
    en: 'A fast, short-acting benzodiazepine: used for sedation before medical procedures, and its nasal spray stops seizure clusters outside hospital.'
  },
  brands: ['دورميكوم', 'ميدازولام'],
  uses: ['epilepsy'],
  keywords: { ar: ['بنزوديازيبين', 'تهدئة', 'بخّاخ أنفي', 'ميدازولام'], en: ['benzodiazepine', 'dormicum', 'sedation', 'nasal spray', 'seizure cluster'] }
});

DRUGS.push({
  id: 'magnesium-sulfate',
  cls: 'anticonvulsant-mineral',
  otc: false,
  alert: true,
  name:  { ar: 'كبريتات المغنيسيوم', en: 'Magnesium sulfate' },
  short: {
    ar: 'ملح معدني يُحقن في المستشفى: الدواء الأول لمنع تشنّج تسمّم الحمل وإيقافه، ولتصحيح نقص المغنيسيوم. يُراقَب أثره بردّ فعل الركبة والتنفّس.',
    en: 'A mineral salt given by injection in hospital: the first medicine to prevent and stop the fits of pre-eclampsia, and to correct low magnesium. Its effect is watched by the knee reflex and breathing.'
  },
  brands: ['كبريتات المغنيسيوم حقن', 'ملح إبسوم'],
  uses: ['preeclampsia', 'hypomagnesemia', 'asthma', 'preterm-labor'],
  keywords: { ar: ['تسمّم الحمل', 'مغنيسيوم', 'تشنّج', 'ملح إبسوم'], en: ['eclampsia', 'pre-eclampsia', 'magnesium', 'epsom salt', 'torsades'] }
});

DRUGS.push({
  id: 'levodopa-carbidopa',
  cls: 'antiparkinson',
  otc: false,
  alert: true,
  name:  { ar: 'الليفودوبا مع الكاربيدوبا', en: 'Levodopa + carbidopa' },
  short: {
    ar: 'أقوى علاج لأعراض باركنسون: يعوّض الدوبامين الناقص في الدماغ فتخفّ الرجفة والتيبّس وبطء الحركة. لا يُوقف فجأة أبداً.',
    en: 'The most effective treatment for the symptoms of Parkinson disease: it replaces the missing dopamine in the brain, easing tremor, stiffness and slowness. It must never be stopped abruptly.'
  },
  brands: ['سينيميت', 'ليفودوبا كاربيدوبا', 'دوباكير'],
  uses: ['parkinsons'],
  keywords: { ar: ['باركنسون', 'الشلل الرعاش', 'دوبامين', 'ليفودوبا', 'سينيميت'], en: ['parkinson', 'dopamine', 'sinemet', 'levodopa', 'carbidopa'] }
});

DRUGS.push({
  id: 'biperiden',
  cls: 'antiparkinson-anticholinergic',
  otc: false,
  alert: true,
  name:  { ar: 'البيبيريدين', en: 'Biperiden' },
  short: {
    ar: 'مضاد كوليني يعيد التوازن بين نواقل الحركة في الدماغ: يخفّف الرجفة والتيبّس، وأشهر استعماله ضبط التشنّجات التي تسبّبها بعض أدوية النفس.',
    en: 'An anticholinergic that restores the balance between the movement signals in the brain: it eases tremor and stiffness, and is best known for controlling the spasms caused by some psychiatric medicines.'
  },
  brands: ['أكينيتون', 'بيبيريدين'],
  uses: ['parkinsons'],
  keywords: { ar: ['مضاد كوليني', 'باركنسون', 'تشنّج دوائي', 'أكينيتون'], en: ['anticholinergic', 'akineton', 'parkinsonism', 'extrapyramidal', 'dystonia'] }
});

DRUGS.push({
  id: 'baclofen',
  cls: 'muscle-relaxant',
  otc: false,
  alert: true,
  name:  { ar: 'الباكلوفين', en: 'Baclofen' },
  short: {
    ar: 'مرخي عضلات يعمل على النخاع الشوكي: يخفّف التشنّج والتيبّس في التصلّب المتعدّد وإصابات الحبل الشوكي والشلل الدماغي. إيقافه المفاجئ خطر.',
    en: 'A muscle relaxant acting on the spinal cord: it eases spasticity and stiffness in multiple sclerosis, spinal cord injury and cerebral palsy. Stopping it suddenly is dangerous.'
  },
  brands: ['ليوريسال', 'باكلوفين'],
  uses: ['ms', 'spinal-injury', 'cerebral-palsy', 'als'],
  keywords: { ar: ['مرخي عضلات', 'تشنّج عضلي', 'تصلّب متعدّد', 'باكلوفين'], en: ['muscle relaxant', 'spasticity', 'lioresal', 'multiple sclerosis', 'spasm'] }
});

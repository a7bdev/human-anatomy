/* ============================================================
   موسوعة الأدوية — فهرس دفعة أدوية المثقبيات والمضادات الفيروسية (para4)
   rx/index-para4.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'pentamidine',
  cls: 'antiprotozoal',
  otc: false,
  alert: true,
  name:  { ar: 'البنتاميدين', en: 'Pentamidine (isetionate)' },
  short: {
    ar: 'دواء حقن ورذاذ للالتهاب الرئوي بالمتكيّسة الرئوية عند ضعيفي المناعة، وللمرحلة الأولى من مرض النوم. يُعطى تحت مراقبة الضغط والسكر لأن أثره قد يظهر فجأة.',
    en: 'An injected and inhaled medicine for pneumocystis pneumonia in people with weak immunity and for early-stage sleeping sickness. Given under blood-pressure and blood-sugar monitoring because its effect can appear suddenly.'
  },
  brands: [],
  uses: ['pneumonia', 'hiv', 'leishmaniasis'],
  keywords: { ar: ['بنتاميدين', 'متكيّسة رئوية', 'مرض النوم', 'مثقبيات', 'ليشمانيا'], en: ['pentamidine', 'Pentam', 'NebuPent', 'pneumocystis', 'PJP', 'trypanosomiasis'] }
});

DRUGS.push({
  id: 'eflornithine',
  cls: 'antiprotozoal',
  otc: false,
  alert: true,
  name:  { ar: 'الإفلورنيثين', en: 'Eflornithine' },
  short: {
    ar: 'مادة واحدة بوجهين: تسريب وريدي لمرحلة الدماغ من مرض النوم سُمّي «دواء البعث»، وكريم يُدهن على الوجه لتقليل شعر النساء غير المرغوب فيه.',
    en: 'One substance with two faces: an intravenous infusion for the brain stage of sleeping sickness, once nicknamed the resurrection drug, and a cream applied to the face to reduce unwanted hair in women.'
  },
  brands: ['فانيكا'],
  uses: ['hirsutism'],
  keywords: { ar: ['إفلورنيثين', 'شعر الوجه', 'شعرانية', 'مرض النوم', 'دواء البعث'], en: ['eflornithine', 'DFMO', 'Vaniqa', 'facial hair', 'sleeping sickness'] }
});

DRUGS.push({
  id: 'fexinidazole',
  cls: 'antiprotozoal',
  otc: false,
  alert: true,
  name:  { ar: 'الفيكسينيدازول', en: 'Fexinidazole' },
  short: {
    ar: 'أول علاج يُؤخذ بالفم لمرض النوم الأفريقي بمرحلتيه، بعد أن كان علاج مرحلة الدماغ لا يتمّ إلا بالحقن والتسريب داخل المستشفى.',
    en: 'The first treatment taken by mouth for both stages of African sleeping sickness, after the brain stage could only be treated by injection and infusion inside a hospital.'
  },
  brands: [],
  uses: [],
  keywords: { ar: ['فيكسينيدازول', 'مرض النوم', 'مثقبيات أفريقية', 'نيتروإيميدازول', 'علاج فموي'], en: ['fexinidazole', 'sleeping sickness', 'HAT', 'nitroimidazole', 'oral treatment'] }
});

DRUGS.push({
  id: 'melarsoprol',
  cls: 'antiprotozoal',
  otc: false,
  alert: true,
  name:  { ar: 'الميلارسوبرول', en: 'Melarsoprol' },
  short: {
    ar: 'مركّب زرنيخي قديم يُحقن في الوريد لمرحلة الدماغ من مرض النوم. أخطر ما فيه اعتلال دماغي تفاعلي قاتل، فلا يُلجأ إليه إلا حين لا يوجد بديل.',
    en: 'An old arsenic compound injected into a vein for the brain stage of sleeping sickness. Its gravest danger is a fatal reactive encephalopathy, so it is used only when no alternative exists.'
  },
  brands: [],
  uses: [],
  keywords: { ar: ['ميلارسوبرول', 'زرنيخ', 'مرض النوم', 'اعتلال دماغي', 'مثقبيات'], en: ['melarsoprol', 'Arsobal', 'arsenic', 'sleeping sickness', 'encephalopathy'] }
});

DRUGS.push({
  id: 'nifurtimox',
  cls: 'antiprotozoal',
  otc: false,
  alert: true,
  name:  { ar: 'النيفورتيموكس', en: 'Nifurtimox' },
  short: {
    ar: 'أقراص لداء شاغاس عند الأطفال، وشريك للإفلورنيثين في توليفة صارت الخيار الأول لمرحلة الدماغ من مرض النوم. الكحول ممنوع معه منعاً باتاً.',
    en: 'Tablets for Chagas disease in children, and the partner of eflornithine in a combination that became first choice for the brain stage of sleeping sickness. Alcohol is strictly forbidden with it.'
  },
  brands: [],
  uses: [],
  keywords: { ar: ['نيفورتيموكس', 'داء شاغاس', 'مثقبية كروزية', 'نيتروفيوران', 'مرض النوم'], en: ['nifurtimox', 'Lampit', 'Chagas disease', 'T. cruzi', 'NECT'] }
});

DRUGS.push({
  id: 'suramin-sodium',
  cls: 'antiprotozoal',
  otc: false,
  alert: true,
  name:  { ar: 'السورامين', en: 'Suramin sodium' },
  short: {
    ar: 'دواء عمره قرن خرج من أبحاث أصباغ النسيج، يُحقن ببطء في الوريد للمرحلة الأولى من مرض النوم الروديسي. لا يعبر إلى الدماغ فلا ينفع بعدها.',
    en: 'A century-old medicine born out of textile dye research, injected slowly into a vein for the first stage of rhodesiense sleeping sickness. It does not cross into the brain, so it is useless beyond that stage.'
  },
  brands: [],
  uses: [],
  keywords: { ar: ['سورامين', 'مرض النوم', 'روديسي', 'مثقبيات أفريقية', 'حقن وريدي'], en: ['suramin', 'Germanin', 'sleeping sickness', 'rhodesiense', 'trypanosomiasis'] }
});

DRUGS.push({
  id: 'benznidazole',
  cls: 'antiprotozoal',
  otc: false,
  alert: true,
  name:  { ar: 'البنزنيدازول', en: 'Benznidazole' },
  short: {
    ar: 'الخطّ الأول لداء شاغاس: يُبتلع أقراصاً أسابيع متّصلة ليقتل الطفيلي قبل أن يتلف القلب والجهاز الهضمي بعد سنين صامتة.',
    en: 'First-line treatment for Chagas disease: tablets swallowed for weeks on end to kill the parasite before it damages the heart and digestive tract after silent years.'
  },
  brands: [],
  uses: [],
  keywords: { ar: ['بنزنيدازول', 'داء شاغاس', 'مثقبية كروزية', 'نيتروإيميدازول', 'طفح جلدي'], en: ['benznidazole', 'Chagas disease', 'American trypanosomiasis', 'T. cruzi', 'nitroimidazole'] }
});

DRUGS.push({
  id: 'aciclovir',
  cls: 'antiviral',
  otc: false,
  alert: false,
  name:  { ar: 'الأسيكلوفير', en: 'Aciclovir (Acyclovir)' },
  short: {
    ar: 'حجر الأساس في علاج فيروسات الهربس: جدري الماء والحزام الناري وقرحة البرد والهربس التناسلي والتهاب القرنية. يوقف نشاط الفيروس ولا يستأصله من الجسم.',
    en: 'The cornerstone of herpes virus treatment: chickenpox, shingles, cold sores, genital herpes and herpes keratitis. It halts the virus activity but does not clear it from the body.'
  },
  brands: ['زوفيراكس', 'أسيكلوفير'],
  uses: ['chickenpox-shingles', 'herpes-oral', 'genital-herpes', 'keratitis'],
  keywords: { ar: ['أسيكلوفير', 'هربس', 'حزام ناري', 'جدري الماء', 'قرحة البرد', 'زوفيراكس'], en: ['aciclovir', 'acyclovir', 'Zovirax', 'herpes', 'shingles', 'cold sore'] }
});

DRUGS.push({
  id: 'oseltamivir',
  cls: 'antiviral',
  otc: false,
  alert: false,
  name:  { ar: 'الأوسيلتاميفير', en: 'Oseltamivir' },
  short: {
    ar: 'دواء الإنفلونزا وحدها لا نزلة البرد. يقصّر مدّة الأعراض إن بُدئ باكراً، وليس بديلاً عن اللقاح السنوي.',
    en: 'A medicine for influenza only, not for the common cold. It shortens the duration of symptoms if started early, and it is not a substitute for the yearly vaccine.'
  },
  brands: ['تاميفلو'],
  uses: ['influenza'],
  keywords: { ar: ['أوسيلتاميفير', 'تاميفلو', 'إنفلونزا', 'نزلة برد', 'مثبّط نورامينيداز'], en: ['oseltamivir', 'Tamiflu', 'influenza', 'flu', 'neuraminidase inhibitor'] }
});

DRUGS.push({
  id: 'valganciclovir',
  cls: 'antiviral',
  otc: false,
  alert: true,
  name:  { ar: 'الفالجانسيكلوفير', en: 'Valganciclovir' },
  short: {
    ar: 'أقراص للفيروس المضخّم للخلايا: تعالج التهاب الشبكية عند مرضى الإيدز وتقي متلقّي زراعة الأعضاء. تحذير مؤطّر يخصّ كريات الدم والجنين والخصوبة.',
    en: 'Tablets for cytomegalovirus: they treat retinitis in people with AIDS and protect organ transplant recipients. A boxed warning covers blood cells, the fetus and fertility.'
  },
  brands: ['فالسايت'],
  uses: ['hiv', 'immunodeficiency'],
  keywords: { ar: ['فالجانسيكلوفير', 'فيروس مضخّم للخلايا', 'التهاب الشبكية', 'زراعة أعضاء', 'فالسايت'], en: ['valganciclovir', 'Valcyte', 'CMV', 'cytomegalovirus', 'retinitis', 'transplant'] }
});

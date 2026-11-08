/* ============================================================
   موسوعة الأدوية — فهرس دفعة أدوية الملاريا وداء المقوّسات (para3)
   rx/index-para3.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'artesunate-sulfadoxine-pyrimethamine',
  cls: 'antimalarial',
  otc: false,
  alert: true,
  name:  { ar: 'الأرتيسونات مع السلفادوكسين والبيريميثامين', en: 'Artesunate – sulfadoxine + pyrimethamine' },
  short: {
    ar: 'علاج مركّب للملاريا غير المعقّدة: مادة سريعة من فصيلة الأرتيميسينين تكنس الطفيلي من الدم، ومادتان أبطأ تلاحقان ما نجا منه حتى لا يعود المرض.',
    en: 'A combination treatment for uncomplicated malaria: a fast artemisinin drug sweeps the parasite from the blood, while two slower partner drugs hunt down what survived so the illness does not return.'
  },
  brands: [],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا', 'أرتيسونات', 'سلفادوكسين', 'بيريميثامين', 'علاج مركب'], en: ['artesunate', 'sulfadoxine', 'pyrimethamine', 'ACT', 'malaria'] }
});

DRUGS.push({
  id: 'amodiaquine-sulfadoxine-pyrimethamine',
  cls: 'antimalarial',
  otc: false,
  alert: true,
  name:  { ar: 'الأمودياكين مع السلفادوكسين والبيريميثامين', en: 'Amodiaquine – sulfadoxine + pyrimethamine' },
  short: {
    ar: 'توليفة تُعطى لأطفال مناطق الملاريا الموسمية وقايةً لا علاجاً لشكوى قائمة. تحمل خطرين نادرين لكن ثقيلين: أذى الكبد وانهيار كريات الدم البيضاء.',
    en: 'A combination given to children in seasonal malaria areas as prevention rather than treatment of a current complaint. It carries two rare but heavy risks: liver injury and a collapse of white blood cells.'
  },
  brands: [],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا', 'أمودياكين', 'وقاية موسمية', 'سلفادوكسين', 'أطفال'], en: ['amodiaquine', 'SMC', 'seasonal chemoprevention', 'sulfadoxine', 'malaria'] }
});

DRUGS.push({
  id: 'sulfadoxine-pyrimethamine',
  cls: 'antimalarial',
  otc: false,
  alert: true,
  name:  { ar: 'السلفادوكسين مع البيريميثامين', en: 'Sulfadoxine + pyrimethamine' },
  short: {
    ar: 'دواء ملاريا قديم يخنق مسار حمض الفوليك في الطفيلي. أهمّ ما بقي له اليوم وقاية الحوامل في مناطق الملاريا. خطره الأكبر طفح جلدي قد يصير تقشّراً مميتاً.',
    en: 'An old malaria medicine that strangles the parasite folic acid pathway. Its main remaining role is protecting pregnant women in malaria areas. Its biggest danger is a rash that can turn into fatal skin peeling.'
  },
  brands: ['فانسيدار'],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا', 'سلفادوكسين', 'بيريميثامين', 'حامل', 'فانسيدار'], en: ['fansidar', 'sulfadoxine', 'pyrimethamine', 'IPTp', 'malaria'] }
});

DRUGS.push({
  id: 'dihydroartemisinin-piperaquine',
  cls: 'antimalarial',
  otc: false,
  alert: true,
  name:  { ar: 'ثنائي هيدروأرتيميسينين مع البيبيراكين', en: 'Dihydroartemisinin + piperaquine' },
  short: {
    ar: 'توليفة حديثة معتمدة في أوروبا للملاريا غير المعقّدة. تُبتلع على معدة فارغة، وتُراقب فيها كهرباء القلب لأن البيبيراكين يُطيل فترة كيو تي.',
    en: 'A modern combination approved in Europe for uncomplicated malaria. It is swallowed on an empty stomach, and the heart tracing is watched because piperaquine lengthens the QT interval.'
  },
  brands: ['يورارتيسيم'],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا', 'أرتيميسينين', 'بيبيراكين', 'كيو تي', 'يورارتيسيم'], en: ['eurartesim', 'artenimol', 'piperaquine', 'QT', 'malaria'] }
});

DRUGS.push({
  id: 'chloroquine',
  cls: 'antimalarial',
  otc: false,
  alert: true,
  name:  { ar: 'الكلوروكين', en: 'Chloroquine' },
  short: {
    ar: 'أشهر دواء ملاريا في التاريخ، وما زال يُستعمل حيث لم يقاومه الطفيلي، وللزحار الأميبي، وأحياناً للذئبة والروماتويد. يؤذي شبكية العين مع طول الاستعمال.',
    en: 'The most famous malaria drug in history, still used where the parasite has not resisted it, for amoebic dysentery, and sometimes for lupus and rheumatoid arthritis. It can damage the retina with long use.'
  },
  brands: ['نيفاكين', 'ريزوكين', 'أرالين'],
  uses: ['malaria', 'amebiasis', 'lupus', 'rheumatoid-arthritis'],
  keywords: { ar: ['ملاريا', 'كلوروكين', 'أميبا', 'شبكية', 'ذئبة'], en: ['chloroquine', 'aralen', 'nivaquine', 'retinopathy', 'amebiasis'] }
});

DRUGS.push({
  id: 'primaquine',
  cls: 'antimalarial',
  otc: false,
  alert: true,
  name:  { ar: 'البريماكين', en: 'Primaquine' },
  short: {
    ar: 'الدواء الذي يطارد طفيلي الملاريا النائم في الكبد، فيمنع عودة النوبة بعد شهور. يفكّك كريات الدم الحمراء عند ناقصي خميرة ج٦ب د، فالفحص قبله شرط.',
    en: 'The drug that hunts the malaria parasite sleeping in the liver, preventing an attack that returns months later. It breaks down red cells in people with G6PD deficiency, so testing first is a condition.'
  },
  brands: ['بريماكين'],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا', 'بريماكين', 'فوال', 'انتكاسة', 'كبد'], en: ['primaquine', 'hypnozoite', 'G6PD', 'relapse', 'vivax'] }
});

DRUGS.push({
  id: 'quinine',
  cls: 'antimalarial',
  otc: false,
  alert: true,
  name:  { ar: 'الكينين', en: 'Quinine' },
  short: {
    ar: 'أقدم علاج معروف للملاريا، مستخلص من لحاء الكينا. تحذير رسمي صريح: لا يُستعمل لتشنّج الساق الليلي، فقد يهدم الصفيحات ويقتل بلا فائدة مثبتة.',
    en: 'The oldest known malaria treatment, drawn from cinchona bark. An explicit official warning: it must not be used for night leg cramps, as it can destroy platelets and kill with no proven benefit.'
  },
  brands: ['كوالاكين'],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا', 'كينين', 'طنين', 'تشنج الساق', 'صفيحات'], en: ['quinine', 'qualaquin', 'cinchonism', 'leg cramps', 'thrombocytopenia'] }
});

DRUGS.push({
  id: 'mefloquine',
  cls: 'antimalarial',
  otc: false,
  alert: true,
  name:  { ar: 'الميفلوكين', en: 'Mefloquine' },
  short: {
    ar: 'دواء ملاريا يُبتلع للعلاج وللوقاية عند المسافرين. يحمل تحذيراً مؤطّراً: اضطراب توازن ونفسية قد يبقى شهوراً أو سنين بعد إيقافه، وقد لا يزول.',
    en: 'A malaria medicine swallowed for treatment and for prevention in travellers. It carries a boxed warning: balance and mental disturbances that may last months or years after stopping, and may never go.'
  },
  brands: ['لاريام'],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا', 'ميفلوكين', 'دوخة', 'كوابيس', 'مسافر'], en: ['mefloquine', 'lariam', 'neuropsychiatric', 'traveller', 'malaria'] }
});

DRUGS.push({
  id: 'pyrimethamine',
  cls: 'antiprotozoal',
  otc: false,
  alert: true,
  name:  { ar: 'البيريميثامين', en: 'Pyrimethamine' },
  short: {
    ar: 'حجر الأساس في علاج داء المقوّسات، ولا يُعطى وحده أبداً بل مع سلفوناميد ومع حمض الفولينيك الذي يحمي نخاع العظم. هامش أمانه ضيّق جداً.',
    en: 'The cornerstone of toxoplasmosis treatment, never given alone but with a sulfonamide and with folinic acid that shields the bone marrow. Its margin of safety is very narrow.'
  },
  brands: ['دارابريم'],
  uses: ['toxoplasmosis', 'malaria'],
  keywords: { ar: ['مقوسات', 'توكسوبلازما', 'بيريميثامين', 'فولينيك', 'نخاع'], en: ['daraprim', 'pyrimethamine', 'toxoplasmosis', 'leucovorin', 'folate'] }
});

DRUGS.push({
  id: 'sulfadiazine',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'السلفاديازين', en: 'Sulfadiazine' },
  short: {
    ar: 'سلفوناميد قديم، أهمّ أدواره اليوم مرافقة البيريميثامين في داء المقوّسات. يحتاج شرب ماء وفير، ويُوقَف عند أول طفح جلدي مهما بدا بسيطاً.',
    en: 'An old sulfonamide whose main role today is partnering pyrimethamine in toxoplasmosis. It needs plenty of water, and must be stopped at the first rash however trivial it looks.'
  },
  brands: ['سلفاديازين'],
  uses: ['toxoplasmosis', 'uti', 'meningitis', 'rheumatic-fever'],
  keywords: { ar: ['سلفا', 'مقوسات', 'سلفاديازين', 'طفح', 'بلورات'], en: ['sulfadiazine', 'sulfonamide', 'toxoplasmosis', 'crystalluria', 'rash'] }
});

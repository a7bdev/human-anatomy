/* ============================================================
   موسوعة الأدوية — فهرس دفعة الفيتامينات والمغذّيات الدقيقة (vit1)
   rx/index-vit1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   كل بطاقة كُتبت من نشرة رسمية مفتوحة وقت الكتابة — المصادر في rx-vit1.js
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'ergocalciferol',
  cls: 'vitamin',
  otc: true,
  alert: true,
  name:  { ar: 'فيتامين د٢ (الإرغوكالسيفيرول)', en: 'Vitamin D2 (Ergocalciferol)' },
  short: {
    ar: 'صورة نباتية من فيتامين د تُستعمل لعلاج نقصه ولحالات العظم واضطراب الغدد جار الدرقية. المسافة بين المقدار النافع والمقدار السامّ ضيّقة، والزيادة ترفع الكالسيوم.',
    en: 'A plant-derived form of vitamin D used for deficiency, bone disease and parathyroid disorders. The gap between the helpful and the toxic amount is narrow, and excess raises blood calcium.'
  },
  brands: ['ستيروجيل', 'دريسدول', 'كالسيفيرول', 'فيتامين د٢'],
  uses: ['vitamin-d-deficiency', 'osteomalacia-rickets', 'hypocalcemia', 'hypoparathyroidism', 'osteoporosis'],
  keywords: {
    ar: ['فيتامين د', 'إرغوكالسيفيرول', 'كساح', 'لين العظام', 'نقص الكالسيوم'],
    en: ['ergocalciferol', 'vitamin D2', 'rickets', 'osteomalacia', 'hypocalcaemia']
  }
});

DRUGS.push({
  id: 'retinol',
  cls: 'vitamin',
  otc: true,
  alert: true,
  name:  { ar: 'فيتامين أ (الريتينول)', en: 'Vitamin A (Retinol)' },
  short: {
    ar: 'فيتامين ذائب في الدهن يحفظ الإبصار في الضوء الخافت ويحمي سطح العين والمناعة. مكمّل منقذ في الحصبة وسوء التغذية، ومشوّه للجنين إن أُخذ بكثرة في الحمل.',
    en: 'A fat-soluble vitamin that preserves vision in dim light and protects the eye surface and immunity. A life-saving supplement in measles and malnutrition, and harmful to the fetus if taken in excess in pregnancy.'
  },
  brands: ['أروفيت', 'فيتامين أ', 'ريتينول'],
  uses: ['measles', 'malnutrition', 'cystic-fibrosis'],
  keywords: {
    ar: ['فيتامين أ', 'ريتينول', 'العشى الليلي', 'جفاف العين', 'الحصبة'],
    en: ['retinol', 'vitamin A', 'night blindness', 'xerophthalmia', 'measles']
  }
});

DRUGS.push({
  id: 'thiamine',
  cls: 'vitamin',
  otc: true,
  alert: false,
  name:  { ar: 'فيتامين ب١ (الثيامين)', en: 'Vitamin B1 (Thiamine)' },
  short: {
    ar: 'فيتامين تحتاجه الخلية لتحويل الطعام إلى طاقة ويحفظ الأعصاب. نقصه يسبّب البري بري واعتلال ڤيرنيكه الدماغي، وتعويضه في وقته يردّ ما كاد يضيع.',
    en: 'A vitamin the cell needs to turn food into energy, and that protects the nerves. Its lack causes beriberi and Wernicke encephalopathy, and replacing it in time reverses what was nearly lost.'
  },
  brands: ['بينيرفا', 'نيوروبيون', 'بيكوزيم', 'فيتامين ب١'],
  uses: ['substance-addiction', 'malnutrition', 'peripheral-neuropathy', 'hyperemesis', 'heart-failure'],
  keywords: {
    ar: ['ثيامين', 'فيتامين ب١', 'بري بري', 'ڤيرنيكه', 'إدمان الكحول'],
    en: ['thiamine', 'vitamin B1', 'beriberi', 'Wernicke', 'alcohol']
  }
});

DRUGS.push({
  id: 'riboflavin',
  cls: 'vitamin',
  otc: true,
  alert: false,
  name:  { ar: 'فيتامين ب٢ (الريبوفلافين)', en: 'Vitamin B2 (Riboflavin)' },
  short: {
    ar: 'فيتامين ذائب في الماء يدخل في تفاعلات إنتاج الطاقة. نقصه يظهر في الشفتين واللسان والجلد، وله استعمال في تثبيت القرنية وفي الوقاية من الشقيقة، ولا يُعرف له تسمّم.',
    en: 'A water-soluble vitamin involved in energy-producing reactions. Its lack shows on the lips, tongue and skin; it also has a role in corneal cross-linking and migraine prevention, and no toxicity is known.'
  },
  brands: ['بيكوزيم', 'نيوروبيون', 'فيتامين ب٢', 'ريبوفلافين'],
  uses: ['malnutrition', 'migraine', 'keratoconus'],
  keywords: {
    ar: ['ريبوفلافين', 'فيتامين ب٢', 'تشقّق الشفاه', 'التهاب زوايا الفم', 'الشقيقة'],
    en: ['riboflavin', 'vitamin B2', 'angular cheilitis', 'ariboflavinosis', 'migraine']
  }
});

DRUGS.push({
  id: 'nicotinamide',
  cls: 'vitamin',
  otc: true,
  alert: false,
  name:  { ar: 'النياسيناميد (فيتامين ب٣)', en: 'Nicotinamide (Niacinamide, Vitamin B3)' },
  short: {
    ar: 'صورة من فيتامين ب٣ تُفضَّل على حمض النيكوتينيك في علاج البلاغرا لأنها لا تُحدث التورّد المزعج ولا تُستعمل لخفض الدهون. وهي علاج ثلاثيّة الجلد والإسهال والخلط الذهني.',
    en: 'A form of vitamin B3 preferred over nicotinic acid for treating pellagra because it does not cause the bothersome flushing and is not used to lower lipids. It treats the triad of dermatitis, diarrhoea and confusion.'
  },
  brands: ['نياسيناميد', 'بيكوزيم', 'نيكوتيناميد'],
  uses: ['malnutrition', 'substance-addiction', 'tb'],
  keywords: {
    ar: ['نياسيناميد', 'فيتامين ب٣', 'بلاغرا', 'نياسين', 'نيكوتيناميد'],
    en: ['nicotinamide', 'niacinamide', 'vitamin B3', 'pellagra', 'niacin']
  }
});

DRUGS.push({
  id: 'pyridoxine',
  cls: 'vitamin',
  otc: true,
  alert: true,
  name:  { ar: 'فيتامين ب٦ (البيريدوكسين)', en: 'Vitamin B6 (Pyridoxine)' },
  short: {
    ar: 'فيتامين يدخل في مئات التفاعلات وفي صنع نواقل الدماغ. يُرافق دواء السلّ إيزونيازيد ليمنع اعتلال الأعصاب، ويعالج غثيان الحمل. وزيادته الطويلة تؤذي الأعصاب الحسّية نفسها.',
    en: 'A vitamin involved in hundreds of reactions and in making brain messengers. It accompanies the TB drug isoniazid to prevent nerve damage, and treats pregnancy nausea. Prolonged excess harms the sensory nerves themselves.'
  },
  brands: ['بينادون', 'نيوروبيون', 'فيتامين ب٦', 'بيريدوكسين'],
  uses: ['tb', 'hyperemesis', 'peripheral-neuropathy', 'epilepsy', 'poisoning'],
  keywords: {
    ar: ['بيريدوكسين', 'فيتامين ب٦', 'إيزونيازيد', 'غثيان الحمل', 'تنميل الأطراف'],
    en: ['pyridoxine', 'vitamin B6', 'isoniazid', 'morning sickness', 'neuropathy']
  }
});

DRUGS.push({
  id: 'folic-acid',
  cls: 'vitamin',
  otc: true,
  alert: true,
  name:  { ar: 'حمض الفوليك', en: 'Folic acid' },
  short: {
    ar: 'صورة مصنّعة من فيتامين ب٩ يحتاجها الجسم لصنع كريات الدم الحمراء وبناء الحمض النووي. حجر الأساس في الوقاية من عيوب الأنبوب العصبي عند الجنين، وخطره الوحيد أنه يخفي نقص ب١٢.',
    en: 'A manufactured form of vitamin B9 the body needs to make red blood cells and build DNA. The cornerstone of preventing neural tube defects in the fetus; its one danger is that it masks B12 deficiency.'
  },
  brands: ['فوليكم', 'فولك أسيد', 'فيفول', 'فوليك'],
  uses: ['spina-bifida', 'sickle-cell', 'thalassemia', 'hemolytic-anemia', 'rheumatoid-arthritis'],
  keywords: {
    ar: ['حمض الفوليك', 'فولات', 'فيتامين ب٩', 'الحمل', 'فقر الدم كبير الكريات'],
    en: ['folic acid', 'folate', 'vitamin B9', 'pregnancy', 'megaloblastic anaemia']
  }
});

DRUGS.push({
  id: 'calcium',
  cls: 'mineral-supplement',
  otc: true,
  alert: false,
  name:  { ar: 'الكالسيوم', en: 'Calcium' },
  short: {
    ar: 'معدن العظم والعضلة والعصب والقلب. يُؤخذ مكمّلاً حين يقصر الغذاء، ويُستعمل كربوناته مضاداً للحموضة ورابطاً للفوسفات في الكلى. وأشهر مشكلاته الإمساك وإفساد امتصاص أدوية أخرى.',
    en: 'The mineral of bone, muscle, nerve and heart. Taken as a supplement when diet falls short; its carbonate also serves as an antacid and a phosphate binder in kidney disease. Its commonest problems are constipation and blocking the absorption of other medicines.'
  },
  brands: ['كالتريت', 'أوستيوكير', 'كالسيتشو', 'ساندوكال', 'كال-ماغ'],
  uses: ['hypocalcemia', 'osteoporosis', 'osteomalacia-rickets', 'hypoparathyroidism', 'ckd', 'dyspepsia'],
  keywords: {
    ar: ['كالسيوم', 'كربونات الكالسيوم', 'سيترات الكالسيوم', 'هشاشة العظام', 'مضاد حموضة'],
    en: ['calcium', 'calcium carbonate', 'calcium citrate', 'osteoporosis', 'antacid']
  }
});

DRUGS.push({
  id: 'iodine',
  cls: 'mineral-supplement',
  otc: true,
  alert: true,
  name:  { ar: 'اليود', en: 'Iodine' },
  short: {
    ar: 'معدن لا يصنعه الجسم ولا تُصنع هرمونات الغدة الدرقية بدونه. نقصه يضخّم الغدة ويؤذي دماغ الجنين، وزيادته تعطّل الغدة أو تُهيّجها. أشهر صوره ملح الطعام المُيَوَّد.',
    en: 'A mineral the body cannot make and without which thyroid hormones cannot be made. Its lack enlarges the gland and harms the fetal brain; its excess either shuts the gland down or overexcites it. Its commonest form is iodized table salt.'
  },
  brands: ['الملح المُيَوَّد', 'لوغول', 'يوديد البوتاسيوم', 'زيت اليود'],
  uses: ['iodine-deficiency', 'goiter', 'congenital-hypothyroidism', 'thyroid-storm'],
  keywords: {
    ar: ['يود', 'ملح ميود', 'تضخّم الغدة', 'يوديد البوتاسيوم', 'الدرقية'],
    en: ['iodine', 'iodized salt', 'goitre', 'potassium iodide', 'thyroid']
  }
});

DRUGS.push({
  id: 'multiple-micronutrient-powder',
  cls: 'vitamin',
  otc: true,
  alert: false,
  name:  { ar: 'مسحوق المغذّيات الدقيقة المتعدّدة', en: 'Multiple micronutrient powder' },
  short: {
    ar: 'كيس صغير من مسحوق بلا طعم يُذرّ على طعام الطفل في البيت فيحوّل الوجبة العادية إلى وجبة مدعّمة. يحوي على الأقل الحديد وفيتامين أ والزنك، وغرضه الأول إنقاص فقر الدم.',
    en: 'A small sachet of tasteless powder sprinkled onto a child’s food at home, turning an ordinary meal into a fortified one. It contains at least iron, vitamin A and zinc, and its first purpose is to reduce anaemia.'
  },
  brands: ['سبرينكلز', 'ميكس مي', 'أكياس المغذّيات الدقيقة'],
  uses: ['malnutrition', 'child-iron-anemia', 'iron-anemia', 'zinc-deficiency'],
  keywords: {
    ar: ['مغذّيات دقيقة', 'تدعيم منزلي', 'أكياس', 'فقر دم الأطفال', 'حديد وزنك'],
    en: ['micronutrient powder', 'MNP', 'home fortification', 'point-of-use', 'sprinkles']
  }
});

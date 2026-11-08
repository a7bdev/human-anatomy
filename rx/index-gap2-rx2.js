/* ============================================================
   موسوعة الأدوية — فهرس دفعة الفجوة الثانية (rx2)
   rx/index-gap2-rx2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'oxybutynin',
  cls: 'antimuscarinic',
  otc: false,
  alert: false,
  name:  { ar: 'الأوكسيبوتينين', en: 'Oxybutynin' },
  short: {
    ar: 'مضاد مسكاريني يهدّئ عضلة المثانة المفرطة النشاط، فيقلّل الإلحاح البولي وكثرة التبوّل والتبوّل اللاإرادي. يجفّف الفم والعين ويسبّب إمساكاً، ويُنتبه له عند كبار السنّ.',
    en: 'An antimuscarinic that calms an overactive bladder muscle, easing urinary urgency, frequency and urge leakage. It dries the mouth and eyes and causes constipation, and needs care in older people.'
  },
  brands: ['ديتروبان', 'درايبتان', 'أوكسيبوتينين'],
  uses: ['overactive-bladder', 'urinary-incontinence'],
  keywords: { ar: ['المثانة', 'سلس البول', 'الإلحاح البولي', 'ديتروبان'], en: ['bladder', 'incontinence', 'ditropan', 'antimuscarinic'] }
});

DRUGS.push({
  id: 'mirabegron',
  cls: 'beta3-agonist',
  otc: false,
  alert: false,
  name:  { ar: 'الميرابيغرون', en: 'Mirabegron' },
  short: {
    ar: 'ناهض لمستقبل بيتا-٣ يُرخي عضلة المثانة أثناء امتلائها فتتّسع لكمية أكبر، فيقلّ الإلحاح والتبوّل اللاإرادي. بديل لمن لم يحتمل جفاف مضادات المسكارين، لكنه قد يرفع الضغط.',
    en: 'A beta-3 agonist that relaxes the bladder muscle as it fills so it holds more, reducing urgency and urge leakage. An alternative for those who could not tolerate the dryness of antimuscarinics, though it may raise blood pressure.'
  },
  brands: ['بيتميغا', 'ميرابيغرون'],
  uses: ['overactive-bladder', 'urinary-incontinence'],
  keywords: { ar: ['المثانة', 'الإلحاح البولي', 'سلس البول', 'بيتميغا'], en: ['bladder', 'urgency', 'betmiga', 'beta-3'] }
});

DRUGS.push({
  id: 'finasteride',
  cls: '5-alpha-reductase-inhibitor',
  otc: false,
  alert: false,
  name:  { ar: 'الفيناسترايد', en: 'Finasteride' },
  short: {
    ar: 'يمنع تحوّل هرمون الذكورة إلى صورته الأقوى، فيصغّر البروستاتا المتضخّمة ويبطّئ تساقط الشعر الوراثي عند الرجال. أثره بطيء يظهر بعد شهور، ويحمل تحفّظات على الحمل والوظيفة الجنسية.',
    en: 'It blocks the conversion of the male hormone into its stronger form, shrinking an enlarged prostate and slowing male-pattern hair loss. Its effect is slow, appearing after months, and it carries cautions on pregnancy and sexual function.'
  },
  brands: ['بروسكار', 'بروبيشيا', 'فيناستيرايد'],
  uses: ['bph', 'hair-loss'],
  keywords: { ar: ['تضخّم البروستاتا', 'تساقط الشعر', 'الصلع', 'بروسكار', 'بروبيشيا'], en: ['prostate', 'hair loss', 'baldness', 'proscar', 'propecia'] }
});

DRUGS.push({
  id: 'minoxidil',
  cls: 'hair-growth',
  otc: true,
  alert: false,
  name:  { ar: 'المينوكسيديل الموضعي', en: 'Minoxidil (topical)' },
  short: {
    ar: 'محلول أو رغوة تُدلك على فروة الرأس لتنشيط نمو الشعر في الصلع الوراثي. يُصرف بلا وصفة، ويحتاج مواظبة شهوراً، ويعود التساقط إن توقّف. قد يهيّج الفروة ويُتجنّب ابتلاعه أو ملامسته للوجه.',
    en: 'A lotion or foam massaged onto the scalp to stimulate hair growth in pattern baldness. It is sold without prescription, needs steady use for months, and shedding returns if it is stopped. It may irritate the scalp and must not be swallowed or spread onto the face.'
  },
  brands: ['روجين', 'ريجين', 'مينوكسيديل'],
  uses: ['hair-loss'],
  keywords: { ar: ['تساقط الشعر', 'الصلع', 'فروة الرأس', 'روجين', 'ريجين'], en: ['hair loss', 'baldness', 'scalp', 'rogaine', 'regaine'] }
});

DRUGS.push({
  id: 'dydrogesterone',
  cls: 'progestin',
  otc: false,
  alert: false,
  name:  { ar: 'الديدروجستيرون', en: 'Dydrogesterone' },
  short: {
    ar: 'بروجستين فموي يشبه هرمون البروجسترون الطبيعي، يُستعمل لدعم بطانة الرحم في تهديد الإجهاض وتكرّره، وفي اضطرابات الطمث والانتباذ البطاني. لا يمنع الحمل ولا يعمل مانعاً للحمل.',
    en: 'An oral progestin resembling the natural hormone progesterone, used to support the womb lining in threatened and recurrent miscarriage, and in menstrual disorders and endometriosis. It is not a contraceptive and does not prevent pregnancy.'
  },
  brands: ['ديوفاستون', 'دوفاستون', 'ديدروجستيرون'],
  uses: ['miscarriage', 'endometriosis', 'amenorrhea', 'dysmenorrhea'],
  keywords: { ar: ['البروجسترون', 'دعم الحمل', 'الإجهاض', 'الطمث', 'ديوفاستون'], en: ['progesterone', 'pregnancy support', 'miscarriage', 'duphaston'] }
});

DRUGS.push({
  id: 'valacyclovir',
  cls: 'antiviral',
  otc: false,
  alert: false,
  name:  { ar: 'الفالاسيكلوفير', en: 'Valaciclovir' },
  short: {
    ar: 'مضاد فيروسي يتحوّل في الجسم إلى الأسيكلوفير، يعالج قروح الهربس الفموية والتناسلية والحزام الناري وجدري الماء، ويقلّل نوبات الهربس المتكرّرة. يبدأ مبكراً ليعمل، ويحتاج شرب ماء وفير.',
    en: 'An antiviral that turns into aciclovir in the body, treating oral and genital herpes sores, shingles and chickenpox, and reducing recurrent herpes attacks. It works best started early and needs plenty of water.'
  },
  brands: ['فالتركس', 'فالاسيكلوفير'],
  uses: ['herpes-oral', 'genital-herpes', 'chickenpox-shingles'],
  keywords: { ar: ['الهربس', 'الحزام الناري', 'قرح البرد', 'جدري الماء', 'فالتركس'], en: ['herpes', 'shingles', 'cold sores', 'valtrex'] }
});

DRUGS.push({
  id: 'artificial-tears',
  cls: 'ocular-lubricant',
  otc: true,
  alert: false,
  name:  { ar: 'الدموع الاصطناعية', en: 'Artificial tears' },
  short: {
    ar: 'قطرات وجل تُرطّب سطح العين الجافّ فتخفّف الحرق والحكّة والإحساس بالرمل. تُصرف بلا وصفة، وتُفضّل الأنواع الخالية من المواد الحافظة عند كثرة الاستعمال. علاج للراحة لا يعالج سبب الجفاف.',
    en: 'Drops and gels that moisten a dry eye surface, easing burning, itching and a gritty feeling. Sold without prescription, with preservative-free types preferred when used often. A comfort treatment that does not cure the cause of dryness.'
  },
  brands: ['ريفريش', 'تيرز ناتشورال', 'أوبتيف', 'هايبوتيرز'],
  uses: ['dry-eye'],
  keywords: { ar: ['جفاف العين', 'قطرة مرطّبة', 'الدموع', 'ريفريش'], en: ['dry eye', 'lubricant drops', 'tears', 'refresh'] }
});

DRUGS.push({
  id: 'betahistine',
  cls: 'vestibular',
  otc: false,
  alert: false,
  name:  { ar: 'البيتاهيستين', en: 'Betahistine' },
  short: {
    ar: 'دواء يشبه الهيستامين يُستعمل في داء منيير لتقليل نوبات الدوار الدوّاري وطنين الأذن والإحساس بامتلائها. يُظنّ أنه يحسّن جريان الدم في الأذن الداخلية. لا يوقف نوبة قائمة بل يقلّل تكرارها.',
    en: 'A histamine-like medicine used in Meniere disease to reduce attacks of spinning vertigo, ringing in the ear and a feeling of fullness. It is thought to improve blood flow in the inner ear. It does not stop an ongoing attack but reduces how often they come.'
  },
  brands: ['سيرك', 'بيتاسيرك', 'بيتاهيستين'],
  uses: ['menieres'],
  keywords: { ar: ['داء منيير', 'الدوار', 'طنين الأذن', 'سيرك'], en: ['meniere', 'vertigo', 'tinnitus', 'serc'] }
});

DRUGS.push({
  id: 'melatonin',
  cls: 'sleep-aid',
  otc: true,
  alert: false,
  name:  { ar: 'الميلاتونين', en: 'Melatonin' },
  short: {
    ar: 'نسخة من هرمون النوم الذي يفرزه الدماغ عند الظلام، يُؤخذ لتقصير زمن الاستغراق في النوم وضبط ساعة الجسم في الأرق واضطراب الرحلات. أقرب إلى منظّم للتوقيت منه إلى منوّم قويّ.',
    en: 'A copy of the sleep hormone the brain releases in darkness, taken to shorten the time to fall asleep and reset the body clock in insomnia and jet lag. It is closer to a timing regulator than a strong sleeping pill.'
  },
  brands: ['سيركادين', 'ميلاتونين'],
  uses: ['insomnia'],
  keywords: { ar: ['الأرق', 'النوم', 'اضطراب الرحلات', 'هرمون النوم', 'سيركادين'], en: ['insomnia', 'sleep', 'jet lag', 'circadin'] }
});

DRUGS.push({
  id: 'chlorphenamine',
  cls: 'antihistamine',
  otc: true,
  alert: false,
  name:  { ar: 'الكلورفينامين', en: 'Chlorphenamine' },
  short: {
    ar: 'مضاد هيستامين قديم مهدّئ، يخفّف الرشح والعطاس والحكّة وطفح الشرى وحساسية العين والأنف. يُصرف بلا وصفة، لكنه يسبّب نعاساً واضحاً فيُحذر معه القيادة، ويُنتبه له عند كبار السنّ.',
    en: 'An older sedating antihistamine that relieves a runny nose, sneezing, itching, hives and eye and nose allergy. Sold without prescription, but it causes marked drowsiness so care with driving is needed, and it needs caution in older people.'
  },
  brands: ['بيريتون', 'الرجيكس', 'كلورفينامين'],
  uses: ['allergic-rhinitis', 'urticaria', 'allergic-conjunctivitis', 'eczema'],
  keywords: { ar: ['الحساسية', 'الشرى', 'الرشح', 'مضاد هيستامين', 'بيريتون'], en: ['allergy', 'hives', 'hay fever', 'piriton'] }
});

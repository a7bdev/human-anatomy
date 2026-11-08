/* ============================================================
   موسوعة الأمراض — فهرس أمراض النساء والثدي والحمل
   dx/index-gyn3.js   (الموجة الثالثة)
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-gyn3.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الرحم وبطانته ---------------- */

DISEASES.push({
  id: 'uterine-prolapse', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'هبوط الرحم وأعضاء الحوض', en: 'Uterine and pelvic organ prolapse' },
  short: {
    ar: 'ضعف أرضية الحوض التي تحمل الرحم والمثانة والمستقيم، فتنزل هذه الأعضاء إلى أسفل حتى تحسّ المرأة بثقل أو كتلة تبرز عند المهبل.',
    en: 'Weakening of the pelvic floor that carries the womb, bladder and rectum, so these organs descend until the woman feels heaviness or a bulge appearing at the vagina.'
  },
  organs: ['female-reproductive', 'pelvis', 'bladder', 'anorectal'],
  aliases: [],
  keywords: { ar: ['نزول الرحم', 'ثقل في المهبل', 'ضعف عضلات الحوض'], en: ['uterine prolapse', 'pelvic organ prolapse', 'cystocele', 'rectocele'] }
});

DISEASES.push({
  id: 'adenomyosis', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'العضال الغدّي الرحمي', en: 'Adenomyosis' },
  short: {
    ar: 'نموّ نسيج بطانة الرحم داخل جدار الرحم العضلي نفسه، فيتضخّم الرحم ويصير الطمث غزيراً وموجعاً بألم عميق يزداد سنة بعد سنة.',
    en: 'Growth of the womb lining inside the muscular wall of the womb itself, so the uterus enlarges and periods become heavy and painful with a deep ache that worsens year after year.'
  },
  organs: ['female-reproductive', 'ovary', 'blood'],
  aliases: [],
  keywords: { ar: ['بطانة الرحم داخل العضلة', 'رحم متضخم', 'دورة مؤلمة وغزيرة'], en: ['adenomyosis', 'enlarged uterus', 'heavy painful periods'] }
});

DISEASES.push({
  id: 'endometrial-hyperplasia', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'فرط تنسّج بطانة الرحم (تضخّم البطانة)', en: 'Endometrial hyperplasia' },
  short: {
    ar: 'ازدياد سماكة بطانة الرحم أكثر مما ينبغي لأن الإستروجين عمل عليها بلا كابح، وبعض صوره خطوة تسبق سرطان البطانة فتستحقّ تشخيصاً حاسماً.',
    en: 'The womb lining grows thicker than it should because oestrogen has acted on it unopposed, and some forms are a step before endometrial cancer, so they deserve a definite diagnosis.'
  },
  organs: ['female-reproductive', 'ovary', 'cell'],
  aliases: [],
  keywords: { ar: ['سماكة بطانة الرحم', 'نزف بعد سن اليأس', 'تضخم البطانة'], en: ['endometrial hyperplasia', 'thickened endometrium', 'postmenopausal bleeding'] }
});

DISEASES.push({
  id: 'uterine-polyps', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'سلائل الرحم وعنق الرحم (الزوائد اللحمية)', en: 'Uterine and cervical polyps' },
  short: {
    ar: 'زوائد لحمية صغيرة تنمو من بطانة الرحم أو من عنقه، أكثرها حميد، لكنها تنزف بين الدورات وبعد الجماع وقد تعوق حدوث الحمل.',
    en: 'Small fleshy growths arising from the womb lining or from the cervix; most are benign, but they bleed between periods and after intercourse and may hinder conception.'
  },
  organs: ['female-reproductive', 'cell'],
  aliases: [],
  keywords: { ar: ['زائدة لحمية في الرحم', 'نزف بين الدورات', 'سليلة عنق الرحم'], en: ['endometrial polyp', 'cervical polyp', 'intermenstrual bleeding'] }
});

DISEASES.push({
  id: 'cervical-insufficiency', group: 'repro', tier: 'rare', emergency: false,
  name: { ar: 'قصور عنق الرحم (ضعف عنق الرحم)', en: 'Cervical insufficiency' },
  short: {
    ar: 'عنق رحم يلين ويقصر وينفتح بلا طلق في منتصف الحمل، فيخرج الحمل بلا ألم يُنذر — وهو سبب معروف لتكرّر فقد الحمل في الشهور الوسطى.',
    en: 'A cervix that softens, shortens and opens without contractions in mid pregnancy, so the pregnancy is lost without warning pain; a known cause of repeated mid-trimester loss.'
  },
  organs: ['female-reproductive', 'pregnancy', 'embryo'],
  aliases: [],
  keywords: { ar: ['ضعف عنق الرحم', 'اجهاض متكرر في الشهر الرابع', 'ربط عنق الرحم'], en: ['cervical insufficiency', 'incompetent cervix', 'cerclage'] }
});

/* ---------------- الطمث والهرمونات ---------------- */

DISEASES.push({
  id: 'pms', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'متلازمة ما قبل الطمث', en: 'Premenstrual syndrome (PMS and PMDD)' },
  short: {
    ar: 'أعراض جسدية ونفسية تظهر في الأيام التي تسبق الدورة وتزول مع نزولها، وفي صورتها الشديدة تعطّل العمل والعلاقات لا مجرد تُزعج.',
    en: 'Physical and emotional symptoms that appear in the days before the period and fade as it starts; in its severe form it disrupts work and relationships rather than merely annoying.'
  },
  organs: ['female-reproductive', 'ovary', 'brain', 'limbic'],
  aliases: [],
  keywords: { ar: ['أعراض ما قبل الدورة', 'تقلب المزاج قبل الدورة', 'شدّ الثدي قبل الدورة'], en: ['PMS', 'PMDD', 'premenstrual dysphoric disorder'] }
});

DISEASES.push({
  id: 'amenorrhea', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'غياب الطمث (انقطاع الدورة)', en: 'Amenorrhoea (absent periods)' },
  short: {
    ar: 'ألا تأتي الدورة أصلاً في سنّها المتوقّع، أو أن تتوقّف عند من كانت تأتيها، وهي عرَض لسبب تحته لا مرض قائم بذاته — أوّل ما يُستبعد الحمل.',
    en: 'Periods that never start at the expected age, or stop in someone who used to have them; it is a symptom of an underlying cause rather than a disease in itself, and pregnancy is excluded first.'
  },
  organs: ['female-reproductive', 'ovary', 'pituitary', 'thyroid'],
  aliases: [],
  keywords: { ar: ['انقطاع الدورة الشهرية', 'تأخر البلوغ عند البنات', 'الدورة وقفت'], en: ['amenorrhoea', 'absent periods', 'missed periods'] }
});

/* ---------------- الثدي ---------------- */

DISEASES.push({
  id: 'fibroadenoma', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'الورم الغدّي الليفي في الثدي', en: 'Breast fibroadenoma' },
  short: {
    ar: 'كتلة حميدة صلبة ملساء متحرّكة تحت الأصابع، أشيع كتل الثدي عند الشابّات، لا تتحوّل إلى سرطان لكنها تحتاج تأكيداً أنها هي فعلاً.',
    en: 'A benign lump, firm, smooth and mobile under the fingers, the commonest breast lump in young women; it does not turn into cancer, but it needs confirmation that this is truly what it is.'
  },
  organs: ['breast', 'cell'],
  aliases: ['الورم الغدّي الليفي'],
  keywords: { ar: ['كتلة في الثدي عند الشابات', 'ورم ليفي غدي', 'كتلة متحركة'], en: ['fibroadenoma', 'breast mouse', 'benign breast lump'] }
});

DISEASES.push({
  id: 'breast-cyst', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'كيسة الثدي والتغيّرات الكيسية الليفية', en: 'Breast cyst and fibrocystic change' },
  short: {
    ar: 'أكياس مملوءة بسائل داخل نسيج الثدي مع تكتّل وألم يشتدّان قبل الدورة، حالة حميدة شائعة في العقد الرابع والخامس تخيف أكثر مما تؤذي.',
    en: 'Fluid-filled sacs within the breast tissue with lumpiness and pain that worsen before the period; a common benign condition in the forties and fifties that frightens more than it harms.'
  },
  organs: ['breast', 'cell'],
  aliases: ['الكيسة الثديية'],
  keywords: { ar: ['كيس في الثدي', 'ألم الثدي قبل الدورة', 'تكتل الثدي'], en: ['breast cyst', 'fibrocystic breast change', 'cyclical breast pain'] }
});

DISEASES.push({
  id: 'nipple-discharge', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'إفرازات الحلمة وتوسّع القنوات اللبنية', en: 'Nipple discharge and duct ectasia' },
  short: {
    ar: 'خروج سائل من الحلمة خارج الرضاعة. أكثره حميد من قنوات متوسّعة أو من هرمون الحليب، لكن الإفراز الدموي من ثدي واحد وثقب واحد يستدعي فحصاً.',
    en: 'Fluid coming from the nipple outside breastfeeding. Most is benign, from widened ducts or from the milk hormone, but bloody discharge from one breast and one duct calls for assessment.'
  },
  organs: ['breast', 'pituitary'],
  aliases: [],
  keywords: { ar: ['افراز من الحلمة', 'دم من الحلمة', 'توسع القنوات اللبنية'], en: ['nipple discharge', 'duct ectasia', 'intraductal papilloma'] }
});

DISEASES.push({
  id: 'breastfeeding-problems', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'صعوبات الرضاعة: قلّة الحليب وتشقّق الحلمة', en: 'Breastfeeding difficulties: low milk supply and cracked nipples' },
  short: {
    ar: 'ألم الحلمة وتشقّقها وشعور الأم أن حليبها لا يكفي، وأكثرها يرجع إلى التقام خاطئ للثدي ورضعات متباعدة لا إلى عيب في الأم نفسها.',
    en: 'Nipple pain and cracking and the mother feeling her milk is not enough; most of it goes back to a poor latch and widely spaced feeds rather than to any fault in the mother herself.'
  },
  organs: ['breast', 'pituitary', 'pregnancy'],
  aliases: [],
  keywords: { ar: ['قلة الحليب', 'تشقق الحلمة', 'الرضاعة الطبيعية مؤلمة'], en: ['low milk supply', 'cracked nipples', 'poor latch', 'lactation'] }
});

/* ---------------- الفرج والمهبل ---------------- */

DISEASES.push({
  id: 'bartholin-cyst', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'كيسة غدة بارثولين وخرّاجها', en: 'Bartholin cyst and abscess' },
  short: {
    ar: 'انسداد فتحة غدة مرطِّبة عند مدخل المهبل فيتجمّع خلفها السائل ككتلة على جانب واحد، وإن دخلتها الجراثيم صارت خرّاجاً موجعاً يمنع الجلوس.',
    en: 'The opening of a lubricating gland at the vaginal entrance becomes blocked so fluid collects behind it as a one-sided lump, and if germs enter it becomes a painful abscess that prevents sitting.'
  },
  organs: ['female-reproductive', 'skin'],
  aliases: [],
  keywords: { ar: ['كيس بارثولين', 'خراج عند فتحة المهبل', 'انتفاخ على جانب المهبل'], en: ['Bartholin cyst', 'Bartholin abscess', 'vulvar swelling'] }
});

DISEASES.push({
  id: 'lichen-sclerosus', group: 'repro', tier: 'rare', emergency: false,
  name: { ar: 'الحزاز المتصلّب الفرجي', en: 'Vulvar lichen sclerosus' },
  short: {
    ar: 'مرض جلدي مناعي مزمن يصيب جلد الفرج فيبيضّه ويرقّقه ويسبّب حكّة ليلية شديدة، وإن أُهمل التصق النسيج وتغيّر شكل الفرج وارتفع خطر السرطان.',
    en: 'A chronic immune skin disease affecting the vulvar skin, turning it white and thin and causing intense night-time itching; if neglected the tissue fuses, the vulva changes shape and cancer risk rises.'
  },
  organs: ['female-reproductive', 'skin', 'immunity'],
  aliases: [],
  keywords: { ar: ['حكة الفرج المزمنة', 'ابيضاض جلد الفرج', 'الحزاز المتصلب'], en: ['lichen sclerosus', 'vulvar itching', 'white vulvar skin'] }
});

/* ---------------- الحمل ---------------- */

DISEASES.push({
  id: 'hyperemesis', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'القيء الحملي المفرط (الوحام الشديد)', en: 'Hyperemesis gravidarum' },
  short: {
    ar: 'قيء حمل لا يقف عند حدّ الغثيان الصباحي: يمنع الطعام والشراب حتى ينقص الوزن ويجفّ الجسم وتضطرب أملاح الدم، فيحتاج علاجاً لا صبراً.',
    en: 'Pregnancy vomiting that goes beyond morning sickness: it prevents food and drink until weight falls, the body dries out and blood salts are disturbed, so it needs treatment rather than patience.'
  },
  organs: ['pregnancy', 'stomach', 'blood'],
  aliases: [],
  keywords: { ar: ['قيء الحمل الشديد', 'الوحام الشديد', 'جفاف في الحمل'], en: ['hyperemesis gravidarum', 'severe morning sickness', 'pregnancy vomiting'] }
});

DISEASES.push({
  id: 'molar-pregnancy', group: 'repro', tier: 'rare', emergency: false,
  name: { ar: 'الحمل العنقودي (الرحى العدارية)', en: 'Molar pregnancy (hydatidiform mole)' },
  short: {
    ar: 'حمل يختلّ فيه الإخصاب فتنمو المشيمة حويصلات تشبه عنقود العنب بدل أن ينمو جنين سليم، ويحتاج متابعة هرمونية طويلة بعد إفراغ الرحم.',
    en: 'A pregnancy in which fertilisation goes wrong so the placenta grows as grape-like vesicles instead of a healthy fetus, and it needs long hormonal follow-up after the womb is emptied.'
  },
  organs: ['pregnancy', 'fertilization', 'female-reproductive', 'ovum'],
  aliases: ['دخول أكثر من حيوان منوي'],
  keywords: { ar: ['الحمل العنقودي', 'الرحى العدارية', 'حمل غير طبيعي'], en: ['molar pregnancy', 'hydatidiform mole', 'gestational trophoblastic disease'] }
});

DISEASES.push({
  id: 'obstetric-cholestasis', group: 'repro', tier: 'rare', emergency: false,
  name: { ar: 'ركود الصفراء في الحمل (حكّة الحمل)', en: 'Intrahepatic cholestasis of pregnancy' },
  short: {
    ar: 'تباطؤ جريان الصفراء في كبد الحامل بأواخر الحمل، فتشتدّ الحكّة في الكفّين والقدمين ليلاً بلا طفح — وهي حكّة تعني خطراً على الجنين لا على الأم وحدها.',
    en: 'Bile flow slows in the liver of a pregnant woman in late pregnancy, so itching intensifies at night on the palms and soles without a rash; an itch that means risk to the baby, not to the mother alone.'
  },
  organs: ['pregnancy', 'liver', 'gallbladder', 'skin'],
  aliases: [],
  keywords: { ar: ['حكة اليدين في الحمل', 'ركود صفراوي حملي', 'حكة ليلية للحامل'], en: ['obstetric cholestasis', 'ICP', 'itching in pregnancy'] }
});

DISEASES.push({
  id: 'preterm-labor', group: 'repro', tier: 'common', emergency: true,
  name: { ar: 'المخاض المبكّر وتمزّق الأغشية الباكر', en: 'Preterm labour and premature rupture of membranes' },
  short: {
    ar: 'بدء الطلق أو نزول ماء الجنين قبل تمام سبعة وثلاثين أسبوعاً، وساعات الاستجابة الأولى هي التي تحسم فرص رئة الطفل وسلامته.',
    en: 'Contractions starting, or the waters breaking, before thirty-seven completed weeks; the first hours of response are what decide the chances for the baby lungs and safety.'
  },
  organs: ['pregnancy', 'female-reproductive', 'embryo'],
  aliases: [],
  keywords: { ar: ['طلق مبكر', 'نزول ماء الجنين', 'انفجار كيس الماء مبكرا'], en: ['preterm labour', 'PPROM', 'waters breaking early'] }
});

DISEASES.push({
  id: 'fgr', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'تأخّر نموّ الجنين داخل الرحم', en: 'Fetal growth restriction' },
  short: {
    ar: 'جنين لا يبلغ حجمه ما ينبغي لعمره لأن المشيمة لا توصل إليه ما يكفي من غذاء وأكسجين، ويُكتشف بالقياس والمتابعة لا بإحساس الأم.',
    en: 'A fetus that does not reach the size expected for its age because the placenta is not delivering enough food and oxygen; it is found by measurement and follow-up, not by what the mother feels.'
  },
  organs: ['pregnancy', 'embryo', 'fetal-circulation', 'circulation'],
  aliases: ['تأخر النمو داخل الرحم', 'قصور المشيمة'],
  keywords: { ar: ['الجنين صغير', 'قصور المشيمة', 'تأخر نمو الجنين'], en: ['fetal growth restriction', 'IUGR', 'placental insufficiency', 'small for dates'] }
});

DISEASES.push({
  id: 'rh-isoimmunization', group: 'repro', tier: 'rare', emergency: false,
  name: { ar: 'عدم توافق العامل الريصي (حساسية الحمل)', en: 'Rhesus isoimmunisation' },
  short: {
    ar: 'أمّ سالبة العامل الريصي يحمل جنينها العامل الموجب، فتصنع مناعتها أجساماً تهاجم كريات الجنين في الأحمال التالية — ويمنعها كلها حقن وقائية في مواعيدها.',
    en: 'A rhesus-negative mother carrying a rhesus-positive baby makes antibodies that attack the fetal red cells in later pregnancies; a preventive injection given on time prevents all of it.'
  },
  organs: ['pregnancy', 'blood', 'immunity', 'embryo'],
  aliases: [],
  keywords: { ar: ['فصيلة دم سالبة في الحمل', 'حقنة الرست', 'تحسس العامل الريصي'], en: ['rhesus disease', 'Rh isoimmunisation', 'anti-D', 'haemolytic disease of the newborn'] }
});

DISEASES.push({
  id: 'postpartum-endometritis', group: 'repro', tier: 'common', emergency: true,
  name: { ar: 'عدوى ما بعد الولادة (حمّى النفاس)', en: 'Postpartum infection (puerperal sepsis)' },
  short: {
    ar: 'عدوى تصيب بطانة الرحم أو جرح الولادة في أيام النفاس، فتظهر حمّى مع ألم أسفل البطن ونزف كريه الرائحة، وهي من أسرع ما يتدهور إن أُهمل.',
    en: 'An infection of the womb lining or of the birth wound in the days after delivery, giving fever with lower abdominal pain and foul-smelling bleeding; among the fastest conditions to deteriorate if neglected.'
  },
  organs: ['female-reproductive', 'pregnancy', 'blood'],
  aliases: [],
  keywords: { ar: ['حمى بعد الولادة', 'التهاب الرحم بعد الولادة', 'نفاس'], en: ['puerperal sepsis', 'postpartum endometritis', 'fever after delivery'] }
});

/* ============================================================
   موسوعة الأمراض — فهرس المسالك البولية والتناسل والحمل
   dx/index-uro2.js   (الموجة الثانية)
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-uro2.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الكلية والمجرى البولي ---------------- */

DISEASES.push({
  id: 'pyelonephritis', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'التهاب الحويضة والكلية', en: 'Pyelonephritis (kidney infection)' },
  short: {
    ar: 'عدوى صعدت من المثانة حتى بلغت نسيج الكلية نفسه، فصار الأمر حمّى ورجفة وألماً في الخاصرة لا مجرد حرقة بول.',
    en: 'An infection that has climbed from the bladder into the kidney tissue itself, so it becomes fever, shaking chills and flank pain rather than mere burning.'
  },
  organs: ['kidneys', 'nephron', 'ureter', 'bladder'],
  aliases: ['التهاب الكلية'],
  keywords: { ar: ['التهاب الكلى', 'حمى مع حرقة بول', 'ألم الخاصرة'], en: ['pyelonephritis', 'kidney infection', 'upper UTI'] }
});

DISEASES.push({
  id: 'aki', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'القصور الكلوي الحادّ', en: 'Acute kidney injury' },
  short: {
    ar: 'تراجع مفاجئ في عمل الكليتين خلال ساعات أو أيام، غالباً لأن الدم قلّ عنهما أو لأن دواءً أو انسداداً آذاهما — وأكثره يرجع إن عُولج سببه بسرعة.',
    en: 'A sudden drop in kidney function over hours or days, usually because blood flow fell, or a medicine or a blockage harmed them; most cases reverse if the cause is treated quickly.'
  },
  organs: ['kidneys', 'nephron', 'blood', 'circulation'],
  aliases: [],
  keywords: { ar: ['الفشل الكلوي الحاد', 'قلة البول المفاجئة', 'ارتفاع الكرياتينين'], en: ['acute kidney injury', 'AKI', 'acute renal failure'] }
});

DISEASES.push({
  id: 'pkd', group: 'urinary', tier: 'rare', emergency: false,
  name: { ar: 'الكلية المتعدّدة الكيسات', en: 'Polycystic kidney disease' },
  short: {
    ar: 'مرض وراثي تنشأ فيه كيسات مملوءة بسائل داخل الكليتين وتزداد عدداً وحجماً مع السنين حتى تزحم النسيج العامل وتضغطه.',
    en: 'An inherited disease in which fluid-filled cysts form inside both kidneys and grow in number and size over the years until they crowd out the working tissue.'
  },
  organs: ['kidneys', 'nephron', 'liver', 'dna'],
  aliases: ['تكيّس الكلى'],
  keywords: { ar: ['تكيس الكلى', 'كيسات الكلية الوراثية'], en: ['polycystic kidney disease', 'PKD', 'kidney cysts'] }
});

DISEASES.push({
  id: 'glomerular-disease', group: 'urinary', tier: 'rare', emergency: false,
  name: { ar: 'أمراض كبيبات الكلى: المتلازمة الكلائية والتهاب الكبيبات', en: 'Glomerular disease: nephrotic syndrome and glomerulonephritis' },
  short: {
    ar: 'خلل في المصفاة الدقيقة داخل الكلية: إمّا أن تتسرّب منها البروتينات فيتورّم الجسم، وإمّا أن تلتهب فيظهر الدم في البول ويرتفع الضغط.',
    en: 'A fault in the fine filter inside the kidney: either protein leaks through it and the body swells, or it becomes inflamed so blood appears in the urine and blood pressure rises.'
  },
  organs: ['nephron', 'kidneys', 'immunity', 'blood'],
  aliases: ['التهاب كبيبات الكلى', 'المتلازمة الكلائية'],
  keywords: { ar: ['بروتين في البول', 'تورم الوجه عند الأطفال', 'دم في البول'], en: ['nephrotic syndrome', 'glomerulonephritis', 'proteinuria', 'haematuria'] }
});

DISEASES.push({
  id: 'hydronephrosis', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'استسقاء الكلية وانسداد المجرى البولي', en: 'Hydronephrosis and urinary tract obstruction' },
  short: {
    ar: 'شيء يسدّ طريق البول بعد الكلية فيرتدّ الضغط إليها ويوسّعها، وقد يمضي هذا صامتاً حتى تضيع وظيفتها بلا ألم يُنذر.',
    en: 'Something blocks the path of urine below the kidney, so pressure backs up and stretches it; this can pass silently until function is lost with no warning pain.'
  },
  organs: ['ureter', 'kidneys', 'bladder', 'prostate'],
  aliases: ['استسقاء الكلية', 'انسداد الوصل الحويضي الحالبي', 'تضيّق الحالب'],
  keywords: { ar: ['توسع الكلية', 'انسداد الحالب', 'ارتداد البول'], en: ['hydronephrosis', 'ureteric obstruction', 'PUJ obstruction'] }
});

/* ---------------- التناسل الذكري ---------------- */

DISEASES.push({
  id: 'prostatitis', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'التهاب البروستاتا', en: 'Prostatitis' },
  short: {
    ar: 'ألم عميق بين الشرج والصفن مع اضطراب في التبوّل، يأتي حادّاً بحمّى عند قلّة، ويطول شهوراً بلا جرثومة عند أكثر المصابين.',
    en: 'Deep pain between the anus and the scrotum with disturbed urination; it comes on acutely with fever in a minority, and drags on for months without any germ in most sufferers.'
  },
  organs: ['prostate', 'male-reproductive', 'urethra', 'bladder', 'pelvis'],
  aliases: ['التهاب البروستاتا'],
  keywords: { ar: ['ألم الحوض المزمن عند الرجال', 'حرقة وألم عند القذف'], en: ['prostatitis', 'chronic pelvic pain syndrome', 'CPPS'] }
});

DISEASES.push({
  id: 'testicular-torsion', group: 'repro', tier: 'common', emergency: true,
  name: { ar: 'التواء الخصية', en: 'Testicular torsion' },
  short: {
    ar: 'الخصية تلتفّ حول حبلها المنوي فينقطع دمها فجأة، ونافذة إنقاذها ست ساعات — كل ألم خصية مفاجئ يُعامَل التواءً حتى يُنفى.',
    en: 'The testis twists on its cord and its blood supply is cut off at once; the window to save it is six hours, and every sudden testicular pain is treated as torsion until proven otherwise.'
  },
  organs: ['testis', 'male-reproductive', 'vessel-types'],
  aliases: ['التواء الخصية'],
  keywords: { ar: ['ألم مفاجئ في الخصية', 'انفتال الخصية', 'خصية مرتفعة'], en: ['testicular torsion', 'acute scrotum', 'twisted testicle'] }
});

DISEASES.push({
  id: 'scrotal-swelling', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'دوالي الخصية والقيلة المائية', en: 'Varicocele and hydrocele' },
  short: {
    ar: 'تورّمان شائعان في كيس الصفن لا ألم شديد فيهما: أوردة متمدّدة تُحسّ ككيس ديدان، أو سائل يتجمّع حول الخصية فيكبر الكيس بلا وجع.',
    en: 'Two common scrotal swellings without severe pain: dilated veins that feel like a bag of worms, or fluid gathering around the testis so the sac enlarges painlessly.'
  },
  organs: ['testis', 'male-reproductive', 'vessel-types'],
  aliases: ['دوالي الخصية', 'القيلة المائية'],
  keywords: { ar: ['كيس ديدان', 'تجمع سائل حول الخصية', 'تورم الصفن'], en: ['varicocele', 'hydrocele', 'scrotal swelling'] }
});

DISEASES.push({
  id: 'epididymo-orchitis', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'التهاب البربخ والخصية', en: 'Epididymo-orchitis' },
  short: {
    ar: 'عدوى تصيب البربخ خلف الخصية فيتورّم ويؤلم، ويتدرّج ألمه على ساعات وأيام لا في لحظة — وهذا ما يفرّقه عن الالتواء.',
    en: 'An infection of the epididymis behind the testis, which swells and hurts; the pain builds over hours and days rather than in a single moment, which is what separates it from torsion.'
  },
  organs: ['testis', 'male-reproductive', 'urethra', 'prostate'],
  aliases: ['التهاب البربخ'],
  keywords: { ar: ['ألم الخصية مع حرقة بول', 'تورم البربخ'], en: ['epididymitis', 'orchitis', 'epididymo-orchitis'] }
});

/* ---------------- التناسل الأنثوي والطمث ---------------- */

DISEASES.push({
  id: 'pid', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'التهاب الحوض', en: 'Pelvic inflammatory disease' },
  short: {
    ar: 'عدوى صعدت من عنق الرحم إلى الرحم والبوقين، وأخطر ما فيها أنها قد تكون خفيفة الأعراض بينما تترك ندبات تسدّ البوق وتُعقم.',
    en: 'An infection that has climbed from the cervix into the womb and tubes; the danger is that it may be mild in its symptoms while leaving scars that block the tube and cause infertility.'
  },
  organs: ['female-reproductive', 'ovary', 'fertilization', 'pelvis'],
  aliases: ['التهاب الحوض'],
  keywords: { ar: ['التهاب الرحم والبوقين', 'ألم أسفل البطن مع إفرازات'], en: ['pelvic inflammatory disease', 'PID', 'salpingitis'] }
});

DISEASES.push({
  id: 'ovarian-cyst', group: 'repro', tier: 'common', emergency: true,
  name: { ar: 'كيسة المبيض وانفتال المبيض', en: 'Ovarian cyst and ovarian torsion' },
  short: {
    ar: 'أكثر كيسات المبيض وظيفية تزول وحدها بلا علاج، لكن الكبيرة منها قد تنفجر أو تلوي المبيض على شريانه فتصير حالة جراحية بالساعات.',
    en: 'Most ovarian cysts are functional and disappear on their own, but a large one may rupture or twist the ovary on its artery, which becomes a surgical emergency within hours.'
  },
  organs: ['ovary', 'female-reproductive', 'ovum', 'pelvis'],
  aliases: ['كيسة المبيض', 'انفتال المبيض'],
  keywords: { ar: ['كيس على المبيض', 'التواء المبيض', 'ألم مفاجئ في جانب البطن'], en: ['ovarian cyst', 'ovarian torsion', 'ruptured cyst'] }
});

DISEASES.push({
  id: 'dysmenorrhea', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'عسر الطمث (آلام الدورة)', en: 'Dysmenorrhoea (period pain)' },
  short: {
    ar: 'مغص متشنّج أسفل البطن مع نزول الدورة، طبيعي أن يوجد بدرجة محتملة، ولكن ألماً يوقف الدراسة والعمل ليس شيئاً يُحتمل بالصبر.',
    en: 'Cramping lower abdominal pain with the period; a bearable degree is normal, but pain that stops school and work is not something to be endured with patience.'
  },
  organs: ['female-reproductive', 'ovary', 'pelvis'],
  aliases: [],
  keywords: { ar: ['ألم الدورة الشهرية', 'مغص الحيض', 'تقلصات الرحم'], en: ['dysmenorrhoea', 'period pain', 'menstrual cramps'] }
});

DISEASES.push({
  id: 'heavy-periods', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'غزارة الطمث والنزف الرحمي غير الطبيعي', en: 'Heavy periods and abnormal uterine bleeding' },
  short: {
    ar: 'دورة تنزف كثيراً أو طويلاً أو في غير موعدها، تسرق الحديد من الجسم بهدوء حتى يصير الإرهاق والشحوب هما الشكوى لا الدم نفسه.',
    en: 'A period that bleeds too much, too long, or out of its time, quietly stealing iron from the body until exhaustion and pallor become the complaint rather than the bleeding itself.'
  },
  organs: ['female-reproductive', 'ovary', 'blood', 'clotting'],
  aliases: [],
  keywords: { ar: ['نزيف الدورة الغزير', 'دورة طويلة', 'نزف بين الدورات'], en: ['menorrhagia', 'heavy menstrual bleeding', 'abnormal uterine bleeding'] }
});

DISEASES.push({
  id: 'menopause', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'انقطاع الطمث وأعراضه', en: 'Menopause and its symptoms' },
  short: {
    ar: 'توقّف الدورة نهائياً بعد نفاد مخزون البويضات، تسبقه سنوات متقلّبة من الهبّات والأرق وتغيّر المزاج قبل أن يستقرّ الجسم على وضعه الجديد.',
    en: 'The permanent end of periods once the store of eggs runs out, preceded by unsettled years of hot flushes, insomnia and mood change before the body settles into its new state.'
  },
  organs: ['ovary', 'female-reproductive', 'ovum', 'skeleton', 'pituitary'],
  aliases: ['قصور المبيض المبكر'],
  keywords: { ar: ['سن اليأس', 'الهبات الساخنة', 'ما قبل انقطاع الطمث'], en: ['menopause', 'perimenopause', 'hot flushes', 'premature ovarian insufficiency'] }
});

DISEASES.push({
  id: 'vaginitis', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'التهاب المهبل الفطري والبكتيري', en: 'Vaginal candidiasis and bacterial vaginosis' },
  short: {
    ar: 'اختلال في توازن الوسط المهبلي فتغلب الفطريات أو تغلب بكتيريا لاهوائية، والفرق بينهما في الإفراز والرائحة والحكّة لا في شدّة القلق.',
    en: 'The vaginal balance is disturbed so either yeast or anaerobic bacteria take over; the difference between them lies in the discharge, the smell and the itch, not in the level of worry.'
  },
  organs: ['female-reproductive', 'bladder', 'immunity'],
  aliases: [],
  keywords: { ar: ['فطريات مهبلية', 'إفرازات ورائحة', 'حكة مهبلية'], en: ['thrush', 'candidiasis', 'bacterial vaginosis', 'vaginal discharge'] }
});

/* ---------------- الحمل والولادة والرضاعة ---------------- */

DISEASES.push({
  id: 'ectopic-pregnancy', group: 'repro', tier: 'common', emergency: true,
  name: { ar: 'الحمل خارج الرحم', en: 'Ectopic pregnancy' },
  short: {
    ar: 'بويضة ملقّحة تعلّقت في البوق بدل الرحم، فإن كبرت مزّقته ونزفت داخل البطن — ألم بطن أو كتف مع تأخّر دورة يعني طوارئ الآن.',
    en: 'A fertilised egg has lodged in the tube instead of the womb; as it grows it tears the tube and bleeds into the abdomen. Abdominal or shoulder pain with a late period means the emergency room now.'
  },
  organs: ['fertilization', 'female-reproductive', 'pregnancy', 'ovary'],
  aliases: ['الحمل خارج الرحم'],
  keywords: { ar: ['حمل بوقي', 'ألم كتف مع تأخر الدورة', 'نزف مع ألم بطن'], en: ['ectopic pregnancy', 'tubal pregnancy', 'shoulder tip pain'] }
});

DISEASES.push({
  id: 'miscarriage', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'الإجهاض', en: 'Miscarriage' },
  short: {
    ar: 'انتهاء الحمل من تلقائه قبل أن يستطيع الجنين الحياة خارج الرحم، وأكثره في الأشهر الأولى وسببه خلل صبغي لا ذنب فيه لأحد.',
    en: 'A pregnancy that ends on its own before the baby could live outside the womb; most occur in the first months and are caused by a chromosomal fault that no one is to blame for.'
  },
  organs: ['embryo', 'pregnancy', 'female-reproductive', 'meiosis', 'dna'],
  aliases: ['الإجهاض المبكر', 'الإجهاض المبكّر من خلل الصبغيات'],
  keywords: { ar: ['سقوط الحمل', 'نزف في بداية الحمل', 'الإجهاض المتكرر'], en: ['miscarriage', 'early pregnancy loss', 'recurrent miscarriage'] }
});

DISEASES.push({
  id: 'postpartum-hemorrhage', group: 'repro', tier: 'common', emergency: true,
  name: { ar: 'نزف ما بعد الولادة', en: 'Postpartum haemorrhage' },
  short: {
    ar: 'نزف غزير بعد الولادة، أكثره لأن الرحم لم ينقبض ليغلق أوعيته، وهو من أسرع ما يقتل الأمّهات لأن الدم يخرج بغزارة لا يشعر بها أحد.',
    en: 'Heavy bleeding after delivery, most often because the womb has not contracted to close its vessels; it is among the fastest killers of mothers because the blood pours out unnoticed.'
  },
  organs: ['pregnancy', 'female-reproductive', 'blood', 'clotting', 'circulation'],
  aliases: [],
  keywords: { ar: ['نزيف بعد الولادة', 'ارتخاء الرحم', 'نزف النفاس'], en: ['postpartum haemorrhage', 'PPH', 'uterine atony'] }
});

DISEASES.push({
  id: 'placenta-problems', group: 'repro', tier: 'rare', emergency: true,
  name: { ar: 'نزف أواخر الحمل: المشيمة المنزاحة وانفصالها', en: 'Late pregnancy bleeding: placenta praevia and abruption' },
  short: {
    ar: 'مشكلتان في المشيمة تُنذران بنزف خطير: واحدة تغطّي فم الرحم فتنزف بلا ألم، وأخرى تنفصل عن جداره فتنزف مع ألم شديد وتصلّب البطن.',
    en: 'Two placental problems that threaten dangerous bleeding: one covers the mouth of the womb and bleeds painlessly, the other peels off its wall and bleeds with severe pain and a rigid abdomen.'
  },
  organs: ['pregnancy', 'embryo', 'female-reproductive', 'blood'],
  aliases: ['المشيمة المنزاحة', 'انفصال المشيمة المبكر'],
  keywords: { ar: ['نزف في الشهور الأخيرة', 'المشيمة النازلة', 'انفصال المشيمة'], en: ['placenta praevia', 'placental abruption', 'antepartum haemorrhage'] }
});

DISEASES.push({
  id: 'mastitis', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'احتقان الثدي والتهابه أثناء الرضاعة', en: 'Breast engorgement and mastitis during breastfeeding' },
  short: {
    ar: 'حليب محتبس في جزء من الثدي يشدّه ويؤلمه، وإن بقي محتبساً التهب الموضع واحمرّ وجاءت الحمّى والرجفة كأنها إنفلونزا مفاجئة.',
    en: 'Milk trapped in part of the breast stretches and hurts it; if it stays trapped the area becomes inflamed and red, with fever and chills that feel like sudden influenza.'
  },
  organs: ['breast', 'lymphatic', 'immunity'],
  aliases: ['التهاب الثدي'],
  keywords: { ar: ['التهاب الثدي المرضعة', 'انسداد قناة الحليب', 'خراج الثدي'], en: ['mastitis', 'breast engorgement', 'blocked milk duct'] }
});

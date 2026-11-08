/* ============================================================
   موسوعة الأمراض — diseases.js
   ------------------------------------------------------------
   كل مرض بطاقة: الاسم · نبذة · الأعراض · السبب · التشخيص ·
   العلاج · متى تراجع الطبيب · وروابط لأعضاء التطبيق.
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

var DISEASES = [
  {
    id: 'mi', tier: 'common', group: 'heart', emergency: true,
    name: { ar: 'الجلطة القلبية (احتشاء عضلة القلب)', en: 'Heart attack (myocardial infarction)' },
    organs: ['coronary', 'heart', 'clotting', 'blood', 'vessel-types'],
    /* أسماء هذا المرض كما وردت داخل بطاقات الأعضاء — تُربط بها تلقائياً */
    aliases: ['الجلطة القلبية', 'جلطة القلب'],
    short: {
      ar: 'انسداد مفاجئ في أحد الشرايين التاجية يقطع الدم عن جزء من عضلة القلب، فيبدأ ذلك الجزء بالموت خلال دقائق.',
      en: 'A sudden blockage of a coronary artery cuts the blood supply to part of the heart muscle, and that part begins to die within minutes.'
    },
    symptoms: {
      ar: 'يبدأ غالباً بثقل أو ضغط أو عصر وسط الصدر يستمر أكثر من بضع دقائق ولا يزول بالراحة، وقد يمتد إلى الذراع اليسرى أو الكتفين أو الفك أو أعلى الظهر. يصحبه ضيق نفس وعرق بارد وغثيان ودوخة وإحساس غامض بأن شيئاً خطيراً يحدث. والألم قد يكون خفيفاً فيظنه صاحبه حموضة أو عسر هضم، وهذا من أخطر ما في الأمر. وعند النساء وكبار السن ومرضى السكري قد لا يكون هناك ألم صدر أصلاً — بل إرهاق مفاجئ غير مفهوم أو ضيق نفس أو ألم في أعلى البطن أو تعرّق بلا سبب، فيتأخرون عن الإسعاف ساعات ثمينة. والقاعدة أن أي ضيق في الصدر جديد ومستمر يُعامل معاملة القلب حتى يُثبت العكس.',
      en: 'Pressure or heavy pain in the middle of the chest lasting more than a few minutes, sometimes spreading to the left arm, jaw or back, with breathlessness, cold sweat, nausea and dizziness. In women, older people and diabetics there may be no chest pain at all, only sudden exhaustion, breathlessness or upper abdominal pain, which is why many arrive late.'
    },
    cause: {
      ar: 'القصة تبدأ قبل النوبة بسنوات: لويحة عصيدية من الدهون والكوليسترول تتراكم في جدار الشريان التاجي وتضيّقه ببطء بلا أعراض. ثم تتشقّق هذه اللويحة فجأة، فيقرأ الجسم الشقّ كجرح ويرسل إليه الصفائح الدموية، فتتكوّن جلطة تسدّ ما بقي من المجرى في دقائق. ولهذا تصيب النوبة أحياناً شرياناً لم يكن الأضيق — الخطر في هشاشة اللويحة لا في حجمها وحده. وعوامل الخطر معروفة ويمكن تعديل أكثرها: التدخين وارتفاع ضغط الدم والسكري وارتفاع الكوليسترول والسمنة وقلة الحركة والتوتر المزمن، ويبقى منها ما لا يُعدَّل كالسنّ والتاريخ العائلي.',
      en: 'An atherosclerotic plaque of fat and cholesterol builds up in the wall of a coronary artery over years, then cracks; platelets stick to it and a clot forms that seals the artery shut. Risk factors: smoking, high blood pressure, diabetes, high cholesterol, obesity, inactivity and family history.'
    },
    diagnosis: {
      ar: 'أول ما يُعمل تخطيط القلب الكهربائي في أول دقائق من الوصول، لأنه يفرّق بين نوعَي الاحتشاء ويحدّد هل يحتاج المريض فتح شريان فوراً أم لا — وهذا وحده يغيّر مسار الليلة كلها. ثم يُسحب دم لقياس التروبونين، وهو بروتين لا يوجد في الدم عادةً ولا يتسرّب إليه إلا حين تتلف خلايا القلب، فارتفاعه دليل مباشر على أن عضلة تضرّرت فعلاً، ويُعاد قياسه بعد ساعات لأنه يرتفع تدريجياً. ويُكمَل بتصوير القلب بالموجات الصوتية ليُرى أي جدار ضعف انقباضه، ثم بالقسطرة التصويرية التي تُظهر الشرايين بالصبغة فيُعرف موضع الانسداد وشدّته بالضبط قبل علاجه في الجلسة نفسها.',
      en: 'An ECG within minutes of arrival, showing a pattern that identifies the type of infarction. Then a blood test for troponin, an enzyme that leaks from damaged heart cells and rises over hours. This is completed by echocardiography to judge how well the muscle contracts, and by coronary angiography, which shows exactly where and how tight the blockage is.'
    },
    treatment: {
      ar: 'حالة يحكمها الزمن قبل كل شيء: العضلة المحرومة من الدم تموت تدريجياً، وكلما فُتح الشريان أبكر نجا منها أكثر — ولهذا يقال في الطوارئ «الوقت عضلة». والعلاج الأمثل قسطرة علاجية تدخل إلى الشريان المسدود وتفتحه وتترك فيه دعامة تُبقيه مفتوحاً، وإن لم تتوفر بسرعة كافية يُلجأ إلى دواء يذيب الجلطة ريثما يُنقل المريض. وبعد تجاوز الخطر يبدأ علاج دوائي طويل يحدّده الطبيب ويشمل فئات تمنع تكدّس الصفائح وتخفض الكوليسترول وتريح القلب وتخفض الضغط، ولا يُوقفه المريض من تلقاء نفسه. ويكمله ما لا يقلّ عنه أهمية: إقلاع تامّ عن التدخين، وبرنامج تأهيل قلبي بتمرين متدرّج تحت إشراف، وضبط السكري والضغط والوزن.',
      en: 'A time-critical emergency: the sooner the artery is opened the more muscle survives, hence the saying "time is muscle". Best is a catheter procedure that opens the artery and leaves a stent; if that is not quickly available, clot-dissolving drugs are given. Long-term medication is then set by the doctor: antiplatelets, cholesterol-lowering drugs and medicines that ease the heart, together with stopping smoking and a graded cardiac rehabilitation programme.'
    },
    seeDoctor: {
      ar: 'اتصل بالإسعاف فوراً — لا تنتظر ولا تقُد سيارتك بنفسك ولا تنتظر أن يخفّ — إذا استمر ألم أو ضغط في الصدر أكثر من خمس دقائق، أو صحبه ضيق نفس أو عرق بارد أو غثيان أو دوخة، أو أيقظك من النوم. والانتظار هو أكثر ما يقتل في هذه الحالة: كثيرون يجلسون ساعات يقنعون أنفسهم أنها حموضة. ولا تشترط ألماً شديداً ولا ألماً في الذراع، فكثير من النوبات بلا هذين. وراجع الطبيب في موعد قريب — لا طوارئ — إذا جاءك ضيق صدر أو نفس مع المجهود ويزول بالراحة وتكرّر، فهذي ذبحة تستحقّ تقييماً قبل أن تصير احتشاءً.',
      en: 'Call an ambulance at once — do not wait and do not drive yourself — if chest pain or pressure lasts more than five minutes, or comes with breathlessness, cold sweat or nausea, or if chest pain keeps returning with exertion and easing with rest.'
    }
  },
  {
    id: 'kidney-stones', tier: 'common', group: 'urinary',
    name: { ar: 'حصى الكلى والمغص الكلوي', en: 'Kidney stones and renal colic' },
    organs: ['ureter', 'kidneys', 'nephron', 'bladder'],
    aliases: ['حصى الكلى', 'حصى الحالب والمغص الكلوي'],
    short: {
      ar: 'بلّورات تترسّب في البول فتتجمّع حصاة صلبة داخل الكلية، ولا يبدأ الألم الشديد إلا حين تتحرّك وتعلق في الحالب.',
      en: 'Crystals settle out of the urine and gather into a hard stone inside the kidney; the severe pain begins only when it moves and lodges in the ureter.'
    },
    symptoms: {
      ar: 'يبدأ الألم مفاجئاً حادّاً في الخاصرة أو أسفل الظهر، ويأتي موجات ترتفع وتخفّ ثم ترتفع، وينتشر نازلاً نحو الأربية والخصية أو الشفر. وأوضح ما يميّزه أنه لا يهدأ بتغيير الوضعية: صاحبه يتقلّب ويمشي ويجلس ولا يستقرّ على وضع — وهذا عكس ألم العضلات والظهر الذي يخفّ بالسكون. يصحبه غثيان وقيء شديدان أحياناً حتى يظنّها الناس مشكلة في المعدة، وقد يظهر دم في البول عيناً أو في التحليل. وكلما نزلت الحصاة واقتربت من المثانة تحوّل الإحساس إلى حرقة وإلحاح متكرّر للتبوّل بكميات قليلة. والحصاة الساكنة في الكلية قد لا تؤلم إطلاقاً وتُكتشف مصادفةً.',
      en: 'Sudden sharp pain in the flank or lower back that comes in waves and radiates down toward the groin, and does not settle with a change of position — which is what separates it from muscular pain, since the sufferer cannot lie still. It comes with nausea and vomiting, blood may appear in the urine, and as the stone nears the bladder, burning and urgency increase.'
    },
    cause: {
      ar: 'الأصل أن البول محلول تذوب فيه أملاح، وحين يقلّ الماء يتركّز المحلول فتترسّب الأملاح وتتلاصق بلّوراتها حتى تصير حصاة. وأشيع أنواعها أكسالات الكالسيوم، ثم حصى حمض البول وحصى العدوى. ويزيدها كل ما يركّز البول: قلة الشرب، والحرّ والتعرّق الشديد وهو عامل كبير في منطقتنا، والإكثار من الملح الذي يدفع الكالسيوم إلى البول، والإفراط في البروتين الحيواني. وتقف خلف بعضها أمراض بعينها كفرط نشاط جارات الدرقية والنقرس والتهابات المسالك المتكرّرة وبعض أمراض الأمعاء. ويبقى الاستعداد العائلي واضحاً: من أصيب مرة فاحتمال تكرارها عنده مرتفع ما لم يغيّر عاداته.',
      en: 'Drinking too little water concentrates the urine so its salts settle out; the commonest stones are calcium oxalate. Heat and heavy sweating, a diet high in salt and animal protein, and conditions such as overactive parathyroid glands, gout and repeated urinary infections all increase them, as do family predisposition and certain medicines.'
    },
    diagnosis: {
      ar: 'الأشعة المقطعية بلا صبغة هي المعيار في الطوارئ، لأنها تُظهر الحصاة وحجمها وموضعها بدقّة وتكشف إن كانت تسدّ المجرى وتُرجع الضغط على الكلية — وهذا ما يقرّر هل تُترك لتخرج وحدها أم تحتاج تدخّلاً. وتُستعمل الموجات الصوتية أولاً عند الحوامل والأطفال تجنّباً للإشعاع، وهي جيدة في كشف تضخّم الكلية وإن فاتتها حصى صغيرة. ويُطلب تحليل بول يبحث عن الدم والبلّورات وعلامات العدوى، وتحاليل دم لوظائف الكلى والكالسيوم. وأنفع فحص يهمله الناس هو تحليل تركيب الحصاة بعد خروجها، لأن نوعها هو ما يحدّد طريقة الوقاية بالضبط — فوقاية حصى الكالسيوم غير وقاية حصى حمض البول.',
      en: 'A non-contrast CT scan is the standard, showing the stone\'s size and exact position and revealing any obstruction. Ultrasound is used first in pregnancy and in children to avoid radiation. A urine test looks for blood, crystals and signs of infection, with blood tests for kidney function and calcium. Once the stone passes, analysing what it is made of is worthwhile, because its type decides how recurrence is prevented.'
    },
    treatment: {
      ar: 'أغلب الحصى الأصغر من خمسة مليمترات تخرج وحدها خلال أيام أو أسابيع، فيكون العلاج شرب ماء كافٍ ومسكّناً يصفه الطبيب ودواءً يرخّي عضلة الحالب فيوسّعه ويسهّل مرورها، مع تصفية البول لالتقاط الحصاة وتحليلها. أما الأكبر أو التي تسدّ المجرى أو ترافقها عدوى فتحتاج تدخّلاً: تفتيتاً بالموجات التصادمية من خارج الجسم، أو منظاراً يدخل عبر المجرى البولي فيفتّتها ويسحبها، أو دعامة تُبقي المجرى مفتوحاً ريثما يُعالَج السبب. والوقاية هي العلاج الحقيقي وليست نصيحة عابرة: ماء كافٍ يبقي البول فاتح اللون طوال اليوم لا في الصباح وحده، وتقليل الملح، وتعديل الغذاء بحسب نوع الحصاة الذي كشفه التحليل.',
      en: 'Most stones smaller than five millimetres pass on their own with plenty of water, a painkiller prescribed by the doctor, and a medicine that relaxes the ureter to ease their passage. Larger or obstructing stones are treated by shockwave lithotripsy from outside the body or by a scope passed up the urinary tract. Prevention is the real treatment: enough water to keep the urine pale all day, less salt, and a diet adjusted to the type of stone.'
    },
    seeDoctor: {
      ar: 'راجع الطوارئ فوراً — لا تنتظر الصباح — إذا صاحب الألم حمّى أو رعشة، فالعدوى فوق انسداد حالة تهدّد الحياة وتحتاج تصريفاً عاجلاً لا مضاداً حيوياً وحده. وكذلك إذا منعك القيء من شرب الماء، أو انقطع البول أو قلّ كثيراً، أو كان الألم لا يُحتمل ولا يخفّ بالمسكّن، أو كنت تعمل بكلية واحدة أو زُرعت لك كلية. أما الألم المحتمل بلا حمّى فيُتابَع مع طبيب المسالك في موعد قريب. ولا تعتمد على أن الحصاة خرجت لمجرّد أن الألم زال — قد يعني أنها استقرّت في موضع لم يعد يؤلم مع بقاء الانسداد، ولهذا يُعاد التصوير للتأكّد.',
      en: 'Go to emergency at once if the pain comes with fever or shivering — infection above a blockage is dangerous and needs rapid treatment — or if vomiting stops you drinking, or urine stops, or the pain is unbearable and does not ease with painkillers.'
    }
  }
];

/* ── وسم المصدر ──────────────────────────────────────────────
   كل ملف فهرس تحت dx/ يسبقه في index.html سطر يضبط __dxsrc،
   فيُختم كل مرض باسم ملف جسمه، وبه نعرف أيّ ملف نحمّل عند فتح البطاقة.
   ــ بلا هذا الوسم لا نعرف أين يسكن جسم المرض. ــ */
(function () {
  var _push = DISEASES.push;
  DISEASES.push = function (d) {
    if (d && typeof d === 'object' && !d.src && typeof window !== 'undefined' && window.__dxsrc) d.src = window.__dxsrc;
    return _push.apply(this, arguments);
  };
})();

var DISEASE_BY_ID = {};
for (var di = 0; di < DISEASES.length; di++) { DISEASE_BY_ID[DISEASES[di].id] = DISEASES[di]; }

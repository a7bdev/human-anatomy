/* ============================================================
   موسوعة الأدوية — أجسام بطاقات دفعة الجهاز العصبي الأولى
   rx/rx-neuro1.js   (يُحمَّل عند فتح البطاقة)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. الجرعة يحدّدها طبيب أو صيدلي.
   ============================================================ */

var RX_BODY = window.RX_BODY || {};

RX_BODY['phenytoin'] = {
  what: {
    ar: 'الفينيتوين دواء مضاد للاختلاج من فصيلة الهيدانتوينات، يُصرف بوصفة طبية وقد استُعمل عقوداً طويلة للسيطرة على أنواع من نوبات الصرع. يأتي كبسولات ممتدة المفعول وأقراصاً تُمضغ وشراباً معلّقاً، وله شكل وريدي يُعطى في المستشفى. وأخصّ ما يميّزه أن هامش أمانه ضيّق: زيادة صغيرة في الكمية قد ترفع مستواه في الدم ارتفاعاً غير متناسب لأن الكبد يشبع عن استقلابه، ولهذا يُتابَع مستواه بتحاليل الدم، ولا يُغيّر المريض شكله الدوائي ولا صانعه من تلقاء نفسه.',
    en: 'Phenytoin is an anticonvulsant of the hydantoin family, available on prescription and used for many decades to control certain types of epileptic seizure. It comes as extended-release capsules, chewable tablets and an oral suspension, and there is an intravenous form given in hospital. Its defining feature is a narrow safety margin: a small increase in amount can raise its blood level disproportionately because the liver becomes saturated in breaking it down, which is why the level is followed with blood tests and why a patient should not switch its formulation or manufacturer on their own.'
  },
  why: {
    ar: 'يُوصف للسيطرة على أنواع من النوبات الصرعية، ولعلاج ومنع النوبات التي قد تبدأ أثناء جراحة الدماغ أو الجهاز العصبي أو بعدها، ويُستعمل شكله الوريدي في المستشفى لإيقاف النوبة المتّصلة. وله كذلك استعمال في ضبط بعض اضطرابات نظم القلب. وهو دواء وقاية لا دواء إسعاف يُؤخذ عند الإحساس بقرب النوبة: فائدته كلّها من انتظام مستواه في الدم، ولهذا فإن نسيان المواعيد أو إيقافه فجأة أخطر على المريض من كثير من الآثار الجانبية التي يخافها.',
    en: 'It is prescribed to control certain types of seizure, and to treat and prevent seizures that may begin during or after surgery on the brain or nervous system; its intravenous form is used in hospital to stop a continuous seizure. It also has a use in controlling some disorders of heart rhythm. It is a preventive medicine, not a rescue one taken when a seizure feels near: all its benefit comes from a steady blood level, which is why missed doses or an abrupt stop are more dangerous to the patient than many of the side effects they fear.'
  },
  how: {
    ar: 'تنشأ النوبة الصرعية حين تُطلق مجموعة من خلايا الدماغ شحنات كهربائية متسارعة تنتشر إلى ما حولها. يعمل الفينيتوين على قنوات الصوديوم في غشاء الخلية العصبية: يُبقيها في حالة غير قابلة للفتح مدّة أطول بعد كل إطلاق، فيحدّ من قدرة الخلية على تكرار الشحن بسرعة عالية. والنتيجة أن الإطلاق الشاذّ لا يجد سبيلاً للانتشار، بينما يبقى النشاط الكهربائي الطبيعي على حاله تقريباً. ولهذا يمنع النوبة دون أن يُخمِد الدماغ كلّه كما تفعل المهدّئات.',
    en: 'A seizure begins when a group of brain cells fires rapid electrical discharges that spread to their neighbours. Phenytoin acts on the sodium channels in the nerve cell membrane: it holds them in a state that cannot reopen for longer after each firing, limiting the cell ability to fire repeatedly at high speed. The result is that the abnormal discharge finds no path to spread, while normal electrical activity is left largely untouched. That is why it prevents seizures without damping the whole brain the way sedatives do.'
  },
  effects: {
    ar: 'من آثاره الشائعة صعوبة النوم، وحركات لا إرادية في العين، وحركات جسدية غير طبيعية، واختلال التوازن، وتشوّش الذهن، وتلعثم الكلام، والصداع، وتغيّر الطعم، والإمساك. ومع الاستعمال الطويل يظهر أثران مميّزان له: تضخّم اللثة ونموّها فوق الأسنان، وزيادة شعر الجسم وخشونة ملامح الوجه. ولهذا صارت العناية بالفم وتنظيف الأسنان جزءاً من العلاج لا زينة. وينقص الدواء كثافة العظام على المدى الطويل بتأثيره في فيتامين د، وقد يرفع سكر الدم.',
    en: 'Its common effects include difficulty sleeping, uncontrollable eye movements, abnormal body movements, loss of coordination, confusion, slurred speech, headache, altered taste and constipation. With long use two effects particular to it appear: overgrowth of the gums over the teeth, and increased body hair with coarsening of the facial features. This is why mouth care and tooth cleaning are part of the treatment rather than a matter of appearance. Over the long term the drug also lowers bone density through its effect on vitamin D, and it may raise blood sugar.'
  },
  warning: {
    ar: 'توقّف عن الدواء واطلب المشورة الطبية العاجلة عند أول طفح جلدي مهما بدا بسيطاً، فبعض التفاعلات الجلدية معه تتطوّر إلى تقشّر وتفقّع خطير. واذهب إلى الطوارئ فوراً إذا تورّم الوجه أو العين أو الشفة أو اللسان أو الحلق، أو صعُب البلع أو التنفّس. وراجع طبيبك بلا تأخير عند حمّى مع التهاب حلق وتقرّح فم، أو تضخّم غدد، أو كدمات ونزف غير معتاد، أو اصفرار العين والجلد مع ألم أعلى البطن يميناً وإرهاق شديد، أو خفقان وألم صدر وضيق نفس. ولا توقفه من نفسك: الإيقاف المفاجئ قد يُشعل نوبة متّصلة.',
    en: 'Stop the medicine and seek urgent medical advice at the first sign of a rash however trivial it looks, because some of its skin reactions progress to dangerous peeling and blistering. Go to the emergency department at once if the face, eyes, lips, tongue or throat swell, or if swallowing or breathing becomes difficult. See your doctor without delay for fever with sore throat and mouth ulcers, swollen glands, unusual bruising or bleeding, yellowing of the eyes and skin with upper right abdominal pain and severe exhaustion, or palpitations, chest pain and breathlessness. And never stop it yourself: abrupt withdrawal can trigger a continuous seizure.'
  },
  interact: {
    ar: 'تعارضاته كثيرة لأنه يحرّض إنزيمات الكبد فيُضعف مفعول أدوية أخرى: حبوب منع الحمل ولصقاتها وحقنها، ومضادات التخثّر، والكورتيزون، والستاتينات، وبعض مضادات الفيروسات، وأدوية صرع أخرى، وحاصرات الكالسيوم، وفيتامين د. وفي المقابل يرفع مستواه في الدم فلوكونازول وبعض مضادات الاكتئاب والأميودارون وأدوية السلفا، ويخفضه ريفامبيسين وعشبة سانت جون ومضادات الحموضة وسكرالفات وشرب الكحول المزمن. أخبر كل طبيب وصيدلي أنك تأخذه، ولا تبدأ دواءً أو مكمّلاً قبل السؤال.',
    en: 'Its interactions are many because it induces liver enzymes and so weakens other medicines: contraceptive pills, patches and injections, anticoagulants, corticosteroids, statins, some antivirals, other antiepileptics, calcium channel blockers and vitamin D. In the other direction, its own blood level is raised by fluconazole, some antidepressants, amiodarone and sulfonamides, and lowered by rifampicin, St John wort, antacids, sucralfate and chronic alcohol drinking. Tell every doctor and pharmacist that you take it, and start no medicine or supplement without asking first.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس منه أو من الهيدانتوينات، ولا من سبق أن أصابه أذى كبدي حادّ بسببه، ولا يُجمع مع دواء الإيدز ديلافيردين. ويلزم الحذر الشديد في الحمل: فقد يزيد التشوّهات الخلقية ومشكلات النموّ، والتخطيط مع الطبيب يكون قبل الحمل لا بعده، وحبوب منع الحمل تضعف معه فتلزم وسيلة أخرى. ومن كان من أصول شرق آسيوية قد يحمل عاملاً وراثياً يزيد خطر التفاعل الجلدي الخطير فيُفحص قبل البدء. وينتبه مريض السكري والكبد والكلى ونقص ألبومين الدم والبورفيريا. ولا يُشرب الكحول معه.',
    en: 'It is not for anyone who has reacted to it or to other hydantoins, nor for anyone who has had acute liver injury from it, and it must not be combined with the HIV medicine delavirdine. Great care is needed in pregnancy: it may increase congenital malformations and developmental problems, so planning with the doctor comes before pregnancy rather than after, and because it weakens contraceptive pills another method is needed. People of East Asian descent may carry an inherited factor that raises the risk of a serious skin reaction, and can be tested before starting. Diabetes, liver, kidney, low blood albumin and porphyria all need caution. No alcohol with it.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682022.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7e467c02-49a0-4b62-b537-430fdfa4f10e'
  ]
};

RX_BODY['phenobarbital'] = {
  what: {
    ar: 'الفينوباربيتال من فصيلة الباربيتورات، وهو أقدم مضادات الاختلاج التي ما زالت مستعملة إلى اليوم، ويُصرف بوصفة أقراصاً وشراباً وحقناً. يعمل مثبّطاً عامّاً للجهاز العصبي المركزي، أي يُبطئ نشاط الدماغ كلّه لا نشاط منطقة النوبة وحدها، ولهذا يُهدّئ ويُنعِس بقدر ما يمنع الاختلاج. ولأنه رخيص وطويل المفعول ولا يحتاج تبريداً بقي دواءً أساسياً في كثير من بلدان العالم، لكنه تراجع في غيرها لأدوية أحدث أخفّ أثراً على الانتباه والذاكرة.',
    en: 'Phenobarbital is a barbiturate, the oldest anticonvulsant still in use today, dispensed on prescription as tablets, liquid and injection. It works as a general depressant of the central nervous system, that is it slows the activity of the whole brain and not only the seizure focus, which is why it sedates and causes drowsiness as much as it prevents fits. Because it is cheap, long-acting and needs no refrigeration it has remained a mainstay in many countries, while elsewhere it has given way to newer medicines that weigh less on attention and memory.'
  },
  why: {
    ar: 'يُوصف للسيطرة على النوبات الصرعية المعمّمة والجزئية، ويُستعمل مهدّئاً، ويُستعمل كذلك لمنع أعراض الانسحاب عند من صار معتمداً على باربيتورات أخرى. وله موضع خاصّ في نوبات حديثي الولادة وفي الحالات التي لا يتوفّر فيها غيره. أما استعماله عند الأطفال لمنع نوبات الحرارة فقد تراجع، لأن نشرته نفسها تذكر ارتباطه بضعف في القدرات المعرفية عند الأطفال الذين تناولوه لهذا السبب. وكبار السنّ لا يُنصحون به عادةً لأن غيره أأمن وأنفع لهم.',
    en: 'It is prescribed to control generalised and partial seizures, is used as a sedative, and is also used to prevent withdrawal symptoms in people who have become dependent on other barbiturates. It has a particular place in neonatal seizures and in settings where nothing else is available. Its use in children to prevent febrile seizures has receded, because its own label records an association with cognitive deficits in children who took it for that reason. Older adults are generally not advised to take it, since other medicines are safer and more useful for them.'
  },
  how: {
    ar: 'يعمل الفينوباربيتال على مستقبل يُسمّى غابا، وهو مكابح الدماغ الطبيعي: يفتح قناة الكلوريد في الخلية العصبية مدّة أطول فتصير الخلية أصعب إثارةً. والنتيجة أن الشحنة الشاذّة التي تبدأ منها النوبة لا تجد خلايا مستعدّة للاستجابة فتخبو قبل أن تنتشر. لكن هذا الكبح لا يقتصر على منطقة النوبة، بل يشمل مراكز اليقظة والتنفّس أيضاً، ومن هنا جاء نُعاسه وجاء خطره على النفس عند الكميات الكبيرة أو عند جمعه مع مهبّط آخر للجهاز العصبي.',
    en: 'Phenobarbital acts on a receptor called GABA, the natural brake of the brain: it holds the chloride channel of the nerve cell open for longer so the cell becomes harder to excite. The result is that the abnormal discharge from which a seizure starts finds no cells ready to respond and dies away before it spreads. But this braking is not confined to the seizure area; it reaches the centres of wakefulness and breathing too, and from there come both its drowsiness and its danger to breathing at large amounts or when combined with another nervous system depressant.'
  },
  effects: {
    ar: 'أكثر آثاره النُّعاس، ويأتي معه الصداع والدوخة والغثيان والقيء. وعند الأطفال قد يقع عكس المتوقّع فيصير الطفل مهتاجاً كثير الحركة بدل أن يهدأ، وكذلك يحدث عند بعض كبار السنّ وأصحاب ضعف وظائف الدماغ. ومع الاستعمال الطويل يشكو بعض الناس من بطء التفكير وضعف التركيز والذاكرة وتغيّر المزاج. ويحرّض الدواء إنزيمات الكبد فيستهلك فيتامين د، وقد يُنقص كثافة العظام على المدى الطويل مثل غيره من مضادات الاختلاج القديمة.',
    en: 'Its commonest effect is drowsiness, and with it headache, dizziness, nausea and vomiting. In children the opposite of what is expected may happen, so the child becomes excited and overactive instead of settling, and the same occurs in some older adults and in people whose brain function is already impaired. With long use some people complain of slowed thinking and poorer concentration, memory and mood. The drug also induces liver enzymes and so consumes vitamin D, and over the long term it can lower bone density as the other older anticonvulsants do.'
  },
  warning: {
    ar: 'اطلب الطوارئ فوراً إذا صار التنفّس بطيئاً أو صعباً، أو عمّ النُّعاس حتى صعُب إيقاظ المريض. وتوقّف عن الدواء وراجع طبيبك بلا تأخير عند طفح جلدي أو تفقّع أو تقشّر في الجلد، أو تورّم العين أو الشفة أو الوجنة، أو حمّى، أو تشوّش ذهني جديد. ولا تُوقفه من نفسك ولا تُنقص كميّته بلا رأي طبيب: الإيقاف المفاجئ بعد استعمال طويل قد يُشعل نوبة متّصلة وأعراض انسحاب شديدة، والطبيب هو الذي ينزل به على مراحل متدرّجة.',
    en: 'Get emergency help at once if breathing becomes slow or difficult, or if drowsiness deepens until the person is hard to rouse. Stop the medicine and see your doctor without delay for a rash, blistering or peeling of the skin, swelling of the eyes, lips or cheeks, fever, or new confusion. And never stop it or cut it down yourself without medical advice: an abrupt stop after long use can trigger a continuous seizure and severe withdrawal, and it is the doctor who steps it down in stages.'
  },
  interact: {
    ar: 'هو من أقوى محرّضات إنزيمات الكبد، فيُضعف مفعول كثير من الأدوية: حبوب منع الحمل ولصقاتها وحقنها، ومضادات التخثّر، والكورتيزون، والدوكسيسيكلين، والغريزوفولفين، وغيرها كثير، وقد يحتاج الطبيب إلى تعديلها عند إضافته أو سحبه. ويزيد الكحول وأدوية الألم والسعال الأفيونية ومضادات الهيستامين المنوّمة تثبيطه للتنفّس زيادة خطيرة. وحمض الفالبوريك يرفع مستواه في الدم. أخبر كل طبيب وصيدلي أنك تأخذه قبل أي دواء جديد.',
    en: 'It is among the strongest inducers of liver enzymes, so it weakens many medicines: contraceptive pills, patches and injections, anticoagulants, corticosteroids, doxycycline, griseofulvin and many others, and the doctor may need to adjust them when it is added or withdrawn. Alcohol, opioid pain and cough medicines and sedating antihistamines increase its depression of breathing dangerously. Valproic acid raises its blood level. Tell every doctor and pharmacist that you take it before any new medicine.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس من الباربيتورات، ولا مريض البورفيريا، ولا من عنده اعتلال كبدي شديد أو قصور تنفّسي شديد. ولا يُنصح به عادةً لكبار السنّ. وهو يعبر المشيمة وقد يضرّ الجنين، وقد يُحدث عند المولود نزفاً أو أعراض انسحاب، فلا يُبدأ ولا يُوقف في الحمل إلا بقرار طبيب. وينتقل في حليب الأم فيُراقَب الرضيع من فرط النوم وقلّة الوزن. وممنوع شرب الكحول معه. ولا يُترك في متناول غير صاحبه لأنه يُدمن ويُبنى عليه اعتماد.',
    en: 'It is not for anyone allergic to barbiturates, nor for someone with porphyria, nor for anyone with severe liver disease or severe respiratory impairment. It is generally not advised for older adults. It crosses the placenta and may harm the fetus, and can cause bleeding or withdrawal symptoms in the newborn, so it is neither started nor stopped in pregnancy except by a doctor decision. It passes into breast milk, so the baby is watched for excessive sleepiness and poor weight gain. Alcohol is forbidden with it. And it should not be left within reach of anyone else, because it is habit forming.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682007.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=74428144-fb24-40a5-a670-3b876e2d116c'
  ]
};

RX_BODY['ethosuximide'] = {
  what: {
    ar: 'الإيثوسكسيميد مضاد اختلاج من فصيلة السكسينيميدات، يُصرف بوصفة كبسولات وشراباً، ووظيفته ضيّقة ومحدّدة: نوبة الغياب وحدها. ونوبة الغياب لحظات قصيرة يفقد فيها الطفل وعيه بما حوله فيحدّق أو يرفّ بجفنيه ولا يستجيب لمن يناديه، ثم يعود كأن شيئاً لم يكن. وليست هذه غفلة ولا سوء انتباه بل نشاط كهربائي شاذّ في الدماغ، ولهذا صار الإيثوسكسيميد من الخيارات الأولى فيها لأنه يضبطها بأثر أخفّ على الانتباه من غيره.',
    en: 'Ethosuximide is an anticonvulsant of the succinimide family, dispensed on prescription as capsules and a syrup, and its role is narrow and specific: absence seizures alone. An absence seizure is a brief spell in which a child loses awareness of the surroundings, stares or blinks and does not answer when called, then returns as if nothing happened. This is not daydreaming or poor attention but abnormal electrical activity in the brain, and ethosuximide became a first-line choice for it because it controls it with less effect on attention than the alternatives.'
  },
  why: {
    ar: 'يُوصف للسيطرة على نوبات الغياب، ويُعدّ فيها من أفضل ما يُختار للطفل الذي لا يعاني نوعاً آخر من النوبات معها. وهنا نقطة مهمّة تذكرها نشرته الرسمية: إن كان المريض يجمع بين نوبة الغياب ونوبات تشنّجية كبيرة، فالإيثوسكسيميد وحده قد يزيد تكرار النوبات الكبيرة، فيلزم دواء آخر معه. ولهذا لا يُنقل المريض إليه بناءً على وصف الأعراض وحده، بل بعد تخطيط دماغ يحدّد نوع النوبة تحديداً دقيقاً.',
    en: 'It is prescribed to control absence seizures, and is among the best choices for a child who has no other seizure type alongside them. Here its official label makes an important point: if the patient has both absence seizures and major convulsive seizures, ethosuximide alone may increase the frequency of the major ones, so another medicine is needed with it. That is why a patient is not moved onto it on the strength of a symptom description alone, but after an EEG has defined the seizure type precisely.'
  },
  how: {
    ar: 'نوبة الغياب تولد في حلقة كهربائية بين المهاد وقشرة الدماغ، والمهاد هو محوّل الإشارات الذي يمرّ به الإحساس والانتباه. وفي خلايا هذه الحلقة نوع من قنوات الكالسيوم يسمح بموجات متكرّرة منتظمة، وهي التي تصنع النمط المميّز للنوبة. يخفض الإيثوسكسيميد تيّار هذه القنوات فتتوقّف الموجة عن التشكّل، فيعود انتباه الطفل متّصلاً. ولأن عمله موجَّه إلى هذه الحلقة بعينها فهو لا يفيد في أنواع النوبات الأخرى ولا يُستعمل فيها.',
    en: 'An absence seizure is born in an electrical loop between the thalamus and the cortex, the thalamus being the relay through which sensation and attention pass. The cells of that loop carry a kind of calcium channel that permits repeated regular waves, and those waves make the seizure characteristic pattern. Ethosuximide reduces the current through those channels so the wave stops forming and the child attention becomes continuous again. Because its action is aimed at that loop in particular it does not help in other seizure types and is not used for them.'
  },
  effects: {
    ar: 'أكثر ما يُشتكى منه معه يخصّ المعدة: غثيان وقيء وألم بطن وإسهال وفقدان شهية ونزول وزن، وهذا أقلّ عند تناوله مع الطعام. ويأتي كذلك نُعاس ودوخة وصداع وصعوبة تركيز، وفواق متكرّر يستغربه بعض الناس وهو معروف معه. وقد يتغيّر المزاج أو السلوك عند بعض الأطفال فيلاحظه الأهل قبل غيرهم. وأغلب هذه الآثار تظهر في البداية وتخفّ، أما ما يخصّ الدم واليرقان فلا يُنتظر منه أن يخفّ من نفسه.',
    en: 'Most of what people complain of with it concerns the stomach: nausea, vomiting, abdominal pain, diarrhoea, loss of appetite and weight loss, all of which are less when it is taken with food. There is also drowsiness, dizziness, headache and difficulty concentrating, and repeated hiccups which surprise some people yet are well known with it. Mood or behaviour may change in some children, and the family notice it before anyone else. Most of these effects appear early and ease, but anything involving the blood or jaundice should never be expected to ease on its own.'
  },
  warning: {
    ar: 'توقّف عن الدواء واطلب المشورة الطبية العاجلة عند أول طفح جلدي، خصوصاً إن كان في الوجه أو معه حمّى أو تفقّع أو تقشّر أو تضخّم غدد. وراجع الطبيب فوراً عند علامات نقص كريات الدم: حمّى وقشعريرة والتهاب حلق وتقرّح فم وتعب غير معتاد وكدمات أو نزف بلا سبب، ولهذا يطلب الطبيب فحص دم دورياً معه. وأخبره كذلك عند ألم مفاصل وعضلات مع طفح مستمرّ. ولا يُوقف الدواء فجأة فقد ينشأ عنه حال غياب متّصلة.',
    en: 'Stop the medicine and seek urgent medical advice at the first rash, especially if it is on the face or comes with fever, blistering, peeling or swollen glands. See the doctor at once for signs of falling blood cells: fever, chills, sore throat, mouth ulcers, unusual tiredness and bruising or bleeding for no reason, which is why the doctor orders periodic blood counts with it. Tell them too about joint and muscle pain with a persistent rash. And it must not be stopped suddenly, because that can precipitate a state of continuous absence.'
  },
  interact: {
    ar: 'يتأثّر الإيثوسكسيميد بأدوية الصرع الأخرى ويؤثّر فيها: قد يرفع مستواه حمض الفالبوريك، وقد يخفضه الفينيتوين والفينوباربيتال والكاربامازيبين، ولهذا يُتابَع المريض عند إضافة أيّ منها أو سحبه. وتزيد الكحول ومضادات الهيستامين المنوّمة والمهدّئات نُعاسه ودوخته. ولا يُبدأ معه دواء أو عشبة أو مكمّل قبل سؤال الطبيب أو الصيدلي، فبعضها يغيّر مستواه في الدم دون أن يشعر صاحبه بشيء حتى تعود النوبة.',
    en: 'Ethosuximide is affected by the other antiepileptics and affects them in turn: valproic acid may raise its level, while phenytoin, phenobarbital and carbamazepine may lower it, so the patient is followed whenever any of them is added or withdrawn. Alcohol, sedating antihistamines and tranquillisers increase its drowsiness and dizziness. No medicine, herb or supplement should be started alongside it without asking the doctor or pharmacist, because some of them change its blood level without the person feeling anything until the seizures return.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس منه أو من السكسينيميدات. ولا يُستعمل وحده عند من يعاني نوبات تشنّجية كبيرة مع نوبة الغياب لأنه قد يزيدها. ويلزم الحذر ومتابعة التحاليل عند اعتلال الكبد أو الكلى لأن نشرته تذكر تغيّرات وظيفية فيهما، فيُطلب تحليل بول ووظائف كبد دورياً. وفي الحمل والرضاعة لا يُبدأ ولا يُوقف إلا بقرار طبيب، لأن ترك الصرع بلا علاج له خطره أيضاً. ويُتجنّب معه قيادة السيارة حتى يُعرف أثره في اليقظة.',
    en: 'It is not for anyone allergic to it or to the succinimides. It is not used alone in someone who has major convulsive seizures alongside absence seizures, because it may increase them. Caution and laboratory follow-up are needed in liver or kidney disease, because its label records functional changes in both, so periodic urine tests and liver function tests are requested. In pregnancy and breastfeeding it is neither started nor stopped except by a doctor decision, since leaving epilepsy untreated carries its own danger. Driving is avoided with it until its effect on alertness is known.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682327.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0e008f33-70a1-4bc6-b3a0-d45214418ab6'
  ]
};

RX_BODY['diazepam'] = {
  what: {
    ar: 'الديازيبام من فصيلة البنزوديازيبينات، وهي أدوية تهدّئ فرط النشاط في الدماغ فتُسكّن وتُرخي وتوقف الاختلاج. يأتي أقراصاً وشراباً وحقناً وأنابيب شرجية تُستعمل لمن لا يستطيع البلع أثناء النوبة. مفعوله يبدأ سريعاً ويبقى في الجسم طويلاً، ولهذا يفيد في إيقاف النوبة ويُثقل صاحبه نُعاساً بعدها. وهو دواء وصفة يُدمن، ونشراته الرسمية تحدّ استعماله بمدّة قصيرة لأن الطول يصنع اعتماداً وانسحاباً.',
    en: 'Diazepam belongs to the benzodiazepines, medicines that calm overactivity in the brain and so sedate, relax and stop convulsions. It comes as tablets, liquid, injection and rectal tubes for someone who cannot swallow during a seizure. Its action starts quickly and stays in the body a long time, which is why it is useful for stopping a seizure and why it leaves the person heavily drowsy afterwards. It is a prescription medicine that is habit forming, and its official leaflets limit it to short-term use because longer use creates dependence and withdrawal.'
  },
  why: {
    ar: 'يُوصف لأربعة أشياء: القلق الشديد الذي يصحبه تعرّق ورجفة وأرق، والسيطرة على النوبات الصرعية، وإرخاء التشنّج العضلي الناتج عن أمراض الأعصاب، وتهدئة المريض قبل بعض الإجراءات الطبية. ويُستعمل كذلك في هياج الانسحاب عند من يشرب الكحول ثم يتوقّف. وليس دواء قلق مزمن ولا منوّماً دائماً: فائدته في أول الطريق وفي الأزمة، وأما طول الاستعمال فيصنع اعتماداً يجعل تركه أصعب من المشكلة التي بدأ لها.',
    en: 'It is prescribed for four things: severe anxiety with sweating, shaking and sleeplessness; control of epileptic seizures; relaxation of muscle spasm arising from nerve disease; and sedation before certain medical procedures. It is also used for the agitation of withdrawal in someone who drinks alcohol and then stops. It is not a medicine for chronic anxiety nor a permanent sleeping tablet: its value is at the start of the road and in the crisis, whereas long use builds a dependence that makes stopping harder than the problem it began for.'
  },
  how: {
    ar: 'في الدماغ ناقل مكابح اسمه غابا، مهمّته تهدئة الخلايا العصبية ومنعها من الإطلاق المتسارع. يجلس الديازيبام على مستقبل غابا فيُضاعف أثره: تصير القناة أكثر استجابة لناقلها الطبيعي، فتهدأ الخلية وترتفع عتبة إثارتها. ومن هذا الأثر الواحد تُفهم كل استعماله: القلق يخفّ لأن دوائر الخوف تهدأ، والنوبة تنقطع لأن الشحنة لا تنتشر، والتشنّج يرتخي لأن إشارة الشدّ العضلي تضعف في النخاع، والنُّعاس يأتي لأن مراكز اليقظة هدأت هي أيضاً.',
    en: 'The brain has a braking messenger called GABA whose job is to quieten nerve cells and stop them firing too fast. Diazepam sits on the GABA receptor and doubles its effect: the channel becomes more responsive to its own natural messenger, so the cell quietens and its threshold rises. From that single action all its uses follow: anxiety eases because the fear circuits quieten, the seizure breaks because the discharge cannot spread, spasm relaxes because the muscle tightening signal weakens in the spinal cord, and drowsiness comes because the wakefulness centres have quietened too.'
  },
  effects: {
    ar: 'أظهر آثاره النُّعاس وقلّة اليقظة والتعب وضعف العضلات وعدم الثبات على القدمين، ولهذا لا تُقاد معه سيارة ولا تُستعمل آلة حتى يُعرف أثره. وقد يهبط ضغط الدم قليلاً. وعند بعض الناس يقع أثر معاكس فيزيد القلق أو الاضطراب أو الانفعال بدل أن يهدأ، وهذا أكثر ما يُلاحَظ عند الأطفال وكبار السنّ. ونقص الثبات عند كبار السنّ ليس أثراً بسيطاً: هو سبب سقوط وكسور، ولهذا يُوزن نفعه وضرره فيهم بعناية.',
    en: 'Its most obvious effects are drowsiness, reduced alertness, tiredness, muscle weakness and unsteadiness on the feet, which is why no car is driven and no machine used with it until its effect is known. Blood pressure may fall slightly. In some people the opposite happens and anxiety, agitation or irritability increase instead of settling, and this is seen most in children and older adults. Unsteadiness in older adults is no small matter: it is a cause of falls and fractures, so benefit and harm are weighed carefully in them.'
  },
  warning: {
    ar: 'اطلب الطوارئ فوراً إذا صار التنفّس بطيئاً أو صعباً، أو صعُب إيقاظ المريض أو لم يستجب، أو ظهر تورّم في الوجه أو اللسان أو الحلق أو بحّة أو صعوبة بلع أو ضيق نفس. وراجع الطبيب بلا تأخير عند دوخة شديدة أو نُعاس غير معتاد، أو اصفرار العين والجلد، أو أفكار إيذاء النفس أو تغيّر نفسي جديد. ولا تُوقف الدواء من نفسك بعد استعمال متّصل: الإيقاف المفاجئ قد يُشعل نوبات وانسحاباً شديداً، والنزول يكون بالتدريج مع الطبيب.',
    en: 'Get emergency help at once if breathing becomes slow or difficult, if the person is hard to rouse or unresponsive, or if there is swelling of the face, tongue or throat, hoarseness, difficulty swallowing or breathlessness. See the doctor without delay for severe dizziness or unusual sleepiness, yellowing of the eyes and skin, thoughts of self-harm or any new change in mental state. And do not stop the medicine yourself after continuous use: an abrupt stop can trigger seizures and severe withdrawal, and the reduction is made gradually with the doctor.'
  },
  interact: {
    ar: 'أخطر تعارضه مع الأفيونات وأدوية الألم والسعال القوية: الجمع قد يُحدث تهدئة عميقة وتثبيطاً للتنفّس وغيبوبة وموتاً، ولهذا يحمل تحذيراً مؤطّراً في نشرته. ويزيد الكحول آثاره زيادة خطيرة، وكذلك مضادات الهيستامين المنوّمة والمهدّئات ومضادات الذهان وبعض مضادات الاكتئاب والمخدّر العام. ويرفع مستواه في الدم السيميتيدين والأوميبرازول وعصير الجريب فروت. أخبر كل طبيب وصيدلي أنك تأخذه قبل أي دواء جديد.',
    en: 'Its most dangerous interaction is with opioids and strong pain and cough medicines: the combination can cause profound sedation, depression of breathing, coma and death, which is why its leaflet carries a boxed warning. Alcohol increases its effects dangerously, and so do sedating antihistamines, tranquillisers, antipsychotics, some antidepressants and general anaesthetics. Its blood level is raised by cimetidine, omeprazole and grapefruit juice. Tell every doctor and pharmacist that you take it before any new medicine.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس من البنزوديازيبينات، ولا مريض الزرق ضيّق الزاوية، ولا من عنده انقطاع نفس نومي أو قصور تنفّسي شديد، ولا مريض الوهن العضلي الوبيل. ويلزم الحذر الشديد في اعتلال الكبد أو الكلى أو القلب، وفي سابقة الاعتماد على الكحول أو الأدوية. وكبار السنّ يحتاجون موازنة خاصّة لخطر السقوط والتشوّش. ويُتجنّب في الحمل إلا لضرورة يقدّرها الطبيب، وينتقل في حليب الأم فيُستشار الصيدلي قبل الرضاعة.',
    en: 'It is not for anyone allergic to benzodiazepines, nor for someone with narrow-angle glaucoma, nor for anyone with sleep apnoea or severe respiratory impairment, nor for a patient with myasthenia gravis. Great care is needed in liver, kidney or heart disease and in a past history of alcohol or drug dependence. Older adults need a special weighing of the risk of falls and confusion. It is avoided in pregnancy except for a necessity judged by the doctor, and it passes into breast milk, so the pharmacist is consulted before breastfeeding.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682047.html',
    'https://www.nhs.uk/medicines/diazepam/'
  ]
};

RX_BODY['lorazepam'] = {
  what: {
    ar: 'اللورازيبام بنزوديازيبين متوسّط الأمد، يأتي أقراصاً وحقناً، ووجهاه مختلفان تماماً: حقنُه دواء طوارئ من الخيارات الأولى لإيقاف النوبة الصرعية المتّصلة، وأقراصه دواء قلق وأرق قصير المدّة. وهو يعمل مثل بقيّة فصيلته بتقوية مكابح الدماغ الطبيعي، لكنه لا يبقى في الجسم طول بقاء الديازيبام فيصلح لحالات يُراد فيها أثر محسوب ينتهي. ونشرته تحمل تحذيراً مؤطّراً في ثلاثة مواضع: الأفيونات، وسوء الاستعمال والاعتماد، والانسحاب.',
    en: 'Lorazepam is an intermediate-acting benzodiazepine, available as tablets and injection, with two quite different faces: the injection is an emergency medicine and a first-line option for stopping status epilepticus, while the tablets are a short-term medicine for anxiety and insomnia. It works like the rest of its family by strengthening the natural brake of the brain, but it does not linger in the body as long as diazepam, which suits situations where a measured effect that ends is wanted. Its label carries a boxed warning on three counts: opioids, misuse and dependence, and withdrawal.'
  },
  why: {
    ar: 'يُوصف حقنُه في المستشفى لإيقاف حال الصرع المتّصلة، ولتهدئة المريض قبل التخدير مع إضعاف تذكّره للإجراء. وتُوصف أقراصه للقلق وللأرق الذي يصحب القلق مدّة قصيرة، ولهياج الانسحاب عند من يتوقّف عن الكحول، ولغثيان وقيء علاج السرطان مع أدوية أخرى. وحدّه أنه لا يعالج سبب القلق ولا يمنع الصرع مستقبلاً: هو يُخمِد الأزمة الحاضرة، وأما العلاج الدائم فبدواء آخر أو بعلاج نفسي مع الطبيب.',
    en: 'Its injection is prescribed in hospital to stop status epilepticus and to sedate a patient before anaesthesia while blunting recall of the procedure. Its tablets are prescribed for anxiety and for the insomnia that accompanies anxiety over a short period, for the agitation of alcohol withdrawal, and for the nausea and vomiting of cancer treatment alongside other medicines. Its limit is that it treats neither the cause of the anxiety nor the epilepsy of the future: it damps the present crisis, while lasting treatment comes from another medicine or from psychological therapy with the doctor.'
  },
  how: {
    ar: 'يرتبط اللورازيبام بمستقبل غابا في الخلية العصبية فيزيد استجابته لناقله الطبيعي، والغابا هو ما يمنع الخلايا من الإطلاق المتسارع. فتهدأ الخلية وترتفع عتبة إثارتها، فتنقطع الشحنة التي تصنع النوبة، ويخفّ نشاط دوائر الخوف واليقظة معها. ومن هنا يأتي نفعه وضرره من الباب الواحد: هدوء الشحنة الشاذّة هو نفسه الذي يُبطئ مركز التنفّس إن زادت الكمية أو اجتمع معه مهبّط آخر، ولهذا يُعطى الحقن ومعه مراقبة للتنفّس وتأمين لمجرى الهواء.',
    en: 'Lorazepam binds to the GABA receptor on the nerve cell and increases its response to its own natural messenger, GABA being what stops cells firing too fast. The cell quietens and its threshold rises, so the discharge that makes the seizure is broken and the activity of the fear and wakefulness circuits eases with it. Benefit and harm therefore enter by the same door: the very quietening of the abnormal discharge is what slows the breathing centre if the amount is too large or another depressant is combined with it, which is why the injection is given with monitoring of breathing and protection of the airway.'
  },
  effects: {
    ar: 'أكثر آثاره النُّعاس والدوخة والوهن وعدم الثبات، ولهذا تُمنع القيادة وتشغيل الآلات حتى يُعرف أثره. وقد يضعف تسجيل الذكريات الجديدة مدّة أثره، وهذا مقصود قبل الإجراءات وغير مرغوب في غيرها. وكبار السنّ يصيبهم من النُّعاس والتشوّش وعدم الثبات أكثر من غيرهم فيرتفع خطر السقوط. وعند بعض الناس يقع أثر معاكس من هياج وقلق واضطراب نوم بدل الهدوء، وهو داعٍ لمراجعة الطبيب لا لزيادة الكمية.',
    en: 'Its commonest effects are drowsiness, dizziness, weakness and unsteadiness, which is why driving and operating machinery are forbidden until its effect is known. It may weaken the laying down of new memories while it acts, which is intended before procedures and unwanted otherwise. Older adults get more drowsiness, confusion and unsteadiness than others, so the risk of falling rises. In some people the opposite effect occurs, with agitation, anxiety and disturbed sleep instead of calm, and that is a reason to go back to the doctor rather than to take more.'
  },
  warning: {
    ar: 'اطلب الطوارئ فوراً عند تنفّس بطيء أو صعب، أو نُعاس شديد لا يستجيب معه المريض للنداء، أو نبض بطيء، أو تورّم الوجه واللسان مع صفير أو ضيق نفس. وراجع الطبيب بلا تأخير عند اصفرار العين والجلد، أو حركات لا إرادية ورجفة جديدة، أو تغيّر نفسي شديد وأفكار إيذاء النفس. ولا تُوقف الأقراص من نفسك بعد استعمال متّصل: نشرته تذكر أن الانسحاب الحادّ قد يكون مهدّداً للحياة وفيه نوبات ورجفة واضطراب ذاكرة وتركيز، والنزول يكون تدريجياً.',
    en: 'Get emergency help at once for slow or difficult breathing, deep drowsiness in which the person does not answer when called, a slow pulse, or swelling of the face and tongue with wheeze or breathlessness. See the doctor without delay for yellowing of the eyes and skin, new involuntary movements or tremor, or a severe change in mental state and thoughts of self-harm. And do not stop the tablets yourself after continuous use: its label states that acute withdrawal can be life-threatening and includes seizures, tremor and disturbance of memory and concentration, so the reduction is made gradually.'
  },
  interact: {
    ar: 'تحذيره المؤطّر الأول للجمع مع الأفيونات وأدوية الألم والسعال: خطر تهدئة عميقة وتثبيط تنفّس وغيبوبة وموت. والكحول يضاعف آثاره ويجب تركه. وتزيد المهدّئات ومضادات الذهان ومضادات الهيستامين المنوّمة والمخدّر العام هذا الأثر نفسه. ويُنبَّه على جمعه مع الكلوزابين ومع الفالبوروات. وأخبر الطبيب بكل ما تأخذه من وصفة ومن غير وصفة ومكمّلات وأعشاب، فكثير منها يزيد النُّعاس دون أن يُنتظر ذلك منه.',
    en: 'Its first boxed warning concerns combination with opioids and pain and cough medicines: the risk is profound sedation, depression of breathing, coma and death. Alcohol doubles its effects and must be given up. Tranquillisers, antipsychotics, sedating antihistamines and general anaesthetics increase that same effect. Caution is flagged over combining it with clozapine and with valproate. Tell the doctor everything you take, prescribed or not, including supplements and herbs, because many of them add drowsiness where it would not be expected.'
  },
  avoid: {
    ar: 'نشرة الحقن تمنعه في الزرق الحادّ ضيّق الزاوية، وفي انقطاع النفس النومي، وفي القصور التنفّسي الشديد إلا لمريض على جهاز تنفّس، وعند التحسّس من البنزوديازيبينات، وعند الأطفال المولودين قبل تمامهم لما في المحلول من كحول البنزيل. ويلزم الحذر في اعتلال الكبد أو الكلى، وفي مرض الرئة كالربو والانسداد المزمن، وفي سابقة الاعتماد. وكبار السنّ تكون تهدئتهم أعمق وأطول. وفي الحمل والرضاعة لا يُؤخذ إلا بقرار طبيب.',
    en: 'The injection label rules it out in acute narrow-angle glaucoma, in sleep apnoea syndrome, in severe respiratory insufficiency except in a mechanically ventilated patient, in sensitivity to benzodiazepines, and in premature infants because of the benzyl alcohol in the vehicle. Caution is needed in liver or kidney disease, in lung disease such as asthma and chronic obstruction, and in a past history of dependence. In older adults the sedation is deeper and longer. In pregnancy and breastfeeding it is taken only on a doctor decision.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682053.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=20140b19-846b-425f-b191-670e17809945'
  ]
};

RX_BODY['midazolam'] = {
  what: {
    ar: 'الميدازولام بنزوديازيبين سريع البدء قصير الأمد، يُعطى حقناً في الوريد أو العضل، وشراباً للأطفال قبل الإجراءات، وبخّاخاً في الأنف. وهو دواء مستشفى في أغلب صوره، يُعطى بيد من يستطيع مراقبة التنفّس ودعمه؛ إلا بخّاخه الأنفي فقد صُنع ليُعطى في البيت بيد أهل المريض لإيقاف تجمّع النوبات. ومفعوله يُنشئ نُعاساً وهدوءاً وضعفاً في تذكّر ما جرى، وهذا الأخير مقصود قبل المناظير والعمليات.',
    en: 'Midazolam is a fast-onset, short-acting benzodiazepine given by injection into a vein or muscle, as a syrup for children before procedures, and as a nasal spray. In most of its forms it is a hospital medicine, given by someone able to monitor and support breathing; the exception is the nasal spray, made to be given at home by the family to stop a cluster of seizures. Its effect produces drowsiness, calm and a weakened memory of what happened, the last of which is intended before endoscopies and operations.'
  },
  why: {
    ar: 'يُعطى قبل الإجراءات الطبية والجراحية ليُنعِس ويُخفّف القلق ويمنع تذكّر ما حدث، ويُستعمل في تهدئة مرضى العناية المركّزة. وبخّاخه الأنفي مأذون به لإيقاف تجمّع النوبات، وهي نوبات متكرّرة تخرج عن نمط المريض المعتاد فيحتاج إلى دواء إنقاذ يُعطى في مكانه قبل الوصول إلى المستشفى. وهو ليس دواء صرع يومياً ولا علاجاً للقلق المزمن، بل أثر محسوب لحدث محسوب، فإن تكرّرت الحاجة إليه فالخطة كلّها تحتاج مراجعة.',
    en: 'It is given before medical and surgical procedures to induce drowsiness, ease anxiety and prevent recall of what happened, and it is used to sedate patients in intensive care. Its nasal spray is licensed to stop seizure clusters, which are repeated seizures that depart from the patient usual pattern and call for a rescue medicine given where they are before reaching hospital. It is neither a daily epilepsy medicine nor a treatment for chronic anxiety, but a measured effect for a measured event; if it is needed repeatedly, the whole plan needs review.'
  },
  how: {
    ar: 'يعمل الميدازولام على مستقبل غابا فيزيد قدرة هذا الناقل المكابح على تهدئة الخلايا العصبية، فترتفع عتبة إثارتها ويتوقّف انتشار الشحنة الشاذّة. وسرّ سرعته أنه شديد الذوبان في الدهن فيعبر إلى الدماغ بسرعة، ويستقلبه الكبد بسرعة فينتهي أثره بسرعة كذلك. ولهذا صلح لإجراء يستغرق دقائق ولنوبة يُراد قطعها في الحال. والوجه الآخر لهذه السرعة أن تثبيط التنفّس يقع سريعاً هو أيضاً، ومن هنا جاء شرط المراقبة.',
    en: 'Midazolam acts on the GABA receptor and increases the ability of that braking messenger to quieten nerve cells, so their threshold rises and the spread of the abnormal discharge stops. The secret of its speed is that it is highly fat-soluble and so crosses into the brain quickly, and the liver breaks it down quickly so its effect ends quickly too. That is what suits it to a procedure lasting minutes and to a seizure meant to be cut short at once. The other face of that speed is that depression of breathing also comes on quickly, and from there comes the requirement to monitor.'
  },
  effects: {
    ar: 'من آثار بخّاخه الأنفي النُّعاس، وتهيّج الأنف والحلق، ورشح، وصداع. ومن آثار حقنه الغثيان والقيء والطفح وهبوط بسيط في الضغط. وضعف تذكّر ما جرى أثناء أثره أمر متوقّع لا مقلق. وقد يقع عند بعض الناس هياج واضطراب وحركات لا إرادية بدل الهدوء، وهذا يُبلَّغ به الطبيب. وبعد أخذه يبقى التأثير على اليقظة ساعات، فتُمنع القيادة وقيادة الدرّاجة وكل ما يحتاج تركيزاً في بقيّة اليوم.',
    en: 'Effects of the nasal spray include drowsiness, irritation of the nose and throat, a runny nose and headache. Effects of the injection include nausea, vomiting, rash and a slight fall in blood pressure. A weakened memory of what happened while it acted is expected rather than worrying. In some people agitation, restlessness and involuntary movements occur instead of calm, and this should be reported to the doctor. After it is taken the effect on alertness lasts hours, so driving, cycling and anything needing concentration are ruled out for the rest of the day.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إذا صار التنفّس بطيئاً أو متوقّفاً أو صعباً، أو ازرقّت الشفة، أو لم يستجب المريض للنداء والتحريك، أو استمرّت النوبة بعد إعطاء البخّاخ كما علّمك الطبيب، أو تكرّرت. وأخبر الطبيب بلا تأخير عند اضطراب نبض، أو هياج شديد وحركات لا إرادية، أو تشوّش وهلوسة، أو تغيّر نفسي وأفكار إيذاء النفس. وإن استُعمل البخّاخ مرات متقاربة فراجع الطبيب في خطة العلاج ولا تزد من نفسك.',
    en: 'Call an ambulance at once if breathing becomes slow, stops or is difficult, if the lips turn blue, if the person does not respond to being called or shaken, if the seizure continues after the spray has been given as the doctor taught, or if it recurs. Tell the doctor without delay about disturbed heart rhythm, severe agitation with involuntary movements, confusion and hallucinations, or a change in mental state and thoughts of self-harm. And if the spray has been used several times close together, go back to the doctor about the treatment plan rather than giving more on your own.'
  },
  interact: {
    ar: 'تحذيره المؤطّر يخصّ الجمع مع الأفيونات وأدوية الألم والسعال: خطر تثبيط تنفّس وتهدئة عميقة وغيبوبة وموت. والكحول ممنوع معه. وتزيد المهدّئات ومضادات الهيستامين المنوّمة أثره. ويرفع مستواه في الدم ما يعطّل استقلابه في الكبد: بعض مضادات الفطريات ومضادات الفيروسات والسيميتيدين وعصير الجريب فروت. ويخفض مستواه ما يحرّض الكبد كعشبة سانت جون. أخبر الطبيب بكل ما تأخذه قبل الإجراء.',
    en: 'Its boxed warning concerns combination with opioids and pain and cough medicines: the risk is depression of breathing, profound sedation, coma and death. Alcohol is forbidden with it. Tranquillisers and sedating antihistamines increase its effect. Its blood level is raised by anything that blocks its breakdown in the liver: some antifungals and antivirals, cimetidine and grapefruit juice. Its level is lowered by liver enzyme inducers such as St John wort. Tell the doctor everything you take before the procedure.'
  },
  avoid: {
    ar: 'يُتوخّى الحذر أو يُمنع عند التحسّس من البنزوديازيبينات، وفي الزرق، وفي أمراض الرئة كالربو والانسداد المزمن وانتفاخ الرئة، وفي قصور القلب، وفي اعتلال الكبد أو الكلى. وكبار السنّ تصيبهم تهدئة أعمق وأطول فبخّاخه لا يُختار لهم بلا موازنة. وفي الحمل والرضاعة لا يُعطى إلا بقرار طبيب بعد موازنة النفع والضرر. وأهل المريض يجب أن يُدرَّبوا على استعماله وعلى متى يطلبون الإسعاف قبل أن يحملوه في البيت.',
    en: 'Caution or avoidance applies in sensitivity to benzodiazepines, in glaucoma, in lung diseases such as asthma, chronic obstruction and emphysema, in heart failure, and in liver or kidney disease. In older adults the sedation is deeper and longer, so the spray is not chosen for them without weighing it. In pregnancy and breastfeeding it is given only on a doctor decision after weighing benefit against harm. And the family must be trained in how to use it and when to call an ambulance before they carry it at home.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a621044.html',
    'https://medlineplus.gov/druginfo/meds/a609003.html'
  ]
};

RX_BODY['magnesium-sulfate'] = {
  what: {
    ar: 'كبريتات المغنيسيوم ملح معدني يُعطى محلولاً في الوريد أو حقناً في العضل، وهو دواء مستشفى لا يُشترى للبيت في هذا الشكل. والمغنيسيوم عنصر أصلي في الجسم يشترك في مئات التفاعلات وفي عمل العصب والعضلة والقلب. وحين يُعطى بكميات دوائية يصير له عمل الدواء لا عمل المكمّل: يهدّئ الإثارة العصبية ويوسّع الأوعية ويُرخي العضلة. وله شكل فمي معروف بملح إبسوم يُستعمل مليّناً، وهو غير الذي نتكلّم عنه هنا.',
    en: 'Magnesium sulfate is a mineral salt given as a solution into a vein or by injection into a muscle, and in this form it is a hospital medicine not bought for home. Magnesium is a native element of the body, taking part in hundreds of reactions and in the working of nerve, muscle and heart. When given in medicinal amounts it behaves as a drug rather than a supplement: it quietens nervous excitability, widens blood vessels and relaxes muscle. It also has an oral form known as Epsom salt used as a laxative, which is not what is described here.'
  },
  why: {
    ar: 'استعماله الأول والأهمّ منع تشنّج تسمّم الحمل وإيقافه؛ فهو الدواء المختار في هذه الحالة لا مضادات الصرع المعتادة. ويُستعمل كذلك لتصحيح نقص المغنيسيوم في الدم، ولاضطرابات نظم القلب الناشئة عن هذا النقص. ومن استعمالاته غير المدرجة في النشرة: نوبة الربو الشديدة التي لا تستجيب للموسّعات، ونوع خطر من اضطراب النظم يُسمّى تسرّع البطين المتعدّد الأشكال، وتأخير المخاض المبكّر مدّة قصيرة.',
    en: 'Its first and most important use is to prevent and stop the convulsions of pre-eclampsia and eclampsia; it is the medicine of choice there, not the usual antiepileptics. It is also used to correct a low blood magnesium and the disorders of heart rhythm that arise from that deficiency. Among its uses not listed on the label are the severe asthma attack that does not respond to bronchodilators, a dangerous rhythm disturbance called polymorphic ventricular tachycardia, and delaying preterm labour for a short period.'
  },
  how: {
    ar: 'المغنيسيوم أيون موجب مضاعف ينافس الكالسيوم على قنواته في غشاء الخلية. والكالسيوم هو ما يدخل الخلية فيُطلق الناقل العصبي ويَقبض العضلة، فحين ينافسه المغنيسيوم يقلّ نقل الإشارة عند الوصل العصبي العضلي فترتخي العضلة وتهدأ الإثارة العصبية. ومن هذا الأصل الواحد يُفهم نفعه في تشنّج الحمل وفي الربو، ويُفهم خطره كذلك: زيادته تُرخي كل عضلة بما فيها عضلات التنفّس، وتُبطئ توصيل القلب حتى توقفه.',
    en: 'Magnesium is a divalent positive ion that competes with calcium at its channels in the cell membrane. Calcium is what enters the cell to release the nerve messenger and contract the muscle, so when magnesium competes with it, signal transmission at the neuromuscular junction falls, the muscle relaxes and nervous excitability quietens. From that single principle its benefit in the convulsions of pregnancy and in asthma is understood, and so is its danger: an excess relaxes every muscle including the muscles of breathing, and slows conduction in the heart until it stops.'
  },
  effects: {
    ar: 'أشهر ما يشعر به المريض عند إعطائه توهّج الوجه وسخونة تسري في الجسم، وهذا معروف ويمضي. وقد يهبط الضغط إن أُعطي سريعاً، ويأتي غثيان وصداع ونُعاس وضعف عامّ. أما الأثر الذي يُراقَب فعلاً فهو زيادة المغنيسيوم في الدم، وعلاماتها تظهر بترتيب معروف: يغيب ردّ فعل الركبة أولاً، ثم يبطؤ التنفّس، ثم يرتخي الجسم كلّه، ثم يتوقّف القلب. ولهذا يُفحص ردّ فعل الركبة والتنفّس ومقدار البول أثناء العلاج.',
    en: 'The best known sensation when it is given is flushing of the face and a warmth spreading through the body, which is familiar and passes. Blood pressure may fall if it is given quickly, and nausea, headache, drowsiness and general weakness may follow. The effect that is actually watched for is a rise of magnesium in the blood, whose signs appear in a known order: the knee reflex disappears first, then breathing slows, then the whole body goes limp, then the heart stops. That is why the knee reflex, the breathing and the urine output are checked during treatment.'
  },
  warning: {
    ar: 'هذا دواء يُعطى تحت مراقبة، وأهمّ ما ينبغي أن يُقال للطبيب أو الممرّض في الحال: إن صار التنفّس بطيئاً أو ضحلاً، أو جاء ضيق نفس، أو شعر المريض بضعف شديد لا يستطيع معه رفع رأسه أو ذراعه، أو تلعثم الكلام، أو ازدوج البصر، أو صار النبض بطيئاً أو غير منتظم، أو انقطع البول أو قلّ قلّة واضحة. وترياق زيادته موجود وهو الكالسيوم في الوريد، لكنه لا يُغني عن الملاحظة المبكّرة، فالتأخّر هو الخطر لا الدواء نفسه.',
    en: 'This is a medicine given under supervision, and the most important things to tell the doctor or nurse at once are: if breathing becomes slow or shallow, if breathlessness appears, if the patient feels so weak that they cannot lift their head or arm, if speech slurs, if vision doubles, if the pulse becomes slow or irregular, or if urine stops or falls markedly. An antidote for an excess exists and it is intravenous calcium, but it is no substitute for noticing early, because the danger is the delay rather than the medicine itself.'
  },
  interact: {
    ar: 'يزيد أثره في إرخاء العضلة إلى حدّ خطر مع مرخيات العضلات المستعملة في التخدير، فيجب أن يعرف طبيب التخدير أن المريضة عليه. ويتضاعف تثبيط الجهاز العصبي مع المهدّئات والأفيونات. وقد يهبط الضغط زيادةً مع حاصرات قنوات الكالسيوم. وفي المقابل تزيد أدوية كثيرة طرحه في البول فتخفض مستواه: مدرّات البول، والأمينوغليكوزيدات، والأمفوتيريسين ب، والسيكلوسبورين، والسيسبلاتين، والكحول. والكالسيوم في الوريد هو مضادّ أثره عند الزيادة.',
    en: 'Its muscle-relaxing effect is increased to a dangerous degree by the muscle relaxants used in anaesthesia, so the anaesthetist must know the patient is on it. Depression of the nervous system is doubled with sedatives and opioids. Blood pressure may fall further with calcium channel blockers. In the other direction, many medicines increase its loss in the urine and so lower its level: diuretics, aminoglycosides, amphotericin B, ciclosporin, cisplatin and alcohol. Intravenous calcium is the counter to its effect when there is too much.'
  },
  avoid: {
    ar: 'لا يُعطى لمن عنده حصار في توصيل القلب لأنه يزيد بطء التوصيل، ولا لمريض الوهن العضلي الوبيل لأنه يُفقده قوّة العضلة، ولا لمن تحسّس منه. ويلزم تعديله ومراقبته الشديدة في القصور الكلوي الشديد لأن الكلية وحدها هي التي تطرحه فتراكمه فيها سريع. ونشرته تحذّر من الإعطاء المتّصل الطويل في الحمل لغير سبب التشنّج، لأنه يخفض كالسيوم الجنين ويُضعف عظامه وقد يُحدث كسوراً عند المولود. وتوقيت إيقافه قرب الولادة يقرّره الفريق الطبي.',
    en: 'It is not given to anyone with heart block because it deepens the delay in conduction, nor to a patient with myasthenia gravis because it takes away their muscle strength, nor to anyone allergic to it. It must be adjusted and closely monitored in severe kidney failure, because the kidney alone excretes it and so it accumulates quickly there. Its label warns against prolonged continuous administration in pregnancy for reasons other than convulsions, because it lowers the fetal calcium, weakens the bones and may cause fractures in the newborn. The timing of stopping it near delivery is decided by the medical team.'
  },
  updated: '2026-09-10',
  src: [
    'https://www.ncbi.nlm.nih.gov/books/NBK554553/',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=752f55bb-c4ca-4545-94b3-3deea66888d4'
  ]
};

RX_BODY['levodopa-carbidopa'] = {
  what: {
    ar: 'هذا دواء مركّب من مادتين: الليفودوبا وهي أصل الدوبامين الذي تحوّله خلايا الدماغ إلى دوبامين، والكاربيدوبا التي لا تدخل الدماغ ولا تعالج شيئاً بنفسها، بل تمنع تكسّر الليفودوبا في الجسم قبل وصولها إلى الدماغ. وبهذه الحيلة يصل من الليفودوبا إلى الدماغ أكثر، فتكفي كمية أقلّ ويقلّ الغثيان والقيء الذي كان يرافقها وحدها. يأتي أقراصاً عادية وممتدة المفعول ومتفتّتة في الفم وهلاماً معوياً.',
    en: 'This medicine is a combination of two substances: levodopa, the precursor that brain cells convert into dopamine, and carbidopa, which does not enter the brain and treats nothing by itself but prevents levodopa from being broken down in the body before it reaches the brain. By that device more of the levodopa arrives in the brain, so a smaller amount suffices and there is less of the nausea and vomiting that accompanied levodopa alone. It comes as ordinary and extended-release tablets, orally disintegrating tablets, and an intestinal gel.'
  },
  why: {
    ar: 'يُوصف لأعراض مرض باركنسون، ولحالات تشبهه ناتجة عن التهاب الدماغ أو عن أذى الجهاز العصبي بالتسمّم بأول أكسيد الكربون أو المنغنيز. وهو أنجع ما وُجد لأعراض المرض: يخفّ به الرجفان والتيبّس وبطء الحركة فيستعيد المريض شيئاً من استقلاله. لكنه لا يشفي المرض ولا يوقف تقدّمه، بل يعوّض ما نقص. وبعد سنوات يصير أثره أقصر فتظهر فترات يعود فيها التيبّس قبل الموعد التالي، وهذا يُدار بتعديل الخطة لا بترك الدواء.',
    en: 'It is prescribed for the symptoms of Parkinson disease and for conditions resembling it that follow encephalitis or nervous system injury from carbon monoxide or manganese poisoning. It is the most effective thing found for the symptoms: tremor, stiffness and slowness of movement all ease with it, and the patient regains something of their independence. But it does not cure the disease or halt its progress; it replaces what has been lost. After years its effect becomes shorter, so periods appear in which the stiffness returns before the next dose is due, and that is managed by adjusting the plan rather than abandoning the medicine.'
  },
  how: {
    ar: 'في مرض باركنسون تموت تدريجياً خلايا في منطقة من الدماغ تُسمّى المادة السوداء، وهي التي تصنع الدوبامين، وهو الناقل الذي تُنسّق به الحركة. فحين يقلّ الدوبامين تختلّ دوائر الحركة فيظهر الرجفان والتيبّس والبطء. ولا يمكن إعطاء الدوبامين نفسه لأنه لا يعبر الحاجز الدماغي، فتُعطى الليفودوبا لأنها تعبره ثم تتحوّل داخل الدماغ إلى دوبامين. والكاربيدوبا تُغلق طريق التحوّل خارج الدماغ فيبقى النصيب الأكبر للدماغ.',
    en: 'In Parkinson disease the cells of a region of the brain called the substantia nigra die gradually, and those are the cells that make dopamine, the messenger by which movement is coordinated. As dopamine falls the movement circuits go out of balance and tremor, stiffness and slowness appear. Dopamine itself cannot be given because it does not cross the blood-brain barrier, so levodopa is given instead because it does cross and is then converted inside the brain into dopamine. Carbidopa closes the conversion route outside the brain, so the larger share is left for the brain.'
  },
  effects: {
    ar: 'من آثاره الدوخة وقلّة الشهية والإسهال أو الإمساك وجفاف الفم وتغيّر الطعم، والصداع والوهن وصعوبة النوم والأحلام المزعجة، والنسيان والتشوّش والعصبية. وقد يصبغ العرق والبول واللعاب بلون داكن وهذا لا يضرّ. وأشهر أثر يظهر مع طول الاستعمال حركات لا إرادية في الفم واللسان والوجه والرأس والرقبة والأطراف. وقد تظهر عند بعض الناس رغبات قهرية في المقامرة أو الشراء أو الأكل أو زيادة في الاندفاع الجنسي، وهذا أثر معروف للدواء لا عيب في صاحبه، ويُذكر للطبيب. وقد يهبط الضغط عند الوقوف فيسبّب دوخة وسقوطاً.',
    en: 'Its effects include dizziness, loss of appetite, diarrhoea or constipation, dry mouth and altered taste, headache, weakness, difficulty sleeping and unpleasant dreams, forgetfulness, confusion and nervousness. It may darken the sweat, urine and saliva, which does no harm. The best known effect with long use is involuntary movements of the mouth, tongue, face, head, neck, arms and legs. Some people develop compulsive urges to gamble, to spend, to eat or a rise in sexual impulse, and this is a known effect of the medicine rather than a fault in the person, and should be mentioned to the doctor. Blood pressure may also fall on standing, causing dizziness and falls.'
  },
  warning: {
    ar: 'راجع طبيبك بلا تأخير عند حركات لا إرادية جديدة في الفم أو اللسان أو الأطراف، أو هلوسة، أو أفكار إيذاء النفس، أو نوم مفاجئ يغلبك في وسط النهار أثناء عمل أو قيادة. واطلب الطوارئ عند ألم صدر أو خفقان أو اضطراب نبض أو تعرّق غزير أو ضيق نفس، وعند براز أسود أو مدمّى أو قيء أو ألم بطن شديد. والأخطر: لا توقف الدواء ولا تُنقصه فجأة أبداً، فقد ينشأ عنه حمّى وتيبّس عضلي شديد وحركات شاذّة وتشوّش، وهذه حالة طوارئ.',
    en: 'See your doctor without delay for new involuntary movements of the mouth, tongue or limbs, for hallucinations, for thoughts of self-harm, or for sudden sleep that overtakes you in the middle of the day at work or at the wheel. Seek emergency care for chest pain, palpitations, disturbed heart rhythm, heavy sweating or breathlessness, and for black or bloody stools, vomiting or severe abdominal pain. And most dangerous of all: never stop the medicine or cut it down suddenly, because that can bring on fever, severe muscle rigidity, abnormal movements and confusion, which is an emergency.'
  },
  interact: {
    ar: 'لا يُجمع مع مثبّطات المونوأمين أوكسيداز، ولا يُبدأ قبل أن تمضي مدّة كافية بعد إيقافها كما يحدّدها الطبيب. وتُضعف مفعوله بعض مضادات الذهان وأدوية الغثيان كالميتوكلوبراميد لأنها تحجب الدوبامين، وكذلك حديد المكمّلات فيُفصل عنه في الوقت. ومضادات الهيستامين قد تتعارض معه فيُسأل عنها. والأطعمة عالية البروتين تؤخّر امتصاصه فيقلّ أثره، ولا يعني ذلك ترك البروتين بل تنظيم توقيته مع الطبيب أو أخصائي التغذية.',
    en: 'It is not combined with monoamine oxidase inhibitors and is not started until enough time has passed since they were stopped, as the doctor determines. Its effect is weakened by some antipsychotics and by anti-sickness medicines such as metoclopramide because they block dopamine, and by iron supplements, which are therefore separated from it in time. Antihistamines may interact with it and should be asked about. High-protein foods delay its absorption and so reduce its effect, which does not mean giving up protein but arranging its timing with the doctor or dietitian.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس منه، وتمنعه نشرته في الزرق ضيّق الزاوية، ولا يُجمع مع مثبّطات المونوأمين أوكسيداز غير الانتقائية. ويلزم الحذر ومتابعة ضغط العين في الزرق واسع الزاوية، والحذر عند سابقة سرطان الجلد الميلانيني أو نموّ جلدي غير مفسّر لأن نشرته تنبّه على ذلك، وعند أمراض القلب واضطراب النظم وأمراض الأوعية والكبد والكلى، وعند قرحة المعدة لخطر النزف الهضمي، وعند سابقة نوبات صرعية. ومن يعمل عملاً يحتاج يقظة يجب أن يعرف أن الدواء قد يُغلبه نوماً بلا إنذار. وفي الحمل والرضاعة لا يُؤخذ إلا بقرار طبيب.',
    en: 'It is not for anyone allergic to it, its label rules it out in narrow-angle glaucoma, and it is not combined with nonselective monoamine oxidase inhibitors. Caution and monitoring of eye pressure are needed in wide-angle glaucoma, along with caution in a past history of melanoma or any unexplained skin growth because its label flags this, in heart disease, rhythm disturbance and diseases of the blood vessels, liver and kidneys, in stomach ulcer because of the risk of gastrointestinal bleeding, and in a past history of seizures. Anyone whose work demands alertness must know that the medicine may overtake them with sleep without warning. In pregnancy and breastfeeding it is taken only on a doctor decision.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a601068.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b17b028-964a-473c-823d-81423535bd66'
  ]
};

RX_BODY['biperiden'] = {
  what: {
    ar: 'البيبيريدين من مجموعة تُسمّى مضادات الكولين، ويأتي أقراصاً وحقناً. وهو لا يعوّض الدوبامين الناقص كما تفعل الليفودوبا، بل يعمل من الطرف الآخر: يحجب مستقبلات الأسيتيل كولين في مراكز الحركة داخل الدماغ فيعيد التوازن بين هذا الناقل والدوبامين. ولهذا وُصف قديماً في باركنسون، وصار اليوم أكثر ما يُستعمل فيه ضبط تشنّجات الحركة والتيبّس التي تسبّبها بعض أدوية النفس، وهو فيها سريع النفع.',
    en: 'Biperiden belongs to a group called the anticholinergics and comes as tablets and injection. It does not replace the missing dopamine the way levodopa does; it works from the other end, blocking acetylcholine receptors in the movement centres of the brain and so restoring the balance between that messenger and dopamine. This is why it was prescribed in Parkinson disease in earlier times, whereas today its commonest use is controlling the movement spasms and stiffness caused by certain psychiatric medicines, in which it acts quickly.'
  },
  why: {
    ar: 'تقول نشرته إنه يُستعمل لعلاج مرض باركنسون بإرخاء تشنّج العضلات وضبط الرجفة، ولضبط التشنّج والرجفة التي تسبّبها بعض الأدوية. وهذا الوجه الثاني هو أكثر استعماله عملياً: مريض يأخذ دواءً للنفس فتتشدّ عضلات رقبته أو عينه أو لسانه، أو تظهر عليه رجفة وتيبّس يشبهان باركنسون، فيُعطى البيبيريدين. ولا يُستعمل لعلاج المرض النفسي نفسه، بل لأثر دوائه على الحركة، ولهذا لا يُوقف دواء النفس من تلقاء النفس.',
    en: 'Its leaflet states that it is used to treat Parkinson disease by relaxing muscle spasm and controlling twitching, and to control the twitching and spasm caused by some medicines. That second face is its commonest use in practice: a patient takes a psychiatric medicine and the muscles of the neck, eye or tongue tighten, or a tremor and stiffness resembling Parkinson disease appear, and biperiden is given. It is not used to treat the psychiatric illness itself but the effect of its medicine on movement, which is why the psychiatric medicine is never stopped on the patient own initiative.'
  },
  how: {
    ar: 'في مراكز الحركة العميقة من الدماغ يعمل ناقلان في كفّتين: الدوبامين والأسيتيل كولين. فإن نقص الدوبامين كما في باركنسون، أو حُجب بدواء نفسي، رجحت كفّة الأسيتيل كولين فظهرت الرجفة والتيبّس والتشنّج. ويعمل البيبيريدين بمنافسة الأسيتيل كولين على مستقبلاته في هذه المراكز فيخفض كفّته فيعود التوازن. وهو لا يفرّق بين مستقبلات الدماغ ومستقبلات الجسم، ومن هنا جاءت آثاره: جفاف الفم، وضبابة البصر، والإمساك، وحصر البول.',
    en: 'In the deep movement centres of the brain two messengers work as two sides of a scale: dopamine and acetylcholine. If dopamine falls as it does in Parkinson disease, or is blocked by a psychiatric medicine, the acetylcholine side tips down and tremor, stiffness and spasm appear. Biperiden works by competing with acetylcholine at its receptors in those centres, lowering its side of the scale so the balance returns. It does not distinguish between the receptors of the brain and those of the body, and from that come its effects: dry mouth, blurred vision, constipation and urinary retention.'
  },
  effects: {
    ar: 'نشرته تذكر أن آثاره تظهر خاصّة في بداية العلاج وإذا زيدت الكمية بسرعة. ومنها جفاف الفم، ويخفّ بشرب رشفات متكرّرة أو بمضغ علك بلا سكر. ومنها اضطراب المعدة والغثيان، والنُّعاس والدوخة واضطراب الذاكرة، وتسارع النبض، وتوتّر العضلات، وقلّة التعرّق. ومنها اضطراب البصر واتّساع الحدقة مع حساسية للضوء، والإمساك، وصعوبة التبوّل، وطفح تحسّسي. وعند من عنده ضعف في وظائف الدماغ يكثر الهياج، وهنا قد يلزم إنقاص الكمية.',
    en: 'Its leaflet notes that its effects appear especially at the start of treatment and if the amount is increased too quickly. They include dry mouth, which is eased by frequent small sips or by chewing sugar-free gum; stomach upset and nausea; drowsiness, dizziness and disturbance of memory; a faster pulse; muscle twitching; and reduced sweating. They also include disturbed vision and dilated pupils with sensitivity to light, constipation, difficulty passing urine and an allergic rash. In people whose brain function is impaired, excitation is frequent, and there the amount may need reducing.'
  },
  warning: {
    ar: 'نشرته تقول: توقّف عن الدواء واطلب المساعدة الطبية العاجلة إذا ظهر تفاعل تحسّسي بصعوبة تنفّس أو تورّم الشفة والوجه أو طفح وحكّة، أو زادت النوبات والاختلاجات، أو ظهرت حركات لا إرادية، أو اضطرب توازن الحركة والكلام، أو صار النبض بطيئاً، أو صعُب تفريغ المثانة خصوصاً عند من عنده تضخّم بروستاتا. وارتفاع ضغط العين وارد فيلزم فحصه عند مختصّ دورياً. ولا يُوقف الدواء دفعة واحدة بل بالتدريج.',
    en: 'Its leaflet says: stop the medicine and seek urgent medical help if an allergic reaction appears with difficulty breathing, swelling of the lips or face, or rash and itching; if fits and convulsions increase; if involuntary movements appear; if the coordination of movement and speech is disturbed; if the pulse becomes slow; or if emptying the bladder becomes difficult, particularly in someone with an enlarged prostate. A rise in the pressure inside the eye is possible, so it should be checked periodically by a specialist. And the medicine is not stopped all at once but gradually.'
  },
  interact: {
    ar: 'أخبر طبيبك وصيدليك بكل ما تأخذه ولو كان بلا وصفة، فنشرته تسمّي أدوية بعينها ينبغي الإخبار عنها قبل البدء: أدوية اضطرابات الحركة الأخرى كالليفودوبا، وباقي أدوية باركنسون، وأدوية الأمراض النفسية والعصبية، وأدوية عسر الهضم ومغص التشنّج، وأدوية الغثيان والقيء كالميتوكلوبراميد، ومضادات الهيستامين المستعملة للحساسية والطفح، والكينيدين المستعمل لاضطراب النظم. ويُتجنّب الكحول معه لأنه يزيد النُّعاس.',
    en: 'Tell your doctor and pharmacist everything you take, even without prescription, because its leaflet names particular medicines to declare before starting: other medicines for movement disorders such as levodopa, the remaining anti-Parkinson drugs, treatments for nervous and psychiatric disorders, medicines for indigestion and spasmodic stomach pain, anti-sickness medicines such as metoclopramide, antihistamines used for allergies and rashes, and quinidine used for abnormal heart rhythm. Alcohol is avoided with it because it adds to the drowsiness.'
  },
  avoid: {
    ar: 'نشرته تمنعه عند التحسّس منه أو من أي من مكوّناته، وعند الزرق، وعند اضطراب نبض القلب أو أي مشكلة قلبية أخرى، وعند تضيّق أو مشكلة في المعدة أو الأمعاء، وعند الرجل الذي عنده تضخّم حميد في البروستاتا. ويلزم استشارة الطبيب عند اضطراب الغدة الدرقية. وأكثر الناس حساسية له كبار السنّ الواهنون خصوصاً من ضعفت وظائف دماغهم، ومن عنده قصور قلب أو تسارع نبض أو صرع. وفي الحمل والرضاعة لا يُستعمل إلا إذا رآه الطبيب ضرورياً.',
    en: 'Its leaflet rules it out in allergy to it or to any of its ingredients, in glaucoma, in an abnormal heartbeat or any other heart problem, in a narrowing or other problem of the stomach or bowels, and in a man with a benign enlargement of the prostate. The doctor must be consulted in thyroid disorder. The people most sensitive to it are the frail elderly, especially those whose brain function has declined, along with anyone who has heart failure, a fast heartbeat or epilepsy. In pregnancy and breastfeeding it is used only if the doctor considers it essential.'
  },
  updated: '2026-09-10',
  src: [
    'https://assets.hpra.ie/products/Human/25753/7b4c8a19-be22-4617-85c8-a3a9a9d45750.pdf',
    'https://www.ncbi.nlm.nih.gov/books/NBK548257/'
  ]
};

RX_BODY['baclofen'] = {
  what: {
    ar: 'الباكلوفين مرخي عضلات هيكلية يُصرف بوصفة، ويأتي أقراصاً ومحلولاً فمياً، وله شكل يُضخّ مباشرة إلى سائل النخاع الشوكي بمضخة تُزرع تحت الجلد لمن كان تشنّجه شديداً. وهو لا يعمل على العضلة نفسها بل على أعصاب النخاع الشوكي، فيُنقص عدد التشنّجات وشدّتها ويخفّف الألم ويحسّن الحركة. وهو دواء أعراض لا دواء سبب: يخفّف الشدّ ولا يعالج المرض العصبي الذي أنشأه.',
    en: 'Baclofen is a skeletal muscle relaxant dispensed on prescription, available as tablets and an oral solution, with a form pumped directly into the spinal fluid through a pump implanted under the skin for anyone whose spasticity is severe. It does not act on the muscle itself but on the nerves of the spinal cord, decreasing the number and severity of spasms, relieving pain and improving movement. It is a medicine for the symptom and not for the cause: it eases the tightness without treating the nerve disease that created it.'
  },
  why: {
    ar: 'يُوصف للألم وأنواع من التشنّج العضلي، أي التيبّس والشدّ الذي ينشأ عن التصلّب المتعدّد وإصابات الحبل الشوكي وأمراض الحبل الشوكي الأخرى، ويُستعمل كذلك في الشلل الدماغي ومرض العصبون الحركي. وهذا التشنّج ليس مجرّد إزعاج: هو يمنع الجلوس والنقل والعناية بالجسم ويسبّب ألماً وتقفّعاً في المفاصل. وحدّ الفائدة معه أن قليلاً من الشدّ قد يكون نافعاً لمن يعتمد عليه في الوقوف، فالإرخاء المفرط قد يُفقده الحركة.',
    en: 'It is prescribed for pain and for certain kinds of spasticity, that is the stiffness and tightness arising from multiple sclerosis, spinal cord injuries and other diseases of the spinal cord, and it is also used in cerebral palsy and motor neurone disease. This spasticity is not a mere nuisance: it prevents sitting, transferring and caring for the body, and it causes pain and contracture of the joints. The limit of its benefit is that a little tightness may be useful to someone who leans on it to stand, so excessive relaxation can cost them their mobility.'
  },
  how: {
    ar: 'في النخاع الشوكي حلقات انعكاسية تُبقي العضلة مشدودة، وفي أمراض الأعصاب تتحرّر هذه الحلقات من كبح الدماغ فتصير الشدّة دائمة. يعمل الباكلوفين على مستقبل غابا من النوع باء في نهايات الأعصاب داخل النخاع، فيخفّف إطلاق النواقل المنبّهة التي تغذّي هذه الحلقات، فتخفّ الشدّة ويقلّ التشنّج. ولأن مستقبلات غابا موجودة في الدماغ أيضاً فهو يُنعِس ويُدوّخ ويُوهن، وهذا أصل أكثر آثاره الجانبية.',
    en: 'The spinal cord contains reflex loops that keep muscle under tension, and in nerve disease those loops are freed from the braking of the brain so the tightness becomes permanent. Baclofen acts on the GABA type B receptor at nerve endings within the cord, reducing the release of the exciting messengers that feed those loops, so the tension eases and the spasms lessen. Because GABA receptors exist in the brain as well, it also causes drowsiness, dizziness and weakness, and that is the origin of most of its side effects.'
  },
  effects: {
    ar: 'من آثاره الشائعة الدوخة والوهن والتشوّش والصداع والغثيان والإمساك وصعوبة النوم والتعب وكثرة التبوّل، وجفاف الفم واضطراب البصر وتغيّر المزاج وألم العضلات أو ضعفها. والنُّعاس أكثر ما يظهر في البداية ومع زيادة الكمية، ولهذا لا تُقاد معه سيارة حتى يُعرف أثره. وضعف العضلة أثر ذو وجهين: هو المطلوب في العضلة المتشنّجة وغير مطلوب في العضلة التي يعتمد عليها المريض في الوقوف والنقل، فيُوازن مع الطبيب.',
    en: 'Its common effects include dizziness, weakness, confusion, headache, nausea, constipation, difficulty sleeping, tiredness and passing urine often, along with dry mouth, disturbed vision, mood changes and muscle pain or weakness. Drowsiness appears mostly at the start and as the amount is raised, which is why no car is driven with it until its effect is known. Muscle weakness has two faces: it is what is wanted in the spastic muscle and unwanted in the muscle the patient relies on to stand and transfer, so it is balanced with the doctor.'
  },
  warning: {
    ar: 'اطلب الطوارئ فوراً عند صعوبة تنفّس أو تورّم الوجه واللسان أو طفح مع ضيق نفس. وراجع الطبيب بلا تأخير عند هلوسة أو تشوّش شديد أو أفكار إيذاء النفس، أو نوبة اختلاج جديدة، أو اصفرار العين والجلد. والأخطر في هذا الدواء إيقافه المفاجئ بعد استعمال طويل: قد يُحدث اختلاجاً وحمّى وتشوّشاً وتيبّساً عضلياً وهلوسة، وانسحاب مضخّة النخاع حالة طوارئ. فإن انقطع الدواء أو تعطّلت المضخّة أو ظهرت هذه العلامات فاذهب إلى المستشفى في الحال.',
    en: 'Get emergency help at once for difficulty breathing, swelling of the face and tongue, or a rash with breathlessness. See the doctor without delay for hallucinations, severe confusion or thoughts of self-harm, a new convulsion, or yellowing of the eyes and skin. The greatest danger with this medicine is stopping it abruptly after long use: that can cause convulsions, fever, confusion, muscle rigidity and hallucinations, and withdrawal from an intrathecal pump is an emergency. So if the medicine runs out, the pump fails, or these signs appear, go to hospital immediately.'
  },
  interact: {
    ar: 'يتضاعف نُعاسه وتثبيطه مع الكحول والأفيونات والمهدّئات والمنوّمات ومضادات الهيستامين المنوّمة، والكحول يُترك معه. ونشرته تنبّه على الجمع مع مضادات الاكتئاب ومضادات القلق ومضادات الذهان وأدوية الصرع، وقد يحتاج الطبيب إلى تعديلها ومتابعتها. ويُنبَّه كذلك على الليثيوم والأميتربتيلين وأدوية باركنسون ومرخيات العضلات الأخرى وخافضات الضغط كالديلتيازيم، لأن الجمع قد يزيد هبوط الضغط أو يغيّر الأثر.',
    en: 'Its drowsiness and depressant effect are doubled by alcohol, opioids, tranquillisers, sleeping tablets and sedating antihistamines, and alcohol should be given up with it. Its leaflet flags combination with antidepressants, anti-anxiety medicines, antipsychotics and antiepileptics, which the doctor may need to adjust and monitor. Caution is also flagged over lithium, amitriptyline, anti-Parkinson medicines, other muscle relaxants and blood pressure medicines such as diltiazem, because the combination may deepen a fall in blood pressure or alter the effect.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس منه. ويلزم إخبار الطبيب عند اعتلال الكلى لأن الدواء يُطرح بها فيتراكم، وعند الصرع لأنه قد يُنقص عتبة النوبة، وعند سابقة سكتة دماغية أو شلل دماغي أو باركنسون أو مرض نفسي أو سكّري أو اعتماد على مواد. وكبار السنّ أكثر تأثّراً بالنُّعاس والتشوّش وخطر السقوط. وفي الحمل يُؤخذ إذا رجح نفعه على ضرره، ويُراقَب المولود بعد الولادة من أعراض الانسحاب. ولا تُقاد سيارة ولا تُشغّل آلة حتى يُعرف أثره.',
    en: 'It is not for anyone allergic to it. The doctor must be told about kidney disease, because the drug is excreted by the kidney and so accumulates; about epilepsy, because it may lower the seizure threshold; and about any past stroke, cerebral palsy, Parkinson disease, psychiatric illness, diabetes or substance dependence. Older adults are more affected by drowsiness, confusion and the risk of falling. In pregnancy it is taken if the benefit outweighs the harm, and the baby is watched after birth for withdrawal symptoms. No car is driven and no machine used until its effect is known.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682530.html',
    'https://www.nhs.uk/medicines/baclofen/'
  ]
};

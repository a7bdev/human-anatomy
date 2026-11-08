/* ============================================================
   موسوعة الأدوية — أجسام بطاقات دفعة الغدد الثانية
   rx/rx-endo2.js   (يُحمَّل عند فتح البطاقة)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. الجرعة يحدّدها طبيب أو صيدلي.
   ============================================================ */

var RX_BODY = window.RX_BODY || {};

RX_BODY['levothyroxine'] = {
  what: {
    ar: 'الليفوثيروكسين نسخة صناعية من الثيروكسين، وهو الهرمون الذي تصنعه الغدة الدرقية في مقدّمة الرقبة. لا يُنشّط الغدة ولا يوقظها، بل يحلّ محلّ ما عجزت عن صنعه فيصير الجسم كأنّ غدّته تعمل. يأتي أقراصاً وسائلاً، ويُؤخذ على معدة خالية قبل أول طعام أو قهوة في اليوم لأن الأكل والألياف وفول الصويا تقلّل امتصاصه. وهو علاج طويل يمتدّ غالباً مدى العمر، ويُضبط بتحليل دم دوري لا بالإحساس وحده.',
    en: 'Levothyroxine is a synthetic copy of thyroxine, the hormone made by the thyroid gland at the front of the neck. It does not stimulate or awaken the gland; it replaces what the gland can no longer make, so the body behaves as though its thyroid were working. It comes as tablets and liquid and is taken on an empty stomach before the first food or coffee of the day, because food, fibre and soya reduce its absorption. It is a long treatment, usually lifelong, adjusted by periodic blood tests rather than by feeling alone.'
  },
  why: {
    ar: 'يُوصف لقصور الغدة الدرقية بكل أسبابه: التهاب هاشيموتو المناعي، وما بعد استئصال الغدة أو معالجتها باليود المشعّ، والقصور الخلقي عند المولود الذي يُكشف بمسح حديثي الولادة ويُبدأ علاجه سريعاً حفاظاً على نموّ دماغه. ويُعطى في قصور الغدة النخامية حين ينقطع الأمر الصادر إلى الدرقية، وفي بعض حالات تضخّم الدراق، وبعد سرطان الدرقية لكبح الهرمون المحفّز لها. وعليه تحذير رسمي صريح: لا يُستعمل للتنحيف ولا يُضاف إلى خلطات إنقاص الوزن.',
    en: 'It is prescribed for an underactive thyroid from any cause: autoimmune Hashimoto thyroiditis, the state after the gland is removed or treated with radioactive iodine, and congenital hypothyroidism in the newborn, which is found by newborn screening and treated promptly to protect brain development. It is given in pituitary failure when the signal to the thyroid is cut off, in some cases of goitre, and after thyroid cancer to suppress the stimulating hormone. It carries an explicit official warning: it is not to be used for weight loss or added to slimming regimens.'
  },
  how: {
    ar: 'الغدة الدرقية تصنع الثيروكسين، ويحوّله الجسم إلى صورته الأنشط، فيدخل خلايا الجسم كلها ويضبط سرعة الأيض فيها: توليد الحرارة، وسرعة نبض القلب، وحركة الأمعاء، وقوّة العضل، ونموّ دماغ الجنين والرضيع. وحين ينقص الهرمون يبطؤ كل شيء، فيأتي التعب والشعور بالبرد وزيادة الوزن والإمساك وتساقط الشعر وثقل المزاج. والقرص يعيد المستوى إلى مكانه فترجع هذه الوظائف تدريجياً على مدى أسابيع، لا في يوم واحد.',
    en: 'The thyroid makes thyroxine, which the body converts to its more active form; it then enters every cell and sets the pace of metabolism there: heat production, heart rate, bowel movement, muscle strength, and the brain growth of the fetus and infant. When the hormone falls short everything slows, bringing fatigue, feeling cold, weight gain, constipation, hair loss and a heavy mood. The tablet restores the level, and those functions return gradually over weeks, not in a single day.'
  },
  effects: {
    ar: 'أغلب ما يُشكى منه ليس أثراً جانبياً للدواء بل علامة أن المقدار صار أكثر من حاجة الجسم: خفقان، وأرق، وقلق وعصبية، وتعرّق وسوء تحمّل للحرّ، ورعشة في اليد، ونقص وزن، وإسهال، وصداع، وألم مفاصل. وقد يتساقط الشعر في الأشهر الأولى ثم يعود. وإن كان المقدار أقلّ من الحاجة عادت أعراض الخمول نفسها. وكلا الحالين يُكشف بالتحليل ويُصحَّح بتعديل يقرّره الطبيب، لا باجتهاد المريض على القرص.',
    en: 'Most complaints are not side effects of the drug but signs that the amount has exceeded the body’s need: palpitations, insomnia, anxiety and irritability, sweating and poor tolerance of heat, hand tremor, weight loss, diarrhoea, headache and joint pain. Hair may shed in the first months and then return. If the amount is below the need, the symptoms of an underactive thyroid come back. Both states are revealed by a blood test and corrected by an adjustment the doctor decides, not by the patient’s own judgement on the tablet.'
  },
  warning: {
    ar: 'اطلب الطوارئ فوراً عند: ألم في الصدر أو ضيق نفس أو خفقان شديد غير منتظم؛ أو حرارة مرتفعة مع تسارع النبض والارتباك والدوخة فقد تكون عاصفة درقية؛ أو طفح وشرى وحكّة أو تورّم الوجه والشفتين والحلق أو صعوبة في البلع والكلام. وعند كبار السنّ وأصحاب ضيق الشريان التاجي يظهر ألم الصدر أول ما يظهر. وموعدٌ عادي غير عاجل يلزم عند عودة التعب والإمساك وزيادة الوزن، أو عند ظهور الأرق والرعشة. ولا تُوقف الدواء من نفسك ولو شعرت أنك تعافيت.',
    en: 'Seek emergency care at once for: chest pain, shortness of breath, or a strong irregular pounding of the heart; a high temperature with a racing pulse, confusion and dizziness, which may be a thyroid storm; or rash, hives and itching, swelling of the face, lips and throat, or difficulty swallowing and speaking. In older people and those with narrowed coronary arteries, chest pain is the first thing to appear. A routine, non-urgent appointment is needed if fatigue, constipation and weight gain return, or if insomnia and tremor appear. Never stop the medicine on your own, even if you feel recovered.'
  },
  interact: {
    ar: 'الكالسيوم والحديد ومضادات الحموضة ومثبّطات مضخّة البروتون والأدوية الرابطة للأحماض الصفراوية تلتقط الدواء داخل الأمعاء فتمنع امتصاصه، ولذلك يُفصل بينها وبينه بوقت كافٍ يحدّده الصيدلي. ويقوّي الليفوثيروكسين مفعول مميّعات الدم فيرتفع خطر النزف وتلزم مراقبة التخثّر. وقد تتغيّر حاجة مريض السكّري لدوائه بعد ضبط الدرقية. وتؤثّر في مستواه أدوية الصرع وعشبة سانت جون. ومن الطعام: القهوة وفول الصويا والألياف قرب موعد القرص.',
    en: 'Calcium, iron, antacids, proton pump inhibitors and bile-acid-binding medicines trap the drug inside the gut and block its absorption, so a sufficient gap must separate them, set by the pharmacist. Levothyroxine strengthens the effect of blood thinners, raising the risk of bleeding and requiring clotting checks. A diabetic patient’s need for their medicine may change once the thyroid is corrected. Epilepsy medicines and St John’s wort alter its level. From food: coffee, soya and fibre taken close to the tablet.'
  },
  avoid: {
    ar: 'لا يُبدأ في فرط نشاط الدرقية غير المعالَج، ولا في قصور الغدة الكظرية قبل تعويض الكورتيزون، لأن تسريع الأيض عندئذ قد يفجّر أزمة كظرية. وحذر شديد بعد جلطة قلبية حديثة ومع مرض الشريان التاجي واضطراب نظم القلب. ويُخبر المريض طبيبه إن كان عنده سكّري أو هشاشة عظام أو مرض كلى أو كبد أو مشكلة نزف أو فقر دم أو بورفيريا أو صعوبة بلع. أما الحمل والرضاعة فالدواء يستمر فيهما ولا يُوقف، لكن تزيد التحاليل لأن الحاجة إليه ترتفع في الحمل.',
    en: 'It is not started in untreated overactivity of the thyroid, nor in adrenal insufficiency before cortisol is replaced, because speeding up metabolism then may trigger an adrenal crisis. Great caution applies after a recent heart attack and with coronary artery disease and heart rhythm disorders. The patient should tell the doctor about diabetes, osteoporosis, kidney or liver disease, bleeding problems, anaemia, porphyria or difficulty swallowing. In pregnancy and breastfeeding the medicine is continued and not stopped, but testing increases because the need for it rises in pregnancy.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682461.html',
    'https://www.nhs.uk/medicines/levothyroxine/'
  ]
};

RX_BODY['methimazole'] = {
  what: {
    ar: 'الميثيمازول دواء مضاد للغدة الدرقية: لا يزيل الهرمون الموجود بل يمنع الغدة من صناعة المزيد. يأتي أقراصاً تُؤخذ مع الطعام، وهو الخيار الأول في فرط نشاط الدرقية عند أغلب الناس لأن أذاه الكبدي أقلّ من البديل الآخر. وقد يوصف بديلاً عنه في المنطقة دواء قريب اسمه الكاربيمازول يعمل بالطريقة نفسها. وهو علاج يمتدّ شهوراً وتُتابَع فيه تحاليل الدرقية وتعداد الدم بانتظام.',
    en: 'Methimazole is an antithyroid medicine: it does not remove the hormone already present but stops the gland from making more. It comes as tablets taken with food and is the first choice in an overactive thyroid for most people, because its liver harm is less than the other option. In this region a close relative called carbimazole, working the same way, may be dispensed instead. It is a treatment lasting months, with regular thyroid tests and blood counts.'
  },
  why: {
    ar: 'يُوصف لفرط نشاط الغدة الدرقية، سواء كان سببه داء جريفز المناعي أو دراقاً عقدياً يفرز الهرمون من تلقائه. ويُستعمل كذلك لتهدئة الغدة وتحضير المريض قبل استئصالها جراحياً أو قبل معالجتها باليود المشعّ، حتى لا تنطلق العاصفة الدرقية أثناء التدخّل. ويدخل في تدبير العاصفة الدرقية نفسها ضمن علاج مستشفى متكامل. وهو لا يشفي جريفز بل يكبح الغدة ويمنح المرض فرصة أن يهدأ من نفسه مع الوقت.',
    en: 'It is prescribed for an overactive thyroid, whether the cause is autoimmune Graves disease or a nodular goitre secreting hormone on its own. It is also used to quiet the gland and prepare the patient before surgical removal or before radioactive iodine treatment, so that a thyroid storm is not set off during the procedure. It has a place in the management of thyroid storm itself, within full hospital treatment. It does not cure Graves disease; it restrains the gland and gives the illness a chance to settle over time.'
  },
  how: {
    ar: 'تحتاج الغدة الدرقية إلى اليود لتصنع هرمونها، وتربطه بخميرة خاصة إلى بروتين مخزون داخلها. والميثيمازول يعطّل هذه الخميرة فيتوقّف ربط اليود وتقلّ الصناعة. لكنه لا يمسّ الهرمون المصنوع سلفاً والمخزون في الغدة، ولهذا لا يشعر المريض بالفرق فوراً بل بعد أسابيع حتى ينفد المخزون. ولذلك يضيف الطبيب في البداية دواءً يبطّئ النبض ويهدّئ الرعشة والخفقان ريثما يبدأ المضاد عمله الحقيقي.',
    en: 'The thyroid needs iodine to make its hormone, and binds it by a special enzyme onto a protein stored inside the gland. Methimazole disables that enzyme, so iodine binding stops and production falls. But it does not touch the hormone already made and stored in the gland, which is why the patient feels no immediate difference and only notices one after weeks, once the store runs out. For that reason the doctor often adds at the start a medicine that slows the pulse and calms tremor and palpitations until the antithyroid drug truly begins to work.'
  },
  effects: {
    ar: 'الشائع منها طفح جلدي وحكّة وشرى، وغثيان وقيء وألم في المعدة، وألم في المفاصل والعضلات، ودوخة وصداع، وتغيّر في حاسّة التذوّق، وتساقط شعر، وتورّم. وقد يتغيّر تعداد كريات الدم البيضاء والصفيحات تغيّراً بسيطاً يُرصد بالتحليل. وإن استمرّ الكبح أكثر من اللازم انقلبت الحال إلى خمول درقي بأعراضه: تعب وبرودة وزيادة وزن وإمساك، وهذا يُصحَّح بتعديل يقرّره الطبيب بعد التحليل.',
    en: 'The common ones are skin rash, itching and hives, nausea, vomiting and stomach pain, joint and muscle aches, dizziness and headache, a change in the sense of taste, hair loss and swelling. The white cell and platelet counts may shift slightly, which is picked up on testing. If the suppression goes further than needed, the state flips into an underactive thyroid with its symptoms: fatigue, feeling cold, weight gain and constipation, corrected by an adjustment the doctor decides after a test.'
  },
  warning: {
    ar: 'أوقف الدواء واطلب فحص تعداد دم في اليوم نفسه إن جاءك: التهاب حلق، أو حرارة، أو قشعريرة، أو قرح في الفم — فهذه علامات ندرة المحبّبات، وهي انهيار مفاجئ في كريات الدم البيضاء يهدّد الحياة وأكثر ما يقع في الشهور الأولى. واطلب الطبيب فوراً عند اصفرار العين أو الجلد، أو بول غامق، أو براز شاحب، أو ألم أعلى البطن من اليمين، أو فقدان شهية وغثيان مستمرّ — فهذه علامات كبد. وكذلك الكدمات والنزف بلا سبب. وتورّم الوجه والحلق مع ضيق نفس: طوارئ.',
    en: 'Stop the medicine and get a blood count the same day if you develop a sore throat, fever, chills or mouth ulcers — these are signs of agranulocytosis, a sudden life-threatening collapse of the white blood cells, most often in the first months. Call the doctor at once for yellowing of the eyes or skin, dark urine, pale stools, pain in the upper right abdomen, or loss of appetite with persistent nausea — these are liver signs. The same goes for bruising or bleeding without cause. Swelling of the face and throat with breathlessness is an emergency.'
  },
  interact: {
    ar: 'يزيد الميثيمازول فاعلية مميّعات الدم الفموية فيرتفع خطر النزف، وتلزم مراقبة زمن التخثّر خصوصاً قبل أي جراحة. ومع تحسّن فرط النشاط يتغيّر تعامل الجسم مع أدوية أخرى، فقد تحتاج حاصرات بيتا والديجوكسين وموسّع الشعب ثيوفيلين إلى إعادة ضبط من الطبيب. وأي دواء آخر معروف بكبح نخاع العظم يضاعف خطر ندرة المحبّبات فيُنبَّه إليه. ويُنسَّق توقيت الدواء مع معالجة اليود المشعّ لأن أحدهما يعطّل الآخر.',
    en: 'Methimazole increases the potency of oral blood thinners, raising bleeding risk, and clotting time must be watched, especially before any surgery. As the overactivity improves, the body handles other medicines differently, so beta blockers, digoxin and the bronchodilator theophylline may need the doctor to reset them. Any other drug known to suppress the bone marrow multiplies the risk of agranulocytosis and must be flagged. The timing of the drug is coordinated with radioactive iodine treatment, since each blunts the other.'
  },
  avoid: {
    ar: 'لا يُؤخذ عند ثبوت حساسية سابقة له. وأخطر ما فيه الحمل المبكّر: فهو يعبر المشيمة وقد يسبّب في الأشهر الأولى عيوباً خلقية منها غياب جزء من جلد فروة الرأس وتشوّهات في الوجه والجمجمة، ولذلك يُنقل الطبيب المريضة عندئذ إلى البديل. ونشرة المريض الأمريكية تقول لا يُستعمل في الحمل والرضاعة، بينما تذكر نشرة الدواء أن الرضّع لم تظهر عليهم آثار مع متابعة درقية منتظمة — والقرار للطبيب. وحذر مع مرض الكبد وانخفاض تعداد الدم.',
    en: 'It is not taken by anyone with a proven previous allergy to it. Its gravest issue is early pregnancy: it crosses the placenta and in the first months may cause birth defects, among them a missing patch of scalp skin and malformations of the face and skull, so the doctor moves the patient to the alternative at that stage. The American patient leaflet says it should not be used in pregnancy or breastfeeding, while the product label reports no effects seen in nursing infants with regular thyroid monitoring — the decision is the doctor’s. Caution with liver disease and low blood counts.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682464.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6f08df05-cc29-45ef-8f6e-12272bfbb0d7',
    'https://www.nhs.uk/medicines/carbimazole/common-questions-about-carbimazole/'
  ]
};

RX_BODY['propylthiouracil'] = {
  what: {
    ar: 'البروبيل ثيويوراسيل مضاد للغدة الدرقية من الفصيلة نفسها التي ينتمي إليها الميثيمازول، لكنه لم يعد الخيار الأول. عليه تحذير رسمي مؤطَّر بأذى كبدي شديد قد يبلغ الفشل الكبدي وزراعة الكبد والوفاة، في البالغين والأطفال معاً. ولذلك حُصر استعماله في حالات بعينها لا يصلح فيها غيره. يأتي أقراصاً، ويلزمه إشراف طبيب وتحاليل متابعة، ولا يُوقف ولا يُبدأ من تلقاء المريض.',
    en: 'Propylthiouracil is an antithyroid drug of the same family as methimazole, but it is no longer the first choice. It carries a boxed official warning of severe liver injury that may reach liver failure, transplantation and death, in adults and children alike. Its use has therefore been narrowed to particular situations where nothing else will serve. It comes as tablets, needs a doctor’s supervision and follow-up tests, and is neither started nor stopped on the patient’s own initiative.'
  },
  why: {
    ar: 'يُوصف لفرط نشاط الدرقية من داء جريفز أو الدراق العقدي السامّ لمن لم يحتمل الميثيمازول ولا تصلح له الجراحة ولا اليود المشعّ. وأشهر موضع له اليوم هو الأشهر الأولى من الحمل، لأن البديل قد يسبّب تشوّهات في هذه المرحلة بالذات. ويُستعمل أيضاً لتهدئة الأعراض تحضيراً لاستئصال الغدة أو لليود المشعّ. وتذكر نشرة الدواء أنه قد يكون علاجاً فعّالاً في العاصفة الدرقية لأنه يعطّل الهرمون خارج الغدة أيضاً.',
    en: 'It is prescribed for an overactive thyroid from Graves disease or toxic nodular goitre in people who could not tolerate methimazole and for whom neither surgery nor radioactive iodine is suitable. Its best-known place today is the first months of pregnancy, because the alternative may cause malformations at exactly that stage. It is also used to ease symptoms in preparation for removal of the gland or for radioactive iodine. The label notes it may be an effective treatment in thyroid storm, because it also blocks the hormone outside the gland.'
  },
  how: {
    ar: 'يمنع الدواء الخميرة التي تربط اليود داخل الغدة الدرقية، فتتوقّف صناعة الهرمون الجديد. ويزيد عليه أمراً يميّزه عن غيره: يعطّل أيضاً تحويل الهرمون في أنسجة الجسم من صورته المخزونة إلى صورته الأنشط، فيقلّ أثره في الخلايا حتى قبل أن ينفد مخزون الغدة. ولهذا يُذكر في نوبة العاصفة الدرقية. لكنه كسائر فصيلته لا يمسّ الهرمون المصنوع سلفاً، فالمريض لا يحسّ بالفرق في اليوم الأول بل بعد أسابيع.',
    en: 'The drug blocks the enzyme that binds iodine inside the thyroid, so the making of new hormone stops. It adds something that sets it apart: it also blocks the conversion of the hormone in the body’s tissues from its stored form to its more active one, so its effect in the cells falls even before the gland’s store is used up. That is why it is mentioned in a thyroid storm. But like the rest of its family it does not touch hormone already made, so the patient feels no difference on the first day, only after weeks.'
  },
  effects: {
    ar: 'من الشائع: غثيان وقيء، وألم في العضلات والمفاصل، وتساقط شعر، وتغيّر في حاسّة التذوّق، ودوخة، وخدر أو وخز في اليدين والقدمين، وطفح وحكّة، وتورّم في الرقبة. وقد يقلب الكبح الزائد الحال إلى خمول درقي بتعب وبرودة وزيادة وزن. وتظهر في التحاليل أحياناً تغيّرات في تعداد الدم. وهذه الأعراض العادية لا تلغي أن أخطر ما في الدواء صامت في بدايته: الكبد والدم، ولا يُكشفان إلا بالانتباه للعلامات وبالتحليل.',
    en: 'Common ones include nausea and vomiting, muscle and joint pain, hair loss, a change in the sense of taste, dizziness, numbness or tingling in the hands and feet, rash and itching, and swelling in the neck. Excess suppression may flip the state into an underactive thyroid with fatigue, cold intolerance and weight gain. Blood count changes sometimes show on testing. These ordinary symptoms do not cancel the fact that the drug’s gravest harms are silent at their start: the liver and the blood, revealed only by watching for the signs and by testing.'
  },
  warning: {
    ar: 'اطلب الطبيب في اليوم نفسه عند أي من علامات الكبد: حرارة، فقدان شهية، غثيان أو قيء، تعب غير معتاد، حكّة، بول غامق، براز شاحب، اصفرار العين أو الجلد، ألم أعلى البطن من اليمين. والتهاب الحلق مع الحرارة والقشعريرة يعني احتمال انهيار كريات الدم البيضاء ويستوجب تعداد دم عاجلاً. واطلب الطوارئ عند: بول دموي أو قلّة البول، أو سعال بدم أو ضيق نفس، أو طفح مؤلم متقشّر، أو تورّم الوجه والحلق — فقد تكون التهاب أوعية.',
    en: 'Call the doctor the same day for any liver sign: fever, loss of appetite, nausea or vomiting, unusual tiredness, itching, dark urine, pale stools, yellowing of the eyes or skin, or pain in the upper right abdomen. A sore throat with fever and chills means a possible collapse of the white blood cells and calls for an urgent blood count. Seek emergency care for blood in the urine or passing little urine, coughing blood or breathlessness, a painful peeling rash, or swelling of the face and throat — these may be a vasculitis.'
  },
  interact: {
    ar: 'يزيد الدواء فاعلية مميّعات الدم الفموية فيرتفع خطر النزف وتلزم مراقبة التخثّر. ومع رجوع الدرقية إلى اعتدالها يتغيّر تعامل الجسم مع أدوية أخرى: قد ترتفع مستويات الديجوكسين، ويقلّ التخلّص من موسّع الشعب ثيوفيلين، وتحتاج حاصرات بيتا إلى إعادة ضبط. وأي دواء آخر يكبح نخاع العظم أو يؤذي الكبد يُضاف خطره إلى خطر هذا الدواء. والكحول عبء إضافي على كبد محمَّل أصلاً. أخبر كل طبيب وصيدلي أنك تأخذه.',
    en: 'The drug increases the potency of oral blood thinners, raising bleeding risk and requiring clotting checks. As the thyroid returns to normal the body handles other medicines differently: digoxin levels may rise, clearance of the bronchodilator theophylline may fall, and beta blockers may need resetting. Any other medicine that suppresses the bone marrow or harms the liver adds its risk to this drug’s. Alcohol is an extra burden on an already loaded liver. Tell every doctor and pharmacist that you are taking it.'
  },
  avoid: {
    ar: 'لا يُؤخذ عند ثبوت حساسية له أو لأحد مكوّناته. ولا يُستعمل في مرض كبدي نشط إلا بقرار متخصّص، ويُوقف عند ظهور أذى كبدي. وهو يعبر المشيمة، وقد يسبّب دراقاً وقصوراً درقياً عند الجنين إن زاد الكبح، وقد وقع الأذى الكبدي الشديد في الحوامل والمواليد أيضاً — فاستعماله في الحمل محصور في الأشهر الأولى وتحت متابعة. ويحتاج المسنّون ومن عندهم انخفاض في تعداد الدم إلى حذر أشدّ. وأخبري طبيبك إن كنت مرضعاً.',
    en: 'It is not taken by anyone with a proven allergy to it or its components. It is not used in active liver disease except by a specialist decision, and is stopped if liver injury appears. It crosses the placenta and may cause goitre and an underactive thyroid in the fetus if suppression is excessive; severe liver injury has also occurred in pregnant women and newborns — so its use in pregnancy is confined to the early months and under follow-up. Older people and those with low blood counts need greater caution. Tell your doctor if you are breastfeeding.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682465.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d819e532-09ac-434a-84a6-636c4204c7aa'
  ]
};

RX_BODY['potassium-iodide'] = {
  what: {
    ar: 'يوديد البوتاسيوم ملح يود غير مشعّ، يأتي أقراصاً وسائلاً. وهو الدواء الذي توزّعه السلطات الصحية في الطوارئ النووية لحماية الغدة الدرقية وحدها. ويُستعمل في الطبّ كذلك لتهدئة غدة درقية متوهّجة قبل جراحتها وفي العاصفة الدرقية. فكرته بسيطة: الغدة تلتقط اليود بلا تمييز بين مشعّه وسليمه، فإذا امتلأت بالسليم لم يبق فيها موضع للمشعّ. ولا يُؤخذ إلا حين تأمر به الجهات الصحية.',
    en: 'Potassium iodide is a non-radioactive iodine salt supplied as tablets and liquid. It is the medicine handed out by health authorities in a nuclear emergency to protect the thyroid gland alone. It is also used in medicine to quiet an overactive thyroid before its surgery and in thyroid storm. Its idea is simple: the gland takes up iodine without telling the radioactive from the safe, so if it is filled with the safe kind there is no room left for the radioactive. It is taken only when the health authorities say so.'
  },
  why: {
    ar: 'الاستعمال الأشهر هو حجب اليود المشعّ عن الغدة الدرقية بعد حادث نووي أو إشعاعي، ويكون بأمر من السلطات لا باجتهاد فردي. وهو لا يحمي من أي مادة أخرى تُطلق في الحادث، ولا يغني عن الإخلاء أو البقاء في الداخل. وفي المستشفى يُستعمل ضمن علاج العاصفة الدرقية ولتحضير مريض فرط النشاط قبل استئصال الغدة. وله استعمالات جلدية في عدوى فطرية عميقة اسمها داء الشعريات المبوغة، وكان يُستعمل قديماً مذيباً للبلغم.',
    en: 'Its best-known use is to block radioactive iodine from the thyroid after a nuclear or radiological accident, and this is done on the authorities’ instruction, not by individual judgement. It protects against no other substance released in the accident, and does not replace evacuation or sheltering indoors. In hospital it is used within the treatment of thyroid storm and to prepare a patient with an overactive thyroid before removal of the gland. It has skin uses in a deep fungal infection called sporotrichosis, and was once used to loosen phlegm.'
  },
  how: {
    ar: 'الغدة الدرقية شرهة لليود لأنها تصنع منه هرمونها، وهي تسحبه من الدم بمضخّة خاصة ولا تفرّق بين ذرّة سليمة وذرّة مشعّة. فحين يُغرَق الجسم باليود السليم تمتلئ الغدة وتُغلق مضخّتها، فيمرّ اليود المشعّ في الدم ويخرج بالبول بدل أن يستقرّ في الرقبة ويشعّ فيها سنين. وللإغراق نفسه أثر ثانٍ يُستفاد منه في الطبّ: يبطّئ إفراز الهرمون مؤقتاً. لكن الجسم يتحايل على هذا الكبح خلال أسابيع فيعود إلى صناعته.',
    en: 'The thyroid is greedy for iodine because it makes its hormone from it, drawing it out of the blood by a special pump that cannot tell a safe atom from a radioactive one. When the body is flooded with safe iodine the gland fills and shuts its pump, so radioactive iodine passes through the blood and leaves in the urine instead of settling in the neck and irradiating it for years. The flooding has a second effect used in medicine: it temporarily slows hormone release. But the body works around this block within weeks and resumes production.'
  },
  effects: {
    ar: 'قد يسبّب اضطراب معدة وغثياناً وإسهالاً وطعماً معدنياً في الفم. والاستعمال الطويل قد يجلب ما يُسمّى التسمّم اليودي: ألم في الأسنان واللثة، وصداع، واضطراب في الرؤية، وأعراض تشبه الزكام. ويرفع الدواء بوتاسيوم الدم عند من عنده قصور كلوي. وقد يقلب الغدة إلى خمول يزول بإيقافه، أو على العكس يفجّر فرط نشاط عند من عاش في منطقة فقيرة باليود. ولذلك يُفحص هرمون الدرقية إن طال الاستعمال.',
    en: 'It may cause stomach upset, nausea, diarrhoea and a metallic taste in the mouth. Prolonged use may bring what is called iodism: sore teeth and gums, headache, disturbed vision and cold-like symptoms. It raises blood potassium in people with kidney failure. It may tip the gland into underactivity, which reverses on stopping, or conversely set off overactivity in someone who lived in an iodine-poor region. For that reason thyroid hormone is checked if the use is prolonged.'
  },
  warning: {
    ar: 'أوقف الدواء واطلب الطبيب فوراً عند: طفح، أو شرى، أو حرارة، أو ألم مفاصل — فقد تكون حساسية لليود. واطلب الطوارئ عند صعوبة في التنفّس أو الكلام أو البلع، أو تورّم الوجه والشفتين واللسان والحلق أو القدمين. ولا تأخذ منه أكثر مما تقوله الجهات الصحية: التكرار لا يزيد الحماية ويزيد الأذى. والمولود في شهره الأول والحامل والمرضع حالات خاصة يجب إبلاغ الطبيب بها فوراً، لأن الوليد يحتاج فحص درقية بعدها.',
    en: 'Stop the medicine and call the doctor at once for rash, hives, fever or joint pain — these may be an iodine allergy. Seek emergency care for difficulty breathing, speaking or swallowing, or swelling of the face, lips, tongue and throat, or of the feet. Do not take more than the health authorities state: repeating does not add protection and does add harm. A baby in the first month of life, a pregnant woman and a nursing mother are special cases the doctor must be told about at once, because the newborn needs a thyroid check afterwards.'
  },
  interact: {
    ar: 'أخطر ما يُجمع معه هو ما يرفع البوتاسيوم: مدرّات البول الحافظة للبوتاسيوم، ومثبّطات الإنزيم المحوّل والسارتانات، ومكمّلات البوتاسيوم — فالمجموع قد يبلغ حدّ اضطراب نظم القلب. وتتداخل مع الليثيوم فيزداد كبح الغدة. وأدوية الدرقية الأخرى، مضادات الدرقية واليود المشعّ، يتغيّر أثرها معه ولذلك يُنسّق توقيتها في المستشفى. وأخبر طبيبك بكل مكمّل يحوي يوداً أو أعشاب بحرية.',
    en: 'The most dangerous combination is anything that raises potassium: potassium-sparing diuretics, ACE inhibitors and sartans, and potassium supplements — the sum may reach the point of a heart rhythm disturbance. It interacts with lithium, deepening the suppression of the gland. Other thyroid medicines, the antithyroid drugs and radioactive iodine, have their effect altered by it, so their timing is coordinated in hospital. Tell your doctor about every supplement containing iodine and about seaweed products.'
  },
  avoid: {
    ar: 'يُمنع عند حساسية معروفة لليود، وعند مرض جلدي مناعي اسمه التهاب الجلد الحلئي الشكل، وعند التهاب أوعية بنقص المتمّمات. ويحتاج أصحاب أمراض الغدة الدرقية، ومنهم مريض جريفز والدراق العقدي، إلى إذن الطبيب وإبلاغه فوراً إن أخذوه في طوارئ. وحذر شديد في القصور الكلوي بسبب البوتاسيوم. ويقول المرجع إنه لا يُوصف عادة للحامل والمرضع خارج الطوارئ لخطر قصور الدرقية وتضخّمها عند الوليد. أخبر الطبيب عن كل مرض عندك.',
    en: 'It is forbidden with a known iodine allergy, with an immune skin disease called dermatitis herpetiformis, and with hypocomplementaemic vasculitis. People with thyroid disease, including Graves disease and nodular goitre, need the doctor’s permission and must inform them at once if they took it in an emergency. Great caution applies in kidney failure because of potassium. The reference states it is not normally prescribed for pregnant or nursing women outside an emergency, because of the risk of an underactive and enlarged thyroid in the newborn. Tell the doctor about every condition you have.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a611043.html',
    'https://www.ncbi.nlm.nih.gov/books/NBK542320/'
  ]
};

RX_BODY['iodine-potassium-iodide'] = {
  what: {
    ar: 'محلول لوجول محلول يود قوي يجمع اليود مع يوديد البوتاسيوم في الماء، لونه بنّي غامق وطعمه معدني حادّ، ولذلك يُخفَّف في ماء أو عصير ويُشرب بعد الطعام. صيغته الفموية دواء درقي قديم يستعمله الأطباء قبل جراحة الغدة، ويُقطَّر بقطّارة زجاجية لأن كل قطرة محسوبة. وثمة مستحضرات تحمل اسم لوجول مخصّصة للاستعمال الخارجي مطهّراً لا للشرب، والخلط بينهما خطأ يقع فعلاً.',
    en: 'Lugol’s solution is a strong iodine solution combining iodine with potassium iodide in water; it is dark brown with a sharp metallic taste, so it is diluted in water or juice and drunk after food. Its oral form is an old thyroid medicine used by doctors before surgery on the gland, dispensed with a glass dropper because every drop is counted. There are also preparations bearing the name Lugol’s intended for external antiseptic use and not for drinking, and confusing the two is a mistake that really happens.'
  },
  why: {
    ar: 'تذكر النشرة أنه يُستعمل في الوقاية من الدراق البسيط والغرواني، وفي علاج الدراق الجحوظي وهو الاسم القديم لداء جريفز. وموضعه الأشهر اليوم هو الفترة القصيرة السابقة لاستئصال الغدة الدرقية: يُعطى مع مضادات الدرقية ليقلّل احتقان الغدة وغزارة أوعيتها فيقلّ نزفها أثناء الجراحة. ويدخل في تدبير العاصفة الدرقية داخل المستشفى بترتيب دقيق مع مضاد الدرقية، إذ يُعطى بعده لا قبله.',
    en: 'The label states it is used in the prevention of simple and colloid goitre, and in the treatment of exophthalmic goitre, the old name for Graves disease. Its best-known place today is the short period before removal of the thyroid: it is given alongside antithyroid drugs to reduce the gland’s congestion and the richness of its vessels, so it bleeds less during surgery. It has a role in the hospital management of thyroid storm, in careful sequence with the antithyroid drug, being given after it rather than before.'
  },
  how: {
    ar: 'الإغراق باليود يفعل في الغدة الدرقية ثلاثة أشياء: يوقف مؤقتاً ربط اليود داخلها فتقلّ صناعة الهرمون، ويبطّئ تحرير الهرمون المخزون فينخفض ما يصل الدم خلال أيام، ويضيّق أوعيتها فتصير أقلّ احتقاناً وأقسى ملمساً وأسهل على يد الجرّاح. لكن هذا الكبح لا يدوم: يتخلّص الجسم منه خلال أسابيع من الاستعمال المتّصل وتعود الصناعة، ولهذا هو دواء مرحلة قصيرة قبل تدبير حاسم لا علاج مزمن.',
    en: 'Flooding with iodine does three things to the thyroid: it temporarily stops iodine binding inside it so hormone production falls, it slows the release of stored hormone so what reaches the blood drops within days, and it narrows its vessels so the gland becomes less congested, firmer and easier under the surgeon’s hand. But this block does not last: the body escapes it within weeks of continuous use and production resumes, which is why it is a short bridging medicine before a decisive procedure, not a chronic treatment.'
  },
  effects: {
    ar: 'يُتعب المعدة كثيراً: غثيان وقيء وألم بطن وإسهال، ولذلك يُشرب مخفّفاً بعد الطعام. وطول الاستعمال يجلب التسمّم اليودي بعلاماته: طعم معدني، وحرقة في الفم والحلق، والتهاب اللثة، وسيلان وعطاس يشبهان الزكام، وطفح جلدي، وتورّم الغدد اللعابية. وقد ينقلب أثره على الغدة نفسها فيسبّب خمولاً درقياً عند بعض الناس أو يفجّر فرط نشاط عند غيرهم. وأغلب هذه العلامات تزول بإيقاف الدواء.',
    en: 'It burdens the stomach considerably: nausea, vomiting, abdominal pain and diarrhoea, which is why it is drunk diluted after food. Prolonged use brings iodism with its signs: a metallic taste, burning in the mouth and throat, sore gums, a runny nose and sneezing resembling a cold, skin rash and swollen salivary glands. Its effect on the gland itself may reverse, causing an underactive thyroid in some people or setting off overactivity in others. Most of these signs disappear when the medicine is stopped.'
  },
  warning: {
    ar: 'أوقفه واطلب الطبيب في اليوم نفسه عند: طفح جلدي أو شرى أو حمّى أو ألم مفاصل، أو حرقة في الفم مع طعم معدني وتورّم اللثة والغدد اللعابية. واطلب الطوارئ عند تورّم الشفتين واللسان والحلق أو ضيق في التنفّس أو بحّة مفاجئة، وعند قيء متكرّر مع ألم بطن شديد وإسهال لا يقف. وعودة الخفقان والرجفة والحرارة بعد أسابيع من الاستعمال قد تعني أن الغدة انفلتت من الكبح، وهي حالة تحتاج مراجعة سريعة لا انتظاراً.',
    en: 'Stop it and call the doctor the same day for rash, hives, fever or joint pain, or burning in the mouth with a metallic taste and swelling of the gums and salivary glands. Seek emergency care for swelling of the lips, tongue and throat, breathlessness or sudden hoarseness, and for repeated vomiting with severe abdominal pain and diarrhoea that will not stop. The return of palpitations, tremor and fever after weeks of use may mean the gland has escaped the block, a state needing a prompt review rather than waiting.'
  },
  interact: {
    ar: 'يجتمع خطر البوتاسيوم هنا كما في يوديد البوتاسيوم: مع المدرّات الحافظة للبوتاسيوم ومثبّطات الإنزيم المحوّل والسارتانات ومكمّلات البوتاسيوم قد يرتفع بوتاسيوم الدم. ومع الليثيوم يشتدّ كبح الغدة. وترتيبه مع مضادات الدرقية واليود المشعّ حسّاس: إعطاؤه قبل مضاد الدرقية في فرط النشاط قد يزوّد الغدة بوقود تصنع منه هرموناً أكثر، وهو يعطّل معالجة اليود المشعّ إن سبقها. لا تجمعه بمكمّلات يود أو أعشاب بحرية.',
    en: 'The potassium risk applies here as with potassium iodide: with potassium-sparing diuretics, ACE inhibitors, sartans and potassium supplements, blood potassium may rise. With lithium the suppression of the gland deepens. Its sequence with antithyroid drugs and radioactive iodine is delicate: giving it before the antithyroid drug in an overactive thyroid may supply the gland with fuel to make more hormone, and it blunts radioactive iodine treatment if it precedes it. Do not combine it with iodine supplements or seaweed products.'
  },
  avoid: {
    ar: 'تذكر النشرة أنه يُمنع في السلّ، وفي طفح جلدي يوديّ سابق، وفي وذمة الحنجرة، وعند من سبقت له حساسية لليوديدات. وهو يعبر المشيمة بسهولة وقد يؤثّر في الجنين فيسبّب دراقاً وقصوراً درقياً، فلا يُستعمل في الحمل إلا بقرار طبيب موازن. وحذر في القصور الكلوي بسبب البوتاسيوم، وعند أمراض الدرقية المختلفة لأن أثره فيها ليس واحداً. وتنبّه النشرة إلى أن هذا المستحضر قديم ولم تجزه إدارة الغذاء والدواء بصيغتها الحديثة.',
    en: 'The label states it is contraindicated in tuberculosis, in a previous iodine skin eruption, in laryngeal oedema, and in anyone with a prior allergy to iodides. It readily crosses the placenta and may affect the fetus, causing goitre and an underactive thyroid, so it is not used in pregnancy except by a doctor’s balanced decision. Caution in kidney failure because of potassium, and in the various thyroid diseases, since its effect is not the same in all of them. The label notes this is an old preparation not approved by the Food and Drug Administration in its modern process.'
  },
  updated: '2026-09-10',
  src: [
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ec12b0ab-8fee-4b4f-a6e7-349f60a6f3e0',
    'https://www.ncbi.nlm.nih.gov/books/NBK542320/'
  ]
};

RX_BODY['testosterone'] = {
  what: {
    ar: 'التستوستيرون هرمون الذكورة الأول، تصنعه الخصية بأمر من الغدة النخامية. ويُعطى دواءً بديلاً حين يثبت نقصه بتحليل دم صباحي مع وجود أعراضه، لا لمجرّد الشكوى من التعب أو ضعف الرغبة. يأتي بأشكال كثيرة: حقن عضلية، وجلّ يُدهن على الجلد، ولصقات، وكبسولات، وغرسات تحت الجلد. وهو مادة خاضعة للرقابة لأنها تُساء استعمالها في كمال الأجسام، وصرفها مقيَّد.',
    en: 'Testosterone is the principal male hormone, made by the testis on the pituitary gland’s order. It is given as replacement when a shortage is proven by a morning blood test together with its symptoms, not merely for a complaint of tiredness or low desire. It comes in many forms: intramuscular injections, a gel rubbed on the skin, patches, capsules and implants under the skin. It is a controlled substance because it is misused in bodybuilding, and its supply is restricted.'
  },
  why: {
    ar: 'يُوصف لنقص هرمون الذكورة الثابت: قصور الخصية نفسها بعد إصابة أو مرض أو خلل خلقي، أو قصور الأمر النازل إليها من الغدة النخامية. ويُستعمل لإحداث البلوغ عند الفتيان الذين تأخّر بلوغهم لسبب هرموني ثابت، وله موضع محدود في بعض أنواع سرطان الثدي عند النساء بقرار متخصّص. وهو ليس علاجاً للشيخوخة ولا لضعف الانتصاب بمفرده ولا لبناء العضلات، واستعماله لهذه الأغراض بلا دليل مخبري ضررٌ محض.',
    en: 'It is prescribed for a proven shortage of the male hormone: failure of the testis itself after injury, illness or a congenital defect, or failure of the signal descending to it from the pituitary. It is used to bring on puberty in boys whose puberty is delayed for a fixed hormonal reason, and has a limited place in certain breast cancers in women by specialist decision. It is not a treatment for ageing, nor for erectile difficulty on its own, nor for building muscle, and using it for these without laboratory proof is pure harm.'
  },
  how: {
    ar: 'يدخل الهرمون خلايا الجسم فيرتبط بمستقبل خاص داخلها، ويتحوّل في بعض الأنسجة إلى صورة أقوى تعمل في الشعر والبروستاتا، وفي أنسجة أخرى إلى هرمون أنثوي بكمية صغيرة تلزم للعظم وللمزاج. ومن هنا تأتي فوائده وأضراره معاً: كتلة عضلية وكثافة عظم ورغبة جنسية وشعر جسم وصوت أعمق من جهة، وحبّ شباب وتضخّم ثدي وتكاثر كريات حمراء من جهة أخرى. وهو يوقف الأمر النخامي فتضمر الخصية ويقلّ إنتاج الحيوان المنوي.',
    en: 'The hormone enters the body’s cells and binds a special receptor inside them; in some tissues it converts to a stronger form acting on hair and prostate, and in others to a female hormone in the small amount needed for bone and mood. From this come both its benefits and its harms: muscle mass, bone density, sexual desire, body hair and a deeper voice on one side; acne, breast enlargement and a rise in red cells on the other. It also switches off the pituitary signal, so the testis shrinks and sperm production falls.'
  },
  effects: {
    ar: 'من الشائع: حبّ شباب وبشرة دهنية، وتهيّج في موضع الحقن أو الجلد الذي يُدهن، وتضخّم أو ألم في الثدي، وتقلّب مزاج وعصبية، واحتباس سوائل وتورّم في الكاحلين، وزيادة في كريات الدم الحمراء تُرصد بالتحليل، وارتفاع ضغط الدم، وتفاقم شخير وانقطاع نفس أثناء النوم. ويقلّ إنتاج الحيوانات المنوية وتصغر الخصية، وهو ما يعني ضعف الخصوبة — ومن يريد الإنجاب يُوصف له علاج آخر لا هذا.',
    en: 'Common ones: acne and oily skin, irritation at the injection site or on the skin where the gel is applied, breast enlargement or tenderness, mood swings and irritability, fluid retention and swollen ankles, a rise in red blood cells seen on testing, raised blood pressure, and worsening snoring and pauses in breathing during sleep. Sperm production falls and the testis shrinks, which means reduced fertility — a man who wants children is given a different treatment, not this one.'
  },
  warning: {
    ar: 'اطلب الطوارئ عند: ألم أو تورّم أو حرارة في ساق واحدة، أو ضيق نفس مفاجئ مع ألم صدر — فقد تكون جلطة. وكذلك ضعف مفاجئ في جانب واحد أو ثقل في اللسان. وانتصاب مؤلم لا ينتهي حالة طوارئ تُنقذ العضو إن عولجت باكراً. واطلب الطبيب عاجلاً عند اصفرار العين أو الجلد أو ألم أعلى البطن، أو صعوبة في التبوّل. وفي الجلّ خطر خاص: انتقاله بلمس الجلد إلى امرأة أو طفل — فظهور شعر عانة أو تضخّم أعضاء أو سلوك عدواني عند طفل يستدعي الطبيب فوراً.',
    en: 'Seek emergency care for pain, swelling or warmth in one leg, or sudden breathlessness with chest pain — this may be a clot. The same for sudden weakness on one side or slurred speech. A painful erection that will not end is an emergency; treating it early saves the organ. Call the doctor urgently for yellowing of the eyes or skin, pain in the upper abdomen, or difficulty passing urine. The gel carries a particular danger: transfer by skin contact to a woman or child — pubic hair, enlarged genitals or aggressive behaviour in a child calls for a doctor at once.'
  },
  interact: {
    ar: 'يزيد أثر مميّعات الدم فيرتفع خطر النزف وتلزم مراقبة التخثّر. ويغيّر ضبط السكّري فقد تنقص الحاجة إلى دواء السكّر. ويجتمع مع الكورتيزون فيزيد احتباس السوائل والتورّم، وهو ثقيل على مريض القلب والكلى. وما يرفع كريات الدم الحمراء أو يميل بالدم إلى التخثّر يضاعف خطره. أما التداخل الأخطر فليس دوائياً بل جسدياً: الجلّ ينتقل بالملامسة، فتُغطّى منطقة الدهن وتُغسل اليدان ويُغسل الموضع قبل أي ملامسة جلد لآخر.',
    en: 'It increases the effect of blood thinners, raising bleeding risk and requiring clotting checks. It alters diabetes control, so the need for glucose-lowering medicine may fall. Combined with corticosteroids it adds fluid retention and swelling, and is heavy on a heart or kidney patient. Anything that raises red cells or tips the blood towards clotting multiplies its risk. The most dangerous interaction, though, is not pharmacological but physical: the gel transfers by contact, so the applied area is covered, the hands washed, and the site washed before any skin-to-skin contact with another person.'
  },
  avoid: {
    ar: 'ممنوع على النساء والأطفال والمراهقين، وممنوع في الحمل والرضاعة لأنه يؤذي الجنين. ويُمنع عند سرطان الثدي عند الرجل، وعند سرطان البروستاتا المعروف أو المشتبه به، وعند وجود عقدة بروستاتية أو ارتفاع في دلالتها لم يُفسَّر بعد. ولا يُبدأ في قصور قلب غير مضبوط ولا بعد جلطة قلبية أو دماغية قريبة، ولا مع انقطاع نفس نومي غير معالَج، ولا حين يكون تركيز كريات الدم الحمراء مرتفعاً أصلاً. ويحتاج كبار السنّ ومرضى الكلى والكبد إلى حذر ومتابعة.',
    en: 'It is forbidden to women, children and adolescents, and forbidden in pregnancy and breastfeeding because it harms the fetus. It is contraindicated in male breast cancer, in known or suspected prostate cancer, and where there is a prostate nodule or an unexplained rise in its marker. It is not started in uncontrolled heart failure, after a recent heart attack or stroke, with untreated sleep apnoea, or when the red cell concentration is already high. Older people and those with kidney or liver disease need caution and follow-up.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a619028.html',
    'https://medlineplus.gov/druginfo/meds/a605020.html',
    'https://www.ncbi.nlm.nih.gov/books/NBK534853/'
  ]
};

RX_BODY['cabergoline'] = {
  what: {
    ar: 'الكابرجولين قرص من فصيلة ناهضات الدوبامين، أي أنه يقلّد مادة الدوبامين في الدماغ. وظيفته خفض هرمون الحليب البرولاكتين حين يرتفع خارج الرضاعة. وأصله من مركّبات الإرغوت، ومن هنا تأتي تحذيراته الخاصة على صمّامات القلب والأنسجة الليفية. يُؤخذ بالفم ومفعوله طويل يمتدّ بعد القرص الواحد، ولذلك يوزّعه الطبيب على فترات متباعدة يحدّدها هو. وهو علاج طويل يُتابَع بتحليل البرولاكتين وبتصوير الغدة النخامية.',
    en: 'Cabergoline is a tablet from the dopamine agonist family, meaning it imitates dopamine in the brain. Its job is to lower the milk hormone prolactin when it rises outside breastfeeding. It derives from the ergot compounds, and from this come its particular warnings about the heart valves and fibrous tissue. It is taken by mouth and its action is long, extending beyond a single tablet, so the doctor spaces it out at intervals they decide. It is a long treatment followed by prolactin testing and imaging of the pituitary gland.'
  },
  why: {
    ar: 'يُوصف لارتفاع هرمون الحليب: وهو هرمون طبيعي يساعد المرضع على إدرار اللبن، لكنه حين يرتفع عند غير المرضع يسبّب العقم واضطراب الدورة وخروج حليب من الثدي وضعف الرغبة، وعند الرجل ضعف انتصاب وقلّة رغبة، ومع الوقت نقص كثافة العظم. وأشهر أسبابه ورم حميد صغير في الغدة النخامية يفرز هذا الهرمون، والدواء لا يخفض الهرمون فحسب بل يصغّر الورم نفسه فيغني كثيراً عن الجراحة.',
    en: 'It is prescribed for a raised milk hormone: a natural hormone that helps a nursing mother produce milk, but when it rises in someone not nursing it causes infertility, disturbed periods, milk discharge from the breast and low desire, and in men erectile difficulty and low desire, and over time reduced bone density. Its commonest cause is a small benign tumour of the pituitary that secretes this hormone, and the drug not only lowers the hormone but shrinks the tumour itself, often sparing the patient surgery.'
  },
  how: {
    ar: 'الغدة النخامية تصنع البرولاكتين، والدماغ يكبحه بمادة الدوبامين كأنها لجام دائم. فإذا ارتخى هذا اللجام أو ظهر ورم يتمرّد عليه، ارتفع الهرمون وعطّل الإشارات التي تدير المبيض والخصية فتوقّفت الدورة أو ضعف إنتاج الحيوان المنوي. والكابرجولين يشدّ اللجام: يرتبط بمستقبلات الدوبامين على خلايا النخامى فيوقف إفرازها ويقلّص حجمها. وحين ينخفض البرولاكتين تعود إشارات الخصوبة إلى مجراها، وقد يحدث الحمل بسرعة.',
    en: 'The pituitary makes prolactin, and the brain restrains it with dopamine like a permanent rein. If that rein loosens, or a tumour appears that defies it, the hormone rises and disables the signals running the ovary and testis, so periods stop or sperm production weakens. Cabergoline tightens the rein: it binds dopamine receptors on the pituitary cells, halting their secretion and shrinking their size. When prolactin falls, the fertility signals return to their course, and pregnancy may occur quickly.'
  },
  effects: {
    ar: 'من الشائع في البداية: غثيان، وصداع، ودوخة خاصة عند النهوض المفاجئ لأنه يخفض الضغط الوضعي، وتعب ونعاس، وإمساك، وألم في المعدة، وهبّات حرارة. وأغلبها يخفّ مع الوقت وأخذه مع الطعام يلطّفه. وقد يوقف إدرار الحليب عند من ترضع، ويعيد الخصوبة فجأة فيحدث حمل غير محسوب لمن لم تتوقّع ذلك. ويلزمه فحص دوري للقلب بتخطيط الصدى ولو لم يشعر المريض بشيء.',
    en: 'Common at the start: nausea, headache, dizziness especially on standing up suddenly because it lowers postural blood pressure, tiredness and drowsiness, constipation, stomach pain and hot flushes. Most ease with time and taking it with food softens them. It may stop milk production in a nursing woman, and it can restore fertility abruptly, so an unplanned pregnancy may occur in someone not expecting it. It requires periodic heart checks by ultrasound even if the patient feels nothing.'
  },
  warning: {
    ar: 'اطلب الطبيب فوراً عند: ضيق نفس أو لهاث عند الجهد، أو سعال مستمرّ، أو ألم في الصدر، أو تورّم في الساقين والقدمين — فهذه علامات إصابة صمّام أو تليّف في غشاء الرئة أو القلب، وهي تبدأ خفيّة وتزحف. واطلب الطوارئ عند ألم صدر شديد أو إغماء. وأبلغ الطبيب عن أي هلوسة أو ارتباك أو تغيّر واضح في التفكير. وأبلغه أيضاً — ولا تستح — إن ظهرت رغبة قهرية في المقامرة أو الشراء أو الجنس أو الأكل، فهذا أثر معروف للدواء يزول بتعديله.',
    en: 'Call the doctor at once for breathlessness or panting on exertion, a persistent cough, chest pain, or swelling in the legs and feet — these are signs of valve damage or fibrosis in the lining of the lung or heart, which begin hidden and creep. Seek emergency care for severe chest pain or fainting. Report any hallucination, confusion or clear change in thinking. Report too — and do not be embarrassed — any compulsive urge to gamble, shop, seek sex or eat, for this is a known effect of the drug that resolves when it is adjusted.'
  },
  interact: {
    ar: 'أي دواء يعاكس الدوبامين يبطل عمله: مضادات الذهان القديمة والحديثة، ودواء الغثيان ميتوكلوبراميد. ولا يُجمع مع أدوية إرغوتية أخرى مثل مركّبات علاج الشقيقة. والأدوية التي تخفض الضغط أو تسبّب دوخة يتراكم أثرها معه عند النهوض، ومنها الكحول. وبعض الأدوية التي تعطّل تكسيره في الكبد، ومنها بعض المضادات الحيوية من فصيلة الماكروليدات، قد ترفع مستواه. أخبر الصيدلي بكل دواء تأخذه قبل أن تبدأ.',
    en: 'Any medicine that opposes dopamine cancels its work: the older and newer antipsychotics, and the anti-nausea drug metoclopramide. It is not combined with other ergot medicines such as migraine preparations. Medicines that lower blood pressure or cause dizziness add their effect to his on standing, and alcohol among them. Some drugs that block its breakdown in the liver, including certain macrolide antibiotics, may raise its level. Tell the pharmacist about every medicine you take before you begin.'
  },
  avoid: {
    ar: 'يُمنع عند من عنده مرض في صمّامات القلب يثبته تخطيط الصدى، وعند من سبق له تليّف في الرئة أو غشاء القلب أو خلف الصفاق، وعند الحساسية لمركّبات الإرغوت. ولا يُستعمل في ارتفاع ضغط الدم المصاحب للحمل كتسمّم الحمل وارتفاع الضغط بعد الولادة إلا إذا رجحت الفائدة. ويحتاج مريض الكبد وصاحب الضغط المرتفع وكبير السنّ إلى حذر. وأخبري طبيبك فوراً إن حملت أو أردت الحمل أو أردت الإرضاع، فالخطة تتغيّر عندها.',
    en: 'It is forbidden in anyone with heart valve disease confirmed by ultrasound, in anyone with previous fibrosis of the lung, the lining of the heart or behind the abdominal cavity, and with allergy to ergot compounds. It is not used in pregnancy-related high blood pressure such as pre-eclampsia and post-partum hypertension unless the benefit outweighs the risk. Liver patients, those with high blood pressure and older people need caution. Tell your doctor at once if you become pregnant, wish to become pregnant, or wish to breastfeed, for the plan changes then.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a612020.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e497366b-a124-4d7f-bd45-a883c392d4bb'
  ]
};

RX_BODY['octreotide'] = {
  what: {
    ar: 'الأوكتريوتيد نسخة صناعية من السوماتوستاتين، وهو هرمون طبيعي مهمّته كبح إفرازات الجسم. لكن الأصل الطبيعي يتلاشى في دقائق، أما هذه النسخة فتدوم ساعات، ولذلك صارت دواءً. يُعطى حقناً: صيغة قصيرة تُحقن تحت الجلد أو في الوريد، وصيغة طويلة المفعول تُحقن في العضل على فترات متباعدة في العيادة. وهو دواء تخصّصي يُتابَع بتحاليل دورية وتصوير للمرارة.',
    en: 'Octreotide is a synthetic copy of somatostatin, a natural hormone whose task is to suppress the body’s secretions. But the natural original fades within minutes, whereas this copy lasts for hours, and so it became a medicine. It is given by injection: a short-acting form under the skin or into a vein, and a long-acting form injected into muscle at widely spaced intervals in the clinic. It is a specialist medicine, followed with periodic tests and imaging of the gallbladder.'
  },
  why: {
    ar: 'يُوصف لضخامة النهايات، وهي حالة يفرز فيها ورم في الغدة النخامية هرمون نمو زائداً فتكبر اليدان والقدمان وملامح الوجه ويأتي ألم المفاصل، ويُستعمل لمن لم تنفع فيه الجراحة ولا الإشعاع ولا دواء آخر. ويُستعمل أيضاً لضبط الإسهال الشديد والتورّد الجلدي في أورام الغدد الصمّاء المعوية، ومنها الورم السرطاوي وورم يفرز الببتيد المعوي الفعّال في الأوعية. وهو يخفّف الأعراض ولا يُغني عن علاج الورم نفسه.',
    en: 'It is prescribed for acromegaly, a condition in which a pituitary tumour secretes excess growth hormone so the hands, feet and facial features enlarge and joint pain follows; it is used for those in whom surgery, radiation and other medicines have not worked. It is also used to control the severe diarrhoea and skin flushing of neuroendocrine gut tumours, among them carcinoid tumours and one secreting vasoactive intestinal peptide. It relieves symptoms and does not replace treatment of the tumour itself.'
  },
  how: {
    ar: 'السوماتوستاتين في الجسم مفتاح إيقاف عام: يكبح هرمون النمو من النخامى، ويكبح الأنسولين والغلوكاغون من البنكرياس، ويبطّئ إفرازات المعدة والأمعاء وحركتها، ويقلّل تدفّق الدم في أوعية البطن. والأوكتريوتيد يفعل الشيء نفسه لكن لمدة أطول بكثير. ومن هنا يفهم المريض آثاره كلها: فهو يخفّف الإسهال لأنه يبطّئ الأمعاء، ويسبّب حصى المرارة لأنه يوقف تقلّصها، ويقلب سكّر الدم لأنه يمسّ هرموني البنكرياس معاً.',
    en: 'Somatostatin in the body is a general off switch: it suppresses growth hormone from the pituitary, insulin and glucagon from the pancreas, slows the secretions and movement of the stomach and gut, and reduces blood flow in the abdominal vessels. Octreotide does the same but for far longer. From this the patient can understand all its effects: it eases diarrhoea because it slows the gut, it causes gallstones because it stops the gallbladder contracting, and it swings blood sugar because it touches both pancreatic hormones.'
  },
  effects: {
    ar: 'من الشائع: إسهال أو إمساك، وغثيان وانتفاخ وغازات وألم بطن، وصداع ودوخة، وألم واحمرار وتيبّس في موضع الحقن. وأشهر ما يُنتظر منه على المدى الطويل هو حصى المرارة أو ترسّب حمأة فيها، لأنه يعطّل تقلّص المرارة ويقلّل إفراز الصفراء — ولذلك تُصوَّر المرارة على فترات. وقد يخفض هرمون الدرقية فيلزم فحصه، وقد ينزل مستوى فيتامين ب اثنا عشر. ويتغيّر سكّر الدم صعوداً أو نزولاً.',
    en: 'Common ones: diarrhoea or constipation, nausea, bloating, wind and abdominal pain, headache and dizziness, and pain, redness and stiffness at the injection site. What is most expected of it in the long run is gallstones or sludge settling in the gallbladder, because it disables gallbladder contraction and reduces bile secretion — which is why the gallbladder is imaged at intervals. It may lower thyroid hormone, so this is tested, and vitamin B twelve may fall. Blood sugar shifts up or down.'
  },
  warning: {
    ar: 'اطلب الطبيب في اليوم نفسه عند ألم شديد في أعلى البطن من اليمين ينتشر إلى الكتف مع غثيان وقيء، أو اصفرار العين والجلد، أو حرارة مع قشعريرة — فهذه علامات مغص مراري أو التهاب في المرارة أو انسداد في مجراها. واطلب الطوارئ عند نبض بطيء جداً أو غير منتظم مع دوخة أو إغماء، أو صعوبة في التنفّس والبلع أو تورّم الوجه والحلق. وتعلّم علامات هبوط السكّر: رجفة وتعرّق وارتباك — وعالجها فوراً وأبلغ طبيبك.',
    en: 'Call the doctor the same day for severe pain in the upper right abdomen spreading to the shoulder with nausea and vomiting, or yellowing of the eyes and skin, or fever with chills — these are signs of biliary colic, inflammation of the gallbladder or blockage of its duct. Seek emergency care for a very slow or irregular pulse with dizziness or fainting, or difficulty breathing and swallowing, or swelling of the face and throat. Learn the signs of low blood sugar: trembling, sweating and confusion — treat it at once and tell your doctor.'
  },
  interact: {
    ar: 'يخفض مستوى دواء كبح المناعة سيكلوسبورين فقد يُعرّض عضواً مزروعاً للرفض، وهذا تداخل مهمّ يلزم إبلاغ الطبيب به. ويغيّر حاجة مريض السكّري إلى الأنسولين أو أقراص السكّر صعوداً ونزولاً، فالمتابعة الذاتية للسكّر لازمة. ويجتمع مع حاصرات بيتا وحاصرات قنوات الكالسيوم فيبطّئ النبض أكثر. وقد يغيّر امتصاص أدوية تُؤخذ بالفم لأنه يبطّئ الأمعاء والدهون. أخبر كل طبيب أنك تأخذه قبل وصف أي جديد.',
    en: 'It lowers the level of the immune-suppressing drug ciclosporin, which may expose a transplanted organ to rejection; this is an important interaction the doctor must be told about. It changes a diabetic patient’s need for insulin or glucose tablets, up or down, so self-monitoring of sugar is necessary. Combined with beta blockers and calcium channel blockers it slows the pulse further. It may alter the absorption of medicines taken by mouth, because it slows the gut and fat handling. Tell every doctor you are on it before any new prescription.'
  },
  avoid: {
    ar: 'لا يُعطى عند حساسية معروفة له. ويحتاج مريض السكّري ومريض القلب واضطراب النظم ومريض الكبد أو الكلى إلى ضبط ومتابعة خاصة، ومن عنده حصى مرارة سابقة إلى تقدير موازن قبل البدء. وثمة أمر تُنبّه إليه النشرة صراحة: قد يعود الحمل ممكناً أثناء العلاج عند امرأة لم تكن تحمل قبله، لأن ضبط الهرمون يعيد الخصوبة — فيلزم وسيلة منع حمل إن لم يكن الحمل مقصوداً. وأبلغي طبيبك إن حملت أو أرضعت.',
    en: 'It is not given with a known allergy to it. Patients with diabetes, heart disease and rhythm disorders, and liver or kidney disease need particular control and follow-up, and anyone with previous gallstones needs a balanced judgement before starting. One thing the label states plainly: pregnancy may become possible during treatment in a woman who could not conceive before, because controlling the hormone restores fertility — so contraception is needed if pregnancy is not intended. Tell your doctor if you become pregnant or are breastfeeding.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a693049.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4e2c9856-1836-49f0-9472-4dbeeb408f39'
  ]
};

RX_BODY['ascorbic-acid'] = {
  what: {
    ar: 'فيتامين ج، واسمه الكيميائي حمض الأسكوربيك، فيتامين ذائب في الماء لا يصنعه جسم الإنسان ولا يخزّنه، ولذلك يحتاجه من الطعام باستمرار. مصادره الفواكه الحمضية والفراولة والكيوي والمانجو والفلفل والبروكلي والورقيات والطماطم، والنيّء منها أغنى لأن الطهي والضوء يهدمانه. ويُصرف مكمّلاً بلا وصفة بأشكال كثيرة: أقراص وفوّار ومصّاصات وقابل للمضغ وقطرات. وهو للنقص الغذائي لا لكل شكوى.',
    en: 'Vitamin C, chemically ascorbic acid, is a water-soluble vitamin the human body neither makes nor stores, so it needs it from food continuously. Its sources are citrus fruit, strawberries, kiwi, mango, peppers, broccoli, leafy greens and tomatoes, and the raw ones are richer because cooking and light destroy it. It is sold as a supplement without prescription in many forms: tablets, effervescent, lozenges, chewables and drops. It is for dietary shortage, not for every complaint.'
  },
  why: {
    ar: 'يُستعمل مكمّلاً حين لا يكفي ما يأتي من الطعام: عند من غذاؤه محدود التنوّع، أو عنده سوء امتصاص معوي، أو مدخّن لأن التدخين يستهلكه. وهو علاج الإسقربوط والوقاية منه، وهو المرض الذي يظهر عند النقص الشديد بنزف اللثة وسوء التئام الجروح وسهولة الكدمات. ويُعطى أحياناً مع الحديد لأنه يحسّن امتصاص حديد النبات في فقر الدم. أما دعوى أنه يمنع نزلات البرد فليست ما يوصف له طبياً.',
    en: 'It is used as a supplement when what comes from food is not enough: in people whose diet has little variety, those with intestinal malabsorption, or smokers, since smoking consumes it. It is the treatment and prevention of scurvy, the disease that appears in severe deficiency with bleeding gums, poor wound healing and easy bruising. It is sometimes given with iron because it improves the absorption of plant iron in anaemia. As for the claim that it prevents colds, that is not what it is medically prescribed for.'
  },
  how: {
    ar: 'وظيفته الأولى بناء الكولاجين، وهو البروتين الذي يشدّ الجلد والأوعية واللثة والعظم بعضه إلى بعض. فإذا نقص ضعف هذا النسيج فنزفت اللثة وتفتّحت الجروح القديمة وظهرت الكدمات لأتفه سبب — وهذا هو الإسقربوط بعينه. ويعمل الفيتامين مضاداً للأكسدة يحمي الخلايا من جزيئات ضارّة، ويساعد جهاز المناعة، ويحوّل حديد النبات إلى صورة تمتصّها الأمعاء بسهولة، ولذلك يُشرب عصير الحمضيات مع وجبة الحديد.',
    en: 'Its first job is building collagen, the protein that binds skin, vessels, gums and bone to one another. When it falls short this tissue weakens, so gums bleed, old wounds reopen and bruises appear for the slightest reason — and that is scurvy itself. The vitamin also acts as an antioxidant protecting cells from harmful molecules, supports the immune system, and converts plant iron into a form the gut absorbs easily, which is why citrus juice is drunk with an iron-containing meal.'
  },
  effects: {
    ar: 'بالمقادير الغذائية المعتادة لا يكاد يُشكى منه. أما المقادير الكبيرة فتُتعب المعدة: إسهال، وغثيان، وحرقة، وتقلّصات وغازات. وقد يُذكر صداع وتعب واحمرار في الوجه وصعوبة في النوم. والفائض منه يخرج في البول، ولذلك لا فائدة من الإسراف فيه. والقلق الحقيقي من المقادير الكبيرة أنها ترفع الأوكسالات في البول، وهذا مهمّ لمن سبقت له حصى كلى أو عنده مرض كلوي. وبعض المستحضرات تحوي صوديوماً يُنتبه له في حمية الملح.',
    en: 'At ordinary dietary amounts there is scarcely a complaint. Large amounts, however, burden the stomach: diarrhoea, nausea, heartburn, cramps and wind. Headache, tiredness, facial flushing and difficulty sleeping may be reported. The surplus leaves in the urine, so there is no benefit in excess. The real concern with large amounts is that they raise oxalate in the urine, which matters for anyone with previous kidney stones or kidney disease. Some preparations contain sodium, worth noting on a salt-restricted diet.'
  },
  warning: {
    ar: 'أوقف المكمّل واطلب الطبيب عند ألم شديد مفاجئ في الخاصرة ينتشر إلى أسفل البطن مع دم في البول أو غثيان — فهذه صورة حصوة كلوية. واطلب الطبيب أيضاً إن استمرّ الإسهال أو الغثيان أو حرقة المعدة أو اشتدّت. واطلب الطوارئ عند طفح أو شرى أو تورّم الوجه والحلق أو ضيق نفس. ومن عنده نقص خميرة ج ستّة ب د ينتبه للشحوب المفاجئ أو البول الداكن أو الاصفرار. ولا تُبقِ نفسك على المقادير الكبيرة بلا سبب طبي.',
    en: 'Stop the supplement and call the doctor for sudden severe pain in the flank spreading to the lower abdomen with blood in the urine or nausea — this is the picture of a kidney stone. Call the doctor too if diarrhoea, nausea or heartburn persists or worsens. Seek emergency care for rash, hives, swelling of the face and throat, or breathlessness. Anyone with G6PD deficiency should watch for sudden pallor, dark urine or yellowing. And do not keep yourself on large amounts without a medical reason.'
  },
  interact: {
    ar: 'يحسّن امتصاص الحديد، وهذا مقصود في فقر الدم لكنه غير مرغوب عند من عنده تحميل حديدي كداء ترسّب الأصبغة الدموية. ويربكه بعض ما يُقاس في المختبر: تختلّ به قراءة السكّر في شرائط البول وبعض الأجهزة، فيُخبَر الطبيب. ومن عنده نقص خميرة ج ستّة ب د يستشير قبل المقادير الكبيرة لخطر انحلال الدم. وأخبر طبيبك بكل مكمّل وعشبة تأخذها، فكثير من الفوّارات والخلطات تحوي فيتامين ج بلا أن يُنتبه له.',
    en: 'It improves iron absorption, which is intended in anaemia but unwanted in someone with iron overload such as haemochromatosis. It confuses some laboratory measurements: it distorts glucose readings on urine strips and on some meters, so the doctor should be told. Anyone with G6PD deficiency should ask before taking large amounts, because of the risk of red cell breakdown. Tell your doctor about every supplement and herb you take, since many effervescent drinks and mixtures contain vitamin C unnoticed.'
  },
  avoid: {
    ar: 'يستشير الطبيب قبل المكمّل: من عنده حصى كلى أو مرض كلوي، ومن عنده داء ترسّب الأصبغة الدموية أو أي تحميل حديدي، ومن عنده نقص خميرة ج ستّة ب د، ومن عنده حساسية لأي مكوّن في المستحضر. ومريض السكّري يسأل عن طريقة فحص البول الصحيحة معه. ومن على حمية قليلة الملح ينتبه للمستحضرات التي تحوي صوديوماً. والحامل والمرضع تستشيران قبل تجاوز المقدار الغذائي المعتاد، إذ حُذّر من ارتفاع المكمّل في الحمل.',
    en: 'These should ask the doctor before supplementing: anyone with kidney stones or kidney disease, anyone with haemochromatosis or any iron overload, anyone with G6PD deficiency, and anyone allergic to a component of the preparation. A diabetic patient should ask about the correct way to test urine while on it. Anyone on a low-salt diet should note preparations containing sodium. Pregnant and nursing women should ask before exceeding the usual dietary amount, since high supplementation in pregnancy has been cautioned against.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682583.html',
    'https://medlineplus.gov/ency/article/002404.htm'
  ]
};

RX_BODY['colecalciferol'] = {
  what: {
    ar: 'فيتامين د٣، واسمه العلمي كوليكالسيفيرول، هو الصورة التي يصنعها جلد الإنسان حين تقع عليه الشمس، ولذلك يُسمّى فيتامين الشمس. وهو أقرب إلى الهرمون منه إلى الفيتامين لأنه يُصنع في الجسم ثم يُفعَّل في الكبد والكلى. مصادره الغذائية قليلة: الأسماك الدهنية والكبد وصفار البيض والأطعمة المدعّمة. ويُصرف مكمّلاً بلا وصفة أقراصاً وكبسولات وقطرات، ويُؤخذ مع وجبة فيها دهن لأنه ذائب في الدهون.',
    en: 'Vitamin D3, scientifically colecalciferol, is the form human skin makes when sunlight falls on it, which is why it is called the sunshine vitamin. It is closer to a hormone than a vitamin, because it is made in the body and then activated in the liver and kidney. Its food sources are few: oily fish, liver, egg yolk and fortified foods. It is sold as a supplement without prescription in tablets, capsules and drops, and is taken with a meal containing fat because it is fat-soluble.'
  },
  why: {
    ar: 'يُعطى لنقص فيتامين د الثابت بالتحليل، وهو شائع جداً حتى في بلاد الشمس بسبب البقاء داخل المباني والملابس الساترة والبشرة الداكنة. ويُعالَج به الكساح عند الأطفال ولين العظام عند الكبار، وهما لين العظم من نقصه. ويُضاف إلى علاج هشاشة العظام مع الكالسيوم، وإلى تدبير نقص كالسيوم الدم. وتوصي الجهات الصحية بإعطائه الرضّع والأطفال الصغار ولمن لا تصله الشمس في الشتاء أو يعيش داخل مؤسسة.',
    en: 'It is given for a vitamin D shortage proven by testing, which is very common even in sunny countries because of staying indoors, covering clothing and darker skin. It treats rickets in children and osteomalacia in adults, both being softening of the bone from its lack. It is added to the treatment of osteoporosis alongside calcium, and to the management of low blood calcium. Health authorities recommend giving it to infants and young children, and to anyone who gets no sun in winter or lives in an institution.'
  },
  how: {
    ar: 'الكالسيوم في الطعام لا يعبر جدار الأمعاء وحده، بل يحتاج من يفتح له الباب — وهذا عمل فيتامين د. يُصنع في الجلد أو يأتي من القرص، ثم يُفعَّل في الكبد ثم الكلى، فيأمر الأمعاء بامتصاص الكالسيوم والفوسفات ويضبط توزيعهما بين الدم والعظم. فإذا نقص، لم يمتصّ الجسم كالسيومه ولو أكثر منه، فسحبه من العظم ليحفظ مستوى الدم، فلان العظم وضعفت العضلة وآلمت. ولذلك لا يُعطى الكالسيوم وحده في النقص.',
    en: 'Calcium in food does not cross the intestinal wall by itself; it needs someone to open the door — and that is vitamin D’s work. It is made in the skin or comes from the tablet, then is activated in the liver and then the kidney, whereupon it orders the gut to absorb calcium and phosphate and regulates their distribution between blood and bone. If it falls short, the body does not absorb its calcium however much it eats, so it draws it from the bone to preserve the blood level, and the bone softens and the muscle weakens and aches. That is why calcium alone is not given in deficiency.'
  },
  effects: {
    ar: 'بالمقادير الاعتيادية هو من ألطف المكمّلات ونادراً ما يُشكى منه. وكل ما يُنسب إليه من أذى تقريباً يأتي من الإفراط لا من الاستعمال المعتاد، وأثره الأول ارتفاع الكالسيوم في الدم. وعلامات ذلك: غثيان وقيء وفقدان شهية، وإمساك، وعطش شديد وكثرة تبوّل، وتعب وضعف عضلي، وارتباك وتشوّش ذهن. ومع الوقت قد يترسّب الكالسيوم في الأنسجة والكلى فتتكوّن الحصى ويتأذّى النسيج الكلوي، وتضعف العظام بدل أن تقوى.',
    en: 'At ordinary amounts it is among the gentlest supplements and is rarely complained of. Almost every harm attributed to it comes from excess rather than ordinary use, and its first effect is a rise of calcium in the blood. The signs of that are nausea, vomiting and loss of appetite, constipation, intense thirst and frequent urination, tiredness and muscle weakness, confusion and clouded thinking. Over time calcium may deposit in tissues and the kidney, so stones form and kidney tissue is damaged, and the bones weaken instead of strengthening.'
  },
  warning: {
    ar: 'أوقف المكمّل واطلب الطبيب في اليوم نفسه عند اجتماع: غثيان وقيء وفقدان شهية مع عطش شديد وكثرة تبوّل وإمساك وضعف وارتباك — فهذه صورة ارتفاع الكالسيوم وتحتاج تحليلاً عاجلاً. واطلب الطوارئ عند ارتباك شديد أو خمول لا يستيقظ منه أو اضطراب في نبض القلب. وألم مفاجئ في الخاصرة مع دم في البول يعني حصوة. وموعد عادي يلزم إن لم يتحسّن ألم العظم والعضل رغم العلاج. ولا تتجاوز الحدّ الأعلى الذي حدّدته الجهات الصحية.',
    en: 'Stop the supplement and call the doctor the same day if these come together: nausea, vomiting and loss of appetite with intense thirst, frequent urination, constipation, weakness and confusion — this is the picture of raised calcium and needs an urgent blood test. Seek emergency care for severe confusion, a drowsiness you cannot be roused from, or a disturbance of the heart rhythm. Sudden flank pain with blood in the urine means a stone. A routine appointment is needed if bone and muscle pain do not improve despite treatment. Do not exceed the upper limit set by the health authorities.'
  },
  interact: {
    ar: 'يجتمع خطره مع كل ما يرفع الكالسيوم: مكمّلات الكالسيوم الكثيرة، ومدرّات البول الثيازيدية التي تقلّل طرح الكالسيوم في البول، وبعض أدوية القلب. ويقلّل امتصاصه دواء إنقاص الوزن أورليستات والأدوية الرابطة للأحماض الصفراوية لأنه ذائب في الدهون. وتخفض الكورتيزونات أثره في امتصاص الكالسيوم. وقد يتغيّر معه أثر بعض خافضات الدهون. وأهمّ ما يُنتبه له عملياً: تعدّد المستحضرات التي تحويه معاً بلا انتباه فيتراكم المقدار.',
    en: 'Its risk combines with everything that raises calcium: heavy calcium supplements, thiazide diuretics which reduce calcium loss in the urine, and some heart medicines. Its absorption is reduced by the weight-loss drug orlistat and by bile-acid-binding medicines, because it is fat-soluble. Corticosteroids lessen its effect on calcium absorption. The effect of certain lipid-lowering drugs may change with it. The most important practical point: several preparations containing it may be taken together unnoticed, so the amount accumulates.'
  },
  avoid: {
    ar: 'لا يُؤخذ من تلقاء المريض عند ارتفاع الكالسيوم في الدم، ولا عند فرط نشاط جارات الدرقية، ولا مع حصى الكلى المتكرّرة أو القصور الكلوي، ولا في أمراض تصنع فيها الأنسجة فيتامين د من نفسها كالساركويد وبعض أنواع اللمفوما — ففي هذه كلها القرار للطبيب ومعه تحليل. ويحتاج مريض الكبد والكلى إلى صورة مختلفة من الفيتامين أحياناً. والحامل والمرضع تلتزمان بالمقدار الموصى به ولا تتجاوزانه. والأطفال لهم حدّ أعلى أقلّ من حدّ البالغين.',
    en: 'It is not taken on the patient’s own initiative when blood calcium is raised, nor with overactive parathyroid glands, nor with recurrent kidney stones or kidney failure, nor in diseases where tissues make vitamin D of their own such as sarcoidosis and some lymphomas — in all of these the decision belongs to the doctor with a blood test in hand. Liver and kidney patients sometimes need a different form of the vitamin. Pregnant and nursing women keep to the recommended amount and do not exceed it. Children have a lower upper limit than adults.'
  },
  updated: '2026-09-10',
  src: [
    'https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-d/',
    'https://medlineplus.gov/ency/article/002405.htm'
  ]
};

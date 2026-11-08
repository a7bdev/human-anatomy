/* ============================================================
   موسوعة الأدوية — أجسام بطاقات دفعة اللقاحات الثالثة (vacc3)
   rx/rx-vacc3.js   (يحمّل عند فتح البطاقة)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. عدد الجرعات ومواعيدها
   يحدّدها برنامج التطعيم والطبيب، ولا تكتب هنا بقرار مقصود.
   ============================================================ */

var RX_BODY = window.RX_BODY || {};

RX_BODY['rabies-vaccine'] = {
  what: {
    ar: 'لقاح السعار (داء الكلب) لقاح معطّل يحتوي فيروساً مقتولاً لا يستطيع أن يسبّب المرض، ويعطى حقناً. وله استعمالان مختلفان: وقاية قبل التعرّض لمن يعمل مع الحيوانات أو في المختبرات أو يعيش في منطقة ينتشر فيها السعار ويبعد فيها العلاج، وعلاج وقائي بعد التعرّض لمن عضّه حيوان أو خدشه. والسعار متى ظهرت أعراضه قاتل في كل الحالات تقريباً، فقيمة هذا اللقاح كلها في أن يعطى قبل ظهور الأعراض لا بعدها.',
    en: 'Rabies vaccine is an inactivated vaccine containing killed virus that cannot cause the disease, and it is given by injection. It has two different uses: protection before exposure for people who work with animals or in laboratories or live where rabies is common and treatment is far away, and preventive treatment after exposure for someone bitten or scratched by an animal. Once its symptoms appear, rabies is fatal in almost every case, so the whole value of this vaccine lies in giving it before symptoms begin, not after.'
  },
  why: {
    ar: 'بعد أي عضّة أو خدش من حيوان قد يحمل السعار، أو لعق حيوان لجرح مفتوح أو للفم أو العين أو الأنف، يقرّر الطبيب هل يلزم اللقاح. والكلاب مصدر أغلب الإصابات البشرية في العالم، ومعها الخفافيش والثعالب وغيرها من الثدييات. ويبدأ اللقاح بعد التعرّض في أسرع وقت، لكنه قد ينفع في أي لحظة قبل ظهور الأعراض، فالتأخّر ليس سبباً لتركه. ومن لم يطعّم سابقاً يحتاج غالباً مع اللقاح الغلوبولين المناعي المضاد للسعار يحقن في الجرح، أمّا من طعّم سابقاً فيحتاج مساراً أقصر.',
    en: 'After any bite or scratch from an animal that may carry rabies, or an animal licking an open wound, the mouth, eye or nose, the doctor decides whether the vaccine is needed. Dogs are the source of most human cases worldwide, along with bats, foxes and other mammals. After exposure the vaccine is started as soon as possible, but it may still work at any point before symptoms begin, so delay is not a reason to skip it. Someone never vaccinated before usually also needs rabies immunoglobulin injected into the wound, while someone vaccinated before needs a shorter course.'
  },
  how: {
    ar: 'يعرض اللقاح على جهاز المناعة الفيروس المقتول، فيتعلّم الجسم صنع أجسام مضادّة تعرف فيروس السعار وتعطّله. وأعراض السعار لا تظهر عادةً إلا بعد أسابيع من العضّة، وقد تتأخّر شهوراً، وهذا التأخّر هو الفرصة: اللقاح يسابق الفيروس ليبني المناعة قبل أن يبدأ المرض. ولأن بناء المناعة يأخذ أياماً، يعطى غير المطعّم الغلوبولين المناعي ليقدّم أجساماً مضادّة جاهزة في موضع الجرح ريثما يعمل اللقاح. ويبدأ العلاج كله بغسل الجرح جيداً بالماء والصابون.',
    en: 'The vaccine shows the killed virus to the immune system, so the body learns to make antibodies that recognise and disable the rabies virus. Rabies symptoms usually appear only weeks after the bite and can take months, and that delay is the opportunity: the vaccine races the virus to build immunity before the illness begins. Because building immunity takes days, an unvaccinated person is given immunoglobulin to supply ready-made antibodies at the wound while the vaccine takes effect. The whole treatment begins with thoroughly washing the wound with soap and water.'
  },
  effects: {
    ar: 'الشائع ألم أو احمرار أو تورّم أو حكّة في موضع الحقن، ومعه أحياناً صداع أو غثيان أو ألم في البطن أو آلام عضلية أو دوخة. وقد تظهر الشرى، وهي حبوب حمراء مرتفعة تحكّ، أو ألم في المفاصل أو حمّى بعد الجرعات المعزّزة تحديداً. وهذه الآثار في أغلبها مزعجة لا خطيرة. وإن أزعجتك فكلّم الطبيب قبل أن تقطع المسار بنفسك، لأن ترك اللقاح بعد عضّة مشكوك فيها يعني مواجهة مرض يكاد يكون قاتلاً دائماً متى ظهرت أعراضه.',
    en: 'Common effects are pain, redness, swelling or itching at the injection site, sometimes with headache, nausea, abdominal pain, muscle aches or dizziness. Hives, which are raised itchy red bumps, joint pain or fever can appear, particularly after booster doses. Most of these effects are bothersome rather than dangerous. If they trouble you, talk to the doctor before stopping the course yourself, because abandoning the vaccine after a suspicious bite means facing an illness that is almost always fatal once its symptoms appear.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهرت بعد الحقن علامات حساسية شديدة: شرى منتشر، أو تورّم الوجه أو الحلق، أو صعوبة في التنفّس، أو تسارع ضربات القلب، أو دوخة شديدة أو ضعف مفاجئ. وبعد أي عضّة أو خدش من حيوان، أو لعق حيوان لجرح أو للفم أو العين أو الأنف: اغسل الموضع بالماء والصابون ربع ساعة على الأقل، ثم اذهب إلى الطبيب فوراً دون انتظار حتى لو بدا الجرح صغيراً. ولا تنتظر ظهور أعراض، فمتى ظهرت فات الأوان تقريباً. وأكمل مواعيد المسار كلها ولا تتوقّف لأنك تشعر بخير.',
    en: 'Call an ambulance at once if signs of a severe allergic reaction appear after the injection: widespread hives, swelling of the face or throat, difficulty breathing, a racing heartbeat, or severe dizziness or sudden weakness. After any bite or scratch from an animal, or an animal licking a wound, the mouth, eye or nose: wash the area with soap and water for at least a quarter of an hour, then see a doctor immediately without waiting, even if the wound looks small. Do not wait for symptoms, because once they appear it is almost always too late. Complete every appointment in the course and do not stop because you feel well.'
  },
  interact: {
    ar: 'أخبر الطبيب إن كنت تأخذ الكلوروكين أو دواءً قريباً منه من أدوية الملاريا، فقد يضعف استجابة الجسم للقاح، وللطبيب إرشادات خاصة في هذه الحالة. وأدوية تثبيط المناعة، كالكورتيزونات الجهازية وأدوية زراعة الأعضاء والعلاج الكيميائي، لا تعطى أثناء مسار ما بعد التعرّض إلا إن كانت ضرورية لعلاج مرض آخر، فلا توقفها بنفسك بل أخبر الطبيب ليقرّر. والغلوبولين المناعي المضاد للسعار يعطى مع اللقاح لغير المطعّمين ولا يستعاض به عن اللقاح.',
    en: 'Tell the doctor if you take chloroquine or a related antimalarial drug, as it may weaken the body\'s response to the vaccine, and doctors have specific guidance for this situation. Immune-suppressing medicines, such as systemic corticosteroids, transplant drugs and chemotherapy, are not given during a post-exposure course unless they are essential for treating another condition, so do not stop them yourself but tell the doctor so they can decide. Rabies immunoglobulin is given together with the vaccine to unvaccinated people and does not replace the vaccine.'
  },
  avoid: {
    ar: 'لقاح الوقاية قبل التعرّض لا يعطى لمن أصابته حساسية شديدة من جرعة سابقة أو من أحد مكوّناته، ويؤجّل لمن عنده مرض متوسط أو شديد، أمّا الوعكة الخفيفة فلا تمنعه. أمّا بعد التعرّض الفعلي فالأمر مختلف: يعطى اللقاح في الحمل والرضاعة وضعف المناعة، لأن السعار قاتل. ومن سبق أن أصابته حساسية شديدة من اللقاح يخبر الطبيب قبل أي جرعة ليقرّر كيف يمضي. ومن عنده ضعف مناعة يحتاج متابعة خاصة، وقد يطلب الطبيب تحليل دم يتأكّد به من تكوّن المناعة.',
    en: 'The pre-exposure vaccine is not given to anyone who had a severe allergic reaction to a previous dose or to one of its ingredients, and it is postponed in moderate or severe illness, while a mild illness does not prevent it. After a real exposure things are different: the vaccine is given in pregnancy, breastfeeding and weakened immunity, because rabies is fatal. Anyone who once had a severe allergic reaction to the vaccine tells the doctor before any dose so they can decide how to proceed. People with weakened immunity need special follow-up, and the doctor may order a blood test to confirm that immunity has formed.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/rabies.html',
    'https://www.who.int/news-room/fact-sheets/detail/rabies',
    'https://www.nhs.uk/conditions/rabies/',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ba8d4e72-f452-4859-ae6f-3644b4b0a78c'
  ]
};

RX_BODY['respiratory-syncytial-virus-vaccine'] = {
  what: {
    ar: 'لقاح الفيروس المخلوي التنفسي يقي من مرض الجهاز التنفسي السفلي الذي يسبّبه هذا الفيروس الشائع. والفيروس يمرّ على أغلب الناس كنزلة برد خفيفة، لكنه قد يكون خطيراً على الرضّع وكبار السن. واللقاح يعطى حقناً في العضل، ويحتوي نسخة مثبّتة من أحد بروتينات الفيروس لا الفيروس نفسه. وله فئتان: كبار السن ومن عنده أمراض مزمنة تجعله عرضة للمضاعفات، والحامل في أواخر حملها لتحمي طفلها في أشهره الأولى بعد الولادة.',
    en: 'Respiratory syncytial virus vaccine prevents the lower respiratory tract disease caused by this common virus. The virus passes through most people as a mild cold, but it can be serious for infants and older adults. The vaccine is given by injection into the muscle and contains a stabilised copy of one of the virus\'s proteins, not the virus itself. It has two groups: older adults and people with chronic conditions that make them prone to complications, and pregnant women late in pregnancy to protect their baby in the first months after birth.'
  },
  why: {
    ar: 'يعطى لكبار السن، وخصوصاً من تقدّم بهم العمر كثيراً ومن عنده مرض مزمن في القلب أو الرئة أو ضعف في المناعة أو يقيم في دار رعاية، لأن الفيروس قد يسبّب لهم التهاباً رئوياً خطيراً. ويعطى للحامل في الثلث الأخير من الحمل لحماية المولود، فيولد محمياً في الأشهر الأولى التي يكون فيها التهاب القصيبات والالتهاب الرئوي أخطر ما يكون عليه. والبديل للرضيع أجسام مضادّة وقائية تعطى له مباشرة، ويكفي أغلب الأطفال أحد الخيارين لا كلاهما.',
    en: 'It is given to older adults, especially the very elderly and those with chronic heart or lung disease, weakened immunity or living in a care home, because the virus can cause them serious pneumonia. It is given to pregnant women in the third trimester to protect the baby, who is then born protected during the first months when bronchiolitis and pneumonia are most dangerous. The alternative for the baby is protective antibodies given directly, and most babies need only one of the two options, not both.'
  },
  how: {
    ar: 'يحمل اللقاح نسخة مثبّتة من بروتين الاندماج، وهو البروتين الذي يستعمله الفيروس ليلتحم بخلايا المجاري التنفسية ويدخلها. فحين يرى جهاز المناعة هذا البروتين يتعلّم صنع أجسام مضادّة تلتصق به، فإذا جاءت العدوى الحقيقية لاحقاً وجدت الجسم مستعداً، فيقلّ احتمال أن تنزل إلى الرئتين وتسبّب مرضاً شديداً. وعند الحامل تصل الحماية إلى المولود فيولد وفي جسمه دفاع جاهز يغطّي أشهره الأولى، وهي الفترة التي يكون فيها الفيروس أخطر عليه.',
    en: 'The vaccine carries a stabilised copy of the fusion protein, the protein the virus uses to fuse with and enter the cells of the airways. When the immune system sees this protein it learns to make antibodies that stick to it, so if the real infection comes later the body is ready, and it is less likely to reach the lungs and cause severe illness. In a pregnant woman the protection reaches the baby, who is born with a ready defence covering the first months of life, the period when the virus is most dangerous to them.'
  },
  effects: {
    ar: 'الشائع ألم أو احمرار أو تورّم في موضع الحقن، ومعه أحياناً تعب أو حمّى أو صداع أو غثيان أو إسهال أو ألم في العضلات أو المفاصل، وهي عادةً خفيفة. والنادر المهمّ: متلازمة غيلان باريه عند بعض كبار السن، وهي حالة عصبية تسبّب وخزاً وخدراً وضعفاً في العضلات، ورصد ارتفاع خطرها في الأسابيع التالية للقاح. وقد سجّلت عند بعض الحوامل الملقّحات ولادة مبكرة وارتفاع ضغط في الحمل منه تسمّم الحمل، دون أن يثبت أن اللقاح هو السبب، ولهذا يعطى في نافذة محدّدة من أواخر الحمل لا قبلها.',
    en: 'Common effects are pain, redness or swelling at the injection site, sometimes with tiredness, fever, headache, nausea, diarrhoea or muscle or joint pain, and they are usually mild. The rare important effect is Guillain-Barre syndrome in some older adults, a nerve condition that causes tingling, numbness and muscle weakness, with a raised risk seen in the weeks after vaccination. Preterm birth and high blood pressure in pregnancy, including pre-eclampsia, have been reported in some vaccinated pregnant women, without proof that the vaccine is the cause, which is why it is given in a set window late in pregnancy and not earlier.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهرت علامات حساسية شديدة: شرى، أو تورّم الوجه أو الحلق، أو صعوبة التنفّس، أو تسارع القلب، أو دوخة أو ضعف شديد. وإن ظهر في الأسابيع الستة التالية للقاح وخز أو خدر أو ضعف في العضلات يزداد، أو صعوبة في المشي أو البلع أو التنفّس، فاذهب إلى الطوارئ لأنها قد تكون متلازمة غيلان باريه. وعلى الحامل بعد اللقاح أن تذهب فوراً إن شعرت بانقباضات منتظمة قبل موعدها أو نزول ماء أو نزف، أو صداع شديد مع زغللة في النظر أو تورّم مفاجئ في الوجه واليدين.',
    en: 'Call an ambulance at once if signs of a severe allergic reaction appear: hives, swelling of the face or throat, difficulty breathing, a racing heartbeat, or severe dizziness or weakness. If tingling, numbness or muscle weakness that keeps increasing, or difficulty walking, swallowing or breathing, appears in the six weeks after the vaccine, go to the emergency department, as it may be Guillain-Barre syndrome. After the vaccine a pregnant woman should go immediately if she feels regular contractions before her due time, leaking fluid or bleeding, or a severe headache with blurred vision or sudden swelling of the face and hands.'
  },
  interact: {
    ar: 'يجوز أن يعطى لقاح الفيروس المخلوي في الزيارة نفسها مع لقاحات أخرى. ومن يأخذ أدوية تثبّط المناعة، كالكورتيزونات الجهازية أو أدوية زراعة الأعضاء أو العلاج الكيميائي، قد تضعف استجابته للقاح فيبقى أقلّ حماية، فليخبر الطبيب بها. وإن كانت الأم قد تلقّت اللقاح في حملها فلتخبر طبيب الطفل بذلك، لأنه يحدّد هل يحتاج الرضيع إلى الأجسام المضادّة الوقائية أيضاً أم تكفيه حماية أمه، إذ يكفي أغلب الأطفال أحد الخيارين.',
    en: 'The RSV vaccine may be given at the same visit as other vaccines. People taking immune-suppressing medicines, such as systemic corticosteroids, transplant drugs or chemotherapy, may respond less well to the vaccine and remain less protected, so they should tell the doctor about them. If the mother received the vaccine during pregnancy she should tell the baby\'s doctor, who decides whether the baby also needs the protective antibodies or whether the mother\'s protection is enough, since most babies need only one of the two options.'
  },
  avoid: {
    ar: 'لا يعطى لمن أصابته حساسية شديدة (تأق) من جرعة سابقة أو من أحد مكوّناته، وهذا هو المانع المطلق الوحيد. ويؤجّل لمن عنده مرض متوسط أو شديد حتى يتعافى. والحامل تأخذه في النافذة التي يحدّدها برنامج التطعيم في أواخر الحمل لا قبلها، لأن الحذر من الولادة المبكرة جعل التوقيت نفسه جزءاً من السلامة. وليس هذا اللقاح للرضّع أنفسهم، فحمايتهم تأتي من لقاح الأم أو من الأجسام المضادّة الوقائية. ومن عنده حساسية شديدة من أي شيء يذكرها لمقدّم اللقاح قبل الحقن.',
    en: 'It is not given to anyone who had a severe allergic reaction (anaphylaxis) to a previous dose or to one of its ingredients, which is the only absolute contraindication. It is postponed in moderate or severe illness until recovery. A pregnant woman takes it in the window set by the vaccination programme late in pregnancy and not earlier, because caution about preterm birth made the timing itself part of safety. This vaccine is not for babies themselves, whose protection comes from the mother\'s vaccine or from protective antibodies. Anyone with a severe allergy to anything mentions it to the vaccinator before the injection.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/rsv.html',
    'https://www.nhs.uk/vaccinations/rsv-vaccine/',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be18292e-b1a2-4815-a0ed-003efaa6bea3'
  ]
};

RX_BODY['rotavirus-vaccine'] = {
  what: {
    ar: 'لقاح الفيروس العجلي (الروتا) لقاح حيّ مضعّف يعطى قطرات في فم الرضيع لا حقناً. يحمي من عدوى الفيروس العجلي، وهي من أشهر أسباب الإسهال المائي الشديد مع القيء والحمّى عند الرضّع والأطفال الصغار، وقد تؤدّي إلى جفاف يستدعي دخول المستشفى وربما الوفاة. وله أنواع تجارية تختلف في عدد جرعاتها، وكلها مقيّدة بنافذة عمرية ضيّقة في الأشهر الأولى من العمر يحدّدها برنامج التطعيم، فلا يبدأ به الطفل ولا يكمله بعد تجاوزها.',
    en: 'Rotavirus vaccine is a live weakened vaccine given as drops into the baby\'s mouth, not by injection. It protects against rotavirus infection, one of the commonest causes of severe watery diarrhoea with vomiting and fever in infants and young children, which can lead to dehydration needing hospital care and possibly death. Its brands differ in the number of doses, and all are limited to a narrow age window in the first months of life set by the vaccination programme, so a child neither starts nor completes it once that window has passed.'
  },
  why: {
    ar: 'يعطى لكل الرضّع ضمن برنامج التطعيم الروتيني ليحميهم من الإسهال والقيء الشديدين اللذين يسبّبهما الفيروس. أغلب الأطفال يتعافون من العدوى في أيام، لكن بعضهم يصاب بجفاف خطير يحتاج علاجاً في المستشفى، وهذا بالذات ما يمنعه اللقاح. وبحسب هيئة الصحة البريطانية يقي نحو ثمانية من كل عشرة أطفال ملقّحين من العدوى. ولا يعالج اللقاح إسهالاً قائماً، ولا يحمي من أسباب الإسهال الأخرى، فتبقى النظافة وسوائل معالجة الجفاف ضرورية عند أي إسهال.',
    en: 'It is given to all infants within the routine vaccination programme to protect them from the severe diarrhoea and vomiting the virus causes. Most children recover from the infection within days, but some develop dangerous dehydration needing hospital treatment, and that is exactly what the vaccine prevents. According to the NHS it prevents infection in about eight out of ten vaccinated babies. The vaccine does not treat existing diarrhoea and does not protect against other causes of diarrhoea, so hygiene and rehydration fluids remain essential with any diarrhoea.'
  },
  how: {
    ar: 'يحتوي اللقاح فيروساً عجلياً مضعّفاً يتكاثر في الأمعاء الدقيقة للطفل دون أن يمرضه، فيتعلّم جهازه المناعي التعرّف على الفيروس وصنع دفاع ضدّه في الموضع نفسه الذي تبدأ فيه العدوى الحقيقية. ولأنه حيّ، يخرج فيروس اللقاح في براز الطفل في الأيام التالية، ويبلغ ذلك ذروته بعد نحو أسبوع من الجرعة الأولى، وقد ينتقل إلى من يخالطه. ولهذا ينصح بغسل اليدين جيداً بعد تغيير الحفاض، خصوصاً إن كان في البيت من عنده ضعف مناعة.',
    en: 'The vaccine contains a weakened rotavirus that multiplies in the child\'s small intestine without making them ill, so their immune system learns to recognise the virus and build a defence in the very place where the real infection begins. Because it is live, the vaccine virus comes out in the child\'s stool in the following days, peaking about a week after the first dose, and it can pass to people in close contact. That is why thorough hand washing after nappy changes is advised, especially if someone in the home has weakened immunity.'
  },
  effects: {
    ar: 'الشائع تهيّج الطفل وكثرة بكائه، وإسهال أو قيء خفيف مؤقت، وقد يظهر سعال أو سيلان أنف أو حمّى أو قلّة شهية أو طفح. وهذه آثار بسيطة في الغالب. أمّا الأثر النادر المهمّ فهو انغلاف الأمعاء، أي دخول جزء من الأمعاء في جزء آخر فيسدّها. وهو يحدث طبيعياً عند بعض الرضّع دون لقاح، لكن اللقاح يزيد خطره زيادة صغيرة، وأكثر ما يقع في الأسبوع الأول بعد الجرعة الأولى أو الثانية، ويحتاج علاجاً في المستشفى وقد يحتاج جراحة.',
    en: 'Common effects are irritability and more crying, and temporary mild diarrhoea or vomiting, and cough, runny nose, fever, poor appetite or a rash may appear. These effects are usually minor. The rare important effect is intussusception, where one part of the bowel slides into another and blocks it. It happens naturally in some infants without any vaccine, but the vaccine adds a small extra risk, mostly in the first week after the first or second dose, and it needs hospital treatment and may need surgery.'
  },
  warning: {
    ar: 'اذهب بالطفل إلى الطوارئ فوراً إن ظهر في الأيام التالية للقاح، وخصوصاً في الأسبوع الأول: نوبات بكاء شديد مع ألم في البطن تدوم دقائق وتعود مرّة بعد مرّة، أو شدّ الساقين نحو الصدر أثناء النوبة، أو قيء متكرّر، أو دم في البراز أو براز يشبه هلام التوت الأحمر، أو انتفاخ البطن، أو خمول وضعف غير معتاد. فهذه علامات انغلاف الأمعاء. واطلب الإسعاف فوراً عند علامات الحساسية الشديدة: شرى، أو تورّم الوجه أو الحلق، أو صعوبة التنفّس، أو ضعف مفاجئ.',
    en: 'Take the child to the emergency department at once if, in the days after the vaccine and especially in the first week, you see: bouts of severe crying with tummy pain that last minutes and keep coming back, pulling the legs up to the chest during a bout, repeated vomiting, blood in the stool or stool that looks like redcurrant jelly, a swollen tummy, or unusual drowsiness and weakness. These are signs of intussusception. Call an ambulance at once for signs of a severe allergic reaction: hives, swelling of the face or throat, difficulty breathing, or sudden weakness.'
  },
  interact: {
    ar: 'وجود شخص ضعيف المناعة أو امرأة حامل في البيت لا يمنع تطعيم الطفل، لكنه يستدعي عناية أكبر بغسل اليدين بعد تغيير الحفاض لأن فيروس اللقاح يخرج في البراز، ويوازن الطبيب الأمر إن كان المخالط شديد ضعف المناعة. وإن كان الطفل نفسه يأخذ أدوية مثبّطة للمناعة فسلامة اللقاح وفعاليته عنده غير مثبتة، والقرار للطبيب. وتنبيه خاص: غطاء بعض عبوات القطرة الفموية فيه مطّاط اللاتكس الطبيعي، فأخبر الممرّض إن كان عند الطفل حساسية شديدة منه. وإن بصق الطفل القطرة فوراً فالممرّض يقرّر إعادتها.',
    en: 'Having someone with weakened immunity or a pregnant woman at home does not prevent vaccinating the child, but it calls for extra care with hand washing after nappy changes because the vaccine virus comes out in stool, and the doctor weighs the matter if the contact is severely immunocompromised. If the child is taking immune-suppressing medicines, the vaccine\'s safety and effectiveness have not been established, and the decision is the doctor\'s. A special note: the cap of some oral applicators contains natural rubber latex, so tell the nurse if the child has a severe latex allergy. If the baby spits the drops straight out, the nurse decides whether to repeat them.'
  },
  avoid: {
    ar: 'لا يعطى للطفل المصاب بنقص المناعة المشترك الشديد، ولا لمن سبق أن أصيب بانغلاف الأمعاء، ولا لمن عنده تشوّه خلقي في الأمعاء غير مصحّح يهيّئه للانغلاف، ولا لمن أصابته حساسية شديدة من جرعة سابقة أو من مكوّناته. ويحتاج قراراً خاصاً من الطبيب إن كان الطفل مصاباً بفيروس نقص المناعة أو يأخذ أدوية مثبّطة للمناعة أو عنده سرطان يصيب الدم أو الغدد اللمفاوية. ويؤجّل عند المرض المتوسط أو الشديد، أمّا الوعكة الخفيفة فلا تمنعه. والولادة المبكرة ليست مانعاً. ولا يعطى بعد تجاوز النافذة العمرية المحدّدة.',
    en: 'It is not given to a child with severe combined immunodeficiency, one who has had intussusception before, one with an uncorrected congenital bowel malformation that predisposes to intussusception, or one who had a severe allergic reaction to a previous dose or its ingredients. It needs a special decision by the doctor if the child has HIV, takes immune-suppressing medicines or has a cancer affecting the blood or lymph glands. It is postponed in moderate or severe illness, while a mild illness does not prevent it. Premature birth is not a contraindication. It is not given once the set age window has passed.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/rotavirus.html',
    'https://www.nhs.uk/vaccinations/rotavirus-vaccine/',
    'https://www.cdc.gov/rotavirus/hcp/vaccine-considerations/index.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f3182470-1965-4e20-dbaf-e3506f893ea5'
  ]
};

RX_BODY['rubella-vaccine'] = {
  what: {
    ar: 'لقاح الحصبة الألمانية لقاح حيّ مضعّف، ولا يعطى في الغالب وحده بل ضمن اللقاح الثلاثي للحصبة والنكاف والحصبة الألمانية، أو الرباعي الذي يضيف إليها جدري الماء. والحصبة الألمانية عدوى فيروسية تسبّب حمّى والتهاب حلق وطفحاً وصداعاً وتهيّج العين، وتمرّ خفيفة عند أغلب الأطفال. لكن خطرها الحقيقي على الحامل: إن أصابتها في أشهر الحمل الأولى فقد تسبّب الإجهاض أو وفاة الجنين أو تشوّهات خلقية شديدة فيما يسمّى متلازمة الحصبة الألمانية الخلقية.',
    en: 'Rubella vaccine is a live weakened vaccine, usually not given alone but within the combined measles, mumps and rubella vaccine, or the four-in-one that adds chickenpox. Rubella is a viral infection causing fever, sore throat, rash, headache and eye irritation, and it is mild in most children. Its real danger is to pregnant women: if it strikes in the early months of pregnancy it can cause miscarriage, stillbirth or severe birth defects, known as congenital rubella syndrome.'
  },
  why: {
    ar: 'يعطى لكل الأطفال ضمن برنامج التطعيم الروتيني، ولليافعين والبالغين الذين لم يكتسبوا المناعة. وأهمّ من ينبغي أن يتأكّد من تطعيمه: المرأة التي تخطّط للحمل، والعاملون في الرعاية الصحية، والمسافرون إلى مناطق ينتشر فيها المرض. فالغاية ليست حماية الطفل من مرض خفيف فحسب، بل أن تدخل المرأة حملها وهي محصّنة فلا يصل الفيروس إلى جنينها. وقد يعطى مبكراً للرضيع المسافر خارج البلاد. ولا علاقة بين اللقاح الثلاثي والتوحّد، وهذا ما أثبتته الأبحاث.',
    en: 'It is given to all children within the routine vaccination programme, and to teenagers and adults who have not gained immunity. Those who most need to make sure they are vaccinated are women planning pregnancy, healthcare workers, and travellers to areas where the disease is common. The goal is not only to protect a child from a mild illness, but for a woman to enter pregnancy already immune so the virus cannot reach her baby. It may be given early to an infant travelling abroad. There is no link between the combined vaccine and autism, as research has shown.'
  },
  how: {
    ar: 'يحتوي اللقاح فيروسات حيّة مضعّفة تتكاثر في الجسم تكاثراً محدوداً دون أن تسبّب المرض المعتاد، فيصنع الجسم أجساماً مضادّة ترتبط بالحماية من الحصبة الألمانية، ومعها من الحصبة والنكاف في اللقاح الثلاثي. ولأن الفيروس حيّ، فقد يظهر بعد التطعيم بأيام ما يشبه مرضاً خفيفاً: حمّى أو طفح أو تورّم في الغدد. ولهذا السبب نفسه يمنع اللقاح في الحمل وعند ضعف المناعة الشديد، إذ قد يسبّب فيروس اللقاح عند ضعيف المناعة عدوى تهدّد الحياة.',
    en: 'The vaccine contains live weakened viruses that multiply in the body to a limited extent without causing the usual illness, so the body makes antibodies linked to protection against rubella, and against measles and mumps in the combined vaccine. Because the virus is live, something like a mild illness may appear days after vaccination: fever, rash or swollen glands. For the same reason the vaccine is not given in pregnancy or severely weakened immunity, since in a person with weak immunity the vaccine virus can cause a life-threatening infection.'
  },
  effects: {
    ar: 'الشائع ألم أو احمرار في موضع الحقن، وحمّى وطفح خفيف، ويظهر أغلبها بعد أسبوع إلى أسبوعين تقريباً من التطعيم لا في اليوم نفسه. وقد تتورّم غدد الرقبة أو الخدّين، ويظهر ألم مؤقت في المفاصل أو تيبّسها، وهذا أوضح عند النساء البالغات تحديداً. والنادر: تشنّج حراري مصاحب للحمّى في الأسبوعين الأولين، وانخفاض مؤقت في الصفيحات يسبّب نزفاً أو كدمات غير معتادة، وحساسية شديدة. وعند ضعف المناعة الشديد قد يسبّب فيروس اللقاح عدوى تهدّد الحياة.',
    en: 'Common effects are pain or redness at the injection site, fever and a mild rash, most appearing about one to two weeks after vaccination rather than on the same day. Glands in the neck or cheeks may swell, and temporary joint pain or stiffness can occur, more noticeably in adult women. Rare effects include a seizure with fever in the first two weeks, a temporary fall in platelets causing unusual bleeding or bruising, and severe allergy. In severely weakened immunity the vaccine virus can cause a life-threatening infection.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً عند علامات الحساسية الشديدة: شرى، أو تورّم الوجه أو الحلق، أو صعوبة التنفّس، أو تسارع القلب، أو دوخة أو ضعف شديد. واطلب المساعدة الطبية العاجلة إن أصاب الطفل تشنّج مع الحمّى بعد التطعيم. وراجع الطبيب سريعاً إن ظهرت في الأسابيع التالية كدمات بلا سبب، أو نقاط حمراء صغيرة على الجلد، أو نزف من الأنف أو اللثة لا يتوقّف، فهذه علامات نقص الصفيحات. وإن اكتشفت المرأة أنها حامل بعد التطعيم بقليل فلتخبر طبيبها ولا تتّخذ أي قرار وحدها.',
    en: 'Call an ambulance at once for signs of a severe allergic reaction: hives, swelling of the face or throat, difficulty breathing, a racing heartbeat, or severe dizziness or weakness. Seek urgent medical help if a child has a seizure with fever after vaccination. See a doctor promptly if, in the following weeks, there is unexplained bruising, tiny red spots on the skin, or bleeding from the nose or gums that will not stop, as these are signs of low platelets. If a woman finds she is pregnant shortly after vaccination, she should tell her doctor and not make any decision alone.'
  },
  interact: {
    ar: 'الغلوبولينات المناعية ونقل الدم ومنتجات الدم تضعف استجابة الجسم للقاح، فيؤجّل الطبيب التطعيم بعدها مدّة يحدّدها. واللقاحات الحيّة الأخرى، كجدري الماء والحمّى الصفراء، تعطى معه في اليوم نفسه أو يفصل بينها بشهر على الأقل. وقد يخفي اللقاح مؤقتاً نتيجة اختبار التوبركولين للسلّ، فيجرى الاختبار قبل اللقاح أو معه في اليوم نفسه أو بعده بعدّة أسابيع. وأدوية تثبيط المناعة، كالكورتيزونات الجهازية والعلاج الكيميائي، تستدعي مراجعة الطبيب قبل التطعيم.',
    en: 'Immunoglobulins, blood transfusions and blood products weaken the body\'s response to the vaccine, so the doctor postpones vaccination after them for a period they determine. Other live vaccines, such as chickenpox and yellow fever, are given on the same day or separated by at least a month. The vaccine may temporarily mask the result of the tuberculin skin test for TB, so the test is done before the vaccine, on the same day, or several weeks after it. Immune-suppressing medicines, such as systemic corticosteroids and chemotherapy, call for a talk with the doctor before vaccination.'
  },
  avoid: {
    ar: 'لا يعطى في الحمل، وعلى المرأة أن تتجنّب الحمل شهراً بعد التطعيم. ولا يعطى عند ضعف المناعة الشديد، ولا لمن عنده سلّ نشط غير معالج، ولا لمن أصابته حساسية شديدة من جرعة سابقة أو من مكوّناته كالجيلاتين أو النيومايسين. ويؤجّل عند المرض المتوسط أو الشديد وبعد نقل دم حديث، ويحتاج تقييماً خاصاً من عنده تاريخ نقص صفيحات. وبعض أنواع اللقاح الثلاثي يحتوي جيلاتين الخنزير، وفي المقابل نوع آخر خالٍ منه يمكن طلبه. وقد يخرج فيروس اللقاح في حليب المرضع دون أن يسجّل مرض خطير عند رضيعها.',
    en: 'It is not given in pregnancy, and a woman should avoid becoming pregnant for a month after vaccination. It is not given in severely weakened immunity, untreated active tuberculosis, or to anyone who had a severe allergic reaction to a previous dose or its ingredients such as gelatin or neomycin. It is postponed in moderate or severe illness and after a recent blood transfusion, and anyone with a history of low platelets needs special assessment. Some brands of the combined vaccine contain pork gelatine, while another brand without it can be requested. The vaccine virus may pass into breast milk without serious illness having been recorded in the nursing baby.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/mmr.html',
    'https://www.nhs.uk/vaccinations/mmr-vaccine/',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0a9e384f-e717-436b-b9a0-15e53cef0862',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=73eae9fc-507b-4c9c-883d-63eb2e3cc6f6'
  ]
};

RX_BODY['tetanus-vaccine'] = {
  what: {
    ar: 'لقاح الكزاز ليس بكتيريا حيّة، بل ذيفان بكتيريا الكزاز بعد أن يعطّل فيصير ذيفاناً معدّلاً لا يؤذي لكنه يعلّم الجسم. ولا يعطى وحده في الغالب: يأتي مع لقاح الخناق في اللقاح الثنائي، أو مع الخناق والسعال الديكي في اللقاح الثلاثي للكبار، أو ضمن لقاحات الأطفال المركّبة. والكزاز مرض خطير تدخل بكتيرياه من جرح أو خدش أو حرق أو عضّة يلوّثها التراب أو السماد، فتسبّب تيبّساً شديداً في العضلات قد ينتهي بالعجز عن فتح الفم أو البلع أو التنفّس، وربما الوفاة.',
    en: 'Tetanus vaccine is not live bacteria but the tetanus bacterium\'s toxin after it has been inactivated, becoming a modified toxin that does no harm but teaches the body. It is usually not given alone: it comes with diphtheria in the two-in-one vaccine, with diphtheria and whooping cough in the adult three-in-one, or within combined childhood vaccines. Tetanus is a serious disease whose bacteria enter through a wound, scratch, burn or bite contaminated with soil or manure, causing severe muscle stiffness that can end in being unable to open the mouth, swallow or breathe, and possibly death.'
  },
  why: {
    ar: 'يعطى للأطفال ضمن برنامج التطعيم الروتيني على جرعات متتابعة، ثم للمراهقين والبالغين جرعةً معزّزة على فترات منتظمة يحدّدها البرنامج. ويعطى أيضاً بعد جرح عميق أو ملوّث أو حرق إن كان قد مضى على آخر جرعة وقت طويل، والطبيب هو من يقرّر ذلك بحسب نوع الجرح وتاريخ التطعيم. وتأخذ الحامل في كل حمل اللقاح الثلاثي الذي يحوي الكزاز والسعال الديكي، لتحمي مولودها من السعال الديكي في أسابيعه الأولى. وينبغي تحديثه قبل السفر إلى مناطق نائية بعيدة عن العلاج.',
    en: 'It is given to children within the routine vaccination programme as a series of doses, then to teenagers and adults as a booster at regular intervals set by the programme. It is also given after a deep or dirty wound or a burn if a long time has passed since the last dose, and the doctor decides this according to the type of wound and vaccination history. A pregnant woman takes the three-in-one vaccine containing tetanus and whooping cough in every pregnancy, to protect her newborn from whooping cough in the first weeks. It should be updated before travel to remote areas far from treatment.'
  },
  how: {
    ar: 'الأذى في الكزاز يأتي من سمّ تفرزه البكتيريا في الجرح فيسبّب تيبّس العضلات وتشنّجها. واللقاح يعرض على جهاز المناعة نسخة معطّلة من هذا السمّ، فيصنع الجسم أجساماً مضادّة تعطّل السمّ الحقيقي إن دخل يوماً. ولأن هذه الحماية تحتاج تجديداً مع الوقت، وضعت الجرعات المعزّزة. أمّا بعد جرح خطير عند من لم يطعّم تطعيماً كافياً، فيعطى في المستشفى الغلوبولين المناعي المضاد للكزاز ليقدّم أجساماً مضادّة جاهزة فوراً، إلى جانب تنظيف الجرح.',
    en: 'The harm in tetanus comes from a poison the bacteria release in the wound, which causes muscle stiffness and spasms. The vaccine shows the immune system an inactivated copy of this poison, so the body makes antibodies that disable the real poison if it ever enters. Because this protection needs renewing over time, booster doses were introduced. After a serious wound in someone not adequately vaccinated, the hospital gives tetanus immunoglobulin to supply ready-made antibodies at once, alongside cleaning the wound.'
  },
  effects: {
    ar: 'الشائع ألم أو احمرار أو تورّم في موضع الحقن، وحمّى خفيفة وصداع وتعب، وأحياناً غثيان أو إسهال أو ألم في البطن. وقد يغمى على بعض الناس بعد الحقن، فيحسن الجلوس أو الاستلقاء قليلاً. والنادر: تفاعل موضعي شديد يسمّى تفاعل آرثوس، وفيه تورّم وألم كبيران حول موضع الحقن، ويحدث غالباً عند من عنده مستوى عالٍ من الأجسام المضادّة من جرعات سابقة. وأندر منه التهاب في أعصاب الكتف والذراع، ومتلازمة غيلان باريه.',
    en: 'Common effects are pain, redness or swelling at the injection site, mild fever, headache and tiredness, and sometimes nausea, diarrhoea or tummy pain. Some people faint after the injection, so it is better to sit or lie down for a while. Rare effects include a severe local reaction called an Arthus reaction, with marked swelling and pain around the injection site, which mostly occurs in people with high antibody levels from previous doses. Rarer still are inflammation of the nerves of the shoulder and arm, and Guillain-Barre syndrome.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً عند علامات الحساسية الشديدة: شرى، أو تورّم الوجه أو الحلق، أو صعوبة التنفّس، أو تسارع القلب، أو دوخة أو ضعف شديد. واذهب إلى الطوارئ إن ظهر في الأسابيع التالية وخز أو ضعف يزداد في الأطراف أو صعوبة في المشي أو التنفّس. وبعد أي جرح: اذهب إلى الطوارئ فوراً إن كان الجرح عميقاً، أو ظهرت علامات الكزاز كتيبّس الفك أو تشنّج العضلات أو صعوبة البلع أو التنفّس. وراجع الطبيب في اليوم نفسه إن كان الجرح ملوّثاً بالتراب أو فيه جسم غريب أو ظهرت عليه علامات التهاب ولم تكن متأكّداً من تطعيمك.',
    en: 'Call an ambulance at once for signs of a severe allergic reaction: hives, swelling of the face or throat, difficulty breathing, a racing heartbeat, or severe dizziness or weakness. Go to the emergency department if tingling or increasing weakness in the limbs, or difficulty walking or breathing, appears in the following weeks. After any wound: go to the emergency department at once if the wound is deep, or if signs of tetanus appear such as a stiff jaw, muscle spasms, or difficulty swallowing or breathing. See a doctor the same day if the wound is contaminated with soil, has something stuck in it, or shows signs of infection and you are not sure of your vaccination.'
  },
  interact: {
    ar: 'لقاح الكزاز لقاح غير حيّ، فلا يتعارض مع أغلب الأدوية، ويمكن أن يعطى في الزيارة نفسها مع لقاحات أخرى. لكن أدوية تثبيط المناعة، كالكورتيزونات الجهازية والعلاج الكيميائي، قد تضعف استجابة الجسم له فتقلّ الحماية، فأخبر الطبيب بها. ومن أصابه تفاعل آرثوس من جرعة سابقة لا يأخذ اللقاح قبل انقضاء الفترة المعتادة بين الجرعات المعزّزة، حتى عند علاج جرح، لأن مستوى الأجسام المضادّة عنده عالٍ أصلاً. وأخبر الطبيب إن أصابتك متلازمة غيلان باريه بعد جرعة سابقة.',
    en: 'Tetanus vaccine is not a live vaccine, so it does not clash with most medicines and can be given at the same visit as other vaccines. But immune-suppressing medicines, such as systemic corticosteroids and chemotherapy, may weaken the body\'s response to it and reduce protection, so tell the doctor about them. Someone who had an Arthus reaction to a previous dose does not receive the vaccine before the usual interval between boosters has passed, even when treating a wound, because their antibody level is already high. Tell the doctor if you developed Guillain-Barre syndrome after a previous dose.'
  },
  avoid: {
    ar: 'لا يعطى لمن أصابته حساسية شديدة من جرعة سابقة من لقاحات الكزاز أو الخناق أو السعال الديكي. ومن أصيب بمتلازمة غيلان باريه في الأسابيع الستة التي تلت لقاحاً فيه الكزاز يوازن الطبيب معه الفائدة والخطر قبل أي جرعة جديدة. ومن أصابه تورّم أو ألم شديد بعد جرعة سابقة يخبر الطبيب. ولا يأخذ اللقاح الثلاثي الذي يحوي السعال الديكي من أصيب باعتلال دماغي خلال أيام من لقاح السعال الديكي. ويؤجّل عند المرض المتوسط أو الشديد. أمّا الحمل فليس مانعاً، بل ينصح فيه باللقاح الثلاثي.',
    en: 'It is not given to anyone who had a severe allergic reaction to a previous dose of tetanus, diphtheria or whooping cough vaccine. For someone who developed Guillain-Barre syndrome in the six weeks after a tetanus-containing vaccine, the doctor weighs the benefit and risk before any new dose. Anyone who had severe swelling or pain after a previous dose tells the doctor. The three-in-one containing whooping cough is not given to someone who developed brain disease within days of a whooping cough vaccine. It is postponed in moderate or severe illness. Pregnancy is not a contraindication; the three-in-one is in fact recommended during it.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/td.html',
    'https://www.cdc.gov/vaccines/hcp/current-vis/tdap.html',
    'https://www.nhs.uk/conditions/tetanus/',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a87f53c-0c8a-4c66-9048-2a0cf60a6a5c'
  ]
};

RX_BODY['tick-borne-encephalitis-vaccine'] = {
  what: {
    ar: 'لقاح التهاب الدماغ المنقول بالقراد لقاح معطّل يحتوي فيروساً مقتولاً، ويعطى حقناً على سلسلة جرعات يحدّدها الطبيب. والمرض عدوى فيروسية تنتقل بلدغة قراد مصاب، وتوجد في أجزاء من أوروبا وآسيا. وقد تبدأ بحمّى وصداع وآلام عضلية، ثم تشتدّ عند بعض المصابين فتلتهب أنسجة الدماغ وما حوله، وقد تجرّ مضاعفات عصبية خطيرة. وقد استعمل هذا اللقاح في أوروبا أكثر من عشرين عاماً قبل اعتماده في الولايات المتحدة.',
    en: 'Tick-borne encephalitis vaccine is an inactivated vaccine containing killed virus, given by injection as a series of doses set by the doctor. The disease is a viral infection passed on by the bite of an infected tick and found in parts of Europe and Asia. It may begin with fever, headache and muscle aches, then become severe in some people, inflaming the brain and the tissues around it, and it can lead to serious neurological complications. The vaccine was used in Europe for more than twenty years before it was approved in the United States.'
  },
  why: {
    ar: 'يعطى لمن ينتقل للعيش في منطقة ينتشر فيها المرض أو يسافر إليها وسيتعرّض للقراد كثيراً بحكم نشاطه في الطبيعة، كالتخييم والمشي الطويل في الغابات والأعشاب. وقد ينظر فيه لمن قد يمارس نشاطاً خارجياً في أماكن القراد بحسب تقييم خطره الشخصي. أمّا أغلب المسافرين فخطر المرض عليهم منخفض جداً، والطبيب يقرّر بحسب خطّ الرحلة ونشاطاتها. ولا يغني اللقاح عن الوقاية من لدغ القراد نفسه، فهي تبقى أساسية حتى بعد التطعيم.',
    en: 'It is given to people moving to or travelling to an area where the disease occurs who will be heavily exposed to ticks through outdoor activities, such as camping and long walks in forests and grassland. It may be considered for those who might do outdoor activities in tick habitats, based on their personal risk assessment. For most travellers the risk of the disease is very low, and the doctor decides according to the itinerary and planned activities. The vaccine does not replace preventing tick bites themselves, which remains essential even after vaccination.'
  },
  how: {
    ar: 'يعرض اللقاح على جهاز المناعة الفيروس المقتول، فيتعلّم الجسم صنع أجسام مضادّة تعطّل الفيروس الحقيقي إن نقلته لدغة قراد لاحقاً. ولأن الفيروس مقتول فلا يمكن أن يسبّب العدوى. ولا تكتمل الحماية إلا بعد إتمام السلسلة التي يحدّدها الطبيب، ولهذا ينبغي التخطيط له قبل السفر بوقت كافٍ. وقد تكون الاستجابة أضعف عند من يعاني ضعف المناعة أو يأخذ أدوية مثبّطة لها، فيبقى أقلّ حماية من غيره، وتصير الوقاية من لدغ القراد عنده أهمّ.',
    en: 'The vaccine shows the killed virus to the immune system, so the body learns to make antibodies that disable the real virus if a tick bite later passes it on. Because the virus is killed, it cannot cause infection. Protection is complete only after finishing the series set by the doctor, which is why it should be planned well before travel. The response may be weaker in people with weakened immunity or on immune-suppressing medicines, who remain less protected than others, making tick-bite prevention even more important for them.'
  },
  effects: {
    ar: 'الشائع ألم أو إيلام عند لمس موضع الحقن. ويشعر بعض البالغين بتعب أو صداع أو آلام عضلية، أمّا الأطفال فأكثر ما يظهر عندهم الصداع والحمّى، وقد تظهر حمّى خفيفة عند غيرهم أيضاً. وقد يغمى على بعض الناس بعد الحقن، ولهذا ينصح بالجلوس أو الاستلقاء فترة قصيرة تحت المراقبة. وهذه الآثار في أغلبها خفيفة وعابرة. أمّا الحساسية الشديدة، مع صعوبة التنفّس أو تورّم الوجه والحلق، فنادرة لكنها ممكنة كما مع أي لقاح.',
    en: 'The common effect is pain or tenderness at the injection site. Some adults feel tired or have a headache or muscle aches, while in children headache and fever are the commonest, and a mild fever may appear in others too. Some people faint after the injection, so sitting or lying down for a short time under observation is advised. These effects are mostly mild and pass. A severe allergic reaction, with difficulty breathing or swelling of the face and throat, is rare but possible, as with any vaccine.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهرت علامات حساسية شديدة: صعوبة التنفّس، أو تورّم الوجه أو الحلق، أو شرى منتشر، أو ألم في الصدر، أو دوخة وضعف شديدان. واذهب إلى الطوارئ إن ظهرت بعد اللقاح علامات عصبية خطيرة كالتشوّش أو التشنّج أو الضعف المفاجئ. وبعد العودة من منطقة ينتشر فيها المرض: راجع الطبيب إن ظهرت حمّى وصداع وآلام عضلية بعد لدغة قراد أو نشاط في الغابات، وأخبره بمكان سفرك حتى لو كنت ملقّحاً، واذهب إلى الطوارئ إن اشتدّ الصداع أو تيبّست الرقبة أو اضطرب الوعي.',
    en: 'Call an ambulance at once if signs of a severe allergic reaction appear: difficulty breathing, swelling of the face or throat, widespread hives, chest pain, or severe dizziness and weakness. Go to the emergency department if serious neurological signs such as confusion, seizures or sudden weakness appear after the vaccine. After returning from an area where the disease occurs: see a doctor if fever, headache and muscle aches appear after a tick bite or time in forests, and tell them where you travelled even if vaccinated, and go to the emergency department if the headache becomes severe, the neck stiffens or consciousness is disturbed.'
  },
  interact: {
    ar: 'أدوية تثبيط المناعة، كالكورتيزونات الجهازية وأدوية زراعة الأعضاء والعلاج الكيميائي، قد تضعف استجابة الجسم للقاح فلا تكتمل الحماية، فأخبر الطبيب بها قبل التطعيم. وقد يحتوي اللقاح آثاراً من البروتامين والنيومايسين والجنتامايسين وبروتين الدجاج من مراحل تصنيعه، فمن عنده حساسية شديدة من أيٍّ منها يخبر الطبيب قبل الحقن. ولا يعني اللقاح التخلّي عن وسائل الوقاية من لدغ القراد في أماكن انتشاره، فهي تبقى جزءاً من الحماية لا بديلاً عنه.',
    en: 'Immune-suppressing medicines, such as systemic corticosteroids, transplant drugs and chemotherapy, may weaken the body\'s response to the vaccine so protection is incomplete, so tell the doctor about them before vaccination. The vaccine may contain traces of protamine, neomycin, gentamicin and chicken protein from its manufacture, so anyone with a severe allergy to any of them tells the doctor before the injection. The vaccine does not mean giving up tick-bite prevention where ticks are common; it remains part of protection, not something the vaccine replaces.'
  },
  avoid: {
    ar: 'لا يعطى لمن أصابته حساسية شديدة من جرعة سابقة أو من أحد مكوّناته، ومنها البروتامين والنيومايسين والجنتامايسين وبروتين الدجاج. ويستشير الطبيب قبل أخذه: الحامل أو من تخطّط للحمل، والمرضعة، ومن عنده ضعف في المناعة أو يأخذ أدوية تثبّطها. ومن عنده مرض أو حمّى وقت الموعد يؤجّل حتى يتعافى. ولا يعطى لمن هو دون السنة الأولى من العمر. والقرار عند الحامل والمرضعة موازنة يجريها الطبيب بين خطر المرض في مكان السفر وحاجة الرحلة نفسها.',
    en: 'It is not given to anyone who had a severe allergic reaction to a previous dose or to one of its ingredients, including protamine, neomycin, gentamicin and chicken protein. The following consult the doctor before taking it: a pregnant woman or one planning pregnancy, a breastfeeding woman, and anyone with weakened immunity or on immune-suppressing medicines. Anyone ill or feverish at the appointment postpones it until recovery. It is not given to children under one year of age. In pregnancy and breastfeeding the decision is a balance the doctor makes between the risk of the disease at the destination and the need for the trip itself.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/tick-borne-encephalitis/hcp/vaccine/index.html',
    'https://www.immunize.org/wp-content/uploads/vis/tbe.pdf',
    'https://www.immunize.org/vaccines/vis/tbe/'
  ]
};

RX_BODY['typhoid-vaccine'] = {
  what: {
    ar: 'لقاح التيفوئيد يحمي من الحمّى التيفية التي تسبّبها بكتيريا السالمونيلا التيفية، وتنتقل بالطعام والماء الملوّثين. وله نوعان مختلفان: لقاح معطّل يعطى حقناً، ولقاح حيّ مضعّف يؤخذ بالفم على هيئة كبسولات تحفظ في الثلاجة ولا تجمّد. ولكل منهما عمر أدنى لا يعطى قبله، ومدّة حماية تنتهي فيحتاج من يبقى معرّضاً جرعة معزّزة. ولا يحمي أيٌّ منهما حماية كاملة، فهو خط دفاع إضافي لا بديل عن الحذر في الطعام والشراب.',
    en: 'Typhoid vaccine protects against typhoid fever, caused by the bacterium Salmonella Typhi and spread through contaminated food and water. It comes in two different forms: an inactivated vaccine given by injection, and a live weakened vaccine taken by mouth as capsules that are kept in the fridge and not frozen. Each has a minimum age before which it is not given, and a period of protection that ends, so anyone still at risk needs a booster. Neither gives complete protection, so it is an extra line of defence, not a substitute for care with food and drink.'
  },
  why: {
    ar: 'يعطى للمسافرين إلى مناطق ينتشر فيها التيفوئيد، ومنها الهند وباكستان وبنغلاديش وأجزاء من آسيا وأفريقيا وأمريكا الوسطى والجنوبية، ولمن يخالط حاملاً للبكتيريا مخالطة قريبة، وللعاملين في المختبرات مع هذه البكتيريا. ويعطى قبل السفر بمدّة يحدّدها الطبيب كي تتكوّن الحماية. لكنه لا يغني عن الحذر: اغسل يديك بالماء والصابون، واشرب ماءً معبّأً أو مغلياً واستعمله لتنظيف الأسنان، وتجنّب الثلج والخضار النيئة والطعام المكشوف والألبان غير المبسترة، وكل الطعام مطبوخاً وساخناً.',
    en: 'It is given to travellers to areas where typhoid is common, including India, Pakistan, Bangladesh and parts of Asia, Africa, and Central and South America, to close contacts of a typhoid carrier, and to laboratory workers handling the bacterium. It is given before travel at a time set by the doctor so protection can form. But it does not replace caution: wash your hands with soap and water, drink bottled or boiled water and use it to brush your teeth, avoid ice, raw vegetables, uncovered food and unpasteurised dairy, and eat food thoroughly cooked and hot.'
  },
  how: {
    ar: 'اللقاح المحقون معطّل لا يحتوي بكتيريا حيّة، فيتعلّم منه الجسم صنع أجسام مضادّة ضدّ بكتيريا التيفوئيد دون أن يلتقي بها. أمّا اللقاح الفموي فيحمل سلالة حيّة مضعّفة تحتاج أن تتكاثر في الجسم لتحفّز الحماية. ولأن الفموي بكتيريا حيّة، فالمضادات الحيوية وبعض أدوية الملاريا قد تمنعها من التكاثر الكافي فتضيع الحماية. وفي الحالتين لا تتكوّن الحماية فوراً بل بعد مدّة من آخر جرعة، ولهذا يلزم أخذه قبل السفر بوقت كافٍ لا في يومه.',
    en: 'The injected vaccine is inactivated and contains no live bacteria, so the body learns from it to make antibodies against typhoid bacteria without meeting them. The oral vaccine carries a live weakened strain that needs to multiply in the body to trigger protection. Because the oral form is live bacteria, antibiotics and some antimalarial drugs can stop it multiplying enough, and protection is lost. In both cases protection does not form immediately but some time after the last dose, which is why it must be taken well before travel, not on the day.'
  },
  effects: {
    ar: 'اللقاح المحقون: ألم أو احمرار أو تورّم في موضع الحقن، وحمّى وصداع وشعور عام بالتوعّك. واللقاح الفموي: حمّى وصداع وألم في البطن وإسهال وغثيان وقيء. وهذه الآثار في أغلبها مؤقتة. أمّا الحساسية الشديدة فنادرة. وتذكّر أن ظهور حمّى مستمرّة وألم في البطن بعد العودة من السفر لا ينسب إلى اللقاح تلقائياً، فالتيفوئيد نفسه ممكن حتى مع التطعيم، لأن اللقاح لا يحمي حماية كاملة، فلا تطمئن للتطعيم وتؤخّر مراجعة الطبيب.',
    en: 'Injected vaccine: pain, redness or swelling at the injection site, fever, headache and a general unwell feeling. Oral vaccine: fever, headache, tummy pain, diarrhoea, nausea and vomiting. These effects are mostly temporary. A severe allergic reaction is rare. Remember that persistent fever and tummy pain after returning from travel should not automatically be blamed on the vaccine, because typhoid itself is possible even after vaccination since the vaccine does not protect completely, so do not rely on having been vaccinated and delay seeing a doctor.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً عند علامات الحساسية الشديدة: شرى، أو تورّم الوجه أو الحلق، أو صعوبة التنفّس، أو تسارع القلب، أو دوخة أو ضعف شديد. وبعد العودة من منطقة موبوءة: راجع الطبيب إن ظهرت حمّى وصداع وتعب وفقدان شهية، وأخبره بسفرك حتى لو كنت ملقّحاً، فأعراض التيفوئيد تظهر عادةً خلال أسابيع قليلة وقد تتأخّر أكثر. واذهب إلى الطوارئ فوراً إن اشتدّ ألم البطن فجأة، أو ظهر دم في البراز، أو تقيّأت دماً، فهذه علامات مضاعفات خطيرة.',
    en: 'Call an ambulance at once for signs of a severe allergic reaction: hives, swelling of the face or throat, difficulty breathing, a racing heartbeat, or severe dizziness or weakness. After returning from an affected area: see a doctor if fever, headache, tiredness and loss of appetite appear, and tell them about your travel even if vaccinated, because typhoid symptoms usually appear within a few weeks and may take longer. Go to the emergency department at once if tummy pain suddenly becomes severe, there is blood in the stool, or you vomit blood, as these are signs of serious complications.'
  },
  interact: {
    ar: 'اللقاح الفموي الحيّ لا يؤخذ مع المضادات الحيوية أو السلفوناميدات، لأنها قد تعطّل سلالة اللقاح فلا تتكوّن الحماية، فأخبر الطبيب إن كنت تأخذ مضاداً حيوياً أو أخذته مؤخّراً. وبعض أدوية الملاريا، كالميفلوكين والكلوروكين والبروغوانيل، لها نشاط مضاد للبكتيريا قد يضعف اللقاح الفموي، والطبيب يرتّب التوقيت بينها. أمّا تركيبة الأتوفاكون مع البروغوانيل الوقائية فيمكن أخذها معه. وهذا التعارض يخصّ اللقاح الفموي الحيّ، فأخبر الطبيب بأدويتك ليختار النوع المناسب.',
    en: 'The live oral vaccine is not taken with antibiotics or sulphonamides, because they may disable the vaccine strain so protection does not form, so tell the doctor if you are taking or have recently taken an antibiotic. Some antimalarials, such as mefloquine, chloroquine and proguanil, have antibacterial activity that may weaken the oral vaccine, and the doctor arranges the timing between them. The preventive combination of atovaquone with proguanil can, however, be taken alongside it. This clash concerns the live oral vaccine, so tell the doctor about your medicines so they can choose the right form.'
  },
  avoid: {
    ar: 'لا يعطى اللقاح الفموي الحيّ لمن عنده ضعف في المناعة، سواء من مرض أو من أدوية مثبّطة للمناعة أو علاج كيميائي، ولا لمن يأخذ مضاداً حيوياً في الوقت نفسه. ولا يعطى أيٌّ من النوعين لمن أصابته حساسية شديدة من جرعة سابقة أو من مكوّناته. ويؤجّل عند المرض المتوسط أو الشديد. والحامل تستشير الطبيب قبل أيٍّ منهما. ولكل نوع حدّ أدنى للعمر فلا يعطى للطفل الصغير قبل بلوغه، والطبيب يختار النوع المناسب لعمر المسافر وحالته وأدويته.',
    en: 'The live oral vaccine is not given to anyone with weakened immunity, whether from illness, immune-suppressing medicines or chemotherapy, nor to anyone taking an antibiotic at the same time. Neither form is given to anyone who had a severe allergic reaction to a previous dose or its ingredients. It is postponed in moderate or severe illness. A pregnant woman consults the doctor before either form. Each form has a minimum age, so it is not given to a young child before reaching it, and the doctor chooses the form suited to the traveller\'s age, condition and medicines.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/typhoid.html',
    'https://www.nhs.uk/conditions/typhoid-fever/',
    'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=194fde77-eaf8-4e4c-84ef-35d67b5eec11&type=display'
  ]
};

RX_BODY['varicella-vaccine'] = {
  what: {
    ar: 'لقاح الجدري المائي (جدري الماء) لقاح حيّ مضعّف يحتوي سلالة ضعيفة من الفيروس المسبّب للجدري المائي، ويعطى حقناً، وحده أو ضمن اللقاح الرباعي مع الحصبة والنكاف والحصبة الألمانية. والجدري المائي عدوى شديدة الانتشار تسبّب طفحاً حاكّاً من فقاعات مع حمّى، وقد تجرّ مضاعفات خطيرة كالالتهاب الرئوي والتهاب الدماغ أو أغشيته وعدوى الدم. واللقاح يحفّز الجسم ليحمي نفسه قبل أن يلتقي بالعدوى الحقيقية.',
    en: 'Varicella (chickenpox) vaccine is a live weakened vaccine containing a weak strain of the virus that causes chickenpox, given by injection alone or within the four-in-one vaccine with measles, mumps and rubella. Chickenpox is a highly contagious infection causing an itchy blistering rash with fever, and it can lead to serious complications such as pneumonia, inflammation of the brain or its coverings, and bloodstream infection. The vaccine prompts the body to protect itself before it meets the real infection.'
  },
  why: {
    ar: 'يعطى للأطفال ضمن برنامج التطعيم على جرعات يحدّدها البرنامج، وللمراهقين والبالغين الذين لم يصابوا بالجدري المائي ولم يطعّموا. وتنصح به هيئة الصحة البريطانية خصوصاً لمن يخالط عن قرب شخصاً معرّضاً لمرض شديد إن أصيب بالجدري، كالعاملين في الرعاية الصحية غير المحصّنين الذين يخالطون المرضى، وأقارب مرضى ضعف المناعة، فيحمي الملقّح نفسه ويقلّل احتمال أن ينقل العدوى إلى المريض الضعيف. ويمكن أن يعطى في الزيارة نفسها مع لقاحات أخرى.',
    en: 'It is given to children within the vaccination programme as doses set by the programme, and to teenagers and adults who have not had chickenpox and are not vaccinated. The NHS recommends it especially for people in close contact with someone at risk of serious illness from chickenpox, such as non-immune healthcare workers with patient contact and relatives of people with weakened immunity, so the vaccinated person protects themselves and is less likely to pass the infection to the vulnerable patient. It can be given at the same visit as other vaccines.'
  },
  how: {
    ar: 'يتكاثر الفيروس المضعّف في الجسم تكاثراً محدوداً فيحفّز نوعين من المناعة: أجساماً مضادّة في الدم، وخلايا مناعية تعرف الفيروس وتقضي على الخلايا المصابة به. فإن التقى الملقّح بالجدري الحقيقي لاحقاً كان جسمه مستعداً لمواجهته. ولأن الفيروس حيّ، قد يظهر عند بعض الملقّحين خلال الشهر التالي طفح يشبه الجدري الخفيف، ومن هذا الطفح قد ينتقل فيروس اللقاح نادراً إلى من لا مناعة عنده. وقد سجّل نادراً حزام ناري بعد التطعيم.',
    en: 'The weakened virus multiplies in the body to a limited extent and triggers two kinds of immunity: antibodies in the blood, and immune cells that recognise the virus and destroy infected cells. If the vaccinated person later meets real chickenpox, their body is ready to face it. Because the virus is live, some vaccinated people develop a rash resembling mild chickenpox within the following month, and from this rash the vaccine virus can rarely pass to someone without immunity. Shingles has rarely been recorded after vaccination.'
  },
  effects: {
    ar: 'الشائع ألم أو احمرار أو طفح في موضع الحقن، وحمّى. وقد يظهر طفح يشبه الجدري الخفيف في موضع الحقن أو في الجسم خلال الشهر التالي للتطعيم. والنادر المهمّ: التهاب رئوي، أو التهاب في الدماغ أو في أغشيته، أو تشنّج مصاحب للحمّى، أو نقص في الصفيحات، أو طفح جلدي شديد من نوع متلازمة ستيفنز جونسون، أو حزام ناري. وعند من عنده ضعف مناعة شديد قد يسبّب فيروس اللقاح عدوى منتشرة تهدّد الحياة، ولهذا لا يعطى له أصلاً.',
    en: 'Common effects are pain, redness or a rash at the injection site, and fever. A rash resembling mild chickenpox may appear at the injection site or on the body within the month after vaccination. Rare important effects include pneumonia, inflammation of the brain or its coverings, a seizure with fever, low platelets, a severe skin rash of the Stevens-Johnson type, or shingles. In someone with severely weakened immunity the vaccine virus can cause a widespread life-threatening infection, which is why it is not given to them at all.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً عند علامات الحساسية الشديدة: شرى، أو تورّم الوجه أو الحلق، أو صعوبة التنفّس، أو تسارع القلب، أو دوخة أو ضعف شديد. واذهب إلى الطوارئ إن ظهر بعد التطعيم صداع شديد مع تيبّس الرقبة أو تشوّش أو تشنّج، أو ضيق تنفّس وسعال مع حمّى، أو فقاعات واسعة وتقشّر في الجلد أو قروح في الفم. وإن ظهر طفح بعد اللقاح فابتعد عن الحوامل غير المحصّنات والمواليد ومرضى ضعف المناعة حتى يجفّ ويتقشّر، وأخبر جهة عملك إن كنت عاملاً صحياً.',
    en: 'Call an ambulance at once for signs of a severe allergic reaction: hives, swelling of the face or throat, difficulty breathing, a racing heartbeat, or severe dizziness or weakness. Go to the emergency department if, after vaccination, there is a severe headache with a stiff neck, confusion or a seizure, shortness of breath and cough with fever, or widespread blistering and peeling of the skin or mouth sores. If a rash appears after the vaccine, keep away from non-immune pregnant women, newborns and people with weakened immunity until it dries and crusts over, and tell your employer if you are a healthcare worker.'
  },
  interact: {
    ar: 'تجنّب الأسبرين وكل مستحضر فيه ساليسيلات ستة أسابيع بعد التطعيم، لأن الساليسيلات مع عدوى الجدري ارتبطت بمتلازمة راي الخطيرة. وهذا مهمّ للأطفال والمراهقين خصوصاً، وخافض الحرارة البديل يقرّره الطبيب أو الصيدلي. والغلوبولينات المناعية ونقل الدم ومنتجات الدم قد تضعف استجابة اللقاح، فيؤجّل بعدها. وقد يخفي اللقاح نتيجة اختبار التوبركولين للسلّ إن أجري خلال أسابيع بعده. واللقاحات الحيّة الأخرى، كاللقاح الثلاثي، تعطى معه في اليوم نفسه أو بعد أربعة أسابيع على الأقل.',
    en: 'Avoid aspirin and any product containing salicylates for six weeks after vaccination, because salicylates during chickenpox infection have been linked to the serious Reye syndrome. This matters especially for children and teenagers, and an alternative fever reducer is chosen by the doctor or pharmacist. Immunoglobulins, blood transfusions and blood products may weaken the vaccine response, so vaccination is postponed after them. The vaccine may mask the result of a tuberculin skin test for TB if the test is done within weeks of it. Other live vaccines, such as MMR, are given on the same day or at least four weeks apart.'
  },
  avoid: {
    ar: 'لا يعطى في الحمل، وعلى المرأة أن تتجنّب الحمل شهراً بعد آخر جرعة. ولا يعطى لمن عنده ضعف في المناعة من مرض أو من أدوية أو علاج كيميائي، ولا لمن في عائلته تاريخ نقص مناعة خلقي حتى يتأكّد من سلامة مناعته، ولا لمن عنده سلّ نشط غير معالج، ولا لمن أصابته حساسية شديدة من جرعة سابقة أو من مكوّناته كالجيلاتين والنيومايسين. ولا يعطى للرضيع قبل العمر الذي يحدّده البرنامج. ويؤجّل عند المرض المتوسط أو الشديد أو بعد نقل دم حديث.',
    en: 'It is not given in pregnancy, and a woman should avoid becoming pregnant for a month after the last dose. It is not given to anyone with weakened immunity from illness, medicines or chemotherapy, to anyone with a family history of inherited immune deficiency until their own immunity is confirmed, to anyone with untreated active tuberculosis, or to anyone who had a severe allergic reaction to a previous dose or its ingredients such as gelatin and neomycin. It is not given to an infant before the age set by the programme. It is postponed in moderate or severe illness or after a recent blood transfusion.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/varicella.html',
    'https://www.nhs.uk/vaccinations/chickenpox-vaccine/',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=524cf052-e90e-4595-af0a-608edbe9bd31'
  ]
};

RX_BODY['yellow-fever-vaccine'] = {
  what: {
    ar: 'لقاح الحمّى الصفراء لقاح حيّ مضعّف يحتوي فيروس الحمّى الصفراء بعد إضعافه، ويعطى حقناً، ويمنح أغلب المسافرين حماية طويلة. والحمّى الصفراء عدوى فيروسية ينقلها البعوض في أجزاء من أفريقيا وأمريكا الوسطى والجنوبية. يمرّ أغلب المصابين بها بأعراض خفيفة أو بلا أعراض، لكن الحالات الشديدة قد تسبّب اليرقان والنزف من مواضع متعدّدة وفشل الأعضاء، ويموت عدد كبير ممن تشتدّ عليهم. ولا علاج خاص للمرض نفسه، فالوقاية هي الأساس.',
    en: 'Yellow fever vaccine is a live weakened vaccine containing yellow fever virus after it has been weakened, given by injection, and it gives most travellers long-lasting protection. Yellow fever is a viral infection spread by mosquitoes in parts of Africa and Central and South America. Most infected people have mild or no symptoms, but severe cases can cause jaundice, bleeding from several sites and organ failure, and a large share of those who become severely ill die. There is no specific treatment for the disease itself, so prevention is the foundation.'
  },
  why: {
    ar: 'يعطى للمسافرين إلى المناطق التي تنتشر فيها الحمّى الصفراء أو المقيمين فيها، ولمن يدخل بلداً يشترط إثبات التطعيم، وللعاملين في المختبرات مع هذا الفيروس. ويحصل الملقّح على الشهادة الدولية للتطعيم، ولا تصير سارية إلا بعد عشرة أيام من الحقن، وتبقى صالحة مدى الحياة، ولهذا يؤخذ قبل السفر بوقت كافٍ. ولا يعطى إلا في مراكز معتمدة. ويبقى الحذر من لدغ البعوض ضرورياً: ملابس طويلة عند الفجر والغروب، وطارد حشرات، وناموسية معالجة.',
    en: 'It is given to travellers to or residents of areas where yellow fever occurs, to people entering a country that requires proof of vaccination, and to laboratory workers handling the virus. The vaccinated person receives the international certificate of vaccination, which becomes valid only ten days after the injection and remains valid for life, which is why it is taken well before travel. It is only given at approved centres. Care against mosquito bites remains essential: long clothes at dawn and dusk, insect repellent, and a treated bed net.'
  },
  how: {
    ar: 'يتكاثر الفيروس المضعّف في الجسم تكاثراً محدوداً، فيبني الجهاز المناعي أجساماً مضادّة تحمي من الفيروس الحقيقي إن نقله البعوض لاحقاً. ولأنه فيروس حيّ، فقد يتصرّف نادراً تصرّف المرض نفسه عند من لا يستطيع جسمه ضبطه، ككبار السن ومن عنده خلل في الغدة الزعترية أو ضعف في المناعة والرضّع الصغار، فيصيب الأعضاء الداخلية أو الجهاز العصبي. وهذه المضاعفات الخطيرة تكاد تقتصر على من يأخذ اللقاح أول مرة، لا على من يأخذ جرعة إضافية.',
    en: 'The weakened virus multiplies in the body to a limited extent, so the immune system builds antibodies that protect against the real virus if a mosquito passes it on later. Because it is a live virus, it can rarely behave like the disease itself in people whose bodies cannot control it, such as older adults, those with a thymus disorder or weakened immunity, and young infants, affecting the internal organs or the nervous system. These serious complications occur almost only in people receiving the vaccine for the first time, not in those receiving an additional dose.'
  },
  effects: {
    ar: 'الشائع ألم أو احمرار أو تورّم في موضع الحقن، وأحياناً حمّى وصداع وآلام عضلية. والنادر الخطير نوعان. الأول مرض عصبي مرتبط باللقاح: التهاب في الدماغ أو النخاع أو أغشيتهما، أو متلازمة غيلان باريه، ويظهر بعد أيام إلى أسابيع من الحقن. والثاني مرض يشبه الحمّى الصفراء نفسها ويصيب أعضاء متعدّدة، ويبدأ غالباً في الأيام الأولى بعد الحقن، وقد يكون قاتلاً. وخطر النوعين أعلى بوضوح عند من تجاوز الستين ومع ضعف المناعة.',
    en: 'Common effects are pain, redness or swelling at the injection site, and sometimes fever, headache and muscle aches. There are two rare serious kinds. The first is vaccine-associated neurological disease: inflammation of the brain, spinal cord or their coverings, or Guillain-Barre syndrome, appearing days to weeks after the injection. The second is an illness resembling yellow fever itself that affects several organs, usually starting in the first days after the injection, and it can be fatal. The risk of both is clearly higher in people over sixty and in weakened immunity.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً عند علامات الحساسية الشديدة: شرى، أو تورّم الوجه أو الحلق، أو صعوبة التنفّس، أو تسارع القلب، أو دوخة أو ضعف شديد. واذهب إلى الطوارئ إن ظهر في الأيام أو الأسابيع التالية للقاح: حمّى شديدة مع اصفرار الجلد أو العينين، أو نزف غير معتاد، أو صداع شديد مع تيبّس الرقبة، أو تشوّش أو تشنّج، أو ضعف أو خدر يزداد في الأطراف، وأخبرهم أنك تلقّيت اللقاح. وإن كانت المرضعة قد تلقّته فلتراقب رضيعها: أي حمّى أو خمول أو تشنّج أو رفض للرضاعة يستدعي الطوارئ.',
    en: 'Call an ambulance at once for signs of a severe allergic reaction: hives, swelling of the face or throat, difficulty breathing, a racing heartbeat, or severe dizziness or weakness. Go to the emergency department if, in the days or weeks after the vaccine, there is high fever with yellowing of the skin or eyes, unusual bleeding, a severe headache with a stiff neck, confusion or a seizure, or increasing weakness or numbness in the limbs, and tell them you received the vaccine. If a breastfeeding mother received it, she should watch her baby: any fever, drowsiness, seizure or refusal to feed calls for the emergency department.'
  },
  interact: {
    ar: 'اللقاحات الحيّة الأخرى تعطى معه في اليوم نفسه أو يفصل بينها بشهر على الأقل. ومع اللقاح الثلاثي للحصبة والنكاف والحصبة الألمانية تحديداً يفضّل الفصل بشهر متى أمكن، لأن إعطاءهما معاً أضعف الاستجابة لبعض مكوّناتهما. أمّا أدوية تثبيط المناعة، كالكورتيزونات الجهازية وأدوية زراعة الأعضاء والعلاج الكيميائي والعلاجات المثبّطة للمناعة الأخرى، فتجعل اللقاح ممنوعاً لا مجرّد أقلّ فعالية، لأن الفيروس الحيّ قد ينتشر في الجسم. فأخبر الطبيب بكل دواء تأخذه قبل التطعيم.',
    en: 'Other live vaccines are given on the same day or at least a month apart. With the measles, mumps and rubella vaccine in particular, a month\'s gap is preferred when possible, because giving them together weakened the response to some of their components. Immune-suppressing medicines, such as systemic corticosteroids, transplant drugs, chemotherapy and other immune-suppressing treatments, make the vaccine forbidden rather than just less effective, because the live virus may spread in the body. So tell the doctor about every medicine you take before vaccination.'
  },
  avoid: {
    ar: 'ممنوع على الرضيع دون ستة أشهر، ومن عنده خلل في الغدة الزعترية أو نقص مناعة خلقي، ومن تظهر عليه أعراض فيروس نقص المناعة أو انخفضت مناعته بشدّة، ومرضى السرطان النشط، ومتلقّي زراعة الأعضاء، ومن يأخذ علاجاً مثبّطاً للمناعة، ومن عنده حساسية شديدة من البيض أو الجيلاتين أو مكوّنات اللقاح. ويحتاج موازنة دقيقة مع الطبيب: الرضيع بين ستة وتسعة أشهر، ومن تجاوز الستين، والحامل، والمرضعة. وعلى المرأة أن تنتظر شهراً بعد اللقاح قبل الحمل.',
    en: 'It is forbidden for infants under six months, people with a thymus disorder or inherited immune deficiency, people with symptomatic HIV or severely low immunity, patients with active cancer, organ transplant recipients, anyone on immune-suppressing treatment, and anyone with a severe allergy to egg, gelatin or the vaccine\'s ingredients. It needs careful weighing with the doctor for infants between six and nine months, people over sixty, pregnant women and breastfeeding women. A woman should wait a month after the vaccine before becoming pregnant.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/yellow-fever.html',
    'https://www.cdc.gov/yellow-fever/hcp/vaccine/index.html',
    'https://www.ncbi.nlm.nih.gov/books/NBK620866/',
    'https://www.nhs.uk/conditions/yellow-fever/'
  ]
};

RX_BODY['tuberculin-ppd'] = {
  what: {
    ar: 'اختبار التوبركولين ليس لقاحاً ولا علاجاً، بل مادة تشخيصية: مستخلص بروتيني منقّى من بكتيريا السلّ يحقن حقناً سطحياً داخل جلد الساعد، ويسمّى أيضاً اختبار مانتو أو اختبار السلّ الجلدي. يكشف هل دخلت بكتيريا السلّ الجسم. ولا يحتوي بكتيريا حيّة، فلا يمكن أن يسبّب السلّ. ويحتاج زيارتين: الأولى للحقن، والثانية بعد يومين إلى ثلاثة ليقرأ المختصّ أثره على الجلد، ومن فاته موعد القراءة قد يعاد له الاختبار لأن القراءة المتأخّرة لا يعتمد عليها.',
    en: 'The tuberculin test is neither a vaccine nor a treatment but a diagnostic substance: a purified protein extract from tuberculosis bacteria injected just under the skin of the forearm, also called the Mantoux test or TB skin test. It shows whether TB bacteria have entered the body. It contains no live bacteria, so it cannot cause TB. It needs two visits: the first for the injection and the second two to three days later for a professional to read the skin reaction, and anyone who misses the reading may need a repeat test because a late reading is unreliable.'
  },
  why: {
    ar: 'يجرى لمن خالط مريضاً بالسلّ، وللعاملين في الرعاية الصحية، ولمن يعيش أو يعمل في أماكن مكتظّة كالسجون ودور الرعاية والملاجئ، ولمن عنده ضعف في المناعة، وللقادمين من مناطق ينتشر فيها السلّ، ولمن عنده أعراض كسعال مستمرّ وتعرّق ليلي. والهدف الأهمّ اكتشاف عدوى السلّ الكامنة، أي بكتيريا موجودة في الجسم دون أن تسبّب مرضاً الآن، حتى يقرّر الطبيب ما يلزم قبل أن تتحوّل إلى مرض. ولا يفرّق الاختبار وحده بين العدوى الكامنة والمرض النشط.',
    en: 'It is done for people who have been in contact with a TB patient, healthcare workers, people living or working in crowded settings such as prisons, care homes and shelters, people with weakened immunity, people from areas where TB is common, and those with symptoms such as a lasting cough and night sweats. The main aim is to find latent TB infection, meaning bacteria present in the body without causing illness now, so the doctor can decide what is needed before it becomes disease. The test alone cannot tell latent infection from active disease.'
  },
  how: {
    ar: 'من سبق أن دخلت بكتيريا السلّ جسمه تبقى في دمه خلايا مناعية تتذكّرها سنوات. فإذا حقن التوبركولين في الجلد تعرّفت عليه هذه الخلايا وتجمّعت حوله، فيتكوّن بعد يومين أو ثلاثة انتفاخ صلب في الجلد يقيسه المختصّ، وهذا ما يسمّى التفاعل المتأخّر. ومن لم يتعرّض للبكتيريا لا يتكوّن عنده هذا الانتفاخ في الغالب. والاحمرار أو الطفح الذي يظهر في الساعات الأولى دون انتفاخ صلب لا يعني عدوى السلّ، فالعبرة بالصلابة لا بالاحمرار.',
    en: 'In someone whose body has been entered by TB bacteria, immune cells that remember them remain in the blood for years. When tuberculin is injected into the skin, these cells recognise it and gather around it, forming after two or three days a firm swelling in the skin that the professional measures, known as a delayed reaction. In someone never exposed to the bacteria this swelling usually does not form. Redness or a rash in the first hours without a firm swelling does not mean TB infection; what counts is firmness, not redness.'
  },
  effects: {
    ar: 'قد يشعر الإنسان بوخزة خفيفة وقت الحقن، ثم ألم أو حكّة أو انزعاج في موضعه. وقد يظهر احمرار أو طفح في الساعات الأولى لا يدلّ على السلّ، وقد تظهر كدمة أو نزف صغير تحت الجلد في الأيام التالية. وعند من عنده تفاعل قويّ قد تظهر فقاعات أو تقرّح أو تموّت في الجلد مكان الاختبار. والحساسية الشديدة، كالتأق وتورّم الوجه والشرى، سجّلت لكنها نادرة. واترك الموضع مكشوفاً ولا تحكّه ولا تضع عليه كريماً، أمّا الماء فلا يضرّه.',
    en: 'A person may feel a slight pinch at the injection, then pain, itching or discomfort at the site. Redness or a rash may appear in the first hours without meaning TB, and a bruise or small bleed under the skin may appear in the following days. In someone with a strong reaction, blisters, ulceration or dead skin can appear at the test site. Severe allergy, such as anaphylaxis, facial swelling and hives, has been recorded but is rare. Leave the site uncovered, do not scratch it or put cream on it, while water does not harm it.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهر بعد الحقن شرى منتشر، أو تورّم في الوجه أو الشفتين أو الحلق، أو صعوبة في التنفّس، أو دوخة شديدة. وراجع الطبيب إن ظهرت في موضع الاختبار فقاعات أو قرحة مفتوحة أو اسوداد في الجلد. والأهمّ: النتيجة الإيجابية لا تعني وحدها أنك مريض بالسلّ النشط، لكنها تعني أنك تحتاج فحوصاً أخرى كصورة الصدر، فلا تتجاهلها ولا تؤجّلها. وإن كان عندك سعال مستمرّ أو تعرّق ليلي فراجع الطبيب مهما كانت النتيجة، لأن النتيجة السلبية لا تنفي المرض.',
    en: 'Call an ambulance at once if, after the injection, there are widespread hives, swelling of the face, lips or throat, difficulty breathing, or severe dizziness. See a doctor if blisters, an open ulcer or blackened skin appear at the test site. Most importantly: a positive result does not by itself mean you have active TB, but it does mean you need further tests such as a chest X-ray, so do not ignore or postpone it. If you have a lasting cough or night sweats, see a doctor whatever the result, because a negative result does not rule out the disease.'
  },
  interact: {
    ar: 'اللقاحات الحيّة، كاللقاح الثلاثي للحصبة والنكاف والحصبة الألمانية ولقاح جدري الماء ولقاح الحمّى الصفراء، قد تخفي التفاعل مؤقتاً فتعطي نتيجة سلبية كاذبة إن أعطيت في الشهر السابق للاختبار، فيجرى الاختبار قبلها أو معها في اليوم نفسه. وكذلك الكورتيزونات الجهازية وأدوية تثبيط المناعة. وفي المقابل، قد يعطي لقاح السلّ (بي سي جي) نتيجة إيجابية كاذبة، وكذلك التعرّض لبكتيريا متفطّرة غير السلّ؛ ولهذا يفضّل أحياناً تحليل الدم بدلاً منه لمن أخذ لقاح بي سي جي.',
    en: 'Live vaccines, such as the measles, mumps and rubella vaccine, chickenpox vaccine and yellow fever vaccine, can temporarily hide the reaction and give a false negative result if given in the month before the test, so the test is done before them or on the same day. The same applies to systemic corticosteroids and immune-suppressing medicines. On the other hand, the TB vaccine (BCG) can give a false positive result, as can exposure to mycobacteria other than TB, which is why a blood test is sometimes preferred instead for people who received BCG.'
  },
  avoid: {
    ar: 'لا يجرى لمن أصابه تفاعل شديد من اختبار سابق كالتقرّح أو التموّت أو الفقاعات أو التأق، ولا لمن عنده حساسية من مكوّناته، ولا لمن ثبت أنه مصاب بالسلّ النشط أو عولج سابقاً من عدوى السلّ علاجاً موثّقاً، ولا على جلد فيه حروق واسعة أو إكزيما. وقد تكون نتيجته أقلّ دقّة عند ضعف المناعة وسوء التغذية وبعض الأمراض والسرطانات، وعند من تعرّض للعدوى قبل أسابيع قليلة فقط لأن الجسم يحتاج وقتاً ليتكوّن التفاعل. ومن يفحص دورياً قد يجرى له الاختبار على خطوتين لتمييز التفاعل القديم.',
    en: 'It is not done for anyone who had a severe reaction to a previous test such as ulceration, dead skin, blistering or anaphylaxis, anyone allergic to its ingredients, anyone with confirmed active TB or a documented history of treatment for TB infection, or on skin with extensive burns or eczema. Its result may be less accurate with weakened immunity, malnutrition, some illnesses and cancers, and in someone exposed only a few weeks earlier because the body needs time to develop the reaction. People tested regularly may have a two-step test to tell an old reaction apart.'
  },
  updated: '2026-09-11',
  src: [
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4a732e9-b8ee-4e6d-8b9a-6a9d2c36bfcd',
    'https://www.medlineplus.gov/lab-tests/tuberculosis-screening/',
    'https://www.ncbi.nlm.nih.gov/books/NBK556037/'
  ]
};

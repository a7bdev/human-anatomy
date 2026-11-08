/* ============================================================
   موسوعة الأدوية — أجسام بطاقات دفعة الأعصاب والنفس الثانية
   rx/rx-neuro2.js   (يُحمَّل عند فتح البطاقة)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. الجرعة يحدّدها طبيب أو صيدلي.
   ============================================================ */

var RX_BODY = window.RX_BODY || {};

RX_BODY['cladribine'] = {
  what: {
    ar: 'الكلادريبين قرصٌ يُبلع من فصيلة نظائر البيورين، وهو من أدوية تعديل سير التصلّب المتعدّد لا من مسكّنات أعراضه. أصله دواء أورام يُحقن في سرطان الدم مشعّر الخلايا، ثم صيغ قرصاً لهذا المرض. وما يميّزه عن سائر أدويته أنه لا يُؤخذ كل يوم ولا كل أسبوع: يُعطى في دورات قصيرة متباعدة، ثم يبقى أثره في الجهاز المناعي أشهراً وسنين بعد آخر قرص. ولهذا يوصف بأنه علاج إعادة بناء مناعي لا كابح مستمرّ، ولا يُبدأ به عادةً من أول الطريق.',
    en: 'Cladribine is a swallowed tablet from the purine analogue family, one of the drugs that modify the course of multiple sclerosis rather than ease its symptoms. It began as an injected cancer drug for hairy cell leukaemia, then was formulated as a tablet for this disease. What sets it apart from the other MS drugs is that it is taken neither daily nor weekly: it is given in short, widely separated courses, and its effect on the immune system lasts months and years after the last tablet. It is therefore described as immune reconstitution therapy rather than a continuous suppressant, and it is not usually the first step.'
  },
  why: {
    ar: 'يُوصف للبالغين في الأشكال الانتكاسية من التصلّب المتعدّد: الانتكاسي الهاجع، والتقدّمي الثانوي النشط. وغرضه تقليل عدد الهجمات وإبطاء تراكم الإعاقة، لا إصلاح ما تلف من العصب. والنشرة الرسمية تقيّده صراحةً: لا يُعطى لمن أصابته نوبة سريرية واحدة معزولة لم تصر مرضاً كاملاً، ويُحفظ عادةً لمن لم يستجب لدواء آخر أو لم يحتمله، لأن ما يفعله بالجهاز المناعي أثقل من أن يُبدأ به بلا سبب يبرّره.',
    en: 'It is prescribed for adults with relapsing forms of multiple sclerosis: relapsing-remitting disease and active secondary progressive disease. Its aim is to reduce the number of attacks and slow the accumulation of disability, not to repair nerve damage already done. The official label restricts it explicitly: it is not given to someone who has had a single isolated clinical episode that has not become full disease, and it is generally reserved for those who did not respond to another drug or could not tolerate it, because what it does to the immune system is too heavy to begin without a reason that justifies it.'
  },
  how: {
    ar: 'في التصلّب المتعدّد تهاجم خلايا مناعية تُسمّى اللمفاويات الغلاف الذي يغطّي العصب فيتعطّل نقل الإشارة. والكلادريبين شبيه بلبنة من لبنات الحمض النووي، فتلتقطه اللمفاويات وتنشّطه داخلها بإنزيم خاصّ، ثم يفسد بناء حمضها النووي فتموت. وتختصّ به هذه الخلايا دون غيرها لأن التوازن بين إنزيم التنشيط وإنزيم التكسير داخلها يميل لصالح التنشيط. ولذلك ينزل عدد الخلايا التائية والبائية نزولاً عميقاً ثم يعود ارتفاعه ببطء على مدى أشهر.',
    en: 'In multiple sclerosis, immune cells called lymphocytes attack the sheath covering the nerve, and signal transmission fails. Cladribine resembles one of the building blocks of DNA, so lymphocytes take it up and activate it inside themselves with a particular enzyme; it then corrupts the building of their DNA and they die. It singles out these cells because, inside them, the balance between the activating enzyme and the breaking-down enzyme tilts towards activation. The count of T and B cells therefore falls deeply, then climbs back slowly over months.'
  },
  effects: {
    ar: 'أكثر ما يظهر: عدوى المجرى التنفّسي العلوي، والصداع، وانخفاض عدد اللمفاويات في التحليل — وهذا الانخفاض متوقّع ومقصود لا مفاجأة، وقد أصاب أغلب من تلقّى الدواء في التجارب، وأدنى قيمة له تأتي بعد شهرين إلى ثلاثة من بداية الدورة ثم يتحسّن تدريجياً. وقد تنقص كذلك الكريات البيضاء المتعادلة والهيموجلوبين والصفيحات. ومن الشائع طفح جلدي وتساقط شعر وغثيان وألم مفاصل. وأكثر أنواع العدوى تميّزاً على هذا الدواء هو الحزام الناري.',
    en: 'The commonest findings are upper respiratory tract infection, headache and a fall in the lymphocyte count on blood tests. That fall is expected and intended, not a surprise; it affected most people who received the drug in the trials, reaches its lowest point two to three months after a course begins, then improves gradually. Neutrophils, haemoglobin and platelets may also fall. Rash, hair thinning, nausea and joint pain are common. The most characteristic infection on this drug is shingles.'
  },
  warning: {
    ar: 'اطلب الطوارئ إذا جاءك ضعف جديد في طرف، أو تغيّر في الكلام أو البصر أو الشخصية أو التفكير لا يشبه انتكاساتك المعتادة، فقد يكون التهاب دماغ فيروسياً متعدّد البؤر. واذهب فوراً عند حمّى أو رعشة أو أي علامة عدوى، وعند شريط طفح مؤلم بحويصلات على جانب واحد من الجسم أو قرب العين. وتوقّف واطلب المساعدة عند اصفرار العين أو البول الداكن أو ألم أعلى البطن، وعند كدمات أو نزف بلا سبب، وعند طفح مع تقرّح الفم أو تورّم الحلق. وإن حملتِ أو شككتِ فأبلغي طبيبك في يومها.',
    en: 'Get emergency help if you develop new weakness in a limb, or a change in speech, vision, personality or thinking that is not like your usual relapses, as this may be a multifocal viral brain infection. Go immediately too for fever, chills or any sign of infection, and for a painful band of blistering rash on one side of the body or near the eye. Stop and seek help if the eyes turn yellow, the urine darkens or pain appears in the upper abdomen, if you bruise or bleed for no reason, or if a rash comes with mouth ulcers or throat swelling. And if you become pregnant or suspect it, tell your doctor that same day.'
  },
  interact: {
    ar: 'لا يُجمع مع أدوية أخرى تكبح المناعة أو تخفض نخاع العظم، ولا مع أدوية التصلّب المتعدّد التي تعمل بالكبح المناعي، لأن الأثر يتراكم فتنهار المقاومة. واللقاحات الحيّة الموهنة ممنوعة أثناء العلاج وحتى يتعافى الجهاز المناعي، وتُؤخذ قبل بدء الدورة بمدّة كافية يحدّدها الطبيب. ومن احتاج نقل دم وهو على هذا الدواء فلا بدّ أن تُشعَّع مكوّنات الدم الخلوية قبل نقلها اتّقاءً لتفاعل الطعم ضد المضيف. وأخبر كل طبيب تراه أنك تأخذه.',
    en: 'It is not combined with other medicines that suppress immunity or depress the bone marrow, nor with MS drugs that work by immune suppression, because the effect stacks and defences collapse. Live attenuated vaccines are not allowed during treatment and until the immune system has recovered; they are given far enough before a course begins, as the doctor decides. Anyone needing a blood transfusion while on this drug must have the cellular blood components irradiated first, to guard against graft-versus-host reaction. Tell every doctor you see that you are taking it.'
  },
  avoid: {
    ar: 'ممنوع في الحمل منعاً قاطعاً لأنه يشوّه الجنين، وممنوع على الرجل والمرأة القادرَين على الإنجاب إن لم يستعملا وسيلة منع حمل فعّالة أثناء العلاج ولمدّة بعده يحدّدها الطبيب لكل منهما. وممنوع أثناء الرضاعة في أيام الأخذ وبعدها بمدّة. ولا يُعطى لمن عنده سرطان نشط، ولا لحامل فيروس نقص المناعة، ولا لمن عنده عدوى مزمنة نشطة كالسلّ أو التهاب الكبد الوبائي، ولا لمن سبق أن تحسّس منه. ولا يُنصح به مع قصور كبدي متوسط أو شديد، ولا لمن دون الثامنة عشرة.',
    en: 'It is absolutely forbidden in pregnancy because it harms the fetus, and forbidden for men and women able to conceive unless effective contraception is used during treatment and for a period afterwards that the doctor sets for each. It is forbidden while breastfeeding on dosing days and for a period after. It is not given to anyone with active cancer, anyone carrying HIV, anyone with an active chronic infection such as tuberculosis or viral hepatitis, or anyone who has reacted to it before. It is not recommended with moderate or severe liver impairment, nor for anyone under eighteen.'
  },
  updated: '2026-09-10',
  src: [
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9c75e30a-a410-40f1-b653-04d532bd9144',
    'https://medlineplus.gov/druginfo/meds/a619038.html',
    'https://www.ncbi.nlm.nih.gov/books/NBK545307/'
  ]
};

RX_BODY['glatiramer-acetate'] = {
  what: {
    ar: 'الجلاتيرامر خليط من سلاسل بروتينية مصنّعة تُحقن تحت الجلد، وهو معدّل للمناعة لا كابح لها، ولهذا لا يترك صاحبه مكشوفاً للعدوى كما تفعل أدوية أثقل. وهو من أوائل ما اعتُمد للتصلّب المتعدّد وما زال مستعملاً بعد عقود لسلامته على المدى الطويل. يأتي في محاقن جاهزة تُحفظ في الثلاجة، ويُحقن في الذراع أو البطن أو الفخذ أو الردف مع تغيير الموضع في كل مرة. وهو يضبط المرض ولا يشفيه.',
    en: 'Glatiramer is a mixture of synthetic protein chains injected under the skin. It modulates the immune system rather than suppressing it, so it does not leave the person exposed to infection the way heavier drugs do. It was among the first treatments approved for multiple sclerosis and is still used decades later for its long-term safety. It comes in prefilled syringes kept in the fridge and is injected into the arm, abdomen, thigh or hip, moving the site each time. It controls the disease; it does not cure it.'
  },
  why: {
    ar: 'يُوصف للأشكال الانتكاسية من التصلّب المتعدّد: الانتكاسي الهاجع، والنوبة السريرية المعزولة الأولى، والتقدّمي الثانوي النشط. وغايته تقليل عدد الهجمات وشدّتها لا إرجاع ما فُقد من وظيفة. وهو غير مجدٍ في الأشكال التقدّمية غير النشطة. والنشرة تشدّد على نقطة يخطئ فيها كثيرون: استمرّ عليه حتى وأنت تشعر أنك بخير تماماً، فالشعور بالعافية هنا دليل نجاح الدواء لا دليل الاستغناء عنه، ولا تتوقّف قبل مراجعة طبيبك.',
    en: 'It is prescribed for relapsing forms of multiple sclerosis: relapsing-remitting disease, a first clinically isolated episode, and active secondary progressive disease. Its aim is to reduce the number and severity of attacks, not to restore function already lost. It is of no benefit in progressive forms without activity. The leaflet stresses a point many get wrong: keep taking it even when you feel perfectly well, because feeling well here is evidence the drug is working, not evidence you can do without it. Do not stop before speaking to your doctor.'
  },
  how: {
    ar: 'يشبه الجلاتيرامر في تركيبه البروتين الأساسي للميالين — الغلاف الذي تهاجمه المناعة في هذا المرض — فيعمل عمل الطُّعم الذي يشغل المهاجمين عن هدفهم الحقيقي. وهو يرتبط بجزيئات العرض المناعي فيوجّه الخلايا التائية من نمط التهابي إلى نمط منظّم مهدّئ. ولا يعبر بنفسه الحاجز بين الدم والدماغ، لكن الخلايا التي غيّرها في الدم تعبره فتخفّف الالتهاب داخل الجهاز العصبي. ويُنسب إليه كذلك رفع عوامل تغذية عصبية تحمي الخلية وتعين على الترميم.',
    en: 'Glatiramer resembles in its make-up the basic protein of myelin, the sheath the immune system attacks in this disease, so it works as a decoy that occupies the attackers away from their real target. It binds to the immune presentation molecules and steers T cells from an inflammatory type towards a calming regulatory type. It does not itself cross the barrier between blood and brain, but the cells it has changed in the blood do cross it and damp inflammation inside the nervous system. It is also credited with raising nerve growth factors that protect the cell and help repair.'
  },
  effects: {
    ar: 'أكثر ما يظهر تفاعل موضع الحقن: ألم واحمرار وحكّة وتورّم وكتلة صغيرة تحت الجلد، ويقلّ بتغيير الموضع في كل مرة وترك المحقنة تدفأ قليلاً قبل الحقن. ويشكو نحو واحد من كل عشرة من حمّى وقشعريرة. ومن الشائع تعرّق وألم ظهر وأحلام غريبة وغثيان وتضخّم عقد لمفية. وقد يظهر مع طول الاستعمال ضمور موضعي في الدهن تحت الجلد يترك انخفاضاً ظاهراً لا يعود كما كان، ولهذا صار تدوير المواضع قاعدة لا نصيحة.',
    en: 'The commonest effect is an injection-site reaction: pain, redness, itching, swelling and a small lump under the skin, all lessened by changing the site each time and letting the syringe warm a little before injecting. About one in ten people report fever and chills. Sweating, back pain, vivid dreams, nausea and swollen lymph nodes are common. With long use, a local loss of the fat under the skin may appear, leaving a visible dent that does not fill back in, which is why rotating sites is a rule rather than a suggestion.'
  },
  warning: {
    ar: 'قد تأتي بعد الحقن مباشرة نوبة عابرة: توهّج في الوجه وضيق في الصدر وخفقان وقلق وضيق نفس. أكثرها يزول من نفسه خلال نحو نصف ساعة ولا يحتاج علاجاً، لكنه لا يُميَّز في لحظته عن نوبة قلبية، فاطلب الطوارئ إن كانت الأولى عليك أو استمرّت أو اشتدّ ألم الصدر. واطلب الطوارئ فوراً عند تورّم الحلق أو اللسان أو طفح شرّي مع صعوبة تنفّس أو إغماء. وراجع طبيبك عاجلاً إن اسودّ جلد موضع الحقن أو تقرّح، أو اصفرّت عينك أو داكن بولك.',
    en: 'A brief episode may come immediately after an injection: flushing of the face, chest tightness, palpitations, anxiety and shortness of breath. Most settle on their own within about half an hour and need no treatment, but in the moment they cannot be told apart from a heart attack, so call for emergency help if it is your first, if it persists, or if the chest pain worsens. Get emergency help at once for swelling of the throat or tongue, or hives with difficulty breathing or fainting. See your doctor urgently if the skin at an injection site darkens or ulcerates, or if your eyes yellow or your urine darkens.'
  },
  interact: {
    ar: 'لا تُدرج النشرات الرسمية للجلاتيرامر قائمة تعارضات دوائية مهمّة، وهذه من مزاياه الملموسة أمام أدوية التصلّب الأخرى المثقلة بالمحاذير. ومع ذلك تبقى القاعدة قائمة: أخبر طبيبك وصيدليّك بكل ما تأخذه — الموصوف وغير الموصوف والفيتامينات والأعشاب — قبل أن تبدأ وكلّما أُضيف لك دواء جديد. والكورتيزون يُعطى مع هذا الدواء كثيراً عند الهجمات الحادّة ولا مانع من ذلك. وأخبر كل طبيب أو جرّاح أو طبيب أسنان تراه أنك على حقنة للتصلّب المتعدّد.',
    en: 'The official leaflets for glatiramer list no important drug interactions, and this is one of its tangible advantages over other MS drugs weighed down with cautions. Even so, the rule stands: tell your doctor and pharmacist everything you take — prescribed, over the counter, vitamins and herbs — before you start and whenever a new medicine is added. Corticosteroids are often given alongside it during acute attacks and there is no objection to that. Tell every doctor, surgeon or dentist you see that you are on an injection for multiple sclerosis.'
  },
  avoid: {
    ar: 'لا يأخذه من سبق أن تحسّس من الجلاتيرامر نفسه أو من المانيتول الداخل في تركيبه. ولم تُثبت سلامته ولا فائدته لمن دون الثامنة عشرة. وفي الحمل لا يُبدأ به عادةً إلا حين يكون المرض نشطاً وخطره على الأم أكبر، والقرار لطبيب الأعصاب مع طبيب الحمل لا لصاحبته وحدها. وأما الرضاعة فالمنقول منه إلى الحليب ضئيل جداً ويُعدّ من أقلّ أدوية هذا المرض إشكالاً فيها. وأخبر طبيبك إن كان عندك مرض في الكلى أو الكبد قبل أن تبدأ.',
    en: 'It is not for anyone who has reacted to glatiramer itself or to the mannitol in its formulation. Its safety and benefit have not been established for anyone under eighteen. In pregnancy it is not usually started unless the disease is active and the risk to the mother is greater; the decision belongs to the neurologist together with the obstetrician, not to the woman alone. In breastfeeding, the amount passing into milk is very small and it is regarded as one of the least problematic MS drugs for nursing. Tell your doctor about any kidney or liver disease before you begin.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a603016.html',
    'https://www.ncbi.nlm.nih.gov/books/NBK541007/'
  ]
};

RX_BODY['neostigmine'] = {
  what: {
    ar: 'النيوستيجمين مثبّط عكوس لإنزيم الكولين إستراز، وهو مركّب أمونيوم رباعي مشحون لا يعبر الحاجز بين الدم والدماغ، فيبقى أثره خارج الدماغ. أشهر صوره حقنة يستعملها طبيب التخدير في نهاية العملية، وله شكل فموي يُستعمل في الوهن العضلي الوبيل. ولأن أثره ينتشر على كل مستقبلات الأسيتيل كولين في الجسم لا على العضلة الإرادية وحدها، فهو يبطّئ القلب ويزيد الإفرازات ويقبض القصبات، ولهذا لا يكاد يُعطى وحده.',
    en: 'Neostigmine is a reversible blocker of the cholinesterase enzyme. It is a charged quaternary ammonium compound that does not cross the barrier between blood and brain, so its action stays outside the brain. Its best known form is an injection used by the anaesthetist at the end of an operation, and it has an oral form used in myasthenia gravis. Because its effect spreads to every acetylcholine receptor in the body, not to voluntary muscle alone, it slows the heart, increases secretions and tightens the airways, which is why it is almost never given on its own.'
  },
  why: {
    ar: 'استعماله الأول المعتمد هو إرجاع قوة العضلات بعد مرخيات العضل غير المزيلة للاستقطاب في نهاية العملية، حتى يعود المريض إلى التنفّس بنفسه وحماية مجراه الهوائي قبل نزع الأنبوب. ويُستعمل كذلك في الوهن العضلي الوبيل حين يُحتاج شكل يُحقن، وفي اختبار تشخيصه. ومن استعمالاته خارج النشرة انسداد القولون الكاذب الحادّ حين تفشل التدابير المحافظة. ولا يُعطى قبل التأكّد بجهاز مراقبة الأعصاب من أن الارتخاء العضلي لم يعد عميقاً تماماً.',
    en: 'Its first approved use is restoring muscle power after non-depolarising muscle relaxants at the end of an operation, so the patient breathes again and protects their own airway before the tube is removed. It is also used in myasthenia gravis when an injectable form is needed, and in the test that helps diagnose it. Off-label, it is used for acute colonic pseudo-obstruction when conservative measures fail. It is not given until a nerve stimulator confirms that the muscle blockade is no longer completely deep.'
  },
  how: {
    ar: 'تنتقل الأوامر من العصب إلى العضلة بناقل اسمه الأسيتيل كولين، ثم يكسره إنزيم الكولين إستراز في لحظته حتى لا تبقى العضلة مشدودة. ويعطّل النيوستيجمين هذا الإنزيم تعطيلاً مؤقّتاً، فيتراكم الناقل في المشتبك ويزاحم الدواء المرخّي على المستقبل فتعود العضلة تستجيب. لكن هذا الناقل نفسه يعمل في القلب والغدد والأمعاء والقصبات والحدقة، فتراكمه هناك يبطّئ النبض ويزيد اللعاب والمخاط ويضيّق القصبات ويحرّك الأمعاء ويضيّق الحدقة.',
    en: 'Commands travel from nerve to muscle by a messenger called acetylcholine, which the cholinesterase enzyme breaks down at once so the muscle does not stay contracted. Neostigmine temporarily disables that enzyme, so the messenger builds up in the junction and outcompetes the relaxant drug at the receptor, and the muscle responds again. But the same messenger works in the heart, the glands, the bowel, the airways and the pupil, so its build-up there slows the pulse, increases saliva and mucus, narrows the airways, stirs the bowel and constricts the pupil.'
  },
  effects: {
    ar: 'آثاره كلها تقريباً امتداد لعمله: بطء في النبض قد يصل إلى اضطرابات توصيل خطيرة، وزيادة اللعاب وإفرازات المجرى التنفّسي، وتضيّق القصبات، وغثيان وقيء وإسهال ومغص، وضيق الحدقة، وتعرّق، وإلحاح على التبوّل. وقد يظهر ضعف عضلي متناقض بدل القوة المرجوّة إذا زادت الكمية على الحاجة، وهو ضعف يمسّ عضلات التنفّس فيصير خطراً. ولهذا يُعطى في مكان مراقب ومعه دواء مضادّ للمسكارين يكبح هذا الجانب من أثره.',
    en: 'Nearly all its effects are an extension of its action: a slowing of the pulse that may reach dangerous conduction disturbances, increased saliva and airway secretions, narrowing of the airways, nausea, vomiting, diarrhoea and cramps, pupil constriction, sweating and urinary urgency. Paradoxical muscle weakness may appear instead of the hoped-for strength if more is given than needed, and that weakness reaches the breathing muscles, which makes it dangerous. This is why it is given in a monitored setting together with an antimuscarinic drug that holds this side of its action in check.'
  },
  warning: {
    ar: 'العلامة التي لا تُهمل هي ضعف يزداد بدل أن يخفّ: تقلّ قوة القبضة ويثقل الجفن ويصعب البلع ويقصر النفس، مع لعاب غزير وحدقة ضيقة ومغص وإسهال وتعرّق ورفّة عضلية. هذه صورة النوبة الكولينية وهي طارئ يقتل بشلل عضلات التنفّس، وعلاجها إيقاف الدواء فوراً وإعطاء الأتروبين ودعم التنفّس. واطلب الطوارئ كذلك عند طفح شرّي أو تورّم الوجه أو صفير في الصدر أو هبوط ضغط أو إغماء، وعند نبض بطيء جداً مع دوخة أو ألم صدر.',
    en: 'The sign never to ignore is weakness that grows rather than eases: grip fails, the eyelid droops, swallowing becomes hard and breath shortens, together with heavy salivation, pinpoint pupils, cramps, diarrhoea, sweating and muscle twitching. This is the picture of cholinergic crisis, an emergency that kills by paralysing the breathing muscles; its treatment is to stop the drug at once, give atropine and support breathing. Get emergency help too for hives, facial swelling, wheezing, a fall in blood pressure or fainting, and for a very slow pulse with dizziness or chest pain.'
  },
  interact: {
    ar: 'يُعطى النيوستيجمين مع مضادّ للمسكارين — أتروبين أو جلايكوبيرولات — قبله أو معه، لا اختياراً بل لتقليل خطر بطء القلب وتضيّق القصبات، وهذا أهمّ اقتران دوائي في بابه. وهو يضادّ مرخيات العضل غير المزيلة للاستقطاب وهذا هو المقصود منه، لكنه قد يطيل أثر مرخيات أخرى بدل أن يعكسه. وتُجمع آثاره مع أدوية كولينية أخرى فيقرب من حدّ التسمّم. وأخبر فريق التخدير بكل دواء تأخذه، وخصوصاً أدوية القلب المبطّئة للنبض.',
    en: 'Neostigmine is given with an antimuscarinic — atropine or glycopyrrolate — before it or alongside it, not as an option but to cut the risk of a slow heart and tightened airways; this is the single most important pairing in its field. It opposes non-depolarising muscle relaxants, which is the whole point of giving it, but it may prolong the action of other relaxants instead of reversing it. Its effects add to those of other cholinergic medicines and approach the threshold of toxicity. Tell the anaesthetic team every medicine you take, especially heart drugs that slow the pulse.'
  },
  avoid: {
    ar: 'ممنوع عند التحسّس منه، وممنوع عند وجود انسداد ميكانيكي في الأمعاء أو في المجاري البولية لأنه يزيد الحركة والانقباض على عائق مغلق، وممنوع في التهاب الصفاق. ويُستعمل بحذر شديد في الربو وكل ما يضيّق القصبات، وفي مرض الشرايين التاجية واضطرابات النظم ومن مرّت به متلازمة تاجية حديثة، فهؤلاء أشدّ حساسية لأثره على الدورة الدموية. وقرب نهاية الحمل قد يهيّج الرحم ويستحثّ مخاضاً مبكّراً، فلا يُعطى إلا لضرورة يقدّرها الطبيب.',
    en: 'It is forbidden in anyone allergic to it, forbidden where there is mechanical obstruction of the bowel or the urinary tract because it drives motion and contraction against a closed barrier, and forbidden in peritonitis. It is used with great caution in asthma and anything that narrows the airways, and in coronary artery disease, rhythm disorders and anyone who has recently had an acute coronary syndrome, as these people are especially sensitive to its effects on the circulation. Near the end of pregnancy it may irritate the womb and bring on early labour, so it is given only out of necessity judged by the doctor.'
  },
  updated: '2026-09-10',
  src: [
    'https://www.ncbi.nlm.nih.gov/books/NBK470596/',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2f55643-2b0d-4ef9-a9d8-b7138b314372'
  ]
};

RX_BODY['pyridostigmine'] = {
  what: {
    ar: 'البيريدوستيجمين مثبّط للكولين إستراز يشبه النيوستيجمين في عمله ويفوقه في طول بقائه، ولذلك صار قرص الوهن العضلي الوبيل الأول لا حقنته. يأتي أقراصاً عادية وأقراصاً ممتدّة المفعول ومحلولاً يُشرب، ويُبلع القرص الممتدّ كاملاً بلا كسر ولا مضغ. وهو مثل قريبه مركّب مشحون لا يدخل الدماغ، فآثاره على الجهاز العصبي المركزي نادرة، وهذه ميزة تُحسب له عند الاستعمال الطويل يوماً بعد يوم.',
    en: 'Pyridostigmine is a cholinesterase blocker that works like neostigmine but lasts far longer, which is why it became the first tablet for myasthenia gravis rather than its injection. It comes as ordinary tablets, extended-release tablets and a liquid to drink; the extended-release tablet is swallowed whole, never broken or chewed. Like its relative it is a charged compound that does not enter the brain, so effects on the central nervous system are rare, and that counts in its favour for use day after day over years.'
  },
  why: {
    ar: 'يُوصف لتخفيف أعراض الوهن العضلي الوبيل: تدلّي الجفن، وازدواج الرؤية، وثقل الذراع عند رفعها، وتعب المضغ والبلع، وضعف يشتدّ مع الاستعمال ويخفّ بالراحة. وينبغي أن يُفهم موضعه بدقّة: هو يعالج العَرَض ولا يمسّ سبب المرض، فالمناعة تبقى تهاجم مستقبلات العضلة، ولهذا يُضاف إليه عادةً علاج يكبح المناعة. وحاجة المريض إليه تختلف من يوم إلى يوم ومن نشاط إلى نشاط، والطبيب هو من يضبط ذلك لا المريض بنفسه.',
    en: 'It is prescribed to ease the symptoms of myasthenia gravis: a drooping eyelid, double vision, an arm that grows heavy when raised, tiredness on chewing and swallowing, and weakness that deepens with use and lifts with rest. Its place should be understood exactly: it treats the symptom and does not touch the cause, since the immune system goes on attacking the muscle receptors, which is why a treatment that suppresses immunity is usually added. What a person needs varies from day to day and activity to activity, and it is the doctor who adjusts that, not the patient alone.'
  },
  how: {
    ar: 'في الوهن العضلي الوبيل تهاجم أجسام مضادة مستقبلات الأسيتيل كولين على العضلة فيقلّ عددها، فتصل الإشارة ضعيفة ويظهر التعب مع التكرار. ولا يستطيع الدواء إرجاع المستقبلات المفقودة، لكنه يعطّل الإنزيم الذي يكسر الناقل، فيبقى الأسيتيل كولين في المشتبك أطول ويحظى بفرصة أكبر لأن يجد ما بقي من المستقبلات ويشغلها. والنتيجة انقباض أقوى وأدوم. ولأن الناقل نفسه يعمل في الغدد والأمعاء والقصبات فإن زيادته هناك هي مصدر آثاره غير المرغوبة.',
    en: 'In myasthenia gravis, antibodies attack the acetylcholine receptors on the muscle and their number falls, so the signal arrives weakened and tiredness shows with repetition. The drug cannot bring the lost receptors back, but it disables the enzyme that breaks down the messenger, so acetylcholine lingers in the junction and has a better chance of finding and occupying what receptors remain. The result is a stronger, longer contraction. And because the same messenger works in the glands, the bowel and the airways, its build-up there is the source of the unwanted effects.'
  },
  effects: {
    ar: 'أكثر شكاواه من البطن والغدد: غثيان وقيء وإسهال ومغص، ولعاب غزير، وعرق بارد، وزغللة في البصر، وإلحاح على التبوّل، وتقلّصات ورفّة في العضلات. وأغلبها يخفّ مع الوقت أو بأخذ الدواء مع الطعام. والأثقل منها زيادة إفرازات القصبات والفم، فهي عبء حقيقي على مريض ضعفت عنده عضلات البلع أو التنفّس أصلاً. وآثاره على الدماغ نادرة لأنه لا يعبر إليه، بخلاف بعض أدوية هذه الفصيلة التي تعبر فتربك التفكير.',
    en: 'Most complaints come from the belly and the glands: nausea, vomiting, diarrhoea and cramps, heavy salivation, cold sweats, blurred vision, urinary urgency, and muscle cramps and twitching. Most ease with time or by taking the medicine with food. The heavier of them is the rise in airway and mouth secretions, a real burden on someone whose swallowing or breathing muscles are already weak. Effects on the brain are rare because it does not cross into it, unlike some drugs of this family that do cross and cloud thinking.'
  },
  warning: {
    ar: 'أخطر ما في هذا الدواء أن الزيادة عليه تُنتج ضعفاً يشبه تماماً ضعف المرض نفسه، فيظنّ المريض أنه محتاج للمزيد فيزيد فيهلك. فإن ازداد ضعفك بعد الجرعة لا قبلها، ومعه لعاب غزير وحدقة ضيقة ومغص وإسهال وتعرّق ورفّة عضلية، فهذه نوبة كولينية: لا تأخذ جرعة أخرى واطلب الطوارئ. واطلب الطوارئ فوراً عند صعوبة في التنفّس أو البلع أو الكلام في كل الأحوال. وتوقّف واطلب المساعدة عند طفح شديد أو شرى أو تشوّش أو تلعثم أو تشنّج.',
    en: 'The gravest thing about this drug is that too much of it produces weakness identical to the weakness of the disease itself, so the patient believes more is needed, takes more, and comes to harm. If your weakness increases after a dose rather than before it, with heavy salivation, pinpoint pupils, cramps, diarrhoea, sweating and muscle twitching, this is cholinergic crisis: do not take another dose and call for emergency help. Get emergency help at once for difficulty breathing, swallowing or speaking under any circumstances. Stop and seek help for a severe rash, hives, confusion, slurred speech or a seizure.'
  },
  interact: {
    ar: 'أخبر طبيبك بكل ما تأخذه قبل أن تبدأ. والأدوية المضادّة للكولين — كبعض علاجات المغص والمثانة وحساسية الأنف — تخفي أوائل علامات الزيادة الكولينية فتؤخّر الإنذار حتى يصير الضعف هو أول ما يظهر. وأدوية هذه الفصيلة نفسها تُجمع آثارها فتقرب من النوبة الكولينية. ومرخيات العضل المستعملة في التخدير يتغيّر سلوكها عند من يأخذ هذا الدواء، فلا بدّ أن يعرف فريق التخدير قبل أي عملية. وهناك أدوية معروفة بأنها تُسيء إلى الوهن العضلي نفسه.',
    en: 'Tell your doctor everything you take before you start. Anticholinergic medicines — some remedies for colic, bladder trouble and nasal allergy — mask the earliest signs of cholinergic excess and delay the warning until weakness is the first thing to appear. Drugs of this same family stack their effects and edge towards cholinergic crisis. Muscle relaxants used in anaesthesia behave differently in someone taking this drug, so the anaesthetic team must know before any operation. And there are medicines known to worsen myasthenia gravis itself, so nothing new is added without review.'
  },
  avoid: {
    ar: 'ممنوع عند وجود انسداد ميكانيكي في الأمعاء أو في المجاري البولية. ويُستعمل بحذر شديد في الربو لأنه يضيّق القصبات ويزيد المخاط. وأخبر طبيبك إن كان عندك مرض في القلب أو بطء في النبض، أو مرض في الكلى فالدواء يخرج عن طريقها ويتراكم عند قصورها، أو قرحة في المعدة، أو فرط نشاط في الدرقية. وفي الحمل والرضاعة يُوزن النفع بالضرر مع الطبيب ولا يُترك المرض بلا علاج خوفاً. والأقراص الممتدّة تُبلع كاملة ولا تُكسر ولا تُمضغ.',
    en: 'It is forbidden where there is mechanical obstruction of the bowel or the urinary tract. It is used with great caution in asthma because it narrows the airways and increases mucus. Tell your doctor about heart disease or a slow pulse, about kidney disease since the drug leaves by that route and builds up when the kidney fails, about a stomach ulcer, and about an overactive thyroid. In pregnancy and breastfeeding the benefit is weighed against the risk with the doctor, and the disease is not left untreated out of fear. Extended-release tablets are swallowed whole, never broken or chewed.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682229.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a851795e-b7a8-40c3-9922-5e79d3eb4d92',
    'https://www.ncbi.nlm.nih.gov/books/NBK482433/'
  ]
};

RX_BODY['amitriptyline'] = {
  what: {
    ar: 'الأميتريبتيلين مضاد اكتئاب من الجيل القديم يُسمّى ثلاثي الحلقات. اعتُمد أصلاً لعلاج الاكتئاب عند البالغين، لكن أكثر ما يُوصف له اليوم في الواقع ليس الاكتئاب بل ألم الأعصاب والوقاية من الشقيقة، وبمقادير أصغر بكثير مما يُستعمل في الاكتئاب. وهو ثقيل الأثر على مستقبلات كثيرة لا على السيروتونين وحده: مستقبلات الهيستامين فينعّس، والمستقبلات الكولينية فيجفّف الفم ويحبس البول، والمستقبلات الأدرينالية فيهبط الضغط عند الوقوف.',
    en: 'Amitriptyline is an older-generation antidepressant known as a tricyclic. It was originally approved to treat depression in adults, but what it is most often prescribed for today is not depression at all: it is nerve pain and migraine prevention, at far smaller amounts than are used for depression. It acts heavily on many receptors, not on serotonin alone: on histamine receptors, so it sedates; on cholinergic receptors, so it dries the mouth and holds back urine; and on adrenergic receptors, so blood pressure drops on standing.'
  },
  why: {
    ar: 'يُوصف لعلاج الاكتئاب عند البالغين. وخارج هذا الاستعمال المعتمد يُوصف كثيراً لألم الأعصاب: اعتلال الأعصاب السكري، والألم التالي للحزام الناري، والألم العضلي الليفي، والألم المزمن عامةً. ويُوصف للوقاية من الشقيقة وصداع التوتّر — أي لتقليل عدد النوبات لا لعلاج النوبة القائمة. ويُستعمل في القولون العصبي وفي الأرق. وفي ألم الأعصاب لا يُنتظر منه أن يسكّن كالمسكّن، بل يقلّ الألم تدريجياً على مدى أسابيع.',
    en: 'It is prescribed to treat depression in adults. Beyond that approved use it is widely prescribed for nerve pain: diabetic neuropathy, pain after shingles, fibromyalgia and chronic pain generally. It is prescribed to prevent migraine and tension headache — that is, to reduce how often attacks come, not to treat an attack already under way. It is used in irritable bowel syndrome and in insomnia. In nerve pain it should not be expected to work like a painkiller; the pain instead lessens gradually over weeks.'
  },
  how: {
    ar: 'يمنع الأميتريبتيلين خلايا الدماغ من استرداد ناقلين اثنين هما السيروتونين والنورأدرينالين، فيبقيان في المشتبك أطول. وهذا في الاكتئاب يعدّل المزاج على مدى أسابيع. أما في الألم فالآلية مختلفة: هذان الناقلان يغذّيان مسارات هابطة من الدماغ إلى الحبل الشوكي وظيفتها كبح إشارة الألم قبل صعودها، فتقويتهما ترفع بوابة الكبح فيصل أقلّ. ولهذا يفيد في ألم الأعصاب من ليس عنده اكتئاب أصلاً، وبمقادير أقلّ وأسرع أثراً.',
    en: 'Amitriptyline stops brain cells from taking back two messengers, serotonin and noradrenaline, so both linger longer in the junction. In depression that shifts mood over weeks. In pain the mechanism is different: these two messengers feed descending pathways from the brain down to the spinal cord whose job is to damp the pain signal before it rises, so strengthening them raises that gate and less gets through. This is why it helps nerve pain in people who have no depression at all, at smaller amounts and with a faster effect.'
  },
  effects: {
    ar: 'أشهرها جفاف الفم، والنعاس، والإمساك، وزغللة البصر، والدوخة عند النهوض، وزيادة الوزن، والغثيان، وصعوبة في بدء التبوّل. والنعاس مقصود أحياناً فيُؤخذ الدواء ليلاً، لكنه قد يمتدّ إلى الصباح فيمنع القيادة. وأكثر هذه الآثار يخفّ في الأسابيع الأولى، ولا يخفّ جفاف الفم دائماً. وقد يزيد التعرّق، ويضطرب القذف وتقلّ الرغبة. وقد يظهر خفقان أو دوار من هبوط الضغط الوضعي، وهو من أكثر ما يوقع كبير السنّ فيكسره.',
    en: 'The best known are dry mouth, drowsiness, constipation, blurred vision, dizziness on getting up, weight gain, nausea and difficulty starting to pass urine. The drowsiness is sometimes the point, so the medicine is taken at night, but it can carry over into the morning and rule out driving. Most of these effects ease over the first weeks; dry mouth does not always. Sweating may increase, ejaculation may be disturbed and desire may fall. Palpitations or dizziness from a postural drop in blood pressure may appear, and that is among the commonest causes of a fall and fracture in an older person.'
  },
  warning: {
    ar: 'هذا الدواء خطر في الزيادة: طلب الطوارئ واجب فوراً إذا أُخذ أكثر مما وُصف ولو شعرتَ أنك بخير، فتسمّمه يضطرب معه نظم القلب ويأتي التشنّج والغيبوبة. واطلب الطوارئ عند ألم صدر أو خفقان غير منتظم أو إغماء، وعند تشنّج، وعند ألم مفاجئ في العين مع احمرار وهالات حول الأضواء وغثيان فهذه نوبة زرق انسدادي. واذهب فوراً عند احتباس البول التام، وعند طفح شديد أو تورّم الوجه. وراقب أنت ومن حولك أي تفاقم للمزاج أو أفكار إيذاء النفس، خصوصاً في الأسابيع الأولى وعند من هم في مقتبل الشباب، وأبلغ في يومه.',
    en: 'This drug is dangerous in excess: emergency help must be sought at once if more has been taken than prescribed, even if you feel well, because in poisoning the heart rhythm becomes disordered and seizures and coma follow. Get emergency help for chest pain, an irregular pounding heart or fainting, for a seizure, and for sudden eye pain with redness, haloes around lights and nausea, which is an attack of angle-closure glaucoma. Go immediately if you cannot pass urine at all, or for a severe rash or facial swelling. And watch, with those around you, for any worsening of mood or thoughts of self-harm, especially in the first weeks and in the young, and report it the same day.'
  },
  interact: {
    ar: 'ممنوع الجمع مع مثبّطات أكسيداز أحادي الأمين، ويلزم فاصل زمني بين الدوائين يحدّده الطبيب. ولا يُجمع مع اللينزوليد ولا مع أزرق الميثيلين الوريدي. وينبّه على كل ما يرفع السيروتونين معه اتّقاءً لمتلازمة السيروتونين. ويزيد أثره المهدّئ مع الكحول والمهدّئات ومسكّنات الأفيون ومضادات الهيستامين. وأدوية الحساسية والمعدة ذات الأثر المضادّ للكولين تُضاعف الجفاف والإمساك واحتباس البول. وبعض مضادات الاكتئاب والسيميتيدين ترفع مستواه في الدم، وأدوية إطالة كهرباء القلب تُجمع معه بحذر.',
    en: 'It must not be combined with monoamine oxidase inhibitors, and a gap between the two medicines set by the doctor is required. It is not combined with linezolid or with intravenous methylene blue. Caution is flagged for anything that raises serotonin alongside it, to guard against serotonin syndrome. Its sedating effect deepens with alcohol, sedatives, opioid painkillers and antihistamines. Allergy and stomach remedies with anticholinergic action double the dryness, constipation and urinary retention. Some antidepressants and cimetidine raise its level in the blood, and drugs that lengthen the heart’s electrical interval are combined with it only with care.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس منه أو من ثلاثي حلقات آخر، ولا من هو في فترة التعافي من احتشاء قلبي حديث. ويُتجنّب عند اضطرابات النظم وإطالة كهرباء القلب وقصور القلب. وأخبر طبيبك إن كان عندك زرق مغلق الزاوية أو ارتفاع في ضغط العين، أو تضخّم بروستاتا أو صعوبة تبوّل، أو صرع، أو فرط نشاط درقية، أو مرض في الكبد أو الكلى، أو اضطراب ثنائي القطب. ولا يُنصح به عادةً لكبار السنّ لثقل آثاره الكولينية وخطر السقوط. وفي الحمل والرضاعة يُوزن النفع بالضرر. ولا يُوقف فجأة.',
    en: 'It is not for anyone who has reacted to it or to another tricyclic, nor for anyone recovering from a recent heart attack. It is avoided in rhythm disorders, in a lengthened cardiac electrical interval and in heart failure. Tell your doctor about angle-closure glaucoma or raised eye pressure, an enlarged prostate or difficulty passing urine, epilepsy, an overactive thyroid, liver or kidney disease, or bipolar disorder. It is not generally advised for older people because of its heavy anticholinergic effects and the risk of falls. In pregnancy and breastfeeding the benefit is weighed against the risk. And it is never stopped suddenly.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682388.html',
    'https://www.ncbi.nlm.nih.gov/books/NBK537225/',
    'https://www.nhs.uk/medicines/amitriptyline-for-depression/'
  ]
};

RX_BODY['fluoxetine'] = {
  what: {
    ar: 'الفلوكسيتين مضاد اكتئاب من فصيلة مثبّطات استرداد السيروتونين الانتقائية، وهو أشهرها وأقدمها في السوق. يُصرف بوصفة أقراصاً وكبسولات ومحلولاً. وما يميّزه عن بقية فصيلته أنه يبقى في الجسم مدّة أطول بكثير، وهذه ميزة وعيب في آن واحد: تُنسى جرعة فلا ينهار المستوى في الدم، لكن أعراض التوقّف تتأخّر في الظهور فيصعب ربطها بسببها، وتعارضاته مع أدوية أخرى تمتدّ بعد إيقافه بزمن ليس بالقصير.',
    en: 'Fluoxetine is an antidepressant of the selective serotonin reuptake inhibitor family, the best known and oldest of them on the market. It is dispensed on prescription as tablets, capsules and a liquid. What sets it apart from the rest of its family is that it stays in the body far longer, and that is at once an advantage and a drawback: a missed dose does not collapse the level, but withdrawal symptoms are slow to show, and its clashes with other medicines persist for a considerable time after it is stopped.'
  },
  why: {
    ar: 'يُوصف للاكتئاب، وللوسواس القهري، ولاضطرابات الأكل ولا سيّما الشره العصبي، ولنوبات الهلع، ولاضطراب ما قبل الطمث المزعج. ويُستعمل مع الأولانزابين في اكتئاب الاضطراب ثنائي القطب. ويُستعمل أحياناً لأعراض سنّ اليأس. وينبغي أن يُعرف عنه شيء يجنّب خيبة الأمل: أثره لا يظهر في اليوم الأول ولا الأسبوع الأول، بل تحتاج فائدته الكاملة أسابيع، وقد يزيد القلق والأرق في البداية قبل أن يتحسّن المزاج.',
    en: 'It is prescribed for depression, for obsessive-compulsive disorder, for eating disorders and bulimia in particular, for panic attacks and for premenstrual dysphoric disorder. It is used together with olanzapine in the depression of bipolar disorder. It is sometimes used for menopausal symptoms. One thing should be known about it to spare disappointment: its effect does not show on the first day or in the first week; its full benefit needs weeks, and anxiety and sleeplessness may increase at the start before the mood improves.'
  },
  how: {
    ar: 'السيروتونين ناقل كيميائي يشارك في تنظيم المزاج والقلق والنوم والشهيّة. وبعد أن تُطلقه الخلية العصبية في المشتبك تسحبه مرة أخرى بمضخّة استرداد. ويسدّ الفلوكسيتين هذه المضخّة سدّاً انتقائياً، فيبقى السيروتونين في المشتبك أطول ويعمل على مستقبلاته أكثر. لكن هذا يحدث في أيام بينما التحسّن يحتاج أسابيع، وهو ما يرجّح أن الفائدة تأتي من تغيّرات تكيّفية أبطأ في المستقبلات والدارات العصبية لا من ارتفاع الناقل وحده.',
    en: 'Serotonin is a chemical messenger involved in regulating mood, anxiety, sleep and appetite. After a nerve cell releases it into the junction, a reuptake pump draws it back in. Fluoxetine blocks that pump selectively, so serotonin lingers longer in the junction and acts on its receptors more. But this happens within days while improvement takes weeks, which suggests the benefit comes from slower adaptive changes in the receptors and the neural circuits, not from the raised messenger alone.'
  },
  effects: {
    ar: 'أكثر ما يظهر: صداع، وغثيان وقيء، وإسهال أو إمساك، وتغيّر في الوزن، ومشكلات جنسية كنقص الرغبة وتأخّر النشوة، وصعوبة في النوم، ودوخة أو نعاس، وزغللة بصر، وجفاف فم، وتوتّر وضعف عام. وأغلبها يخفّ خلال أسبوعين حين يتعوّد الجسم، وبعضها يبقى — والمشكلات الجنسية أثبتها بقاءً. ومن الشائع في الأيام الأولى تفاقم القلق والأرق، وهذا وحده لا يعني فشل الدواء لكنه يستحقّ إبلاغ الطبيب لا احتماله بصمت.',
    en: 'The commonest are headache, nausea and vomiting, diarrhoea or constipation, weight change, sexual problems such as reduced desire and delayed climax, difficulty sleeping, dizziness or drowsiness, blurred vision, dry mouth, nervousness and general weakness. Most ease within a couple of weeks as the body adjusts; some persist, and the sexual problems are the most persistent of them. In the first days, worsening anxiety and sleeplessness are common, and that alone does not mean the drug has failed, but it deserves telling the doctor rather than being borne in silence.'
  },
  warning: {
    ar: 'اطلب المساعدة العاجلة عند سرعة نبض وتعرّق ورعشة ورفّة عضلية وتشوّش أو هياج، فهذه متلازمة السيروتونين. واطلب الطوارئ عند تورّم الحلق أو اللسان أو طفح شرّي مع صعوبة تنفّس، وعند تشنّج، وعند ألم صدر أو خفقان مضطرب. واذهب فوراً عند كدمات أو نزف بلا سبب أو دم في البراز. وراجع طبيبك عاجلاً عند مزاج مرتفع غير معتاد وطاقة زائدة وقلّة حاجة إلى النوم فقد يكون هوساً كشفه الدواء. والأهمّ: أي هبوط شديد في المزاج أو أفكار إيذاء النفس، خصوصاً في الأسابيع الأولى وعند الشباب، يُبلَّغ في يومه ولا يُؤجَّل.',
    en: 'Seek urgent help for a fast heartbeat with sweating, shaking, twitching muscles and confusion or agitation, as this is serotonin syndrome. Get emergency help for swelling of the throat or tongue or hives with difficulty breathing, for a seizure, and for chest pain or a disordered pounding heart. Go immediately for bruising or bleeding with no cause, or blood in the stool. See your doctor urgently for an unusually high mood with excess energy and little need for sleep, which may be a mania the drug has uncovered. Most important: any severe drop in mood or thoughts of self-harm, especially in the first weeks and in the young, is reported the same day and never postponed.'
  },
  interact: {
    ar: 'ممنوع مع مثبّطات أكسيداز أحادي الأمين، ومع البيموزيد والثيوريدازين. ويلزم فاصل زمني طويل بعد إيقافه قبل بدء بعض هذه الأدوية لأنه يبقى في الجسم مدّة. وممنوعة معه نبتة سانت جون. ويزيد ميل الجسم إلى النزف مع الأسبرين ومضادات الالتهاب غير الستيرويدية ومميّعات الدم كالوارفارين والأبيكسابان. وينبّه على الميتوبرولول والتاموكسيفين والبوبرينورفين ومدرّات البول. والكحول يزيد النعاس. وأخبر الصيدلي بكل دواء جديد فهو يبطّئ استقلاب كثير من الأدوية.',
    en: 'It is forbidden with monoamine oxidase inhibitors and with pimozide and thioridazine. A long gap after stopping it is required before starting some of these, because it lingers in the body. St John’s wort must not be used with it. The tendency to bleed increases with aspirin, non-steroidal anti-inflammatory drugs and blood thinners such as warfarin and apixaban. Caution is flagged with metoprolol, tamoxifen, buprenorphine and diuretics. Alcohol increases drowsiness. Tell the pharmacist about every new medicine, as fluoxetine slows the breakdown of many drugs.'
  },
  avoid: {
    ar: 'لا يأخذه من سبق أن تحسّس منه أو من مضاد اكتئاب آخر من فصيلته. وأخبر طبيبك قبل أن تبدأ إن كان عندك سكّري، أو صرع، أو مرض في القلب، أو زرق أي ارتفاع في ضغط العين، أو اضطراب نزفي وخصوصاً في الجهاز الهضمي، أو مرض في الكبد، أو سبق أن مررت بنوبة هوس. وفي الحمل يُستعمل عند الحاجة بقرار الطبيب مع متابعة أدقّ قرب الولادة. وينتقل إلى الحليب فيُناقش مع مختصّ. ولا يُوقف فجأة أبداً بل يُنقص تدريجياً تحت إشراف.',
    en: 'It is not for anyone who has reacted to it or to another antidepressant of its family. Tell your doctor before you start about diabetes, epilepsy, heart disease, glaucoma or raised eye pressure, a bleeding disorder especially in the digestive tract, liver disease, or any past episode of mania. In pregnancy it is used when needed by the doctor’s decision, with closer monitoring near delivery. It passes into breast milk, so this is discussed with a specialist. And it is never stopped suddenly; it is reduced gradually under supervision.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a689006.html',
    'https://www.nhs.uk/medicines/fluoxetine-prozac/side-effects-of-fluoxetine/',
    'https://www.nhs.uk/medicines/fluoxetine-prozac/who-can-and-cannot-take-fluoxetine/',
    'https://www.nhs.uk/medicines/fluoxetine-prozac/taking-fluoxetine-with-other-medicines-and-herbal-supplements/'
  ]
};

RX_BODY['clomipramine'] = {
  what: {
    ar: 'الكلوميبرامين مضاد اكتئاب ثلاثي الحلقات، وهو أقوى أفراد فصيلته أثراً على السيروتونين، ولذلك صار الوحيد منها المعتمد لعلاج الوسواس القهري. يُصرف بوصفة على هيئة كبسولات. وهو دواء فعّال لكنه ثقيل: يحمل آثار الفصيلة القديمة كاملة — الجفاف والإمساك والنعاس وهبوط الضغط عند الوقوف — ويزيد عليها أثراً واضحاً على الوظيفة الجنسية، وميلاً إلى خفض عتبة التشنّج يتضاعف كلّما زادت الكمية.',
    en: 'Clomipramine is a tricyclic antidepressant, the most powerfully serotonergic member of its family, and for that reason the only one of them approved to treat obsessive-compulsive disorder. It is dispensed on prescription as capsules. It is an effective drug but a heavy one: it carries the full burden of the old family — dryness, constipation, drowsiness and a drop in blood pressure on standing — and adds to them a marked effect on sexual function and a tendency to lower the seizure threshold that grows as the amount rises.'
  },
  why: {
    ar: 'استعماله المعتمد هو الوساوس والأفعال القهرية في اضطراب الوسواس القهري، حين تسبّب للمريض ضيقاً بيّناً أو تستهلك وقته أو تعطّل حياته اليومية. وموضعه في الترتيب واضح: تُجرَّب أولاً أدوية أخفّ آثاراً من فصيلة مثبّطات استرداد السيروتونين، ويأتي هو حين لا تكفي. وأثره على الوسواس بطيء لا يُحكم عليه في أسبوع، وقد يحتاج أسابيع طويلة حتى تظهر فائدته كاملة، فالصبر عليه جزء من العلاج لا زيادته.',
    en: 'Its approved use is the obsessions and compulsions of obsessive-compulsive disorder, when they cause the person marked distress, consume their time or disrupt daily life. Its place in the order is clear: lighter drugs of the serotonin reuptake inhibitor family are tried first, and it comes when they are not enough. Its effect on obsessions is slow and cannot be judged in a week; the full benefit may take many weeks to appear, so patience with it is part of the treatment, not an increase in it.'
  },
  how: {
    ar: 'يعمل الكلوميبرامين أساساً بمنع استرداد السيروتونين إلى الخلية العصبية بعد إطلاقه فيبقى في المشتبك أطول، وهذا المسار بالذات هو المرتبط بتحسّن الوساوس والأفعال القهرية. ويؤثّر كذلك في النورأدرينالين. لكنه لا يقف عند هذين: يرتبط بمستقبلات الهيستامين فينعّس، وبالمستقبلات الكولينية فيجفّف الفم ويبطّئ الأمعاء ويحبس البول ويوسّع الحدقة، وبالمستقبلات الأدرينالية فيهبط الضغط عند النهوض. ومن هنا تأتي كل آثاره تقريباً.',
    en: 'Clomipramine works mainly by preventing serotonin from being taken back into the nerve cell after release, so it lingers longer in the junction — and it is this pathway in particular that is linked to improvement in obsessions and compulsions. It also acts on noradrenaline. But it does not stop at these two: it binds histamine receptors, so it sedates; cholinergic receptors, so it dries the mouth, slows the bowel, holds back urine and widens the pupil; and adrenergic receptors, so blood pressure falls on rising. Nearly all its effects come from there.'
  },
  effects: {
    ar: 'أكثرها جفاف الفم — وهو الأشيع بفارق كبير — والنعاس والرعشة والدوخة والإمساك والغثيان والتعب والتعرّق. وزيادة الوزن شائعة وقد تكون ملحوظة. وأبرز ما يميّزه عن غيره اضطراب الوظيفة الجنسية عند الرجل، وخصوصاً تعذّر القذف، وهو من أكثر أسباب تركه. وقد يظهر خفقان أو تسارع خفيف في النبض، ودوار عند الوقوف من هبوط الضغط الوضعي. وأغلب هذه الآثار أشدّ في البداية ثم يخفّ بعضها ولا يخفّ بعضها الآخر.',
    en: 'The commonest are dry mouth — by a wide margin the most frequent — along with drowsiness, tremor, dizziness, constipation, nausea, fatigue and sweating. Weight gain is common and may be considerable. What most distinguishes it from others is disturbance of sexual function in men, ejaculatory failure in particular, and that is among the commonest reasons people stop it. Palpitations or a mild quickening of the pulse may appear, and dizziness on standing from a postural fall in blood pressure. Most of these are worst at the start; some then ease and some do not.'
  },
  warning: {
    ar: 'اطلب الطوارئ فوراً عند تشنّج، فهذا الدواء يخفض عتبة التشنّج ويزداد الخطر كلّما زادت الكمية، ولهذا لا يُتجاوز ما وُصف أبداً. واطلب الطوارئ عند حرارة مرتفعة مع تيبّس عضلي وتعرّق واضطراب وعي، وعند خفقان غير منتظم أو إغماء، وعند ألم مفاجئ في العين مع احمرار وزغللة وهالات حول الأضواء. واذهب فوراً عند احتباس البول التام، وعند اصفرار العين أو بول داكن. وأبلغ في يومه عن أي تفاقم للاكتئاب أو أفكار إيذاء النفس، خصوصاً في الأسابيع الأولى وعند الشباب. ولا يُوقف فجأة.',
    en: 'Get emergency help at once for a seizure: this drug lowers the seizure threshold and the risk climbs as the amount rises, which is why what was prescribed is never exceeded. Get emergency help for a high temperature with muscle rigidity, sweating and clouded consciousness, for an irregular pounding heart or fainting, and for sudden eye pain with redness, blurring and haloes around lights. Go immediately if you cannot pass urine at all, or if the eyes yellow or the urine darkens. Report the same day any worsening of depression or thoughts of self-harm, especially in the first weeks and in the young. And it is never stopped suddenly.'
  },
  interact: {
    ar: 'ممنوع مع مثبّطات أكسيداز أحادي الأمين ويلزم فاصل زمني بين الدوائين، وممنوع مع اللينزوليد وأزرق الميثيلين الوريدي. والجمع مع أدوية أخرى ترفع السيروتونين يستدعي حذراً شديداً خوف متلازمة السيروتونين. وأدوية تبطّئ استقلابه — كبعض مضادات الاكتئاب والسيميتيدين والكينيدين — ترفع مستواه في الدم فتزيد خطر التشنّج. والكحول والمهدّئات تُضاعف النعاس. والأدوية المضادّة للكولين تُضاعف الجفاف والإمساك واحتباس البول وقد ترفع حرارة الجسم. وأبلغ الجرّاح والمخدّر قبل أي عملية.',
    en: 'It is forbidden with monoamine oxidase inhibitors and a gap between the two medicines is required; it is forbidden with linezolid and intravenous methylene blue. Combining it with other drugs that raise serotonin calls for great caution for fear of serotonin syndrome. Medicines that slow its breakdown — some antidepressants, cimetidine and quinidine — raise its level in the blood and so raise the seizure risk. Alcohol and sedatives double the drowsiness. Anticholinergic medicines double the dryness, constipation and urinary retention and may raise body temperature. Tell the surgeon and anaesthetist before any operation.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس منه أو من ثلاثي حلقات آخر، ولا من هو في فترة التعافي من احتشاء قلبي حديث. وأخبر طبيبك إن كان عندك صرع أو سبق تشنّج أو إصابة رأس، أو مرض في القلب أو اضطراب نظم، أو زرق مغلق الزاوية، أو صعوبة تبوّل أو تضخّم بروستاتا، أو مرض في الكبد، أو فرط نشاط درقية، أو اضطراب ثنائي القطب. ولا يُنصح به عادةً لكبار السنّ. وفي الحمل يُستعمل عند الضرورة وقد يظهر على المولود اضطراب مؤقّت. وينتقل إلى الحليب فيُناقش مع مختصّ.',
    en: 'It is not for anyone who has reacted to it or to another tricyclic, nor for anyone recovering from a recent heart attack. Tell your doctor about epilepsy, a past seizure or head injury, heart disease or a rhythm disorder, angle-closure glaucoma, difficulty passing urine or an enlarged prostate, liver disease, an overactive thyroid, or bipolar disorder. It is not generally advised for older people. In pregnancy it is used out of necessity, and a temporary disturbance may show in the newborn. It passes into breast milk, so this is discussed with a specialist.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a697002.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d7cee3fa-d05c-4702-8f75-f446627bdb49'
  ]
};

RX_BODY['haloperidol'] = {
  what: {
    ar: 'الهالوبيريدول مضاد ذهان من الجيل الأول يُسمّى التقليدي أو النمطي، وهو من أقوى ما في بابه على مستقبلات الدوبامين. يأتي أقراصاً ونقطاً وحقناً قصيرة الأثر وحقناً مديدة تُعطى كل فترة. وقوّته على العَرَض الذهاني هي نفسها مصدر عيبه: تركيزه الشديد على مسار الدوبامين يجعله أكثر من غيره إنتاجاً لاضطرابات الحركة. وهو دواء قديم لم يُستغنَ عنه إلى اليوم في الحالات الحادّة وفي الهذيان داخل المستشفى.',
    en: 'Haloperidol is a first-generation antipsychotic, called typical, and among the most potent of its kind at dopamine receptors. It comes as tablets, drops, short-acting injections and long-acting depot injections given at intervals. Its strength against psychotic symptoms is the very source of its drawback: its intense focus on the dopamine pathway makes it, more than others, a producer of movement disorders. It is an old drug that has still not been dispensed with in acute situations and in delirium in hospital.'
  },
  why: {
    ar: 'يُوصف للفصام ولا سيّما أعراضه الإيجابية كالهلوسة والضلالات، وللعرّات الحركية والصوتية في متلازمة توريت، ولاضطرابات سلوكية شديدة عند الأطفال في حالات محدّدة. ويُستعمل خارج النشرة للهياج الحادّ المصاحب للاضطرابات النفسية، وللهوس الحادّ في الاضطراب ثنائي القطب، وللهذيان أي التشوّش الحادّ الذي يصيب المريض في المستشفى، وللغثيان والقيء العصيَّين وللفواق المستعصي. ولا يُستعمل لضبط سلوك مريض الخرف.',
    en: 'It is prescribed for schizophrenia, particularly its positive symptoms such as hallucinations and delusions, for the motor and vocal tics of Tourette syndrome, and for severe behavioural disorders in children in defined situations. Off-label it is used for acute agitation accompanying psychiatric conditions, for acute mania in bipolar disorder, for delirium — the acute confusion that overtakes a patient in hospital — and for stubborn nausea and vomiting and intractable hiccups. It is not used to control the behaviour of a person with dementia.'
  },
  how: {
    ar: 'يُعزى الذهان جزئياً إلى فرط نشاط الدوبامين في مسارات معيّنة من الدماغ، فتُقرأ إشارات عادية على أنها ذات معنى مهدّد وتظهر الهلوسة والضلالات. ويحجب الهالوبيريدول مستقبلات الدوبامين من النوع الثاني حجباً قوياً فيخفت هذا النشاط. لكن الدوبامين يعمل في مسارات أخرى أيضاً: مسار الحركة، فيظهر التيبّس والرعشة؛ ومسار هرمون الحليب، فيرتفع. ويؤثّر الدواء كذلك في مستقبلات للسيروتونين والهيستامين والأدرينالين والأسيتيل كولين فتتنوّع آثاره.',
    en: 'Psychosis is attributed in part to over-activity of dopamine in certain brain pathways, so ordinary signals are read as carrying threatening meaning and hallucinations and delusions appear. Haloperidol blocks type-two dopamine receptors strongly, and that activity dims. But dopamine works in other pathways too: the movement pathway, so rigidity and tremor appear, and the milk-hormone pathway, so prolactin rises. The drug also acts on serotonin, histamine, adrenergic and acetylcholine receptors, and its effects diversify accordingly.'
  },
  effects: {
    ar: 'أشهرها اضطرابات الحركة: تيبّس ورعشة وبطء يشبه باركنسون، وتململ داخلي لا يقرّ معه صاحبه في مكان، وتقلّص مفاجئ في عضلات الرقبة أو العين أو الفكّ. ومنها جفاف الفم وزغللة البصر والغثيان والإمساك وصعوبة النوم والدوخة والنعاس. ويرفع هرمون الحليب فيسبّب تضخّم الثدي وإفرازه واضطراب الدورة ونقص الرغبة. وقد يظهر دوار عند الوقوف من هبوط الضغط. ومن آثاره اضطراب تنظيم حرارة الجسم فيقلّ احتمال صاحبه للحرّ.',
    en: 'The best known are movement disorders: rigidity, tremor and a slowness resembling Parkinson’s disease; an inner restlessness that will not let the person settle; and sudden spasm of the muscles of the neck, the eye or the jaw. There are also dry mouth, blurred vision, nausea, constipation, difficulty sleeping, dizziness and drowsiness. It raises the milk hormone, causing breast swelling and discharge, disturbed periods and reduced desire. Dizziness on standing from a fall in blood pressure may appear. And it disturbs the body’s temperature regulation, so tolerance of heat falls.'
  },
  warning: {
    ar: 'اطلب الطوارئ فوراً عند حرارة مرتفعة مع تيبّس عضلي شديد وتعرّق واضطراب وعي ونبض غير منتظم، فهذه المتلازمة الخبيثة للذهانيات وهي تقتل. واطلب الطوارئ عند إغماء أو خفقان غير منتظم، فهذا الدواء يطيل كهرباء القلب وقد يُحدث اضطراب نظم خطراً. واذهب فوراً عند تقلّص مؤلم يشدّ الرقبة أو يقلب العين إلى الأعلى أو يقفل الفكّ، وعند تشنّج أو صعوبة تنفّس أو انتصاب مؤلم مستمرّ. وراجع طبيبك عاجلاً عند حركات لا إرادية في الوجه أو اللسان أو الفكّ، فتأخّرها يجعلها دائمة.',
    en: 'Get emergency help at once for a high temperature with severe muscle rigidity, sweating, clouded consciousness and an irregular pulse: this is neuroleptic malignant syndrome and it kills. Get emergency help for fainting or an irregular pounding heart, as this drug lengthens the heart’s electrical interval and can produce a dangerous rhythm disturbance. Go immediately for a painful spasm that pulls the neck, rolls the eyes upward or locks the jaw, and for a seizure, difficulty breathing or a persistent painful erection. See your doctor urgently for involuntary movements of the face, tongue or jaw, because delay makes them permanent.'
  },
  interact: {
    ar: 'أخطر ما يُجمع معه كل ما يطيل كهرباء القلب: بعض المضادات الحيوية ومضادات اضطراب النظم ومضادات الاكتئاب وأدوية القيء، فالخطر يتراكم. وكذلك ما يخفض البوتاسيوم أو المغنيسيوم كمدرّات البول، لأن نقصهما يهيّئ لاضطراب النظم. ويزيد أثره المهدّئ مع الكحول والمهدّئات ومسكّنات الأفيون. ويتضادّ مع أدوية باركنسون الدوبامينية فيبطل بعضها أثر بعض. وأدوية تغيّر استقلابه في الكبد ترفع مستواه أو تخفضه، فأبلغ الصيدلي بكل دواء جديد قبل أن تبدأه.',
    en: 'The most dangerous things to combine with it are anything that lengthens the heart’s electrical interval: some antibiotics, antiarrhythmics, antidepressants and anti-sickness medicines — the risk stacks. So too anything that lowers potassium or magnesium, such as diuretics, since their lack sets the stage for a rhythm disturbance. Its sedating effect deepens with alcohol, sedatives and opioid painkillers. It opposes dopaminergic Parkinson’s medicines and each cancels the other. Medicines that alter its breakdown in the liver raise or lower its level, so tell the pharmacist about every new drug before starting it.'
  },
  avoid: {
    ar: 'ممنوع عند التحسّس منه، وممنوع في داء باركنسون وفي خرف أجسام ليوي لأنه يفاقمهما بشدّة. وممنوع عند حالات تثبيط الوعي الشديد، وعند إطالة معروفة في كهرباء القلب أو نقص في البوتاسيوم أو المغنيسيوم. وعليه تحذير رسمي: كبار السنّ المصابون بالخرف يزيد احتمال وفاتهم إن عولجوا بمضادات الذهان، وهو غير معتمد لضبط سلوكهم. ويُستعمل بحذر في الصرع وأمراض القلب وفرط نشاط الدرقية. وفي الحمل والرضاعة لا يُبدأ ولا يُوقف إلا بقرار الطبيب.',
    en: 'It is forbidden in anyone allergic to it, and forbidden in Parkinson’s disease and Lewy body dementia because it worsens both severely. It is forbidden in states of severe depression of consciousness, and where the heart’s electrical interval is known to be prolonged or potassium or magnesium are low. It carries an official warning: older people with dementia are more likely to die if treated with antipsychotics, and it is not approved for controlling their behaviour. It is used with caution in epilepsy, heart disease and an overactive thyroid. In pregnancy and breastfeeding it is neither started nor stopped except by the doctor’s decision.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682180.html',
    'https://www.ncbi.nlm.nih.gov/books/NBK560892/'
  ]
};

RX_BODY['risperidone'] = {
  what: {
    ar: 'الريسبيريدون مضاد ذهان من الجيل الثاني يُسمّى اللانمطي، يحجب مستقبلات الدوبامين ومستقبلات السيروتونين معاً. يأتي أقراصاً ومحلولاً وأقراصاً تذوب في الفم وحقناً مديدة. وهو أخفّ من الجيل الأول على الحركة عند المقادير المعتادة لكنه لا يُعفى منها كلّما زادت. وما يميّزه بين أقرانه أنه أكثرهم رفعاً لهرمون الحليب، فتظهر عليه آثار هرمونية واضحة عند الجنسين تدفع بعض الناس إلى تركه.',
    en: 'Risperidone is a second-generation antipsychotic, called atypical, which blocks dopamine receptors and serotonin receptors together. It comes as tablets, a liquid, orally dissolving tablets and long-acting injections. It is lighter than the first generation on movement at the usual amounts, though not exempt from it as the amount rises. What sets it apart among its peers is that it raises the milk hormone more than they do, so clear hormonal effects appear in both sexes and drive some people to abandon it.'
  },
  why: {
    ar: 'يُوصف للفصام عند البالغين والمراهقين، وللنوبات الهوسية في الاضطراب ثنائي القطب، ولنوبات الهياج والعدوانية وإيذاء النفس الشديدة عند الأطفال والمراهقين المصابين بالتوحّد. وفي التوحّد ينبغي أن يُفهم حدّه بدقّة: هو لا يعالج التوحّد نفسه ولا يغيّر مساره، وإنما يخفّف نوبات الغضب الشديد التي تؤذي صاحبها أو من حوله، ويُستعمل مع البرامج السلوكية لا بديلاً عنها ولا لمدّة أطول من الحاجة.',
    en: 'It is prescribed for schizophrenia in adults and adolescents, for manic episodes in bipolar disorder, and for severe irritability, aggression and self-injury in children and adolescents with autism. In autism its limit should be understood exactly: it does not treat autism itself and does not change its course; it eases the severe rages that harm the child or those around them, and it is used alongside behavioural programmes, not instead of them, and not for longer than needed.'
  },
  how: {
    ar: 'يحجب الريسبيريدون مستقبلات الدوبامين من النوع الثاني فيخفّ فرط نشاطه المرتبط بالهلوسة والضلالات، ويحجب في الوقت نفسه صنفاً من مستقبلات السيروتونين. وهذا الحجب الثاني هو سرّ الفرق عن الجيل القديم: هو يخفّف الكبح المفروض على مسار الحركة فتقلّ أعراض التيبّس والرعشة. لكنه لا يحمي مسار هرمون الحليب، فيبقى الحجب الدوباميني هناك كاملاً ويرتفع البرولاكتين. ويؤثّر كذلك في مستقبلات أدرينالية وهستامينية فيهبط الضغط وينعّس.',
    en: 'Risperidone blocks type-two dopamine receptors, so the over-activity linked to hallucinations and delusions subsides, and at the same time blocks a class of serotonin receptors. That second blockade is the secret of the difference from the older generation: it eases the restraint imposed on the movement pathway, so rigidity and tremor are less. But it does not protect the milk-hormone pathway, where the dopamine blockade remains complete and prolactin rises. It also acts on adrenergic and histamine receptors, so blood pressure falls and drowsiness follows.'
  },
  effects: {
    ar: 'أكثرها صعوبة في النوم، وصداع، وزيادة الشهية والوزن، وألم بطن وغثيان وقيء، وإمساك أو إسهال. ومن الشائع المميّز آثار هرمون الحليب: تضخّم الثدي وألمه وإفراز حليب عند الرجل والمرأة، واضطراب الدورة أو انقطاعها، ونقص الرغبة. ومنها دوخة عند الوقوف من هبوط الضغط، ونعاس، وسيلان لعاب. وقد تظهر اضطرابات حركية كالتيبّس والرعشة والتململ، وهي أقلّ من الجيل القديم لكنها ترتفع كلّما زادت الكمية.',
    en: 'The commonest are difficulty sleeping, headache, increased appetite and weight, abdominal pain, nausea and vomiting, and constipation or diarrhoea. Distinctively common are the milk-hormone effects: breast swelling and tenderness and milk leakage in both men and women, disturbed or absent periods, and reduced desire. There are also dizziness on standing from a fall in blood pressure, drowsiness and drooling. Movement problems such as rigidity, tremor and restlessness may appear; they are fewer than with the older generation but rise as the amount rises.'
  },
  warning: {
    ar: 'اطلب الطوارئ فوراً عند حرارة مرتفعة مع تيبّس عضلي وتعرّق وقلق واضطراب وعي، فهذه المتلازمة الخبيثة للذهانيات. واطلب الطوارئ عند ضعف مفاجئ في الوجه أو صعوبة كلام أو فقد توازن أو زغللة، فهذه علامات سكتة وخطرها أعلى عند كبار السنّ المصابين بالخرف. واذهب فوراً عند ألم صدر مع ضيق نفس، وعند تشنّج، وعند انتصاب مؤلم يستمرّ ساعات فهو طارئ يهدّد العضو. وراجع طبيبك عاجلاً عند حركات لا إرادية في الوجه أو اللسان، وعند تورّم ساق مع ألم واحمرار.',
    en: 'Get emergency help at once for a high temperature with muscle rigidity, sweating, anxiety and clouded consciousness: this is neuroleptic malignant syndrome. Get emergency help for sudden facial weakness, difficulty speaking, loss of balance or blurred vision, which are signs of a stroke, whose risk is higher in older people with dementia. Go immediately for chest pain with shortness of breath, for a seizure, and for a painful erection lasting hours, which is an emergency that threatens the organ. See your doctor urgently for involuntary movements of the face or tongue, and for a swollen leg with pain and redness.'
  },
  interact: {
    ar: 'يزيد أثره المهدّئ ويعمّق هبوط الضغط مع الكحول والمهدّئات ومسكّنات الأفيون ومضادات الهيستامين المنعّسة. ويُجمع بحذر مع أدوية خفض الضغط لأن الدوار عند الوقوف يشتدّ. ويتضادّ مع أدوية باركنسون الدوبامينية. وأدوية تغيّر استقلابه في الكبد — كبعض مضادات الاكتئاب وأدوية الصرع — ترفع مستواه أو تخفضه. ويُجمع بحذر مع ما يطيل كهرباء القلب ومع مدرّات البول عند كبار السنّ. وأبلغ الصيدلي بكل دواء أو عشب جديد قبل أن تبدأه.',
    en: 'Its sedating effect increases and the drop in blood pressure deepens with alcohol, sedatives, opioid painkillers and drowsy antihistamines. It is combined only with care with blood-pressure medicines, since dizziness on standing worsens. It opposes dopaminergic Parkinson’s medicines. Medicines that alter its breakdown in the liver — some antidepressants and epilepsy drugs — raise or lower its level. It is combined with care with anything that lengthens the heart’s electrical interval, and with diuretics in older people. Tell the pharmacist about every new medicine or herb before starting it.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس منه. وعليه تحذير رسمي: كبار السنّ المصابون بالخرف يزيد عندهم احتمال الوفاة والسكتة، وهو غير معتمد لضبط سلوكهم. وأخبر طبيبك إن كان عندك مرض في القلب أو اضطراب نظم أو هبوط ضغط، أو سبق سكتة أو خثرة أو تاريخ عائلي للتخثّر، أو باركنسون أو خرف، أو صرع، أو سكّري، أو مرض في الكلى أو الكبد، أو نقص سابق في الكريات البيضاء، أو انتصاب مؤلم مطوّل سابق، أو صعوبة في تحمّل الحرّ. وفي الحمل والرضاعة لا يُوقف إلا بقرار الطبيب.',
    en: 'It is not for anyone who has reacted to it. It carries an official warning: older people with dementia face a higher chance of death and of stroke, and it is not approved for controlling their behaviour. Tell your doctor about heart disease, a rhythm disorder or low blood pressure; a past stroke or clot or a family history of clotting; Parkinson’s disease or dementia; epilepsy; diabetes; kidney or liver disease; a past fall in white blood cells; a past prolonged painful erection; or difficulty tolerating heat. In pregnancy and breastfeeding it is not stopped except by the doctor’s decision.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a694015.html',
    'https://www.nhs.uk/medicines/risperidone/side-effects-of-risperidone/',
    'https://www.nhs.uk/medicines/risperidone/who-can-and-cannot-take-risperidone/',
    'https://www.nhs.uk/medicines/risperidone/pregnancy-breastfeeding-and-fertility-while-taking-risperidone/'
  ]
};

RX_BODY['olanzapine'] = {
  what: {
    ar: 'الأولانزابين مضاد ذهان من الجيل الثاني، يحجب مستقبلات دوبامينية وسيروتونينية عديدة معاً، ويوصف بأنه واسع الارتباط. يأتي أقراصاً وأقراصاً تذوب في الفم وحقناً. وهو مهدّئ واضح ومثبّت للمزاج، وأقلّ من الجيل الأول إثارةً لاضطرابات الحركة، وأقلّ من الريسبيريدون رفعاً لهرمون الحليب. لكن ثمنه معروف ومحسوب: هو من أثقل مضادات الذهان على الاستقلاب — شهية وزيادة وزن وسكّر ودهون.',
    en: 'Olanzapine is a second-generation antipsychotic that blocks many dopamine and serotonin receptors together and is described as broadly binding. It comes as tablets, orally dissolving tablets and injections. It is clearly sedating and mood-stabilising, less likely than the first generation to provoke movement disorders, and less prolactin-raising than risperidone. But its price is known and counted: it is among the heaviest antipsychotics on metabolism — appetite, weight gain, blood sugar and lipids.'
  },
  why: {
    ar: 'يُوصف للفصام، وللاضطراب ثنائي القطب من النوع الأول: النوبة الهوسية أو المختلطة، والوقاية من عودة النوبات. ويُستعمل مع الفلوكسيتين في اكتئاب ثنائي القطب. وأثره المهدّئ يجعله كثير الاستعمال في الهياج الحادّ. ومثل بقية هذه الفصيلة هو يضبط الأعراض ويقي من عودتها ولا يشفي المرض، ولهذا يُستمرّ عليه بعد زوال النوبة مدّة يقرّرها الطبيب، والتوقّف المبكّر من أكثر أسباب الانتكاس شيوعاً.',
    en: 'It is prescribed for schizophrenia and for bipolar I disorder: the manic or mixed episode, and prevention of further episodes. It is used with fluoxetine in bipolar depression. Its calming effect makes it much used in acute agitation. Like the rest of its family it controls symptoms and guards against their return without curing the illness, which is why it is continued after an episode has passed for a period the doctor decides; stopping early is among the commonest causes of relapse.'
  },
  how: {
    ar: 'يحجب الأولانزابين مستقبلات الدوبامين من النوع الثاني فيخفّ فرط النشاط الدوباميني المرتبط بالهلوسة والضلالات، ويحجب معها مستقبلات للسيروتونين فيقلّ ما يفرضه الحجب الأول من تيبّس ورعشة. وهو لا يقف عند هذين النظامين بل يرتبط بمستقبلات هيستامينية — ومن هنا نعاسه وزيادة شهيّته — وبمستقبلات كولينية فيجفّف الفم ويبطّئ الأمعاء، وبمستقبلات أدرينالية فيهبط الضغط عند النهوض. وسعة ارتباطه هذه هي تفسير آثاره الاستقلابية الثقيلة.',
    en: 'Olanzapine blocks type-two dopamine receptors, so the dopamine over-activity linked to hallucinations and delusions subsides, and blocks serotonin receptors alongside them, so the rigidity and tremor imposed by the first blockade are reduced. It does not stop at these two systems: it binds histamine receptors — hence its drowsiness and increased appetite — cholinergic receptors, so it dries the mouth and slows the bowel, and adrenergic receptors, so blood pressure falls on rising. This breadth of binding is the explanation for its heavy metabolic effects.'
  },
  effects: {
    ar: 'أشهرها النعاس نهاراً، وزيادة الشهية والوزن — وهي زيادة قد تكون كبيرة ولا يُستهان بها — والدوخة عند الوقوف، والإمساك، وجفاف الفم، وطفح جلدي، ومشكلات جنسية أو اضطراب في الدورة من تغيّر الهرمونات. ومع طول الاستعمال قد يرتفع سكّر الدم حتى يبلغ حدّ السكّري، وقد ترتفع الدهون، ولهذا يُطلب تحليل دوري للسكّر والدهون مع متابعة الوزن. وقد تظهر اضطرابات حركية لكنها أقلّ من الجيل الأول.',
    en: 'The best known are daytime drowsiness; increased appetite and weight — a gain that may be large and is not to be taken lightly; dizziness on standing; constipation; dry mouth; rash; and sexual problems or disturbed periods from hormonal change. With long use, blood sugar may rise as far as diabetes and lipids may rise, which is why periodic blood tests for sugar and lipids are requested alongside monitoring of weight. Movement problems may appear, but fewer than with the first generation.'
  },
  warning: {
    ar: 'اطلب الطوارئ فوراً عند حرارة مرتفعة مع تيبّس عضلي وتعرّق واضطراب وعي، فهذه المتلازمة الخبيثة للذهانيات. واطلب الطوارئ عند ألم صدر أو ضيق نفس مفاجئ، وعند ضعف في الوجه أو صعوبة كلام أو زغللة، فهذه علامات خثرة أو سكتة. واذهب فوراً عند طفح واسع مع حرارة وتورّم وجه وتضخّم غدد، وعند تشنّج، وعند انتصاب مؤلم مستمرّ. وراجع طبيبك عاجلاً عند عدوى متكرّرة أو التهاب حلق مع حرارة فقد تنقص الكريات البيضاء، وعند عطش شديد وكثرة تبوّل وجوع شديد فهذه علامات ارتفاع السكّر.',
    en: 'Get emergency help at once for a high temperature with muscle rigidity, sweating and clouded consciousness: this is neuroleptic malignant syndrome. Get emergency help for chest pain or sudden shortness of breath, and for facial weakness, difficulty speaking or blurred vision, which are signs of a clot or a stroke. Go immediately for a widespread rash with fever, facial swelling and swollen glands, for a seizure, and for a persistent painful erection. See your doctor urgently for repeated infections or a sore throat with fever, as the white cells may have fallen, and for intense thirst, frequent urination and extreme hunger, which are signs of high blood sugar.'
  },
  interact: {
    ar: 'لا يُؤخذ معه الكانابيديول لأنه يغيّر عمله. ويرفع الفلوفوكسامين والسيبروفلوكساسين مستواه في الدم، بينما يخفضه الكاربامازيبين. والتدخين يخفض مستواه كذلك، فتغيير عادة التدخين بالزيادة أو النقصان يستدعي مراجعة الطبيب. ويعمّق النعاس مع البنزوديازيبينات ومسكّنات الأفيون كالمورفين والترامادول ومضادات الهيستامين المنعّسة والكحول. ويشتدّ هبوط الضغط عند الوقوف مع أدوية الضغط. وما يُنعّس من الأعشاب يُجمع معه بحذر.',
    en: 'Cannabidiol must not be taken with it, as it alters how it works. Fluvoxamine and ciprofloxacin raise its level in the blood, while carbamazepine lowers it. Smoking also lowers its level, so any change in smoking habit, up or down, calls for review with the doctor. Drowsiness deepens with benzodiazepines, opioid painkillers such as morphine and tramadol, drowsy antihistamines and alcohol. The fall in blood pressure on standing worsens with blood-pressure medicines. Herbal remedies that cause drowsiness are combined with it only with care.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس منه. وعليه تحذير رسمي: كبار السنّ المصابون بالخرف يزيد احتمال وفاتهم على مضادات الذهان، وهو غير معتمد لضبط سلوكهم. وأخبر طبيبك إن كان عندك سكّري أو ارتفاع في الدهون أو سمنة، أو مرض في القلب أو هبوط ضغط، أو صرع، أو مرض في الكبد، أو تضخّم بروستاتا أو صعوبة تبوّل، أو زرق مغلق الزاوية، أو صعوبة بلع، أو نقص سابق في الكريات البيضاء. وفي الحمل لا يُعدّ ضارّاً بحسب النشرات ولا يُوقف بلا مراجعة، والرضاعة ممكنة مع مراقبة الرضيع.',
    en: 'It is not for anyone who has reacted to it. It carries an official warning: older people with dementia are more likely to die on antipsychotics, and it is not approved for controlling their behaviour. Tell your doctor about diabetes, raised lipids or obesity; heart disease or low blood pressure; epilepsy; liver disease; an enlarged prostate or difficulty passing urine; angle-closure glaucoma; difficulty swallowing; or a past fall in white blood cells. In pregnancy it is not considered harmful according to the leaflets and is not stopped without review, and breastfeeding is possible with monitoring of the baby.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a601213.html',
    'https://www.nhs.uk/medicines/olanzapine/side-effects-of-olanzapine/',
    'https://www.nhs.uk/medicines/olanzapine/taking-olanzapine-with-other-medicines-and-herbal-supplements/',
    'https://www.nhs.uk/medicines/olanzapine/pregnancy-breastfeeding-and-fertility-while-taking-olanzapine/'
  ]
};

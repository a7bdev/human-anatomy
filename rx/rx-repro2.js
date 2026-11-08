/* ============================================================
   موسوعة الأدوية — أجسام بطاقات دفعة الولادة والمواليد (repro2)
   rx/rx-repro2.js   (يُحمَّل عند فتح البطاقة)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. الجرعة يحدّدها طبيب أو صيدلي.
   ============================================================ */

var RX_BODY = window.RX_BODY || {};

RX_BODY['oxytocin'] = {
  what: {
    ar: 'الأوكسيتوسين هرمون يفرزه الجسم نفسه من الغدة النخامية، ويُصنَع دواءً يُعطى بالحقن في الوريد أو العضل داخل المستشفى وحده. ينتمي إلى فصيلة مقبّضات الرحم: أدوية تجعل عضلة الرحم تنقبض انقباضاً منتظماً. ولا يوجد منه قرص يُبلع لأن المعدة تهضمه قبل أن يعمل. وتصنّفه هيئات سلامة الدواء ضمن أخطر ما يُستعمل داخل المستشفيات، لا لأنه سامّ، بل لأن مقدار ما يدخل الوريد منه يغيّر قوة الطلق كلها وحال الجنين معها، فلا يُعطى إلا حيث تُراقب نبضات الجنين وضغط الأم لحظة بلحظة.',
    en: 'Oxytocin is a hormone the body itself releases from the pituitary gland, and is also made as a medicine given by injection into a vein or muscle, in hospital only. It belongs to the uterotonics: medicines that make the muscle of the womb contract in a regular rhythm. There is no tablet form, because the stomach digests it before it can work. Drug-safety bodies rank it among the most hazardous medicines used in hospitals, not because it is poisonous, but because the amount entering the vein changes the whole strength of labour and the state of the baby with it, so it is given only where the fetal heart and the mother blood pressure are watched minute by minute.'
  },
  why: {
    ar: 'يُعطى لتحريض الطلق أو تقويته حين يكون لذلك سبب طبّي: تسمّم الحمل، أو سكّري الأم، أو انفجار الأغشية قبل بدء الطلق، أو رحم لا ينقبض انقباضاً كافياً. ويُعطى بعد خروج المولود لمنع نزف ما بعد الولادة ولعلاجه إذا وقع، وهو أول ما توصي به منظمة الصحة العالمية لهذا الغرض. ويدخل مع أدوية أخرى في إفراغ الرحم من حمل متوقّف. والنشرة الرسمية تنصّ صراحةً على أنه لا يُستعمل لتحريض ولادة اختيارية للراحة أو لموعد مناسب، لأن الموازنة بين نفعه وخطره في هذي الحال غير مدروسة.',
    en: 'It is given to start or strengthen labour when there is a medical reason: pre-eclampsia, maternal diabetes, membranes that ruptured before labour began, or a womb that is not contracting adequately. It is given after the baby is delivered to prevent bleeding after birth and to treat it if it happens, and it is the first agent the World Health Organization recommends for that purpose. It is also used with other medicines to empty the womb of a pregnancy that has stopped. The official label states plainly that it is not to be used for elective induction for convenience or for a chosen date, because the balance of benefit and risk in that situation has not been established.'
  },
  how: {
    ar: 'لعضلة الرحم مستقبلات خاصّة بالأوكسيتوسين يزداد عددها مع تقدّم الحمل. وحين يرتبط الدواء بها يدخل الكالسيوم إلى خلايا العضلة فتنقبض، وكل انقباضة تدفع الجسم إلى إفراز مزيد من الهرمون فتشتدّ الموجة التالية. وبعد الولادة تضغط هذي الانقباضات على أوعية موضع المشيمة فتغلقها، وهذا هو ما يوقف النزف لا تخثّر الدم وحده. وللهرمون أثر جانبي مهمّ في فهم خطره: يشبه في تركيبه هرمون حبس الماء، فيقلّل ما تطرحه الكلية، وهنا يقع خطر تخفيف أملاح الدم عند الإكثار من السوائل.',
    en: 'The muscle of the womb carries receptors specific to oxytocin, and their number rises as pregnancy advances. When the medicine binds them, calcium enters the muscle cells and they contract, and each contraction pushes the body to release more of the hormone so the next wave is stronger. After birth these contractions squeeze the vessels at the placental site shut, and that is what stops the bleeding, not clotting alone. The hormone also has a side property that explains its danger: it resembles the water-retaining hormone in structure, so it reduces what the kidney passes out, and there lies the risk of diluting the salts of the blood when fluids are given generously.'
  },
  effects: {
    ar: 'الغثيان والقيء أكثر ما يُشتكى منه، وقد يحمرّ موضع الحقن. والانقباضات تصير أقوى وأقرب فأشدّ إيلاماً، وهذا هو المطلوب من الدواء لا عَرَض منه، ولهذا السبب يُعرَض المسكّن أو التخدير فوق الجافية. وقد يهبط الضغط قليلاً أو يتسارع النبض مع الحقن السريع في الوريد. وأغلب هذي الأعراض يزول بضبط سرعة التسريب، ولذلك يبقى الأمر بيد من يراقب لا بيد الأم، ولا معنى لتحمّل ألم صامت من غير إخبار القابلة به.',
    en: 'Nausea and vomiting are the commonest complaints, and the injection site may redden. Contractions become stronger and closer together and therefore more painful; that is what the medicine is for rather than a side effect of it, and it is why pain relief or an epidural is offered. Blood pressure may dip a little or the pulse quicken with rapid intravenous injection. Most of this settles by adjusting the infusion rate, which is why control stays with the person monitoring rather than with the mother, and there is nothing to gain from enduring pain silently instead of telling the midwife.'
  },
  warning: {
    ar: 'اطلبي المساعدة فوراً — وأنتِ في المستشفى فالنداء نداء ثوانٍ — إذا: لم يرتخِ الرحم بين الانقباضات أو صار الألم متواصلاً لا يهدأ، أو جاءكِ ألم بطن حادّ مفاجئ، فهذي علامات فرط الانقباض وخطر تمزّق الرحم. أو صداع شديد مع تشوّش أو نعاس غريب أو غثيان مستمرّ أو تشنّج، فهذي علامات تخفّف أملاح الدم من حبس الماء. وكذلك ألم الصدر أو خفقان غير منتظم، أو نزف غزير بعد الولادة لا يخفّ، أو طفح وحكّة وتورّم الوجه وضيق نفَس.',
    en: 'Call for help at once — you are in hospital, so the call is a matter of seconds — if: the womb does not relax between contractions, or the pain becomes continuous and never eases, or a sudden sharp abdominal pain appears; these are signs of overstimulation and of the risk of uterine rupture. Or a severe headache with confusion, unusual drowsiness, persistent nausea or a seizure; these are signs that the salts of the blood have been diluted by water retention. The same applies to chest pain or an irregular pounding heartbeat, to heavy bleeding after birth that does not settle, and to rash, itching, facial swelling or breathlessness.'
  },
  interact: {
    ar: 'الميزوبروستول وسائر البروستاغلاندينات تقوّي أثره على الرحم، فجمعها معه يزيد خطر فرط الانقباض. والإرجومترين وقلويدات الإرغوت ترفع الضغط معه. وبعض مخدّرات الاستنشاق تُضعف انقباض الرحم وقد تُحدث اضطراب نظم القلب. ومقبّضات الأوعية مع التخدير الناحي — الذنبي أو فوق الجافية — قد ترفع الضغط ارتفاعاً شديداً. وكمّيات السوائل الوريدية الكبيرة معه هي وصفة نقص الصوديوم، ولذلك يُحسب الداخل والخارج من السوائل بدقّة طوال التسريب.',
    en: 'Misoprostol and other prostaglandins strengthen its effect on the womb, so combining them raises the risk of overstimulation. Ergometrine and the ergot alkaloids raise blood pressure alongside it. Some inhalational anaesthetics weaken uterine contraction and may provoke heart-rhythm disturbance. Vasoconstrictors together with regional anaesthesia — caudal or epidural — can push blood pressure up severely. Large volumes of intravenous fluid given with it are a recipe for low sodium, which is why fluid in and fluid out are measured carefully throughout the infusion.'
  },
  avoid: {
    ar: 'لا يُعطى حيث تكون الولادة المهبلية نفسها غير آمنة: المشيمة المنزاحة، وتدلّي الحبل السرّي، ووضع الجنين المعترض، وعدم تناسب رأس الجنين مع الحوض، ورحم مفرط التوتّر أصلاً. ويُمنع مع هربس تناسلي نشط. ويُتوخّى الحذر الشديد في رحم سبقته عملية قيصرية أو جراحة، وفي تسمّم الحمل، وفي أمراض القلب. ولا يُعطى لمن ظهرت عليها حساسية منه. وليس دواءً بيتياً بحال: لا يُستعمل خارج مكان فيه مراقبة جنينية وقدرة على ولادة قيصرية عاجلة.',
    en: 'It is not given where vaginal birth itself would be unsafe: placenta praevia, cord prolapse, a transverse lie, a baby head that does not fit the pelvis, or a womb that is already in excessive tone. It is barred with active genital herpes. Great caution applies to a womb with a previous caesarean or other surgery, to pre-eclampsia, and to heart disease. It is not given to anyone who has shown an allergic reaction to it. And it is in no sense a home medicine: it is not used outside a setting with fetal monitoring and the ability to perform an urgent caesarean.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a682685.html',
    'https://www.ncbi.nlm.nih.gov/books/NBK507848/',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a9b62187-4141-487c-a9da-f42ad7f9b408',
    'https://www.ncbi.nlm.nih.gov/books/NBK535984/'
  ]
};

RX_BODY['carbetocin'] = {
  what: {
    ar: 'الكاربيتوسين نظير مُصنَّع للأوكسيتوسين، عُدِّل تركيبه ليقاوم الإنزيمات التي تفكّكه، فيدوم أثره ساعات بحقنة واحدة بدل تسريب وريدي متواصل. يُعطى في العضل أو الوريد بعد خروج المولود، وله صيغة تتحمّل الحرارة لا تحتاج سلسلة تبريد، ولهذا أدخلته منظمة الصحة العالمية في قائمة أدويتها الأساسية بديلاً للأوكسيتوسين حيث يصعب حفظ الثلاجة. وهو دواء مستشفى صرف، ومستحضره مُعدّ لمرّة واحدة لا تُكرَّر.',
    en: 'Carbetocin is a synthetic analogue of oxytocin, altered so that it resists the enzymes that break it down, so a single injection lasts hours instead of a continuous intravenous drip. It is given into muscle or vein after the baby is delivered, and a heat-stable form exists that needs no cold chain, which is why the World Health Organization placed it on its essential medicines list as an alternative to oxytocin where refrigeration is difficult. It is strictly a hospital medicine, and the preparation is intended for a single dose that is not repeated.'
  },
  why: {
    ar: 'الغرض المرخّص واحد لا يتعدّاه: منع نزف ما بعد الولادة الناتج عن ونى الرحم — أي ارتخائه بعد خروج المشيمة بدل أن ينقبض على أوعيته. يُستعمل بعد الولادة المهبلية وبعد القيصرية، ويُعطى في أسرع وقت بعد خروج المولود ويُفضّل قبل خروج المشيمة. وتذكره منظمة الصحة العالمية بين مقبّضات الرحم الموصى بها لمنع النزف حيث يتوفّر. وهو ليس دواءً لتحريض الولادة ولا لتقوية الطلق، وإعطاؤه قبل خروج المولود ممنوع لأن أثره الطويل يخنق الجنين.',
    en: 'It has one licensed purpose and no more: preventing bleeding after birth caused by uterine atony — a womb that stays slack after the placenta comes away instead of clamping down on its vessels. It is used after vaginal birth and after caesarean, given as soon as possible after the baby is out and preferably before the placenta is delivered. The World Health Organization lists it among the uterotonics recommended for preventing bleeding where it is available. It is not a medicine for inducing labour or strengthening contractions, and giving it before the baby is delivered is forbidden because its long action would suffocate the baby.'
  },
  how: {
    ar: 'يرتبط الكاربيتوسين بالمستقبلات نفسها التي يرتبط بها الأوكسيتوسين في عضلة الرحم، فيزيد عدد الانقباضات وقوّتها. ويظهر انقباض قوي ثابت خلال دقيقتين تقريباً من الحقن، ويبقى الرحم مشدوداً ساعات — وهذا ما يميّزه: العضلة المنقبضة تضغط الأوعية المفتوحة في موضع المشيمة فتغلقها إغلاقاً ميكانيكياً قبل أن يتكوّن أي تخثّر. وطول أثره جاء من تعديل جزيئه ليقاوم ما يفكّك الأوكسيتوسين بسرعة داخل الدم.',
    en: 'Carbetocin binds the same receptors in the muscle of the womb that oxytocin binds, increasing both the rate and the force of contractions. A firm, sustained contraction appears within about two minutes of the injection, and the womb stays clamped for hours — and that is its distinguishing feature: the contracted muscle presses the open vessels at the placental site closed mechanically, before any clot has formed. Its long action comes from a change to the molecule that lets it resist what rapidly breaks oxytocin down in the blood.'
  },
  effects: {
    ar: 'الشائع جداً بعد الحقن الوريدي: صداع، ورجفة، وتورّد الوجه وإحساس بالحرارة، وهبوط خفيف في الضغط، وغثيان، وألم بطن، وحكّة. والشائع دونه: دوخة، وقشعريرة، وطعم معدني في الفم، وقيء، وألم ظهر، وفقر دم. وأغلب هذا يمرّ خلال ساعات ولا يستدعي شيئاً غير الطمأنة والراحة. والحقن في العضل أقلّ إحداثاً لهذي الأعراض من الوريدي، والوريدي يُعطى ببطء لهذا السبب بالذات لا لغيره.',
    en: 'Very common after intravenous injection: headache, trembling, facial flushing and a feeling of warmth, a slight drop in blood pressure, nausea, abdominal pain and itching. Less common but still frequent: dizziness, chills, a metallic taste in the mouth, vomiting, back pain and anaemia. Most of this passes within hours and calls for nothing beyond reassurance and rest. Injection into muscle produces less of this than the intravenous route, and the intravenous dose is pushed slowly for exactly that reason and no other.'
  },
  warning: {
    ar: 'أخبري الفريق فوراً إذا: استمرّ النزف غزيراً بعد الحقنة أو عاد بعد أن خفّ — والجرعة لا تُكرَّر، فالنزف المستمرّ يعني الحاجة إلى علاج آخر لا إلى حقنة ثانية. وكذلك ألم الصدر أو ضيق النفَس أو خفقان غير منتظم أو بطء شديد في النبض. وصداع شديد مع غثيان أو تشوّش أو نعاس أو تشنّج قد يعني نقص صوديوم الدم، خاصّةً مع سوائل وريدية كثيرة. وطفح أو تورّم الوجه أو ضيق تنفّس علامة حساسية تستدعي تدخّلاً فورياً.',
    en: 'Tell the team at once if: bleeding stays heavy after the injection or returns after settling — the dose is not repeated, so continued bleeding means another treatment is needed, not a second injection. The same applies to chest pain, breathlessness, an irregular pounding heartbeat, or a very slow pulse. A severe headache with nausea, confusion, drowsiness or a seizure may mean the sodium of the blood has fallen, especially alongside generous intravenous fluids. Rash, facial swelling or difficulty breathing is a sign of allergy that needs immediate action.'
  },
  interact: {
    ar: 'قلويدات الإرغوت مثل الإرجومترين ترفع الضغط معه فيُراقَب الضغط عن قرب. والبروستاغلاندينات مثل الميزوبروستول تقوّي أثره على الرحم، ولا يُنصح بجمعهما إلا بقرار من الفريق. وبعض مخدّرات الاستنشاق تُضعف انقباض الرحم فيقلّ مفعوله. والسوائل الوريدية الكثيرة معه ترفع خطر احتباس الماء ونقص الصوديوم. ومن أخذت حقنة كاربيتوسين لا تُعطى أوكسيتوسين إضافياً إلا بحساب، لأن أثرهما يتراكم على المستقبل نفسه.',
    en: 'Ergot alkaloids such as ergometrine raise blood pressure alongside it, so pressure is watched closely. Prostaglandins such as misoprostol strengthen its effect on the womb, and combining them is discouraged except by a decision of the team. Some inhalational anaesthetics weaken uterine contraction and reduce its effect. Generous intravenous fluids alongside it raise the risk of water retention and low sodium. A woman who has had carbetocin is not given additional oxytocin without careful thought, because the two accumulate on the very same receptor.'
  },
  avoid: {
    ar: 'يُمنع أثناء الحمل وقبل خروج المولود، ويُمنع لتحريض الولادة. ويُمنع عند الحساسية للكاربيتوسين أو الأوكسيتوسين أو أيٍّ من مكوّنات المستحضر. ويُمنع في مرض الكبد أو الكلى، وفي أمراض القلب والأوعية الخطيرة، وفي الصرع. ويُستعمل بحذر ومراقبة في تسمّم الحمل وما قبله، وفي الشقيقة، والربو، وأي اضطراب قلبي وعائي. ولا يُعطى إلا في وحدة ولادة مجهّزة بكادر مدرّب — وهذا شرط في نشرته لا توصية.',
    en: 'It is barred during pregnancy and before the baby is delivered, and barred for inducing labour. It is barred in anyone sensitive to carbetocin, to oxytocin, or to any ingredient of the preparation. It is barred in liver or kidney disease, in serious cardiovascular disorders, and in epilepsy. It is used with caution and monitoring in pre-eclampsia and eclampsia, in migraine, in asthma, and in any cardiovascular disturbance. And it is given only in a well-equipped obstetric unit with trained staff — a condition written into its label, not a suggestion.'
  },
  updated: '2026-09-10',
  src: [
    'https://www.medicines.org.uk/emc/product/172/smpc',
    'https://www.ncbi.nlm.nih.gov/books/NBK535972/',
    'https://www.who.int/publications/i/item/9789241550420'
  ]
};

RX_BODY['ergometrine'] = {
  what: {
    ar: 'الإرجومترين قلويد من فطر الإرغوت، يُعطى بالحقن في العضل أو الوريد داخل غرفة الولادة. ينتمي إلى مقبّضات الرحم، لكنه يعمل بطريق غير طريق الأوكسيتوسين: يحرّض مستقبلات السيروتونين ومستقبلات ألفا الأدرينالية، فيُحدث انقباضاً مشدوداً متواصلاً يشمل أعلى الرحم وأسفله معاً. ويؤثّر في الرحم غير الحامل أيضاً بخلاف الأوكسيتوسين. وهو من الأدوية الأساسية عند منظمة الصحة العالمية، ويوجد مخلوطاً مع الأوكسيتوسين في حقنة واحدة.',
    en: 'Ergometrine is an alkaloid from the ergot fungus, given by injection into muscle or vein in the delivery room. It belongs to the uterotonics, but it works by a different route from oxytocin: it stimulates serotonin receptors and alpha-adrenergic receptors, producing a sustained, tetanic contraction that involves both the upper and the lower segment of the womb. Unlike oxytocin it also acts on the non-pregnant womb. It is a World Health Organization essential medicine, and it exists combined with oxytocin in a single injection.'
  },
  why: {
    ar: 'يُستعمل في الإدارة النشطة للمرحلة الثالثة من الولادة — أي بعد خروج المولود لمساعدة الرحم على طرد المشيمة وتقليل ما يُفقد من دم — وفي علاج نزف ما بعد الولادة إذا وقع. ويُستعمل كذلك لضبط النزف بعد الإجهاض ولطرد ما تبقّى داخل الرحم. وهو خيار قوي حين لا يكفي الأوكسيتوسين أو لا يتوفّر، غير أن أثره على الأوعية في كل الجسم يجعله ثاني الخيارات لا أوّلها عند من عندها ارتفاع ضغط أو مرض قلب.',
    en: 'It is used in the active management of the third stage of labour — after the baby is out, to help the womb expel the placenta and reduce blood loss — and in treating bleeding after birth when it happens. It is also used to control bleeding after miscarriage or abortion and to expel what remains inside the womb. It is a powerful option when oxytocin is not enough or is not available, but its effect on blood vessels throughout the body makes it a second choice rather than a first in anyone with high blood pressure or heart disease.'
  },
  how: {
    ar: 'يشدّ الدواء ألياف عضلة الرحم شدّاً متواصلاً لا موجات متقطّعة، فتنغلق الأوعية المفتوحة في موضع المشيمة انغلاقاً ميكانيكياً ويتوقّف النزف. لكن المستقبلات التي يعمل عليها موجودة في جدران الشرايين في كل الجسم لا في الرحم وحده، فيضيّقها أيضاً: وهنا يأتي ارتفاع الضغط، وبرودة الأطراف وشحوبها، وتشنّج شرايين القلب النادر. وهذا الأثر المزدوج هو مفتاح فهم منافعه ومحاذيره جميعاً في آنٍ واحد.',
    en: 'The medicine pulls the muscle fibres of the womb into a continuous clench rather than intermittent waves, so the open vessels at the placental site close mechanically and the bleeding stops. But the receptors it acts on sit in artery walls throughout the body, not in the womb alone, so it narrows those too: hence the rise in blood pressure, the cold pale extremities, and the rare spasm of the coronary arteries. That double action is the key to understanding both its benefits and its cautions at once.'
  },
  effects: {
    ar: 'الغثيان والقيء أشيع ما يحدث، وهما أوضح حين يُحقن في الوريد. ويشيع كذلك الصداع والدوخة ومغص البطن والقشعريرة وطنين الأذن وارتفاع مؤقّت في الضغط وشحوب الأطراف. وقد تشعر بعض النساء بوخز أو خدر في اليدين. وتكراره قد يقلّل إدرار الحليب، ولهذا لا يُداوَم عليه عند المرضع. وأغلب هذي الأعراض يمرّ خلال ساعات، والغثيان يُعالَج بمضادّ قيء عند اللزوم بدل احتماله.',
    en: 'Nausea and vomiting are the commonest, and are more striking when it is injected into a vein. Headache, dizziness, abdominal cramping, chills, ringing in the ears, a temporary rise in blood pressure and pale extremities are also common. Some women feel tingling or numbness in the hands. Repeated use can reduce the milk supply, which is why it is not continued in a breastfeeding mother. Most of this passes within hours, and nausea is treated with an anti-sickness medicine when needed rather than simply endured.'
  },
  warning: {
    ar: 'اطلبي المساعدة فوراً عند: صداع شديد مفاجئ أو زغللة في البصر أو ارتفاع شديد في الضغط؛ ألم أو ضغط في الصدر أو ألم ينتشر إلى الفكّ والذراع؛ ضيق نفَس مفاجئ أو زبد وردي مع السعال، وهي وذمة رئة؛ خدر أو شحوب أو زرقة أو ألم في أصابع اليدين والقدمين من تضيّق الشرايين؛ تشنّج أو اضطراب وعي؛ نبض شديد البطء أو غير منتظم. وكذلك إن استمرّ النزف غزيراً رغم الحقنة. هذي كلها طوارئ لا انتظار فيها.',
    en: 'Get help immediately for: a sudden severe headache, blurred vision, or a steep rise in blood pressure; pain or pressure in the chest, or pain spreading to the jaw and arm; sudden breathlessness or pink frothy sputum, which is fluid on the lungs; numbness, pallor, blueness or pain in the fingers and toes from narrowed arteries; a seizure or disturbed consciousness; a very slow or irregular pulse. The same applies if bleeding stays heavy despite the injection. These are all emergencies with no waiting in them.'
  },
  interact: {
    ar: 'مثبّطات إنزيم CYP3A4 القوية ترفع تركيزه فتُحدث تسمّم الإرغوت: منها بعض الماكروليدات كالإريثروميسين والكلاريثروميسين، ومضادّات الفطريات الآزولية، ومثبّطات البروتياز في علاج فيروس نقص المناعة. ولا يُجمع مع التريبتانات المستعملة للشقيقة ولا مع قلويدات إرغوت أخرى. ومع مقبّضات الأوعية أو التخدير الناحي قد يقفز الضغط قفزة خطرة. وحاصرات بيتا قد تزيد تضيّق الأوعية الطرفية معه.',
    en: 'Strong CYP3A4 inhibitors raise its level and produce ergot toxicity: among them some macrolides such as erythromycin and clarithromycin, the azole antifungals, and the protease inhibitors used against HIV. It is not combined with the triptans used for migraine, nor with other ergot derivatives. Together with vasoconstrictors or regional anaesthesia, blood pressure can jump dangerously. Beta blockers may increase the narrowing of peripheral vessels alongside it.'
  },
  avoid: {
    ar: 'يُمنع منعاً باتاً قبل ولادة الكتف الأمامي للجنين، وفي كل الحمل قبل الولادة. ويُمنع في ارتفاع الضغط وتسمّم الحمل وما قبله، وفي أمراض القلب، وفي أمراض الأوعية الطرفية والانسدادية، وفي القصور الشديد في الكبد أو الكلى، وفي الإنتان، وفي خمول الرحم بوصفه سبباً وحيداً. ويُمنع عند الحساسية للإرغوت. وفي الرضاعة: لا يُنصح بتكراره لأنه يُفرَز في الحليب بمقدار غير معلوم ويثبّط إدراره.',
    en: 'It is absolutely barred before the anterior shoulder of the baby is delivered, and throughout pregnancy before birth. It is barred in high blood pressure, in pre-eclampsia and eclampsia, in heart disease, in peripheral and occlusive vascular disease, in severe liver or kidney impairment, in sepsis, and in uterine inertia taken as the sole reason. It is barred in anyone sensitive to ergot. In breastfeeding, repeated use is not advised because it passes into milk in an unknown amount and suppresses the milk supply.'
  },
  updated: '2026-09-10',
  src: [
    'https://www.medicines.org.uk/emc/product/6265/smpc',
    'https://www.ncbi.nlm.nih.gov/books/NBK535984/',
    'https://www.who.int/publications/i/item/9789241550420'
  ]
};

RX_BODY['misoprostol'] = {
  what: {
    ar: 'الميزوبروستول نظير مُصنَّع للبروستاغلاندين E1 على هيئة قرص. رُخّص أصلاً دواءً للمعدة يحميها من قرحة مضادّات الالتهاب غير الستيرويدية، لكن أثره الثاني — تقبيض الرحم وتليين عنقه — جعله من أوسع أدوية النساء والولادة انتشاراً في العالم. وهو رخيص، ويتحمّل الحرارة، ولا يحتاج ثلاجة ولا حقنة ولا كادراً مدرّباً على الحقن، ولهذا صار خياراً معتمداً حيث لا تتوفّر مقبّضات الرحم الحقنية.',
    en: 'Misoprostol is a synthetic analogue of prostaglandin E1 in tablet form. It was originally licensed as a stomach medicine, protecting the lining from ulcers caused by anti-inflammatory painkillers, but its second effect — contracting the womb and softening its neck — made it one of the most widely used obstetric and gynaecological medicines in the world. It is cheap, it tolerates heat, and it needs no refrigerator, no needle and no staff trained to inject, which is why it became an accepted option wherever injectable uterotonics are out of reach.'
  },
  why: {
    ar: 'له وجهان. وجه معدي: وقاية من قرحة المعدة عند من يأخذ مضادّات الالتهاب مدّة طويلة وهو معرّض للقرحة، ككبار السنّ ومن سبقته قرحة. ووجه رحمي: منع نزف ما بعد الولادة وعلاجه حين لا يتوفّر الأوكسيتوسين أو من يحقنه، وتوصي به منظمة الصحة العالمية لهذا في الأماكن التي لا كادر مدرّب فيها. ويُستعمل كذلك في إفراغ الرحم من حمل متوقّف أو إجهاض ناقص، وفي تليين عنق الرحم قبل التحريض، ومع الميفيبريستون في الإجهاض الدوائي.',
    en: 'It has two faces. A stomach face: preventing gastric ulcers in people taking anti-inflammatory painkillers long term who are at risk of ulceration, such as older people and those with a previous ulcer. And a womb face: preventing and treating bleeding after birth where oxytocin, or anyone able to inject it, is unavailable — the World Health Organization recommends it for this in settings without trained health personnel. It is also used to empty the womb after a pregnancy has stopped or an incomplete miscarriage, to soften the cervix before induction, and with mifepristone for medical abortion.'
  },
  how: {
    ar: 'البروستاغلاندينات مواد يصنعها الجسم ولها في كل عضو دور. في المعدة تدفع الخلايا إلى إفراز المخاط والبيكربونات وتقلّل إفراز الحمض، فيقوى الجدار على مقاومة العصارة — ومضادّات الالتهاب تعمل بالضبط بتعطيل صنع هذي المواد، فالميزوبروستول يعيد ما أخذته. وفي الرحم يرتبط بمستقبلات العضلة فتنقبض، ويليّن نسيج عنق الرحم فيلين ويفتح. الجزيء واحد والعضو هو الذي يحدّد الأثر، وهذا سبب اتّساع استعمالاته وسبب خطره معاً.',
    en: 'Prostaglandins are substances the body makes, with a role in every organ. In the stomach they push cells to secrete mucus and bicarbonate and reduce acid output, so the wall can withstand its own juices — and anti-inflammatory painkillers work precisely by shutting down the making of these substances, so misoprostol restores what they removed. In the womb it binds receptors on the muscle so it contracts, and it softens the tissue of the cervix so it yields and opens. One molecule, and the organ decides the effect: that is the reason both for the breadth of its uses and for its danger.'
  },
  effects: {
    ar: 'الإسهال أشهر آثاره وأكثرها حدوثاً، ومعه مغص البطن والغثيان وانتفاخ وغازات وأحياناً قيء. ويشيع في الاستعمال الرحمي ارتعاش وقشعريرة وارتفاع حرارة يبدأ خلال ساعة أو ساعتين ويزول من نفسه، وهو أثر معروف للدواء لا علامة عدوى بذاته. ويحدث صداع. وفي الاستعمال الرحمي نزف يشبه الدورة أو أغزر منه مع تقلّصات. وأغلب الإسهال يخفّ إن أُخذ القرص مع الطعام لا على معدة خالية.',
    en: 'Diarrhoea is its best-known and commonest effect, along with abdominal cramping, nausea, bloating, wind and sometimes vomiting. In obstetric use, shivering, chills and a rise in temperature are common, beginning within an hour or two and settling on their own; this is a recognised effect of the medicine and not in itself a sign of infection. Headache occurs. In obstetric use there is bleeding like a period or heavier, with cramps. Most of the diarrhoea eases if the tablet is taken with food rather than on an empty stomach.'
  },
  warning: {
    ar: 'اذهبي إلى الطوارئ فوراً عند: نزف يبلّل فوطتين سميكتين في الساعة ساعتين متتاليتين؛ ألم بطن شديد متواصل لا يخفّ بالمسكّن، خاصّةً عند من سبقتها ولادة قيصرية أو جراحة رحم، فتمزّق الرحم أخطر ما يحدث؛ حمّى تستمرّ بعد اليوم الأول أو إفراز مهبلي كريه الرائحة؛ دوخة شديدة أو إغماء أو نبض متسارع. وفي الاستعمال المعدي: قيء دموي أو براز أسود قطراني يعني نزفاً هضمياً لا انتظار فيه.',
    en: 'Go to emergency care at once for: bleeding that soaks two thick pads an hour for two hours in a row; severe continuous abdominal pain that painkillers do not ease, especially in a woman with a previous caesarean or uterine surgery, since rupture of the womb is the gravest thing that can happen; fever persisting beyond the first day, or foul-smelling vaginal discharge; severe dizziness, fainting, or a racing pulse. In stomach use: vomiting blood or passing black tarry stools means gastrointestinal bleeding with no waiting in it.'
  },
  interact: {
    ar: 'مضادّات الحموضة التي تحوي المغنيسيوم تزيد إسهاله فتُتجنّب معه. ومضادّات الالتهاب غير الستيرويدية هي سبب استعماله المعدي أصلاً، لكن اجتماعها معه يزيد اضطراب الأمعاء. والأوكسيتوسين وسائر مقبّضات الرحم يتضاعف أثرها معه، فلا تُجمع متقاربة إلا بقرار طبّي وتحت مراقبة، لأن فرط الانقباض هو الخطر. وفي الاستعمال الرحمي يجب إخبار الطبيب بكل مميّع دم يُؤخذ لأنها تزيد غزارة النزف.',
    en: 'Magnesium-containing antacids worsen its diarrhoea and are avoided with it. Anti-inflammatory painkillers are the very reason for its stomach use, yet taking them together adds to the bowel upset. Oxytocin and the other uterotonics have their effect compounded by it, so they are not given close together except by medical decision and under monitoring, because overstimulation is the danger. In obstetric use the doctor must be told about every blood thinner being taken, since these increase the heaviness of bleeding.'
  },
  avoid: {
    ar: 'يُمنع في الحمل حين يكون الغرض حماية المعدة — والنشرة الرسمية تحمل تحذيراً صريحاً بأنه قد يسبّب إجهاضاً أو ولادة مبكّرة أو تشوّهاً خلقياً. والمرأة القادرة على الحمل لا تبدأه لهذا الغرض إلا بعد اختبار حمل سالب وباستعمال وسيلة منع موثوقة. ويُمنع عند الحساسية للبروستاغلاندينات. ويُتوخّى الحذر الشديد في رحم فيه ندبة قيصرية عند استعماله للتحريض. وفي الرضاعة يُفرَز في الحليب وقد يُسهل الرضيع. ولا يُعطى قرصه لأحد غير من وُصف له.',
    en: 'It is barred in pregnancy when the purpose is protecting the stomach — the official label carries an explicit warning that it can cause miscarriage, premature labour or birth defects. A woman able to conceive starts it for that purpose only after a negative pregnancy test and while using reliable contraception. It is barred in anyone allergic to prostaglandins. Great caution applies to a womb carrying a caesarean scar when it is used for induction. In breastfeeding it passes into milk and may loosen the infant bowels. And the tablet is never passed to anyone it was not prescribed for.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a689009.html',
    'https://www.ncbi.nlm.nih.gov/books/NBK539873/',
    'https://www.ncbi.nlm.nih.gov/books/NBK535984/'
  ]
};

RX_BODY['mifepristone-misoprostol'] = {
  what: {
    ar: 'ليس دواءً واحداً بل بروتوكول من دوائين يُؤخذان بالتتابع. الأول الميفيبريستون: مضادّ لمستقبل البروجستيرون — أي أنه يجلس في مقعد هرمون الحمل ويمنعه من العمل. والثاني الميزوبروستول: نظير بروستاغلاندين يجعل الرحم ينقبض ويفرغ. ويُصرف الاثنان في كثير من الدول ضمن برنامج مقيّد بشروط وصف وتوثيق، ويختلف الإذن به من بلد إلى بلد اختلافاً كبيراً، فهو ليس دواءً يُشترى من رفّ ولا يُستعار من أحد.',
    en: 'This is not one medicine but a protocol of two taken in sequence. The first, mifepristone, is a progesterone-receptor antagonist — it sits in the seat of the pregnancy hormone and stops it working. The second, misoprostol, is a prostaglandin analogue that makes the womb contract and empty. In many countries the pair is dispensed under a restricted programme with prescriber and documentation conditions, and legal permission for it differs greatly from country to country, so it is not a medicine bought off a shelf or borrowed from anyone.'
  },
  why: {
    ar: 'يُستعمل الاثنان معاً لإنهاء حمل مبكّر دوائياً بدل الإجراء الجراحي، ويُستعملان كذلك في إفراغ الرحم من حمل توقّف نموّه أو من إجهاض ناقص، وفي تحضير عنق الرحم قبل إجراء داخل الرحم. وللميفيبريستون استعمال آخر لا صلة له بالحمل: ضبط ارتفاع السكّر في متلازمة كوشينغ، لأنه بمقادير أعلى يعطّل مستقبل الكورتيزول أيضاً. وشرط أساسي قبل أي استعمال حملي: التأكّد من أن الحمل داخل الرحم لا خارجه.',
    en: 'The two are used together to end an early pregnancy medically instead of by a surgical procedure, and also to empty the womb of a pregnancy that has stopped growing or of an incomplete miscarriage, and to prepare the cervix before a procedure inside the womb. Mifepristone has a further use unrelated to pregnancy: controlling high blood sugar in Cushing syndrome, because at higher amounts it also blocks the cortisol receptor. One condition comes before any pregnancy use: confirming that the pregnancy is inside the womb and not outside it.'
  },
  how: {
    ar: 'الحمل في بدايته معلّق على البروجستيرون: هو الذي يبقي بطانة الرحم ثابتة، ويبقي العضلة هادئة، ويبقي العنق مغلقاً. فحين يحجب الميفيبريستون هذا الهرمون تتفكّك البطانة، ويلين العنق، وتصير عضلة الرحم شديدة الحساسية للبروستاغلاندين. ثم يأتي الميزوبروستول بعد يوم أو يومين فيجد رحماً مهيّأً فينقبض ويفرغ محتواه. ولهذا فالترتيب والفاصل الزمني بينهما ليسا تفصيلاً — هما أصل نجاح البروتوكول، وتقصيرهما أو إطالتهما يُضعف الأثر.',
    en: 'An early pregnancy hangs on progesterone: it is what keeps the lining of the womb in place, keeps the muscle quiet, and keeps the neck of the womb closed. When mifepristone blocks that hormone, the lining breaks down, the cervix softens, and the muscle of the womb becomes highly sensitive to prostaglandin. Misoprostol then follows a day or two later and finds a womb already prepared, so it contracts and empties. Which is why the order and the interval between them are not a detail — they are the basis of the protocol working, and shortening or stretching them weakens the effect.'
  },
  effects: {
    ar: 'نزف أغزر من الدورة مع كتل، يبدأ عادةً بعد الدواء الثاني، ويستمرّ متفاوتاً أياماً ثم يخفّ تدريجياً وقد يمتدّ أسابيع خفيفاً. ومعه تقلّصات قوية تشبه مغص الدورة أو أشدّ، وغثيان وقيء وإسهال وصداع ودوخة، وارتعاش وقشعريرة وارتفاع حرارة في الساعات الأولى من الميزوبروستول. وأغلب هذا متوقّع ويُدار بمسكّن ودفء وسوائل — والمهمّ هو التمييز بينه وبين علامات الخطر في الحقل التالي.',
    en: 'Bleeding heavier than a period, with clots, usually beginning after the second medicine, continuing at varying levels for days and then easing, sometimes trailing on lightly for weeks. With it come strong cramps like period pain or worse, nausea, vomiting, diarrhoea, headache and dizziness, and shivering, chills and a temperature in the first hours after misoprostol. Most of this is expected and is managed with a painkiller, warmth and fluids — what matters is telling it apart from the danger signs in the next field.'
  },
  warning: {
    ar: 'إلى الطوارئ فوراً عند: نزف يبلّل فوطتين سميكتين في الساعة ساعتين متتاليتين؛ حمّى تتجاوز ثمانياً وثلاثين درجة وتستمرّ أكثر من أربع ساعات؛ ألم حوض شديد يتزايد بعد اليوم الأول؛ إفراز كريه الرائحة؛ ضعف شديد أو غثيان وقيء وإسهال مستمرّ مع نبض متسارع أو إغماء — فقد تحدث عدوى بكتيرية قاتلة بلا حمّى أحياناً. ولا يُهمل موعد المتابعة: استمرار الحمل بعد الدواء يستوجب تصرّفاً لا انتظاراً.',
    en: 'To emergency care at once for: bleeding that soaks two thick pads an hour for two hours in a row; a temperature above thirty-eight degrees lasting more than four hours; severe pelvic pain that increases after the first day; foul-smelling discharge; profound weakness, or persistent nausea, vomiting and diarrhoea with a racing pulse or fainting — a fatal bacterial infection can occur, sometimes without any fever at all. And the follow-up appointment is not optional: a pregnancy continuing after the medicines calls for action, not waiting.'
  },
  interact: {
    ar: 'مضادّات التخثّر ومضادّات الصفيحات تزيد خطر النزف الشديد فتُراجَع قبل البدء. والكورتيزون المتناول مدّة طويلة يعارضه الميفيبريستون على المستقبل نفسه فيضعف أثر الاثنين. ومحرّضات إنزيم CYP3A4 مثل الريفامبيسين وبعض أدوية الصرع وعشبة سانت جون تُنقص فاعليته، ومثبّطاته القوية ترفع تركيزه. ومضادّات الحموضة المحتوية على المغنيسيوم تزيد إسهال الميزوبروستول فتُتجنّب في تلك الأيام.',
    en: 'Anticoagulants and antiplatelet medicines raise the risk of severe bleeding and are reviewed before starting. Long-term corticosteroid treatment is opposed by mifepristone at the same receptor, weakening both. Inducers of the CYP3A4 enzyme such as rifampicin, some epilepsy medicines and St John wort reduce its effectiveness, while strong inhibitors raise its level. Magnesium-containing antacids worsen the diarrhoea caused by misoprostol and are avoided during those days.'
  },
  avoid: {
    ar: 'يُمنع إذا كان الحمل خارج الرحم أو لم يُستبعَد ذلك، وإذا كان في الرحم لولب فيلزم نزعه أولاً. ويُمنع في قصور الكظر المزمن، وفي البورفيريا الوراثية، وفي اضطرابات التخثّر أو مع مميّع دم، وعند الحساسية لأيٍّ من الدوائين. ويُتوخّى الحذر في فقر الدم الشديد وأمراض القلب والكبد والكلى. ولا يُؤخذ في مكان بعيد عن مستشفى يمكن بلوغه في وقت قصير، ولا من غير أن يبقى أحد مع المرأة في أول أيامه.',
    en: 'It is barred if the pregnancy is outside the womb or that has not been ruled out, and if an intrauterine device is in place it must be removed first. It is barred in chronic adrenal failure, in inherited porphyria, in bleeding disorders or alongside a blood thinner, and in anyone sensitive to either medicine. Caution applies in severe anaemia and in heart, liver and kidney disease. It is not taken somewhere far from a hospital that can be reached quickly, nor without someone staying with the woman through its first days.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a600042.html',
    'https://www.ncbi.nlm.nih.gov/books/NBK557612/',
    'https://www.ncbi.nlm.nih.gov/books/NBK539873/'
  ]
};

RX_BODY['alprostadil'] = {
  what: {
    ar: 'الألبروستاديل هو البروستاغلاندين E1 نفسه مُصنَّعاً. مادّة واحدة لها ثلاثة أشكال تخدم حالتين متباعدتين تماماً: حقنة تُعطى في جانب القضيب، وحبيبة توضع داخل مجرى البول، وأمبولة تُسرَّب في وريد المولود داخل العناية المركّزة. والجامع بينها أثر واحد: إرخاء العضلة الملساء في جدار الأوعية فتتّسع. ولا يوجد منه قرص يُبلع، لأن الجسم يكسر معظمه في أول مروره بالرئة والكبد فلا يصل منه ما يكفي.',
    en: 'Alprostadil is prostaglandin E1 itself, made synthetically. One substance with three forms serving two entirely separate situations: an injection into the side of the penis, a pellet placed inside the urethra, and an ampoule infused into the vein of a newborn in intensive care. What unites them is a single action: relaxing the smooth muscle in vessel walls so they widen. There is no tablet, because the body destroys most of it on its first pass through the lungs and liver, so too little would arrive.'
  },
  why: {
    ar: 'عند الرجل: يُستعمل لضعف الانتصاب حين تفشل الأقراص الفموية أو تكون ممنوعة، فهو الخيار الثاني المعتمد، ولا سيّما بعد جراحة البروستاتا أو في السكّري أو بعد إصابة الحبل الشوكي. وعند المولود: يُبقي القناة الشريانية مفتوحة في العيوب القلبية التي تعتمد عليها — كتبدّل الشرايين الكبيرة ورباعية فالو وتضيّق الأبهر — فيظلّ الدم يصل إلى الرئة أو إلى الجسم حتى موعد الجراحة. وهو دواء يجسر الوقت ولا يعالج العيب.',
    en: 'In men: it is used for erectile dysfunction when oral tablets fail or are not allowed, making it the accepted second-line option, particularly after prostate surgery, in diabetes, or after spinal cord injury. In newborns: it keeps the arterial duct open in heart defects that depend on it — such as transposition of the great arteries, tetralogy of Fallot and coarctation of the aorta — so blood keeps reaching the lungs or the body until surgery. It is a medicine that bridges time; it does not repair the defect.'
  },
  how: {
    ar: 'يرتبط الدواء بمستقبلات البروستاغلاندين على الخلية فينشّط إنزيماً يرفع مادّة تُسمّى AMP الحلقي داخلها، وهي التي تُرخي العضلة الملساء. في القضيب يتّسع الشريانان الكهفيان فيمتلئ النسيج الإسفنجي دماً وينضغط المخرج الوريدي فيثبت الانتصاب — ولذلك يعمل بلا حاجة إلى رغبة أو تنبيه، وهذي نقطة مهمّة يجهلها كثيرون. وفي المولود يُرخي جدار القناة الشريانية فيمنعها من الانغلاق الطبيعي الذي يحدث في أيامه الأولى.',
    en: 'The medicine binds prostaglandin receptors on the cell and activates an enzyme that raises a substance called cyclic AMP inside it, and that is what relaxes smooth muscle. In the penis the cavernosal arteries widen so the spongy tissue fills with blood and the venous outflow is compressed, holding the erection — which is why it works without any need for desire or stimulation, an important point many people do not know. In the newborn it relaxes the wall of the arterial duct and prevents the natural closure that happens in the first days of life.'
  },
  effects: {
    ar: 'في الاستعمال القضيبي: ألم أو حرقة في القضيب هو أشيع ما يُشتكى منه، وكدمة صغيرة أو نزّ دم في موضع الوخز، وحرقة في مجرى البول مع الحبيبة الإحليلية وأحياناً نزّ دم منها. وفي المولود على التسريب الوريدي: حرارة، وتورّد الجلد، وهبوط ضغط، وتسارع نبض، واضطراب أملاح، وأشهرها وأخطرها توقّف النفَس في الساعات الأولى، ولذلك لا يُبدأ التسريب إلا حيث يمكن دعم التنفّس فوراً.',
    en: 'With penile use: pain or burning in the penis is the commonest complaint, along with a small bruise or spot of bleeding at the puncture site, and burning in the urethra with the pellet, sometimes with slight bleeding from it. In a newborn on an intravenous infusion: fever, flushing of the skin, low blood pressure, a fast heart rate, disturbed salts, and most notoriously and most dangerously a pause in breathing during the first hours — which is why the infusion is started only where breathing can be supported immediately.'
  },
  warning: {
    ar: 'انتصاب يتجاوز أربع ساعات حالة طوارئ اسمها القُساح: كل ساعة تأخير تزيد أذى النسيج، فاذهب فوراً ولا تنتظر انفراجه من نفسه. وكذلك: انحناء جديد للقضيب أو عُقَد أو تليّف تُحسّ تحت الجلد — أوقف الدواء وراجع؛ ألم شديد مستمرّ، أو تورّم واحمرار وحرارة موضعية وهي علامة عدوى؛ إغماء أو تسارع نبض؛ انكسار إبرة داخل النسيج. وفي المولود: أي توقّف نفَس أو زرقة أو بطء نبض أثناء التسريب نداء فوري للفريق.',
    en: 'An erection lasting more than four hours is an emergency called priapism: every hour of delay adds to tissue damage, so go at once and do not wait for it to resolve on its own. Likewise: a new curvature of the penis, or nodules or hardening felt under the skin — stop the medicine and be seen; severe persistent pain, or swelling with redness and local heat, which signals infection; fainting or a racing pulse; a needle breaking inside the tissue. In a newborn: any pause in breathing, blueness or slow pulse during the infusion is an immediate call for the team.'
  },
  interact: {
    ar: 'مميّعات الدم ومضادّات الصفيحات تزيد النزف والكدمات في موضع الحقن. وأدوية ضعف الانتصاب الفموية وغيرها من محسّنات الانتصاب مع الحقنة ترفع خطر القُساح وهبوط الضغط، فلا تُجمع من تلقاء النفس أبداً. وموسّعات الأوعية وخافضات الضغط قد تُحدث دواراً وهبوطاً معه. ومقبّضات الأوعية ومزيلات احتقان الأنف كالسودوإفدرين تُضعف أثره. وفي المولود يُنتبه لكل ما يثبّط التنفّس معه فيتراكم الخطر.',
    en: 'Blood thinners and antiplatelet medicines increase bleeding and bruising at the injection site. Oral erectile-dysfunction medicines and other erection aids taken alongside the injection raise the risk of priapism and of low blood pressure, so they are never combined on personal initiative. Vasodilators and blood-pressure medicines can produce dizziness and a drop in pressure with it. Vasoconstrictors and nasal decongestants such as pseudoephedrine weaken its effect. In a newborn, anything else that depresses breathing is watched carefully, because the risk adds up.'
  },
  avoid: {
    ar: 'لا يُستعمل الشكل القضيبي عند من عنده استعداد للقُساح: فقر الدم المنجلي أو سمته، وابيضاض الدم، والورم النقوي المتعدّد، وكثرة الحمر، وكثرة الصفيحات. ولا عند من فيه دعامة قضيبية، ولا في مرض بيروني أو تشوّه تشريحي في القضيب. والحبيبة الإحليلية تُمنع مع التهاب الإحليل أو تضيّقه. وليس دواءً للنساء ولا للأطفال. ومع شريكة حامل يلزم واقٍ ذكري. وهو لا يقي من الأمراض المنقولة جنسياً ولا يزيد الرغبة.',
    en: 'The penile forms are not used in anyone predisposed to priapism: sickle cell disease or trait, leukaemia, multiple myeloma, polycythaemia, or a high platelet count. Nor in a man with a penile implant, nor in Peyronie disease or any anatomical deformity of the penis. The urethral pellet is barred with urethritis or a urethral stricture. It is not a medicine for women or children. With a pregnant partner a condom is required. And it protects against no sexually transmitted infection and does not increase desire.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a695022.html',
    'https://www.ncbi.nlm.nih.gov/books/NBK542217/'
  ]
};

RX_BODY['beractant'] = {
  what: {
    ar: 'البيراكتانت خافض توتّر سطحي رئوي مستخلص من رئة البقر، أُضيفت إليه دهون مقنّنة ليقارب تركيب ما تصنعه الرئة نفسها: فوسفوليبيدات ودهون متعادلة وأحماض دهنية حرّة وبروتينات سطحية. يأتي معلّقاً في قوارير لجرعة واحدة تُحفظ في الثلاجة، ويُقطَّر مباشرةً في أنبوب التنفّس داخل رغامى الطفل — لا يُحقن في وريد ولا يُبلع. وهو دواء عناية مركّزة وليدية خالص لا وجود له خارجها.',
    en: 'Beractant is a lung surfactant extracted from bovine lung, with measured lipids added so it approaches the composition of what the lung itself makes: phospholipids, neutral lipids, free fatty acids and surfactant-associated proteins. It comes as a suspension in single-dose vials kept refrigerated, and is instilled directly down the breathing tube into the windpipe of the baby — it is not injected into a vein and not swallowed. It is purely a neonatal intensive care medicine with no existence outside that setting.'
  },
  why: {
    ar: 'يُستعمل لوقاية الخديج المعرّض من متلازمة الضائقة التنفّسية ولعلاجها بعد وقوعها. والقصّة أن رئة الجنين لا تكتمل صناعة هذي المادّة فيها إلا في أواخر الحمل، فالمولود قبل أوانه تنطبق حويصلاته الهوائية مع كل زفير، فيصرف جهداً هائلاً في كل نفَس ثم يعجز. وإعطاء المادّة الناقصة يقلّل الوفاة ومضاعفات تسرّب الهواء، وهو من الأدوية التي غيّرت مصير الخداج تغييراً حقيقياً لا مبالغة فيه.',
    en: 'It is used both to prevent respiratory distress syndrome in premature babies at risk and to treat it once it has developed. The story is that the fetal lung does not finish making this substance until late in pregnancy, so in a baby born too early the air sacs collapse with every breath out, spending enormous effort on each breath until exhaustion sets in. Giving the missing substance reduces death and air-leak complications, and it is one of the medicines that genuinely changed the fate of premature infants, without exaggeration.'
  },
  how: {
    ar: 'داخل كل حويصلة هوائية سطحٌ رطب، وللماء توتّر سطحي يشدّ الحويصلة إلى الانطباق. والمادّة السطحية تفرش نفسها على هذا السطح فتكسر التوتّر، فتبقى الحويصلات مفتوحة بين النفَس والنفَس ويصير تمدّدها سهلاً. ولذلك يتحسّن الأكسجين ومطاوعة الرئة خلال دقائق من التقطير — وهذي السرعة نفسها هي سبب أهمّ تحذيراته: إعدادات جهاز التنفّس لا بدّ أن تُخفَّض فوراً وإلا انقلبت من عون إلى أذى.',
    en: 'Inside every air sac there is a moist surface, and water has a surface tension that pulls the sac towards collapse. The surfactant spreads itself across that surface and breaks the tension, so the air sacs stay open between one breath and the next and expand easily. That is why oxygenation and lung compliance improve within minutes of instillation — and that same speed is the reason for its most important warning: the ventilator settings must be lowered immediately, or they turn from help into harm.'
  },
  effects: {
    ar: 'أثناء التقطير نفسه قد يبطؤ النبض، وينزل تشبّع الأكسجين، ويرتدّ بعض السائل في الأنبوب أو يسدّه مؤقّتاً — ويتعامل الفريق مع هذا بإيقاف الإعطاء ودعم التهوية ثم استئنافه بعد الاستقرار. وبعده قد تُسمع أصوات رطبة في الصدر مدّة قصيرة. ولوحظ في التجارب المضبوطة أن العدوى المكتسبة في المستشفى كانت أكثر بين من أخذوه، من غير زيادة في الوفيات، وهذي ملاحظة تستوجب انتباه الفريق للتعقيم.',
    en: 'During the instillation itself the heart rate may slow, oxygen saturation may fall, and some of the liquid may reflux into the tube or block it briefly — the team handles this by stopping the dose, supporting ventilation, and resuming once things settle. Afterwards moist sounds may be heard in the chest for a short while. Controlled trials noted more hospital-acquired infection among the infants who received it, without any increase in deaths, an observation that keeps the team attentive to sterile technique.'
  },
  warning: {
    ar: 'العلامات التي تستدعي تحرّكاً فورياً، وهي كلها تحت أعين الفريق: هبوط النبض أو الأكسجين أثناء الإعطاء؛ تحسّن سريع في الأكسجين من غير خفض إعدادات الجهاز، فهذا طريق إلى تسرّب الهواء واسترواح الصدر؛ خروج دم من أنبوب التنفّس وهو نزف رئوي؛ انسداد الأنبوب وتوقّف دخول الهواء. وبعد الخروج من الحضّانة: حرارة أو خمول أو رفض الرضاعة أو تنفّس متسارع علامات عدوى تستوجب مراجعة عاجلة.',
    en: 'The signs that demand immediate action, all of them under the eyes of the team: a falling heart rate or oxygen level during administration; a rapid improvement in oxygenation without lowering the ventilator settings, which is a path to air leak and pneumothorax; blood coming up the breathing tube, which is pulmonary haemorrhage; blockage of the tube with air no longer entering. And after discharge from the unit: fever, lethargy, refusing feeds or fast breathing are signs of infection needing urgent review.'
  },
  interact: {
    ar: 'ليس له تفاعلات دوائية معروفة بالمعنى المعتاد، لأنه لا يدخل الدم ليزاحم دواءً آخر — أثره كلّه على سطح الحويصلات. لكن التفاعل الحقيقي هنا مع الجهاز لا مع الدواء: تتغيّر مطاوعة الرئة خلال دقائق فيلزم ضبط ضغط التهوية ونسبة الأكسجين فوراً. ويُنتبه كذلك إلى أن تحسّن الأكسجين قد يغيّر حاجة الطفل من أدوية الدعم الأخرى، فتُراجَع كلها بعد الإعطاء لا قبله.',
    en: 'It has no known drug interactions in the usual sense, because it does not enter the bloodstream to compete with another medicine — its whole effect is on the surface of the air sacs. But the real interaction here is with the machine rather than with a drug: lung compliance changes within minutes, so ventilation pressures and oxygen concentration must be adjusted at once. Note too that improved oxygenation may change the baby need for other supportive medicines, so all of them are reviewed after the dose rather than before.'
  },
  avoid: {
    ar: 'ليس دواءً يُعطى خارج وحدة العناية المركّزة الوليدية: لا يُستعمل إلا لطفل مُنبَّب موصول بجهاز تنفّس، وبيد فريق يتقن التنبيب وإدارة الجهاز ورعاية الخداج. ولا تذكر نشرته موانع مطلقة لاستعماله، لكن يُؤجَّل الإعطاء أو يُوقَف عند تدهور النبض أو الأكسجين حتى يستقرّ الطفل، ثم يُستأنف. وهو مادّة بقرية المصدر، وهذي معلومة يُخبَر بها الأهل لأن لها عندهم اعتباراً يخصّهم.',
    en: 'It is not a medicine given outside the neonatal intensive care unit: it is used only for an intubated baby connected to a ventilator, in the hands of a team skilled in intubation, ventilator management and the care of premature infants. Its label lists no absolute contraindications, but the dose is delayed or stopped when the heart rate or oxygen level deteriorates, until the baby settles, and then resumed. It is bovine in origin, and that is information the parents are told, because it carries a consideration of their own.'
  },
  updated: '2026-09-10',
  src: [
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7ef9e3a5-fc39-4ae1-0dad-6b47a1684635'
  ]
};

RX_BODY['poractant-alfa'] = {
  what: {
    ar: 'البوراكتانت ألفا خافض توتّر سطحي مستخلص من رئة الخنزير، يتكوّن في أغلبه من دهون قطبية مع بروتينات سطحية كارهة للماء، معلّقاً في محلول ملحي. يُحفظ في الثلاجة ويُدفّأ قبل الاستعمال، ويُعطى مباشرةً في أنبوب التنفّس داخل رغامى المولود. وهو نظير البيراكتانت في الغرض ويختلف عنه في المصدر وفي تركيز الدهون. ودواء عناية مركّزة وليدية لا يُستعمل خارجها ولا يُعطى للكبار بحال.',
    en: 'Poractant alfa is a lung surfactant extracted from porcine lung, made up mostly of polar lipids together with water-repelling surfactant proteins, suspended in saline. It is kept refrigerated and warmed before use, and is given directly down the breathing tube into the windpipe of the newborn. It is the counterpart of beractant in purpose and differs from it in source and in lipid concentration. It is a neonatal intensive care medicine, not used outside that setting and never given to adults.'
  },
  why: {
    ar: 'دواعيه المرخّصة هي العلاج الإنقاذي لمتلازمة الضائقة التنفّسية عند الخديج: أي إعطاؤه بعد أن تظهر المتلازمة لا وقايةً منها قبل ظهورها. وقد أثبتت التجارب أنه يُنقص الوفاة ويُنقص استرواح الصدر — أي تسرّب الهواء خارج الرئة، وهو من أخطر مضاعفات تهوية رئة غير ناضجة. والسبب المرضي واحد: نقص المادّة التي تمنع انطباق الحويصلات، والدواء يعوّض النقص مباشرةً في موضعه لا عبر الدم.',
    en: 'Its licensed indication is the rescue treatment of respiratory distress syndrome in premature infants: that is, giving it after the syndrome appears rather than to prevent it beforehand. Trials showed it reduces mortality and reduces pneumothorax — air leaking outside the lung, one of the gravest complications of ventilating an immature lung. The underlying problem is a single one: a shortage of the substance that keeps the air sacs from collapsing, and the medicine replaces that shortage directly at its site rather than through the blood.'
  },
  how: {
    ar: 'يُفرَش الدواء على السطح الداخلي للحويصلات الهوائية فيخفض التوتّر السطحي عند حدّ الهواء والسائل، فتمتنع الحويصلات عن الانطباق مع الزفير ويقلّ الجهد اللازم لفتحها في الشهيق. ويتحسّن تبادل الأكسجين وثاني أكسيد الكربون بسرعة. وهو يعمل حيث يُوضَع، ولم تُدرَس له حركة دوائية في الإنسان — لا امتصاص ولا توزيع ولا طرح يُقاس، فالعضو المستهدف هو نفسه موضع الإعطاء وهذا ما يجعله دواءً موضعياً بامتياز.',
    en: 'The medicine spreads across the inner surface of the air sacs and lowers surface tension at the air-liquid interface, so the sacs no longer collapse on breathing out and less effort is needed to open them on breathing in. Oxygen and carbon dioxide exchange improves quickly. It works where it is placed, and no human pharmacokinetics have been characterised for it — no measured absorption, distribution or elimination — because the target organ is the very site of administration, which makes it a local medicine in the fullest sense.'
  },
  effects: {
    ar: 'أشيع ما يُسجَّل يقع لحظة الإعطاء نفسها: بطء النبض، وهبوط الضغط، ونزول تشبّع الأكسجين، وانسداد أنبوب التنفّس مؤقّتاً. ويُدار هذا بإيقاف الإعطاء ودعم الطفل ثم متابعته بعد الاستقرار. وسُجّل نزف رئوي في التجارب وبعد التسويق، وهو مضاعفة معروفة للخداج ولشدّة نقص الوزن أصلاً لا للدواء وحده. وأغلب ما يحدث عابر ويزول بضبط التهوية من غير أثر باقٍ.',
    en: 'The commonest events happen at the moment of administration itself: a slow heart rate, a drop in blood pressure, falling oxygen saturation, and temporary blockage of the breathing tube. This is managed by stopping the dose, supporting the baby, and continuing once things are stable. Pulmonary haemorrhage has been recorded in trials and after marketing, and it is a known complication of prematurity and very low birth weight in itself, not of the medicine alone. Most of what happens is transient and resolves with ventilation adjustment, leaving nothing behind.'
  },
  warning: {
    ar: 'ما يستوجب تدخّلاً فورياً: بطء نبض أو هبوط أكسجين أو هبوط ضغط أثناء التقطير — يُوقَف الإعطاء ويُدعَم الطفل قبل المتابعة؛ خروج دم من أنبوب التنفّس؛ انسداد الأنبوب؛ تحسّن أكسجين سريع بلا خفض فوري لإعدادات الجهاز، فهذا يفتح باب استرواح الصدر وفرط الأكسجة. وبعد الحضّانة: تنفّس متسارع أو انسحاب بين الأضلاع أو زرقة أو خمول أو حرارة تعني مراجعة عاجلة لا تأجيل فيها.',
    en: 'What demands immediate intervention: a slow heart rate, falling oxygen, or a drop in blood pressure during instillation — the dose is stopped and the baby supported before continuing; blood coming up the breathing tube; blockage of the tube; a rapid improvement in oxygenation without an immediate reduction in ventilator settings, which opens the door to pneumothorax and over-oxygenation. And after the unit: fast breathing, drawing in between the ribs, blueness, lethargy or fever mean an urgent review with no postponing.'
  },
  interact: {
    ar: 'لا يُعرف له تفاعل دوائي بالمعنى الدارج لأنه لا يُمتصّ إلى الدم ليزاحم غيره. لكن أثره يغيّر ميكانيكا الرئة خلال دقائق، فيلزم إعادة ضبط ضغط التهوية ونسبة الأكسجين مباشرةً بعده وإلا انقلب النفع ضرراً. ويُراعى تنسيق إعطائه مع أي دواء آخر يُقطَّر في الأنبوب حتى لا يُغسل أحدهما بالآخر، ويُؤجَّل الشفط من الأنبوب بعده مدّةً يحدّدها الفريق حتى ينتشر الدواء.',
    en: 'It has no drug interaction in the ordinary sense, because it is not absorbed into the blood to compete with anything. But its effect changes lung mechanics within minutes, so ventilation pressures and oxygen concentration must be reset immediately afterwards or the benefit turns into harm. Its timing is coordinated with any other medicine instilled down the tube so that one does not wash the other away, and suctioning of the tube is delayed afterwards for a period the team decides, to let the medicine spread.'
  },
  avoid: {
    ar: 'لا يُعطى إلا لمولود مُنبَّب في وحدة عناية مركّزة وليدية، وبإشراف من يتقن التنبيب وإدارة جهاز التنفّس ورعاية الخداج. ولا تذكر نشرته موانع مطلقة، لكن يُوقَف الإعطاء أو يُؤجَّل حين يتدهور النبض أو الضغط أو الأكسجين حتى يستقرّ الطفل. وهو مستخلص من الخنزير، وهذي معلومة يُخبَر بها الأهل؛ والبديل المتوفّر عملياً في وحدات الوِلدان مستخلص من رئة البقر، والقرار بينهما للفريق بحسب الحالة.',
    en: 'It is given only to an intubated newborn in a neonatal intensive care unit, under the supervision of people skilled in intubation, ventilator management and the care of premature infants. Its label lists no absolute contraindications, but the dose is stopped or delayed when heart rate, blood pressure or oxygenation deteriorates, until the baby is stable. It is porcine in origin, and that is information the parents are told; the alternative available in practice in neonatal units is extracted from bovine lung, and the choice between them rests with the team according to the case.'
  },
  updated: '2026-09-10',
  src: [
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=99bef307-00bd-4379-9f45-ede1380e74d4'
  ]
};

RX_BODY['caffeine-citrate'] = {
  what: {
    ar: 'سيترات الكافيين هي الكافيين نفسه في صورة ملح قابل للذوبان، تُعطى للخديج شراباً في الفم أو تسريباً في الوريد. تنتمي إلى الميثيل زانثينات، وهي فصيلة منبّهات الجهاز العصبي المركزي التي تُرخي كذلك عضلة الشعب الهوائية. وهي من أكثر أدوية وحدات الوِلدان استعمالاً في العالم. وتنبيه مهمّ: سيترات الكافيين ليست الكافيين القاعدي، والخلط بينهما من أشهر أخطاء الدواء في الوِلدان لأن المقدار المكافئ يختلف.',
    en: 'Caffeine citrate is caffeine itself in a soluble salt form, given to premature babies as an oral liquid or as an intravenous infusion. It belongs to the methylxanthines, the family of central nervous system stimulants that also relax the muscle of the airways. It is among the most widely used medicines in neonatal units worldwide. One important caution: caffeine citrate is not caffeine base, and confusing the two is one of the best-known medication errors in newborn care, because the equivalent amount differs.'
  },
  why: {
    ar: 'دواعيها المرخّصة: علاج انقطاع النفَس عند الخديج — تلك النوبات التي يتوقّف فيها تنفّس الطفل ثوانيَ ثم يبطؤ نبضه ويزرقّ لونه، وسببها مركز تنفّس لم ينضج بعد. وتُستعمل كذلك لتسهيل الفطام عن جهاز التنفّس وتقليل الحاجة إلى إعادة التنبيب. وقد تابعت دراسة كبيرة الأطفال الذين أخذوها فلم تزد عندهم إصابات الدماغ ولا التهاب الأمعاء الناخر مقارنةً بمن لم يأخذها، وهذي طمأنة مبنيّة على أرقام لا على انطباع.',
    en: 'Its licensed indication is the treatment of apnoea of prematurity — those spells in which the baby breathing stops for seconds, then the heart rate slows and the colour turns blue, caused by a respiratory centre that has not matured. It is also used to ease weaning off the ventilator and to reduce the need for reintubation. A large study followed the infants who received it and found no increase in brain injury or in necrotising enterocolitis compared with those who did not, a reassurance built on figures rather than on impression.'
  },
  how: {
    ar: 'في الدماغ مادّة اسمها الأدينوزين تهدّئ النشاط العصبي وتثبّط التنفّس، والكافيين يشبهها في شكله فيحتلّ مقاعدها ويمنعها من العمل. فينتبه مركز التنفّس في جذع الدماغ ويصير أشدّ استجابةً لارتفاع ثاني أكسيد الكربون، وتقوى انقباضة الحجاب الحاجز، وتتّسع الشعب الهوائية قليلاً. والنتيجة نفَس أكثر انتظاماً ونوبات انقطاع أقلّ. وكبد الخديج يستقلبه ببطء شديد، ولهذا يبقى أثره في جسمه مدّة أطول بكثير مما يبقى في الكبير.',
    en: 'In the brain there is a substance called adenosine that quietens nerve activity and dampens breathing, and caffeine resembles it in shape, so it occupies its seats and stops it working. The respiratory centre in the brainstem then rouses and becomes more responsive to a rise in carbon dioxide, the diaphragm contracts more strongly, and the airways widen slightly. The result is more regular breathing and fewer pauses. The premature liver metabolises it very slowly, which is why it lingers in that body far longer than in an adult.'
  },
  effects: {
    ar: 'تسارع النبض، وعصبية ورجفة خفيفة وقلّة نوم، وزيادة إدرار البول، وعدم تحمّل الرضعة أو ارتجاعها، وأحياناً طفح جلدي. وقد يزيد وزن الطفل أبطأ قليلاً في البداية لزيادة صرف الطاقة. وأغلب هذي الأعراض خفيف ويُدار بضبط المقدار بحسب مستوى الدواء في الدم عند الحاجة. والفريق يوازن دائماً بين هذي الأعراض وبين خطر نوبات انقطاع النفَس نفسها — وهو خطر أكبر بكثير على دماغ الطفل.',
    en: 'A faster heart rate, irritability, fine tremor and reduced sleep, increased urine output, poor tolerance of feeds or reflux, and occasionally a rash. Weight gain may be a little slower at first because energy expenditure rises. Most of this is mild and is managed by adjusting the amount against the level of the medicine in the blood when needed. The team always weighs these effects against the danger of the apnoeic spells themselves — a far greater danger to the baby brain.'
  },
  warning: {
    ar: 'انتبهي وأبلغي فوراً عند: انتفاخ البطن أو لمعانه أو تغيّر لونه، أو دم في البراز، أو قيء مصفرّ أخضر، أو رفض الرضعة مع خمول — فهذي علامات التهاب الأمعاء الناخر، والنشرة تنصّ على مراقبة الطفل لأجله. وكذلك: تشنّج أو رجفة شديدة؛ نبض شديد التسارع أو غير منتظم؛ قيء متكرّر مع تهيّج شديد وأرق مستمرّ، وهي علامات زيادة الدواء. وأي عودة لنوبات توقّف النفَس بعد استقرارها.',
    en: 'Watch for and report at once: a distended, shiny or discoloured abdomen, blood in the stool, greenish-yellow vomiting, or refusal of feeds with lethargy — these are signs of necrotising enterocolitis, and the label states that the baby should be monitored for it. Likewise: a seizure or marked tremor; a very fast or irregular pulse; repeated vomiting with pronounced irritability and persistent sleeplessness, which are signs of too much medicine. And any return of apnoeic spells after they had settled.'
  },
  interact: {
    ar: 'لا يُجمع مع الثيوفيلّين أو الأمينوفيلّين لأنهما من الفصيلة نفسها فيتراكم الأثر ويصير سمّياً. ويستقلبه إنزيم CYP1A2، فما يثبّط هذا الإنزيم يرفع مستواه وما يحرّضه يخفضه. ويُنتبه إن كانت الأم قد تناولت قبل الولادة كمّيات كبيرة من الكافيين. ومع الأدوية التي تسرّع النبض أو تُنقص البوتاسيوم أو ترفع السكّر يُراقَب الأثر المتراكم. وفي قصور الكبد أو الكلى يتباطأ خروجه فيلزم قياس مستواه في الدم.',
    en: 'It is not combined with theophylline or aminophylline, since they belong to the same family and the effect accumulates to a toxic level. It is metabolised by the CYP1A2 enzyme, so whatever inhibits that enzyme raises its level and whatever induces it lowers it. Note is taken if the mother consumed large amounts of caffeine before delivery. Alongside medicines that speed the heart, lower potassium or raise blood sugar, the combined effect is monitored. In liver or kidney impairment its elimination slows, so its blood level must be measured.'
  },
  avoid: {
    ar: 'يُتوخّى الحذر الشديد في أمراض القلب والأوعية عند الطفل لأنه يرفع النبض والنتاج القلبي، وفي من عنده نوبات تشنّج، وفي قصور الكبد أو الكلى حيث يبقى في الجسم أطول فيلزم قياس مستواه. ويُمنع الجمع مع الثيوفيلّين. ولا يُعطى إلا في وحدة تراقب النبض والتنفّس مراقبة متّصلة. وأهمّ ما يُحترز منه هنا ليس مرضاً بل خطأً: الخلط بين سيترات الكافيين والكافيين القاعدي، فذاك يضاعف ما يدخل جسم الطفل.',
    en: 'Great caution applies in a baby with cardiovascular disease, since it raises heart rate and cardiac output; in a baby with seizures; and in liver or kidney impairment, where it stays in the body longer so its level must be measured. Combining it with theophylline is barred. It is given only in a unit with continuous heart and breathing monitoring. And the greatest thing to guard against here is not a disease but an error: confusing caffeine citrate with caffeine base, which doubles what enters the baby.'
  },
  updated: '2026-09-10',
  src: [
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=21489401-f2a7-47d3-897a-4b7efa04dd7a',
    'https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f9feb925-e1b8-41bc-b9c5-89198f07c0e9'
  ]
};

RX_BODY['albendazole'] = {
  what: {
    ar: 'الألبيندازول قرص يُمضغ من فصيلة البنزيميدازولات، وهي طاردات ديدان واسعة الطيف. يمتصّه الجسم امتصاصاً ضعيفاً حين يُؤخذ على معدة فارغة — وهذي ميزة في ديدان الأمعاء لأنه يبقى حيث الدود — بينما تزيد الوجبة الدسمة امتصاصه كثيراً حين يُراد وصوله إلى أكياس في الكبد أو الدماغ. وهو من الأدوية الأساسية عند منظمة الصحة العالمية، ويُوزَّع في حملات تطهير جماعية على ملايين الأطفال.',
    en: 'Albendazole is a chewable tablet from the benzimidazole family, broad-spectrum worm expellers. The body absorbs it poorly when taken on an empty stomach — an advantage against intestinal worms, since it stays where the worms are — while a fatty meal greatly increases its absorption when it needs to reach cysts in the liver or brain. It is a World Health Organization essential medicine, distributed in mass deworming campaigns to millions of children.'
  },
  why: {
    ar: 'يُستعمل لديدان الأمعاء الشائعة: الأسكارس، والدودة السوطية، والدودة الشصّية، والدودة الدبّوسية، والإسطوانية. وحملات التطهير الدوري تعطيه لمن يسكن مناطق موبوءة بلا فحص فردي، لأن تقليل حمل الدود يقي من فقر الدم وسوء التغذية عند الأطفال. وله استعمال مختلف تماماً في دورات طويلة بإشراف: داء الكيسات المذنّبة العصبي، أي أكياس دودة الخنزير الشريطية في الدماغ، وداء الكيسات العدارية في الكبد والرئة.',
    en: 'It is used for the common intestinal worms: roundworm, whipworm, hookworm, threadworm and strongyloides. Periodic deworming campaigns give it to people living in endemic areas without individual diagnosis, because reducing the worm burden protects children from anaemia and malnutrition. It has an entirely different use in long supervised courses: neurocysticercosis, the cysts of the pork tapeworm in the brain, and cystic hydatid disease in the liver and lungs.'
  },
  how: {
    ar: 'يرتبط الدواء ببروتين اسمه التيوبيولين داخل خلايا الدودة، وهو الهيكل الذي تُبنى عليه القنوات الناقلة داخل الخلية. فينهار هذا الهيكل وتعجز الدودة عن امتصاص الغلوكوز، فتنفد مخازن طاقتها وتشلّ حركتها وتموت، ثم تخرج مع البراز. وخلايا الإنسان لها تيوبيولين أيضاً، لكن الدواء يرتبط بتيوبيولين الدودة ارتباطاً أقوى بكثير، وهذا الفرق في الانتقاء هو مصدر أمانه النسبي في الجرعة القصيرة.',
    en: 'The medicine binds a protein called tubulin inside the worm cells, the scaffold on which the transport channels of the cell are built. That scaffold collapses, the worm can no longer take up glucose, its energy stores run down, it becomes paralysed and dies, and it is then passed in the stool. Human cells have tubulin too, but the medicine binds worm tubulin far more strongly, and that difference in selectivity is the source of its relative safety in a short course.'
  },
  effects: {
    ar: 'الجرعة القصيرة لديدان الأمعاء تكاد تمرّ بلا شيء: ربما ألم بطن خفيف أو غثيان أو صداع أو دوخة. وقد ترى الدودة نفسها في البراز، وهذا متوقّع لا يستدعي قلقاً. أما الدورات الطويلة فأعراضها أوضح: تساقط شعر عكوس يعود بعد التوقّف، وارتفاع إنزيمات الكبد، وقيء، وحمّى. ولذلك تُطلب صورة دم ووظائف كبد قبل الدورات الطويلة وأثناءها، ولا تُطلب عادةً للجرعة القصيرة.',
    en: 'A short course for intestinal worms passes almost unnoticed: perhaps mild abdominal pain, nausea, headache or dizziness. The worm itself may be seen in the stool, which is expected and no cause for alarm. Long courses show more: reversible hair loss that returns after stopping, raised liver enzymes, vomiting and fever. That is why a blood count and liver tests are requested before and during long courses, and are not usually needed for a short one.'
  },
  warning: {
    ar: 'أوقف الدواء وراجع بلا تأخير عند: حرارة مع التهاب حلق أو تقرّحات فم أو كدمات ونزف غير مفسَّر أو إرهاق شديد، فهذي علامات هبوط نخاع العظم؛ اصفرار العين أو البول الداكن أو ألم أعلى البطن من اليمين، وهذي علامات الكبد؛ طفح واسع أو تقشّر أو تورّم الوجه واللسان وضيق النفَس. وفي علاج أكياس الدماغ خاصّةً: تشنّج جديد أو صداع شديد متزايد أو قيء أو تغيّر في الرؤية أو الوعي — طوارئ، لأن موت الأكياس يُشعل التهاباً حول المخّ.',
    en: 'Stop the medicine and be seen without delay for: fever with a sore throat, mouth ulcers, unexplained bruising or bleeding, or extreme fatigue — signs of bone marrow suppression; yellowing of the eyes, dark urine or pain in the upper right abdomen — signs involving the liver; a widespread rash, peeling skin, or swelling of the face and tongue with breathlessness. And in treatment of brain cysts particularly: a new seizure, a severe worsening headache, vomiting, or a change in vision or awareness — an emergency, because dying cysts ignite inflammation around the brain.'
  },
  interact: {
    ar: 'الديكساميثازون والبرازيكوانتيل والسيميتيدين ترفع تركيزه في الدم، وهذا مقصود أحياناً في علاج الأكياس ويُحسب في غيره. وأدوية الصرع المحرّضة للإنزيمات — الكاربامازيبين والفينيتوين والفينوباربيتال — تخفض تركيزه فقد يفشل العلاج الطويل. والوجبة الدسمة ترفع امتصاصه ارتفاعاً كبيراً، وعصير الجريب فروت يزيده كذلك. ويُخبَر الطبيب بكل ما يُؤخذ من أدوية وأعشاب قبل بدء أي دورة طويلة.',
    en: 'Dexamethasone, praziquantel and cimetidine raise its level in the blood — sometimes intentionally in cyst treatment, and taken into account elsewhere. Enzyme-inducing epilepsy medicines — carbamazepine, phenytoin and phenobarbital — lower its level, so a long course may fail. A fatty meal raises its absorption substantially, and grapefruit juice raises it as well. The doctor is told about every medicine and herbal product being taken before any long course begins.'
  },
  avoid: {
    ar: 'يُمنع في الحمل، خاصّةً في الثلث الأول؛ والمرأة القادرة على الحمل تبدأ بعد اختبار حمل سالب وتتجنّب الحمل أثناء العلاج وأياماً بعده. ولا يُنصح به في الرضاعة. ويُمنع عند الحساسية للبنزيميدازولات. ويُتوخّى الحذر في مرض الكبد وفي أي اضطراب في خلايا الدم، فتُراقَب صورة الدم ووظائف الكبد في الدورات الطويلة. أما في حملات التطهير الجماعي فتوصي منظمة الصحة العالمية بعلاج الحوامل في الثلثين الثاني والثالث ضمن برامجها.',
    en: 'It is barred in pregnancy, particularly the first trimester; a woman able to conceive begins after a negative pregnancy test and avoids pregnancy during treatment and for some days after. It is not advised in breastfeeding. It is barred in anyone sensitive to benzimidazoles. Caution applies in liver disease and in any disorder of the blood cells, so blood counts and liver tests are monitored during long courses. In mass deworming programmes, by contrast, the World Health Organization recommends treating pregnant women in the second and third trimesters.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a610019.html',
    'https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections'
  ]
};

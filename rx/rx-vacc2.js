/* ============================================================
   موسوعة الأدوية — أجسام بطاقات دفعة vacc2 (اللقاحات)
   rx/rx-vacc2.js   (يُحمَّل عند فتح البطاقة)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. جدول التطعيم وجرعاته يحدّدهما
   الطبيب أو برنامج التطعيم الوطني — لا أرقام جرعات هنا بقرار مقصود.
   كل بطاقة كُتبت من نشرات رسمية مفتوحة وقت الكتابة (١١ سبتمبر ٢٠٢٦).
   ============================================================ */

var RX_BODY = window.RX_BODY || {};

RX_BODY['influenza-vaccine-seasonal'] = {
  what: {
    ar: 'لقاح الإنفلونزا الموسمية لقاح وقائي لا علاج، يُصنع من جديد كل موسم ليطابق سلالات الفيروس المتوقّع انتشارها في ذلك الموسم. أشهر أشكاله الحقنة، وهي مصنوعة من فيروس مقتول أو من بروتين مصنّع، فلا تحتوي فيروساً قادراً على التكاثر. وله شكل آخر هو بخّاخ الأنف، ويحتوي فيروساً حياً مُضعَفاً، ولا يُعطى إلا لأعمار وحالات محدّدة. ويُعطى اللقاح في مكان مجهّز للتعامل مع الحساسية كما هي القاعدة في كل اللقاحات.',
    en: 'The seasonal influenza vaccine is a preventive vaccine, not a treatment, made afresh each season to match the virus strains expected to circulate that season. Its best-known form is the injection, made from killed virus or from a manufactured protein, so it contains no virus able to multiply. Another form is the nasal spray, which contains a live weakened virus and is given only to certain ages and conditions. The vaccine is given in a place equipped to deal with allergic reactions, as is the rule for all vaccines.'
  },
  why: {
    ar: 'يُعطى للوقاية من الإنفلونزا ومضاعفاتها، وتوصي به مراكز مكافحة الأمراض الأمريكية لكل من تجاوز الأشهر الستة الأولى من عمره في كل موسم. وتقدّمه الأنظمة الصحية بأولوية لمن هم أكثر عرضة للمضاعفات: كبار السن، والحوامل، وأصحاب الأمراض المزمنة، ونزلاء دور الرعاية ومن يرعاهم، والعاملين في الصحة. ويُعاد كل موسم لأن سلالات الفيروس تتبدّل فيُحدَّث اللقاح ليوافقها، ولأن الحماية تضعف مع الوقت. وحتى حين لا يطابق اللقاح السلالة المنتشرة تماماً تبقى منه حماية جزئية في العادة.',
    en: 'It is given to prevent influenza and its complications, and the US Centers for Disease Control recommend it every season for everyone past the first six months of life. Health systems offer it first to those most at risk of complications: older people, pregnant women, people with long-term illnesses, care-home residents and their carers, and health workers. It is repeated each season because the virus strains change and the vaccine is updated to match them, and because protection fades with time. Even when the vaccine does not match the circulating strain exactly, some protection usually remains.'
  },
  how: {
    ar: 'يعرض اللقاح على جهاز المناعة أجزاء من فيروس الإنفلونزا لا تستطيع إحداث المرض، فيتعلّم الجسم التعرّف عليها ويصنع أجساماً مضادّة جاهزة. فإذا دخل الفيروس الحقيقي بعد ذلك وجد دفاعاً مستعدّاً، فيُمنع المرض أو يأتي أخفّ. وتحتاج الحماية إلى نحو أسبوعين بعد التطعيم حتى تتكوّن، فمن يلتقط العدوى في تلك الأيام قد يمرض رغم اللقاح. واللقاح لا يمنع كل إصابة، لكن المرض عند الملقَّح يميل إلى أن يكون أخفّ من غيره.',
    en: 'The vaccine shows the immune system parts of the influenza virus that cannot cause disease, so the body learns to recognise them and makes ready antibodies. If the real virus enters later it meets a prepared defence, and the illness is prevented or comes milder. Protection takes about two weeks after vaccination to develop, so someone who catches the infection in those days may fall ill despite the vaccine. The vaccine does not prevent every infection, but illness in a vaccinated person tends to be milder.'
  },
  effects: {
    ar: 'أغلب آثاره خفيفة وقصيرة: ألم أو احمرار أو تورّم مكان الحقنة، وارتفاع طفيف في الحرارة، وألم في العضلات، وصداع، وتزول عادة خلال يوم أو يومين. أما بخّاخ الأنف فأشهر آثاره سيلان الأنف أو احتقانه والصداع والصفير، وقد يظهر التهاب في الحلق أو سعال أو قيء. وتذكر النشرة الأمريكية احتمالاً ضئيلاً جداً لزيادة خطر متلازمة غيلان باريه بعد الحقنة. وعند الأطفال الصغار يرتفع قليلاً خطر التشنّج الحراري إن أُعطي اللقاح في اليوم نفسه مع لقاح المكوّرات الرئوية أو اللقاح الثلاثي البكتيري.',
    en: 'Most of its effects are mild and brief: pain, redness or swelling where the injection was given, a slight rise in temperature, muscle aches and headache, usually gone within a day or two. The nasal spray most often causes a runny or blocked nose, headache and wheezing, and may bring a sore throat, cough or vomiting. The US leaflet mentions a very small possible increase in the risk of Guillain-Barré syndrome after the injection. In young children the risk of a febrile seizure rises slightly if the vaccine is given on the same day as the pneumococcal vaccine or the DTaP vaccine.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهرت بعد التطعيم علامات حساسية شديدة: شرى منتشر، أو تورّم في الوجه أو الحلق، أو صعوبة في التنفّس، أو خفقان سريع، أو دوخة، أو ضعف مفاجئ. وإن أصاب طفلاً تشنّج مع الحرارة بعد التطعيم فاعرضه على الطوارئ في الحال. وإن ظهر في الأسابيع التالية ضعف غير معتاد في العضلات أو خدر يزداد فراجع الطبيب سريعاً واذكر أنك أخذت اللقاح، لأن متلازمة غيلان باريه من الآثار النادرة المذكورة في نشرته. ومن أصيب بهذه المتلازمة بعد لقاح إنفلونزا سابق يناقش طبيبه قبل أي لقاح جديد.',
    en: 'Call an ambulance at once if signs of a severe allergic reaction appear after vaccination: widespread hives, swelling of the face or throat, difficulty breathing, a fast heartbeat, dizziness or sudden weakness. If a child has a seizure with fever after vaccination, take them to emergency straight away. If unusual muscle weakness or spreading numbness appears in the following weeks, see a doctor promptly and mention the vaccine, because Guillain-Barré syndrome is among the rare effects listed in its leaflet. Anyone who developed this syndrome after a previous flu vaccine should talk to their doctor before any new one.'
  },
  interact: {
    ar: 'أغلب التعارضات تخصّ بخّاخ الأنف الحيّ: لا يُعطى لطفل أو مراهق يأخذ الأسبرين أو مركّبات الساليسيلات، ولا لمن أخذ أحد أدوية الإنفلونزا المضادّة للفيروسات في الأسابيع القليلة السابقة، ولا لمن يرعى شخصاً شديد ضعف المناعة يعيش في بيئة معزولة محمية. أما الحقنة فتعارضاتها قليلة، وأبرز ما يُذكر أن إعطاءها للطفل الصغير في اليوم نفسه مع لقاح المكوّرات الرئوية أو اللقاح الثلاثي البكتيري يرفع قليلاً خطر التشنّج الحراري، فأخبر الممرّض بكل لقاح أو دواء أخذه الطفل مؤخّراً.',
    en: 'Most interactions concern the live nasal spray: it is not given to a child or teenager taking aspirin or salicylate products, nor to someone who took one of the antiviral flu medicines in the preceding few weeks, nor to a carer of a severely immunocompromised person living in a protected isolated environment. The injection has few interactions; the main one noted is that giving it to a young child on the same day as the pneumococcal vaccine or the DTaP vaccine slightly raises the risk of a febrile seizure, so tell the nurse about every vaccine or medicine the child has had recently.'
  },
  avoid: {
    ar: 'لا يأخذه من أصابته حساسية شديدة من جرعة سابقة من لقاح الإنفلونزا أو من أحد مكوّناته، ومن أصيب سابقاً بمتلازمة غيلان باريه يناقش الأمر مع طبيبه قبل التطعيم. وحساسية البيض لم تعد مانعاً: توصي الجهات الأمريكية بأن يأخذ صاحبها أي لقاح إنفلونزا يناسب عمره وصحته دون احتياطات إضافية، مع إخبار الممرّض بها. والحقنة آمنة في أي مرحلة من الحمل ويُنصح بها للحوامل. أما بخّاخ الأنف الحيّ فلا يُعطى للحامل، ولا لضعيف المناعة، ولا لمن لا يعمل طحاله، ولا لمريض الربو، ولا لمن زُرعت له قوقعة في الأذن.',
    en: 'It is not given to anyone who had a severe allergic reaction to a previous flu vaccine or to one of its ingredients, and anyone who has had Guillain-Barré syndrome should discuss it with their doctor before vaccination. Egg allergy is no longer a barrier: US authorities advise that people with it receive any flu vaccine suited to their age and health without extra precautions, while telling the nurse about it. The injection is safe at any stage of pregnancy and is recommended for pregnant women. The live nasal spray, however, is not given in pregnancy, to people with weak immunity, to those without a working spleen, to people with asthma, or to anyone with a cochlear implant.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/influenza-inactivated.html',
    'https://www.cdc.gov/vaccines/hcp/current-vis/influenza-live-intranasal.html',
    'https://www.cdc.gov/flu/vaccines/egg-allergies.html',
    'https://www.nhs.uk/vaccinations/flu-vaccine/'
  ]
};

RX_BODY['japanese-encephalitis-vaccine'] = {
  what: {
    ar: 'لقاح التهاب الدماغ الياباني لقاح وقائي من مرض فيروسي يصيب الدماغ، ينتقل بلدغة البعوض في آسيا وغرب المحيط الهادئ، وأغلبه في المناطق الريفية، ولا ينتقل من إنسان إلى إنسان. وهو في الأساس لقاح للمسافرين إلى تلك المناطق وللمقيمين فيها. توجد منه ثلاثة أنواع: لقاح مُعطَّل من فيروس مقتول يُزرع في خلايا مخبرية، ولقاح حيّ مُضعَف، ولقاح حيّ مهجّن، وقد اعتمدت منظمة الصحة العالمية بعضها. ويُعطى حقناً، ويُخطَّط له مع طبيب السفر قبل الرحلة.',
    en: 'The Japanese encephalitis vaccine protects against a viral disease of the brain spread by mosquito bites in Asia and the Western Pacific, mostly in rural areas, and not passed from person to person. It is mainly a vaccine for travellers to those areas and for people living there. There are three kinds: an inactivated vaccine of killed virus grown in laboratory cells, a live weakened vaccine, and a live hybrid vaccine, some of which the World Health Organization has approved. It is given by injection and planned with a travel doctor before the trip.'
  },
  why: {
    ar: 'أغلب المصابين بالفيروس لا تظهر عليهم أعراض، لكن القلّة التي يصل الفيروس إلى أدمغتها تواجه مرضاً شديداً: حرارة وصداعاً ثم تشنّجات وغيبوبة. ويموت نحو واحد من كل أربعة ممّن يصابون بالتهاب الدماغ، ويبقى ما يصل إلى نصف الناجين بإعاقة دائمة، ولا يوجد دواء مضاد للفيروس يعالجه. لذلك يُنصح باللقاح لمن سيقيم في المناطق الموبوءة، ولمن سيقضي فيها شهراً أو أكثر، ولمن يكرّر السفر إليها، ولمن يزور أريافها الكثيفة البعوض ولو لمدة قصيرة، وللعاملين في المختبرات مع هذا الفيروس.',
    en: 'Most people infected with the virus have no symptoms, but the few in whom it reaches the brain face severe illness: fever and headache, then seizures and coma. About one in four people who develop encephalitis die, and up to half of survivors are left with permanent disability, and there is no antiviral medicine to treat it. The vaccine is therefore advised for people who will live in affected areas, those spending a month or more there, frequent travellers to them, those visiting mosquito-dense countryside even briefly, and laboratory workers who handle this virus.'
  },
  how: {
    ar: 'يحتوي اللقاح على فيروس مقتول أو مُضعَف لا يُحدث المرض، فيدرّب جهاز المناعة على صنع أجسام مضادّة تتعرّف على الفيروس الحقيقي وتوقفه قبل أن يبلغ الدماغ. وتقول نشرة اللقاح الأوروبية إن الحماية لا تُضمن قبل إكمال جدوله، ولهذا يجب أن يكتمل قبل التعرّض المحتمل بوقت. والفيروس في الطبيعة يدور بين البعوض والخنازير والطيور المائية، والإنسان ضحية عارضة لا ينقله لغيره، فتطعيمك يحميك أنت. واللقاح لا يحمي من التهاب الدماغ الذي تسبّبه جراثيم أخرى.',
    en: 'The vaccine contains killed or weakened virus that cannot cause disease, training the immune system to make antibodies that recognise the real virus and stop it before it reaches the brain. The European leaflet states that protection is not assured until the schedule is complete, so it must be finished some time before possible exposure. In nature the virus circulates between mosquitoes, pigs and water birds, and humans are chance victims who do not pass it on, so your vaccination protects you. The vaccine does not protect against encephalitis caused by other germs.'
  },
  effects: {
    ar: 'آثاره في الغالب خفيفة: ألم أو إيلام أو احمرار أو تورّم مكان الحقنة، وصداع، وآلام في العضلات، وتعب، وقد يظهر غثيان. وعند الأطفال تكثر الحرارة والإسهال والتهيّج وأعراض تشبه الإنفلونزا. وتذكر النشرة الأوروبية آثاراً أقلّ شيوعاً مثل تضخّم العقد اللمفاوية والدوخة والطفح والحكّة. أما ردود الفعل الشديدة فنادرة جداً بحسب نشرة مراكز مكافحة الأمراض الأمريكية. وهذه الآثار في العادة علامة على استجابة المناعة وتمرّ من نفسها.',
    en: 'Its effects are mostly mild: pain, tenderness, redness or swelling where the injection was given, headache, muscle aches, tiredness, and sometimes nausea. In children fever, diarrhoea, irritability and flu-like symptoms are more common. The European leaflet lists less common effects such as swollen lymph glands, dizziness, rash and itching. Severe reactions are very rare according to the US Centers for Disease Control leaflet. These effects are usually a sign of the immune response and pass on their own.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهرت بعد الحقنة علامات حساسية شديدة: شرى، أو تورّم في الوجه أو الحلق، أو صعوبة في التنفّس، أو خفقان سريع، أو دوخة، أو ضعف. ومن أصابته حساسية بعد الجرعة الأولى لا يأخذ الثانية. وتذكّر أن اللقاح قد لا يحمي كل من يأخذه، فإن أصابتك أثناء الرحلة أو بعد العودة من منطقة موبوءة حرارة مع صداع شديد أو تشنّج أو نعاس غير طبيعي، فاذهب إلى الطوارئ في الحال واذكر أين كنت. وإن كنت مريضاً بحمّى شديدة يوم الموعد فأجّل التطعيم.',
    en: 'Call an ambulance at once if signs of a severe allergic reaction appear after the injection: hives, swelling of the face or throat, difficulty breathing, a fast heartbeat, dizziness or weakness. Anyone who had an allergic reaction after the first dose does not receive the second. Remember that the vaccine may not protect everyone who receives it, so if during the trip or after returning from an affected area you develop fever with severe headache, a seizure or abnormal drowsiness, go to emergency immediately and say where you have been. If you are ill with a high fever on the day, postpone the vaccination.'
  },
  interact: {
    ar: 'جُرّب اللقاح المُعطَّل في الدراسات مع لقاح التهاب الكبد أ المُعطَّل ولقاح داء الكلب المُعطَّل، فلم يُضعف أيٌّ منها استجابة الآخر ولم تتغيّر السلامة. وتنبّه نشرته الأوروبية إلى أن من يأخذ علاجاً مثبّطاً للمناعة، كالكورتيزون الجهازي أو علاج السرطان أو أدوية منع رفض الأعضاء، أو من عنده نقص في المناعة، قد لا يحصل على استجابة كافية. ولا تُعطى هذه الحقنة في العضل لمن عنده نقص صفائح أو ناعور أو اضطراب نزف آخر دون تقدير الطبيب. فأخبر طبيب السفر بكل دواء تأخذه وكل لقاح سفر آخر.',
    en: 'In studies the inactivated vaccine was given with the inactivated hepatitis A vaccine and the inactivated rabies vaccine, and none weakened the response to the others or changed safety. Its European leaflet warns that people on immune-suppressing treatment, such as systemic cortisone, cancer treatment or anti-rejection drugs, or with immune deficiency, may not mount an adequate response. This injection is not given into the muscle of people with low platelets, haemophilia or another bleeding disorder without the doctor\'s judgement. So tell the travel doctor about every medicine you take and every other travel vaccine.'
  },
  avoid: {
    ar: 'لا يأخذه من أصابته حساسية شديدة من جرعة سابقة أو من أحد مكوّناته أو بقايا تصنيعه، ومنها كبريتات البروتامين والفورمالديهايد وألبومين المصل البقري. والحامل لا تأخذه عادة: تقول النشرة الأمريكية إن الحوامل لا يُطعَّمن في الغالب، وتنصح الأوروبية بتجنّبه في الحمل احتياطاً لقلّة البيانات، وكذلك في الرضاعة احتياطاً. ومن سيسافر إلى المدن وحدها لمدة قصيرة يناقش طبيبه في حاجته إليه أصلاً. ومن كان مريضاً بحمّى شديدة يؤجّله حتى يتعافى.',
    en: 'It is not given to anyone who had a severe allergic reaction to a previous dose, to one of its ingredients or to its manufacturing residues, including protamine sulphate, formaldehyde and bovine serum albumin. Pregnant women usually do not receive it: the US leaflet says pregnant women should usually not be vaccinated, and the European leaflet advises avoiding it in pregnancy as a precaution given the limited data, and likewise in breastfeeding. Someone travelling only to cities for a short stay should discuss with their doctor whether they need it at all. Anyone ill with a high fever should postpone it until they recover.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/japanese-encephalitis.html',
    'https://www.who.int/news-room/fact-sheets/detail/japanese-encephalitis',
    'https://www.ema.europa.eu/en/documents/product-information/ixiaro-epar-product-information_en.pdf'
  ]
};

RX_BODY['malaria-vaccine'] = {
  what: {
    ar: 'لقاح الملاريا اسم لقاحين اعتمدتهما منظمة الصحة العالمية: الأول يُعرف بالرمز RTS,S وتجارياً باسم موسكيريكس، والثاني لقاح أحدث يستهدف البروتين نفسه. وكلاهما يستهدف طفيلي الملاريا المنجلية، وهو أخطر طفيليات الملاريا وأكثرها انتشاراً في أفريقيا، ولا يحمي من الأنواع الأخرى. وهما لقاحان لأطفال المناطق الموبوءة لا للمسافرين، وتقول مراكز مكافحة الأمراض الأمريكية إنه لا يوجد لقاح ملاريا متاح للمسافرين. ويُعطى حقناً في العضل ضمن برامج التطعيم الوطنية في تلك البلدان.',
    en: 'Malaria vaccine refers to two vaccines approved by the World Health Organization: the first known as RTS,S and sold as Mosquirix, the second a newer vaccine targeting the same protein. Both target the falciparum malaria parasite, the deadliest malaria parasite and the most widespread in Africa, and neither protects against the other types. They are vaccines for children in affected areas, not for travellers, and the US Centers for Disease Control state that no malaria vaccine is available for travellers. It is injected into the muscle within the national vaccination programmes of those countries.'
  },
  why: {
    ar: 'توصي به منظمة الصحة للأطفال في المناطق الموبوءة، وبأولوية لمناطق الانتقال المتوسط والشديد. وفي التجارب أنقص كلا اللقاحين حالات الملاريا بأكثر من النصف في السنة الأولى بعد التطعيم، وحين أُعطي موسمياً في المناطق شديدة الموسمية منع نحو ثلاثة أرباع نوبات الملاريا. لكنه يُعطى جزءاً من خطة شاملة لا بديلاً عنها: الناموسيات المعالجة، والوقاية الدوائية الموسمية، والتشخيص والعلاج المبكّر. أما المسافر إلى مناطق الملاريا فوقايته أدوية وقائية يصفها الطبيب مع اتقاء لدغ البعوض.',
    en: 'The WHO recommends it for children in affected areas, with priority for moderate and high transmission areas. In trials both vaccines cut malaria cases by more than half in the first year after vaccination, and when given seasonally in highly seasonal areas they prevented about three quarters of malaria episodes. But it is given as part of a comprehensive plan, not in place of it: treated bed nets, seasonal preventive medicines, and early diagnosis and treatment. A traveller to malaria areas is protected instead by preventive medicines prescribed by a doctor together with avoiding mosquito bites.'
  },
  how: {
    ar: 'حين تلدغ البعوضة المصابة إنساناً تحقن طوراً من الطفيلي يتّجه إلى الكبد ليتكاثر فيه قبل أن يغزو الدم. ويحمل هذا الطور على سطحه بروتيناً يُسمّى البروتين المحيط بالبوغ، واللقاح يعلّم الجسم صنع أجسام مضادّة وخلايا مناعية ضد هذا البروتين، فيحدّ من قدرة الطفيلي على إصابة الكبد والنضج والتكاثر فيه. ولقاح موسكيريكس يولّد كذلك أجساماً مضادّة لالتهاب الكبد ب، لكنه لا يُستعمل لهذا الغرض وحده. والحماية ليست كاملة وتضعف مع الوقت.',
    en: 'When an infected mosquito bites a person it injects a stage of the parasite that heads to the liver to multiply before invading the blood. This stage carries on its surface a protein called the circumsporozoite protein, and the vaccine teaches the body to make antibodies and immune cells against it, limiting the parasite\'s ability to infect, mature and multiply in the liver. Mosquirix also generates antibodies to hepatitis B, but it is not used for that purpose alone. Protection is not complete and fades over time.'
  },
  effects: {
    ar: 'أشيع آثاره الحرارة، ثم التهيّج، وألم أو تورّم أو احمرار مكان الحقنة، وقد يقلّ الشهية أو يظهر نعاس أو إسهال، وهي شبيهة بما يحدث بعد لقاحات الأطفال الأخرى. وأخطر ما رُصد تشنّجات حرارية في الأيام التالية للتطعيم، وهي غير شائعة، وتعافى الأطفال الذين أصابتهم تماماً بلا عواقب دائمة. وقد درست منظمة الصحة إشارات مقلقة ظهرت في تجربة سابقة عن التهاب السحايا والملاريا الدماغية والوفيات بحسب الجنس، فلم تجد برامج التطبيق الواسعة دليلاً عليها.',
    en: 'Its most common effect is fever, followed by irritability and pain, swelling or redness at the injection site; appetite may fall, and drowsiness or diarrhoea may appear, similar to what follows other childhood vaccines. The most serious effect observed is febrile seizures in the days after vaccination; they are uncommon, and the children affected recovered fully with no lasting consequences. The WHO studied worrying signals from an earlier trial about meningitis, cerebral malaria and deaths by sex, and the large rollout programmes found no evidence for them.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهرت بعد الحقنة علامات حساسية شديدة: شرى، أو تورّم في الوجه أو الحلق، أو صعوبة في التنفّس، أو شحوب وارتخاء مفاجئ عند الطفل. وإن أصاب الطفل تشنّج مع الحرارة في الأيام التالية فاعرضه على الطبيب في الحال؛ ومن سبق أن أصابته تشنّجات حرارية يُتابَع عن قرب بعد التطعيم، وليس ذلك مانعاً منه. والأهمّ أن اللقاح لا يمنع كل إصابة: أي حرارة عند طفل في منطقة موبوءة تستحقّ فحص الملاريا وعلاجها مهما كان تطعيمه، والتأخّر في الملاريا المنجلية خطر.',
    en: 'Call an ambulance at once if signs of a severe allergic reaction appear after the injection: hives, swelling of the face or throat, difficulty breathing, or sudden pallor and floppiness in the child. If the child has a seizure with fever in the following days, have them seen by a doctor immediately; a child with past febrile seizures is followed closely after vaccination, though this is not a reason to withhold it. Most important, the vaccine does not prevent every infection: any fever in a child in an affected area deserves a malaria test and treatment whatever their vaccination, and delay in falciparum malaria is dangerous.'
  },
  interact: {
    ar: 'تذكر نشرة موسكيريكس أنه يُعطى مع لقاحات الطفولة الأخرى في مواضع حقن مختلفة، لكن إعطاءه مع لقاح المكوّرات الرئوية يزيد الحرارة في الأسبوع التالي، وإعطاءه مع لقاح الفيروس العجلي ولقاح المكوّرات الرئوية قد يُنقص الاستجابة لبروتينه ولا يُعرف أثر ذلك على الحماية. ولا يُنصح بإعطاء خافض حرارة كالباراسيتامول قبل التطعيم روتينياً لأن ذلك قد يُضعف الاستجابة المناعية، أما إن ظهرت الحرارة فتُعالَج. ويُجمع مع الوقاية الدوائية الموسمية من الملاريا، وقد تضعف فعاليته عند من يأخذ علاجاً مثبّطاً للمناعة.',
    en: 'The Mosquirix leaflet states it is given alongside other childhood vaccines at different injection sites, but giving it with the pneumococcal vaccine increases fever in the following week, and giving it with the rotavirus and pneumococcal vaccines may reduce the response to its protein, with unknown effect on protection. Giving a fever reducer such as paracetamol routinely before vaccination is not advised because it may weaken the immune response, but fever that does appear is treated. It is combined with seasonal preventive malaria medicines, and its effectiveness may be reduced in a child on immune-suppressing treatment.'
  },
  avoid: {
    ar: 'لا يأخذه طفل أصابته حساسية شديدة من جرعة سابقة منه أو من لقاح التهاب الكبد ب أو من أحد مكوّناته. ويؤجَّل عند مرض حادّ مع حمّى شديدة، أما الزكام الخفيف فليس سبباً للتأجيل. ويُعطى بحذر لمن عنده نقص صفائح أو اضطراب تخثّر لأن الحقن في العضل قد يسبّب نزفاً. ولا توجد بيانات عند الأطفال ضعيفي المناعة لغير سبب فيروس نقص المناعة، وقد تضعف فيهم فعاليته. واللقاح غير مخصّص للنساء في سن الإنجاب ولا بيانات عنه في الحمل، ولا يُعطى للبالغين المسافرين.',
    en: 'It is not given to a child who had a severe allergic reaction to a previous dose, to hepatitis B vaccine or to one of its ingredients. It is postponed during an acute illness with high fever, though a mild cold is no reason to delay. It is given with caution to children with low platelets or a clotting disorder because an injection into the muscle may cause bleeding. There are no data in children with weak immunity from causes other than HIV, and its effectiveness may be lower in them. The vaccine is not intended for women of childbearing age, has no pregnancy data, and is not given to adult travellers.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.who.int/news-room/questions-and-answers/item/q-a-on-rts-s-malaria-vaccine',
    'https://www.who.int/groups/global-advisory-committee-on-vaccine-safety/topics/malaria-vaccines/safety-malaria-vaccine',
    'https://www.ema.europa.eu/en/documents/outside-eu-product-information/mosquirix-product-information_en.pdf',
    'https://www.cdc.gov/malaria/prevention/index.html'
  ]
};

RX_BODY['measles-vaccine'] = {
  what: {
    ar: 'لقاح الحصبة لقاح حيّ مُضعَف: يحتوي فيروس الحصبة بعد إضعافه في المختبر، فلا يُحدث المرض لكنه يعلّم الجسم مقاومته. ونادراً ما يُعطى وحده اليوم، بل يأتي في حقنة واحدة مع لقاحَي النكاف والحصبة الألمانية فيُعرف باللقاح الثلاثي، وقد يُضاف إليه لقاح جدري الماء فيصير رباعياً. وتصفه منظمة الصحة العالمية بأنه آمن وفعّال وزهيد الكلفة، ومستعمل منذ عقود طويلة. ويُعطى حقناً ضمن جدول تطعيم الأطفال، ولمن فاته من الكبار.',
    en: 'The measles vaccine is a live weakened vaccine: it contains measles virus weakened in the laboratory, so it does not cause the disease but teaches the body to resist it. Today it is rarely given alone; it comes in one injection with the mumps and rubella vaccines, known as the triple MMR vaccine, and chickenpox vaccine may be added to make it quadruple. The World Health Organization describes it as safe, effective and inexpensive, and it has been in use for many decades. It is injected within the childhood vaccination schedule, and for adults who missed it.'
  },
  why: {
    ar: 'الحصبة من أشدّ الأمراض عدوى: تنتقل في الهواء بالتنفّس والسعال، ويبقى الفيروس في الهواء وعلى الأسطح ساعات. ومضاعفاتها قد تكون العمى والتهاب الدماغ والإسهال الشديد والتهاب الأذن والالتهاب الرئوي والتشنّجات والوفاة، وفي الحامل الإجهاض والولادة المبكرة. ويُعطى اللقاح للأطفال ضمن الجدول الوطني وعلى أكثر من جرعة، لأن بعض الأطفال لا تتكوّن لديهم المناعة من الأولى. ويُنصح به للكبار غير المحصّنين، ولا سيّما العاملين في الصحة والمسافرين والطلاب، وقد يُعطى للرضيع مبكّراً قبل السفر.',
    en: 'Measles is one of the most contagious diseases: it spreads through the air by breathing and coughing, and the virus stays in the air and on surfaces for hours. Its complications can include blindness, inflammation of the brain, severe diarrhoea, ear infection, pneumonia, seizures and death, and in pregnancy miscarriage and premature birth. Children receive the vaccine within the national schedule and in more than one dose, because some children do not develop immunity from the first. It is advised for unprotected adults, especially health workers, travellers and students, and may be given to an infant early before travel.'
  },
  how: {
    ar: 'يتكاثر الفيروس المُضعَف في الجسم تكاثراً محدوداً لا يكفي لإحداث المرض، لكنه يكفي ليبني جهاز المناعة أجساماً مضادّة وذاكرة طويلة ضد الحصبة. وتقول مراكز مكافحة الأمراض الأمريكية إن أغلب من يأخذه يبقى محمياً مدى الحياة، وإن الحماية بعد اكتمال الجرعات عالية جداً. وإن أُعطي لغير المحصّن خلال الأيام الثلاثة الأولى بعد التعرّض للحصبة فقد يمنح بعض الحماية أو يجعل المرض أخفّ. وقليل من الملقّحين قد يصابون رغم ذلك، لكن مرضهم يكون عادة أخفّ.',
    en: 'The weakened virus multiplies in the body only to a limited degree, not enough to cause disease but enough for the immune system to build antibodies and a long memory against measles. The US Centers for Disease Control say most recipients remain protected for life and that protection after the full doses is very high. If given to an unprotected person within the first three days after exposure to measles, it may offer some protection or make the illness milder. A few vaccinated people may still catch it, but their illness is usually milder.'
  },
  effects: {
    ar: 'أغلب آثاره خفيفة: ألم مكان الحقنة، وحرارة، وطفح خفيف قد يظهر بعد نحو أسبوع إلى أسبوع ونصف من اللقاح ويستمر أياماً قليلة. وقد يحدث بعد ذلك تورّم في الغدد أو ألم في المفاصل. ومن الآثار النادرة الشديدة تشنّج حراري، أو نقص في الصفائح يسبّب نزفاً أو تكدّماً غير معتاد. أما الحساسية الشديدة فنادرة. وتؤكّد هيئة الصحة البريطانية أن الأبحاث أثبتت عدم وجود صلة بين اللقاح الثلاثي والتوحّد.',
    en: 'Most of its effects are mild: soreness at the injection site, fever, and a mild rash that may appear about one to one and a half weeks after the vaccine and last a few days. Swollen glands or joint pain may follow later. Rare serious effects include a febrile seizure, or a fall in platelets causing unusual bleeding or bruising. Severe allergy is rare. The UK health service confirms that research has shown no link between the MMR vaccine and autism.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهرت بعد الحقنة علامات حساسية شديدة: شرى، أو تورّم في الوجه أو الحلق، أو صعوبة في التنفّس، أو خفقان سريع، أو دوخة، أو ضعف. وإن أصاب الطفل تشنّج مع الحرارة فاعرضه على الطوارئ في الحال. وإن ظهرت في الأسابيع التالية بقع نزفية صغيرة على الجلد أو تكدّم بلا سبب أو نزف من اللثة أو الأنف فراجع الطبيب في اليوم نفسه، لأن نقص الصفائح من آثاره النادرة. وإن خالط شخص غير محصّن مريضاً بالحصبة فليتّصل بطبيبه فوراً، لأن اللقاح المبكّر قد يفيده.',
    en: 'Call an ambulance at once if signs of a severe allergic reaction appear after the injection: hives, swelling of the face or throat, difficulty breathing, a fast heartbeat, dizziness or weakness. If the child has a seizure with fever, take them to emergency straight away. If small bleeding spots on the skin, unexplained bruising or bleeding from the gums or nose appear in the following weeks, see a doctor the same day, because a fall in platelets is one of its rare effects. If an unprotected person has been in contact with someone with measles, they should call their doctor immediately, because early vaccination may help.'
  },
  interact: {
    ar: 'أخبر الممرّض قبل التطعيم إن كنت قد أخذت نقل دم أو منتجات دم مؤخّراً، لأنها قد تستدعي تأجيل اللقاح. وأخبره إن أخذت لقاحاً آخر خلال الأسابيع الأربعة الماضية. ومن يأخذ أدوية تُضعف المناعة، كالكورتيزون الجهازي أو علاج السرطان أو أدوية منع رفض الأعضاء، لا يأخذ لقاحاً حياً دون تقدير طبيبه. ومن كان مصاباً بالسلّ يذكر ذلك قبل التطعيم. وتذكر هيئة الصحة البريطانية أن إحدى صيغه تحتوي جيلاتين خنزير، وأن صيغة بديلة بلا جيلاتين متاحة عند الطلب.',
    en: 'Tell the nurse before vaccination if you have recently had a blood transfusion or blood products, because this may require postponing the vaccine. Also tell them if you received another vaccine in the past four weeks. Anyone taking immune-suppressing medicines, such as systemic cortisone, cancer treatment or anti-rejection drugs, should not receive a live vaccine without their doctor\'s judgement. Anyone with tuberculosis should mention it before vaccination. The UK health service notes that one formulation contains pork gelatine and that an alternative without gelatine is available on request.'
  },
  avoid: {
    ar: 'لا يُعطى للحامل، لأن اللقاح الحيّ قد يؤذي الجنين، ولمن تحتمل الحمل أن تناقش الأمر مع طبيبها. ولا يُعطى لضعيف المناعة من مرض أو علاج، ويُسأل عن وجود نقص مناعة وراثي في العائلة. ولا يأخذه من أصابته حساسية شديدة من جرعة سابقة أو من مكوّناته كالجيلاتين أو النيومايسين. ويناقش الطبيبَ قبل التطعيم من عنده اضطراب نزف أو نقص صفائح، ومن عنده سلّ، ومن نُقل له دم مؤخّراً. ومن كان مريضاً مرضاً شديداً يؤجّله حتى يتعافى.',
    en: 'It is not given in pregnancy, because the live vaccine may harm the unborn baby, and a woman who may be pregnant should discuss it with her doctor. It is not given to people with weak immunity from illness or treatment, and a family history of inherited immune deficiency is asked about. It is not given to anyone with a severe allergy to a previous dose or to its ingredients such as gelatine or neomycin. People with a bleeding disorder or low platelets, those with tuberculosis, and those recently transfused should discuss it with the doctor first. Anyone severely ill should postpone it until they recover.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/mmr.html',
    'https://www.cdc.gov/measles/vaccines/index.html',
    'https://www.nhs.uk/vaccinations/mmr-vaccine/',
    'https://www.who.int/news-room/fact-sheets/detail/measles'
  ]
};

RX_BODY['meningococcal-meningitis-vaccine'] = {
  what: {
    ar: 'لقاح الالتهاب السحائي يقي من بكتيريا المكوّرات السحائية، إحدى أخطر أسباب التهاب السحايا وتسمّم الدم. وهذه البكتيريا فصائل بأحرف، ولكل مجموعة منها لقاح: اللقاح المقترن الرباعي يحمي من الفصائل أ وسي ودبليو وواي، ولقاح أحدث خماسي أضاف الفصيلة إكس، أما الفصيلة ب فلها لقاح بروتيني منفصل لا يغني عنه الرباعي. وأما لقاحات السكّريات القديمة فتحلّ محلّها اللقاحات المقترنة تدريجياً. ولا يحمي أيٌّ منها من التهاب السحايا الذي تسبّبه بكتيريا أخرى.',
    en: 'The meningococcal vaccine protects against meningococcal bacteria, one of the most dangerous causes of meningitis and blood poisoning. These bacteria come in lettered groups, each covered by its own vaccine: the four-group conjugate vaccine protects against groups A, C, W and Y, a newer five-group vaccine adds group X, and group B has a separate protein vaccine that the four-group one does not replace. The older polysaccharide vaccines are gradually being replaced by conjugate vaccines. None of them protects against meningitis caused by other bacteria.'
  },
  why: {
    ar: 'مرض المكوّرات السحائية سريع وقاتل: تقول مراكز مكافحة الأمراض الأمريكية إنه يقتل نحو عشرة إلى خمسة عشر من كل مئة مصاب، وإن من ينجو قد يبقى بفقد سمع أو تلف دماغ أو كلى أو بتر أطراف. ويُعطى للمراهقين في أنظمة كثيرة، ولمن تضرّر طحاله أو استؤصل ومنهم مرضى فقر الدم المنجلي، ولمصابي فيروس نقص المناعة، ولنقص المتمّم، وللعاملين في المختبرات، وللمسافرين إلى حزام التهاب السحايا في أفريقيا. وتشترط السعودية على كل حاج ومعتمر شهادة لقاح رباعي سارية قبل الوصول بعشرة أيام على الأقل، ولا تصدر التأشيرة بدونها.',
    en: 'Meningococcal disease is fast and deadly: the US Centers for Disease Control say it kills about ten to fifteen of every hundred infected, and survivors may be left with hearing loss, brain or kidney damage, or limb loss. Many systems give it to teenagers, and it is given to people whose spleen is damaged or removed, including those with sickle cell disease, people with HIV, those with complement deficiency, laboratory workers, and travellers to Africa\'s meningitis belt. Saudi Arabia requires every Hajj and Umrah pilgrim to show a valid four-group vaccine certificate given at least ten days before arrival, and no visa is issued without it.'
  },
  how: {
    ar: 'يعرض اللقاح على جهاز المناعة أجزاء من غلاف البكتيريا لا تستطيع إحداث المرض، فيصنع الجسم أجساماً مضادّة تقتل البكتيريا الحقيقية إن دخلت الدم قبل أن تتكاثر. واللقاح المقترن مفضّل على لقاح السكّريات القديم لأنه يُنقص كذلك حمل البكتيريا في الحلق، فيقلّ انتقالها بين الناس، ولهذا تكرّرت الفاشيات قديماً بين الحجّاج العائدين. ولأن كل لقاح يغطّي فصائل بعينها، فالمحمي من الفصائل الرباعية ليس محمياً من الفصيلة ب، والعكس صحيح.',
    en: 'The vaccine shows the immune system parts of the bacterial coat that cannot cause disease, so the body makes antibodies that kill the real bacteria if they enter the blood, before they multiply. The conjugate vaccine is preferred over the old polysaccharide one because it also reduces carriage of the bacteria in the throat, lowering spread between people, which is why outbreaks once recurred among returning pilgrims. Because each vaccine covers particular groups, someone protected against the four groups is not protected against group B, and vice versa.'
  },
  effects: {
    ar: 'آثار اللقاح الرباعي في الغالب احمرار أو ألم مكان الحقنة، وقد يظهر ألم في العضلات أو صداع أو تعب. أما لقاح الفصيلة ب فآثاره أكثر: ألم أو احمرار أو تورّم مكان الحقنة، وتعب، وصداع، وآلام في العضلات أو المفاصل، وحرارة، وقشعريرة، وغثيان أو إسهال، وقد يصيب بعضها أكثر من نصف من يأخذونه، وتزول عادة خلال أيام. وقد يُغمى على بعض الناس بعد الحقن، وخاصة المراهقين. أما الحساسية الشديدة فنادرة جداً.',
    en: 'The four-group vaccine mostly causes redness or pain at the injection site, and muscle aches, headache or tiredness may appear. The group B vaccine has more effects: pain, redness or swelling at the site, tiredness, headache, muscle or joint pain, fever, chills, nausea or diarrhoea, some of which affect more than half of recipients, usually settling within days. Some people, especially teenagers, may faint after the injection. Severe allergy is very rare.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهرت بعد الحقنة علامات حساسية شديدة: شرى، أو تورّم في الوجه أو الحلق، أو صعوبة في التنفّس، أو خفقان سريع، أو دوخة، أو ضعف. واجلس أو استلقِ بعد الحقنة إن شعرت بدوخة أو تغيّر في الرؤية أو طنين، لأن الإغماء قد يسبّب إصابة. واللقاح لا يغطّي كل الفصائل ولا كل أسباب التهاب السحايا، فإن ظهرت حرارة مع تيبّس الرقبة أو صداع شديد أو تشوّش أو انزعاج من الضوء أو قيء، أو طفح لا يبهت بالضغط، فهذا طارئ يستدعي المستشفى فوراً.',
    en: 'Call an ambulance at once if signs of a severe allergic reaction appear after the injection: hives, swelling of the face or throat, difficulty breathing, a fast heartbeat, dizziness or weakness. Sit or lie down after the injection if you feel dizzy or notice vision changes or ringing in the ears, because fainting can cause injury. The vaccine does not cover every group or every cause of meningitis, so fever with a stiff neck, severe headache, confusion, discomfort from light or vomiting, or a rash that does not fade on pressure, is an emergency needing hospital at once.'
  },
  interact: {
    ar: 'لا تذكر النشرات الأمريكية تعارضات دوائية بارزة لهذا اللقاح، لكن فيها ما يخصّ الأدوية بطريقة أخرى: من يأخذ مثبّطات المتمّم، مثل الإكوليزوماب والرافوليزوماب، يُعدّ من الفئات الأكثر عرضة لعدوى المكوّرات السحائية، فيحتاج اللقاحين الرباعي ولقاح الفصيلة ب قبل العلاج أو معه بحسب تقدير طبيبه. وتفضّل سلطات الحج اللقاح المقترن لأن صلاحيته أطول وأثره على حمل البكتيريا أقوى. وقد تشترط السعودية على القادمين من بلدان ينتشر فيها شلل الأطفال لقاحاً لهذا المرض أيضاً.',
    en: 'The US leaflets list no notable drug interactions for this vaccine, but they touch on medicines in another way: people taking complement inhibitors such as eculizumab and ravulizumab are among the groups at higher risk of meningococcal infection, so they need both the four-group and group B vaccines before or with treatment as their doctor judges. Hajj authorities prefer the conjugate vaccine because its validity is longer and its effect on bacterial carriage stronger. Saudi Arabia may also require polio vaccination from travellers coming from countries where polio is circulating.'
  },
  avoid: {
    ar: 'لا يأخذه من أصابته حساسية شديدة مهدّدة للحياة من جرعة سابقة أو من أحد مكوّناته. ويؤجّله من كان مريضاً مرضاً متوسطاً أو شديداً، أما المرض الخفيف كالزكام فلا يمنعه. وفي الحمل والرضاعة يختلف النوعان: اللقاح الرباعي لم تُرصد له مخاوف تتعلّق بالسلامة ويُعطى للحامل والمرضع إن احتاجتاه، أما لقاح الفصيلة ب فيؤجَّل في الحمل إلا إن كانت المرأة معرّضة لخطر أعلى ورأى الطبيب أن الفائدة تفوق الخطر.',
    en: 'It is not given to anyone who had a severe, life-threatening allergic reaction to a previous dose or to one of its ingredients. Anyone moderately or severely ill should postpone it, though a minor illness such as a cold does not prevent it. In pregnancy and breastfeeding the two types differ: no safety concerns have been identified for the four-group vaccine, and it is given to pregnant and breastfeeding women who need it, whereas the group B vaccine is postponed in pregnancy unless the woman is at higher risk and the doctor judges that the benefit outweighs the risk.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/meningococcal-acwy.html',
    'https://www.cdc.gov/vaccines/hcp/current-vis/meningococcal-b.html',
    'https://www.who.int/news-room/fact-sheets/detail/meningitis',
    'https://www.cdc.gov/yellow-book/hcp/africa-middle-east/saudi-arabia-hajj-and-umrah-pilgrimages.html'
  ]
};

RX_BODY['mpox-vaccine'] = {
  what: {
    ar: 'لقاح جدري القردة يحتوي فيروساً قريباً من فيروس المرض يُسمّى فيروس الوقس (الفاكسينيا) بعد إضعافه، فلا يحتوي فيروس جدري القردة ولا يسبّبه. وأشهره اللقاح المعروف بالرمز MVA-BN وتجارياً جينيوس وإمفانيكس، وهو حقنة. ويوجد لقاح ياباني آخر يُعطى بإبرة مشقوقة ويترك ندبة صغيرة، ولقاح ثالث تُقيَّد عادة استعماله بسبب آثاره الجانبية المعروفة. وتذكر منظمة الصحة العالمية هذه الثلاثة، والأول هو الأوسع استعمالاً.',
    en: 'The mpox vaccine contains a virus related to the mpox virus, called vaccinia, in weakened form, so it contains no mpox virus and cannot cause it. The best known is the vaccine called MVA-BN, sold as Jynneos and Imvanex, given by injection. There is also a Japanese vaccine given with a forked needle that leaves a small scar, and a third vaccine whose use is usually restricted because of its known side effects. The World Health Organization lists these three, and the first is the most widely used.'
  },
  why: {
    ar: 'تنصح منظمة الصحة بتطعيم الأكثر عرضة: المخالطين المقرّبين لمصاب بمن فيهم الأطفال، والعاملين في الصحة وفرق الاستجابة للفاشيات، ومن تتعدّد علاقاتهم الجنسية، ومن يعيشون في مناطق الانتشار. ويُعطى كذلك بعد التعرّض: خلال أربعة أيام من المخالطة، أو حتى أسبوعين ما لم تظهر أعراض. وتقول المنظمة إن اكتمال جدوله يُنقص فرصة الإصابة بدرجة كبيرة، وتقول هيئة الصحة البريطانية إن من يصاب بعده يكون مرضه عادة أخفّ.',
    en: 'The WHO advises vaccinating those most at risk: close contacts of an infected person including children, health workers and outbreak response teams, people with multiple sexual partners, and people living in areas of spread. It is also given after exposure: within four days of contact, or up to two weeks if no symptoms have appeared. The WHO says completing its schedule greatly reduces the chance of infection, and the UK health service says anyone infected afterwards usually has a milder illness.'
  },
  how: {
    ar: 'فيروس الوقس وفيروس جدري القردة وفيروس الجدري القديم من عائلة واحدة، فالأجسام المضادّة التي يصنعها الجسم ضد الوقس تتعرّف على جدري القردة أيضاً. والفيروس في لقاح MVA-BN مُضعَف إلى حدّ أن آثاره تبقى محدودة. والحماية تتكوّن بعد اكتمال الجدول لا بعد الحقنة الأولى وحدها، ولا تصل إلى كل الملقّحين، ولهذا تشدّد منظمة الصحة على بقاء الاحتياطات بعد التطعيم: تجنّب المخالطة القريبة للمصاب، ونظافة اليدين، والتوقّف عن تعدّد الشركاء.',
    en: 'Vaccinia, mpox and the old smallpox virus belong to one family, so the antibodies the body makes against vaccinia also recognise mpox. The virus in MVA-BN is weakened to the point that its effects remain limited. Protection builds after the schedule is complete, not after the first injection alone, and does not reach every vaccinated person, which is why the WHO insists that precautions continue after vaccination: avoiding close contact with an infected person, hand hygiene, and pausing multiple partners.'
  },
  effects: {
    ar: 'أشيع آثاره تفاعلات مكان الحقنة: ألم واحمرار وتورّم وتصلّب وحكّة، ثم صداع وغثيان وألم في العضلات وتعب وقشعريرة، وقد ترتفع الحرارة، وتتحسّن عادة خلال أيام قليلة. وإن أُعطي داخل الجلد قلّ الألم وزادت الحكّة والاحمرار والتصلّب وتغيّر لون الجلد، وقد يبقى بعضها أسابيع. ومن عنده التهاب جلد تأتبي (إكزيما) تظهر عنده آثار أكثر. وتقول منظمة الصحة إن التهاب عضلة القلب نادر جداً. وهذه الآثار علامة استجابة المناعة لا علامة مرض.',
    en: 'Its most common effects are injection-site reactions: pain, redness, swelling, hardening and itching, followed by headache, nausea, muscle aches, tiredness and chills, and fever may rise, usually improving within a few days. When given into the skin there is less pain but more itching, redness, hardening and skin discolouration, some of which may last weeks. People with atopic eczema have more effects. The WHO says inflammation of the heart muscle is very rare. These effects are a sign of the immune response, not of illness.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهرت بعد الحقنة علامات حساسية شديدة: شرى، أو تورّم في الوجه أو الحلق، أو صعوبة في التنفّس، أو خفقان سريع، أو دوخة. ولأن التهاب عضلة القلب مذكور بين آثاره النادرة جداً، فإن ظهر بعد التطعيم ألم في الصدر أو ضيق في النفس أو خفقان غير معتاد فاذهب إلى الطوارئ. وقد يُغمى على بعض الناس من القلق عند الحقن، فاجلس إن شعرت بدوخة. واللقاح لا يمنع الإصابة تماماً: إن ظهر طفح أو قروح أو حرارة مع تضخّم الغدد بعد مخالطة، فراجع الطبيب واعزل نفسك.',
    en: 'Call an ambulance at once if signs of a severe allergic reaction appear after the injection: hives, swelling of the face or throat, difficulty breathing, a fast heartbeat or dizziness. Because inflammation of the heart muscle is listed among its very rare effects, chest pain, shortness of breath or unusual palpitations after vaccination warrant emergency care. Some people faint from anxiety at the injection, so sit down if you feel dizzy. The vaccine does not fully prevent infection: if a rash, sores, or fever with swollen glands appear after contact, see a doctor and isolate yourself.'
  },
  interact: {
    ar: 'تقول نشرة إمفانيكس الأوروبية إنه لم تُجرَ دراسات تداخل مع لقاحات أو أدوية أخرى، ولذلك يُتجنّب إعطاؤه في وقت واحد مع لقاحات أخرى، ويُتجنّب إعطاؤه مع أي غلوبولين مناعي، ومنه غلوبولين الوقس المناعي. وقد يُضعف التطعيم السابق به التفاعل الجلدي للقاح الجدري القديم المتكاثر إن أُعطي بعده. أما ضعاف المناعة، ومنهم مصابو فيروس نقص المناعة، فاستجابتهم أضعف من الأصحّاء، ولا بيانات عند غيرهم من ضعاف المناعة. فأخبر الطبيب بكل دواء يُضعف المناعة تأخذه.',
    en: 'The European Imvanex leaflet states that no interaction studies with other vaccines or medicines have been done, so giving it at the same time as other vaccines is avoided, as is giving it with any immunoglobulin, including vaccinia immune globulin. Previous vaccination with it may weaken the skin reaction to the old replicating smallpox vaccine if given afterwards. People with weak immunity, including those with HIV, respond less well than healthy people, and there are no data in other immunocompromised groups. So tell the doctor about every immune-suppressing medicine you take.'
  },
  avoid: {
    ar: 'لا يأخذه من عنده حساسية من أحد مكوّناته أو من البقايا الضئيلة فيه: بروتين الدجاج، والبنزوناز، والجنتامايسين، والسيبروفلوكساسين. ويؤجَّل عند مرض حادّ مع حمّى شديدة، أما العدوى الخفيفة فلا تؤخّره. وفي الحمل والرضاعة تختلف المصادر في صياغتها: النشرة الأوروبية تفضّل تجنّبه احتياطاً إلا إن رجحت الفائدة، وهيئة الصحة البريطانية تعدّه آمناً، ومنظمة الصحة تجيز لقاح MVA-BN للحامل المعرّضة للخطر، بينما لا يُعطى اللقاح الياباني في الحمل ولا الرضاعة ولا لضعاف المناعة.',
    en: 'It is not given to anyone allergic to one of its ingredients or its trace residues: chicken protein, benzonase, gentamicin and ciprofloxacin. It is postponed during an acute illness with high fever, though a minor infection does not delay it. On pregnancy and breastfeeding the sources word it differently: the European leaflet prefers to avoid it as a precaution unless the benefit prevails, the UK health service regards it as safe, and the WHO allows MVA-BN for a pregnant woman at risk, while the Japanese vaccine is not given in pregnancy, breastfeeding or to people with weak immunity.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.who.int/news-room/questions-and-answers/item/mpox-vaccines',
    'https://www.nhs.uk/vaccinations/mpox-vaccine/',
    'https://www.ema.europa.eu/en/documents/product-information/imvanex-epar-product-information_en.pdf'
  ]
};

RX_BODY['mumps-vaccine'] = {
  what: {
    ar: 'لقاح النكاف لقاح حيّ مُضعَف يحتوي فيروس النكاف بعد إضعافه، فيعلّم الجسم مقاومة المرض دون أن يُحدثه. ولا يُعطى وحده في العادة، بل ضمن اللقاح الثلاثي مع الحصبة والحصبة الألمانية، أو الرباعي الذي يضيف جدري الماء للأطفال. وهو جزء من جدول تطعيم الأطفال في أغلب البلدان، ويُعطى حقناً. والنكاف هو المرض الذي تنتفخ فيه الغدد اللعابية تحت الأذن أو الفك، ويُعرف في الخليج أحياناً بأبو دغيم.',
    en: 'The mumps vaccine is a live weakened vaccine containing mumps virus in weakened form, teaching the body to resist the disease without causing it. It is not usually given alone but within the triple MMR vaccine with measles and rubella, or the quadruple vaccine that adds chickenpox for children. It is part of the childhood vaccination schedule in most countries and is given by injection. Mumps is the illness in which the salivary glands below the ear or jaw swell, sometimes known in the Gulf as Abu Dghaim.'
  },
  why: {
    ar: 'يسبّب النكاف حرارة وصداعاً وانتفاخ الغدد اللعابية، وقد يقود إلى مضاعفات تجعله أخطر ممّا يبدو: الصمم، والتهاب السحايا، والتهاب الخصيتين عند الذكور أو المبيضين عند الإناث. وتقول مراكز مكافحة الأمراض الأمريكية إنه قد يكون خطيراً على الأطفال والبالغين معاً. ولهذا يُعطى اللقاح للأطفال ضمن الجدول الوطني، ولمن فاته من الكبار، وللعاملين في الصحة والمسافرين غير المحصّنين. وفي الفاشيات قد تقرّر السلطات الصحية جرعة إضافية للأكثر عرضة.',
    en: 'Mumps causes fever, headache and swollen salivary glands, and can lead to complications that make it more serious than it looks: deafness, meningitis, and inflammation of the testicles in males or the ovaries in females. The US Centers for Disease Control say it can be serious for children and adults alike. The vaccine is therefore given to children within the national schedule, to adults who missed it, and to unprotected health workers and travellers. In outbreaks, health authorities may decide on an extra dose for those at higher risk.'
  },
  how: {
    ar: 'يتكاثر الفيروس المُضعَف تكاثراً محدوداً فيبني جهاز المناعة أجساماً مضادّة وذاكرة ضد النكاف. لكن حماية هذا الجزء من اللقاح أضعف من حماية جزء الحصبة، وقد تتراجع مع الزمن عند بعض الناس. ولهذا تقع فاشيات نكاف أحياناً بين ملقّحين، وتعزوها مراكز مكافحة الأمراض الأمريكية إلى ثلاثة أسباب: ضعف استجابة بعضهم للقاح، وتراجع المناعة مع الوقت، والمخالطة القريبة الطويلة لمصاب. ومع ذلك فالمرض عند الملقّح يكون عادة أخفّ.',
    en: 'The weakened virus multiplies to a limited degree, so the immune system builds antibodies and memory against mumps. But the protection from this part of the vaccine is weaker than that of the measles part and may decline over time in some people. That is why mumps outbreaks sometimes occur among vaccinated people, which the US Centers for Disease Control attribute to three causes: a weak response to the vaccine in some, immunity fading over time, and prolonged close contact with an infected person. Even so, the illness in a vaccinated person is usually milder.'
  },
  effects: {
    ar: 'آثاره هي آثار اللقاح الثلاثي: ألم مكان الحقنة، وحرارة، وطفح خفيف قد يظهر بعد نحو أسبوع ويستمر أياماً قليلة. وقد يحدث بعد ذلك تورّم في الغدد، ومنها غدد الخدّ والرقبة، أو ألم في المفاصل. وتذكر النشرات آثاراً نادرة شديدة: تشنّجاً حرارياً، ونقصاً في الصفائح يسبّب نزفاً أو تكدّماً غير معتاد. أما الحساسية الشديدة فنادرة. ولا صلة بين اللقاح والتوحّد بحسب هيئة الصحة البريطانية.',
    en: 'Its effects are those of the triple vaccine: soreness at the injection site, fever, and a mild rash that may appear about a week later and last a few days. Swollen glands, including those of the cheek and neck, or joint pain may follow later. The leaflets list rare serious effects: a febrile seizure, and a fall in platelets causing unusual bleeding or bruising. Severe allergy is rare. There is no link between the vaccine and autism according to the UK health service.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهرت بعد الحقنة علامات حساسية شديدة: شرى، أو تورّم في الوجه أو الحلق، أو صعوبة في التنفّس، أو خفقان سريع، أو دوخة، أو ضعف. وإن أصاب الطفل تشنّج مع الحرارة فاعرضه على الطوارئ في الحال. وإن ظهرت بقع نزفية صغيرة على الجلد أو تكدّم بلا سبب أو نزف من اللثة أو الأنف فراجع الطبيب في اليوم نفسه. وإن أصيب الملقّح بالنكاف رغم ذلك فصداع شديد مع تيبّس الرقبة، أو ألم وتورّم في الخصية، أو ضعف السمع، يستدعي الطبيب بسرعة.',
    en: 'Call an ambulance at once if signs of a severe allergic reaction appear after the injection: hives, swelling of the face or throat, difficulty breathing, a fast heartbeat, dizziness or weakness. If the child has a seizure with fever, take them to emergency straight away. If small bleeding spots on the skin, unexplained bruising or bleeding from the gums or nose appear, see a doctor the same day. If a vaccinated person catches mumps anyway, severe headache with a stiff neck, pain and swelling in a testicle, or reduced hearing calls for a doctor quickly.'
  },
  interact: {
    ar: 'تعارضاته هي تعارضات اللقاح الثلاثي الحيّ: أخبر الممرّض إن أخذت نقل دم أو منتجات دم مؤخّراً لأنها قد تستدعي تأجيله، أو أخذت لقاحاً آخر خلال الأسابيع الأربعة الماضية. ومن يأخذ أدوية تُضعف المناعة، كالكورتيزون الجهازي أو علاج السرطان أو أدوية منع رفض الأعضاء، لا يأخذ لقاحاً حياً دون تقدير طبيبه. ومن كان مصاباً بالسلّ يذكر ذلك. وإحدى صيغ اللقاح الثلاثي في بريطانيا تحتوي جيلاتين خنزير، وتتوفّر صيغة بديلة بلا جيلاتين عند الطلب.',
    en: 'Its interactions are those of the live triple vaccine: tell the nurse if you have recently had a blood transfusion or blood products, as this may require postponing it, or if you received another vaccine in the past four weeks. Anyone taking immune-suppressing medicines, such as systemic cortisone, cancer treatment or anti-rejection drugs, should not receive a live vaccine without their doctor\'s judgement. Anyone with tuberculosis should mention it. One formulation of the triple vaccine in the UK contains pork gelatine, and an alternative without gelatine is available on request.'
  },
  avoid: {
    ar: 'لا يُعطى للحامل لأنه لقاح حيّ، ولا لضعيف المناعة من مرض أو علاج، ويُسأل عن نقص المناعة الوراثي في العائلة. ولا يأخذه من أصابته حساسية شديدة من جرعة سابقة أو من مكوّناته كالجيلاتين أو النيومايسين. ويناقش الطبيبَ أولاً من عنده اضطراب نزف أو نقص صفائح، ومن عنده سلّ، ومن نُقل له دم مؤخّراً، ومن أخذ لقاحاً آخر قريباً. ومن كان مريضاً مرضاً شديداً يؤجّله. أما من أخذ جرعاته كاملة فلا يحتاج جرعة إضافية إلا إن طلبتها السلطات الصحية في فاشية.',
    en: 'It is not given in pregnancy because it is a live vaccine, nor to people with weak immunity from illness or treatment, and a family history of inherited immune deficiency is asked about. It is not given to anyone with a severe allergy to a previous dose or to its ingredients such as gelatine or neomycin. People with a bleeding disorder or low platelets, those with tuberculosis, the recently transfused, and those recently given another vaccine should discuss it with the doctor first. Anyone severely ill should postpone it. Those who completed their doses need no extra dose unless health authorities call for one in an outbreak.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/mmr.html',
    'https://www.cdc.gov/mumps/vaccines/index.html',
    'https://www.nhs.uk/vaccinations/mmr-vaccine/'
  ]
};

RX_BODY['pertussis-vaccine'] = {
  what: {
    ar: 'لقاح السعال الديكي لا يُعطى وحده، بل يأتي دائماً في لقاح مركّب مع الدفتيريا والكزاز، وقد يُضاف إليه شلل الأطفال وغيره في لقاحات الرضّع السداسية والخماسية. وللأطفال الصغار صيغة بمقادير أعلى من المكوّنات تُعرف بالرمز DTaP، وللمراهقين والبالغين والحوامل صيغة معزّزة تُعرف بالرمز Tdap. وهو لقاح غير حيّ، يحتوي أجزاء منقّاة من البكتيريا لا البكتيريا كاملة، فلا يمكن أن يسبّب السعال الديكي. ويُعطى حقناً في العضل.',
    en: 'The whooping cough vaccine is never given alone; it always comes combined with diphtheria and tetanus, and polio and others may be added in the six-in-one and five-in-one infant vaccines. Young children receive a formulation with higher amounts of the components known as DTaP, while adolescents, adults and pregnant women receive a booster formulation known as Tdap. It is not a live vaccine: it contains purified parts of the bacterium rather than the whole bacterium, so it cannot cause whooping cough. It is injected into the muscle.'
  },
  why: {
    ar: 'السعال الديكي يسبّب نوبات سعال شديدة تعيق التنفّس والأكل، وأخطر ما يكون على الرضّع: قد يقودهم إلى التهاب رئوي وتشنّجات وتلف دماغي ووفاة. ولهذا يُعطى اللقاح للرضّع والأطفال ضمن الجدول الوطني، ثم معزّزاً للمراهقين والبالغين. والأهمّ أنه يُعطى للحامل في كل حمل، في الثلث الثاني أو مطلع الثالث بحسب نظام كل بلد، وتنصح هيئة الصحة البريطانية بألا يتأخّر عن الأسبوع الثاني والثلاثين من الحمل، لأن الرضيع حديث الولادة أصغر من أن يُطعَّم ويحتاج حماية أمه.',
    en: 'Whooping cough causes severe coughing fits that hinder breathing and eating, and it is most dangerous for babies: it can lead to pneumonia, seizures, brain damage and death. The vaccine is therefore given to infants and children within the national schedule, then as a booster for adolescents and adults. Most importantly, it is given in every pregnancy, in the second trimester or early third depending on each country\'s system, and the UK health service advises not later than the thirty-second week, because the newborn is too young to be vaccinated and needs its mother\'s protection.'
  },
  how: {
    ar: 'يعرض اللقاح على جهاز المناعة أجزاء من بكتيريا السعال الديكي ومن سمّها المعطَّل، فيصنع الجسم أجساماً مضادّة تعطّلها. وحين تأخذه الحامل تعبر هذه الأجسام المضادّة المشيمة إلى جنينها، فيولد الطفل ومعه حماية عالية من المرض الشديد تغطّيه حتى يبدأ تطعيمه هو في أسابيعه الأولى. ولهذا يُعاد في كل حمل، لأن الأجسام المضادّة تتراجع بعد الولادة ولا تكفي لحمل لاحق. ويبقى على الطفل أن يأخذ لقاحاته في موعدها رغم تطعيم أمه.',
    en: 'The vaccine shows the immune system parts of the whooping cough bacterium and of its inactivated toxin, so the body makes antibodies that neutralise them. When a pregnant woman receives it, these antibodies cross the placenta to her baby, so the child is born with high protection against severe disease that covers them until their own vaccinations begin in the first weeks. That is why it is repeated in every pregnancy, since the antibodies decline after birth and are not enough for a later pregnancy. The baby must still receive their own vaccines on time despite the mother\'s vaccination.'
  },
  effects: {
    ar: 'عند البالغين والحوامل: ألم أو احمرار أو تورّم مكان الحقنة يستمر أياماً، وحرارة خفيفة، وصداع، وتعب، وقد يحدث غثيان أو اضطراب في المعدة. وعند الأطفال: ألم وتورّم مكان الحقنة، وحرارة، وتهيّج، وتعب، وقلّة شهية، وقيء. ومن الآثار غير الشائعة عند الأطفال: تشنّج، أو بكاء متواصل لا يهدأ ثلاث ساعات أو أكثر، أو حرارة عالية جداً، أو تورّم الذراع أو الساق كاملة بعد الجرعات المتأخّرة. وتقول هيئة الصحة البريطانية إن الآثار الخطيرة نادرة جداً.',
    en: 'In adults and pregnant women: pain, redness or swelling at the injection site lasting a few days, mild fever, headache and tiredness, and nausea or stomach upset may occur. In children: soreness and swelling at the site, fever, fussiness, tiredness, poor appetite and vomiting. Uncommon effects in children include a seizure, non-stop crying for three hours or more, a very high fever, or swelling of the whole arm or leg after the later doses. The UK health service says serious side effects are extremely rare.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهرت علامات حساسية شديدة: شرى، أو تورّم في الوجه أو الحلق، أو صعوبة في التنفّس، أو خفقان سريع، أو دوخة، أو ضعف. وإن أصاب الطفل تشنّج أو حرارة عالية جداً أو بكاء متواصل لا يهدأ ساعات أو تورّم الطرف كاملاً، فاعرضه على الطبيب في الحال. وإن حدثت غيبوبة أو هبوط في الوعي أو تشنّجات طويلة في الأسبوع التالي للتطعيم دون سبب آخر، فلا تُعطى جرعات أخرى من لقاح السعال الديكي. وقد يُغمى على بعض الناس بعد الحقن، فاجلس إن شعرت بدوخة.',
    en: 'Call an ambulance at once if signs of a severe allergic reaction appear: hives, swelling of the face or throat, difficulty breathing, a fast heartbeat, dizziness or weakness. If the child has a seizure, a very high fever, non-stop crying for hours or swelling of the whole limb, have them seen by a doctor immediately. If coma, reduced consciousness or prolonged seizures occur in the week after vaccination with no other cause, no further doses of pertussis vaccine are given. Some people faint after injections, so sit down if you feel dizzy.'
  },
  interact: {
    ar: 'تقول نشرة بوستريكس الأمريكية إن العلاجات المثبّطة للمناعة قد تُضعف الاستجابة للقاح: العلاج الإشعاعي، ومضادّات الاستقلاب، والعوامل المؤلكلة، والأدوية السامّة للخلايا، والكورتيزون بجرعات تفوق حاجة الجسم الطبيعية. فإن كنت تأخذ شيئاً منها فأخبر طبيبك، فقد يُعطى اللقاح مع العلم أن الاستجابة المتوقّعة قد لا تتحقّق. وللحامل أن تأخذه في الزيارة نفسها مع لقاح الإنفلونزا، وتنصح هيئة الصحة البريطانية بعدم تأخير أيٍّ منهما انتظاراً للآخر.',
    en: 'The US Boostrix leaflet states that immune-suppressing treatments may weaken the response to the vaccine: radiotherapy, antimetabolites, alkylating agents, cytotoxic drugs, and corticosteroids at doses above the body\'s normal needs. If you take any of these, tell your doctor, as the vaccine may be given knowing the expected response may not be reached. A pregnant woman may receive it at the same visit as the flu vaccine, and the UK health service advises not delaying either one to wait for the other.'
  },
  avoid: {
    ar: 'لا يأخذه من أصابته حساسية شديدة من جرعة سابقة من أي لقاح يحمي من الكزاز أو الدفتيريا أو السعال الديكي، ولا من أصابته غيبوبة أو هبوط في الوعي أو تشنّجات طويلة في الأسبوع التالي للقاح سعال ديكي سابق. ويناقش الطبيبَ أولاً من عنده تشنّجات أو مرض في الجهاز العصبي، ومن أصيب بمتلازمة غيلان باريه، ومن أصابه ألم أو تورّم شديد بعد لقاح كزاز أو دفتيريا سابق. أما الحمل فليس مانعاً بل هو من أهمّ دواعيه، ولم تجد الدراسات الواسعة خطراً على الحمل أو الجنين.',
    en: 'It is not given to anyone who had a severe allergic reaction to a previous dose of any vaccine protecting against tetanus, diphtheria or pertussis, nor to anyone who had coma, reduced consciousness or prolonged seizures in the week after a previous pertussis vaccine. People with seizures or a nervous system disease, those who have had Guillain-Barré syndrome, and those who had severe pain or swelling after a previous tetanus or diphtheria vaccine should discuss it with the doctor first. Pregnancy is not a barrier but one of its main reasons, and large studies have found no risk to the pregnancy or the baby.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/tdap.html',
    'https://www.cdc.gov/vaccines/hcp/current-vis/dtap.html',
    'https://www.nhs.uk/pregnancy/keeping-well/whooping-cough-vaccination/',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c3c03458-942c-4565-8a9c-1901bb0d2db0'
  ]
};

RX_BODY['pneumococcal-vaccine'] = {
  what: {
    ar: 'لقاح المكوّرات الرئوية يقي من بكتيريا المكوّرات الرئوية، ولهذه البكتيريا أنواع كثيرة، واللقاح يغطّي أشيعها لا كلّها. وأكثر ما يُستعمل اليوم اللقاحات المقترنة، ومنها بريفنار بصيغه المختلفة التي تتفاوت في عدد الأنواع التي تغطّيها، وتُعطى صيغة للرضّع وصيغة أوسع للبالغين والأطفال الأكبر. وهو لقاح غير حيّ يُعطى حقناً، ولا يسبّب العدوى التي يقي منها.',
    en: 'The pneumococcal vaccine protects against pneumococcal bacteria, which come in many types; the vaccine covers the commonest of them, not all. The most used today are conjugate vaccines, including Prevenar in its various formulations, which differ in the number of types they cover, with one formulation for infants and a broader one for adults and older children. It is not a live vaccine, it is given by injection, and it does not cause the infection it prevents.'
  },
  why: {
    ar: 'تسبّب هذه البكتيريا الالتهاب الرئوي، والتهاب الأذن والجيوب، والتهاب السحايا، وتسمّم الدم. وأغلب إصاباتها خفيفة، لكن الشديد منها قد يترك تلفاً دماغياً أو فقد سمع أو يقتل. والأكثر عرضة الأطفال الصغار وكبار السن وأصحاب عوامل الخطر. ولهذا يُعطى للرضّع ضمن الجدول الوطني، ولكبار السن بحسب العمر الذي يحدّده كل بلد، ولمن عنده فقر الدم المنجلي أو مشكلة في الطحال، أو مرض مزمن في الرئة أو القلب أو الكلى أو الكبد، أو سكّري، أو ضعف مناعة، أو زراعة قوقعة.',
    en: 'These bacteria cause pneumonia, ear and sinus infections, meningitis and blood poisoning. Most infections are mild, but severe ones can leave brain damage or hearing loss, or kill. Those most at risk are young children, older adults and people with risk factors. It is therefore given to infants within the national schedule, to older adults at the age each country sets, and to people with sickle cell disease or a spleen problem, long-term lung, heart, kidney or liver disease, diabetes, weak immunity, or a cochlear implant.'
  },
  how: {
    ar: 'يعرض اللقاح على جهاز المناعة أجزاء من الغلاف الخارجي لأشيع أنواع هذه البكتيريا، مرتبطة ببروتين ينبّه المناعة بقوة أكبر، فيصنع الجسم أجساماً مضادّة تتعرّف على البكتيريا الحقيقية وتساعد على القضاء عليها قبل أن تغزو الرئة أو الدم أو السحايا. وتقول هيئة الصحة البريطانية إن الحماية تتكوّن خلال أسبوعين إلى ثلاثة بعد التطعيم، وإنه يحمي من الأنواع الأشيع، فتبقى الإصابة ممكنة بأنواع لا يغطّيها.',
    en: 'The vaccine shows the immune system parts of the outer coat of the commonest types of these bacteria, linked to a protein that stimulates immunity more strongly, so the body makes antibodies that recognise the real bacteria and help clear them before they invade the lung, blood or meninges. The UK health service says protection develops within two to three weeks of vaccination and that it protects against the commonest types, so infection with types it does not cover remains possible.'
  },
  effects: {
    ar: 'أشيع آثاره احمرار أو تورّم أو ألم أو إيلام مكان الحقنة، وحرارة، وقلّة شهية، وتهيّج عند الأطفال، وتعب، وصداع، وآلام في العضلات أو المفاصل، وقشعريرة. وهي في الغالب خفيفة وتزول خلال أيام. وقد يُغمى على بعض الناس بعد الحقن. وعند الأطفال الصغار قد يرتفع خطر التشنّج الحراري إن أُعطي في اليوم نفسه مع لقاح الإنفلونزا. أما الحساسية الشديدة فنادرة جداً، وقد تحدث خلال دقائق من الحقن.',
    en: 'Its most common effects are redness, swelling, pain or tenderness at the injection site, fever, loss of appetite, fussiness in children, tiredness, headache, muscle or joint aches and chills. They are mostly mild and settle within days. Some people faint after injections. In young children the risk of a febrile seizure may rise if it is given on the same day as the flu vaccine. Severe allergy is very rare and can happen within minutes of the injection.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهرت بعد الحقنة علامات حساسية شديدة: شرى، أو تورّم في الوجه أو الحلق، أو صعوبة في التنفّس، أو خفقان سريع، أو دوخة، أو ضعف، وهذه قد تبدأ خلال دقائق. وإن أصاب الطفل تشنّج مع الحرارة فاعرضه على الطوارئ في الحال. واجلس إن شعرت بدوخة بعد الحقن تجنّباً للسقوط. واللقاح لا يغطّي كل الأنواع، فإن ظهرت بعده حرارة مع تيبّس الرقبة أو صداع شديد أو تشوّش أو انزعاج من الضوء أو قيء، فهذه علامات التهاب السحايا وتستدعي المستشفى فوراً.',
    en: 'Call an ambulance at once if signs of a severe allergic reaction appear after the injection: hives, swelling of the face or throat, difficulty breathing, a fast heartbeat, dizziness or weakness, which may begin within minutes. If the child has a seizure with fever, take them to emergency straight away. Sit down if you feel dizzy after the injection to avoid falling. The vaccine does not cover every type, so fever afterwards with a stiff neck, severe headache, confusion, discomfort from light or vomiting are signs of meningitis and need hospital at once.'
  },
  interact: {
    ar: 'أبرز ما تذكره النشرة الأمريكية أن إعطاءه للطفل الصغير في اليوم نفسه مع لقاح الإنفلونزا قد يرفع خطر التشنّج الحراري، فأخبر الممرّض بكل لقاح أخذه الطفل مؤخّراً. وتذكر نشرة لقاح الملاريا موسكيريكس أن إعطاءه مع لقاح المكوّرات الرئوية يزيد الحرارة في الأسبوع التالي، وقد يُنقص الاستجابة للقاح الملاريا. ولأن اللقاح المقترن يستعمل بروتيناً مأخوذاً من الدفتيريا، فمن أصابته حساسية من لقاح يحتوي ذوفان الدفتيريا يذكر ذلك قبل التطعيم.',
    en: 'The main point in the US leaflet is that giving it to a young child on the same day as the flu vaccine may raise the risk of a febrile seizure, so tell the nurse about every vaccine the child has had recently. The Mosquirix malaria vaccine leaflet states that giving it with the pneumococcal vaccine increases fever in the following week and may reduce the response to the malaria vaccine. Because the conjugate vaccine uses a protein taken from diphtheria, anyone who had an allergic reaction to a vaccine containing diphtheria toxoid should mention it before vaccination.'
  },
  avoid: {
    ar: 'لا يأخذه من أصابته صدمة حساسية من جرعة سابقة منه أو من أحد مكوّناته، ويذكر للطبيب من أصابته حساسية بعد أي لقاح يحتوي ذوفان الدفتيريا أو من عنده حساسية شديدة مهدّدة للحياة. ويؤجّله من كان مريضاً مرضاً متوسطاً أو شديداً. وتقول هيئة الصحة البريطانية إن أغلب الناس يستطيعون أخذه بأمان، ومنهم الحوامل والمرضعات. وتبقى الإصابة ممكنة بعده، فهو لا يغني عن علاج الالتهاب الرئوي أو التهاب السحايا حين يقعان.',
    en: 'It is not given to anyone who had anaphylaxis to a previous dose or to one of its ingredients, and anyone who had an allergic reaction after any vaccine containing diphtheria toxoid, or who has a severe life-threatening allergy, should tell the doctor. Anyone moderately or severely ill should postpone it. The UK health service says most people can have it safely, including pregnant and breastfeeding women. Infection remains possible afterwards, so it does not replace treatment of pneumonia or meningitis when they occur.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/pneumococcal-conjugate.html',
    'https://www.nhs.uk/vaccinations/pneumococcal-vaccine/',
    'https://www.ema.europa.eu/en/documents/outside-eu-product-information/mosquirix-product-information_en.pdf'
  ]
};

RX_BODY['poliomyelitis-vaccine'] = {
  what: {
    ar: 'لقاح شلل الأطفال نوعان، وكلاهما آمن وفعّال بحسب منظمة الصحة العالمية: لقاح حقن مُعطَّل يحتوي الأنواع الثلاثة من الفيروس مقتولة، ويدخل غالباً ضمن لقاحات الرضّع المركّبة؛ ولقاح فموي يُعطى قطرات بالفم ويحتوي فيروساً حياً مُضعَفاً. وتختار البلدان بينهما أو تجمعهما بحسب ظروفها. وقد طُوّر لقاح فموي حديث أقلّ قابلية للتحوّر. ولا يُشترى من الصيدلية، بل يُعطى ضمن برامج التطعيم أو قبل السفر.',
    en: 'The polio vaccine comes in two kinds, both safe and effective according to the World Health Organization: an inactivated injectable vaccine containing the three types of the virus killed, often included in combined infant vaccines; and an oral vaccine given as drops by mouth that contains a live weakened virus. Countries choose between them or combine them according to their circumstances. A newer oral vaccine less prone to mutation has also been developed. It is not bought at the pharmacy but given within vaccination programmes or before travel.'
  },
  why: {
    ar: 'شلل الأطفال مرض فيروسي ينتقل غالباً بالبراز والفم، ويتكاثر في الأمعاء ثم قد يغزو الجهاز العصبي ويتلف النخاع الشوكي. وأغلب المصابين بلا أعراض، لكن إصابة من كل مئتين تقريباً تنتهي بشلل لا رجعة فيه، غالباً في الساقين، ويموت بعض المشلولين حين تُصاب عضلات التنفّس. وقد يعود ضعف العضلات وألمها بعد سنوات طويلة. ولم يبقَ المرض متوطّناً إلا في بلدين، لكنه قد ينتقل منهما، ولهذا يُعطى للأطفال، وللمسافرين إلى المناطق المصابة، ولبعض العاملين في الصحة والمختبرات.',
    en: 'Polio is a viral disease spread mostly by the faecal-oral route; it multiplies in the gut and may then invade the nervous system and damage the spinal cord. Most infected people have no symptoms, but about one infection in two hundred ends in irreversible paralysis, usually of the legs, and some paralysed people die when the breathing muscles are affected. Muscle weakness and pain may return many years later. The disease remains endemic in only two countries but can spread from them, so the vaccine is given to children, travellers to affected areas, and some health and laboratory workers.'
  },
  how: {
    ar: 'لقاح الحقن يعلّم الجسم صنع أجسام مضادّة في الدم تمنع الفيروس من بلوغ الجهاز العصبي، ولا يحتوي فيروساً حياً. أما اللقاح الفموي فيبني مناعة أقوى في الأمعاء حيث يتكاثر الفيروس، فيقطع انتقاله بين الناس. لكن فيروسه الحيّ يُطرح في البراز، وفي المجتمعات قليلة التطعيم قد ينتقل من طفل غير ملقّح إلى آخر شهوراً طويلة فيتحوّر ويستعيد قدرته على الشلل، وهذا هو شلل الأطفال المشتقّ من اللقاح. وعلاجه تطعيم الأطفال، لأن اللقاح يحمي من النوعين معاً.',
    en: 'The injected vaccine teaches the body to make antibodies in the blood that stop the virus reaching the nervous system, and contains no live virus. The oral vaccine builds stronger immunity in the gut where the virus multiplies, cutting its spread between people. But its live virus is shed in the stool, and in poorly vaccinated communities it may pass from one unvaccinated child to another for many months, mutating and regaining the ability to paralyse; this is vaccine-derived polio. The remedy is vaccinating children, because the vaccine protects against both kinds.'
  },
  effects: {
    ar: 'آثار لقاح الحقن في الغالب ألم أو إيلام أو تورّم مكان الحقنة، وقد يظهر تهيّج أو حرارة أو تعب، وهي في العادة تشبه ما يحدث مع لقاحات الأطفال الأخرى. وقد يُغمى على بعض الناس بعد الحقن. أما الحساسية الشديدة فنادرة جداً. وتذكر نشرة اللقاح الأمريكية أن متلازمة غيلان باريه رُصدت متزامنة مع لقاحات أخرى من النوع نفسه دون أن تثبت علاقة سببية. ومن الأثر النادر للقاح الفموي أن ضعاف المناعة قد لا يتخلّصون من فيروسه في الأمعاء.',
    en: 'The injected vaccine mostly causes pain, tenderness or swelling at the injection site, and irritability, fever or tiredness may appear, usually similar to what happens with other childhood vaccines. Some people faint after injections. Severe allergy is very rare. The US leaflet notes that Guillain-Barré syndrome has been reported around the time of other vaccines of the same kind without a proven causal link. A rare effect of the oral vaccine is that people with weak immunity may be unable to clear its virus from the gut.'
  },
  warning: {
    ar: 'اطلب الإسعاف فوراً إن ظهرت بعد التطعيم علامات حساسية شديدة: شرى، أو تورّم في الوجه أو الحلق، أو صعوبة في التنفّس، أو خفقان سريع، أو دوخة، أو ضعف؛ ومن أصابته صدمة حساسية بعد جرعة لا يأخذ جرعات أخرى. واجلس إن شعرت بدوخة بعد الحقن. وإن ظهر في الأسابيع التالية ضعف في الأطراف يزداد أو يصعد فراجع الطبيب سريعاً واذكر اللقاح. وإن أصاب أي طفل ضعف مفاجئ في ساق أو ذراع مع حرارة، ملقّحاً كان أو لا، فهذا طارئ يُفحص فوراً.',
    en: 'Call an ambulance at once if signs of a severe allergic reaction appear after vaccination: hives, swelling of the face or throat, difficulty breathing, a fast heartbeat, dizziness or weakness; anyone who had anaphylaxis after a dose receives no further doses. Sit down if you feel dizzy after the injection. If weakness in the limbs that increases or spreads upward appears in the following weeks, see a doctor promptly and mention the vaccine. If any child, vaccinated or not, develops sudden weakness in a leg or arm with fever, this is an emergency to be examined at once.'
  },
  interact: {
    ar: 'تذكر نشرة لقاح الحقن الأمريكية أن من يأخذ علاجاً مثبّطاً للمناعة أو عنده نقص مناعة قد لا يصنع استجابة واقية كافية، فأخبر الطبيب بأي كورتيزون جهازي أو علاج للسرطان أو دواء لمنع رفض الأعضاء. وفي تصنيعه تُستعمل مضادّات حيوية هي النيومايسين والستربتومايسين والبوليمكسين ب، وقد تبقى منها آثار ضئيلة. أما اللقاح الفموي فيحتاج حذراً عند ضعاف المناعة، وتوصي مراكز مكافحة الأمراض الأمريكية بتطعيم الوالد غير الملقّح إن كان طفله سيأخذ اللقاح الفموي. وقد تشترط السعودية على القادمين من بلدان ينتشر فيها المرض إثبات التطعيم.',
    en: 'The US leaflet for the injected vaccine states that people on immune-suppressing treatment or with immune deficiency may not mount an adequate protective response, so tell the doctor about any systemic cortisone, cancer treatment or anti-rejection medicine. Its manufacture uses the antibiotics neomycin, streptomycin and polymyxin B, and tiny traces may remain. The oral vaccine requires caution in people with weak immunity, and the US Centers for Disease Control recommend vaccinating an unvaccinated parent whose child will receive the oral vaccine. Saudi Arabia may require proof of vaccination from travellers arriving from countries where the disease is circulating.'
  },
  avoid: {
    ar: 'لا يأخذ لقاح الحقن من أصابته حساسية شديدة من جرعة سابقة أو من أحد مكوّناته، ومنها الفينوكسي إيثانول والفورمالديهايد والنيومايسين والستربتومايسين والبوليمكسين ب. ويؤجّله من كان مريضاً مرضاً متوسطاً أو شديداً. وفي الحمل لا يُعرف الكثير عن مخاطره، فلا يُعطى إلا عند الحاجة الواضحة أو إن كانت الحامل معرّضة لخطر العدوى، ويُعطى بحذر في الرضاعة. وعدوى فيروس نقص المناعة ليست مانعاً من لقاح الحقن، أما ضعاف المناعة فالحقن هو المناسب لهم لا القطرات.',
    en: 'The injected vaccine is not given to anyone who had a severe allergic reaction to a previous dose or to one of its ingredients, including phenoxyethanol, formaldehyde, neomycin, streptomycin and polymyxin B. Anyone moderately or severely ill should postpone it. Little is known about its risks in pregnancy, so it is given only when clearly needed or if the pregnant woman is at risk of infection, and with caution in breastfeeding. HIV infection is not a barrier to the injected vaccine, and for people with weak immunity the injection, not the drops, is the suitable choice.'
  },
  updated: '2026-09-11',
  src: [
    'https://www.cdc.gov/vaccines/hcp/current-vis/polio.html',
    'https://www.who.int/news-room/fact-sheets/detail/poliomyelitis',
    'https://polioeradication.org/about-polio/the-virus/vaccine-derived-polioviruses/',
    'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=34a647f5-8728-451b-b918-94c8acd15974&type=display',
    'https://www.cdc.gov/yellow-book/hcp/africa-middle-east/saudi-arabia-hajj-and-umrah-pilgrimages.html'
  ]
};

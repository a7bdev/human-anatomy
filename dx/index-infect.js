/* ============================================================
   موسوعة الأمراض — فهرس الأمراض المعدية
   dx/index-infect.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-infect.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- عدوى الجهاز التنفّسي ---------------- */

DISEASES.push({
  id: 'influenza', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'الإنفلونزا', en: 'Influenza (flu)' },
  short: {
    ar: 'عدوى فيروسية تضرب فجأة في ساعات: حمّى وألم في العضلات وإرهاق يُقعد صاحبه في الفراش. أشدّ بكثير من نزلة البرد، ولا ينفع فيها المضاد الحيوي.',
    en: 'A viral infection that strikes suddenly within hours: fever, aching muscles and an exhaustion that puts you to bed. Far heavier than a common cold, and antibiotics do nothing for it.'
  },
  organs: ['bronchi', 'alveoli', 'pharynx', 'lungs', 'immunity'],
  aliases: [],
  keywords: { ar: ['انفلونزا', 'الأنفلونزا', 'حمى موسمية', 'لقاح الإنفلونزا'], en: ['influenza', 'flu', 'seasonal flu'] }
});

DISEASES.push({
  id: 'covid19', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'كوفيد-19', en: 'COVID-19' },
  short: {
    ar: 'عدوى فيروسية تنفّسية تتراوح بين رشح خفيف والتهاب رئوي شديد، وتتميّز باحتمال فقد حاسّتَي الشمّ والذوق وبأعراض قد تطول أسابيع بعد الشفاء.',
    en: 'A respiratory viral infection ranging from a mild cold to severe pneumonia, marked by possible loss of smell and taste and by symptoms that may linger for weeks after recovery.'
  },
  organs: ['alveoli', 'lungs', 'bronchi', 'clotting', 'nose', 'immunity'],
  aliases: [],
  keywords: { ar: ['كورونا', 'كوفيد', 'فقد حاسة الشم', 'كوفيد طويل الأمد'], en: ['COVID-19', 'coronavirus', 'SARS-CoV-2', 'long COVID'] }
});

DISEASES.push({
  id: 'common-cold', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'نزلة البرد', en: 'Common cold' },
  short: {
    ar: 'أكثر عدوى يصاب بها الإنسان في حياته: رشح واحتقان وعطاس وألم خفيف في الحلق، تبدأ بالتدرّج وتُشفى وحدها خلال أسبوع تقريباً بلا أي دواء يقتل الفيروس.',
    en: 'The commonest infection a person ever gets: a runny blocked nose, sneezing and a mildly sore throat. It begins gradually and clears on its own in about a week, with no medicine that kills the virus.'
  },
  organs: ['nose', 'pharynx', 'sinuses', 'immunity'],
  aliases: [],
  keywords: { ar: ['الزكام', 'الرشح', 'برد', 'احتقان الأنف'], en: ['common cold', 'coryza', 'runny nose'] }
});

DISEASES.push({
  id: 'pertussis', group: 'infection', tier: 'rare', emergency: false,
  name: { ar: 'السعال الديكي (الشاهوق)', en: 'Whooping cough (pertussis)' },
  short: {
    ar: 'عدوى بكتيرية تُحدث نوبات سعال متلاحقة تقطع النفس وتنتهي بشهقة صافرة، وتستمرّ أسابيع طويلة. خطرها الأكبر على الرضّع، ويقي منها اللقاح.',
    en: 'A bacterial infection causing bursts of coughing that take the breath away and end in a whooping gasp, lasting many weeks. Its greatest danger is to infants, and the vaccine prevents it.'
  },
  organs: ['bronchi', 'lungs', 'alveoli', 'pharynx', 'immunity'],
  aliases: [],
  keywords: { ar: ['الشاهوق', 'سعال ديكي', 'سعال المئة يوم', 'لقاح الثلاثي'], en: ['pertussis', 'whooping cough', 'DTaP'] }
});

/* ---------------- أمراض الطفولة الفيروسية ---------------- */

DISEASES.push({
  id: 'measles', group: 'infection', tier: 'rare', emergency: false,
  name: { ar: 'الحصبة', en: 'Measles' },
  short: {
    ar: 'من أشدّ الفيروسات عدوى على وجه الأرض: حمّى عالية وسعال وعين دامعة، ثم طفح أحمر ينزل من الوجه إلى الجسم. تمحو جزءاً من الذاكرة المناعية سنوات بعدها، ويمنعها اللقاح.',
    en: 'One of the most contagious viruses on earth: high fever, cough and watering eyes, then a red rash spreading from the face downward. It erases part of the immune memory for years afterwards, and the vaccine prevents it.'
  },
  organs: ['skin', 'lungs', 'pharynx', 'lymph-node', 'immunity'],
  aliases: [],
  keywords: { ar: ['حصبة', 'طفح الحصبة', 'لقاح الثلاثي الفيروسي'], en: ['measles', 'rubeola', 'MMR'] }
});

DISEASES.push({
  id: 'chickenpox-shingles', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'جدري الماء والحزام الناري', en: 'Chickenpox and shingles' },
  short: {
    ar: 'فيروس واحد بوجهين: يُحدث في الطفولة حويصلات حاكّة منتشرة، ثم يكمن في العقد العصبية عمراً كاملاً ويعود عند ضعف المناعة شريطاً مؤلماً على مسار عصب واحد.',
    en: 'One virus with two faces: in childhood it raises itchy blisters all over, then lies dormant in the nerve ganglia for a lifetime and returns, when immunity dips, as a painful band along a single nerve.'
  },
  organs: ['skin', 'peripheral-nerve', 'skin-receptors', 'spinal-cord', 'immunity'],
  aliases: [],
  keywords: { ar: ['الجدري المائي', 'الحماق', 'الحزام الناري', 'القوباء المنطقية', 'الزنّار'], en: ['chickenpox', 'varicella', 'shingles', 'herpes zoster'] }
});

DISEASES.push({
  id: 'mumps', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'النكاف (أبو دغيم)', en: 'Mumps' },
  short: {
    ar: 'فيروس يهاجم الغدد اللعابية فينتفخ الخدّ أمام الأذن وتحتها ويؤلم عند المضغ. أغلب الحالات تُشفى وحدها، لكنه قد يمتدّ للخصية أو السحايا، ويقي منه اللقاح.',
    en: 'A virus that attacks the salivary glands, swelling the cheek in front of and below the ear and hurting on chewing. Most cases clear on their own, but it can reach the testis or the meninges; the vaccine prevents it.'
  },
  organs: ['salivary-glands', 'testis', 'meninges', 'immunity'],
  aliases: ['النكاف'],
  keywords: { ar: ['أبو دغيم', 'أبو كعب', 'ورم الغدة النكفية'], en: ['mumps', 'parotitis', 'MMR'] }
});

/* ---------------- عدوى الكبد والدم المنقولة ---------------- */

DISEASES.push({
  id: 'hepatitis-a', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'التهاب الكبد الوبائي A', en: 'Hepatitis A' },
  short: {
    ar: 'فيروس ينتقل بالماء والطعام الملوّثين فيلتهب الكبد ويصفرّ الجلد والعين. ثقيل على صاحبه أسابيع، لكنه لا يصير مزمناً أبداً ويترك مناعة دائمة.',
    en: 'A virus carried by contaminated water and food that inflames the liver and yellows the skin and eyes. It is heavy for weeks, but it never becomes chronic and leaves lifelong immunity.'
  },
  organs: ['liver', 'liver-lobule', 'gallbladder', 'immunity'],
  aliases: [],
  keywords: { ar: ['اليرقان المعدي', 'الصفار', 'أبو صفار', 'التهاب كبد أ'], en: ['hepatitis A', 'HAV', 'infectious jaundice'] }
});

DISEASES.push({
  id: 'hiv', group: 'infection', tier: 'rare', emergency: false,
  name: { ar: 'فيروس نقص المناعة البشري', en: 'HIV' },
  short: {
    ar: 'فيروس يستهدف خلايا المناعة القائدة فيهدم دفاع الجسم تدريجياً على مدى سنوات صامتة. صار اليوم مرضاً مزمناً يُضبط بالدواء، ومن يلتزم به لا ينقل العدوى.',
    en: 'A virus that targets the commanding immune cells, dismantling the body\'s defence over silent years. It is now a chronic condition controlled by medication, and someone on stable treatment does not pass it on.'
  },
  organs: ['immunity', 'lymph-node', 'lymphatic', 'thymus', 'blood'],
  aliases: [],
  keywords: { ar: ['الإيدز', 'اتش اي في', 'نقص المناعة المكتسب'], en: ['HIV', 'AIDS', 'antiretroviral'] }
});

/* ---------------- الحمّيات المنقولة بالحشرات والماء ---------------- */

DISEASES.push({
  id: 'malaria', group: 'infection', tier: 'rare', emergency: true,
  name: { ar: 'الملاريا', en: 'Malaria' },
  short: {
    ar: 'طفيلي تنقله بعوضة ليلية فيتكاثر داخل كريات الدم الحمراء ويفجّرها، فتأتي نوبات رعشة وحمّى وعرق متكرّرة مع فقر دم وتضخّم الطحال. نوع منها قاتل خلال أيام.',
    en: 'A parasite carried by a night-biting mosquito that multiplies inside red blood cells and bursts them, bringing repeated bouts of shivering, fever and sweating with anaemia and an enlarged spleen. One species can kill within days.'
  },
  organs: ['blood', 'spleen', 'liver', 'brain', 'immunity'],
  aliases: [],
  keywords: { ar: ['البرداء', 'حمى المستنقعات', 'بعوض الأنوفيلة'], en: ['malaria', 'Plasmodium', 'falciparum'] }
});

DISEASES.push({
  id: 'dengue', group: 'infection', tier: 'rare', emergency: false,
  name: { ar: 'حمى الضنك', en: 'Dengue fever' },
  short: {
    ar: 'فيروس تنقله بعوضة نهارية فيسبّب حمّى مرتفعة وألماً غائراً خلف العينين وفي العظام والمفاصل. أخطر مراحله ليست ذروة الحمّى بل يوم انكسارها.',
    en: 'A virus carried by a day-biting mosquito, causing high fever with deep pain behind the eyes and in the bones and joints. Its most dangerous phase is not the peak of the fever but the day it breaks.'
  },
  organs: ['blood', 'clotting', 'vessels', 'liver', 'immunity'],
  aliases: [],
  keywords: { ar: ['الضنك', 'حمى تكسير العظام', 'بعوض الزاعجة'], en: ['dengue', 'breakbone fever', 'Aedes'] }
});

DISEASES.push({
  id: 'typhoid', group: 'infection', tier: 'rare', emergency: false,
  name: { ar: 'الحمى التيفية (التيفوئيد)', en: 'Typhoid fever' },
  short: {
    ar: 'بكتيريا تُبتلع مع ماء أو طعام ملوّث فتخترق جدار الأمعاء الدقيقة وتدخل الدم، فترتفع الحرارة درجةً كل يوم أسبوعاً كاملاً مع صداع وخمول وألم بطن.',
    en: 'A bacterium swallowed in contaminated water or food that breaches the wall of the small intestine and enters the blood, so the temperature climbs a step each day for a whole week, with headache, lethargy and abdominal pain.'
  },
  organs: ['small-intestine', 'villi', 'spleen', 'gallbladder', 'immunity'],
  aliases: [],
  keywords: { ar: ['التيفوئيد', 'حمى معوية', 'السلمونيلا التيفية'], en: ['typhoid', 'enteric fever', 'Salmonella typhi'] }
});

/* ---------------- عدوى الجهاز الهضمي ---------------- */

DISEASES.push({
  id: 'food-poisoning', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'التسمّم الغذائي', en: 'Food poisoning' },
  short: {
    ar: 'غثيان وقيء وإسهال ومغص تبدأ بعد ساعات من أكلة بعينها، سببها جراثيم أو سمومها في طعام لم يُحفظ جيداً. أغلبها يمرّ في يومين، والخطر الحقيقي هو الجفاف.',
    en: 'Nausea, vomiting, diarrhoea and cramps beginning hours after one particular meal, caused by germs or their toxins in badly stored food. Most pass within two days; the real danger is dehydration.'
  },
  organs: ['stomach', 'small-intestine', 'villi', 'large-intestine', 'immunity'],
  aliases: ['التهاب المعدة والأمعاء'],
  keywords: { ar: ['النزلة المعوية', 'إسهال حاد', 'تسمم طعام', 'الجفاف'], en: ['food poisoning', 'gastroenteritis', 'foodborne illness'] }
});

DISEASES.push({
  id: 'h-pylori', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'جرثومة المعدة الحلزونية', en: 'Helicobacter pylori infection' },
  short: {
    ar: 'بكتيريا لولبية تعيش تحت طبقة المخاط في المعدة سنوات بلا ضجيج، وهي وراء أغلب قرح المعدة والاثني عشر، وتُعالَج بحيث تُستأصل نهائياً لا أن تُهدَّأ.',
    en: 'A spiral bacterium that lives under the mucus layer of the stomach for years without a sound. It lies behind most stomach and duodenal ulcers, and treatment aims to eradicate it entirely, not merely soothe it.'
  },
  organs: ['stomach', 'small-intestine', 'immunity'],
  aliases: [],
  keywords: { ar: ['الملوية البوابية', 'جرثومة المعدة', 'حرقة المعدة المزمنة'], en: ['H. pylori', 'Helicobacter pylori', 'stomach bacteria'] }
});

DISEASES.push({
  id: 'intestinal-worms', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'الديدان المعوية', en: 'Intestinal worms' },
  short: {
    ar: 'طفيليات تسكن الأمعاء وتقتات ممّا يأكله صاحبها. أشيعها عند الأطفال الدودة الدبّوسية التي تُحدث حكّة شرجية ليلية مزعجة، وبعضها يسبّب فقر دم بلا أي عرض هضمي.',
    en: 'Parasites that live in the gut and feed on what their host eats. The commonest in children is the pinworm, which causes a maddening night-time anal itch; some kinds cause anaemia with no digestive symptom at all.'
  },
  organs: ['small-intestine', 'villi', 'large-intestine', 'anorectal', 'blood'],
  aliases: [],
  keywords: { ar: ['الدودة الدبوسية', 'حكة الشرج ليلاً', 'ديدان الأطفال', 'الإسكارس'], en: ['intestinal worms', 'pinworm', 'helminths', 'deworming'] }
});

/* ---------------- عدوى الجلد والأغشية ---------------- */

DISEASES.push({
  id: 'impetigo', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'القوباء (العدوى الجلدية البكتيرية)', en: 'Impetigo' },
  short: {
    ar: 'بقع حمراء حول الأنف والفم تتقشّر إلى قشور عسلية اللون، شديدة العدوى بين الأطفال باللمس والمناشف. سطحية ولا تترك ندبة، لكنها لا تُشفى بلا علاج.',
    en: 'Red patches around the nose and mouth that crust over in a honey colour, highly contagious among children through touch and shared towels. It is superficial and leaves no scar, but it does not clear without treatment.'
  },
  organs: ['skin', 'hair-follicle', 'lymph-node', 'immunity'],
  aliases: [],
  keywords: { ar: ['القوباء المعدية', 'قشور عسلية', 'عدوى جلدية عند الأطفال'], en: ['impetigo', 'school sores', 'honey crust'] }
});

DISEASES.push({
  id: 'herpes-oral', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'الهربس الفموي (قرحة البرد)', en: 'Oral herpes (cold sores)' },
  short: {
    ar: 'حويصلات مؤلمة على حافة الشفة يسبقها وخز وحرقان بساعات. الفيروس يكمن في عقدة عصبية بالوجه بعد أول إصابة، ويستيقظ مع الحمّى أو الإجهاد أو الشمس.',
    en: 'Painful blisters at the lip margin, preceded by hours of tingling and burning. After the first infection the virus lies dormant in a facial nerve ganglion and wakes with fever, stress or sun.'
  },
  organs: ['lips', 'peripheral-nerve', 'cranial-nerves', 'skin'],
  aliases: ['قرحة البرد (الحلأ)'],
  keywords: { ar: ['حبة البرد', 'الحلأ البسيط', 'قرح الشفة المتكررة'], en: ['cold sore', 'herpes simplex', 'HSV-1', 'fever blister'] }
});

DISEASES.push({
  id: 'hpv-warts', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'الثآليل وفيروس الورم الحليمي', en: 'Warts and human papillomavirus' },
  short: {
    ar: 'نتوءات جلدية خشنة يسبّبها فيروس يصيب الطبقة السطحية من الجلد. أغلبها بريء ويزول وحده، لكن أنواعاً منه تصيب عنق الرحم ويقي منها لقاح يُعطى قبل البلوغ.',
    en: 'Rough skin growths caused by a virus infecting the surface layer of the skin. Most are harmless and disappear by themselves, but certain types affect the cervix, and a vaccine given before puberty prevents them.'
  },
  organs: ['skin', 'hand', 'foot', 'female-reproductive', 'immunity'],
  aliases: [],
  keywords: { ar: ['الثؤلول', 'عين السمكة', 'لقاح عنق الرحم', 'HPV'], en: ['warts', 'HPV', 'verruca', 'plantar wart'] }
});

DISEASES.push({
  id: 'conjunctivitis', group: 'infection', tier: 'common', emergency: false,
  name: { ar: 'التهاب الملتحمة المعدي (الرمد)', en: 'Infectious conjunctivitis (pink eye)' },
  short: {
    ar: 'احمرار في بياض العين مع دمع وإفراز وإحساس برمل تحت الجفن. شديد العدوى باليد والمناشف، وأغلبه فيروسي يُشفى وحده ولا ينفع فيه المضاد الحيوي.',
    en: 'Redness of the white of the eye with tearing, discharge and a feeling of sand under the lid. It spreads easily by hand and towel; most cases are viral, clear on their own, and gain nothing from antibiotics.'
  },
  organs: ['eye', 'immunity'],
  aliases: [],
  keywords: { ar: ['الرمد', 'العين الوردية', 'احمرار العين', 'رمد صديدي'], en: ['conjunctivitis', 'pink eye', 'red eye'] }
});

/* ---------------- انفلات الاستجابة للعدوى ---------------- */

DISEASES.push({
  id: 'sepsis', group: 'infection', tier: 'common', emergency: true,
  name: { ar: 'تعفّن الدم (الإنتان)', en: 'Sepsis' },
  short: {
    ar: 'ليس انتشار الجرثومة وحده، بل استجابة الجسم لها وقد انفلتت فصارت تهاجم أعضاءه: يهبط الضغط وتتوقّف الكلى ويتخبّط الوعي. حالة تُقاس بالساعات لا بالأيام.',
    en: 'Not the spread of the germ alone, but the body\'s response to it running out of control and turning on its own organs: blood pressure falls, the kidneys stop and consciousness clouds. It is measured in hours, not days.'
  },
  organs: ['immunity', 'blood', 'vessels', 'kidneys', 'lungs', 'circulation'],
  aliases: ['الإنتان (تسمم الدم)'],
  keywords: { ar: ['تسمم الدم', 'الإنتان', 'الصدمة الإنتانية', 'هبوط الضغط مع الحمى'], en: ['sepsis', 'septic shock', 'blood poisoning'] }
});

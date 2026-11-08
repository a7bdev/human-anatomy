/* ============================================================
   موسوعة الأدوية — فهرس دفعة الطفيليات (٢): الليشمانيا والملاريا
   rx/index-para2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   كل بطاقة كُتبت من نشرة رسمية مفتوحة وقت الكتابة — المصادر في rx-para2.js
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* فصائل هذه الدفعة — تُضاف فقط إن لم تكن معرّفة (دفعات أخرى قد تسبقنا) */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    antileishmanial: { ar: 'مضادات الليشمانيا', en: 'Antileishmanials' },
    antimalarial:    { ar: 'مضادات الملاريا',   en: 'Antimalarials' },
    antiprotozoal:   { ar: 'مضادات الأوالي والطفيليات', en: 'Antiprotozoals' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'infection'; } }
  }
})();

DRUGS.push({
  id: 'paromomycin',
  cls: 'antiprotozoal',
  otc: false,
  alert: true,
  name:  { ar: 'الباروموميسين', en: 'Paromomycin' },
  short: {
    ar: 'مضاد حيوي من الأمينوغليكوزيدات يُستعمل ضد الطفيليات. حبّته لا تكاد تُمتصّ فتعمل داخل الأمعاء وحدها، ولذلك تنفع في الأميبا المعوية وتعجز عنها إذا بلغت الكبد. وله حقنة عضلية تُستعمل في الليشمانيا.',
    en: 'An aminoglycoside antibiotic used against parasites. Taken by mouth it is barely absorbed, so it works inside the gut alone: useful for intestinal amoebae and useless once they reach the liver. An intramuscular form is used in leishmaniasis.'
  },
  brands: ['هيوماتين'],
  uses: ['amebiasis', 'hepatic-encephalopathy', 'leishmaniasis'],
  keywords: { ar: ['أميبا', 'زحار', 'ليشمانيا', 'باروموميسين', 'أمينوغليكوزيد'], en: ['humatin', 'aminosidine', 'amoebiasis', 'aminoglycoside', 'leishmaniasis'] }
});

DRUGS.push({
  id: 'miltefosine',
  cls: 'antileishmanial',
  otc: false,
  alert: true,
  name:  { ar: 'الميلتيفوسين', en: 'Miltefosine' },
  short: {
    ar: 'أول دواء يُبلع لعلاج الليشمانيا بأشكالها الثلاثة، بعد أن كان العلاج حقناً وحده. يحمل تحذيراً مؤطّراً: يضرّ الجنين، فلا يُعطى لحامل ويُشترط منع الحمل أثناءه وبعده بأشهر.',
    en: 'The first oral medicine for leishmaniasis in its three forms, after treatment had been injections alone. It carries a boxed warning: it harms the fetus, so it is not given in pregnancy, and contraception is required during treatment and for months after.'
  },
  brands: ['إمبافيدو'],
  uses: ['leishmaniasis'],
  keywords: { ar: ['ليشمانيا', 'حبّة بغداد', 'كالازار', 'ميلتيفوسين'], en: ['impavido', 'kala-azar', 'visceral leishmaniasis', 'alkylphosphocholine'] }
});

DRUGS.push({
  id: 'meglumine-antimoniate',
  cls: 'antileishmanial',
  otc: false,
  alert: true,
  name:  { ar: 'أنتيمونات الميجلومين', en: 'Meglumine antimoniate' },
  short: {
    ar: 'حقنة أنتيمون خماسي التكافؤ، من أقدم علاجات الليشمانيا: تُحقن في العضل أو في قاعدة القرحة نفسها. تطيل فترة القلب الكهربائية وقد تسبّب اضطراب نظم خطيراً، فالتخطيط مراقَب.',
    en: 'An injection of pentavalent antimony, one of the oldest leishmaniasis treatments: given into the muscle or into the base of the sore itself. It prolongs the heart QT interval and can cause serious arrhythmia, so the ECG is monitored.'
  },
  brands: ['جلوكانتيم'],
  uses: ['leishmaniasis'],
  keywords: { ar: ['ليشمانيا', 'حبّة بغداد', 'أنتيمون', 'جلوكانتيم', 'كالازار'], en: ['glucantime', 'pentavalent antimony', 'kala-azar', 'antimonial'] }
});

DRUGS.push({
  id: 'sodium-stibogluconate',
  cls: 'antileishmanial',
  otc: false,
  alert: true,
  name:  { ar: 'ستيبوجلوكونات الصوديوم', en: 'Sodium stibogluconate' },
  short: {
    ar: 'الأنتيمون الخماسي الآخر، يُحقن في العضل أو الوريد أو داخل القرحة. حقنه الوريدي يُمرَّر عبر مرشّح ويُعطى ببطء، ويوقَف فوراً عند السعال أو القيء أو ألم خلف عظمة الصدر.',
    en: 'The other pentavalent antimony, given into muscle, vein or the sore itself. The intravenous dose is passed through a filter and given slowly, and is stopped at once if coughing, vomiting or pain behind the breastbone occurs.'
  },
  brands: ['بنتوستام'],
  uses: ['leishmaniasis'],
  keywords: { ar: ['ليشمانيا', 'أنتيمون', 'بنتوستام', 'كالازار', 'حبّة بغداد'], en: ['pentostam', 'pentavalent antimony', 'kala-azar', 'antimonial'] }
});

DRUGS.push({
  id: 'artemether',
  cls: 'antimalarial',
  otc: false,
  alert: true,
  name:  { ar: 'الأرتيميثر', en: 'Artemether' },
  short: {
    ar: 'مشتقّ من الأرتيميسينين يقتل طفيل الملاريا في الدم بسرعة نادرة. يُحقن في العضل كإسعاف، ولا يُعطى وحده في الحبوب أبداً: منظمة الصحة تطالب بسحب الأرتيميسينين المفرد من الأسواق.',
    en: 'An artemisinin derivative that kills the malaria parasite in the blood with rare speed. It is injected into muscle as emergency treatment, and is never given alone as tablets: WHO calls for single-drug artemisinin to be withdrawn from markets.'
  },
  brands: ['باليوثر', 'أرتيميثر حقن'],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا', 'أرتيميثر', 'أرتيميسينين', 'حقنة عضل'], en: ['artemisinin', 'paluther', 'severe malaria', 'intramuscular'] }
});

DRUGS.push({
  id: 'artemether-lumefantrine',
  cls: 'antimalarial',
  otc: false,
  alert: false,
  name:  { ar: 'الأرتيميثر مع اللوميفانترين', en: 'Artemether + lumefantrine' },
  short: {
    ar: 'أشهر خلطة علاج الملاريا غير المعقّدة: الأرتيميثر يكنس أغلب الطفيل بسرعة واللوميفانترين يبقى طويلاً ليقتل ما تخلّف. تُبلع مع الأكل وإلا لم تُمتصّ ورجعت الحمّى.',
    en: 'The best known combination for uncomplicated malaria: artemether sweeps away most of the parasite fast, while lumefantrine lingers to kill what is left. It must be taken with food, or it is not absorbed and the fever returns.'
  },
  brands: ['كوارتيم', 'رياميت'],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا', 'كوارتيم', 'أرتيميثر', 'لوميفانترين'], en: ['coartem', 'riamet', 'ACT', 'falciparum'] }
});

DRUGS.push({
  id: 'artesunate',
  cls: 'antimalarial',
  otc: false,
  alert: true,
  name:  { ar: 'الأرتيسونات', en: 'Artesunate' },
  short: {
    ar: 'الحقنة الوريدية الأولى في الملاريا الشديدة، تسبق كل شيء ثم يُكمَل العلاج بحبوب. لها ظلّ متأخّر: انحلال دم يظهر بعد أسبوع أو أكثر، ولذلك تُراقَب الدماء أربعة أسابيع.',
    en: 'The first intravenous treatment in severe malaria, given before anything else and then completed with oral medicine. It has a late shadow: haemolysis appearing a week or more afterwards, so the blood is watched for four weeks.'
  },
  brands: ['أرتيسون', 'أرتيسونات حقن'],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا شديدة', 'أرتيسونات', 'وريدي', 'انحلال دم'], en: ['artesun', 'severe malaria', 'intravenous', 'delayed haemolysis'] }
});

DRUGS.push({
  id: 'artesunate-amodiaquine',
  cls: 'antimalarial',
  otc: false,
  alert: true,
  name:  { ar: 'الأرتيسونات مع الأمودياكين', en: 'Artesunate + amodiaquine' },
  short: {
    ar: 'خلطة ملاريا واسعة الانتشار في غرب أفريقيا. شريكها الأمودياكين هو موضع الحذر: التهاب كبد شديد وانهيار كريات الدم البيضاء، ولذلك مُنع منعاً باتاً كوقاية من الملاريا.',
    en: 'A malaria combination widely used in West Africa. Its partner amodiaquine is the point of caution: severe hepatitis and collapse of the white cells, which is why it is absolutely forbidden as malaria prophylaxis.'
  },
  brands: ['كوارسوكام', 'أساك وينثروب'],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا', 'أمودياكين', 'أرتيسونات', 'كوارسوكام'], en: ['coarsucam', 'ASAQ', 'amodiaquine', 'ACT'] }
});

DRUGS.push({
  id: 'artesunate-mefloquine',
  cls: 'antimalarial',
  otc: false,
  alert: true,
  name:  { ar: 'الأرتيسونات مع الميفلوكين', en: 'Artesunate + mefloquine' },
  short: {
    ar: 'خلطة ملاريا شريكها الميفلوكين طويل البقاء. أشهر ما يُخشى منه أثره على العقل والأعصاب: دوار شديد واضطراب نوم وكوابيس، وفي النادر اكتئاب أو ذهان أو تشنّج.',
    en: 'A malaria combination whose partner mefloquine is long-lasting. What is most feared is its effect on the mind and nerves: severe dizziness, disturbed sleep and nightmares, and rarely depression, psychosis or seizures.'
  },
  brands: ['أرتيكوين'],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا', 'ميفلوكين', 'أرتيسونات', 'دوار'], en: ['ASMQ', 'artequin', 'mefloquine', 'ACT'] }
});

DRUGS.push({
  id: 'artesunate-pyronaridine',
  cls: 'antimalarial',
  otc: false,
  alert: true,
  name:  { ar: 'الأرتيسونات مع البيروناريدين', en: 'Artesunate + pyronaridine' },
  short: {
    ar: 'خلطة ملاريا حديثة تصلح للنوعين الشائعين معاً. ثمنها انتباه للكبد: ترتفع إنزيماته عند بعض من يأخذها، ولذلك تُمنع على من فيه علامة أذى كبدي أو مرض كبد شديد.',
    en: 'A newer malaria combination that works against both of the common species. Its price is attention to the liver: enzymes rise in some who take it, so it is forbidden to anyone with signs of liver injury or known severe liver disease.'
  },
  brands: ['بيراماكس'],
  uses: ['malaria'],
  keywords: { ar: ['ملاريا', 'بيروناريدين', 'أرتيسونات', 'بيراماكس', 'كبد'], en: ['pyramax', 'pyronaridine', 'vivax', 'ACT'] }
});

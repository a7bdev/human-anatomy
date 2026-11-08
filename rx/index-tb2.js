/* ============================================================
   موسوعة الأدوية — فهرس دفعة tb2
   (الموكسيفلوكساسين · أدوية الجذام: الكلوفازيمين والدابسون ·
    المميّعات: الوارفارين والدابيجاتران والإينوكسابارين والهيبارين ·
    عكس أثرها: البروتامين وفيتامين ك١ · حمض الترانيكساميك)
   rx/index-tb2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   كل بطاقة كُتبت من نشرة رسمية مفتوحة وقت الكتابة — المصادر في rx-tb2.js
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* فصائل هذه الدفعة — تُضاف فقط إن لم تكن معرّفة (دفعات أخرى قد تسبقنا) */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'antitubercular':         { ar: 'مضادات السلّ والمتفطّرات',      en: 'Antituberculosis and antimycobacterial agents' },
    'antibiotic-quinolone':   { ar: 'مضادات حيوية — فلوروكينولونات', en: 'Antibiotics — fluoroquinolones' },
    'anticoagulant':          { ar: 'مميّعات الدم (مضادات التخثّر)',  en: 'Anticoagulants' },
    'anticoagulant-reversal': { ar: 'عاكسات أثر المميّعات',           en: 'Anticoagulant reversal agents' },
    'antifibrinolytic':       { ar: 'مضادات انحلال الجلطة (موقفات النزف)', en: 'Antifibrinolytics' }
  };
  var grp = {
    'antitubercular': 'infection', 'antibiotic-quinolone': 'infection',
    'anticoagulant': 'heart', 'anticoagulant-reversal': 'heart', 'antifibrinolytic': 'heart'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
})();

DRUGS.push({
  id: 'moxifloxacin',
  cls: 'antibiotic-quinolone',
  otc: false,
  alert: true,
  name:  { ar: 'الموكسيفلوكساسين', en: 'Moxifloxacin' },
  short: {
    ar: 'مضاد حيوي من الفلوروكينولونات للالتهاب الرئوي والجيوب وعدوى الجلد والبطن، وله دور في السلّ المقاوم وقطرة للرمد. يحمل تحذيرات رسمية عن الأوتار والأعصاب والدماغ وإيقاع القلب.',
    en: 'A fluoroquinolone antibiotic for pneumonia, sinus, skin and abdominal infections, with a role in resistant tuberculosis and an eye drop for conjunctivitis. It carries official warnings about tendons, nerves, the brain and heart rhythm.'
  },
  brands: ['أفالوكس', 'أفيلوكس', 'فيجاموكس'],
  uses: ['pneumonia', 'sinusitis', 'chronic-bronchitis', 'cellulitis', 'skin-abscess', 'conjunctivitis', 'tb'],
  keywords: { ar: ['كينولون', 'موكسيفلوكساسين', 'أفالوكس', 'مضاد حيوي', 'قطرة عين'], en: ['moxifloxacin', 'fluoroquinolone', 'Avelox', 'Avalox', 'Vigamox'] }
});

DRUGS.push({
  id: 'clofazimine',
  cls: 'antitubercular',
  otc: false,
  alert: false,
  name:  { ar: 'الكلوفازيمين', en: 'Clofazimine' },
  short: {
    ar: 'صبغة حمراء مضادة للمتفطّرات، ركن في علاج الجذام المتعدّد الأدوية ودواء للسلّ المقاوم. يلوّن الجلد وسوائل الجسم بلون وردي إلى بنّي يزول ببطء، ويطيل فترة القلب.',
    en: 'A red antimycobacterial dye, a pillar of multidrug therapy for leprosy and a drug for resistant tuberculosis. It colours the skin and body fluids pink to brown, fading slowly, and lengthens the heart interval.'
  },
  brands: ['لامبرين'],
  uses: ['tb'],
  keywords: { ar: ['جذام', 'سل مقاوم', 'كلوفازيمين', 'لامبرين', 'تلون الجلد'], en: ['clofazimine', 'Lamprene', 'leprosy', 'Hansen disease', 'MDR-TB'] }
});

DRUGS.push({
  id: 'dapsone',
  cls: 'antitubercular',
  otc: false,
  alert: true,
  name:  { ar: 'الدابسون', en: 'Dapsone' },
  short: {
    ar: 'مضاد جرثومي من السلفونات لعلاج الجذام والتهاب الجلد الحلئي الشكل، وجل موضعي لحبّ الشباب، ويقي من عدوى المتكيّسة الرئوية والمقوّسات. خطره على كريات الدم ويشتدّ مع نقص خميرة ج٦ب د.',
    en: 'A sulfone antibacterial for leprosy and dermatitis herpetiformis, a topical gel for acne, and a preventive against pneumocystis and toxoplasma infection. Its danger is to the blood cells, worse with G6PD deficiency.'
  },
  brands: ['دابسون', 'أكزون'],
  uses: ['acne', 'hiv', 'toxoplasmosis'],
  keywords: { ar: ['جذام', 'دابسون', 'سلفون', 'التهاب الجلد الحلئي', 'فوال'], en: ['dapsone', 'DDS', 'sulfone', 'Aczone', 'dermatitis herpetiformis'] }
});

DRUGS.push({
  id: 'warfarin',
  cls: 'anticoagulant',
  otc: false,
  alert: true,
  name:  { ar: 'الوارفارين', en: 'Warfarin' },
  short: {
    ar: 'مميّع فموي قديم يعاكس فيتامين ك، يعالج الجلطات ويقي منها في الرجفان الأذيني والصمامات الصناعية. يحتاج تحليل INR منتظماً، ويتأثّر بالطعام والأعشاب وأدوية كثيرة، وخطره الأول النزف.',
    en: 'An established oral blood thinner that opposes vitamin K, treating and preventing clots in atrial fibrillation and with artificial valves. It needs regular INR tests, is affected by food, herbs and many medicines, and its main danger is bleeding.'
  },
  brands: ['ماريفان', 'كومادين', 'وارفارين'],
  uses: ['dvt', 'pe', 'afib', 'valve-disease', 'mi', 'stroke'],
  keywords: { ar: ['مميع', 'مسيل الدم', 'جلطة', 'وارفارين', 'ماريفان', 'تحليل السيولة'], en: ['warfarin', 'Coumadin', 'Marevan', 'INR', 'anticoagulant', 'blood thinner'] }
});

DRUGS.push({
  id: 'dabigatran',
  cls: 'anticoagulant',
  otc: false,
  alert: true,
  name:  { ar: 'الدابيجاتران', en: 'Dabigatran' },
  short: {
    ar: 'مميّع فموي يثبّط الثرومبين مباشرة، يقي من السكتة في الرجفان الأذيني ويعالج الجلطات الوريدية، ولا يتأثّر بفيتامين ك. لا يُفتح كبسوله، ولا يصلح لمن عنده صمام معدني، ولإيقافه فجأة خطر.',
    en: 'An oral blood thinner that blocks thrombin directly, preventing stroke in atrial fibrillation and treating vein clots without routine clotting tests. Its capsule must not be opened, it is not for metal heart valves, and stopping it suddenly is dangerous.'
  },
  brands: ['براداكسا'],
  uses: ['afib', 'dvt', 'pe', 'stroke'],
  keywords: { ar: ['مميع', 'جلطة', 'رجفان', 'دابيجاتران', 'براداكسا'], en: ['dabigatran', 'Pradaxa', 'DOAC', 'thrombin inhibitor', 'anticoagulant'] }
});

DRUGS.push({
  id: 'enoxaparin',
  cls: 'anticoagulant',
  otc: false,
  alert: true,
  name:  { ar: 'الإينوكسابارين', en: 'Enoxaparin' },
  short: {
    ar: 'هيبارين منخفض الوزن الجزيئي يُحقن تحت جلد البطن، يقي من جلطات الساق بعد الجراحة وملازمة الفراش ويعالجها، ويُعطى في الذبحة غير المستقرّة والجلطة القلبية. أهمّ خطر: نزف قرب الحبل الشوكي مع التخدير النصفي.',
    en: 'A low molecular weight heparin injected under the skin of the belly, preventing and treating leg clots after surgery and bed rest, and given in unstable angina and heart attack. Key danger: bleeding near the spinal cord with spinal anaesthesia.'
  },
  brands: ['كليكسان', 'لوفينوكس'],
  uses: ['dvt', 'pe', 'angina', 'mi'],
  keywords: { ar: ['إبرة التمييع', 'حقنة البطن', 'كليكسان', 'إينوكسابارين', 'جلطة'], en: ['enoxaparin', 'Clexane', 'Lovenox', 'LMWH', 'low molecular weight heparin'] }
});

DRUGS.push({
  id: 'heparin-sodium',
  cls: 'anticoagulant',
  otc: false,
  alert: true,
  name:  { ar: 'الهيبارين', en: 'Heparin sodium' },
  short: {
    ar: 'مميّع سريع يُعطى بالوريد أو تحت الجلد في المستشفى غالباً، يعالج الجلطات ويمنعها أثناء الجراحة والغسيل الكلوي وفي الأنابيب الوريدية. يُراقب بالتحاليل، وقد يُسقط الصفائح إسقاطاً خطيراً.',
    en: 'A fast blood thinner given into a vein or under the skin, mostly in hospital, treating clots and preventing them during surgery, dialysis and in intravenous lines. It is watched with blood tests and can dangerously lower platelets.'
  },
  brands: ['هيبارين', 'هيبارين ليو'],
  uses: ['dvt', 'pe', 'afib', 'arterial-embolism'],
  keywords: { ar: ['هيبارين', 'مميع', 'جلطة', 'غسيل كلوي', 'نقص الصفائح'], en: ['heparin', 'unfractionated heparin', 'UFH', 'HIT', 'anticoagulant'] }
});

DRUGS.push({
  id: 'protamine-sulfate',
  cls: 'anticoagulant-reversal',
  otc: false,
  alert: true,
  name:  { ar: 'البروتامين', en: 'Protamine sulfate' },
  short: {
    ar: 'بروتين يلتصق بالهيبارين فيبطل مفعوله خلال دقائق، يُعطى بالوريد في المستشفى بعد جراحة القلب أو عند زيادة الهيبارين. قد يسبّب هبوطاً حادّاً في الضغط وتحسّساً شديداً.',
    en: 'A protein that binds heparin and cancels its effect within minutes, given into a vein in hospital after heart surgery or when there is too much heparin. It can cause a sharp fall in blood pressure and severe allergy.'
  },
  brands: ['بروتامين'],
  uses: [],
  keywords: { ar: ['ترياق الهيبارين', 'بروتامين', 'عكس التمييع'], en: ['protamine', 'heparin reversal', 'heparin antidote'] }
});

DRUGS.push({
  id: 'phytomenadione',
  cls: 'vitamin',
  otc: false,
  alert: false,
  name:  { ar: 'فيتامين ك١ (الفيتوميناديون)', en: 'Phytomenadione (Vitamin K1, phytonadione)' },
  short: {
    ar: 'فيتامين ك الذي يحتاجه الكبد لصنع عوامل التخثّر، يعكس زيادة الوارفارين ويعالج نقص فيتامين ك ويُعطى للمولود وقاية من النزف. حقنه بالوريد قد تسبّب تحسّساً قاتلاً.',
    en: 'The vitamin K the liver needs to make clotting factors; it reverses too much warfarin, treats vitamin K deficiency and is given to newborns to prevent bleeding. Its intravenous injection can cause fatal allergy.'
  },
  brands: ['كوناكيون', 'ميفيتون'],
  uses: ['obstructive-jaundice', 'lactose-celiac', 'ulcerative-colitis', 'cystic-fibrosis'],
  keywords: { ar: ['فيتامين ك', 'إبرة المولود', 'كوناكيون', 'ترياق الوارفارين'], en: ['vitamin K', 'phytonadione', 'phytomenadione', 'Konakion', 'warfarin reversal'] }
});

DRUGS.push({
  id: 'tranexamic-acid',
  cls: 'antifibrinolytic',
  otc: false,
  alert: false,
  name:  { ar: 'حمض الترانيكساميك', en: 'Tranexamic acid' },
  short: {
    ar: 'دواء بلا هرمونات يمنع تفكّك الجلطة فيخفّف النزف: غزارة الطمث والرعاف والنزف بعد قلع السنّ عند مرضى الهيموفيليا وبعد الولادة. يُتجنّب مع تاريخ الجلطات وحبوب منع الحمل المركّبة.',
    en: 'A hormone-free medicine that stops clots being broken down and so reduces bleeding: heavy periods, nosebleeds, bleeding after tooth removal in haemophilia and after childbirth. It is avoided with a history of clots and with combined contraceptive pills.'
  },
  brands: ['سيكلوكابرون', 'ترانسامين'],
  uses: ['heavy-periods', 'epistaxis', 'hemophilia', 'postpartum-hemorrhage'],
  keywords: { ar: ['غزارة الدورة', 'نزيف', 'رعاف', 'ترانيكساميك', 'سيكلوكابرون', 'كابرون'], en: ['tranexamic acid', 'TXA', 'Cyklokapron', 'Lysteda', 'antifibrinolytic'] }
});

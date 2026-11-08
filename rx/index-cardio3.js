/* ============================================================
   موسوعة الأدوية — فهرس دفعة القلب والضغط والدهون (٣)
   rx/index-cardio3.js   (يُحمَّل دائماً — خفيف)
   مدرّات حافظة للبوتاسيوم · مدرّ تناضحي · مضاد صفيحات ·
   مذيبات الخثرة · ستاتين · وأقراص القلب المركّبة (البوليبيل)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'spironolactone',
  cls: 'diuretic-potassium-sparing',
  otc: false,
  alert: true,
  name:  { ar: 'السبيرونولاكتون', en: 'Spironolactone' },
  short: {
    ar: 'مدرّ بول يخرج الماء والملح الزائد ولا يجرف معه البوتاسيوم، بل قد يرفعه إلى حدّ خطر. يُستعمل في قصور القلب واستسقاء الكبد وفرط الألدوستيرون، ومعه تحاليل دم متكرّرة.',
    en: 'A diuretic that removes excess water and salt without washing out potassium, and may in fact raise it to a dangerous level. Used in heart failure, fluid from liver disease and hyperaldosteronism, with repeated blood tests.'
  },
  brands: ['ألداكتون', 'سبيرونولاكتون'],
  uses: ['heart-failure', 'hypertension', 'cirrhosis', 'ascites-sbp', 'primary-aldosteronism', 'hypokalemia', 'glomerular-disease'],
  keywords: { ar: ['مدرّ بول', 'حافظ للبوتاسيوم', 'ألداكتون', 'مضاد الألدوستيرون'], en: ['aldactone', 'diuretic', 'potassium-sparing', 'aldosterone antagonist'] }
});

DRUGS.push({
  id: 'amiloride',
  cls: 'diuretic-potassium-sparing',
  otc: false,
  alert: true,
  name:  { ar: 'الأميلوريد', en: 'Amiloride' },
  short: {
    ar: 'مدرّ بول حافظ للبوتاسيوم يُضاف غالباً إلى مدرّ آخر ليعوّض ما يستنزفه من البوتاسيوم. يُستعمل في الضغط وقصور القلب لمن يخشى عليهم هبوط البوتاسيوم.',
    en: 'A potassium-sparing diuretic usually added to another diuretic to make up for the potassium that one washes out. Used in high blood pressure and heart failure in people at risk of a potassium fall.'
  },
  brands: ['ميداميور', 'موديوريتيك'],
  uses: ['hypertension', 'heart-failure', 'hypokalemia'],
  keywords: { ar: ['مدرّ بول', 'حافظ للبوتاسيوم', 'أميلوريد', 'موديوريتيك'], en: ['midamor', 'moduretic', 'potassium-sparing', 'diuretic'] }
});

DRUGS.push({
  id: 'mannitol',
  cls: 'diuretic-osmotic',
  otc: false,
  alert: true,
  name:  { ar: 'المانيتول', en: 'Mannitol' },
  short: {
    ar: 'سكّر كحولي يُعطى في الوريد داخل المستشفى فيسحب الماء من الدماغ المتورّم ومن العين مرتفعة الضغط إلى مجرى الدم، ثم تُخرجه الكلية. دواء منقذ وثقيل على الكلية معاً.',
    en: 'A sugar alcohol given intravenously in hospital: it pulls water out of a swollen brain and a high-pressure eye into the bloodstream, and the kidney then removes it. A life-saving drug that is also hard on the kidney.'
  },
  brands: ['أوسميترول', 'مانيتول'],
  uses: ['stroke', 'brain-tumor', 'glaucoma', 'aki', 'poisoning', 'cystic-fibrosis'],
  keywords: { ar: ['مدرّ تناضحي', 'ضغط الدماغ', 'وذمة دماغية', 'مانيتول'], en: ['osmitrol', 'osmotic diuretic', 'intracranial pressure', 'cerebral oedema'] }
});

DRUGS.push({
  id: 'clopidogrel',
  cls: 'antiplatelet',
  otc: false,
  alert: true,
  name:  { ar: 'الكلوبيدوجريل', en: 'Clopidogrel' },
  short: {
    ar: 'مضاد تكدّس صفيحات يمنع الصفيحات من الالتصاق ببعضها فيقلّل تكوّن الجلطة بعد الجلطة القلبية والسكتة والدعامات. لا يُوقف من تلقاء النفس أبداً.',
    en: 'An antiplatelet that stops platelets sticking together, reducing clot formation after a heart attack, a stroke and stents. It must never be stopped on your own.'
  },
  brands: ['بلافكس', 'كلوبيدوجريل', 'كلوبيكس'],
  uses: ['mi', 'stroke', 'tia', 'pad', 'angina', 'atherosclerosis', 'afib'],
  keywords: { ar: ['مضاد الصفيحات', 'بلافكس', 'مميّع', 'دعامة'], en: ['plavix', 'antiplatelet', 'stent', 'blood thinner'] }
});

DRUGS.push({
  id: 'alteplase',
  cls: 'thrombolytic',
  otc: false,
  alert: true,
  name:  { ar: 'الألتيبليز', en: 'Alteplase' },
  short: {
    ar: 'مذيب خثرة يُعطى في الوريد داخل المستشفى ليفتح شرياناً مسدوداً في الدماغ أو القلب أو الرئة. قوّته في سرعته، وخطره نزف قد يصل إلى الدماغ.',
    en: 'A clot buster given intravenously in hospital to reopen a blocked artery in the brain, the heart or the lung. Its strength is its speed, and its danger is bleeding, which can reach the brain.'
  },
  brands: ['أكتيليز', 'أكتيفيز'],
  uses: ['stroke', 'mi', 'pe'],
  keywords: { ar: ['مذيب الجلطة', 'أكتيليز', 'السكتة الدماغية', 'منشّط البلازمينوجين'], en: ['actilyse', 'activase', 'tPA', 'thrombolytic'] }
});

DRUGS.push({
  id: 'streptokinase',
  cls: 'thrombolytic',
  otc: false,
  alert: true,
  name:  { ar: 'الستربتوكيناز', en: 'Streptokinase' },
  short: {
    ar: 'أقدم مذيبات الخثرة وأرخصها، مصدره بكتيريا المكوّرات العقدية، ولهذا قد يثير حساسية وهبوط ضغط، ولا يُعاد استعماله بعد مرّته الأولى بسهولة.',
    en: 'The oldest and cheapest of the clot busters, derived from streptococcal bacteria, which is why it can trigger allergy and a drop in blood pressure, and cannot easily be used a second time.'
  },
  brands: ['ستربتيز', 'كابيكيناز'],
  uses: ['mi', 'pe', 'dvt', 'arterial-embolism'],
  keywords: { ar: ['مذيب الجلطة', 'ستربتوكيناز', 'ستربتيز', 'جلطة القلب'], en: ['streptase', 'thrombolytic', 'fibrinolytic', 'STEMI'] }
});

DRUGS.push({
  id: 'simvastatin',
  cls: 'statin',
  otc: false,
  alert: false,
  name:  { ar: 'السيمفاستاتين', en: 'Simvastatin' },
  short: {
    ar: 'ستاتين يبطّئ صنع الكوليسترول في الكبد فيخفض الضار ويقلّل خطر الجلطة القلبية والسكتة. أكثر ستاتيناته تعارضاً مع أدوية أخرى ومع الجريب فروت.',
    en: 'A statin that slows cholesterol production in the liver, lowering the harmful kind and reducing the risk of heart attack and stroke. It is the statin most prone to interactions with other medicines and with grapefruit.'
  },
  brands: ['زوكور', 'سيمفاستاتين', 'سيمفاكور'],
  uses: ['dyslipidemia', 'atherosclerosis', 'mi', 'stroke', 'angina'],
  keywords: { ar: ['ستاتين', 'كوليسترول', 'زوكور', 'دهون الدم'], en: ['zocor', 'statin', 'cholesterol', 'HMG-CoA reductase'] }
});

DRUGS.push({
  id: 'acetylsalicylic-acid-atorvastatin-ramipril',
  cls: 'cardio-polypill',
  otc: false,
  alert: true,
  name:  { ar: 'الأسبرين مع الأتورفاستاتين والراميبريل', en: 'Acetylsalicylic acid + atorvastatin + ramipril' },
  short: {
    ar: 'كبسولة واحدة تجمع ثلاثة أدوية قلب: أسبرين يمنع تكتّل الصفيحات، وستاتين يخفض الكوليسترول، ومثبّط إنزيم محوّل يخفض الضغط. لمن أصابته حادثة قلبية أو دماغية من قبل.',
    en: 'One capsule combining three heart medicines: aspirin to stop platelets clumping, a statin to lower cholesterol, and an ACE inhibitor to lower blood pressure. For people who have already had a cardiovascular event.'
  },
  brands: ['ترينوميا', 'سينكرونيوم'],
  uses: ['mi', 'stroke', 'angina', 'atherosclerosis', 'pad', 'dyslipidemia', 'hypertension'],
  keywords: { ar: ['بوليبيل', 'قرص مركّب', 'ترينوميا', 'الوقاية الثانوية'], en: ['polypill', 'trinomia', 'fixed-dose combination', 'secondary prevention'] }
});

DRUGS.push({
  id: 'acetylsalicylic-acid-simvastatin-ramipril-atenolol-hydrochlorothiazide',
  cls: 'cardio-polypill',
  otc: false,
  alert: true,
  name:  { ar: 'الأسبرين مع السيمفاستاتين والراميبريل والأتينولول والهيدروكلوروثيازيد', en: 'Acetylsalicylic acid + simvastatin + ramipril + atenolol + hydrochlorothiazide' },
  short: {
    ar: 'قرص واحد يجمع خمسة أدوية للوقاية من أمراض الشرايين: أسبرين وستاتين ومثبّط إنزيم محوّل وحاصر بيتا ومدرّ بول. راحته في بساطته، وثمنها أن مكوّناته لا تُعدَّل كلٌّ على حدة.',
    en: 'A single tablet combining five medicines for the prevention of arterial disease: aspirin, a statin, an ACE inhibitor, a beta blocker and a diuretic. Its comfort is its simplicity; the price is that its components cannot be adjusted one by one.'
  },
  brands: ['بوليكاب', 'البوليبيل'],
  uses: ['mi', 'stroke', 'angina', 'atherosclerosis', 'hypertension', 'dyslipidemia'],
  keywords: { ar: ['بوليبيل', 'قرص مركّب', 'بوليكاب', 'وقاية القلب'], en: ['polypill', 'polycap', 'fixed-dose combination', 'cardiovascular prevention'] }
});

DRUGS.push({
  id: 'atorvastatin-perindopril-amlodipine',
  cls: 'cardio-polypill',
  otc: false,
  alert: true,
  name:  { ar: 'الأتورفاستاتين مع البيريندوبريل والأملوديبين', en: 'Atorvastatin + perindopril + amlodipine' },
  short: {
    ar: 'قرص واحد يجمع ستاتيناً يخفض الكوليسترول مع دوائين للضغط: مثبّط إنزيم محوّل وحاصر قنوات كالسيوم. بلا أسبرين، لمن عنده ضغط أو شريان تاجي مستقرّ مع ارتفاع دهون.',
    en: 'One tablet combining a cholesterol-lowering statin with two blood pressure medicines: an ACE inhibitor and a calcium channel blocker. It contains no aspirin, and is for people with hypertension or stable coronary disease alongside raised lipids.'
  },
  brands: ['ليبرتانس', 'تريفيرام'],
  uses: ['hypertension', 'dyslipidemia', 'angina', 'atherosclerosis', 'mi'],
  keywords: { ar: ['قرص مركّب', 'ليبرتانس', 'ضغط ودهون', 'بوليبيل'], en: ['lipertance', 'triveram', 'fixed-dose combination', 'polypill'] }
});

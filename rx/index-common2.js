/* ============================================================
   موسوعة الأدوية — فهرس الدفعة الثانية من الأدوية الشائعة
   rx/index-common2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج ولا بديلاً عن الطبيب.
   ⛔ لا جرعات في هذه الموسوعة إطلاقاً — الجرعة قرار طبيب.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'amoxicillin',
  cls: 'antibiotic-penicillin',
  otc: false,
  alert: false,
  name:  { ar: 'الأموكسيسيلين', en: 'Amoxicillin' },
  short: {
    ar: 'مضاد حيوي من عائلة البنسلينات يوقف نموّ البكتيريا. لا ينفع في نزلات البرد والإنفلونزا لأنها فيروسية.',
    en: 'A penicillin-family antibiotic that stops bacteria growing. It does not work for colds or flu, which are viral.'
  },
  brands: ['أموكسيل', 'جوليمكس', 'أوسبامكس', 'إي-موكس'],
  uses: ['pneumonia', 'otitis-media', 'sinusitis', 'tonsillitis', 'dental-abscess', 'uti', 'h-pylori'],
  keywords: {
    ar: ['مضاد حيوي', 'بنسلين', 'التهاب بكتيري', 'اموكسسيلين'],
    en: ['penicillin', 'antibiotic', 'Amoxil', 'bacterial infection']
  }
});

DRUGS.push({
  id: 'azithromycin',
  cls: 'antibiotic-macrolide',
  otc: false,
  alert: false,
  name:  { ar: 'الأزيثرومايسين', en: 'Azithromycin' },
  short: {
    ar: 'مضاد حيوي من عائلة الماكروليدات، يبقى في الأنسجة مدّة أطول فتكون دورته قصيرة. بديل شائع لمن لديه حساسية للبنسلين.',
    en: 'A macrolide antibiotic that lingers in the tissues, so its course is short. A common alternative for people allergic to penicillin.'
  },
  brands: ['زيثروماكس', 'أزوماكس', 'زيثرون'],
  uses: ['pneumonia', 'acute-bronchitis', 'sinusitis', 'tonsillitis', 'pertussis', 'chlamydia'],
  keywords: {
    ar: ['مضاد حيوي', 'ماكروليد', 'ازيثرومايسين', 'التهاب رئوي'],
    en: ['macrolide', 'Zithromax', 'antibiotic', 'chest infection']
  }
});

DRUGS.push({
  id: 'metformin',
  cls: 'antidiabetic',
  otc: false,
  alert: false,
  name:  { ar: 'الميتفورمين', en: 'Metformin' },
  short: {
    ar: 'أول دواء يُوصف عادة في السكّري من النوع الثاني. يخفض السكّر بلا رفع للأنسولين، فلا يسبّب هبوطاً حادّاً بمفرده.',
    en: 'Usually the first medicine prescribed in type two diabetes. It lowers sugar without raising insulin, so on its own it does not cause sharp hypoglycaemia.'
  },
  brands: ['جلوكوفاج', 'سيدوفاج', 'ديابيتكس'],
  uses: ['type2-diabetes', 'prediabetes', 'pcos', 'gestational-diabetes', 'metabolic-syndrome'],
  keywords: {
    ar: ['سكري', 'بيغوانيد', 'ميتفورمين', 'خافض سكر'],
    en: ['biguanide', 'Glucophage', 'type two diabetes', 'blood sugar']
  }
});

DRUGS.push({
  id: 'atorvastatin',
  cls: 'statin',
  otc: false,
  alert: false,
  name:  { ar: 'الأتورفاستاتين', en: 'Atorvastatin' },
  short: {
    ar: 'من عائلة الستاتينات، يقلّل ما يصنعه الكبد من الكوليسترول ويثبّت لويحة الشرايين، فيخفض خطر الجلطة القلبية والسكتة.',
    en: 'A statin that cuts the cholesterol the liver makes and stabilises arterial plaque, lowering the risk of heart attack and stroke.'
  },
  brands: ['ليبيتور', 'أتور', 'تورفاست'],
  uses: ['dyslipidemia', 'atherosclerosis', 'mi', 'stroke', 'angina'],
  keywords: {
    ar: ['ستاتين', 'كوليسترول', 'دهون الدم', 'اتورفاستاتين'],
    en: ['statin', 'Lipitor', 'cholesterol', 'LDL']
  }
});

DRUGS.push({
  id: 'amlodipine',
  cls: 'calcium-blocker',
  otc: false,
  alert: false,
  name:  { ar: 'الأملوديبين', en: 'Amlodipine' },
  short: {
    ar: 'حاصر لقنوات الكالسيوم يُرخي جدران الشرايين فينخفض الضغط ويرتاح القلب. لا يوقف نوبة ألم الصدر بعد بدايتها.',
    en: 'A calcium channel blocker that relaxes artery walls, lowering pressure and easing the heart. It does not stop a chest pain attack once it starts.'
  },
  brands: ['نورفاسك', 'أملور', 'أملوكارد'],
  uses: ['hypertension', 'angina'],
  keywords: {
    ar: ['ضغط الدم', 'حاصر كالسيوم', 'املوديبين', 'ذبحة'],
    en: ['calcium channel blocker', 'Norvasc', 'blood pressure', 'angina']
  }
});

DRUGS.push({
  id: 'lisinopril',
  cls: 'ace-inhibitor',
  otc: false,
  alert: false,
  name:  { ar: 'الليزينوبريل', en: 'Lisinopril' },
  short: {
    ar: 'مثبّط للإنزيم المحوّل للأنجيوتنسين، يوسّع الأوعية فيخفض الضغط ويخفّف حمل القلب. ⛔ ممنوع تماماً في الحمل.',
    en: 'An ACE inhibitor that widens vessels, lowering pressure and easing the heart. Absolutely forbidden in pregnancy.'
  },
  brands: ['زيستريل', 'سينوبريل'],
  uses: ['hypertension', 'heart-failure', 'mi'],
  keywords: {
    ar: ['ضغط الدم', 'مثبط الإنزيم المحول', 'ليزينوبريل', 'كحة الدواء'],
    en: ['ACE inhibitor', 'Zestril', 'blood pressure', 'dry cough']
  }
});

DRUGS.push({
  id: 'salbutamol',
  cls: 'bronchodilator',
  otc: false,
  alert: false,
  name:  { ar: 'السالبوتامول (بخّاخ)', en: 'Salbutamol (Albuterol) inhaler' },
  short: {
    ar: 'البخّاخ المُسعِف الأزرق: يفتح الشعب الهوائية خلال دقائق عند الضيق أو الصفير. كثرة الحاجة إليه علامة أن الربو خرج عن السيطرة.',
    en: 'The blue reliever inhaler: it opens the airways within minutes during tightness or wheeze. Needing it often is a sign that asthma is out of control.'
  },
  brands: ['فنتولين', 'أيرومير'],
  uses: ['asthma', 'copd'],
  keywords: {
    ar: ['بخاخ الربو', 'موسع شعب', 'سالبوتامول', 'البخاخ الأزرق'],
    en: ['albuterol', 'Ventolin', 'reliever inhaler', 'beta agonist']
  }
});

DRUGS.push({
  id: 'prednisolone',
  cls: 'corticosteroid',
  otc: false,
  alert: true,
  name:  { ar: 'البريدنيزولون', en: 'Prednisolone' },
  short: {
    ar: 'كورتيزون فموي يُطفئ الالتهاب ويهدّئ المناعة. ⛔ لا يُوقف فجأة بعد استعمال ممتدّ، ويرفع خطر العدوى وسكّر الدم.',
    en: 'An oral corticosteroid that shuts down inflammation and calms the immune system. Never stop it suddenly after prolonged use; it raises infection risk and blood sugar.'
  },
  brands: ['بريدنيزولون', 'بريدو', 'ديلتاكورتريل'],
  uses: ['asthma', 'rheumatoid-arthritis', 'lupus', 'ulcerative-colitis', 'crohns', 'polymyalgia-rheumatica', 'urticaria'],
  keywords: {
    ar: ['كورتيزون', 'ستيرويد', 'بريدنيزولون', 'مضاد التهاب'],
    en: ['corticosteroid', 'steroid', 'prednisolone', 'anti-inflammatory']
  }
});

DRUGS.push({
  id: 'vitamin-d',
  cls: 'vitamin',
  otc: true,
  alert: false,
  name:  { ar: 'فيتامين د', en: 'Vitamin D' },
  short: {
    ar: 'ليس غذاءً فحسب بل هرمون يصنعه الجلد بالشمس، ويفتح باب امتصاص الكالسيوم في الأمعاء. نقصه شائع جداً في الخليج رغم الشمس.',
    en: 'Not just a nutrient but a hormone the skin makes in sunlight; it opens the gate for calcium absorption in the gut. Deficiency is very common in the Gulf despite the sun.'
  },
  brands: ['فيدروب', 'ديفارول', 'أوستيوكير'],
  uses: ['vitamin-d-deficiency', 'osteomalacia-rickets', 'osteoporosis', 'hypocalcemia'],
  keywords: {
    ar: ['فيتامين د', 'كولي كالسيفيرول', 'نقص فيتامين د', 'الكالسيوم'],
    en: ['cholecalciferol', 'vitamin D3', 'deficiency', 'calcium']
  }
});

DRUGS.push({
  id: 'insulin-basal',
  cls: 'insulin',
  otc: false,
  alert: true,
  name:  { ar: 'الأنسولين طويل المفعول (القاعدي)', en: 'Long-acting (basal) insulin' },
  short: {
    ar: 'أنسولين يعمل بثبات على مدى اليوم ليغطّي حاجة الجسم الأساسية بين الوجبات وأثناء النوم. ⛔ هامش أمانه ضيّق وخطره الأول هبوط السكّر.',
    en: 'Insulin that works steadily through the day to cover the body baseline between meals and during sleep. Its safety margin is narrow and its first danger is hypoglycaemia.'
  },
  brands: ['لانتوس', 'توجيو', 'ليفيمير', 'تريسيبا'],
  uses: ['type1-diabetes', 'type2-diabetes'],
  keywords: {
    ar: ['أنسولين', 'قاعدي', 'جلارجين', 'هبوط السكر'],
    en: ['insulin glargine', 'basal insulin', 'Lantus', 'hypoglycaemia']
  }
});

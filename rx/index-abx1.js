/* ============================================================
   موسوعة الأدوية — فهرس دفعة المضادات الحيوية (١)
   rx/index-abx1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'clarithromycin',
  cls: 'antibiotic-macrolide',
  otc: false,
  alert: true,
  name:  { ar: 'الكلاريثرومايسين', en: 'Clarithromycin' },
  short: {
    ar: 'مضاد حيوي من الماكروليدات، بديل البنسلين عند الحساسية منه وركن من علاج جرثومة المعدة. كثير التعارض مع أدوية أخرى لأنه يعطّل إنزيماً في الكبد.',
    en: 'A macrolide antibiotic, an alternative to penicillin in allergy and part of H. pylori treatment. It interacts with many other medicines because it blocks a liver enzyme.'
  },
  brands: ['كلاسيد', 'كلاريماك', 'بينوكلار', 'كلاريثرومايسين'],
  uses: ['h-pylori', 'pneumonia', 'sinusitis', 'tonsillitis', 'pertussis', 'acute-bronchitis', 'copd'],
  keywords: { ar: ['مضاد حيوي', 'ماكروليد', 'كلاسيد', 'جرثومة المعدة'], en: ['macrolide', 'antibiotic', 'klacid', 'biaxin'] }
});

DRUGS.push({
  id: 'doxycycline',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'الدوكسيسيكلين', en: 'Doxycycline' },
  short: {
    ar: 'مضاد حيوي واسع الطيف من التتراسيكلينات، يعالج عدوى الصدر والمسالك والأمراض المنقولة جنسياً، ويُستعمل شهوراً في حبّ الشباب والوردية. يُبتلع بكوب ماء كامل وبقاءٍ منتصباً.',
    en: 'A broad-spectrum tetracycline antibiotic for chest, urinary and sexually transmitted infections, also used for months in acne and rosacea. Swallow with a full glass of water and stay upright.'
  },
  brands: ['فيبرامايسين', 'دوكسيسين', 'مونودوكس', 'دوكسيسيكلين'],
  uses: ['acne', 'rosacea', 'chlamydia', 'pneumonia', 'malaria', 'brucellosis', 'pid', 'periodontitis'],
  keywords: { ar: ['مضاد حيوي', 'تتراسيكلين', 'فيبرامايسين', 'حب الشباب'], en: ['tetracycline', 'antibiotic', 'vibramycin', 'acne'] }
});

DRUGS.push({
  id: 'ciprofloxacin',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'السيبروفلوكساسين', en: 'Ciprofloxacin' },
  short: {
    ar: 'مضاد حيوي قوي من الفلوروكينولونات، يعالج عدوى المسالك والكلى والتيفوئيد. يحمل تحذيرات رسمية مؤطّرة: قطع الأوتار وأذى الأعصاب واضطراب النفس والأبهر.',
    en: 'A powerful fluoroquinolone antibiotic for urinary, kidney and typhoid infections. It carries official boxed warnings: tendon rupture, nerve damage, psychiatric effects and aortic injury.'
  },
  brands: ['سيبروباي', 'سيبروكسين', 'سيفلوكس', 'سيبروفلوكساسين'],
  uses: ['uti', 'pyelonephritis', 'prostatitis', 'typhoid', 'otitis-externa', 'cholera', 'bronchiectasis', 'epididymo-orchitis'],
  keywords: { ar: ['مضاد حيوي', 'كينولون', 'سيبروباي', 'التهاب المسالك'], en: ['fluoroquinolone', 'antibiotic', 'ciprobay', 'cipro'] }
});

DRUGS.push({
  id: 'metronidazole',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'الميترونيدازول', en: 'Metronidazole' },
  short: {
    ar: 'مضاد للجراثيم اللاهوائية والطفيليات: خرّاج السن، والرتوج، والأميبا، والتهاب المهبل البكتيري، وجرثومة المعدة. ⛔ ممنوع معه الكحول أثناء العلاج وبعده بأيام.',
    en: 'Kills anaerobic bacteria and parasites: dental abscess, diverticulitis, amoebae, bacterial vaginosis and H. pylori. Alcohol is forbidden during treatment and for days afterwards.'
  },
  brands: ['فلاجيل', 'ميترونيدازول', 'روزكس', 'أميزول'],
  uses: ['dental-abscess', 'periodontitis', 'amebiasis', 'vaginitis', 'c-diff-colitis', 'diverticular-disease', 'h-pylori', 'liver-abscess', 'pid'],
  keywords: { ar: ['مضاد حيوي', 'فلاجيل', 'لاهوائية', 'أميبا'], en: ['antibiotic', 'flagyl', 'anaerobic', 'amoebiasis'] }
});

DRUGS.push({
  id: 'nitrofurantoin',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'النيتروفورانتوين', en: 'Nitrofurantoin' },
  short: {
    ar: 'مضاد حيوي يتركّز في البول وحده، فهو خيار أول لالتهاب المثانة البسيط ولا يصلح لعدوى الكلى. يصبغ البول بلون داكن، وهذا طبيعي لا يستدعي التوقّف.',
    en: 'An antibiotic that concentrates in the urine only, a first choice for simple bladder infection and unsuitable for kidney infection. It turns the urine dark, which is normal and not a reason to stop.'
  },
  brands: ['ماكروبيد', 'ماكرودانتين', 'فيورادانتين', 'نيتروفورانتوين'],
  uses: ['uti', 'recurrent-uti'],
  keywords: { ar: ['مضاد حيوي', 'التهاب المثانة', 'ماكروبيد', 'المسالك البولية'], en: ['antibiotic', 'cystitis', 'macrobid', 'urinary'] }
});

DRUGS.push({
  id: 'trimethoprim',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'التريميثوبريم', en: 'Trimethoprim' },
  short: {
    ar: 'مضاد حيوي بسيط ورخيص، أشهر استعمالاته التهاب المسالك البولية. يعمل بتعطيل حمض الفوليك في الجرثومة، ولهذا يُنتبه له في فقر الدم والحمل.',
    en: 'A simple, inexpensive antibiotic used mainly for urinary tract infection. It works by blocking folate in the bacterium, which is why it needs care in anaemia and pregnancy.'
  },
  brands: ['مونوتريم', 'يوروتريم', 'تريميثوبريم'],
  uses: ['uti', 'recurrent-uti', 'prostatitis'],
  keywords: { ar: ['مضاد حيوي', 'التهاب المسالك', 'مونوتريم', 'فوليك'], en: ['antibiotic', 'urinary', 'monotrim', 'folate'] }
});

DRUGS.push({
  id: 'cotrimoxazole',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'الكوتريموكسازول', en: 'Sulfamethoxazole + trimethoprim (Co-trimoxazole)' },
  short: {
    ar: 'خلطة من دوائين تسدّان خطوتين متتاليتين في مصنع الفوليك عند الجرثومة. علاج أساسي لالتهاب رئة المناعة الضعيفة، ويحمل تحذيراً من طفح جلدي قاتل.',
    en: 'A combination of two medicines blocking two consecutive steps in the bacterium folate pathway. A mainstay for pneumonia in the immunosuppressed, and it carries a warning of fatal skin reactions.'
  },
  brands: ['سبترين', 'باكتريم', 'سولفاتريم', 'كوتريموكسازول'],
  uses: ['uti', 'pneumonia', 'skin-abscess', 'hiv', 'immunodeficiency', 'toxoplasmosis', 'typhoid'],
  keywords: { ar: ['مضاد حيوي', 'سبترين', 'باكتريم', 'سلفا'], en: ['antibiotic', 'septrin', 'bactrim', 'sulfa'] }
});

DRUGS.push({
  id: 'clindamycin',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'الكليندامايسين', en: 'Clindamycin' },
  short: {
    ar: 'مضاد حيوي ينفذ جيداً إلى العظم والخرّاجات وأنسجة الفم، وبديل مهم عند حساسية البنسلين. يحمل تحذيراً مؤطّراً من التهاب قولون خطير قد يظهر بعد أسابيع.',
    en: 'An antibiotic that penetrates bone, abscesses and mouth tissues well, and an important alternative in penicillin allergy. It carries a boxed warning of severe colitis that may appear weeks later.'
  },
  brands: ['دالاسين', 'دالاسين سي', 'كليوسين', 'كليندامايسين'],
  uses: ['dental-abscess', 'cellulitis', 'skin-abscess', 'acne', 'osteomyelitis', 'septic-arthritis', 'peritonsillar-abscess', 'toxoplasmosis'],
  keywords: { ar: ['مضاد حيوي', 'دالاسين', 'خراج', 'التهاب العظم'], en: ['antibiotic', 'dalacin', 'cleocin', 'lincosamide'] }
});

DRUGS.push({
  id: 'chloramphenicol',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'الكلورامفينيكول', en: 'Chloramphenicol' },
  short: {
    ar: 'مضاد حيوي واسع الطيف صار استعماله موضعياً في الغالب — قطرة العين ومرهمها — لأن شكله الجهازي يحمل خطر فشل نخاع العظم النادر غير المتوقّع.',
    en: 'A broad-spectrum antibiotic now used mostly topically, as eye drops and ointment, because its systemic form carries a rare and unpredictable risk of bone marrow failure.'
  },
  brands: ['كلورامفينيكول', 'كلوروميسيتين', 'كلوريكول', 'أوبتركس بالكلورامفينيكول'],
  uses: ['conjunctivitis', 'neonatal-conjunctivitis', 'blepharitis', 'stye-chalazion', 'otitis-externa', 'typhoid', 'meningitis'],
  keywords: { ar: ['مضاد حيوي', 'قطرة عين', 'رمد', 'كلوروميسيتين'], en: ['antibiotic', 'eye drops', 'conjunctivitis', 'chloromycetin'] }
});

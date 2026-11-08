/* ============================================================
   موسوعة الأدوية — فهرس دفعة مضادات المقاومة ومضادات الفطريات
   rx/index-abxres1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ملاحظة: الفصيلة `antifungal` غير معرّفة بعد في DRUG_CLASSES،
   وهي تُعرض بمعرّفها ولا تكسر شيئاً (كما نصّ تعليق drugs.js).
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'meropenem-vaborbactam',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'الميروبينيم مع الفابوباكتام', en: 'Meropenem + vaborbactam' },
  short: {
    ar: 'مضاد حيوي وريدي من الكاربابينيمات مقروناً بمثبّط يحمي مفعوله من إنزيمات البكتيريا المقاومة. يُعطى في المستشفى لعدوى المسالك البولية المعقّدة حين تعجز البدائل.',
    en: 'An intravenous carbapenem antibiotic paired with an inhibitor that shields it from the enzymes of resistant bacteria. Given in hospital for complicated urinary infection when other options fail.'
  },
  brands: ['فابوميري'],
  uses: ['uti', 'pyelonephritis', 'cauti', 'recurrent-uti', 'sepsis'],
  keywords: { ar: ['مضاد حيوي', 'كاربابينيم', 'بكتيريا مقاومة', 'وريدي'], en: ['carbapenem', 'vabomere', 'KPC', 'CRE'] }
});

DRUGS.push({
  id: 'plazomicin',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'البلازومايسين', en: 'Plazomicin' },
  short: {
    ar: 'مضاد حيوي وريدي من الأمينوغليكوزيدات، يُحجز لعدوى المسالك البولية المعقّدة حين تضيق الخيارات. يحمل تحذيراً مؤطّراً: أذى الكلى وفقدان السمع والتوازن وضرر الجنين.',
    en: 'An intravenous aminoglycoside antibiotic reserved for complicated urinary infection when alternatives are limited. It carries a boxed warning: kidney injury, hearing and balance loss, and fetal harm.'
  },
  brands: ['زيمدري'],
  uses: ['uti', 'pyelonephritis', 'cauti', 'recurrent-uti'],
  keywords: { ar: ['مضاد حيوي', 'أمينوغليكوزيد', 'وريدي', 'فقدان السمع'], en: ['aminoglycoside', 'zemdri', 'ototoxicity'] }
});

DRUGS.push({
  id: 'polymyxin-b',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'البوليميكسين ب', en: 'Polymyxin B' },
  short: {
    ar: 'مضاد حيوي قديم عاد إليه الطب اضطراراً أمام البكتيريا الشديدة المقاومة. يخرق غشاء الجرثومة مباشرة، ويُثقل الكلى والأعصاب، وله صور موضعية في قطرات العين والأذن.',
    en: 'An old antibiotic medicine returned to out of necessity against highly resistant bacteria. It punches through the bacterial membrane, burdens the kidneys and nerves, and also appears in eye and ear drops.'
  },
  brands: ['ماكسيترول', 'أوتوسبورين', 'بوليميكسين ب'],
  uses: ['sepsis', 'pneumonia', 'meningitis', 'conjunctivitis', 'otitis-externa', 'cystic-fibrosis', 'uti'],
  keywords: { ar: ['مضاد حيوي', 'بوليميكسين', 'قطرة عين', 'بكتيريا مقاومة'], en: ['polymyxin', 'colistin', 'MDR', 'eye drops'] }
});

DRUGS.push({
  id: 'fluconazole',
  cls: 'antifungal',
  otc: false,
  alert: true,
  name:  { ar: 'الفلوكونازول', en: 'Fluconazole' },
  short: {
    ar: 'مضاد فطريات من الآزولات يُبتلع، وهو الخيار الأول لفطريات الفم والمهبل والمريء ولالتهاب السحايا الفطري. يتعارض مع أدوية كثيرة، ويُتجنّب في الحمل.',
    en: 'A swallowed azole antifungal, the first choice for thrush of the mouth, vagina and gullet and for fungal meningitis. It interacts with many medicines and is avoided in pregnancy.'
  },
  brands: ['ديفلوكان', 'فلوكان', 'فلوزون', 'فلوكونازول'],
  uses: ['oral-thrush', 'vaginitis', 'balanitis', 'meningitis', 'immunodeficiency', 'hiv', 'leukemia'],
  keywords: { ar: ['مضاد فطريات', 'آزول', 'ديفلوكان', 'فطريات المهبل'], en: ['antifungal', 'azole', 'diflucan', 'thrush'] }
});

DRUGS.push({
  id: 'itraconazole',
  cls: 'antifungal',
  otc: false,
  alert: true,
  name:  { ar: 'الإتراكونازول', en: 'Itraconazole' },
  short: {
    ar: 'مضاد فطريات واسع من الآزولات يعالج فطريات الأظافر والعدوى الفطرية العميقة. يحمل تحذيراً مؤطّراً بقصور القلب، وقائمةَ أدوية يُمنع جمعها معه منعاً باتاً.',
    en: 'A broad azole antifungal for nail fungus and deep fungal infection. It carries a boxed warning about heart failure and a list of medicines that must never be combined with it.'
  },
  brands: ['سبورانوكس', 'إتراكونازول', 'إتراسيت'],
  uses: ['nail-fungus', 'fungal-sinusitis', 'oral-thrush', 'tinea-versicolor', 'hiv', 'immunodeficiency'],
  keywords: { ar: ['مضاد فطريات', 'آزول', 'سبورانوكس', 'فطريات الأظافر'], en: ['antifungal', 'azole', 'sporanox', 'onychomycosis'] }
});

DRUGS.push({
  id: 'voriconazole',
  cls: 'antifungal',
  otc: false,
  alert: true,
  name:  { ar: 'الفوريكونازول', en: 'Voriconazole' },
  short: {
    ar: 'مضاد فطريات قوي للعدوى الفطرية الغازية في المستشفى، وأشهرها الرشاشيات. يشوّش البصر مؤقّتاً عند كثيرين، ويجعل الجلد شديد الحساسية للشمس مع طول الاستعمال.',
    en: 'A powerful antifungal for invasive fungal infection in hospital, aspergillosis above all. It blurs vision temporarily in many people and makes the skin highly sun-sensitive with long use.'
  },
  brands: ['فيفيند', 'فوريكونازول'],
  uses: ['fungal-sinusitis', 'pneumonia', 'sepsis', 'leukemia', 'immunodeficiency', 'hiv'],
  keywords: { ar: ['مضاد فطريات', 'آزول', 'الرشاشيات', 'فيفيند'], en: ['antifungal', 'azole', 'vfend', 'aspergillosis'] }
});

DRUGS.push({
  id: 'terbinafine',
  cls: 'antifungal',
  otc: false,
  alert: true,
  name:  { ar: 'التيربينافين', en: 'Terbinafine' },
  short: {
    ar: 'مضاد فطريات من الأليلامينات، وهو الأقوى على فطر الأظافر وسعفة الرأس. كريمه بسيط، أما أقراصه فتحتاج كبداً سليماً وقد تُفقد حاسّة الذوق.',
    en: 'An allylamine antifungal, the strongest against nail fungus and scalp ringworm. Its cream is simple, but its tablets need a healthy liver and can take away the sense of taste.'
  },
  brands: ['لاميزيل', 'لاميزيل وانس', 'تيربينافين'],
  uses: ['nail-fungus', 'athletes-foot', 'ringworm', 'tinea-versicolor'],
  keywords: { ar: ['مضاد فطريات', 'لاميزيل', 'فطريات الأظافر', 'القدم الرياضي'], en: ['antifungal', 'allylamine', 'lamisil', 'onychomycosis'] }
});

DRUGS.push({
  id: 'griseofulvin',
  cls: 'antifungal',
  otc: false,
  alert: true,
  name:  { ar: 'الجريزوفولفين', en: 'Griseofulvin' },
  short: {
    ar: 'أقدم مضاد فطريات يُبتلع، يعمل على سعفة الجلد والشعر والأظافر وحدها ولا يمسّ الخمائر. ممنوع في الحمل، ويُضعف حبوب منع الحمل، ويُضاعف أثر الكحول.',
    en: 'The oldest swallowed antifungal, active only against ringworm of skin, hair and nails and useless against yeasts. Forbidden in pregnancy, it weakens the contraceptive pill and amplifies alcohol.'
  },
  brands: ['جريزوفولفين', 'فولسين', 'جريسوفين'],
  uses: ['ringworm', 'athletes-foot', 'nail-fungus'],
  keywords: { ar: ['مضاد فطريات', 'سعفة الرأس', 'جريزوفولفين', 'قوباء'], en: ['antifungal', 'griseofulvin', 'tinea capitis', 'ringworm'] }
});

DRUGS.push({
  id: 'nystatin',
  cls: 'antifungal',
  otc: true,
  alert: false,
  name:  { ar: 'النيستاتين', en: 'Nystatin' },
  short: {
    ar: 'مضاد فطريات لا يُمتصّ من الأمعاء، فيعمل حيث يلامس فقط: القلاع في الفم وفطريات الجلد وطفح الحفاض. آمن حتى عند الرضّع، ولا ينفع أبداً لعدوى داخل الجسم.',
    en: 'An antifungal not absorbed from the gut, so it works only where it touches: thrush in the mouth, skin yeast and nappy rash. Safe even in infants, and never any use for infection inside the body.'
  },
  brands: ['مايكوستاتين', 'نيستاتين', 'نيستان'],
  uses: ['oral-thrush', 'vaginitis', 'diaper-rash', 'immunodeficiency'],
  keywords: { ar: ['مضاد فطريات', 'قلاع', 'مايكوستاتين', 'فطريات الفم'], en: ['antifungal', 'polyene', 'mycostatin', 'oral thrush'] }
});

DRUGS.push({
  id: 'clotrimazole',
  cls: 'antifungal',
  otc: true,
  alert: false,
  name:  { ar: 'الكلوتريمازول', en: 'Clotrimazole' },
  short: {
    ar: 'كريم وتحاميل مضادة للفطريات تُصرف بلا وصفة: القدم الرياضي والقوباء وفطريات المهبل وطفح الحفاض. يُضعف مطّاط الواقي الذكري والحاجز المهبلي.',
    en: 'An over-the-counter antifungal cream and pessary for athlete’s foot, ringworm, vaginal thrush and nappy rash. It weakens the latex of condoms and diaphragms.'
  },
  brands: ['كانستين', 'كانديد', 'لوتريمين', 'كلوتريمازول'],
  uses: ['vaginitis', 'balanitis', 'athletes-foot', 'ringworm', 'diaper-rash', 'oral-thrush', 'tinea-versicolor', 'otitis-externa'],
  keywords: { ar: ['مضاد فطريات', 'كانستين', 'كريم', 'فطريات المهبل'], en: ['antifungal', 'imidazole', 'canesten', 'topical'] }
});

/* ============================================================
   موسوعة الأدوية — فهرس دفعة المضادات الحيوية الحقنية (١)
   rx/index-abxiv1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   كلّها أدوية مستشفى تُعطى بالوريد أو العضل بيد طاقم طبي.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'ampicillin',
  cls: 'antibiotic-penicillin',
  otc: false,
  alert: false,
  name:  { ar: 'الأمبيسيلين', en: 'Ampicillin' },
  short: {
    ar: 'بنسلين حقني أوسع مدى من البنسلين القديم، يُعطى في المستشفى. هو المرجع حين تكون الجرثومة الليستيريا أو المكوّرات المعوية، ويُعطى للحامل في الولادة لحماية المولود.',
    en: 'An injectable penicillin with a wider reach than the older ones, given in hospital. It is the reference drug when the organism is Listeria or Enterococcus, and is given in labour to protect the newborn.'
  },
  brands: ['أمبيسيلين', 'بنبريتين'],
  uses: ['meningitis', 'endocarditis', 'uti', 'pyelonephritis', 'sepsis', 'neonatal-sepsis', 'typhoid'],
  keywords: { ar: ['مضاد حيوي', 'بنسلين', 'أمبيسيلين', 'حقن وريدي'], en: ['aminopenicillin', 'ampicillin', 'IV antibiotic', 'listeria'] }
});

DRUGS.push({
  id: 'benzylpenicillin',
  cls: 'antibiotic-penicillin',
  otc: false,
  alert: false,
  name:  { ar: 'البنزيل بنسلين', en: 'Benzylpenicillin (Penicillin G)' },
  short: {
    ar: 'البنسلين الأصل بصورته الحقنية سريعة المفعول. يبقى الخيار الأول في التهاب السحايا بالمكوّرات السحائية والزهري العصبي والتهاب الشغاف بالعقديات.',
    en: 'The original penicillin in its fast-acting injectable form. It remains first choice in meningococcal meningitis, neurosyphilis and streptococcal endocarditis.'
  },
  brands: ['بنسلين جي', 'كريستابن'],
  uses: ['meningitis', 'endocarditis', 'syphilis', 'cellulitis', 'pneumonia', 'rheumatic-fever', 'neonatal-sepsis'],
  keywords: { ar: ['بنسلين', 'مضاد حيوي', 'بنزيل بنسلين', 'حقن وريدي'], en: ['penicillin G', 'benzylpenicillin', 'crystalline penicillin'] }
});

DRUGS.push({
  id: 'benzathine-benzylpenicillin',
  cls: 'antibiotic-penicillin',
  otc: false,
  alert: true,
  name:  { ar: 'البنزاثين بنزيل بنسلين', en: 'Benzathine benzylpenicillin' },
  short: {
    ar: 'حقنة عضلية مستودعة تُطلق البنسلين ببطء أسابيع. عليها يقوم علاج الزهري والوقاية من الحمّى الرثوية. ⛔ لا تُحقن في الوريد أبداً — الخطأ قاتل.',
    en: 'A depot intramuscular injection that releases penicillin slowly over weeks. Syphilis treatment and rheumatic fever prevention rest on it. It must never be injected into a vein.'
  },
  brands: ['ريتاربين', 'بنادور', 'بيسيلين'],
  uses: ['syphilis', 'rheumatic-fever', 'tonsillitis', 'scarlet-fever'],
  keywords: { ar: ['بنسلين طويل المفعول', 'حقنة عضل', 'زهري', 'حمّى رثوية'], en: ['benzathine penicillin', 'Bicillin', 'depot penicillin', 'syphilis'] }
});

DRUGS.push({
  id: 'procaine-benzylpenicillin',
  cls: 'antibiotic-penicillin',
  otc: false,
  alert: true,
  name:  { ar: 'البروكايين بنزيل بنسلين', en: 'Procaine benzylpenicillin' },
  short: {
    ar: 'بنسلين عضلي متوسّط المدى مخلوط بمخدّر موضعي يخفّف ألم الحقنة. يبقى في قائمة الأدوية الأساسية للمنظمة وإن سُحب من السوق الأمريكي. ⛔ لا يُحقن وريدياً.',
    en: 'A medium-acting intramuscular penicillin mixed with a local anaesthetic that eases the pain of the shot. It remains on the WHO essential list although withdrawn from the US market. It must never be given intravenously.'
  },
  brands: ['بروكايين بنسلين جي'],
  uses: ['syphilis', 'cellulitis'],
  keywords: { ar: ['بنسلين بروكايين', 'حقنة عضل', 'زهري'], en: ['procaine penicillin', 'penicillin G procaine'] }
});

DRUGS.push({
  id: 'cefazolin',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'السيفازولين', en: 'Cefazolin' },
  short: {
    ar: 'سيفالوسبورين من الجيل الأول، وهو المضاد المختار للوقاية قبل العمليات الجراحية، وعمود علاج عدوى الجلد والعظم بالمكوّرات العنقودية. لا يدخل السائل الدماغي.',
    en: 'A first-generation cephalosporin, the antibiotic of choice for prophylaxis before surgery and a mainstay for staphylococcal skin and bone infection. It does not enter the spinal fluid.'
  },
  brands: ['كيفزول', 'أنسيف', 'سيفازولين'],
  uses: ['cellulitis', 'skin-abscess', 'osteomyelitis', 'septic-arthritis', 'endocarditis', 'uti', 'cholangitis', 'open-fracture'],
  keywords: { ar: ['سيفالوسبورين', 'مضاد حيوي', 'وقاية جراحية', 'سيفازولين'], en: ['cephalosporin', 'cefazolin', 'surgical prophylaxis', 'Ancef'] }
});

DRUGS.push({
  id: 'ceftriaxone',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'السيفترياكسون', en: 'Ceftriaxone' },
  short: {
    ar: 'أشهر مضاد حيوي حقني في المستشفيات: جيل ثالث واسع المدى وبقاؤه في الجسم طويل فحقنه متباعد. ⛔ ممنوع على المولود اليرقاني ولا يُخلط بمحاليل الكالسيوم.',
    en: 'The best-known injectable antibiotic in hospitals: a broad third-generation agent that lasts long in the body, so its injections are widely spaced. It is forbidden in the jaundiced newborn and must not be mixed with calcium solutions.'
  },
  brands: ['روسيفين', 'لونجاسيف', 'سيفترياكسون'],
  uses: ['pneumonia', 'meningitis', 'gonorrhea', 'pyelonephritis', 'sepsis', 'typhoid', 'ascites-sbp', 'otitis-media', 'pid', 'endocarditis'],
  keywords: { ar: ['سيفالوسبورين', 'روسيفين', 'مضاد حيوي وريدي', 'سيفترياكسون'], en: ['ceftriaxone', 'Rocephin', 'third-generation cephalosporin'] }
});

DRUGS.push({
  id: 'cefotaxime',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'السيفوتاكسيم', en: 'Cefotaxime' },
  short: {
    ar: 'توأم السيفترياكسون في المدى، ويتفوّق عليه عند حديثي الولادة لأنه لا يزاحم البيليروبين ولا يرسّب الصفراء. من أفضل ما يدخل السائل الدماغي الشوكي.',
    en: 'The twin of ceftriaxone in spectrum, and preferred in the newborn because it does not displace bilirubin or precipitate in bile. One of the best agents at entering the spinal fluid.'
  },
  brands: ['كلافوران', 'سيفوتاكسيم'],
  uses: ['pneumonia', 'meningitis', 'neonatal-sepsis', 'gonorrhea', 'sepsis', 'uti', 'pid', 'typhoid'],
  keywords: { ar: ['سيفالوسبورين', 'كلافوران', 'سيفوتاكسيم', 'التهاب سحايا'], en: ['cefotaxime', 'Claforan', 'third-generation cephalosporin'] }
});

DRUGS.push({
  id: 'ceftazidime',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'السيفتازيديم', en: 'Ceftazidime' },
  short: {
    ar: 'سيفالوسبورين جيل ثالث اختُصّ بجرثوم عنيد اسمه الزائفة الزنجارية. عليه يقوم علاج نوبات التليّف الكيسي والحمّى عند ناقص المناعة، وضعفه في الجراثيم موجبة الغرام.',
    en: 'A third-generation cephalosporin singled out for a stubborn organism, Pseudomonas aeruginosa. Cystic fibrosis flares and fever in the immunocompromised rest on it; its weakness is gram-positive cover.'
  },
  brands: ['فورتم', 'فورتاز', 'سيفتازيديم'],
  uses: ['pneumonia', 'cystic-fibrosis', 'bronchiectasis', 'meningitis', 'sepsis', 'pyelonephritis', 'osteomyelitis', 'burns', 'immunodeficiency'],
  keywords: { ar: ['سيفالوسبورين', 'فورتم', 'زائفة زنجارية', 'سيفتازيديم'], en: ['ceftazidime', 'Fortum', 'antipseudomonal', 'Fortaz'] }
});

DRUGS.push({
  id: 'piperacillin-tazobactam',
  cls: 'antibiotic-penicillin',
  otc: false,
  alert: true,
  name:  { ar: 'البيبيراسيلين مع التازوباكتام', en: 'Piperacillin + tazobactam' },
  short: {
    ar: 'بنسلين واسع جداً ومعه حارس يمنع الجراثيم من تكسيره. حصان العمل في عدوى البطن والالتهاب الرئوي المكتسب في المستشفى، ويُحسب عليه إجهاد الكلى.',
    en: 'A very broad penicillin paired with a guard that stops bacteria breaking it down. The workhorse of abdominal infection and hospital-acquired pneumonia, with strain on the kidneys counted against it.'
  },
  brands: ['تازوسين', 'زوسين', 'تازوباكت'],
  uses: ['pneumonia', 'aspiration-pneumonia', 'sepsis', 'diabetic-foot-ulcer', 'cellulitis', 'appendicitis', 'diverticular-disease', 'cholangitis', 'immunodeficiency'],
  keywords: { ar: ['تازوسين', 'بنسلين واسع', 'مضاد حيوي وريدي', 'بيبيراسيلين'], en: ['piperacillin tazobactam', 'Tazocin', 'Zosyn', 'pip-tazo'] }
});

DRUGS.push({
  id: 'meropenem',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'الميروبينيم', en: 'Meropenem' },
  short: {
    ar: 'كاربابينيم — أوسع ما يُعطى في المستشفى ويُحفظ لآخر الصفّ حتى لا تتعوّده الجراثيم. يُنقص دواء الصرع فالبروات حتى تعود النوبة.',
    en: 'A carbapenem, the broadest agent given in hospital and kept in reserve so bacteria do not grow used to it. It lowers the epilepsy drug valproate until seizures return.'
  },
  brands: ['ميرونيم', 'ميروبينيم'],
  uses: ['cellulitis', 'skin-abscess', 'appendicitis', 'diverticular-disease', 'meningitis', 'sepsis', 'pyelonephritis', 'diabetic-foot-ulcer'],
  keywords: { ar: ['كاربابينيم', 'ميرونيم', 'مضاد حيوي واسع', 'ميروبينيم'], en: ['meropenem', 'carbapenem', 'Meronem', 'broad spectrum'] }
});

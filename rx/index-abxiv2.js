/* ============================================================
   موسوعة الأدوية — فهرس دفعة المضادات الحيوية الوريدية والمحجوزة (٢)
   rx/index-abxiv2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'vancomycin',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'الفانكومايسين', en: 'Vancomycin' },
  short: {
    ar: 'مضاد حيوي من الغليكوببتيدات، يُنقّط في الوريد لعدوى موجبة الغرام الشديدة ومنها المقاومة للميثيسيلين. وله كبسولة مبلوعة لا تُمتصّ، مكانها التهاب القولون بالمطثّية العسيرة وحده.',
    en: 'A glycopeptide antibiotic infused into a vein for severe Gram-positive infections including MRSA. Its swallowed capsule is not absorbed and is used only for Clostridioides difficile colitis.'
  },
  brands: ['فانكوسين', 'فانكومايسين'],
  uses: ['c-diff-colitis', 'sepsis', 'endocarditis', 'osteomyelitis', 'septic-arthritis', 'cellulitis', 'skin-abscess', 'meningitis', 'pneumonia', 'neonatal-sepsis'],
  keywords: { ar: ['مضاد حيوي', 'غليكوببتيد', 'فانكوسين', 'المكوّرات العنقودية المقاومة'], en: ['glycopeptide', 'antibiotic', 'vancocin', 'MRSA', 'C. difficile'] }
});

DRUGS.push({
  id: 'gentamicin',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'الجنتاميسين', en: 'Gentamicin' },
  short: {
    ar: 'مضاد حيوي من الأمينوغليكوزيدات يُعطى حقناً لعدوى سالبة الغرام الشديدة. قوي ورخيص، لكنه يحمل تحذيرات مؤطّرة: أذى الكلى، وفقدان سمع قد يبقى، وأذى الجنين.',
    en: 'An aminoglycoside antibiotic given by injection for severe Gram-negative infections. Powerful and cheap, but it carries boxed warnings: kidney injury, hearing loss that may be permanent, and fetal harm.'
  },
  brands: ['جاراميسين', 'جنتاميسين', 'جنتاسين'],
  uses: ['sepsis', 'pyelonephritis', 'endocarditis', 'neonatal-sepsis', 'uti', 'brucellosis'],
  keywords: { ar: ['مضاد حيوي', 'أمينوغليكوزيد', 'جاراميسين', 'حقن'], en: ['aminoglycoside', 'antibiotic', 'garamycin', 'injection'] }
});

DRUGS.push({
  id: 'amikacin',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'الأميكاسين', en: 'Amikacin' },
  short: {
    ar: 'أمينوغليكوزيد يُحفظ عادةً لجراثيم سالبة الغرام قاومت الجنتاميسين. علاج قصير المدّة داخل المستشفى بمراقبة كلى وسمع، لأن صممه قد يكون دائماً وثنائياً.',
    en: 'An aminoglycoside usually reserved for Gram-negative bacteria that have resisted gentamicin. A short in-hospital course with kidney and hearing monitoring, because its deafness may be permanent and bilateral.'
  },
  brands: ['أميكين', 'أميكاسين', 'أميكوزيت'],
  uses: ['sepsis', 'pyelonephritis', 'pneumonia', 'cauti', 'neonatal-sepsis', 'burns', 'osteomyelitis'],
  keywords: { ar: ['مضاد حيوي', 'أمينوغليكوزيد', 'أميكين', 'مقاومة'], en: ['aminoglycoside', 'antibiotic', 'amikin', 'resistance'] }
});

DRUGS.push({
  id: 'spectinomycin',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'السبكتينومايسين', en: 'Spectinomycin' },
  short: {
    ar: 'حقنة عضلية واحدة من فصيلة الأمينوسيكليتول، محجوزة للسيلان حين لا يصلح السيفترياكسون. لا تُعوّل عليها في سيلان الحلق لأن تركيزها هناك لا يكفي.',
    en: 'A single intramuscular aminocyclitol injection, reserved for gonorrhoea when ceftriaxone is unsuitable. It cannot be relied on for throat gonorrhoea because it does not reach adequate levels there.'
  },
  brands: ['تروبيسين', 'سبكتينومايسين'],
  uses: ['gonorrhea', 'neonatal-conjunctivitis'],
  keywords: { ar: ['مضاد حيوي', 'السيلان', 'تروبيسين', 'حقنة عضلية'], en: ['aminocyclitol', 'gonorrhoea', 'trobicin', 'intramuscular'] }
});

DRUGS.push({
  id: 'cefiderocol',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'السيفيديروكول', en: 'Cefiderocol' },
  short: {
    ar: 'سيفالوسبورين حديث يتسلّل إلى الجرثومة متنكّراً في صورة حديد، فيصل إلى سالبات الغرام شديدة المقاومة. محجوز للحالات الصعبة، ونشرته تحمل تنبيه ارتفاع الوفيات في مرضى حرجين.',
    en: 'A modern cephalosporin that sneaks into the bacterium disguised as iron, reaching highly resistant Gram-negative organisms. Reserved for difficult cases, and its label carries a warning of increased mortality in critically ill patients.'
  },
  brands: ['فيتروجا', 'فيتكروجا'],
  uses: ['uti', 'pyelonephritis', 'cauti', 'pneumonia'],
  keywords: { ar: ['مضاد حيوي', 'سيفالوسبورين', 'حصان طروادة الحديدي', 'مقاومة الكاربابينيم'], en: ['cephalosporin', 'siderophore', 'fetroja', 'carbapenem-resistant'] }
});

DRUGS.push({
  id: 'ceftazidime-avibactam',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'السيفتازيديم مع الأفيباكتام', en: 'Ceftazidime + avibactam' },
  short: {
    ar: 'سيفالوسبورين قديم أُعيدت إليه قوّته بشريك يعطّل إنزيمات المقاومة، فصار سلاحاً لعدوى سالبة الغرام مقاومة في المسالك والبطن والرئة داخل المستشفى.',
    en: 'An older cephalosporin restored to strength by a partner that disables resistance enzymes, making it a weapon against resistant Gram-negative infections of the urinary tract, abdomen and lungs in hospital.'
  },
  brands: ['أفيكاز', 'زافيسفتا'],
  uses: ['uti', 'pyelonephritis', 'cauti', 'pneumonia'],
  keywords: { ar: ['مضاد حيوي', 'سيفالوسبورين', 'مثبّط بيتا لاكتاماز', 'زافيسفتا'], en: ['cephalosporin', 'beta-lactamase inhibitor', 'avycaz', 'zavicefta'] }
});

DRUGS.push({
  id: 'ceftolozane-tazobactam',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'السيفتولوزان مع التازوباكتام', en: 'Ceftolozane + tazobactam' },
  short: {
    ar: 'مزيج وريدي قوي على الزائفة الزنجارية خاصة، يُستعمل في عدوى البطن المعقّدة والمسالك والالتهاب الرئوي المستشفوي. يُعطى مع الميترونيدازول في عدوى البطن.',
    en: 'A potent intravenous combination especially against Pseudomonas aeruginosa, used in complicated abdominal and urinary infections and hospital pneumonia. Given with metronidazole for abdominal infection.'
  },
  brands: ['زيرباكسا'],
  uses: ['uti', 'pyelonephritis', 'cauti', 'pneumonia'],
  keywords: { ar: ['مضاد حيوي', 'سيفالوسبورين', 'الزائفة الزنجارية', 'زيرباكسا'], en: ['cephalosporin', 'pseudomonas', 'zerbaxa', 'tazobactam'] }
});

DRUGS.push({
  id: 'colistin',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'الكوليستين', en: 'Colistin (colistimethate)' },
  short: {
    ar: 'مضاد حيوي قديم من البوليميكسينات عاد ملاذاً أخيراً لسالبات الغرام المقاومة لكل شيء. يؤذي الكلى والأعصاب، وله شكل مستنشق للعدوى المزمنة في التليّف الكيسي.',
    en: 'An old polymyxin antibiotic that returned as a last resort for Gram-negative bacteria resistant to everything else. It harms the kidneys and nerves, and has an inhaled form for chronic infection in cystic fibrosis.'
  },
  brands: ['كولي-ميسين', 'كوليستين', 'كولوبريذ'],
  uses: ['pneumonia', 'sepsis', 'uti', 'cauti', 'cystic-fibrosis', 'bronchiectasis'],
  keywords: { ar: ['مضاد حيوي', 'بوليميكسين', 'الملاذ الأخير', 'الزائفة الزنجارية'], en: ['polymyxin', 'colistimethate', 'last resort', 'pseudomonas'] }
});

DRUGS.push({
  id: 'fosfomycin',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'الفوسفومايسين', en: 'Fosfomycin' },
  short: {
    ar: 'كيس حبيبات يُذاب في الماء ويُشرب مرّة واحدة، لالتهاب المثانة البسيط عند النساء. لا يصلح لالتهاب الكلية ولا للخرّاج، وتكرار الكيس لا يزيد الشفاء بل يزيد الأعراض.',
    en: 'A sachet of granules dissolved in water and drunk once, for simple bladder infection in women. It is not suitable for kidney infection or abscess, and repeating the sachet does not improve cure, only side effects.'
  },
  brands: ['مونورول', 'مونوريل', 'فوسفومايسين'],
  uses: ['uti', 'recurrent-uti'],
  keywords: { ar: ['مضاد حيوي', 'التهاب المثانة', 'مونورول', 'كيس واحد'], en: ['fosfomycin', 'cystitis', 'monurol', 'single dose'] }
});

DRUGS.push({
  id: 'linezolid',
  cls: 'antibiotic',
  otc: false,
  alert: true,
  name:  { ar: 'اللينزوليد', en: 'Linezolid' },
  short: {
    ar: 'مضاد حيوي من الأوكسازوليدينونات، فعّال على موجبات الغرام المقاومة، وقرصه المبلوع يعمل كحقنته. يُنقص كريات الدم مع طول الاستعمال، ويمنع أطعمة غنية بالتيرامين.',
    en: 'An oxazolidinone antibiotic active against resistant Gram-positive bacteria, whose swallowed tablet works as well as its injection. It lowers blood cells with prolonged use and forbids tyramine-rich foods.'
  },
  brands: ['زايفوكس', 'لينزوليد', 'ليزوليد'],
  uses: ['pneumonia', 'cellulitis', 'skin-abscess', 'diabetic-foot-ulcer'],
  keywords: { ar: ['مضاد حيوي', 'أوكسازوليدينون', 'زايفوكس', 'التيرامين'], en: ['oxazolidinone', 'zyvox', 'MRSA', 'tyramine'] }
});

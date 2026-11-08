/* ============================================================
   موسوعة الأدوية — فهرس دفعة gi2
   rx/index-gi2.js   (يُحمَّل دائماً — خفيف)
   معدة وأمعاء ومكمّلات · مضادات حيوية فموية شائعة (بنسلينات وسيفالوسبورينات)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'zinc-sulfate',
  cls: 'mineral-supplement',
  otc: true,
  alert: false,
  name:  { ar: 'كبريتات الزنك', en: 'Zinc sulfate' },
  short: {
    ar: 'مكمّل معدني يعوّض نقص الزنك، ويُعطى مع محلول الإماهة في إسهال الأطفال فيقصّر مدّته. الإفراط فيه يستنزف النحاس ويقلب النفع ضرراً.',
    en: 'A mineral supplement that corrects zinc deficiency, and is given with oral rehydration solution in childhood diarrhoea to shorten it. Excess depletes copper and turns the benefit into harm.'
  },
  brands: ['زنك سلفات', 'زنكوفيت', 'أملاح الإماهة مع الزنك'],
  uses: ['zinc-deficiency', 'chronic-diarrhea', 'dehydration', 'malnutrition', 'growth-delay', 'taste-disorder'],
  keywords: { ar: ['زنك', 'كبريتات الزنك', 'مكمّل معدني', 'إسهال الأطفال'], en: ['zinc', 'zinc sulphate', 'trace element', 'ORS zinc'] }
});

DRUGS.push({
  id: 'sulfasalazine',
  cls: 'aminosalicylate',
  otc: false,
  alert: true,
  name:  { ar: 'السلفاسالازين', en: 'Sulfasalazine' },
  short: {
    ar: 'دواء يهدّئ التهاب القولون التقرّحي والتهاب المفاصل الروماتويدي على المدى الطويل. يلوّن البول برتقالياً بلا ضرر، لكنه يستوجب فحوص دم دورية.',
    en: 'A medicine that calms ulcerative colitis and rheumatoid arthritis over the long term. It turns urine orange harmlessly, but requires regular blood tests.'
  },
  brands: ['سالازوبيرين', 'أزولفيدين', 'سلفاسالازين'],
  uses: ['ulcerative-colitis', 'crohns', 'rheumatoid-arthritis'],
  keywords: { ar: ['سلفاسالازين', 'التهاب القولون التقرحي', 'مضاد روماتيزم', 'سالازوبيرين'], en: ['sulfasalazine', 'DMARD', '5-ASA', 'salazopyrin'] }
});

DRUGS.push({
  id: 'pancreatic-enzymes',
  cls: 'pancreatic-enzyme',
  otc: false,
  alert: false,
  name:  { ar: 'إنزيمات البنكرياس', en: 'Pancreatic enzymes (Pancrelipase)' },
  short: {
    ar: 'إنزيمات هضم بديلة تُبلع مع الأكل حين يعجز البنكرياس عن إفرازها، فتوقف البراز الدهني وفقدان الوزن. لا تُمضغ ولا تُفتح على طعام غير حامضي.',
    en: 'Replacement digestive enzymes swallowed with food when the pancreas cannot make its own, stopping fatty stools and weight loss. Never chewed, never opened onto non-acidic food.'
  },
  brands: ['كريون', 'بانزيترات', 'فيستال'],
  uses: ['chronic-pancreatitis', 'cystic-fibrosis', 'pancreatic-cancer', 'malnutrition'],
  keywords: { ar: ['إنزيمات البنكرياس', 'بانكرياتين', 'كريون', 'قصور البنكرياس'], en: ['pancrelipase', 'pancreatin', 'lipase', 'creon'] }
});

DRUGS.push({
  id: 'amoxicillin-clavulanic-acid',
  cls: 'antibiotic-penicillin',
  otc: false,
  alert: false,
  name:  { ar: 'الأموكسيسيلين مع حمض الكلافولانيك', en: 'Amoxicillin + clavulanic acid (Co-amoxiclav)' },
  short: {
    ar: 'أموكسيسيلين أُضيف إليه حارسٌ يعطّل الإنزيم البكتيري الذي يهضمه، فاتّسع مداه إلى جراثيم صارت مقاومة له وحده. أشهر آثاره الإسهال، وأخطرها الكبد.',
    en: 'Amoxicillin with a guardian that disables the bacterial enzyme which destroys it, widening its reach to germs already resistant to amoxicillin alone. Its commonest effect is diarrhoea, its most serious is the liver.'
  },
  brands: ['أوجمنتين', 'كيورام', 'كلافوموكس', 'أموكسيكلاف'],
  uses: ['sinusitis', 'otitis-media', 'pneumonia', 'uti', 'cellulitis', 'dental-abscess', 'skin-abscess'],
  keywords: { ar: ['أوجمنتين', 'كلافولانيك', 'مضاد حيوي', 'بنسلين'], en: ['augmentin', 'co-amoxiclav', 'clavulanate', 'penicillin'] }
});

DRUGS.push({
  id: 'phenoxymethylpenicillin',
  cls: 'antibiotic-penicillin',
  otc: false,
  alert: false,
  name:  { ar: 'الفينوكسي ميثيل بنسلين', en: 'Phenoxymethylpenicillin (Penicillin V)' },
  short: {
    ar: 'بنسلين فموي ضيّق المدى، خيار أول في التهاب اللوزتين البكتيري. ويُعطى وقايةً دائمة لمن استُؤصلت طحاله أو عنده منجلي، ولمنع عودة الحمّى الرثوية.',
    en: 'A narrow-spectrum oral penicillin, a first choice in bacterial tonsillitis. It is also given as long-term protection after spleen removal or in sickle cell disease, and to prevent rheumatic fever returning.'
  },
  brands: ['أوسبن', 'بنسلين في', 'فينوكسي بنسلين'],
  uses: ['tonsillitis', 'scarlet-fever', 'rheumatic-fever', 'cellulitis', 'dental-abscess', 'sickle-cell'],
  keywords: { ar: ['بنسلين', 'بنسلين ڤي', 'التهاب اللوزتين', 'حمى رثوية'], en: ['penicillin V', 'pen VK', 'strep throat', 'phenoxymethylpenicillin'] }
});

DRUGS.push({
  id: 'cloxacillin',
  cls: 'antibiotic-penicillin',
  otc: false,
  alert: false,
  name:  { ar: 'الكلوكساسيلين', en: 'Cloxacillin' },
  short: {
    ar: 'بنسلين مصنوع خصّيصاً ليقاوم إنزيم المكوّرات العنقودية، فهو سلاح عدوى الجلد والخرّاج والعظم. يُبلع على معدة خالية، ويحمل خطر يرقان متأخّر.',
    en: 'A penicillin built to resist the staphylococcal enzyme, making it the weapon for skin, abscess and bone infection. Taken on an empty stomach, it carries a risk of delayed jaundice.'
  },
  brands: ['أوربينين', 'كلوكساسيلين'],
  uses: ['cellulitis', 'skin-abscess', 'impetigo', 'folliculitis', 'osteomyelitis', 'septic-arthritis', 'mastitis'],
  keywords: { ar: ['كلوكساسيلين', 'عنقوديات', 'مضاد حيوي', 'خراج'], en: ['cloxacillin', 'staphylococcus', 'isoxazolyl penicillin', 'MSSA'] }
});

DRUGS.push({
  id: 'cefalexin',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'السيفاليكسين', en: 'Cefalexin (Cephalexin)' },
  short: {
    ar: 'سيفالوسبورين من الجيل الأول يُصرف كثيراً لالتهاب المسالك البولية وعدوى الجلد. آمن نسبياً، لكنه يشترك مع البنسلين في احتمال الحساسية.',
    en: 'A first-generation cephalosporin, widely prescribed for urinary tract and skin infections. Relatively safe, but it shares a possibility of allergy with penicillin.'
  },
  brands: ['كيفلكس', 'سيبوريكس', 'أوسبكسين'],
  uses: ['uti', 'cellulitis', 'skin-abscess', 'otitis-media', 'pneumonia', 'impetigo', 'osteomyelitis'],
  keywords: { ar: ['سيفاليكسين', 'سيفالوسبورين', 'كيفلكس', 'التهاب المسالك'], en: ['cephalexin', 'cefalexin', 'keflex', 'cephalosporin'] }
});

DRUGS.push({
  id: 'cefixime',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'السيفيكسيم', en: 'Cefixime' },
  short: {
    ar: 'سيفالوسبورين من الجيل الثالث يُبلع بالفم، مداه أوسع تجاه الجراثيم سالبة الغرام. يُوصف لالتهاب المسالك والأذن واللوزتين، وله موضع في السيلان.',
    en: 'A third-generation cephalosporin taken by mouth, with a wider reach against gram-negative bacteria. Prescribed for urinary, ear and tonsil infections, and it has a place in gonorrhoea.'
  },
  brands: ['سوبراكس', 'سيفيكس', 'زيفيم'],
  uses: ['uti', 'otitis-media', 'tonsillitis', 'acute-bronchitis', 'gonorrhea'],
  keywords: { ar: ['سيفيكسيم', 'سوبراكس', 'سيفالوسبورين', 'مضاد حيوي'], en: ['cefixime', 'suprax', 'third generation', 'cephalosporin'] }
});

DRUGS.push({
  id: 'cefuroxime',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'السيفوروكسيم', en: 'Cefuroxime (axetil)' },
  short: {
    ar: 'سيفالوسبورين من الجيل الثاني يجمع بين جراثيم الحلق والجلد وجراثيم الجيوب والقصبات. أقراصه تُبلع مع الأكل ولا تُسحق لمرارتها الشديدة.',
    en: 'A second-generation cephalosporin that spans throat and skin germs as well as sinus and airway germs. Its tablets are swallowed with food and never crushed, because of their intense bitterness.'
  },
  brands: ['زينات', 'سيفوروكسيم', 'زيناسيف'],
  uses: ['tonsillitis', 'otitis-media', 'sinusitis', 'acute-bronchitis', 'cellulitis', 'uti', 'gonorrhea'],
  keywords: { ar: ['سيفوروكسيم', 'زينات', 'سيفالوسبورين', 'جيوب أنفية'], en: ['cefuroxime', 'zinnat', 'ceftin', 'axetil'] }
});

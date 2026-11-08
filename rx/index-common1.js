/* ============================================================
   موسوعة الأدوية — فهرس الدفعة الأولى (أدوية شائعة بلا وصفة غالباً)
   rx/index-common1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'paracetamol',
  cls: 'analgesic',
  otc: true,
  alert: true,
  name:  { ar: 'الباراسيتامول', en: 'Paracetamol (Acetaminophen)' },
  short: {
    ar: 'مسكّن للألم وخافض للحرارة، ألطف المسكّنات على المعدة وأكثرها استعمالاً. خطره الوحيد المهمّ هو الكبد حين تُجمع كميّته من أكثر من علبة.',
    en: 'A painkiller and fever reducer, the gentlest of the common analgesics on the stomach. Its one serious danger is the liver, when doses are stacked from more than one packet.'
  },
  brands: ['بنادول', 'أدول', 'تايلينول', 'فيفادول', 'سيتال'],
  uses: ['tension-headache', 'common-cold', 'influenza', 'osteoarthritis', 'child-fever', 'tooth-decay'],
  keywords: { ar: ['مسكّن', 'خافض حرارة', 'باراسيتامول', 'اسيتامينوفين'], en: ['acetaminophen', 'APAP', 'analgesic', 'antipyretic'] }
});

DRUGS.push({
  id: 'ibuprofen',
  cls: 'nsaid',
  otc: true,
  alert: true,
  name:  { ar: 'الإيبوبروفين', en: 'Ibuprofen' },
  short: {
    ar: 'مضاد التهاب غير ستيرويدي: يسكّن الألم ويخفض الحرارة ويُنقص التورّم. يحمل تحذيراً رسمياً بشأن القلب والنزف المعدي.',
    en: 'A non-steroidal anti-inflammatory: it relieves pain, lowers fever and reduces swelling. It carries an official warning about the heart and stomach bleeding.'
  },
  brands: ['بروفين', 'أدفيل', 'نوروفين', 'إيبوفين'],
  uses: ['osteoarthritis', 'rheumatoid-arthritis', 'dysmenorrhea', 'migraine', 'low-back-pain', 'gout', 'ankle-sprain'],
  keywords: { ar: ['مضاد التهاب', 'مسكّن', 'بروفين', 'ايبوبروفين'], en: ['NSAID', 'anti-inflammatory', 'brufen', 'advil'] }
});

DRUGS.push({
  id: 'diclofenac',
  cls: 'nsaid',
  otc: false,
  alert: true,
  name:  { ar: 'الديكلوفيناك', en: 'Diclofenac' },
  short: {
    ar: 'مضاد التهاب غير ستيرويدي أقوى أثراً على ألم المفاصل، وأثقل على القلب والمعدة من غيره في فصيلته.',
    en: 'A non-steroidal anti-inflammatory with a stronger effect on joint pain, and a heavier burden on the heart and stomach than others in its class.'
  },
  brands: ['فولتارين', 'كاتافلام', 'روفيناك', 'ديكلوفيناك'],
  uses: ['osteoarthritis', 'rheumatoid-arthritis', 'dysmenorrhea', 'migraine', 'low-back-pain', 'gout'],
  keywords: { ar: ['مضاد التهاب', 'فولتارين', 'ديكلوفيناك', 'ألم المفاصل'], en: ['NSAID', 'voltaren', 'cataflam', 'anti-inflammatory'] }
});

DRUGS.push({
  id: 'aspirin-low-dose',
  cls: 'antiplatelet',
  otc: true,
  alert: true,
  name:  { ar: 'الأسبرين بالجرعة الوقائية', en: 'Low-dose Aspirin' },
  short: {
    ar: 'ليس مسكّناً هنا بل مانع تجلّط: يجعل الصفائح أقلّ التصاقاً فيقلّ خطر الجلطة القلبية والدماغية عند من أصابته من قبل.',
    en: 'Not a painkiller in this role but a clot preventer: it makes platelets less sticky, lowering the risk of heart attack and stroke in those who have already had one.'
  },
  brands: ['أسبرين بروتكت', 'جوسبرين', 'أسبوسيد'],
  uses: ['mi', 'stroke', 'angina', 'atherosclerosis', 'pad', 'preeclampsia'],
  keywords: { ar: ['مميّع', 'أسبرين', 'مانع تجلّط', 'وقاية من الجلطة'], en: ['aspirin', 'antiplatelet', 'ASA', 'salicylate'] }
});

DRUGS.push({
  id: 'omeprazole',
  cls: 'ppi',
  otc: true,
  alert: false,
  name:  { ar: 'الأوميبرازول', en: 'Omeprazole' },
  short: {
    ar: 'مثبّط مضخّة البروتون: يوقف مصنع الحمض في جدار المعدة نفسه، فيهدأ الحرقان وتلتئم القرحة.',
    en: 'A proton pump inhibitor: it shuts down the acid factory in the stomach wall itself, so heartburn settles and ulcers heal.'
  },
  brands: ['لوسيك', 'أوميز', 'غاسيك', 'ريسك'],
  uses: ['gerd', 'peptic-ulcer', 'h-pylori', 'dyspepsia'],
  keywords: { ar: ['حرقة المعدة', 'ارتجاع', 'قرحة', 'أوميبرازول'], en: ['PPI', 'losec', 'prilosec', 'acid reflux'] }
});

DRUGS.push({
  id: 'cetirizine',
  cls: 'antihistamine',
  otc: true,
  alert: false,
  name:  { ar: 'السيتريزين', en: 'Cetirizine' },
  short: {
    ar: 'مضاد هيستامين من الجيل الثاني يوقف العطاس والحكّة والشرى. أقلّ تنويماً من القديم، لكنه ينوّم بعض الناس فعلاً.',
    en: 'A second-generation antihistamine that stops sneezing, itching and hives. Less sedating than the old ones, but it does make some people sleepy.'
  },
  brands: ['زيرتك', 'سيترين', 'ألرجيكس'],
  uses: ['allergic-rhinitis', 'urticaria', 'eczema', 'food-allergy-adult'],
  keywords: { ar: ['حساسية', 'مضاد هيستامين', 'زيرتك', 'عطاس'], en: ['antihistamine', 'zyrtec', 'allergy', 'hives'] }
});

DRUGS.push({
  id: 'loratadine',
  cls: 'antihistamine',
  otc: true,
  alert: false,
  name:  { ar: 'اللوراتادين', en: 'Loratadine' },
  short: {
    ar: 'مضاد هيستامين لا ينوّم عادةً، فهو خيار من يحتاج صفاء ذهنه في العمل أو القيادة مع حساسيته.',
    en: 'An antihistamine that usually does not cause drowsiness, so it suits anyone who needs a clear head at work or at the wheel while treating their allergy.'
  },
  brands: ['كلاريتين', 'لوراتين', 'لورينيز'],
  uses: ['allergic-rhinitis', 'urticaria'],
  keywords: { ar: ['حساسية', 'مضاد هيستامين', 'كلاريتين', 'رشح'], en: ['antihistamine', 'claritin', 'hay fever', 'non-drowsy'] }
});

DRUGS.push({
  id: 'hydrocortisone-topical',
  cls: 'corticosteroid-topical',
  otc: true,
  alert: false,
  name:  { ar: 'الهيدروكورتيزون الموضعي', en: 'Topical Hydrocortisone' },
  short: {
    ar: 'كريم كورتيزون خفيف يُهدّئ احمرار الجلد وحكّته وتورّمه. علاج للالتهاب لا للعدوى، وعلى المصاب أن يعرف الفرق.',
    en: 'A mild steroid cream that calms redness, itching and swelling of the skin. It treats inflammation, not infection, and the difference matters.'
  },
  brands: ['هيدروكورتيزون', 'لوكويد', 'دِرماكورت'],
  uses: ['eczema', 'psoriasis', 'diaper-rash'],
  keywords: { ar: ['كريم كورتيزون', 'حكّة', 'إكزيما', 'هيدروكورتيزون'], en: ['steroid cream', 'hydrocortisone', 'eczema', 'dermatitis'] }
});

DRUGS.push({
  id: 'ors',
  cls: 'rehydration',
  otc: true,
  alert: false,
  name:  { ar: 'محلول معالجة الجفاف الفموي', en: 'Oral Rehydration Salts (ORS)' },
  short: {
    ar: 'ماء وملح وسكر بنسب محسوبة. لا يوقف الإسهال، لكنه يمنع الجفاف الذي يقتل — وهو من أرخص ما أنقذ الأرواح في الطبّ.',
    en: 'Water, salt and sugar in measured proportions. It does not stop diarrhoea, but it prevents the dehydration that kills, and is among the cheapest life-savers in medicine.'
  },
  brands: ['أوراليت', 'ريهيدران', 'بيديالايت'],
  uses: ['dehydration', 'cholera', 'food-poisoning', 'chronic-diarrhea'],
  keywords: { ar: ['جفاف', 'إسهال', 'أملاح معالجة الجفاف', 'محلول فموي'], en: ['ORS', 'rehydration', 'diarrhoea', 'electrolytes'] }
});

DRUGS.push({
  id: 'ferrous-sulfate',
  cls: 'mineral-supplement',
  otc: true,
  alert: true,
  name:  { ar: 'كبريتات الحديدوز', en: 'Ferrous Sulfate' },
  short: {
    ar: 'مكمّل حديد يعالج فقر الدم بنقص الحديد ويمنعه. آمن للكبار عموماً، وهو من أكثر أسباب التسمّم القاتل عند الأطفال الصغار.',
    en: 'An iron supplement that treats and prevents iron deficiency anaemia. Broadly safe for adults, and one of the leading causes of fatal poisoning in small children.'
  },
  brands: ['فيروجراد', 'فيفول', 'فيروس سلفات'],
  uses: ['iron-anemia', 'child-iron-anemia'],
  keywords: { ar: ['حديد', 'فقر دم', 'أنيميا', 'مكمّل'], en: ['iron', 'anaemia', 'ferrous', 'supplement'] }
});

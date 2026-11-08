/* ============================================================
   موسوعة الأدوية — فهرس دفعة viral2
   (علاج فيروس نقص المناعة البشري: مثبّطات الأنتيغراز · مثبّطات البروتياز المعزّزة · الخلطات الثابتة)
   rx/index-viral2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   كل بطاقة كُتبت من نشرة رسمية مفتوحة وقت الكتابة — المصادر في rx-viral2.js
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* فصائل هذه الدفعة — تُضاف فقط إن لم تكن معرّفة (دفعات أخرى قد تسبقنا) */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'antiretroviral-pi':     { ar: 'مثبّطات البروتياز',                   en: 'Antiretrovirals — protease inhibitors' },
    'antiretroviral-nrti':   { ar: 'مثبّطات النسخ العكسي النيوكليوسيدية', en: 'Antiretrovirals — NRTIs' },
    'antiretroviral-insti':  { ar: 'مثبّطات إنزيم الدمج (الأنتيغراز)',    en: 'Antiretrovirals — integrase inhibitors' },
    'antiretroviral-combo':  { ar: 'خلطات علاج فيروس نقص المناعة الثابتة', en: 'Antiretrovirals — fixed-dose combinations' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'infection'; } }
  }
})();

DRUGS.push({
  id: 'atazanavir-ritonavir',
  cls: 'antiretroviral-pi',
  otc: false,
  alert: true,
  name:  { ar: 'الأتازانافير مع الريتونافير', en: 'Atazanavir + ritonavir' },
  short: {
    ar: 'مثبّط بروتياز يُؤخذ مع الطعام ومعه ريتونافير لا للعلاج بل ليحرس الأتازانافير من تكسير الكبد. علامته المميّزة اصفرار العينين الحميد الناتج عن البيليروبين غير المباشر لا عن أذى كبدي.',
    en: 'A protease inhibitor taken with food, paired with ritonavir not as treatment but to shield atazanavir from liver breakdown. Its signature is a harmless yellowing of the eyes caused by indirect bilirubin, not by liver injury.'
  },
  brands: ['ريياتاز', 'نورفير', 'أتازانافير'],
  uses: ['hiv', 'immunodeficiency'],
  keywords: { ar: ['أتازانافير', 'ريتونافير', 'مثبط بروتياز', 'إيدز', 'اصفرار العين', 'معزّز'], en: ['atazanavir', 'ritonavir', 'reyataz', 'norvir', 'protease inhibitor', 'boosted PI', 'HIV'] }
});

DRUGS.push({
  id: 'lopinavir-ritonavir',
  cls: 'antiretroviral-pi',
  otc: false,
  alert: true,
  name:  { ar: 'اللوبينافير مع الريتونافير', en: 'Lopinavir + ritonavir' },
  short: {
    ar: 'قرص واحد يجمع مثبّط بروتياز ومعزّزه في تركيبة ثابتة، وهو من أقدم خطوط الإنقاذ وأكثرها تعارضاً مع أدوية أخرى. أشهر أثره الإسهال، وأخطر ما فيه التهاب البنكرياس وأذى الكبد واضطراب نظم القلب.',
    en: 'A single tablet joining a protease inhibitor with its booster in one fixed formulation, one of the oldest salvage backbones and among the most interaction-prone. Diarrhoea is its commonest effect; pancreatitis, liver injury and heart-rhythm disturbance are its most dangerous.'
  },
  brands: ['كاليترا', 'ألوفيا'],
  uses: ['hiv', 'immunodeficiency'],
  keywords: { ar: ['لوبينافير', 'ريتونافير', 'كاليترا', 'مثبط بروتياز', 'إيدز', 'التهاب البنكرياس'], en: ['lopinavir', 'ritonavir', 'kaletra', 'aluvia', 'protease inhibitor', 'HIV', 'pancreatitis'] }
});

DRUGS.push({
  id: 'dolutegravir',
  cls: 'antiretroviral-insti',
  otc: false,
  alert: true,
  name:  { ar: 'الدولوتيجرافير', en: 'Dolutegravir' },
  short: {
    ar: 'مثبّط لإنزيم الدمج يمنع الفيروس من خياطة نفسه داخل حمض الخلية النووي. صار العمود الذي توصي به منظمة الصحة العالمية في الخط الأول والثاني لكل الفئات، لسهولته وقلّة أعراضه وصلابته أمام المقاومة.',
    en: 'An integrase inhibitor that stops the virus stitching itself into the DNA of the cell. It has become the backbone the World Health Organization recommends in first and second line for all populations, for its simplicity, low burden of side effects and high barrier to resistance.'
  },
  brands: ['تيفيكاي', 'دولوتيجرافير'],
  uses: ['hiv', 'immunodeficiency'],
  keywords: { ar: ['دولوتيجرافير', 'تيفيكاي', 'مثبط أنتيغراز', 'إيدز', 'إنزيم الدمج'], en: ['dolutegravir', 'tivicay', 'integrase inhibitor', 'INSTI', 'HIV', 'DTG'] }
});

DRUGS.push({
  id: 'raltegravir',
  cls: 'antiretroviral-insti',
  otc: false,
  alert: true,
  name:  { ar: 'الرالتيجرافير', en: 'Raltegravir' },
  short: {
    ar: 'أول مثبّط لإنزيم الدمج دخل الاستعمال، ولا يزال خياراً مفضّلاً حين تكثر أدوية المريض الأخرى لأنه قليل التعارض. تحذيراه الكبيران: تفاعلات جلدية شديدة قد تصل متلازمة ستيفنز-جونسون، وانحلال العضلات.',
    en: 'The first integrase inhibitor to reach practice, still a favoured option when a patient is on many other medicines because it interacts little. Its two big warnings: severe skin reactions that can reach Stevens-Johnson syndrome, and muscle breakdown.'
  },
  brands: ['إيسنتريس', 'رالتيجرافير'],
  uses: ['hiv', 'immunodeficiency'],
  keywords: { ar: ['رالتيجرافير', 'إيسنتريس', 'مثبط أنتيغراز', 'إيدز', 'انحلال العضلات', 'طفح شديد'], en: ['raltegravir', 'isentress', 'integrase inhibitor', 'INSTI', 'HIV', 'rhabdomyolysis'] }
});

DRUGS.push({
  id: 'abacavir-lamivudine',
  cls: 'antiretroviral-nrti',
  otc: false,
  alert: true,
  name:  { ar: 'الأباكافير مع اللاميفودين', en: 'Abacavir + lamivudine' },
  short: {
    ar: 'زوج نيوكليوسيدي في قرص واحد يُبنى عليه علاج فيروس نقص المناعة مع دواء ثالث. لا يُبدأ أبداً قبل تحليل جين HLA-B*5701، ومن ظهر عنده تفاعل تحسّسي عليه لا يعود إليه أبداً — العودة قد تقتل.',
    en: 'A nucleoside pair in one tablet on which an HIV regimen is built with a third drug. It is never started before HLA-B*5701 testing, and anyone who has had a hypersensitivity reaction to it must never take it again — rechallenge can kill.'
  },
  brands: ['كيفيكسا', 'إبزيكوم', 'أباكافير/لاميفودين'],
  uses: ['hiv', 'immunodeficiency'],
  keywords: { ar: ['أباكافير', 'لاميفودين', 'كيفيكسا', 'إبزيكوم', 'إيدز', 'تحسس', 'HLA-B*5701'], en: ['abacavir', 'lamivudine', 'kivexa', 'epzicom', 'NRTI', 'HIV', 'HLA-B*5701', 'hypersensitivity'] }
});

DRUGS.push({
  id: 'abacavir-dolutegravir-lamivudine',
  cls: 'antiretroviral-combo',
  otc: false,
  alert: true,
  name:  { ar: 'الأباكافير مع الدولوتيجرافير واللاميفودين', en: 'Abacavir + dolutegravir + lamivudine' },
  short: {
    ar: 'علاج كامل لفيروس نقص المناعة في قرص واحد: نيوكليوسيدان ومثبّط لإنزيم الدمج معاً. يرث من الأباكافير شرط تحليل الجين قبل البدء، ومن الدولوتيجرافير قوّته أمام المقاومة.',
    en: 'A complete HIV regimen in a single tablet: two nucleosides plus an integrase inhibitor together. From abacavir it inherits the requirement for genetic testing before starting, and from dolutegravir its strength against resistance.'
  },
  brands: ['ترايوميك', 'تريوميك'],
  uses: ['hiv', 'immunodeficiency'],
  keywords: { ar: ['أباكافير', 'دولوتيجرافير', 'لاميفودين', 'ترايوميك', 'إيدز', 'قرص واحد'], en: ['abacavir', 'dolutegravir', 'lamivudine', 'triumeq', 'single tablet regimen', 'HIV'] }
});

DRUGS.push({
  id: 'dolutegravir-lamivudine-tenofovir',
  cls: 'antiretroviral-combo',
  otc: false,
  alert: true,
  name:  { ar: 'الدولوتيجرافير مع اللاميفودين والتينوفوفير', en: 'Dolutegravir + lamivudine + tenofovir' },
  short: {
    ar: 'الخلطة المعروفة اختصاراً بـTLD، وهي علاج كامل في قرص واحد صار العمود الأول لبرامج علاج الإيدز في أكثر بلاد العالم. مراقبته الدائمة على الكلى والعظام بسبب التينوفوفير.',
    en: 'The combination known by the shorthand TLD, a complete regimen in one tablet that has become the first backbone of HIV programmes in most of the world. Its standing watch is on the kidneys and bones, because of tenofovir.'
  },
  brands: ['أكريبتيغا', 'تي إل دي'],
  uses: ['hiv', 'immunodeficiency'],
  keywords: { ar: ['دولوتيجرافير', 'لاميفودين', 'تينوفوفير', 'تي إل دي', 'إيدز', 'كلى', 'عظام'], en: ['dolutegravir', 'lamivudine', 'tenofovir', 'TLD', 'HIV', 'kidney', 'bone'] }
});

DRUGS.push({
  id: 'efavirenz-lamivudine-tenofovir',
  cls: 'antiretroviral-combo',
  otc: false,
  alert: true,
  name:  { ar: 'الإيفافيرينز مع اللاميفودين والتينوفوفير', en: 'Efavirenz + lamivudine + tenofovir' },
  short: {
    ar: 'خلطة قديمة في قرص واحد تُبلع على معدة خالية، وأشهر ما فيها أحلام غريبة ودوخة وتشوّش تركيز تخفّ غالباً مع الأسابيع الأولى. لكن الاكتئاب والأفكار الانتحارية والهلوسة تحذير رسمي قائم لا يُهمَل.',
    en: 'An older combination in one tablet swallowed on an empty stomach, best known for vivid dreams, dizziness and poor concentration that usually ease over the first weeks. But depression, suicidal thoughts and hallucinations remain a standing official warning.'
  },
  brands: ['سيمفي', 'سيمفي لو'],
  uses: ['hiv', 'immunodeficiency'],
  keywords: { ar: ['إيفافيرينز', 'لاميفودين', 'تينوفوفير', 'سيمفي', 'إيدز', 'أحلام غريبة', 'اكتئاب'], en: ['efavirenz', 'lamivudine', 'tenofovir', 'symfi', 'HIV', 'vivid dreams', 'depression'] }
});

DRUGS.push({
  id: 'efavirenz-emtricitabine-tenofovir',
  cls: 'antiretroviral-combo',
  otc: false,
  alert: true,
  name:  { ar: 'الإيفافيرينز مع الإمتريسيتابين والتينوفوفير', en: 'Efavirenz + emtricitabine + tenofovir' },
  short: {
    ar: 'أول علاج كامل للإيدز يجتمع في قرص واحد يُؤخذ على معدة خالية، وغالباً عند النوم لتمرّ آثاره العصبية والمريض نائم. يشترك مع أخيه في تحذير الاكتئاب، ويزيد عليه تصبّغ الكفّين والقدمين من الإمتريسيتابين.',
    en: 'The first complete HIV regimen gathered into one tablet, taken on an empty stomach and often at bedtime so its nervous-system effects pass while the patient sleeps. It shares the depression warning with its sibling, and adds darkening of the palms and soles from emtricitabine.'
  },
  brands: ['أتريبلا'],
  uses: ['hiv', 'immunodeficiency'],
  keywords: { ar: ['إيفافيرينز', 'إمتريسيتابين', 'تينوفوفير', 'أتريبلا', 'إيدز', 'قرص واحد'], en: ['efavirenz', 'emtricitabine', 'tenofovir', 'atripla', 'HIV', 'single tablet regimen'] }
});

DRUGS.push({
  id: 'emtricitabine-tenofovir',
  cls: 'antiretroviral-nrti',
  otc: false,
  alert: true,
  name:  { ar: 'الإمتريسيتابين مع التينوفوفير', en: 'Emtricitabine + tenofovir' },
  short: {
    ar: 'قرص واحد بوجهين: عمود في علاج فيروس نقص المناعة مع دواء ثالث، ووقاية قبل التعرّض لمن هو سليم ومعرّض للعدوى. وأخطر خطأ فيه أن يُؤخذ للوقاية ومعه عدوى غير مكتشفة، فتنشأ مقاومة.',
    en: 'One tablet with two faces: a backbone of HIV treatment alongside a third drug, and pre-exposure prophylaxis for an uninfected person at risk. Its most dangerous error is being taken for prevention while an undiagnosed infection is present, breeding resistance.'
  },
  brands: ['تروفادا', 'إمتريسيتابين/تينوفوفير'],
  uses: ['hiv', 'immunodeficiency'],
  keywords: { ar: ['إمتريسيتابين', 'تينوفوفير', 'تروفادا', 'وقاية قبل التعرض', 'إيدز', 'كلى'], en: ['emtricitabine', 'tenofovir', 'truvada', 'PrEP', 'pre-exposure prophylaxis', 'HIV'] }
});

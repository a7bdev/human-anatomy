/* ============================================================
   موسوعة الأدوية — فهرس دفعة viral3
   (خلطة قديمة لفيروس نقص المناعة · قرص الوقاية الرباعي · مضادات التهاب الكبد سي المباشرة · جسم مضاد لإيبولا)
   rx/index-viral3.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   كل بطاقة كُتبت من نشرة رسمية مفتوحة وقت الكتابة — المصادر في rx-viral3.js
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* فصائل هذه الدفعة — تُضاف فقط إن لم تكن معرّفة (دفعات أخرى قد تسبقنا) */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'antiviral-hepatitis':   { ar: 'مضادات فيروسات الكبد',                  en: 'Hepatitis antivirals' },
    'antiretroviral-combo':  { ar: 'خلطات علاج فيروس نقص المناعة الثابتة',   en: 'Antiretrovirals — fixed-dose combinations' },
    'hiv-prophylaxis':       { ar: 'وقاية العداوى الانتهازية',              en: 'Opportunistic-infection prophylaxis' },
    'antiviral-antibody':    { ar: 'أجسام مضادة وحيدة النسيلة للفيروسات',   en: 'Antiviral monoclonal antibodies' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'infection'; } }
  }
})();

DRUGS.push({
  id: 'lamivudine-zidovudine',
  cls: 'antiretroviral-combo',
  otc: false,
  alert: true,
  name:  { ar: 'اللاميفودين مع الزيدوفودين', en: 'Lamivudine + zidovudine' },
  short: {
    ar: 'قرص ثابت يجمع دواءين قديمين ضد فيروس نقص المناعة البشري، ويُعطى دائماً مع دواء ثالث. أخطر ما فيه هبوط خلايا الدم وتراكم حمض اللبن وأذى الكبد، وقد يتدهور التهاب الكبد بي إن أُوقف فجأة.',
    en: 'A fixed tablet joining two older medicines against the human immunodeficiency virus, always given with a third drug. Its main dangers are falling blood counts, lactic acid build-up and liver injury, and hepatitis B may flare if it is stopped suddenly.'
  },
  brands: ['كومبيفير'],
  uses: ['hiv', 'immunodeficiency'],
  keywords: { ar: ['لاميفودين', 'زيدوفودين', 'كومبيفير', 'إيدز', 'فقر دم', 'حمض اللبن'], en: ['lamivudine', 'zidovudine', 'combivir', 'AZT', 'ZDV', '3TC', 'NRTI', 'HIV'] }
});

DRUGS.push({
  id: 'isoniazid-pyridoxine-sulfamethoxazole-trimethoprim',
  cls: 'hiv-prophylaxis',
  otc: false,
  alert: true,
  name:  { ar: 'الأيزونيازيد مع فيتامين ب٦ والكوتريموكسازول', en: 'Isoniazid + pyridoxine + sulfamethoxazole + trimethoprim' },
  short: {
    ar: 'قرص وقائي رباعي للمتعايشين مع فيروس نقص المناعة يمنع السلّ والتهاب الرئة بالمتكيّسة وداء المقوّسات والملاريا والعداوى البكتيرية. يُوقف فوراً عند طفح بفقاعات أو اصفرار، ولا يُعطى لمن عنده سلّ نشط.',
    en: 'A four-in-one preventive tablet for people living with HIV that guards against tuberculosis, pneumocystis pneumonia, toxoplasmosis, malaria and bacterial infections. It is stopped at once for a blistering rash or jaundice, and is not given to anyone with active tuberculosis.'
  },
  brands: ['كيو-تيب'],
  uses: ['hiv', 'immunodeficiency', 'tb', 'pneumonia', 'toxoplasmosis', 'malaria'],
  keywords: { ar: ['أيزونيازيد', 'بيريدوكسين', 'كوتريموكسازول', 'سلفاميثوكسازول', 'تريميثوبريم', 'وقاية السل', 'عدوى انتهازية'], en: ['isoniazid', 'pyridoxine', 'cotrimoxazole', 'sulfamethoxazole', 'trimethoprim', 'Q-TIB', 'TB preventive therapy', 'PCP prophylaxis'] }
});

DRUGS.push({
  id: 'sofosbuvir',
  cls: 'antiviral-hepatitis',
  otc: false,
  alert: true,
  name:  { ar: 'السوفوسبوفير', en: 'Sofosbuvir' },
  short: {
    ar: 'العمود الذي بُنيت عليه علاجات التهاب الكبد سي الحديثة، ولا يُعطى وحده أبداً بل مع شريك. خطره الأكبر بطء قلب قاتل إن جُمع مع الأميودارون، ونشاط التهاب الكبد بي الكامن.',
    en: 'The backbone of modern hepatitis C treatment, never given alone but always with a partner drug. Its biggest dangers are a fatal slowing of the heart when combined with amiodarone, and reactivation of hidden hepatitis B.'
  },
  brands: ['سوفالدي'],
  uses: ['hepatitis-c', 'viral-hepatitis'],
  keywords: { ar: ['سوفوسبوفير', 'سوفالدي', 'التهاب الكبد سي', 'فيروس سي', 'أميودارون'], en: ['sofosbuvir', 'sovaldi', 'NS5B', 'hepatitis C', 'HCV', 'DAA'] }
});

DRUGS.push({
  id: 'sofosbuvir-velpatasvir',
  cls: 'antiviral-hepatitis',
  otc: false,
  alert: true,
  name:  { ar: 'السوفوسبوفير مع الفيلباتاسفير', en: 'Sofosbuvir + velpatasvir' },
  short: {
    ar: 'قرص شامل لكل الأنماط الجينية لفيروس التهاب الكبد سي، وله حبيبات للأطفال. أدوية الحموضة تضعفه، والأميودارون معه قد يبطئ القلب بخطورة، ويُفحص التهاب الكبد بي قبل البدء.',
    en: 'A pangenotypic tablet for hepatitis C with a pellet form for children. Acid-lowering medicines weaken it, amiodarone with it can slow the heart dangerously, and hepatitis B is tested for before starting.'
  },
  brands: ['إبكلوسا'],
  uses: ['hepatitis-c', 'viral-hepatitis'],
  keywords: { ar: ['سوفوسبوفير', 'فيلباتاسفير', 'إبكلوسا', 'التهاب الكبد سي', 'شامل الأنماط'], en: ['sofosbuvir', 'velpatasvir', 'epclusa', 'pangenotypic', 'NS5A', 'hepatitis C', 'HCV'] }
});

DRUGS.push({
  id: 'daclatasvir',
  cls: 'antiviral-hepatitis',
  otc: false,
  alert: true,
  name:  { ar: 'الداكلاتاسفير', en: 'Daclatasvir' },
  short: {
    ar: 'أول دواء في فئته ضد التهاب الكبد سي، يُقرن دائماً بالسوفوسبوفير. تعارضاته كثيرة: أدوية الصرع والريفامبيسين ونبتة سانت جون ممنوعة معه، والأميودارون قد يوقف القلب. ويُمنع في الحمل والرضاعة.',
    en: 'The first drug of its class against hepatitis C, always paired with sofosbuvir. It has many interactions: epilepsy drugs, rifampicin and St John\'s wort are forbidden with it, and amiodarone can stop the heart. It is avoided in pregnancy and breastfeeding.'
  },
  brands: ['داكلينزا'],
  uses: ['hepatitis-c', 'viral-hepatitis'],
  keywords: { ar: ['داكلاتاسفير', 'داكلينزا', 'التهاب الكبد سي', 'فيروس سي'], en: ['daclatasvir', 'daklinza', 'NS5A', 'hepatitis C', 'HCV'] }
});

DRUGS.push({
  id: 'daclatasvir-sofosbuvir',
  cls: 'antiviral-hepatitis',
  otc: false,
  alert: true,
  name:  { ar: 'الداكلاتاسفير مع السوفوسبوفير', en: 'Daclatasvir + sofosbuvir' },
  short: {
    ar: 'قرص واحد يجمع الثنائي الشامل لأنماط التهاب الكبد سي، مدرج في قائمة الأدوية الأساسية لمنظمة الصحة. يجمع تحذيرات مكوّنيه: بطء القلب مع الأميودارون، ونشاط التهاب الكبد بي، ومنع الحمل.',
    en: 'A single tablet holding the pangenotypic pair for hepatitis C, listed on the WHO essential medicines list. It carries the warnings of both components: slow heart with amiodarone, hepatitis B reactivation, and avoidance in pregnancy.'
  },
  brands: ['داكلينزا', 'سوفالدي'],
  uses: ['hepatitis-c', 'viral-hepatitis'],
  keywords: { ar: ['داكلاتاسفير', 'سوفوسبوفير', 'التهاب الكبد سي', 'قرص مركب', 'شامل الأنماط'], en: ['daclatasvir', 'sofosbuvir', 'fixed-dose combination', 'pangenotypic', 'hepatitis C', 'HCV'] }
});

DRUGS.push({
  id: 'ledipasvir-sofosbuvir',
  cls: 'antiviral-hepatitis',
  otc: false,
  alert: true,
  name:  { ar: 'الليديباسفير مع السوفوسبوفير', en: 'Ledipasvir + sofosbuvir' },
  short: {
    ar: 'قرص مركّب لالتهاب الكبد سي يغطّي أنماطاً جينية محدّدة لا كلها، وله حبيبات للأطفال. أدوية الحموضة تضعفه، والروزوفاستاتين ممنوع معه، والأميودارون قد يبطئ القلب حتى التوقّف.',
    en: 'A combination tablet for hepatitis C covering certain genotypes, not all, with a pellet form for children. Acid-lowering medicines weaken it, rosuvastatin is not used with it, and amiodarone can slow the heart to the point of arrest.'
  },
  brands: ['هارفوني'],
  uses: ['hepatitis-c', 'viral-hepatitis'],
  keywords: { ar: ['ليديباسفير', 'سوفوسبوفير', 'هارفوني', 'التهاب الكبد سي'], en: ['ledipasvir', 'sofosbuvir', 'harvoni', 'NS5A', 'hepatitis C', 'HCV'] }
});

DRUGS.push({
  id: 'glecaprevir-pibrentasvir',
  cls: 'antiviral-hepatitis',
  otc: false,
  alert: true,
  name:  { ar: 'الجليكابريفير مع البيبرينتاسفير', en: 'Glecaprevir + pibrentasvir' },
  short: {
    ar: 'قرص شامل لأنماط التهاب الكبد سي بلا سوفوسبوفير، يُؤخذ مع الطعام. ممنوع في ضعف الكبد المتوسّط والشديد وعند من انهار كبده سابقاً، ومع الأتازانافير والريفامبيسين.',
    en: 'A pangenotypic hepatitis C tablet without sofosbuvir, taken with food. It is forbidden in moderate or severe liver impairment, after any previous liver decompensation, and with atazanavir or rifampicin.'
  },
  brands: ['مافيريت'],
  uses: ['hepatitis-c', 'viral-hepatitis'],
  keywords: { ar: ['جليكابريفير', 'غليكابريفير', 'بيبرينتاسفير', 'مافيريت', 'التهاب الكبد سي'], en: ['glecaprevir', 'pibrentasvir', 'maviret', 'mavyret', 'pangenotypic', 'protease inhibitor', 'hepatitis C', 'HCV'] }
});

DRUGS.push({
  id: 'ravidasvir',
  cls: 'antiviral-hepatitis',
  otc: false,
  alert: true,
  name:  { ar: 'الرافيداسفير', en: 'Ravidasvir' },
  short: {
    ar: 'مضاد لالتهاب الكبد سي طُوّر بشراكة غير ربحية ليكون ميسور الكلفة، ويُقرن دائماً بالسوفوسبوفير فتنطبق عليه تحذيراته. سُجّل في مصر وماليزيا وأدرجته منظمة الصحة في قائمة الأدوية الأساسية.',
    en: 'A hepatitis C antiviral developed through a not-for-profit partnership to be affordable, always paired with sofosbuvir so its warnings apply. Registered in Egypt and Malaysia and listed by the WHO as an essential medicine.'
  },
  brands: ['رافيدا'],
  uses: ['hepatitis-c', 'viral-hepatitis'],
  keywords: { ar: ['رافيداسفير', 'رافيدا', 'التهاب الكبد سي', 'سوفوسبوفير'], en: ['ravidasvir', 'ravida', 'NS5A', 'DNDi', 'hepatitis C', 'HCV'] }
});

DRUGS.push({
  id: 'ansuvimab',
  cls: 'antiviral-antibody',
  otc: false,
  alert: false,
  name:  { ar: 'الأنسوفيماب', en: 'Ansuvimab (ansuvimab-zykl)' },
  short: {
    ar: 'جسم مضاد بشري يُعطى في الوريد داخل مراكز العلاج لمرضى إيبولا من سلالة زائير، بالغين وأطفالاً ومواليد. يمنع الفيروس من دخول الخلايا، وأهمّ ما يُراقَب معه تفاعلات التحسّس أثناء التسريب.',
    en: 'A human antibody given into a vein inside treatment centres for Zaire ebolavirus infection in adults, children and newborns. It stops the virus entering cells, and the main thing watched for is an allergic reaction during the infusion.'
  },
  brands: ['إيبانغا'],
  uses: [],
  keywords: { ar: ['أنسوفيماب', 'إيبانغا', 'إيبولا', 'جسم مضاد وحيد النسيلة', 'حمى نزفية'], en: ['ansuvimab', 'ansuvimab-zykl', 'ebanga', 'mAb114', 'Ebola', 'Zaire ebolavirus', 'monoclonal antibody'] }
});

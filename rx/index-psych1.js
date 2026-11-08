/* ============================================================
   موسوعة الأدوية — فهرس دفعة الطب النفسي الأولى
   rx/index-psych1.js   (يُحمَّل دائماً — خفيف)
   مضادات الذهان · مثبّتات المزاج · أدوية الإدمان والإقلاع عن التدخين
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* فصائل هذه الدفعة — تُضاف إن لم تكن موجودة، ولا تُكتب فوق فصيلة سابقة
   (عمّال آخرون يشتغلون بالتوازي على ملفات أخرى) */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'antipsychotic-typical':  { ar: 'مضادات الذهان التقليدية', en: 'First-generation antipsychotics' },
    'antipsychotic-atypical': { ar: 'مضادات الذهان الحديثة', en: 'Second-generation antipsychotics' },
    'mood-stabilizer':        { ar: 'مثبّتات المزاج', en: 'Mood stabilisers' },
    'antidepressant-ndri':    { ar: 'مضادات الاكتئاب — مثبّطات استرداد النورأدرينالين والدوبامين', en: 'NDRI antidepressants' },
    'addiction-treatment':    { ar: 'أدوية علاج الإدمان', en: 'Addiction treatment medicines' },
    'smoking-cessation':      { ar: 'أدوية الإقلاع عن التدخين', en: 'Smoking cessation medicines' }
  };
  var grp = {
    'antipsychotic-typical': 'psych', 'antipsychotic-atypical': 'psych',
    'mood-stabilizer': 'psych', 'antidepressant-ndri': 'psych',
    'addiction-treatment': 'psych', 'smoking-cessation': 'psych'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_GROUPS !== 'undefined' && DRUG_GROUPS) {
    if (!DRUG_GROUPS.psych) { DRUG_GROUPS.psych = { ar: 'الصحة النفسية', en: 'Mental health' }; }
  }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
})();

DRUGS.push({
  id: 'quetiapine',
  cls: 'antipsychotic-atypical',
  otc: false,
  alert: true,
  name:  { ar: 'الكويتيابين', en: 'Quetiapine' },
  short: {
    ar: 'مضاد ذهان حديث يُستعمل في الفصام وثنائي القطب ويُضاف أحياناً في الاكتئاب الشديد. يُنعس ويزيد الوزن والسكّر والدهون، ويلزمه فحص عين دوري، ولا يُوقف فجأة.',
    en: 'A second-generation antipsychotic used in schizophrenia and bipolar disorder, and sometimes added in severe depression. It causes drowsiness and raises weight, blood sugar and lipids, needs periodic eye checks, and must never be stopped abruptly.'
  },
  brands: ['سيروكويل', 'سيروكويل إكس آر', 'كوتيابين'],
  uses: ['schizophrenia', 'bipolar-disorder', 'depression'],
  keywords: { ar: ['مضاد ذهان', 'فصام', 'ثنائي القطب', 'كويتيابين', 'سيروكويل', 'مثبت مزاج'], en: ['seroquel', 'quetiapine', 'antipsychotic', 'atypical', 'bipolar', 'schizophrenia'] }
});

DRUGS.push({
  id: 'paliperidone',
  cls: 'antipsychotic-atypical',
  otc: false,
  alert: true,
  name:  { ar: 'الباليبيريدون', en: 'Paliperidone' },
  short: {
    ar: 'مضاد ذهان حديث للفصام والاضطراب الفصامي العاطفي، وهو المستقلَب الفعّال للريسبيريدون. له قرص ممتد المفعول وحقنة طويلة الأمد تُغني عن القرص اليومي.',
    en: 'A second-generation antipsychotic for schizophrenia and schizoaffective disorder, and the major active metabolite of risperidone. It comes as an extended-release tablet and as a long-acting injection that replaces the daily tablet.'
  },
  brands: ['إنفيجا', 'إنفيجا سوستينا', 'إنفيجا ترينزا'],
  uses: ['schizophrenia'],
  keywords: { ar: ['مضاد ذهان', 'فصام', 'باليبيريدون', 'إنفيجا', 'حقنة طويلة المفعول'], en: ['invega', 'paliperidone', 'sustenna', 'antipsychotic', 'long-acting injection'] }
});

DRUGS.push({
  id: 'clozapine',
  cls: 'antipsychotic-atypical',
  otc: false,
  alert: true,
  name:  { ar: 'الكلوزابين', en: 'Clozapine' },
  short: {
    ar: 'أقوى دواء للفصام المقاوم للعلاج، ولا يُبدأ إلا بعد فشل دواءين. يلزمه تحليل دم منتظم مدى العلاج لأنه قد يمحو كريات الدم البيضاء، وله تحذيرات قلبية ومعوية.',
    en: 'The most effective drug for treatment-resistant schizophrenia, started only after two other drugs have failed. It requires regular blood tests throughout treatment because it can wipe out white blood cells, and carries cardiac and bowel warnings.'
  },
  brands: ['ليبونكس', 'كلوزاريل', 'كلوزابين'],
  uses: ['schizophrenia'],
  keywords: { ar: ['مضاد ذهان', 'فصام مقاوم', 'كلوزابين', 'ليبونكس', 'ندرة المحببات', 'تحليل دم'], en: ['clozapine', 'clozaril', 'leponex', 'agranulocytosis', 'treatment-resistant schizophrenia'] }
});

DRUGS.push({
  id: 'fluphenazine',
  cls: 'antipsychotic-typical',
  otc: false,
  alert: true,
  name:  { ar: 'الفلوفينازين', en: 'Fluphenazine' },
  short: {
    ar: 'مضاد ذهان تقليدي من فصيلة الفينوثيازين، وأشهر صوره حقنة مستودعية طويلة المفعول للفصام المزمن. أبرز مخاوفه الحركات اللاإرادية الدائمة وتيبّس العضلات.',
    en: 'A first-generation phenothiazine antipsychotic, best known as a long-acting depot injection for chronic schizophrenia. Its main concerns are permanent involuntary movements and muscle stiffness.'
  },
  brands: ['مودكيت', 'برولكسين', 'فلوفينازين ديكانوات'],
  uses: ['schizophrenia'],
  keywords: { ar: ['مضاد ذهان', 'فصام', 'فلوفينازين', 'مودكيت', 'حقنة مستودعية', 'فينوثيازين'], en: ['fluphenazine', 'modecate', 'prolixin', 'decanoate', 'depot', 'phenothiazine'] }
});

DRUGS.push({
  id: 'lithium-carbonate',
  cls: 'mood-stabilizer',
  otc: false,
  alert: true,
  name:  { ar: 'كربونات الليثيوم', en: 'Lithium carbonate' },
  short: {
    ar: 'أقدم مثبّتات المزاج وأقواها في ثنائي القطب، وأضيقها هامش أمان: الفرق بين الجرعة النافعة والسامّة صغير، فيُقاس مستواه في الدم دورياً وتُتابع الكلى والدرقية.',
    en: 'The oldest and strongest mood stabiliser in bipolar disorder, and the one with the narrowest safety margin: the gap between a useful and a toxic level is small, so blood levels, kidneys and thyroid are monitored.'
  },
  brands: ['بريادل', 'كامكوليت', 'ليثوبيد', 'ليثيوم كربونات'],
  uses: ['bipolar-disorder', 'depression'],
  keywords: { ar: ['مثبت مزاج', 'ثنائي القطب', 'هوس', 'ليثيوم', 'تسمم', 'مستوى الدم'], en: ['lithium', 'priadel', 'camcolit', 'mood stabiliser', 'mania', 'bipolar', 'toxicity'] }
});

DRUGS.push({
  id: 'acamprosate-calcium',
  cls: 'addiction-treatment',
  otc: false,
  alert: false,
  name:  { ar: 'الأكامبروسات', en: 'Acamprosate calcium' },
  short: {
    ar: 'قرص يساعد من توقّف عن الكحول على أن يبقى متوقّفاً، مع المتابعة النفسية والدعم. لا يعالج أعراض الانسحاب ولا يسبّب نفوراً عند الشرب، ويُوقف عمله بمجرّد إيقافه.',
    en: 'A tablet that helps someone who has already stopped drinking to stay stopped, alongside counselling and support. It does not treat withdrawal and does not cause a reaction to alcohol, and its effect ends when it is stopped.'
  },
  brands: ['كامبرال', 'أكامبروسات'],
  uses: ['substance-addiction'],
  keywords: { ar: ['إدمان', 'كحول', 'أكامبروسات', 'كامبرال', 'امتناع', 'انتكاسة'], en: ['acamprosate', 'campral', 'alcohol use disorder', 'abstinence', 'relapse prevention'] }
});

DRUGS.push({
  id: 'naltrexone',
  cls: 'addiction-treatment',
  otc: false,
  alert: true,
  name:  { ar: 'النالتريكسون', en: 'Naltrexone' },
  short: {
    ar: 'حاصر لمستقبلات الأفيون يقلّل الرغبة في الكحول ويلغي أثر المخدّرات الأفيونية. لا يُبدأ إلا بعد خلوّ الجسم من الأفيونات، ويرفع خطر الوفاة بجرعة زائدة بعد إيقافه.',
    en: 'An opioid receptor blocker that reduces alcohol craving and cancels the effect of opioid drugs. It is started only after the body is opioid-free, and it raises the risk of fatal overdose after it is stopped.'
  },
  brands: ['ريفيا', 'فيفيترول', 'نالتريكسون'],
  uses: ['substance-addiction'],
  keywords: { ar: ['إدمان', 'أفيونات', 'كحول', 'نالتريكسون', 'ريفيا', 'انسحاب'], en: ['naltrexone', 'revia', 'vivitrol', 'opioid antagonist', 'alcohol', 'opioid use disorder'] }
});

DRUGS.push({
  id: 'bupropion',
  cls: 'antidepressant-ndri',
  otc: false,
  alert: true,
  name:  { ar: 'البوبروبيون', en: 'Bupropion' },
  short: {
    ar: 'مضاد اكتئاب مختلف عن البقية: ينشّط لا ينعس، ولا يُثقل الوزن ولا الرغبة الجنسية غالباً، ويُستعمل أيضاً للإقلاع عن التدخين. عيبه الأهم أنه يخفض عتبة التشنّج.',
    en: 'An antidepressant unlike the others: it is activating rather than sedating, usually spares weight and sexual function, and is also used for stopping smoking. Its most important drawback is that it lowers the seizure threshold.'
  },
  brands: ['ويلبوترين', 'زيبان', 'بوبروبيون'],
  uses: ['depression', 'seasonal-affective', 'substance-addiction'],
  keywords: { ar: ['مضاد اكتئاب', 'اكتئاب', 'إقلاع عن التدخين', 'بوبروبيون', 'ويلبوترين', 'زيبان', 'تشنج'], en: ['bupropion', 'wellbutrin', 'zyban', 'NDRI', 'antidepressant', 'smoking cessation', 'seizure'] }
});

DRUGS.push({
  id: 'varenicline',
  cls: 'smoking-cessation',
  otc: false,
  alert: false,
  name:  { ar: 'الفارينيكلين', en: 'Varenicline' },
  short: {
    ar: 'أقوى قرص للإقلاع عن التدخين: يجلس مكان النيكوتين على مستقبله فيخفّف الشوق ويسلب السيجارة لذّتها في آن. أشهر آثاره الغثيان والأحلام الحيّة المزعجة.',
    en: 'The strongest tablet for stopping smoking: it sits in nicotine’s place on its receptor, easing craving and stripping the cigarette of its pleasure at the same time. Its best known effects are nausea and vivid, unsettling dreams.'
  },
  brands: ['تشامبكس', 'شامبيكس', 'تشانتكس'],
  uses: ['substance-addiction'],
  keywords: { ar: ['إقلاع عن التدخين', 'نيكوتين', 'فارينيكلين', 'تشامبكس', 'سجائر', 'إدمان'], en: ['varenicline', 'champix', 'chantix', 'smoking cessation', 'nicotine', 'partial agonist'] }
});

DRUGS.push({
  id: 'cytisine',
  cls: 'smoking-cessation',
  otc: false,
  alert: false,
  name:  { ar: 'السيتيزين', en: 'Cytisine (cytisinicline)' },
  short: {
    ar: 'قلويد نباتي يعمل على مستقبل النيكوتين كما يعمل الفارينيكلين، ويُستعمل للإقلاع عن التدخين في شرق أوروبا منذ الستينات. غثيانه أقلّ، وليس معتمداً في أمريكا بعد.',
    en: 'A plant alkaloid that acts on the nicotine receptor much as varenicline does, used for stopping smoking in eastern Europe since the 1960s. It causes less nausea, and is not yet approved in the United States.'
  },
  brands: ['تابكس', 'ديسموكسان'],
  uses: ['substance-addiction'],
  keywords: { ar: ['إقلاع عن التدخين', 'نيكوتين', 'سيتيزين', 'تابكس', 'قلويد نباتي', 'إدمان'], en: ['cytisine', 'cytisinicline', 'tabex', 'desmoxan', 'smoking cessation', 'nicotinic partial agonist'] }
});

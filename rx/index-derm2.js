/* ============================================================
   موسوعة الأدوية — فهرس دفعة derm2
   rx/index-derm2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'ustekinumab',
  cls: 'biologic-immunosuppressant',
  otc: false,
  alert: true,
  name:  { ar: 'الأوستيكينوماب', en: 'Ustekinumab' },
  short: {
    ar: 'دواء بيولوجي يُعطى حقناً، يوقف رسولين مناعيين فيهدّئ الصدفية وداء كرون والتهاب القولون التقرّحي. يخفض مقاومة الجسم للعدوى، فالفحص قبل بدئه شرط.',
    en: 'An injected biologic that blocks two immune messengers, calming psoriasis, Crohn’s disease and ulcerative colitis. It lowers the body’s resistance to infection, so screening before starting is a condition.'
  },
  brands: ['ستيلارا'],
  uses: ['psoriasis', 'psoriatic-arthritis', 'crohns', 'ulcerative-colitis'],
  keywords: { ar: ['بيولوجي', 'جسم مضاد وحيد النسيلة', 'اوستيكينوماب', 'ستيلارا'], en: ['biologic', 'monoclonal antibody', 'IL-12', 'IL-23', 'stelara'] }
});

DRUGS.push({
  id: 'budesonide',
  cls: 'corticosteroid',
  otc: false,
  alert: false,
  name:  { ar: 'البوديزونيد', en: 'Budesonide' },
  short: {
    ar: 'كورتيزون يُصمَّم ليعمل في مكانه: بخّاخ للرئة، وبخّاخ للأنف، وكبسولة تنطلق في الأمعاء. يقي من نوبة الربو ولا يوقفها بعد بدئها.',
    en: 'A corticosteroid designed to act where it lands: a lung inhaler, a nasal spray, and a capsule that releases in the gut. It prevents asthma attacks but does not stop one already under way.'
  },
  brands: ['بلميكورت', 'رينوكورت', 'إنتوكورت', 'بوديكورت'],
  uses: ['asthma', 'copd', 'crohns', 'ulcerative-colitis', 'allergic-rhinitis', 'glomerular-disease'],
  keywords: { ar: ['كورتيزون', 'بخاخ الربو', 'بوديزونيد', 'بلميكورت'], en: ['corticosteroid', 'inhaled steroid', 'pulmicort', 'entocort'] }
});

DRUGS.push({
  id: 'budesonide-formoterol',
  cls: 'bronchodilator',
  otc: false,
  alert: true,
  name:  { ar: 'البوديزونيد مع الفورموتيرول', en: 'Budesonide + formoterol' },
  short: {
    ar: 'بخّاخ يجمع كورتيزوناً يُطفئ التهاب الشعب مع موسّع طويل الأثر يفتحها. يُؤخذ بانتظام لا عند الضيق فقط، وله قواعد صارمة في الربو.',
    en: 'An inhaler combining a corticosteroid that puts out airway inflammation with a long-acting bronchodilator that opens them. It is taken regularly, not only when breathless, and has strict rules in asthma.'
  },
  brands: ['سيمبيكورت', 'ديورسبير سبيروماكس'],
  uses: ['asthma', 'copd'],
  keywords: { ar: ['بخاخ مركب', 'موسع شعب', 'سيمبيكورت', 'فورموتيرول'], en: ['ICS-LABA', 'symbicort', 'formoterol', 'combination inhaler'] }
});

DRUGS.push({
  id: 'ipratropium-bromide',
  cls: 'bronchodilator',
  otc: false,
  alert: false,
  name:  { ar: 'الإبراتروبيوم', en: 'Ipratropium bromide' },
  short: {
    ar: 'موسّع شعب قصير الأثر من فصيلة مضادات الكولين، يُستنشق للرئة أو يُبخّ في الأنف لإيقاف سيلانه. حماية العين منه قاعدة لا تفصيل.',
    en: 'A short-acting anticholinergic bronchodilator, inhaled into the lungs or sprayed into the nose to stop it running. Keeping it out of the eyes is a rule, not a detail.'
  },
  brands: ['أتروفنت', 'أتروفنت أنفي', 'كومبيفنت'],
  uses: ['copd', 'chronic-bronchitis', 'asthma', 'common-cold', 'allergic-rhinitis', 'nonallergic-rhinitis'],
  keywords: { ar: ['موسع شعب', 'مضاد كوليني', 'ابراتروبيوم', 'أتروفنت'], en: ['anticholinergic', 'bronchodilator', 'atrovent', 'SAMA'] }
});

DRUGS.push({
  id: 'tiotropium',
  cls: 'bronchodilator',
  otc: false,
  alert: false,
  name:  { ar: 'التيوتروبيوم', en: 'Tiotropium' },
  short: {
    ar: 'موسّع شعب طويل الأثر يُستنشق بانتظام يومي للانسداد الرئوي المزمن، ويُضاف إلى علاج الربو. دواء وقاية دائم لا إسعاف عند ضيق النفس.',
    en: 'A long-acting inhaled bronchodilator taken on a regular daily schedule for COPD, and added to asthma treatment. It is a standing preventive, not a rescue for sudden breathlessness.'
  },
  brands: ['سبيريفا', 'سبيريفا ريسبيمات'],
  uses: ['copd', 'chronic-bronchitis', 'asthma'],
  keywords: { ar: ['موسع شعب طويل', 'انسداد رئوي', 'تيوتروبيوم', 'سبيريفا'], en: ['LAMA', 'long-acting', 'spiriva', 'respimat'] }
});

DRUGS.push({
  id: 'xylometazoline',
  cls: 'decongestant',
  otc: true,
  alert: true,
  name:  { ar: 'الزيلوميتازولين', en: 'Xylometazoline' },
  short: {
    ar: 'بخّاخ أنف يفتح الأنف المسدود خلال دقائق بتضييق أوعيته. أشهر أدوية الرفّ وأكثرها إساءةً للاستعمال: إطالته تصنع انسداداً جديداً لا يزول إلا بتركه.',
    en: 'A nasal spray that opens a blocked nose within minutes by narrowing its vessels. One of the most used and most misused shelf medicines: prolonging it creates a new blockage that only lifts when it is stopped.'
  },
  brands: ['أوتريفين', 'أوتريفين للأطفال', 'سودافيد بخاخ الأنف'],
  uses: ['common-cold', 'sinusitis', 'allergic-rhinitis'],
  keywords: { ar: ['مزيل احتقان', 'بخاخ انف', 'زيلوميتازولين', 'أوتريفين'], en: ['decongestant', 'nasal spray', 'otrivine', 'imidazoline'] }
});

DRUGS.push({
  id: 'acetic-acid',
  cls: 'antiseptic',
  otc: true,
  alert: true,
  name:  { ar: 'حمض الخليك', en: 'Acetic acid' },
  short: {
    ar: 'قطرة أذن حمضية تعالج التهاب قناة الأذن الخارجية السطحي بجعل بيئتها غير صالحة للجراثيم والفطريات. ممنوعة تماماً إن كانت الطبلة مثقوبة.',
    en: 'Acidic ear drops that treat superficial infection of the outer ear canal by making its environment unfit for bacteria and fungi. Completely forbidden if the eardrum is perforated.'
  },
  brands: ['إيركالم', 'فوسول'],
  uses: ['otitis-externa'],
  keywords: { ar: ['قطرة اذن', 'حمض الخليك', 'اذن السباح', 'خل'], en: ['otic', 'acetic acid', 'swimmer’s ear', 'vinegar'] }
});

DRUGS.push({
  id: 'enalapril',
  cls: 'ace-inhibitor',
  otc: false,
  alert: true,
  name:  { ar: 'الإينالابريل', en: 'Enalapril' },
  short: {
    ar: 'مثبّط للإنزيم المحوّل يُرخي الشرايين فيخفض الضغط ويريح القلب المتعب ويحمي كلية السكّري. يحمل تحذيراً رسمياً في الحمل، وتورّم الوجه معه طارئ.',
    en: 'An ACE inhibitor that relaxes arteries, lowering blood pressure, easing a tired heart and protecting the diabetic kidney. It carries an official pregnancy warning, and facial swelling on it is an emergency.'
  },
  brands: ['رينيتك', 'فازوتيك', 'إيناب'],
  uses: ['hypertension', 'heart-failure', 'ckd'],
  keywords: { ar: ['ضغط الدم', 'مثبط الانزيم المحول', 'اينالابريل', 'رينيتك'], en: ['ACE inhibitor', 'antihypertensive', 'renitec', 'vasotec'] }
});

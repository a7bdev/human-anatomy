/* ============================================================
   موسوعة الأدوية — فهرس دفعة المطهّرات وصبغات الأشعة والأسنان (antisep1)
   rx/index-antisep1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   المواد العشر كلها من قائمة منظمة الصحة للأدوية الأساسية، الطبعة
   الرابعة والعشرين (rx/EML-2025.json، وسم antisep1).

   ملاحظة على الفصائل: المطهّرات ومواد الأسنان وصبغات الأشعة غير
   معرّفة في DRUG_CLASSES داخل drugs.js، وdrugs.js ممنوع تعديله في هذه
   الدفعة. فتُضاف من هنا إضافةً لا استبدالاً، بنفس معرّفات الدفعات
   الموازية وأسمائها (antiseptic · disinfectant · dental-material)،
   وتُستحدث فصيلة واحدة جديدة: contrast-agent في مجموعة imaging.

   ملاحظة على uses: صبغات الأشعة والمطهّر الجلوتارالدهيد لا تعالج
   مرضاً بعينه، ونشراتها لا تسمّي أمراضاً بل فحوصاً وأدوات؛ فتُركت
   قوائمها فارغة بدل ربطٍ لا يسنده مصدر.
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* أسماء فصائل هذه الدفعة ومجموعاتها — تُضاف ولا تستبدل شيئاً موجوداً.
   الأسماء والمجموعات مطابقة حرفاً لما سجّلته الدفعات الموازية (vacc4 للمطهّرات،
   dental1 لمواد الأسنان)، فلا يتغيّر العرض أيّ الملفات حُمّل أولاً. */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    antiseptic:        { ar: 'المطهّرات الموضعية', en: 'Antiseptics' },
    disinfectant:      { ar: 'مطهّرات الأسطح والماء', en: 'Disinfectants' },
    'dental-material': { ar: 'مواد الأسنان الوقائية والترميمية', en: 'Dental preventive and restorative materials' },
    'contrast-agent':  { ar: 'صبغات الأشعة', en: 'Radiocontrast agents' }
  };
  var grp = { antiseptic: 'skin', disinfectant: 'other', 'dental-material': 'dental', 'contrast-agent': 'imaging' };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_GROUPS !== 'undefined' && DRUG_GROUPS) {
    if (!DRUG_GROUPS.dental)  { DRUG_GROUPS.dental  = { ar: 'الأسنان والفم', en: 'Teeth and mouth' }; }
    if (!DRUG_GROUPS.imaging) { DRUG_GROUPS.imaging = { ar: 'الأشعة والفحوص التشخيصية', en: 'Imaging and diagnostics' }; }
  }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
})();

DRUGS.push({
  id: 'glutaral',
  cls: 'disinfectant',
  otc: false,
  alert: true,
  name:  { ar: 'الجلوتارالدهيد', en: 'Glutaral (Glutaraldehyde)' },
  short: {
    ar: 'مطهّر عالي المستوى تُغمر فيه المناظير والأدوات التي لا تحتمل الحرارة. ليس دواءً للمريض ولا يوضع على الجسم، وأذاه يقع على العين والجلد والتنفّس.',
    en: 'A high-level disinfectant in which endoscopes and heat-sensitive instruments are soaked. It is not a medicine for patients and is never put on the body; its harm falls on the eyes, skin and breathing.'
  },
  brands: ['سايدكس'],
  uses: [],
  keywords: { ar: ['جلوتارالدهيد', 'غلوتارالدهيد', 'مطهر', 'تعقيم', 'تعقيم بارد', 'مناظير'], en: ['glutaraldehyde', 'glutaral', 'disinfectant', 'cold sterilant', 'endoscope', 'Cidex'] }
});

DRUGS.push({
  id: 'hypochlorous-acid',
  cls: 'antiseptic',
  otc: true,
  alert: false,
  name:  { ar: 'حمض الهيبوكلوروز', en: 'Hypochlorous acid' },
  short: {
    ar: 'مطهّر لطيف من عائلة الكلور تصنعه كريات الدم البيضاء نفسها، يُباع بخّاخاً وسائلاً لتنظيف الجروح وتطهير الجلد والأسطح. ليس هو المبيّض المنزلي.',
    en: 'A gentle chlorine-family disinfectant that white blood cells themselves produce, sold as sprays and solutions to clean wounds and disinfect skin and surfaces. It is not household bleach.'
  },
  brands: ['مايكروداسين', 'فاشي'],
  uses: ['diabetic-foot-ulcer', 'pressure-ulcer'],
  keywords: { ar: ['هيبوكلوروز', 'هايبوكلوروس', 'مطهر جروح', 'بخاخ جروح', 'ماء مؤكسد'], en: ['hypochlorous acid', 'HOCl', 'wound cleanser', 'antiseptic', 'superoxidized solution'] }
});

DRUGS.push({
  id: 'amidotrizoate',
  cls: 'contrast-agent',
  otc: false,
  alert: true,
  name:  { ar: 'الأميدوتريزوات', en: 'Amidotrizoate (Diatrizoate)' },
  short: {
    ar: 'صبغة أشعة يودية تُشرب أو تُعطى من الشرج لتصوير المريء والمعدة والأمعاء، بديلاً عن الباريوم حين يكون خطراً. استنشاقها خطر، وقد تسحب ماءً من الجسم عند الصغار وكبار السن.',
    en: 'An iodinated X-ray dye swallowed or given rectally to image the oesophagus, stomach and bowel, as an alternative to barium when barium is risky. Inhaling it is dangerous, and it can draw water out of the body in the very young and the frail elderly.'
  },
  brands: ['جاستروجرافين', 'يوروجرافين'],
  uses: [],
  keywords: { ar: ['دياتريزوات', 'صبغة أشعة', 'صبغة يود', 'جاستروغرافين', 'تصوير المعدة'], en: ['diatrizoate', 'amidotrizoate', 'Gastrografin', 'contrast medium', 'iodinated contrast'] }
});

DRUGS.push({
  id: 'barium-sulfate',
  cls: 'contrast-agent',
  otc: false,
  alert: false,
  name:  { ar: 'كبريتات الباريوم', en: 'Barium sulfate' },
  short: {
    ar: 'مادة ثقيلة تُشرب معلّقاً لتصوير المريء والمعدة والاثني عشر بالأشعة. لا تُمتصّ في الجسم، لكن خطرها أن تُستنشق أو تتسرّب من ثقب أو تنحشر في الأمعاء.',
    en: 'A heavy substance drunk as a suspension to X-ray the oesophagus, stomach and duodenum. It is not absorbed, but its dangers are being inhaled, leaking through a perforation or getting impacted in the bowel.'
  },
  brands: ['مايكروباك', 'إي زي إتش دي'],
  uses: [],
  keywords: { ar: ['باريوم', 'وجبة باريوم', 'بلع الباريوم', 'صبغة أشعة'], en: ['barium', 'barium swallow', 'barium meal', 'contrast medium', 'E-Z-HD'] }
});

DRUGS.push({
  id: 'iohexol',
  cls: 'contrast-agent',
  otc: false,
  alert: true,
  name:  { ar: 'الأيوهيكسول', en: 'Iohexol' },
  short: {
    ar: 'صبغة أشعة يودية غير أيونية تُحقن في الوريد أو الشريان أو حول النخاع، أو تُشرب، لتصوير الأوعية والأعضاء بالأشعة المقطعية وغيرها. خطرها الأهمّ التحسّس الشديد وأذى الكلى.',
    en: 'A non-ionic iodinated contrast dye injected into a vein, artery or around the spinal cord, or swallowed, to image vessels and organs by CT and other X-ray methods. Its main dangers are severe allergy-like reactions and kidney injury.'
  },
  brands: ['أومنيباك'],
  uses: [],
  keywords: { ar: ['ايوهيكسول', 'أومنيباك', 'صبغة أشعة', 'صبغة الأشعة المقطعية', 'صبغة يود'], en: ['iohexol', 'Omnipaque', 'contrast dye', 'CT contrast', 'iodinated contrast'] }
});

DRUGS.push({
  id: 'meglumine-iotroxate',
  cls: 'contrast-agent',
  otc: false,
  alert: true,
  name:  { ar: 'أيوتروكسات الميجلومين', en: 'Meglumine iotroxate' },
  short: {
    ar: 'صبغة أشعة يودية تُعطى تسريباً في الوريد فيطرحها الكبد في الصفراء، لتصوير المرارة والقنوات الصفراوية. ممنوعة مع فرط نشاط الدرقية الظاهر وبعض أمراض بروتينات الدم.',
    en: 'An iodinated X-ray dye given by intravenous infusion and excreted by the liver into bile, to image the gallbladder and bile ducts. It is forbidden in overt hyperthyroidism and certain blood-protein disorders.'
  },
  brands: ['بيليسكوبين'],
  uses: [],
  keywords: { ar: ['أيوتروكسات', 'حمض الأيوتروكسيك', 'تصوير المرارة', 'تصوير القنوات الصفراوية', 'صبغة أشعة'], en: ['iotroxate', 'iotroxic acid', 'Biliscopin', 'cholangiography', 'biliary contrast'] }
});

DRUGS.push({
  id: 'fluoride',
  cls: 'dental-material',
  otc: true,
  alert: false,
  name:  { ar: 'الفلورايد', en: 'Fluoride' },
  short: {
    ar: 'معدن يقوّي مينا الأسنان ويقاوم التسوّس، يأتي في معجون الأسنان والغسول والورنيش الذي يطليه طبيب الأسنان، وفي نقط وأقراص تُبلع لبعض الأطفال. زيادة ما يبلعه الصغار تبقّع أسنانهم.',
    en: 'A mineral that strengthens tooth enamel and resists decay. It comes in toothpaste, mouth rinses and the varnish a dentist paints on, and in swallowed drops and tablets for some children. Swallowing too much in early childhood mottles the teeth.'
  },
  brands: ['دورافات', 'إلمكس'],
  uses: ['tooth-decay'],
  keywords: { ar: ['فلورايد', 'فلوريد', 'فلوريد الصوديوم', 'ورنيش الفلورايد', 'تسوس'], en: ['fluoride', 'sodium fluoride', 'fluoride varnish', 'Duraphat', 'caries prevention'] }
});

DRUGS.push({
  id: 'silver-diamine-fluoride',
  cls: 'dental-material',
  otc: false,
  alert: false,
  name:  { ar: 'فلورايد الديامين الفضّي', en: 'Silver diamine fluoride' },
  short: {
    ar: 'سائل يوضع على السنّ المسوّسة فيوقف التسوّس بلا حفر ولا إبرة، وخاصة في الأسنان اللبنية وجذور أسنان كبار السن. ثمنه أن يسودّ موضع التسوّس بصفة دائمة.',
    en: 'A liquid painted on a decayed tooth that stops the decay without drilling or injections, especially in baby teeth and older adults\' roots. Its price is that the decayed spot turns permanently black.'
  },
  brands: ['ريفا ستار', 'أدفانتج أرِست'],
  uses: ['tooth-decay', 'tooth-sensitivity'],
  keywords: { ar: ['فلورايد الفضة', 'ديامين الفضة', 'إس دي إف', 'إيقاف التسوس', 'تسوس الأطفال'], en: ['SDF', 'silver diamine fluoride', 'caries arrest', 'Riva Star', 'Advantage Arrest'] }
});

DRUGS.push({
  id: 'glass-ionomer-cement',
  cls: 'dental-material',
  otc: false,
  alert: false,
  name:  { ar: 'أسمنت الأيونومر الزجاجي', en: 'Glass ionomer cement' },
  short: {
    ar: 'مادة حشو تلتصق بالسنّ كيميائياً وتطلق الفلورايد ببطء، تُستعمل حشوةً وسادّاً للشقوق ولصقاً للتيجان وحلقات التقويم، وخاصة عند الأطفال. أضعف من غيرها في مواضع المضغ الشديد.',
    en: 'A filling material that bonds chemically to the tooth and releases fluoride slowly, used as a filling, a fissure sealant and a cement for crowns and orthodontic bands, especially in children. It is weaker than other materials where chewing forces are heavy.'
  },
  brands: ['فوجي', 'كيتاك'],
  uses: ['tooth-decay'],
  keywords: { ar: ['أيونومر زجاجي', 'جلاس أيونومر', 'حشوة', 'حشوة أطفال', 'سداد الشقوق'], en: ['GIC', 'glass ionomer', 'ART', 'dental cement', 'fissure sealant'] }
});

DRUGS.push({
  id: 'resin-composite-high-viscosity',
  cls: 'dental-material',
  otc: false,
  alert: false,
  name:  { ar: 'الكمبوزيت الراتنجي عالي اللزوجة', en: 'Resin-based composite (high-viscosity)' },
  short: {
    ar: 'حشوة بلون السنّ من راتنج وحبيبات زجاجية تتصلّب بضوء أزرق، وهي البديل الخالي من الزئبق لحشوة الأملغم. تحتاط منظمة الصحة منها عند الأطفال والحوامل والمرضعات بسبب مشتقّات البيسفينول.',
    en: 'A tooth-coloured filling of resin and glass particles that hardens under blue light, the mercury-free alternative to amalgam. The WHO advises caution with it in children and in pregnant or breastfeeding women because of bisphenol derivatives.'
  },
  brands: ['فيلتك', 'تتريك'],
  uses: ['tooth-decay'],
  keywords: { ar: ['كمبوزيت', 'حشوة بيضاء', 'حشوة تجميلية', 'راتنج', 'سداد الشقوق'], en: ['composite', 'resin composite', 'white filling', 'tooth-coloured filling', 'Filtek'] }
});

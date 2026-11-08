/* ============================================================
   موسوعة الأدوية — فهرس دفعة الإنجاب ومنع الحمل الأولى (repro1)
   rx/index-repro1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   عشرة عناصر: حقنة منع الحمل (نوريثيستيرون إينانتات) · شريحتان تحت
   الجلد (ليفونورجستريل · إيتونوجستريل) · لولبان (هرموني · نحاسي) ·
   حاجزان (الواقي الذكري · العازل المهبلي) · حلقة البروجستيرون
   المهبلية · ومحفّزا إباضة (الكلوميفين · الليتروزول).

   ملاحظة على الفصائل: فصائل هذه الدفعة غير معرّفة في DRUG_CLASSES
   داخل drugs.js، وdrugs.js ممنوع تعديله في هذه الدفعة. فتُضاف
   أسماؤها من هنا إضافةً لا استبدالاً (drugs.js يُحمَّل قبل هذا
   الملف) حتى تُعرض بالعربية وتقع في مجموعة «السكّري والهرمونات»
   لا «أخرى».
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* أسماء فصائل هذه الدفعة — تُضاف ولا تستبدل شيئاً موجوداً */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    'contraceptive-injectable': { ar: 'حقن منع الحمل', en: 'Injectable contraceptives' },
    'contraceptive-implant':    { ar: 'شرائح منع الحمل تحت الجلد', en: 'Contraceptive implants' },
    'intrauterine-device':      { ar: 'اللوالب الرحمية', en: 'Intrauterine devices' },
    'barrier-contraceptive':    { ar: 'وسائل منع الحمل الحاجزة', en: 'Barrier contraceptives' },
    'contraceptive-vaginal-ring': { ar: 'الحلقات المهبلية', en: 'Vaginal rings' },
    'ovulation-inducer':        { ar: 'محفّزات الإباضة', en: 'Ovulation inducers' },
    'aromatase-inhibitor':      { ar: 'مثبّطات الأروماتاز', en: 'Aromatase inhibitors' }
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in add) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = 'endo'; } }
  }
})();

DRUGS.push({
  id: 'norethisterone-enantate',
  cls: 'contraceptive-injectable',
  otc: false,
  alert: false,
  name:  { ar: 'النوريثيستيرون إينانتات', en: 'Norethisterone enantate' },
  short: {
    ar: 'حقنة عضلية زيتية من هرمون بروجستيني، تُعطى في العيادة لمنع الحمل مدّة قصيرة. لا تحمي من العدوى المنقولة جنسياً، وتحمل تحذيراً بشأن الجلطات.',
    en: 'An oily intramuscular injection of a progestogen hormone, given in clinic as a short-term contraceptive. It does not protect against sexually transmitted infection and carries a warning about blood clots.'
  },
  brands: ['نوريستيرات'],
  uses: [],
  keywords: { ar: ['حقنة منع الحمل', 'نوريثيستيرون', 'بروجستين', 'موانع الحمل'], en: ['NET-EN', 'Noristerat', 'injectable contraceptive', 'progestogen'] }
});

DRUGS.push({
  id: 'levonorgestrel-releasing-implant',
  cls: 'contraceptive-implant',
  otc: false,
  alert: false,
  name:  { ar: 'شريحة الليفونورجستريل', en: 'Levonorgestrel-releasing implant' },
  short: {
    ar: 'قضيبان مرنان صغيران يُزرعان تحت جلد أعلى الذراع فيطلقان هرموناً بروجستينياً ببطء. تركيبهما وإخراجهما بيد مدرَّب، ولا يحميان من العدوى المنقولة جنسياً.',
    en: 'Two small flexible rods placed under the skin of the upper arm that slowly release a progestogen hormone. Insertion and removal are done by a trained provider, and they give no protection against sexually transmitted infection.'
  },
  brands: ['جاديل'],
  uses: [],
  keywords: { ar: ['شريحة', 'زرعة', 'ليفونورجستريل', 'منع حمل طويل'], en: ['Jadelle', 'implant', 'LARC', 'levonorgestrel'] }
});

DRUGS.push({
  id: 'etonogestrel-releasing-implant',
  cls: 'contraceptive-implant',
  otc: false,
  alert: false,
  name:  { ar: 'شريحة الإيتونوجستريل', en: 'Etonogestrel-releasing implant' },
  short: {
    ar: 'قضيب واحد رفيع يُزرع تحت جلد أعلى الذراع ويمنع الإباضة. أهمّ ما يُطلب من صاحبته أن تتحسّسه تحت جلدها، فإن لم تجده أخبرت الطبيب فوراً.',
    en: 'A single thin rod placed under the skin of the upper arm that prevents ovulation. The most important thing asked of the user is to feel it under her skin, and to tell the doctor at once if she cannot.'
  },
  brands: ['إمبلانون', 'نيكسبلانون'],
  uses: [],
  keywords: { ar: ['شريحة', 'زرعة الذراع', 'إيتونوجستريل', 'منع حمل'], en: ['Nexplanon', 'Implanon', 'etonogestrel', 'implant'] }
});

DRUGS.push({
  id: 'levonorgestrel-releasing-intrauterine-system',
  cls: 'intrauterine-device',
  otc: false,
  alert: false,
  name:  { ar: 'اللولب الهرموني (ليفونورجستريل)', en: 'Levonorgestrel-releasing intrauterine system' },
  short: {
    ar: 'لولب صغير على شكل حرف تي يُركَّب داخل الرحم ويطلق هرموناً بروجستينياً موضعياً. يمنع الحمل، وبعض أنواعه مرخّص كذلك لعلاج غزارة الطمث.',
    en: 'A small T-shaped device fitted inside the womb that releases a progestogen hormone locally. It prevents pregnancy, and some brands are also licensed to treat heavy menstrual bleeding.'
  },
  brands: ['ميرينا', 'كايلينا', 'جيديس'],
  uses: ['heavy-periods', 'endometrial-hyperplasia', 'endometriosis', 'adenomyosis'],
  keywords: { ar: ['لولب هرموني', 'ميرينا', 'ليفونورجستريل', 'غزارة الدورة'], en: ['Mirena', 'IUS', 'LNG-IUS', 'hormonal coil'] }
});

DRUGS.push({
  id: 'copper-containing-device',
  cls: 'intrauterine-device',
  otc: false,
  alert: false,
  name:  { ar: 'اللولب النحاسي', en: 'Copper-containing device' },
  short: {
    ar: 'لولب بلاستيكي ملفوف بسلك نحاس يُركَّب داخل الرحم، ويمنع الحمل بلا أي هرمون. يبدأ عمله فور تركيبه، وأشهر أثر له أن الدورة تصير أغزر وأوجع.',
    en: 'A plastic device wound with copper wire fitted inside the womb, preventing pregnancy without any hormone. It works from the moment it is fitted, and its best known effect is heavier, more painful periods.'
  },
  brands: ['كوبر تي', 'ملتيلود'],
  uses: [],
  keywords: { ar: ['لولب نحاسي', 'اللولب', 'منع حمل بلا هرمون'], en: ['copper IUD', 'Paragard', 'copper coil', 'IUD'] }
});

DRUGS.push({
  id: 'condoms',
  cls: 'barrier-contraceptive',
  otc: true,
  alert: false,
  name:  { ar: 'الواقي الذكري', en: 'Condoms' },
  short: {
    ar: 'غلاف رقيق من اللاتكس أو البولي يوريثان يمنع وصول المني. هو الوسيلة الوحيدة في هذه الصفحة التي تقي من العدوى المنقولة جنسياً، ويُباع بلا وصفة.',
    en: 'A thin sheath of latex or polyurethane that stops semen passing. It is the only method on this page that also protects against sexually transmitted infection, and it is sold without prescription.'
  },
  brands: ['دوركس'],
  uses: ['hiv', 'chlamydia', 'gonorrhea', 'syphilis', 'genital-herpes', 'hpv-warts'],
  keywords: { ar: ['واقي', 'كوندوم', 'حماية', 'أمراض منقولة جنسياً'], en: ['condom', 'barrier method', 'STI protection', 'latex'] }
});

DRUGS.push({
  id: 'diaphragms',
  cls: 'barrier-contraceptive',
  otc: false,
  alert: false,
  name:  { ar: 'العازل المهبلي', en: 'Diaphragms' },
  short: {
    ar: 'كأس مرن يوضع في المهبل فوق عنق الرحم مع مبيد للنطاف قبل الجماع. مقاسه يحدّده مقدّم الرعاية، ولا يقي من العدوى المنقولة جنسياً.',
    en: 'A flexible cup placed in the vagina over the cervix with a spermicide before intercourse. Its size is decided by a healthcare provider, and it gives no protection against sexually transmitted infection.'
  },
  brands: [],
  uses: [],
  keywords: { ar: ['عازل مهبلي', 'حاجب', 'مبيد النطاف', 'وسيلة حاجزة'], en: ['diaphragm', 'cervical cap', 'spermicide', 'barrier'] }
});

DRUGS.push({
  id: 'progesterone-vaginal-ring',
  cls: 'contraceptive-vaginal-ring',
  otc: false,
  alert: false,
  name:  { ar: 'حلقة البروجستيرون المهبلية', en: 'Progesterone vaginal ring' },
  short: {
    ar: 'حلقة سيليكون طريّة تضعها المرأة في مهبلها بنفسها، صُمّمت خاصةً للمرضعة لتسند حماية الرضاعة من الحمل دون أن تنقص الحليب.',
    en: 'A soft silicone ring the woman places in her own vagina, designed specifically for the breastfeeding mother to back up the protection lactation gives without reducing her milk.'
  },
  brands: [],
  uses: [],
  keywords: { ar: ['حلقة مهبلية', 'بروجستيرون', 'مرضع', 'منع حمل بعد الولادة'], en: ['Progering', 'progesterone ring', 'lactation', 'postpartum contraception'] }
});

DRUGS.push({
  id: 'clomifene',
  cls: 'ovulation-inducer',
  otc: false,
  alert: false,
  name:  { ar: 'الكلوميفين', en: 'Clomifene (Clomiphene citrate)' },
  short: {
    ar: 'قرص يُحفّز المبيض على إطلاق البويضة عند من لا تبيّض وتريد الحمل. يرفع احتمال الحمل بتوأم، وأي اضطراب في البصر معه يوجب إيقافه.',
    en: 'A tablet that stimulates the ovary to release an egg in a woman who does not ovulate and wants to conceive. It raises the chance of twins, and any visual disturbance with it means stopping.'
  },
  brands: ['كلوميد', 'أوفاميت'],
  uses: ['infertility', 'pcos', 'amenorrhea'],
  keywords: { ar: ['كلوميفين', 'منشّط إباضة', 'تنشيط المبايض', 'عقم'], en: ['clomiphene', 'Clomid', 'ovulation induction', 'SERM'] }
});

DRUGS.push({
  id: 'letrozole',
  cls: 'aromatase-inhibitor',
  otc: false,
  alert: false,
  name:  { ar: 'الليتروزول', en: 'Letrozole' },
  short: {
    ar: 'قرص يخفض الإستروجين في الجسم. مرخّص لسرطان الثدي بعد سنّ اليأس، ويُستعمل خارج الترخيص لتحفيز الإباضة وصار خياراً أول في تكيّس المبايض.',
    en: 'A tablet that lowers the body’s oestrogen. It is licensed for breast cancer after the menopause and is used off-label to induce ovulation, where it has become a first choice in polycystic ovary syndrome.'
  },
  brands: ['فيمارا'],
  uses: ['breast-cancer', 'infertility', 'pcos'],
  keywords: { ar: ['ليتروزول', 'فيمارا', 'مثبط أروماتاز', 'تنشيط إباضة'], en: ['letrozole', 'Femara', 'aromatase inhibitor', 'ovulation induction'] }
});

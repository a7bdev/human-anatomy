/* ============================================================
   موسوعة الأدوية — فهرس دفعة الدم ومشتقّات البلازما والمناعة (blood2)
   rx/index-blood2.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.

   الأدوية العشرة كلها من قائمة منظمة الصحة للأدوية الأساسية،
   الطبعة الرابعة والعشرين (rx/EML-2025.json، وسم blood2).

   ملاحظة على الفصائل: فصائل هذه الدفعة (الغلوبولينات المناعية ·
   عوامل التخثّر · موسّعات حجم البلازما · مثبّطات TNF · مثبّطات
   المناعة) غير معرّفة في DRUG_CLASSES داخل drugs.js، ولا توجد
   مجموعة عريضة للدم ولا للمناعة في DRUG_GROUPS. فتُضاف من هنا
   إضافةً لا استبدالاً (drugs.js يُحمَّل قبل هذا الملف).
   ============================================================ */

var DRUGS = window.DRUGS || [];

/* أسماء فصائل ومجموعات هذه الدفعة — تُضاف ولا تستبدل شيئاً موجوداً */
(function () {
  if (typeof DRUG_CLASSES === 'undefined' || !DRUG_CLASSES) { return; }
  var add = {
    immunoglobulin:       { ar: 'الغلوبولينات المناعية', en: 'Immunoglobulins' },
    'coagulation-factor': { ar: 'عوامل التخثّر', en: 'Coagulation factors' },
    'plasma-expander':    { ar: 'موسّعات حجم البلازما', en: 'Plasma volume expanders' },
    'tnf-inhibitor':      { ar: 'مثبّطات عامل نخر الورم (TNF)', en: 'TNF inhibitors' },
    immunosuppressant:    { ar: 'مثبّطات المناعة', en: 'Immunosuppressants' }
  };
  var grp = {
    immunoglobulin: 'blood', 'coagulation-factor': 'blood', 'plasma-expander': 'blood',
    'tnf-inhibitor': 'immune', immunosuppressant: 'immune'
  };
  var k;
  for (k in add) { if (!DRUG_CLASSES[k]) { DRUG_CLASSES[k] = add[k]; } }
  if (typeof DRUG_GROUPS !== 'undefined' && DRUG_GROUPS) {
    if (!DRUG_GROUPS.blood)  { DRUG_GROUPS.blood  = { ar: 'الدم والتخثّر ومشتقّات البلازما', en: 'Blood, clotting and plasma products' }; }
    if (!DRUG_GROUPS.immune) { DRUG_GROUPS.immune = { ar: 'المناعة والروماتيزم', en: 'Immunity and rheumatology' }; }
  }
  if (typeof DRUG_CLASS_GROUP !== 'undefined' && DRUG_CLASS_GROUP) {
    for (k in grp) { if (!DRUG_CLASS_GROUP[k]) { DRUG_CLASS_GROUP[k] = grp[k]; } }
  }
})();

DRUGS.push({
  id: 'anti-d-immunoglobulin',
  cls: 'immunoglobulin',
  otc: false,
  alert: false,
  name:  { ar: 'الغلوبولين المناعي المضاد لـD', en: 'Anti-D immunoglobulin (Rho(D) immune globulin)' },
  short: {
    ar: 'حقنة أجسام مضادة جاهزة تُعطى للمرأة سالبة العامل الريصي كي لا يكوّن جسمها أجساماً مضادة تهاجم دم جنينها في هذا الحمل أو في حمل قادم.',
    en: 'An injection of ready-made antibodies given to an Rh-negative woman so her body does not form antibodies that attack her baby\'s blood in this or a future pregnancy.'
  },
  brands: ['ريوفيلاك', 'ريوغام', 'وين رو'],
  uses: ['rh-isoimmunization', 'miscarriage', 'ectopic-pregnancy', 'itp'],
  keywords: { ar: ['انتي دي', 'حقنة الريسس', 'العامل الريصي', 'فصيلة سالبة', 'غلوبولين مناعي'], en: ['anti-D', 'RhoGAM', 'Rh immune globulin', 'RhIG', 'Rh negative'] }
});

DRUGS.push({
  id: 'anti-rabies-immunoglobulin',
  cls: 'immunoglobulin',
  otc: false,
  alert: false,
  name:  { ar: 'الغلوبولين المناعي المضاد للسعار', en: 'Anti-rabies immunoglobulin (Human rabies immune globulin)' },
  short: {
    ar: 'أجسام مضادة جاهزة لفيروس السعار تُحقن داخل جرح العضّة وحوله مع أول لقاح، فتحمي في الأيام التي يحتاجها اللقاح ليبني المناعة.',
    en: 'Ready-made antibodies against the rabies virus, injected into and around the bite wound with the first vaccine, protecting during the days the vaccine needs to build immunity.'
  },
  brands: ['هايبرراب', 'كيدراب', 'إيموغام رابيز'],
  uses: ['rabies'],
  keywords: { ar: ['مصل الكلب', 'مصل السعار', 'داء الكلب', 'عضة كلب', 'عضة حيوان'], en: ['HRIG', 'RIG', 'rabies immune globulin', 'dog bite', 'post-exposure prophylaxis'] }
});

DRUGS.push({
  id: 'anti-tetanus-immunoglobulin',
  cls: 'immunoglobulin',
  otc: false,
  alert: false,
  name:  { ar: 'الغلوبولين المناعي المضاد للكزاز', en: 'Anti-tetanus immunoglobulin (Human tetanus immune globulin)' },
  short: {
    ar: 'أجسام مضادة جاهزة لسمّ الكزاز تُعطى بعد جرح ملوّث أو كبير لمن لم يكتمل تطعيمه، فتحميه فوراً إلى أن يبني اللقاح مناعته.',
    en: 'Ready-made antibodies against tetanus toxin, given after a dirty or major wound to someone whose vaccination is incomplete, protecting at once until the vaccine builds immunity.'
  },
  brands: ['هايبرتيت', 'تيتاغام'],
  uses: ['tetanus'],
  keywords: { ar: ['مصل الكزاز', 'مصل التيتانوس', 'مضاد سم الكزاز', 'جرح ملوث', 'وخز مسمار'], en: ['TIG', 'HTIG', 'tetanus immune globulin', 'antitoxin', 'HyperTET'] }
});

DRUGS.push({
  id: 'coagulation-factor-viii-plasma-derived',
  cls: 'coagulation-factor',
  otc: false,
  alert: false,
  name:  { ar: 'عامل التخثّر الثامن المستخلص من البلازما', en: 'Coagulation factor VIII, plasma-derived (Antihemophilic factor, human)' },
  short: {
    ar: 'بروتين التخثّر الناقص في الهيموفيليا A، مستخلص من بلازما متبرّعين ومنقّى، يُحقن في الوريد لإيقاف النزف أو منعه أو قبل الجراحة.',
    en: 'The clotting protein missing in haemophilia A, extracted from donor plasma and purified, injected into a vein to stop or prevent bleeding or before surgery.'
  },
  brands: ['أوكتانيت', 'إيموناتي', 'كوايت', 'هيموكتين'],
  uses: ['hemophilia'],
  keywords: { ar: ['فاكتور ثمانية', 'العامل الثامن', 'الناعور', 'الهيموفيليا أ', 'عامل مضاد للناعور'], en: ['factor VIII', 'FVIII', 'antihemophilic factor', 'AHF', 'hemophilia A'] }
});

DRUGS.push({
  id: 'coagulation-factor-viii-recombinant',
  cls: 'coagulation-factor',
  otc: false,
  alert: false,
  name:  { ar: 'عامل التخثّر الثامن المؤتلف', en: 'Coagulation factor VIII, recombinant (Antihemophilic factor, recombinant)' },
  short: {
    ar: 'نسخة مصنوعة في المختبر من بروتين التخثّر الناقص في الهيموفيليا A، بلا بلازما بشرية، تُحقن في الوريد لعلاج النزف والوقاية منه.',
    en: 'A laboratory-made version of the clotting protein missing in haemophilia A, free of human plasma, injected into a vein to treat and prevent bleeding.'
  },
  brands: ['أدفيت', 'كوفالتري', 'نوفوإيت', 'إلوكتا'],
  uses: ['hemophilia'],
  keywords: { ar: ['فاكتور ثمانية', 'العامل الثامن المؤتلف', 'الناعور', 'الهيموفيليا أ', 'فاكتور صناعي'], en: ['recombinant factor VIII', 'rFVIII', 'Advate', 'antihemophilic factor recombinant', 'hemophilia A'] }
});

DRUGS.push({
  id: 'coagulation-factor-ix-plasma-derived',
  cls: 'coagulation-factor',
  otc: false,
  alert: false,
  name:  { ar: 'عامل التخثّر التاسع المستخلص من البلازما', en: 'Coagulation factor IX, plasma-derived (human)' },
  short: {
    ar: 'بروتين التخثّر الناقص في الهيموفيليا B، مستخلص من بلازما متبرّعين ومنقّى من العوامل الأخرى، يُحقن في الوريد لعلاج النزف والوقاية منه.',
    en: 'The clotting protein missing in haemophilia B, extracted from donor plasma and purified from other factors, injected into a vein to treat and prevent bleeding.'
  },
  brands: ['أوكتانين', 'إيموناين', 'ألفاناين'],
  uses: ['hemophilia'],
  keywords: { ar: ['فاكتور تسعة', 'العامل التاسع', 'الهيموفيليا ب', 'مرض كريسماس', 'الناعور'], en: ['factor IX', 'FIX', 'hemophilia B', 'Christmas disease', 'AlphaNine'] }
});

DRUGS.push({
  id: 'coagulation-factor-ix-recombinant',
  cls: 'coagulation-factor',
  otc: false,
  alert: false,
  name:  { ar: 'عامل التخثّر التاسع المؤتلف', en: 'Coagulation factor IX, recombinant' },
  short: {
    ar: 'نسخة مصنوعة في المختبر من بروتين التخثّر الناقص في الهيموفيليا B، تُحقن في الوريد لعلاج النزف والوقاية منه وتغطية الجراحة.',
    en: 'A laboratory-made version of the clotting protein missing in haemophilia B, injected into a vein to treat and prevent bleeding and to cover surgery.'
  },
  brands: ['بينيفكس', 'ريكسوبس', 'ألبروليكس'],
  uses: ['hemophilia'],
  keywords: { ar: ['فاكتور تسعة', 'العامل التاسع المؤتلف', 'الهيموفيليا ب', 'مرض كريسماس', 'فاكتور صناعي'], en: ['recombinant factor IX', 'rFIX', 'BeneFIX', 'nonacog alfa', 'hemophilia B'] }
});

DRUGS.push({
  id: 'dextran-70',
  cls: 'plasma-expander',
  otc: false,
  alert: true,
  name:  { ar: 'الديكستران ٧٠', en: 'Dextran 70' },
  short: {
    ar: 'محلول وريدي من سكّر متعدّد كبير الجزيئات يُعطى في المستشفى لتعويض حجم الدم في الصدمة والنزف حين لا يتوفّر الدم فوراً. خطره الأبرز الحساسية الشديدة.',
    en: 'An intravenous solution of a large-molecule polysaccharide, given in hospital to restore blood volume in shock and bleeding when blood is not immediately available. Its chief danger is severe allergy.'
  },
  brands: ['ماكروديكس'],
  uses: ['shock'],
  keywords: { ar: ['ديكستران', 'موسع حجم البلازما', 'محلول غرواني', 'صدمة نزفية', 'بديل البلازما'], en: ['dextran', 'colloid', 'plasma volume expander', 'Macrodex', 'hypovolemia'] }
});

DRUGS.push({
  id: 'adalimumab',
  cls: 'tnf-inhibitor',
  otc: false,
  alert: true,
  name:  { ar: 'الأداليموماب', en: 'Adalimumab' },
  short: {
    ar: 'دواء حيوي يُحقن تحت الجلد يحجب مادة الالتهاب TNF، يُستعمل في الروماتويد والصدفية وكرون والقولون التقرّحي وغيرها. يُضعف مقاومة العدوى، ويُفحص السلّ والتهاب الكبد B قبل بدئه.',
    en: 'A biologic injected under the skin that blocks the inflammatory messenger TNF, used in rheumatoid arthritis, psoriasis, Crohn\'s, ulcerative colitis and more. It weakens resistance to infection, and TB and hepatitis B are checked before starting.'
  },
  brands: ['هيوميرا', 'أمجيفيتا', 'هيريموز', 'إيداسيو', 'هادليما'],
  uses: ['rheumatoid-arthritis', 'psoriatic-arthritis', 'ankylosing-spondylitis', 'crohns', 'ulcerative-colitis', 'psoriasis', 'uveitis'],
  keywords: { ar: ['هيوميرا', 'حقنة الروماتيزم', 'دواء حيوي', 'مضاد TNF', 'بيولوجي'], en: ['Humira', 'anti-TNF', 'TNF blocker', 'biologic', 'biosimilar'] }
});

DRUGS.push({
  id: 'azathioprine',
  cls: 'immunosuppressant',
  otc: false,
  alert: true,
  name:  { ar: 'الأزاثيوبرين', en: 'Azathioprine' },
  short: {
    ar: 'مثبّط للمناعة بأقراص يمنع رفض الكلية المزروعة ويهدّئ أمراض المناعة الذاتية كالروماتويد وكرون. يحتاج تحاليل دم منتظمة، ويتعارض تعارضاً خطراً مع الألوبيورينول.',
    en: 'An immunosuppressant tablet that prevents rejection of a transplanted kidney and calms autoimmune diseases such as rheumatoid arthritis and Crohn\'s. It needs regular blood tests and interacts dangerously with allopurinol.'
  },
  brands: ['إيموران'],
  uses: ['rheumatoid-arthritis', 'crohns', 'ulcerative-colitis', 'lupus', 'eczema', 'myasthenia-gravis'],
  keywords: { ar: ['إيموران', 'مثبط مناعة', 'زراعة الكلى', 'ثيوبورين', 'دواء المناعة'], en: ['Imuran', 'immunosuppressant', 'thiopurine', 'TPMT', 'mercaptopurine'] }
});

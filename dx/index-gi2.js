/* ============================================================
   موسوعة الأمراض — فهرس مجموعة الهضم والكبد والبنكرياس (الموجة الثانية)
   dx/index-gi2.js
   ------------------------------------------------------------
   ٢٠ بطاقة: الأمعاء الالتهابية والرتوج · الفتوق والانسداد ·
   أمراض الشرج والمستقيم · الكبد والبنكرياس · المريء والمعدة.
   الأجسام الطويلة في dx/dx-gi2.js وتُحمَّل عند فتح البطاقة.
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الأمعاء الالتهابية والرتوج ---------------- */

DISEASES.push({
  id: 'crohns', tier: 'common', group: 'autoimmune', emergency: false,
  name: { ar: 'داء كرون', en: "Crohn's disease" },
  organs: ['small-intestine', 'large-intestine', 'villi', 'immunity', 'anorectal'],
  aliases: ['داء كرون'],
  short: {
    ar: 'التهاب مناعي مزمن يضرب جدار الأمعاء بعمقه كله، ويقفز مسافات فيترك أجزاء سليمة بين المصابة، وأشيع موضع له آخر الأمعاء الدقيقة.',
    en: 'A chronic immune inflammation that goes through the full thickness of the bowel wall and skips along it, leaving healthy segments between diseased ones; its commonest site is the end of the small intestine.'
  },
  keywords: { ar: ['كرون', 'التهاب الأمعاء المزمن', 'إسهال مزمن ونقص وزن'], en: ['Crohn', 'IBD', 'inflammatory bowel disease'] }
});

DISEASES.push({
  id: 'ulcerative-colitis', tier: 'common', group: 'autoimmune', emergency: false,
  name: { ar: 'التهاب القولون التقرّحي', en: 'Ulcerative colitis' },
  organs: ['large-intestine', 'anorectal', 'immunity', 'small-intestine'],
  aliases: ['التهاب القولون التقرّحي'],
  short: {
    ar: 'التهاب مناعي مزمن يصيب البطانة الداخلية للقولون وحدها، يبدأ من المستقيم ويمتد صاعداً بلا انقطاع، وعلامته الأوضح إسهال مخلوط بالدم.',
    en: 'A chronic immune inflammation of the inner lining of the colon alone, starting at the rectum and spreading upward without gaps; its clearest sign is diarrhoea mixed with blood.'
  },
  keywords: { ar: ['القولون التقرحي', 'دم مع الإسهال', 'التهاب الأمعاء المزمن'], en: ['ulcerative colitis', 'UC', 'IBD'] }
});

DISEASES.push({
  id: 'diverticular-disease', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'الرتوج القولونية والتهابها', en: 'Diverticular disease and diverticulitis' },
  organs: ['large-intestine', 'serous-membranes', 'small-intestine'],
  aliases: ['الرتوج القولونية'],
  short: {
    ar: 'جيوب صغيرة تنتأ من جدار القولون في مواضع ضعفه، تبقى صامتة عند أكثر الناس، فإذا التهب أحدها صار ألماً حادّاً أسفل البطن اليسرى مع حمّى.',
    en: 'Small pouches that bulge out through weak points in the colon wall; in most people they stay silent, but when one becomes inflamed it causes sharp left lower abdominal pain with fever.'
  },
  keywords: { ar: ['الرتوج', 'التهاب الرتج', 'ألم أسفل البطن اليسرى'], en: ['diverticulosis', 'diverticulitis'] }
});

DISEASES.push({
  id: 'colon-polyps', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'سلائل القولون (الزوائد اللحمية)', en: 'Colon polyps' },
  organs: ['large-intestine', 'anorectal', 'dna'],
  aliases: [],
  short: {
    ar: 'نتوءات لحمية تنمو من بطانة القولون بلا أعراض غالباً، أكثرها حميد، لكن نوعاً منها هو البذرة التي يخرج منها سرطان القولون بعد سنوات.',
    en: 'Fleshy growths rising from the lining of the colon, usually without symptoms and mostly benign, but one type is the seed from which colorectal cancer grows over years.'
  },
  keywords: { ar: ['سلائل القولون', 'زوائد لحمية', 'منظار القولون'], en: ['colon polyps', 'adenoma', 'colonoscopy'] }
});

/* ---------------- الفتوق والانسداد والبطن الحادّ ---------------- */

DISEASES.push({
  id: 'hiatal-hernia', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'الفتق الحجابي', en: 'Hiatus hernia' },
  organs: ['diaphragm', 'esophagus', 'stomach'],
  aliases: ['الفتق الحجابي'],
  short: {
    ar: 'اتّساع الفتحة التي يمرّ منها المريء في الحجاب الحاجز، فينزلق جزء من أعلى المعدة إلى الصدر ويفقد صمّام المريء سنده فيكثر الارتجاع.',
    en: 'The opening through which the oesophagus passes in the diaphragm widens, so part of the upper stomach slides into the chest and the oesophageal valve loses its support, allowing reflux.'
  },
  keywords: { ar: ['فتق الحجاب الحاجز', 'انزلاق المعدة للصدر', 'حرقة مستمرة'], en: ['hiatal hernia', 'hiatus hernia'] }
});

DISEASES.push({
  id: 'inguinal-hernia', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'الفتق الإربي عند البالغين', en: 'Inguinal hernia in adults' },
  organs: ['small-intestine', 'muscles', 'testis', 'large-intestine'],
  aliases: [],
  short: {
    ar: 'ضعف في جدار البطن عند أصل الفخذ يسمح لجزء من الأمعاء أو الشحم بالبروز تحت الجلد، فيظهر انتفاخ يكبر بالوقوف والسعال ويختفي بالاستلقاء.',
    en: 'A weakness in the abdominal wall at the groin lets a loop of bowel or fat push out under the skin, producing a bulge that grows on standing and coughing and disappears on lying down.'
  },
  keywords: { ar: ['الفتق الإربي', 'فتق الأربية', 'انتفاخ أصل الفخذ'], en: ['inguinal hernia', 'groin hernia'] }
});

DISEASES.push({
  id: 'bowel-obstruction', tier: 'common', group: 'digestion', emergency: true,
  name: { ar: 'انسداد الأمعاء', en: 'Bowel obstruction' },
  organs: ['small-intestine', 'large-intestine', 'serous-membranes', 'stomach'],
  aliases: ['الانسداد المعوي', 'الالتصاقات بعد الجراحة'],
  short: {
    ar: 'توقّف مرور الطعام والسوائل والريح عبر الأمعاء بسبب حاجز أو التصاق أو ورم، فينتفخ ما قبل الانسداد ويتضرّر جداره. حالة إسعافية لا تنتظر الصباح.',
    en: 'Food, fluid and gas stop passing through the bowel because of an adhesion, a hernia or a tumour; the gut above the blockage swells and its wall is put at risk. A surgical emergency.'
  },
  keywords: { ar: ['انسداد الأمعاء', 'توقف الريح والبراز', 'قيء أخضر', 'انتفاخ البطن'], en: ['bowel obstruction', 'ileus', 'adhesions'] }
});

DISEASES.push({
  id: 'acute-abdomen', tier: 'common', group: 'digestion', emergency: true,
  name: { ar: 'البطن الحادّ (متى يكون ألم البطن طارئاً)', en: 'The acute abdomen: when abdominal pain is an emergency' },
  organs: ['organs', 'serous-membranes', 'small-intestine', 'large-intestine', 'stomach', 'appendix'],
  aliases: ['التهاب الصفاق'],
  short: {
    ar: 'ليس مرضاً واحداً بل إنذار: مجموعة علامات تقول إن ألم البطن هذه المرة يحتاج طوارئ في ساعته لا موعداً ولا مسكّناً ولا انتظار الصباح.',
    en: 'Not a single disease but a warning: a set of signs saying that this abdominal pain needs emergency care within the hour, not an appointment, a painkiller, or waiting until morning.'
  },
  keywords: { ar: ['ألم البطن الشديد', 'بطن متيبس', 'البطن الحاد', 'متى أروح الطوارئ'], en: ['acute abdomen', 'peritonitis', 'surgical abdomen'] }
});

/* ---------------- المستقيم والقناة الشرجية ---------------- */

DISEASES.push({
  id: 'anal-fissure', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'الشقّ الشرجي', en: 'Anal fissure' },
  organs: ['anorectal', 'large-intestine'],
  aliases: ['الشقّ الشرجي'],
  short: {
    ar: 'قطع صغير في بطانة فتحة الشرج يجعل التبرّز ألماً حارقاً يستمر بعده ساعات، مع خيط دم أحمر فاتح على الورق. أشيع سببه إمساك وبراز قاسٍ.',
    en: 'A small tear in the lining of the anus that turns passing stool into a burning pain lasting hours afterwards, with a streak of bright red blood on the paper. Its usual cause is constipation and hard stool.'
  },
  keywords: { ar: ['الشرخ الشرجي', 'ألم عند التبرز', 'دم أحمر مع البراز'], en: ['anal fissure'] }
});

DISEASES.push({
  id: 'perianal-abscess', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'الخرّاج حول الشرجي', en: 'Perianal abscess' },
  organs: ['anorectal', 'skin', 'immunity'],
  aliases: ['الخرّاج حول الشرجي'],
  short: {
    ar: 'تجمّع صديد مؤلم بجوار فتحة الشرج، يبدأ من غدّة صغيرة داخل القناة الشرجية تسدّ وتلتهب. علاجه تفريغ لا مضاد حيوي وحده.',
    en: 'A painful collection of pus beside the anus, starting from a small gland inside the anal canal that blocks and becomes infected. Its treatment is drainage, not antibiotics alone.'
  },
  keywords: { ar: ['خراج الشرج', 'تورم مؤلم بجانب الشرج', 'صديد'], en: ['perianal abscess', 'anorectal abscess'] }
});

DISEASES.push({
  id: 'anal-fistula', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'الناسور الشرجي', en: 'Anal fistula' },
  organs: ['anorectal', 'large-intestine', 'skin'],
  aliases: ['الناسور الشرجي'],
  short: {
    ar: 'نفق صغير يبقى مفتوحاً بين داخل القناة الشرجية وجلد ما حولها بعد خرّاج تفرّغ، فيرشح منه صديد أو دم بين حين وآخر ولا يلتئم وحده.',
    en: 'A small tunnel that stays open between the inside of the anal canal and the surrounding skin after an abscess has drained, leaking pus or blood on and off and never healing on its own.'
  },
  keywords: { ar: ['ناسور شرجي', 'فتحة ترشح صديد', 'بعد خراج'], en: ['anal fistula', 'fistula in ano'] }
});

DISEASES.push({
  id: 'fecal-incontinence', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'سلس البراز', en: 'Faecal incontinence' },
  organs: ['anorectal', 'large-intestine', 'peripheral-nerve', 'pelvis'],
  aliases: ['سلس البراز'],
  short: {
    ar: 'فقد السيطرة على خروج البراز أو الريح، من تلوّث خفيف للملابس إلى خروج كامل بلا إنذار. شائع أكثر مما يُعترف به لأن أصحابه يخجلون من ذكره.',
    en: 'Loss of control over stool or wind, from slight soiling of the underwear to a full unheralded motion. Far commoner than admitted, because those who have it are ashamed to mention it.'
  },
  keywords: { ar: ['سلس البراز', 'عدم التحكم بالبراز', 'تلوث الملابس'], en: ['faecal incontinence', 'bowel incontinence'] }
});

/* ---------------- الكبد والبنكرياس ---------------- */

DISEASES.push({
  id: 'nafld', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'الكبد الدهني غير الكحولي', en: 'Non-alcoholic fatty liver disease' },
  organs: ['liver', 'liver-lobule', 'pancreas', 'cell'],
  aliases: ['الكبد الدهني'],
  short: {
    ar: 'تراكم الدهن داخل خلايا الكبد عند من لا يشرب الخمر. صامت في أكثر الحالات، لكنه عند بعضهم يلتهب ويتليّف حتى يبلغ التشمّع.',
    en: 'Fat accumulating inside liver cells in someone who does not drink alcohol. Silent in most, but in a minority it inflames and scars until it reaches cirrhosis.'
  },
  keywords: { ar: ['الكبد الدهني', 'دهون على الكبد', 'ارتفاع إنزيمات الكبد'], en: ['NAFLD', 'fatty liver', 'MASLD', 'steatohepatitis'] }
});

DISEASES.push({
  id: 'esophageal-varices', tier: 'common', group: 'digestion', emergency: true,
  name: { ar: 'دوالي المريء ونزفها', en: 'Oesophageal varices and variceal bleeding' },
  organs: ['esophagus', 'liver-lobule', 'liver', 'vessels', 'spleen'],
  aliases: [],
  short: {
    ar: 'أوردة متمدّدة رقيقة الجدار في أسفل المريء تنشأ حين يعيق الكبد المتشمّع مرور الدم فيبحث عن طرق جانبية. صامتة حتى تنفجر، ونزفها إسعافي.',
    en: 'Thin-walled dilated veins at the lower oesophagus, formed when a scarred liver obstructs blood flow and it seeks side routes. Silent until they burst, and that bleed is an emergency.'
  },
  keywords: { ar: ['دوالي المريء', 'قيء دم', 'براز أسود', 'تشمع الكبد'], en: ['oesophageal varices', 'variceal bleed', 'haematemesis'] }
});

DISEASES.push({
  id: 'acute-pancreatitis', tier: 'common', group: 'digestion', emergency: true,
  name: { ar: 'التهاب البنكرياس الحادّ', en: 'Acute pancreatitis' },
  organs: ['pancreas', 'gallbladder', 'small-intestine', 'serous-membranes'],
  aliases: ['التهاب البنكرياس الحاد'],
  short: {
    ar: 'إنزيمات البنكرياس تنشط داخله بدل أن تنشط في الأمعاء، فتهضم غدّتها نفسها. ألم شديد وسط أعلى البطن ينفذ إلى الظهر، وحالة تستدعي الطوارئ.',
    en: 'The pancreatic enzymes switch on inside the gland instead of in the bowel, and begin to digest it. Severe pain in the upper middle abdomen boring through to the back: an emergency.'
  },
  keywords: { ar: ['التهاب البنكرياس', 'ألم ينفذ للظهر', 'حصى المرارة'], en: ['acute pancreatitis', 'lipase'] }
});

DISEASES.push({
  id: 'chronic-pancreatitis', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'التهاب البنكرياس المزمن', en: 'Chronic pancreatitis' },
  organs: ['pancreas', 'small-intestine', 'villi', 'liver'],
  aliases: ['قصور البنكرياس الإفرازي'],
  short: {
    ar: 'تلف متراكم يحلّ فيه النسيج الليفي محلّ غدّة البنكرياس، فتضعف إنزيمات الهضم ثم الإنسولين، ويبقى ألم البطن ودهن في البراز ونقص وزن.',
    en: 'Cumulative damage in which fibrous tissue replaces the pancreatic gland, so digestive enzymes fail and later insulin too, leaving abdominal pain, fatty stools and weight loss.'
  },
  keywords: { ar: ['البنكرياس المزمن', 'براز دهني', 'سوء هضم الدهون'], en: ['chronic pancreatitis', 'exocrine insufficiency', 'steatorrhoea'] }
});

/* ---------------- المريء والمعدة والأمعاء الدقيقة ---------------- */

DISEASES.push({
  id: 'chronic-gastritis', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'التهاب المعدة المزمن', en: 'Chronic gastritis' },
  organs: ['stomach', 'small-intestine', 'blood'],
  aliases: ['التهاب المعدة'],
  short: {
    ar: 'التهاب طويل الأمد في بطانة المعدة، أشيع سببيه جرثومة المعدة الحلزونية ومسكّنات الالتهاب. قد يمضي بلا ألم بيّن ثم يُكتشف من فقر دم غير مفسّر.',
    en: 'A long-standing inflammation of the stomach lining, most often from Helicobacter pylori or anti-inflammatory painkillers. It may run without clear pain and be found through unexplained anaemia.'
  },
  keywords: { ar: ['التهاب المعدة المزمن', 'ضمور بطانة المعدة', 'نقص فيتامين ب12'], en: ['chronic gastritis', 'atrophic gastritis'] }
});

DISEASES.push({
  id: 'gastroparesis', tier: 'rare', group: 'digestion', emergency: false,
  name: { ar: 'خزل المعدة (تأخّر إفراغ المعدة)', en: 'Gastroparesis' },
  organs: ['stomach', 'autonomic', 'small-intestine', 'peripheral-nerve'],
  aliases: [],
  short: {
    ar: 'المعدة تفرغ محتواها ببطء شديد بلا أي انسداد يمنعه، فيشبع صاحبها من لقيمات ويشكو غثياناً وانتفاخاً وقيئاً لطعام أكله قبل ساعات.',
    en: 'The stomach empties very slowly although nothing blocks it, so a few mouthfuls bring fullness, with nausea, bloating and vomiting of food eaten hours earlier.'
  },
  keywords: { ar: ['خزل المعدة', 'تأخر إفراغ المعدة', 'شبع مبكر', 'السكري'], en: ['gastroparesis', 'delayed gastric emptying'] }
});

DISEASES.push({
  id: 'sibo', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'فرط نموّ البكتيريا في الأمعاء الدقيقة', en: 'Small intestinal bacterial overgrowth (SIBO)' },
  organs: ['small-intestine', 'villi', 'large-intestine', 'stomach'],
  aliases: [],
  short: {
    ar: 'بكتيريا القولون تتكاثر في الأمعاء الدقيقة حيث ينبغي أن تكون قليلة، فتخمّر الطعام قبل امتصاصه وتصنع غازاً وانتفاخاً وإسهالاً بعد الأكل.',
    en: 'Colonic bacteria multiply in the small intestine where they should be few, fermenting food before it is absorbed and producing gas, bloating and diarrhoea after meals.'
  },
  keywords: { ar: ['فرط نمو البكتيريا', 'انتفاخ بعد الأكل', 'غازات مستمرة'], en: ['SIBO', 'bacterial overgrowth', 'breath test'] }
});

DISEASES.push({
  id: 'eosinophilic-esophagitis', tier: 'rare', group: 'digestion', emergency: false,
  name: { ar: 'التهاب المريء اليوزيني', en: 'Eosinophilic oesophagitis' },
  organs: ['esophagus', 'immunity', 'pharynx'],
  aliases: [],
  short: {
    ar: 'تفاعل تحسّسي مزمن يملأ جدار المريء بخلايا مناعية فيتيبّس ويضيق، فتعلق اللقمة في الصدر. أشيع سبب لانحشار الطعام عند الشباب.',
    en: 'A chronic allergic reaction that fills the oesophageal wall with immune cells until it stiffens and narrows, so a mouthful sticks in the chest. The commonest cause of food impaction in young adults.'
  },
  keywords: { ar: ['التهاب المريء اليوزيني', 'انحشار الطعام', 'صعوبة بلع عند الشباب'], en: ['eosinophilic oesophagitis', 'EoE', 'food impaction'] }
});

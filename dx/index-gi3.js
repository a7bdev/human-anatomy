/* ============================================================
   موسوعة الأمراض — فهرس مجموعة الهضم والكبد والصفراء (الموجة الثالثة)
   dx/index-gi3.js
   ------------------------------------------------------------
   ٢٠ بطاقة: المريء · النزف الهضمي · الصفراء واليرقان ·
   إقفار الأمعاء والتهاب القولون · الكبد ومضاعفاته · جدار البطن والشرج.
   الأجسام الطويلة في dx/dx-gi3.js وتُحمَّل عند فتح البطاقة.
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- المريء ---------------- */

DISEASES.push({
  id: 'achalasia', tier: 'rare', group: 'digestion', emergency: false,
  name: { ar: 'تعذّر الارتخاء المريئي', en: 'Achalasia' },
  organs: ['esophagus', 'pharynx', 'stomach', 'autonomic'],
  aliases: ['تعذر الارتخاء المريئي'],
  short: {
    ar: 'تموت الخلايا العصبية التي تأمر صمّام أسفل المريء بالانفتاح، فيبقى مغلقاً ويفقد المريء موجته الدافعة، فيقف الطعام والشراب في الصدر ويرجع بلا حموضة.',
    en: 'The nerve cells that tell the valve at the lower oesophagus to open die away, so it stays shut and the oesophagus loses its propelling wave; food and drink then stand in the chest and come back up without acid.'
  },
  keywords: { ar: ['تعذر الارتخاء', 'صعوبة بلع السوائل والجوامد', 'رجوع الطعام غير المهضوم'], en: ['achalasia', 'dysphagia', 'oesophageal manometry'] }
});

DISEASES.push({
  id: 'barretts', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'مريء باريت', en: 'Barrett oesophagus' },
  organs: ['esophagus', 'stomach', 'cell', 'dna'],
  aliases: [],
  short: {
    ar: 'بطانة أسفل المريء تستبدل نفسها ببطانة تشبه بطانة الأمعاء دفاعاً عن نفسها من الحمض المتكرّر، فتحتمل الحمض أكثر لكنها تصير أرضاً قد ينبت فيها سرطان المريء.',
    en: 'The lining of the lower oesophagus replaces itself with an intestine-like lining to defend against repeated acid; it tolerates acid better, but becomes ground in which oesophageal cancer may grow.'
  },
  keywords: { ar: ['مريء باريت', 'ارتجاع مزمن', 'تحوّل بطانة المريء', 'خزعات المسح'], en: ['Barrett oesophagus', 'intestinal metaplasia', 'surveillance endoscopy'] }
});

/* ---------------- النزف الهضمي ---------------- */

DISEASES.push({
  id: 'upper-gi-bleed', tier: 'common', group: 'digestion', emergency: true,
  name: { ar: 'النزف الهضمي العلوي (قيء الدم والبراز الأسود)', en: 'Upper gastrointestinal bleeding' },
  organs: ['stomach', 'esophagus', 'small-intestine', 'blood'],
  aliases: [],
  short: {
    ar: 'نزف من المريء أو المعدة أو أول الأمعاء الدقيقة يظهر قيئاً دموياً أو كالبنّ المطحون، أو براز أسود لزج نتن. حالة إسعافية حتى وإن توقّف الدم وحده.',
    en: 'Bleeding from the oesophagus, stomach or first part of the small intestine, showing as vomited blood or coffee-ground vomit, or black tarry foul stool. An emergency even if the bleeding seems to have stopped by itself.'
  },
  keywords: { ar: ['قيء دم', 'براز أسود', 'نزيف المعدة', 'قرحة نازفة'], en: ['haematemesis', 'melaena', 'upper GI bleed'] }
});

DISEASES.push({
  id: 'lower-gi-bleed', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'النزف الهضمي السفلي (الدم النازل من الشرج)', en: 'Lower gastrointestinal bleeding' },
  organs: ['large-intestine', 'anorectal', 'small-intestine', 'blood'],
  aliases: [],
  short: {
    ar: 'خروج دم أحمر أو كستنائي مع البراز مصدره القولون أو المستقيم. أكثره من البواسير والشقّ، لكن الرتوج وتوسّع الأوعية والسرطان تعطي المنظر نفسه، ولذلك لا يُنسب لبواسير بلا فحص.',
    en: 'Red or maroon blood passed with stool, arising from the colon or rectum. Most of it comes from piles and fissures, but diverticula, vascular malformations and cancer look the same, so it must never be blamed on piles without examination.'
  },
  keywords: { ar: ['دم مع البراز', 'نزيف من الشرج', 'دم أحمر', 'نزف الرتوج'], en: ['rectal bleeding', 'haematochezia', 'lower GI bleed'] }
});

/* ---------------- الصفراء واليرقان ---------------- */

DISEASES.push({
  id: 'obstructive-jaundice', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'اليرقان الانسدادي', en: 'Obstructive jaundice' },
  organs: ['liver-lobule', 'gallbladder', 'liver', 'pancreas'],
  aliases: ['اليرقان الانسدادي'],
  short: {
    ar: 'انسداد الطريق الذي تخرج به الصفراء من الكبد إلى الأمعاء، فترتدّ إلى الدم: اصفرار العين والجلد، وبول داكن، وبراز فاتح كالطين، وحكّة بلا طفح.',
    en: 'The path by which bile leaves the liver for the bowel is blocked, so bile backs up into the blood: yellow eyes and skin, dark urine, pale clay-like stool, and itching without any rash.'
  },
  keywords: { ar: ['اصفرار العين', 'بول داكن وبراز فاتح', 'انسداد القناة الصفراوية', 'حصاة في القناة'], en: ['obstructive jaundice', 'cholestasis', 'bile duct obstruction'] }
});

DISEASES.push({
  id: 'cholangitis', tier: 'common', group: 'digestion', emergency: true,
  name: { ar: 'التهاب الأقنية الصفراوية الصاعد', en: 'Ascending cholangitis' },
  organs: ['gallbladder', 'liver', 'pancreas', 'blood'],
  aliases: [],
  short: {
    ar: 'عدوى في الصفراء الراكدة خلف انسداد، فتصعد الجراثيم إلى الكبد وتدخل الدم بسرعة: حمّى مع رعشة، وألم أعلى البطن اليمنى، واصفرار. تحتاج تفريغ الانسداد لا مضاداً وحده.',
    en: 'Infection of bile stagnating behind a blockage; bacteria climb into the liver and enter the blood quickly, giving fever with rigors, right upper abdominal pain and jaundice. It needs the blockage drained, not antibiotics alone.'
  },
  keywords: { ar: ['التهاب القنوات الصفراوية', 'حمى ورعشة مع اصفرار', 'إنتان الصفراء'], en: ['ascending cholangitis', 'Charcot triad', 'ERCP'] }
});

DISEASES.push({
  id: 'gilbert-syndrome', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'متلازمة جيلبرت', en: 'Gilbert syndrome' },
  organs: ['liver-lobule', 'liver', 'blood', 'dna'],
  aliases: [],
  short: {
    ar: 'اختلاف وراثي شائع وحميد يبطئ إحدى خطوات معالجة الكبد للبيليروبين، فيصفرّ بياض العين قليلاً عند الجوع أو التعب أو المرض ثم يزول. لا يؤذي الكبد ولا يحتاج علاجاً.',
    en: 'A common, harmless inherited variation that slows one step in the way the liver handles bilirubin, so the whites of the eyes yellow slightly with fasting, tiredness or illness and then clear. It does not harm the liver and needs no treatment.'
  },
  keywords: { ar: ['جيلبرت', 'اصفرار خفيف متكرر', 'ارتفاع البيليروبين غير المباشر'], en: ['Gilbert syndrome', 'unconjugated bilirubin', 'benign jaundice'] }
});

DISEASES.push({
  id: 'cholestatic-autoimmune', tier: 'rare', group: 'autoimmune', emergency: false,
  name: { ar: 'أمراض الصفراء المناعية المزمنة', en: 'Chronic autoimmune cholestatic liver disease' },
  organs: ['liver', 'gallbladder', 'liver-lobule', 'immunity', 'large-intestine'],
  aliases: [],
  short: {
    ar: 'مجموعة يهاجم فيها الجهاز المناعي القنوات الصفراوية نفسها: الصغيرة داخل الكبد في التشمّع الصفراوي الأولي، والكبيرة داخله وخارجه في التهاب الأقنية المصلّب. أول ما يشكوه صاحبها حكّة وتعب لا اصفرار.',
    en: 'A group in which the immune system attacks the bile ducts themselves: the small ducts inside the liver in primary biliary cholangitis, and the larger ones inside and outside it in sclerosing cholangitis. The first complaint is itching and fatigue, not yellowing.'
  },
  keywords: { ar: ['التشمع الصفراوي الأولي', 'التهاب الأقنية المصلب', 'حكة بلا طفح', 'ارتفاع الفوسفاتاز القلوية'], en: ['primary biliary cholangitis', 'primary sclerosing cholangitis', 'PBC', 'PSC'] }
});

/* ---------------- إقفار الأمعاء والتهاب القولون ---------------- */

DISEASES.push({
  id: 'mesenteric-ischemia', tier: 'rare', group: 'digestion', emergency: true,
  name: { ar: 'الإقفار المساريقي (انقطاع تروية الأمعاء)', en: 'Acute mesenteric ischaemia' },
  organs: ['small-intestine', 'vessels', 'large-intestine', 'heart'],
  aliases: [],
  short: {
    ar: 'انسداد مفاجئ للشريان الذي يغذّي الأمعاء، فيموت المعى خلال ساعات. علامته الغادرة ألم بطن هائل مع بطن لا يكاد يؤلم عند الجسّ في أوله، ولذلك يُستهان به فيتأخّر.',
    en: 'Sudden blockage of the artery feeding the bowel, so the gut dies within hours. Its treacherous sign is enormous abdominal pain with an abdomen that hardly hurts when pressed at first, which is why it is underestimated and delayed.'
  },
  keywords: { ar: ['نقص تروية الأمعاء', 'ألم بطن شديد بلا علامات', 'جلطة شريان الأمعاء'], en: ['mesenteric ischaemia', 'bowel infarction', 'pain out of proportion'] }
});

DISEASES.push({
  id: 'ischemic-colitis', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'التهاب القولون الإقفاري', en: 'Ischaemic colitis' },
  organs: ['large-intestine', 'vessels', 'blood'],
  aliases: [],
  short: {
    ar: 'نقص مؤقّت في دم القولون يصيب كبار السنّ غالباً بعد هبوط ضغط أو جفاف، فيبدأ بمغص أيسر مفاجئ يتبعه إسهال دموي خلال ساعة. أكثره يشفى وحده، وقليله يتطوّر إلى موت جزء من القولون.',
    en: 'A temporary fall in the blood supply of the colon, usually in older people after low blood pressure or dehydration, starting with sudden left-sided cramping followed within an hour by bloody diarrhoea. Most settles on its own; a minority progresses to death of a segment of colon.'
  },
  keywords: { ar: ['القولون الإقفاري', 'إسهال دموي مفاجئ', 'ألم أيسر عند كبار السن'], en: ['ischaemic colitis', 'colonic ischaemia'] }
});

DISEASES.push({
  id: 'c-diff-colitis', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'التهاب القولون بعد المضادات الحيوية (الغشاء الكاذب)', en: 'Antibiotic-associated (Clostridioides difficile) colitis' },
  organs: ['large-intestine', 'immunity', 'small-intestine'],
  aliases: [],
  short: {
    ar: 'المضاد الحيوي يمسح بكتيريا القولون النافعة، فتتكاثر جرثومة معنّدة تفرز سمّاً يلتهب به القولون ويكسو بغشاء كاذب: إسهال مائي غزير برائحة نفّاذة ومغص وحمّى بعد أيام أو أسابيع من الدواء.',
    en: 'An antibiotic wipes out the useful colonic bacteria, letting a stubborn organism multiply and release a toxin that inflames the colon and coats it with a false membrane: profuse watery diarrhoea with a penetrating smell, cramping and fever days or weeks after the drug.'
  },
  keywords: { ar: ['إسهال بعد المضاد الحيوي', 'كلوستريديوم ديفيسيل', 'الغشاء الكاذب'], en: ['C difficile', 'pseudomembranous colitis', 'antibiotic diarrhoea'] }
});

/* ---------------- الكبد ومضاعفاته ---------------- */

DISEASES.push({
  id: 'ascites-sbp', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'الاستسقاء البطني والتهاب الصفاق التلقائي', en: 'Ascites and spontaneous bacterial peritonitis' },
  organs: ['serous-membranes', 'liver', 'liver-lobule', 'vessels'],
  aliases: [],
  short: {
    ar: 'تجمّع سائل داخل تجويف البطن، أشيع أسبابه الكبد المتشمّع. ينتفخ البطن ويثقل النفس، وقد تصيب هذا السائل عدوى تلقائية بلا ثقب ولا جرح فتقلب الحال في يوم.',
    en: 'Fluid collecting inside the abdominal cavity, most often from a cirrhotic liver. The abdomen swells and breathing grows heavy, and the fluid may become spontaneously infected with no perforation or wound, turning the situation within a day.'
  },
  keywords: { ar: ['ماء في البطن', 'استسقاء', 'التهاب الصفاق التلقائي', 'انتفاخ البطن مع تشمع'], en: ['ascites', 'spontaneous bacterial peritonitis', 'paracentesis'] }
});

DISEASES.push({
  id: 'hepatic-encephalopathy', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'الاعتلال الدماغي الكبدي', en: 'Hepatic encephalopathy' },
  organs: ['liver', 'bbb', 'brain', 'liver-lobule'],
  aliases: ['الاعتلال الدماغي الكبدي'],
  short: {
    ar: 'الكبد العاجز لا ينقّي الدم من نواتج الأمعاء، فتعبر إلى الدماغ: تبدّل نوم، ونسيان وبطء فهم، ورجفة خاصة في اليدين المبسوطتين، حتى يبلغ الأمر التخليط والسبات.',
    en: 'A failing liver no longer clears the blood of gut-derived products, which cross into the brain: reversed sleep, forgetfulness and slowed thinking, a characteristic flap of the outstretched hands, reaching confusion and coma.'
  },
  keywords: { ar: ['غيبوبة كبدية', 'تخليط مع تشمع', 'رجفة اليدين', 'الأمونيا'], en: ['hepatic encephalopathy', 'asterixis', 'ammonia'] }
});

DISEASES.push({
  id: 'acute-liver-failure', tier: 'rare', group: 'digestion', emergency: true,
  name: { ar: 'الفشل الكبدي الحادّ', en: 'Acute liver failure' },
  organs: ['liver', 'liver-lobule', 'clotting', 'brain'],
  aliases: [],
  short: {
    ar: 'انهيار وظيفة الكبد خلال أيام أو أسابيع في شخص كبده كان سليماً، فيضطرب التخثّر ويتبدّل الوعي. أشيع مسبّباته جرعة مفرطة من خافض حرارة شائع وفيروسات الكبد.',
    en: 'The liver collapses within days or weeks in a person whose liver was previously healthy, so clotting is deranged and consciousness alters. Its commonest causes are an excessive dose of a common fever medicine and the hepatitis viruses.'
  },
  keywords: { ar: ['فشل الكبد الحاد', 'اصفرار مع تخليط', 'تسمم الكبد', 'زراعة كبد'], en: ['acute liver failure', 'fulminant hepatitis', 'INR'] }
});

DISEASES.push({
  id: 'dili', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'أذى الكبد الدوائي والعشبي', en: 'Drug- and herb-induced liver injury' },
  organs: ['liver', 'liver-lobule', 'cell'],
  aliases: [],
  short: {
    ar: 'التهاب أو تلف في الكبد سبّبه دواء أو عشبة أو مكمّل غذائي أو منشّط رياضي. يبدأ غالباً بلا عرض ويُكتشف في تحليل، وقد يصل إلى اصفرار وفشل كبدي.',
    en: 'Inflammation or damage of the liver caused by a medicine, a herb, a food supplement or a bodybuilding product. It usually begins without symptoms and is found on a blood test, and can progress to jaundice and liver failure.'
  },
  keywords: { ar: ['ارتفاع إنزيمات الكبد بسبب دواء', 'أعشاب تضر الكبد', 'مكملات ومنشطات'], en: ['drug-induced liver injury', 'DILI', 'herbal supplements'] }
});

DISEASES.push({
  id: 'autoimmune-hepatitis', tier: 'rare', group: 'autoimmune', emergency: false,
  name: { ar: 'التهاب الكبد المناعي الذاتي', en: 'Autoimmune hepatitis' },
  organs: ['liver', 'liver-lobule', 'immunity'],
  aliases: [],
  short: {
    ar: 'الجهاز المناعي يهاجم خلايا الكبد نفسها بلا فيروس ولا دواء، فيشتعل التهاب مزمن يقود إلى التشمّع إن أُهمل. يصيب النساء أكثر، ويستجيب لكبح المناعة استجابة جيدة.',
    en: 'The immune system attacks the liver cells themselves, with no virus and no drug involved, lighting a chronic inflammation that leads to cirrhosis if neglected. It affects women more, and responds well to damping the immune system.'
  },
  keywords: { ar: ['التهاب الكبد المناعي', 'أضداد ذاتية', 'ارتفاع إنزيمات الكبد المزمن'], en: ['autoimmune hepatitis', 'autoantibodies', 'liver biopsy'] }
});

DISEASES.push({
  id: 'liver-abscess', tier: 'rare', group: 'digestion', emergency: false,
  name: { ar: 'خرّاج الكبد', en: 'Liver abscess' },
  organs: ['liver', 'liver-lobule', 'immunity', 'large-intestine'],
  aliases: [],
  short: {
    ar: 'تجمّع صديد داخل الكبد، إما من جراثيم وصلت عبر الصفراء أو دم الأمعاء، وإما من طفيلي الأميبا. حمّى متمادية مع تعرّق وألم أيمن أعلى البطن ونقص وزن.',
    en: 'A collection of pus inside the liver, either from bacteria arriving through the bile or the bowel blood, or from the amoebic parasite. It gives persistent fever with sweats, right upper abdominal pain and weight loss.'
  },
  keywords: { ar: ['خراج الكبد', 'صديد في الكبد', 'خراج أميبي', 'حمى مع ألم يمين البطن'], en: ['liver abscess', 'pyogenic abscess', 'amoebic abscess'] }
});

/* ---------------- جدار البطن والشرج ---------------- */

DISEASES.push({
  id: 'ventral-hernia', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'فتوق جدار البطن: السرّي والجراحي', en: 'Ventral hernia: umbilical and incisional' },
  organs: ['muscles', 'small-intestine', 'large-intestine', 'skin'],
  aliases: [],
  short: {
    ar: 'بروز شحم أو معى من فجوة في عضلات جدار البطن، عند السرّة أو في ندبة عملية سابقة. ينتفخ بالوقوف والجهد ويختفي بالاستلقاء، وخطره أن ينحبس فيختنق.',
    en: 'Fat or bowel pushing out through a gap in the abdominal wall muscles, at the navel or in the scar of a previous operation. It bulges on standing and straining and disappears on lying down; its danger is becoming trapped and strangulated.'
  },
  keywords: { ar: ['فتق السرة عند الكبار', 'فتق بعد العملية', 'انتفاخ في البطن', 'اختناق الفتق'], en: ['umbilical hernia', 'incisional hernia', 'strangulation'] }
});

DISEASES.push({
  id: 'pilonidal-sinus', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'الكيس الشعري (الناسور العصعصي)', en: 'Pilonidal sinus' },
  organs: ['skin', 'anorectal', 'hair-follicle'],
  aliases: [],
  short: {
    ar: 'جيب صغير في الجلد أعلى شقّ الأليتين تدخل فيه شعرة فتحفر طريقها إلى الداخل، فيتكرّر التهابه وينزّ صديداً. مرض الشباب كثيري الجلوس، ويكثر في الرجال ذوي الشعر الكثيف.',
    en: 'A small skin pit at the top of the cleft between the buttocks into which a hair burrows inward, so it inflames repeatedly and weeps pus. It is a disease of young people who sit long hours, and is commoner in men with thick hair.'
  },
  keywords: { ar: ['الكيس الشعري', 'ناسور العصعص', 'خراج أعلى الأليتين', 'الشعرة الغائرة'], en: ['pilonidal sinus', 'pilonidal abscess', 'natal cleft'] }
});

DISEASES.push({
  id: 'rectal-prolapse', tier: 'common', group: 'digestion', emergency: false,
  name: { ar: 'هبوط المستقيم', en: 'Rectal prolapse' },
  organs: ['anorectal', 'large-intestine', 'pelvis', 'muscles'],
  aliases: [],
  short: {
    ar: 'انزلاق جدار المستقيم إلى خارج فتحة الشرج عند الحزق، فيظهر كتلة حمراء حلقية الطيّات. يبدأ بالرجوع وحده ثم يبقى خارجاً، ويصحبه ترشّح مخاط وسلس متزايد.',
    en: 'The wall of the rectum slides out through the anus on straining, appearing as a red mass with ring-shaped folds. At first it returns by itself, later it stays out, and it is accompanied by mucus leakage and increasing incontinence.'
  },
  keywords: { ar: ['هبوط المستقيم', 'خروج كتلة عند التبرز', 'تدلي الشرج'], en: ['rectal prolapse', 'procidentia'] }
});

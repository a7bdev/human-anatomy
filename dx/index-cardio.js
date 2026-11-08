/* ============================================================
   موسوعة الأمراض — فهرس القلب والصدر والدم
   dx/index-cardio.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-cardio.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- القلب ---------------- */

DISEASES.push({
  id: 'angina', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'الذبحة الصدرية', en: 'Angina pectoris' },
  short: {
    ar: 'ضيق أو ثقل في الصدر يظهر مع المجهود أو الانفعال ويزول بالراحة خلال دقائق، لأن الشريان المتضيّق لا يوصل لعضلة القلب ما تحتاجه وقت الجهد.',
    en: 'Tightness or heaviness in the chest that appears with exertion or emotion and eases with rest within minutes, because a narrowed artery cannot deliver what the heart muscle needs under load.'
  },
  organs: ['coronary', 'heart', 'vessel-types', 'circulation'],
  aliases: ['الذبحة الصدرية', 'تشنج الشريان التاجي'],
  keywords: { ar: ['ألم الصدر مع المجهود', 'ضيق الشرايين التاجية', 'خناق الصدر'], en: ['angina', 'stable angina', 'chest pain on exertion'] }
});

DISEASES.push({
  id: 'hypertension', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'ارتفاع ضغط الدم', en: 'High blood pressure (hypertension)' },
  short: {
    ar: 'ضغط الدم على جدران الشرايين أعلى من اللازم سنوات طويلة بلا أي إحساس، فيُتعب القلب والكلى والعين والدماغ في صمت.',
    en: 'The pressure of blood on the artery walls stays higher than it should for years without any sensation, quietly wearing down the heart, kidneys, eyes and brain.'
  },
  organs: ['heart', 'vessels', 'vessel-types', 'kidneys', 'circulation', 'retina'],
  aliases: ['ارتفاع ضغط الدم'],
  keywords: { ar: ['الضغط', 'ضغط مرتفع', 'القاتل الصامت'], en: ['hypertension', 'high BP', 'silent killer'] }
});

DISEASES.push({
  id: 'heart-failure', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'قصور القلب (هبوط القلب)', en: 'Heart failure' },
  short: {
    ar: 'عضلة القلب لم تعد تضخّ ما يكفي حاجة الجسم، فيتراكم السائل في الرئتين والساقين ويصير أقلّ مجهود متعباً.',
    en: 'The heart muscle no longer pumps enough for the body, so fluid backs up into the lungs and legs and the smallest effort becomes tiring.'
  },
  organs: ['heart', 'lungs', 'alveoli', 'kidneys', 'circulation', 'coronary'],
  aliases: ['قصور القلب', 'قصور القلب بعد الاحتشاء'],
  keywords: { ar: ['هبوط القلب', 'ضعف عضلة القلب', 'احتباس السوائل'], en: ['heart failure', 'congestive heart failure', 'CHF'] }
});

DISEASES.push({
  id: 'afib', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'الرجفان الأذيني', en: 'Atrial fibrillation' },
  short: {
    ar: 'الأذينان ترتجفان بدل أن تنقبضا بانتظام، فيصير النبض غير منتظم إطلاقاً، ويركد الدم في زاوية منهما فتتكوّن جلطة قد تسافر إلى الدماغ.',
    en: 'The atria quiver instead of contracting in rhythm, so the pulse becomes completely irregular and blood stagnates in a corner of them, forming a clot that may travel to the brain.'
  },
  organs: ['heart', 'clotting', 'brain', 'circulation'],
  aliases: ['اضطراب نظم القلب'],
  keywords: { ar: ['خفقان', 'عدم انتظام النبض', 'رفرفة أذينية'], en: ['atrial fibrillation', 'AF', 'irregular pulse', 'palpitations'] }
});

DISEASES.push({
  id: 'atherosclerosis', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'تصلّب الشرايين', en: 'Atherosclerosis' },
  short: {
    ar: 'ترسّب الدهون والكوليسترول في جدران الشرايين على مدى عقود حتى تضيق وتفقد ليونتها، وهو الجذر المشترك لأغلب أمراض القلب والسكتة الدماغية.',
    en: 'Fat and cholesterol deposit in the artery walls over decades until they narrow and lose their suppleness; this is the shared root of most heart disease and stroke.'
  },
  organs: ['vessels', 'vessel-types', 'coronary', 'circulation', 'heart', 'brain'],
  aliases: ['تصلّب الشرايين', 'تصلب الشرايين', 'تصلب الشرايين التاجية'],
  keywords: { ar: ['الكوليسترول', 'اللويحة العصيدية', 'ضيق الشرايين'], en: ['atherosclerosis', 'plaque', 'cholesterol', 'arterial narrowing'] }
});

DISEASES.push({
  id: 'valve-disease', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'أمراض صمامات القلب (التضيّق والقلس)', en: 'Heart valve disease (stenosis and regurgitation)' },
  short: {
    ar: 'صمّام لا يفتح بما يكفي فيعيق خروج الدم، أو لا ينغلق بإحكام فيرجع الدم إلى الوراء — وفي الحالتين يعمل القلب أكثر من طاقته.',
    en: 'A valve that does not open enough obstructs the outflow of blood, or does not close tightly so blood leaks backwards; either way the heart works beyond its capacity.'
  },
  organs: ['heart', 'circulation', 'lungs'],
  aliases: ['أمراض صمامات القلب'],
  keywords: { ar: ['لغط القلب', 'تضيق الصمام الأبهري', 'ارتجاع الصمام', 'الحمى الروماتيزمية'], en: ['valve disease', 'aortic stenosis', 'mitral regurgitation', 'heart murmur'] }
});

DISEASES.push({
  id: 'cardiomyopathy', group: 'heart', tier: 'common', emergency: false,
  name: { ar: 'اعتلال عضلة القلب', en: 'Cardiomyopathy' },
  short: {
    ar: 'مرض في عضلة القلب نفسها — تتضخّم أو تتمدّد أو تتيبّس — فتضعف قدرتها على الضخّ أو على الامتلاء، من غير انسداد في الشرايين.',
    en: 'A disease of the heart muscle itself — thickened, dilated or stiffened — weakening its ability to pump or to fill, with no blockage in the arteries.'
  },
  organs: ['heart', 'muscle-types', 'muscle-fiber', 'circulation'],
  aliases: ['اعتلال عضلة القلب', 'تضخّم عضلة القلب'],
  keywords: { ar: ['تضخم عضلة القلب', 'توسع القلب', 'الموت المفاجئ عند الرياضيين'], en: ['cardiomyopathy', 'hypertrophic', 'dilated', 'sudden cardiac death'] }
});

/* ---------------- الصدر والتنفّس ---------------- */

DISEASES.push({
  id: 'asthma', group: 'allergy', tier: 'common', emergency: false,
  name: { ar: 'الربو', en: 'Asthma' },
  short: {
    ar: 'التهاب مزمن يجعل الشعب الهوائية شديدة الحساسية، فتتشنّج وتتورّم وتمتلئ مخاطاً عند التعرّض لمهيّج، فيضيق مجرى الهواء نوبةً ثم يتّسع.',
    en: 'A chronic inflammation that leaves the airways over-sensitive; on meeting a trigger they tighten, swell and fill with mucus, so the airway narrows in an attack and then opens again.'
  },
  organs: ['bronchi', 'alveoli', 'lungs', 'muscle-types'],
  aliases: ['الربو'],
  keywords: { ar: ['أزيز', 'صفير الصدر', 'ضيق نفس نوبي', 'حساسية الصدر'], en: ['asthma', 'wheeze', 'bronchospasm', 'inhaler'] }
});

DISEASES.push({
  id: 'pneumonia', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'الالتهاب الرئوي', en: 'Pneumonia' },
  short: {
    ar: 'عدوى تملأ الحويصلات الهوائية بالسائل والقيح بدل الهواء، فيقلّ ما يلتقطه الدم من أكسجين في المنطقة المصابة.',
    en: 'An infection fills the air sacs with fluid and pus instead of air, so the blood picks up less oxygen from the affected area.'
  },
  organs: ['alveoli', 'lungs', 'bronchi', 'immunity'],
  aliases: ['الالتهاب الرئوي'],
  keywords: { ar: ['ذات الرئة', 'التهاب الرئة', 'سعال مع بلغم وحمى'], en: ['pneumonia', 'chest infection', 'lung infection'] }
});

DISEASES.push({
  id: 'copd', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'الانسداد الرئوي المزمن', en: 'Chronic obstructive pulmonary disease (COPD)' },
  short: {
    ar: 'ضيق دائم في مجرى الهواء يتفاقم ببطء، سببه غالباً سنوات من التدخين أتلفت جدران الشعب والحويصلات إتلافاً لا يُردّ.',
    en: 'A permanent narrowing of the airways that worsens slowly, usually caused by years of smoking that damaged the walls of the bronchi and air sacs beyond repair.'
  },
  organs: ['bronchi', 'alveoli', 'lungs', 'heart'],
  aliases: ['الانسداد الرئوي المزمن', 'النُّفاخ الرئوي'],
  keywords: { ar: ['نفاخ رئوي', 'التهاب قصبات مزمن', 'سعال المدخّن'], en: ['COPD', 'emphysema', 'chronic bronchitis', 'smoker cough'] }
});

DISEASES.push({
  id: 'tb', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'السلّ الرئوي (الدرن)', en: 'Pulmonary tuberculosis' },
  short: {
    ar: 'عدوى بكتيرية بطيئة تستقرّ في الرئة غالباً وقد تبقى كامنة سنوات بلا أعراض، ثم تنشط فتُحدث سعالاً طويلاً ونقص وزن وحمّى مسائية.',
    en: 'A slow bacterial infection that usually settles in the lung and can lie dormant for years without symptoms, then reactivates to cause a long cough, weight loss and evening fever.'
  },
  organs: ['lungs', 'alveoli', 'lymph-node', 'lymphatic', 'immunity'],
  aliases: ['السل اللمفي'],
  keywords: { ar: ['التدرّن', 'سعال أكثر من ثلاثة أسابيع', 'نفث الدم'], en: ['tuberculosis', 'TB', 'chronic cough', 'haemoptysis'] }
});

DISEASES.push({
  id: 'pe', group: 'chest', tier: 'common', emergency: true,
  name: { ar: 'الانصمام الرئوي', en: 'Pulmonary embolism' },
  short: {
    ar: 'جلطة انفصلت غالباً من وريد عميق في الساق وسافرت مع الدم حتى سدّت شرياناً في الرئة، فحُرم جزء من الرئة من الدم فجأة.',
    en: 'A clot, usually broken loose from a deep vein in the leg, travels with the blood until it plugs an artery in the lung, suddenly cutting the blood supply to part of it.'
  },
  organs: ['lungs', 'alveoli', 'clotting', 'heart', 'circulation', 'vessel-types'],
  aliases: ['الانصمام الرئوي'],
  keywords: { ar: ['جلطة الرئة', 'صمّة رئوية', 'ضيق نفس مفاجئ'], en: ['pulmonary embolism', 'PE', 'lung clot'] }
});

DISEASES.push({
  id: 'pneumothorax', group: 'chest', tier: 'rare', emergency: true,
  name: { ar: 'استرواح الصدر', en: 'Pneumothorax (collapsed lung)' },
  short: {
    ar: 'دخول هواء إلى الحيّز بين الرئة وجدار الصدر يُفقد الرئة تمدّدها فتنكمش جزئياً أو كلياً، ويأتي الألم وضيق النفس فجأة.',
    en: 'Air enters the space between the lung and the chest wall, so the lung loses its expansion and collapses partly or wholly, with sudden pain and breathlessness.'
  },
  organs: ['lungs', 'serous-membranes', 'alveoli', 'rib-cage'],
  aliases: ['استرواح الصدر'],
  keywords: { ar: ['انكماش الرئة', 'هواء حول الرئة', 'ألم صدر مفاجئ'], en: ['pneumothorax', 'collapsed lung', 'tension pneumothorax'] }
});

DISEASES.push({
  id: 'sinusitis', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'التهاب الجيوب الأنفية', en: 'Sinusitis' },
  short: {
    ar: 'التهاب وانسداد في تجاويف الجيوب حول الأنف يحبس المخاط داخلها، فيأتي ضغط في الوجه وانسداد أنف يطول أكثر من الزكام العادي.',
    en: 'Inflammation and blockage of the sinus cavities around the nose trap mucus inside them, giving facial pressure and a blocked nose that outlasts an ordinary cold.'
  },
  organs: ['sinuses', 'nose', 'skull', 'pharynx'],
  aliases: ['التهاب الجيوب الأنفية', 'التهاب الجيوب الحاد', 'التهاب الجيوب المزمن'],
  keywords: { ar: ['جيوب', 'ضغط في الوجه', 'صداع الجبهة', 'تنقيط خلفي'], en: ['sinusitis', 'sinus infection', 'facial pressure', 'post-nasal drip'] }
});

/* ---------------- الدم ---------------- */

DISEASES.push({
  id: 'iron-anemia', group: 'blood', tier: 'common', emergency: false,
  name: { ar: 'فقر الدم بنقص الحديد', en: 'Iron deficiency anaemia' },
  short: {
    ar: 'نقص مخزون الحديد يمنع النخاع من صنع هيموغلوبين كافٍ، فتحمل الكريات الحمراء أكسجين أقلّ ويأتي التعب والشحوب وضيق النفس.',
    en: 'Depleted iron stores stop the marrow making enough haemoglobin, so red cells carry less oxygen and tiredness, pallor and breathlessness follow.'
  },
  organs: ['blood', 'bone-inside', 'villi', 'stomach'],
  aliases: ['فقر الدم'],
  keywords: { ar: ['أنيميا', 'نقص الحديد', 'شحوب', 'تعب مزمن'], en: ['anaemia', 'anemia', 'iron deficiency', 'ferritin'] }
});

DISEASES.push({
  id: 'sickle-cell', group: 'blood', tier: 'common', emergency: false,
  name: { ar: 'فقر الدم المنجلي', en: 'Sickle cell disease' },
  short: {
    ar: 'خلل وراثي في الهيموغلوبين يجعل الكرية الحمراء تتشكّل كالمنجل عند نقص الأكسجين، فتعلق في الشعيرات وتسدّها فيأتي ألم النوبة.',
    en: 'An inherited fault in haemoglobin makes the red cell take a sickle shape when oxygen is low, so it snags in the capillaries and blocks them, bringing on a pain crisis.'
  },
  organs: ['blood', 'dna', 'spleen', 'bone-inside', 'vessel-types'],
  aliases: ['فقر الدم المنجلي'],
  keywords: { ar: ['الأنيميا المنجلية', 'نوبة ألم', 'مرض وراثي في الدم'], en: ['sickle cell', 'vaso-occlusive crisis', 'haemoglobin S'] }
});

DISEASES.push({
  id: 'hemophilia', group: 'blood', tier: 'rare', emergency: false,
  name: { ar: 'الهيموفيليا (الناعور)', en: 'Haemophilia' },
  short: {
    ar: 'نقص وراثي في أحد عوامل التخثّر يجعل الدم يتوقّف عن النزف ببطء شديد، فيطول نزف الجرح البسيط وتنزف المفاصل من تلقاء نفسها.',
    en: 'An inherited lack of one clotting factor makes bleeding stop very slowly, so a small wound bleeds on and joints bleed of their own accord.'
  },
  organs: ['clotting', 'blood', 'dna', 'knee'],
  aliases: ['الهيموفيليا', 'الهيموفيليا (الناعور)'],
  keywords: { ar: ['الناعور', 'نزف المفاصل', 'عامل التخثر الثامن'], en: ['haemophilia', 'hemophilia', 'factor VIII', 'joint bleed'] }
});


DISEASES.push({
  id: 'dvt', group: 'blood', tier: 'common', emergency: true,
  name: { ar: 'الخثار الوريدي العميق', en: 'Deep vein thrombosis' },
  short: {
    ar: 'جلطة تتكوّن في وريد عميق داخل الساق غالباً بعد سكون طويل، فتتورّم الساق وتؤلم، وخطرها الأكبر أن تنفصل وتسافر إلى الرئة.',
    en: 'A clot forms in a deep vein, usually in the leg, after a long period of stillness; the leg swells and aches, and the greater danger is that it breaks off and travels to the lung.'
  },
  organs: ['vessels', 'vessel-types', 'clotting', 'blood', 'circulation', 'lungs'],
  aliases: ['الخثار الوريدي العميق والانصمام الرئوي', 'الجلطة الوريدية العميقة', 'الجلطة الوريدية'],
  keywords: { ar: ['جلطة الساق', 'تورم ساق واحدة', 'جلطة السفر'], en: ['DVT', 'deep vein thrombosis', 'leg clot', 'traveller thrombosis'] }
});

DISEASES.push({
  id: 'immunodeficiency', group: 'blood', tier: 'rare', emergency: false,
  name: { ar: 'نقص المناعة', en: 'Immunodeficiency' },
  short: {
    ar: 'ضعف في جهاز المناعة — وراثي أو مكتسب — يجعل العدوى تتكرّر وتطول وتأتي أحياناً من جراثيم لا تصيب صاحب المناعة السليمة.',
    en: 'A weakness of the immune system, inherited or acquired, that makes infections recur, drag on, and sometimes come from germs that never trouble a healthy person.'
  },
  organs: ['immunity', 'blood', 'lymphatic', 'lymph-node', 'thymus', 'bone-inside'],
  aliases: ['نقص المناعة'],
  keywords: { ar: ['ضعف المناعة', 'عدوى متكررة', 'مناعة مكتسبة'], en: ['immunodeficiency', 'immunocompromised', 'recurrent infection'] }
});

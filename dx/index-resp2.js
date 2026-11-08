/* ============================================================
   موسوعة الأمراض — فهرس الصدر والتنفّس والحنجرة والأنف (الموجة الثانية)
   dx/index-resp2.js
   ------------------------------------------------------------
   ما بقي من باب النفس بعد الربو والالتهاب الرئوي والانسداد المزمن:
   أمراض النسيج الرئوي، وما يجمع الماء والصديد حول الرئة وفيها،
   وشكاوى الصوت والحنجرة، وأمراض الأنف التي تسرق الشمّ والنوم.
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-resp2.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- نسيج الرئة ---------------- */

DISEASES.push({
  id: 'pulmonary-fibrosis', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'التليّف الرئوي وأمراض النسيج الخلالي', en: 'Pulmonary fibrosis and interstitial lung disease' },
  short: {
    ar: 'النسيج الرقيق بين الحويصلات يتصلّب ويثخن كأنه ندبة، فتفقد الرئة ليونتها ويصعب على الأكسجين أن يعبر منها إلى الدم، فيأتي ضيق نفس يزحف على صاحبه شهراً بعد شهر.',
    en: 'The delicate tissue between the air sacs thickens and scars, so the lung loses its softness and oxygen struggles to cross into the blood, bringing breathlessness that creeps up month after month.'
  },
  organs: ['alveoli', 'lungs', 'bronchi', 'immunity'],
  aliases: ['التليّف الرئوي'],
  keywords: { ar: ['تليف الرئة', 'ضيق نفس مزمن', 'سعال جاف مزمن'], en: ['pulmonary fibrosis', 'ILD', 'IPF'] }
});

DISEASES.push({
  id: 'sarcoidosis', group: 'chest', tier: 'rare', emergency: false,
  name: { ar: 'الساركويد (الغرناوية)', en: 'Sarcoidosis' },
  short: {
    ar: 'مرض مناعي غامض يجمع خلايا الالتهاب في عُقيدات صغيرة داخل الرئة والعقد اللمفاوية وأحياناً العين والجلد، وكثير من حالاته يهدأ وحده بلا علاج.',
    en: 'A puzzling immune disease that gathers inflammatory cells into small nodules in the lungs, lymph nodes and sometimes the eyes and skin; many cases settle on their own without treatment.'
  },
  organs: ['lungs', 'lymph-node', 'lymphatic', 'immunity', 'eye', 'skin'],
  aliases: [],
  keywords: { ar: ['الساركويد', 'الغرناوية', 'عقيدات الرئة المناعية'], en: ['sarcoidosis', 'granuloma', 'hilar lymphadenopathy'] }
});

DISEASES.push({
  id: 'pleural-effusion', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'الانصباب الجنبي (الماء حول الرئة)', en: 'Pleural effusion' },
  short: {
    ar: 'سائل يتجمّع في المسافة الرقيقة بين الرئة وجدار الصدر فيضغط الرئة ويمنعها من التمدّد، فيضيق النفس ويثقل الاضطجاع على جهة واحدة.',
    en: 'Fluid collects in the thin space between the lung and the chest wall, pressing the lung and stopping it expanding, so breathing tightens and lying on one side becomes heavy.'
  },
  organs: ['serous-membranes', 'lungs', 'heart', 'rib-cage'],
  aliases: ['الانصباب الجنبي'],
  keywords: { ar: ['ماء على الرئة', 'سائل حول الرئة', 'بزل الصدر'], en: ['pleural effusion', 'fluid around the lung', 'thoracentesis'] }
});

DISEASES.push({
  id: 'lung-abscess', group: 'chest', tier: 'rare', emergency: false,
  name: { ar: 'خرّاج الرئة', en: 'Lung abscess' },
  short: {
    ar: 'جيب من الصديد يتكوّن داخل نسيج الرئة بعد التهاب لم يُشفَ أو بعد دخول لعاب ملوّث إلى المجرى، فتطول الحمّى ويصير البلغم كريه الرائحة.',
    en: 'A pocket of pus forms inside the lung tissue after an infection that did not clear or after contaminated saliva was drawn in, so fever drags on and the sputum turns foul-smelling.'
  },
  organs: ['lungs', 'alveoli', 'bronchi', 'immunity'],
  aliases: [],
  keywords: { ar: ['خراج الرئة', 'بلغم كريه الرائحة', 'حمى مطوّلة'], en: ['lung abscess', 'cavitating pneumonia', 'foul sputum'] }
});

DISEASES.push({
  id: 'aspiration-pneumonia', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'الالتهاب الرئوي الاستنشاقي', en: 'Aspiration pneumonia' },
  short: {
    ar: 'طعام أو لعاب أو محتوى معدة ينزل خطأً إلى القصبة بدل المريء فيلتهب ما تحته من رئة، وأكثر من يصيبه كبير سنّ أو مريض بلع أو من ضعف وعيه.',
    en: 'Food, saliva or stomach contents go down the airway instead of the gullet and inflame the lung beneath; it strikes mostly the elderly, people with swallowing trouble and those whose consciousness is reduced.'
  },
  organs: ['lungs', 'alveoli', 'pharynx', 'esophagus', 'bronchi'],
  aliases: [],
  keywords: { ar: ['شفط الطعام للرئة', 'التهاب رئوي بعد شرقة', 'صعوبة البلع وكبار السن'], en: ['aspiration pneumonia', 'aspiration', 'dysphagia'] }
});

DISEASES.push({
  id: 'cystic-fibrosis', group: 'chest', tier: 'rare', emergency: false,
  name: { ar: 'التليّف الكيسي', en: 'Cystic fibrosis' },
  short: {
    ar: 'خلل وراثي يجعل الإفرازات في الجسم لزجة كالصمغ بدل أن تكون سائلة، فتسدّ الشعب الهوائية وقنوات البنكرياس، فتتكرّر التهابات الصدر ويضعف هضم الطعام منذ الطفولة.',
    en: 'An inherited fault makes the body\'s secretions gluey instead of watery, blocking the airways and the pancreatic ducts, so chest infections recur and food is poorly digested from childhood.'
  },
  organs: ['bronchi', 'lungs', 'pancreas', 'dna', 'small-intestine'],
  aliases: [],
  keywords: { ar: ['التليف الكيسي', 'مرض وراثي في الرئة', 'ملوحة عرق الطفل'], en: ['cystic fibrosis', 'CF', 'sweat chloride test'] }
});

DISEASES.push({
  id: 'pulmonary-hypertension', group: 'chest', tier: 'rare', emergency: false,
  name: { ar: 'ارتفاع ضغط الشريان الرئوي', en: 'Pulmonary hypertension' },
  short: {
    ar: 'الضغط داخل الشرايين التي تحمل الدم من القلب إلى الرئة يرتفع، فيُجهد الجانب الأيمن من القلب حتى يضعف، فيأتي ضيق نفس مع أقلّ مجهود وتورّم في الساقين.',
    en: 'Pressure rises inside the arteries carrying blood from the heart to the lungs, straining the right side of the heart until it weakens, bringing breathlessness on the least effort and swollen legs.'
  },
  organs: ['lungs', 'heart', 'vessel-types', 'circulation', 'alveoli'],
  aliases: [],
  keywords: { ar: ['ضغط الرئة المرتفع', 'قصور القلب الأيمن', 'ضيق نفس مع تورم الساقين'], en: ['pulmonary hypertension', 'right heart failure', 'cor pulmonale'] }
});

DISEASES.push({
  id: 'occupational-lung', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'أمراض الرئة المهنية (الغبار والربو المهني)', en: 'Occupational lung disease (dust and work-related asthma)' },
  short: {
    ar: 'ما يستنشقه الإنسان في عمله سنوات — غبار السيليكا أو الأسبستوس أو أبخرة الدهان والمنظّفات — يترك في رئته أثراً دائماً أو يوقظ ربواً يبدأ في أيام الدوام ويهدأ في الإجازة.',
    en: 'What a person breathes at work for years — silica or asbestos dust, paint or cleaning fumes — leaves a permanent mark on the lung or wakes an asthma that starts on working days and settles on holiday.'
  },
  organs: ['alveoli', 'lungs', 'bronchi', 'immunity'],
  aliases: [],
  keywords: { ar: ['غبار السيليكا', 'الأسبستوس', 'ربو مهني', 'أمراض الرئة المهنية'], en: ['occupational asthma', 'silicosis', 'asbestosis', 'pneumoconiosis'] }
});

/* ---------------- شكاوى النفس والصدر ---------------- */

DISEASES.push({
  id: 'chronic-cough', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'السعال المزمن', en: 'Chronic cough' },
  short: {
    ar: 'سعال يستمرّ أكثر من ثمانية أسابيع بعد أن يكون صاحبه قد تعافى من كل ما عداه، وخلفه في أغلب الحالات ثلاثة أسباب معروفة يمكن علاجها لا ورم مخيف.',
    en: 'A cough that lasts more than eight weeks after everything else has healed; behind it in most cases lie three well-known and treatable causes, not a frightening tumour.'
  },
  organs: ['bronchi', 'larynx', 'pharynx', 'esophagus', 'lungs', 'sinuses'],
  aliases: [],
  keywords: { ar: ['سعال مستمر', 'كحة مزمنة', 'سعال بعد الزكام'], en: ['chronic cough', 'persistent cough', 'upper airway cough syndrome'] }
});

DISEASES.push({
  id: 'hemoptysis', group: 'chest', tier: 'common', emergency: true,
  name: { ar: 'نفث الدم (خروج دم مع السعال)', en: 'Haemoptysis (coughing up blood)' },
  short: {
    ar: 'دم يخرج مع السعال من مجرى التنفّس نفسه لا من الأنف ولا من المعدة. أكثر أسبابه بسيط، لكنه علامة لا تُهمل أبداً ولا تُنسب للتعب حتى يُعرف مصدرها.',
    en: 'Blood coughed up from the airway itself, not from the nose or the stomach. Most causes are simple, but it is a sign that must never be ignored or blamed on tiredness until its source is known.'
  },
  organs: ['lungs', 'bronchi', 'alveoli', 'blood', 'clotting'],
  aliases: [],
  keywords: { ar: ['دم مع السعال', 'بصاق مدمّى', 'نفث الدم'], en: ['haemoptysis', 'coughing blood', 'blood in sputum'] }
});

DISEASES.push({
  id: 'costochondritis', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'التهاب الغضروف الضلعي (ألم جدار الصدر)', en: 'Costochondritis (chest wall pain)' },
  short: {
    ar: 'التهاب في الغضاريف التي تصل الأضلاع بعظم القصّ، يعطي ألماً حادّاً في مقدّمة الصدر يزيد بالضغط بالإصبع وبالنفس العميق — وهو من أكثر ما يُخاف منه ظنّاً أنه القلب.',
    en: 'Inflammation of the cartilages joining the ribs to the breastbone, giving a sharp pain at the front of the chest that worsens on pressing with a finger and on deep breathing — one of the most feared pains, mistaken for the heart.'
  },
  organs: ['rib-cage', 'skeleton', 'muscles', 'heart'],
  aliases: ['التهاب الغضروف الضلعي'],
  keywords: { ar: ['ألم جدار الصدر', 'ألم الأضلاع', 'ألم صدر عند الضغط'], en: ['costochondritis', 'chest wall pain', 'Tietze syndrome'] }
});

DISEASES.push({
  id: 'hyperventilation', group: 'chest', tier: 'common', emergency: false,
  name: { ar: 'فرط التهوية ونوبة ضيق النفس', en: 'Hyperventilation and breathing attacks' },
  short: {
    ar: 'تنفّس أسرع وأعمق مما يحتاجه الجسم فعلاً، فيهبط ثاني أكسيد الكربون في الدم وتظهر أعراض مخيفة: تنميل حول الفم والأصابع ودوخة وضيق صدر — وكلها تزول حين يهدأ النفس.',
    en: 'Breathing faster and deeper than the body actually needs drops the carbon dioxide in the blood and brings frightening symptoms: tingling around the mouth and fingers, dizziness and chest tightness — all of which fade when breathing calms.'
  },
  organs: ['lungs', 'alveoli', 'blood', 'brain', 'autonomic'],
  aliases: [],
  keywords: { ar: ['فرط التنفس', 'نوبة ضيق نفس', 'تنميل الأصابع مع القلق'], en: ['hyperventilation', 'breathing pattern disorder', 'dysfunctional breathing'] }
});

/* ---------------- الحنجرة والصوت ---------------- */

DISEASES.push({
  id: 'laryngitis', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'التهاب الحنجرة وبحّة الصوت', en: 'Laryngitis and hoarseness' },
  short: {
    ar: 'التهاب أو تورّم يصيب الحبال الصوتية فتثقل حركتها ويخرج الصوت أجشّ أو مبحوحاً أو ينقطع تماماً. أكثره فيروسي عابر، لكن بحّة تجاوزت ثلاثة أسابيع قصة أخرى.',
    en: 'Inflammation or swelling of the vocal folds makes them move heavily, so the voice comes out rough, hoarse or disappears altogether. Most cases are a passing viral one, but hoarseness beyond three weeks is another story.'
  },
  organs: ['larynx', 'vocal-folds', 'pharynx'],
  aliases: ['بحة الصوت'],
  keywords: { ar: ['بحّة', 'خشونة الصوت', 'فقدان الصوت', 'التهاب الحنجرة'], en: ['laryngitis', 'hoarseness', 'voice loss'] }
});

DISEASES.push({
  id: 'vocal-nodules', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'عقيدات الحبال الصوتية', en: 'Vocal cord nodules' },
  short: {
    ar: 'نتوءان صغيران متقابلان يتكوّنان على حافّتَي الحبلين الصوتيين من كثرة الصياح أو الكلام الحادّ، فيمنعان الحبلين من الانطباق فيصير الصوت مبحوحاً ويتعب بسرعة.',
    en: 'Two small facing bumps form on the edges of the vocal folds from shouting or straining the voice, keeping the folds from closing fully, so the voice turns hoarse and tires quickly.'
  },
  organs: ['vocal-folds', 'larynx'],
  aliases: ['العقيدات الصوتية'],
  keywords: { ar: ['عقد الحبال الصوتية', 'بحة المعلمين', 'إجهاد الصوت'], en: ['vocal nodules', 'singer\'s nodules', 'voice strain'] }
});

DISEASES.push({
  id: 'vocal-cord-paralysis', group: 'head', tier: 'rare', emergency: false,
  name: { ar: 'شلل الحبل الصوتي', en: 'Vocal cord paralysis' },
  short: {
    ar: 'العصب الذي يحرّك أحد الحبلين الصوتيين يتأذّى فيقف الحبل ساكناً، فيصير الصوت هوائياً ضعيفاً ويشرق الماء بصاحبه — وأشيع أسبابه جراحة في الرقبة أو ورم يضغط العصب في مساره الطويل.',
    en: 'The nerve moving one vocal fold is injured and the fold stops still, so the voice becomes breathy and weak and water goes down the wrong way — most often after neck surgery or from a tumour pressing the nerve along its long course.'
  },
  organs: ['vocal-folds', 'larynx', 'cranial-nerves', 'thyroid'],
  aliases: ['شلل الحبل الصوتي'],
  keywords: { ar: ['شلل الحبال الصوتية', 'صوت هوائي ضعيف', 'شرقة بالماء'], en: ['vocal cord paralysis', 'recurrent laryngeal nerve', 'breathy voice'] }
});

DISEASES.push({
  id: 'epiglottitis', group: 'head', tier: 'rare', emergency: true,
  name: { ar: 'التهاب لسان المزمار', en: 'Epiglottitis' },
  short: {
    ar: 'التهاب سريع يورّم لسان المزمار — الغطاء الذي يقفل مدخل الحنجرة عند البلع — حتى يسدّ مجرى الهواء خلال ساعات. حالة إسعافية قصوى لا يُفحص فيها الحلق ولا يُضجَع المريض.',
    en: 'A rapid inflammation swells the epiglottis — the flap that closes the entrance to the voice box when swallowing — until it blocks the airway within hours. A supreme emergency in which the throat must not be examined and the patient must not be laid flat.'
  },
  organs: ['larynx', 'pharynx', 'vocal-folds', 'immunity'],
  aliases: [],
  keywords: { ar: ['التهاب لسان المزمار', 'انسداد مجرى الهواء', 'سيلان اللعاب ورفض البلع'], en: ['epiglottitis', 'airway obstruction', 'drooling and stridor'] }
});

DISEASES.push({
  id: 'peritonsillar-abscess', group: 'head', tier: 'common', emergency: true,
  name: { ar: 'خرّاج ما حول اللوزة (الذبحة الخانقة)', en: 'Peritonsillar abscess (quinsy)' },
  short: {
    ar: 'صديد يتجمّع في المسافة خلف إحدى اللوزتين بعد التهاب لم يُشفَ، فيدفعها إلى المنتصف ويصير الألم في جهة واحدة ويعجز المريض عن فتح فمه وابتلاع ريقه.',
    en: 'Pus gathers in the space behind one tonsil after an infection that did not clear, pushing it toward the middle; the pain settles on one side and the patient cannot open the mouth or swallow saliva.'
  },
  organs: ['pharynx', 'lymph-node', 'larynx', 'immunity'],
  aliases: [],
  keywords: { ar: ['خراج اللوزة', 'ألم حلق في جهة واحدة', 'صعوبة فتح الفم'], en: ['peritonsillar abscess', 'quinsy', 'trismus'] }
});

/* ---------------- الأنف والشمّ ---------------- */

DISEASES.push({
  id: 'nasal-polyps', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'السلائل الأنفية (لحميات الأنف)', en: 'Nasal polyps' },
  short: {
    ar: 'كتل طرية شفّافة تنمو من بطانة الأنف والجيوب بعد التهاب طويل، فتسدّ الأنف سدّاً لا يفتحه شيء وتسرق حاسة الشمّ تدريجياً حتى يفقدها صاحبها بلا أن ينتبه.',
    en: 'Soft translucent swellings grow from the lining of the nose and sinuses after long inflammation, blocking the nose in a way nothing opens and gradually stealing the sense of smell until it is gone unnoticed.'
  },
  organs: ['nose', 'sinuses', 'immunity', 'bronchi'],
  aliases: ['السلائل الأنفية'],
  keywords: { ar: ['لحمية الأنف', 'زوائد الأنف', 'انسداد أنف دائم مع فقد الشم'], en: ['nasal polyps', 'polyposis', 'blocked nose and smell loss'] }
});

DISEASES.push({
  id: 'fungal-sinusitis', group: 'head', tier: 'rare', emergency: true,
  name: { ar: 'التهاب الجيوب الفطري', en: 'Fungal sinusitis' },
  short: {
    ar: 'فطر يستوطن الجيوب الأنفية. صورته الشائعة مزمنة مزعجة لا تُميت، لكن صورته الغازية عند السكّري وضعيف المناعة تأكل النسيج خلال أيام وهي حالة إسعافية.',
    en: 'A fungus that settles in the sinuses. Its common form is a chronic nuisance that does not kill, but its invasive form in people with diabetes or weak immunity eats through tissue within days and is an emergency.'
  },
  organs: ['sinuses', 'nose', 'skull', 'immunity', 'eye', 'brain'],
  aliases: ['التهاب الجيوب الفطري'],
  keywords: { ar: ['فطريات الجيوب', 'الفطر الأسود', 'كرة فطرية في الجيب'], en: ['fungal sinusitis', 'mucormycosis', 'fungal ball', 'allergic fungal rhinosinusitis'] }
});

DISEASES.push({
  id: 'nonallergic-rhinitis', group: 'head', tier: 'common', emergency: false,
  name: { ar: 'التهاب الأنف غير التحسّسي', en: 'Non-allergic rhinitis' },
  short: {
    ar: 'أنف يسيل ويُسدّ طوال السنة من هواء بارد أو مكيّف أو رائحة عطر أو طعام حارّ، بلا أي حساسية في التحاليل، ولا تنفع فيه أدوية الحساسية المعتادة.',
    en: 'A nose that runs and blocks all year round from cold or conditioned air, a perfume or a spicy meal, with no allergy at all on testing, and on which the usual allergy medicines have no effect.'
  },
  organs: ['nose', 'sinuses', 'autonomic', 'pharynx'],
  aliases: [],
  keywords: { ar: ['أنف يسيل بلا حساسية', 'الأنف الحركي الوعائي', 'إدمان بخاخ الأنف'], en: ['non-allergic rhinitis', 'vasomotor rhinitis', 'rhinitis medicamentosa'] }
});

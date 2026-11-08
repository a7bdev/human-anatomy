/* ============================================================
   موسوعة الأدوية — فهرس دفعة التخدير الأولى
   rx/index-anaes1.js   (يُحمَّل دائماً — خفيف)
   مخدّرات عامة وموضعية ومرخيات عضلات وأدوية غرفة العمليات.
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'ketamine',
  cls: 'iv-anesthetic',
  otc: false,
  alert: true,
  name:  { ar: 'الكيتامين', en: 'Ketamine' },
  short: {
    ar: 'مخدّر عام «انفصالي» يُعطى في المستشفى، يسكّن الألم بقوة ويحفظ التنفّس غالباً. مادة خاضعة للرقابة لأنه يُساء استعماله، وسوء استعماله يؤذي المثانة.',
    en: 'A “dissociative” general anaesthetic given in hospital that relieves pain strongly and usually preserves breathing. A controlled substance because it is misused, and misuse damages the bladder.'
  },
  brands: ['كيتالار'],
  uses: ['fractures', 'shoulder-dislocation', 'depression', 'epilepsy'],
  keywords: { ar: ['كيتامين', 'مخدر عام', 'تخدير', 'تهدئة', 'مخدر انفصالي'], en: ['Ketalar', 'dissociative anaesthetic', 'NMDA antagonist', 'procedural sedation', 'esketamine'] }
});

DRUGS.push({
  id: 'propofol',
  cls: 'iv-anesthetic',
  otc: false,
  alert: true,
  name:  { ar: 'البروبوفول', en: 'Propofol' },
  short: {
    ar: 'مخدّر وريدي أبيض يُستعمل لبدء التخدير العام والمحافظة عليه، وللتهدئة أثناء الإجراءات الطبية وفي العناية المركّزة. يخفض الضغط ويبطئ التنفّس، فلا يُعطى إلا بيد فريق مؤهّل ومراقبة كاملة.',
    en: 'A white intravenous anaesthetic used to start and maintain general anaesthesia, and for sedation during medical procedures and in intensive care. It lowers blood pressure and slows breathing, so it is given only by a qualified team under full monitoring.'
  },
  brands: ['ديبريفان', 'فريسوفول', 'بروبوفول ليبورو'],
  uses: ['fractures', 'shoulder-dislocation', 'epilepsy'],
  keywords: { ar: ['بروبوفول', 'مخدر عام', 'تخدير وريدي', 'تهدئة', 'منظار'], en: ['Diprivan', 'Fresofol', 'intravenous anaesthetic', 'sedation', 'induction agent'] }
});

DRUGS.push({
  id: 'bupivacaine',
  cls: 'local-anesthetic',
  otc: false,
  alert: true,
  name:  { ar: 'البوبيفاكايين', en: 'Bupivacaine' },
  short: {
    ar: 'مخدّر موضعي طويل الأثر للتخدير النصفي وإبرة الظهر في الولادة وتخدير الأعصاب. أشدّ مخدّرات فصيلته أذى على القلب إن وصل الدم بكمية كبيرة.',
    en: 'A long-acting local anaesthetic for spinal anaesthesia, labour epidurals and nerve blocks. The most harmful to the heart in its class if a large amount reaches the bloodstream.'
  },
  brands: ['ماركين', 'ماركين هيفي'],
  uses: ['tooth-decay'],
  keywords: { ar: ['بوبيفاكايين', 'مخدر موضعي', 'تخدير نصفي', 'ابرة الظهر', 'ايبيدورال'], en: ['Marcaine', 'spinal anaesthesia', 'epidural', 'nerve block', 'local anesthetic'] }
});

DRUGS.push({
  id: 'lidocaine',
  cls: 'local-anesthetic',
  otc: false,
  alert: true,
  name:  { ar: 'الليدوكايين', en: 'Lidocaine (Lignocaine)' },
  short: {
    ar: 'أكثر المخدّرات الموضعية استعمالاً: حقن وكريمات ولصقات وبخّاخ، وهو أيضاً دواء لاضطراب نظم القلب البطيني. ممنوع لألم التسنين عند الرضّع.',
    en: 'The most widely used local anaesthetic: injections, creams, patches and sprays, and also a treatment for ventricular heart rhythm problems. Not to be used for teething pain in babies.'
  },
  brands: ['زيلوكايين', 'فيرساتيس'],
  uses: ['postherpetic-neuralgia', 'tooth-decay', 'interstitial-cystitis'],
  keywords: { ar: ['ليدوكايين', 'زيلوكايين', 'مخدر موضعي', 'لصقة', 'بنج موضعي'], en: ['lignocaine', 'Xylocaine', 'local anesthetic', 'lidocaine patch', 'antiarrhythmic'] }
});

DRUGS.push({
  id: 'lidocaine-epinephrine',
  cls: 'local-anesthetic',
  otc: false,
  alert: false,
  name:  { ar: 'الليدوكايين مع الأدرينالين', en: 'Lidocaine + epinephrine (adrenaline)' },
  short: {
    ar: 'حقنة تخدير شائعة في عيادات الأسنان والجراحات الصغيرة: الليدوكايين يخدّر والأدرينالين يطيل الخدر ويقلّل النزف. يحتاط معه مرضى القلب والحسّاسون للسلفيت.',
    en: 'A common anaesthetic injection in dental clinics and minor surgery: lidocaine numbs while adrenaline prolongs the numbness and reduces bleeding. Heart patients and people sensitive to sulfites need caution.'
  },
  brands: ['زيلوكايين مع الأدرينالين', 'ليغنوسبان'],
  uses: ['tooth-decay', 'impacted-wisdom-tooth'],
  keywords: { ar: ['بنج الاسنان', 'ليدوكايين', 'ادرينالين', 'ابينفرين', 'مخدر موضعي'], en: ['Xylocaine with adrenaline', 'dental anaesthetic', 'lignocaine adrenaline', 'epinephrine', 'local anesthetic'] }
});

DRUGS.push({
  id: 'ephedrine',
  cls: 'vasopressor',
  otc: false,
  alert: false,
  name:  { ar: 'الإيفيدرين', en: 'Ephedrine' },
  short: {
    ar: 'منبّه يحاكي الأدرينالين، يُحقن في غرفة العمليات لرفع الضغط حين يهبط بسبب التخدير. كان للربو والتنحيف قديماً وتراجع لأذاه على القلب.',
    en: 'A stimulant that mimics adrenaline, injected in the operating room to raise blood pressure when anaesthesia makes it fall. Once used for asthma and weight loss, it declined because of harm to the heart.'
  },
  brands: [],
  uses: ['hypotension'],
  keywords: { ar: ['ايفيدرين', 'رافع ضغط', 'هبوط الضغط', 'منبه'], en: ['sympathomimetic', 'vasopressor', 'ephedra', 'hypotension'] }
});

DRUGS.push({
  id: 'atropine',
  cls: 'anticholinergic',
  otc: false,
  alert: false,
  name:  { ar: 'الأتروبين', en: 'Atropine' },
  short: {
    ar: 'مضاد كولين من أدوية الإنعاش: يسرّع القلب البطيء وهو ترياق التسمّم بالمبيدات الفسفورية، ويأتي قطرةً توسّع حدقة العين. جرعته الزائدة تسخّن الجسم وتشوّش الوعي.',
    en: 'An anticholinergic resuscitation drug: it speeds a slow heart and is the antidote to organophosphate pesticide poisoning, and comes as eye drops that widen the pupil. Too much heats the body and clouds the mind.'
  },
  brands: ['إيزوبتو أتروبين'],
  uses: ['bradycardia-block', 'poisoning', 'refractive-error', 'uveitis'],
  keywords: { ar: ['اتروبين', 'مضاد كولين', 'قطرة توسيع الحدقة', 'ترياق المبيدات', 'بطء القلب'], en: ['anticholinergic', 'antimuscarinic', 'organophosphate antidote', 'mydriatic', 'bradycardia'] }
});

DRUGS.push({
  id: 'atracurium',
  cls: 'muscle-relaxant',
  otc: false,
  alert: true,
  name:  { ar: 'الأتراكوريوم', en: 'Atracurium' },
  short: {
    ar: 'مرخٍ لعضلات الجسم كلها يُعطى تحت التخدير العام لإدخال أنبوب التنفّس وإجراء العمليات. يتفكّك في الدم دون الكبد والكلى، وقد يسبّب احمرار الجلد بإطلاق الهيستامين.',
    en: 'A relaxant of all body muscles given under general anaesthesia to place a breathing tube and allow surgery. It breaks down in the blood without the liver or kidneys, and may flush the skin by releasing histamine.'
  },
  brands: ['تراكريوم'],
  uses: [],
  keywords: { ar: ['اتراكوريوم', 'مرخي عضلات', 'تخدير عام', 'شلل عضلي مؤقت'], en: ['Tracrium', 'neuromuscular blocker', 'nondepolarizing', 'muscle relaxant', 'intubation'] }
});

DRUGS.push({
  id: 'suxamethonium',
  cls: 'muscle-relaxant',
  otc: false,
  alert: true,
  name:  { ar: 'السكسينيل كولين', en: 'Suxamethonium (Succinylcholine)' },
  short: {
    ar: 'أسرع مرخيات العضلات وأقصرها أثراً، لإدخال أنبوب التنفّس فوراً. قد يطلق الحرارة الخبيثة أو شللاً مطوّلاً عند من لديه استعداد وراثي، فتاريخ العائلة مهمّ.',
    en: 'The fastest and shortest-acting muscle relaxant, used to place a breathing tube at once. It can trigger malignant hyperthermia or prolonged paralysis in people with an inherited tendency, so family history matters.'
  },
  brands: ['سكولين', 'ليسثينون', 'أنكتين'],
  uses: [],
  keywords: { ar: ['سكسينيل كولين', 'سوكساميثونيوم', 'مرخي عضلات', 'الحرارة الخبيثة'], en: ['succinylcholine', 'Anectine', 'Scoline', 'depolarizing neuromuscular blocker', 'malignant hyperthermia'] }
});

DRUGS.push({
  id: 'vecuronium',
  cls: 'muscle-relaxant',
  otc: false,
  alert: true,
  name:  { ar: 'الفيكورونيوم', en: 'Vecuronium' },
  short: {
    ar: 'مرخٍ لعضلات الجسم متوسّط الأثر يُعطى تحت التخدير العام وفي العناية المركّزة. يطول أثره في أمراض الكبد، وله ترياق حديث قد يُضعف حبوب منع الحمل مؤقتاً.',
    en: 'An intermediate-acting body muscle relaxant given under general anaesthesia and in intensive care. Its effect lasts longer in liver disease, and its modern reversal drug can temporarily weaken the contraceptive pill.'
  },
  brands: ['نوركيورون'],
  uses: [],
  keywords: { ar: ['فيكورونيوم', 'مرخي عضلات', 'تخدير عام', 'سوغاماديكس'], en: ['Norcuron', 'neuromuscular blocker', 'nondepolarizing', 'sugammadex', 'intubation'] }
});

/* ============================================================
   موسوعة الأدوية — فهرس دفعة psych2
   rx/index-psych2.js   (يُحمَّل دائماً — خفيف)
   الإقلاع عن التدخين + أدوية العين (الزرق والتشخيص والعدوى)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'nicotine-replacement-therapy',
  cls: 'smoking-cessation',
  otc: true,
  alert: false,
  name:  { ar: 'بدائل النيكوتين', en: 'Nicotine replacement therapy (NRT)' },
  short: {
    ar: 'لصقة أو علكة أو قرص مصّ أو بخّاخ يعطي الجسم نيكوتيناً نظيفاً بلا دخان ولا قطران، فتهدأ أعراض السحب ويسهل الإقلاع. لا يُدخَّن معها إطلاقاً.',
    en: 'A patch, gum, lozenge or spray that gives the body clean nicotine without smoke or tar, so withdrawal settles and quitting becomes easier. Never smoke while using it.'
  },
  brands: ['نيكوريت', 'نيكوتينيل', 'نيكودرم', 'نيكيتين'],
  uses: ['substance-addiction', 'copd'],
  keywords: { ar: ['إقلاع عن التدخين', 'نيكوتين', 'لصقة نيكوتين', 'علكة نيكوتين', 'سجائر', 'أعراض السحب'], en: ['NRT', 'nicotine patch', 'nicotine gum', 'lozenge', 'smoking cessation', 'nicorette'] }
});

DRUGS.push({
  id: 'timolol',
  cls: 'antiglaucoma',
  otc: false,
  alert: true,
  name:  { ar: 'التيمولول (قطرة العين)', en: 'Timolol (ophthalmic)' },
  short: {
    ar: 'قطرة حاصر بيتا تخفض ضغط العين في الزرق بتقليل إنتاج سائلها. تُمتصّ إلى الدم فتؤثّر في القلب والرئة، ولذلك تُمنع في الربو وبطء القلب.',
    en: 'A beta-blocker eye drop that lowers eye pressure in glaucoma by reducing fluid production. It is absorbed into the blood and affects heart and lungs, so it is forbidden in asthma and slow heart rate.'
  },
  brands: ['تيموبتيك', 'تيمولول', 'كوزوبت', 'زالاكوم'],
  uses: ['glaucoma'],
  keywords: { ar: ['زرق', 'جلوكوما', 'ضغط العين', 'قطرة عين', 'حاصر بيتا', 'تيمولول'], en: ['timolol', 'timoptic', 'glaucoma', 'beta-blocker', 'eye drops', 'intraocular pressure'] }
});

DRUGS.push({
  id: 'latanoprost',
  cls: 'antiglaucoma',
  otc: false,
  alert: false,
  name:  { ar: 'اللاتانوبروست', en: 'Latanoprost' },
  short: {
    ar: 'قطرة العلاج الأول للزرق: تفتح مخرج السائل من العين فيهبط ضغطها بقطرة واحدة في اليوم. أشهر ما يُفاجئ صاحبها اسمرار لون القزحية وطول الرموش.',
    en: 'The usual first-line glaucoma drop: it opens the fluid outflow so eye pressure falls with a single drop a day. What most surprises users is browning of the iris and lengthening of the lashes.'
  },
  brands: ['زالاتان', 'لاتانوبروست', 'مونوبروست', 'زالاكوم'],
  uses: ['glaucoma'],
  keywords: { ar: ['زرق', 'جلوكوما', 'ضغط العين', 'بروستاغلاندين', 'لاتانوبروست', 'زالاتان'], en: ['latanoprost', 'xalatan', 'prostaglandin analog', 'glaucoma', 'ocular hypertension'] }
});

DRUGS.push({
  id: 'pilocarpine',
  cls: 'antiglaucoma',
  otc: false,
  alert: false,
  name:  { ar: 'البيلوكاربين', en: 'Pilocarpine' },
  short: {
    ar: 'يضيّق الحدقة فيفتح زاوية تصريف العين، فيُستعمل قطرةً في الزرق ونوبة انسداد الزاوية. وله قرص يزيد اللعاب في جفاف الفم بمتلازمة شوغرن.',
    en: 'It constricts the pupil and opens the eye’s drainage angle, so it is used as a drop in glaucoma and in angle-closure attacks. A tablet form increases saliva in the dry mouth of Sjogren syndrome.'
  },
  brands: ['بيلوكار', 'إيزوبتو كاربين', 'سالاجين', 'فيويتي'],
  uses: ['glaucoma', 'sjogren'],
  keywords: { ar: ['زرق', 'جلوكوما', 'حدقة', 'جفاف الفم', 'شوغرن', 'بيلوكاربين'], en: ['pilocarpine', 'miotic', 'glaucoma', 'dry mouth', 'salagen', 'vuity'] }
});

DRUGS.push({
  id: 'acetazolamide',
  cls: 'carbonic-anhydrase-inhibitor',
  otc: false,
  alert: true,
  name:  { ar: 'الأسيتازولاميد', en: 'Acetazolamide' },
  short: {
    ar: 'قرص يثبّط إنزيم الكربونيك أنهيدراز فيقلّ سائل العين والسائل الدماغي ويزيد إدرار البول. يُستعمل في الزرق وارتفاع ضغط الدماغ وداء المرتفعات.',
    en: 'A tablet that inhibits carbonic anhydrase, so eye fluid and brain fluid fall and urine output rises. It is used in glaucoma, raised intracranial pressure and altitude sickness.'
  },
  brands: ['دياموكس', 'أسيتازولاميد', 'غلوكاميد'],
  uses: ['glaucoma', 'altitude-sickness', 'iih', 'epilepsy'],
  keywords: { ar: ['دياموكس', 'أسيتازولاميد', 'ضغط العين', 'داء المرتفعات', 'مدرّ بول', 'سلفا'], en: ['acetazolamide', 'diamox', 'carbonic anhydrase inhibitor', 'altitude sickness', 'diuretic'] }
});

DRUGS.push({
  id: 'tetracaine',
  cls: 'local-anesthetic',
  otc: false,
  alert: true,
  name:  { ar: 'التتراكايين', en: 'Tetracaine' },
  short: {
    ar: 'مخدّر موضعي للعين يُستعمل داخل العيادة وحدها: يُنيم سطح القرنية دقائق ليقيس الطبيب الضغط أو ينزع جسماً غريباً. تكراره في البيت يثقب القرنية.',
    en: 'A topical eye anaesthetic for clinic use only: it numbs the corneal surface for minutes so the doctor can measure pressure or remove a foreign body. Repeating it at home can perforate the cornea.'
  },
  brands: ['تتراكايين', 'أميثوكايين', 'مينوكسيت'],
  uses: ['eye-foreign-body'],
  keywords: { ar: ['مخدّر موضعي', 'قطرة تخدير', 'تتراكايين', 'قرنية', 'جسم غريب'], en: ['tetracaine', 'amethocaine', 'topical anesthetic', 'cornea', 'tonometry'] }
});

DRUGS.push({
  id: 'tropicamide',
  cls: 'mydriatic',
  otc: false,
  alert: false,
  name:  { ar: 'التروبيكاميد', en: 'Tropicamide' },
  short: {
    ar: 'قطرة توسّع الحدقة ساعات قليلة ليرى الطبيب قاع العين والشبكية. تترك المريض حسّاساً للضوء وضبابيّ النظر القريب، فلا يقود بعدها حتى يزول أثرها.',
    en: 'A drop that widens the pupil for a few hours so the doctor can see the back of the eye and the retina. It leaves the patient light-sensitive with blurred near vision, so no driving until it wears off.'
  },
  brands: ['ميدرياسيل', 'تروبيكاميد', 'ميدرياكيل'],
  uses: ['diabetic-retinopathy', 'cataract', 'retinal-detachment'],
  keywords: { ar: ['توسيع الحدقة', 'فحص قاع العين', 'تروبيكاميد', 'شبكية', 'ميدرياسيل'], en: ['tropicamide', 'mydriacyl', 'mydriatic', 'cycloplegic', 'fundus examination', 'pupil dilation'] }
});

DRUGS.push({
  id: 'fluorescein',
  cls: 'diagnostic-agent',
  otc: false,
  alert: false,
  name:  { ar: 'الفلوريسين', en: 'Fluorescein' },
  short: {
    ar: 'صبغة تشخيصية لا علاج فيها: توضع على العين فتضيء أي خدش أو قرحة في القرنية باللون الأخضر تحت الضوء الأزرق، وتُحقن وريدياً لتصوير أوعية الشبكية.',
    en: 'A diagnostic dye, not a treatment: placed on the eye it lights any corneal scratch or ulcer bright green under blue light, and injected into a vein it maps the retinal vessels.'
  },
  brands: ['فلوريسين', 'فلوريسايت', 'فول-غلو', 'بيوغلو'],
  uses: ['eye-foreign-body', 'dry-eye', 'keratitis', 'diabetic-retinopathy', 'amd', 'retinal-vascular-occlusion'],
  keywords: { ar: ['صبغة', 'فلوريسين', 'تصوير الشبكية', 'خدش القرنية', 'شريط صبغة'], en: ['fluorescein', 'angiography', 'corneal abrasion', 'dye', 'slit lamp', 'ful-glo'] }
});

DRUGS.push({
  id: 'natamycin',
  cls: 'antifungal',
  otc: false,
  alert: false,
  name:  { ar: 'الناتاميسين', en: 'Natamycin' },
  short: {
    ar: 'معلّق قطرة العين الوحيد المعتمد لعلاج التهاب القرنية الفطري وقرحتها. يُبدأ به عند الاشتباه ولا يُترك للصدفة، لأن الفطر يأكل القرنية بسرعة.',
    en: 'The only approved eye-drop suspension for fungal keratitis and its ulcer. It is started on suspicion and not left to chance, because fungus eats through the cornea quickly.'
  },
  brands: ['ناتاسين', 'ناتاميت', 'ناتاميسين'],
  uses: ['keratitis', 'conjunctivitis', 'blepharitis'],
  keywords: { ar: ['فطر العين', 'قرحة القرنية', 'ناتاميسين', 'مضاد فطري', 'قطرة'], en: ['natamycin', 'natacyn', 'fungal keratitis', 'antifungal', 'fusarium', 'polyene'] }
});

DRUGS.push({
  id: 'tetracycline',
  cls: 'antibiotic',
  otc: false,
  alert: false,
  name:  { ar: 'التتراسيكلين', en: 'Tetracycline' },
  short: {
    ar: 'أوّل فصيلة التتراسيكلينات: مضاد حيوي واسع يوقف تكاثر الجراثيم، ويُستعمل في حبّ الشباب وعدوى القرّاد والقمل والحيوان. ممنوع على الحوامل والصغار.',
    en: 'The original tetracycline: a broad-spectrum antibiotic that stops bacteria multiplying, used in acne and in infections spread by ticks, lice and animals. Forbidden in pregnancy and in young children.'
  },
  brands: ['تتراسيكلين', 'أخروميسين', 'تتراسين'],
  uses: ['acne', 'rosacea', 'chlamydia', 'brucellosis', 'cholera'],
  keywords: { ar: ['مضاد حيوي', 'تتراسيكلين', 'حب الشباب', 'قرّاد', 'حساسية الشمس'], en: ['tetracycline', 'antibiotic', 'acne', 'broad spectrum', 'photosensitivity', 'achromycin'] }
});

/* ============================================================
   موسوعة الأدوية — فهرس دفعة سدّ الفجوة (١)
   rx/index-gap-rx1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   الفصائل الجديدة (تُضاف إلى DRUG_CLASSES / DRUG_CLASS_GROUP):
     anticoagulant-doac -> heart · anticonvulsant-gabapentinoid -> neuro
     antidepressant-ssri -> psych · antidepressant-snri -> psych
     cholinesterase-inhibitor -> neuro
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'apixaban',
  cls: 'anticoagulant-doac',
  otc: false,
  alert: true,
  name:  { ar: 'الأبيكسابان', en: 'Apixaban' },
  short: {
    ar: 'مميّع دم فمويّ مباشر يمنع تكوّن الجلطات في الرجفان الأذيني والخثار الوريدي. لا يحتاج تحليل تخثّر دوري كالوارفارين، لكن أخطر ما فيه النزف، ولا يُوقف من تلقاء النفس.',
    en: 'A direct oral blood thinner that prevents clots in atrial fibrillation and venous thrombosis. Unlike warfarin it needs no routine clotting tests, but its main danger is bleeding, and it must not be stopped on your own.'
  },
  brands: ['إليكويس', 'أبيكسابان'],
  uses: ['afib', 'dvt', 'stroke', 'arterial-embolism'],
  keywords: { ar: ['مميّع', 'مضاد تخثّر', 'إليكويس', 'الرجفان الأذيني', 'جلطة'], en: ['anticoagulant', 'doac', 'eliquis', 'blood thinner', 'atrial fibrillation'] }
});

DRUGS.push({
  id: 'rivaroxaban',
  cls: 'anticoagulant-doac',
  otc: false,
  alert: true,
  name:  { ar: 'الريفاروكسابان', en: 'Rivaroxaban' },
  short: {
    ar: 'مميّع دم فمويّ مباشر يقي من الجلطات في الرجفان الأذيني ويعالج خثار الأوردة. بعض أشكاله يلزم أن تؤخذ مع الطعام ليُمتصّ، وأخطر ما فيه النزف، ولا يُوقف من تلقاء النفس.',
    en: 'A direct oral blood thinner that prevents clots in atrial fibrillation and treats venous thrombosis. Some strengths must be taken with food to be absorbed, its main danger is bleeding, and it is not stopped on your own.'
  },
  brands: ['زاريلتو', 'ريفاروكسابان'],
  uses: ['afib', 'dvt', 'stroke', 'arterial-embolism'],
  keywords: { ar: ['مميّع', 'مضاد تخثّر', 'زاريلتو', 'الرجفان الأذيني', 'جلطة'], en: ['anticoagulant', 'doac', 'xarelto', 'blood thinner', 'atrial fibrillation'] }
});

DRUGS.push({
  id: 'pregabalin',
  cls: 'anticonvulsant-gabapentinoid',
  otc: false,
  alert: true,
  name:  { ar: 'البريغابالين', en: 'Pregabalin' },
  short: {
    ar: 'دواء للألم العصبي والقلق المعمّم والصرع، من فصيلة الغابابنتينات. يهدّئ الأعصاب مفرطة النشاط، ويسبّب نعاساً ودواراً، وصار يُساء استعماله فأُخضع لرقابة أشدّ، ولا يُوقف فجأة.',
    en: 'A medicine for nerve pain, generalised anxiety and epilepsy, from the gabapentinoid family. It calms over-active nerves, causes drowsiness and dizziness, has become misused so is now controlled, and must not be stopped suddenly.'
  },
  brands: ['ليريكا', 'بريجابا', 'بريغابالين'],
  uses: ['diabetic-neuropathy', 'postherpetic-neuralgia', 'peripheral-neuropathy', 'fibromyalgia', 'epilepsy', 'gad'],
  keywords: { ar: ['ألم عصبي', 'غابابنتين', 'ليريكا', 'صرع', 'قلق'], en: ['gabapentinoid', 'neuropathic pain', 'lyrica', 'epilepsy', 'anxiety'] }
});

DRUGS.push({
  id: 'gabapentin',
  cls: 'anticonvulsant-gabapentinoid',
  otc: false,
  alert: true,
  name:  { ar: 'الغابابنتين', en: 'Gabapentin' },
  short: {
    ar: 'دواء للألم العصبي والصرع من فصيلة الغابابنتينات، قريب من البريغابالين لكنه أبطأ امتصاصاً. يُبنى مفعوله بالتدرّج، ويسبّب نعاساً ودواراً، ويخضع اليوم لرقابة لخطر إساءة استعماله، ولا يُوقف فجأة.',
    en: 'A medicine for nerve pain and epilepsy from the gabapentinoid family, close to pregabalin but absorbed more slowly. Its effect is built up gradually; it causes drowsiness and dizziness, is now controlled for misuse risk, and must not be stopped suddenly.'
  },
  brands: ['نيورونتين', 'جابتين', 'جابانتين', 'غابابنتين'],
  uses: ['diabetic-neuropathy', 'postherpetic-neuralgia', 'peripheral-neuropathy', 'epilepsy', 'restless-legs', 'trigeminal-neuralgia'],
  keywords: { ar: ['ألم عصبي', 'غابابنتين', 'نيورونتين', 'صرع'], en: ['gabapentinoid', 'neuropathic pain', 'neurontin', 'epilepsy'] }
});

DRUGS.push({
  id: 'sertraline',
  cls: 'antidepressant-ssri',
  otc: false,
  alert: true,
  name:  { ar: 'السيرترالين', en: 'Sertraline' },
  short: {
    ar: 'مضاد اكتئاب من مثبّطات استرداد السيروتونين الانتقائية، من أكثرها استعمالاً في الاكتئاب والقلق واضطراب الوسواس القهري والهلع. يحتاج أسابيع حتى يظهر أثره، ولا يُوقف فجأة، ويُراقب المزاج في أوّله.',
    en: 'An antidepressant of the selective serotonin reuptake inhibitor class, one of the most used, for depression, anxiety, obsessive-compulsive disorder and panic. It needs weeks to take effect, must not be stopped abruptly, and mood is watched early on.'
  },
  brands: ['زولوفت', 'لوسترال', 'سيرترالين'],
  uses: ['depression', 'gad', 'panic-disorder', 'ocd', 'ptsd', 'social-anxiety'],
  keywords: { ar: ['مضاد اكتئاب', 'سيروتونين', 'زولوفت', 'قلق', 'وسواس'], en: ['ssri', 'antidepressant', 'zoloft', 'anxiety', 'ocd'] }
});

DRUGS.push({
  id: 'duloxetine',
  cls: 'antidepressant-snri',
  otc: false,
  alert: true,
  name:  { ar: 'الدولوكستين', en: 'Duloxetine' },
  short: {
    ar: 'مضاد اكتئاب من مثبّطات استرداد السيروتونين والنورأدرينالين، يجمع بين علاج الاكتئاب والقلق وعلاج الألم العصبي، خاصّة الألم السكّري والألم العضلي الليفي. يحتاج أسابيع، ولا يُوقف فجأة، وقد يرفع الضغط.',
    en: 'An antidepressant of the serotonin-noradrenaline reuptake inhibitor class, combining treatment of depression and anxiety with treatment of nerve pain, especially diabetic pain and fibromyalgia. It needs weeks, must not be stopped abruptly, and may raise blood pressure.'
  },
  brands: ['سيمبالتا', 'دولوكستين'],
  uses: ['depression', 'gad', 'diabetic-neuropathy', 'peripheral-neuropathy', 'fibromyalgia'],
  keywords: { ar: ['مضاد اكتئاب', 'ألم عصبي', 'سيمبالتا', 'قلق', 'ألم سكّري'], en: ['snri', 'antidepressant', 'cymbalta', 'neuropathic pain', 'anxiety'] }
});

DRUGS.push({
  id: 'donepezil',
  cls: 'cholinesterase-inhibitor',
  otc: false,
  alert: false,
  name:  { ar: 'الدونيبيزيل', en: 'Donepezil' },
  short: {
    ar: 'دواء لألزهايمر من مثبّطات إنزيم الكولين استيراز، يرفع ناقلاً عصبياً يخصّ الذاكرة فيبطئ تدهور الأعراض دون أن يشفي المرض. يؤخذ غالباً مساءً، وقد يسبّب غثياناً وأحلاماً مزعجة وبطء نبض.',
    en: 'A medicine for Alzheimer\'s disease of the cholinesterase inhibitor class, which raises a memory-related nerve messenger and so slows the decline of symptoms without curing the disease. It is often taken at night and may cause nausea, vivid dreams and a slow pulse.'
  },
  brands: ['أريسبت', 'دونيبيزيل'],
  uses: ['alzheimers', 'vascular-dementia'],
  keywords: { ar: ['ألزهايمر', 'خرف', 'ذاكرة', 'أريسبت', 'كولين استيراز'], en: ['alzheimer', 'dementia', 'aricept', 'cholinesterase inhibitor', 'memory'] }
});

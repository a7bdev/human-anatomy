/* ============================================================
   موسوعة الأدوية — فهرس دفعة سدّ الفجوة (٢-١)
   rx/index-gap2-rx1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   الفصائل الجديدة هنا: antitussive (allergy) · beta-blocker (heart)
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'esomeprazole',
  cls: 'ppi',
  otc: false,
  alert: false,
  name:  { ar: 'الإيزوميبرازول', en: 'Esomeprazole' },
  short: {
    ar: 'مثبّط لمضخّة البروتون يخفض حمض المعدة خفضاً قوياً، فيُستعمل في الارتجاع وقرحة المعدة وضمن خلطة جرثومة المعدة. يريح الحرقة لكنه يعالج جذر المشكلة لا العرض وحده.',
    en: 'A proton pump inhibitor that strongly lowers stomach acid, used in reflux, peptic ulcer and as part of the H. pylori regimen. It relieves heartburn but treats the root of the problem, not the symptom alone.'
  },
  brands: ['نيكسيوم', 'إيزوميبرازول', 'إيسومب', 'نيكسيام'],
  uses: ['gerd', 'peptic-ulcer', 'h-pylori', 'barretts', 'dyspepsia', 'chronic-gastritis', 'eosinophilic-esophagitis'],
  keywords: { ar: ['مثبط مضخة البروتون', 'حرقة', 'ارتجاع', 'نيكسيوم', 'قرحة'], en: ['ppi', 'nexium', 'reflux', 'heartburn', 'acid'] }
});

DRUGS.push({
  id: 'mesalazine',
  cls: 'aminosalicylate',
  otc: false,
  alert: false,
  name:  { ar: 'الميسالازين', en: 'Mesalazine (Mesalamine)' },
  short: {
    ar: 'مضاد التهاب موضعي للأمعاء من فصيلة الأمينوساليسيلات، حجر الأساس في التهاب القولون التقرّحي وبعض حالات كرون. يعمل داخل جدار الأمعاء نفسه، ويُؤخذ للهدأة والوقاية معاً.',
    en: 'A gut-directed anti-inflammatory of the aminosalicylate family, the cornerstone of ulcerative colitis and some Crohn cases. It works within the bowel wall itself, taken both to induce remission and to maintain it.'
  },
  brands: ['أساكول', 'بنتاسا', 'ساليوفالك', 'ميزافانت', 'ميسالازين'],
  uses: ['ulcerative-colitis', 'crohns'],
  keywords: { ar: ['أمينوساليسيلات', 'التهاب القولون التقرحي', 'كرون', 'أساكول', 'بنتاسا'], en: ['aminosalicylate', '5-asa', 'asacol', 'pentasa', 'colitis'] }
});

DRUGS.push({
  id: 'macrogol',
  cls: 'laxative-osmotic',
  otc: true,
  alert: false,
  name:  { ar: 'الماكروغول', en: 'Macrogol (Polyethylene glycol 3350)' },
  short: {
    ar: 'مليّن تناضحي يسحب الماء إلى داخل الأمعاء فيليّن البراز ويسهّل مروره، لطيف يُستعمل للإمساك وفكّ احتباس البراز. لا يُدمن ولا يُهيّج الأمعاء، ويُذاب في الماء ويُشرب.',
    en: 'An osmotic laxative that draws water into the bowel, softening the stool and easing its passage; gentle, used for constipation and clearing impacted stool. It is not habit-forming, does not irritate the bowel, and is dissolved in water and drunk.'
  },
  brands: ['موفيكول', 'فورلاكس', 'لاكسيدو', 'ميراليكس', 'كليرلاكس'],
  uses: ['chronic-constipation', 'child-constipation', 'ibs'],
  keywords: { ar: ['مليّن', 'تناضحي', 'إمساك', 'موفيكول', 'بولي إيثيلين غلايكول'], en: ['osmotic laxative', 'peg', 'movicol', 'miralax', 'constipation'] }
});

DRUGS.push({
  id: 'dextromethorphan',
  cls: 'antitussive',
  otc: true,
  alert: false,
  name:  { ar: 'الديكستروميثورفان', en: 'Dextromethorphan' },
  short: {
    ar: 'مثبّط للسعال الجافّ يُصرف بلا وصفة، يهدّئ منعكس السعال في الدماغ. يفيد السعال الجافّ المتعب لا السعال المنتج للبلغم، وليس علاجاً للبرد بل يخفّف عرضاً واحداً منه.',
    en: 'An over-the-counter cough suppressant that quiets the cough reflex in the brain. It helps a tiring dry cough, not a productive phlegmy one, and it is not a treatment for a cold but eases one symptom of it.'
  },
  brands: ['توسيفان', 'روبيتوسين DM', 'ديلسيم', 'بلسم', 'كوفريل'],
  uses: ['common-cold', 'acute-bronchitis', 'chronic-cough'],
  keywords: { ar: ['مثبط سعال', 'سعال جاف', 'روبيتوسين', 'DM', 'كحة'], en: ['antitussive', 'cough suppressant', 'robitussin', 'dm', 'delsym'] }
});

DRUGS.push({
  id: 'rosuvastatin',
  cls: 'statin',
  otc: false,
  alert: false,
  name:  { ar: 'الروزوفاستاتين', en: 'Rosuvastatin' },
  short: {
    ar: 'من أقوى الستاتينات في خفض الكوليسترول الضارّ، يُوصف للوقاية من الجلطة القلبية والدماغية ولمن ورث ارتفاع الكوليسترول. يُؤخذ مدى طويلاً مع الحمية، ويحمي الشرايين بهدوء.',
    en: 'One of the most potent statins at lowering harmful cholesterol, prescribed to prevent heart attack and stroke and for inherited high cholesterol. It is taken long term alongside diet, quietly protecting the arteries.'
  },
  brands: ['كريستور', 'روزوفاستاتين', 'روزوليب', 'كريستادور'],
  uses: ['dyslipidemia', 'familial-hypercholesterolemia', 'atherosclerosis', 'metabolic-syndrome', 'angina'],
  keywords: { ar: ['ستاتين', 'كوليسترول', 'دهون', 'كريستور', 'شرايين'], en: ['statin', 'crestor', 'cholesterol', 'lipids', 'ldl'] }
});

DRUGS.push({
  id: 'ticagrelor',
  cls: 'antiplatelet',
  otc: false,
  alert: true,
  name:  { ar: 'التيكاجريلور', en: 'Ticagrelor' },
  short: {
    ar: 'مضاد صفيحات قويّ يمنع الصفائح من التكتّل، يُعطى بعد الجلطة القلبية ورَكب الدعامات مع الأسبرين ليمنع انسداد الشريان من جديد. يرفع خطر النزف، ولا يُوقف من تلقاء النفس.',
    en: 'A potent antiplatelet that stops platelets clumping, given after a heart attack and stent placement together with aspirin to keep the artery from reblocking. It raises bleeding risk and must never be stopped without medical advice.'
  },
  brands: ['بريلينتا', 'بريليك', 'تيكاجريلور'],
  uses: ['mi', 'angina', 'stroke', 'atherosclerosis'],
  keywords: { ar: ['مضاد صفيحات', 'بعد الجلطة', 'دعامة', 'بريلينتا', 'مميع'], en: ['antiplatelet', 'brilinta', 'brilique', 'stent', 'acs'] }
});

DRUGS.push({
  id: 'metoprolol',
  cls: 'beta-blocker',
  otc: false,
  alert: false,
  name:  { ar: 'الميتوبرولول', en: 'Metoprolol' },
  short: {
    ar: 'حاصر بيتا يبطّئ القلب ويخفّف حمله، يُستعمل في الضغط والذبحة وقصور القلب وبعد الجلطة القلبية، وفي الوقاية من الشقيقة والرعاش. لا يُوقف فجأة لأن إيقافه المباغت خطر.',
    en: 'A beta-blocker that slows the heart and eases its workload, used in blood pressure, angina, heart failure and after a heart attack, and to prevent migraine and tremor. It is not stopped abruptly, because sudden withdrawal is dangerous.'
  },
  brands: ['بيتالوك', 'لوبريسور', 'سيلوكين', 'ميتوبرولول'],
  uses: ['hypertension', 'angina', 'heart-failure', 'mi', 'migraine', 'essential-tremor'],
  keywords: { ar: ['حاصر بيتا', 'ضغط', 'خفقان', 'بيتالوك', 'قلب'], en: ['beta-blocker', 'betaloc', 'lopressor', 'hypertension', 'heart'] }
});

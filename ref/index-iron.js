/* ============================================================
   البطاقات المرجعية — فهرس فحوصات الحديد (دفعة iron)
   ref/index-iron.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في ref/ref-iron.js
   ⚠️ محتوى تثقيفي عام لا يقرأ تحليلاً ولا يفسّر نتيجة شخص بعينه.
   ملاحظة: الفيريتين ليس هنا — هو في ref/index-labcore.js عمداً.
   ============================================================ */

REFS.push({
  id: 'serum-iron',
  group: 'lab-iron',
  kind: 'lab',
  name: { ar: 'الحديد في الدم', en: 'Serum iron' },
  unit: 'µg/dL',
  short: {
    ar: 'كمّية الحديد المتنقّلة في المصل محمولةً على بروتين الترانسفيرين لحظة سحب العيّنة. رقمٌ متقلّب بالساعة والوجبة، فلا يُقرأ وحده بل ضمن باقي فحوص الحديد.',
    en: 'The amount of iron travelling in the serum on the transferrin protein at the moment of the draw. It is a volatile number that swings by the hour and the meal, so it is never read alone but within the rest of the iron tests.'
  },
  organs: ['blood', 'small-intestine', 'liver', 'spleen', 'bone-inside'],
  diseases: ['iron-anemia', 'hemochromatosis', 'hemolytic-anemia'],
  aliases: ['حديد المصل', 'الحديد المصلي'],
  keywords: {
    ar: ['حديد الدم', 'الحديد المصلي', 'تحليل الحديد', 'حديد المصل'],
    en: ['serum iron', 'iron level', 'plasma iron']
  }
});

REFS.push({
  id: 'transferrin',
  group: 'lab-iron',
  kind: 'lab',
  name: { ar: 'الترانسفيرين', en: 'Transferrin' },
  unit: 'g/L',
  short: {
    ar: 'البروتين الذي يصنعه الكبد لحمل الحديد في الدم من الأمعاء والطحال إلى حيث يُستعمل. يرتفع حين يشحّ الحديد كأنه يمدّ يداً أطول ليلتقط ما بقي.',
    en: 'The protein the liver makes to carry iron through the blood from the gut and spleen to where it is used. It rises when iron is scarce, as if reaching a longer arm to catch what remains.'
  },
  organs: ['liver', 'blood', 'bone-inside', 'small-intestine', 'spleen'],
  diseases: ['iron-anemia', 'hemochromatosis'],
  aliases: ['ناقل الحديد'],
  keywords: {
    ar: ['الترانسفيرين', 'ناقل الحديد', 'بروتين حمل الحديد'],
    en: ['transferrin', 'siderophilin', 'iron transport protein']
  }
});

REFS.push({
  id: 'tibc',
  group: 'lab-iron',
  kind: 'lab',
  name: { ar: 'السعة الكلية لربط الحديد', en: 'Total iron-binding capacity (TIBC)' },
  unit: 'µg/dL',
  short: {
    ar: 'مقياسٌ غير مباشر لكمّية الترانسفيرين: كم حديداً يستطيع دم العيّنة أن يربطه لو امتلأت كل مواقع الحمل. يرتفع مع نقص الحديد وينخفض مع زيادته أو الالتهاب.',
    en: 'An indirect measure of how much transferrin is present: how much iron the sample blood could bind if every carrier site were filled. It rises with iron deficiency and falls with overload or inflammation.'
  },
  organs: ['liver', 'blood'],
  diseases: ['iron-anemia', 'hemochromatosis'],
  aliases: ['السعة الكلية لربط الحديد', 'TIBC'],
  keywords: {
    ar: ['السعة الكلية لربط الحديد', 'سعة ربط الحديد', 'UIBC'],
    en: ['tibc', 'iron binding capacity', 'uibc']
  }
});

REFS.push({
  id: 'transferrin-saturation',
  group: 'lab-iron',
  kind: 'lab',
  name: { ar: 'نسبة تشبّع الترانسفيرين', en: 'Transferrin saturation (TSAT)' },
  unit: '%',
  short: {
    ar: 'نسبةٌ مئوية تجمع حديد الدم مع سعة الربط في رقم واحد: كم من مقاعد النقل مشغولة بالحديد فعلاً. من أدقّ ما يفرّق نقص الحديد عن زيادته، وأبكر ما يكشف الزيادة.',
    en: 'A percentage that combines serum iron with binding capacity into one figure: how many of the transport seats are actually taken by iron. It is among the sharpest separators of iron deficiency from overload, and the earliest to reveal overload.'
  },
  organs: ['blood', 'liver'],
  diseases: ['hemochromatosis', 'iron-anemia'],
  aliases: ['تشبع الترانسفيرين', 'TSAT'],
  keywords: {
    ar: ['تشبع الترانسفيرين', 'نسبة التشبع', 'تشبّع ناقل الحديد'],
    en: ['transferrin saturation', 'tsat', 'iron saturation']
  }
});

REFS.push({
  id: 'stfr',
  group: 'lab-iron',
  kind: 'lab',
  name: { ar: 'مستقبل الترانسفيرين الذائب', en: 'Soluble transferrin receptor (sTfR)' },
  unit: 'mg/L',
  short: {
    ar: 'مقياسٌ لجوع الخلايا للحديد يأتي من مستقبلاتها نفسها، ولا يرفعه الالتهاب. لذلك يفرّق نقص الحديد الحقيقي عن التهابٍ رفع الفيريتين وأخفى النقص تحته.',
    en: 'A measure of how hungry the cells are for iron, coming from their own receptors, and it is not raised by inflammation. That is why it separates true iron deficiency from an inflammation that lifted ferritin and hid the deficiency beneath it.'
  },
  organs: ['bone-inside', 'blood'],
  diseases: ['iron-anemia', 'thalassemia'],
  aliases: ['مستقبل الترانسفيرين الذائب', 'sTfR'],
  keywords: {
    ar: ['مستقبل الترانسفيرين الذائب', 'مستقبل الترانسفرين', 'sTfR'],
    en: ['soluble transferrin receptor', 'stfr', 'tfr']
  }
});

REFS.push({
  id: 'hepcidin',
  group: 'lab-iron',
  kind: 'lab',
  name: { ar: 'الهبسيدين', en: 'Hepcidin' },
  unit: 'ng/mL',
  short: {
    ar: 'هرمونٌ يفرزه الكبد ليكون صمّام تحكّم الجسم في الحديد: يخفض دخوله من الأمعاء وخروجه من المخازن حين يكفي أو حين يشتعل التهاب، ويتراجع حين ينقص الحديد.',
    en: 'A hormone the liver secretes to be the body control valve over iron: it lowers iron entry from the gut and release from stores when there is enough or when inflammation flares, and it steps back when iron is short.'
  },
  organs: ['liver', 'small-intestine', 'spleen', 'blood'],
  diseases: ['hemochromatosis', 'iron-anemia'],
  aliases: ['الهيبسيدين', 'هرمون الحديد'],
  keywords: {
    ar: ['الهبسيدين', 'الهيبسيدين', 'هرمون تنظيم الحديد'],
    en: ['hepcidin', 'iron regulatory hormone']
  }
});

REFS.push({
  id: 'iron-panel',
  group: 'lab-iron',
  kind: 'lab',
  name: { ar: 'كيف تُقرأ فحوص الحديد معاً', en: 'How the iron tests are read together' },
  short: {
    ar: 'بطاقةٌ جامعة تشرح لماذا لا يُقرأ فحص حديدٍ واحد وحده: كيف يجمع الطبيب الفيريتين وحديد الدم والسعة والتشبّع في صورة واحدة تفرّق نقص الحديد عن التهابٍ يرفع الفيريتين كذباً عن زيادةٍ حقيقية في الحديد.',
    en: 'An integrative card explaining why no single iron test is read on its own: how a doctor combines ferritin, serum iron, capacity and saturation into one picture that separates iron deficiency from an inflammation that falsely lifts ferritin, and from a true iron overload.'
  },
  organs: ['blood', 'liver', 'spleen', 'bone-inside', 'small-intestine'],
  diseases: ['iron-anemia', 'hemochromatosis', 'child-iron-anemia', 'thalassemia'],
  aliases: ['لوحة الحديد', 'قراءة فحوص الحديد', 'صورة الحديد'],
  keywords: {
    ar: ['فحوص الحديد', 'لوحة الحديد', 'قراءة تحليل الحديد', 'صورة الحديد الكاملة'],
    en: ['iron panel', 'iron studies', 'iron profile', 'reading iron tests']
  }
});

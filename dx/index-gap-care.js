/* ============================================================
   موسوعة الأمراض — فهرس بطاقات حسّاسة وإقليمية (سدّ الفجوات)
   dx/index-gap-care.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-gap-care.js
   ثلاث بطاقات تخدم واقعنا المحلّي: أزمة نفسية طارئة، وفحص
   ما قبل الزواج، والصيام في الأمراض المزمنة. الحقول الستة
   تُقرأ كمحتوى تثقيفي داعم لا كتشخيص ولا وصفة علاج.
   ⚠️ محتوى تثقيفي عام. عند خطر مباشر على الحياة اتّصل بالطوارئ
   فوراً (في الإمارات: الإسعاف ٩٩٨ والشرطة ٩٩٩) أو اذهب لأقرب طوارئ.
   ============================================================ */

/* ---------------- الأفكار الانتحارية وإيذاء النفس ---------------- */

DISEASES.push({
  id: 'suicidal-ideation', group: 'mental', tier: 'common', emergency: true,
  name: { ar: 'الأفكار الانتحارية وإيذاء النفس — ماذا تفعل الآن', en: 'Suicidal thoughts and self-harm — what to do now' },
  short: {
    ar: 'حين يفوق الألم النفسيّ طاقة الاحتمال قد تأتي أفكار إيذاء النفس. هذه لحظة تحتاج مساعدة الآن لا لاحقاً. لست وحدك، والألم الذي يبدو أبدياً يتغيّر. تكلّم مع إنسان تثق به واتّصل بالطوارئ إن كنت في خطر.',
    en: 'When mental pain overwhelms what can be borne, thoughts of self-harm may come. This is a moment that needs help now, not later. You are not alone, and pain that seems endless does change. Talk to someone you trust, and call emergency services if you are in danger.'
  },
  organs: ['brain', 'limbic', 'adrenal', 'autonomic', 'cortex-map'],
  aliases: [],
  keywords: { ar: ['الأفكار الانتحارية', 'إيذاء النفس', 'اليأس', 'أزمة نفسية', 'خط الدعم النفسي', 'الانتحار'], en: ['suicidal thoughts', 'self-harm', 'crisis', 'hopelessness', 'mental health crisis', 'help now'] }
});

/* ---------------- فحص ما قبل الزواج والاستشارة الوراثية ---------------- */

DISEASES.push({
  id: 'premarital-screening', group: 'genetic', tier: 'common', emergency: false,
  name: { ar: 'فحص ما قبل الزواج وزواج الأقارب والاستشارة الوراثية', en: 'Premarital screening, consanguinity and genetic counselling' },
  short: {
    ar: 'فحص وقائيّ بسيط قبل الزواج يكشف حاملي أمراض الدم الوراثية كالثلاسيميا وفقر الدم المنجليّ. الحامل غالباً سليم تماماً ولا يكشفه إلا التحليل، والخطر يرتفع في زواج الأقارب. في الإمارات هو إجراء إلزاميّ، وهدفه المعرفة والخيار لا المنع.',
    en: 'A simple preventive test before marriage that finds carriers of inherited blood diseases such as thalassaemia and sickle cell. A carrier is usually perfectly healthy and only a test reveals it, and the risk rises with marriage between relatives. In the UAE it is a mandatory step, and its aim is knowledge and choice, not prohibition.'
  },
  organs: ['dna', 'blood', 'male-reproductive', 'female-reproductive', 'spleen'],
  aliases: [],
  keywords: { ar: ['فحص ما قبل الزواج', 'زواج الأقارب', 'الاستشارة الوراثية', 'الثلاسيميا', 'فقر الدم المنجلي', 'الأمراض الوراثية المتنحية'], en: ['premarital screening', 'consanguinity', 'genetic counselling', 'thalassaemia', 'sickle cell', 'carrier'] }
});

/* ---------------- الصيام في رمضان للأمراض المزمنة ---------------- */

DISEASES.push({
  id: 'ramadan-fasting-chronic', group: 'prevention', tier: 'common', emergency: false,
  name: { ar: 'الصيام في رمضان لمرضى السكّري والضغط والكلى', en: 'Ramadan fasting with diabetes, blood pressure and kidney disease' },
  short: {
    ar: 'الصيام آمن لكثير من مرضى السكّري والضغط والكلى إذا استقرّت حالتهم وتهيّأوا له باستشارة الطبيب، وخطِر على بعضهم. اعرف متى الصيام آمن ومتى تفطر، وعلامات الخطر التي توجب كسر الصيام فوراً. القرار يُبنى على حالتك أنت لا على غيرك.',
    en: 'Fasting is safe for many people with diabetes, high blood pressure or kidney disease if their condition is stable and they prepare with their doctor, yet risky for some. Know when fasting is safe and when to break it, and the warning signs that require breaking the fast at once. The decision rests on your own condition, not on others.'
  },
  organs: ['pancreas', 'kidneys', 'heart', 'liver', 'blood'],
  aliases: [],
  keywords: { ar: ['الصيام', 'رمضان', 'السكري والصيام', 'الضغط والصيام', 'الكلى والصيام', 'هبوط السكر'], en: ['Ramadan fasting', 'fasting diabetes', 'fasting hypertension', 'fasting kidney', 'hypoglycaemia', 'chronic disease'] }
});

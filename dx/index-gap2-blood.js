/* ============================================================
   موسوعة الأمراض — فهرس أمراض الدم (الموجة الثانية، دفعة gap2)
   dx/index-gap2-blood.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-gap2-blood.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

DISEASES.push({
  id: 'von-willebrand-disease', group: 'blood', tier: 'common', emergency: false,
  name: { ar: 'مرض فون ويلبراند', en: 'Von Willebrand disease' },
  short: {
    ar: 'أشيع اضطراب نزف وراثي: نقص أو خلل في عامل يساعد الصفائح على الالتصاق بالجرح، فيطول النزف من الأنف واللثة ومن الجروح، وتغزر الدورة الشهرية عند النساء.',
    en: 'The commonest inherited bleeding disorder: a lack or fault in the factor that helps platelets stick to a wound, so bleeding from the nose, gums and cuts is prolonged and menstrual periods are heavy.'
  },
  organs: ['clotting', 'blood', 'dna', 'vessels'],
  aliases: ['مرض فون ويلبراند'],
  keywords: { ar: ['نزف وراثي', 'غزارة الطمث', 'كدمات سهلة', 'عامل فون ويلبراند'], en: ['von Willebrand', 'VWF', 'bleeding disorder', 'heavy periods'] }
});

DISEASES.push({
  id: 'polycythemia-vera', group: 'blood', tier: 'common', emergency: false,
  name: { ar: 'كثرة الحُمر الحقيقية', en: 'Polycythemia vera' },
  short: {
    ar: 'نخاع العظم يصنع كريات حمراء أكثر من اللازم فيغلظ الدم ويبطؤ جريانه، فتأتي حكة بعد الماء الساخن واحمرار الوجه وصداع، ويرتفع خطر الجلطات.',
    en: 'The bone marrow makes too many red cells so the blood thickens and flows sluggishly, bringing itching after a hot bath, a ruddy face and headache, and a raised risk of clots.'
  },
  organs: ['blood', 'bone-inside', 'spleen', 'clotting', 'vessels', 'circulation'],
  aliases: ['كثرة الحُمر الحقيقية'],
  keywords: { ar: ['كثرة الكريات الحمر', 'غلظ الدم', 'حكة بعد الاستحمام', 'طفرة جاك٢'], en: ['polycythemia vera', 'PV', 'JAK2', 'thick blood'] }
});

DISEASES.push({
  id: 'aplastic-anemia', group: 'blood', tier: 'rare', emergency: false,
  name: { ar: 'فقر الدم اللاتنسجي', en: 'Aplastic anaemia' },
  short: {
    ar: 'يتوقّف نخاع العظم عن صنع خلايا الدم بأنواعها، فيجتمع تعب فقر الدم مع نزف نقص الصفائح مع عدوى متكرّرة بسبب نقص كريات الدفاع.',
    en: 'The bone marrow stops making blood cells of every kind, so the tiredness of anaemia joins the bleeding of low platelets and the recurrent infections of low defence cells.'
  },
  organs: ['bone-inside', 'mitosis', 'blood', 'immunity'],
  aliases: ['فقر الدم اللاتنسجي'],
  keywords: { ar: ['فشل نخاع العظم', 'نقص كل خلايا الدم', 'قلة الكريات الشاملة'], en: ['aplastic anaemia', 'bone marrow failure', 'pancytopenia'] }
});

DISEASES.push({
  id: 'thrombophilia', group: 'blood', tier: 'common', emergency: false,
  name: { ar: 'أهبة التخثّر (الميل للجلطات)', en: 'Thrombophilia' },
  short: {
    ar: 'ميل في الدم للتجلّط أكثر من اللازم، وراثي أو مكتسب، لا يُحسّ به وحده لكنه يظهر بجلطة في الساق أو الرئة أو بإجهاض متكرّر أو جلطة في سنّ صغيرة.',
    en: 'A tendency of the blood to clot more than it should, inherited or acquired; felt as nothing on its own but showing itself as a clot in the leg or lung, recurrent miscarriage, or a clot at a young age.'
  },
  organs: ['clotting', 'blood', 'vessels', 'vessel-types', 'circulation', 'lungs'],
  aliases: ['أهبة التخثّر (الميل للجلطات)'],
  keywords: { ar: ['فرط التخثر', 'الميل للجلطات', 'عامل الخامس لايدن', 'نقص بروتين سي'], en: ['thrombophilia', 'factor V Leiden', 'clotting tendency', 'hypercoagulable'] }
});

DISEASES.push({
  id: 'antiphospholipid-syndrome', group: 'blood', tier: 'common', emergency: false,
  name: { ar: 'متلازمة أضداد الفوسفوليبيد', en: 'Antiphospholipid syndrome' },
  short: {
    ar: 'مرض مناعي ذاتي تتكوّن فيه أضداد تجعل الدم شديد الميل للتجلّط، فتتكرّر الجلطات في الأوردة والشرايين ويتكرّر الإجهاض، وقد تنخفض الصفائح.',
    en: 'An autoimmune disease in which antibodies make the blood highly prone to clotting, so clots recur in veins and arteries, miscarriage recurs, and platelets may fall.'
  },
  organs: ['clotting', 'blood', 'immunity', 'vessels', 'circulation', 'brain'],
  aliases: ['متلازمة أضداد الفوسفوليبيد'],
  keywords: { ar: ['أضداد الشحوم الفسفورية', 'جلطات متكررة', 'إجهاض متكرر', 'مضاد تخثر الذئبة'], en: ['antiphospholipid syndrome', 'APS', 'lupus anticoagulant', 'recurrent miscarriage'] }
});

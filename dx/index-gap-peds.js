/* ============================================================
   موسوعة الأمراض — فهرس دفعة سدّ الفجوات: أمراض الأطفال
   dx/index-gap-peds.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-gap-peds.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

DISEASES.push({
  id: 'child-gastroenteritis', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'النزلة المعوية الحادّة عند الأطفال', en: "Acute gastroenteritis in children" },
  short: {
    ar: 'التهاب فيروسي يصيب المعدة والأمعاء فيسبّب قيئاً ثم إسهالاً مائياً وحرارة خفيفة، وأشهر أسبابه فيروس الروتا والنورو. أكثره يزول وحده، وخطره الحقيقي هو الجفاف الذي يتبعه.',
    en: "A viral inflammation of the stomach and intestines causing vomiting, then watery diarrhoea and a mild fever; the commonest causes are rotavirus and norovirus. Most passes on its own, and its real danger is the dehydration that follows."
  },
  organs: ['small-intestine', 'large-intestine', 'stomach'],
  aliases: [],
  keywords: { ar: ['النشة والاسهال', 'فيروس الروتا', 'الجفاف عند الاطفال', 'اسهال الاطفال'], en: ['gastroenteritis', 'rotavirus', 'norovirus', 'oral rehydration', 'stomach bug'] }
});

DISEASES.push({
  id: 'child-uti', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'التهاب المسالك البولية عند الرضّع والأطفال', en: "Urinary tract infection in infants and children" },
  short: {
    ar: 'عدوى بكتيرية تصعد إلى المثانة أو الكلية. عند الرضيع تختبئ خلف حمّى بلا سبب ظاهر، ولذلك تُطلب عيّنة بول وأحياناً تصوير للجهاز البولي بحثاً عن سبب يجعلها تتكرّر.',
    en: "A bacterial infection ascending to the bladder or kidney. In an infant it hides behind a fever with no obvious source, so a urine sample and sometimes imaging of the urinary tract are needed to look for a cause of recurrence."
  },
  organs: ['bladder', 'kidneys', 'urethra', 'ureter', 'immunity'],
  aliases: [],
  keywords: { ar: ['التهاب البول', 'حمى بلا سبب', 'التهاب الكلية', 'الجزر المثاني', 'التهاب المثانة'], en: ['UTI', 'pyelonephritis', 'fever without source', 'vesicoureteral reflux', 'cystitis'] }
});

DISEASES.push({
  id: 'juvenile-arthritis', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'التهاب المفاصل مجهول السبب اليفعي', en: "Juvenile idiopathic arthritis" },
  short: {
    ar: 'التهاب مناعي يورّم مفاصل الطفل أسابيع أو أشهراً فيتيبّس المفصل صباحاً ويعرج الطفل. مرض مزمن يُدار لا خطأ في التربية، وأخطر مضاعفاته التهاب صامت في العين يجب فحصه دورياً.',
    en: "An autoimmune inflammation that swells a child joints for weeks or months, so the joint is stiff in the morning and the child limps. A chronic condition that is managed, and its gravest complication is a silent inflammation of the eye that must be screened for regularly."
  },
  organs: ['knee', 'tendon-ligament', 'growth-plate', 'eye', 'immunity'],
  aliases: ['روماتويد الأطفال'],
  keywords: { ar: ['روماتويد الاطفال', 'التهاب المفاصل عند الاطفال', 'تيبس المفاصل', 'عرج الطفل', 'التهاب العنبية'], en: ['JIA', 'juvenile arthritis', 'joint stiffness', 'uveitis', 'childhood rheumatoid'] }
});

DISEASES.push({
  id: 'button-battery-ingestion', group: 'child', tier: 'common', emergency: true,
  name: { ar: 'ابتلاع بطارية الزرّ أو المغناطيس عند الأطفال', en: "Button battery or magnet ingestion in children" },
  short: {
    ar: 'بلع الطفل بطارية قرصية أو مغناطيساً، وهي حالة إسعافية تختلف عن الاختناق بجسم غريب: البطارية إن علقت في المريء تحرق جداره خلال ساعتين، والمغناطيسان يتجاذبان عبر جدار الأمعاء فيثقبانه. الوقت هو العلاج.',
    en: "A child swallows a coin-cell battery or a magnet, an emergency different from choking on a foreign body: a battery lodged in the gullet burns its wall within two hours, and two magnets pull together across the bowel wall and pierce it. Time is the treatment."
  },
  organs: ['esophagus', 'stomach', 'small-intestine'],
  aliases: [],
  keywords: { ar: ['بلع بطارية', 'بطارية الساعة', 'ابتلاع مغناطيس', 'جسم غريب', 'بطارية قرصية'], en: ['button battery', 'coin cell', 'magnet ingestion', 'foreign body', 'lithium battery'] }
});

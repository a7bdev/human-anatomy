/* ============================================================
   موسوعة الأمراض — فهرس الموجة الثانية: جلديّ مناعي/معدٍ
   dx/index-gap2-derminf.js
   ------------------------------------------------------------
   ٥ بطاقات: تصلّب الجلد الجهازي · ستيفنز-جونسون/انحلال البشرة
   السمّي · الفقاع · النخالية الوردية · الدفتيريا.
   الأجسام الطويلة في dx/dx-gap2-derminf.js وتُحمَّل عند فتح البطاقة.
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

DISEASES.push({
  id: 'systemic-sclerosis', group: 'autoimmune', tier: 'common', emergency: false,
  name: { ar: 'تصلّب الجلد الجهازي (سكليرودرما)', en: 'Systemic sclerosis (scleroderma)' },
  organs: ['skin', 'vessels', 'esophagus', 'lungs', 'immunity'],
  aliases: [],
  short: {
    ar: 'مرض مناعي يفرط فيه الجسم في إنتاج الكولاجين، فيتصلّب الجلد ويشدّ ويلمع، وقد يمتدّ التصلّب إلى الأوعية والمريء والرئتين. وأبكر علامة عادة تبيضّ الأصابع وتزرقّ في البرد.',
    en: 'An immune disease in which the body overproduces collagen, so the skin hardens, tightens and shines, and the hardening may reach the vessels, oesophagus and lungs. Its earliest sign is usually fingers that blanch and go blue in the cold.'
  },
  keywords: { ar: ['سكليرودرما', 'تصلّب الجلد', 'التصلّب الجهازي', 'كريست', 'رينو مع تصلّب الجلد'], en: ['systemic sclerosis', 'scleroderma', 'CREST', 'skin thickening'] }
});

DISEASES.push({
  id: 'stevens-johnson-syndrome', group: 'micro', tier: 'rare', emergency: true,
  name: { ar: 'متلازمة ستيفنز-جونسون وانحلال البشرة السمّي', en: 'Stevens-Johnson syndrome and toxic epidermal necrolysis' },
  organs: ['skin', 'lips', 'eye', 'immunity'],
  aliases: [],
  short: {
    ar: 'تفاعل دوائي نادر مهدّد للحياة تنسلخ فيه طبقة الجلد العليا وتتقرّح أغشية الفم والعينين والأعضاء التناسلية، كأنه حرق واسع من الداخل. يبدأ بحمّى وألم جلدي قبل الطفح، ويستدعي وقف الدواء المتّهم فوراً.',
    en: 'A rare, life-threatening drug reaction in which the top layer of skin sloughs off and the linings of the mouth, eyes and genitals ulcerate, like a wide burn from within. It starts with fever and skin pain before the rash and demands that the culprit drug be stopped at once.'
  },
  keywords: { ar: ['ستيفنز جونسون', 'انحلال البشرة السمّي', 'التقشّر الجلدي الدوائي', 'رد فعل دوائي شديد'], en: ['Stevens-Johnson', 'SJS', 'TEN', 'toxic epidermal necrolysis'] }
});

DISEASES.push({
  id: 'pemphigus', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'الفقاع (بمفيغوس)', en: 'Pemphigus' },
  organs: ['skin', 'lips', 'immunity'],
  aliases: [],
  short: {
    ar: 'مرض مناعي ذاتي تهاجم فيه أجسام مضادة الروابط التي تلحم خلايا الجلد، فتنفصل وتتكوّن فقاعات رخوة سهلة التمزّق تترك تآكلات مؤلمة. كثيراً ما يبدأ في الفم قبل أن يظهر على الجلد بأسابيع.',
    en: 'An autoimmune disease in which antibodies attack the bonds that glue skin cells together, so they separate and form flaccid, easily broken blisters that leave painful erosions. It often begins in the mouth weeks before it shows on the skin.'
  },
  keywords: { ar: ['الفقاع', 'بمفيغوس', 'الفقاع الشائع', 'فقاعات الجلد المناعية'], en: ['pemphigus', 'pemphigus vulgaris', 'autoimmune blistering'] }
});

DISEASES.push({
  id: 'pityriasis-rosea', group: 'micro', tier: 'common', emergency: false,
  name: { ar: 'النخالية الوردية', en: 'Pityriasis rosea' },
  organs: ['skin'],
  aliases: [],
  short: {
    ar: 'طفح جلدي شائع لدى الشباب، يبدأ ببقعة كبيرة وحيدة تُسمّى «بقعة البشير»، ثم يتبعها بأيام رشّ من بقع بيضاوية صغيرة على الجذع بترتيب يشبه غصن الشجرة. غير معدٍ عملياً، ويزول وحده خلال أسابيع.',
    en: 'A common rash in young people that begins with a single large patch called the "herald patch", then days later a shower of small oval spots follows on the trunk in a pattern like the branches of a tree. It is practically non-contagious and clears on its own within weeks.'
  },
  keywords: { ar: ['النخالية الوردية', 'بقعة البشير', 'الطفح الوردي النخالي'], en: ['pityriasis rosea', 'herald patch', 'christmas tree rash'] }
});

DISEASES.push({
  id: 'diphtheria', group: 'infection', tier: 'rare', emergency: true,
  name: { ar: 'الدفتيريا (الخناق)', en: 'Diphtheria' },
  organs: ['pharynx', 'heart', 'peripheral-nerve', 'immunity'],
  aliases: [],
  short: {
    ar: 'عدوى بكتيرية خطيرة يمنعها التطعيم، تكوّن غشاءً رمادياً سميكاً ملتصقاً في الحلق قد يسدّ مجرى الهواء، وتفرز سمّاً ينتقل في الدم فيؤذي القلب والأعصاب. تحتاج مضاد سمّ عاجلاً؛ تأخير ساعات يغيّر المصير.',
    en: 'A serious bacterial infection prevented by vaccination. It forms a thick grey membrane clinging in the throat that can block the airway, and it releases a toxin that travels in the blood to harm the heart and nerves. It needs antitoxin urgently; a delay of hours changes the outcome.'
  },
  keywords: { ar: ['الدفتيريا', 'الخناق', 'الغشاء الكاذب في الحلق', 'خناق الحلق'], en: ['diphtheria', 'pseudomembrane', 'Corynebacterium'] }
});

/* ============================================================
   البطاقات المرجعية — فهرس التنوّع الجيني (دفعة variation)
   ref/index-variation.js
   ------------------------------------------------------------
   باب «التنوّع الجيني والطفرات»: بطاقاتٌ تشرح صور التغيّر في الحمض
   النووي، من فرق الحرف الواحد إلى الطفرة الصبغية. تكمّل بطاقة
   «الطفرة» (mutation) في ref/index-genome.js ولا تكرّرها.
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في ref/ref-variation.js
   ⚠️ محتوى تثقيفي عام لا يقرأ تقريراً جينياً ولا يفسّر نتيجة شخص.
   ============================================================ */

REFS.push({
  id: 'snp',
  group: 'genome-variation',
  kind: 'genome',
  name: { ar: 'التعدّد النووي المفرد', en: 'Single-nucleotide polymorphism (SNP)' },
  short: {
    ar: 'موضعٌ في الجينوم يختلف فيه الناس بحرفٍ واحد من حروف الحمض النووي، وهو أشيع صور التنوّع الطبيعي بين البشر، وأغلبه لا يُمرض بل يفسّر فروقاً دقيقة بيننا.',
    en: 'A place in the genome where people differ by a single DNA letter. It is the commonest form of natural variation between people, and most are harmless, explaining fine differences between us rather than causing disease.'
  },
  organs: ['dna', 'cell'],
  diseases: [],
  aliases: ['SNP', 'snp', 'تعدد النوكليوتيدة المفردة', 'متغيّر أحادي النوكليوتيدة', 'فرق الحرف الواحد'],
  keywords: {
    ar: ['تعدد نووي مفرد', 'حرف واحد', 'متغيّر شائع', 'تنوّع طبيعي', 'snp'],
    en: ['snp', 'single nucleotide polymorphism', 'common variant', 'natural variation']
  }
});

REFS.push({
  id: 'cnv',
  group: 'genome-variation',
  kind: 'genome',
  name: { ar: 'تنوّع عدد النسخ', en: 'Copy-number variation (CNV)' },
  short: {
    ar: 'اختلافٌ بين الناس في عدد النسخ من مقطعٍ كامل من الحمض النووي، يتكرّر عند بعضهم ويقلّ أو يُحذف عند غيرهم؛ فمنه ما لا أثر له ومنه ما يخلّ بجرعة جينٍ فيرفع خطر مرض.',
    en: 'People differ in how many copies they carry of a whole DNA segment, duplicated in some and reduced or deleted in others. Some copies do nothing, while others disturb a gene dose and raise disease risk.'
  },
  organs: ['dna', 'meiosis'],
  diseases: [],
  aliases: ['CNV', 'cnv', 'تنوع عدد النسخ', 'تباين عدد النسخ', 'زيادة عدد النسخ', 'نقص عدد النسخ'],
  keywords: {
    ar: ['عدد النسخ', 'تكرار مقطع', 'حذف مقطع', 'جرعة الجين'],
    en: ['copy number', 'duplication', 'deletion', 'gene dosage', 'cnv']
  }
});

REFS.push({
  id: 'indel',
  group: 'genome-variation',
  kind: 'genome',
  name: { ar: 'الإدراج والحذف', en: 'Insertions and deletions (indels)' },
  short: {
    ar: 'زيادةُ حرفٍ أو أكثر في تسلسل الحمض النووي أو نقصانه؛ صغيرها قد يزيح إطار القراءة فيشلّ البروتين كلّه، وأشهر أمراض الوراثة يعود إلى حذفٍ صغير في جينٍ واحد.',
    en: 'Adding one or more DNA letters or removing them. A small one can shift the reading frame and cripple a whole protein, and famous inherited diseases trace back to a small deletion in a single gene.'
  },
  organs: ['dna', 'cell'],
  diseases: ['cystic-fibrosis'],
  aliases: ['indel', 'إندل', 'الحذف والإدراج', 'طفرة الإدراج', 'طفرة الحذف', 'إزاحة الإطار'],
  keywords: {
    ar: ['إدراج', 'حذف', 'إزاحة إطار القراءة', 'زيادة حرف', 'نقص حرف'],
    en: ['insertion', 'deletion', 'frameshift', 'indel']
  }
});

REFS.push({
  id: 'chromosomal-mutation',
  group: 'genome-variation',
  kind: 'genome',
  name: { ar: 'الطفرات الصبغية', en: 'Chromosomal mutations' },
  short: {
    ar: 'تغيّراتٌ كبيرة تطال صبغياً كاملاً أو جزءاً منه: زيادةُ عددها أو نقصانه، أو انتقالُ قطعةٍ من صبغيٍّ إلى آخر، أو انقلابها؛ ومنها متلازماتٌ معروفة كمتلازمة داون.',
    en: 'Large changes that affect a whole chromosome or part of it: a change in their number, a piece moving from one chromosome to another, or a piece flipped over. Known syndromes such as Down syndrome belong here.'
  },
  organs: ['meiosis', 'cell', 'dna'],
  diseases: ['down-syndrome', 'turner-syndrome', 'klinefelter'],
  aliases: ['طفرة صبغية', 'شذوذ صبغي', 'اختلال العدد الصبغي', 'الانتقال الصبغي', 'الانقلاب الصبغي', 'اختلال الصبغيات'],
  keywords: {
    ar: ['صبغيات', 'كروموسوم', 'اختلال العدد', 'انتقال', 'انقلاب', 'تثلّث الصبغي'],
    en: ['chromosome', 'aneuploidy', 'translocation', 'inversion', 'trisomy', 'monosomy']
  }
});

REFS.push({
  id: 'germline-vs-somatic',
  group: 'genome-variation',
  kind: 'genome',
  name: { ar: 'طفرة موروثة مقابل مكتسبة', en: 'Germline versus somatic mutation' },
  short: {
    ar: 'الفرق بين تغيّرٍ وُلد الإنسان به في كل خلاياه فيورّثه لأبنائه، وتغيّرٍ نشأ في نسيجٍ واحد خلال العمر كخلايا الورم فلا يوجد في سائر الجسم ولا ينتقل للذرّية.',
    en: 'The difference between a change a person is born with in every cell and passes to children, and a change that arose in a single tissue during life such as tumour cells, absent from the rest of the body and not passed on.'
  },
  organs: ['meiosis', 'mitosis', 'cell'],
  diseases: ['breast-cancer', 'colorectal-cancer'],
  aliases: ['طفرة موروثة', 'طفرة جسدية', 'طفرة مكتسبة', 'السلالة الجرثومية', 'germline', 'somatic'],
  keywords: {
    ar: ['موروث', 'مكتسب', 'جسدي', 'خط جرثومي', 'سرطان', 'توريث'],
    en: ['germline', 'somatic', 'inherited', 'acquired', 'cancer', 'heredity']
  }
});

REFS.push({
  id: 'variant-significance',
  group: 'genome-variation',
  kind: 'genome',
  name: { ar: 'تصنيف دلالة المتغيّر', en: 'Variant classification and significance' },
  short: {
    ar: 'كيف يصنّف المختبر الفرق الجيني: ضارّاً مؤكّداً أو مرجَّح الضرر أو مجهول الدلالة أو مرجَّح الحميد أو حميداً؛ والدرجة الوسطى «مجهول الدلالة» أكثر ما يُساء فهمه في نتائج الفحص الجيني.',
    en: 'How a laboratory grades a genetic difference: pathogenic, likely pathogenic, of uncertain significance, likely benign, or benign. The middle grade, uncertain significance, is the most misread result in genetic testing.'
  },
  organs: ['dna', 'cell'],
  diseases: ['breast-cancer'],
  aliases: ['VUS', 'vus', 'متغيّر مجهول الدلالة', 'تصنيف المتغيّرات', 'دلالة المتغيّر', 'ضارّ وحميد'],
  keywords: {
    ar: ['مجهول الدلالة', 'ضارّ', 'حميد', 'تصنيف', 'إعادة تصنيف', 'درجات المتغيّر'],
    en: ['vus', 'pathogenic', 'benign', 'uncertain significance', 'variant classification']
  }
});

REFS.push({
  id: 'polymorphism',
  group: 'genome-variation',
  kind: 'genome',
  name: { ar: 'التعدّد الشكلي', en: 'Polymorphism' },
  short: {
    ar: 'فرقٌ جينيّ شائعٌ في السكّان لا يُعدّ مرضاً بل صورةً طبيعية من صور التنوّع البشري، كفصائل الدم واختلاف ألوان العيون؛ شيوعه بين الأصحّاء دليلٌ على براءته في الغالب.',
    en: 'A genetic difference common in a population that is not counted as disease but as a natural form of human variation, like blood groups and eye colour. Its commonness among healthy people is usually a sign that it is harmless.'
  },
  organs: ['dna', 'cell'],
  diseases: [],
  aliases: ['تعدد شكلي', 'تعدد الأشكال', 'polymorphism', 'فرق شائع', 'تنوّع طبيعي'],
  keywords: {
    ar: ['تعدد شكلي', 'فرق شائع', 'تنوّع طبيعي', 'فصائل الدم'],
    en: ['polymorphism', 'common variant', 'natural variation', 'blood groups']
  }
});

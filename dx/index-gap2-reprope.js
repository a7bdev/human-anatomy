/* ============================================================
   موسوعة الأمراض — فهرس دفعة gap2-reprope
   dx/index-gap2-reprope.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-gap2-reprope.js
   خمس بطاقات في فجوات النساء والحمل والأطفال وأورامهم.
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- صحة المرأة والحمل ---------------- */

DISEASES.push({
  id: 'vaginismus-dyspareunia', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'تشنّج المهبل وعُسر الجماع (ألم العلاقة الزوجية)', en: 'Vaginismus and dyspareunia (painful intercourse)' },
  short: {
    ar: 'ألم أو انقباض لا إرادي عند العلاقة الزوجية يمنع إتمامها أو يوجعها. حالة شائعة لها أسباب جسدية ونفسية تُبحث معاً، وهي تُعالَج بنجاح عالٍ ولا تستدعي الصمت ولا الحرج.',
    en: 'Pain or an involuntary tightening during intercourse that prevents or hurts it. A common condition with physical and emotional causes looked for together; it is treated with high success and calls for neither silence nor embarrassment.'
  },
  organs: ['female-reproductive', 'pelvis', 'muscles', 'brain', 'limbic'],
  aliases: [],
  keywords: { ar: ['ألم عند الجماع', 'تشنج المهبل', 'عسر الجماع', 'صعوبة العلاقة الزوجية'], en: ['vaginismus', 'dyspareunia', 'painful sex', 'pelvic floor'] }
});

DISEASES.push({
  id: 'recurrent-miscarriage', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'الإجهاض المتكرّر (تكرّر فقد الحمل)', en: 'Recurrent miscarriage (recurrent pregnancy loss)' },
  short: {
    ar: 'فقدُ ثلاثة أحمال متتالية أو أكثر. يستدعي بحثاً منظّماً عن سبب قابل للعلاج، وكثيراً ما لا يُعثر على سبب واحد — ومع ذلك تبقى فرصة الحمل المكتمل كبيرة، والدعم النفسي جزء من علاجه.',
    en: 'The loss of three or more consecutive pregnancies. It calls for an organised search for a treatable cause; often no single cause is found, yet the chance of carrying to term stays high, and emotional support is part of its treatment.'
  },
  organs: ['female-reproductive', 'pregnancy', 'embryo', 'immunity', 'thyroid'],
  aliases: [],
  keywords: { ar: ['تكرر الإجهاض', 'فقد الحمل المتكرر', 'اجهاضات متتالية', 'اسباب الاجهاض المتكرر'], en: ['recurrent miscarriage', 'recurrent pregnancy loss', 'habitual abortion'] }
});

/* ---------------- نموّ الطفل ---------------- */

DISEASES.push({
  id: 'precocious-delayed-puberty', group: 'child', tier: 'common', emergency: false,
  name: { ar: 'البلوغ المبكّر والمتأخّر', en: 'Precocious and delayed puberty' },
  short: {
    ar: 'ظهور علامات البلوغ قبل أوانها أو تأخّرها كثيراً عن أقران الطفل. أكثره تنوّعٌ طبيعي يُطمأَن إليه ويُتابَع، وقليله سبب يستحقّ البحث والعلاج، وأثره على نفس الطفل لا يقلّ عن أثره على طوله.',
    en: 'Puberty signs appearing before their time, or lagging far behind a child’s peers. Most is a normal variation that is reassured and monitored, a minority a cause worth investigating and treating; its effect on the child’s feelings is no less than on height.'
  },
  organs: ['pituitary', 'brain', 'ovary', 'testis', 'growth-plate'],
  aliases: [],
  keywords: { ar: ['البلوغ المبكر', 'تأخر البلوغ', 'بلوغ مبكر عند البنات', 'تأخر النمو الجنسي'], en: ['precocious puberty', 'delayed puberty', 'early puberty', 'late bloomer'] }
});

/* ---------------- أورام الأطفال ---------------- */

DISEASES.push({
  id: 'wilms-tumor', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'ورم ويلمز (الورم الكلوي عند الأطفال)', en: 'Wilms tumour (nephroblastoma)' },
  short: {
    ar: 'أشيع سرطان في كلية الطفل الصغير، يظهر غالباً ككتلة أو انتفاخ في البطن عند طفل يبدو بخير، ذروته نحو الثالثة والرابعة. من أكثر أورام الأطفال استجابةً للعلاج، والاكتشاف المبكّر يرفع فرص الشفاء كثيراً.',
    en: 'The commonest cancer in a young child’s kidney, usually appearing as a lump or swelling in the tummy of an apparently well child, peaking around three and four. One of the most treatment-responsive childhood tumours, and early detection greatly raises the chance of cure.'
  },
  organs: ['kidneys', 'cell', 'dna'],
  aliases: [],
  keywords: { ar: ['ورم ويلمز', 'الورم الكلوي عند الأطفال', 'كتلة في بطن الطفل', 'ورم الكلية الطفلي'], en: ['Wilms tumour', 'nephroblastoma', 'childhood kidney cancer'] }
});

DISEASES.push({
  id: 'neuroblastoma', group: 'cancer', tier: 'common', emergency: false,
  name: { ar: 'الورم الأرومي العصبي', en: 'Neuroblastoma' },
  short: {
    ar: 'أشيع ورم صلب خارج الدماغ عند الرضّع، ينشأ من خلايا عصبية جنينية في الغدّة الكظرية أو بجانب العمود الفقري. يتنوّع كثيراً: بعضه ينضج أو يتراجع وحده، وبعضه عدوانيّ يحتاج علاجاً مكثّفاً حسب درجة الخطورة.',
    en: 'The commonest solid tumour outside the brain in infants, arising from embryonic nerve cells in the adrenal gland or beside the spine. It varies widely: some matures or regresses on its own, some is aggressive and needs intensive treatment by risk level.'
  },
  organs: ['adrenal', 'autonomic', 'neuron', 'bone-inside'],
  aliases: [],
  keywords: { ar: ['الورم الأرومي العصبي', 'ورم الأعصاب عند الأطفال', 'ورم الغدة الكظرية الطفلي', 'كتلة بطن الرضيع'], en: ['neuroblastoma', 'adrenal tumour child', 'sympathetic nervous tumour'] }
});

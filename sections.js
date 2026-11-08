/* ============================================================
   جسم الإنسان — Human Anatomy   |   sections.js
   ------------------------------------------------------------
   خريطة أقسام المكتبة وحدها — لا منطق ولا بيانات عناصر.
   كل قسم: { id, name:{ar,en}, items:[ معرّفات من ITEMS ] }

   ⚠️ ملاحظتان مهمّتان:
   1) معرّف مذكور هنا وغير موجود في data.js يُتجاهَل بهدوء
      (القسم يُبنى ممّا وُجد فقط، والقسم الفارغ لا يُعرض إطلاقاً).
   2) عنصر موجود في ITEMS وغير مذكور هنا **لا يختفي** —
      يظهر تلقائياً في قسم «أخرى / Other» أسفل الصفحة.
      فأي عضو جديد يُضاف لاحقاً يبقى مرئياً حتى قبل تصنيفه.
   ============================================================ */

var LIB_SECTIONS = [
  {
    id: 'systems',
    name: { ar: 'الأجهزة', en: 'Body systems' },
    items: ['skin', 'muscles', 'skeleton', 'organs', 'vessels', 'nervous', 'serous-membranes']
  },
  {
    id: 'head',
    name: { ar: 'الرأس والوجه', en: 'Head and face' },
    items: ['brain', 'limbic', 'cortex-map', 'meninges', 'skull',
            'facial-muscles', 'tmj', 'sinuses', 'pharynx',
            'lips', 'teeth', 'child-teeth', 'infant-skull', 'salivary-glands']
  },
  {
    id: 'senses',
    name: { ar: 'الحواسّ', en: 'The senses' },
    items: ['eye', 'retina', 'ear', 'balance', 'nose', 'tongue', 'skin-receptors']
  },
  {
    id: 'chest',
    name: { ar: 'الصدر والتنفّس', en: 'Chest and breathing' },
    items: ['heart', 'lungs', 'larynx', 'vocal-folds', 'bronchi',
            'alveoli', 'diaphragm', 'coronary']
  },
  {
    id: 'digestion',
    name: { ar: 'الهضم', en: 'Digestion' },
    items: ['esophagus', 'stomach', 'small-intestine', 'large-intestine',
            'appendix', 'anorectal', 'liver', 'gallbladder', 'pancreas', 'spleen']
  },
  {
    id: 'urinary',
    name: { ar: 'الكلى والمسالك البولية', en: 'Kidneys and urinary tract' },
    items: ['kidneys', 'nephron', 'ureter', 'bladder', 'urethra']
  },
  {
    id: 'repro',
    name: { ar: 'التناسل والحمل', en: 'Reproduction and pregnancy' },
    items: ['male-reproductive', 'testis', 'prostate',
            'female-reproductive', 'ovary', 'ovum', 'fertilization',
            'embryo', 'pregnancy', 'fetal-circulation', 'breast', 'erection']
  },
  {
    id: 'glands',
    name: { ar: 'الغدد الصمّاء', en: 'Endocrine glands' },
    items: ['pituitary', 'pineal', 'thyroid', 'parathyroid', 'thymus', 'adrenal']
  },
  {
    id: 'bones',
    name: { ar: 'الهيكل والمفاصل', en: 'Bones and joints' },
    items: ['spine', 'vertebra-disc', 'pelvis', 'shoulder', 'elbow', 'hand',
            'carpal-tunnel', 'hip', 'knee', 'ankle', 'foot',
            'bone-inside', 'growth-plate', 'tendon-ligament', 'rib-cage']
  },
  {
    id: 'blood',
    name: { ar: 'الدم والمناعة', en: 'Blood and immunity' },
    items: ['blood', 'vessel-types', 'circulation', 'lymphatic', 'lymph-node', 'immunity', 'clotting', 'wound-healing']
  },
  {
    id: 'nerves',
    name: { ar: 'الأعصاب', en: 'Nerves' },
    items: ['spinal-cord', 'neuron', 'peripheral-nerve', 'autonomic', 'cranial-nerves', 'nmj', 'bbb']
  },
  {
    id: 'micro',
    name: { ar: 'المستوى المجهري', en: 'Under the microscope' },
    items: ['cell', 'dna', 'muscle-fiber', 'villi', 'liver-lobule',
            'hair-follicle', 'nail', 'mitosis', 'meiosis', 'muscle-types']
  }
];

/* قسم المتبقّي — يُعرض فقط حين يوجد عنصر غير مصنّف */
var LIB_OTHER = { id: 'other', name: { ar: 'أخرى', en: 'Other' } };

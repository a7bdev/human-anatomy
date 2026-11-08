/* ============================================================
   البطاقة المرجعية — ملف الإقلاع
   ------------------------------------------------------------
   النوع الثالث من بطاقات التطبيق، بعد الأعضاء (data.js) والأمراض
   (diseases.js + dx/). يخدم ثلاثة أقسام لا ينطبق عليها ما قبله:
     • الفحوصات المخبرية
     • الجينوم
     • تحليل DNA والفحوص الجينية
   فحصٌ مخبري ليس له «أعراض» ولا «متى تراجع الطبيب»، و«الطفرة»
   ليست عضواً ولا مرضاً — فبنيةٌ ثالثة، واحدة للثلاثة. العقد كاملاً
   في REF-SPEC.md.

   مهمّة هذا الملف شيئان لا ثالث لهما:

   ١) يُعرّف الحاويتين العامّتين مرّة واحدة:
      REFS     = فهرس خفيف يُحمَّل دائماً
      REF_BODY = أجسام البطاقات، تُحمَّل عند فتح البطاقة

   ٢) يلفّ REFS.push فيَسِم كل بطاقة بملفها (src) من window.__refsrc.
      بهذا يعرف المحمِّل الكسول أيّ ref/ref-<src>.js يجلب — بلا أن
      يكتب كاتب الدفعة الوسم يدوياً في كل مدخل فينساه أو يخطئه.
      (نفس آلية diseases.js و drugs.js)

   ⚠️ محتوى تثقيفي عام لا يقرأ تحليلاً ولا يفسّر نتيجة شخص بعينه،
   وبلا جرعات ولا أسماء أدوية تجارية بقرار مقصود.
   ============================================================ */

var REFS     = window.REFS     || [];
var REF_BODY = window.REF_BODY || {};

(function () {
  if (REFS.__stamped) return;           /* لا يُلفّ مرّتين لو حُمّل الملف مرّتين */
  var _push = REFS.push;
  REFS.push = function (r) {
    if (r && typeof r === 'object' && !r.src &&
        typeof window !== 'undefined' && window.__refsrc) r.src = window.__refsrc;
    return _push.apply(this, arguments);
  };
  try { Object.defineProperty(REFS, '__stamped', { value: true, enumerable: false }); }
  catch (e) { REFS.__stamped = true; }
})();

/* ------------------------------------------------------------
   الأنواع الثلاثة — وسمٌ واحد في بنيةٍ واحدة
   ------------------------------------------------------------
   `kind` شارةٌ تُعرض في رأس البطاقة وتُصنّف النتائج، لا بنيةٌ ثانية:
   كل الأنواع تستعمل الحقول نفسها، وما لا ينطبق يُترك فارغاً.
   وُجد لأن قراءة النتيجة تختلف جوهرياً بين الثلاثة: رقمٌ ضمن مدى
   مرجعي · مفهومٌ لا رقم له · تقريرٌ يصنّف متغيّراً ضارّاً أو حميداً.
   ------------------------------------------------------------ */
var REF_KINDS = {
  lab:      { ar: 'فحص مخبري', en: 'Lab test' },
  genome:   { ar: 'مفهوم جينومي', en: 'Genome concept' },
  'gene-test': { ar: 'فحص جيني', en: 'Genetic test' }
};

/* ------------------------------------------------------------
   المجموعات — القائمة الحاكمة، تُختار منها ولا تُخترع
   ------------------------------------------------------------
   الدرس مأخوذ من DRUG_CLASSES: كان مذكوراً في العقد وغير موجود في
   المستودع، فاخترع كل كاتب مفرداته وصارت ٢٦ فصيلة بلا مرجع.
   مجموعة غائبة من هنا تُعرض بمعرّفها ولا تكسر شيئاً — لكن الدفعات
   الجديدة تختار من هنا، والفاحص ينبّه على ما ليس فيها.
   ------------------------------------------------------------ */
var REF_GROUPS = {
  /* الفحوصات المخبرية */
  'lab-blood':      { ar: 'الدم وتعداده',            en: 'Blood and blood count' },
  'lab-chem':       { ar: 'كيمياء الدم والأيض',      en: 'Chemistry and metabolism' },
  'lab-iron':       { ar: 'الحديد ومخزونه',          en: 'Iron and its stores' },
  'lab-hormone':    { ar: 'الهرمونات',               en: 'Hormones' },
  'lab-inflam':     { ar: 'الالتهاب والمناعة',       en: 'Inflammation and immunity' },
  'lab-liver':      { ar: 'وظائف الكبد',             en: 'Liver function' },
  'lab-kidney':     { ar: 'وظائف الكلى',             en: 'Kidney function' },
  'lab-lipid':      { ar: 'الدهون',                  en: 'Lipids' },
  'lab-urine':      { ar: 'البول والبراز',           en: 'Urine and stool' },
  'lab-micro':      { ar: 'الأحياء الدقيقة والمزارع', en: 'Microbiology and cultures' },
  'lab-coag':       { ar: 'التخثّر',                 en: 'Coagulation' },
  'lab-tumor':      { ar: 'دلالات الأورام',          en: 'Tumour markers' },
  /* الجينوم */
  'genome-basics':  { ar: 'أساسيات الجينوم',         en: 'Genome basics' },
  'genome-variation': { ar: 'التنوّع والطفرات',      en: 'Variation and mutation' },
  'genome-expression': { ar: 'التعبير والتنظيم',     en: 'Expression and regulation' },
  'genome-inherit': { ar: 'أنماط التوريث',           en: 'Patterns of inheritance' },
  /* تحليل DNA والفحوص الجينية */
  'gene-diagnostic': { ar: 'الفحوص التشخيصية',       en: 'Diagnostic testing' },
  'gene-screening': { ar: 'المسح وفحص الحاملين',     en: 'Screening and carrier testing' },
  'gene-prenatal':  { ar: 'فحوص الحمل والجنين',      en: 'Prenatal testing' },
  'gene-pharmaco':  { ar: 'الاستجابة الدوائية',      en: 'Drug response (pharmacogenomics)' },
  'gene-identity':  { ar: 'الهوية والنسب',           en: 'Identity and relatedness' },
  other:            { ar: 'أخرى',                    en: 'Other' }
};

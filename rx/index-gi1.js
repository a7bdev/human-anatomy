/* ============================================================
   موسوعة الأدوية — فهرس دفعة الجهاز الهضمي الأولى
   rx/index-gi1.js   (يُحمَّل دائماً — خفيف)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. لا جرعات هنا بقرار مقصود.
   ============================================================ */

var DRUGS = window.DRUGS || [];

DRUGS.push({
  id: 'ranitidine',
  cls: 'h2-blocker',
  otc: false,
  alert: true,
  name:  { ar: 'الرانيتيدين', en: 'Ranitidine' },
  short: {
    ar: 'حاصر هيستامين من النوع الثاني كان يخفض حمض المعدة، وسُحب من الأسواق بعد اكتشاف شائبة مسرطنة محتملة فيه. يُذكر هنا لأن اسمه ما زال في بيوت الناس.',
    en: 'An H2 blocker that used to lower stomach acid, withdrawn from the market after a probable carcinogenic impurity was found in it. It is listed here because its name is still in peoples homes.'
  },
  brands: ['زانتاك', 'رانيتاك', 'هيستاك', 'رانيتيدين'],
  uses: ['gerd', 'peptic-ulcer', 'dyspepsia', 'chronic-gastritis'],
  keywords: { ar: ['حرقة المعدة', 'حاصر هيستامين', 'زانتاك', 'رانيتيدين', 'مسحوب من السوق'], en: ['H2 blocker', 'zantac', 'ranitidine', 'NDMA', 'withdrawn'] }
});

DRUGS.push({
  id: 'domperidone',
  cls: 'prokinetic',
  otc: false,
  alert: true,
  name:  { ar: 'الدومبيريدون', en: 'Domperidone' },
  short: {
    ar: 'مضاد للغثيان يشدّ أعلى المعدة ويرخي أسفلها فيدفع محتواها إلى الأمام. قُيّد استعماله في أوروبا بعد ثبوت خطر على نظم القلب.',
    en: 'An anti-sickness medicine that tightens the top of the stomach and relaxes its outlet, pushing the contents forward. Its use was restricted in Europe after a heart rhythm risk was confirmed.'
  },
  brands: ['موتيليوم', 'دومبي', 'دومبيريدون', 'موتينورم'],
  uses: ['gastroparesis', 'food-poisoning'],
  keywords: { ar: ['غثيان', 'استفراغ', 'موتيليوم', 'دومبيريدون', 'محرّك للمعدة'], en: ['antiemetic', 'motilium', 'domperidone', 'prokinetic', 'nausea'] }
});

DRUGS.push({
  id: 'loperamide',
  cls: 'antidiarrheal',
  otc: true,
  alert: true,
  name:  { ar: 'اللوبيراميد', en: 'Loperamide' },
  short: {
    ar: 'يبطّئ حركة الأمعاء فيقلّ عدد مرّات الإسهال. لا يقتل جرثومة ولا يعالج سبباً، وهو ممنوع تماماً مع الدم في البراز أو الحمّى.',
    en: 'It slows the bowel so the number of loose motions falls. It kills no germ and treats no cause, and it is entirely forbidden with blood in the stool or fever.'
  },
  brands: ['إيموديوم', 'لوبيرا', 'دياريد', 'لوبيراميد'],
  uses: ['chronic-diarrhea', 'ibs', 'crohns'],
  keywords: { ar: ['إسهال', 'إيموديوم', 'لوبيراميد', 'موقف للإسهال'], en: ['antidiarrhoeal', 'imodium', 'loperamide', 'diarrhoea'] }
});

DRUGS.push({
  id: 'lactulose',
  cls: 'laxative-osmotic',
  otc: true,
  alert: false,
  name:  { ar: 'اللاكتولوز', en: 'Lactulose' },
  short: {
    ar: 'سكّر صناعي لا يُهضم، يسحب الماء إلى القولون فيليّن البراز. وله عمل ثانٍ أهمّ: يخفض الأمونيا في دم مريض الكبد.',
    en: 'A synthetic sugar that is not digested, drawing water into the colon so the stool softens. It has a second and more important role: lowering ammonia in the blood of a person with liver disease.'
  },
  brands: ['دوفالاك', 'لاكتولوز', 'لاكتيلوز', 'لاكتوجال'],
  uses: ['chronic-constipation', 'hepatic-encephalopathy', 'child-constipation'],
  keywords: { ar: ['إمساك', 'ملين', 'دوفالاك', 'لاكتولوز', 'أمونيا'], en: ['laxative', 'duphalac', 'lactulose', 'constipation', 'ammonia'] }
});

DRUGS.push({
  id: 'mebeverine',
  cls: 'antispasmodic',
  otc: true,
  alert: false,
  name:  { ar: 'الميبيفيرين', en: 'Mebeverine' },
  short: {
    ar: 'مرخٍ للعضلة الملساء يعمل على جدار الأمعاء مباشرة، فيفكّ المغص والتقلّص بلا الآثار الجافّة التي تصحب مضادات التشنّج القديمة.',
    en: 'A smooth muscle relaxant that acts directly on the bowel wall, releasing cramp and spasm without the drying effects that come with the older antispasmodics.'
  },
  brands: ['دوسباتالين', 'كولوفيرين', 'ميبيفرين', 'دوسبامين'],
  uses: ['ibs', 'diverticular-disease'],
  keywords: { ar: ['قولون عصبي', 'مغص', 'دوسباتالين', 'ميبيفيرين', 'مضاد تقلّص'], en: ['antispasmodic', 'colofac', 'mebeverine', 'IBS', 'cramps'] }
});

DRUGS.push({
  id: 'simethicone',
  cls: 'antiflatulent',
  otc: true,
  alert: false,
  name:  { ar: 'السيميثيكون', en: 'Simethicone (Simeticone)' },
  short: {
    ar: 'مادة سيليكونية لا يمتصّها الجسم إطلاقاً: تجمع فقاعات الغاز الصغيرة في فقاعات كبيرة تخرج أسهل. من أسلم ما يُباع، وأثره متواضع.',
    en: 'A silicone substance the body does not absorb at all: it gathers small gas bubbles into larger ones that pass more easily. Among the safest things sold, and its effect is modest.'
  },
  brands: ['ديسفلاتيل', 'إنفاكول', 'سيميثيكون', 'أنتيفلات'],
  uses: ['dyspepsia', 'infant-colic', 'ibs'],
  keywords: { ar: ['غازات', 'انتفاخ', 'ديسفلاتيل', 'سيميثيكون', 'مغص الرضيع'], en: ['antiflatulent', 'simeticone', 'infacol', 'bloating', 'wind'] }
});

DRUGS.push({
  id: 'bisacodyl',
  cls: 'laxative-stimulant',
  otc: true,
  alert: false,
  name:  { ar: 'البيساكوديل', en: 'Bisacodyl' },
  short: {
    ar: 'ملين منبّه يوقظ حركة القولون ويزيد الماء فيه. يعمل بقوّة وسرعة، ولهذا هو علاج أيام معدودة لا عادة يومية.',
    en: 'A stimulant laxative that wakes the movement of the colon and adds water to it. It works strongly and quickly, which is why it is a treatment for a few days, not a daily habit.'
  },
  brands: ['دولكولاكس', 'بيساكوديل', 'لاكسانا', 'دولكوليت'],
  uses: ['chronic-constipation', 'child-constipation'],
  keywords: { ar: ['إمساك', 'ملين منبّه', 'دولكولاكس', 'بيساكوديل', 'تحميلة'], en: ['stimulant laxative', 'dulcolax', 'bisacodyl', 'constipation', 'suppository'] }
});

DRUGS.push({
  id: 'ondansetron',
  cls: 'antiemetic',
  otc: false,
  alert: true,
  name:  { ar: 'الأوندانسيترون', en: 'Ondansetron' },
  short: {
    ar: 'مضاد غثيان قوي يحصر مستقبل السيروتونين الذي يشغّل مركز القيء. يوقف قيء العلاج الكيماوي والعمليات، ويطيل فترة القلب الكهربائية عند بعض الناس.',
    en: 'A powerful anti-sickness medicine that blocks the serotonin receptor which switches on the vomiting centre. It stops the vomiting of chemotherapy and surgery, and lengthens the electrical interval of the heart in some people.'
  },
  brands: ['زوفران', 'أوندانسيترون', 'إيمسيت', 'أونسيت'],
  uses: ['hyperemesis', 'breast-cancer', 'colorectal-cancer'],
  keywords: { ar: ['غثيان', 'قيء', 'زوفران', 'أوندانسيترون', 'كيماوي'], en: ['antiemetic', 'zofran', 'ondansetron', '5-HT3', 'vomiting'] }
});

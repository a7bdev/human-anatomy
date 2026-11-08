/* ============================================================
   البطاقات المرجعية — فهرس الفحوصات المخبرية (دفعة labcore)
   ref/index-labcore.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في ref/ref-labcore.js
   ⚠️ محتوى تثقيفي عام لا يقرأ تحليلاً ولا يفسّر نتيجة شخص بعينه.
   ============================================================ */

REFS.push({
  id: 'ferritin',
  group: 'lab-iron',
  kind: 'lab',
  name: { ar: 'الفيريتين', en: 'Ferritin' },
  unit: 'ng/mL',
  short: {
    ar: 'البروتين الذي يخزّن الحديد داخل الخلايا، وقياسه في الدم أدقّ مرآة لمخزون الحديد في الجسم كله — لكنه يرتفع أيضاً مع أي التهاب فيخفي نقصاً حقيقياً تحته.',
    en: 'The protein that stores iron inside cells; its level in blood is the closest mirror of the body total iron stores, yet it also rises with any inflammation and can hide a real deficiency beneath it.'
  },
  organs: ['liver', 'blood', 'bone-inside', 'spleen', 'small-intestine'],
  diseases: ['iron-anemia', 'hemochromatosis', 'child-iron-anemia'],
  aliases: ['الفيريتين'],
  keywords: {
    ar: ['مخزون الحديد', 'فيريتين', 'نقص الحديد', 'تحليل الحديد'],
    en: ['ferritin', 'iron stores', 'serum ferritin', 'iron deficiency']
  }
});

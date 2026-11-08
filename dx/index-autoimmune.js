/* ============================================================
   موسوعة الأمراض — فهرس المناعة الذاتية والروماتيزم
   dx/index-autoimmune.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الجسم الطويل في dx/dx-autoimmune.js
   هذا الباب لا يُكرّر بطاقةً — يجمع عائلةً كانت مبعثرة: المناعة
   حين تهاجم الجسم نفسه. أعضاؤها يبقون تحت أعضائهم (الربط العكسي
   عبر aliases مستقلّ عن المجموعة)، ويظهرون هنا أيضاً في مكانٍ
   واحد. هذه البطاقة مِحورُ الباب: تشرح الخيط المشترك بينها.
   ⚠️ محتوى تثقيفي عام لا يغني عن الطبيب.
   ============================================================ */

DISEASES.push({
  id: 'autoimmune-overview', group: 'autoimmune', tier: 'common', emergency: false,
  name: { ar: 'أمراض المناعة الذاتية والروماتيزم', en: 'Autoimmune and rheumatic diseases' },
  short: {
    ar: 'عائلةٌ واحدة يجمعها خيطٌ واحد: جهاز المناعة — حارس الجسم — يخطئ فيهاجم أنسجة صاحبه بدل الميكروب. تظهر في مفصلٍ أو جلدٍ أو غدّةٍ أو أمعاء، فتبدو أمراضاً متفرّقة وهي أقرباء. هذه البطاقة تشرح ما يجمعها، وتحتها في هذا الباب أفرادها.',
    en: 'One family joined by one thread: the immune system — the body’s guard — misfires and attacks its owner’s tissues instead of a germ. It shows in a joint, skin, a gland or the gut, so they look like separate diseases while they are relatives. This card explains what unites them; its members sit under it in this section.'
  },
  organs: ['immunity', 'thymus', 'lymph-node', 'skeleton', 'skin', 'blood'],
  aliases: [],
  keywords: {
    ar: ['المناعة الذاتية', 'الروماتيزم', 'أمراض المفاصل الالتهابية', 'فرط المناعة', 'المناعة تهاجم الجسم', 'الأمراض الرثوية'],
    en: ['autoimmune', 'rheumatic', 'rheumatology', 'immune-mediated', 'autoimmunity', 'connective tissue disease']
  }
});

/* ============================================================
   موسوعة الأمراض — فهرس الحساسية والتأتّب
   dx/index-allergy.js
   ------------------------------------------------------------
   يجمع عائلةً كانت مبعثرة: مناعةٌ تبالغ في ردّها على شيءٍ لا
   يؤذي. أعضاؤها يبقون تحت أعضائهم (الربط العكسي عبر aliases
   مستقلّ عن المجموعة)، ويظهرون هنا أيضاً في مكانٍ واحد.
   ⚠️ محتوى تثقيفي عام لا يغني عن الطبيب.
   ============================================================ */

DISEASES.push({
  id: 'allergy-overview', group: 'allergy', tier: 'common', emergency: false,
  name: { ar: 'أمراض الحساسية والتأتّب', en: 'Allergy and atopy' },
  short: {
    ar: 'عائلةٌ واحدة سببها واحد: مناعةٌ تعامل شيئاً غير مؤذٍ — لقاحَ نبتة، طعاماً، دواءً — كأنه خطرٌ داهم، فتُطلق سلسلةً تُحدث حكّةً أو عطاساً أو صفيراً أو طفحاً. تظهر في الأنف أو الصدر أو الجلد أو الأمعاء فتبدو أمراضاً متفرّقة، وهي ردّ فعلٍ واحد. هذه البطاقة تشرح ما يجمعها، وتحتها أفرادها.',
    en: 'One family with one cause: an immune system that treats something harmless — a plant pollen, a food, a medicine — as a looming danger, firing a chain that brings itching, sneezing, wheeze or a rash. It shows in the nose, chest, skin or gut, so they look like separate diseases while they are one reaction. This card explains what unites them; its members sit beneath it.'
  },
  organs: ['immunity', 'nose', 'bronchi', 'skin', 'lungs', 'eye'],
  aliases: [],
  keywords: {
    ar: ['الحساسية', 'التأتّب', 'فرط الحساسية', 'المناعة تبالغ', 'أرجية', 'التحسّس'],
    en: ['allergy', 'atopy', 'hypersensitivity', 'IgE', 'allergic', 'atopic']
  }
});

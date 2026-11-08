/* ============================================================
   البطاقات المرجعية — فهرس الجينوم (دفعة genome)
   ref/index-genome.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في ref/ref-genome.js
   ⚠️ محتوى تثقيفي عام لا يقرأ تقريراً جينياً ولا يفسّر نتيجة شخص.
   ============================================================ */

REFS.push({
  id: 'mutation',
  group: 'genome-variation',
  kind: 'genome',
  name: { ar: 'الطفرة', en: 'Mutation' },
  short: {
    ar: 'تغيّرٌ دائم في تسلسل حروف الحمض النووي. أغلبه بلا أثر يُذكر، وقليله يغيّر بروتيناً فيُمرض، وبعضه هو نفسه مادّة التطوّر والتنوّع بين البشر.',
    en: 'A permanent change in the letter sequence of DNA. Most have no appreciable effect, a few alter a protein and cause disease, and some are the very material of evolution and of the variation between people.'
  },
  organs: ['dna', 'cell', 'mitosis', 'meiosis'],
  diseases: ['sickle-cell', 'cystic-fibrosis', 'down-syndrome'],
  aliases: ['الطفرة'],
  keywords: {
    ar: ['طفرة', 'تحوّر', 'متغيّر جيني', 'تغيّر وراثي', 'حذف', 'إدخال'],
    en: ['mutation', 'variant', 'genetic variant', 'deletion', 'insertion', 'point mutation']
  }
});

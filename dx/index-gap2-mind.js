/* ============================================================
   موسوعة الأمراض — فهرس دفعة gap2-mind
   dx/index-gap2-mind.js
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-gap2-mind.js
   خرفان تنكّسيان (أجسام ليوي · الجبهي الصدغي) واضطراب شخصية
   حدّي — تُقرأ على التشريح: خلايا عصبية، وفصوص جبهية وصدغية،
   واللوزة وقشرة الجبهة ودارات الانفعال.
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

DISEASES.push({
  id: 'lewy-body-dementia', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'خرف أجسام ليوي', en: 'Dementia with Lewy bodies' },
  short: {
    ar: 'ثاني أشيع خرف تنكّسي بعد ألزهايمر، يجمع بين تراجع التفكير وتذبذب الصفاء الذهني وهلاوس بصرية مبكّرة وأعراض تشبه باركنسون، وحساسية خطِرة لبعض مهدّئات الأعصاب.',
    en: 'The second commonest degenerative dementia after Alzheimer, combining decline in thinking, a fluctuating clarity of mind, early visual hallucinations, Parkinson-like features, and a dangerous sensitivity to some nerve sedatives.'
  },
  organs: ['brain', 'neuron', 'cortex-map', 'limbic', 'autonomic'],
  aliases: ['خرف أجسام ليوي'],
  keywords: { ar: ['أجسام ليوي', 'خرف باركنسون', 'هلاوس بصرية', 'تذبذب الوعي', 'ألفا ساينوكلين'], en: ['Lewy body', 'DLB', 'visual hallucinations', 'Parkinson dementia'] }
});

DISEASES.push({
  id: 'frontotemporal-dementia', group: 'nerves', tier: 'common', emergency: false,
  name: { ar: 'الخرف الجبهي الصدغي', en: 'Frontotemporal dementia' },
  short: {
    ar: 'خرف يضرب الشخصية والسلوك واللغة قبل الذاكرة، ويصيب في سنّ أبكر من ألزهايمر، فيتبدّل طبع الإنسان وحكمه بينما تبقى ذاكرته القريبة سليمة في البداية.',
    en: 'A dementia that strikes personality, behaviour and language before memory, appearing at a younger age than Alzheimer, so character and judgement change while recent memory stays intact at first.'
  },
  organs: ['brain', 'neuron', 'cortex-map', 'limbic'],
  aliases: ['الخرف الجبهي الصدغي'],
  keywords: { ar: ['الخرف الجبهي', 'خرف الفص الجبهي', 'تغير الشخصية', 'بروتين تاو', 'الحبسة التقدمية'], en: ['frontotemporal', 'FTD', 'behavioural variant', 'tau', 'primary progressive aphasia'] }
});

DISEASES.push({
  id: 'borderline-personality-disorder', group: 'mental', tier: 'common', emergency: false,
  name: { ar: 'اضطراب الشخصية الحدّية', en: 'Borderline personality disorder' },
  short: {
    ar: 'نمط يبدأ باكراً من عدم ثبات المشاعر والعلاقات وصورة الذات، مع خوف شديد من الهجر واندفاع وأذية للنفس — وله علاج نفسي فعّال والتعافي ممكن.',
    en: 'A pattern beginning early of unstable emotions, relationships and self-image, with an intense fear of abandonment, impulsivity and self-harm — it has an effective psychological treatment and recovery is possible.'
  },
  organs: ['brain', 'limbic', 'cortex-map', 'neuron'],
  aliases: ['اضطراب الشخصية الحدّية'],
  keywords: { ar: ['الشخصية الحدية', 'البينية', 'الخوف من الهجر', 'تقلب المشاعر', 'إيذاء النفس', 'العلاج الجدلي السلوكي'], en: ['borderline', 'BPD', 'EUPD', 'emotional dysregulation', 'DBT'] }
});

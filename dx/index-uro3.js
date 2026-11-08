/* ============================================================
   موسوعة الأمراض — فهرس المسالك البولية وأمراض الذكورة
   dx/index-uro3.js   (الموجة الثالثة)
   ------------------------------------------------------------
   يُحمَّل دائماً ويبقى خفيفاً. الأجسام الطويلة في dx/dx-uro3.js
   ⚠️ محتوى تثقيفي عام وليس تشخيصاً ولا وصفة علاج.
   ============================================================ */

/* ---------------- الإحليل ومجرى الخروج ---------------- */

DISEASES.push({
  id: 'urethral-stricture', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'تضيّق الإحليل', en: 'Urethral stricture' },
  short: {
    ar: 'ندبة تضيّق مجرى البول عند الرجل فيضعف الخيط ويطول وقت التبوّل، وتبقى المثانة لا تُفرغ تماماً.',
    en: 'A scar narrows the urinary passage in a man, so the stream weakens, voiding takes longer, and the bladder never quite empties.'
  },
  organs: ['urethra', 'male-reproductive', 'bladder', 'prostate'],
  aliases: ['تضيق الإحليل'],
  keywords: { ar: ['ضيق مجرى البول', 'ضعف خيط البول', 'تضيّق الإحليل'], en: ['urethral stricture', 'urethroplasty', 'weak stream'] }
});

DISEASES.push({
  id: 'posterior-urethral-valves', group: 'urinary', tier: 'rare', emergency: false,
  name: { ar: 'الصمامات الإحليلية الخلفية', en: 'Posterior urethral valves' },
  short: {
    ar: 'غشاء خلقي في إحليل الطفل الذكر يسدّ مخرج المثانة منذ ما قبل الولادة، فيرتدّ الضغط على المثانة والكليتين.',
    en: 'A congenital membrane in a boy’s urethra blocks the bladder outlet from before birth, so the back-pressure falls on the bladder and the kidneys.'
  },
  organs: ['urethra', 'bladder', 'kidneys', 'ureter'],
  aliases: [],
  keywords: { ar: ['صمامات الإحليل', 'انسداد مخرج المثانة عند الرضيع', 'تضخم المثانة الجنيني'], en: ['posterior urethral valves', 'PUV', 'bladder outlet obstruction infant'] }
});

DISEASES.push({
  id: 'hypospadias', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'الإحليل التحتي', en: 'Hypospadias' },
  short: {
    ar: 'فتحة البول عند المولود الذكر لا تقع في رأس القضيب بل على سطحه السفلي، وقد يصاحبها انحناء وقلفة ناقصة.',
    en: 'In a newborn boy the urinary opening does not sit at the tip of the penis but on its under-surface, sometimes with a downward bend and an incomplete foreskin.'
  },
  organs: ['urethra', 'male-reproductive', 'erection'],
  aliases: [],
  keywords: { ar: ['الإحليل السفلي', 'فتحة البول أسفل القضيب', 'تشوه خلقي بولي'], en: ['hypospadias', 'chordee', 'urethral meatus'] }
});

/* ---------------- المثانة ---------------- */

DISEASES.push({
  id: 'neurogenic-bladder', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'المثانة العصبية', en: 'Neurogenic bladder' },
  short: {
    ar: 'خلل في الأعصاب التي تقود المثانة، فتفقد التنسيق بين امتلائها وانفتاح مخرجها: إمّا تفرغ بلا إذن وإمّا لا تفرغ أصلاً.',
    en: 'A fault in the nerves that drive the bladder, so the coordination between filling and opening the outlet is lost: it either empties without permission or does not empty at all.'
  },
  organs: ['bladder', 'spinal-cord', 'autonomic', 'peripheral-nerve', 'urethra'],
  aliases: [],
  keywords: { ar: ['المثانة العصبية', 'المثانة بعد إصابة النخاع', 'قسطرة متقطعة'], en: ['neurogenic bladder', 'detrusor sphincter dyssynergia', 'clean intermittent catheterisation'] }
});

DISEASES.push({
  id: 'bladder-stones', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'حصى المثانة', en: 'Bladder stones' },
  short: {
    ar: 'حجارة تتكوّن داخل المثانة نفسها لأن البول يركد فيها ولا يُفرَغ، فتقطع خيط البول فجأة وتُدمي وتؤلم أسفل البطن.',
    en: 'Stones that form inside the bladder itself because urine stagnates and is not emptied, so the stream cuts off suddenly, blood appears, and the lower belly aches.'
  },
  organs: ['bladder', 'prostate', 'urethra', 'kidneys'],
  aliases: [],
  keywords: { ar: ['حصوة المثانة', 'انقطاع خيط البول', 'حصى مع تضخم البروستاتا'], en: ['bladder stones', 'vesical calculi', 'cystolitholapaxy'] }
});

DISEASES.push({
  id: 'interstitial-cystitis', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'التهاب المثانة الخلالي (متلازمة ألم المثانة)', en: 'Interstitial cystitis (bladder pain syndrome)' },
  short: {
    ar: 'ألم وضغط فوق العانة يزداد كلّما امتلأت المثانة ويخفّ بالتبوّل، مع إلحاح وتكرار شديدين وزرع بول سليم لا جراثيم فيه.',
    en: 'Pain and pressure above the pubic bone that grows as the bladder fills and eases on voiding, with severe urgency and frequency, while urine cultures stay clean.'
  },
  organs: ['bladder', 'urethra', 'pelvis', 'peripheral-nerve'],
  aliases: [],
  keywords: { ar: ['متلازمة ألم المثانة', 'التهاب مثانة بلا جراثيم', 'إلحاح بولي مزمن'], en: ['interstitial cystitis', 'bladder pain syndrome', 'Hunner lesion'] }
});

DISEASES.push({
  id: 'nocturia', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'التبوّل الليلي المتكرّر عند الكبار', en: 'Nocturia' },
  short: {
    ar: 'الاستيقاظ مرّة أو أكثر كل ليلة للتبوّل، وهو شكوى واحدة لها ثلاثة أصول مختلفة تماماً: بول ليلي كثير، أو مثانة صغيرة السعة، أو نوم متقطّع أصلاً.',
    en: 'Waking once or more each night to pass urine: one complaint with three quite different roots, too much urine made at night, a bladder of small capacity, or sleep that is broken to begin with.'
  },
  organs: ['bladder', 'kidneys', 'prostate', 'heart'],
  aliases: [],
  keywords: { ar: ['التبول الليلي', 'الاستيقاظ للتبول', 'بوال ليلي'], en: ['nocturia', 'nocturnal polyuria', 'night-time voiding'] }
});

/* ---------------- العدوى والدم في البول ---------------- */

DISEASES.push({
  id: 'recurrent-uti', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'التهابات المسالك البولية المتكرّرة', en: 'Recurrent urinary tract infections' },
  short: {
    ar: 'التهاب مثانة يعود ثلاث مرّات في السنة أو مرّتين في ستة أشهر، فتتحوّل الشكوى من نوبة عابرة إلى مشكلة تحتاج بحثاً عن سببٍ يُصلَح.',
    en: 'A bladder infection that returns three times a year or twice in six months, so the complaint turns from a passing episode into a problem that needs its cause found and fixed.'
  },
  organs: ['bladder', 'urethra', 'kidneys', 'immunity'],
  aliases: [],
  keywords: { ar: ['التهاب مثانة متكرر', 'التهاب بول يرجع', 'وقاية من التهاب المسالك'], en: ['recurrent UTI', 'relapse versus reinfection', 'UTI prophylaxis'] }
});

DISEASES.push({
  id: 'cauti', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'عدوى المسالك المرتبطة بالقسطرة البولية', en: 'Catheter-associated urinary tract infection' },
  short: {
    ar: 'القسطرة تفتح طريقاً مباشراً للجراثيم إلى المثانة، فكلّ يوم تبقى فيه تزيد احتمال العدوى، وعلامتها ليست عكارة البول بل حمّى وتوعّك.',
    en: 'A catheter opens a direct road for germs into the bladder, so every extra day it stays raises the risk, and its sign is not cloudy urine but fever and feeling unwell.'
  },
  organs: ['bladder', 'urethra', 'kidneys', 'immunity'],
  aliases: [],
  keywords: { ar: ['عدوى القسطرة', 'التهاب بول مع قسطرة', 'جراثيم في البول بلا أعراض'], en: ['CAUTI', 'catheter infection', 'asymptomatic bacteriuria'] }
});

DISEASES.push({
  id: 'hematuria', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'الدم في البول (البيلة الدموية)', en: 'Blood in the urine (haematuria)' },
  short: {
    ar: 'دم يظهر في البول بالعين أو تحت المجهر. أكثر أسبابه بسيط، لكنه أوّل وأحياناً وحيد علامة على ورم في المثانة أو الكلية، فلا يُهمَل ولو زال.',
    en: 'Blood that appears in urine to the eye or under the microscope. Most causes are simple, yet it is the first and sometimes only sign of a bladder or kidney tumour, so it is never ignored even if it stops.'
  },
  organs: ['bladder', 'kidneys', 'ureter', 'prostate', 'urethra'],
  aliases: [],
  keywords: { ar: ['بول أحمر', 'دم مع البول', 'بيلة دموية'], en: ['haematuria', 'blood in urine', 'cystoscopy'] }
});

/* ---------------- الحالب والمسالك العلوية ---------------- */

DISEASES.push({
  id: 'vesicoureteral-reflux', group: 'urinary', tier: 'common', emergency: false,
  name: { ar: 'الارتجاع المثاني الحالبي', en: 'Vesicoureteral reflux' },
  short: {
    ar: 'صمّام الحالب عند دخوله المثانة ضعيف، فيرتدّ البول صاعداً نحو الكلية عند كل تبوّل، ويحمل معه الجراثيم فتتكرّر التهابات الكلية عند الطفل.',
    en: 'The valve where the ureter enters the bladder is weak, so urine flows back up toward the kidney with each void, carrying germs with it and giving a child repeated kidney infections.'
  },
  organs: ['ureter', 'bladder', 'kidneys', 'nephron'],
  aliases: ['الارتجاع المثاني الحالبي'],
  keywords: { ar: ['ارتجاع البول للكلية', 'ارتداد مثاني حالبي', 'التهاب كلية متكرر عند الطفل'], en: ['vesicoureteral reflux', 'VUR', 'reflux nephropathy'] }
});

DISEASES.push({
  id: 'upper-tract-urothelial', group: 'urinary', tier: 'rare', emergency: false,
  name: { ar: 'أورام حويضة الكلية والحالب', en: 'Upper tract urothelial carcinoma' },
  short: {
    ar: 'سرطان ينشأ من البطانة نفسها التي تبطّن المثانة لكنه في حويضة الكلية أو الحالب، وعلامته الأولى غالباً دم في البول بلا ألم.',
    en: 'A cancer arising from the same lining that covers the bladder, but sited in the renal pelvis or the ureter, whose first sign is usually painless blood in the urine.'
  },
  organs: ['ureter', 'kidneys', 'bladder', 'cell'],
  aliases: [],
  keywords: { ar: ['ورم الحالب', 'سرطان حويضة الكلية', 'ورم ظهاري بولي علوي'], en: ['upper tract urothelial carcinoma', 'UTUC', 'ureteroscopy'] }
});

/* ---------------- القضيب والانتصاب والقذف ---------------- */

DISEASES.push({
  id: 'peyronie', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'مرض بيروني (اعوجاج القضيب)', en: 'Peyronie’s disease' },
  short: {
    ar: 'لويحة ليفية قاسية تنشأ في غلاف الجسم الكهفي فتمنعه من التمدّد في جهة واحدة، فينحني القضيب عند الانتصاب وقد يؤلم ويقصر.',
    en: 'A hard fibrous plaque forms in the sheath of the erectile body and stops it stretching on one side, so the penis bends on erection and may hurt and shorten.'
  },
  organs: ['urethra', 'erection', 'male-reproductive'],
  aliases: ['مرض بيروني'],
  keywords: { ar: ['اعوجاج القضيب', 'انحناء العضو', 'لويحة ليفية'], en: ['Peyronie disease', 'penile curvature', 'penile plaque'] }
});

DISEASES.push({
  id: 'priapism', group: 'repro', tier: 'rare', emergency: true,
  name: { ar: 'القُساح (الانتصاب المستديم المؤلم)', en: 'Priapism' },
  short: {
    ar: 'انتصاب لا يزول ويستمرّ ساعات بلا رغبة ومع ألم متزايد، لأن الدم حُبس في الجسمين الكهفيين ولم يعد يخرج. حالة طوارئ: كل ساعة تأخير تكلّف نسيجاً.',
    en: 'An erection that will not subside, lasting hours without desire and with rising pain, because blood is trapped in the erectile bodies and no longer drains. An emergency: every hour of delay costs tissue.'
  },
  organs: ['erection', 'male-reproductive', 'blood', 'vessels'],
  aliases: ['القُساح'],
  keywords: { ar: ['انتصاب مستمر', 'القساح', 'انتصاب مؤلم لا يزول'], en: ['priapism', 'ischaemic priapism', 'prolonged erection'] }
});

DISEASES.push({
  id: 'premature-ejaculation', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'القذف المبكّر', en: 'Premature ejaculation' },
  short: {
    ar: 'القذف يقع قبل ما يريده الرجل وبعد وقت قصير جداً من الإيلاج، مع شعور بأنه لا يملك التحكّم فيه وضيق يصيبه ويصيب شريكته.',
    en: 'Ejaculation happens sooner than the man wants and very shortly after penetration, with a sense of no control over it and distress for him and for his partner.'
  },
  organs: ['erection', 'male-reproductive', 'prostate', 'autonomic'],
  aliases: ['القذف المبكّر'],
  keywords: { ar: ['سرعة القذف', 'القذف السريع', 'ضعف التحكم بالقذف'], en: ['premature ejaculation', 'rapid ejaculation', 'IELT'] }
});

DISEASES.push({
  id: 'retrograde-ejaculation', group: 'repro', tier: 'rare', emergency: false,
  name: { ar: 'القذف الراجع', en: 'Retrograde ejaculation' },
  short: {
    ar: 'الرعشة تحدث لكن لا يخرج سائل، لأن عنق المثانة لم ينغلق فذهب المني إلى داخل المثانة بدل أن يخرج، ويظهر البول بعدها عكراً.',
    en: 'Orgasm occurs but no fluid comes out, because the bladder neck did not close and the semen went back into the bladder instead, and the next urine looks cloudy.'
  },
  organs: ['prostate', 'bladder', 'male-reproductive', 'autonomic'],
  aliases: [],
  keywords: { ar: ['قذف جاف', 'المني يرجع للمثانة', 'رعشة بلا سائل'], en: ['retrograde ejaculation', 'dry orgasm', 'bladder neck'] }
});

/* ---------------- القلفة والحشفة والعجان ---------------- */

DISEASES.push({
  id: 'phimosis', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'ضيق القلفة وانحصارها (الشبم والبارافيموزس)', en: 'Phimosis and paraphimosis' },
  short: {
    ar: 'قلفة أضيق من أن تُسحب خلف الحشفة، أو قلفة سُحبت ولم تعد فاختنق ما تحتها وتورّم. الأولى مشكلة تُعالَج على مهل، والثانية طوارئ.',
    en: 'A foreskin too tight to be drawn back behind the glans, or one that was drawn back and did not return, strangling and swelling what lies under it. The first is treated at leisure, the second is an emergency.'
  },
  organs: ['male-reproductive', 'urethra', 'skin', 'erection'],
  aliases: [],
  keywords: { ar: ['ضيق القلفة', 'الشبم', 'انحصار القلفة'], en: ['phimosis', 'paraphimosis', 'foreskin'] }
});

DISEASES.push({
  id: 'balanitis', group: 'repro', tier: 'common', emergency: false,
  name: { ar: 'التهاب الحشفة والقلفة', en: 'Balanitis and balanoposthitis' },
  short: {
    ar: 'احمرار وحكّة وحرقة في رأس القضيب وتحت القلفة مع إفراز ورائحة، وأشيع أسبابه الفطريات وسوء النظافة أو الإفراط في الغسل بالصابون.',
    en: 'Redness, itching and burning of the head of the penis and under the foreskin, with discharge and odour; the commonest causes are yeast, poor hygiene, or over-washing with soap.'
  },
  organs: ['male-reproductive', 'skin', 'urethra', 'immunity'],
  aliases: [],
  keywords: { ar: ['التهاب رأس القضيب', 'فطريات الحشفة', 'احمرار تحت القلفة'], en: ['balanitis', 'balanoposthitis', 'candidal balanitis'] }
});

DISEASES.push({
  id: 'fournier-gangrene', group: 'repro', tier: 'rare', emergency: true,
  name: { ar: 'غرغرينا فورنييه (التهاب العجان الناخر)', en: 'Fournier’s gangrene' },
  short: {
    ar: 'عدوى بكتيرية سريعة تأكل نسيج كيس الصفن والعجان خلال ساعات، وألمها أشدّ بكثير مما يظهر على الجلد. من أخطر ما يصيب المنطقة ويقتل إن تأخّرت الجراحة.',
    en: 'A fast bacterial infection that eats the tissue of the scrotum and perineum within hours, its pain far worse than the skin shows. Among the deadliest problems of the area, fatal if surgery is delayed.'
  },
  organs: ['male-reproductive', 'skin', 'testis', 'immunity', 'pelvis'],
  aliases: [],
  keywords: { ar: ['التهاب اللفافة الناخر', 'غرغرينا كيس الصفن', 'تعفن العجان'], en: ['Fournier gangrene', 'necrotising fasciitis perineum', 'scrotal gangrene'] }
});

DISEASES.push({
  id: 'penile-cancer', group: 'cancer', tier: 'rare', emergency: false,
  name: { ar: 'سرطان القضيب', en: 'Penile cancer' },
  short: {
    ar: 'قرحة أو نتوء أو بقعة لا تندمل على الحشفة أو القلفة، يتأخّر أصحابها في عرضها حياءً فتكبر وتنتشر إلى عقد الأربية.',
    en: 'A sore, lump or patch on the glans or foreskin that will not heal; men delay showing it out of embarrassment, so it grows and spreads to the groin nodes.'
  },
  organs: ['male-reproductive', 'skin', 'urethra', 'cell'],
  aliases: [],
  keywords: { ar: ['ورم القضيب', 'قرحة لا تلتئم على العضو', 'سرطان الحشفة'], en: ['penile cancer', 'penile squamous cell carcinoma', 'HPV penis'] }
});

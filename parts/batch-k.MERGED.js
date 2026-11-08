/* ============================================================
   batch-k.js — دفعة ك من عناصر «جسم الإنسان»
   آلية الانتصاب والرعشة (أطلس مسالك بولية وفسيولوجيا عصبية)
   يُدمج لاحقاً في data.js — لا يُعدَّل data.js من هنا.
   ============================================================ */

ORGANS = ORGANS.concat([

/* ---------- آلية الانتصاب والرعشة ---------- */
  {
    id: 'erection', type: 'organ', system: 'reproductive',
    name: { ar: 'آلية الانتصاب والرعشة', en: 'Mechanism of erection and orgasm' },
    img: 'img/erection.png', imgBack: 'img/erection-back.png', thumb: 'img/thumb-erection.png',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الحزمة الوعائية العصبية الظهرية', en: 'Dorsal neurovascular bundle', x: 25, y: 7.5, side: 'left',
        desc: {
          ar: 'شريط يمر على ظهر العضو تحت الجلد مباشرة، فيه الوريد الظهري العميق في الوسط وعلى جانبيه الشريانان الظهريان والعصبان الظهريان. هذي الحزمة هي طريق الاحساس الى الدماغ وطريق الدم الراجع من العضو، ولذلك تكون اول ما يخشى الجراح على اذاه في اي عملية هناك.',
          en: 'A band running along the back of the organ just beneath the skin, carrying the deep dorsal vein in the midline with the dorsal arteries and dorsal nerves on either side. It is the route of sensation to the brain and of returning blood, which is why surgeons guard it above all in any operation there.'
        }
      },
      {
        ar: 'الجسم الكهفي', en: 'Corpus cavernosum', x: 33, y: 15.5, side: 'left', go: 'male-reproductive',
        desc: {
          ar: 'واحد من جسمين اسطوانيين يشكلان الجزء الاكبر من العضو، ونسيجه شبكة من الحجيرات والحواجز العضلية كالاسفنج. هما الجسمان اللذان يمتلئان بالدم فيحدث الانتصاب، ويفصل بينهما حاجز غير كامل يسمح للدم بالانتقال بينهما فيعملان كوحدة واحدة.',
          en: 'One of two cylindrical bodies forming the bulk of the organ, its tissue a sponge-like network of spaces and muscular trabeculae. These are the bodies that fill with blood to produce erection, and the incomplete septum between them lets blood pass across so that both behave as a single unit.'
        }
      },
      {
        ar: 'الشريان الحلزوني في حال الارتخاء', en: 'Helicine artery in the flaccid state', x: 37.5, y: 22, side: 'left',
        desc: {
          ar: 'في الارتخاء تكون هذي الشرايين ملتوية كاللولب وعضلاتها الملساء منقبضة، فلا يمر فيها الا دم قليل يكفي لتغذية النسيج. التوائها ليس عيبا بل احتياط: يتيح لها ان تستقيم وتطول بلا تمزق حين يتمدد العضو.',
          en: 'In the flaccid state these arteries are coiled like a spring and their smooth muscle is contracted, so only a trickle of blood passes, enough to nourish the tissue. The coiling is not a flaw but a reserve: it lets them straighten and lengthen without tearing when the organ expands.'
        }
      },
      {
        ar: 'الجسم الاسفنجي ولمعة الاحليل', en: 'Corpus spongiosum and urethral lumen', x: 26.7, y: 37.4, side: 'left', go: 'urethra',
        desc: {
          ar: 'الجسم الاسفنجي جسم ثالث اسفل الجسمين الكهفيين، وفي وسطه لمعة الاحليل التي يمر فيها البول والسائل المنوي. غلالته اقل سمكا عمدا فلا يقسو كالجسمين فوقه، ولو قسي مثلهما لانضغط الاحليل وانغلق الطريق وقت الحاجة اليه.',
          en: 'The corpus spongiosum is a third body below the two cavernosa, with the urethral lumen running through its centre to carry urine and semen. Its covering is deliberately thinner so it never becomes as rigid as the bodies above it; were it as stiff, the urethra would be squeezed shut just when it is needed.'
        }
      },
      {
        ar: 'الوريد النافذ المنضغط', en: 'Compressed emissary vein', x: 9.5, y: 54, side: 'left',
        desc: {
          ar: 'وريد صغير يخترق الغلالة البيضاء ليخرج الدم من الجسم الكهفي. حين تنتفخ الحجيرات بالدم تضغط هذي الاوردة على الغلالة غير القابلة للتمدد فتغلقها، فيحتبس الدم داخل العضو. هذا الاحتباس هو سر الصلابة، لا مجرد دخول الدم.',
          en: 'A small vein piercing the tunica albuginea to drain the cavernous body. As the spaces swell with blood these veins are pressed against the unyielding tunica and shut, trapping the blood inside. This trapping, not merely the inflow, is the secret of rigidity.'
        }
      },
      {
        ar: 'الجيوب الكهفية المحتقنة بالدم', en: 'Engorged cavernous sinusoids', x: 34.5, y: 60.2, side: 'left', go: 'blood',
        desc: {
          ar: 'حجيرات مبطنة ببطانة وعائية تتوسع فتمتلئ بالدم حتى تصير الاحجام مضاعفة، وهي في الارتخاء منكمشة شاحبة كما يظهر في المقطع الاعلى. تحكم امتلائها عضلات ملساء في جدر الحواجز بينها، وارتخاء هذي العضلات هو بدء الانتصاب كله.',
          en: 'Endothelium-lined spaces that dilate and fill with blood until their volume multiplies; in the flaccid state, as the upper section shows, they are collapsed and pale. Their filling is governed by smooth muscle in the walls between them, and the relaxation of that muscle is the whole beginning of erection.'
        }
      },
      {
        ar: 'الشريان الحلزوني المتوسع', en: 'Dilated helicine artery', x: 42, y: 69, side: 'left', go: 'vessel-types',
        desc: {
          ar: 'الشريان نفسه بعد ان ارتخت عضلاته الملساء فاستقام واتسع وتضاعف ما يمر فيه من دم عشرات المرات. توسع هذي الشرايين هو الخطوة الاولى، وارتخاء عضلات الحجيرات يستقبل الدم القادم منها.',
          en: 'The same artery after its smooth muscle has relaxed, so it straightens, widens, and carries many times its former flow. The dilation of these arteries is the first step, and the relaxation of the trabecular muscle receives the blood they deliver.'
        }
      },
      {
        ar: 'الغلالة البيضاء', en: 'Tunica albuginea', x: 5.9, y: 75.5, side: 'left',
        desc: {
          ar: 'غلاف ليفي ابيض سميك يحيط بكل جسم كهفي، من الكولاجين القوي القليل المطاطية. صلابة العضو تاتي من هذا الغلاف اكثر مما تاتي من الدم نفسه: هو الذي لا يسمح للجسم بالانتفاخ بلا حد فيرتفع الضغط داخله وتنغلق الاوردة.',
          en: 'A thick white fibrous sheath enclosing each cavernous body, made of strong, barely elastic collagen. Rigidity comes from this sheath more than from the blood itself: it refuses to let the body swell without limit, so pressure rises inside and the veins are closed.'
        }
      },
      {
        ar: 'النخاع الشوكي والجذور العجزية', en: 'Spinal cord and sacral roots', x: 86, y: 13, side: 'right', go: 'spinal-cord',
        desc: {
          ar: 'من الفقرات العجزية الثانية الى الرابعة تخرج الجذور التي تحمل امر الانتصاب، ومن اعلى القطنية الاولى والثانية تخرج جذور القذف. وفي النخاع العجزي قوس انعكاسي يجعل الانتصاب ممكنا باللمس وحده دون امر من الدماغ.',
          en: 'From the second to the fourth sacral segments emerge the roots that carry the command for erection, and higher up, from the first and second lumbar segments, the roots for ejaculation. Within the sacral cord lies a reflex arc that makes erection possible from touch alone, without any order from the brain.'
        }
      },
      {
        ar: 'سلسلة العقد الودية', en: 'Sympathetic ganglionic chain', x: 71.7, y: 19.5, side: 'right', go: 'autonomic',
        desc: {
          ar: 'سلسلة عقد صفراء تنزل بمحاذاة العمود الفقري وتحمل الالياف الودية الى الحوض. الودي هو الذي يقود القذف وهو ايضا الذي يبقي الشرايين منقبضة في الارتخاء، ولهذا يعرف طلبة الطب القاعدة: نظير الودي يوقف، والودي يقذف.',
          en: 'A chain of yellow ganglia descending beside the vertebral column and carrying sympathetic fibres to the pelvis. The sympathetic drives ejaculation and also keeps the arteries constricted in the flaccid state, which is why students of medicine learn the rule: parasympathetic erects, sympathetic ejaculates.'
        }
      },
      {
        ar: 'الالياف نظيرة الودية الحوضية', en: 'Parasympathetic pelvic splanchnic fibres', x: 82.1, y: 28, side: 'right',
        desc: {
          ar: 'الالياف الخضراء النازلة من النخاع العجزي الى الضفيرة الحوضية، وهي مفتاح الانتصاب. نهاياتها تطلق اكسيد النيتريك في نسيج الاجسام الكهفية فترتخي عضلاتها الملساء وتتوسع الشرايين ويندفع الدم. تلف هذي الالياف في جراحة الحوض سبب معروف لضعف الانتصاب.',
          en: 'The green fibres descending from the sacral cord to the pelvic plexus, and the key to erection. Their endings release nitric oxide into the erectile tissue, relaxing its smooth muscle so the arteries widen and blood surges in. Damage to these fibres in pelvic surgery is a well-known cause of erectile failure.'
        }
      },
      {
        ar: 'العصب الفرجي وفروعه', en: 'Pudendal nerve and its branches', x: 88.4, y: 62, side: 'right', go: 'peripheral-nerve',
        desc: {
          ar: 'عصب مختلط يخرج من العجز الثاني الى الرابع، ينقل احساس العضو والعجان الى الدماغ ويقود عضلات قاع الحوض. هو طريق اللمس الى قوس الانعكاس العجزي، وهو ايضا الذي يامر العضلات بالانقباض الايقاعي وقت الرعشة.',
          en: 'A mixed nerve arising from the second to fourth sacral segments; it carries sensation from the organ and perineum to the brain and commands the pelvic floor muscles. It is the path of touch into the sacral reflex arc, and the nerve that orders the rhythmic contractions of orgasm.'
        }
      },
      {
        ar: 'عضلات جذر العضو', en: 'Muscles of the root', x: 83.5, y: 74, side: 'right', go: 'muscles',
        desc: {
          ar: 'العضلة البصلية الاسفنجية والعضلة الاسكية الكهفية، وهما عضلتان اراديتان تحيطان بجذر العضو. تعصران الجذر فترفعان الضغط داخله وتزيدان الصلابة، وهما اللتان تنقبضان انقباضا ايقاعيا كل ثمانية اعشار الثانية تقريبا اثناء الرعشة فتدفعان السائل المنوي.',
          en: 'The bulbospongiosus and ischiocavernosus, two voluntary muscles wrapping the root of the organ. They squeeze the root, raising the pressure within it and adding to rigidity, and they are the muscles that contract rhythmically about every eight-tenths of a second during orgasm to expel the semen.'
        }
      }
    ],
    desc: {
      ar: 'الانتصاب حدث وعائي قبل أن يكون أي شيء آخر: إشارة عصبية تفتح الشرايين، ودم يملأ نسيجاً إسفنجياً، وغلاف ليفي يحبس الدم في مكانه. يقارن هذا الشكل مقطعين عرضيين في الأجسام الكهفية، أعلاهما في حال الارتخاء حيث الشرايين ملتوية منقبضة والجيوب منكمشة شاحبة، وأسفلهما في حال الانتصاب حيث الشرايين مستقيمة متسعة والجيوب ممتلئة بالدم الداكن والأوردة النافذة منضغطة عند المحيط. وإلى جانبهما المسار العصبي كاملاً من النخاع الشوكي إلى الحوض: ألياف خضراء نظيرة ودية تحمل أمر الانتصاب، وسلسلة عقد صفراء ودية تحمل أمر القذف، وألياف زرقاء فرجية تحمل الإحساس وتقود عضلات الجذر. والآلية نفسها ليست ذكرية وحدها: البظر عند الأنثى جسمان كهفيان بنفس البنية وينتصب بالطريقة نفسها.',
      en: 'Erection is a vascular event before it is anything else: a nerve signal opens the arteries, blood fills a sponge-like tissue, and a fibrous sheath traps that blood in place. This figure compares two cross-sections of the erectile bodies: above, the flaccid state with coiled constricted arteries and collapsed pale sinusoids; below, the erect state with straightened dilated arteries, sinusoids full of dark blood, and emissary veins compressed at the margin. Beside them runs the whole neural pathway from spinal cord to pelvis: green parasympathetic fibres carrying the command to erect, a yellow sympathetic ganglionic chain carrying the command to ejaculate, and blue pudendal fibres carrying sensation and driving the muscles of the root. The mechanism is not male alone: the clitoris has two cavernous bodies of the same structure and erects in exactly the same way.'
    },
    func: {
      ar: 'يبدأ الانتصاب حين تصل إشارة نظيرة ودية من النخاع العجزي (من العجزية الثانية إلى الرابعة) فتطلق نهاياتها أكسيد النيتريك، فترتخي العضلات الملساء في جدر الشرايين الحلزونية فتتسع ويندفع الدم إلى الجيوب الكهفية. ثم يأتي السر الحقيقي: الجيوب المنتفخة تضغط الأوردة النافذة على الغلالة البيضاء غير القابلة للتمدد فتغلقها، فيُحبس الدم ويرتفع الضغط وتشتد الصلابة. وعلى هذا الفهم بُنيت مثبطات الفوسفوديستراز-٥ (مثل الفياغرا): فهي تطيل أثر أكسيد النيتريك الذي أطلقه العصب، ولا تُحدث انتصاباً بنفسها، ولذلك لا تعمل بغير رغبة وإشارة عصبية. أما القذف فيقوده الودي من القطنية الأولى والثانية، ومن هنا القاعدة المشهورة عند طلبة الطب: نظير الودي يوقّف والودي يقذف. وينقل العصب الفرجي الإحساس ويقود العضلة البصلية الإسفنجية والإسكية الكهفية، وهما اللتان تنقبضان إيقاعياً كل ثمانية أعشار الثانية تقريباً أثناء الرعشة. وفي النخاع العجزي قوس انعكاسي يجعل الانتصاب ممكناً باللمس وحده دون أمر من الدماغ، ولهذا يحدث عند بعض مصابي النخاع الشوكي فوق ذلك المستوى. وعند الأنثى تجري الآلية نفسها: البظر جسمان كهفيان بالبنية ذاتها، والابتلال ترشّح من الأوعية المحتقنة لا إفراز غدة، والعضلات التي تنقبض وقت الرعشة هي هي بالإيقاع نفسه.',
      en: 'Erection begins when a parasympathetic signal arrives from the sacral cord (segments two to four) and its endings release nitric oxide, relaxing the smooth muscle in the walls of the helicine arteries so they widen and blood surges into the cavernous sinusoids. Then comes the real secret: the swollen sinusoids press the emissary veins against the unyielding tunica albuginea and close them, so blood is trapped, pressure rises, and rigidity builds. On this understanding the phosphodiesterase-5 inhibitors (such as sildenafil) were built: they prolong the action of the nitric oxide the nerve has already released and produce no erection by themselves, which is why they do nothing without desire and a nerve signal. Ejaculation, by contrast, is driven by the sympathetic outflow from the first and second lumbar segments, hence the rule students of medicine learn: parasympathetic erects, sympathetic ejaculates. The pudendal nerve carries sensation and commands the bulbospongiosus and ischiocavernosus, which contract rhythmically about every eight-tenths of a second during orgasm. A reflex arc in the sacral cord makes erection possible from touch alone without any order from the brain, which is why it can still occur in some people with spinal cord injury above that level. In the female the mechanism is the same: the clitoris has two cavernous bodies of identical structure, lubrication is a transudate from the engorged vessels rather than a glandular secretion, and the muscles that contract at orgasm are the same ones at the same rhythm.'
    },
    location: { ar: 'الأجسام الكهفية والإسفنجية في العضو وجذره في العجان، والمسار العصبي من النخاع القطني والعجزي عبر الضفيرة الحوضية', en: 'The cavernous and spongy bodies of the organ and its root in the perineum, with the neural pathway running from the lumbar and sacral cord through the pelvic plexus' },
    size: { ar: 'يزيد تدفق الدم في الشرايين نحو ٢٠ إلى ٤٠ ضعفاً، ويرتفع الضغط داخل الجسم الكهفي من نحو ١٠ إلى ما يقارب ١٠٠ ملم زئبق، والانقباضات الإيقاعية وقت الرعشة كل ٠٫٨ ثانية تقريباً', en: 'Arterial inflow rises roughly 20- to 40-fold, intracavernous pressure climbs from about 10 to near 100 mmHg, and the rhythmic contractions of orgasm come about every 0.8 seconds' },
    short: { ar: 'حدث وعائي يقوده العصب: دم يدخل وغلاف يحبسه', en: 'A vascular event driven by nerve: blood enters and a sheath traps it' },
    parts: [
      { ar: 'الأجسام الكهفية والجسم الإسفنجي', en: 'The cavernous bodies and the corpus spongiosum' },
      { ar: 'الغلالة البيضاء والأوردة النافذة', en: 'The tunica albuginea and the emissary veins' },
      { ar: 'الشرايين الحلزونية والجيوب الكهفية', en: 'The helicine arteries and the cavernous sinusoids' },
      { ar: 'المسار العصبي: نظير الودي والودي والعصب الفرجي', en: 'The neural pathway: parasympathetic, sympathetic and pudendal' }
    ],
    diseases: [
      { name: { ar: 'ضعف الانتصاب', en: 'Erectile dysfunction' }, desc: { ar: 'عجز عن بلوغ الصلابة أو الحفاظ عليها، وأشيع أسبابه وعائية: تصلب الشرايين والسكري وارتفاع ضغط الدم. ولأن شرايين العضو أدق من شرايين القلب فإنها تنسدّ قبلها، ولهذا يُعدّ ضعف الانتصاب أحياناً أول إنذار بمرض قلبي وعائي قبل أن يظهر بسنوات', en: 'Failure to reach or keep rigidity; its commonest causes are vascular — atherosclerosis, diabetes and high blood pressure. Because the arteries of the organ are finer than those of the heart they narrow first, so erectile dysfunction is sometimes the earliest warning of cardiovascular disease, years before it declares itself' } },
      { name: { ar: 'مرض بيروني', en: 'Peyronie disease' }, desc: { ar: 'تليّف موضعي في الغلالة البيضاء يجعل جانباً منها لا يمتدّ كبقيتها، فينحني العضو عند الانتصاب وقد يؤلم', en: 'A localized scar in the tunica albuginea that stops one side stretching like the rest, so the organ bends on erection and may be painful' } },
      { name: { ar: 'القُساح', en: 'Priapism' }, desc: { ar: 'انتصاب مؤلم يستمر ساعات بلا إثارة لأن الدم المحتبس لم يخرج، وهو حالة إسعافية: الدم الراكد يفقد أكسجينه ويتلف النسيج الكهفي تلفاً دائماً إن تأخر العلاج', en: 'A painful erection lasting hours without arousal because the trapped blood never drains; it is an emergency, since stagnant blood loses its oxygen and permanently damages the erectile tissue if treatment is delayed' } },
      { name: { ar: 'القذف المبكّر', en: 'Premature ejaculation' }, desc: { ar: 'بلوغ القذف أسرع مما يريده صاحبه، ومنشؤه في توقيت المنعكس الودي وحساسية المسار العصبي لا في الأوعية', en: 'Reaching ejaculation sooner than wished; it arises in the timing of the sympathetic reflex and the sensitivity of the nerve pathway rather than in the vessels' } },
      { name: { ar: 'إصابات النخاع الشوكي', en: 'Spinal cord injury' }, desc: { ar: 'قطع الصلة بين الدماغ والنخاع الأسفل، فيبقى الانتصاب المنعكس ممكناً باللمس إن سلم النخاع العجزي وكانت الإصابة فوقه، بينما تضطرب الرغبة والقذف والإحساس', en: 'A break between the brain and the lower cord; reflex erection from touch remains possible if the sacral cord is intact and the injury lies above it, while desire, ejaculation and sensation are disturbed' } }
    ]
  }

]);

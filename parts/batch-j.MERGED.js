/* ============================================================
   batch-j.js — دفعة ي من عناصر «جسم الإنسان»
   الجهاز الحوفي · خريطة القشرة الدماغية · العصي والمخاريط
   يُدمج لاحقاً في data.js — لا يُعدَّل data.js من هنا.
   ============================================================ */

ORGANS = ORGANS.concat([

/* ---------- الجهاز الحوفي (نصف كرة مخية شبه شفافة تظهر البنى العميقة) ---------- */
  {
    id: 'limbic', type: 'organ', system: 'nervous',
    name: { ar: 'الجهاز الحوفي', en: 'Limbic system' },
    img: 'img/limbic.webp', imgBack: 'img/limbic-back.webp', thumb: 'img/thumb-limbic.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'القشرة المخية (شفافة هنا)', en: 'Cerebral cortex (shown transparent)', x: 11, y: 29, side: 'left', go: 'brain',
        desc: {
          ar: 'نصفا الكرة المخية رسما هنا شبه شفافين لتظهر البنى العميقة من تحتهما. الجهاز الحوفي لا يرى من الخارج ابدا، فهو مطمور في قلب الدماغ تحت القشرة كلها.',
          en: 'The cerebral hemispheres are drawn semi-transparent here so the deep structures show through. The limbic system is never visible from outside; it lies buried in the core of the brain beneath the whole cortex.'
        }
      },
      {
        ar: 'التلفيف الحزامي', en: 'Cingulate gyrus', x: 35, y: 21, side: 'left',
        desc: {
          ar: 'شريط من القشرة يلتف كالقوس فوق الجسم الثفني. هو حلقة الوصل بين العاطفة والقرار، وينشط حين نحس بالالم او حين نلاحظ اننا اخطانا فنصحح انفسنا.',
          en: 'A ribbon of cortex arching over the corpus callosum. It is the link between emotion and decision, firing when we feel pain or notice that we have made a mistake and correct ourselves.'
        }
      },
      {
        ar: 'الجسم الثفني', en: 'Corpus callosum', x: 58, y: 31, side: 'right',
        desc: {
          ar: 'الجسر الليفي العريض الذي يصل نصفي الدماغ ويحمل الرسائل بينهما. يقوس فوق البنى الحوفية كلها، ولذلك يستعمل حداً يعرف به موضعها.',
          en: 'The broad fibre bridge that joins the two halves of the brain and carries messages between them. It arches over all the limbic structures, and so serves as the landmark that locates them.'
        }
      },
      {
        ar: 'القبو (الفورنكس)', en: 'Fornix', x: 65, y: 42, side: 'right',
        desc: {
          ar: 'حزمة الياف بيضاء تخرج من الحصين وتقوس صاعدة ثم تهبط الى تحت المهاد. هي الطريق الرئيسي الذي يرسل منه الحصين خبره الى بقية الدماغ، وقطعها يقطع الذاكرة.',
          en: 'A band of white fibres leaving the hippocampus, arching upward and then descending to the hypothalamus. It is the main road by which the hippocampus sends its news to the rest of the brain, and cutting it cuts memory.'
        }
      },
      {
        ar: 'المهاد', en: 'Thalamus', x: 47, y: 44, side: 'left',
        desc: {
          ar: 'كتلتان بيضاويتان في وسط الدماغ تمر بهما كل الحواس تقريبا قبل ان تصل القشرة، فهو محطة الفرز الكبرى. والشم وحده يدخل الدماغ دون ان يمر به.',
          en: 'Two egg-shaped masses at the centre of the brain. Almost every sense passes through them before reaching the cortex, so this is the great sorting station. Smell alone enters the brain without passing through it.'
        }
      },
      {
        ar: 'تحت المهاد والأجسام الحلمية', en: 'Hypothalamus and mammillary bodies', x: 50, y: 52, side: 'left',
        desc: {
          ar: 'كتلة صغيرة تحت المهاد تضبط الجوع والعطش وحرارة الجسم والنوم، وتترجم الانفعال الى تغير محسوس: خفقان القلب وتصبب العرق عند الخوف. والاجسام الحلمية نتوءان يستقبلان الياف القبو.',
          en: 'A small mass below the thalamus that governs hunger, thirst, body temperature and sleep, and translates emotion into something the body feels: the racing heart and the sweat of fear. The mammillary bodies are the two knobs that receive the fibres of the fornix.'
        }
      },
      {
        ar: 'الحصين', en: 'Hippocampus', x: 78, y: 50, side: 'right',
        desc: {
          ar: 'بنية ملتوية سميت بفرس البحر لشكلها. هي التي تحول ما نعيشه الان الى ذكرى تبقى، ولذلك يفقد المصاب بالزهايمر ما حدث قبل قليل بينما يظل يذكر طفولته: التخزين القديم سليم والتسجيل الجديد هو الذي تعطل.',
          en: 'A curved structure named after the seahorse for its shape. It turns what we are living now into a memory that stays, which is why a person with Alzheimer\'s loses what happened a moment ago while still recalling childhood: the old store is intact, it is the new recording that has failed.'
        }
      },
      {
        ar: 'اللوزة الدماغية', en: 'Amygdala', x: 59, y: 60, side: 'right',
        desc: {
          ar: 'كتلة بحجم اللوزة عند الطرف الامامي للحصين، وهي جرس الانذار. تحكم على المشهد بالخطر قبل ان يعيه الوعي، فتقفز يدك عن الافعى قبل ان تعرف انها افعى. وهي كذلك مركز الغضب والخوف وذاكرة ما اخافنا.',
          en: 'An almond-sized mass at the front tip of the hippocampus: the alarm bell. It judges a scene dangerous before awareness catches up, so your hand jumps back from the snake before you know it is a snake. It is also the seat of anger and fear, and of the memory of what frightened us.'
        }
      },
      {
        ar: 'البصلة الشمية', en: 'Olfactory bulb', x: 18, y: 58, side: 'left', go: 'nose',
        desc: {
          ar: 'منتفخ ممتد الى الامام اسفل الدماغ يستقبل اعصاب الشم من الانف ويسلم اشارتها مباشرة الى اللوزة والحصين دون المرور بالمهاد. ولهذا وحدها الرائحة تستدعي ذكرى قديمة وشعورا كاملا في لحظة.',
          en: 'A swelling reaching forward beneath the brain. It receives the smell nerves from the nose and hands their signal straight to the amygdala and hippocampus without passing through the thalamus. That is why a scent alone can summon an old memory, and a whole feeling with it, in an instant.'
        }
      },
      {
        ar: 'المخيخ', en: 'Cerebellum', x: 85, y: 76, side: 'right', go: 'brain',
        desc: {
          ar: 'الكتلة المخططة خلف الدماغ واسفله، تضبط التوازن ودقة الحركة وتوقيتها. هو خارج الجهاز الحوفي لكنه يظهر هنا ليدل على الموضع والاتجاه في الصورة.',
          en: 'The finely ridged mass behind and below the brain, governing balance and the precision and timing of movement. It lies outside the limbic system but appears here to give position and orientation in the picture.'
        }
      },
      {
        ar: 'جذع الدماغ', en: 'Brainstem', x: 62, y: 84, side: 'right', go: 'spinal-cord',
        desc: {
          ar: 'العمود الذي ينزل من الدماغ الى الحبل الشوكي، تمر فيه كل الاوامر النازلة والاحساسات الصاعدة، وفيه مراكز التنفس ونبض القلب واليقظة. وتنزل اليه اوامر تحت المهاد فتصير خفقانا وعرقا.',
          en: 'The column running down from the brain to the spinal cord. Every descending command and every ascending sensation passes through it, and it houses the centres for breathing, heartbeat and wakefulness. Orders from the hypothalamus travel down it and become a pounding heart and sweat.'
        }
      }
    ],
    desc: {
      ar: 'الجهاز الحوفي حلقة من البنى القديمة تقع في عمق الدماغ تحت القشرة وتلتف حول الجسم الثفني والمهاد. ليس عضواً واحداً بل شبكة: الحصين واللوزة الدماغية والقبو والتلفيف الحزامي وتحت المهاد والبصلة الشمية. هنا يُصنع ما نتذكره وما نخافه وما نشتهيه، وهنا تلتقي الذاكرة بالعاطفة، ولذلك تكون الذكرى المشحونة بالمشاعر أثبت في الذهن من ذكرى باردة.',
      en: 'The limbic system is a ring of older structures deep in the brain, beneath the cortex and curling around the corpus callosum and the thalamus. It is not one organ but a network: the hippocampus, the amygdala, the fornix, the cingulate gyrus, the hypothalamus and the olfactory bulb. Here is made what we remember, what we fear and what we crave; here memory meets emotion, which is why a memory charged with feeling holds far more firmly than a cold one.'
    },
    func: {
      ar: 'تحويل التجربة الحاضرة إلى ذكرى دائمة عبر الحصين، وإطلاق إنذار الخوف والغضب عبر اللوزة الدماغية قبل أن يعي الوعي، وضبط الجوع والعطش والحرارة والنوم والرغبة عبر تحت المهاد، وترجمة الانفعال إلى تغيّر في الجسم من خفقان وعرق واتساع حدقة. ويربط الشمّ مباشرة بالذاكرة والعاطفة لأن البصلة الشمية تسلّم إشارتها إلى اللوزة والحصين دون المرور بالمهاد.',
      en: 'Turning present experience into lasting memory through the hippocampus; raising the alarm of fear and anger through the amygdala before awareness catches up; regulating hunger, thirst, temperature, sleep and desire through the hypothalamus; and translating emotion into bodily change, from a pounding heart to sweat and widened pupils. It also ties smell directly to memory and feeling, because the olfactory bulb delivers its signal to the amygdala and hippocampus without passing through the thalamus.'
    },
    location: { ar: 'في عمق نصفي الكرة المخية على جانبي المهاد، تحت الجسم الثفني وفوق جذع الدماغ، ويمتد الحصين واللوزة داخل الفصّ الصدغي', en: 'Deep within the cerebral hemispheres on either side of the thalamus, below the corpus callosum and above the brainstem, with the hippocampus and amygdala extending into the temporal lobe' },
    size: { ar: 'الحصين نحو ٤ سم طولاً في كل جانب، واللوزة نحو ١٫٥ سم بحجم حبة اللوز، والمهاد نحو ٣ سم', en: 'The hippocampus is about 4 cm long on each side, the amygdala about 1.5 cm — the size of an almond — and the thalamus about 3 cm' },
    short: { ar: 'حيث تلتقي الذاكرة بالعاطفة في عمق الدماغ', en: 'Where memory meets emotion, deep in the brain' },
    parts: [
      { ar: 'الحصين', en: 'The hippocampus' },
      { ar: 'اللوزة الدماغية', en: 'The amygdala' },
      { ar: 'القبو والتلفيف الحزامي', en: 'The fornix and the cingulate gyrus' },
      { ar: 'تحت المهاد والبصلة الشمية', en: 'The hypothalamus and the olfactory bulb' }
    ],
    diseases: [
      { name: { ar: 'داء ألزهايمر', en: 'Alzheimer\'s disease' }, desc: { ar: 'يبدأ التلف في الحصين قبل غيره، فينسى المريض ما حدث قبل قليل ويظلّ يذكر البعيد من عمره', en: 'The damage begins in the hippocampus before anywhere else, so the person forgets what happened moments ago yet still recalls the distant past' } },
      { name: { ar: 'صرع الفصّ الصدغي', en: 'Temporal lobe epilepsy' }, desc: { ar: 'نوبات تنطلق من الحصين أو اللوزة، وقد تسبقها رائحة غريبة أو إحساس بأن المشهد حدث من قبل', en: 'Seizures starting in the hippocampus or amygdala, sometimes heralded by a strange smell or a feeling that the scene has happened before' } },
      { name: { ar: 'اضطراب ما بعد الصدمة', en: 'Post-traumatic stress disorder' }, desc: { ar: 'تبقى اللوزة على إنذار دائم بعد حادث قاسٍ، فيعيد المصاب عيش اللحظة كأنها تحدث الآن', en: 'The amygdala stays on permanent alarm after a harsh event, so the person relives the moment as though it were happening now' } },
      { name: { ar: 'اضطرابات القلق', en: 'Anxiety disorders' }, desc: { ar: 'فرط نشاط اللوزة وضعف كبح القشرة الجبهية لها، فيتحوّل الحذر الطبيعي إلى خوف متصل بلا سبب ظاهر', en: 'An overactive amygdala with weak restraint from the frontal cortex, so ordinary caution becomes continuous fear with no visible cause' } },
      { name: { ar: 'متلازمة كورساكوف', en: 'Korsakoff syndrome' }, desc: { ar: 'تلف الأجسام الحلمية ومسار القبو من نقص فيتامين ب١ المزمن، فيعجز المريض عن تكوين ذكريات جديدة', en: 'Damage to the mammillary bodies and the fornix pathway from chronic vitamin B1 deficiency, leaving the person unable to form new memories' } }
    ]
  },

/* ---------- خريطة القشرة الدماغية (الشريطان الحركي والحسي) ---------- */
  {
    id: 'cortex-map', type: 'organ', system: 'nervous',
    name: { ar: 'خريطة القشرة الدماغية', en: 'The cortical body map' },
    img: 'img/cortex-map.webp', imgBack: 'img/cortex-map-back.webp', thumb: 'img/thumb-cortex-map.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'القدم والساق', en: 'The foot and leg', x: 46, y: 12, side: 'left',
        desc: {
          ar: 'القدم والساق في اعلى الشريط عند الخط الاوسط، وتاخذان مساحة صغيرة. الترتيب هنا مقلوب: القدم فوق والوجه تحت، ولذلك تسمى الخريطة قزم القشرة.',
          en: 'The foot and leg sit at the top of the strip near the midline and take only a small patch. The order here is upside down: the foot above and the face below, which is why the map is called the cortical homunculus.'
        }
      },
      {
        ar: 'الشريط الحركي', en: 'Motor strip', x: 40, y: 20, side: 'left', go: 'muscles',
        desc: {
          ar: 'الشريط الاحمر امام الاخدود المركزي، ومنه تنطلق اوامر الحركة الارادية نازلة الى الحبل الشوكي ثم الى العضلات. وكل نصف يحرك الجانب المقابل من الجسم لان الالياف تتقاطع في جذع الدماغ.',
          en: 'The red band in front of the central sulcus. From it the commands for voluntary movement set out, down to the spinal cord and on to the muscles. Each half moves the opposite side of the body, because the fibres cross over in the brainstem.'
        }
      },
      {
        ar: 'الجذع والذراع', en: 'The trunk and arm', x: 46, y: 28, side: 'left',
        desc: {
          ar: 'الجذع والذراع في وسط الشريط ومساحتهما ضيقة رغم كبر حجمهما في الجسم، لان حركتهما اجمالية لا تحتاج دقة عالية.',
          en: 'The trunk and arm lie in the middle of the strip and occupy a narrow patch despite their size in the body, because their movement is broad and does not demand fine precision.'
        }
      },
      {
        ar: 'اليد (كبيرة جداً)', en: 'The hand (drawn very large)', x: 33, y: 36, side: 'left', go: 'hand',
        desc: {
          ar: 'اليد رسمت اكبر من الجذع والساقين مجتمعين، وهذي هي الفكرة كلها: المساحة في القشرة ليست بحجم العضو بل بدقة التحكم فيه. اصابعك تحتاج دقة هائلة وظهرك لا يحتاجها.',
          en: 'The hand is drawn larger than the trunk and both legs together, and that is the whole idea: cortical area follows not the size of the part but the fineness of control over it. Your fingers need enormous precision; your back does not.'
        }
      },
      {
        ar: 'الوجه', en: 'The face', x: 26, y: 44, side: 'left',
        desc: {
          ar: 'الوجه في اسفل الشريط، ومساحته واسعة لان عضلات التعبير كثيرة ودقيقة: رفعة حاجب او ارتجافة شفة تكفي لتغير معنى الكلام كله.',
          en: 'The face sits at the bottom of the strip and takes a wide patch, because the muscles of expression are many and fine: a raised brow or a trembling lip is enough to change the whole meaning of what is said.'
        }
      },
      {
        ar: 'الشفتان واللسان', en: 'The lips and tongue', x: 32, y: 52, side: 'left', go: 'lips',
        desc: {
          ar: 'الشفتان واللسان اكبر ما في الخريطة كلها، لان الكلام والمضغ والبلع تحتاج حركات دقيقة سريعة متتابعة. لسانك يغير موضعه عشرات المرات في الثانية حين تتكلم.',
          en: 'The lips and tongue are the largest things on the whole map, because speech, chewing and swallowing demand fine, fast, successive movements. Your tongue changes position dozens of times a second when you speak.'
        }
      },
      {
        ar: 'الأخدود المركزي', en: 'Central sulcus', x: 52, y: 9, side: 'right',
        desc: {
          ar: 'الشق العميق الذي قطع الدماغ عنده في هذي الصورة، وهو الحد الفاصل بين العالمين: امامه الحركة وخلفه الاحساس. وهما شريطان متجاوران يتحدثان عبر الشق باستمرار.',
          en: 'The deep groove where the brain has been cut in this picture, and the border between two worlds: movement in front of it, sensation behind it. The two strips lie side by side and talk across the groove without pause.'
        }
      },
      {
        ar: 'الشريط الحسي', en: 'Sensory strip', x: 67, y: 22, side: 'right', go: 'skin-receptors',
        desc: {
          ar: 'الشريط الازرق خلف الاخدود المركزي، وفيه تصل احساسات الجلد من لمس وضغط وحرارة والم بعد ان تصعد في الحبل الشوكي وتمر بالمهاد. وله خريطة جسم مثل الحركي تماما.',
          en: 'The blue band behind the central sulcus. Here the sensations of the skin arrive, touch and pressure and warmth and pain, after climbing the spinal cord and passing through the thalamus. It carries a body map exactly like the motor one.'
        }
      },
      {
        ar: 'اليد في الخريطة الحسية', en: 'The hand on the sensory map', x: 68, y: 36, side: 'right',
        desc: {
          ar: 'اليد ضخمة هنا ايضا، لان اطراف الاصابع اغزر مناطق الجلد بالمستقبلات. ولهذا تقرا اصبعك حرف برايل بينما لا يميز ظهرك نقطتين متباعدتين اربعة سنتيمترات.',
          en: 'The hand is huge here too, because the fingertips are the most densely supplied patch of skin in the body. That is why a fingertip reads a braille letter while the back cannot tell apart two points four centimetres away.'
        }
      },
      {
        ar: 'المادة البيضاء (سطح القطع)', en: 'White matter (the cut face)', x: 53, y: 44, side: 'right', go: 'neuron',
        desc: {
          ar: 'السطح الكريمي الظاهر عند القطع، وهو حزم المحاور المغلفة بالميالين النازلة من القشرة. المادة الرمادية على السطح فيها اجسام الخلايا، والبيضاء تحتها هي اسلاكها.',
          en: 'The cream surface exposed by the cut: bundles of myelin-sheathed axons descending from the cortex. The grey matter at the surface holds the cell bodies; the white matter beneath is their wiring.'
        }
      },
      {
        ar: 'الشفتان في الخريطة الحسية', en: 'The lips on the sensory map', x: 74, y: 52, side: 'right',
        desc: {
          ar: 'الشفتان في الخريطة الحسية بحجم لا يناسب حجمهما في الوجه. جرب ان تحس بشعرة على شفتك وباخرى على ظهرك لترى الفرق الذي ترسمه هذي المساحة.',
          en: 'On the sensory map the lips take a share out of all proportion to their size on the face. Feel a single hair against your lip, then against your back, and you feel the difference this patch of cortex makes.'
        }
      },
      {
        ar: 'المخيخ', en: 'Cerebellum', x: 75, y: 80, side: 'right', go: 'brain',
        desc: {
          ar: 'الكتلة المخططة اسفل الخلف. لا يصدر الحركة لكنه يصححها لحظة بلحظة: يوازن ويضبط التوقيت فتخرج الحركة سلسة بدل ان تكون متقطعة.',
          en: 'The finely ridged mass at the lower rear. It does not start movement but corrects it moment by moment, balancing and timing so that the motion comes out smooth instead of jerky.'
        }
      },
      {
        ar: 'جذع الدماغ', en: 'Brainstem', x: 60, y: 86, side: 'right', go: 'spinal-cord',
        desc: {
          ar: 'العمود النازل الى الحبل الشوكي. في اسفله تتقاطع الالياف الحركية الى الجانب الاخر، ولذلك تصيب الجلطة في النصف الايمن شلل النصف الايسر من الجسم.',
          en: 'The column descending to the spinal cord. Low in it the motor fibres cross to the other side, which is why a stroke in the right hemisphere paralyses the left side of the body.'
        }
      }
    ],
    desc: {
      ar: 'على جانبَي الأخدود المركزي يجلس شريطان من القشرة، أمامه الشريط الحركي ووراءه الشريط الحسي، وعلى كلٍّ منهما رُسم جسم كامل مقلوب: القدم عند الأعلى قرب الخط الأوسط، ثم الجذع والذراع، ثم اليد، ثم الوجه والشفتان عند الأسفل. لكن هذا الجسم مشوَّه عمداً، لأن نصيب كل عضو من القشرة يقاس بدقّة التحكّم فيه لا بحجمه؛ فاليد والشفتان يأخذان مساحة أوسع من الجذع والساقين مجتمعين، ويُعرف هذا الشكل باسم قزم القشرة.',
      en: 'On either side of the central sulcus sit two bands of cortex: the motor strip in front and the sensory strip behind. On each of them a whole body is drawn upside down — the foot at the top near the midline, then the trunk and arm, then the hand, then the face and lips at the bottom. But this body is deliberately distorted, because a part\'s share of cortex is measured by the fineness of its control, not by its size: the hand and lips claim more surface than the trunk and both legs together. The figure is known as the cortical homunculus.'
    },
    func: {
      ar: 'الشريط الحركي يصدر أوامر الحركة الإرادية فتنزل عبر جذع الدماغ والحبل الشوكي إلى العضلات، والشريط الحسي يستقبل رسائل الجلد والمفاصل من لمس وضغط وحرارة وألم بعد أن تمر بالمهاد. والألياف تتقاطع في جذع الدماغ، فكل نصف يحرّك الجانب المقابل ويحسّ به. وهذه الخريطة ليست ثابتة: من يتمرّن على العزف أو القراءة باللمس تتّسع عنده مساحة اليد فعلاً، ومن يفقد عضواً تُعاد المساحة توزيعاً على جيرانها.',
      en: 'The motor strip issues the commands for voluntary movement, which travel down through the brainstem and spinal cord to the muscles; the sensory strip receives the messages of skin and joints — touch, pressure, warmth and pain — after they pass through the thalamus. The fibres cross in the brainstem, so each half moves and feels the opposite side. The map is not fixed: in someone who trains at an instrument or reads by touch the hand territory genuinely widens, and when a limb is lost its territory is redistributed to its neighbours.'
    },
    location: { ar: 'على سطح نصفي الكرة المخية، شريط أمام الأخدود المركزي وشريط خلفه، يمتد كلٌّ منهما من الخط الأوسط في الأعلى إلى الجانب في الأسفل', en: 'On the surface of the cerebral hemispheres: one band in front of the central sulcus and one behind it, each running from the midline above down to the side below' },
    size: { ar: 'كل شريط بعرض نحو ٢ سم وطول نحو ١٠ سم، وسُمك القشرة نحو ٢٫٥ ملم فقط', en: 'Each strip is about 2 cm wide and roughly 10 cm long, and the cortex itself is only about 2.5 mm thick' },
    short: { ar: 'المساحة تُقاس بدقّة التحكّم لا بحجم العضو', en: 'Cortical space is measured by precision of control, not by size' },
    parts: [
      { ar: 'الشريط الحركي أمام الأخدود', en: 'The motor strip in front of the sulcus' },
      { ar: 'الشريط الحسي خلف الأخدود', en: 'The sensory strip behind the sulcus' },
      { ar: 'الأخدود المركزي الفاصل بينهما', en: 'The central sulcus dividing them' },
      { ar: 'قزم القشرة: خريطة الجسم المشوّهة', en: 'The homunculus: the distorted body map' }
    ],
    diseases: [
      { name: { ar: 'الجلطة الدماغية', en: 'Stroke' }, desc: { ar: 'انسداد شريان أو نزفه يقتل بقعة من الشريط، فيُشلّ العضو الذي كانت تمثّله تلك البقعة وحده', en: 'A blocked or bleeding artery kills one patch of the strip, and only the part that patch represented is paralysed' } },
      { name: { ar: 'الشلل النصفي', en: 'Hemiplegia' }, desc: { ar: 'إصابة واسعة في شريط أحد النصفين فيضعف الجانب المقابل من الجسم كله، لأن الألياف تتقاطع في جذع الدماغ', en: 'A wide injury to one hemisphere\'s strip weakens the whole opposite side of the body, because the fibres cross in the brainstem' } },
      { name: { ar: 'الصرع الجاكسوني', en: 'Jacksonian seizure' }, desc: { ar: 'تشنّج يبدأ في الإبهام أو زاوية الفم ثم يزحف على الطرف بترتيب الخريطة نفسه، فيدلّ الطبيب على موضع البؤرة', en: 'A twitch that starts in the thumb or the corner of the mouth and marches along the limb in the very order of the map, telling the doctor where the focus lies' } },
      { name: { ar: 'الطرف الشبحي', en: 'Phantom limb' }, desc: { ar: 'يشعر المبتور بيده المفقودة لأن مساحتها في الخريطة باقية، وقد يغزوها جيرانها فيحسّ باليد حين يُلمس وجهه', en: 'An amputee still feels the missing hand because its territory on the map remains; neighbours may invade it, so a touch on the face is felt in the hand' } },
      { name: { ar: 'خزل الوجه المركزي', en: 'Central facial palsy' }, desc: { ar: 'إصابة الجزء السفلي من الشريط الحركي فيتدلّى نصف الوجه السفلي بينما يبقى الجبين قادراً على الحركة', en: 'Damage to the lower part of the motor strip drops the lower half of the face while the forehead still moves' } }
    ]
  },

/* ---------- العصي والمخاريط (كتلة مكبّرة من طبقات الشبكية) ---------- */
  {
    id: 'retina', type: 'organ', system: 'senses',
    name: { ar: 'العصي والمخاريط', en: 'Rods and cones' },
    img: 'img/retina.webp', imgBack: 'img/retina-back.webp', thumb: 'img/thumb-retina.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'ظهارة الصبغة', en: 'Pigment epithelium', x: 45, y: 5, side: 'left',
        desc: {
          ar: 'الطبقة الداكنة خلف المستقبلات، حبيباتها السوداء تبتلع الضوء الزائد فلا ينعكس داخل العين ويشوش الصورة. وهي كذلك تغذي المستقبلات وتبتلع اطراف اقراصها المستهلكة كل يوم.',
          en: 'The dark layer behind the receptors. Its black granules swallow stray light so it cannot bounce about inside the eye and blur the image. It also feeds the receptors and each day devours the worn-out tips of their discs.'
        }
      },
      {
        ar: 'العصي', en: 'Rod cells', x: 7, y: 20, side: 'left',
        desc: {
          ar: 'الخلايا الرمادية الطويلة النحيلة، ونحو ١٢٠ مليونا منها في العين الواحدة. شديدة الحساسية حتى انها تستجيب لفوتون واحد، لكنها لا تفرق بين الالوان. ولهذا الليل بلا لون: انت ترى بعصيك وحدها.',
          en: 'The tall, slender grey cells, some 120 million in a single eye. They are so sensitive that a single photon can excite one, yet they cannot tell colours apart. That is why night has no colour: you are seeing with your rods alone.'
        }
      },
      {
        ar: 'أنواع المخاريط الثلاثة', en: 'The three cone types', x: 34, y: 26, side: 'left',
        desc: {
          ar: 'ثلاثة انواع لونت هنا بالاحمر والاخضر والازرق، كل نوع يحمل صبغة تمتص حزمة موجات مختلفة. لا يوجد في العين مستقبل للاصفر ولا للبنفسجي: كل لون تراه يبنى في الدماغ من نسبة استجابة الانواع الثلاثة.',
          en: 'Three kinds, tinted here red, green and blue, each carrying a pigment that absorbs a different band of wavelengths. The eye has no receptor for yellow or for violet: every colour you see is built in the brain from the ratio of the three responses.'
        }
      },
      {
        ar: 'طبقة النوى', en: 'The nuclear layer', x: 43, y: 37, side: 'left',
        desc: {
          ar: 'اجسام الخلايا ونواها مرصوصة تحت الاقسام الخارجية. النواة هي مصنع البروتين الذي يجدد الصبغة الضوئية باستمرار، فالمستقبل يستهلك صبغته مع كل ومضة ويعيد بناءها.',
          en: 'The cell bodies and their nuclei, packed beneath the outer segments. The nucleus is the protein factory that keeps renewing the light-sensitive pigment, for the receptor spends its pigment with every flash and must rebuild it.'
        }
      },
      {
        ar: 'النهايات المشبكية', en: 'Synaptic endings', x: 26, y: 45, side: 'left',
        desc: {
          ar: 'اطراف منتفخة اسفل كل مستقبل، عندها يسلم الاشارة الى الخلية التالية. والغريب ان المستقبل يفرز اكثر ما يفرز في الظلام، فالضوء يخفت اشارته لا يزيدها.',
          en: 'The swollen tips beneath each receptor, where it hands its signal to the next cell. Oddly, a receptor releases most in the dark: light quietens its signal rather than raising it.'
        }
      },
      {
        ar: 'الخلايا العقدية', en: 'Ganglion cells', x: 17, y: 71, side: 'left', go: 'neuron',
        desc: {
          ar: 'الخلايا الكبيرة الذهبية في العمق، وهي اخر محطة في الشبكية. محاورها هي بالضبط الياف العصب البصري، فالعصب البصري ليس عصبا طرفيا بل جزء من الدماغ خرج الى العين.',
          en: 'The large golden cells in the depths, the last station in the retina. Their axons are precisely the fibres of the optic nerve, so that nerve is not a peripheral nerve at all but a piece of brain that has come out to the eye.'
        }
      },
      {
        ar: 'طبقة الألياف العصبية', en: 'Nerve fibre layer', x: 25, y: 84, side: 'left',
        desc: {
          ar: 'الالياف تزحف على السطح الداخلي للشبكية متجهة كلها الى نقطة واحدة. الضوء يمر عبر هذي الطبقة وكل الطبقات فوقها قبل ان يصل المستقبلات في الخلف: تصميم يبدو مقلوبا، وهو مقلوب فعلا.',
          en: 'The fibres creep across the inner surface of the retina, all heading for a single point. Light must cross this layer and every layer above it before reaching the receptors at the back: a design that looks inside-out, and truly is.'
        }
      },
      {
        ar: 'الأقسام الخارجية (أقراص متراصة)', en: 'Outer segments (stacked discs)', x: 52, y: 16, side: 'right',
        desc: {
          ar: 'الجزء العلوي المخطط من كل مستقبل، وهو رزمة من مئات الاقراص الغشائية المرصوصة كصفحات كتاب، محشوة بالصبغة الضوئية. هذي الاقراص هي التي تلتقط الفوتون وتبدل شكل جزيئها فتنطلق الاشارة.',
          en: 'The striped upper part of each receptor: a stack of hundreds of membrane discs piled like the pages of a book and loaded with light-sensitive pigment. These discs catch the photon and change the shape of their molecule, and the signal begins.'
        }
      },
      {
        ar: 'المخاريط', en: 'Cone cells', x: 61, y: 24, side: 'right',
        desc: {
          ar: 'الخلايا الاقصر الاعرض المدببة، ونحو ٦ ملايين في العين. تحتاج ضوءا كافيا لتعمل، لكنها هي التي ترى اللون والتفصيل الدقيق. وتتكدس في مركز الشبكية حيث ترى اوضح ما ترى.',
          en: 'The shorter, broader, tapering cells, some 6 million in an eye. They need decent light to work, but they are what sees colour and fine detail, and they crowd into the centre of the retina where vision is sharpest.'
        }
      },
      {
        ar: 'الخلايا ثنائية القطب', en: 'Bipolar cells', x: 48, y: 54, side: 'right',
        desc: {
          ar: 'المحطة الوسطى: تستقبل من المستقبلات وتسلم الى الخلايا العقدية. وهي لا تنقل الاشارة كما هي بل تقارن كل بقعة بجيرانها، فتبرز الحواف والحدود قبل ان تخرج الصورة من العين اصلا.',
          en: 'The middle station: they take from the receptors and pass to the ganglion cells. They do not relay the signal untouched but compare each spot with its neighbours, sharpening edges and borders before the image has even left the eye.'
        }
      },
      {
        ar: 'خلايا الربط الأفقية', en: 'Horizontal connecting cells', x: 60, y: 61, side: 'right',
        desc: {
          ar: 'خلايا تمتد عرضا بين الطبقات وتربط الجيران بعضهم ببعض. هي سبب ان البقعة البيضاء تبدو انصع وسط محيط داكن: الشبكية تعالج التباين قبل ان ترسل شيئا.',
          en: 'Cells that spread sideways between the layers and tie neighbours to one another. They are why a white patch looks brighter against a dark surround: the retina works on contrast before it sends anything at all.'
        }
      },
      {
        ar: 'ألياف العصب البصري', en: 'Optic nerve fibres', x: 90, y: 87, side: 'right', go: 'eye',
        desc: {
          ar: 'الالياف تتجمع وتخرج من العين في حزمة واحدة. وعند مخرجها لا مستقبلات اطلاقا، فهناك بقعة عمياء في كل عين لا نلاحظها لان الدماغ يملؤها بما حولها.',
          en: 'The fibres gather and leave the eye as a single bundle. At their exit there are no receptors at all, so each eye has a blind spot we never notice, because the brain fills it in from what surrounds it.'
        }
      }
    ],
    desc: {
      ar: 'الشبكية غشاء رقيق يبطّن قاع العين، وفيه تتحوّل موجة الضوء إلى إشارة عصبية. مستقبلاتها نوعان: العصيّ، خلايا طويلة نحيلة شديدة الحساسية لا ترى لوناً، والمخاريط، أقصر وأعرض وثلاثة أنواع تحسّ بالأحمر والأخضر والأزرق. وفوقهما طبقات من خلايا ثنائية القطب وعقدية تعالج الصورة وتحدّ حوافها قبل أن تغادر العين. والعجيب أن الطبقات مرتّبة بالمقلوب: الضوء يعبر كل الخلايا أولاً ثم يصل المستقبلات القابعة في الخلف أمام ظهارة الصبغة الداكنة.',
      en: 'The retina is a thin membrane lining the back of the eye, and it is here that a wave of light becomes a nerve signal. Its receptors are of two kinds: rods, tall slender cells of extreme sensitivity that see no colour, and cones, shorter and broader, in three types tuned to red, green and blue. Above them lie layers of bipolar and ganglion cells that work on the image and sharpen its edges before it leaves the eye. Strangely, the layers are arranged back to front: light passes through every cell first and only then reaches the receptors sitting at the rear, against the dark pigment epithelium.'
    },
    func: {
      ar: 'التقاط الفوتون بصبغة محفوظة في أقراص القسم الخارجي، فيتبدّل شكل جزيء الصبغة وتنطلق سلسلة تنتهي بتغيّر في إشارة الخلية. تعمل العصيّ في الضوء الخافت وحدها فترى بها ليلاً بلا ألوان، وتعمل المخاريط في الضوء الكافي فترى بها اللون والتفصيل. ولا يوجد مستقبل للأصفر: الدماغ يبني كل لون من نسبة استجابة الأنواع الثلاثة. ثم تمرّ الإشارة إلى الخلايا ثنائية القطب فالعقدية، ومحاور العقدية هي ألياف العصب البصري.',
      en: 'Catching a photon in a pigment held within the discs of the outer segment: the pigment molecule changes shape and a chain of events ends in a change in the cell\'s signal. The rods work alone in dim light, and with them you see at night without colour; the cones work in adequate light, and with them you see colour and detail. There is no receptor for yellow: the brain builds every colour from the ratio of the three responses. The signal then passes to the bipolar cells and on to the ganglion cells, whose axons are the fibres of the optic nerve.'
    },
    location: { ar: 'الطبقة الداخلية المبطّنة لقاع كرة العين، خلف الجسم الزجاجي وأمام المشيمية', en: 'The innermost layer lining the back of the eyeball, behind the vitreous and in front of the choroid' },
    size: { ar: 'سُمك الشبكية نحو ٠٫٢ ملم، وفيها نحو ١٢٠ مليون عصية و٦ ملايين مخروط ومليون خلية عقدية', en: 'The retina is about 0.2 mm thick and holds some 120 million rods, 6 million cones and a million ganglion cells' },
    short: { ar: 'هنا يتحوّل الضوء إلى إحساس', en: 'Where light becomes sensation' },
    parts: [
      { ar: 'العصيّ للضوء الخافت', en: 'The rods, for dim light' },
      { ar: 'المخاريط الثلاثة للّون', en: 'The three cones, for colour' },
      { ar: 'الخلايا ثنائية القطب والعقدية', en: 'The bipolar and ganglion cells' },
      { ar: 'ظهارة الصبغة خلف المستقبلات', en: 'The pigment epithelium behind the receptors' }
    ],
    diseases: [
      { name: { ar: 'التنكّس البقعي', en: 'Macular degeneration' }, desc: { ar: 'تلف مركز الشبكية حيث تتكدّس المخاريط، فتضيع القراءة وتمييز الوجوه ويبقى النظر الجانبي', en: 'Damage to the centre of the retina where the cones crowd, so reading and recognising faces are lost while side vision remains' } },
      { name: { ar: 'التهاب الشبكية الصباغي', en: 'Retinitis pigmentosa' }, desc: { ar: 'مرض وراثي تموت فيه العصيّ أولاً، فيبدأ بالعمى الليلي ثم يضيق مجال الرؤية حتى يصير كالنظر من أنبوب', en: 'An inherited disease in which the rods die first, so it begins with night blindness and then narrows the field until sight is like looking down a tube' } },
      { name: { ar: 'عمى الألوان', en: 'Colour blindness' }, desc: { ar: 'نقص نوع من المخاريط أو خلل في صبغته، وأشيعه اشتباه الأحمر بالأخضر، ويصيب الذكور أكثر لأن جيناته على الكروموسوم إكس', en: 'One cone type missing or its pigment faulty; the commonest form confuses red with green, and it strikes males more often because the genes sit on the X chromosome' } },
      { name: { ar: 'اعتلال الشبكية السكّري', en: 'Diabetic retinopathy' }, desc: { ar: 'ارتفاع السكر يُتلف شعيرات الشبكية فترشح وتنزف وتنبت أوعية هشّة جديدة، وهو من أكثر أسباب فقد البصر عند البالغين', en: 'High blood sugar damages the retinal capillaries, which leak and bleed and sprout fragile new vessels; it is among the leading causes of sight loss in adults' } },
      { name: { ar: 'انفصال الشبكية', en: 'Retinal detachment' }, desc: { ar: 'انفكاك الشبكية عن الطبقة التي تغذّيها، يبدأ بومضات وذبابات ثم ستارة سوداء تزحف، وهو حالة إسعافية تحتاج جراحة سريعة', en: 'The retina peels away from the layer that feeds it, starting with flashes and floaters and then a black curtain creeping across; it is an emergency needing prompt surgery' } }
    ]
  }

]);

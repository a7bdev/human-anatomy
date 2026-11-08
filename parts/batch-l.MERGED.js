/* ============================================================
   batch-l.js — دفعة ل من عناصر «جسم الإنسان»
   الأعصاب القحفية · الدوران الجنيني · الانقسام المنصّف
   يُدمج لاحقاً في data.js — لا يُعدَّل data.js من هنا.
   ============================================================ */

ORGANS = ORGANS.concat([

/* ---------- الأعصاب القحفية (الدماغ من أسفل، كل زوج بلون) ---------- */
  {
    id: 'cranial-nerves', type: 'organ', system: 'nervous',
    name: { ar: 'الأعصاب القحفية', en: 'Cranial nerves' },
    img: 'img/cranial-nerves.webp', imgBack: 'img/cranial-nerves-back.webp', thumb: 'img/thumb-cranial-nerves.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'العصب الشمي (الأول) وبصلته', en: 'Olfactory nerve (I) and bulb', x: 43, y: 4, side: 'left', go: 'nose',
        desc: {
          ar: 'البصلتان الذهبيتان الممتدتان الى الامام في اعلى الصورة. لا يبدا هذا العصب بجذع واحد بل بعشرات الخيوط الرفيعة التي تخترق عظما مثقبا في سقف الانف. ولهذا يفقد كثير من الناس حاسة الشم بعد ارتجاج في الراس: الضربة تقص هذي الخيوط عند العظم.',
          en: 'The two golden bulbs reaching forward at the top of the picture. This nerve does not begin as one trunk but as dozens of fine threads piercing a sieve-like bone in the roof of the nose. That is why many people lose their sense of smell after a head knock: the blow shears these threads where they cross the bone.'
        }
      },
      {
        ar: 'العصب البصري (الثاني)', en: 'Optic nerve (II)', x: 41, y: 15, side: 'left', go: 'eye',
        desc: {
          ar: 'الذراع الكريمية الممتدة الى الامام نحو محجر العين. هو العصب الوحيد الذي يحمل الرؤية كلها، وفيه نحو مليون ليف لكل عين. وهو في الحقيقة امتداد من الدماغ نفسه لا عصبا طرفيا، ولهذا لا يصلح اذا تلف.',
          en: 'The cream-coloured arm reaching forward toward the eye socket. It is the only nerve that carries sight, about a million fibres for each eye. It is really an outgrowth of the brain itself rather than a peripheral nerve, which is why it does not repair once damaged.'
        }
      },
      {
        ar: 'العصب البَكَري (الرابع)', en: 'Trochlear nerve (IV)', x: 41, y: 30, side: 'left',
        desc: {
          ar: 'يمر هنا الى جانب المحرك للعين متجها معه الى المحجر. وهو ارفع الاعصاب القحفية واطولها مسارا داخل الجمجمة، والوحيد الذي يخرج من ظهر جذع الدماغ ثم يلتف حوله. يحرك عضلة واحدة تدير العين الى الاسفل والداخل، واذا اصيب مال الراس الى جهة ليعوض صاحبه ازدواج الرؤية.',
          en: 'It passes here beside the oculomotor nerve on its way to the eye socket. It is the slenderest cranial nerve and has the longest course inside the skull, and the only one that leaves the back of the brainstem and then curls around it. It moves a single muscle that turns the eye down and inward; when it is injured the head tilts to one side to cancel the double vision.'
        }
      },
      {
        ar: 'العصب ثلاثي التوائم (الخامس)', en: 'Trigeminal nerve (V)', x: 33, y: 40, side: 'left',
        desc: {
          ar: 'الجذع الازرق الضخم الخارج من جانب الجسر، وهو اكبر الاعصاب القحفية. يتفرع ثلاثة فروع كما يقول اسمه: للجبهة والعين، وللخد والفك الاعلى، وللفك الاسفل. هو الذي يحمل كل احساس الوجه، والمه المعروف بالتهاب العصب الخامس يوصف بانه من اشد الالام التي يعرفها الطب.',
          en: 'The thick blue trunk leaving the side of the pons, the largest of the cranial nerves. It splits into three branches as its name says: to the forehead and eye, to the cheek and upper jaw, and to the lower jaw. It carries all the sensation of the face, and the pain of trigeminal neuralgia is described as one of the severest pains known to medicine.'
        }
      },
      {
        ar: 'العصب الوجهي (السابع)', en: 'Facial nerve (VII)', x: 28, y: 47, side: 'left', go: 'facial-muscles',
        desc: {
          ar: 'الحلقة الخضراء المتجهة الى الاذن الداخلية مع جارها الثامن. هو الذي يحرك كل تعابير الوجه: الابتسامة والتقطيب واغماض الجفن. واذا التهب فجاة سقط نصف الوجه كله (شلل بل) فلا تغمض العين ولا يرتفع طرف الفم من تلك الجهة. ويحمل ايضا التذوق من مقدمة اللسان.',
          en: 'The green loop heading for the inner ear alongside its neighbour, the eighth. It drives every expression of the face: the smile, the frown, the closing of the eyelid. If it becomes suddenly inflamed one whole half of the face drops (Bell palsy), so the eye will not close and the corner of the mouth will not lift on that side. It also carries taste from the front of the tongue.'
        }
      },
      {
        ar: 'العصب الدهليزي القوقعي (الثامن)', en: 'Vestibulocochlear nerve (VIII)', x: 30, y: 54, side: 'left', go: 'ear',
        desc: {
          ar: 'الانبوب الاصفر الداخل الى الاذن الداخلية، ويتحول طرفه الى اللون الفيروزي حيث يدخل القوقعة الحلزونية. يحمل شيئين معا: السمع من القوقعة، والتوازن من القنوات الهلالية الثلاث الظاهرة فوقها. ولهذا يدوخ الانسان حين يلتهب هذا العصب كما يطنّ.',
          en: 'The yellow tube entering the inner ear, its tip turning turquoise where it enters the spiral cochlea. It carries two things at once: hearing from the cochlea, and balance from the three semicircular canals above it. That is why inflammation of this nerve brings vertigo as well as ringing.'
        }
      },
      {
        ar: 'العصب تحت اللسان (الثاني عشر)', en: 'Hypoglossal nerve (XII)', x: 47, y: 62, side: 'left', go: 'tongue',
        desc: {
          ar: 'القضيبان البرتقاليان الممتدان على الهرم في النخاع المستطيل ثم يخرج من بينهما جذع يلتف الى الامام نحو اللسان. هو محرك عضلات اللسان كلها تقريبا. اذا اصيب من جهة مال اللسان عند اخراجه الى الجهة المصابة، وهذي علامة يفحصها الطبيب بنظرة واحدة.',
          en: 'The two orange rods lying on the pyramid of the medulla, with a trunk curving forward from between them toward the tongue. It drives nearly all the muscles of the tongue. If it is damaged on one side the tongue deviates toward that side when it is stuck out, a sign a doctor can read at a glance.'
        }
      },
      {
        ar: 'النخاع المستطيل', en: 'Medulla oblongata', x: 49, y: 70, side: 'left', go: 'spinal-cord',
        desc: {
          ar: 'العمود الشاحب في وسط الصورة، حيث ينتهي الدماغ ويبدا النخاع الشوكي. من هنا تخرج الاعصاب الاربعة الاخيرة، وفيه ايضا مراكز التنفس ونبض القلب وضغط الدم. لذلك اصابة صغيرة هنا خطرة اكثر من اصابة كبيرة في المخ.',
          en: 'The pale column in the middle of the picture, where the brain ends and the spinal cord begins. The last four nerves leave from here, and it also holds the centres for breathing, heartbeat and blood pressure. A small injury here is therefore more dangerous than a large one in the cerebrum.'
        }
      },
      {
        ar: 'العصب المبهم (العاشر)', en: 'Vagus nerve (X)', x: 38, y: 78, side: 'left', go: 'autonomic',
        desc: {
          ar: 'الخيط الوردي النازل طويلا خارج اسفل الصورة. اسمه يعني «الهائم» لانه لا يقف عند الراس: يخرج من الجمجمة وينزل في الرقبة الى القلب والرئتين والمعدة والامعاء. هو عمود الجهاز نظير الودي، اي فرامل الجسم: يبطئ القلب ويشغل الهضم ويهدئ الانسان بعد الخوف.',
          en: 'The pink thread running far down and off the bottom of the picture. Its name means the wanderer, because it does not stop at the head: it leaves the skull and descends through the neck to the heart, the lungs, the stomach and the intestines. It is the backbone of the parasympathetic system, the body brake: it slows the heart, switches on digestion and calms a person after fright.'
        }
      },
      {
        ar: 'التصالب البصري', en: 'Optic chiasm', x: 50, y: 25, side: 'right',
        desc: {
          ar: 'ملتقى على شكل حرف X يتقاطع فيه العصبان البصريان. النصف الداخلي من الياف كل عين يعبر هنا الى الجهة المقابلة، فيصير كل نصف من الدماغ يرى نصف المشهد لا عينا كاملة. ولهذا يختلف نوع فقدان البصر باختلاف موضع الاصابة قبل هذي النقطة او بعدها.',
          en: 'The X-shaped junction where the two optic nerves meet. The inner half of the fibres from each eye crosses here to the opposite side, so each half of the brain sees half the scene rather than one whole eye. That is why the pattern of sight loss differs depending on whether the damage lies before this point or after it.'
        }
      },
      {
        ar: 'العصب المحرّك للعين (الثالث)', en: 'Oculomotor nerve (III)', x: 53, y: 33, side: 'right',
        desc: {
          ar: 'القضيب البنفسجي الخارج من الحفرة بين ساقي المخ. يحرك اربعا من عضلات العين الست ويرفع الجفن، وفيه ايضا الالياف التي تضيق الحدقة. لذلك حين يضغط عليه ورم او تمدد في شريان تتدلى الجفن وتتسع الحدقة وتنحرف العين الى الخارج، وهي علامة انذار عاجلة.',
          en: 'The violet rod emerging from the hollow between the two cerebral peduncles. It moves four of the six eye muscles and lifts the eyelid, and it also carries the fibres that narrow the pupil. So when a tumour or a swollen artery presses on it the lid droops, the pupil widens and the eye turns outward, an urgent warning sign.'
        }
      },
      {
        ar: 'العصب اللساني البلعومي (التاسع)', en: 'Glossopharyngeal nerve (IX)', x: 57, y: 58, side: 'right', go: 'pharynx',
        desc: {
          ar: 'المروحة الارجوانية من الجذيرات الصغيرة الخارجة من جانب النخاع. يحمل الاحساس من الحلق ومن مؤخرة اللسان والتذوق منها، ويشارك في البلع. وهو الذي يصنع منعكس الغثيان حين يلمس الطبيب مؤخرة الحلق.',
          en: 'The violet fan of small rootlets leaving the side of the medulla. It carries sensation from the throat and the back of the tongue along with taste from there, and it takes part in swallowing. It is the nerve behind the gag reflex when a doctor touches the back of the throat.'
        }
      },
      {
        ar: 'المخيخ', en: 'Cerebellum', x: 75, y: 68, side: 'right', go: 'brain',
        desc: {
          ar: 'الكتلة الكبيرة المخططة باوراق دقيقة في اسفل الصورة. لا يامر بالحركة بل يصححها لحظة بلحظة فتخرج ناعمة مضبوطة. لا يشغل الا نحو عشرة بالمئة من حجم الدماغ لكنه يحوي اكثر من نصف خلاياه العصبية.',
          en: 'The large mass with fine leaf-like ridges at the bottom of the picture. It does not order movement; it corrects it moment by moment so that it comes out smooth and accurate. It takes up only about a tenth of the brain by size yet holds more than half of its nerve cells.'
        }
      },
      {
        ar: 'العصب الإضافي (الحادي عشر)', en: 'Accessory nerve (XI)', x: 56, y: 88, side: 'right', go: 'muscles',
        desc: {
          ar: 'الخيط الازرق الصاعد من اعلى النخاع الشوكي، وتنضم اليه الجذيرات الذهبية الصغيرة الظاهرة على جانب الحبل. هو غريب بين الاثني عشر: جذره الاكبر ياتي من الحبل الشوكي لا من الدماغ، ثم يصعد ليدخل الجمجمة ويخرج منها من جديد. يحرك عضلتين كبيرتين: التي تدير الراس والتي ترفع الكتف.',
          en: 'The blue thread rising from the upper spinal cord, joined by the small golden rootlets visible along the side of the cord. It is the odd one of the twelve: its larger root comes from the spinal cord rather than the brain, then climbs into the skull only to leave it again. It moves two large muscles: the one that turns the head and the one that lifts the shoulder.'
        }
      }
    ],
    desc: {
      ar: 'الأعصاب القحفية اثنا عشر زوجا تخرج من الدماغ وجذعه مباشرة، لا من النخاع الشوكي كبقية أعصاب الجسم. وهي مرتّبة بالأرقام من الأمام إلى الخلف كما تراها في هذي الصورة للدماغ من أسفل: الشمّي فالبصري ثم الثلاثة التي تحرّك العين، ثم ثلاثي التوائم الضخم، ثم الوجهي والسمعي إلى الأذن، ثم الأربعة الأخيرة من النخاع المستطيل نازلة إلى الحلق والرقبة والصدر. منها ما هو حسّي محض، ومنها ما هو حركي محض، ومنها ما يجمع الاثنين.',
      en: 'The cranial nerves are twelve pairs that leave the brain and its stem directly rather than the spinal cord like the rest of the body nerves. They are numbered from front to back exactly as they appear in this view of the brain from below: the olfactory, then the optic, then the three that move the eye, then the great trigeminal, then the facial and hearing nerves running to the ear, and finally the last four leaving the medulla for the throat, the neck and the chest. Some are purely sensory, some purely motor, and some carry both.'
    },
    func: {
      ar: 'تحمل الحواسّ الخاصّة كلها إلى الدماغ: الشمّ والبصر والسمع والتوازن والتذوّق. وتحرّك عضلات العين والوجه والمضغ واللسان والحلق والحنجرة. وتنقل الإحساس من الوجه والفم والحلق. ويخرج منها الطريق نظير الودّي عبر العصب المبهم إلى القلب والرئتين والجهاز الهضمي، فيبطئ القلب ويشغّل الهضم. ولأن كل واحد منها له عمل محدّد ومعروف، صار فحصها بالترتيب من أدقّ ما يكشف موضع الإصابة داخل الدماغ.',
      en: 'They bring all the special senses to the brain: smell, sight, hearing, balance and taste. They move the muscles of the eye, the face, chewing, the tongue, the throat and the voice box. They carry sensation from the face, mouth and throat. And through the vagus they send the parasympathetic road out to the heart, the lungs and the gut, slowing the heart and switching on digestion. Because each one has a definite, known job, testing them in order is among the sharpest ways to locate an injury inside the brain.'
    },
    location: { ar: 'قاعدة الدماغ وجذعه، وتخرج من الجمجمة عبر ثقوب وقنوات في قاعدتها إلى الوجه والرقبة وما دونهما', en: 'The base of the brain and its stem, leaving the skull through holes and canals in its floor to reach the face, the neck and beyond' },
    size: { ar: 'اثنا عشر زوجا؛ أرفعها البَكَري نحو ٠٫٧ ملم وأضخمها ثلاثي التوائم نحو ٥ ملم، وأطولها المبهم يتجاوز نصف متر حتى الأمعاء', en: 'Twelve pairs; the slenderest is the trochlear at about 0.7 mm and the thickest the trigeminal at about 5 mm, while the longest, the vagus, runs over half a metre down to the intestines' },
    short: { ar: 'اثنا عشر زوجا تخرج من الدماغ مباشرة لا من النخاع', en: 'Twelve pairs that leave the brain itself, not the spinal cord' },
    parts: [
      { ar: 'أعصاب الحواسّ: الشمّي والبصري والدهليزي القوقعي', en: 'The sense nerves: olfactory, optic and vestibulocochlear' },
      { ar: 'أعصاب حركة العين: الثالث والرابع والسادس', en: 'The eye-moving nerves: third, fourth and sixth' },
      { ar: 'أعصاب الوجه والمضغ: ثلاثي التوائم والوجهي', en: 'The face and chewing nerves: trigeminal and facial' },
      { ar: 'أعصاب الحلق والرقبة: التاسع والعاشر والحادي عشر والثاني عشر', en: 'The throat and neck nerves: ninth, tenth, eleventh and twelfth' }
    ],
    diseases: [
      { name: { ar: 'شلل بِل', en: 'Bell palsy' }, desc: { ar: 'التهاب مفاجئ في العصب الوجهي يُسقط نصف الوجه فلا تغمض العين ولا يرتفع طرف الفم، ويتحسّن أكثر المصابين خلال أسابيع', en: 'A sudden inflammation of the facial nerve that drops one half of the face, so the eye will not close and the mouth corner will not lift; most people recover over weeks' } },
      { name: { ar: 'ألم العصب ثلاثي التوائم', en: 'Trigeminal neuralgia' }, desc: { ar: 'نوبات ألم كالصعقة الكهربائية في نصف الوجه تثيرها لمسة خفيفة أو مضغة أو نسمة هواء، وتُعدّ من أشدّ الآلام المعروفة', en: 'Attacks of electric-shock pain in half the face set off by a light touch, a chew or a breath of air, counted among the severest pains known' } },
      { name: { ar: 'التهاب العصب البصري', en: 'Optic neuritis' }, desc: { ar: 'التهاب يضعف البصر في عين واحدة خلال أيام ويؤلم عند تحريكها، وقد يكون أول علامة على التصلّب المتعدّد', en: 'Inflammation that dims sight in one eye over days and hurts when the eye moves; it can be the first sign of multiple sclerosis' } },
      { name: { ar: 'ورم العصب السمعي', en: 'Vestibular schwannoma' }, desc: { ar: 'ورم حميد بطيء على العصب الثامن يبدأ بضعف سمع في أذن واحدة وطنين ودوخة، وقد يضغط لاحقاً على العصب الوجهي', en: 'A slow benign tumour on the eighth nerve starting with hearing loss in one ear, ringing and unsteadiness, and later pressing on the facial nerve' } },
      { name: { ar: 'شلل العصب المحرّك للعين', en: 'Third nerve palsy' }, desc: { ar: 'تدلّي الجفن واتساع الحدقة وانحراف العين إلى الخارج، وقد يدلّ على تمدّد خطير في شريان داخل الرأس', en: 'A drooping lid, a widened pupil and an outward-turned eye, which may point to a dangerous swelling of an artery inside the head' } }
    ]
  },

/* ---------- الدوران الجنيني (الجنين في الرحم ودائرة تكبير في القلب) ---------- */
  {
    id: 'fetal-circulation', type: 'organ', system: 'reproductive',
    name: { ar: 'الدوران الجنيني', en: 'Fetal circulation' },
    img: 'img/fetal-circulation.webp', imgBack: 'img/fetal-circulation-back.webp', thumb: 'img/thumb-fetal-circulation.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'القناة الشريانية', en: 'Ductus arteriosus', x: 35, y: 12, side: 'left',
        desc: {
          ar: 'الوعاء البنفسجي في دائرة التكبير الذي يقوس من الجذع الرئوي الى الاورطي، والسهم الابيض فوقه يبين اتجاه الدم. هو الممر الثاني الذي يتخطى الرئتين: بدل ان يذهب الدم الى رئة مطوية لا هواء فيها، يقفز منها مباشرة الى الشريان الاورطي. بعد الولادة ينقبض خلال ساعات الى ايام ويصير رباطا ليفيا.',
          en: 'The violet vessel in the magnified circle arching from the pulmonary trunk into the aorta, with a white arrow above showing the direction of flow. It is the second bypass around the lungs: instead of running into a folded, airless lung the blood jumps straight across into the aorta. After birth it clamps down within hours to days and turns into a fibrous cord.'
        }
      },
      {
        ar: 'الثقبة البيضية', en: 'Foramen ovale', x: 19, y: 21, side: 'left',
        desc: {
          ar: 'الفتحة في الحاجز بين الاذينين، والسهمان الابيضان يبينان الدم وهو يعبر منها من الاذين الايمن الى الايسر مباشرة. هي الممر الاول الذي يتخطى الرئتين. عليها صمام رقيق كالباب، فما ان يرتفع الضغط في الجانب الايسر بعد اول نفس حتى ينطبق هذا الصمام ويقفلها.',
          en: 'The opening in the wall between the two atria, the two white arrows showing blood crossing straight from the right atrium into the left. It is the first bypass around the lungs. A thin flap lies over it like a door, and the moment pressure rises on the left side after the first breath that flap swings shut and seals it.'
        }
      },
      {
        ar: 'البطين الأيمن', en: 'Right ventricle', x: 14, y: 31, side: 'left',
        desc: {
          ar: 'الحجرة البنفسجية في دائرة التكبير، ولونها يقول ان دمها مختلط لا نقي. في الجنين يعمل البطينان جنبا الى جنب لا واحد بعد الاخر، لان اغلب ما يضخه الايمن لا يذهب الى الرئة بل يعبر القناة الشريانية الى الجسم.',
          en: 'The violet chamber in the magnified circle; its colour says its blood is mixed rather than pure. In the fetus the two ventricles work side by side rather than one after the other, because most of what the right one pumps does not go to the lung but crosses the ductus arteriosus into the body.'
        }
      },
      {
        ar: 'جدار الرحم', en: 'Uterine wall', x: 36, y: 44, side: 'left', go: 'female-reproductive',
        desc: {
          ar: 'الشريط العضلي السميك المحيط بكل شيء، وداخله الغشاء الشفاف الرقيق الذي يحبس السائل الامنيوسي حول الجنين. هذا الجدار يكبر مع الحمل من حجم كف الى ما يسع طفلا كاملا، ثم هو نفسه الذي ينقبض في المخاض ليدفعه الى الخارج.',
          en: 'The thick muscular band enclosing everything, with the thin transparent membrane inside it holding the amniotic fluid around the fetus. This wall grows through pregnancy from the size of a palm to something that holds a whole baby, and it is the same wall that contracts in labour to push the baby out.'
        }
      },
      {
        ar: 'الكبد', en: 'Liver', x: 58, y: 52, side: 'left', go: 'liver',
        desc: {
          ar: 'الكتلة البنية الكبيرة تحت القلب. في الجنين هو اول عضو يستقبل الدم الغني القادم من المشيمة، وهو ايضا مصنع كريات الدم الحمراء في اشهر الحمل الاولى قبل ان يتسلم النخاع العظمي هذي المهمة. ولانه ضخم ونشط تعطيه الطبيعة اول حصة من الاكسجين.',
          en: 'The large brown mass under the heart. In the fetus it is the first organ to receive the rich blood coming from the placenta, and it is also the factory of red blood cells in the early months before the bone marrow takes that job over. Because it is big and busy, nature gives it the first share of the oxygen.'
        }
      },
      {
        ar: 'المشيمة', en: 'Placenta', x: 12, y: 60, side: 'left', go: 'pregnancy',
        desc: {
          ar: 'القرص الكبير الى اليسار بشجرة اوعيته الحمراء والزرقاء. هي رئة الجنين وكليته وامعاؤه معا: يتبادل فيها دمه مع دم امه الاكسجين والغذاء والفضلات دون ان يختلط الدمان. تلتصق بجدار الرحم وتنفصل عنه بعد الولادة بدقائق.',
          en: 'The large disc on the left with its tree of red and blue vessels. It is the fetal lung, kidney and gut in one: here the baby blood trades oxygen, food and waste with the mother blood without the two ever mixing. It clings to the wall of the womb and peels away minutes after the birth.'
        }
      },
      {
        ar: 'الحبل السري', en: 'Umbilical cord', x: 38, y: 73, side: 'left',
        desc: {
          ar: 'الحبل الملتوي بين المشيمة وبطن الجنين. فيه ثلاثة اوعية: وريد واحد احمر يحمل الدم الغني الى الطفل، وشريانان ازرقان يعيدان الدم المستهلك الى المشيمة. والتفافه اللولبي ليس زينة بل يحميه من الانطواء والانقطاع اذا تحرك الجنين.',
          en: 'The twisted rope between the placenta and the baby belly. It holds three vessels: one red vein carrying rich blood to the child, and two blue arteries returning spent blood to the placenta. Its spiral twist is not decoration but protection, keeping it from kinking shut when the fetus moves.'
        }
      },
      {
        ar: 'قوس الأورطي', en: 'Aortic arch', x: 75, y: 29, side: 'right',
        desc: {
          ar: 'القوس الاحمر الخارج من القلب صاعدا ثم منعطفا الى الاسفل، والسهم الابيض يتبعه. اول فروعه تصعد الى الراس والذراعين، ولهذا يصلها احسن دم في الجسم: الجنين يعطي دماغه الافضل ويبقي الاقل لباقي بدنه.',
          en: 'The red arch leaving the heart, rising and then bending downward, with the white arrow following it. Its first branches climb to the head and arms, so they receive the best blood in the body: the fetus gives its brain the finest supply and leaves the poorer blood for the rest.'
        }
      },
      {
        ar: 'الرئتان المنطويتان', en: 'The collapsed lungs', x: 86, y: 35, side: 'right', go: 'lungs',
        desc: {
          ar: 'الفصوص الوردية على جانبي القلب. لا هواء فيها ولا عمل: هي مملوءة سائلا ومطوية على نفسها، واوعيتها مضيقة جدا فلا يكاد الدم يدخلها. لذلك وجد ممران يتخطيانها. وفي اول صرخة يدخلها الهواء وتنفتح اوعيتها فينقلب كل شيء.',
          en: 'The pink lobes on either side of the heart. They hold no air and do no work: they are filled with fluid and folded on themselves, and their vessels are so tight that blood barely enters. That is why the two bypasses exist. At the first cry air fills them, their vessels open, and everything reverses.'
        }
      },
      {
        ar: 'قلب الجنين', en: 'The fetal heart', x: 73, y: 43, side: 'right', go: 'heart',
        desc: {
          ar: 'القلب مفتوحا بحجراته الاربع. الوانه هنا تحكي القصة: احمر ساطع للدم المؤكسج، وبنفسجي للمختلط، وازرق للراجع. لا يوجد في الجنين دم نقي تماما في اي حجرة، لان دم المشيمة يختلط في طريقه بدم الجسم العائد.',
          en: 'The heart opened to show its four chambers. Its colours here tell the story: bright red for oxygen-rich blood, violet for mixed and blue for returning. No chamber in the fetus holds perfectly pure blood, because the placental blood mixes on its way with blood coming back from the body.'
        }
      },
      {
        ar: 'القناة الوريدية', en: 'Ductus venosus', x: 69, y: 49, side: 'right',
        desc: {
          ar: 'الموضع الذي يتحول فيه الوعاء الاحمر الى بنفسجي، وهو ممر قصير يسمح لجزء من الدم الغني ان يتخطى الكبد ويصب راسا في الوريد الاجوف السفلي صاعدا الى القلب. فالجنين لا يمرر كل دمه بالكبد كي يصل الاكسجين الى الدماغ سريعا. تنغلق هذي القناة بعد الولادة بايام.',
          en: 'The place where the red vessel turns violet: a short passage letting part of the rich blood skip the liver and empty straight into the inferior vena cava on its way up to the heart. The fetus does not push all its blood through the liver, so oxygen reaches the brain quickly. This channel closes within days of birth.'
        }
      },
      {
        ar: 'الوريد السري', en: 'Umbilical vein', x: 60, y: 63, side: 'right', go: 'vessel-types',
        desc: {
          ar: 'الوعاء الاحمر الساطع الصاعد من الحبل السري الى الكبد، والاسهم البيضاء عليه تبين اتجاه الجريان. وهو غريب بين الاوردة: كل الاوردة تحمل دما فقيرا بالاكسجين الا هذا، فهو الوحيد في الجسم كله الذي يحمل احسن دم فيه.',
          en: 'The bright red vessel rising from the cord to the liver, the white arrows on it showing the direction of flow. It is the odd one among veins: every other vein carries oxygen-poor blood, but this one carries the richest blood in the whole body.'
        }
      },
      {
        ar: 'الوريد الأجوف السفلي', en: 'Inferior vena cava', x: 68, y: 70, side: 'right', go: 'circulation',
        desc: {
          ar: 'العمود الازرق الصاعد في وسط البطن باسهمه المتجهة الى الاعلى. يجمع الدم العائد من نصف الجسم الاسفل ويخلطه بالدم الغني الاتي من القناة الوريدية، ثم يرفعه الى الاذين الايمن حيث ينتظره باب الثقبة البيضية.',
          en: 'The blue column rising in the middle of the abdomen with its upward arrows. It gathers the blood returning from the lower half of the body, blends it with the rich blood arriving through the ductus venosus, and lifts it to the right atrium where the door of the foramen ovale is waiting.'
        }
      },
      {
        ar: 'الشريانان السريان', en: 'The two umbilical arteries', x: 66, y: 77, side: 'right',
        desc: {
          ar: 'الوعاءان الازرقان النازلان جنبا الى جنب ثم يدخلان الحبل السري. يعيدان الدم المستهلك والفضلات الى المشيمة لتتخلص منها عبر دم الام. وهما ايضا غريبان: كل شريان يحمل دما نقيا الا هذين. بعد الولادة يضمران ويصيران رباطين على جدار البطن من الداخل.',
          en: 'The two blue vessels running down side by side and entering the cord. They return spent blood and waste to the placenta, which passes them into the mother blood. They too are the exception: every other artery carries clean blood but these do not. After birth they shrink into two ligaments on the inner wall of the abdomen.'
        }
      }
    ],
    desc: {
      ar: 'قبل الولادة لا يتنفّس الجنين ولا يأكل ولا يبول: كل ذلك تقوم به المشيمة نيابة عنه. ولأن رئتيه مطويّتان مملوءتين سائلا لا فائدة من ضخّ الدم إليهما، فُتح في قلبه وأوعيته ممرّان يتخطّيانهما: الثقبة البيضية بين الأذينين، والقناة الشريانية بين الجذع الرئوي والأورطي. وفي البطن ممرّ ثالث هو القناة الوريدية التي تتخطّى الكبد. فالدم الغنيّ يصل من المشيمة بالوريد السرّي، ويأخذ الدماغ والقلب أفضل ما فيه، ثم يعود المستهلك إلى المشيمة بشريانين سرّيّين.',
      en: 'Before birth the fetus does not breathe, eat or pass urine: the placenta does all of it on its behalf. Because the lungs are folded and full of fluid there is no point pumping blood through them, so two bypasses are opened in the heart and its vessels: the foramen ovale between the atria and the ductus arteriosus between the pulmonary trunk and the aorta. A third bypass in the abdomen, the ductus venosus, skips the liver. Rich blood arrives from the placenta by the umbilical vein, the brain and heart take the best of it, and spent blood returns to the placenta through two umbilical arteries.'
    },
    func: {
      ar: 'إيصال الأكسجين والغذاء من دم الأم إلى الجنين، وسحب ثاني أكسيد الكربون والفضلات منه، مع توجيه أفضل الدم إلى الدماغ والقلب أوّلا. وأعظم ما في هذا النظام أنه ينقلب كلّه في أول نفَس يأخذه المولود: ينفتح الهواء في الرئتين فتتّسع أوعيتهما ويهبط ضغط الجانب الأيمن، ويقطع ربط الحبل السرّي مصدر الدم منخفض المقاومة فيرتفع ضغط الجانب الأيسر. فينطبق صمام الثقبة البيضية، وتنقبض القناة الشريانية خلال ساعات إلى أيام ثم تصير رباطا، وتنغلق القناة الوريدية. تحوّل واحد يحدث مرة واحدة في العمر ولا يتكرّر.',
      en: 'To bring oxygen and food from the mother blood to the fetus and carry carbon dioxide and waste away, while steering the best blood to the brain and heart first. The finest thing about this arrangement is that it reverses at the newborn first breath: air opens the lungs, their vessels widen and pressure on the right side drops, while clamping the cord removes the low-resistance channel and pressure on the left side rises. The flap of the foramen ovale swings shut, the ductus arteriosus tightens over hours to days and becomes a ligament, and the ductus venosus closes. One switch, happening once in a lifetime and never again.'
    },
    location: { ar: 'داخل الرحم: المشيمة على جداره، والحبل السرّي بينها وبين سرّة الجنين، والممرّان داخل قلب الجنين وصدره والثالث في بطنه عند الكبد', en: 'Inside the womb: the placenta on its wall, the cord between it and the baby navel, the two bypasses inside the fetal heart and chest and the third in the abdomen at the liver' },
    size: { ar: 'المشيمة عند تمام الحمل نحو ٢٢ سم قطرا و٥٠٠ غرام، والحبل السرّي نحو ٥٠–٦٠ سم طولا و٢ سم سمكا، والقناة الشريانية نحو سنتيمتر واحد', en: 'At term the placenta is about 22 cm across and 500 g, the cord about 50 to 60 cm long and 2 cm thick, and the ductus arteriosus about one centimetre' },
    short: { ar: 'دورة تتخطّى الرئتين… حتى أول نفَس فينقلب كل شيء', en: 'A circulation that skips the lungs, until the first breath turns it all around' },
    parts: [
      { ar: 'المشيمة والحبل السرّي', en: 'The placenta and the umbilical cord' },
      { ar: 'الوريد السرّي والقناة الوريدية', en: 'The umbilical vein and the ductus venosus' },
      { ar: 'الثقبة البيضية بين الأذينين', en: 'The foramen ovale between the atria' },
      { ar: 'القناة الشريانية بين الجذع الرئوي والأورطي', en: 'The ductus arteriosus between the pulmonary trunk and the aorta' }
    ],
    diseases: [
      { name: { ar: 'الثقبة البيضية السالكة', en: 'Patent foramen ovale' }, desc: { ar: 'بقاء صمام الثقبة غير ملتحم بعد الولادة، وهو شائع جدا وبلا أعراض غالبا، لكنه قد يسمح لجلطة صغيرة بالعبور إلى الدماغ', en: 'The flap of the foramen fails to seal after birth; very common and usually silent, though it can let a small clot slip across to the brain' } },
      { name: { ar: 'القناة الشريانية المفتوحة', en: 'Patent ductus arteriosus' }, desc: { ar: 'عدم انغلاق القناة بعد الولادة، وأكثر ما يقع في الخدّج، فيزيد الدم على الرئتين ويُتعب القلب، ويُعالج بالدواء أو بالإغلاق', en: 'The duct does not close after birth, most often in premature babies, so the lungs are flooded and the heart tires; treated with medicine or by closing it' } },
      { name: { ar: 'قصور المشيمة', en: 'Placental insufficiency' }, desc: { ar: 'ضعف تبادل الأكسجين والغذاء عبر المشيمة فينمو الجنين أقلّ من عمره، ويُتابع بالسونار وقياس تدفّق الشريان السرّي', en: 'Oxygen and food exchange across the placenta falls short, so the fetus grows smaller than its age; followed with ultrasound and cord-artery flow measurement' } },
      { name: { ar: 'نقص أكسجة الجنين', en: 'Fetal hypoxia' }, desc: { ar: 'نقص الأكسجين الواصل إلى الجنين لسبب في المشيمة أو الحبل أو المخاض، ويظهر في تغيّر نبض الجنين وقد يستدعي ولادة عاجلة', en: 'Oxygen reaching the fetus falls short because of the placenta, the cord or labour itself; it shows in the fetal heart rate and may call for urgent delivery' } },
      { name: { ar: 'ارتفاع ضغط الرئة المستمرّ عند الوليد', en: 'Persistent pulmonary hypertension of the newborn' }, desc: { ar: 'بقاء أوعية الرئة مضيّقة بعد الولادة فيستمرّ الدم في تخطّي الرئتين كما كان في الرحم، فيزرقّ المولود ويحتاج عناية مركّزة', en: 'The lung vessels stay tight after birth so blood keeps bypassing the lungs as it did in the womb; the baby turns blue and needs intensive care' } }
    ]
  },

/* ---------- الانقسام المنصّف (تسلسل الخلايا من واحدة إلى أربع) ---------- */
  {
    id: 'meiosis', type: 'organ', system: 'skin',
    name: { ar: 'الانقسام المنصّف', en: 'Meiosis' },
    img: 'img/meiosis.webp', imgBack: 'img/meiosis-back.webp', thumb: 'img/thumb-meiosis.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'كروموسوم من الأب', en: 'A chromosome from the father', x: 16, y: 13, side: 'left', go: 'dna',
        desc: {
          ar: 'الكروموسومات الحمراء في الخلية الاولى، ولونها احمر خالص لان نسختها كلها جاءت من الاب. شكل حرف X يعني ان الخلية نسخت حمضها النووي فصار كل كروموسوم شريطين متطابقين معلقين عند نقطة واحدة.',
          en: 'The red chromosomes in the first cell, pure red because that whole copy came from the father. The X shape means the cell has already copied its DNA, so each chromosome is two identical strands hanging from one point.'
        }
      },
      {
        ar: 'كروموسوم من الأم', en: 'A chromosome from the mother', x: 28, y: 20, side: 'left',
        desc: {
          ar: 'الكروموسومات الزرقاء في الخلية نفسها، وهي النسخة المقابلة القادمة من الام. لكل كروموسوم من الاب شريك مطابق له في الشكل والحجم من الام، ويسميان الزوج المتماثل. هما يحملان الجينات نفسها لكن بنسختين قد تختلفان.',
          en: 'The blue chromosomes in the same cell, the matching copy that came from the mother. Every chromosome from the father has a partner of the same shape and size from the mother, and the two are called a homologous pair. They carry the same genes but in two versions that may differ.'
        }
      },
      {
        ar: 'بعد الانقسام الأول', en: 'After the first division', x: 38, y: 43, side: 'left', go: 'mitosis',
        desc: {
          ar: 'الخلية بعد ان انفصل الزوجان، فصار فيها نصف العدد فقط. وهنا الفرق الكبير عن الانقسام المتساوي: هناك تنفصل الشريطان في كل كروموسوم فتخرج خليتان بالعدد نفسه، اما هنا فينفصل الزوج كله فيهبط العدد الى النصف. لاحظ ان الكروموسوم ما زال شريطين.',
          en: 'The cell after the pairs have been pulled apart, so it now holds only half the number. This is the great difference from ordinary cell division: there the two strands of each chromosome separate and the two daughter cells keep the full count, but here the whole pair separates and the count falls by half. Notice that the chromosome is still two strands.'
        }
      },
      {
        ar: 'الانقسام الثاني', en: 'The second division', x: 15, y: 62, side: 'left',
        desc: {
          ar: 'كل خلية من الاثنتين تنقسم مرة اخرى بلا نسخ جديد للحمض النووي. هذي المرة ينفصل الشريطان في الكروموسوم الواحد، فيصير في كل خلية كروموسوم من شريط واحد. ولهذا تخرج اربع خلايا من خلية واحدة بانقسامين لا بانقسام واحد.',
          en: 'Each of the two cells divides again without copying its DNA anew. This time the two strands of a single chromosome come apart, so each cell ends with a chromosome of one strand. That is why one cell yields four through two divisions rather than one.'
        }
      },
      {
        ar: 'خلية جنسية ناضجة', en: 'A mature sex cell', x: 36, y: 84, side: 'left', go: 'ovum',
        desc: {
          ar: 'واحدة من الخلايا الاربع في الصف الاخير، وفيها كروموسوم واحد من شريط واحد. هذي هي البويضة او الحيوان المنوي: نصف العدد، ينتظر النصف الاخر. وعند الاخصاب يجتمع نصفان فيعود العدد ٤٦ في الخلية الاولى من الانسان الجديد.',
          en: 'One of the four cells in the last row, holding a single chromosome of one strand. This is the egg or the sperm: half the number, waiting for the other half. At fertilisation two halves meet and the count returns to 46 in the first cell of a new human being.'
        }
      },
      {
        ar: 'العبور وتبادل القطع', en: 'Crossing over', x: 52, y: 16, side: 'right',
        desc: {
          ar: 'اهم لحظة في الصورة كلها: الكروموسومان المتماثلان يتشابكان عند نقطة التقاطع ويتبادلان قطعا متقابلة، فيصير كل كروموسوم بعدها مخططا باللونين معا بعد ان كان لونا واحدا. هنا يخلط الورق من جديد، ومن هنا تجيء كل الفروق بين الاخوة.',
          en: 'The most important moment in the whole picture: the two matching chromosomes lock together at the crossing point and swap facing segments, so afterwards each is striped with both colours where before it was one. Here the deck is reshuffled, and from here come all the differences between brothers and sisters.'
        }
      },
      {
        ar: 'اصطفاف الأزواج على خط الوسط', en: 'The pairs line up at the middle', x: 84, y: 24, side: 'right',
        desc: {
          ar: 'الكروموسومات مصطفة في وسط الخلية بين القطبين، وكل زوج متجاور. اي جهة يقف فيها الاحمر واي جهة يقف فيها الازرق تقرر بالمصادفة لكل زوج على حدة، وهذي مصادفة ثانية تضاعف الخلط الى ملايين الاحتمالات.',
          en: 'The chromosomes stand in the middle of the cell between the two poles, each pair side by side. Which side the red faces and which side the blue is settled by chance for every pair on its own, and that second chance multiplies the shuffle into millions of possibilities.'
        }
      },
      {
        ar: 'كروموسوم مخطّط بلونين', en: 'A chromosome striped with both colours', x: 64, y: 43, side: 'right',
        desc: {
          ar: 'انظر الى الكروموسوم هنا: لم يعد احمر خالصا ولا ازرق خالصا بل قطعا من هذا وقطعا من ذاك. هذا اثر العبور باق يحمله الكروموسوم الى نهاية الطريق، فما وصل الى البويضة او الحيوان المنوي ليس نسخة الاب ولا نسخة الام بل مزيج جديد.',
          en: 'Look at the chromosome here: no longer pure red nor pure blue but pieces of each. This is the mark of crossing over, carried by the chromosome to the end of the road, so what reaches the egg or the sperm is neither the father copy nor the mother copy but a new blend.'
        }
      },
      {
        ar: 'القسيم المركزي', en: 'The centromere', x: 64, y: 62, side: 'right', go: 'cell',
        desc: {
          ar: 'العقدة الفاتحة في وسط الكروموسوم حيث يلتقي الشريطان. عندها تتشبث خيوط المغزل لتسحب، وهي نقطة الضعف والقوة معا: اذا شدت خيوط الجهتين شريطا واحدا بدل ان تقتسماه اختل العدد في الخلايا الناتجة.',
          en: 'The pale knot in the middle of the chromosome where the two strands meet. This is where the spindle fibres grip and pull, and it is both the strong point and the weak one: if fibres from both sides seize the same strand instead of sharing them, the count in the daughter cells goes wrong.'
        }
      },
      {
        ar: 'خيوط المغزل والقطبان', en: 'The spindle fibres and poles', x: 86, y: 68, side: 'right',
        desc: {
          ar: 'الخيوط البرتقالية الممتدة من نجمتين على طرفي الخلية. هي حبال السحب: تشد الكروموسومات كل جهة الى قطبها فيقتسم الميراث بالتساوي. تراها في كل خلية منقسمة في الصورة وتختفي في خلايا الصف الاخير لان انقسامها انتهى.',
          en: 'The orange threads running from two stars at the ends of the cell. They are the hauling ropes: each side drags its chromosomes to its own pole so the inheritance is split evenly. You can see them in every dividing cell in the picture and they are gone in the last row, whose division is over.'
        }
      },
      {
        ar: 'خلطة مختلفة في كل خلية', en: 'A different mixture in every cell', x: 62, y: 84, side: 'right', go: 'fertilization',
        desc: {
          ar: 'قارن الكروموسوم في كل خلية من الصف الاخير: نمط الاحمر والازرق مختلف في كل واحدة. لهذا لا يتشابه اخوان من ابوين واحدين، الا التوام المتماثل فانه لم يجئ من بويضتين بل من لاقحة واحدة انشطرت الى نصفين.',
          en: 'Compare the chromosome in each cell of the last row: the pattern of red and blue differs in every one. This is why two children of the same parents are not alike, except identical twins, who did not come from two eggs but from a single fertilised cell that split in two.'
        }
      },
      {
        ar: 'أربع خلايا في النهاية', en: 'Four cells at the end', x: 84, y: 90, side: 'right', go: 'testis',
        desc: {
          ar: 'نهاية الطريق: خلية واحدة صارت اربعا، وكل واحدة بنصف العدد وبخلطة لم تصنع من قبل ولن تتكرر. في الرجل تصير الاربع كلها حيوانات منوية، وفي المراة تصير واحدة بويضة كاملة وتنكمش الثلاث لتعطيها كل غذائها.',
          en: 'The end of the road: one cell has become four, each with half the number and a mixture never made before and never to be repeated. In a man all four become sperm; in a woman one becomes a full egg while the other three shrink away and hand it all their nourishment.'
        }
      }
    ],
    desc: {
      ar: 'الانقسام المنصّف هو الانقسام الخاصّ الذي تُصنع به البويضات والحيوانات المنوية وحدها. يختلف عن انقسام باقي خلايا الجسم في أمرين: أنه ينصّف عدد الكروموسومات من ٤٦ إلى ٢٣ كي يعود العدد إلى ٤٦ عند اجتماع النصفين في الإخصاب، وأنه يخلط الورق قبل أن ينصّفه. يبدأ بخلية نسخت حمضها النووي، فيتقابل كل كروموسوم مع شريكه وقد جاء أحدهما من الأب والآخر من الأم، ثم يتشابكان ويتبادلان قطعا متقابلة، ثم ينفصل الزوج في انقسام أول ثم ينفصل الشريطان في انقسام ثانٍ، فتخرج أربع خلايا كل واحدة بنصف العدد وبخلطة مختلفة.',
      en: 'Meiosis is the special division by which eggs and sperm alone are made. It differs from the division of ordinary body cells in two ways: it halves the chromosome number from 46 to 23 so that the count returns to 46 when the two halves meet at fertilisation, and it shuffles the deck before it halves it. It begins with a cell that has copied its DNA; each chromosome faces its partner, one having come from the father and one from the mother; the two lock together and swap facing segments; then the pair separates in a first division and the two strands separate in a second, ending in four cells each with half the number and a different mixture.'
    },
    func: {
      ar: 'صنع خلايا جنسية بنصف العدد، وضمان ألا يتضاعف عدد الكروموسومات جيلا بعد جيل. لكن وظيفته الثانية أعظم: هو مصنع الاختلاف بين البشر. فالعبور يبادل قطعا بين الكروموسوم الآتي من الأب والآتي من الأم، واصطفاف الأزواج على خط الوسط يوزّعها بالمصادفة، فلا تخرج بويضتان متطابقتان ولا حيوانان منويّان متطابقان أبدا. وحين يخطئ الفصل فيذهب كروموسوم زائد إلى خلية وينقص من أخرى، تولد حالات معروفة أشهرها متلازمة داون من نسخة ثالثة للكروموسوم ٢١.',
      en: 'To make sex cells with half the number, so that the chromosome count does not double with every generation. But its second job is the greater one: it is the factory of human difference. Crossing over trades segments between the father chromosome and the mother one, and the chance alignment of the pairs at the middle deals them out at random, so no two eggs and no two sperm are ever alike. When the separation goes wrong and one cell gains a chromosome while another loses one, known conditions follow, the best known being Down syndrome from a third copy of chromosome 21.'
    },
    location: { ar: 'في الخصيتين عند الرجل وفي المبيضين عند المرأة، ولا يحدث في أي خلية أخرى من الجسم', en: 'In the testes in men and the ovaries in women, and in no other cell of the body' },
    size: { ar: 'من ٤٦ كروموسوما إلى ٢٣؛ يستغرق نحو ٦٤ يوما لصنع حيوان منوي، أما البويضة فتبدأ انقسامها قبل ولادة صاحبتها وقد تتوقّف في منتصفه أربعين سنة حتى تُلقّح', en: 'From 46 chromosomes down to 23; making a sperm takes about 64 days, while an egg begins its division before its owner is even born and may pause halfway through for forty years until it is fertilised' },
    short: { ar: 'الانقسام الذي ينصّف العدد ويخلط الورق من جديد', en: 'The division that halves the count and reshuffles the deck' },
    parts: [
      { ar: 'تقابل الزوجين المتماثلين', en: 'The pairing of the two matching chromosomes' },
      { ar: 'العبور وتبادل القطع', en: 'Crossing over and the swap of segments' },
      { ar: 'الانقسام الأول: انفصال الزوج ونزول العدد إلى النصف', en: 'The first division: the pair separates and the count halves' },
      { ar: 'الانقسام الثاني: انفصال الشريطين وخروج أربع خلايا', en: 'The second division: the strands separate and four cells emerge' }
    ],
    diseases: [
      { name: { ar: 'متلازمة داون', en: 'Down syndrome' }, desc: { ar: 'نسخة ثالثة من الكروموسوم ٢١ بسبب خطأ في فصل الكروموسومات، ويزداد احتمالها مع تقدّم عمر الأم لأن بويضاتها انتظرت طويلا في منتصف انقسامها', en: 'A third copy of chromosome 21 caused by a fault in separation; it grows more likely with the mother age because her eggs have waited long in mid-division' } },
      { name: { ar: 'متلازمة تيرنر', en: 'Turner syndrome' }, desc: { ar: 'نقص كروموسوم جنسي عند الأنثى فتكون X واحدة بدل اثنتين، فيقصر الطول ويتأخّر البلوغ ويتعذّر الإنجاب غالبا', en: 'A missing sex chromosome in a girl, one X instead of two, giving short stature, delayed puberty and usually infertility' } },
      { name: { ar: 'متلازمة كلاينفلتر', en: 'Klinefelter syndrome' }, desc: { ar: 'كروموسوم X زائد عند الذكر، فيقلّ هرمون الذكورة وتصغر الخصيتان ويكون العقم شائعا، وكثيرا ما تُكتشف عند البحث عن سبب تأخّر الإنجاب', en: 'An extra X chromosome in a boy, lowering male hormone, shrinking the testes and commonly causing infertility; it is often found while looking for the reason behind a delay in having children' } },
      { name: { ar: 'الإجهاض المبكّر من خلل الصبغيات', en: 'Early miscarriage from a chromosome fault' }, desc: { ar: 'أكثر حالات الإجهاض في الأسابيع الأولى سببها عدد كروموسومات خاطئ في اللاقحة يمنع اكتمال النمو، وهو خطأ عشوائي لا ذنب فيه لأحد', en: 'Most miscarriages in the earliest weeks come from a wrong chromosome count in the fertilised cell that stops it developing; a random fault that is nobody fault' } },
      { name: { ar: 'العقم من خلل الانقسام', en: 'Infertility from faulty meiosis' }, desc: { ar: 'توقّف الانقسام المنصّف أو اضطرابه في الخصية أو المبيض فتقلّ الخلايا الجنسية السليمة أو تنعدم', en: 'Meiosis stalls or goes astray in the testis or the ovary, so healthy sex cells become few or absent' } }
    ]
  }

]);

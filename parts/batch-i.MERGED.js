/* ---------- انقسام الخلية (المراحل الأربع) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'mitosis', type: 'organ', system: 'skin',
    name: { ar: 'انقسام الخلية', en: 'Cell division (mitosis)' },
    img: 'img/mitosis.webp', imgBack: 'img/mitosis-back.webp', thumb: 'img/thumb-mitosis.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الطور التمهيدي', en: 'Prophase', x: 27, y: 11, side: 'left',
        desc: {
          ar: 'اول مرحلة، وفيها تكون الخلية قد نسخت حمضها النووي من قبل، فتبدا الخيوط الطويلة المتشابكة داخل النواة بالالتفاف على نفسها حتى تصير كروموسومات قصيرة سميكة يسهل نقلها. الغلاف النووي يبدا بالتفكك في اخر هذي المرحلة.',
          en: 'The first stage. The cell has already copied its DNA, and now the long tangled threads inside the nucleus coil up into short thick chromosomes that are easy to move. The nuclear envelope begins to break apart at the end of this stage.'
        }
      },
      {
        ar: 'الميتوكوندريا', en: 'Mitochondria', x: 14, y: 22, side: 'left', go: 'cell',
        desc: {
          ar: 'اجسام برتقالية صغيرة منتشرة في السيتوبلازم، هي مولدات الطاقة في الخلية. الانقسام عملية مكلفة جدا لانها تحرك كروموسومات وتبني هيكلا كاملا وتشق الخلية، وكل هذي الطاقة تخرج من هنا.',
          en: 'The small orange bodies scattered through the cytoplasm are the cell\'s power plants. Division is an expensive job: it moves chromosomes, builds a whole scaffold and splits the cell, and all that energy comes from here.'
        }
      },
      {
        ar: 'الكروموسومات المتكثفة', en: 'Condensed chromosomes', x: 26, y: 28, side: 'left', go: 'dna',
        desc: {
          ar: 'كل كروموسوم هنا نسختان متطابقتان ملتصقتان، لان الخلية نسخت حمضها النووي قبل ان تبدا الانقسام. لولا هذا النسخ المسبق لخرجت خلية ناقصة من كل انقسام.',
          en: 'Each chromosome here is two identical copies stuck together, because the cell copied its DNA before division began. Without that advance copying, every division would leave one daughter short.'
        }
      },
      {
        ar: 'الغلاف النووي', en: 'Nuclear envelope', x: 19, y: 34, side: 'left',
        desc: {
          ar: 'الغشاء المزدوج الذي يحفظ الكروموسومات داخل النواة في الاوقات العادية. عند الانقسام يتفكك ليطلق الكروموسومات، ثم يعاد بناؤه حول كل مجموعة في نهاية العملية.',
          en: 'The double membrane that keeps the chromosomes inside the nucleus in normal times. At division it breaks down to release them, then is rebuilt around each set at the end.'
        }
      },
      {
        ar: 'الطور الانفصالي', en: 'Anaphase', x: 25, y: 55, side: 'left',
        desc: {
          ar: 'المرحلة الثالثة: تنشق كل نسختين متلاصقتين وتسحب كل واحدة الى قطب مقابل، فتنطوي الخيوط وتقصر وتجر معها الكروموسومات. هذي اسرع مراحل الانقسام كلها.',
          en: 'The third stage: each pair of joined copies is split and one of them is hauled to each pole, the fibres shortening and dragging the chromosomes with them. This is the fastest stage of the whole division.'
        }
      },
      {
        ar: 'قطب المغزل', en: 'Spindle pole', x: 6.5, y: 67, side: 'left',
        desc: {
          ar: 'نقطة تتجمع عندها كل الخيوط في طرف الخلية. القطبان يتباعدان تدريجيا فيصير بينهما مسافة كافية لتحمل كل واحد منهما مجموعة كاملة من الكروموسومات.',
          en: 'The point at the end of the cell where all the fibres gather. The two poles drift apart until there is room enough for each of them to carry a full set of chromosomes.'
        }
      },
      {
        ar: 'الكروموسومات المنفصلة', en: 'Separated chromosomes', x: 18, y: 75, side: 'left',
        desc: {
          ar: 'مجموعة كاملة تسير نحو قطبها، ومقابلها مجموعة مطابقة لها تسير في الاتجاه الاخر. هنا بالذات يتقرر ان الخليتين ستكونان متطابقتين وراثيا.',
          en: 'A complete set travelling towards its pole, with an identical set travelling the other way. It is right here that the two daughter cells are settled as genetically identical.'
        }
      },
      {
        ar: 'الطور الاستوائي', en: 'Metaphase', x: 72, y: 11, side: 'right',
        desc: {
          ar: 'المرحلة الثانية: تصطف الكروموسومات كلها في خط واحد وسط الخلية، ولا تسمح نقطة تفتيش بالمضي قدما حتى يتاكد ان كل كروموسوم ممسوك من قطبيه معا. هذي لحظة الفحص قبل الشق.',
          en: 'The second stage: the chromosomes line up in a single row across the middle of the cell, and a checkpoint refuses to let things go on until every chromosome is held by both poles at once. This is the moment of inspection before the split.'
        }
      },
      {
        ar: 'المريكز (المركز الخلوي)', en: 'Centrosome', x: 36, y: 19, side: 'right',
        desc: {
          ar: 'جسم صغير تشع منه الخيوط كالنجم. تنسخه الخلية فيصير اثنين، ثم يهاجران الى طرفين متقابلين ليصيرا القطبين اللذين يقتسمان الكروموسومات بينهما.',
          en: 'A small body from which the fibres radiate like a star. The cell copies it so there are two, and they migrate to opposite ends to become the poles that share the chromosomes between them.'
        }
      },
      {
        ar: 'الصفيحة الاستوائية', en: 'Metaphase plate', x: 71, y: 28, side: 'right',
        desc: {
          ar: 'خط وهمي في منتصف الخلية تماما تصطف عليه الكروموسومات. اصطفافها في الوسط بالضبط هو ما يضمن ان القسمة ستكون نصفين متساويين لا اكثر ولا اقل.',
          en: 'An imaginary line exactly across the middle of the cell on which the chromosomes line up. Standing precisely in the centre is what guarantees the split will be into two equal halves.'
        }
      },
      {
        ar: 'خيوط المغزل', en: 'Spindle fibres', x: 80, y: 36, side: 'right',
        desc: {
          ar: 'انابيب دقيقة تمتد من القطبين وتمسك كل كروموسوم من وسطه. هي حبال السحب وهي ايضا القضبان التي تفرق المجموعتين، وتقصر وتطول بسرعة مذهلة.',
          en: 'Fine tubes reaching out from the two poles to grip each chromosome by its middle. They are both the hauling ropes and the rails that carry the two sets apart, lengthening and shortening at remarkable speed.'
        }
      },
      {
        ar: 'الطور النهائي', en: 'Telophase', x: 64, y: 60, side: 'right',
        desc: {
          ar: 'المرحلة الاخيرة: تصل كل مجموعة الى قطبها ويعاد بناء غلاف نووي حولها، وتفك الكروموسومات التفافها وترجع خيوطا رفيعة كما كانت، فتعود نواة عاملة من جديد.',
          en: 'The last stage: each set reaches its pole and a new nuclear envelope is built around it. The chromosomes uncoil back into fine threads, and a working nucleus exists once more.'
        }
      },
      {
        ar: 'تخصر الانقسام', en: 'Cleavage furrow', x: 74, y: 70, side: 'right',
        desc: {
          ar: 'حزام من الالياف يشد الغشاء من الداخل حول خصر الخلية، فيضيق شيئا فشيئا مثل رباط يشد كيسا حتى ينقطع الجسر وتصير الخليتان مستقلتين تماما.',
          en: 'A belt of fibres pulls the membrane inward around the cell\'s waist, tightening little by little like a drawstring closing a bag, until the bridge parts and the two cells are fully separate.'
        }
      },
      {
        ar: 'النواة الوليدة', en: 'Daughter nucleus', x: 84, y: 76, side: 'right',
        desc: {
          ar: 'نواة جديدة كاملة في احدى الخليتين، تحمل نسخة مطابقة تماما لنسخة اختها. من هنا تبدا كل واحدة منهما حياتها الخاصة، وقد تنقسم هي الاخرى بعد حين.',
          en: 'A complete new nucleus in one of the two cells, carrying a copy identical to its sister\'s. From here each of them starts its own life, and in time may divide again itself.'
        }
      }
    ],
    desc: {
      ar: 'الانقسام المتساوي هو الطريقة التي يكبر بها جسمك ويرمّم نفسه. كل خلية تنسخ حمضها النووي أولا، ثم تقسم النسختين بالتساوي على نصفيها، فتخرج خليتان متطابقتان وراثيا مكان خلية واحدة. تُقرأ الصورة من أعلى اليسار: الكروموسومات تتكثف داخل النواة، ثم تصطف في وسط الخلية وخيوط المغزل ممتدة إليها من قطبين، ثم يُشد النصفان إلى القطبين، وأخيرا تنخصر الخلية في وسطها فتصير خليتين. جسمك يستبدل ملايين الخلايا كل يوم بهذه الطريقة بالضبط.',
      en: 'Mitosis is how your body grows and repairs itself. A cell first copies its DNA, then divides the two copies equally between its halves, so one cell becomes two that are genetically identical. Read the picture from the top left: the chromosomes condense inside the nucleus, then line up across the middle with spindle fibres reaching them from two poles, then the halves are hauled apart, and finally the cell pinches at its waist into two cells. Your body replaces millions of cells every day in exactly this way.'
    },
    func: {
      ar: 'صناعة خلايا جديدة للنمو ولتعويض ما يبلى: بطانة الأمعاء تُستبدل كل بضعة أيام، والجلد يتجدد باستمرار، والجرح يلتئم بانقسام الخلايا على حافتيه. ويحرس العملية نظام نقاط تفتيش يوقفها إن وقع خطأ في النسخ أو لم يُمسك كروموسوم من قطبيه، فيُصلَح الخطأ أو تُؤمر الخلية بالانتحار. وحين تتعطل هذه الحراسة يصير الانقسام بلا كابح، وهذا في جوهره ما نسميه السرطان.',
      en: 'Making new cells for growth and for replacing what wears out: the lining of the gut is renewed every few days, the skin renews itself continuously, and a wound heals as the cells at its edges divide. The process is policed by checkpoints that halt it if the copying went wrong or a chromosome is not gripped by both poles, so the fault is repaired or the cell is ordered to destroy itself. When that policing fails, division runs without a brake, and that in essence is what we call cancer.'
    },
    location: { ar: 'في كل نسيج يتجدد في الجسم: نخاع العظم والجلد وبطانة الأمعاء والكبد وحواف الجروح. أما الخلايا العصبية الناضجة وعضلة القلب فتكاد لا تنقسم', en: 'In every renewing tissue of the body: bone marrow, skin, the lining of the gut, the liver and the edges of wounds. Mature nerve cells and heart muscle, by contrast, hardly divide at all' },
    size: { ar: 'الخلية نحو ٢٠ إلى ٣٠ ميكرومترا، وفيها ٤٦ كروموسوما تصير ٩٢ نسخة قبل الانقسام. تستغرق الدورة كلها نحو ٢٤ ساعة، والانقسام نفسه أقل من ساعة منها', en: 'The cell is about 20 to 30 micrometres across and holds 46 chromosomes, which become 92 copies before division. The whole cycle takes about 24 hours, and the division itself less than an hour of it' },
    short: { ar: 'خلية تصير خليتين متطابقتين: هكذا يكبر الجسم ويرمم نفسه', en: 'One cell becomes two identical cells: this is how the body grows and repairs itself' },
    parts: [
      { ar: 'الطور التمهيدي: تتكثف الكروموسومات', en: 'Prophase: the chromosomes condense' },
      { ar: 'الطور الاستوائي: تصطف في الوسط', en: 'Metaphase: they line up in the middle' },
      { ar: 'الطور الانفصالي: تُسحب إلى القطبين', en: 'Anaphase: they are pulled to the poles' },
      { ar: 'الطور النهائي والتخصر: تصير خليتين', en: 'Telophase and cleavage: two cells appear' }
    ],
    diseases: [
      { name: { ar: 'السرطان', en: 'Cancer' }, desc: { ar: 'انقسام خرج عن السيطرة بعد تعطل نقاط التفتيش، فتتكاثر الخلايا بلا حاجة وتغزو ما حولها', en: 'Division that has escaped control after the checkpoints failed, so cells multiply without need and invade what is around them' } },
      { name: { ar: 'متلازمة داون', en: 'Down syndrome' }, desc: { ar: 'خطأ في توزيع الكروموسومات أثناء الانقسام يترك في الخلية ثلاث نسخ من الكروموسوم ٢١ بدل نسختين', en: 'A fault in sharing out the chromosomes during division that leaves the cell with three copies of chromosome 21 instead of two' } },
      { name: { ar: 'فقر الدم اللاتنسجي', en: 'Aplastic anaemia' }, desc: { ar: 'توقف انقسام الخلايا في نخاع العظم فيقل إنتاج كريات الدم بأنواعها', en: 'Cell division in the bone marrow stops, so the making of blood cells of every kind falls away' } },
      { name: { ar: 'التهاب الفم بعد العلاج الكيميائي', en: 'Chemotherapy mucositis' }, desc: { ar: 'أدوية السرطان تضرب الخلايا سريعة الانقسام، فتصيب معها بطانة الفم والأمعاء وبصيلات الشعر', en: 'Cancer drugs strike fast-dividing cells, and so hit the lining of the mouth and gut and the hair follicles along the way' } },
      { name: { ar: 'الأورام الحميدة', en: 'Benign tumours' }, desc: { ar: 'تكاثر زائد لكنه يبقى محصورا في مكانه ولا يغزو الأنسجة المجاورة ولا ينتشر', en: 'Excess multiplication that nonetheless stays confined to its place, neither invading neighbouring tissue nor spreading' } }
    ]
  }
]);

/* ---------- عضلات الوجه ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'facial-muscles', type: 'organ', system: 'muscles',
    name: { ar: 'عضلات الوجه', en: 'Facial muscles' },
    img: 'img/facial-muscles.webp', imgBack: 'img/facial-muscles-back.webp', thumb: 'img/thumb-facial-muscles.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'العضلة الصدغية', en: 'Temporalis', x: 36, y: 20, side: 'left', go: 'skull',
        desc: {
          ar: 'مروحة عريضة تملا الحفرة الصدغية فوق الاذن، وتنزل الياﻓها الى الفك السفلي. ليست من عضلات التعبير بل من عضلات المضغ: هي التي ترفع الفك وتغلق الاسنان. ضع اصابعك على صدغك واعضض تحس بها تنتفخ.',
          en: 'A broad fan filling the temple above the ear, its fibres running down to the lower jaw. It is not a muscle of expression but of chewing: it is the one that lifts the jaw and closes the teeth. Put your fingers on your temple and bite, and you will feel it swell.'
        }
      },
      {
        ar: 'الأذن', en: 'Ear', x: 20, y: 36, side: 'left', go: 'ear',
        desc: {
          ar: 'حول الاذن عضلات صغيرة اثرية بقيت عندنا من اسلاف كانوا يحركون اذانهم نحو الصوت. عند اغلب الناس صارت شبه معطلة، وقليل منهم من يستطيع تحريك اذنه.',
          en: 'Around the ear sit small leftover muscles inherited from ancestors who turned their ears towards a sound. In most people they have gone all but idle, and only a few can still waggle an ear.'
        }
      },
      {
        ar: 'العضلة الوجنية الكبيرة', en: 'Zygomaticus major', x: 51, y: 45, side: 'left',
        desc: {
          ar: 'شريط مائل ينزل من عظم الوجنة الى زاوية الفم. حين ينقبض يسحب الزاوية الى اعلى والى الخارج، وهذي هي الابتسامة. وبجانبه الوجنية الصغرى ترفع الشفة العليا معه.',
          en: 'A slanting strap running down from the cheekbone to the corner of the mouth. When it contracts it draws that corner up and out, and that is a smile. Beside it the smaller zygomaticus minor lifts the upper lip along with it.'
        }
      },
      {
        ar: 'العضلة المضغية', en: 'Masseter', x: 37, y: 51, side: 'left', go: 'tmj',
        desc: {
          ar: 'الكتلة السميكة الظاهرة فوق زاوية الفك، وهي من اقوى عضلات الجسم قياسا بحجمها. مهمتها المضغ لا التعبير: ترفع الفك السفلي بقوة تكفي لطحن الطعام القاسي. وشدها المزمن عند من يجز على اسنانه يسبب الم الفك والصداع.',
          en: 'The thick block that shows over the angle of the jaw, and for its size one of the strongest muscles in the body. Its work is chewing, not expression: it raises the lower jaw with force enough to grind hard food. Its chronic tension in people who clench their teeth brings jaw pain and headache.'
        }
      },
      {
        ar: 'العضلة البوقية', en: 'Buccinator', x: 46, y: 58, side: 'left',
        desc: {
          ar: 'عضلة الخد العميقة الممتدة من خلف الاضراس الى زاوية الفم. تضغط الخد على الاسنان فتعيد الطعام الى مساحة المضغ، وهي التي تنفخ الهواء حين تصفر او تنفخ في بوق، ومن هنا جاء اسمها.',
          en: 'The deep muscle of the cheek, running from behind the molars to the corner of the mouth. It presses the cheek against the teeth to push food back onto the chewing surface, and it is what blows the air when you whistle or play a horn, which is where its name comes from.'
        }
      },
      {
        ar: 'خافضة زاوية الفم', en: 'Depressor anguli oris', x: 54, y: 64, side: 'left',
        desc: {
          ar: 'الياف تنزل من زاوية الفم الى حافة الفك السفلي. حين تشد تسحب الزاوية الى اسفل، فيظهر تعبير الحزن او الاشمئزاز. هي الضد المباشر للوجنية الكبيرة التي ترفع نفس الزاوية للابتسامة.',
          en: 'Fibres running down from the corner of the mouth to the border of the lower jaw. When they pull, the corner is drawn downward and a look of sadness or distaste appears. It is the direct opponent of zygomaticus major, which lifts that same corner into a smile.'
        }
      },
      {
        ar: 'العضلة الكراسية', en: 'Platysma', x: 30, y: 82, side: 'left',
        desc: {
          ar: 'صفيحة رقيقة جدا كالورقة تفترش العنق كله من الصدر الى حافة الفك، وهي تحت الجلد مباشرة. تشد جلد العنق وتسحب زاويتي الفم الى اسفل، وترتخي مع العمر فتظهر خطوط العنق العمودية.',
          en: 'A sheet as thin as paper spread over the whole neck from the chest to the border of the jaw, lying directly under the skin. It tightens the skin of the neck and drags the mouth corners down, and as it slackens with age the vertical cords of the neck appear.'
        }
      },
      {
        ar: 'العضلة الجبهية', en: 'Frontalis', x: 52, y: 9, side: 'right',
        desc: {
          ar: 'صفيحة عضلية تغطي الجبهة كلها، وليس لها عظم تشد عليه من اعلى بل تتصل بغطاء ليفي على قمة الراس. حين تنقبض ترفع الحاجبين وتجعد الجبهة افقيا، وهذا تعبير الدهشة والانتباه.',
          en: 'A muscular sheet covering the whole forehead. It has no bone to pull against above, but joins a fibrous cap over the top of the head. When it contracts it lifts the eyebrows and creases the forehead in horizontal lines, the look of surprise and attention.'
        }
      },
      {
        ar: 'الجلد السليم', en: 'Intact skin', x: 77, y: 17, side: 'right', go: 'skin',
        desc: {
          ar: 'نصف الوجه هنا بقي مغطى بجلده ليتضح الفرق. عضلات الوجه تنغرس في هذا الجلد نفسه، فهي حين تشد تجر الجلد معها، ولهذا يتحرك سطح الوجه لا العظم وحده.',
          en: 'This half of the face has been left covered with its skin so the difference shows. The facial muscles are anchored into that very skin, so when they pull they drag the skin with them, and that is why the surface of the face moves and not the bone alone.'
        }
      },
      {
        ar: 'العين', en: 'Eye', x: 56, y: 28.5, side: 'right', go: 'eye',
        desc: {
          ar: 'العين محاطة بحلقة عضلية كاملة، وهذا يكفي لان يغلق الجفن حماية لها في اقل من عشر جزء من الثانية. الرمش الارادي وغير الارادي كلاهما من هذي الحلقة.',
          en: 'The eye is ringed by a complete circle of muscle, enough to close the lid in its defence in under a tenth of a second. Both voluntary and involuntary blinking come from that ring.'
        }
      },
      {
        ar: 'الدويرية العينية', en: 'Orbicularis oculi', x: 48, y: 35, side: 'right',
        desc: {
          ar: 'عضلة دائرية تحيط بالعين كالسوار. جزؤها الخارجي هو الذي يغمض العين بقوة ويكون خطوط ضحك عند الزاوية، وجزؤها الرقيق داخل الجفن هو الذي يرمش بلا ان تشعر ليوزع الدمع على القرنية.',
          en: 'A ring muscle circling the eye like a bracelet. Its outer part screws the eye tightly shut and folds the crow\'s feet at the corner, while its thin part inside the lid blinks without your noticing to spread the tear film over the cornea.'
        }
      },
      {
        ar: 'الأنف', en: 'Nose', x: 70, y: 42, side: 'right', go: 'nose',
        desc: {
          ar: 'حول الانف عضلات صغيرة توسع المنخرين عند الشهيق العميق او الغضب، واخرى تجعد جسر الانف في تعبير الاشمئزاز. صغيرة لكنها كافية لتغيير قراءة الوجه كله.',
          en: 'Small muscles around the nose widen the nostrils on a deep breath or in anger, and others wrinkle the bridge in a look of disgust. They are small, yet enough to change how the whole face reads.'
        }
      },
      {
        ar: 'الدويرية الفموية', en: 'Orbicularis oris', x: 60, y: 50, side: 'right',
        desc: {
          ar: 'حلقة عضلية تحيط بالفم وتغلق الشفتين وتزمهما. لا يمكن ان تنطق حرف الباء او الميم ولا ان تشرب بشفاطة ولا ان تقبل بدونها. وفيها تنغرس اغلب عضلات الوجه القادمة من كل جهة.',
          en: 'A ring of muscle around the mouth that closes the lips and purses them. Without it you could not sound a B or an M, nor drink through a straw, nor kiss. Most of the facial muscles, coming in from every side, take their anchorage in it.'
        }
      },
      {
        ar: 'الشفتان', en: 'Lips', x: 71, y: 56, side: 'right', go: 'lips',
        desc: {
          ar: 'تلتقي عند زاوية الفم تسع عضلات في عقدة ليفية واحدة، هي التي تحرك الزاوية في كل اتجاه. لهذا تحمل الشفتان اكبر قدر من التعبير في الوجه بعد العينين.',
          en: 'At the corner of the mouth nine muscles meet in a single fibrous knot, and it is this that swings the corner in every direction. That is why the lips carry more expression than any part of the face except the eyes.'
        }
      }
    ],
    desc: {
      ar: 'عضلات الوجه تختلف عن كل عضلات الجسم الأخرى في شيء واحد حاسم: معظمها لا يتصل بعظمين، بل ينغرس طرفه في الجلد نفسه. فحين تنقبض لا تحرك مفصلا بل تحرك الجلد، فتظهر الابتسامة والعبوس والدهشة. وهي وحدها سبب أن للإنسان وجها يُقرأ من بعيد بلا كلمة واحدة. في الصورة نصف الوجه مكشوف عن طبقة العضلات ونصفه باق بجلده لتظهر المقارنة، ويستثنى من قاعدة التعبير عضلات المضغ كالمضغية والصدغية فهي تتصل بالعظم وتحرك الفك.',
      en: 'The muscles of the face differ from every other muscle in the body in one decisive way: most of them do not join two bones, but anchor one end into the skin itself. So when they contract they move no joint, they move skin, and a smile, a frown or a look of surprise appears. They alone are the reason a human face can be read from across a room without a word. In the picture half the face is stripped to the muscle layer and half left with its skin so the two can be compared. The chewing muscles, the masseter and temporalis, are the exception: they attach to bone and move the jaw.'
    },
    func: {
      ar: 'صنع تعابير الوجه وحماية فتحاته: إغلاق الجفنين على العين، وضم الشفتين للكلام والشرب والتقبيل، وضغط الخد على الأسنان أثناء المضغ. ويقود هذه العضلات كلها عصب واحد هو العصب الوجهي (السابع)، ولهذا يسقط نصف الوجه كاملا حين يصاب هذا العصب فيما يسمى شلل بِل: تتدلى زاوية الفم ولا تغلق العين في ذلك الجانب. أما عضلات المضغ فيقودها عصب آخر، ولذلك يبقى المضغ سليما في شلل بِل.',
      en: 'Making the expressions of the face and guarding its openings: closing the lids over the eye, sealing the lips for speech, drinking and kissing, and pressing the cheek against the teeth while chewing. All of them are driven by a single nerve, the facial nerve (the seventh), which is why an injury to it drops one whole half of the face in what is called Bell\'s palsy: the corner of the mouth sags and the eye on that side will not close. The chewing muscles answer to a different nerve, so chewing is spared in Bell\'s palsy.'
    },
    location: { ar: 'في طبقة سطحية بين جلد الوجه وعظام الجمجمة، من الجبهة إلى العنق، وأعمق منها عضلات المضغ الملتصقة بالفك', en: 'In a superficial layer between the skin of the face and the bones of the skull, from the forehead down to the neck, with the chewing muscles attached to the jaw lying deeper' },
    size: { ar: 'نحو ٤٣ عضلة في الوجه، أرقها لا يتجاوز سمكه ملّيمترا واحدا، وأقواها المضغية التي تولد ضغط عضّ يصل إلى ٧٠ كيلوغراما على الأضراس', en: 'About 43 muscles in the face. The thinnest is barely a millimetre thick, while the strongest, the masseter, generates a bite of up to 70 kilograms on the molars' },
    short: { ar: 'عضلات تنغرس في الجلد لا في العظم، ولهذا للإنسان وجه يُقرأ', en: 'Muscles anchored in skin, not bone, and so a human face can be read' },
    parts: [
      { ar: 'الجبهية ترفع الحاجبين', en: 'Frontalis, which lifts the eyebrows' },
      { ar: 'الدويرية العينية تغلق الجفنين', en: 'Orbicularis oculi, which closes the lids' },
      { ar: 'الدويرية الفموية والوجنيتان تحركان الفم', en: 'Orbicularis oris and the zygomatics, which move the mouth' },
      { ar: 'المضغية والصدغية للمضغ لا للتعبير', en: 'Masseter and temporalis, for chewing rather than expression' }
    ],
    diseases: [
      { name: { ar: 'شلل بِل', en: 'Bell\'s palsy' }, desc: { ar: 'شلل مفاجئ للعصب الوجهي يُسقط نصف الوجه، وأغلب الحالات تتحسن خلال أسابيع', en: 'A sudden palsy of the facial nerve that drops one half of the face; most cases improve over a few weeks' } },
      { name: { ar: 'التشنج النصفي للوجه', en: 'Hemifacial spasm' }, desc: { ar: 'انقباضات لا إرادية متكررة في عضلات جانب واحد من الوجه، غالبا بسبب وعاء يضغط على العصب', en: 'Repeated involuntary twitching in the muscles of one side of the face, usually from a blood vessel pressing on the nerve' } },
      { name: { ar: 'صرير الأسنان', en: 'Bruxism' }, desc: { ar: 'جزّ الأسنان لا إراديا أثناء النوم فتتضخم المضغية ويؤلم الفك ويتآكل مينا الأسنان', en: 'Involuntary grinding of the teeth in sleep, which enlarges the masseter, aches the jaw and wears down the enamel' } },
      { name: { ar: 'ضعف إغلاق الجفن', en: 'Lagophthalmos' }, desc: { ar: 'عجز الدويرية العينية عن إغلاق العين تماما فتجف القرنية وتتقرح إن لم تُرطَّب', en: 'Orbicularis oculi cannot close the eye fully, so the cornea dries and may ulcerate unless it is kept moist' } }
    ]
  }
]);

/* ---------- القفص الصدري (منظر أمامي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'rib-cage', type: 'organ', system: 'skeleton',
    name: { ar: 'القفص الصدري', en: 'Rib cage' },
    img: 'img/rib-cage.webp', imgBack: 'img/rib-cage-back.webp', thumb: 'img/thumb-rib-cage.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الترقوة', en: 'Clavicle', x: 20, y: 6, side: 'left', go: 'shoulder',
        desc: {
          ar: 'عظم رفيع مقوس يمتد من اعلى القص الى الكتف، وهو العظم الوحيد الذي يربط الذراع بالهيكل المحوري. سطحي تحت الجلد مباشرة، ولهذا هو من اكثر عظام الجسم كسرا عند السقوط على الكتف.',
          en: 'A slender curved bone running from the top of the sternum to the shoulder, the only bone tying the arm to the central skeleton. It lies superficially just under the skin, which makes it one of the most commonly broken bones in a fall onto the shoulder.'
        }
      },
      {
        ar: 'لوح الكتف', en: 'Scapula', x: 16, y: 14, side: 'left',
        desc: {
          ar: 'عظم مثلث عريض يستقر على ظهر القفص ولا يلتحم به، بل يسبح فوقه معلقا بالعضلات وحدها. هذي الحرية هي ما يعطي الكتف مداه الواسع في الحركة.',
          en: 'A broad triangular bone resting on the back of the cage without being fixed to it, floating over it slung by muscle alone. That freedom is what gives the shoulder its wide range of movement.'
        }
      },
      {
        ar: 'الغضروف الساحلي', en: 'Costal cartilage', x: 45, y: 30, side: 'left',
        desc: {
          ar: 'القطع الشاحبة اللينة التي تصل طرف الضلع بالقص. لو كان الاتصال عظما صلبا لما اتسع الصدر عند الشهيق، فالغضروف هو المفصلة المرنة التي تسمح للقفص ان يتمدد ثم يرتد. ومع التقدم في العمر يتكلس فيقل اتساع الصدر.',
          en: 'The pale, pliant pieces joining the end of each rib to the sternum. Were that join solid bone, the chest could not widen on a breath: the cartilage is the springy hinge that lets the cage expand and recoil. With age it calcifies, and the chest expands less.'
        }
      },
      {
        ar: 'جسم الضلع', en: 'Body of the rib', x: 22, y: 42, side: 'left',
        desc: {
          ar: 'الضلع عظم طويل مفلطح مقوس، رقيق وخفيف ومع ذلك متين. مسار انحنائه ينزل الى الامام والى الاسفل، فحين ترتفع الاضلاع مع الشهيق يتقدم القص ويتسع الصدر في اتجاهين معا.',
          en: 'A rib is a long, flattened, curved bone, thin and light yet tough. Its curve carries it forward and downward, so when the ribs rise on a breath the sternum swings forward and the chest widens in two directions at once.'
        }
      },
      {
        ar: 'المسافة بين الضلعية', en: 'Intercostal space', x: 26.5, y: 53, side: 'left', go: 'lungs',
        desc: {
          ar: 'الفراغ بين كل ضلعين تملؤه ثلاث طبقات من العضلات بين الضلعية، وفيه ايضا يمر العصب والشريان والوريد على الحافة السفلى للضلع الاعلى. هذي العضلات هي التي ترفع الاضلاع مع كل شهيق. وخلف هذي المسافات مباشرة تتمدد الرئتان.',
          en: 'The gap between two ribs, filled by three layers of intercostal muscle and carrying the nerve, artery and vein along the lower border of the rib above. These muscles are what raise the ribs with every breath in, and directly behind these spaces the lungs expand.'
        }
      },
      {
        ar: 'القوس الساحلي والأضلاع الكاذبة', en: 'Costal margin and false ribs', x: 33, y: 65, side: 'left', go: 'diaphragm',
        desc: {
          ar: 'الاضلاع من الثامن الى العاشر لا تصل الى القص مباشرة، بل يتصل غضروف كل واحد منها بغضروف الضلع الذي فوقه فتتكون هذي الحافة المقوسة. وعلى هذا القوس بالذات يتعلق الحجاب الحاجز، وتحته يجس الطبيب حافة الكبد.',
          en: 'Ribs eight to ten do not reach the sternum directly; the cartilage of each joins the cartilage of the rib above it, and this arched border is the result. It is to this very arch that the diaphragm is attached, and just beneath it the doctor feels for the edge of the liver.'
        }
      },
      {
        ar: 'الضلع العائم', en: 'Floating rib', x: 38, y: 80.5, side: 'left',
        desc: {
          ar: 'الضلعان الحادي عشر والثاني عشر يخرجان من الفقرات وينتهيان حرين في عضلات جدار البطن بلا اي اتصال امامي. قصرهما وحريتهما يتركان الخصر مرنا، ويكشفان الكلية التي تستقر خلفهما.',
          en: 'The eleventh and twelfth ribs leave the vertebrae and end free in the muscle of the abdominal wall with no attachment in front at all. Their shortness and freedom leave the waist supple, and they leave the kidney behind them relatively exposed.'
        }
      },
      {
        ar: 'قبضة القص', en: 'Manubrium', x: 50, y: 12, side: 'right',
        desc: {
          ar: 'الجزء العلوي العريض من القص، شكله كمقبض السيف ومنه جاء اسمه. تتصل به الترقوتان من اعلى والضلع الاول من جانبيه، وفوق حافته العليا تجس الحفرة الوداجية في اسفل الرقبة.',
          en: 'The broad upper part of the sternum, shaped like the handle of a sword, which is where its name comes from. The two clavicles join it above and the first rib on each side, and over its upper border you can feel the notch at the base of the neck.'
        }
      },
      {
        ar: 'زاوية القص', en: 'Sternal angle', x: 50, y: 20, side: 'right',
        desc: {
          ar: 'الخط العرضي البارز حيث تلتقي القبضة بجسم القص. هذا اهم معلم يدوي في الصدر كله: عنده بالضبط يتصل الضلع الثاني، فيعد الطبيب بقية الاضلاع منه ليحدد مواضع القلب والرئتين.',
          en: 'The raised transverse ridge where the manubrium meets the body of the sternum. It is the most useful landmark on the whole chest: the second rib joins exactly here, and from it a doctor counts the remaining ribs to locate the heart and lungs.'
        }
      },
      {
        ar: 'جسم القص', en: 'Body of the sternum', x: 51, y: 33, side: 'right', go: 'bone-inside',
        desc: {
          ar: 'اللوح العظمي الطويل في منتصف الصدر، تتصل بجانبيه غضاريف الاضلاع من الثاني الى السابع. داخله نخاع عظم احمر نشط طول العمر، ولهذا يعد القص من اكثر المواضع التي تؤخذ منها عينة نخاع العظم. ومن خلفه مباشرة يستقر القلب.',
          en: 'The long bony plate down the middle of the chest, with the cartilages of ribs two to seven joining along its sides. Inside it is red marrow that stays active for life, which is why the sternum is one of the commonest sites for taking a bone marrow sample. Immediately behind it lies the heart.'
        }
      },
      {
        ar: 'الأضلاع الحقيقية', en: 'True ribs', x: 60, y: 45, side: 'right',
        desc: {
          ar: 'الاضلاع السبعة الاولى تسمى حقيقية لان لكل واحد منها غضروفه الخاص الواصل الى القص مباشرة. هذا الاتصال المباشر يجعل نصف القفص الاعلى اثبت واقوى حماية للقلب والرئتين.',
          en: 'The first seven ribs are called true because each has its own cartilage reaching the sternum directly. That direct join makes the upper half of the cage steadier and a firmer shield over the heart and lungs.'
        }
      },
      {
        ar: 'النتوء الرهابي', en: 'Xiphoid process', x: 50, y: 55, side: 'right',
        desc: {
          ar: 'اللسان الصغير المدبب في اسفل القص، يبقى غضروفيا في الشباب ثم يتعظم مع العمر. هو معلم مهم في الانعاش القلبي: يضغط على القص فوقه لا عليه، لان الضغط عليه قد يكسره ويجرح الكبد تحته.',
          en: 'The small pointed tongue at the bottom of the sternum, cartilage in youth and turning to bone with age. It is an important landmark in resuscitation: you press on the sternum above it, never on it, because pressure there can snap it and injure the liver beneath.'
        }
      },
      {
        ar: 'الفقرات الصدرية', en: 'Thoracic vertebrae', x: 50, y: 72, side: 'right', go: 'spine',
        desc: {
          ar: 'اثنتا عشرة فقرة تقفل القفص من الخلف، وهي الوحيدة في العمود الفقري التي تحمل اضلاعا. الاقراص الرمادية بينها وسائد مرنة تسمح للجذع ان ينحني ويلتف قليلا رغم صلابة القفص.',
          en: 'Twelve vertebrae close the cage behind, the only ones in the spine that carry ribs. The grey discs between them are elastic cushions that let the trunk bend and twist a little despite the stiffness of the cage.'
        }
      },
      {
        ar: 'مفصل الضلع بالفقرة', en: 'Costovertebral joint', x: 57, y: 78, side: 'right', go: 'vertebra-disc',
        desc: {
          ar: 'كل ضلع يتمفصل مع فقرته بمفصلين صغيرين يعملان معا كمفصلة باب. هذا هو المحور الذي يدور حوله الضلع فيرتفع مع الشهيق وينزل مع الزفير، اثنتي عشرة الف مرة او اكثر في اليوم.',
          en: 'Each rib meets its vertebra at two small joints that work together like a door hinge. This is the axis about which the rib swings, rising with each breath in and falling with each breath out, twelve thousand times a day or more.'
        }
      }
    ],
    desc: {
      ar: 'القفص الصدري بيت عظمي يحمي القلب والرئتين والأوعية الكبرى: اثنا عشر زوجا من الأضلاع تخرج من الفقرات الصدرية خلفا وتلتف إلى الأمام حيث القص. وتنقسم الأضلاع ثلاثة أقسام: الحقيقية من الأول إلى السابع ويصل غضروف كل منها إلى القص مباشرة، والكاذبة من الثامن إلى العاشر ويتصل غضروفها بغضروف الضلع الذي فوقها فتصنع القوس الساحلي، والعائمتان الحادي عشر والثاني عشر وتنتهيان حرتين بلا اتصال أمامي. والقص نفسه ثلاث قطع: القبضة والجسم والنتوء الرهابي.',
      en: 'The rib cage is a bony house guarding the heart, the lungs and the great vessels: twelve pairs of ribs leave the thoracic vertebrae behind and curve forward to the sternum. The ribs fall into three groups: the true ribs, one to seven, each with its own cartilage reaching the sternum directly; the false ribs, eight to ten, whose cartilage joins that of the rib above to form the costal margin; and the two floating ribs, eleven and twelve, which end free with no attachment in front. The sternum itself is three pieces: the manubrium, the body and the xiphoid process.'
    },
    func: {
      ar: 'حماية القلب والرئتين، وحمل حزام الكتف. لكن القفص ليس جدارا جامدا بل قفص يتنفس: مع كل شهيق ترفع العضلات بين الضلعية الأضلاع إلى أعلى والأمام، فيتقدم القص ويتسع الصدر في كل الاتجاهات، ويهبط الحجاب الحاجز المشدود إلى القوس الساحلي فيزيد الحجم من أسفل. فينخفض الضغط داخل الصدر ويدخل الهواء. ثم يرتد كل شيء بمرونة الغضاريف وحدها فيخرج الزفير بلا جهد. ويصنع نخاع القص والأضلاع كريات الدم طول العمر.',
      en: 'Protecting the heart and lungs and carrying the shoulder girdle. Yet the cage is no rigid wall but a cage that breathes: with each breath in, the intercostal muscles lift the ribs up and forward, the sternum swings out and the chest widens in every direction, while the diaphragm, anchored to the costal margin, drops and adds volume from below. The pressure inside the chest falls and air rushes in. Then everything springs back on the elasticity of the cartilages alone, and the breath out costs no effort. The marrow of the sternum and ribs makes blood cells for life.'
    },
    location: { ar: 'في الجذع بين العنق والبطن، من الفقرات الصدرية خلفا إلى القص أماما، ويفصله عن البطن الحجاب الحاجز', en: 'In the trunk between the neck and the abdomen, from the thoracic vertebrae behind to the sternum in front, separated from the abdomen by the diaphragm' },
    size: { ar: 'اثنا عشر زوجا من الأضلاع أي ٢٤ ضلعا، والقص نحو ١٧ سم طولا. ويزيد محيط الصدر نحو ٥ إلى ٨ سم بين الزفير الكامل والشهيق العميق', en: 'Twelve pairs of ribs, that is 24 in all, and a sternum about 17 cm long. The circumference of the chest grows some 5 to 8 cm between a full breath out and a deep breath in' },
    short: { ar: 'ليس جدارا جامدا بل قفص يتنفس ويتسع مع كل شهيق', en: 'Not a rigid wall but a cage that breathes, widening with every breath' },
    parts: [
      { ar: 'الأضلاع الحقيقية ١–٧ تتصل بالقص مباشرة', en: 'True ribs 1-7, joining the sternum directly' },
      { ar: 'الأضلاع الكاذبة ٨–١٠ تتصل عبر غضروف ما فوقها', en: 'False ribs 8-10, joining through the cartilage above them' },
      { ar: 'الضلعان العائمتان ١١–١٢ تنتهيان حرتين', en: 'Floating ribs 11-12, ending free' },
      { ar: 'القص بقبضته وجسمه ونتوئه الرهابي', en: 'The sternum with its manubrium, body and xiphoid process' }
    ],
    diseases: [
      { name: { ar: 'كسر الأضلاع', en: 'Rib fracture' }, desc: { ar: 'كسر مؤلم مع كل نفس، يلتئم وحده غالبا، وخطره أن تجرح شظيته الرئة تحتها', en: 'A break that hurts with every breath. It usually heals on its own; the danger is a fragment cutting the lung beneath' } },
      { name: { ar: 'الصدر المخلخل', en: 'Flail chest' }, desc: { ar: 'كسر عدة أضلاع متجاورة في موضعين فينفصل جزء من الجدار ويتحرك عكس التنفس', en: 'Several neighbouring ribs broken in two places, so a segment of the wall comes loose and moves against the breathing' } },
      { name: { ar: 'الصدر المقعّر', en: 'Pectus excavatum' }, desc: { ar: 'نمو زائد للغضاريف يدفع القص إلى الداخل فتظهر حفرة في وسط الصدر', en: 'Overgrowth of the cartilages pushes the sternum inward, leaving a hollow in the middle of the chest' } },
      { name: { ar: 'التهاب الغضروف الضلعي', en: 'Costochondritis' }, desc: { ar: 'التهاب في غضاريف الأضلاع يسبب ألما في الصدر يشبه ألم القلب لكنه يزداد بالضغط والحركة', en: 'Inflammation of the rib cartilages causing chest pain that mimics heart pain but worsens with pressure and movement' } },
      { name: { ar: 'هشاشة العظام', en: 'Osteoporosis' }, desc: { ar: 'ضعف نسيج العظم فتُكسر الأضلاع والفقرات الصدرية بإصابة بسيطة أو حتى بسعال قوي', en: 'Weakening of the bone tissue, so ribs and thoracic vertebrae break from a minor knock or even a hard cough' } }
    ]
  }
]);

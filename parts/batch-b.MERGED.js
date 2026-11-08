/* ============================================================
   batch-b.js — دفعة ب
   النخاع الشوكي · الخلية العصبية · القصبة والشعب · الحويصلات الهوائية
   الدم · أنواع الأوعية · البلعوم واللوزتان · الغدد اللعابية · الزائدة الدودية
   يُدمج في data.js لاحقاً. الإحداثيات نسبة مئوية داخل الصورة.
   ============================================================ */

ORGANS = ORGANS.concat([

  /* ---------------------------------------------------------- 1) النخاع الشوكي */
  {
    id: 'spinal-cord', type: 'organ', system: 'nervous',
    name: { ar: 'النخاع الشوكي', en: 'Spinal cord' },
    img: 'img/spinal-cord.png', imgBack: 'img/spinal-cord-back.png', thumb: 'img/thumb-spinal-cord.png',
    labels: [
      {
        ar: 'الأم الجافية', en: 'Dura mater', x: 40, y: 9, side: 'left',
        desc: {
          ar: 'الغلاف الخارجي السميك المتين الذي يحيط بالنخاع كله كالكيس. هو خط الدفاع الاول عن النخاع، ومن تحته يسحب الطبيب عينة السائل النخاعي بالابرة.',
          en: 'The thick, tough outer sheath that encloses the whole cord like a sac. It is the cord’s first line of defence, and it is beneath it that a doctor draws a sample of spinal fluid with a needle.'
        }
      },
      {
        ar: 'القرن الخلفي', en: 'Dorsal (posterior) horn', x: 39, y: 26, side: 'left',
        desc: {
          ar: 'الطرف الضيق المدبب من المادة الرمادية. هنا تصل اشارات الاحساس القادمة من الجلد والمفاصل، وهنا اول محطة يفحص فيها الجسم الالم قبل ان يرسله الى الدماغ.',
          en: 'The narrow, pointed tip of the grey matter. This is where sensation arriving from the skin and joints lands, and the first station at which the body screens pain before sending it up to the brain.'
        }
      },
      {
        ar: 'المادة البيضاء', en: 'White matter', x: 33, y: 34, side: 'left',
        desc: {
          ar: 'النسيج الشاحب المخطط حول الفراشة الرمادية، ولونه ابيض لان الالياف فيه مغلفة بالميالين الدهني. هذه الالياف حزم من الطرق: صاعدة تحمل الاحساس الى الدماغ، ونازلة تحمل اوامر الحركة منه.',
          en: 'The pale, striated tissue around the grey butterfly; it looks white because its fibres are wrapped in fatty myelin. These fibres are bundles of roads: ascending ones carry sensation up to the brain, descending ones carry movement orders down from it.'
        },
        go: 'brain'
      },
      {
        ar: 'القرن الأمامي', en: 'Ventral (anterior) horn', x: 38, y: 42, side: 'left',
        desc: {
          ar: 'الطرف العريض الممتلئ من المادة الرمادية، وفيه تسكن الخلايا العصبية الحركية الكبيرة التي تأمر العضلات بالانقباض. اذا مرضت هذه الخلايا وحدها شل الجسم مع بقاء الاحساس سليما.',
          en: 'The broad, full end of the grey matter, home to the large motor nerve cells that order muscles to contract. If these cells alone fall ill the body is paralysed while sensation stays intact.'
        }
      },
      {
        ar: 'الجذر الأمامي', en: 'Ventral root', x: 25, y: 49, side: 'left',
        desc: {
          ar: 'حزمة الخيوط الصفراء الخارجة من مقدمة النخاع، وهي طريق ذو اتجاه واحد: اوامر الحركة فقط تخرج منها الى العضلات ولا يدخل منها احساس ابدا.',
          en: 'The bundle of yellow filaments leaving the front of the cord: a one-way road on which only movement orders travel out to the muscles, and along which no sensation ever enters.'
        }
      },
      {
        ar: 'الشحم فوق الجافية', en: 'Epidural fat', x: 36, y: 62, side: 'left',
        desc: {
          ar: 'الفصوص الصفراء الطرية بين الجافية وعظم الفقرة. تعمل عمل الحشوة الواقية فتمتص الاهتزاز، وفي هذا الحيز نفسه يحقن التخدير النصفي في الولادة.',
          en: 'The soft yellow lobules between the dura and the vertebral bone. They act as protective packing that absorbs jolts, and it is into this same space that an epidural is injected in childbirth.'
        }
      },
      {
        ar: 'عظم الفقرة والنتوء الشوكي', en: 'Vertebral bone and spinous process', x: 46, y: 84, side: 'left',
        desc: {
          ar: 'العظم الاسفنجي الذي يحيط بالنخاع من الخلف، وينتهي بنتوء تحسه بيدك حين تمرر اصبعك على وسط ظهرك. هذا الطوق العظمي هو سبب بقاء النخاع سليما رغم كل ما يتلقاه الظهر من ضربات.',
          en: 'The spongy bone that surrounds the cord from behind, ending in the process you can feel with your fingers when you run them down the middle of your back. This bony ring is why the cord survives every knock the back takes.'
        },
        go: 'vertebra-disc'
      },
      {
        ar: 'الحيّز تحت العنكبوتية والسائل النخاعي', en: 'Subarachnoid space and CSF', x: 60, y: 13, side: 'right',
        desc: {
          ar: 'الفراغ المزرق الممتلئ بالسائل النخاعي، وتراه معلقا بخيوط رفيعة كنسيج العنكبوت. النخاع يسبح فيه فيخف وزنه ويعزله السائل عن كل صدمة.',
          en: 'The bluish space filled with cerebrospinal fluid, crossed by fine strands like a spider’s web. The cord floats in it, losing weight and being cushioned from every shock.'
        }
      },
      {
        ar: 'الجذر الخلفي', en: 'Dorsal root', x: 72, y: 23, side: 'right',
        desc: {
          ar: 'خيوط رفيعة تدخل الى مؤخرة النخاع حاملة كل ما احسه الجسم: لمس وحرارة والم ووضع الاطراف. مدخل الاحساس وحده لا مخرج.',
          en: 'Fine filaments entering the back of the cord carrying everything the body has felt: touch, temperature, pain and the position of the limbs. An entrance for sensation only, never an exit.'
        }
      },
      {
        ar: 'العقدة الجذرية الخلفية', en: 'Dorsal root ganglion', x: 86, y: 29, side: 'right',
        desc: {
          ar: 'الانتفاخ البيضوي على الجذر الخلفي، وفيه تتجمع اجسام خلايا الاحساس خارج النخاع. في هذه العقدة بالذات يرقد فيروس الجدري المائي سنوات ثم يستيقظ فيسبب الحزام الناري.',
          en: 'The oval swelling on the dorsal root, holding the cell bodies of the sensory neurons outside the cord. It is in this very ganglion that the chickenpox virus lies dormant for years before waking as shingles.'
        }
      },
      {
        ar: 'القناة المركزية', en: 'Central canal', x: 48.7, y: 35.4, side: 'right',
        desc: {
          ar: 'ثقب مجهري في قلب النخاع يجري فيه السائل النخاعي، وهو امتداد لتجاويف الدماغ. صغره لا يقلل شأنه: هو بقية الانبوب الجوفي الذي تكون منه الجهاز العصبي كله في الجنين.',
          en: 'A microscopic hole at the heart of the cord through which spinal fluid runs, continuous with the cavities of the brain. Its smallness belies its meaning: it is the remnant of the hollow tube from which the entire nervous system formed in the embryo.'
        }
      },
      {
        ar: 'العصب الشوكي', en: 'Spinal nerve', x: 94, y: 42.5, side: 'right',
        desc: {
          ar: 'حين يلتقي الجذر الامامي بالخلفي يولد عصب واحد مختلط يحمل الاحساس والحركة معا الى منطقة محددة من الجسم. وفي الانسان احد وثلاثون زوجا منها تخرج بين الفقرات.',
          en: 'Where the ventral and dorsal roots meet, a single mixed nerve is born carrying both sensation and movement to one defined region of the body. A human has thirty-one such pairs leaving between the vertebrae.'
        },
        go: 'nervous'
      }
    ],
    desc: {
      ar: 'النخاع الشوكي حبل عصبي بسمك الإصبع تقريباً ينزل من قاعدة الدماغ داخل نفق العظم في الظهر. تراه هنا مقطوعاً عرضاً: في وسطه مادة رمادية على هيئة فراشة، وهي أجسام الخلايا العصبية، وحولها مادة بيضاء هي كابلات الألياف الصاعدة والنازلة. من كل جانب يخرج جذر أمامي للحركة ويدخل جذر خلفي للإحساس، ويلتقيان في عصب شوكي واحد. ويحيط به ثلاثة أغلفة وسائل نخاعي يسبح فيه، ثم طوق من العظم.',
      en: 'The spinal cord is a nerve cable roughly the thickness of a finger, running down from the base of the brain inside a tunnel of bone in the back. Here it is cut across: at its centre is butterfly-shaped grey matter, the bodies of the nerve cells, surrounded by white matter, the cables of ascending and descending fibres. From each side a ventral root leaves for movement and a dorsal root enters for sensation, and the two join into a single spinal nerve. Around it lie three membranes and the fluid it floats in, then a ring of bone.'
    },
    func: {
      ar: 'ينقل كل رسالة بين الدماغ والجسم: أوامر الحركة نازلة، والإحساس صاعداً. وهو ليس مجرّد كابل، فهو يتّخذ قرارات بنفسه: حين تلمس شيئاً حارّاً تسحب يدك قبل أن يعلم دماغك، لأن النخاع أغلق الدائرة وحده في أقلّ من عُشر ثانية. وهو يضبط كذلك المنعكسات وتوتّر العضلات، ويشارك في التحكّم بالمثانة والأمعاء.',
      en: 'It carries every message between the brain and the body: movement orders down, sensation up. And it is more than a cable, for it makes decisions of its own: when you touch something hot you pull your hand away before your brain even knows, because the cord closed the circuit by itself in less than a tenth of a second. It also governs reflexes and muscle tone, and shares in the control of bladder and bowel.'
    },
    location: { ar: 'داخل القناة الشوكية في العمود الفقري، من قاعدة الجمجمة حتى الفقرة القطنية الأولى تقريباً', en: 'Inside the spinal canal of the vertebral column, from the base of the skull down to about the first lumbar vertebra' },
    size: { ar: 'طوله نحو ٤٥ سم وقطره ١ إلى ١٫٥ سم، ووزنه نحو ٣٥ غراماً فقط', en: 'About 45 cm long and 1 to 1.5 cm across, weighing only some 35 grams' },
    short: { ar: 'كابل الجسم الوحيد الذي يتّخذ قرارات بنفسه', en: 'The body’s one cable that also makes decisions of its own' },
    parts: [
      { ar: 'المادة الرمادية بقرنيها', en: 'The grey matter with its two horns' },
      { ar: 'المادة البيضاء ومساراتها', en: 'The white matter and its tracts' },
      { ar: 'الجذور والأعصاب الشوكية', en: 'The roots and the spinal nerves' },
      { ar: 'الأغلفة الثلاثة والسائل النخاعي', en: 'The three membranes and the spinal fluid' }
    ],
    diseases: [
      { name: { ar: 'إصابة النخاع الشوكي', en: 'Spinal cord injury' }, desc: { ar: 'قطع أو رضّ يوقف نقل الإشارات، فيفقد ما تحت موضع الإصابة حركته وإحساسه', en: 'A cut or crush that halts signal traffic, so everything below the level of injury loses movement and sensation' } },
      { name: { ar: 'التصلّب المتعدّد', en: 'Multiple sclerosis' }, desc: { ar: 'جهاز المناعة يهاجم غلاف الميالين في المادة البيضاء فتبطؤ الإشارة أو تنقطع', en: 'The immune system attacks the myelin sheath in the white matter, so signals slow or fail' } },
      { name: { ar: 'انزلاق غضروفي يضغط الجذر', en: 'Disc herniation pressing a root' }, desc: { ar: 'قرص بين الفقرات ينزلق فيضغط جذراً عصبياً، فيحدث ألم يمتدّ في الساق أو الذراع', en: 'A disc between the vertebrae slips onto a nerve root, giving pain that shoots down the leg or arm' } },
      { name: { ar: 'التهاب السحايا', en: 'Meningitis' }, desc: { ar: 'التهاب الأغلفة والسائل النخاعي، ويشخّص بسحب عيّنة من السائل بإبرة أسفل الظهر', en: 'Inflammation of the membranes and the spinal fluid, diagnosed by drawing a fluid sample with a needle low in the back' } },
      { name: { ar: 'ضمور العضلات الشوكي', en: 'Spinal muscular atrophy' }, desc: { ar: 'مرض وراثي يقتل الخلايا الحركية في القرن الأمامي فتضعف العضلات تدريجياً', en: 'An inherited disease that kills the motor cells of the ventral horn, so the muscles progressively weaken' } }
    ]
  },

  /* ---------------------------------------------------------- 2) الخلية العصبية */
  {
    id: 'neuron', type: 'organ', system: 'nervous',
    name: { ar: 'الخلية العصبية', en: 'Neuron' },
    img: 'img/neuron.png', imgBack: 'img/neuron-back.png', thumb: 'img/thumb-neuron.png',
    labels: [
      {
        ar: 'التغصّنات', en: 'Dendrites', x: 14, y: 11, side: 'left',
        desc: {
          ar: 'الاذرع المتشعبة كاغصان الشجرة، وهي هوائيات الخلية التي تستقبل الرسائل من خلايا اخرى. كلما زاد تشعبها زاد ما تسمعه الخلية، وخلية واحدة قد تستقبل من عشرة الاف خلية معا.',
          en: 'The arms branching like the boughs of a tree: the cell’s antennae, receiving messages from other cells. The more they branch the more the cell hears, and a single neuron may receive from ten thousand others at once.'
        }
      },
      {
        ar: 'الميتوكوندريا', en: 'Mitochondrion', x: 26, y: 19, side: 'left',
        desc: {
          ar: 'الجسيم البرتقالي المخطط، وهو محطة الطاقة داخل الخلية. الخلية العصبية شرهة للطاقة لانها تشحن غشاءها كهربائيا مئات المرات في الثانية، ولذلك يقتلها انقطاع الاكسجين في دقائق.',
          en: 'The striped orange body, the cell’s power station. A nerve cell is greedy for energy because it recharges its membrane electrically hundreds of times a second, which is why a loss of oxygen kills it within minutes.'
        }
      },
      {
        ar: 'النواة', en: 'Nucleus', x: 22, y: 28, side: 'left',
        desc: {
          ar: 'الكرة الارجوانية الكبيرة في وسط الخلية، وفيها الحمض النووي كله. من هنا تصدر التعليمات لبناء البروتينات والنواقل العصبية التي تحتاجها الخلية كل يوم.',
          en: 'The large purple sphere in the middle of the cell, holding all its DNA. From here come the instructions for building the proteins and neurotransmitters the cell needs every day.'
        }
      },
      {
        ar: 'جسم الخلية', en: 'Cell body (soma)', x: 15, y: 34, side: 'left',
        desc: {
          ar: 'الجسم النجمي الذي تخرج منه كل الاذرع، وهو مصنع الخلية ومخزنها. تراه هنا منقطا بحبيبات داكنة، وهي مصانع البروتين الغزيرة التي تميز الخلية العصبية.',
          en: 'The star-shaped body from which all the arms emerge, the cell’s factory and store. You can see it speckled with dark granules: the abundant protein workshops that mark out a nerve cell.'
        }
      },
      {
        ar: 'مخروط المحور', en: 'Axon hillock', x: 33, y: 41, side: 'left',
        desc: {
          ar: 'المخروط الذي يبدا منه المحور. هنا تجمع الخلية كل ما وصلها من اشارات مشجعة ومثبطة، فان تجاوز المجموع عتبة معينة اطلقت الشحنة، والا سكتت. نقطة القرار في الخلية كلها.',
          en: 'The cone where the axon begins. Here the cell adds up every encouraging and inhibiting signal that reached it; if the sum crosses a certain threshold it fires, and if not it stays silent. The decision point of the whole cell.'
        }
      },
      {
        ar: 'غمد الميالين', en: 'Myelin sheath', x: 40, y: 47, side: 'left',
        desc: {
          ar: 'الاسطوانات اللامعة الملفوفة حول المحور، وهي طبقات دهنية تعزل الليف مثل عازل السلك. بفضلها تقفز الاشارة من فجوة الى فجوة فتصل بسرعة تبلغ مئة متر في الثانية بدل متر واحد.',
          en: 'The glossy cylinders wrapped around the axon: fatty layers that insulate the fibre like the sheathing on a wire. Thanks to them the signal leaps from gap to gap and travels at up to a hundred metres a second instead of one.'
        }
      },
      {
        ar: 'عقدة رانفييه', en: 'Node of Ranvier', x: 46, y: 53, side: 'left',
        desc: {
          ar: 'الخصر العاري بين اسطوانتين من الميالين. هنا فقط يتلامس المحور مع الخارج فتتجدد الشحنة الكهربائية، ثم تقفز الى العقدة التالية. الفجوات هي سر السرعة لا العائق امامها.',
          en: 'The bare waist between two cylinders of myelin. Only here does the axon touch the outside world and renew its electrical charge before leaping to the next node. The gaps are the secret of the speed, not an obstacle to it.'
        }
      },
      {
        ar: 'النوية', en: 'Nucleolus', x: 25, y: 30, side: 'right',
        desc: {
          ar: 'الكرة الداكنة داخل النواة، وهي ورشة بناء الرايبوسومات التي تصنع البروتين. كبر حجمها في الخلية العصبية دليل على كثرة ما تصنعه هذه الخلية بلا توقف.',
          en: 'The darker sphere inside the nucleus, the workshop that builds the ribosomes which make protein. Its large size in a nerve cell is a sign of how much this cell manufactures without pause.'
        }
      },
      {
        ar: 'المحور العصبي', en: 'Axon', x: 54, y: 57, side: 'right',
        desc: {
          ar: 'الليف الطويل الذي تراه ذهبيا داخل الغمد، وهو كابل الخروج الوحيد من الخلية. للخلية اذرع استقبال كثيرة ومحور واحد فقط، وقد يبلغ طوله في الساق مترا كاملا من خلية واحدة.',
          en: 'The long fibre you can see gold inside its sheath: the cell’s only outgoing cable. A neuron has many receiving arms but just one axon, and in the leg a single cell’s axon may run a full metre.'
        }
      },
      {
        ar: 'نهايات المحور', en: 'Axon terminals', x: 75, y: 65, side: 'right',
        desc: {
          ar: 'حيث ينقسم المحور عند نهايته الى فروع تتجه كل واحدة الى خلية اخرى. الرسالة الواحدة تتفرع هنا فتصل عدة خلايا في اللحظة نفسها.',
          en: 'Where the axon divides at its end into branches, each heading for a different cell. A single message forks here and reaches several cells at the same moment.'
        }
      },
      {
        ar: 'الشقّ المشبكي والنواقل', en: 'Synaptic cleft and neurotransmitters', x: 91, y: 71, side: 'right',
        desc: {
          ar: 'الفجوة المضيئة بين الخليتين مع النقاط الذهبية العابرة فيها. الخليتان لا تتلامسان ابدا، بل تسبح الرسالة كيميائيا عبر هذا الشق في اقل من جزء من الف من الثانية. وهنا بالذات تعمل ادوية الاكتئاب والمخدرات.',
          en: 'The glowing gap between the two cells with the golden dots crossing it. The two never actually touch; the message swims chemically across this cleft in less than a thousandth of a second. And it is here, precisely, that antidepressants and drugs do their work.'
        }
      },
      {
        ar: 'الزرّ المشبكي والحويصلات', en: 'Synaptic bouton and vesicles', x: 82, y: 82, side: 'right',
        desc: {
          ar: 'الانتفاخ في طرف الفرع، وفي داخله كرات صغيرة معبأة بالناقل العصبي. حين تصل الشحنة الكهربائية تنفجر هذه الكرات على الغشاء فتفرغ حمولتها في الشق.',
          en: 'The swelling at the tip of the branch, packed inside with little spheres of neurotransmitter. When the electrical charge arrives these spheres burst against the membrane and empty their cargo into the cleft.'
        }
      },
      {
        ar: 'الخلية التالية', en: 'The next cell', x: 96, y: 88, side: 'right',
        desc: {
          ar: 'الخلية المستقبلة بلونها المزرق. على غشائها مستقبلات تلتقط الناقل الكيميائي فتترجمه من جديد الى شحنة كهربائية، وهكذا تسافر الفكرة من خلية الى خلية.',
          en: 'The receiving cell in its bluish tint. Receptors on its membrane catch the chemical messenger and translate it back into an electrical charge, and so a thought travels from cell to cell.'
        }
      }
    ],
    desc: {
      ar: 'الخلية العصبية وحدة بناء الجهاز العصبي كله. لها جسم فيه النواة، وأذرع كثيرة متشعّبة تستقبل الرسائل، ومحور واحد طويل يخرج بالرسالة إلى غيرها. المحور ملفوف بغمد دهني مقطّع تفصل بينه فجوات، فتقفز الشحنة من فجوة إلى فجوة قفزاً بدل أن تزحف. وفي نهاية المحور فروع تنتهي بأزرار تلامس خلية أخرى دون أن تمسّها، فتعبر الرسالة الفجوة كيميائياً. في دماغ الإنسان نحو ٨٦ مليار خلية كهذه.',
      en: 'The neuron is the building block of the entire nervous system. It has a body holding the nucleus, many branching arms that receive messages, and one long axon that carries the message out to others. The axon is wrapped in a segmented fatty sheath with gaps between the segments, so the charge leaps from gap to gap instead of creeping along. At the axon’s end, branches finish in buttons that meet another cell without touching it, and the message crosses the gap chemically. The human brain holds some 86 billion such cells.'
    },
    func: {
      ar: 'استقبال الإشارة وجمعها واتّخاذ قرار بإطلاقها أو كتمها ثم إيصالها. وهي لا تعمل وحدها أبداً: قيمتها في شبكتها. والتعلّم نفسه ليس زيادة في عدد الخلايا بل تقوية بعض المشابك وإضعاف غيرها، فما تكرّره يصير أسهل مروراً وما تهمله يخفت. ولهذا يقال إن الخلايا التي تشتعل معاً ترتبط معاً.',
      en: 'Receiving a signal, summing it, deciding whether to fire or stay silent, and passing it on. It never works alone: its value lies in its network. Learning itself is not a growth in the number of cells but a strengthening of some synapses and a weakening of others, so what you repeat passes more easily and what you neglect fades. Hence the saying that cells which fire together wire together.'
    },
    location: { ar: 'في الدماغ والنخاع الشوكي وفي كل عصب من أعصاب الجسم', en: 'In the brain, the spinal cord and every nerve in the body' },
    size: { ar: 'جسمها من ٤ إلى ١٠٠ ميكرومتر، ومحورها من أجزاء المليمتر إلى متر كامل', en: 'A cell body of 4 to 100 micrometres, with an axon from a fraction of a millimetre to a full metre' },
    short: { ar: 'خليّة واحدة قد يبلغ طول ذراعها متراً', en: 'A single cell whose arm can be a metre long' },
    parts: [
      { ar: 'جسم الخلية والنواة', en: 'The cell body and nucleus' },
      { ar: 'التغصّنات المستقبِلة', en: 'The receiving dendrites' },
      { ar: 'المحور وغمد الميالين', en: 'The axon and its myelin sheath' },
      { ar: 'النهايات والمشبك', en: 'The terminals and the synapse' }
    ],
    diseases: [
      { name: { ar: 'التصلّب المتعدّد', en: 'Multiple sclerosis' }, desc: { ar: 'المناعة تأكل غمد الميالين فتبطؤ الإشارة أو تضيع في الطريق', en: 'The immune system eats away the myelin sheath, so the signal slows or gets lost on the way' } },
      { name: { ar: 'الزهايمر', en: 'Alzheimer’s disease' }, desc: { ar: 'ترسّبات بروتينية تخنق المشابك أولاً ثم تقتل الخلايا، فتضيع الذاكرة الحديثة', en: 'Protein deposits first choke the synapses and then kill the cells, so recent memory is the first to go' } },
      { name: { ar: 'الاعتلال العصبي السكّري', en: 'Diabetic neuropathy' }, desc: { ar: 'السكّر المرتفع يتلف أطول المحاور أولاً، فيبدأ التنميل والألم من أصابع القدم', en: 'High sugar damages the longest axons first, so numbness and pain begin in the toes' } },
      { name: { ar: 'مرض العصبون الحركي', en: 'Motor neurone disease (ALS)' }, desc: { ar: 'موت تدريجي للخلايا الحركية وحدها، فتضعف العضلات مع بقاء العقل صافياً', en: 'A progressive death of the motor cells alone, so the muscles weaken while the mind stays clear' } },
      { name: { ar: 'الصرع', en: 'Epilepsy' }, desc: { ar: 'اشتعال كهربائي متزامن لعدد هائل من الخلايا دفعة واحدة فتحدث النوبة', en: 'A huge number of cells firing electrically in unison at once, producing a seizure' } }
    ]
  },

  /* ---------------------------------------------------------- 3) القصبة والشعب الهوائية */
  {
    id: 'bronchi', type: 'organ', system: 'organs',
    name: { ar: 'القصبة والشعب الهوائية', en: 'Trachea and bronchial tree' },
    img: 'img/bronchi.png', imgBack: 'img/bronchi-back.png', thumb: 'img/thumb-bronchi.png',
    labels: [
      {
        ar: 'الحنجرة', en: 'Larynx', x: 49, y: 5, side: 'left',
        desc: {
          ar: 'الصندوق الغضروفي في اعلى الصورة، وهو باب مجرى الهواء وموضع الحبال الصوتية. منه يبدا الهواء نزوله الى القصبة، وهو ايضا الحارس الذي يغلق الطريق عند البلع.',
          en: 'The cartilage box at the top of the picture: the doorway of the airway and the seat of the vocal folds. From it air begins its descent into the trachea, and it is also the guard that shuts the road during swallowing.'
        },
        go: 'larynx'
      },
      {
        ar: 'القصبة الهوائية', en: 'Trachea', x: 47, y: 20, side: 'left',
        desc: {
          ar: 'الانبوب الرئيسي النازل من الحنجرة الى الصدر. طوله نحو اثني عشر سنتيمترا، ومهمته ان يبقى مفتوحا دائما مهما تغير ضغط الصدر، فلا يتنفس الانسان بغيره.',
          en: 'The main tube descending from the larynx into the chest. It is about twelve centimetres long, and its task is to stay open at all times whatever the pressure in the chest, for there is no breathing without it.'
        }
      },
      {
        ar: 'الحلقات الغضروفية', en: 'Cartilage rings', x: 47.5, y: 31, side: 'left',
        desc: {
          ar: 'الاطواق الشاحبة المتتابعة في جدار القصبة، وهي ناقصة من الخلف على شكل حرف سي. الغضروف يمنع الانبوب من الانطباق، والفتحة الخلفية الطرية تسمح للمريء خلفه بالاتساع حين تمر اللقمة.',
          en: 'The pale successive hoops in the wall of the trachea, incomplete at the back in the shape of a letter C. The cartilage stops the tube from collapsing, while the soft gap behind lets the oesophagus expand as a mouthful passes.'
        }
      },
      {
        ar: 'الكارينا (نقطة التفرّع)', en: 'Carina (the fork)', x: 49, y: 41, side: 'left',
        desc: {
          ar: 'الحرف الحاد الذي تنقسم عنده القصبة الى قصبتين. غشاؤه شديد الحساسية، ولمسه باي جسم غريب يثير سعالا عنيفا فورا لطرد الداخل قبل ان يصل الرئة.',
          en: 'The sharp ridge at which the trachea divides into two. Its lining is extremely sensitive, and any foreign body touching it triggers a violent cough at once to expel the intruder before it reaches the lung.'
        }
      },
      {
        ar: 'القصبة الرئيسية اليمنى', en: 'Right main bronchus', x: 38, y: 48, side: 'left',
        desc: {
          ar: 'القصبة المتجهة الى الرئة اليمنى، وهي اقصر واوسع واقرب الى العمودي من اختها اليسرى. لهذا السبب بالذات يسقط الجسم المستنشق في الرئة اليمنى في اغلب الحالات.',
          en: 'The bronchus heading for the right lung: shorter, wider and more vertical than its left counterpart. For that very reason an inhaled object falls into the right lung in most cases.'
        }
      },
      {
        ar: 'القصبة الفصّية', en: 'Lobar bronchus', x: 31, y: 56, side: 'left',
        desc: {
          ar: 'الفرع الذي يخدم فصا كاملا من الرئة. للرئة اليمنى ثلاثة فصوص وللشمال فصان، فعدد هذه الفروع خمسة في الانسان.',
          en: 'The branch serving one whole lobe of the lung. The right lung has three lobes and the left two, so there are five such branches in a human.'
        }
      },
      {
        ar: 'القصبة القطعية', en: 'Segmental bronchus', x: 23, y: 64, side: 'left',
        desc: {
          ar: 'فرع اصغر يخدم قطعة مستقلة من الفص لها هواؤها ودمها وحدها. استقلال هذه القطع هو ما يمكن الجراح من استئصال قطعة مريضة وحدها وترك بقية الرئة سليمة.',
          en: 'A smaller branch serving an independent segment of the lobe with its own air and its own blood. This independence is what lets a surgeon remove one diseased segment and leave the rest of the lung intact.'
        }
      },
      {
        ar: 'الشعيبة', en: 'Bronchiole', x: 15, y: 77, side: 'left',
        desc: {
          ar: 'الفروع الرفيعة في اطراف الشجرة، وقد فقدت غضروفها فصار جدارها عضليا صرفا. انقباض هذه العضلة هو ما يضيق المجرى في نوبة الربو، ولذلك تعمل البخاخات على ارخائها.',
          en: 'The fine branches at the edges of the tree, which have lost their cartilage so their wall is pure muscle. It is the contraction of this muscle that narrows the airway in an asthma attack, which is why inhalers work by relaxing it.'
        }
      },
      {
        ar: 'الرئة', en: 'Lung', x: 85, y: 32, side: 'right',
        desc: {
          ar: 'نسيج الرئة الشفاف حول الشجرة، اظهرته الصورة باهتا لترى ما بداخله. الرئة في حقيقتها ليست كيسا فارغا بل هذه الشجرة وحويصلاتها منسوجة في اسفنج رخو.',
          en: 'The translucent lung tissue around the tree, faded here so you can see what lies inside. A lung is not really an empty bag but this tree and its air sacs woven into a soft sponge.'
        },
        go: 'lungs'
      },
      {
        ar: 'القصبة الرئيسية اليسرى', en: 'Left main bronchus', x: 60, y: 48, side: 'right',
        desc: {
          ar: 'القصبة المتجهة الى الرئة اليسرى، وهي اطول واضيق واكثر ميلا لان القلب يزاحمها في الجهة اليسرى من الصدر.',
          en: 'The bronchus heading for the left lung: longer, narrower and more slanted, because the heart crowds it on the left side of the chest.'
        }
      },
      {
        ar: 'الشعيبات الانتهائية', en: 'Terminal bronchioles', x: 87, y: 67, side: 'right',
        desc: {
          ar: 'اخر الفروع واصغرها، وتنتهي كل واحدة منها بعنقود من الحويصلات الهوائية. الشجرة كلها تتفرع نحو ثلاثا وعشرين مرة قبل ان تصل الى هنا.',
          en: 'The last and smallest branches, each ending in a cluster of air sacs. The whole tree divides about twenty-three times before it arrives here.'
        },
        go: 'alveoli'
      }
    ],
    desc: {
      ar: 'الشجرة الهوائية طريق الهواء من الحنجرة إلى أعماق الرئتين. تبدأ بقصبة واحدة مدعومة بحلقات غضروفية ناقصة تمنعها من الانطباق، ثم تنقسم عند نقطة حادّة تسمّى الكارينا إلى قصبتين رئيسيتين، ثم تتفرّع فروعاً فصّية فقطعية فشعيبات دقيقة، حتى تنتهي بعد نحو ثلاث وعشرين مرحلة تفرّع عند الحويصلات الهوائية. والصورة أظهرت نسيج الرئة باهتاً لتبيّن الشجرة وحدها.',
      en: 'The airway tree is the road of air from the larynx down into the depths of the lungs. It begins as one trachea supported by incomplete cartilage rings that keep it from collapsing, then divides at a sharp ridge called the carina into two main bronchi, then branches into lobar, then segmental, then fine bronchioles, ending after some twenty-three generations of branching at the air sacs. The picture fades the lung tissue so that only the tree is seen.'
    },
    func: {
      ar: 'إيصال الهواء نظيفاً ودافئاً ورطباً إلى الحويصلات، وإخراجه محمّلاً بثاني أكسيد الكربون. وليست الشجرة أنبوباً سلبياً: بطانتها مفروشة بأهداب مجهرية تتحرّك كحقل قمح في الريح فتدفع المخاط وما علق به من غبار وجراثيم إلى الأعلى ليُبتلع أو يُطرد بالسعال. والتدخين يشلّ هذه الأهداب أولاً، فيتراكم المخاط ويبدأ سعال المدخّن.',
      en: 'Delivering air clean, warm and moist to the air sacs, and carrying it back out laden with carbon dioxide. The tree is no passive pipe: its lining is carpeted with microscopic hairs that sway like a wheat field in the wind, driving mucus and the dust and germs caught in it upward to be swallowed or coughed away. Smoking paralyses these hairs first, so mucus builds up and the smoker’s cough begins.'
    },
    location: { ar: 'من أسفل الحنجرة في العنق، خلف عظمة القصّ، ثم داخل الرئتين في الصدر', en: 'From below the larynx in the neck, behind the breastbone, then inside the lungs in the chest' },
    size: { ar: 'القصبة نحو ١٢ سم طولاً و٢ سم عرضاً، والشعيبة الانتهائية أقلّ من نصف مليمتر', en: 'The trachea is about 12 cm long and 2 cm wide; a terminal bronchiole is under half a millimetre' },
    short: { ar: 'شجرة مقلوبة جذعها في العنق وأوراقها في الصدر', en: 'An upside-down tree with its trunk in the neck and its leaves in the chest' },
    parts: [
      { ar: 'القصبة وحلقاتها الغضروفية', en: 'The trachea and its cartilage rings' },
      { ar: 'الكارينا والقصبتان الرئيسيتان', en: 'The carina and the two main bronchi' },
      { ar: 'الفروع الفصّية والقطعية', en: 'The lobar and segmental branches' },
      { ar: 'الشعيبات والشعيبات الانتهائية', en: 'The bronchioles and terminal bronchioles' }
    ],
    diseases: [
      { name: { ar: 'الربو', en: 'Asthma' }, desc: { ar: 'تشنّج عضلة الشعيبات وتورّم بطانتها فيضيق المجرى ويصعب الزفير ويُسمع الأزيز', en: 'The bronchiolar muscle spasms and the lining swells, narrowing the airway so breathing out is hard and a wheeze is heard' } },
      { name: { ar: 'الانسداد الرئوي المزمن', en: 'COPD' }, desc: { ar: 'ضرر دائم من التدخين غالباً يجمع بين التهاب القصبات المزمن وتلف الحويصلات', en: 'Permanent damage, usually from smoking, combining chronic bronchitis with destruction of the air sacs' } },
      { name: { ar: 'التهاب القصبات', en: 'Bronchitis' }, desc: { ar: 'التهاب بطانة الشعب فيزيد المخاط ويستمرّ السعال أسابيع بعد زوال العدوى', en: 'Inflammation of the bronchial lining that raises mucus, so the cough lingers for weeks after the infection has gone' } },
      { name: { ar: 'استنشاق جسم غريب', en: 'Inhaled foreign body' }, desc: { ar: 'قطعة طعام أو لعبة تسقط غالباً في القصبة اليمنى لأنها أوسع وأقرب إلى العمودي', en: 'A piece of food or a toy usually falls into the right bronchus because it is wider and more vertical' } },
      { name: { ar: 'توسّع القصبات', en: 'Bronchiectasis' }, desc: { ar: 'اتّساع دائم في الشعب بعد التهابات متكرّرة، فتتجمّع فيها الإفرازات وتتكرّر العدوى', en: 'A permanent widening of the bronchi after repeated infections, so secretions pool in them and infection returns' } }
    ]
  },

  /* ---------------------------------------------------------- 4) الحويصلات الهوائية */
  {
    id: 'alveoli', type: 'organ', system: 'organs',
    name: { ar: 'الحويصلات الهوائية', en: 'Pulmonary alveoli' },
    img: 'img/alveoli.png', imgBack: 'img/alveoli-back.png', thumb: 'img/thumb-alveoli.png',
    labels: [
      {
        ar: 'الشعيبة الانتهائية', en: 'Terminal bronchiole', x: 10, y: 7, side: 'left',
        desc: {
          ar: 'الانبوب المضلع الداخل الى العنقود من اعلى اليسار، وهو اخر ممر يحمل الهواء دون ان يتبادله. عنده تنتهي وظيفة النقل ويبدا عمل الرئة الحقيقي.',
          en: 'The ribbed tube entering the cluster from the upper left, the last passage that carries air without exchanging any. Where it ends, transport stops and the lung’s real work begins.'
        },
        go: 'bronchi'
      },
      {
        ar: 'القناة السنخية', en: 'Alveolar duct', x: 23, y: 21, side: 'left',
        desc: {
          ar: 'اتساع الانبوب حين يفقد جداره الاملس وتبدا الحويصلات تنفتح عليه مباشرة. من هنا فصاعدا صار كل جدار سطح تبادل لا مجرد ممر.',
          en: 'The widening of the tube as it loses its smooth wall and air sacs begin to open directly onto it. From here on every wall is an exchange surface, not merely a passage.'
        }
      },
      {
        ar: 'شبكة الشعيرات الدموية', en: 'Capillary network', x: 14, y: 44, side: 'left',
        desc: {
          ar: 'الشبكة الحمراء والزرقاء المحيطة بكل حويصلة كشبكة صيد. كثافتها هي المقصود: الدم كله يمر من هنا في دقيقة واحدة، ولا حويصلة الا وهي محاطة بها من كل جهة.',
          en: 'The red and blue net wrapping every sac like a fishing net. Its density is the point: all the blood in the body passes through here in a single minute, and no sac is left unsurrounded.'
        },
        go: 'vessel-types'
      },
      {
        ar: 'الكيس السنخي', en: 'Alveolar sac', x: 22, y: 62, side: 'left',
        desc: {
          ar: 'عنقود من الحويصلات يفتح على قناة واحدة، ويشبه عنقود العنب. تجميعها في عناقيد بدل توزيعها فرادى هو ما يحشر مساحة هائلة في حجم صغير.',
          en: 'A bunch of air sacs opening onto a single duct, much like a bunch of grapes. Gathering them in clusters rather than scattering them singly is what packs an enormous surface into a small volume.'
        }
      },
      {
        ar: 'حويصلة سليمة', en: 'An intact alveolus', x: 33, y: 78, side: 'left',
        desc: {
          ar: 'حويصلة لم تفتحها الصورة، تراها كرة رقيقة الجدار مغطاة بالشعيرات. جدارها ابخس من ورقة سجائر، ومع ذلك يتحمل ملء الرئة وافراغها نحو عشرين الف مرة كل يوم.',
          en: 'A sac the illustration has left unopened: a thin-walled sphere blanketed in capillaries. Its wall is thinner than cigarette paper, yet it withstands the lung filling and emptying some twenty thousand times a day.'
        }
      },
      {
        ar: 'تجويف الحويصلة', en: 'Alveolar air space', x: 60, y: 28, side: 'right',
        desc: {
          ar: 'الفراغ الوردي داخل الحويصلة المقطوعة، وهو حيث يستقر الهواء المستنشق. سطحه مبطن بطبقة سائلة رقيقة، ولولا مادة خافضة للتوتر تفرزها الرئة لالتصق الجدار على نفسه فانطبقت الحويصلة.',
          en: 'The pink void inside the opened sac, where inhaled air comes to rest. Its surface is lined with a thin film of liquid, and were it not for a tension-lowering substance the lung secretes, the wall would stick to itself and the sac would collapse.'
        }
      },
      {
        ar: 'الحاجز بين الحويصلتين', en: 'Interalveolar septum', x: 44, y: 34, side: 'right',
        desc: {
          ar: 'الجدار الرقيق المشترك بين حويصلتين متجاورتين، وفيه تجري الشعيرات الدموية. جدار واحد يخدم حويصلتين، وهذا ادعى للاقتصاد في المساحة والدم معا.',
          en: 'The thin wall shared by two neighbouring sacs, with the capillaries running inside it. One wall serves two sacs, which economises on both space and blood.'
        }
      },
      {
        ar: 'الحاجز الهوائي الدموي', en: 'Air-blood barrier', x: 82, y: 42, side: 'right',
        desc: {
          ar: 'الغشاء الشاحب الفاصل بين الهواء والدم، وسمكه اقل من نصف ميكرومتر: خلية سنخية وخلية بطانية وما بينهما. رقته هي كل السر، فبها يعبر الغاز في اجزاء من الثانية.',
          en: 'The pale membrane between air and blood, less than half a micrometre thick: one alveolar cell, one endothelial cell, and what lies between. Its thinness is the whole secret, letting gas cross in fractions of a second.'
        }
      },
      {
        ar: 'ثاني أكسيد الكربون خارجاً', en: 'Carbon dioxide leaving', x: 75, y: 48, side: 'right',
        desc: {
          ar: 'الجزيئات الحمراء والسهم المتجه من الدم الى الهواء. ثاني اكسيد الكربون فضلة احتراق الطعام في الخلايا، ويطرد هنا مع كل زفرة.',
          en: 'The red molecules and the arrow pointing from blood to air. Carbon dioxide is the waste of burning food in the cells, and it is expelled here with every breath out.'
        }
      },
      {
        ar: 'الأكسجين داخلاً', en: 'Oxygen entering', x: 75, y: 54, side: 'right',
        desc: {
          ar: 'الجزيئات الفضية والسهم المتجه من الهواء الى الدم. لا مضخة ولا طاقة في هذا العبور، بل ينتقل الغاز وحده من حيث يكثر الى حيث يقل.',
          en: 'The silver molecules and the arrow pointing from air into blood. No pump and no energy drive this crossing; the gas moves on its own from where it is plentiful to where it is scarce.'
        }
      },
      {
        ar: 'دم قبل الأكسجة', en: 'Blood before oxygenation', x: 86, y: 66, side: 'right',
        desc: {
          ar: 'الكريات الداكنة المزرقة القادمة من الجسم فقيرة بالاكسجين. تدخل من هذه الجهة زرقاء وتخرج من الجهة الاخرى حمراء زاهية، وهذا كل ما يحدث في الرئة.',
          en: 'The dark, bluish cells arriving from the body poor in oxygen. They enter on this side blue and leave on the other bright red, and that is all that happens in a lung.'
        }
      },
      {
        ar: 'كريّة حمراء في الشعيرة', en: 'Red cell in a capillary', x: 70, y: 73, side: 'right',
        desc: {
          ar: 'كرية حمراء تمر في الشعيرة، والشعيرة اضيق منها فتنثني الكرية لتمر. هذا الانثناء نفسه يلصقها بالجدار فيقصر المسافة التي يقطعها الاكسجين.',
          en: 'A red cell passing through a capillary narrower than itself, so the cell bends to get through. That very bending presses it against the wall and shortens the distance the oxygen must travel.'
        },
        go: 'blood'
      }
    ],
    desc: {
      ar: 'الحويصلات الهوائية هي المكان الوحيد في الجسم كلّه الذي يدخل فيه الأكسجين إلى الدم. عناقيد من الأكياس الدقيقة في أطراف الشجرة الهوائية، جدار كلّ كيس أرقّ من ورقة، وحوله شبكة شعيرات دموية كثيفة. بين هواء الكيس ودم الشعيرة غشاء واحد رفيع يسمح للغاز أن يعبر في الاتجاهين بلا مضخّة ولا طاقة، لمجرّد فرق التركيز. وفي الرئتين نحو ٣٠٠ مليون حويصلة، لو فُرشت لغطّت ملعب تنس.',
      en: 'The alveoli are the one place in the whole body where oxygen enters the blood. They are clusters of tiny sacs at the tips of the airway tree, each wall thinner than a sheet of paper and each sac wrapped in a dense net of capillaries. Between the air in the sac and the blood in the capillary lies a single thin membrane that lets gas cross both ways with no pump and no energy, on difference of concentration alone. The lungs hold some 300 million alveoli; spread flat they would cover a tennis court.'
    },
    func: {
      ar: 'تبادل الغازات: يعبر الأكسجين من الهواء إلى الدم وثاني أكسيد الكربون من الدم إلى الهواء، وكلاهما ينتقل من حيث يكثر إلى حيث يقلّ بلا جهد من الجسم. والحويصلات تفرز كذلك مادة تخفض توتّر السطح فتمنعها من الانطباق عند الزفير، وهذه المادة بالذات هي ما ينقص الطفل الخديج فيصعب عليه التنفّس. وفيها خلايا بلعمية تلتهم ما يصل من غبار وجراثيم.',
      en: 'Gas exchange: oxygen crosses from air into blood and carbon dioxide from blood into air, each moving from where it is abundant to where it is scarce with no effort from the body. The sacs also secrete a substance that lowers surface tension and stops them collapsing on breathing out, and it is exactly this substance a premature baby lacks, which is why breathing is so hard for it. They also hold scavenger cells that devour arriving dust and germs.'
    },
    location: { ar: 'في أطراف الشجرة الهوائية داخل نسيج الرئتين', en: 'At the tips of the airway tree within the lung tissue' },
    size: { ar: 'قطر الحويصلة نحو ٠٫٢ مليمتر، وعددها نحو ٣٠٠ مليون، ومساحتها مجتمعة نحو ٧٠ متراً مربّعاً', en: 'Each sac is about 0.2 mm across; there are some 300 million of them, with a combined surface of roughly 70 square metres' },
    short: { ar: 'ملعب تنس مطويّ داخل صدرك', en: 'A tennis court folded up inside your chest' },
    parts: [
      { ar: 'القناة السنخية والكيس', en: 'The alveolar duct and sac' },
      { ar: 'جدار الحويصلة والمادة الخافضة للتوتّر', en: 'The alveolar wall and its surfactant' },
      { ar: 'شبكة الشعيرات الدموية', en: 'The capillary network' },
      { ar: 'الحاجز الهوائي الدموي', en: 'The air-blood barrier' }
    ],
    diseases: [
      { name: { ar: 'النُّفاخ الرئوي', en: 'Emphysema' }, desc: { ar: 'تحطّم جدران الحويصلات فتندمج في أكياس كبيرة، وتضيع المساحة فيضيق النفس', en: 'The sac walls break down and merge into large bags, so the surface is lost and breath grows short' } },
      { name: { ar: 'الالتهاب الرئوي', en: 'Pneumonia' }, desc: { ar: 'امتلاء الحويصلات بالسائل والقيح بدل الهواء فيتوقّف التبادل في المنطقة المصابة', en: 'The sacs fill with fluid and pus instead of air, so exchange stops in the affected area' } },
      { name: { ar: 'الوذمة الرئوية', en: 'Pulmonary oedema' }, desc: { ar: 'تسرّب سائل من الشعيرات إلى الحويصلات، غالباً بسبب ضعف القلب، فيغرق المريض بلا ماء', en: 'Fluid leaks from the capillaries into the sacs, usually from a failing heart, drowning the patient without water' } },
      { name: { ar: 'التليّف الرئوي', en: 'Pulmonary fibrosis' }, desc: { ar: 'تصلّب الحاجز بين الهواء والدم فيسمك، ويصير عبور الأكسجين بطيئاً وصعباً', en: 'The barrier between air and blood stiffens and thickens, so oxygen crosses slowly and with difficulty' } },
      { name: { ar: 'ضيق تنفّس الوليد', en: 'Newborn respiratory distress' }, desc: { ar: 'نقص المادة الخافضة للتوتّر عند الخديج فتنطبق حويصلاته مع كل زفير', en: 'A premature baby lacks the surfactant, so its air sacs collapse with every breath out' } }
    ]
  },

  /* ---------------------------------------------------------- 5) الدم */
  {
    id: 'blood', type: 'organ', system: 'vessels',
    name: { ar: 'الدم', en: 'Blood' },
    img: 'img/blood.png', imgBack: 'img/blood-back.png', thumb: 'img/thumb-blood.png',
    labels: [
      {
        ar: 'كريّة الدم الحمراء', en: 'Red blood cell', x: 17, y: 19, side: 'left',
        desc: {
          ar: 'القرص الاحمر المقعر الوجهين، واكثر خلايا الجسم عددا. تحمل الهيموغلوبين الذي يمسك الاكسجين، ولا نواة لها ولا ميتوكوندريا، فقد تخلت عن كل شيء لتفرغ نفسها للحمولة.',
          en: 'The red biconcave disc, the most numerous cell in the body. It carries the haemoglobin that grips oxygen, and has neither nucleus nor mitochondria: it gave up everything to free itself for its cargo.'
        }
      },
      {
        ar: 'الصفيحة الدموية', en: 'Platelet', x: 23.5, y: 27, side: 'left',
        desc: {
          ar: 'الجسيم الشاحب الصغير ذو الاشواك. ليست خلية كاملة بل شظية اقتطعت من خلية عملاقة في النخاع العظمي. تسبح ملساء حتى ترى جرحا فتنبت هذه الاشواك وتتشابك لتسد الفتحة.',
          en: 'The small pale spiky body. Not a whole cell but a fragment torn from a giant cell in the bone marrow. It swims smooth until it sees a wound, then sprouts these spikes and interlocks to plug the hole.'
        }
      },
      {
        ar: 'الكريّة العدلة', en: 'Neutrophil', x: 28, y: 38, side: 'left',
        desc: {
          ar: 'الخلية الكبيرة ذات النواة الارجوانية المقسمة الى فصوص، وسيتوبلازمها محبب. اكثر كريات الدم البيضاء عددا واسرعها وصولا: تخرج من الوعاء الى موضع العدوى وتبتلع الجراثيم، وجثثها هي القيح.',
          en: 'The large cell with a purple nucleus split into lobes and grainy cytoplasm. The most numerous and fastest-arriving white cell: it leaves the vessel for the site of infection and swallows germs, and its corpses are what we call pus.'
        }
      },
      {
        ar: 'البلازما', en: 'Plasma', x: 32, y: 46, side: 'left',
        desc: {
          ar: 'السائل الكهرماني الذي تسبح فيه الخلايا كلها، وهو اكثر من نصف حجم الدم. تسعة اعشاره ماء والباقي بروتينات واملاح وسكر وهرمونات، فهو ناقل كل شيء لا الاكسجين وحده.',
          en: 'The amber fluid in which all the cells swim, and more than half the volume of blood. Nine tenths of it is water and the rest proteins, salts, sugar and hormones, so it carries everything, not oxygen alone.'
        }
      },
      {
        ar: 'جدار الوعاء', en: 'Vessel wall', x: 14, y: 55, side: 'left',
        desc: {
          ar: 'الجدار المخطط المحيط بالمجرى، وقد فتحته الصورة لترى ما بداخله. بطانته الداخلية املس سطح في الجسم، ولو خشنت لحظة لالتصقت به الصفيحات وتكونت الجلطة.',
          en: 'The striated wall around the stream, opened here so you can see inside. Its inner lining is the smoothest surface in the body; were it to roughen for a moment, platelets would stick to it and a clot would form.'
        },
        go: 'vessel-types'
      },
      {
        ar: 'الكريّة اللمفاوية', en: 'Lymphocyte', x: 47, y: 31, side: 'right',
        desc: {
          ar: 'الخلية ذات النواة الزرقاء الكبيرة التي تملا الخلية كلها ولا تترك الا حافة رقيقة. هي ذاكرة المناعة: تعرف الميكروب الذي مر بك من قبل فتقضي عليه قبل ان تمرض، وعليها تقوم فكرة التطعيم.',
          en: 'The cell whose big blue nucleus fills it entirely, leaving only a thin rim. It is the memory of immunity: it recognises a germ that passed through you before and destroys it before you fall ill, and on this the whole idea of vaccination rests.'
        }
      },
      {
        ar: 'الكريّة الحمضة', en: 'Eosinophil', x: 81, y: 49, side: 'right',
        desc: {
          ar: 'الخلية المكتظة بحبيبات برتقالية زاهية حول نواة ذات فصين. عددها قليل في الحالة الطبيعية، ويرتفع في الحساسية والربو وعند الاصابة بالديدان الطفيلية.',
          en: 'The cell crowded with bright orange granules around a two-lobed nucleus. It is few in health, and rises in allergy and asthma and when parasitic worms are present.'
        }
      },
      {
        ar: 'الكريّة الوحيدة', en: 'Monocyte', x: 65, y: 56, side: 'right',
        desc: {
          ar: 'اكبر كريات الدم البيضاء، بنواة ارجوانية على شكل كلية وسيتوبلازم رمادي واسع. تبقى في الدم يوما او يومين ثم تغادر الى الانسجة وتتحول الى بلعمية كبيرة تاكل الحطام والخلايا الميتة.',
          en: 'The largest white cell, with a kidney-shaped purple nucleus and a broad grey cytoplasm. It stays in the blood a day or two, then leaves for the tissues and becomes a large scavenger that eats debris and dead cells.'
        }
      },
      {
        ar: 'الشكل المقعّر الوجهين', en: 'The biconcave shape', x: 70, y: 64, side: 'right',
        desc: {
          ar: 'انظر الى الكرية من زاويتها: قرص منخفض في وسطه من الجهتين كالكعكة بلا ثقب. هذا الشكل يزيد سطحها ويجعلها مرنة، فتنطوي وتمر في شعيرة اضيق منها.',
          en: 'Look at the cell from its angle: a disc dipped in the middle on both sides, like a doughnut without the hole. The shape enlarges its surface and makes it supple, so it folds and squeezes through a capillary narrower than itself.'
        }
      },
      {
        ar: 'تجمّع الصفيحات', en: 'Platelets gathering', x: 85, y: 72, side: 'right',
        desc: {
          ar: 'صفيحات متعددة قرب الجدار. مكانها هذا مقصود: تسبح عند الحافة لا في الوسط لتكون اقرب ما يمكن الى اي شق يحدث في الجدار.',
          en: 'Several platelets near the wall. Their place is deliberate: they travel at the edge rather than in the middle so as to be as close as possible to any tear that opens in the wall.'
        }
      }
    ],
    desc: {
      ar: 'الدم نسيج سائل. أكثر من نصفه بلازما، وهي ماء فيه بروتينات وأملاح وسكّر وهرمونات، والباقي خلايا: كريّات حمراء تحمل الأكسجين وهي الأكثر عدداً بفارق هائل، وكريّات بيضاء بأنواع مختلفة كلّ نوع له عمل في الدفاع، وصفيحات صغيرة مهمّتها سدّ الجروح. الصورة تفتح وعاءً لترى الثلاثة تسبح معاً في البلازما.',
      en: 'Blood is a liquid tissue. More than half of it is plasma, water carrying proteins, salts, sugar and hormones; the rest is cells: red cells that carry oxygen and outnumber everything else by a vast margin, white cells of several kinds each with its own task in defence, and small platelets whose job is to seal wounds. The picture opens a vessel so you can see all three swimming together in the plasma.'
    },
    func: {
      ar: 'نقل الأكسجين والغذاء إلى كلّ خليّة وحمل الفضلات عنها، والدفاع عن الجسم ضدّ الميكروبات، ووقف النزف عند الجرح. وله وظائف أقلّ شهرة وليست أقلّ أهمية: توزيع الحرارة في الجسم كلّه، ونقل الهرمونات من الغدّة إلى العضو البعيد، وحفظ توازن الماء والحموضة. ودورة الدم كلّها تدور في الجسم مرّة كلّ دقيقة تقريباً.',
      en: 'Carrying oxygen and food to every cell and taking waste away, defending the body against germs, and stopping bleeding at a wound. It has less famous duties that matter no less: spreading heat through the whole body, ferrying hormones from a gland to a distant organ, and keeping water and acidity in balance. The entire volume of blood circles the body about once a minute.'
    },
    location: { ar: 'داخل القلب والأوعية الدموية في الجسم كلّه', en: 'Inside the heart and the blood vessels throughout the body' },
    size: { ar: 'نحو ٥ لترات في البالغ، فيها قرابة ٢٥ تريليون كريّة حمراء تعيش الواحدة ١٢٠ يوماً', en: 'About 5 litres in an adult, holding some 25 trillion red cells, each living 120 days' },
    short: { ar: 'نهرٌ يجري في الجسم ويحمل كلّ شيء', en: 'A river running through the body, carrying everything' },
    parts: [
      { ar: 'البلازما', en: 'The plasma' },
      { ar: 'الكريّات الحمراء', en: 'The red cells' },
      { ar: 'الكريّات البيضاء بأنواعها', en: 'The white cells in their kinds' },
      { ar: 'الصفيحات الدموية', en: 'The platelets' }
    ],
    diseases: [
      { name: { ar: 'فقر الدم', en: 'Anaemia' }, desc: { ar: 'نقص الكريّات الحمراء أو الهيموغلوبين فيقلّ الأكسجين الواصل، ويأتي التعب والشحوب', en: 'A shortage of red cells or haemoglobin, so less oxygen arrives and tiredness and pallor follow' } },
      { name: { ar: 'اللوكيميا', en: 'Leukaemia' }, desc: { ar: 'سرطان يجعل النخاع يصنع كريّات بيضاء مشوّهة بأعداد هائلة تزاحم الخلايا السليمة', en: 'A cancer that makes the marrow produce huge numbers of deformed white cells that crowd out the healthy ones' } },
      { name: { ar: 'الهيموفيليا', en: 'Haemophilia' }, desc: { ar: 'نقص وراثي في عامل تخثّر، فلا تتماسك الجلطة وينزف الجرح الصغير طويلاً', en: 'An inherited lack of a clotting factor, so the clot does not hold and a small wound bleeds for a long time' } },
      { name: { ar: 'فقر الدم المنجلي', en: 'Sickle cell disease' }, desc: { ar: 'خلل وراثي يجعل الكريّة تتقوّس كالمنجل فتسدّ الشعيرات وتسبّب نوبات ألم', en: 'An inherited fault that bends the cell into a sickle, so it blocks capillaries and brings on attacks of pain' } },
      { name: { ar: 'الجلطة الوريدية', en: 'Venous thrombosis' }, desc: { ar: 'تجلّط الدم داخل وريد سليم، غالباً بعد ركود طويل، وقد تنتقل القطعة إلى الرئة', en: 'Blood clotting inside a healthy vein, often after long immobility, and a piece may travel to the lung' } }
    ]
  },

  /* ---------------------------------------------------------- 6) أنواع الأوعية الدموية */
  {
    id: 'vessel-types', type: 'organ', system: 'vessels',
    name: { ar: 'أنواع الأوعية الدموية', en: 'Types of blood vessel' },
    img: 'img/vessel-types.png', imgBack: 'img/vessel-types-back.png', thumb: 'img/thumb-vessel-types.png',
    labels: [
      {
        ar: 'الغلاف الخارجي', en: 'Outer coat (tunica externa)', x: 20, y: 16, side: 'left',
        desc: {
          ar: 'الطبقة الخارجية من جدار الشريان، وهي نسيج ليفي متين تراه هنا تجري عليه اوعية دقيقة حمراء وزرقاء. هذه الاوعية الصغيرة تغذي جدار الشريان نفسه، فالجدار سميك جدا لا يكفيه ما في مجراه من دم.',
          en: 'The outer layer of the arterial wall, a tough fibrous tissue with tiny red and blue vessels running over it. Those little vessels feed the artery’s own wall, for it is far too thick to be nourished by the blood in its own stream.'
        }
      },
      {
        ar: 'الطبقة العضلية الوسطى', en: 'Muscular middle layer (tunica media)', x: 20, y: 29, side: 'left',
        desc: {
          ar: 'الطبقة الحمراء السميكة المخططة، وهي عضل املس والياف مرنة. سماكتها هي ما يميز الشريان: تتمدد مع كل ضربة قلب ثم ترتد فتدفع الدم قدما، والنبض الذي تحسه في معصمك هو هذه الطبقة.',
          en: 'The thick striated red layer of smooth muscle and elastic fibres. Its thickness is what defines an artery: it stretches with every heartbeat then springs back to push the blood on, and the pulse you feel at your wrist is this layer.'
        }
      },
      {
        ar: 'البطانة الداخلية', en: 'Endothelium (intima)', x: 20, y: 39, side: 'left',
        desc: {
          ar: 'الخط اللامع المتموج الملاصق للمجرى، وهو صف واحد من خلايا مسطحة. املس ما في الجسم، ولا يلتصق به الدم ابدا ما دام سليما. وتصلب الشرايين يبدا من خدش في هذا الصف بالذات.',
          en: 'The glossy wavy line hugging the lumen: a single row of flattened cells. It is the smoothest thing in the body, and blood never sticks to it while it is intact. Hardening of the arteries begins with a scratch in exactly this row.'
        }
      },
      {
        ar: 'لمعة الشريان', en: 'Arterial lumen', x: 20, y: 55, side: 'left',
        desc: {
          ar: 'المجرى الذي يسير فيه الدم، وتراه هنا ضيقا نسبة الى سماكة الجدار. الشريان يحمل دما تحت ضغط عال قادما من القلب مباشرة، ولذلك بني جداره سميكا ومجراه ضيقا.',
          en: 'The channel the blood runs in, narrow here relative to the thickness of the wall. An artery carries blood under high pressure straight from the heart, and so it is built with a thick wall and a narrow bore.'
        },
        go: 'blood'
      },
      {
        ar: 'جدار الوريد الرقيق', en: 'The thin venous wall', x: 48, y: 46, side: 'left',
        desc: {
          ar: 'قارن سماكته بجدار الشريان الى يساره. الدم يصل هنا وقد فقد اغلب ضغطه، فلا حاجة الى جدار قوي، ولذلك ينطبق الوريد بسهولة اذا ضغطت عليه باصبعك.',
          en: 'Compare its thickness with the arterial wall to its left. Blood arrives here having lost most of its pressure, so no strong wall is needed, which is why a vein flattens easily under the press of a finger.'
        }
      },
      {
        ar: 'الشريان', en: 'Artery', x: 8, y: 68, side: 'left',
        desc: {
          ar: 'الوعاء الاول في الصورة، والاسمك جدارا والادور شكلا. يحمل الدم من القلب الى الجسم، ويحفظ استدارته حتى لو فرغ من الدم لان جداره يشد نفسه.',
          en: 'The first vessel in the picture, the thickest-walled and the roundest. It carries blood from the heart out to the body and keeps its round shape even when empty, because its wall holds itself open.'
        },
        go: 'vessels'
      },
      {
        ar: 'الوريد', en: 'Vein', x: 65, y: 22, side: 'right',
        desc: {
          ar: 'الوعاء الاوسط، مجراه واسع وجداره رقيق. الاوردة تحمل نحو ثلثي دم الجسم في اي لحظة، فهي خزان الجسم لا مجرد طريق عودة.',
          en: 'The middle vessel: a wide bore and a thin wall. The veins hold about two thirds of the body’s blood at any moment, so they are the body’s reservoir and not merely a road home.'
        }
      },
      {
        ar: 'الدم فوق الصمّام', en: 'Blood above the valve', x: 58, y: 30, side: 'right',
        desc: {
          ar: 'الكريات الحمراء في القسم العلوي من الوريد، بعد ان تجاوزت الصمام. لا تستطيع الرجوع الى الاسفل، وهذا هو معنى الاتجاه الواحد.',
          en: 'The red cells in the upper part of the vein, past the valve. They cannot fall back down, and that is what one-way means.'
        }
      },
      {
        ar: 'الصمّام الوريدي', en: 'Venous valve', x: 61.5, y: 41.5, side: 'right',
        desc: {
          ar: 'شرفتان رقيقتان تلتقيان في المنتصف كجيبين. حين يصعد الدم تنفتحان، وحين يهم بالرجوع يملؤهما فتنطبقان. لولا هذه الصمامات وضغط عضلات الساق لما عاد الدم من القدم الى القلب صعودا ضد الجاذبية، وتلفها هو سبب دوالي الساقين.',
          en: 'Two thin cusps meeting in the middle like a pair of pockets. When blood rises they open; when it starts to fall back it fills them and they shut. Without these valves and the squeeze of the calf muscles, blood would never climb from the foot to the heart against gravity, and their failure is the cause of varicose veins.'
        }
      },
      {
        ar: 'الشعيرة الدموية', en: 'Capillary', x: 86, y: 52, side: 'right',
        desc: {
          ar: 'الوعاء الثالث والاصغر، جداره طبقة واحدة من الخلايا لا اكثر. رقة الجدار مقصودة: هنا وحده يخرج الغذاء والاكسجين من الدم الى الانسجة، اما الشريان والوريد فمجرد طرق.',
          en: 'The third and smallest vessel, its wall a single layer of cells and no more. The thinness is the point: here alone do food and oxygen leave the blood for the tissues, while artery and vein are merely roads.'
        }
      },
      {
        ar: 'كريّة تمرّ مفردة', en: 'A red cell passing single file', x: 91, y: 60, side: 'right',
        desc: {
          ar: 'الشعيرة اضيق من الكرية الحمراء نفسها، فتمر الكريات واحدة اثر واحدة وتنثني وهي تمر. بطء المرور وقربها من الجدار يعطيان الوقت الكافي للتبادل.',
          en: 'The capillary is narrower than the red cell itself, so the cells pass one behind another, bending as they go. The slowness and the closeness to the wall give exchange the time it needs.'
        },
        go: 'blood'
      },
      {
        ar: 'نواة خليّة بطانية', en: 'Endothelial cell nucleus', x: 84, y: 66, side: 'right',
        desc: {
          ar: 'النواة البنفسجية البارزة في جدار الشعيرة. حجمها بالنسبة الى الوعاء يريك كم هو صغير: خلية واحدة قد تلف الشعيرة كلها بجسمها.',
          en: 'The purple nucleus bulging in the capillary wall. Its size relative to the vessel shows you just how small the vessel is: one cell may wrap the entire capillary in its own body.'
        }
      }
    ],
    desc: {
      ar: 'ثلاثة أنواع من الأوعية معروضة جنباً إلى جنب في مقطع عرضي. الشريان أوّلاً: جدار سميك من ثلاث طبقات أهمّها طبقة عضلية مرنة، ومجرى ضيّق، لأنه يستقبل الدم من القلب تحت ضغط عالٍ. ثمّ الوريد: جدار أرقّ بكثير ومجرى أوسع، وفي داخله صمّام من شرفتين يمنع الدم من الرجوع. ثمّ الشعيرة: أصغرها جميعاً، جدارها طبقة واحدة من الخلايا، وهي وحدها موضع التبادل الحقيقي. والثلاثة يبطّنها من الداخل الصفّ الأملس نفسه.',
      en: 'Three kinds of vessel shown side by side in cross-section. First the artery: a thick three-layered wall whose chief layer is elastic muscle, and a narrow bore, because it receives blood from the heart under high pressure. Then the vein: a far thinner wall and a wider bore, holding inside it a two-cusped valve that stops blood falling back. Then the capillary: smallest of all, its wall a single layer of cells, and the only true site of exchange. All three are lined inside by the same smooth row of cells.'
    },
    func: {
      ar: 'الشرايين توصّل وتوزّع وتمتصّ صدمة ضربة القلب، فالضغط الذي يخرج نابضاً يصل إلى الأنسجة هادئاً. والشعيرات تسلّم البضاعة: أكسجين وغذاء تخرج، وثاني أكسيد الكربون وفضلات تدخل. والأوردة تجمع العائد وتخزّنه وترجعه، مستعينة بصمّاماتها وبعضلات الساق التي تعمل مضخّة ثانية كلّما مشيت. ولهذا يُنصح بالحركة في السفر الطويل.',
      en: 'The arteries deliver and distribute and absorb the shock of the heartbeat, so pressure that leaves pulsing arrives at the tissues smooth. The capillaries hand over the goods: oxygen and food out, carbon dioxide and waste in. The veins gather the return, store it and send it back, helped by their valves and by the calf muscles which act as a second pump every time you walk. Which is why moving about on a long journey is advised.'
    },
    location: { ar: 'في كلّ نسيج من الجسم؛ لا خليّة حيّة تبعد عن شعيرة أكثر من بضع خلايا', en: 'In every tissue of the body; no living cell lies more than a few cells away from a capillary' },
    size: { ar: 'الأبهر نحو ٢٫٥ سم قطراً، والشعيرة نحو ٨ ميكرومتر، ومجموع طول الأوعية نحو ١٠٠ ألف كيلومتر', en: 'The aorta is about 2.5 cm across, a capillary about 8 micrometres, and the vessels together run some 100,000 kilometres' },
    short: { ar: 'ثلاثة أنابيب، وأصغرها وحده هو الذي يعمل', en: 'Three tubes, and only the smallest of them does the work' },
    parts: [
      { ar: 'الشريان وطبقاته الثلاث', en: 'The artery and its three layers' },
      { ar: 'الوريد وصمّامه', en: 'The vein and its valve' },
      { ar: 'الشعيرة الدموية', en: 'The capillary' },
      { ar: 'البطانة الداخلية المشتركة', en: 'The shared inner lining' }
    ],
    diseases: [
      { name: { ar: 'تصلّب الشرايين', en: 'Atherosclerosis' }, desc: { ar: 'ترسّب الدهون في الجدار بعد تلف البطانة، فيضيق المجرى ويقسو الجدار', en: 'Fat deposits in the wall after the lining is damaged, so the bore narrows and the wall stiffens' } },
      { name: { ar: 'ارتفاع ضغط الدم', en: 'High blood pressure' }, desc: { ar: 'ضغط دائم فوق الحدّ يرهق الجدار والقلب والكليتين معاً بلا أعراض غالباً', en: 'Pressure that stays above the mark, wearing on the wall, the heart and the kidneys alike, usually with no symptoms' } },
      { name: { ar: 'الدوالي', en: 'Varicose veins' }, desc: { ar: 'تلف صمّامات الوريد فيرتدّ الدم ويتجمّع، فيتّسع الوريد ويلتوي تحت الجلد', en: 'The venous valves fail so blood falls back and pools, widening and twisting the vein under the skin' } },
      { name: { ar: 'تمدّد الأوعية', en: 'Aneurysm' }, desc: { ar: 'ضعف موضعي في جدار الشريان فينتفخ كالبالون، وخطره أن ينفجر', en: 'A local weakness in an arterial wall that balloons out, its danger being rupture' } },
      { name: { ar: 'اعتلال الشعيرات السكّري', en: 'Diabetic microangiopathy' }, desc: { ar: 'السكّر المرتفع يتلف جدران الشعيرات فتتضرّر شبكية العين والكلية والأعصاب', en: 'High sugar damages capillary walls, harming the retina, the kidney and the nerves' } }
    ]
  },

  /* ---------------------------------------------------------- 7) البلعوم واللوزتان */
  {
    id: 'pharynx', type: 'organ', system: 'organs',
    name: { ar: 'البلعوم واللوزتان', en: 'Pharynx and tonsils' },
    img: 'img/pharynx.png', imgBack: 'img/pharynx-back.png', thumb: 'img/thumb-pharynx.png',
    labels: [
      {
        ar: 'تجويف الأنف', en: 'Nasal cavity', x: 25, y: 20, side: 'left',
        desc: {
          ar: 'الممر العلوي وفيه الطيات اللحمية التي تدفئ الهواء وترطبه. الهواء يبدا رحلته هنا ثم ينزل الى البلعوم، فالانف والفم يلتقيان في طريق واحد.',
          en: 'The upper passage with its fleshy folds that warm and moisten the air. Air begins its journey here and then descends into the pharynx, where nose and mouth meet on one road.'
        },
        go: 'nose'
      },
      {
        ar: 'الحنك الصلب', en: 'Hard palate', x: 32, y: 34, side: 'left',
        desc: {
          ar: 'الصفيحة العظمية التي تفصل الانف عن الفم، وهي سقف فمك الذي تحسه بلسانك صلبا. صلابتها ضرورية ليضغط اللسان عليها الطعام ويسحقه.',
          en: 'The bony plate that separates nose from mouth: the roof of your mouth, which your tongue feels as hard. Its hardness is needed so the tongue can press food against it and crush it.'
        }
      },
      {
        ar: 'الأسنان', en: 'Teeth', x: 16, y: 42, side: 'left',
        desc: {
          ar: 'صف الاسنان العلوي عند مدخل الفم. هنا يبدا الهضم بالتقطيع والطحن قبل ان تنتقل اللقمة الى البلعوم.',
          en: 'The upper row of teeth at the entrance of the mouth. Here digestion begins with cutting and grinding, before the mouthful moves on to the pharynx.'
        },
        go: 'teeth'
      },
      {
        ar: 'اللسان', en: 'Tongue', x: 28, y: 58, side: 'left',
        desc: {
          ar: 'الكتلة العضلية الكبيرة في ارضية الفم. هو الذي يدفع اللقمة الى الخلف فيبدا البلع، وبعد هذه الدفعة يصير البلع لا اراديا فلا يمكنك ايقافه.',
          en: 'The large muscular mass in the floor of the mouth. It is what pushes the mouthful backwards to start the swallow, and after that push swallowing becomes involuntary and cannot be stopped.'
        },
        go: 'tongue'
      },
      {
        ar: 'العظم اللامي', en: 'Hyoid bone', x: 45, y: 70, side: 'left',
        desc: {
          ar: 'العظم الصغير المعلق في العنق، وهو العظم الوحيد في الجسم الذي لا يفصل بينه وبين اي عظم اخر. تشد عليه عضلات اللسان والحنجرة، فيرتفع مع كل بلعة.',
          en: 'The small bone slung in the neck, the only bone in the body that joins no other bone. The muscles of the tongue and larynx pull on it, and it rises with every swallow.'
        }
      },
      {
        ar: 'اللوزة البلعومية (الناميات)', en: 'Pharyngeal tonsil (adenoid)', x: 63, y: 14, side: 'right',
        desc: {
          ar: 'الكتلة اللمفاوية المحببة في سقف البلعوم الانفي. تكبر في الطفولة ثم تضمر مع البلوغ، واذا تضخمت عند الطفل سدت مجرى الانف فصار يتنفس من فمه ويشخر في نومه.',
          en: 'The knobbly lymphoid mass in the roof of the nasopharynx. It grows in childhood then shrinks after puberty, and when it enlarges in a child it blocks the nasal passage so the child breathes through the mouth and snores in sleep.'
        }
      },
      {
        ar: 'البلعوم الأنفي', en: 'Nasopharynx', x: 54, y: 22, side: 'right',
        desc: {
          ar: 'القسم الاعلى من البلعوم خلف الانف مباشرة، وهو ممر هواء خالص لا يمر فيه طعام. وعلى جداره تفتح قناة تصله بالاذن الوسطى، ومنها تصعد نزلات البرد فتلتهب اذن الطفل.',
          en: 'The topmost part of the pharynx, right behind the nose, a purely air passage through which no food passes. On its wall opens a tube connecting it with the middle ear, and up that tube colds climb to inflame a child’s ear.'
        }
      },
      {
        ar: 'الحنك الرخو', en: 'Soft palate', x: 52.5, y: 30, side: 'right',
        desc: {
          ar: 'امتداد عضلي طري للحنك الصلب. عند البلع يرتفع فيغلق مدخل الانف اغلاقا محكما، ولولاه لخرج الشراب من انفك كلما شربت.',
          en: 'The soft muscular continuation of the hard palate. On swallowing it lifts and seals the entrance to the nose completely; without it a drink would come out of your nose every time you swallowed.'
        }
      },
      {
        ar: 'اللوزة الحنكية', en: 'Palatine tonsil', x: 66.5, y: 37, side: 'right',
        desc: {
          ar: 'الكتلة المحببة بين قوسي الحنك، وهي اللوزة التي تراها بعينك اذا فتحت فمك ونظرت في المراة. سطحها مجعد بحفر عميقة تحبس الميكروبات لتفحصها المناعة، وهذه الحفر نفسها هي ما يتقيح في التهاب اللوزتين.',
          en: 'The knobbly mass between the two palatal arches: the tonsil you can see with your own eyes if you open your mouth before a mirror. Its surface is puckered with deep pits that trap germs for the immune system to inspect, and it is those same pits that fill with pus in tonsillitis.'
        }
      },
      {
        ar: 'اللهاة', en: 'Uvula', x: 58, y: 44, side: 'right',
        desc: {
          ar: 'النتوء الصغير المتدلي في نهاية الحنك الرخو. تشارك في اغلاق مدخل الانف وفي نطق بعض الحروف الحلقية مثل الغين والخاء، واهتزازها اثناء النوم جزء من الشخير.',
          en: 'The small process hanging at the end of the soft palate. It helps seal the nasal doorway and shapes certain throaty sounds, and its fluttering during sleep is part of snoring.'
        }
      },
      {
        ar: 'لوزة اللسان', en: 'Lingual tonsil', x: 52, y: 50.5, side: 'right',
        desc: {
          ar: 'نسيج لمفاوي محبب مفروش على قاعدة اللسان. مع اللوزتين الحنكيتين واللوزة البلعومية تكون حلقة كاملة من الحراس حول مدخل الحلق تفحص كل ما يدخل بهواء او طعام.',
          en: 'Knobbly lymphoid tissue carpeting the base of the tongue. With the palatine and pharyngeal tonsils it completes a full ring of sentries around the entrance to the throat, screening everything that enters by air or by food.'
        }
      },
      {
        ar: 'البلعوم الفموي', en: 'Oropharynx', x: 61, y: 56.5, side: 'right',
        desc: {
          ar: 'القسم الاوسط من البلعوم خلف الفم، وهو الوحيد الذي يمر فيه الهواء والطعام معا. هذا التقاطع هو نقطة الضعف في تصميم الجسم كله، وهو سبب الشرقة.',
          en: 'The middle part of the pharynx behind the mouth, and the only stretch through which both air and food pass. This crossing is the weak point in the body’s whole design, and the reason we choke.'
        }
      },
      {
        ar: 'لسان المزمار', en: 'Epiglottis', x: 56, y: 63, side: 'right',
        desc: {
          ar: 'الصفيحة الغضروفية على شكل ورقة فوق مدخل الحنجرة. عند البلع تنقلب الى الوراء فتغطي مجرى الهواء كالغطاء على الوعاء، فتنزل اللقمة الى المريء ولا تدخل الرئة.',
          en: 'The leaf-shaped cartilage plate above the entrance of the larynx. On swallowing it tips backwards and covers the airway like a lid on a pot, so the mouthful goes down the oesophagus and not into the lung.'
        },
        go: 'larynx'
      },
      {
        ar: 'البلعوم الحنجري', en: 'Laryngopharynx', x: 64, y: 69, side: 'right',
        desc: {
          ar: 'القسم الاسفل من البلعوم، وعنده يفترق الطريقان اخيرا: الهواء الى الحنجرة اماما والطعام الى المريء خلفا. من هنا فصاعدا لا اختلاط.',
          en: 'The lowest part of the pharynx, where the two roads finally part: air forward into the larynx, food backward into the oesophagus. From here on there is no more mixing.'
        }
      }
    ],
    desc: {
      ar: 'البلعوم أنبوب عضلي خلف الأنف والفم والحنجرة، وهو ملتقى طريقَي الهواء والطعام. ينقسم ثلاثة أقسام: بلعوم أنفي للهواء وحده، وبلعوم فموي يمرّ فيه الاثنان معاً، وبلعوم حنجري يفترقان عنده. وفي جداره حلقة من النسيج اللمفاوي: اللوزة البلعومية في السقف، واللوزتان الحنكيتان على الجانبين، ولوزة اللسان في القاع. وفوق مدخل الحنجرة صفيحة غضروفية تنقلب عند البلع فتغلق مجرى الهواء.',
      en: 'The pharynx is a muscular tube behind the nose, mouth and larynx, the meeting place of the roads of air and food. It falls into three parts: a nasopharynx for air alone, an oropharynx where both pass together, and a laryngopharynx where they part. In its wall lies a ring of lymphoid tissue: the pharyngeal tonsil in the roof, the two palatine tonsils at the sides, and the lingual tonsil in the floor. Above the entrance of the larynx a cartilage plate tips back on swallowing and shuts the airway.'
    },
    func: {
      ar: 'تمرير الهواء إلى الحنجرة والطعام إلى المريء دون أن يختلطا. والبلع عملية دقيقة تشترك فيها أكثر من ثلاثين عضلة في أقلّ من ثانية: يرتفع الحنك الرخو فيغلق الأنف، ويرتفع الحنجرة فينقلب لسان المزمار فوق مجراها، وتنقبض عضلات البلعوم متتابعة فتدفع اللقمة. وإذا اختلّ التزامن دخل شيء إلى القصبة فجاء السعال حارساً. وللبلعوم دور في الصوت أيضاً، فهو حجرة الرنين التي تعطي صوتك طابعه.',
      en: 'Passing air to the larynx and food to the oesophagus without the two mixing. Swallowing is a precise act involving more than thirty muscles in under a second: the soft palate lifts to close the nose, the larynx rises so the epiglottis tips over its opening, and the pharyngeal muscles contract in sequence to drive the mouthful down. If the timing slips, something enters the windpipe and coughing steps in as a guard. The pharynx shapes the voice too, being the resonating chamber that gives your voice its character.'
    },
    location: { ar: 'خلف تجويفَي الأنف والفم وأمام الفقرات العنقية، من قاعدة الجمجمة إلى الفقرة العنقية السادسة', en: 'Behind the nasal and oral cavities and in front of the cervical vertebrae, from the base of the skull to the sixth neck vertebra' },
    size: { ar: 'طوله نحو ١٢ إلى ١٤ سم، واللوزة الحنكية بحجم حبّة لوز عند البالغ', en: 'About 12 to 14 cm long, with a palatine tonsil the size of an almond in an adult' },
    short: { ar: 'مفترق الطرق الوحيد بين الهواء والطعام', en: 'The one crossroads where air and food must share a road' },
    parts: [
      { ar: 'البلعوم الأنفي والفموي والحنجري', en: 'The naso-, oro- and laryngopharynx' },
      { ar: 'حلقة اللوزات الثلاث', en: 'The ring of the three tonsils' },
      { ar: 'الحنك الرخو واللهاة', en: 'The soft palate and the uvula' },
      { ar: 'لسان المزمار', en: 'The epiglottis' }
    ],
    diseases: [
      { name: { ar: 'التهاب اللوزتين', en: 'Tonsillitis' }, desc: { ar: 'احمرار اللوزتين وتورّمهما مع بقع قيح وألم شديد عند البلع وحمّى', en: 'The tonsils redden and swell with spots of pus, with severe pain on swallowing and fever' } },
      { name: { ar: 'تضخّم الناميات', en: 'Enlarged adenoids' }, desc: { ar: 'كتلة سقف البلعوم تكبر عند الطفل فتسدّ الأنف، فيتنفّس من فمه ويشخر ويضعف نومه', en: 'The mass in the roof of the pharynx enlarges in a child and blocks the nose, so they mouth-breathe, snore and sleep badly' } },
      { name: { ar: 'التهاب البلعوم', en: 'Pharyngitis' }, desc: { ar: 'التهاب فيروسي غالباً يسبّب خشونة الحلق وألمه، ولا ينفع فيه المضادّ الحيوي', en: 'A usually viral inflammation giving a rough, sore throat, for which an antibiotic does nothing' } },
      { name: { ar: 'انقطاع النفس النومي', en: 'Obstructive sleep apnoea' }, desc: { ar: 'ارتخاء جدران البلعوم أثناء النوم فينسدّ المجرى ويتوقّف النفس مراراً كلّ ليلة', en: 'The pharyngeal walls slacken in sleep so the airway closes and breathing stops again and again each night' } },
      { name: { ar: 'الشرقة (استنشاق الطعام)', en: 'Aspiration' }, desc: { ar: 'دخول طعام أو شراب إلى القصبة حين يختلّ تزامن البلع، وقد يسبّب التهاباً رئوياً', en: 'Food or drink entering the windpipe when the timing of the swallow slips, and it can cause pneumonia' } }
    ]
  },

  /* ---------------------------------------------------------- 8) الغدد اللعابية */
  {
    id: 'salivary-glands', type: 'organ', system: 'organs',
    name: { ar: 'الغدد اللعابية', en: 'Salivary glands' },
    img: 'img/salivary-glands.png', imgBack: 'img/salivary-glands-back.png', thumb: 'img/thumb-salivary-glands.png',
    labels: [
      {
        ar: 'صيوان الأذن', en: 'Auricle of the ear', x: 9, y: 9, side: 'left',
        desc: {
          ar: 'الاذن معلم مهم هنا لا مجرد جوار: الغدة النكفية تجلس امامها وتحتها مباشرة، ولهذا يسمى تورمها بالنكاف تورما امام الاذن.',
          en: 'The ear is an important landmark here and not a mere neighbour: the parotid gland sits directly in front of and below it, which is why its swelling in mumps is described as a swelling in front of the ear.'
        },
        go: 'ear'
      },
      {
        ar: 'العصب الوجهي', en: 'Facial nerve', x: 36, y: 19, side: 'left',
        desc: {
          ar: 'الخيوط الصفراء المتفرعة كمروحة، وهي عصب حركة الوجه كله. يمر داخل الغدة النكفية ويقسمها الى فصين، ولهذا فان اي عملية على النكفية عملية دقيقة: خطا صغير يترك الوجه مشلولا.',
          en: 'The yellow threads fanning out: the nerve that moves the entire face. It runs through the parotid gland and divides it into two lobes, which is why any operation on the parotid is delicate work: a small slip leaves the face paralysed.'
        }
      },
      {
        ar: 'الغدة النكفية', en: 'Parotid gland', x: 22, y: 25, side: 'left',
        desc: {
          ar: 'الكتلة المفصصة الكبيرة امام الاذن، واكبر الغدد اللعابية. لعابها مائي صاف خال من المخاط، وهي التي تتورم في مرض النكاف فيصير الوجه منتفخا امام الاذنين.',
          en: 'The large lobulated mass in front of the ear, the biggest of the salivary glands. Its saliva is watery and clear, free of mucus, and it is the gland that swells in mumps, puffing out the face before the ears.'
        }
      },
      {
        ar: 'الوريد الوداجي الخارجي', en: 'External jugular vein', x: 18, y: 43, side: 'left',
        desc: {
          ar: 'الوريد الازرق النازل على جانب العنق فوق العضلة. تراه بارزا تحت الجلد اذا حبس الانسان نفسه، والاطباء ينظرون اليه ليقدروا ضغط الدم العائد الى القلب.',
          en: 'The blue vein running down the side of the neck over the muscle. It stands out under the skin when a person holds their breath, and doctors watch it to judge the pressure of blood returning to the heart.'
        }
      },
      {
        ar: 'الغدة تحت الفكّية', en: 'Submandibular gland', x: 43, y: 66, side: 'left',
        desc: {
          ar: 'الكتلة المفصصة تحت زاوية الفك. تفرز خليطا من اللعاب المائي والمخاطي، وهي مصدر اكثر من نصف اللعاب في اليوم. قناتها طويلة وصاعدة، ولهذا هي اكثر الغدد تكونا للحصى.',
          en: 'The lobulated mass under the angle of the jaw. It secretes a mixture of watery and mucous saliva and supplies more than half the day’s output. Its duct is long and runs uphill, which is why it is the gland most prone to forming stones.'
        }
      },
      {
        ar: 'العضلة الماضغة', en: 'Masseter muscle', x: 52, y: 18, side: 'right',
        desc: {
          ar: 'العضلة السميكة المخططة في الخد، وهي اقوى عضلات المضغ. قناة الغدة النكفية تعبر فوقها لتصل الى الفم، وتحس بها اذا اطبقت اسنانك ووضعت يدك على خدك.',
          en: 'The thick striated muscle of the cheek, the strongest of the chewing muscles. The parotid duct crosses over it on its way to the mouth, and you can feel it if you clench your teeth with a hand on your cheek.'
        }
      },
      {
        ar: 'قناة الغدة النكفية', en: 'Parotid duct', x: 55, y: 30, side: 'right',
        desc: {
          ar: 'الانبوب الشاحب الذي يعبر الخد افقيا من الغدة الى الفم، وينفتح في مقابل الضرس العلوي الثاني. طوله نحو خمسة سنتيمترات، ومنه يتدفق اللعاب مباشرة على الطعام اثناء المضغ.',
          en: 'The pale tube crossing the cheek horizontally from gland to mouth, opening opposite the second upper molar. It is about five centimetres long, and through it saliva pours straight onto the food as you chew.'
        }
      },
      {
        ar: 'الأسنان', en: 'Teeth', x: 80, y: 37, side: 'right',
        desc: {
          ar: 'اللعاب يغسل الاسنان بلا انقطاع ويعادل حموضة الطعام ويعيد اليها المعادن. لهذا يكثر التسوس بشدة عند من جف فمه لدواء او مرض.',
          en: 'Saliva washes the teeth without pause, neutralises the acid of food and returns minerals to them. That is why decay runs rampant in anyone whose mouth has dried from a medicine or an illness.'
        },
        go: 'teeth'
      },
      {
        ar: 'اللسان', en: 'Tongue', x: 70, y: 44, side: 'right',
        desc: {
          ar: 'اللسان يخلط اللعاب بالطعام ويجمعه لقمة واحدة. ولا طعم بلا لعاب: جزيئات الطعام لا تصل الى براعم التذوق الا وهي مذابة فيه.',
          en: 'The tongue mixes saliva into the food and gathers it into a single bolus. And there is no taste without saliva: food molecules only reach the taste buds dissolved in it.'
        },
        go: 'tongue'
      },
      {
        ar: 'الغدة تحت اللسان', en: 'Sublingual gland', x: 65, y: 52, side: 'right',
        desc: {
          ar: 'الغدة الممتدة تحت اللسان مباشرة، واصغر الغدد الثلاث الكبرى. لعابها مخاطي لزج، ولها قنوات صغيرة عديدة تنفتح في ارضية الفم بدل قناة واحدة.',
          en: 'The gland stretched directly beneath the tongue, smallest of the three major glands. Its saliva is thick and mucous, and it opens by many small ducts into the floor of the mouth rather than one.'
        }
      },
      {
        ar: 'قناة الغدة تحت الفكّية', en: 'Submandibular duct', x: 63, y: 60, side: 'right',
        desc: {
          ar: 'الانبوب الشاحب الصاعد من الغدة الى ارضية الفم تحت اللسان. صعوده ضد الجاذبية هو سبب ركود اللعاب فيه احيانا وتكون الحصاة، فيتورم تحت الفك عند الاكل ثم يزول.',
          en: 'The pale tube climbing from the gland to the floor of the mouth beneath the tongue. Its uphill run is why saliva sometimes stagnates in it and a stone forms, so the area under the jaw swells at mealtimes and then subsides.'
        }
      }
    ],
    desc: {
      ar: 'ثلاث غدد كبرى على كلّ جانب من الوجه تصنع اللعاب. النكفية أكبرها، تجلس أمام الأذن ويعبرها العصب الوجهي، وقناتها تقطع الخدّ إلى الفم. وتحت الفكّية تحت زاوية الفكّ وقناتها تصعد إلى أرضية الفم. وتحت اللسان أصغرها، ممتدّة تحت اللسان مباشرة. ومعها مئات الغدد الصغيرة المبثوثة في الشفة والخدّ والحنك. والصورة ترينا الجانب الأيسر من الوجه وقد أُزيل الجلد.',
      en: 'Three major glands on each side of the face make saliva. The parotid is the largest, sitting in front of the ear with the facial nerve running through it and its duct crossing the cheek to the mouth. The submandibular lies under the angle of the jaw with a duct climbing to the floor of the mouth. The sublingual is the smallest, stretched right beneath the tongue. With them are hundreds of tiny glands scattered through lip, cheek and palate. The picture shows the left side of the face with the skin removed.'
    },
    func: {
      ar: 'إفراز نحو لتر ونصف من اللعاب كلّ يوم. واللعاب أكثر من ماء: فيه إنزيم يبدأ هضم النشا في الفم قبل المعدة، ومواد قاتلة للجراثيم، وأملاح تعيد إلى المينا معادنها فتقاوم التسوّس، ومخاط يزلّق اللقمة فتنزلق في البلعوم. وبه وحده يذوب الطعام فتحسّه براعم التذوّق. والفم الجافّ ليس مجرّد إزعاج: هو تسوّس سريع والتهابات متكرّرة وصعوبة في الكلام والبلع.',
      en: 'Producing about a litre and a half of saliva each day. And saliva is far more than water: it holds an enzyme that starts digesting starch in the mouth before the stomach, substances that kill bacteria, salts that return minerals to the enamel so it resists decay, and mucus that lubricates the mouthful so it slides down the throat. It alone dissolves food so the taste buds can sense it. A dry mouth is not a mere nuisance: it means fast decay, repeated infections and difficulty with speech and swallowing.'
    },
    location: { ar: 'النكفية أمام الأذن، وتحت الفكّية تحت زاوية الفكّ، وتحت اللسان في أرضية الفم', en: 'The parotid in front of the ear, the submandibular under the angle of the jaw, and the sublingual in the floor of the mouth' },
    size: { ar: 'النكفية نحو ٢٥ غراماً، وتحت الفكّية نحو ١٥، وتحت اللسان نحو ٣؛ والإفراز نحو ١٫٥ لتر يومياً', en: 'The parotid weighs about 25 grams, the submandibular about 15 and the sublingual about 3; output is around 1.5 litres a day' },
    short: { ar: 'لتر ونصف كلّ يوم، ولا تشعر بقطرة منه', en: 'A litre and a half a day, and you never notice a drop' },
    parts: [
      { ar: 'الغدة النكفية وقناتها', en: 'The parotid gland and its duct' },
      { ar: 'الغدة تحت الفكّية وقناتها', en: 'The submandibular gland and its duct' },
      { ar: 'الغدة تحت اللسان', en: 'The sublingual gland' },
      { ar: 'الغدد اللعابية الصغيرة', en: 'The minor salivary glands' }
    ],
    diseases: [
      { name: { ar: 'النكاف', en: 'Mumps' }, desc: { ar: 'عدوى فيروسية تورّم الغدّة النكفية على الجانبين، ويقي منها التطعيم', en: 'A viral infection that swells the parotid on both sides; vaccination prevents it' } },
      { name: { ar: 'حصاة الغدة اللعابية', en: 'Salivary stone' }, desc: { ar: 'حصاة تسدّ القناة فتتورّم الغدّة وتؤلم عند الأكل ثم تهدأ بعده', en: 'A stone blocks the duct so the gland swells and aches at mealtimes and settles afterwards' } },
      { name: { ar: 'جفاف الفم', en: 'Dry mouth (xerostomia)' }, desc: { ar: 'نقص اللعاب بسبب أدوية أو علاج إشعاعي، فيكثر التسوّس ويصعب البلع', en: 'Reduced saliva from medicines or radiotherapy, so decay multiplies and swallowing grows hard' } },
      { name: { ar: 'متلازمة شوغرن', en: 'Sjögren’s syndrome' }, desc: { ar: 'مرض مناعي يهاجم الغدد اللعابية والدمعية فيجفّ الفم والعينان معاً', en: 'An autoimmune disease attacking the salivary and tear glands, so mouth and eyes dry together' } },
      { name: { ar: 'أورام الغدة النكفية', en: 'Parotid tumours' }, desc: { ar: 'كتلة أمام الأذن، وجراحتها دقيقة لأن العصب الوجهي يمرّ داخل الغدّة', en: 'A lump in front of the ear, whose surgery is delicate because the facial nerve runs inside the gland' } }
    ]
  },

  /* ---------------------------------------------------------- 9) الزائدة الدودية */
  {
    id: 'appendix', type: 'organ', system: 'organs',
    name: { ar: 'الزائدة الدودية', en: 'Vermiform appendix' },
    img: 'img/appendix.png', imgBack: 'img/appendix-back.png', thumb: 'img/thumb-appendix.png',
    labels: [
      {
        ar: 'الأعور', en: 'Caecum', x: 18, y: 15, side: 'left',
        desc: {
          ar: 'الكيس الواسع الذي تبدا عنده الامعاء الغليظة، وسمي اعور لانه مغلق من طرف واحد كالجيب. فيه يستقر ما يصل من الامعاء الدقيقة قبل ان يبدا رحلته في القولون.',
          en: 'The wide pouch at which the large intestine begins, called blind because it is closed at one end like a pocket. In it settles what arrives from the small intestine before starting its journey through the colon.'
        },
        go: 'large-intestine'
      },
      {
        ar: 'الشريط القولوني', en: 'Taenia coli', x: 26, y: 24, side: 'left',
        desc: {
          ar: 'الشريط الكريمي الطولي على سطح الاعور. ثلاثة اشرطة كهذه تجري على القولون كله، وهي عضل طولي اقصر من الامعاء نفسها فتكشكشها وتعطيها شكلها المنتفخ. وفائدتها للجراح انها تلتقي جميعا عند قاعدة الزائدة، فيتبعها ليجدها.',
          en: 'The cream longitudinal band on the surface of the caecum. Three such bands run the whole length of the colon: longitudinal muscle shorter than the bowel itself, so it gathers it and gives it its pouched shape. Their use to a surgeon is that all three converge on the base of the appendix, so he follows them to find it.'
        }
      },
      {
        ar: 'الانتفاخات', en: 'Haustra', x: 10, y: 33, side: 'left',
        desc: {
          ar: 'الاكياس المتتابعة في جدار الاعور، تكونت لان الاشرطة العضلية اقصر من الامعاء فشدتها. ليست زينة: هي التي تحبس المحتوى قليلا في كل جيب فيمتص منه الماء والاملاح.',
          en: 'The successive pouches in the wall of the caecum, formed because the muscular bands are shorter than the bowel and gather it up. They are not decoration: each pocket holds the contents back a while so water and salts can be absorbed.'
        }
      },
      {
        ar: 'بطانة الأعور', en: 'Lining of the caecum', x: 33, y: 42, side: 'left',
        desc: {
          ar: 'السطح الوردي الداخلي وقد فتحته الصورة. لا زغب فيه كما في الامعاء الدقيقة لان مهمته ليست الامتصاص بل سحب الماء وايواء بكتيريا القولون النافعة.',
          en: 'The pink inner surface, laid open in the picture. It has none of the villi of the small intestine because its task is not absorption but drawing off water and housing the useful bacteria of the colon.'
        }
      },
      {
        ar: 'قاعدة الزائدة', en: 'Base of the appendix', x: 49, y: 63, side: 'left',
        desc: {
          ar: 'النقطة التي تخرج منها الزائدة من الاعور، وموضعها ثابت لا يتغير مهما تغير اتجاه الزائدة نفسها. اسقاطها على جدار البطن هو ما يسمى نقطة مكبرني، وهي اشد موضع الما في التهاب الزائدة.',
          en: 'The point where the appendix leaves the caecum, a fixed place however the appendix itself may be oriented. Its projection onto the abdominal wall is what is called McBurney’s point, the tenderest spot in appendicitis.'
        }
      },
      {
        ar: 'اللفائفي', en: 'Ileum', x: 67, y: 22, side: 'right',
        desc: {
          ar: 'اخر الامعاء الدقيقة، ويدخل الى الاعور من هذه الجهة. هنا ينتهي عمل الهضم والامتصاص، ويسلم ما تبقى الى القولون ليسحب منه الماء.',
          en: 'The last part of the small intestine, entering the caecum from this side. Here digestion and absorption end, and what remains is handed to the colon to have its water drawn off.'
        },
        go: 'small-intestine'
      },
      {
        ar: 'الصمّام اللفائفي الأعوري', en: 'Ileocecal valve', x: 50, y: 30, side: 'right',
        desc: {
          ar: 'الشفتان البارزتان الى داخل الاعور عند مدخل اللفائفي. تنفتحان لتمرير المحتوى ثم تنطبقان، فتمنعان رجوعه ومعه بكتيريا القولون الى الامعاء الدقيقة النظيفة.',
          en: 'The two lips protruding into the caecum at the entrance of the ileum. They open to let the contents through then shut, keeping them and the colon’s bacteria from flowing back into the cleaner small intestine.'
        }
      },
      {
        ar: 'دهن المساريقا', en: 'Mesenteric fat', x: 80, y: 45, side: 'right',
        desc: {
          ar: 'النسيج الشحمي الاصفر المعلق للامعاء والحامل لاوعيتها. ليس حشوا زائدا: هو الطريق الذي يصل الدم والاعصاب واللمف الى كل شبر من الامعاء.',
          en: 'The yellow fatty tissue that slings the bowel and carries its vessels. It is not idle padding: it is the road by which blood, nerves and lymph reach every inch of the intestine.'
        }
      },
      {
        ar: 'الزائدة الدودية', en: 'The appendix', x: 62, y: 70, side: 'right',
        desc: {
          ar: 'الانبوب الرفيع المتدلي من الاعور، ولا يزيد قطره عن قلم رصاص. جداره غني بالنسيج اللمفاوي، فهو عضو مناعي لا بقية عديمة الفائدة كما كان يظن.',
          en: 'The slender tube hanging from the caecum, no wider than a pencil. Its wall is rich in lymphoid tissue, so it is an immune organ rather than the useless leftover it was once thought to be.'
        }
      },
      {
        ar: 'مساريقا الزائدة', en: 'Mesoappendix', x: 52, y: 76, side: 'right',
        desc: {
          ar: 'الطية الدهنية المثلثة التي تعلق الزائدة وتحمل شريانها. اذا التهبت الزائدة تجلطت الاوعية في هذه الطية، فينقطع الدم عن الطرف ويسرع الانفجار.',
          en: 'The triangular fatty fold that suspends the appendix and carries its artery. When the appendix inflames, the vessels in this fold clot, cutting blood from the tip and hastening rupture.'
        }
      },
      {
        ar: 'شريان الزائدة ووريدها', en: 'Appendicular artery and vein', x: 58, y: 82.5, side: 'right',
        desc: {
          ar: 'الوعاءان الاحمر والازرق الجاريان في المساريقا. المهم ان الشريان واحد لا شريك له: لا امداد بديلا للزائدة، ولذلك تموت انسجتها بسرعة اذا سد.',
          en: 'The red and blue vessels running in the mesoappendix. What matters is that the artery is single with no partner: the appendix has no alternative supply, so its tissue dies quickly if it is blocked.'
        }
      },
      {
        ar: 'طرف الزائدة', en: 'Tip of the appendix', x: 67, y: 89, side: 'right',
        desc: {
          ar: 'النهاية المغلقة المستديرة. الطرف حر يتدلى في اي اتجاه، وهذا سبب اختلاف موضع الالم من مريض الى اخر رغم ان المرض واحد.',
          en: 'The closed, rounded end. The tip hangs free in any direction, and that is why the site of pain differs from one patient to another though the disease is the same.'
        }
      }
    ],
    desc: {
      ar: 'الزائدة الدودية أنبوب رفيع مغلق الطرف يتدلّى من الأعور، وهو الكيس الذي تبدأ عنده الأمعاء الغليظة. تُظهر الصورة الأعور مفتوحاً، وفيه مدخل الأمعاء الدقيقة بصمّامه ذي الشفتين، والزائدة معلّقة بطيّة دهنية صغيرة تحمل شريانها الوحيد. وأشرطة العضل الطولي التي تجري على القولون تلتقي كلّها عند قاعدة الزائدة، فتكون دليلاً يقود الجرّاح إليها مهما كان اتجاهها.',
      en: 'The appendix is a slender, blind-ended tube hanging from the caecum, the pouch at which the large intestine begins. The picture shows the caecum opened, with the entrance of the small intestine and its two-lipped valve, and the appendix slung on a small fatty fold carrying its single artery. The longitudinal muscle bands running along the colon all converge on the base of the appendix, giving the surgeon a guide to it whatever direction it points.'
    },
    func: {
      ar: 'ظُنّت زمناً بلا وظيفة، والمعروف اليوم أنها عضو لمفاوي: جدارها مكتظّ بالنسيج المناعي، فهي تدرّب المناعة على ما يمرّ في الأمعاء وتساعد على تمييز النافع من الضارّ. ويرجّح كذلك أنها ملجأ آمن لبكتيريا الأمعاء النافعة، فإذا جرفها إسهال شديد أعادت الزائدة زرع القولون منها. وهي مع ذلك عضو يمكن الاستغناء عنه بلا أثر يُذكر.',
      en: 'It was long thought to have no function, but it is now known as a lymphoid organ: its wall is packed with immune tissue, so it trains immunity on what passes through the gut and helps tell friend from foe. It is also thought to be a safe house for the gut’s useful bacteria, so that after a severe diarrhoea has swept them away the appendix reseeds the colon. Even so it is an organ that can be removed with no appreciable loss.'
    },
    location: { ar: 'في أسفل يمين البطن، متدلّية من الأعور، وطرفها حرّ يتّجه إلى الخلف غالباً', en: 'In the lower right abdomen, hanging from the caecum, its free tip most often pointing backwards' },
    size: { ar: 'طولها من ٥ إلى ١٠ سم وقطرها نحو ٦ مليمترات', en: 'From 5 to 10 cm long and about 6 millimetres across' },
    short: { ar: 'أصغر عضو يقلب ليلتك رأساً على عقب', en: 'The smallest organ that can turn your night upside down' },
    parts: [
      { ar: 'الأعور وأشرطته العضلية', en: 'The caecum and its muscular bands' },
      { ar: 'الصمّام اللفائفي الأعوري', en: 'The ileocecal valve' },
      { ar: 'جسم الزائدة وطرفها', en: 'The body and tip of the appendix' },
      { ar: 'المساريقا والشريان الوحيد', en: 'The mesoappendix and its single artery' }
    ],
    diseases: [
      { name: { ar: 'التهاب الزائدة الحادّ', en: 'Acute appendicitis' }, desc: { ar: 'انسداد تجويفها فتتورّم ويشتدّ الألم وينتقل من السرّة إلى أسفل اليمين مع حمّى وقيء', en: 'Its cavity blocks, it swells, and pain sharpens and shifts from the navel to the lower right with fever and vomiting' } },
      { name: { ar: 'انفجار الزائدة والتهاب البريتون', en: 'Perforation and peritonitis' }, desc: { ar: 'تأخّر العلاج فتنثقب وينسكب محتواها في البطن، وهذه حالة تهدّد الحياة', en: 'Delayed treatment lets it perforate and spill its contents into the abdomen, a life-threatening state' } },
      { name: { ar: 'خرّاج حول الزائدة', en: 'Appendiceal abscess' }, desc: { ar: 'يحاصر الجسم الالتهاب بكيس قيح، فتُعالج بالمضادّات أولاً ثم تُستأصل لاحقاً', en: 'The body walls the inflammation off in a pocket of pus, treated with antibiotics first and removed later' } },
      { name: { ar: 'القيلة المخاطية', en: 'Mucocele' }, desc: { ar: 'انسداد مزمن يملؤها بالمخاط فتتّسع كالبالون دون التهاب حادّ', en: 'A chronic blockage fills it with mucus so it balloons out without acute inflammation' } },
      { name: { ar: 'الورم السرطاوي', en: 'Carcinoid tumour' }, desc: { ar: 'ورم صغير بطيء يُكتشف صدفة في الغالب بعد استئصال الزائدة وفحصها', en: 'A small slow-growing tumour usually found by chance after the appendix is removed and examined' } }
    ]
  }

]);

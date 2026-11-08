/* ============================================================
   batch-m.js — دفعة م من عناصر «جسم الإنسان»
   الوصل العصبي العضلي · تخثّر الدم · الأغشية المصلية
   يُدمج لاحقاً في data.js — لا يُعدَّل data.js من هنا.
   ============================================================ */

ORGANS = ORGANS.concat([

/* ---------- الوصل العصبي العضلي ---------- */
  {
    id: 'nmj', type: 'organ', system: 'nervous',
    name: { ar: 'الوصل العصبي العضلي', en: 'The neuromuscular junction' },
    img: 'img/nmj.png', imgBack: 'img/nmj-back.png', thumb: 'img/thumb-nmj.png',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'المحور العصبي', en: 'Motor axon', x: 14, y: 3, side: 'left', go: 'neuron',
        desc: {
          ar: 'الليف الطويل القادم من خلية عصبية حركية في النخاع الشوكي. هو سلك واحد يحمل امرا واحدا: انقبضي. وقد يقطع مترا كاملا من النخاع الى عضلة في القدم قبل ان يصل الى هنا.',
          en: 'The long fibre arriving from a motor nerve cell in the spinal cord. It is a single wire carrying a single order: contract. It may run a full metre from the cord to a muscle in the foot before it arrives here.'
        }
      },
      {
        ar: 'غمد الميالين', en: 'Myelin sheath', x: 26, y: 10, side: 'left',
        desc: {
          ar: 'الغلاف الدهني الازرق الذي يلف المحور على شكل اسطوانات متتابعة. هو عازل كهربائي يجعل الاشارة تقفز من فجوة الى فجوة بدل ان تزحف، فتصل بسرعة تتجاوز مئة متر في الثانية.',
          en: 'The fatty blue wrapping around the axon in a chain of cylinders. It is an electrical insulator that makes the signal leap from gap to gap instead of creeping, reaching speeds beyond a hundred metres a second.'
        }
      },
      {
        ar: 'المحور بلا غمد', en: 'Unmyelinated terminal axon', x: 36, y: 17, side: 'left',
        desc: {
          ar: 'عند اقترابه من العضلة يخلع المحور غمده الدهني وتظهر الياف صفراء عارية. الاشارة هنا لم تعد تحتاج للسرعة بل للدقة، فالمسافة الباقية قصيرة جدا.',
          en: 'As it nears the muscle the axon sheds its fatty sheath and its bare yellow fibres appear. Here the signal no longer needs speed but precision: the remaining distance is very short.'
        }
      },
      {
        ar: 'متقدرات النهاية العصبية', en: 'Mitochondria of the nerve terminal', x: 23, y: 41, side: 'left', go: 'cell',
        desc: {
          ar: 'الاجسام البرتقالية المخططة داخل النهاية. النهاية العصبية مزدحمة بها اكثر من اي مكان في الخلية لان اعادة ملء البويصلات بالناقل العصبي وسحب ما بقي منه تحتاج طاقة متصلة بلا توقف.',
          en: 'The striped orange bodies inside the ending. A nerve terminal is more crowded with them than anywhere else in the cell, because refilling the vesicles with transmitter and pumping back what is left demands energy without pause.'
        }
      },
      {
        ar: 'البويصلات المشبكية', en: 'Synaptic vesicles', x: 19, y: 48, side: 'left',
        desc: {
          ar: 'كريات شفافة مملوءة بحبيبات الناقل العصبي، في كل واحدة نحو خمسة الاف جزيء من الاستيل كولين. تنتظر مصطفة عند الغشاء، فاذا وصلت الاشارة اندمجت معه وافرغت ما فيها دفعة واحدة.',
          en: 'Clear spheres packed with granules of transmitter, each holding some five thousand molecules of acetylcholine. They wait lined up at the membrane, and when the signal arrives they fuse with it and empty their contents all at once.'
        }
      },
      {
        ar: 'الشق المشبكي', en: 'Synaptic cleft', x: 24, y: 54, side: 'left',
        desc: {
          ar: 'الفراغ الضيق بين العصب والعضلة، عرضه نحو خمسين نانومترا فقط. العصب لا يلمس العضلة ابدا، بل يرسل اليها رسالة كيميائية تعبر هذي المسافة في اقل من جزء من الالف من الثانية.',
          en: 'The narrow space between nerve and muscle, only about fifty nanometres wide. The nerve never touches the muscle; it sends a chemical message across this gap in less than a thousandth of a second.'
        }
      },
      {
        ar: 'الطيات الوصلية', en: 'Junctional folds', x: 20, y: 62, side: 'left',
        desc: {
          ar: 'غشاء العضلة هنا ليس مسطحا بل مطوي كالاكورديون. هذا التطويه يضاعف مساحة السطح اضعافا، فيتسع لعدد هائل من المستقبلات ويجعل العضلة شديدة الحساسية لاقل كمية من الناقل.',
          en: 'The muscle membrane here is not flat but folded like an accordion. The folding multiplies the surface area many times over, making room for a vast number of receptors and leaving the muscle exquisitely sensitive to the smallest amount of transmitter.'
        }
      },
      {
        ar: 'متقدرات الليف العضلي', en: 'Mitochondria of the muscle fibre', x: 20, y: 72, side: 'left',
        desc: {
          ar: 'متقدرات العضلة نفسها، تصطف بين اللييفات لتزود الانقباض بالوقود. العضلة تحرق طاقة عند الانقباض وعند الاسترخاء ايضا، فاعادة الكالسيوم الى مخازنه ليست مجانية.',
          en: 'The muscle\'s own mitochondria, lined up between the myofibrils to fuel contraction. A muscle burns energy both when it contracts and when it relaxes, for returning calcium to its stores is not free.'
        }
      },
      {
        ar: 'الليف العضلي المخطط', en: 'Striated muscle fibre', x: 30, y: 92, side: 'left', go: 'muscle-fiber',
        desc: {
          ar: 'الليف العضلي الذي ينتهي عنده الامر. محور عصبي واحد قد يقود عشرات او مئات الالياف معا، وتسمى المجموعة الوحدة الحركية: تنقبض كلها او لا ينقبض منها شيء.',
          en: 'The muscle fibre where the order ends. A single axon may command dozens or hundreds of fibres together, and the group is called a motor unit: they all contract or none of them does.'
        }
      },
      {
        ar: 'الفروع الطرفية', en: 'Terminal branches', x: 61, y: 26, side: 'right',
        desc: {
          ar: 'ينقسم المحور قبل نهايته الى فروع تتوزع على سطح الليف العضلي، فيصل الامر الى مواضع متفرقة منه في اللحظة نفسها بدل ان يبدا من نقطة واحدة.',
          en: 'Before it ends the axon divides into branches spread over the surface of the muscle fibre, so the order reaches several points of it at the same instant rather than starting from one spot.'
        }
      },
      {
        ar: 'النهاية المشبكية المنتفخة', en: 'Synaptic bouton', x: 79, y: 34, side: 'right',
        desc: {
          ar: 'كل فرع ينتهي بانتفاخ يشبه القدم، وهو مستودع الرسالة: بويصلات ممتلئة ومتقدرات كثيرة وغشاء مهيا للاندماج. هنا تتحول الاشارة الكهربائية الى رسالة كيميائية.',
          en: 'Each branch ends in a foot-like swelling, the storehouse of the message: filled vesicles, many mitochondria and a membrane primed to fuse. Here the electrical signal turns into a chemical one.'
        }
      },
      {
        ar: 'مستقبلات الأستيل كولين', en: 'Acetylcholine receptors', x: 80, y: 53, side: 'right',
        desc: {
          ar: 'التراكيب الزرقاء المرصوصة على قمم الطيات، وهي بوابات مقفلة في غشاء العضلة. حين يرتبط بها الناقل تنفتح فيندفع الصوديوم الى الداخل وتشتعل موجة كهربائية تسري في الليف كله. في الوهن العضلي الوبيل يهاجم الجسم هذي المستقبلات بالذات.',
          en: 'The blue structures ranged along the crests of the folds, locked gates in the muscle membrane. When transmitter binds them they open, sodium rushes in and an electrical wave sweeps along the whole fibre. In myasthenia gravis the body attacks these very receptors.'
        }
      },
      {
        ar: 'جزيئات الناقل العصبي', en: 'Neurotransmitter molecules', x: 51, y: 63, side: 'right',
        desc: {
          ar: 'الحبيبات البرتقالية الصغيرة المنتشرة في الشق وبين الطيات، وهي الاستيل كولين. لا يبقى منه شيء طويلا: انزيم يسمى استيل كولين استراز يقطعه في اجزاء من الثانية حتى لا تظل العضلة منقبضة الى الابد.',
          en: 'The small orange granules scattered in the cleft and among the folds: acetylcholine. None of it lingers, for an enzyme called acetylcholinesterase chops it up within fractions of a second so the muscle does not stay contracted forever.'
        }
      },
      {
        ar: 'اللييفات العضلية والتخطيط', en: 'Myofibrils and striations', x: 62, y: 95, side: 'right', go: 'muscles',
        desc: {
          ar: 'الخطوط الفاتحة والداكنة المتناوبة داخل الليف. هذا التخطيط هو صفوف منتظمة من خيوط الاكتين والميوسين، وهي التي تنزلق بعضها فوق بعض فيقصر الليف وتتولد الحركة.',
          en: 'The alternating light and dark bands within the fibre. This striping is the orderly ranks of actin and myosin filaments, and it is they that slide over one another so the fibre shortens and movement is born.'
        }
      }
    ],
    desc: {
      ar: 'الوصل العصبي العضلي هو الموضع الذي يتحول فيه الأمر العصبي إلى حركة. يصل المحور العصبي القادم من النخاع الشوكي، فيخلع غمده الدهني ويتفرع إلى نهايات منتفخة تستقر فوق سطح الليف العضلي دون أن تلمسه. بينهما شق ضيق لا يتجاوز خمسين نانومترا، وتحته غشاء العضلة مطويا كالأكورديون ومرصوفا بالمستقبلات على قمم طياته. حين تصل الإشارة الكهربائية إلى النهاية تندمج البويصلات مع الغشاء وتفرغ الأستيل كولين في الشق، فيعبر ويرتبط بالمستقبلات فتنفتح بوابات الصوديوم ويتولد جهد كهربائي جديد في غشاء العضلة، ينتشر في الليف كله فينقبض. ثم يقطع إنزيم الأستيل كولين استراز الناقل في أجزاء من الثانية لتعود العضلة إلى الاسترخاء استعدادا للأمر التالي.',
      en: 'The neuromuscular junction is the place where a nerve order becomes movement. The motor axon arrives from the spinal cord, sheds its fatty sheath and divides into swollen endings that rest on the surface of the muscle fibre without ever touching it. Between them lies a cleft no wider than fifty nanometres, and beneath it the muscle membrane is folded like an accordion and studded with receptors along the crests of its folds. When the electrical signal reaches the ending, vesicles fuse with the membrane and empty acetylcholine into the cleft; it crosses, binds the receptors, sodium gates open and a fresh electrical potential is born in the muscle membrane, spreading through the whole fibre so that it contracts. Then the enzyme acetylcholinesterase cuts the transmitter apart within fractions of a second, and the muscle relaxes, ready for the next order.'
    },
    func: {
      ar: 'نقل الأمر الحركي من العصب إلى العضلة نقلا أمينا لا يخطئ: كل جهد عصبي واحد يقابله انقباض واحد في الليف العضلي، بلا زيادة ولا نقصان. وتطوي الطيات الوصلية غشاء العضلة لتضاعف مساحته فتزيد عدد المستقبلات وتجعل الاستجابة مضمونة حتى مع كمية قليلة من الناقل. وهذا الموضع بالذات ملعب لكثير من الأدوية والسموم: البوتوكس يمنع البويصلات من إفراغ ناقلها فتسترخي العضلة وتختفي التجاعيد أو يهدأ التشنج، والكوراري وسهام الصيد القديمة تسد المستقبلات فيشل الجسم مع بقاء الوعي، ومرخيات العضل التي يعطيها طبيب التخدير تعمل هنا تماما لتسكن العضلات أثناء الجراحة.',
      en: 'To carry the motor order from nerve to muscle with perfect fidelity: every single nerve impulse is answered by one contraction of the muscle fibre, no more and no less. The junctional folds multiply the membrane\'s surface so it can hold more receptors and the response is assured even with a small amount of transmitter. This spot in particular is the playground of many drugs and poisons: botulinum toxin stops the vesicles from releasing their transmitter, so the muscle relaxes and a wrinkle fades or a spasm settles; curare and the old hunting darts block the receptors, paralysing the body while consciousness remains; and the muscle relaxants an anaesthetist gives work precisely here to still the muscles during surgery.'
    },
    location: { ar: 'على سطح كل ليف عضلي هيكلي، عند المنطقة الوسطى منه غالبا، حيث تنتهي فروع المحور الحركي القادم من النخاع الشوكي', en: 'On the surface of every skeletal muscle fibre, usually near its midpoint, where the branches of the motor axon from the spinal cord come to an end' },
    size: { ar: 'مساحة الوصل نحو ٣٠ إلى ٥٠ ميكرومترا، وعرض الشق المشبكي نحو ٥٠ نانومترا، وفي كل نهاية آلاف البويصلات وفي كل بويصلة نحو ٥٠٠٠ جزيء ناقل', en: 'The junction spans some 30-50 micrometres, the synaptic cleft is about 50 nanometres wide, and each ending holds thousands of vesicles with roughly 5,000 transmitter molecules in each' },
    short: { ar: 'الموضع الذي يصير فيه الأمر العصبي حركة', en: 'Where a nerve order becomes movement' },
    parts: [
      { ar: 'النهاية العصبية وبويصلاتها', en: 'The nerve ending and its vesicles' },
      { ar: 'الشق المشبكي', en: 'The synaptic cleft' },
      { ar: 'الطيات الوصلية ومستقبلاتها', en: 'The junctional folds and their receptors' },
      { ar: 'الليف العضلي المخطط', en: 'The striated muscle fibre' }
    ],
    diseases: [
      { name: { ar: 'الوهن العضلي الوبيل', en: 'Myasthenia gravis' }, desc: { ar: 'يصنع الجسم أجساما مضادة تهاجم مستقبلات الأستيل كولين فيقل عددها، فتضعف العضلات كلما استعملت ويتحسن حالها بالراحة، وأول ما يظهر غالبا تهدل الجفن وازدواج الرؤية', en: 'The body makes antibodies that attack the acetylcholine receptors and reduce their number, so muscles weaken the more they are used and recover with rest; the first signs are usually a drooping eyelid and double vision' } },
      { name: { ar: 'التسمّم الوشيقي (البوتوليزم)', en: 'Botulism' }, desc: { ar: 'سم بكتيري يأتي غالبا من طعام معلّب فاسد، يمنع النهايات العصبية من إفراغ ناقلها فيصيب الجسم شلل رخو يبدأ من الوجه والبلع وقد يوقف التنفس. ومن هذا السم نفسه صُنع البوتوكس بجرعات دقيقة جدا', en: 'A bacterial toxin, usually from spoiled tinned food, that stops nerve endings releasing their transmitter, bringing a limp paralysis that begins in the face and swallowing and may halt breathing. From this very toxin, in minute doses, Botox is made' } },
      { name: { ar: 'متلازمة لامبرت-إيتون', en: 'Lambert-Eaton syndrome' }, desc: { ar: 'أجسام مضادة تهاجم قنوات الكالسيوم في النهاية العصبية فيقل ما يُفرَغ من الناقل. والضعف هنا يتحسن قليلا مع الاستعمال المتكرر عكس الوهن العضلي، وكثيرا ما يصاحب سرطان الرئة', en: 'Antibodies attack the calcium channels of the nerve ending so less transmitter is released. Here the weakness eases a little with repeated use, unlike myasthenia, and it often accompanies lung cancer' } },
      { name: { ar: 'التسمّم بالمبيدات الفوسفورية', en: 'Organophosphate poisoning' }, desc: { ar: 'تعطّل هذي المبيدات إنزيم الأستيل كولين استراز فيتراكم الناقل في الشق ولا يُزال، فتتشنج العضلات ثم تُنهك، مع لعاب وإفرازات غزيرة وتضيّق حدقة العين', en: 'These pesticides disable acetylcholinesterase, so transmitter piles up in the cleft and is never cleared: muscles twitch and then fail, with heavy salivation and secretions and pinpoint pupils' } }
    ]
  }
]);

/* ---------- تخثّر الدم ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'clotting', type: 'organ', system: 'vessels',
    name: { ar: 'تخثّر الدم', en: 'Blood clotting' },
    img: 'img/clotting.png', imgBack: 'img/clotting-back.png', thumb: 'img/thumb-clotting.png',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'البطانة الداخلية', en: 'Endothelium', x: 10, y: 9, side: 'left', go: 'vessel-types',
        desc: {
          ar: 'صف واحد من خلايا مسطحة رمادية بنواة داكنة، يبطن الوعاء من الداخل ويجعل سطحه املس كالزجاج. ما دام سليما فالصفائح تمر فوقه ولا تلتصق به، بل يفرز مواد تبعدها عنه.',
          en: 'A single row of flat grey cells with dark nuclei lining the vessel and making its inner surface as smooth as glass. While it is intact, platelets glide over it and do not stick; it even releases substances that push them away.'
        }
      },
      {
        ar: 'كريات حمراء في المجرى', en: 'Red cells in the stream', x: 12, y: 30, side: 'left', go: 'blood',
        desc: {
          ar: 'الكريات الحمراء المارة مع التيار قبل ان تصل الى الجرح. هي ليست بطلة القصة هنا، لكنها تُحتجز في الشبكة عند الجرح فتصبغ الجلطة بلونها الاحمر.',
          en: 'Red cells travelling with the current before they reach the wound. They are not the heroes of this story, but they are caught in the mesh at the wound and it is they that give a clot its red colour.'
        }
      },
      {
        ar: 'صفيحة دموية', en: 'Platelet', x: 14, y: 50, side: 'left',
        desc: {
          ar: 'قطعة صغيرة بنفسجية شاحبة بلا نواة، اصلها شظية انفصلت عن خلية عملاقة في نخاع العظم. تسبح مستديرة ملساء، فاذا لمست كولاجينا مكشوفا اطلقت هذي الاشواك والتصقت وناداها عبر مواد تفرزها الاف غيرها.',
          en: 'A small pale purple fragment with no nucleus, a chip broken off a giant cell in the bone marrow. It floats round and smooth, but the moment it touches exposed collagen it throws out these spikes, sticks fast, and calls thousands of its fellows with the substances it releases.'
        }
      },
      {
        ar: 'السدّ الصفيحي', en: 'The platelet plug', x: 45, y: 62, side: 'left',
        desc: {
          ar: 'كومة الصفائح المتشابكة التي تسد الفتحة سدا اوليا خلال دقائق. هذا هو الايقاف الاول للنزف، وهو سريع لكنه هش، ولا يصمد حتى تشده شبكة الفيبرين من بعده.',
          en: 'The heap of interlocked platelets that seals the opening within minutes. This is the first stop to the bleeding: quick, but fragile, and it will not hold until the fibrin mesh binds it together afterwards.'
        }
      },
      {
        ar: 'التمزّق', en: 'The tear', x: 45, y: 75, side: 'left',
        desc: {
          ar: 'الفتحة التي انشق منها جدار الوعاء. يبدا الجسم علاجها فورا بانقباض الوعاء نفسه ليقلل الدم المندفع، ثم يبني السد الصفيحي فوقها، ثم يثبته بالفيبرين.',
          en: 'The gap where the vessel wall has split. The body treats it at once: first the vessel itself constricts to slow the escaping blood, then the platelet plug is built over it, and then fibrin locks the plug in place.'
        }
      },
      {
        ar: 'كرية حمراء تفلت من الجرح', en: 'A red cell escaping the wound', x: 33, y: 93, side: 'left',
        desc: {
          ar: 'كرية خرجت من الوعاء قبل ان يكتمل السد. كل ثانية تأخر في التخثر تعني مزيدا من الدم خارج مجراه، ولهذا يعمل هذا النظام باسرع ما يمكن.',
          en: 'A cell that slipped out of the vessel before the seal was finished. Every second of delay in clotting means more blood outside its channel, which is why this system works as fast as it possibly can.'
        }
      },
      {
        ar: 'كرية حمراء محتجزة في الشبكة', en: 'A red cell trapped in the mesh', x: 55, y: 22, side: 'right', go: 'blood',
        desc: {
          ar: 'كرية علقت بين خيوط الفيبرين. الشبكة تصطاد الكريات كما تصطاد الشبكة السمك، وبتراكمها تكتسب الجلطة حجمها ومتانتها ولونها.',
          en: 'A cell caught among the fibrin strands. The mesh catches red cells the way a net catches fish, and as they pile up the clot gains its bulk, its strength and its colour.'
        }
      },
      {
        ar: 'شبكة الفيبرين', en: 'Fibrin mesh', x: 62, y: 29, side: 'right',
        desc: {
          ar: 'الخيوط الشاحبة المنسوجة فوق السد وداخله. اصلها بروتين ذائب في البلازما اسمه الفيبرينوجين، لا يُرى ولا يُحس، فاذا انتهى شلال التخثر حوّله انزيم الثرومبين الى خيوط صلبة تتشابك وتشد كل شيء. هذي هي اللحظة التي يصير فيها الدم السائل جلطة.',
          en: 'The pale strands woven over and through the plug. They begin as a protein dissolved in the plasma called fibrinogen, unseen and unfelt; when the clotting cascade ends, the enzyme thrombin turns it into solid threads that interlace and bind everything together. This is the moment liquid blood becomes a clot.'
        }
      },
      {
        ar: 'كرية بيضاء', en: 'White blood cell', x: 72, y: 36, side: 'right', go: 'immunity',
        desc: {
          ar: 'الخلية البيضاء المفصصة بين الكريات الحمراء. جاءت الى الجرح لا لتوقف النزف بل لتنظفه: تبتلع البكتيريا الداخلة وتزيل الانسجة الميتة، فتحرس الجرح حتى يلتئم.',
          en: 'The lobed white cell among the red ones. It came to the wound not to stop the bleeding but to clean it: it swallows invading bacteria and clears away dead tissue, guarding the wound until it heals.'
        }
      },
      {
        ar: 'لمعة الوعاء', en: 'Vessel lumen', x: 90, y: 52, side: 'right', go: 'vessels',
        desc: {
          ar: 'المجرى الذي يجري فيه الدم بعيدا عن الجرح، والكريات فيه سابحة حرة غير مقيدة. الفرق بين هنا وهناك هو الفرق بين دم سائل وجلطة صلبة، والمسافة بينهما اقل من ملّيمتر.',
          en: 'The channel where blood flows on past the wound, its cells swimming free and unbound. The difference between here and there is the difference between liquid blood and a solid clot, and the distance between them is less than a millimetre.'
        }
      },
      {
        ar: 'بطانة سليمة لا تلتصق بها الصفائح', en: 'Intact lining where platelets do not stick', x: 85, y: 68, side: 'right',
        desc: {
          ar: 'البطانة تعود ملساء متصلة على الجانب الاخر من الجرح، ولا صفيحة واحدة عالقة بها. هذا هو سر النظام كله: التخثر يحدث حيث الاصابة فقط، ولو حدث فوق بطانة سليمة لصار جلطة تسد شريانا.',
          en: 'Beyond the wound the lining returns smooth and unbroken, with not a single platelet clinging to it. This is the secret of the whole system: clotting happens only where there is injury. Were it to happen over healthy lining, it would become a clot that blocks an artery.'
        }
      },
      {
        ar: 'الكولاجين المكشوف', en: 'Exposed collagen', x: 53, y: 74, side: 'right',
        desc: {
          ar: 'الالياف الذهبية الظاهرة عند حافة التمزق. الكولاجين موجود دائما في جدار الوعاء لكنه مغطى بالبطانة، فاذا انكشف صار الاشارة التي تنتظرها الصفائح: هنا جرح، التصقي.',
          en: 'The golden fibres showing at the torn edge. Collagen is always there in the vessel wall but covered by the lining; once it is laid bare it becomes the signal the platelets are waiting for: here is a wound, stick.'
        }
      },
      {
        ar: 'جدار الوعاء الدموي', en: 'Vessel wall', x: 78, y: 92, side: 'right', go: 'vessel-types',
        desc: {
          ar: 'الطبقة العضلية السميكة التي تحمل الوعاء وتحفظ شكله. عند اصابته ينقبض حالا فيضيق المجرى ويقل الدم الخارج، وهذي اول خطوة في ايقاف النزف قبل ان تصل الصفائح.',
          en: 'The thick muscular layer that carries the vessel and holds its shape. On injury it contracts at once, narrowing the channel and reducing the blood escaping: the very first step in stopping a bleed, before the platelets even arrive.'
        }
      }
    ],
    desc: {
      ar: 'تخثّر الدم هو ترميم عاجل يجريه الجسم على نفسه حين ينشق وعاء دموي. تجري القصة بترتيب ثابت: ينقبض الوعاء أولا فيقل الدم المندفع، ثم تلمس الصفائح الدموية الكولاجين الذي انكشف عند حافة التمزق فتلتصق به وتتغير من أقراص ملساء إلى أجسام شوكية، وتفرز مواد تستدعي آلافا من أخواتها حتى تتراكم في سدّ يغلق الفتحة. هذا السدّ سريع لكنه هشّ، فيتبعه شلال التخثّر: سلسلة طويلة من عوامل بروتينية يوقظ كل واحد منها الذي يليه حتى ينتهي الأمر إلى إنزيم الثرومبين، فيحوّل الفيبرينوجين الذائب في البلازما إلى خيوط فيبرين صلبة تُنسج شبكة تمسك الصفائح والكريات الحمراء وتشدّها جلطة متينة. ثم تنكمش الجلطة فتقرّب حافتي الجرح، وحين يلتئم النسيج تذوب الشبكة ويعود المجرى مفتوحا.',
      en: 'Blood clotting is an emergency repair the body performs on itself when a vessel splits. The story runs in a fixed order: first the vessel constricts and less blood escapes; then platelets touch the collagen laid bare at the torn edge, stick to it and change from smooth discs into spiky bodies, releasing substances that summon thousands of their fellows until they pile into a plug that closes the gap. This plug is quick but fragile, so the clotting cascade follows: a long chain of protein factors, each waking the next, ending in the enzyme thrombin, which turns the fibrinogen dissolved in the plasma into solid fibrin strands. These weave a mesh that grips the platelets and red cells and binds them into a firm clot. The clot then contracts, drawing the edges of the wound together, and once the tissue has healed the mesh is dissolved and the channel opens again.'
    },
    func: {
      ar: 'إيقاف النزف بسرعة ودقة، ثم إتاحة التئام الجرح. والفكرة هنا مزدوجة يخطئ من ينظر إلى نصفها فقط: نقص هذا النظام يعني نزفا لا يقف، فمريض الهيموفيليا ينزف من رضّة بسيطة أو داخل مفاصله بلا سبب ظاهر؛ وزيادته أو حدوثه في المكان الخاطئ يعني جلطة تسدّ شريانا سليما، وهذا بعينه ما يحدث في احتشاء عضلة القلب وفي السكتة الدماغية. ولذلك يقف الجسم دائما على حدّ رفيع بين ميل للتخثّر وميل لإذابته. ويصنع الكبد أغلب عوامل التخثّر ويحتاج في صنع عدد منها إلى فيتامين ك، ولهذا يصاب مرضى تشمّع الكبد بالنزف، وعلى هذا المبدأ تعمل مميّعات الدم القديمة التي تعاكس فيتامين ك.',
      en: 'To stop bleeding quickly and precisely, then let the wound heal. The idea here is double, and anyone who sees only half of it goes wrong: too little of this system means bleeding that will not stop, so a haemophiliac bleeds from a small knock or into his joints for no visible reason; too much of it, or clotting in the wrong place, means a clot blocking a healthy artery, which is exactly what happens in a heart attack and in a stroke. The body therefore stands always on a fine line between a tendency to clot and a tendency to dissolve. The liver makes most of the clotting factors and needs vitamin K to make several of them, which is why people with liver cirrhosis bleed, and it is on this principle that the older blood thinners, which oppose vitamin K, do their work.'
    },
    location: { ar: 'في أي موضع من الأوعية الدموية يصاب جدارها، من خدش في جلد الإصبع إلى تمزق في شريان عميق', en: 'Anywhere in the blood vessels where the wall is injured, from a scratch on a fingertip to a tear in a deep artery' },
    size: { ar: 'الصفيحة الدموية نحو ٢ إلى ٣ ميكرومترات وفي كل مليمتر مكعب من الدم نحو ١٥٠ إلى ٤٠٠ ألف صفيحة، وعمرها في الدورة نحو ٨ إلى ١٠ أيام. ويكتمل السدّ الصفيحي في دقائق ويتماسك الفيبرين خلال نحو ١٠ دقائق', en: 'A platelet is about 2-3 micrometres across, with some 150,000-400,000 in each cubic millimetre of blood, living 8-10 days in the circulation. The platelet plug forms within minutes and the fibrin sets in about ten' },
    short: { ar: 'ترميم عاجل: من دم سائل إلى جلطة صلبة في دقائق', en: 'An emergency repair: liquid blood to a solid clot in minutes' },
    parts: [
      { ar: 'انقباض الوعاء المصاب', en: 'Constriction of the injured vessel' },
      { ar: 'السدّ الصفيحي', en: 'The platelet plug' },
      { ar: 'شلال التخثّر وشبكة الفيبرين', en: 'The clotting cascade and the fibrin mesh' },
      { ar: 'انكماش الجلطة ثم إذابتها بعد الالتئام', en: 'Retraction of the clot, then its dissolution after healing' }
    ],
    diseases: [
      { name: { ar: 'الهيموفيليا (الناعور)', en: 'Haemophilia' }, desc: { ar: 'نقص وراثي في أحد عوامل التخثّر فينكسر الشلال في منتصفه، فيتكوّن السدّ الصفيحي ولا تُنسج فوقه شبكة الفيبرين. النزف يتأخر ثم يطول، وأكثره داخل المفاصل والعضلات', en: 'An inherited lack of one clotting factor breaks the cascade halfway: the platelet plug forms but no fibrin mesh is woven over it. Bleeding is delayed and then prolonged, most often into joints and muscles' } },
      { name: { ar: 'نقص الصفائح الدموية', en: 'Thrombocytopenia' }, desc: { ar: 'قلة عدد الصفائح لسبب في نخاع العظم أو لتحطّمها في الدم، فيظهر على الجلد نمش نزفي دقيق وكدمات بلا سبب، وقد ينزف الأنف واللثة', en: 'Too few platelets, whether from a problem in the marrow or their destruction in the blood, showing as fine bleeding spots and unexplained bruises on the skin, with nosebleeds and bleeding gums' } },
      { name: { ar: 'الخثار الوريدي العميق والانصمام الرئوي', en: 'Deep vein thrombosis and pulmonary embolism' }, desc: { ar: 'جلطة تتكوّن في وريد عميق بالساق بعد جلوس طويل أو رقود، فتؤلم وتُورّم؛ وإن انفصلت منها قطعة سارت مع الدم إلى الرئة فسدّت شريانا فيها، وهذي حالة خطرة', en: 'A clot forming in a deep leg vein after long sitting or bed rest, causing pain and swelling; if a piece breaks off it travels with the blood to the lung and blocks an artery there, which is dangerous' } },
      { name: { ar: 'التخثّر المنتشر داخل الأوعية', en: 'Disseminated intravascular coagulation' }, desc: { ar: 'اضطراب شديد يصاحب الإنتان أو الصدمات الكبيرة: يتخثّر الدم في كل مكان في وقت واحد حتى تفنى عوامل التخثّر والصفائح، فينقلب الأمر إلى نزف من كل موضع', en: 'A severe disorder accompanying sepsis or major trauma: blood clots everywhere at once until the clotting factors and platelets are used up, and the picture turns into bleeding from every site' } },
      { name: { ar: 'نزف نقص فيتامين ك', en: 'Vitamin K deficiency bleeding' }, desc: { ar: 'يحتاج الكبد فيتامين ك ليصنع عددا من عوامل التخثّر، فإذا نقص في المواليد الجدد أو مع مرض كبدي أو سوء امتصاص ظهر ميل للنزف. ولهذا تُعطى جرعة فيتامين ك لكل مولود', en: 'The liver needs vitamin K to make several clotting factors, so when it is lacking in newborns, in liver disease or in malabsorption, a bleeding tendency appears. This is why every newborn is given a dose of vitamin K' } }
    ]
  }
]);

/* ---------- الأغشية المصلية ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'serous-membranes', type: 'organ', system: 'organs',
    name: { ar: 'الأغشية المصلية', en: 'The serous membranes' },
    img: 'img/serous-membranes.png', imgBack: 'img/serous-membranes-back.png', thumb: 'img/thumb-serous-membranes.png',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الجنب الحشوي', en: 'Visceral pleura', x: 33, y: 4, side: 'left',
        desc: {
          ar: 'الورقة اللماعة الملتصقة بسطح الرئة نفسها، تتبع كل انحناء فيها وتدخل بين فصوصها. لا تستطيع فصلها عن الرئة، فهي كالطلاء عليها.',
          en: 'The glistening leaf bonded to the surface of the lung itself, following its every curve and dipping between its lobes. You cannot peel it off the lung; it is like a varnish upon it.'
        }
      },
      {
        ar: 'الرئة اليمنى', en: 'Right lung', x: 30, y: 22, side: 'left', go: 'lungs',
        desc: {
          ar: 'الرئة داخل كيسها الجنبي. هي لا تلتصق بجدار الصدر بل تنزلق عليه في كل نفس، ولولا هذا الانزلاق لكان التنفس عملا مؤلما شاقا.',
          en: 'The lung inside its pleural sac. It does not adhere to the chest wall but slides along it with every breath; without that sliding, breathing would be a painful, laborious business.'
        }
      },
      {
        ar: 'الجنب الجداري', en: 'Parietal pleura', x: 20, y: 30, side: 'left',
        desc: {
          ar: 'الورقة الاخرى، تبطن جدار الصدر من الداخل وتغطي الحجاب الحاجز. بينها وبين الورقة الحشوية طبقة سائل رقيقة جدا تجعلهما تنزلقان بلا احتكاك. وهي وحدها الحساسة للالم، ولذلك يوجع التهاب الجنب مع كل شهيق.',
          en: 'The other leaf, lining the inside of the chest wall and covering the diaphragm. Between it and the visceral leaf lies a very thin film of fluid that lets them glide without friction. It alone carries pain fibres, which is why pleurisy hurts with every breath in.'
        }
      },
      {
        ar: 'الصفاق الحشوي', en: 'Visceral peritoneum', x: 38, y: 43, side: 'left',
        desc: {
          ar: 'الغشاء الشفاف الذي يغلف الكبد والمعدة والامعاء ويلمع فوقها. هو نفس فكرة الجنب والتامور: ورقة تلتصق بالعضو، وسائل رقيق، ثم ورقة تبطن الجدار.',
          en: 'The transparent membrane sheathing the liver, the stomach and the intestines and gleaming over them. It is the same idea as the pleura and the pericardium: a leaf bonded to the organ, a thin fluid, then a leaf lining the wall.'
        }
      },
      {
        ar: 'الكبد', en: 'Liver', x: 30, y: 51, side: 'left', go: 'liver',
        desc: {
          ar: 'اكبر عضو في البطن، ويغطيه الصفاق من كل جهة تقريبا الا رقعة صغيرة خلفه تلتصق بالحجاب الحاجز مباشرة. وهو يتحرك مع كل نفس صعودا ونزولا داخل غشائه.',
          en: 'The largest organ in the abdomen, covered by peritoneum on nearly every side but for a small patch behind where it is bonded straight to the diaphragm. It rides up and down inside its membrane with every breath.'
        }
      },
      {
        ar: 'الصفاق الجداري', en: 'Parietal peritoneum', x: 23, y: 66, side: 'left',
        desc: {
          ar: 'الورقة التي تبطن جدار البطن من الداخل، ظاهرة هنا كغشاء لماع ملتصق بالعضلات. هي حساسة للالم بدقة، ولذلك حين يصل الالتهاب اليها في الزائدة يتحول الالم من مبهم حول السرة الى وخز محدد في اسفل البطن اليمين.',
          en: 'The leaf lining the inside of the abdominal wall, seen here as a shining film against the muscle. It senses pain precisely, which is why in appendicitis, once inflammation reaches it, the ache shifts from a vague pain around the navel to a sharp, well-localised point in the lower right.'
        }
      },
      {
        ar: 'القولون', en: 'Large intestine', x: 30, y: 73, side: 'left', go: 'large-intestine',
        desc: {
          ar: 'القولون الصاعد بحبيباته المنتفخة، مثبت الى الجدار الخلفي فحركته محدودة. جزء منه مغطى بالصفاق من الامام فقط، وهذا الفرق مهم للجراح حين يفتح البطن.',
          en: 'The ascending colon with its bulging sacculations, fixed to the back wall so its movement is limited. Part of it is covered by peritoneum only on its front, a difference that matters to a surgeon opening the abdomen.'
        }
      },
      {
        ar: 'الرئة اليسرى', en: 'Left lung', x: 74, y: 14, side: 'right',
        desc: {
          ar: 'الرئة اليسرى في كيسها الجنبي المستقل. الكيسان منفصلان تماما، ولهذا قد تنطبق رئة كاملة بدخول الهواء الى كيسها بينما الاخرى تتنفس بلا خلل.',
          en: 'The left lung in its own separate pleural sac. The two sacs are entirely independent, which is why one lung can collapse when air enters its sac while the other breathes on unaffected.'
        }
      },
      {
        ar: 'التامور', en: 'Pericardium', x: 64, y: 24, side: 'right',
        desc: {
          ar: 'الكيس الشفاف المزدوج حول القلب. ورقته الداخلية ملتصقة بعضلة القلب والخارجية قوية ليفية تثبت القلب في مكانه في الصدر، وبينهما نحو ملعقة صغيرة من سائل يسمح للقلب ان ينبض مئة الف نبضة في اليوم بلا احتكاك.',
          en: 'The double transparent sac around the heart. Its inner leaf is bonded to the heart muscle and its outer one is tough and fibrous, anchoring the heart in the chest; between them lies about a teaspoon of fluid that lets the heart beat a hundred thousand times a day without friction.'
        }
      },
      {
        ar: 'القلب', en: 'Heart', x: 52, y: 30, side: 'right', go: 'heart',
        desc: {
          ar: 'القلب داخل تاموره. الكيس الليفي حوله متين لا يتمدد بسرعة، وهذي حماية ومخاطرة معا: يحمي القلب من التمدد المفاجئ، لكن اذا امتلا الكيس بسائل او دم بسرعة ضغط على القلب فمنعه من الامتلاء.',
          en: 'The heart within its pericardium. The fibrous sac around it is tough and does not stretch quickly, which is both a protection and a risk: it guards the heart from sudden distension, but if the sac fills rapidly with fluid or blood it squeezes the heart and stops it filling.'
        }
      },
      {
        ar: 'الحجاب الحاجز', en: 'Diaphragm', x: 71, y: 37, side: 'right', go: 'diaphragm',
        desc: {
          ar: 'القبة العضلية التي تفصل الصدر عن البطن. سطحها الاعلى مغطى بالجنب وسطحها الاسفل مغطى بالصفاق، فهي الحد بين كيسين من اكياس الجسم الثلاثة.',
          en: 'The muscular dome dividing the chest from the abdomen. Its upper surface is clothed in pleura and its lower surface in peritoneum: it is the border between two of the body\'s three sacs.'
        }
      },
      {
        ar: 'المعدة', en: 'Stomach', x: 63, y: 50, side: 'right', go: 'stomach',
        desc: {
          ar: 'المعدة معلقة داخل الصفاق فتتحرك بحرية وتتمدد بعد الاكل. ومن انحنائها الكبير يتدلى الثرب كمريلة دهنية تلتصق باي التهاب في البطن لتحدّه، حتى سماه القدماء شرطي البطن.',
          en: 'The stomach hangs within the peritoneum, free to move and to swell after a meal. From its greater curvature drapes the omentum, a fatty apron that sticks to any inflammation in the abdomen to wall it off, so the old anatomists called it the policeman of the abdomen.'
        }
      },
      {
        ar: 'المساريقا', en: 'Mesentery', x: 57, y: 73, side: 'right',
        desc: {
          ar: 'المروحة الشفافة التي تعلق الامعاء الدقيقة بجدار البطن الخلفي، وفيها تسير الشرايين والاوردة والاعصاب والاوعية اللمفية الى الامعاء. هي ورقتان من الصفاق التصقتا وبينهما هذا الطريق، ولذلك تستطيع الامعاء ان تتموج وتتحرك وهي موصولة بالدم دائما.',
          en: 'The translucent fan that suspends the small intestine from the back wall of the abdomen, carrying the arteries, veins, nerves and lymphatics to the gut. It is two leaves of peritoneum stuck together with this roadway between them, which is how the intestine can ripple and shift and still stay connected to its blood supply.'
        }
      },
      {
        ar: 'الأمعاء الدقيقة', en: 'Small intestine', x: 58, y: 90, side: 'right', go: 'small-intestine',
        desc: {
          ar: 'حلقات الامعاء الدقيقة تنزلق بعضها فوق بعض داخل الصفاق طوال اليوم بلا اذى. ولو التصقت الحلقات ببعضها بعد جراحة او التهاب لتكونت الالتصاقات، وهي سبب شائع لانسداد الامعاء بعد سنوات من العملية.',
          en: 'The coils of small intestine slide over one another inside the peritoneum all day long without harm. Should the coils stick together after surgery or inflammation, adhesions form, and they are a common cause of bowel obstruction years after an operation.'
        }
      }
    ],
    desc: {
      ar: 'الأغشية المصلية هي الحيلة التي حلّ بها الجسم مشكلة واحدة: كيف يتحرك عضو داخل تجويف مغلق دون أن يحتكّ بجداره فيتآكل. والحل أن يعيش كل عضو متحرك داخل كيس مزدوج، ورقة تلتصق بالعضو نفسه وورقة تبطّن الجدار، وبينهما طبقة سائل رقيقة جدا تجعلهما ينزلقان أحدهما على الآخر بلا احتكاك تقريبا. وأكياس الجذع ثلاثة: التامور حول القلب، والجنب حول كل رئة، والصفاق حول أعضاء البطن. التركيب واحد والمبدأ واحد وإن اختلفت الأسماء. وليس العضو داخل الكيس بالمعنى الحرفي، بل هو مدفوع في جداره كقبضة تُدفع في بالون منفوخ، فتلتصق بها ورقة وتبقى الأخرى خارجا. وأعظم ما في هذي الأغشية أنها لا تحسّ بها أبدا ما دامت سليمة، فإذا التهبت صار كل نفس وكل نبضة وكل حركة أمعاء موجعة.',
      en: 'The serous membranes are the body\'s answer to a single problem: how can an organ move inside a closed cavity without rubbing against its wall and wearing away. The solution is that every moving organ lives inside a double sac, one leaf bonded to the organ and one lining the wall, with a very thin film of fluid between them so they glide over one another with almost no friction. The trunk has three such sacs: the pericardium around the heart, the pleura around each lung, and the peritoneum around the abdominal organs. The structure is one and the principle is one, however the names differ. The organ is not literally inside the sac; it is pushed into its wall the way a fist is pushed into an inflated balloon, so one leaf clings to it and the other stays outside. The finest thing about these membranes is that while they are healthy you never feel them at all; once inflamed, every breath, every heartbeat and every movement of the bowel becomes painful.'
    },
    func: {
      ar: 'تقليل الاحتكاك بين الأعضاء المتحركة وجدرانها، وتثبيت الأعضاء في مواضعها دون أن تمنع حركتها، وحمل الأوعية والأعصاب إليها بين ورقتيها كما في المساريقا. وللسائل داخلها وظيفة ثالثة: يشكّل التصاقا سطحيا يجعل الورقتين تنزلقان دون أن تنفصلا، تماما كلوحين زجاجيين بينهما ماء ينزلقان بسهولة ويصعب فصلهما. وبهذا تبقى الرئة ملتصقة بجدار الصدر فتتمدد معه في كل شهيق. وللغشاء أيضا دور مناعي: يقاوم العدوى ويحدّها، ويلتصق الثرب بأي بؤرة التهاب في البطن ليحاصرها قبل أن تنتشر.',
      en: 'To cut friction between moving organs and their walls, to hold organs in place without hindering their movement, and to carry vessels and nerves to them between its two leaves, as in the mesentery. The fluid inside has a third role: it creates a surface adhesion that lets the two leaves slide without separating, exactly like two panes of glass with water between them, easy to slide yet hard to pull apart. This is how the lung stays coupled to the chest wall and expands with it on every breath in. The membrane has an immune role too: it resists infection and contains it, and the omentum sticks to any focus of inflammation in the abdomen to besiege it before it spreads.'
    },
    location: { ar: 'في تجويف الصدر: التامور حول القلب والجنب حول كل رئة؛ وفي تجويف البطن والحوض: الصفاق حول الأعضاء وعلى جدار البطن من الداخل', en: 'In the chest: the pericardium around the heart and the pleura around each lung; in the abdomen and pelvis: the peritoneum around the organs and lining the abdominal wall' },
    size: { ar: 'مساحة الصفاق نحو ١٫٧ متر مربع، أي قريبة من مساحة جلد الإنسان كله. والسائل بين الورقتين قليل جدا: نحو ١٥ إلى ٥٠ مل في التامور، وبضعة مليلترات في كل تجويف جنبي، وأقل من ١٠٠ مل في تجويف البطن', en: 'The peritoneum spreads over some 1.7 square metres, close to the area of the whole skin. The fluid between the leaves is very little: about 15-50 ml in the pericardium, a few millilitres in each pleural cavity, and under 100 ml in the abdomen' },
    short: { ar: 'كيس مزدوج وطبقة سائل: هكذا يتحرك القلب والرئة والأمعاء بلا احتكاك', en: 'A double sac and a film of fluid: how heart, lung and bowel move without friction' },
    parts: [
      { ar: 'التامور حول القلب', en: 'The pericardium around the heart' },
      { ar: 'الجنب حول كل رئة', en: 'The pleura around each lung' },
      { ar: 'الصفاق حول أعضاء البطن', en: 'The peritoneum around the abdominal organs' },
      { ar: 'الورقة الحشوية والورقة الجدارية وبينهما السائل المصلي', en: 'The visceral leaf, the parietal leaf and the serous fluid between them' }
    ],
    diseases: [
      { name: { ar: 'التهاب التامور والانصباب التاموري', en: 'Pericarditis and pericardial effusion' }, desc: { ar: 'التهاب كيس القلب يسبّب ألما حادا في الصدر يخفّ إذا مال المريض للأمام. وإذا تجمّع سائل كثير بسرعة ضغط على القلب فمنعه من الامتلاء، وهذي حالة إسعافية تسمّى الاندحاس القلبي', en: 'Inflammation of the heart\'s sac causes a sharp chest pain that eases when the patient leans forward. If fluid gathers quickly in quantity it presses on the heart and stops it filling: an emergency called cardiac tamponade' } },
      { name: { ar: 'الانصباب الجنبي', en: 'Pleural effusion' }, desc: { ar: 'تجمّع سائل بين ورقتي الجنب فتنضغط الرئة ويضيق النفس. أسبابه كثيرة: قصور القلب والالتهاب الرئوي والسل والأورام، ويُسحب السائل بإبرة للتشخيص والتخفيف', en: 'Fluid collecting between the two pleural leaves compresses the lung and shortens the breath. Its causes are many, among them heart failure, pneumonia, tuberculosis and tumours; the fluid is drawn off with a needle both to diagnose and to relieve' } },
      { name: { ar: 'استرواح الصدر', en: 'Pneumothorax' }, desc: { ar: 'دخول هواء بين ورقتي الجنب فيبطل الالتصاق بين الرئة وجدار الصدر، فتنطبق الرئة على نفسها ويظهر ألم مفاجئ وضيق نفس. قد يحدث تلقائيا في الشباب النحاف الطوال أو بعد إصابة', en: 'Air entering between the pleural leaves breaks the coupling between lung and chest wall, so the lung collapses on itself with sudden pain and breathlessness. It can happen spontaneously in tall thin young people, or after an injury' } },
      { name: { ar: 'التهاب الصفاق', en: 'Peritonitis' }, desc: { ar: 'التهاب غشاء البطن، غالبا بعد انثقاب أمعاء أو زائدة أو قرحة. البطن يصير صلبا كاللوح والألم شديد مع الحركة، وهي حالة إسعافية جراحية لا تحتمل التأخير', en: 'Inflammation of the abdominal membrane, usually after a perforated bowel, appendix or ulcer. The abdomen becomes board-hard and the pain severe on movement: a surgical emergency that will not wait' } },
      { name: { ar: 'الالتصاقات بعد الجراحة', en: 'Post-surgical adhesions' }, desc: { ar: 'بعد أي عملية في البطن قد يلتحم الصفاق بشرائط ليفية تربط حلقات الأمعاء ببعضها أو بالجدار، فتفقد انزلاقها. وقد لا تظهر المشكلة إلا بعد سنوات على هيئة انسداد أمعاء', en: 'After any abdominal operation the peritoneum may heal with fibrous bands tying loops of bowel to each other or to the wall, so they lose their glide. The trouble may not appear for years, and then as a bowel obstruction' } }
    ]
  }
]);

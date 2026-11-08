/* ---------- أغشية الدماغ والسائل الدماغي الشوكي (إسفين مقطوع من أعلى الرأس) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'meninges', type: 'organ', system: 'nervous',
    name: { ar: 'أغشية الدماغ والسائل الدماغي الشوكي', en: 'The meninges and cerebrospinal fluid' },
    img: 'img/meninges.webp', imgBack: 'img/meninges-back.webp', thumb: 'img/thumb-meninges.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'فروة الرأس والشعر', en: 'Scalp and hair', x: 30, y: 7, side: 'left',
        desc: {
          ar: 'اول طبقة يصطدم بها اي شي يضرب الراس. جلد سميك مشدود على العظم وفيه شعر واوعية دموية غزيرة، ولهذا تنزف جروح الراس نزفا كثيرا وان كانت سطحية.',
          en: 'The first layer anything striking the head meets: thick skin drawn tight over bone, carrying hair and a rich blood supply. That is why scalp wounds bleed heavily even when shallow.'
        }
      },
      {
        ar: 'الطبقة الدهنية تحت الجلد', en: 'Subcutaneous fat layer', x: 36, y: 14, side: 'left',
        desc: {
          ar: 'فصيصات دهنية صفراء تحت الجلد تعمل عمل الحشوة، تمتص جزءا من الضربة قبل ان تصل الى العظم.',
          en: 'Yellow fat lobules just under the skin that act as padding, soaking up part of a blow before it reaches the bone.'
        }
      },
      {
        ar: 'عظم الجمجمة', en: 'Skull bone', x: 27, y: 26, side: 'left', go: 'skull',
        desc: {
          ar: 'العظم هنا ليس صفيحة مصمتة بل ثلاث طبقات: لوح خارجي صلب، ونسيج اسفنجي مليء بالثقوب في الوسط وهو الظاهر هنا، ولوح داخلي. هذا البناء يعطي صلابة عالية بوزن خفيف.',
          en: 'The bone here is not a solid plate but three layers: a hard outer table, a spongy honeycomb core, which is what shows here, and an inner table. The design gives great strength for very little weight.'
        }
      },
      {
        ar: 'الأم الجافية', en: 'Dura mater', x: 32, y: 32, side: 'left',
        desc: {
          ar: 'اسمك الاغشية الثلاثة واقساها، ورقة ليفية بيضاء لامعة ملتصقة بباطن العظم. هي الخيمة التي تحفظ شكل الدماغ ومكانه، ومنها تنشا الجيوب الوريدية التي تصرف دم الدماغ.',
          en: 'The thickest and toughest of the three membranes, a glistening white fibrous sheet stuck to the inside of the bone. It is the tent that holds the brain in shape and in place, and the venous sinuses that drain the brain are carved out of it.'
        }
      },
      {
        ar: 'الأم العنكبوتية', en: 'Arachnoid mater', x: 36, y: 42, side: 'left',
        desc: {
          ar: 'غشاء رقيق شفاف تتدلى منه خيوط دقيقة كخيوط بيت العنكبوت، ومن هنا جاء اسمه. الخيوط تعبر الحيز الذي تحته وتربطه بسطح الدماغ فتمنع الدماغ من الارتطام بجدار الجمجمة.',
          en: 'A thin transparent membrane from which fine threads hang like a spider web, and from that it takes its name. The threads cross the space beneath it and tie it to the surface of the brain, keeping the brain from striking the wall of the skull.'
        }
      },
      {
        ar: 'الحيز تحت العنكبوتي والسائل الدماغي الشوكي', en: 'Subarachnoid space and cerebrospinal fluid', x: 38, y: 48, side: 'left', go: 'spinal-cord',
        desc: {
          ar: 'الفراغ المملوء بسائل رائق يحيط بالدماغ من كل جهة. الدماغ يطفو في هذا السائل، فوزنه الحقيقي نحو ١٤٠٠ غرام لكنه يصبح داخل السائل نحو ٥٠ غراما فقط، ولولا ذلك لسحق نفسه بثقله. والسائل نفسه ينزل ليحيط بالنخاع الشوكي كذلك.',
          en: 'A space filled with clear fluid that surrounds the brain on every side. The brain floats in it: its true weight is about 1400 grams, yet buoyed in this fluid it weighs only about 50 grams. Without that it would crush itself under its own mass. The same fluid runs down to bathe the spinal cord as well.'
        }
      },
      {
        ar: 'الأم الحنون', en: 'Pia mater', x: 45, y: 56, side: 'left',
        desc: {
          ar: 'ارق الاغشية الثلاثة واقربها للدماغ، غشاء شفاف يلتصق بسطح الدماغ التصاقا تاما وينزل معه في كل تلم وثنية. تجري فيه الاوعية الصغيرة قبل ان تغوص في نسيج الدماغ.',
          en: 'The thinnest and innermost of the three, a transparent film that clings to the brain surface exactly, following it down into every groove and fold. The small vessels run within it before diving into the brain tissue.'
        }
      },
      {
        ar: 'أوعية سطح الدماغ', en: 'Surface vessels of the brain', x: 36, y: 73, side: 'left', go: 'vessels',
        desc: {
          ar: 'شرايين حمراء تحمل الغذاء والاكسجين واوردة زرقاء تحمل الدم العائد، تنتشر كالشبكة على سطح الدماغ. الدماغ يستهلك نحو خمس اكسجين الجسم كله رغم ان وزنه نحو اثنين في المئة منه.',
          en: 'Red arteries carrying food and oxygen and blue veins carrying blood away, spread like a net over the brain surface. The brain uses about a fifth of the body oxygen although it is only some two percent of its weight.'
        }
      },
      {
        ar: 'تلافيف القشرة المخية', en: 'Cortical gyri', x: 26, y: 84, side: 'left', go: 'brain',
        desc: {
          ar: 'الطيات والاخاديد التي تعطي الدماغ منظره المتغضن. الطي حيلة لتوسيع المساحة: القشرة لو فردت لغطت نحو ربع متر مربع، فطويت لتدخل في علبة الجمجمة.',
          en: 'The folds and furrows that give the brain its wrinkled look. Folding is a trick to gain area: spread flat, the cortex would cover about a quarter of a square metre, so it is creased to fit inside the box of the skull.'
        }
      },
      {
        ar: 'الجيب السهمي العلوي', en: 'Superior sagittal sinus', x: 50, y: 34, side: 'right',
        desc: {
          ar: 'قناة وريدية كبيرة محفورة داخل الام الجافية في خط منتصف الراس. اليها يصب الدم العائد من الدماغ، ومنها يمضي الى اوردة الرقبة ثم الى القلب.',
          en: 'A large venous channel hollowed out inside the dura along the midline of the head. Blood returning from the brain empties into it, and from there travels to the neck veins and on to the heart.'
        }
      },
      {
        ar: 'الزغابات العنكبوتية', en: 'Arachnoid granulations', x: 52, y: 46, side: 'right',
        desc: {
          ar: 'نتوءات وردية تشبه العنقود تنغرس من الغشاء العنكبوتي في الجيب الوريدي. وظيفتها صمام في اتجاه واحد: تمرر السائل الدماغي الشوكي الزائد الى الدم، فيبقى ضغط السائل ثابتا. اذا انسدت تراكم السائل وارتفع الضغط داخل الراس.',
          en: 'Pink cauliflower-like tufts that push from the arachnoid into the venous sinus. They work as a one-way valve, passing surplus cerebrospinal fluid into the blood so its pressure stays steady. If they block, fluid builds up and pressure inside the head rises.'
        }
      },
      {
        ar: 'الوريد الجسري', en: 'Bridging vein', x: 71, y: 53, side: 'right',
        desc: {
          ar: 'وريد يعبر الحيز تحت العنكبوتي من سطح الدماغ صاعدا الى الجيب الوريدي. هذي الاوردة رقيقة ومشدودة، ولذلك تتمزق في السقطات والرجات فينزف الدم تحت الام الجافية.',
          en: 'A vein that crosses the subarachnoid space from the brain surface up to the venous sinus. These veins are thin and stretched taut, so falls and jolts can tear them and blood then seeps beneath the dura.'
        }
      },
      {
        ar: 'الشق الطولي ومنجل المخ', en: 'Longitudinal fissure and falx cerebri', x: 50, y: 78, side: 'right',
        desc: {
          ar: 'الاخدود العميق الذي يفصل نصفي المخ، وتنزل فيه صفيحة من الام الجافية تسمى المنجل لانها تشبه شفرة منحنية. هذي الصفيحة تمنع النصفين من الاصطدام ببعضهما عند حركة الراس المفاجئة.',
          en: 'The deep groove that separates the two halves of the brain, into which a sheet of dura descends, called the falx because it is shaped like a curved blade. It keeps the two halves from knocking together when the head moves suddenly.'
        }
      }
    ],
    desc: {
      ar: 'الدماغ عضو رخو جدا، قوامه أقرب إلى الجبن الطري منه إلى اللحم، ولذلك لا يعتمد في حمايته على العظم وحده. بينه وبين الجمجمة ثلاثة أغشية متتابعة تسمى السحايا: الأم الجافية الصلبة الملتصقة بالعظم، ثم الأم العنكبوتية الشبكية، ثم الأم الحنون الرقيقة اللاصقة بسطح الدماغ. وبين الغشاءين الأخيرين حيز مملوء بالسائل الدماغي الشوكي، وهو سائل رائق يصنعه الدماغ نفسه ويجدده عدة مرات كل يوم.',
      en: 'The brain is a very soft organ, closer in consistency to set custard than to muscle, so bone alone is not enough to protect it. Between it and the skull lie three successive membranes called the meninges: the tough dura mater against the bone, then the web-like arachnoid, then the delicate pia mater clinging to the brain surface. Between the last two lies a space filled with cerebrospinal fluid, a clear liquid the brain itself makes and renews several times a day.'
    },
    func: {
      ar: 'الحماية بثلاث وسائل مختلفة: التثبيت، فالأم الجافية تمسك الدماغ في مكانه وتمنعه من الانزلاق؛ والطفو، فالسائل الدماغي الشوكي يرفع عن الدماغ معظم وزنه حتى يصبح وزنه الفعلي نحو خمسين غراما بدل ألف وأربعمئة؛ وامتصاص الصدمات، فالسائل يوزع أثر الضربة بدل أن يتلقاها نسيج الدماغ مباشرة. ويضاف إلى ذلك دور غذائي: السائل يجرف فضلات الدماغ ويوصل إليه بعض المواد، ويصرف الزائد منه إلى الدم عبر الزغابات العنكبوتية.',
      en: 'Protection by three different means. Anchoring: the dura holds the brain in place and stops it sliding. Flotation: the cerebrospinal fluid lifts most of the brain weight, so its effective weight drops from about 1400 grams to some 50. And shock absorption: the fluid spreads the force of a blow instead of letting brain tissue take it directly. There is also a housekeeping role, as the fluid washes away waste, carries some substances to the brain, and drains its surplus into the blood through the arachnoid granulations.'
    },
    location: { ar: 'بين عظم الجمجمة ونسيج الدماغ، وتمتد نفس الأغشية نزولا داخل قناة العمود الفقري لتغلف النخاع الشوكي', en: 'Between the skull bone and the brain tissue, the same membranes continuing down inside the spinal canal to wrap the spinal cord' },
    size: { ar: 'الأم الجافية نحو نصف ملّيمتر سمكا، والأم الحنون أرق من ورقة؛ ومجموع السائل الدماغي الشوكي نحو ١٥٠ ملّيلترا يتجدد كاملا ثلاث إلى أربع مرات يوميا', en: 'The dura is about half a millimetre thick and the pia thinner than paper; the total cerebrospinal fluid is around 150 millilitres, wholly renewed three to four times a day' },
    short: { ar: 'ثلاثة أغشية وبحيرة صغيرة من السائل تجعل الدماغ يطفو بدل أن يسحق نفسه', en: 'Three membranes and a small lake of fluid let the brain float instead of crushing itself' },
    parts: [
      { ar: 'الأم الجافية', en: 'The dura mater' },
      { ar: 'الأم العنكبوتية والزغابات', en: 'The arachnoid and its granulations' },
      { ar: 'الأم الحنون', en: 'The pia mater' },
      { ar: 'السائل الدماغي الشوكي في الحيز تحت العنكبوتي', en: 'The cerebrospinal fluid in the subarachnoid space' }
    ],
    diseases: [
      { name: { ar: 'التهاب السحايا', en: 'Meningitis' }, desc: { ar: 'التهاب الأغشية بجرثومة أو فيروس، يسبب حمى وصداعا شديدا وتيبس الرقبة، والنوع الجرثومي خطر يحتاج علاجا فوريا', en: 'Inflammation of the membranes by a germ or virus, causing fever, severe headache and a stiff neck; the bacterial form is dangerous and needs immediate treatment' } },
      { name: { ar: 'النزف تحت الجافية', en: 'Subdural haemorrhage' }, desc: { ar: 'تمزق وريد جسري فيتجمع الدم ببطء تحت الأم الجافية ويضغط على الدماغ، وقد تظهر أعراضه بعد أسابيع من ضربة بسيطة', en: 'A torn bridging vein lets blood collect slowly beneath the dura and press on the brain; symptoms may appear weeks after a minor knock' } },
      { name: { ar: 'النزف فوق الجافية', en: 'Extradural haemorrhage' }, desc: { ar: 'نزف شرياني سريع بين العظم والأم الجافية بعد كسر في الجمجمة، حالة إسعافية لأن الضغط يرتفع خلال ساعات', en: 'A fast arterial bleed between bone and dura after a skull fracture; an emergency, because pressure builds within hours' } },
      { name: { ar: 'استسقاء الرأس', en: 'Hydrocephalus' }, desc: { ar: 'تراكم السائل الدماغي الشوكي لانسداد مجراه أو ضعف تصريفه، فيتمدد داخل الرأس ويضغط على نسيج الدماغ', en: 'A build-up of cerebrospinal fluid when its path is blocked or its drainage fails, swelling inside the head and pressing on brain tissue' } },
      { name: { ar: 'النزف تحت العنكبوتي', en: 'Subarachnoid haemorrhage' }, desc: { ar: 'انفجار وعاء في الحيز المملوء بالسائل، يبدأ بصداع مفاجئ عنيف يوصف بأنه أشد صداع في العمر', en: 'A vessel bursting into the fluid-filled space, beginning with a sudden violent headache often described as the worst of a lifetime' } }
    ]
  }
]);

/* ---------- الإخصاب ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'fertilization', type: 'organ', system: 'reproductive',
    name: { ar: 'الإخصاب', en: 'Fertilization' },
    img: 'img/fertilization.webp', imgBack: 'img/fertilization-back.webp', thumb: 'img/thumb-fertilization.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الإكليل المشع', en: 'Corona radiata', x: 50, y: 25, side: 'left',
        desc: {
          ar: 'طوق من الخلايا المغذية يحيط بالبويضة، خرج معها من المبيض وبقي ملتصقا بها. على الحيوان المنوي ان يشق طريقه بين هذي الخلايا اولا قبل ان يصل الى غلاف البويضة نفسه.',
          en: 'A collar of nurse cells that surrounds the egg, released with it from the ovary and still clinging to it. A sperm must first work its way between these cells before it can even reach the coat of the egg.'
        }
      },
      {
        ar: 'رأس الحيوان المنوي', en: 'Head of the sperm', x: 21, y: 44, side: 'left', go: 'testis',
        desc: {
          ar: 'راس بيضوي يحمل نصف عدد الصبغيات، وفوقه كيس صغير مملوء بانزيمات هاضمة يفتحه عند الوصول ليذيب طريقا خلال غلاف البويضة. لا يحمل الراس زادا ولا مخزونا، فالبويضة هي التي تعطي كل شي بعد ذلك.',
          en: 'An oval head carrying half a set of chromosomes, capped by a small sac of digesting enzymes that it opens on arrival to melt a path through the coat of the egg. The head brings no food or stores; everything after this moment comes from the egg.'
        }
      },
      {
        ar: 'المنطقة الشفافة', en: 'Zona pellucida', x: 30, y: 55, side: 'left',
        desc: {
          ar: 'غلاف سميك شفاف يحيط بالبويضة. اللحظة التي يخترقه فيها اول حيوان منوي يتغير تركيبه الكيميائي فورا فيصبح صلبا لا يخترق، وهكذا يقفل الباب في وجه بقية الحيوانات المنوية ولا يدخل الا واحد.',
          en: 'A thick clear coat around the egg. The instant the first sperm pierces it, its chemistry changes and it hardens into something no sperm can cross, so the door is shut on all the rest and only one ever gets in.'
        }
      },
      {
        ar: 'القطعة الوسطى', en: 'Midpiece', x: 16, y: 64, side: 'left',
        desc: {
          ar: 'الجزء المخطط خلف الراس مباشرة، وهو محرك الحيوان المنوي: يمتلئ بالمتقدرات التي تحرق السكر وتنتج الطاقة اللازمة لضرب الذيل طوال الرحلة.',
          en: 'The ribbed segment right behind the head, and the engine of the sperm: packed with mitochondria that burn sugar to make the energy the tail needs to keep beating all the way.'
        }
      },
      {
        ar: 'الذيل (السوط)', en: 'Tail (flagellum)', x: 9, y: 78, side: 'left',
        desc: {
          ar: 'سوط طويل يضرب يمينا ويسارا فيدفع الحيوان المنوي الى الامام. الرحلة من عنق الرحم الى قناة البيض نحو ١٥ الى ٢٠ سنتيمترا، وهي بالنسبة لحجمه مسافة هائلة، ولا يصل منها الا مئات قليلة من مئات الملايين.',
          en: 'A long whip that lashes side to side to drive the sperm forward. The journey from the cervix to the tube is some 15 to 20 centimetres, an enormous distance at this scale, and out of hundreds of millions only a few hundred arrive.'
        }
      },
      {
        ar: 'سيتوبلازم البويضة', en: 'Cytoplasm of the ovum', x: 63, y: 38, side: 'right', go: 'ovum',
        desc: {
          ar: 'جسم البويضة الحبيبي، وهو مخزن كامل من الغذاء والبروتينات والمتقدرات جهزته المراة على مدى سنوات. هذا المخزون هو ما يعيش عليه الجنين في ايامه الاولى قبل ان يعلق بجدار الرحم.',
          en: 'The grainy body of the egg, a full storehouse of food, proteins and mitochondria laid down over years. This store is what the young embryo lives on in its first days, before it fastens to the wall of the womb.'
        }
      },
      {
        ar: 'نواة البويضة', en: 'Nucleus of the ovum', x: 52, y: 45, side: 'right',
        desc: {
          ar: 'تحمل نصف عدد الصبغيات، ٢٣ صبغيا، وتنتظر النصف الاخر القادم مع الحيوان المنوي. حين يلتقي النصفان يكتمل العدد ٤٦ وتبدا اول خلية في الانسان الجديد.',
          en: 'It holds half a set of chromosomes, 23 of them, and waits for the other half arriving with the sperm. When the two halves meet the count reaches 46 and the first cell of a new person begins.'
        }
      },
      {
        ar: 'الحيوان المنوي المخترق', en: 'The penetrating sperm', x: 58, y: 56, side: 'right', go: 'embryo',
        desc: {
          ar: 'واحد فقط يعبر. وهو الذي يحسم ان يكون المولود ذكرا او انثى: البويضة تحمل صبغي X دائما، والحيوان المنوي يحمل X او Y، فان كان الداخل يحمل Y صار ذكرا وان كان يحمل X صارت انثى. تتقرر هذي المسالة في هذي الثانية بالذات.',
          en: 'Only one crosses. And it is this one that settles whether the child will be a boy or a girl: the egg always carries an X, while a sperm carries either an X or a Y, so a Y makes a boy and an X makes a girl. The whole matter is decided in this very second.'
        }
      },
      {
        ar: 'ذيل الحيوان المنوي الداخل', en: 'Tail of the entering sperm', x: 68, y: 63, side: 'right',
        desc: {
          ar: 'الذيل يبقى في الخارج وينفصل ثم يتحلل، فلا يدخل البويضة منه شي. ومعنى ذلك ان متقدرات الاب لا تنتقل للجنين، لان متقدرات الحيوان المنوي كلها في القطعة الوسطى من ذيله.',
          en: 'The tail is left outside, detaches and breaks down, so none of it enters the egg. That means the father mitochondria are not passed on, since a sperm keeps all of them in the midpiece of its tail.'
        }
      },
      {
        ar: 'الحيوانات المنوية المزدحمة', en: 'The crowd of sperm', x: 76, y: 72, side: 'right',
        desc: {
          ar: 'مئات تصل الى البويضة في وقت واحد وتحيط بها من كل جهة. انزيماتها مجتمعة تفكك خلايا الاكليل المشع فتفتح الطريق، ثم تخسر كلها لصالح واحد. من دخل هو الفائز، ولكن الطريق فتحه الجميع.',
          en: 'Hundreds reach the egg together and surround it from every side. Their enzymes together loosen the corona cells and open the way, then all of them lose to one. The winner is the one that enters, but the road was cleared by all.'
        }
      }
    ],
    desc: {
      ar: 'الإخصاب هو اللحظة التي يندمج فيها الحيوان المنوي بالبويضة فتتكون أول خلية في إنسان جديد. يحدث عادة في الثلث الخارجي من قناة البيض لا في الرحم، خلال نحو يوم واحد من خروج البويضة من المبيض. يصل إلى البويضة مئات من الحيوانات المنوية بعد رحلة تصفي مئات الملايين، وتتعاون على شق طريق بين خلايا الإكليل المشع، لكن واحدا فقط يخترق المنطقة الشفافة، وفور دخوله يتغير هذا الغلاف كيميائيا فيقفل الباب أمام البقية.',
      en: 'Fertilization is the moment a sperm merges with an egg and the first cell of a new person forms. It usually happens in the outer third of the fallopian tube rather than in the womb, within about a day of the egg leaving the ovary. Hundreds of sperm arrive after a journey that has already filtered out hundreds of millions, and together they work a path through the corona cells, yet only one pierces the zona pellucida. The instant it does, that coat changes chemically and shuts the door on the rest.'
    },
    func: {
      ar: 'جمع نصفي المادة الوراثية: ٢٣ صبغيا من الأم و٢٣ من الأب ليكتمل العدد ٤٦. وفي هذه اللحظة نفسها يتحدد جنس المولود، ومصدر التحديد هو الحيوان المنوي لا البويضة، لأن البويضة تحمل صبغي X دائما بينما يحمل الحيوان المنوي إما X فتكون أنثى أو Y فيكون ذكرا. ويمنع الغلاف المتصلب دخول أكثر من حيوان منوي، لأن دخول اثنين يعطي عددا خاطئا من الصبغيات لا تكمل معه الحياة. ثم تبدأ الخلية الملقحة بالانقسام وهي تتدحرج في القناة نحو الرحم.',
      en: 'Bringing the two halves of the inheritance together: 23 chromosomes from the mother and 23 from the father to complete the set of 46. In that same moment the sex of the child is fixed, and it is the sperm that fixes it, not the egg, because the egg always carries an X while a sperm carries either an X, giving a girl, or a Y, giving a boy. The hardened coat blocks any second sperm, since two entering would give a wrong chromosome count that life cannot continue with. The fertilized cell then begins to divide as it rolls along the tube towards the womb.'
    },
    location: { ar: 'في الثلث الخارجي من قناة البيض (قناة فالوب)، قرب المبيض لا قرب الرحم', en: 'In the outer third of the fallopian tube, near the ovary rather than near the womb' },
    size: { ar: 'البويضة نحو ٠٫١ ملّيمتر، والحيوان المنوي نحو ٠٫٠٥ ملّيمتر بذيله، أي إن حجم البويضة أكبر منه بنحو عشرة آلاف مرة', en: 'The egg is about 0.1 mm across and the sperm about 0.05 mm including its tail, so the egg is roughly ten thousand times its volume' },
    short: { ar: 'مئات تصل، وواحد يدخل، ثم يقفل الباب', en: 'Hundreds arrive, one enters, and then the door shuts' },
    parts: [
      { ar: 'الإكليل المشع', en: 'The corona radiata' },
      { ar: 'المنطقة الشفافة', en: 'The zona pellucida' },
      { ar: 'البويضة بنواتها وسيتوبلازمها', en: 'The egg with its nucleus and cytoplasm' },
      { ar: 'الحيوان المنوي برأسه وقطعته الوسطى وذيله', en: 'The sperm with its head, midpiece and tail' }
    ],
    diseases: [
      { name: { ar: 'العقم بعامل ذكري', en: 'Male factor infertility' }, desc: { ar: 'قلة عدد الحيوانات المنوية أو ضعف حركتها أو تشوه شكلها، فلا يصل منها ما يكفي لاختراق البويضة', en: 'Too few sperm, weak movement or abnormal shape, so not enough reach the egg to pierce it' } },
      { name: { ar: 'انسداد قناة البيض', en: 'Blocked fallopian tube' }, desc: { ar: 'التصاقات بعد التهاب أو جراحة تمنع لقاء البويضة بالحيوان المنوي في مكانه الطبيعي', en: 'Scarring after infection or surgery that stops egg and sperm meeting where they normally would' } },
      { name: { ar: 'الحمل خارج الرحم', en: 'Ectopic pregnancy' }, desc: { ar: 'تعلق البويضة الملقحة داخل القناة بدل أن تكمل إلى الرحم، وهي حالة خطرة تحتاج تدخلا سريعا', en: 'The fertilized egg implants inside the tube instead of travelling on to the womb; a dangerous state needing prompt treatment' } },
      { name: { ar: 'دخول أكثر من حيوان منوي', en: 'Polyspermy' }, desc: { ar: 'فشل قفل المنطقة الشفافة فيدخل أكثر من واحد، فيصير عدد الصبغيات خاطئا ولا يكمل الحمل', en: 'The zona fails to lock and more than one sperm enters, giving a wrong chromosome count so the pregnancy does not continue' } },
      { name: { ar: 'خلل الصبغيات المبكر', en: 'Early chromosomal error' }, desc: { ar: 'خطأ في توزيع الصبغيات عند الاندماج أو الانقسام الأول، وهو سبب شائع للإجهاض المبكر جدا', en: 'A mistake in sorting the chromosomes at fusion or at the first division, a common cause of very early miscarriage' } }
    ]
  }
]);

/* ---------- البويضة (مقطع) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'ovum', type: 'organ', system: 'reproductive',
    name: { ar: 'البويضة', en: 'The ovum' },
    img: 'img/ovum.webp', imgBack: 'img/ovum-back.webp', thumb: 'img/thumb-ovum.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الإكليل المشع', en: 'Corona radiata', x: 16, y: 28, side: 'left', go: 'ovary',
        desc: {
          ar: 'خلايا مغذية تحيط بالبويضة وتمد امتداداتها المتشابكة نحوها. رافقتها منذ كانت في المبيض تطعمها وتحرسها، وخرجت معها يوم الاباضة ولم تفارقها.',
          en: 'Nurse cells wrapped around the egg, reaching interlocking arms towards it. They kept it fed and guarded since its days in the ovary, came out with it at ovulation and have not left it since.'
        }
      },
      {
        ar: 'الشبكة الإندوبلازمية الخشنة', en: 'Rough endoplasmic reticulum', x: 42, y: 36, side: 'left',
        desc: {
          ar: 'صفائح غشائية مرصوصة كصفحات كتاب، والحبيبات الحمراء على سطحها هي الريبوسومات وهي مصانع البروتين. من هنا تخرج البروتينات التي سيحتاجها الجنين في ايامه الاولى.',
          en: 'Membrane sheets stacked like the pages of a book, the red grains on their surface being ribosomes, the protein factories. From here come the proteins the embryo will need in its first days.'
        }
      },
      {
        ar: 'نواة البويضة', en: 'Nucleus of the ovum', x: 48, y: 44, side: 'left',
        desc: {
          ar: 'نواة كبيرة تحمل نصف مادة الوراثة، ٢٣ صبغيا. هي اضخم نواة في خلايا الجسم لان الخلية نفسها اضخم خلية، وتنتظر النصف الاخر الذي ياتي به الحيوان المنوي.',
          en: 'A large nucleus holding half the inheritance, 23 chromosomes. It is the biggest nucleus in the body because the cell itself is the biggest cell, and it waits for the other half that a sperm will bring.'
        }
      },
      {
        ar: 'المنطقة الشفافة', en: 'Zona pellucida', x: 23, y: 52, side: 'left', go: 'fertilization',
        desc: {
          ar: 'الغلاف السميك الشفاف حول البويضة، مصنوع من بروتينات سكرية. هو باب الدخول وهو ايضا القفل: يسمح لحيوان منوي واحد بالمرور ثم يتصلب فورا فلا يدخل بعده احد.',
          en: 'The thick clear coat around the egg, built of sugar-bearing proteins. It is both the doorway and the lock: it lets one sperm through, then hardens at once so that no other can follow.'
        }
      },
      {
        ar: 'حويصلات وقطرات مغذية', en: 'Vesicles and nutrient droplets', x: 33, y: 60, side: 'left',
        desc: {
          ar: 'كرات صغيرة صافية وذهبية منتشرة في السيتوبلازم، فيها مخزون من الدهون والمواد الجاهزة. البويضة لا تتغذى من الخارج في ايامها الاولى فتعيش على ما خزنته مسبقا.',
          en: 'Small clear and golden spheres scattered through the cytoplasm, holding stored fat and ready-made materials. The egg is not fed from outside in its first days, so it lives on what it stocked in advance.'
        }
      },
      {
        ar: 'السيتوبلازم (الهيولى)', en: 'Cytoplasm', x: 60, y: 29, side: 'right',
        desc: {
          ar: 'جسم الخلية الحبيبي الذي تسبح فيه العضيات كلها. هو الزاد الذي يقوم عليه الجنين في اسبوعه الاول قبل ان يعلق بالرحم ويبدا اخذ الغذاء من الام.',
          en: 'The grainy body of the cell in which all the organelles float. It is the provision the embryo lives on through its first week, before it fastens to the womb and starts drawing food from the mother.'
        }
      },
      {
        ar: 'الشبكة الإندوبلازمية الملساء', en: 'Smooth endoplasmic reticulum', x: 68, y: 37, side: 'right',
        desc: {
          ar: 'شبكة انابيب زرقاء بلا حبيبات على سطحها. تصنع الدهون وتخزن الكالسيوم، والكالسيوم هنا مهم بشكل خاص لان موجة منه هي اول اشارة تطلقها البويضة لحظة دخول الحيوان المنوي.',
          en: 'A network of blue tubules with no grains on their surface. It makes fats and stores calcium, and calcium matters especially here because a wave of it is the first signal the egg fires the moment a sperm enters.'
        }
      },
      {
        ar: 'متقدرة (ميتوكوندريا)', en: 'Mitochondrion', x: 79, y: 45, side: 'right', go: 'cell',
        desc: {
          ar: 'جسم برتقالي بطيات داخلية، وهو محطة الطاقة في الخلية. متقدرات الجنين كلها تاتي من البويضة وحدها، لان ذيل الحيوان المنوي الذي يحمل متقدراته يبقى خارجا. ولهذا يورث الحمض النووي المتقدري من الام فقط، ويسير في العائلة من الام الى ابنائها جميعا.',
          en: 'An orange body with inner folds, the power station of the cell. All the mitochondria of the embryo come from the egg alone, because the sperm tail that carries its own is left outside. This is why mitochondrial DNA is inherited from the mother only, passing down the family from a mother to every one of her children.'
        }
      },
      {
        ar: 'النوية', en: 'Nucleolus', x: 54, y: 52, side: 'right',
        desc: {
          ar: 'كتلة داكنة داخل النواة، وهي ورشة صنع الريبوسومات. البويضة تكدس منها كميات كبيرة قبل الاخصاب لان اول انقسامات الجنين تحتاج بروتينات كثيرة بسرعة.',
          en: 'A dark mass inside the nucleus, the workshop where ribosomes are built. The egg piles up great numbers of them before fertilization, because the first divisions of the embryo need a great deal of protein quickly.'
        }
      },
      {
        ar: 'جهاز جولجي', en: 'Golgi apparatus', x: 66, y: 63, side: 'right',
        desc: {
          ar: 'اكياس ذهبية مرصوصة تستقبل ما تصنعه الشبكة الاندوبلازمية فتغلفه وتوجهه الى مكانه. هو مركز التغليف والشحن داخل الخلية.',
          en: 'Stacked golden sacs that receive what the endoplasmic reticulum makes, wrap it and send it where it belongs. It is the packing and dispatch centre of the cell.'
        }
      }
    ],
    desc: {
      ar: 'البويضة أكبر خلية في جسم الإنسان: قطرها نحو عُشر ملّيمتر، وهي على الحد الذي تكاد تُرى فيه بالعين المجردة كنقطة دقيقة. وهذا المقطع يبين ما بداخلها: منطقة شفافة سميكة تحيط بها، وسيتوبلازم غني بالعضيات فيه نواة كبيرة بنويّتها، ومتقدرات، وشبكة إندوبلازمية خشنة وملساء، وجهاز جولجي، وحويصلات مخزون. ومن حولها خلايا الإكليل المشع بامتداداتها المتشابكة. والمرأة تولد وفي مبيضيها كل بويضاتها ولا تصنع بويضة جديدة بعد الولادة أبدا، فالبويضة التي تُخصب اليوم كانت موجودة منذ كانت أمها جنينا في بطن جدتها.',
      en: 'The ovum is the largest cell in the human body: about a tenth of a millimetre across, right at the edge of what a bare eye can just make out as a fine speck. This section shows what lies within it: a thick clear zona around the outside, a cytoplasm rich in organelles holding a large nucleus with its nucleolus, mitochondria, rough and smooth endoplasmic reticulum, a Golgi apparatus and storage vesicles, with the corona radiata cells and their interlocking arms all around. A woman is born with every egg she will ever have and makes no new ones after birth, so an egg fertilized today already existed when her own mother was still a fetus.'
    },
    func: {
      ar: 'حمل نصف المادة الوراثية للأم، وتزويد الإنسان الجديد بكل ما يلزمه للبداية: الغذاء والبروتينات والعضيات. وهي التي تعطي الجنين متقدراته كلها، لأن متقدرات الأب تبقى في ذيل الحيوان المنوي خارج البويضة، ولذلك يورث الحمض النووي المتقدري من الأم وحدها. وللبويضة كذلك دور الحارس: منطقتها الشفافة تسمح بدخول حيوان منوي واحد ثم تُقفل، وهي التي تطلق إشارة الكالسيوم التي تبدأ بها الحياة الجديدة.',
      en: 'To carry the mother half of the inheritance, and to hand the new person everything needed to begin: food, proteins and organelles. It supplies the embryo with all of its mitochondria, since the father ones stay in the sperm tail outside the egg, which is why mitochondrial DNA descends from the mother alone. The egg is also the gatekeeper: its zona admits one sperm and then locks, and it is the egg that fires the calcium signal with which the new life starts.'
    },
    location: { ar: 'تنضج داخل جُريب في المبيض، ثم تُطلق شهريا إلى قناة البيض حيث قد تُخصب', en: 'It ripens inside a follicle in the ovary, then is released each month into the fallopian tube, where it may be fertilized' },
    size: { ar: 'نحو ٠٫١ ملّيمتر (١٠٠ ميكرومتر) قطرا، أكبر من خلية الجسم العادية بنحو ٢٠ مرة ومن الحيوان المنوي بآلاف المرات', en: 'About 0.1 mm (100 micrometres) across, roughly twenty times a typical body cell and thousands of times the volume of a sperm' },
    short: { ar: 'أكبر خلية في الجسم، ومصدر كل متقدرات الإنسان', en: 'The largest cell in the body, and the source of every mitochondrion a person has' },
    parts: [
      { ar: 'المنطقة الشفافة', en: 'The zona pellucida' },
      { ar: 'الإكليل المشع', en: 'The corona radiata' },
      { ar: 'النواة والنويّة', en: 'The nucleus and nucleolus' },
      { ar: 'السيتوبلازم بعضياته ومخزونه', en: 'The cytoplasm with its organelles and stores' }
    ],
    diseases: [
      { name: { ar: 'قصور المبيض المبكر', en: 'Premature ovarian insufficiency' }, desc: { ar: 'نفاد مخزون البويضات قبل الأربعين، فينقطع الطمث مبكرا ويصعب الحمل', en: 'The store of eggs runs out before forty, periods stop early and pregnancy becomes difficult' } },
      { name: { ar: 'تكيس المبايض', en: 'Polycystic ovary syndrome' }, desc: { ar: 'اضطراب هرموني تتوقف فيه الجُريبات قبل النضج فلا تُطلق بويضة بانتظام', en: 'A hormonal disorder in which follicles stall before ripening, so no egg is released regularly' } },
      { name: { ar: 'تراجع جودة البويضات بالعمر', en: 'Age-related decline in egg quality' }, desc: { ar: 'مع تقدم العمر تكثر أخطاء توزيع الصبغيات في البويضة، فيزيد الإجهاض واحتمال المتلازمات الصبغية', en: 'With age, chromosome sorting errors in the egg grow more common, raising miscarriage and the chance of chromosomal syndromes' } },
      { name: { ar: 'أمراض المتقدرات الوراثية', en: 'Inherited mitochondrial disease' }, desc: { ar: 'عيب في الحمض النووي المتقدري داخل البويضة ينتقل من الأم إلى كل أبنائها ويصيب العضلات والدماغ غالبا', en: 'A fault in the mitochondrial DNA inside the egg passes from a mother to all her children, most often affecting muscle and brain' } }
    ]
  }
]);

/* ---------- مراحل نمو الجنين ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'embryo', type: 'organ', system: 'reproductive',
    name: { ar: 'مراحل نمو الجنين', en: 'Stages of embryonic development' },
    img: 'img/embryo.webp', imgBack: 'img/embryo-back.webp', thumb: 'img/thumb-embryo.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الحيوان المنوي عند لحظة الدخول', en: 'The sperm at the moment of entry', x: 7, y: 13, side: 'left', go: 'fertilization',
        desc: {
          ar: 'بداية العد كله. من هذي اللحظة تحسب اعمار المراحل التالية، ومن هنا تبدا ٢٣ صبغيا من الاب رحلتها مع ٢٣ من الام.',
          en: 'The start of the whole count. The ages of every later stage are measured from this instant, and here 23 chromosomes from the father begin their journey with 23 from the mother.'
        }
      },
      {
        ar: 'اللاقحة (الخلية الملقحة)', en: 'The zygote', x: 14, y: 20, side: 'left', go: 'ovum',
        desc: {
          ar: 'اليوم الاول. خلية واحدة فقط تحمل ٤٦ صبغيا كاملة، وفيها مكتوب كل شي: لون العينين وطول القامة وشكل اليد. اضخم خلية في الجسم، ومنها سيخرج ٣٠ الف مليار خلية.',
          en: 'Day one. A single cell carrying the full 46 chromosomes, with everything already written in it: eye colour, height, the shape of a hand. The largest cell in the body, and from it will come some thirty trillion cells.'
        }
      },
      {
        ar: 'مرحلة الخليتين', en: 'Two-cell stage', x: 36, y: 27, side: 'left',
        desc: {
          ar: 'بعد نحو يوم ونصف. الخلية تنقسم لكن الكتلة لا تكبر، فالخليتان معا بحجم الخلية الاولى نفسها. القسمة هنا تجزئة لا نمو، والغلاف الشفاف ما زال يحيط بهما.',
          en: 'About a day and a half in. The cell divides but the mass does not grow, so the two cells together are the size of the original one. Division here is partition rather than growth, and the clear coat still surrounds them.'
        }
      },
      {
        ar: 'الفلقات (الجسيدات)', en: 'Somites', x: 11, y: 57, side: 'left',
        desc: {
          ar: 'الكتل المتراصة على طول ظهر الجنين في الاسبوع الرابع والخامس، تشبه حبات المسبحة. من كل واحدة منها ستنشا فقرة وعضلاتها وجلدها، ومن تتابعها ياتي تقسيم الجسم الى شرائح يبقى اثره في الاضلاع طوال العمر.',
          en: 'The blocks lined along the back of the embryo in weeks four and five, like beads on a string. Each will give rise to a vertebra with its muscle and skin, and from their sequence comes the segmented plan of the body, still visible in the ribs for life.'
        }
      },
      {
        ar: 'براعم الأطراف', en: 'Limb buds', x: 20, y: 66, side: 'left',
        desc: {
          ar: 'نتوءات صغيرة كالمجاذيف تظهر في الاسبوع الخامس تقريبا، وهي مبتدا الذراعين والساقين. تستطيل ثم تتسطح اطرافها كالمجرفة ثم تنحت الاصابع بموت خلايا ما بينها، فتفصل الاصابع بعضها عن بعض.',
          en: 'Small paddle-like swellings appearing around week five, the beginnings of arms and legs. They lengthen, flatten at the tip like a spade, then the fingers are carved out as the cells between them die away and separate one digit from the next.'
        }
      },
      {
        ar: 'مرحلة الأربع خلايا', en: 'Four-cell stage', x: 55, y: 27, side: 'right',
        desc: {
          ar: 'اليوم الثاني تقريبا. الانقسام مستمر والكرة تتدحرج ببطء في قناة البيض نحو الرحم. حتى الان لا تزال تعيش على مخزون البويضة وحدها.',
          en: 'Around day two. Division continues while the ball rolls slowly along the tube towards the womb. Up to now it is still living on the stores of the egg alone.'
        }
      },
      {
        ar: 'التوتية', en: 'The morula', x: 68, y: 20, side: 'right',
        desc: {
          ar: 'اليوم الثالث او الرابع. كتلة مصمتة من نحو ١٦ الى ٣٢ خلية، سميت التوتية لان شكلها يشبه حبة التوت. الخلايا هنا ما زالت متشابهة ولم يتحدد بعد ما ستكون.',
          en: 'Day three or four. A solid ball of some 16 to 32 cells, called the morula because it looks like a mulberry. The cells are still alike here, and what each will become is not yet settled.'
        }
      },
      {
        ar: 'الكيسة الأريمية', en: 'The blastocyst', x: 88, y: 35, side: 'right',
        desc: {
          ar: 'اليوم الخامس الى السابع. تتجوف الكرة ويظهر داخلها تجويف مملوء بسائل، وتنقسم الخلايا الى مجموعتين: طبقة خارجية ستصير المشيمة، وكتلة داخلية ستصير الجنين نفسه. في هذي المرحلة تعلق بجدار الرحم.',
          en: 'Days five to seven. The ball hollows out, a fluid-filled cavity appears inside, and the cells split into two groups: an outer layer that will become the placenta and an inner mass that will become the embryo itself. At this stage it fastens to the wall of the womb.'
        }
      },
      {
        ar: 'الجنين مكتمل الملامح', en: 'The fetus with formed features', x: 79, y: 50, side: 'right',
        desc: {
          ar: 'من الاسبوع التاسع فصاعدا يسمى جنينا مكتملا لا جنينا مبكرا. الاعضاء كلها تكونت وبقي عليها ان تكبر وتنضج: الوجه ظاهر، والاذن في مكانها، والاصابع منفصلة ولها اظافر، والجفنان مغلقان الى الشهر السابع تقريبا.',
          en: 'From week nine onward it is called a fetus rather than an embryo. All the organs have formed and what remains is growth and ripening: the face is there, the ear in place, the fingers separate and tipped with nails, and the eyelids stay closed until about the seventh month.'
        }
      },
      {
        ar: 'الكيس السلوي', en: 'The amniotic sac', x: 57, y: 58, side: 'right',
        desc: {
          ar: 'الغشاء الشفاف المحيط بالجنين والمملوء بالسائل الامنيوسي. الجنين يسبح فيه فيتحرك بحرية وتنمو اطرافه متناسقة، ويحميه السائل من الضغط والصدمات ومن التصاق الجلد بالغشاء.',
          en: 'The clear membrane around the embryo, filled with amniotic fluid. The embryo floats in it, free to move so its limbs grow evenly, and the fluid shields it from pressure and knocks and keeps its skin from sticking to the membrane.'
        }
      },
      {
        ar: 'الحبل السري', en: 'The umbilical cord', x: 67, y: 69, side: 'right', go: 'pregnancy',
        desc: {
          ar: 'حبل ملتف يصل الجنين بالمشيمة، فيه ثلاثة اوعية: وريد واحد يحمل الدم الغني بالغذاء والاكسجين الى الجنين، وشريانان يعيدان الدم المحمل بالفضلات الى المشيمة. التفافه اللولبي يمنعه من الانثناء والانسداد حين يتحرك الجنين.',
          en: 'A coiled rope joining the fetus to the placenta, carrying three vessels: one vein bringing blood rich in food and oxygen to the fetus, and two arteries returning blood laden with waste to the placenta. Its spiral twist keeps it from kinking and closing off when the fetus moves.'
        }
      }
    ],
    desc: {
      ar: 'هذه اللوحة تعرض الرحلة كلها في صف واحد. في الصف الأعلى المراحل الخلوية في الأيام الأولى: اللاقحة في اليوم الأول، ثم مرحلة الخليتين، ثم الأربع خلايا، ثم التوتية المصمتة، ثم الكيسة الأريمية المجوفة التي تعلق بجدار الرحم في اليوم السادس أو السابع. وفي الصف الأسفل ما يأتي بعد التعلّق: جنين مبكر منحني الظهر تظهر عليه الفلقات وبراعم الأطراف، ثم جنين تكوّنت أعضاؤه، ثم جنين مكتمل الملامح له وجه وأذن وأصابع بأظافر. أخطر مرحلة هي الأسابيع الثلاثة إلى الثامنة، لأن الأعضاء تتكوّن فيها، وأي أذى في هذه المدة يترك أثرا في البنية نفسها.',
      en: 'This plate lays the whole journey out in order. The upper row holds the cellular stages of the first days: the zygote on day one, then the two-cell and four-cell stages, then the solid morula, then the hollow blastocyst that fastens to the wall of the womb on day six or seven. The lower row shows what follows implantation: an early curved embryo with somites and limb buds, then one whose organs have formed, then a fetus with a face, an ear and fingers with nails. The most delicate stretch is weeks three to eight, because the organs are being built then, and harm during that time leaves its mark on the structure itself.'
    },
    func: {
      ar: 'الأيام الأولى انقسام بلا نمو: الخلايا تتكاثر داخل الغلاف الشفاف والحجم ثابت، حتى تتجوّف الكرة وتنقسم إلى قسمين، قسم للمشيمة وقسم للجنين. ثم يأتي التعلّق بجدار الرحم فيبدأ الغذاء يصل من الأم بدل مخزون البويضة. وبعده تتشكل ثلاث طبقات جنينية تنشأ منها كل الأعضاء: طبقة للجلد والجهاز العصبي، وطبقة للعظام والعضلات والقلب والكلى، وطبقة لبطانة الجهاز الهضمي والتنفسي. وينتهي بناء الأعضاء تقريبا في نهاية الأسبوع الثامن، فيصير ما بعده نموا وزيادة حجم ونضجا وظيفيا.',
      en: 'The first days are division without growth: cells multiply inside the clear coat while the size stays the same, until the ball hollows and splits into two parts, one for the placenta and one for the embryo. Implantation follows and food begins to come from the mother rather than from the egg store. Then three germ layers form, and every organ is built from them: one layer for skin and nervous system, one for bones, muscle, heart and kidneys, and one for the lining of the gut and airways. Organ building is largely finished by the end of week eight, and what comes after is growth in size and ripening in function.'
    },
    location: { ar: 'الأيام الأولى في قناة البيض، ثم داخل بطانة الرحم بعد التعلّق في اليوم السادس أو السابع', en: 'The first days in the fallopian tube, then within the lining of the womb after implanting on day six or seven' },
    size: { ar: 'اللاقحة نحو ٠٫١ ملّيمتر، وفي الأسبوع الثامن نحو ٣ سنتيمترات، وفي الشهر الخامس نحو ٢٥ سنتيمترا، وعند الولادة نحو ٥٠ سنتيمترا و٣٫٣ كيلوغرامات', en: 'The zygote is about 0.1 mm, at week eight about 3 cm, at five months about 25 cm, and at birth around 50 cm and 3.3 kg' },
    short: { ar: 'من خلية واحدة إلى إنسان كامل في تسعة أشهر', en: 'From a single cell to a whole person in nine months' },
    parts: [
      { ar: 'اللاقحة ومراحل الانقسام الأولى', en: 'The zygote and the first cleavage stages' },
      { ar: 'التوتية والكيسة الأريمية', en: 'The morula and the blastocyst' },
      { ar: 'الجنين المبكر بفلقاته وبراعم أطرافه', en: 'The early embryo with its somites and limb buds' },
      { ar: 'الجنين المكتمل بكيسه السلوي وحبله السري', en: 'The fetus with its amniotic sac and umbilical cord' }
    ],
    diseases: [
      { name: { ar: 'الإجهاض المبكر', en: 'Early miscarriage' }, desc: { ar: 'توقف الحمل في أسابيعه الأولى، وسببه في أغلب الحالات خطأ في عدد الصبغيات لا خطأ من الأم', en: 'The pregnancy stops in its first weeks, in most cases from a chromosome number error rather than anything the mother did' } },
      { name: { ar: 'متلازمة داون', en: 'Down syndrome' }, desc: { ar: 'وجود نسخة زائدة من الصبغي ٢١، تظهر آثارها في ملامح الوجه والقلب ودرجة التعلم', en: 'An extra copy of chromosome 21, showing in facial features, the heart and the pace of learning' } },
      { name: { ar: 'عيوب الأنبوب العصبي', en: 'Neural tube defects' }, desc: { ar: 'عدم انغلاق الأنبوب العصبي في الأسبوع الرابع كالسنسنة المشقوقة، ويقل خطره كثيرا بحمض الفوليك قبل الحمل', en: 'The neural tube fails to close in week four, as in spina bifida; folic acid taken before pregnancy greatly lowers the risk' } },
      { name: { ar: 'تأخر النمو داخل الرحم', en: 'Intrauterine growth restriction' }, desc: { ar: 'ضعف وصول الغذاء عبر المشيمة فيولد الطفل أصغر من عمره الحملي', en: 'Food reaching the fetus through the placenta falls short, so the baby is born smaller than its gestational age' } },
      { name: { ar: 'الولادة المبكرة', en: 'Preterm birth' }, desc: { ar: 'الولادة قبل الأسبوع ٣٧، وأخطر ما فيها أن الرئتين تكونان آخر ما ينضج في الجنين', en: 'Birth before week 37; its chief danger is that the lungs are the last thing in the fetus to mature' } }
    ]
  }
]);

/* ---------- الوتر والرباط ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'tendon-ligament', type: 'organ', system: 'muscles',
    name: { ar: 'الوتر والرباط', en: 'Tendon and ligament' },
    img: 'img/tendon-ligament.webp', imgBack: 'img/tendon-ligament-back.webp', thumb: 'img/thumb-tendon-ligament.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'البطن العضلي', en: 'Muscle belly', x: 8, y: 8, side: 'left', go: 'muscles',
        desc: {
          ar: 'الجزء الاحمر السميك من العضلة، وهو وحده الذي ينقبض. لونه الاحمر من كثرة الاوعية الدموية وصبغة المايوغلوبين التي تخزن الاكسجين، لان العضلة تحتاج طاقة مستمرة.',
          en: 'The thick red part of the muscle, and the only part that contracts. Its red comes from a dense blood supply and from myoglobin, the pigment that stores oxygen, because a muscle needs a constant supply of energy.'
        }
      },
      {
        ar: 'ألياف الكولاجين المتوازية', en: 'Parallel collagen fibres', x: 37, y: 17, side: 'left', go: 'muscle-fiber',
        desc: {
          ar: 'داخل الوتر تصطف الالياف كلها في اتجاه واحد موازية لخط الشد. هذا الترتيب هو سر قوته: الوتر يتحمل شدا هائلا في اتجاه طوله، لكنه ضعيف جدا امام اللي والالتواء الجانبي.',
          en: 'Inside a tendon the fibres all line up in one direction, parallel to the pull. That arrangement is the secret of its strength: a tendon bears enormous force along its length, yet is very weak against twisting sideways.'
        }
      },
      {
        ar: 'حزم الكولاجين في المقطع', en: 'Collagen bundles in cross-section', x: 45, y: 28, side: 'left',
        desc: {
          ar: 'المقطع المكبر يبين ان الوتر ليس حبلا واحدا بل حزم داخل حزم: خيوط دقيقة تجتمع في الياف، والالياف في رزم، والرزم في الوتر كله، وحول كل رزمة غلاف رقيق ينزلق عليها. هذا البناء المتدرج هو الذي يجعل الوتر اقوى من سلك فولاذي بنفس الوزن.',
          en: 'The magnified section shows a tendon is not one rope but bundles within bundles: fine threads gather into fibres, fibres into fascicles, fascicles into the whole tendon, with a thin sheath around each bundle for it to slide on. This nested design is what makes a tendon stronger than a steel wire of the same weight.'
        }
      },
      {
        ar: 'الوتر', en: 'Tendon', x: 15, y: 40, side: 'left',
        desc: {
          ar: 'حبل ابيض لامع تنتهي اليه العضلة ليربطها بالعظم. ابيض لانه فقير جدا بالدم، وهذا سبب بطء شفاء الوتر بعد التمزق مقارنة بالعضلة. وظيفته نقل قوة الانقباض من مكان بعيد الى العظم، ولهذا تحرك عضلات الساعد اصابعك وهي ليست في يدك.',
          en: 'A glistening white cord in which the muscle ends, tying it to bone. It is white because its blood supply is very poor, which is why a torn tendon heals far more slowly than a muscle. Its job is to carry the pull from a distance to the bone, which is how muscles in your forearm move fingers that are nowhere near them.'
        }
      },
      {
        ar: 'ارتكاز الوتر في العظم', en: 'Tendon insertion into bone', x: 27, y: 58, side: 'left',
        desc: {
          ar: 'الوتر لا يلتصق بالعظم بل تغوص الياف الكولاجين في نسيجه وتصير جزءا منه، عبر منطقة انتقالية تتدرج من الوتر اللين الى الغضروف الى العظم الصلب. هذا التدرج يوزع الشد فلا ينفصل الوتر عند نقطة واحدة.',
          en: 'The tendon does not merely stick to the bone: its collagen fibres sink into the bone tissue and become part of it, through a transition zone that grades from soft tendon to cartilage to hard bone. That gradient spreads the pull so the tendon does not tear away at a single point.'
        }
      },
      {
        ar: 'العظم', en: 'Bone', x: 28, y: 82, side: 'left', go: 'bone-inside',
        desc: {
          ar: 'الجزء الصلب الذي ينتهي اليه كل شد. النتوءات والحدبات التي تراها على سطح العظم ليست عشوائية، بل تنشا حيث تشد الاوتار، فالعظم يبني نفسه في المواضع التي تحمل الحمل.',
          en: 'The hard part where every pull ends. The ridges and bumps you see on a bone surface are not random: they grow where tendons pull, because bone builds itself up wherever load is carried.'
        }
      },
      {
        ar: 'عظم الفخذ', en: 'Femur', x: 80, y: 12, side: 'right', go: 'skeleton',
        desc: {
          ar: 'العظم العلوي في المفصل. لاحظ الفرق بين النصفين: على اليسار وتر يصل عضلة بعظم، وهنا رباط يصل عظما بعظم. النسيج متشابه لكن الطرفين مختلفان.',
          en: 'The upper bone of the joint. Note the difference between the two halves: on the left a tendon joins muscle to bone, while here a ligament joins bone to bone. The tissue is similar but what it connects is not.'
        }
      },
      {
        ar: 'الرباطان الصليبيان', en: 'The cruciate ligaments', x: 84, y: 42, side: 'right', go: 'knee',
        desc: {
          ar: 'رباطان يتقاطعان كحرف X في قلب الركبة، يمنعان انزلاق الساق اماما وخلفا ويضبطان دوران المفصل. الرباط الصليبي الامامي من اكثر الاربطة تمزقا في الرياضة لان انتهاءه يحدث في لحظة تغيير اتجاه مفاجئ.',
          en: 'Two ligaments crossing like an X in the heart of the knee, stopping the leg sliding forward and back and controlling the twist of the joint. The anterior cruciate is among the most commonly torn ligaments in sport, because it goes in the instant of a sudden change of direction.'
        }
      },
      {
        ar: 'الغضروف الهلالي', en: 'Meniscus', x: 73, y: 51, side: 'right',
        desc: {
          ar: 'وسادة غضروفية على شكل هلال بين عظمي الركبة، توزع الحمل وتزيد تلامس السطحين وتعمل عمل الممتص للصدمات. ليست رباطا لكنها تعمل معه على ثبات المفصل.',
          en: 'A crescent-shaped cartilage cushion between the two knee bones. It spreads the load, widens the contact between the surfaces and acts as a shock absorber. It is not a ligament, but it works with them to keep the joint steady.'
        }
      },
      {
        ar: 'الرباط الجانبي', en: 'Collateral ligament', x: 61, y: 62, side: 'right',
        desc: {
          ar: 'شريط ليفي قوي على جانب المفصل يمنعه من الانفتاح جانبا. الاربطة تعمل كالاحزمة: تسمح للحركة في اتجاهها الطبيعي وتقف عند حدها فتحمي المفصل من الخلع.',
          en: 'A strong fibrous band on the side of the joint that stops it opening sideways. Ligaments work like straps: they allow motion in its natural direction and halt it at the limit, guarding the joint from dislocation.'
        }
      },
      {
        ar: 'عظم الساق', en: 'Tibia', x: 82, y: 78, side: 'right',
        desc: {
          ar: 'العظم السفلي في المفصل، وتنتهي عليه الاربطة والاوتار القادمة من الفخذ. الفرق بين الوتر والرباط ليس في المادة بل في العمل: كلاهما كولاجين، لكن الوتر ينقل قوة والرباط يمنع حركة.',
          en: 'The lower bone of the joint, where the ligaments and tendons coming down from the thigh end. The difference between tendon and ligament is not in the material but in the job: both are collagen, but a tendon transmits force while a ligament prevents movement.'
        }
      }
    ],
    desc: {
      ar: 'الوتر والرباط نسيجان متشابهان في المادة مختلفان في الوظيفة: كلاهما حبل من ألياف الكولاجين الأبيض المتوازية، لكن الوتر يصل عضلة بعظم فينقل قوة الانقباض، والرباط يصل عظما بعظم فيمنع المفصل من تجاوز حده. وفي هذه الصورة نصفان: على اليمين مفصل الركبة بأربطته الصليبية المتقاطعة وأربطته الجانبية، وعلى اليسار عضلة تضيق حتى تصير وترا ينغرس في العظم، ومعها مقطع مكبر يكشف أن الوتر بُني حزما داخل حزم.',
      en: 'Tendon and ligament are the same material put to different work: both are cords of white parallel collagen, but a tendon joins muscle to bone and carries the pull of contraction, while a ligament joins bone to bone and keeps a joint from going past its limit. This picture holds two halves: on the right a knee joint with its crossed cruciate ligaments and its collateral bands, and on the left a muscle narrowing into a tendon that sinks into bone, with a magnified inset revealing that the tendon is built as bundles within bundles.'
    },
    func: {
      ar: 'الوتر ينقل قوة العضلة إلى العظم عبر مسافة، وهذا ما يسمح بأن تكون العضلات الثقيلة قريبة من الجذع بينما تتحرك الأطراف الخفيفة السريعة بعيدا عنها؛ ولهذا أصابعك رشيقة وعضلاتها في ساعدك. والوتر يخزن طاقة أيضا: وتر أخيل يتمدد قليلا عند الخطوة ثم يرتد فيعيد جزءا من الطاقة، فيقل جهد المشي والجري. أما الرباط فيحرس المفصل: يسمح بالحركة في مداها الطبيعي ويشدّها عند حدها، ويحمل مستقبلات حسية تخبر الدماغ بوضع المفصل حتى في الظلام.',
      en: 'A tendon carries the force of a muscle to bone across a distance, which lets the heavy muscles sit near the trunk while the light, quick ends of the limbs move far away from them; that is why your fingers are nimble while their muscles are in your forearm. Tendons also store energy: the Achilles stretches a little with each step and springs back, returning part of that energy and making walking and running cheaper. A ligament, by contrast, guards the joint: it permits motion through its natural range and checks it at the limit, and it carries sensors that keep the brain informed of the joint position even in the dark.'
    },
    location: { ar: 'الأوتار عند طرفي كل عضلة هيكلية، والأربطة حول كل مفصل في الجسم', en: 'Tendons at both ends of every skeletal muscle, and ligaments around every joint in the body' },
    size: { ar: 'وتر أخيل أضخم وتر في الجسم، نحو ١٥ سنتيمترا طولا، ويحتمل قوة تتجاوز ٣٫٥ أضعاف وزن الجسم في الجري', en: 'The Achilles is the largest tendon in the body, some 15 cm long, and takes forces of more than 3.5 times body weight when running' },
    short: { ar: 'حبلان من نفس المادة: أحدهما ينقل القوة والآخر يمنع الحركة', en: 'Two cords of the same material: one carries force, the other prevents movement' },
    parts: [
      { ar: 'البطن العضلي', en: 'The muscle belly' },
      { ar: 'الوتر وحزم الكولاجين فيه', en: 'The tendon and its collagen bundles' },
      { ar: 'موضع ارتكاز الوتر في العظم', en: 'The insertion of the tendon into bone' },
      { ar: 'الرباط الواصل بين عظمين', en: 'The ligament joining bone to bone' }
    ],
    diseases: [
      { name: { ar: 'التهاب الوتر', en: 'Tendinitis' }, desc: { ar: 'ألم وتورم من الاستعمال المتكرر، شائع في الكتف والكوع والكعب، ويبطئ شفاءه ضعف تروية الوتر بالدم', en: 'Pain and swelling from repeated use, common at the shoulder, elbow and heel, and slow to heal because tendon blood supply is poor' } },
      { name: { ar: 'تمزق وتر أخيل', en: 'Achilles tendon rupture' }, desc: { ar: 'انقطاع مفاجئ يسمعه المصاب كطقّة، فلا يستطيع رفع كعبه، وغالبا يحتاج جراحة', en: 'A sudden snap the person often hears, after which the heel cannot be lifted; it usually needs surgery' } },
      { name: { ar: 'تمزق الرباط الصليبي الأمامي', en: 'ACL tear' }, desc: { ar: 'إصابة رياضية شائعة عند تغيير الاتجاه فجأة، تجعل الركبة غير مستقرة وتحتاج إعادة بناء غالبا', en: 'A common sporting injury on a sudden change of direction, leaving the knee unstable and often needing reconstruction' } },
      { name: { ar: 'التواء الكاحل', en: 'Ankle sprain' }, desc: { ar: 'شد أو تمزق جزئي لأربطة الكاحل الجانبية، أكثر إصابات الأربطة انتشارا على الإطلاق', en: 'Stretching or partial tearing of the outer ankle ligaments, by far the commonest ligament injury of all' } },
      { name: { ar: 'التهاب اللفافة الأخمصية', en: 'Plantar fasciitis' }, desc: { ar: 'ألم في أسفل الكعب من التهاب الشريط الليفي في باطن القدم، وأشده في أول خطوة بعد الاستيقاظ', en: 'Pain under the heel from inflammation of the fibrous band in the sole, worst on the first step after waking' } }
    ]
  }
]);

/* ---------- الفصيص الكبدي ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'liver-lobule', type: 'organ', system: 'organs',
    name: { ar: 'الفصيص الكبدي', en: 'The hepatic lobule' },
    img: 'img/liver-lobule.webp', imgBack: 'img/liver-lobule-back.webp', thumb: 'img/thumb-liver-lobule.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الجيبانيات وكريات الدم', en: 'Sinusoids and blood cells', x: 41, y: 36, side: 'left', go: 'blood',
        desc: {
          ar: 'قنوات دموية واسعة تجري بين صفائح الخلايا، وترى فيها كريات الدم الحمراء. جدارها مثقوب لا مصمت كجدار الشعيرات العادية، فيلامس الدم الخلايا الكبدية مباشرة بلا حاجز، وهذا ما يجعل التبادل بينهما سريعا جدا.',
          en: 'Wide blood channels running between the cell plates, with red blood cells visible inside them. Their wall is perforated rather than sealed like an ordinary capillary, so blood touches the liver cells directly with no barrier, which makes the exchange between them extremely fast.'
        }
      },
      {
        ar: 'صفائح الخلايا الكبدية', en: 'Plates of hepatocytes', x: 29, y: 46, side: 'left', go: 'liver',
        desc: {
          ar: 'الخلايا الكبدية مرصوصة في صفائح بسمك خلية او خليتين، تشع من المركز الى الاطراف كاشعة العجلة. هذا الترتيب يجعل كل خلية ملاصقة للدم من جهة وللقناة الصفراوية من جهة اخرى في وقت واحد.',
          en: 'Liver cells are stacked in plates one or two cells thick, radiating from the centre outward like the spokes of a wheel. This arrangement puts every cell in contact with blood on one side and with the bile channel on the other at the same time.'
        }
      },
      {
        ar: 'فرع الشريان الكبدي', en: 'Branch of the hepatic artery', x: 14, y: 54, side: 'left',
        desc: {
          ar: 'الوعاء الاحمر الصغير في الزاوية، ياتي بدم مؤكسج من القلب. يعطي الكبد نحو ربع دمه فقط لكنه يعطيه معظم اكسجينه.',
          en: 'The small red vessel at the corner, bringing oxygen-rich blood from the heart. It supplies only about a quarter of the blood the liver receives, yet it provides most of its oxygen.'
        }
      },
      {
        ar: 'فرع الوريد البابي', en: 'Branch of the portal vein', x: 14, y: 68, side: 'left',
        desc: {
          ar: 'الوعاء الاكبر الداكن، وهو الاهم في هذي الصورة. يحمل دما جمعه من الامعاء والمعدة والطحال، محملا بكل ما امتصه الجسم من الاكل. لا يذهب هذا الدم الى القلب مباشرة بل يمر على الكبد اولا ليفحص ويصفى، ولهذا يسمى الكبد بوابة الجسم.',
          en: 'The larger dark vessel, and the most telling one here. It carries blood gathered from the intestines, stomach and spleen, loaded with everything the body absorbed from a meal. That blood does not go straight to the heart but passes through the liver first to be checked and cleaned, which is why the liver is called the gateway of the body.'
        }
      },
      {
        ar: 'القناة الصفراوية', en: 'Bile duct', x: 19, y: 75, side: 'left', go: 'gallbladder',
        desc: {
          ar: 'القناة الخضراء في الزاوية. تحمل الصفراء التي تصنعها الخلايا الكبدية، وتسير في اتجاه معاكس لاتجاه الدم: الدم يدخل من الزوايا الى المركز، والصفراء تخرج من المركز الى الزوايا. طريقان في نسيج واحد يتقاطعان ولا يختلطان.',
          en: 'The green duct at the corner. It carries the bile the liver cells make, and it flows the opposite way to the blood: blood runs from the corners inward to the centre, while bile runs from the centre outward to the corners. Two routes through one tissue, crossing without ever mixing.'
        }
      },
      {
        ar: 'الوجه المقطوع من الفصيص', en: 'The cut face of the lobule', x: 36, y: 82, side: 'left',
        desc: {
          ar: 'الجانب المقطوع يظهر ان الفصيص ليس قرصا مسطحا بل عمود سداسي له ارتفاع، والصفائح والجيبانيات تمتد فيه من اعلى الى اسفل. الكبد كله مبني من نحو مئة الف عمود مثل هذا متلاصقة.',
          en: 'The cut side shows that a lobule is not a flat disc but a hexagonal column with height, the plates and sinusoids running through it from top to bottom. The whole liver is built of roughly a hundred thousand such columns packed together.'
        }
      },
      {
        ar: 'الشكل السداسي للفصيص', en: 'The hexagonal shape of the lobule', x: 79, y: 28, side: 'right',
        desc: {
          ar: 'الفصيص وحدة سداسية الاضلاع، والسداسي شكل يملا المساحة بلا فراغ كخلايا النحل، فتتراص الفصيصات متجاورة بلا هدر. وفي كل زاوية من الزوايا الست يقع ثالوث بابي.',
          en: 'The lobule is a six-sided unit, and a hexagon fills space without gaps, like a honeycomb, so lobules pack side by side with nothing wasted. At each of the six corners sits a portal triad.'
        }
      },
      {
        ar: 'الوريد المركزي', en: 'Central vein', x: 51, y: 43, side: 'right', go: 'vessel-types',
        desc: {
          ar: 'الفوهة في قلب الفصيص. اليها يصب كل الدم بعد ان يمر بين الصفائح ويعالج، ومنها يخرج الى الوريد الكبدي فالوريد الاجوف فالقلب. اتجاه الجريان دائما من المحيط الى المركز.',
          en: 'The opening at the heart of the lobule. All the blood drains into it after passing between the plates and being processed, and from here it leaves for the hepatic vein, the vena cava and the heart. The direction of flow is always from the rim inward to the centre.'
        }
      },
      {
        ar: 'خلية كوبفر', en: 'Kupffer cell', x: 74, y: 49, side: 'right',
        desc: {
          ar: 'خلية بلعمية كبيرة مبقعة تجلس في جدار الجيبانيات وتلتهم ما يمر بها: بكتيريا قادمة من الامعاء، وكريات حمراء هرمة، وفضلات. هي حرس الكبد الثابت، واكبر تجمع للخلايا البلعمية في الجسم كله.',
          en: 'A large mottled scavenger cell that sits in the wall of the sinusoid and eats what passes: bacteria arriving from the gut, worn-out red cells and debris. It is the standing garrison of the liver, and the largest gathering of such cells anywhere in the body.'
        }
      },
      {
        ar: 'الثالوث البابي', en: 'Portal triad', x: 85, y: 62, side: 'right',
        desc: {
          ar: 'ثلاثة انابيب مجتمعة في كل زاوية من زوايا السداسي: فرع الشريان الكبدي، وفرع الوريد البابي، وقناة صفراوية. الاثنان يدخلان الدم والثالثة تخرج الصفراء، ووجودها معا في كل زاوية هو علامة الفصيص الكبدي التي تعرف بها تحت المجهر.',
          en: 'Three tubes gathered at every corner of the hexagon: a branch of the hepatic artery, a branch of the portal vein and a bile duct. Two bring blood in and the third takes bile out, and finding them together at each corner is the signature by which a hepatic lobule is recognised under the microscope.'
        }
      }
    ],
    desc: {
      ar: 'الفصيص هو وحدة بناء الكبد، والكبد كله نحو مئة ألف فصيص متراصة. شكله عمود سداسي الأضلاع، في وسطه وريد مركزي، وتشع منه إلى الخارج صفائح من الخلايا الكبدية كأشعة العجلة، وبين الصفائح قنوات دموية واسعة مثقوبة الجدار تسمى الجيبانيات. وفي كل زاوية من الزوايا الست يجلس ثالوث بابي: فرع من الشريان الكبدي، وفرع من الوريد البابي، وقناة صفراوية. والحركة داخل الفصيص في اتجاهين متعاكسين في وقت واحد: الدم يدخل من الزوايا ويسير نحو المركز، والصفراء تخرج من المركز وتسير نحو الزوايا.',
      en: 'The lobule is the building block of the liver, and the whole organ is some hundred thousand of them packed together. It is a six-sided column with a central vein in the middle, plates of liver cells radiating outward from it like spokes, and between the plates wide blood channels with perforated walls called sinusoids. At each of the six corners sits a portal triad: a branch of the hepatic artery, a branch of the portal vein and a bile duct. Two currents move through the lobule at once and in opposite directions: blood enters at the corners and travels inward, while bile leaves the centre and travels outward.'
    },
    func: {
      ar: 'تصفية كل ما يمتصه الجهاز الهضمي قبل أن يصل إلى بقية الجسم: الدم القادم من الأمعاء عبر الوريد البابي يمر بين الصفائح ببطء فتلتقط الخلايا الكبدية منه السكر لتخزنه، وتفكك السموم والأدوية والكحول، وتصنع بروتينات الدم وعوامل التخثر. وفي الوقت نفسه تصنع الخلايا الصفراء وتدفعها في قنيّات دقيقة بينها تسير عكس اتجاه الدم إلى القنوات الصفراوية في الزوايا. وخلايا كوبفر في جدران الجيبانيات تلتهم البكتيريا القادمة من الأمعاء والكريات الحمراء الهرمة.',
      en: 'To filter everything the gut absorbs before it reaches the rest of the body: blood arriving from the intestines through the portal vein passes slowly between the plates, and the liver cells take sugar from it to store, break down toxins, drugs and alcohol, and build blood proteins and clotting factors. At the same time those cells make bile and push it into fine canals between them that run against the blood flow, out to the bile ducts at the corners. Kupffer cells in the sinusoid walls swallow bacteria coming up from the gut and worn-out red blood cells.'
    },
    location: { ar: 'داخل نسيج الكبد في أعلى البطن يمينا تحت الحجاب الحاجز', en: 'Within the liver tissue in the upper right abdomen, beneath the diaphragm' },
    size: { ar: 'الفصيص الواحد نحو ١ إلى ٢ ملّيمتر عرضا، والكبد يضم نحو ١٠٠ ألف فصيص وأكثر من ٢٥٠ مليار خلية كبدية', en: 'One lobule is about 1 to 2 mm across; the liver holds some 100,000 of them and more than 250 billion liver cells' },
    short: { ar: 'سداسي صغير يدخله الدم من الزوايا وتخرج منه الصفراء في الاتجاه المعاكس', en: 'A small hexagon: blood enters at the corners, bile leaves the other way' },
    parts: [
      { ar: 'الوريد المركزي', en: 'The central vein' },
      { ar: 'صفائح الخلايا الكبدية', en: 'The plates of hepatocytes' },
      { ar: 'الجيبانيات وخلايا كوبفر', en: 'The sinusoids and their Kupffer cells' },
      { ar: 'الثالوث البابي في كل زاوية', en: 'The portal triad at each corner' }
    ],
    diseases: [
      { name: { ar: 'الكبد الدهني', en: 'Fatty liver' }, desc: { ar: 'تراكم الدهون داخل الخلايا الكبدية، شائع جدا مع زيادة الوزن والسكري، وبلا أعراض في أوله', en: 'Fat piling up inside the liver cells, very common with excess weight and diabetes, and silent in its early stage' } },
      { name: { ar: 'تشمع الكبد', en: 'Cirrhosis' }, desc: { ar: 'تليّف يخرّب بنية الفصيصات ويسدّ مجرى الدم فيها، فيرتفع الضغط في الوريد البابي', en: 'Scarring that wrecks the lobule structure and blocks blood through it, raising the pressure in the portal vein' } },
      { name: { ar: 'التهاب الكبد الفيروسي', en: 'Viral hepatitis' }, desc: { ar: 'التهاب يصيب الخلايا الكبدية بفيروسات A أو B أو C، وبعضه يزمن ويقود إلى التشمع', en: 'Inflammation of the liver cells by hepatitis A, B or C; some forms become chronic and lead on to cirrhosis' } },
      { name: { ar: 'اليرقان الانسدادي', en: 'Obstructive jaundice' }, desc: { ar: 'انسداد مجرى الصفراء بحصاة أو ورم، فترتد الصفراء إلى الدم ويصفرّ الجلد والعينان', en: 'A stone or tumour blocking the bile route, so bile backs up into the blood and the skin and eyes turn yellow' } },
      { name: { ar: 'ارتفاع ضغط الوريد البابي', en: 'Portal hypertension' }, desc: { ar: 'صعوبة مرور الدم عبر كبد متليّف، فيتضخم الطحال وتتمدد أوردة المريء وقد تنزف', en: 'Blood struggles through a scarred liver, so the spleen swells and the veins of the oesophagus widen and may bleed' } }
    ]
  }
]);

/* ---------- الدورة الدموية (الدورتان الرئوية والجسمية) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'circulation', type: 'organ', system: 'vessels',
    name: { ar: 'الدورة الدموية', en: 'The circulation' },
    img: 'img/circulation.webp', imgBack: 'img/circulation-back.webp', thumb: 'img/thumb-circulation.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'أوعية الرأس والدماغ', en: 'Vessels of the head and brain', x: 46, y: 10, side: 'left', go: 'brain',
        desc: {
          ar: 'نهاية اطول صعود في الدورة الجسمية. الدم يصل الى هنا ضد الجاذبية، والدماغ لا يحتمل انقطاعه اكثر من ثوان معدودة، ولهذا له شبكة دائرية في قاعدته تتيح للدم ان ياتيه من اكثر من طريق اذا انسد احدها.',
          en: 'The end of the longest climb in the systemic circuit. Blood reaches here against gravity, and the brain cannot tolerate its interruption for more than a few seconds, which is why a ring of vessels at its base lets blood arrive by more than one road if one is blocked.'
        }
      },
      {
        ar: 'الشريان السباتي والوريد الوداجي', en: 'Carotid artery and jugular vein', x: 47, y: 26, side: 'left',
        desc: {
          ar: 'الطريق الصاعد والنازل في العنق جنبا الى جنب: الشريان الاحمر يحمل الدم المؤكسج صاعدا الى الراس، والوريد الازرق يعيده نازلا. الاسهم على الصورة تبين الاتجاهين متعاكسين في وعاءين متجاورين.',
          en: 'The up and down routes of the neck side by side: the red artery carrying oxygenated blood up to the head, the blue vein bringing it back down. The arrows on the picture show the two directions running opposite in neighbouring vessels.'
        }
      },
      {
        ar: 'الرئة والدورة الرئوية', en: 'The lung and the pulmonary circuit', x: 40, y: 44, side: 'left', go: 'lungs',
        desc: {
          ar: 'هنا تنتهي الدورة الصغرى. الدم الفقير بالاكسجين يخرج من الجانب الايمن للقلب الى الرئتين، ويسلم ثاني اكسيد الكربون وياخذ الاكسجين عند الحويصلات، ثم يعود الى الجانب الايسر للقلب. المسافة قصيرة والضغط فيها منخفض، ولهذا جدار البطين الايمن ارق.',
          en: 'This is where the lesser circuit ends. Oxygen-poor blood leaves the right side of the heart for the lungs, gives up carbon dioxide and takes on oxygen at the air sacs, then returns to the left side of the heart. The distance is short and the pressure low, which is why the right ventricle wall is the thinner one.'
        }
      },
      {
        ar: 'شرايين وأوردة الذراع', en: 'Arteries and veins of the arm', x: 24, y: 52, side: 'left',
        desc: {
          ar: 'الشرايين تسير عميقة محمية بين العضلات، والاوردة قريبة من السطح ولهذا تراها تحت جلد ساعدك. اوردة الاطراف فيها صمامات صغيرة تمنع رجوع الدم الى الاسفل، وانقباض العضلات حولها هو الذي يعصرها فيصعد الدم.',
          en: 'Arteries run deep and sheltered between the muscles, while veins lie near the surface, which is why you can see them under the skin of your forearm. The veins of the limbs carry small valves that stop blood falling back, and it is the squeeze of the muscles around them that drives it upward.'
        }
      },
      {
        ar: 'الكبد', en: 'The liver', x: 42, y: 58, side: 'left', go: 'liver',
        desc: {
          ar: 'محطة تفتيش على الطريق. الدم العائد من الامعاء لا يمضي الى القلب مباشرة بل يدخل الكبد اولا عبر الوريد البابي ليصفى، وهذا استثناء في الدورة الجسمية: شبكة شعرية ثانية قبل العودة الى القلب.',
          en: 'An inspection post along the way. Blood returning from the intestines does not go straight to the heart but enters the liver first through the portal vein to be filtered, an exception in the systemic circuit: a second capillary bed before the return to the heart.'
        }
      },
      {
        ar: 'الشبكة الشعرية في الأمعاء', en: 'Capillary network of the intestines', x: 46, y: 73, side: 'left', go: 'vessel-types',
        desc: {
          ar: 'حيث يتم العمل الحقيقي. الشرايين والاوردة انابيب نقل فقط، اما التبادل فيحدث في الشعيرات: جدارها بسمك خلية واحدة فيمر منها الغذاء والاكسجين وتدخل اليها الفضلات. لو صففت شعيرات الجسم كلها لبلغ طولها نحو مئة الف كيلومتر.',
          en: 'Where the real work happens. Arteries and veins are only pipes; the exchange takes place in the capillaries, whose wall is a single cell thick, so food and oxygen pass out and waste passes in. Laid end to end, all the capillaries of the body would stretch some hundred thousand kilometres.'
        }
      },
      {
        ar: 'أوعية اليد', en: 'Vessels of the hand', x: 14, y: 88, side: 'left',
        desc: {
          ar: 'نهاية الطريق في الطرف. الاوعية هنا تضيق وتتسع باستمرار لضبط حرارة الجسم: في الحر تتسع فتحمر اليد وتفقد الحرارة، وفي البرد تضيق فتشحب وتبرد الاصابع لتحفظ حرارة الجذع.',
          en: 'The end of the road in the limb. The vessels here constantly narrow and widen to manage body temperature: in heat they widen, the hand reddens and heat is shed; in cold they narrow, the hand pales and the fingers chill so the trunk can stay warm.'
        }
      },
      {
        ar: 'قوس الأبهر', en: 'The aortic arch', x: 55, y: 36, side: 'right', go: 'vessels',
        desc: {
          ar: 'اضخم شريان في الجسم يخرج من البطين الايسر ثم ينحني كعصا المشي. من قوسه تخرج فروع الراس والذراعين، ثم ينزل خلف القلب ليغذي الجذع والبطن والساقين. جداره سميك ومطاطي يتمدد مع كل نبضة ثم يرتد، فيحول ضخ القلب المتقطع الى جريان متصل.',
          en: 'The largest artery in the body, leaving the left ventricle and then bending like a walking stick. From its arch spring the branches to the head and arms, before it runs down behind the heart to feed the trunk, abdomen and legs. Its wall is thick and elastic, swelling with every beat and springing back, so it turns the intermittent pumping of the heart into a steady flow.'
        }
      },
      {
        ar: 'الشريان الرئوي والوريد الرئوي', en: 'Pulmonary artery and pulmonary vein', x: 60, y: 43, side: 'right', go: 'alveoli',
        desc: {
          ar: 'هنا الاستثناء الذي يصحح فهما شائعا خاطئا. القاعدة ليست ان الشريان يحمل دما مؤكسجا، بل ان الشريان يخرج من القلب والوريد يدخل اليه. والشريان الرئوي شريان يحمل دما فقيرا بالاكسجين لانه ذاهب الى الرئة لياخذه، والوريد الرئوي وريد يحمل دما غنيا بالاكسجين لانه عائد منها وقد اخذه. هما الوحيدان الذين ينعكس فيهما لون الدم عن المعتاد.',
          en: 'Here is the exception that corrects a very common misunderstanding. The rule is not that arteries carry oxygenated blood; it is that arteries leave the heart and veins enter it. The pulmonary artery is an artery carrying oxygen-poor blood, because it is on its way to the lung to collect it, and the pulmonary vein is a vein carrying oxygen-rich blood, because it is coming back with it. They are the only two in which the usual colouring is reversed.'
        }
      },
      {
        ar: 'القلب', en: 'The heart', x: 53, y: 50, side: 'right', go: 'heart',
        desc: {
          ar: 'مضختان في جسم واحد لا مضخة واحدة. النصف الايمن يستقبل الدم العائد من الجسم ويدفعه الى الرئتين، والنصف الايسر يستقبله من الرئتين ويدفعه الى الجسم كله. الجدار الفاصل بينهما يمنع اختلاط الدمين، ولهذا يبقى الدم الذاهب للجسم مؤكسجا نقيا.',
          en: 'Two pumps in one body, not one. The right half receives blood returning from the body and drives it to the lungs; the left half receives it from the lungs and drives it to the whole body. The wall between them keeps the two bloods from mixing, which is why what goes out to the body stays purely oxygenated.'
        }
      },
      {
        ar: 'الأبهر النازل والوريد الأجوف', en: 'Descending aorta and vena cava', x: 51, y: 62, side: 'right',
        desc: {
          ar: 'الطريقان الكبيران في البطن جنبا الى جنب: الاحمر نازل يوزع، والازرق صاعد يجمع. لاحظ الاسهم عليهما، فهي تبين ان الاتجاهين متعاكسان في انبوبين متلاصقين.',
          en: 'The two great routes of the abdomen side by side: the red one running down to distribute, the blue one running up to collect. Note the arrows on them, showing two opposite directions in tubes lying against each other.'
        }
      },
      {
        ar: 'الكلية', en: 'The kidney', x: 58, y: 68, side: 'right', go: 'kidneys',
        desc: {
          ar: 'محطة تنقية اخرى على الدورة الجسمية. الكلى تاخذ نحو خمس ما يضخه القلب رغم صغر حجمها، لان عملها ترشيح الدم كله: يمر دم الجسم كامل عليهما نحو ٤٠ مرة كل يوم.',
          en: 'Another cleaning station on the systemic circuit. The kidneys take about a fifth of everything the heart pumps despite their small size, because their work is to filter all the blood: the entire volume of the body passes through them some forty times a day.'
        }
      },
      {
        ar: 'أوعية الساق', en: 'Vessels of the leg', x: 57, y: 93, side: 'right',
        desc: {
          ar: 'ابعد نقطة عن القلب. صعود الدم من هنا هو اصعب رحلة في الجسم لانه ضد الجاذبية بالكامل، ويعتمد على صمامات الاوردة وعلى مضخة عضلات الساق. ضعف هذي الصمامات هو سبب دوالي الساقين.',
          en: 'The point furthest from the heart. The climb back from here is the hardest journey in the body because it is entirely against gravity, relying on the valves in the veins and on the pump of the calf muscles. When those valves weaken, varicose veins are the result.'
        }
      }
    ],
    desc: {
      ar: 'الدورة الدموية ليست حلقة واحدة بل حلقتان متصلتان يجمعهما قلب واحد. الدورة الرئوية الصغرى: من الجانب الأيمن للقلب إلى الرئتين ثم إلى الجانب الأيسر، وغرضها تحميل الدم بالأكسجين. والدورة الجسمية الكبرى: من الجانب الأيسر إلى الرأس والذراعين والأعضاء والساقين ثم العودة إلى الجانب الأيمن، وغرضها توزيع الأكسجين والغذاء وجمع الفضلات. في الصورة رُسمت الأوعية الحمراء للدم المؤكسج والزرقاء لغير المؤكسج مع أسهم تبيّن اتجاه الجريان، وأهم ما فيها أنها تشرح حركة لا شكلا.',
      en: 'The circulation is not one loop but two joined loops sharing a single heart. The pulmonary or lesser circuit runs from the right side of the heart to the lungs and back to the left side, and its purpose is to load the blood with oxygen. The systemic or greater circuit runs from the left side out to the head, arms, organs and legs and back to the right side, and its purpose is to deliver oxygen and food and gather waste. In the picture the vessels are drawn red for oxygenated blood and blue for oxygen-poor blood, with arrows showing the direction of flow, and what it really explains is a movement rather than a shape.'
    },
    func: {
      ar: 'نقل الأكسجين والغذاء إلى كل خلية وحمل ثاني أكسيد الكربون والفضلات بعيدا عنها، وتوزيع الهرمونات وخلايا المناعة والحرارة على الجسم كله. والقاعدة التي تُفهم بها الصورة كلها بسيطة: الشريان هو ما يخرج من القلب والوريد هو ما يدخل إليه، بغض النظر عن لون الدم فيه. ولهذا فالشريان الرئوي شريان يحمل دما غير مؤكسج، والوريد الرئوي وريد يحمل دما مؤكسجا، وهما الاستثناء الوحيد. ويمر الدم بمحطتين خاصتين في طريقه: الكبد الذي يفتّش كل ما جاء من الأمعاء، والكلى اللتان ترشّحانه.',
      en: 'To carry oxygen and food to every cell and take carbon dioxide and waste away from it, and to spread hormones, immune cells and heat through the whole body. The rule that makes the entire picture readable is simple: an artery is what leaves the heart and a vein is what enters it, whatever the colour of the blood inside. That is why the pulmonary artery is an artery carrying oxygen-poor blood and the pulmonary vein is a vein carrying oxygen-rich blood; they are the sole exception. Along the way the blood passes two special stations: the liver, which inspects everything arriving from the gut, and the kidneys, which filter it.'
    },
    location: { ar: 'في كل موضع من الجسم؛ القلب في وسط الصدر مائلا إلى اليسار، والأوعية تمتد منه إلى أطراف الأصابع', en: 'Everywhere in the body; the heart in the middle of the chest tilted to the left, its vessels reaching to the very tips of the fingers' },
    size: { ar: 'مجموع طول الأوعية نحو ١٠٠ ألف كيلومتر، والقلب يضخ نحو ٥ لترات في الدقيقة، وتكفي الدورة الكاملة نحو دقيقة واحدة', en: 'The vessels total roughly 100,000 km in length, the heart pumps about 5 litres a minute, and one complete circuit takes about a minute' },
    short: { ar: 'حلقتان وقلب واحد: واحدة إلى الرئتين وواحدة إلى الجسم كله', en: 'Two loops and one heart: one to the lungs, one to the whole body' },
    parts: [
      { ar: 'الدورة الرئوية بين القلب والرئتين', en: 'The pulmonary circuit between heart and lungs' },
      { ar: 'الدورة الجسمية بين القلب وبقية الجسم', en: 'The systemic circuit between heart and body' },
      { ar: 'الشرايين الخارجة من القلب', en: 'The arteries leaving the heart' },
      { ar: 'الأوردة والشعيرات العائدة إليه', en: 'The veins and capillaries returning to it' }
    ],
    diseases: [
      { name: { ar: 'تصلب الشرايين', en: 'Atherosclerosis' }, desc: { ar: 'ترسب الدهون في جدار الشريان فيضيق مجراه ويتصلب، وهو أصل الجلطة القلبية والدماغية', en: 'Fat laid down in the artery wall narrows and stiffens it; this is the root of both heart attack and stroke' } },
      { name: { ar: 'ارتفاع ضغط الدم', en: 'High blood pressure' }, desc: { ar: 'ضغط دائم مرتفع يرهق القلب والأوعية والكلى، وغالبا بلا أعراض حتى يقع الضرر', en: 'Persistently raised pressure that wears out the heart, vessels and kidneys, usually without symptoms until damage is done' } },
      { name: { ar: 'دوالي الساقين', en: 'Varicose veins' }, desc: { ar: 'ضعف صمامات أوردة الساق فيرتد الدم ويتجمع، فتبرز الأوردة متعرجة تحت الجلد', en: 'The valves in the leg veins weaken, blood falls back and pools, and the veins bulge and twist under the skin' } },
      { name: { ar: 'الجلطة الوريدية العميقة', en: 'Deep vein thrombosis' }, desc: { ar: 'تكوّن خثرة في وريد عميق بالساق بعد جلوس طويل، وخطرها أن تنتقل إلى الرئة', en: 'A clot forming in a deep leg vein after long sitting; the danger is that it travels to the lung' } },
      { name: { ar: 'قصور القلب', en: 'Heart failure' }, desc: { ar: 'ضعف قدرة القلب على الضخ فيتراكم السائل في الرئتين والساقين ويأتي ضيق النفس', en: 'The heart pumps too weakly, so fluid gathers in the lungs and legs and breathlessness follows' } }
    ]
  }
]);

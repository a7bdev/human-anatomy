
/* ---------- الرحم الحامل والمشيمة (مقطع سهمي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'pregnancy', type: 'organ', system: 'reproductive',
    name: { ar: 'الرحم الحامل والمشيمة', en: 'Pregnant uterus and placenta' },
    img: 'img/pregnancy.png', imgBack: 'img/pregnancy-back.png', thumb: 'img/thumb-pregnancy.png',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الكيس الأمنيوسي', en: 'Amniotic sac', x: 27, y: 13, side: 'left',
        desc: {
          ar: 'غشاء شفاف رقيق كالبالون يحيط بالجنين من كل جهة ويحبس حوله الماء. يبقى مغلقا طوال الحمل، وانفجاره هو ما يسميه الناس نزول الماء عند بداية المخاض.',
          en: 'A thin transparent membrane, like a balloon, that wraps the baby on every side and holds the water around it. It stays closed through the pregnancy; its rupture is what people call the waters breaking at the start of labour.'
        }
      },
      {
        ar: 'المشيمة', en: 'Placenta', x: 52, y: 14, side: 'right',
        desc: {
          ar: 'قرص لحمي غني بالاوعية يلتصق بجدار الرحم، وهو رئة الجنين وامعاؤه وكليته في ان واحد. دم الام ودم الجنين لا يختلطان فيه ابدا، بل يتلامسان عبر غشاء رقيق جدا يعبره الاكسجين والغذاء الى الجنين وترجع منه الفضلات.',
          en: 'A fleshy, vessel-rich disc fixed to the wall of the womb: the baby’s lung, gut and kidney all at once. The mother’s blood and the baby’s blood never mix in it; they meet across a very thin membrane through which oxygen and food pass in and waste passes back.'
        }
      },
      {
        ar: 'الفقرات القطنية', en: 'Lumbar vertebrae', x: 74, y: 25, side: 'right', go: 'vertebra-disc',
        desc: {
          ar: 'عظام اسفل الظهر خلف الرحم، ويظهر نسيجها الاسفنجي في المقطع. مع كبر البطن يميل الجسم للامام فتزيد قوسة اسفل الظهر، ومن هنا الم الظهر المشهور في اواخر الحمل.',
          en: 'The bones of the lower back behind the womb, their spongy interior visible in the section. As the belly grows the body tips forward and the curve of the lower back deepens, which is where the familiar late-pregnancy backache comes from.'
        }
      },
      {
        ar: 'الحبل السري', en: 'Umbilical cord', x: 50, y: 34, side: 'right',
        desc: {
          ar: 'حبل ملتف يصل الجنين بالمشيمة، فيه ثلاثة اوعية: شريانان يحملان الدم المستهلك من الجنين الى المشيمة، ووريد واحد يرجع بالدم المحمل بالاكسجين والغذاء. التفافه اللولبي يحميه من الانثناء والانسداد.',
          en: 'A twisted rope joining the baby to the placenta. It carries three vessels: two arteries taking used blood from the baby to the placenta, and one vein bringing back blood loaded with oxygen and food. Its spiral twist keeps it from kinking shut.'
        }
      },
      {
        ar: 'الجنين', en: 'Fetus', x: 33, y: 35, side: 'left',
        desc: {
          ar: 'الجنين ملتف على نفسه في اقل حيز ممكن، ورأسه الى الاسفل استعدادا للولادة. في هذا الوضع يعوم في السائل فلا يضغط وزنه على اي جزء منه، ويستطيع ان يتحرك ويتقلب.',
          en: 'The baby is curled into the smallest possible space, head down and ready for birth. Floating in the fluid, its own weight presses on nothing, and it can still turn and move.'
        }
      },
      {
        ar: 'السائل الأمنيوسي', en: 'Amniotic fluid', x: 55, y: 47, side: 'right',
        desc: {
          ar: 'ماء يحيط بالجنين فيمتص الصدمات، ويثبت حرارته، ويمنع التصاق جلده بالغشاء، ويعطيه مساحة يمد فيها اطرافه فتنمو مفاصله وعضلاته. الجنين يبلعه ويتبول فيه، فيتجدد باستمرار.',
          en: 'The water around the baby cushions knocks, holds its temperature steady, keeps its skin from sticking to the membrane, and gives it room to stretch so its joints and muscles develop. The baby swallows it and passes urine into it, so it is renewed all the time.'
        }
      },
      {
        ar: 'جدار البطن والدهن تحت الجلد', en: 'Abdominal wall and subcutaneous fat', x: 12, y: 50, side: 'left',
        desc: {
          ar: 'طبقات الجلد والدهن الاصفر وعضلات البطن امام الرحم. تتمدد كلها مع كبر الحمل، وتمدد الجلد السريع هو سبب خطوط الحمل الفضية.',
          en: 'The skin, the yellow fat and the abdominal muscles in front of the womb. All of them stretch as the pregnancy grows, and it is the rapid stretching of the skin that leaves the silvery stretch marks.'
        }
      },
      {
        ar: 'المستقيم', en: 'Rectum', x: 79, y: 55, side: 'right', go: 'anorectal',
        desc: {
          ar: 'اخر الامعاء الغليظة خلف الرحم مباشرة. الرحم المتضخم يضغط عليه ويبطئ حركة الامعاء، ولهذا يكثر الامساك والبواسير في الحمل.',
          en: 'The last part of the large bowel, lying directly behind the womb. The enlarged uterus presses on it and slows the bowel, which is why constipation and piles are common in pregnancy.'
        }
      },
      {
        ar: 'عضلة الرحم (الميومتريوم)', en: 'Myometrium', x: 48, y: 63, side: 'left', go: 'female-reproductive',
        desc: {
          ar: 'جدار الرحم العضلي السميك، والياف عضلاته متشابكة في كل الاتجاهات. هو اقوى عضلة في جسم المرأة: يتمدد حتى يسع طفلا كاملا، ثم ينقبض في المخاض ليدفعه للخارج، وبعد الولادة ينكمش على الاوعية فيوقف النزف.',
          en: 'The thick muscular wall of the womb, its fibres interwoven in every direction. It is the strongest muscle in a woman’s body: it stretches to hold a whole baby, contracts in labour to push it out, then clamps down on the vessels afterwards to stop the bleeding.'
        }
      },
      {
        ar: 'عنق الرحم والسدادة المخاطية', en: 'Cervix and mucus plug', x: 60, y: 70, side: 'right',
        desc: {
          ar: 'فوهة الرحم السفلى، وتبقى مغلقة بسدادة مخاطية سميكة تسد الطريق امام الجراثيم طوال الحمل. عند قرب الولادة ترق وتقصر وتتسع حتى عشرة سنتيمترات، وتسقط السدادة.',
          en: 'The lower mouth of the womb, kept shut through pregnancy by a thick plug of mucus that bars the way to germs. Near birth it thins, shortens and opens to about ten centimetres, and the plug comes away.'
        }
      },
      {
        ar: 'المثانة', en: 'Urinary bladder', x: 42, y: 71, side: 'left', go: 'bladder',
        desc: {
          ar: 'كيس البول امام الرحم. الرحم الحامل يجثم فوقها فيقل ما تتسع له، ولهذا تكثر الحاجة للتبول في اول الحمل واخره.',
          en: 'The bag that holds urine, sitting in front of the womb. The pregnant uterus rests on top of it and reduces what it can hold, which is why the need to pass water is so frequent early and late in pregnancy.'
        }
      },
      {
        ar: 'عظم العانة', en: 'Pubic bone', x: 32, y: 78, side: 'left', go: 'skeleton',
        desc: {
          ar: 'مقدمة حلقة الحوض العظمية، ويظهر نسيجها الاسفنجي هنا. المفصل بين عظمي العانة يلين في الحمل بفعل الهرمونات ليتسع الحوض قليلا عند الولادة، وهذا اللين نفسه سبب الم عظم العانة عند بعض الحوامل.',
          en: 'The front of the bony ring of the pelvis, its spongy interior shown here. The joint between the two pubic bones softens under pregnancy hormones so the pelvis can widen a little for birth, and that same softening is what makes the pubic bone ache in some women.'
        }
      },
      {
        ar: 'المهبل', en: 'Vagina', x: 55, y: 83, side: 'right',
        desc: {
          ar: 'قناة عضلية مطوية جدارها بثنيات عرضية تسمح لها بالاتساع اتساعا كبيرا، وهي طريق الولادة الذي يمر منه الطفل بعد اتساع عنق الرحم.',
          en: 'A muscular canal whose wall is thrown into cross folds that let it widen a great deal. It is the birth canal through which the baby passes once the cervix has opened.'
        }
      }
    ],
    desc: {
      ar: 'في الحمل يتحول الرحم من عضو بحجم حبة الكمثرى إلى كيس عضلي يملأ البطن. يستقر الجنين داخل الكيس الأمنيوسي عائما في مائه، ويتصل بالمشيمة الملتصقة بجدار الرحم عبر الحبل السري. المشيمة هي نقطة اللقاء بين دم الأم ودم الجنين من غير أن يختلطا، ومنها يأخذ الجنين الأكسجين والغذاء ويطرح الفضلات. وفي المقطع يظهر ازدحام الحوض: المثانة أمام الرحم، والمستقيم والعمود الفقري خلفه، وعظم العانة أسفل الأمام.',
      en: 'In pregnancy the womb turns from an organ the size of a pear into a muscular sac that fills the abdomen. The baby lies inside the amniotic sac, floating in its water, and is joined by the umbilical cord to the placenta fixed on the uterine wall. The placenta is where the mother’s blood and the baby’s blood meet without mixing; from it the baby takes oxygen and food and gives back waste. The section also shows how crowded the pelvis becomes: the bladder in front of the womb, the rectum and spine behind it, and the pubic bone below and in front.'
    },
    func: {
      ar: 'المشيمة تعمل كغشاء تبادل لا كأنبوب: الأوعية الدقيقة للجنين تغوص في بحيرات من دم الأم، فيعبر الأكسجين والسكر والأحماض الأمينية والأجسام المضادة إلى الجنين، ويعبر ثاني أكسيد الكربون واليوريا في الاتجاه المعاكس — والدمان لا يلتقيان. وهي في الوقت نفسه غدة صماء تفرز هرمونات تثبت الحمل وتوقف الدورة الشهرية وتهيئ الثدي للرضاعة. وهي حاجز انتقائي: تحجب كثيرا من الجراثيم والجزيئات الكبيرة، لكنها تمرر الكحول والنيكوتين وكثيرا من الأدوية والفيروسات الصغيرة، ولذلك يُحسب كل ما تتناوله الأم. أما الرحم فيتمدد ليحتوي الجنين، ثم ينقبض في المخاض ليدفعه، ثم ينكمش بعد الولادة على أوعيته فيغلق مكان انفصال المشيمة ويمنع النزف.',
      en: 'The placenta works as an exchange membrane, not a pipe: the baby’s tiny vessels dip into lakes of maternal blood, so oxygen, sugar, amino acids and antibodies cross to the baby while carbon dioxide and urea cross the other way, and the two bloods never meet. At the same time it is an endocrine gland, releasing hormones that hold the pregnancy, halt the monthly cycle and prepare the breast for milk. It is also a selective barrier: it blocks many germs and large molecules, yet lets alcohol, nicotine, many medicines and small viruses through, which is why everything the mother takes counts. The uterus itself stretches to hold the baby, contracts in labour to drive it out, then clamps down on its own vessels afterwards to seal the place where the placenta separated and prevent bleeding.'
    },
    location: { ar: 'في الحوض ثم البطن، بين المثانة أماما والمستقيم والعمود الفقري خلفا، وتصل قمة الرحم إلى أسفل القفص الصدري في أواخر الحمل', en: 'In the pelvis and then the abdomen, between the bladder in front and the rectum and spine behind, the top of the womb reaching the lower ribs late in pregnancy' },
    size: { ar: 'الرحم من نحو ٧ سم ووزن ٦٠ غراما قبل الحمل إلى نحو ٣٥ سم ووزن ١ كيلوغرام عند الولادة، والمشيمة قرص قطره نحو ٢٢ سم ووزنه نحو ٥٠٠ غرام، والحبل السري بطول ٥٠ إلى ٦٠ سم', en: 'The womb grows from about 7 cm and 60 g before pregnancy to about 35 cm and 1 kg at term; the placenta is a disc some 22 cm across weighing about 500 g, and the cord is 50 to 60 cm long' },
    short: { ar: 'المشيمة تبادل بين دمين لا يلتقيان أبدا', en: 'The placenta trades between two bloods that never meet' },
    parts: [
      { ar: 'المشيمة وأوعيتها', en: 'The placenta and its vessels' },
      { ar: 'الكيس الأمنيوسي وسائله', en: 'The amniotic sac and its fluid' },
      { ar: 'الحبل السري بأوعيته الثلاثة', en: 'The umbilical cord with its three vessels' },
      { ar: 'عضلة الرحم وعنقه', en: 'The uterine muscle and the cervix' }
    ],
    diseases: [
      { name: { ar: 'المشيمة المنزاحة', en: 'Placenta praevia' }, desc: { ar: 'تلتصق المشيمة في أسفل الرحم فتغطي فوهة عنقه وتسد طريق الولادة وتسبب نزفا بلا ألم', en: 'The placenta implants low and covers the mouth of the cervix, blocking the birth canal and causing painless bleeding' } },
      { name: { ar: 'انفصال المشيمة المبكر', en: 'Placental abruption' }, desc: { ar: 'تنفصل المشيمة عن جدار الرحم قبل ولادة الطفل، فينقطع عنه الأكسجين وتنزف الأم — حالة طارئة', en: 'The placenta peels off the uterine wall before the baby is born, cutting off its oxygen and bleeding the mother: an emergency' } },
      { name: { ar: 'تسمم الحمل', en: 'Pre-eclampsia' }, desc: { ar: 'ارتفاع ضغط الدم مع زلال في البول بعد منتصف الحمل، أصله خلل في أوعية المشيمة', en: 'High blood pressure with protein in the urine after mid-pregnancy, arising from faulty placental vessels' } },
      { name: { ar: 'سكري الحمل', en: 'Gestational diabetes' }, desc: { ar: 'هرمونات المشيمة تقاوم الأنسولين فيرتفع سكر الأم، ويكبر الجنين أكثر من اللازم', en: 'Placental hormones resist insulin, so the mother’s sugar rises and the baby grows larger than it should' } },
      { name: { ar: 'الولادة المبكرة', en: 'Preterm birth' }, desc: { ar: 'مخاض قبل الأسبوع السابع والثلاثين، ورئتا الطفل تكونان آخر ما ينضج فيحتاج مساعدة على التنفس', en: 'Labour before the thirty-seventh week; the baby’s lungs are the last thing to mature, so it often needs help to breathe' } }
    ]
  }
]);

/* ---------- المبيض (مقطع) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'ovary', type: 'organ', system: 'reproductive',
    name: { ar: 'المبيض', en: 'Ovary' },
    img: 'img/ovary.png', imgBack: 'img/ovary-back.png', thumb: 'img/thumb-ovary.png',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'أهداب البوق (الفيمبريا)', en: 'Fimbriae of the tube', x: 72, y: 20, side: 'right', go: 'female-reproductive',
        desc: {
          ar: 'اصابع رقيقة متحركة في نهاية قناة فالوب تنبسط فوق المبيض عند الاباضة وتكنس سطحه بحركة اهدابها لتلتقط البويضة. البويضة لا تسبح بنفسها، فلولا هذه الاصابع لضاعت في تجويف البطن.',
          en: 'Delicate moving fingers at the end of the fallopian tube. At ovulation they spread over the ovary and sweep its surface with their beating cilia to catch the egg. The egg cannot swim; without these fingers it would be lost in the abdomen.'
        }
      },
      {
        ar: 'الجريب الناضج (غراف)', en: 'Mature (Graafian) follicle', x: 63, y: 30, side: 'right',
        desc: {
          ar: 'الجريب المكتمل قبيل الاباضة: كيس ممتلئ بسائل يبرز من سطح المبيض كالفقاعة، وتجلس البويضة في جانبه محاطة بتاج من الخلايا يغذيها. يبلغ قطره نحو ٢ سم قبل ان ينفجر.',
          en: 'The finished follicle just before ovulation: a fluid-filled sac bulging from the surface like a blister, with the egg seated to one side inside a crown of nurse cells. It reaches about 2 cm across before it bursts.'
        }
      },
      {
        ar: 'الجريب النامي', en: 'Growing follicle', x: 44, y: 33, side: 'left',
        desc: {
          ar: 'جريب في منتصف الطريق: كبرت بويضته وتكاثرت حولها طبقات الخلايا وبدأ السائل يتجمع بينها. كل شهر يبدأ نحو عشرين جريبا السباق، وينضج واحد فقط ويضمر الباقي.',
          en: 'A follicle halfway along: its egg has enlarged, the cell layers around it have multiplied and fluid is starting to gather between them. Each month about twenty follicles begin the race; only one ripens and the rest wither.'
        }
      },
      {
        ar: 'البويضة المنطلقة (الإباضة)', en: 'Released ovum (ovulation)', x: 83, y: 40, side: 'right', go: 'pregnancy',
        desc: {
          ar: 'لحظة الاباضة: ينفجر الجريب فتخرج البويضة بتاجها من ثقب في سطح المبيض. تعيش بعدها نحو ٢٤ ساعة فقط، وفيها وحدها يمكن ان يلقحها الحيوان المنوي داخل قناة فالوب.',
          en: 'The moment of ovulation: the follicle bursts and the egg leaves through a hole in the ovarian surface with its crown of cells. It lives only about 24 hours afterwards, and only in that window can a sperm fertilise it inside the tube.'
        }
      },
      {
        ar: 'الجريبات البدائية', en: 'Primordial follicles', x: 19, y: 42, side: 'left',
        desc: {
          ar: 'بويضات نائمة صغيرة جدا في قشرة المبيض، ولدت المرأة وهي تحملها كلها ولا يُصنع منها جديد ابدا. تولد البنت بنحو مليون، ويبقى عند البلوغ نحو ثلاثمئة الف، ولا يصل الاباضة منها في العمر كله الا نحو اربعمئة.',
          en: 'Very small sleeping eggs in the cortex; a woman is born with every one she will ever have and no new ones are ever made. A baby girl has about a million, some three hundred thousand remain at puberty, and only about four hundred ever reach ovulation in a lifetime.'
        }
      },
      {
        ar: 'سرة المبيض وأوعيتها', en: 'Ovarian hilum and vessels', x: 6, y: 49, side: 'left',
        desc: {
          ar: 'المكان الذي يتعلق فيه المبيض برباطه وتدخل منه الاوعية الدموية والاعصاب. الالتفاف حول هذا العنق الوعائي هو ما يسمى انفتال المبيض، وهو الم مفاجئ حاد يقطع عنه الدم.',
          en: 'Where the ovary hangs by its ligament and its vessels and nerves enter. A twist around this vascular neck is what is called ovarian torsion: a sudden sharp pain that cuts off the ovary’s blood.'
        }
      },
      {
        ar: 'جريب ضامر', en: 'Atretic follicle', x: 22, y: 55, side: 'left',
        desc: {
          ar: 'جريب بدأ النمو ثم توقف وانطوى على نفسه. هذا مصير الغالبية العظمى من الجريبات، وليس عطلا بل هو الطريقة التي يفرز بها المبيض بويضة واحدة كل شهر.',
          en: 'A follicle that began to grow, then stalled and collapsed on itself. This is the fate of the great majority of follicles, and it is not a fault: it is how the ovary sifts out a single egg each month.'
        }
      },
      {
        ar: 'لبّ المبيض وأوعيته', en: 'Ovarian medulla and vessels', x: 43, y: 63, side: 'left',
        desc: {
          ar: 'الجزء الداخلي الرخو من المبيض، لا جريبات فيه بل نسيج ضام واوعية دموية حمراء وزرقاء متعرجة تغذي القشرة وتحمل هرموناتها الى الدم.',
          en: 'The soft inner part of the ovary. It holds no follicles, only connective tissue and winding red and blue vessels that feed the cortex and carry its hormones away into the blood.'
        }
      },
      {
        ar: 'الجسم الأصفر', en: 'Corpus luteum', x: 60, y: 73, side: 'right',
        desc: {
          ar: 'ما يتحول اليه الجريب بعد ان يفرغ من بويضته: كتلة صفراء مطوية تفرز البروجستيرون الذي يهيئ بطانة الرحم لاستقبال الحمل. ان حصل حمل بقي شهورا، وان لم يحصل ذبل بعد نحو اسبوعين فتنزل الدورة.',
          en: 'What the emptied follicle turns into: a folded yellow body that pours out progesterone to prepare the lining of the womb to receive a pregnancy. If pregnancy occurs it lasts for months; if not it fades after about two weeks and the period comes.'
        }
      },
      {
        ar: 'الجسم الأبيض', en: 'Corpus albicans', x: 81, y: 59, side: 'right',
        desc: {
          ar: 'اثر الجسم الاصفر بعد ما ذبل: ندبة بيضاء صغيرة من نسيج ليفي. يجتمع منها في المبيض شيء كثير مع السنين، فهي سجل صامت لكل اباضة مرت.',
          en: 'What is left when the corpus luteum fades: a small white scar of fibrous tissue. Many of them collect in the ovary over the years, a silent record of every ovulation that has passed.'
        }
      },
      {
        ar: 'سطح المبيض وقشرته', en: 'Ovarian surface and cortex', x: 24, y: 80, side: 'left',
        desc: {
          ar: 'الغلاف الخارجي للمبيض والطبقة التي تحته حيث تسكن كل الجريبات. سطحه املس في الصغر، ويصير مع السنين متعرجا لان كل اباضة تترك فيه ندبة صغيرة.',
          en: 'The outer coat of the ovary and the layer beneath it where all the follicles live. The surface is smooth in youth and grows puckered with the years, because every ovulation leaves a small scar on it.'
        }
      }
    ],
    desc: {
      ar: 'المبيضان غدتان بحجم حبة اللوز على جانبي الرحم، وهما بيت البويضات ومصنع الهرمونات الأنثوية في آن واحد. في القشرة تسكن الجريبات بمراحلها كلها: بدائية نائمة، ثم نامية، ثم جريب ناضج يبرز من السطح وينفجر فتخرج البويضة، ثم يتحول ما بقي منه إلى جسم أصفر ثم إلى ندبة بيضاء. وفي الداخل لبّ رخو تمر فيه الأوعية. هذا المشهد كله يتكرر في المبيض كل شهر من البلوغ حتى سن اليأس.',
      en: 'The two ovaries are almond-sized glands on either side of the womb, at once the home of the eggs and the factory of the female hormones. In the cortex the follicles live at every stage: sleeping primordial ones, then growing ones, then a ripe follicle that bulges from the surface and bursts to release the egg, after which what remains becomes a yellow body and finally a white scar. Inside lies a soft medulla threaded with vessels. This whole scene repeats in the ovary every month from puberty to menopause.'
    },
    func: {
      ar: 'المبيض يقود الدورة الشهرية بخطوات مرتبة: في النصف الأول ينضج جريب واحد ويفرز الإستروجين الذي يبني بطانة الرحم، ثم تأتي دفعة هرمونية من الغدة النخامية فينفجر الجريب وتخرج البويضة — وهذه هي الإباضة في منتصف الدورة تقريبا. ما بقي من الجريب يصير جسما أصفر يفرز البروجستيرون الذي يثبّت البطانة ويهيئها للحمل. فإن لُقّحت البويضة بقي الجسم الأصفر يسند الحمل في أسابيعه الأولى حتى تتسلم المشيمة، وإن لم تُلقّح ذبل بعد نحو أسبوعين فيهبط الهرمون وتنسلخ البطانة وتنزل الدورة. وإلى جانب هذا يفرز المبيض هرمونات تبني العظم وتوزع الدهن وترسم ملامح الأنوثة.',
      en: 'The ovary drives the monthly cycle in an ordered sequence. In the first half a single follicle ripens and pours out oestrogen, which builds the lining of the womb. Then a surge of hormone from the pituitary bursts the follicle and the egg is released: ovulation, roughly at mid-cycle. What is left of the follicle becomes the corpus luteum, which makes progesterone to steady the lining and ready it for pregnancy. If the egg is fertilised the corpus luteum supports the early weeks until the placenta takes over; if it is not, it fades after about two weeks, the hormone falls, the lining is shed and the period arrives. Alongside this the ovary makes hormones that build bone, distribute fat and shape the female form.'
    },
    location: { ar: 'في الحوض على جانبي الرحم، قرب نهاية كل قناة فالوب، معلق برباط تدخل منه أوعيته', en: 'In the pelvis on either side of the womb, near the end of each fallopian tube, slung on a ligament through which its vessels enter' },
    size: { ar: 'نحو ٣ × ٢ × ١ سم ووزنه ٥ إلى ٨ غرامات، ويصغر كثيرا بعد سن اليأس', en: 'About 3 x 2 x 1 cm and 5 to 8 grams, shrinking markedly after menopause' },
    short: { ar: 'كل بويضاتها وُلدت معها ولا يُصنع منها جديد', en: 'Every egg it holds was born with her; no new ones are ever made' },
    parts: [
      { ar: 'القشرة وجريباتها', en: 'The cortex and its follicles' },
      { ar: 'الجريب الناضج والبويضة', en: 'The mature follicle and the egg' },
      { ar: 'الجسم الأصفر والجسم الأبيض', en: 'The corpus luteum and the corpus albicans' },
      { ar: 'اللبّ وأوعيته والسرّة', en: 'The medulla, its vessels and the hilum' }
    ],
    diseases: [
      { name: { ar: 'تكيس المبايض', en: 'Polycystic ovary syndrome' }, desc: { ar: 'جريبات كثيرة تقف في منتصف نموها ولا ينضج منها شيء، فتتباعد الدورات ويرتفع هرمون الذكورة', en: 'Many follicles stall halfway and none ripens, so periods space out and male hormone rises' } },
      { name: { ar: 'كيسة المبيض', en: 'Ovarian cyst' }, desc: { ar: 'كيس ممتلئ بسائل، أكثره جريب لم ينفجر أو جسم أصفر تضخم، وغالبه يزول وحده', en: 'A fluid-filled sac, usually a follicle that did not burst or an enlarged corpus luteum; most clear up on their own' } },
      { name: { ar: 'انفتال المبيض', en: 'Ovarian torsion' }, desc: { ar: 'يلتف المبيض حول أوعيته فينقطع عنه الدم — ألم مفاجئ شديد يحتاج جراحة عاجلة', en: 'The ovary twists on its vessels and loses its blood supply: sudden severe pain needing urgent surgery' } },
      { name: { ar: 'بطانة الرحم المهاجرة', en: 'Endometriosis' }, desc: { ar: 'نسيج شبيه ببطانة الرحم ينمو على المبيض فينزف كل شهر ويكوّن كيسات داكنة ويسبب ألما وعقما', en: 'Tissue like the womb lining grows on the ovary, bleeds each month, forms dark cysts and causes pain and infertility' } },
      { name: { ar: 'قصور المبيض المبكر', en: 'Premature ovarian insufficiency' }, desc: { ar: 'ينفد مخزون الجريبات قبل سن الأربعين فتتوقف الدورة مبكرا وتظهر أعراض سن اليأس', en: 'The store of follicles runs out before the age of forty, so periods stop early and menopausal symptoms appear' } }
    ]
  }
]);

/* ---------- الغدة الصنوبرية (مقطع سهمي للدماغ) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'pineal', type: 'organ', system: 'endocrine',
    name: { ar: 'الغدة الصنوبرية', en: 'Pineal gland' },
    img: 'img/pineal.png', imgBack: 'img/pineal-back.png', thumb: 'img/thumb-pineal.png',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'قشرة المخ', en: 'Cerebral cortex', x: 25, y: 10, side: 'left', go: 'brain',
        desc: {
          ar: 'الطبقة الخارجية المتغضنة من المخ حيث التفكير والذاكرة والحركة الارادية. الغدة الصنوبرية تعمل بمعزل عن ارادتها: انت لا تقرر متى تنعس.',
          en: 'The folded outer layer of the brain, seat of thought, memory and voluntary movement. The pineal works quite outside its will: you do not decide when to feel sleepy.'
        }
      },
      {
        ar: 'الجسم الثفني', en: 'Corpus callosum', x: 35, y: 25, side: 'left',
        desc: {
          ar: 'جسر عريض من الالياف البيضاء يقوس فوق مركز الدماغ ويصل نصفيه الايمن والايسر، فيعبره نحو مئتي مليون ليف تنقل المعلومات بينهما.',
          en: 'A broad bridge of white fibres arching over the centre of the brain and joining its right and left halves; some two hundred million fibres cross it carrying information between them.'
        }
      },
      {
        ar: 'المهاد', en: 'Thalamus', x: 49, y: 38, side: 'left',
        desc: {
          ar: 'كتلة بيضية في عمق الدماغ تعمل كمحطة تحويل: كل الاحساسات تقريبا تمر بها قبل ان تصل الى القشرة. والغدة الصنوبرية تجلس مباشرة خلفها، ومن هنا اسم موقعها فوق المهاد.',
          en: 'An oval mass deep in the brain acting as a relay station: nearly every sensation passes through it before reaching the cortex. The pineal sits directly behind it, which is why its region is called the epithalamus, above the thalamus.'
        }
      },
      {
        ar: 'الغدة الصنوبرية', en: 'Pineal gland', x: 61, y: 41, side: 'right',
        desc: {
          ar: 'غدة صغيرة بحجم حبة الارز على شكل كوز الصنوبر، تجلس خلف المهاد في منتصف الدماغ تماما. تفرز الميلاتونين في الظلام وتكف عن افرازه في الضوء، فهي الساعة التي تضبط ليل الجسم ونهاره. تتكلس مع تقدم العمر حتى تظهر نقطة بيضاء في اشعة الرأس، ويستدل بها على منتصف الدماغ.',
          en: 'A small gland the size of a grain of rice and shaped like a pine cone, seated behind the thalamus at the exact midline of the brain. It releases melatonin in darkness and stops in light, so it is the clock that sets the body’s night and day. With age it calcifies until it shows as a white dot on head scans, and it is used to mark the brain’s midline.'
        }
      },
      {
        ar: 'البطين الثالث', en: 'Third ventricle', x: 41, y: 45, side: 'left',
        desc: {
          ar: 'تجويف ضيق في منتصف الدماغ بين نصفي المهاد، مملوء بالسائل الدماغي الشوكي. الغدة الصنوبرية معلقة في جداره الخلفي، ولهذا فان ورما فيها قد يسد مجرى السائل ويسبب استسقاء الدماغ.',
          en: 'A narrow cavity at the midline between the two halves of the thalamus, filled with cerebrospinal fluid. The pineal hangs from its back wall, which is why a tumour there can block the flow of fluid and cause hydrocephalus.'
        }
      },
      {
        ar: 'الوطاء (تحت المهاد)', en: 'Hypothalamus', x: 38, y: 52, side: 'left',
        desc: {
          ar: 'المنطقة الصغيرة تحت المهاد، وفيها الساعة البيولوجية الرئيسية للجسم. تستقبل خيطا عصبيا قادما من شبكية العين يخبرها بالضوء، ثم ترسل الامر الى الغدة الصنوبرية بايقاف الميلاتونين نهارا واطلاقه ليلا.',
          en: 'The small region under the thalamus, home of the body’s master clock. It receives a nerve thread from the retina telling it about light, then sends the order to the pineal to hold back melatonin by day and release it by night.'
        }
      },
      {
        ar: 'الغدة النخامية', en: 'Pituitary gland', x: 34, y: 59, side: 'left', go: 'pituitary',
        desc: {
          ar: 'الغدة القائدة، تتدلى بسويقة من الوطاء اسفل الدماغ. تشترك مع الصنوبرية في انهما غدتان لا يتجاوز وزن الواحدة غراما، وتؤثران في الجسم كله.',
          en: 'The master gland, hanging by a stalk from the hypothalamus beneath the brain. It shares with the pineal the fact that neither weighs more than a gram, yet both act on the whole body.'
        }
      },
      {
        ar: 'المخيخ', en: 'Cerebellum', x: 78, y: 60, side: 'right', go: 'brain',
        desc: {
          ar: 'الدماغ الصغير خلف جذع الدماغ، وتظهر مادته البيضاء متفرعة كشجرة تسمى شجرة الحياة. يضبط التوازن ودقة الحركة وسلاستها.',
          en: 'The little brain behind the brainstem, its white matter branching like a tree, called the tree of life. It governs balance and the accuracy and smoothness of movement.'
        }
      },
      {
        ar: 'الجسر (جذع الدماغ)', en: 'Pons (brainstem)', x: 50, y: 68, side: 'right',
        desc: {
          ar: 'انتفاخ في جذع الدماغ تعبر منه الالياف بين المخ والمخيخ والحبل الشوكي، وفيه مراكز تشارك في تنظيم التنفس والنوم واحلام حركة العين السريعة.',
          en: 'A swelling of the brainstem through which fibres pass between the cerebrum, the cerebellum and the spinal cord. It also holds centres that help regulate breathing, sleep and rapid-eye-movement dreaming.'
        }
      },
      {
        ar: 'النخاع المستطيل', en: 'Medulla oblongata', x: 58, y: 80, side: 'right',
        desc: {
          ar: 'اسفل جذع الدماغ حيث يتصل بالحبل الشوكي. فيه مراكز التنفس وضربات القلب وضغط الدم، وهي تعمل ليلا ونهارا بلا انقطاع ولا تحتاج وعيا منك.',
          en: 'The lowest part of the brainstem, where it meets the spinal cord. It holds the centres for breathing, heartbeat and blood pressure, working day and night without pause and without any awareness on your part.'
        }
      }
    ],
    desc: {
      ar: 'الغدة الصنوبرية غدة صغيرة بحجم حبة الأرز سميت بهذا الاسم لأن شكلها يشبه كوز الصنوبر. تجلس في منتصف الدماغ تماما خلف المهاد وعلى الجدار الخلفي للبطين الثالث، وهي من قلائل تكوينات الدماغ التي لا يوجد منها اثنتان — واحدة في المنتصف لا يمين لها ولا يسار. وظيفتها ترجمة الضوء والظلام إلى هرمون: تفرز الميلاتونين في العتمة وتصمت في النور، فتخبر الجسم كله أن الليل قد جاء.',
      en: 'The pineal is a gland the size of a grain of rice, named for its resemblance to a pine cone. It sits at the exact midline of the brain behind the thalamus, on the back wall of the third ventricle, and it is one of the few brain structures of which there is only one, with no right and no left. Its work is to translate light and darkness into a hormone: it releases melatonin in the dark and falls silent in the light, telling the whole body that night has come.'
    },
    func: {
      ar: 'الطريق يبدأ من العين لا من الغدة: خلايا خاصة في الشبكية تحس الضوء الأزرق وترسل خيطا عصبيا إلى الساعة الرئيسية في الوطاء، ومن هناك تنزل الإشارة عبر سلسلة عصبية طويلة حتى تصل الغدة الصنوبرية. فإذا حل الظلام أُذن لها بإفراز الميلاتونين، وإذا سقط الضوء على العين توقف الإفراز في دقائق. الميلاتونين لا ينوّم بالقوة، لكنه يخفض حرارة الجسم قليلا ويهبط باليقظة ويقول للأعضاء كلها إن الليل بدأ، فتتزامن معه الحرارة والهرمونات والهضم والمناعة. ولهذا فإن ضوء الشاشة قبل النوم يؤخّر الإفراز فيتأخر النوم، والسفر عبر خطوط الطول يفصل الساعة الداخلية عن ساعة المكان فيحدث اضطراب الرحلات الطويلة. وتفرز الغدة أكثر ما تفرز في الطفولة، ثم يقل الإفراز مع العمر وتتكلس أنسجتها.',
      en: 'The path starts at the eye, not at the gland: special cells in the retina sense blue light and send a nerve thread to the master clock in the hypothalamus, and from there the signal travels down a long nerve chain to the pineal. When darkness falls the gland is permitted to release melatonin; when light strikes the eye the release stops within minutes. Melatonin does not force sleep, but it lowers body temperature a little, dampens alertness and tells every organ that night has begun, so temperature, hormones, digestion and immunity all fall into step. This is why screen light before bed delays the release and pushes sleep later, and why flying across meridians leaves the inner clock out of step with the local one, causing jet lag. The gland secretes most in childhood, then output falls with age and its tissue calcifies.'
    },
    location: { ar: 'في منتصف الدماغ تماما، خلف المهاد وفوق سقف الدماغ المتوسط، معلقة على الجدار الخلفي للبطين الثالث', en: 'At the exact midline of the brain, behind the thalamus and above the roof of the midbrain, attached to the back wall of the third ventricle' },
    size: { ar: 'نحو ٥ إلى ٨ مليمترات ووزنها نحو ١٠٠ إلى ١٨٠ مليغراما — أصغر من حبة الحمص بكثير', en: 'About 5 to 8 millimetres and weighing some 100 to 180 milligrams, far smaller than a chickpea' },
    short: { ar: 'ساعة الجسم: تترجم الظلام إلى هرمون نوم', en: 'The body clock: it turns darkness into a sleep hormone' },
    parts: [
      { ar: 'خلايا الصنوبرية المفرزة للميلاتونين', en: 'The pinealocytes that make melatonin' },
      { ar: 'ساق تربطها بسقف البطين الثالث', en: 'The stalk tying it to the roof of the third ventricle' },
      { ar: 'الطريق العصبي القادم من العين عبر الوطاء', en: 'The nerve path arriving from the eye by way of the hypothalamus' },
      { ar: 'الرمل الصنوبري (التكلسات)', en: 'Brain sand: its calcifications' }
    ],
    diseases: [
      { name: { ar: 'اضطراب الساعة البيولوجية', en: 'Circadian rhythm disorder' }, desc: { ar: 'انفصال ساعة الجسم عن ساعة المكان بسبب السهر أو العمل الليلي أو السفر، فيأتي النعاس في غير وقته', en: 'The body clock drifts out of step with local time through late nights, shift work or travel, so sleepiness arrives at the wrong hours' } },
      { name: { ar: 'ورم الغدة الصنوبرية', en: 'Pineal tumour' }, desc: { ar: 'ورم نادر قد يسد مجرى السائل الدماغي فيسبب صداعا وقيئا، وقد يضغط على مركز حركة العين للأعلى', en: 'A rare tumour that may block the flow of brain fluid, causing headache and vomiting, and can press on the centre for upward eye movement' } },
      { name: { ar: 'تكلس الغدة الصنوبرية', en: 'Pineal calcification' }, desc: { ar: 'ترسب أملاح الكالسيوم فيها مع العمر حتى تظهر نقطة بيضاء في الأشعة — أمر شائع يستخدمه الأطباء علامة على منتصف الدماغ', en: 'Calcium salts deposit in it with age until it shows as a white dot on scans: a common finding that doctors use as a marker of the brain midline' } },
      { name: { ar: 'الاكتئاب الموسمي', en: 'Seasonal affective disorder' }, desc: { ar: 'قصر النهار في الشتاء يطيل ليل الميلاتونين فيهبط المزاج والنشاط، ويفيد فيه التعرض للضوء الساطع صباحا', en: 'Short winter days lengthen the melatonin night, dragging down mood and energy; bright light in the morning helps' } }
    ]
  }
]);

/* ---------- العقدة اللمفاوية (مقطع) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'lymph-node', type: 'organ', system: 'lymphatic',
    name: { ar: 'العقدة اللمفاوية', en: 'Lymph node' },
    img: 'img/lymph-node.png', imgBack: 'img/lymph-node-back.png', thumb: 'img/thumb-lymph-node.png',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'وعاء لمفاوي وارد', en: 'Afferent lymphatic vessel', x: 44, y: 4, side: 'left', go: 'lymphatic',
        desc: {
          ar: 'انبوب رقيق ذو تعرجات يدخل العقدة من محيطها حاملا اللمف القادم من الانسجة. الاوعية الواردة كثيرة تدخل من كل جهة، بينما الخارج منها واحد فقط — وهذا يبطئ السريان داخل العقدة عمدا ليطول وقت الفحص.',
          en: 'A thin beaded tube entering the node around its rim, carrying lymph in from the tissues. The incoming vessels are many and enter from all sides while only one leaves, which deliberately slows the flow inside so there is longer to inspect it.'
        }
      },
      {
        ar: 'المحفظة الليفية', en: 'Fibrous capsule', x: 25, y: 20, side: 'left',
        desc: {
          ar: 'غلاف ليفي متين يحيط بالعقدة ويعطيها شكلها ويحفظ ما بداخلها. تحته مباشرة جيب يستقبل اللمف الداخل قبل ان يوزعه على القشرة.',
          en: 'A tough fibrous coat wrapping the node, giving it its shape and holding its contents. Immediately beneath it lies a sinus that receives the incoming lymph before spreading it into the cortex.'
        }
      },
      {
        ar: 'الحاجز الليفي', en: 'Trabecula', x: 46, y: 27, side: 'left',
        desc: {
          ar: 'امتدادات من المحفظة تغوص الى داخل العقدة فتقسمها الى حجرات وتحمل معها اوعية دقيقة. هي هيكل العقدة الذي يسند نسيجها الطري.',
          en: 'Extensions of the capsule that dive inward, dividing the node into compartments and carrying small vessels with them. They are the scaffold that supports the soft tissue.'
        }
      },
      {
        ar: 'الجريب اللمفاوي', en: 'Lymphoid follicle', x: 23, y: 34, side: 'left',
        desc: {
          ar: 'كرة مكتظة بالخلايا اللمفاوية البائية في قشرة العقدة. هذي مساكن الخلايا التي تصنع الاجسام المضادة، ولونها داكن لان انويتها متلاصقة متراصة.',
          en: 'A ball packed with B lymphocytes in the cortex of the node. These are the quarters of the cells that make antibodies, and they look dark because their nuclei are crowded tightly together.'
        }
      },
      {
        ar: 'المركز الإنباتي', en: 'Germinal centre', x: 26, y: 50, side: 'left',
        desc: {
          ar: 'قلب الجريب الفاتح اللون، ويظهر فاتحا لان خلاياه كبرت وانتفخت وهي تتكاثر. هنا تُدرَّب الخلايا البائية على العدو الجديد وتُنتقى منها الافضل فتصنع اجساما مضادة اقوى. لا يظهر هذا المركز الا حين تكون العقدة في حالة عمل فعلي.',
          en: 'The pale heart of the follicle, pale because its cells have enlarged and swollen as they divide. Here B cells are trained against the new enemy and the best of them are selected to make stronger antibodies. Such a centre appears only when the node is actually at work.'
        }
      },
      {
        ar: 'الحبال والجيوب اللبية', en: 'Medullary cords and sinuses', x: 52, y: 62, side: 'left',
        desc: {
          ar: 'شبكة من الممرات المتشابكة يسير فيها اللمف ببطء، وعلى جدرانها بلاعم تلتهم الجراثيم والخلايا الميتة. الحبال بينها مليئة بخلايا بلازمية تصب الاجسام المضادة مباشرة في اللمف الخارج.',
          en: 'A web of interlacing channels through which lymph creeps slowly, their walls lined with macrophages that swallow germs and dead cells. The cords between them are full of plasma cells pouring antibodies straight into the outgoing lymph.'
        }
      },
      {
        ar: 'وعاء لمفاوي وارد آخر', en: 'Another afferent vessel', x: 11, y: 70, side: 'left', go: 'lymphatic',
        desc: {
          ar: 'وعاء وارد ثان يدخل من الجهة المقابلة. الانتفاخات المتتابعة على طوله هي صمامات تمنع رجوع اللمف الى الوراء، فاللمف لا مضخة له كالقلب وانما يدفعه انقباض العضلات حوله.',
          en: 'A second incoming vessel entering from the opposite side. The regular bulges along it are valves that stop lymph from running backwards; lymph has no pump like the heart, and is driven instead by the squeeze of the muscles around it.'
        }
      },
      {
        ar: 'اللبّ', en: 'Medulla', x: 58, y: 34, side: 'right',
        desc: {
          ar: 'الجزء الداخلي الفاتح من العقدة، اقل ازدحاما بالخلايا واكثر ممرات من القشرة. اللمف يجتاز القشرة اولا ثم ينساب هنا متجها الى السرة ليخرج.',
          en: 'The pale inner part of the node, less crowded with cells and richer in channels than the cortex. Lymph crosses the cortex first, then drifts through here on its way to the hilum to leave.'
        }
      },
      {
        ar: 'السُّرّة', en: 'Hilum', x: 72, y: 42, side: 'right',
        desc: {
          ar: 'الثلمة المنخفضة في جانب العقدة، وهي بابها الوحيد للخروج: منها يغادر الوعاء اللمفاوي الصادر، ومنها يدخل الشريان ويخرج الوريد.',
          en: 'The hollowed notch on one side of the node, its single exit door: the efferent lymphatic leaves here, and here the artery enters and the vein leaves.'
        }
      },
      {
        ar: 'الوعاء اللمفاوي الصادر', en: 'Efferent lymphatic vessel', x: 89, y: 50, side: 'right',
        desc: {
          ar: 'الوعاء الوحيد الخارج من العقدة، يحمل لمفا مصفى محملا بالخلايا اللمفاوية والاجسام المضادة الجديدة الى العقدة التالية، حتى يصب اللمف اخيرا في الوريد قرب القلب.',
          en: 'The one vessel leaving the node, carrying filtered lymph loaded with fresh lymphocytes and antibodies on to the next node, until the lymph finally empties into a vein near the heart.'
        }
      },
      {
        ar: 'الشريان', en: 'Artery', x: 90, y: 58, side: 'right', go: 'vessels',
        desc: {
          ar: 'يدخل من السرة ويغذي العقدة، ومنه ايضا تعبر الخلايا اللمفاوية من الدم الى داخل العقدة لتنضم الى العمل. فالعقدة تستقبل جنودها من الدم وترسل نتاجها في اللمف.',
          en: 'It enters at the hilum and feeds the node, and through it lymphocytes also cross from the blood into the node to join the work. So the node receives its soldiers from the blood and sends its output out in the lymph.'
        }
      },
      {
        ar: 'الوريد', en: 'Vein', x: 93, y: 66, side: 'right', go: 'vessels',
        desc: {
          ar: 'يخرج من السرة حاملا الدم المستهلك من العقدة. حين تنشط العقدة يزيد سريان الدم فيها فتحمر وتؤلم وتنتفخ — وهي علامات عمل لا علامات خلل.',
          en: 'It leaves at the hilum with the node’s used blood. When the node is busy its blood flow rises, so it reddens, aches and swells: signs of work, not of failure.'
        }
      }
    ],
    desc: {
      ar: 'العقدة اللمفاوية عضو صغير على شكل حبة الفاصولياء موزّع بالمئات على مسار الأوعية اللمفاوية في الجسم. يحيط بها غلاف ليفي تنزل منه حواجز تقسم داخلها، وتحت الغلاف قشرة مليئة بجريبات لمفاوية لكل جريب مركز فاتح، وفي العمق لبّ من ممرات وحبال. تدخلها عدة أوعية واردة من كل جهة، ولا يخرج منها إلا وعاء واحد من السرّة حيث يدخل الشريان ويخرج الوريد. هذا التصميم يجعل اللمف يتباطأ داخلها فيطول وقت فحصه.',
      en: 'A lymph node is a small bean-shaped organ, and hundreds of them are strung along the lymphatic vessels of the body. A fibrous coat surrounds it, sending partitions inward; beneath the coat lies a cortex full of lymphoid follicles, each with a pale centre, and deeper in a medulla of channels and cords. Several vessels enter from all around, but only one leaves, at the hilum, where the artery enters and the vein departs. The design makes lymph slow down inside, so there is longer to examine it.'
    },
    func: {
      ar: 'العقدة اللمفاوية شيئان في آن واحد: مصفاة ومعسكر تدريب. السائل اللمفي الراشح من الأنسجة يحمل معها كل ما وقع فيها من جراثيم وفيروسات وخلايا ميتة وفتات، فيدخل العقدة ويتباطأ فيها لأن الداخل أوعية كثيرة والخارج واحد. وفي هذا البطء تلتقط البلاعم ما في اللمف وتبتلعه، ثم تعرض قطعة من العدو على الخلايا اللمفاوية المنتظرة. عندها يستيقظ الجريب: تتكاثر الخلايا البائية في مركزه فيتضخم، وتصنع أجساما مضادة مفصّلة على هذا العدو بعينه، وتخرج نسخ منها في اللمف الصادر لتنتشر في الجسم كله. ولهذا فإن انتفاخ العقدة عند الالتهاب علامة أنها تعمل لا أنها مريضة. والوجه الآخر لهذا الطريق أن الخلايا السرطانية قد تسلكه أيضا، فتنتقل من الورم إلى أول عقدة في طريقه — ومن هنا يفحص الأطباء العقد ليعرفوا إلى أين وصل المرض.',
      en: 'A lymph node is two things at once: a filter and a training camp. Lymph seeping from the tissues carries with it whatever has landed there, germs, viruses, dead cells and debris. It enters the node and slows down, because many vessels come in and only one goes out. In that slowness macrophages catch what the lymph holds and swallow it, then present a piece of the enemy to the waiting lymphocytes. The follicle then wakes: B cells multiply in its centre until it swells, antibodies are made tailored to this particular enemy, and copies leave in the outgoing lymph to spread through the body. This is why a swollen node during an infection is a sign that it is working, not that it is diseased. The other face of the same road is that cancer cells may travel it too, moving from a tumour to the first node in its path, which is why doctors examine the nodes to learn how far a disease has gone.'
    },
    location: { ar: 'بالمئات على مسار الأوعية اللمفاوية، وتتجمع في الرقبة والإبط وأصل الفخذ والصدر والبطن — وجملتها في الجسم نحو ٦٠٠ عقدة', en: 'In their hundreds along the lymphatic vessels, clustered in the neck, armpit, groin, chest and abdomen; there are around 600 in the body' },
    size: { ar: 'من ١ مليمتر إلى نحو ٢ سم، والطبيعي منها أقل من ١ سم وطري ومتحرك تحت الأصابع', en: 'From 1 millimetre to about 2 cm; a normal node is under 1 cm, soft and freely movable under the fingers' },
    short: { ar: 'مصفاة ومعسكر تدريب: انتفاخها دليل عمل لا دليل خلل', en: 'A filter and a training camp: its swelling is a sign of work, not of failure' },
    parts: [
      { ar: 'المحفظة الليفية وحواجزها', en: 'The fibrous capsule and its trabeculae' },
      { ar: 'القشرة وجريباتها ومراكزها الإنباتية', en: 'The cortex with its follicles and germinal centres' },
      { ar: 'اللبّ بحباله وجيوبه', en: 'The medulla with its cords and sinuses' },
      { ar: 'الأوعية الواردة والسرّة والوعاء الصادر', en: 'The afferent vessels, the hilum and the efferent vessel' }
    ],
    diseases: [
      { name: { ar: 'التهاب العقد اللمفاوية', en: 'Lymphadenitis' }, desc: { ar: 'انتفاخ مؤلم للعقد قرب موضع عدوى — كعقد الرقبة مع التهاب الحلق — وغالبا يزول بزوال السبب', en: 'Painful swelling of the nodes near an infection, such as neck nodes with a sore throat; it usually settles when the cause does' } },
      { name: { ar: 'اللمفوما', en: 'Lymphoma' }, desc: { ar: 'سرطان ينشأ من الخلايا اللمفاوية نفسها، فتتضخم العقد بلا ألم مع تعرق ليلي وحمى ونقص وزن', en: 'A cancer arising from the lymphocytes themselves; the nodes enlarge painlessly alongside night sweats, fever and weight loss' } },
      { name: { ar: 'انتقال السرطان (النقائل)', en: 'Metastasis to nodes' }, desc: { ar: 'خلايا ورم تسافر مع اللمف وتستقر في أول عقدة في طريقها، ولهذا تُفحص العقدة الحارسة في جراحة الأورام', en: 'Tumour cells travel with the lymph and lodge in the first node on their path, which is why the sentinel node is examined in cancer surgery' } },
      { name: { ar: 'السل اللمفي', en: 'Tuberculous lymphadenitis' }, desc: { ar: 'عدوى مزمنة بجرثومة السل تضخّم عقد الرقبة وتلصقها ببعضها وقد تفتح ناسورا في الجلد', en: 'A chronic tuberculous infection that enlarges the neck nodes, mats them together and may open a sinus through the skin' } },
      { name: { ar: 'الوذمة اللمفية', en: 'Lymphoedema' }, desc: { ar: 'تورّم مزمن في الطرف بعد استئصال العقد أو إشعاعها، لأن اللمف لم يعد يجد طريقا للعودة', en: 'Chronic swelling of a limb after nodes are removed or irradiated, because the lymph no longer has a way back' } }
    ]
  }
]);

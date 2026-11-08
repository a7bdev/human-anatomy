/* ============================================================
   batch-n.js — دفعة ن من عناصر «جسم الإنسان»
   أنواع العضلات الثلاثة · الحاجز الدموي الدماغي · التئام الجرح
   يُدمج لاحقاً في data.js — لا يُعدَّل data.js من هنا.
   ============================================================ */

ORGANS = ORGANS.concat([

/* ---------- أنواع العضلات الثلاثة ---------- */
  {
    id: 'muscle-types', type: 'organ', system: 'muscles',
    name: { ar: 'أنواع العضلات الثلاثة', en: 'The three types of muscle' },
    img: 'img/muscle-types.webp', imgBack: 'img/muscle-types-back.webp', thumb: 'img/thumb-muscle-types.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'العضلة الهيكلية', en: 'Skeletal muscle', x: 14, y: 13, side: 'left', go: 'muscles',
        desc: {
          ar: 'الكتلة اليسرى: الياف طويلة اسطوانية متوازية كانها حزمة قصب. هذي هي العضلة الوحيدة التي تطيعك، تنقبض حين تامرها وتسكت حين تسكت. هي التي تحرك العظام وتحمل وتمشي وتبتسم، وهي التي تتعب وتحتاج راحة.',
          en: 'The block on the left: long, parallel, cylindrical fibres like a bundle of canes. This is the only muscle that obeys you, contracting when you order it and resting when you stop. It moves the bones, lifts, walks and smiles, and it is the one that tires and needs rest.'
        }
      },
      {
        ar: 'نواة على حافة الليف', en: 'Nucleus at the edge of the fibre', x: 23.3, y: 25.4, side: 'left', go: 'cell',
        desc: {
          ar: 'الحبات البنفسجية المنزوية عند سطح الليف. ليف العضلة الهيكلية خلية واحدة عملاقة فيها مئات الانوية، وقد دفعت كلها الى الحافة لان وسط الليف مزدحم بخيوط الانقباض. وهذي علامة تعرف بها العضلة الهيكلية من غيرها.',
          en: 'The violet beads pressed against the surface of the fibre. A skeletal muscle fibre is one giant cell carrying hundreds of nuclei, and all of them are pushed out to the rim because the middle is packed with contractile filaments. This alone tells skeletal muscle apart from the rest.'
        }
      },
      {
        ar: 'تفرع ألياف عضلة القلب', en: 'Branching of cardiac fibres', x: 48.5, y: 37.5, side: 'left',
        desc: {
          ar: 'الكتلة الوسطى: الالياف هنا لا تمشي متوازية بل تتفرع وتتشابك وتلتقي كشبكة. هذا التشابك هو الذي يجعل الموجة الكهربائية تسري في كل اتجاه فينقبض جدار القلب كله دفعة واحدة، لا ليفا بعد ليف.',
          en: 'The middle block: here the fibres do not run in parallel, they branch and interlock like a net. That weave lets the electrical wave spread in every direction, so the whole wall of the heart squeezes as one, not fibre after fibre.'
        }
      },
      {
        ar: 'القرص البيني', en: 'Intercalated disc', x: 44, y: 44, side: 'left',
        desc: {
          ar: 'الشريط الداكن العرضي الذي يصل نهاية خلية قلبية بنهاية جارتها. ليس مجرد لحام، بل فيه ثقوب دقيقة تجعل الكهرباء تعبر من خلية الى خلية بلا عصب وبلا تاخير، فيصير القلب كانه خلية واحدة كبيرة. هذا القرص لا يوجد في اي عضلة اخرى.',
          en: 'The dark cross band that joins the end of one heart cell to the end of its neighbour. It is not merely a weld: it carries tiny pores that let the current pass from cell to cell with no nerve and no delay, so the heart behaves like one huge cell. This disc exists in no other muscle.'
        }
      },
      {
        ar: 'التخطيط العرضي', en: 'Cross striations', x: 26, y: 55, side: 'left', go: 'muscle-fiber',
        desc: {
          ar: 'الخطوط الفاتحة والغامقة المتناوبة عبر الليف. ليست زخرفة بل صفوف مرتبة من خيطي الاكتين والميوسين، وحين ينقبض الليف تنزلق الخيوط بعضها داخل بعض فتتقارب الخطوط. العضلة الهيكلية والقلبية مخططتان، والملساء لا.',
          en: 'The alternating light and dark bands crossing the fibre. They are not decoration but ordered rows of actin and myosin filaments; when the fibre contracts the filaments slide into one another and the bands draw closer. Skeletal and cardiac muscle are striated, smooth muscle is not.'
        }
      },
      {
        ar: 'مقطع عرضي في حزمة ألياف', en: 'Cross-section of a fibre bundle', x: 12, y: 68, side: 'left', go: 'muscle-fiber',
        desc: {
          ar: 'الاطراف المقطوعة في الاسفل تكشف داخل الليف: نقاط صغيرة كثيفة هي اللييفات العضلية، وكل ليف ملفوف بغلاف رقيق، والالياف مجموعة في حزمة داخل غلاف اكبر. هذا التغليف المتدرج هو ما يعطي العضلة قوتها ويحمل اوعيتها واعصابها.',
          en: 'The cut ends at the bottom open the fibre up: the dense little dots are myofibrils, each fibre is wrapped in a thin sheath, and the fibres are gathered into a bundle inside a larger one. This nested wrapping is what gives muscle its strength and carries its vessels and nerves.'
        }
      },
      {
        ar: 'مكبّر: الليف الهيكلي', en: 'Close-up: skeletal fibre', x: 16, y: 82, side: 'left',
        desc: {
          ar: 'الاطار الاول في الصف السفلي يقرب ليفا هيكليا واحدا: اسطوانة مخططة بانتظام واضح، وانويتها على السطح. لاحظ ان الليف يمتد بلا تفرع ولا فاصل، وقد يمتد من طرف العضلة الى طرفها.',
          en: 'The first frame in the bottom row brings one skeletal fibre close: a cylinder striped with clear regularity, its nuclei on the surface. Notice that the fibre runs on without branching and without a break, and may reach from one end of the muscle to the other.'
        }
      },
      {
        ar: 'العضلة القلبية', en: 'Cardiac muscle', x: 57, y: 9, side: 'right', go: 'heart',
        desc: {
          ar: 'الكتلة الوسطى. لا تطيع امرك ولا تتعب ابدا: تنقبض نحو مئة الف مرة في اليوم منذ الاسبوع الرابع في بطن امك الى اخر نفس. وهي تنبض من نفسها بفضل خلايا ناظمة تولد الاشارة داخل القلب، فلو قطعت كل اعصابه استمر ينبض.',
          en: 'The middle block. It never obeys your order and never tires: it contracts about a hundred thousand times a day, from the fourth week in your mother to your last breath. It beats of its own accord thanks to pacemaker cells that make the signal inside the heart, so even if every nerve to it were cut it would keep beating.'
        }
      },
      {
        ar: 'العضلة الملساء', en: 'Smooth muscle', x: 84, y: 17, side: 'right', go: 'autonomic',
        desc: {
          ar: 'الكتلة اليمنى، وهي المنسية. لا تطيع امرك ولا تراها تعمل، لكنها تشتغل فيك الان: تدفع الطعام في الامعاء بموجات، وتضيق الشرايين فيرتفع الضغط، وتفرغ المثانة، وتضيق حدقة عينك في الضوء، وتنصب شعرة جلدك في البرد.',
          en: 'The block on the right, the forgotten one. It never obeys your order and you never see it work, yet it is working in you now: it pushes food along the gut in waves, narrows the arteries so blood pressure rises, empties the bladder, shrinks the pupil in bright light and stands the hair up on your skin in the cold.'
        }
      },
      {
        ar: 'خلية مغزلية بلا تخطيط', en: 'Spindle-shaped cell, unstriated', x: 76, y: 34, side: 'right',
        desc: {
          ar: 'خلية الملساء مغزل مدبب الطرفين عريض الوسط، وسطحها املس تماما بلا خطوط. خيوط الانقباض فيها موجودة لكنها مبعثرة بزوايا مائلة لا في صفوف منتظمة، ولهذا لا يظهر تخطيط. غياب الخطوط هو العلامة القاطعة للعضلة الملساء.',
          en: 'A smooth muscle cell is a spindle, tapered at both ends and broad in the middle, and its surface is entirely smooth with no bands. Its contractile filaments are there but scattered at angles rather than set in ordered rows, so no striation shows. The absence of stripes is the decisive sign of smooth muscle.'
        }
      },
      {
        ar: 'نواة الخلية الملساء', en: 'Nucleus of a smooth muscle cell', x: 87.5, y: 41.5, side: 'right',
        desc: {
          ar: 'نواة بيضاوية واحدة تجلس في وسط الخلية تماما. خلية الملساء صغيرة ونواتها واحدة، بخلاف الليف الهيكلي متعدد الانوية. وحين تنقبض الخلية تلتف النواة على نفسها كالبرغي.',
          en: 'A single oval nucleus sitting exactly in the middle of the cell. A smooth muscle cell is small and has just one nucleus, unlike the many-nucleated skeletal fibre. When the cell contracts, the nucleus twists on itself like a corkscrew.'
        }
      },
      {
        ar: 'نواة في وسط الليف القلبي', en: 'Central nucleus of a cardiac fibre', x: 57, y: 47.5, side: 'right',
        desc: {
          ar: 'خلية عضلة القلب لها نواة واحدة او اثنتان في المنتصف لا على الحافة. اجمعها مع التفرع ومع القرص البيني فتكون عندك الثلاث علامات التي تميز عضلة القلب عن الهيكلية عند اول نظرة تحت المجهر.',
          en: 'A heart muscle cell has one or two nuclei in the centre rather than at the rim. Put that together with the branching and the intercalated disc and you have the three signs that separate cardiac from skeletal muscle at first glance under the microscope.'
        }
      },
      {
        ar: 'صفائح متشابكة', en: 'Interlacing sheets', x: 78, y: 66, side: 'right', go: 'bladder',
        desc: {
          ar: 'خلايا الملساء لا تقف صفا واحدا بل ترص متداخلة، طرف كل خلية بين وسطي جارتيها، في صفائح تلتف حول التجويف. ولهذا حين تنقبض الصفيحة تضيق الانبوب او تفرغ الكيس كله بانتظام: امعاء او شريان او مثانة.',
          en: 'Smooth muscle cells do not stand in a single row: they pack overlapping, the tip of each cell lying between the bellies of its neighbours, in sheets that wrap around a cavity. So when the sheet contracts it narrows the tube or empties the sac evenly, whether gut, artery or bladder.'
        }
      },
      {
        ar: 'مكبّر: القرص البيني', en: 'Close-up: intercalated disc', x: 50, y: 88, side: 'right',
        desc: {
          ar: 'الاطار الاوسط في الصف السفلي يقرب موضع اللقاء بين خليتين قلبيتين: خط متعرج كاسنان المشط يزيد مساحة التماس فيقوى الالتحام ويعبر التيار اسرع. هذا التعرج هو سر ان القلب لا ينفك عند كل نبضة.',
          en: 'The middle frame in the bottom row brings the meeting point of two heart cells close: a zigzag line like comb teeth that enlarges the contact area, strengthening the bond and speeding the current across. That zigzag is why the heart does not tear apart with every beat.'
        }
      }
    ],
    desc: {
      ar: 'ليست في الجسم عضلة واحدة بل ثلاث، ولكل واحدة سيد. العضلة الهيكلية مخططة وإرادية تطيع أمرك وتحرك عظامك، وهي وحدها التي تتعب. وعضلة القلب مخططة كذلك لكنها لا إرادية ولا تتعب أبداً، وتنبض من نفسها بفضل خلايا ناظمة داخل القلب، وتصل خلاياها أقراص بينية تنقل الكهرباء من خلية إلى خلية فينقبض القلب ككتلة واحدة. والعضلة الملساء لا إرادية أيضاً وهي المنسية: خلايا مغزلية بلا تخطيط ترص في صفائح متشابكة في جدران الأمعاء والشرايين والمثانة والرحم والقصبات وحتى في جلدك. وهذه الصورة تجمع الثلاثة جنباً إلى جنب، وتحت كل واحدة مكبّر يظهر علامتها الفارقة.',
      en: 'The body does not have one muscle but three, and each answers to a different master. Skeletal muscle is striated and voluntary: it obeys your order, moves your bones, and it alone tires. Cardiac muscle is striated too, but involuntary and never tiring; it beats of its own accord thanks to pacemaker cells inside the heart, and its cells are joined by intercalated discs that carry the current from cell to cell so the heart contracts as a single mass. Smooth muscle is involuntary as well, and it is the forgotten one: spindle cells without striations, packed in interlacing sheets in the walls of the gut, the arteries, the bladder, the womb, the airways and even your skin. This picture sets the three side by side, with a close-up beneath each showing its distinguishing mark.'
    },
    func: {
      ar: 'الهيكلية تحرك العظام والوجه والتنفس وتحفظ وضع الجسم، وهي سريعة قوية لكنها تتعب. والقلبية تدفع الدم في الدورة الدموية طوال العمر بلا توقف وبلا تعب، وتنقبض ككتلة واحدة بفضل الأقراص البينية. والملساء تحرك الطعام في الأمعاء بالتموّج، وتضبط قطر الشرايين فترفع ضغط الدم أو تخفضه، وتفرّغ المثانة، وتطلق الرحم في الولادة، وتضيّق حدقة العين، وتنصب شعر الجلد، وتضيّق القصبات. وهي بطيئة الانقباض لكنها تصمد منقبضة زمناً طويلاً بطاقة قليلة جداً — ولهذا يبقى الشريان مشدوداً طوال اليوم بلا أن يتعب.',
      en: 'Skeletal muscle moves the bones, the face and the breath and holds the body upright; it is fast and strong but it tires. Cardiac muscle drives the blood around the circulation for a lifetime without pause and without fatigue, contracting as one mass thanks to its intercalated discs. Smooth muscle moves food along the gut in waves, sets the calibre of the arteries and so raises or lowers blood pressure, empties the bladder, delivers the baby from the womb, narrows the pupil, raises the hairs of the skin and tightens the airways. It contracts slowly, but it can hold a contraction for a very long time on very little energy, which is why an artery stays taut all day without tiring.'
    },
    location: { ar: 'الهيكلية معلقة على العظام في كل الجسم، والقلبية في جدار القلب وحده، والملساء في جدران الأعضاء المجوفة والأوعية والقصبات وفي الجلد حول بصيلات الشعر', en: 'Skeletal muscle is slung on the bones throughout the body, cardiac muscle is in the wall of the heart alone, and smooth muscle lies in the walls of hollow organs, vessels and airways and in the skin around hair follicles' },
    size: { ar: 'ليف العضلة الهيكلية بعرض ١٠ إلى ١٠٠ ميكرون وقد يصل طوله إلى ٣٠ سم، وخلية عضلة القلب نحو ١٠٠ ميكرون طولاً، وخلية العضلة الملساء ٢٠ إلى ٢٠٠ ميكرون. والعضلات الهيكلية وحدها تشكّل نحو ٤٠٪ من وزن الجسم', en: 'A skeletal muscle fibre is 10 to 100 microns wide and may run up to 30 cm long; a cardiac cell is about 100 microns long; a smooth muscle cell 20 to 200 microns. Skeletal muscle alone makes up roughly 40 per cent of body weight' },
    short: { ar: 'ثلاث عضلات لا واحدة: واحدة تطيعك واثنتان تعملان بلا إذنك', en: 'Three muscles, not one: one obeys you and two work without asking' },
    parts: [
      { ar: 'العضلة الهيكلية المخططة الإرادية', en: 'Striated voluntary skeletal muscle' },
      { ar: 'عضلة القلب المخططة اللاإرادية', en: 'Striated involuntary cardiac muscle' },
      { ar: 'العضلة الملساء اللاإرادية', en: 'Involuntary smooth muscle' },
      { ar: 'الأقراص البينية الواصلة بين خلايا القلب', en: 'The intercalated discs joining the heart cells' }
    ],
    diseases: [
      { name: { ar: 'التشنّج العضلي', en: 'Muscle cramp' }, desc: { ar: 'انقباض مفاجئ مؤلم في عضلة هيكلية لا يرتخي، غالباً من نقص السوائل أو الأملاح أو الإجهاد', en: 'A sudden painful contraction of a skeletal muscle that will not let go, usually from lack of fluid or salts, or from overwork' } },
      { name: { ar: 'الضمور العضلي', en: 'Muscular dystrophy' }, desc: { ar: 'مرض وراثي تتلف فيه ألياف العضلة الهيكلية تدريجياً فتضعف الحركة مع الوقت', en: 'An inherited disease in which skeletal muscle fibres break down bit by bit, so movement weakens over the years' } },
      { name: { ar: 'اعتلال عضلة القلب', en: 'Cardiomyopathy' }, desc: { ar: 'ضعف أو تضخم في عضلة القلب نفسها فيقل ما تدفعه من دم مع كل نبضة', en: 'The heart muscle itself weakens or thickens, so each beat pushes out less blood' } },
      { name: { ar: 'متلازمة القولون العصبي', en: 'Irritable bowel syndrome' }, desc: { ar: 'خلل في حركة العضلة الملساء في الأمعاء، فتنقبض بقوة أو ببطء غير معتاد، ويشعر المريض بمغص وانتفاخ وتبدّل في التبرّز', en: 'A disorder of smooth muscle movement in the gut, contracting too hard or too slowly, giving cramps, bloating and changed bowel habit' } },
      { name: { ar: 'الربو', en: 'Asthma' }, desc: { ar: 'تقلّص العضلة الملساء المحيطة بالقصبات فتضيق مجاري الهواء ويصعب الزفير مع أزيز', en: 'The smooth muscle around the airways tightens, narrowing them so breathing out becomes hard and wheezy' } }
    ]
  },

/* ---------- الحاجز الدموي الدماغي ---------- */
  {
    id: 'bbb', type: 'organ', system: 'nervous',
    name: { ar: 'الحاجز الدموي الدماغي', en: 'The blood-brain barrier' },
    img: 'img/bbb.webp', imgBack: 'img/bbb-back.webp', thumb: 'img/thumb-bbb.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الغشاء القاعدي', en: 'Basement membrane', x: 18, y: 14, side: 'left',
        desc: {
          ar: 'الشريط الذهبي الرقيق الملتف حول الشعيرة من الخارج. حصيرة من بروتينات متشابكة تسند الخلايا البطانية وتثبتها في مكانها، وتشكل طبقة عزل ثانية بعد الجدار نفسه. ثقب هذا الغشاء في بعض الامراض هو اول خطوة في انهيار الحاجز.',
          en: 'The thin golden band wrapped around the outside of the capillary. It is a mat of interwoven proteins that supports the endothelial cells and holds them in place, forming a second layer of insulation behind the wall itself. Breaching it is the first step in the collapse of the barrier in several diseases.'
        }
      },
      {
        ar: 'الخلية الحوطية', en: 'Pericyte', x: 40, y: 20, side: 'left',
        desc: {
          ar: 'الخلية الممدودة ذات النواة الداكنة الكبيرة، ملقاة على السطح الخارجي للشعيرة تحتضنها. تنقبض قليلا فتضبط اتساع الشعيرة وسرعة الدم فيها، وتساعد على شد الوصلات المحكمة. الشعيرات في الدماغ اغنى بهذي الخلايا من اي مكان اخر في الجسم.',
          en: 'The elongated cell with the large dark nucleus, lying along the outer surface of the capillary and hugging it. It contracts slightly to set the width of the vessel and the speed of blood through it, and it helps keep the tight junctions tight. Brain capillaries carry more of these cells than anywhere else in the body.'
        }
      },
      {
        ar: 'وصلة محكمة', en: 'Tight junction', x: 35, y: 27.7, side: 'left', go: 'cell',
        desc: {
          ar: 'العقدة الزرقاء الداكنة حيث تلتقي خليتان بطانيتان. في بقية الجسم يترك الجدار ثغرات بين خلاياه تمر منها المواد بحرية، اما هنا فالخليتان ملحومتان بشريط مغلق تماما بلا ثغرة. هذي الوصلة وحدها هي جوهر الحاجز.',
          en: 'The dark blue knot where two endothelial cells meet. Elsewhere in the body the wall leaves gaps between its cells through which substances pass freely; here the two cells are welded by a completely sealed band with no gap at all. This junction alone is the essence of the barrier.'
        }
      },
      {
        ar: 'تجويف الشعيرة', en: 'Capillary lumen', x: 31, y: 35, side: 'left',
        desc: {
          ar: 'المجرى الاحمر في الوسط، وفيه الدم كله بما يحمل: غذاء ودواء وسموم وجراثيم وخلايا مناعية. كل هذا يمر بجانب الدماغ ولا يدخله. الشعيرة هنا ضيقة جدا حتى ان الكرية الحمراء تمر منها واحدة واحدة.',
          en: 'The red channel down the middle, carrying all of the blood and everything in it: nutrients, drugs, toxins, germs and immune cells. All of that passes beside the brain without entering it. The capillary here is so narrow that red cells must file through one at a time.'
        }
      },
      {
        ar: 'الخلية البطانية', en: 'Endothelial cell', x: 42, y: 56, side: 'left', go: 'vessel-types',
        desc: {
          ar: 'الخلية الوردية المفلطحة ذات النواة البنفسجية، وهي حجر الجدار. في الدماغ تختلف عن اخواتها في باقي الجسم: اقل نوافذ واقل حويصلات نقل، وفيها مضخات ترمي بالمواد الغريبة راجعة الى الدم حتى لو تسللت. جدار من خلية واحدة سمكا، ومع هذا هو اقوى سور في الجسم.',
          en: 'The flattened pink cell with the violet nucleus: the stone of the wall. In the brain it differs from its sisters elsewhere: fewer windows, fewer transport vesicles, and pumps that throw foreign substances back into the blood even if they slip in. A wall one cell thick, and yet the strongest rampart in the body.'
        }
      },
      {
        ar: 'قدم الخلية النجمية', en: 'Astrocyte end foot', x: 29, y: 63, side: 'left',
        desc: {
          ar: 'التوسع البنفسجي العريض الذي يلتف على الشعيرة من الخارج ويغطيها. الخلايا النجمية تمد اقدامها فتغلف نحو كل سطح الشعيرة، فتضيف طبقة ثالثة، وترسل اشارات للخلايا البطانية تامرها ان تبقي وصلاتها محكمة. من غير هذي الاقدام يرتخي الحاجز.',
          en: 'The broad violet expansion that wraps around the capillary from outside and covers it. Astrocytes reach their feet out until they sheathe almost the whole surface of the vessel, adding a third layer, and they signal the endothelial cells to keep their junctions sealed. Without these feet the barrier slackens.'
        }
      },
      {
        ar: 'الخلية النجمية', en: 'Astrocyte', x: 23, y: 88, side: 'left', go: 'nervous',
        desc: {
          ar: 'الخلية الكبيرة النجمية الشكل التي تشع منها فروع في كل اتجاه، ونواتها متوهجة في وسطها. هي خادمة الخلايا العصبية: تغذيها وتنظف ما حولها وتضبط الاملاح، وواحد من فروعها يمد قدمه على الشعيرة الدموية. في دماغك منها اكثر مما فيه من خلايا عصبية.',
          en: 'The large star-shaped cell with branches radiating in every direction and a glowing nucleus at its centre. It is the servant of the nerve cells: it feeds them, cleans around them and balances the salts, and one of its branches lays a foot on the capillary. Your brain holds more of these than it holds neurons.'
        }
      },
      {
        ar: 'خلية عصبية في نسيج الدماغ', en: 'Neuron in the brain tissue', x: 91, y: 12, side: 'right', go: 'neuron',
        desc: {
          ar: 'خلية عصبية في النسيج المحيط بالشعيرة، بعيدة عن جدارها. هي المستفيد الاول من الحاجز: عملها كله كهرباء دقيقة بالغة الحساسية، واي تغير بسيط في املاح ما حولها او دخول مادة غريبة يشوش اشاراتها. الحاجز موجود لاجلها هي.',
          en: 'A nerve cell in the tissue around the capillary, away from its wall. It is the first beneficiary of the barrier: its whole work is fine and extremely delicate electricity, and the slightest change in the salts around it, or the entry of a foreign substance, scrambles its signals. The barrier exists for its sake.'
        }
      },
      {
        ar: 'جزيء كبير يُرفض', en: 'A large molecule turned away', x: 83, y: 38.5, side: 'right',
        desc: {
          ar: 'السهم الاحمر وعلامة المنع عند الجدار. الجزيء الكبير او الذائب في الماء لا يجد ثغرة يعبر منها ولا ناقلا يحمله، فيرتد راجعا الى الدم. وهذا بالذات يفسر نصف الطب العصبي: اكثر الادوية والمضادات الحيوية لا تصل الدماغ.',
          en: 'The red arrow and the blocked sign at the wall. A molecule that is large, or dissolved in water, finds neither a gap to slip through nor a carrier to lift it, so it bounces back into the blood. This one fact explains half of neurology: most drugs and antibiotics never reach the brain.'
        }
      },
      {
        ar: 'كرية دم حمراء', en: 'Red blood cell', x: 57, y: 55, side: 'right', go: 'blood',
        desc: {
          ar: 'القرص الاحمر المقعر الوجهين الذي يحمل الاكسجين. الاكسجين نفسه يعبر جدار الشعيرة بلا عناء لانه صغير وذائب في الدهن، اما الكرية الحاملة له فلا تخرج ابدا. الدماغ ياخذ خمس اكسجين الجسم كله وهو لا يزن الا نحو اثنين في المئة من وزنك.',
          en: 'The red biconcave disc that carries oxygen. Oxygen itself crosses the capillary wall effortlessly because it is small and fat-soluble, but the cell carrying it never leaves. The brain takes a fifth of the whole body oxygen supply while weighing only about two per cent of you.'
        }
      },
      {
        ar: 'جزيء كبير يبقى في الدم', en: 'A large molecule staying in the blood', x: 82, y: 64, side: 'right', go: 'immunity',
        desc: {
          ar: 'التكتل البنفسجي على شكل حرف Y بين الكريات الحمراء: جسم مضاد او دواء بروتيني كبير. حجمه وحده يمنعه، فيدور في الدم ويمر بالدماغ مرة بعد مرة ولا يدخله. ولهذا يصعب علاج التهابات الدماغ واورامه بادوية تنفع في بقية الجسم.',
          en: 'The violet Y-shaped cluster among the red cells: an antibody or a large protein drug. Its size alone bars it, so it circles in the blood and passes the brain time after time without entering. This is why infections and tumours of the brain resist drugs that work everywhere else.'
        }
      },
      {
        ar: 'جزيء صغير عبر إلى الدماغ', en: 'A small molecule that crossed into the brain', x: 65, y: 72.6, side: 'right',
        desc: {
          ar: 'الحبة الملونة الصغيرة التي نزلت مع السهم الى الجانب الاخر. لا يعبر الا صنفان: الصغير الذائب في الدهن كالاكسجين وثاني اكسيد الكربون، وما له ناقل مخصص في جدار الخلية كالجلوكوز. ومن هنا تعبر ايضا الكحول والنيكوتين والمخدرات لانها ذائبة في الدهن، ولهذا تصل الراس بسرعة.',
          en: 'The small coloured bead that has come down with the arrow to the other side. Only two kinds cross: the small and fat-soluble, such as oxygen and carbon dioxide, and those with a dedicated carrier built into the cell wall, such as glucose. Alcohol, nicotine and drugs of abuse cross here too because they dissolve in fat, which is why they reach the head so fast.'
        }
      },
      {
        ar: 'محور عصبي مغلف بالميلين', en: 'Myelinated axon', x: 56, y: 81, side: 'right', go: 'brain',
        desc: {
          ar: 'الانبوب الفاتح المقسم الى مقاطع متتابعة كحبات مسبحة: محور عصبي ملفوف بغلاف الميلين الدهني. الميلين عازل يقفز عليه التيار من فجوة الى فجوة فتسرع الاشارة عشرات المرات. وحين ينهار الحاجز وتدخل خلايا المناعة قد تهاجم هذا الغلاف بالذات.',
          en: 'The pale tube divided into successive segments like beads on a string: a nerve axon wrapped in a fatty myelin sheath. Myelin is an insulator over which the current leaps from gap to gap, speeding the signal many times over. When the barrier fails and immune cells get in, it is this sheath they tend to attack.'
        }
      }
    ],
    desc: {
      ar: 'الدماغ يعيش خلف سور. شعيرات الجسم كلها تترك ثغرات بين خلايا جدارها تمر منها المواد ذهاباً وإياباً، أما شعيرات الدماغ فخلاياها البطانية ملحومة بعضها ببعض بوصلات محكمة لا ثغرة فيها، ويلفّها غشاء قاعدي، وتحتضنها خلايا حوطية، وتغطيها من الخارج أقدام الخلايا النجمية. فلا يعبر إلى الدماغ إلا صنفان: ما هو صغير وذائب في الدهن كالأكسجين، وما له ناقل مخصّص يحمله عبر الجدار كالجلوكوز. وكل ما عدا ذلك — من جراثيم وسموم وأدوية وأجسام مضادة — يمرّ بجانب الدماغ في الدم ولا يدخله.',
      en: 'The brain lives behind a wall. Capillaries everywhere else in the body leave gaps between the cells of their wall through which substances pass back and forth; in the brain the endothelial cells are welded to one another by tight junctions with no gap at all, wrapped in a basement membrane, hugged by pericytes and covered from outside by the end feet of astrocytes. So only two kinds of thing get into the brain: what is small and dissolves in fat, such as oxygen, and what has a dedicated carrier to lift it across, such as glucose. Everything else, from germs and toxins to drugs and antibodies, passes beside the brain in the blood and never enters.'
    },
    func: {
      ar: 'يحفظ للدماغ بيئة ثابتة تماماً: تركيز أملاح ثابت وسكر ثابت، فالخلية العصبية تعمل بفروق كهربائية دقيقة لا تحتمل تقلّب ما حولها. ويمنع دخول الجراثيم والسموم والهرمونات والنواقل الجائلة في الدم حتى لا تعبث بإشارات الدماغ. ويسمح في المقابل بمرور ما يلزم عبر ناقلات مخصّصة: الجلوكوز وقوداً وحيداً للدماغ، والأحماض الأمينية، وينفذ الأكسجين وثاني أكسيد الكربون بذوبانهما في الدهن. وهذا نفسه هو أكبر عقبة في الطب: أغلب الأدوية لا تعبره، فيصعب علاج التهابات الدماغ وأورامه، بينما تعبره الكحول والنيكوتين والمخدرات بسهولة لأنها ذائبة في الدهن.',
      en: 'It keeps the brain in an utterly steady environment: a fixed concentration of salts and of sugar, because a nerve cell works on fine electrical differences that cannot tolerate a shifting background. It bars germs, toxins, hormones and the messengers circulating in the blood so that they cannot meddle with the brain signals. In exchange it lets what is needed through by dedicated carriers: glucose, the only fuel the brain uses, and the amino acids, while oxygen and carbon dioxide simply dissolve through the fat. That same tightness is medicine greatest obstacle: most drugs cannot cross, so brain infections and tumours are hard to treat, while alcohol, nicotine and drugs of abuse cross with ease because they dissolve in fat.'
    },
    location: { ar: 'في جدران الشعيرات الدموية داخل الدماغ والنخاع الشوكي كلها، وطولها في دماغ واحد نحو ٦٠٠ كيلومتر من الشعيرات', en: 'In the walls of every capillary inside the brain and spinal cord, some 600 kilometres of capillary in a single brain' },
    size: { ar: 'الشعيرة نحو ٧ ميكرون قطراً، وجدارها من خلية واحدة سمكها أقل من نصف ميكرون، ولا يعبرها عادة إلا ما وزنه الجزيئي دون ٤٠٠ إلى ٥٠٠ دالتون', en: 'The capillary is about 7 microns across, its wall a single cell less than half a micron thick, and as a rule nothing crosses it unless its molecular weight is under 400 to 500 daltons' },
    short: { ar: 'سور حول الدماغ: لا يعبره إلا الصغير الذائب في الدهن أو من يحمله ناقل', en: 'A wall around the brain: only the small and fat-soluble, or whatever a carrier lifts across' },
    parts: [
      { ar: 'الخلايا البطانية والوصلات المحكمة بينها', en: 'The endothelial cells and the tight junctions between them' },
      { ar: 'الغشاء القاعدي المحيط بالشعيرة', en: 'The basement membrane around the capillary' },
      { ar: 'الخلايا الحوطية الملتصقة بالجدار من الخارج', en: 'The pericytes clinging to the outside of the wall' },
      { ar: 'أقدام الخلايا النجمية التي تغلّف الشعيرة', en: 'The astrocyte end feet sheathing the capillary' }
    ],
    diseases: [
      { name: { ar: 'التهاب السحايا', en: 'Meningitis' }, desc: { ar: 'التهاب أغشية الدماغ بجرثومة أو فيروس، ويصعب علاجه لأن كثيراً من المضادات الحيوية لا تعبر الحاجز فيلزم اختيار ما يعبره وبجرعات عالية', en: 'Inflammation of the coverings of the brain by a germ or a virus; it is hard to treat because many antibiotics cannot cross the barrier, so only the few that do can be used, and in high doses' } },
      { name: { ar: 'الوذمة الدماغية', en: 'Cerebral oedema' }, desc: { ar: 'تسرّب الماء إلى نسيج الدماغ حين يتضرّر الحاجز بعد رضّة أو جلطة أو التهاب، فينتفخ الدماغ داخل الجمجمة المغلقة ويرتفع الضغط', en: 'Water leaks into the brain tissue when the barrier is damaged after a blow, a stroke or an infection, so the brain swells inside the closed skull and the pressure rises' } },
      { name: { ar: 'التصلّب المتعدّد', en: 'Multiple sclerosis' }, desc: { ar: 'ينهار الحاجز في مواضع متفرّقة فتعبر خلايا المناعة إلى الدماغ وتهاجم غلاف الميلين حول المحاور، فتبطؤ الإشارات وتضطرب الحركة والإحساس والبصر', en: 'The barrier breaks down in scattered places, letting immune cells into the brain to attack the myelin sheath around the axons, so signals slow and movement, sensation and vision falter' } },
      { name: { ar: 'صعوبة إيصال الأدوية لأورام الدماغ', en: 'Difficulty delivering drugs to brain tumours' }, desc: { ar: 'أغلب أدوية العلاج الكيميائي جزيئات كبيرة لا تعبر الحاجز، فلا تصل إلى الورم بتركيز كافٍ رغم نجاحها في أورام باقي الجسم', en: 'Most chemotherapy drugs are large molecules that cannot cross the barrier, so they never reach the tumour in sufficient concentration even though they work on tumours elsewhere' } },
      { name: { ar: 'الاعتلال الدماغي الكبدي', en: 'Hepatic encephalopathy' }, desc: { ar: 'حين يعجز الكبد عن تنقية الدم تتراكم الأمونيا، وهي صغيرة تعبر الحاجز بسهولة، فتسمّم الدماغ ويرتبك الوعي', en: 'When the liver fails to clean the blood, ammonia builds up; being small it crosses the barrier easily, poisons the brain and clouds consciousness' } }
    ]
  },

/* ---------- التئام الجرح ---------- */
  {
    id: 'wound-healing', type: 'organ', system: 'skin',
    name: { ar: 'التئام الجرح', en: 'Wound healing' },
    img: 'img/wound-healing.webp', imgBack: 'img/wound-healing-back.webp', thumb: 'img/thumb-wound-healing.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'البشرة', en: 'Epidermis', x: 14, y: 14.5, side: 'left', go: 'skin',
        desc: {
          ar: 'الشريط الفاتح في اعلى المقطع. طبقة خلايا متراصة بلا اوعية دموية، تتجدد من اسفلها وتتقشر من اعلاها كل شهر تقريبا. وهي التي يجب ان تلتقي حافتاها فوق الجرح حتى يقال ان الجرح اغلق.',
          en: 'The pale band at the top of the section. A layer of packed cells with no blood vessels of its own, renewed from below and shed from above roughly every month. It is the edges of this layer that must meet over the wound before the wound can be called closed.'
        }
      },
      {
        ar: 'المرحلة الأولى: الجرح الطازج والإرقاء', en: 'Stage one: the fresh wound and haemostasis', x: 27, y: 21, side: 'left', go: 'clotting',
        desc: {
          ar: 'الكتلة الاولى: قطع عميق مفتوح ينزل عبر البشرة والادمة حتى يبلغ الدهن. في اول دقائق تضيق الاوعية المقطوعة وتتجمع الصفيحات وتشتبك خيوط الفيبرين فتسد الفتحة بجلطة. هذي الجلطة ليست غطاء فقط، بل شبكة تمشي عليها خلايا الاصلاح فيما بعد.',
          en: 'The first block: a deep open cut running through epidermis and dermis down to the fat. In the first minutes the cut vessels narrow, platelets gather and fibrin threads knit together to plug the opening with a clot. That clot is not merely a lid but a scaffold on which the repair cells will later walk.'
        }
      },
      {
        ar: 'بصيلة شعر وغدتها الدهنية', en: 'Hair follicle and its sebaceous gland', x: 12, y: 27.5, side: 'left', go: 'hair-follicle',
        desc: {
          ar: 'الجراب المائل الذي ينبت منه الشعر، وبجانبه فصان صغيران هما الغدة الدهنية. لهما دور خفي في الالتئام: خلايا جدار البصيلة تصعد الى السطح وتساعد على تغطية الجرح. ولذلك يلتئم الجرح السطحي في فروة الراس اسرع منه في الكف.',
          en: 'The slanting sac from which the hair grows, with two small lobes beside it, the sebaceous gland. They play a hidden part in healing: cells from the follicle wall climb to the surface and help cover the wound. This is why a shallow wound on the scalp heals faster than one on the palm.'
        }
      },
      {
        ar: 'الأدمة', en: 'Dermis', x: 40, y: 35, side: 'left', go: 'skin-receptors',
        desc: {
          ar: 'الطبقة الوردية السميكة تحت البشرة، وفيها الاوعية والاعصاب والبصيلات والغدد، وشبكة من الياف الكولاجين المتشابكة تعطي الجلد متانته ومرونته. الجرح الذي يقف عند البشرة يشفى بلا اثر، والذي ينزل الى الادمة يترك ندبة.',
          en: 'The thick pink layer beneath the epidermis, holding the vessels, the nerves, the follicles and the glands, and a net of interwoven collagen fibres that gives skin its toughness and give. A wound that stops at the epidermis heals without a trace; one that reaches the dermis leaves a scar.'
        }
      },
      {
        ar: 'الطبقة الدهنية تحت الجلد', en: 'Subcutaneous fat', x: 18, y: 42, side: 'left',
        desc: {
          ar: 'الحبات الصفراء في اسفل المقطع. وسادة عازلة تخزن الطاقة وتحمي ما تحتها من الصدمات. الجرح الذي يفتح حتى هذي الطبقة عميق، ويحتاج غالبا الى خياطة لان حافتيه ابعد من ان تلتقيا وحدهما.',
          en: 'The yellow globules at the bottom of the section. An insulating cushion that stores energy and protects what lies beneath from knocks. A wound opening down to this layer is a deep one, and usually needs stitching because its edges are too far apart to meet on their own.'
        }
      },
      {
        ar: 'زحف البشرة من الحافتين', en: 'Epidermis creeping in from both edges', x: 21, y: 60, side: 'left',
        desc: {
          ar: 'انظر حافة الجرح في الكتلة الثالثة: البشرة تنزلق من الجانبين على وجه النسيج الجديد كطبقة رقيقة تزحف تحت القشرة. تمشي الخلايا حتى تلتقي بمثيلاتها القادمة من الحافة الاخرى، فتتوقف فورا وتبدا في التسمك. تسمى هذي القاعدة كف التلامس، وفقدانها هو ما يجعل خلية السرطان لا تعرف متى تقف.',
          en: 'Look at the edge of the wound in the third block: the epidermis slides in from both sides across the face of the new tissue, a thin sheet creeping under the scab. The cells travel until they meet their counterparts coming from the other edge, then stop at once and start to thicken. This rule is called contact inhibition, and its loss is why a cancer cell never knows when to halt.'
        }
      },
      {
        ar: 'المرحلة الثالثة: النسيج الحبيبي', en: 'Stage three: granulation tissue', x: 26, y: 74, side: 'left',
        desc: {
          ar: 'الكتلة الثالثة: الفجوة قد امتلات نسيجا ورديا محببا كحبات الرمان الصغيرة. لونه الاحمر الزاهي من كثرة الشعيرات الجديدة فيه، وحبيباته هي رؤوس هذي الشعيرات. نسيج مؤقت لكنه علامة طيبة: الجرح الذي يمتلئ به يشفى، والذي يبقى شاحبا لا يشفى.',
          en: 'The third block: the gap has filled with pink tissue grained like small pomegranate seeds. Its bright red comes from the mass of new capillaries within it, and its grains are the heads of those capillaries. It is temporary tissue, but a good sign: a wound that fills with it heals, and one that stays pale does not.'
        }
      },
      {
        ar: 'أرومات ليفية تنسج الكولاجين', en: 'Fibroblasts laying down collagen', x: 35, y: 80, side: 'left', go: 'cell',
        desc: {
          ar: 'الخلايا المغزلية المبعثرة في الادمة حول الجرح. هي نساجو الجسم: تهاجر الى الفجوة وتفرز خيوط الكولاجين الواحد فوق الاخر حتى تملا المكان وتشد الحافتين حتى تتقاربا. وبعضها ينقبض فعلا فيسحب حافتي الجرح نحو بعضهما.',
          en: 'The spindle cells scattered in the dermis around the wound. They are the weavers of the body: they migrate into the gap and lay down collagen thread upon thread until it is filled, drawing the two edges closer. Some of them actually contract and pull the wound edges toward one another.'
        }
      },
      {
        ar: 'المرحلة الثانية: الالتهاب', en: 'Stage two: inflammation', x: 70, y: 14, side: 'right', go: 'immunity',
        desc: {
          ar: 'الكتلة الثانية: الجلطة قد جفت فوق السطح وصارت قشرة داكنة، والنسيج حولها محتقن احمر. الاحمرار والحرارة والورم والالم ليست خللا بل هي عمل يجري: الاوعية توسعت عمدا وتسربت لتحمل الخلايا المناعية الى موضع الاصابة.',
          en: 'The second block: the clot has dried on the surface into a dark scab, and the tissue around it is engorged and red. Redness, heat, swelling and pain are not a fault but work in progress: the vessels have widened and leaked on purpose to bring immune cells to the injured spot.'
        }
      },
      {
        ar: 'خلايا مناعية', en: 'Immune cells', x: 66, y: 26, side: 'right', go: 'blood',
        desc: {
          ar: 'الحبات الفاتحة المزدحمة حول الجرح، خرجت من الدم وعبرت جدران الاوعية الى النسيج. اولها العدلات تاكل الجراثيم في اول يومين، ثم تخلفها البلعميات فتنظف الانسجة الميتة وتطلق اشارات تستدعي بناة النسيج الجديد. جرح لا يمر بهذي المرحلة يتقيح.',
          en: 'The pale beads crowding around the wound, which have left the blood and crossed the vessel walls into the tissue. Neutrophils come first and eat bacteria in the first two days, then macrophages take over, clearing the dead tissue and releasing signals that summon the builders of the new tissue. A wound that skips this stage turns septic.'
        }
      },
      {
        ar: 'شعيرات دموية جديدة', en: 'New capillaries', x: 78, y: 33, side: 'right', go: 'vessel-types',
        desc: {
          ar: 'الفروع الحمراء الرفيعة التي تتجه نحو الجرح. الاوعية القديمة تبرعم فروعا جديدة تزحف الى الفجوة لتحمل الاكسجين والغذاء الى ورشة البناء. ولهذا يتاخر التئام الجرح في القدم السكرية او في ساق ضعيفة التروية: البناء بلا امداد لا يتم.',
          en: 'The fine red branches heading toward the wound. Old vessels sprout new branches that creep into the gap to bring oxygen and nourishment to the building site. This is why a wound heals so slowly on a diabetic foot or a poorly supplied leg: no construction finishes without supply.'
        }
      },
      {
        ar: 'المرحلة الرابعة: الندبة', en: 'Stage four: the scar', x: 72, y: 70, side: 'right',
        desc: {
          ar: 'الكتلة الرابعة: السطح مغلق والنسيج الحبيبي قد استبدل بندبة شاحبة مسطحة. هنا يعاد ترتيب الكولاجين على مدى شهور: تحل خيوط قوية محل الضعيفة وتصطف باتجاه الشد، فتقوى الندبة تدريجيا ويخف لونها من الاحمر الى الابيض.',
          en: 'The fourth block: the surface is closed and the granulation tissue has been replaced by a pale flat scar. Over months the collagen is now rearranged: strong threads replace weak ones and line up along the direction of pull, so the scar strengthens by degrees and fades from red to white.'
        }
      },
      {
        ar: 'الندبة بلا بصيلات ولا غدد', en: 'A scar has no follicles and no glands', x: 68, y: 80, side: 'right',
        desc: {
          ar: 'قارن هذا العمود الشاحب بالجلد الى جانبه: لا شعرة ولا غدة دهنية ولا غدة عرق، وكولاجينه خيوط متوازية لا شبكة متشابكة. الندبة ليست جلدا كاملا بل رقعة سريعة: قوتها تبلغ نحو ثمانين في المئة من قوة الجلد الاصلي ولا تعود ابدا كما كانت.',
          en: 'Compare this pale column with the skin beside it: no hair, no oil gland, no sweat gland, and its collagen lies in parallel threads rather than an interwoven net. A scar is not complete skin but a quick patch: it reaches about eighty per cent of the strength of the original skin and never returns to what it was.'
        }
      }
    ],
    desc: {
      ar: 'الجرح لا يشفى دفعة واحدة بل يمرّ بأربع مراحل مرتّبة تراها في هذه الكتل الأربع. أولاً الإرقاء: تضيق الأوعية المقطوعة وتتجمّع الصفيحات ويشتبك الفيبرين فتسدّ الفتحة جلطة تجفّ فتصير قشرة. ثم الالتهاب: تتوسّع الأوعية عمداً وتتسرّب فتصل خلايا المناعة، فتنظّف الجرح من الجراثيم والأنسجة الميتة — والاحمرار والحرارة والورم أعراض عمل لا خلل. ثم التكاثر: يمتلئ الجرح نسيجاً حبيبياً وردياً غنياً بشعيرات جديدة، وتنسج الأرومات الليفية الكولاجين، وتزحف البشرة من الحافتين حتى تلتقيا فيُغلق السطح. وأخيراً إعادة التشكيل: يُعاد ترتيب الكولاجين على مدى شهور فتشتدّ الندبة ويخفّ لونها.',
      en: 'A wound does not heal all at once but passes through four ordered stages, which you can see in these four blocks. First haemostasis: the cut vessels narrow, platelets gather and fibrin knits together to plug the opening with a clot, which dries into a scab. Then inflammation: the vessels deliberately widen and leak so that immune cells arrive to clear the wound of germs and dead tissue, the redness, heat and swelling being signs of work rather than of failure. Then proliferation: the wound fills with pink granulation tissue rich in new capillaries, fibroblasts weave collagen, and the epidermis creeps in from both edges until they meet and the surface closes. Finally remodelling: over months the collagen is rearranged, so the scar strengthens and its colour fades.'
    },
    func: {
      ar: 'إغلاق الفتحة بأسرع ما يمكن قبل أن تدخل منها الجراثيم، ثم استعادة حاجز الجلد. والجسم هنا يختار السرعة على الكمال: يملأ الفجوة بالكولاجين بدل أن يعيد بناء ما كان. ولهذا لا تحمل الندبة بصيلات شعر ولا غدداً دهنية ولا غدد عرق ولا مستقبلات إحساس كاملة، وكولاجينها خيوط متوازية لا شبكة متشابكة كالجلد الأصلي، فقوّتها تبلغ نحو ثمانين في المئة من قوّة الجلد ولا تعود كما كانت. ويبطئ الالتئام: السكّري وضعف التروية والتدخين ونقص التغذية وخصوصاً نقص البروتين وفيتامين ج، والعدوى، والضغط المستمر على الموضع.',
      en: 'To shut the opening as quickly as possible before germs get in, and then to restore the skin barrier. Here the body chooses speed over perfection: it fills the gap with collagen instead of rebuilding what was there. That is why a scar carries no hair follicles, no oil glands, no sweat glands and no full sensory receptors, and why its collagen lies in parallel threads rather than the interwoven net of true skin, so it reaches about eighty per cent of the strength of skin and never returns to what it was. Healing is slowed by diabetes, poor blood supply, smoking, poor nutrition and especially a lack of protein and vitamin C, by infection, and by constant pressure on the site.'
    },
    location: { ar: 'في الجلد بطبقاته الثلاث: البشرة ثم الأدمة ثم الطبقة الدهنية تحتها، وعمق الجرح في هذه الطبقات هو ما يقرّر أيترك ندبة أم لا', en: 'In the skin through its three layers: epidermis, then dermis, then the fat beneath; how deep the wound goes through them decides whether it leaves a scar' },
    size: { ar: 'الإرقاء دقائق، والالتهاب من يوم إلى نحو أربعة أيام، والتكاثر من اليوم الثالث إلى نحو ثلاثة أسابيع، وإعادة التشكيل تستمرّ من شهر إلى سنة أو سنتين. وتبلغ الندبة نحو ٢٠٪ من قوّتها في الأسبوع الثالث و٨٠٪ في نهايتها', en: 'Haemostasis takes minutes, inflammation from one day to about four, proliferation from day three to roughly three weeks, and remodelling continues from a month up to a year or two. A scar has about 20 per cent of its strength at three weeks and 80 per cent at the end' },
    short: { ar: 'أربع مراحل من الجلطة إلى الندبة — والندبة رقعة سريعة لا جلد كامل', en: 'Four stages from clot to scar, and a scar is a quick patch rather than complete skin' },
    parts: [
      { ar: 'الإرقاء: الجلطة تسدّ الفتحة', en: 'Haemostasis: the clot plugs the opening' },
      { ar: 'الالتهاب: خلايا المناعة تنظّف الجرح', en: 'Inflammation: immune cells clean the wound' },
      { ar: 'التكاثر: نسيج حبيبي وكولاجين وزحف البشرة', en: 'Proliferation: granulation tissue, collagen and the creeping epidermis' },
      { ar: 'إعادة التشكيل: ترتيب الكولاجين وشدّ الندبة', en: 'Remodelling: the collagen is rearranged and the scar tightens' }
    ],
    diseases: [
      { name: { ar: 'الجدرة', en: 'Keloid' }, desc: { ar: 'تستمرّ نسج الكولاجين بعد إغلاق الجرح فتنمو الندبة خارج حدود الجرح الأصلي كورم لحمي بارز', en: 'Collagen goes on being laid down after the wound has closed, so the scar grows beyond the borders of the original wound as a raised fleshy lump' } },
      { name: { ar: 'الندبة الضخامية', en: 'Hypertrophic scar' }, desc: { ar: 'ندبة سميكة مرتفعة لكنها تبقى داخل حدود الجرح، وكثيراً ما تخفّ وحدها خلال سنة أو سنتين', en: 'A thick raised scar that nevertheless stays within the borders of the wound, and often settles by itself within a year or two' } },
      { name: { ar: 'القرحة المزمنة', en: 'Chronic ulcer' }, desc: { ar: 'جرح يعلق في مرحلة الالتهاب ولا يتقدّم إلى الالتئام، كقرحة القدم السكّرية أو قرحة الفراش من الضغط المستمر أو قرحة الساق من ضعف التروية', en: 'A wound stuck in the inflammatory stage that never moves on to healing, such as a diabetic foot ulcer, a bedsore from constant pressure, or a leg ulcer from poor blood supply' } },
      { name: { ar: 'التصاق الأنسجة', en: 'Adhesions' }, desc: { ar: 'يمتدّ الكولاجين بين سطحين متجاورين داخل البطن بعد عملية أو التهاب فيلصقهما، وقد يشدّ الأمعاء ويسبّب انسداداً', en: 'Collagen stretches between two neighbouring surfaces inside the abdomen after an operation or an infection and sticks them together, sometimes kinking the bowel and blocking it' } },
      { name: { ar: 'عدوى الجرح', en: 'Wound infection' }, desc: { ar: 'تتكاثر الجراثيم في الجرح فيحمرّ ويسخن ويتقيّح، وتتوقّف مراحل الالتئام حتى تُعالَج العدوى', en: 'Bacteria multiply in the wound so it reddens, warms and discharges pus, and the stages of healing halt until the infection is treated' } }
    ]
  }

]);

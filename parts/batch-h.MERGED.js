/* ---------- مستقبلات الجلد (كتلة جلد مقطوعة) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'skin-receptors', type: 'organ', system: 'skin',
    name: { ar: 'مستقبلات الجلد', en: 'The skin receptors' },
    img: 'img/skin-receptors.png', imgBack: 'img/skin-receptors-back.png', thumb: 'img/thumb-skin-receptors.png',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'النهايات العصبية الحرة', en: 'Free nerve endings', x: 30, y: 17, side: 'left',
        desc: {
          ar: 'الياف عصبية عارية بلا غلاف ولا محفظة، تصعد بين خلايا البشرة حتى تكاد تلامس السطح. هي مستقبل الالم والحرارة والبرودة والحكة، ولانها بلا محفظة تستجيب لكل ما يؤذي لا لنوع واحد من اللمس.',
          en: 'Bare nerve fibres with no sheath or capsule, climbing between the cells of the epidermis until they almost touch the surface. They are the receptors for pain, heat, cold and itch; having no capsule, they answer anything harmful rather than one kind of touch.'
        }
      },
      {
        ar: 'أقراص ميركل', en: 'Merkel discs', x: 37, y: 25, side: 'left',
        desc: {
          ar: 'خلايا صغيرة تجلس عند قاعدة البشرة ملتصقة بنهاية عصبية على شكل قرص. تستشعر التفاصيل الدقيقة والملمس والحواف، ولا تتعب بل تستمر في الارسال ما دام الضغط قائما. وهي اكثف ما تكون في اطراف الاصابع، ولذلك نقرا برايل بالاصبع لا بالظهر.',
          en: 'Small cells sitting at the base of the epidermis, each pressed against a disc-shaped nerve ending. They sense fine detail, texture and edges, and they do not tire: they keep firing as long as the pressure lasts. They are densest in the fingertips, which is why Braille is read with a finger and not with the back.'
        }
      },
      {
        ar: 'الغدة الدهنية', en: 'Sebaceous gland', x: 20, y: 37, side: 'left',
        desc: {
          ar: 'غدة عنقودية صغيرة تصب زيتها في قناة الشعرة، فتدهن الشعرة وسطح الجلد وتمنعهما من الجفاف والتشقق.',
          en: 'A small clustered gland that empties its oil into the hair canal, greasing the hair and the skin surface and keeping both from drying and cracking.'
        }
      },
      {
        ar: 'العضلة الناصبة للشعرة', en: 'Arrector pili muscle', x: 25, y: 44, side: 'left',
        desc: {
          ar: 'شريط عضلي صغير مائل يشد جذر الشعرة فيقيمها، وهو سبب القشعريرة عند البرد او الخوف. وشده يعصر الغدة الدهنية فيخرج زيتها.',
          en: 'A small slanted band of muscle that pulls on the hair root and stands the hair up. It is what raises goose bumps in cold or fear, and its pull also squeezes oil out of the sebaceous gland.'
        }
      },
      {
        ar: 'الغدة العرقية', en: 'Sweat gland', x: 30, y: 53, side: 'left',
        desc: {
          ar: 'انبوب طويل ملتف كالكبة يقع في عمق الادمة، يسحب الماء والاملاح من الدم ويرسلها في قناة تصعد الى سطح الجلد. تبخر العرق هو مبرد الجسم الاول.',
          en: 'A long tube coiled into a ball deep in the dermis. It draws water and salts from the blood and sends them up a duct to the skin surface; the evaporation of that sweat is the body first cooling system.'
        }
      },
      {
        ar: 'بصيلة الشعرة وجذرها', en: 'Hair follicle and root', x: 12, y: 60, side: 'left', go: 'hair-follicle',
        desc: {
          ar: 'جراب غائر في الجلد ينبت منه ساق الشعرة. حول عنق البصيلة تلتف نهايات عصبية تجعل الشعرة نفسها مجس لمس: تحس بميلانها قبل ان يلمس الشيء جلدك.',
          en: 'A pouch sunk into the skin from which the hair shaft grows. Nerve endings wind around the neck of the follicle so the hair itself becomes a touch probe: you feel it bend before the object even reaches your skin.'
        }
      },
      {
        ar: 'الألياف العصبية', en: 'Nerve fibres', x: 28, y: 81, side: 'left', go: 'peripheral-nerve',
        desc: {
          ar: 'حزم صفراء تدخل من عمق الطبقة الدهنية ثم تتفرع صاعدة الى كل مستقبل في الصورة. كل ما تحسه يدك يمر في هذه الحزم الى النخاع الشوكي ثم الى الدماغ.',
          en: 'The yellow bundles entering from deep in the fat and branching upward to every receptor in this picture. Everything your hand feels travels along them to the spinal cord and on to the brain.'
        }
      },
      {
        ar: 'البشرة', en: 'Epidermis', x: 85, y: 20, side: 'right', go: 'skin',
        desc: {
          ar: 'الطبقة الخارجية وهي صفوف من الخلايا تولد في الاسفل وتصعد وهي تموت وتتقرن حتى تصير الدرع الميت الذي نراه. لا اوعية دموية فيها اطلاقا، وتتغذى بالترشح من الادمة تحتها.',
          en: 'The outer layer: ranks of cells born at its base that rise as they die and harden into the dead shield we see. It carries no blood vessels at all and is fed by seepage from the dermis beneath it.'
        }
      },
      {
        ar: 'جسيم مايسنر', en: 'Meissner corpuscle', x: 56, y: 26, side: 'right',
        desc: {
          ar: 'محفظة بيضاوية مطوية كالسلم اللولبي، تجلس مباشرة تحت السطح في حليمات الادمة. هي مستقبل اللمسة الخفيفة وحركة الشيء على الجلد، وسريعة التكيف: تعلن البداية والنهاية ثم تسكت. لهذا تحس بالثوب لحظة لبسه ثم تنساه.',
          en: 'An oval capsule folded like a spiral staircase, sitting just under the surface in the dermal papillae. It is the receptor for light touch and for movement across the skin, and it adapts fast: it announces the start and the end, then falls silent. That is why you feel a shirt as you put it on and then forget it.'
        }
      },
      {
        ar: 'الأدمة', en: 'Dermis', x: 63, y: 35, side: 'right',
        desc: {
          ar: 'الطبقة الوسطى وهي نسيج ليفي متين من الكولاجين والالياف المطاطة، وفيها تسكن كل المستقبلات والاوعية والغدد. متانة الجلد ومرونته منها لا من البشرة.',
          en: 'The middle layer, a tough felt of collagen and elastic fibres, and the home of every receptor, vessel and gland here. The strength and spring of skin come from it, not from the epidermis.'
        }
      },
      {
        ar: 'نهاية روفيني', en: 'Ruffini ending', x: 76, y: 42, side: 'right',
        desc: {
          ar: 'مستقبل مغزلي الشكل يستلقي في عمق الادمة موازيا لالياف الكولاجين، فيلتقط الشد والتمدد لا الضغط. هو الذي يخبر دماغك بوضع اصابعك وشكل قبضتك وانت لا تنظر اليها.',
          en: 'A spindle-shaped receptor lying deep in the dermis alongside the collagen fibres, so it picks up stretch and pull rather than pressure. It is what tells your brain the position of your fingers and the shape of your grip without your looking.'
        }
      },
      {
        ar: 'شريان الجلد ووريده', en: 'Skin artery and vein', x: 40, y: 57, side: 'right', go: 'vessel-types',
        desc: {
          ar: 'الاحمر يحمل الدم المؤكسج والازرق يعيده. اوعية الجلد ليست للتغذية فقط: توسعها يطرد الحرارة فيحمر الوجه، وتضيقها يحبس الحرارة فيشحب الجلد ويبرد.',
          en: 'The red one brings oxygen-rich blood and the blue one carries it back. Skin vessels are not only for feeding: widening them dumps heat and flushes the face, narrowing them traps heat and leaves the skin pale and cold.'
        }
      },
      {
        ar: 'جسيم باتشيني', en: 'Pacinian corpuscle', x: 73, y: 70, side: 'right',
        desc: {
          ar: 'اكبر المستقبلات واعمقها، ويقع في الطبقة الدهنية. غلافه طبقات فوق طبقات كالبصلة، وهذا البناء يجعله يتجاهل الضغط الثابت ولا يستجيب الا للاهتزاز والضغط المفاجئ العميق. به تحس رنين الجوال على الطاولة وخشونة السطح تحت القلم.',
          en: 'The largest and deepest of the receptors, down in the fat. Its coat is layer upon layer like an onion, and that build makes it ignore steady pressure and answer only vibration and sudden deep pressure. It is how you feel a phone buzzing on a table, or roughness through the tip of a pen.'
        }
      },
      {
        ar: 'الطبقة الدهنية', en: 'Hypodermis (fat layer)', x: 88, y: 88, side: 'right',
        desc: {
          ar: 'حبيبات دهنية كبيرة تحت الادمة تعمل وسادة وعازلا حراريا ومخزن طاقة، وفيها تستقر اكبر المستقبلات لان الضغط العميق وحده هو الذي يصل اليها.',
          en: 'Large fat globules beneath the dermis serving as cushion, heat insulation and energy store. The biggest receptors settle here because only deep pressure ever reaches this far.'
        }
      }
    ],
    desc: {
      ar: 'الجلد ليس غلافا يحيط بك، بل حاسة كاملة مفروشة على كل سطح جسمك. تحت كل سنتيمتر منه تجلس انواع مختلفة من المستقبلات، لكل نوع شكل يناسب ما صنع له: محفظة مطوية تلتقط اللمسة الخفيفة، وبصلة من طبقات تلتقط الاهتزاز، واقراص تلتقط الملمس، ومغزل يلتقط الشد، والياف عارية تلتقط الالم والحرارة. الاحساس الواحد الذي يصلك حين تلمس شيئا هو في الحقيقة خليط من تقارير هذه الاجهزة كلها، يجمعها الدماغ في صورة واحدة.',
      en: 'Skin is not a wrapper around you; it is a complete sense organ spread over your whole surface. Under every centimetre sit different kinds of receptor, each shaped for the job it was made for: a folded capsule for light touch, an onion of layers for vibration, discs for texture, a spindle for stretch, and bare fibres for pain and heat. The single sensation you get from touching something is really a blend of reports from all of these, assembled by the brain into one picture.'
    },
    func: {
      ar: 'تحويل ما يحدث على سطح الجلد الى اشارات كهربائية: اللمسة الخفيفة والحركة (مايسنر)، والاهتزاز والضغط العميق (باتشيني)، والتفاصيل والملمس (ميركل)، والشد والتمدد (روفيني)، والالم والحرارة والبرودة (النهايات الحرة). ومعها ينظم الجلد حرارة الجسم بالعرق وبتوسيع الاوعية وتضييقها.',
      en: 'Turning what happens on the skin surface into electrical signals: light touch and movement (Meissner), vibration and deep pressure (Pacinian), fine detail and texture (Merkel), stretch and pull (Ruffini), and pain, heat and cold (free endings). Alongside this the skin regulates body temperature through sweat and through widening and narrowing its vessels.'
    },
    location: {
      ar: 'في كل الجلد، موزعة بين البشرة والادمة والطبقة الدهنية. وكثافتها تختلف كثيرا بين موضع وموضع: اطراف الاصابع والشفتان واللسان مزدحمة بها، بينما الظهر واعلى الذراع فقيرة نسبيا. ولهذا تميز بطرف اصبعك نقطتين متقاربتين بمليمترات، ولا تميزهما على ظهرك الا اذا تباعدتا اكثر من اربعة سنتيمترات.',
      en: 'Throughout the skin, spread between epidermis, dermis and fat. Their density differs greatly from place to place: fingertips, lips and tongue are crowded with them while the back and upper arm are relatively sparse. That is why a fingertip can tell apart two points a couple of millimetres apart, while on your back they must be more than four centimetres apart before you notice there are two.'
    },
    size: {
      ar: 'جسيم مايسنر نحو 40–150 ميكرومترا، وقرص ميركل نحو 10 ميكرومترات، ونهاية روفيني نحو 1–2 مليمتر، اما جسيم باتشيني فهو الاكبر ويصل الى 3–4 مليمترات ويرى بالعين المجردة. مساحة الجلد كله نحو 2 متر مربع، وتحمل نحو خمسة ملايين نهاية حسية.',
      en: 'A Meissner corpuscle is about 40–150 micrometres, a Merkel disc about 10 micrometres, a Ruffini ending about 1–2 mm, while a Pacinian corpuscle is the largest at 3–4 mm and is visible to the naked eye. The whole skin covers about 2 square metres and carries some five million sensory endings.'
    },
    short: {
      ar: 'خمسة اجهزة استشعار مختلفة تحت جلدك، ولكل واحد منها لغة يقولها للدماغ.',
      en: 'Five different sensors under your skin, each speaking its own language to the brain.'
    },
    parts: [
      { ar: 'جسيم مايسنر — اللمسة الخفيفة والحركة', en: 'Meissner corpuscle — light touch and movement' },
      { ar: 'جسيم باتشيني — الاهتزاز والضغط العميق', en: 'Pacinian corpuscle — vibration and deep pressure' },
      { ar: 'أقراص ميركل — التفاصيل والملمس', en: 'Merkel discs — fine detail and texture' },
      { ar: 'نهاية روفيني والنهايات الحرة — الشد والألم والحرارة', en: 'Ruffini ending and free endings — stretch, pain and heat' }
    ],
    diseases: [
      { name: { ar: 'اعتلال الأعصاب الطرفية', en: 'Peripheral neuropathy' }, desc: { ar: 'تلف الالياف الدقيقة التي تغذي مستقبلات الجلد، غالبا بسبب السكري، فيبدأ الخدر والوخز في القدمين ويفقد المريض الاحساس بالجرح والحرارة', en: 'Damage to the fine fibres feeding the skin receptors, most often from diabetes, starting as numbness and tingling in the feet and ending with the person unable to feel a cut or a burn' } },
      { name: { ar: 'ألم الأعصاب التالي للحزام الناري', en: 'Post-herpetic neuralgia' }, desc: { ar: 'بعد شفاء الحزام الناري تبقى النهايات العصبية الحرة مضطربة، فتصير اللمسة العادية للثوب مؤلمة لشهور', en: 'After shingles heals the free nerve endings stay disturbed, so the ordinary touch of clothing becomes painful for months' } },
      { name: { ar: 'فرط التحسس اللمسي', en: 'Tactile hypersensitivity (allodynia)' }, desc: { ar: 'يخطئ الجهاز الحسي فيترجم اللمس العادي الى الم، ويكثر في الالم المزمن وبعض اضطرابات المعالجة الحسية', en: 'The sensory system misreads ordinary touch as pain; common in chronic pain and in some sensory processing disorders' } },
      { name: { ar: 'انعدام الإحساس بالألم الخلقي', en: 'Congenital insensitivity to pain' }, desc: { ar: 'خلل وراثي نادر في قنوات النهايات العصبية الحرة فلا يحس الطفل بالالم اطلاقا، وهو خطر شديد لان الالم انذار يحمي الجسم', en: 'A rare inherited fault in the channels of the free nerve endings, so the child feels no pain at all; that is very dangerous, because pain is the alarm that protects the body' } },
      { name: { ar: 'قرحة الفراش', en: 'Pressure sore' }, desc: { ar: 'حين يفقد المريض الاحساس او الحركة يبقى الضغط على موضع واحد بلا انذار من المستقبلات، فيموت الجلد ويتقرح', en: 'When a patient loses sensation or movement, pressure stays on one spot with no warning from the receptors, so the skin dies and breaks down' } }
    ]
  }
]);

/* ---------- جهاز التوازن (التيه الدهليزي في الأذن الداخلية) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'balance', type: 'organ', system: 'senses',
    name: { ar: 'جهاز التوازن', en: 'The balance organ (vestibular apparatus)' },
    img: 'img/balance.png', imgBack: 'img/balance-back.png', thumb: 'img/thumb-balance.png',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'القناة نصف الدائرية العلوية', en: 'Superior semicircular canal', x: 41, y: 9, side: 'left',
        desc: {
          ar: 'حلقة عظمية داخلها انبوب غشائي مملوء بسائل. هذه القناة موضوعة في مستوى راسي امامي، فتلتقط ايماءة الراس الى الامام والى الخلف كايماءة الموافقة.',
          en: 'A bony ring holding a fluid-filled membranous tube. This canal lies in a vertical, forward-facing plane, so it catches the nodding of the head forward and back.'
        }
      },
      {
        ar: 'القناة نصف الدائرية الخلفية', en: 'Posterior semicircular canal', x: 8, y: 33, side: 'left',
        desc: {
          ar: 'الحلقة الثانية، وهي في مستوى راسي عمودي على الاولى، فتلتقط ميل الراس على الكتف. وهي القناة التي تتسرب اليها البلورات في اشهر انواع الدوار الوضعي.',
          en: 'The second ring, set in a vertical plane at right angles to the first, so it catches the head tilting onto the shoulder. It is the canal that stray crystals fall into in the commonest kind of positional vertigo.'
        }
      },
      {
        ar: 'القناة نصف الدائرية الجانبية', en: 'Lateral semicircular canal', x: 22, y: 43, side: 'left',
        desc: {
          ar: 'الحلقة الثالثة، وهي شبه افقية، فتلتقط دوران الراس يمينا ويسارا كايماءة الرفض. وبالقنوات الثلاث في ثلاثة مستويات متعامدة يغطي الجهاز كل اتجاه ممكن للدوران.',
          en: 'The third ring, roughly horizontal, so it catches the head turning left and right as in shaking your head. With the three canals set in three perpendicular planes, the organ covers every possible direction of rotation.'
        }
      },
      {
        ar: 'الأمبولة', en: 'Ampulla', x: 36, y: 50, side: 'left',
        desc: {
          ar: 'انتفاخ عند قاعدة كل قناة، وفيه يجلس المجس. حين يدور راسك يتاخر السائل داخل القناة عن الحركة بفعل القصور الذاتي، فيدفع محتوى الامبولة ويحني المجس. ولان السائل يلحق بالحركة بعد ثوان يتوقف الاحساس، ولهذا لا تحس بالدوران المستمر بسرعة ثابتة.',
          en: 'A swelling at the base of each canal where the sensor sits. When your head turns, the fluid inside the canal lags behind through inertia, pushes against the contents of the ampulla and bends the sensor. Because the fluid catches up within seconds the sensation fades, which is why steady rotation at constant speed stops feeling like rotation.'
        }
      },
      {
        ar: 'العرف الحسي', en: 'Crista (sensory crest)', x: 33, y: 60, side: 'left',
        desc: {
          ar: 'نتوء وردي داخل الامبولة تخرج منه خلايا شعرية دقيقة مغروسة في هلام لين. انحناء الشعيرات بالسائل هو الذي يفتح قنوات الخلية فتولد الاشارة العصبية. مليمتر واحد من الانحناء يكفي لتعرف انك تدور.',
          en: 'A pink ridge inside the ampulla from which fine hair cells rise, embedded in a soft jelly. The bending of those hairs by the fluid opens the cell channels and generates the nerve signal. A fraction of a millimetre of bend is enough for you to know you are turning.'
        }
      },
      {
        ar: 'العصب الدهليزي القوقعي', en: 'Vestibulocochlear nerve', x: 85, y: 33, side: 'right',
        desc: {
          ar: 'العصب القحفي الثامن، وهو حزمتان في غلاف واحد: فرع دهليزي يحمل خبر التوازن من القنوات والبقعتين، وفرع قوقعي يحمل الصوت. يذهبان معا الى جذع الدماغ ثم الى المخيخ.',
          en: 'The eighth cranial nerve, two bundles in one sheath: a vestibular branch carrying balance news from the canals and the two maculae, and a cochlear branch carrying sound. Both travel together to the brainstem and on to the cerebellum.'
        }
      },
      {
        ar: 'بلورات الأذن', en: 'Otolith crystals', x: 50, y: 44, side: 'right',
        desc: {
          ar: 'حبيبات صغيرة من كربونات الكالسيوم مرصوصة فوق طبقة هلامية. ثقلها هو الحيلة كلها: الجاذبية والتسارع يجران البلورات فتسحب الهلام فتنحني الشعيرات تحته، فيعرف الدماغ اين الاسفل وهل انت تتسارع.',
          en: 'Tiny grains of calcium carbonate packed on top of a jelly layer. Their weight is the whole trick: gravity and acceleration drag the crystals, the crystals drag the jelly, and the hairs beneath it bend, so the brain learns where down is and whether you are speeding up.'
        }
      },
      {
        ar: 'القريبة', en: 'Utricle', x: 53, y: 51, side: 'right',
        desc: {
          ar: 'الحجرة الاكبر، وتصب فيها القنوات الثلاث. بقعتها الحسية شبه افقية، فتحس بالحركة المستقيمة الى الامام والى الجانب: انطلاق السيارة او مشيك في ممر مستقيم.',
          en: 'The larger chamber, into which all three canals open. Its sensory patch lies roughly horizontal, so it feels straight-line movement forward and sideways: a car pulling away, or your own walk down a corridor.'
        }
      },
      {
        ar: 'الكييس', en: 'Saccule', x: 55, y: 60, side: 'right',
        desc: {
          ar: 'الحجرة الاصغر تحت القريبة، وبقعتها الحسية شبه راسية، فتحس بالحركة الصاعدة والهابطة وبالجاذبية نفسها. هي التي تخبرك بهبوط المصعد المفاجئ.',
          en: 'The smaller chamber below the utricle, its sensory patch roughly vertical, so it feels up-and-down movement and gravity itself. It is what tells you a lift has suddenly dropped.'
        }
      },
      {
        ar: 'القوقعة', en: 'Cochlea', x: 88, y: 68, side: 'right', go: 'ear',
        desc: {
          ar: 'الحلزون المجاور، وهو عضو السمع لا التوازن، لكنه ملتصق بالتيه نفسه ويشاركه السائل والعصب. ولهذا كثير من امراض الاذن الداخلية تضرب السمع والتوازن معا.',
          en: 'The spiral next door: the organ of hearing, not of balance, but built into the same labyrinth and sharing its fluid and its nerve. That is why many inner-ear diseases strike hearing and balance together.'
        }
      },
      {
        ar: 'قناة القوقعة الداخلية', en: 'Cochlear duct', x: 65, y: 77, side: 'right',
        desc: {
          ar: 'مقطع مفتوح يظهر داخل لفة القوقعة: غشاء رقيق يحمل الخلايا الشعرية السمعية، وحوله ممران مملوءان بالسائل تنتقل فيهما موجة الصوت.',
          en: 'A cut-open section inside a turn of the cochlea: a thin membrane carrying the hearing hair cells, with fluid-filled passages on either side along which the sound wave travels.'
        }
      }
    ],
    desc: {
      ar: 'داخل عظم الصدغ، ملتصقا بالقوقعة، يجلس جهاز صغير لا يتجاوز حجم حبة الحمص ومع ذلك هو الذي يبقيك واقفا. هو متاهة من انابيب وحجرات مملوءة بسائل: ثلاث قنوات نصف دائرية تقيس دوران الراس في كل الاتجاهات، وحجرتان تحملان بلورات صغيرة تقيسان الجاذبية والتسارع المستقيم. لا يعمل وحده ابدا، بل يقارن الدماغ تقريره في كل لحظة بما تراه العين وما تحسه مفاصل الرجلين، وحين تختلف هذه الشهادات الثلاث تاتي الدوخة.',
      en: 'Inside the temporal bone, joined to the cochlea, sits an organ no bigger than a chickpea that nevertheless keeps you upright. It is a maze of fluid-filled tubes and chambers: three semicircular canals measuring the head turning in every direction, and two chambers carrying tiny crystals that measure gravity and straight-line acceleration. It never works alone. The brain compares its report every moment with what the eyes see and what the leg joints feel, and when those three witnesses disagree, dizziness follows.'
    },
    func: {
      ar: 'ابلاغ الدماغ باستمرار عن وضع الراس وحركته: القنوات الثلاث تقيس الدوران، والقريبة والكييس تقيسان الجاذبية والتسارع المستقيم. وعلى هذه الاشارات يبني الدماغ ردود فعل سريعة تثبت النظر اثناء الحركة (المنعكس الدهليزي العيني) وتشد عضلات الجذع والساقين لتمنع السقوط.',
      en: 'Telling the brain continuously where the head is and how it is moving: the three canals measure rotation, the utricle and saccule measure gravity and straight-line acceleration. On these signals the brain builds fast reflexes that hold your gaze steady while you move (the vestibulo-ocular reflex) and tighten the trunk and leg muscles to keep you from falling.'
    },
    location: {
      ar: 'في الاذن الداخلية داخل الجزء الصخري من العظم الصدغي، خلف الاذن الوسطى مباشرة وملتصقا بالقوقعة، ويحيط به اصلب عظم في الجسم.',
      en: 'In the inner ear, within the petrous part of the temporal bone, immediately behind the middle ear and attached to the cochlea, encased in the hardest bone in the body.'
    },
    size: {
      ar: 'التيه كله نحو 15 مليمترا في ابعد قطر له. قطر كل قناة نصف دائرية نحو 0.3 مليمتر وطول حلقتها 15–20 مليمترا، والبلورات فوق البقعتين قطرها 3–30 ميكرومترا فقط.',
      en: 'The whole labyrinth is about 15 mm across at its widest. Each semicircular canal is about 0.3 mm in bore with a loop 15–20 mm long, and the crystals on the two maculae are only 3–30 micrometres across.'
    },
    short: {
      ar: 'ثلاث حلقات مملوءة بالسائل وحفنة بلورات، وبها تعرف اين الاعلى.',
      en: 'Three fluid-filled loops and a handful of crystals, and by them you know which way is up.'
    },
    parts: [
      { ar: 'القنوات نصف الدائرية الثلاث — الدوران', en: 'The three semicircular canals — rotation' },
      { ar: 'الأمبولة والعرف الحسي — مجس الدوران', en: 'Ampulla and crista — the rotation sensor' },
      { ar: 'القريبة والكييس — الجاذبية والتسارع', en: 'Utricle and saccule — gravity and acceleration' },
      { ar: 'العصب الدهليزي — الطريق إلى الدماغ', en: 'The vestibular nerve — the road to the brain' }
    ],
    diseases: [
      { name: { ar: 'الدوار الوضعي الحميد', en: 'Benign paroxysmal positional vertigo (BPPV)' }, desc: { ar: 'تتسرب بلورة من بقعة القريبة الى احدى القنوات فتحرك السائل في غير موضعه، فتاتي نوبة دوران عنيفة لثوان عند قلب الراس في الفراش. ويعالج بمناورات تعيد البلورة الى مكانها', en: 'A crystal escapes from the utricle patch into one of the canals and stirs the fluid where it should not, giving a violent few seconds of spinning when you turn over in bed. It is treated by manoeuvres that roll the crystal back where it belongs' } },
      { name: { ar: 'داء منيير', en: 'Meniere disease' }, desc: { ar: 'ارتفاع ضغط السائل داخل التيه، فتاتي نوبات دوار طويلة مع طنين وضعف سمع واحساس بامتلاء الاذن', en: 'The pressure of the fluid inside the labyrinth rises, bringing long attacks of vertigo with ringing, hearing loss and a feeling of fullness in the ear' } },
      { name: { ar: 'التهاب العصب الدهليزي', en: 'Vestibular neuritis' }, desc: { ar: 'التهاب فيروسي يصيب الفرع الدهليزي وحده، فياتي دوار شديد مستمر لايام بلا ضعف سمع، ثم يتحسن تدريجيا لان الدماغ يتعلم الاعتماد على الاذن السليمة', en: 'A viral inflammation of the vestibular branch alone, giving severe continuous vertigo for days without hearing loss, then slowly improving as the brain learns to lean on the healthy ear' } },
      { name: { ar: 'دوار الحركة', en: 'Motion sickness' }, desc: { ar: 'يقول جهاز التوازن انك تتحرك بينما تقول العين ان المكان ثابت، كما يحدث في قراءة كتاب داخل سيارة، فيترجم الدماغ هذا التعارض غثيانا ودوخة', en: 'The balance organ says you are moving while the eyes say the place is still, as when you read in a moving car; the brain reads that contradiction as nausea and dizziness' } },
      { name: { ar: 'خلل التوازن مع التقدم في العمر', en: 'Age-related imbalance (presbyvestibulopathy)' }, desc: { ar: 'تقل الخلايا الشعرية تدريجيا مع السن فيضعف اتزان المشي في الظلام وعلى الارض غير المستوية، وهو من اهم اسباب السقوط عند كبار السن', en: 'The hair cells thin out with age, so walking becomes unsteady in the dark and on uneven ground; it is one of the main causes of falls in older people' } }
    ]
  }
]);

/* ---------- الجهاز العصبي الذاتي (الودي ونظير الودي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'autonomic', type: 'organ', system: 'nervous',
    name: { ar: 'الجهاز العصبي الذاتي', en: 'The autonomic nervous system' },
    img: 'img/autonomic.png', imgBack: 'img/autonomic-back.png', thumb: 'img/thumb-autonomic.png',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الدماغ وجذعه', en: 'Brain and brainstem', x: 46, y: 4, side: 'left', go: 'brain',
        desc: {
          ar: 'من جذع الدماغ تخرج اعصاب نظير الودي، واهمها العصب المبهم. وفوقه في الوطاء يجلس مركز التحكم الذي يقرر متى يغلب التوتر ومتى تغلب الراحة.',
          en: 'The parasympathetic nerves leave from the brainstem, chief among them the vagus. Above it, in the hypothalamus, sits the control centre that decides when tension prevails and when rest does.'
        }
      },
      {
        ar: 'النخاع الشوكي', en: 'Spinal cord', x: 49, y: 27, side: 'left', go: 'spinal-cord',
        desc: {
          ar: 'من الجزء الصدري والقطني منه تخرج كل الالياف الودية، ولهذا يسمى الودي بالخروج الصدري القطني. اما نظير الودي فيخرج من طرفي النخاع: من جذع الدماغ فوق ومن العجز اسفل.',
          en: 'All the sympathetic fibres leave from its chest and upper lumbar segments, which is why the sympathetic outflow is called thoracolumbar. The parasympathetic leaves from the two ends instead: from the brainstem above and the sacrum below.'
        }
      },
      {
        ar: 'الرئتان', en: 'Lungs', x: 40, y: 34, side: 'left', go: 'lungs',
        desc: {
          ar: 'الودي يوسع الشعب الهوائية ليدخل هواء اكثر وقت المجهود، ونظير الودي يضيقها ويزيد افراز المخاط وقت الراحة. وعلاج الربو الاسعافي يعمل على المستقبلات الودية نفسها.',
          en: 'The sympathetic widens the airways to let more air in during effort; the parasympathetic narrows them and raises mucus during rest. Emergency asthma inhalers act on those very sympathetic receptors.'
        }
      },
      {
        ar: 'سلسلة العقد الودية', en: 'Sympathetic chain of ganglia', x: 35, y: 45, side: 'left',
        desc: {
          ar: 'حبل من العقد الصفراء المتلاصقة كسبحة يمتد على جانبي العمود الفقري من الرقبة الى العجز. الليف الخارج من النخاع يتوقف هنا ويسلم رسالته لليف اخر، ولان العقد متصلة ببعضها تنتشر الرسالة الى الجسم كله دفعة واحدة. ولهذا يصير رد فعل الخوف شاملا وفوريا.',
          en: 'A cord of yellow ganglia strung like beads along both sides of the vertebral column from neck to sacrum. A fibre leaving the cord stops here and hands its message to a second fibre, and because the ganglia are linked to one another the message spreads through the whole body at once. That is why the fear response is total and instant.'
        }
      },
      {
        ar: 'ضفيرة الأعصاب البطنية', en: 'Abdominal (coeliac) plexus', x: 46, y: 57, side: 'left',
        desc: {
          ar: 'شبكة كثيفة من الالياف تتجمع خلف المعدة حول جذع الشريان البطني، وتوزع اعصابها على المعدة والكبد والبنكرياس والامعاء. تسمى الضفيرة الشمسية لان فروعها تشع كاشعة الشمس، وضربة قوية عليها تقطع النفس لحظة.',
          en: 'A dense web of fibres gathering behind the stomach around the trunk of the coeliac artery and spreading its nerves to stomach, liver, pancreas and intestines. It is called the solar plexus because its branches radiate like sun rays, and a hard blow to it knocks the breath out of you for a moment.'
        }
      },
      {
        ar: 'الأمعاء الدقيقة', en: 'Small intestine', x: 47, y: 72, side: 'left', go: 'small-intestine',
        desc: {
          ar: 'للامعاء جهاز عصبي خاص بها في جدارها يعمل حتى لو قطعت عنها الاعصاب، لكن الذاتي يضبط سرعته: نظير الودي يسرع الحركة والافراز، والودي يبطئهما ويحول الدم بعيدا عن الهضم وقت الخطر.',
          en: 'The gut has its own nervous system in its wall that keeps working even if its nerves are cut, but the autonomic sets its pace: the parasympathetic speeds movement and secretion, the sympathetic slows both and diverts blood away from digestion in danger.'
        }
      },
      {
        ar: 'المثانة', en: 'Bladder', x: 50, y: 85, side: 'left', go: 'bladder',
        desc: {
          ar: 'مثال واضح على التعاون: الودي يرخي جدار المثانة ويشد عنقها فتخزن البول، ونظير الودي القادم من العجز يعكس ذلك تماما فتفرغ. وهذا التبديل خارج ارادتك، وارادتك تتحكم في العضلة الخارجية وحدها.',
          en: 'A clear example of the partnership: the sympathetic relaxes the bladder wall and tightens its neck so urine is stored; the sacral parasympathetic reverses both so it empties. That switching is outside your will; your will controls only the outer sphincter.'
        }
      },
      {
        ar: 'العين', en: 'Eye', x: 59, y: 5, side: 'right', go: 'eye',
        desc: {
          ar: 'الودي يوسع الحدقة ليدخل ضوء اكثر وترى اوضح وقت الخطر، ونظير الودي يضيقها ويشد عدسة العين للقراءة القريبة. وسعة حدقتك الان تقرير امين عن حالتك الداخلية.',
          en: 'The sympathetic widens the pupil to let in more light and sharpen your view in danger; the parasympathetic narrows it and tightens the lens for close reading. The width of your pupil right now is an honest report on your inner state.'
        }
      },
      {
        ar: 'العصب المبهم', en: 'Vagus nerve', x: 53, y: 20, side: 'right',
        desc: {
          ar: 'اطول اعصاب الجسم واشهرها، ينزل من جذع الدماغ في الرقبة ثم الصدر ثم البطن ليصل الى القلب والرئتين والمعدة والامعاء. هو العمود الفقري لنظير الودي، ومعناه المتجول لانه يتجول في الجسم كله. اربعة اخماس اليافه صاعدة لا نازلة: يخبر الدماغ عن حال الاحشاء اكثر مما يامرها.',
          en: 'The longest and most famous nerve in the body, descending from the brainstem through neck, chest and abdomen to reach the heart, lungs, stomach and intestines. It is the backbone of the parasympathetic, and its name means the wanderer because it wanders through the whole body. Four fifths of its fibres run upward, not down: it tells the brain about the organs more than it commands them.'
        }
      },
      {
        ar: 'عقدة ودية', en: 'Sympathetic ganglion', x: 64, y: 33, side: 'right',
        desc: {
          ar: 'انتفاخ واحد من عقد السلسلة، وهو محطة تبديل: يصل اليه ليف قصير من النخاع فيشتبك مع عدد كبير من الالياف الخارجة. ولهذا تتضخم الرسالة الواحدة وتصل الى اعضاء كثيرة في وقت واحد.',
          en: 'A single swelling of the chain, a relay station: a short fibre from the cord arrives and synapses with a large number of outgoing fibres. That is how one message is amplified and reaches many organs at the same moment.'
        }
      },
      {
        ar: 'القلب', en: 'Heart', x: 55, y: 41, side: 'right', go: 'heart',
        desc: {
          ar: 'اوضح ساحة للتوازن بين الاثنين: الودي يسرع النبض ويقوي انقباضه، والمبهم يبطئه. وفي الراحة يكون المبهم هو الغالب، ولولاه لنبض قلبك نحو مئة نبضة في الدقيقة بدل السبعين.',
          en: 'The clearest arena of the balance: the sympathetic quickens the beat and strengthens it, the vagus slows it. At rest the vagus has the upper hand; without it your heart would beat around a hundred times a minute instead of seventy.'
        }
      },
      {
        ar: 'المعدة', en: 'Stomach', x: 57, y: 52, side: 'right', go: 'stomach',
        desc: {
          ar: 'نظير الودي يفتح الافراز والحركة فتهضم، والودي يوقفهما. ولهذا تفقد شهيتك ويثقل طعامك في معدتك حين تكون خائفا او متوترا.',
          en: 'The parasympathetic turns on secretion and movement so digestion proceeds; the sympathetic shuts both down. That is why your appetite disappears and food sits heavy when you are frightened or tense.'
        }
      },
      {
        ar: 'الأمعاء الغليظة', en: 'Large intestine', x: 60, y: 66, side: 'right', go: 'large-intestine',
        desc: {
          ar: 'يصلها نظير الودي من المبهم في اولها ومن اعصاب العجز في اخرها. توتر مستمر يعني قولونا مضطربا، وهذا هو الرابط الحقيقي بين الحالة النفسية والامعاء.',
          en: 'It receives the parasympathetic from the vagus at its start and from the sacral nerves at its end. Continuous tension means a disturbed colon, and this is the real link between mood and bowel.'
        }
      }
    ],
    desc: {
      ar: 'اغلب ما يجري في جسمك الان لا تامر به: قلبك ينبض، ومعدتك تهضم، وحدقتاك تضبطان الضوء، وشرايينك تضيق وتتسع. الذي يدير هذا كله هو الجهاز العصبي الذاتي، وله شعبتان تعملان في الاتجاهين. الودي هو شعبة قاتل او اهرب: يخرج من الصدر والقطن الى سلسلة عقد على جانبي العمود الفقري فينتشر امره في الجسم كله دفعة واحدة، فيتسع البؤبؤ ويسرع القلب ويتوقف الهضم ويذهب الدم الى العضلات. ونظير الودي هو شعبة كل واسترح: يخرج من جذع الدماغ ومن العجز، واشهر اعصابه المبهم، فيبطئ القلب ويشغل الهضم ويعيد الجسم الى الهدوء. وهما لا يتناوبان بل يشدان في كل لحظة، والحالة التي تعيشها هي محصلة الشد بينهما.',
      en: 'Most of what is happening in your body right now is not something you ordered: your heart beats, your stomach digests, your pupils set themselves to the light, your arteries narrow and widen. What runs all of this is the autonomic nervous system, and it has two divisions pulling in opposite directions. The sympathetic is the fight-or-flight division: it leaves from the chest and upper lumbar cord into a chain of ganglia beside the spine, so its order spreads through the whole body at once, widening the pupil, quickening the heart, halting digestion and sending blood to the muscles. The parasympathetic is the rest-and-digest division: it leaves from the brainstem and the sacrum, its most famous nerve being the vagus, and it slows the heart, starts digestion and returns the body to calm. They do not take turns; they pull at each other every moment, and the state you are in is the balance of that pull.'
    },
    func: {
      ar: 'ضبط كل ما يجري بلا ارادة: سرعة القلب وقوته، وضغط الدم وتوزيعه، واتساع الشعب الهوائية، وحركة الجهاز الهضمي وافرازاته، واتساع الحدقة، والتعرق، وتخزين البول وافراغه، ودرجة حرارة الجسم. وهو الذي يهيئ الجسم للمجهود او للخطر ثم يعيده الى الراحة بعده.',
      en: 'Governing everything that happens without your will: the rate and force of the heart, blood pressure and its distribution, the width of the airways, the movement and secretions of the gut, the width of the pupil, sweating, the storing and emptying of urine, and body temperature. It readies the body for effort or danger and then brings it back to rest afterwards.'
    },
    location: {
      ar: 'مراكزه في الوطاء وجذع الدماغ والنخاع الشوكي، واليافه منتشرة في الجسم كله: سلسلة العقد الودية على جانبي العمود الفقري من الرقبة الى العجز، والمبهم نازلا من الرقبة الى البطن، وضفائر كثيفة حول الشرايين الكبيرة في البطن والحوض.',
      en: 'Its centres lie in the hypothalamus, brainstem and spinal cord, and its fibres run through the whole body: the sympathetic chain along both sides of the vertebral column from neck to sacrum, the vagus descending from neck to abdomen, and dense plexuses around the great arteries of the abdomen and pelvis.'
    },
    size: {
      ar: 'سلسلة العقد الودية نحو 22 عقدة على كل جانب. والعصب المبهم يبلغ نحو 60 سنتيمترا في كل جانب ويحوي نحو 100 الف ليف، اربعة اخماسها حسية صاعدة. واستجابة الودي تكتمل خلال ثانية الى ثانيتين من الانذار.',
      en: 'The sympathetic chain carries about 22 ganglia on each side. The vagus runs some 60 cm on each side and holds around 100,000 fibres, four fifths of them sensory and ascending. A full sympathetic response is complete within one to two seconds of the alarm.'
    },
    short: {
      ar: 'جسمك يدير نفسه بلا امرك، بين شعبة تستنفر واخرى تهدئ.',
      en: 'Your body runs itself without your orders, between one division that alarms and another that calms.'
    },
    parts: [
      { ar: 'الشعبة الودية — قاتل أو اهرب', en: 'The sympathetic division — fight or flight' },
      { ar: 'الشعبة نظيرة الودية — الأكل والراحة', en: 'The parasympathetic division — rest and digest' },
      { ar: 'سلسلة العقد الودية بجانب العمود الفقري', en: 'The sympathetic chain beside the vertebral column' },
      { ar: 'العصب المبهم — أطول أعصاب نظير الودي', en: 'The vagus nerve — the longest parasympathetic nerve' }
    ],
    diseases: [
      { name: { ar: 'الاعتلال العصبي الذاتي السكري', en: 'Diabetic autonomic neuropathy' }, desc: { ar: 'يتلف السكر الالياف الذاتية فيضطرب النبض ولا يحس المريض بالجلطة القلبية، ويصاب بدوخة عند الوقوف وبطء في افراغ المعدة', en: 'Sugar damages the autonomic fibres, so the pulse becomes irregular, a heart attack may be felt as no pain at all, standing brings dizziness, and the stomach empties too slowly' } },
      { name: { ar: 'هبوط الضغط الوضعي', en: 'Orthostatic hypotension' }, desc: { ar: 'يفشل الودي في تضييق الاوعية بسرعة عند الوقوف فينزل الدم الى الساقين ويشحب الدماغ لحظة، فتاتي دوخة او اغماء', en: 'The sympathetic fails to tighten the vessels quickly enough on standing, blood pools in the legs and the brain is briefly short, bringing dizziness or a faint' } },
      { name: { ar: 'الإغماء الوعائي المبهمي', en: 'Vasovagal syncope' }, desc: { ar: 'استجابة مبالغة من العصب المبهم لمنظر الدم او الالم او الوقوف الطويل، فيبطؤ القلب وتتسع الاوعية فجاة ويفقد الشخص وعيه ثوان', en: 'An exaggerated vagal response to the sight of blood, to pain or to long standing: the heart slows and the vessels open all at once and the person passes out for a few seconds' } },
      { name: { ar: 'فرط التعرق الأولي', en: 'Primary hyperhidrosis' }, desc: { ar: 'نشاط ودي زائد على غدد العرق في الكفين والقدمين والابطين بلا سبب مرضي، فيتعرق الشخص بغزارة حتى في الجو البارد', en: 'Excess sympathetic drive to the sweat glands of palms, soles and armpits with no underlying disease, so the person sweats heavily even in cool weather' } },
      { name: { ar: 'متلازمة تسرع القلب الوضعي', en: 'Postural orthostatic tachycardia syndrome (POTS)' }, desc: { ar: 'خلل في تنظيم الذاتي يجعل النبض يقفز بشدة عند الوقوف مع خفقان وارهاق وضباب ذهني، ويكثر عند الشابات وبعد بعض العدوى الفيروسية', en: 'A fault in autonomic regulation that makes the pulse jump sharply on standing, with palpitations, exhaustion and mental fog; commonest in young women and after some viral infections' } }
    ]
  }
]);

/* ---------- المناعة (استجابة مناعية داخل النسيج) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'immunity', type: 'organ', system: 'lymphatic',
    name: { ar: 'المناعة', en: 'The immune response' },
    img: 'img/immunity.png', imgBack: 'img/immunity-back.png', thumb: 'img/thumb-immunity.png',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'البلعم الكبير', en: 'Macrophage', x: 24, y: 33, side: 'left',
        desc: {
          ar: 'خلية كبيرة اسمها يعني الاكال العظيم. تجوب النسيج وتبتلع الجراثيم والخلايا الميتة وتهضمها داخلها. وهي لا تكتفي بالاكل: تعرض قطعة من الدخيل على سطحها لتري الخلايا اللمفاوية بمن تقاتل، فهي حلقة الوصل بين المناعة الفطرية والمكتسبة.',
          en: 'A large cell whose name means great eater. It patrols the tissue, swallows germs and dead cells and digests them inside itself. It does not stop at eating: it displays a fragment of the intruder on its surface to show the lymphocytes who the enemy is, making it the link between innate and acquired immunity.'
        }
      },
      {
        ar: 'القدم الكاذبة', en: 'Pseudopod', x: 52, y: 46, side: 'left',
        desc: {
          ar: 'ذراع شفافة يمدها البلعم من جسمه ليحيط بالجرثومة من كل جانب حتى ينغلق عليها كيس داخل الخلية. ثم تلتحم به حويصلات مليئة بانزيمات هاضمة فتذيب الجرثومة تماما.',
          en: 'A clear arm the macrophage pushes out of its body to wrap around the bacterium from every side until it closes into a sac inside the cell. Vesicles full of digestive enzymes then fuse with that sac and dissolve the germ completely.'
        }
      },
      {
        ar: 'جدار الشعيرة الدموية', en: 'Capillary wall', x: 20, y: 58, side: 'left',
        desc: {
          ar: 'صف واحد من خلايا مسطحة نواها بارزة. في الالتهاب ترتخي الوصلات بين هذه الخلايا فتتسع المسافات، ويصير الجدار قابلا للعبور: من هنا يخرج السائل فيتورم الموضع، وتخرج الكريات البيضاء الى ساحة المعركة.',
          en: 'A single row of flattened cells with bulging nuclei. In inflammation the junctions between them loosen and the gaps widen, and the wall becomes passable: fluid escapes here, which is the swelling, and white cells escape with it to the battlefield.'
        }
      },
      {
        ar: 'كرية بيضاء تنسل من الشعيرة', en: 'White cell squeezing out', x: 22, y: 70, side: 'left',
        desc: {
          ar: 'كرية بيضاء تغير شكلها وتتسلل بين خليتين من جدار الوعاء لتخرج الى النسيج. تشمها اشارات كيميائية تطلقها الخلايا المصابة فتزحف نحوها. تسمى هذه الرحلة الانسلال، وتتم في دقائق.',
          en: 'A white cell changing shape and slipping between two cells of the vessel wall to reach the tissue. Chemical signals released by injured cells act as a scent trail and it crawls toward them. This journey is called diapedesis and it takes only minutes.'
        }
      },
      {
        ar: 'كريات الدم الحمراء', en: 'Red blood cells', x: 47, y: 88, side: 'left', go: 'blood',
        desc: {
          ar: 'اقراص حمراء مقعرة الوجهين تملا الشعيرة، وظيفتها نقل الاكسجين لا القتال. لكنها هي التي تحمل الكريات البيضاء والاجسام المضادة الى كل موضع في الجسم خلال دقيقة واحدة.',
          en: 'Red discs, hollowed on both faces, filling the capillary; their work is carrying oxygen, not fighting. Yet it is this stream that ferries the white cells and the antibodies to any spot in the body within a single minute.'
        }
      },
      {
        ar: 'خلية لمفاوية', en: 'Lymphocyte', x: 68, y: 10, side: 'right',
        desc: {
          ar: 'خلية مستديرة نواتها كبيرة تملا جسمها. هي جندي المناعة المكتسبة: لا تهاجم اي دخيل، بل كل خلية منها متخصصة في ممرض واحد بعينه تتعرف عليه ثم تنقسم بسرعة الى جيش من نسخها. وبعضها يبقى بعد انتهاء المعركة ليتذكر، وعلى هذه الذاكرة تقوم اللقاحات.',
          en: 'A round cell whose large nucleus fills nearly all of it. This is the soldier of acquired immunity: it does not attack any intruder, but each such cell is tuned to one particular pathogen, recognises it and then divides rapidly into an army of copies. Some of them stay behind after the battle to remember, and on that memory vaccines are built.'
        }
      },
      {
        ar: 'العدلة', en: 'Neutrophil', x: 72, y: 26, side: 'right',
        desc: {
          ar: 'اكثر الكريات البيضاء عددا واسرعها وصولا، وتعرف من نواتها المفصصة الى ثلاث فصوص او اربع. تبتلع الجراثيم وتقذف عليها مواد قاتلة، ثم تموت في موضعها. القيح الذي تراه في اي خراج هو في اغلبه عدلات ماتت وهي تقاتل.',
          en: 'The most numerous and the fastest-arriving of the white cells, recognised by its nucleus divided into three or four lobes. It swallows germs and sprays killing chemicals over them, then dies where it stands. The pus you see in any abscess is largely neutrophils that died fighting.'
        }
      },
      {
        ar: 'جرثومة عصوية', en: 'Rod-shaped bacterium', x: 48, y: 38, side: 'right',
        desc: {
          ar: 'خلية بكتيرية على شكل عصا، اكبر منها الف مرة اصغر خلية في جسمك عددا لا حجما. تتكاثر بالانقسام كل عشرين دقيقة تقريبا اذا تركت، ولهذا يقاس رد المناعة بالدقائق لا بالساعات.',
          en: 'A rod-shaped bacterial cell. Left alone it divides roughly every twenty minutes, which is why the immune answer is measured in minutes rather than hours.'
        }
      },
      {
        ar: 'الأجسام المضادة', en: 'Antibodies', x: 73, y: 54, side: 'right',
        desc: {
          ar: 'جزيئات بروتينية على شكل حرف Y تصنعها الخلايا اللمفاوية. ذراعا الحرف تمسكان بجزء محدد من سطح الممرض لا يمسكان بغيره. وهي لا تقتل بنفسها بل تعلم الهدف وتلصق الجراثيم ببعضها وتمنعها من دخول الخلايا، ثم تنادي البلعم لياكلها.',
          en: 'Y-shaped protein molecules made by the lymphocytes. The two arms of the Y grip one specific piece of the pathogen surface and nothing else. They do not kill by themselves: they tag the target, glue germs together, block them from entering cells, and call the macrophage to eat them.'
        }
      },
      {
        ar: 'ممرض تلتصق به الأجسام المضادة', en: 'Antibody-coated pathogen', x: 80, y: 65, side: 'right',
        desc: {
          ar: 'جرثومة غطي سطحها بالاجسام المضادة حتى صارت كانها موسومة بعلامة. هذا التوسيم يجعل البلعم يتعرف عليها فورا ويبتلعها اسرع باضعاف، وهو المعنى الدقيق للمناعة المكتسبة.',
          en: 'A germ whose surface has been coated with antibodies until it is effectively flagged. That flagging lets the macrophage recognise it at once and swallow it many times faster, and this is precisely what acquired immunity means.'
        }
      },
      {
        ar: 'النسيج الضام', en: 'Connective tissue', x: 62, y: 72, side: 'right',
        desc: {
          ar: 'شبكة ليفية رخوة بين الخلايا هي ساحة المعركة. عليها تزحف الخلايا المناعية، وفيها تنتشر الاشارات الكيميائية، وتورمها واحمرارها وحرارتها هي العلامات التي تراها بعينك على اي التهاب.',
          en: 'The loose fibrous mesh between cells: the battlefield itself. Immune cells crawl over it, chemical signals spread through it, and its swelling, redness and heat are the signs you see with your own eye in any inflammation.'
        }
      }
    ],
    desc: {
      ar: 'كل يوم يدخل جسمك عدد لا يحصى من الجراثيم، وما تشعر بشيء لان معركة تدار تحت جلدك بلا خبر. للمناعة خطان. الاول فطري تولد به: البلعم والعدلة يهاجمان اي دخيل فورا بلا سؤال عن هويته، وهما سريعان لكنهما لا يتعلمان شيئا. والثاني مكتسب يبنى بالتجربة: الخلايا اللمفاوية تتعرف على الممرض بعينه وتصنع اجساما مضادة مفصلة على مقاسه، وهذا ابطا لكنه دقيق، والاهم انه يتذكر. حين تصاب بمرض مرة ولا تصاب به مرة اخرى فذلك اثر هذه الذاكرة، وعليها تماما يقوم عمل اللقاحات: تعطي الجهاز صورة العدو ليتذكرها قبل ان يلقاه حقيقة.',
      en: 'Every day countless germs enter your body and you feel nothing, because a battle is being fought under your skin without a bulletin. Immunity has two lines. The first is innate, born with you: macrophages and neutrophils attack any intruder at once without asking who it is; they are fast but they learn nothing. The second is acquired, built by experience: lymphocytes recognise one particular pathogen and make antibodies tailored to it. That is slower but exact, and above all it remembers. When you catch an illness once and never again, that is this memory at work, and it is exactly what vaccines use: they show the system a picture of the enemy so it remembers before it ever meets the real one.'
    },
    func: {
      ar: 'التمييز بين ما هو منك وما هو دخيل، ثم اتلاف الدخيل. البلعم والعدلة يبتلعان الجراثيم ويهضمانها، والخلايا اللمفاوية تصنع اجساما مضادة توسم الممرض وتعطله وتنادي عليه، وخلايا اخرى تقتل خلاياك انت اذا اصيبت بفيروس او تحولت الى ورم. ومع ذلك كله تحفظ ذاكرة تجعل اللقاء الثاني اسرع واقوى.',
      en: 'Telling what is yours from what is foreign, then destroying the foreign. Macrophages and neutrophils swallow and digest germs; lymphocytes make antibodies that tag the pathogen, disable it and call others to it; still other cells kill your own cells when a virus has taken them over or they have turned cancerous. Through all of this it keeps a memory that makes the second encounter faster and stronger.'
    },
    location: {
      ar: 'ليس عضوا واحدا بل جهاز منتشر: نخاع العظم يصنع كل الخلايا، والغدة الصعترية تدرب الخلايا التائية، والعقد اللمفاوية والطحال واللوزتان مراكز اللقاء والتنسيق، والدم واللمف طرق النقل، والمعركة نفسها تدور في النسيج كما في هذه الصورة.',
      en: 'Not one organ but a system spread through the body: the bone marrow makes all the cells, the thymus trains the T cells, the lymph nodes, spleen and tonsils are the meeting and coordinating centres, blood and lymph are the roads, and the battle itself is fought in the tissue as in this picture.'
    },
    size: {
      ar: 'البلعم نحو 20–40 ميكرومترا، والعدلة نحو 12–15، واللمفاوية نحو 7–10، والجرثومة العصوية نحو 2 ميكرومتر، والجسم المضاد نحو 10 نانومترات فقط. في كل مليمتر مكعب من الدم نحو 4000–11000 كرية بيضاء، ونصفها الى ثلاثة ارباعها عدلات، وينتج نخاع العظم نحو مئة مليار عدلة كل يوم.',
      en: 'A macrophage is about 20–40 micrometres, a neutrophil 12–15, a lymphocyte 7–10, a rod bacterium about 2 micrometres, and an antibody just 10 nanometres. Every cubic millimetre of blood holds some 4,000–11,000 white cells, half to three quarters of them neutrophils, and the marrow makes about a hundred billion neutrophils every day.'
    },
    short: {
      ar: 'جيشان في جسمك: واحد يهاجم فورا، وواحد يتعرف ويتذكر.',
      en: 'Two armies inside you: one attacks at once, the other recognises and remembers.'
    },
    parts: [
      { ar: 'البلعم والعدلة — المناعة الفطرية', en: 'Macrophage and neutrophil — innate immunity' },
      { ar: 'الخلايا اللمفاوية — المناعة المكتسبة', en: 'Lymphocytes — acquired immunity' },
      { ar: 'الأجسام المضادة — وسم الممرض', en: 'Antibodies — tagging the pathogen' },
      { ar: 'الذاكرة المناعية — أساس اللقاحات', en: 'Immune memory — the basis of vaccines' }
    ],
    diseases: [
      { name: { ar: 'نقص المناعة', en: 'Immunodeficiency' }, desc: { ar: 'ضعف او غياب جزء من الجهاز، اما بالوراثة او مكتسبا كما في الايدز وبعد العلاج الكيماوي، فتتكرر العدوى وتشتد وتاتي من جراثيم لا تؤذي الاصحاء', en: 'Part of the system is weak or missing, either inherited or acquired as in HIV and after chemotherapy, so infections come again and again, run severe, and are caused by germs that never trouble healthy people' } },
      { name: { ar: 'أمراض المناعة الذاتية', en: 'Autoimmune disease' }, desc: { ar: 'يخطئ الجهاز في التمييز فيهاجم انسجة الجسم نفسه كانها دخيل، ومنه الروماتويد والذئبة والسكري من النوع الاول والتصلب المتعدد', en: 'The system fails to tell self from foreign and attacks the body own tissues as if they were an intruder; rheumatoid arthritis, lupus, type 1 diabetes and multiple sclerosis are examples' } },
      { name: { ar: 'الحساسية', en: 'Allergy' }, desc: { ar: 'رد فعل مبالغ فيه تجاه شيء غير مؤذ اصلا كالغبار او حبوب اللقاح او الفول السوداني، فتاتي الحكة والعطاس والطفح، وقد تصل الى صدمة تحسسية تهدد الحياة', en: 'An exaggerated reaction to something harmless in itself such as dust, pollen or peanut, bringing itching, sneezing and rash, and sometimes reaching a life-threatening anaphylactic shock' } },
      { name: { ar: 'العاصفة السيتوكينية', en: 'Cytokine storm' }, desc: { ar: 'تفلت الاشارات الكيميائية التي تنسق المعركة فتفرز بكميات هائلة، فيتحول الالتهاب نفسه الى المرض ويؤذي الرئتين والاعضاء، وحدث كثيرا في الحالات الشديدة من كوفيد', en: 'The chemical signals that coordinate the battle run out of control and pour out in huge amounts, so the inflammation itself becomes the disease and damages the lungs and other organs; this was common in severe COVID' } },
      { name: { ar: 'الإنتان (تسمم الدم)', en: 'Sepsis' }, desc: { ar: 'انتشار العدوى في الدم مع رد مناعي جارف يهبط الضغط ويعطل الاعضاء، وهو حالة طارئة تقاس بالساعات وتحتاج مضادات حيوية فورية', en: 'Infection spreads into the blood with an overwhelming immune response that drops the blood pressure and shuts organs down; an emergency measured in hours that needs antibiotics immediately' } }
    ]
  }
]);

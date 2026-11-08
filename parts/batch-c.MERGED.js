/* ==========================================================================
   دفعة C — تسعة عناصر جديدة
   الجيوب الأنفية · جارات الدرقية · المفصل الصدغي الفكي · مفصل الورك ·
   الخلية البشرية · الليف العضلي · داخل العظم · مفصل المرفق · مفصل الكاحل
   ========================================================================== */

/* ---------- الجيوب الأنفية (منظر أمامي للجمجمة شبه شفافة) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'sinuses', type: 'organ', system: 'organs',
    name: { ar: 'الجيوب الأنفية', en: 'Paranasal sinuses' },
    img: 'img/sinuses.webp', imgBack: 'img/sinuses-back.webp', thumb: 'img/thumb-sinuses.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الجيب الجبهي', en: 'Frontal sinus', x: 33, y: 10, side: 'left',
        desc: {
          ar: 'تجويف هوائي داخل عظم الجبهة فوق الحاجب مباشرة. يولد الطفل بلا هذا الجيب، ولا يبدأ بالتكون الا بعد السنة السابعة تقريبا، ولهذا لا يشكو الصغار من الم الجبهة عند الزكام.',
          en: 'An air space inside the frontal bone, just above the eyebrow. A baby is born without it; it only begins to form after about the seventh year, which is why small children do not get the forehead pain of sinusitis.'
        }
      },
      {
        ar: 'الخلايا الغربالية', en: 'Ethmoid air cells', x: 53, y: 26, side: 'right',
        desc: {
          ar: 'ليست تجويفا واحدا بل عش نحل من غرف صغيرة بين العينين، جدرانها من اقصر عظام الجسم. رقتها هي سبب سهولة انتقال التهاب الجيوب منها الى محجر العين.',
          en: 'Not one cavity but a honeycomb of small chambers between the eyes, walled by some of the thinnest bone in the body. That thinness is why an infection here can spread so easily into the eye socket.'
        }
      },
      {
        ar: 'محجر العين', en: 'Eye socket (orbit)', x: 70, y: 33, side: 'right',
        desc: {
          ar: 'الجيوب تحيط بالعين من ثلاث جهات: الجبهي فوقها، والغربالي الى جانبها من الداخل، والفكي تحتها. هذا الجوار يفسر لماذا يوجع الوجه كله حين تلتهب الجيوب.',
          en: 'The sinuses surround the eye on three sides: the frontal above, the ethmoid on its inner side, the maxillary below. That neighbourhood explains why the whole face aches when the sinuses are inflamed.'
        }
      },
      {
        ar: 'أعلى تجويف الأنف', en: 'Roof of the nasal cavity', x: 46, y: 39, side: 'left',
        desc: {
          ar: 'المنطقة الداكنة في العمق هي سقف تجويف الانف، وفيها تفترش الخلايا الشمية التي تلتقط الروائح. وخلفها في عمق الجمجمة يقبع الجيب الوتدي، ولا يظهر من الامام لانه ابعد الجيوب الى الخلف.',
          en: 'The dark area deep in the middle is the roof of the nasal cavity, carpeted with the smell-sensing cells. Behind it, deep inside the skull, lies the sphenoid sinus, which cannot be seen from the front because it is the most posterior of them all.'
        }
      },
      {
        ar: 'المحارة الوسطى', en: 'Middle turbinate', x: 44, y: 46, side: 'left',
        desc: {
          ar: 'رف عظمي ملفوف كاللفافة يبرز في تجويف الانف. تحته يفتح الجيب الفكي والجبهي والخلايا الغربالية الامامية وتصرف مخاطها، ولهذا يسمى ممرها ملتقى الجيوب.',
          en: 'A scroll-shaped shelf of bone projecting into the nasal cavity. The maxillary and frontal sinuses and the front ethmoid cells all drain beneath it, which is why the passage under it is called the meeting point of the sinuses.'
        }
      },
      {
        ar: 'الجيب الفكي', en: 'Maxillary sinus', x: 25, y: 53, side: 'left',
        desc: {
          ar: 'اكبر الجيوب على الاطلاق، يملأ عظم الوجنة ويسع نحو خمسة عشر مليلترا. فتحة تصريفه في اعلاه لا في اسفله، فالمخاط مضطر ان يصعد لا ان ينزل، وهذا سبب امتلائه بسرعة عند الزكام.',
          en: 'The largest sinus of all, filling the cheekbone and holding about fifteen millilitres. Its drainage opening sits near its top, not its floor, so mucus must travel upward rather than down, which is why it fills so readily during a cold.'
        }
      },
      {
        ar: 'تجويف الأنف', en: 'Nasal cavity', x: 56, y: 57, side: 'right', go: 'nose',
        desc: {
          ar: 'الممر الذي تصب فيه كل الجيوب. الهواء الداخل يمر عليه فيدفأ ويرطب ويصفى قبل ان يصل الرئتين، والجيوب حوله تشارك في ذلك وتخفف وزن الجمجمة.',
          en: 'The passage into which every sinus drains. Incoming air is warmed, moistened and filtered here before it reaches the lungs, and the sinuses around it share in that work while lightening the skull.'
        }
      },
      {
        ar: 'المحارة السفلى', en: 'Inferior turbinate', x: 44, y: 60, side: 'left',
        desc: {
          ar: 'اكبر المحارات واغزرها اوعية دموية. تتضخم وتنكمش خلال اليوم فتفتح مجرى الهواء وتغلقه بالتناوب بين فتحتي الانف، وهي التي تنسد عند الزكام والحساسية.',
          en: 'The largest and most richly vascular turbinate. It swells and shrinks through the day, alternately opening and narrowing the airflow of each nostril, and it is the part that blocks up in a cold or an allergy.'
        }
      },
      {
        ar: 'الحاجز الأنفي', en: 'Nasal septum', x: 50, y: 64, side: 'right',
        desc: {
          ar: 'جدار من عظم رقيق في الخلف وغضروف في الامام يقسم الانف الى نصفين. ميلانه عن المنتصف شائع جدا بين الناس، وقد يضيق احد المجريين فيصعب التنفس منه.',
          en: 'A wall of thin bone at the back and cartilage at the front that divides the nose into two halves. A deviation from the midline is very common, and it can narrow one side enough to make breathing through it difficult.'
        }
      },
      {
        ar: 'جذور الأسنان العليا', en: 'Roots of the upper teeth', x: 40, y: 76, side: 'left', go: 'teeth',
        desc: {
          ar: 'ارضية الجيب الفكي رقيقة جدا، وجذور الاضراس العليا تكاد تخترقها. لذلك قد يشعر المصاب بالتهاب الجيوب بالم في اسنانه، وقد يشعل خراج ضرس التهابا في الجيب نفسه.',
          en: 'The floor of the maxillary sinus is very thin, and the roots of the upper molars almost pierce it. So a sinus infection can be felt as toothache, and an abscessed tooth can in turn inflame the sinus itself.'
        }
      }
    ],
    desc: {
      ar: 'الجيوب الأنفية أربعة أزواج من التجاويف الهوائية المحفورة داخل عظام الوجه والجمجمة حول الأنف: الجبهية فوق العينين، والغربالية بينهما، والفكية في الوجنتين، والوتدية في العمق خلفها. كلها مبطنة بغشاء مخاطي وتفتح على تجويف الأنف بفتحات ضيقة تصرف مخاطها إليه. وجودها يخفف وزن الجمجمة ويرطب الهواء الداخل ويمنح الصوت رنينه، ولهذا يتغير صوت الإنسان حين تنسد.',
      en: 'The paranasal sinuses are four pairs of air-filled cavities hollowed out of the bones of the face and skull around the nose: frontal above the eyes, ethmoid between them, maxillary in the cheeks and sphenoid deep behind. All are lined with mucous membrane and open into the nasal cavity through narrow channels that drain them. They lighten the skull, moisten incoming air and give the voice its resonance, which is why a person sounds different when they are blocked.'
    },
    func: {
      ar: 'تخفيف وزن الجمجمة الأمامية دون إضعافها، وترطيب الهواء الداخل وتدفئته، وإفراز مخاط يحمل الغبار والجراثيم بأهداب دقيقة تدفعه نحو الأنف ثم البلعوم، ومنح الصوت رنينه. وتعمل كذلك كوسادة هوائية تمتص جزءا من صدمات الوجه فتحمي المخ والعينين.',
      en: 'They lighten the front of the skull without weakening it, warm and moisten incoming air, secrete mucus that traps dust and germs and is swept by fine hairs toward the nose and throat, and give the voice its resonance. They also act as an air cushion that absorbs part of a blow to the face, shielding the brain and the eyes.'
    },
    location: { ar: 'داخل عظام الجبهة والوجنتين وبين العينين وفي عمق قاعدة الجمجمة، حول تجويف الأنف من كل جهة', en: 'Within the bones of the forehead and cheeks, between the eyes and deep at the base of the skull, surrounding the nasal cavity on every side' },
    size: { ar: 'الجيب الفكي أكبرها بنحو ١٥ مليلترا، والجبهي نحو ٦ إلى ٧ مليلترات، والخلايا الغربالية من ٧ إلى ١٥ خلية صغيرة في كل جانب', en: 'The maxillary is the largest at about 15 ml, the frontal about 6 to 7 ml, and the ethmoid consists of 7 to 15 small cells on each side' },
    short: { ar: 'غرف هوائية داخل عظام الوجه تخفف الجمجمة وترطب النفس', en: 'Air rooms inside the bones of the face that lighten the skull and moisten each breath' },
    parts: [
      { ar: 'الجيب الجبهي فوق العينين', en: 'The frontal sinus above the eyes' },
      { ar: 'الخلايا الغربالية بين العينين', en: 'The ethmoid air cells between the eyes' },
      { ar: 'الجيب الفكي في الوجنة', en: 'The maxillary sinus in the cheek' },
      { ar: 'الجيب الوتدي في عمق قاعدة الجمجمة', en: 'The sphenoid sinus deep in the base of the skull' }
    ],
    diseases: [
      { name: { ar: 'التهاب الجيوب الحاد', en: 'Acute sinusitis' }, desc: { ar: 'انسداد فتحة التصريف بعد زكام فيحتبس المخاط ويلتهب، مع ألم في الوجه واحتقان', en: 'The drainage opening blocks after a cold, mucus is trapped and becomes inflamed, with facial pain and congestion' } },
      { name: { ar: 'التهاب الجيوب المزمن', en: 'Chronic sinusitis' }, desc: { ar: 'التهاب يستمر أكثر من ثلاثة أشهر مع انسداد دائم وضعف حاسة الشم', en: 'Inflammation lasting more than three months, with constant blockage and a dulled sense of smell' } },
      { name: { ar: 'السلائل الأنفية', en: 'Nasal polyps' }, desc: { ar: 'نموات طرية من الغشاء المخاطي تسد المجرى وتمنع تصريف الجيوب', en: 'Soft growths of the lining that block the passage and stop the sinuses draining' } },
      { name: { ar: 'انحراف الحاجز الأنفي', en: 'Deviated septum' }, desc: { ar: 'ميلان الجدار الفاصل فيضيق أحد المجريين ويعيق التنفس والتصريف', en: 'The dividing wall leans to one side, narrowing one passage and hampering breathing and drainage' } },
      { name: { ar: 'التهاب الجيوب الفطري', en: 'Fungal sinusitis' }, desc: { ar: 'نمو فطري داخل الجيب، وأخطر صوره تصيب ضعيفي المناعة ومرضى السكري', en: 'Fungal growth inside the sinus; its most dangerous form strikes people with weak immunity or diabetes' } }
    ]
  }
]);

/* ---------- الغدد جارات الدرقية (منظر خلفي للغدة الدرقية) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'parathyroid', type: 'organ', system: 'endocrine',
    name: { ar: 'الغدد جارات الدرقية', en: 'Parathyroid glands' },
    img: 'img/parathyroid.webp', imgBack: 'img/parathyroid-back.webp', thumb: 'img/thumb-parathyroid.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الحنجرة', en: 'Larynx', x: 52, y: 10, side: 'right', go: 'larynx',
        desc: {
          ar: 'صندوق الصوت يعلو الغدة الدرقية مباشرة. جراح الغدة يعمل تحته بحذر شديد لان اعصاب الصوت تمر بينهما.',
          en: 'The voice box sits directly above the thyroid. A surgeon working below it must be extremely careful, because the nerves of the voice run between the two.'
        }
      },
      {
        ar: 'الغدة جارة الدرقية العلوية', en: 'Superior parathyroid gland', x: 30, y: 30, side: 'left',
        desc: {
          ar: 'حبة صغيرة بحجم حبة العدس لا يتجاوز وزنها ثلاثين مليغراما، مغروسة في السطح الخلفي للغدة الدرقية. لونها اشقر يميزها عن نسيج الدرقية الاحمر الغامق.',
          en: 'A small body the size of a lentil, weighing no more than thirty milligrams, embedded in the back surface of the thyroid. Its tan colour sets it apart from the darker red thyroid tissue around it.'
        }
      },
      {
        ar: 'الغدة العلوية المقابلة', en: 'The other superior gland', x: 70, y: 30, side: 'right',
        desc: {
          ar: 'توأمها على الفص الاخر. الغدد اربع في الغالب، لكن نحو واحد من كل عشرة اشخاص يولد بخمس او بثلاث، وقد تهاجر واحدة الى الصدر.',
          en: 'Its twin on the other lobe. There are usually four glands, but roughly one person in ten is born with five or three, and one may even migrate down into the chest.'
        }
      },
      {
        ar: 'الغدة الدرقية', en: 'Thyroid gland', x: 20, y: 41, side: 'left', go: 'thyroid',
        desc: {
          ar: 'الغدة الكبيرة الحمراء التي تجلس عليها جارات الدرقية. الاسم وحده هو ما يجمعهما، فعملهما مختلف تماما: الدرقية تضبط سرعة حرق الجسم، وجاراتها تضبط الكالسيوم.',
          en: 'The large red gland on which the parathyroids sit. Only the name joins them, for their work is entirely different: the thyroid sets the speed at which the body burns fuel, its neighbours set the calcium.'
        }
      },
      {
        ar: 'برزخ الغدة الدرقية', en: 'Isthmus of the thyroid', x: 50, y: 41, side: 'right',
        desc: {
          ar: 'الجسر النسيجي الذي يصل فصي الغدة الدرقية امام القصبة الهوائية، فيبدو شكل الغدة كله كفراشة باسطة جناحيها.',
          en: 'The bridge of tissue joining the two thyroid lobes in front of the windpipe, giving the whole gland the look of a butterfly with its wings spread.'
        }
      },
      {
        ar: 'الغدة جارة الدرقية السفلية', en: 'Inferior parathyroid gland', x: 29, y: 52, side: 'left',
        desc: {
          ar: 'الغدتان السفليتان اكثر تنقلا في مواضعهما من العلويتين، لان مسارهما في نمو الجنين اطول. لهذا يبحث الجراح عنهما بعناية اكبر.',
          en: 'The two lower glands vary more in position than the upper pair, because their path during development in the womb is longer. A surgeon therefore hunts for them with more care.'
        }
      },
      {
        ar: 'الغدة السفلية المقابلة', en: 'The other inferior gland', x: 71, y: 52, side: 'right',
        desc: {
          ar: 'رابعة الاربع. اذا استؤصلت الغدة الدرقية كاملة بلا حفظ هذه الغدد سقط الكالسيوم في الدم خلال ساعات وحدث تشنج في اليدين والوجه.',
          en: 'The fourth of the four. If the thyroid is removed entirely without sparing these glands, blood calcium falls within hours and the hands and face go into spasm.'
        }
      },
      {
        ar: 'شرايين الغدة', en: 'Arteries of the gland', x: 66, y: 63, side: 'right',
        desc: {
          ar: 'شبكة دقيقة من الشرايين تغذي الغدة الدرقية وجاراتها. الشريان الدرقي السفلي هو المغذي الاساسي لجارات الدرقية، وقطعه خطأ يفقدها حياتها.',
          en: 'A fine network of arteries feeding the thyroid and its neighbours. The inferior thyroid artery is the main supply to the parathyroids, and cutting it by mistake costs them their life.'
        }
      },
      {
        ar: 'الوريد الوداجي الباطن', en: 'Internal jugular vein', x: 26, y: 68, side: 'left',
        desc: {
          ar: 'وريد ضخم يعيد الدم من الراس الى القلب، ويمر الى جانب الغدة مباشرة. عبر فروعه تسحب عينات الدم احيانا لتحديد ايهما هي الغدة المريضة.',
          en: 'A large vein returning blood from the head to the heart, running right beside the gland. Blood samples are sometimes drawn from its branches to work out which gland is the diseased one.'
        }
      },
      {
        ar: 'الشريان السباتي', en: 'Carotid artery', x: 78, y: 74, side: 'right',
        desc: {
          ar: 'الشريان الكبير الذي يحمل الدم الى الدماغ، ويجاور الغدة من الخارج. قربه هو ما يجعل جراحة الرقبة عملا دقيقا في مساحة ضيقة مزدحمة.',
          en: 'The great artery carrying blood to the brain, lying just lateral to the gland. Its nearness is what makes neck surgery delicate work in a narrow, crowded space.'
        }
      },
      {
        ar: 'العصب الحنجري الراجع', en: 'Recurrent laryngeal nerve', x: 34, y: 80, side: 'left',
        desc: {
          ar: 'الخيط الاصفر الصاعد بجانب القصبة. هو عصب الحبال الصوتية، ويصعد من الصدر بعد ان ينزل اليه، ولذلك سمي راجعا. اذا اصيب في الجراحة بح الصوت او ضاع.',
          en: 'The yellow thread climbing beside the windpipe. It is the nerve of the vocal cords, and it rises back up after first descending into the chest, which is why it is called recurrent. Injure it in surgery and the voice turns hoarse or is lost.'
        }
      },
      {
        ar: 'القصبة الهوائية', en: 'Trachea', x: 47, y: 90, side: 'left', go: 'bronchi',
        desc: {
          ar: 'انبوب الهواء المدعم بحلقات غضروفية، تلتف الغدة الدرقية حوله كطوق. وجود هذا الجوار يجعل تضخم الغدة قادرا على ضغط النفس.',
          en: 'The air tube braced by rings of cartilage, around which the thyroid wraps like a collar. That closeness is why an enlarged gland can press on the breath.'
        }
      }
    ],
    desc: {
      ar: 'الغدد جارات الدرقية أربع غدد صغيرة بحجم حبة العدس، مغروسة في السطح الخلفي لفصي الغدة الدرقية، اثنتان في الأعلى واثنتان في الأسفل. رغم صغرها الشديد فهي الحارس الوحيد لمستوى الكالسيوم في الدم، وهو المعدن الذي لا ينبض القلب ولا تنقبض عضلة ولا يعمل عصب بدون ضبطه الدقيق. اسمها مأخوذ من جوارها للغدة الدرقية فقط، أما عملها فمستقل تماما عنها.',
      en: 'The parathyroids are four small glands, each about the size of a lentil, embedded in the back surface of the two thyroid lobes, two above and two below. Tiny as they are, they are the sole guardians of the calcium level in the blood, the mineral without whose exact regulation no heart beats, no muscle contracts and no nerve fires. Their name comes only from their position beside the thyroid; their work is entirely their own.'
    },
    func: {
      ar: 'إفراز هرمون جارات الدرقية الذي يرفع الكالسيوم في الدم إذا نقص، بثلاث طرق معا: يحرر الكالسيوم من مخزون العظام، ويأمر الكلى بأن تحتفظ به بدل طرحه في البول، وينشط فيتامين د لتزيد الأمعاء امتصاصه من الطعام. وحين يرتفع الكالسيوم تتوقف الغدد عن الإفراز فورا، فهي ميزان يعمل بلا انقطاع لحظة بلحظة.',
      en: 'They secrete parathyroid hormone, which raises blood calcium whenever it falls, by three routes at once: it releases calcium from the store held in bone, orders the kidneys to hold on to it instead of passing it in the urine, and activates vitamin D so the gut absorbs more from food. When calcium rises the glands stop secreting at once, so they work as a balance that never rests.'
    },
    location: { ar: 'على السطح الخلفي لفصي الغدة الدرقية في مقدمة الرقبة، اثنتان علويتان واثنتان سفليتان', en: 'On the posterior surface of the two thyroid lobes at the front of the neck, two upper and two lower' },
    size: { ar: 'كل غدة نحو ٦ مليمترات طولا و٣ عرضا، ووزنها من ٢٥ إلى ٤٠ مليغراما فقط، ومجموع الأربع أقل من غرام سدس', en: 'Each gland is about 6 mm long and 3 mm wide, weighing only 25 to 40 milligrams; all four together weigh well under a sixth of a gram' },
    short: { ar: 'أربع حبات عدس تحرس الكالسيوم في دمك', en: 'Four lentil-sized glands that stand guard over the calcium in your blood' },
    parts: [
      { ar: 'الغدتان العلويتان', en: 'The two superior glands' },
      { ar: 'الغدتان السفليتان', en: 'The two inferior glands' },
      { ar: 'الخلايا الرئيسية التي تفرز الهرمون', en: 'The chief cells that secrete the hormone' },
      { ar: 'الشريان الدرقي السفلي المغذي لها', en: 'The inferior thyroid artery that feeds them' }
    ],
    diseases: [
      { name: { ar: 'فرط نشاط جارات الدرقية', en: 'Hyperparathyroidism' }, desc: { ar: 'إفراز زائد يسحب الكالسيوم من العظام فتهش، ويرسبه في الكلى فتتكون الحصى', en: 'Excess hormone draws calcium out of the bones, thinning them, and deposits it in the kidneys as stones' } },
      { name: { ar: 'قصور جارات الدرقية', en: 'Hypoparathyroidism' }, desc: { ar: 'نقص الهرمون فيهبط الكالسيوم ويحدث تنميل وتشنج في اليدين وحول الفم', en: 'Too little hormone, so calcium falls and brings tingling and cramping in the hands and around the mouth' } },
      { name: { ar: 'الورم الغدي في جارة الدرقية', en: 'Parathyroid adenoma' }, desc: { ar: 'ورم حميد في غدة واحدة هو السبب الأشيع لفرط النشاط، وعلاجه استئصالها', en: 'A benign tumour in a single gland, the commonest cause of overactivity; removing it is the cure' } },
      { name: { ar: 'قصور ما بعد جراحة الرقبة', en: 'Post-surgical hypoparathyroidism' }, desc: { ar: 'إصابة الغدد أو إزالتها سهوا أثناء استئصال الدرقية، فيحتاج المريض كالسيوم مدى الحياة', en: 'The glands are bruised or removed by accident during thyroid surgery, leaving the patient on lifelong calcium' } }
    ]
  }
]);

/* ---------- المفصل الصدغي الفكي (مقطع سهمي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'tmj', type: 'organ', system: 'skeleton',
    name: { ar: 'المفصل الصدغي الفكي', en: 'Temporomandibular joint' },
    img: 'img/tmj.webp', imgBack: 'img/tmj-back.webp', thumb: 'img/thumb-tmj.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'العظم الصدغي', en: 'Temporal bone', x: 25, y: 12, side: 'left',
        desc: {
          ar: 'عظم جانب الجمجمة، ونسيجه الاسفنجي ظاهر هنا. في اسفله تنحفر الحفرة التي يستقر فيها الفك، وفي عمقه تسكن اذنك الداخلية.',
          en: 'The bone of the side of the skull, its spongy texture on show here. Its underside is hollowed into the socket that receives the jaw, and deep within it lives the inner ear.'
        }
      },
      {
        ar: 'الحفرة الفكية', en: 'Mandibular fossa', x: 42, y: 24, side: 'left',
        desc: {
          ar: 'الحفرة المقعرة في العظم الصدغي التي تجلس فيها لقمة الفك. ليست حفرة عميقة تحبس المفصل، بل ضحلة تسمح للفك ان ينزلق منها الى الامام عند فتح الفم على وسعه.',
          en: 'The concave hollow in the temporal bone in which the jaw condyle sits. It is not a deep locking socket but a shallow one, letting the jaw slide forward out of it when the mouth opens wide.'
        }
      },
      {
        ar: 'القرص المفصلي', en: 'Articular disc', x: 41, y: 30, side: 'right',
        desc: {
          ar: 'وسادة ليفية على شكل عدسة تفصل العظمين فتقسم المفصل الى طابقين: طابق علوي ينزلق فيه القرص، وطابق سفلي تدور فيه اللقمة. هذا القرص هو ما يخرج عن موضعه فتسمع طقطقة عند فتح الفم.',
          en: 'A lens-shaped fibrous pad that separates the two bones and divides the joint into two storeys: an upper one in which the disc glides and a lower one in which the condyle rotates. It is this disc that slips out of place and gives the click you hear when the mouth opens.'
        }
      },
      {
        ar: 'المحفظة المفصلية والأربطة', en: 'Joint capsule and ligaments', x: 27, y: 34, side: 'left',
        desc: {
          ar: 'غلاف ليفي محكم يطوق المفصل ويمنع اللقمة من الانفلات، وبطانته الداخلية تفرز سائلا زلقا يزيت الحركة. اذا ارتخى هذا الغلاف انخلع الفك بمجرد التثاؤب.',
          en: 'A tight fibrous sleeve that encircles the joint and keeps the condyle from escaping, its inner lining producing a slippery fluid that oils the movement. If the sleeve slackens, a mere yawn can dislocate the jaw.'
        }
      },
      {
        ar: 'العضلة الجناحية الوحشية', en: 'Lateral pterygoid muscle', x: 67, y: 38, side: 'right',
        desc: {
          ar: 'العضلة الوحيدة التي تفتح الفم فعليا، فهي تشد اللقمة والقرص الى الامام معا فينزلقان خارج الحفرة. اما بقية عضلات المضغ فكلها تغلق الفم لا تفتحه.',
          en: 'The one muscle that truly opens the mouth: it pulls the condyle and the disc forward together so both glide out of the socket. All the other chewing muscles close the jaw rather than open it.'
        }
      },
      {
        ar: 'الأذن', en: 'Ear', x: 7, y: 45, side: 'left', go: 'ear',
        desc: {
          ar: 'المفصل ملاصق لقناة الاذن من الخلف، ولذلك يشكو كثير من مرضى هذا المفصل من الم في الاذن او طنين، ويظنون العلة في السمع وهي في الفك.',
          en: 'The joint lies right against the ear canal from behind, which is why many people with a jaw joint problem complain of earache or ringing and think the trouble is in their hearing when it is in the jaw.'
        }
      },
      {
        ar: 'لقمة الفك السفلي', en: 'Condyle of the mandible', x: 44, y: 46, side: 'right',
        desc: {
          ar: 'الراس المستدير لعظم الفك السفلي. حركته مزدوجة: يدور في مكانه اول ما تفتح فمك، ثم ينزلق الى الامام لتكمل الفتح. هذا الجمع بين الدوران والانزلاق يجعله افرد مفاصل الجسم.',
          en: 'The rounded head of the lower jawbone. Its movement is double: it rotates in place as you begin to open your mouth, then slides forward to complete the opening. That mixture of rotation and glide makes it the most singular joint in the body.'
        }
      },
      {
        ar: 'عنق اللقمة', en: 'Neck of the condyle', x: 45, y: 57, side: 'left',
        desc: {
          ar: 'الجزء الرفيع تحت الراس، وهو انحف موضع في الفك واكثره تعرضا للكسر عند اللكمة او السقوط على الذقن.',
          en: 'The narrow part below the head, the slenderest point of the jaw and the one most likely to break in a punch or a fall onto the chin.'
        }
      },
      {
        ar: 'فرع الفك السفلي', en: 'Ramus of the mandible', x: 48, y: 80, side: 'left',
        desc: {
          ar: 'الصفيحة العظمية العريضة الصاعدة من زاوية الفك الى اللقمة. تلتصق بها عضلات المضغ من وجهيها، وداخلها تمر قناة العصب المغذي للاسنان السفلية.',
          en: 'The broad plate of bone rising from the angle of the jaw to the condyle. The chewing muscles grip it on both faces, and inside it runs the canal of the nerve that supplies the lower teeth.'
        }
      },
      {
        ar: 'عضلات المضغ', en: 'Muscles of mastication', x: 80, y: 78, side: 'right', go: 'muscles',
        desc: {
          ar: 'كتلة عضلية قوية تغلق الفك. اقواها الماضغة والصدغية، وهي تولد ضغطا يبلغ عند الاضراس نحو سبعين كيلوغراما. شدها المستمر في التوتر او صرير الاسنان ليلا هو اشيع سبب لالم هذا المفصل.',
          en: 'The powerful muscle mass that closes the jaw. The strongest are the masseter and temporalis, generating a force at the molars of around seventy kilograms. Their constant clenching under stress, or grinding at night, is the commonest cause of pain in this joint.'
        }
      }
    ],
    desc: {
      ar: 'المفصل الصدغي الفكي هو المفصل الذي يصل عظم الفك السفلي بقاعدة الجمجمة أمام الأذن مباشرة، وهو أكثر مفاصل الجسم عملا: تحركه في اليوم آلاف المرات في الكلام والمضغ والبلع والتثاؤب. وهو الوحيد الذي يجمع بين الدوران والانزلاق معا، ويفصل فيه بين العظمين قرص ليفي يقسمه إلى طابقين. ولأن الفك عظم واحد بمفصلين على الجانبين، فلا يمكن لأحدهما أن يتحرك وحده أبدا.',
      en: 'The temporomandibular joint is where the lower jawbone meets the base of the skull, just in front of the ear, and it is the busiest joint in the body: you move it thousands of times a day in speech, chewing, swallowing and yawning. It is the only joint that both rotates and glides, and a fibrous disc between the two bones divides it into two storeys. Because the jaw is a single bone with a joint at each end, neither side can ever move alone.'
    },
    func: {
      ar: 'فتح الفم وإغلاقه، وتحريك الفك إلى الأمام والخلف وإلى الجانبين، وهي الحركات التي تسمح بقطع الطعام وطحنه وبنطق الحروف. يبدأ الفتح بدوران اللقمة في مكانها في أول عشرين مليمترا، ثم تنزلق مع القرص إلى الأمام خارج الحفرة لتكمل الفتحة، ولهذا قد يعلق الفك مفتوحا إن تجاوزت اللقمة حدها.',
      en: 'It opens and closes the mouth and moves the jaw forward, backward and side to side, the movements that let us cut and grind food and shape the sounds of speech. Opening begins with the condyle rotating in place for the first twenty millimetres or so, after which it glides forward with the disc out of the socket to complete the opening, which is why a jaw can lock open if the condyle travels too far.'
    },
    location: { ar: 'على جانبي الوجه أمام صيوان الأذن مباشرة، بين لقمة الفك السفلي والحفرة الفكية في العظم الصدغي', en: 'On each side of the face immediately in front of the ear, between the condyle of the mandible and the mandibular fossa of the temporal bone' },
    size: { ar: 'اللقمة نحو ٢٠ مليمترا عرضا و١٠ سمكا، والقرص المفصلي نحو ٣ مليمترات في وسطه، والفتحة الطبيعية للفم من ٤٠ إلى ٥٥ مليمترا', en: 'The condyle is about 20 mm wide and 10 mm thick, the disc about 3 mm thick at its centre, and a normal mouth opening measures 40 to 55 mm' },
    short: { ar: 'المفصل الوحيد الذي يدور وينزلق معا، ويعمل آلاف المرات كل يوم', en: 'The one joint that both rotates and glides, working thousands of times a day' },
    parts: [
      { ar: 'لقمة الفك السفلي', en: 'The condyle of the mandible' },
      { ar: 'الحفرة الفكية في العظم الصدغي', en: 'The mandibular fossa of the temporal bone' },
      { ar: 'القرص المفصلي بينهما', en: 'The articular disc between them' },
      { ar: 'المحفظة والأربطة وعضلات المضغ', en: 'The capsule, ligaments and chewing muscles' }
    ],
    diseases: [
      { name: { ar: 'اضطراب المفصل الصدغي الفكي', en: 'Temporomandibular disorder' }, desc: { ar: 'ألم في المفصل وعضلات الوجه مع صعوبة في المضغ، وأشيع أسبابه شد العضلات والتوتر', en: 'Pain in the joint and the face muscles with difficulty chewing; the commonest cause is muscle clenching and stress' } },
      { name: { ar: 'انزياح القرص المفصلي', en: 'Disc displacement' }, desc: { ar: 'خروج القرص عن موضعه فوق اللقمة، فتسمع طقطقة عند الفتح وقد يعلق الفك', en: 'The disc slips off its place on the condyle, giving a click on opening and sometimes locking the jaw' } },
      { name: { ar: 'صرير الأسنان', en: 'Bruxism' }, desc: { ar: 'طحن الأسنان لا إراديا في النوم فيرهق المفصل ويآكل المينا ويصدع الأسنان', en: 'Involuntary grinding during sleep that wears the joint, erodes the enamel and cracks teeth' } },
      { name: { ar: 'خلع الفك', en: 'Jaw dislocation' }, desc: { ar: 'انزلاق اللقمة أمام الحفرة ولا ترجع، فيبقى الفم مفتوحا حتى يعيده الطبيب', en: 'The condyle slides in front of the socket and will not return, leaving the mouth stuck open until a doctor replaces it' } },
      { name: { ar: 'خشونة المفصل', en: 'Osteoarthritis of the joint' }, desc: { ar: 'تآكل الأسطح المفصلية مع العمر فيصدر المفصل صوت احتكاك خشن ويتيبس', en: 'Wear of the joint surfaces with age, giving a coarse grating sound and stiffness' } }
    ]
  }
]);

/* ---------- مفصل الورك (مقطع أمامي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'hip', type: 'organ', system: 'skeleton',
    name: { ar: 'مفصل الورك', en: 'Hip joint' },
    img: 'img/hip.webp', imgBack: 'img/hip-back.webp', thumb: 'img/thumb-hip.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الشفة الحقية', en: 'Acetabular labrum', x: 42, y: 16, side: 'right',
        desc: {
          ar: 'حلقة غضروفية ليفية تتوج حافة التجويف فتعمقه وتمسك براس الفخذ كالجوان المطاطي. تمزقها سبب شائع لالم الورك عند الرياضيين وللاحساس بانحشار داخل المفصل.',
          en: 'A fibrous cartilage ring crowning the rim of the socket, deepening it and gripping the head of the femur like a rubber seal. A tear in it is a common cause of hip pain in athletes and of a catching feeling inside the joint.'
        }
      },
      {
        ar: 'المحفظة والأربطة', en: 'Capsule and ligaments', x: 28, y: 22, side: 'left',
        desc: {
          ar: 'غلاف ليفي سميك يمتد من حافة الحوض الى عنق الفخذ. اقوى اربطة الجسم كلها هنا، ويتلوى عند الوقوف فيشد المفصل تلقائيا ويحملك بلا جهد عضلي يذكر.',
          en: 'A thick fibrous sleeve running from the rim of the pelvis to the neck of the femur. The strongest ligaments in the whole body are here; standing upright twists them tight so they hold you with almost no muscular effort.'
        }
      },
      {
        ar: 'الحق', en: 'Acetabulum (socket)', x: 70, y: 24, side: 'right',
        desc: {
          ar: 'التجويف الكروي في عظم الحوض، وهو نصف كرة عميقة تحتضن اكثر من نصف راس الفخذ. عمق هذا التجويف هو الفرق الكبير بين الورك والكتف: الورك ثابت جدا والكتف حر جدا.',
          en: 'The cup-shaped hollow in the pelvic bone, a deep half-sphere that embraces more than half the femoral head. That depth is the great difference between hip and shoulder: the hip is very stable, the shoulder very free.'
        }
      },
      {
        ar: 'رأس عظم الفخذ', en: 'Head of the femur', x: 51, y: 31, side: 'right',
        desc: {
          ar: 'كرة عظمية املس تقارب ثلثي الكرة الكاملة. سطحها مغطى بغضروف زجاجي لامع، وهي التي تستبدل بكرة معدنية في عملية تبديل مفصل الورك.',
          en: 'A smooth bony ball, close to two thirds of a full sphere. Its surface is covered in glossy hyaline cartilage, and it is this ball that is swapped for a metal one in a hip replacement.'
        }
      },
      {
        ar: 'الغضروف المفصلي', en: 'Articular cartilage', x: 65, y: 38, side: 'right',
        desc: {
          ar: 'طبقة رقيقة زلقة تكسو سطحي المفصل، احتكاكها اقل من احتكاك الجليد على الجليد. لا اوعية دموية فيها، ولذلك اذا تاكلت لا تنمو من جديد، وهذا اصل خشونة المفصل.',
          en: 'A thin slippery layer coating both joint surfaces, with less friction than ice sliding on ice. It carries no blood vessels, so once it wears away it never grows back, and that is the root of osteoarthritis.'
        }
      },
      {
        ar: 'المدور الكبير', en: 'Greater trochanter', x: 14, y: 38, side: 'left',
        desc: {
          ar: 'النتوء العظمي الذي تحسه بيدك على جانب وركك. تشد فيه العضلات التي تثبت الحوض عند المشي، ولولاها لمال جسمك مع كل خطوة على قدم واحدة.',
          en: 'The bony prominence you can feel with your hand on the side of your hip. Into it pull the muscles that steady the pelvis while you walk; without them your body would tilt with every step on one leg.'
        }
      },
      {
        ar: 'الرباط المدور', en: 'Ligamentum teres', x: 58, y: 46, side: 'right',
        desc: {
          ar: 'رباط صغير يشد راس الفخذ الى قاع التجويف، وداخله شريان دقيق يغذي الراس في الطفولة. تغذية الراس ضعيفة اصلا، ولذلك يموت عظمه اذا انقطع دمه بعد الكسر.',
          en: 'A small ligament tethering the head of the femur to the floor of the socket, carrying inside it a slender artery that feeds the head in childhood. The head is poorly supplied to begin with, which is why its bone dies if the blood is cut off after a fracture.'
        }
      },
      {
        ar: 'عنق عظم الفخذ', en: 'Neck of the femur', x: 34, y: 50, side: 'left',
        desc: {
          ar: 'الجسر المائل بين الراس والجسم، وميلانه هو ما يبعد الساق عن الحوض فتستطيع المشي. هو ايضا اضعف حلقة في العظم، وكسر عنق الفخذ من اخطر كسور كبار السن.',
          en: 'The angled bridge between the head and the shaft; its slant is what sets the leg away from the pelvis so we can walk. It is also the weakest link in the bone, and a fractured femoral neck is among the most serious injuries of old age.'
        }
      },
      {
        ar: 'الثقبة السدادية', en: 'Obturator foramen', x: 72, y: 58, side: 'right',
        desc: {
          ar: 'اكبر ثقبة في الهيكل العظمي كله، تخفف وزن الحوض دون ان تضعفه. يسدها في الحي غشاء متين تمر منه اوعية واعصاب الى داخل الفخذ.',
          en: 'The largest opening in the whole skeleton, lightening the pelvis without weakening it. In life a tough membrane closes it, pierced by the vessels and nerves running into the inner thigh.'
        }
      },
      {
        ar: 'المدور الصغير', en: 'Lesser trochanter', x: 41, y: 67, side: 'left',
        desc: {
          ar: 'نتوء صغير على الجانب الداخلي، تلتصق به عضلة الحرقفي القطني وهي اقوى رافع للفخذ. كل خطوة ترفع فيها ركبتك تبدأ بشد هذه العضلة على هذا النتوء.',
          en: 'A small projection on the inner side, the attachment of the iliopsoas, the strongest flexor of the thigh. Every step in which you lift your knee begins with that muscle pulling on this bump.'
        }
      },
      {
        ar: 'العضلات المحيطة', en: 'Surrounding muscles', x: 10, y: 75, side: 'left', go: 'muscles',
        desc: {
          ar: 'ثلاث وعشرون عضلة تعبر هذا المفصل، وهو اكثر عدد يجتمع على مفصل واحد. لهذا يبقى الورك ثابتا حتى في القفز والركض رغم ان وزن الجسم كله يمر خلاله.',
          en: 'Twenty-three muscles cross this joint, more than gather on any other. That is why the hip stays stable even in jumping and running, though the whole weight of the body passes through it.'
        }
      },
      {
        ar: 'العظم الإسكي', en: 'Ischium', x: 62, y: 78, side: 'right',
        desc: {
          ar: 'الجزء السفلي الخلفي من عظم الحوض، وهو الذي تجلس عليه فعليا. يشترك مع العظم الحرقفي والعاني في تكوين تجويف الورك، وتلتحم الثلاثة في سن المراهقة.',
          en: 'The lower back part of the pelvic bone, the part you actually sit on. Together with the ilium and the pubis it forms the hip socket, the three fusing into one during the teenage years.'
        }
      },
      {
        ar: 'جسم عظم الفخذ', en: 'Shaft of the femur', x: 27, y: 82, side: 'left', go: 'skeleton',
        desc: {
          ar: 'اطول عظام الجسم واقواها، يحتمل في الجري ما يعادل عدة اضعاف وزن الجسم. جداره القشري سميك جدا وداخله تجويف يملؤه النخاع.',
          en: 'The longest and strongest bone in the body, bearing several times the body weight while running. Its cortical wall is very thick and its interior is a cavity filled with marrow.'
        }
      }
    ],
    desc: {
      ar: 'مفصل الورك مفصل كروي حقي يصل الطرف السفلي بالحوض، ويتكون من رأس عظم الفخذ الكروي مستقرا في تجويف عميق يسمى الحق. هو ثاني أكبر مفاصل الجسم بعد الركبة، لكنه أثبتها على الإطلاق لأن التجويف يبتلع أكثر من نصف الكرة، وتشده أقوى أربطة في الجسم، وتحيط به ثلاث وعشرون عضلة. ومع ذلك يبقى واسع الحركة في كل الاتجاهات، وهذا الجمع بين الثبات والحرية هو ما يجعله معجزة هندسية.',
      en: 'The hip is a ball-and-socket joint linking the lower limb to the pelvis, formed by the spherical head of the femur seated in a deep socket called the acetabulum. It is the second largest joint after the knee but by far the most stable, because the socket swallows more than half the ball, the strongest ligaments in the body bind it, and twenty-three muscles surround it. Yet it still moves freely in every direction, and that union of stability with freedom is what makes it an engineering marvel.'
    },
    func: {
      ar: 'حمل وزن الجسم كله ونقله من الجذع إلى الساقين في الوقوف والمشي والجري، وتحريك الفخذ في ستة اتجاهات: للأمام والخلف وللداخل والخارج والدوران في الجهتين. وهو أيضا ممتص للصدمات، إذ يوزع قوة كل خطوة على مساحة واسعة من الغضروف بدل أن تتركز في نقطة واحدة. وفي المشي على قدم واحدة يمر خلاله ما يعادل ثلاثة أضعاف وزن الجسم.',
      en: 'It carries the entire body weight and transmits it from the trunk to the legs in standing, walking and running, and it moves the thigh in six directions: forward, backward, inward, outward and in rotation both ways. It is also a shock absorber, spreading the force of every step over a wide area of cartilage instead of letting it concentrate at one point. Walking on one leg, a force equal to three times the body weight passes through it.'
    },
    location: { ar: 'في أعلى الفخذ عند التقاء عظم الفخذ بعظم الحوض، على جانبي الجسم أسفل الخصر بقليل', en: 'At the top of the thigh where the femur meets the pelvic bone, on each side of the body a little below the waist' },
    size: { ar: 'رأس الفخذ كرة قطرها من ٤٠ إلى ٥٤ مليمترا، وسمك غضروف المفصل من ٢ إلى ٣ مليمترات، والشفة الحقية نحو ٥ مليمترات ارتفاعا', en: 'The femoral head is a ball 40 to 54 mm across, the joint cartilage 2 to 3 mm thick, and the labrum stands about 5 mm high' },
    short: { ar: 'كرة في تجويف عميق: أثبت مفاصل الجسم رغم سعة حركته', en: 'A ball in a deep socket: the body most stable joint, and still wide-ranging' },
    parts: [
      { ar: 'رأس عظم الفخذ', en: 'The head of the femur' },
      { ar: 'الحق في عظم الحوض', en: 'The acetabulum of the pelvic bone' },
      { ar: 'الشفة الحقية والغضروف المفصلي', en: 'The labrum and the articular cartilage' },
      { ar: 'المحفظة والأربطة المحيطة', en: 'The capsule and surrounding ligaments' }
    ],
    diseases: [
      { name: { ar: 'خشونة الورك', en: 'Hip osteoarthritis' }, desc: { ar: 'تآكل الغضروف مع العمر فيحتك العظم بالعظم، ويظهر الألم في المغبن وعند المشي', en: 'The cartilage wears with age until bone rubs on bone, with pain in the groin and on walking' } },
      { name: { ar: 'كسر عنق الفخذ', en: 'Fractured neck of femur' }, desc: { ar: 'كسر شائع عند كبار السن بعد سقطة بسيطة، وقد يقطع الدم عن رأس العظم', en: 'A common break in the elderly after a simple fall, which may cut off the blood supply to the head of the bone' } },
      { name: { ar: 'تنخر رأس الفخذ', en: 'Avascular necrosis of the femoral head' }, desc: { ar: 'موت عظم الرأس لانقطاع دمه، فينهار سطحه ويتشوه المفصل', en: 'The bone of the head dies when its blood supply fails, so its surface collapses and the joint deforms' } },
      { name: { ar: 'تمزق الشفة الحقية', en: 'Labral tear' }, desc: { ar: 'تمزق الحلقة الغضروفية حول التجويف، فيشعر المريض بانحشار وطقطقة وألم عميق', en: 'A tear in the cartilage ring around the socket, felt as catching, clicking and deep pain' } },
      { name: { ar: 'خلل التنسج الوركي عند الرضع', en: 'Developmental hip dysplasia' }, desc: { ar: 'تجويف ضحل منذ الولادة فلا يمسك رأس الفخذ جيدا، ويكشف بالفحص المبكر', en: 'A socket too shallow from birth to hold the femoral head well; early examination reveals it' } }
    ]
  }
]);

/* ---------- الخلية البشرية (مقطع في خلية مفتوحة) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'cell', type: 'organ', system: 'skin',
    name: { ar: 'الخلية البشرية', en: 'The human cell' },
    img: 'img/cell.webp', imgBack: 'img/cell-back.webp', thumb: 'img/thumb-cell.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'غشاء الخلية', en: 'Cell membrane', x: 40, y: 5, side: 'left',
        desc: {
          ar: 'جدار مزدوج من الدهون تسبح فيه بروتينات كالبوابات. ليس سورا مغلقا بل حارس ينتقي: يدخل ما تحتاجه الخلية ويطرد ما لا تريده، وعليه علامات تعرف بها خلايا المناعة انها منك لا غريبة عنك.',
          en: 'A double wall of fat in which proteins float like gateways. It is not a sealed rampart but a selective guard: it admits what the cell needs and expels what it does not, and it carries the marks by which immune cells know it belongs to you.'
        }
      },
      {
        ar: 'الميتوكندريا', en: 'Mitochondrion', x: 17, y: 23, side: 'left',
        desc: {
          ar: 'محطة الطاقة. تحرق السكر بالاكسجين فتنتج جزيء الطاقة الذي يشغل كل شيء في جسمك. طياتها الداخلية تضاعف مساحتها، ولها حمض نووي خاص بها ترثه عن امك وحدها.',
          en: 'The power station. It burns sugar with oxygen to make the energy molecule that runs everything in your body. Its inner folds multiply its working surface, and it carries its own DNA, inherited from your mother alone.'
        }
      },
      {
        ar: 'الغلاف النووي', en: 'Nuclear envelope', x: 50, y: 29, side: 'right',
        desc: {
          ar: 'غشاء مزدوج يحيط بالنواة، مثقوب بالاف المسام الدقيقة. من هذه المسام تخرج نسخ التعليمات الى الخلية وتدخل البروتينات المنظمة، فهي بوابة مراقبة لا جدار صلد.',
          en: 'A double membrane wrapping the nucleus, pierced by thousands of tiny pores. Through them copies of the instructions leave for the cell and regulating proteins come in, so it is a checkpoint rather than a solid wall.'
        }
      },
      {
        ar: 'النواة', en: 'Nucleus', x: 32, y: 33, side: 'left',
        desc: {
          ar: 'مكتبة الخلية. فيها الحمض النووي ملفوفا على شكل خيوط تسمى الكروماتين، وطوله لو فرد في خلية واحدة لبلغ نحو مترين مطويا في مساحة لا ترى بالعين.',
          en: 'The cell library. It holds the DNA coiled into threads called chromatin; unwound from a single cell it would stretch about two metres, folded into a space no eye can see.'
        }
      },
      {
        ar: 'النوية', en: 'Nucleolus', x: 42, y: 36, side: 'right',
        desc: {
          ar: 'كتلة داكنة داخل النواة، وهي مصنع الريبوسومات. كلما كانت الخلية اكثر انتاجا للبروتين كبرت نويتها، ولذلك تكبر في الخلايا السرطانية النشطة.',
          en: 'A dense body inside the nucleus, the factory of the ribosomes. The more protein a cell makes, the larger its nucleolus grows, which is why it enlarges in busy cancer cells.'
        }
      },
      {
        ar: 'المريكزان وخيوط الهيكل', en: 'Centrioles and cytoskeleton', x: 17, y: 44, side: 'left',
        desc: {
          ar: 'اسطوانتان من انابيب دقيقة تشعان خيوطا في كل اتجاه. الخيوط هي عظام الخلية وطرقها معا: تعطيها شكلها وتنقل عليها الحمولات، والمريكزان يشدان الكروموسومات الى طرفي الخلية حين تنقسم.',
          en: 'Two cylinders of fine tubules radiating filaments in every direction. Those filaments are at once the skeleton of the cell and its roads: they give it shape and carry cargo along it, while the centrioles pull the chromosomes to opposite ends when the cell divides.'
        }
      },
      {
        ar: 'الجسيم الحال', en: 'Lysosome', x: 67, y: 50, side: 'right',
        desc: {
          ar: 'كيس مملوء بانزيمات هاضمة، وهو معدة الخلية ومكب نفاياتها. يفكك الغريب والتالف ويعيد استعمال قطعه. لو انفجر داخل الخلية لهضمها هي نفسها.',
          en: 'A sac filled with digestive enzymes, at once the stomach of the cell and its recycling plant. It breaks down what is foreign or worn out and reuses the pieces. Were it to burst inside, it would digest the cell itself.'
        }
      },
      {
        ar: 'الريبوسومات', en: 'Ribosomes', x: 46, y: 56, side: 'right',
        desc: {
          ar: 'الحبيبات الحمراء المرصوصة على الشبكة. هي مصانع البروتين: تقرأ الشيفرة القادمة من النواة وتركب الاحماض الامينية بترتيبها الصحيح، بسرعة تبلغ عشرات الاحماض في الثانية.',
          en: 'The red beads studding the network. They are the protein factories: they read the code arriving from the nucleus and string amino acids in the right order, at a rate of tens per second.'
        }
      },
      {
        ar: 'الشبكة الإندوبلازمية الخشنة', en: 'Rough endoplasmic reticulum', x: 30, y: 57, side: 'left',
        desc: {
          ar: 'صفائح غشائية متراصة حول النواة تكسوها الريبوسومات فتبدو خشنة. البروتينات المصنوعة عليها هي التي ستصدر خارج الخلية او تركب في اغشيتها.',
          en: 'Stacked membrane sheets around the nucleus, studded with ribosomes and so looking rough. The proteins built on them are the ones destined for export from the cell or for its membranes.'
        }
      },
      {
        ar: 'الشبكة الإندوبلازمية الملساء', en: 'Smooth endoplasmic reticulum', x: 60, y: 22, side: 'right',
        desc: {
          ar: 'انابيب متعرجة بلا ريبوسومات، ولذلك تبدو ملساء. تصنع الدهون والهرمونات، وتخزن الكالسيوم، وفي خلايا الكبد تفكك السموم والادوية.',
          en: 'Winding tubules without ribosomes, and so smooth in appearance. They build fats and hormones, store calcium, and in liver cells break down toxins and drugs.'
        }
      },
      {
        ar: 'جهاز جولجي', en: 'Golgi apparatus', x: 66, y: 64, side: 'right',
        desc: {
          ar: 'اكياس مسطحة مرصوصة كرزمة اوراق. هو قسم التغليف والشحن: ياخذ البروتين الخام من الشبكة، يهذبه ويضيف عليه لمساته، ثم يغلفه في حويصلة ويعنونها الى وجهتها.',
          en: 'Flattened sacs stacked like a sheaf of paper. It is the packing and dispatch department: it takes raw protein from the reticulum, trims and finishes it, then wraps it in a vesicle and addresses it to its destination.'
        }
      },
      {
        ar: 'حويصلات النقل', en: 'Transport vesicles', x: 78, y: 72, side: 'right',
        desc: {
          ar: 'فقاعات غشائية صغيرة تنفصل عن جولجي وتحمل بضاعتها الى الغشاء الخارجي او الى عضية اخرى. هي شاحنات الخلية، تسير على خيوط الهيكل الخلوي كسكة حديد.',
          en: 'Small membrane bubbles that bud off the Golgi and carry their cargo to the outer membrane or to another organelle. They are the trucks of the cell, running along cytoskeleton filaments as though on rails.'
        }
      },
      {
        ar: 'حويصلة داخل الخلية', en: 'Intracellular vesicle', x: 33, y: 72, side: 'left',
        desc: {
          ar: 'كيس محاط بغشاء يخزن او ينقل مواد داخل الخلية. تعيش الخلية على هذا النظام: كل شيء مغلف ومعزول، فلا تختلط التفاعلات بعضها ببعض.',
          en: 'A membrane-bound sac storing or moving material within the cell. The cell lives by this system: everything is wrapped and kept apart, so its reactions never blur into one another.'
        }
      }
    ],
    desc: {
      ar: 'الخلية هي أصغر وحدة حية في جسمك، وكل ما فيك مبني منها: نحو ثلاثين تريليون خلية تعمل معا. كل خلية مدينة كاملة لها سور وحارس ومكتبة ومصانع ومحطات طاقة وطرق ومكب نفايات. وكلها تحمل النسخة نفسها من تعليماتك الوراثية، لكنها تقرأ منها فصولا مختلفة، ولذلك اختلفت خلية العضلة عن خلية العصب عن خلية الجلد رغم أن كتابها واحد.',
      en: 'The cell is the smallest living unit in your body, and everything in you is built of them: some thirty trillion cells working together. Each is a complete city with a wall and a gatekeeper, a library, factories, power stations, roads and a waste plant. All carry the same copy of your genetic instructions, but each reads different chapters, and that is why a muscle cell, a nerve cell and a skin cell differ though their book is one.'
    },
    func: {
      ar: 'استخلاص الطاقة من الغذاء وتصنيع البروتينات التي تبني الجسم وتدير تفاعلاته، وحفظ الشيفرة الوراثية ونسخها عند الانقسام، والتخلص من التالف وإعادة استعماله، والتواصل مع الخلايا المجاورة بإشارات كيميائية. وتؤدي كل خلية فوق ذلك مهمة تخصصها: الانقباض في العضلة، ونقل الإشارة في العصب، وإفراز الهرمون في الغدة.',
      en: 'It extracts energy from food, manufactures the proteins that build the body and run its chemistry, stores the genetic code and copies it when dividing, disposes of what is damaged and recycles it, and talks to neighbouring cells with chemical signals. On top of all that each cell performs its own speciality: contraction in muscle, signalling in nerve, hormone secretion in a gland.'
    },
    location: { ar: 'في كل نسيج من أنسجة الجسم بلا استثناء، وتختلف أشكالها وأحجامها باختلاف عملها', en: 'In every tissue of the body without exception, differing in shape and size according to the work each does' },
    size: { ar: 'الخلية النموذجية من ١٠ إلى ٣٠ ميكرومترا، أي نحو خمس سمك شعرة، وأكبرها البويضة نحو ١٢٠ ميكرومترا وأطولها الخلية العصبية التي قد تبلغ مترا', en: 'A typical cell is 10 to 30 micrometres across, about a fifth of the thickness of a hair; the largest is the egg cell at about 120 micrometres, and the longest the nerve cell, which can reach a metre' },
    short: { ar: 'مدينة كاملة أصغر من أن تراها العين، ومنها بني كل جسمك', en: 'A whole city too small for the eye to see, and your entire body is built of them' },
    parts: [
      { ar: 'غشاء الخلية', en: 'The cell membrane' },
      { ar: 'النواة والحمض النووي داخلها', en: 'The nucleus and the DNA within it' },
      { ar: 'الميتوكندريا محطة الطاقة', en: 'The mitochondria, the power stations' },
      { ar: 'الشبكة الإندوبلازمية وجهاز جولجي', en: 'The endoplasmic reticulum and the Golgi apparatus' }
    ],
    diseases: [
      { name: { ar: 'السرطان', en: 'Cancer' }, desc: { ar: 'خلل في تعليمات الانقسام فتتكاثر الخلية بلا توقف ولا تموت في موعدها', en: 'A fault in the instructions for division, so the cell multiplies without stopping and does not die on time' } },
      { name: { ar: 'أمراض الميتوكندريا', en: 'Mitochondrial disease' }, desc: { ar: 'ضعف محطات الطاقة فتصاب أكثر الأعضاء استهلاكا للطاقة: العضلات والمخ والقلب', en: 'The power stations falter, so the most energy-hungry organs suffer first: muscle, brain and heart' } },
      { name: { ar: 'أمراض التخزين الليزوزومية', en: 'Lysosomal storage disorders' }, desc: { ar: 'نقص إنزيم في الجسيم الحال فتتراكم مواد لا تهضم داخل الخلايا وتسمم عملها', en: 'A missing lysosomal enzyme lets undigested material pile up inside cells and poison their work' } },
      { name: { ar: 'الأمراض المناعية الذاتية', en: 'Autoimmune disease' }, desc: { ar: 'خطأ في قراءة علامات الغشاء فتهاجم المناعة خلايا الجسم نفسه', en: 'The markers on the membrane are misread and the immune system attacks the body own cells' } },
      { name: { ar: 'الشيخوخة الخلوية', en: 'Cellular senescence' }, desc: { ar: 'توقف الخلية عن الانقسام مع تقصر أطراف الكروموسومات، وهو أساس تقدم العمر', en: 'The cell stops dividing as the tips of its chromosomes shorten, the basis of ageing' } }
    ]
  }
]);

/* ---------- الليف العضلي (تدرج من العضلة إلى القسيم العضلي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'muscle-fiber', type: 'organ', system: 'muscles',
    name: { ar: 'الليف العضلي', en: 'The muscle fibre' },
    img: 'img/muscle-fiber.webp', imgBack: 'img/muscle-fiber-back.webp', thumb: 'img/thumb-muscle-fiber.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الوتر', en: 'Tendon', x: 4, y: 13, side: 'left',
        desc: {
          ar: 'حبل ابيض متين تنتهي اليه الياف العضلة وتشد به العظم. لا ينقبض الوتر ابدا، لكنه يخزن جزءا من الطاقة كالنابض ويعيدها في الخطوة التالية.',
          en: 'A tough white cord in which the muscle fibres end and by which they pull on bone. A tendon never contracts, but it stores part of the energy like a spring and returns it on the next stride.'
        }
      },
      {
        ar: 'الأوعية الدموية', en: 'Blood vessels', x: 42, y: 17, side: 'right',
        desc: {
          ar: 'شرايين واوردة تتخلل العضلة بين الحزم. العضلة العاملة تسحب من الدم عشرين ضعف ما تسحبه وهي مستريحة، ولهذا يحمر الجلد ويسخن مع المجهود.',
          en: 'Arteries and veins threading between the bundles. A working muscle draws twenty times the blood it takes at rest, which is why the skin flushes and warms with effort.'
        }
      },
      {
        ar: 'بطن العضلة', en: 'Muscle belly', x: 14, y: 30, side: 'left', go: 'muscles',
        desc: {
          ar: 'العضلة كاملة كما تراها بالعين، ملفوفة بغلاف ليفي يجمع شملها. هذا اول مستوى من خمسة، وكل مستوى تحته هو نفس الحكاية مصغرة: حزمة داخل حزمة داخل حزمة.',
          en: 'The whole muscle as the eye sees it, wrapped in a fibrous sheath that binds it together. This is the first of five levels, and each level below is the same story in miniature: a bundle inside a bundle inside a bundle.'
        }
      },
      {
        ar: 'حزمة عضلية مكبرة', en: 'A fascicle enlarged', x: 50, y: 27, side: 'right',
        desc: {
          ar: 'حزمة واحدة اخرجت من العضلة وكبرت. غلافها الليفي هو ما يشد الحزم بعضها الى بعض، وهو نفسه الذي يتليف بعد الاصابة فتفقد العضلة ليونتها.',
          en: 'A single bundle drawn out of the muscle and magnified. Its fibrous wrap is what binds the bundles to one another, and it is that same wrap which scars after injury and costs the muscle its suppleness.'
        }
      },
      {
        ar: 'الليف العضلي', en: 'Muscle fibre (cell)', x: 66, y: 35, side: 'right', go: 'cell',
        desc: {
          ar: 'خلية واحدة، لكنها خلية عجيبة: طويلة كخيط قد يبلغ عدة سنتيمترات، وفيها مئات الانوية لا نواة واحدة، لان خلايا كثيرة اندمجت لتصنعها. الانوية الداكنة ظاهرة على سطحها هنا.',
          en: 'A single cell, but an extraordinary one: a thread that may run several centimetres long, holding hundreds of nuclei rather than one, because many cells fused to make it. The dark nuclei can be seen on its surface here.'
        }
      },
      {
        ar: 'الحزمة العضلية', en: 'Fascicle', x: 32, y: 41, side: 'left',
        desc: {
          ar: 'حزمة من الياف تلتف معا كخصلة، وهي التي تراها بالعين المجردة في اللحم. خشونة اللحم او نعومته انما هي حجم هذه الحزم.',
          en: 'A bundle of fibres twisted together like a strand, and the unit you can see with the naked eye in meat. What we call coarse or fine grain in meat is simply the size of these bundles.'
        }
      },
      {
        ar: 'اللييف العضلي', en: 'Myofibril', x: 76, y: 42, side: 'right',
        desc: {
          ar: 'الليف الواحد محشو بالاف الخيوط الاسطوانية هذه، مرصوصة كحزمة اقلام. كل لييف سلسلة طويلة من القسيمات العضلية موصولة راسا براس.',
          en: 'A single fibre is packed with thousands of these cylindrical strands, arranged like a bundle of pencils. Each is a long chain of sarcomeres joined end to end.'
        }
      },
      {
        ar: 'التخطيط المستعرض', en: 'Cross-striations', x: 86, y: 58, side: 'right',
        desc: {
          ar: 'الخطوط الفاتحة والغامقة المتناوبة على طول الليف. ليست زخرفة بل هي القسيمات مصطفة بدقة الواحدة خلف الاخرى، ومنها اخذت العضلة الهيكلية اسمها: العضلة المخططة.',
          en: 'The alternating light and dark bands running along the fibre. They are no decoration: they are the sarcomeres lined up one behind another with great precision, and from them skeletal muscle takes its other name, striated muscle.'
        }
      },
      {
        ar: 'الخط Z', en: 'Z line', x: 17, y: 62, side: 'left',
        desc: {
          ar: 'الحاجز العرضي الذي يبدأ عنده القسيم وينتهي. خيوط الاكتين مثبتة عليه من الجانبين، وحين تنقبض العضلة يقترب الخطان احدهما من الاخر فيقصر القسيم.',
          en: 'The cross-partition where a sarcomere begins and ends. The actin filaments are anchored to it on both sides, and when the muscle contracts the two lines are drawn together so the sarcomere shortens.'
        }
      },
      {
        ar: 'خيوط الأكتين الرفيعة', en: 'Thin actin filaments', x: 25, y: 72, side: 'left',
        desc: {
          ar: 'السلاسل الحمراء الرفيعة كخرز منظوم. عليها مواضع ارتباط مغطاة في الراحة، ولا تنكشف الا حين يغمر الكالسيوم الليف، وعندها يبدأ الشد.',
          en: 'The slender red chains, like beads on a string. They carry binding sites that lie covered at rest and are only uncovered when calcium floods the fibre; only then can the pulling begin.'
        }
      },
      {
        ar: 'القسيم العضلي', en: 'Sarcomere', x: 58, y: 74, side: 'right',
        desc: {
          ar: 'الوحدة الانقباضية الاصغر في الجسم، طولها نحو ميكرومترين. لا تنقبض العضلة الا لان ملايين هذه الوحدات قصرت معا في اللحظة نفسها، وكل واحدة تقصر ببضع اجزاء من الميكرومتر.',
          en: 'The smallest contractile unit in the body, about two micrometres long. A muscle contracts only because millions of these shorten together in the same instant, each by a fraction of a micrometre.'
        }
      },
      {
        ar: 'خيوط الميوسين السميكة', en: 'Thick myosin filaments', x: 35, y: 84, side: 'left',
        desc: {
          ar: 'الخيوط البنفسجية الغليظة وعليها رؤوس بارزة كالمجاديف. الرأس يمسك بالاكتين ويجذبه ثم يفلته ويمسك ابعد، فينزلق الخيطان احدهما على الاخر. هذا هو الانقباض: لا شيء يقصر في ذاته، بل الخيوط تنزلق.',
          en: 'The thick purple filaments studded with projecting heads like oars. A head grips the actin, pulls it, lets go and grips again further along, so the two sets of filaments slide over one another. That is contraction: nothing shortens in itself, the filaments simply slide.'
        }
      }
    ],
    desc: {
      ar: 'هذه الصورة تنزل بك من العضلة كاملة إلى أصغر ما فيها في أربع قفزات. العضلة حزم، والحزمة ألياف، والليف لييفات، واللييف سلسلة من قسيمات عضلية. الليف العضلي نفسه خلية واحدة عجيبة: طولها قد يبلغ عدة سنتيمترات وفيها مئات الأنوية لأن خلايا كثيرة اندمجت لتصنعها. وكل هذا الترتيب المتداخل غايته واحدة: أن يتحول أمر عصبي صغير إلى قوة تسحب عظما.',
      en: 'This image takes you from the whole muscle down to its smallest part in four jumps. A muscle is bundles, a bundle is fibres, a fibre is myofibrils, and a myofibril is a chain of sarcomeres. The muscle fibre itself is one remarkable cell: it may be centimetres long and contains hundreds of nuclei, because many cells fused to form it. All this nesting serves a single end: to turn a small nerve command into a force that pulls on bone.'
    },
    func: {
      ar: 'الانقباض بانزلاق الخيوط. حين يصل الأمر العصبي إلى الليف ينطلق الكالسيوم من مخازنه داخل الخلية فيكشف مواضع الارتباط على خيوط الأكتين. عندها تمسك رؤوس الميوسين بالأكتين وتجذبه نحو المركز ثم تفلته وتمسك أبعد، مرة بعد مرة، فينزلق الخيطان أحدهما على الآخر ويقصر القسيم. لا يقصر خيط واحد في طوله أبدا، بل تتداخل الخيوط فقط، وهذا ما يسمى نظرية الانزلاق. وحين يتوقف الأمر العصبي يسحب الكالسيوم إلى مخازنه فترتخي العضلة.',
      en: 'It contracts by filament sliding. When the nerve command reaches the fibre, calcium is released from stores inside the cell and uncovers the binding sites on the actin filaments. The myosin heads then grip the actin, pull it toward the centre, release and grip again further along, over and over, so the two sets slide across one another and the sarcomere shortens. No filament ever shortens in its own length; they merely overlap further, and this is called the sliding filament theory. When the nerve command stops, the calcium is pumped back into store and the muscle relaxes.'
    },
    location: { ar: 'في كل عضلة هيكلية في الجسم، وعددها نحو ست مئة عضلة تشكل نحو أربعين في المئة من وزنك', en: 'In every skeletal muscle of the body, some six hundred of them making up around forty per cent of your weight' },
    size: { ar: 'الليف من ١٠ إلى ١٠٠ ميكرومتر سمكا وقد يبلغ طوله ٣٠ سنتيمترا، والقسيم العضلي نحو ٢ ميكرومتر في الراحة يقصر إلى ١٫٥ عند الانقباض الكامل', en: 'A fibre is 10 to 100 micrometres thick and can be up to 30 cm long; a sarcomere is about 2 micrometres at rest, shortening to about 1.5 at full contraction' },
    short: { ar: 'العضلة لا تقصر، بل خيوطها تنزلق بعضها فوق بعض', en: 'A muscle does not shorten; its filaments slide over one another' },
    parts: [
      { ar: 'الحزم العضلية داخل العضلة', en: 'The fascicles within the muscle' },
      { ar: 'الليف العضلي وهو خلية واحدة', en: 'The muscle fibre, which is a single cell' },
      { ar: 'اللييفات العضلية داخل الليف', en: 'The myofibrils inside the fibre' },
      { ar: 'القسيم العضلي بخيوط الأكتين والميوسين', en: 'The sarcomere with its actin and myosin filaments' }
    ],
    diseases: [
      { name: { ar: 'الحثل العضلي', en: 'Muscular dystrophy' }, desc: { ar: 'خلل وراثي في بروتين يثبت غشاء الليف، فتتلف الألياف تدريجيا وتضعف العضلات', en: 'An inherited fault in a protein that anchors the fibre membrane, so fibres break down and the muscles weaken' } },
      { name: { ar: 'تمزق العضلة', en: 'Muscle strain or tear' }, desc: { ar: 'انقطاع ألياف بسبب شد مفاجئ أو حمل زائد، ويلتئم بنسيج ليفي أضعف من الأصلي', en: 'Fibres snap under a sudden stretch or overload, and heal with fibrous tissue weaker than the original' } },
      { name: { ar: 'الوهن العضلي الوبيل', en: 'Myasthenia gravis' }, desc: { ar: 'مهاجمة المناعة لمستقبلات الأمر العصبي على الليف، فيضعف مع الاستعمال ويتحسن بالراحة', en: 'The immune system attacks the receptors for the nerve signal on the fibre, so the muscle tires with use and recovers with rest' } },
      { name: { ar: 'انحلال الربيدات', en: 'Rhabdomyolysis' }, desc: { ar: 'تحطم ألياف كثيرة دفعة واحدة بعد مجهود عنيف أو إصابة، فتفرغ محتواها في الدم وتؤذي الكلى', en: 'Many fibres break down at once after violent exertion or injury, spilling their contents into the blood and harming the kidneys' } },
      { name: { ar: 'ضمور العضلات من قلة الحركة', en: 'Disuse atrophy' }, desc: { ar: 'نقص حجم الألياف بعد أسابيع من الجبس أو الفراش، وترجع بالتمرين التدريجي', en: 'Fibres shrink after weeks in a cast or in bed, and return with graded exercise' } }
    ]
  }
]);

/* ---------- داخل العظم (مقطع طولي في عظم طويل) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'bone-inside', type: 'organ', system: 'skeleton',
    name: { ar: 'داخل العظم', en: 'Inside a bone' },
    img: 'img/bone-inside.webp', imgBack: 'img/bone-inside-back.webp', thumb: 'img/thumb-bone-inside.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الغضروف المفصلي', en: 'Articular cartilage', x: 16, y: 4, side: 'left',
        desc: {
          ar: 'الغطاء الاملس اللامع على طرف العظم، وهو الوحيد الذي يلامس العظم المقابل. لا يحتوي اوعية دموية ولا اعصابا، فلا يؤلم اذا خدش ولا ينمو اذا تاكل.',
          en: 'The smooth glossy cap on the end of the bone, the only part that touches the bone facing it. It holds neither blood vessels nor nerves, so it does not hurt when scratched and does not grow back when worn.'
        }
      },
      {
        ar: 'العظم الإسفنجي', en: 'Spongy bone', x: 24, y: 12, side: 'left',
        desc: {
          ar: 'شبكة من العوارض العظمية الدقيقة تملأ طرفي العظم. ليست عشوائية ابدا: كل عارضة مصطفة على خط القوة التي تمر بها، فيتحمل العظم اضعاف وزنه بربع مادته.',
          en: 'A lattice of fine bony struts filling the ends of the bone. It is never random: each strut lies along a line of force passing through it, so the bone bears many times its weight with a quarter of the material.'
        }
      },
      {
        ar: 'أوعية داخل العظم', en: 'Vessels within the bone', x: 88, y: 22, side: 'right',
        desc: {
          ar: 'شرايين واوردة واعصاب تمر في قنوات عرضية تصل بين وحدات العظم. العظم نسيج حي يتنفس ويتغذى، لا حجر جامد كما يبدو.',
          en: 'Arteries, veins and nerves running in cross channels that link the bone units to one another. Bone is a living tissue that breathes and feeds; it is not the inert stone it appears to be.'
        }
      },
      {
        ar: 'تجويف النخاع', en: 'Medullary cavity', x: 24, y: 26, side: 'left',
        desc: {
          ar: 'الجوف الداخلي في جسم العظم. لو كان العظم مصمتا لثقل ثقلا لا يحتمل، فالانبوب المجوف يعطي القوة نفسها بوزن اقل بكثير، وهو مبدأ يستعمله المهندسون في الاعمدة.',
          en: 'The hollow core of the shaft. A solid bone would be impossibly heavy, whereas a hollow tube gives the same strength at far less weight, a principle engineers use in columns.'
        }
      },
      {
        ar: 'الصفائح متحدة المركز', en: 'Concentric lamellae', x: 55, y: 30, side: 'right',
        desc: {
          ar: 'طبقات عظمية ملفوفة حول القناة كحلقات جذع الشجرة. الياف الكولاجين في كل طبقة تميل باتجاه مخالف للطبقة التي تحتها، وهذا التعاكس هو سر مقاومة العظم للكسر.',
          en: 'Bony layers wrapped around the canal like the rings of a tree trunk. The collagen fibres of each layer lie at an angle to those below, and that alternation is the secret of bone resistance to fracture.'
        }
      },
      {
        ar: 'قناة هافرس المركزية', en: 'Central (Haversian) canal', x: 68, y: 40, side: 'right',
        desc: {
          ar: 'الانبوب في قلب كل وحدة عظمية، وفيه شريان ووريد وعصب. العظم الكثيف كله مبني من الاف هذه الوحدات المرصوصة كحزمة قصب، لكل واحدة انبوب تغذيتها الخاص.',
          en: 'The tube at the heart of each bone unit, carrying an artery, a vein and a nerve. All compact bone is built of thousands of such units packed like a bundle of reeds, each with its own feeding pipe.'
        }
      },
      {
        ar: 'العظم القشري الكثيف', en: 'Compact (cortical) bone', x: 20, y: 44, side: 'left',
        desc: {
          ar: 'الجدار الصلب الكثيف لجسم العظم. يشكل نحو ثمانين في المئة من كتلة الهيكل، وصلابته تقارب صلابة الخرسانة لكنه اخف منها كثيرا واقدر على الانحناء قليلا قبل ان ينكسر.',
          en: 'The dense hard wall of the shaft. It makes up about eighty per cent of the mass of the skeleton, is nearly as hard as concrete yet far lighter, and can bend a little before it breaks.'
        }
      },
      {
        ar: 'الجوبات وخلايا العظم', en: 'Lacunae and bone cells', x: 62, y: 55, side: 'right',
        desc: {
          ar: 'النقاط الداكنة الصغيرة بين الطبقات، وفي كل واحدة خلية عظمية حية سجينة في المادة الصلبة. تمد ذراعا دقيقة الى جاراتها عبر انفاق مجهرية، فتشعر بالحمل على العظم وتخبر البناة اين يزيدون.',
          en: 'The small dark points between the layers, each holding a living bone cell imprisoned in the hard matrix. They reach out to their neighbours through microscopic tunnels, sense the load on the bone and tell the builders where to add more.'
        }
      },
      {
        ar: 'النخاع الأصفر', en: 'Yellow marrow', x: 27, y: 64, side: 'right',
        desc: {
          ar: 'دهن مخزون في تجويف العظام الطويلة. يحل محل النخاع الاحمر تدريجيا مع تقدم العمر، وعند فقدان دم شديد يستطيع الجسم ان يعيده احمر منتجا للدم من جديد.',
          en: 'Fat stored in the cavity of the long bones. It gradually replaces the red marrow with age, and after severe blood loss the body can turn it back to red, blood-forming marrow again.'
        }
      },
      {
        ar: 'السمحاق', en: 'Periosteum', x: 16, y: 66, side: 'left',
        desc: {
          ar: 'غشاء رقيق متين يغلف العظم من الخارج، غني بالاوعية والاعصاب. هو مصدر الالم الحاد عند كسر العظم او ضربه على الساق، وفيه الخلايا التي تبني العظم الجديد وتلحم الكسر.',
          en: 'A thin tough membrane sheathing the outside of the bone, rich in vessels and nerves. It is the source of the sharp pain of a fracture or a knock on the shin, and it holds the cells that build new bone and knit a break together.'
        }
      },
      {
        ar: 'النخاع الأحمر', en: 'Red marrow', x: 23, y: 84, side: 'left',
        desc: {
          ar: 'المادة الحمراء في فراغات العظم الاسفنجي، وهي مصنع الدم. تنتج نحو مئتي مليار كرية حمراء كل يوم، وكل خلايا الدم في جسمك خرجت من هنا.',
          en: 'The red material in the spaces of the spongy bone, and it is the blood factory. It turns out around two hundred billion red cells every day, and every blood cell in your body came from here.'
        }
      }
    ],
    desc: {
      ar: 'العظم ليس حجرا جامدا كما يبدو، بل نسيج حي يتغذى ويتجدد ويعيد بناء نفسه طوال العمر. جداره الخارجي عظم كثيف صلب، وطرفاه شبكة إسفنجية خفيفة مصممة على خطوط القوة، وجوفه أنبوب مملوء بالنخاع. وداخل هذا الصلب حياة كاملة: خلايا هادمة تأكل العظم القديم وخلايا بانية تضع مكانه جديدا، حتى ليتبدل هيكلك كله كل عشر سنوات تقريبا. وفيه مصنع دمك ومخزن كالسيومك.',
      en: 'Bone is not the inert stone it appears, but a living tissue that feeds, renews and rebuilds itself lifelong. Its outer wall is dense hard bone, its ends a light spongy lattice laid along the lines of force, and its core a tube filled with marrow. Inside all that hardness is a whole life: cells that eat away old bone and cells that lay down new, so that your entire skeleton is replaced roughly every ten years. And within it are the factory of your blood and the store of your calcium.'
    },
    func: {
      ar: 'حمل الجسم وحماية أعضائه، وصنع خلايا الدم كلها في النخاع الأحمر، وخزن الكالسيوم والفسفور وإطلاقهما في الدم عند الحاجة، وتخزين الدهن في النخاع الأصفر. ويعيد العظم بناء نفسه باستمرار حسب الحمل الواقع عليه، فيزداد سمكا حيث يشتد الضغط ويرق حيث يقل، ولهذا يقوى العظم بالتمرين ويهزل بالراحة الطويلة أو انعدام الجاذبية.',
      en: 'It carries the body and shields its organs, makes all the blood cells in the red marrow, stores calcium and phosphorus and releases them into the blood when needed, and stores fat in the yellow marrow. Bone constantly rebuilds itself according to the load it bears, thickening where pressure is greatest and thinning where it is least, which is why bone strengthens with exercise and wastes with long bed rest or in the absence of gravity.'
    },
    location: { ar: 'في كل عظام الجسم، والعظام الطويلة كالفخذ والعضد أوضح ما يظهر فيه هذا البناء', en: 'In every bone of the body, though the long bones such as the femur and humerus show this structure most clearly' },
    size: { ar: 'الهيكل ٢٠٦ عظام تشكل نحو ١٥ في المئة من وزن الجسم، وسمك الجدار القشري في وسط عظم الفخذ نحو ٥ إلى ١٠ مليمترات، والوحدة العظمية نحو ٢٠٠ ميكرومتر قطرا', en: 'The skeleton has 206 bones making up about 15 per cent of body weight; the cortical wall at mid-femur is 5 to 10 mm thick, and one bone unit is about 200 micrometres across' },
    short: { ar: 'ليس حجرا: نسيج حي يبني نفسه ويصنع دمك', en: 'Not stone at all: a living tissue that rebuilds itself and makes your blood' },
    parts: [
      { ar: 'العظم القشري الكثيف', en: 'The dense cortical bone' },
      { ar: 'العظم الإسفنجي في الطرفين', en: 'The spongy bone at the two ends' },
      { ar: 'النخاع الأحمر والأصفر', en: 'The red and yellow marrow' },
      { ar: 'السمحاق المغلف من الخارج', en: 'The periosteum sheathing the outside' }
    ],
    diseases: [
      { name: { ar: 'هشاشة العظام', en: 'Osteoporosis' }, desc: { ar: 'نقص كثافة العظم فتخف عوارضه الإسفنجية ويكسر من سقطة بسيطة', en: 'Bone density falls, the spongy struts thin out, and a simple fall can break it' } },
      { name: { ar: 'الكسور', en: 'Fractures' }, desc: { ar: 'انقطاع في العظم يلتئم بجسر عظمي جديد خلال ستة إلى اثني عشر أسبوعا', en: 'A break in the bone that heals by a new bony bridge over six to twelve weeks' } },
      { name: { ar: 'التهاب العظم والنقي', en: 'Osteomyelitis' }, desc: { ar: 'عدوى بكتيرية داخل العظم أو نخاعه، عنيدة العلاج لضعف وصول الدواء', en: 'A bacterial infection inside the bone or its marrow, stubborn to treat because drugs reach it poorly' } },
      { name: { ar: 'لين العظام ونقص فيتامين د', en: 'Osteomalacia and vitamin D deficiency' }, desc: { ar: 'ضعف ترسيب الكالسيوم فيلين العظم ويتقوس ويؤلم عند الضغط', en: 'Calcium is poorly deposited, so the bone softens, bows and aches under pressure' } },
      { name: { ar: 'سرطان الدم', en: 'Leukaemia' }, desc: { ar: 'خلل في مصنع الدم داخل النخاع فينتج كريات بيضاء غير ناضجة تزاحم السليمة', en: 'A fault in the blood factory within the marrow floods it with immature white cells that crowd out the healthy ones' } }
    ]
  }
]);

/* ---------- مفصل المرفق (منظر جانبي بمقطع) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'elbow', type: 'organ', system: 'skeleton',
    name: { ar: 'مفصل المرفق', en: 'Elbow joint' },
    img: 'img/elbow.webp', imgBack: 'img/elbow-back.webp', thumb: 'img/thumb-elbow.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'عضلات الذراع', en: 'Muscles of the arm', x: 55, y: 9, side: 'right', go: 'muscles',
        desc: {
          ar: 'العضلات التي تثني المرفق تجلس امامه، واقواها ذات الرأسين والعضدية. ثنى المرفق وبسطه عملان تتقاسمهما مجموعتان متضادتان، احداهما امام العظم والاخرى خلفه.',
          en: 'The muscles that bend the elbow sit in front of it, the strongest being the biceps and the brachialis. Bending and straightening are shared by two opposed groups, one in front of the bone and one behind.'
        }
      },
      {
        ar: 'عظم العضد', en: 'Humerus', x: 30, y: 14, side: 'left', go: 'skeleton',
        desc: {
          ar: 'عظم الذراع الواحد النازل من الكتف. طرفه السفلي عريض مفلطح لانه يستقبل عظمي الساعد معا، ولذلك سمي المرفق مفصلا مركبا: ثلاثة عظام في محفظة واحدة.',
          en: 'The single bone of the arm coming down from the shoulder. Its lower end is broad and flattened because it receives both forearm bones at once, which is why the elbow is called a compound joint: three bones in one capsule.'
        }
      },
      {
        ar: 'البكرة', en: 'Trochlea of the humerus', x: 43, y: 37, side: 'left',
        desc: {
          ar: 'السطح المفصلي اللامع على شكل بكرة او بكرة خيط. شكلها هذا هو ما يجعل حركة المرفق على محور واحد فقط، كالمفصلة تماما، فلا يتلوى الساعد يمينا ولا يسارا.',
          en: 'The glossy articular surface shaped like a pulley or a cotton reel. That shape is what confines the elbow to a single axis, exactly like a hinge, so the forearm cannot waggle sideways.'
        }
      },
      {
        ar: 'وتر العضلة ذات الرأسين', en: 'Biceps tendon', x: 66, y: 36, side: 'right',
        desc: {
          ar: 'الحبل الابيض الغليظ النازل ليرتكز على عظم الكعبرة. ليس ثانيا للمرفق فحسب، بل هو ايضا اقوى مدير لكف اليد نحو الاعلى، ولهذا تبرم البراغي باليمنى بسهولة اكبر.',
          en: 'The thick white cord descending to insert on the radius. It does more than bend the elbow: it is also the strongest turner of the palm upward, which is why a right-handed person drives a screw so much more easily.'
        }
      },
      {
        ar: 'الرباط الجانبي', en: 'Collateral ligament', x: 17, y: 45, side: 'left',
        desc: {
          ar: 'مروحة ليفية متينة تشد العظمين على جانبي المفصل وتمنع فتحه الى الجانب. تمزق هذا الرباط في الرمي المتكرر هو اصابة رماة البيسبول المشهورة.',
          en: 'A tough fibrous fan binding the bones on either side of the joint and preventing it from gaping sideways. Tearing it through repeated throwing is the famous injury of baseball pitchers.'
        }
      },
      {
        ar: 'رأس الكعبرة', en: 'Head of the radius', x: 54, y: 45, side: 'right',
        desc: {
          ar: 'قرص عظمي مستدير يدور في مكانه حول محوره. حين تقلب كفك من اعلى الى اسفل فهذا القرص هو الذي يلف، والكعبرة تعبر فوق الزند، لا الزند من يدور.',
          en: 'A rounded bony disc that spins in place about its own axis. When you turn your palm from up to down, it is this disc that rotates and the radius that crosses over the ulna; the ulna itself does not turn.'
        }
      },
      {
        ar: 'الثلمة البكرية للزند', en: 'Trochlear notch of the ulna', x: 36, y: 53, side: 'left',
        desc: {
          ar: 'التجويف الهلالي في عظم الزند الذي تنطبق فيه بكرة العضد كالمفتاح في قفله. عمق هذا الانطباق هو ما يجعل المرفق ثابتا الى هذا الحد وقليل الخلع.',
          en: 'The crescent hollow of the ulna into which the humeral pulley fits like a key into its lock. The depth of that fit is what makes the elbow so stable and so rarely dislocated.'
        }
      },
      {
        ar: 'الرباط الحلقي', en: 'Annular ligament', x: 57, y: 53, side: 'right',
        desc: {
          ar: 'طوق ليفي يلتف حول عنق الكعبرة فيمسك راسها ويسمح لها بالدوران داخله. عند الاطفال الصغار قد ينزلق الراس من هذا الطوق اذا شد الطفل من يده، وهي اصابة معروفة تعاد في ثانية.',
          en: 'A fibrous collar wrapped around the neck of the radius, holding the head while letting it spin inside. In small children the head can slip out of this collar if the child is pulled by the hand, a well-known injury that is put back in a second.'
        }
      },
      {
        ar: 'الزج (نتوء المرفق)', en: 'Olecranon', x: 24, y: 65, side: 'left',
        desc: {
          ar: 'النتوء العظمي الذي تتكئ عليه على الطاولة. هو ذراع الرافعة التي تشد عليها العضلة ثلاثية الرؤوس لتبسط المرفق، وكسره يمنع بسط الذراع تماما.',
          en: 'The bony point you lean on at a table. It is the lever arm on which the triceps pulls to straighten the elbow, and a break in it makes straightening the arm impossible.'
        }
      },
      {
        ar: 'عظم الكعبرة', en: 'Radius', x: 70, y: 62, side: 'right',
        desc: {
          ar: 'عظم الساعد الذي يقع في جهة الابهام. هو الذي يحمل معظم الوزن الى الرسغ، ولهذا اذا وقعت على يدك المفتوحة كان كسر طرفه السفلي اشيع كسور اليد كلها.',
          en: 'The forearm bone on the thumb side. It carries most of the load to the wrist, which is why a fall on an outstretched hand makes a break at its lower end the commonest fracture of the whole arm.'
        }
      },
      {
        ar: 'عضلات الساعد', en: 'Forearm muscles', x: 30, y: 85, side: 'left', go: 'muscles',
        desc: {
          ar: 'كتلة عضلية تبدأ من نتوءي العضد وتنزل الى الرسغ واصابعك. التهاب مغرس هذه العضلات على النتوء الخارجي هو ما يسمى مرفق لاعب التنس.',
          en: 'A muscle mass that begins on the two knobs of the humerus and runs down to the wrist and fingers. Inflammation where they attach to the outer knob is what is called tennis elbow.'
        }
      },
      {
        ar: 'عظم الزند', en: 'Ulna', x: 48, y: 74, side: 'right',
        desc: {
          ar: 'عظم الساعد في جهة الخنصر، وهو الاثبت. يمسك بالعضد بقوة عند المرفق ويكون معه المفصلة، بينما الكعبرة الى جانبه حرة تدور. ثبات احدهما وحرية الاخر هما سر براعة يدك.',
          en: 'The forearm bone on the little-finger side, and the steadier of the two. It grips the humerus firmly at the elbow and forms the hinge with it, while the radius beside it is free to rotate. One held fast and one free is the secret of the hand dexterity.'
        }
      }
    ],
    desc: {
      ar: 'المرفق مفصل مركب في محفظة واحدة تجتمع فيه ثلاثة عظام: العضد من الأعلى، والزند والكعبرة من الأسفل. وهو في الحقيقة مفصلان في واحد: مفصلة تثني الذراع وتبسطها بين العضد والزند، ومحور دوار بين العضد والكعبرة يقلب كفك لأعلى ولأسفل. هذا الجمع بين المفصلة والدوران هو ما يجعل اليد قادرة على أن تصل وتلتقط وتدير في حركة واحدة متصلة.',
      en: 'The elbow is a compound joint in which three bones meet inside one capsule: the humerus above, the ulna and radius below. It is really two joints in one: a hinge between humerus and ulna that bends and straightens the arm, and a pivot between humerus and radius that turns the palm up and down. That combination of hinge and pivot is what lets the hand reach, grasp and rotate in one continuous movement.'
    },
    func: {
      ar: 'ثني الذراع وبسطها من الصفر إلى نحو مئة وخمسين درجة، وقلب الساعد فيدور الكف لأعلى ولأسفل نحو مئة وثمانين درجة. وهو الذي يقرب اليد من الفم فيمكن الأكل، ويعمل رافعة تضاعف قوة العضلات: العضلة ذات الرأسين تشد على مسافة قصيرة جدا من المفصل فتحرك اليد مسافة كبيرة، لكن على حساب القوة، ولهذا نحمل بالساعد أقل بكثير مما تنتجه العضلة نفسها.',
      en: 'It bends and straightens the arm from zero to about a hundred and fifty degrees, and rotates the forearm so the palm turns up and down through nearly a hundred and eighty. It is what brings the hand to the mouth so we can eat, and it works as a lever that trades force for range: the biceps pulls very close to the joint and so moves the hand a long way, but at a cost in strength, which is why the forearm can lift far less than the muscle itself produces.'
    },
    location: { ar: 'في منتصف الطرف العلوي بين الذراع والساعد، حيث ينتهي عظم العضد ويبدأ الزند والكعبرة', en: 'At the middle of the upper limb between arm and forearm, where the humerus ends and the ulna and radius begin' },
    size: { ar: 'مدى الثني من صفر إلى نحو ١٤٥ درجة، ومدى قلب الساعد نحو ١٨٠ درجة، والمدى المطلوب لأعمال اليوم من ٣٠ إلى ١٣٠ درجة فقط', en: 'Flexion runs from zero to about 145 degrees and forearm rotation about 180; everyday tasks need only the range from 30 to 130 degrees' },
    short: { ar: 'مفصلة ومحور دوار معا: ثلاثة عظام في محفظة واحدة', en: 'A hinge and a pivot in one: three bones inside a single capsule' },
    parts: [
      { ar: 'الطرف السفلي لعظم العضد', en: 'The lower end of the humerus' },
      { ar: 'الزند وثلمته البكرية', en: 'The ulna and its trochlear notch' },
      { ar: 'رأس الكعبرة والرباط الحلقي', en: 'The head of the radius and the annular ligament' },
      { ar: 'الأربطة الجانبية والمحفظة', en: 'The collateral ligaments and the capsule' }
    ],
    diseases: [
      { name: { ar: 'مرفق لاعب التنس', en: 'Tennis elbow' }, desc: { ar: 'التهاب مغرس عضلات بسط الرسغ على النتوء الخارجي، ألم عند مسك الأشياء', en: 'Inflammation where the wrist extensors attach to the outer knob, with pain on gripping' } },
      { name: { ar: 'مرفق لاعب الغولف', en: 'Golfer elbow' }, desc: { ar: 'التهاب مماثل على النتوء الداخلي حيث تلتصق عضلات ثني الرسغ', en: 'The same inflammation on the inner knob, where the wrist flexors attach' } },
      { name: { ar: 'خلع رأس الكعبرة عند الأطفال', en: 'Pulled elbow in children' }, desc: { ar: 'انزلاق رأس الكعبرة من الرباط الحلقي بعد شد الطفل من يده، ويعاد بحركة واحدة', en: 'The radial head slips from the annular ligament after a child is pulled by the hand, and is put back in one movement' } },
      { name: { ar: 'التهاب الجراب الزجي', en: 'Olecranon bursitis' }, desc: { ar: 'انتفاخ كيس السائل خلف المرفق بعد اتكاء طويل أو ضربة، فيبرز كالبيضة', en: 'The fluid sac behind the elbow swells after long leaning or a knock, standing out like an egg' } },
      { name: { ar: 'كسر الزج', en: 'Olecranon fracture' }, desc: { ar: 'كسر نتوء المرفق بعد السقوط عليه، فيعجز المريض عن بسط ذراعه', en: 'The point of the elbow breaks in a fall onto it, and the arm can no longer be straightened' } }
    ]
  }
]);

/* ---------- مفصل الكاحل (مقطع أمامي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'ankle', type: 'organ', system: 'skeleton',
    name: { ar: 'مفصل الكاحل', en: 'Ankle joint' },
    img: 'img/ankle.webp', imgBack: 'img/ankle-back.webp', thumb: 'img/thumb-ankle.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'عظم الظنبوب', en: 'Tibia', x: 48, y: 15, side: 'right', go: 'skeleton',
        desc: {
          ar: 'عظم الساق الكبير الذي يحمل الوزن كله تقريبا. طرفه السفلي مسطح كسقف يجلس عليه الكاحل، ويسمى هذا السقف بلاطة الظنبوب.',
          en: 'The large leg bone that carries almost all the weight. Its lower end is flattened like a roof on which the ankle bone sits, and that roof is called the tibial plafond.'
        }
      },
      {
        ar: 'السطح المفصلي وغضروفه', en: 'Joint surface and its cartilage', x: 46, y: 38, side: 'right',
        desc: {
          ar: 'الطبقة الزلقة اللامعة بين العظمين. غضروف الكاحل اسمك نسبيا وابطأ تاكلا من غضروف الركبة والورك، ولذلك خشونة الكاحل اقل شيوعا بكثير رغم انه يحمل الوزن نفسه.',
          en: 'The slippery glossy layer between the two bones. Ankle cartilage is relatively thick and wears more slowly than that of the knee or hip, which is why ankle osteoarthritis is far less common though it bears the same load.'
        }
      },
      {
        ar: 'عظم الشظية', en: 'Fibula', x: 22, y: 42, side: 'left',
        desc: {
          ar: 'العظم الرفيع الى جانب الظنبوب. لا يحمل من الوزن الا نحو عشرة في المئة، ووظيفته الاساسية ان يكون الجدار الخارجي لتجويف الكاحل ومغرسا للعضلات.',
          en: 'The slender bone alongside the tibia. It carries only about ten per cent of the load; its main job is to form the outer wall of the ankle socket and to give muscles a place to attach.'
        }
      },
      {
        ar: 'الكعب الإنسي', en: 'Medial malleolus', x: 63, y: 44, side: 'right',
        desc: {
          ar: 'النتوء الذي تحسه على الجانب الداخلي للكاحل، وهو امتداد من عظم الظنبوب نفسه لا عظم مستقل. يكون مع الكعب الوحشي فكا يمسك عظم الكاحل بينهما.',
          en: 'The knob you can feel on the inner side of the ankle, an extension of the tibia itself rather than a separate bone. With the outer knob it forms a clamp that grips the ankle bone between them.'
        }
      },
      {
        ar: 'الكعب الوحشي', en: 'Lateral malleolus', x: 21, y: 52, side: 'left',
        desc: {
          ar: 'طرف الشظية النازل على الجانب الخارجي، وهو ينزل اخفض من الكعب الداخلي. هذا الفرق في الارتفاع هو ما يجعل التواء الكاحل الى الداخل اسهل بكثير من التوائه الى الخارج.',
          en: 'The lower tip of the fibula on the outer side, descending lower than the inner knob. That difference in height is why the ankle rolls inward so much more easily than outward.'
        }
      },
      {
        ar: 'عظم الكاحل', en: 'Talus', x: 52, y: 57, side: 'right',
        desc: {
          ar: 'العظم الذي ينقل وزن جسمك كله من الساق الى القدم. عجيبته انه لا تلتصق به عضلة واحدة، فهو محمول بين العظام بالاربطة وحدها، وتغذيته الدموية ضعيفة ولذلك يموت عظمه احيانا بعد الكسر.',
          en: 'The bone that hands the whole weight of your body from the leg to the foot. Its oddity is that not a single muscle attaches to it: it is held among the bones by ligaments alone, and its blood supply is so poor that its bone sometimes dies after a fracture.'
        }
      },
      {
        ar: 'الأربطة الوحشية', en: 'Lateral ligaments', x: 29, y: 60, side: 'left',
        desc: {
          ar: 'ثلاثة اربطة رفيعة على الجانب الخارجي. هي اضعف من الرباط الداخلي بكثير، ولهذا فان الغالبية العظمى من التواءات الكاحل تمزق هذه الثلاثة تحديدا.',
          en: 'Three slender ligaments on the outer side. They are much weaker than the ligament on the inside, and that is why the great majority of ankle sprains tear precisely these three.'
        }
      },
      {
        ar: 'الرباط الدالي', en: 'Deltoid ligament', x: 74, y: 68, side: 'right',
        desc: {
          ar: 'مروحة ليفية سميكة على الجانب الداخلي، وهي من اقوى اربطة القدم. قوتها هي التي تمنع القدم من الانقلاب الى الخارج، وتمزقها نادر لكنه اصابة خطيرة.',
          en: 'A thick fibrous fan on the inner side, among the strongest ligaments of the foot. Its strength is what stops the foot rolling outward, and tearing it is rare but serious.'
        }
      },
      {
        ar: 'مفصل تحت الكاحل', en: 'Subtalar joint', x: 42, y: 72, side: 'left',
        desc: {
          ar: 'المفصل بين عظم الكاحل والعقب تحته. مفصل الكاحل يرفع القدم ويخفضها فقط، اما ميل القدم الى الداخل والخارج فيحدث هنا، ولهذا يمكنك المشي على ارض مائلة.',
          en: 'The joint between the ankle bone and the heel bone beneath it. The ankle joint only lifts and lowers the foot; the tilting inward and outward happens here, and that is what lets you walk on a sloping surface.'
        }
      },
      {
        ar: 'عظم العقب', en: 'Calcaneus (heel bone)', x: 44, y: 85, side: 'left',
        desc: {
          ar: 'اكبر عظام القدم واقواها، وهو اول ما يلامس الارض في كل خطوة. يشد عليه وتر اخيل من الخلف ليرفع كعبك عن الارض، ولولا هذه الرافعة لما استطعت الدفع في المشي.',
          en: 'The largest and strongest bone of the foot, and the first to meet the ground in every step. The Achilles tendon pulls on it from behind to lift the heel, and without that lever you could not push off in walking.'
        }
      }
    ],
    desc: {
      ar: 'مفصل الكاحل مفصلة يمسك فيها عظما الساق، الظنبوب والشظية، عظم الكاحل بينهما كالكماشة. طرفا العظمين ينزلان على جانبيه ككعبين بارزين تحسهما بيدك، ويقيدان الحركة في مستوى واحد. وهو من أشد مفاصل الجسم تحملا: يمر خلاله في المشي ما يعادل خمسة أضعاف وزن الجسم، وفي الجري ما يقارب ثلاثة عشر ضعفا، ومع ذلك فمساحة سطحه المفصلي أصغر بكثير من الورك أو الركبة.',
      en: 'The ankle is a hinge in which the two leg bones, the tibia and the fibula, grip the talus between them like a clamp. Their lower ends descend on either side as the two knobs you can feel with your hand, and they confine the movement to a single plane. It is among the most heavily loaded joints in the body: walking sends about five times body weight through it and running close to thirteen, yet its joint surface is far smaller than that of the hip or the knee.'
    },
    func: {
      ar: 'رفع مقدمة القدم نحو الساق وخفضها، وهي الحركة التي ترفع أصابعك عن الأرض حين تخطو فلا تتعثر، ثم تدفع بها عند نهاية الخطوة. ويعمل مع مفصل تحت الكاحل على تكييف القدم مع الأرض المائلة، ويوزع حمل الجسم على مساحة صغيرة جدا بضغط عال، ولهذا كانت أربطته بهذه الكثرة والقوة.',
      en: 'It lifts the front of the foot toward the leg and lowers it again, the movement that clears your toes from the ground as you step so you do not trip, and then pushes off at the end of the stride. Together with the subtalar joint below it, it adapts the foot to uneven ground and spreads the body load over a very small area at high pressure, which is why its ligaments are so many and so strong.'
    },
    location: { ar: 'عند نهاية الساق بين طرفي الظنبوب والشظية من أعلى وعظم الكاحل من أسفل', en: 'At the end of the leg, between the lower ends of the tibia and fibula above and the talus below' },
    size: { ar: 'مدى رفع القدم نحو ٢٠ درجة وخفضها نحو ٥٠ درجة، وسمك الغضروف من ١ إلى ٢ مليمتر، ويمر خلاله في المشي نحو خمسة أضعاف وزن الجسم', en: 'It lifts the foot through about 20 degrees and lowers it through about 50, its cartilage is 1 to 2 mm thick, and walking passes about five times body weight through it' },
    short: { ar: 'كماشة من عظمين تمسك عظما لا تلمسه عضلة واحدة', en: 'A clamp of two bones gripping a bone that no muscle touches' },
    parts: [
      { ar: 'الطرف السفلي لعظم الظنبوب', en: 'The lower end of the tibia' },
      { ar: 'الكعبان الإنسي والوحشي', en: 'The medial and lateral malleoli' },
      { ar: 'عظم الكاحل بينهما', en: 'The talus held between them' },
      { ar: 'الرباط الدالي والأربطة الوحشية', en: 'The deltoid and the lateral ligaments' }
    ],
    diseases: [
      { name: { ar: 'التواء الكاحل', en: 'Ankle sprain' }, desc: { ar: 'تمزق الأربطة الخارجية بعد انقلاب القدم للداخل، وهو أشيع إصابات الرياضة كلها', en: 'The outer ligaments tear when the foot rolls inward, the commonest sports injury of all' } },
      { name: { ar: 'كسر الكاحل', en: 'Ankle fracture' }, desc: { ar: 'كسر أحد الكعبين أو كليهما، وقد يحتاج تثبيتا بالشرائح لاستعادة انطباق المفصل', en: 'One or both malleoli break, sometimes needing plates to restore the exact fit of the joint' } },
      { name: { ar: 'التهاب وتر أخيل', en: 'Achilles tendinitis' }, desc: { ar: 'التهاب أقوى وتر في الجسم خلف الكاحل بعد إجهاد متكرر أو زيادة مفاجئة في الجري', en: 'Inflammation of the strongest tendon in the body behind the ankle, after repeated strain or a sudden increase in running' } },
      { name: { ar: 'عدم استقرار الكاحل المزمن', en: 'Chronic ankle instability' }, desc: { ar: 'ارتخاء الأربطة بعد التواءات متكررة فيخون الكاحل صاحبه على الأرض غير المستوية', en: 'Ligaments slacken after repeated sprains, so the ankle gives way on uneven ground' } },
      { name: { ar: 'خشونة الكاحل بعد الإصابة', en: 'Post-traumatic ankle arthritis' }, desc: { ar: 'تآكل الغضروف بعد كسر لم يلتئم بانطباق تام، وهو السبب الأول لخشونة هذا المفصل', en: 'Cartilage wears after a fracture that did not heal in perfect alignment, the leading cause of arthritis in this joint' } }
    ]
  }
]);

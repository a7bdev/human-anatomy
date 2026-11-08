/* ============================================================
   batch-a.js — دفعة أ من عناصر «جسم الإنسان»
   الشفتان · كف اليد · النفق الرسغي · القدم · المستقيم والقناة الشرجية
   بصيلة الشعرة · الظفر · مفصل الكتف · الفقرة والقرص
   يُدمج لاحقاً في data.js — لا يُعدَّل data.js من هنا.
   ============================================================ */

/* ---------- الشفتان (منظر أمامي مع قطع جانبي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'lips', type: 'organ', system: 'organs',
    name: { ar: 'الشفتان', en: 'Lips' },
    img: 'img/lips.png', imgBack: 'img/lips-back.png', thumb: 'img/thumb-lips.png',
    labels: [
      {
        ar: 'جلد الوجه', en: 'Facial skin', x: 15, y: 14, side: 'left', go: 'skin',
        desc: {
          ar: 'الجلد العادي حول الفم، فيه شعر دقيق وغدد عرقية ودهنية. لاحظ كيف يتغير فجاة عند حافة الشفة الى نسيج احمر رطب بلا شعر ولا غدد عرق.',
          en: 'Ordinary skin around the mouth, with fine hairs and sweat and oil glands. Notice how it changes abruptly at the lip margin into a red, moist tissue with no hair and no sweat glands.'
        }
      },
      {
        ar: 'الميزاب (الفلترة)', en: 'Philtrum', x: 50, y: 25, side: 'left',
        desc: {
          ar: 'الاخدود الراسي بين الانف والشفة العليا. يتكون في الشهر الثاني من الحمل حين تلتحم نصفا الوجه، واذا لم يكتمل هذا الالتحام ولدت الشفة الارنبية.',
          en: 'The vertical groove between the nose and the upper lip. It forms in the second month of pregnancy when the two halves of the face fuse; if that fusion is incomplete the child is born with a cleft lip.'
        }
      },
      {
        ar: 'الشفة العليا وحدها القرمزي', en: 'Upper lip and vermilion border', x: 33, y: 34, side: 'left',
        desc: {
          ar: 'الخط الحاد الذي يفصل الجلد عن الجزء الاحمر. الاحمرار ليس صبغة بل شفافية: الطبقة القرنية هنا رقيقة جدا فتظهر الشعيرات الدموية تحتها، ولهذا تشحب الشفة عند فقر الدم وتزرق عند نقص الاكسجين.',
          en: 'The sharp line that separates skin from the red part. The redness is not a pigment but transparency: the horny layer here is very thin, so the capillaries beneath show through. That is why the lip pales in anaemia and turns blue when oxygen is low.'
        }
      },
      {
        ar: 'الأسنان', en: 'Teeth', x: 42.5, y: 43, side: 'left', go: 'teeth',
        desc: {
          ar: 'تلمح القواطع العلوية من فتحة الفم. الشفتان تسندان الاسنان وتحفظان الرطوبة حولها، والاسنان بدورها تسند الشفة من الداخل، ولهذا يغور الوجه حول الفم عند من فقد اسنانه.',
          en: 'The upper incisors are glimpsed through the mouth opening. The lips support the teeth and keep them moist, and the teeth in turn support the lip from inside, which is why the face sinks in around the mouth once the teeth are lost.'
        }
      },
      {
        ar: 'الشفة السفلى', en: 'Lower lip', x: 33, y: 56, side: 'left',
        desc: {
          ar: 'اسمك من العليا واكثر بروزا، وهي الاكثر تعرضا للشمس ولذلك اغلب سرطانات الشفة تظهر فيها. تحتها طبقة عضلية سميكة تمكنها من الانقلاب والانطباق.',
          en: 'Thicker and more prominent than the upper lip, and the more sun-exposed of the two, which is why most lip cancers arise here. Beneath it lies a thick muscular layer that lets it roll out and seal shut.'
        }
      },
      {
        ar: 'العضلة الدويرية الفموية', en: 'Orbicularis oris muscle', x: 71, y: 21, side: 'right', go: 'muscles',
        desc: {
          ar: 'حلقة عضلية تدور حول فتحة الفم كاملة، وليست ملتصقة بعظم من طرفيها كباقي العضلات. هي التي تطبق الشفتين وتزمهما وتدفعهما للامام، وبها ننطق الباء والميم والواو ونشرب بالمصاصة.',
          en: 'A ring of muscle encircling the whole mouth opening, and unlike most muscles it is not anchored to bone at either end. It closes, purses and pushes the lips forward; with it we pronounce b, m and w, and drink through a straw.'
        }
      },
      {
        ar: 'الغدد اللعابية الشفوية الصغيرة', en: 'Minor labial salivary glands', x: 87, y: 33, side: 'right',
        desc: {
          ar: 'عناقيد صفراء صغيرة مبثوثة في سمك الشفة، تفرز لعابا مخاطيا باستمرار يبقي الشفة رطبة من الداخل. اذا انسدت قناة احداها تجمع اللعاب وتكونت كيسة صغيرة شفافة تسمى القيلة المخاطية.',
          en: 'Small yellow clusters scattered through the thickness of the lip, secreting mucous saliva continuously to keep its inner surface moist. If the duct of one is blocked the saliva pools into a small clear cyst called a mucocele.'
        }
      },
      {
        ar: 'الشريان الشفوي', en: 'Labial artery', x: 88, y: 45, side: 'right',
        desc: {
          ar: 'فرع من الشريان الوجهي يجري في سمك الشفة قريبا من السطح الداخلي، ويلتقي بفرع الجهة الاخرى فيصنعان حلقة كاملة حول الفم. غزارته هي سبب النزف الشديد من جرح الشفة رغم صغره.',
          en: 'A branch of the facial artery running within the lip close to its inner surface, meeting its partner from the other side to form a complete ring around the mouth. Its rich supply is why even a small lip wound bleeds heavily.'
        }
      },
      {
        ar: 'الغشاء المخاطي الشفوي', en: 'Labial mucosa', x: 66, y: 52, side: 'right',
        desc: {
          ar: 'البطانة الرطبة اللامعة داخل الشفة. تراها هنا لامعة لان اللعاب يغطيها دائما، وهي اسرع انسجة الجسم التئاما: جرح فيها يشفى في ايام بلا ندبة تقريبا.',
          en: 'The glistening moist lining inside the lip. It shines here because saliva always coats it, and it is among the fastest healing tissues in the body: a cut in it closes within days with almost no scar.'
        }
      },
      {
        ar: 'ألياف عضلية تحت الشفة السفلى', en: 'Muscle fibres below the lower lip', x: 72, y: 67, side: 'right',
        desc: {
          ar: 'حزم عضلية تاتي من الخد والذقن وتنغرز في الشفة، تشدها الى الاسفل والجانب. تعدد هذه الحزم واتجاهاتها هو ما يعطي الفم قدرته على مئات التعبيرات الدقيقة.',
          en: 'Muscle bundles coming from the cheek and chin to insert into the lip, pulling it down and sideways. The number of these bundles and the variety of their directions is what gives the mouth its hundreds of fine expressions.'
        }
      },
      {
        ar: 'الدهن تحت الجلد', en: 'Subcutaneous fat', x: 68, y: 82, side: 'right',
        desc: {
          ar: 'شريط دهني عند حافة القطع يفصل الجلد عن العضلة. يعطي الشفة والخد امتلاءهما، وتناقصه مع العمر هو احد اسباب رقة الشفة وظهور التجاعيد حولها.',
          en: 'A band of fat at the cut edge separating the skin from the muscle. It gives the lip and cheek their fullness, and its loss with age is one reason lips thin and fine wrinkles appear around them.'
        }
      }
    ],
    desc: {
      ar: 'الشفتان طيّتان عضليّتان تحرسان مدخل الفم. الصورة تُظهر النصف الأيسر سليماً بجلده، والنصف الأيمن مقطوعاً ليُرى ما تحته: حلقة العضلة الدويرية الفموية تدور حول الفتحة كلّها، وبين أليافها عناقيد الغدد اللعابية الصغيرة، ويجري بينها الشريان الشفوي. والحدّ القرمزي — ذلك الخط الذي يفصل الجلد عن اللون الأحمر — موجود عند الإنسان وحده بين الكائنات، وسبب لونه أنّ الطبقة القرنية هناك رقيقة حتى تُرى الشعيرات الدموية من خلالها.',
      en: 'The lips are two muscular folds guarding the entrance to the mouth. Here the left half is left intact with its skin while the right half is cut away to show what lies beneath: the ring of orbicularis oris encircling the whole opening, clusters of minor salivary glands among its fibres, and the labial artery running between them. The vermilion border, the line separating skin from red, exists in humans alone, and its colour comes from a horny layer so thin that the capillaries show through it.'
    },
    func: {
      ar: 'إغلاق الفم وحفظ ما فيه من طعام وشراب ولعاب، ومصّ الرضيع للثدي — وهي أول وظيفة يتقنها الإنسان. وللشفتين دور لا غنى عنه في النطق: حروف الباء والميم والواو والفاء لا تخرج بدونهما. وهما كذلك عضو لمسٍ بالغ الحساسية، فمساحتهما في قشرة المخ الحسّية أكبر من مساحة الظهر كلّه، ولذلك نستكشف بهما الحرارة والملمس قبل الابتلاع. وأخيراً هما من أهم أدوات التعبير في الوجه: الابتسامة والعبوس والاشمئزاز كلّها تُرسم بهما.',
      en: 'Closing the mouth and holding in food, drink and saliva, and the infant’s suckling, the first skill a human masters. They are indispensable to speech: b, m, w and f cannot be produced without them. They are also an exquisitely sensitive touch organ, occupying more of the brain’s sensory cortex than the whole back, so we test heat and texture with them before swallowing. And they are among the face’s chief instruments of expression: the smile, the frown and disgust are all drawn with them.'
    },
    location: { ar: 'حول فتحة الفم في مقدّمة الوجه، بين الأنف والذقن', en: 'Around the mouth opening at the front of the face, between the nose and the chin' },
    size: { ar: 'عرض الفم نحو ٥ سم، وسمك الشفة نحو ١ سم، والحدّ القرمزي شريط بارتفاع ٥ إلى ١٠ ملم', en: 'The mouth is about 5 cm wide, the lip about 1 cm thick, and the vermilion a strip 5 to 10 mm tall' },
    short: { ar: 'حلقة عضلية واحدة تُطبق وتنطق وتُقبّل', en: 'One ring of muscle that seals, speaks and kisses' },
    parts: [
      { ar: 'الجلد والحدّ القرمزي', en: 'The skin and the vermilion border' },
      { ar: 'العضلة الدويرية الفموية', en: 'The orbicularis oris muscle' },
      { ar: 'الغدد اللعابية الصغيرة والشريان الشفوي', en: 'The minor salivary glands and the labial artery' },
      { ar: 'الغشاء المخاطي الداخلي', en: 'The inner mucosa' }
    ],
    diseases: [
      { name: { ar: 'الشفة الأرنبية', en: 'Cleft lip' }, desc: { ar: 'عدم اكتمال التحام نصفَي الوجه في الشهر الثاني من الحمل فتبقى فتحة في الشفة، وتُصلَح بالجراحة', en: 'The two halves of the face fail to fuse in the second month of pregnancy, leaving a gap in the lip; it is repaired surgically' } },
      { name: { ar: 'قرحة البرد (الحلأ)', en: 'Cold sore (herpes)' }, desc: { ar: 'فيروس كامن في عصب الوجه يستيقظ مع الحمّى أو الإجهاد فيُخرج حويصلات مؤلمة على حافة الشفة', en: 'A virus latent in the facial nerve reawakens with fever or stress, raising painful blisters at the lip margin' } },
      { name: { ar: 'التهاب زاويتَي الفم', en: 'Angular cheilitis' }, desc: { ar: 'تشقّق واحمرار عند زاوية الفم من الرطوبة الدائمة أو نقص الحديد وفيتامين ب', en: 'Cracking and redness at the corner of the mouth from constant moisture or a lack of iron and B vitamins' } },
      { name: { ar: 'القيلة المخاطية', en: 'Mucocele' }, desc: { ar: 'انسداد قناة غدة لعابية صغيرة بعد عضّة، فيتجمّع اللعاب في كيسة شفّافة داخل الشفة', en: 'The duct of a minor salivary gland is blocked after a bite, so saliva collects in a clear cyst inside the lip' } },
      { name: { ar: 'سرطان الشفة', en: 'Lip cancer' }, desc: { ar: 'قرحة لا تلتئم على الشفة السفلى غالباً، سببها الأول التعرّض الطويل للشمس والتدخين', en: 'A non-healing sore, usually on the lower lip; its leading causes are long sun exposure and smoking' } }
    ]
  }
]);

/* ---------- كف اليد (تشريح سطحي من جهة الراحة) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'hand', type: 'organ', system: 'skeleton',
    name: { ar: 'كف اليد', en: 'Hand' },
    img: 'img/hand.png', imgBack: 'img/hand-back.png', thumb: 'img/thumb-hand.png',
    labels: [
      {
        ar: 'السلامية البعيدة', en: 'Distal phalanx', x: 38, y: 5, side: 'left', go: 'skeleton',
        desc: {
          ar: 'عظم طرف الاصبع الذي يحمل الظفر ووسادة اللمس. سطحه الراحي خشن قليلا لتتشبث به الحواجز الليفية التي تثبت جلد البنان فلا ينزلق حين نمسك شيئا.',
          en: 'The fingertip bone that carries the nail and the touch pad. Its palmar surface is slightly roughened so the fibrous septa that anchor the pulp skin can grip it, keeping the skin from sliding when we grasp.'
        }
      },
      {
        ar: 'السلامية الوسطى', en: 'Middle phalanx', x: 50, y: 17, side: 'left',
        desc: {
          ar: 'العظم الاوسط في الاصبع. للابهام سلاميتان فقط اما بقية الاصابع فثلاث لكل منها، ولذلك تنثني الاصابع الاربع على ثلاث مراحل بينما ينثني الابهام على مرحلتين.',
          en: 'The middle bone of the finger. The thumb has only two phalanges while each of the other fingers has three, which is why the four fingers bend in three stages and the thumb in two.'
        }
      },
      {
        ar: 'عظام المشط', en: 'Metacarpal bones', x: 39, y: 36, side: 'left',
        desc: {
          ar: 'خمسة عظام طويلة تصنع هيكل راحة اليد، وراسها هو ما نسميه المفصل عند قبض اليد. عظم مشط الابهام هو الوحيد الذي يستطيع الدوران، وبه صار الابهام يقابل بقية الاصابع.',
          en: 'Five long bones forming the framework of the palm; their heads are the knuckles you see when the fist is closed. The thumb’s metacarpal is the only one able to rotate, and that is what lets the thumb oppose the other fingers.'
        }
      },
      {
        ar: 'العصب الناصف', en: 'Median nerve', x: 44, y: 55, side: 'left', go: 'carpal-tunnel',
        desc: {
          ar: 'العصب الاصفر السميك الذي يخرج من نفق الرسغ ثم يتفرع الى الابهام والسبابة والوسطى ونصف البنصر. هو عصب الاحساس الدقيق في اطراف هذه الاصابع، وهو ايضا الذي يحرك عضلات حدبة الابهام.',
          en: 'The thick yellow nerve emerging from the carpal tunnel and fanning out to the thumb, index, middle and half the ring finger. It carries the fine sensation of these fingertips and also drives the muscles of the thumb mound.'
        }
      },
      {
        ar: 'العضلات الإبهامية (حدبة الإبهام)', en: 'Thenar muscles', x: 28, y: 64, side: 'left', go: 'muscles',
        desc: {
          ar: 'الكتلة العضلية الممتلئة عند قاعدة الابهام، وهي التي تدفعه ليقابل بقية الاصابع. اذا انضغط العصب الناضف طويلا ضمرت هذه الكتلة وبانت مسطحة، وهي من اوضح علامات متلازمة نفق الرسغ المتاخرة.',
          en: 'The full muscular mound at the base of the thumb that swings it across to meet the other fingers. If the median nerve is compressed for long this mound wastes away and flattens, one of the clearest signs of advanced carpal tunnel syndrome.'
        }
      },
      {
        ar: 'عظام الرسغ', en: 'Carpal bones', x: 44.5, y: 72, side: 'left', go: 'carpal-tunnel',
        desc: {
          ar: 'ثمانية عظام صغيرة مرصوصة في صفين، تصنع بمجموعها قوسا مقعرا نحو الراحة. هذا القوس هو ارضية نفق الرسغ الذي تمر منه الاوتار والعصب الناصف.',
          en: 'Eight small bones packed in two rows which together form an arch hollowed towards the palm. That arch is the floor of the carpal tunnel through which the tendons and the median nerve pass.'
        }
      },
      {
        ar: 'الشريان الكعبري', en: 'Radial artery', x: 47.5, y: 82, side: 'left',
        desc: {
          ar: 'الشريان الذي نجس منه النبض عند الرسغ من جهة الابهام. يغوص بعدها الى عمق الكف ليصنع القوس الراحي العميق، ويلتقي بالزندي فتصير تغذية اليد مضمونة من طريقين.',
          en: 'The artery whose pulse we feel at the wrist on the thumb side. It then dives deep into the palm to form the deep palmar arch and joins the ulnar artery, so the hand is fed by two routes at once.'
        }
      },
      {
        ar: 'القوس الراحي السطحي', en: 'Superficial palmar arch', x: 54, y: 50, side: 'right', go: 'vessels',
        desc: {
          ar: 'حلقة شريانية حمراء تعبر الكف عرضا وترسل فرعا لكل جانب من جوانب الاصابع. لان الدم يصلها من طرفيها فان قطع احد الشريانين لا يميت اليد، وهذا سر تحمل الكف لجروحها.',
          en: 'A red arterial loop crossing the palm and sending a branch to each side of every finger. Because blood reaches it from both ends, cutting one artery does not kill the hand, which is the secret of the palm’s tolerance of wounds.'
        }
      },
      {
        ar: 'أوتار العضلات القابضة', en: 'Flexor tendons', x: 54, y: 58, side: 'right',
        desc: {
          ar: 'حبال بيضاء لامعة تنزل من عضلات الساعد الى الاصابع. لا عضلات في الاصابع نفسها اطلاقا: القوة تولد في الساعد وتنتقل بهذه الحبال، ولذلك يبقى الاصبع رفيعا رشيقا وقويا في الوقت نفسه.',
          en: 'Glossy white cords running down from the forearm muscles to the fingers. There are no muscles in the fingers themselves: the power is generated in the forearm and carried by these cords, which is why a finger stays slim and nimble yet strong.'
        }
      },
      {
        ar: 'العضلات الخنصرية', en: 'Hypothenar muscles', x: 72, y: 66, side: 'right', go: 'muscles',
        desc: {
          ar: 'الكتلة العضلية على حافة الكف من جهة الخنصر. تحرك الخنصر وتعمق تقعر الكف حين نمسك كوبا او مقبضا، وهي الوسادة التي نتكئ عليها حين نكتب.',
          en: 'The muscular mass along the edge of the palm on the little-finger side. It moves the little finger and deepens the palm’s hollow when we grip a cup or a handle, and it is the cushion we rest on when writing.'
        }
      },
      {
        ar: 'رباط الرسغ المستعرض', en: 'Flexor retinaculum', x: 55, y: 72, side: 'right', go: 'carpal-tunnel',
        desc: {
          ar: 'شريط ليفي متين يشد عرضا فوق قوس عظام الرسغ فيقفل النفق. يمنع الاوتار من التقوس والانفلات حين نثني المعصم، لكنه في المقابل جدار لا يتمدد، ولهذا يتاذى العصب الناصف اذا زاد ما بداخل النفق.',
          en: 'A tough fibrous band stretched across the arch of the carpal bones, sealing the tunnel. It stops the tendons from bowstringing when the wrist bends, but it is also a wall that cannot stretch, which is why the median nerve suffers whenever the tunnel’s contents swell.'
        }
      },
      {
        ar: 'الشريان الزندي', en: 'Ulnar artery', x: 58, y: 79, side: 'right',
        desc: {
          ar: 'الشريان الاكبر في تغذية الكف: هو الذي يصنع القوس الراحي السطحي. يمر عند المعصم في ممر ضيق الى جانب العصب الزندي، خارج نفق الرسغ لا داخله.',
          en: 'The larger of the hand’s two feeding arteries: it is the one that forms the superficial palmar arch. At the wrist it passes through a narrow canal beside the ulnar nerve, outside the carpal tunnel rather than inside it.'
        }
      },
      {
        ar: 'العصب الزندي', en: 'Ulnar nerve', x: 60, y: 87, side: 'right',
        desc: {
          ar: 'عصب الخنصر ونصف البنصر، وهو ايضا العصب الذي يحرك معظم العضلات الصغيرة بين عظام الكف. هو نفسه العصب الذي يوجعنا حين نصدم المرفق فيسري خدر حتى الخنصر.',
          en: 'The nerve of the little finger and half the ring finger, and also the nerve that drives most of the small muscles between the hand bones. It is the same nerve that stings when the elbow is knocked and a tingle shoots to the little finger.'
        }
      }
    ],
    desc: {
      ar: 'كفٌّ مفتوحة من جهة الراحة وقد أُزيل عنها الجلد. تحت الجلد مباشرة تجري أوتار القابضة اللامعة نازلةً من الساعد إلى الأصابع، ويعبر الكفَّ عرضاً قوسٌ شرياني أحمر يرسل فرعاً لكل أصبع. وعلى جانبَي الكفّ كتلتان عضليتان: حدبة الإبهام وحدبة الخنصر، وبينهما تجويف الراحة. وعند المعصم يقفل رباطٌ عرضي متين على العظام فيصنع نفقاً تمرّ فيه الأوتار مع العصب الناصف، بينما يمرّ الشريان والعصب الزنديان خارجه. وفي اليد ٢٧ عظماً — أي ربع عظام الجسم في يدٍ واحدة.',
      en: 'An open palm with the skin removed. Just beneath it run the glossy flexor tendons descending from the forearm to the fingers, and a red arterial arch crosses the palm sending a branch to every finger. Two muscular mounds flank the palm, the thumb mound and the little-finger mound, with the hollow of the palm between them. At the wrist a tough transverse ligament closes over the bones to make a tunnel carrying the tendons with the median nerve, while the ulnar artery and nerve pass outside it. The hand holds 27 bones, a quarter of all the bones in the body in a single hand.'
    },
    func: {
      ar: 'الإمساك بنوعيه: قبضة القوة التي تحمل الحقيبة والمطرقة، وقبضة الدقّة التي تمسك الإبرة وقلم الرصاص. وسرّ اليد البشرية هو الإبهام المقابل: عظم مشطه وحده يستطيع الدوران، فيلتقي طرفه بطرف كل أصبع من الأصابع الأربعة. واليد كذلك عضو حسٍّ من الطراز الأول — أطراف الأصابع من أكثف مناطق الجسم بالمستقبلات — وعضو تعبير ولغة: بها يتكلّم الأصمّ وبها يشير الناطق.',
      en: 'Gripping of two kinds: the power grip that carries a bag or a hammer, and the precision grip that holds a needle or a pencil. The secret of the human hand is the opposable thumb: its metacarpal alone can rotate, so its tip can meet the tip of each of the other four fingers. The hand is also a first-class sense organ, the fingertips being among the most densely innervated skin in the body, and an organ of expression and language: with it the deaf speak and the speaker gestures.'
    },
    location: { ar: 'طرف الذراع بعد المعصم، وتتّصل بالساعد عند مفصل الرسغ', en: 'The end of the arm beyond the wrist, joined to the forearm at the wrist joint' },
    size: { ar: '٢٧ عظماً في كل يد · طول الكفّ نحو ١٩ سم عند الرجل و١٧ سم عند المرأة · ٣٤ عضلة تحرّكها أكثرها في الساعد', en: '27 bones in each hand; the hand is about 19 cm long in men and 17 cm in women; 34 muscles move it, most of them in the forearm' },
    short: { ar: 'أدقّ أداة صنعها التطوّر: ٢٧ عظماً وإبهامٌ يقابل الجميع', en: 'The finest tool evolution made: 27 bones and a thumb that meets them all' },
    parts: [
      { ar: 'عظام الرسغ والمشط والسلاميات', en: 'The carpal, metacarpal and phalangeal bones' },
      { ar: 'أوتار القابضة ورباط الرسغ', en: 'The flexor tendons and the flexor retinaculum' },
      { ar: 'العصبان الناصف والزندي', en: 'The median and ulnar nerves' },
      { ar: 'القوس الراحي والعضلات الإبهامية والخنصرية', en: 'The palmar arch and the thenar and hypothenar muscles' }
    ],
    diseases: [
      { name: { ar: 'متلازمة نفق الرسغ', en: 'Carpal tunnel syndrome' }, desc: { ar: 'انضغاط العصب الناصف تحت رباط الرسغ فيتنمّل الإبهام والسبابة والوسطى، وأشدّ ما يكون ليلاً', en: 'The median nerve is squeezed beneath the wrist ligament, numbing the thumb, index and middle finger, at its worst during the night' } },
      { name: { ar: 'الإصبع الزنادية', en: 'Trigger finger' }, desc: { ar: 'تضخّم وتر قابض داخل غمده فيعلق الإصبع منثنياً ثم ينفلت فجأة بطقّة', en: 'A flexor tendon thickens inside its sheath so the finger locks bent and then snaps free with a click' } },
      { name: { ar: 'تقفّع دوبويتران', en: 'Dupuytren’s contracture' }, desc: { ar: 'تليّف اللفافة الراحية فتُشدّ الأصابع — غالباً البنصر والخنصر — إلى الانثناء الدائم', en: 'The palmar fascia thickens and pulls the fingers, usually the ring and little finger, into permanent bending' } },
      { name: { ar: 'خشونة مفاصل اليد', en: 'Hand osteoarthritis' }, desc: { ar: 'تآكل غضاريف مفاصل الأصابع وقاعدة الإبهام فتظهر عُقد صلبة ويؤلم المسك', en: 'The cartilage of the finger joints and thumb base wears away, raising hard nodes and making gripping painful' } },
      { name: { ar: 'كسر عظم الزورق', en: 'Scaphoid fracture' }, desc: { ar: 'كسر عظم رسغي يحدث عند السقوط على اليد المفتوحة، وقد لا يظهر في أول أشعة ويتأخّر التئامه لضعف تروية العظم', en: 'A carpal fracture from falling on an outstretched hand; it may not show on the first X-ray and heals slowly because the bone’s blood supply is poor' } }
    ]
  }
]);

/* ---------- النفق الرسغي (مقطع عرضي في المعصم) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'carpal-tunnel', type: 'organ', system: 'skeleton',
    name: { ar: 'النفق الرسغي', en: 'Carpal tunnel' },
    img: 'img/carpal-tunnel.png', imgBack: 'img/carpal-tunnel-back.png', thumb: 'img/thumb-carpal-tunnel.png',
    labels: [
      {
        ar: 'الجلد', en: 'Skin', x: 30, y: 11, side: 'left', go: 'skin',
        desc: {
          ar: 'جلد راحة المعصم، وهو اسمك من جلد ظهر اليد وبلا شعر. هذا هو السطح الذي يوضع عليه المشرط في عملية تحرير النفق الرسغي.',
          en: 'The skin of the palmar side of the wrist, thicker than the skin of the back of the hand and hairless. This is the surface the scalpel meets in an operation to release the carpal tunnel.'
        }
      },
      {
        ar: 'العضلات الإبهامية', en: 'Thenar muscles', x: 16, y: 28, side: 'left', go: 'muscles',
        desc: {
          ar: 'عضلات جهة الابهام تقع خارج النفق وتغطي حافته الكعبرية. يغذي معظمها فرع من العصب الناصف يخرج بعد النفق مباشرة، ولذلك تضمر حين ينضغط العصب طويلا.',
          en: 'The thumb-side muscles lie outside the tunnel and cover its radial edge. Most are supplied by a branch of the median nerve leaving just beyond the tunnel, which is why they waste when the nerve is compressed for long.'
        }
      },
      {
        ar: 'العصب الناصف', en: 'Median nerve', x: 49, y: 35.5, side: 'left',
        desc: {
          ar: 'الحزمة الصفراء المنقطة تحت الرباط مباشرة، ونقاطها هي حزم الالياف العصبية. هو الطري الوحيد بين تسعة اوتار متينة وسقف لا يتمدد، فهو اول من يتاذى اذا امتلا النفق، فيولد التنميل والالم الليلي في الابهام والسبابة والوسطى.',
          en: 'The speckled yellow bundle lying right under the ligament; its dots are the fascicles of nerve fibres. It is the only soft thing among nine tough tendons and a roof that will not stretch, so it is the first to suffer when the tunnel fills, producing the tingling and night pain of the thumb, index and middle finger.'
        }
      },
      {
        ar: 'وتر مستقلّ في غمده', en: 'A tendon in its own sheath', x: 26, y: 47, side: 'left',
        desc: {
          ar: 'وتر واحد يجري في غمد زليلي خاص به الى جانب الحزمة الكبرى. عزله عن البقية يجعل حركته مستقلة عنها، وهذا ما يسمح للابهام ان يتحرك وحده بينما تبقى الاصابع ثابتة.',
          en: 'A single tendon running in its own synovial sheath beside the main bundle. Being separate lets it move independently of the rest, which is what allows the thumb to move on its own while the fingers stay still.'
        }
      },
      {
        ar: 'الغمد الزليلي', en: 'Synovial sheath', x: 36, y: 55, side: 'left',
        desc: {
          ar: 'الحلقات الزرقاء المحيطة بكل وتر: كيس مزدوج الجدار بينه سائل زلق. يجعل الوتر ينزلق بلا احتكاك، والتهابه من الحركة المتكررة هو ابرز اسباب امتلاء النفق وضغط العصب.',
          en: 'The blue rings around each tendon: a double-walled sac with a slippery fluid between its layers. It lets the tendon glide without friction, and its inflammation from repetitive movement is the commonest reason the tunnel fills and the nerve is squeezed.'
        }
      },
      {
        ar: 'عظم رسغي (الجانب الكعبري)', en: 'Carpal bone (radial side)', x: 14, y: 64, side: 'left', go: 'hand',
        desc: {
          ar: 'احد عظام الرسغ الثمانية، وتظهر بنيته الاسفنجية بمسامها. هذه العظام لا تصطف مستقيمة بل تنحني فتصنع قوسا مقعرا هو ارضية النفق وجداراه.',
          en: 'One of the eight carpal bones, its spongy interior visible as pores. These bones do not sit in a straight line but curve into an arch that forms the floor and both walls of the tunnel.'
        }
      },
      {
        ar: 'وريد سطحي', en: 'Superficial vein', x: 13, y: 72, side: 'left',
        desc: {
          ar: 'وريد ازرق يجري في الطبقة تحت الجلد خارج النفق تماما. الاوردة السطحية هنا هي التي تُرى تحت جلد المعصم، ومنها تسحب عينات الدم.',
          en: 'A blue vein running in the layer beneath the skin, entirely outside the tunnel. Superficial veins like this are the ones seen through the skin of the wrist, and the ones blood samples are drawn from.'
        }
      },
      {
        ar: 'الدهن تحت الجلد', en: 'Subcutaneous fat', x: 75, y: 19, side: 'right',
        desc: {
          ar: 'فصيصات صفراء تحت الجلد مباشرة تعمل حشوة واقية. هي التي تحمي الاوعية والاعصاب السطحية من ضغط اسناد المعصم على الطاولة.',
          en: 'Yellow lobules right under the skin acting as protective padding. They shield the superficial vessels and nerves from the pressure of resting the wrist on a desk.'
        }
      },
      {
        ar: 'رباط الرسغ المستعرض', en: 'Flexor retinaculum', x: 62, y: 28, side: 'right',
        desc: {
          ar: 'الشريط الليفي الابيض المشدود من حافة الرسغ الى حافته الاخرى، وهو سقف النفق. متانته نعمة ونقمة: يمنع الاوتار من الانفلات عند ثني المعصم، وهو نفسه الجدار الذي يعصر العصب. وعملية علاج المتلازمة هي شقه لا اكثر.',
          en: 'The white fibrous band stretched from one edge of the wrist to the other, the roof of the tunnel. Its strength is both a blessing and a curse: it stops the tendons escaping when the wrist bends, and it is the very wall that squeezes the nerve. The operation for the syndrome is simply to cut it.'
        }
      },
      {
        ar: 'الشريان والعصب الزنديان', en: 'Ulnar artery and nerve', x: 84, y: 38, side: 'right',
        desc: {
          ar: 'الشريان الاحمر بتجويفه والعصب الاصفر بجانبه، وهما خارج النفق في ممر خاص بهما. ولهذا لا يصاب الخنصر بالتنميل في متلازمة نفق الرسغ: عصبه لا يمر من هناك اصلا، وهذه علامة فارقة في التشخيص.',
          en: 'The red artery with its lumen and the yellow nerve beside it, both outside the tunnel in a canal of their own. That is why the little finger is never numb in carpal tunnel syndrome: its nerve does not pass through there at all, a key distinguishing sign.'
        }
      },
      {
        ar: 'الأوتار القابضة التسعة', en: 'The nine flexor tendons', x: 55, y: 47, side: 'right', go: 'hand',
        desc: {
          ar: 'تسعة اوتار مرصوصة داخل النفق: وتران لكل اصبع من الاربعة، وواحد للابهام. تراها هنا مقطوعة فتبدو حزما بيضاء لامعة من الياف الكولاجين المتوازية.',
          en: 'Nine tendons packed inside the tunnel: two for each of the four fingers and one for the thumb. Cut across, they appear as glossy white bundles of parallel collagen fibres.'
        }
      },
      {
        ar: 'عظم رسغي (الجانب الزندي)', en: 'Carpal bone (ulnar side)', x: 86, y: 62, side: 'right', go: 'hand',
        desc: {
          ar: 'العظم الذي يصنع الحافة الزندية للقوس. نتوءه هو احد المرتكزين اللذين يشد بينهما الرباط المستعرض، والاخر على الجهة الكعبرية.',
          en: 'The bone forming the ulnar edge of the arch. Its bony prominence is one of the two anchors between which the transverse ligament is strung; the other lies on the radial side.'
        }
      },
      {
        ar: 'قوس عظام الرسغ', en: 'The carpal arch', x: 55, y: 73, side: 'right', go: 'hand',
        desc: {
          ar: 'العظام الخلفية للنفق، وتظهر مساميتها بوضوح. انحناؤها الى الامام هو ما يخلق التجويف؛ ولو كانت مستقيمة لما كان هناك نفق ولا مرض اسمه متلازمة نفق الرسغ.',
          en: 'The bones forming the back of the tunnel, their porosity clearly visible. Their forward curve is what creates the hollow; were they laid flat there would be no tunnel and no such disease as carpal tunnel syndrome.'
        }
      }
    ],
    desc: {
      ar: 'مقطع عرضي في المعصم عند مستوى النفق الرسغي. العظام تُشكّل قوساً مقعّراً نحو الراحة، ويُشدّ فوقه رباطٌ ليفي متين هو السقف، فيتكوّن ممرّ مغلق لا يتّسع ولا يتمدّد. يمرّ داخله تسعة أوتار قابضة كلٌّ في غمده الزليلي، ومعها ضيفٌ واحد طريّ: العصب الناصف، وهو ملتصق بالسقف مباشرة. أما الشريان والعصب الزنديان فيمرّان خارج النفق في ممرّ منفصل. هذا التركيب البسيط هو مسرح أشهر اعتلال عصبي انضغاطي في الإنسان.',
      en: 'A cross-section of the wrist at the level of the carpal tunnel. The bones form an arch hollowed towards the palm, and a tough fibrous ligament is stretched across it as a roof, creating a closed passage that neither widens nor stretches. Nine flexor tendons pass through it, each in its synovial sheath, together with one soft guest: the median nerve, pressed right against the roof. The ulnar artery and nerve pass outside in a separate canal. This simple arrangement is the stage of the commonest compression neuropathy in humans.'
    },
    func: {
      ar: 'حماية الأوتار وتوجيهها. لولا هذا السقف الليفي لانفلتت الأوتار عن العظم كلّما ثنينا المعصم وتقوّست كوتر القوس، فضاعت قوّة القبضة. الرباط يبقيها ملتصقة بالعظم فتنتقل حركة عضلات الساعد إلى الأصابع كاملةً بلا فقد. وفي الوقت نفسه يحمل النفق العصب الناصف إلى الكفّ في مسار محميّ من الضغط الخارجي — وهو نفسه ما يجعله عرضة للضغط الداخلي.',
      en: 'Protecting the tendons and guiding them. Without this fibrous roof the tendons would lift off the bone every time the wrist bent, bowstringing like the cord of a bow and wasting the force of the grip. The ligament keeps them hugging the bone so the pull of the forearm muscles reaches the fingers undiminished. At the same time the tunnel carries the median nerve into the palm along a route shielded from outside pressure, which is the very thing that leaves it exposed to pressure from within.'
    },
    location: { ar: 'في راحة المعصم بين حدبة الإبهام وحدبة الخنصر، عند قاعدة الكفّ', en: 'In the palmar side of the wrist between the thumb and little-finger mounds, at the base of the palm' },
    size: { ar: 'طول النفق نحو ٢ إلى ٢٫٥ سم وعرضه نحو ٢ سم، ومساحة مقطعه لا تتجاوز ١٫٧ سم مربّع', en: 'The tunnel is about 2 to 2.5 cm long and 2 cm wide, its cross-section no more than about 1.7 square centimetres' },
    short: { ar: 'ممرّ لا يتّسع، فيه تسعة أوتار وعصبٌ واحد يدفع الثمن', en: 'A passage that will not widen, holding nine tendons and one nerve that pays the price' },
    parts: [
      { ar: 'قوس عظام الرسغ (الأرضية والجدران)', en: 'The carpal arch (floor and walls)' },
      { ar: 'رباط الرسغ المستعرض (السقف)', en: 'The flexor retinaculum (the roof)' },
      { ar: 'الأوتار القابضة وأغمادها الزليلية', en: 'The flexor tendons and their synovial sheaths' },
      { ar: 'العصب الناصف', en: 'The median nerve' }
    ],
    diseases: [
      { name: { ar: 'متلازمة نفق الرسغ', en: 'Carpal tunnel syndrome' }, desc: { ar: 'ارتفاع الضغط داخل النفق فينضغط العصب الناصف: تنميل وألم ليلي في الإبهام والسبابة والوسطى، والخنصر سليم', en: 'Pressure rises inside the tunnel and squeezes the median nerve: numbness and night pain in the thumb, index and middle finger, with the little finger spared' } },
      { name: { ar: 'التهاب أغماد الأوتار', en: 'Tenosynovitis' }, desc: { ar: 'التهاب الأغماد الزليلية من الحركة المتكرّرة فتنتفخ ويضيق النفق على من فيه', en: 'The synovial sheaths become inflamed from repetitive use, swell, and crowd everything else in the tunnel' } },
      { name: { ar: 'ضيق النفق في الحمل', en: 'Carpal tunnel of pregnancy' }, desc: { ar: 'احتباس السوائل في الشهور الأخيرة يرفع الضغط داخل النفق، ويزول غالباً بعد الولادة', en: 'Fluid retention in the last months raises the pressure inside the tunnel; it usually resolves after delivery' } },
      { name: { ar: 'كسور الرسغ وتشوّه القوس', en: 'Wrist fracture and a distorted arch' }, desc: { ar: 'كسرٌ يلتئم بزاوية خاطئة فيضيق القوس العظمي ويضغط ما فوقه', en: 'A fracture that heals at the wrong angle narrows the bony arch and presses on everything above it' } },
      { name: { ar: 'ضمور حدبة الإبهام', en: 'Thenar wasting' }, desc: { ar: 'علامة متأخّرة لانضغاط طويل: تضمر عضلات الإبهام وتفقد اليد قبضة الدقّة', en: 'A late sign of long compression: the thumb muscles waste and the hand loses its precision grip' } }
    ]
  }
]);

/* ---------- القدم (منظر إنسي مع كشف داخلي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'foot', type: 'organ', system: 'skeleton',
    name: { ar: 'القدم', en: 'Foot' },
    img: 'img/foot.png', imgBack: 'img/foot-back.png', thumb: 'img/thumb-foot.png',
    labels: [
      {
        ar: 'عضلات الساق', en: 'Calf muscles', x: 25, y: 9, side: 'left', go: 'muscles',
        desc: {
          ar: 'العضلات الخلفية للساق التي تنتهي في وتر اخيل. هي محرك الدفع في كل خطوة، وتسمى مضخة الساق لانها تعصر الاوردة العميقة فتعيد الدم الى القلب ضد الجاذبية.',
          en: 'The muscles at the back of the leg that end in the Achilles tendon. They are the engine of push-off in every step, and are called the leg pump because they squeeze the deep veins and drive blood back to the heart against gravity.'
        }
      },
      {
        ar: 'الظنبوب (عظم الساق)', en: 'Tibia', x: 30, y: 20, side: 'left', go: 'skeleton',
        desc: {
          ar: 'العظم الكبير الحامل لثقل الجسم في الساق. طرفه السفلي يصنع سقف مفصل الكاحل، والنتوء الذي نحسه بارزا داخل الكاحل هو حافته السفلية.',
          en: 'The large weight-bearing bone of the leg. Its lower end forms the roof of the ankle joint, and the knob we feel jutting on the inner side of the ankle is its lower edge.'
        }
      },
      {
        ar: 'وتر أخيل', en: 'Achilles tendon', x: 12, y: 28, side: 'left',
        desc: {
          ar: 'اقوى وتر في الجسم واسمكه، ينقل قوة عضلات الساق الى العقب. يتحمل عند العدو ما يفوق ثمانية اضعاف وزن الجسم، ومنطقة تغذيته الدموية ضعيفة على بعد نحو خمسة سنتيمترات من العقب، وهناك بالذات يتمزق.',
          en: 'The strongest and thickest tendon in the body, carrying the force of the calf muscles to the heel. In running it bears more than eight times body weight, and its blood supply is poorest about five centimetres above the heel, which is exactly where it tears.'
        }
      },
      {
        ar: 'مفصل الكاحل', en: 'Ankle joint', x: 31, y: 35, side: 'left',
        desc: {
          ar: 'الخط الغضروفي بين اسفل الظنبوب وعظم القعب. مفصل مفصلي بابسط معانيه: يرفع القدم ويخفضها فقط، اما الميل جانبا فيحدث في المفاصل التي تحته لا فيه.',
          en: 'The cartilage line between the lower tibia and the talus. A hinge in the simplest sense: it lifts the foot and lowers it and nothing more, while tilting sideways happens in the joints below it, not here.'
        }
      },
      {
        ar: 'عظم القَعب (الكاحل)', en: 'Talus', x: 33, y: 43, side: 'left',
        desc: {
          ar: 'العظم الوسيط الذي ينقل ثقل الجسم كله من الساق الى القدم. لا تلتصق به عضلة واحدة اطلاقا وهو العظم الوحيد كذلك، لذلك تروية دمه ضعيفة وكسره بطيء الالتئام.',
          en: 'The go-between bone that carries the entire body weight from the leg into the foot. Not a single muscle attaches to it, the only bone of which that is true, so its blood supply is meagre and a fracture heals slowly.'
        }
      },
      {
        ar: 'عظم العَقِب', en: 'Calcaneus (heel bone)', x: 17, y: 58, side: 'left',
        desc: {
          ar: 'اكبر عظام القدم، وبنيته الاسفنجية ظاهرة هنا بوضوح. يستقبل صدمة كل خطوة، ويشد عليه وتر اخيل من الخلف واللفافة الاخمصية من الاسفل، فهو نقطة الشد بين اقوى شدين في القدم.',
          en: 'The largest bone of the foot, its spongy interior clearly visible here. It receives the impact of every step, with the Achilles tendon pulling on it from behind and the plantar fascia from below, so it sits between the two strongest pulls in the foot.'
        }
      },
      {
        ar: 'اللفافة الأخمصية', en: 'Plantar fascia', x: 38, y: 66, side: 'left',
        desc: {
          ar: 'صفيحة ليفية بيضاء تمتد كالوتر بين العقب ومقدمة القدم، وهي وتر القوس الطولي الذي يمنعه من الانبساط. التهاب مغرزها في العقب هو سبب الالم الشهير في اول خطوة عند النهوض من النوم.',
          en: 'A white fibrous sheet running like a bowstring from the heel to the forefoot; it is the tie of the longitudinal arch, stopping it from flattening. Inflammation where it attaches to the heel is the cause of that famous pain in the first step out of bed.'
        }
      },
      {
        ar: 'الوسادة الدهنية للعَقِب', en: 'Heel fat pad', x: 15, y: 72, side: 'left',
        desc: {
          ar: 'دهن محبوس داخل حجيرات ليفية تحت العقب، فهو لا ينضغط ولا ينزاح كالدهن العادي. هذي وسادة صدمات مصنوعة بدقة، وترققها مع العمر سبب شائع لالم الكعب عند كبار السن.',
          en: 'Fat locked inside fibrous chambers beneath the heel, so it does not simply squash or slide away like ordinary fat. This is a precisely engineered shock absorber, and its thinning with age is a common cause of heel pain in the elderly.'
        }
      },
      {
        ar: 'عظام رسغ القدم', en: 'Tarsal bones', x: 46, y: 49, side: 'right',
        desc: {
          ar: 'مجموعة العظام القصيرة بين الكاحل والمشط. حركتها بين بعضها صغيرة لكنها كثيرة، ومجموعها هو ما يجعل القدم تتشكل على الارض غير المستوية بدل ان تنزلق عليها.',
          en: 'The group of short bones between the ankle and the metatarsals. The movement between any two of them is small but there are many of them, and together they let the foot mould itself to uneven ground instead of skidding over it.'
        }
      },
      {
        ar: 'عظام مشط القدم', en: 'Metatarsal bones', x: 66, y: 57, side: 'right',
        desc: {
          ar: 'خمسة عظام طويلة تصنع مقدمة القدم وتحمل ثقل الجسم عند دفع الخطوة. العظم الثاني هو الاثبت والاطول، ولذلك هو الاكثر عرضة لكسر الاجهاد عند المشاة والعدائين.',
          en: 'Five long bones forming the forefoot and bearing the load at push-off. The second is the most rigid and the longest, which is why it is the commonest site of a stress fracture in walkers and runners.'
        }
      },
      {
        ar: 'سلاميات الأصابع', en: 'Phalanges', x: 88, y: 67, side: 'right',
        desc: {
          ar: 'عظام اصابع القدم: ثلاث لكل اصبع الا الابهام فسلاميتان. اصابع القدم لا تمسك شيئا لكنها تضغط الارض في نهاية الخطوة فتزيد اتزان الجسم وتطيل زمن الدفع.',
          en: 'The toe bones: three in each toe except the big toe, which has two. Toes grip nothing, but they press the ground at the end of the step, improving balance and lengthening the push.'
        }
      },
      {
        ar: 'جلد ودهن أخمص القدم', en: 'Skin and fat of the sole', x: 72, y: 74, side: 'right', go: 'skin',
        desc: {
          ar: 'اسمك جلد في الجسم كله، وتحته حشوة دهنية مقسمة بحواجز ليفية. لا شعر فيه ولا غدد دهنية، لكنه اغنى الجلد بالغدد العرقية، ولذلك تتعرق القدم اكثر من اي مكان اخر.',
          en: 'The thickest skin in the whole body, with a fat cushion beneath it divided by fibrous partitions. It has no hair and no oil glands, yet it is the richest skin in sweat glands, which is why the foot sweats more than anywhere else.'
        }
      }
    ],
    desc: {
      ar: 'قدمٌ من الجانب الإنسي مكشوفة عمّا في داخلها. تنزل عضلات الساق في وتر أخيل لتنغرز في عظم العَقِب، ويستقبل عظم القَعب ثقل الجسم من الظنبوب ويوزّعه: جزءاً إلى الخلف نحو العَقِب وجزءاً إلى الأمام نحو المشط. وبين هذين الطرفين ينشأ القوس الطولي — قوسٌ عظمي حقيقي مشدود من أسفل باللفافة الأخمصية كأنّها وتر القوس. القدم ليست قاعدة صلبة بل نابضٌ يهبط قليلاً عند وقع الخطوة فيمتصّ الصدمة، ثم يرتدّ فيعيد الطاقة إلى الدفعة التالية.',
      en: 'A foot seen from the inner side with its interior exposed. The calf muscles come down as the Achilles tendon to insert into the heel bone, and the talus receives the body’s weight from the tibia and shares it out: part backwards to the heel, part forwards to the forefoot. Between these two ends rises the longitudinal arch, a genuine bony arch tied underneath by the plantar fascia like a bowstring. The foot is not a rigid base but a spring that sinks a little on landing to absorb the shock, then recoils to return the energy to the next push.'
    },
    func: {
      ar: 'حمل الجسم والتحرّك به. في كل خطوة تتحوّل القدم مرّتين: تكون ليّنة مرنة عند ملامسة الأرض لتتشكّل عليها وتمتصّ الصدمة، ثم تتصلّب رافعةً كالعتلة عند الدفع. والقدم كذلك عضو توازن دقيق: مستقبلات الضغط في أخمصها ترسل إلى المخّ خريطةً لحظية لتوزيع الثقل، وبها نقف على قدمٍ واحدة دون أن نفكّر. وعضلات الساق تعمل من خلالها كمضخّة تُعيد الدم الوريدي إلى الأعلى.',
      en: 'Carrying the body and moving it. In every step the foot changes twice: it is soft and pliable on landing so it can mould to the ground and absorb the shock, then it stiffens into a rigid lever for push-off. It is also a precise balance organ: pressure receptors in the sole send the brain a moment-by-moment map of how weight is spread, and with it we stand on one leg without thinking. Through it the calf muscles also work as a pump returning venous blood upward.'
    },
    location: { ar: 'طرف الساق أسفل مفصل الكاحل، وهي القاعدة التي يقف عليها الجسم', en: 'The end of the leg below the ankle joint, the base on which the body stands' },
    size: { ar: '٢٦ عظماً و٣٣ مفصلاً وأكثر من ١٠٠ رباط في كل قدم · طول القدم البالغة نحو ٢٤ إلى ٢٧ سم', en: '26 bones, 33 joints and more than 100 ligaments in each foot; an adult foot is about 24 to 27 cm long' },
    short: { ar: 'قوسٌ نابض من ٢٦ عظماً يحمل عمرك كلّه', en: 'A springing arch of 26 bones that carries a whole lifetime' },
    parts: [
      { ar: 'عظم العَقِب والقَعب وعظام الرسغ', en: 'The calcaneus, the talus and the tarsal bones' },
      { ar: 'عظام المشط والسلاميات', en: 'The metatarsals and the phalanges' },
      { ar: 'القوس الطولي واللفافة الأخمصية', en: 'The longitudinal arch and the plantar fascia' },
      { ar: 'وتر أخيل والوسادة الدهنية للعَقِب', en: 'The Achilles tendon and the heel fat pad' }
    ],
    diseases: [
      { name: { ar: 'التهاب اللفافة الأخمصية', en: 'Plantar fasciitis' }, desc: { ar: 'ألم حادّ في العَقِب أشدّ ما يكون في أول خطوة بعد الاستيقاظ، سببه شدّ متكرّر على مغرز اللفافة', en: 'Sharp heel pain, worst in the first step after waking, from repeated pull on the fascia’s attachment' } },
      { name: { ar: 'تمزّق وتر أخيل', en: 'Achilles tendon rupture' }, desc: { ar: 'انقطاع مفاجئ عند دفعة قوية، يُحسّ كضربة على مؤخّرة الساق ويعجز المصاب عن الوقوف على أطراف أصابعه', en: 'A sudden snap during a hard push-off, felt like a blow to the back of the leg, after which the person cannot rise on tiptoe' } },
      { name: { ar: 'القدم المسطّحة', en: 'Flat foot' }, desc: { ar: 'هبوط القوس الطولي فيلامس أخمص القدم الأرض كلّه، وقد يسبّب تعباً وألماً في الساق مع طول الوقوف', en: 'The longitudinal arch drops so the whole sole meets the ground; with long standing it can bring fatigue and leg pain' } },
      { name: { ar: 'التواء الكاحل', en: 'Ankle sprain' }, desc: { ar: 'تمزّق أربطة الكاحل الوحشية عند انقلاب القدم إلى الداخل، وهي أشيع إصابة رياضية على الإطلاق', en: 'The outer ankle ligaments tear when the foot rolls inwards, the commonest sports injury of all' } },
      { name: { ar: 'كسر الإجهاد في المشط', en: 'Metatarsal stress fracture' }, desc: { ar: 'شرخ دقيق يتراكم من التكرار لا من ضربة واحدة، يظهر عند زيادة المشي أو الجري فجأة', en: 'A fine crack built up by repetition rather than one blow, appearing when walking or running is increased too fast' } }
    ]
  }
]);

/* ---------- المستقيم والقناة الشرجية (مقطع سهمي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'anorectal', type: 'organ', system: 'organs',
    name: { ar: 'المستقيم والقناة الشرجية', en: 'Rectum and anal canal' },
    img: 'img/anorectal.png', imgBack: 'img/anorectal-back.png', thumb: 'img/thumb-anorectal.png',
    labels: [
      {
        ar: 'الطيات المستعرضة للمستقيم', en: 'Transverse rectal folds', x: 58, y: 14, side: 'right',
        desc: {
          ar: 'ثلاث طيات عرضية ثابتة في جدار المستقيم، تظهر هنا كحواف افقية. تسند البراز المتجمع فوقها وتبطئ نزوله، فلا يصل الى القناة الشرجية دفعة واحدة.',
          en: 'Three permanent transverse shelves in the rectal wall, seen here as horizontal ridges. They support the stool gathering above them and slow its descent, so it does not reach the anal canal all at once.'
        }
      },
      {
        ar: 'جدار المستقيم', en: 'Rectal wall', x: 66, y: 28, side: 'right', go: 'large-intestine',
        desc: {
          ar: 'الجزء الاخير من الامعاء الغليظة وطوله نحو ١٢ سم. جداره العضلي يتمدد ليخزن، ومستقبلات التمدد فيه هي التي ترسل الاشارة الاولى: هنا شيء يحتاج الى تفريغ.',
          en: 'The last part of the large intestine, about 12 cm long. Its muscular wall stretches to store, and the stretch receptors within it send the first signal: there is something here that needs emptying.'
        }
      },
      {
        ar: 'العجز والعصعص', en: 'Sacrum and coccyx', x: 92, y: 35, side: 'right', go: 'skeleton',
        desc: {
          ar: 'العظم الخلفي للحوض، ويتقوس المستقيم امامه متبعا انحناءه. هذا الانحناء هو السبب في ان انبوب المنظار لا يدخل مستقيما بل يتبع منحنى العظم.',
          en: 'The bone at the back of the pelvis; the rectum curves in front of it, following its concavity. That curve is why an endoscope cannot be pushed straight in but must follow the bend of the bone.'
        }
      },
      {
        ar: 'العضلة الرافعة للشرج', en: 'Levator ani muscle', x: 72, y: 50, side: 'right', go: 'muscles',
        desc: {
          ar: 'صفيحة عضلية عريضة تصنع ارضية الحوض وتحمل الاحشاء فوقها. جزؤها العاني المستقيمي يلتف حول المستقيم كالمقلاع فيسحبه للامام ويصنع زاوية حادة تمنع التسرب، وتنفرج هذه الزاوية عمدا عند التغوط.',
          en: 'A broad muscular sheet forming the pelvic floor and carrying the organs above it. Its puborectal part slings around the rectum like a lasso, pulling it forward into a sharp angle that prevents leakage, an angle deliberately opened at the moment of defecation.'
        }
      },
      {
        ar: 'المصرّة الشرجية الداخلية', en: 'Internal anal sphincter', x: 55, y: 58, side: 'right',
        desc: {
          ar: 'حلقة من العضل الاملس تحيط بالقناة الشرجية، وهي تعمل بلا ارادة منا. تبقى مقبوضة طوال اليوم والليل وحتى في النوم، وهي المسؤولة عن نحو ثلثي قوة الاغلاق في الراحة.',
          en: 'A ring of smooth muscle around the anal canal that works without our will. It stays contracted all day and night, even in sleep, and provides about two thirds of the resting closing pressure.'
        }
      },
      {
        ar: 'أعمدة الشرج', en: 'Anal columns', x: 51, y: 66, side: 'right',
        desc: {
          ar: 'طيات طولية في بطانة اعلى القناة الشرجية، تحت كل منها ضفيرة وريدية ووسادة نسيجية. هذه الوسائد تنطبق على بعضها كسدادة ناعمة تمنع تسرب الغازات والسوائل، وهي نفسها التي تتضخم فتصير باسورا.',
          en: 'Longitudinal folds in the lining of the upper anal canal, each with a venous plexus and a tissue cushion beneath it. These cushions press together as a soft seal against leakage of gas and fluid, and they are the very structures that enlarge into haemorrhoids.'
        }
      },
      {
        ar: 'القناة الشرجية', en: 'Anal canal', x: 53, y: 74, side: 'right',
        desc: {
          ar: 'اخر ٣ الى ٤ سم من الانبوب الهضمي. نصفها الاعلى بطانة معوية بلا احساس بالالم، ونصفها الاسفل جلد غني بالاعصاب. ولهذا فالباسور الداخلي لا يوجع والشق الشرجي يوجع الما شديدا.',
          en: 'The last 3 to 4 cm of the digestive tube. Its upper half is intestinal lining with no pain sensation and its lower half is skin richly supplied with nerves. That is why an internal haemorrhoid does not hurt while an anal fissure is agonising.'
        }
      },
      {
        ar: 'الضفيرة الوريدية الشرجية', en: 'Anal venous plexus', x: 42, y: 55, side: 'left', go: 'vessels',
        desc: {
          ar: 'شبكة اوردة زرقاء متسعة تحيط بالقناة الشرجية فوق واسفل. امتلاؤها بالدم يزيد احكام الاغلاق، لكن ارتفاع الضغط عليها بالامساك او الحمل او الجلوس الطويل يوسعها فتبرز — وهذي هي البواسير.',
          en: 'A network of dilated blue veins encircling the anal canal above and below. Filling them with blood tightens the seal, but sustained pressure from constipation, pregnancy or long sitting stretches them until they bulge, and that is what haemorrhoids are.'
        }
      },
      {
        ar: 'المصرّة الشرجية الخارجية', en: 'External anal sphincter', x: 37, y: 72, side: 'left', go: 'muscles',
        desc: {
          ar: 'عضلة مخططة ارادية تحيط بالمصرة الداخلية من الخارج، تراها هنا كتلة حمراء بالياف واضحة. هي التي نشدها عمدا لتاجيل التبرز، ولا تحتمل الشد اكثر من دقيقة او دقيقتين لانها تتعب كاي عضلة ارادية.',
          en: 'A voluntary striated muscle wrapping the internal sphincter from outside, seen here as a red mass with visible fibres. It is the one we deliberately squeeze to postpone defecation, and it cannot hold for more than a minute or two because, like any voluntary muscle, it tires.'
        }
      },
      {
        ar: 'الدهن حول الشرج', en: 'Ischioanal fat', x: 27, y: 82, side: 'left',
        desc: {
          ar: 'حيز مملوء بالدهن على جانبي القناة الشرجية. يسمح للقناة ان تتسع عند مرور البراز، لكنه ايضا مساحة رخوة تنتشر فيها العدوى بسهولة فيتكون الخراج حول الشرجي.',
          en: 'A fat-filled space on either side of the anal canal. It lets the canal widen as stool passes, but it is also a loose space in which infection spreads easily to form a perianal abscess.'
        }
      },
      {
        ar: 'الجلد حول الشرج', en: 'Perianal skin', x: 48, y: 90, side: 'left', go: 'skin',
        desc: {
          ar: 'جلد رقيق مطوي حول الفتحة، غني بالاعصاب وبالغدد. حساسيته العالية هي سبب الالم الشديد في الشق الشرجي، وطياته الشعاعية هي ما يسمح للفتحة بالاتساع ثم العودة.',
          en: 'Thin folded skin around the opening, rich in nerves and glands. Its high sensitivity is why an anal fissure hurts so much, and its radiating folds are what let the opening widen and then return.'
        }
      }
    ],
    desc: {
      ar: 'مقطعٌ في نهاية الأنبوب الهضمي. المستقيم فوق: حجرة عضلية تتمدّد لتخزّن، وفي جدارها طيّاتٌ عرضية تُبطئ نزول ما فيها. ثم تضيق النهاية إلى قناة شرجية طولها ثلاثة أو أربعة سنتيمترات، يقفلها جهازان: مصرّةٌ داخلية من عضلٍ أملس تعمل بلا إرادتنا ليل نهار، ومصرّةٌ خارجية مخطّطة نتحكّم فيها. ويلتفّ فوقهما مقلاعُ العضلة العانية المستقيمية فيثني الأنبوب زاويةً حادّة هي القفل الثالث. وبين البطانة والعضل تجلس وسائد وريدية تُحكم الإغلاق — وهي نفسها التي تصير بواسير حين يزيد الضغط عليها.',
      en: 'A section through the end of the digestive tube. Above is the rectum: a muscular chamber that stretches to store, its wall carrying transverse shelves that slow what descends. The end then narrows into an anal canal three or four centimetres long, closed by two devices: an internal sphincter of smooth muscle working without our will day and night, and an external striated sphincter under our control. Over both, the puborectal sling bends the tube into a sharp angle that is the third lock. Between lining and muscle sit venous cushions that perfect the seal, the very cushions that become haemorrhoids when the pressure on them rises.'
    },
    func: {
      ar: 'التخزين ثم التفريغ في وقتٍ نختاره نحن — وهذا التحكّم الإرادي من أرقى ما في الجسم. حين يصل البراز إلى المستقيم تتمدّد جدرانه فتصل الرسالة إلى المخّ، وترتخي المصرّة الداخلية تلقائياً قليلاً لتسمح للبطانة أن «تتذوّق» ما وصل وتميّز الغاز من السائل من الصلب. عندها يقرّر الإنسان: إن كان الوقت مناسباً استرخت المصرّة الخارجية وانفرجت زاوية العضلة العانية المستقيمية فمرّ ما فيه؛ وإن لم يكن، شُدّت المصرّة الخارجية إرادياً حتى يهدأ الإحساس ويعود التخزين.',
      en: 'Storing, then emptying at a moment we choose, and that voluntary control is among the body’s finest achievements. When stool reaches the rectum its walls stretch and the message reaches the brain, and the internal sphincter relaxes a little on its own so the lining can sample what has arrived and tell gas from liquid from solid. The person then decides: if the time is right the external sphincter relaxes, the puborectal angle opens and the contents pass; if it is not, the external sphincter is squeezed voluntarily until the urge subsides and storage resumes.'
    },
    location: { ar: 'في أسفل الحوض أمام العجز والعصعص، ونهايته في العجان بين الأليتين', en: 'In the lower pelvis in front of the sacrum and coccyx, ending in the perineum between the buttocks' },
    size: { ar: 'المستقيم نحو ١٢ سم والقناة الشرجية ٣ إلى ٤ سم · ضغط الإغلاق في الراحة نحو ٦٠ ملم زئبق ويتضاعف عند الشدّ الإرادي', en: 'The rectum is about 12 cm and the anal canal 3 to 4 cm; resting closing pressure is around 60 mmHg and roughly doubles on voluntary squeeze' },
    short: { ar: 'ثلاثة أقفال متتالية تجعل التوقيت قراراً لا صدفة', en: 'Three locks in series that make the timing a decision, not an accident' },
    parts: [
      { ar: 'المستقيم وطيّاته المستعرضة', en: 'The rectum and its transverse folds' },
      { ar: 'القناة الشرجية وأعمدتها', en: 'The anal canal and its columns' },
      { ar: 'المصرّتان الداخلية والخارجية', en: 'The internal and external sphincters' },
      { ar: 'العضلة الرافعة للشرج والضفيرة الوريدية', en: 'The levator ani and the venous plexus' }
    ],
    diseases: [
      { name: { ar: 'البواسير', en: 'Haemorrhoids' }, desc: { ar: 'تضخّم الوسائد الوريدية فتنزف دماً أحمر فاتحاً مع التبرّز وقد تبرز خارج الفتحة؛ الداخلية غالباً بلا ألم', en: 'The venous cushions enlarge, bleeding bright red with defecation and sometimes prolapsing; internal ones are usually painless' } },
      { name: { ar: 'الشقّ الشرجي', en: 'Anal fissure' }, desc: { ar: 'تمزّق طولي في جلد القناة السفلي يسبّب ألماً حادّاً كالسكّين أثناء التبرّز وبعده بساعات', en: 'A lengthwise tear in the skin of the lower canal causing a knife-like pain during defecation and for hours after' } },
      { name: { ar: 'الخرّاج حول الشرجي', en: 'Perianal abscess' }, desc: { ar: 'التهاب صديدي في الحيّز الدهني حول القناة: ألم نابض وتورّم وحرارة، وعلاجه تفريغ جراحي', en: 'A pus-filled infection in the fatty space around the canal: throbbing pain, swelling and fever, treated by surgical drainage' } },
      { name: { ar: 'الناسور الشرجي', en: 'Anal fistula' }, desc: { ar: 'قناة غير طبيعية تبقى بعد الخرّاج تصل داخل القناة بالجلد، فيخرج منها إفراز متكرّر', en: 'An abnormal track left behind after an abscess, connecting the inside of the canal to the skin and discharging repeatedly' } },
      { name: { ar: 'سلس البراز', en: 'Faecal incontinence' }, desc: { ar: 'ضعف المصرّات أو تلف أعصابها — بعد الولادة أو الجراحة أو مع تقدّم العمر — فيفقد الإنسان التحكّم', en: 'Weakness of the sphincters or damage to their nerves, after childbirth, surgery or with age, so control is lost' } }
    ]
  }
]);

/* ---------- بصيلة الشعرة (مقطع رأسي في الجلد) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'hair-follicle', type: 'organ', system: 'skin',
    name: { ar: 'بصيلة الشعرة', en: 'Hair follicle' },
    img: 'img/hair-follicle.png', imgBack: 'img/hair-follicle-back.png', thumb: 'img/thumb-hair-follicle.png',
    labels: [
      {
        ar: 'البشرة', en: 'Epidermis', x: 28, y: 13, side: 'left', go: 'skin',
        desc: {
          ar: 'الطبقة الخارجية من الجلد، وسطحها خلايا ميتة متقرنة مرصوصة كالقرميد. لا اوعية دموية فيها اطلاقا، وتتغذى بالترشح من الادمة تحتها، وتتجدد كاملة كل شهر تقريبا.',
          en: 'The outer layer of the skin, its surface made of dead keratinised cells stacked like roof tiles. It contains no blood vessels at all, feeding by seepage from the dermis beneath, and renews itself completely about every month.'
        }
      },
      {
        ar: 'الطبقة القاعدية', en: 'Basal layer', x: 30, y: 22, side: 'left',
        desc: {
          ar: 'الصف السفلي من البشرة، وهو مصنع الخلايا الجديدة التي تصعد الى السطح. هنا تسكن الخلايا الصبغية التي تصنع الميلانين وتوزعه، وهي التي تلون الجلد والشعرة معا.',
          en: 'The bottom row of the epidermis, the factory of new cells that climb towards the surface. Here live the pigment cells that make melanin and share it out, colouring the skin and the hair alike.'
        }
      },
      {
        ar: 'الأدمة', en: 'Dermis', x: 20, y: 34, side: 'left', go: 'skin',
        desc: {
          ar: 'الطبقة السميكة تحت البشرة، وهي نسيج ضام مليء بالكولاجين والالياف المرنة. فيها تعيش الاوعية والاعصاب والغدد والبصيلات كلها، وهي التي تعطي الجلد متانته ومرونته.',
          en: 'The thick layer under the epidermis, a connective tissue packed with collagen and elastic fibres. All the vessels, nerves, glands and follicles live in it, and it gives the skin its toughness and its stretch.'
        }
      },
      {
        ar: 'الغدة العرقية', en: 'Sweat gland', x: 23, y: 60, side: 'left',
        desc: {
          ar: 'انبوب ملفوف على نفسه كالكبة في عمق الادمة، تصعد منه قناة رفيعة الى سطح الجلد. في الجسم نحو ٣ ملايين منها، وهي جهاز التبريد الاول عند الانسان.',
          en: 'A tube coiled on itself like a ball deep in the dermis, with a fine duct climbing to the skin surface. The body holds about three million of them, and they are the human’s primary cooling system.'
        }
      },
      {
        ar: 'بصلة الشعرة', en: 'Hair bulb', x: 42, y: 74, side: 'left',
        desc: {
          ar: 'الانتفاخ في قاع البصيلة، وهو الجزء الحي الوحيد في الشعرة كلها. خلاياه من اسرع خلايا الجسم انقساما، ولهذا يصيبها العلاج الكيماوي اولا فيتساقط الشعر.',
          en: 'The swelling at the base of the follicle, and the only living part of the whole hair. Its cells are among the fastest dividing in the body, which is why chemotherapy strikes them first and the hair falls out.'
        }
      },
      {
        ar: 'النسيج الدهني تحت الجلد', en: 'Subcutaneous fat', x: 17, y: 84, side: 'left',
        desc: {
          ar: 'فصيصات دهنية صفراء تحت الادمة تعمل عازلا حراريا ووسادة صدمات ومخزن طاقة. البصيلات النشطة تنزل حتى هذي الطبقة، ولهذا تصل جذور الشعر اعمق مما يظن الناس.',
          en: 'Yellow fat lobules beneath the dermis serving as heat insulation, shock padding and an energy store. Active follicles reach down into this layer, so hair roots sit deeper than people imagine.'
        }
      },
      {
        ar: 'ساق الشعرة', en: 'Hair shaft', x: 54, y: 5, side: 'right',
        desc: {
          ar: 'الجزء الظاهر فوق سطح الجلد، وهو نسيج ميت تماما من الكيراتين. لا احساس فيه ولا تغذية، ولذلك قصه لا يوجع ولا يغير شيئا في سرعة نموه مهما قيل.',
          en: 'The part visible above the skin, entirely dead keratin. It has no sensation and no nourishment, which is why cutting it does not hurt and, whatever is said, changes nothing about how fast it grows.'
        }
      },
      {
        ar: 'جذر الشعرة', en: 'Hair root', x: 49, y: 36, side: 'right',
        desc: {
          ar: 'امتداد الشعرة داخل الجلد من البصلة الى السطح. هو ايضا ميت لكنه محاط باغماد حية تصوغه وتلمعه، وهي التي تحدد ان يخرج الشعر مستقيما او مجعدا حسب شكل مقطع البصيلة.',
          en: 'The hair’s continuation inside the skin from the bulb to the surface. It too is dead, but it is wrapped in living sheaths that mould and polish it, and the cross-sectional shape of the follicle is what decides whether the hair emerges straight or curly.'
        }
      },
      {
        ar: 'الغدة الدهنية', en: 'Sebaceous gland', x: 66, y: 44, side: 'right',
        desc: {
          ar: 'عنقود من الفصيصات يفتح في جانب البصيلة ويفرز الزهم الدهني. الزهم يزيت الشعرة ويحفظ ماء الجلد ويقاوم الجراثيم، وانسداد فتحته مع فرط الافراز هو اصل حبوب الشباب.',
          en: 'A cluster of lobules opening into the side of the follicle and secreting oily sebum. Sebum oils the hair, holds the skin’s water and resists germs, and a blocked opening combined with heavy secretion is the origin of acne.'
        }
      },
      {
        ar: 'العضلة الناصبة للشعرة', en: 'Arrector pili muscle', x: 72, y: 52, side: 'right', go: 'muscles',
        desc: {
          ar: 'شريط عضلي املس صغير يربط جانب البصيلة بالبشرة. اذا انقبض نصب الشعرة وشد الجلد فظهرت القشعريرة. في الحيوان يزيد ذلك سمك الفراء ودفاياته، وعند الانسان بقيت الحركة وضاعت الفائدة.',
          en: 'A small band of smooth muscle tying the side of the follicle to the epidermis. When it contracts the hair stands up and the skin puckers into goose bumps. In animals this thickens the fur and traps warmth; in humans the movement remains and the benefit has gone.'
        }
      },
      {
        ar: 'جراب الشعرة (الأغماد)', en: 'Follicle sheaths', x: 58, y: 62, side: 'right',
        desc: {
          ar: 'طبقات متحدة المركز تحيط بالجذر من البصلة الى السطح، تراها هنا كاسطوانات متداخلة. تصوغ الشعرة وتثبتها، وفيها الخلايا الجذعية التي تعيد بناء البصيلة في كل دورة نمو جديدة.',
          en: 'Concentric layers wrapping the root from bulb to surface, seen here as nested cylinders. They shape the hair and hold it fast, and they house the stem cells that rebuild the follicle at the start of every new growth cycle.'
        }
      },
      {
        ar: 'الحُليمة الأدمية', en: 'Dermal papilla', x: 47, y: 70, side: 'right',
        desc: {
          ar: 'نتوء صغير من الادمة يدخل في قاع البصلة تراه هنا مليئا بشعيرات دموية. هو الذي يغذي الشعرة ويعطي الاوامر: طول الدورة وسمك الشعرة ولونها كلها تقرر من هنا.',
          en: 'A small projection of dermis pushing into the base of the bulb, seen here filled with capillaries. It feeds the hair and gives the orders: the length of the cycle, the thickness of the hair and its colour are all decided here.'
        }
      },
      {
        ar: 'الشريان والوريد', en: 'Artery and vein', x: 46, y: 88, side: 'right', go: 'vessels',
        desc: {
          ar: 'الشريان الاحمر يجلب الغذاء والاكسجين والوريد الازرق يحمل الفضلات. كل بصيلة معلقة بهذي الشبكة، واذا ضعف وصول الدم اليها ضعفت الشعرة ورقت قبل ان تسقط.',
          en: 'The red artery brings food and oxygen and the blue vein carries the waste away. Every follicle hangs on this network, and when its blood supply falters the hair weakens and thins before it is shed.'
        }
      }
    ],
    desc: {
      ar: 'مكعّبٌ من الجلد مقطوعٌ رأسياً حول شعرة واحدة. فوق السطح ساقٌ ميتة من الكيراتين، وتحته البشرة ثم الأدمة ثم الدهن. البصيلة أنبوبٌ مائل ينزل من السطح إلى العمق وينتهي ببصلةٍ منتفخة، تدخل فيها حُليمةٌ أدميّة مليئة بالشعيرات الدموية هي مصدر الغذاء ومركز القرار. وفي جانب البصيلة تفتح غدّة دهنية، ويربطها بالبشرة شريطٌ عضلي صغير هو الذي يصنع القشعريرة. والشعرة تعيش دورةً متكرّرة: نموٌّ سنواتٍ، ثم راحةٌ أشهر، ثم سقوطٌ وبداية جديدة.',
      en: 'A block of skin cut vertically around a single hair. Above the surface a dead keratin shaft, and below it the epidermis, then the dermis, then the fat. The follicle is a slanting tube descending from the surface into the depths and ending in a swollen bulb, into which a dermal papilla full of capillaries pushes as the source of nourishment and the centre of command. A sebaceous gland opens into the side of the follicle, and a small muscular band ties it to the epidermis, the maker of goose bumps. The hair lives a repeating cycle: years of growth, months of rest, then shedding and a fresh start.'
    },
    func: {
      ar: 'الشعر عزلٌ حراري وحاجزٌ ميكانيكي وواقٍ من الشمس، لكنّ أهمّ ما تفعله البصيلة عند الإنسان هو اللمس عن بُعد: كل شعرة محاطة بضفيرة أعصاب عند جذرها، فهي رافعة تنقل أدنى لمسةٍ للهواء قبل أن يصل الشيء إلى الجلد. والغدّة الدهنية الملحقة بها تفرز الزهم الذي يُزيّت الشعر ويحفظ ماء الجلد ويقاوم الجراثيم. والبصيلة كذلك خزّان الخلايا الجذعية التي تُرمّم البشرة بعد الحروق والجروح السطحية.',
      en: 'Hair is heat insulation, a mechanical barrier and a sunshade, but the follicle’s most important job in humans is touch at a distance: every hair is wrapped in a nerve plexus at its root, so it works as a lever conveying the faintest stir of air before anything reaches the skin itself. The sebaceous gland attached to it secretes the sebum that oils the hair, holds the skin’s water and resists germs. The follicle is also the reservoir of stem cells that resurface the skin after burns and shallow wounds.'
    },
    location: { ar: 'في الأدمة وأحياناً في الدهن تحت الجلد، وتغطّي الجسم كلّه إلا الراحتين والأخمصين والشفتين', en: 'In the dermis and sometimes the subcutaneous fat, covering the whole body except the palms, the soles and the lips' },
    size: { ar: 'نحو ٥ ملايين بصيلة في الجسم منها ١٠٠ ألف في فروة الرأس · تنمو الشعرة نحو ١ سم شهرياً · ويسقط ٥٠ إلى ١٠٠ شعرة يومياً وهذا طبيعي', en: 'About five million follicles in the body, some 100,000 of them on the scalp; hair grows roughly 1 cm a month, and losing 50 to 100 hairs a day is normal' },
    short: { ar: 'مصنعٌ حيّ في قاع الجلد يُخرج خيطاً ميّتاً', en: 'A living factory at the base of the skin turning out a dead thread' },
    parts: [
      { ar: 'ساق الشعرة وجذرها', en: 'The hair shaft and its root' },
      { ar: 'البصلة والحُليمة الأدمية', en: 'The bulb and the dermal papilla' },
      { ar: 'الغدّة الدهنية', en: 'The sebaceous gland' },
      { ar: 'العضلة الناصبة للشعرة', en: 'The arrector pili muscle' }
    ],
    diseases: [
      { name: { ar: 'الثعلبة البقعية', en: 'Alopecia areata' }, desc: { ar: 'مناعة الجسم تهاجم بصيلاته فيسقط الشعر في بقع دائرية ملساء، وقد ينبت من جديد', en: 'The immune system attacks the follicles and hair falls out in smooth round patches, often regrowing later' } },
      { name: { ar: 'الصلع الوراثي', en: 'Androgenetic alopecia' }, desc: { ar: 'تصغّر البصيلات تدريجياً بتأثير الهرمونات فتُخرج شعراً أرفع وأقصر حتى تتوقّف', en: 'Hormones progressively miniaturise the follicles so they produce finer, shorter hair until they stop' } },
      { name: { ar: 'حبّ الشباب', en: 'Acne' }, desc: { ar: 'انسداد فتحة البصيلة مع فرط الزهم وتكاثر الجراثيم فتلتهب وتتقيّح', en: 'The follicle opening blocks while sebum is heavy and bacteria multiply, so it inflames and fills with pus' } },
      { name: { ar: 'الدُّمَّل (التهاب البصيلة)', en: 'Boil (folliculitis)' }, desc: { ar: 'عدوى بكتيرية داخل البصيلة تُنتج بثرة مؤلمة حول شعرة واحدة', en: 'A bacterial infection inside the follicle producing a painful pustule around a single hair' } },
      { name: { ar: 'الشعر الناشب', en: 'Ingrown hair' }, desc: { ar: 'شعرة تنحني وتعود لتدخل الجلد بعد الحلاقة فتلتهب وتحمرّ وتؤلم', en: 'A hair curls back into the skin after shaving, so the spot becomes red, inflamed and sore' } }
    ]
  }
]);

/* ---------- الظفر (مقطع طولي في طرف الإصبع) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'nail', type: 'organ', system: 'skin',
    name: { ar: 'الظفر', en: 'Nail' },
    img: 'img/nail.png', imgBack: 'img/nail-back.png', thumb: 'img/thumb-nail.png',
    labels: [
      {
        ar: 'الطية الظفرية الخلفية', en: 'Proximal nail fold', x: 24, y: 16, side: 'left',
        desc: {
          ar: 'طية الجلد التي تغطي مؤخرة الظفر وتخفي المهد تحتها. هي غطاء المصنع: تحمي الخلايا التي تصنع الظفر من الجراثيم ومن الصدم، والتهابها هو ما يسمى الداحس.',
          en: 'The fold of skin covering the back of the nail and hiding the matrix beneath it. It is the lid over the factory, shielding the nail-making cells from germs and knocks; its infection is what is called a paronychia.'
        }
      },
      {
        ar: 'الجليدة', en: 'Cuticle (eponychium)', x: 33, y: 23, side: 'left',
        desc: {
          ar: 'الشريط الرقيق الذي يمتد من الطية على سطح الظفر فيلحمه بالجلد ويسد ما بينهما. قصه او دفعه للخلف يفتح بابا للجراثيم والماء الى المهد مباشرة، ولذلك تتشوه الاظفار عند من يهمل ذلك.',
          en: 'The thin strip running from the fold onto the nail surface, welding the two together and sealing the gap. Cutting it or pushing it back opens a door straight to the matrix for germs and water, which is why nails deform in those who neglect this.'
        }
      },
      {
        ar: 'مهد الظفر (المصفوفة)', en: 'Nail matrix', x: 32, y: 32, side: 'left',
        desc: {
          ar: 'النسيج المخطط تحت الطية، وهو مصنع الظفر كله. خلاياه تنقسم وتتقرن وتنضغط الى الامام فتخرج صفيحة صلبة. اي اذى هنا — ضربة او مرض او دواء — يظهر بعد اسابيع كخط او تموج على الظفر.',
          en: 'The striated tissue under the fold, the factory of the entire nail. Its cells divide, keratinise and are pressed forward into a hard plate. Any injury here, a blow, an illness or a drug, appears weeks later as a line or a ripple across the nail.'
        }
      },
      {
        ar: 'فراش الظفر', en: 'Nail bed', x: 55, y: 40, side: 'left',
        desc: {
          ar: 'النسيج الوردي الغني بالشعيرات تحت الصفيحة، وترى فيه اوعيته الطولية. لونه هو ما نراه عبر الظفر، ولهذا يقيس الطبيب زمن عودة اللون بعد الضغط ليحكم على الدورة الدموية.',
          en: 'The pink capillary-rich tissue beneath the plate, its lengthwise vessels visible here. Its colour is what we see through the nail, which is why a doctor presses the nail and times the return of colour to judge the circulation.'
        }
      },
      {
        ar: 'وتر مرتكز في قاعدة السلامية', en: 'Tendon inserting on the phalanx', x: 20, y: 52, side: 'left',
        desc: {
          ar: 'الياف وترية بيضاء تنتهي على قاعدة العظم الطرفي. الوتر لا يلمس الظفر لكنه قريب جدا من المهد، ولذلك تصيب جروح طرف الاصبع العميقة الاثنين معا.',
          en: 'White tendon fibres ending on the base of the tip bone. The tendon never touches the nail, yet it runs very close to the matrix, which is why deep fingertip wounds injure both together.'
        }
      },
      {
        ar: 'عظم السلامية الطرفية', en: 'Distal phalanx', x: 48, y: 62, side: 'left', go: 'skeleton',
        desc: {
          ar: 'العظم الاخير في الاصبع، وتظهر بنيته الاسفنجية بمسامها. الظفر يستند اليه من فوق فيصنع سندانا صلبا يضغط عليه لحم البنان من تحت، وبهذا نلتقط الاشياء الصغيرة.',
          en: 'The last bone of the finger, its spongy interior visible as pores. The nail rests upon it from above to form a firm anvil against which the pulp presses from below, and that is how we pick up small things.'
        }
      },
      {
        ar: 'الأوعية الدموية', en: 'Blood vessels', x: 48, y: 74, side: 'left', go: 'vessels',
        desc: {
          ar: 'شريان احمر ووريد ازرق يجريان الى بنان الاصبع. طرف الاصبع غني بمفاغرات شريانية وريدية خاصة تفتح وتغلق لتنظيم حرارة الجسم، ولهذا تبرد الاصابع اولا في البرد.',
          en: 'A red artery and a blue vein running to the finger pulp. The fingertip is rich in special artery-to-vein shunts that open and close to regulate body temperature, which is why the fingers are the first to go cold.'
        }
      },
      {
        ar: 'جلد بطن الإصبع', en: 'Finger pulp skin', x: 60, y: 84, side: 'left', go: 'skin',
        desc: {
          ar: 'جلد سميك تحته دهن مقسم بحواجز ليفية تربطه بالعظم مباشرة. هذي الحواجز تمنع الجلد من الانزلاق عند المسك، وهي ايضا سبب الالم الشديد في خراج البنان لان الصديد يحبس بينها.',
          en: 'Thick skin over fat divided by fibrous partitions that tie it straight to the bone. These partitions stop the skin sliding when we grip, and they are also why an abscess of the pulp is so painful: the pus is trapped between them.'
        }
      },
      {
        ar: 'الهُلال', en: 'Lunula', x: 40, y: 27, side: 'right',
        desc: {
          ar: 'الهلال الابيض عند قاعدة الظفر، وهو الجزء الظاهر من المهد. بياضه ليس لونا بل لان خلاياه لم يكتمل تقرنها بعد فلا تنفذ منها حمرة الفراش. وهو اوضح ما يكون في الابهام وقد يختفي في الخنصر.',
          en: 'The white crescent at the base of the nail, the visible part of the matrix. Its whiteness is not a pigment: its cells have not finished keratinising, so the redness of the bed does not show through. It is clearest on the thumb and may be invisible on the little finger.'
        }
      },
      {
        ar: 'صفيحة الظفر', en: 'Nail plate', x: 68, y: 34, side: 'right',
        desc: {
          ar: 'الصفيحة الصلبة نفسها، وهي نحو ١٠٠ طبقة من خلايا ميتة متقرنة ملحومة ببعضها. صلابتها من كيراتين صلب غني بالكبريت، وهي شفافة في الاصل ولونها الوردي مستعار من الفراش تحتها.',
          en: 'The hard plate itself, some hundred layers of dead keratinised cells welded together. Its hardness comes from a hard, sulphur-rich keratin; it is transparent in itself and its pink colour is borrowed from the bed beneath.'
        }
      },
      {
        ar: 'الحافة الحرّة', en: 'Free edge', x: 95, y: 43, side: 'right',
        desc: {
          ar: 'طرف الظفر الذي تجاوز اللحم فصار حرا، وهو الجزء الذي نقصه. تحته مباشرة يوجد ختم من الجلد المتقرن يسد ما بين الصفيحة والفراش ويمنع دخول الماء والجراثيم.',
          en: 'The tip of the nail that has grown past the flesh and hangs free, the part we cut. Right beneath it lies a seal of keratinised skin closing the gap between plate and bed against water and germs.'
        }
      },
      {
        ar: 'النسيج الدهني (وسادة الإصبع)', en: 'Fat pad of the fingertip', x: 78, y: 72, side: 'right',
        desc: {
          ar: 'حشوة دهنية محبوسة في حجيرات ليفية تحت جلد البنان. هي التي تجعل الاصبع يتشكل على ما يمسكه فتكبر مساحة التلامس وتزيد قوة القبضة وحساسية اللمس معا.',
          en: 'A fat cushion locked into fibrous chambers beneath the pulp skin. It lets the fingertip mould itself around whatever it holds, enlarging the contact area and improving both grip and the sensitivity of touch.'
        }
      }
    ],
    desc: {
      ar: 'مقطعٌ طولي في طرف الإصبع. الظفر ليس عظماً بل جلدٌ تخصّص: صفيحةٌ من خلايا ميّتة متقرّنة ملحومة بعضها ببعض. مصنعه هو المهد المختبئ تحت الطية الخلفية، والجزء الوحيد الظاهر منه هو الهلال الأبيض عند القاعدة. من المهد تُدفع الصفيحة إلى الأمام دفعاً بطيئاً فوق فراشٍ ورديّ مليء بالشعيرات هو الذي يُعير الظفر لونه، حتى تتجاوز اللحم فتصير حافّةً حرّة. وتحت كل ذلك عظم السلامية الطرفية، والظفر يستند إليه فيصنع معه ملقطاً.',
      en: 'A lengthwise section through the fingertip. The nail is not bone but specialised skin: a plate of dead keratinised cells welded together. Its factory is the matrix hidden beneath the proximal fold, and the only part of it we can see is the white lunula at the base. From the matrix the plate is pushed slowly forward over a pink capillary-rich bed that lends the nail its colour, until it passes the flesh and becomes a free edge. Beneath it all lies the distal phalanx, against which the nail braces to make a pair of tongs.'
    },
    func: {
      ar: 'الظفر سندانٌ صلب. عند الإمساك بشيء صغير يضغط لحم البنان من أسفل والظفر يمنعه من الانفلات إلى أعلى، فيتركّز الضغط في نقطةٍ واحدة — وبهذا نلتقط الدبّوس والخيط. وهو أيضاً درعٌ يحمي طرف الإصبع من الرضّ، ومساعدٌ على الحكّ والخدش والفكّ والفتح. وله وظيفة حسّية غير متوقّعة: صلابته تجعل ضغط اللمس ينتقل إلى الفراش الغني بالأعصاب، فترتفع دقّة الإحساس في البنان. وهو أخيراً مرآة صحّية يقرأ فيها الطبيب علامات فقر الدم وأمراض القلب والرئة والكبد.',
      en: 'The nail is a rigid anvil. When we pinch something small the pulp presses up from below and the nail stops it escaping upward, so the pressure focuses on a single point, and that is how we pick up a pin or a thread. It is also a shield protecting the fingertip from knocks, and a tool for scratching, prising and opening. It has an unexpected sensory role too: its stiffness transmits touch pressure into the nerve-rich bed, sharpening the sensitivity of the pulp. And it is a health mirror in which a doctor reads signs of anaemia and of heart, lung and liver disease.'
    },
    location: { ar: 'على ظهر السلامية الطرفية في كل إصبع من أصابع اليدين والقدمين', en: 'On the back of the distal phalanx of every finger and toe' },
    size: { ar: 'ينمو ظفر اليد نحو ٣ ملم شهرياً وظفر القدم نحو ١ ملم · تجديد ظفر اليد كاملاً يستغرق ٦ أشهر وظفر القدم سنة ونصف', en: 'A fingernail grows about 3 mm a month and a toenail about 1 mm; a fingernail is fully replaced in six months, a toenail in about eighteen' },
    short: { ar: 'سندانٌ ميّت فوق أكثر أطراف الجسم إحساساً', en: 'A dead anvil over the most sensitive tip of the body' },
    parts: [
      { ar: 'صفيحة الظفر والحافة الحرّة', en: 'The nail plate and the free edge' },
      { ar: 'المهد والهلال', en: 'The matrix and the lunula' },
      { ar: 'فراش الظفر', en: 'The nail bed' },
      { ar: 'الطية الخلفية والجليدة', en: 'The proximal fold and the cuticle' }
    ],
    diseases: [
      { name: { ar: 'الفطر الظفري', en: 'Onychomycosis' }, desc: { ar: 'عدوى فطرية تُثخّن الظفر وتُصفّره وتفتّته، وأشيع في أظفار القدم، وعلاجها طويل', en: 'A fungal infection thickens, yellows and crumbles the nail, commonest in toenails and slow to treat' } },
      { name: { ar: 'الظفر الناشب', en: 'Ingrown toenail' }, desc: { ar: 'انغراس حافّة الظفر في الجلد المجاور — غالباً في إبهام القدم — فيلتهب ويؤلم ويتقيّح', en: 'The nail edge digs into the neighbouring skin, usually on the big toe, so it inflames, hurts and suppurates' } },
      { name: { ar: 'الداحس (التهاب الطية)', en: 'Paronychia' }, desc: { ar: 'التهاب الطية حول الظفر بعد جرح أو قصّ الجليدة، فتحمرّ وتتورّم وقد تتجمّع فيها صديد', en: 'Inflammation of the fold around the nail after a wound or cutting the cuticle, leaving it red, swollen and sometimes filled with pus' } },
      { name: { ar: 'الورم الدموي تحت الظفر', en: 'Subungual haematoma' }, desc: { ar: 'تجمّع دم تحت الصفيحة بعد رضّة، يسوَدّ لونه ويسبّب ألماً نابضاً شديداً لأنه محبوس', en: 'Blood collects under the plate after a crush injury, turning it black and causing a fierce throbbing pain because it is trapped' } },
      { name: { ar: 'خطوط بو', en: 'Beau’s lines' }, desc: { ar: 'أخاديد عرضية في الظفر تسجّل توقّف المهد أثناء مرض شديد أو علاج كيماوي، وتتحرّك للأمام مع النمو', en: 'Transverse grooves recording a pause in the matrix during a severe illness or chemotherapy, travelling forward as the nail grows' } }
    ]
  }
]);

/* ---------- مفصل الكتف (مقطع إكليلي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'shoulder', type: 'organ', system: 'skeleton',
    name: { ar: 'مفصل الكتف', en: 'Shoulder joint' },
    img: 'img/shoulder.png', imgBack: 'img/shoulder-back.png', thumb: 'img/thumb-shoulder.png',
    labels: [
      {
        ar: 'الجراب تحت الأخرمي', en: 'Subacromial bursa', x: 40, y: 22, side: 'left',
        desc: {
          ar: 'كيس رقيق مبطن بغشاء زليلي بين الاخرم من فوق ووتر الكفة من تحت، تراه هنا عدسة رمادية زرقاء. يعمل كوسادة زلقة تمنع احتكاك الوتر بالعظم عند رفع الذراع، والتهابه هو اشيع سبب لالم الكتف على الاطلاق.',
          en: 'A thin sac lined with synovium lying between the acromion above and the cuff tendon below, seen here as a blue-grey lens. It works as a slippery cushion keeping the tendon off the bone when the arm is raised, and its inflammation is by far the commonest cause of shoulder pain.'
        }
      },
      {
        ar: 'وتر الكفة المديرة', en: 'Rotator cuff tendon', x: 44, y: 30, side: 'left',
        desc: {
          ar: 'صفيحة وترية بيضاء تلتف على راس العضد وتلتحم بالمحفظة. اربعة اوتار تصنع هذي الكفة، وعملها الحقيقي ليس رفع الذراع بل تثبيت الراس في تجويفه الضحل كي لا ينزلق مع كل حركة.',
          en: 'A white tendinous sheet wrapping the head of the humerus and blending with the capsule. Four tendons make up this cuff, and their real work is not to raise the arm but to hold the head in its shallow socket so it does not slip with every movement.'
        }
      },
      {
        ar: 'العضلة الدالية', en: 'Deltoid muscle', x: 9, y: 42, side: 'left', go: 'muscles',
        desc: {
          ar: 'العضلة الضخمة التي تصنع استدارة الكتف وتغطي المفصل كله. هي رافعة الذراع الاساسية بعد اول ١٥ درجة، وشكلها المثلث هو الذي سمى الحرف الاغريقي دلتا.',
          en: 'The bulky muscle that gives the shoulder its round contour and covers the whole joint. It is the main lifter of the arm beyond the first fifteen degrees, and its triangular shape is what the Greek letter delta names.'
        }
      },
      {
        ar: 'رأس عظم العضد', en: 'Head of the humerus', x: 44, y: 50, side: 'left', go: 'skeleton',
        desc: {
          ar: 'كرة عظمية كبيرة تظهر بنيتها الاسفنجية هنا. مساحتها تعادل نحو ثلاثة اضعاف مساحة التجويف الذي تجلس فيه، ولهذا صار الكتف اوسع مفاصل الجسم حركة واكثرها خلعا في الوقت نفسه.',
          en: 'A large bony ball with its spongy interior on show. Its surface is about three times that of the socket it sits in, which is why the shoulder became the widest-moving joint in the body and, at the same time, the most often dislocated.'
        }
      },
      {
        ar: 'الدهن تحت الجلد', en: 'Subcutaneous fat', x: 14, y: 62, side: 'left',
        desc: {
          ar: 'شريط دهني اصفر بين الجلد والعضلة الدالية. يعزل ويحشي، وسمكه هو الذي يحدد كم يظهر شكل العضلة من الخارج.',
          en: 'A yellow band of fat between the skin and the deltoid. It insulates and pads, and its thickness is what decides how much of the muscle’s shape shows from outside.'
        }
      },
      {
        ar: 'جسم عظم العضد', en: 'Shaft of the humerus', x: 33, y: 80, side: 'left',
        desc: {
          ar: 'الجزء الانبوبي من عظم الذراع، جداره صلب متين وداخله نخاع. تنغرز فيه العضلة الدالية في منتصفه تقريبا، وهناك بالذات ينكسر كثيرا عند السقوط.',
          en: 'The tubular part of the arm bone, its wall dense and strong with marrow inside. The deltoid inserts at roughly its midpoint, and that is exactly where it commonly breaks in a fall.'
        }
      },
      {
        ar: 'الأخرم', en: 'Acromion', x: 52, y: 12, side: 'right',
        desc: {
          ar: 'نتوء عظمي مسطح من لوح الكتف يمتد فوق المفصل كالمظلة. يحمي الراس من الاعلى، لكن شكله المنحني عند بعض الناس يضيق المسافة تحته فينحصر وتر الكفة معه في كل رفعة.',
          en: 'A flat bony process of the scapula stretching over the joint like an awning. It protects the head from above, but in some people its hooked shape narrows the space beneath it so the cuff tendon is pinched with every lift.'
        }
      },
      {
        ar: 'الغضروف المفصلي لرأس العضد', en: 'Articular cartilage of the head', x: 54, y: 42, side: 'right',
        desc: {
          ar: 'الطبقة البيضاء اللامعة التي تكسو الكرة العظمية. املس من الجليد ولا اعصاب فيه ولا اوعية، ولهذا لا يوجع بذاته ولا يلتئم اذا تاكل، ومن هنا صارت الخشونة مرضا لا رجعة فيه.',
          en: 'The glossy white layer covering the bony ball. It is smoother than ice and holds neither nerves nor vessels, so it cannot hurt of itself and cannot heal once worn away, which is what makes arthritis a one-way road.'
        }
      },
      {
        ar: 'الغضروف الحُقّي (التجويف)', en: 'Glenoid cavity and its cartilage', x: 60, y: 50, side: 'right',
        desc: {
          ar: 'التجويف الضحل في لوح الكتف الذي يستقبل راس العضد، وهو مكسو بغضروف مزرق. ضحالته هي ثمن الحركة الواسعة، ولذلك تحيط بحافته شفة ليفية تعمقه قليلا وتزيد ثبات المفصل.',
          en: 'The shallow hollow of the scapula that receives the head, lined with bluish cartilage. Its shallowness is the price of wide movement, so a fibrous rim runs around its edge, deepening it a little and adding stability.'
        }
      },
      {
        ar: 'عظم لوح الكتف', en: 'Scapula', x: 74, y: 58, side: 'right', go: 'skeleton',
        desc: {
          ar: 'عظم مثلث عريض ينزلق على قفص الصدر ولا يتصل بالهيكل الا عبر الترقوة. هذا الانزلاق هو نصف حركة الكتف: كل درجتين في المفصل يقابلهما دوران درجة في اللوح، ولولاه لما استطعنا رفع الذراع فوق الراس.',
          en: 'A broad triangular bone gliding on the rib cage, joined to the skeleton only through the collarbone. That gliding is half of all shoulder movement: for every two degrees at the joint the scapula rotates one, and without it we could not raise the arm above the head.'
        }
      },
      {
        ar: 'المحفظة المفصلية', en: 'Joint capsule', x: 58, y: 68, side: 'right',
        desc: {
          ar: 'غلاف ليفي يحيط بالمفصل ويبطن من داخله بغشاء زليلي يفرز سائل التزليق. محفظة الكتف فضفاضة عمدا لتسمح بالمدى الواسع، وتليفها وانكماشها هو ما يسمى الكتف المتجمد.',
          en: 'A fibrous envelope surrounding the joint, lined inside by a synovial membrane that secretes the lubricating fluid. The shoulder capsule is deliberately slack to allow its wide range, and when it thickens and shrinks the result is what we call a frozen shoulder.'
        }
      },
      {
        ar: 'عضلات حول المفصل', en: 'Muscles around the joint', x: 70, y: 86, side: 'right', go: 'muscles',
        desc: {
          ar: 'كتل عضلية تمتد من لوح الكتف الى العضد. لان التجويف ضحل والاربطة قليلة فان ثبات الكتف يعتمد على العضلات لا على العظم، ولهذا يقوم علاج الكتف الطبيعي على تقويتها قبل اي شيء اخر.',
          en: 'Muscle masses running from the scapula to the humerus. Because the socket is shallow and the ligaments few, the shoulder’s stability rests on muscle rather than bone, which is why shoulder physiotherapy begins with strengthening them before anything else.'
        }
      }
    ],
    desc: {
      ar: 'مقطعٌ إكليلي في الكتف. رأس عظم العضد كرةٌ كبيرة تجلس في حُقٍّ ضحلٍ من لوح الكتف — أشبه بكرة غولف على حاملها منها بكرةٍ في وعاء — ومساحته نحو ثلاثة أضعاف مساحة التجويف. هذه العلاقة هي سرّ الكتف كلّه: أوسع مفاصل الجسم مدىً وأقلّها ثباتاً. ولذلك يُحيط الحُقَّ شفةٌ ليفية تُعمّقه، وتلتفّ على الرأس أوتار الكفّة المديرة تشدّه إلى مكانه، وتفصل بينها وبين الأخرم فوقها وسادةُ الجراب. والمحفظة المفصلية فضفاضة عمداً كي تسمح بالحركة.',
      en: 'A coronal section through the shoulder. The head of the humerus is a large ball sitting in a shallow socket on the scapula, more like a golf ball on its tee than a ball in a cup, its surface some three times that of the socket. That relationship is the whole secret of the shoulder: the widest-ranging joint in the body and the least stable. So a fibrous rim deepens the socket, the rotator cuff tendons wrap the head and hold it in place, and a bursa cushions them from the acromion above. The capsule is deliberately slack to permit the movement.'
    },
    func: {
      ar: 'وضع اليد في أي نقطة من الفراغ حول الجسم. الكتف لا يتحرّك وحده بل ضمن منظومة من أربعة مفاصل تعمل معاً: الكرة في الحُقّ، ولوح الكتف المنزلق على القفص الصدري، والترقوة عند طرفيها. رفع الذراع فوق الرأس ليس حركة مفصل واحد بل تناغم بينها جميعاً. وأوتار الكفّة المديرة تعمل كأسلاك شدٍّ متعاكسة تُبقي الرأس مركزيّاً في التجويف بينما تدفعه العضلة الدالية إلى الأعلى — ولولا هذا التوازن لصعد الرأس واصطدم بالأخرم في كل رفعة.',
      en: 'Placing the hand at any point in the space around the body. The shoulder does not move alone but as a system of four joints working together: the ball in the socket, the scapula gliding on the rib cage, and the collarbone at each of its ends. Raising the arm overhead is not the act of one joint but a choreography among them all. The rotator cuff tendons work as opposing guy-wires keeping the head centred in the socket while the deltoid drives it upward; without that balance the head would ride up and strike the acromion on every lift.'
    },
    location: { ar: 'بين رأس عظم العضد والحُقّ في لوح الكتف، أعلى الذراع من جهة الجذع', en: 'Between the head of the humerus and the glenoid of the scapula, at the top of the arm where it meets the trunk' },
    size: { ar: 'مساحة رأس العضد نحو ٣ أضعاف مساحة الحُقّ · مدى الحركة يتجاوز ١٨٠ درجة في الرفع، وهو الأوسع في الجسم', en: 'The humeral head is about three times the area of the socket; the range of elevation exceeds 180 degrees, the widest in the body' },
    short: { ar: 'كرةٌ كبيرة على صحنٍ صغير: أوسع المفاصل وأقلّها ثباتاً', en: 'A big ball on a small saucer: the widest joint and the least stable' },
    parts: [
      { ar: 'رأس العضد والحُقّ والشفة الحُقّية', en: 'The humeral head, the glenoid and its labrum' },
      { ar: 'أوتار الكفّة المديرة', en: 'The rotator cuff tendons' },
      { ar: 'الجراب تحت الأخرمي', en: 'The subacromial bursa' },
      { ar: 'المحفظة المفصلية والعضلة الدالية', en: 'The joint capsule and the deltoid' }
    ],
    diseases: [
      { name: { ar: 'انحشار الكتف والتهاب الجراب', en: 'Impingement and bursitis' }, desc: { ar: 'ضيق المسافة تحت الأخرم فينحصر الوتر والجراب: ألم عند رفع الذراع إلى الجانب وصعوبة النوم على الكتف', en: 'The space below the acromion narrows and pinches the tendon and bursa: pain on raising the arm sideways and difficulty sleeping on that shoulder' } },
      { name: { ar: 'تمزّق الكفّة المديرة', en: 'Rotator cuff tear' }, desc: { ar: 'انقطاع جزئي أو كامل في وتر الكفّة، فيضعف رفع الذراع وقد يعجز المصاب عن تثبيتها', en: 'A partial or complete rupture of a cuff tendon, weakening elevation until the arm cannot be held up' } },
      { name: { ar: 'خلع الكتف', en: 'Shoulder dislocation' }, desc: { ar: 'خروج الرأس من الحُقّ الضحل — غالباً إلى الأمام — وقد يمزّق الشفة الحُقّية فتتكرّر الخلعات', en: 'The head leaves the shallow socket, usually forwards; it may tear the labrum, after which dislocations recur' } },
      { name: { ar: 'الكتف المتجمّد', en: 'Frozen shoulder' }, desc: { ar: 'تليّف المحفظة وانكماشها فيتقيّد المدى تدريجياً في كل الاتجاهات، ويتحسّن ببطء على أشهر', en: 'The capsule thickens and contracts, so range is progressively lost in every direction and recovers only slowly over months' } },
      { name: { ar: 'خشونة مفصل الكتف', en: 'Shoulder osteoarthritis' }, desc: { ar: 'تآكل الغضروف المفصلي فيحتكّ العظم بالعظم، ويظهر ألم وطقطقة ونقص في المدى', en: 'The articular cartilage wears away so bone rubs on bone, bringing pain, grinding and a shrinking range' } }
    ]
  }
]);

/* ---------- الفقرة والقرص بين الفقرات (مقطع منتصفي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'vertebra-disc', type: 'organ', system: 'skeleton',
    name: { ar: 'الفقرة والقرص بين الفقرات', en: 'Vertebra and intervertebral disc' },
    img: 'img/vertebra-disc.png', imgBack: 'img/vertebra-disc-back.png', thumb: 'img/thumb-vertebra-disc.png',
    labels: [
      {
        ar: 'جسم الفقرة (العلوي)', en: 'Vertebral body (upper)', x: 28, y: 22, side: 'left', go: 'skeleton',
        desc: {
          ar: 'الكتلة العظمية الاسطوانية في مقدمة الفقرة، وهي حاملة الثقل. تظهر هنا بنيتها الاسفنجية: شبكة من الحواجز العظمية الدقيقة مرتبة على خطوط الشد والضغط، فتعطي اقصى متانة باقل وزن.',
          en: 'The cylindrical bony block at the front of the vertebra, the weight-bearer. Its spongy interior is on show here: a lattice of fine bony struts laid along the lines of tension and compression, giving the greatest strength for the least weight.'
        }
      },
      {
        ar: 'الحلقة الليفية', en: 'Annulus fibrosus', x: 13, y: 42, side: 'left',
        desc: {
          ar: 'حلقات ليفية متحدة المركز تحيط بنواة القرص، والياف كل حلقة مائلة عكس الحلقة التي تليها كاطارات السيارة. هذا التقاطع يقاوم الالتواء واللف، وتمزقه هو الباب الذي تخرج منه النواة في الانزلاق الغضروفي.',
          en: 'Concentric fibrous rings enclosing the disc’s core, the fibres of each ring slanting opposite to the next like the plies of a tyre. That crossing resists twisting, and a tear in it is the doorway through which the core escapes in a slipped disc.'
        }
      },
      {
        ar: 'النواة اللبّية', en: 'Nucleus pulposus', x: 33, y: 50, side: 'left',
        desc: {
          ar: 'قلب القرص: هلام شفاف يحتوي على نحو ٨٠٪ ماء ويتصرف كوسادة مائية غير قابلة للانضغاط. يتسرب منها الماء اثناء النهار فينقص طول الانسان نحو سنتيمترين، ويعود اليها ليلا وهو نائم.',
          en: 'The heart of the disc: a clear gel about eighty per cent water behaving as an incompressible water cushion. Water seeps out of it during the day, so a person loses about two centimetres of height, and returns to it overnight during sleep.'
        }
      },
      {
        ar: 'جسم الفقرة (السفلي)', en: 'Vertebral body (lower)', x: 28, y: 72, side: 'left',
        desc: {
          ar: 'الفقرة التالية في العمود. كل فقرة قطنية اضخم من التي فوقها لان الثقل يتراكم كلما نزلنا، ولهذا كانت الفقرات القطنية الاخيرة اكبر فقرات العمود واكثرها تعرضا للاجهاد.',
          en: 'The next vertebra down the column. Each lumbar vertebra is bulkier than the one above because the load accumulates as we descend, which is why the lowest lumbar vertebrae are the largest in the spine and the most heavily stressed.'
        }
      },
      {
        ar: 'القوس الفقري', en: 'Vertebral arch', x: 70, y: 22, side: 'right',
        desc: {
          ar: 'الحلقة العظمية خلف الجسم، وهي التي تصنع مع الجسم قناة يمر فيها النخاع الشوكي. تراص هذي الاقواس فوق بعضها يجعل القناة انبوبا عظميا متصلا من الجمجمة الى العجز.',
          en: 'The bony ring behind the body which, together with it, encloses the canal through which the spinal cord runs. Stacked one on another, these arches turn the canal into a continuous bony tube from the skull to the sacrum.'
        }
      },
      {
        ar: 'النتوء الشوكي', en: 'Spinous process', x: 87, y: 28, side: 'right',
        desc: {
          ar: 'النتوء الخلفي الذي نحسه بارزا تحت الجلد حين ننحني. هو ذراع رافعة تشد عليها عضلات الظهر والاربطة، وكلما طال زادت قوة العضلة على تقويم العمود.',
          en: 'The backward projection we feel under the skin when we bend forward. It is a lever arm for the back muscles and ligaments to pull on, and the longer it is the more power a muscle gains to straighten the spine.'
        }
      },
      {
        ar: 'النخاع الشوكي', en: 'Spinal cord', x: 54, y: 34, side: 'right', go: 'spinal-cord',
        desc: {
          ar: 'الحزمة العصبية الصفراء داخل القناة العظمية، تراها هنا خيوطا متوازية. هي الطريق الوحيد بين المخ والجسم كله، ولذلك احيطت بعظم من كل جانب وبثلاثة اغشية وسائل يعوم فيها.',
          en: 'The yellow nerve bundle inside the bony canal, seen here as parallel strands. It is the only road between the brain and the rest of the body, and for that reason it is walled in bone on every side, wrapped in three membranes and floated in fluid.'
        }
      },
      {
        ar: 'الرباط الطولي الخلفي', en: 'Posterior longitudinal ligament', x: 46, y: 42, side: 'right',
        desc: {
          ar: 'شريط ليفي يجري على السطح الخلفي لاجسام الفقرات والاقراص من الجمجمة الى العجز. يشد الاقراص من الخلف ويمنعها من البروز مباشرة نحو النخاع، ولانه ارفع عند الاطراف تخرج معظم الانزلاقات مائلة الى الجانب.',
          en: 'A fibrous band running along the back surface of the vertebral bodies and discs from skull to sacrum. It ties the discs from behind and stops them bulging straight at the cord, and because it is thinner at its edges most herniations escape off to one side.'
        }
      },
      {
        ar: 'جذر العصب', en: 'Nerve root', x: 60, y: 49, side: 'right',
        desc: {
          ar: 'العصب الاصفر الخارج من الثقبة بين كل فقرتين، متجها الى جزء محدد من الجسم. الانزلاق الغضروفي يضغط هذا الجذر بالذات، ولهذا يشع الالم الى الساق كلها لا الى الظهر وحده.',
          en: 'The yellow nerve leaving through the opening between each pair of vertebrae on its way to one particular part of the body. It is precisely this root that a slipped disc presses, which is why the pain radiates down the whole leg rather than staying in the back.'
        }
      },
      {
        ar: 'المفصل الوجيهي', en: 'Facet joint', x: 63, y: 58, side: 'right',
        desc: {
          ar: 'مفصل حقيقي بغضروف ومحفظة وسائل بين نتوءي فقرتين متجاورتين. اتجاه سطحه هو الذي يقرر ما يسمح به من حركة: في القطن يمنع اللف ويسمح بالانحناء، وفي الرقبة يسمح بالالتفات.',
          en: 'A true joint with cartilage, a capsule and fluid, between the processes of two neighbouring vertebrae. The orientation of its surfaces decides what movement is allowed: in the lower back it blocks twisting and permits bending, while in the neck it permits turning.'
        }
      },
      {
        ar: 'النتوء الشوكي للفقرة السفلى', en: 'Spinous process of the lower vertebra', x: 84, y: 72, side: 'right',
        desc: {
          ar: 'نتوء الفقرة التالية، وبينه وبين الذي فوقه رباط يشد الاثنين. المسافة بين النتوءين هي المدخل الذي تدخل منه ابرة البنج النصفي وسحب السائل النخاعي.',
          en: 'The process of the next vertebra down, with a ligament tying it to the one above. The gap between two such processes is the doorway through which the needle passes for a spinal anaesthetic or a lumbar puncture.'
        }
      }
    ],
    desc: {
      ar: 'فقرتان قطنيّتان مقطوعتان في المنتصف وبينهما القرص. كل فقرة جزآن: جسمٌ أمامي ضخم يحمل الثقل، وقوسٌ خلفي يحمي النخاع الشوكي وينتهي بنتوءٍ شوكيّ ونتوءات مفصلية. والقرص وسادةٌ حيّة من طبقتين: نواةٌ هلاميّة في القلب أكثرها ماء، تحيط بها حلقاتٌ ليفية متعاكسة الاتجاه كإطار السيارة. حين نحمل ثقلاً تنضغط النواة فتدفع الضغط في كل الاتجاهات على الحلقات فتشدّها — وهكذا يتحوّل الضغط الرأسي إلى شدٍّ دائري توزّعه الحلقات، وهي حيلةٌ هندسية بالغة الذكاء.',
      en: 'Two lumbar vertebrae cut down the midline with the disc between them. Each vertebra has two parts: a bulky body in front that carries the load, and an arch behind that shelters the spinal cord and ends in a spinous process and articular processes. The disc is a living cushion of two layers: a gel core, mostly water, ringed by fibrous bands whose fibres run opposite ways like the plies of a tyre. When we lift, the core is squeezed and pushes outward in every direction against those rings, putting them under tension. So a vertical load is converted into a circular pull the rings share out, an exceptionally clever piece of engineering.'
    },
    func: {
      ar: 'الجمع بين ثلاثة أمور يصعب جمعها: حمل الثقل، والسماح بالحركة، وحماية النخاع الشوكي. الحركة بين فقرتين صغيرة جداً، لكنّ العمود ثلاثاً وثلاثين فقرة، فمجموع هذه الحركات الصغيرة يجعل الجذع ينحني ويلتوي ويميل. والقرص يمتصّ الصدمات فلا تصل رجّة كل خطوة إلى الجمجمة. ومن غرائبه أنّه أكبر نسيج في الجسم بلا أوعية دموية: يتغذّى بالانتشار من عظم الفقرة عبر الصفيحة الغضروفية، والحركة نفسها هي مضخّته — ولهذا يضرّ الجلوس الطويل الظهرَ أكثر من المشي.',
      en: 'Combining three things that are hard to combine: carrying load, allowing movement, and protecting the spinal cord. The movement between any two vertebrae is tiny, but the column has thirty-three of them, so the sum of those small movements lets the trunk bend, twist and lean. The disc absorbs shock so the jolt of every step never reaches the skull. One of its oddities is that it is the largest tissue in the body without a blood supply: it feeds by diffusion from the vertebral bone through the cartilage endplate, and movement itself is its pump, which is why long sitting harms the back more than walking does.'
    },
    location: { ar: 'الفقرتان القطنيّتان في أسفل الظهر، وبين كل فقرتين متجاورتين قرصٌ من الرقبة إلى العجز', en: 'Two lumbar vertebrae in the lower back; a disc lies between every pair of neighbouring vertebrae from the neck to the sacrum' },
    size: { ar: '٣٣ فقرة و٢٣ قرصاً في العمود · سماكة القرص القطني نحو ١ سم، وتشكّل الأقراص نحو ربع طول العمود الفقري كلّه', en: '33 vertebrae and 23 discs in the column; a lumbar disc is about 1 cm thick, and the discs together make up roughly a quarter of the spine’s whole length' },
    short: { ar: 'وسادةٌ مائية بين عظمين، تنكمش نهاراً وتمتلئ ليلاً', en: 'A water cushion between two bones, shrinking by day and refilling by night' },
    parts: [
      { ar: 'جسم الفقرة وبنيته الإسفنجية', en: 'The vertebral body and its spongy bone' },
      { ar: 'النواة اللبّية والحلقة الليفية', en: 'The nucleus pulposus and the annulus fibrosus' },
      { ar: 'القناة الشوكية والنخاع وجذور الأعصاب', en: 'The spinal canal, the cord and the nerve roots' },
      { ar: 'المفاصل الوجيهية والنتوءات', en: 'The facet joints and the processes' }
    ],
    diseases: [
      { name: { ar: 'الانزلاق الغضروفي', en: 'Herniated disc' }, desc: { ar: 'تمزّق الحلقة الليفية فتبرز النواة وتضغط جذر العصب، فيشعّ الألم من الظهر إلى الساق مع خدر وضعف', en: 'The annulus tears, the nucleus bulges out and presses a nerve root, so pain shoots from the back down the leg with numbness and weakness' } },
      { name: { ar: 'تنكّس القرص', en: 'Disc degeneration' }, desc: { ar: 'فقدان القرص ماءه مع العمر فيرقّ وينقص ارتفاعه، فتتقارب الفقرات ويقلّ امتصاص الصدمات', en: 'The disc loses water with age, thins and loses height, so the vertebrae close in and shock absorption fades' } },
      { name: { ar: 'ضيق القناة الشوكية', en: 'Spinal stenosis' }, desc: { ar: 'تضيّق القناة بنتوءات عظمية أو أربطة متثخّنة، فيؤلم المشي ويرتاح المصاب إذا انحنى أو جلس', en: 'Bony spurs or thickened ligaments narrow the canal, so walking becomes painful and bending or sitting brings relief' } },
      { name: { ar: 'خشونة المفاصل الوجيهية', en: 'Facet joint arthritis' }, desc: { ar: 'تآكل غضروف المفاصل الخلفية فيؤلم الظهر عند الانحناء للخلف وبعد الوقوف الطويل', en: 'The cartilage of the posterior joints wears away, giving back pain on leaning backwards and after long standing' } },
      { name: { ar: 'هشاشة العظام وكسر الفقرة', en: 'Osteoporosis and vertebral fracture' }, desc: { ar: 'ضعف البنية الإسفنجية فينضغط جسم الفقرة تحت وزن الجسم نفسه، فيقصر الطول ويتحدّب الظهر', en: 'The spongy lattice weakens until the vertebral body collapses under the body’s own weight, so height is lost and the back stoops' } }
    ]
  }
]);

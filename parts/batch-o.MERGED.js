/* ============================================================
   batch-o.js — دفعة ع من عناصر «جسم الإنسان»
   صفيحة النمو · الأسنان اللبنية والدائمة · جمجمة الرضيع · الحالب
   يُدمج لاحقاً في data.js — لا يُعدَّل data.js من هنا.
   ============================================================ */

ORGANS = ORGANS.concat([

  {
    id: 'growth-plate', type: 'organ', system: 'skeleton',
    name: { ar: 'صفيحة النمو', en: 'The growth plate' },
    img: 'img/growth-plate.png', imgBack: 'img/growth-plate-back.png', thumb: 'img/thumb-growth-plate.png',
    labels: [
      {
        ar: 'الغضروف المفصلي', en: 'Articular cartilage', x: 22, y: 5, side: 'left',
        desc: {
          ar: 'الغطاء الابيض اللامع على طرف العظم حيث يلتقي بالعظم المجاور. هذا غضروف اخر غير صفيحة النمو تماما: مهمته الانزلاق لا الاطالة، ولا يشارك في زيادة الطول.',
          en: 'The glossy white cap on the end of the bone where it meets its neighbour. This is a different cartilage from the growth plate altogether: its job is gliding, not lengthening, and it plays no part in adding height.'
        }
      },
      {
        ar: 'المشاش (طرف العظم)', en: 'Epiphysis (the bone end)', x: 32, y: 13, side: 'left',
        go: 'bone-inside',
        desc: {
          ar: 'راس العظم فوق الصفيحة، وتراه هنا شبكة اسفنجية مليئة بالفراغات والاوعية الحمراء. هذا الطرف هو الذي تدفعه الصفيحة بعيدا كلما نما الطفل، فيزداد طول العظم من طرفيه لا من وسطه.',
          en: 'The head of the bone above the plate, seen here as a spongy mesh full of spaces and red vessels. This end is what the plate pushes away as the child grows, so the bone lengthens from its ends and not from its middle.'
        }
      },
      {
        ar: 'منطقة الغضروف الساكن', en: 'Resting zone', x: 32, y: 25, side: 'left',
        desc: {
          ar: 'الشريط الشاحب الاعلى من الصفيحة، وخلاياه متناثرة هادئة لا تنقسم كثيرا. هذه هي مخزن الصفيحة: منها تتجدد الخلايا التي ستنقسم تحتها، ولذلك اذا تلفت هذه الطبقة توقف النمو كله.',
          en: 'The pale uppermost band of the plate, its cells scattered and quiet and dividing little. This is the plate’s reservoir: it renews the cells that will divide below it, which is why damage to this layer stops all further growth.'
        }
      },
      {
        ar: 'منطقة التكاثر (أعمدة الخلايا)', en: 'Proliferative zone (cell columns)', x: 32, y: 32, side: 'left',
        go: 'mitosis',
        desc: {
          ar: 'انظر كيف اصطفت الخلايا في اعمدة رأسية منتظمة كاعمدة النقود. كل خلية تنقسم فتدفع ما فوقها الى اعلى، وهذا الانقسام المرتب في اتجاه واحد هو المحرك الحقيقي للطول.',
          en: 'Notice how the cells line up in neat vertical columns like stacks of coins. Each cell divides and shoves the one above it upward, and this orderly one-way division is the true engine of height.'
        }
      },
      {
        ar: 'منطقة التضخّم', en: 'Hypertrophic zone', x: 33, y: 41, side: 'left',
        desc: {
          ar: 'الخلايا الكبيرة اللؤلؤية في اسفل الصفيحة. الخلية هنا تنتفخ حتى تبلغ خمسة اضعاف حجمها ثم تموت، وهذا الانتفاخ وحده يصنع نحو نصف الطول المكتسب.',
          en: 'The large pearly cells at the bottom of the plate. Here each cell swells to about five times its size and then dies, and that swelling alone accounts for roughly half the height gained.'
        }
      },
      {
        ar: 'منطقة التكلّس والعظم الجديد', en: 'Zone of calcification and new bone', x: 30, y: 50, side: 'left',
        desc: {
          ar: 'حيث يتحول الغضروف الميت الى عظم: يتشرب بالكالسيوم فيتصلب، ثم تزحف عليه خلايا بناء العظم فتكسوه. الغضروف هنا قالب مؤقت يذوب ليحل العظم مكانه.',
          en: 'Where the dead cartilage turns into bone: it soaks up calcium and hardens, then bone-building cells creep over it and coat it. The cartilage here is a temporary mould that dissolves so that bone can take its place.'
        }
      },
      {
        ar: 'الكردوس', en: 'Metaphysis', x: 24, y: 57, side: 'left',
        desc: {
          ar: 'المنطقة الواسعة تحت الصفيحة، وتراها شبكة عظمية طرية تخترقها اوعية حمراء كثيرة. هي اطرى ما في العظم وارواه بالدم، ولهذا هي اكثر المواضع اصابة بالتهاب العظم والنقي عند الاطفال.',
          en: 'The flared region beneath the plate, seen as a soft bony mesh threaded with many red vessels. It is the softest and best supplied part of the bone, which is why it is the commonest site of bone infection in children.'
        }
      },
      {
        ar: 'السمحاق', en: 'Periosteum', x: 19, y: 64, side: 'left',
        desc: {
          ar: 'الغلاف الرقيق اللامع الذي يكسو العظم من الخارج. فيه اعصاب كثيرة فهو مصدر الالم عند الكسر، وفيه خلايا تبني العظم في العرض بينما تبنيه الصفيحة في الطول.',
          en: 'The thin glossy sheath wrapping the bone from outside. It is richly supplied with nerves, so it is the source of pain in a fracture, and it holds cells that build the bone in width while the plate builds it in length.'
        }
      },
      {
        ar: 'العظم القشري (المتين)', en: 'Cortical (compact) bone', x: 23, y: 73, side: 'left',
        go: 'bone-inside',
        desc: {
          ar: 'الجدار الكثيف الصلب لجسم العظم. تراه هنا سميكا خاليا من الفراغات، وهو الذي يحمل وزن الجسم ويقاوم الالتواء، وينتقل تدريجيا الى النسيج الاسفنجي كلما اقتربنا من الطرف.',
          en: 'The dense hard wall of the shaft. Seen here thick and free of spaces, it is what carries the body’s weight and resists twisting, and it grades gradually into spongy tissue as we near the end of the bone.'
        }
      },
      {
        ar: 'تجويف النقي (النقي الأصفر)', en: 'Marrow cavity (yellow marrow)', x: 28, y: 80, side: 'left',
        go: 'bone-inside',
        desc: {
          ar: 'الفراغ في وسط جسم العظم، وهو مملوء بنقي دهني اصفر. يخفف هذا التجويف وزن العظم دون ان يضعفه، تماما كما يفعل الانبوب المجوف في الهندسة.',
          en: 'The hollow at the centre of the shaft, filled with fatty yellow marrow. This cavity lightens the bone without weakening it, exactly as a hollow tube does in engineering.'
        }
      },
      {
        ar: 'الأوعية المغذّية', en: 'Nutrient vessels', x: 32, y: 90, side: 'left',
        go: 'vessel-types',
        desc: {
          ar: 'الشريان الاحمر والوريد الازرق اللذان يدخلان جسم العظم من ثقب في جداره ثم يتفرعان صاعدين. الغضروف نفسه بلا اوعية ويتغذى بالانتشار، اما العظم الجديد تحته فيحتاج هذا الدم ليتكون.',
          en: 'The red artery and blue vein that enter the shaft through a hole in its wall and branch upward. The cartilage itself has no vessels and feeds by diffusion, but the new bone beneath it needs this blood in order to form.'
        }
      },
      {
        ar: 'عظم البالغ (بعد اكتمال النمو)', en: 'Adult bone (growth complete)', x: 73, y: 20, side: 'right',
        desc: {
          ar: 'العظم الاصغر على اليمين هو نفس العظم بعد ان اكتمل نموه. لاحظ ان طرفه صار متصلا بجسمه اتصالا كاملا، ولم يبق فيه ذلك الشريط الغضروفي العريض.',
          en: 'The smaller bone on the right is the same bone once its growth is finished. Notice that its end is now fully continuous with its shaft, with no trace of that wide cartilage band.'
        }
      },
      {
        ar: 'المشاش الملتحم', en: 'Fused epiphysis', x: 80, y: 33, side: 'right',
        desc: {
          ar: 'نسيج اسفنجي واحد متصل يمتد من راس العظم الى جسمه بلا فاصل. في الطفل كان هذا الطريق مقطوعا بشريط غضروفي، اما الان فقد صار عظما متصلا فلا مجال لمزيد من الطول.',
          en: 'A single continuous spongy tissue running from the head of the bone into its shaft with no break. In the child this path was cut by a band of cartilage; now it is unbroken bone, so no further length is possible.'
        }
      },
      {
        ar: 'خطّ الصفيحة المغلقة', en: 'The closed plate line', x: 78, y: 46, side: 'right',
        desc: {
          ar: 'كل ما بقي من صفيحة النمو: خط باهت رفيع يعبر العظم. حين ترتفع هرمونات الجنس في اخر المراهقة تستهلك الصفيحة نفسها وتتعظم، ومن تلك اللحظة يتوقف الطول الى الابد. ولهذا قد يقصر البلوغ المبكر الطول النهائي لان الصفيحة تغلق قبل اوانها.',
          en: 'All that remains of the growth plate: a faint thin line crossing the bone. When the sex hormones rise in late adolescence the plate uses itself up and turns to bone, and from that moment height stops for good. This is why early puberty can shorten final height, because the plate closes before its time.'
        }
      }
    ],
    desc: {
      ar: 'صفيحة النمو شريط من الغضروف يقع قرب طرفي العظم الطويل، وهي آلة الطول في جسم الطفل. العظم لا يتمدّد كالمطّاط: الغضروف يتكاثر عند الصفيحة فيدفع طرف العظم بعيداً عن وسطه، ثم يتكلّس ما خلفه ويتحوّل إلى عظم حقيقي. فالطول إذاً زيادة تُضاف من الطرفين لا انتفاخ من المنتصف. وترى الصفيحة في الصورة على اليسار شريطاً شاحباً عريضاً، خلاياه مرصوصة في أعمدة منتظمة كأعمدة النقود، وتحته منطقة يتكلّس فيها الغضروف ويصير عظماً جديداً. وعلى اليمين العظم نفسه بعد اكتمال النمو: الصفيحة أُغلقت وصارت خطاً باهتاً لا أكثر.',
      en: 'The growth plate is a band of cartilage near the ends of a long bone, and it is the height machine of a child’s body. Bone does not stretch like rubber: cartilage multiplies at the plate and pushes the end of the bone away from its middle, then what is left behind calcifies and turns into real bone. Height is therefore length added at the ends, not swelling in the middle. In the picture you see the plate on the left as a wide pale band, its cells stacked in orderly columns like piles of coins, with a zone beneath it where the cartilage calcifies into new bone. On the right is the same bone after growth is complete: the plate has closed into nothing but a faint line.'
    },
    func: {
      ar: 'إطالة العظم. تعمل الصفيحة تحت أوامر هرمون النمو من الغدة النخامية وهرمون الغدة الدرقية والتغذية الجيدة، فتتكاثر خلاياها وتنتفخ ثم تموت ليحلّ العظم محلّها. وفي نهاية المراهقة ترتفع هرمونات الجنس فتُغلق الصفيحة وتوقف الطول نهائياً — ولهذا قد يُقصّر البلوغ المبكّر الطولَ النهائي لأنه يُغلق الصفيحة قبل أوانها. وللصفيحة أثر عملي مهم: كسور الأطفال التي تمرّ عبرها خطيرة، لأن تلفها يوقف نمو ذلك العظم فيقصر أو يعوجّ بمرور السنوات، ولذلك تُصنَّف كسور الأطفال تصنيفاً خاصاً بها.',
      en: 'Lengthening the bone. The plate works under orders from growth hormone from the pituitary, from thyroid hormone and from good nutrition: its cells multiply, swell and die so that bone can replace them. At the end of adolescence the sex hormones rise, close the plate and stop height for good — which is why early puberty can shorten final height, closing the plate before its time. The plate also has an important practical consequence: children’s fractures that pass through it are serious, because damaging it stops that bone growing, so over the years the limb ends up short or crooked. For this reason children’s fractures are given a classification of their own.'
    },
    location: { ar: 'قرب طرفَي كل عظم طويل، بين المشاش وجسم العظم؛ وأنشط صفائح الجسم عند الركبة', en: 'Near both ends of every long bone, between the epiphysis and the shaft; the busiest plates in the body are at the knee' },
    size: { ar: 'سمكها بضعة مليمترات فقط، وتُغلق بين ١٤ و١٦ سنة عند البنات وبين ١٦ و١٨ عند الأولاد', en: 'Only a few millimetres thick; it closes between 14 and 16 years in girls and 16 and 18 in boys' },
    short: { ar: 'شريط غضروف رفيع هو الذي يقرّر طولك', en: 'A thin band of cartilage that decides how tall you will be' },
    parts: [
      { ar: 'منطقة الغضروف الساكن', en: 'The resting zone' },
      { ar: 'منطقة التكاثر وأعمدة الخلايا', en: 'The proliferative zone and its cell columns' },
      { ar: 'منطقة التضخّم', en: 'The hypertrophic zone' },
      { ar: 'منطقة التكلّس والكردوس', en: 'The zone of calcification and the metaphysis' }
    ],
    diseases: [
      { name: { ar: 'كسر صفيحة النمو (سالتر-هاريس)', en: 'Growth plate fracture (Salter-Harris)' }, desc: { ar: 'كسر يمرّ في الصفيحة أو عبرها عند طفل؛ إن تلفت الصفيحة توقّف نمو العظم في تلك الجهة فقصر الطرف أو انحرف', en: 'A fracture running along or through the plate in a child; if the plate is damaged the bone stops growing on that side, so the limb ends up short or angled' } },
      { name: { ar: 'القزامة الغضروفية', en: 'Achondroplasia' }, desc: { ar: 'خلل وراثي يعطّل تكاثر الغضروف في الصفيحة فتقصر عظام الأطراف بينما يبقى الجذع والرأس قريبين من الطبيعي', en: 'A genetic fault that blocks cartilage multiplication in the plate, so the limb bones stay short while the trunk and head remain near normal' } },
      { name: { ar: 'قصور هرمون النمو', en: 'Growth hormone deficiency' }, desc: { ar: 'نقص هرمون النخامية فتعمل الصفيحة ببطء ويتأخّر الطول عن أقران الطفل، ويُعالَج بالهرمون قبل أن تُغلق الصفيحة', en: 'A shortage of the pituitary hormone, so the plate works slowly and the child falls behind in height; it is treated with the hormone before the plate closes' } },
      { name: { ar: 'انزلاق مشاش رأس الفخذ', en: 'Slipped capital femoral epiphysis' }, desc: { ar: 'ينزلق رأس عظم الفخذ عن جسمه عند الصفيحة في مراهق، فيؤلم الورك أو الركبة ويعرج المشي، ويحتاج تثبيتاً جراحياً', en: 'The head of the femur slips off its shaft at the plate in a teenager, causing hip or knee pain and a limp, and needing surgical fixation' } },
      { name: { ar: 'الكساح (لين العظام عند الأطفال)', en: 'Rickets' }, desc: { ar: 'نقص فيتامين د أو الكالسيوم فلا يتكلّس الغضروف عند الصفيحة، فتتّسع الصفيحة وتتضخّم نهايات العظام وتنحني الساقان', en: 'A lack of vitamin D or calcium so the cartilage at the plate never calcifies; the plate widens, the bone ends swell and the legs bow' } }
    ]
  },

  {
    id: 'child-teeth', type: 'organ', system: 'organs',
    name: { ar: 'الأسنان اللبنية والدائمة', en: 'Baby and permanent teeth' },
    img: 'img/child-teeth.png', imgBack: 'img/child-teeth-back.png', thumb: 'img/thumb-child-teeth.png',
    labels: [
      {
        ar: 'عظم الفك العلوي', en: 'Upper jawbone (maxilla)', x: 52, y: 13, side: 'right',
        go: 'skull',
        desc: {
          ar: 'عظم اسفنجي خفيف جعلته الصورة شبه شفاف لترى ما بداخله. في الطفل يكون هذا العظم مزدحما: صف من الاسنان اللبنية في حافته وصف اخر كامل من الاسنان الدائمة مخبوء في عمقه.',
          en: 'A light spongy bone that the picture has made semi-transparent so you can see inside it. In a child this bone is crowded: a row of baby teeth along its edge and a whole second row of permanent teeth hidden in its depth.'
        }
      },
      {
        ar: 'تيجان الأسنان الدائمة في الفك العلوي', en: 'Crowns of the permanent teeth in the upper jaw', x: 45, y: 22, side: 'left',
        desc: {
          ar: 'تيجان بيضاء مكتملة الشكل تنتظر داخل العظم فوق الاسنان اللبنية. الطفل يحمل مجموعتي اسنان في وقت واحد: واحدة يمضغ بها، وواحدة جاهزة مخبأة لا يراها احد.',
          en: 'Fully shaped white crowns waiting inside the bone above the baby teeth. A child carries two sets of teeth at the same time: one he chews with, and one ready and hidden that nobody sees.'
        }
      },
      {
        ar: 'الرحى الأولى الدائمة (رحى السادسة)', en: 'First permanent molar (the six-year molar)', x: 63, y: 30, side: 'right',
        desc: {
          ar: 'اكبر سن في الصورة، وهو اول الاسنان الدائمة بزوغا نحو سن السادسة. المهم انه لا يحل محل سن ساقط بل يخرج خلف الاسنان اللبنية كلها، فيظنه الاهل سنا لبنيا فلا ينتبهون لتسوسه.',
          en: 'The largest tooth in the picture, and the first permanent tooth to erupt at about six years of age. The key point is that it replaces no shed tooth but comes through behind all the baby teeth, so parents mistake it for a baby tooth and neglect its decay.'
        }
      },
      {
        ar: 'جذور الأسنان اللبنية المتآكلة', en: 'Resorbing roots of the baby teeth', x: 33, y: 36, side: 'left',
        desc: {
          ar: 'انظر كيف صارت الجذور قصيرة مدببة كانها بريت. السن اللبني لا يسقط لانه ضعف، بل لان السن الدائم الصاعد تحته يذيب جذره حتى لا يبقى ما يمسكه، فيتخلخل ويطيح بلا الم.',
          en: 'Look how the roots have become short and pointed as if sharpened. A baby tooth does not fall out because it is weak, but because the permanent tooth rising beneath it dissolves its root until nothing is left to hold it, so it loosens and drops away painlessly.'
        }
      },
      {
        ar: 'اللثة', en: 'Gum (gingiva)', x: 52, y: 43, side: 'right',
        desc: {
          ar: 'النسيج الوردي الذي يغطي العظم ويلتف حول عنق كل سن فيسده عن الجراثيم. عند بزوغ السن تشق قمته اللثة وقد تنتفخ وتؤلم بضعة ايام، وهذا هو وجع التسنين.',
          en: 'The pink tissue that covers the bone and wraps round the neck of each tooth, sealing it against germs. As a tooth erupts its tip splits the gum, which may swell and ache for a few days: that is teething pain.'
        }
      },
      {
        ar: 'الأسنان اللبنية العلوية', en: 'Upper baby teeth', x: 32, y: 46, side: 'left',
        go: 'teeth',
        desc: {
          ar: 'الصف الظاهر في اللثة. الاسنان اللبنية عشرون سنا، اصغر واشد بياضا من الدائمة ومينا اقل سمكا، ولذلك يمشي فيها التسوس اسرع بكثير.',
          en: 'The row visible in the gum. There are twenty baby teeth, smaller and whiter than the permanent ones with thinner enamel, which is why decay travels through them far faster.'
        }
      },
      {
        ar: 'الرحى الأولى الدائمة السفلية', en: 'Lower first permanent molar', x: 64.5, y: 51, side: 'right',
        desc: {
          ar: 'توأمها في الفك السفلي، وقد بزغت هي الاخرى خلف الاسنان اللبنية. هذان السنان هما مفتاح العضة كلها: عليهما يستقر ترتيب الفكين، وفقدهما مبكرا يربك اصطفاف الاسنان الدائمة كلها.',
          en: 'Its twin in the lower jaw, which has likewise come through behind the baby teeth. These two teeth are the key to the whole bite: the alignment of the jaws settles on them, and losing them early throws the whole permanent set out of line.'
        }
      },
      {
        ar: 'الأسنان اللبنية السفلية', en: 'Lower baby teeth', x: 30, y: 53, side: 'left',
        go: 'teeth',
        desc: {
          ar: 'الصف السفلي الظاهر. اول ما يبزغ من هذه عادة القاطعان السفليان نحو الشهر السادس، وتكتمل المجموعة العشرون نحو السنة الثالثة.',
          en: 'The visible lower row. The first of these to appear are usually the two lower incisors at about six months, and the full set of twenty is complete by around three years.'
        }
      },
      {
        ar: 'جذر السنّ اللبني', en: 'Root of a baby tooth', x: 33, y: 60, side: 'left',
        desc: {
          ar: 'جذر رفيع يثبت السن في العظم. لاحظ انه يتباعد قليلا ليترك مكانا للتاج الدائم القابع تحته، فالسن اللبني يحرس مكان خلفه ويحفظه له حتى يجيء.',
          en: 'A slender root anchoring the tooth in the bone. Notice how it splays a little to leave room for the permanent crown sitting beneath it: the baby tooth guards its successor’s place and keeps it for him until he arrives.'
        }
      },
      {
        ar: 'عظم الفك السفلي', en: 'Lower jawbone (mandible)', x: 79, y: 63, side: 'right',
        go: 'tmj',
        desc: {
          ar: 'العظم المتحرك الوحيد في الوجه، وفيه قناة يجري بها العصب والاوعية. تراه هنا شبه شفاف فتظهر خلاله الاسنان الدائمة نائمة في عمقه.',
          en: 'The only moving bone of the face, carrying a canal for its nerve and vessels. Rendered semi-transparent here, it lets the permanent teeth show through, asleep in its depth.'
        }
      },
      {
        ar: 'تيجان الأسنان الدائمة في حجيراتها', en: 'Permanent crowns in their bony crypts', x: 36.6, y: 66, side: 'left',
        desc: {
          ar: 'كل سن دائم يجلس في حجيرة عظمية صغيرة خاصة به، تراها هنا محاطة بحد داكن. الحجيرة تحميه وهو يتكون، ثم تنفتح الى اعلى ويشق السن طريقه خلالها الى الفم.',
          en: 'Each permanent tooth sits in its own small bony crypt, outlined here by a darker rim. The crypt shelters it while it forms, then opens upward so the tooth can cut its way through into the mouth.'
        }
      },
      {
        ar: 'الجذر قيد التكوّن', en: 'The forming root', x: 26.7, y: 75, side: 'left',
        desc: {
          ar: 'طرف الجذر الذي ما زال مفتوحا ولم يكتمل بعد. السن يبزغ وجذره ناقص، ويستمر بناء الجذر سنتين او ثلاثا بعد ظهور التاج في الفم، ولذلك يظل السن الحديث اقل ثباتا في اوله.',
          en: 'The root tip still open and not yet finished. A tooth erupts with an incomplete root, and root building carries on for two or three years after the crown appears in the mouth, which is why a newly erupted tooth is less firmly anchored at first.'
        }
      },
      {
        ar: 'العصب والأوعية في قناة الفك', en: 'Nerve and vessels in the jaw canal', x: 50, y: 77, side: 'right',
        desc: {
          ar: 'الخيط الاصفر عصب، والاحمر والازرق شريان ووريد، تجري كلها في قناة داخل عظم الفك وترسل فرعا الى كل سن. هذا العصب هو الذي يخدره طبيب الاسنان بابرة واحدة فيخدر نصف الفك كله.',
          en: 'The yellow thread is a nerve and the red and blue an artery and a vein, all running in a canal inside the jawbone and sending a branch to every tooth. This is the nerve a dentist numbs with a single injection, and with it half the jaw goes numb.'
        }
      }
    ],
    desc: {
      ar: 'هذه الصورة تكشف ما لا يُرى: الطفل يحمل في فكّيه مجموعتَي أسنان في وقت واحد. مجموعة ظاهرة يمضغ بها — عشرون سنّاً لبنيّاً — ومجموعة ثانية كاملة مخبّأة داخل العظم، كل سنّ منها في حجيرة صغيرة خاصة به، تنتظر دورها. والسنّ اللبني لا يسقط لأنه ضعف أو تعب، بل لأن السنّ الدائم الصاعد تحته يُذيب جذره شيئاً فشيئاً حتى لا يبقى منه ما يمسكه، فيتخلخل ويطيح. ويظهر في الصورة أيضاً أن جذور الأسنان الدائمة ما زالت في طور التكوّن، وأن العصب والأوعية تجري في قناة داخل عظم الفك وترسل فرعاً إلى كل سنّ.',
      en: 'This picture reveals what is normally invisible: a child carries two sets of teeth in his jaws at once. One set is on show and does the chewing — twenty baby teeth — and a second complete set is hidden inside the bone, each tooth in its own small crypt, waiting its turn. A baby tooth does not fall out because it is weak or worn; it falls because the permanent tooth rising beneath it slowly dissolves its root until nothing is left to hold it, so it loosens and drops. The picture also shows that the roots of the permanent teeth are still being built, and that the nerve and vessels run in a canal inside the jawbone, sending a branch to every tooth.'
    },
    func: {
      ar: 'الأسنان اللبنية ليست أسناناً مؤقّتة بلا قيمة. هي تمضغ طعام الطفل في أهم سنوات نموّه، وتصنع مخارج الحروف حين يتعلّم الكلام، وتوسّع الفكّ وتشكّله. وأهمّ من ذلك كله أنها تحجز المكان: كل سنّ لبنيّ يحرس موضع خلفه الدائم حتى يجيء. ولهذا يضرّ إهمالُ السنّ اللبني: التسوّس العميق فيه قد يصل إلى تاج الدائم النائم تحته فيشوّهه، وفقدُه قبل أوانه يجعل الأسنان المجاورة تميل إلى الفراغ فيضيق مكان الدائم فيخرج مزدحماً أو منطمراً. وأما الأسنان الدائمة فاثنان وثلاثون سنّاً تخدم صاحبها بقية عمره ولا بديل لها.',
      en: 'Baby teeth are not worthless temporary teeth. They chew a child’s food through his most important growing years, they shape the sounds of speech as he learns to talk, and they widen and mould the jaw. Most important of all, they hold space: every baby tooth guards the place of its permanent successor until he arrives. This is why neglecting a baby tooth does harm: deep decay in it can reach the crown of the permanent tooth sleeping beneath and mark it, and losing it too early lets the neighbouring teeth drift into the gap, so the permanent tooth finds no room and comes through crowded or stays buried. The permanent set is thirty-two teeth that must serve their owner for the rest of his life, with no replacement.'
    },
    location: { ar: 'داخل عظمَي الفك العلوي والسفلي؛ اللبنية في الحافة والدائمة في عمق العظم فوق العلوية وتحت السفلية', en: 'Within the upper and lower jawbones; the baby teeth along the edge and the permanent ones deep in the bone, above the upper row and below the lower one' },
    size: { ar: '٢٠ سنّاً لبنيّاً تكتمل نحو السنة الثالثة، و٣٢ سنّاً دائماً؛ أوّلها بزوغاً رحى السادسة ثم يمتدّ التبديل من ٦ إلى ١٢ سنة', en: '20 baby teeth complete by about three years and 32 permanent teeth; the first to appear is the six-year molar, and the changeover runs from about 6 to 12 years' },
    short: { ar: 'فكّ صغير يخبّئ مجموعتَي أسنان في وقت واحد', en: 'A small jaw hiding two sets of teeth at once' },
    parts: [
      { ar: 'الأسنان اللبنية العشرون', en: 'The twenty baby teeth' },
      { ar: 'براعم الأسنان الدائمة في حجيراتها', en: 'The permanent tooth buds in their crypts' },
      { ar: 'جذور اللبنية المتآكلة', en: 'The resorbing roots of the baby teeth' },
      { ar: 'عظم الفك وقناة العصب والأوعية', en: 'The jawbone and its nerve and vessel canal' }
    ],
    diseases: [
      { name: { ar: 'تسوّس الطفولة المبكّر', en: 'Early childhood caries' }, desc: { ar: 'نخر سريع يصيب أسنان الرضّع، وأشهر سببه النوم على زجاجة الحليب فيبقى السكر على الأسنان طوال الليل', en: 'Fast decay of infants’ teeth, most often from falling asleep on a milk bottle so that sugar sits on the teeth all night' } },
      { name: { ar: 'فقدان السنّ اللبني قبل أوانه', en: 'Premature loss of a baby tooth' }, desc: { ar: 'يسقط أو يُخلع مبكراً فتميل الأسنان المجاورة إلى مكانه، فيضيق موضع السنّ الدائم ويخرج مزدحماً', en: 'It is lost or extracted early, the neighbouring teeth drift into its place, and the permanent tooth finds no room and comes through crowded' } },
      { name: { ar: 'انطمار السنّ', en: 'Impacted tooth' }, desc: { ar: 'يبقى السنّ الدائم حبيس العظم ولا يجد طريقاً للبزوغ، وأشهر ما يصيب الناب العلوي وضرس العقل', en: 'A permanent tooth stays trapped in the bone with no path to erupt; it happens most often to the upper canine and the wisdom tooth' } },
      { name: { ar: 'تأخّر البزوغ', en: 'Delayed eruption' }, desc: { ar: 'تتأخّر الأسنان عن موعدها المعتاد، وقد يكون سببه وراثياً أو نقص غذاء أو خللاً في الغدة الدرقية', en: 'Teeth appear well after their usual time; the cause may be inherited, or poor nutrition, or an underactive thyroid' } },
      { name: { ar: 'فرط الأسنان', en: 'Supernumerary teeth' }, desc: { ar: 'سنّ زائد عن العدد ينمو في العظم بين الأسنان، فيزاحمها أو يمنع سنّاً دائماً من البزوغ', en: 'An extra tooth beyond the normal count grows in the bone between the others, crowding them or blocking a permanent tooth from erupting' } }
    ]
  },

  {
    id: 'infant-skull', type: 'organ', system: 'skeleton',
    name: { ar: 'جمجمة الرضيع واليافوخ', en: 'The infant skull and its fontanelles' },
    img: 'img/infant-skull.png', imgBack: 'img/infant-skull-back.png', thumb: 'img/thumb-infant-skull.png',
    labels: [
      {
        ar: 'الدرز الجبهي (بين نصفَي الجبهة)', en: 'Metopic suture (between the two frontal halves)', x: 25, y: 9, side: 'left',
        desc: {
          ar: 'خط يمتد في منتصف الجبهة من الانف الى اليافوخ الامامي. العظم الجبهي عند الولادة نصفان لا عظم واحد، وهذا الخط هو الفاصل بينهما، ويختفي عادة قبل سن السادسة.',
          en: 'A line running up the middle of the forehead from the nose to the anterior fontanelle. At birth the frontal bone is two halves, not one, and this line is the join between them; it usually disappears before the age of six.'
        }
      },
      {
        ar: 'العظم الجبهي', en: 'Frontal bone', x: 18, y: 17, side: 'left',
        go: 'skull',
        desc: {
          ar: 'العظم الذي يصنع الجبهة وسقف محجر العين. لاحظ استدارته الواسعة: قحف الرضيع كبير جدا بالنسبة لوجهه الصغير، لان الدماغ يسبق الوجه في النمو سبقا كبيرا.',
          en: 'The bone that forms the forehead and the roof of the eye socket. Notice its broad curve: an infant’s braincase is very large compared with his small face, because the brain grows far ahead of the face.'
        }
      },
      {
        ar: 'اليافوخ الأمامي', en: 'Anterior fontanelle', x: 25, y: 27.5, side: 'left',
        desc: {
          ar: 'المساحة الوردية الواسعة على شكل معين حيث تلتقي اربعة عظام. ليست ثقبا في الراس بل غشاء ليفي متين يغطي الدماغ. تجدها نابضة مع النبض، وهي نافذة الطبيب: غائرة تعني الجفاف، وبارزة متوترة تعني ارتفاع الضغط داخل القحف. تنغلق نحو الشهر الثامن عشر.',
          en: 'The wide pink diamond where four bones meet. It is not a hole in the head but a tough fibrous membrane covering the brain. You can see it pulse with the heartbeat, and it is the doctor’s window: sunken means dehydration, bulging and tense means raised pressure inside the skull. It closes at about eighteen months.'
        }
      },
      {
        ar: 'الدرز الإكليلي', en: 'Coronal suture', x: 11, y: 34, side: 'left',
        desc: {
          ar: 'الفاصل العرضي بين عظم الجبهة والعظمين الجداريين. تراه في اللقطة المكبرة حافة مسننة كاسنان المنشار: هذا التسنن يجعل العظمين يتشابكان لاحقا تشابكا لا ينفك.',
          en: 'The transverse join between the frontal bone and the two parietal bones. In the close-up you can see its edge serrated like saw teeth: that serration is what later locks the two bones together so they cannot come apart.'
        }
      },
      {
        ar: 'الدرز السهمي', en: 'Sagittal suture', x: 24.8, y: 42, side: 'left',
        desc: {
          ar: 'الخط الطولي في منتصف قمة الراس بين العظمين الجداريين. هو ومثيلاته هي التي تسمح للعظام ان تتراكب قليلا بعضها على بعض ساعة الولادة فيضيق راس المولود ويمر في قناة الولادة.',
          en: 'The lengthwise line along the top of the head between the two parietal bones. It and its fellows are what let the bones ride slightly over one another during birth, narrowing the baby’s head so it can pass through the birth canal.'
        }
      },
      {
        ar: 'العظم الجداري', en: 'Parietal bone', x: 12, y: 48, side: 'left',
        go: 'skull',
        desc: {
          ar: 'اكبر عظام قبة الراس، واحد عن كل جانب. تراه هنا رقيقا املس مقوسا، ولا يزال يكبر بسرعة عند حوافه ليجاري الدماغ الذي يتضاعف حجمه في السنة الاولى.',
          en: 'The largest bone of the vault, one on each side. Seen here thin, smooth and domed, it is still growing fast at its edges to keep pace with a brain that doubles in size during the first year.'
        }
      },
      {
        ar: 'اليافوخ الخلفي', en: 'Posterior fontanelle', x: 24.6, y: 54, side: 'left',
        desc: {
          ar: 'يافوخ ثان مثلث الشكل واصغر بكثير، عند ملتقى العظمين الجداريين بالعظم القذالي. ينغلق مبكرا جدا، نحو الشهر الثاني، ولهذا يجده الطبيب مغلقا في اغلب الرضع.',
          en: 'A second, much smaller triangular fontanelle where the two parietal bones meet the occipital. It closes very early, at about two months, so a doctor finds it already shut in most infants.'
        }
      },
      {
        ar: 'العظم القذالي والدرز اللامي', en: 'Occipital bone and lambdoid suture', x: 22, y: 60.5, side: 'left',
        go: 'skull',
        desc: {
          ar: 'العظم الذي يصنع مؤخرة الراس وقاعدته، ويفصله عن الجداريين درز يسمى اللامي لان شكله يشبه حرف لام يوناني مقلوب. اذا نام الرضيع على ظهره دائما تسطح هذا الجزء، وهذا هو الراس المسطح الوضعي.',
          en: 'The bone that forms the back and base of the head, separated from the parietals by a suture called lambdoid because it looks like an inverted Greek lambda. If a baby always sleeps on his back this part flattens, and that is positional flat head.'
        }
      },
      {
        ar: 'الغشاء الليفي بين العظام (مكبَّراً)', en: 'The fibrous membrane between the bones (magnified)', x: 14.5, y: 80, side: 'left',
        desc: {
          ar: 'اللقطة المكبرة تكشف نسيجا ليفيا لامعا يملا الفراغ بين العظام الاربعة. هذا النسيج هو الذي يشد العظام بعضها الى بعض ويحمي الدماغ، وهو نفسه الذي يتعظم شيئا فشيئا فيغلق اليافوخ.',
          en: 'The close-up reveals a glistening fibrous tissue filling the gap between the four bones. This tissue ties the bones to one another and shields the brain, and it is the same tissue that slowly turns to bone and closes the fontanelle.'
        }
      },
      {
        ar: 'حافّة الدرز المسنَّنة (مكبَّرة)', en: 'The serrated suture edge (magnified)', x: 50, y: 88, side: 'left',
        desc: {
          ar: 'حافتا العظمين مسننتان كقطعتي احجية. عند الرضيع بينهما فرجة تسمح بالحركة والنمو، ثم تتشابك الاسنان مع السنين حتى يصير الدرز مفصلا ثابتا لا يتحرك.',
          en: 'The two bone edges are toothed like jigsaw pieces. In an infant a gap between them allows movement and growth; over the years the teeth interlock until the suture becomes a fixed, immovable joint.'
        }
      },
      {
        ar: 'اليافوخ الوتدي (الجانبي الأمامي)', en: 'Sphenoid (anterolateral) fontanelle', x: 71.5, y: 39, side: 'right',
        desc: {
          ar: 'موضع لين صغير امام الاذن وفوقها قليلا في الصدغ. اليوافيخ ستة لا اثنان: امامي وخلفي واثنان صدغيان امامان واثنان خلفيان. هذا الموضع من ارق مواضع الجمجمة كلها طوال العمر.',
          en: 'A small soft spot in the temple just in front of and above the ear. There are six fontanelles, not two: one anterior, one posterior, and a pair in front of and a pair behind each ear. This spot stays one of the thinnest points of the whole skull for life.'
        }
      },
      {
        ar: 'اليافوخ الخشائي (خلف الأذن)', en: 'Mastoid (posterolateral) fontanelle', x: 88.6, y: 47, side: 'right',
        desc: {
          ar: 'موضع لين اخر خلف الاذن حيث يلتقي العظم الجداري بالقذالي بالصدغي. ينغلق متاخرا نحو السنة الاولى او الثانية، وهو من المواضع التي يستعملها الطبيب ليصور الدماغ بالموجات فوق الصوتية.',
          en: 'Another soft spot behind the ear where the parietal, occipital and temporal bones meet. It closes late, at about one to two years, and is one of the windows a doctor uses to scan the brain with ultrasound.'
        }
      },
      {
        ar: 'اليافوخ الخلفي مكبَّراً', en: 'The posterior fontanelle magnified', x: 81, y: 84, side: 'right',
        desc: {
          ar: 'اللقطة المكبرة توضح شكله المثلث: ثلاثة دروز تلتقي في نقطة واحدة كحرف ايه مقلوبة. اصغر من الامامي بكثير، ولهذا ينغلق قبله بسنة ونصف تقريبا.',
          en: 'The close-up shows its triangular shape: three sutures meeting at a single point like an inverted letter Y. It is far smaller than the anterior fontanelle, which is why it closes about a year and a half earlier.'
        }
      }
    ],
    desc: {
      ar: 'جمجمة المولود ليست صندوقاً واحداً كجمجمة البالغ، بل عظام منفصلة يفصل بينها أغشية ليفية متينة. تراها هنا من أعلى ومن الجانب: عظمان جبهيان في المقدّمة، وجداريان كبيران في قمة الرأس، وقذالي في الخلف، وبينها دروز مفتوحة. وحيث تلتقي أربعة عظام يتّسع الغشاء فيصير «يافوخاً»: الأمامي واسع على شكل معيّن عند مقدّمة الرأس، والخلفي أصغر مثلّث الشكل خلفه. وهذه الليونة ليست ضعفاً بل تدبير: هي التي تسمح لعظام الرأس أن تتراكب قليلاً وتضيق ساعة الولادة فيمرّ الرأس في قناة الولادة، ثم تسمح للدماغ بعدها أن يتضاعف حجمه في السنة الأولى دون أن يخنقه صندوق مغلق.',
      en: 'A newborn’s skull is not a single box like an adult’s but separate bones held apart by tough fibrous membranes. You see it here from above and from the side: two frontal bones in front, two large parietals over the crown, an occipital behind, and open sutures between them. Where four bones meet, the membrane widens into a fontanelle: the anterior one wide and diamond-shaped at the front of the head, the posterior one smaller and triangular behind it. This softness is not weakness but design: it lets the bones of the head overlap and narrow during birth so the head can pass through the birth canal, and it then lets the brain double in size during the first year without being strangled by a sealed box.'
    },
    func: {
      ar: 'تشكيل الرأس أثناء الولادة، ثم إفساح المجال لنموّ الدماغ. وفي عيادة الأطفال لليافوخ الأمامي قيمة عملية كبيرة: يقيس الطبيب بأصبعه توتّره ومستواه، فاليافوخ الغائر علامة جفاف يحتاج سوائل، واليافوخ البارز المتوتّر علامة ارتفاع الضغط داخل القحف كما في التهاب السحايا أو استسقاء الرأس. وحجم اليافوخ ووقت انغلاقه يدلّان أيضاً على صحّة العظم: انغلاق مبكّر جداً قد يعني تعظّم الدروز الباكر، وانغلاق متأخّر جداً قد يعني الكساح أو قصور الغدة الدرقية. واليافوخ كذلك نافذة يمرّ منها جهاز الموجات فوق الصوتية ليصوّر دماغ الرضيع دون أشعّة.',
      en: 'Moulding the head during birth, then making room for the brain to grow. In children’s medicine the anterior fontanelle has great practical value: a doctor feels its tension and level with a fingertip, since a sunken fontanelle signals dehydration needing fluids, and a bulging, tense one signals raised pressure inside the skull, as in meningitis or hydrocephalus. Its size and the age at which it closes also report on the health of the bone: closing far too early may mean premature fusion of the sutures, and closing far too late may mean rickets or an underactive thyroid. The fontanelle is also a window through which ultrasound can image an infant’s brain with no radiation at all.'
    },
    location: { ar: 'قبّة الرأس؛ اليافوخ الأمامي عند التقاء الدرز الجبهي بالإكليلي والسهمي، والخلفي عند التقاء السهمي باللامي', en: 'The vault of the head; the anterior fontanelle where the metopic, coronal and sagittal sutures meet, and the posterior where the sagittal meets the lambdoid' },
    size: { ar: 'اليافوخ الأمامي نحو ٢ إلى ٣ سم وينغلق بين ٩ و١٨ شهراً، والخلفي أقل من ١ سم وينغلق نحو الشهر الثاني', en: 'The anterior fontanelle is about 2–3 cm across and closes between 9 and 18 months; the posterior is under 1 cm and closes at about two months' },
    short: { ar: 'رأس مفكّك عمداً ليمرّ في الولادة ويكبر بعدها', en: 'A head left deliberately unfinished, so it can be born and then grow' },
    parts: [
      { ar: 'العظام الجبهية والجدارية والقذالي', en: 'The frontal, parietal and occipital bones' },
      { ar: 'الدروز: الجبهي والإكليلي والسهمي واللامي', en: 'The sutures: metopic, coronal, sagittal and lambdoid' },
      { ar: 'اليافوخ الأمامي واليافوخ الخلفي', en: 'The anterior and posterior fontanelles' },
      { ar: 'الأغشية الليفية بين العظام', en: 'The fibrous membranes between the bones' }
    ],
    diseases: [
      { name: { ar: 'تعظّم الدروز الباكر', en: 'Craniosynostosis' }, desc: { ar: 'ينغلق درز أو أكثر قبل أوانه فينمو الرأس في اتجاه واحد ويتشوّه شكله، وقد يضغط على الدماغ فيحتاج جراحة', en: 'One or more sutures fuse too early, so the head grows in one direction only and its shape distorts; it may press on the brain and need surgery' } },
      { name: { ar: 'استسقاء الرأس', en: 'Hydrocephalus' }, desc: { ar: 'تراكم السائل داخل الدماغ فيتّسع الرأس بسرعة ويبرز اليافوخ ويتوتّر، وهذا من أوضح ما يكشفه فحص اليافوخ', en: 'Fluid builds up inside the brain, so the head enlarges quickly and the fontanelle bulges and tenses; this is one of the clearest things a fontanelle exam reveals' } },
      { name: { ar: 'الجفاف', en: 'Dehydration' }, desc: { ar: 'نقص السوائل عند الرضيع فيغور اليافوخ ويهبط عن مستوى العظم، وهي علامة سريعة يعتمدها الطبيب مع جفاف الفم وقلّة البول', en: 'Fluid loss in an infant makes the fontanelle sink below the level of the bone; it is a quick sign a doctor reads alongside a dry mouth and scant urine' } },
      { name: { ar: 'الكساح ولين العظام', en: 'Rickets' }, desc: { ar: 'نقص فيتامين د فيلين عظم القحف ويتأخّر انغلاق اليافوخ كثيراً عن موعده', en: 'A lack of vitamin D softens the skull bone and delays the closure of the fontanelle well beyond its due time' } },
      { name: { ar: 'الرأس المسطّح الوضعي', en: 'Positional plagiocephaly' }, desc: { ar: 'تسطّح جانب من مؤخرة الرأس لأن الرضيع ينام على جهة واحدة دائماً، ويُعالَج بتغيير وضع النوم واللعب على البطن', en: 'One side of the back of the head flattens because the baby always sleeps on the same side; it is treated by changing sleeping position and giving tummy time' } }
    ]
  },

  {
    id: 'ureter', type: 'organ', system: 'organs',
    name: { ar: 'الحالب', en: 'The ureter' },
    img: 'img/ureter.png', imgBack: 'img/ureter-back.png', thumb: 'img/thumb-ureter.png',
    labels: [
      {
        ar: 'الكلية', en: 'The kidney', x: 13, y: 13, side: 'left',
        go: 'kidneys',
        desc: {
          ar: 'مصنع البول. تعمل الكلية بلا توقف فترشح الدم وتصنع البول قطرة قطرة، وليس لها مخزن، ولهذا لا بد من انبوب ينقل ما تصنعه اولا باول الى المثانة.',
          en: 'The factory that makes urine. The kidney works without pause, filtering blood and producing urine drop by drop, and it has no store of its own, so a tube is needed to carry away what it makes as fast as it makes it.'
        }
      },
      {
        ar: 'الحوض الكلوي', en: 'The renal pelvis', x: 44, y: 20, side: 'left',
        desc: {
          ar: 'قمع واسع داخل الكلية تصب فيه الكؤوس ثم يضيق فجاة ليصير حالبا. هذا الموضع اول مضيق طبيعي في الطريق، وفيه تعلق الحصى الصاعدة من الكلية فيبدا المغص.',
          en: 'A wide funnel inside the kidney into which the calyces drain before it narrows abruptly into the ureter. This spot is the first natural narrowing on the road, and it is where a stone leaving the kidney lodges and the colic begins.'
        }
      },
      {
        ar: 'الأورطي والوريد الأجوف السفلي', en: 'The aorta and the inferior vena cava', x: 32, y: 28, side: 'left',
        go: 'vessels',
        desc: {
          ar: 'الشريان الاحمر الكبير والوريد الازرق الكبير يجريان في منتصف البطن. الحالب يهبط خلفهما ملتصقا بجدار البطن الخلفي، ولهذا يبقى محميا بعيدا عن حركة الامعاء امامه.',
          en: 'The great red artery and the great blue vein running down the middle of the abdomen. The ureter descends behind them, pressed against the back wall of the abdomen, which keeps it protected and clear of the moving intestines in front.'
        }
      },
      {
        ar: 'الحصاة العالقة', en: 'A lodged stone', x: 42, y: 34, side: 'left',
        desc: {
          ar: 'كتلة صغيرة سدت مجرى الحالب فانتفخ الانبوب حولها. الالم هنا ليس من الحصاة نفسها بل من تقلص عضلة الحالب عليها وهي تحاول دفعها، ولذلك ياتي المغص الكلوي موجات لا الما ثابتا.',
          en: 'A small mass blocking the channel, with the tube swollen around it. The pain here does not come from the stone itself but from the ureter’s muscle clamping down on it as it tries to push it along, which is why renal colic comes in waves rather than as a steady ache.'
        }
      },
      {
        ar: 'الحالب', en: 'The ureter', x: 16, y: 42, side: 'left',
        desc: {
          ar: 'انبوب عضلي رفيع يهبط من الكلية الى المثانة. لا يعتمد على الجاذبية اطلاقا: في جداره عضلة ملساء تنقبض موجات متتابعة تعصر البول الى اسفل، ولهذا يعمل وانت مستلق او مقلوب راسا على عقب.',
          en: 'A slim muscular tube running down from the kidney to the bladder. It does not rely on gravity at all: its wall holds smooth muscle that contracts in travelling waves, squeezing the urine downward, which is why it works while you are lying down or even upside down.'
        }
      },
      {
        ar: 'تفرّع الشريانين الحرقفيين', en: 'The iliac bifurcation', x: 33, y: 48, side: 'left',
        desc: {
          ar: 'موضع انقسام الاورطي الى شريانين يذهبان الى الحوض والساقين. الحالبان يعبران فوق هذين الشريانين تماما عند هذا المستوى، وهي علامة يستعملها الجراح ليجد الحالب بامان.',
          en: 'Where the aorta splits into two arteries heading for the pelvis and the legs. The ureters cross over these arteries at exactly this level, a landmark surgeons use to find the ureter safely.'
        }
      },
      {
        ar: 'العظم الحرقفي ومضيق الحوض', en: 'The iliac bone and the pelvic brim', x: 10, y: 56, side: 'left',
        go: 'pelvis',
        desc: {
          ar: 'الجناح العظمي العريض للحوض. عند حافته العلوية يترك الحالب البطن ويدخل الحوض، وهذا هو المضيق الطبيعي الثاني في طريقه.',
          en: 'The broad bony wing of the pelvis. At its upper rim the ureter leaves the abdomen and enters the pelvis, and this is the second natural narrowing along its road.'
        }
      },
      {
        ar: 'المثانة', en: 'The bladder', x: 32, y: 84, side: 'left',
        go: 'bladder',
        desc: {
          ar: 'خزان عضلي يجمع البول حتى يحين وقت التبول. لاحظ ان الحالبين لا يدخلانه من اعلى بل من الخلف ومن جانبيه بميل، وهذا الميل هو سر عمله كصمام.',
          en: 'A muscular reservoir that collects urine until the time comes to pass it. Notice that the two ureters do not enter it from above but from behind and to each side at a slant, and that slant is the secret of its valve.'
        }
      },
      {
        ar: 'الإحليل', en: 'The urethra', x: 30, y: 96, side: 'left',
        go: 'urethra',
        desc: {
          ar: 'المخرج الوحيد اسفل المثانة. لاحظ الفرق: الحالبان يدخلان بلا اراده منك وباستمرار، اما هذا المخرج فتحرسه عضلة عاصرة تفتحها انت متى شئت.',
          en: 'The single exit at the bottom of the bladder. Notice the difference: the two ureters deliver continuously and without your willing it, while this exit is guarded by a sphincter that you open when you choose.'
        }
      },
      {
        ar: 'الكلية مقطوعة (الكؤوس والأهرام)', en: 'The kidney cut open (calyces and pyramids)', x: 47, y: 15, side: 'right',
        go: 'kidneys',
        desc: {
          ar: 'الكلية اليمنى مفتوحة لترى داخلها: اهرام حمراء يخرج البول من قممها، وكؤوس شاحبة تلتقطه، ثم تجتمع الكؤوس كلها في قمع واحد هو بداية الحالب.',
          en: 'The right kidney opened so you can see inside: red pyramids whose tips release the urine, pale calyces that catch it, and then all the calyces gathering into a single funnel that is the beginning of the ureter.'
        }
      },
      {
        ar: 'الحصاة مكبَّرة', en: 'The stone magnified', x: 80, y: 21, side: 'right',
        desc: {
          ar: 'اللقطة المكبرة تكشف كيف تكبس الحصاة الخشنة جدار الحالب وتفتحه. البول المحبوس خلفها يرفع الضغط الى الكلية، ولذلك لا بد من نزع الحصاة او تفتيتها اذا طال بقاؤها.',
          en: 'The close-up shows how the rough stone presses the ureter’s wall apart. Urine trapped behind it drives the pressure back up into the kidney, which is why a stone that lingers must be removed or broken up.'
        }
      },
      {
        ar: 'المقطع العرضي: اللمعة النجمية وطبقات العضل', en: 'Cross section: the star-shaped lumen and muscle layers', x: 79, y: 52, side: 'right',
        go: 'muscle-types',
        desc: {
          ar: 'مقطع عرضي للانبوب. الفراغ في وسطه ليس دائريا بل نجمي الشكل لان بطانته مطوية، فاذا مرت موجة من البول انفردت الطيات واتسع المجرى ثم عاد فانطبق. وحول اللمعة طبقات من العضل الاملس تنقبض بالتتابع فتدفع البول.',
          en: 'A cross section of the tube. The space at its centre is not round but star-shaped because the lining is pleated, so when a wave of urine passes the folds open out and the channel widens, then collapses again. Around the lumen lie layers of smooth muscle that contract in sequence to drive the urine along.'
        }
      },
      {
        ar: 'عبور الأوعية الحرقفية', en: 'Crossing the iliac vessels', x: 47.5, y: 61, side: 'right',
        desc: {
          ar: 'هنا يعبر الحالب فوق الشريان والوريد الحرقفيين عند حافة الحوض. الوعاء النابض تحته يضيق المجرى قليلا، فهذا هو المضيق الطبيعي الثاني وموضع شائع لعلوق الحصى.',
          en: 'Here the ureter crosses over the iliac artery and vein at the rim of the pelvis. The pulsing vessel beneath narrows the channel a little, making this the second natural narrowing and a common place for a stone to stick.'
        }
      },
      {
        ar: 'الدخول المائل في جدار المثانة', en: 'The oblique entry through the bladder wall', x: 80, y: 85, side: 'right',
        desc: {
          ar: 'اللقطة المكبرة تبين ان الحالب لا يثقب الجدار عموديا بل يخترقه مائلا ويسير داخله مسافة قبل ان ينفتح. هذا الميل صمام بسيط بارع: كلما امتلات المثانة ضغط جدارها على هذا الجزء المائل فاغلقه، فلا يرتد البول الى الكلية. واذا اختل هذا الصمام صار البول يصعد ويجر العدوى الى الكلية.',
          en: 'The close-up shows that the ureter does not pierce the wall straight through but enters at a slant and runs inside it a short way before opening. That slant is a simple, brilliant valve: as the bladder fills, its wall presses on the slanted segment and shuts it, so no urine flows back to the kidney. When this valve fails, urine climbs back up and drags infection to the kidney with it.'
        }
      }
    ],
    desc: {
      ar: 'الحالب أنبوب عضلي رفيع، طوله ٢٥ إلى ٣٠ سنتيمتراً، ينقل البول من الكلية إلى المثانة. وأول ما يجب أن يُفهم عنه أنه لا يعتمد على الجاذبية: في جداره عضلة ملساء تنقبض في موجات متتابعة تعصر البول إلى أسفل، ولهذا يعمل وأنت مستلقٍ أو مقلوب رأساً على عقب. يهبط الحالبان على جانبَي العمود الفقري ملتصقَين بجدار البطن الخلفي، ثم يعبران فوق الأوعية الحرقفية عند حافة الحوض، ثم يدخلان المثانة من خلفها بميل داخل جدارها. وفي طريقه ثلاثة مضايق طبيعية — عند الحوض الكلوي، وعند عبور الأوعية الحرقفية، وعند دخول المثانة — وفي هذه المواضع الثلاثة بالذات تعلق الحصى.',
      en: 'The ureter is a slim muscular tube, 25 to 30 centimetres long, that carries urine from the kidney to the bladder. The first thing to understand about it is that it does not depend on gravity: its wall contains smooth muscle that contracts in travelling waves, squeezing the urine downward, so it works while you are lying flat or even upside down. The two ureters run down either side of the spine pressed against the back wall of the abdomen, cross over the iliac vessels at the rim of the pelvis, and then enter the bladder from behind at a slant through its wall. Along the way there are three natural narrowings — at the renal pelvis, at the crossing of the iliac vessels, and at the entry into the bladder — and it is at exactly these three places that stones lodge.'
    },
    func: {
      ar: 'نقل البول نقلاً نشطاً بموجات تقلّص تتكرّر عدّة مرّات في الدقيقة، ومنعه من الرجوع. والمنع هنا هو الإنجاز الأذكى: الحالب يدخل جدار المثانة مائلاً ويسير داخله مسافة قصيرة قبل أن ينفتح، فكلّما امتلأت المثانة ضغط جدارها على ذلك الجزء المائل فأغلقه إغلاقاً تامّاً — صمّام بلا صفيحة ولا زنبرك، يعمل بالضغط نفسه الذي يُفترَض أن يهزمه. وهذا ما يحمي الكلية من أن يعود إليها بول المثانة الملوّث. وأمّا حين تعلق حصاة، فالحالب يقاومها بتقلّص عنيف متكرّر، وهذا التقلّص لا الحصاة هو مصدر المغص الكلوي الذي يُعَدّ من أشدّ الآلام التي يعرفها الطب.',
      en: 'Actively moving urine along by waves of contraction that repeat several times a minute, and stopping it flowing back. The stopping is the cleverer achievement: the ureter enters the bladder wall at a slant and travels a short way inside it before opening, so as the bladder fills its wall presses on that slanted segment and seals it completely — a valve with no flap and no spring, worked by the very pressure it is supposed to defeat. This is what protects the kidney from the bladder’s contaminated urine washing back up. When a stone lodges, the ureter fights it with violent repeated contraction, and it is that contraction, not the stone, that produces renal colic, reckoned among the most severe pains in medicine.'
    },
    location: { ar: 'من حوض الكلية في أعلى البطن، نازلاً خلف الصفاق على جانبَي العمود الفقري، إلى قاعدة المثانة في الحوض', en: 'From the renal pelvis high in the abdomen, down behind the peritoneum on either side of the spine, to the base of the bladder in the pelvis' },
    size: { ar: 'الطول ٢٥ إلى ٣٠ سم، وقطره ٣ إلى ٤ مليمترات فقط، ويضيق إلى نحو مليمترين عند مضايقه الثلاثة', en: '25 to 30 cm long and only 3 to 4 mm wide, narrowing to about 2 mm at its three natural narrowings' },
    short: { ar: 'أنبوب يعصر البول عصراً ولا ينتظر الجاذبية', en: 'A tube that squeezes urine along and never waits for gravity' },
    parts: [
      { ar: 'الحوض الكلوي وبداية الحالب', en: 'The renal pelvis and the start of the ureter' },
      { ar: 'الجزء البطني والجزء الحوضي', en: 'The abdominal part and the pelvic part' },
      { ar: 'جدار العضل الأملس بطبقاته', en: 'The layered smooth muscle wall' },
      { ar: 'الجزء المائل داخل جدار المثانة', en: 'The oblique segment within the bladder wall' }
    ],
    diseases: [
      { name: { ar: 'حصى الحالب والمغص الكلوي', en: 'Ureteric stones and renal colic' }, desc: { ar: 'حصاة تنزل من الكلية فتعلق في أحد المضايق الثلاثة، فيتقلّص الحالب عليها ويأتي ألم موجيّ شديد من الخاصرة إلى أسفل البطن مع دم في البول', en: 'A stone leaving the kidney sticks at one of the three narrowings; the ureter clamps on it and a severe wave-like pain runs from the flank down to the lower abdomen, often with blood in the urine' } },
      { name: { ar: 'الارتجاع المثاني الحالبي', en: 'Vesicoureteric reflux' }, desc: { ar: 'خلل في الصمّام المائل عند دخول المثانة فيصعد البول إلى الكلية عند التبوّل، وهو سبب شائع لالتهابات الكلى المتكرّرة عند الأطفال وقد يترك ندبة في الكلية', en: 'The oblique valve at the bladder entry fails and urine climbs back to the kidney during voiding; it is a common cause of repeated kidney infections in children and can scar the kidney' } },
      { name: { ar: 'انسداد الوصل الحويضي الحالبي', en: 'Pelvi-ureteric junction obstruction' }, desc: { ar: 'ضيق خلقي عند مخرج الحوض الكلوي فيحتبس البول ويتمدّد الحوض ويؤلم بعد شرب كثير، ويُعالَج جراحياً', en: 'A congenital narrowing at the outlet of the renal pelvis traps urine, so the pelvis swells and aches after drinking a lot; it is treated surgically' } },
      { name: { ar: 'تضيّق الحالب', en: 'Ureteric stricture' }, desc: { ar: 'ضيق ندبيّ بعد جراحة أو حصاة أو التهاب، فيتباطأ تصريف الكلية ويهدّد وظيفتها بالتدهور الصامت', en: 'A scarred narrowing after surgery, a stone or inflammation; the kidney drains slowly and its function can decline silently' } },
      { name: { ar: 'استسقاء الكلية', en: 'Hydronephrosis' }, desc: { ar: 'تمدّد الكلية بالبول المحتبس خلف أي انسداد في الحالب، وإن طال أتلف نسيج الكلية إتلافاً لا يُرَدّ', en: 'The kidney swells with urine held back behind any blockage in the ureter, and if it lasts it destroys kidney tissue beyond repair' } }
    ]
  }

]);

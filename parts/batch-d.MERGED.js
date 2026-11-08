
/* ---------- الثدي (مقطع سهمي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'breast', type: 'organ', system: 'reproductive',
    name: { ar: 'الثدي', en: 'Breast' },
    img: 'img/breast.png', imgBack: 'img/breast-back.png', thumb: 'img/thumb-breast.png',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'النسيج الدهني', en: 'Adipose tissue', x: 28, y: 26, side: 'left',
        desc: {
          ar: 'الشحم الاصفر الذي يملا ما بين الفصوص الغدية ويعطي الثدي حجمه وشكله ولينه. نسبته تختلف من امراة الى اخرى، ولهذا لا علاقة بين حجم الثدي وكمية الحليب الذي ينتجه.',
          en: 'The yellow fat that fills the space between the glandular lobes and gives the breast its size, shape and softness. Its proportion differs from one woman to another, which is why breast size has nothing to do with how much milk it makes.'
        }
      },
      {
        ar: 'القنوات اللبنية', en: 'Lactiferous ducts', x: 35, y: 41, side: 'left',
        desc: {
          ar: 'انابيب بيضاء رفيعة تجمع الحليب من الفصيصات وتتجه كلها نحو الحلمة كاغصان شجرة مقلوبة. في كل ثدي نحو ١٥ الى ٢٠ قناة رئيسية، ولكل واحدة فتحتها الخاصة في راس الحلمة.',
          en: 'Slender white tubes that gather the milk from the lobules and all run toward the nipple like the branches of an upturned tree. Each breast has some 15 to 20 main ducts, and each opens by its own tiny pore at the tip of the nipple.'
        }
      },
      {
        ar: 'الجيوب اللبنية', en: 'Lactiferous sinuses', x: 24, y: 51, side: 'left',
        desc: {
          ar: 'اتساعات صغيرة تنتفخ فيها القناة قبل ان تصل الى الحلمة مباشرة، فتخزن الحليب مؤقتا. حين يرضع الطفل فانه يضغط عليها بلثته لا على الحلمة وحدها، ولهذا يعلمون الام ان تدخل الهالة في فم الطفل.',
          en: 'Small widenings where each duct swells just before it reaches the nipple, holding milk for a short while. A nursing baby presses on these with its gums rather than on the nipple alone, which is why mothers are taught to get the areola into the baby’s mouth.'
        }
      },
      {
        ar: 'الحلمة والهالة', en: 'Nipple and areola', x: 9, y: 61, side: 'left',
        desc: {
          ar: 'النتوء الذي تفتح فيه القنوات اللبنية كلها، وحوله الهالة الاغمق لونا. في الهالة غدد صغيرة تفرز زيتا يحمي الجلد اثناء الرضاعة، وتحت الجلد الياف عضلية تجعل الحلمة تنتصب مع البرد او اللمس.',
          en: 'The projection into which all the lactiferous ducts open, ringed by the darker areola. The areola holds small glands that release an oil protecting the skin during nursing, and under the skin lie muscle fibres that make the nipple stand out with cold or touch.'
        }
      },
      {
        ar: 'الجلد', en: 'Skin', x: 13, y: 70, side: 'left',
        desc: {
          ar: 'غلاف الثدي الخارجي، وهو رقيق هنا اكثر من معظم الجسم. اي تغير فيه — تجعد او انسحاب الى الداخل او احمرار كقشر البرتقال — علامة تستدعي الفحص لانها قد تدل على شد من الداخل.',
          en: 'The outer covering of the breast, thinner here than over most of the body. Any change in it, a dimple, a pulling inward or a reddened orange-peel texture, is a sign that calls for examination, because it can mean something is tethering it from within.'
        }
      },
      {
        ar: 'رباطات كوبر', en: 'Cooper’s ligaments', x: 24, y: 84, side: 'left',
        desc: {
          ar: 'خيوط ليفية بيضاء تمتد من عضلة الصدر عبر الشحم حتى الجلد فتعلق الثدي وتحمل ثقله. هي التي تحدد شد الثدي، وترتخي مع العمر فيتدلى، ولا تعود كما كانت لان لا عضلة فيها لتقوى بالتمرين.',
          en: 'White fibrous strands running from the chest muscle through the fat up to the skin, slinging the breast and carrying its weight. They are what hold the breast firm; they slacken with age so it droops, and they never quite recover, because there is no muscle in them to be strengthened by exercise.'
        }
      },
      {
        ar: 'العقد اللمفاوية الإبطية', en: 'Axillary lymph nodes', x: 79.5, y: 19.5, side: 'right', go: 'lymphatic',
        desc: {
          ar: 'عقد خضراء صغيرة في الابط يصب فيها لمف الثدي. اهميتها كبيرة في الطب: اذا نشا سرطان في الثدي فان اول مكان ينتقل اليه غالبا هو هذه العقد، ولذلك تفحص دائما مع الثدي.',
          en: 'Small nodes in the armpit into which the lymph of the breast drains. They matter greatly in medicine: if a cancer arises in the breast, these nodes are usually the first place it spreads to, and so they are always examined along with the breast itself.'
        }
      },
      {
        ar: 'الفصيصات الغدّية', en: 'Glandular lobules', x: 48, y: 31, side: 'right',
        desc: {
          ar: 'العناقيد الوردية التي تشبه حبات العنب، وهي مصنع الحليب نفسه. كل عنقود مجموعة حويصلات مبطنة بخلايا تسحب الماء والدهن والبروتين من الدم وتحولها حليبا، ولا تنشط الا في الحمل والرضاعة.',
          en: 'The pink grape-like clusters, and the milk factory itself. Each cluster is a set of tiny sacs lined with cells that draw water, fat and protein from the blood and turn them into milk, and they wake up only in pregnancy and nursing.'
        }
      },
      {
        ar: 'العضلة الصدرية الكبرى', en: 'Pectoralis major', x: 63, y: 45, side: 'right', go: 'muscles',
        desc: {
          ar: 'العضلة العريضة التي يجلس الثدي عليها، وهي ليست جزءا منه بل ارضيته. الثدي ينزلق فوقها بحرية، وهذا ما يفحصه الطبيب: الكتلة التي لا تتحرك مع الجلد او تلتصق بالعضلة تحتها اخطر من المتحركة.',
          en: 'The broad muscle the breast rests on, not part of it but its floor. The breast glides freely over it, and this is what a doctor tests: a lump that will not move with the skin, or that clings to the muscle beneath, is more worrying than one that moves.'
        }
      },
      {
        ar: 'الضلع', en: 'Rib', x: 76, y: 55, side: 'right', go: 'skeleton',
        desc: {
          ar: 'احد اضلاع القفص الصدري ويظهر هنا مقطوعا بنسيجه الاسفنجي الداخلي. الاضلاع هي الجدار الصلب الذي يحمي القلب والرئتين، ويستقر الثدي على العضلة التي تغطيها.',
          en: 'One of the ribs of the chest wall, shown here cut open with its spongy interior. The ribs are the rigid wall that shields the heart and lungs, and the breast sits on the muscle that covers them.'
        }
      },
      {
        ar: 'العضلات بين الضلعية', en: 'Intercostal muscles', x: 75, y: 68, side: 'right',
        desc: {
          ar: 'عضلات قصيرة تملا الفراغ بين كل ضلعين. ترفع الاضلاع وتخفضها مع كل نفس، فتوسع القفص الصدري وتضيقه، وهي شريكة الحجاب الحاجز في التنفس.',
          en: 'Short muscles filling the gap between each pair of ribs. They raise and lower the ribs with every breath, widening and narrowing the chest, and they are the diaphragm’s partners in breathing.'
        }
      }
    ],
    desc: {
      ar: 'الثدي غدة عرقية تطورت لتصنع الحليب، وهو ليس عضوا واحدا بل خليط من ثلاثة: نسيج غدي يصنع الحليب، وقنوات تحمله إلى الحلمة، وشحم يملأ ما بينهما ويعطي الثدي حجمه. يقوم كله على العضلة الصدرية الكبرى، وتعلّقه بالجلد خيوط ليفية تسمى رباطات كوبر. وفي كل ثدي ١٥ إلى ٢٠ فصاً غدياً، كل فص شجرة قنوات تنتهي بعنقود من الحويصلات، وكلها تصبّ في الحلمة. ولمف الثدي يصرف إلى العقد اللمفاوية في الإبط، وهذا سبب أهميتها في متابعة أمراضه.',
      en: 'The breast is a sweat gland that evolved to make milk, and it is not one organ but three things mixed: glandular tissue that makes the milk, ducts that carry it to the nipple, and fat filling the space between and giving the breast its size. The whole of it rests on the pectoralis major muscle and is slung from the skin by fibrous strands called Cooper’s ligaments. Each breast holds 15 to 20 glandular lobes, each a tree of ducts ending in a cluster of sacs, all draining into the nipple. The lymph of the breast drains to the nodes in the armpit, which is why those nodes matter so much in following its diseases.'
    },
    func: {
      ar: 'صنع الحليب وإرضاع الطفل. في الحمل ترتفع هرمونات المشيمة فتكبر الفصيصات وتستعد، وبعد الولادة يأمر هرمون البرولاكتين من الغدة النخامية الخلايا بأن تصنع الحليب، ويأمر الأوكسيتوسين العضلات الدقيقة حول الحويصلات بأن تعصرها فيندفع الحليب في القنوات. وأول ما يخرج ليس حليباً بل اللبأ، سائل غليظ مملوء بالأجسام المضادة يعطي الطفل مناعته الأولى.',
      en: 'Making milk and nursing the child. In pregnancy the hormones of the placenta rise, so the lobules grow and get ready; after birth prolactin from the pituitary tells the cells to make milk, and oxytocin tells the fine muscles around the sacs to squeeze, driving the milk into the ducts. What comes first is not milk but colostrum, a thick fluid loaded with antibodies that gives the baby its first immunity.'
    },
    location: { ar: 'على مقدّمة الصدر فوق العضلة الصدرية الكبرى، بين الضلع الثاني والسادس تقريباً، ويمتد ذيله نحو الإبط', en: 'On the front of the chest over the pectoralis major, roughly between the second and sixth ribs, with a tail reaching toward the armpit' },
    size: { ar: 'يتغيّر كثيراً بين امرأة وأخرى وبحسب نسبة الشحم؛ ويزداد وزنه نحو ضعفين في الحمل والرضاعة', en: 'Varies widely from woman to woman with the proportion of fat, and roughly doubles in weight during pregnancy and nursing' },
    short: { ar: 'غدّة تصنع الحليب، وشحم يعطيها شكلها', en: 'A gland that makes milk, and fat that gives it its shape' },
    parts: [
      { ar: 'الفصيصات الغدّية', en: 'The glandular lobules' },
      { ar: 'القنوات والجيوب اللبنية', en: 'The lactiferous ducts and sinuses' },
      { ar: 'الحلمة والهالة', en: 'The nipple and areola' },
      { ar: 'الشحم ورباطات كوبر', en: 'The fat and Cooper’s ligaments' }
    ],
    diseases: [
      { name: { ar: 'سرطان الثدي', en: 'Breast cancer' }, desc: { ar: 'أكثر السرطانات شيوعاً عند النساء، وأغلبه يبدأ في القنوات؛ والكشف المبكر بالفحص الذاتي والماموغرام يغيّر النتيجة كلياً', en: 'The commonest cancer in women, most of it starting in the ducts; early detection by self-examination and mammography changes the outcome entirely' } },
      { name: { ar: 'الكيسة الثديية', en: 'Breast cyst' }, desc: { ar: 'جيب مملوء بسائل يظهر ككتلة ملساء متحرّكة، حميد وشائع وقد يكبر ويصغر مع الدورة', en: 'A fluid-filled sac felt as a smooth, mobile lump; benign and common, and it may grow and shrink with the monthly cycle' } },
      { name: { ar: 'الورم الغدّي الليفي', en: 'Fibroadenoma' }, desc: { ar: 'ورم حميد صلب أملس يتحرّك تحت الأصابع، شائع عند الشابات ولا يتحوّل إلى سرطان', en: 'A firm, smooth, mobile benign tumour, common in young women and one that does not turn into cancer' } },
      { name: { ar: 'التهاب الثدي', en: 'Mastitis' }, desc: { ar: 'احتقان وعدوى في نسيج الثدي أثناء الرضاعة مع احمرار وألم وحرارة، وعلاجه لا يوجب وقف الرضاعة غالباً', en: 'Congestion and infection of the breast tissue during nursing, with redness, pain and fever; treating it usually does not require stopping breastfeeding' } },
      { name: { ar: 'التثدّي عند الرجال', en: 'Gynaecomastia' }, desc: { ar: 'تضخّم النسيج الغدّي في صدر الرجل باختلال توازن الهرمونات أو بأدوية، ويحدث كثيراً في المراهقة ثم يزول', en: 'Enlargement of the glandular tissue in a man’s chest from a hormone imbalance or medication; it is common in adolescence and then passes' } }
    ]
  }
]);

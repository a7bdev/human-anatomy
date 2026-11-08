/* ============================================================
   batch-f.js — دفعة و من عناصر «جسم الإنسان»
   النفرون · الزغابات المعوية · الحمض النووي · الشرايين التاجية
   الجمجمة · الحوض · العمود الفقري · العصب الطرفي
   يُدمج لاحقاً في data.js — لا يُعدَّل data.js من هنا.
   ============================================================ */

/* ---------- النفرون (وحدة الترشيح في الكلية) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'nephron', type: 'organ', system: 'organs',
    name: { ar: 'النفرون', en: 'Nephron' },
    img: 'img/nephron.webp', imgBack: 'img/nephron-back.webp', thumb: 'img/thumb-nephron.webp',
    /* تسميات الأجزاء فوق الصورة — x/y نسبة مئوية داخل الصورة، side جهة النص */
    labels: [
      {
        ar: 'الشريان الوارد', en: 'Afferent arteriole', x: 8, y: 6, side: 'left', go: 'vessel-types',
        desc: {
          ar: 'الوعاء الاحمر العريض الذي يدخل الدم الى الكبيبة. اتساعه هو نصف سر الترشيح: يدخل الدم بغزارة ثم يخرج من فتحة اضيق منه، فيرتفع الضغط داخل الكبيبة ويعصر السائل عصرا خارج الشعيرات.',
          en: 'The wide red vessel that carries blood into the glomerulus. Its width is half the secret of filtration: blood pours in generously, then leaves through a narrower opening, so pressure rises inside the tuft and squeezes fluid out of the capillaries.'
        }
      },
      {
        ar: 'الكبيبة', en: 'Glomerulus', x: 24, y: 22, side: 'left',
        desc: {
          ar: 'كبة من الشعيرات الدموية المتشابكة، جدرانها مثقبة بنوافذ دقيقة. الماء والاملاح والسكر والفضلات تعبر منها، اما كريات الدم والبروتينات الكبيرة فتبقى في الوعاء. هنا تبدا رحلة القطرة.',
          en: 'A tangled ball of capillaries whose walls are pierced by tiny windows. Water, salts, sugar and waste pass through; blood cells and large proteins stay behind in the vessel. This is where the droplet begins its journey.'
        }
      },
      {
        ar: 'محفظة بومان', en: 'Bowman capsule', x: 20, y: 33, side: 'left',
        desc: {
          ar: 'كاس مزدوج الجدار يحتضن الكبيبة ويلتقط السائل المرشح منها. ما يجتمع في هذا الكاس ليس بولا بعد، بل بلازما بلا بروتين، ومعظمه سيعود الى الدم في الطريق.',
          en: 'A double-walled cup that cradles the glomerulus and catches the fluid filtered from it. What collects here is not yet urine but protein-free plasma, and most of it will be taken back into the blood further along.'
        }
      },
      {
        ar: 'الشريان الصادر', en: 'Efferent arteriole', x: 28, y: 5, side: 'right',
        desc: {
          ar: 'الوعاء الاحمر الاضيق الذي يخرج من الكبيبة. ضيقه يحبس الدم داخل الكبة فيرفع ضغطها، ثم يمضي ليتفرع الى الشعيرات التي تلتف حول الانبوب. من النادر ان يخرج الدم من شعيرات ليدخل شعيرات اخرى، وهذا يحدث هنا.',
          en: 'The narrower red vessel leaving the glomerulus. Its narrowness dams the blood inside the tuft and raises its pressure; it then goes on to break up into the capillaries that wrap the tubule. Blood rarely leaves one capillary bed to enter another, yet that is what happens here.'
        }
      },
      {
        ar: 'الأنبوب الملتوي القريب', en: 'Proximal convoluted tubule', x: 42, y: 31, side: 'right',
        desc: {
          ar: 'اول محطة بعد المحفظة، وجداره مبطن بزغيبات دقيقة تضاعف مساحته. هنا يستعيد الجسم كل السكر تقريبا وكل الاحماض الامينية ومعظم الملح والماء، فيعود اغلب المرشح الى الدم قبل ان يكمل طريقه.',
          en: 'The first stop after the capsule, its wall lined with fine microvilli that multiply its surface. Here the body takes back nearly all the sugar, all the amino acids and most of the salt and water, so most of the filtrate returns to the blood before it goes any further.'
        }
      },
      {
        ar: 'الشعيرات حول الأنبوبية', en: 'Peritubular capillaries', x: 48, y: 50, side: 'left', go: 'blood',
        desc: {
          ar: 'شبكة الاوعية الحمراء والزرقاء الملتفة حول الانبوب على طوله. كل ما يعاد امتصاصه من الانبوب يستقبله هذا السياج من الشعيرات ويعيده الى الدورة الدموية.',
          en: 'The net of red and blue vessels twined around the tubule along its whole length. Everything reabsorbed from the tubule is picked up by this fence of capillaries and returned to the circulation.'
        }
      },
      {
        ar: 'الفرع النازل من عروة هنلي', en: 'Descending limb of the loop of Henle', x: 53, y: 62, side: 'left',
        desc: {
          ar: 'ينزل هذا الفرع في عمق الكلية حيث النسيج حولها شديد الملوحة، وجداره ينفذ الماء ولا ينفذ الملح، فيسحب الماء الى الخارج ويصير السائل داخله اكثر تركيزا كلما هبط.',
          en: 'This limb dives into the depth of the kidney, where the surrounding tissue is intensely salty. Its wall lets water through but not salt, so water is drawn out and the fluid inside grows more concentrated the deeper it goes.'
        }
      },
      {
        ar: 'الفرع الصاعد', en: 'Ascending limb', x: 62, y: 70, side: 'right',
        desc: {
          ar: 'يصعد راجعا الى القشرة، وجداره عكس النازل تماما: يضخ الملح خارجا ولا يسمح للماء بالمرور. هذا الضخ هو الذي يجعل عمق الكلية مالحا، فتصير العروة مضخة تصنع الظروف التي تعمل بها.',
          en: 'It climbs back toward the cortex, and its wall is the exact opposite of the descending limb: it pumps salt out and lets no water follow. That pumping is what makes the kidney depth salty, so the loop is a pump that manufactures the very conditions it works in.'
        }
      },
      {
        ar: 'عروة هنلي', en: 'Loop of Henle', x: 57, y: 91, side: 'left',
        desc: {
          ar: 'انعطافة حرف U في اعمق نقطة من الرحلة. بفضلها وحدها يستطيع الانسان ان يخرج بولا اكثر تركيزا من دمه، اي ان يحتفظ بمائه في يوم عطش. من غيرها كنا نفقد لترات كل يوم.',
          en: 'The U-turn at the deepest point of the journey. It alone lets a human pass urine more concentrated than the blood, that is, keep water on a thirsty day. Without it we would lose litres every day.'
        }
      },
      {
        ar: 'الأنبوب الملتوي البعيد', en: 'Distal convoluted tubule', x: 79, y: 17, side: 'right',
        desc: {
          ar: 'محطة الضبط الدقيق. هنا تتدخل الهرمونات فتقرر كم صوديوم يعاد وكم بوتاسيوم يطرح وكم حمض يخرج، فيضبط الجسم ملوحته وحموضته حسب حاجته في تلك الساعة.',
          en: 'The fine-tuning stop. Here hormones step in and decide how much sodium is taken back, how much potassium is let go and how much acid is shed, so the body sets its own saltiness and acidity to the hour.'
        }
      },
      {
        ar: 'القناة الجامعة', en: 'Collecting duct', x: 89, y: 55, side: 'right', go: 'kidneys',
        desc: {
          ar: 'الجذع الكبير الذي تصب فيه نفرونات كثيرة معا. القرار الاخير في كمية الماء يقع هنا: هرمون من الغدة النخامية يفتح مسامه فيسحب الماء ويصير البول غامقا مركزا، او يغلقها فيخرج فاتحا وفيرا. ومن هنا يمضي البول الى حوض الكلية ثم الى المثانة.',
          en: 'The large trunk into which many nephrons empty together. The last word on water is spoken here: a hormone from the pituitary opens its pores so water is drawn out and the urine turns dark and concentrated, or closes them so it runs out pale and plentiful. From here the urine passes to the renal pelvis and on to the bladder.'
        }
      }
    ],
    desc: {
      ar: 'النفرون هو وحدة العمل في الكلية، وفي كل كلية نحو مليون نفرون. يبدأ بكبيبة من الشعيرات داخل محفظة بومان، ثم أنبوب ملتو قريب، فعروة هنلي النازلة والصاعدة في عمق الكلية، ثم أنبوب ملتو بعيد ينتهي بالقناة الجامعة، وحول هذا كله شبكة من الشعيرات الدموية. رحلة القطرة فيه أربع خطوات: ترشيح في الكبيبة، ثم إعادة امتصاص لأغلب ما رشح، ثم تركيز في عروة هنلي، ثم ضبط أخير قبل الخروج.',
      en: 'The nephron is the working unit of the kidney, and each kidney holds about a million of them. It begins with a tuft of capillaries inside Bowman capsule, then a proximal convoluted tubule, then the descending and ascending loop of Henle deep in the kidney, then a distal convoluted tubule ending in the collecting duct, with a net of capillaries wrapped around it all. The droplet travels in four steps: filtration at the glomerulus, reabsorption of most of what was filtered, concentration in the loop of Henle, and a final adjustment before it leaves.'
    },
    func: {
      ar: 'ترشيح الدم وتنقيته: يرشح كل نفرون نحو ١٨٠ لترا في اليوم لمجموع الكليتين، ثم يعيد نحو ٩٩٪ منها إلى الدم فلا يخرج إلا لتر ونصف تقريبا كبول. وفي الطريق يضبط النفرون ملح الجسم وماءه وحموضته وضغط دمه، ويطرح اليوريا والفضلات والأدوية، ويحفظ السكر والبروتين. الشريان الوارد العريض والصادر الضيق هما ما يصنع الضغط اللازم للترشيح.',
      en: 'Filtering and cleaning the blood: the nephrons filter about 180 litres a day between the two kidneys, then return some 99 percent of it to the blood, so only about a litre and a half leaves as urine. Along the way the nephron sets the body salt, water, acidity and blood pressure, sheds urea, waste and drugs, and keeps sugar and protein. The wide afferent and narrow efferent arterioles are what create the pressure that filtration needs.'
    },
    location: { ar: 'داخل الكلية: الكبيبة والأنبوبان الملتويان في القشرة الخارجية، وعروة هنلي والقناة الجامعة تنزلان في اللب الداخلي', en: 'Inside the kidney: the glomerulus and the two convoluted tubules lie in the outer cortex, while the loop of Henle and the collecting duct descend into the inner medulla' },
    size: { ar: 'طول النفرون الواحد بين ٣٠ و٥٥ ملم لو فرد، وقطر الكبيبة نحو ٢٠٠ ميكرون، وعددها نحو مليون في كل كلية', en: 'A single nephron is 30 to 55 mm long if straightened, the glomerulus is about 200 microns across, and there are around a million in each kidney' },
    short: { ar: 'مليون مصفاة في كل كلية، ترشح مئة وثمانين لترا لتخرج لترا ونصفا', en: 'A million filters in each kidney: they filter 180 litres to release a litre and a half' },
    parts: [
      { ar: 'الكبيبة داخل محفظة بومان', en: 'The glomerulus within Bowman capsule' },
      { ar: 'الأنبوب الملتوي القريب', en: 'The proximal convoluted tubule' },
      { ar: 'عروة هنلي النازلة والصاعدة', en: 'The descending and ascending loop of Henle' },
      { ar: 'الأنبوب الملتوي البعيد والقناة الجامعة', en: 'The distal convoluted tubule and the collecting duct' }
    ],
    diseases: [
      { name: { ar: 'التهاب كبيبات الكلى', en: 'Glomerulonephritis' }, desc: { ar: 'التهاب يخرب مصافي الكبيبات فيتسرب البروتين والدم إلى البول', en: 'Inflammation that damages the glomerular filters, so protein and blood leak into the urine' } },
      { name: { ar: 'المتلازمة الكلائية', en: 'Nephrotic syndrome' }, desc: { ar: 'تسرب كميات كبيرة من البروتين في البول فينتفخ الوجه والساقان', en: 'Large amounts of protein escape in the urine, so the face and legs swell' } },
      { name: { ar: 'اعتلال الكلية السكري', en: 'Diabetic nephropathy' }, desc: { ar: 'السكر المرتفع سنوات يتلف شعيرات الكبيبة تدريجيا حتى الفشل الكلوي', en: 'Years of high blood sugar gradually wreck the glomerular capillaries until the kidney fails' } },
      { name: { ar: 'الفشل الكلوي المزمن', en: 'Chronic kidney failure' }, desc: { ar: 'موت النفرونات شيئا فشيئا فتتراكم الفضلات ويحتاج المريض غسيلا', en: 'Nephrons die off little by little, waste piles up and the patient comes to need dialysis' } },
      { name: { ar: 'البوال التفه الكلوي', en: 'Nephrogenic diabetes insipidus' }, desc: { ar: 'القناة الجامعة لا تستجيب لهرمون حفظ الماء فيخرج بول غزير فاتح', en: 'The collecting duct stops answering the water-saving hormone, so pale urine pours out in large amounts' } }
    ]
  }
]);

/* ---------- الزغابات المعوية (جدار الأمعاء الدقيقة مكبرا) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'villi', type: 'organ', system: 'organs',
    name: { ar: 'الزغابات المعوية', en: 'Intestinal villi' },
    img: 'img/villi.webp', imgBack: 'img/villi-back.webp', thumb: 'img/thumb-villi.webp',
    labels: [
      {
        ar: 'الطيات الدائرية', en: 'Circular folds', x: 85, y: 13, side: 'right', go: 'small-intestine',
        desc: {
          ar: 'حواف عرضية ثابتة تلتف حول تجويف الامعاء كالكشكش. هذه اول ثلاث ضربات لتكبير المساحة: الطية، ثم الزغابة عليها، ثم الزغيبات على كل خلية.',
          en: 'Permanent transverse ridges that run around the bowel like a ruffle. This is the first of the three multipliers of surface area: the fold, then the villus upon it, then the microvilli upon every cell.'
        }
      },
      {
        ar: 'الزغابة المعوية', en: 'Intestinal villus', x: 78, y: 24, side: 'right',
        desc: {
          ar: 'نتوء اصبعي طوله نحو ملليمتر واحد، وهي غابة كثيفة تغطي كل الجدار. سبب وجودها بسيط: مساحة الامتصاص. الانبوب الاملس لا يعطي الا مترين مربعين تقريبا، اما بالطيات والزغابات والزغيبات فتصير المساحة عشرات الاضعاف.',
          en: 'A finger-shaped projection about a millimetre tall, and they stand as a dense forest over the whole wall. Their reason is simple: absorbing surface. A smooth tube would give only a couple of square metres, but with folds, villi and microvilli the surface grows tens of times larger.'
        }
      },
      {
        ar: 'الزغيبات (حافة الفرشاة)', en: 'Microvilli (brush border)', x: 46, y: 15, side: 'left',
        desc: {
          ar: 'زغب دقيق يكسو سطح كل خلية فيبدو كفرشاة. عليه انزيمات تكمل هضم السكريات والبروتينات في اللحظة نفسها التي تمتص فيها، فالهضم الاخير والامتصاص يقعان على العتبة ذاتها.',
          en: 'A fine fuzz on the surface of every cell that looks like a brush. It carries enzymes that finish digesting sugars and proteins at the very moment they are absorbed, so the last of digestion and the start of absorption happen on the same doorstep.'
        }
      },
      {
        ar: 'الشعيرات الدموية', en: 'Blood capillaries', x: 52, y: 33, side: 'right', go: 'vessel-types',
        desc: {
          ar: 'شبكة حمراء وزرقاء تملا قلب الزغابة. تاخذ السكر والاحماض الامينية والاملاح والفيتامينات الذائبة في الماء، وتمضي بها الى الوريد البابي فالكبد ليفحصها قبل ان تدخل الجسم.',
          en: 'A red and blue net filling the core of the villus. It takes the sugar, the amino acids, the salts and the water-soluble vitamins and carries them to the portal vein and the liver, which inspects them before they enter the body.'
        }
      },
      {
        ar: 'الوعاء اللبني', en: 'Central lacteal', x: 47, y: 52, side: 'left', go: 'lymphatic',
        desc: {
          ar: 'وعاء لمفاوي شاحب يقف وحده في وسط الزغابة. هو طريق الدهون: الدهون المهضومة اكبر من ان تعبر جدار الشعيرة الدموية فتدخل هنا، ويصير سائل اللمف حليبي اللون بعد وجبة دسمة ومن هذا سمي لبنيا. فطعام واحد يخرج من الزغابة في طريقين.',
          en: 'A pale lymph vessel standing alone in the middle of the villus. It is the road for fat: digested fats are too large to cross a blood capillary wall, so they enter here, and the lymph turns milky after a fatty meal, which is how the vessel got its name. One meal thus leaves the villus by two separate roads.'
        }
      },
      {
        ar: 'الخلية الكأسية', en: 'Goblet cell', x: 68, y: 46, side: 'right',
        desc: {
          ar: 'خلية شاحبة منتفخة كالكاس تتناثر بين خلايا الامتصاص، تفرز مخاطا لزجا يزلق الطعام ويحمي البطانة من انزيمات الهضم ومن الحمض القادم من المعدة.',
          en: 'A pale, swollen goblet-shaped cell scattered among the absorbing cells. It secretes sticky mucus that lets food slide and shields the lining from digestive enzymes and from acid arriving out of the stomach.'
        }
      },
      {
        ar: 'القبوات المعوية', en: 'Intestinal crypts', x: 28, y: 45, side: 'left',
        desc: {
          ar: 'حفر ضيقة بين قواعد الزغابات هي مشتل البطانة. الخلايا تولد هنا ثم تزحف صاعدة على جانب الزغابة حتى تسقط من قمتها، وتتجدد بطانة الامعاء كلها كل ثلاثة الى خمسة ايام.',
          en: 'Narrow pits between the bases of the villi, and they are the nursery of the lining. Cells are born here, then creep up the side of the villus until they drop off its tip. The whole intestinal lining renews itself every three to five days.'
        }
      },
      {
        ar: 'الظهارة العمودية', en: 'Columnar epithelium', x: 60, y: 57, side: 'right',
        desc: {
          ar: 'صف واحد من خلايا طويلة نواتها بنفسجية، يغطي الزغابة من الخارج. صف واحد فقط لان كل ما يمتص لا بد ان يعبر جسم خلية واحدة ليصل الدم، فسمك اكبر يعني امتصاصا ابطا.',
          en: 'A single row of tall cells with purple nuclei covering the villus. Only one row, because everything absorbed must cross the body of a single cell to reach the blood, and any greater thickness would mean slower absorption.'
        }
      },
      {
        ar: 'الطبقة تحت المخاطية', en: 'Submucosa', x: 25, y: 63, side: 'left',
        desc: {
          ar: 'طبقة ضامة مرنة تحت البطانة، تحمل الاوعية الدموية واللمفاوية وضفيرة عصبية تنسق حركة الجدار. هي فراش البطانة وطريق امدادها.',
          en: 'A springy connective layer beneath the lining, carrying the blood and lymph vessels and a nerve plexus that coordinates the movement of the wall. It is the bed of the lining and its supply road.'
        }
      },
      {
        ar: 'أوعية تحت المخاطية', en: 'Submucosal vessels', x: 45, y: 67, side: 'right',
        desc: {
          ar: 'الشرايين والاوردة والاوعية اللمفاوية التي تسير في هذه الطبقة وتتفرع صاعدة الى كل زغابة. كل ما امتصته الزغابة يمر من هنا في طريقه الى بقية الجسم.',
          en: 'The arteries, veins and lymph vessels running in this layer and branching upward into every villus. Everything the villus absorbs passes through here on its way to the rest of the body.'
        }
      },
      {
        ar: 'الطبقة العضلية الدائرية', en: 'Circular muscle layer', x: 25, y: 76, side: 'left',
        desc: {
          ar: 'العضلة الداخلية من طبقتي الجدار، والياف هذه الطبقة تلتف حول الانبوب فاذا انقبضت ضيقته ودفعت ما فيه الى الامام.',
          en: 'The inner of the two muscle layers of the wall; its fibres run around the tube, so when they contract they narrow it and push its contents forward.'
        }
      },
      {
        ar: 'الطبقة العضلية الطولية', en: 'Longitudinal muscle layer', x: 40, y: 88, side: 'left',
        desc: {
          ar: 'العضلة الخارجية، والياف هذه الطبقة تمتد بطول الانبوب فاذا انقبضت قصرته. والطبقتان معا تصنعان الموجة الدافعة التي تسمى الحركة الدودية.',
          en: 'The outer muscle layer; its fibres run along the length of the tube, so their contraction shortens it. The two layers together produce the travelling squeeze called peristalsis.'
        }
      },
      {
        ar: 'الغشاء المصلي', en: 'Serosa', x: 75, y: 95, side: 'right',
        desc: {
          ar: 'غلاف املس زلق يكسو الامعاء من الخارج، يفرز سائلا رقيقا يمنع الاحتكاك بين لفات الامعاء وهي تتحرك في البطن.',
          en: 'A smooth, slippery coat over the outside of the bowel. It sheds a thin fluid that keeps the coils from chafing against one another as they move in the abdomen.'
        }
      }
    ],
    desc: {
      ar: 'الزغابات المعوية نتوءات أصبعية دقيقة تغطي بطانة الأمعاء الدقيقة كالغابة، طول الواحدة نحو ملليمتر. وجودها كله من أجل المساحة: الطيات الدائرية تكبر المساحة، ثم الزغابات فوقها تكبرها أكثر، ثم الزغيبات على سطح كل خلية تكبرها أكثر، حتى تبلغ مساحة الامتصاص عشرات الأمتار المربعة داخل أنبوب لا يزيد طوله على ستة أمتار. وفي قلب كل زغابة وعاء لبني في الوسط تحيط به شعيرات دموية.',
      en: 'The intestinal villi are fine finger-shaped projections that cover the lining of the small intestine like a forest, each about a millimetre tall. They exist entirely for surface: the circular folds enlarge the area, the villi on them enlarge it further, and the microvilli on every cell surface enlarge it further still, until the absorbing surface reaches tens of square metres inside a tube no more than six metres long. In the core of each villus stands a central lacteal ringed by blood capillaries.'
    },
    func: {
      ar: 'امتصاص الطعام المهضوم، وفي كل زغابة طريقان لا واحد: الشعيرات الدموية تأخذ السكر والأحماض الأمينية والأملاح والفيتامينات الذائبة في الماء وتمضي بها إلى الكبد، بينما الوعاء اللبني في الوسط يأخذ الدهون والفيتامينات الذائبة فيها لأنها أكبر من أن تعبر جدار الشعيرة، فيدخلها الجهاز اللمفاوي ويصبها في الدم بعيدا عن الكبد. وتفرز الخلايا الكأسية مخاطا يحمي البطانة، وتجدد القبوات خلايا البطانة كل ثلاثة إلى خمسة أيام.',
      en: 'Absorbing digested food, and each villus offers two roads rather than one: the blood capillaries take sugar, amino acids, salts and water-soluble vitamins and carry them to the liver, while the central lacteal takes the fats and the fat-soluble vitamins, which are too large to cross a capillary wall, so the lymphatic system carries them and empties them into the blood past the liver. The goblet cells secrete protective mucus, and the crypts renew the lining cells every three to five days.'
    },
    location: { ar: 'على السطح الداخلي للأمعاء الدقيقة كلها: الاثني عشر والصائم واللفائفي، وأكثفها في الصائم', en: 'Over the whole inner surface of the small intestine: the duodenum, jejunum and ileum, densest in the jejunum' },
    size: { ar: 'طول الزغابة نحو ٠٫٥ إلى ١٫٥ ملم، وفي كل ملليمتر مربع نحو ٢٠ إلى ٤٠ زغابة، ومساحة الامتصاص الكلية نحو ٣٠ مترا مربعا', en: 'A villus is about 0.5 to 1.5 mm tall, with some 20 to 40 villi per square millimetre, giving a total absorbing surface of roughly 30 square metres' },
    short: { ar: 'غابة صغيرة تحول أنبوبا من ستة أمتار إلى ملعب من الامتصاص', en: 'A tiny forest that turns a six-metre tube into a playing field of absorption' },
    parts: [
      { ar: 'الزغابة وزغيباتها', en: 'The villus and its microvilli' },
      { ar: 'الوعاء اللبني في المركز', en: 'The central lacteal' },
      { ar: 'شبكة الشعيرات الدموية', en: 'The blood capillary network' },
      { ar: 'القبوات والخلايا الكأسية', en: 'The crypts and the goblet cells' }
    ],
    diseases: [
      { name: { ar: 'الداء الزلاقي (حساسية القمح)', en: 'Coeliac disease' }, desc: { ar: 'مناعة تهاجم البطانة عند أكل الغلوتين فتتسطح الزغابات ويسوء الامتصاص', en: 'Immunity attacks the lining when gluten is eaten, the villi flatten and absorption fails' } },
      { name: { ar: 'داء كرون', en: 'Crohn disease' }, desc: { ar: 'التهاب مزمن يصيب جدار الأمعاء بعمقه فيسبب ألما وإسهالا ونقص وزن', en: 'Chronic inflammation through the full thickness of the bowel wall, causing pain, diarrhoea and weight loss' } },
      { name: { ar: 'عدم تحمل اللاكتوز', en: 'Lactose intolerance' }, desc: { ar: 'نقص الإنزيم على حافة الفرشاة فلا يهضم سكر الحليب وينتفخ البطن', en: 'A missing enzyme on the brush border, so milk sugar goes undigested and the belly bloats' } },
      { name: { ar: 'سوء الامتصاص', en: 'Malabsorption' }, desc: { ar: 'خلل يمنع دخول المواد الغذائية فتظهر أعراض نقص الحديد والفيتامينات', en: 'A fault that blocks nutrients from getting in, showing up as iron and vitamin deficiency' } },
      { name: { ar: 'التهاب المعدة والأمعاء', en: 'Gastroenteritis' }, desc: { ar: 'عدوى تؤذي قمم الزغابات مؤقتا فيحدث إسهال مائي حتى تتجدد', en: 'An infection that briefly damages the villus tips, causing watery diarrhoea until they renew' } }
    ]
  }
]);

/* ---------- الحمض النووي (من الكروموسوم إلى اللولب المزدوج) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'dna', type: 'organ', system: 'skin',
    name: { ar: 'الحمض النووي', en: 'DNA' },
    img: 'img/dna.webp', imgBack: 'img/dna-back.webp', thumb: 'img/thumb-dna.webp',
    labels: [
      {
        ar: 'السنترومير', en: 'Centromere', x: 16, y: 23, side: 'left',
        desc: {
          ar: 'الخصر الذي يشد نسختي الكروموسوم احداهما الى الاخرى فيبدو الشكل حرف X. عند انقسام الخلية تشد الخيوط من هذه النقطة بالذات فتنفصل النسختان، واحدة لكل خلية بنت.',
          en: 'The waist that binds the two copies of the chromosome together and gives it the X shape. When the cell divides, the spindle fibres pull on exactly this point, so the two copies part, one for each daughter cell.'
        }
      },
      {
        ar: 'الكروماتيدة الشقيقة', en: 'Sister chromatid', x: 24, y: 38, side: 'left',
        desc: {
          ar: 'احدى الذراعين المتطابقتين. الكروموسوم لا يبدو على هيئة X الا بعد ان تنسخ الخلية حمضها النووي استعدادا للانقسام: كل ذراع نسخة كاملة من الاخرى.',
          en: 'One of the two identical arms. A chromosome takes the X shape only after the cell has copied its DNA in readiness for division: each arm is a full copy of the other.'
        }
      },
      {
        ar: 'الكروموسوم', en: 'Chromosome', x: 10, y: 45, side: 'left', go: 'cell',
        desc: {
          ar: 'اقصى درجات التكثيف: خيط الحمض النووي ملفوف على نفسه مرات ومرات حتى صار جسما يرى بالمجهر. في كل خلية بشرية ٤٦ كروموسوما في ٢٣ زوجا، وطول ما فيها من حمض نووي لو فرد نحو مترين داخل نواة لا يرى بالعين.',
          en: 'Coiling at its extreme: the DNA thread wound upon itself again and again until it becomes a body visible under a microscope. Every human cell holds 46 chromosomes in 23 pairs, and the DNA inside them, unwound, would run about two metres inside a nucleus no eye can see.'
        }
      },
      {
        ar: 'الهستونات', en: 'Histone proteins', x: 50, y: 67, side: 'left',
        desc: {
          ar: 'بروتينات على هيئة بكرات صغيرة يلتف حولها الحمض النووي نحو لفتين. هي التي تحل مشكلة المساحة، وهي ايضا مفتاح ونصف: احكام اللف على بكرة يخفي جيناتها فلا تقرا، وارخاؤه يفتحها للقراءة.',
          en: 'Proteins shaped like little spools around which the DNA winds about twice. They are what solves the problem of space, and they are half a switch as well: winding tight around a spool hides its genes from being read, and loosening it opens them up.'
        }
      },
      {
        ar: 'الشريط السكري الفوسفاتي', en: 'Sugar-phosphate backbone', x: 46, y: 88, side: 'left',
        desc: {
          ar: 'الحبل الازرق الذي يلف من الخارج، ويتكون من سكر وفوسفات يتعاقبان. هو العمود الحامل الذي تتعلق به القواعد، وهو متين ثابت التركيب، فالمعنى ليس فيه بل في القواعد التي يحملها.',
          en: 'The blue rope spiralling on the outside, built of sugar and phosphate in alternation. It is the load-bearing column the bases hang from, sturdy and unvarying in make, so the meaning lies not in it but in the bases it carries.'
        }
      },
      {
        ar: 'لييف الكروماتين', en: 'Chromatin fibre', x: 45, y: 20, side: 'right',
        desc: {
          ar: 'الخيط الغليظ الملتف كالنابض. هنا اصطفت البكرات وتلاصقت فصار الحمض النووي لييفا اسمك، وهي مرحلة وسطى بين الخيط المفرود والكروموسوم المكثف.',
          en: 'The thick coil that looks like a spring. Here the spools have lined up and packed together so the DNA becomes a stouter fibre, a stage midway between the loose thread and the condensed chromosome.'
        }
      },
      {
        ar: 'الخرز على خيط', en: 'Beads on a string', x: 87, y: 29, side: 'right',
        desc: {
          ar: 'اقل درجات التكثيف: بكرات متباعدة يصل بينها خيط عار من الحمض النووي، فتشبه خرزا في مسبحة. في هذه الحالة تكون الجينات في متناول الخلية لتقرا.',
          en: 'The loosest packing: spools set apart with bare DNA threaded between them, like beads on a string. In this state the genes lie within reach of the cell to be read.'
        }
      },
      {
        ar: 'اللولب المزدوج', en: 'Double helix', x: 90, y: 45, side: 'right',
        desc: {
          ar: 'الشكل الاصلي للحمض النووي: شريطان يلتفان حول محور واحد كسلم حلزوني، القوائم من سكر وفوسفات والدرجات من ازواج القواعد. اكتشاف هذا الشكل سنة ١٩٥٣ هو ما كشف كيف ينسخ الحمض نفسه.',
          en: 'The native form of DNA: two strands twisted about one axis like a spiral staircase, the rails of sugar and phosphate and the steps of paired bases. Working out this shape in 1953 is what revealed how DNA copies itself.'
        }
      },
      {
        ar: 'النويوسوم', en: 'Nucleosome', x: 60, y: 52, side: 'right', go: 'cell',
        desc: {
          ar: 'الوحدة الاساسية للف: ثماني بروتينات هستون في القلب وحولها نحو ١٤٧ حرفا من الحمض النووي ملتفة لفتين. ملايين من هذه الوحدات المتتالية هي التي تطوي المترين داخل النواة.',
          en: 'The basic unit of packing: eight histone proteins at the core with about 147 letters of DNA wound twice around them. Millions of these units in a row are what fold the two metres inside the nucleus.'
        }
      },
      {
        ar: 'أزواج القواعد', en: 'Base pairs', x: 75, y: 85, side: 'right',
        desc: {
          ar: 'الدرجات الملونة بين الشريطين، وهي اربعة احرف فقط: A و T و C و G. والتزاوج ثابت لا يتغير: A لا ترتبط الا بـ T، وC لا ترتبط الا بـ G. وهذا التزاوج الصارم هو سر النسخ: يكفي ان ينفصل الشريطان ليصير كل شريط قالبا يملي بناء شريط جديد مطابق للذي فارقه.',
          en: 'The coloured rungs between the two strands, and there are only four letters: A, T, C and G. The pairing never varies: A binds only to T, and C only to G. That strict pairing is the secret of copying: the two strands need only part, and each becomes a template dictating a new strand identical to the one it left.'
        }
      }
    ],
    desc: {
      ar: 'الحمض النووي هو دفتر التعليمات الذي يبنى به الجسم كله ويشغل. تظهر الصورة تكبيرات متتالية للمادة الوراثية: كروموسوم مكثف على شكل حرف X، يفك إلى لييف كروماتين ملتف كالنابض، ثم إلى خرز من بكرات الهستون يلتف حولها الحمض، وأخيرا اللولب المزدوج نفسه بشريطيه السكريين الفوسفاتيين وأزواج القواعد الملونة بينهما. مترا من الحمض النووي مطويان داخل نواة كل خلية بهذا الترتيب.',
      en: 'DNA is the instruction book by which the whole body is built and run. The picture shows the genetic material at successive magnifications: a condensed X-shaped chromosome, unwinding into a spring-like chromatin fibre, then into beads of DNA wound on histone spools, and finally the double helix itself with its two sugar-phosphate rails and the coloured base pairs between them. Two metres of DNA are folded inside the nucleus of every cell by exactly this arrangement.'
    },
    func: {
      ar: 'حفظ التعليمات ونسخها. القواعد الأربع A وT وC وG تكتب النص، وتزاوجها الثابت A مع T وC مع G هو سر النسخ: ينفصل الشريطان فيصير كل واحد قالبا يبنى عليه شريط جديد مطابق، فتخرج الخلية البنت بنسخة كاملة. ومن النص نفسه تنسخ الخلية رسائل قصيرة تخرج من النواة لتبنى بها البروتينات، وهي أدوات الجسم كلها: الإنزيمات والهرمونات وألياف العضلات ومستقبلات الحس.',
      en: 'Storing the instructions and copying them. The four bases A, T, C and G write the text, and their fixed pairing, A with T and C with G, is the secret of copying: the two strands part and each becomes a template on which a matching new strand is built, so the daughter cell leaves with a complete copy. From the same text the cell transcribes short messages that travel out of the nucleus to build proteins, which are the body tools entirely: the enzymes, the hormones, the muscle fibres and the receptors of sense.'
    },
    location: { ar: 'داخل نواة كل خلية في الجسم، وقليل منه في الميتوكندريا خارج النواة يورث عن الأم وحدها', en: 'Inside the nucleus of every cell in the body, with a small amount in the mitochondria outside the nucleus, inherited from the mother alone' },
    size: { ar: 'قطر اللولب نحو ٢ نانومتر، وطول الحمض في الخلية الواحدة نحو مترين، وعدد أحرفه نحو ٣ مليارات زوج قاعدي في ٤٦ كروموسوما', en: 'The helix is about 2 nanometres across, the DNA in a single cell runs about two metres long, and its text is some 3 billion base pairs across 46 chromosomes' },
    short: { ar: 'مترا من التعليمات مطويان في نواة لا ترى بالعين', en: 'Two metres of instructions folded into a nucleus no eye can see' },
    parts: [
      { ar: 'الكروموسوم والسنترومير', en: 'The chromosome and its centromere' },
      { ar: 'لييف الكروماتين', en: 'The chromatin fibre' },
      { ar: 'النويوسومات وبكرات الهستون', en: 'The nucleosomes and histone spools' },
      { ar: 'اللولب المزدوج وأزواج القواعد', en: 'The double helix and its base pairs' }
    ],
    diseases: [
      { name: { ar: 'الطفرات الوراثية', en: 'Genetic mutations' }, desc: { ar: 'تبدل حرف أو أكثر في النص فيخرج بروتين ناقص أو معطل، ومنها ما يورث ومنها ما يحدث في الخلية نفسها', en: 'One or more letters change in the text, so a protein comes out faulty or dead; some are inherited and some arise in the cell itself' } },
      { name: { ar: 'متلازمة داون', en: 'Down syndrome' }, desc: { ar: 'نسخة زائدة من الكروموسوم ٢١ فيصير العدد ٤٧ بدل ٤٦، والخلل هنا في عدد الكروموسومات لا في نص الجين', en: 'An extra copy of chromosome 21 makes the count 47 instead of 46; the fault here is in the number of chromosomes, not in the text of a gene' } },
      { name: { ar: 'الأمراض الوراثية المتنحية', en: 'Recessive inherited diseases' }, desc: { ar: 'المرض لا يظهر إلا إذا ورث الطفل النسخة المعطوبة من الأب والأم معا، ولذلك تكثر في زواج الأقارب', en: 'The disease appears only if the child inherits the faulty copy from both parents, which is why it is commoner in marriages between relatives' } },
      { name: { ar: 'فقر الدم المنجلي', en: 'Sickle cell anaemia' }, desc: { ar: 'تغير حرف واحد في جين الهيموغلوبين يجعل الكرية الحمراء كالمنجل فتسد الأوعية الصغيرة وتسبب ألما شديدا', en: 'A single changed letter in the haemoglobin gene turns the red cell into a sickle that jams small vessels and causes severe pain' } },
      { name: { ar: 'السرطان', en: 'Cancer' }, desc: { ar: 'تراكم طفرات في جينات تنظم انقسام الخلية فتفلت من الضبط وتتكاثر بلا توقف', en: 'Mutations pile up in the genes that govern cell division, the cell escapes control and multiplies without stopping' } }
    ]
  }
]);

/* ---------- الشرايين التاجية (القلب من الأمام مع مقطع مسدود) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'coronary', type: 'organ', system: 'vessels',
    name: { ar: 'الشرايين التاجية', en: 'Coronary arteries' },
    img: 'img/coronary.webp', imgBack: 'img/coronary-back.webp', thumb: 'img/thumb-coronary.webp',
    labels: [
      {
        ar: 'الأبهر', en: 'Aorta', x: 45, y: 7, side: 'left', go: 'vessels',
        desc: {
          ar: 'الشريان الاكبر في الجسم، يخرج من البطين الايسر ويقوس فوق القلب. واول فرعين يخرجان منه على الاطلاق، من جذره مباشرة فوق الصمام، هما الشريانان التاجيان: القلب يخدم نفسه قبل ان يخدم احدا.',
          en: 'The largest artery in the body, leaving the left ventricle and arching above the heart. The very first two branches to come off it, straight from its root just above the valve, are the two coronary arteries: the heart serves itself before it serves anyone.'
        }
      },
      {
        ar: 'الأذين الأيمن', en: 'Right atrium', x: 22, y: 25, side: 'left', go: 'heart',
        desc: {
          ar: 'الحجرة العلوية اليمنى التي يعود اليها الدم من الجسم كله. الدم الذي يملا حجرات القلب لا يغذي عضلة القلب، فالجدار سميك والدم يمر مرورا، ولذلك احتاج القلب اوعية خاصة على سطحه.',
          en: 'The upper right chamber, where blood returns from the whole body. The blood filling the chambers does not feed the heart muscle, for the wall is thick and the blood is only passing through, and that is why the heart needed its own vessels on its surface.'
        }
      },
      {
        ar: 'الشريان التاجي الأيمن', en: 'Right coronary artery', x: 21, y: 56, side: 'left',
        desc: {
          ar: 'ينزل في الاخدود بين الاذين والبطين على هذا الجانب. يغذي البطين الايمن وجزءا من الايسر، وعند اغلب الناس يغذي ايضا العقدة التي تضبط ايقاع القلب، ولذلك قد يسبب انسداده اضطرابا شديدا في النبض.',
          en: 'It runs down the groove between atrium and ventricle on this side. It feeds the right ventricle and part of the left, and in most people it also feeds the node that sets the heart rhythm, which is why blocking it can throw the beat badly out.'
        }
      },
      {
        ar: 'البطين الأيمن', en: 'Right ventricle', x: 45, y: 80, side: 'left', go: 'heart',
        desc: {
          ar: 'الحجرة التي تدفع الدم الى الرئتين، وجدارها ارق من الايسر لان الطريق الى الرئة قصير. الشريان النازل الامامي يمر على الحد بينها وبين البطين الايسر.',
          en: 'The chamber that drives blood to the lungs; its wall is thinner than the left because the road to the lung is short. The anterior descending artery runs along the border between it and the left ventricle.'
        }
      },
      {
        ar: 'الشريان التاجي الأيسر الرئيسي', en: 'Left main coronary artery', x: 50, y: 24, side: 'right',
        desc: {
          ar: 'جذع قصير يخرج من جذر الابهر ثم ينقسم بعد سنتيمترين الى فرعين كبيرين: النازل الامامي والمنعطف. قصره لا يقلل خطره، فانسداده وحده يحرم اغلب البطين الايسر من الدم دفعة واحدة.',
          en: 'A short trunk that leaves the aortic root and splits after a couple of centimetres into two large branches, the anterior descending and the circumflex. Its shortness does not lessen its danger: blocking it alone starves most of the left ventricle at a stroke.'
        }
      },
      {
        ar: 'اللويحة العصيدية', en: 'Atherosclerotic plaque', x: 67, y: 33, side: 'right',
        desc: {
          ar: 'هذا الشريان مقطوع لتظهر الكتلة الصفراء داخله: ترسب من الدهون والكولسترول والخلايا الالتهابية تراكم في الجدار سنوات حتى ضيق المجرى. والخطر الاكبر ليس الضيق نفسه بل تمزق سطح اللويحة فجاة، فتتكون عليها جلطة تسد الشريان في دقائق وتموت العضلة خلفها: هذه هي الجلطة القلبية.',
          en: 'This artery is cut open to show the yellow mass inside it: a deposit of fat, cholesterol and inflammatory cells that built up in the wall over years until the channel narrowed. The greater danger is not the narrowing itself but a sudden tear in the surface of the plaque, on which a clot forms that seals the artery in minutes and kills the muscle beyond it. That is a heart attack.'
        }
      },
      {
        ar: 'الشريان المنعطف', en: 'Circumflex artery', x: 88, y: 45, side: 'right',
        desc: {
          ar: 'الفرع الثاني من التاجي الايسر، ينعطف حول جانب القلب في الاخدود ليصل جداره الجانبي والخلفي. اسمه من انعطافه: يدور حول القلب بدل ان ينزل عليه.',
          en: 'The second branch of the left coronary, curving around the side of the heart in the groove to reach its lateral and posterior wall. Its name comes from that curve: it goes around the heart instead of down it.'
        }
      },
      {
        ar: 'الأوردة القلبية', en: 'Cardiac veins', x: 65, y: 52, side: 'right', go: 'blood',
        desc: {
          ar: 'الاوعية الزرقاء التي تسير بمحاذاة الشرايين وتجمع الدم بعد ان تستهلكه العضلة. تصب في جيب تاجي في الوجه الخلفي للقلب، ومنه يعود الدم الى الاذين الايمن.',
          en: 'The blue vessels running alongside the arteries, gathering the blood after the muscle has used it. They empty into a coronary sinus on the back of the heart, and from there the blood returns to the right atrium.'
        }
      },
      {
        ar: 'الشحم فوق القلب', en: 'Epicardial fat', x: 68, y: 61, side: 'right',
        desc: {
          ar: 'الدهن الاصفر الذي يملا الاخاديد ويحضن الاوعية على سطح القلب. يبطن الاوعية ويحميها من الشد اثناء الحركة، لكن كثرته مرتبطة بزيادة تصلب الشرايين.',
          en: 'The yellow fat that fills the grooves and cradles the vessels on the surface of the heart. It pads them and shields them from being tugged as the heart moves, though a large amount of it goes with more hardening of the arteries.'
        }
      },
      {
        ar: 'الشريان النازل الأمامي الأيسر', en: 'Left anterior descending artery', x: 63, y: 68, side: 'right',
        desc: {
          ar: 'ينزل في الاخدود الامامي بين البطينين حتى قمة القلب، ويغذي الجدار الامامي والحاجز بين البطينين، اي اكبر كتلة عضلية في القلب. ولاهميته يسميه الاطباء صانع الارامل: انسداده في اوله يوقف القلب عن العمل الكافي فجاة.',
          en: 'It runs down the front groove between the ventricles to the apex, feeding the anterior wall and the septum between the ventricles, which is the largest mass of muscle in the heart. For that importance doctors call it the widow maker: a block at its beginning stops the heart from working adequately all at once.'
        }
      },
      {
        ar: 'البطين الأيسر', en: 'Left ventricle', x: 82, y: 80, side: 'right', go: 'heart',
        desc: {
          ar: 'اقوى حجرات القلب واسمكها جدارا، لانها تدفع الدم الى الجسم كله. وسمكها هو مشكلتها: عضلة بهذه الضخامة لا يكفيها ما يمر داخلها من دم، فهي اكثر ما يعتمد على الشرايين التاجية واكثر ما يتضرر اذا انسدت.',
          en: 'The strongest chamber of the heart and the thickest walled, because it drives blood to the whole body. Its thickness is its problem: muscle of that bulk is not fed by the blood passing inside it, so it leans on the coronary arteries more than anything else and suffers most when they close.'
        }
      }
    ],
    desc: {
      ar: 'الشرايين التاجية هي أوعية القلب الخاصة التي تغذي عضلته. القلب مليء بالدم في كل لحظة، لكنه لا يستفيد من الدم الذي يمر داخل حجراته: جداره سميك والدم يعبره عبورا، فاحتاج شبكة أوعية تمشي على سطحه من الخارج. تخرج من جذر الأبهر مباشرة فوق الصمام: تاجي أيسر ينقسم إلى نازل أمامي ومنعطف، وتاجي أيمن على الجهة الأخرى، وتسير الأوردة القلبية بمحاذاتها. وفي الصورة شريان مقطوع تظهر فيه لويحة تضيق مجراه.',
      en: 'The coronary arteries are the heart own vessels, the ones that feed its muscle. The heart is full of blood at every moment, yet it gains nothing from the blood inside its chambers: its wall is thick and the blood merely passes through, so it needed a network of vessels running over its outer surface. They leave the root of the aorta just above the valve: a left coronary that splits into an anterior descending and a circumflex, and a right coronary on the other side, with the cardiac veins running beside them. One artery in the picture is cut open to show a plaque narrowing its channel.'
    },
    func: {
      ar: 'إيصال الأكسجين والغذاء إلى عضلة القلب على مدار الساعة. وهي تمتلئ في وقت غريب: أكثر الأوعية تمتلئ حين ينقبض القلب، أما التاجية فتنضغط أثناء الانقباض وتمتلئ في الارتخاء، ولذلك تسارع النبض الشديد يقصر وقت راحتها فيقل ما يصلها. وتستهلك عضلة القلب من الأكسجين نسبة أعلى من أي عضلة أخرى، ولا تملك مخزونا يذكر، فانقطاع الدم عنها دقائق يبدأ بقتل خلاياها.',
      en: 'Delivering oxygen and food to the heart muscle around the clock. They fill at an odd time: most vessels fill when the heart contracts, but the coronaries are squeezed during contraction and fill during relaxation, which is why a very fast pulse shortens their resting time and cuts their supply. Heart muscle draws a higher share of oxygen than any other muscle and keeps almost no reserve, so a few minutes without blood begin to kill its cells.'
    },
    location: { ar: 'على سطح القلب في الأخاديد بين حجراته، تحت طبقة من الشحم، وتخرج من جذر الأبهر فوق الصمام الأبهري مباشرة', en: 'On the surface of the heart in the grooves between its chambers, beneath a layer of fat, arising from the aortic root just above the aortic valve' },
    size: { ar: 'قطر الشريان التاجي الرئيسي بين ٣ و٥ ملم فقط، وطول النازل الأمامي نحو ١٠ إلى ١٣ سم', en: 'A main coronary artery is only 3 to 5 mm across, and the anterior descending artery runs about 10 to 13 cm' },
    short: { ar: 'القلب يغرق في الدم ولا يشرب منه: له أوعيته الخاصة', en: 'The heart is drowning in blood yet drinks none of it: it has vessels of its own' },
    parts: [
      { ar: 'الشريان التاجي الأيسر الرئيسي', en: 'The left main coronary artery' },
      { ar: 'الشريان النازل الأمامي الأيسر', en: 'The left anterior descending artery' },
      { ar: 'الشريان المنعطف', en: 'The circumflex artery' },
      { ar: 'الشريان التاجي الأيمن والأوردة القلبية', en: 'The right coronary artery and the cardiac veins' }
    ],
    diseases: [
      { name: { ar: 'تصلب الشرايين التاجية', en: 'Coronary atherosclerosis' }, desc: { ar: 'تراكم لويحات دهنية في الجدار يضيق المجرى تدريجيا على مدى سنوات', en: 'Fatty plaques build in the wall and narrow the channel little by little over years' } },
      { name: { ar: 'الذبحة الصدرية', en: 'Angina' }, desc: { ar: 'ألم ضاغط في الصدر عند الجهد لأن الدم الواصل لا يكفي حاجة العضلة، ويزول بالراحة', en: 'A pressing chest pain on exertion because the blood arriving falls short of what the muscle needs; it eases with rest' } },
      { name: { ar: 'الجلطة القلبية', en: 'Heart attack' }, desc: { ar: 'تمزق لويحة وتكون جلطة تسد الشريان فجأة فيموت جزء من عضلة القلب خلفها', en: 'A plaque tears, a clot forms and seals the artery at once, and the piece of heart muscle beyond it dies' } },
      { name: { ar: 'قصور القلب بعد الاحتشاء', en: 'Heart failure after infarction' }, desc: { ar: 'ندبة مكان العضلة الميتة تضعف ضخ القلب فيتعب المريض ويحتبس الماء', en: 'Scar in place of the dead muscle weakens the pump, so the patient tires and fluid builds up' } },
      { name: { ar: 'تشنج الشريان التاجي', en: 'Coronary spasm' }, desc: { ar: 'انقباض مفاجئ لجدار الشريان يقطع الدم مؤقتا حتى مع شريان غير مسدود', en: 'A sudden clamp of the artery wall cuts the blood off for a while even in an artery that is not blocked' } }
    ]
  }
]);

/* ---------- الجمجمة (منظر ثلاثة أرباع) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'skull', type: 'organ', system: 'skeleton',
    name: { ar: 'الجمجمة', en: 'Skull' },
    img: 'img/skull.webp', imgBack: 'img/skull-back.webp', thumb: 'img/thumb-skull.webp',
    labels: [
      {
        ar: 'الدرز الإكليلي', en: 'Coronal suture', x: 44, y: 13, side: 'left',
        desc: {
          ar: 'الخط المسنن الذي يفصل العظم الجبهي عن الجداري. الدروز ليست شقوقا بل مفاصل ثابتة تعشق فيها اسنان العظمين بعضها في بعض. في الرضيع تبقى مفتوحة ليكبر الدماغ ومنها اليافوخ، ثم تلتحم مع العمر حتى تختفي.',
          en: 'The jagged line that parts the frontal bone from the parietal. Sutures are not cracks but immovable joints in which the teeth of two bones interlock. In an infant they stay open so the brain can grow, and the fontanelle lies among them; with age they knit together until they vanish.'
        }
      },
      {
        ar: 'العظم الجداري', en: 'Parietal bone', x: 28, y: 20, side: 'left', go: 'brain',
        desc: {
          ar: 'العظم الوردي هنا، ويكون مع نظيره في الجهة الاخرى سقف الجمجمة. تحته مباشرة يقع نصف الكرة المخي، وهو من عظام القبة التي وظيفتها الحماية لا الحركة.',
          en: 'The pink bone here; with its fellow on the other side it forms the roof of the skull. Directly beneath it lies the cerebral hemisphere. It is one of the vault bones, whose work is protection rather than movement.'
        }
      },
      {
        ar: 'العظم الوتدي', en: 'Sphenoid bone', x: 46, y: 38, side: 'left',
        desc: {
          ar: 'الرقعة الزيتونية عند الصدغ، وهي الجزء الظاهر فقط من عظم على شكل فراشة يمتد عرضا في قاعدة الجمجمة كلها. يقال انه حجر الاساس فيها: يلامس كل عظام القبة تقريبا، وفي وسطه حفرة السرج التركي التي تجلس فيها الغدة النخامية.',
          en: 'The olive patch at the temple, and it is only the visible corner of a butterfly-shaped bone that spans the whole base of the skull. It is called its keystone: it touches nearly every vault bone, and in its middle lies the saddle-shaped hollow that cradles the pituitary gland.'
        }
      },
      {
        ar: 'العظم الصدغي', en: 'Temporal bone', x: 28, y: 45, side: 'left',
        desc: {
          ar: 'العظم الرمادي على جانب الجمجمة، واصلبها. داخله محفور الجهاز السمعي كله والتوازن: عظيمات السمع الثلاث والقوقعة والقنوات نصف الدائرية، محمية في اقسى عظم في الجسم.',
          en: 'The grey bone on the side of the skull, and the hardest of them. Carved inside it lie the whole apparatus of hearing and balance: the three tiny ear bones, the cochlea and the semicircular canals, sheltered in the toughest bone of the body.'
        }
      },
      {
        ar: 'القوس الوجنية', en: 'Zygomatic arch', x: 44, y: 54, side: 'left',
        desc: {
          ar: 'جسر عظمي رفيع يمتد من عظم الوجنة الى العظم الصدغي. تحته تمر عضلة المضغ الكبيرة، ولذلك ترى الجسر بارزا ويبقى تحته فراغ. وهو من انحف عظام الوجه واكثرها تعرضا للكسر في الضربات.',
          en: 'A slim bony bridge from the cheekbone to the temporal bone. The large chewing muscle passes beneath it, which is why the bridge stands proud with a gap under it. It is among the thinnest facial bones and the likeliest to break in a blow.'
        }
      },
      {
        ar: 'العظم القذالي', en: 'Occipital bone', x: 12, y: 60, side: 'left',
        desc: {
          ar: 'العظم القرمزي في مؤخرة الجمجمة واسفلها. في وسطه ثقبة كبيرة ينزل منها جذع الدماغ ليصير النخاع الشوكي، وعلى جانبيها لقمتان تجلس عليهما الفقرة الاولى فتتم حركة الايماء بنعم.',
          en: 'The crimson bone at the back and underside of the skull. In its middle is a large opening through which the brainstem descends to become the spinal cord, and on either side of it two knuckles on which the first vertebra sits, giving the head its nodding yes.'
        }
      },
      {
        ar: 'العظم الجبهي', en: 'Frontal bone', x: 63, y: 17, side: 'right', go: 'sinuses',
        desc: {
          ar: 'عظم الجبهة، يمتد الى سقف محجري العينين. وداخله ليس مصمتا: فيه تجويفان هوائيان هما الجيبان الجبهيان، وهما سبب الالم فوق الحاجب عند التهاب الجيوب.',
          en: 'The bone of the forehead, reaching back to roof the two eye sockets. It is not solid inside: it holds two air spaces, the frontal sinuses, which are the reason for the ache above the brow when the sinuses are inflamed.'
        }
      },
      {
        ar: 'عظام الأنف', en: 'Nasal bones', x: 80, y: 41, side: 'right', go: 'nose',
        desc: {
          ar: 'عظمان صغيران يصنعان جسر الانف الاعلى فقط، اما بقية الانف فغضروف لين ولهذا لا يظهر في الهيكل العظمي. وهذان العظمان هما اكثر عظام الوجه كسرا.',
          en: 'Two small bones that make only the upper bridge of the nose; the rest of the nose is soft cartilage, which is why it is missing from a skeleton. These two are the most frequently broken bones of the face.'
        }
      },
      {
        ar: 'الحجاج (محجر العين)', en: 'Orbit (eye socket)', x: 63, y: 47, side: 'right', go: 'eye',
        desc: {
          ar: 'تجويف عظمي عميق يشبه الهرم، تشترك في بنائه سبعة عظام. يحمي العين ويثبت عضلاتها الست، ومن مؤخرته ينفذ العصب البصري الى الدماغ. وعمقه هو ما يجعل العين تنجو من ضربات كثيرة.',
          en: 'A deep pyramid-shaped bony cavity built by seven bones together. It guards the eye and anchors its six muscles, and from its back the optic nerve passes to the brain. Its depth is what lets the eye survive so many blows.'
        }
      },
      {
        ar: 'العظم الوجني', en: 'Zygomatic bone', x: 58, y: 53, side: 'right',
        desc: {
          ar: 'عظم الوجنة الذي يعطي الوجه بروزه الجانبي. يشترك في تكوين الحافة الخارجية للمحجر ويصل الوجه بالجمجمة، وهو دعامة تنقل قوة العض الى قبة الراس.',
          en: 'The cheekbone that gives the face its lateral prominence. It helps form the outer rim of the socket and joins the face to the cranium, acting as a buttress that carries the force of a bite up into the vault.'
        }
      },
      {
        ar: 'الفك العلوي', en: 'Maxilla', x: 76, y: 67, side: 'right',
        desc: {
          ar: 'عظم ثابت لا يتحرك، يحمل الاسنان العليا ويصنع سقف الفم وارضية المحجر وجانب فتحة الانف. وداخله اكبر الجيوب الانفية، ولذلك قد يشعر المريض بالتهاب الجيب الفكي كالم في اسنانه العليا.',
          en: 'A fixed, immovable bone that carries the upper teeth and forms the roof of the mouth, the floor of the eye socket and the side of the nasal opening. Inside it lies the largest of the sinuses, which is why an inflamed maxillary sinus can be felt as pain in the upper teeth.'
        }
      },
      {
        ar: 'الأسنان', en: 'Teeth', x: 72, y: 74, side: 'right', go: 'teeth',
        desc: {
          ar: 'صفان من ٣٢ سنا عند البالغ، مغروسة في حويصلات عظمية في الفكين. وهي ليست عظما: تاجها مغطى بالمينا، وهي اقسى نسيج في الجسم كله ولا خلايا حية فيها.',
          en: 'Two rows of 32 teeth in the adult, set in bony sockets in the jaws. They are not bone: their crowns are sheathed in enamel, the hardest tissue in the whole body, which holds no living cells at all.'
        }
      },
      {
        ar: 'الفك السفلي', en: 'Mandible', x: 58, y: 85, side: 'right', go: 'tmj',
        desc: {
          ar: 'اقوى عظام الوجه واكبرها، وهو العظم المتحرك الوحيد في الجمجمة. يتصل بالعظم الصدغي بمفصل امام الاذن يفتح ويغلق وينزلق الى الامام والجانبين، فيصير المضغ حركة مركبة لا مجرد اطباق.',
          en: 'The strongest and largest bone of the face, and the only movable bone of the skull. It meets the temporal bone at a joint in front of the ear that opens, closes and slides forward and sideways, so chewing becomes a compound motion rather than a simple bite.'
        }
      }
    ],
    desc: {
      ar: 'الجمجمة صندوق عظمي مركب من ٢٢ عظما، تنقسم إلى قبة تحمي الدماغ وعظام وجه تحمل الحواس والفكين. عظام القبة الجبهي والجداريان والصدغيان والقذالي والوتدي، وتتصل ببعضها بدروز مسننة تعشق أسنان العظمين بعضها في بعض فتصير قطعة واحدة. وفي الوجه المحجران وعظام الأنف والوجنتان والفك العلوي الثابت والفك السفلي المتحرك، وهو العظم الوحيد الذي يتحرك في الرأس كله.',
      en: 'The skull is a bony box assembled from 22 bones, divided into a vault that shields the brain and facial bones that carry the senses and the jaws. The vault bones are the frontal, the two parietals, the two temporals, the occipital and the sphenoid, joined by jagged sutures in which the teeth of the two bones interlock until they act as one piece. The face holds the two orbits, the nasal bones, the cheekbones, the fixed maxilla and the movable mandible, the only bone in the whole head that moves.'
    },
    func: {
      ar: 'حماية الدماغ أولا: قبة مقوسة توزع الضربة على سطحها كله بدل أن تتركز في نقطة. وحمل الحواس: محجران للعينين، وتجويفان للأذنين محفوران في أقسى عظم في الجسم، وتجويف الأنف. وحمل الأسنان والفكين للمضغ والكلام. وفي عظامها تجاويف هوائية هي الجيوب تخفف وزن الرأس وتضيف رنينا للصوت. ومن ثقبها الكبير في العظم القذالي ينزل جذع الدماغ ليصير النخاع الشوكي.',
      en: 'Guarding the brain first: an arched vault spreads a blow over its whole surface instead of letting it gather at one point. Carrying the senses: two sockets for the eyes, two chambers for the ears carved in the hardest bone of the body, and the cavity of the nose. Carrying the teeth and jaws for chewing and speech. Within its bones lie air spaces, the sinuses, that lighten the head and lend resonance to the voice. And through its great opening in the occipital bone the brainstem descends to become the spinal cord.'
    },
    location: { ar: 'أعلى الجسم، تستقر على الفقرة الرقبية الأولى في قمة العمود الفقري', en: 'At the top of the body, resting on the first cervical vertebra at the summit of the vertebral column' },
    size: { ar: '٢٢ عظما (٨ للقبة و١٤ للوجه)، وسمك عظم القبة بين ٤ و٧ ملم، ووزن الجمجمة الجافة نحو ٥٠٠ غرام', en: '22 bones (8 in the vault and 14 in the face); the vault bone is 4 to 7 mm thick, and a dry skull weighs about 500 grams' },
    short: { ar: 'اثنان وعشرون عظما تعشقت حتى صارت خوذة واحدة', en: 'Twenty-two bones interlocked until they became a single helmet' },
    parts: [
      { ar: 'عظام القبة: الجبهي والجداريان والصدغيان والقذالي والوتدي', en: 'The vault bones: frontal, parietals, temporals, occipital and sphenoid' },
      { ar: 'الدروز المسننة بين العظام', en: 'The jagged sutures between the bones' },
      { ar: 'عظام الوجه والمحجران وعظام الأنف والوجنتان', en: 'The facial bones, the orbits, the nasal bones and the cheekbones' },
      { ar: 'الفك العلوي الثابت والفك السفلي المتحرك', en: 'The fixed maxilla and the movable mandible' }
    ],
    diseases: [
      { name: { ar: 'كسر الجمجمة', en: 'Skull fracture' }, desc: { ar: 'كسر من ضربة قوية، وخطره في نزف أو أذى للدماغ تحته لا في العظم نفسه', en: 'A break from a heavy blow; its danger lies in bleeding or injury to the brain beneath, not in the bone itself' } },
      { name: { ar: 'تعظم الدروز المبكر', en: 'Craniosynostosis' }, desc: { ar: 'التحام دروز الرضيع قبل أوانها فينمو الرأس بشكل غير متناسق وقد يضيق على الدماغ', en: 'An infant sutures fuse too early, so the head grows out of shape and may crowd the brain' } },
      { name: { ar: 'التهاب الجيوب الأنفية', en: 'Sinusitis' }, desc: { ar: 'التهاب التجاويف الهوائية داخل عظام الوجه فيحدث ألم فوق الحاجب أو تحت العين', en: 'Inflammation of the air spaces inside the facial bones, giving pain above the brow or under the eye' } },
      { name: { ar: 'كسر عظم الأنف', en: 'Nasal bone fracture' }, desc: { ar: 'أكثر كسور الوجه شيوعا، ويسبب اعوجاجا في الجسر ونزفا وانسداد التنفس', en: 'The commonest facial fracture, bending the bridge and bringing bleeding and a blocked airway' } },
      { name: { ar: 'داء باجيت العظمي', en: 'Paget disease of bone' }, desc: { ar: 'تجدد عظمي غير منظم يثخن عظام الجمجمة ويكبر حجم الرأس تدريجيا', en: 'Disordered bone renewal thickens the skull bones and slowly enlarges the head' } }
    ]
  }
]);

/* ---------- الحوض (مقارنة بين حوض الرجل وحوض المرأة) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'pelvis', type: 'organ', system: 'skeleton',
    name: { ar: 'الحوض', en: 'Pelvis' },
    img: 'img/pelvis.webp', imgBack: 'img/pelvis-back.webp', thumb: 'img/thumb-pelvis.webp',
    labels: [
      {
        ar: 'حوض الرجل', en: 'Male pelvis', x: 10, y: 22, side: 'left', go: 'skeleton',
        desc: {
          ar: 'الحوض على اليسار في الصورة. هو اضيق واثقل واعلى، وجناحا الحرقفة فيه اقرب الى العمودي، ومدخله يشبه القلب لا الدائرة، وقوس العانة تحته حاد ضيق. بني للقوة والحمل لا للولادة.',
          en: 'The pelvis on the left of the picture. It is narrower, heavier and taller, its iliac wings stand closer to upright, its inlet is heart-shaped rather than round, and the pubic arch below it is a narrow, sharp angle. It was built for strength and load, not for birth.'
        }
      },
      {
        ar: 'عظم الحرقفة', en: 'Ilium', x: 10, y: 29, side: 'left',
        desc: {
          ar: 'اكبر عظام الحوض واعلاها، وهو الجناح العريض الذي تحسه تحت خصرك. حافته العليا تسمى عرف الحرقفة وتتعلق بها عضلات البطن والظهر والورك. وثلاثة عظام (الحرقفة والاسك والعانة) تلتحم في الطفولة لتصير عظما واحدا اسمه عظم الورك.',
          en: 'The largest and highest of the pelvic bones, the broad wing you can feel below your waist. Its upper edge is the iliac crest, where the muscles of the abdomen, back and hip take hold. Three bones, the ilium, the ischium and the pubis, fuse in childhood into a single hip bone.'
        }
      },
      {
        ar: 'المفصل العجزي الحرقفي', en: 'Sacroiliac joint', x: 16, y: 36, side: 'left',
        desc: {
          ar: 'حيث يلتقي العجز بعظم الحرقفة على الجانبين. مفصل قوي شديد الاحكام لا يتحرك الا قليلا جدا، لان وظيفته نقل وزن الجسم كله من العمود الفقري الى الساقين. وارتخاؤه في اواخر الحمل سبب شائع لالم اسفل الظهر.',
          en: 'Where the sacrum meets the ilium on each side. A strong, tightly bound joint that moves only very slightly, because its task is to hand the whole weight of the body from the spine down to the legs. Its loosening in late pregnancy is a common cause of low back pain.'
        }
      },
      {
        ar: 'العجز والعصعص', en: 'Sacrum and coccyx', x: 24, y: 43, side: 'left', go: 'spine',
        desc: {
          ar: 'العجز عظم مثلث تكون من خمس فقرات التحمت، ويشكل الجدار الخلفي للحوض ويسد قوسه الرابع. وينتهي بالعصعص وهو بقية ذيل صغيرة من ثلاث الى خمس فقيرات. والثقوب الظاهرة على وجهه تخرج منها الاعصاب العجزية.',
          en: 'The sacrum is a triangular bone formed of five fused vertebrae; it makes the back wall of the pelvis and closes the fourth curve of the spine. It ends in the coccyx, a small remnant tail of three to five tiny vertebrae. The openings on its face are where the sacral nerves emerge.'
        }
      },
      {
        ar: 'عظم العانة', en: 'Pubis', x: 20, y: 52, side: 'left', go: 'bladder',
        desc: {
          ar: 'العظم الامامي من عظم الورك، ويلتقي بنظيره في المنتصف. خلفه مباشرة تستقر المثانة، وهو الذي يحميها من الامام، ولذلك قد يمزق كسر الحوض المثانة او الاحليل.',
          en: 'The front bone of the hip bone, meeting its fellow in the midline. Directly behind it sits the bladder, and it is what shields the bladder from in front, which is why a pelvic fracture may tear the bladder or the urethra.'
        }
      },
      {
        ar: 'الثقبة السدادية', en: 'Obturator foramen', x: 18, y: 58, side: 'left',
        desc: {
          ar: 'الفتحة الكبيرة بين عظمي العانة والاسك، وهي اكبر ثقبة في الهيكل العظمي. يسدها في الحي غشاء متين لا تمر منه الا اوعية وعصب صغير، ووجودها يخفف وزن الحوض دون ان يضعفه.',
          en: 'The large opening between the pubis and the ischium, the biggest foramen in the skeleton. In life a tough membrane closes it, letting only small vessels and a nerve through, and its presence lightens the pelvis without weakening it.'
        }
      },
      {
        ar: 'عظم الإسك', en: 'Ischium', x: 16, y: 64, side: 'left',
        desc: {
          ar: 'العظم الخلفي السفلي، وينتهي بنتوء غليظ هو حدبة الاسك: هي التي تحمل وزن الجسم حين نجلس، ولذلك يسمى عظم الجلوس. وعليها تنشا عضلات مؤخرة الفخذ.',
          en: 'The lower back bone of the pelvis, ending in a thick knob, the ischial tuberosity: it is what carries the body weight when we sit, which is why it is called the sitting bone. The hamstring muscles arise from it.'
        }
      },
      {
        ar: 'حوض المرأة', en: 'Female pelvis', x: 88, y: 24, side: 'right', go: 'female-reproductive',
        desc: {
          ar: 'الحوض على اليمين في الصورة. جناحا الحرقفة فيه اكثر انفراجا الى الجانبين، وعظامه ارق، ومدخله اوسع واقرب الى الاستدارة، وقوس العانة تحته اعرض. كل فرق فيه في اتجاه واحد: توسيع الطريق الذي يمر منه راس الجنين.',
          en: 'The pelvis on the right of the picture. Its iliac wings flare further out to the sides, its bones are lighter, its inlet is wider and closer to round, and the pubic arch below it is broader. Every difference points one way: widening the passage the head of a baby must take.'
        }
      },
      {
        ar: 'الفقرة القطنية الأخيرة', en: 'Last lumbar vertebra', x: 74, y: 30, side: 'right', go: 'vertebra-disc',
        desc: {
          ar: 'اخر فقرة متحركة قبل العجز، وعليها تستقر كتلة الجسم كلها ثم تنتقل الى الحوض. لهذا الموضع بالذات اكبر نصيب من انزلاق الغضروف والام اسفل الظهر.',
          en: 'The last movable vertebra before the sacrum; the whole mass of the body rests on it and is handed on to the pelvis. This spot in particular takes the largest share of disc herniation and low back pain.'
        }
      },
      {
        ar: 'الحق ورأس الفخذ', en: 'Acetabulum and femoral head', x: 92, y: 50, side: 'right', go: 'hip',
        desc: {
          ar: 'الحق تجويف كروي عميق تشترك في تكوينه العظام الثلاثة، وفيه يستقر راس عظم الفخذ الكروي. عمق التجويف هو ما يجعل مفصل الورك ثابتا جدا نادر الخلع، على عكس الكتف الضحل.',
          en: 'The acetabulum is a deep cup shaped by all three bones together, and in it sits the ball-shaped head of the femur. The depth of that cup is what makes the hip so stable and so rarely dislocated, unlike the shallow shoulder.'
        }
      },
      {
        ar: 'الارتفاق العاني', en: 'Pubic symphysis', x: 74, y: 56, side: 'right',
        desc: {
          ar: 'الوصلة الغضروفية الرمادية بين عظمي العانة في المنتصف. ليست مفصلا متحركا بل قرص ليفي غضروفي يمسك النصفين، ويلين قليلا في اواخر الحمل بتاثير هرمون فيتسع الحوض قليلا وقت الولادة.',
          en: 'The grey cartilage joint between the two pubic bones in the midline. It is not a moving joint but a fibrocartilage disc holding the two halves together, and late in pregnancy a hormone softens it a little so the pelvis widens slightly for birth.'
        }
      },
      {
        ar: 'قوس العانة', en: 'Pubic arch', x: 74, y: 63, side: 'right',
        desc: {
          ar: 'الزاوية المفتوحة تحت الارتفاق بين الفرعين النازلين. هذه هي العلامة الاوضح في التفريق: في المراة تقارب الزاوية القائمة او تزيد فتبدو القوس عريضة كحرف U، وفي الرجل تكون حادة ضيقة كحرف V. وقارن هنا بين القوسين في الصورة.',
          en: 'The angle opening beneath the symphysis between the two descending rami. This is the clearest mark of the difference: in a woman the angle approaches a right angle or exceeds it, so the arch looks broad like a U, while in a man it is sharp and narrow like a V. Compare the two arches here in the picture.'
        }
      }
    ],
    desc: {
      ar: 'الحوض حلقة عظمية تصل العمود الفقري بالساقين، تتكون من عظمي ورك يلتقيان أماما عند الارتفاق العاني، ومن العجز والعصعص خلفا. وكل عظم ورك ثلاثة عظام التحمت في الطفولة: الحرقفة فوق، والإسك خلف وأسفل، والعانة أمام، وتلتقي الثلاثة في تجويف الحق حيث يستقر رأس الفخذ. وفي الصورة مقارنة بين حوضين: على اليسار حوض الرجل بمدخل ضيق يشبه القلب وقوس عانة حادة، وعلى اليمين حوض المرأة بمدخل أوسع وأكثر استدارة وقوس عانة أعرض.',
      en: 'The pelvis is a bony ring linking the spine to the legs, made of two hip bones meeting in front at the pubic symphysis and of the sacrum and coccyx behind. Each hip bone is three bones fused in childhood: the ilium above, the ischium behind and below, and the pubis in front, all three meeting in the cup of the acetabulum where the head of the femur sits. The picture compares two pelves: on the left a male pelvis with a narrow heart-shaped inlet and a sharp pubic arch, and on the right a female pelvis with a wider, rounder inlet and a broader arch.'
    },
    func: {
      ar: 'نقل وزن الجسم من العمود الفقري إلى الساقين عبر المفصلين العجزيين الحرقفيين، وحمل أعضاء الحوض: المثانة والمستقيم، وعند المرأة الرحم والمبيضان. وعليه تنشأ عضلات الورك والفخذ والبطن، وفي قاعه صفيحة عضلية تسمى قاع الحوض تحمل الأعضاء من أسفل وتضبط التبول والتبرز. وفي المرأة يزيد على ذلك أن يكون طريق الولادة، ولهذا كل فروقه عنه في الرجل.',
      en: 'Handing the weight of the body from the spine to the legs through the two sacroiliac joints, and carrying the pelvic organs: the bladder and the rectum, and in a woman the uterus and ovaries. The muscles of the hip, thigh and abdomen arise from it, and across its floor lies a muscular sheet, the pelvic floor, that holds the organs from below and governs passing water and stool. In a woman it is also the birth canal, and that is the reason for every difference from the male.'
    },
    location: { ar: 'أسفل الجذع بين العمود الفقري القطني والفخذين', en: 'At the base of the trunk between the lumbar spine and the two thighs' },
    size: { ar: 'عرض المسافة بين عرفي الحرقفة نحو ٢٨ سم عند البالغ، وقطر مدخل الحوض في المرأة نحو ١٣ سم عرضا مقابل نحو ١٢ في الرجل', en: 'The distance between the iliac crests is about 28 cm in an adult, and the pelvic inlet measures roughly 13 cm across in a woman against about 12 cm in a man' },
    short: { ar: 'حلقة عظمية واحدة، لكن الرجل بناها للحمل والمرأة للولادة', en: 'One bony ring, built in a man for load and in a woman for birth' },
    parts: [
      { ar: 'عظما الورك: الحرقفة والإسك والعانة', en: 'The two hip bones: ilium, ischium and pubis' },
      { ar: 'العجز والعصعص', en: 'The sacrum and the coccyx' },
      { ar: 'الحق حيث يستقر رأس الفخذ', en: 'The acetabulum, where the femoral head sits' },
      { ar: 'الارتفاق العاني وقوس العانة', en: 'The pubic symphysis and the pubic arch' }
    ],
    diseases: [
      { name: { ar: 'كسر الحوض', en: 'Pelvic fracture' }, desc: { ar: 'إصابة خطيرة غالبا من حادث قوي، وخطرها في نزف غزير أو تمزق المثانة والإحليل', en: 'A serious injury, usually from a heavy accident; its danger is heavy bleeding or a torn bladder and urethra' } },
      { name: { ar: 'كسر عنق الفخذ', en: 'Hip fracture' }, desc: { ar: 'شائع عند كبار السن مع هشاشة العظام، يحدث من سقطة بسيطة ويمنع المشي', en: 'Common in the elderly with brittle bones; it follows a simple fall and stops the patient walking' } },
      { name: { ar: 'التهاب المفصل العجزي الحرقفي', en: 'Sacroiliitis' }, desc: { ar: 'التهاب يسبب ألما في أسفل الظهر والأرداف يزيد بعد الراحة الطويلة', en: 'Inflammation causing low back and buttock pain that worsens after a long rest' } },
      { name: { ar: 'انفراج الارتفاق العاني', en: 'Symphysis pubis dysfunction' }, desc: { ar: 'ارتخاء مؤلم للوصلة الأمامية في الحمل يجعل المشي وصعود الدرج صعبا', en: 'A painful loosening of the front joint in pregnancy that makes walking and stairs hard' } },
      { name: { ar: 'تعذر الولادة لضيق الحوض', en: 'Cephalopelvic disproportion' }, desc: { ar: 'ضيق مدخل الحوض عن رأس الجنين فتحتاج الولادة إلى عملية قيصرية', en: 'The pelvic inlet is too narrow for the baby head, so the birth needs a caesarean' } }
    ]
  }
]);

/* ---------- العمود الفقري (منظر جانبي كامل) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'spine', type: 'organ', system: 'skeleton',
    name: { ar: 'العمود الفقري', en: 'Vertebral column' },
    img: 'img/spine.webp', imgBack: 'img/spine-back.webp', thumb: 'img/thumb-spine.webp',
    labels: [
      {
        ar: 'الفقرات الرقبية السبع', en: 'The seven cervical vertebrae', x: 43, y: 9, side: 'left',
        desc: {
          ar: 'اصغر الفقرات واخفها لانها لا تحمل الا وزن الراس، واكثرها حرية في الحركة. الاولى تحمل الجمجمة وتؤدي حركة نعم، والثانية لها سن يدور حولها الراس فتؤدي حركة لا. وسبع فقرات رقبية في الانسان كما في الزرافة.',
          en: 'The smallest and lightest vertebrae, since they carry only the weight of the head, and the freest in movement. The first bears the skull and gives the nodding yes; the second has a peg the head turns around, giving the shaking no. There are seven cervical vertebrae in a human, as there are in a giraffe.'
        }
      },
      {
        ar: 'الانحناء الرقبي الأمامي', en: 'Cervical lordosis', x: 44, y: 16, side: 'left',
        desc: {
          ar: 'اول الانحناءات الاربعة، وتقعره الى الخلف اي ان الرقبة تتقوس الى الامام. ولد الطفل بظهر مقوس الى الخلف كله، فلما رفع راسه وهو رضيع تكون هذا الانحناء: انحناء اكتسبناه بالجلوس لا ولدنا به.',
          en: 'The first of the four curves; it is concave backward, that is, the neck arches forward. A baby is born with a back curved backward throughout, and this curve formed when the infant first lifted its head. It is a curve we acquired by sitting up, not one we were born with.'
        }
      },
      {
        ar: 'جسم الفقرة', en: 'Vertebral body', x: 47, y: 53, side: 'left', go: 'vertebra-disc',
        desc: {
          ar: 'الكتلة العظمية الاسطوانية في مقدمة كل فقرة، وهي الحاملة للوزن. لاحظ ان الاجسام تكبر كلما نزلنا: فقرة الرقبة صغيرة والفقرة القطنية ضخمة، لان الحمل يزداد كلما اقتربنا من الاسفل.',
          en: 'The cylindrical block of bone at the front of every vertebra, and it is what bears the weight. Notice that the bodies grow larger as we descend: a neck vertebra is small and a lumbar one is stout, because the load increases the closer we come to the bottom.'
        }
      },
      {
        ar: 'القرص بين الفقرات', en: 'Intervertebral disc', x: 44, y: 66, side: 'left', go: 'vertebra-disc',
        desc: {
          ar: 'الوسادة الرمادية بين كل جسمين، ونواتها الداخلية هلامية تتحمل الضغط ويحيط بها اطار ليفي متين. الاقراص الثلاثة والعشرون معا تكون نحو ربع طول العمود، وتقصر خلال اليوم بالضغط فينقص طول الانسان نحو سنتيمتر ونصف من الصباح الى المساء ويعود في النوم.',
          en: 'The grey cushion between every two bodies, with a jelly-like core that takes the pressure inside a tough fibrous ring. The twenty-three discs together make up about a quarter of the length of the column, and they shorten through the day under load, so a person loses roughly a centimetre and a half in height between morning and evening and regains it in sleep.'
        }
      },
      {
        ar: 'الفقرات القطنية الخمس', en: 'The five lumbar vertebrae', x: 46, y: 73, side: 'left',
        desc: {
          ar: 'اضخم فقرات العمود واغلظها اجساما، لانها تحمل وزن الجذع كله. وحرية حركتها في الانحناء الى الامام كبيرة، وهذا مع الحمل الثقيل هو سبب ان اغلب اوجاع الظهر وانزلاق الغضروف تقع هنا.',
          en: 'The largest vertebrae of the column with the stoutest bodies, for they carry the weight of the whole trunk. They bend forward freely, and that freedom together with the heavy load is why most back pain and disc herniation happen here.'
        }
      },
      {
        ar: 'الانحناء القطني الأمامي', en: 'Lumbar lordosis', x: 47, y: 80, side: 'left',
        desc: {
          ar: 'ثالث الانحناءات، ويتقوس اسفل الظهر فيه الى الامام. تكون عند الطفل حين وقف ومشى، وهو الذي ينقل مركز ثقل الجسم فوق الحوض مباشرة فيمكن الوقوف على قدمين دون تعب.',
          en: 'The third curve, in which the low back arches forward. It formed in the child when it stood and walked, and it is what carries the centre of gravity directly over the pelvis so that standing on two feet costs no effort.'
        }
      },
      {
        ar: 'الفقرات الصدرية الاثنتا عشرة', en: 'The twelve thoracic vertebrae', x: 52, y: 30, side: 'right',
        desc: {
          ar: 'اثنتا عشرة فقرة يتصل بكل واحدة منها ضلعان، ولهذا حركتها محدودة: الاضلاع تثبتها لتصنع قفصا امينا للقلب والرئتين. وكل ضلع من اضلاع القفص الاثني عشر يعود الى فقرة من هذه.',
          en: 'Twelve vertebrae, each joined by a pair of ribs, which is why their movement is limited: the ribs pin them down to make a safe cage for the heart and lungs. Every one of the twelve pairs of ribs traces back to one of these vertebrae.'
        }
      },
      {
        ar: 'الانحناء الصدري الخلفي', en: 'Thoracic kyphosis', x: 56, y: 40, side: 'right',
        desc: {
          ar: 'الانحناء الثاني، وتقوسه الى الخلف. هو الانحناء الاصلي الذي ولدنا به مع الانحناء العجزي. وزيادته مع تقدم السن او هشاشة العظام تعطي الظهر المحدودب المعروف.',
          en: 'The second curve, arching backward. It is one of the two original curves we were born with, alongside the sacral one. Its increase with age or with brittle bones gives the familiar rounded back.'
        }
      },
      {
        ar: 'النتوء الشوكي', en: 'Spinous process', x: 57, y: 52, side: 'right',
        desc: {
          ar: 'الشوكة العظمية المتجهة الى الخلف، وهي التي تحسها بيدك حبات متتالية على منتصف ظهرك. تعمل ذراع رافعة تشد عليها عضلات الظهر واربطته لتقيم القامة.',
          en: 'The bony spike pointing backward; it is what you feel with your hand as a row of knobs down the middle of your back. It works as a lever arm for the back muscles and ligaments to pull on and hold you upright.'
        }
      },
      {
        ar: 'الثقبة بين الفقرية', en: 'Intervertebral foramen', x: 52, y: 58, side: 'right', go: 'spinal-cord',
        desc: {
          ar: 'نافذة بين كل فقرتين يخرج منها عصب شوكي الى نصفه من الجسم. ضيق هذه النافذة، بانزلاق قرص او بنمو عظمي، هو ما يضغط العصب فيسبب الالم والخدر النازل في الذراع او الساق لا في الظهر وحده.',
          en: 'A window between every two vertebrae through which a spinal nerve leaves for its half of the body. Narrowing of that window, by a slipped disc or a bony overgrowth, is what pinches the nerve and sends pain and numbness down an arm or a leg rather than staying in the back.'
        }
      },
      {
        ar: 'العجز', en: 'Sacrum', x: 54, y: 86, side: 'right', go: 'pelvis',
        desc: {
          ar: 'خمس فقرات التحمت في عظم مثلث واحد يشكل رابع الانحناءات وتقوسه الى الخلف. يدخل بين عظمي الحوض ويربط العمود الفقري بالحوض والساقين، ومنه تخرج الاعصاب العجزية من ثقوبه.',
          en: 'Five vertebrae fused into a single triangular bone that forms the fourth curve, arching backward. It wedges between the two hip bones and ties the column to the pelvis and the legs, and the sacral nerves leave through its openings.'
        }
      },
      {
        ar: 'العصعص', en: 'Coccyx', x: 53, y: 95, side: 'right',
        desc: {
          ar: 'ثلاث الى خمس فقيرات صغيرة ملتحمة في نهاية العمود، وهي بقية ذيل. ليست بلا عمل: تتعلق بها اربطة وعضلات قاع الحوض، وتشارك في حمل الوزن عند الجلوس مائلا الى الخلف. وكسرها من السقوط يؤلم شهورا.',
          en: 'Three to five small fused segments at the end of the column, the remnant of a tail. It is not idle: ligaments and the pelvic floor muscles attach to it, and it shares the load when one sits leaning back. Breaking it in a fall can hurt for months.'
        }
      }
    ],
    desc: {
      ar: 'العمود الفقري عمود من ٣٣ فقرة يحمل الجسم ويحمي النخاع الشوكي في قناة داخله. أقسامه: سبع فقرات رقبية، واثنتا عشرة صدرية يتصل بكل واحدة ضلعان، وخمس قطنية ضخمة، ثم العجز خمس فقرات ملتحمة، وأخيرا العصعص. وبين الأجسام ثلاثة وعشرون قرصا غضروفيا يعمل وسادة. وله أربعة انحناءات لا يكون مستقيما: انحناء الرقبة إلى الأمام، والصدر إلى الخلف، وأسفل الظهر إلى الأمام، والعجز إلى الخلف.',
      en: 'The vertebral column is a pillar of 33 vertebrae that carries the body and shields the spinal cord in a canal running through it. Its regions are seven cervical vertebrae, twelve thoracic each joined by a pair of ribs, five stout lumbar, then the sacrum of five fused vertebrae, and finally the coccyx. Between the bodies lie twenty-three cartilage discs acting as cushions. It has four curves and is never straight: the neck forward, the chest backward, the low back forward and the sacrum backward.'
    },
    func: {
      ar: 'حمل الجسم وحفظ التوازن، وحماية النخاع الشوكي داخل قناته العظمية، والسماح بالحركة في كل الاتجاهات. وسر قوته انحناءاته: العمود المستقيم ينقل الصدمة كلها إلى الرأس، أما الانحناءات فتجعله يعمل عمل النابض فيمتص أثر كل خطوة وقفزة. اثنان من الانحناءات ولدنا بهما (الصدري والعجزي)، واثنان كسبناهما في السنة الأولى: انحناء الرقبة حين رفع الرضيع رأسه، وانحناء أسفل الظهر حين وقف ومشى.',
      en: 'Carrying the body and keeping its balance, guarding the spinal cord inside its bony canal, and allowing movement in every direction. The secret of its strength is its curves: a straight pillar would pass every shock straight up to the head, while the curves let it behave like a spring that absorbs the jolt of each step and jump. Two of the curves we were born with, the thoracic and the sacral, and two we earned in the first year: the neck curve when the infant lifted its head, and the low back curve when it stood and walked.'
    },
    location: { ar: 'في منتصف الظهر من قاعدة الجمجمة إلى الحوض', en: 'Down the middle of the back from the base of the skull to the pelvis' },
    size: { ar: '٣٣ فقرة (٧ رقبية و١٢ صدرية و٥ قطنية والعجز والعصعص)، وطوله نحو ٧٠ سم عند الرجل و٦٠ عند المرأة، والأقراص نحو ربع هذا الطول', en: '33 vertebrae (7 cervical, 12 thoracic, 5 lumbar, the sacrum and the coccyx); it runs about 70 cm in a man and 60 in a woman, and the discs make up around a quarter of that length' },
    short: { ar: 'ثلاث وثلاثون فقرة وأربعة انحناءات تجعل العمود نابضا لا عصا', en: 'Thirty-three vertebrae and four curves that make the column a spring, not a rod' },
    parts: [
      { ar: 'الفقرات الرقبية السبع', en: 'The seven cervical vertebrae' },
      { ar: 'الفقرات الصدرية الاثنتا عشرة', en: 'The twelve thoracic vertebrae' },
      { ar: 'الفقرات القطنية الخمس', en: 'The five lumbar vertebrae' },
      { ar: 'العجز والعصعص والأقراص بين الفقرات', en: 'The sacrum, the coccyx and the intervertebral discs' }
    ],
    diseases: [
      { name: { ar: 'انزلاق الغضروف', en: 'Disc herniation' }, desc: { ar: 'خروج نواة القرص من إطارها فتضغط على العصب ويمتد الألم إلى الساق', en: 'The core of a disc escapes its ring and presses a nerve, sending pain down the leg' } },
      { name: { ar: 'الجنف', en: 'Scoliosis' }, desc: { ar: 'اعوجاج جانبي للعمود يظهر غالبا في سن المراهقة ويحتاج متابعة أو مشدا', en: 'A sideways curve of the column, usually showing up in the teenage years and needing follow-up or a brace' } },
      { name: { ar: 'الحداب (تحدب الظهر)', en: 'Kyphosis' }, desc: { ar: 'زيادة الانحناء الصدري إلى الخلف فيبدو الظهر محدودبا، وشائع مع هشاشة العظام', en: 'The thoracic curve deepens and the back looks rounded, common with brittle bones' } },
      { name: { ar: 'تضيق القناة الشوكية', en: 'Spinal stenosis' }, desc: { ar: 'ضيق القناة على النخاع والأعصاب فيتعب المريض من المشي ويرتاح بالانحناء', en: 'The canal narrows on the cord and nerves, so walking tires the patient and bending forward relieves it' } },
      { name: { ar: 'هشاشة العظام وكسر الفقرة', en: 'Osteoporosis and vertebral fracture' }, desc: { ar: 'ضعف العظم حتى تنضغط الفقرة من حركة بسيطة فيقصر الطول ويتحدب الظهر', en: 'Bone weakens until a vertebra collapses on a slight movement, height is lost and the back rounds' } }
    ]
  }
]);

/* ---------- العصب الطرفي (مقطع عرضي في العصب الوركي) ---------- */
ORGANS = ORGANS.concat([
  {
    id: 'peripheral-nerve', type: 'organ', system: 'nervous',
    name: { ar: 'العصب الطرفي', en: 'Peripheral nerve' },
    img: 'img/peripheral-nerve.webp', imgBack: 'img/peripheral-nerve-back.webp', thumb: 'img/thumb-peripheral-nerve.webp',
    labels: [
      {
        ar: 'أوعية دموية داخل الغلاف', en: 'Vessels within the sheath', x: 48, y: 29, side: 'left',
        desc: {
          ar: 'شرايين واوردة صغيرة تمشي في الغلاف الخارجي وتتفرع بين الحزم. العصب نسيج جائع للاكسجين لا يحتمل انقطاعه، ولذلك يحمل شبكة تغذية خاصة به على طوله.',
          en: 'Small arteries and veins that travel in the outer sheath and branch between the fascicles. Nerve tissue is hungry for oxygen and cannot bear its loss, so it carries a feeding network of its own along its whole length.'
        }
      },
      {
        ar: 'جذع العصب', en: 'Nerve trunk', x: 14, y: 40, side: 'left', go: 'spinal-cord',
        desc: {
          ar: 'العصب من الخارج حبل ابيض لامع يشبه الحبل الكهربائي. وهو ليس خلية واحدة بل حزمة من الوف الالياف، كل ليف امتداد لخلية عصبية جسمها في النخاع الشوكي او قربه. والعصب الوركي هنا اضخم اعصاب الجسم.',
          en: 'From outside, a nerve is a glistening white cord much like an electrical cable. It is not one cell but a bundle of thousands of fibres, each fibre the extension of a nerve cell whose body lies in or near the spinal cord. The sciatic nerve shown here is the thickest nerve in the body.'
        }
      },
      {
        ar: 'حزمة عصبية', en: 'Nerve fascicle', x: 49, y: 52, side: 'left', go: 'nervous',
        desc: {
          ar: 'مجموعة من الالياف مغلفة معا. العصب الواحد يحمل حزما عدة، وفي كل حزمة الياف حركية تنزل الى العضلات والياف حسية تصعد الى الدماغ، فالسلك واحد والاتجاهان مختلفان.',
          en: 'A group of fibres wrapped together. A single nerve carries several fascicles, and within each are motor fibres running down to muscle and sensory fibres running up to the brain, so one cable carries two directions of traffic.'
        }
      },
      {
        ar: 'فروع العصب', en: 'Nerve branches', x: 22, y: 64, side: 'left', go: 'muscles',
        desc: {
          ar: 'خيوط صفراء تنفصل عن الجذع لتقصد عضلة او رقعة من الجلد. كلما ابتعد العصب عن النخاع تفرع اكثر ودق حتى ينتهي بنهايات مجهرية في العضلة او تحت الجلد.',
          en: 'Yellow strands parting from the trunk to seek a muscle or a patch of skin. The further the nerve travels from the cord the more it divides and thins, until it ends in microscopic terminals in muscle or under the skin.'
        }
      },
      {
        ar: 'الغلاف الخارجي (الأبينيوريوم)', en: 'Epineurium', x: 40, y: 76, side: 'left',
        desc: {
          ar: 'الطبقة الخارجية الكثيفة التي تلف العصب كله وتملا ما بين الحزم. نسيج ضام متين يقاوم الشد ويوسد العصب في مسيره بين العضلات والعظام، وهو الذي يخاط اولا حين يقطع العصب في جراحة الاصلاح.',
          en: 'The dense outer layer that wraps the whole nerve and fills the spaces between fascicles. A tough connective tissue that resists pulling and pads the nerve on its way between muscles and bones, and it is what is stitched first when a cut nerve is repaired.'
        }
      },
      {
        ar: 'غلاف الحزمة (البيرينيوريوم)', en: 'Perineurium', x: 57, y: 31, side: 'right',
        desc: {
          ar: 'الحلقات الكريمية المتراصة حول كل حزمة. هي اقوى الاغلفة واحكمها، وتعمل حاجزا مغلقا يحمي الالياف من مواد الدم ويحفظ بيئتها الكيميائية ثابتة تماما كما يفعل الحاجز الدماغي.',
          en: 'The layered cream rings around each fascicle. It is the strongest and tightest of the sheaths, forming a sealed barrier that keeps blood-borne substances away from the fibres and holds their chemical surroundings perfectly steady, much as the brain barrier does.'
        }
      },
      {
        ar: 'الألياف العصبية المميلنة', en: 'Myelinated nerve fibres', x: 73, y: 38, side: 'right', go: 'neuron',
        desc: {
          ar: 'الحلقات الصفراء الكثيرة داخل كل حزمة، كل حلقة مقطع عرضي في ليف عصبي. الحلقة الصفراء هي الغمد والنقطة الشاحبة في وسطها هي المحور نفسه. لاحظ اختلاف الاقطار: الالياف الغليظة اسرع نقلا وتحمل الحركة واللمس الدقيق، والرفيعة ابطا وتحمل الالم والحرارة.',
          en: 'The many yellow rings inside each fascicle, every ring a cross-section through one nerve fibre. The yellow ring is the sheath and the pale dot in its middle is the axon itself. Notice how the diameters differ: thick fibres conduct fastest and carry movement and fine touch, while thin ones are slower and carry pain and temperature.'
        }
      },
      {
        ar: 'النسيج بين الألياف (الإندونيوريوم)', en: 'Endoneurium', x: 75, y: 53, side: 'right',
        desc: {
          ar: 'الشبكة البيضاء الرقيقة التي تملا الفراغ بين الالياف داخل الحزمة. تعزل كل ليف عن جاره فلا تختلط الاشارات، وتترك بعد اصابة العصب انفاقا فارغة يزحف فيها الليف الجديد ليجد طريقه الى هدفه القديم.',
          en: 'The fine white web filling the space between fibres inside a fascicle. It insulates each fibre from its neighbour so signals do not cross, and after an injury it leaves empty tunnels along which a regrowing fibre can crawl back to its old target.'
        }
      },
      {
        ar: 'غمد الميالين والمحور', en: 'Myelin sheath and axon', x: 86, y: 62, side: 'right', go: 'neuron',
        desc: {
          ar: 'الحلقة الصفراء غمد دهني تلفه خلايا خاصة حول المحور كالعازل حول السلك، وينقطع كل مسافة قصيرة عند عقد. الاشارة تقفز من عقدة الى عقدة بدل ان تزحف على الغمد، ولهذا تصل سرعتها الى ١٢٠ مترا في الثانية.',
          en: 'The yellow ring is a fatty sheath that special cells wind around the axon like insulation on a wire, broken every short distance at a node. The signal leaps from node to node instead of creeping along the sheath, and that is how it reaches speeds of 120 metres a second.'
        }
      },
      {
        ar: 'حزمة عصبية أخرى', en: 'Another fascicle', x: 66, y: 72, side: 'right',
        desc: {
          ar: 'العصب الكبير يقسم الى عدة حزم لا حزمة واحدة، وترتيبها ليس عشوائيا: كل حزمة تقصد وجهة مختلفة. ولهذا قد يشل قطع جزئي للعصب حركة واحدة ويترك غيرها سليمة.',
          en: 'A large nerve divides into several fascicles rather than one, and their arrangement is not random: each fascicle is bound for a different destination. That is why a partial cut of a nerve can paralyse one movement and leave others untouched.'
        }
      },
      {
        ar: 'وعاء دموي صغير', en: 'Small blood vessel', x: 53, y: 78, side: 'right',
        desc: {
          ar: 'وريد صغير في الغلاف. ضغط طويل على العصب يقفل هذه الاوعية قبل ان يؤذي الالياف، ومن هنا يخدر الطرف اذا جلست طويلا على وضع واحد: الشعور يعود بمجرد ان يعود الدم.',
          en: 'A small vein in the sheath. Prolonged pressure on a nerve closes these vessels before it harms the fibres, and that is why a limb goes numb if you sit in one position too long. Feeling comes back the moment the blood does.'
        }
      }
    ],
    desc: {
      ar: 'العصب الطرفي حبل يخرج من النخاع الشوكي أو جذع الدماغ ليصل بقية الجسم، وهو مبني مثل الكابل الكهربائي طبقة فوق طبقة. في القلب ألياف عصبية دقيقة، كل ليف امتداد لخلية عصبية وملفوف بغمد ميالين دهني. تجتمع الألياف في حزم يلف كل حزمة غلافها المحكم، ثم تجتمع الحزم كلها في غلاف خارجي متين تمشي فيه أوعية دموية تغذي العصب. والمقطع في الصورة من العصب الوركي، وهو أضخم أعصاب الجسم.',
      en: 'A peripheral nerve is a cord leaving the spinal cord or brainstem to reach the rest of the body, and it is built like an electrical cable, layer upon layer. At its heart are fine nerve fibres, each the extension of one nerve cell and wrapped in a fatty myelin sheath. The fibres gather into fascicles, each fascicle sealed in its own tight wrapping, and all the fascicles are gathered in a tough outer sheath through which blood vessels run to feed the nerve. The section shown here is from the sciatic nerve, the thickest in the body.'
    },
    func: {
      ar: 'نقل الإشارات في اتجاهين على السلك نفسه: ألياف حركية تنزل من الدماغ والنخاع إلى العضلات تأمرها بالانقباض، وألياف حسية تصعد من الجلد والمفاصل والأحشاء تحمل اللمس والألم والحرارة والإحساس بوضع الطرف. وغمد الميالين هو ما يجعل الإشارة تقفز من عقدة إلى عقدة فتصل سرعتها إلى نحو ١٢٠ مترا في الثانية بدل بضعة أمتار. والعصب الطرفي، بخلاف النخاع الشوكي، قادر على النمو من جديد إذا قطع، لكن ببطء نحو ملليمتر واحد في اليوم.',
      en: 'Carrying signals in two directions along the same cable: motor fibres running down from the brain and cord to order muscles to contract, and sensory fibres running up from skin, joints and viscera with touch, pain, temperature and the sense of where a limb is. The myelin sheath is what lets the signal leap from node to node, reaching about 120 metres a second instead of a few. And unlike the spinal cord, a peripheral nerve can grow back if it is cut, though slowly, about one millimetre a day.'
    },
    location: { ar: 'في كل أنحاء الجسم خارج الدماغ والنخاع الشوكي: تخرج الأعصاب من بين الفقرات وتتفرع إلى الأطراف والجذع والجلد والأحشاء', en: 'Everywhere in the body outside the brain and spinal cord: the nerves emerge between the vertebrae and branch to the limbs, trunk, skin and viscera' },
    size: { ar: 'قطر العصب الوركي نحو ١٫٥ سم عند أعرض موضع فيه، وقطر الليف العصبي الواحد بين ١ و٢٠ ميكرون', en: 'The sciatic nerve is about 1.5 cm across at its widest, while a single nerve fibre is 1 to 20 microns' },
    short: { ar: 'كابل حي: ألياف داخل حزم داخل غلاف، وله أوعيته الخاصة', en: 'A living cable: fibres inside fascicles inside a sheath, with vessels of its own' },
    parts: [
      { ar: 'الغلاف الخارجي (الأبينيوريوم)', en: 'The epineurium' },
      { ar: 'غلاف الحزمة (البيرينيوريوم)', en: 'The perineurium' },
      { ar: 'النسيج بين الألياف (الإندونيوريوم)', en: 'The endoneurium' },
      { ar: 'الألياف المميلنة وأوعية الغلاف', en: 'The myelinated fibres and the vessels of the sheath' }
    ],
    diseases: [
      { name: { ar: 'عرق النسا', en: 'Sciatica' }, desc: { ar: 'ألم ينزل من الأرداف إلى الساق بسبب ضغط على العصب الوركي أو جذوره', en: 'Pain running from the buttock down the leg from pressure on the sciatic nerve or its roots' } },
      { name: { ar: 'اعتلال الأعصاب السكري', en: 'Diabetic neuropathy' }, desc: { ar: 'تلف الألياف الدقيقة من السكر المرتفع، فيبدأ خدر وحرقان في القدمين', en: 'High blood sugar damages the fine fibres, starting as numbness and burning in the feet' } },
      { name: { ar: 'متلازمة النفق الرسغي', en: 'Carpal tunnel syndrome' }, desc: { ar: 'انضغاط العصب الناصف في الرسغ فيخدر الإبهام والسبابة والوسطى ليلا', en: 'The median nerve is squeezed at the wrist, numbing the thumb, index and middle finger at night' } },
      { name: { ar: 'متلازمة غيلان باريه', en: 'Guillain-Barre syndrome' }, desc: { ar: 'مناعة تهاجم غمد الميالين بعد عدوى فيحدث ضعف صاعد سريع من القدمين', en: 'Immunity attacks the myelin after an infection, causing a fast weakness climbing from the feet' } },
      { name: { ar: 'إصابة العصب المقطوع', en: 'Nerve transection injury' }, desc: { ar: 'قطع العصب بجرح فيفقد الطرف حركته وإحساسه، ونموه من جديد بطيء نحو ملليمتر في اليوم', en: 'A wound severs the nerve, the limb loses movement and feeling, and regrowth is slow at about a millimetre a day' } }
    ]
  }
]);

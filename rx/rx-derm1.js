/* ============================================================
   موسوعة الأدوية — أجسام بطاقات دفعة الجلد الأولى (derm1)
   rx/rx-derm1.js   (يُحمَّل عند فتح البطاقة)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. الجرعة يحدّدها طبيب أو صيدلي.
   كل بطاقة كُتبت من نشرات رسمية مفتوحة وقت الكتابة، وروابطها في src.
   ============================================================ */

var RX_BODY = window.RX_BODY || {};

RX_BODY['benzoyl-peroxide'] = {
  what: {
    ar: 'بيروكسيد البنزويل دواء موضعي لحبّ الشباب يُصرف بلا وصفة، ويأتي غسولاً وصابونة وجلاً وكريماً ولوشناً بتراكيز متدرّجة. وليس مضاداً حيوياً وإن كان يقتل البكتيريا، وهذا فرق جوهري: البكتيريا لم يُسجَّل لها مقاومة ضدّه كما تفعل مع المضادات، ولهذا يُضاف إلى المضاد الموضعي أو الفموي في علاج الحبّ ليحمي المضاد من فقد فاعليته. ويدخل جاهزاً في مستحضرات مركّبة مع الأدابالين أو الكليندامايسين.',
    en: 'Benzoyl peroxide is a topical acne medicine sold without prescription, coming as a wash, a bar, a gel, a cream and a lotion in graded strengths. It is not an antibiotic even though it kills bacteria, and that difference matters: no resistance to it has been recorded, unlike with antibiotics, which is why it is added to a topical or oral antibiotic in acne treatment to protect that antibiotic from losing its power. It also comes ready-combined with adapalene or clindamycin.'
  },
  why: {
    ar: 'يُستعمل في حبّ الشباب الخفيف إلى المتوسط: الرؤوس السوداء والبيضاء والبثور الملتهبة على الوجه والظهر والصدر. وهو من أوائل ما يُجرَّب لأنه متاح ورخيص ومفعوله مدروس. لكن أثره لا يظهر بين يوم وليلة بل بعد أسابيع من الاستعمال المنتظم، وهذا أكثر ما يجعل الناس يتركونه ظنّاً أنه لا ينفع. أما الحبّ الشديد ذو العقد والأكياس تحت الجلد فلا يكفيه هذا الدواء، ويحتاج طبيباً لأن تأخير علاجه يخلّف ندبات دائمة.',
    en: 'It is used in mild to moderate acne: blackheads, whiteheads and inflamed spots on the face, back and chest. It is among the first things tried because it is available, cheap and well studied. But its effect does not appear overnight; it takes weeks of regular use, and this is the commonest reason people abandon it believing it does not work. Severe acne with nodules and cysts under the skin is not enough served by this medicine and needs a doctor, because delaying its treatment leaves permanent scars.'
  },
  how: {
    ar: 'يتحوّل الدواء بعد نفاذه إلى الجلد إلى حمض البنزويك، فيطلق أنواعاً نشطة من الأكسجين الحرّ داخل المسامّ. وهذه الجزيئات المؤكسدة تهاجم بروتينات البكتيريا المسبّبة للحبّ فتقتلها قتلاً كيميائياً فيزيائياً لا دوائياً، ولهذا لا تستطيع البكتيريا أن تتحوّر لتقاومه كما تقاوم المضادات الحيوية. ويقشّر في الوقت نفسه سطح الجلد قليلاً فيفتح المسامّ المسدودة، فيجتمع فيه أثران معاً: قتل الجرثومة وفتح المسمّ الذي تعيش فيه.',
    en: 'Once it penetrates the skin the drug converts to benzoic acid and releases active free-radical oxygen species inside the pore. These oxidising molecules attack the proteins of the acne bacterium and kill it by a chemical, physical action rather than a pharmacological one, which is why the bacterium cannot mutate to resist it the way it resists antibiotics. At the same time it lightly peels the skin surface and opens blocked pores, so two effects come together in it: killing the germ and opening the pore it lives in.'
  },
  effects: {
    ar: 'أكثر ما يحدث جفاف الجلد وتقشّره واحمراره وحرقة أو لسعة عند الوضع، وهذه تصيب أكثر من واحد من كل عشرة، وتخفّ بإنقاص عدد مرات الاستعمال وبالترطيب المنتظم ومرهم للشفاه. والاحمرار قد يكون أقلّ ظهوراً على البشرة الداكنة فلا يعني غيابُه سلامةَ الجلد. وله أثر مشهور لا علاقة له بالصحة: يقصّر لون الشعر والملابس والمناشف وأغطية الوسائد، فيُترك ليجفّ قبل اللبس ويُستعمل معه بياض أو ما لا يهمّ لونه.',
    en: 'The commonest effects are dry skin, peeling, redness and burning or stinging on application; these affect more than one person in ten and ease with fewer applications, regular moisturising and a lip balm. Redness may be less visible on darker skin, so its absence does not prove the skin is unharmed. It also has a famous effect unrelated to health: it bleaches hair, clothes, towels and pillowcases, so it is left to dry before dressing and used with white items or ones whose colour does not matter.'
  },
  warning: {
    ar: 'توقّف عن الدواء واطلب المساعدة العاجلة إذا تورّم الجلد المعالَج أو ظهرت عليه فقاعات، فهذا ليس تهيّجاً عادياً. واطلب الطوارئ فوراً إن تورّمت الشفتان أو الفم أو اللسان أو الحلق، أو صار التنفّس سريعاً أو صعباً أو فيه أزيز أو إحساس باختناق، أو ضاق البلع، أو تغيّر لون الجلد أو اللسان إلى الأزرق أو الرمادي أو الشحوب، أو جاءك ارتباك أو نعاس مفاجئ أو فقدان وعي. وإن لم تتحسّن بشرتك بعد يومين من التهيّج أو ازداد الأمر سوءاً فهذا موعد عند الطبيب لا زيادة في الكمية.',
    en: 'Stop the medicine and seek urgent help if the treated skin becomes swollen or blisters appear on it, because that is not ordinary irritation. Get emergency help at once if the lips, mouth, tongue or throat swell, if breathing becomes fast or difficult or wheezy or there is a choking sensation, if swallowing tightens, if the skin or tongue turns blue, grey or pale, or if sudden confusion, drowsiness or loss of consciousness occurs. And if the irritation has not settled after a couple of days or is getting worse, that is an appointment with a doctor, not more of the medicine.'
  },
  interact: {
    ar: 'لا يُجمع مع التريتينوين الموضعي في وقت واحد لأنه يؤكسده فيُضعف مفعوله، بينما الأدابالين يصمد أمام الأكسدة فالجمع معه سليم بل تُصنع منهما علبة واحدة. ومع الهيدروكينون تزيد التهيّج، ومع الدابسون الموضعي قد يصبغ الجلد والشعر بلون مصفرّ برتقالي مؤقّت. وتجنّب معه الصابون الخشن والمقشّرات الحبيبية والمستحضرات الكحولية فكلّها تضاعف الجفاف. وقلّل التعرّض للشمس أثناء استعماله ما لم يقل طبيبك غير ذلك.',
    en: 'It is not combined with topical tretinoin at the same time because it oxidises it and weakens its effect, whereas adapalene withstands oxidation, so combining them is sound and the two are even sold in one tube. With hydroquinone irritation increases, and with topical dapsone it may stain skin and hair a temporary yellow-orange. Avoid harsh soaps, abrasive scrubs and alcohol-based preparations alongside it, as all of these double the dryness. And limit sun exposure while using it unless your doctor says otherwise.'
  },
  avoid: {
    ar: 'لا يستعمله من سبق أن تحسّس منه أو من أي مكوّن في العلبة. ولا يُوضع على جلد متشقّق أو مجروح أو ملتهب، ولا يُترك يصل العينين أو الفم أو الأنف. والأطفال دون الثانية عشرة لا يُعطونه إلا بمشورة طبيب. ومن عنده حبّ شديد بعقد وأكياس يحتاج طبيباً لا علبة من الصيدلية، لأن هذا النوع يترك ندبات إن أُهمل. أما الحمل والرضاعة فامتصاصه من الجلد ضئيل جداً، ومع ذلك أخبري طبيبك قبل البدء ليقرّر هو.',
    en: 'It is not for anyone who has reacted to it or to any ingredient in the pack. It is not applied to cracked, broken or inflamed skin, and must not be allowed to reach the eyes, mouth or nose. Children under twelve should not be given it except on a doctor\'s advice. Anyone with severe acne with nodules and cysts needs a doctor rather than a pharmacy pack, because that type scars if neglected. In pregnancy and breastfeeding absorption through the skin is very small, but tell your doctor before starting and let the decision be theirs.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a601026.html',
    'https://www.nhs.uk/medicines/benzoyl-peroxide/side-effects-of-benzoyl-peroxide/',
    'https://www.nhs.uk/medicines/benzoyl-peroxide/who-can-and-cannot-use-benzoyl-peroxide/',
    'https://www.ncbi.nlm.nih.gov/books/NBK537220/'
  ]
};

RX_BODY['salicylic-acid'] = {
  what: {
    ar: 'حمض الساليسيليك حمض من زمرة بيتا هيدروكسي، يُستعمل على الجلد وحده مقشّراً، ويأتي كريماً ولوشناً وجلاً ومناديل مشبعة وشامبواً ومحلولاً للثآليل وبلاستراً للمسامير. وتراكيزه متباعدة جداً: ما يُوضع على بشرة الوجه غير ما يُوضع على الثؤلول في باطن القدم. وهو قريب كيميائياً من الأسبرين، ومن هذه القرابة يجيء تحذيره الوحيد المهمّ حين يُمتصّ من مساحة واسعة. ولهذا تنصح النشرة بتجربته على موضع صغير أولاً قبل تعميمه، ولا تُعامَل العلبة القوية معاملة الخفيفة.',
    en: 'Salicylic acid is a beta-hydroxy acid used on the skin as a keratolytic. It comes as a cream, lotion, gel, medicated pads, a shampoo, a wart paint and a corn plaster. Its strengths are very far apart: what goes on the face daily is not what goes on a wart on the sole of the foot. It is chemically a relative of aspirin, and from that kinship comes its one important warning when it is absorbed from a wide area. This is why the leaflet advises trying it on a small area first before using it generally, and a strong pack is not treated like a mild one.'
  },
  why: {
    ar: 'يُستعمل في حبّ الشباب فيُنقص الاحمرار والتورّم ويفتح المسامّ المسدودة، وفي الأمراض التي تُنتج قشراً سميكاً كالصدفية وقشرة الرأس والتهاب الجلد الدهني، وفي المسامير والجساءات، وفي ثآليل اليدين والقدمين. ويُضاف إلى علاجات أخرى في الجلد السميك ليفتح لها الطريق، كما في سعفة القدم حين تتقرّن الأخمصان فلا ينفذ مضاد الفطريات وحده. ولا يُستعمل على ثآليل المنطقة التناسلية ولا ثآليل الوجه ولا على الشامات.',
    en: 'It is used in acne, where it reduces redness and swelling and unblocks pores; in conditions that produce thick scale such as psoriasis, dandruff and seborrhoeic dermatitis; on corns and calluses; and on warts of the hands and feet. It is also added to other treatments on thickened skin to open the way for them, as in athlete\'s foot when the soles harden and an antifungal alone cannot penetrate. It is not used on genital warts, on facial warts, or on moles.'
  },
  how: {
    ar: 'الطبقة الخارجية من الجلد خلايا ميتة يمسك بعضها بعضاً بمادة لاصقة بينها. ويعمل الحمض على هذه المادة فيذيبها ويرخي تماسك الطبقة القرنية، فتتساقط القشرة والجلد السميك ويسهل إزالتهما. وهو دهني الميل أكثر من غيره من الأحماض، فينفذ في الزيت داخل المسمّ ويعمل من داخله لا على سطحه وحده، ولهذا يناسب البشرة الدهنية والرؤوس السوداء. وبتقشيره السطح يزيد كذلك نفاذ ما يُوضع فوقه من أدوية.',
    en: 'The outer layer of the skin is dead cells held to one another by an adhesive substance between them. The acid acts on that substance, dissolving it and loosening the horny layer, so scale and thickened skin shed and are easily removed. It is more oil-loving than the other acids, so it penetrates the oil inside the pore and works from within it rather than on the surface alone, which suits oily skin and blackheads. By peeling the surface it also increases the penetration of whatever is applied over it.'
  },
  effects: {
    ar: 'أكثر ما يُشتكى منه تهيّج الجلد ولسعة في موضع الوضع، مع جفاف وتقشّر واحمرار خفيف. وهذه تزيد كلّما زاد التركيز أو تكرّر الاستعمال أو وُضع على جلد رقيق أو متشقّق. ولهذا تُوصي النشرة بتجربة كمية صغيرة على موضع أو موضعين صغيرين قبل تعميم الاستعمال، لتعرف كيف يتصرّف جلدك قبل أن تضعه على مساحة أوسع. وفي الشامبو قد يجفّ فروة الرأس والشعر إن تُرك طويلاً قبل الشطف. وعلى الثآليل والمسامير يبيضّ الجلد المعالَج ويلين ثم يُزال، وهذا عمل الدواء المقصود لا أثراً جانبياً.',
    en: 'What people complain of most is skin irritation and stinging at the site of application, with dryness, peeling and mild redness. These increase the higher the strength, the more often it is used, and the thinner or more cracked the skin it goes on. That is why the leaflet advises trying a small amount on one or two small areas before using it generally, so you learn how your skin behaves before putting it on a wider area. In shampoo form it may dry the scalp and hair if left long before rinsing. On warts and corns the treated skin whitens and softens before being removed, and that is the medicine\'s intended work rather than a side effect.'
  },
  warning: {
    ar: 'توقّف فوراً واطلب المساعدة العاجلة إن ظهرت عليك علامات امتصاص الساليسيلات في الدم: ارتباك، أو دوخة، أو تعب أو ضعف شديد، أو صداع، أو تنفّس سريع، أو رنين أو طنين في الأذنين، أو نقص في السمع، أو غثيان أو قيء أو إسهال. وهذه تحدث حين يُوضع على مساحة واسعة أو على جلد متشقّق أو عند الأطفال. واطلب الطوارئ عند شرى أو ضيق في الحلق أو صعوبة تنفّس أو تورّم الوجه. ولا تضعه على جلد مجروح أو ملتهب، ولا تقربه من العينين والأنف والفم.',
    en: 'Stop at once and seek urgent help if signs of salicylate absorption into the blood appear: confusion, dizziness, extreme tiredness or weakness, headache, fast breathing, ringing or buzzing in the ears, hearing loss, nausea, vomiting or diarrhoea. These occur when it is applied over a wide area, on broken skin, or in children. Get emergency help for hives, throat tightness, difficulty breathing or swelling of the face. Do not apply it to broken or inflamed skin, and keep it away from the eyes, nose and mouth.'
  },
  interact: {
    ar: 'لا يُجمع مع بيروكسيد البنزويل ولا مع التريتينوين ولا مع مستحضرات ساليسيلات الميثيل ولا مع الأسبرين دون استشارة، لأن الجمع يضاعف التهيّج أو يضاعف كمية الساليسيلات الداخلة إلى الجسم. ويزيد نفاذَ ما يُوضع فوقه من أدوية موضعية بحكم تقشيره للسطح، وهذا مقصود أحياناً في الجلد السميك لكنه يزيد أثر ذلك الدواء وتهيّجه معاً. وكل مقشّر آخر أو مقشّر حبيبي أو مستحضر كحولي يُستعمل معه يضاعف الجفاف.',
    en: 'It is not combined with benzoyl peroxide, tretinoin, methyl salicylate preparations or aspirin without advice, because combining doubles the irritation or doubles the amount of salicylate entering the body. Because it peels the surface, it increases the penetration of any topical medicine applied over it; this is sometimes deliberate on thickened skin, but it raises both that drug\'s effect and its irritation. Any other exfoliant, abrasive scrub or alcohol-based preparation used with it doubles the dryness.'
  },
  avoid: {
    ar: 'لا يُعطى للأطفال والمراهقين المصابين بجدري الماء أو الإنفلونزا إلا بموافقة الطبيب، خشية متلازمة راي وهي أذى خطير للكبد والدماغ يرتبط بالساليسيلات في العدوى الفيروسية. ومن عنده سكّري أو مرض في الأوعية الدموية أو في الكلى أو الكبد يخبر طبيبه قبل البدء، لأن ضعف الإحساس والتروية في القدم السكّرية يجعل التقشير القوي مصدر قرحة لا علاج. ولا يُوضع على الثآليل التناسلية ولا على ثآليل الوجه ولا على الشامات ولا على مساحات واسعة.',
    en: 'It is not given to children and teenagers who have chickenpox or flu without a doctor\'s approval, for fear of Reye syndrome, a serious injury to liver and brain linked to salicylates during viral infection. Anyone with diabetes, blood vessel disease, or kidney or liver disease should tell their doctor before starting, because reduced sensation and blood flow in the diabetic foot turn strong peeling into a source of ulcers rather than a treatment. It is not applied to genital warts, facial warts, moles, or over wide areas.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a607072.html',
    'https://www.ncbi.nlm.nih.gov/books/NBK562206/',
    'https://www.ncbi.nlm.nih.gov/books/NBK430879/'
  ]
};

RX_BODY['coal-tar'] = {
  what: {
    ar: 'قطران الفحم سائل داكن ثقيل الرائحة يُستخرج بتقطير الفحم الحجري، وهو من أقدم ما استُعمل في أمراض الجلد وما زال في قائمة منظمة الصحة للأدوية الأساسية. يأتي شامبواً وغسولاً وكريماً ومرهماً ومحلولاً يُضاف إلى ماء الاستحمام، وأغلب أشكاله تُباع بلا وصفة. وهو ليس دواءً واحداً بل خليط من مئات المركّبات، ولهذا تختلف قوّة المستحضرات باختلاف نسبة القطران فيها، ولا يُقاس شامبو يُشطف بعد دقائق بمرهم يبقى على الجلد ليلة كاملة.',
    en: 'Coal tar is a dark, heavily scented liquid obtained by distilling coal. It is among the oldest things used in skin disease and is still on the World Health Organization list of essential medicines. It comes as a shampoo, a wash, a cream, an ointment and a solution added to bath water, and most of its forms are sold without prescription. It is not one drug but a mixture of hundreds of compounds, which is why preparations differ in strength according to their tar content, and a shampoo rinsed off after minutes is not comparable to an ointment left on the skin all night.'
  },
  why: {
    ar: 'يُستعمل لتخفيف الحكّة والتقشّر والتوسّف والاحمرار والتهيّج المصاحبة للصدفية والتهاب الجلد الدهني وقشرة الرأس، ولمنع رجوعها بالاستعمال المنتظم. وهو خيار مفيد في الصدفية الخفيفة إلى المتوسطة، ويُستعمل وحده أو مع العلاج بالأشعة فوق البنفسجية ضيّقة النطاق في برنامج قديم مدروس. ومكانه الطبيعي فروة الرأس والجذع والأطراف، لا الوجه ولا الثنيات ولا المناطق الحسّاسة إلا بأمر طبيب.',
    en: 'It is used to relieve the itching, scaling, flaking, redness and irritation that accompany psoriasis, seborrhoeic dermatitis and dandruff, and to prevent their recurrence with regular use. It is a useful option in mild to moderate psoriasis, used alone or alongside narrowband ultraviolet phototherapy in a long-established, well-studied programme. Its natural place is the scalp, trunk and limbs, not the face, the skin folds or sensitive areas except on a doctor\'s instruction.'
  },
  how: {
    ar: 'الصدفية إسراع في تكاثر خلايا الجلد: تنضج الخلية وتصعد إلى السطح في أيام قليلة بدل أسابيع، فتتراكم قبل أن تتساقط وتتكوّن اللويحة السميكة الفضّية. ويعمل القطران على هذين الطرفين معاً: يكبح تكاثر الخلايا القرنية فيبطّئ الإنتاج المتسارع، ويُنقص الالتهاب الذي يغذّي الدورة ويصنع الاحمرار والحكّة. ولهذا يخفّ السُّمك والقشر معاً لا الحكّة وحدها، ويستمرّ أثره مدّة بعد ترك الاستعمال.',
    en: 'Psoriasis is an acceleration of skin cell reproduction: the cell matures and rises to the surface in a few days instead of weeks, so it piles up before shedding and the thick silvery plaque forms. Tar acts on both ends of this at once: it inhibits keratinocyte proliferation and so slows the runaway production, and it reduces the inflammation that feeds the cycle and creates the redness and itch. That is why thickness and scale both ease rather than the itch alone, and its effect persists for a while after use stops.'
  },
  effects: {
    ar: 'أكثر ما يقع تهيّج الجلد واحمراره، والتهاب الجريبات وهو بثور صغيرة حول بصيلات الشعر في موضع الوضع، وحساسية ضوئية تجعل الجلد يحترق بالشمس أسرع من عادته. وفي حالات نادرة يتغيّر لون الشعر الرمادي أو الأشقر أو المصبوغ بلون فاتح. وتبقى شكواه الكبرى غير طبية: الرائحة النافذة وتلطيخ الملابس وأغطية الفراش والمناشف بلون لا يخرج، وهذا وحده هو ما يجعل كثيرين يتركونه لا ضعف مفعوله.',
    en: 'The commonest effects are skin irritation and redness, folliculitis (small spots around the hair follicles where it was applied), and photosensitivity that makes the skin burn in the sun faster than usual. In rare cases grey, blond or bleached hair changes colour. Its great complaint remains a non-medical one: the penetrating smell and the staining of clothes, bedding and towels with a colour that does not wash out; this alone, rather than any weakness of effect, is what makes many people abandon it.'
  },
  warning: {
    ar: 'احذر الشمس بعد وضعه: يزيد ميل الجلد للاحتراق لمدة تصل إلى يوم كامل من وقت الوضع، فغطّ الموضع أو تجنّب الشمس. وتوقّف واستشر الطبيب إن ساءت حالتك أو لم تتحسّن مع الاستعمال المنتظم كما هو موصوف. وتوقّف فوراً عند حرقة شديدة أو تقرّح أو تفقّع أو اتّساع الاحمرار مع سخونة وصديد وحمّى، فهذه عدوى لا تهيّج. ولا يُستعمل مع علاج آخر للصدفية أو مع الأشعة فوق البنفسجية إلا بأمر الطبيب، ولا لمدد طويلة بلا متابعة. وإن ابتُلع فاطلب مركز السموم فوراً.',
    en: 'Beware of the sun after applying it: it increases the skin\'s tendency to burn for up to a full day from the time of application, so cover the area or avoid the sun. Stop and consult a doctor if your condition worsens or does not improve with regular use as directed. Stop at once for severe burning, ulceration, blistering, or spreading redness with heat, pus and fever, as that is infection rather than irritation. It is not used with another psoriasis treatment or with ultraviolet light except on a doctor\'s instruction, nor for prolonged periods without review. If swallowed, contact poison control immediately.'
  },
  interact: {
    ar: 'أهمّ تعارضاته هو مع الضوء: لا يُجمع مع العلاج بالأشعة فوق البنفسجية ولا مع أي دواء آخر للصدفية إلا بترتيب من الطبيب، لأن الجمع غير المدروس يحرق الجلد بدل أن يعالجه. وينبغي الانتباه لكل ما يزيد الحساسية للضوء معه في الوقت نفسه، ومنها الكالسيبوتريول الموضعي الذي يزيد حساسية الجلد للأشعة فوق البنفسجية. وعلى الجلد نفسه لا يُكدَّس فوقه مقشّر قوي كحمض الساليسيليك دون توجيه، لأن التهيّج يتضاعف.',
    en: 'Its most important interaction is with light: it is not combined with ultraviolet phototherapy or with any other psoriasis medicine except as arranged by a doctor, because an unplanned combination burns the skin instead of treating it. Attention should be paid to anything else that increases light sensitivity used at the same time, including topical calcipotriol, which raises the skin\'s sensitivity to ultraviolet rays. On the skin itself, a strong keratolytic such as salicylic acid should not be layered over it without guidance, as the irritation multiplies.'
  },
  avoid: {
    ar: 'لا يُعطى للأطفال دون الثانية عشرة إلا بتوجيه الطبيب. ويُتجنّب عادةً في الحمل والرضاعة. ولا يُوضع على جلد مجروح أو ملتهب التهاباً حادّاً أو متقيّح، ولا على الوجه ولا حول العينين ولا على المنطقة التناسلية إلا بأمر طبيب. ومن تحسّس منه سابقاً لا يعود إليه. وتحمل عبواته في بعض البلدان تحذيراً تنظيمياً بأن القطران من المواد المصنَّفة مسرطنة، مع أن الخطر السرطاني من استعماله الطبي على الجلد لم يثبت في الدراسات.',
    en: 'It is not given to children under twelve except on a doctor\'s direction, and is generally avoided in pregnancy and breastfeeding. It is not applied to broken skin, acutely inflamed or infected skin, the face, around the eyes, or the genital area except on a doctor\'s instruction. Anyone who has reacted to it before should not return to it. In some countries its packs carry a regulatory warning that tar is classified as a carcinogen, although a cancer risk from its medical use on skin has not been proven in studies.'
  },
  updated: '2026-09-10',
  src: [
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=407bd007-bec6-2864-e054-00144ff88e88',
    'https://www.ncbi.nlm.nih.gov/books/NBK430879/'
  ]
};

RX_BODY['calcipotriol'] = {
  what: {
    ar: 'الكالسيبوتريول نظير صناعي لفيتامين د الثالث صُمّم ليعمل في الجلد ويكاد لا يرفع كالسيوم الدم بالكميات المعتادة. يُصرف بوصفة، ويأتي كريماً ومرهماً ومحلولاً لفروة الرأس ورغوة، وكثيراً ما يُصنع مع كورتيزون قوي في علبة واحدة لأن اجتماعهما أقوى من كلٍّ وحده. وهو دواء يضبط الصدفية ولا يشفيها، فرجوع اللويحات بعد تركه ليس فشلاً بل طبيعة المرض. ويُعرف في أمريكا باسم الكالسيبوترين، وهو الاسم نفسه للمادة نفسها فلا يُظنّ دواءً آخر عند قراءة النشرات الأجنبية.',
    en: 'Calcipotriol is a synthetic analogue of vitamin D3, designed to act in the skin and barely raise blood calcium at the usual amounts. It is prescription-only and comes as a cream, an ointment, a scalp solution and a foam, and is often made with a potent corticosteroid in one pack because together they are stronger than either alone. It is a medicine that controls psoriasis rather than curing it, so plaques returning after it is stopped is the nature of the disease, not a failure. In the United States it is called calcipotriene, the same name for the same substance, so it should not be mistaken for a different drug when reading foreign leaflets.'
  },
  why: {
    ar: 'يُوصف لصدفية اللويحات على الجلد وفروة الرأس، وهي الصورة الأشيع من المرض: بقع سميكة حمراء مغطّاة بقشر فضّي على المرفقين والركبتين والظهر والفروة. وهو من الخيارات الأولى في الحالات الخفيفة والمتوسطة، ومنفعته أنه يُنقص الاعتماد على الكورتيزون الموضعي الطويل. ولا يظهر أثره سريعاً: يبدأ التحسّن بعد أسبوعين تقريباً وقد يحتاج شهرين ليبلغ منتهاه، فالحكم عليه في أيامه الأولى حكم مبكّر.',
    en: 'It is prescribed for plaque psoriasis on the skin and scalp, the commonest form of the disease: thick red patches covered with silvery scale on the elbows, knees, back and scalp. It is among the first choices in mild and moderate disease, and its benefit is that it reduces reliance on long-term topical corticosteroids. Its effect is not quick: improvement begins after about a fortnight and may need two months to reach its peak, so judging it in its first days is judging it too early.'
  },
  how: {
    ar: 'خلايا الجلد في الصدفية تتكاثر بسرعة مفرطة وتصل السطح قبل أن تنضج، فتتراكم لويحةً سميكة قشرية. ويرتبط الكالسيبوتريول بمستقبل فيتامين د داخل الخلية القرنية فيبعث إليها رسالتين: أبطئي التكاثر، وانضجي نضجاً طبيعياً. وبهاتين معاً ترقّ اللويحة ويقلّ قشرها ويهدأ احمرارها. وهو مصنوع خصّيصاً ليعمل هذا العمل في الجلد دون أن يعبث بتوازن الكالسيوم في الجسم، وهذا ما يفرّقه عن فيتامين د الذي يُبلع.',
    en: 'In psoriasis the skin cells multiply excessively fast and reach the surface before maturing, piling up into a thick scaly plaque. Calcipotriol binds the vitamin D receptor inside the keratinocyte and sends it two messages: slow your multiplication, and mature normally. With these two together the plaque thins, its scale lessens and its redness settles. It was purpose-built to do this work in the skin without disturbing the body\'s calcium balance, and that is what separates it from swallowed vitamin D.'
  },
  effects: {
    ar: 'أكثر ما يحدث تهيّج موضعي: حكّة أو احمرار أو طفح أو حرقة أو لسعة أو وخز أو جفاف في موضع الدهن، وقد تسوء الصدفية نفسها مؤقّتاً في بدايته. ويصيب هذا التهيّج نحو ثلث من يستعملونه، لكنه في الغالب يهدأ مع الاستمرار ولا يستدعي التوقّف. والجلد الرقيق أشدّ تأثّراً، ولهذا يُمنع على الوجه. ومحلول فروة الرأس قابل للاشتعال فيُبعَد عن اللهب والحرارة ولا يُدخَّن بعد وضعه مباشرة. أما ارتفاع كالسيوم الدم وكبح هرمون جارات الدرقية فنادران، ويقعان أساساً عند تجاوز السقف الأسبوعي أو عند اعتلال الكلية.',
    en: 'The commonest effect is local irritation: itching, redness, rash, burning, stinging, tingling or dryness where it is rubbed in, and the psoriasis itself may temporarily worsen at the start. This irritation affects about a third of users, but it usually settles with continued use and does not call for stopping. Thin skin is the most affected, which is why it is forbidden on the face. The scalp solution is flammable, so it is kept away from flame and heat and one does not smoke immediately after applying it. High blood calcium and suppression of parathyroid hormone are rare, occurring mainly when the weekly ceiling is exceeded or when the kidney is impaired.'
  },
  warning: {
    ar: 'للنشرة سقف أسبوعي أقصى لا يُتجاوز، لأن تجاوزه يرفع كالسيوم الدم. فاطلب المشورة الطبية العاجلة إن جاءتك علامات ارتفاع الكالسيوم: كثرة التبوّل، أو جفاف الفم، أو طعم معدني في الفم، أو ألم في العضلات أو ضعف فيها، أو فقدان الشهية. واطلب الطوارئ فوراً عند تورّم الحلق أو اللسان، أو طفح مرتفع مثير للحكّة، أو صعوبة في التنفّس. وراجع طبيبك إن ظهر طفح أو تهيّج في الموضع أو حوله، أو ساءت الصدفية ولم تهدأ.',
    en: 'The leaflet sets a maximum weekly amount that must not be exceeded, because going beyond it raises blood calcium. Seek urgent medical advice if signs of high calcium appear: passing urine more often, a dry mouth, a metallic taste in the mouth, muscle pain or weakness, or loss of appetite. Get emergency help at once for a swollen throat or tongue, a raised itchy rash, or difficulty breathing. And see your doctor if a rash or irritation appears at or around the site, or if the psoriasis worsens and does not settle.'
  },
  interact: {
    ar: 'مكمّلات فيتامين د ومكمّلات الكالسيوم تُضاف إلى أثره على الكالسيوم فترفعه، فلا تُؤخذ معه إلا بعلم الطبيب. ومدرّات البول من زمرة الثيازيد ترفع الكالسيوم بدورها فتزيد الخطر. وأدوية نظم القلب كالديجوكسين يشتدّ أثرها وخطرها حين يرتفع الكالسيوم. ويزيد الكالسيبوتريول حساسية الجلد للأشعة فوق البنفسجية، فالجمع بينه وبين جلسات العلاج الضوئي أو التعرّض الطويل للشمس يحتاج ترتيباً من الطبيب لا اجتهاداً.',
    en: 'Vitamin D supplements and calcium supplements add to its effect on calcium and push it up, so they are not taken with it except with the doctor\'s knowledge. Thiazide diuretics raise calcium in their own right and so add to the risk. Heart rhythm medicines such as digoxin become stronger and more dangerous when calcium rises. Calcipotriol also increases the skin\'s sensitivity to ultraviolet rays, so combining it with phototherapy sessions or long sun exposure needs a doctor\'s arrangement, not personal judgement.'
  },
  avoid: {
    ar: 'لا يستعمله من عنده اضطراب في استقلاب الكالسيوم أو ارتفاع معروف في كالسيوم الدم. ومن عنده مرض في الكلى أو الكبد يسأل طبيبه أولاً، لأن الكلية المعتلّة أضعف في التخلّص من الكالسيوم الزائد. ولا يُستعمل في الصدفية المحمرّة المعمّمة ولا في الصدفية البثرية. ولا يُوضع على الوجه. ومن يخضع للعلاج بالأشعة فوق البنفسجية لا يجمع بينهما من تلقاء نفسه. ولا يُنصح به عادةً في الحمل لأن أثره في الجنين غير معروف.',
    en: 'It is not used by anyone with a disorder of calcium metabolism or known high blood calcium. Anyone with kidney or liver disease should ask their doctor first, because an impaired kidney is less able to clear excess calcium. It is not used in erythrodermic psoriasis or in pustular psoriasis. It is not applied to the face. Anyone undergoing ultraviolet phototherapy should not combine the two on their own initiative. And it is not usually recommended in pregnancy because its effect on the baby is unknown.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a608018.html',
    'https://www.nhs.uk/medicines/calcipotriol/',
    'https://www.nhs.uk/medicines/calcipotriol/side-effects-of-calcipotriol/',
    'https://www.ncbi.nlm.nih.gov/books/NBK430879/'
  ]
};

RX_BODY['podophyllum-resin'] = {
  what: {
    ar: 'صمغ البودوفيلوم راتنج خام يُستخرج من جذور نبات البودوفيلوم، ومادته الفعّالة البودوفيلوتوكسين. ويُخلط عادةً في صبغة البنزوين ويضعه الطبيب أو الممرّض في العيادة، ولا يأخذه المريض إلى البيت. وله قريب مصفّى مأخوذ منه اسمه البودوفيلوكس أو البودوفيلوتوكسين، وهذا هو الشكل الذي يضعه المريض بنفسه لأن تركيزه معلوم ومضبوط بخلاف الصمغ الخام المتغيّر. والتفريق بين الاثنين ليس تفصيلاً لغوياً: الخام أشدّ وأخطر ولا يُصرف لليد، والمصفّى أضبط وأخفّ.',
    en: 'Podophyllum resin is a crude resin extracted from the roots of the podophyllum plant, its active substance being podophyllotoxin. It is usually mixed in tincture of benzoin and applied by a doctor or nurse in the clinic; the patient does not take it home. It has a purified relative derived from it called podofilox or podophyllotoxin, and that is the form the patient applies personally, because its concentration is known and controlled, unlike the variable crude resin. Distinguishing the two is no matter of wording: the crude form is stronger and more dangerous and is not handed over to the patient, while the purified one is more precise and milder.'
  },
  why: {
    ar: 'يُستعمل في الثآليل التناسلية والشرجية الخارجية، وهي زوائد لحمية يسبّبها فيروس الورم الحليمي البشري. والمهمّ أن يُفهم حدّه: العلاج يزيل الثؤلول ولا يقتل الفيروس، فالثآليل كثيراً ما تعود بعد العلاج وخاصةً في الأشهر الثلاثة الأولى، وعودتها ليست دليل فشل. والثؤلول المتروك بلا علاج قد يزول وحده وقد يبقى وقد يكبر ويتكاثر. واللقاح المضاد للفيروس يقي من الإصابة الجديدة ولا يعالج ثؤلولاً قائماً.',
    en: 'It is used on external genital and anal warts, fleshy growths caused by the human papillomavirus. Its limit must be understood: treatment removes the wart but does not kill the virus, so warts often return after treatment, especially in the first three months, and their return is not proof of failure. An untreated wart may clear on its own, may stay the same, or may grow and multiply. The vaccine against the virus prevents new infection and does not treat an existing wart.'
  },
  how: {
    ar: 'يرتبط البودوفيلوتوكسين ببروتين التوبيولين داخل الخلية، وهو البروتين الذي يبني الخيوط التي تسحب الصبغيات وقت الانقسام. وبارتباطه به يُوقف انقسام الخلية في منتصفه، فتموت خلايا الثؤلول سريعة الانقسام وينخر النسيج ويتقشّر ويسقط. ولهذا يُسمّى مضاداً للانقسام الفتيلي. وهذا نفسه سبب خطره: ما يوقف الانقسام في خلية الثؤلول يوقفه في خلايا أخرى سريعة الانقسام إن دخل الدم بكمية كافية.',
    en: 'Podophyllotoxin binds the protein tubulin inside the cell, the protein that builds the filaments which pull the chromosomes apart during division. By binding it, cell division is halted midway, so the fast-dividing wart cells die and the tissue becomes necrotic, flakes and falls away. This is why it is called an antimitotic. That same property is the source of its danger: what stops division in a wart cell stops it in other fast-dividing cells if enough of it enters the bloodstream.'
  },
  effects: {
    ar: 'أكثر ما يحدث في موضع الوضع: ألم خفيف إلى متوسط، وحرقة، وحكّة، واحمرار، وتهيّج موضعي. وهذا متوقّع لأن الدواء يقتل النسيج ليزيله، فبعض التفاعل جزء من عمله لا خروج عنه. وقد يتقرّح الموضع سطحياً ثم يلتئم. أما الألم المبرّح أو التورّم أو النزف فليس من العادي في شيء وسيأتي ذكره في التحذير. والمنطقة المعالَجة تبقى حسّاسة أياماً، ويُنصح بتجنّب الاحتكاك والعلاقة الجنسية في أيام الوضع.',
    en: 'What happens most is at the site of application: mild to moderate pain, burning, itching, redness and local irritation. This is expected, because the medicine kills tissue in order to remove it, so some reaction is part of its work rather than a departure from it. The area may superficially ulcerate and then heal. Excruciating pain, swelling or bleeding, however, is nothing like normal and is covered in the warning below. The treated area stays tender for days, and friction and sexual contact are best avoided on application days.'
  },
  warning: {
    ar: 'الخطر الأكبر أن يبقى الدواء على الجلد: يغسله الطبيب بعد ساعات قليلة من وضعه ولا يُترك أطول من ذلك، فقد سُجّل تسمّم عامّ شديد حين وُضع على مساحة واسعة من نسيج هشّ ولم يُغسل في وقته. فاطلب الطوارئ فوراً إن جاءك بعده ارتباك أو نعاس شديد أو ألم بطني شديد أو قيء متواصل أو خدر أو ضعف في الأطراف. وتوقّف واتصل بالطبيب عند نزف أو تورّم أو ألم شديد أو حرقة لا تُحتمل في الموضع. وإن بقي الثؤلول بعد جولات العلاج فارجع للعيادة ولا تكرّره من عندك.',
    en: 'The greatest danger is the medicine staying on the skin: the doctor washes it off a few hours after applying it and it is not left longer, since severe systemic poisoning has been recorded when it was applied to a wide area of friable tissue and not washed off in time. Get emergency help at once if confusion, deep drowsiness, severe abdominal pain, persistent vomiting, numbness or weakness of the limbs follows. Stop and call the doctor for bleeding, swelling, severe pain or unbearable burning at the site. If the wart remains after courses of treatment, return to the clinic rather than repeating it yourself.'
  },
  interact: {
    ar: 'لا يُجمع مع علاج مدمّر آخر للثآليل على الموضع نفسه في الوقت نفسه، كالتبريد بالنيتروجين أو الأحماض المحرقة، إلا بترتيب من الطبيب، لأن اجتماعها يحرق الجلد السليم حول الثؤلول. ولا يُوضع على جلد سبق أن عولج ولم يلتئم بعد. وأساسه راتنجي كحولي قابل للاشتعال فيُبعَد عن اللهب حتى يجفّ. ولا تُعرف له تعارضات دوائية جهازية مهمّة ما دام يُغسل في وقته ولا يدخل الدم. لكن هذا الشرط هو مربط الأمر كله: كل خطره الجهازي يبدأ من اللحظة التي يُترك فيها على النسيج بعد وقت غسله.',
    en: 'It is not combined with another destructive wart treatment on the same area at the same time, such as liquid nitrogen freezing or caustic acids, except as arranged by a doctor, because together they burn the healthy skin around the wart. It is not applied to skin already treated and not yet healed. Its resinous alcoholic base is flammable, so it is kept away from flame until dry. No important systemic drug interactions are known for it as long as it is washed off in time and does not enter the bloodstream. But that condition is the whole point: all its systemic danger begins the moment it is left on the tissue past its washing time.'
  },
  avoid: {
    ar: 'ممنوع في الحمل، فسلامته على الجنين لم تثبت، ويُتجنّب في الرضاعة. ولا يُوضع داخل الجسم: لا على عنق الرحم ولا داخل المهبل ولا داخل الإحليل ولا داخل قناة الشرج. ولا يُوضع على جلد فيه جرح مفتوح أو نسيج هشّ ينزف بسهولة. ولا يُوضع على الجلد السليم حول الثؤلول ولا على الشامات ولا على الوجه. ولا يضعه المريض بنفسه، فهذا الشكل الخام يضعه المختصّ وحده. ويُبعَد عن العينين، وإن وصلها فاغسلها بماء غزير فوراً.',
    en: 'It is forbidden in pregnancy, as its safety for the baby has not been established, and it is avoided in breastfeeding. It is not applied inside the body: not on the cervix, in the vagina, in the urethra or in the anal canal. It is not applied to skin with an open wound or friable tissue that bleeds easily. It is not applied to the healthy skin around the wart, to moles, or to the face. The patient does not apply it personally: this crude form is applied by a professional alone. Keep it away from the eyes, and if it reaches them flush at once with plenty of water.'
  },
  updated: '2026-09-10',
  src: [
    'https://www.cdc.gov/std/treatment-guidelines/anogenital-warts.htm',
    'https://medlineplus.gov/druginfo/meds/a625034.html'
  ]
};

RX_BODY['urea'] = {
  what: {
    ar: 'اليوريا مادة يصنعها الجلد السليم بنفسه ويحتفظ بها في طبقته الخارجية لتمسك الماء، فإذا نقصت جفّ الجلد وتشقّق. وقد صُنعت دواءً موضعياً في كريمات ولوشنات ورغاوٍ وجلّات وطلاءات للأظافر. وتركيزها هو الذي يحدّد عملها: القليل منها مرطّب لطيف يصلح للجسم كله، والكثير منها مذيب قويّ للجلد المتقرّن السميك ومليّن للظفر التالف، ولا يُستعمل هذا الأخير على الوجه. وتُصنع منها مستحضرات مركّبة مع حمض الساليسيليك تكون أشدّ تقشيراً من كلٍّ منهما وحده، وهذه أدوية موضعية لا مرطّبات تجميلية.',
    en: 'Urea is a substance healthy skin makes for itself and keeps in its outer layer to hold water; when it runs short the skin dries and cracks. It has been made into a topical medicine in creams, lotions, foams, gels and nail preparations. Its strength decides what it does: a little of it is a gentle moisturiser suitable for the whole body, while a lot of it is a powerful dissolver of thick hardened skin and a softener of a damaged nail, and that stronger form is not used on the face. Combined preparations of urea with salicylic acid also exist and peel more strongly than either alone; these are topical medicines, not cosmetic moisturisers.'
  },
  why: {
    ar: 'تُستعمل في الحالات التي يسمك فيها القرن أو يجفّ الجلد: الجلد الجافّ الخشن، والتهاب الجلد، والصدفية، والإكزيما، والتقرّن الشعري، والمسامير والجساءات، والأظافر التالفة أو الناشبة أو الميتة. وتُضاف كذلك إلى علاجات أخرى على الجلد السميك لتفتح لها الطريق، كما في سعفة القدم حين يتقرّن الأخمص فلا ينفذ مضاد الفطريات وحده، وكما في تليين الظفر المصاب بالفطر قبل معالجته. وهي تعالج القشرة والسُّمك لا الفطر نفسه.',
    en: 'It is used where the horny layer thickens or the skin dries: dry rough skin, dermatitis, psoriasis, eczema, keratosis pilaris, corns and calluses, and damaged, ingrown or devitalised nails. It is also added to other treatments on thickened skin to open the way for them, as in athlete\'s foot when the sole hardens and an antifungal alone cannot penetrate, and in softening a fungal nail before treating it. It treats the scale and the thickness, not the fungus itself.'
  },
  how: {
    ar: 'تعمل اليوريا على وجهين. الأول أنها تجذب الماء وتمسكه في الطبقة القرنية، فيرطب الجلد من داخله لا بطبقة دهنية فوقه وحدها. والثاني أنها تذيب المادة البينية التي تلصق الخلايا الميتة بعضها ببعض، فترخي تماسك الطبقة القرنية ويتساقط القشر والجلد السميك على مهل. ومن هنا جاء وصفها بأنها مطرّية ومقشّرة في آن واحد، ومن هنا أيضاً قدرتها على تليين الظفر السميك حتى يسهل تقليمه أو معالجته.',
    en: 'Urea works in two ways. First, it attracts water and holds it in the horny layer, so the skin is moistened from within rather than by a greasy film on top alone. Second, it dissolves the intercellular substance that glues dead cells to one another, loosening the cohesion of the horny layer so that scale and thickened skin shed gradually. Hence its description as both an emollient and a keratolytic, and hence too its ability to soften a thick nail until it can easily be trimmed or treated.'
  },
  effects: {
    ar: 'تحدث أحياناً لسعة عابرة أو حرقة أو حكّة أو تهيّج في موضع الوضع، وهذه تزول عادةً عند التوقّف عن الدواء بحسب النشرة. وهي أكثر وقوعاً على الجلد المتشقّق أو الملتهب وعند التراكيز العالية، وأقلّ بكثير على الجلد السليم وبالتراكيز المرطّبة. وقد يحسّ صاحب البشرة الحسّاسة بحرارة في أول أيام الاستعمال ثم تخفّ. والتراكيز العالية تصنع تقشّراً ظاهراً وهذا هو عملها المقصود لا أثراً جانبياً.',
    en: 'Transient stinging, burning, itching or irritation sometimes occurs at the site of application, and these normally disappear when the medicine is stopped, according to the label. They are commoner on cracked or inflamed skin and at high strengths, and far less common on intact skin and at moisturising strengths. Someone with sensitive skin may feel warmth in the first days of use, which then eases. High strengths produce visible peeling, and that is their intended work, not a side effect.'
  },
  warning: {
    ar: 'للاستعمال الخارجي وحده: تجنّب العينين والشفتين والأغشية المخاطية، وإن وصلتها فاغسل بماء غزير. وتوقّف واستشر الطبيب إن ظهر احمرار أو تهيّج لا يهدأ. واطلب المشورة العاجلة إن صار الموضع ساخناً متورّماً واتّسع احمراره أو ظهر صديد أو حمّى، فهذه علامات عدوى لا تهيّج دواء. ومن عنده سكّري ووجد تشقّقاً عميقاً أو قرحة أو موضعاً فاقد الإحساس في قدمه فلا يعالج نفسه بمقشّر، بل يعرض قدمه على مختصّ، لأن التقشير على قدم ضعيفة التروية يفتح قرحة لا يشعر بها صاحبها.',
    en: 'For external use only: avoid the eyes, lips and mucous membranes, and if it reaches them wash with plenty of water. Stop and consult a doctor if redness or irritation appears and does not settle. Seek urgent advice if the area becomes hot and swollen, the redness spreads, or pus or fever appears, as these are signs of infection rather than of drug irritation. Anyone with diabetes who finds a deep crack, an ulcer or a numb spot on the foot should not self-treat with a keratolytic but should have the foot seen by a specialist, because peeling a poorly perfused foot opens an ulcer its owner cannot feel.'
  },
  interact: {
    ar: 'تزيد اليوريا نفاذ ما يُوضع فوقها على الجلد نفسه، ومن ذلك الكورتيزونات الموضعية ومضادات الفطريات. وهذا يُستعمل عمداً في الجلد السميك ليصل الدواء إلى عمقه، لكنه يرفع أثر ذلك الدواء وتهيّجه معاً، فلا يُجمع من تلقاء النفس على جلد رقيق أو على الوجه. وتُصنع منها مستحضرات مركّبة مع حمض الساليسيليك، وهذه أقوى تقشيراً وأشدّ تهيّجاً من كلٍّ وحده. ولا تُعرف لها تعارضات جهازية مهمّة مع الأدوية المبلوعة.',
    en: 'Urea increases the penetration of whatever is applied over it on the same skin, including topical corticosteroids and antifungals. This is used deliberately on thickened skin so the medicine reaches its depth, but it raises both that drug\'s effect and its irritation, so it is not combined on one\'s own initiative on thin skin or on the face. Combined preparations of urea with salicylic acid exist, and these peel more strongly and irritate more than either alone. No important systemic interactions with swallowed medicines are known for it.'
  },
  avoid: {
    ar: 'لا تستعملها إن كنت تعرف حساسية تجاهها أو تجاه أي مكوّن في المستحضر. ولا تُوضع على جلد مجروح أو نازّ أو ملتهب التهاباً حادّاً أو متقيّح. والتراكيز العالية لا تُوضع على الوجه ولا على الثنيات ولا حول العينين، وموضعها الطبيعي الكعبان والمرفقان والركبتان والأظافر. وللأطفال تُستشار الصيدلية أو الطبيب قبل الاستعمال وخاصةً على مساحة واسعة. ومع مستحضرات الأظافر يُتبع توجيه الطبيب لأن بعضها يُقصد به رفع الظفر التالف.',
    en: 'Do not use it if you know you are allergic to it or to any ingredient in the preparation. It is not applied to broken, weeping, acutely inflamed or infected skin. High strengths are not applied to the face, the skin folds or around the eyes; their natural place is the heels, elbows, knees and nails. For children, ask a pharmacist or doctor before use, especially over a wide area. With nail preparations, follow the doctor\'s direction, since some of them are intended to lift a damaged nail away.'
  },
  updated: '2026-09-10',
  src: [
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ef2db58d-e760-417d-8574-45a411c49b47',
    'https://www.ncbi.nlm.nih.gov/books/NBK562206/'
  ]
};

RX_BODY['glycerol'] = {
  what: {
    ar: 'الجليسرين سائل صافٍ لزج حلو المذاق، معتمد مادةً فعّالة في واقيات الجلد التي تُباع بلا وصفة، وهو في الوقت نفسه أساس أغلب المرطّبات والمطرّيات في السوق. والمطرّيات نفسها ليست مستحضرات تجميل بل علاج للجلد الجافّ المزمن، وتأتي لوشناً خفيفاً وكريماً وسط الثقل ومرهماً دهنياً ورذاذاً وبديلاً للصابون، ولكل شكل موضعه: الأخفّ للنهار والمساحات المشعرة، والأثقل لليل وللجفاف الشديد.',
    en: 'Glycerin is a clear, syrupy, sweet-tasting liquid, approved as an active ingredient in skin protectants sold without prescription, and at the same time the base of most moisturisers and emollients on the market. Emollients themselves are not cosmetics but a treatment for chronic dry skin, and they come as a light lotion, a mid-weight cream, a greasy ointment, a spray and a soap substitute, each with its place: the lightest for daytime and hairy areas, the heaviest for night and for severe dryness.'
  },
  why: {
    ar: 'يُستعمل في الأمراض التي تجعل الجلد جافّاً أو حاكّاً أو متقشّراً: الإكزيما والصدفية والسماك، وفي حماية الجلد المتشقّق أو المتقرّح سطحياً وتخفيف أعراضه مؤقّتاً. والأهمّ في استعماله أنه ليس دواء نوبة بل دواء يومي مستمرّ: المطرّي المستعمل بانتظام يقلّل عدد النوبات وشدّتها ويقلّل الحاجة إلى الكورتيزون الموضعي، بينما المتروك حتى تشتدّ الحكّة لا يفعل شيئاً يُذكر. ويُستعمل كذلك بديلاً عن الصابون الذي يجرّد الجلد من دهنه.',
    en: 'It is used in conditions that make the skin dry, itchy or scaly: eczema, psoriasis and ichthyosis, and to protect chapped or superficially cracked skin and temporarily relieve its symptoms. The most important thing about its use is that it is not a flare medicine but a continuous daily one: an emollient used regularly reduces the number and severity of flares and reduces the need for topical corticosteroids, whereas one left until the itch becomes severe achieves little. It is also used as a substitute for soap, which strips the skin of its oil.'
  },
  how: {
    ar: 'الجليسرين مادة جاذبة للماء: يسحب الماء من الطبقات الأعمق ومن هواء الجوّ إلى الطبقة القرنية ويمسكه فيها، فترتوي الخلايا الميتة وتلين ويقلّ التشقّق. وهو وحده لا يكفي، ولهذا يُجمع في المستحضرات مع مادة عازلة كالفازلين تصنع فوق الجلد طبقة تمنع الماء من التبخّر. فيجتمع في المطرّي فعلان: جذب الماء وحبسه. وباجتماعهما يُرمّم حاجز الجلد المكسور، وهو الحاجز نفسه الذي يسمح للمهيّجات بالدخول فيبدأ الالتهاب.',
    en: 'Glycerin is a humectant: it draws water from the deeper layers and from the surrounding air into the horny layer and holds it there, so the dead cells become hydrated and supple and cracking lessens. Alone it is not enough, which is why preparations combine it with an occlusive such as petrolatum that forms a layer over the skin preventing water from evaporating. So an emollient brings two actions together: drawing water in and sealing it in. Together they repair the broken skin barrier, the very barrier whose breach lets irritants in and inflammation begin.'
  },
  effects: {
    ar: 'الجليسرين من ألطف ما يُوضع على الجلد ويكاد لا يهيّج، ولهذا يُستعمل على الأطفال والمساحات الواسعة. وأكثر ما يُشتكى منه لسعة عابرة على جلد متشقّق أو ملتهب، وثقل دهني وملمس لزج مع المراهم، وسدّ للمسامّ يظهر بثوراً عند بعض أصحاب البشرة الدهنية. وقد يجيء التهيّج لا من الجليسرين نفسه بل من عطر أو مادة حافظة في المستحضر، وعندها يُجرَّب مستحضر آخر خالٍ من العطر قبل الحكم على المطرّيات كلها.',
    en: 'Glycerin is among the gentlest things put on skin and barely irritates, which is why it is used on children and over wide areas. What people complain of most is transient stinging on cracked or inflamed skin, a greasy weight and sticky feel with ointments, and pore blockage showing as spots in some people with oily skin. Irritation may come not from the glycerin itself but from a fragrance or preservative in the preparation, in which case a different fragrance-free product is tried before judging emollients as a whole.'
  },
  warning: {
    ar: 'أخطر ما في المطرّيات ليس الجلد بل النار: بقاياها على الملابس والفراش والضمادات قابلة للاشتعال وقد سبّبت حروقاً شديدة ومميتة، وهذا يشمل الخالية من البارافين أيضاً. فابتعد باللباس المشبّع عن الطبّاخ والمدفأة واللهب المكشوف، ولا تدخّن وأنت لابسه، ولا تجفّف تلك الملابس قرب مصدر حرارة. وللاستعمال الخارجي وحده وبعيداً عن العينين. ولا يُوضع على جرح عميق أو نافذ أو عضّة حيوان أو حرق خطير. وتوقّف واستشر الطبيب إن ساءت الحالة أو استمرّت الأعراض أكثر من أسبوع أو زالت ثم عادت سريعاً.',
    en: 'The greatest danger in emollients is not the skin but fire: their residue on clothing, bedding and dressings is flammable and has caused severe and fatal burns, and this includes paraffin-free products too. Keep saturated clothing away from cookers, heaters and open flames, do not smoke while wearing it, and do not dry such clothes near a heat source. For external use only and away from the eyes. Do not apply to a deep or puncture wound, an animal bite or a serious burn. Stop and consult a doctor if the condition worsens, if symptoms last more than a week, or if they clear and quickly return.'
  },
  interact: {
    ar: 'اترك فاصلاً زمنياً بين المطرّي وأي دواء موضعي آخر على الجلد نفسه، نحو نصف ساعة، لأن وضع المطرّي فوق الكورتيزون مباشرة يخفّفه وينشره خارج موضعه المقصود، ووضعه فوق دواء آخر قد يمنعه من النفاذ. والترتيب والتوقيت يحدّدهما الطبيب أو الصيدلي حسب الدواء. ولا تُعرف للجليسرين تعارضات جهازية مع الأدوية المبلوعة، لأنه يعمل على سطح الجلد ولا يُعتمد على دخوله إلى الدم. وأفضل وقت لوضعه بعد الاستحمام والجلد ما يزال ندياً، لأنه حينئذ يحبس ماءً موجوداً بدل أن يبحث عنه.',
    en: 'Leave a gap between the emollient and any other topical medicine on the same skin, about half an hour, because putting the emollient straight over a corticosteroid dilutes it and spreads it beyond its intended site, while putting it over another medicine may stop that medicine penetrating. The order and timing are set by the doctor or pharmacist according to the drug. No systemic interactions with swallowed medicines are known for glycerin, because it works on the skin surface and does not depend on entering the bloodstream. The best time to apply it is after bathing while the skin is still damp, because it then seals in water already present rather than having to seek it.'
  },
  avoid: {
    ar: 'ليس له مانع مطلق يُذكر، وأكثر ما يمنع استعماله حساسية تجاه عطر أو مادة حافظة في مستحضر بعينه لا تجاه الجليسرين نفسه. ولا يُوضع على جرح عميق أو عضّة أو حرق خطير كما تقول النشرة. وللأطفال دون ستة أشهر تُستشار الصيدلية أو الطبيب. ولا تُغرَس الأصابع في العلبة المشتركة بل يُؤخذ منها بملعقة نظيفة أو تُستعمل عبوة بمضخّة، لأن الأصابع تنقل الجراثيم إلى داخل العلبة فتصير مصدر عدوى للجلد المتشقّق. وانتبه من الانزلاق في الحمّام بعد الاستعمال.',
    en: 'It has no absolute contraindication worth noting, and what most often prevents its use is allergy to a fragrance or preservative in a particular product rather than to glycerin itself. It is not applied to a deep wound, a bite or a serious burn, as the label says. For children under six months, ask a pharmacist or doctor. Do not dig fingers into a shared tub; take from it with a clean spoon or use a pump pack, because fingers carry germs into the tub and it becomes a source of infection for cracked skin. And beware of slipping in the bathroom after use.'
  },
  updated: '2026-09-10',
  src: [
    'https://www.nhs.uk/tests-and-treatments/emollients/',
    'https://www.sps.nhs.uk/articles/managing-fire-risk-with-emollients-and-other-skin-products/',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=32eaaaab-41bd-4efe-a71d-92e3a702c1e5'
  ]
};

RX_BODY['sunscreen-broad-spectrum'] = {
  what: {
    ar: 'واقي الشمس دواء يُباع بلا وصفة لا مستحضر تجميل، وهيئة الغذاء والدواء تنظّم عبارته على العلبة تنظيماً صارماً. ويُصنع لوشناً وكريماً وقلماً وجلاً وزيتاً وزبدة ومعجوناً ورذاذاً وبودرة، ولا يجوز أن تُباع المناديل المبلّلة ولا غسول الجسم ولا الشامبو على أنها واقي شمس. و«واسع الطيف» عبارة لا تُكتب إلا بعد فحص يثبت أن حمايته من الأشعة الطويلة متناسبة مع حمايته من القصيرة.',
    en: 'Sunscreen is a medicine sold without prescription rather than a cosmetic, and the Food and Drug Administration regulates its wording on the pack strictly. It is made as a lotion, cream, stick, gel, oil, butter, paste, spray and powder, and wipes, body washes and shampoos may not be sold as sunscreen. "Broad spectrum" is a phrase written only after a test proving that its protection against long-wave rays is proportionate to its protection against short-wave ones.'
  },
  why: {
    ar: 'يُستعمل للوقاية من حروق الشمس أولاً. والواقي واسع الطيف بعامل حماية خمسة عشر فما فوق، إذا استُعمل كما تقول العلبة ومع وسائل الوقاية الأخرى، هو وحده المسموح له بادّعاء أنه يقلّل خطر سرطان الجلد وشيخوخة الجلد المبكّرة. وهو كذلك حجر الأساس في علاج الكلف: بغيره لا ينفع أي مبيّض، ويُفضَّل فيه ما يحمي من الأشعة الطويلة ومن الضوء المرئي معاً، ولهذا تُستعمل الأنواع الملوّنة التي تحتوي أكاسيد الحديد.',
    en: 'It is used first of all to prevent sunburn. A broad-spectrum sunscreen with a protection factor of fifteen or above, if used as the pack directs and together with other protective measures, is the only kind allowed to claim it reduces the risk of skin cancer and early skin ageing. It is also the cornerstone of melasma treatment: without it no lightening agent works, and the preferred kind protects against long-wave rays and visible light together, which is why tinted products containing iron oxides are used.'
  },
  how: {
    ar: 'مرشّحات الواقي إمّا تمتصّ الأشعة فوق البنفسجية وتحوّلها إلى حرارة، وإمّا تعكسها وتشتّتها عن سطح الجلد، فلا تصل الخلايا الحيّة تحت السطح فلا يتلف حمضها النووي. وعامل الحماية المكتوب على العلبة يقيس الحماية من الحرق وحده وهو أثر الأشعة القصيرة غالباً، ولا يقول شيئاً عن الأشعة الطويلة التي تخترق أعمق وتشيخ الجلد وتصبغه. ولهذا وُضعت عبارة «واسع الطيف»: هي وحدها ما يدلّ على أن الحمايتين مجتمعتان في العلبة.',
    en: 'A sunscreen\'s filters either absorb ultraviolet rays and convert them to heat, or reflect and scatter them off the skin surface, so they do not reach the living cells beneath and their DNA is not damaged. The protection factor written on the pack measures protection from burning alone, largely the effect of short-wave rays, and says nothing about the long-wave rays that penetrate deeper, age the skin and pigment it. Hence the phrase "broad spectrum": it alone signals that both protections are present in the pack.'
  },
  effects: {
    ar: 'أكثر ما يُشتكى منه لسعة أو حرقة حين يدخل حول العينين مع العرق، وتهيّج أو احمرار عند أصحاب البشرة الحسّاسة، وظهور بثور عند أصحاب البشرة الدهنية مع الأنواع الثقيلة. وقد تقع حساسية تماس تجاه مرشّح بعينه أو تجاه عطر في المستحضر، وعندها يُجرَّب نوع آخر خالٍ من العطر أو معدني بدل الكيميائي. والمرشّحات المعدنية تترك أثراً أبيض على البشرة الداكنة، وهذا سبب تجميلي لكنه سبب حقيقي لترك الناس استعماله.',
    en: 'What people complain of most is stinging or burning when it runs into the eyes with sweat, irritation or redness in people with sensitive skin, and spots in people with oily skin using heavy formulations. Contact allergy to a particular filter or to a fragrance in the product can occur, in which case a different fragrance-free or mineral rather than chemical product is tried. Mineral filters leave a white cast on darker skin, a cosmetic matter but a real reason people stop using it.'
  },
  warning: {
    ar: 'لا يوجد واقٍ شمس مانع للماء ولا حاجب كامل للشمس، وقد مُنعت هذه العبارات من العلب لأنها تبالغ في وصف الحماية. ومقاومة الماء محدودة بزمن قصير مكتوب على العلبة، وبعده يُعاد الوضع. أعِد وضعه مراراً خلال اليوم كما تقول العلبة، وفوراً بعد السباحة أو التعرّق أو التنشيف بالمنشفة. واعرض على الطبيب أي شامة أو بقعة تغيّر حجمها أو شكلها أو لونها، أو نزفت، أو لم تلتئم، فالواقي يقي ولا يعالج هذا. والرذاذ قابل للاشتعال فيُبعَد عن اللهب. والغيم لا يمنع الأشعة، وأشدّ ساعات النهار حول منتصفه.',
    en: 'No sunscreen is waterproof and none is a total sunblock; these words are banned from packs because they overstate the protection. Water resistance lasts only a short labelled time, after which it is reapplied. Reapply it repeatedly through the day as the pack says, and immediately after swimming, sweating or towelling. Show a doctor any mole or spot that changes size, shape or colour, that bleeds, or that does not heal, because sunscreen prevents but does not treat that. Sprays are flammable and are kept from flame. Cloud does not block the rays, and the harshest hours are around midday.'
  },
  interact: {
    ar: 'ليس التعارض هنا بين واقي الشمس وغيره، بل أن أدوية كثيرة تجعل الجلد يحترق أسرع فيصير الواقي معها ألزم لا اختياراً. ومن أدوية هذه الدفعة نفسها: قطران الفحم يزيد ميل الجلد للاحتراق مدة تصل إلى يوم بعد الوضع، والكالسيبوتريول يزيد حساسية الجلد للأشعة فوق البنفسجية، وبيروكسيد البنزويل وحمض الساليسيليك تنصح نشراتهما بتقليل التعرّض للشمس أثناء استعمالهما. فاقرأ نشرة كل دواء تستعمله وابحث فيها عن ذكر الشمس.',
    en: 'The interaction here is not between sunscreen and something else, but that many medicines make the skin burn faster, so sunscreen becomes obligatory with them rather than optional. From this very batch: coal tar increases the skin\'s tendency to burn for up to a day after application; calcipotriol increases the skin\'s sensitivity to ultraviolet rays; and the leaflets for benzoyl peroxide and salicylic acid advise limiting sun exposure while using them. So read the leaflet of every medicine you use and look in it for any mention of the sun.'
  },
  avoid: {
    ar: 'الرضّع دون ستة أشهر لا يُعتمد لهم على الواقي، بل يُبقَون في الظلّ ويُلبَسون ما يغطّي، ويُسأل الطبيب قبل وضع أي شيء على جلدهم. ولا يُوضع على جلد محروق أو مجروح أو ملتهب. ومن ظهرت عليه حساسية تجاه مرشّح بعينه يتجنّبه ويقرأ المكوّنات قبل الشراء. والأهمّ من كل مانع: لا يُتّخذ الواقي إذناً بإطالة البقاء في الشمس، فهو طبقة واحدة من عدّة طبقات مع الظلّ واللباس والقبّعة والنظارة وتجنّب أشدّ ساعات النهار.',
    en: 'Infants under six months should not be relied on sunscreen; they are kept in the shade and dressed in covering clothes, and a doctor is asked before putting anything on their skin. It is not applied to burned, broken or inflamed skin. Anyone who has reacted to a particular filter avoids it and reads the ingredients before buying. And most important of all the cautions: sunscreen is not a licence to stay longer in the sun; it is one layer among several alongside shade, clothing, a hat, sunglasses and avoiding the harshest hours of the day.'
  },
  updated: '2026-09-10',
  src: [
    'https://www.fda.gov/consumers/consumer-updates/tips-stay-safe-sun-sunscreen-sunglasses',
    'https://www.fda.gov/drugs/understanding-over-counter-medicines/questions-and-answers-fda-announces-new-requirements-over-counter-otc-sunscreen-products-marketed-us',
    'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9790748/'
  ]
};

RX_BODY['permethrin'] = {
  what: {
    ar: 'البيرميثرين مركّب صناعي من زمرة البيريثرويدات، أصلها مستخلص من زهرة الأقحوان. وهو قاتل للعثّ وللقمل، ويأتي كريماً أقوى يُدهن على الجسم كله لعلاج الجرب، ولوشناً أو غسولاً أخفّ لقمل الرأس والعانة يُباع في بلاد كثيرة بلا وصفة. وهو الخيار الأول للجرب في الممارسة الطبية لأنه فعّال وأمانه مدروس، ولا يُمتصّ من جلد الإنسان إلا بمقدار ضئيل جداً. وقد ظهرت في بعض البلاد مقاومة له في القمل خاصةً، فإن فشل مرّة بعد مرّة فالمسألة قد تكون مقاومة لا سوء استعمال.',
    en: 'Permethrin is a synthetic compound of the pyrethroid group, originally derived from the chrysanthemum flower. It kills mites and lice, and comes as a stronger cream rubbed over the whole body for scabies, and as a lighter lotion or rinse for head and pubic lice, sold without prescription in many countries. It is the first choice for scabies in medical practice because it is effective and its safety is well studied, and only a very small amount of it is absorbed through human skin. Resistance to it has emerged in some countries, particularly in lice, so if it fails twice in a row the issue may be resistance rather than misuse.'
  },
  why: {
    ar: 'يُستعمل في الجرب من عمر شهرين فما فوق، وفي قمل الرأس، وفي قمل العانة. وهو المفضّل في الحمل والرضاعة بين أدوية الجرب. وشرط نجاحه ليس في العلبة بل حولها: يُعالَج كل من في البيت وكل مخالط قريب في الوقت نفسه ولو لم يحكّ أحدهم، لأن الأعراض تتأخّر أسابيع بعد الإصابة فيبدو السليم سليماً وهو حامل، فإن عولج واحد وحده رجع الجرب إليه من أهله. وتُغسل الملابس والفراش والمناشف في الوقت نفسه.',
    en: 'It is used for scabies from two months of age upwards, for head lice and for pubic lice. It is the preferred scabies medicine in pregnancy and breastfeeding. The condition of its success lies not in the tube but around it: everyone in the house and every close contact is treated at the same time even if none of them itches, because symptoms lag weeks behind infestation so a carrier looks well; if one person alone is treated the scabies returns to them from their family. Clothes, bedding and towels are washed at the same time.'
  },
  how: {
    ar: 'يعمل البيرميثرين على أغشية الخلايا العصبية في المفصليات: يعبث بقناة الصوديوم التي تنظّم استقطاب الغشاء، فيتأخّر رجوع الغشاء إلى حاله بعد الإشارة العصبية ويبقى العصب في حالة إثارة دائمة، فتُشلّ العثّة أو القملة وتموت. وهذه القنوات في الحشرات تختلف عنها في الإنسان، وامتصاص الجلد البشري له أقلّ من جزء يسير مما يُوضع، فيجتمع من الأمرين هامش أمان واسع هو سبب تفضيله على غيره.',
    en: 'Permethrin acts on the nerve cell membranes of arthropods: it disturbs the sodium channel that regulates the membrane\'s polarisation, so the membrane\'s return to its resting state after a nerve signal is delayed and the nerve stays permanently excited, paralysing the mite or louse until it dies. These channels differ in insects from those in humans, and human skin absorbs less than a small fraction of what is applied, so the two together give a wide safety margin, which is why it is preferred over others.'
  },
  effects: {
    ar: 'أكثر ما يقع حكّة جديدة أو زيادة في الحكّة القديمة، وحرقة أو لسعة أو احمرار في موضع الوضع، وهي خفيفة ومؤقّتة في الغالب. والمهمّ أن يُفهم شيء يقلق الناس كثيراً: الحكّة بعد العلاج لا تعني أن العلاج فشل. فحكّة ما بعد الجرب قد تستمرّ أسابيع بعد موت العثّ، لأنها ردّ فعل تحسّسي من الجسم على بقايا العثّ وفضلاته في الجلد، لا دليلاً على بقاء الإصابة. وتُخفَّف بالمرطّبات وبما يصفه الطبيب لا بإعادة الدواء.',
    en: 'What happens most is new itching or an increase in existing itching, and burning, stinging or redness at the site, usually mild and temporary. One thing that worries people greatly must be understood: itching after treatment does not mean the treatment failed. Post-scabetic itch may last weeks after the mites are dead, because it is an allergic reaction by the body to mite remains and droppings in the skin, not evidence of continuing infestation. It is eased with moisturisers and what the doctor prescribes, not by repeating the medicine.'
  },
  warning: {
    ar: 'تجنّب العينين والأنف والأذنين والفم، وإن وصلها فاغسل بماء غزير فوراً. واتصل بالطبيب إن جاءك ضيق في التنفّس، أو تهيّج مستمرّ لا يهدأ، أو بدا الموضع متعفّناً. واطلب المشورة العاجلة إن اتّسع الاحمرار وصار ساخناً أو ظهر صديد أو قشور عسلية أو حمّى، فالجرب يفتح باب عدوى بكتيرية ثانوية كالقوباء والتهاب النسيج الخلوي، وبعضها يجرّ التهاباً في الكلى أو الحمّى الرثوية. وإن استمرّت الحكّة أكثر من أسبوعين أو ظهرت أنفاق وبثور جديدة فارجع إلى الطبيب: قد يلزم إعادة العلاج أو دواء آخر، لا زيادة من هذا.',
    en: 'Avoid the eyes, nose, ears and mouth, and if it reaches them flush at once with plenty of water. Call a doctor for difficulty breathing, continuing irritation that will not settle, or an area that looks infected. Seek urgent advice if the redness spreads and turns hot, or pus, honey-coloured crusts or fever appear, because scabies opens the door to secondary bacterial infection such as impetigo and cellulitis, some of which leads on to kidney inflammation or rheumatic fever. If itching lasts beyond two weeks or new burrows and spots appear, return to the doctor: retreatment or a different medicine may be needed, not more of this one.'
  },
  interact: {
    ar: 'لا تُعرف له تعارضات جهازية مهمّة مع الأدوية المبلوعة، لأن ما يدخل الدم منه ضئيل. والتعارض الحقيقي هو على الجلد نفسه: لا تضع كريمات أو زيوتاً أو مرطّبات على الجسم قبل وضعه أو بعده مباشرة إلا بتوجيه، لأنها تحول بينه وبين الجلد أو تزيله. وفي القمل، انتبه إلى أن البلسم وبعض مستحضرات الشعر تترك طبقة تعوق وصوله إلى القملة. وفي الجرب المتقشّر الشديد يُجمع أحياناً مع دواء يُبلع، وهذا ترتيب طبيب لا اجتهاد.',
    en: 'No important systemic interactions with swallowed medicines are known, because so little of it enters the blood. The real interaction is on the skin itself: do not apply creams, oils or moisturisers to the body immediately before or after it except on instruction, because they come between it and the skin or wash it away. With lice, note that conditioner and some hair products leave a coating that hinders it reaching the louse. In severe crusted scabies it is sometimes combined with a swallowed medicine, and that is a doctor\'s arrangement, not a personal decision.'
  },
  avoid: {
    ar: 'لا يستعمله من عنده حساسية للبيرميثرين أو لأي بيريثرويد أو بيريثرين أو لنبات الأقحوان. وهو غير معتمد رسمياً دون عمر شهرين. ومن كان جلده متشقّقاً أو ملتهباً التهاباً واسعاً يسأل الطبيب أولاً. وفي الرضّع وكبار السنّ فوق الخامسة والستين يمتدّ الكريم إلى فروة الرأس والجبهة ولا يُكتفى بما دون الرقبة. ولا تُشارَك الأمشاط والفرش والمناشف والوسائد، وتُغسل الملابس والفراش بماء حارّ أو تُنظّف جافّاً أو تُغلَق في أكياس أياماً.',
    en: 'It is not used by anyone allergic to permethrin, to any pyrethroid or pyrethrin, or to chrysanthemum. It is not officially approved below two months of age. Anyone with cracked skin or widespread inflammation should ask a doctor first. In infants and in people over sixty-five the cream is extended to the scalp and forehead rather than stopping below the neck. Combs, brushes, towels and pillows are not shared, and clothing and bedding are washed hot, dry-cleaned, or sealed in bags for several days.'
  },
  updated: '2026-09-10',
  src: [
    'https://medlineplus.gov/druginfo/meds/a698037.html',
    'https://www.ncbi.nlm.nih.gov/books/NBK553150/',
    'https://www.ncbi.nlm.nih.gov/books/NBK544306/',
    'https://www.cdc.gov/std/treatment-guidelines/ectoparasitic.htm'
  ]
};

RX_BODY['benzyl-benzoate'] = {
  what: {
    ar: 'بنزوات البنزيل سائل زيتي يُصنع مستحلباً أو لوشناً يُدهن على الجلد لقتل عثّة الجرب، وهو من أقدم ما استُعمل في هذا الداء وما زال في قائمة منظمة الصحة للأدوية الأساسية. وفضله أنه رخيص ومتوفّر في البلاد التي لا يتوفّر فيها البيرميثرين، ولهذا تعتمد عليه أنظمة صحية كثيرة. ويُصنع بتراكيز مختلفة، والتركيز المخفّف هو ما يُستعمل للصغار بأمر الطبيب. وعيبه المعروف ليس ضعف الفاعلية بل صعوبة الالتزام به: دهن الجسم كله واحتمال حرقته إلى نهاية العلاج أصعب مما يبدو، ومن هنا تسقط نتائجه في الواقع دون نتائجه في التجارب.',
    en: 'Benzyl benzoate is an oily liquid made into an emulsion or lotion rubbed onto the skin to kill the scabies mite. It is among the oldest things used for this disease and remains on the World Health Organization list of essential medicines. Its advantage is that it is cheap and available in countries where permethrin is not, which is why many health systems rely on it. It is made in different strengths, and the diluted strength is what is used for small children on a doctor\'s instruction. Its known weakness is not poor efficacy but difficulty of adherence: covering the whole body and enduring its burning to the end of treatment is harder than it looks, and this is where its real-world results fall below its trial results.'
  },
  why: {
    ar: 'يُستعمل في الجرب، وموضعه في الترتيب العلاجي بعد البيرميثرين وبعد الدواء المبلوع، فهو البديل حين لا يتوفّران أو حين لا ينفعان. ويُستعمل كذلك في الجرب المتقشّر الشديد مجموعاً مع دواء يُبلع، وهي حالة تُعالَج تحت إشراف طبي لا في البيت. ومثل غيره من علاجات الجرب لا يكفي أن يُعالَج المصاب وحده: يُعالَج أهل البيت والمخالطون القريبون في وقت واحد وإلا رجعت العدوى إليه منهم بعد أسابيع.',
    en: 'It is used in scabies, and its place in the treatment order is after permethrin and after the swallowed medicine; it is the alternative when neither is available or when they do not work. It is also used in severe crusted scabies combined with a swallowed medicine, a situation managed under medical supervision rather than at home. Like other scabies treatments, treating the affected person alone is not enough: household members and close contacts are treated at the same time, or the infestation returns from them weeks later.'
  },
  how: {
    ar: 'هو سامّ للعثّة نفسها ولبيضها بالتماس المباشر: ينفذ إلى جسم العثّة الساكنة في نفق الجلد فيقتلها، ولا يعتمد عمله على دخول الدم ولا على جهاز مناعة المريض. وطريقة عمله في تفاصيلها الدقيقة ليست محسومة في النشرات كما هي محسومة في البيرميثرين، وما يُوثَق فيه هو أثره القاتل للعثّ لا آليّته بالضبط. ولهذا ما تزال الدراسات تقارن نتائجه بنتائج غيره وتصفه بالفعّال مع تحمّل أضعف.',
    en: 'It is toxic to the mite itself and to its eggs by direct contact: it penetrates the body of the mite living in the skin burrow and kills it, and its action does not depend on entering the bloodstream or on the patient\'s immune system. Its precise mechanism is not settled in the leaflets the way permethrin\'s is; what is documented is its killing effect on mites rather than exactly how. This is why studies still compare its results with others and describe it as effective but less well tolerated.'
  },
  effects: {
    ar: 'أبرز ما يُشتكى منه الحرقة واللسع عند الوضع، وهي شكوى شائعة جداً معه وأشيع منها مع البيرميثرين، وهي السبب الأول لترك العلاج قبل إتمامه. ويأتي كذلك تهيّج الجلد واحمراره وجفافه، وقد تسوء الإكزيما عند من عنده إكزيما أصلاً. والحرقة أشدّ على الجلد المخدوش بالحكّ وعلى الثنيات وعلى جلد الأطفال الرقيق، ولهذا يُخفَّف تركيزه لهم. والحكّة بعد نجاح العلاج قد تستمرّ أسابيع كما مع أي علاج للجرب.',
    en: 'The most prominent complaint is burning and stinging on application; it is very common with this medicine, commoner than with permethrin, and the leading reason people abandon treatment before completing it. Skin irritation, redness and dryness also occur, and eczema may worsen in anyone who already has it. The burning is worse on skin scratched raw, in the skin folds and on children\'s thin skin, which is why its strength is diluted for them. Itching after successful treatment may last weeks, as with any scabies treatment.'
  },
  warning: {
    ar: 'توقّف واغسله عن جلدك واعرض نفسك على الطبيب إن صارت الحرقة لا تُحتمل أو ظهرت فقاعات أو تسلّخ أو نزّ من الجلد، فهذا ليس التهيّج المتوقّع. واطلب الطوارئ فوراً إن تورّمت الشفتان أو اللسان أو الحلق أو صعب التنفّس. ولا يدخل العينين ولا الفم، وإن وصلهما فاغسل بماء غزير فوراً. واطلب المشورة العاجلة إن اتّسع الاحمرار وسخن الجلد أو ظهر صديد أو حمّى، فهذه عدوى بكتيرية ثانوية بعد الحكّ. وإن بقيت الحكّة بعد أسبوعين أو ظهرت أنفاق جديدة فارجع للطبيب. ولا يُبلع، ويُحفظ بعيداً عن الأطفال.',
    en: 'Stop, wash it off your skin and see a doctor if the burning becomes unbearable or if blisters, raw peeling or weeping appear, because that is not the expected irritation. Get emergency help at once if the lips, tongue or throat swell or breathing becomes difficult. It must not enter the eyes or the mouth, and if it reaches them flush at once with plenty of water. Seek urgent advice if the redness spreads and the skin turns hot, or if pus or fever appears, as that is secondary bacterial infection after scratching. If itching persists beyond two weeks or new burrows appear, return to the doctor. It is not to be swallowed, and is kept away from children.'
  },
  interact: {
    ar: 'لا يُجمع مع قاتل جرب آخر على الجلد في الوقت نفسه من تلقاء النفس، فالجمع يزيد التهيّج ولا يزيد الشفاء، وإن لزم الجمع في الجرب المتقشّر فهو ترتيب طبيب. ولا تُكدَّس فوقه المقشّرات القوية كحمض الساليسيليك أو اليوريا عالية التركيز على الجلد نفسه دون توجيه، لأن الجلد المقشور يزيد نفاذه ويزيد حرقته معاً. ولا تُعرف له تعارضات مهمّة مع الأدوية المبلوعة. واترك فاصلاً بينه وبين المرطّبات كي لا تزيله عن الجلد.',
    en: 'It is not combined with another scabicide on the skin at the same time on one\'s own initiative; combining increases irritation without increasing cure, and if combination is needed in crusted scabies it is a doctor\'s arrangement. Strong keratolytics such as salicylic acid or high-strength urea are not layered over it on the same skin without guidance, because peeled skin increases both its penetration and its burning. No important interactions with swallowed medicines are known. Leave a gap between it and moisturisers so they do not wash it off the skin.'
  },
  avoid: {
    ar: 'المانع المؤكّد الوحيد هو الحساسية المعروفة لبنزوات البنزيل. ولا يُوضع على جلد مجروح أو متسلّخ أو ملتهب التهاباً واسعاً، ولا على الوجه ولا حول العينين ولا على الأغشية المخاطية. وللأطفال الصغار لا يُستعمل بتركيزه الكامل، بل بتركيز مخفّف وبأمر الطبيب، ولمن هم دون وزن معيّن يُفضَّل البيرميثرين إن توفّر. أما الحمل فالدراسات على العلاج الموضعي بالبنزوات والبيرميثرين في الثلثين الثاني والثالث لم تُظهر زيادة في المشكلات، ومع ذلك يبقى القرار للطبيب.',
    en: 'The only confirmed contraindication is known allergy to benzyl benzoate. It is not applied to broken, excoriated or widely inflamed skin, nor to the face, around the eyes, or on mucous membranes. For small children it is not used at full strength but diluted and on a doctor\'s instruction, and below a certain weight permethrin is preferred if available. As for pregnancy, studies of topical treatment with benzoate and permethrin in the second and third trimesters showed no increase in problems, but the decision still rests with the doctor.'
  },
  updated: '2026-09-10',
  src: [
    'https://www.ncbi.nlm.nih.gov/books/NBK305419/',
    'https://www.ncbi.nlm.nih.gov/books/NBK544306/',
    'https://www.cdc.gov/std/treatment-guidelines/ectoparasitic.htm'
  ]
};

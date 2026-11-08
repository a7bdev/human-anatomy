/* ============================================================
   موسوعة الأدوية — أجسام بطاقات دفعة viral3
   rx/rx-viral3.js   (يُحمَّل عند فتح البطاقة)
   ⚠️ محتوى تثقيفي عام وليس وصفة علاج. الجرعة يحدّدها طبيب أو صيدلي.
   ============================================================ */

var RX_BODY = window.RX_BODY || {};

RX_BODY['lamivudine-zidovudine'] = {
  what: {
    ar: 'قرص واحد يجمع دواءين من فصيلة مثبّطات النسخ العكسي النيوكليوسيدية المستعملة ضد فيروس نقص المناعة البشري: اللاميفودين والزيدوفودين. والزيدوفودين من أقدم أدوية هذا الفيروس، ويُعرف أيضاً بالاختصار AZT. وجمع الاثنين في قرص واحد يقلّل عدد الحبوب ويسهّل الالتزام، لكنه تركيبة ثابتة لا يمكن تعديل مقدار أحد مكوّنيها وحده، ولهذا لا يصلح لمن يحتاج تعديلاً في أحدهما كمرضى ضعف الكلى أو الكبد. ويُبلع مع الطعام أو بدونه.',
    en: 'A single tablet joining two medicines from the nucleoside reverse transcriptase inhibitor class used against the human immunodeficiency virus: lamivudine and zidovudine. Zidovudine is one of the oldest medicines for this virus and is also known by the abbreviation AZT. Putting the two in one tablet cuts the number of pills and makes adherence easier, but it is a fixed formulation in which the amount of one component cannot be changed on its own, so it does not suit anyone who needs one of them adjusted, such as people with weak kidneys or liver. It is swallowed with or without food.'
  },
  why: {
    ar: 'يُوصف لعلاج عدوى فيروس نقص المناعة البشري، ولا يُعطى وحده بل مع دواء آخر على الأقل من أدوية الفيروس، لأن الفيروس لا يُهزم بدواء واحد. وهو لا يشفي العدوى ولا يخرج الفيروس من الجسم، لكنه يخفض كميته في الدم فيقلّ احتمال الوصول إلى الإيدز وإلى الأمراض المرافقة له. وقد أظهرت الدراسات أن علاج الأم الحامل بالزيدوفودين يقلّل انتقال الفيروس إلى جنينها. ويستمرّ أخذه ولو شعر المريض بتحسّن تامّ، ولا يُوقف إلا بقرار الطبيب.',
    en: 'It is prescribed to treat human immunodeficiency virus infection, and it is not given alone but with at least one other medicine for the virus, because the virus is not defeated by a single drug. It does not cure the infection or remove the virus from the body, but it lowers the amount in the blood, so the chance of progressing to AIDS and its accompanying illnesses falls. Studies have shown that treating a pregnant mother with zidovudine reduces passage of the virus to her baby. It is continued even when the patient feels completely well, and is stopped only on the doctor\'s decision.'
  },
  how: {
    ar: 'يحمل فيروس نقص المناعة مادته الوراثية بصيغة لا تستطيع الخلية البشرية استعمالها، فيحمل معه إنزيماً اسمه النسخ العكسي ينسخها إلى صيغة تدخل نواة الخلية وتستوطنها. والدواءان كلاهما شبيهان بلبنات البناء الطبيعية التي يستعملها هذا الإنزيم، فإذا التقطهما ووضعهما في السلسلة التي ينسخها توقّف النسخ عند موضعهما ولم تكتمل النسخة. فتقلّ الفيروسات الجديدة، وتجد خلايا المناعة فرصة لتتعافى وترتفع.',
    en: 'The immunodeficiency virus carries its genetic material in a form the human cell cannot use, so it brings an enzyme called reverse transcriptase that copies it into a form able to enter the cell nucleus and settle there. Both medicines resemble the natural building blocks this enzyme uses, so when the enzyme picks them up and places them in the chain it is copying, copying stops at that point and the copy is never completed. Fewer new viruses are made, and immune cells get a chance to recover and rise.'
  },
  effects: {
    ar: 'أشهر ما يُذكر: صداع وإسهال وحرقة في المعدة وأرق ومزاج منخفض واحتقان الأنف وسعال وألم المفاصل، ويُخبَر الطبيب إن اشتدّ أيّ منها أو دام. وقد يتغيّر توزّع الدهن في الجسم، فيتراكم في أعلى الظهر والرقبة والصدر والبطن ويقلّ في الوجه والذراعين والساقين. وحين تستعيد المناعة قوّتها في بداية العلاج قد تشتدّ أعراض عدوى قديمة كامنة أو تظهر من جديد، وهذا لا يعني فشل الدواء لكنه يستدعي إخبار الطبيب ليفحصها.',
    en: 'The commonest effects are headache, diarrhoea, heartburn, insomnia, low mood, nasal congestion, cough and joint pain, and the doctor is told if any of them is severe or lasting. Body fat may shift, building up in the upper back, neck, chest and abdomen and thinning in the face, arms and legs. As immunity regains strength early in treatment, symptoms of an old hidden infection may flare or appear anew; this does not mean the drug has failed, but the doctor must be told so it can be examined.'
  },
  warning: {
    ar: 'اذهب إلى الطوارئ فوراً عند: غثيان وقيء مع ألم في أعلى يمين البطن وفقدان شهية وتعب شديد، أو ضيق نفس مع خفقان سريع أو غير منتظم ودوخة، أو بول داكن وبراز فاتح واصفرار العينين، فهذه علامات تراكم حمض اللبن في الدم أو أذى الكبد، وكلاهما قد يهدّد الحياة. والطوارئ كذلك عند شرى وتورّم مع صعوبة بلع أو تنفّس. واتصل بالطبيب فوراً عند شحوب وضيق نفس، أو نزف وكدمات بلا سبب، أو حمّى والتهاب حلق وقشعريرة، لأن الزيدوفودين قد يخفض خلايا الدم، وعند ألم العضلات أو ضعفها، أو خدر ونمل وحرقة في الأطراف.',
    en: 'Go to the emergency department at once for: nausea and vomiting with pain in the upper right abdomen, loss of appetite and extreme tiredness; shortness of breath with a fast or irregular heartbeat and dizziness; or dark urine, pale stools and yellow eyes. These are signs of lactic acid building up in the blood or of liver injury, and both can be life-threatening. Emergency care is also needed for hives and swelling with difficulty swallowing or breathing. Call the doctor at once for paleness and breathlessness, unexplained bleeding or bruising, or fever, sore throat and chills, because zidovudine can lower blood cells, and for muscle pain or weakness, or numbness, tingling and burning in the limbs.'
  },
  interact: {
    ar: 'لا يُجمع مع الستافودين ولا مع الدوكسوروبيسين، لأن كليهما يعاكس عمل الزيدوفودين. والريبافيرين المستعمل في التهاب الكبد سي لا يُنصح بجمعه معه، فهو يضعف أثر الزيدوفودين، وقد حدث تدهور كبدي قاتل أحياناً عند مرضى يحملون الفيروسين ويأخذون الإنترفيرون مع أدوية فيروس نقص المناعة. وكل دواء يثبّط نخاع العظم يزيد خطر هبوط خلايا الدم معه، كالغانسيكلوفير والإنترفيرون وأدوية العلاج الكيميائي. ويُخبَر الطبيب والصيدلي بكل دواء آخر، وبأي علبة أخرى لهذا الفيروس حتى لا يتكرّر المكوّن نفسه.',
    en: 'It is not combined with stavudine or doxorubicin, because both work against zidovudine. Ribavirin, used in hepatitis C, is not advised with it, since it weakens the effect of zidovudine, and fatal liver deterioration has sometimes occurred in patients carrying both viruses who took interferon with medicines for the immunodeficiency virus. Any drug that suppresses the bone marrow raises the risk of falling blood counts with it, such as ganciclovir, interferon and chemotherapy. The doctor and pharmacist must be told of every other medicine, and of any other packet for this virus, so the same component is not doubled.'
  },
  avoid: {
    ar: 'لا يأخذه من أصابه من قبل تحسّس شديد من أحد مكوّنيه كالصدمة التحسّسية أو متلازمة ستيفنز جونسون. ولا يصلح في ضعف الكلى المعتبر ولا في ضعف الكبد، لأنه قرص ثابت لا تُعدَّل مكوّناته. ويُخبَر الطبيب بفقر الدم أو نقص خلايا الدم، وبأمراض العضلات، والتهاب البنكرياس السابق خاصة عند الأطفال. ومن كان مصاباً بالتهاب الكبد بي قد تسوء حالته الكبدية فجأة إن أوقفه، فلا يُوقف إلا بإشراف. وأغلب حالات حمض اللبن سُجّلت في النساء، والسمنة والاستعمال الطويل من عوامل الخطر. ويُذكر الحمل والتخطيط له، والإرضاع غير موصى به عند المصابة لأن الفيروس ينتقل باللبن.',
    en: 'It is not taken by anyone who has had a severe allergic reaction to either component, such as anaphylaxis or Stevens-Johnson syndrome. It does not suit significant kidney weakness or liver impairment, because it is a fixed tablet whose components cannot be adjusted. The doctor must be told of anaemia or low blood counts, muscle disease, and previous pancreatitis, especially in children. Anyone with hepatitis B may find the liver condition suddenly worsen if it is stopped, so it is stopped only under supervision. Most lactic acid cases have been in women, and obesity and long use are risk factors. Pregnancy and plans for it must be mentioned, and breastfeeding is not advised in an infected mother because the virus passes in milk.'
  },
  updated: '2026-09-11',
  src: [
    'https://medlineplus.gov/druginfo/meds/a601066.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d8540843-055c-47fb-9cff-81e64b1d41c3'
  ]
};

RX_BODY['isoniazid-pyridoxine-sulfamethoxazole-trimethoprim'] = {
  what: {
    ar: 'قرص وقائي واحد يجمع أربع مواد: الأيزونيازيد، وهو من أقدم أدوية السلّ؛ وفيتامين ب٦ واسمه البيريدوكسين، ووظيفته هنا حماية الأعصاب من أثر الأيزونيازيد؛ والكوتريموكسازول، وهو مضاد حيوي مركّب من السلفاميثوكسازول والتريميثوبريم. صُمّم للمتعايشين مع فيروس نقص المناعة البشري ليأخذوا حبّة واحدة بدل عدّة علب، وهو للبالغين والمراهقين والأطفال فوق وزن معيّن، أما الأطفال الصغار فلهم مستحضرات أقلّ تركيزاً.',
    en: 'A single preventive tablet joining four substances: isoniazid, one of the oldest tuberculosis medicines; vitamin B6, called pyridoxine, whose job here is to protect the nerves from isoniazid; and co-trimoxazole, an antibiotic made of sulfamethoxazole and trimethoprim. It was designed so people living with the human immunodeficiency virus take one pill instead of several packets, and it is for adults, adolescents and children above a certain weight, while small children have lower-strength products.'
  },
  why: {
    ar: 'يُوصف للوقاية لا للعلاج: ليمنع عند المصاب بفيروس نقص المناعة البشري العداوى الانتهازية التي تستغلّ ضعف مناعته، وأهمّها السلّ، والتهاب الرئة بالمتكيّسة الرئوية، وملاريا المنجلية، وداء المقوّسات، والعداوى البكتيرية الحسّاسة للكوتريموكسازول. وتذكر منظمة الصحة العالمية أن الوقاية بالكوتريموكسازول تحمي أيضاً من الالتهاب الرئوي البكتيري والإسهال. ويُقرَّر بحسب انتشار هذه العداوى في البلد وبالإرشادات الرسمية، وتتحدّد مدّته بتعافي المناعة لا بموعد ثابت.',
    en: 'It is prescribed for prevention, not treatment: to stop, in a person with the human immunodeficiency virus, the opportunistic infections that exploit weak immunity, chiefly tuberculosis, pneumocystis pneumonia, falciparum malaria, toxoplasmosis and bacterial infections sensitive to co-trimoxazole. The World Health Organization notes that co-trimoxazole prevention also protects against bacterial pneumonia and diarrhoea. It is decided according to how common these infections are locally and official guidelines, and its length is set by immune recovery, not a fixed date.'
  },
  how: {
    ar: 'الأيزونيازيد يقتل جرثومة السلّ وهي كامنة في الجسم قبل أن تنشط وتصير مرضاً، فيمنع تحوّل العدوى الكامنة إلى سلّ نشط. والسلفاميثوكسازول والتريميثوبريم يعطّلان معاً صنع حمض الفوليك داخل الميكروب، وهو غذاء لا يستطيع كثير من البكتيريا والطفيليات والفطر المسبّب لالتهاب الرئة أن يتكاثر بدونه. أما البيريدوكسين فلا يحارب شيئاً: الأيزونيازيد يستنزف هذا الفيتامين فتتأذّى الأعصاب الطرفية، ووجوده في القرص يمنع هذا الاعتلال.',
    en: 'Isoniazid kills the tuberculosis germ while it lies dormant in the body, before it wakes and becomes disease, so it prevents latent infection turning into active tuberculosis. Sulfamethoxazole and trimethoprim together disable the making of folic acid inside the microbe, a nutrient that many bacteria, parasites and the fungus behind the pneumonia cannot multiply without. Pyridoxine fights nothing: isoniazid drains this vitamin and the peripheral nerves suffer, and its presence in the tablet prevents that nerve damage.'
  },
  effects: {
    ar: 'أشيع ما يُذكر: غثيان وإسهال وطفح جلدي وصداع، وارتفاع عابر في إنزيمات الكبد يظهر في التحاليل، وارتفاع البوتاسيوم في الدم، ونموّ فطر المبيضات في الفم. والاعتلال العصبي في الأطراف من أشهر آثار الأيزونيازيد، لكن البيريدوكسين في القرص يقلّله كثيراً. وقد يسبّب تناوله مع أغذية غنية بالهيستامين أو التيرامين كبعض الأجبان والأسماك احمرار الجلد وحكّة وسخونة وخفقاناً وتعرّقاً وصداعاً ودوخة. ويُشرب ماء كافٍ لتفادي ترسّب بلّورات في البول.',
    en: 'The commonest effects are nausea, diarrhoea, skin rash and headache, a passing rise in liver enzymes seen on tests, a rise in blood potassium, and candida overgrowth in the mouth. Nerve damage in the limbs is one of the best-known effects of isoniazid, but the pyridoxine in the tablet greatly reduces it. Taking it with foods rich in histamine or tyramine, such as some cheeses and fish, can cause skin flushing, itching, a hot feeling, palpitations, sweating, headache and dizziness. Enough water is drunk to avoid crystals forming in the urine.'
  },
  warning: {
    ar: 'أوقفه واذهب إلى الطوارئ عند طفح مع فقاعات أو تقشّر أو تغيّر لون الجلد، أو قروح في الفم والعينين، خاصة مع حمّى والتهاب حلق وألم مفاصل، فهذه بداية تفاعل جلدي قد يقتل، ولا يُعاد الكوتريموكسازول بعدها أبداً. وأوقفه واتصل بالطبيب فوراً عند بول داكن أو اصفرار أو تعب شديد أو فقدان شهية وغثيان أو ألم في أعلى يمين البطن لأنها علامات أذى الكبد، وعند نزف أو كدمات أو التهابات متكرّرة، وعند ألم بطن شديد، وعند سعال وضيق نفس جديدين. والإسهال الشديد المستمرّ يستدعي الطبيب ولا يُعالج بمضادات الإسهال.',
    en: 'Stop it and go to the emergency department for a rash with blisters, peeling or skin discolouration, or sores in the mouth and eyes, especially with fever, sore throat and joint pain; this is the start of a skin reaction that can kill, and co-trimoxazole is never given again afterwards. Stop it and call the doctor at once for dark urine, yellowing, extreme tiredness, loss of appetite and nausea, or pain in the upper right abdomen, which are signs of liver injury; for bleeding, bruising or repeated infections; for severe abdominal pain; and for new cough and breathlessness. Severe, persistent diarrhoea needs the doctor and is not treated with antidiarrhoeal medicines.'
  },
  interact: {
    ar: 'الوارفارين يشتدّ أثره معه فيحتاج مراقبة تجلّط الدم. والفينيتوين والكاربامازيبين والفالبروات قد ترتفع مستوياتها، ويزيد اجتماعها معه خطر أذى الكبد. ومع الميثوتريكسيت والبيريميثامين والزيدوفودين والغانسيكلوفير يزيد خطر هبوط خلايا الدم، والكلوزابين ممنوع معه. ومدرّات البول الحافظة للبوتاسيوم ومثبّطات الإنزيم المحوّل وحاصرات الأنجيوتنسين ترفع البوتاسيوم. ويرفع مستوى الديجوكسين، ويقوّي أثر حبوب السكّري فيهبط السكّر. والأمودياكين والسلفادوكسين مع البيريميثامين ممنوعان معه. ومضادات الحموضة تقلّل امتصاص الأيزونيازيد، والكحول يزيد أذى الكبد.',
    en: 'Warfarin becomes stronger with it, so blood clotting needs monitoring. Phenytoin, carbamazepine and valproate may rise, and combining them with it raises the risk of liver injury. With methotrexate, pyrimethamine, zidovudine and ganciclovir the risk of falling blood counts rises, and clozapine is forbidden with it. Potassium-sparing diuretics, ACE inhibitors and angiotensin receptor blockers raise potassium. It raises digoxin levels and strengthens diabetes tablets, so sugar can fall. Amodiaquine and sulfadoxine with pyrimethamine are forbidden with it. Antacids reduce absorption of isoniazid, and alcohol increases liver injury.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس من أحد مكوّناته أو من أدوية السلفا، ولا من عنده مرض كبد حادّ أو أذى كبدي سابق من الأيزونيازيد، أو البرفيرية، أو فقر دم ضخم الأرومات من نقص الفولات، أو من هبطت صفائحه سابقاً بسبب هذه الأدوية. ولا يُعطى لمن عنده سلّ نشط أو ملاريا أو عدوى قائمة، فتلك تحتاج علاجاً كاملاً لا وقاية. ويُراقَب مرضى نقص خميرة الفوال والسكّري والكلى والمسنّون ومن يشرب الكحول. وفي الحمل يُعطى فقط إن غلبت فائدته، مع مكمّل الفولات، ويُتجنّب قرب الولادة إن خيف يرقان المولود. ويدخل لبن الأم، وقد يحتاج الرضيع البيريدوكسين.',
    en: 'It is not taken by anyone allergic to one of its components or to sulfa drugs, nor by anyone with acute liver disease or previous isoniazid liver injury, porphyria, megaloblastic anaemia from folate lack, or platelets that previously fell because of these drugs. It is not given to anyone with active tuberculosis, malaria or an ongoing infection, which need full treatment, not prevention. People with favism enzyme deficiency, diabetes or kidney disease, the elderly and those who drink alcohol are monitored. In pregnancy it is given only if benefit outweighs risk, with a folate supplement, and avoided near delivery if newborn jaundice is feared. It enters breast milk, and the infant may need pyridoxine.'
  },
  updated: '2026-09-11',
  src: [
    'https://extranet.who.int/prequal/sites/default/files/whopar_files/HA639part4.pdf',
    'https://www.ncbi.nlm.nih.gov/books/NBK298965/'
  ]
};

RX_BODY['sofosbuvir'] = {
  what: {
    ar: 'السوفوسبوفير مضاد فيروسات يعمل مباشرة على فيروس التهاب الكبد سي، من فصيلة مثبّطات البوليميراز النيوكليوتيدية، وهو العمود الذي تقوم عليه أكثر علاجات هذا المرض الحديثة. ولا يُعطى وحده أبداً، بل مع دواء شريك: قد يكون الريبافيرين، أو دواءً من فئة أخرى كالداكلاتاسفير أو الرافيداسفير، ويدخل كذلك في أقراص مركّبة جاهزة مع الفيلباتاسفير أو الليديباسفير. ويأتي أقراصاً للبالغين وحبيبات للأطفال الذين لا يبلعون الأقراص.',
    en: 'Sofosbuvir is an antiviral acting directly on the hepatitis C virus, from the nucleotide polymerase inhibitor class, and it is the backbone of most modern treatments for this disease. It is never given alone, but with a partner drug: this may be ribavirin, or a drug from another class such as daclatasvir or ravidasvir, and it also comes in ready-made combination tablets with velpatasvir or ledipasvir. It comes as tablets for adults and as pellets for children who cannot swallow tablets.'
  },
  why: {
    ar: 'يُوصف لعلاج التهاب الكبد سي المزمن عند البالغين والأطفال، والغاية أن يختفي الفيروس من الدم لا أن تقلّ كميته فقط. والشريك المختار يحدّد أنماط الفيروس الجينية التي يغطّيها العلاج: فمع الداكلاتاسفير أو الرافيداسفير يصير فعّالاً على الأنماط كلها بحسب قائمة الأدوية الأساسية لمنظمة الصحة العالمية. ويستمرّ حتى نهاية المدّة التي يحدّدها الطبيب ولو شعر المريض بتحسّن أو لم تكن عنده أعراض أصلاً، ولا يُوقف ولا يُغيَّر إلا بقراره.',
    en: 'It is prescribed to treat chronic hepatitis C in adults and children, and the aim is for the virus to disappear from the blood, not merely to fall. The chosen partner determines which genetic types of the virus the treatment covers: with daclatasvir or ravidasvir it becomes effective against all types, according to the World Health Organization essential medicines list. It continues until the end of the period set by the doctor, even if the patient feels better or never had symptoms at all, and it is stopped or changed only on the doctor\'s decision.'
  },
  how: {
    ar: 'ينسخ فيروس التهاب الكبد سي مادته الوراثية داخل خلايا الكبد بإنزيم خاص به يسمّى البوليميراز. والسوفوسبوفير يدخل الخلية الكبدية فيتحوّل فيها إلى صورة نشطة تشبه إحدى لبنات البناء التي يستعملها هذا الإنزيم، فيلتقطها الإنزيم ويضعها في السلسلة الجديدة، فتنقطع السلسلة عندها ولا تكتمل نسخة الفيروس. ولأن الدواء الشريك يضرب هدفاً آخر في الفيروس، يصعب على الفيروس أن يفلت من الضربتين معاً.',
    en: 'The hepatitis C virus copies its genetic material inside liver cells using its own enzyme called polymerase. Sofosbuvir enters the liver cell and is converted there into an active form that resembles one of the building blocks this enzyme uses, so the enzyme picks it up and places it in the new chain, the chain breaks off at that point, and the viral copy is never completed. Because the partner drug hits another target in the virus, it is hard for the virus to escape both blows at once.'
  },
  effects: {
    ar: 'أشيع ما سُجّل: تعب وصداع، ثم إسهال وألم عضلي وأرق وعصبية وحكّة وطفح جلدي، ويُخبَر الطبيب إن اشتدّ أيّ منها أو دام. وقد يظهر فقر دم، خاصة حين يكون الشريك الريبافيرين، علامته شحوب ودوخة وضيق نفس وضعف، وقد يصل إلى ألم في الصدر وتشوّش وضعف ذاكرة، ويستدعي هذا الاتصال بالطبيب فوراً. ولأن السوفوسبوفير لا يُعطى إلا مع شريك، فآثار الدواء المرافق وتحذيراته تنطبق على العلاج كله، ويُقرأ معه دليل الشريك.',
    en: 'The commonest effects are tiredness and headache, then diarrhoea, muscle pain, insomnia, irritability, itching and rash, and the doctor is told if any is severe or lasting. Anaemia may appear, especially when the partner is ribavirin, with paleness, dizziness, breathlessness and weakness, possibly reaching chest pain, confusion and memory problems, which calls for contacting the doctor at once. Because sofosbuvir is only ever given with a partner, the effects and warnings of the accompanying drug apply to the whole treatment, and the partner\'s leaflet is read alongside.'
  },
  warning: {
    ar: 'اذهب إلى الطوارئ فوراً إن كنت تأخذ الأميودارون وظهر: إغماء أو شبه إغماء، دوخة، ضعف وتوعّك، ضيق نفس، ألم صدر، تشوّش أو ضعف ذاكرة، فهذا بطء قلب خطير سُجّلت معه حالات احتاجت منظّم ضربات وسكتة قلبية قاتلة، ويظهر عادة خلال ساعات أو أيام من البدء وقد يتأخّر أسابيع. واتصل بالطبيب فوراً أثناء العلاج أو بعد انتهائه عند تعب شديد، أو اصفرار الجلد والعينين، أو فقدان شهية وغثيان وقيء، أو براز فاتح، أو ألم بطن، أو بول داكن، لأن التهاب الكبد بي الكامن قد ينشط نشاطاً خطيراً.',
    en: 'Go to the emergency department at once if you take amiodarone and develop fainting or near-fainting, dizziness, weakness and malaise, breathlessness, chest pain, confusion or memory problems: this is a dangerous slowing of the heart, with cases needing a pacemaker and a fatal cardiac arrest recorded, usually within hours or days of starting but sometimes weeks later. Call the doctor at once during treatment or after it ends for extreme tiredness, yellow skin or eyes, loss of appetite, nausea and vomiting, pale stools, abdominal pain or dark urine, because hidden hepatitis B may reactivate seriously.'
  },
  interact: {
    ar: 'الأميودارون، دواء اضطراب نظم القلب، أخطر ما يُجمع معه، ولا يُنصح بجمعهما، فإن لم يوجد بديل فتحت مراقبة قلبية، ويزيد الخطر مع حاصرات بيتا وأمراض القلب وتقدّم مرض الكبد. والريفامبيسين ونبتة سانت جون تخفضان مستوى السوفوسبوفير بشدّة فيضعف العلاج، ولا يُنصح بجمعهما معه. ولأنه يُعطى مع شريك دائماً، فتعارضات الشريك كلها تنطبق أيضاً. ولا يُبدأ دواء جديد ولا يُوقف أثناء العلاج بلا استشارة الطبيب أو الصيدلي، ولا الأعشاب والمكمّلات.',
    en: 'Amiodarone, a heart-rhythm drug, is the most dangerous thing to combine with it; the combination is not advised, and if there is no alternative it happens under heart monitoring, with the risk higher alongside beta blockers, heart disease and advanced liver disease. Rifampicin and St John\'s wort sharply lower sofosbuvir levels and weaken treatment, and are not advised with it. Because it is always given with a partner, all the partner\'s interactions apply too. No medicine is started or stopped during treatment without asking the doctor or pharmacist, and the same goes for herbs and supplements.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس منه أو من أحد مكوّناته، وموانع الدواء الشريك تنطبق عليه كذلك. ويُخبَر الطبيب بزراعة كبد سابقة، أو إصابة بفيروس نقص المناعة، أو أي مرض كبدي غير التهاب الكبد سي، أو مرض كلى أو غسيل كلوي. ويُفحص الدم لالتهاب الكبد بي قبل البدء. وإن كان الشريك الريبافيرين فالحمل ممنوع عند المريضة وعند زوجة المريض معاً، لأن الريبافيرين يؤذي الجنين، فيُطلب اختبار حمل ووسيلة منع فعّالة. ويُذكر الإرضاع، إذ لا يُعرف إن كان يمرّ في لبن الأم.',
    en: 'It is not taken by anyone allergic to it or its ingredients, and the partner drug\'s contraindications apply too. The doctor is told of a previous liver transplant, infection with the human immunodeficiency virus, any liver disease other than hepatitis C, kidney disease or dialysis. Blood is tested for hepatitis B before starting. If the partner is ribavirin, pregnancy is forbidden for a female patient and for the partner of a male patient alike, because ribavirin harms the fetus, so a pregnancy test and effective contraception are required. Breastfeeding is mentioned, since it is not known whether it passes into breast milk.'
  },
  updated: '2026-09-11',
  src: [
    'https://medlineplus.gov/druginfo/meds/a614014.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80beab2c-396e-4a37-a4dc-40fdb62859cf',
    'https://list.essentialmeds.org/recommendations/1240',
    'https://list.essentialmeds.org/recommendations/1332'
  ]
};

RX_BODY['sofosbuvir-velpatasvir'] = {
  what: {
    ar: 'قرص مركّب يجمع السوفوسبوفير، مثبّط إنزيم البوليميراز في فيروس التهاب الكبد سي، مع الفيلباتاسفير، وهو من فئة أخرى تثبّط بروتيناً فيروسياً ينظّم التضاعف. ويُعدّ من العلاجات الشاملة، أي أنه يعمل على الأنماط الجينية كلها للفيروس، فيبسّط العلاج. ويؤخذ مع الطعام أو بدونه، وله حبيبات للأطفال تُرشّ على طعام لين غير حمضي وتُبلع دون مضغ. وقد يُضاف إليه الريبافيرين في بعض الحالات بحسب قرار الطبيب.',
    en: 'A combination tablet joining sofosbuvir, which inhibits the polymerase enzyme of the hepatitis C virus, with velpatasvir, from another class that inhibits a viral protein organising replication. It is counted among the pangenotypic treatments, meaning it works on all genetic types of the virus, which simplifies treatment. It is taken with or without food, and has pellets for children that are sprinkled on soft, non-acidic food and swallowed without chewing. Ribavirin may be added in some cases, as the doctor decides.'
  },
  why: {
    ar: 'يُوصف لعلاج التهاب الكبد سي المزمن عند البالغين والأطفال، وحده في أغلب الحالات أو مع الريبافيرين في بعضها. وميزته الكبرى أنه شامل للأنماط الجينية الستة كلها، ولهذا يسهل استعماله حتى حين لا يتيسّر تحديد نمط الفيروس. والغاية أن يختفي الفيروس من الدم لا أن تقلّ كميته فحسب. ويستمرّ أخذه حتى نهاية المدّة التي يحدّدها الطبيب ولو زالت الأعراض أو لم تكن هناك أعراض أصلاً، ولا يُوقف إلا بقراره.',
    en: 'It is prescribed to treat chronic hepatitis C in adults and children, alone in most cases or with ribavirin in some. Its great advantage is that it covers all six genetic types, so it is easy to use even when identifying the virus type is not practical. The aim is for the virus to disappear from the blood, not merely to fall. It is continued until the end of the period set by the doctor even if symptoms fade or there were none at all, and it is stopped only on the doctor\'s decision.'
  },
  how: {
    ar: 'يضرب القرص الفيروس في موضعين. السوفوسبوفير يتحوّل في خلية الكبد إلى صورة تشبه لبنة البناء التي يستعملها إنزيم البوليميراز الفيروسي، فيضعها الإنزيم في السلسلة الجديدة فتنقطع ولا تكتمل. والفيلباتاسفير يلتصق ببروتين فيروسي لا عمل إنزيمياً له، لكنه ضروري لتنظيم ورشة النسخ وتجميع الفيروسات الجديدة، فيعطّل الورشة كلها. واجتماع الضربتين يجعل إفلات الفيروس أصعب بكثير من مواجهة دواء واحد.',
    en: 'The tablet strikes the virus in two places. Sofosbuvir is converted in the liver cell into a form resembling the building block used by the viral polymerase enzyme, so the enzyme places it in the new chain, which breaks off and is never completed. Velpatasvir sticks to a viral protein that has no enzyme action but is essential for organising the copying workshop and assembling new viruses, so it disables the whole workshop. Combining the two blows makes escape much harder for the virus than facing a single drug.'
  },
  effects: {
    ar: 'أشيع ما يُذكر: صداع وتعب، ثم إسهال وطفح جلدي وقلّة طاقة وعصبية ومزاج منخفض وأرق، ويُخبَر الطبيب إن اشتدّ أيّ منها أو استمرّ. وعند الأطفال الصغار قد يحدث قيء أو لفظ الحبيبات بعد بلعها، فيُسأل الطبيب عمّا يُفعل. وإن أُضيف الريبافيرين زادت آثار العلاج، ومنها فقر الدم. والحبيبات لا تُمضغ، وتُؤكل خلال دقائق من رشّها على الطعام، ولا يُوقف القرص من تلقاء النفس بسبب أثر خفيف بل يُسأل الطبيب أو الصيدلي.',
    en: 'The commonest effects are headache and tiredness, then diarrhoea, rash, low energy, irritability, low mood and insomnia, and the doctor is told if any is severe or lasting. Young children may vomit or spit out the pellets after swallowing, and the doctor is asked what to do. If ribavirin is added, the effects of treatment increase, anaemia among them. The pellets are not chewed and are eaten within minutes of being sprinkled on food, and the tablet is not stopped on one\'s own because of a mild effect; the doctor or pharmacist is asked instead.'
  },
  warning: {
    ar: 'اتصل بالطبيب فوراً أثناء العلاج أو بعد انتهائه عند تعب شديد، أو اصفرار الجلد والعينين، أو فقدان شهية وغثيان وقيء، أو براز فاتح، أو ألم بطن، أو بول داكن، فقد يكون التهاب الكبد بي الكامن قد نشط، وقد يصير نشاطه مهدّداً للحياة. واذهب إلى الطوارئ فوراً إن كنت تأخذ الأميودارون وظهر إغماء أو شبه إغماء، أو دوخة، أو ضعف، أو ضيق نفس، أو ألم صدر، أو تشوّش، فهذا بطء قلب خطير سُجّلت معه حالات احتاجت منظّم ضربات، ويظهر عادة خلال ساعات أو أيام وقد يتأخّر أسابيع.',
    en: 'Call the doctor at once during treatment or after it ends for extreme tiredness, yellow skin or eyes, loss of appetite, nausea and vomiting, pale stools, abdominal pain or dark urine, since hidden hepatitis B may have reactivated, and its activity can become life-threatening. Go to the emergency department at once if you take amiodarone and develop fainting or near-fainting, dizziness, weakness, breathlessness, chest pain or confusion: this is a dangerous slowing of the heart, with cases needing a pacemaker, usually within hours or days but sometimes weeks later.'
  },
  interact: {
    ar: 'الفيلباتاسفير يذوب أقلّ كلما قلّت حموضة المعدة، فأدوية الحموضة تضعفه: مضادات الحموضة يُفصل بينها وبينه بساعات، وحاصرات الحموضة كالفاموتيدين بتوقيت يحدّده الطبيب، وأما مثبّطات مضخّة البروتون كالأوميبرازول فيُتجنّب جمعها معه إلا بتوجيه طبي. ولا يُجمع مع نبتة سانت جون ولا الريفامبيسين والريفابوتين ولا الكاربامازيبين والفينيتوين والفينوباربيتال ولا الإيفافيرينز، لأنها تسقط مستواه. ويرفع مستوى الروزوفاستاتين والأتورفاستاتين فيزيد خطر أذى العضلات، ويرفع التينوفوفير. والأميودارون أخطرها.',
    en: 'Velpatasvir dissolves less as stomach acid falls, so acid medicines weaken it: antacids are separated from it by hours, acid blockers such as famotidine are timed as the doctor directs, and proton pump inhibitors such as omeprazole are avoided with it except on medical direction. It is not combined with St John\'s wort, rifampicin, rifabutin, carbamazepine, phenytoin, phenobarbital or efavirenz, because they drop its level. It raises rosuvastatin and atorvastatin, increasing the risk of muscle injury, and raises tenofovir. Amiodarone is the most dangerous of all.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس من أحد مكوّنيه. ويُفحص الدم لالتهاب الكبد بي قبل البدء. ويُخبَر الطبيب بزراعة كبد سابقة، أو إصابة بفيروس نقص المناعة، أو نوع آخر من التهاب الكبد، أو مرض كلى أو غسيل كلوي. وإن أُضيف إليه الريبافيرين صار الحمل ممنوعاً على المريضة وعلى زوجة المريض أثناء العلاج ولأشهر بعده، لأن الريبافيرين يؤذي الجنين، ويلزم اختبار حمل ووسيلة منع فعّالة. ولا يُعرف إن كان يمرّ في لبن الأم، فيُقرّر الإرضاع مع الطبيب.',
    en: 'It is not taken by anyone allergic to either component. Blood is tested for hepatitis B before starting. The doctor is told of a previous liver transplant, infection with the human immunodeficiency virus, another type of hepatitis, kidney disease or dialysis. If ribavirin is added, pregnancy is forbidden for a female patient and for the partner of a male patient during treatment and for months afterwards, because ribavirin harms the fetus, and a pregnancy test and effective contraception are required. It is not known whether it passes into breast milk, so breastfeeding is decided with the doctor.'
  },
  updated: '2026-09-11',
  src: [
    'https://medlineplus.gov/druginfo/meds/a616034.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f'
  ]
};

RX_BODY['daclatasvir'] = {
  what: {
    ar: 'الداكلاتاسفير أول دواء في فئة من مضادات فيروس التهاب الكبد سي تعمل على بروتين فيروسي ضروري لتضاعف الفيروس. ولا يُعطى وحده أبداً، بل يُقرن بالسوفوسبوفير، وأحياناً يُضاف إليهما الريبافيرين. وقد انتهى ترخيصه في الاتحاد الأوروبي لأن الشركة المصنّعة لم تطلب تجديده لأسباب تجارية لا لسبب يتعلّق بسلامته، ويبقى مع السوفوسبوفير مدرجاً في قائمة الأدوية الأساسية لمنظمة الصحة العالمية. وفي أقراصه سكّر اللاكتوز.',
    en: 'Daclatasvir is the first drug in a class of hepatitis C antivirals that act on a viral protein essential for replication. It is never given alone, but paired with sofosbuvir, sometimes with ribavirin added. Its licence in the European Union lapsed because the manufacturer did not seek renewal for commercial reasons, not for any safety reason, and together with sofosbuvir it remains on the World Health Organization essential medicines list. Its tablets contain lactose.'
  },
  why: {
    ar: 'يُوصف لعلاج التهاب الكبد سي المزمن عند البالغين، مقروناً بالسوفوسبوفير، وهذا الثنائي يغطّي الأنماط الجينية كلها للفيروس بحسب قائمة الأدوية الأساسية لمنظمة الصحة العالمية. والغاية أن يختفي الفيروس من الدم بعد المدّة المقرّرة. ولأن تعارضاته مع أدوية كثيرة تستدعي مراجعة دقيقة، يُعرض على الطبيب كل ما يأخذه المريض قبل اختياره. ويستمرّ حتى نهاية المدّة التي يحدّدها الطبيب ولو شعر المريض بتحسّن، ولا يُوقف ولا يُغيَّر إلا بقراره.',
    en: 'It is prescribed to treat chronic hepatitis C in adults, paired with sofosbuvir, and this pair covers all genetic types of the virus according to the World Health Organization essential medicines list. The aim is for the virus to disappear from the blood after the set period. Because its interactions with many drugs need careful review, everything the patient takes is shown to the doctor before it is chosen. It continues until the end of the period set by the doctor even if the patient feels better, and it is stopped or changed only on the doctor\'s decision.'
  },
  how: {
    ar: 'يحتاج فيروس التهاب الكبد سي بروتيناً لا يعمل إنزيماً، لكنه كالمشرف على ورشة النسخ: يجمع أدوات التضاعف في مكانها ثم يساعد في تجميع الفيروسات الجديدة وإخراجها. والداكلاتاسفير يلتصق بهذا البروتين فيعطّله، فتتعثّر ورشة النسخ ويقلّ خروج فيروسات جديدة. أما السوفوسبوفير المرافق فيضرب الإنزيم الناسخ نفسه، فيحاصر الدواءان الفيروس من جهتين، ولهذا لا يُستعمل الداكلاتاسفير منفرداً أبداً.',
    en: 'The hepatitis C virus needs a protein that does not act as an enzyme but is like the supervisor of the copying workshop: it gathers the replication tools in place and then helps assemble and release new viruses. Daclatasvir sticks to this protein and disables it, so the workshop stumbles and fewer new viruses emerge. The accompanying sofosbuvir strikes the copying enzyme itself, so the two drugs corner the virus from two sides, which is why daclatasvir is never used on its own.'
  },
  effects: {
    ar: 'مع السوفوسبوفير كان أكثر ما سُجّل التعب والصداع والغثيان، ثم الإسهال، وكانت الآثار الشديدة نادرة في الدراسات. وسُجّلت الدوخة، ومع الإنترفيرون والريبافيرين سُجّل أيضاً ضعف التركيز وتشوّش الرؤية وضعفها، ولهذا لا يقود من أحسّ بدوخة أو اضطراب في الرؤية أو التركيز، ولا يشغّل آلات. ويُخبَر الطبيب من لا يتحمّل اللاكتوز لوجوده في الأقراص، ويُخبَر كذلك إن اشتدّ أي أثر أو استمرّ.',
    en: 'With sofosbuvir the commonest effects were tiredness, headache and nausea, then diarrhoea, and severe effects were rare in the studies. Dizziness was reported, and with interferon and ribavirin poor concentration and blurred or reduced vision were reported too, so anyone who feels dizzy or has trouble with vision or concentration should not drive or operate machines. Anyone intolerant of lactose tells the doctor, since it is in the tablets, and the doctor is also told if any effect is severe or lasting.'
  },
  warning: {
    ar: 'اذهب إلى الطوارئ فوراً إن كنت تأخذ الأميودارون أو أوقفته خلال الأشهر الماضية وظهر: إغماء أو شبه إغماء، دوخة أو خفّة رأس، ضعف وتوعّك، ضيق نفس، ألم صدر، تشوّش أو ضعف ذاكرة، فقد سُجّل مع الداكلاتاسفير والسوفوسبوفير والأميودارون بطء قلب شديد وإحصار قلبي يهدّدان الحياة. واتصل بالطبيب فوراً أثناء العلاج أو بعده عند تعب شديد، أو اصفرار الجلد والعينين، أو فقدان شهية وغثيان وقيء، أو براز فاتح، أو ألم بطن، أو بول داكن، فقد يكون التهاب الكبد بي الكامن قد نشط.',
    en: 'Go to the emergency department at once if you take amiodarone, or stopped it in recent months, and develop fainting or near-fainting, dizziness or light-headedness, weakness and malaise, breathlessness, chest pain, confusion or memory problems: severe slowing of the heart and heart block that threaten life have been recorded with daclatasvir, sofosbuvir and amiodarone together. Call the doctor at once during treatment or after it for extreme tiredness, yellow skin or eyes, loss of appetite, nausea and vomiting, pale stools, abdominal pain or dark urine, since hidden hepatitis B may have reactivated.'
  },
  interact: {
    ar: 'ممنوع جمعه مع الأدوية التي تنشّط إنزيمات الكبد بقوّة فتسقط مستواه ويفشل العلاج: الفينيتوين والكاربامازيبين والأوكسكاربازيبين والفينوباربيتال، والريفامبيسين والريفابوتين والريفابنتين، والديكساميثازون المأخوذ بالفم أو الحقن، ونبتة سانت جون. وأدوية أخرى ترفع مستواه أو تخفضه بدرجة أقلّ فيحتاج تعديلاً يقرّره الطبيب. وهو بدوره قد يرفع مستوى الدابيغاتران وأدوية أخرى ضيّقة الهامش فتلزم المراقبة، ومع الوارفارين يُراقَب التجلّط لأن وظيفة الكبد تتغيّر أثناء العلاج. والأميودارون أخطر ما يُجمع معه.',
    en: 'It is forbidden with medicines that strongly stimulate liver enzymes, dropping its level so treatment fails: phenytoin, carbamazepine, oxcarbazepine, phenobarbital, rifampicin, rifabutin, rifapentine, dexamethasone taken by mouth or injection, and St John\'s wort. Other drugs raise or lower its level to a lesser degree and need an adjustment the doctor decides. It in turn may raise dabigatran and other narrow-margin drugs, so monitoring is needed, and with warfarin clotting is watched because liver function changes during treatment. Amiodarone is the most dangerous thing to combine with it.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس منه أو من مكوّناته. ولا يُستعمل في الحمل، ولا عند امرأة قادرة على الحمل لا تستعمل وسيلة منع، لأنه أحدث تشوّهات في أجنّة الحيوانات، وتستمرّ وسيلة المنع الفعّالة أسابيع بعد انتهاء العلاج. وتُمنع الرضاعة أثناء أخذه، لأن مروره في اللبن ظهر في الحيوانات. وإن أُضيف الريبافيرين فالحمل ممنوع أيضاً على زوجة المريض. ويُخبَر الطبيب بزراعة الكبد، وبأي مرض كبدي آخر، وبأمراض القلب، ويُفحص الدم لالتهاب الكبد بي قبل البدء.',
    en: 'It is not taken by anyone allergic to it or its ingredients. It is not used in pregnancy, nor by a woman able to conceive who is not using contraception, because it caused malformations in animal fetuses, and effective contraception continues for weeks after treatment ends. Breastfeeding is not allowed while taking it, since passage into milk was seen in animals. If ribavirin is added, pregnancy is also forbidden for the partner of a male patient. The doctor is told of a liver transplant, any other liver disease and heart disease, and blood is tested for hepatitis B before starting.'
  },
  updated: '2026-09-11',
  src: [
    'https://medlineplus.gov/druginfo/meds/a615044.html',
    'https://www.ema.europa.eu/en/documents/product-information/daklinza-epar-product-information_en.pdf',
    'https://www.ema.europa.eu/en/medicines/human/EPAR/daklinza',
    'https://list.essentialmeds.org/recommendations/1240'
  ]
};

RX_BODY['daclatasvir-sofosbuvir'] = {
  what: {
    ar: 'قرص مركّب واحد يجمع الداكلاتاسفير، الذي يعطّل بروتيناً فيروسياً ينظّم التضاعف، مع السوفوسبوفير، الذي يعطّل الإنزيم الناسخ لفيروس التهاب الكبد سي. وهو الصيغة الجاهزة للثنائي الذي يُصرف أيضاً علبتين منفصلتين، وتدرجه منظمة الصحة العالمية في قائمة الأدوية الأساسية للبالغين وفي قائمة الأطفال. ولأنه قرص ثابت فلا يمكن تعديل أحد مكوّنيه وحده، فمن احتاج تعديل الداكلاتاسفير بسبب أدويته الأخرى قد يحتاج العلبتين منفصلتين.',
    en: 'A single combination tablet joining daclatasvir, which disables a viral protein organising replication, with sofosbuvir, which disables the copying enzyme of the hepatitis C virus. It is the ready-made form of a pair also dispensed as two separate packets, and the World Health Organization lists it as an essential medicine for adults and on its children\'s list. Because it is a fixed tablet, one component cannot be adjusted alone, so anyone needing a daclatasvir adjustment because of other medicines may need the two separate packets.'
  },
  why: {
    ar: 'يُوصف لعلاج التهاب الكبد سي المزمن، وتصنّفه قائمة الأدوية الأساسية لمنظمة الصحة العالمية ضمن التوليفات الشاملة لكل الأنماط الجينية، أي أنه يصلح على اختلاف نمط الفيروس. وقيمته أنه يجمع العلاج كله في قرص واحد فيسهل الالتزام به. والغاية أن يختفي الفيروس من الدم لا أن تقلّ كميته فقط. ويستمرّ حتى نهاية المدّة التي يحدّدها الطبيب ولو شعر المريض بتحسّن تامّ أو لم تكن عنده أعراض أصلاً، ولا يُوقف إلا بقراره.',
    en: 'It is prescribed to treat chronic hepatitis C, and the World Health Organization essential medicines list classes it among the combinations covering all genetic types, meaning it suits whatever the virus type. Its value is that it puts the whole treatment in one tablet, which makes adherence easier. The aim is for the virus to disappear from the blood, not merely to fall. It continues until the end of the period set by the doctor even if the patient feels completely well or never had symptoms, and it is stopped only on the doctor\'s decision.'
  },
  how: {
    ar: 'يضرب القرص الفيروس في موضعين في آن واحد. السوفوسبوفير يتحوّل داخل خلية الكبد إلى صورة تشبه لبنة من لبنات المادة الوراثية، فيلتقطها الإنزيم الناسخ للفيروس ويضعها في السلسلة الجديدة فتنقطع ولا تكتمل. والداكلاتاسفير يلتصق بالبروتين الذي يرتّب ورشة النسخ ويجمع الفيروسات الجديدة، فيعطّل الورشة. واجتماع الضربتين يجعل إفلات الفيروس أصعب بكثير من مواجهة دواء واحد، ولهذا لا يُستعمل أيّ منهما منفرداً.',
    en: 'The tablet strikes the virus in two places at once. Sofosbuvir is converted inside the liver cell into a form resembling a building block of genetic material, so the virus\'s copying enzyme picks it up and places it in the new chain, which breaks off and is never completed. Daclatasvir sticks to the protein that arranges the copying workshop and assembles new viruses, disabling the workshop. Combining the two blows makes escape much harder than facing one drug, which is why neither is used on its own.'
  },
  effects: {
    ar: 'أكثر ما سُجّل مع هذا الثنائي في الدراسات: التعب والصداع والغثيان، ثم الإسهال والدوخة، وكانت الآثار الشديدة نادرة. وقد يظهر مع السوفوسبوفير أرق وعصبية وحكّة وطفح وألم عضلي. ومن أحسّ بدوخة أو اضطراب في التركيز أو الرؤية فلا يقود ولا يشغّل آلات. ويُخبَر الطبيب إن اشتدّ أي أثر أو استمرّ، ولا يُوقف القرص من تلقاء النفس بسبب أثر خفيف بل يُسأل الطبيب أو الصيدلي عمّا يخفّفه.',
    en: 'The commonest effects of this pair in studies were tiredness, headache and nausea, then diarrhoea and dizziness, and severe effects were rare. With sofosbuvir, insomnia, irritability, itching, rash and muscle pain may also appear. Anyone who feels dizzy or has trouble with concentration or vision should not drive or operate machines. The doctor is told if any effect is severe or lasting, and the tablet is not stopped on one\'s own because of a mild effect; the doctor or pharmacist is asked how to ease it.'
  },
  warning: {
    ar: 'اذهب إلى الطوارئ فوراً إن كنت تأخذ الأميودارون أو أوقفته خلال الأشهر الماضية وظهر: إغماء أو شبه إغماء، دوخة أو خفّة رأس، ضعف وتوعّك، ضيق نفس، ألم صدر، تشوّش أو ضعف ذاكرة، فقد سُجّل مع هذا الثنائي والأميودارون بطء قلب شديد وإحصار قلبي يهدّدان الحياة، وسكتة قلبية قاتلة مع أنظمة السوفوسبوفير. واتصل بالطبيب فوراً أثناء العلاج أو بعده عند تعب شديد، أو اصفرار الجلد والعينين، أو فقدان شهية وقيء، أو براز فاتح، أو ألم بطن، أو بول داكن، لاحتمال نشاط التهاب الكبد بي الكامن.',
    en: 'Go to the emergency department at once if you take amiodarone, or stopped it in recent months, and develop fainting or near-fainting, dizziness or light-headedness, weakness and malaise, breathlessness, chest pain, confusion or memory problems: severe slowing of the heart and heart block threatening life have been recorded with this pair and amiodarone, and fatal cardiac arrest with sofosbuvir regimens. Call the doctor at once during treatment or after it for extreme tiredness, yellow skin or eyes, loss of appetite and vomiting, pale stools, abdominal pain or dark urine, since hidden hepatitis B may reactivate.'
  },
  interact: {
    ar: 'ممنوع مع ما يسقط مستوى الداكلاتاسفير أو السوفوسبوفير فيفشل العلاج: الريفامبيسين والريفابوتين والريفابنتين، والفينيتوين والكاربامازيبين والأوكسكاربازيبين والفينوباربيتال، والديكساميثازون الجهازي، ونبتة سانت جون. والأدوية التي ترفع مستوى الداكلاتاسفير تحتاج تعديلاً لا يتيحه القرص الثابت، فيقرّر الطبيب البديل. وقد يرفع مستوى الدابيغاتران وأدوية أخرى ضيّقة الهامش، ومع الوارفارين يُراقَب التجلّط. والأميودارون أخطر ما يُجمع معه، ويزيد الخطر مع حاصرات بيتا وأمراض القلب.',
    en: 'It is forbidden with anything that drops daclatasvir or sofosbuvir levels and makes treatment fail: rifampicin, rifabutin, rifapentine, phenytoin, carbamazepine, oxcarbazepine, phenobarbital, systemic dexamethasone and St John\'s wort. Drugs that raise daclatasvir levels need an adjustment the fixed tablet does not allow, so the doctor decides an alternative. It may raise dabigatran and other narrow-margin drugs, and with warfarin clotting is watched. Amiodarone is the most dangerous thing to combine with it, with the risk higher alongside beta blockers and heart disease.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس من أحد مكوّنيه. ولا يُستعمل في الحمل، ولا عند امرأة قادرة على الحمل لا تستعمل وسيلة منع فعّالة، لأن الداكلاتاسفير أحدث تشوّهات في أجنّة الحيوانات، وتستمرّ الوسيلة أسابيع بعد انتهاء العلاج. ولا ترضع الأم أثناء أخذه. ويُخبَر الطبيب بزراعة الكبد، وبأي مرض كبدي آخر، وبأمراض القلب، وبمرض الكلى الشديد أو الغسيل الكلوي لأن مستقلبات السوفوسبوفير تتراكم فيه كثيراً. ويُفحص الدم لالتهاب الكبد بي قبل البدء.',
    en: 'It is not taken by anyone allergic to either component. It is not used in pregnancy, nor by a woman able to conceive who is not using effective contraception, because daclatasvir caused malformations in animal fetuses, and contraception continues for weeks after treatment ends. The mother does not breastfeed while taking it. The doctor is told of a liver transplant, any other liver disease, heart disease, and severe kidney disease or dialysis, because sofosbuvir breakdown products build up greatly there. Blood is tested for hepatitis B before starting.'
  },
  updated: '2026-09-11',
  src: [
    'https://list.essentialmeds.org/recommendations/1240',
    'https://www.ema.europa.eu/en/documents/product-information/daklinza-epar-product-information_en.pdf',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80beab2c-396e-4a37-a4dc-40fdb62859cf',
    'https://medlineplus.gov/druginfo/meds/a615044.html',
    'https://medlineplus.gov/druginfo/meds/a614014.html'
  ]
};

RX_BODY['ledipasvir-sofosbuvir'] = {
  what: {
    ar: 'قرص مركّب يجمع الليديباسفير، الذي يعطّل بروتيناً فيروسياً ينظّم التضاعف، مع السوفوسبوفير، الذي يعطّل الإنزيم الناسخ لفيروس التهاب الكبد سي. وليس شاملاً لكل الأنماط الجينية كبعض الأقراص الأحدث، بل يغطّي أنماطاً محدّدة، فيحتاج الطبيب إلى معرفة نمط الفيروس قبل اختياره. ويأتي أقراصاً للبالغين وحبيبات للأطفال، وقد يُضاف إليه الريبافيرين في بعض الحالات بحسب حالة المريض وقرار الطبيب.',
    en: 'A combination tablet joining ledipasvir, which disables a viral protein organising replication, with sofosbuvir, which disables the copying enzyme of the hepatitis C virus. Unlike some newer tablets it is not pangenotypic but covers specific genetic types, so the doctor needs to know the virus type before choosing it. It comes as tablets for adults and pellets for children, and ribavirin may be added in some cases depending on the patient\'s condition and the doctor\'s decision.'
  },
  why: {
    ar: 'يُوصف لعلاج التهاب الكبد سي المزمن من أنماط جينية بعينها عند البالغين والأطفال، وحده أو مع الريبافيرين، ويشمل ذلك مرضى لم يُعالجوا من قبل ومرضى سبق علاجهم. والغاية أن يختفي الفيروس من الدم. وتختلف مدّة العلاج بحسب حالة الكبد والعلاج السابق والاستجابة، ولا يقرّرها إلا الطبيب. ومن مزاياه أنه قرص واحد يجمع الدواءين. ويستمرّ أخذه حتى نهاية المدّة ولو شعر المريض بتحسّن أو لم تكن عنده أعراض، ولا يُوقف إلا بقرار الطبيب.',
    en: 'It is prescribed to treat chronic hepatitis C of particular genetic types in adults and children, alone or with ribavirin, including patients never treated before and those treated previously. The aim is for the virus to disappear from the blood. The length of treatment differs with the state of the liver, previous treatment and response, and only the doctor decides it. One of its advantages is that a single tablet holds both drugs. It is continued to the end of the period even if the patient feels better or has no symptoms, and is stopped only on the doctor\'s decision.'
  },
  how: {
    ar: 'يضرب القرص الفيروس في موضعين. السوفوسبوفير يتحوّل داخل خلية الكبد إلى صورة تشبه لبنة من لبنات المادة الوراثية، فيلتقطها إنزيم البوليميراز الفيروسي ويضعها في السلسلة الجديدة، فتنقطع ولا تكتمل نسخة الفيروس. والليديباسفير يلتصق ببروتين فيروسي لا عمل إنزيمياً له لكنه ينظّم ورشة النسخ ويجمع الفيروسات الجديدة، فيعطّلها. واجتماع الضربتين يقلّل تكاثر الفيروس ويجعل إفلاته من العلاج أصعب.',
    en: 'The tablet strikes the virus in two places. Sofosbuvir is converted inside the liver cell into a form resembling a building block of genetic material, so the viral polymerase enzyme picks it up and places it in the new chain, which breaks off and the viral copy is never completed. Ledipasvir sticks to a viral protein with no enzyme action that organises the copying workshop and assembles new viruses, disabling it. Combining the two blows cuts viral multiplication and makes escape from treatment harder.'
  },
  effects: {
    ar: 'أشيع ما يُذكر: تعب وصداع وضعف عام، ثم أرق وغثيان وإسهال وسعال ودوخة وألم عضلي وعصبية، ويُخبَر الطبيب إن اشتدّ أيّ منها أو استمرّ. وإن أُضيف الريبافيرين زادت الآثار ومنها فقر الدم، علامته شحوب وضيق نفس وتعب. ولا يُوقف القرص من تلقاء النفس بسبب أثر خفيف، بل يُسأل الطبيب أو الصيدلي عمّا يخفّفه. ويُحفظ القرص في علبته الأصلية، وتُتبع إرشادات الصيدلي في تناول الحبيبات عند الأطفال.',
    en: 'The commonest effects are tiredness, headache and general weakness, then insomnia, nausea, diarrhoea, cough, dizziness, muscle pain and irritability, and the doctor is told if any is severe or lasting. If ribavirin is added, effects increase, anaemia among them, with paleness, breathlessness and tiredness. The tablet is not stopped on one\'s own because of a mild effect; the doctor or pharmacist is asked how to ease it. The tablet is kept in its original packet, and the pharmacist\'s instructions are followed for giving the pellets to children.'
  },
  warning: {
    ar: 'اذهب إلى الطوارئ فوراً عند طفح أو فقاعات، أو تورّم الوجه أو الذراعين أو الساقين، أو بحّة، أو صعوبة بلع أو تنفّس. وكذلك إن كنت تأخذ الأميودارون وظهر إغماء أو شبه إغماء، أو دوخة، أو ضعف، أو ضيق نفس، أو ألم صدر، أو تشوّش، فقد سُجّلت مع هذا القرص والأميودارون سكتة قلبية قاتلة، ويظهر بطء القلب عادة خلال ساعات أو أيام وقد يتأخّر أسابيع. واتصل بالطبيب فوراً أثناء العلاج أو بعده عند تعب شديد أو اصفرار أو فقدان شهية وغثيان وقيء أو براز فاتح أو ألم بطن أو بول داكن، لاحتمال نشاط التهاب الكبد بي.',
    en: 'Go to the emergency department at once for rash or blisters, swelling of the face, arms or legs, hoarseness, or difficulty swallowing or breathing. Likewise if you take amiodarone and develop fainting or near-fainting, dizziness, weakness, breathlessness, chest pain or confusion: fatal cardiac arrest has been recorded with this tablet and amiodarone, and the slow heart usually appears within hours or days but may come weeks later. Call the doctor at once during treatment or after it for extreme tiredness, yellowing, loss of appetite, nausea and vomiting, pale stools, abdominal pain or dark urine, since hepatitis B may reactivate.'
  },
  interact: {
    ar: 'يذوب الليديباسفير أقلّ كلما قلّت حموضة المعدة، فأدوية الحموضة تضعفه: مضادات الحموضة كهيدروكسيد الألمنيوم والمغنيسيوم يُفصل بينها وبينه بساعات، وحاصرات الحموضة كالفاموتيدين تؤخذ معه في الوقت نفسه أو بفاصل طويل وبمقدار محدود يقرّره الطبيب، وكذلك مثبّطات مضخّة البروتون كالأوميبرازول. ولا يُنصح بجمعه مع الروزوفاستاتين لخطر تحلّل العضلات، ويُراقَب مع الأتورفاستاتين. ويرفع مستوى التينوفوفير فتُراقَب آثاره. ونبتة سانت جون تُضعفه. والأميودارون أخطر ما يُجمع معه.',
    en: 'Ledipasvir dissolves less as stomach acid falls, so acid medicines weaken it: antacids such as aluminium and magnesium hydroxide are separated from it by hours, acid blockers such as famotidine are taken either at the same time or well apart and in a limited amount the doctor sets, and likewise proton pump inhibitors such as omeprazole. It is not advised with rosuvastatin because of the risk of muscle breakdown, and atorvastatin is monitored. It raises tenofovir, so tenofovir\'s effects are watched. St John\'s wort weakens it. Amiodarone is the most dangerous thing to combine with it.'
  },
  avoid: {
    ar: 'لا يأخذه من تحسّس من أحد مكوّنيه. ويُفحص الدم لالتهاب الكبد بي قبل البدء. ويُخبَر الطبيب بزراعة كبد سابقة، أو إصابة بفيروس نقص المناعة، أو أي مرض كبدي آخر، أو مرض كلى أو غسيل كلوي. ويُخبَر بالحمل أو التخطيط له أو الإرضاع، وتتصل المريضة بالطبيب إن حملت أثناء العلاج. وإن أُضيف الريبافيرين فالحمل ممنوع على المريضة وعلى زوجة المريض لأنه يؤذي الجنين. ولا يُعرف إن كان يمرّ في لبن الأم، فيوازن الطبيب بين فائدة الإرضاع وحاجة الأم.',
    en: 'It is not taken by anyone allergic to either component. Blood is tested for hepatitis B before starting. The doctor is told of a previous liver transplant, infection with the human immunodeficiency virus, any other liver disease, kidney disease or dialysis. Pregnancy, plans for it and breastfeeding are mentioned, and a patient who becomes pregnant during treatment calls the doctor. If ribavirin is added, pregnancy is forbidden for a female patient and for the partner of a male patient because it harms the fetus. It is not known whether it passes into breast milk, so the doctor weighs the benefit of breastfeeding against the mother\'s need.'
  },
  updated: '2026-09-11',
  src: [
    'https://medlineplus.gov/druginfo/meds/a614051.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f4ec77e4-bae8-4db0-b3d5-bde09c5fa075'
  ]
};

RX_BODY['glecaprevir-pibrentasvir'] = {
  what: {
    ar: 'قرص مركّب يجمع دواءين من فئتين مختلفتين ضد فيروس التهاب الكبد سي: الجليكابريفير، وهو مثبّط لإنزيم البروتياز الفيروسي، والبيبرينتاسفير، الذي يعطّل بروتيناً فيروسياً ينظّم التضاعف. وهو من العلاجات الشاملة للأنماط الجينية كلها، ولا يحوي سوفوسبوفير. ويُبلع مع الطعام، وله حبيبات للأطفال تُخلط بطعام لين كزبدة الفول السوداني أو الزبادي اليوناني أو المربّى وتُبلع دون مضغ.',
    en: 'A combination tablet joining two drugs from different classes against the hepatitis C virus: glecaprevir, an inhibitor of the viral protease enzyme, and pibrentasvir, which disables a viral protein organising replication. It is one of the pangenotypic treatments and contains no sofosbuvir. It is swallowed with food, and has pellets for children mixed into soft food such as peanut butter, Greek yoghurt or jam and swallowed without chewing.'
  },
  why: {
    ar: 'يُوصف لعلاج التهاب الكبد سي عند البالغين والأطفال، في العدوى المزمنة وكذلك الحادّة بحسب النشرة الأمريكية، ويشمل ذلك من سبق أن عولجوا بدواء آخر لالتهاب الكبد سي. وميزته أنه شامل للأنماط الجينية، ودُرس أيضاً عند مرضى القصور الكلوي الشديد ومنهم من يغسل الكلى. والغاية أن يختفي الفيروس من الدم. ويستمرّ حتى نهاية المدّة التي يحدّدها الطبيب ولو شعر المريض بتحسّن أو لم تكن عنده أعراض، ولا يُوقف إلا بقراره.',
    en: 'It is prescribed to treat hepatitis C in adults and children, in chronic infection and also acute infection according to the US label, including people previously treated with another hepatitis C medicine. Its advantage is that it is pangenotypic, and it has also been studied in patients with severe kidney failure, including those on dialysis. The aim is for the virus to disappear from the blood. It continues until the end of the period set by the doctor even if the patient feels better or has no symptoms, and is stopped only on the doctor\'s decision.'
  },
  how: {
    ar: 'يصنع فيروس التهاب الكبد سي بروتيناته سلسلة طويلة واحدة، ثم يقصّها إنزيم البروتياز إلى قطع تعمل كل منها عملها. والجليكابريفير يسدّ هذا المقصّ فتبقى السلسلة بلا فائدة. والبيبرينتاسفير يلتصق ببروتين فيروسي لا عمل إنزيمياً له لكنه ينظّم ورشة النسخ ويجمع الفيروسات الجديدة، فيعطّلها. وبضربتين في موضعين مختلفين يقلّ تكاثر الفيروس ويصعب عليه أن يفلت من العلاج.',
    en: 'The hepatitis C virus makes its proteins as one long chain, which the protease enzyme then cuts into pieces that each do their job. Glecaprevir blocks these scissors, so the chain stays useless. Pibrentasvir sticks to a viral protein with no enzyme action that organises the copying workshop and assembles new viruses, disabling it. With two blows in two different places, the virus multiplies less and finds it hard to escape treatment.'
  },
  effects: {
    ar: 'أشيع ما يُذكر: صداع وتعب وضعف عام، ثم غثيان وإسهال وحكّة، وكانت الحكّة والتعب والصداع أبرز ما سُجّل عند مرضى التليّف المعوّض. ويُخبَر الطبيب إن اشتدّ أيّ منها أو استمرّ. وعند مرضى السكّري قد يتغيّر سكّر الدم مع تحسّن الكبد أثناء العلاج، فيُراقَب السكّر عن قرب، وكذلك تحليل التجلّط لمن يأخذ الوارفارين. ولا يُوقف القرص من تلقاء النفس بسبب أثر خفيف.',
    en: 'The commonest effects are headache, tiredness and general weakness, then nausea, diarrhoea and itching, with itching, tiredness and headache the most prominent in patients with compensated cirrhosis. The doctor is told if any is severe or lasting. In people with diabetes, blood sugar may change as the liver improves during treatment, so sugar is watched closely, as is the clotting test in anyone taking warfarin. The tablet is not stopped on one\'s own because of a mild effect.'
  },
  warning: {
    ar: 'اذهب إلى الطوارئ فوراً عند قيء دم، أو براز أسود أو دموي، أو تشوّش ذهني، أو انتفاخ البطن، فهذه علامات فشل الكبد، وقد سُجّل قاتلاً عند مرضى التليّف المتقدّم خاصة، ويُوقف الدواء عندها. واتصل بالطبيب فوراً أثناء العلاج أو بعده عند تعب شديد، أو اصفرار الجلد والعينين، أو فقدان شهية وغثيان وقيء، أو براز فاتح، أو ألم في أعلى يمين البطن، أو بول داكن، فقد يكون التهاب الكبد بي الكامن قد نشط نشاطاً خطيراً. وتُخبر المريضة طبيبها إن حملت أثناء العلاج.',
    en: 'Go to the emergency department at once for vomiting blood, black or bloody stools, mental confusion or abdominal swelling: these are signs of liver failure, which has been fatal, especially in patients with advanced cirrhosis, and the drug is stopped. Call the doctor at once during treatment or after it for extreme tiredness, yellow skin or eyes, loss of appetite, nausea and vomiting, pale stools, pain in the upper right abdomen or dark urine, since hidden hepatitis B may have reactivated seriously. A patient who becomes pregnant during treatment tells her doctor.'
  },
  interact: {
    ar: 'ممنوع مع الأتازانافير لأنه يرفع إنزيمات الكبد، ومع الريفامبيسين لأنه يسقط مستواه فيفشل العلاج. ولا يُنصح بجمعه مع الكاربامازيبين والإيفافيرينز ونبتة سانت جون، ولا مع الدارونافير واللوبينافير والريتونافير، ولا مع الأتورفاستاتين والسيمفاستاتين واللوفاستاتين لخطر أذى العضلات، ويُعدَّل البرافاستاتين والروزوفاستاتين. وحبوب منع الحمل ذات التركيز الأعلى من الإيثينيل إستراديول ترفع إنزيمات الكبد فلا يُنصح بها معه. ويحتاج الدابيغاتران والسيكلوسبورين مراجعة، ويُراقَب الوارفارين والسكّر.',
    en: 'It is forbidden with atazanavir, which raises liver enzymes, and with rifampicin, which drops its level so treatment fails. It is not advised with carbamazepine, efavirenz or St John\'s wort, nor with darunavir, lopinavir or ritonavir, nor with atorvastatin, simvastatin or lovastatin because of the risk of muscle injury, and pravastatin and rosuvastatin are adjusted. Birth-control pills with the higher strengths of ethinyl estradiol raise liver enzymes and are not advised with it. Dabigatran and ciclosporin need review, and warfarin and blood sugar are monitored.'
  },
  avoid: {
    ar: 'ممنوع على من عنده ضعف كبدي متوسّط أو شديد، أو سبق أن مرّ كبده بمرحلة انهيار وظيفي كالاستسقاء أو نزف الدوالي أو الاعتلال الدماغي الكبدي، لأن فشل الكبد سُجّل معه في هؤلاء. ولا يأخذه من تحسّس من أحد مكوّنيه. ويُفحص الدم لالتهاب الكبد بي قبل البدء. ويُخبَر الطبيب بأي مرض كبدي آخر، وبفيروس نقص المناعة، وبالسكّري، وبزراعة كبد أو كلية. ولا يُعرف إن كان يمرّ في لبن الأم، فيوازن الطبيب بين الإرضاع وحاجة الأم.',
    en: 'It is forbidden for anyone with moderate or severe liver impairment, or whose liver has previously gone through decompensation such as fluid in the abdomen, bleeding varices or liver-related brain dysfunction, because liver failure has been recorded with it in these people. It is not taken by anyone allergic to either component. Blood is tested for hepatitis B before starting. The doctor is told of any other liver disease, the human immunodeficiency virus, diabetes, and a liver or kidney transplant. It is not known whether it passes into breast milk, so the doctor weighs breastfeeding against the mother\'s need.'
  },
  updated: '2026-09-11',
  src: [
    'https://medlineplus.gov/druginfo/meds/a617039.html',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0'
  ]
};

RX_BODY['ravidasvir'] = {
  what: {
    ar: 'الرافيداسفير مضاد لفيروس التهاب الكبد سي يعطّل بروتيناً فيروسياً ينظّم التضاعف، وهو شامل للأنماط الجينية حين يُقرن بالسوفوسبوفير، ولا يُستعمل إلا مقروناً به. وقصّته مختلفة عن غيره: طُوّر في شراكة بين مبادرة أدوية الأمراض المهملة وشركة مصرية وأخرى ماليزية وشركة أمريكية صاحبة الاكتشاف، بهدف علاج ميسور الكلفة للبلدان المتوسّطة والفقيرة. سُجّل في مصر وماليزيا، وأدرجته منظمة الصحة العالمية في قائمة الأدوية الأساسية.',
    en: 'Ravidasvir is a hepatitis C antiviral that disables a viral protein organising replication; it is pangenotypic when paired with sofosbuvir and is used only in that pairing. Its story differs from the others: it was developed in a partnership between the Drugs for Neglected Diseases initiative, an Egyptian company, a Malaysian company and the American company that discovered it, aiming at an affordable treatment for middle- and low-income countries. It is registered in Egypt and Malaysia, and the World Health Organization added it to the essential medicines list.'
  },
  why: {
    ar: 'يُوصف مع السوفوسبوفير لعلاج التهاب الكبد سي المزمن عند البالغين. وفي الدراسة الكبرى في ماليزيا وتايلاند شُفي أغلب المرضى، ومنهم مرضى تليّف كبدي معوّض، ومرضى النمط الجيني الثالث الصعب، ومن يحملون فيروس نقص المناعة معه، ومن عولجوا سابقاً بالإنترفيرون. لكن لجنة منظمة الصحة العالمية لاحظت غياب دراسات تقارنه مباشرة بالعلاجات الشاملة الأخرى، وأنه ليس بعد ضمن التوليفات الموصى بها في إرشاداتها، وأن توفّره العالمي ما يزال محدوداً.',
    en: 'It is prescribed with sofosbuvir to treat chronic hepatitis C in adults. In the main study in Malaysia and Thailand most patients were cured, including patients with compensated cirrhosis, patients with the difficult genotype three, those also carrying the human immunodeficiency virus, and those previously treated with interferon. However, the World Health Organization committee noted a lack of studies comparing it directly with other pangenotypic treatments, that it is not yet among the combinations recommended in its guidelines, and that its global availability is still limited.'
  },
  how: {
    ar: 'يحتاج فيروس التهاب الكبد سي بروتيناً لا يعمل إنزيماً لكنه كالمنظّم لورشة النسخ: يرتّب أدوات التضاعف ويساعد في تجميع الفيروسات الجديدة. والرافيداسفير يلتصق بهذا البروتين فيعطّله، ويبقى له أثر حتى أمام بعض الطفرات التي تقاوم أدوية فئته. والسوفوسبوفير المرافق يضرب الإنزيم الناسخ نفسه، فيحاصر الدواءان الفيروس من جهتين، ولهذا لا يُعطى الرافيداسفير منفرداً أبداً، ولا يُفصل عن شريكه.',
    en: 'The hepatitis C virus needs a protein that does not act as an enzyme but is like the organiser of the copying workshop: it arranges the replication tools and helps assemble new viruses. Ravidasvir sticks to this protein and disables it, keeping some effect even against certain mutations that resist drugs of its class. The accompanying sofosbuvir strikes the copying enzyme itself, so the two drugs corner the virus from two sides, which is why ravidasvir is never given alone or separated from its partner.'
  },
  effects: {
    ar: 'في الدراسة الكبرى كان أشيع ما سُجّل: حمّى وسعال والتهاب في المجاري التنفّسية العليا وصداع، ولم تحدث وفيات ولا إيقاف للعلاج بسبب آثار جدّية منسوبة إلى الدواءين. غير أنها دراسة بلا مجموعة مقارنة، وخبرة العالم بهذا الدواء أقلّ من خبرته بالأقراص الأقدم، فيُخبَر الطبيب بأي عرض جديد أو مستمرّ. وآثار السوفوسبوفير المعروفة، كالتعب والصداع والأرق، واردة أيضاً لأنه جزء من العلاج.',
    en: 'In the main study the commonest effects were fever, cough, upper respiratory tract infection and headache, and there were no deaths or treatment stops due to serious effects attributed to the two drugs. Still, it was a study without a comparison group, and the world\'s experience with this drug is smaller than with older tablets, so the doctor is told of any new or persistent symptom. The known effects of sofosbuvir, such as tiredness, headache and insomnia, are also possible because it is part of the treatment.'
  },
  warning: {
    ar: 'لأن العلاج يحوي السوفوسبوفير دائماً، فتحذيراته تنطبق عليه كاملة. اذهب إلى الطوارئ فوراً إن كنت تأخذ الأميودارون وظهر إغماء أو شبه إغماء، أو دوخة، أو ضعف، أو ضيق نفس، أو ألم صدر، أو تشوّش، فهذا بطء قلب خطير سُجّل مع أنظمة السوفوسبوفير. واتصل بالطبيب فوراً أثناء العلاج أو بعده عند تعب شديد، أو اصفرار الجلد والعينين، أو فقدان شهية وقيء، أو براز فاتح، أو بول داكن، أو ألم بطن، لاحتمال نشاط التهاب الكبد بي الكامن.',
    en: 'Because the treatment always contains sofosbuvir, its warnings apply in full. Go to the emergency department at once if you take amiodarone and develop fainting or near-fainting, dizziness, weakness, breathlessness, chest pain or confusion: this is a dangerous slowing of the heart recorded with sofosbuvir regimens. Call the doctor at once during treatment or after it for extreme tiredness, yellow skin or eyes, loss of appetite and vomiting, pale stools, dark urine or abdominal pain, since hidden hepatitis B may reactivate.'
  },
  interact: {
    ar: 'في الدراسة الكبرى لم تُسجّل تعارضات دوائية ذات أثر سريري مع أدوية فيروس نقص المناعة الشائعة الاستعمال في ماليزيا وتايلاند، وهذه ميزة لمن يحمل الفيروسين. لكن تعارضات السوفوسبوفير تبقى قائمة: الأميودارون أخطرها، والريفامبيسين ونبتة سانت جون تسقطان مستوى السوفوسبوفير فيضعف العلاج. ولأن الخبرة بالرافيداسفير أقلّ، يُعرض على الطبيب أو الصيدلي كل دواء وعشبة ومكمّل قبل البدء، ولا يُضاف دواء جديد أثناء العلاج بلا استشارة.',
    en: 'In the main study no clinically meaningful drug interactions were recorded with the medicines for the human immunodeficiency virus commonly used in Malaysia and Thailand, an advantage for anyone carrying both viruses. But sofosbuvir\'s interactions still stand: amiodarone is the most dangerous, and rifampicin and St John\'s wort drop sofosbuvir levels and weaken treatment. Because experience with ravidasvir is smaller, every medicine, herb and supplement is shown to the doctor or pharmacist before starting, and no new drug is added during treatment without advice.'
  },
  avoid: {
    ar: 'لم يُدرس في الحمل، واشترطت الدراسة اختبار حمل سلبياً قبل البدء، فلا يُستعمل في الحمل إلا بقرار طبي صريح، ويُذكر الإرضاع كذلك. واستُبعد من الدراسة مرضى التليّف غير المعوّض ومن مرّ كبدهم بالاستسقاء أو نزف الدوالي أو الاعتلال الدماغي، ومرضى سرطان الكبد، ومن يحملون التهاب الكبد بي، ومرضى ضعف الكلى الشديد أو الفشل الكلوي، ومن فشل معهم دواء سابق من الفئة نفسها، فلا تُعرف نتائجه فيهم. ويُفحص الدم لالتهاب الكبد بي قبل البدء، ولا يأخذه من تحسّس منه.',
    en: 'It has not been studied in pregnancy, and the study required a negative pregnancy test before starting, so it is not used in pregnancy except by an explicit medical decision, and breastfeeding is mentioned too. The study excluded patients with decompensated cirrhosis or a history of abdominal fluid, bleeding varices or liver-related brain dysfunction, patients with liver cancer, those carrying hepatitis B, those with severe kidney weakness or kidney failure, and those in whom a previous drug of the same class failed, so its results in them are unknown. Blood is tested for hepatitis B before starting, and anyone allergic to it does not take it.'
  },
  updated: '2026-09-11',
  src: [
    'https://pmc.ncbi.nlm.nih.gov/articles/PMC9767645/',
    'https://list.essentialmeds.org/recommendations/1332',
    'https://dndi.org/research-development/portfolio/ravidasvir-sofosbuvir/',
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80beab2c-396e-4a37-a4dc-40fdb62859cf'
  ]
};

RX_BODY['ansuvimab'] = {
  what: {
    ar: 'الأنسوفيماب جسم مضاد بشري وحيد النسيلة، أي بروتين مناعي يُصنع في المختبر ليشبه الأجسام المضادة التي يصنعها الجسم، لكنه موجّه إلى هدف واحد: بروتين الغلاف في فيروس إيبولا من سلالة زائير. وهو دواء مستشفيات ومراكز علاج إيبولا حصراً ولا يُصرف في الصيدليات، يأتي مسحوقاً يُحلّ ثم يُخفّف، ويُعطى في الوريد بالتنقيط البطيء عبر مرشّح خاص، ولا يُعطى بحقنة سريعة في الوريد.',
    en: 'Ansuvimab is a human monoclonal antibody, an immune protein made in the laboratory to resemble the antibodies the body makes, but aimed at one target: the coat protein of the Zaire strain of Ebola virus. It is a drug for hospitals and Ebola treatment centres only and is not dispensed by pharmacies; it comes as a powder that is dissolved and then diluted, and is given into a vein by slow infusion through a special filter, never as a quick injection into the vein.'
  },
  why: {
    ar: 'يُعطى لعلاج عدوى فيروس إيبولا من سلالة زائير عند البالغين والأطفال، ومنهم المولودون لأمّ ثبتت إصابتها بالتحليل. وإيبولا مرض خطير قد يقتل، ينتقل بدم المصاب وسوائل جسمه وأنسجته، أو بالحيوانات البرّية المصابة، أو بالأسطح والفراش والملابس الملوّثة بهذه السوائل. وفي دراسة في الكونغو الديمقراطية قلّل الوفيات خلال الشهر الأول مقارنة بالمجموعة الضابطة. ولا يعمل على سلالات إيبولا الأخرى ولا على فيروس ماربورغ، وقد تُضعف مقاومة الفيروس فائدته.',
    en: 'It is given to treat infection with the Zaire strain of Ebola virus in adults and children, including babies born to a mother whose infection was confirmed by testing. Ebola is a serious disease that can kill, spread through the blood, body fluids and tissues of infected people or infected wild animals, or through surfaces, bedding and clothing contaminated with these fluids. In a study in the Democratic Republic of the Congo it reduced deaths within the first month compared with the control group. It does not work on other Ebola strains or on Marburg virus, and viral resistance may weaken its benefit.'
  },
  how: {
    ar: 'يدخل فيروس إيبولا خلايا الجسم بعد أن يلتصق بمستقبل على سطحها ببروتين في غلافه. والأنسوفيماب يلتصق بجزء محدّد من هذا البروتين الغلافي، فيحجب التصاق الفيروس بالخلية ويمنع دخوله إليها، فلا يستطيع التكاثر داخلها. وإضافة إلى ذلك يستدعي الجسم المضاد خلايا المناعة لتهاجم الخلايا المصابة وتقتلها. فهو لا يعمل كالمضادات الكيميائية، بل يعطّل الفيروس من الخارج ويدلّ المناعة عليه.',
    en: 'Ebola virus enters the body\'s cells after sticking, with a protein in its coat, to a receptor on their surface. Ansuvimab sticks to a specific part of this coat protein, blocking the virus from attaching to the cell and preventing its entry, so it cannot multiply inside. In addition, the antibody calls on immune cells to attack and kill infected cells. So it does not work like chemical antivirals; it disables the virus from outside and points the immune system to it.'
  },
  effects: {
    ar: 'أشيع ما سُجّل في الدراسة: حمّى، وتسارع نبض القلب، وإسهال، وقيء، وهبوط ضغط الدم، وتسارع التنفّس، وقشعريرة. وكثير من هذه العلامات هي نفسها أعراض إيبولا، فيصعب أحياناً التمييز بين أثر الدواء وأثر المرض. ولم يستطع قلّة من المرضى إكمال التسريب بسبب الآثار. ويتابع الفريق الطبي هذه العلامات أثناء التسريب وبعده، لأن المريض يكون تحت الرعاية الكاملة في مركز العلاج، ويُبلَّغ الفريق بأي تغيّر يلاحظه المريض أو مرافقه.',
    en: 'The commonest effects in the study were fever, fast heartbeat, diarrhoea, vomiting, low blood pressure, fast breathing and chills. Many of these signs are themselves symptoms of Ebola, so it is sometimes hard to tell the drug\'s effect from the disease\'s. A few patients could not complete the infusion because of the effects. The medical team follows these signs during and after the infusion, since the patient is under full care in the treatment centre, and the team is told of any change the patient or companion notices.'
  },
  warning: {
    ar: 'قد تحدث تفاعلات تحسّس، ومنها تفاعلات مرتبطة بالتسريب، أثناء إعطائه أو بعده. والعلامات التي تنبّه عليها النشرة: هبوط ضغط الدم، والقشعريرة، وارتفاع الحمّى. فإن لاحظ المريض أو مرافقه أثناء التسريب أو بعده دوخة شديدة أو شبه إغماء يوحي بهبوط الضغط، أو قشعريرة مفاجئة، أو ارتفاعاً في الحرارة، أو أي علامة تحسّس، فليبلّغ الممرّض أو الطبيب في الحال. ويُوقف التسريب فوراً عند التفاعل الشديد ويُعالج علاجاً مناسباً.',
    en: 'Allergic reactions, including infusion-related reactions, can occur during or after it is given. The signs the label highlights are low blood pressure, chills and a rising fever. If the patient or companion notices, during or after the infusion, severe dizziness or near-fainting suggesting low blood pressure, sudden chills, a rise in temperature, or any sign of allergy, the nurse or doctor must be told at once. The infusion is stopped immediately for a severe reaction, and appropriate treatment is given.'
  },
  interact: {
    ar: 'أهمّ تعارض تذكره النشرة يخصّ اللقاح الحيّ ضد فيروس إيبولا: فهذا الجسم المضاد قد يُضعف أثر اللقاح، ولهذا يُتجنّب إعطاء اللقاح الحيّ ضد إيبولا مع هذا الدواء في الوقت نفسه، ويقرّر الفريق الطبي توقيت التطعيم لاحقاً. ولم يرد في ما اطّلعنا عليه من النشرة تعارض دوائي مهمّ آخر، لكن مريض إيبولا يتلقّى علاجات داعمة كثيرة، كالسوائل وأدوية الحرارة والقيء، فتُسجّل كلها في ملفّه ليراجعها الطبيب.',
    en: 'The main interaction the label mentions concerns the live vaccine against Ebola virus: this antibody may weaken the vaccine\'s effect, so giving the live Ebola vaccine at the same time as this drug is avoided, and the medical team decides the timing of vaccination later. No other important drug interaction appeared in the parts of the label we reviewed, but an Ebola patient receives many supportive treatments, such as fluids and medicines for fever and vomiting, so all are recorded in the file for the doctor to review.'
  },
  avoid: {
    ar: 'في الحمل لا يُحجب العلاج، لأن عدوى إيبولا تهدّد حياة الأم والجنين معاً. وأما الرضاعة فالأم المصابة لا ترضع طفلها لخطر نقل العدوى إليه، لا بسبب الدواء. ودُرست سلامته وفاعليته في الأطفال من الولادة حتى المراهقة، ومنهم حديثو الولادة. واعتماده للعلاج لا للوقاية، ولا يُستعمل لسلالات إيبولا الأخرى ولا لفيروس ماربورغ. ومن سبق أن أصابه تحسّس شديد من الدواء أو مكوّناته يُخبَر الفريق الطبي به قبل البدء.',
    en: 'In pregnancy treatment is not withheld, because Ebola infection threatens the lives of both mother and fetus. As for breastfeeding, an infected mother does not breastfeed her baby because of the risk of passing on the infection, not because of the drug. Its safety and effectiveness have been studied in children from birth through adolescence, including newborns. It is approved for treatment, not prevention, and is not used for other Ebola strains or for Marburg virus. Anyone who has had a severe allergy to the drug or its ingredients tells the medical team before starting.'
  },
  updated: '2026-09-11',
  src: [
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=de220c8f-ffcb-4522-a6a2-c7d6ce5de1b5',
    'https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-treatment-ebola-virus'
  ]
};

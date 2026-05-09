var localFallbackDB = {
  // ---------------------------------------------------------
  // CATCH-ALL / ERROR STATE
  // ---------------------------------------------------------
  "Not a Plant": {
    symptoms: [
      "The scanned image does not appear to be a plant leaf.",
      "No botanical features detected by the AI model.",
    ],
    treatments: [
      "Please capture a clear, centered image of a plant leaf.",
      "Ensure the lighting is bright and natural.",
    ],
    preventions: [
      "Focus the camera solely on the plant.",
      "Avoid scanning faces, objects, or heavily cluttered backgrounds.",
    ],
  },

  // ---------------------------------------------------------
  // PEPPER (BELL)
  // ---------------------------------------------------------
  "Pepper, bell Bacterial spot": {
    symptoms: [
      "Small, water-soaked spots appear on the leaves.",
      "Spots turn dark brown and may develop a yellow halo.",
      "Severe infection can cause leaves to turn yellow and drop.",
    ],
    treatments: [
      "Remove and properly dispose of heavily infected plant parts.",
      "Apply copper-based bactericides early in the disease cycle.",
      "Avoid working with plants when they are wet to prevent spreading.",
    ],
    preventions: [
      "Avoid overhead watering; water at the base of the plant.",
      "Ensure good air circulation by spacing plants appropriately.",
      "Use disease-free seeds or transplants.",
    ],
  },
  "Pepper, bell healthy": {
    symptoms: [
      "Leaves are vibrant green and free of spots or lesions.",
      "Plant shows vigorous growth with firm stems.",
    ],
    treatments: [
      "No treatment required. Your pepper plant is healthy!",
      "Continue your current excellent care routine.",
    ],
    preventions: [
      "Maintain a consistent watering and fertilizing schedule.",
      "Monitor weekly for early signs of pests like aphids.",
    ],
  },

  // ---------------------------------------------------------
  // POTATO
  // ---------------------------------------------------------
  "Potato Early blight": {
    symptoms: [
      "Dark, sunken spots appear on older leaves, often with concentric rings resembling a target.",
      "The tissue surrounding the spots may turn yellow.",
      "Can also cause dark, sunken lesions on stems and tubers.",
    ],
    treatments: [
      "Apply copper-based or appropriate organic fungicides immediately.",
      "Remove and destroy severely affected leaves to slow the spread.",
      "Ensure tubers are fully mature before harvesting.",
    ],
    preventions: [
      "Practice crop rotation (avoid planting nightshades in the same spot).",
      "Ensure adequate spacing between plants for airflow.",
      "Water at the base early in the day so leaves dry quickly.",
    ],
  },
  "Potato Late blight": {
    symptoms: [
      "Water-soaked, dark green to black spots appear on leaves.",
      "In humid conditions, white fungal growth appears on the underside of leaves.",
      "Rapid browning and shriveling of foliage.",
    ],
    treatments: [
      "Apply appropriate agricultural fungicides immediately upon detection.",
      "Remove and destroy severely infected plants (do not compost).",
      "Harvest potatoes only during dry weather.",
    ],
    preventions: [
      "Plant certified disease-free seed potatoes.",
      "Destroy volunteer potatoes and cull piles from previous seasons.",
      "Avoid overhead irrigation to keep foliage dry.",
    ],
  },
  "Potato healthy": {
    symptoms: [
      "Stems and leaves are firm and uniformly green.",
      "No visible lesions, yellowing, or wilting.",
    ],
    treatments: [
      "No action needed. Keep up the good work!",
      "Ensure the plant continues to receive adequate sunlight.",
    ],
    preventions: [
      "Maintain consistent soil moisture without waterlogging.",
      "Hill soil around the base as the plant grows to protect developing tubers.",
    ],
  },

  // ---------------------------------------------------------
  // TOMATO
  // ---------------------------------------------------------
  "Tomato Bacterial spot": {
    symptoms: [
      "Small, dark, water-soaked spots appear on leaves and stems.",
      "Spots may look greasy and are usually surrounded by a yellow halo.",
      "Infected leaves may eventually turn yellow and drop off.",
    ],
    treatments: [
      "Apply copper-based bactericides at the first sign of symptoms.",
      "Remove and destroy severely infected plants to protect others.",
      "Do not work in the garden when foliage is wet.",
    ],
    preventions: [
      "Use certified disease-free seeds and disease-resistant varieties.",
      "Practice crop rotation, avoiding nightshades for 2-3 years in the infected area.",
      "Ensure proper spacing to allow leaves to dry rapidly.",
    ],
  },
  "Tomato Early blight": {
    symptoms: [
      "Brown spots with concentric rings (target board appearance) form on lower leaves.",
      "Infected lower leaves may turn yellow and drop off.",
      "Dark, sunken lesions can also appear on stems.",
    ],
    treatments: [
      "Prune off infected lower leaves to improve air flow.",
      "Apply organic fungicides containing copper or Bacillus subtilis.",
      "Clean up and destroy plant debris at the end of the season.",
    ],
    preventions: [
      "Rotate crops annually; do not plant tomatoes in the same soil consecutively.",
      "Apply mulch around the base to prevent soil-borne spores from splashing onto leaves.",
      "Water early in the day so leaves dry quickly.",
    ],
  },
  "Tomato Late blight": {
    symptoms: [
      "Large, irregular dark spots that appear water-soaked on leaves.",
      "White, fuzzy mold may appear on the undersides of spots in high humidity.",
      "Can rapidly destroy the entire plant within days.",
    ],
    treatments: [
      "Infected plants generally cannot be saved and must be destroyed immediately.",
      "Apply protective fungicides to nearby, uninfected plants.",
      "Do not compost infected plant material; burn or bag it.",
    ],
    preventions: [
      "Plant resistant tomato varieties if available in your area.",
      "Keep foliage as dry as possible by watering only the soil.",
      "Ensure excellent ventilation and spacing in greenhouses or gardens.",
    ],
  },
  "Tomato Leaf Mold": {
    symptoms: [
      "Pale green or yellow spots on the upper surface of older leaves.",
      "Olive-green to brown velvety mold patches on the corresponding underside.",
      "Leaves may wither and die prematurely.",
    ],
    treatments: [
      "Improve ventilation immediately to reduce ambient humidity.",
      "Remove and discard severely affected leaves.",
      "Apply preventative fungicides if high humidity conditions persist.",
    ],
    preventions: [
      "Space plants properly to allow maximum air and light penetration.",
      "Prune heavily (especially lower leaves) to improve airflow.",
      "Water at the base and avoid getting leaves wet.",
    ],
  },
  "Tomato Septoria leaf spot": {
    symptoms: [
      "Numerous small, circular spots with dark borders and gray centers appear on lower leaves.",
      "Tiny black fruiting bodies may be visible in the center of the spots.",
      "Heavily infected leaves turn yellow, then brown, and drop off.",
    ],
    treatments: [
      "Apply fungicides such as chlorothalonil or copper-based sprays immediately.",
      "Remove infected lower leaves to prevent spores from splashing upward.",
      "Clean your pruning tools thoroughly after use.",
    ],
    preventions: [
      "Use mulch around the base of the plant to prevent soil splash.",
      "Water exclusively at the base, keeping the foliage completely dry.",
      "Remove all tomato debris from the garden at the end of the season.",
    ],
  },
  "Tomato Spider mites Two spotted spider mite": {
    symptoms: [
      "Tiny light-colored dots (stippling) appear on the leaves.",
      "Fine, silky webbing may be visible on the undersides of leaves or between stems.",
      "Leaves eventually turn pale, yellow, or bronze, and may fall off.",
    ],
    treatments: [
      "Spray the plant forcefully with water to dislodge the mites.",
      "Apply insecticidal soap or neem oil, targeting the undersides of leaves.",
      "Introduce natural predators like ladybugs or predatory mites.",
    ],
    preventions: [
      "Keep plants well-watered, as spider mites thrive in dry, drought-stressed conditions.",
      "Mist leaves occasionally to increase local humidity.",
      "Monitor plants regularly during hot, dry weather.",
    ],
  },
  "Tomato Target Spot": {
    symptoms: [
      "Small, brown spots with light brown centers appear on the leaves.",
      "Spots may develop concentric rings, similar to Early Blight.",
      "Dark lesions can form on stems, and sunken spots may appear on fruit.",
    ],
    treatments: [
      "Remove heavily infected leaves and stems to reduce the spore load.",
      "Apply targeted fungicides specifically labeled for Target Spot.",
      "Improve air circulation around the plant immediately.",
    ],
    preventions: [
      "Avoid overhead irrigation and keep the foliage as dry as possible.",
      "Destroy all crop debris post-harvest to prevent overwintering of the fungus.",
      "Ensure proper plant spacing when planting.",
    ],
  },
  "Tomato Tomato Yellow Leaf Curl Virus": {
    symptoms: [
      "Upward curling of leaves and distinct yellowing of leaf margins.",
      "Leaves appear crumpled or reduced in size.",
      "Stunted overall plant growth and significant drop in fruit yield.",
    ],
    treatments: [
      "There is no cure for this viral infection. Infected plants must be uprooted.",
      "Aggressively control whitefly populations, as they are the primary vectors transmitting the virus.",
      "Use insecticidal soaps or neem oil to manage whiteflies.",
    ],
    preventions: [
      "Use reflective mulches (like silver plastic) to deter whiteflies from landing.",
      "Plant virus-resistant tomato varieties.",
      "Use fine mesh row covers for young plants to physically block insects.",
    ],
  },
  "Tomato Tomato mosaic virus": {
    symptoms: [
      "Leaves show a mottled pattern of light and dark green patches.",
      "Foliage may appear distorted, stringy, or fern-like.",
      "Stunted growth and reduced, sometimes distorted, fruit production.",
    ],
    treatments: [
      "There is no cure for TMV. Infected plants must be removed and destroyed immediately.",
      "Do not compost infected plants; burn them or throw them in the trash.",
      "Wash hands thoroughly with soap and water after handling infected plants.",
    ],
    preventions: [
      "Do not smoke tobacco products near tomato plants, as tobacco can carry the virus.",
      "Thoroughly disinfect all garden tools and stakes before using them on healthy plants.",
      "Plant TMV-resistant tomato varieties (often denoted by the letter 'T' on seed packets).",
    ],
  },
  "Tomato healthy": {
    symptoms: [
      "Leaves are deep green, flat, and show no signs of wilting, spotting, or curling.",
      "Plant stems are strong and supportive.",
    ],
    treatments: [
      "Your tomato plant is thriving! No treatment needed.",
      "Enjoy the upcoming harvest!",
    ],
    preventions: [
      "Provide adequate structural support (cages or stakes) as the plant grows.",
      "Maintain a regular feeding schedule with a balanced fertilizer.",
      "Continue good watering practices at the soil level.",
    ],
  },
};

// =====================================================================
// LUNTI AI - LOCAL EXPERT DATABASE (FALLBACK)
// =====================================================================

var localFallbackDB = {
    // ---------------------------------------------------------
    // CATCH-ALL / ERROR STATE
    // ---------------------------------------------------------
    "Not A Plant": {
        symptoms: [
            "The scanned image does not appear to be a plant leaf.",
            "No botanical features detected by the AI model."
        ],
        treatments: [
            "Please capture a clear, centered image of a plant leaf.",
            "Ensure the lighting is bright and natural."
        ],
        preventions: [
            "Focus the camera solely on the plant.",
            "Avoid scanning faces, objects, or heavily cluttered backgrounds."
        ]
    },

    // ---------------------------------------------------------
    // PEPPER (BELL)
    // ---------------------------------------------------------
    "Pepper bell Bacterial spot": {
        symptoms: [
            "Small, water-soaked spots appear on the leaves.",
            "Spots turn dark brown and may develop a yellow halo.",
            "Severe infection can cause leaves to turn yellow and drop."
        ],
        treatments: [
            "Remove and properly dispose of heavily infected plant parts.",
            "Apply copper-based bactericides early in the disease cycle.",
            "Avoid working with plants when they are wet to prevent spreading."
        ],
        preventions: [
            "Avoid overhead watering; water at the base of the plant.",
            "Ensure good air circulation by spacing plants appropriately.",
            "Use disease-free seeds or transplants."
        ]
    },
    "Pepper bell healthy": {
        symptoms: [
            "Leaves are vibrant green and free of spots or lesions.",
            "Plant shows vigorous growth with firm stems."
        ],
        treatments: [
            "No treatment required. Your pepper plant is healthy!",
            "Continue your current excellent care routine."
        ],
        preventions: [
            "Maintain a consistent watering and fertilizing schedule.",
            "Monitor weekly for early signs of pests like aphids."
        ]
    },

    // ---------------------------------------------------------
    // POTATO
    // ---------------------------------------------------------
    "Potato Late blight": {
        symptoms: [
            "Water-soaked, dark green to black spots appear on leaves.",
            "In humid conditions, white fungal growth appears on the underside of leaves.",
            "Rapid browning and shriveling of foliage."
        ],
        treatments: [
            "Apply appropriate agricultural fungicides immediately upon detection.",
            "Remove and destroy severely infected plants (do not compost).",
            "Harvest potatoes only during dry weather."
        ],
        preventions: [
            "Plant certified disease-free seed potatoes.",
            "Destroy volunteer potatoes and cull piles from previous seasons.",
            "Avoid overhead irrigation to keep foliage dry."
        ]
    },
    "Potato healthy": {
        symptoms: [
            "Stems and leaves are firm and uniformly green.",
            "No visible lesions, yellowing, or wilting."
        ],
        treatments: [
            "No action needed. Keep up the good work!",
            "Ensure the plant continues to receive adequate sunlight."
        ],
        preventions: [
            "Maintain consistent soil moisture without waterlogging.",
            "Hill soil around the base as the plant grows to protect developing tubers."
        ]
    },

    // ---------------------------------------------------------
    // TOMATO
    // ---------------------------------------------------------
    "Tomato Early blight": {
        symptoms: [
            "Brown spots with concentric rings (target board appearance) form on lower leaves.",
            "Infected lower leaves may turn yellow and drop off.",
            "Dark, sunken lesions can also appear on stems."
        ],
        treatments: [
            "Prune off infected lower leaves to improve air flow.",
            "Apply organic fungicides containing copper or Bacillus subtilis.",
            "Clean up and destroy plant debris at the end of the season."
        ],
        preventions: [
            "Rotate crops annually; do not plant tomatoes in the same soil consecutively.",
            "Apply mulch around the base to prevent soil-borne spores from splashing onto leaves.",
            "Water early in the day so leaves dry quickly."
        ]
    },
    "Tomato Late blight": {
        symptoms: [
            "Large, irregular dark spots that appear water-soaked on leaves.",
            "White, fuzzy mold may appear on the undersides of spots in high humidity.",
            "Can rapidly destroy the entire plant within days."
        ],
        treatments: [
            "Infected plants generally cannot be saved and must be destroyed immediately.",
            "Apply protective fungicides to nearby, uninfected plants.",
            "Do not compost infected plant material; burn or bag it."
        ],
        preventions: [
            "Plant resistant tomato varieties if available in your area.",
            "Keep foliage as dry as possible by watering only the soil.",
            "Ensure excellent ventilation and spacing in greenhouses or gardens."
        ]
    },
    "Tomato Leaf Mold": {
        symptoms: [
            "Pale green or yellow spots on the upper surface of older leaves.",
            "Olive-green to brown velvety mold patches on the corresponding underside.",
            "Leaves may wither and die prematurely."
        ],
        treatments: [
            "Improve ventilation immediately to reduce ambient humidity.",
            "Remove and discard severely affected leaves.",
            "Apply preventative fungicides if high humidity conditions persist."
        ],
        preventions: [
            "Space plants properly to allow maximum air and light penetration.",
            "Prune heavily (especially lower leaves) to improve airflow.",
            "Water at the base and avoid getting leaves wet."
        ]
    },
    "Tomato Tomato YellowLeaf Curl Virus": {
        symptoms: [
            "Upward curling of leaves and distinct yellowing of leaf margins.",
            "Leaves appear crumpled or reduced in size.",
            "Stunted overall plant growth and significant drop in fruit yield."
        ],
        treatments: [
            "There is no cure for this viral infection. Infected plants must be uprooted.",
            "Aggressively control whitefly populations, as they are the primary vectors transmitting the virus.",
            "Use insecticidal soaps or neem oil to manage whiteflies."
        ],
        preventions: [
            "Use reflective mulches (like silver plastic) to deter whiteflies from landing.",
            "Plant virus-resistant tomato varieties.",
            "Use fine mesh row covers for young plants to physically block insects."
        ]
    },
    "Tomato healthy": {
        symptoms: [
            "Leaves are deep green, flat, and show no signs of wilting, spotting, or curling.",
            "Plant stems are strong and supportive."
        ],
        treatments: [
            "Your tomato plant is thriving! No treatment needed.",
            "Enjoy the upcoming harvest!"
        ],
        preventions: [
            "Provide adequate structural support (cages or stakes) as the plant grows.",
            "Maintain a regular feeding schedule with a balanced fertilizer.",
            "Continue good watering practices at the soil level."
        ]
    }
};


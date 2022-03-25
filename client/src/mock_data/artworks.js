export function getArtworkList() {
    return artworkList;
}
  
export function getArtworkrbyId(artworkId) {
    return artworkList.find((artwork) => artwork.artworkId === artworkId);
}

const artworkList = [
    {
        "artworkId": 30,
        "title": "Kuban Still Life",
        "seriesId": 9,
        "cover": "kuban-still-life",
        "material": "Oil on Canvas",
        "size": "80 x 100",
        "year": 2012,
        "price": "4 600",        
        "author": "Julia Kudina",
        "description": ""
    },
    {
        "artworkId": 31,
        "title": "Shining Light",
        "seriesId": 1,
        "cover": "shining-light",
        "material": "Oil on Canvas",
        "size": "80 x 60",
        "year": 2020,
        "price": "3 000",
        "author": "Julia Kudina",
        "description": "Who doesn't wonder what his city looked like 100 years ago? Looking at the picture plunges into the past... It feels like the building is shining like gold."
    },
    {
        "artworkId": 37,
        "title": "Sunflowers",
        "seriesId": 2,
        "cover": "sunflowers",
        "material": "Pencil on Paper",
        "size": "62 x 93",
        "year": 2015,
        "price": "6 000",        
        "author": "Julia Kudina",
        "description": "You look at it - you won't get enough of it. Sunflower is a big and beautiful flower. The middle of it is black, and the petals are yellow, like the sun. No wonder he was given such a name. The sunflower is also popularly called the flower of the sun."
    },
    {
        "artworkId": 51,
        "title": "Evening",
        "seriesId": 1,
        "cover": "evening",
        "material": "Oil on Canvas",
        "size": "100 x 70",
        "year": 2015,
        "price": "8 300",
        "author": "Julia Kudina",
        "description": "The painting is made in oil on canvas and strikes the viewer's eye with powerful energy. It's like she's plunging back into the past. In a living house, people sleep peacefully and serenely, only the light of a lantern looks into their windows."
    },

    {
        "artworkId": 52,
        "title": "Autum Fruits",
        "seriesId": 9,
        "cover": "autum-fruits",
        "material": "Oil on Canvas",
        "size": "120 x 160",
        "year": 2017,
        "price": "6 000",
        "author": "Julia Kudina",
        "description": "This painting combines landscape and still life at the same time. The fruits of the golden autumn give you the opportunity to admire the latest delicacies of the warm time and once again marvel at the number of shades in the picture."
    },
    {
        "artworkId": 102,
        "title": "Solar Vision",
        "seriesId": 7,
        "cover": "solar-vision",
        "material": "Oil on Canvas",
        "size": "100 х 100",
        "year": 2021,
        "price": "1800",
        "author": "Julia Kudina",
        "description": "The moment when the bright sun shines through the window, and the gray unremarkable room turns into a game of sunlight."
    },
    {
        "artworkId": 103,
        "title": "Reflection",
        "seriesId": 10,
        "cover": "reflection",
        "material": "Oil on Canvas",
        "size": "20 х 30",
        "year": 2020,
        "price": "300",
        "author": "Julia Kudina",
        "description": "A warm summer day, a walk on the shore of the lake, the incredible beauty of nature and its reflection in the clear water. The central element of the painting is white sailboats. There is a small house on the shore. Somehow there is a desire to look at this picture again and again..."
    },
    // {
    //     "artworkId": 22,
    //     "title": "Pumpkin's Still Life",
    //     "seriesId": 9,
    //     "cover": "pumpkin-still-life",
    //     "material": "Oil on Canvas",
    //     "size": "70 x 80",
    //     "year": 2020,
    //     "price": "50 000",        
    //     "author": "Julia Kudina",
    //     "description": "The still life is distinguished by a carefully thought-out composition. All objects are selected and arranged in such a way as to create a harmonious harmony of shape and color. The main character of the picture is a red juicy pumpkin, conveys the play of autumn colors. Still life has a depth of space, all objects are voluminous, material, dense."
    // },
    // {
    //     "artworkId": 23,
    //     "title": "Bouquet in Focus",
    //     "seriesId": 4,
    //     "cover": "bouquet-in-focus",
    //     "material": "Oil on Canvas",
    //     "size": "50 x 60",
    //     "year": 2017,
    //     "price": "40 000",        
    //     "author": "Julia Kudina",
    //     "description": "This picture is a real apotheosis of summer. It depicts a huge bouquet of fresh garden flowers on a dark background, which allows you to attract more attention to the bouquet."
    // },
    // {
    //     "artworkId": 24,
    //     "title": "Lilac",
    //     "seriesId": 4,
    //     "cover": "lilac",
    //     "material": "Oil on Canvas",
    //     "size": "40 x 65",
    //     "year": 2015,
    //     "price": "40 000",        
    //     "author": "Julia Kudina",
    //     "description": "It is written in juicy, bright colors. The volumetric relief of the brushstrokes gives a feeling of maximum similarity with fragrant, lush branches of lilac. All the shades of this spring bloom mixed into a single vortex of purple mystery!"
    // },
    // {
    //     "artworkId": 25,
    //     "title": "Citruses",
    //     "material": "Oil on Canvas",
    //     "size": "40 x 40",
    //     "year": 2017,
    //     "price": "30 000",        
    //     "author": "Julia Kudina",
    //     "description": ""
    // },
    // {
    //     "artworkId": 26,
    //     "title": "Bouquet",
    //     "seriesId": 4,
    //     "cover": "bouquet",
    //     "material": "Oil on Canvas",
    //     "size": "50 x 70",
    //     "year": 2017,
    //     "price": "35 000",        
    //     "author": "Julia Kudina",
    //     "description": "The flowers in the painting are painted with large expressive strokes. The elegant simplicity of the bouquet emphasizes the natural beauty of the plant. The painting is made on a bright yellow background, which immediately helps to return to sunny summer at any time of the year."
    // },
    // {
    //     "artworkId": 27,
    //     "title": "Flowers",
    //     "material": "Oil on Canvas",
    //     "size": "50 x 40",
    //     "year": 2016,
    //     "price": "30 000",        
    //     "author": "Julia Kudina",
    //     "description": ""
    // },
    // {
    //     "artworkId": 28,
    //     "title": "Thistle",
    //     "seriesId": 4,
    //     "cover": "thistle",
    //     "material": "Oil on Canvas",
    //     "size": "40 x 60",
    //     "year": 2015,
    //     "price": "30 000",        
    //     "author": "Julia Kudina",
    //     "description": "There is something incredibly attractive in this strict, unpretentious flower and the artist caught this charm! The thistle on the canvas looks very exquisite, every detail is spelled out to the smallest detail. The restrained color scheme will allow this work to fit perfectly into any interior."
    // },
    // {
    //     "artworkId": 29,
    //     "title": "Romantic Evening",
    //     "material": "Oil on Canvas",
    //     "size": "50 x 60",
    //     "year": 2018,
    //     "price": "30 000",        
    //     "author": "Julia Kudina",
    //     "description": ""
    // },
    // {
    //     "artworkId": 30,
    //     "title": "Light of the Past",
    //     "seriesId": 1,
    //     "cover": "light-of-the-past",
    //     "material": "Oil on Canvas",
    //     "size": "100 x 100",
    //     "year": 2015,
    //     "price": "250 000",        
    //     "author": "Julia Kudina",
    //     "description": "The painting is painted in the technique of multi-layered painting, it is due to it that you get the feeling that the light comes from inside the painting and spreads a pleasant warmth in the soul..."
    // },
    // {
    //     "artworkId": 31,
    //     "title": "Shining Light",
    //     "seriesId": 1,
    //     "cover": "shining-light",
    //     "material": "Oil on Canvas",
    //     "size": "80 x 60",
    //     "year": 2020,
    //     "price": "200 000",        
    //     "author": "Julia Kudina",
    //     "description": "Who doesn't wonder what his city looked like 100 years ago? Looking at the picture plunges into the past... It feels like the building is shining like gold."
    // },
    // {
    //     "artworkId": 32,
    //     "title": "Tulips",
    //     "seriesId": 4,
    //     "cover": "tulips",
    //     "material": "Oil on Canvas",
    //     "size": "40 x 60",
    //     "year": 2015,
    //     "price": "25 000",        
    //     "author": "Julia Kudina",
    //     "description": "The energy of spring... bright juicy joyful colors attract the eye. The longer you look, the more elegant details that make this work unique become visible."
    // },
    // {
    //     "artworkId": 33,
    //     "title": "Riot of colors",
    //     "material": "Oil on Canvas",
    //     "size": "35 x 45",
    //     "year": 2019,
    //     "price": "25 000",        
    //     "author": "Julia Kudina",
    //     "description": ""
    // },
    // {
    //     "artworkId": 34,
    //     "title": "Improvisation",
    //     "seriesId": 7,
    //     "cover": "improvisation",
    //     "material": "Oil on Canvas",
    //     "size": "60 x 80",
    //     "year": 2012,
    //     "price": "90 000",        
    //     "author": "Julia Kudina",
    //     "description": "The author conveys his mood \"here and now\". A wonderful work that will fit into any interior."
    // },
    // {
    //     "artworkId": 35,
    //     "title": "Wave",
    //     "materialRu": "ншет, акрил",
    //     "material": "Acrylic on Cardboard",
    //     "size": "40 x 60",
    //     "year": 2019,
    //     "price": "10 000",        
    //     "author": "Julia Kudina",
    //     "description": ""
    // },
    // {
    //     "artworkId": 36,
    //     "title": "Old Tower",
    //     "material": "Oil on Canvas",
    //     "size": "30 x 17",
    //     "year": 2015,
    //     "price": "",        
    //     "author": "Julia Kudina",
    //     "description": ""
    // },
]

export default ARTWORKS;
const productData = {

featuredProducts: [
  {
    id: "MYRN-1539",
    name: "Stellar T-Bar Statement Ring",
    price: 95,
    image: "assets/img/MYRN-1539.jpg",
    tag: "New",
    rating: 4.5,
    category: "rings",
    description: `<p>Elegant T-bar statement ring crafted in premium gold plating. A bold yet refined piece perfect for modern styling.</p>
    <ul>
      <li>24K gold plating</li>
      <li>Minimal T-bar design</li>
      <li>Perfect for statement looks</li>
    </ul>`,
    reviews: [
      { name: "Aarav", comment: "Looks premium and stylish. Loved the design!", rating: 5 },
      { name: "Sneha", comment: "Very unique ring, perfect for outfits.", rating: 4 }
    ]
  },
  {
    id: "MYRN-28461",
    name: "Eternal Swirl Gold Ring",
    price: 85,
    image: "assets/img/20260106_082325_0002.png",
    tag: null,
    rating: 4,
    category: "rings",
    description: `<p>Graceful swirl-designed gold ring that adds a touch of timeless elegance to your everyday style.</p>
    <ul>
      <li>Unique swirl pattern</li>
      <li>Polished gold finish</li>
      <li>Lightweight comfort wear</li>
    </ul>`,
    reviews: [
      { name: "Priya", comment: "Simple and elegant, goes with everything.", rating: 4 },
      { name: "Rahul", comment: "Nice design but slightly loose fit.", rating: 4 }
    ]
  },
  {
    id: "MYRN-3688",
    name: "Golden Embrace Wrap Ring",
    price: 75,
    image: "assets/img/product-3.jpg",
    tag: null,
    rating: 5,
    category: "rings",
    description: `<p>Modern wrap-style ring designed to beautifully hug your finger with a sleek golden touch.</p>
    <ul>
      <li>Open wrap design</li>
      <li>Smooth gold polish</li>
      <li>Trendy minimalist look</li>
    </ul>`,
    reviews: [
      { name: "Kiran", comment: "Perfect fit and very trendy!", rating: 5 },
      { name: "Divya", comment: "Absolutely loved the design and finish.", rating: 5 }
    ]
  },
  {
    id: "MYRN-9122",
    name: "Golden Embrace Luxe Edition Ring",
    price: 99,
    image: "assets/img/product-4.jpg",
    tag: "Sale",
    rating: 4.5,
    category: "rings",
    description: `<p>Luxe edition wrap ring crafted with a premium finish, offering bold elegance for special occasions.</p>
    <ul>
      <li>Premium gold plating</li>
      <li>Enhanced wrap design</li>
      <li>Perfect for parties & events</li>
    </ul>`,
    reviews: [
      { name: "Megha", comment: "Looks luxurious and classy.", rating: 5 },
      { name: "Ankit", comment: "Good quality, worth the price.", rating: 4 }
    ]
  }
],

newProducts: [
  {
    id: "NEW-1",
    name: "Seraphine Gold Loop Earrings",
    price: 49,
    image: "assets/img/new-product-1.jpg",
    tag: "New",
    rating: 3.5,
    category: "earrings",
    description: `<p>Elegant gold loop earrings inspired by modern Dubai fashion, perfect for effortless daily styling.</p>
    <ul>
      <li>Sleek loop design</li>
      <li>Lightweight comfort</li>
      <li>Everyday elegance</li>
    </ul>`,
    reviews: [
      { name: "Aisha", comment: "Very classy and lightweight, perfect for daily wear.", rating: 4 },
      { name: "Fatima", comment: "Simple yet elegant, loved the finish.", rating: 3 }
    ]
  },
  {
    id: "NEW-2",
    name: "Blue Aurora Crystal Set",
    price: 189,
    image: "assets/img/new-product-2.jpg",
    tag: "New",
    rating: 4,
    category: "necklace",
    description: `<p>Luxurious crystal necklace set inspired by Dubai night skies, featuring radiant blue tones and premium shine.</p>
    <ul>
      <li>Vibrant blue crystals</li>
      <li>Matching set design</li>
      <li>Perfect for special occasions</li>
    </ul>`,
    reviews: [
      { name: "Layla", comment: "Looks so luxurious, perfect for parties!", rating: 5 },
      { name: "Zain", comment: "Great shine and quality, worth it.", rating: 4 }
    ]
  },
  {
    id: "NEW-3",
    name: "Timeless Heart Pendant",
    price: 69,
    image: "assets/img/new-product-3.jpg",
    tag: "New",
    rating: 5,
    category: "necklace",
    description: `<p>Elegant heart pendant necklace symbolizing love and grace, inspired by timeless Middle Eastern elegance.</p>
    <ul>
      <li>Heart-shaped pendant</li>
      <li>Minimal gold chain</li>
      <li>Perfect gifting piece</li>
    </ul>`,
    reviews: [
      { name: "Noor", comment: "Beautiful and meaningful design, loved it!", rating: 5 },
      { name: "Yasmin", comment: "Perfect gift, looks very premium.", rating: 5 }
    ]
  },
  {
    id: "NEW-4",
    name: "Eternal Swirl Modern Ring",
    price: 65,
    image: "assets/img/new-product-4.jpg",
    tag: "Sale",
    rating: 4.5,
    category: "rings",
    description: `<p>Modern swirl ring inspired by contemporary Dubai trends, offering a sleek and stylish look.</p>
    <ul>
      <li>Contemporary swirl design</li>
      <li>Glossy gold finish</li>
      <li>Perfect everyday accessory</li>
    </ul>`,
    reviews: [
      { name: "Omar", comment: "Stylish and comfortable, great daily ring.", rating: 4 },
      { name: "Khalid", comment: "Good quality and design, satisfied.", rating: 5 }
    ]
  }
],

saleProducts: [
  {
    id: "SALE-1",
    name: "Architect Aura Ring",
    price: 79,
    image: "assets/img/sale-product-1.jpg",
    tag: "Sale",
    rating: 3.5,
    category: "rings",
    description: `<p>Modern architectural ring designed with bold structure and clean lines for a unique statement look.</p>
    <ul>
      <li>Geometric design</li>
      <li>Matte gold finish</li>
      <li>Perfect for modern styling</li>
    </ul>`,
    reviews: [
      { name: "Omar", comment: "Very unique design, stands out nicely.", rating: 4 },
      { name: "Zaid", comment: "Good style but slightly bold for daily wear.", rating: 3 }
    ]
  },
  {
    id: "SALE-2",
    name: "Eternal Swirl Classic Ring",
    price: 70,
    image: "assets/img/sale-product-2.jpg",
    tag: "Sale",
    rating: 4,
    category: "rings",
    description: `<p>Timeless swirl ring crafted with a smooth gold finish, perfect for adding subtle elegance to any outfit.</p>
    <ul>
      <li>Classic swirl pattern</li>
      <li>Polished gold shine</li>
      <li>Comfortable everyday wear</li>
    </ul>`,
    reviews: [
      { name: "Aisha", comment: "Simple and elegant, I wear it daily.", rating: 4 },
      { name: "Noor", comment: "Beautiful design and very comfortable.", rating: 4 }
    ]
  },
  {
    id: "SALE-3",
    name: "Eternal Swirl Premium Ring",
    price: 75,
    image: "assets/img/product-3.jpg",
    tag: "Sale",
    rating: 5,
    category: "rings",
    description: `<p>Premium swirl ring featuring enhanced shine and refined craftsmanship for a luxurious feel.</p>
    <ul>
      <li>High-quality gold plating</li>
      <li>Premium swirl design</li>
      <li>Elegant statement piece</li>
    </ul>`,
    reviews: [
      { name: "Khalid", comment: "Excellent quality, feels premium.", rating: 5 },
      { name: "Fatima", comment: "Loved the shine and finish!", rating: 5 }
    ]
  },
  {
    id: "SALE-4",
    name: "Frosted Crown Crystal Ring",
    price: 89,
    image: "assets/img/new-product-4.jpg",
    tag: "Sale",
    rating: 4.5,
    category: "rings",
    description: `<p>Elegant crown-inspired ring adorned with sparkling crystals, designed to give a royal and luxurious touch.</p>
    <ul>
      <li>Crown-style design</li>
      <li>Crystal embellishments</li>
      <li>Perfect for special occasions</li>
    </ul>`,
    reviews: [
      { name: "Yasmin", comment: "Looks royal and very beautiful.", rating: 5 },
      { name: "Layla", comment: "Great sparkle and elegant design.", rating: 4 }
    ]
  }
],
products: [
  //earings
  {
    id: "ER-01",
    name: "Sapphire Drop Earrings",
    price: 59,
    image: "assets/img/ear-rings/myara-er-01.jpg",
    badge: "Bestseller",
    rating: 4.6,
    category: "earrings",
    description: `
    <p>Elegant drop earrings featuring deep sapphire-toned crystals for a refined evening look.</p>
    <ul>
      <li>Vertical drop design</li>
      <li>Rich blue crystal shine</li>
      <li>Perfect occasion wear</li>
    </ul>
    `,
  reviews: [
  { name: "Aisha", comment: "Very elegant and perfect for evening wear.", rating: 5 },
  { name: "Zara", comment: "Loved the shine and design.", rating: 4 }
]
  },

  {
    id: "ER-02",
    name: "Ruby Bloom Stud Earrings",
    price: 49,
    image: "assets/img/ear-rings/myara-er-02.jpg",
    badge: "New",
    rating: 4.4,
    category: "earrings",
    description: `
    <p>Floral ruby crystal studs designed for subtle elegance and everyday sparkle.</p>
    <ul>
      <li>Compact floral design</li>
      <li>Lightweight wear</li>
      <li>Classic red crystal tone</li>
    </ul>
    `,
   reviews: [
  { name: "Layla", comment: "Cute and lightweight, great for daily use.", rating: 4 },
  { name: "Noor", comment: "Beautiful color and finish.", rating: 5 }
]
  },

  {
    id: "ER-03",
    name: "Crystal Hoop Charm Earrings",
    price: 39,
    image: "assets/img/ear-rings/myara-er-03.jpg",
    badge: "Trending",
    rating: 4.3,
    category: "earrings",
    description: `
    <p>Minimal hoop earrings accented with delicate crystal drops for subtle shimmer.</p>
    <ul>
      <li>Modern hoop style</li>
      <li>Light crystal detailing</li>
      <li>Comfortable all-day wear</li>
    </ul>
    `,
   reviews: [
  { name: "Fatima", comment: "Simple yet stylish, matches all outfits.", rating: 4 },
  { name: "Hana", comment: "Good quality for the price.", rating: 4 }
]
  },

  {
    id: "ER-04",
    name: "Golden Luxe Cascade Earrings",
    price: 89,
    image: "assets/img/ear-rings/myara-er-04.jpg",
    badge: "Premium",
    rating: 4.7,
    category: "earrings",
    description: `
    <p>Statement cascade earrings with shimmering stones and a bold gold-tone finish.</p>
    <ul>
      <li>Layered drop design</li>
      <li>High-shine plating</li>
      <li>Wedding & party ready</li>
    </ul>
    `,
    reviews: [
  { name: "Shazia", comment: "Very royal and traditional.", rating: 5 },
  { name: "Hiba", comment: "Perfect for weddings.", rating: 5 }
]
  },

  {
    id: "ER-05",
    name: "Blush Radiance Statement Earrings",
    price: 79,
    image: "assets/img/ear-rings/myara-er-05.jpg",
    badge: "Limited",
    rating: 4.5,
    category: "earrings",
    description: `
    <p>Chandelier-style earrings with soft blush crystals and elegant sparkle.</p>
    <ul>
      <li>Bold statement design</li>
      <li>Pink crystal accents</li>
      <li>Perfect for celebrations</li>
    </ul>
    `,
  reviews: [
  { name: "Bushra", comment: "Minimal and stylish.", rating: 4 },
  { name: "Nawal", comment: "Great for layering.", rating: 4 }
]
  },

  {
    id: "ER-06",
    name: "Emerald Teardrop Royal Earrings",
    price: 99,
    image: "assets/img/ear-rings/myara-er-06.jpg",
    badge: "Exclusive",
    rating: 4.8,
    category: "earrings",
    description: `
    <p>Royal emerald-inspired drop earrings framed with sparkling crystal accents.</p>
    <ul>
      <li>Deep green centerpiece</li>
      <li>Crystal border finish</li>
      <li>Luxury-inspired look</li>
    </ul>
    `,
   reviews: [
  { name: "Aaliyah", comment: "Very elegant pendant.", rating: 5 },
  { name: "Sana", comment: "Looks premium and classy.", rating: 4 }
]
  },

  {
    id: "ER-08",
    name: "Ruby Bloom Radiance Earrings",
    price: 69,
    image: "assets/img/ear-rings/myara-er-07.jpg",
    badge: "New",
    rating: 4.7,
    category: "earrings",
    description: `
    <p>Radiant ruby floral earrings designed to add bold elegance to festive outfits.</p>
    <ul>
      <li>Petal-style setting</li>
      <li>Vibrant ruby crystals</li>
      <li>Ideal festive accessory</li>
    </ul>
    `,
   reviews: [
  { name: "Rasha", comment: "Simple and perfect daily wear.", rating: 4 },
  { name: "Yara", comment: "Very lightweight and comfy.", rating: 4 }
]
  },

  {
    id: "ER-09",
    name: "Crystal Whisper Hoop Earrings",
    price: 65,
    image: "assets/img/ear-rings/myara-er-08.jpg",
    badge: "Trending",
    rating: 4.6,
    category: "earrings",
    description: `
    <p>Sleek elongated hoops with a delicate crystal drop for refined elegance.</p>
    <ul>
      <li>Minimal hoop design</li>
      <li>Subtle crystal sparkle</li>
      <li>Perfect evening styling</li>
    </ul>
    `,
  reviews: [
  { name: "Lina", comment: "Classic and elegant design.", rating: 5 },
  { name: "Sara", comment: "Perfect for formal occasions.", rating: 4 }
]
  },
  {
  id: "ER-10",
  name: "Midnight Sapphire Dangle Earrings",
  price: 72,
  image: "assets/img/ear-rings/myara-er-07.jpg",
  badge: "Elegant",
  rating: 4.7,
  category: "earrings",
  description: `
  <p>Graceful sapphire-toned dangle earrings designed for evening sophistication.</p>
  <ul>
    <li>Deep blue crystal drops</li>
    <li>Gold-tone finish</li>
    <li>Perfect for dinner & events</li>
  </ul>
  `,
 reviews: [
  { name: "Huda", comment: "Minimal and classy.", rating: 4 },
  { name: "Mariam", comment: "Nice sparkle for evening wear.", rating: 5 }
]
},
{
  id: "ER-11",
  name: "Ocean Glow Crystal Drops",
  price: 74,
  image: "assets/img/ear-rings/myara-er-08.jpg",
  badge: "Premium",
  rating: 4.8,
  category: "earrings",
  description: `
  <p>Vibrant ocean-blue crystal earrings that radiate charm and modern elegance.</p>
  <ul>
    <li>Bright aqua crystal tone</li>
    <li>Delicate gold chain drop</li>
    <li>Lightweight & comfortable</li>
  </ul>
  `,
  reviews: []
},{
  id: "ER-12",
  name: "Pearl Luxe Drop Earrings",
  price: 58,
  image: "assets/img/ear-rings/Mya-er7.png",
  badge: "Classic",
  rating: 4.5,
  category: "earrings",
  description: `
  <p>Timeless pearl drop earrings with a refined gold setting.</p>
  <ul>
    <li>Elegant pearl finish</li>
    <li>Minimal gold hook</li>
    <li>Perfect for formal occasions</li>
  </ul>
  `,
  reviews: []
},{
  id: "ER-13",
  name: "Royal Gold Chandelier Earrings",
  price: 92,
  image: "assets/img/ear-rings/Mya-er8.png",
  badge: "Statement",
  rating: 4.8,
  category: "earrings",
  description: `
  <p>Intricate chandelier earrings crafted with detailed gold patterns.</p>
  <ul>
    <li>Traditional royal design</li>
    <li>Detailed filigree work</li>
    <li>Ideal for weddings & festivals</li>
  </ul>
  `,
  reviews: []
},{
  id: "ER-14",
  name: "Minimal Gold Stud Hoops",
  price: 36,
  image: "assets/img/ear-rings/Mya-er9.png",
  badge: "Daily Wear",
  rating: 4.3,
  category: "earrings",
  description: `
  <p>Chic and minimal gold stud hoops for effortless everyday styling.</p>
  <ul>
    <li>Sleek compact design</li>
    <li>Lightweight comfort</li>
    <li>Modern minimal look</li>
  </ul>
  `,
  reviews: []
},{
  id: "ER-15",
  name: "Emerald Square Drop Earrings",
  price: 84,
  image: "assets/img/ear-rings/Mya-er10.png",
  badge: "Luxury",
  rating: 4.9,
  category: "earrings",
  description: `
  <p>Bold emerald square earrings set in polished gold plating.</p>
  <ul>
    <li>Rich green gemstone look</li>
    <li>Geometric square design</li>
    <li>High-gloss finish</li>
  </ul>
  `,
  reviews: []
},{
  id: "ER-16",
  name: "Golden Curve Mini Hoops",
  price: 42,
  image: "assets/img/ear-rings/Mya-er11.png",
  badge: "Trending",
  rating: 4.4,
  category: "earrings",
  description: `
  <p>Modern curved mini hoop earrings with a polished gold shine.</p>
  <ul>
    <li>Smooth rounded finish</li>
    <li>Everyday essential</li>
    <li>Subtle luxury touch</li>
  </ul>
  `,
  reviews: []
},{
  id: "ER-17",
  name: "Rose Gold Teardrop Sparkle Earrings",
  price: 76,
  image: "assets/img/ear-rings/Mya-er12.png",
  badge: "Romantic",
  rating: 4.6,
  category: "earrings",
  description: `
  <p>Soft rose-gold teardrop earrings with shimmering crystal detailing.</p>
  <ul>
    <li>Elegant teardrop shape</li>
    <li>Warm rose-gold tone</li>
    <li>Perfect for date nights</li>
  </ul>
  `,
  reviews: []
},

// necklaces

{
  id: "NC-01",
  name: "Golden Aura Drop Pendant",
  price: 88,
  image: "assets/img/necklace/Mya-nc5.jpg",
  badge: "Elegant",
  rating: 4.7,
  category: "necklace",
  description: `
  <p>Refined gold pendant necklace featuring a graceful teardrop design with a polished finish.</p>
  <ul>
    <li>Classic drop pendant style</li>
    <li>High-shine gold plating</li>
    <li>Perfect for formal & evening wear</li>
  </ul>
  `,
  reviews: []
},

{
  id: "NC-02",
  name: "Midnight Clover Crystal Necklace",
  price: 72,
  image: "assets/img/necklace/Mya-nc6.jpg",
  badge: "Trending",
  rating: 4.6,
  category: "necklace",
  description: `
  <p>Delicate clover-shaped pendant with soft blue crystal accents on a fine gold chain.</p>
  <ul>
    <li>Floral clover centerpiece</li>
    <li>Subtle crystal sparkle</li>
    <li>Lightweight everyday elegance</li>
  </ul>
  `,
  reviews: []
},

{
  id: "NC-03",
  name: "Minimal Gold Charm Necklace",
  price: 64,
  image: "assets/img/necklace/Mya-nc7.jpg",
  badge: "Daily Wear",
  rating: 4.5,
  category: "necklace",
  description: `
  <p>Sleek and minimal gold chain necklace with a petite charm detail.</p>
  <ul>
    <li>Modern minimalist design</li>
    <li>Lightweight gold chain</li>
    <li>Perfect for layering</li>
  </ul>
  `,
  reviews: []
},

{
  id: "NC-04",
  name: "Royal Heritage Gold Pendant",
  price: 109,
  image: "assets/img/necklace/Mya-nc8.jpg",
  badge: "Premium",
  rating: 4.8,
  category: "necklace",
  description: `
  <p>Traditional gold pendant necklace inspired by timeless royal craftsmanship.</p>
  <ul>
    <li>Intricate pendant detailing</li>
    <li>Rich gold-tone finish</li>
    <li>Ideal for weddings & celebrations</li>
  </ul>
  `,
  reviews: []
},

{
  id: "NC-05",
  name: "Sunlit Grace Pendant Necklace",
  price: 95,
  image: "assets/img/necklace/Mya-nc9.jpg",
  badge: "Luxury",
  rating: 4.9,
  category: "necklace",
  description: `
  <p>Elegant gold pendant necklace with a radiant drop design and smooth polished finish.</p>
  <ul>
    <li>Refined drop silhouette</li>
    <li>Glossy gold plating</li>
    <li>Perfect statement for special occasions</li>
  </ul>
  `,
  reviews: []
},
{
  id: "NC-06",
  name: "Delicate Glow Solitaire Necklace",
  price: 68,
  image: "assets/img/necklace/Mya-nc1.jpg",
  badge: "Minimal",
  rating: 4.5,
  category: "necklace",
  description: `
  <p>Elegant solitaire pendant necklace with a subtle crystal centerpiece for refined everyday beauty.</p>
  <ul>
    <li>Single crystal drop pendant</li>
    <li>Fine lightweight gold chain</li>
    <li>Perfect for daily & office wear</li>
  </ul>
  `,
  reviews: []
},

{
  id: "NC-07",
  name: "Golden Whisper Layered Necklace",
  price: 82,
  image: "assets/img/necklace/Mya-nc2.jpg",
  badge: "Trending",
  rating: 4.6,
  category: "necklace",
  description: `
  <p>Modern layered gold necklace designed to add effortless elegance to any outfit.</p>
  <ul>
    <li>Chic double-layer style</li>
    <li>Polished gold-tone finish</li>
    <li>Perfect for casual & semi-formal looks</li>
  </ul>
  `,
  reviews: []
},

{
  id: "NC-08",
  name: "Petite Charm Gold Necklace",
  price: 59,
  image: "assets/img/necklace/Mya-nc3.jpg",
  badge: "Daily Wear",
  rating: 4.4,
  category: "necklace",
  description: `
  <p>Minimal gold necklace featuring a petite charm pendant for subtle sophistication.</p>
  <ul>
    <li>Compact charm centerpiece</li>
    <li>Lightweight comfortable chain</li>
    <li>Great for layering styles</li>
  </ul>
  `,
  reviews: []
},

{
  id: "NC-09",
  name: "Radiant Teardrop Crystal Necklace",
  price: 91,
  image: "assets/img/necklace/Mya-nc4.jpg",
  badge: "Elegant",
  rating: 4.7,
  category: "necklace",
  description: `
  <p>Graceful teardrop crystal pendant necklace with a refined gold setting.</p>
  <ul>
    <li>Classic teardrop silhouette</li>
    <li>High-shine crystal accent</li>
    <li>Ideal for parties & special occasions</li>
  </ul>
  `,
  reviews: []
}

]

};

const shopProducts = [
  ...productData.featuredProducts,
  ...productData.newProducts,
  ...productData.saleProducts,
    ...(productData.products || []) 
];

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
    description: `...`,
    reviews: []
  },
  {
    id: "MYRN-28461",
    name: "Eternal Swirl Gold Ring",
    price: 85,
    image: "assets/img/20260106_082325_0002.png",
    tag: null,
    rating: 4,
    category: "rings",
    description: `...`,
    reviews: []
  },
  {
    id: "MYRN-3688",
    name: "Golden Embrace Wrap Ring",
    price: 75,
    image: "assets/img/product-3.jpg",
    tag: null,
    rating: 5,
    category: "rings",
    description: `...`,
    reviews: []
  },
  {
    id: "MYRN-9122",
    name: "Golden Embrace Luxe Edition Ring",
    price: 99,
    image: "assets/img/product-4.jpg",
    tag: "Sale",
    rating: 4.5,
    category: "rings",
    description: `...`,
    reviews: []
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
    description: `...`,
    reviews: []
  },
  {
    id: "NEW-2",
    name: "Blue Aurora Crystal Set",
    price: 189,
    image: "assets/img/new-product-2.jpg",
    tag: "New",
    rating: 4,
    category: "necklace",   // necklace set
    description: `...`,
    reviews: []
  },
  {
    id: "NEW-3",
    name: "Timeless Heart Pendant",
    price: 69,
    image: "assets/img/new-product-3.jpg",
    tag: "New",
    rating: 5,
    category: "necklace",
    description: `...`,
    reviews: []
  },
  {
    id: "NEW-4",
    name: "Eternal Swirl Modern Ring",
    price: 65,
    image: "assets/img/new-product-4.jpg",
    tag: "Sale",
    rating: 4.5,
    category: "rings",
    description: `...`,
    reviews: []
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
    description: `...`,
    reviews: []
  },
  {
    id: "SALE-2",
    name: "Eternal Swirl Classic Ring",
    price: 70,
    image: "assets/img/sale-product-2.jpg",
    tag: "Sale",
    rating: 4,
    category: "rings",
    description: `...`,
    reviews: []
  },
  {
    id: "SALE-3",
    name: "Eternal Swirl Premium Ring",
    price: 75,
    image: "assets/img/product-3.jpg",
    tag: "Sale",
    rating: 5,
    category: "rings",
    description: `...`,
    reviews: []
  },
  {
    id: "SALE-4",
    name: "Frosted Crown Crystal Ring",
    price: 89,
    image: "assets/img/new-product-4.jpg",
    tag: "Sale",
    rating: 4.5,
    category: "rings",
    description: `...`,
    reviews: []
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
    reviews: []
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
    reviews: []
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
    reviews: []
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
    reviews: []
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
    reviews: []
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
    reviews: []
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
    reviews: []
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
    reviews: []
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
  reviews: []
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
}

//necklaces

]

};

const shopProducts = [
  ...productData.featuredProducts,
  ...productData.newProducts,
  ...productData.saleProducts
];

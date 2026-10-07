const products = [
  {
    id: 1,
    category: "SHIRT",
    title: "Tribal Legacy",
    price: "1,699",
    fit: "REGULAR FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/tribal-legacy-shirt-mydesignation-2868384.jpg?v=1789518914&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/tribal-legacy-shirt-mydesignation-1468667.jpg?v=1789518914&width=535"
  },
  {
    id: 2,
    category: "SHIRT",
    title: "Plaid: Midnight Ivory",
    price: "1,199",
    fit: "REGULAR FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/plaid-midnight-ivory-shirt-mydesignation-5831216.jpg?v=1789518911&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/plaid-midnight-ivory-shirt-mydesignation-1415602.jpg?v=1789518910&width=535"
  },
  {
    id: 3,
    category: "SHIRT",
    title: "Desi Street",
    price: "1,399",
    fit: "RELAXED FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/desi-street-shirt-mydesignation-9949777.jpg?v=1789434913&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/desi-street-shirt-mydesignation-6390304.jpg?v=1789434913&width=535"
  },
  {
    id: 4,
    category: "SHIRT",
    title: "Plaid: Emerald Coast",
    price: "1,199",
    fit: "REGULAR FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/plaid-emerald-coast-shirt-mydesignation-3408392.jpg?v=1789518911&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/plaid-emerald-coast-shirt-mydesignation-8711683.jpg?v=1789518911&width=535"
  },
  {
    id: 5,
    category: "SHIRT",
    title: "Crimson Wave",
    price: "1,399",
    fit: "RELAXED FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/crimson-wave-shirt-mydesignation-1562305.jpg?v=1789186215&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/crimson-wave-shirt-mydesignation-6892176.jpg?v=1789186215&width=535"
  },
  {
    id: 6,
    category: "SHIRT",
    title: "Plaid: Blue Stone",
    price: "1,199",
    fit: "REGULAR FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/plaid-blue-stone-shirt-mydesignation-6301819.jpg?v=1789518911&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/plaid-blue-stone-shirt-mydesignation-3285027.jpg?v=1789518911&width=535"
  },
  {
    id: 7,
    category: "SHIRT",
    title: "Samurai Legacy",
    price: "1,399",
    fit: "RELAXED FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/samurai-legacy-shirt-mydesignation-2950820.jpg?v=1789103475&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/samurai-legacy-shirt-mydesignation-5858310.jpg?v=1789103475&width=535"
  },
  {
    id: 8,
    category: "SHIRT",
    title: "Plaid: Slate Shadow",
    price: "1,199",
    fit: "REGULAR FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/plaid-slate-shadow-shirt-mydesignation-6702549.jpg?v=1789518910&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/plaid-slate-shadow-shirt-mydesignation-5451304.jpg?v=1789518910&width=535"
  },
  {
    id: 9,
    category: "SHIRT",
    title: "Neon Drift",
    price: "1,299",
    fit: "RELAXED FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/neon-drift-shirt-mydesignation-2104142.jpg?v=1788854952&width=750",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/neon-drift-shirt-mydesignation-6215155.jpg?v=1788854952&width=535"
  },
  {
    id: 10,
    category: "OVERSIZED T-SHIRT",
    title: "Lion Dance",
    price: "1,399",
    fit: "OVERSIZED FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/lion-dance-oversized-t-shirt-mydesignation-4889618.jpg?v=1788854954&width=750",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/lion-dance-oversized-t-shirt-mydesignation-1946171.jpg?v=1788854954&width=535"
  }
];

const container = document.getElementById("card-container");

// Render cards with custom data attributes for images
container.innerHTML = products.map(product => `
  <div class="t-card">
    <div class="card-img">
      <img 
        class="product-img" 
        src="${product.imgSrc}" 
        data-default-src="${product.imgSrc}" 
        data-hover-src="${product.hoverImgSrc || product.imgSrc}" 
        alt="${product.title}"
      >
      <button><i class="bi bi-heart"></i></button>
      <small>${product.fit}</small>
    </div>
    <div class="card-data">
      <small>${product.category}</small>
      <p>${product.title}</p>
      <strong><i class="bi bi-currency-rupee"> </i>${product.price}</strong>
    </div>
    <button>ADD TO CART</button>
  </div>
`).join("");

// Attach hover logic
container.querySelectorAll('.product-img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.src = img.dataset.hoverSrc;
  });
  img.addEventListener('mouseleave', () => {
    img.src = img.dataset.defaultSrc;
  });
});


const  Curated= [
  {
    id: 1,
    category: "SHIRT",
    title: "Mayan Empire",
    price: "1,125",
    fit: "RELAXED FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/starry-night-shirt-mydesignation-9163374.jpg?v=1778808549&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/starry-night-shirt-mydesignation-7152977.jpg?v=1778808549&width=535"
  },
  {
    id: 2,
    category: "SHIRT",
    title: "Neon Drift",
    price: "1,899",
    fit: "RELAXED FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/KirtimukhaHeritageEmbroideredShirt_1.jpg?v=1788764271&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/KirtimukhaHeritageEmbroideredShirt_2.jpg?v=1788764271&width=1100"
  },
  {
    id: 3,
    category: "SHIRT",
    title: "Lion Dance",
    price: "1,399",
    fit: "RELAXED FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/origami-elephant-shirt-shirt-mydesignation-2633250.jpg?v=1786534813&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/origami-elephant-shirt-shirt-mydesignation-2808932.jpg?v=1786534813&width=535"
  },
  {
    id: 4,
    category: "SHIRT",
    title: "Sweet Escape",
    price: "1,399",
    fit: "RELAXED FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/summer-leaf-embroidered-shirt-men-shirt-mydesignation-4148013.jpg?v=1784795351&width=1100",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/summer-leaf-embroidered-shirt-men-shirt-mydesignation-3247746.jpg?v=1784795351&width=1100"
  },
  {
    id: 5,
    category: "SHIRT",
    title: "Tribal Legacy",
    price: "2,299",
    fit: "RELAXED FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/stone-grey-bamboo-full-sleeve-shirt-shirt-mydesignation-6426239.jpg?v=1788274932&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/stone-grey-bamboo-full-sleeve-shirt-shirt-mydesignation-3803577.jpg?v=1788274933&width=535"
  },
  {
    id: 6,
    category: "SHIRT",
    title: "Tribal Leopard",
    price: "1,199",
    fit: "REGULAR FIT",
    imgSrc: "https://cdn.shopify.com/s/files/1/0798/9710/0596/files/tribal-leopard-oversized-t-shirt-mydesignation-7330423.jpg?v=1784629153&width=900",
    hoverImgSrc: "https://cdn.shopify.com/s/files/1/0798/9710/0596/files/tribal-leopard-oversized-t-shirt-mydesignation-3400807.jpg?v=1784629153&width=900"
  },
  {
    id: 7,
    category: "SHIRT",
    title: "Starry Night",
    price: "1,399",
    fit: "REGULAR FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/ethnic-rave-embroidered-shirt-mydesignation-2721236.jpg?v=1785623353&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/ethnic-rave-embroidered-shirt-mydesignation-7859473.jpg?v=1785623352&width=535"
  },
  {
    id: 8,
    category: "SHIRT",
    title: "Origami Elephant",
    price: "2,299",
    fit: "REGULAR FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/mauve-bamboo-full-sleeve-shirt-shirt-mydesignation-9618789.jpg?v=1788274932&width=1100",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/mauve-bamboo-full-sleeve-shirt-shirt-mydesignation-6953806.jpg?v=1788274932&width=1100"
  },
  {
    id: 9,
    category: "SHIRT",
    title: "Orgami Embroidered",
    price: "1,499",
    fit: "REGULAR FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/origami-embroidered-shirt-mydesignation-7274421.jpg?v=1788274934&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/origami-embroidered-shirt-mydesignation-9257687.jpg?v=1788274933&width=535"
  },
  {
    id: 10,
    category: "OVERSIZED T-SHIRT",
    title: "Guardian Embroidered",
    price: "1,699",
    fit: "REGULAR FIT",
    imgSrc: "https://www.mydesignation.com/cdn/shop/files/guardian-embroidered-shirt-mydesignation-4316170.jpg?v=1787364429&width=535",
    hoverImgSrc: "https://www.mydesignation.com/cdn/shop/files/guardian-embroidered-men-shirt-mydesignation-4604269.jpg?v=1765432003&width=535"
  }
];

const curatedcontainer = document.getElementById("curated-card-container");

// Render cards with custom data attributes for images
curatedcontainer.innerHTML = Curated.map(product => `
  <div class="t-card">
    <div class="card-img">
      <img 
        class="product-img" 
        src="${product.imgSrc}" 
        data-default-src="${product.imgSrc}" 
        data-hover-src="${product.hoverImgSrc || product.imgSrc}" 
        alt="${product.title}"
      >
      <button><i class="bi bi-heart"></i></button>
      <small>${product.fit}</small>
    </div>
    <div class="card-data">
      <small>${product.category}</small>
      <p>${product.title}</p>
      <strong><i class="bi bi-currency-rupee"> </i>${product.price}</strong>
    </div>
    <button>ADD TO CART</button>
  </div>
`).join("");

// Attach hover logic
curatedcontainer.querySelectorAll('.product-img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.src = img.dataset.hoverSrc;
  });
  img.addEventListener('mouseleave', () => {
    img.src = img.dataset.defaultSrc;
  });
});

const highfive = [
  {id:1,img:'https://www.mydesignation.com/cdn/shop/files/01-Kochi-Store-DirectionBanner.jpg?v=1759122053&width=800',open:true,btn:'Get Directions'},
  {id:2,img:'https://tse2.mm.bing.net/th/id/OIP.F7uNc0Kihx9OzuS66hYFsgHaGU?r=0&pid=Api&h=220&P=0',open:true,btn:'Get Directions'},
  {id:3,img:'https://tse4.mm.bing.net/th/id/OIP.oUvCbVG4Lr5TTWX5Feo6KAHaFU?r=0&pid=Api&h=220&P=0',open:true,btn:'Get Directions'},
  {id:4,img:'https://tse1.mm.bing.net/th/id/OIP.R0hWmUkOLqufj62xgDk5rAHaGU?r=0&pid=Api&h=220&P=0',open:true,btn:'Get Directions'},
  {id:5,img:'',open:true,btn:'Get Directions'},
  {id:6,img:'',open:true,btn:'Get Directions'},
  {id:7,img:'',open:true,btn:'Get Directions'},
  {id:8,img:'',open:true,btn:'Get Directions'},
  {id:9,img:'',open:false,btn:'Coming Soon'},
  {id:10,img:'',open:false,btn:'Coming Soon'},
]








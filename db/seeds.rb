puts 'seeding users'

User.create(
    first: "Phil", 
    last: "Zukowski", 
    street: "222 Linwood Ave",
    apt: "3",
    city: "Buffalo",
    state: "New York",
    country: "United States",
    zip: 14209,
    admin: true, 
    email: "phillup.zukowski@gmail.com", 
    password: "password"
  )

  User.create(
    first: "Chad", 
    last: "Brake",
    street: "111 Sum St",
    apt: "",
    city: "Buffalo",
    state: "New York",
    country: "United States",
    zip: 14209,
    admin: true, 
    email: "brake.chad@gmail.com", 
    password: "password1"
  )

  User.create(
    first: "Bev", 
    last: "Davis", 
    street: "333 Sum Ware Cir",
    apt: "2",
    city: "Buffalo",
    state: "New York",
    country: "United States",
    zip: 14209,
    admin: true, 
    email: "dev.b@gmail.com", 
    password: "password2"
  )

puts 'seeding tees'
  
Product.create(
    name: "Starry Night",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/chqvqG3/starry-night.png",
    category: "T-Shirt",
    price: 40,
)
Product.create(
    name: "Basket Of Apples",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/P4XpL3S/basket-of-apples.png",
    category: "T-Shirt",
    price: 40,
)
Product.create(
    name: "Blossoming Almond Tree",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/RGFK8QD/blossoming-almond-tree.png",
    category: "T-Shirt",
    price: 40,
)
Product.create(
    name: "Cypresses",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/Kj1DyMD/cypresses.png",
    category: "T-Shirt",
    price: 40,
)
Product.create(
    name: "Irises",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/GdYdyP7/irises.png",
    category: "T-Shirt",
    price: 40,
)
Product.create(
    name: "Poppies",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/CH6Z23F/poppies.png",
    category: "T-Shirt",
    price: 40,
)
Product.create(
    name: "Sunflowers",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/0QtkK3m/sunflowers.png",
    category: "T-Shirt",
    price: 40,
)
Product.create(
    name: "The Mulberry Tree",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/D45XZ8r/the-mulberry-tree.png",
    category: "T-Shirt",
    price: 40,
)

puts 'seeding crews'
  
Product.create(
    name: "Starry Night",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/X3Sw1DC/starry-night.png",
    category: "Crewneck",
    price: 50,
)
Product.create(
    name: "Basket Of Apples",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/9GDk04c/basket-of-apples.png",
    category: "Crewneck",
    price: 50,
)
Product.create(
    name: "Blossoming Almond Tree",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/JnM9WHN/blossoming-almond-tree.png",
    category: "Crewneck",
    price: 50,
)
Product.create(
    name: "Cypresses",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/YhLnxpW/cypresses.png",
    category: "Crewneck",
    price: 50,
)
Product.create(
    name: "Irises",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/5WBHBSF/irises.png",
    category: "Crewneck",
    price: 50,
)
Product.create(
    name: "Poppies",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/PcMRtsc/poppies.png",
    category: "Crewneck",
    price: 50,
)
Product.create(
    name: "Sunflowers",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/z67vdSp/sunflowers.png",
    category: "Crewneck",
    price: 50,
)
Product.create(
    name: "The Mulberry Tree",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/NxjbB2H/the-mulberry-tree.png",
    category: "Crewneck",
    price: 50,
)

puts 'seeding hoodies'

Product.create(
    name: "Starry Night",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/z6VxJV2/starry-night.png",
    category: "Hoodies",
    price: 60,
)
Product.create(
    name: "Basket Of Apples",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/gMFmD7T/basket-of-apples.png",
    category: "Hoodies",
    price: 60,
)
Product.create(
    name: "Blossoming Almond Tree",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/mGpzQr7/blossoming-almond-tree.png",
    category: "Hoodies",
    price: 60,
)
Product.create(
    name: "Cypresses",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/hCJwxDP/cypresses.png",
    category: "Hoodies",
    price: 60,
)
Product.create(
    name: "Irises",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/t3NB5k2/irises.png",
    category: "Hoodies",
    price: 60,
)
Product.create(
    name: "Poppies",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/dfVhVnC/poppies.png",
    category: "Hoodies",
    price: 60,
)
Product.create(
    name: "Sunflowers",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/YLtmNKX/sunflowers.png",
    category: "Hoodies",
    price: 60,
)
Product.create(
    name: "The Mulberry Tree",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/z5jmyYp/the-mulberry-tree.png",
    category: "Hoodies",
    price: 60,
)

puts 'seeding slides'

Product.create(
    name: "Starry Night",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/bspBGxx/starry-night-slides.png",
    category: "Slides",
    price: 50,
)
Product.create(
    name: "Basket Of Apples",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/7R6JQTP/basket-of-apples-1.png",
    category: "Slides",
    price: 50,
)
Product.create(
    name: "Blossoming Almond Tree",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/1MRsvjg/Blossoming-Almond-Tree-1.png",
    category: "Slides",
    price: 50,
)
Product.create(
    name: "Cypresses",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/YRCBSGz/cypresses-1.png",
    category: "Slides",
    price: 50,
)
Product.create(
    name: "Irises",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/8PbnVW5/irises-1.png",
    category: "Slides",
    price: 50,
)
Product.create(
    name: "Poppies",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/KWgWDkP/poppies-1.png",
    category: "Slides",
    price: 50,
)
Product.create(
    name: "Sunflowers",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/zmgZjmN/sunflower-slides-1.png",
    category: "Slides",
    price: 50,
)
Product.create(
    name: "The Mulberry Tree",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/M7KS8PP/the-mulberry-tree-1.png",
    category: "Slides",
    price: 50,
)

puts 'seeding bags'

Product.create(
    name: "Starry Night",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/BtkSG2G/starry-night.png",
    category: "Bags",
    price: 50,
)
Product.create(
    name: "Basket Of Apples",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/fX8fhgs/basket-of-apples.png",
    category: "Bags",
    price: 50,
)
Product.create(
    name: "Blossoming Almond Tree",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/V2WfRGz/blossoming-almond-tree.png",
    category: "Bags",
    price: 50,
)
Product.create(
    name: "Cypresses",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/F0yRmdK/cypresses.png",
    category: "Bags",
    price: 50,
)
Product.create(
    name: "Irises",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/wYCSW4P/irises.png",
    category: "Bags",
    price: 50,
)
Product.create(
    name: "Poppies",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/k6ZzgHr/poppies.png",
    category: "Bags",
    price: 50,
)
Product.create(
    name: "Sunflowers",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/zmQGvdV/sunflower.png",
    category: "Bags",
    price: 50,
)
Product.create(
    name: "The Mulberry Tree",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/hZ0n4NP/the-mulberry-trees.png",
    category: "Bags",
    price: 50,
)


Order.create(
    user_id: 1,
    total: 200,
    status: "new"
)
Order.create(
    user_id: 1,
    total: 240,
    status: "new"
)
Order.create(
    user_id: 1,
    total: 190,
    status: "new"
)
Order.create(
    user_id: 2,
    total: 270,
    status: "new"
)
Order.create(
    user_id: 2,
    total: 140,
    status: "new"
)
Order.create(
    user_id: 2,
    total: 190,
    status: "new"
)
Order.create(
    user_id: 3,
    total: 80,
    status: "new"
)
Order.create(
    user_id: 3,
    total: 100,
    status: "new"
)
Order.create(
    user_id: 3,
    total: 110,
    status: "new"
)

OrderItem.create(
    order_id: 1,
    product_id: 39,
    quantity: 1
)
OrderItem.create(
    order_id: 1,
    product_id: 3,
    quantity: 1
)
OrderItem.create(
    order_id: 1,
    product_id: 22,
    quantity: 1
)
OrderItem.create(
    order_id: 1,
    product_id: 12,
    quantity: 1
)

OrderItem.create(
    order_id: 1,
    product_id: 5,
    quantity: 1
)
OrderItem.create(
    order_id: 1,
    product_id: 7,
    quantity: 1
)
OrderItem.create(
    order_id: 1,
    product_id: 17,
    quantity: 1
)
OrderItem.create(
    order_id: 2,
    product_id: 30,
    quantity: 2
)
OrderItem.create(
    order_id: 2,
    product_id: 33,
    quantity: 1
)

OrderItem.create(
    order_id: 2,
    product_id: 5,
    quantity: 1
)
OrderItem.create(
    order_id: 2,
    product_id: 7,
    quantity: 1
)
OrderItem.create(
    order_id: 2,
    product_id: 17,
    quantity: 1
)
OrderItem.create(
    order_id: 2,
    product_id: 30,
    quantity: 2
)
OrderItem.create(
    order_id: 2,
    product_id: 33,
    quantity: 1
)

OrderItem.create(
    order_id: 3,
    product_id: 6,
    quantity: 1
)
OrderItem.create(
    order_id: 3,
    product_id: 34,
    quantity: 2
)
OrderItem.create(
    order_id: 3,
    product_id: 27,
    quantity: 1
)

OrderItem.create(
    order_id: 4,
    product_id: 1,
    quantity: 3
)
OrderItem.create(
    order_id: 4,
    product_id: 32,
    quantity: 1
)
OrderItem.create(
    order_id: 4,
    product_id: 40,
    quantity: 1
)
OrderItem.create(
    order_id: 4,
    product_id: 11,
    quantity: 1
)


OrderItem.create(
    order_id: 5,
    product_id: 33,
    quantity: 2
)
OrderItem.create(
    order_id: 5,
    product_id: 2,
    quantity: 1
)

OrderItem.create(
    order_id: 36,
    product_id: 33,
    quantity: 2
)
OrderItem.create(
    order_id: 6,
    product_id: 8,
    quantity: 1
)
OrderItem.create(
    order_id: 6,
    product_id: 31,
    quantity: 1
)

OrderItem.create(
    order_id: 7,
    product_id: 4,
    quantity: 2
)

OrderItem.create(
    order_id: 8,
    product_id: 13,
    quantity: 1
)
OrderItem.create(
    order_id: 8,
    product_id: 29,
    quantity: 1
)

OrderItem.create(
    order_id: 9,
    product_id: 5,
    quantity: 1
)
OrderItem.create(
    order_id: 9,
    product_id: 26,
    quantity: 1
)
OrderItem.create(
    order_id: 9,
    product_id: 14,
    quantity: 1
)
OrderItem.create(
    order_id: 9,
    product_id: 23,
    quantity: 1
)

puts "seeding reviews"

Review.create(
    rating: 4,
    text: "Wow! I love this hoodie, It's so comfortable.",
    user_id: 1,
    product_id: 23,
)
Review.create(
    rating: 1,
    text: "Love this t-shirt!!!",
    user_id: 1,
    product_id: 23,
)
Review.create(
    rating: 5,
    text: "Cut the sleeves off so I can gogh any where do anything.",
    user_id: 1,
    product_id: 2,
)
Review.create(
    rating: 5,
    text: "Out here slippin and slidin",
    user_id: 1,
    product_id: 33,
)
Review.create(
    rating: 5,
    text: "They Float!",
    user_id: 1,
    product_id: 37,
)
Review.create(
    rating: 5,
    text: "10 out of 10 would recommend!",
    user_id: 1,
    product_id: 6,
)
Review.create(
    rating: 5,
    text: "I BOUGHT THEM ALL.",
    user_id: 1,
    product_id: 3,
)
Review.create(
    rating: 5,
    text: "Great stuff. super high quality.",
    user_id: 1,
    product_id: 2,
)
Review.create(
    rating: 4,
    text: "This is probably my new favorite sweater",
    user_id: 1,
    product_id: 12,
)
Review.create(
    rating: 5,
    text: "these slides are dope.",
    user_id: 2,
    product_id: 34,
)
Review.create(
    rating: 4,
    text: "Love this painting and t-shirt.",
    user_id: 1,
    product_id: 3,
)
Review.create(
    rating: 5,
    text: "Love van gogh prints. I wear this hoodie everywhere.",
    user_id: 2,
    product_id: 23,
)
Review.create(
    rating: 5,
    text: "this is awesome. I like doing things in this. like this a lot.",
    user_id: 11,
    product_id: 14,
)
Review.create(
    rating: 1,
    text: "not stain proof!!",
    user_id: 11,
    product_id: 13,
)
Review.create(
    rating: 1,
    text: "The shipping was quick, t-shirt was super high quality. Everything was perfect. Some would say, too good. suspicisouly good. Can't stop wearing this shirt, it's like a spell. 1 star for witchcraft.",
    user_id: 2,
    product_id: 2,
)
Review.create(
    rating: 1,
    text: "Not waterproof! grrr!",
    user_id: 2,
    product_id: 23,
)
Review.create(
    rating: 4,
    text: "My dog accidentally order this but I think I'll keep it",
    user_id: 2,
    product_id: 15,
)
Review.create(
    rating: 3,
    text: "huh?",
    user_id: 2,
    product_id: 16,
)
Review.create(
    rating: 5,
    text: "I can't stop buying these, serisouly!",
    user_id: 2,
    product_id: 12,
)
Review.create(
    rating: 5,
    text: "Wooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooow. ",
    user_id: 2,
    product_id: 12,
)
Review.create(
    rating: 5,
    text: "New slides got me feeling like I'm gogh'in places.",
    user_id: 2,
    product_id: 36,
)
Review.create(
    rating: 2,
    text: "it's perfect! Nothing to complain about! upsetting!",
    user_id: 2,
    product_id: 36,
)
Review.create(
    rating: 5,
    text: "f#$%Eing love this.",
    user_id: 2,
    product_id: 3,
)
Review.create(
    rating: 5,
    text: "f#$%Eing love this.",
    user_id: 2,
    product_id: 3,
)
Review.create(
    rating: 1,
    text: "UUUUUUHH, YA.",
    user_id: 2,
    product_id: 7,
)
Review.create(
    rating: 5,
    text: "I love it so much I hate it.",
    user_id: 2,
    product_id: 4,
)
Review.create(
    rating: 4,
    text: "Shirt fits a little too well. 4.",
    user_id: 2,
    product_id: 10,
)
Review.create(
    rating: 5,
    text: "Woah woah we woah",
    user_id: 3,
    product_id: 7,
)
Review.create(
    rating: 4,
    text: "perfect for that azy day vibe",
    user_id: 3,
    product_id: 17,
)
Review.create(
    rating: 5,
    text: "MY STRANG ADDICTIONS: GOGH.",
    user_id: 3,
    product_id: 31,
)
Review.create(
    rating: 4,
    text: "Favorite painting, I love star gazing.",
    user_id: 3,
    product_id: 1,
)
Review.create(
    rating: 5,
    text: "Probably the most comfortable slides I've ever owned.",
    user_id: 3,
    product_id: 35,
)
Review.create(
    rating: 6,
    text: "Oops. I. Bought it again. - to the tune of brittany spears.",
    user_id: 3,
    product_id: 1,
)
Review.create(
    rating: 5,
    text: "Probably the most comfortable slides I've ever owned.",
    user_id: 3,
    product_id: 1,
)
Review.create(
    rating: 5,
    text: "so good.",
    user_id: 3,
    product_id: 8,
)

puts "seeding cart_items"

CartItem.create(
    user_id: 1,
    product_id: 1,
    quantity: 1
)
CartItem.create(
    user_id: 1,
    product_id: 3,
    quantity: 1
)
CartItem.create(
    user_id: 1,
    product_id: 33,
    quantity: 3
)
CartItem.create(
    user_id: 1,
    product_id: 24,
    quantity: 1
)
CartItem.create(
    user_id: 1,
    product_id: 7,
    quantity: 1
)
CartItem.create(
    user_id: 2,
    product_id: 2,
    quantity: 2
)
CartItem.create(
    user_id: 2,
    product_id: 23,
    quantity: 1
)
CartItem.create(
    user_id: 2,
    product_id: 16,
    quantity: 1
)
CartItem.create(
    user_id: 2,
    product_id: 11,
    quantity: 1
)
CartItem.create(
    user_id: 2,
    product_id: 27,
    quantity: 1
)


CartItem.create(
    user_id: 3,
    product_id: 13,
    quantity: 2
)
CartItem.create(
    user_id: 3,
    product_id: 25,
    quantity: 1
)


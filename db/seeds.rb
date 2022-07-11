User.create(
    first: "Phil", 
    last: "Zukowski", 
    admin: true, 
    email: "phillup.zukowski@gmail.com", 
    stripe_email: "",
    stripe_token: "",
    customer_id: "cus_M1ab5enK5HKsVO",
    password: "password"
  )
  
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

  Order.create(
      user_id: 1,
      total: 60,
      payment_id: 1
  )

  OrderItem.create(
      order_id: 1,
      product_id: 1
  )
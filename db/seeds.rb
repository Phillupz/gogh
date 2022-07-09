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
      image: "https://i.ibb.co/199qZVv/starry-night.png",
      category: "T-Shirt",
      price: 60,
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
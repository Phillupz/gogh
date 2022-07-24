puts 'seeding users'

users = [
    {
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
    },
    {
        first: "Chad", 
        last: "Brake",
        street: "70 Leonard Dr",
        apt: "",
        city: "June Lake",
        state: "California",
        country: "United States",
        zip: 93529,
        admin: true, 
        email: "brake.chad@gmail.com", 
        password: "password1"
    },
    {
        first: "Bev", 
        last: "Davis", 
        street: "333 Sum Ware Cir",
        apt: "2",
        city: "Robbins",
        state: "Illinois",
        country: "United States",
        zip: 14209,
        admin: true, 
        email: "dev.b@gmail.com", 
        password: "password2"
    }
]

users.each do |user|
    User.create(user)
end

  products = [  
    {
        name: "Starry Night",
        description_1: "Elevate any casual outfit with the Men's Premium Heavyweight Tee. This durable yet soft tee is made of ring-spun cotton and has a classy, structured fit thanks to its heavyweight material. Layer the t-shirt with a jacket or wear it on its own and create an effortlessly cool look.",
        description_2: "Vincent van Gogh painted Starry Night in 1889 during his stay at the asylum of Saint-Paul-de-Mausole near Saint-Rémy-de-Provence. Van Gogh lived well in the hospital; he was allowed more freedom than any of the other patients. If attended, he could leave the hospital grounds; he was allowed to paint, read, and withdraw into his own room. He was even given a studio. While he suffered from the occasional relapse into paranoia and fits - officially he had been diagnosed with epileptic fits - it seemed his mental health was recovering.",
        description_3: "Unfortunately, he relapsed. He began to suffer hallucination and have thoughts of suicide as he plunged into depression. Accordingly, there was a tonal shift in his work. He returned to incorporating the darker colors from the beginning of his career and Starry Night is a wonderful example of that shift. Blue dominates the painting, blending hills into the sky. The little village lays at the base in the painting in browns, grays, and blues. Even though each building is clearly outlined in black, the yellow and white of the stars and the moon stand out against the sky, drawing the eyes to the sky. They are the big attention grabber of the painting.",
        piece_image: "https://i.ibb.co/b3mvtS9/starry-night.png",
        image: "https://i.ibb.co/chqvqG3/starry-night.png",
        category: "T-Shirts",
        price: 40
    },
    {
        name: "Basket Of Apples",
        description_1: "Elevate any casual outfit with the Men's Premium Heavyweight Tee. This durable yet soft tee is made of ring-spun cotton and has a classy, structured fit thanks to its heavyweight material. Layer the t-shirt with a jacket or wear it on its own and create an effortlessly cool look.",
        description_2: "In a letter to his brother Theo, Vincent explained exactly why he had chosen certain color contrasts in this still life. For example, he used red accents in the apples alongside 'greenish things'. Red and green form a pair of what are known as complementary colors. Pairs like these form the basis of the color theory of Eugène Delacroix (1798-1863), an artist Van Gogh greatly admired.",
        description_3: "Vincent studied handbooks of color and applied what he learned in his art. Theo was also gradually learning more about the subject, as shown by Vincent's somewhat cynical remark: 'well observed, but, did you come up with that on your own???'.",
        piece_image: "https://i.ibb.co/jw8bd5d/basket-of-apples.png",
        image: "https://i.ibb.co/P4XpL3S/basket-of-apples.png",
        category: "T-Shirts",
        price: 40
    },
    {
        name: "Blossoming Almond Tree",
        description_1: "Elevate any casual outfit with the Men's Premium Heavyweight Tee. This durable yet soft tee is made of ring-spun cotton and has a classy, structured fit thanks to its heavyweight material. Layer the t-shirt with a jacket or wear it on its own and create an effortlessly cool look.",
        description_2: "Large blossom branches like this against a blue sky were one of Van Gogh's favorite subjects. Almond trees flower early in the spring making them a symbol of new life. Van Gogh borrowed the subject, the bold outlines and the positioning of the tree in the picture plane from Japanese printmaking.",
        description_3: "The painting was a gift for his brother Theo and sister-in-law Jo, who had just had a baby son, Vincent Willem. In the letter announcing the new arrival, Theo wrote: 'As we told you, we'll name him after you, and I'm making the wish that he may be as determined and as courageous as you. Unsurprisingly, it was this work that remained closest to the hearts of the Van Gogh family. Vincent Willem went on to found the Van Gogh Museum.",
        piece_image: "https://i.ibb.co/rd5bLfQ/blossoming-almond-tree.png",
        image: "https://i.ibb.co/RGFK8QD/blossoming-almond-tree.png",
        category: "T-Shirts",
        price: 40
    },
    {
        name: "Cypresses",
        description_1: "Elevate any casual outfit with the Men's Premium Heavyweight Tee. This durable yet soft tee is made of ring-spun cotton and has a classy, structured fit thanks to its heavyweight material. Layer the t-shirt with a jacket or wear it on its own and create an effortlessly cool look.",
        description_2: "The asylum of Saint-Remy was situated in beautiful countryside peppered with olive, almond and cypress trees and surrounded by Van Gogh's favorite wheat field. The Alpilles mountains loomed in the distance, and several miles away was the small town of Saint-Remy that boosted a primarily agricultural community. Initially, Van Gogh was allowed to paint in the asylum garden, and he painted the view of a wheat field from his window, but later he could go out into the countryside when accompanied by an asylum staff member.",
        description_3: "There is a lyrical quality to this painting that does not reflect the artist's troubled frame of mind. His palette is bright and though strong, is less intense and strident than many of his works done at around this time. His experiments with stylization are evident, and this quality of decorative pattern manifested through his brushstrokes was one that was very evident in these paintings done at the end of his life. There is a rhythm to the brushwork that is full of short swirling strokes that are repeated through the tree, foliage and sky, and the effect is one of great freedom.",
        piece_image: "https://i.ibb.co/1vvX87p/cypresses.png",
        image: "https://i.ibb.co/Kj1DyMD/cypresses.png",
        category: "T-Shirts",
        price: 40
    },
    {
        name: "Irises",
        description_1: "Elevate any casual outfit with the Men's Premium Heavyweight Tee. This durable yet soft tee is made of ring-spun cotton and has a classy, structured fit thanks to its heavyweight material. Layer the t-shirt with a jacket or wear it on its own and create an effortlessly cool look.",
        description_2: "On May 8, 1889, Vincent Van Gogh committed himself to the asylum at Saint Paul-de-Mausole in Saint-Remy, France after many instances of hospitalization and self-mutilation. During his stay he painted some 130 paintings with the surrounding gardens and clinic becoming his main subjects for painting. Among these were the famous The Starry Night and Irises.",
        description_3: "Inspired by the nature surrounding him, Van Gogh began his work on Irises within the first week of his stay at the asylum. Irises was most likely influenced by Japanese woodblock prints which were produced beginning in the 17th century. Like many artists of his time Van Gogh was influenced by Japanese works. The use of black contours in Irises is a typical element of Japanese woodblock prints. It helped to reinforce the expressive power of the painting.",
        piece_image: "https://i.ibb.co/s2zgMLp/Irises.png",
        image: "https://i.ibb.co/GdYdyP7/irises.png",
        category: "T-Shirts",
        price: 40
    },
    {
        name: "Poppies",
        description_1: "Elevate any casual outfit with the Men's Premium Heavyweight Tee. This durable yet soft tee is made of ring-spun cotton and has a classy, structured fit thanks to its heavyweight material. Layer the t-shirt with a jacket or wear it on its own and create an effortlessly cool look.",
        description_2: "The poppy flower is common to many Van Gogh Vase with Red Poppies countries but is often associated with the blooms covering expansive open fields in the South of France. This image is likely ingrained in the subconscious due to the popularity of the many Van Gogh poppy field paintings. Typically blooming in May and June, painting from what he saw in nature, Van Gogh poppies are were also late spring creations.",
        description_3: "Between the years 1886 and 1890, Vincent van Gogh completed seven different paintings featuring poppy flowers. His earliest ones were done during his time in Paris mainly of cut flowers in vases such as Vase with Red Poppies, 1886 and Vase with Cornflowers and Poppies, 1887. Van Gogh did not have money to pay models, so still-life painting became more practical. In a letter from 1886, Van Gogh wrote to the artist Horace M. Livens about how he put more emphasis on the colors in his paintings and how in using vibrant contrasting colors he is able to render life through color.",
        piece_image: "https://i.ibb.co/Tw5WCyC/poppies.png",
        image: "https://i.ibb.co/CH6Z23F/poppies.png",
        category: "T-Shirts",
        price: 40
    },
    {
        name: "Sunflowers",
        description_1: "Elevate any casual outfit with the Men's Premium Heavyweight Tee. This durable yet soft tee is made of ring-spun cotton and has a classy, structured fit thanks to its heavyweight material. Layer the t-shirt with a jacket or wear it on its own and create an effortlessly cool look.",
        description_2: "Just like other painters working at the time, Vincent made flower still lifes. But he did things a little differently. After practicing with different flowers, he chose a specific variety: the sunflower. His fellow painters thought that sunflowers were perhaps somewhat coarse and unrefined. But this is exactly what Vincent liked, and he also enjoyed painting flowers that had gone to seed. He gave sunflowers the lead role in several paintings.",
        description_3: "Vincent knew that his sunflower paintings were special. As did other people. After he died, friends brought sunflowers with them to his funeral. Sunflowers became synonymous with Vincent, just as he had hoped.",
        piece_image: "https://i.ibb.co/xLNs4F3/sunflowers.png",
        image: "https://i.ibb.co/0QtkK3m/sunflowers.png",
        category: "T-Shirts",
        price: 40
    },
    {
        name: "The Mulberry Tree",
        description_1: "Elevate any casual outfit with the Men's Premium Heavyweight Tee. This durable yet soft tee is made of ring-spun cotton and has a classy, structured fit thanks to its heavyweight material. Layer the t-shirt with a jacket or wear it on its own and create an effortlessly cool look.",
        description_2: "Van Gogh painted The Mulberry Tree in Autumn in October of 1889 less than a year before he would die. Like most of his art, it was done during a period of highs and lows, painted during a time of great self-awareness and yet surrounded by chaos. Following a fight with his fellow artist Gauguin, during which the famous ear incident occurred, Van Gogh went to stay at the Saint Paul Asylum in Saint-Remy. He was there for about a year, from May 1889 to May 1890.",
        description_3: "The Mulberry Tree shows a tree from the garden of the asylum. It is centered on the canvas and is growing alone from a rocky hillside. The ground is made up of short quick brushstrokes of white and pale browns. It creates a strong contrast to the dark green and brown of the tree trunk. To the right, you see more greens, indicating trees and growth in the distance. The leaves of the tree make up the majority of the painting, orange against the complementary color of the blue sky. It is that 'superb autumn' that gave Vincent the bright orange leaves to paint.",
        piece_image: "https://i.ibb.co/d2gX5DC/the-mulberry-tree.png",
        image: "https://i.ibb.co/D45XZ8r/the-mulberry-tree.png",
        category: "T-Shirts",
        price: 40,
    }, 
    {
        name: "Starry Night",
        description_1: "The Unisex Fashion Sweatshirt will look great as a part of a casual, trendy, or classy outfit. The sweatshirt is made of cotton and recycled polyester, ensuring top-notch quality. And thanks to the mid-weight material, this piece can be easily layered with other tops.",
        description_2: "Vincent van Gogh painted Starry Night in 1889 during his stay at the asylum of Saint-Paul-de-Mausole near Saint-Rémy-de-Provence. Van Gogh lived well in the hospital; he was allowed more freedom than any of the other patients. If attended, he could leave the hospital grounds; he was allowed to paint, read, and withdraw into his own room. He was even given a studio. While he suffered from the occasional relapse into paranoia and fits - officially he had been diagnosed with epileptic fits - it seemed his mental health was recovering.",
        description_3: "Unfortunately, he relapsed. He began to suffer hallucination and have thoughts of suicide as he plunged into depression. Accordingly, there was a tonal shift in his work. He returned to incorporating the darker colors from the beginning of his career and Starry Night is a wonderful example of that shift. Blue dominates the painting, blending hills into the sky. The little village lays at the base in the painting in browns, grays, and blues. Even though each building is clearly outlined in black, the yellow and white of the stars and the moon stand out against the sky, drawing the eyes to the sky. They are the big attention grabber of the painting.",
        piece_image: "https://i.ibb.co/b3mvtS9/starry-night.png",
        image: "https://i.ibb.co/X3Sw1DC/starry-night.png",
        category: "Crewnecks",
        price: 50
    },
    {
        name: "Basket Of Apples",
        description_1: "The Unisex Fashion Sweatshirt will look great as a part of a casual, trendy, or classy outfit. The sweatshirt is made of cotton and recycled polyester, ensuring top-notch quality. And thanks to the mid-weight material, this piece can be easily layered with other tops.",
        description_2: "In a letter to his brother Theo, Vincent explained exactly why he had chosen certain color contrasts in this still life. For example, he used red accents in the apples alongside 'greenish things'. Red and green form a pair of what are known as complementary colors. Pairs like these form the basis of the color theory of Eugène Delacroix (1798-1863), an artist Van Gogh greatly admired.",
        description_3: "Vincent studied handbooks of color and applied what he learned in his art. Theo was also gradually learning more about the subject, as shown by Vincent's somewhat cynical remark: 'well observed, but, did you come up with that on your own???'.",
        piece_image: "https://i.ibb.co/jw8bd5d/basket-of-apples.png",
        image: "https://i.ibb.co/9GDk04c/basket-of-apples.png",
        category: "Crewnecks",
        price: 50
    },
    {
        name: "Blossoming Almond Tree",
        description_1: "The Unisex Fashion Sweatshirt will look great as a part of a casual, trendy, or classy outfit. The sweatshirt is made of cotton and recycled polyester, ensuring top-notch quality. And thanks to the mid-weight material, this piece can be easily layered with other tops.",
        description_2: "Large blossom branches like this against a blue sky were one of Van Gogh's favorite subjects. Almond trees flower early in the spring making them a symbol of new life. Van Gogh borrowed the subject, the bold outlines and the positioning of the tree in the picture plane from Japanese printmaking.",
        description_3: "The painting was a gift for his brother Theo and sister-in-law Jo, who had just had a baby son, Vincent Willem. In the letter announcing the new arrival, Theo wrote: 'As we told you, we'll name him after you, and I'm making the wish that he may be as determined and as courageous as you. Unsurprisingly, it was this work that remained closest to the hearts of the Van Gogh family. Vincent Willem went on to found the Van Gogh Museum.",
        piece_image: "https://i.ibb.co/rd5bLfQ/blossoming-almond-tree.png",
        image: "https://i.ibb.co/JnM9WHN/blossoming-almond-tree.png",
        category: "Crewnecks",
        price: 50
    },
    {
        name: "Cypresses",
        description_1: "The Unisex Fashion Sweatshirt will look great as a part of a casual, trendy, or classy outfit. The sweatshirt is made of cotton and recycled polyester, ensuring top-notch quality. And thanks to the mid-weight material, this piece can be easily layered with other tops.",
        description_2: "The asylum of Saint-Remy was situated in beautiful countryside peppered with olive, almond and cypress trees and surrounded by Van Gogh's favorite wheat field. The Alpilles mountains loomed in the distance, and several miles away was the small town of Saint-Remy that boosted a primarily agricultural community. Initially, Van Gogh was allowed to paint in the asylum garden, and he painted the view of a wheat field from his window, but later he could go out into the countryside when accompanied by an asylum staff member.",
        description_3: "There is a lyrical quality to this painting that does not reflect the artist's troubled frame of mind. His palette is bright and though strong, is less intense and strident than many of his works done at around this time. His experiments with stylization are evident, and this quality of decorative pattern manifested through his brushstrokes was one that was very evident in these paintings done at the end of his life. There is a rhythm to the brushwork that is full of short swirling strokes that are repeated through the tree, foliage and sky, and the effect is one of great freedom.",
        piece_image: "https://i.ibb.co/1vvX87p/cypresses.png",
        image: "https://i.ibb.co/YhLnxpW/cypresses.png",
        category: "Crewnecks",
        price: 50
    },
    {
        name: "Irises",
        description_1: "The Unisex Fashion Sweatshirt will look great as a part of a casual, trendy, or classy outfit. The sweatshirt is made of cotton and recycled polyester, ensuring top-notch quality. And thanks to the mid-weight material, this piece can be easily layered with other tops.",
        description_2: "On May 8, 1889, Vincent Van Gogh committed himself to the asylum at Saint Paul-de-Mausole in Saint-Remy, France after many instances of hospitalization and self-mutilation. During his stay he painted some 130 paintings with the surrounding gardens and clinic becoming his main subjects for painting. Among these were the famous The Starry Night and Irises.",
        description_3: "Inspired by the nature surrounding him, Van Gogh began his work on Irises within the first week of his stay at the asylum. Irises was most likely influenced by Japanese woodblock prints which were produced beginning in the 17th century. Like many artists of his time Van Gogh was influenced by Japanese works. The use of black contours in Irises is a typical element of Japanese woodblock prints. It helped to reinforce the expressive power of the painting.",
        piece_image: "https://i.ibb.co/s2zgMLp/Irises.png",
        image: "https://i.ibb.co/5WBHBSF/irises.png",
        category: "Crewnecks",
        price: 50
    },
    {
        name: "Poppies",
        description_1: "The Unisex Fashion Sweatshirt will look great as a part of a casual, trendy, or classy outfit. The sweatshirt is made of cotton and recycled polyester, ensuring top-notch quality. And thanks to the mid-weight material, this piece can be easily layered with other tops.",
        description_2: "The poppy flower is common to many Van Gogh Vase with Red Poppies countries but is often associated with the blooms covering expansive open fields in the South of France. This image is likely ingrained in the subconscious due to the popularity of the many Van Gogh poppy field paintings. Typically blooming in May and June, painting from what he saw in nature, Van Gogh poppies are were also late spring creations.",
        description_3: "Between the years 1886 and 1890, Vincent van Gogh completed seven different paintings featuring poppy flowers. His earliest ones were done during his time in Paris mainly of cut flowers in vases such as Vase with Red Poppies, 1886 and Vase with Cornflowers and Poppies, 1887. Van Gogh did not have money to pay models, so still-life painting became more practical. In a letter from 1886, Van Gogh wrote to the artist Horace M. Livens about how he put more emphasis on the colors in his paintings and how in using vibrant contrasting colors he is able to render life through color.",
        piece_image: "https://i.ibb.co/Tw5WCyC/poppies.png",
        image: "https://i.ibb.co/PcMRtsc/poppies.png",
        category: "Crewnecks",
        price: 50
    },
    {
        name: "Sunflowers",
        description_1: "The Unisex Fashion Sweatshirt will look great as a part of a casual, trendy, or classy outfit. The sweatshirt is made of cotton and recycled polyester, ensuring top-notch quality. And thanks to the mid-weight material, this piece can be easily layered with other tops.",
        description_2: "Just like other painters working at the time, Vincent made flower still lifes. But he did things a little differently. After practicing with different flowers, he chose a specific variety: the sunflower. His fellow painters thought that sunflowers were perhaps somewhat coarse and unrefined. But this is exactly what Vincent liked, and he also enjoyed painting flowers that had gone to seed. He gave sunflowers the lead role in several paintings.",
        description_3: "Vincent knew that his sunflower paintings were special. As did other people. After he died, friends brought sunflowers with them to his funeral. Sunflowers became synonymous with Vincent, just as he had hoped.",
        piece_image: "https://i.ibb.co/xLNs4F3/sunflowers.png",
        image: "https://i.ibb.co/z67vdSp/sunflowers.png",
        category: "Crewnecks",
        price: 50
    },
    {
        name: "The Mulberry Tree",
        description_1: "The Unisex Fashion Sweatshirt will look great as a part of a casual, trendy, or classy outfit. The sweatshirt is made of cotton and recycled polyester, ensuring top-notch quality. And thanks to the mid-weight material, this piece can be easily layered with other tops.",
        description_2: "Van Gogh painted The Mulberry Tree in Autumn in October of 1889 less than a year before he would die. Like most of his art, it was done during a period of highs and lows, painted during a time of great self-awareness and yet surrounded by chaos. Following a fight with his fellow artist Gauguin, during which the famous ear incident occurred, Van Gogh went to stay at the Saint Paul Asylum in Saint-Remy. He was there for about a year, from May 1889 to May 1890.",
        description_3: "The Mulberry Tree shows a tree from the garden of the asylum. It is centered on the canvas and is growing alone from a rocky hillside. The ground is made up of short quick brushstrokes of white and pale browns. It creates a strong contrast to the dark green and brown of the tree trunk. To the right, you see more greens, indicating trees and growth in the distance. The leaves of the tree make up the majority of the painting, orange against the complementary color of the blue sky. It is that 'superb autumn' that gave Vincent the bright orange leaves to paint.",
        piece_image: "https://i.ibb.co/d2gX5DC/the-mulberry-tree.png",
        image: "https://i.ibb.co/NxjbB2H/the-mulberry-tree.png",
        category: "Crewnecks",
        price: 50
    },
    {
        name: "Starry Night",
        description_1: "Classic unisex hoodie with a 100% cotton exterior that makes this hoodie soft to the touch. With a large front pouch pocket and drawstrings in a matching color, this Unisex Heavy Blend Hoodie is a sure crowd-favorite. It’s soft, stylish, and perfect for cooler evenings.",
        description_2: "Vincent van Gogh painted Starry Night in 1889 during his stay at the asylum of Saint-Paul-de-Mausole near Saint-Rémy-de-Provence. Van Gogh lived well in the hospital; he was allowed more freedom than any of the other patients. If attended, he could leave the hospital grounds; he was allowed to paint, read, and withdraw into his own room. He was even given a studio. While he suffered from the occasional relapse into paranoia and fits - officially he had been diagnosed with epileptic fits - it seemed his mental health was recovering.",
        description_3: "Unfortunately, he relapsed. He began to suffer hallucination and have thoughts of suicide as he plunged into depression. Accordingly, there was a tonal shift in his work. He returned to incorporating the darker colors from the beginning of his career and Starry Night is a wonderful example of that shift. Blue dominates the painting, blending hills into the sky. The little village lays at the base in the painting in browns, grays, and blues. Even though each building is clearly outlined in black, the yellow and white of the stars and the moon stand out against the sky, drawing the eyes to the sky. They are the big attention grabber of the painting.",
        piece_image: "https://i.ibb.co/b3mvtS9/starry-night.png",
        image: "https://i.ibb.co/z6VxJV2/starry-night.png",
        category: "Hoodies",
        price: 60
    },
    {
        name: "Basket Of Apples",
        description_1: "Classic unisex hoodie with a 100% cotton exterior that makes this hoodie soft to the touch. With a large front pouch pocket and drawstrings in a matching color, this Unisex Heavy Blend Hoodie is a sure crowd-favorite. It’s soft, stylish, and perfect for cooler evenings.",
        description_2: "In a letter to his brother Theo, Vincent explained exactly why he had chosen certain color contrasts in this still life. For example, he used red accents in the apples alongside 'greenish things'. Red and green form a pair of what are known as complementary colors. Pairs like these form the basis of the color theory of Eugène Delacroix (1798-1863), an artist Van Gogh greatly admired.",
        description_3: "Vincent studied handbooks of color and applied what he learned in his art. Theo was also gradually learning more about the subject, as shown by Vincent's somewhat cynical remark: 'well observed, but, did you come up with that on your own???'.",
        piece_image: "https://i.ibb.co/jw8bd5d/basket-of-apples.png",
        image: "https://i.ibb.co/gMFmD7T/basket-of-apples.png",
        category: "Hoodies",
        price: 60
    },
    {
        name: "Blossoming Almond Tree",
        description_1: "Classic unisex hoodie with a 100% cotton exterior that makes this hoodie soft to the touch. With a large front pouch pocket and drawstrings in a matching color, this Unisex Heavy Blend Hoodie is a sure crowd-favorite. It’s soft, stylish, and perfect for cooler evenings.",
        description_2: "Large blossom branches like this against a blue sky were one of Van Gogh's favorite subjects. Almond trees flower early in the spring making them a symbol of new life. Van Gogh borrowed the subject, the bold outlines and the positioning of the tree in the picture plane from Japanese printmaking.",
        description_3: "The painting was a gift for his brother Theo and sister-in-law Jo, who had just had a baby son, Vincent Willem. In the letter announcing the new arrival, Theo wrote: 'As we told you, we'll name him after you, and I'm making the wish that he may be as determined and as courageous as you. Unsurprisingly, it was this work that remained closest to the hearts of the Van Gogh family. Vincent Willem went on to found the Van Gogh Museum.",
        piece_image: "https://i.ibb.co/rd5bLfQ/blossoming-almond-tree.png",
        image: "https://i.ibb.co/mGpzQr7/blossoming-almond-tree.png",
        category: "Hoodies",
        price: 60
    },
    {
        name: "Cypresses",
        description_1: "Classic unisex hoodie with a 100% cotton exterior that makes this hoodie soft to the touch. With a large front pouch pocket and drawstrings in a matching color, this Unisex Heavy Blend Hoodie is a sure crowd-favorite. It’s soft, stylish, and perfect for cooler evenings.",
        description_2: "The asylum of Saint-Remy was situated in beautiful countryside peppered with olive, almond and cypress trees and surrounded by Van Gogh's favorite wheat field. The Alpilles mountains loomed in the distance, and several miles away was the small town of Saint-Remy that boosted a primarily agricultural community. Initially, Van Gogh was allowed to paint in the asylum garden, and he painted the view of a wheat field from his window, but later he could go out into the countryside when accompanied by an asylum staff member.",
        description_3: "There is a lyrical quality to this painting that does not reflect the artist's troubled frame of mind. His palette is bright and though strong, is less intense and strident than many of his works done at around this time. His experiments with stylization are evident, and this quality of decorative pattern manifested through his brushstrokes was one that was very evident in these paintings done at the end of his life. There is a rhythm to the brushwork that is full of short swirling strokes that are repeated through the tree, foliage and sky, and the effect is one of great freedom.",
        piece_image: "https://i.ibb.co/1vvX87p/cypresses.png",
        image: "https://i.ibb.co/hCJwxDP/cypresses.png",
        category: "Hoodies",
        price: 60
    },
    {
        name: "Irises",
        description_1: "Classic unisex hoodie with a 100% cotton exterior that makes this hoodie soft to the touch. With a large front pouch pocket and drawstrings in a matching color, this Unisex Heavy Blend Hoodie is a sure crowd-favorite. It’s soft, stylish, and perfect for cooler evenings.",
        description_2: "On May 8, 1889, Vincent Van Gogh committed himself to the asylum at Saint Paul-de-Mausole in Saint-Remy, France after many instances of hospitalization and self-mutilation. During his stay he painted some 130 paintings with the surrounding gardens and clinic becoming his main subjects for painting. Among these were the famous The Starry Night and Irises.",
        description_3: "Inspired by the nature surrounding him, Van Gogh began his work on Irises within the first week of his stay at the asylum. Irises was most likely influenced by Japanese woodblock prints which were produced beginning in the 17th century. Like many artists of his time Van Gogh was influenced by Japanese works. The use of black contours in Irises is a typical element of Japanese woodblock prints. It helped to reinforce the expressive power of the painting.",
        piece_image: "https://i.ibb.co/s2zgMLp/Irises.png",
        image: "https://i.ibb.co/t3NB5k2/irises.png",
        category: "Hoodies",
        price: 60
    },
    {
        name: "Poppies",
        description_1: "Classic unisex hoodie with a 100% cotton exterior that makes this hoodie soft to the touch. With a large front pouch pocket and drawstrings in a matching color, this Unisex Heavy Blend Hoodie is a sure crowd-favorite. It’s soft, stylish, and perfect for cooler evenings.",
        description_2: "The poppy flower is common to many Van Gogh Vase with Red Poppies countries but is often associated with the blooms covering expansive open fields in the South of France. This image is likely ingrained in the subconscious due to the popularity of the many Van Gogh poppy field paintings. Typically blooming in May and June, painting from what he saw in nature, Van Gogh poppies are were also late spring creations.",
        description_3: "Between the years 1886 and 1890, Vincent van Gogh completed seven different paintings featuring poppy flowers. His earliest ones were done during his time in Paris mainly of cut flowers in vases such as Vase with Red Poppies, 1886 and Vase with Cornflowers and Poppies, 1887. Van Gogh did not have money to pay models, so still-life painting became more practical. In a letter from 1886, Van Gogh wrote to the artist Horace M. Livens about how he put more emphasis on the colors in his paintings and how in using vibrant contrasting colors he is able to render life through color.",
        piece_image: "https://i.ibb.co/Tw5WCyC/poppies.png",
        image: "https://i.ibb.co/dfVhVnC/poppies.png",
        category: "Hoodies",
        price: 60
    },
    {
        name: "Sunflowers",
        description_1: "Classic unisex hoodie with a 100% cotton exterior that makes this hoodie soft to the touch. With a large front pouch pocket and drawstrings in a matching color, this Unisex Heavy Blend Hoodie is a sure crowd-favorite. It’s soft, stylish, and perfect for cooler evenings.",
        description_2: "Just like other painters working at the time, Vincent made flower still lifes. But he did things a little differently. After practicing with different flowers, he chose a specific variety: the sunflower. His fellow painters thought that sunflowers were perhaps somewhat coarse and unrefined. But this is exactly what Vincent liked, and he also enjoyed painting flowers that had gone to seed. He gave sunflowers the lead role in several paintings.",
        description_3: "Vincent knew that his sunflower paintings were special. As did other people. After he died, friends brought sunflowers with them to his funeral. Sunflowers became synonymous with Vincent, just as he had hoped.",
        piece_image: "https://i.ibb.co/xLNs4F3/sunflowers.png",
        image: "https://i.ibb.co/YLtmNKX/sunflowers.png",
        category: "Hoodies",
        price: 60
    },
    {
        name: "The Mulberry Tree",
        description_1: "Classic unisex hoodie with a 100% cotton exterior that makes this hoodie soft to the touch. With a large front pouch pocket and drawstrings in a matching color, this Unisex Heavy Blend Hoodie is a sure crowd-favorite. It’s soft, stylish, and perfect for cooler evenings.",
        description_2: "Van Gogh painted The Mulberry Tree in Autumn in October of 1889 less than a year before he would die. Like most of his art, it was done during a period of highs and lows, painted during a time of great self-awareness and yet surrounded by chaos. Following a fight with his fellow artist Gauguin, during which the famous ear incident occurred, Van Gogh went to stay at the Saint Paul Asylum in Saint-Remy. He was there for about a year, from May 1889 to May 1890.",
        description_3: "The Mulberry Tree shows a tree from the garden of the asylum. It is centered on the canvas and is growing alone from a rocky hillside. The ground is made up of short quick brushstrokes of white and pale browns. It creates a strong contrast to the dark green and brown of the tree trunk. To the right, you see more greens, indicating trees and growth in the distance. The leaves of the tree make up the majority of the painting, orange against the complementary color of the blue sky. It is that 'superb autumn' that gave Vincent the bright orange leaves to paint.",
        piece_image: "https://i.ibb.co/d2gX5DC/the-mulberry-tree.png",
        image: "https://i.ibb.co/z5jmyYp/the-mulberry-tree.png",
        category: "Hoodies",
        price: 60
    },
    {
        name: "Starry Night",
        description_1: "These Men's Slides are perfect for enjoying the day at the beach or pool. The cushioned upper strap will keep the feet in place, and the textured footbed will guarantee comfort while the wearer’s too busy having fun by the water. Offer this summer essential shoe to customers online or get your hands on a pair of your own.",
        description_2: "Vincent van Gogh painted Starry Night in 1889 during his stay at the asylum of Saint-Paul-de-Mausole near Saint-Rémy-de-Provence. Van Gogh lived well in the hospital; he was allowed more freedom than any of the other patients. If attended, he could leave the hospital grounds; he was allowed to paint, read, and withdraw into his own room. He was even given a studio. While he suffered from the occasional relapse into paranoia and fits - officially he had been diagnosed with epileptic fits - it seemed his mental health was recovering.",
        description_3: "Unfortunately, he relapsed. He began to suffer hallucination and have thoughts of suicide as he plunged into depression. Accordingly, there was a tonal shift in his work. He returned to incorporating the darker colors from the beginning of his career and Starry Night is a wonderful example of that shift. Blue dominates the painting, blending hills into the sky. The little village lays at the base in the painting in browns, grays, and blues. Even though each building is clearly outlined in black, the yellow and white of the stars and the moon stand out against the sky, drawing the eyes to the sky. They are the big attention grabber of the painting.",
        piece_image: "https://i.ibb.co/b3mvtS9/starry-night.png",
        image: "https://i.ibb.co/bspBGxx/starry-night-slides.png",
        category: "Slides",
        price: 50
    },
    {
        name: "Basket Of Apples",
        description_1: "These Men's Slides are perfect for enjoying the day at the beach or pool. The cushioned upper strap will keep the feet in place, and the textured footbed will guarantee comfort while the wearer’s too busy having fun by the water. Offer this summer essential shoe to customers online or get your hands on a pair of your own.",
        description_2: "In a letter to his brother Theo, Vincent explained exactly why he had chosen certain color contrasts in this still life. For example, he used red accents in the apples alongside 'greenish things'. Red and green form a pair of what are known as complementary colors. Pairs like these form the basis of the color theory of Eugène Delacroix (1798-1863), an artist Van Gogh greatly admired.",
        description_3: "Vincent studied handbooks of color and applied what he learned in his art. Theo was also gradually learning more about the subject, as shown by Vincent's somewhat cynical remark: 'well observed, but, did you come up with that on your own???'.",
        piece_image: "https://i.ibb.co/jw8bd5d/basket-of-apples.png",
        image: "https://i.ibb.co/7R6JQTP/basket-of-apples-1.png",
        category: "Slides",
        price: 50
    },
    {
        name: "Blossoming Almond Tree",
        description_1: "These Men's Slides are perfect for enjoying the day at the beach or pool. The cushioned upper strap will keep the feet in place, and the textured footbed will guarantee comfort while the wearer’s too busy having fun by the water. Offer this summer essential shoe to customers online or get your hands on a pair of your own.",
        description_2: "Large blossom branches like this against a blue sky were one of Van Gogh's favorite subjects. Almond trees flower early in the spring making them a symbol of new life. Van Gogh borrowed the subject, the bold outlines and the positioning of the tree in the picture plane from Japanese printmaking.",
        description_3: "The painting was a gift for his brother Theo and sister-in-law Jo, who had just had a baby son, Vincent Willem. In the letter announcing the new arrival, Theo wrote: 'As we told you, we'll name him after you, and I'm making the wish that he may be as determined and as courageous as you. Unsurprisingly, it was this work that remained closest to the hearts of the Van Gogh family. Vincent Willem went on to found the Van Gogh Museum.",
        piece_image: "https://i.ibb.co/rd5bLfQ/blossoming-almond-tree.png",
        image: "https://i.ibb.co/1MRsvjg/Blossoming-Almond-Tree-1.png",
        category: "Slides",
        price: 50
    },
    {
        name: "Cypresses",
        description_1: "These Men's Slides are perfect for enjoying the day at the beach or pool. The cushioned upper strap will keep the feet in place, and the textured footbed will guarantee comfort while the wearer’s too busy having fun by the water. Offer this summer essential shoe to customers online or get your hands on a pair of your own.",
        description_2: "The asylum of Saint-Remy was situated in beautiful countryside peppered with olive, almond and cypress trees and surrounded by Van Gogh's favorite wheat field. The Alpilles mountains loomed in the distance, and several miles away was the small town of Saint-Remy that boosted a primarily agricultural community. Initially, Van Gogh was allowed to paint in the asylum garden, and he painted the view of a wheat field from his window, but later he could go out into the countryside when accompanied by an asylum staff member.",
        description_3: "There is a lyrical quality to this painting that does not reflect the artist's troubled frame of mind. His palette is bright and though strong, is less intense and strident than many of his works done at around this time. His experiments with stylization are evident, and this quality of decorative pattern manifested through his brushstrokes was one that was very evident in these paintings done at the end of his life. There is a rhythm to the brushwork that is full of short swirling strokes that are repeated through the tree, foliage and sky, and the effect is one of great freedom.",
        piece_image: "https://i.ibb.co/1vvX87p/cypresses.png",
        image: "https://i.ibb.co/YRCBSGz/cypresses-1.png",
        category: "Slides",
        price: 50
    },
    {
        name: "Irises",
        description_1: "These Men's Slides are perfect for enjoying the day at the beach or pool. The cushioned upper strap will keep the feet in place, and the textured footbed will guarantee comfort while the wearer’s too busy having fun by the water. Offer this summer essential shoe to customers online or get your hands on a pair of your own.",
        description_2: "On May 8, 1889, Vincent Van Gogh committed himself to the asylum at Saint Paul-de-Mausole in Saint-Remy, France after many instances of hospitalization and self-mutilation. During his stay he painted some 130 paintings with the surrounding gardens and clinic becoming his main subjects for painting. Among these were the famous The Starry Night and Irises.",
        description_3: "Inspired by the nature surrounding him, Van Gogh began his work on Irises within the first week of his stay at the asylum. Irises was most likely influenced by Japanese woodblock prints which were produced beginning in the 17th century. Like many artists of his time Van Gogh was influenced by Japanese works. The use of black contours in Irises is a typical element of Japanese woodblock prints. It helped to reinforce the expressive power of the painting.",
        piece_image: "https://i.ibb.co/s2zgMLp/Irises.png",
        image: "https://i.ibb.co/8PbnVW5/irises-1.png",
        category: "Slides",
        price: 50
    },
    {
        name: "Poppies",
        description_1: "These Men's Slides are perfect for enjoying the day at the beach or pool. The cushioned upper strap will keep the feet in place, and the textured footbed will guarantee comfort while the wearer’s too busy having fun by the water. Offer this summer essential shoe to customers online or get your hands on a pair of your own.",
        description_2: "The poppy flower is common to many Van Gogh Vase with Red Poppies countries but is often associated with the blooms covering expansive open fields in the South of France. This image is likely ingrained in the subconscious due to the popularity of the many Van Gogh poppy field paintings. Typically blooming in May and June, painting from what he saw in nature, Van Gogh poppies are were also late spring creations.",
        description_3: "Between the years 1886 and 1890, Vincent van Gogh completed seven different paintings featuring poppy flowers. His earliest ones were done during his time in Paris mainly of cut flowers in vases such as Vase with Red Poppies, 1886 and Vase with Cornflowers and Poppies, 1887. Van Gogh did not have money to pay models, so still-life painting became more practical. In a letter from 1886, Van Gogh wrote to the artist Horace M. Livens about how he put more emphasis on the colors in his paintings and how in using vibrant contrasting colors he is able to render life through color.",
        piece_image: "https://i.ibb.co/Tw5WCyC/poppies.png",
        image: "https://i.ibb.co/KWgWDkP/poppies-1.png",
        category: "Slides",
        price: 50
    },
    {
        name: "Sunflowers",
        description_1: "These Men's Slides are perfect for enjoying the day at the beach or pool. The cushioned upper strap will keep the feet in place, and the textured footbed will guarantee comfort while the wearer’s too busy having fun by the water. Offer this summer essential shoe to customers online or get your hands on a pair of your own.",
        description_2: "Just like other painters working at the time, Vincent made flower still lifes. But he did things a little differently. After practicing with different flowers, he chose a specific variety: the sunflower. His fellow painters thought that sunflowers were perhaps somewhat coarse and unrefined. But this is exactly what Vincent liked, and he also enjoyed painting flowers that had gone to seed. He gave sunflowers the lead role in several paintings.",
        description_3: "Vincent knew that his sunflower paintings were special. As did other people. After he died, friends brought sunflowers with them to his funeral. Sunflowers became synonymous with Vincent, just as he had hoped.",
        piece_image: "https://i.ibb.co/xLNs4F3/sunflowers.png",
        image: "https://i.ibb.co/zmgZjmN/sunflower-slides-1.png",
        category: "Slides",
        price: 50
    },
    {
        name: "The Mulberry Tree",
        description_1: "These Men's Slides are perfect for enjoying the day at the beach or pool. The cushioned upper strap will keep the feet in place, and the textured footbed will guarantee comfort while the wearer’s too busy having fun by the water. Offer this summer essential shoe to customers online or get your hands on a pair of your own.",
        description_2: "Van Gogh painted The Mulberry Tree in Autumn in October of 1889 less than a year before he would die. Like most of his art, it was done during a period of highs and lows, painted during a time of great self-awareness and yet surrounded by chaos. Following a fight with his fellow artist Gauguin, during which the famous ear incident occurred, Van Gogh went to stay at the Saint Paul Asylum in Saint-Remy. He was there for about a year, from May 1889 to May 1890.",
        description_3: "The Mulberry Tree shows a tree from the garden of the asylum. It is centered on the canvas and is growing alone from a rocky hillside. The ground is made up of short quick brushstrokes of white and pale browns. It creates a strong contrast to the dark green and brown of the tree trunk. To the right, you see more greens, indicating trees and growth in the distance. The leaves of the tree make up the majority of the painting, orange against the complementary color of the blue sky. It is that 'superb autumn' that gave Vincent the bright orange leaves to paint.",
        piece_image: "https://i.ibb.co/d2gX5DC/the-mulberry-tree.png",
        image: "https://i.ibb.co/M7KS8PP/the-mulberry-tree-1.png",
        category: "Slides",
        price: 50
    },
    {
        name: "Starry Night",
        description_1: "This medium size backpack has plenty of room with a big inner pocket, separate section for a 15'' laptop, front pocket, and a hidden pocket at the back for valuables. The bag is made out of a water-resistant material, which means the bag stays crisp and fresh no matter the weather.",
        description_2: "Vincent van Gogh painted Starry Night in 1889 during his stay at the asylum of Saint-Paul-de-Mausole near Saint-Rémy-de-Provence. Van Gogh lived well in the hospital; he was allowed more freedom than any of the other patients. If attended, he could leave the hospital grounds; he was allowed to paint, read, and withdraw into his own room. He was even given a studio. While he suffered from the occasional relapse into paranoia and fits - officially he had been diagnosed with epileptic fits - it seemed his mental health was recovering.",
        description_3: "Unfortunately, he relapsed. He began to suffer hallucination and have thoughts of suicide as he plunged into depression. Accordingly, there was a tonal shift in his work. He returned to incorporating the darker colors from the beginning of his career and Starry Night is a wonderful example of that shift. Blue dominates the painting, blending hills into the sky. The little village lays at the base in the painting in browns, grays, and blues. Even though each building is clearly outlined in black, the yellow and white of the stars and the moon stand out against the sky, drawing the eyes to the sky. They are the big attention grabber of the painting.",
        piece_image: "https://i.ibb.co/b3mvtS9/starry-night.png",
        image: "https://i.ibb.co/BtkSG2G/starry-night.png",
        category: "Bags",
        price: 50
    },
    {
        name: "Basket Of Apples",
        description_1: "This medium size backpack has plenty of room with a big inner pocket, separate section for a 15'' laptop, front pocket, and a hidden pocket at the back for valuables. The bag is made out of a water-resistant material, which means the bag stays crisp and fresh no matter the weather.",
        description_2: "In a letter to his brother Theo, Vincent explained exactly why he had chosen certain color contrasts in this still life. For example, he used red accents in the apples alongside 'greenish things'. Red and green form a pair of what are known as complementary colors. Pairs like these form the basis of the color theory of Eugène Delacroix (1798-1863), an artist Van Gogh greatly admired.",
        description_3: "Vincent studied handbooks of color and applied what he learned in his art. Theo was also gradually learning more about the subject, as shown by Vincent's somewhat cynical remark: 'well observed, but, did you come up with that on your own???'.",
        piece_image: "https://i.ibb.co/jw8bd5d/basket-of-apples.png",
        image: "https://i.ibb.co/fX8fhgs/basket-of-apples.png",
        category: "Bags",
        price: 50
    },
    {
        name: "Blossoming Almond Tree",
        description_1: "This medium size backpack has plenty of room with a big inner pocket, separate section for a 15'' laptop, front pocket, and a hidden pocket at the back for valuables. The bag is made out of a water-resistant material, which means the bag stays crisp and fresh no matter the weather.",
        description_2: "Large blossom branches like this against a blue sky were one of Van Gogh's favorite subjects. Almond trees flower early in the spring making them a symbol of new life. Van Gogh borrowed the subject, the bold outlines and the positioning of the tree in the picture plane from Japanese printmaking.",
        description_3: "The painting was a gift for his brother Theo and sister-in-law Jo, who had just had a baby son, Vincent Willem. In the letter announcing the new arrival, Theo wrote: 'As we told you, we'll name him after you, and I'm making the wish that he may be as determined and as courageous as you. Unsurprisingly, it was this work that remained closest to the hearts of the Van Gogh family. Vincent Willem went on to found the Van Gogh Museum.",
        piece_image: "https://i.ibb.co/rd5bLfQ/blossoming-almond-tree.png",
        image: "https://i.ibb.co/V2WfRGz/blossoming-almond-tree.png",
        category: "Bags",
        price: 50
    },
    {
        name: "Cypresses",
        description_1: "This medium size backpack has plenty of room with a big inner pocket, separate section for a 15'' laptop, front pocket, and a hidden pocket at the back for valuables. The bag is made out of a water-resistant material, which means the bag stays crisp and fresh no matter the weather.",
        description_2: "The asylum of Saint-Remy was situated in beautiful countryside peppered with olive, almond and cypress trees and surrounded by Van Gogh's favorite wheat field. The Alpilles mountains loomed in the distance, and several miles away was the small town of Saint-Remy that boosted a primarily agricultural community. Initially, Van Gogh was allowed to paint in the asylum garden, and he painted the view of a wheat field from his window, but later he could go out into the countryside when accompanied by an asylum staff member.",
        description_3: "There is a lyrical quality to this painting that does not reflect the artist's troubled frame of mind. His palette is bright and though strong, is less intense and strident than many of his works done at around this time. His experiments with stylization are evident, and this quality of decorative pattern manifested through his brushstrokes was one that was very evident in these paintings done at the end of his life. There is a rhythm to the brushwork that is full of short swirling strokes that are repeated through the tree, foliage and sky, and the effect is one of great freedom.",
        piece_image: "https://i.ibb.co/1vvX87p/cypresses.png",
        image: "https://i.ibb.co/F0yRmdK/cypresses.png",
        category: "Bags",
        price: 50
    },
    {
        name: "Irises",
        description_1: "This medium size backpack has plenty of room with a big inner pocket, separate section for a 15'' laptop, front pocket, and a hidden pocket at the back for valuables. The bag is made out of a water-resistant material, which means the bag stays crisp and fresh no matter the weather.",
        description_2: "On May 8, 1889, Vincent Van Gogh committed himself to the asylum at Saint Paul-de-Mausole in Saint-Remy, France after many instances of hospitalization and self-mutilation. During his stay he painted some 130 paintings with the surrounding gardens and clinic becoming his main subjects for painting. Among these were the famous The Starry Night and Irises.",
        description_3: "Inspired by the nature surrounding him, Van Gogh began his work on Irises within the first week of his stay at the asylum. Irises was most likely influenced by Japanese woodblock prints which were produced beginning in the 17th century. Like many artists of his time Van Gogh was influenced by Japanese works. The use of black contours in Irises is a typical element of Japanese woodblock prints. It helped to reinforce the expressive power of the painting.",
        piece_image: "https://i.ibb.co/s2zgMLp/Irises.png",
        image: "https://i.ibb.co/wYCSW4P/irises.png",
        category: "Bags",
        price: 50
    },
    {
        name: "Poppies",
        description_1: "This medium size backpack has plenty of room with a big inner pocket, separate section for a 15'' laptop, front pocket, and a hidden pocket at the back for valuables. The bag is made out of a water-resistant material, which means the bag stays crisp and fresh no matter the weather.",
        description_2: "The poppy flower is common to many Van Gogh Vase with Red Poppies countries but is often associated with the blooms covering expansive open fields in the South of France. This image is likely ingrained in the subconscious due to the popularity of the many Van Gogh poppy field paintings. Typically blooming in May and June, painting from what he saw in nature, Van Gogh poppies are were also late spring creations.",
        description_3: "Between the years 1886 and 1890, Vincent van Gogh completed seven different paintings featuring poppy flowers. His earliest ones were done during his time in Paris mainly of cut flowers in vases such as Vase with Red Poppies, 1886 and Vase with Cornflowers and Poppies, 1887. Van Gogh did not have money to pay models, so still-life painting became more practical. In a letter from 1886, Van Gogh wrote to the artist Horace M. Livens about how he put more emphasis on the colors in his paintings and how in using vibrant contrasting colors he is able to render life through color.",
        piece_image: "https://i.ibb.co/Tw5WCyC/poppies.png",
        image: "https://i.ibb.co/k6ZzgHr/poppies.png",
        category: "Bags",
        price: 50
    },
    {
        name: "Sunflowers",
        description_1: "This medium size backpack has plenty of room with a big inner pocket, separate section for a 15'' laptop, front pocket, and a hidden pocket at the back for valuables. The bag is made out of a water-resistant material, which means the bag stays crisp and fresh no matter the weather.",
        description_2: "Just like other painters working at the time, Vincent made flower still lifes. But he did things a little differently. After practicing with different flowers, he chose a specific variety: the sunflower. His fellow painters thought that sunflowers were perhaps somewhat coarse and unrefined. But this is exactly what Vincent liked, and he also enjoyed painting flowers that had gone to seed. He gave sunflowers the lead role in several paintings.",
        description_3: "Vincent knew that his sunflower paintings were special. As did other people. After he died, friends brought sunflowers with them to his funeral. Sunflowers became synonymous with Vincent, just as he had hoped.",
        piece_image: "https://i.ibb.co/xLNs4F3/sunflowers.png",
        image: "https://i.ibb.co/zmQGvdV/sunflower.png",
        category: "Bags",
        price: 50
    },
    {
        name: "The Mulberry Tree",
        description_1: "This medium size backpack has plenty of room with a big inner pocket, separate section for a 15'' laptop, front pocket, and a hidden pocket at the back for valuables. The bag is made out of a water-resistant material, which means the bag stays crisp and fresh no matter the weather.",
        description_2: "Van Gogh painted The Mulberry Tree in Autumn in October of 1889 less than a year before he would die. Like most of his art, it was done during a period of highs and lows, painted during a time of great self-awareness and yet surrounded by chaos. Following a fight with his fellow artist Gauguin, during which the famous ear incident occurred, Van Gogh went to stay at the Saint Paul Asylum in Saint-Remy. He was there for about a year, from May 1889 to May 1890.",
        description_3: "The Mulberry Tree shows a tree from the garden of the asylum. It is centered on the canvas and is growing alone from a rocky hillside. The ground is made up of short quick brushstrokes of white and pale browns. It creates a strong contrast to the dark green and brown of the tree trunk. To the right, you see more greens, indicating trees and growth in the distance. The leaves of the tree make up the majority of the painting, orange against the complementary color of the blue sky. It is that 'superb autumn' that gave Vincent the bright orange leaves to paint.",
        piece_image: "https://i.ibb.co/d2gX5DC/the-mulberry-tree.png",
        image: "https://i.ibb.co/hZ0n4NP/the-mulberry-trees.png",
        category: "Bags",
        price: 50
    }
]

products.each do |item|
    Product.create(item)
end


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

# review_arr = [
#     "Probably the most comfortable slides I've ever owned.",
#     "this is the best thing I own.",
#     "So comfy.",
#     "simply amazing",
#     "Need more",
#     "Oops. I. Bought it again. - to the tune of brittany spears.",
#     "Favorite painting, I love star gazing.",
#     "New slides got me feeling like I'm gogh'in places.",
#     "Get it to gogh",
#     "I don't own a van but when it comes to road trips, I'm always ready to go",
#     "Sooooooo niiiiicceee",
#     "really quick shipping",
#     "fit perfectly",
#     "Love this store",
#     "so dope",
#     "fresh",
# ]

# range = [1, 2, 3, 4, ]

# range.each do |item|
#     50.times do
#         Review.create(
#           rating: [4, 5].sample,
#           text: review_arr.sample,
#           user_id: [1, 2, 3].sample,
#           product_id: range.sample
#         )
#       end 
# end


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


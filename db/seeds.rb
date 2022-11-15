puts "Clearing db..."

Plant.destroy_all
Species.destroy_all
Store.destroy_all
User.destroy_all

puts "Making Species"

sp1 = Species.create(species_name: "Flower", frequency_watered: 8, care: "Need Water and Vitamens")
sp2 = Species.create(species_name: "Tree", frequency_watered: 4, care: "Water every 3 days")
sp3 = Species.create(species_name: "Pansy", frequency_watered: 9, care: "Constant Water, Check Soil Concentration")

puts "Making Stores"

s1 = Store.create(name: "Lively Root", location: "San Diego, CA", store_url: "https://www.livelyroot.com/",)
s2 = Store.create(name: "Bloomscape", location: "Netherlands", store_url: "https://bloomscape.com/",)
s3 = Store.create(name: "Southwood Garden Center", location: "Tulsa, OK", store_url: "https://southwoodgardencenter.com/",)

puts "Making Users"

u1 = User.create(first_name: "Emily", last_name: "Fernschild", username: "EFern", password_digest: "Password1")
u2 = User.create(first_name: "Jim", last_name: "Baldridge", username: "JBald", password_digest: "Password2")
u3 = User.create(first_name: "Daniel", last_name: "Boley", username: "DBole", password_digest: "Password3")
u4 = User.create(first_name: "Tristen", last_name: "Hammon", username: "THamm", password_digest: "Password4")

puts "Making Plants"

Plant.create(name: "Peace Lily", picture_url: "https://cdn.shopify.com/s/files/1/0068/4215/5090/t/115/assets/4a8f8381f9ca--pl-peace-lily-bloom-4IN1-po-grower-840997_730x.jpg?v=1625073834", last_watered: 10-14-22, user_id: u1.id, store_id: s1.id, species_id: sp1.id)
Plant.create(name: "Money Tree", picture_url: "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_money-tree_stone.jpg?ver=279410", last_watered: 10-14-22,  user_id: u2.id, store_id: s2.id, species_id: sp2.id)
Plant.create(name: "Pansy Blue Botch", picture_url: "https://n9c3v2s4.stackpathcdn.com/wp-content/uploads/product_images/product-428913-1662716134-Del10008%5E2-100x100.jpg", last_watered: 10-14-22, user_id: u3.id, store_id: s3.id, species_id: sp3.id)
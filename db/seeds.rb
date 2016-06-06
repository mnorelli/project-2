class AddInitialPlaces < ActiveRecord::Migration[5.0]
  def up
    Place.create(title: "Cozumel", location: "Cozumel, Mexico", 
      description: "Super clear blue waters and white sand beaches with cold cervesas in easy reach.  When we were there, we rented a VW Bug, as blue as the coastal waters, with the top cut off.", 
      photo_url: "http://www.carnival.com/~/media/Images/PreSales/Excursions/Ports_A-F/CZM/304167/Pictures/Cozumel%20Chankanaab%20jpg.jpg")
    Place.create(title: "First step in Africa", location: "Dar Es Salaam, Tanzania", 
      description: "From the American Embassy residence, we set off for a safari through Arusha toward Ngoro Ngoro Crater and Lake Manyara.  We took a short trip to the lovely and exotic island of Zanzibar.", 
      photo_url: "http://farm8.staticflickr.com/7001/6840860359_2afa42e715_o.jpg")
    Place.create(title: "East Africa Safari", location: "Ngoro Ngoro Crater, Tanzania",
      description: "Called 'twigga' in Ki-Swahili, giraffes were everywhere outside and inside the caldera, the largest in the world.  There are species inside the crater that evolved separately from their cousins outside.", 
      photo_url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Giraffes_Arusha_Tanzania.jpg")
  end
 
  def down
    Place.delete_all
  end

end
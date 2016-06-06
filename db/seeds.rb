class AddInitialPlaces < ActiveRecord::Migration[5.0]
  def up
    Place.create(title: "First step in Africa", location: "Dar Es Salaam, Tanzania", 
      description: "From the American Embassy residence, we set off for a safari through Arusha toward Ngoro Ngoro Crater and Lake Manyara.  We took a short trip to the lovely and exotic island of Zanzibar.", 
      photo_url: "http://farm8.staticflickr.com/7001/6840860359_2afa42e715_o.jpg")
    Place.create(title: "Mexican Sun", location: "Cozumel, Mexico", 
      description: "Super clear blue waters and white sand beaches with cold cervesas in easy reach.  When we were there, we rented a VW Bug, as blue as the coastal waters, with the top cut off.", 
      photo_url: "http://www.carnival.com/~/media/Images/PreSales/Excursions/Ports_A-F/CZM/304167/Pictures/Cozumel%20Chankanaab%20jpg.jpg")
    Place.create(title: "East Africa Safari", location: "Ngoro Ngoro Crater, Tanzania",
      description: "Tanzania is great place to see the \'big five\' of wild game, elephants, African lion, African elephant, buffalo, leopard, and rhinoceros. In the crater are species that, because of the steep caldera walls, have genetically diverged from species outside.", 
      photo_url: "http://static1.squarespace.com/static/532f46fee4b0bf79b0b9fbc6/5453ef57e4b0c4af55efa5b1/5453ef71e4b075bd75fda5b6/1414786936079/Elephant+Walking1.gif")
    Place.create(title: "The San Francisco of Canada", location: "Vancouver, British Columbia",
      description: "This city has many similarities with San Francisco, a beautiful natural setting on a bay, walkable neighborhoods, interesting inhabitants, and movie industry!", 
      photo_url: "https://res-5.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_1110,q_75,w_1920/v1/clients/vancouverbc/itineraries_72c84dca-fe8b-4ed7-8d58-881be3c43d48.jpg")
    Place.create(title: "Our Nation's Capital", location: "Washington, DC",
      description: "Living in Washington, one cannot help but be steeped in the events and locations of American history.  Colonial architecture sits side-by-side with modern offices and residential neighborhoods.", 
      photo_url: "http://www.merms.mersd.org/Pages/MERMS_Washington/084D87F5-007EA7AB.0/washington-d-c-skyline.jpg")
    Place.create(title: "Twiga",location: "Lake Manyara, Tanzania", 
      description: "Twiga means giraffe in Ki-Swahili, and there are plenty of the slow and strikingly majestic creatures at the lake.",
      photo_url:"https://upload.wikimedia.org/wikipedia/commons/2/2a/Giraffes_Arusha_Tanzania.jpg")
  end
 
  def down
    Place.delete_all
  end

end
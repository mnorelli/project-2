class Place < ActiveRecord::Base
  
  extend Geocoder::Model::ActiveRecord

  geocoded_by :location
  after_validation :geocode #fetches the coordinates

end

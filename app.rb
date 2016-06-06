class Places < Sinatra::Base

  get '/' do
    @posts = :default
    erb :home
  end

  get '/about' do
    erb :about, :layout => false
  end

  get '/contact' do
    erb :contact, :layout => false
  end

  # index
  get '/places' do
    @places = Place.all
    erb(:"places/index")
  end

  # new
  get '/places/new' do
    # @places = Place.new
    erb(:"places/new")
  end

end

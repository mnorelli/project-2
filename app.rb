class Places < Sinatra::Base

  get '/' do
    @nav = :nav_home
    @top = :jumbotron
    @posts = :default
    erb :home
  end

  get '/about' do
    @nav = :nav_about
    @top = :about
    @posts = :none
    erb :home
  end

  get '/contact' do
    @nav = :nav_contact
    @top = :contact
    @posts = :none
    erb :home
  end

  # index
  get '/places' do
    @places = Place.all
    erb(:"places/index")
  end

end

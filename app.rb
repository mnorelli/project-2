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
    @places = Place.new
    erb(:"places/new")
  end

  # create
  post '/places/:id' do
    @place = Place.new(params[:place])
    if @place.save
      redirect("/places")
    else
      erb(:"places/new")
    end
  end

  # show
  get '/places/:id' do
    @place = Place.find(params[:id])
    erb(:"places/show")
  end

  # edit
  get '/places/:id/edit' do
    @place = Place.find(params[:id])
    erb(:"places/edit")
  end

  # update
  put '/places/:id' do
    @place = Place.find(params[:id])
    if @place.update_attributes(params[:place])
      redirect("/places")
    else
      erb(:"places/edit")
    end
  end

  # delete
  delete '/places/:id/delete' do
    @place = Place.find(params[:id])
    if @place.destroy
      redirect('/places')
    else
      redirect("/places/#{@place.id}")
    end
  end
end

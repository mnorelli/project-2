class Places < Sinatra::Base

  get '/' do
    erb :home
  end

end

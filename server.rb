class Puzzle < Sinatra::Base
  get '/' do
    File.read("public/index.html")
  end
end

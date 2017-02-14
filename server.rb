class Puzzle < Sinatra::Base
  get '/' do
    File.read("index.html")
  end
end

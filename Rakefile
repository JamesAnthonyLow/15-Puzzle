HOST = "0.0.0.0"
PORT = "3000"
SERVER = "server.rb"
task :run do
  exec("shotgun -o #{HOST} -p #{PORT}")
end
task :watch do
  exec("ruby watchjavascript.rb listen")
end
task :compile do
  exec("ruby watchjavascript.rb compile")
end

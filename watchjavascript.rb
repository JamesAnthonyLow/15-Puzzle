require 'uglifier'
require 'filewatcher'
require 'json'
class JavascriptListener
  def initialize dir
    @js_dir = dir
    get_file_names
  end
  def listen
    FileWatcher.new("#{@js_dir}/*/*.js", spinner: true, interval: 0.1).watch do |f|
      compile
    end
  end
  def compile
    buffer = get_files("src")
    buffer += get_files("test")
    File.write("#{@js_dir}/build/main.js", Uglifier.compile(buffer))
  end
  private
  def get_file_names
    JSON.parse(File.open("#{@js_dir}/config.json", "r").read)
  end
  def get_files(dir)
    str = ""
    get_file_names[dir].each do |f|
      str += File.open("#{@js_dir}/#{dir}/#{f}").read if (f.length > 0)
    end
    str
  end
end

JavascriptListener.new("#{Dir.pwd}/public/js").send(ARGV[0])

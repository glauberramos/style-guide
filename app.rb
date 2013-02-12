require 'sinatra'
require 'sinatra/content_for'
require 'sinatra/reloader'
require 'slim'
require 'sass'
require 'compass'

get '/' do
    slim :index
end

get '/icons' do
    slim :icons_sample
end

get '/merge' do
    slim :merge_sample
end

get '/retrospective' do
    slim :retrospective
end

get '/retrospective2' do
    slim :retrospective2
end

get '/dashboard' do
  slim :dashboard
end

get '/download/:filename' do |filename|
  send_file "./public/#{filename}", :filename => filename, :type => 'Application/octet-stream'
end

configure do
  Compass.configuration do |config|
    config.project_path = File.dirname(__FILE__)
    config.sass_dir = 'views/stylesheets'
  end

  set :scss, Compass.sass_engine_options
end

get '/screen.css' do
	content_type 'text/css', :charset => 'utf-8'
    scss :'stylesheets/screen'
end

get '/retrospective.css' do
  content_type 'text/css', :charset => 'utf-8'
    scss :'stylesheets/retrospective'
end

get '/dashboard.css' do
  content_type 'text/css', :charset => 'utf-8'
    scss :'stylesheets/dashboard'
end
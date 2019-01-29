# coding: utf-8

require 'sequel'
require 'sinatra'
require 'parseconfig'
require 'json'

module MySpace
  CONFIG = ParseConfig.new('./config.conf')
  DB = Sequel.connect('sqlite://./mybbs.db')
  # bbs route
  class MyBBS < Sinatra::Base
    use Rack::Session::Cookie,
        key: 'rack.session',
        expire_after: 3600,
        secret: Digest::SHA256.hexdigest(rand.to_s)
    enable :method_override
    # post thread
    post '/api/v1/thread' do
      params = request.params
      DB[:threads].insert(title: params['title'],
                          description: params['description'])
    end
    # post comment
    post '/api/v1/comment' do
      params = request.params
      DB[:comments]
        .select(:comment_id, :comment)
        .where(thread_id: params['thread_id']).all.to_json
    end
    # get threads
    get '/api/v1/threads' do
      DB[:threads].select(:title).all.to_json
    end
    # get comments
    get '/api/v1/comments/:thread_id' do
      DB[:comments]
        .select(:comment).where(thread_id: params[:thread_id]).all.to_json
    end
    delete '/api/v1/thread/:thread_id' do
      DB[:thread]
        .where(thread_id: params[:thread_id]).delete
    end
    delete '/api/v1/comment/:comment_id' do
      DB[:comment]
        .where(comment_id: params[:comment_id]).delete
    end
    get '/' do
      @title = CONFIG['title']
      erb :index
    end
  end
end

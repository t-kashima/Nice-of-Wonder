#!/usr/bin/env ruby

require 'rubygems'
require 'mongo'
require 'sinatra'

db = Mongo::Connection.from_uri('mongodb://mysql:around@ds035517.mongolab.com:35517/bookmarks').db('bookmarks')

get '/' do
    "Hello"
end

get '/add' do
  title = params[:title]
  quote = params[:quote]
  url = params[:url]
  comment = params[:comment]
  @items = db.collection('items')
  @items.insert({:title => title, :quote => quote, :url => url, :comment => comment})
  "Hello, World"
end

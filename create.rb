require 'sequel'

# database
DB = Sequel.connect('sqlite://./mybbs.db')

DB.create_table!(:threads) do
  String :title
  String :description
  primary_key :thread_id
end

DB.create_table!(:users) do
  String :name
  primary_key :user_id
end

DB.create_table!(:comments) do
  String :comment
  primary_key :comment_id
  foreign_key :user_id, :user
  foreign_key :thread_id, :thread
end

DB.create_table!(:comment_routes) do
  priamry_key :comment_route_id
  foreign_key :from_comment_id, :compment, key: :comment_id
  foreign_key :to_comment_id, :comment, key: :comment_id
end

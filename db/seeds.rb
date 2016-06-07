# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.create!([
  {name: Faker::Name.name, email: "user1@test.com", password: "11111111", password_confirmation: "11111111", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2016-06-07 00:02:10", last_sign_in_at: "2016-06-07 00:02:10", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1"},
  {name: Faker::Name.name, email: "user2@test.com", password: "22222222", password_confirmation: "22222222", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2016-06-07 00:03:01", last_sign_in_at: "2016-06-07 00:03:01", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1"},
  {name: Faker::Name.name, email: "user3@test.com", password: "33333333", password_confirmation: "33333333", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2016-06-07 00:03:44", last_sign_in_at: "2016-06-07 00:03:44", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1"}
])

Post.populate(10) do |post|
  post.author_id = Author.pluck(:id)
  post.title = Populator.sentences(1)
  post.content = Populator.paragraphs(1)

  Comment.populate(15) do |comment|
    comment.author_id = Author.pluck(:id)
    comment.post_id = post.id
    comment.content = Populator.paragraphs(1)
  end
end
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
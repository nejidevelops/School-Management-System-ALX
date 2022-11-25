class User < ApplicationRecord
  has_many :courses
  has_many :posts
  
  has_secure_password
end

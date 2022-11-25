class Parent < ApplicationRecord
    has_secure_password
    has_many :students


    validates :full_name, presence: true, uniqueness: true
    validates :full_name, length: { minimum: 2 }
    
    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid' }

end

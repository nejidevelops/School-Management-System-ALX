class Student < ApplicationRecord
    has_secure_password


    belongs_to :parent
    belongs_to :subject
    belongs_to :classroom
    has_many :student_assignments
    has_many :assignments, through: :student_assignments
    has_many :student_assesments
    has_many :assessments, through: :student_assesments
   

    validates :full_name, presence: true, uniqueness: true
    validates :full_name, length: { minimum: 3 }
    
    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid' }

end

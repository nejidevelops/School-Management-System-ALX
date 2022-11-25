class Subject < ApplicationRecord
      has_many :students
      has_many :assessments
      has_many :assignments
end

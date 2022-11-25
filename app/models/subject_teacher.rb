class SubjectTeacher < ApplicationRecord

      belongs_to :teacher
      belongs_to :subject
      has_many :assessments
end

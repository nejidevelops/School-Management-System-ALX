# Have multiple foreign keys point to same user table.
# Info cited from:
# https://stackoverflow.com/questions/2166613/multiple-foreign-keys-referencing-the-same-table-in-ror

# Also made student optional so that at first, it will 
# be an "open class" that a student can find and 
# register for
class Course < ApplicationRecord
  belongs_to :student, -> { select :username, :id, :img_url }, :class_name => 'User', optional: true
  belongs_to :teacher, -> { select :username, :id, :img_url }, :class_name => 'User'
end

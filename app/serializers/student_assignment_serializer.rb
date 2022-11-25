class StudentAssignmentSerializer < ActiveModel::Serializer
  attributes :id, :score, :student, :assignment, :due_date, :subject, :subject_id

  def student
    self.object.student.full_name
  end

  def assignment
    self.object.assignment.name
  end

  def due_date
    self.object.assignment.due_date
  end

  def subject
    self.object.assignment.subject.name
  end

  def subject_id
    self.object.assignment.subject_id
  end

end

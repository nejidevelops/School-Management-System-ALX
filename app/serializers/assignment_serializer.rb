class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :due_date, :subject_id

  def subject
    self.object.subject.name
  end
end

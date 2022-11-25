class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :total, 

  def subject
    self.object.subject.name
  end
end

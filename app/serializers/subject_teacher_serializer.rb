class SubjectTeacherSerializer < ActiveModel::Serializer
  attributes :id, :subject, :teacher, :subject_id
  def subject
    self.object.subject.name
  end
  def teacher
    self.object.teacher.full_name
  end
end

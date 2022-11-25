class StudentSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :classroom_id, :parent_id, :image, :email, :admission_no, :phone_no, :teacher, :classroom, :username, :role, :subject ,:subject_id, :gender, :parent

  def classroom
    self.object.classroom.name
  end

  def teacher
    self.object.classroom.teacher.full_name
  end

  def subject
    self.object.subject.name
  end
  
  def parent
    self.object.parent.full_name
  end
  

end

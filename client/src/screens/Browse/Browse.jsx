import { useEffect, useState } from "react";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import CourseCard from "../../components/CourseCard/CourseCard";
import Search from "../../components/Search/Search";
import { getCourses } from "../../services/courses";
import { getTeachers } from "../../services/users";
import "./Browse.css";

const Browse = () => {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [valuesArray, setValuesArray] = useState([]);
  const [displayArray, setDisplayArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const courseData = await getCourses();
      const teacherData = await getTeachers();
      setCourses(courseData);
      setTeachers(teacherData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setValuesArray(courses.concat(teachers));
    setDisplayArray(courses.concat(teachers));
  }, [courses, teachers]);

  return (
    <main>
      <Search
        setDisplayArray={setDisplayArray}
        valuesArray={valuesArray}
        courses={courses}
        teachers={teachers}
      />
      <section className="courses">
        {displayArray?.map((card, index) =>
          courses.includes(card) ? (
            <CourseCard key={index} course={card} />
          ) : (
            <TeacherCard key={index} teacher={card} />
          )
        )}
      </section>
    </main>
  );
};

export default Browse;

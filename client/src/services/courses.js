import api from "./apiConfig";

export const getCourses = async () => {
  const res = await api.get("/courses");
  return res.data;
};

export const getCourse = async (id) => {
  const res = await api.get(`/courses/${id}`);
  return res.data;
};

export const createCourse = async (course) => {
  const res = await api.post(`/courses`, { course });
  return res.data;
};

export const editCourse = async (id, course) => {
  const res = await api.put(`/courses/${id}`, { course });
  return res.data;
};

export const deleteCourse = async (id) => {
  await api.delete(`/courses/${id}`);
};

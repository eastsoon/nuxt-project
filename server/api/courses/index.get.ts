import { getCourses } from "~/server/models/course";

export default defineEventHandler(async (event) => {
  const courses = getCourses();
  return courses;
});

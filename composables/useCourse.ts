import type { CourseReturn, CourseWithPath } from "~/types/course";

export const useCourse = (courseSlug: string): CourseReturn => {
  const { courses } = useCourses();
  // const course = courses.find((course) => course.courseSlug === courseSlug);
  const index = courses.findIndex((course) => course.courseSlug === courseSlug);
  const course = courses[index];
  const prevCourse = courses[index - 1];
  const nextCourse = courses[index + 1];
  return {
    course,
    prevCourse,
    nextCourse,
  };
};

import type { CourseReturn, CourseWithPath } from "~/types/course";

export const useCourse = async (courseSlug: string): Promise<CourseReturn> => {
  const { courses } = await useCourses();

  const { data, error } = await useFetch<CourseReturn>(
    `/api/courses/${courseSlug}`
  );

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  return data.value as CourseReturn;
};

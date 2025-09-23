import type { CourseWithPath } from '~/types/course';

interface CourseReturn {
    course: Maybe<CourseWithPath>;
    prevCourse: Maybe<CourseWithPath>;
    nextCourse: Maybe<CourseWithPath>;
}
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
    }
}
import { getCourse } from "~/server/models/course";

export default defineEventHandler(async (event) => {
  const { courseSlug } = getRouterParams(event);
  const courseDetail = getCourse(courseSlug as string);

  if (!courseDetail.course) {
    throw createError({
      statusCode: 500,
      statusMessage: "Server Error",
    });
  }

  return courseDetail;
});

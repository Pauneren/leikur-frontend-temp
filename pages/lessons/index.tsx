import Layout from "@components/Layout";
import LessonItem from "@components/LessonItem";
import { Lesson } from "@models/strapi-types";
import { API_URL } from "@config/index";

const LessonsPage: React.FC<{ lessons: Lesson[] }> = ({ lessons }) => {
  return (
    <Layout>
      <h1>Lessons</h1>
      {lessons.length === 0 && <h3>No lessons to show</h3>}

      {lessons.map((lesson) => (
        <LessonItem key={lesson._id} lesson={lesson} />
      ))}
    </Layout>
  );
};

export default LessonsPage;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/lessons?_sort=levelNo:ASC,lessonNo:ASC`);
  const lessons = await res.json();

  return {
    props: { lessons },
    revalidate: 1,
  };
}

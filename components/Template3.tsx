import Link from "next/link";
import Layout from "@components/Layout";
import { Page } from "@models/strapi-types";
import NavSlugs from "@models/nav-slugs";
import styles from "@styles/BasicPageTemplate.module.css";

interface Props {
  page: Page;
  navSlugs: NavSlugs;
}

const Template3: React.FC<Props> = ({ page, navSlugs }: Props) => {
  const levelKey = page.slug.split("-", 1);

  return (
    <Layout>
      <h1>This is template 3</h1>
      <h1>{page.title}</h1>

      <div className={styles.link}>
        {navSlugs.previousSlug && (
          <Link href={navSlugs.previousSlug}>
            <a className={styles.button}>Back</a>
          </Link>
        )}
      </div>
      <div className={styles.link}>
        {navSlugs.nextSlug ? (
          <Link href={navSlugs.nextSlug}>
            <a className={styles.button}>Next</a>
          </Link>
        ) : (
          <Link href={`/courses/${levelKey}`}>
            <a className={styles.button}>Go to lessons</a>
          </Link>
        )}
      </div>
    </Layout>
  );
};

export default Template3;

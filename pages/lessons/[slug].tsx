import { Page } from "@models/strapi-types";
import NavSlugs from "@models/nav-slugs";
import PageSlug from "@models/page-slug";
import Template1 from "@components/Template1";
import Template2 from "@components/Template2";
import Template3 from "@components/Template3";
import Template4 from "@components/Template4";
import TemplateMissing from "@components/TemplateMissing";
import TextWithImageAndAudio from "@components/TextWithImageAndAudio";
import TextWithImageAndVideo from "@components/TextWithImageAndVideo";
import { API_URL } from "@config/index";

interface Props {
  page: Page;
  navSlugs: NavSlugs;
}

const LessonPage: React.FC<Props> = ({ page, navSlugs }: Props) => {
  if (!page.display_template) {
    return <TemplateMissing />;
  }

  switch (page.display_template.Title) {
    case "template1":
      return <Template1 page={page} navSlugs={navSlugs} />;
    case "template2":
      return <Template2 page={page} navSlugs={navSlugs} />;
    case "template3":
      return <Template3 page={page} navSlugs={navSlugs} />;
    case "template4":
      return <Template4 page={page} navSlugs={navSlugs} />;
    case "Text With Image And Audio":
      return <TextWithImageAndAudio page={page} navSlugs={navSlugs} />;
    case "Text With Image And Video":
      return <TextWithImageAndVideo page={page} navSlugs={navSlugs} />;
    default:
      return <TemplateMissing />;
  }
};

export default LessonPage;

export async function getStaticProps(context: { params: any }) {
  const { params } = context;

  const res = await fetch(`${API_URL}/pages?slug=${params.slug}`);
  const pages = await res.json();

  const qryRes = await fetch(`${API_URL}/pages?lessonNo=${pages[0].lessonNo}`);
  const lessonPages: Page[] = await qryRes.json();

  const pageSlugs = lessonPages.map((page) => ({
    pageNo: page.pageNo,
    slug: page.slug,
  }));

  const navSlugs = {
    previousSlug: getPreviousSlug(pages[0].pageNo, pageSlugs),
    nextSlug: getNextSlug(pages[0].pageNo, pageSlugs),
  };

  return {
    props: {
      page: pages[0],
      navSlugs: navSlugs,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/pages`);
  const pages: Page[] = await res.json();

  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

function getPreviousSlug(currentPageNo: number, pageList: PageSlug[]) {
  pageList.sort((a, b) => (a.pageNo > b.pageNo ? 1 : b.pageNo > a.pageNo ? -1 : 0));

  const index = pageList.findIndex((x) => x.pageNo === currentPageNo);
  if (index > 0) {
    return `/lessons/${pageList[index - 1].slug}`;
  } else {
    return null;
  }
}

function getNextSlug(currentPageNo: number, pageList: PageSlug[]) {
  pageList.sort((a, b) => (a.pageNo > b.pageNo ? 1 : b.pageNo > a.pageNo ? -1 : 0));

  const index = pageList.findIndex((x) => x.pageNo === currentPageNo);
  if (index < pageList.length - 1) {
    return `/lessons/${pageList[index + 1].slug}`;
  } else {
    return null;
  }
}

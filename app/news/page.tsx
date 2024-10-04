import NewsList from "../_components/NewsList";
import { getNewsList } from "../_libs/microcms";

export default async function NewsPage() {
  const { contents: news } = await getNewsList();
  return <NewsList news={news} />;
}

import { create } from "domain";
import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_contents";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export default async function Home(){
const data = await getNewsList({
limit: TOP_NEWS_LIMIT,
});

return (
<>
<section className={styles.top}>
<header>
<h1 className={styles.title}>テスト</h1>
<p className={styles.description}>Next.js pageでのテスト入力です。</p>
</header>
<Image className={styles.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200}/>
</section>

<section className={styles.news}>
<h2 className={styles.newsTitle}>News</h2>
<NewsList news={data.contents} />
<div className={styles.newsLink}>
<ButtonLink href="/news">もっと見る</ButtonLink>
</div>
</section>
</>
);
}
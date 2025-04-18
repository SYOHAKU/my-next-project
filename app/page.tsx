import { create } from "domain";
import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import {News} from "@/app/_libs/microcms";

// type News = {
// id:string;
// title:string;
// category:{
//     name:string;
// };
// publishedAt:string;
// createdAt:string;
// };

const data:{
contents: News[] } = {
contents:[
{
id:"1",
title:"渋谷にオフィスを移転しました",
category:{
name:"更新情報",
},
publishedAt:"2025/03/15",
createdAt:"2025/03/15",
},
{
id:"2",
title:"当社CEOが業界リーダーTOP30に選ばれました",
category:{
name:"更新情報",
},
publishedAt:"2025/03/10",
createdAt:"2025/03/10",
},
{
id:"3",
title:"テストの記事です",
category:{
name:"更新情報",
},
publishedAt:"2025/03/01",
createdAt:"2025/03/01",
},
],
};

export default function Home(){
const sliceData = data.contents.slice(0,2);
// const sliceData:News = [];

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
<NewsList news={sliceData} />
<div className={styles.newsLink}>
<ButtonLink href="/news">もっと見る</ButtonLink>
</div>
</section>
</>
);
}
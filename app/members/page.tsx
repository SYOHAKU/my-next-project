import Image from "next/image";
import styles from "./page.module.css";

const data = {
contents:[
{
id:"1",
image:{url:"/img-member1.jpg",width:240,height:240,},
name:"デイビット・チャン",
position:"CEO",
profile:"社長らしい。とりあえずここにプロフィール文章が入ります。とりあえずここにプロフィール文章が入ります。とりあえずここにプロフィール文章が入ります。",
},
{
id:"2",
image:{url:"/img-member2.jpg",width:240,height:240,},
name:"エミリー・サンダース",
position:"COO",
profile:"COOらしい。とりあえずここにプロフィール文章が入ります。とりあえずここにプロフィール文章が入ります。とりあえずここにプロフィール文章が入ります。",
},
{
id:"3",
image:{url:"/img-member3.jpg",width:240,height:240,},
name:"ジョン・ウィルソン",
position:"CTO",
profile:"この方はCTOらしい。とりあえずここにプロフィール文章が入ります。とりあえずここにプロフィール文章が入ります。とりあえずここにプロフィール文章が入ります。",
},
],
};

export default function Page(){
return(

<div className={styles.container}>
{data.contents.length === 0 ?(
<p className={styles.empty}>メンバーが登録されていません</p>
):(
<ul>
{data.contents.map((member) => (
<li key={member.id} className={styles.list}>
<Image src={member.image.url} alt="" width={member.image.width} height={member.image.height} className={styles.iamge} />
<dl>
<dl className={styles.name}>{member.name}</dl>
<dd className={styles.position}>{member.position}</dd>
<dd className={styles.pprofile}>{member.profile}</dd>
</dl>
</li>
))}
</ul>
)}
</div>
);
}
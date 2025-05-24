import Image from "next/image";
import styes from "./index.module.css";
import {formatDate} from "@/app/_libs/utils";

type Props = {
date:string;
};

export default function Date({ date }:Props){
return (
<span className={styes.date}>
<Image src="/clock.svg" alt="" width={16} height={16} loading="eager" />
{formatDate(date)}
</span>
);
}
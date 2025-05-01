import Sheet from "@/app/_components/sheet";
import Hero from "@/app/_components/Hero";

type Props = {
children:React.Reactnode;
};

export default function RootLayout({children}:Props){
return(
<>
<Hero title="Members" sub="メンバー" />
<Sheet>{children}</Sheet>
</>
);
}
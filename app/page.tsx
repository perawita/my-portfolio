import RootLayout from "@/app/layout";
import { Navbars } from "@/app/__components/navbar";
import { Background_Globe } from "@/app/__components/background_globe";

export default function Home() {
  return (
    <RootLayout>
        <Navbars />
        <Background_Globe />
    </RootLayout>
  );
}

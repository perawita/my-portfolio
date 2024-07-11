import RootLayout from "@/app/layout";
import { Background_Meteor } from "./__components/background_meteor";
import { Background_Globe } from "@/app/__components/background_globe";

export default function Home() {
  return (
    <RootLayout>
      <Background_Meteor>
        <Background_Globe />
      </Background_Meteor>
    </RootLayout>
  );
}

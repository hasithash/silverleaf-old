import ThreeDBackground from "./components/homepage/tdbg";
import Foreground from "./components/homepage/foreground/foreground";
import PresentationScreen from "./components/homepage/presentationScreen";
import Navbar from "./components/homepage/foreground/navbar/navbar";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
      <ThreeDBackground/>
      <Foreground/>
      <Navbar/>
      <PresentationScreen/>
    </div>
  );
}
